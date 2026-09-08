'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MilitaryHero from '@/components/MilitaryHero';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import PricingBlock, { PricingTier } from '@/components/PricingBlock';

export default function ObzhalovanieClient() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LegalService',
        '@id': 'https://dejure-help.ru/#organization',
        'name': 'ЮК «Де-Юре»',
        'url': 'https://dejure-help.ru',
        'logo': 'https://dejure-help.ru/images/logo_dark.png',
        'telephone': '+7 (910) 350-31-11',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'ул. Советская, д. 35, оф. 213',
          'addressLocality': 'Липецк',
          'addressRegion': 'Липецкая область',
          'addressCountry': 'RU'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/obzhalovanie-resheniya-arbitrazhnogo-suda/#breadcrumbs',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Главная', 'item': 'https://dejure-help.ru/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Бизнесу', 'item': 'https://dejure-help.ru/biznesu/' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Арбитражный юрист', 'item': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Обжалование решения', 'item': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/obzhalovanie-resheniya-arbitrazhnogo-suda/' }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/obzhalovanie-resheniya-arbitrazhnogo-suda/#service',
        'url': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/obzhalovanie-resheniya-arbitrazhnogo-suda/',
        'name': 'Обжалование решения арбитражного суда в Липецке',
        'provider': { '@id': 'https://dejure-help.ru/#organization' },
        'areaServed': [
          { '@type': 'AdministrativeArea', 'name': 'Липецкая область' },
          { '@type': 'Country', 'name': 'Россия' }
        ],
        'description': 'Апелляционное (19 ААС Воронеж) и кассационное (АС ЦО Калуга) обжалование судебных актов арбитражных судов, приостановление исполнения и восстановление сроков.'
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/obzhalovanie-resheniya-arbitrazhnogo-suda/#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'В какой срок можно обжаловать решение арбитражного суда?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Апелляционная жалоба подаётся в течение 1 месяца со дня принятия решения в полном объёме. Кассационная жалоба — в течение 2 месяцев со дня вступления решения в законную силу.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Можно ли приостановить исполнение решения суда при обжаловании?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Да. В суд кассационной инстанции подаётся ходатайство о приостановлении исполнения судебного акта с обоснованием невозможности поворота исполнения или внесением встречного обеспечения.'
            }
          }
        ]
      }
    ]
  };

  const situations = [
    {
      tag: 'Апелляция 19 ААС',
      title: 'Не вступившее в силу решение',
      desc: 'Суд первой инстанции вынес решение не в вашу пользу. В течение 1 месяца подаём апелляционную жалобу в 19 ААС (Воронеж).'
    },
    {
      tag: 'Кассация АС ЦО',
      title: 'Вступивший в силу судебный акт',
      desc: 'Апелляция оставила решение в силе. Подаём кассационную жалобу в Арбитражный суд Центрального округа (Калуга).'
    },
    {
      tag: 'Защита решения',
      title: 'Оппонент обжалует решение',
      desc: 'Вы выиграли суд, но другая сторона подала жалобу. Готовим мотивированный отзыв на жалобу и отстаиваем акт.'
    },
    {
      tag: 'Пропущен срок',
      title: 'Пропущен срок на обжалование',
      desc: 'Решение получено с опозданием или не по вине компании. Готовим ходатайство о восстановлении пропущенного процессуального срока.'
    },
    {
      tag: 'Приостановление',
      title: 'Угроза списания денег по листу',
      desc: 'Решение вступило в силу, но готовится кассация. Заявляем ходатайство о приостановлении исполнения решения суда.'
    },
    {
      tag: 'Вторая кассация',
      title: 'Экономическая коллегия ВС РФ',
      desc: 'Исключительные споры с грубым нарушением норм права. Готовим жалобу в Верховный Суд Российской Федерации.'
    }
  ];

  const urgentItems = [
    {
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Срок апелляции:</span> <br />
          <span style={{ display: 'inline-block' }}>строго 1 месяц</span>
        </span>
      ),
      desc: 'Срок исчисляется со дня изготовления решения в полном объёме; пропуск лишает права на пересмотр дела по существу.'
    },
    {
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Срок кассации:</span> <br />
          <span style={{ display: 'inline-block' }}>строго 2 месяца</span>
        </span>
      ),
      desc: 'Кассационная жалоба подаётся через суд первой инстанции в Арбитражный суд Центрального округа.'
    },
    {
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Списание средств</span> <br />
          <span style={{ display: 'inline-block' }}>со счёта банком</span>
        </span>
      ),
      desc: 'Вступившее в силу решение позволяет истцу мгновенно списать деньги по исполнительному листу.'
    },
    {
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Запрет на новые</span> <br />
          <span style={{ display: 'inline-block' }}>доказательства в апелляции</span>
        </span>
      ),
      desc: 'В 19 ААС новые доказательства принимаются только при строгом обосновании невозможности их подачи в первой инстанции.'
    },
    {
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Оставление жалобы</span> <br />
          <span style={{ display: 'inline-block' }}>без движения</span>
        </span>
      ),
      desc: 'Неуплата пошлины или отсутствие доказательств отправки жалобы оппоненту затягивают процесс и срывают сроки.'
    },
    {
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Преюдиция для других</span> <br />
          <span style={{ display: 'inline-block' }}>судебных процессов</span>
        </span>
      ),
      desc: 'Необжалованный акт установит факты, которые оппоненты используют в других спорах и при банкротстве.'
    }
  ];

  const stages = [
    {
      num: '01',
      stage: 'Правовой аудит решения и материалов дела',
      works: 'Изучаем решение суда, аудиопротоколы заседаний и материалы дела; выявляем нарушения норм материального и процессуального права.',
      result: 'Заключение о перспективах отмены или изменения судебного акта'
    },
    {
      num: '02',
      stage: 'Составление мотивированной жалобы',
      works: 'Формулируем основания для отмены решения (ст. 270 или 288 АПК РФ), делаем ссылки на практику ВС РФ и вышестоящих судов.',
      result: 'Апелляционная или кассационная жалоба, соответствующая всем критериям закона'
    },
    {
      num: '03',
      stage: 'Ходатайство о приостановлении исполнения',
      works: 'Обосновываем необходимость приостановления взыскания денежных средств до рассмотрения кассационной жалобы.',
      result: 'Определение суда о приостановлении исполнения судебного акта'
    },
    {
      num: '04',
      stage: 'Подача жалобы через арбитражный суд',
      works: 'Направляем копии всем участникам дела, оплачиваем пошлину и подаём жалобу через «Мой Арбитр».',
      result: 'Регистрация жалобы и назначение даты рассмотрения в вышестоящем суде'
    },
    {
      num: '05',
      stage: 'Представительство в 19 ААС, АС ЦО или ВС РФ',
      works: 'Лично выезжаем в Воронеж / Калугу / Москву либо участвуем онлайн, отстаиваем доводы жалобы перед коллегией судей.',
      result: 'Постановление вышестоящего суда об отмене или изменении судебного акта'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Аудит решения и подготовка жалобы',
      subtitle: 'Анализ решения суда первой инстанции и составление мотивированной апелляционной или кассационной жалобы',
      price: 'от 30 000 ₽',
      popular: false,
      features: [
        { name: 'Аудит решения и протоколов заседаний', value: '✓' },
        { name: 'Выявление нарушений норм материального права', value: '✓' },
        { name: 'Составление мотивированной жалобы', value: '✓' },
        { name: 'Ходатайство о восстановлении срока (при необходимости)', value: '✓' }
      ],
      buttonText: 'Заказать жалобу',
      buttonHref: '#form'
    },
    {
      title: 'Обжалование «под ключ» (19 ААС / АС ЦО)',
      subtitle: 'Подготовка жалобы, подача и личное участие в судебных заседаниях апелляционной или кассационной инстанции',
      price: 'от 75 000 ₽',
      popular: true,
      badgeText: 'Популярно',
      features: [
        { name: 'Все услуги тарифа «Аудит и жалоба»', value: '✓' },
        { name: 'Подача жалобы через «Мой Арбитр»', value: '✓' },
        { name: 'Ходатайство о приостановлении исполнения', value: '✓' },
        { name: 'Личное / онлайн участие в заседаниях коллегии', value: '✓' },
        { name: 'Письменные дополнения и возражения на отзывы', value: '✓' }
      ],
      buttonText: 'Поручить обжалование',
      buttonHref: '#form'
    },
    {
      title: 'Защита судебного акта от жалобы оппонента',
      subtitle: 'Подготовка отзыва на апелляционную или кассационную жалобу оппонента и защита принятого решения',
      price: 'от 45 000 ₽',
      popular: false,
      features: [
        { name: 'Анализ доводов жалобы оппонента', value: '✓' },
        { name: 'Составление мотивированного отзыва на жалобу', value: '✓' },
        { name: 'Участие в заседании вышестоящего суда', value: '✓' },
        { name: 'Оставление решения суда в силе', value: '✓' }
      ],
      buttonText: 'Защитить решение',
      buttonHref: '#form'
    }
  ];

  const cases: CaseData[] = [
    {
      category: 'Апелляция • 19 ААС Воронеж',
      title: 'Полная отмена решения о расторжении договора аренды',
      problem: 'Суд первой инстанции расторг договор аренды складов площадью 2 400 м² по формальным основаниям арендодателя.',
      action: 'В суде апелляционной инстанции доказали отсутствие существенных нарушений и недобросовестность действий арендодателя.',
      result: 'Решение суда первой инстанции отменено полностью, права арендатора сохранены.'
    },
    {
      category: 'Кассация • АС Центрального округа Калуга',
      title: 'Отмена взыскания 11,3 млн ₽ и направление дела на новое рассмотрение',
      problem: 'Суды первой и апелляционной инстанций неправомерно взыскали с подрядчика убытки без проведения экспертизы.',
      action: 'Кассационная жалоба доказала нарушение ст. 71 и 82 АПК РФ о необходимости назначения специальной экспертизы.',
      result: 'Все судебные акты отменены, дело направлено на новое рассмотрение.'
    },
    {
      category: 'Приостановление исполнения • АС ЦО',
      title: 'Приостановление списания 6,8 млн ₽ со счетов компании',
      problem: 'Истец получил исполнительный лист и предъявил его в банк ответчика до рассмотрения кассационной жалобы.',
      action: 'Подали срочное ходатайство в суд кассационной инстанции с обоснованием риска банкротства компании.',
      result: 'Исполнение решения суда приостановлено, денежные средства сохранены в обороте бизнеса.'
    }
  ];

  const faqs = [
    {
      q: 'В какой срок можно обжаловать решение арбитражного суда?',
      a: 'Апелляционная жалоба подаётся в течение 1 месяца со дня принятия решения в полном объёме. Кассационная жалоба — в течение 2 месяцев со дня вступления решения в законную силу.'
    },
    {
      q: 'Куда подаётся апелляционная жалоба на решение АС Липецкой области?',
      a: 'Жалоба адресуется в Девятнадцатый арбитражный апелляционный суд (г. Воронеж), но подаётся через Арбитражный суд Липецкой области (ст. 257 АПК РФ).'
    },
    {
      q: 'Куда подаётся кассационная жалоба?',
      a: 'Кассационная жалоба подаётся в Арбитражный суд Центрального округа (г. Калуга) через суд первой инстанции, принявший первоначальное решение.'
    },
    {
      q: 'Можно ли приостановить исполнение решения суда при обжаловании?',
      a: 'Да. В суд кассационной инстанции подаётся ходатайство о приостановлении исполнения судебного акта с обоснованием невозможности поворота исполнения или внесением встречного обеспечения.'
    },
    {
      q: 'Что делать, если срок обжалования пропущен?',
      a: 'Если срок пропущен по уважительной причине (позднее изготовление решения, сбои в почтовой доставке), одновременно с жалобой подаётся ходатайство о восстановлении пропущенного срока.'
    }
  ];

  return (
    <main style={{ position: 'relative', overflowX: 'hidden' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      {/* ═══ БЛОК 1: HERO ═══ */}
      <MilitaryHero
        breadcrumbs={
          <>
            <Link href="/">Главная</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/biznesu/">Бизнесу</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/biznesu/arbitrazhnyj-yurist/">Арбитражный юрист</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Обжалование решения</span>
          </>
        }
        superTitle={
          <span style={{ whiteSpace: 'normal', display: 'inline-block', lineHeight: 1.4 }}>
            <span style={{ display: 'inline-block' }}>Пересмотр судебных актов •</span> <br />
            <span style={{ display: 'inline-block' }}>19 ААС Воронеж, АС ЦО Калуга, ВС РФ</span>
          </span>
        }
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Обжалование решения
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              арбитражного суда в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Проверим решение и материалы дела, оценим основания и сроки апелляции или кассации, приостановим исполнение и добьёмся отмены неправосудного акта.
          </span>
        }
        primaryCtaText="Оценить перспективы обжалования"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_obzhalovanie"
        primaryCtaSubtext={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Перезвоним вам в рабочее время
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              или ответим по телефону: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (910) 350-31-11</a>
            </span>
          </span>
        }
        trustItems={[
          { text: 'Апелляционные жалобы в 19 ААС (Воронеж)' },
          { text: 'Кассационные жалобы в АС Центрального округа (Калуга)' },
          { text: 'Приостановление исполнения судебных решений' },
          { text: 'Восстановление пропущенных процессуальных сроков' }
        ]}
        imageUrl="/images/hero_legal_premium.png"
        imageName="Судебная практика ЮК «Де-Юре»"
        imageSubtitle="Апелляционное и кассационное представительство в арбитражных судах РФ"
        imageObjectPosition="center 20%"
      />

      {/* ═══ БЛОК 2: СИТУАЦИИ ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'inline-block' }}>С какими задачами</span> <br /><span style={{ display: 'inline-block' }}>по обжалованию мы работаем</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Ведём дела на всех стадиях пересмотра судебных актов.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '32px' }}>
            {situations.map((item, i) => (
              <div key={i} className="hover-lift" style={{
                padding: '36px 30px',
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-primary)',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}>
                <div>
                  <div style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: 'var(--color-gold)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '14px',
                    background: 'rgba(193, 160, 102, 0.1)',
                    padding: '4px 10px',
                    alignSelf: 'flex-start',
                    display: 'inline-block'
                  }}>
                    {item.tag}
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '18px',
                    fontWeight: 600,
                    color: 'var(--color-deep-blue)',
                    margin: '0 0 14px 0',
                    lineHeight: 1.35
                  }}>
                    {item.title}
                  </h3>

                  <p style={{
                    fontSize: '15px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: СРОЧНЫЕ СИТУАЦИИ ═══ */}
      <section style={{ background: 'var(--color-deep-blue)', padding: '64px 0 56px', position: 'relative', overflow: 'hidden' }} id="urgent">
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '36px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontFamily: 'var(--font-serif)', color: '#FFFFFF', marginBottom: '12px', marginTop: 0, lineHeight: 1.25 }}>
              <span style={{ display: 'inline-block' }}>Сроки обжалования</span> <br />
              <span style={{ display: 'inline-block' }}>в арбитражном процессе</span>
            </h2>
            <div style={{ width: '60px', height: '2px', background: 'var(--color-gold)', marginBottom: '20px' }}></div>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', marginBottom: '40px', maxWidth: '720px', lineHeight: 1.6 }}>
              Пропуск срока на подачу жалобы означает вступление решения в силу и начало принудительного исполнения.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '20px', marginBottom: '40px' }}>
            {urgentItems.map((item, i) => (
              <div
                key={i}
                className="urgent-card"
                style={{
                  background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)',
                  padding: '30px 24px',
                  borderTop: '4px solid var(--color-gold)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <div style={{ fontSize: '16.5px', fontWeight: 700, color: 'var(--color-deep-blue)', lineHeight: 1.35, fontFamily: 'var(--font-serif)' }}>
                      {item.title}
                    </div>
                  </div>
                  <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '14px', lineHeight: 1.55, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '28px', display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <a href="tel:+79103503111" style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 600, textDecoration: 'none' }}>
              +7 (910) 350-31-11
            </a>
            <a href="tel:+79103503111" className="btn btn-urgent-call" style={{ padding: '14px 28px', fontSize: '15px' }}>
              Позвонить юристу
            </a>
            <a href="#form" className="btn btn-urgent-outline" style={{ padding: '14px 28px', fontSize: '15px' }}>
              Оценить решение суда
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: ЭТАПЫ ═══ */}
      <section className="section bg-light" id="process" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px', textAlign: 'left' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
              Порядок обжалования решений
            </div>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Этапы обжалования</span> <br />
              <span style={{ display: 'inline-block' }}>судебных актов</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Точная процессуальная работа от аудита решения до защиты доводов в коллегиях апелляционных и кассационных судов.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {stages.map((step, idx) => (
              <div
                key={idx}
                className="hover-lift stage-horizontal-card"
                style={{
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  border: '1px solid var(--color-border)',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                  padding: '28px 32px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '28px',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div className="stage-accent" />
                <div style={{ flex: '1 1 520px', minWidth: '280px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', fontWeight: 700, color: 'var(--color-gold)', lineHeight: 1 }}>
                      {step.num}
                    </span>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', background: 'rgba(23, 50, 77, 0.06)', padding: '3px 8px' }}>
                      Этап {step.num}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '19px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0', lineHeight: 1.35, fontWeight: 600 }}>
                    {step.stage}
                  </h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {step.works}
                  </p>
                </div>
                <div style={{ flex: '1 1 320px', minWidth: '260px', background: '#FAF7F2', border: '1px solid rgba(193, 160, 102, 0.25)', borderLeft: '3px solid var(--color-gold)', padding: '16px 20px', boxSizing: 'border-box' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <polyline points="9 11 12 14 22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                    <strong style={{ fontSize: '11.5px', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Результат этапа
                    </strong>
                  </div>
                  <span style={{ fontSize: '13.5px', color: 'var(--color-deep-blue)', lineHeight: 1.45, fontWeight: 500, display: 'block' }}>
                    {step.result}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость обжалования решений арбитража"
        subtitle="Прозрачные тарифы на подготовку жалоб и представительство в вышестоящих судах."
        tiers={pricingTiers}
        disclaimer="Понесённые судебные расходы на обжалование и услуги юриста взыскиваются с оппонента после победы в вышестоящем суде."
      />

      {/* ═══ БЛОК 6: КЕЙСЫ ═══ */}
      <CasesBlock
        title="Примеры отмены решений из практики"
        showAllLink="/praktika/"
        showAllText="Смотреть все дела"
        showDemoWarning={true}
        cases={cases}
      />

      {/* ═══ БЛОК 7: FAQ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы"
        title="Вопросы об обжаловании судебных актов"
        subtitle="Сроки апелляции и кассации, приостановление исполнения и порядок подачи жалоб"
        faqs={faqs}
      />

      {/* ═══ БЛОК 8: ОФИС В ЛИПЕЦКЕ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '48px', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
                Офис в Липецке
              </div>
              <h2 className="with-accent" style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.25 }}>
                <span style={{ display: 'inline-block' }}>Обсудить решение</span> <br />
                <span style={{ display: 'inline-block' }}>в офисе «Де-Юре»</span>
              </h2>
              <p style={{ fontSize: '15.5px', color: 'var(--color-deep-blue)', opacity: 0.9, lineHeight: 1.6, marginBottom: '24px' }}>
                Встретимся в офисе либо передайте решение суда в электронном виде для правового анализа.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
                <span style={{ fontSize: '14.5px', color: 'var(--color-deep-blue)' }}><strong>Адрес:</strong> г. Липецк, ул. Советская, д. 35, оф. 213</span>
                <span style={{ fontSize: '14.5px', color: 'var(--color-deep-blue)' }}><strong>Телефон:</strong> +7 (910) 350-31-11</span>
                <span style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)' }}>Пн–Пт с 9:00 до 18:00 (по предварительной записи)</span>
              </div>
              <a href="#form" className="btn btn-primary" style={{ padding: '12px 28px' }}>
                Записаться на встречу
              </a>
            </div>
            <div style={{ background: 'var(--color-white)', border: '1px solid var(--color-border)', boxShadow: '0 8px 30px rgba(23, 50, 77, 0.08)', minHeight: '380px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ flex: 1, minHeight: '320px' }}>
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=39.585799%2C52.604024&amp;z=17&amp;pt=39.585799%2C52.604024%2Cpm2blm"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0, width: '100%', height: '100%', minHeight: '320px' }}
                  allowFullScreen={true}
                  title="Офис ЮК Де-Юре: г. Липецк, ул. Советская, д. 35, оф. 213"
                  loading="lazy"
                ></iframe>
              </div>
              <a
                href="https://yandex.ru/maps/?pt=39.585799,52.604024&z=17&text=%D0%B3.+%D0%9B%D0%B8%D0%BF%D0%B5%D1%86%D0%BA,+%D1%83%D0%BB.+%D0%A1%D0%BE%D0%B2%D0%B5%D1%82%D1%81%D0%BA%D0%B0%D1%8F,+%D0%B4.+35"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-route-map"
                style={{ width: '100%', textAlign: 'center', padding: '14px 20px', borderTop: '1px solid var(--color-border)' }}
              >
                Построить маршрут до офиса
              </a>
            </div>
          </div>
        </div>
      </section>

            {/* ═══ БЛОК 9: ФОРМА (СВЯЗАТЬСЯ С НАМИ) — ШАБЛОН ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px', padding: '80px 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  Связаться с нами
                </span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Поручите обжалование</span> <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>судебным юристам</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Укажите дату вынесения решения и суд. Срочно проверим процессуальные сроки на апелляцию или кассацию и свяжемся с вами.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация юриста</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните прямо сейчас: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (910) 350-31-11</a>
                </p>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Конфиденциальность:</strong>
                Не указывайте в форме конфиденциальные данные. Решение суда и материалы можно передать после согласования защищённого канала связи.
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Написать нам"
                subtitle={
                  <>
                    <span style={{ display: 'inline-block' }}>Оставьте имя и номер телефона. Юрист свяжется с вами</span> <br />
                    <span style={{ display: 'inline-block' }}>в течение 15 минут в рабочее время.</span>
                  </>
                }
                subtext={
                  <>
                    <span style={{ display: 'inline-block' }}>Если вы оставите заявку вечером или в&nbsp;выходной день,</span> <br />
                    <span style={{ display: 'inline-block' }}>мы перезвоним в&nbsp;ближайший рабочий день.</span>
                  </>
                }
                buttonText="Обжаловать судебный акт"
                commentPlaceholder="Кратко укажите: суд, номер дела, дату решения, основания несогласия…"
                hiddenFields={[
                  { name: 'source_page', value: '/biznesu/arbitrazhnyj-yurist/obzhalovanie-resheniya-arbitrazhnogo-suda/' },
                  { name: 'page_type', value: 'service' },
                  { name: 'direction', value: 'arbitrazh' },
                  { name: 'service', value: 'obzhalovanie-resheniya-arbitrazhnogo-suda' }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
