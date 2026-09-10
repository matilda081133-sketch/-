'use client';

import React from 'react';
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
      title: 'Конфликт участников или дедлок',
      desc: 'Разногласия по распределению прибыли, решениям общего собрания, назначению директора или фактическая блокировка деятельности компании.',
      link: '/biznesu/korporativnyj-yurist/korporativnye-spory-mezhdu-uchastnikami/',
      btnText: 'Корпоративные споры →'
    },
    {
      tag: 'Выход и стоимость доли',
      title: 'Выход участника или выплата доли',
      desc: 'Оформление выхода из состава ООО, определение действительной стоимости доли по рыночной оценке и защита от занижения выплаты.',
      link: '/biznesu/korporativnyj-yurist/vzyskanie-dejstvitelnoj-stoimosti-doli/',
      btnText: 'Взыскание стоимости доли →'
    },
    {
      tag: 'Сделки и покупка бизнеса',
      title: 'Сделка с долями или покупка бизнеса',
      desc: 'Комплексная проверка рисков (due diligence), подготовка договора купли-продажи доли или активов, структурирование расчётов и нотариус.',
      link: '/biznesu/korporativnyj-yurist/pokupka-prodazha-biznesa/',
      btnText: 'Покупка и продажа бизнеса →'
    },
    {
      tag: 'Реорганизация',
      title: 'Реорганизация и изменение структуры',
      desc: 'Слияние, присоединение, разделение, выделение или преобразование компании с сохранением активов, договоров и прав кредиторов.',
      link: '/biznesu/korporativnyj-yurist/reorganizaciya-biznesa/',
      btnText: 'Реорганизация бизнеса →'
    },
    {
      tag: 'Защита контроля',
      title: 'Угроза или утрата контроля над ООО',
      desc: 'Незаконная смена директора, спорные изменения в ЕГРЮЛ, блокировка доступа к счетам, документам и управление без воли собственника.',
      link: '/biznesu/korporativnyj-yurist/zashchita-korporativnogo-kontrolya/',
      btnText: 'Защита контроля →'
    },
    {
      tag: 'Корпоративный договор',
      title: 'Корпоративный договор и партнёрство',
      desc: 'Фиксация договорённостей партнёров на старте: порядок голосования, финансирование, распределение прибыли и правила выхода.',
      link: '/biznesu/korporativnyj-yurist/korporativnyj-dogovor/',
      btnText: 'Корпоративный договор →'
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

      {/* ═══ БЛОК 1: HERO ═══ */}
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
            <span style={{ display: 'inline-block' }}>Липецк и Арбитражный суд</span>
          </span>
        }
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Корпоративный юрист
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              для бизнеса в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Защищаем интересы собственников, участников ООО, инвесторов и руководителей: от безопасного входа и оформления корпоративных договоров до разрешения тупиковых ситуаций и защиты в арбитражном суде.
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
        imageSubtitle="Специалист по корпоративным процедурам и сопровождению бизнеса, куратор направления"
        imageObjectPosition="center 15%"
        trustItems={[
          {
            text: (
              <span>
                <strong>Практический опыт с 1997 года</strong> в корпоративных процедурах
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Полная конфиденциальность</strong> и защита коммерческой тайны
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Арбитражный суд Липецкой области</strong> и арбитражные суды РФ
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Фиксированный состав работ</strong> и стоимость в договоре
              </span>
            )
          }
        ]}
      />

      {/* ═══ БЛОК 2: С КАКОЙ СИТУАЦИЕЙ СТОЛКНУЛСЯ БИЗНЕС (ТИПОВЫЕ СИТУАЦИИ) ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'inline-block' }}>С какой ситуацией</span> <br />
              <span style={{ display: 'inline-block' }}>столкнулся бизнес</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Выберите ближайший сценарий. Подбираем порядок действий под фактическую задачу и структуру владения компанией.
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
                    display: 'inline-block',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {item.tag}
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '18px',
                    fontWeight: 600,
                    color: 'var(--color-deep-blue)',
                    margin: '0 0 14px 0',
                    lineHeight: 1.35,
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {item.title}
                  </h3>

                  <p style={{
                    fontSize: '15px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    margin: '0 0 20px 0',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {item.desc}
                  </p>
                </div>

                <div style={{ position: 'relative', zIndex: 1, marginTop: 'auto' }}>
                  <Link
                    href={item.link}
                    className="btn btn-outline"
                    style={{ padding: '8px 18px', fontSize: '13.5px', display: 'inline-block', width: '100%', textAlign: 'center' }}
                  >
                    {item.btnText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: НАПРАВЛЕНИЯ ПОМОЩИ (8 ДОЧЕРНИХ УСЛУГ) ═══ */}
      <section className="section bg-light" id="directions" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'inline-block' }}>Направления корпоративной</span> <br />
              <span style={{ display: 'inline-block' }}>помощи для бизнеса</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Полный спектр услуг по корпоративному праву в Липецке и арбитражным спорам: от структурирования владения до защиты в суде.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '24px' }}>
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
                    padding: '32px 28px',
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
                        fontSize: '12px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: 'var(--color-primary)',
                        fontWeight: 700,
                        marginBottom: '12px'
                      }}
                    >
                      {svc.badge}
                    </div>
                    <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', color: 'var(--color-deep-blue)', lineHeight: 1.35 }}>
                      {svc.title}
                    </h3>
                    <p style={{ margin: '0 0 16px 0', fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                      {svc.desc}
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {svc.features.map((feat, fIdx) => (
                        <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--color-deep-blue)' }}>
                          <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid rgba(23, 50, 77, 0.08)' }}>
                    <span>Подробнее об услуге</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Промежуточный баннер */}
          <div
            style={{
              marginTop: '40px',
              background: 'var(--color-deep-blue)',
              padding: '36px 40px',
              borderTop: '3px solid var(--color-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
              flexWrap: 'wrap'
            }}
          >
            <div style={{ flex: '1 1 500px' }}>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '24px', fontFamily: 'var(--font-serif)', color: '#FFFFFF' }}>
                Не нашли свою ситуацию?
              </h3>
              <p style={{ margin: 0, fontSize: '15px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.5 }}>
                Опишите вашу корпоративную задачу. Юрист изучит обстоятельства и предложит безопасный порядок действий.
              </p>
            </div>
            <div>
              <a
                href="#form"
                className="btn btn-primary"
                style={{
                  background: '#FFFFFF',
                  color: 'var(--color-deep-blue)',
                  borderColor: '#FFFFFF',
                  whiteSpace: 'nowrap'
                }}
              >
                Получить консультацию
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: КУРАТОР НАПРАВЛЕНИЯ ═══ */}
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
            Владимир Викторович с 1997 года сопровождает корпоративные процедуры и проекты по изменению структуры бизнеса. Работал в различных регионах России и Республике Беларусь.
          </span>,
          <span key="2" style={{ color: 'var(--color-deep-blue)', display: 'block', marginTop: '12px' }}>
            Организует аудит учредительных документов, готовит решения и договоры, координирует регистрационные действия и сопровождает досудебное урегулирование. В судебных спорах и переговорных процессах участвует совместно с профильными юристами и адвокатами ЮК «Де-Юре».
          </span>
        ]}
        buttonText="Задать вопрос куратору"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 5: ПРИМЕРЫ ИЗ ПРАКТИКИ ═══ */}
      <CasesBlock
        title="Примеры дел из практики"
        cases={practiceCases}
        showAllLink="/praktika"
        showAllText="Смотреть всю практику →"
      />

      {/* ═══ БЛОК 6: КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock
        title="Как проходит работа"
        subtitle="Прозрачный и понятный процесс от первичного аудита документов до решения задачи"
        steps={processSteps}
      />

      {/* ═══ БЛОК 7: СТОИМОСТЬ ЮРИДИЧЕСКОЙ ПОМОЩИ ═══ */}
      <PricingBlock
        title="Стоимость юридической помощи"
        subtitle="Стоимость фиксируется в соглашении до начала работы и зависит от сложности процедуры и объёма документов."
        tiers={pricingTiers}
        disclaimer="Стоимость определяется после изучения устава, выписки ЕГРЮЛ и имеющихся документов. Состав услуг, цена и порядок оплаты фиксируются в договоре до начала работы. Оплата вознаграждения исполнителя не зависит от исхода дела и не включает нотариальные тарифы, государственные пошлины и сопутствующие расходы."
      />

      {/* ═══ БЛОК 8: ЧАСТЫЕ ВОПРОСЫ (FAQ) ═══ */}
      <FAQBlock
        title="Часто задаваемые вопросы"
        subtitle="Ответы на популярные вопросы о корпоративных спорах, сделках и процедурах"
        faqs={faqs}
      />

      {/* ═══ БЛОК 9: ФИНАЛЬНАЯ ФОРМА ═══ */}
      <section className="section bg-light" id="form">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontWeight: 600, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>
                <span style={{ width: '20px', height: '2px', backgroundColor: 'var(--color-primary)' }}></span>
                Консультация
                <span style={{ width: '20px', height: '2px', backgroundColor: 'var(--color-primary)' }}></span>
              </div>
              <h2 className="section-title" style={{ marginBottom: '16px' }}>
                Обсудите задачу с корпоративным юристом
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                Оставьте заявку на первичный разбор ситуации. Специалист свяжется с вами, уточнит детали и предложит безопасный план действий.
              </p>
              
              <div style={{ background: 'var(--color-white)', padding: '24px', border: '1px solid var(--color-border)', borderLeft: '3px solid var(--color-primary)', marginBottom: '20px' }}>
                <div style={{ fontWeight: 600, color: 'var(--color-deep-blue)', marginBottom: '4px' }}>
                  Прямой контакт:
                </div>
                <a href="tel:+74742201525" style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-primary)', textDecoration: 'none' }}>
                  +7 (4742) 20-15-25
                </a>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
                  Липецк, ул. Советская, д. 35, офис 213
                </div>
              </div>

              <div style={{ background: 'rgba(16, 39, 59, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-deep-blue)', fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Конфиденциальность:</strong>
                Не указывайте в форме паспортные данные, сведения о здоровье и коммерческую тайну. Их можно передать юристу после установления защищённого способа связи.
                <span style={{ display: 'block', marginTop: '4px', color: 'rgba(44,51,64,0.55)', fontSize: '12px' }}>Основание: статья 10 № 152-ФЗ.</span>
              </div>
            </div>

            <div style={{ background: 'var(--color-white)', padding: '40px', border: '1px solid var(--color-border)', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Оставить заявку"
                subtitle="Перезвоним в течение 15 минут в рабочее время"
                hiddenFields={[{ name: 'service', value: 'Корпоративный юрист в Липецке' }]}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
