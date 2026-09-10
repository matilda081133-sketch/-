'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import ProcessBlock, { ProcessStep } from '@/components/ProcessBlock';
import PricingBlock, { PricingTier } from '@/components/PricingBlock';
import SpecialistBlock from '@/components/SpecialistBlock';

export default function KorporativnyeSporyClient() {
  const jsonLdGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LegalService',
        '@id': 'https://dejure-help.ru/#legalservice',
        name: 'Юридическая компания Де-Юре',
        url: 'https://dejure-help.ru/',
        telephone: '+7 (4742) 20-15-25',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'ул. Советская, д. 35, оф. 213',
          addressLocality: 'Липецк',
          addressRegion: 'Липецкая область',
          addressCountry: 'RU'
        },
        areaServed: ['Липецк', 'Липецкая область']
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/korporativnyj-yurist/korporativnye-spory-mezhdu-uchastnikami/#service',
        name: 'Юрист по корпоративным спорам в Липецке',
        serviceType: 'Разрешение корпоративных споров и конфликтов участников ООО',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        description: 'Помощь при конфликтах участников ООО, корпоративном тупике, оспаривании решений, доступе к документам, убытках директора и защите прав участника.'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/biznesu/korporativnyj-yurist/korporativnye-spory-mezhdu-uchastnikami/#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
          { '@type': 'ListItem', position: 2, name: 'Бизнесу', item: 'https://dejure-help.ru/biznesu/' },
          { '@type': 'ListItem', position: 3, name: 'Корпоративный юрист', item: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/' },
          { '@type': 'ListItem', position: 4, name: 'Корпоративные споры', item: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/korporativnye-spory-mezhdu-uchastnikami/' }
        ]
      }
    ]
  };

  const situations = [
    {
      tag: 'Корпоративный дедлок',
      title: <>Корпоративный тупик <br />и невозможность принять решение</>,
      desc: 'Доли участников 50/50 или ни одна группа не набирает большинства голосов для назначения директора, утверждения отчётности или распределения прибыли.'
    },
    {
      tag: 'Оспаривание собраний',
      title: <>Собрание проведено без вас <br />или с нарушениями</>,
      desc: 'Решения приняты без надлежащего извещения, при отсутствии кворума, с поддельными подписями или с нарушением положений устава общества.'
    },
    {
      tag: 'Действия директора',
      title: <>Генеральный директор действует <br />против интересов компании</>,
      desc: 'Вывод активов, совершение сделок с заинтересованностью, необоснованное начисление себе премий или уклонение от предоставления отчётности.'
    },
    {
      tag: 'Сокрытие информации',
      title: <>Отказ в предоставлении <br />документов и финансовой отчётности</>,
      desc: 'Руководство или мажоритарный участник скрывают первичную документацию, банковские выписки, договоры и реальные финансовые показатели бизнеса.'
    },
    {
      tag: 'Невыплата дивидендов',
      title: <>Прибыль генерируется, <br />но дивиденды не выплачиваются</>,
      desc: 'Прибыль компании искусственно занижается фиктивными расходами или систематически направляется на нецелевые проекты вопреки правам участника.'
    },
    {
      tag: 'Исключение участника',
      title: <>Грубые нарушения обязанностей <br />одним из партнёров</>,
      desc: 'Участник уклоняется от участия в деятельности, блокирует работу общества или прямо вредит компании, создавая основания для исключения через суд.'
    }
  ];

  const helpBlocks = [
    {
      title: <><span style={{ display: 'inline-block' }}>Правовой аудит</span> <br /><span style={{ display: 'inline-block' }}>корпоративной ситуации</span></>,
      desc: 'Анализируем устав, корпоративные договоры, протоколы общих собраний, договоры и финансовые документы для выявления слабых мест и рычагов давления.'
    },
    {
      title: <><span style={{ display: 'inline-block' }}>Досудебное урегулирование</span> <br /><span style={{ display: 'inline-block' }}>и переговоры</span></>,
      desc: 'Проводим структурированные переговоры, медиацию, формулируем компромиссные условия раздела активов или выкупа долей без дорогостоящего суда.'
    },
    {
      title: <><span style={{ display: 'inline-block' }}>Принятие срочных</span> <br /><span style={{ display: 'inline-block' }}>обеспечительных мер</span></>,
      desc: 'Подаём заявления об аресте долей, запрете ФНС регистрировать изменения в ЕГРЮЛ, блокировке спорных сделок и распоряжения расчетными счетами.'
    },
    {
      title: <><span style={{ display: 'inline-block' }}>Оспаривание решений</span> <br /><span style={{ display: 'inline-block' }}>органов управления</span></>,
      desc: 'Признаем в арбитражном суде недействительными решения общего собрания участников, совета директоров и единоличного исполнительного органа.'
    },
    {
      title: <><span style={{ display: 'inline-block' }}>Взыскание убытков</span> <br /><span style={{ display: 'inline-block' }}>с генерального директора</span></>,
      desc: 'Привлекаем руководителя к материальной ответственности по ст. 53.1 ГК РФ за недобросовестные или неразумные действия, причинившие ущерб обществу.'
    },
    {
      title: <><span style={{ display: 'inline-block' }}>Истребование документов</span> <br /><span style={{ display: 'inline-block' }}>через арбитражный суд</span></>,
      desc: 'Обязываем руководство предоставить полный доступ к бухгалтерской базе, контрактам и банковским выпискам с начислением судебной неустойки (астрента).'
    }
  ];

  const practiceCases: CaseData[] = [
    {
      category: 'Оспаривание решений',
      title: 'Отмена незаконного решения о выводе недвижимости компании на 28 млн ₽',
      problem: 'Мажоритарный участник (70%) без надлежащего уведомления миноритария провел собрание и одобрил продажу складского комплекса по заниженной в 4 раза стоимости аффилированной фирме.',
      action: 'Юристы «Де-Юре» подали иск в Арбитражный суд Липецкой области о признании решения недействительным, заявили обеспечительные меры в виде запрета Росреестру регистрировать переход прав и доказали недобросовестность сторон.',
      result: 'Решение собрания и договор купли-продажи признаны недействительными. Недвижимость сохранена в собственности компании.'
    },
    {
      category: 'Убытки директора',
      title: 'Взыскание с бывшего генерального директора 8,4 млн ₽ убытков за вывод средств',
      problem: 'Наёмный директор перед увольнением перечислил средства компании фиктивным субподрядчикам за якобы выполненные маркетинговые и консультационные услуги.',
      action: 'Собрали доказательства фиктивности контрагентов, отсутствия реального встречного исполнения, провели финансово-экономический анализ и подготовили иск о возмещении убытков по ст. 53.1 ГК РФ.',
      result: 'Арбитражный суд полностью удовлетворил требования и взыскал с экс-директора 8,4 млн ₽ в пользу компании.'
    },
    {
      category: 'Корпоративный тупик',
      title: 'Разрешение дедлока 50/50 и разделение бизнеса между партнёрами',
      problem: 'Два партнера с равными долями 50/50 разошлись во взглядах на развитие бизнеса, деятельность компании была парализована, платежи контрагентам заблокированы.',
      action: 'Организовали процедуру медиации, подготовили карту распределения производственных и складских активов, разработали соглашение о выходе одного из участников с передачей части оборудования.',
      result: 'Подписано нотариальное соглашение без судебных споров. Компания продолжила работу под контролем одного партнера, второй получил справедливую компенсацию.'
    }
  ];

  const processSteps: ProcessStep[] = [
    {
      num: '01',
      title: 'Анализ корпоративного конфликта',
      desc: 'Изучаем устав, протоколы, переписку и фактические обстоятельства для определения сильных и слабых сторон каждой из сторон.'
    },
    {
      num: '02',
      title: 'Формирование стратегии и обеспечительные меры',
      desc: 'Определяем конечную цель (сохранение бизнеса, выкуп доли, взыскание убытков) и при необходимости блокируем неправомерные действия через суд.'
    },
    {
      num: '03',
      title: 'Переговоры или подача иска в арбитраж',
      desc: 'Направляем претензии и требования, ведём жесткие предметные переговоры либо подаем исковое заявление в Арбитражный суд Липецкой области.'
    },
    {
      num: '04',
      title: 'Судебное представительство и исполнение',
      desc: 'Защищаем позицию во всех инстанциях, добиваемся решения в пользу доверителя и контролируем внесение изменений в ЕГРЮЛ или выплату средств.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Аудит и стратегия конфликта',
      subtitle: 'Комплексный правовой анализ',
      popular: false,
      price: 'от 15 000 ₽',
      features: [
        { name: 'Анализ устава, протоколов и решений', value: 'Включено' },
        { name: 'Оценка перспектив судебных требований', value: 'Включено' },
        { name: 'Разработка пошагового плана действий', value: 'Включено' },
        { name: 'Подготовка первичных требований/запросов', value: 'Включено' }
      ],
      buttonText: 'Заказать анализ конфликта',
      buttonHref: '#form'
    },
    {
      title: 'Внесудебное урегулирование / Переговоры',
      subtitle: 'Медиация и защита при сделке',
      popular: true,
      badgeText: 'Оптимально для бизнеса',
      price: 'от 35 000 ₽',
      features: [
        { name: 'Участие в переговорах между участниками', value: 'Включено' },
        { name: 'Разработка соглашений о разделе активов/выкупе', value: 'Включено' },
        { name: 'Нотариальное оформление договорённостей', value: 'Включено' },
        { name: 'Контроль исполнения условий сторонами', value: 'Включено' }
      ],
      buttonText: 'Урегулировать конфликт',
      buttonHref: '#form'
    },
    {
      title: 'Ведение корпоративного спора в суде',
      subtitle: 'Полное судебное представительство',
      popular: false,
      price: 'от 60 000 ₽',
      features: [
        { name: 'Подготовка иска, отзывов и обеспечительных мер', value: 'Включено' },
        { name: 'Представительство в Арбитражном суде', value: 'Включено' },
        { name: 'Организация судебных экспертиз', value: 'Включено' },
        { name: 'Взыскание судебных расходов с оппонента', value: 'Включено' }
      ],
      buttonText: 'Защитить права в суде',
      buttonHref: '#form'
    }
  ];

  const faqs = [
    {
      q: 'Можно ли исключить недобросовестного участника из ООО?',
      a: 'Да, участники, обладающие в совокупности не менее 10% доли, вправе требовать в судебном порядке исключения участника, который грубо нарушает свои обязанности либо своими действиями (бездействием) делает невозможной деятельность общества или существенно её затрудняет (ст. 10 Закона об ООО).'
    },
    {
      q: 'В какой срок можно оспорить решение общего собрания участников?',
      a: 'Заявление о признании решения общего собрания недействительным может быть подано в арбитражный суд в течение двух месяцев со дня, когда участник узнал или должен был узнать о принятом решении. Пропуск этого срока является самостоятельным основанием для отказа в иске, поэтому важно действовать оперативно.'
    },
    {
      q: 'Как заставить генерального директора предоставить документы компании?',
      a: 'Участник общества имеет безусловное право на доступ к информации и документам (ст. 8, 50 Закона об ООО). При игнорировании письменного требования подается иск в арбитражный суд об обязании предоставить документы с требованием о взыскании судебной неустойки (астрента) за каждый день неисполнения решения.'
    },
    {
      q: 'Что делать, если доли в компании распределены 50 на 50 и возник тупик?',
      a: 'При невозможности принять ключевые решения (deadlock) используются механизмы медиации, изменение структуры управления через корпоративный договор, выкуп доли одного из партнеров по справедливой оценке или реорганизация путем выделения/разделения активов.'
    },
    {
      q: 'Кто несет ответственность за убытки, причиненные компании директором?',
      a: 'Генеральный директор несет личную имущественную ответственность перед обществом за убытки, причиненные его недобросовестными или неразумными действиями (ст. 53.1 ГК РФ). Взысканные средства поступают на расчетный счет компании.'
    }
  ];

  const relatedServices = [
    {
      title: 'Корпоративный договор',
      desc: 'Согласование правил голосования, финансирования и разрешения дедлоков до суда.',
      link: '/biznesu/korporativnyj-yurist/korporativnyj-dogovor/'
    },
    {
      title: 'Выход участника из ООО',
      desc: 'Корректный выход из состава учредителей с переходом доли обществу.',
      link: '/biznesu/korporativnyj-yurist/vyhod-uchastnika-iz-ooo/'
    },
    {
      title: 'Взыскание стоимости доли',
      desc: 'Определение рыночной стоимости чистых активов и выплата доли через арбитраж.',
      link: '/biznesu/korporativnyj-yurist/vzyskanie-dejstvitelnoj-stoimosti-doli/'
    },
    {
      title: 'Защита корпоративного контроля',
      desc: 'Срочные меры при незаконной смене директора и выводе активов.',
      link: '/biznesu/korporativnyj-yurist/zashchita-korporativnogo-kontrolya/'
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
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
            <Link href="/biznesu/korporativnyj-yurist/">Корпоративный юрист</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Корпоративные споры</span>
          </>
        }
        superTitle={
          <span style={{ whiteSpace: 'normal', display: 'inline-block', lineHeight: 1.4 }}>
            <span style={{ display: 'inline-block' }}>КОРПОРАТИВНЫЕ СПОРЫ И КОНФЛИКТЫ •</span> <br />
            <span style={{ display: 'inline-block' }}>Липецк и Арбитражный суд</span>
          </span>
        }
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Юрист по корпоративным
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              спорам в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Защита прав участников ООО, акционеров и бизнеса при внутренних конфликтах, корпоративном тупике, оспаривании решений органов управления и убытках директора.
          </span>
        }
        primaryCtaText="Получить консультацию по спору"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_corp_spory"
        primaryCtaSubtext={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Перезвоним в рабочее время
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              или ответим по телефону: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (4742) 20-15-25</a>
            </span>
          </span>
        }
        imageUrl="/images/nacheshnikov.jpg"
        imageName="Владимир Викторович Начешников"
        imageSubtitle="Специалист по корпоративным процедурам, куратор направления"
        imageObjectPosition="center 15%"
        trustItems={[
          {
            text: (
              <span>
                <strong>Практический опыт с 1997 года</strong> в сопровождении корпоративных процедур
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Полная конфиденциальность</strong> и защита коммерческой тайны бизнеса
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Арбитражный суд Липецкой области</strong> и арбитражные суды РФ
              </span>
            )
          }
        ]}
      />

      {/* ═══ БЛОК 2: ТИПОВЫЕ СИТУАЦИИ / КОНФЛИКТЫ ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'inline-block' }}>Типовые конфликты</span> <br />
              <span style={{ display: 'inline-block' }}>между участниками ООО</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Конфликт между партнерами или руководством парализует операционную деятельность компании и требует профессиональной правовой защиты.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '32px' }}>
            {situations.map((sit, idx) => (
              <div
                key={idx}
                className="hover-lift"
                style={{
                  padding: '36px 30px',
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.06, pointerEvents: 'none' }}>
                  <svg width="100" height="100" viewBox="0 0 24 24" fill="var(--color-deep-blue)">
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>

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
                  display: 'inline-block',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {sit.tag}
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '20px',
                  fontWeight: 600,
                  color: 'var(--color-deep-blue)',
                  margin: '0 0 14px 0',
                  lineHeight: 1.35,
                  position: 'relative',
                  zIndex: 1
                }}>
                  {sit.title}
                </h3>

                <p style={{
                  fontSize: '15px',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.6,
                  margin: 0,
                  position: 'relative',
                  zIndex: 1
                }}>
                  {sit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: НАПРАВЛЕНИЯ ПОМОЩИ / ЧТО ДЕЛАЕТ ЮРИСТ ═══ */}
      <section className="section" id="help" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              <span style={{ display: 'inline-block' }}>Как можно защищать интересы</span> <br />
              <span style={{ display: 'inline-block' }}>в корпоративном конфликте</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Подбираем комплекс мер:</span> <br />
              <span style={{ display: 'inline-block' }}>от&nbsp;переговорной медиации до&nbsp;жесткого судебного пресечения нарушений.</span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', position: 'relative' }}>
            {helpBlocks.map((blk, idx) => (
              <div key={idx} className="hover-lift" style={{
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                padding: '36px 30px 32px 30px',
                border: '1px solid var(--color-border)',
                borderTop: '4px solid var(--color-gold)',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}>
                <div style={{
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
                }}>
                  0{idx + 1}
                </div>
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '8px 0 14px 0', lineHeight: 1.35 }}>
                  {blk.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {blk.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: КУРАТОР ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Владимир Викторович Начешников"
        position="Специалист по корпоративным процедурам и сопровождению бизнеса, куратор направления"
        imageUrl="/images/nacheshnikov.jpg"
        imagePosition="center 15%"
        profileHref="/specialisty/nacheshnikov-vladimir-viktorovich/"
        profileText="Подробнее о Владимире Викторовиче Начешникове →"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Корпоративный спор всегда начинается с глубокого анализа учредительных документов, хронологии решений и выявления рычагов влияния сторон.
          </span>,
          <span key="2" style={{ color: 'var(--color-deep-blue)', display: 'block', marginTop: '12px' }}>
            Владимир Викторович с 1997 года организует юридическое сопровождение бизнеса и координацию процедурных вопросов. В судебных спорах и переговорных процессах участвует совместно с профильными юристами и судебными представителями ЮК «Де-Юре».
          </span>
        ]}
        buttonText="Обсудить спор с куратором"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 5: КЕЙСЫ ═══ */}
      <CasesBlock
        title={<><span style={{ display: 'inline-block' }}>Примеры разрешения</span> <br /><span style={{ display: 'inline-block' }}>корпоративных конфликтов</span></>}
        cases={practiceCases}
        showAllLink="/praktika"
        showAllText="Смотреть всю практику →"
      />

      {/* ═══ БЛОК 6: КАК ПРОХОДИТ РАБОТА (ПОРЯДОК РАБОТЫ) ═══ */}
      <ProcessBlock
        title={<><span style={{ display: 'inline-block' }}>Порядок работы</span> <br /><span style={{ display: 'inline-block' }}>по корпоративному спору</span></>}
        subtitle="От экспресс-аудита документов до полного исполнения судебного акта или мирового соглашения."
        steps={processSteps}
        ctaTitle="Нужно заблокировать неправомерные действия оппонентов?"
        ctaSubtitle="Подготовим ходатайства об обеспечительных мерах для защиты активов и прав участника."
        ctaButtonText="Защитить бизнес"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 7: ТАРИФЫ ═══ */}
      <PricingBlock
        title="Стоимость работы по корпоративным спорам"
        subtitle="Честные цены, зафиксированные в договоре. Поэтапная оплата."
        tiers={pricingTiers}
        ctaTitle="Рассчитаем стоимость защиты в вашем конфликте"
        ctaSubtitle="Опишите обстоятельства ситуации — куратор направления проведёт предварительный анализ и сориентирует по стоимости."
        ctaButtonText="Получить оценку стоимости"
        ctaButtonLink="#form"
      />

      {/* ═══ БЛОК 8: FAQ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы"
        title="Вопросы о корпоративных спорах"
        subtitle="Ответы на ключевые вопросы собственников и участников ООО при корпоративных разногласиях."
        faqs={faqs}
      />

      {/* ═══ БЛОК 9: СМЕЖНЫЕ НАПРАВЛЕНИЯ ПРАКТИКИ ДЛЯ БИЗНЕСА (ПО ШАБЛОНУ) ═══ */}
      <section className="section bg-light" id="related-services" style={{ padding: '64px 0', background: 'var(--gradient-cream)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '840px', marginBottom: '36px', textAlign: 'left' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '10px'
            }}>
              Смежные направления практики для бизнеса
            </div>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 3.5vw, 34px)', color: 'var(--color-deep-blue)', marginBottom: '14px', marginTop: 0, lineHeight: 1.25 }}>
              <span style={{ display: 'inline-block' }}>Если задача выходит</span> <br /><span style={{ display: 'inline-block' }}>за рамки корпоративного спора</span>
            </h2>
            <p style={{ fontSize: '15.5px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.65, margin: 0, textWrap: 'balance' }}>
              Смежные направления корпоративной практики ЮК «Де-Юре» для комплексной защиты бизнеса.
            </p>
          </div>

          <div className={relatedServices.length === 4 ? "grid grid-4" : "grid grid-3"} style={{ gap: '20px', marginBottom: '28px' }}>
            {relatedServices.map((rel, idx) => (
              <Link key={idx} href={rel.link} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                <div
                  className="card related-service-card hover-lift"
                  style={{
                    height: '100%',
                    minHeight: '180px',
                    padding: '26px 24px',
                    background: 'var(--color-white)',
                    border: '1px solid var(--color-border)',
                    borderTop: '3px solid var(--color-primary)',
                    borderRadius: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div>
                    <h3 style={{ margin: '0 0 10px 0', fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', lineHeight: 1.35, fontWeight: 700 }}>
                      {rel.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                      {rel.desc}
                    </p>
                  </div>
                  <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13.5px', fontWeight: 600, marginTop: '18px', transition: 'color 0.35s ease' }}>
                    <span>Подробнее об услуге</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 10: ФИНАЛЬНАЯ ФОРМА (СВЯЗАТЬСЯ С НАМИ) — ШАБЛОН ═══ */}
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
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Получите первичную</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>оценку ситуации</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко опишите ситуацию и оставьте контакты. Юрист изучит первичные документы и свяжется с вами для обсуждения правовой задачи.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация юриста</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните прямо сейчас: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (4742) 20-15-25</a>
                </p>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '6px' }}>
                  Липецк, ул. Советская, д. 35, офис 213 (приём по записи)
                </div>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Конфиденциальность:</strong>
                Не указывайте в форме конфиденциальные данные, коммерческую тайну и закрытые документы. Документы можно передать юристу после согласования защищённого способа связи.
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
                buttonText="Обсудить корпоративный спор"
                commentPlaceholder="Кратко опишите ситуацию: суть корпоративного спора, состав участников или возникший вопрос…"
                hiddenFields={[
                  { name: 'source_page', value: '/biznesu/korporativnyj-yurist/korporativnye-spory-mezhdu-uchastnikami/' },
                  { name: 'service', value: 'Корпоративные споры между участниками' }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
