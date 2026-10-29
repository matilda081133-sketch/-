'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ContactsForm from '@/components/ContactsForm';
import { PRICING_DIRECTIONS, PricingDirection } from '@/data/pricingData';
import { sendLeadToCRM } from '@/lib/crm';

import { PAYMENT_URL } from '@/lib/payment';

interface PricingPageClientProps {
  initialAudience?: 'citizens' | 'business';
}

export default function PricingPageClient({ initialAudience = 'citizens' }: PricingPageClientProps) {
  const [audience, setAudience] = useState<'citizens' | 'business'>(initialAudience);
  const [openCitizensAnchor, setOpenCitizensAnchor] = useState<string | null>(null);
  const [openBusinessAnchor, setOpenBusinessAnchor] = useState<string | null>(null);

    // Form state per TZ
  const [selectedDirection, setSelectedDirection] = useState<PricingDirection | null>(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const activeAnchor = audience === 'citizens' ? openCitizensAnchor : openBusinessAnchor;

  // Safe analytics helper per TZ section 8:
  // "Передавать только direction_id, audience, placement и page_type=pricing; имена, телефоны и описание ситуации в аналитику не отправлять."
  const trackEvent = (goalName: string, params?: { direction_id?: string; audience?: string; placement?: string }) => {
    try {
      if (typeof window !== 'undefined' && typeof window.trackGoal === 'function') {
        window.trackGoal(goalName, {
          page_type: 'pricing',
          ...params
        });
      }
    } catch (err) {
      console.error('Analytics error:', err);
    }
  };

  // Handle URL hash on mount & hashchange (supports direct links like /stoimost/#zemelnyj-yurist)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (!hash) return;

      const found = PRICING_DIRECTIONS.find(d => d.anchor === hash);
      if (found) {
        setAudience(found.audience);
        if (found.audience === 'citizens') {
          setOpenCitizensAnchor(found.anchor);
        } else {
          setOpenBusinessAnchor(found.anchor);
        }

        setTimeout(() => {
          const el = document.getElementById(found.anchor);
          if (el) {
            const headerOffset = 110;
            const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
              top: elementPosition - headerOffset,
              behavior: 'smooth'
            });
          }
        }, 150);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const toggleDirection = (dir: PricingDirection, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    const isCitizens = dir.audience === 'citizens';
    const currentOpen = isCitizens ? openCitizensAnchor : openBusinessAnchor;
    const isOpening = currentOpen !== dir.anchor;

    if (isCitizens) {
      setOpenCitizensAnchor(isOpening ? dir.anchor : null);
    } else {
      setOpenBusinessAnchor(isOpening ? dir.anchor : null);
    }

    if (isOpening) {
      trackEvent('pricing_direction_open', {
        direction_id: dir.anchor,
        audience: dir.audience
      });

      // Update URL hash cleanly without causing page reload
      if (typeof window !== 'undefined' && window.history && window.history.replaceState) {
        window.history.replaceState(null, '', `#${dir.anchor}`);
      }
    }
  };

  // Format phone number
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    val = val.replace(/[^\d+]/g, '');
    if (val.length > 18) val = val.substring(0, 18);
    setPhone(val);
  };

  // Form submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!phone || phone.replace(/\D/g, '').length < 10) {
      setError('Пожалуйста, укажите корректный номер телефона (не менее 10 цифр).');
      return;
    }

    if (!agree) {
      setError('Для отправки необходимо дать согласие на обработку персональных данных.');
      return;
    }

    setLoading(true);

    const dirTitle = selectedDirection ? selectedDirection.title : 'Не выбрано';
    const selectedService = selectedDirection
      ? `Расчёт стоимости по направлению ${selectedDirection.title}`
      : 'Общий расчёт стоимости';
    const audVal = selectedDirection ? selectedDirection.audience : '';

    const payload = {
      name: name.trim(),
      phone: phone.startsWith('+') ? `'${phone}` : phone,
      message: message.trim(),
      direction: dirTitle,
      selected_service: selectedService,
      audience: audVal,
      source_page: 'https://dejure-help.ru/stoimost/',
      ctaSource: 'pricing_calculator',
      page_title: 'Стоимость юридических услуг в Липецке — цены | Де-Юре',
      page_url: typeof window !== 'undefined' ? window.location.href : 'https://dejure-help.ru/stoimost/'
    };

    try {
      const result = await sendLeadToCRM(payload);
      if (result.success) {
        setLoading(false);
        setSubmitted(true);

        trackEvent('pricing_form_success', {
          direction_id: selectedDirection?.anchor,
          audience: audVal
        });

        if (typeof window !== 'undefined' && typeof window.trackGoal === 'function') {
          window.trackGoal('FORM_SUBMIT', { page: payload.page_title, cta: 'pricing_calculator' });
        }
      } else {
        throw new Error(result.error || 'Ошибка отправки в CRM');
      }
    } catch (err: any) {
      console.error('Ошибка отправки заявки:', err);
      setLoading(false);
      setError('Не удалось отправить заявку. Пожалуйста, проверьте номер телефона или свяжитесь с нами по телефону +7 (4742) 20-15-25.');
    }
  };

  // Scroll to form and optionally set direction
  const handleCalcClick = (dir?: PricingDirection, placement: string = 'accordion') => {
    if (dir) {
      setSelectedDirection(dir);
      trackEvent('pricing_calc_click', {
        direction_id: dir.anchor,
        audience: dir.audience,
        placement
      });
    } else {
      trackEvent('pricing_calc_click', {
        placement: 'hero'
      });
    }

    const formEl = document.getElementById('form') || document.getElementById('consultation');
    if (formEl) {
      const headerOffset = 100;
      const elementPosition = formEl.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - headerOffset,
        behavior: 'smooth'
      });
    }
  };

  const citizensDirections = PRICING_DIRECTIONS.filter(d => d.audience === 'citizens');
  const businessDirections = PRICING_DIRECTIONS.filter(d => d.audience === 'business');

  const renderDirectionGroup = (directions: PricingDirection[], groupAudience: 'citizens' | 'business') => {
    const isGroupActive = audience === groupAudience;

    return (
      <div
        className={`pricing-group-container ${isGroupActive ? 'group-active' : 'group-hidden'}`}
        data-audience={groupAudience}
        style={{
          display: isGroupActive ? 'flex' : 'none',
          flexDirection: 'column',
          gap: '14px'
        }}
      >
        {directions.map((dir) => {
          const isOpen = activeAnchor === dir.anchor;

          return (
            <details
              key={dir.id}
              id={dir.anchor}
              open={isOpen}
              className={`pricing-direction-card ${isOpen ? 'is-open' : ''}`}
              style={{
                border: isOpen ? '1px solid #10273B' : '1px solid rgba(16, 39, 59, 0.14)',
                borderRadius: '6px',
                backgroundColor: '#FFFFFF',
                transition: 'all 0.25s ease',
                boxShadow: isOpen ? '0 8px 24px rgba(16, 39, 59, 0.08)' : '0 2px 6px rgba(16, 39, 59, 0.03)',
                scrollMarginTop: '110px'
              }}
            >
              {/* Заголовок направления (summary) */}
              <summary
                onClick={(e) => toggleDirection(dir, e)}
                style={{
                  width: '100%',
                  padding: '18px 22px',
                  background: isOpen ? '#F4F7FA' : '#FFFFFF',
                  border: 'none',
                  borderTopLeftRadius: '6px',
                  borderTopRightRadius: '6px',
                  borderBottomLeftRadius: isOpen ? '0' : '6px',
                  borderBottomRightRadius: isOpen ? '0' : '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  textAlign: 'left',
                  cursor: 'pointer',
                  gap: '16px',
                  minHeight: '56px',
                  listStyle: 'none',
                  userSelect: 'none',
                  outline: 'none',
                  transition: 'background 0.2s ease'
                }}
              >
                <h3 style={{
                  fontSize: 'clamp(17px, 2.2vw, 20px)',
                  color: '#10273B',
                  margin: 0,
                  fontWeight: 600,
                  lineHeight: 1.3
                }}>
                  {dir.title}
                </h3>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: isOpen ? '#10273B' : 'rgba(16, 39, 59, 0.07)',
                    color: isOpen ? '#FFFFFF' : '#10273B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 0.25s ease'
                  }}
                  aria-hidden="true"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease'
                    }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </summary>

              {/* Содержимое: таблица услуг (всегда в DOM/HTML для SEO и noscript) */}
              <div style={{ padding: '22px', borderTop: '1px solid rgba(16, 39, 59, 0.1)' }}>
                {/* Десктопная таблица услуг */}
                <div className="pricing-table-desktop">
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '2px solid rgba(16, 39, 59, 0.15)', textAlign: 'left' }}>
                        <th style={{ padding: '10px 14px', fontSize: '14px', color: '#718096', fontWeight: 600, width: '40%' }}>Услуга</th>
                        <th style={{ padding: '10px 14px', fontSize: '14px', color: '#718096', fontWeight: 600, width: '18%', textAlign: 'right' }}>Стоимость</th>
                        <th style={{ padding: '10px 14px', fontSize: '14px', color: '#718096', fontWeight: 600, width: '42%' }}>Объём и границы</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dir.services.map((svc, sIdx) => (
                        <tr key={sIdx} style={{ borderBottom: sIdx === dir.services.length - 1 ? 'none' : '1px solid rgba(16, 39, 59, 0.08)' }}>
                          <td style={{ padding: '14px', fontSize: '16px', fontWeight: 600, color: '#10273B', verticalAlign: 'top' }}>
                            {svc.name}
                          </td>
                          <td style={{ padding: '14px', fontSize: '16px', fontWeight: 700, color: '#10273B', whiteSpace: 'nowrap', textAlign: 'right', verticalAlign: 'top' }}>
                            {svc.price}
                          </td>
                          <td style={{ padding: '14px', fontSize: '14px', color: '#4A5568', lineHeight: 1.5, verticalAlign: 'top' }}>
                            {svc.scope}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Мобильный список услуг (<= 768px) */}
                <div className="pricing-table-mobile">
                  {dir.services.map((svc, sIdx) => (
                    <div
                      key={sIdx}
                      style={{
                        padding: '16px 0',
                        borderBottom: sIdx === dir.services.length - 1 ? 'none' : '1px solid rgba(16, 39, 59, 0.1)'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '8px' }}>
                        <div style={{ fontSize: '16px', fontWeight: 600, color: '#10273B', lineHeight: 1.35 }}>
                          {svc.name}
                        </div>
                        <div style={{ fontSize: '16px', fontWeight: 700, color: '#10273B', whiteSpace: 'nowrap', flexShrink: 0 }}>
                          {svc.price}
                        </div>
                      </div>
                      <div style={{ fontSize: '14px', color: '#4A5568', lineHeight: 1.5 }}>
                        {svc.scope}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Уточнение под таблицей */}
                {dir.clarification && (
                  <div style={{
                    marginTop: '20px',
                    padding: '14px 18px',
                    backgroundColor: '#F8F9FA',
                    borderLeft: '3px solid var(--color-primary, #C29557)',
                    borderRadius: '2px',
                    fontSize: '14px',
                    lineHeight: 1.55,
                    color: '#4A5568'
                  }}>
                    {dir.clarification}
                  </div>
                )}

                {/* Кнопки действий направления */}
                <div style={{
                  marginTop: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '16px',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(16, 39, 59, 0.08)'
                }}>
                  <button
                    type="button"
                    onClick={() => handleCalcClick(dir, 'direction_card')}
                    className="btn btn-primary"
                    style={{
                      padding: '12px 24px',
                      fontSize: '15px',
                      fontWeight: 600,
                      minHeight: '44px',
                      cursor: 'pointer'
                    }}
                  >
                    {dir.mainButtonText || 'Рассчитать стоимость моей задачи'}
                  </button>

                  <a
                    href={dir.hubUrl}
                    onClick={() => {
                      trackEvent('pricing_hub_click', {
                        direction_id: dir.anchor,
                        audience: dir.audience
                      });
                    }}
                    style={{
                      fontSize: '15px',
                      fontWeight: 600,
                      color: '#10273B',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '8px 0'
                    }}
                    className="pricing-hub-link"
                  >
                    <span>{dir.secondaryLinkText || 'Подробнее об услугах направления'}</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </details>
          );
        })}
      </div>
    );
  };

  return (
    <div className="pricing-page">
      {/* 2. Первый экран (Hero) */}
      <section className="pricing-hero" style={{ background: '#F8F9FA', borderBottom: '1px solid rgba(16, 39, 59, 0.08)', padding: 'clamp(36px, 5vw, 64px) 0' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{
            fontSize: 'clamp(28px, 4.2vw, 46px)',
            fontFamily: 'var(--font-serif)',
            color: '#10273B',
            lineHeight: 1.2,
            margin: '0 0 18px 0',
            fontWeight: 700
          }}>
            Стоимость юридических услуг в Липецке
          </h1>
          <p style={{
            fontSize: 'clamp(16px, 2vw, 19px)',
            lineHeight: 1.6,
            color: '#4A5568',
            maxWidth: '780px',
            margin: '0 auto 28px auto'
          }}>
            Выберите направление и посмотрите стоимость отдельных услуг. Чтобы рассчитать вашу задачу целиком, уточним обстоятельства, необходимые действия и объём документов.
          </p>
          <div>
            <button
              type="button"
              onClick={() => handleCalcClick(undefined, 'hero')}
              className="btn btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px 36px',
                fontSize: '16px',
                fontWeight: 600,
                minHeight: '48px',
                cursor: 'pointer'
              }}
            >
              Рассчитать стоимость моей задачи
            </button>

            {/* Якорные ссылки под кнопкой первого экрана per TZ п. 2 */}
            <div style={{
              display: 'flex',
              gap: '24px',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '18px',
              flexWrap: 'wrap'
            }}>
              <a
                href="#usloviya"
                style={{
                  fontSize: '14.5px',
                  color: '#10273B',
                  textDecoration: 'underline',
                  textUnderlineOffset: '4px',
                  fontWeight: 500,
                  opacity: 0.88,
                  transition: 'opacity 0.2s ease'
                }}
              >
                Условия работы и оплаты ↓
              </a>
              <a
                href="#oplata"
                style={{
                  fontSize: '14.5px',
                  color: '#10273B',
                  textDecoration: 'underline',
                  textUnderlineOffset: '4px',
                  fontWeight: 500,
                  opacity: 0.88,
                  transition: 'opacity 0.2s ease'
                }}
              >
                Оплатить согласованные услуги ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Основной блок прайса */}
      <section className="pricing-main-section" style={{ padding: 'clamp(44px, 6vw, 76px) 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1040px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h2 style={{
              fontSize: 'clamp(26px, 3.5vw, 36px)',
              fontFamily: 'var(--font-serif)',
              color: '#10273B',
              margin: '0 0 12px 0',
              fontWeight: 700
            }}>
              Цены по направлениям
            </h2>
            <p style={{
              fontSize: '16px',
              color: '#4A5568',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: 1.55
            }}>
              У каждой позиции указан оплачиваемый объём. Цена «от» — минимальная стоимость этой услуги; итог зависит от сложности и объёма работы.
            </p>
          </div>

          {/* Переключатель Гражданам / Бизнесу */}
          <div
            role="tablist"
            aria-label="Выбор аудитории прайса"
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              marginBottom: '36px'
            }}
          >
            <button
              type="button"
              role="tab"
              aria-selected={audience === 'citizens'}
              onClick={() => setAudience('citizens')}
              style={{
                flex: '0 1 200px',
                minHeight: '46px',
                padding: '12px 24px',
                fontSize: '16px',
                fontWeight: 600,
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                border: audience === 'citizens' ? '1px solid #10273B' : '1px solid rgba(16, 39, 59, 0.2)',
                backgroundColor: audience === 'citizens' ? '#10273B' : '#F8F9FA',
                color: audience === 'citizens' ? '#FFFFFF' : '#10273B'
              }}
            >
              Гражданам ({citizensDirections.length})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={audience === 'business'}
              onClick={() => setAudience('business')}
              style={{
                flex: '0 1 200px',
                minHeight: '46px',
                padding: '12px 24px',
                fontSize: '16px',
                fontWeight: 600,
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                border: audience === 'business' ? '1px solid #10273B' : '1px solid rgba(16, 39, 59, 0.2)',
                backgroundColor: audience === 'business' ? '#10273B' : '#F8F9FA',
                color: audience === 'business' ? '#FFFFFF' : '#10273B'
              }}
            >
              Бизнесу ({businessDirections.length})
            </button>
          </div>

          {/* Списки направлений (оба присутствуют в DOM для SEO и noscript) */}
          <div className="pricing-accordion">
            {renderDirectionGroup(citizensDirections, 'citizens')}
            {renderDirectionGroup(businessDirections, 'business')}
          </div>
        </div>
      </section>

      {/* 4. ДОПОЛНЕНИЯ СТРАНИЦЫ СТОИМОСТИ (ТЗ 29 октября 2026) */}

      {/* Раздел 3 ТЗ: От первого обращения до договора */}
      <section
        id="usloviya"
        className="pricing-stages-section"
        style={{
          padding: 'clamp(52px, 6.5vw, 84px) 0',
          background: 'var(--color-surface, #F8F9FA)',
          borderBottom: '1px solid var(--color-border, rgba(16, 39, 59, 0.08))',
          scrollMarginTop: '110px'
        }}
      >
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <span style={{ color: 'var(--color-gold, #C29557)', fontWeight: 600, textTransform: 'uppercase', fontSize: '13px', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>
              Этапы взаимодействия
            </span>
            <h2 style={{
              fontSize: 'clamp(26px, 3.4vw, 36px)',
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-deep-blue, #10273B)',
              margin: '0 0 14px 0',
              fontWeight: 700,
              lineHeight: 1.25
            }}>
              От первого обращения до договора
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary, #4A5568)', margin: 0, maxWidth: '680px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
              Четыре последовательных шага от первого обращения до согласования условий и начала работы
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px'
          }}>
            {[
              {
                num: '01',
                tag: 'ПЕРВИЧНЫЙ КОНТАКТ',
                title: 'Первичное обращение',
                text: 'Вы сообщаете суть вопроса. Сотрудник компании уточняет обстоятельства, запрашивает необходимые документы и организует дальнейшее общение. Выяснение сути обращения и подбор специалиста бесплатны.'
              },
              {
                num: '02',
                tag: 'АНАЛИЗ ЗАДАЧИ',
                title: 'Разбор задачи',
                text: 'Профильный юрист знакомится с ситуацией и определяет, какая помощь требуется: консультация, анализ документов, подготовка обращения, переговоры или представительство. Если разбор требует платной работы, её объём и стоимость согласуются заранее.'
              },
              {
                num: '03',
                tag: 'ПРОЗРАЧНЫЙ РАСЧЁТ',
                title: 'Согласование стоимости',
                text: 'Определяем необходимые действия, объём документов, территорию работы и необходимость выездов. Консультация, подготовка документа и представительство — самостоятельные услуги. Их цены не складываются автоматически в обязательный пакет.'
              },
              {
                num: '04',
                tag: 'НАЧАЛО РАБОТЫ',
                title: 'Заключение договора',
                text: 'До начала согласованных работ фиксируем их состав, стоимость и порядок оплаты в договоре. Дополнительные действия и расходы согласуем отдельно.'
              }
            ].map((step, idx) => (
              <div
                key={idx}
                className="usp-card"
                style={{
                  background: '#FFFFFF',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '28px 24px',
                  border: '1px solid rgba(16, 39, 59, 0.1)',
                  boxShadow: '0 4px 16px rgba(16, 39, 59, 0.04)'
                }}
              >
                <div className="usp-accent" />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span style={{ fontSize: '11px', letterSpacing: '0.1em', color: 'var(--color-gold, #C29557)', fontWeight: 700, textTransform: 'uppercase' }}>
                    {step.tag}
                  </span>
                  <span style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-primary, #C29557)', fontFamily: 'var(--font-serif)' }}>
                    {step.num}
                  </span>
                </div>
                <h3 style={{ fontSize: '19px', color: 'var(--color-deep-blue, #10273B)', margin: '0 0 12px 0', fontFamily: 'var(--font-serif)', fontWeight: 700, lineHeight: 1.3 }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary, #4A5568)', lineHeight: 1.6, margin: 0 }}>
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Раздел 4 ТЗ: Консультация и изучение документов */}
      <section
        className="pricing-consultation-section"
        style={{
          padding: 'clamp(52px, 6.5vw, 84px) 0',
          background: '#FFFFFF',
          borderBottom: '1px solid var(--color-border, rgba(16, 39, 59, 0.08))'
        }}
      >
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <span style={{ color: 'var(--color-gold, #C29557)', fontWeight: 600, textTransform: 'uppercase', fontSize: '13px', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>
              Первичный разбор ситуации
            </span>
            <h2 style={{
              fontSize: 'clamp(26px, 3.4vw, 36px)',
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-deep-blue, #10273B)',
              margin: '0 0 14px 0',
              fontWeight: 700,
              lineHeight: 1.25
            }}>
              Консультация и изучение документов
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary, #4A5568)', margin: 0, maxWidth: '680px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
              Правила проведения устных консультаций, анализа материалов и зачёта оплаты
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            marginBottom: '28px'
          }}>
            {[
              {
                tag: 'УСТНАЯ КОНСУЛЬТАЦИЯ',
                title: 'Стоимость консультации — 2 000 ₽',
                text: 'Устная консультация для граждан продолжительностью до одного часа — 2 000 ₽. Стоимость консультаций для бизнеса и отдельных специальных задач указана в соответствующих разделах прайса.'
              },
              {
                tag: 'ЭКСПЕРТИЗА ДОКУМЕНТОВ',
                title: 'Изучение документов и ответ',
                text: 'Необходимость отдельного платного анализа зависит от вопроса и объёма материалов. До начала такой работы согласуем её состав и стоимость. Письменный ответ можно заказать отдельно; цену и срок подготовки определим заранее.'
              },
              {
                tag: 'ФИНАНСОВЫЙ ЗАЧЁТ',
                title: 'Зачёт оплаты в дальнейшую работу',
                text: 'Если после консультации или анализа документов вы заключаете договор на дальнейшую работу по этому вопросу, внесённая оплата засчитывается в стоимость договора.'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="usp-card"
                style={{
                  background: 'var(--gradient-cream, #FFFDF8)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '30px 24px',
                  border: '1px solid rgba(16, 39, 59, 0.1)',
                  boxShadow: '0 4px 16px rgba(16, 39, 59, 0.04)'
                }}
              >
                <div className="usp-accent" />
                <span style={{ fontSize: '11px', letterSpacing: '0.1em', color: 'var(--color-gold, #C29557)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '12px', display: 'block' }}>
                  {item.tag}
                </span>
                <h3 style={{ fontSize: '19px', color: 'var(--color-deep-blue, #10273B)', margin: '0 0 12px 0', fontFamily: 'var(--font-serif)', fontWeight: 700, lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary, #4A5568)', lineHeight: 1.6, margin: 0 }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            background: 'rgba(23, 50, 77, 0.03)',
            padding: '16px 20px',
            borderLeft: '4px solid var(--color-gold, #C29557)',
            fontSize: '14px',
            lineHeight: 1.6,
            color: 'var(--color-deep-blue, #10273B)',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            Запись, перенос консультации и возможность срочного приёма согласуются с сотрудником компании.
          </div>
        </div>
      </section>

      {/* Раздел 5 ТЗ: Договор и порядок оплаты — ПО ШАБЛОНУ */}
      <section
        className="pricing-contract-section"
        style={{
          padding: 'clamp(52px, 6.5vw, 84px) 0',
          background: 'var(--color-surface, #F8F9FA)',
          borderBottom: '1px solid var(--color-border, rgba(16, 39, 59, 0.08))'
        }}
      >
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <span style={{ color: 'var(--color-gold, #C29557)', fontWeight: 600, textTransform: 'uppercase', fontSize: '13px', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>
              Финансовые условия
            </span>
            <h2 style={{
              fontSize: 'clamp(26px, 3.4vw, 36px)',
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-deep-blue, #10273B)',
              margin: '0 0 14px 0',
              fontWeight: 700,
              lineHeight: 1.25
            }}>
              Договор и порядок оплаты
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary, #4A5568)', margin: 0, maxWidth: '680px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
              Прозрачные финансовые взаимоотношения, удобные способы расчёта и фиксация в договоре
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            marginBottom: '28px'
          }}>
            {[
              {
                tag: 'ОФОРМЛЕНИЕ',
                title: 'Оформление договора',
                text: 'Договор можно заключить в офисе или дистанционно через электронный документооборот. Если у вас нет ЭДО, можно организовать обмен документами почтой. Вы получаете свой экземпляр договора.'
              },
              {
                tag: 'РАСЧЁТ',
                title: 'Предоплата и этапы',
                text: 'Как правило, предоплата составляет 50% стоимости работ. Порядок внесения оставшейся суммы согласуется индивидуально. Возможность рассрочки или оплаты по этапам обсуждается до заключения договора.'
              },
              {
                tag: 'ПЛАТЕЖИ',
                title: 'Способы оплаты',
                text: 'Доступны оплата банковской картой, по QR-коду, банковским переводом и наличными. Подходящий способ и реквизиты сообщим при согласовании оплаты. Вы получите документы, подтверждающие платёж.'
              },
              {
                tag: 'ОТЧЁТНОСТЬ',
                title: 'Подтверждение работы',
                text: 'Выполненные действия и их стоимость отражаются в акте, который подписывают компания и клиент по завершении согласованного объёма помощи.'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="usp-card"
                style={{
                  background: '#FFFFFF',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '28px 24px',
                  border: '1px solid rgba(16, 39, 59, 0.1)',
                  boxShadow: '0 4px 16px rgba(16, 39, 59, 0.04)'
                }}
              >
                <div className="usp-accent" />
                <span style={{ fontSize: '11px', letterSpacing: '0.1em', color: 'var(--color-gold, #C29557)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '12px', display: 'block' }}>
                  {item.tag}
                </span>
                <h3 style={{ fontSize: '19px', color: 'var(--color-deep-blue, #10273B)', margin: '0 0 12px 0', fontFamily: 'var(--font-serif)', fontWeight: 700, lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary, #4A5568)', lineHeight: 1.6, margin: 0 }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            background: 'rgba(23, 50, 77, 0.03)',
            padding: '16px 20px',
            borderLeft: '4px solid var(--color-primary, #C29557)',
            fontSize: '14px',
            lineHeight: 1.6,
            color: 'var(--color-deep-blue, #10273B)'
          }}>
            Адвокатская помощь оказывается независимым адвокатом по отдельному соглашению с доверителем. Условия участия, вознаграждение и порядок оплаты согласуются с адвокатом.
          </div>
        </div>
      </section>

      {/* Разделы 6 и 7 ТЗ: Дополнительные расходы и Связь с юристом — ОРГАНИЧНОЕ ОФОРМЛЕНИЕ В ДВУХКОЛОНОЧНОМ ШАБЛОНЕ */}
      <section
        className="pricing-extra-and-comm-section"
        style={{
          padding: 'clamp(52px, 6.5vw, 84px) 0',
          background: '#FFFFFF',
          borderBottom: '1px solid var(--color-border, rgba(16, 39, 59, 0.08))'
        }}
      >
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            
            {/* Карточка 1: Дополнительные расходы */}
            <div
              className="usp-card"
              style={{
                background: 'var(--gradient-cream, #FFFDF8)',
                border: '1px solid rgba(16, 39, 59, 0.1)',
                padding: 'clamp(28px, 3.5vw, 36px)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 16px rgba(16, 39, 59, 0.04)'
              }}
            >
              <div className="usp-accent" />
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <span style={{ fontSize: '11px', letterSpacing: '0.1em', color: 'var(--color-gold, #C29557)', fontWeight: 700, textTransform: 'uppercase' }}>
                  Прозрачность расчётов
                </span>
              </div>
              <h2 style={{
                fontSize: 'clamp(22px, 2.5vw, 26px)',
                fontFamily: 'var(--font-serif)',
                color: 'var(--color-deep-blue, #10273B)',
                margin: '0 0 16px 0',
                lineHeight: 1.3
              }}>
                Дополнительные расходы
              </h2>
              <p style={{ color: 'var(--color-text-secondary, #4A5568)', fontSize: '15px', lineHeight: 1.65, margin: '0 0 20px 0' }}>
                Госпошлины, нотариальные действия и оформление доверенности, экспертизы, командировки и другие необходимые расходы по делу оплачиваются отдельно от вознаграждения за юридическую работу.
              </p>
              <div style={{
                marginTop: 'auto',
                padding: '14px 16px',
                background: 'rgba(16, 39, 59, 0.04)',
                borderLeft: '3px solid var(--color-gold, #C29557)',
                fontSize: '14px',
                lineHeight: 1.55,
                color: 'var(--color-deep-blue, #10273B)'
              }}>
                Их необходимость и порядок оплаты предварительно согласуем с вами. Если требуется выезд в другой город, отдельно обсудим связанные с ним расходы. Возможные альтернативы выезду рассматриваются с учётом задачи.
              </div>
            </div>

            {/* Карточка 2: Как вы будете узнавать о ходе дела */}
            <div
              className="usp-card"
              style={{
                background: 'var(--gradient-cream, #FFFDF8)',
                border: '1px solid rgba(16, 39, 59, 0.1)',
                padding: 'clamp(28px, 3.5vw, 36px)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 16px rgba(16, 39, 59, 0.04)'
              }}
            >
              <div className="usp-accent" />
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <span style={{ fontSize: '11px', letterSpacing: '0.1em', color: 'var(--color-gold, #C29557)', fontWeight: 700, textTransform: 'uppercase' }}>
                  Прямое информирование
                </span>
              </div>
              <h2 style={{
                fontSize: 'clamp(22px, 2.5vw, 26px)',
                fontFamily: 'var(--font-serif)',
                color: 'var(--color-deep-blue, #10273B)',
                margin: '0 0 16px 0',
                lineHeight: 1.3
              }}>
                Как вы будете узнавать о ходе дела
              </h2>
              <p style={{ color: 'var(--color-text-secondary, #4A5568)', fontSize: '15px', lineHeight: 1.65, margin: '0 0 20px 0' }}>
                Вы общаетесь напрямую с выделенным юристом. В начале работы согласуете регулярность встреч и взаимодействия. Юрист объясняет ход дела, выполненные действия и дальнейшие шаги.
              </p>
              <div style={{
                marginTop: 'auto',
                padding: '14px 16px',
                background: 'rgba(16, 39, 59, 0.04)',
                borderLeft: '3px solid var(--color-deep-blue, #10273B)',
                fontSize: '14px',
                lineHeight: 1.55,
                color: 'var(--color-deep-blue, #10273B)'
              }}>
                Если возникают дополнительные вопросы, вы можете запросить информацию вне согласованного графика. Порядок взаимодействия и канал связи обсуждаются с юристом.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Раздел 8 ТЗ: Оплата согласованных услуг (#oplata) — ПО ШАБЛОНУ */}
      <section
        id="oplata"
        className="pricing-payment-section"
        style={{
          padding: 'clamp(52px, 6.5vw, 80px) 0',
          background: 'var(--color-surface, #F8F9FA)',
          borderBottom: '1px solid var(--color-border, rgba(16, 39, 59, 0.08))',
          scrollMarginTop: '110px'
        }}
      >
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
          <div
            className="usp-card"
            style={{
              background: '#FFFFFF',
              border: '1px solid rgba(16, 39, 59, 0.1)',
              padding: 'clamp(32px, 4vw, 44px)',
              position: 'relative',
              textAlign: 'center',
              boxShadow: '0 6px 20px rgba(16, 39, 59, 0.05)'
            }}
          >
            <div className="usp-accent" />
            <span style={{ color: 'var(--color-gold, #C29557)', fontWeight: 600, textTransform: 'uppercase', fontSize: '13px', letterSpacing: '0.1em', display: 'block', marginBottom: '10px' }}>
              Безналичный расчёт
            </span>
            <h2 style={{
              fontSize: 'clamp(24px, 3.2vw, 32px)',
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-deep-blue, #10273B)',
              margin: '0 0 16px 0',
              fontWeight: 700,
              lineHeight: 1.25
            }}>
              Оплата согласованных услуг
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary, #4A5568)', lineHeight: 1.6, margin: '0 auto 24px auto', maxWidth: '620px' }}>
              Уже согласовали с юристом услугу и сумму? Перейдите на платёжную страницу и оплатите по реквизитам и назначению, указанным в договоре или счёте.
            </p>
            <div style={{ marginBottom: '18px' }}>
              <a
                href={PAYMENT_URL || "tel:+74742201525"}
                target={PAYMENT_URL ? "_blank" : undefined}
                rel={PAYMENT_URL ? "noopener noreferrer" : undefined}
                onClick={(e) => {
                  trackEvent('payment_click', { placement: 'pricing_page' });
                  if (!PAYMENT_URL) {
                    e.preventDefault();
                    alert('Платёжная страница эквайринга подключается банком. Для согласования счёта и реквизитов оплаты свяжитесь с вашим юристом: +7 (4742) 20-15-25');
                  }
                }}
                className="btn btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '14px 36px',
                  fontSize: '16px',
                  fontWeight: 600,
                  minHeight: '48px',
                  textDecoration: 'none'
                }}
              >
                Перейти к оплате
              </a>
            </div>
            <p style={{ fontSize: '13px', color: '#718096', margin: 0, lineHeight: 1.5, maxWidth: '580px', marginLeft: 'auto', marginRight: 'auto' }}>
              Через эту платёжную страницу оплачиваются услуги ООО ЮК «Де-Юре». Оплата адвокатской помощи производится в порядке, предусмотренном отдельным соглашением с адвокатом.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Форма расчёта стоимости (#form, #consultation) — ШАБЛОННАЯ, А ПОЛЯ ПО ТЗ */}
      <div id="form" style={{ scrollMarginTop: '100px' }}></div>
      <section
        id="consultation"
        className="pricing-form-section"
        style={{
          background: '#FFFFFF',
          padding: 'clamp(52px, 6.5vw, 84px) 0',
          borderTop: '1px solid var(--color-border, rgba(16, 39, 59, 0.08))',
          scrollMarginTop: '100px'
        }}
      >
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '44px',
              alignItems: 'start',
            }}
          >
            <div>
              <span
                style={{
                  color: 'var(--color-gold, #C29557)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  fontSize: '13px',
                  letterSpacing: '0.1em',
                  display: 'block',
                  marginBottom: '8px',
                }}
              >
                Индивидуальный расчёт
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(28px, 3.5vw, 40px)',
                  color: 'var(--color-deep-blue, #10273B)',
                  margin: '0 0 16px 0',
                  lineHeight: 1.2,
                }}
              >
                Узнайте стоимость решения вашей задачи
              </h2>
              <p
                style={{
                  fontSize: '16px',
                  color: 'var(--color-text-secondary, #4A5568)',
                  lineHeight: 1.6,
                  margin: '0 0 28px 0',
                }}
              >
                Оставьте контакты и кратко опишите вопрос. Уточним задачу, подберём профильного юриста и сообщим, какие сведения нужны для точного расчёта.
              </p>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  marginBottom: '28px',
                  padding: '18px 22px',
                  background: 'rgba(16, 39, 59, 0.03)',
                  borderLeft: '4px solid var(--color-gold, #C29557)',
                }}
              >
                <a
                  href="tel:+74742201525"
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: 'var(--color-deep-blue, #10273B)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flexShrink: 0 }}
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>+7 (4742) 20-15-25</span>
                </a>
                <span style={{ fontSize: '15px', color: 'var(--color-text-secondary, #4A5568)' }}>
                  г. Липецк, ул. Советская, д. 35, оф. 213
                </span>
              </div>

              <div>
                <div
                  style={{
                    color: 'var(--color-deep-blue, #10273B)',
                    fontWeight: 600,
                    fontSize: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-gold, #C29557)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flexShrink: 0 }}
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>Перезвоним в течение 15 минут в рабочее время</span>
                </div>
                <p
                  style={{
                    fontSize: '13px',
                    color: 'var(--color-text-secondary, #4A5568)',
                    lineHeight: 1.55,
                    margin: '14px 0 0 0',
                    padding: '10px 14px',
                    background: 'rgba(16, 39, 59, 0.03)',
                    borderLeft: '3px solid rgba(16, 39, 59, 0.25)',
                    fontStyle: 'italic',
                  }}
                >
                  Не указывайте в форме паспортные данные, сведения о здоровье и другие конфиденциальные сведения. Их можно передать юристу после установления защищённого способа связи.
                  <span
                    style={{
                      display: 'block',
                      marginTop: '4px',
                      color: 'rgba(44,51,64,0.55)',
                      fontSize: '12px',
                      fontStyle: 'italic',
                    }}
                  >
                    Основание: статья 10 № 152-ФЗ.
                  </span>
                </p>
              </div>
            </div>

            <div>
              <div
                className="main-consultation-form-card"
                style={{
                  background: 'var(--gradient-cream, #FFFDF8)',
                  padding: 'clamp(24px, 4vw, 40px)',
                  borderRadius: '0',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  width: '100%',
                  border: '1px solid rgba(0,0,0,0.06)',
                  boxSizing: 'border-box',
                }}
              >
                {submitted ? (
                  <div style={{
                    padding: '36px 20px',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '280px'
                  }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold, #C29557)" strokeWidth="1.5" strokeLinecap="square" style={{ marginBottom: '16px' }}>
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <h3 style={{ fontSize: '24px', color: 'var(--color-deep-blue, #10273B)', fontFamily: 'var(--font-serif)', margin: '0 0 12px 0', lineHeight: 1.2 }}>
                      Заявка на расчёт принята
                    </h3>
                    <p style={{ margin: '0 0 20px 0', color: 'var(--color-text-secondary, #4A5568)', fontSize: '15px', lineHeight: 1.6, maxWidth: '340px' }}>
                      Специалист ЮК «Де-Юре» свяжется с вами в рабочее время для уточнения деталей и расчёта задачи.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setName('');
                        setPhone('');
                        setMessage('');
                      }}
                      className="btn btn-outline"
                      style={{ padding: '10px 22px', fontSize: '14px' }}
                    >
                      Отправить ещё один вопрос
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                    <div>
                      <h3 style={{ fontSize: '24px', color: 'var(--color-deep-blue, #10273B)', fontFamily: 'var(--font-serif)', margin: '0 0 8px 0', lineHeight: 1.2 }}>
                        Оставить заявку на расчёт
                      </h3>
                      <p style={{ color: 'var(--color-text-secondary, #4A5568)', margin: '0 0 18px 0', fontSize: '14px', lineHeight: 1.5 }}>
                        Уточним обстоятельства вопроса и рассчитаем точную стоимость решения.
                      </p>
                    </div>

                    {/* Поле выбора направления по ТЗ */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label htmlFor="pricing_direction_select" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-deep-blue, #10273B)' }}>
                        Направление юридической помощи
                      </label>
                      <div style={{ position: 'relative' }}>
                        <select
                          id="pricing_direction_select"
                          value={selectedDirection ? selectedDirection.anchor : ''}
                          onChange={(e) => {
                            const val = e.target.value;
                            if (!val) {
                              setSelectedDirection(null);
                            } else {
                              const found = PRICING_DIRECTIONS.find(d => d.anchor === val);
                              setSelectedDirection(found || null);
                            }
                          }}
                          style={{
                            width: '100%',
                            padding: '13px 16px',
                            border: '1px solid rgba(23, 50, 77, 0.2)',
                            borderRadius: '0',
                            fontSize: '15px',
                            outline: 'none',
                            background: '#FFFFFF',
                            color: 'var(--color-deep-blue, #10273B)',
                            fontFamily: 'inherit',
                            cursor: 'pointer',
                            appearance: 'none',
                            boxSizing: 'border-box'
                          }}
                        >
                          <option value="">Не выбрано (Общий расчёт стоимости)</option>
                          <optgroup label="Гражданам">
                            {citizensDirections.map(d => (
                              <option key={d.anchor} value={d.anchor}>{d.title}</option>
                            ))}
                          </optgroup>
                          <optgroup label="Бизнесу">
                            {businessDirections.map(d => (
                              <option key={d.anchor} value={d.anchor}>{d.title}</option>
                            ))}
                          </optgroup>
                        </select>
                        <div style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#718096', fontSize: '12px' }}>
                          ▼
                        </div>
                      </div>
                    </div>

                    {/* Телефон (обязательный) по ТЗ */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label htmlFor="pricing_phone" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-deep-blue, #10273B)' }}>
                        Телефон для связи <span style={{ color: 'var(--color-gold, #C29557)' }}>*</span>
                      </label>
                      <input
                        type="tel"
                        id="pricing_phone"
                        required
                        placeholder="+7 (___) ___-__-__"
                        value={phone}
                        onChange={handlePhoneChange}
                        style={{
                          width: '100%',
                          padding: '13px 16px',
                          border: '1px solid rgba(23, 50, 77, 0.2)',
                          borderRadius: '0',
                          fontSize: '15px',
                          outline: 'none',
                          background: '#FFFFFF',
                          color: 'var(--color-deep-blue, #10273B)',
                          fontFamily: 'inherit',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>

                    {/* Имя (необязательное) по ТЗ */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label htmlFor="pricing_name" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-deep-blue, #10273B)' }}>
                        Ваше имя (необязательно)
                      </label>
                      <input
                        type="text"
                        id="pricing_name"
                        placeholder="Как к вам обращаться"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '13px 16px',
                          border: '1px solid rgba(23, 50, 77, 0.2)',
                          borderRadius: '0',
                          fontSize: '15px',
                          outline: 'none',
                          background: '#FFFFFF',
                          color: 'var(--color-deep-blue, #10273B)',
                          fontFamily: 'inherit',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>

                    {/* Описание ситуации (необязательное) по ТЗ */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label htmlFor="pricing_message" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-deep-blue, #10273B)' }}>
                        Краткое описание вопроса (необязательно)
                      </label>
                      <textarea
                        id="pricing_message"
                        rows={3}
                        placeholder="Опишите вопрос, стадию спора или приложите краткие пояснения…"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '13px 16px',
                          border: '1px solid rgba(23, 50, 77, 0.2)',
                          borderRadius: '0',
                          fontSize: '15px',
                          outline: 'none',
                          background: '#FFFFFF',
                          color: 'var(--color-deep-blue, #10273B)',
                          fontFamily: 'inherit',
                          resize: 'vertical',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>

                    {/* Дисклеймер о конфиденциальности */}
                    <div style={{ fontSize: '12.5px', color: '#718096', lineHeight: 1.45, fontStyle: 'italic' }}>
                      Не указывайте паспортные данные и другие конфиденциальные сведения. Способ передачи документов согласуем отдельно.
                    </div>

                    {/* Согласие 152-ФЗ */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <input
                        type="checkbox"
                        id="pricing_agree"
                        checked={agree}
                        onChange={(e) => setAgree(e.target.checked)}
                        style={{ marginTop: '3px', cursor: 'pointer', width: '17px', height: '17px' }}
                      />
                      <label htmlFor="pricing_agree" style={{ fontSize: '13px', color: 'var(--color-text-secondary, #4A5568)', lineHeight: 1.4, cursor: 'pointer' }}>
                        Согласен на обработку персональных данных в соответствии с{' '}
                        <Link href="/privacy" target="_blank" style={{ color: 'var(--color-deep-blue, #10273B)', textDecoration: 'underline' }}>
                          Политикой конфиденциальности
                        </Link>
                      </label>
                    </div>

                    {/* Ошибка */}
                    {error && (
                      <div style={{
                        padding: '12px 14px',
                        backgroundColor: '#FEF2F2',
                        border: '1px solid #F87171',
                        borderRadius: '0',
                        color: '#991B1B',
                        fontSize: '13.5px',
                        lineHeight: 1.45
                      }}>
                        {error}
                      </div>
                    )}

                    {/* Кнопка отправки */}
                    <div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn btn-primary"
                        style={{
                          width: '100%',
                          padding: '15px 28px',
                          fontSize: '15.5px',
                          fontWeight: 600,
                          minHeight: '48px',
                          cursor: loading ? 'not-allowed' : 'pointer',
                          opacity: loading ? 0.7 : 1
                        }}
                      >
                        {loading ? 'Отправка заявки...' : 'Получить расчёт стоимости'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Адаптивные стили */}
      <style dangerouslySetInnerHTML={{ __html: `
        .pricing-table-mobile {
          display: none;
        }
        .pricing-table-desktop {
          display: block;
        }
        .pricing-hub-link:hover {
          color: var(--color-primary, #C29557) !important;
        }
        summary::-webkit-details-marker {
          display: none !important;
        }
        summary {
          list-style: none !important;
        }
        @media (max-width: 768px) {
          .pricing-table-desktop {
            display: none !important;
          }
          .pricing-table-mobile {
            display: block !important;
          }
          .pricing-direction-card summary {
            padding: 16px 18px !important;
          }
        }
        noscript .pricing-group-container {
          display: flex !important;
          margin-bottom: 30px !important;
        }
        noscript .pricing-direction-card {
          margin-bottom: 14px !important;
        }
      `}} />
    </div>
  );
}
