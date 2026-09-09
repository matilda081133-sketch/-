'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';
import ProcessBlock from '@/components/ProcessBlock';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import PricingBlock, { PricingTier } from '@/components/PricingBlock';
import SpecialistBlock from '@/components/SpecialistBlock';
import TrustStrip from '@/components/TrustStrip';

export default function KorporativnyjYuristClient() {
  const [ctaSource, setCtaSource] = useState('corporate_hub_form_direct');
  const [ctaText, setCtaText] = useState('Прямой переход к форме');

  const handleCtaClick = (source: string, text: string) => {
    setCtaSource(source);
    setCtaText(text);
  };

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
        '@id': 'https://dejure-help.ru/biznesu/korporativnyj-yurist/#service',
        name: 'Корпоративный юрист для бизнеса в Липецке',
        serviceType: 'Юридическое сопровождение корпоративных процедур и споров',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        description: 'Корпоративные споры, выход из ООО, взыскание стоимости доли, корпоративные договоры, сделки с долями, покупка бизнеса, реорганизация и защита контроля.'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/biznesu/korporativnyj-yurist/#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
          { '@type': 'ListItem', position: 2, name: 'Бизнесу', item: 'https://dejure-help.ru/biznesu/' },
          { '@type': 'ListItem', position: 3, name: 'Корпоративный юрист', item: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/' }
        ]
      }
    ]
  };

  const situations = [
    {
      tag: 'Конфликт участников',
      title: <>Конфликт участников <br />или корпоративный тупик</>,
      desc: 'Разногласия по распределению прибыли, решениям общего собрания, назначению директора или фактическая блокировка деятельности компании.'
    },
    {
      tag: 'Выход и стоимость доли',
      title: <>Выход участника или выплата <br />действительной стоимости доли</>,
      desc: 'Оформление выхода из состава ООО, определение действительной стоимости доли по рыночной оценке и защита от занижения выплаты.'
    },
    {
      tag: 'Сделки и покупка бизнеса',
      title: <>Сделка с долями или покупка <br />действующего бизнеса</>,
      desc: 'Комплексная проверка рисков (due diligence), подготовка договора купли-продажи доли или активов, структурирование расчётов и нотариус.'
    },
    {
      tag: 'Реорганизация',
      title: <>Реорганизация и изменение <br />структуры бизнеса</>,
      desc: 'Слияние, присоединение, разделение, выделение или преобразование компании с сохранением активов, договоров и прав кредиторов.'
    },
    {
      tag: 'Защита контроля',
      title: <>Угроза или утрата <br />корпоративного контроля</>,
      desc: 'Незаконная смена директора, спорные изменения в ЕГРЮЛ, блокировка доступа к счетам, документам и управление без воли собственника.'
    },
    {
      tag: 'Корпоративный договор',
      title: <>Корпоративный договор <br />и правила партнёрства</>,
      desc: 'Фиксация договорённостей партнёров на старте: порядок голосования, финансирование, распределение прибыли и правила выхода.'
    }
  ];

  const services = [
    {
      id: 'spory',
      title: 'Корпоративные споры между участниками',
      badge: 'Споры и защита',
      desc: 'Защита интересов при конфликтах собственников, оспаривании решений собраний, крупных сделок, действий директора и взыскании убытков.',
      link: '/biznesu/korporativnyj-yurist/korporativnye-spory-mezhdu-uchastnikami/',
      features: [
        'Оспаривание незаконных решений общего собрания',
        'Взыскание убытков с генерального директора',
        'Истребование документов и информации о деятельности ООО',
        'Исключение недобросовестного участника из общества'
      ]
    },
    {
      id: 'dogovor',
      title: 'Корпоративный договор',
      badge: 'Предотвращение конфликтов',
      desc: 'Разработка индивидуального соглашения участников ООО для безопасного управления бизнесом, инвестиций и предотвращения дедлоков.',
      link: '/biznesu/korporativnyj-yurist/korporativnyj-dogovor/',
      features: [
        'Синхронизация голосования по ключевым вопросам',
        'Механизмы разрешения тупиковых ситуаций (deadlock)',
        'Ограничения на продажу долей третьим лицам (tag-along, drag-along)',
        'Порядок дополнительного финансирования компании'
      ]
    },
    {
      id: 'pokupka',
      title: 'Покупка и продажа бизнеса',
      badge: 'Сделки M&A',
      desc: 'Юридическая проверка компании (due diligence), структурирование сделки, подготовка договоров и безопасная передача управления.',
      link: '/biznesu/korporativnyj-yurist/pokupka-prodazha-biznesa/',
      features: [
        'Полный правовой аудит рисков, активов и обязательств',
        'Защита расчётов: эскроу, аккредитивы, рассрочка',
        'Гарантии и заверения об обстоятельствах продавца',
        'Переход операционного и банковского контроля'
      ]
    },
    {
      id: 'reorganizaciya',
      title: 'Реорганизация бизнеса',
      badge: 'Структурирование',
      desc: 'Сопровождение процедур слияния, присоединения, выделения, разделения и преобразования юрлиц под ключ в Липецкой области.',
      link: '/biznesu/korporativnyj-yurist/reorganizaciya-biznesa/',
      features: [
        'Разработка оптимальной схемы и передаточного акта',
        'Уведомление регистрирующего органа (ФНС) и Федресурса',
        'Публикации в «Вестнике государственной регистрации»',
        'Взаимодействие с кредиторами и налоговыми органами'
      ]
    },
    {
      id: 'sdelki',
      title: 'Сделки с долями ООО',
      badge: 'Переход прав',
      desc: 'Купля-продажа, дарение, залог и наследование долей в уставном капитале с соблюдением преимущественного права и нотариатом.',
      link: '/biznesu/korporativnyj-yurist/sdelki-s-dolyami-ooo/',
      features: [
        'Анализ устава на наличие запретов и согласий',
        'Оформление оферт и отказов от преимущественного права',
        'Подготовка договора купли-продажи доли и согласий супругов',
        'Сопровождение сделки у нотариуса и контроль ЕГРЮЛ'
      ]
    },
    {
      id: 'vyhod',
      title: 'Выход участника из ООО',
      badge: 'Прекращение участия',
      desc: 'Юридически безупречный выход из состава учредителей: проверка права на выход, оформление заявления у нотариуса и переход доли.',
      link: '/biznesu/korporativnyj-yurist/vyhod-uchastnika-iz-ooo/',
      features: [
        'Проверка положений устава о возможности выхода',
        'Подготовка комплекта документов для нотариуса',
        'Контроль внесения записи о переходе доли в ЕГРЮЛ',
        'Фиксация даты выхода для последующих взаиморасчётов'
      ]
    },
    {
      id: 'vzyskanie',
      title: 'Взыскание действительной стоимости доли',
      badge: 'Выплата активов',
      desc: 'Защита прав вышедшего участника: расчёт реальной рыночной стоимости чистых активов компании и взыскание средств через арбитраж.',
      link: '/biznesu/korporativnyj-yurist/vzyskanie-dejstvitelnoj-stoimosti-doli/',
      features: [
        'Анализ бухгалтерского баланса и имущественного комплекса',
        'Организация судебной финансово-экономической экспертизы',
        'Досудебная претензия и переговоры с обществом',
        'Судебное взыскание стоимости доли и процентов по ст. 395 ГК РФ'
      ]
    },
    {
      id: 'kontrol',
      title: 'Защита корпоративного контроля',
      badge: 'Экстренная защита',
      desc: 'Срочные меры при рейдерских действиях, незаконной смене генерального директора, выводе активов и фальсификации решений.',
      link: '/biznesu/korporativnyj-yurist/zashchita-korporativnogo-kontrolya/',
      features: [
        'Подача возражений по форме Р38001 в регистрирующий орган',
        'Принятие срочных обеспечительных мер арбитражным судом',
        'Оспаривание сфальсифицированных протоколов и решений',
        'Восстановление доступа к счетам, ЭЦП и документации'
      ]
    }
  ];

  const practiceCases: CaseData[] = [
    {
      category: 'Защита контроля',
      title: 'Восстановление контроля над производственным предприятием после нелегитимной смены директора',
      problem: 'Один из участников ООО сфальсифицировал протокол внеочередного собрания, сменил генерального директора и попытался переоформить право подписи в банке и доступ к складским помещениям.',
      action: 'Юристы оперативно подали возражение в ФНС, направили иск в Арбитражный суд Липецкой области с заявлением об обеспечительных мерах в виде запрета налоговой вносить изменения в ЕГРЮЛ, а банку — проводить операции по распоряжению нового руководителя.',
      result: 'Суд удовлетворил обеспечительные меры, признал решение собрания недействительным. Законный руководитель восстановлен в правах, активы сохранены.'
    },
    {
      category: 'Стоимость доли',
      title: 'Взыскание 14,8 млн ₽ действительной стоимости доли с переоценкой недвижимости',
      problem: 'После выхода участника из строительной компании общество выплатило действительную стоимость доли в размере 1,2 млн ₽, основываясь исключительно на балансовой стоимости старых активов.',
      action: 'Провели анализ финансовой отчётности, выявили существенное занижение стоимости принадлежащих обществу земельных участков и спецтехники. В суде добились назначения независимой рыночной экспертизы чистых активов.',
      result: 'Арбитражный суд взыскал с общества в пользу доверителя 14,8 млн ₽ действительной стоимости доли, а также проценты за пользование чужими денежными средствами и судебные расходы.'
    },
    {
      category: 'Сделки и due diligence',
      title: 'Сопровождение покупки региональной сети магазинов с минимизацией скрытых долговых обязательств',
      problem: 'Покупатель планировал приобрести 100% долей в компании розничной торговли за 35 млн ₽, однако существовал риск скрытых поручительств и налоговых доначислений за предыдущие периоды.',
      action: 'Провели глубокий due diligence: проверили 42 договора аренды, историю налоговых проверок, кредитные договоры и судебные риски. В договор купли-продажи доли включили детальные заверения об обстоятельствах и условия удержания части суммы на эскроу-счёте.',
      result: 'Сделка успешно удостоверена нотариусом и зарегистрирована в ЕГРЮЛ. Выявленные до сделки скрытые риски на сумму 4,5 млн ₽ были компенсированы снижением цены покупки.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Анализ устава, решений и документов',
      desc: 'Изучаем корпоративную историю общества, редакцию устава, состав участников, полномочия директора, актуальные выписки из ЕГРЮЛ и финансовое состояние.'
    },
    {
      step: '02',
      title: 'Разработка правовой позиции и стратегии',
      desc: 'Определяем оптимальный правовой путь: досудебные переговоры, изменение устава, заключение корпоративного договора, нотариальная сделка или судебный иск.'
    },
    {
      step: '03',
      title: 'Досудебные и регистрационные процедуры',
      desc: 'Готовим протоколы, уведомления, оферты, проекты договоров, взаимодействуем с нотариусами, банками, регистрирующими и налоговыми органами.'
    },
    {
      step: '04',
      title: 'Судебная защита и контроль исполнения',
      desc: 'При наличии спора представляем интересы в Арбитражном суде Липецкой области, добиваемся обеспечительных мер и контролируем реальное исполнение решения.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Консультация и аудит',
      subtitle: 'Первичная оценка рисков',
      popular: false,
      price: 'от 5 000 ₽',
      features: [
        { name: 'Правовой анализ устава и выписки ЕГРЮЛ', value: 'Включено' },
        { name: 'Оценка рисков корпоративного конфликта или сделки', value: 'Включено' },
        { name: 'Письменное или устное правовое заключение', value: 'Включено' },
        { name: 'Рекомендации по дальнейшим действиям', value: 'Включено' }
      ],
      buttonText: 'Заказать аудит',
      buttonHref: '#form'
    },
    {
      title: 'Корпоративная процедура / Сделка',
      subtitle: 'Полное юридическое сопровождение',
      popular: true,
      badgeText: 'Популярный формат',
      price: 'от 25 000 ₽',
      features: [
        { name: 'Подготовка полного комплекта корпоративных документов', value: 'Включено' },
        { name: 'Разработка договоров (купли-продажи, корпоративного)', value: 'Включено' },
        { name: 'Сопровождение у нотариуса и регистрация в ФНС', value: 'Включено' },
        { name: 'Контроль внесения изменений в ЕГРЮЛ', value: 'Включено' }
      ],
      buttonText: 'Выбрать сопровождение',
      buttonHref: '#form'
    },
    {
      title: 'Корпоративный спор в арбитраже',
      subtitle: 'Судебная защита прав участника / бизнеса',
      popular: false,
      price: 'от 50 000 ₽',
      features: [
        { name: 'Формирование доказательственной базы и расчет требований', value: 'Включено' },
        { name: 'Заявления об обеспечительных мерах (арест долей/счетов)', value: 'Включено' },
        { name: 'Подготовка иска, отзывов, ходатайств', value: 'Включено' },
        { name: 'Представительство во всех судебных заседаниях', value: 'Включено' }
      ],
      buttonText: 'Защитить интересы в суде',
      buttonHref: '#form'
    }
  ];

  const faqs = [
    {
      q: 'С какими организационно-правовыми формами бизнеса вы работаете?',
      a: 'Мы работаем преимущественно с обществами с ограниченной ответственностью (ООО) и непубличными акционерными обществами (АО), а также сопровождаем реорганизацию и структурирование групп компаний и индивидуальных предпринимателей в Липецке и других регионах РФ.'
    },
    {
      q: 'Чем корпоративный юрист отличается от юриста по договорам?',
      a: 'Договорной юрист работает с внешними сделками компании (поставка, подряд, аренда). Корпоративный юрист занимается внутренними отношениями между собственниками, инвесторами и директором: правами на доли, решениями органов управления, уставом, распределением прибыли, сменой руководства и защитой от потери контроля.'
    },
    {
      q: 'Можно ли решить корпоративный конфликт без суда?',
      a: 'Да. Мы стремимся разрешать противоречия в досудебном порядке через структурированные переговоры, медиацию, заключение корпоративных соглашений, выкуп долей или цивилизованный раздел активов, что экономит время и ресурсы бизнеса.'
    },
    {
      q: 'Как определяется действительная стоимость доли при выходе участника?',
      a: 'По закону об ООО действительная стоимость доли соответствует части стоимости чистых активов общества, пропорциональной размеру доли. Часто балансовая стоимость занижает реальную рыночную стоимость активов (недвижимость, оборудование, товарный запас), поэтому в спорах мы привлекаем независимых оценщиков и экспертов.'
    },
    {
      q: 'Зачем нужен корпоративный договор, если у компании уже есть устав?',
      a: 'Устав — это публичный документ с общими нормами закона. Корпоративный договор конфиденциален и позволяет зафиксировать непубличные договорённости: порядок финансирования, обязательства голосовать определённым образом, запреты на продажу долей конкурентам и сценарии разрешения тупиковых ситуаций (deadlock).'
    },
    {
      q: 'Что делать, если генеральный директор сменился без согласия собственника?',
      a: 'Необходимо действовать немедленно: направить форму Р38001 (возражение заинтересованного лица) в регистрирующий налоговый орган, уведомить обслуживающие банки о спорности полномочий, обратиться в Арбитражный суд с иском о признании решения недействительным и ходатайством о принятии срочных обеспечительных мер.'
    },
    {
      q: 'Сколько времени занимает реорганизация компании или сделка с долями?',
      a: 'Нотариальная сделка купли-продажи доли и регистрация в ЕГРЮЛ занимают от 5 до 10 рабочих дней. Процедура реорганизации (слияние, присоединение, разделение) требует соблюдения установленных законом сроков уведомления кредиторов и публикаций в Вестнике госрегистрации, что занимает в среднем 3–4 месяца.'
    },
    {
      q: 'Кто будет вести проект и как распределяются роли в команде?',
      a: 'Организацию и координацию процедурных этапов курирует специалист по корпоративным процедурам Владимир Викторович Начешников. При необходимости подготовки правовых заключений, ведения переговоров и судебного представительства в арбитражном процессе подключаются профильные юристы ЮК «Де-Юре».'
    },
    {
      q: 'Работаете ли вы дистанционно и с клиентами за пределами Липецка?',
      a: 'Да. Мы сопровождаем корпоративные процедуры и судебные споры по всей России. Дистанционная работа организована через электронный документооборот, систему «Мой Арбитр», защищённые каналы связи и видеоконференции.'
    },
    {
      q: 'Как обеспечивается конфиденциальность корпоративной информации?',
      a: 'Все передаваемые сведения, финансовая отчётность, структура владения и детали конфликтов защищены строгим режимом конфиденциальности в соответствии с договором об оказании юридических услуг.'
    }
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />
      <Header />

      {/* ═══ 1. ПЕРВЫЙ ЭКРАН (MILITARY HERO) ═══ */}
      <div onClickCapture={() => handleCtaClick('corporate_hub_hero', 'Обсудить корпоративную задачу')}>
        <MilitaryHero
          breadcrumbs={
            <>
              <Link href="/" style={{ color: 'var(--color-primary)' }}>Главная</Link> <span style={{ margin: '0 8px' }}>/</span>
              <Link href="/biznesu/" style={{ color: 'var(--color-primary)' }}>Бизнесу</Link> <span style={{ margin: '0 8px' }}>/</span>
              <span style={{ color: 'var(--color-text-main)' }}>Корпоративный юрист</span>
            </>
          }
          superTitle="Корпоративное право • споры участников • сделки с долями ООО"
          title={
            <>
              <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>Корпоративный юрист</span> <br />
              <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>для бизнеса в Липецке</span>
            </>
          }
          subtitle={
            <span style={{ display: 'inline-block', maxWidth: '640px', textWrap: 'balance' }}>
              Защищаем интересы собственников, участников ООО, инвесторов и руководителей: от безопасного входа и оформления корпоративных договоров до разрешения тупиковых ситуаций и защиты в арбитражном суде.
            </span>
          }
          primaryCtaText="Обсудить корпоративную задачу"
          primaryCtaLink="#form"
          primaryCtaAnalytics="corporate_hero_consultation_click"
          primaryCtaSubtext="Перезвоним в течение 15 минут в рабочее время"
          secondaryCtaText="Направления помощи"
          secondaryCtaLink="#directions"
          rightContent={
            <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', width: '100%' }}>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '130%',
                height: '130%',
                background: 'radial-gradient(circle, rgba(193, 160, 102, 0.15) 0%, rgba(23, 50, 77, 0.04) 40%, transparent 70%)',
                zIndex: 0,
                pointerEvents: 'none'
              }} />

              <svg style={{ position: 'absolute', top: '40%', left: '85%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', opacity: 0.09, zIndex: 0, pointerEvents: 'none' }} viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="0.6">
                <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>

              <div className="mockup-container" style={{ zIndex: 1, margin: 0 }}>
                <div style={{ position: 'absolute', width: '220px', height: '220px', background: 'var(--color-primary)', filter: 'blur(90px)', opacity: 0.12, borderRadius: '50%' }}></div>
                
                {/* 4th Sheet */}
                <div className="doc-wrapper-float-4">
                  <div className="doc-sheet doc-sheet-4">
                    <div style={{ padding: '35px 25px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '30px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end' }}>
                          <div style={{ width: '90px', height: '3px', background: 'rgba(23,50,77,0.2)' }}></div>
                          <div style={{ width: '70px', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                        </div>
                      </div>
                      <div style={{ width: '140px', height: '6px', background: 'var(--color-primary)', margin: '0 auto 30px auto' }}></div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <div style={{ width: '100%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                        <div style={{ width: '90%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3rd Sheet: ЕГРЮЛ */}
                <div className="doc-wrapper-float-3">
                  <div className="doc-sheet doc-sheet-3">
                    <div style={{ padding: '35px 25px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ position: 'absolute', top: '25px', left: '25px', width: '85px', height: '25px', border: '1.5px solid rgba(23, 50, 77, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-5deg)' }}>
                        <span style={{ fontSize: '4.5px', fontWeight: 'bold', color: 'rgba(23,50,77,0.5)', fontFamily: 'var(--font-serif)' }}>ЕГРЮЛ: ВЫПИСКА И ДОЛИ</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '35px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end' }}>
                          <div style={{ width: '95px', height: '3px', background: 'rgba(23,50,77,0.2)' }}></div>
                          <div style={{ width: '55px', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                        </div>
                      </div>
                      <div style={{ width: '130px', height: '6px', background: 'var(--color-primary)', margin: '0 auto 30px auto' }}></div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <div style={{ width: '100%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                        <div style={{ width: '95%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                        <div style={{ width: '80%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2nd Sheet: Решение Арбитражного суда */}
                <div className="doc-wrapper-float-2">
                  <div className="doc-sheet doc-sheet-2">
                    <div style={{ padding: '28px 22px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ position: 'absolute', top: '22px', left: '22px', width: '105px', height: '32px', border: '1px solid #C1A066', color: '#C1A066', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-4deg)', opacity: 0.95 }}>
                        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '5px', textAlign: 'center', fontWeight: 'bold', lineHeight: 1.2 }}>
                          РЕШЕНИЕ СУДА<br/>
                          ПО КОРПОРАТИВНОМУ СПОРУ
                        </div>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '24px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end' }}>
                          <div style={{ width: '90px', height: '3px', background: 'rgba(23,50,77,0.2)' }}></div>
                          <div style={{ width: '50px', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                        </div>
                      </div>

                      <div style={{ width: '140px', height: '6px', background: 'var(--color-primary)', margin: '0 auto 16px auto' }}></div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                        <div style={{ width: '40%', height: '3px', background: 'rgba(23,50,77,0.2)' }}></div>
                        <div style={{ width: '100%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                        <div style={{ width: '90%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>

                      <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '8px', borderTop: '1px dashed rgba(23,50,77,0.15)' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                          <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Истец (Участник ООО):</div>
                          <div style={{ width: '70px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '8px' }}></div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                          <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Представитель:</div>
                          <div style={{ width: '70px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '8px' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 1st Sheet: Устав ООО и печать Де-Юре */}
                <div className="doc-wrapper-float-1">
                  <div className="doc-sheet doc-sheet-1">
                    <div style={{ padding: '26px 22px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(23,50,77,0.2)', paddingBottom: '10px', marginBottom: '14px' }}>
                        <img src="/images/logo_dark.png" alt="Де-Юре" style={{ width: '55px', height: 'auto', opacity: 0.9 }} />
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', alignItems: 'flex-end' }}>
                          <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', letterSpacing: '0.05em' }}>КОРПОРАТИВНОЕ ПРАВО</span>
                          <span style={{ fontSize: '5px', color: 'var(--color-primary)' }}>Устав • Договор • Защита прав</span>
                        </div>
                      </div>

                      <div style={{ width: '120px', height: '6px', background: 'var(--color-deep-blue)', margin: '0 auto 14px auto' }}></div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '12px' }}>
                        <div style={{ display: 'flex', gap: '6px' }}>
                          <div style={{ width: '8px', height: '3px', background: 'var(--color-primary)' }}></div>
                          <div style={{ width: '85%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                        </div>
                        <div style={{ width: '100%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                        <div style={{ width: '90%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>

                      <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '8px', borderTop: '1px solid rgba(23,50,77,0.15)' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                          <div style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)' }}>ЮК «ДЕ-ЮРЕ»</div>
                          <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Корпоративная практика • Липецк</div>
                        </div>
                        <div style={{ position: 'relative', width: '42px', height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <div style={{ width: '38px', height: '38px', borderRadius: '50%', border: '1.25px solid #17375E', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-12deg)', opacity: 0.9 }}>
                            <div style={{ width: '31px', height: '31px', borderRadius: '50%', border: '0.5px dashed #17375E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <span style={{ fontSize: '3.5px', fontWeight: 'bold', color: '#17375E', textAlign: 'center', lineHeight: 1.1 }}>
                                ДЕ-ЮРЕ<br/>ЛИПЕЦК
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          }
        />
      </div>

      {/* ═══ 2. ТРАСТ СТРИП ═══ */}
      <TrustStrip
        items={[
          { text: 'Практический опыт с 1997 года в корпоративных процедурах' },
          { text: 'Полная конфиденциальность и защита коммерческой тайны' },
          { text: 'Арбитражный суд Липецкой области и арбитражные суды РФ' },
          { text: 'Фиксированный состав работ и стоимость в договоре' }
        ]}
      />

      {/* ═══ 3. ТИПОВЫЕ СИТУАЦИИ ═══ */}
      <section className="section bg-light" id="situations" style={{ position: 'relative', overflow: 'hidden', padding: '80px 0' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '820px', marginBottom: '40px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
                Типичные ситуации
              </span>
            </div>
            <h2 style={{ marginBottom: '16px', fontSize: 'clamp(28px, 3.2vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', textAlign: 'left', marginTop: 0 }}>
              С какими корпоративными ситуациями обращается бизнес
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.7, margin: 0 }}>
              Своевременное привлечение профильного юриста помогает избежать блокировки счетов, потери активов и затяжных судебных разбирательств.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '32px' }}>
            {situations.map((sit, idx) => (
              <div
                key={idx}
                className="card service-card"
                style={{
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: '3px solid var(--color-primary)',
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)'
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: 'var(--color-gold)',
                      fontWeight: 700,
                      marginBottom: '12px'
                    }}
                  >
                    {sit.tag}
                  </div>
                  <h3 style={{ fontSize: '19px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '12px', lineHeight: 1.35 }}>
                    {sit.title}
                  </h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    {sit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <a
              href="#form"
              className="btn btn-primary"
              onClick={() => handleCtaClick('corporate_hub_situations', 'Обсудить ситуацию')}
            >
              Обсудить свою ситуацию с юристом
            </a>
          </div>
        </div>
      </section>

      {/* ═══ 4. НАПРАВЛЕНИЯ ПОМОЩИ (8 ДОЧЕРНИХ УСЛУГ) ═══ */}
      <section className="section bg-white" id="directions" style={{ position: 'relative', overflow: 'hidden', padding: '80px 0' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '860px', marginBottom: '40px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
                Направления помощи
              </span>
            </div>
            <h2 style={{ marginBottom: '16px', fontSize: 'clamp(28px, 3.2vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', textAlign: 'left', marginTop: 0 }}>
              Услуги по корпоративному праву в Липецке
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.7, margin: 0 }}>
              Решаем задачи любой сложности: от подготовки партнёрских договоров до защиты в резонансных корпоративных конфликтах в арбитражном суде.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '24px', marginBottom: '32px' }}>
            {services.map((svc) => (
              <Link
                key={svc.id}
                href={svc.link}
                style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', height: '100%' }}
              >
                <div
                  className="card service-card"
                  style={{
                    height: '100%',
                    padding: '28px',
                    background: 'var(--color-white)',
                    border: '1px solid var(--color-border)',
                    borderTop: '3px solid var(--color-primary)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: 'inline-block',
                        fontSize: '11px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: 'var(--color-gold)',
                        fontWeight: 700,
                        marginBottom: '10px'
                      }}
                    >
                      {svc.badge}
                    </div>
                    <h3 style={{ margin: '0 0 12px 0', fontSize: '19px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', lineHeight: 1.35 }}>
                      {svc.title}
                    </h3>
                    <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                      {svc.desc}
                    </p>
                  </div>
                  <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, marginTop: 'auto', paddingTop: '14px', borderTop: '1px solid rgba(23, 50, 77, 0.06)' }}>
                    <span>Подробнее</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Баннер «Не нашли свою ситуацию?» */}
          <div
            style={{
              marginTop: '32px',
              background: 'linear-gradient(135deg, var(--color-deep-blue) 0%, #17324D 100%)',
              padding: '40px 48px',
              borderTop: '3px solid var(--color-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '32px',
              flexWrap: 'wrap',
              boxShadow: '0 12px 30px rgba(11, 28, 42, 0.15)'
            }}
          >
            <div style={{ flex: '1 1 500px', minWidth: '280px' }}>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '26px', fontFamily: 'var(--font-serif)', color: '#FFFFFF', lineHeight: 1.3 }}>
                Не нашли свою ситуацию?
              </h3>
              <p style={{ margin: 0, fontSize: '15px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6 }}>
                <span style={{ display: 'inline-block' }}>Опишите вашу корпоративную задачу в форме. Изучим имеющиеся документы</span> <br />
                <span style={{ display: 'inline-block' }}>и предложим безопасный план действий.</span>
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <a
                href="#form"
                className="btn white-btn-custom"
                style={{
                  display: 'inline-block',
                  textAlign: 'center',
                  fontSize: '15px',
                  padding: '14px 28px',
                  fontWeight: 600,
                  whiteSpace: 'nowrap'
                }}
                onClick={() => handleCtaClick('corporate_hub_banner', 'Описать ситуацию')}
              >
                Описать ситуацию
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 5. КУРАТОР НАПРАВЛЕНИЯ ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Владимир Викторович Начешников"
        position={<>Специалист по корпоративным процедурам и сопровождению бизнеса ЮК «Де-Юре»</>}
        imageUrl="/images/nacheshnikov.jpg"
        imagePosition="center 15%"
        profileHref="/specialisty/nacheshnikov-vladimir-viktorovich/"
        profileText="Подробнее о Владимире Викторовиче Начешникове →"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Владимир Викторович организует предварительный анализ корпоративных документов, оценку рисков для учредителей и выстраивает маршрут прохождения корпоративных процедур.
          </span>,
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Практический опыт в сфере юридических и корпоративных процедур — с 1997 года</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Специализируется на сопровождении корпоративных процедур, реорганизации, сделках с долями и разрешении тупиковых ситуаций</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>В проектах, требующих судебной защиты или бухгалтерской экспертизы, работает совместно с профильными специалистами команды «Де-Юре»</span>
            </li>
          </ul>
        ]}
        buttonText="Задать вопрос Владимиру Викторовичу"
        buttonHref="#form"
      />

      {/* ═══ 6. ПРИМЕРЫ ИЗ ПРАКТИКИ ═══ */}
      <CasesBlock
        title="Примеры дел из практики"
        cases={practiceCases}
        showAllLink="/praktika/"
        showAllText="Смотреть все дела"
        showDemoWarning={false}
      />

      {/* ═══ 7. КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock
        title="Как проходит работа"
        subtitle="Прозрачный и понятный процесс от первой консультации до защиты позиции компании"
        steps={processSteps}
      />

      {/* ═══ 8. СТОИМОСТЬ ЮРИДИЧЕСКОЙ ПОМОЩИ ═══ */}
      <PricingBlock
        title="Стоимость юридической помощи"
        subtitle="Стоимость зависит от специфики задачи, объёма документов, структуры владения и необходимости участия в переговорах, нотариате или суде."
        tiers={pricingTiers}
        disclaimer="Стоимость определяется после изучения устава, выписки ЕГРЮЛ и имеющихся документов. Состав услуг, цена и порядок оплаты фиксируются в договоре до начала работы. Оплата вознаграждения исполнителя не зависит от исхода дела и не включает нотариальные тарифы, государственные пошлины и сопутствующие расходы."
      />

      {/* ═══ 9. ЧАСТЫЕ ВОПРОСЫ (FAQ) ═══ */}
      <FAQBlock
        superTitle="Частые вопросы бизнеса"
        title={<><span>Ответы на</span> <br /><span>частые вопросы</span></>}
        subtitle="О корпоративных процедурах, сделках с долями, рисках и порядке работы"
        ctaText="Задать свой вопрос"
        ctaLink="#form"
        faqs={faqs}
      />

      {/* ═══ 10. ФИНАЛЬНАЯ ФОРМА ═══ */}
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
                <span className="hero-title-span-mobile" style={{ display: "block", whiteSpace: "nowrap" }}>Получите первичную</span> <span className="hero-title-span-mobile" style={{ display: "block", whiteSpace: "nowrap" }}>оценку ситуации</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко опишите корпоративную задачу и оставьте контактные данные. Обращение будет передано Владимиру Викторовичу Начешникову. Он изучит документы и согласует с вами консультацию.
              </p>
              
              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация корпоративного юриста</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните прямо сейчас: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (4742) 20-15-25</a>
                </p>
              </div>

              <div style={{ background: 'rgba(16, 39, 59, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-deep-blue)', fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Конфиденциальность:</strong>
                Не указывайте в форме паспортные данные, сведения о здоровье и коммерческую тайну. Документы можно передать юристу после согласования защищённого способа связи.
                <span style={{ display: 'block', marginTop: '4px', color: 'rgba(44,51,64,0.55)', fontSize: '12px' }}>Основание: статья 10 № 152-ФЗ.</span>
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Оставить заявку"
                subtitle={
                  <>
                    <span style={{ display: 'inline-block' }}>Оставьте имя и номер телефона. Юрист свяжется с вами</span> <br />
                    <span style={{ display: 'inline-block' }}>в течение 15 минут в рабочее время.</span>
                  </>
                }
                hiddenFields={[{ name: 'service', value: 'Корпоративный юрист для бизнеса' }]}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
