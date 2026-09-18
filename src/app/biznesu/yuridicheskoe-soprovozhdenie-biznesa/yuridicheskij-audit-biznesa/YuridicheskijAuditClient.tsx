'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock, { FAQItem } from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import ProcessBlock, { ProcessStep } from '@/components/ProcessBlock';
import PricingBlock, { PricingTier } from '@/components/PricingBlock';
import SpecialistBlock from '@/components/SpecialistBlock';

export default function YuridicheskijAuditClient() {
  const situations = [
    {
      tag: 'Масштабирование',
      title: 'Бизнес масштабировался, а юридические процессы не менялись',
      desc: 'Компания выросла, открылись новые филиалы или направления, но договоры и порядок согласования решений остались на уровне раннего стартапа.'
    },
    {
      tag: 'Смена руководства',
      title: 'Смена генерального директора или ключевого собственника',
      desc: 'Новый руководитель или инвестор принимает дела и хочет зафиксировать объективное состояние обязательств, активов и скрытых юридических рисков.'
    },
    {
      tag: 'Хаос в документах',
      title: 'Разрозненная подготовка договоров и доверенностей',
      desc: 'Договоры, кадровые приказы и доверенности оформляются разными сотрудниками без единого регламента, юридической проверки и входного контроля.'
    },
    {
      tag: 'Внезапная проверка',
      title: 'Судебный иск, крупный штраф или предписание госоргана',
      desc: 'Возник конкретный конфликт с контрагентом или надзорным органом, и необходимо проверить, повторяется ли причина в других сделках компании.'
    },
    {
      tag: 'Сделка или инвестор',
      title: 'Подготовка к сделке купли-продажи, реорганизации или кредитованию',
      desc: 'Планируется привлечение проектного финансирования, слияние или продажа активов, требующие независимой правовой оценки чистоты бизнеса.'
    },
    {
      tag: 'Переход на аутсорсинг',
      title: 'Отказ от неэффективного юриста или переход на сопровождение',
      desc: 'Собственник планирует передать юридическую функцию на абонентское обслуживание, но точный объём уязвимостей и первоочередных задач не определён.'
    }
  ];

  const urgentCards = [
    {
      title: 'Договоры с неограниченной ответственностью и чужой подсудностью',
      desc: 'Подписание входящих форм контрагентов без аудита условий создаёт скрытые неустойки, автоматическую пролонгацию и подсудность в отдалённых регионах РФ.'
    },
    {
      title: 'Подписание документов лицами с непроверенными полномочиями',
      desc: 'Отсутствие нотариальных доверенностей и превышение лимитов директора по уставу дают контрагентам возможность оспорить сделку и уклониться от оплаты.'
    },
    {
      title: 'Накопление трудовых и налоговых нарушений перед проверкой',
      desc: 'Ошибки в локальных нормативных актах, договорах с самозанятыми и документах по 152-ФЗ влекут предписания контролирующих органов и блокировки счетов.'
    }
  ];

  const auditModules = [
    {
      title: 'Корпоративный модуль',
      focus: 'Устав, решения участников, полномочия органов управления, структура владения, протоколы общих собраний и история существенных корпоративных действий.',
      notReplaces: 'Не подменяет отдельную сделку с долей ООО, корпоративный судебный спор или регистрацию изменений в ЕГРЮЛ.'
    },
    {
      title: 'Договорный модуль',
      focus: 'Система договорной работы, типовые формы компании, полномочия лиц при подписании, выборка ключевых контрактов, регламенты согласования и хранения.',
      notReplaces: 'Не подменяет сплошную правовую экспертизу каждого действующего договора или разработку полного пакета с нуля.'
    },
    {
      title: 'Трудовой модуль',
      focus: 'Ключевые локальные нормативные акты, трудовые договоры, процедуры приема, перевода и увольнения, материальная ответственность и зоны риска работодателя.',
      notReplaces: 'Не подменяет сплошной кадровый аудит архивного делопроизводства, расчет заработной платы или ведение трудового спора.'
    },
    {
      title: 'Претензии и суды',
      focus: 'Реестр неисполненных обязательств, претензионная переписка, открытые судебные дела, исполнительные листы и выявление повторяющихся причин конфликтов.',
      notReplaces: 'Не подменяет процессуальное ведение конкретного арбитражного дела или фактическое взыскание задолженности.'
    },
    {
      title: 'Активы и недвижимость',
      focus: 'Правовые основания владения и пользования коммерческой недвижимостью, транспортом и оборудованием, лицензии, допуски и согласованные обременения.',
      notReplaces: 'Не подменяет строительно-техническую экспертизу объектов, рыночную оценку или специализированную проверку недвижимости.'
    },
    {
      title: 'Персональные данные (152-ФЗ)',
      focus: 'Локальные документы оператора ПДн, согласия сотрудников и клиентов, политика конфиденциальности, роли ответственных и типовые маршруты данных.',
      notReplaces: 'Не подменяет технический аудит информационной безопасности, сетевую защиту и сертификацию средств шифрования.'
    },
    {
      title: 'Специальные риски (КДЛ, банкротство, 115-ФЗ)',
      focus: 'Правовые индикаторы признаков банкротства, субсидиарной ответственности, налоговой добросовестности контрагентов и запросов банков по 115-ФЗ.',
      notReplaces: 'Не подменяет полноценную налоговую реконструкцию, финансово-экономическую экспертизу банкротства или снятие блокировки счёта.'
    }
  ];

  const perimeterSteps = [
    {
      num: '01',
      title: 'Определение цели аудита',
      desc: 'Фиксируем, для чего проводится проверка: плановая инвентаризация, подготовка к сделке или разбор системных судебных ошибок.'
    },
    {
      num: '02',
      title: 'Выбор модулей и периода',
      desc: 'Согласуем проверяемые юридические блоки, компании группы, филиалы и глубину ретроспективы (обычно от 1 до 3 лет).'
    },
    {
      num: '03',
      title: 'Формат выборки',
      desc: 'Утверждаем способ анализа: сплошное изучение доступного массива либо репрезентативная выборка наиболее крупных и рисковых контрактов.'
    },
    {
      num: '04',
      title: 'Реестр документов и доступов',
      desc: 'Формируем точный запрос материалов; отдельно фиксируем перечень документов, которые клиент не передает или которые отсутствуют.'
    },
    {
      num: '05',
      title: 'Фиксация формата результата',
      desc: 'Закрепляем структуру итогового отчета, сроки подготовки и регламент очного или дистанционного обсуждения выводов с руководством.'
    }
  ];

  const riskScale = [
    {
      level: 'Критичный',
      badgeColor: '#dc2626',
      meaning: 'Риск требует немедленной управленческой и юридической реакции из-за угрозы крупных убытков, ареста активов или близкого судебного события.',
      action: 'Немедленный первый шаг и привлечение профильного судебного юриста.'
    },
    {
      level: 'Высокий',
      badgeColor: '#ea580c',
      meaning: 'Существенный пробел или нарушение, способные привести к значимым финансовым потерям или ответственности при возникновении конфликта.',
      action: 'Первоочередное исправление по согласованному регламенту.'
    },
    {
      level: 'Средний',
      badgeColor: '#d97706',
      meaning: 'Управляемый риск или процессуальная неточность, требующие плановой корректировки документов без экстренной угрозы остановки деятельности.',
      action: 'Плановое устранение в порядке рабочей очереди.'
    },
    {
      level: 'Низкий / улучшение',
      badgeColor: '#2563eb',
      meaning: 'Локальный недочет с ограниченными последствиями либо возможность оптимизировать формулировки и устойчивость процесса.',
      action: 'Внесение правок при плановом обновлении документации.'
    },
    {
      level: 'Недостаточно данных',
      badgeColor: '#64748b',
      meaning: 'Вывод невозможен из-за отсутствия документа, неполноты архива или отсутствия пояснений со стороны ответственных сотрудников.',
      action: 'Указание конкретных недостающих сведений в отчете.'
    }
  ];

  const processSteps: ProcessStep[] = [
    {
      num: '01',
      title: 'Первичная диагностика',
      desc: 'Обсуждаем цели собственника, структуру бизнеса, известные проблемные зоны и ключевые ожидания от проведения аудита.'
    },
    {
      num: '02',
      title: 'Согласование периметра и NDA',
      desc: 'Подписываем соглашение о конфиденциальности, утверждаем модули, объекты, глубину периода и график проверки.'
    },
    {
      num: '03',
      title: 'Сбор и систематизация материалов',
      desc: 'Принимаем документы по защищенному каналу, формируем электронный реестр и фиксируем недостающие сведения.'
    },
    {
      num: '04',
      title: 'Правовой анализ',
      desc: 'Сопоставляем локальные акты, фактические цепочки согласований, договорные условия и актуальную судебную практику арбитража.'
    },
    {
      num: '05',
      title: 'Классификация находок',
      desc: 'Ранжируем выявленные риски по шкале критичности с учетом вероятности наступления негативных последствий для бизнеса.'
    },
    {
      num: '06',
      title: 'Письменный отчёт и презентация',
      desc: 'Передаем сводный отчет, реестр рисков, правовые основания и дорожную карту рекомендаций на встрече с руководством.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Экспресс-скрининг',
      subtitle: 'Диагностика ключевой зоны',
      price: 'от 30 000 ₽',
      popular: false,
      features: [
        { name: 'проверка одного согласованного блока деятельности', value: 'Да' },
        { name: 'анализ выборки базовых документов компании', value: 'Да' },
        { name: 'краткая справка с реестром ключевых уязвимостей', value: 'Да' },
        { name: 'рекомендации по приоритетным направлениям', value: 'Да' },
        { name: 'срок проведения — от 3 до 5 рабочих дней', value: 'Да' }
      ],
      buttonText: 'Заказать экспресс-скрининг',
      buttonHref: '#form'
    },
    {
      title: 'Модульный аудит',
      subtitle: 'Глубокая проверка 1–2 модулей',
      price: 'от 55 000 ₽',
      popular: true,
      badgeText: 'Востребовано',
      features: [
        { name: 'детальный анализ 1–2 выбранных модулей', value: 'Да' },
        { name: 'исследование выборки до 50 ключевых документов', value: 'Да' },
        { name: 'интервью с согласованными ответственными лицами', value: 'Да' },
        { name: 'письменный отчет со шкалой критичности рисков', value: 'Да' },
        { name: 'очная или онлайн-презентация выводов руководству', value: 'Да' }
      ],
      buttonText: 'Выбрать модули',
      buttonHref: '#form'
    },
    {
      title: 'Комплексный правовой аудит',
      subtitle: 'Полная проверка бизнеса',
      price: 'от 95 000 ₽',
      popular: false,
      features: [
        { name: 'охват от 3 до 5 ключевых модулей компании', value: 'Да' },
        { name: 'анализ корпоративной, договорной и кадровой систем', value: 'Да' },
        { name: 'проверка активов, лицензий и открытых арбитражных споров', value: 'Да' },
        { name: 'сводная карта правовых рисков всей группы', value: 'Да' },
        { name: 'пошаговая дорожная карта устранения замечаний', value: 'Да' }
      ],
      buttonText: 'Обсудить комплексный аудит',
      buttonHref: '#form'
    },
    {
      title: 'Исправление выявленных рисков',
      subtitle: 'Внедрение рекомендаций',
      price: 'от 35 000 ₽',
      popular: false,
      features: [
        { name: 'разработка новых форм договоров и регламентов', value: 'Да' },
        { name: 'приведение в порядок решений участников и устава', value: 'Да' },
        { name: 'урегулирование кадровых процедур и доверенностей', value: 'Да' },
        { name: 'подготовка ответов на запросы органов и банков', value: 'Да' },
        { name: 'плавный переход на постоянное абонентское обслуживание', value: 'Да' }
      ],
      buttonText: 'Обсудить устранение рисков',
      buttonHref: '#form'
    }
  ];

  const sampleCases: CaseData[] = [
    {
      category: 'Производственно-торговая группа',
      title: 'Комплексный аудит перед масштабированием и открытием кредитной линии',
      problem: 'Компания планировала открытие сети филиалов и привлечение банковского финансирования на 50 млн ₽. Руководство не владело точной картиной рисков в договорах поставки и полномочиях топ-менеджеров.',
      action: 'Провели аудит 4 модулей: корпоративного, договорного, трудового и прав на производственные цеха. Исследовали более 80 контрактов, выявили расхождения в лимитах сделок генерального директора и риски в материальной ответственности.',
      result: 'Устранены противоречия в уставе и типовых контрактах, сформирован закрытый реестр замечаний для банка. Кредитная линия успешно одобрена.'
    },
    {
      category: 'Логистическая компания',
      title: 'Модульная проверка договоров перевозки после спорной претензии контрагента',
      problem: 'После получения претензии с требованием неустойки на 4,2 млн ₽ собственник инициировал аудит типовых соглашений и процесса визирования экспедиторских заявок.',
      action: 'Выявили, что экспедиторы подписывали заявки без проверки доверенностей, а в типовых договорах отсутствовало ограничение ответственности. Переработали формы договоров и внедрили обязательный чек-лист входного контроля.',
      result: 'Предотвращены повторные штрафные требования контрагентов, выстроена безопасная цепочка подтверждения полномочий представителей.'
    },
    {
      category: 'Строительно-монтажная организация',
      title: 'Инвентаризация обязательств и судебных споров перед передачей на аутсорсинг',
      problem: 'Руководство решило отказаться от штатного юриста в пользу внешнего обслуживания «Де-Юре», но требовалась полная ревизия накопленных за 3 года нерешённых вопросов.',
      action: 'Классифицировали открытые претензии, проверили соответствие требованиям СРО и выявили 14 договоров подряда с просроченными гарантийными обязательствами. Составили дорожную карту первоочередных мер.',
      result: 'Все спорные ситуации взяты под процессуальный контроль, устранены риски по членству в СРО, организован системный переход на абонентское обслуживание.'
    }
  ];

  const faqItems: FAQItem[] = [
    {
      q: 'Что такое юридический аудит бизнеса?',
      a: 'Это согласованная проверка правовой стороны документов и процессов компании. Юристы фиксируют периметр, анализируют материалы, классифицируют выявленные риски и готовят письменные выводы и рекомендации.'
    },
    {
      q: 'Чем юридический аудит отличается от проверки отдельного договора?',
      a: 'Проверка договора касается конкретной сделки. Аудит оценивает систему: кто принимает решения, как оформляются полномочия, где повторяются правовые пробелы и какие риски взаимно связаны между собой.'
    },
    {
      q: 'Обязательно ли проверять сразу всю компанию?',
      a: 'Нет. Можно выбрать один или несколько модулей: корпоративный, договорный, трудовой, претензионно-судебный или активы. Периметр определяется текущей целью и фиксируется до начала работы.'
    },
    {
      q: 'Юридический аудит — это бухгалтерский аудит?',
      a: 'Нет. «Де-Юре» оценивает правовые риски в согласованном объёме и не выдаёт аудиторское заключение о бухгалтерской отчётности. Мы чётко отделяем юридический анализ от налогового и финансового учёта.'
    },
    {
      q: 'Какие документы нужны для старта аудита?',
      a: 'Список зависит от выбранных модулей. Для первой консультации достаточно описать структуру бизнеса, цели и известные руководству спорные вопросы. Точный перечень запрашивается после согласования периметра.'
    },
    {
      q: 'Можно ли провести аудит, если часть архивных документов отсутствует?',
      a: 'Да. Мы оценим доступный периметр, однако отсутствие материалов будет зафиксировано в отчёте: юрист укажет, какие выводы нельзя сделать однозначно из-за отсутствия документов.'
    },
    {
      q: 'Сколько времени занимает юридический аудит?',
      a: 'Срок зависит от количества компаний группы, модулей и объёма материалов. Экспресс-скрининг занимает 3–5 рабочих дней, модульный аудит — 1–2 недели, комплексная проверка бизнеса — от 2 до 4 недель.'
    },
    {
      q: 'Входит ли исправление выявленных нарушений в стоимость проверки?',
      a: 'Аудит выявляет, описывает и ранжирует риски. Разработка новых форм документов, реорганизация, судебное представительство или внесение изменений в ЕГРЮЛ оцениваются отдельным проектом либо в рамках абонентского обслуживания.'
    },
    {
      q: 'Гарантирует ли аудит полное отсутствие претензий и судебных исков?',
      a: 'Аудит устраняет неопределённость и ликвидирует внутренние уязвимости в согласованном периметре, но не может исключить недобросовестные действия контрагентов или изменение толкования норм судебной практикой.'
    },
    {
      q: 'Можно ли после проведения аудита перейти на регулярное юридическое сопровождение?',
      a: 'Да, и это наиболее частый сценарий. Отчёт об аудите становится практической дорожной картой для юристов «Де-Юре», которые планомерно внедряют рекомендации в рамках абонентского договора.'
    }
  ];

  const relatedServices = [
    {
      title: 'Юридическое сопровождение бизнеса',
      desc: 'Комплексный аутсорсинг правовых задач компании или усиление штатного юриста.',
      link: '/biznesu/yuridicheskoe-soprovozhdenie-biznesa/'
    },
    {
      title: 'Договорное право и экспертиза',
      desc: 'Разработка договоров с нуля, аудит входящих соглашений и протоколы разногласий.',
      link: '/biznesu/dogovornoe-pravo/'
    },
    {
      title: 'Корпоративный юрист',
      desc: 'Сделки с долями ООО, выход участников, корпоративные договоры и споры партнеров.',
      link: '/biznesu/korporativnyj-yurist/'
    },
    {
      title: 'Банкротство бизнеса и защита КДЛ',
      desc: 'Защита руководителей от субсидиарной ответственности и сопровождение банкротства.',
      link: '/biznesu/bankrotstvo-biznesa/'
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
        areaServed: ['Липецк', 'Липецкая область'],
        employee: {
          '@id': 'https://dejure-help.ru/specialisty/nacheshnikov-vladimir-viktorovich/#person'
        }
      },
      {
        '@type': 'Person',
        '@id': 'https://dejure-help.ru/specialisty/nacheshnikov-vladimir-viktorovich/#person',
        name: 'Владимир Викторович Начешников',
        url: 'https://dejure-help.ru/specialisty/nacheshnikov-vladimir-viktorovich/',
        worksFor: {
          '@id': 'https://dejure-help.ru/#legalservice'
        }
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/yuridicheskoe-soprovozhdenie-biznesa/yuridicheskij-audit-biznesa/#service',
        name: 'Юридический аудит бизнеса в Липецке',
        serviceType: 'Правовой аудит компаний, Due Diligence и оценка рисков',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        url: 'https://dejure-help.ru/biznesu/yuridicheskoe-soprovozhdenie-biznesa/yuridicheskij-audit-biznesa/',
        description: 'Комплексный юридический аудит бизнеса в Липецке: выявление рисков в договорах, корпоративной структуре, трудовых процессах и активах с подготовкой письменного отчета.'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/biznesu/yuridicheskoe-soprovozhdenie-biznesa/yuridicheskij-audit-biznesa/#breadcrumb',
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
            name: 'Юридическое сопровождение бизнеса',
            item: 'https://dejure-help.ru/biznesu/yuridicheskoe-soprovozhdenie-biznesa/'
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Юридический аудит бизнеса',
            item: 'https://dejure-help.ru/biznesu/yuridicheskoe-soprovozhdenie-biznesa/yuridicheskij-audit-biznesa/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/biznesu/yuridicheskoe-soprovozhdenie-biznesa/yuridicheskij-audit-biznesa/#faq',
        mainEntity: faqItems.map(item => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a
          }
        }))
      }
    ]
  };

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
            <Link href="/biznesu/yuridicheskoe-soprovozhdenie-biznesa/">Юридическое сопровождение бизнеса</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Юридический аудит бизнеса</span>
          </>
        }
        superTitle={
          <span style={{ whiteSpace: 'normal', display: 'inline-block', lineHeight: 1.4 }}>
            <span style={{ display: 'inline-block' }}>ЮРИДИЧЕСКИЙ АУДИТ КОМПАНИЙ • КОМПЛЕКСНЫЙ</span> <br />
            <span style={{ display: 'inline-block' }}>ПРАВОВОЙ АНАЛИЗ • Липецк и область</span>
          </span>
        }
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Юридический аудит
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              бизнеса в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Определим периметр проверки, выявим скрытые правовые риски в договорах, корпоративной структуре и кадровых процессах, подготовим письменный отчёт с дорожной картой исправлений.
          </span>
        }
        primaryCtaText="Обсудить периметр аудита"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_yuridicheskij_audit"
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
        imageSubtitle="Куратор направления правового аудита и арбитража"
        imageObjectPosition="center 15%"
        trustItems={[
          {
            text: (
              <span>
                <strong>Куратор направления</strong> — Владимир Викторович Начешников
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Письменный отчёт</strong> с четкой градацией рисков от критичных до рекомендаций
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Согласованный периметр</strong>: модульный или сплошной аудит без лишних услуг
              </span>
            )
          }
        ]}
      />

      {/* ═══ БЛОК 2: ТИПОВЫЕ СИТУАЦИИ (#situations) ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'inline-block' }}>Когда бизнесу необходим</span> <br />
              <span style={{ display: 'inline-block' }}>независимый юридический аудит</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Правовой аудит позволяет собственнику и топ-менеджменту увидеть объективное состояние документации до того, как системные уязвимости приведут к судебным искам, штрафам или блокировкам.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '32px' }}>
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
                  {sit.tag && (
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
                  )}

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
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('form');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else window.location.hash = 'form';
                  }}
                >
                  <span>Согласовать проверку</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            ))}
          </div>

          <div style={{
            background: 'linear-gradient(135deg, var(--color-deep-blue) 0%, #17324D 100%)',
            padding: '36px 40px',
            color: '#FFFFFF',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px',
            borderLeft: '4px solid var(--color-gold)'
          }}>
            <div style={{ maxWidth: '650px' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', margin: '0 0 8px 0', color: '#FFFFFF' }}>
                Не нашли описание своей ситуации?
              </h3>
              <p style={{ margin: 0, fontSize: '14.5px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.5 }}>
                Проанализируем текущую модель документооборота компании и определим целесообразность точечной или комплексной проверки.
              </p>
            </div>
            <a
              href="#form"
              className="btn"
              style={{
                background: 'var(--color-gold)',
                color: 'var(--color-deep-blue)',
                padding: '14px 28px',
                fontWeight: 700,
                fontSize: '14px',
                whiteSpace: 'nowrap',
                textDecoration: 'none'
              }}
            >
              Индивидуальный расчет
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: СРОЧНОСТЬ (#urgent) ═══ */}
      <section className="section" id="urgent" style={{ background: 'var(--color-deep-blue)', color: '#FFFFFF', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '60px', height: '2px', background: 'var(--color-gold)' }}></div>
              <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Зоны скрытых рисков
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 3.8vw, 38px)', color: '#FFFFFF', margin: '0 0 16px 0', lineHeight: 1.25 }}>
              Скрытые юридические риски, приводящие к прямым убыткам бизнеса
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.82)', margin: 0, lineHeight: 1.65 }}>
              Ошибки в типовых договорах и полномочиях годами остаются незамеченными, пока не возникнет первый судебный спор или налоговая ревизия:
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '20px', marginBottom: '40px' }}>
            {urgentCards.map((card, cIdx) => (
              <div
                key={cIdx}
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
                      {card.title}
                    </div>
                  </div>
                  <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '14px', lineHeight: 1.55, margin: 0 }}>
                    {card.desc}
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
              <strong style={{ color: '#FFFFFF' }}>Предупреждение:</strong> Выявить правовую уязвимость в 10 раз дешевле, чем вести арбитражный процесс.
            </span> <br className="hidden-mobile" />
            <span style={{ display: 'inline-block' }}>
              Проведём независимый юридический скрининг документации вашей компании с фиксацией персональных рекомендаций.
            </span>
          </div>

          <style dangerouslySetInnerHTML={{__html: `
            .urgent-card {
              transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
            }
            .urgent-card:hover {
              transform: translateY(-6px);
              box-shadow: 0 18px 36px rgba(0,0,0,0.28) !important;
            }
            .btn-urgent-outline {
              border: 1px solid rgba(255,255,255,0.8) !important;
              color: #FFFFFF !important;
              background: transparent !important;
              transition: all 0.3s ease !important;
            }
            .btn-urgent-outline:hover {
              background: rgba(255,255,255,0.18) !important;
              color: #FFFFFF !important;
              border-color: #FFFFFF !important;
            }
            .btn-urgent-call {
              display: inline-block !important;
              border-radius: 0 !important;
              text-decoration: none !important;
              background-color: var(--color-gold) !important;
              color: var(--color-deep-blue) !important;
              font-weight: 700 !important;
              transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
              border: 1px solid var(--color-gold) !important;
            }
            .btn-urgent-call:hover {
              background-color: #FFFFFF !important;
              color: #0B1C2A !important;
              border-color: #FFFFFF !important;
              transform: translateY(-2px);
            }
          `}} />

          {/* Зона связи */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '28px', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <a href="tel:+74742201525" style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.02em' }} data-analytics="phone_click">
              +7 (4742) 20-15-25
            </a>
            <a href="tel:+74742201525" className="btn-urgent-call" style={{ padding: '14px 28px', fontSize: '15px' }} data-analytics="phone_click">
              Позвонить юристу
            </a>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <a href="#form" className="btn btn-urgent-outline" style={{ padding: '14px 28px', fontSize: '15px' }}>
                Срочная консультация
              </a>
              <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px' }}>
                Ответим в рабочее время и согласуем независимый аудит
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: МОДУЛИ АУДИТА (#check) ═══ */}
      <section className="section bg-white" id="check" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
              Модульная структура
            </div>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.25 }}>
              <span style={{ display: 'inline-block' }}>Что именно можно проверить</span> <br />
              <span style={{ display: 'inline-block' }}>в рамках правового аудита</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Вы можете заказать как комплексный аудит всей группы компаний, так и отдельный целевой модуль под конкретную задачу бизнеса:
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '24px', marginBottom: '40px' }}>
            {auditModules.map((mod, idx) => (
              <div
                key={idx}
                className="card hover-lift"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid var(--color-border)',
                  borderTop: '4px solid var(--color-gold)',
                  borderRadius: '0',
                  padding: '30px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)'
                }}
              >
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
                    Модуль 0{idx + 1}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: 'var(--color-deep-blue)', margin: '0 0 12px 0', lineHeight: 1.35, fontWeight: 700 }}>
                    {mod.title}
                  </h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: '0 0 16px 0' }}>
                    <strong style={{ color: 'var(--color-deep-blue)' }}>Что проверяем:</strong> {mod.focus}
                  </p>
                </div>
                <div style={{
                  borderTop: '1px solid var(--color-border-light)',
                  paddingTop: '12px',
                  fontSize: '12px',
                  color: 'var(--color-text-muted)',
                  fontStyle: 'italic',
                  lineHeight: 1.45
                }}>
                  {mod.notReplaces}
                </div>
              </div>
            ))}

            {/* 8-я карточка: Персональный аудит */}
            <div
              className="card"
              style={{
                background: 'linear-gradient(145deg, #10273B 0%, #17324D 100%)',
                border: '1px solid #1A3956',
                borderTop: '4px solid var(--color-gold)',
                borderRadius: '0',
                padding: '30px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 4px 16px rgba(16, 39, 59, 0.12)',
                color: '#FFFFFF'
              }}
            >
              <div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
                  Индивидуальный аудит
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: '#FFFFFF', margin: '0 0 12px 0', lineHeight: 1.35, fontWeight: 700 }}>
                  Персональный периметр под вашу отрасль
                </h3>
                <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, margin: 0 }}>
                  Сформируем индивидуальный перечень модулей с учётом масштаба бизнеса, количества юридических лиц и специфики контрагентов.
                </p>
              </div>
              <div style={{ marginTop: '20px' }}>
                <a
                  href="#form"
                  className="btn"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    backgroundColor: 'var(--color-gold)',
                    color: 'var(--color-deep-blue)',
                    fontWeight: 700,
                    fontSize: '14px',
                    padding: '12px 20px',
                    borderRadius: '0',
                    textDecoration: 'none'
                  }}
                >
                  Заказать расчёт
                </a>
              </div>
            </div>
          </div>

          {/* Правовые границы */}
          <div style={{
            background: 'var(--gradient-cream)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '24px 30px',
            border: '1px solid var(--color-border)',
            borderLeftWidth: '4px'
          }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0', fontWeight: 700 }}>
              Правовые границы аудита: что юридическая проверка не заменяет
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
              Юридический аудит оценивает исключительно правовую сторону согласованных документов и процедур. Он не является обязательным аудитом бухгалтерской отчётности, налоговой инспекцией, строительно-технической экспертизой или независимой оценкой рыночной стоимости активов. Если для однозначного вывода требуются специальные познания, юрист прямо фиксирует ограничение в письменном отчёте.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: КАК СОГЛАСУЕТСЯ ПЕРИМЕТР ПРОВЕРКИ (#perimeter) ═══ */}
      <section className="section bg-light" id="perimeter" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
              Регламент согласования
            </div>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.25 }}>
              <span style={{ display: 'inline-block' }}>Как согласуется периметр</span> <br />
              <span style={{ display: 'inline-block' }}>проверки бизнеса</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Мы не требуем сразу передавать весь архив за 5 лет. Подготовка проходит последовательно и прозрачно:
            </p>
          </div>

          <div className="grid grid-5" style={{ gap: '20px' }}>
            {perimeterSteps.map((step, idx) => (
              <div
                key={idx}
                className="card hover-lift"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  borderRadius: '0',
                  padding: '28px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
              >
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)',
                  border: '2px solid var(--color-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '18px',
                  fontWeight: 700,
                  color: 'var(--color-deep-blue)',
                  marginBottom: '16px'
                }}>
                  {step.num}
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '16.5px', color: 'var(--color-deep-blue)', margin: '0 0 10px 0', lineHeight: 1.35, fontWeight: 700 }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 6: ШКАЛА РИСКОВ И ИТОГИ АУДИТА (#results) ═══ */}
      <section className="section bg-white" id="results" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
              Методология и результаты
            </div>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.25 }}>
              <span style={{ display: 'inline-block' }}>Шкала классификации</span> <br />
              <span style={{ display: 'inline-block' }}>выявленных рисков</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Все находки ранжируются по утверждённой шкале. Руководитель видит не абстрактный перечень замечаний, а прозрачную приоритизацию:
            </p>
          </div>

          <div className="grid grid-5" style={{ gap: '20px', marginBottom: '56px' }}>
            {riskScale.map((item, idx) => (
              <div
                key={idx}
                className="card hover-lift"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid var(--color-border)',
                  borderTop: `4px solid ${item.badgeColor}`,
                  borderRadius: '0',
                  padding: '24px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)'
                }}
              >
                <div>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '12px',
                    padding: '4px 10px',
                    background: 'rgba(23, 50, 77, 0.04)',
                    borderRadius: '2px'
                  }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: item.badgeColor }} />
                    <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-deep-blue)' }}>{item.level}</span>
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: '0 0 16px 0' }}>
                    {item.meaning}
                  </p>
                </div>
                <div style={{ borderTop: '1px solid var(--color-border-light)', paddingTop: '12px', fontSize: '12px', color: 'var(--color-text-muted)', lineHeight: 1.45 }}>
                  <strong style={{ color: 'var(--color-deep-blue)' }}>Действие:</strong> {item.action}
                </div>
              </div>
            ))}
          </div>

          {/* Что получает клиент & Пример находки */}
          <div className="grid grid-2" style={{ gap: '32px' }}>
            <div
              className="card"
              style={{
                background: '#FFFFFF',
                padding: '36px 32px',
                border: '1px solid var(--color-border)',
                borderTop: '4px solid var(--color-primary)',
                borderRadius: '0',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)'
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', color: 'var(--color-deep-blue)', margin: '0 0 20px 0', fontWeight: 700 }}>
                Что получает руководство по итогам аудита
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  'Чёткое описание согласованного периметра и ограничений проверки',
                  'Перечень всех изученных договоров, актов и решений органов управления',
                  'Структурированный реестр рисков со ссылками на пункты и нормы права',
                  'Оценку критичности каждого замечания по утверждённой шкале',
                  'Первоочередной шаг и пошаговую дорожную карту исправлений',
                  'Очную либо дистанционную презентацию результатов первому лицу'
                ].map((deliv, dIdx) => (
                  <li key={dIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="card"
              style={{
                background: 'var(--gradient-cream)',
                padding: '36px 32px',
                border: '1px solid var(--color-border)',
                borderTop: '4px solid var(--color-gold)',
                borderRadius: '0',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Пример оформления в отчёте
                </span>
                <span style={{
                  fontSize: '11px',
                  padding: '3px 10px',
                  backgroundColor: 'rgba(234, 88, 12, 0.12)',
                  color: '#ea580c',
                  fontWeight: 700,
                  borderRadius: '2px'
                }}>
                  Уровень: Высокий
                </span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', color: 'var(--color-deep-blue)', margin: '0 0 16px 0', fontWeight: 700, lineHeight: 1.35 }}>
                Находка: Подписание договоров без подтверждения полномочий
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                <div style={{ background: '#FFFFFF', padding: '12px 16px', borderLeft: '3px solid var(--color-primary)' }}>
                  <strong style={{ color: 'var(--color-deep-blue)' }}>Основание:</strong> Выборка контрактов за 2025 г., отсутствие доверенностей в архиве.
                </div>
                <div style={{ background: '#FFFFFF', padding: '12px 16px', borderLeft: '3px solid #ea580c' }}>
                  <strong style={{ color: 'var(--color-deep-blue)' }}>Риск:</strong> Возможность оспаривания сделок и отказа контрагентов от оплаты поставленного товара.
                </div>
                <div style={{ background: '#FFFFFF', padding: '12px 16px', borderLeft: '3px solid var(--color-gold)' }}>
                  <strong style={{ color: 'var(--color-deep-blue)' }}>Рекомендация:</strong> Актуализировать матрицу полномочий, выдать нотариальные доверенности и ввести входной контроль договоров.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: КУРАТОР НАПРАВЛЕНИЯ ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name={
          <>
            Владимир<br />
            Викторович Начешников
          </>
        }
        position="Специалист по комплексному сопровождению бизнеса и арбитражным процессам, куратор направления"
        imageUrl="/images/nacheshnikov.jpg"
        imagePosition="center 15%"
        profileHref="/specialisty/nacheshnikov-vladimir-viktorovich/"
        profileText="Подробнее о Владимире Викторовиче Начешникове →"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Юридический аудит бизнеса — это не формальная проверка бумаг, а практическая инвентаризация уязвимостей, защищающая собственника и директора от личной ответственности и финансовых потерь.
          </span>,
          <span key="2" style={{ color: 'var(--color-deep-blue)', display: 'block', marginTop: '12px' }}>
            Владимир Викторович лично согласовывает периметр проверки компании, контролирует объективность правовых заключений и формирует приоритизированный план первоочередных исправлений.
          </span>
        ]}
        buttonText="Обсудить аудит с куратором"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 6: ПРАКТИКА И КЕЙСЫ ═══ */}
      <CasesBlock
        title={<><span style={{ display: 'inline-block' }}>Практика правового аудита</span> <br /><span style={{ display: 'inline-block' }}>и защиты бизнеса</span></>}
        cases={sampleCases}
        showAllLink="/praktika/"
        showAllText="Смотреть всю практику →"
        showDemoWarning={true}
      />

      {/* ═══ БЛОК 7: ПОРЯДОК РАБОТЫ ═══ */}
      <ProcessBlock
        title="Регламент проведения юридического аудита"
        subtitle="Шесть последовательных этапов: от подписания соглашения о конфиденциальности до очной презентации дорожной карты."
        alignTitle="center"
        steps={processSteps}
        ctaTitle="Готовы провести независимую ревизию процессов?"
        ctaSubtitle="Оставьте заявку на предварительное обсуждение периметра проверки вашей компании."
        ctaButtonText="Обсудить периметр проверки"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 8: ТАРИФЫ И СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость юридического аудита бизнеса"
        subtitle="Прозрачные тарифы в зависимости от выбранного периметра и количества проверяемых модулей."
        tiers={pricingTiers}
        disclaimer="Стоимость специализированных аудитов (с участием внешних оценщиков, строительных экспертов или аудита филиалов за пределами Липецкой области) рассчитывается индивидуально."
        ctaTitle="Рассчитаем точную стоимость аудита компании"
        ctaSubtitle="Оставьте заявку — куратор направления проведет предварительную оценку структуры бизнеса и согласует периметр."
        ctaButtonText="Рассчитать аудит"
        ctaButtonLink="#form"
      />

      {/* ═══ БЛОК 9: FAQ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы руководителей"
        title={<><span>Вопросы и ответы</span> <br /><span>о юридическом аудите бизнеса</span></>}
        subtitle="О регламенте проверки, конфиденциальности данных, глубине выборки и устранении замечаний"
        ctaText="Задать свой вопрос"
        ctaLink="#form"
        faqs={faqItems}
      />

      {/* ═══ БЛОК 10: СВЯЗАННЫЕ УСЛУГИ (#related-services) ═══ */}
      <section className="section" id="related-services" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              <span style={{ display: 'inline-block' }}>Связанные юридические</span> <br />
              <span style={{ display: 'inline-block' }}>услуги для бизнеса</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Устранение выявленных рисков и дальнейшая правовая поддержка компании силами практикующих юристов «Де-Юре».
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '24px', position: 'relative' }}>
            {relatedServices.map((svc, idx) => (
              <Link key={idx} href={svc.link} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                <div
                  className="card service-card hover-lift"
                  style={{
                    height: '100%',
                    minHeight: '200px',
                    padding: '30px 24px',
                    background: '#FFFFFF',
                    border: '1px solid var(--color-border)',
                    borderTop: '4px solid var(--color-primary)',
                    borderRadius: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0', lineHeight: 1.35, fontWeight: 700 }}>
                      {svc.title}
                    </h3>
                    <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                      {svc.desc}
                    </p>
                  </div>
                  <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600, marginTop: '16px', transition: 'color 0.35s ease' }}>
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

      {/* ═══ БЛОК 11: ФИНАЛЬНАЯ ФОРМА (#form) ═══ */}
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
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Обсудите аудит бизнеса</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>с ведущим юристом</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Оставьте заявку. Мы свяжемся с вами в рабочее время, уточним задачи компании и согласуем оптимальный периметр проверки. Документы через сайт загружать не требуется — защищенный канал передачи согласуется индивидуально.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация юриста</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните нам: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (4742) 20-15-25</a>
                </p>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '6px' }}>
                  Липецк, ул. Советская, д. 35, офис 213 (приём по записи)
                </div>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Конфиденциальность:</strong>
                Не указывайте в форме конфиденциальные финансовые сведения, пароли и закрытые договоры. Соглашение о неразглашении (NDA) подписываем до передачи коммерческой тайны.
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Заявка на аудит бизнеса"
                subtitle="Оставьте контакты — юрист свяжется с вами в течение 15 минут в рабочее время."
                subtext="Если вы оставите заявку вечером или в выходной день, мы свяжемся с вами в ближайший рабочий день."
                buttonText="Обсудить аудит компании"
                commentPlaceholder="Кратко опишите сферу деятельности компании и цель проведения проверки…"
                hiddenFields={[
                  { name: 'source_page', value: '/biznesu/yuridicheskoe-soprovozhdenie-biznesa/yuridicheskij-audit-biznesa/' },
                  { name: 'service', value: 'Юридический аудит бизнеса' }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 12: FOOTER ═══ */}
      <Footer />
    </>
  );
}
