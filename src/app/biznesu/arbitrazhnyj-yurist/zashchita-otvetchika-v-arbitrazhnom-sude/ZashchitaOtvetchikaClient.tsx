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

export default function ZashchitaOtvetchikaClient() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LegalService',
        '@id': 'https://dejure-help.ru/#organization',
        'name': 'ЮК «Де-Юре»',
        'url': 'https://dejure-help.ru',
        'logo': 'https://dejure-help.ru/images/logo_dark.png',
        'telephone': '+7 (4742) 20-15-25',
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
        '@id': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/zashchita-otvetchika-v-arbitrazhnom-sude/#breadcrumbs',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Главная', 'item': 'https://dejure-help.ru/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Бизнесу', 'item': 'https://dejure-help.ru/biznesu/' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Арбитражный юрист', 'item': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Защита ответчика', 'item': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/zashchita-otvetchika-v-arbitrazhnom-sude/' }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/zashchita-otvetchika-v-arbitrazhnom-sude/#service',
        'url': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/zashchita-otvetchika-v-arbitrazhnom-sude/',
        'name': 'Защита ответчика в арбитражном суде в Липецке',
        'provider': { '@id': 'https://dejure-help.ru/#organization' },
        'areaServed': [
          { '@type': 'AdministrativeArea', 'name': 'Липецкая область' },
          { '@type': 'Country', 'name': 'Россия' }
        ],
        'description': 'Срочный анализ иска, подготовка мотивированного отзыва, снижение неустойки по ст. 333 ГК РФ, встречный иск, снятие арестов и судебная защита бизнеса.'
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/zashchita-otvetchika-v-arbitrazhnom-sude/#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Что делать, если получен иск из арбитражного суда?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Необходимо срочно изучить карточку дела в системе «Мой Арбитр», проверить процессуальный срок для подачи отзыва, запросить материалы дела и привлечь юриста для формирования возражений.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Как снизить неустойку по статье 333 ГК РФ?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Для предпринимателей снижение неустойки возможно исключительно по письменному мотивированному заявлению ответчика с представлением контррасчёта и доказательств несоразмерности последствиям нарушения.'
            }
          }
        ]
      }
    ]
  };

  const situations = [
    {
      tag: 'Получен иск',
      title: 'Иск или определение арбитражного суда',
      desc: 'Контрагент предъявил завышенные требования. Требуется срочно изучить иск, проверить расчёт и подготовить мотивированный отзыв.'
    },
    {
      tag: 'Завышенная неустойка',
      title: 'Неустойка превышает разумные пределы',
      desc: 'Истец начислил грабительские штрафы и проценты. Заявляем ходатайство по ст. 333 ГК РФ и снижаем сумму требований.'
    },
    {
      tag: 'Встречные претензии',
      title: 'У вас есть встречные требования',
      desc: 'Истец сам сорвал сроки, поставил некачественный товар или причинил убытки. Подаём встречный иск для зачёта требований.'
    },
    {
      tag: 'Арест счетов',
      title: 'Наложен арест на счета компании',
      desc: 'Суд принял обеспечительные меры по заявлению истца. Подаём ходатайство об отмене ареста или замене мер.'
    },
    {
      tag: 'Мировое соглашение',
      title: 'Нужна рассрочка и фиксация графика',
      desc: 'Долг частично обоснован, но единовременная выплата разрушит бизнес. Согласуем мировое соглашение с комфортным графиком.'
    },
    {
      tag: 'Пропуск сроков',
      title: 'Истекает срок на подачу отзыва',
      desc: 'Судебное заседание уже скоро. Срочно подаём предварительные возражения и знакомимся с материалами дела.'
    }
  ];

  const urgentItems = [
    {
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Пропуск срока</span> <br />
          <span style={{ display: 'inline-block' }}>на подачу отзыва</span>
        </span>
      ),
      desc: 'Если отзыв не представлен вовремя, суд вправе рассмотреть дело по имеющимся доказательствам истца.'
    },
    {
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Арест расчётных счетов</span> <br />
          <span style={{ display: 'inline-block' }}>компании</span>
        </span>
      ),
      desc: 'Обеспечительные меры блокируют выплату зарплат, налоги и закупки. Требуется срочное ходатайство об отмене мер.'
    },
    {
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Заочное удовлетворение</span> <br />
          <span style={{ display: 'inline-block' }}>требований истца</span>
        </span>
      ),
      desc: 'Отсутствие возражений ответчика суд трактует как признание обстоятельств, на которые ссылается истец.'
    },
    {
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Утрата права на снижение</span> <br />
          <span style={{ display: 'inline-block' }}>неустойки (ст. 333 ГК)</span>
        </span>
      ),
      desc: 'Заявление о снижении неустойки можно подать только в суде первой инстанции до вынесения решения.'
    },
    {
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Преюдиция для иска</span> <br />
          <span style={{ display: 'inline-block' }}>о банкротстве</span>
        </span>
      ),
      desc: 'Решение арбитража на сумму от 2 млн ₽ даёт оппоненту право немедленно инициировать банкротство вашей компании.'
    },
    {
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Риск субсидиарной</span> <br />
          <span style={{ display: 'inline-block' }}>ответственности директора</span>
        </span>
      ),
      desc: 'Невнимательность к процессу формирует безнадёжный долг, который впоследствии переложат на руководство лично.'
    }
  ];

  const stages = [
    {
      num: '01',
      stage: 'Срочный анализ иска и материалов дела',
      works: 'Изучаем исковое заявление, приложенные документы, определение суда и даты процессуальных событий через «Мой Арбитр».',
      result: 'Заключение о слабых местах позиции истца и выработка стратегии защиты'
    },
    {
      num: '02',
      stage: 'Подготовка мотивированного отзыва на иск',
      works: 'Формируем письменные возражения по каждому пункту требований, готовим контррасчёт и ссылки на судебную практику.',
      result: 'Аргументированный процессуальный отзыв, поданный в суд и направленный истцу'
    },
    {
      num: '03',
      stage: 'Заявление встречного иска и ходатайств',
      works: 'Подаём встречный иск о зачёте встречных требований, заявляем ходатайство о снижении неустойки по ст. 333 ГК РФ или экспертизе.',
      result: 'Принятие встречного иска к совместному рассмотрению и назначение экспертиз'
    },
    {
      num: '04',
      stage: 'Судебное представительство во всех заседаниях',
      works: 'Участвуем во всех судебных заседаниях, отражаем доводы истца, допрашиваем экспертов и отстаиваем интересы компании.',
      result: 'Протокольная фиксация позиции защиты и нейтрализация давления оппонента'
    },
    {
      num: '05',
      stage: 'Фиксация судебного акта или мирового соглашения',
      works: 'Добиваемся отказа в иске, снижения сумм либо утверждаем выгодное мировое соглашение с графиком погашения.',
      result: 'Судебный акт с максимальной защитой финансовых интересов бизнеса'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Срочный анализ и отзыв на иск',
      subtitle: 'Анализ иска, выявление нарушений и составление мотивированного отзыва с контррасчётом',
      price: 'от 25 000 ₽',
      popular: false,
      features: [
        { name: 'Правовой аудит иска и приложений истца', value: '✓' },
        { name: 'Проверка срока давности и подсудности', value: '✓' },
        { name: 'Подготовка мотивированного отзыва на иск', value: '✓' },
        { name: 'Ходатайство о снижении неустойки (ст. 333 ГК)', value: '✓' }
      ],
      buttonText: 'Заказать отзыв',
      buttonHref: '#form'
    },
    {
      title: 'Комплексная защита в суде',
      subtitle: 'Подготовка отзыва, встречного иска и представительство во всех заседаниях первой инстанции',
      price: 'от 65 000 ₽',
      popular: true,
      badgeText: 'Рекомендуется',
      features: [
        { name: 'Все услуги тарифа «Анализ и отзыв»', value: '✓' },
        { name: 'Подготовка и подача встречного иска', value: '✓' },
        { name: 'Личное и онлайн участие во всех заседаниях', value: '✓' },
        { name: 'Ходатайства об отмене обеспечительных мер', value: '✓' },
        { name: 'Согласование условий мирового соглашения', value: '✓' }
      ],
      buttonText: 'Поручить защиту',
      buttonHref: '#form'
    },
    {
      title: 'Сложный спор / Защита активов',
      subtitle: 'Защита по искам на крупные суммы, корпоративным конфликтам и угрозе субсидиарной ответственности',
      price: 'от 110 000 ₽',
      popular: false,
      features: [
        { name: 'Все услуги комплексной защиты', value: '✓' },
        { name: 'Назначение судебных экспертиз и работа с экспертами', value: '✓' },
        { name: 'Защита генерального директора и учредителей', value: '✓' },
        { name: 'Сопровождение переговоров на уровне собственников', value: '✓' }
      ],
      buttonText: 'Обсудить проект',
      buttonHref: '#form'
    }
  ];

  const cases: CaseData[] = [
    {
      category: 'Договор поставки • АС Липецкой области',
      title: (
        <>
          Снижение неустойки поставщика на 82% <br />
          <span style={{ whiteSpace: 'nowrap' }}>по ст. 333 ГК РФ</span>
        </>
      ),
      problem: 'Поставщик требовал 8,4\u00A0млн\u00A0₽, включая завышенную договорную неустойку 3,1\u00A0млн\u00A0₽.',
      action: 'Подготовили мотивированный отзыв, контррасчёт и обосновали явную несоразмерность неустойки последствиям нарушения.',
      result: 'Суд снизил неустойку на 2,54\u00A0млн\u00A0₽ и утвердил комфортный график погашения остатка.'
    },
    {
      category: 'Строительный подряд • АС Воронежской области',
      title: (
        <>
          Встречный иск подрядчика: отказ истцу и взыскание <br />
          <span style={{ whiteSpace: 'nowrap' }}>3,4 млн ₽</span>
        </>
      ),
      problem: (
        <>
          Заказчик подал иск о взыскании штрафа за срыв сроков строительства на{' '}
          <span style={{ whiteSpace: 'nowrap' }}>5,2 млн ₽.</span>
        </>
      ),
      action: 'Доказали вину заказчика в непредоставлении стройплощадки и подали встречный иск об оплате выполненных работ.',
      result: (
        <>
          В иске заказчика отказано полностью. Встречный иск удовлетворён на сумму{' '}
          <span style={{ whiteSpace: 'nowrap' }}>3,4 млн ₽.</span>
        </>
      )
    },
    {
      category: 'Обеспечительные меры • АС Липецкой области',
      title: 'Снятие ареста с расчётных счетов производственного предприятия',
      problem: 'Истец добился ареста счетов завода на сумму 12\u00A0млн\u00A0₽, что остановило выплату зарплат 150 работникам.',
      action: 'Подали срочное ходатайство об отмене мер, доказали несоразмерность ограничений и стабильное финансовое положение предприятия.',
      result: 'Арест со счетов снят в полном объёме на следующий день после подачи ходатайства.'
    }
  ];

  const faqs = [
    {
      q: 'Что делать, если получен иск из арбитражного суда?',
      a: 'Необходимо срочно изучить карточку дела в системе «Мой Арбитр», проверить процессуальный срок для подачи отзыва, запросить материалы дела и привлечь юриста для формирования возражений.'
    },
    {
      q: 'Как снизить неустойку по статье 333 ГК РФ?',
      a: 'Для предпринимателей снижение неустойки возможно исключительно по письменному мотивированному заявлению ответчика с представлением контррасчёта и доказательств несоразмерности последствиям нарушения.'
    },
    {
      q: 'В каких случаях подаётся встречный иск?',
      a: 'Встречный иск подаётся, когда у ответчика есть взаимные требования к истцу (срыв сроков, недостатки работ, переплата, непередача документов), зачёт которых исключает или уменьшает требования истца.'
    },
    {
      q: 'Можно ли заключить мировое соглашение в арбитраже?',
      a: 'Да, мировое соглашение можно заключить на любой стадии арбитражного процесса. Оно утверждается определением суда и имеет силу исполнительного листа.'
    },
    {
      q: 'Как снять арест с расчётного счёта компании?',
      a: 'Подаётся ходатайство об отмене или замене обеспечительных мер с доказыванием их несоразмерности, либо на депозитный счёт суда вносится встречное обеспечение.'
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
            <span style={{ color: 'var(--color-text-main)' }}>Защита ответчика</span>
          </>
        }
        superTitle={
          <span style={{ whiteSpace: 'normal', display: 'inline-block', lineHeight: 1.4 }}>
            <span style={{ display: 'inline-block' }}>Защита ответчика в арбитраже •</span> <br />
            <span style={{ display: 'inline-block' }}>Липецк и Липецкая область</span>
          </span>
        }
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Защита ответчика
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              в арбитражном суде
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Получили иск в арбитражный суд? Срочно проверим материалы и сроки, подготовим мотивированный отзыв, снизим неустойку, снимем аресты со счетов и защитим бизнес.
          </span>
        }
        primaryCtaText="Защитить компанию от иска"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_zashchita_otvetchika"
        primaryCtaSubtext={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Перезвоним вам в рабочее время
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              или ответим по телефону: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (4742) 20-15-25</a>
            </span>
          </span>
        }
        trustItems={[
          { text: 'Срочный анализ иска и карточки дела за 24 часа' },
          { text: 'Снижение договорной неустойки по ст. 333 ГК РФ' },
          { text: 'Встречные иски и снятие арестов с расчётных счетов' },
          { text: 'Судебное представительство и мировые соглашения' }
        ]}
        imageUrl="/images/konopkin.jpg"
        imageName="Дмитрий Сергеевич Конопкин"
        imageSubtitle="Защита интересов ответчиков в арбитражных судах всех инстанций"
        imageObjectPosition="center 25%"
      />

      {/* ═══ БЛОК 2: СИТУАЦИИ ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'inline-block' }}>С чем обращаются ответчики</span> <br /><span style={{ display: 'inline-block' }}>в арбитражном процессе</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Формируем надёжную защиту на любой стадии рассмотрения дела.
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
                <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.06, pointerEvents: 'none' }}>
                  <svg width="100" height="100" viewBox="0 0 24 24" fill="var(--color-deep-blue)">
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>

                <div style={{ position: 'relative', zIndex: 1 }}>
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
              <span style={{ display: 'inline-block' }}>Риски бездействия ответчика</span> <br />
              <span style={{ display: 'inline-block' }}>в арбитражном суде</span>
            </h2>
            <div style={{ width: '60px', height: '2px', background: 'var(--color-gold)', marginBottom: '20px' }}></div>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', marginBottom: '40px', maxWidth: '720px', lineHeight: 1.6 }}>
              Игнорирование судебных определений приводит к полному удовлетворению требований оппонента и аресту имущества.
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
            <a href="tel:+74742201525" style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 600, textDecoration: 'none' }}>
              +7 (4742) 20-15-25
            </a>
            <a href="tel:+74742201525" className="btn-urgent-call" style={{ padding: '14px 28px', fontSize: '15px' }}>
              Срочная консультация
            </a>
            <a href="#form" className="btn-urgent-outline" style={{ padding: '14px 28px', fontSize: '15px' }}>
              Передать иск на анализ
            </a>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
              Ответим в рабочее время и согласуем процессуальные действия
            </span>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: ЭТАПЫ ═══ */}
      <section className="section bg-light" id="process" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px', textAlign: 'left' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
              Порядок защиты ответчика
            </div>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Этапы защиты интересов</span> <br />
              <span style={{ display: 'inline-block' }}>ответчика в арбитраже</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Пошаговая нейтрализация требований истца и выстраивание сильной правовой позиции.
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
                  padding: '24px 32px 24px 20px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '24px',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div className="stage-accent" />
                
                {/* Левая часть: крупный номер по центру и по левому краю с легким срезом + текст */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '18px', flex: '1 1 540px', minWidth: '280px', position: 'relative' }}>
                  <div style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(64px, 6.5vw, 88px)',
                    fontWeight: 800,
                    color: 'var(--color-gold)',
                    lineHeight: 0.72,
                    marginLeft: '-46px',
                    marginTop: '-40px',
                    opacity: 0.2,
                    userSelect: 'none',
                    flexShrink: 0,
                    letterSpacing: '-0.05em'
                  }}>
                    {step.num}
                  </div>

                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: '19px',
                      fontFamily: 'var(--font-serif)',
                      color: 'var(--color-deep-blue)',
                      margin: '0 0 8px 0',
                      lineHeight: 1.35,
                      fontWeight: 600
                    }}>
                      {step.stage}
                    </h3>

                    <p style={{
                      fontSize: '14.5px',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.55,
                      margin: 0
                    }}>
                      {step.works}
                    </p>
                  </div>
                </div>

                {/* Правая часть: Результат этапа */}
                <div style={{
                  flex: '0 1 320px',
                  minWidth: '260px',
                  background: '#FAF7F2',
                  border: '1px solid rgba(193, 160, 102, 0.25)',
                  borderLeft: '3px solid var(--color-gold)',
                  padding: '16px 20px',
                  boxSizing: 'border-box'
                }}>
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
        title="Стоимость защиты ответчика в арбитраже"
        subtitle="Фиксированная стоимость услуг закрепляется в договоре. Возможна поэтапная оплата."
        tiers={pricingTiers}
        disclaimer="Судебные расходы на услуги представителя взыскиваются с истца пропорционально сумме отклонённых судом исковых требований."
      />

      {/* ═══ БЛОК 6: КЕЙСЫ ═══ */}
      <CasesBlock
        title={
          <span>
            <span style={{ display: 'inline-block' }}>Примеры защиты</span> <br />
            <span style={{ display: 'inline-block' }}>ответчиков из практики</span>
          </span>
        }
        showAllLink="/praktika/"
        showAllText="Смотреть все дела"
        showDemoWarning={true}
        cases={cases}
      />

      {/* ═══ БЛОК 7: FAQ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы"
        title="Вопросы ответчиков в арбитражном суде"
        subtitle="Отзывы на иски, снижение неустойки, встречные иски и мировые соглашения"
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
                <span style={{ display: 'inline-block' }}>Обсудить защиту</span> <br />
                <span style={{ display: 'inline-block' }}>в офисе «Де-Юре»</span>
              </h2>
              <p style={{ fontSize: '15.5px', color: 'var(--color-deep-blue)', opacity: 0.9, lineHeight: 1.6, marginBottom: '24px' }}>
                <span style={{ display: 'inline-block' }}>Встретимся в офисе либо проведём срочный</span> <br />
                <span style={{ display: 'inline-block' }}>экспресс-аудит иска онлайн.</span>
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
                <span style={{ fontSize: '14.5px', color: 'var(--color-deep-blue)' }}><strong>Адрес:</strong> г. Липецк, ул. Советская, д. 35, оф. 213</span>
                <span style={{ fontSize: '14.5px', color: 'var(--color-deep-blue)' }}><strong>Телефон:</strong> +7 (4742) 20-15-25</span>
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
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Поручите защиту бизнеса</span> <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>судебным юристам</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Укажите номер дела, наименование суда или сумму иска. Срочно изучим определение суда и перезвоним для согласования отзыва или встречного иска.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация юриста</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните прямо сейчас: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (4742) 20-15-25</a>
                </p>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Конфиденциальность:</strong>
                Не указывайте в форме конфиденциальные данные. Документы можно передать юристу после согласования защищённого способа связи.
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
                buttonText="Защитить компанию в суде"
                commentPlaceholder="Кратко укажите: номер дела, суд, сумму требований, дату заседания…"
                hiddenFields={[
                  { name: 'source_page', value: '/biznesu/arbitrazhnyj-yurist/zashchita-otvetchika-v-arbitrazhnom-sude/' },
                  { name: 'page_type', value: 'service' },
                  { name: 'direction', value: 'arbitrazh' },
                  { name: 'service', value: 'zashchita-otvetchika-v-arbitrazhnom-sude' }
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
