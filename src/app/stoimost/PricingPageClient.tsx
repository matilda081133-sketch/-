'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ContactsForm from '@/components/ContactsForm';
import ProcessBlock from '@/components/ProcessBlock';
import CtaCard from '@/components/CtaCard';
import { PRICING_DIRECTIONS, PricingDirection } from '@/data/pricingData';
import { PAYMENT_URL } from '@/lib/payment';

interface PricingPageClientProps {
  initialAudience?: 'citizens' | 'business';
}

export default function PricingPageClient({ initialAudience = 'citizens' }: PricingPageClientProps) {
  const [audience, setAudience] = useState<'citizens' | 'business'>(initialAudience);
  const [openCitizensAnchor, setOpenCitizensAnchor] = useState<string | null>(null);
  const [openBusinessAnchor, setOpenBusinessAnchor] = useState<string | null>(null);

  // Selected direction for calculator form
  const [selectedDirection, setSelectedDirection] = useState<PricingDirection | null>(null);

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
          gap: '16px'
        }}
      >
        {directions.map((dir) => {
          const isOpen = activeAnchor === dir.anchor;
          const minPrice = dir.services.reduce((min, s) => {
            if (s.amount && s.amount > 0) {
              return min === 0 ? s.amount : Math.min(min, s.amount);
            }
            return min;
          }, 0);

          return (
            <details
              key={dir.id}
              id={dir.anchor}
              open={isOpen}
              className={`pricing-direction-card hover-lift ${isOpen ? 'is-open' : ''}`}
              style={{
                border: isOpen ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
                borderTop: isOpen ? '3px solid var(--color-primary)' : '1px solid var(--color-border)',
                borderRadius: '0',
                backgroundColor: '#FFFFFF',
                background: isOpen ? 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)' : '#FFFFFF',
                transition: 'all 0.25s ease',
                boxShadow: isOpen ? '0 8px 28px rgba(23, 50, 77, 0.08)' : '0 2px 8px rgba(23, 50, 77, 0.03)',
                scrollMarginTop: '110px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Фоновый согласованный водяной знак бренда Де-Юре в раскрытой карточке */}
              {isOpen && (
                <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.05, pointerEvents: 'none' }}>
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="var(--color-deep-blue)">
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>
              )}

              {/* Заголовок направления (summary) */}
              <summary
                onClick={(e) => toggleDirection(dir, e)}
                style={{
                  width: '100%',
                  padding: '20px 26px',
                  background: isOpen ? 'rgba(247, 244, 237, 0.6)' : '#FFFFFF',
                  border: 'none',
                  borderRadius: '0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  textAlign: 'left',
                  cursor: 'pointer',
                  gap: '16px',
                  minHeight: '64px',
                  listStyle: 'none',
                  userSelect: 'none',
                  outline: 'none',
                  transition: 'background 0.2s ease',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                  <span style={{
                    background: 'rgba(193, 160, 102, 0.12)',
                    color: 'var(--color-gold)',
                    padding: '3px 10px',
                    fontSize: '11.5px',
                    fontWeight: 700,
                    borderRadius: '2px',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase'
                  }}>
                    {dir.services.length} {dir.services.length === 1 ? 'услуга' : dir.services.length < 5 ? 'услуги' : 'услуг'}
                  </span>
                  <h3 style={{
                    fontSize: 'clamp(18px, 2.2vw, 21px)',
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--color-deep-blue)',
                    margin: 0,
                    fontWeight: 700,
                    lineHeight: 1.3
                  }}>
                    {dir.title}
                  </h3>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
                  {minPrice > 0 && !isOpen && (
                    <span style={{
                      fontSize: '15px',
                      fontWeight: 700,
                      color: 'var(--color-primary)',
                      fontVariantNumeric: 'tabular-nums'
                    }}>
                      от {minPrice.toLocaleString('ru-RU')} ₽
                    </span>
                  )}
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '0',
                      border: '1px solid var(--color-border)',
                      backgroundColor: isOpen ? 'var(--color-deep-blue)' : '#FFFFFF',
                      color: isOpen ? '#FFFFFF' : 'var(--color-deep-blue)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.25s ease'
                    }}
                    aria-hidden="true"
                  >
                    <svg
                      width="12"
                      height="12"
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
                </div>
              </summary>

              {/* Содержимое: таблица услуг (всегда в DOM/HTML для SEO и noscript) */}
              <div style={{ padding: '24px 26px 28px', borderTop: '1px solid var(--color-border)', position: 'relative', zIndex: 1 }}>
                {/* Десктопная таблица услуг */}
                <div className="pricing-table-desktop">
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{
                        background: 'rgba(23, 50, 77, 0.04)',
                        borderBottom: '2px solid rgba(23, 50, 77, 0.12)',
                        textAlign: 'left'
                      }}>
                        <th style={{ padding: '12px 16px', fontSize: '12px', color: 'var(--color-deep-blue)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', width: '38%' }}>
                          Услуга
                        </th>
                        <th style={{ padding: '12px 16px', fontSize: '12px', color: 'var(--color-deep-blue)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', width: '20%', textAlign: 'right' }}>
                          Стоимость
                        </th>
                        <th style={{ padding: '12px 16px', fontSize: '12px', color: 'var(--color-deep-blue)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', width: '42%' }}>
                          Объём и границы работы
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {dir.services.map((svc, sIdx) => (
                        <tr
                          key={sIdx}
                          style={{
                            borderBottom: sIdx === dir.services.length - 1 ? 'none' : '1px solid rgba(23, 50, 77, 0.08)',
                            transition: 'background 0.15s ease'
                          }}
                        >
                          <td style={{ padding: '16px', fontSize: '15px', fontWeight: 600, color: 'var(--color-deep-blue)', verticalAlign: 'top', lineHeight: 1.4 }}>
                            {svc.name}
                          </td>
                          <td style={{ padding: '16px', fontSize: '16px', fontWeight: 700, color: 'var(--color-primary)', whiteSpace: 'nowrap', textAlign: 'right', verticalAlign: 'top', fontVariantNumeric: 'tabular-nums' }}>
                            {svc.price}
                          </td>
                          <td style={{ padding: '16px', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, verticalAlign: 'top' }}>
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
                        borderBottom: sIdx === dir.services.length - 1 ? 'none' : '1px solid var(--color-border)'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '8px' }}>
                        <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--color-deep-blue)', lineHeight: 1.35 }}>
                          {svc.name}
                        </div>
                        <div style={{
                          fontSize: '15px',
                          fontWeight: 700,
                          color: 'var(--color-primary)',
                          whiteSpace: 'nowrap',
                          flexShrink: 0,
                          fontVariantNumeric: 'tabular-nums'
                        }}>
                          {svc.price}
                        </div>
                      </div>
                      <div style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                        {svc.scope}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Уточнение под таблицей */}
                {dir.clarification && (
                  <div style={{
                    marginTop: '22px',
                    padding: '14px 18px',
                    backgroundColor: 'rgba(247, 244, 237, 0.85)',
                    borderLeft: '3px solid var(--color-gold)',
                    borderRadius: '0',
                    fontSize: '14px',
                    lineHeight: 1.6,
                    color: 'var(--color-deep-blue)'
                  }}>
                    {dir.clarification}
                  </div>
                )}

                {/* Кнопки действий направления */}
                <div style={{
                  marginTop: '26px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '16px',
                  paddingTop: '20px',
                  borderTop: '1px solid rgba(23, 50, 77, 0.08)'
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
                      cursor: 'pointer',
                      borderRadius: '0'
                    }}
                  >
                    {dir.mainButtonText || 'Рассчитать стоимость по направлению'}
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
                      fontSize: '14.5px',
                      fontWeight: 600,
                      color: 'var(--color-deep-blue)',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '8px 0',
                      transition: 'color 0.2s ease'
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
            fontWeight: 700,
            textWrap: 'balance'
          }}>
            Стоимость юридических услуг<br className="desktop-only" /> в Липецке
          </h1>
          <p style={{
            fontSize: 'clamp(16px, 2vw, 19px)',
            lineHeight: 1.6,
            color: '#4A5568',
            maxWidth: '780px',
            margin: '0 auto 28px auto',
            textWrap: 'balance'
          }}>
            Выберите направление и посмотрите стоимость отдельных услуг.<br className="desktop-only" /> Чтобы рассчитать вашу задачу целиком, уточним обстоятельства,<br className="desktop-only" /> необходимые действия и объём документов.
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

      {/* 3. Основной блок прайса — СОГЛАСОВАННЫЙ ЗОЛОТОЙ ГРАДИЕНТ В СТИЛЕ САЙТА */}
      <section
        className="section bg-light"
        style={{
          padding: 'clamp(56px, 7vw, 90px) 0',
          background: 'var(--gradient-cream)',
          borderBottom: '1px solid var(--color-border)'
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '40px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '14px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
                Фиксированные тарифы
              </span>
            </div>
            <h2
              className="with-accent"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 4vw, 42px)',
                color: 'var(--color-deep-blue)',
                margin: '0 0 16px 0',
                lineHeight: 1.25,
                textAlign: 'left',
                textWrap: 'balance'
              }}
            >
              Цены по направлениям
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: 'var(--color-text-secondary)',
                fontWeight: 400,
                lineHeight: 1.6,
                margin: 0,
                textAlign: 'left',
                textWrap: 'balance'
              }}
            >
              У каждой позиции зафиксирован оплачиваемый объём работы. Цена «от» — минимальная базовая стоимость услуги; точный расчёт зависит от сложности спора и объёма доказательств.
            </p>
          </div>

          {/* Переключатель Гражданам / Бизнесу (строго по шаблону ServicesTabs) */}
          <div
            role="tablist"
            aria-label="Выбор аудитории прайса"
            style={{
              display: 'flex',
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
                padding: '12px 28px',
                fontSize: '15px',
                fontWeight: 600,
                borderRadius: '0px',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                border: audience === 'citizens' ? '1px solid var(--color-deep-blue)' : '1px solid var(--color-border)',
                backgroundColor: audience === 'citizens' ? 'var(--color-deep-blue)' : 'var(--color-white)',
                color: audience === 'citizens' ? '#FFFFFF' : 'var(--color-deep-blue)',
                boxShadow: audience === 'citizens' ? '0 4px 14px rgba(23, 50, 77, 0.15)' : 'none'
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
                padding: '12px 28px',
                fontSize: '15px',
                fontWeight: 600,
                borderRadius: '0px',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                border: audience === 'business' ? '1px solid var(--color-deep-blue)' : '1px solid var(--color-border)',
                backgroundColor: audience === 'business' ? 'var(--color-deep-blue)' : 'var(--color-white)',
                color: audience === 'business' ? '#FFFFFF' : 'var(--color-deep-blue)',
                boxShadow: audience === 'business' ? '0 4px 14px rgba(23, 50, 77, 0.15)' : 'none'
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

      {/* 4. ДОПОЛНЕНИЯ СТРАНИЦЫ СТОИМОСТИ — СТРОГО ПО ШАБЛОНАМ САЙТА */}

      {/* 1. От первого обращения до договора (#usloviya) — ЭТАЛОННЫЙ ШАБЛОННЫЙ ProcessBlock */}
      <div id="usloviya" style={{ scrollMarginTop: '110px' }}>
        <ProcessBlock
          title={<>От первого обращения<br className="desktop-only" /> до договора</>}
          subtitle={<>Четыре последовательных шага от первого обращения<br className="desktop-only" /> до согласования условий и начала работы</>}
          steps={[
            {
              num: '01',
              title: 'Первичное обращение',
              desc: 'Вы сообщаете суть вопроса. Сотрудник компании уточняет обстоятельства, запрашивает необходимые документы и организует дальнейшее общение. Выяснение сути обращения и подбор специалиста бесплатны.'
            },
            {
              num: '02',
              title: 'Разбор задачи',
              desc: 'Профильный юрист знакомится с ситуацией и определяет, какая помощь требуется: консультация, анализ документов, подготовка обращения, переговоры или представительство. Если разбор требует платной работы, её объём и стоимость согласуются заранее.'
            },
            {
              num: '03',
              title: 'Согласование стоимости',
              desc: 'Определяем необходимые действия, объём документов, территорию работы и необходимость выездов. Консультация, подготовка документа и представительство — самостоятельные услуги. Их цены не складываются автоматически в обязательный пакет.'
            },
            {
              num: '04',
              title: 'Заключение договора',
              desc: 'До начала согласованных работ фиксируем их состав, стоимость и порядок оплаты в договоре. Дополнительные действия и расходы согласуем отдельно.'
            }
          ]}
          ctaTitle={<>Рассчитать стоимость<br className="desktop-only" /> для вашей задачи</>}
          ctaSubtitle={<>Опишите вопрос, и юрист определит состав и стоимость необходимых услуг.<br className="desktop-only" /> Выяснение сути обращения и подбор специалиста — бесплатны.</>}
          ctaButtonText="Получить расчёт"
          ctaButtonHref="#consultation"
        />
      </div>

      {/* 2. Консультация и изучение документов — ШАБЛОННЫЙ БЛОК ИЗ 3 КАРТОЧЕК */}
      <section
        className="section bg-light"
        style={{
          padding: 'clamp(48px, 6vw, 80px) 0',
          background: 'var(--gradient-cream)',
          borderBottom: '1px solid var(--color-border)'
        }}
      >
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
            <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
              Первичный разбор ситуации
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 16px 0', lineHeight: 1.25, textWrap: 'balance' }}>
            Консультация<br className="desktop-only" /> и изучение документов
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.6, maxWidth: '850px', margin: '0 0 36px 0', textWrap: 'balance' }}>
            Правила проведения устных консультаций,<br className="desktop-only" /> анализа материалов и зачёта оплаты
          </p>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '24px' }}>
            <div style={{
              background: 'var(--color-white)',
              border: '1px solid rgba(23, 50, 77, 0.1)',
              borderTop: '3px solid var(--color-primary)',
              padding: '32px 28px',
              boxShadow: '0 6px 20px rgba(16, 39, 59, 0.05)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <h3 style={{ fontSize: '19px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.3, textWrap: 'balance' }}>
                Стоимость консультации — 2 000 ₽
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.65, margin: 0, textWrap: 'pretty' }}>
                Устная консультация для граждан продолжительностью до одного часа — 2 000 ₽. Стоимость консультаций для бизнеса и отдельных специальных задач указана в соответствующих разделах прайса.
              </p>
            </div>

            <div style={{
              background: 'var(--color-white)',
              border: '1px solid rgba(23, 50, 77, 0.1)',
              borderTop: '3px solid var(--color-primary)',
              padding: '32px 28px',
              boxShadow: '0 6px 20px rgba(16, 39, 59, 0.05)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <h3 style={{ fontSize: '19px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.3, textWrap: 'balance' }}>
                Изучение документов<br className="desktop-only" /> и ответ
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.65, margin: 0, textWrap: 'pretty' }}>
                Необходимость отдельного платного анализа зависит от вопроса и объёма материалов. До начала такой работы согласуем её состав и стоимость. Письменный ответ можно заказать отдельно; цену и срок подготовки определим заранее.
              </p>
            </div>

            <div style={{
              background: 'var(--color-white)',
              border: '1px solid rgba(23, 50, 77, 0.1)',
              borderTop: '3px solid var(--color-primary)',
              padding: '32px 28px',
              boxShadow: '0 6px 20px rgba(16, 39, 59, 0.05)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <h3 style={{ fontSize: '19px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.3, textWrap: 'balance' }}>
                Зачёт оплаты<br className="desktop-only" /> в дальнейшую работу
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.65, margin: 0, textWrap: 'pretty' }}>
                Если после консультации или анализа документов вы заключаете договор на дальнейшую работу по этому вопросу, внесённая оплата засчитывается в стоимость договора.
              </p>
            </div>
          </div>

          <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0, textWrap: 'balance' }}>
            Запись, перенос консультации и возможность срочного приёма согласуются с сотрудником компании.
          </p>
        </div>
      </section>

      {/* 3. Договор и порядок оплаты — ШАБЛОН БЛОКА «ЧТО ПРОВЕРЯЕТ ЮРИСТ ДО ДОПУСКА К РАБОТЕ» */}
      <section
        className="section bg-white"
        style={{
          padding: 'clamp(60px, 7vw, 85px) 0',
          borderBottom: '1px solid var(--color-border)'
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <div
              style={{
                fontSize: '12.5px',
                fontWeight: 700,
                color: 'var(--color-gold)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '12px'
              }}
            >
              ФИНАНСОВЫЕ УСЛОВИЯ
            </div>
            <h2
              className="with-accent"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 4vw, 42px)',
                color: 'var(--color-deep-blue)',
                marginBottom: '16px',
                marginTop: 0,
                lineHeight: 1.25,
                textAlign: 'left',
                textWrap: 'balance'
              }}
            >
              Договор и порядок оплаты
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: 'var(--color-text-secondary)',
                fontWeight: 400,
                lineHeight: 1.6,
                margin: 0,
                textAlign: 'left',
                textWrap: 'balance'
              }}
            >
              Прозрачные финансовые взаимоотношения, удобные способы расчёта и фиксация условий в договоре.
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '28px', position: 'relative', marginBottom: '32px' }}>
            {[
              {
                num: '01',
                title: 'Оформление договора',
                desc: 'Договор можно заключить в офисе или дистанционно через электронный документооборот. Если у вас нет ЭДО, организуем обмен документами почтой. Вы получаете свой экземпляр договора.'
              },
              {
                num: '02',
                title: 'Предоплата и этапы',
                desc: 'Как правило, предоплата составляет 50% стоимости работ. Порядок внесения оставшейся суммы согласуется индивидуально. Возможность рассрочки или оплаты по этапам обсуждается до заключения договора.'
              },
              {
                num: '03',
                title: 'Способы оплаты',
                desc: 'Доступны оплата банковской картой, по QR-коду, банковским переводом и наличными. Подходящий способ и реквизиты сообщим при согласовании оплаты. Вы получите документы, подтверждающие платёж.'
              },
              {
                num: '04',
                title: 'Подтверждение работы',
                desc: 'Выполненные действия и их стоимость отражаются в акте, который подписывают компания и клиент по завершении согласованного объёма юридической помощи.'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="hover-lift"
                style={{
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  padding: '36px 26px 32px 26px',
                  border: '1px solid var(--color-border)',
                  borderTop: '4px solid var(--color-gold)',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-14px',
                    left: '24px',
                    background: 'var(--color-gold)',
                    color: '#FFFFFF',
                    fontSize: '12px',
                    fontWeight: 700,
                    padding: '2px 10px',
                    borderRadius: '2px',
                    letterSpacing: '0.05em'
                  }}
                >
                  {item.num}
                </div>
                <h3
                  style={{
                    fontSize: '18px',
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--color-deep-blue)',
                    margin: '8px 0 14px 0',
                    lineHeight: 1.35,
                    fontWeight: 700
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    margin: 0,
                    textWrap: 'pretty'
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: '14px',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.65,
              margin: 0,
              maxWidth: '900px',
              textWrap: 'balance'
            }}
          >
            Адвокатская помощь оказывается независимым адвокатом по отдельному соглашению с доверителем.<br className="desktop-only" /> Условия участия, вознаграждение и порядок оплаты согласуются с адвокатом.
          </p>
        </div>
      </section>

      {/* 4. Условия работы, ход дела и оплата (#oplata) — ШАБЛОННЫЙ БЛОК ИЗ 3 КАРТОЧЕК С СОГЛАСОВАННЫМ ВЕКТОРОМ */}
      <section
        id="oplata"
        className="section bg-light"
        style={{
          padding: 'clamp(56px, 7vw, 90px) 0',
          background: 'var(--gradient-cream)',
          borderBottom: '1px solid var(--color-border)',
          scrollMarginTop: '110px'
        }}
      >
        <div className="container">
          {/* Стандартный заголовок секции по шаблону сайта */}
          <div style={{ maxWidth: '820px', marginBottom: '44px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '14px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
                Условия сотрудничества
              </span>
            </div>
            <h2 style={{
              fontSize: 'clamp(26px, 3.5vw, 36px)',
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-deep-blue)',
              margin: '0 0 14px 0',
              fontWeight: 700,
              lineHeight: 1.25,
              textWrap: 'balance'
            }}>
              Расходы, ход дела и порядок оплаты
            </h2>
            <p style={{
              fontSize: '16px',
              color: 'var(--color-text-secondary)',
              margin: 0,
              lineHeight: 1.6,
              textWrap: 'balance'
            }}>
              Полная процессуальная прозрачность: предварительное согласование расходов, прямой контакт с ведущим юристом и защищённая оплата.
            </p>
          </div>

          {/* Сетка из 3 шаблонных карточек */}
          <div className="grid grid-3" style={{ gap: '28px', alignItems: 'stretch' }}>
            {/* Карточка 1: Дополнительные расходы */}
            <div
              className="card hover-lift"
              style={{
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-primary)',
                borderRadius: '0',
                padding: '36px 30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Фоновый согласованный водяной знак бренда Де-Юре */}
              <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.06, pointerEvents: 'none' }}>
                <svg width="100" height="100" viewBox="0 0 24 24" fill="var(--color-deep-blue)">
                  <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>

              <div>
                <div style={{ marginBottom: '18px', position: 'relative', zIndex: 1 }}>
                  <span style={{
                    background: 'rgba(193, 160, 102, 0.12)',
                    color: 'var(--color-gold)',
                    padding: '4px 12px',
                    fontSize: '12.5px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Расходы по делу
                  </span>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '22px',
                  fontWeight: 700,
                  color: 'var(--color-deep-blue)',
                  margin: '0 0 14px 0',
                  lineHeight: 1.3,
                  position: 'relative',
                  zIndex: 1
                }}>
                  Дополнительные расходы
                </h3>

                <p style={{
                  fontSize: '15px',
                  color: 'var(--color-deep-blue)',
                  lineHeight: 1.55,
                  margin: '0 0 16px 0',
                  fontWeight: 500,
                  position: 'relative',
                  zIndex: 1
                }}>
                  Оплачиваются отдельно от вознаграждения за юридическую работу:
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '10px', position: 'relative', zIndex: 1 }}>
                  {[
                    'Госпошлины и судебные сборы',
                    'Нотариальные действия и оформление доверенности',
                    'Судебные и независимые экспертизы',
                    'Командировки и необходимые расходы по делу'
                  ].map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', gap: '10px', fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, alignItems: 'flex-start' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}>
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{
                marginTop: 'auto',
                padding: '14px 16px',
                background: 'rgba(247, 244, 237, 0.85)',
                borderLeft: '3px solid var(--color-gold)',
                fontSize: '13.5px',
                color: 'var(--color-deep-blue)',
                lineHeight: 1.55,
                position: 'relative',
                zIndex: 1
              }}>
                <strong>Порядок оплаты:</strong> их необходимость предварительно согласуем с вами. Если требуется выезд в другой город, отдельно обсудим расходы и альтернативы.
              </div>
            </div>

            {/* Карточка 2: Информирование о ходе дела */}
            <div
              className="card hover-lift"
              style={{
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-primary)',
                borderRadius: '0',
                padding: '36px 30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Фоновый согласованный водяной знак бренда Де-Юре */}
              <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.06, pointerEvents: 'none' }}>
                <svg width="100" height="100" viewBox="0 0 24 24" fill="var(--color-deep-blue)">
                  <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>

              <div>
                <div style={{ marginBottom: '18px', position: 'relative', zIndex: 1 }}>
                  <span style={{
                    background: 'rgba(193, 160, 102, 0.12)',
                    color: 'var(--color-gold)',
                    padding: '4px 12px',
                    fontSize: '12.5px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Информирование
                  </span>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '22px',
                  fontWeight: 700,
                  color: 'var(--color-deep-blue)',
                  margin: '0 0 14px 0',
                  lineHeight: 1.3,
                  position: 'relative',
                  zIndex: 1
                }}>
                  Как вы будете узнавать<br className="desktop-only" /> о ходе дела
                </h3>

                <p style={{
                  fontSize: '15px',
                  color: 'var(--color-deep-blue)',
                  lineHeight: 1.55,
                  margin: '0 0 16px 0',
                  fontWeight: 500,
                  position: 'relative',
                  zIndex: 1
                }}>
                  Прямое взаимодействие на каждом этапе работы:
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '10px', position: 'relative', zIndex: 1 }}>
                  {[
                    'Общение напрямую с выделенным юристом без посредников',
                    'Согласование регулярности встреч и отчётов на старте дела',
                    'Разъяснение выполненных действий и дальнейших шагов'
                  ].map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', gap: '10px', fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, alignItems: 'flex-start' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}>
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{
                marginTop: 'auto',
                padding: '14px 16px',
                background: 'rgba(247, 244, 237, 0.85)',
                borderLeft: '3px solid var(--color-gold)',
                fontSize: '13.5px',
                color: 'var(--color-deep-blue)',
                lineHeight: 1.55,
                position: 'relative',
                zIndex: 1
              }}>
                <strong>Вне графика:</strong> если возникают дополнительные вопросы, вы можете запросить информацию вне согласованного расписания.
              </div>
            </div>

            {/* Карточка 3: Оплата согласованных услуг */}
            <div
              className="card hover-lift"
              style={{
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-primary)',
                borderRadius: '0',
                padding: '36px 30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Фоновый согласованный водяной знак бренда Де-Юре */}
              <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.06, pointerEvents: 'none' }}>
                <svg width="100" height="100" viewBox="0 0 24 24" fill="var(--color-deep-blue)">
                  <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>

              <div>
                <div style={{ marginBottom: '18px', position: 'relative', zIndex: 1 }}>
                  <span style={{
                    background: 'rgba(193, 160, 102, 0.12)',
                    color: 'var(--color-gold)',
                    padding: '4px 12px',
                    fontSize: '12.5px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Онлайн-оплата
                  </span>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '22px',
                  fontWeight: 700,
                  color: 'var(--color-deep-blue)',
                  margin: '0 0 14px 0',
                  lineHeight: 1.3,
                  position: 'relative',
                  zIndex: 1
                }}>
                  Оплата согласованных услуг
                </h3>

                <p style={{
                  fontSize: '15px',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.6,
                  margin: '0 0 24px 0',
                  position: 'relative',
                  zIndex: 1
                }}>
                  Уже согласовали с юристом услугу и сумму? Перейдите на платёжную страницу и оплатите по реквизитам и назначению, указанным в договоре или счёте.
                </p>
              </div>

              <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '14px', position: 'relative', zIndex: 1 }}>
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
                  className="btn btn-gold"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    padding: '16px 24px',
                    fontSize: '15px',
                    borderRadius: 0,
                    fontWeight: 600,
                    backgroundColor: 'var(--color-gold)',
                    borderColor: 'var(--color-gold)',
                    color: 'var(--color-white)',
                    boxShadow: '0 4px 14px rgba(184, 156, 114, 0.3)',
                    cursor: 'pointer'
                  }}
                >
                  Перейти к оплате
                </a>

                <p style={{
                  fontSize: '12px',
                  color: 'var(--color-text-secondary)',
                  margin: 0,
                  lineHeight: 1.45,
                  opacity: 0.85
                }}>
                  Оплата услуг ООО ЮК «Де-Юре». Адвокатская помощь оплачивается по отдельному соглашению.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Форма расчёта стоимости (#form, #consultation) — ШАБЛОННЫЙ ДВУХКОЛОНОЧНЫЙ БЛОК + ContactsForm */}
      <div id="form" style={{ scrollMarginTop: '120px' }}></div>
      <section
        id="consultation"
        className="section bg-white"
        style={{ scrollMarginTop: '120px', padding: 'clamp(48px, 6vw, 80px) 0' }}
      >
        <div className="container">
          <div
            className="grid grid-2 main-consultation-grid"
            style={{ gap: 'clamp(32px, 5vw, 60px)', alignItems: 'stretch' }}
          >
            {/* Левая колонка */}
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start', paddingTop: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  Индивидуальный расчёт
                </span>
              </div>
              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                Узнайте стоимость<br className="desktop-only" /> решения вашей задачи
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Оставьте контакты и кратко опишите вопрос.<br className="desktop-only" /> Уточним задачу, подберём профильного юриста<br className="desktop-only" /> и сообщим, какие сведения нужны для точного расчёта.
              </p>

              <div style={{ marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a
                  href="tel:+74742201525"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: 'clamp(20px, 4vw, 24px)',
                    fontWeight: 'bold',
                    color: 'var(--color-deep-blue)',
                    textDecoration: 'none'
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span>+7 (4742) 20-15-25</span>
                </a>
                <span style={{ fontSize: '15px', color: 'var(--color-text-secondary)' }}>
                  г. Липецк, ул. Советская, д. 35, оф. 213
                </span>
              </div>

              <div style={{ marginTop: '16px' }}>
                <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '15px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>Перезвоним в течение 15 минут в рабочее время</span>
                </div>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: '16px 0 0 0', padding: '10px 14px', background: 'rgba(16, 39, 59, 0.04)', borderLeft: '3px solid rgba(16, 39, 59, 0.25)', fontStyle: 'italic' }}>
                  Не указывайте в форме паспортные данные, сведения о здоровье и другие конфиденциальные сведения. Их можно передать юристу после установления защищённого способа связи.
                  <span style={{ display: 'block', marginTop: '4px', color: 'rgba(44,51,64,0.55)', fontSize: '12px', fontStyle: 'italic' }}>
                    Основание: статья 10 № 152-ФЗ.
                  </span>
                </p>
              </div>
            </div>

            {/* Правая колонка — Шаблонная ContactsForm */}
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start' }}>
              <div className="main-consultation-form-card" style={{ background: 'var(--gradient-cream)', padding: 'clamp(24px, 4vw, 40px)', borderRadius: '0', boxShadow: '0 8px 24px rgba(0,0,0,0.15)', width: '100%', border: '1px solid rgba(0,0,0,0.06)', boxSizing: 'border-box' }}>
                <ContactsForm
                  title="Оставить заявку на расчёт"
                  subtitle="Уточним обстоятельства вопроса и рассчитаем точную стоимость решения."
                  buttonText="Получить расчёт стоимости"
                  commentLabel="Краткое описание вопроса (необязательно)"
                  commentPlaceholder="Опишите вопрос, стадию спора или приложите краткие пояснения…"
                  direction={selectedDirection ? selectedDirection.title : undefined}
                  hiddenFields={[
                    { name: 'source_page', value: 'https://dejure-help.ru/stoimost/' },
                    { name: 'ctaSource', value: 'pricing_calculator' },
                    { name: 'pageId', value: 'PRICING-01' }
                  ]}
                  agreementNotice="Не указывайте паспортные данные и другие конфиденциальные сведения. Способ передачи документов согласуем отдельно."
                  topFields={
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label htmlFor="pricing_direction_select" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-deep-blue)' }}>
                        Направление юридической помощи
                      </label>
                      <select
                        id="pricing_direction_select"
                        name="direction"
                        value={selectedDirection ? selectedDirection.title : ''}
                        onChange={(e) => {
                          const val = e.target.value;
                          const found = PRICING_DIRECTIONS.find(d => d.title === val);
                          setSelectedDirection(found || null);
                        }}
                        style={{
                          padding: '14px 16px',
                          border: '1px solid rgba(23, 50, 77, 0.2)',
                          borderRadius: '0',
                          fontSize: '15px',
                          outline: 'none',
                          background: 'var(--color-white)',
                          color: 'var(--color-deep-blue)',
                          fontFamily: 'inherit',
                          cursor: 'pointer'
                        }}
                      >
                        <option value="">Не выбрано (Общий расчёт стоимости)</option>
                        <optgroup label="Гражданам">
                          {citizensDirections.map(d => (
                            <option key={d.anchor} value={d.title}>{d.title}</option>
                          ))}
                        </optgroup>
                        <optgroup label="Бизнесу">
                          {businessDirections.map(d => (
                            <option key={d.anchor} value={d.title}>{d.title}</option>
                          ))}
                        </optgroup>
                      </select>
                    </div>
                  }
                />
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
