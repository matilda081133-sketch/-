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

export default function DogovornoePravoClient() {
  const [activeContext, setActiveContext] = useState<string>('contract-hub');

  const faqs = [
    {
      q: 'С какими договорами работает договорный юрист?',
      a: 'Юрист может помочь с договорами поставки, услуг, подряда, аренды, купли-продажи, перевозки, хранения, займа, агентирования, комиссии, лизинга, уступки и другими коммерческими соглашениями. Состав работы определяется сделкой и рисками, а не только названием документа. Строительный подряд относится к отдельному направлению недвижимости и строительства для бизнеса.'
    },
    {
      q: 'Чем разработка договора отличается от правовой экспертизы?',
      a: 'При разработке договор создаётся под конкретную модель сделки и процессы компании. При экспертизе юрист проверяет уже подготовленный проект, выделяет риски и предлагает правки. В обоих случаях сначала нужно понять предмет, расчёты, порядок исполнения и приоритеты компании.'
    },
    {
      q: 'Можно ли проверить договор контрагента перед подписанием?',
      a: 'Да. Можно поручить полную экспертизу либо сосредоточиться на критичных разделах: предмет, цена и расчёты, приёмка, ответственность, односторонний отказ, подсудность, конфиденциальность и другие условия. Если документ нужно подписать к определённой дате, сообщите её при обращении — срок работы оценивается после знакомства с объёмом.'
    },
    {
      q: 'Поможете подготовить протокол разногласий или дополнительное соглашение?',
      a: 'Да. Эти документы входят в работу по разработке и экспертизе договора. Юрист сопоставит предлагаемую редакцию с задачей компании и подготовит формулировки для согласования. Если разногласия уже переросли в конфликт об исполнении, может потребоваться работа в рамках договорного спора.'
    },
    {
      q: 'Когда нужен аудит договорной работы компании?',
      a: 'Аудит полезен, если используются разные версии шаблонов, договоры согласуются без понятного маршрута, пропускаются сроки продления, приложения и первичные документы хранятся разрозненно либо одинаковые риски повторяются в сделках. Объём проверки согласуется по выборке договоров, процессам и приоритетам бизнеса.'
    },
    {
      q: 'Что делать, если контрагент уже направил претензию?',
      a: 'Сохраните претензию и сведения о её получении, проверьте указанный срок ответа и не подтверждайте спорные обстоятельства до анализа документов. Юрист сопоставит требования с договором и исполнением, оценит доказательства и поможет подготовить ответ, переговорную или судебную позицию.'
    },
    {
      q: 'Обязательно ли решать договорный спор в суде?',
      a: 'Нет. В зависимости от условий договора, доказательств и позиции сторон спор можно урегулировать претензией, переговорами, изменением условий или соглашением. Если договориться не удаётся, юрист оценит судебный способ защиты и требования. Необходимость досудебного порядка проверяется по закону и договору применительно к конкретному спору.'
    },
    {
      q: 'Можно ли работать вместе со штатным юристом или отделом продаж?',
      a: 'Да. До начала работы можно распределить зоны ответственности: внешнему юристу поручить сложную экспертизу, переговорную позицию, обновление шаблонов или спор, а текущие согласования оставить внутри компании. Порядок обмена документами и контактных лиц лучше зафиксировать заранее.'
    },
    {
      q: 'Можно ли получить помощь дистанционно?',
      a: 'Да. Консультации и рабочие встречи можно проводить по телефону или видеосвязи, а документы передавать электронно согласованным способом. Личное участие зависит от характера переговоров, объёма оригиналов и судебной стадии.'
    },
    {
      q: 'От чего зависит стоимость услуг по договорам?',
      a: 'Стоимость зависит от объёма и сложности документов, количества взаимосвязанных договоров и участников, стадии согласования или спора, срочности конкретного задания, необходимости переговоров и представительства. После уточнения задачи согласуем состав результата, стоимость и внешние расходы до начала работы.'
    }
  ];

  const situations = [
    {
      tag: 'Новый договор',
      title: 'Нужно подготовить договор под конкретную сделку',
      desc: 'Уточним бизнес-модель, предмет, порядок оплаты и приёмки, ответственность, прекращение отношений и другие существенные для сделки условия.',
      link: '/biznesu/dogovornoe-pravo/razrabotka-i-ekspertiza-dogovorov/',
      btnText: 'К разработке договора'
    },
    {
      tag: 'Договор контрагента',
      title: 'Предложили подписать договор на условиях другой стороны',
      desc: 'Проверим текст и приложения, выделим правовые и коммерческие риски, подготовим правки или протокол разногласий.',
      link: '/biznesu/dogovornoe-pravo/razrabotka-i-ekspertiza-dogovorov/',
      btnText: 'К экспертизе проекта'
    },
    {
      tag: 'Изменения',
      title: 'Нужно изменить или расторгнуть действующий договор',
      desc: 'Оценим условия договора, основания и последствия выбранного способа; подготовим соглашение, уведомление или переговорную позицию.',
      link: '/biznesu/dogovornoe-pravo/razrabotka-i-ekspertiza-dogovorov/',
      btnText: 'Согласовать изменения'
    },
    {
      tag: 'Система договоров',
      title: 'В компании накопились разные шаблоны и несогласованные процессы',
      desc: 'Проверим договорную базу, распределение ролей, порядок согласования, хранение документов и контроль обязательств; предложим приоритетные изменения.',
      link: '/biznesu/dogovornoe-pravo/audit-dogovornoj-raboty/',
      btnText: 'К аудиту работы'
    },
    {
      tag: 'Конфликт',
      title: 'Контрагент нарушил условия или предъявил требования',
      desc: 'Сопоставим договор, исполнение и доказательства, оценим требования и возражения, подготовим претензионную или судебную позицию.',
      link: '/biznesu/dogovornoe-pravo/dogovornye-spory/',
      btnText: 'К договорным спорам'
    },
    {
      tag: 'Поставка',
      title: 'Возник спор о товаре, сроках, приёмке или оплате поставки',
      desc: 'Разберём документы поставки и фактическое исполнение, поможем сформировать требования или защиту от требований другой стороны.',
      link: '/biznesu/dogovornoe-pravo/spory-po-dogovoru-postavki/',
      btnText: 'К спорам по поставке'
    }
  ];

  const directions = [
    {
      title: 'Разработка и правовая экспертиза договоров',
      desc: 'Подготовка договора под конкретную сделку, аудит проекта контрагента, протоколы разногласий, оценка рисков и согласование спорных пунктов.',
      url: '/biznesu/dogovornoe-pravo/razrabotka-i-ekspertiza-dogovorov/'
    },
    {
      title: 'Аудит договорной работы компании',
      desc: 'Проверка применяемых типовых форм, маршрутов согласования, порядка подписания, хранения документов и регламентов контроля обязательств.',
      url: '/biznesu/dogovornoe-pravo/audit-dogovornoj-raboty/'
    },
    {
      title: 'Договорные споры для бизнеса',
      desc: 'Досудебное урегулирование, претензионная переписка, переговоры и судебная защита при неисполнении обязательств, просрочке и взыскании убытков.',
      url: '/biznesu/dogovornoe-pravo/dogovornye-spory/'
    },
    {
      title: 'Споры по договору поставки',
      desc: 'Защитим интересы поставщика или покупателя в споре о количестве, качестве, комплектности, сроках, приёмке, оплате товара, неустойке и расторжении договора.',
      url: '/biznesu/dogovornoe-pravo/spory-po-dogovoru-postavki/'
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

  const lawyerActions = [
    {
      title: 'Разберёт сделку и приоритеты',
      desc: 'Уточни фактическую модель отношений, роли сторон, порядок расчётов, приёмки, обмена документами и критичные для бизнеса условия.'
    },
    {
      title: (
        <>
          Проверит документы <br />и полномочия
        </>
      ),
      desc: 'Сопоставит договор, приложения, спецификации, доверенности, переписку и имеющиеся подтверждения исполнения.'
    },
    {
      title: 'Выделит риски и развилки',
      desc: 'Объяснит, какие условия создают неопределённость или ухудшают позицию компании, и предложит варианты формулировок или действий.'
    },
    {
      title: 'Подготовит юридические документы',
      desc: 'Разработает или отредактирует договор, протокол разногласий, дополнительное соглашение, уведомление, претензию, ответ или процессуальные документы.'
    },
    {
      title: 'Подключится к переговорам',
      desc: 'Поможет сформировать позицию, расставить приоритеты и обсудить спорные условия с контрагентом без подмены коммерческих решений руководителя.'
    },
    {
      title: 'Сопроводит спор в суде',
      desc: 'Сформирует требования или возражения, организует доказательства и при согласовании представит компанию в арбитражном суде.'
    }
  ];

  const workSteps = [
    {
      num: '01',
      title: 'Уточняем задачу',
      desc: 'Фиксируем предмет, стадию, участников, ближайшие действия и ожидаемый от юриста результат.'
    },
    {
      num: '02',
      title: 'Изучаем материалы',
      desc: 'Проверяем договор и связанные документы, задаём уточняющие вопросы, определяем недостающие сведения.'
    },
    {
      num: '03',
      title: 'Предлагаем формат работы',
      desc: 'Объясняем основные риски и варианты, согласуем объём, результат этапа, стоимость и порядок взаимодействия.'
    },
    {
      num: '04',
      title: 'Выполняем действия',
      desc: 'Готовим или проверяем документы, участвуем в переговорах, ведём претензионную или судебную работу.'
    },
    {
      num: '05',
      title: 'Передаём результат',
      desc: 'Направляем согласованный документ или позицию, объясняем дальнейшие действия и контрольные точки.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Консультация по договорной задаче',
      price: 'ХХХ ₽',
      subtitle: 'Разбор ситуации: обстоятельства, цель, анализ доступных документов, риски и сценарии.',
      buttonText: 'Записаться на консультацию',
      buttonHref: '#form',
      features: [
        { name: 'Анализ обстоятельств и целей сделки', value: '✓' },
        { name: 'Первичный разбор доступных документов', value: '✓' },
        { name: 'Выделение основных правовых рисков', value: '✓' },
        { name: 'Определение возможного порядка действий', value: '✓' }
      ],
      popular: false
    },
    {
      title: 'Разработка или экспертиза договора',
      price: 'от ХХХ ₽',
      subtitle: 'Подготовка проекта под сделку либо проверка проекта контрагента с таблицей рисков и правками.',
      buttonText: 'Заказать экспертизу / разработку',
      buttonHref: '#form',
      popular: true,
      badgeText: 'ВОСТРЕБОВАНО',
      features: [
        { name: 'Анализ условий под процессы компании', value: '✓' },
        { name: 'Выявление скрытых и несимметричных рисков', value: '✓' },
        { name: 'Подготовка безопасных формулировок', value: '✓' },
        { name: 'Протокол разногласий или новая редакция', value: '✓' }
      ]
    },
    {
      title: 'Аудит договорной работы компании',
      price: 'от ХХХ ₽',
      subtitle: 'Комплексная проверка применяемых шаблонов, маршрутов согласования и регламентов контроля обязательств.',
      buttonText: 'Обсудить аудит базы',
      buttonHref: '#form',
      popular: false,
      features: [
        { name: 'Анализ типовых договоров и приложений', value: '✓' },
        { name: 'Оценка порядка согласования и подписания', value: '✓' },
        { name: 'Выявление системных повторяющихся уязвимостей', value: '✓' },
        { name: 'Рекомендации и обновлённые шаблоны', value: '✓' }
      ]
    },
    {
      title: 'Сопровождение договорного спора',
      price: 'от ХХХ ₽',
      subtitle: 'Досудебное урегулирование или ведение спора из договора в арбитражном суде.',
      buttonText: 'Оценить перспективу спора',
      buttonHref: '#form',
      popular: false,
      features: [
        { name: 'Анализ договора, первичных документов и доказательств', value: '✓' },
        { name: 'Подготовка претензии или мотивированного ответа', value: '✓' },
        { name: 'Участие в переговорах об урегулировании', value: '✓' },
        { name: 'Судебное представительство в арбитражном суде', value: '✓' }
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
      title: 'Обновили договорную базу и порядок согласования',
      category: 'Аудит договорной работы',
      problem: 'В компании использовались разные версии шаблонов, договоры согласувались по электронной почте без единого маршрута, а контроль сроков продления зависел от отдельных сотрудников.',
      action: 'Проверили типовые договоры и процесс их движения, определили повторяющиеся риски, разделили обязательные и вариативные условия, предложили матрицу согласования, правила версий и перечень контрольных дат.',
      result: 'Компания получила обновлённые шаблоны и понятный порядок договорной работы, который снизил зависимость от неформальных договорённостей между подразделениями.',
      isDemo: false
    },
    {
      title: 'Урегулировали разногласия по объёму и оплате услуг',
      category: 'Договорный спор',
      problem: 'Заказчик отказался оплачивать часть услуг, ссылаясь на отсутствие результата, хотя договор описывал процесс оказания и предусматривал подтверждение исполнения отчётами и перепиской.',
      action: 'Сопоставили условия договора с фактическими действиями и документами, восстановили последовательность согласований, подготовили правовую позицию и претензию, затем участвовали в переговорах о закрытии взаимных требований.',
      result: 'Стороны согласовали оплату подтверждённого объёма услуг и прекратили спор на условиях письменного соглашения без перехода к длительному судебному разбирательству.',
      isDemo: false
    }
  ];

  const relatedDirections = [
    {
      title: 'Взыскание задолженности с контрагента',
      desc: 'Обязательство и сумма не оспариваются, задача — вернуть дебиторскую задолженность в досудебном порядке или через арбитражный суд.',
      link: '/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/'
    },
    {
      title: 'Помощь арбитражного юриста',
      desc: 'Нужна комплексная процессуальная помощь в арбитражном суде либо спор не основан на стандартном договоре.',
      link: '/biznesu/arbitrazhnyj-yurist/'
    },
    {
      title: 'Юридическое сопровождение бизнеса',
      desc: 'Компания ищет регулярную внешнюю юридическую службу на абонентской основе, а не решение одной разовой договорной задачи.',
      link: '/biznesu/yuridicheskoe-soprovozhdenie-biznesa/'
    },
    {
      title: 'Юрист по недвижимости и строительству',
      desc: 'Сделка или спор связаны со строительным подрядом, проектными работами, градостроительными регламентами или коммерческой недвижимостью.',
      link: '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/'
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
          streetAddress: 'ул. Советская, 35',
          addressLocality: 'Липецк',
          addressRegion: 'Липецкая область',
          addressCountry: 'RU'
        },
        areaServed: ['Липецк', 'Липецкая область']
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/dogovornoe-pravo/#service',
        name: 'Договорный юрист для бизнеса в Липецке',
        serviceType: 'Юридические услуги по договорам для бизнеса',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        url: 'https://dejure-help.ru/biznesu/dogovornoe-pravo/',
        description: 'Договорный юрист для бизнеса в Липецке: разработка и экспертиза договоров, аудит договорной работы, урегулирование договорных споров.'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/biznesu/dogovornoe-pravo/#breadcrumb',
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
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/biznesu/dogovornoe-pravo/#faq',
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
            <span style={{ color: 'var(--color-text-muted)' }}>Договорное право</span>
          </>
        }
        superTitle="Договорное право • Для бизнеса"
        title={
          <span>
            <span style={{ display: 'inline-block' }}>Договорный юрист</span> <br />
            <span style={{ display: 'inline-block' }}>для бизнеса в&nbsp;Липецке</span>
          </span>
        }
        subtitle="Разработаем или проверим договор, оценим систему договорной работы и защитим интересы компании при конфликте с контрагентом."
        trustItems={[
          { text: 'Проверяем условия и документы сделки' },
          { text: 'Фиксируем риски и варианты их снижения' },
          { text: 'Берём согласованные этапы: от проекта договора до спора' }
        ]}
        primaryCtaText="Обсудить договорную задачу"
        primaryCtaLink="#form"
        primaryCtaSubtext="Перезвоним в течение 15 минут в рабочее время"
        secondaryCtaText="Выбрать услугу"
        secondaryCtaLink="#directions"
        rightContent={
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', width: '100%' }}>
            {/* Darkening gradient under the creative to highlight the background graphic */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '150%',
              height: '150%',
              background: 'radial-gradient(circle, rgba(23, 50, 77, 0.12) 0%, rgba(23, 50, 77, 0.05) 30%, transparent 60%)',
              zIndex: 0,
              pointerEvents: 'none'
            }} />
            {/* Background Graphic: Courthouse (Centered behind mockup, shifted slightly right) */}
            <svg className="hero-vector-svg" style={{ position: 'absolute', top: '35%', left: '80%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', opacity: 0.08, zIndex: 0, pointerEvents: 'none' }} viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="0.6">
              <path d="M3 21h18 M4 21v-2h16v2 M6 19V9 M10 19V9 M14 19V9 M18 19V9 M12 4l-9 5h18l-9-5z M4 9h16"/>
            </svg>

            <div className="mockup-container" style={{ zIndex: 1, margin: 0 }}>
              <div style={{ position: 'absolute', width: '220px', height: '220px', background: 'var(--color-primary)', filter: 'blur(90px)', opacity: 0.12, borderRadius: '50%' }} />

              {/* Фоновый лист договора */}
              <div className="doc-wrapper-float-2">
                <div className="doc-sheet doc-sheet-2">
                  <div style={{ padding: '28px 22px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(23,50,77,0.15)', paddingBottom: '8px', marginBottom: '14px' }}>
                      <span style={{ fontSize: '7px', fontWeight: 'bold', color: 'var(--color-deep-blue)', letterSpacing: '0.05em' }}>ПРИЛОЖЕНИЕ К ДОГОВОРУ</span>
                      <span style={{ fontSize: '6px', color: 'var(--color-primary)' }}>Спецификация № 1</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.15)' }} />
                      <div style={{ width: '85%', height: '3px', background: 'rgba(23,50,77,0.08)' }} />
                      <div style={{ width: '70%', height: '3px', background: 'rgba(23,50,77,0.08)' }} />
                    </div>
                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', paddingTop: '10px', borderTop: '1px dashed rgba(23,50,77,0.15)' }}>
                      <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)' }}>Порядок расчётов: согласован</div>
                      <div style={{ fontSize: '5px', color: 'var(--color-gold)', fontWeight: 'bold' }}>Правовой аудит ✓</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Основной лист договора с разделами */}
              <div className="doc-wrapper-float-1">
                <div className="doc-sheet doc-sheet-1">
                  <div style={{ padding: '26px 22px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(23,50,77,0.2)', paddingBottom: '10px', marginBottom: '14px' }}>
                      <img src="/images/logo_dark.png" alt="Де-Юре" style={{ width: '55px', height: 'auto', opacity: 0.9 }} />
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', alignItems: 'flex-end' }}>
                        <span style={{ fontSize: '7px', fontWeight: 'bold', color: 'var(--color-deep-blue)', letterSpacing: '0.05em' }}>КОММЕРЧЕСКИЙ ДОГОВОР</span>
                        <span style={{ fontSize: '5.5px', color: 'var(--color-primary)' }}>B2B правовая экспертиза</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '12px' }}>
                      <div style={{ background: 'rgba(247, 244, 237, 0.7)', borderLeft: '3px solid #C1A066', padding: '6px 8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3px' }}>
                          <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)' }}>1. ПРЕДМЕТ И МОДЕЛЬ СДЕЛКИ</span>
                          <span style={{ fontSize: '5px', color: '#16a34a', fontWeight: 'bold' }}>ПРОВЕРЕНО</span>
                        </div>
                        <div style={{ width: '90%', height: '2px', background: 'rgba(23,50,77,0.15)' }} />
                      </div>

                      <div style={{ background: 'rgba(247, 244, 237, 0.7)', borderLeft: '3px solid #C1A066', padding: '6px 8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3px' }}>
                          <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)' }}>2. ЦЕНА И ПОРЯДОК ОПЛАТЫ</span>
                          <span style={{ fontSize: '5px', color: '#16a34a', fontWeight: 'bold' }}>СОГЛАСОВАНО</span>
                        </div>
                        <div style={{ width: '85%', height: '2px', background: 'rgba(23,50,77,0.15)' }} />
                      </div>

                      <div style={{ background: 'rgba(247, 244, 237, 0.7)', borderLeft: '3px solid #C1A066', padding: '6px 8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3px' }}>
                          <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)' }}>3. ОТВЕТСТВЕННОСТЬ И НЕУСТОЙКА</span>
                          <span style={{ fontSize: '5px', color: '#C1A066', fontWeight: 'bold' }}>БАЛАНС РИСКОВ</span>
                        </div>
                        <div style={{ width: '95%', height: '2px', background: 'rgba(23,50,77,0.15)' }} />
                      </div>

                      <div style={{ background: 'rgba(247, 244, 237, 0.7)', borderLeft: '3px solid #C1A066', padding: '6px 8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3px' }}>
                          <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)' }}>4. ПРИЁМКА И ДОКУМЕНТООБОРОТ</span>
                          <span style={{ fontSize: '5px', color: '#16a34a', fontWeight: 'bold' }}>ФИКСАЦИЯ</span>
                        </div>
                        <div style={{ width: '80%', height: '2px', background: 'rgba(23,50,77,0.15)' }} />
                      </div>
                    </div>

                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '8px', borderTop: '1px solid rgba(23,50,77,0.15)' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <span style={{ fontSize: '5.5px', color: 'rgba(23,50,77,0.6)' }}>ЮК «ДЕ-ЮРЕ» • B2B ПРАКТИКА</span>
                        <span style={{ fontSize: '5px', color: '#C1A066' }}>Липецк • Дистанционно по РФ</span>
                      </div>
                      <div style={{ width: '38px', height: '14px', border: '1px solid #C1A066', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ fontSize: '4.5px', fontWeight: 'bold', color: '#C1A066' }}>ЭКСПЕРТИЗА</span>
                      </div>
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
                Начинаем с задачи, документов и стадии переговоров или спора.
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                <polyline points="9 11 12 14 22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
              <div style={{ fontSize: '15px', color: 'var(--color-deep-blue)', fontWeight: 500, lineHeight: 1.5 }}>
                Согласуем приоритеты: риски, скорость сделки, переговорная позиция и исполнимость условий.
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                <polyline points="9 11 12 14 22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
              <div style={{ fontSize: '15px', color: 'var(--color-deep-blue)', fontWeight: 500, lineHeight: 1.5 }}>
                Объём работ, стоимость и порядок взаимодействия фиксируем до начала работы.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. СИТУАЦИИ ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="situations-header-row" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '32px',
            marginBottom: '48px',
            flexWrap: 'wrap'
          }}>
            <div style={{ flex: '1 1 340px' }}>
              <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', margin: 0, lineHeight: 1.2 }}>
                С какой договорной задачей <br />вы столкнулись
              </h2>
            </div>
            <div className="situations-subtitle-right" style={{
              flex: '1 1 380px',
              maxWidth: '540px',
              textAlign: 'right'
            }}>
              <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
                Помогаем бизнесу на разных стадиях договорной работы — до подписания, в процессе исполнения и при возникновении разногласий. Выберите ситуацию, которая ближе к вашей задаче.
              </p>
            </div>
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

                <Link
                  href={sit.link}
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
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. НАПРАВЛЕНИЯ ПОМОЩИ ═══ */}
      <section id="directions" className="section" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Направления помощи
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Выберите услугу по текущей задаче. Если договор ещё согласуется — начните с разработки и экспертизы. Если проблема системная — с аудита. При конфликте перейдите к договорным спорам.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            {directions.map((dir, idx) => (
              <Link key={idx} href={dir.url} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                <div
                  className="card service-card hover-lift"
                  style={{
                    height: '100%',
                    minHeight: '200px',
                    padding: '30px',
                    background: 'var(--color-white)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    cursor: 'pointer'
                  }}
                >
                  <div>
                    <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.35, fontFamily: 'var(--font-serif)', fontWeight: 600 }}>
                      {dir.title}
                    </h3>
                    <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                      {dir.desc}
                    </p>
                  </div>
                  <div
                    className="card-arrow"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: 'var(--color-primary)',
                      fontSize: '14px',
                      fontWeight: 600,
                      marginTop: 'auto',
                      paddingTop: '14px',
                      borderTop: '1px solid rgba(23, 50, 77, 0.06)',
                      transition: 'transform 0.3s'
                    }}
                  >
                    <span>Подробнее</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.3s' }}>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}

            {/* Карточка 5: «Не нашли свою ситуацию?», оформленная по каноническому шаблону направлений */}
            <div
              className="card service-card service-card-span-2"
              style={{
                gridColumn: 'span 2',
                padding: '32px 36px',
                background: 'var(--color-deep-blue)',
                border: '1px solid transparent',
                borderRadius: '0',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '28px',
                transition: 'all 0.3s',
                position: 'relative',
                borderTop: '3px solid var(--color-gold)',
                boxShadow: '0 8px 16px rgba(16, 39, 59, 0.28)'
              }}
            >
              <style dangerouslySetInnerHTML={{ __html: `
                .service-card-span-2 {
                  grid-column: span 2;
                }
                @media (max-width: 991px) {
                  .service-card-span-2 {
                    grid-column: span 1 !important;
                    flex-direction: column !important;
                    align-items: flex-start !important;
                  }
                }
                .white-btn-custom {
                  background-color: var(--color-white) !important;
                  color: #10273B !important;
                  border: 1px solid var(--color-white) !important;
                  white-space: nowrap;
                  font-weight: 600;
                  padding: 14px 28px !important;
                  font-size: 15px !important;
                  transition: all 0.3s ease !important;
                }
                .white-btn-custom:hover {
                  background-color: var(--color-primary) !important;
                  color: var(--color-white) !important;
                  border-color: var(--color-primary) !important;
                }
                .white-btn-custom span {
                  color: inherit !important;
                }
              `}} />
              <div style={{ flex: '1 1 320px' }}>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '24px', fontFamily: 'var(--font-serif)', color: 'var(--color-white)', lineHeight: 1.3, fontWeight: 600 }}>
                  Не нашли свою ситуацию?
                </h3>
                <p style={{ margin: '0', fontSize: '16px', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.55, maxWidth: '580px' }}>
                  Договорная задача может затрагивать расчёты, налоги или будущий спор. Опишите детали в форме — определим подходящий формат помощи.
                </p>
              </div>
              <div style={{ flexShrink: 0 }}>
                <a
                  href="#form"
                  className="btn white-btn-custom"
                  style={{ display: 'inline-block', textAlign: 'center', textDecoration: 'none' }}
                  onClick={() => setActiveContext('custom-situation')}
                >
                  <span>Получить консультацию</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 4. С КАКИМИ ДОГОВОРАМИ РАБОТАЕМ (ПО ШАБЛОНУ КАРТОЧКИ-НАВИГАТОРА) ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          {/* Темно-синяя карточка-навигатор */}
          <div style={{
            background: 'linear-gradient(135deg, #10273B 0%, #17375E 50%, #0D1E2D 100%)',
            border: '1px solid rgba(193, 160, 102, 0.4)',
            borderTop: '3px solid var(--color-gold)',
            boxShadow: '0 8px 30px rgba(16, 39, 59, 0.18)',
            padding: '36px 32px',
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

            {/* Шаблонная плашка внутри карточки */}
            <div
              style={{
                marginTop: '20px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderLeft: '3px solid var(--color-gold)',
                padding: '14px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                position: 'relative',
                zIndex: 1
              }}
            >
              <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
              </div>
              <div style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.55 }}>
                Строительный подряд относится к отраслевому направлению{' '}
                <Link
                  href="/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/"
                  style={{ color: 'var(--color-gold)', fontWeight: 600, textDecoration: 'underline' }}
                >
                  юриста по недвижимости и строительству для бизнеса
                </Link>.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 5. ЧТО СДЕЛАЕТ ДОГОВОРНЫЙ ЮРИСТ ═══ */}
      <section className="section" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Что сделает договорный юрист
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Состав работы зависит от стадии: проект договора, действующая система документов или уже возникший конфликт. До начала работы согласуем конкретный результат.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', position: 'relative' }}>
            {lawyerActions.map((act, idx) => (
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
                  {act.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {act.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 6. ЧТО ПОДГОТОВИТЬ ДЛЯ КОНСУЛЬТАЦИИ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Что подготовить для консультации
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Для первого разговора достаточно кратко описать задачу и назвать стадию. Для содержательного анализа обычно понадобятся документы ниже:
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            <div style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              border: '1px solid var(--color-border)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0, paddingBottom: '12px', borderBottom: '1px solid rgba(23, 50, 77, 0.1)' }}>
                Документы по сделке и согласованию
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Проект или подписанный договор</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Со всеми приложениями, спецификациями, графиками платежей и дополнительными соглашениями.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>ТЗ и коммерческие условия</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Коммерческое предложение, техническое задание, заявки, заказы и деловая переписка сторон.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              border: '1px solid var(--color-border)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0, paddingBottom: '12px', borderBottom: '1px solid rgba(23, 50, 77, 0.1)' }}>
                Исполнение, конфликт или шаблоны
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Первичные документы и переписка</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Акты, УПД, товарные накладные, счета и платёжные поручения — если договор уже исполняется или возник спор.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Претензии или внутренние регламенты</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Претензии, ответы, исковые заявления — при конфликте; формы договоров и регламенты — при аудите базы.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 7. КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock
        title="Как проходит работа"
        subtitle="Пять последовательных этапов для решения договорной задачи бизнеса."
        steps={workSteps}
      />

      {/* ═══ 8. СТОИМОСТЬ УСЛУГ ═══ */}
      <PricingBlock
        title="Стоимость услуг договорного юриста"
        subtitle="Стоимость зависит от объёма и сложности документов, срочности конкретного задания, количества участников, необходимости переговоров и стадии спора. Состав работ и порядок оплаты согласуем до начала работы."
        tiers={pricingTiers}
        ctaTitle="Точную стоимость определим до начала работы"
        ctaSubtitle="Сначала изучим обстоятельства и документы, предложим подходящий формат помощи и согласуем стоимость. Она не изменится без согласования с вами."
        ctaButtonText="Получить расчёт стоимости"
        ctaButtonLink="#form"
      />

      {/* ═══ 9. ПРИМЕРЫ ИЗ ПРАКТИКИ ═══ */}
      <CasesBlock
        title="Примеры договорных задач"
        cases={cases}
        showDemoWarning={false}
        resultLabel="Ключевой результат"
      />

      {/* ═══ 10. СВЯЗАННЫЕ НАПРАВЛЕНИЯ ═══ */}
      <section className="section" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div className="situations-header-row" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '32px',
            marginBottom: '40px',
            flexWrap: 'wrap'
          }}>
            <div style={{ flex: '1 1 340px' }}>
              <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', margin: 0, lineHeight: 1.2 }}>
                Если задача выходит <br />за рамки договора
              </h2>
            </div>
            <div className="situations-subtitle-right" style={{
              flex: '1 1 380px',
              maxWidth: '540px',
              textAlign: 'right'
            }}>
              <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
                Договорные вопросы часто переплетаются с другими правовыми направлениями бизнеса. Подберём профильного специалиста под вашу задачу.
              </p>
            </div>
          </div>

          <div className="grid grid-4" style={{ gap: '20px' }}>
            {relatedDirections.map((rel, idx) => (
              <Link key={idx} href={rel.link} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                <div
                  className="card related-service-card hover-lift"
                  style={{
                    height: '100%',
                    padding: '28px 24px',
                    background: 'var(--color-white)',
                    border: '1px solid var(--color-border)',
                    borderTop: '3px solid var(--color-gold)',
                    borderRadius: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
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
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 11. FAQ ═══ */}
      <FAQBlock
        faqs={faqs}
        title={<>Ответы на<br />частые вопросы</>}
        subtitle="Собрали ответы на ключевые вопросы по разработке, проверке, аудиту и спорам из договоров для бизнеса."
        ctaText="Задать свой вопрос"
        ctaLink="#form"
      />

      {/* ═══ 12. ФИНАЛЬНАЯ ФОРМА ═══ */}
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
                Получите первичную оценку <br />договора или задачи
              </h2>

              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Опишите условия сделки, стадию согласования или суть разногласий. Договорный юрист изучит обстоятельства и свяжется с вами для обсуждения безопасного формата работы.
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
                  commentPlaceholder="Кратко опишите задачу по договору…"
                  subtext="Если вы оставите заявку вечером или в выходной день, мы перезвоним в ближайший рабочий день."
                  hiddenFields={[
                    { name: 'pageId', value: 'B2B-04' },
                    { name: 'pageTitle', value: 'Договорный юрист для бизнеса в Липецке' },
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
