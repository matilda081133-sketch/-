'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MilitaryHero from '@/components/MilitaryHero';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import SpecialistBlock from '@/components/SpecialistBlock';
import PricingBlock, { PricingTier } from '@/components/PricingBlock';
import ProcessBlock, { ProcessStep } from '@/components/ProcessBlock';

export default function VzyskanieClient() {
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
        '@id': 'https://dejure-help.ru/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/#breadcrumbs',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Главная', 'item': 'https://dejure-help.ru/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Бизнесу', 'item': 'https://dejure-help.ru/biznesu/' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Взыскание задолженности с юридических лиц', 'item': 'https://dejure-help.ru/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/' }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/#service',
        'url': 'https://dejure-help.ru/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/',
        'name': 'Взыскание задолженности с юридических лиц в Липецке',
        'provider': { '@id': 'https://dejure-help.ru/#organization' },
        'areaServed': [
          { '@type': 'AdministrativeArea', 'name': 'Липецкая область' },
          { '@type': 'Country', 'name': 'Россия' }
        ],
        'description': 'Проверим долг и финансовое состояние должника, проведём претензионную работу, представим интересы в суде и согласуем действия до фактического взыскания.'
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Можно ли взыскать долг, если договор не подписан?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Иногда обязательство подтверждается совокупностью заявок, первичных документов, платежей, переписки и фактического исполнения. Перспективы зависят от содержания и допустимости конкретных доказательств.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Обязательно ли направлять претензию?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Для многих денежных требований в арбитражном процессе действует обязательный досудебный порядок. Срок и правила могут определяться законом или договором, поэтому их проверяют до подачи заявления.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Что можно требовать кроме основного долга?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'В зависимости от основания — договорную неустойку, проценты, убытки и судебные расходы. Одновременное взыскание отдельных санкций и их размер требуют правовой проверки.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Если должник признаёт долг, обязательно ли обращаться в суд?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Нет. Можно оценить соглашение, график, обеспечение и иные способы урегулирования. Важно оформить их так, чтобы не потерять доказательства и возможность дальнейшей защиты.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Можно ли арестовать имущество или счета должника?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Обеспечительные меры применяет суд при наличии предусмотренных законом оснований. Одного желания взыскателя недостаточно; необходимо обосновать риск затруднения или невозможности исполнения.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Сколько длится взыскание?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Срок зависит от претензионного порядка, вида производства, поведения сторон, обжалования и исполнения. До анализа документов нельзя корректно назвать единый срок.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Что делать, если у должника нет имущества?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Нужно оценить деятельность, требования других кредиторов, исполнительные производства, сделки и признаки банкротства. После этого решается, оправданы ли исполнительные или банкротные инструменты.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Можно ли взыскать долг с директора или собственника компании?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Сам по себе долг организации не переходит на руководителя или участника. Личная ответственность возможна только по отдельным основаниям и требует самостоятельной правовой оценки.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Вы работаете, если решение суда уже есть?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Да, применимый объём зависит от исполнительного документа и текущей стадии. Если задача сосредоточена на действиях банка или приставов, она передаётся в профильное направление.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Можно ли работать дистанционно?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Да, если характер дела позволяет обмениваться документами и участвовать в процессе дистанционно. Необходимость личного присутствия определяется после первичной оценки.'
            }
          }
        ]
      }
    ]
  };

  const situations = [
    {
      tag: 'Просрочка оплаты',
      title: 'Контрагент перестал платить',
      desc: 'Есть договор и документы об исполнении, но срок оплаты прошёл. Требуется мотивированная претензия и подготовка к судебному взысканию.'
    },
    {
      tag: 'Оспаривание долга',
      title: 'Должник оспаривает долг',
      desc: 'Не признаёт поставку, объём работ, акт, срок или расчёт. Формируем доказательственную базу и закрываем возражения ответчика.'
    },
    {
      tag: 'Риск потери активов',
      title: 'Есть риск потери активов',
      desc: 'У должника новые иски, исполнительные производства, ликвидация или признаки неплатёжеспособности. Необходимы обеспечительные меры.'
    },
    {
      tag: 'Исполнение решения',
      title: 'Решение суда уже получено',
      desc: 'Нужно определить, предъявлять исполнительный лист напрямую в банк, приставам (ФССП) или использовать банкротный маршрут.'
    },
    {
      tag: 'Дебиторский портфель',
      title: 'Должников много (портфель)',
      desc: 'Нужна единая система работы с пулом просроченной дебиторской задолженности, сегментация по рискам и регулярная отчётность.'
    },
    {
      tag: 'Защита бизнеса',
      title: 'Требуют деньги с вашей компании',
      desc: 'Вашей компании предъявили необоснованную претензию или иск. Защитим от завышенных требований и снизим неустойку.'
    }
  ];

  const urgentItems = [
    {
      title: 'Приближается срок исковой давности',
      desc: 'Окончание 3-летнего срока лишает возможности принудительного взыскания долга при заявлении ответчика в суде.'
    },
    {
      title: 'Должник меняет директора или адрес',
      desc: 'Смена контроля, номинальные руководители или прекращение фактической деятельности часто предшествуют бросанию юрлица.'
    },
    {
      title: 'Новые крупные иски к контрагенту',
      desc: 'Массовые иски других кредиторов повышают риск ареста счетов конкурентами и исчерпания свободных денежных средств.'
    },
    {
      title: 'Публикация о ликвидации или банкротстве',
      desc: 'Появление сообщений на Федресурсе или в Вестнике требует срочного включения в реестр требований и применения спецмер.'
    },
    {
      title: 'Имущество и активы выводятся',
      desc: 'Отчуждение недвижимости, спецтехники или товарных остатков третьим лицам требует немедленного ходатайства об аресте.'
    },
    {
      title: 'Контрагент затягивает подписание сверки',
      desc: 'Попытки навязать неравноценный зачёт, бесконечные отсрочки или удаление переписки критически ослабляют позицию.'
    }
  ];

  const routes = [
    {
      tag: 'Действующий бизнес',
      title: 'Долг подтверждён, должник работает',
      desc: 'Есть подписанные первичные документы, контрагент ведёт деятельность, но задерживает выплату.',
      route: 'Претензия, структурированные переговоры, затем применимый судебный порядок.'
    },
    {
      tag: 'Просьба об отсрочке',
      title: 'Должник признаёт долг, но просит время',
      desc: 'Контрагент не отказывается от оплаты, но предлагает поэтапный график или отсрочку.',
      route: 'Проверка графика, обеспечение залогом/поручительством, фиксация признания долга.'
    },
    {
      tag: 'Спор по договору',
      title: 'Есть спор об исполнении обязательств',
      desc: 'Контрагент заявляет о недостатках товара, нарушении сроков или завышении объёмов работ.',
      route: 'Формирование доказательственной базы, встречная позиция, претензия и судебный иск.'
    },
    {
      tag: 'Угроза утраты',
      title: 'Есть риск утраты имущества',
      desc: 'Появились признаки вывода активов, закрытия счетов или переоформления транспорта и недвижимости.',
      route: 'Оценка оснований для обеспечительных мер (арест счетов) и срочные процессуальные действия.'
    },
    {
      tag: 'Суд выигран',
      title: 'Решение суда уже принято',
      desc: 'Судебный акт вступил в силу, исполнительный лист получен, но долг добровольно не погашен.',
      route: 'Предъявление исполнительного листа напрямую в банк либо в ФССП и контроль списания.'
    },
    {
      tag: 'Неплатёжеспособность',
      title: 'Есть признаки банкротства',
      desc: 'Сумма долга свыше 2 млн ₽, просрочка более 3 месяцев, масса кредиторов и отсутствие активов.',
      route: 'Оценка очередности, публикация на Федресурсе и переход к банкротному маршруту.'
    }
  ];

  const stages = [
    {
      num: '01',
      stage: 'Анализ документов и состояния должника',
      works: 'Изучаем договоры, первичные документы, основания долга, сроки, переписку и возражения контрагента. Проверяем открытые реестры, суды и исполнительные производства.',
      result: 'Письменное заключение о перспективах взыскания, правовых рисках и рекомендуемом маршруте.'
    },
    {
      num: '02',
      stage: 'Досудебная претензионная работа',
      works: 'Составляем мотивированную претензию с расчётом долга, неустойки и штрафов. Ведём переговоры с должником, фиксируем признание долга и оцениваем проекты соглашений.',
      result: 'Соблюдение обязательного досудебного порядка либо добровольное погашение задолженности без суда.'
    },
    {
      num: '03',
      stage: 'Судебное взыскание в арбитраже',
      works: 'Готовим исковое заявление, доказательственную базу, ходатайства об обеспечительных мерах. Представляем интересы компании во всех судебных заседаниях.',
      result: 'Судебный акт о взыскании долга, процентов и судебных расходов, получение исполнительного листа.'
    },
    {
      num: '04',
      stage: 'Исполнение судебного решения',
      works: 'Определяем оптимальный способ предъявления исполнительного листа (в банк должника либо в ФССП). Контролируем действия пристава и списание средств.',
      result: 'Фактическое поступление денежных средств на расчётный счёт взыскателя.'
    },
    {
      num: '05',
      stage: 'Банкротный маршрут и субсидиарная ответственность',
      works: 'При невозможности взыскания оцениваем экономический смысл банкротства должника, подаём публикацию на Федресурс, инициируем привлечение руководства к субсидиарной ответственности.',
      result: 'Взыскание задолженности с контролирующих лиц (директоров, учредителей) либо включение в реестр кредиторов.'
    }
  ];

  const claims = [
    {
      title: 'Неоплата поставленного товара',
      desc: 'Договоры поставки, разовые отгрузки по счетам-договорам, товарным накладным и УПД.'
    },
    {
      title: 'Долги по договорам подряда и субподряда',
      desc: 'Строительные, монтажные, проектные и ремонтные работы, споры по актам КС-2 и КС-3.'
    },
    {
      title: 'Задолженность по аренде помещений и техники',
      desc: 'Коммерческая недвижимость, производственные площади, склады, транспорт и спецтехника.'
    },
    {
      title: 'Неоплата оказанных услуг и работ',
      desc: 'Транспортные, логистические, экспедиционные, консалтинговые и иные возмездные услуги.'
    },
    {
      title: 'Возврат займов, кредитов и процентов',
      desc: 'Договоры займа между юридическими лицами, процентные обязательства и штрафные санкции.'
    },
    {
      title: 'Возврат неотработанного аванса',
      desc: 'Расторжение договоров, односторонний отказ, неисполнение контрагентом встречных обязательств.'
    },
    {
      title: 'Неосновательное обогащение',
      desc: 'Ошибочные платежи, бездоговорное пользование имуществом, излишне перечисленные средства.'
    },
    {
      title: 'Договорная неустойка и проценты',
      desc: 'Взыскание штрафов, договорных пеней и процентов за пользование чужими денежными средствами (ст. 395 ГК РФ).'
    },
    {
      title: 'Портфель просроченной дебиторской задолженности',
      desc: 'Комплексная системная работа с реестром должников компании, сегментация по срокам и рискам.'
    }
  ];

  const cases: CaseData[] = [
    {
      category: 'Поставка / 2,8 млн ₽',
      title: 'Оплата поставки после спора о первичных документах',
      problem: 'Покупатель не оплатил товар и ссылался на недостатки в первичных документах, отсутствие доверенностей у принимавших лиц и расхождения в УПД. Сумма задолженности составляла 2,8 млн ₽.',
      action: 'Сопоставили договор, спецификации, заявки, УПД, товарно-транспортные накладные и деловую переписку. Подготовили досудебную претензию с детальным расчётом требований и неустойки, после чего представили доказательства передачи товара в арбитражном суде.',
      result: 'Арбитражный суд полностью удовлетворил исковые требования, взыскав 2,8 млн ₽ основного долга, договорную неустойку и судебные расходы. Исполнительный лист передан к исполнению, средства поступили на счёт клиента.'
    },
    {
      category: 'Подряд / 4,3 млн ₽',
      title: 'Взыскание задолженности за выполненные подрядные работы',
      problem: 'Заказчик уклонялся от подписания итоговых актов КС-2 и КС-3, заявляя о завышении объёмов и встречных претензиях по срокам. Неоплаченный остаток составлял 4,3 млн ₽.',
      action: 'Провели юридический аудит исполнительной документации, журнала работ и переписки по согласованию этапов. Зафиксировали надлежащее направление актов и отсутствие мотивированного отказа заказчика в установленный договором срок. Подготовили и поддержали позицию в суде.',
      result: 'Суд признал отказ заказчика необоснованным и взыскал задолженность в полном объёме вместе с процентами по ст. 395 ГК РФ. Впоследствии стороны согласовали график выплат в рамках исполнительного производства.'
    },
    {
      category: 'Дебиторский портфель / 7,1 млн ₽',
      title: 'Комплексная работа с портфелем долгов производственного предприятия',
      problem: 'У производственной компании накопилось 14 просроченных требований к разным контрагентам на общую сумму 7,1 млн ₽ с разными сроками образования и качеством документов.',
      action: 'Сегментировали пул должников по срочности, объёму доказательств и финансовому состоянию компаний. По 6 долгам добились добровольной оплаты на претензионном этапе; по 8 спорам подготовили и провели судебные процессы.',
      result: 'Фактически возвращено 5,9 млн ₽; по оставшимся требованиям получены исполнительные листы и запущен процесс взыскания через банки и службу судебных приставов.'
    }
  ];

  const faqs = [
    {
      q: 'Можно ли взыскать долг, если договор не подписан?',
      a: 'Иногда обязательство подтверждается совокупностью заявок, первичных документов, платежей, переписки и фактического исполнения. Перспективы зависят от содержания и допустимости конкретных доказательств.'
    },
    {
      q: 'Обязательно ли направлять претензию?',
      a: 'Для многих денежных требований в арбитражном процессе действует обязательный досудебный порядок. Срок и правила могут определяться законом или договором, поэтому их проверяют до подачи заявления.'
    },
    {
      q: 'Что можно требовать кроме основного долга?',
      a: 'В зависимости от основания — договорную неустойку, проценты, убытки и судебные расходы. Одновременное взыскание отдельных санкций и их размер требуют правовой проверки.'
    },
    {
      q: 'Если должник признаёт долг, обязательно ли обращаться в суд?',
      a: 'Нет. Можно оценить соглашение, график, обеспечение и иные способы урегулирования. Важно оформить их так, чтобы не потерять доказательства и возможность дальнейшей защиты.'
    },
    {
      q: 'Можно ли арестовать имущество или счета должника?',
      a: 'Обеспечительные меры применяет суд при наличии предусмотренных законом оснований. Одного желания взыскателя недостаточно; необходимо обосновать риск затруднения или невозможности исполнения.'
    },
    {
      q: 'Сколько длится взыскание?',
      a: 'Срок зависит от претензионного порядка, вида производства, поведения сторон, обжалования и исполнения. До анализа документов нельзя корректно назвать единый срок.'
    },
    {
      q: 'Что делать, если у должника нет имущества?',
      a: 'Нужно оценить деятельность, требования других кредиторов, исполнительные производства, сделки и признаки банкротства. После этого решается, оправданы ли исполнительные или банкротные инструменты.'
    },
    {
      q: 'Можно ли взыскать долг с директора или собственника компании?',
      a: 'Сам по себе долг организации не переходит на руководителя или участника. Личная ответственность возможна только по отдельным основаниям и требует самостоятельной правовой оценки.'
    },
    {
      q: 'Вы работаете, если решение суда уже есть?',
      a: 'Да, применимый объём зависит от исполнительного документа и теку стадии. Если задача сосредоточена на действиях банка или приставов, она передаётся в профильное направление.'
    },
    {
      q: 'Можно ли работать дистанционно?',
      a: 'Да, если характер дела позволяет обмениваться документами и участвовать в процессе дистанционно. Необходимость личного присутствия определяется после первичной оценки.'
    }
  ];

  const steps: ProcessStep[] = [
    {
      num: '01',
      title: 'Анализ документов и должника',
      desc: 'Вы описываете ситуацию и передаёте имеющиеся документы. Проверяем основание долга, сумму, сроки, первичные документы и открытые сведения о финансовом состоянии должника.'
    },
    {
      num: '02',
      title: 'Выбор стратегии и расчёт',
      desc: 'Рассчитываем основной долг, неустойку и штрафные санкции. Определяем оптимальный маршрут: претензия, переговоры, судебный иск или обеспечительные меры.'
    },
    {
      num: '03',
      title: 'Заключение договора',
      desc: 'Фиксируем состав юридических работ, этапы, стоимость и прозрачные обязательства сторон в официальном договоре без скрытых комиссий.'
    },
    {
      num: '04',
      title: 'Досудебная претензионная работа',
      desc: 'Готовим мотивированную досудебную претензию с доказательствами и расчётом, ведём переговоры с должником с фиксацией признания долга.'
    },
    {
      num: '05',
      title: 'Судебное представительство',
      desc: 'Подаём исковое заявление в арбитражный суд, представляем интересы компании на всех заседаниях и добиваемся вынесения решения в пользу взыскателя.'
    },
    {
      num: '06',
      title: 'Исполнение решения суда',
      desc: 'Получаем исполнительный лист, определяем оптимальный порядок предъявления (в банк должника либо в ФССП) и контролируем фактическое поступление средств.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Первичный аудит долга',
      subtitle: 'Правовой анализ документов, проверка должника по реестрам и определение перспектив взыскания',
      price: 'от 5 000 ₽',
      features: [
        { name: 'Изучение договоров, УПД, накладных и актов', value: '✓' },
        { name: 'Проверка платежеспособности и судов должника', value: '✓' },
        { name: 'Расчёт суммы долга, неустойки и процентов', value: '✓' },
        { name: 'Письменное заключение и план действий', value: '✓' }
      ],
      popular: false,
      buttonText: 'Заказать аудит',
      buttonHref: '#form'
    },
    {
      title: 'Судебное взыскание под ключ',
      subtitle: 'Полное ведение дела в арбитражном суде от претензии до получения исполнительного листа',
      price: 'от 35 000 ₽',
      popular: true,
      badgeText: 'Популярно',
      features: [
        { name: 'Подготовка и направление досудебной претензии', value: '✓' },
        { name: 'Составление и подача искового заявления', value: '✓' },
        { name: 'Ходатайства об обеспечительных мерах', value: '✓' },
        { name: 'Представительство во всех судебных заседаниях', value: '✓' },
        { name: 'Получение судебного акта и исполнительного листа', value: '✓' }
      ],
      buttonText: 'Начать взыскание',
      buttonHref: '#form'
    },
    {
      title: 'Сопровождение дебиторского портфеля',
      subtitle: 'Системная работа с пулом просроченных долгов компании на регулярной основе',
      price: 'Индивидуально',
      features: [
        { name: 'Формирование единого реестра задолженностей', value: '✓' },
        { name: 'Сегментация должников по степени риска', value: '✓' },
        { name: 'Массовая претензионная и судебная работа', value: '✓' },
        { name: 'Ежемесячная отчётность по стадиям возврата', value: '✓' }
      ],
      popular: false,
      buttonText: 'Обсудить портфель',
      buttonHref: '#form'
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
            <span style={{ color: 'var(--color-text-main)' }}>Взыскание задолженности с юридических лиц</span>
          </>
        }
        superTitle="Взыскание задолженности для бизнеса • Липецк и Липецкая область"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Взыскание задолженности
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              с юридических лиц в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Проверим документы и состояние должника, рассчитаем требования и выстроим маршрут возврата долга — от претензии и переговоров до суда и согласованных действий по исполнению.
          </span>
        }
        primaryCtaText="Оценить перспективы взыскания"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_debt"
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
          { text: 'Оцениваем доказательства и взыскиваемость' },
          { text: 'Согласуем каждый этап до подачи иска' },
          { text: 'Работаем на результат до фактического исполнения' },
          { text: 'Куратор — адвокат Дмитрий Сергеевич Конопкин' }
        ]}
        imageUrl="/images/konopkin.jpg"
        imageName="Дмитрий Сергеевич Конопкин"
        imageSubtitle="Адвокат, председатель Коллегии адвокатов «Де-Юре», куратор направления"
        imageObjectPosition="center 25%"
      />

      {/* ═══ БЛОК 2: В КАКОЙ СИТУАЦИИ ВАМ НУЖНА ПОМОЩЬ (ШАБЛОН «СИТУАЦИИ») ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'inline-block' }}>В какой ситуации</span> <br /><span style={{ display: 'inline-block' }}>вам нужна помощь</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Подбираем процессуальный маршрут под фактическую стадию взаимоотношений с контрагентом. Выберите ситуацию, чтобы увидеть порядок и объём помощи.
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
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}>
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
                  margin: 0,
                  position: 'relative',
                  zIndex: 1
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Переключатель роли на страницу защиты бизнеса */}
          <div style={{
            background: '#FFFFFF',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '22px 28px',
            boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '32px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: '1 1 500px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M12 8v4" />
                <path d="M12 16h.01" />
              </svg>
              <div>
                <strong style={{ display: 'block', fontSize: '15.5px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>
                  Требования предъявлены к вашей компании?
                </strong>
                <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Проверим обоснованность иска, снизим неустойку и согласуем защиту интересов ответчика в суде.
                </span>
              </div>
            </div>
            <Link
              href="/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/zashchita-biznesa-ot-vzyskaniya-zadolzhennosti/"
              className="btn btn-outline"
              style={{ padding: '10px 22px', fontSize: '14px', whiteSpace: 'nowrap' }}
            >
              Защита бизнеса от взыскания →
            </Link>
          </div>

          {/* Баннер «Не нашли свою ситуацию?» */}
          <div
            style={{
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
                <span style={{ display: 'inline-block' }}>Опишите вашу долговую ситуацию в форме. Изучим имеющиеся документы</span> <br />
                <span style={{ display: 'inline-block' }}>и предложим возможные варианты решения.</span>
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
              >
                Описать ситуацию
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: СРОЧНЫЕ СИТУАЦИИ (ШАБЛОН «КОГДА ВАЖНО ОБРАТИТЬСЯ БЕЗ ПРОМЕДЛЕНИЯ») ═══ */}
      <section style={{ background: 'var(--color-deep-blue)', padding: '64px 0 56px', position: 'relative', overflow: 'hidden' }} id="urgent">
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '36px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontFamily: 'var(--font-serif)', color: '#FFFFFF', marginBottom: '12px', marginTop: 0, lineHeight: 1.25 }}>
              <span style={{ display: 'inline-block' }}>Когда нельзя затягивать</span> <br />
              <span style={{ display: 'inline-block' }}>со взысканием</span>
            </h2>
            <div style={{ width: '60px', height: '2px', background: 'var(--color-gold)', marginBottom: '20px' }}></div>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', marginBottom: '40px', maxWidth: '720px', lineHeight: 1.6 }}>
              В спорах с юридическими лицами промедление грозит утратой активов, ликвидацией или невозможностью исполнить решение суда.
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
              <strong style={{ color: '#FFFFFF' }}>Предупреждение:</strong> Срочность не означает автоматическую подачу иска.
            </span> <br className="hidden-mobile" />
            <span style={{ display: 'inline-block' }}>
              Сначала определяем действие, которое действительно сохраняет позицию или повышает вероятность взыскания.
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
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '28px', display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <a href="tel:+79103503111" style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.02em' }} data-analytics="phone_click">
              +7 (910) 350-31-11
            </a>
            <a href="tel:+79103503111" className="btn-urgent-call" style={{ padding: '14px 28px', fontSize: '15px' }} data-analytics="phone_click">
              Позвонить юристу
            </a>
            <a href="#form" className="btn btn-urgent-outline" style={{ padding: '14px 28px', fontSize: '15px' }}>
              Описать ситуацию
            </a>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
              Перезвоним вам в рабочее время и оценим риски до утраты активов
            </span>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: ДИАГНОСТИКА: ДО НАЧАЛА СПОРА ПРОВЕРЯЕМ ДВЕ ВЕЩИ ═══ */}
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
                Диагностика перспектив
              </div>
              <h2 className="with-accent" style={{
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontFamily: 'var(--font-serif)',
                color: 'var(--color-primary)',
                margin: 0,
                lineHeight: 1.2
              }}>
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                  До начала спора
                </span>
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                  проверяем две вещи
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
                Сильная доказательная позиция ещё не гарантирует фактическое получение денег. Поэтому до согласования судебного этапа мы оцениваем не только иск, но и доступные сведения о должнике.
              </p>
            </div>
          </div>

          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            {/* Карточка 1: Юридическая доказуемость */}
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
                <span style={{ display: 'inline-block' }}>Юридическая</span> <br />
                <span style={{ display: 'inline-block' }}>доказуемость</span>
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  'Основание обязательства и точный срок наступления оплаты',
                  'Договор, приложения, спецификации, дополнительные соглашения и заявки',
                  'УПД, товарные накладные, акты приёмки, отчёты и платёжные поручения',
                  'Деловая переписка, акты сверки, гарантийные письма и частичная оплата',
                  'Соблюдение досудебного претензионного порядка и срок исковой давности',
                  'Правильность расчёта основного долга, неустойки, штрафов и процентов'
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

            {/* Карточка 2: Фактическая взыскиваемость */}
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
                <span style={{ display: 'inline-block' }}>Фактическая</span> <br />
                <span style={{ display: 'inline-block' }}>взыскиваемость</span>
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  'Действующий статус компании, отсутствие записей о ликвидации или реорганизации',
                  'Количество текущих арбитражных споров и совокупный объём требований',
                  'Открытые исполнительные производства в ФССП и динамика их исполнения',
                  'Наличие открытых банковских счетов, имущества и реальной хозяйственной деятельности',
                  'Признаки неплатёжеспособности, преднамеренного вывода имущества или банкротства',
                  'Экономический смысл и соразмерность расходов выбранному способу взыскания'
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

          {/* Панель действия */}
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
                Сопоставляем оба параметра на консультации до начала активных процессуальных действий
              </span>
            </div>
            <a href="#form" className="btn btn-primary" style={{ padding: '12px 28px', fontSize: '14.5px' }}>
              Проверить долг и должника
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: НЕ КАЖДЫЙ ДОЛГ НУЖНО ВЗЫСКИВАТЬ ОДИНАКОВО (ШАБЛОН СЦЕНАРИЕВ) ═══ */}
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
              Выбор процессуального порядка
            </div>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                Не каждый долг нужно
              </span>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                взыскивать одинаково
              </span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Порядок работы зависит от признания долга, позиции должника, наличия встречного спора и финансового состояния контрагента.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '32px' }}>
            {routes.map((item, i) => (
              <div
                key={i}
                className="hover-lift"
                style={{
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                  position: 'relative'
                }}
              >
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
                    display: 'inline-block'
                  }}>
                    {item.tag}
                  </div>
                  <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 12px 0', lineHeight: 1.35 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: '0 0 20px 0' }}>
                    {item.desc}
                  </p>
                </div>

                <div style={{
                  background: '#FFFFFF',
                  padding: '16px 18px',
                  border: '1px solid var(--color-border)',
                  borderLeft: '3px solid var(--color-gold)',
                  marginTop: 'auto'
                }}>
                  <strong style={{ display: 'block', fontSize: '12px', color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: '4px', letterSpacing: '0.05em' }}>
                    Применимый маршрут:
                  </strong>
                  <span style={{ fontSize: '13.5px', color: 'var(--color-deep-blue)', lineHeight: 1.45, fontWeight: 500 }}>
                    {item.route}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 6: ВЗЫСКАНИЕ ЗАДОЛЖЕННОСТИ ПОД КОНКРЕТНУЮ СТАДИЮ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
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
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                Взыскание задолженности
              </span>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                под конкретную стадию
              </span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Чёткий состав работ и осязаемый результат на каждом этапе правового взаимодействия.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
            {stages.map((step, idx) => (
              <div
                key={idx}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid var(--color-border)',
                  borderLeft: '4px solid var(--color-primary)',
                  padding: '28px 32px',
                  boxShadow: '0 4px 15px rgba(23, 50, 77, 0.04)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '24px',
                  alignItems: 'center'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <span style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '24px',
                    fontWeight: 700,
                    color: 'var(--color-gold)',
                    lineHeight: 1
                  }}>
                    {step.num}
                  </span>
                  <div>
                    <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 8px 0', lineHeight: 1.3 }}>
                      {step.stage}
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                      {step.works}
                    </p>
                  </div>
                </div>

                <div style={{
                  background: '#FAF7F2',
                  padding: '16px 20px',
                  borderLeft: '3px solid var(--color-gold)'
                }}>
                  <strong style={{ display: 'block', fontSize: '12px', color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: '4px', letterSpacing: '0.05em' }}>
                    Результат этапа:
                  </strong>
                  <span style={{ fontSize: '14px', color: 'var(--color-deep-blue)', lineHeight: 1.5, fontWeight: 500 }}>
                    {step.result}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 7: С КАКИМИ ДЕНЕЖНЫМИ ТРЕБОВАНИЯМИ РАБОТАЕМ ═══ */}
      <section className="section bg-white" id="claims" style={{ padding: '80px 0' }}>
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
              Категории споров
            </div>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                С какими денежными
              </span>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                требованиями работаем
              </span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Взыскиваем долги организаций и индивидуальных предпринимателей по всем видам коммерческих договоров:
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '20px', marginBottom: '16px' }}>
            {claims.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  border: '1px solid var(--color-border)',
                  borderLeft: '4px solid var(--color-gold)',
                  padding: '24px 22px',
                  boxShadow: '0 4px 15px rgba(23, 50, 77, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <h3 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 8px 0', lineHeight: 1.35 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 8: ДОКУМЕНТЫ ДЛЯ ПРЕДВАРИТЕЛЬНОГО АНАЛИЗА (ШАБЛОН «ДОКУМЕНТЫ») ═══ */}
      <section className="section bg-light" id="documents" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Документы для</span> <br />
              <span style={{ display: 'inline-block' }}>предварительного анализа</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Для первичного анализа достаточно сведений и документов, которые есть у вас на руках.</span> <br />
              <span style={{ display: 'inline-block' }}>Точный перечень и порядок сбора недостающих справок юрист определит на консультации.</span>
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            {/* Карточка 1: Обязательно (при наличии) */}
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
                <span style={{ display: 'inline-block' }}>Обязательно</span> <br />
                <span style={{ display: 'inline-block' }}>(при наличии)</span>
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  {
                    title: 'Договор и спецификации',
                    desc: 'Договор со всеми приложениями, спецификациями и дополнительными соглашениями.'
                  },
                  {
                    title: 'Первичные учётные документы',
                    desc: 'УПД, товарные накладные, акты приёмки выполненных работ, платёжные поручения.'
                  },
                  {
                    title: 'Переписка и расчёт долга',
                    desc: 'Деловая переписка, акты сверки взаиморасчётов и детальный расчёт задолженности.'
                  },
                  {
                    title: 'Судебные и исполнительные документы',
                    desc: 'Материалы из суда или ФССП, если судебный процесс либо исполнительное производство уже начаты.'
                  }
                ].map((doc, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <polyline points="9 11 12 14 22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                    <div>
                      <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>
                        {doc.title}
                      </strong>
                      <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                        {doc.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Карточка 2: Дополнительно помогает */}
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
                <span style={{ display: 'inline-block' }}>Дополнительно</span> <br />
                <span style={{ display: 'inline-block' }}>помогает</span>
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  {
                    title: 'Претензии и гарантийные письма',
                    desc: 'Претензии и ответы контрагента, гарантийные письма и признание долга.'
                  },
                  {
                    title: 'Сведения об имуществе должника',
                    desc: 'Сведения об известных счетах, имуществе и транспорте должника.'
                  },
                  {
                    title: 'Предложения об урегулировании',
                    desc: 'Предложения об отсрочке, зачёте или мировом соглашении от контрагента.'
                  },
                  {
                    title: 'Сведения о руководстве и учредителях',
                    desc: 'Данные о контролирующих лицах для оценки субсидиарной ответственности.'
                  }
                ].map((doc, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <polyline points="9 11 12 14 22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                    <div>
                      <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>
                        {doc.title}
                      </strong>
                      <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                        {doc.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Плашка действия и предупреждения */}
          <div style={{
            background: 'var(--color-white)',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '24px 30px',
            boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: '1 1 500px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <span style={{ fontSize: '14.5px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
                <strong>Не откладывайте обращение из-за отсутствия одного документа.</strong> Сначала проверим имеющийся комплект и скажем, что можно восстановить или подтвердить другими доказательствами.
              </span>
            </div>
            <a href="#form" className="btn btn-primary" style={{ padding: '12px 28px', fontSize: '14.5px', whiteSpace: 'nowrap' }}>
              Передать документы на анализ
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 9: КУРАТОР НАПРАВЛЕНИЯ (SPECIALIST BLOCK) ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Дмитрий Сергеевич Конопкин"
        position="Адвокат, председатель Коллегии адвокатов «Де-Юре», куратор направления"
        imageUrl="/images/konopkin.jpg"
        imagePosition="center 15%"
        profileHref="/specialisty/konopkin-dmitriy-sergeevich/"
        profileText="Подробнее об адвокате Дмитрии Сергеевиче Конопкине →"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Дмитрий Сергеевич курирует сложные коммерческие и арбитражные споры по взысканию задолженности с юридических лиц: оценивает доказательственную базу, разрабатывает процессуальную стратегию и представляет интересы бизнеса в суде.
          </span>,
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Юридическая практика в сфере защиты интересов бизнеса и арбитражного процесса — с 2016 года</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Опыт работы в Следственном комитете помогает системно выявлять схемы вывода активов должниками</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Успешный опыт ведения дел в Арбитражном суде Липецкой области и арбитражных судах РФ</span>
            </li>
          </ul>
        ]}
        buttonText="Задать вопрос Дмитрию Сергеевичу"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 10: ПРИМЕРЫ ДЕЛ ИЗ ПРАКТИКИ (КЕЙСЫ) ═══ */}
      <CasesBlock
        title="Примеры дел из практики"
        showAllLink="/praktika/"
        showAllText="Смотреть все дела"
        showDemoWarning={true}
        cases={cases}
      />

      {/* ═══ БЛОК 11: СХЕМА РАБОТЫ (ПОЭТАПНЫЙ ПРОЦЕСС) ═══ */}
      <ProcessBlock
        title="Как строится работа"
        subtitle="Прозрачный и предсказуемый процесс от передачи первых документов до поступления денег на расчётный счёт"
        steps={steps}
        ctaTitle="Начните с правового анализа документов"
        ctaSubtitle="Изучим договоры и первичку, проверим должника по базам ФССП и арбитража, рассчитаем сумму требований и предложим оптимальный маршрут."
        ctaButtonText="Обсудить ситуацию"
      />

      {/* ═══ БЛОК 12: СТОИМОСТЬ ЮРИДИЧЕСКИХ УСЛУГ ═══ */}
      <PricingBlock
        title="Стоимость взыскания задолженности"
        subtitle="Честные условия и прозрачные этапы. Стоимость фиксируется в официальном договоре до начала работы."
        tiers={pricingTiers}
        disclaimer="Окончательная стоимость определяется после анализа первичных документов, суммы задолженности, платёжеспособности должника и необходимого объёма процессуальных инстанций."
      />

      {/* ═══ БЛОК 13: FAQ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы клиентов"
        title="Ответы на вопросы о взыскании задолженности"
        subtitle="Юридические нюансы, сроки, обеспечительные меры и порядок фактического получения денежных средств"
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
                Обсудить взыскание долга в офисе
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
            </div>

            <div style={{
              background: '#FFFFFF',
              padding: '32px',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-gold)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)'
            }}>
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 12px 0' }}>
                Дистанционное сопровождение
              </h3>
              <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: '0 0 20px 0' }}>
                Если должник или суд находятся за пределами Липецка, организуем электронное взаимодействие через систему «Мой Арбитр», дистанционные заседания и обмен документами.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--color-deep-blue)' }}>
                  <span style={{ color: 'var(--color-gold)', fontWeight: 700 }}>✓</span>
                  <span>Подача исков через систему «Мой Арбитр»</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--color-deep-blue)' }}>
                  <span style={{ color: 'var(--color-gold)', fontWeight: 700 }}>✓</span>
                  <span>Участие в онлайн-заседаниях арбитражных судов</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--color-deep-blue)' }}>
                  <span style={{ color: 'var(--color-gold)', fontWeight: 700 }}>✓</span>
                  <span>Электронный документооборот и регулярные отчёты</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 15: ФИНАЛЬНАЯ ФОРМА (СВЯЗАТЬСЯ С НАМИ) ═══ */}
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
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Получите первичную</span> <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>оценку ситуации</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко опишите ситуацию и оставьте контакты. Юрист проверит должника, изучит первичные документы и свяжется с вами для обсуждения перспектив взыскания.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация юриста</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните прямо сейчас: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (910) 350-31-11</a>
                </p>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Конфиденциальность:</strong>
                Не указывайте в форме конфиденциальные данные, банковские выписки и закрытые документы. Документы можно передать юристу после согласования защищённого способа связи.
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
                buttonText="Оценить перспективы взыскания"
                commentPlaceholder="Кратко опишите ситуацию: сумма долга, контрагент, статус документов…"
                hiddenFields={[
                  { name: 'source_page', value: '/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/' },
                  { name: 'page_type', value: 'hub' },
                  { name: 'direction', value: 'vzyskanie_zadolzhennosti' },
                  { name: 'service', value: 'vzyskanie_zadolzhennosti_s_yuridicheskih_lic' },
                  { name: 'curator', value: 'konopkin-dmitriy-sergeevich' }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
