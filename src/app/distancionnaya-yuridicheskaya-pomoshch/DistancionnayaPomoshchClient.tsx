'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { sendLeadToCRM } from '@/lib/crm';

export default function DistancionnayaPomoshchClient() {
  // Form state
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    val = val.replace(/[^\d+]/g, '');
    if (val.length > 18) val = val.substring(0, 18);
    setPhone(val);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!city.trim()) {
      setError('Пожалуйста, укажите ваш город или регион.');
      return;
    }

    if (!phone || phone.replace(/\D/g, '').length < 10) {
      setError('Пожалуйста, укажите корректный номер телефона (не менее 10 цифр).');
      return;
    }

    if (!agree) {
      setError('Для отправки необходимо дать согласие на обработку персональных данных.');
      return;
    }

    setLoading(true);

    const messageText = `Город / регион: ${city.trim()}${description.trim() ? `\n\nОписание ситуации:\n${description.trim()}` : ''}`;

    const payload = {
      name: name.trim(),
      phone: phone.startsWith('+') ? `'${phone}` : phone,
      message: messageText,
      direction: 'Дистанционная юридическая помощь',
      selected_service: 'Дистанционная юридическая помощь',
      source_page: 'https://dejure-help.ru/distancionnaya-yuridicheskaya-pomoshch/',
      ctaSource: 'remote_help_form',
      page_title: 'Дистанционная юридическая помощь — работа из других регионов | Де-Юре',
      page_url: typeof window !== 'undefined' ? window.location.href : 'https://dejure-help.ru/distancionnaya-yuridicheskaya-pomoshch/'
    };

    try {
      const result = await sendLeadToCRM(payload);
      if (result.success) {
        setLoading(false);
        setSubmitted(true);

        if (typeof window !== 'undefined' && typeof window.trackGoal === 'function') {
          window.trackGoal('FORM_SUBMIT', { page: payload.page_title, cta: 'remote_help_form' });
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

  const faqItems = [
    {
      q: 'Можно ли обратиться из другого региона',
      a: 'Да. Сообщите город, суть вопроса и стадию дела. После уточнения обстоятельств определим возможность принять задачу, подходящий формат помощи и необходимость выезда.'
    },
    {
      q: 'Нужно ли приезжать в Липецк для заключения договора',
      a: 'Договор можно оформить через ЭДО или обменяться документами почтой. Нужны ли личные действия на других этапах, зависит от конкретного поручения.'
    },
    {
      q: 'Можно ли начать без полного комплекта документов',
      a: 'Да, начните с описания ситуации и сообщите, какие материалы есть. Сотрудник компании уточнит, какие документы нужны для дальнейшего разбора. Возможность содержательного анализа зависит от достаточности сведений.'
    },
    {
      q: 'Можно ли провести всё дело без моего присутствия',
      a: 'Это определяется после изучения задачи. Для отдельных действий может потребоваться личное участие клиента, оригиналы документов или присутствие представителя. Формат работы и необходимые полномочия согласуем заранее.'
    },
    {
      q: 'Как я буду получать информацию о ходе дела',
      a: 'Вы общаетесь напрямую с выделенным юристом. Регулярность взаимодействия согласуется в начале работы. Дополнительную информацию можно запросить вне планового графика.'
    }
  ];

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 1. ХЛЕБНЫЕ КРОШКИ И ПЕРВЫЙ ЭКРАН (HERO) */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: 'clamp(36px, 5vw, 64px) 0 clamp(48px, 6vw, 80px)',
          background: 'var(--gradient-cream, #F4F7FA)',
          borderBottom: '1px solid rgba(16, 39, 59, 0.08)'
        }}
      >
        <div className="container">
          <nav aria-label="Хлебные крошки" style={{ marginBottom: '24px' }}>
            <ol
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '13px',
                color: 'var(--color-text-secondary, #64748B)',
                flexWrap: 'wrap'
              }}
            >
              <li>
                <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                  Главная
                </Link>
              </li>
              <li style={{ opacity: 0.5 }}>/</li>
              <li style={{ color: 'var(--color-deep-blue, #10273B)', fontWeight: 500 }}>
                Дистанционная юридическая помощь
              </li>
            </ol>
          </nav>

          <div
            className="about-hero-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 1fr)',
              gap: 'clamp(32px, 5vw, 56px)',
              alignItems: 'center'
            }}
          >
            {/* Текстовая колонка */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary, #C29557)' }} />
                <span
                  style={{
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--color-primary, #C29557)'
                  }}
                >
                  Работа с регионами России
                </span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(28px, 4vw, 44px)',
                  fontFamily: 'var(--font-serif)',
                  color: 'var(--color-deep-blue, #10273B)',
                  lineHeight: 1.2,
                  margin: '0 0 20px 0',
                  fontWeight: 700,
                  textWrap: 'balance'
                }}
              >
                Дистанционная<br className="desktop-only" /> юридическая помощь
              </h1>

              <p
                style={{
                  fontSize: 'clamp(16px, 1.8vw, 18px)',
                  color: 'var(--color-deep-blue, #10273B)',
                  lineHeight: 1.6,
                  margin: '0 0 24px 0',
                  fontWeight: 500,
                  textWrap: 'balance'
                }}
              >
                Обратитесь в «Де-Юре» из другого города.<br className="desktop-only" /> Уточним вашу задачу, подберём специалиста и согласуем, какие действия можно выполнить дистанционно, а где потребуется личное участие или выезд представителя.
              </p>

              {/* Преимущества Hero */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  marginBottom: '32px'
                }}
              >
                {[
                  'Профильный специалист под задачу',
                  'Договор через ЭДО или почтой',
                  'Прямая связь с выделенным юристом'
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      paddingLeft: '14px',
                      borderLeft: '3px solid var(--color-primary, #C29557)',
                      fontSize: '15px',
                      color: 'var(--color-deep-blue, #10273B)',
                      fontWeight: 500,
                      lineHeight: 1.4
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* Кнопки Hero */}
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                <a
                  href="#request"
                  className="btn btn-primary"
                  style={{ padding: '14px 28px', fontSize: '15px' }}
                >
                  Обсудить помощь в моём регионе
                </a>
                <a
                  href="#process"
                  style={{
                    fontSize: '14.5px',
                    color: 'var(--color-deep-blue, #10273B)',
                    textDecoration: 'underline',
                    textUnderlineOffset: '4px',
                    fontWeight: 500
                  }}
                >
                  Как проходит работа ↓
                </a>
                <a
                  href="tel:+74742201525"
                  style={{
                    fontSize: '15px',
                    fontWeight: 700,
                    color: 'var(--color-deep-blue, #10273B)',
                    textDecoration: 'none',
                    marginLeft: '4px'
                  }}
                >
                  +7 (4742) 20-15-25
                </a>
              </div>
            </div>

            {/* Реальное фото кабинета компании */}
            <div
              style={{
                position: 'relative',
                borderRadius: '6px',
                overflow: 'hidden',
                boxShadow: '0 12px 32px rgba(16, 39, 59, 0.1)',
                border: '1px solid rgba(23, 50, 77, 0.1)',
                background: '#FFFFFF',
                aspectRatio: '4 / 3'
              }}
            >
              <img
                src="/images/office-interior-real.webp"
                alt="Консультационный кабинет в офисе коллегии адвокатов «Де-Юре»"
                width={600}
                height={450}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(16, 39, 59, 0.88) 0%, rgba(16, 39, 59, 0.5) 60%, transparent 100%)',
                  padding: '24px 20px 14px',
                  color: '#FFFFFF',
                  fontSize: '13px',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Кабинет для консультаций: Липецк, ул. Советская, д. 35 · Офис 213</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. С ЧЕМ МОЖНО ОБРАТИТЬСЯ ИЗ ДРУГОГО ГОРОДА */}
      <section
        style={{
          padding: 'clamp(48px, 6vw, 80px) 0',
          background: '#FFFFFF',
          borderBottom: '1px solid rgba(16, 39, 59, 0.08)'
        }}
      >
        <div className="container" style={{ maxWidth: '1040px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2
              style={{
                fontSize: 'clamp(24px, 3.2vw, 34px)',
                fontFamily: 'var(--font-serif)',
                color: '#10273B',
                margin: '0 0 14px 0',
                fontWeight: 700,
                lineHeight: 1.25,
                textWrap: 'balance'
              }}
            >
              С чем можно обратиться<br className="desktop-only" /> из другого города
            </h2>
            <p style={{ fontSize: '16px', color: '#4A5568', margin: 0, maxWidth: '680px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.55, textWrap: 'balance' }}>
              Форматы сотрудничества для доверителей<br className="desktop-only" /> из любых регионов России
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px',
              marginBottom: '32px'
            }}
          >
            {/* Карточка 1 */}
            <div
              style={{
                background: '#F8F9FA',
                border: '1px solid rgba(16, 39, 59, 0.12)',
                borderRadius: '6px',
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <h3 style={{ fontSize: '18px', color: '#10273B', margin: '0 0 10px 0', fontWeight: 600, textWrap: 'balance' }}>
                Консультация<br className="desktop-only" /> по вашей ситуации
              </h3>
              <p style={{ fontSize: '14.5px', color: '#4A5568', lineHeight: 1.6, margin: 0 }}>
                Обсудим обстоятельства, уточним документы и определим возможные дальнейшие действия. Формат, время и стоимость консультации согласуем заранее.
              </p>
            </div>

            {/* Карточка 2 */}
            <div
              style={{
                background: '#F8F9FA',
                border: '1px solid rgba(16, 39, 59, 0.12)',
                borderRadius: '6px',
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <h3 style={{ fontSize: '18px', color: '#10273B', margin: '0 0 10px 0', fontWeight: 600, textWrap: 'balance' }}>
                Анализ документов
              </h3>
              <p style={{ fontSize: '14.5px', color: '#4A5568', lineHeight: 1.6, margin: 0 }}>
                Передайте материалы по согласованному каналу. Юрист определит необходимый объём изучения и условия работы; при необходимости подготовит письменный ответ.
              </p>
            </div>

            {/* Карточка 3 */}
            <div
              style={{
                background: '#F8F9FA',
                border: '1px solid rgba(16, 39, 59, 0.12)',
                borderRadius: '6px',
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <h3 style={{ fontSize: '18px', color: '#10273B', margin: '0 0 10px 0', fontWeight: 600, textWrap: 'balance' }}>
                Подготовка документов<br className="desktop-only" /> и обращений
              </h3>
              <p style={{ fontSize: '14.5px', color: '#4A5568', lineHeight: 1.6, margin: 0 }}>
                Можно согласовать подготовку заявления, претензии, жалобы, договора или другого документа по вашей задаче. Состав работы и порядок передачи результата определяются заранее.
              </p>
            </div>

            {/* Карточка 4 */}
            <div
              style={{
                background: '#F8F9FA',
                border: '1px solid rgba(16, 39, 59, 0.12)',
                borderRadius: '6px',
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <h3 style={{ fontSize: '18px', color: '#10273B', margin: '0 0 10px 0', fontWeight: 600, textWrap: 'balance' }}>
                Представительство<br className="desktop-only" /> по делу
              </h3>
              <p style={{ fontSize: '14.5px', color: '#4A5568', lineHeight: 1.6, margin: 0 }}>
                Рассмотрим возможность участия специалиста в вашем регионе. Необходимость выезда, оформление полномочий, состав работ и расходы согласуются после изучения ситуации.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <p style={{ fontSize: '15px', color: '#4A5568', margin: '0 0 20px 0', lineHeight: 1.55 }}>
              Возможность и формат помощи зависят от вопроса, стадии дела, региона и необходимых действий. Начните с краткого описания ситуации.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/grazhdanam/"
                className="btn btn-outline"
                style={{ padding: '12px 24px', fontSize: '14.5px' }}
              >
                Посмотреть направления помощи гражданам →
              </Link>
              <Link
                href="/biznesu/"
                className="btn btn-outline"
                style={{ padding: '12px 24px', fontSize: '14.5px' }}
              >
                Посмотреть направления помощи бизнесу →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. КАК ОРГАНИЗУЕМ РАБОТУ (5 ЭТАПОВ) */}
      <section
        id="process"
        style={{
          padding: 'clamp(48px, 6vw, 80px) 0',
          background: '#F8F9FA',
          borderBottom: '1px solid rgba(16, 39, 59, 0.08)',
          scrollMarginTop: '110px'
        }}
      >
        <div className="container" style={{ maxWidth: '1040px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2
              style={{
                fontSize: 'clamp(24px, 3.2vw, 34px)',
                fontFamily: 'var(--font-serif)',
                color: '#10273B',
                margin: '0 0 14px 0',
                fontWeight: 700,
                lineHeight: 1.25,
                textWrap: 'balance'
              }}
            >
              Как мы организуем работу
            </h2>
            <p style={{ fontSize: '16px', color: '#4A5568', margin: 0, maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.55, textWrap: 'balance' }}>
              Пять последовательных шагов<br className="desktop-only" /> от первого обращения до результата
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '18px'
            }}
          >
            {[
              {
                num: '01',
                title: 'Обращение',
                text: 'Сообщите, из какого вы города, что произошло и на какой стадии находится вопрос. Если есть ближайшее заседание или другой важный срок, укажите его сразу.'
              },
              {
                num: '02',
                title: 'Подбор специалиста',
                text: 'Сотрудник компании уточнит суть обращения, сообщит, какие материалы нужны, и организует общение с профильным юристом. Выяснение сути обращения и подбор специалиста бесплатны.'
              },
              {
                num: '03',
                title: 'Согласование задачи',
                text: 'Определим необходимые действия, возможность дистанционной работы и потребность в выезде. Объём и стоимость консультации, анализа документов и дальнейшей помощи согласуем до начала платной работы.'
              },
              {
                num: '04',
                title: 'Договор и оплата',
                text: 'Договор можно оформить через ЭДО. Если у вас нет ЭДО, организуем обмен документами почтой. Условия оплаты и дополнительные расходы согласуем заранее.'
              },
              {
                num: '05',
                title: 'Работа и информирование',
                text: 'Вы взаимодействуете напрямую с выделенным юристом. Он сообщает о ходе дела, объясняет дальнейшие шаги и передаёт подготовленные материалы в согласованном порядке.'
              }
            ].map((step, idx) => (
              <div
                key={idx}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(16, 39, 59, 0.12)',
                  borderRadius: '6px',
                  padding: '24px 18px',
                  boxShadow: '0 2px 6px rgba(16, 39, 59, 0.03)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div
                  style={{
                    fontSize: '24px',
                    fontWeight: 800,
                    color: 'var(--color-primary, #C29557)',
                    fontFamily: 'var(--font-serif)',
                    marginBottom: '12px'
                  }}
                >
                  {step.num}
                </div>
                <h3 style={{ fontSize: '17px', color: '#10273B', margin: '0 0 10px 0', fontWeight: 600 }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#4A5568', lineHeight: 1.6, margin: 0 }}>
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ДОКУМЕНТЫ И ОФОРМЛЕНИЕ ПОЛНОМОЧИЙ */}
      <section
        style={{
          padding: 'clamp(48px, 6vw, 80px) 0',
          background: '#FFFFFF',
          borderBottom: '1px solid rgba(16, 39, 59, 0.08)'
        }}
      >
        <div className="container" style={{ maxWidth: '1040px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2
              style={{
                fontSize: 'clamp(24px, 3.2vw, 34px)',
                fontFamily: 'var(--font-serif)',
                color: '#10273B',
                margin: '0 0 14px 0',
                fontWeight: 700,
                lineHeight: 1.25,
                textWrap: 'balance'
              }}
            >
              Документы и оформление<br className="desktop-only" /> полномочий
            </h2>
            <p style={{ fontSize: '16px', color: '#4A5568', margin: 0, maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.55, textWrap: 'balance' }}>
              Порядок обмена файлами, подписания договора<br className="desktop-only" /> и оформления доверенности
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px'
            }}
          >
            {/* Блок 1 */}
            <div
              style={{
                background: '#F8F9FA',
                border: '1px solid rgba(16, 39, 59, 0.12)',
                borderRadius: '6px',
                padding: '24px 22px'
              }}
            >
              <h3 style={{ fontSize: '18px', color: '#10273B', margin: '0 0 12px 0', fontWeight: 600 }}>
                Как передать материалы
              </h3>
              <p style={{ fontSize: '14.5px', color: '#4A5568', lineHeight: 1.6, margin: 0 }}>
                Для первоначального изучения можно направить электронные копии по согласованному с сотрудником компании каналу. Перечень необходимых документов зависит от задачи. Если понадобятся оригиналы, юрист объяснит, какие документы и каким способом передать.
              </p>
            </div>

            {/* Блок 2 */}
            <div
              style={{
                background: '#F8F9FA',
                border: '1px solid rgba(16, 39, 59, 0.12)',
                borderRadius: '6px',
                padding: '24px 22px'
              }}
            >
              <h3 style={{ fontSize: '18px', color: '#10273B', margin: '0 0 12px 0', fontWeight: 600 }}>
                Как заключить договор
              </h3>
              <p style={{ fontSize: '14.5px', color: '#4A5568', lineHeight: 1.6, margin: 0 }}>
                Используем электронный документооборот. Если у вас нет ЭДО, можно обменяться документами почтой. Способ оформления и последовательность действий согласуем индивидуально. Вы получите свой экземпляр договора.
              </p>
            </div>

            {/* Блок 3 */}
            <div
              style={{
                background: '#F8F9FA',
                border: '1px solid rgba(16, 39, 59, 0.12)',
                borderRadius: '6px',
                padding: '24px 22px'
              }}
            >
              <h3 style={{ fontSize: '18px', color: '#10273B', margin: '0 0 12px 0', fontWeight: 600 }}>
                Нужна ли доверенность
              </h3>
              <p style={{ fontSize: '14.5px', color: '#4A5568', lineHeight: 1.6, margin: 0 }}>
                Необходимость доверенности и других подтверждений полномочий зависит от поручения. До представительства юрист сообщит, какие документы нужно оформить. Нотариальные расходы оплачиваются отдельно, если они необходимы по делу.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ПРЯМАЯ СВЯЗЬ И ЛИЧНОЕ УЧАСТИЕ */}
      <section
        style={{
          padding: 'clamp(48px, 6vw, 80px) 0',
          background: '#F8F9FA',
          borderBottom: '1px solid rgba(16, 39, 59, 0.08)'
        }}
      >
        <div className="container" style={{ maxWidth: '880px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {/* Прямая связь */}
          <div>
            <h2
              style={{
                fontSize: 'clamp(22px, 2.8vw, 30px)',
                fontFamily: 'var(--font-serif)',
                color: '#10273B',
                margin: '0 0 16px 0',
                fontWeight: 700,
                lineHeight: 1.3,
                textWrap: 'balance'
              }}
            >
              Прямая связь<br className="desktop-only" /> с вашим юристом
            </h2>
            <div style={{ fontSize: '15px', lineHeight: 1.65, color: '#4A5568', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p style={{ margin: 0 }}>
                После назначения исполнителя вы общаетесь с ним напрямую. В начале работы согласуете регулярность встреч и взаимодействия. Юрист подробно объясняет ход дела, выполненные действия и дальнейшие шаги.
              </p>
              <p style={{ margin: 0 }}>
                Если возникают дополнительные вопросы, вы можете запросить информацию вне согласованного графика. Канал связи и порядок взаимодействия обсуждаются с юристом.
              </p>
            </div>
          </div>

          <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(16, 39, 59, 0.08)' }} />

          {/* Когда может потребоваться личное участие */}
          <div>
            <h2
              style={{
                fontSize: 'clamp(22px, 2.8vw, 30px)',
                fontFamily: 'var(--font-serif)',
                color: '#10273B',
                margin: '0 0 16px 0',
                fontWeight: 700,
                lineHeight: 1.3,
                textWrap: 'balance'
              }}
            >
              Когда может потребоваться<br className="desktop-only" /> личное участие
            </h2>
            <div style={{ fontSize: '15px', lineHeight: 1.65, color: '#4A5568', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p style={{ margin: 0 }}>
                Начать общение и согласовать помощь можно из другого города. Дальнейший формат зависит от конкретных действий: иногда требуются оригиналы документов, оформление полномочий, личное участие клиента или присутствие представителя.
              </p>
              <p style={{ margin: 0 }}>
                Если потребуется выезд специалиста, заранее обсудим его необходимость, территорию, стоимость и связанные расходы. Возможность работы в конкретном регионе определим после уточнения задачи.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. СТОИМОСТЬ И ОПЛАТА */}
      <section
        style={{
          padding: 'clamp(48px, 6vw, 80px) 0',
          background: '#FFFFFF',
          borderBottom: '1px solid rgba(16, 39, 59, 0.08)'
        }}
      >
        <div className="container" style={{ maxWidth: '880px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(24px, 3.2vw, 34px)',
              fontFamily: 'var(--font-serif)',
              color: '#10273B',
              margin: '0 0 20px 0',
              fontWeight: 700,
              lineHeight: 1.25,
              textAlign: 'center',
              textWrap: 'balance'
            }}
          >
            Стоимость и порядок оплаты
          </h2>
          <div style={{ fontSize: '15.5px', lineHeight: 1.65, color: '#4A5568', display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
            <p style={{ margin: 0 }}>
              Выяснение сути обращения и подбор специалиста бесплатны. Необходимость и стоимость консультации или анализа документов зависят от ситуации и объёма материалов; платную работу согласуем заранее.
            </p>
            <p style={{ margin: 0 }}>
              Если после консультации или анализа вы заключаете договор на дальнейшую работу по этому вопросу, внесённая оплата засчитывается в стоимость договора. Цена дальнейшей помощи зависит от необходимых действий, объёма материалов и возможных выездов.
            </p>
            <p style={{ margin: 0 }}>
              Расходы на командировки, нотариальные действия и другие необходимые расходы по делу согласуются отдельно.
            </p>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <Link
              href="/stoimost/"
              className="btn btn-outline"
              style={{ padding: '14px 30px', fontSize: '15px' }}
            >
              Стоимость услуг и порядок оплаты →
            </Link>
          </div>

          <div
            style={{
              background: 'rgba(23, 50, 77, 0.04)',
              padding: '16px 20px',
              borderLeft: '4px solid var(--color-primary, #C29557)',
              fontSize: '14px',
              lineHeight: 1.6,
              color: '#334155'
            }}
          >
            Адвокатская помощь оказывается независимым адвокатом по отдельному соглашению с доверителем. Условия участия и оплаты согласуются с адвокатом.
          </div>
        </div>
      </section>

      {/* 7. ОТВЕТЫ НА ЧАСТЫЕ ВОПРОСЫ (FAQ) */}
      <section
        style={{
          padding: 'clamp(48px, 6vw, 80px) 0',
          background: '#F8F9FA',
          borderBottom: '1px solid rgba(16, 39, 59, 0.08)'
        }}
      >
        <div className="container" style={{ maxWidth: '880px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2
              style={{
                fontSize: 'clamp(24px, 3.2vw, 34px)',
                fontFamily: 'var(--font-serif)',
                color: '#10273B',
                margin: '0 0 14px 0',
                fontWeight: 700,
                lineHeight: 1.25
              }}
            >
              Ответы на частые вопросы
            </h2>
            <p style={{ fontSize: '16px', color: '#4A5568', margin: 0, lineHeight: 1.55 }}>
              Разъяснения по взаимодействию и юридической поддержке клиентов из других городов
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqItems.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid rgba(16, 39, 59, 0.12)',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease',
                    boxShadow: isOpen ? '0 4px 14px rgba(16, 39, 59, 0.06)' : 'none'
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    style={{
                      width: '100%',
                      padding: '18px 22px',
                      background: isOpen ? '#F4F7FA' : '#FFFFFF',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      cursor: 'pointer',
                      gap: '16px',
                      outline: 'none'
                    }}
                  >
                    <span style={{ fontSize: '16.5px', fontWeight: 600, color: '#10273B', lineHeight: 1.4 }}>
                      {item.q}
                    </span>
                    <span
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s ease',
                        color: 'var(--color-primary, #C29557)',
                        flexShrink: 0
                      }}
                    >
                      ▼
                    </span>
                  </button>
                  <div
                    style={{
                      padding: isOpen ? '16px 22px 22px' : '0 22px',
                      maxHeight: isOpen ? '500px' : '0',
                      opacity: isOpen ? 1 : 0,
                      overflow: 'hidden',
                      transition: 'all 0.25s ease',
                      fontSize: '15px',
                      color: '#4A5568',
                      lineHeight: 1.6
                    }}
                  >
                    {item.a}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. ФОРМА ОБРАЩЕНИЯ (#request) */}
      <section
        id="request"
        style={{
          padding: 'clamp(48px, 6vw, 84px) 0',
          background: '#FFFFFF',
          scrollMarginTop: '110px'
        }}
      >
        <div className="container" style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2
              style={{
                fontSize: 'clamp(24px, 3.2vw, 34px)',
                fontFamily: 'var(--font-serif)',
                color: '#10273B',
                margin: '0 0 14px 0',
                fontWeight: 700,
                lineHeight: 1.25
              }}
            >
              Обсудите помощь в вашем регионе
            </h2>
            <p style={{ fontSize: '16px', color: '#4A5568', margin: 0, lineHeight: 1.55 }}>
              Укажите город, кратко опишите вопрос и оставьте номер телефона. Уточним ситуацию и предложим возможный формат работы.
            </p>
          </div>

          {submitted ? (
            <div
              style={{
                padding: '36px 28px',
                backgroundColor: '#F0FDF4',
                border: '1px solid #86EFAC',
                borderRadius: '6px',
                textAlign: 'center'
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: '#22C55E',
                  color: '#FFFFFF',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 style={{ fontSize: '22px', color: '#166534', margin: '0 0 10px 0', fontWeight: 600 }}>
                Обращение успешно отправлено
              </h3>
              <p style={{ fontSize: '16px', color: '#15803D', margin: '0 0 20px 0', lineHeight: 1.5 }}>
                Специалист ЮК «Де-Юре» свяжется с вами в ближайшее рабочее время для уточнения обстоятельств и формата помощи в вашем регионе.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setName('');
                  setCity('');
                  setPhone('');
                  setDescription('');
                }}
                className="btn btn-outline"
                style={{ padding: '10px 24px', fontSize: '14px' }}
              >
                Отправить ещё одно обращение
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Город или регион (обязательный) */}
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#10273B', marginBottom: '8px' }}>
                  Ваш город или регион <span style={{ color: '#E53E3E' }}>*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Например: Воронеж, Москва, Тамбов или область"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    fontSize: '15px',
                    borderRadius: '4px',
                    border: '1px solid rgba(16, 39, 59, 0.25)',
                    backgroundColor: '#FFFFFF',
                    color: '#10273B'
                  }}
                />
              </div>

              {/* Телефон (обязательный) */}
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#10273B', marginBottom: '8px' }}>
                  Телефон для связи <span style={{ color: '#E53E3E' }}>*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+7 (___) ___-__-__"
                  value={phone}
                  onChange={handlePhoneChange}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    fontSize: '16px',
                    borderRadius: '4px',
                    border: '1px solid rgba(16, 39, 59, 0.25)',
                    backgroundColor: '#FFFFFF',
                    color: '#10273B'
                  }}
                />
              </div>

              {/* Имя (необязательное) */}
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#10273B', marginBottom: '8px' }}>
                  Ваше имя (необязательно)
                </label>
                <input
                  type="text"
                  placeholder="Как к вам обращаться"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    fontSize: '15px',
                    borderRadius: '4px',
                    border: '1px solid rgba(16, 39, 59, 0.25)',
                    backgroundColor: '#FFFFFF',
                    color: '#10273B'
                  }}
                />
              </div>

              {/* Описание ситуации (необязательное) */}
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#10273B', marginBottom: '8px' }}>
                  Кратко опишите вопрос (необязательно)
                </label>
                <textarea
                  rows={4}
                  placeholder="Суть вопроса, стадия дела или дата ближайшего заседания"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    fontSize: '15px',
                    borderRadius: '4px',
                    border: '1px solid rgba(16, 39, 59, 0.25)',
                    backgroundColor: '#FFFFFF',
                    color: '#10273B',
                    resize: 'vertical',
                    fontFamily: 'inherit'
                  }}
                />
                <div style={{ fontSize: '13px', color: '#718096', marginTop: '6px', lineHeight: 1.4 }}>
                  Не указывайте паспортные данные и другие конфиденциальные сведения. Способ передачи документов согласуем отдельно.
                </div>
              </div>

              {/* Согласие с политикой конфиденциальности */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <input
                  type="checkbox"
                  id="agree-remote"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  style={{ marginTop: '3px', cursor: 'pointer', width: '16px', height: '16px' }}
                />
                <label htmlFor="agree-remote" style={{ fontSize: '13px', color: '#4A5568', lineHeight: 1.5, cursor: 'pointer' }}>
                  Согласен на обработку персональных данных в соответствии с{' '}
                  <Link href="/privacy" target="_blank" style={{ color: 'var(--color-primary, #C29557)', textDecoration: 'underline' }}>
                    политикой конфиденциальности
                  </Link>
                </label>
              </div>

              {error && (
                <div style={{ padding: '12px 16px', backgroundColor: '#FEF2F2', border: '1px solid #FCA5A5', borderRadius: '4px', color: '#991B1B', fontSize: '14px' }}>
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  padding: '16px 24px',
                  fontSize: '16px',
                  fontWeight: 600,
                  minHeight: '52px',
                  cursor: loading ? 'wait' : 'pointer',
                  opacity: loading ? 0.7 : 1
                }}
              >
                {loading ? 'Отправка...' : 'Обсудить формат помощи'}
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
