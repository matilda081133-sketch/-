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

export default function RazrabotkaEkspertizaClient() {
  const [activeContext, setActiveContext] = useState<string>('contract-review');

  const faqs = [
    {
      q: 'Что лучше: разработать новый договор или доработать шаблон?',
      a: 'Если шаблон соответствует типу сделки и реальному процессу компании, его можно доработать. Новый документ нужен, когда меняются роли сторон, предмет, расчёты, приёмка, набор приложений или схема отношений не укладывается в типовую конструкцию. Выбор делается после знакомства с задачей и материалами.'
    },
    {
      q: 'Что входит в правовую экспертизу договора?',
      a: 'Проверяем договор и согласованные приложения, сопоставляем условия с моделью сделки, оцениваем предмет, расчёты, сроки, приёмку, ответственность, изменение и прекращение, уведомления и порядок споров. Формат результата — комментарии, таблица рисков, правки или заключение — согласуется до начала работы.'
    },
    {
      q: 'Проверяете ли вы договор с позиции конкретной стороны?',
      a: 'Да. Один и тот же пункт по-разному влияет на поставщика и покупателя, заказчика и исполнителя, арендодателя и арендатора. При проверке учитываем роль компании, её фактические процессы и переговорные приоритеты, не подменяя коммерческие решения руководителя.'
    },
    {
      q: 'Можно ли проверить только самые рискованные разделы?',
      a: 'Да, если задача и границы проверки определены заранее. Например, можно сосредоточиться на приёмке, оплате, ответственности или одностороннем отказе. При этом юрист предупредит, если вывод по выбранному разделу зависит от других условий договора или приложений.'
    },
    {
      q: 'Подготовите ли вы протокол разногласий?',
      a: 'Да. Можно подготовить протокол разногласий, таблицу редакций либо договор с правками. Формат выбирается с учётом стадии согласования и принятого у сторон документооборота. Подписание документа контрагентом не гарантируется.'
    },
    {
      q: 'Можно ли подключить юриста к переговорам?',
      a: 'Да. Сначала определяем критичные и компромиссные условия, готовим формулировки и аргументы. Участие в переговорах включается в согласованный объём отдельно от базовой проверки, если это требуется.'
    },
    {
      q: 'Проверяете ли вы контрагента вместе с договором?',
      a: 'Базовая проверка полномочий и данных, которые влияют на заключение договора, может входить в задание. Расширенная проверка благонадёжности, судебной истории, лицензий, финансового положения и взаимосвязей согласуется отдельно: её объём зависит от сделки и доступных источников.'
    },
    {
      q: 'Сколько времени занимает разработка или проверка договора?',
      a: 'Срок зависит от объёма текста, количества приложений, специфики сделки и выбранного формата (только риски или подготовка новой редакции). Ориентировочный срок подтверждаем после просмотра материалов.'
    },
    {
      q: 'Можно ли получить консультацию и документы дистанционно?',
      a: 'Да. Обсуждение задачи проводим по телефону или видеосвязи, а документы передаём в электронном виде согласованным способом. Личное присутствие необходимо только для очных переговоров, если они согласованы.'
    },
    {
      q: 'От чего зависит стоимость услуг?',
      a: 'Стоимость зависит от объёма и сложности документов, количества приложений и участников, формата результата, необходимости переговоров и срока конкретного задания. Цену и состав работ согласуем до начала работы.'
    }
  ];

  const situations = [
    {
      tag: 'Новая сделка',
      title: 'Нет подходящего договора под новую модель работы',
      desc: 'Уточним роли сторон, последовательность действий, расчёты и подтверждающие документы; подготовим проект и необходимые приложения.',
      context: 'drafting',
      btnText: 'Обсудить разработку'
    },
    {
      tag: 'Проект контрагента',
      title: 'Вам прислали договор, и его нужно безопасно подписать',
      desc: 'Проверим условия на скрытые риски, несимметричные санкции, основания для одностороннего отказа и сложные правила приёмки.',
      context: 'counterparty_review',
      btnText: 'Передать на экспертизу'
    },
    {
      tag: 'Протокол разногласий',
      title: 'Нужно отклонить невыгодные условия и предложить свои',
      desc: 'Подготовим мотивированные формулировки, протокол разногласий или таблицу редакций, чтобы обосновать позицию перед контрагентом.',
      context: 'protocol',
      btnText: 'Подготовить протокол'
    },
    {
      tag: 'Сложные условия',
      title: 'Сделка нестандартная: смешанный договор, залог, поручительство',
      desc: 'Свяжем несколько обязательств в единую юридическую конструкцию, разграничим ответственность и порядок расчётов.',
      context: 'complex_deal',
      btnText: 'Разобрать сделку'
    },
    {
      tag: 'Переговоры',
      title: 'Контрагент настаивает на своей редакции, сделка под угрозой',
      desc: 'Поможем определить допустимые компромиссы, подготовить юридические аргументы и при согласовании подключимся к переговорам.',
      context: 'negotiation',
      btnText: 'Подключить к переговорам'
    },
    {
      tag: 'Допсоглашение',
      title: 'Нужно изменить объём, сроки, цену или расторгнуть договор',
      desc: 'Оценим последствия изменений, проверим основания прекращения обязательств и подготовим дополнительное соглашение или уведомление.',
      context: 'amendment',
      btnText: 'Согласовать изменения'
    },
    {
      tag: 'Рамочный договор',
      title: 'Регулярные поставки или заказы по спецификациям',
      desc: 'Выстроим прозрачную систему заявок, спецификаций и первичных актов под постоянный коммерческий оборот компании.',
      context: 'framework',
      btnText: 'Настроить систему'
    },
    {
      tag: 'Имущественные сделки',
      title: 'Аренда коммерческой недвижимости или лизинг',
      desc: 'Проверим распределение расходов на ремонт, неотделимые улучшения, индексацию ставки и порядок одностороннего отказа.',
      context: 'lease',
      btnText: 'Проверить аренду'
    }
  ];

  const formats = [
    {
      badge: 'Формат 01',
      title: 'Разработка договора с нуля',
      desc: 'Создаём договор под конкретную коммерческую модель, регламенты и документооборот компании. Включаем необходимые приложения и акты.',
      result: 'Готовый рабочий проект договора и комплект приложений.',
      context: 'drafting',
      cta: 'Обсудить разработку'
    },
    {
      badge: 'Формат 02',
      title: 'Правовая экспертиза проекта',
      desc: 'Проверяем проект контрагента и связанные документы, фиксируем замечания, объясняем последствия и приоритетность рисков.',
      result: 'Таблица рисков, экспертное заключение или комментарии.',
      context: 'review',
      cta: 'Передать на проверку'
    },
    {
      badge: 'Формат 03',
      title: 'Экспертиза с подготовкой правок',
      desc: 'Не только указываем проблему, но и предлагаем рабочую редакцию спорных пунктов либо протокол разногласий к договору.',
      result: 'Протокол разногласий или договор в режиме рецензирования.',
      context: 'redline',
      cta: 'Обсудить правки'
    },
    {
      badge: 'Формат 04',
      title: 'Согласование и переговоры',
      desc: 'Готовим переговорную позицию, обоснования для контрагента и при необходимости участвуем в согласовании условий.',
      result: 'Согласованная редакция и защита коммерческих интересов.',
      context: 'negotiation',
      cta: 'Подключить к переговорам'
    }
  ];

  const reviewScope = [
    {
      title: 'Предмет и модель сделки',
      desc: 'Чёткая фиксация обязанностей сторон, этапов и измеримого результата. Исключаем риск признания договора незаключённым.'
    },
    {
      title: 'Цена и порядок расчётов',
      desc: 'Формула цены, условия авансирования, этапы платежей, привязка к первичным документам и защита от необоснованных удержаний.'
    },
    {
      title: 'Сроки исполнения и заявки',
      desc: 'График исполнения, регламент подачи заявок, основания продления и предотвращение споров о моменте нарушения обязательств.'
    },
    {
      title: 'Приёмка и документооборот',
      desc: 'Порядок подписания актов и УПД, правила электронного документооборота (ЭДО), регламент проверки без скрытых ловушек молчаливой приёмки.'
    },
    {
      title: 'Качество и гарантийные обязательства',
      desc: 'Требования к товарам и работам, гарантийный период, порядок фиксации дефектов, сроки устранения и защита от необоснованных претензий.'
    },
    {
      title: 'Ответственность и штрафные санкции',
      desc: 'Соразмерность неустоек и штрафов, ограничение ответственности, заверения об обстоятельствах и возмещение потерь без односторонних перекосов.'
    },
    {
      title: 'Изменение и расторжение',
      desc: 'Основания для одностороннего отказа от исполнения, порядок направления уведомлений, возврат предоплаты и безопасный выход из сделки.'
    },
    {
      title: 'Подсудность и претензионный порядок',
      desc: 'Сроки рассмотрения претензий, электронные юридически значимые адреса, выбор удобного суда и исключение выездных споров.'
    }
  ];

  const contractCategories = [
    {
      num: '01',
      title: (
        <>
          <span style={{ display: 'block' }}>Торговля</span>
          <span style={{ display: 'block' }}>и поставка</span>
        </>
      ),
      items: 'Договоры поставки товаров и оборудования, дистрибуция, оптовая купля-продажа, коммерческая концессия и агентские договоры.'
    },
    {
      num: '02',
      title: (
        <>
          <span style={{ display: 'block' }}>Услуги</span>
          <span style={{ display: 'block' }}>и подряд</span>
        </>
      ),
      items: 'Возмездное оказание услуг, проектные и монтажные работы, IT-разработка и лицензии, логистика и транспортная экспедиция.'
    },
    {
      num: '03',
      title: (
        <>
          <span style={{ display: 'block' }}>Имущественные</span>
          <span style={{ display: 'block' }}>сделки</span>
        </>
      ),
      items: 'Аренда коммерческих помещений, складов и земельных участков, лизинг спецтехники, оборудования и автотранспорта.'
    },
    {
      num: '04',
      title: (
        <>
          <span style={{ display: 'block' }}>Обеспечение</span>
          <span style={{ display: 'block' }}>и финансы</span>
        </>
      ),
      items: 'Договоры займа, поручительства, залога, уступки прав требования (цессия), перевод долга и соглашения о новации.'
    }
  ];

  const prepDocs = [
    {
      title: 'Проект договора или шаблон',
      desc: 'Текст контрагента либо типовой шаблон, используемый в компании на текущий момент.'
    },
    {
      title: 'Приложения и спецификации',
      desc: 'Коммерческое предложение, техническое задание, графики платежей и поставок.'
    },
    {
      title: 'Описание реального процесса',
      desc: 'Кто, что, когда делает и какими первичными документами подтверждается закрытие обязательств.'
    },
    {
      title: 'Переписка по разногласиям',
      desc: 'Замечания контрагента, спорные формулировки и контрольная дата подписания документа.'
    }
  ];

  const workSteps = [
    {
      num: '01',
      title: 'Уточняем сделку и приоритеты',
      desc: 'Вы описываете бизнес-задачу, стороны, порядок исполнения и условия, которые для компании критичны.'
    },
    {
      num: '02',
      title: 'Проверяем комплект материалов',
      desc: 'Изучаем договор, приложения и исходные данные; определяем недостающие документы и вопросы.'
    },
    {
      num: '03',
      title: 'Согласуем объём и результат',
      desc: 'Фиксируем формат: проект, комментарии, таблица рисков, правки, протокол разногласий или переговоры; определяем стоимость и срок.'
    },
    {
      num: '04',
      title: 'Разрабатываем или проверяем',
      desc: 'Сопоставляем юридические условия с фактической схемой сделки и готовим согласованный результат.'
    },
    {
      num: '05',
      title: 'Обсуждаем выводы и доработки',
      desc: 'Объясняем критичные пункты, отвечаем на вопросы и в пределах согласованного объёма корректируем редакцию.'
    }
  ];

  const deliverables = [
    {
      title: 'Таблица выявленных рисков',
      desc: 'Детальный перечень уязвимых пунктов договора с разделением на критичные, коммерческие и процедурные риски.'
    },
    {
      title: 'Безопасная редакция документа',
      desc: 'Готовый проект договора или встречная редакция с правками в режиме рецензирования под реальные процессы компании.'
    },
    {
      title: 'Протокол разногласий',
      desc: 'Мотивированный юридический документ с обоснованием исключения невыгодных пунктов для направления контрагенту.'
    },
    {
      title: 'Рекомендации по исполнению',
      desc: 'Памятка для бухгалтерии и менеджеров по контролю этапов, сроков и правильному закрытию сделки первичными документами.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Консультация по условиям договора',
      price: 'ХХХ ₽',
      subtitle: 'Разбор проекта, обстоятельств сделки, рисков и рекомендаций по согласованию.',
      buttonText: 'Записаться на консультацию',
      buttonHref: '#form',
      features: [
        { name: 'Анализ ключевых условий сделки', value: '✓' },
        { name: 'Разбор рисков предмета, цены и расчётов', value: '✓' },
        { name: 'Оценка условий приёмки и ответственности', value: '✓' },
        { name: 'Рекомендации по тактике согласования', value: '✓' }
      ],
      popular: false
    },
    {
      title: 'Правовая экспертиза с правками',
      price: 'от ХХХ ₽',
      subtitle: 'Анализ проекта контрагента с таблицей рисков и подготовкой протокола разногласий.',
      buttonText: 'Заказать экспертизу договора',
      buttonHref: '#form',
      popular: true,
      badgeText: 'ВОСТРЕБОВАНО',
      features: [
        { name: 'Построчный правовой анализ текста и приложений', value: '✓' },
        { name: 'Таблица критичных и коммерческих рисков', value: '✓' },
        { name: 'Подготовка протокола разногласий или редакции', value: '✓' },
        { name: 'Аргументы для согласования с контрагентом', value: '✓' }
      ]
    },
    {
      title: 'Разработка договора под ключ',
      price: 'от ХХХ ₽',
      subtitle: 'Создание индивидуального договора под вашу бизнес-модель и документооборот.',
      buttonText: 'Заказать разработку договора',
      buttonHref: '#form',
      popular: false,
      features: [
        { name: 'Разработка структуры под специфику сделки', value: '✓' },
        { name: 'Защита от неисполнения и задержки оплаты', value: '✓' },
        { name: 'Комплект приложений: спецификации, формы актов', value: '✓' },
        { name: 'Доработка редакции по итогам обратной связи', value: '✓' }
      ]
    }
  ];

  const cases: CaseData[] = [
    {
      title: 'Исключили несимметричные штрафы и изменили условия приёмки',
      category: 'Экспертиза договора',
      problem: 'Покупатель предложил поставщику подписать договор с короткими сроками приёмки, правом удержания оплаты до года и несоразмерными штрафами за незначительную задержку отгрузки.',
      action: 'Провели правовую экспертизу проекта, подготовили протокол разногласий, сформулировали аргументы для переговоров и переписали разделы о приёмке, ответственности и порядке расчётов.',
      result: 'Стороны согласовали рабочую редакцию договора, в которой порядок поставки и подтверждающие документы соответствовали реальному процессу компании, а спорные риски были распределены понятнее.',
      isDemo: false
    },
    {
      title: 'Разработали договор оказания услуг со сложной формулой цены',
      category: 'Разработка договора',
      problem: 'Компания запускала B2B-сервис с плавающей стоимостью, зависящей от объёма обработанных заявок и KPI. Типовой договор из интернета не связывал отчёты с оплатой и создавал налоговые риски.',
      action: 'Уточнили модель расчётов, описали процедуру согласования ежемесячных отчётов, порядок фиксации объёма услуг и безопасный механизм мотивированного отказа от приёмки.',
      result: 'Подготовлен прозрачный договор с комплектом приложений, исключивший разногласия по расчётам и защитивший компанию при камеральной налоговой проверке.',
      isDemo: false
    },
    {
      title: 'Согласовали протокол разногласий к договору аренды склада',
      category: 'Протокол разногласий',
      problem: 'Арендодатель требовал право одностороннего увеличения ставки на 20% ежегодно, обеспечительный платёж в тройном размере и возложение капитального ремонта на арендатора.',
      action: 'Подготовили протокол разногласий, привязали индексацию к официальному уровню инфляции с предельным потолком 7%, разграничили текущий и капитальный ремонт и зафиксировали порядок возврата депозита.',
      result: 'Арендодатель подписал договор в редакции протокола разногласий без срыва сроков заезда арендатора на складской комплекс.',
      isDemo: false
    }
  ];

  const relatedServices = [
    {
      title: 'Аудит договорной работы компании',
      desc: 'Комплексная проверка всех применяемых типовых форм, маршрутов согласования и регламентов контроля обязательств.',
      link: '/biznesu/dogovornoe-pravo/audit-dogovornoj-raboty/'
    },
    {
      title: 'Договорные споры для бизнеса',
      desc: 'Досудебное претензионное урегулирование и ведение арбитражных дел при нарушении условий договора контрагентом.',
      link: '/biznesu/dogovornoe-pravo/dogovornye-spory/'
    },
    {
      title: 'Споры по договору поставки',
      desc: 'Узкопрофильная защита поставщиков и покупателей: проверка УПД, ТОРГ-12, транспортных накладных и взыскание долгов.',
      link: '/biznesu/dogovornoe-pravo/spory-po-dogovoru-postavki/'
    },
    {
      title: 'Взыскание задолженности с юрлиц',
      desc: 'Возврат долгов по договорам поставки, подряда и услуг через досудебный порядок, арбитражный суд и приставов.',
      link: '/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/'
    }
  ];

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
        '@id': 'https://dejure-help.ru/biznesu/dogovornoe-pravo/razrabotka-i-ekspertiza-dogovorov/#service',
        name: 'Разработка и экспертиза договоров для бизнеса в Липецке',
        serviceType: 'Разработка и правовая экспертиза договоров',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        url: 'https://dejure-help.ru/biznesu/dogovornoe-pravo/razrabotka-i-ekspertiza-dogovorov/',
        description: 'Разработка и правовая экспертиза договоров для бизнеса в Липецке. Проверим проект контрагента, выявим скрытые риски, подготовим протокол разногласий или индивидуальный договор под ключ.'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/biznesu/dogovornoe-pravo/razrabotka-i-ekspertiza-dogovorov/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Главная',
            item: 'https://dejure-help.ru/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Бизнесу',
            item: 'https://dejure-help.ru/biznesu/'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Договорное право',
            item: 'https://dejure-help.ru/biznesu/dogovornoe-pravo/'
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Разработка и экспертиза договоров',
            item: 'https://dejure-help.ru/biznesu/dogovornoe-pravo/razrabotka-i-ekspertiza-dogovorov/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/biznesu/dogovornoe-pravo/razrabotka-i-ekspertiza-dogovorov/#faq',
        mainEntity: faqs.map(faq => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a
          }
        }))
      }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />
      <Header />

      {/* ═══ 1. ПЕРВЫЙ ЭКРАН ═══ */}
      <MilitaryHero
        breadcrumbs={
          <>
            <Link href="/" style={{ color: 'var(--color-primary)' }}>Главная</Link> <span style={{ margin: '0 8px' }}>/</span>
            <Link href="/biznesu/" style={{ color: 'var(--color-primary)' }}>Бизнесу</Link> <span style={{ margin: '0 8px' }}>/</span>
            <Link href="/biznesu/dogovornoe-pravo/" style={{ color: 'var(--color-primary)' }}>Договорное право</Link> <span style={{ margin: '0 8px' }}>/</span>
            <span style={{ color: 'var(--color-text-muted)' }}>Разработка и экспертиза</span>
          </>
        }
        superTitle="Договорное право • B2B • Липецк"
        title="Разработка и экспертиза договоров для бизнеса"
        subtitle="Подготовим договор под конкретную сделку или проверим проект контрагента: выявим риски, предложим формулировки и защитим позицию компании."
        trustItems={[
          { text: 'Анализируем условия под процессы и риски компании' },
          { text: 'Выделяем критичные, спорные и переговорные пункты' },
          { text: 'Готовим договор, правки или протокол разногласий' }
        ]}
        primaryCtaText="Обсудить договор"
        primaryCtaLink="#form"
        primaryCtaSubtext="Перезвоним в течение 15 минут в рабочее время"
        secondaryCtaText="Форматы помощи"
        secondaryCtaLink="#formats"
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

            <div className="mockup-container" style={{ zIndex: 1, margin: 0 }}>
              <div style={{ position: 'absolute', width: '220px', height: '220px', background: 'var(--color-primary)', filter: 'blur(90px)', opacity: 0.12, borderRadius: '50%' }} />

              <div className="doc-wrapper-float-1">
                <div className="doc-sheet doc-sheet-1">
                  <div style={{ padding: '24px 20px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(23,50,77,0.2)', paddingBottom: '8px', marginBottom: '12px' }}>
                      <img src="/images/logo_dark.png" alt="Де-Юре" style={{ width: '50px', height: 'auto', opacity: 0.9 }} />
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', alignItems: 'flex-end' }}>
                        <span style={{ fontSize: '6.5px', fontWeight: 'bold', color: 'var(--color-deep-blue)' }}>ЭКСПЕРТИЗА И РАЗРАБОТКА</span>
                        <span style={{ fontSize: '5px', color: 'var(--color-primary)' }}>Правовой анализ сделки</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(247, 244, 237, 0.8)', padding: '5px 8px', borderLeft: '3px solid #C1A066' }}>
                        <span style={{ fontSize: '6px', fontWeight: 'bold', color: '#C1A066' }}>01</span>
                        <span style={{ fontSize: '5.5px', fontWeight: 'bold', color: 'var(--color-deep-blue)' }}>МОДЕЛЬ СДЕЛКИ И ПРЕДМЕТ</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(247, 244, 237, 0.8)', padding: '5px 8px', borderLeft: '3px solid #C1A066' }}>
                        <span style={{ fontSize: '6px', fontWeight: 'bold', color: '#C1A066' }}>02</span>
                        <span style={{ fontSize: '5.5px', fontWeight: 'bold', color: 'var(--color-deep-blue)' }}>ПОРЯДОК ОПЛАТЫ И РАСЧЁТЫ</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(247, 244, 237, 0.8)', padding: '5px 8px', borderLeft: '3px solid #C1A066' }}>
                        <span style={{ fontSize: '6px', fontWeight: 'bold', color: '#C1A066' }}>03</span>
                        <span style={{ fontSize: '5.5px', fontWeight: 'bold', color: 'var(--color-deep-blue)' }}>ПРИЁМКА И ДОКУМЕНТООБОРОТ</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(247, 244, 237, 0.8)', padding: '5px 8px', borderLeft: '3px solid #C1A066' }}>
                        <span style={{ fontSize: '6px', fontWeight: 'bold', color: '#C1A066' }}>04</span>
                        <span style={{ fontSize: '5.5px', fontWeight: 'bold', color: 'var(--color-deep-blue)' }}>ОТВЕТСТВЕННОСТЬ И РИСКИ</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(247, 244, 237, 0.8)', padding: '5px 8px', borderLeft: '3px solid #C1A066' }}>
                        <span style={{ fontSize: '6px', fontWeight: 'bold', color: '#C1A066' }}>05</span>
                        <span style={{ fontSize: '5.5px', fontWeight: 'bold', color: 'var(--color-deep-blue)' }}>ПРОТОКОЛ РАЗНОГЛАСИЙ</span>
                      </div>
                    </div>

                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '6px', borderTop: '1px solid rgba(23,50,77,0.15)' }}>
                      <span style={{ fontSize: '5px', color: 'var(--color-text-muted)' }}>ЮК «ДЕ-ЮРЕ» • B2B ДОГОВОРЫ</span>
                      <span style={{ fontSize: '5px', color: 'var(--color-gold)', fontWeight: 'bold' }}>БЕЗОПАСНОСТЬ СДЕЛКИ ✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      />

      {/* ═══ 1.1. СТРОКА ДОВЕРИЯ ═══ */}
      <section style={{ backgroundColor: 'var(--color-bg-light)', borderBottom: '1px solid var(--color-border)', padding: '24px 0' }}>
        <div className="container">
          <div className="grid grid-3" style={{ gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                <polyline points="9 11 12 14 22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
              <div style={{ fontSize: '15px', color: 'var(--color-deep-blue)', fontWeight: 500, lineHeight: 1.5 }}>
                Проверяем договор на соответствие реальным бизнес-процессам компании.
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                <polyline points="9 11 12 14 22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
              <div style={{ fontSize: '15px', color: 'var(--color-deep-blue)', fontWeight: 500, lineHeight: 1.5 }}>
                Предлагаем конкретные формулировки и протоколы разногласий.
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                <polyline points="9 11 12 14 22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
              <div style={{ fontSize: '15px', color: 'var(--color-deep-blue)', fontWeight: 500, lineHeight: 1.5 }}>
                Сроки, формат результата и стоимость фиксируем до начала работы.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. КОГДА НУЖНА РАЗРАБОТКА ИЛИ ПРОВЕРКА ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Когда нужна разработка <br />или проверка договора
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Помогаем на любом этапе заключения сделки: когда договора ещё нет, когда контрагент прислал невыгодный проект или когда зашли в тупик переговоры.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {situations.map((sit, idx) => (
              <div
                key={idx}
                className="card hover-lift"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  borderRadius: '0',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '-15px',
                  width: '90px',
                  height: '90px',
                  opacity: 0.04,
                  pointerEvents: 'none',
                  color: 'var(--color-deep-blue)'
                }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>

                <div>
                  <div style={{
                    fontSize: '11.5px',
                    fontWeight: 700,
                    color: 'var(--color-primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: '12px',
                    background: 'rgba(23, 50, 77, 0.06)',
                    padding: '3px 8px',
                    display: 'inline-block',
                    borderRadius: '2px'
                  }}>
                    {sit.tag}
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '18px',
                    fontWeight: 600,
                    color: 'var(--color-deep-blue)',
                    margin: '0 0 12px 0',
                    lineHeight: 1.35
                  }}>
                    {sit.title}
                  </h3>

                  <p style={{
                    fontSize: '14px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    {sit.desc}
                  </p>
                </div>

                <a
                  href="#form"
                  onClick={() => setActiveContext(sit.context)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--color-primary)',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    marginTop: '20px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-primary)')}
                >
                  <span>{sit.btnText}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            ))}

            {/* Карточка 9: Индивидуальная разработка */}
            <div
              className="card hover-lift"
              style={{
                background: 'linear-gradient(135deg, rgba(23, 50, 77, 0.98) 0%, rgba(16, 39, 59, 0.98) 100%)',
                color: '#fff',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-gold)',
                borderRadius: '0',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div>
                <div style={{
                  fontSize: '11.5px',
                  fontWeight: 700,
                  color: 'var(--color-gold)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '12px',
                  background: 'rgba(193, 160, 102, 0.15)',
                  padding: '3px 8px',
                  display: 'inline-block',
                  borderRadius: '2px'
                }}>
                  Индивидуальная сделка
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#ffffff',
                  margin: '0 0 12px 0',
                  lineHeight: 1.35
                }}>
                  Нестандартная сделка или холдинг?
                </h3>

                <p style={{
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  Свяжем несколько договоров в единый структурированный контракт с разграничением рисков и обеспечением исполнения.
                </p>
              </div>

              <a
                href="#form"
                onClick={() => setActiveContext('custom-deal')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--color-gold)',
                  fontSize: '13.5px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  marginTop: '20px',
                  cursor: 'pointer'
                }}
              >
                <span>Обсудить задачу →</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. ЧТО ПРОВЕРЯЕМ В ДОГОВОРЕ — НАПРАВЛЕНИЯ ЭКСПЕРТИЗЫ ═══ */}
      <section className="section bg-light" id="review-scope" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Комплексный правовой аудит
            </div>
            <h2 className="with-accent" style={{ 
              fontSize: 'clamp(28px, 4vw, 42px)', 
              fontFamily: 'var(--font-serif)', 
              color: 'var(--color-primary)', 
              marginBottom: '16px', 
              marginTop: 0, 
              lineHeight: 1.2,
              textAlign: 'left'
            }}>
              <span style={{ display: 'inline-block' }}>Что проверяем в договоре:</span> <br />
              <span style={{ display: 'inline-block' }}>8 направлений анализа</span>
            </h2>
            <p style={{ 
              fontSize: '16px', 
              color: 'var(--color-deep-blue)', 
              opacity: 0.9, 
              fontWeight: 500, 
              margin: 0, 
              lineHeight: 1.6, 
              textAlign: 'left',
              textWrap: 'balance' 
            }}>
              Правовая оценка текста и приложений, чтобы исключить судебные уязвимости, потерю активов и неконтролируемые санкции.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '20px', position: 'relative' }}>
            {reviewScope.map((item, idx) => (
              <div
                key={idx}
                className="hover-lift"
                style={{
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  padding: '36px 30px 32px 30px',
                  border: '1px solid var(--color-border)',
                  borderTop: '4px solid var(--color-gold)',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
              >
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
                <h3 style={{ 
                  fontSize: '18px', 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--color-deep-blue)', 
                  margin: '8px 0 14px 0', 
                  lineHeight: 1.35 
                }}>
                  {item.title}
                </h3>
                <p style={{ 
                  fontSize: '14.5px', 
                  color: 'var(--color-text-secondary)', 
                  lineHeight: 1.6, 
                  margin: 0 
                }}>
                  {item.desc}
                </p>
              </div>
            ))}

            {/* Карточка 9: Завершающая CTA карточка аудита */}
            <div 
              className="hover-lift"
              style={{
                background: 'linear-gradient(145deg, #10273B 0%, #17324D 100%)',
                padding: '36px 30px 32px 30px',
                border: '1px solid rgba(193, 160, 102, 0.35)',
                borderTop: '4px solid var(--color-gold)',
                boxShadow: '0 8px 30px rgba(16, 39, 59, 0.18)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.1, pointerEvents: 'none' }}>
                <svg width="110" height="110" viewBox="0 0 24 24" fill="#C1A066">
                  <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>

              <div>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  margin: '8px 0 14px 0',
                  lineHeight: 1.35
                }}>
                  Нужна проверка договора перед подписанием?
                </h3>

                <p style={{
                  fontSize: '14.5px',
                  color: '#CBD5E1',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  Предоставим письменное заключение с выявленными рисками, протоколом разногласий и рекомендациями по тексту.
                </p>
              </div>

              <div style={{ marginTop: '24px', position: 'relative', zIndex: 1 }}>
                <a
                  href="#form"
                  className="btn btn-gold"
                  style={{
                    display: 'inline-block',
                    textAlign: 'center',
                    padding: '12px 20px',
                    fontSize: '14px',
                    fontWeight: 700,
                    backgroundColor: 'var(--color-gold)',
                    color: 'var(--color-deep-blue)',
                    borderRadius: '0',
                    textDecoration: 'none',
                    width: '100%',
                    boxShadow: '0 4px 12px rgba(193, 160, 102, 0.25)',
                    transition: 'all 0.2s ease'
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('form');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else window.location.hash = 'form';
                  }}
                >
                  Заказать экспертизу договора
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 4. КАКОЙ ФОРМАТ ПОМОЩИ НУЖЕН (ШАБЛОН СЦЕНАРИЕВ / ВЫБОР ПОРЯДКА) ═══ */}
      <section id="formats" className="section bg-white" style={{ padding: '80px 0' }}>
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
              Выбор формата работы
            </div>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Какой формат помощи</span> <br />
              <span style={{ display: 'inline-block' }}>нужен бизнесу</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Выберите необходимый объём юридического участия: от разовой оценки рисков до полной разработки индивидуального комплекта документов.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px' }}>
            {formats.map((fmt, idx) => (
              <div
                key={idx}
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
                {/* Фирменный водяной знак */}
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
                    {fmt.badge}
                  </div>
                  <h3 style={{
                    fontSize: '18px',
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--color-deep-blue)',
                    margin: '0 0 12px 0',
                    lineHeight: 1.35,
                    fontWeight: 600,
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {fmt.title}
                  </h3>
                  <p style={{
                    fontSize: '14.5px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    margin: '0 0 24px 0',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {fmt.desc}
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
                      Результат
                    </strong>
                  </div>
                  <span style={{ fontSize: '13.5px', color: 'var(--color-deep-blue)', lineHeight: 1.45, fontWeight: 500, display: 'block' }}>
                    {fmt.result}
                  </span>
                </div>

                <div style={{ marginTop: '20px', position: 'relative', zIndex: 1 }}>
                  <a
                    href="#form"
                    onClick={() => setActiveContext(fmt.context)}
                    className="btn btn-primary"
                    style={{ textAlign: 'center', width: '100%', padding: '12px 20px', fontSize: '14px', display: 'block' }}
                  >
                    {fmt.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 5. С КАКИМИ ДОГОВОРАМИ РАБОТАЕМ (ПО ШАБЛОНУ КАРТОЧКИ-НАВИГАТОРА) ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          {/* Темно-синяя карточка-навигатор */}
          <div style={{
            background: 'linear-gradient(135deg, #10273B 0%, #17375E 50%, #0D1E2D 100%)',
            border: '1px solid rgba(193, 160, 102, 0.4)',
            borderTop: '3px solid var(--color-gold)',
            boxShadow: '0 8px 30px rgba(16, 39, 59, 0.18)',
            padding: '36px 32px',
            marginBottom: '24px',
            position: 'relative'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '24px', position: 'relative', zIndex: 1 }}>
              <div>
                <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 24px)', fontFamily: 'var(--font-serif)', color: '#FFFFFF', margin: 0, lineHeight: 1.25 }}>
                  С какими договорами работаем
                </h2>
              </div>
              <div style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', maxWidth: '520px', lineHeight: 1.5 }}>
                <span style={{ display: 'block' }}>Разрабатываем и проверяем типовые, нестандартные</span>
                <span style={{ display: 'block' }}>и смешанные договоры для коммерческих компаний.</span>
              </div>
            </div>

            <div className="grid grid-4" style={{ gap: '16px', position: 'relative', zIndex: 1 }}>
              {contractCategories.map((cat, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '22px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                  }}
                >
                  <h3 style={{ fontSize: '16.5px', color: '#FFFFFF', margin: 0, fontWeight: 600, lineHeight: 1.35, display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                    <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', flexShrink: 0 }}>
                      {cat.num}
                    </span>
                    <span>{cat.title}</span>
                  </h3>
                  <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5, margin: 0 }}>
                    {cat.items}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="card"
            style={{
              background: 'var(--color-white)',
              border: '1px solid var(--color-border)',
              borderLeft: '4px solid var(--color-gold)',
              padding: '20px 24px',
              borderRadius: '0',
              display: 'flex',
              alignItems: 'center',
              gap: '14px'
            }}
          >
            <div style={{ color: 'var(--color-gold)', fontSize: '20px', lineHeight: 1, flexShrink: 0 }}>ℹ️</div>
            <div style={{ fontSize: '14px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              Строительный подряд относится к отраслевому направлению{' '}
              <Link
                href="/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/"
                style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'underline' }}
              >
                юриста по недвижимости и строительству для бизнеса
              </Link>.
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 6. ЧТО ПОТРЕБУЕТСЯ ДЛЯ НАЧАЛА РАБОТЫ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Что потребуется для начала работы
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Для первого звонка достаточно кратко описать задачу. Для проведения экспертизы или разработки понадобятся материалы:
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '20px', marginBottom: '32px' }}>
            {prepDocs.map((item, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  padding: '22px 24px',
                  borderRadius: '0',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px'
                }}
              >
                <div style={{ color: 'var(--color-primary)', marginTop: '2px', flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: '15.5px', fontWeight: 700, color: 'var(--color-deep-blue)', margin: '0 0 6px 0' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.55 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="card"
            style={{
              background: 'var(--color-bg-light)',
              border: '1px solid var(--color-border)',
              borderLeft: '4px solid var(--color-gold)',
              padding: '24px 28px',
              borderRadius: '0',
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}
          >
            <div style={{ color: 'var(--color-gold)', fontSize: '24px', lineHeight: 1, flexShrink: 0 }}>ℹ️</div>
            <div style={{ fontSize: '14px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <strong>Конфиденциальность:</strong> Передаваемые проекты документов и коммерческие условия охраняются соглашением о неразглашении (NDA). Мы не передаём информацию третьим лицам.
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 7. КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock
        title="Как проходит работа по договору"
        subtitle="Пять последовательных этапов для подготовки безопасного и исполнимого договора."
        steps={workSteps}
      />

      {/* ═══ 8. РЕЗУЛЬТАТ РАБОТЫ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Результат работы
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Формат результата согласуется до начала работы и даёт руководителю чёткую картину рисков и готовые решения.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '20px' }}>
            {deliverables.map((item, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  background: 'var(--color-bg-light)',
                  border: '1px solid var(--color-border)',
                  borderLeft: '4px solid var(--color-gold)',
                  padding: '22px 24px',
                  borderRadius: '0',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px'
                }}
              >
                <div style={{ color: 'var(--color-gold)', marginTop: '2px', flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: '16px', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--color-deep-blue)', margin: '0 0 6px 0' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.55 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 9. СТОИМОСТЬ УСЛУГ ═══ */}
      <PricingBlock
        title="Стоимость разработки и экспертизы договоров"
        subtitle="Стоимость зависит от объёма и сложности документов, количества приложений и участников, формата результата, необходимости переговоров и срока конкретного задания. Цену и состав работ согласуем до начала работы."
        tiers={pricingTiers}
        ctaTitle="Точную стоимость определим до начала работы"
        ctaSubtitle="Сначала изучим проект или задачу, предложим подходящий формат помощи и согласуем стоимость. Она не изменится без согласования с вами."
        ctaButtonText="Получить расчёт стоимости"
        ctaButtonLink="#form"
      />

      {/* ═══ 10. ПРИМЕРЫ ИЗ ПРАКТИКИ ═══ */}
      <CasesBlock
        title="Примеры из практики"
        cases={cases}
        showDemoWarning={false}
        resultLabel="Ключевой результат"
      />

      {/* ═══ 11. СВЯЗАННЫЕ УСЛУГИ ═══ */}
      <section className="section" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Связанные услуги
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Если задача не ограничивается одним договором, подключим смежные направления договорного права для бизнеса.
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '24px' }}>
            {relatedServices.map((rel, idx) => (
              <Link
                key={idx}
                href={rel.link}
                className="card hover-lift"
                style={{
                  height: '100%',
                  padding: '28px 24px',
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  borderRadius: '0',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  textDecoration: 'none'
                }}
              >
                <div>
                  <h3 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--color-deep-blue)', marginBottom: '12px', lineHeight: 1.35 }}>
                    {rel.title}
                  </h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    {rel.desc}
                  </p>
                </div>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '13.5px', fontWeight: 600, marginTop: '20px', paddingTop: '12px', borderTop: '1px solid rgba(23, 50, 77, 0.06)' }}>
                  <span>Подробнее</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 12. FAQ ═══ */}
      <FAQBlock
        faqs={faqs}
        title={<>Ответы на<br />частые вопросы</>}
        subtitle="Собрали ответы на частые вопросы по разработке, правовой экспертизе, согласованию и протоколам разногласий."
        ctaText="Задать свой вопрос"
        ctaLink="#form"
      />

      {/* ═══ 13. ФИНАЛЬНАЯ ФОРМА ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start', paddingTop: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }} />
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  Связаться с нами
                </span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                Получите первичную оценку <br />проекта договора
              </h2>

              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Опишите условия сделки, приложите проект или задайте вопрос юристу. Проверим риски, определим необходимый формат помощи и свяжемся с вами в рабочее время.
              </p>

              <div style={{ marginTop: '32px' }}>
                <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>Прямой телефон: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>+7 (4742) 20-15-25</a></span>
                </div>
                <div style={{ marginTop: '12px', fontSize: '14px', color: 'var(--color-text-secondary)', paddingLeft: '36px' }}>
                  Пн–Пт: 9:00 – 18:00 • ул. Советская, д. 35, оф. 213
                </div>
                <div style={{ marginTop: '8px', fontSize: '13.5px', color: 'var(--color-gold-text)', paddingLeft: '36px', fontWeight: 500 }}>
                  Перезвоним в течение 15 минут в рабочее время
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
              <div style={{ background: 'var(--gradient-cream)', padding: '40px', borderRadius: '0', boxShadow: '0 8px 24px rgba(0,0,0,0.15)', width: '100%', border: '1px solid rgba(0,0,0,0.06)' }}>
                <ContactsForm
                  title="Написать нам"
                  subtitle=""
                  buttonText="Оставить заявку"
                  commentPlaceholder="Кратко опишите сделку или приложите текст договора…"
                  subtext="Если вы оставите заявку вечером или в выходной день, мы перезвоним в ближайший рабочий день."
                  hiddenFields={[
                    { name: 'pageId', value: 'B2B-04-01' },
                    { name: 'pageTitle', value: 'Разработка и правовая экспертиза договоров' },
                    { name: 'practice', value: 'Договорное право' },
                    { name: 'context', value: activeContext }
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
