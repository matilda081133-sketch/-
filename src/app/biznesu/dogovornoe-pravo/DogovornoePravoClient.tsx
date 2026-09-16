'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';
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
      btnText: 'К разработке договора →'
    },
    {
      tag: 'Договор контрагента',
      title: 'Предложили подписать договор на условиях другой стороны',
      desc: 'Проверим текст и приложения, выделим правовые и коммерческие риски, подготовим правки или протокол разногласий.',
      link: '/biznesu/dogovornoe-pravo/razrabotka-i-ekspertiza-dogovorov/',
      btnText: 'К экспертизе проекта →'
    },
    {
      tag: 'Изменения',
      title: 'Нужно изменить или расторгнуть действующий договор',
      desc: 'Оценим условия договора, основания и последствия выбранного способа; подготовим соглашение, уведомление или переговорную позицию.',
      link: '/biznesu/dogovornoe-pravo/razrabotka-i-ekspertiza-dogovorov/',
      btnText: 'Согласовать изменения →'
    },
    {
      tag: 'Система договоров',
      title: 'В компании накопились разные шаблоны и несогласованные процессы',
      desc: 'Проверим договорную базу, распределение ролей, порядок согласования, хранение документов и контроль обязательств; предложим приоритетные изменения.',
      link: '/biznesu/dogovornoe-pravo/audit-dogovornoj-raboty/',
      btnText: 'К аудиту работы →'
    },
    {
      tag: 'Конфликт',
      title: 'Контрагент нарушил условия или предъявил требования',
      desc: 'Сопоставим договор, исполнение и доказательства, оценим требования и возражения, подготовим претензионную или судебную позицию.',
      link: '/biznesu/dogovornoe-pravo/dogovornye-spory/',
      btnText: 'К договорным спорам →'
    },
    {
      tag: 'Поставка',
      title: 'Возник спор о товаре, сроках, приёмке или оплате поставки',
      desc: 'Разберём документы поставки и фактическое исполнение, поможем сформировать требования или защиту от требований другой стороны.',
      link: '/biznesu/dogovornoe-pravo/spory-po-dogovoru-postavki/',
      btnText: 'К спорам по поставке →'
    },
    {
      tag: 'Переговоры',
      title: 'Условия сделки не удаётся согласовать',
      desc: 'Определим критичные пункты, предложим юридически исполнимые формулировки и при необходимости подключимся к переговорам.',
      link: '/biznesu/dogovornoe-pravo/razrabotka-i-ekspertiza-dogovorov/',
      btnText: 'Подключить юриста →'
    },
    {
      tag: 'Неясная задача',
      title: 'Вопрос затрагивает несколько договоров или направлений',
      desc: 'Кратко опишите задачу. Мы уточним обстоятельства и предложим подходящий формат: разовая проверка, аудит, переговоры или сопровождение спора.',
      link: '#contact-form',
      btnText: 'Описать задачу →',
      isFormAction: true,
      contextValue: 'unclear'
    }
  ];

  const directions = [
    {
      title: 'Разработка и правовая экспертиза договоров',
      url: '/biznesu/dogovornoe-pravo/razrabotka-i-ekspertiza-dogovorov/',
      desc: 'Подготовим договор под сделку или проверим проект контрагента. Выделим риски, предложим правки, подготовим протокол разногласий, дополнительное соглашение или иную согласованную документацию.',
      badge: 'B2B-04-01'
    },
    {
      title: 'Аудит договорной работы компании',
      url: '/biznesu/dogovornoe-pravo/audit-dogovornoj-raboty/',
      desc: 'Проверим типовые договоры и процесс работы с ними: полномочия, согласование, версии, подписание, хранение, контроль сроков и исполнения. Сформируем перечень рисков и приоритетов изменений.',
      badge: 'B2B-04-02'
    },
    {
      title: 'Договорные споры для бизнеса',
      url: '/biznesu/dogovornoe-pravo/dogovornye-spory/',
      desc: 'Оценим договор, исполнение и доказательства. Подготовим требования или возражения, проведём претензионную работу, переговоры и при согласованном объёме представим компанию в арбитражном суде.',
      badge: 'B2B-04-03'
    },
    {
      title: 'Споры по договору поставки',
      url: '/biznesu/dogovornoe-pravo/spory-po-dogovoru-postavki/',
      desc: 'Защитим интересы поставщика или покупателя в споре о количестве, качестве, комплектности, сроках, приёмке, оплате товара, неустойке и расторжении договора.',
      badge: 'B2B-04-04'
    }
  ];

  const contractTypes = [
    'Поставка товаров и оборудования',
    'Возмездное оказание услуг',
    'Подряд (кроме строительного)',
    'Коммерческая аренда и субаренда',
    'Купля-продажа коммерческого имущества',
    'Транспортная экспедиция и перевозка',
    'Складское и ответственное хранение',
    'Заем и финансовые обязательства',
    'Агентирование, комиссия и поручение',
    'Финансовый лизинг',
    'Уступка права требования (цессия) и перевод долга',
    'Лицензионные и смешанные договоры'
  ];

  const lawyerActions = [
    {
      title: 'Разберёт сделку и приоритеты',
      desc: 'Уточни фактическую модель отношений, роли сторон, порядок расчётов, приёмки, обмена документами и критичные для бизнеса условия.'
    },
    {
      title: 'Проверит документы и полномочия',
      desc: 'Сопоставит договор, приложения, спецификации, доверенности, переписку и имеющиеся подтверждения исполнения.'
    },
    {
      title: 'Выделит риски и развилки',
      desc: 'Объяснит, какие условия создают неопределённость или ухудшают позицию компании, и предложит варианты формулировок или действий.'
    },
    {
      title: 'Подготовит юридические документы',
      desc: 'Разработает или отредактирует договор, протокол разногласий, дополнительное соглашение, уведомление, претензию, ответ или процессуальные документы в согласованном объёме.'
    },
    {
      title: 'Подключится к переговорам',
      desc: 'Поможет сформировать позицию, расставить приоритеты и обсудить спорные условия с контрагентом без подмены коммерческих решений руководителя.'
    },
    {
      title: 'Сопроводит спор',
      desc: 'Сформирует требования или возражения, организует доказательства и при согласовании представит компанию в арбитражном суде.'
    }
  ];

  const prepChecklist = [
    'Проект или подписанный договор со всеми приложениями, спецификациями и дополнительными соглашениями',
    'Коммерческое предложение, техническое задание, заявки, заказы и иные документы, описывающие сделку',
    'Переписка о согласовании условий или исполнении обязательств',
    'Акты, накладные, универсальные передаточные документы (УПД), счета и платёжные поручения — если договор уже исполняется или возник спор',
    'Претензии, ответы, уведомления, иск, определение суда и сведения о ближайшей контрольной дате — если конфликт уже начался',
    'Внутренние шаблоны, регламенты и перечень проблемных ситуаций — для аудита договорной работы'
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
      title: 'Выполняем согласованные действия',
      desc: 'Готовим или проверяем документы, участвуем в переговорах, ведём претензионную или судебную работу.'
    },
    {
      num: '05',
      title: 'Передаём результат и следующие шаги',
      desc: 'Направляем согласованный документ или позицию, объясняем дальнейшие действия и контрольные точки.'
    }
  ];

  const deliverables = [
    'Проект договора, адаптированный под конкретную сделку и процессы компании',
    'Таблица замечаний и рисков, редакция спорных условий, протокол разногласий или дополнительное соглашение',
    'Заключение по договорной базе и приоритетный план изменений',
    'Обновлённые шаблоны и рекомендации по согласованию, подписанию, хранению и контролю обязательств',
    'Претензия, ответ, уведомление, соглашение об урегулировании или переговорная позиция',
    'Исковая позиция, процессуальные документы и представительство в суде в пределах договора с клиентом'
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Консультация по договорной задаче',
      price: 'ХХХ ₽',
      subtitle: 'Разбор ситуации: обстоятельства, цель, анализ доступных документов, риски и сценарии.',
      buttonText: 'Записаться на консультацию',
      buttonHref: '#contact-form',
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
      subtitle: 'Один договор / комплект: анализ сделки, подготовка или проверка текста, замечания и правки.',
      buttonText: 'Уточнить стоимость',
      buttonHref: '#contact-form',
      features: [
        { name: 'Детальный анализ бизнес-модели сделки', value: '✓' },
        { name: 'Подготовка проекта или экспертиза проекта контрагента', value: '✓' },
        { name: 'Формулирование правок или протокола разногласий', value: '✓' },
        { name: 'Обсуждение результатов и рекомендации', value: '✓' }
      ],
      popular: true
    },
    {
      title: 'Аудит договорной работы',
      price: 'от ХХХ ₽',
      subtitle: 'Система документов: объём аудита определяется после знакомства с базой договоров и шаблонами.',
      buttonText: 'Обсудить аудит',
      buttonHref: '#contact-form',
      features: [
        { name: 'Проверка выборки договоров и шаблонов', value: '✓' },
        { name: 'Анализ маршрутов и полномочий подписантов', value: '✓' },
        { name: 'Диагностический отчёт и карта системных рисков', value: '✓' },
        { name: 'Приоритетный план исправлений и регламентов', value: '✓' }
      ],
      popular: false
    },
    {
      title: 'Договорный спор',
      price: 'от ХХХ ₽',
      subtitle: 'Претензионный или судебный этап: анализ позиции, требования, возражения, переговоры и суд.',
      buttonText: 'Оценить задачу',
      buttonHref: '#contact-form',
      features: [
        { name: 'Сопоставление условий договора с исполнением', value: '✓' },
        { name: 'Подготовка мотивированной претензии или отзыва', value: '✓' },
        { name: 'Участие в досудебных переговорах', value: '✓' },
        { name: 'Судебное представительство по согласованному этапу', value: '✓' }
      ],
      popular: false
    }
  ];

  const cases: CaseData[] = [
    {
      title: 'Согласовали условия поставки до подписания договора',
      category: 'Экспертиза договора',
      problem: 'Компания получила проект договора покупателя с односторонними основаниями для отказа от приёмки, несбалансированной ответственностью и неопределённым порядком подтверждения заявок.',
      action: 'Сопоставили проект с фактической схемой поставок, выделили критичные условия, подготовили редакцию пунктов о заявках, приёмке, оплате, претензиях и ответственности, а также таблицу разногласий для переговоров.',
      result: 'Стороны согласовали рабочую редакцию договора, в которой порядок поставки и подтверждающие документы соответствовали реальному процессу компании, а спорные риски были распределены понятнее.'
    },
    {
      title: 'Обновили договорную базу и порядок согласования',
      category: 'Аудит договорной работы',
      problem: 'В компании использовались разные версии шаблонов, договоры согласувались по электронной почте без единого маршрута, а контроль сроков продления зависел от отдельных сотрудников.',
      action: 'Проверили типовые договоры и процесс их движения, определили повторяющиеся риски, разделили обязательные и вариативные условия, предложили матрицу согласования, правила версий и перечень контрольных дат.',
      result: 'Компания получила обновлённые шаблоны и понятный порядок договорной работы, который снизил зависимость от неформальных договорённостей между подразделениями.'
    },
    {
      title: 'Урегулировали разногласия по объёму и оплате услуг',
      category: 'Договорный спор',
      problem: 'Заказчик отказался оплачивать часть услуг, ссылаясь на отсутствие результата, хотя договор описывал процесс оказания и предусматривал подтверждение исполнения отчётами и перепиской.',
      action: 'Сопоставили условия договора с фактическими действиями и документами, восстановили последовательность согласований, подготовили правовую позицию и претензию, затем участвовали в переговорах о закрытии взаимных требований.',
      result: 'Стороны согласовали оплату подтверждённого объёма услуг и прекратили спор на условиях письменного соглашения без перехода к длительному судебному разбирательству.'
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
          streetAddress: 'ул. Советская, д. 35, оф. 213',
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
        description: 'Договорный юрист для бизнеса в Липецке: разработка и экспертиза договоров, аудит договорной работы, урегулирование договорных споров.',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Направления договорного права для бизнеса',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Разработка и правовая экспертиза договоров',
                url: 'https://dejure-help.ru/biznesu/dogovornoe-pravo/razrabotka-i-ekspertiza-dogovorov/'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Аудит договорной работы компании',
                url: 'https://dejure-help.ru/biznesu/dogovornoe-pravo/audit-dogovornoj-raboty/'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Договорные споры для бизнеса',
                url: 'https://dejure-help.ru/biznesu/dogovornoe-pravo/dogovornye-spory/'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Споры по договору поставки',
                url: 'https://dejure-help.ru/biznesu/dogovornoe-pravo/spory-po-dogovoru-postavki/'
              }
            }
          ]
        }
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
        title="Договорный юрист для бизнеса в Липецке"
        subtitle="Разработаем или проверим договор, оценим систему договорной работы и защитим интересы компании при конфликте с контрагентом."
        trustItems={[
          { text: 'Проверяем условия и документы сделки' },
          { text: 'Фиксируем риски и варианты их снижения' },
          { text: 'Берём согласованные этапы: от проекта договора до спора' }
        ]}
        primaryCtaText="Обсудить договорную задачу"
        primaryCtaLink="#contact-form"
        primaryCtaSubtext="Перезвоним в течение 15 минут в рабочее время"
        secondaryCtaText="Выбрать услугу"
        secondaryCtaLink="#service-directions"
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
                      {/* Раздел: Предмет */}
                      <div style={{ background: 'rgba(247, 244, 237, 0.7)', borderLeft: '3px solid #C1A066', padding: '6px 8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3px' }}>
                          <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)' }}>1. ПРЕДМЕТ И МОДЕЛЬ СДЕЛКИ</span>
                          <span style={{ fontSize: '5px', color: '#16a34a', fontWeight: 'bold' }}>ПРОВЕРЕНО</span>
                        </div>
                        <div style={{ width: '90%', height: '2px', background: 'rgba(23,50,77,0.15)' }} />
                      </div>

                      {/* Раздел: Цена и расчёты */}
                      <div style={{ background: 'rgba(247, 244, 237, 0.7)', borderLeft: '3px solid #C1A066', padding: '6px 8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3px' }}>
                          <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)' }}>2. ЦЕНА И ПОРЯДОК ОПЛАТЫ</span>
                          <span style={{ fontSize: '5px', color: '#16a34a', fontWeight: 'bold' }}>СОГЛАСОВАНО</span>
                        </div>
                        <div style={{ width: '85%', height: '2px', background: 'rgba(23,50,77,0.15)' }} />
                      </div>

                      {/* Раздел: Ответственность */}
                      <div style={{ background: 'rgba(247, 244, 237, 0.7)', borderLeft: '3px solid #C1A066', padding: '6px 8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3px' }}>
                          <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)' }}>3. ОТВЕТСТВЕННОСТЬ И НЕУСТОЙКА</span>
                          <span style={{ fontSize: '5px', color: '#C1A066', fontWeight: 'bold' }}>БАЛАНС РИСКОВ</span>
                        </div>
                        <div style={{ width: '95%', height: '2px', background: 'rgba(23,50,77,0.15)' }} />
                      </div>

                      {/* Раздел: Приёмка */}
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

      {/* ═══ СТРОКА ДОВЕРИЯ ═══ */}
      <section style={{ backgroundColor: 'var(--color-bg-light)', borderBottom: '1px solid var(--color-border)', padding: '24px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ color: 'var(--color-gold)', fontSize: '20px', lineHeight: 1 }}>✓</div>
              <div style={{ fontSize: '15px', color: 'var(--color-deep-blue)', fontWeight: 500, lineHeight: 1.5 }}>
                Начинаем с задачи, документов и стадии переговоров или спора.
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ color: 'var(--color-gold)', fontSize: '20px', lineHeight: 1 }}>✓</div>
              <div style={{ fontSize: '15px', color: 'var(--color-deep-blue)', fontWeight: 500, lineHeight: 1.5 }}>
                Согласуем приоритеты: риски, скорость сделки, переговорная позиция и исполнимость условий.
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ color: 'var(--color-gold)', fontSize: '20px', lineHeight: 1 }}>✓</div>
              <div style={{ fontSize: '15px', color: 'var(--color-deep-blue)', fontWeight: 500, lineHeight: 1.5 }}>
                Объём работ, стоимость и порядок взаимодействия фиксируем до начала работы.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. С КАКОЙ ДОГОВОРНОЙ ЗАДАЧЕЙ ВЫ СТОЛКНУЛИСЬ ═══ */}
      <section id="situations" style={{ backgroundColor: 'var(--color-white)', padding: '64px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 44px' }}>
            <h2 style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              С какой договорной задачей вы столкнулись
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Помогаем бизнесу на разных стадиях договорной работы — до подписания, в процессе исполнения и при возникновении разногласий. Выберите ситуацию, которая ближе к вашей задаче.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            {situations.map((sit, idx) => (
              <div
                key={idx}
                className="card hover-lift"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.95) 100%)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  borderRadius: '0',
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)'
                }}
              >
                <div>
                  <span style={{
                    display: 'inline-block',
                    fontSize: '11.5px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--color-gold)',
                    marginBottom: '10px'
                  }}>
                    {sit.tag}
                  </span>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '12px', lineHeight: 1.35 }}>
                    {sit.title}
                  </h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
                    {sit.desc}
                  </p>
                </div>

                {sit.isFormAction ? (
                  <a
                    href="#contact-form"
                    onClick={() => setActiveContext(sit.contextValue || 'unclear')}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: 'var(--color-primary)',
                      textDecoration: 'none',
                      gap: '6px'
                    }}
                  >
                    {sit.btnText}
                  </a>
                ) : (
                  <Link
                    href={sit.link}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: 'var(--color-primary)',
                      textDecoration: 'none',
                      gap: '6px'
                    }}
                  >
                    {sit.btnText}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. НАПРАВЛЕНИЯ ПОМОЩИ (2x2 GRID) ═══ */}
      <section id="service-directions" style={{ backgroundColor: 'var(--color-bg-light)', padding: '64px 0', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 44px' }}>
            <h2 style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              Направления помощи
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Выберите услугу по текущей задаче. Если договор ещё согласуется — начните с разработки и экспертизы. Если проблема системная — с аудита. При конфликте перейдите к договорным спорам.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            {directions.map((dir, idx) => (
              <Link
                key={idx}
                href={dir.url}
                className="card hover-lift"
                style={{
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  borderLeft: '4px solid var(--color-primary)',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gold)', letterSpacing: '0.05em' }}>
                      {dir.badge}
                    </span>
                    <span style={{ fontSize: '13px', color: 'var(--color-primary)', fontWeight: 600 }}>
                      Подробнее →
                    </span>
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px', lineHeight: 1.35 }}>
                    {dir.title}
                  </h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                    {dir.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Плашка «Не нашли свою ситуацию?» */}
          <div style={{
            marginTop: '36px',
            background: 'linear-gradient(135deg, var(--color-deep-blue) 0%, #17324D 100%)',
            padding: '32px 36px',
            color: 'var(--color-white)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            borderLeft: '4px solid var(--color-gold)'
          }}>
            <div style={{ maxWidth: '720px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-white)', marginBottom: '8px' }}>
                Не нашли свою ситуацию?
              </h3>
              <p style={{ fontSize: '14.5px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, margin: 0 }}>
                Договорная задача может затрагивать расчёты, налоги, корпоративные полномочия, недвижимость или будущий спор. Кратко опишите, что нужно сделать и на какой стадии находится вопрос — мы определим подходящий состав помощи.
              </p>
            </div>
            <a
              href="#contact-form"
              onClick={() => setActiveContext('custom-situation')}
              className="btn btn-gold"
              style={{ padding: '14px 28px', whiteSpace: 'nowrap' }}
            >
              Обсудить задачу
            </a>
          </div>
        </div>
      </section>

      {/* ═══ 4. КАКИЕ ДОГОВОРЫ ПРОВЕРЯЕМ И РАЗРАБАТЫВАЕМ ═══ */}
      <section style={{ backgroundColor: 'var(--color-white)', padding: '64px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 36px' }}>
            <h2 style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              Работаем с основными договорами бизнеса
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Содержание проверки зависит не от названия документа, а от сделки, распределения обязанностей, порядка расчётов и доказательств исполнения. Работаем как с типовыми, так и со смешанными договорными конструкциями.
            </p>
          </div>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            justifyContent: 'center',
            maxWidth: '960px',
            margin: '0 auto'
          }}>
            {contractTypes.map((item, idx) => (
              <span
                key={idx}
                style={{
                  background: 'var(--color-bg-light)',
                  border: '1px solid var(--color-border)',
                  padding: '10px 18px',
                  fontSize: '14px',
                  color: 'var(--color-deep-blue)',
                  fontWeight: 500,
                  display: 'inline-block'
                }}
              >
                {item}
              </span>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <p style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>
              Строительный подряд относится к отраслевому направлению{' '}
              <Link
                href="/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/"
                style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'underline' }}
              >
                юриста по недвижимости и строительству для бизнеса
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ 5. ЧТО СДЕЛАЕТ ДОГОВОРНЫЙ ЮРИСТ ═══ */}
      <section style={{ backgroundColor: 'var(--color-bg-light)', padding: '64px 0', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 44px' }}>
            <h2 style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              Что сделает договорный юрист
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Состав работы зависит от стадии: проект договора, действующая система документов или уже возникший конфликт. До начала работы согласуем конкретный результат и границы задания.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px'
          }}>
            {lawyerActions.map((act, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  borderTop: '2px solid var(--color-gold)',
                  padding: '28px 24px'
                }}
              >
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '10px' }}>
                  {act.title}
                </h3>
                <p style={{ fontSize: '14.5px', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>
                  {act.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 6. ЧТО ПОДГОТОВИТЬ ДЛЯ КОНСУЛЬТАЦИИ ═══ */}
      <section style={{ backgroundColor: 'var(--color-white)', padding: '64px 0' }}>
        <div className="container">
          <div style={{
            background: 'var(--color-bg-light)',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '40px 36px',
            maxWidth: '920px',
            margin: '0 auto'
          }}>
            <h2 style={{ fontSize: '26px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              Что подготовить для консультации
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
              Для первого разговора достаточно кратко описать задачу и назвать стадию. Для содержательного анализа обычно понадобятся документы ниже; точный перечень юрист уточнит после знакомства с ситуацией:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {prepChecklist.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ color: 'var(--color-gold)', fontSize: '18px', lineHeight: 1, marginTop: '2px' }}>✓</div>
                  <div style={{ fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>
                    {item}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '24px', paddingTop: '18px', borderTop: '1px solid var(--color-border)', fontSize: '13.5px', color: 'var(--color-text-muted)' }}>
              Не передавайте конфиденциальные документы через открытую форму на сайте. После первичного звонка юрист согласует защищённый и удобный канал обмена файлами.
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 7. КАК ПРОХОДИТ РАБОТА (01 - 05) ═══ */}
      <section style={{ backgroundColor: 'var(--color-bg-light)', padding: '64px 0', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 44px' }}>
            <h2 style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              Как проходит работа
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Можно поручить отдельный этап или согласовать комплексную работу. Взаимодействуем с руководителем, штатным юристом и профильными подразделениями компании.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px'
          }}>
            {workSteps.map((step, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  padding: '24px 20px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{
                  fontSize: '28px',
                  fontWeight: 800,
                  color: 'var(--color-gold)',
                  fontFamily: 'var(--font-serif)',
                  lineHeight: 1,
                  marginBottom: '12px'
                }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '10px' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-muted)', lineHeight: 1.55, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '32px',
            background: 'var(--color-white)',
            border: '1px solid var(--color-border)',
            padding: '20px 24px',
            textAlign: 'center',
            fontSize: '14.5px',
            color: 'var(--color-text-muted)',
            lineHeight: 1.6
          }}>
            Консультации и рабочие встречи можно проводить по телефону или видеосвязи, а документы передавать в электронном виде согласованным способом. Необходимость личного участия зависит от задачи, переговоров и судебной стадии.
          </div>
        </div>
      </section>

      {/* ═══ 8. ВОЗМОЖНЫЙ РЕЗУЛЬТАТ РАБОТЫ ═══ */}
      <section style={{ backgroundColor: 'var(--color-white)', padding: '64px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 40px' }}>
            <h2 style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              Что может быть результатом
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Результат зависит от задачи и согласованного этапа. На старте фиксируем, какой документ, вывод или действие должна получить компания.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '16px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {deliverables.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--color-bg-light)',
                  border: '1px solid var(--color-border)',
                  padding: '18px 20px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}
              >
                <div style={{ color: 'var(--color-gold)', fontSize: '18px', lineHeight: 1 }}>✓</div>
                <div style={{ fontSize: '14.5px', color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 9. СТОИМОСТЬ УСЛУГ ═══ */}
      <PricingBlock
        title="Стоимость услуг договорного юриста"
        subtitle="Стоимость зависит от объёма и сложности документов, срочности конкретного задания, количества участников, необходимости переговоров и стадии спора. Состав работ и порядок оплаты согласуем до начала работы."
        tiers={pricingTiers}
      />

      {/* ═══ 10. ПРИМЕРЫ ДОГОВОРНЫХ ЗАДАЧ ═══ */}
      <CasesBlock
        title="Примеры договорных задач"
        cases={cases}
      />

      {/* ═══ 11. СВЯЗАННЫЕ НАПРАВЛЕНИЯ ═══ */}
      <section style={{ backgroundColor: 'var(--color-bg-light)', padding: '64px 0', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 40px' }}>
            <h2 style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              Если задача выходит за рамки договора
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Договорные вопросы часто переплетаются с другими правовыми направлениями бизнеса. Подберём профильного специалиста под вашу задачу.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px'
          }}>
            {relatedDirections.map((rel, idx) => (
              <Link
                key={idx}
                href={rel.link}
                className="card hover-lift"
                style={{
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  padding: '24px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  textDecoration: 'none'
                }}
              >
                <div>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '10px' }}>
                    {rel.title}
                  </h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--color-text-muted)', lineHeight: 1.55, margin: 0 }}>
                    {rel.desc}
                  </p>
                </div>
                <div style={{ marginTop: '16px', fontSize: '13px', color: 'var(--color-primary)', fontWeight: 600 }}>
                  Перейти к направлению →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 12. ОФИС И ГЕОГРАФИЯ РАБОТЫ ═══ */}
      <section style={{ backgroundColor: 'var(--color-white)', padding: '56px 0', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, rgba(23, 50, 77, 0.03) 0%, rgba(193, 160, 102, 0.05) 100%)',
            border: '1px solid var(--color-border)',
            padding: '36px 32px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px'
          }}>
            <div style={{ maxWidth: '680px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '10px' }}>
                Работаем с бизнесом в Липецке и дистанционно
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>
                Принимаем в офисе по адресу: г. Липецк, ул. Советская, д. 35, офис 213. Консультации, анализ и подготовку документов можно организовать дистанционно. Личное участие согласуем, если оно требуется для переговоров, осмотра документов или судебной работы.
              </p>
            </div>
            <div>
              <a href="tel:+74742201525" style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-deep-blue)', textDecoration: 'none', display: 'block', marginBottom: '6px' }}>
                +7 (4742) 20-15-25
              </a>
              <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                Пн-Пт с 9:00 до 18:00
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 13. FAQ ═══ */}
      <FAQBlock
        title="Часто задаваемые вопросы"
        subtitle="Ответы на типовые вопросы о разработке, экспертизе, аудите договоров и разрешении споров."
        faqs={faqs}
      />

      {/* ═══ 14. ФИНАЛЬНЫЙ CTA И ФОРМА ═══ */}
      <section id="contact-form" style={{ backgroundColor: 'var(--color-bg-light)', padding: '64px 0', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 36px' }}>
            <h2 style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '12px' }}>
              Обсудите договорную задачу с юристом
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Кратко опишите, что нужно сделать: подготовить или проверить договор, оценить договорную систему либо подключиться к спору. Мы уточним обстоятельства и сообщим, какие материалы понадобятся для дальнейшего разбора.
            </p>
          </div>

          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <ContactsForm
              title=""
              subtitle=""
              buttonText="Оставить заявку"
              hiddenFields={[{ name: 'context', value: activeContext }]}
            />
            <div style={{ marginTop: '16px', fontSize: '12.5px', color: 'var(--color-text-muted)', textAlign: 'center', lineHeight: 1.5 }}>
              Не указывайте в форме коммерческую тайну, персональные данные работников и контрагентов, банковские реквизиты и другие конфиденциальные сведения. Документы можно передать после согласования безопасного способа связи.
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
