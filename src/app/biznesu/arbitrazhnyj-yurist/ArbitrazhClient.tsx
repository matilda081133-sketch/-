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

export default function ArbitrazhClient() {
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
        '@id': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/#breadcrumbs',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Главная', 'item': 'https://dejure-help.ru/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Бизнесу', 'item': 'https://dejure-help.ru/biznesu/' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Арбитражный юрист', 'item': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/' }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/#service',
        'url': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/',
        'name': 'Арбитражный юрист в Липецке',
        'provider': { '@id': 'https://dejure-help.ru/#organization' },
        'areaServed': [
          { '@type': 'AdministrativeArea', 'name': 'Липецкая область' },
          { '@type': 'Country', 'name': 'Россия' }
        ],
        'description': 'Оценка перспектив спора, формирование доказательственной базы, подготовка процессуальных документов и представительство интересов бизнеса в арбитражном суде.'
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'С какими спорами помогает арбитражный юрист?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'С экономическими спорами компаний и ИП: договорными, долговыми, корпоративными, налоговыми, строительными и другими делами, отнесёнными к компетенции арбитражных судов.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Можно ли обратиться до подачи иска?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Да. До обращения в суд можно проверить требования, договор и доказательства, обязательный досудебный порядок, подсудность и возможные процессуальные риски.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Вы работаете и с истцами, и с ответчиками?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Да. Состав работы зависит от роли. Для истца проверяются требования и доказательства перед обращением в суд. Для ответчика работа начинается с анализа иска, приложений, определения суда и ближайших процессуальных дат.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Можно ли подключиться, если дело уже рассматривается?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Можно передать материалы на анализ на любой стадии. Юрист проверит, какие действия уже совершены, какие документы находятся в деле и что ещё возможно сделать с учётом текущей ситуации.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Какие документы нужны для первоначальной оценки?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Обычно нужны договор и приложения, документы об исполнении, претензии и ответы, переписка, расчёты, а по начавшемуся делу — иск, определения, отзывы и решения.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Можно ли вести арбитражное дело дистанционно?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Значительную часть анализа, подготовки документов и коммуникации можно организовать дистанционно через систему «Мой Арбитр» и онлайн-заседания.'
            }
          }
        ]
      }
    ]
  };

  const situations = [
    {
      tag: 'Подача иска',
      title: 'Хотим обратиться с иском',
      desc: 'Нужно оценить требования, проверить претензионный порядок, доказательства и подготовить обращение в арбитражный суд.',
      link: '/biznesu/arbitrazhnyj-yurist/isk-v-arbitrazhnyj-sud/',
      btnText: 'Подготовка иска →'
    },
    {
      tag: 'Защита ответчика',
      title: 'Получили иск или определение',
      desc: 'Нужно проверить требования истца, судебное определение и ближайшие сроки, подготовить отзыв и стратегию защиты.',
      link: '/biznesu/arbitrazhnyj-yurist/zashchita-otvetchika-v-arbitrazhnom-sude/',
      btnText: 'Защита ответчика →'
    },
    {
      tag: 'Текущий процесс',
      title: 'Дело уже рассматривается',
      desc: 'Заседание назначено, но позиция не подготовлена либо требуется опытный внешний представитель и экспертиза.',
      link: '#form',
      btnText: 'Подключить юриста →'
    },
    {
      tag: 'Апелляция и кассация',
      title: 'Решение суда не устраивает',
      desc: 'Нужно изучить судебный акт, материалы дела и определить основания и сроки апелляционного или кассационного обжалования.',
      link: '/biznesu/arbitrazhnyj-yurist/obzhalovanie-resheniya-arbitrazhnogo-suda/',
      btnText: 'Обжаловать решение →'
    },
    {
      tag: 'Защита решения',
      title: 'Оппонент подал жалобу',
      desc: 'Суд вынес решение в вашу пользу, но оппонент пытается его отменить. Подготовим мотивированный отзыв на жалобу.',
      link: '/biznesu/arbitrazhnyj-yurist/obzhalovanie-resheniya-arbitrazhnogo-suda/',
      btnText: 'Защитить решение →'
    },
    {
      tag: 'Обеспечительные меры',
      title: 'Нужен арест счетов или активов',
      desc: 'Есть риск вывода имущества должником. Подготовим заявление о наложении ареста на денежные средства и имущество.',
      link: '#form',
      btnText: 'Принять меры →'
    }
  ];

  const urgentItems = [
    {
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Получено определение</span> <br />
          <span style={{ display: 'inline-block' }}>арбитражного суда</span>
        </span>
      ),
      desc: 'В определении установлен процессуальный срок для отзыва, доказательств или устранения недостатков.'
    },
    {
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Назначено судебное</span> <br />
          <span style={{ display: 'inline-block' }}>заседание</span>
        </span>
      ),
      desc: 'Требуется срочно изучить материалы дела через «Мой Арбитр» и подготовить письменные возражения.'
    },
    {
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Приняты обеспечительные</span> <br />
          <span style={{ display: 'inline-block' }}>меры суда</span>
        </span>
      ),
      desc: 'Арест счетов блокирует операционную деятельность. Необходимо ходатайство об отмене или замене мер.'
    },
    {
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Назначена судебная</span> <br />
          <span style={{ display: 'inline-block' }}>экспертиза</span>
        </span>
      ),
      desc: 'Формулировки вопросов и выбор экспертной организации критически определяют исход дела.'
    },
    {
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Истекает срок</span> <br />
          <span style={{ display: 'inline-block' }}>на обжалование</span>
        </span>
      ),
      desc: 'Срок подачи апелляционной жалобы — 1 месяц. Пропуск срока требует сложной процедуры восстановления.'
    },
    {
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Оппонент выводит</span> <br />
          <span style={{ display: 'inline-block' }}>активы и имущество</span>
        </span>
      ),
      desc: 'Срочно требуются обеспечительные меры и фиксация недобросовестных действий контролирующих лиц.'
    }
  ];

  const routes: { tag: string; title: React.ReactNode; desc: string; route: string }[] = [
    {
      tag: 'Сторона истца',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Истец / Заявитель</span> <br />
          <span style={{ display: 'inline-block' }}>требований</span>
        </span>
      ),
      desc: 'Проверяем основания, договор, претензионный порядок, доказательства, расчёт неустойки и исполнимость будущего решения.',
      route: 'Досудебная претензия → иск в арбитраж → обеспечительные меры → представительство в заседаниях.'
    },
    {
      tag: 'Сторона ответчика',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Ответчик / Защита</span> <br />
          <span style={{ display: 'inline-block' }}>от необоснованного иска</span>
        </span>
      ),
      desc: 'Анализируем иск, приложения и определение суда; заявляем контррасчёт, снижение неустойки по ст. 333 ГК РФ или встречный иск.',
      route: 'Мотивированный отзыв → исключение необоснованных сумм → встречный иск / мировое соглашение.'
    },
    {
      tag: 'Третье лицо',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Третье лицо / Защита</span> <br />
          <span style={{ display: 'inline-block' }}>прав компании</span>
        </span>
      ),
      desc: 'Определяем, как судебный акт может повлиять на права и обязанности компании, и формируем самостоятельную позицию.',
      route: 'Письменные пояснения по делу → участие в заседаниях → предотвращение преюдициальных рисков.'
    },
    {
      tag: 'Штатная служба',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Компания со штатным</span> <br />
          <span style={{ display: 'inline-block' }}>юристом</span>
        </span>
      ),
      desc: 'Подключаемся как судебные процессуалисты: аудит позиции, второе экспертное мнение, сложные экспертизы или ведение дел в других регионах.',
      route: 'Распределение зон ответственности → усиление доказательной базы → совместная судебная работа.'
    }
  ];

  const stages = [
    {
      num: '01',
      stage: 'Фиксация процессуальной стадии и аудит документов',
      works: 'Уточняем стороны спора, предмет требований, имеющиеся доказательства, поступившие судебные акты и ближайшие контрольные даты.',
      result: 'Правовое заключение о перспективах спора, рисках и оптимальной стратегии действий'
    },
    {
      num: '02',
      stage: 'Формирование правовой позиции и сбор доказательств',
      works: 'Анализируем условия договоров, первичку, переписку; определяем перечень недостающих документов, свидетелей и экспертных вопросов.',
      result: 'Сформированная доказательственная база и комплект процессуальных обоснований'
    },
    {
      num: '03',
      stage: 'Подготовка и подача процессуальных документов',
      works: 'Составляем мотивированное исковое заявление, отзыв на иск, встречный иск, ходатайства об обеспечительных мерах или экспертизе.',
      result: 'Официальная регистрация документов в арбитражном суде через систему «Мой Арбитр»'
    },
    {
      num: '04',
      stage: 'Судебное представительство во всех заседаниях',
      works: 'Лично и онлайн участвуем во всех судебных заседаниях инстанции, заявляем ходатайства, возражения и защищаем позицию доверителя.',
      result: 'Протокольная фиксация всех доводов, отражение контраргументов и ведение процесса'
    },
    {
      num: '05',
      stage: 'Получение судебного акта и взыскание расходов',
      works: 'Контролируем изготовление решения в полном объёме, подаём заявление о возмещении судебных расходов на представителя с оппонента.',
      result: 'Итоговое решение суда, исполнительный лист и определение о взыскании расходов'
    }
  ];

  const claims = [
    {
      tag: 'Договорное право',
      title: 'Договорные споры',
      desc: 'Поставка, подряд, аренда, оказание услуг, перевозка, расторжение договоров, убытки и договорные штрафы.'
    },
    {
      tag: 'Дебиторская задолженность',
      title: 'Взыскание задолженности',
      desc: 'Претензионная и судебная работа по возврату основного долга, процентов по ст. 395 ГК РФ и законной неустойки.'
    },
    {
      tag: 'Корпоративное право',
      title: 'Корпоративные конфликты',
      desc: 'Споры участников ООО и акционеров, оспаривание решений общих собраний, сделок с заинтересованностью, исключение участников.'
    },
    {
      tag: 'Налоговые споры',
      title: 'Споры с ФНС и госорганами',
      desc: 'Оспаривание решений налоговых органов, актов выездных и камеральных проверок, доначислений, предписаний ФАС и Росреестра.'
    },
    {
      tag: 'Строительство и подряд',
      title: 'Строительный подряд',
      desc: 'Споры по качеству и объёмам работ, скрытым недостаткам, задержкам сдачи объектов и назначение строительно-технических экспертиз.'
    },
    {
      tag: 'Недвижимость и земля',
      title: 'Недвижимость и аренда',
      desc: 'Споры по правам собственности на коммерческие объекты, договорам аренды земельных участков, сервитуты и самовольные постройки.'
    },
    {
      tag: 'Оспаривание сделок',
      title: 'Недействительность сделок',
      desc: 'Признание договоров недействительными (оспоримыми/ничтожными), реституция, возврат активов и подозрительные сделки.'
    },
    {
      tag: 'Ущерб и обогащение',
      title: 'Убытки и обогащение',
      desc: 'Взыскание реального ущерба, упущенной выгоды бизнеса, неосновательного обогащения (ст. 1102 ГК РФ) и штрафных санкций.'
    },
    {
      tag: 'Нематериальные активы',
      title: 'Деловая репутация и бренды',
      desc: 'Защита деловой репутации компании, опровержение недостоверных сведений, споры по товарным знакам и коммерческим обозначениям.'
    }
  ];

  const courts = [
    {
      name: 'Арбитражный суд Липецкой области',
      instance: 'Первая инстанция',
      location: 'г. Липецк, пл. Петра Великого, д. 7',
      desc: 'Рассмотрение экономических споров между юридическими лицами и ИП Липецкой области по первой инстанции.'
    },
    {
      name: 'Девятнадцатый арбитражный апелляционный суд (19 ААС)',
      instance: 'Апелляционная инстанция',
      location: 'г. Воронеж, ул. Платонова, д. 8',
      desc: 'Проверка законности и обоснованности не вступивших в силу судебных актов Арбитражного суда Липецкой области.'
    },
    {
      name: 'Арбитражный суд Центрального округа (АС ЦО)',
      instance: 'Кассационная инстанция',
      location: 'г. Калуга, ул. Ленина, д. 74',
      desc: 'Кассационная проверка вступивших в силу решений и постановлений судов первой и апелляционной инстанций.'
    },
    {
      name: 'Верховный Суд Российской Федерации',
      instance: 'Судебная коллегия по экономическим спорам',
      location: 'г. Москва, ул. Поварская, д. 15',
      desc: 'Вторая кассация и надзорное производство по исключительным и прецедентным спорам экономической коллегии ВС РФ.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Первичный аудит и стратегия',
      subtitle: 'Анализ документов, выявление рисков и письменный план процессуальных действий',
      price: 'от 20 000 ₽',
      popular: false,
      features: [
        { name: 'Правовой анализ договоров, актов, переписки', value: '✓' },
        { name: 'Проверка процессуальных сроков и подсудности', value: '✓' },
        { name: 'Анализ судебной практики по аналогичным спорам', value: '✓' },
        { name: 'Расчёт цены иска, пошлины и неустойки', value: '✓' },
        { name: 'Письменное заключение с рекомендациями', value: '✓' }
      ],
      buttonText: 'Заказать аудит',
      buttonHref: '#form'
    },
    {
      title: 'Подготовка комплекта документов',
      subtitle: 'Составление иска, отзыва или жалобы со всеми необходимыми ходатайствами',
      price: 'от 35 000 ₽',
      popular: true,
      badgeText: 'Востребовано',
      features: [
        { name: 'Все услуги тарифа «Первичный аудит»', value: '✓' },
        { name: 'Подготовка мотивированного иска / отзыва', value: '✓' },
        { name: 'Формирование доказательственной базы', value: '✓' },
        { name: 'Ходатайства об обеспечительных мерах / экспертизе', value: '✓' },
        { name: 'Официальная подача через систему «Мой Арбитр»', value: '✓' }
      ],
      buttonText: 'Подготовить документы',
      buttonHref: '#form'
    },
    {
      title: 'Ведение дела «под ключ»',
      subtitle: 'Полное судебное представительство во всех заседаниях инстанции до вынесения акта',
      price: 'от 70 000 ₽',
      popular: false,
      features: [
        { name: 'Все услуги тарифа «Подготовка комплекта»', value: '✓' },
        { name: 'Личное и онлайн участие во всех заседаниях', value: '✓' },
        { name: 'Оперативные письменные пояснения и возражения', value: '✓' },
        { name: 'Участие в назначении судебных экспертиз', value: '✓' },
        { name: 'Взыскание расходов на представителя с оппонента', value: '✓' }
      ],
      buttonText: 'Поручить ведение дела',
      buttonHref: '#form'
    }
  ];

  const cases: CaseData[] = [
    {
      category: 'Строительный подряд • АС Липецкой области',
      title: 'Взыскание 14,8 млн ₽ за выполненные строительно-монтажные работы',
      problem: 'Заказчик уклонялся от подписания актов КС-2 и отказался оплачивать монтаж инженерных систем, ссылаясь на отсутствие промежуточных согласований.',
      action: 'Сформировали доказательственную базу фактического использования объекта, заявили судебную строительно-техническую экспертизу и обосновали потребительскую ценность результата работ.',
      result: 'Иск удовлетворён полностью: взыскан основной долг 14,8 млн ₽, неустойка 1,2 млн ₽ и все расходы на экспертизу.'
    },
    {
      category: 'Защита ответчика • Договор поставки',
      title: 'Снижение неустойки поставщика на 82% по ст. 333 ГК РФ',
      problem: 'Поставщик предъявил иск к производственному предприятию на сумму 8,4 млн ₽, из которых 3,1 млн ₽ составляли завышенные штрафные санкции.',
      action: 'Подготовили мотивированный отзыв, контррасчёт по средневзвешенным ставкам ЦБ РФ и доказали несоразмерность требований последствиям нарушения обязательств.',
      result: 'Суд снизил неустойку на 2,54 млн ₽ и утвердил комфортный график погашения основного долга.'
    },
    {
      category: 'Апелляционное обжалование • 19 ААС Воронеж',
      title: 'Отмена решения суда первой инстанции о расторжении договора аренды',
      problem: 'Суд первой инстанции расторг долгосрочный договор аренды коммерческой недвижимости по формальным основаниям арендодателя.',
      action: 'Подали апелляционную жалобу в 19 ААС, доказали нарушение норм материального права и отсутствие существенных нарушений со стороны арендатора.',
      result: 'Решение суда первой инстанции отменено полностью. Договор аренды сохранён, права бизнеса восстановлены.'
    }
  ];

  const faqs = [
    {
      q: 'С какими спорами помогает арбитражный юрист?',
      a: 'С экономическими спорами, связанными с деятельностью компаний и предпринимателей: договорными, долговыми, корпоративными, налоговыми, строительными и другими делами, отнесёнными к компетенции арбитражных судов. Предметные категории подробно раскрываются в соответствующих разделах сайта.'
    },
    {
      q: 'Можно ли обратиться до подачи иска?',
      a: 'Да. До обращения в суд можно проверить требования, договор и доказательства, обязательный досудебный порядок, подсудность и возможные процессуальные риски. После анализа станет понятно, требуется ли иск или возможен другой способ урегулирования.'
    },
    {
      q: 'Вы работаете и с истцами, и с ответчиками?',
      a: 'Да. Состав работы зависит от роли. Для истца обычно проверяются требования и доказательства перед обращением в суд. Для ответчика работа начинается с анализа иска, приложений, определения суда и ближайших процессуальных дат.'
    },
    {
      q: 'Можно ли подключиться, если дело уже рассматривается?',
      a: 'Можно передать материалы на анализ на любой стадии. Юрист проверит, какие действия уже совершены, какие документы находятся в деле и что ещё возможно сделать с учётом текущей процессуальной ситуации.'
    },
    {
      q: 'Какие документы нужны для первоначальной оценки?',
      a: 'Обычно нужны договор и приложения, документы об исполнении, претензии и ответы, деловая переписка, расчёты, а по начавшемуся делу — иск, определения, отзывы, решения и другие судебные материалы. Окончательный перечень определяется после уточнения задачи.'
    },
    {
      q: 'Можно ли поручить только подготовку отдельного документа?',
      a: 'Да, если отдельная работа имеет смысл в конкретной ситуации. До подготовки иска, отзыва, ходатайства или жалобы юрист изучит достаточный объём материалов и поймет процессуальную задачу документа.'
    },
    {
      q: 'Можете ли вы работать совместно со штатным юристом компании?',
      a: 'Да. Можно согласовать отдельную роль внешнего специалиста: анализ позиции, подготовку процессуальных документов, участие в заседаниях, второе мнение или комплексное ведение дела.'
    },
    {
      q: 'Можно ли вести арбитражное дело дистанционно?',
      a: 'Значительную часть анализа, подготовки документов и коммуникации можно организовать дистанционно через систему «Мой Арбитр» и онлайн-заседания. Необходимость личного участия зависит от суда, стадии и согласованного объёма работы.'
    },
    {
      q: 'Сколько длится арбитражное дело?',
      a: 'Единого срока нет. Продолжительность зависит от категории и сложности спора, количества участников, объёма доказательств, экспертизы, процессуального поведения сторон и обжалования.'
    },
    {
      q: 'От чего зависит стоимость услуг?',
      a: 'От объёма материалов, предмета и цены спора, текущей стадии, количества требований и участников, числа заседаний, необходимости экспертизы и командировок. Стоимость этапа фиксируется в договоре до начала работы.'
    },
    {
      q: 'Можно ли взыскать расходы на юриста с оппонента?',
      a: 'Заявление о судебных расходах подаётся после вынесения решения в пользу доверителя. Суд взыскивает расходы на представителя с проигравшей стороны с учётом принципа разумности.'
    },
    {
      q: 'Можно ли гарантировать победу в арбитражном суде?',
      a: 'Нет. Решение принимает суд после всесторонней оценки доказательств. Юрист добросовестно оценивает риски, формирует сильную позицию и отстаивает интересы, но закон запрещает гарантировать исход судебного разбирательства.'
    }
  ];

  return (
    <main style={{ position: 'relative', overflowX: 'hidden' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
            <span style={{ color: 'var(--color-text-main)' }}>Арбитражный юрист</span>
          </>
        }
        superTitle={
          <span style={{ whiteSpace: 'normal', display: 'inline-block', lineHeight: 1.4 }}>
            <span style={{ display: 'inline-block' }}>Арбитражные споры для бизнеса •</span> <br />
            <span style={{ display: 'inline-block' }}>Липецк и Липецкая область</span>
          </span>
        }
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Арбитражный юрист
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Изучим документы и стадию дела, определим процессуальные риски, подготовим правовую позицию и представим интересы компании или ИП в арбитражном суде.
          </span>
        }
        primaryCtaText="Обсудить арбитражный спор"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_arbitrazh"
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
          { text: 'Работаем со стороны истца, ответчика и третьего лица' },
          { text: 'Подключаемся до подачи иска и к уже начавшемуся делу' },
          { text: 'Объём, этап и стоимость согласуем до начала работы' },
          { text: 'Личное и онлайн участие в судах всех инстанций' }
        ]}
        imageUrl="/images/hero_legal_premium.png"
        imageName="Судебная практика ЮК «Де-Юре»"
        imageSubtitle="Комплексное представительство интересов бизнеса в арбитражных судах"
        imageObjectPosition="center 20%"
      />

      {/* ═══ БЛОК 2: С КАКОЙ СИТУАЦИЕЙ СТОЛКНУЛАСЬ КОМПАНИЯ ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'inline-block' }}>С какой ситуацией</span> <br /><span style={{ display: 'inline-block' }}>столкнулась компания</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Выберите ближайший сценарий. Подбираем процессуальный маршрут под фактическую стадию дела и задачи вашего бизнеса.
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
                  {item.link.startsWith('/') ? (
                    <Link
                      href={item.link}
                      className="btn btn-outline"
                      style={{ padding: '8px 18px', fontSize: '13.5px', display: 'inline-block', width: '100%', textAlign: 'center' }}
                    >
                      {item.btnText}
                    </Link>
                  ) : (
                    <a
                      href={item.link}
                      className="btn btn-outline"
                      style={{ padding: '8px 18px', fontSize: '13.5px', display: 'inline-block', width: '100%', textAlign: 'center' }}
                    >
                      {item.btnText}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Карточки дочерних специализированных услуг */}
          <div style={{
            background: 'linear-gradient(135deg, var(--color-deep-blue) 0%, #17324D 100%)',
            padding: '36px 40px',
            borderTop: '3px solid var(--color-gold)',
            marginBottom: '32px',
            boxShadow: '0 12px 30px rgba(11, 28, 42, 0.15)'
          }}>
            <div style={{ marginBottom: '24px' }}>
              <span style={{ fontSize: '12px', color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                Специализированные услуги кластера
              </span>
              <h3 style={{ margin: '8px 0 0 0', fontSize: '24px', fontFamily: 'var(--font-serif)', color: '#FFFFFF' }}>
                Выберите этап или формат помощи
              </h3>
            </div>

            <div className="grid grid-3" style={{ gap: '20px' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.06)', padding: '24px', border: '1px solid rgba(255, 255, 255, 0.12)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ color: '#FFFFFF', fontSize: '17px', margin: '0 0 10px 0', fontFamily: 'var(--font-serif)' }}>
                    Подготовка и подача иска
                  </h4>
                  <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '14px', lineHeight: 1.55, margin: '0 0 16px 0' }}>
                    Проверим требования, подсудность, претензионный порядок, сформируем комплект доказательств и подадим иск в суд.
                  </p>
                </div>
                <Link href="/biznesu/arbitrazhnyj-yurist/isk-v-arbitrazhnyj-sud/" style={{ color: 'var(--color-gold)', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>
                  Подробнее об услуге →
                </Link>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.06)', padding: '24px', border: '1px solid rgba(255, 255, 255, 0.12)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ color: '#FFFFFF', fontSize: '17px', margin: '0 0 10px 0', fontFamily: 'var(--font-serif)' }}>
                    Защита ответчика в суде
                  </h4>
                  <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '14px', lineHeight: 1.55, margin: '0 0 16px 0' }}>
                    Срочный анализ иска, подготовка отзыва, снижение неустойки по ст. 333 ГК РФ, встречный иск и защита активов.
                  </p>
                </div>
                <Link href="/biznesu/arbitrazhnyj-yurist/zashchita-otvetchika-v-arbitrazhnom-sude/" style={{ color: 'var(--color-gold)', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>
                  Подробнее об услуге →
                </Link>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.06)', padding: '24px', border: '1px solid rgba(255, 255, 255, 0.12)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ color: '#FFFFFF', fontSize: '17px', margin: '0 0 10px 0', fontFamily: 'var(--font-serif)' }}>
                    Обжалование судебных решений
                  </h4>
                  <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '14px', lineHeight: 1.55, margin: '0 0 16px 0' }}>
                    Апелляция в 19 ААС (Воронеж), кассация в АС ЦО (Калуга), приостановление исполнения и восстановление сроков.
                  </p>
                </div>
                <Link href="/biznesu/arbitrazhnyj-yurist/obzhalovanie-resheniya-arbitrazhnogo-suda/" style={{ color: 'var(--color-gold)', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>
                  Подробнее об услуге →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: КОГДА НУЖНО ДЕЙСТВОВАТЬ БЕЗ ПРОМЕДЛЕНИЯ ═══ */}
      <section style={{ background: 'var(--color-deep-blue)', padding: '64px 0 56px', position: 'relative', overflow: 'hidden' }} id="urgent">
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '36px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontFamily: 'var(--font-serif)', color: '#FFFFFF', marginBottom: '12px', marginTop: 0, lineHeight: 1.25 }}>
              <span style={{ display: 'inline-block' }}>Когда нужно действовать</span> <br />
              <span style={{ display: 'inline-block' }}>без промедления</span>
            </h2>
            <div style={{ width: '60px', height: '2px', background: 'var(--color-gold)', marginBottom: '20px' }}></div>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', marginBottom: '40px', maxWidth: '720px', lineHeight: 1.6 }}>
              В арбитражном процессе пропуск процессуального срока лишает сторону права ссылаться на доказательства или обжаловать неправосудный акт.
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

          <div style={{
            background: 'rgba(255, 255, 255, 0.08)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '16px 24px',
            marginBottom: '32px',
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '14px',
            lineHeight: 1.6
          }}>
            <span style={{ display: 'inline-block' }}>
              <strong style={{ color: '#FFFFFF' }}>Срочная ситуация:</strong> Передайте юристу название полученного документа, дату его получения и дату ближайшего заседания.
            </span>
          </div>

          {/* Зона связи */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '28px', display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <a href="tel:+79103503111" style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.02em' }}>
              +7 (910) 350-31-11
            </a>
            <a href="tel:+79103503111" className="btn btn-urgent-call" style={{ padding: '14px 28px', fontSize: '15px' }}>
              Позвонить юристу
            </a>
            <a href="#form" className="btn btn-urgent-outline" style={{ padding: '14px 28px', fontSize: '15px' }}>
              Сообщить о документе
            </a>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
              Ответим в рабочее время и согласуем процессуальные действия
            </span>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: ДИАГНОСТИКА: ПОЧЕМУ СНАЧАЛА НУЖЕН АНАЛИЗ МАТЕРИАЛОВ ═══ */}
      <section className="section bg-light" id="audit" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '28px',
            marginBottom: '40px',
            borderBottom: '1px solid rgba(193, 160, 102, 0.3)',
            paddingBottom: '28px'
          }}>
            <div style={{ maxWidth: '620px' }}>
              <div style={{
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--color-gold)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '12px'
              }}>
                Процессуальный аудит
              </div>
              <h2 className="with-accent" style={{
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontFamily: 'var(--font-serif)',
                color: 'var(--color-primary)',
                margin: 0,
                lineHeight: 1.2
              }}>
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                  Почему сначала нужен
                </span>
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                  анализ материалов
                </span>
              </h2>
            </div>
            <div style={{ maxWidth: '480px', paddingTop: '28px' }}>
              <p style={{
                fontSize: '15.5px',
                color: 'var(--color-deep-blue)',
                lineHeight: 1.65,
                margin: 0,
                opacity: 0.92
              }}>
                Одного названия спора недостаточно для выбора стратегии. Результат зависит от условий договора, полномочий подписантов, первичных документов, досудебного порядка и уже совершенных процессуальных действий.
              </p>
            </div>
          </div>

          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            {/* Карточка 1: Проверка документов и позиции */}
            <div style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-primary)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0, paddingBottom: '12px', borderBottom: '1px solid rgba(23, 50, 77, 0.1)' }}>
                Основа отношений и доказательства
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  'Договоры, спецификации, дополнительные соглашения и приложения',
                  'УПД, товарные накладные, акты выполненных работ, отчёты и сметы',
                  'Претензии, официальные ответы, акты сверки и деловая переписка',
                  'Полномочия подписантов, доверенности и печати контрагентов',
                  'Соблюдение обязательного досудебного порядка урегулирования спора',
                  'Точный расчёт цены иска, договорной неустойки и процентов по закону'
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <polyline points="9 11 12 14 22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                    <span style={{ fontSize: '14.5px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Карточка 2: Процессуальные сроки и риски */}
            <div style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-gold)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0, paddingBottom: '12px', borderBottom: '1px solid rgba(23, 50, 77, 0.1)' }}>
                Процессуальный статус и риски
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  'Сроки исковой давности и специальные сроки на подачу жалоб',
                  'Родовая и территориальная подсудность, договорная подсудность',
                  'Процессуальные сроки, установленные определением арбитражного суда',
                  'Риск применения обеспечительных мер и ареста банковских счетов',
                  'Необходимость назначения судебных экспертиз (строительных, бухгалтерских)',
                  'Возможность мирного урегулирования и заключения мирового соглашения'
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <polyline points="9 11 12 14 22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                    <span style={{ fontSize: '14.5px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{
            padding: '24px 32px',
            background: '#FFFFFF',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <polyline points="9 11 12 14 22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
              <span style={{ fontSize: '14.5px', color: 'var(--color-deep-blue)', fontWeight: 500 }}>
                Конфиденциальные документы передаются после согласования защищённого канала связи
              </span>
            </div>
            <a href="#form" className="btn btn-primary" style={{ padding: '12px 28px', fontSize: '14.5px' }}>
              Передать дело на аудит
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: ПОМОЩЬ В ЗАВИСИМОСТИ ОТ РОЛИ В ДЕЛЕ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px', textAlign: 'left' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Процессуальное положение
            </div>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Помощь в зависимости</span> <br />
              <span style={{ display: 'inline-block' }}>от вашей роли в суде</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Задачи, процессуальные инструменты и доказательства кардинально различаются в зависимости от стороны спора.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            {routes.map((item, i) => (
              <div
                key={i}
                className="hover-lift"
                style={{
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  padding: '34px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.05, pointerEvents: 'none' }}>
                  <svg width="100" height="100" viewBox="0 0 24 24" fill="var(--color-deep-blue)">
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>

                <div>
                  <div style={{
                    fontSize: '11.5px',
                    fontWeight: 700,
                    color: 'var(--color-gold)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '14px',
                    background: 'rgba(193, 160, 102, 0.12)',
                    padding: '4px 10px',
                    alignSelf: 'flex-start',
                    display: 'inline-block',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {item.tag}
                  </div>
                  <h3 style={{
                    fontSize: '19px',
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--color-deep-blue)',
                    margin: '0 0 12px 0',
                    lineHeight: 1.35,
                    fontWeight: 600,
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: '14.5px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    margin: '0 0 24px 0',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {item.desc}
                  </p>
                </div>

                <div style={{
                  background: '#FFFFFF',
                  padding: '16px 18px',
                  border: '1px solid var(--color-border)',
                  borderLeft: '3px solid var(--color-gold)',
                  marginTop: 'auto',
                  position: 'relative',
                  zIndex: 1,
                  boxShadow: '0 2px 8px rgba(23, 50, 77, 0.03)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    <strong style={{ fontSize: '11.5px', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Применимый маршрут
                    </strong>
                  </div>
                  <span style={{ fontSize: '13.5px', color: 'var(--color-deep-blue)', lineHeight: 1.45, fontWeight: 500, display: 'block' }}>
                    {item.route}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 6: КАК СТРОИТСЯ РАБОТА (ЭТАПЫ ВЕДЕНИЯ АРБИТРАЖНОГО ДЕЛА) ═══ */}
      <section className="section bg-light" id="process" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px', textAlign: 'left' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Этапы юридического сопровождения
            </div>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Как строится ведение</span> <br />
              <span style={{ display: 'inline-block' }}>арбитражного дела</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Чёткий регламент процессуальной работы и прозрачный результат на каждом этапе взаимодействия.
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
                    <span style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '26px',
                      fontWeight: 700,
                      color: 'var(--color-gold)',
                      lineHeight: 1
                    }}>
                      {step.num}
                    </span>
                    <span style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: 'var(--color-primary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      background: 'rgba(23, 50, 77, 0.06)',
                      padding: '3px 8px'
                    }}>
                      Этап {step.num}
                    </span>
                  </div>

                  <h3 style={{
                    fontSize: '19px',
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--color-deep-blue)',
                    margin: '0 0 10px 0',
                    lineHeight: 1.35,
                    fontWeight: 600
                  }}>
                    {step.stage}
                  </h3>

                  <p style={{
                    fontSize: '14.5px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    {step.works}
                  </p>
                </div>

                <div style={{
                  flex: '1 1 320px',
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

          <div style={{
            padding: '24px 32px',
            background: '#FFFFFF',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            marginTop: '36px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: '1 1 520px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <polyline points="9 11 12 14 22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
              <span style={{ fontSize: '15px', color: 'var(--color-deep-blue)', fontWeight: 500, lineHeight: 1.55 }}>
                Согласуем состав и фиксированную стоимость каждого этапа до начала процессуальных действий
              </span>
            </div>
            <a href="#form" className="btn btn-primary" style={{ padding: '13px 28px', fontSize: '14.5px', whiteSpace: 'nowrap', flexShrink: 0 }}>
              Начать работу с аудита
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 7: КАКИЕ АРБИТРАЖНЫЕ СПОРЫ СОПРОВОЖДАЕМ ═══ */}
      <section className="section bg-white" id="claims" style={{ position: 'relative', overflow: 'hidden', padding: '70px 0' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
            <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
              Категории арбитражных дел
            </span>
          </div>

          <h2 style={{ 
            marginBottom: '16px', 
            fontSize: 'clamp(28px, 3.2vw, 42px)', 
            fontFamily: 'var(--font-serif)', 
            color: 'var(--color-deep-blue)',
            textAlign: 'left',
            textWrap: 'balance',
            marginTop: 0
          }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Какие арбитражные споры
            </span>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              сопровождает «Де-Юре»
            </span>
          </h2>

          <p style={{ 
            fontSize: '16px', 
            color: 'var(--color-text-secondary)', 
            lineHeight: 1.7, 
            maxWidth: '820px', 
            marginBottom: '40px'
          }}>
            Представляем интересы бизнеса по всем видам коммерческих и публичных споров в арбитражных судах:
          </p>

          <div className="claims-matrix-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            borderTop: '1px solid var(--color-primary)', 
            borderLeft: '1px solid rgba(23, 50, 77, 0.1)',
            borderBottom: '1px solid rgba(23, 50, 77, 0.1)',
            marginBottom: '32px'
          }}>
            {claims.map((item, idx) => (
              <div 
                key={idx} 
                className="usp-card" 
                style={{ 
                  padding: '40px 32px', 
                  borderRight: '1px solid rgba(23, 50, 77, 0.1)',
                  borderBottom: '1px solid rgba(23, 50, 77, 0.1)',
                  background: 'rgba(247, 244, 237, 0.45)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start'
                }}
              >
                <div>
                  <div className="usp-accent"></div>
                  
                  <div style={{ 
                    fontSize: '11px', 
                    letterSpacing: '0.1em', 
                    color: 'var(--color-gold)', 
                    fontWeight: 700, 
                    marginBottom: '16px', 
                    textTransform: 'uppercase', 
                    position: 'relative', 
                    zIndex: 1 
                  }}>
                    {item.tag}
                  </div>
                  <h3 style={{ 
                    fontSize: '20px', 
                    fontWeight: 'bold', 
                    color: 'var(--color-deep-blue)', 
                    marginBottom: '16px', 
                    fontFamily: 'var(--font-serif)', 
                    lineHeight: 1.3, 
                    minHeight: '52px', 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    position: 'relative', 
                    zIndex: 1 
                  }}>
                    {item.title}
                  </h3>
                </div>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: 1.6, margin: 0, position: 'relative', zIndex: 1 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            marginTop: '8px'
          }}>
            <p style={{ 
              fontSize: '15px', 
              color: 'var(--color-text-secondary)', 
              lineHeight: 1.6, 
              margin: 0,
              fontStyle: 'italic',
              borderLeft: '3px solid var(--color-primary)',
              paddingLeft: '16px',
              flex: '1 1 500px'
            }}>
              Каждая категория спора требует специальной доказательственной базы и знания отраслевой судебной практики
            </p>
            <a href="#form" className="btn btn-primary" style={{ padding: '12px 28px', fontSize: '14.5px', whiteSpace: 'nowrap' }}>
              Обсудить категорию спора
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 8: СУДЕБНЫЕ ИНСТАНЦИИ ═══ */}
      <section className="section bg-light" id="courts" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '40px' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
              География судебного представительства
            </div>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', margin: '0 0 16px 0', lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>В каких судах</span> <br />
              <span style={{ display: 'inline-block' }}>представляем интересы</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Ведём дела в арбитражных судах Липецка, Воронежа, Калуги и Москвы лично и через онлайн-заседания.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '24px', marginBottom: '32px' }}>
            {courts.map((court, idx) => (
              <div
                key={idx}
                className="hover-lift"
                style={{
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  border: '1px solid var(--color-border)',
                  borderLeft: '4px solid var(--color-primary)',
                  padding: '28px 26px',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)'
                }}
              >
                <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
                  {court.instance}
                </span>
                <h3 style={{ fontSize: '18.5px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 8px 0', lineHeight: 1.35 }}>
                  {court.name}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', color: 'var(--color-text-secondary)', fontSize: '13.5px' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>{court.location}</span>
                </div>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  {court.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 9: СТОИМОСТЬ УСЛУГ АРБИТРАЖНОГО ЮРИСТА ═══ */}
      <PricingBlock
        title="Стоимость услуг арбитражного юриста"
        subtitle="Прозрачные условия и поэтапная оплата. Стоимость каждого процессуального этапа фиксируется в официальном договоре."
        tiers={pricingTiers}
        disclaimer="Государственная пошлина, стоимость судебных экспертиз, нотариальные и командировочные расходы не входят в стоимость услуг юриста и рассчитываются отдельно."
      />

      {/* ═══ БЛОК 10: ПРЕДУПРЕЖДЕНИЯ И РИСКИ ═══ */}
      <section className="section bg-light" id="risks" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '40px' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
              Процессуальные последствия
            </div>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', margin: '0 0 16px 0', lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Риски при отказе</span> <br />
              <span style={{ display: 'inline-block' }}>от профессиональной защиты</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Арбитражный процесс строго формализован: суд не собирает доказательства за стороны, а оценивает представленные материалы.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '32px' }}>
            <div style={{ background: '#FFFFFF', padding: '30px 26px', border: '1px solid var(--color-border)', borderTop: '3px solid #C53030' }}>
              <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', margin: '0 0 12px 0' }}>
                Потеря права на возражения
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Непредставление отзыва или незаявление ходатайства о ст. 333 ГК РФ лишает возможности снизить неустойку в вышестоящих инстанциях.
              </p>
            </div>
            <div style={{ background: '#FFFFFF', padding: '30px 26px', border: '1px solid var(--color-border)', borderTop: '3px solid #C53030' }}>
              <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', margin: '0 0 12px 0' }}>
                Преюдициальный факт
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Вступившее в силу решение суда установит обстоятельства, которые нельзя оспорить в последующих спорах или при банкротстве.
              </p>
            </div>
            <div style={{ background: '#FFFFFF', padding: '30px 26px', border: '1px solid var(--color-border)', borderTop: '3px solid #C53030' }}>
              <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', margin: '0 0 12px 0' }}>
                Субсидиарная ответственность
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Проигранный арбитражный процесс и возникший безнадёжный долг создают прямую угрозу личной ответственности директора и учредителей.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 11: КОМАНДА СУДЕБНОЙ ПРАКТИКИ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '40px 48px',
            boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)'
          }}>
            <div style={{ maxWidth: '800px' }}>
              <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Судебная практика ЮК «Де-Юре»
              </span>
              <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '12px 0 16px 0', lineHeight: 1.25 }}>
                Командное ведение арбитражных споров
              </h2>
              <p style={{ fontSize: '15.5px', color: 'var(--color-text-secondary)', lineHeight: 1.65, margin: '0 0 24px 0' }}>
                К ведению арбитражных дел подключаются профильные процессуалисты и отраслевые эксперты с учётом предмета спора: строительные юристы, специалисты по договорному праву, налоговые консультанты и эксперты по банкротству. Состав команды и распределение задач согласуются после первичного аудита материалов.
              </p>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <a href="#form" className="btn btn-primary" style={{ padding: '12px 28px', fontSize: '14.5px' }}>
                  Обсудить задачу с командой
                </a>
                <Link href="/specialisty/" className="btn btn-outline" style={{ padding: '12px 24px', fontSize: '14.5px' }}>
                  Все специалисты компании →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 12: ПРИМЕРЫ ДЕЛ ИЗ ПРАКТИКИ (КЕЙСЫ) ═══ */}
      <CasesBlock
        title="Примеры дел из практики"
        showAllLink="/praktika/"
        showAllText="Смотреть все дела"
        showDemoWarning={true}
        cases={cases}
      />

      {/* ═══ БЛОК 13: FAQ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы клиентов"
        title="Ответы на вопросы об арбитражных спорах"
        subtitle="Процессуальные сроки, документы, подсудность и порядок судебной защиты"
        faqs={faqs}
      />

      {/* ═══ БЛОК 14: ЛОКАЛЬНЫЙ ОФИС В ЛИПЕЦКЕ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '48px', alignItems: 'center' }}>
            <div>
              <div style={{
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--color-gold)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '12px'
              }}>
                Офис в Липецке
              </div>
              <h2 className="with-accent" style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.25 }}>
                <span style={{ display: 'inline-block' }}>Обсудить арбитражное</span> <br />
                <span style={{ display: 'inline-block' }}>дело в офисе</span>
              </h2>
              <p style={{ fontSize: '15.5px', color: 'var(--color-deep-blue)', opacity: 0.9, lineHeight: 1.6, marginBottom: '24px' }}>
                Можно встретиться лично в офисе ЮК «Де-Юре» в центре Липецка либо передать документы в электронном виде для дистанционного анализа.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)' }}>Адрес офиса:</strong>
                    <span style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)' }}>г. Липецк, ул. Советская, д. 35, оф. 213</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}>
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)' }}>Режим работы:</strong>
                    <span style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)' }}>Пн–Пт с 9:00 до 18:00 (по предварительной записи)</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)' }}>Прямой телефон:</strong>
                    <a href="tel:+79103503111" style={{ fontSize: '15px', color: 'var(--color-primary)', fontWeight: 700, textDecoration: 'none' }}>+7 (910) 350-31-11</a>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a href="#form" className="btn btn-primary" style={{ padding: '12px 28px' }}>
                  Записаться на встречу
                </a>
                <a href="tel:+79103503111" className="btn btn-outline" style={{ padding: '12px 24px' }}>
                  Позвонить
                </a>
              </div>
            </div>

            <div style={{
              background: 'var(--color-white)',
              border: '1px solid var(--color-border)',
              boxShadow: '0 8px 30px rgba(23, 50, 77, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              minHeight: '380px'
            }}>
              <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '320px', background: '#EAEFE9', overflow: 'hidden', flex: 1 }}>
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
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  padding: '14px 20px',
                  fontSize: '15px',
                  fontWeight: 600,
                  borderRadius: 0,
                  borderLeft: 'none',
                  borderRight: 'none',
                  borderBottom: 'none',
                  borderTop: '1px solid var(--color-border)',
                  textDecoration: 'none',
                  boxSizing: 'border-box'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                </svg>
                <span>Построить маршрут до офиса</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 15: ФИНАЛЬНАЯ ФОРМА СВЯЗИ ═══ */}
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

              <h2 style={{
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontFamily: 'var(--font-serif)',
                color: 'var(--color-deep-blue)',
                lineHeight: 1.25,
                marginBottom: '20px',
                marginTop: 0
              }}>
                <span style={{ display: 'inline-block' }}>Обсудите арбитражный спор</span> <br />
                <span style={{ display: 'inline-block' }}>с юристом</span>
              </h2>

              <p style={{
                fontSize: '16px',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.6,
                marginBottom: '32px'
              }}>
                Кратко опишите предмет спора, свою процессуальную роль и текущую стадию. Перезвоним вам в рабочее время и согласуем безопасный способ передачи материалов.
              </p>

              <div style={{
                background: 'linear-gradient(135deg, var(--color-deep-blue) 0%, #17324D 100%)',
                padding: '32px',
                color: '#FFFFFF',
                borderLeft: '4px solid var(--color-gold)',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                marginTop: 'auto'
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: '#FFFFFF', marginBottom: '4px' }}>
                      Конфиденциальность гарантирована
                    </strong>
                    <span style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.5 }}>
                      Не указывайте коммерческую тайну в форме. Документы передаются по защищённым каналам.
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: '#FFFFFF', marginBottom: '4px' }}>
                      Прямая связь с дежурным юристом
                    </strong>
                    <a href="tel:+79103503111" style={{ color: 'var(--color-gold)', textDecoration: 'none', fontWeight: 700, fontSize: '16px' }}>
                      +7 (910) 350-31-11
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div style={{
              background: '#FFFFFF',
              border: '1px solid var(--color-border)',
              boxShadow: '0 12px 40px rgba(23, 50, 77, 0.08)',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <ContactsForm
                hiddenFields={[{ name: 'service', value: 'arbitrazhnyj-yurist' }]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 16: SEO-ТЕКСТ И ПЕРЕЛИНКОВКА ═══ */}
      <section className="section bg-light" style={{ padding: '60px 0', borderTop: '1px solid var(--color-border)', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
            <h2 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              Представительство в арбитражном суде Липецкой области
            </h2>
            <p style={{ marginBottom: '16px' }}>
              Арбитражные споры требуют высокой процессуальной точности и безупречного соблюдения сроков, установленных Арбитражным процессуальным кодексом РФ. Юристы компании «Де-Юре» защищают интересы организаций и индивидуальных предпринимателей в Арбитражном суде Липецкой области, Девятнадцатом арбитражном апелляционном суде (Воронеж), Арбитражном суде Центрального округа (Калуга) и Верховном Суде РФ.
            </p>
            <p style={{ margin: 0 }}>
              Смежные направления практики для бизнеса: <Link href="/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>взыскание задолженности с юридических лиц</Link>, <Link href="/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>исполнительное производство для бизнеса</Link>, <Link href="/biznesu/trudovye-spory-s-rabotnikami/" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>трудовые споры с работниками</Link>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
