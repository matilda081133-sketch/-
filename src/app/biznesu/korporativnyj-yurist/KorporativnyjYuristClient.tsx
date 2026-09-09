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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />
      <Header />

      {/* ═══ БЛОК 1: ПЕРВЫЙ ЭКРАН (HERO) ═══ */}
      <MilitaryHero
        breadcrumbs={
          <>
            <Link href="/">Главная</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/biznesu/">Бизнесу</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Корпоративный юрист</span>
          </>
        }
        superTitle={
          <span style={{ whiteSpace: 'normal', display: 'inline-block', lineHeight: 1.4 }}>
            <span style={{ display: 'inline-block' }}>КОРПОРАТИВНОЕ ПРАВО ДЛЯ БИЗНЕСА •</span> <br />
            <span style={{ display: 'inline-block' }}>Липецк и арбитражные суды РФ</span>
          </span>
        }
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Корпоративный юрист для бизнеса
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Защищаем интересы собственников, участников ООО, инвесторов и руководителей в корпоративных спорах, сделках с долями, процедурах выхода, реорганизации и вопросах контроля над компанией.
          </span>
        }
        primaryCtaText="Обсудить корпоративную задачу"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_corp_hub"
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

      {/* ═══ БЛОК 2: ТИПОВЫЕ СИТУАЦИИ ═══ */}
      <section className="section bg-light" id="situations">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 50px auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontWeight: 600, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>
              <span style={{ width: '20px', height: '2px', backgroundColor: 'var(--color-primary)' }}></span>
              Типичные ситуации
              <span style={{ width: '20px', height: '2px', backgroundColor: 'var(--color-primary)' }}></span>
            </div>
            <h2 className="section-title" style={{ marginBottom: '16px' }}>
              С какими корпоративными ситуациями обращается бизнес
            </h2>
            <p className="section-subtitle" style={{ color: 'var(--color-text-secondary)', margin: '0 auto' }}>
              Своевременное привлечение профильного юриста помогает избежать блокировки счетов, потери активов и затяжных судебных разбирательств.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            {situations.map((sit, idx) => (
              <div
                key={idx}
                className="card service-card"
                style={{
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: '3px solid var(--color-primary)'
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--color-primary)',
                      fontWeight: 700,
                      marginBottom: '12px'
                    }}
                  >
                    {sit.tag}
                  </div>
                  <h3 style={{ fontSize: '20px', color: 'var(--color-deep-blue)', marginBottom: '14px', lineHeight: 1.35 }}>
                    {sit.title}
                  </h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {sit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '40px', textAlign: 'center' }}>
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

      {/* ═══ БЛОК 3: НАПРАВЛЕНИЯ ПОМОЩИ (8 ДОЧЕРНИХ УСЛУГ) ═══ */}
      <section className="section bg-white" id="services">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '860px', margin: '0 auto 50px auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontWeight: 600, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>
              <span style={{ width: '20px', height: '2px', backgroundColor: 'var(--color-primary)' }}></span>
              Направления помощи
              <span style={{ width: '20px', height: '2px', backgroundColor: 'var(--color-primary)' }}></span>
            </div>
            <h2 className="section-title" style={{ marginBottom: '16px' }}>
              Услуги по корпоративному праву в Липецке
            </h2>
            <p className="section-subtitle" style={{ color: 'var(--color-text-secondary)', margin: '0 auto' }}>
              Решаем задачи любой сложности: от подготовки партнёрских договоров до защиты в резонансных корпоративных конфликтах в арбитражном суде.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px' }}>
            {services.map((svc) => (
              <div
                key={svc.id}
                className="card service-card group"
                style={{
                  padding: '36px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: '1px solid var(--color-border)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <span
                      style={{
                        fontSize: '12px',
                        padding: '4px 10px',
                        backgroundColor: 'var(--color-bg-light)',
                        color: 'var(--color-primary)',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}
                    >
                      {svc.badge}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '22px', color: 'var(--color-deep-blue)', marginBottom: '14px', lineHeight: 1.3 }}>
                    <Link href={svc.link} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {svc.title}
                    </Link>
                  </h3>
                  <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                    {svc.desc}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {svc.features.map((feat, fIdx) => (
                      <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>
                        <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Link
                    href={svc.link}
                    className="btn btn-outline"
                    style={{ width: '100%', textAlign: 'center', display: 'block', padding: '12px 20px', fontSize: '14px' }}
                  >
                    Подробнее об услуге →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: КУРАТОР НАПРАВЛЕНИЯ (НАЧЕШНИКОВ В.В.) ═══ */}
      <SpecialistBlock
        title="Куратор корпоративного направления"
        name="Владимир Викторович Начешников"
        position="Специалист по корпоративным процедурам и сопровождению бизнеса, куратор направления"
        imageUrl="/images/nacheshnikov.jpg"
        imagePosition="center 15%"
        profileHref="/specialisty/nacheshnikov-vladimir-viktorovich/"
        profileText="Подробнее о Владимире Викторовиче Начешникове →"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Владимир Викторович организует предварительный анализ корпоративных документов, оценку рисков для учредителей и выстраивает маршрут прохождения корпоративных процедур.
          </span>,
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>
                Практический опыт в сфере юридических и корпоративных процедур — с 1997 года.
              </span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>
                Специализируется на сопровождении корпоративных процедур, реорганизации, сделках с долями и разрешении тупиковых ситуаций.
              </span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>
                В проектах, требующих нотариальных действий, судебной защиты или бухгалтерской экспертизы, работает совместно с профильными специалистами команды «Де-Юре».
              </span>
            </li>
          </ul>
        ]}
        buttonText="Обсудить корпоративную задачу"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 5: ПРИМЕРЫ ИЗ ПРАКТИКИ (3 КЕЙСА) ═══ */}
      <CasesBlock
        title="Примеры корпоративных задач из практики"
        cases={practiceCases}
        showAllLink="/praktika"
        showAllText="Смотреть всю практику →"
      />

      {/* ═══ БЛОК 6: КАК ПРОХОДИТ РАБОТА ═══ */}
      <section className="section bg-light" id="process">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 50px auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontWeight: 600, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>
              <span style={{ width: '20px', height: '2px', backgroundColor: 'var(--color-primary)' }}></span>
              Этапы взаимодействия
              <span style={{ width: '20px', height: '2px', backgroundColor: 'var(--color-primary)' }}></span>
            </div>
            <h2 className="section-title" style={{ marginBottom: '16px' }}>
              Как проходит работа по корпоративной задаче
            </h2>
            <p className="section-subtitle" style={{ color: 'var(--color-text-secondary)', margin: '0 auto' }}>
              Понятный и прозрачный алгоритм: от конфиденциального анализа ситуации до полного достижения результата.
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
                  border: '1px solid var(--color-border)',
                  position: 'relative'
                }}
              >
                <div
                  style={{
                    fontSize: '36px',
                    fontWeight: 800,
                    color: 'var(--color-primary)',
                    opacity: 0.25,
                    fontFamily: 'var(--font-serif)',
                    marginBottom: '16px',
                    lineHeight: 1
                  }}
                >
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

          {/* CTA Banner inside process */}
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
                  Нужна срочная консультация по корпоративному спору или сделке?
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '15px', margin: 0 }}>
                  Проанализируем документы и предложим безопасную стратегию защиты ваших интересов.
                </p>
              </div>
              <a
                href="#form"
                className="btn white-btn-custom"
                onClick={() => handleCtaClick('corporate_hub_banner', 'Получить консультацию')}
              >
                Получить консультацию
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 7: СТОИМОСТЬ УСЛУГ (ТАРИФЫ) ═══ */}
      <PricingBlock
        title="Стоимость услуг корпоративного юриста в Липецке"
        subtitle="Прозрачное ценообразование, фиксированная стоимость в договоре без скрытых доплат."
        tiers={pricingTiers}
        ctaTitle="Точная стоимость рассчитывается после анализа документов"
        ctaSubtitle="Оставьте заявку — куратор направления изучит специфику вашего вопроса и подготовит персональное коммерческое предложение."
        ctaButtonText="Рассчитать стоимость"
        ctaButtonLink="#form"
      />

      {/* ═══ БЛОК 8: FAQ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы"
        title="Вопросы и ответы по корпоративному праву"
        subtitle="Разъяснения специалистов ЮК «Де-Юре» по ключевым аспектам корпоративных процедур и споров."
        faqs={faqs}
      />

      {/* ═══ БЛОК 9: ФИНАЛЬНАЯ ФОРМА ЗАЯВКИ ═══ */}
      <ContactsForm
        title="Обсудите корпоративную задачу с юристом"
        subtitle="Оставьте заявку на конфиденциальную консультацию. Проанализируем документы и определим план действий для вашего бизнеса."
        hiddenFields={[{ name: 'service', value: 'Корпоративный юрист для бизнеса' }]}
      />

      <Footer />
    </>
  );
}
