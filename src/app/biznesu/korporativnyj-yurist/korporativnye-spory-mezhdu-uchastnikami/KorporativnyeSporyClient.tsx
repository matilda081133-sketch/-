'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
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
      title: 'Правовой аудит корпоративной ситуации',
      desc: 'Анализируем устав, корпоративные договоры, протоколы общих собраний, договоры и финансовые документы для выявления слабых мест и рычагов давления.'
    },
    {
      title: 'Досудебное урегулирование и переговоры',
      desc: 'Проводим структурированные переговоры, медиацию, формулируем компромиссные условия раздела активов или выкупа долей без дорогостоящего суда.'
    },
    {
      title: 'Принятие срочных обеспечительных мер',
      desc: 'Подаём заявления об аресте долей, запрете ФНС регистрировать изменения в ЕГРЮЛ, блокировке спорных сделок и распоряжения расчетными счетами.'
    },
    {
      title: 'Оспаривание решений органов управления',
      desc: 'Признаем в арбитражном суде недействительными решения общего собрания участников, совета директоров и единоличного исполнительного органа.'
    },
    {
      title: 'Взыскание убытков с генерального директора',
      desc: 'Привлекаем руководителя к материальной ответственности по ст. 53.1 ГК РФ за недобросовестные или неразумные действия, причинившие ущерб обществу.'
    },
    {
      title: 'Истребование документов через суд',
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

  const processSteps = [
    {
      step: '01',
      title: 'Анализ корпоративного конфликта',
      desc: 'Изучаем устав, протоколы, переписку и фактические обстоятельства для определения сильных и слабых сторон каждой из сторон.'
    },
    {
      step: '02',
      title: 'Формирование стратегии и обеспечительные меры',
      desc: 'Определяем конечную цель (сохранение бизнеса, выкуп доли, взыскание убытков) и при необходимости блокируем неправомерные действия через суд.'
    },
    {
      step: '03',
      title: 'Переговоры или подача иска в арбитраж',
      desc: 'Направляем претензии и требования, ведём жесткие предметные переговоры либо подаем исковое заявление в Арбитражный суд Липецкой области.'
    },
    {
      step: '04',
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

      {/* ═══ БЛОК 3: НАПРАВЛЕНИЯ ПОМОЩИ ═══ */}
      <section className="section bg-white" id="help">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 50px auto' }}>
            <h2 className="section-title" style={{ marginBottom: '16px' }}>
              Как можно защищать интересы в корпоративном конфликте
            </h2>
            <p className="section-subtitle" style={{ color: 'var(--color-text-secondary)', margin: '0 auto' }}>
              Подбираем комплекс мер: от переговорной медиации до жесткого судебного пресечения нарушений.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            {helpBlocks.map((blk, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  padding: '32px 26px',
                  backgroundColor: 'var(--color-bg-light)',
                  border: '1px solid var(--color-border)'
                }}
              >
                <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', marginBottom: '12px', lineHeight: 1.4 }}>
                  {blk.title}
                </h3>
                <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
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
        title="Примеры разрешения корпоративных конфликтов"
        cases={practiceCases}
        showAllLink="/praktika"
        showAllText="Смотреть всю практику →"
      />

      {/* ═══ БЛОК 6: КАК ПРОХОДИТ РАБОТА ═══ */}
      <section className="section bg-light" id="process">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 50px auto' }}>
            <h2 className="section-title" style={{ marginBottom: '16px' }}>
              Порядок работы по корпоративному спору
            </h2>
            <p className="section-subtitle" style={{ color: 'var(--color-text-secondary)', margin: '0 auto' }}>
              От экспресс-аудита документов до полного исполнения судебного акта или мирового соглашения.
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '24px' }}>
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  padding: '32px 24px',
                  backgroundColor: 'var(--color-white)',
                  border: '1px solid var(--color-border)'
                }}
              >
                <div style={{ fontSize: '36px', fontWeight: 800, color: 'var(--color-primary)', opacity: 0.25, fontFamily: 'var(--font-serif)', marginBottom: '16px', lineHeight: 1 }}>
                  {step.step}
                </div>
                <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', marginBottom: '12px', lineHeight: 1.4 }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div style={{ marginTop: '48px' }}>
            <div
              className="card service-card cta-banner-card"
              style={{
                padding: '32px 36px',
                background: 'var(--color-deep-blue)',
                borderTop: '3px solid var(--color-gold)',
                boxShadow: '0 8px 16px rgba(16, 39, 59, 0.28)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '24px'
              }}
            >
              <div>
                <h3 style={{ color: 'var(--color-white)', fontSize: '22px', marginBottom: '8px' }}>
                  Нужно заблокировать неправомерные действия оппонентов?
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '15px', margin: 0 }}>
                  Подготовим ходатайства об обеспечительных мерах для защиты активов и прав участника.
                </p>
              </div>
              <a href="#form" className="btn white-btn-custom">
                Защитить бизнес
              </a>
            </div>
          </div>
        </div>
      </section>

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

      {/* ═══ БЛОК 9: СВЯЗАННЫЕ УСЛУГИ ═══ */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 40px auto' }}>
            <h2 className="section-title" style={{ marginBottom: '12px' }}>
              Если задача выходит за рамки корпоративного спора
            </h2>
            <p className="section-subtitle" style={{ color: 'var(--color-text-secondary)', margin: '0 auto' }}>
              Смежные направления корпоративной практики ЮК «Де-Юре».
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '20px' }}>
            {relatedServices.map((rel, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  padding: '24px 20px',
                  backgroundColor: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <h3 style={{ fontSize: '17px', color: 'var(--color-deep-blue)', marginBottom: '10px' }}>
                    <Link href={rel.link} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {rel.title}
                    </Link>
                  </h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: '16px' }}>
                    {rel.desc}
                  </p>
                </div>
                <Link href={rel.link} style={{ fontSize: '13.5px', color: 'var(--color-primary)', fontWeight: 600 }}>
                  Перейти к услуге →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 10: ФИНАЛЬНАЯ ФОРМА ═══ */}
      <ContactsForm
        title="Расскажите, что происходит в компании"
        subtitle="Оставьте заявку на конфиденциальный разбор ситуации. Проанализируем документы и предложим правовую стратегию защиты."
        hiddenFields={[{ name: 'service', value: 'Корпоративные споры между участниками' }]}
      />

      <Footer />
    </>
  );
}
