'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import ContactsForm from '@/components/ContactsForm';

export default function ArbitrazhClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LegalService',
        '@id': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/#service',
        'name': 'Арбитражный юрист в Липецке — Юридическая компания «Де-Юре»',
        'description': 'Оценка перспектив спора, формирование доказательственной базы, подготовка процессуальных документов и представительство бизнеса в арбитражном суде.',
        'url': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/',
        'telephone': '+7 (910) 350-31-11',
        'priceRange': '₽₽₽',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'пл. Победы, д. 8, офис 412',
          'addressLocality': 'Липецк',
          'addressRegion': 'Липецкая область',
          'postalCode': '398001',
          'addressCountry': 'RU'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 52.603884,
          'longitude': 39.573436
        },
        'openingHoursSpecification': [
          {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            'opens': '09:00',
            'closes': '18:00'
          }
        ]
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/#breadcrumb',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Главная',
            'item': 'https://dejure-help.ru/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Бизнесу',
            'item': 'https://dejure-help.ru/biznesu/'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Арбитражный юрист',
            'item': 'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/'
          }
        ]
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
              'text': 'Да. Для истца проверяются требования и доказательства перед подачей иска. Для ответчика работа начинается с анализа иска, приложений, определения суда и сроков.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Можно ли подключиться, если дело уже рассматривается?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Можно передать материалы на анализ на любой стадии. Юрист проверит совершенные действия, документы в деле и сформирует дальнейший план защиты.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Какие документы нужны для первоначальной оценки?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Обычно нужны договор и приложения, акты и накладные, претензии и ответы, деловая переписка, а по начавшемуся делу — иск, определения суда и отзывы.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Можно ли поручить только подготовку документа?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Да, если отдельная подготовка иска, отзыва, ходатайства или жалобы имеет смысл в конкретной ситуации после изучения достаточного объёма материалов.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Можете ли вы работать совместно со штатным юристом компании?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Да. Согласуем распределение задач: процессуальный аудит, подготовку документов, участие в заседаниях или комплексное ведение сложного спора.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Можно ли вести арбитражное дело дистанционно?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Значительную часть анализа, подготовки документов и коммуникации можно организовать дистанционно через систему «Мой Арбитр» и онлайн-заседания.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Сколько длится арбитражное дело?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Продолжительность зависит от категории и сложности спора, количества участников, назначения судебных экспертиз, обжалования и процессуального поведения сторон.'
            }
          },
          {
            '@type': 'Question',
            'name': 'От чего зависит стоимость услуг?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'От объёма материалов, предмета и цены спора, текущей стадии, числа заседаний, необходимости экспертиз и командировок. Стоимость этапа фиксируется до начала работы.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Можно ли взыскать расходы на представителя с другой стороны?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Заявление о судебных расходах подаётся при наличии оснований и платежных документов. Итоговый размер возмещения определяет суд с учётом критерия разумности.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Можно ли гарантировать победу в арбитражном суде?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Нет. Решение принимает суд. Юрист добросовестно оценивает доказательства, обозначает риски и выстраивает защиту, но закон запрещает гарантировать исход дела.'
            }
          }
        ]
      }
    ]
  };

  const situations: { tag: string; title: React.ReactNode; desc: string }[] = [
    {
      tag: 'Подготовка к иску',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Подготовка к обращению</span> <br />
          <span style={{ display: 'inline-block' }}>в арбитражный суд</span>
        </span>
      ),
      desc: 'Контрагент нарушил договор или не платит. Требуется проверить основания, доказательства, претензионный порядок и составить иск.'
    },
    {
      tag: 'Защита ответчика',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Получен иск или</span> <br />
          <span style={{ display: 'inline-block' }}>определение суда</span>
        </span>
      ),
      desc: 'К вашей компании предъявлены требования. Нужно срочно изучить материалы дела, сроки, составить отзыв и заявить контрдоводы.'
    },
    {
      tag: 'Судебный процесс',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Дело уже рассматривается</span> <br />
          <span style={{ display: 'inline-block' }}>в первой инстанции</span>
        </span>
      ),
      desc: 'Процесс идёт, но требуется опытный судебный представитель, ходатайства об экспертизе, встречный иск или переговорная позиция.'
    },
    {
      tag: 'Обжалование акта',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Решение принято не в</span> <br />
          <span style={{ display: 'inline-block' }}>пользу компании</span>
        </span>
      ),
      desc: 'Судебный акт нарушает ваши права. Оценим перспективы апелляции или кассации, восстановим сроки и подготовим мотивированную жалобу.'
    },
    {
      tag: 'Защита решения',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Оппонент обжалует</span> <br />
          <span style={{ display: 'inline-block' }}>выигранное решение</span>
        </span>
      ),
      desc: 'Суд вынес решение в вашу пользу, но оппонент подал жалобу. Составим отзыв на жалобу и отстоим выводы суда первой инстанции.'
    },
    {
      tag: 'Второе мнение',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Нужен независимый аудит</span> <br />
          <span style={{ display: 'inline-block' }}>и второе мнение</span>
        </span>
      ),
      desc: 'Штатной юридической службе или руководству требуется внешняя экспертная оценка сложного процессуального риска или экспертизы.'
    }
  ];

  const urgentItems: { title: React.ReactNode; desc: string }[] = [
    {
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Ограниченный срок</span> <br />
          <span style={{ display: 'inline-block' }}>на подачу отзыва</span>
        </span>
      ),
      desc: 'Суд установил срок в определении; пропуск срока лишает возможности вовремя приобщить доказательства и заявить возражения.'
    },
    {
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Судебное заседание</span> <br />
          <span style={{ display: 'inline-block' }}>уже назначено</span>
        </span>
      ),
      desc: 'До заседания осталось несколько дней; требуется срочно ознакомиться с материалами в суде и подготовить процессуальные ходатайства.'
    },
    {
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Заявлены обеспечительные</span> <br />
          <span style={{ display: 'inline-block' }}>меры (арест счетов)</span>
        </span>
      ),
      desc: 'Оппонент ходатайствует о блокировке счетов или имущества компании; необходимы оперативная защита и заявление встречных мер.'
    },
    {
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Истекает срок на</span> <br />
          <span style={{ display: 'inline-block' }}>подачу жалобы</span>
        </span>
      ),
      desc: 'Месячный срок на апелляцию или двухмесячный на кассацию подходит к концу; пропуск без уважительных причин закрывает пересмотр.'
    }
  ];

  const routes: { tag: string; title: React.ReactNode; desc: string; route: string }[] = [
    {
      tag: 'Инициатива истца',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Подготовка и подача иска</span> <br />
          <span style={{ display: 'inline-block' }}>в арбитражный суд</span>
        </span>
      ),
      desc: 'Проверка оснований, доказательственной базы, расчёт неустойки, соблюдение досудебного порядка и подача через «Мой Арбитр».',
      route: 'Переход в услугу подготовки иска: формирование позиции, комплекта и процессуальный контроль.'
    },
    {
      tag: 'Защита ответчика',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Защита компании при</span> <br />
          <span style={{ display: 'inline-block' }}>предъявлении иска</span>
        </span>
      ),
      desc: 'Анализ обоснованности требований, снижение неустойки (ст. 333 ГК РФ), подготовка отзыва и процессуальные возражения.',
      route: 'Переход в услугу защиты ответчика: отзыв, контррасчёт, ходатайства и участие в заседаниях.'
    },
    {
      tag: 'Встречные требования',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Встречный иск и зачёт</span> <br />
          <span style={{ display: 'inline-block' }}>взаимных требований</span>
        </span>
      ),
      desc: 'У ответчика есть самостоятельные встречные претензии, связанные с первоначальным договором или ненадлежащим исполнением.',
      route: 'Подготовка встречного искового заявления с соблюдением условий совместного рассмотрения.'
    },
    {
      tag: 'Мировое урегулирование',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Переговоры и мировое</span> <br />
          <span style={{ display: 'inline-block' }}>соглашение в суде</span>
        </span>
      ),
      desc: 'Стороны готовы зафиксировать график платежей, дисконт или зачёт под контролем суда с утверждением соглашения.',
      route: 'Согласование условий, проверка юридической исполнимости и утверждение мирового соглашения судом.'
    },
    {
      tag: 'Пересмотр акта',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Апелляционное и</span> <br />
          <span style={{ display: 'inline-block' }}>кассационное обжалование</span>
        </span>
      ),
      desc: 'Решение первой инстанции вынесено с нарушениями норм права или недоказанностью существенных обстоятельств дела.',
      route: 'Переход в услугу обжалования: аудит материалов дела, подготовка жалобы и представление в инстанциях.'
    },
    {
      tag: 'Комплексный процесс',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Комплексное ведение</span> <br />
          <span style={{ display: 'inline-block' }}>дела «под ключ»</span>
        </span>
      ),
      desc: 'Полное судебное сопровождение спора любой сложности от досудебного этапа до вступления судебного акта в законную силу.',
      route: 'Непрерывное ведение дела, подготовка всех процессуальных документов и личное участие в заседаниях.'
    }
  ];

  const stages: { num: string; stage: React.ReactNode; works: string; result: string }[] = [
    {
      num: '01',
      stage: 'Анализ материалов дела и процессуальный аудит',
      works: 'Изучаем договоры, первичные документы, претензионную переписку, судебные определения, карточку дела в КАД и процессуальные сроки.',
      result: 'Заключение о перспективах спора, применимых процессуальных рисках и стратегии защиты интересов.'
    },
    {
      num: '02',
      stage: 'Формирование доказательственной базы и правовой позиции',
      works: 'Определяем предмет доказывания, запрашиваем недостающие документы, формулируем контррасчёты, основания для снижения штрафов или экспертизы.',
      result: 'Сформированная письменная правовая позиция с перечнем приложений и доказательств.'
    },
    {
      num: '03',
      stage: 'Подготовка и согласование процессуальных документов',
      works: 'Составляем иск, отзыв, возражения, встречный иск, ходатайства (об истребовании, экспертизе, обеспечении) с соблюдением требований АПК РФ.',
      result: 'Полный выверенный комплект документов, согласованный с доверителем до подачи в суд.'
    },
    {
      num: '04',
      stage: 'Подача документов и контроль движения дела',
      works: 'Направляем копии сторонам, подаем документы через систему «Мой Арбитр» либо канцелярию суда, отслеживаем принятие и дату заседания.',
      result: 'Официальная процессуальная отметка о принятии документов судом к рассмотрению.'
    },
    {
      num: '05',
      stage: 'Судебное представительство и процессуальные действия',
      works: 'Участвуем в предварительных и основных заседаниях, даем устные пояснения, реагируем на доводы оппонента, допрашиваем экспертов.',
      result: 'Квалифицированная защита правовой позиции на каждом заседании с аудиопротоколированием.'
    },
    {
      num: '06',
      stage: 'Получение судебного акта и взыскание судебных расходов',
      works: 'Получаем резолютивную и мотивированную часть решения/постановления, готовим заявление о возмещении расходов на оплату услуг представителя.',
      result: 'Вступивший в силу судебный акт, исполнительный лист и определение о взыскании судебных расходов.'
    }
  ];

  const disputeCategories = [
    {
      title: 'Договорные споры',
      desc: 'Поставка, подряд, аренда, услуги, перевозка, купля-продажа. Неисполнение обязательств, расторжение и изменение условий.',
      href: '/biznesu/'
    },
    {
      title: 'Взыскание задолженности',
      desc: 'Взыскание основного долга, договорных неустоек, процентов по ст. 395 ГК РФ и штрафных санкций с юридических лиц.',
      href: '/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/'
    },
    {
      title: 'Корпоративные споры',
      desc: 'Конфликты участников ООО и акционеров, оспаривание решений общих собраний, сделок с заинтересованностью, исключение участников.',
      href: '/biznesu/'
    },
    {
      title: 'Строительный подряд',
      desc: 'Споры по объёмам, качеству и скрытым дефектам работ, задержке сдачи объекта, назначение судебных строительно-технических экспертиз.',
      href: '/biznesu/'
    },
    {
      title: 'Споры с госорганами и ФНС',
      desc: 'Оспаривание ненормативных правовых актов, решений налоговых органов, предписаний Росреестра, антимонопольной службы (ФАС).',
      href: '/biznesu/'
    },
    {
      title: 'Недвижимость и земля',
      desc: 'Признание прав собственности, споры по договорам аренды земельных участков, сервитуты, самовольные постройки и обременения.',
      href: '/biznesu/'
    },
    {
      title: 'Оспаривание сделок',
      desc: 'Признание договоров недействительными (ничтожными/оспоримыми), применение последствий недействительности, подозрительные сделки.',
      href: '/biznesu/'
    },
    {
      title: 'Убытки и неосновательное обогащение',
      desc: 'Взыскание реального ущерба, упущенной выгоды, средств, полученных без правовых оснований (ст. 1102 ГК РФ).',
      href: '/biznesu/'
    },
    {
      title: 'Защита деловой репутации',
      desc: 'Опровержение порочащих сведений, удаление недостоверной информации из сети Интернет и взыскание репутационных убытков.',
      href: '/biznesu/'
    }
  ];

  const cases = [
    {
      num: '01',
      category: 'Строительный подряд • Первая инстанция',
      desc: 'Заказчик отказался оплачивать выполненные работы по монтажу инженерных сетей на сумму 14,8\u00A0млн\u00A0₽, ссылаясь на отсутствие промежуточных актов КС-2. Юристы сформировали доказательственную базу фактического использования объекта и провели судебную экспертизу.',
      result: 'Иск удовлетворён в полном объёме: взыскан основной долг 14,8\u00A0млн\u00A0₽, неустойка 1,2\u00A0млн\u00A0₽ и расходы на экспертизу.',
      badge: 'Взыскано 16,0\u00A0млн\u00A0₽'
    },
    {
      num: '02',
      category: 'Защита ответчика • Договор поставки',
      desc: 'Крупный поставщик металла предъявил иск к производственной компании на 8,4\u00A0млн\u00A0₽, включая завышенную договорную неустойку в размере 3,1\u00A0млн\u00A0₽. Подготовлен встречный расчет и мотивированное ходатайство о применении статьи 333 ГК РФ.',
      result: 'Суд снизил неустойку на 82%. Сумма требований уменьшена на 2,54\u00A0млн\u00A0₽, утвержден комфортный график погашения остатка.',
      badge: 'Снижение на 2,54\u00A0млн\u00A0₽'
    },
    {
      num: '03',
      category: 'Апелляционное обжалование • Аренда',
      desc: 'Суд первой инстанции неправомерно расторг долгосрочный договор аренды коммерческих площадей и обязал освободить помещение. В суде апелляционной инстанции доказано нарушение порядка уведомления и отсутствие существенных нарушений.',
      result: 'Решение суда первой инстанции отменено полностью. Договор аренды сохранён, права арендатора восстановлены.',
      badge: 'Полная отмена решения'
    }
  ];

  const pricingTiers = [
    {
      name: 'Первичный аудит и правовая позиция',
      price: 'от 25 000 ₽',
      desc: 'Анализ документов, оценка судебных рисков и выработка стратегии ведения спора.',
      features: [
        'Правовой анализ договоров, актов, переписки',
        'Проверка процессуальных сроков и подсудности',
        'Оценка судебной практики по аналогичным делам',
        'Письменное заключение со стратегией действий',
        'Расчёт цены иска, госпошлины и неустойки'
      ],
      highlight: false
    },
    {
      name: 'Подготовка комплекта документов',
      price: 'от 45 000 ₽',
      desc: 'Составление иска, отзыва или жалобы со всеми ходатайствами и подачей в суд.',
      features: [
        'Все услуги тарифа «Первичный аудит»',
        'Подготовка искового заявления / отзыва на иск',
        'Формирование доказательственной базы и приложений',
        'Подготовка обеспечительных и процессуальных ходатайств',
        'Подача документов через систему «Мой Арбитр»'
      ],
      highlight: true
    },
    {
      name: 'Судебное представительство «под ключ»',
      price: 'от 90 000 ₽',
      desc: 'Полное процессуальное сопровождение дела во всех заседаниях инстанции.',
      features: [
        'Все услуги тарифа «Подготовка комплекта»',
        'Личное участие юриста во всех заседаниях суда',
        'Оперативная подготовка письменных пояснений и возражений',
        'Участие в назначении и проведении судебных экспертиз',
        'Взыскание судебных расходов на представителя с оппонента'
      ],
      highlight: false
    }
  ];

  const faqItems = [
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
      q: 'Можно ли поручить только подготовку документа?',
      a: 'Да, если отдельная работа имеет смысл в конкретной ситуации. До подготовки иска, отзыва, ходатайства или жалобы юрист должен изучить достаточный объём материалов и понять процессуальную задачу документа.'
    },
    {
      q: 'Можете ли вы работать совместно со штатным юристом компании?',
      a: 'Да. Можно согласовать отдельную роль внешнего специалиста: анализ позиции, подготовку процессуальных документов, участие в заседаниях, второе мнение или комплексное ведение дела.'
    },
    {
      q: 'Можно ли вести арбитражное дело дистанционно?',
      a: 'Значительную часть анализа, подготовки документов и коммуникации можно организовать дистанционно через систему «Мой Арбитр» и онлайн-заседания. Необходимость личного участия зависит от суда, стадии, формата заседания и согласованного объёма работы.'
    },
    {
      q: 'Сколько длится арбитражное дело?',
      a: 'Единого срока нет. Продолжительность зависит от категории и сложности спора, количества участников, объёма доказательств, экспертизы, процессуального поведения сторон, обжалования и других обстоятельств.'
    },
    {
      q: 'От чего зависит стоимость услуг?',
      a: 'От объёма материалов, предмета и цены спора, текущей стадии, количества требований и участников, числа заседаний, необходимости экспертизы, командировок и срочной подготовки документов. Стоимость согласованного этапа фиксируется до начала работы.'
    },
    {
      q: 'Можно ли взыскать расходы на представителя с другой стороны?',
      a: 'Заявление о судебных расходах возможно при наличии предусмотренных законом оснований и подтверждающих документов. Размер возмещения определяет суд с учётом принципа разумности, поэтому обещать возврат всей уплаченной суммы нельзя.'
    },
    {
      q: 'Можно ли гарантировать победу в арбитражном суде?',
      a: 'Нет. Решение принимает суд после оценки требований, возражений и доказательств. Юрист может проанализировать материалы, обозначить риски и выполнить согласованную работу, но не вправе гарантировать исход дела.'
    }
  ];

  return (
    <>
      <Script
        id="arbitrazh-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ═══ БЛОК 1: MILITARY HERO (ХАБ АРБИТРАЖНОЙ ПРАКТИКИ) ═══ */}
      <section className="hero bg-light" style={{ padding: '60px 0 70px 0', borderBottom: '1px solid var(--color-border)', background: 'var(--gradient-cream)' }}>
        <div className="container">
          {/* Хлебные крошки */}
          <nav aria-label="Хлебные крошки" style={{ marginBottom: '24px' }}>
            <ol style={{
              display: 'flex',
              flexWrap: 'wrap',
              listStyle: 'none',
              padding: 0,
              margin: 0,
              fontSize: '13.5px',
              color: 'var(--color-text-secondary)'
            }}>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <Link href="/" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>Главная</Link>
                <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <Link href="/biznesu/" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>Бизнесу</Link>
                <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
              </li>
              <li style={{ color: 'var(--color-deep-blue)', fontWeight: 500 }}>
                Арбитражный юрист
              </li>
            </ol>
          </nav>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '40px'
          }}>
            {/* Левая колонка: Заголовки и оффер */}
            <div style={{ flex: '1 1 580px', maxWidth: '720px' }}>
              <div style={{
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--color-gold)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '14px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-gold)' }}></span>
                Арбитражные споры для бизнеса • Липецк и Липецкая область
              </div>

              <h1 className="with-accent" style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontFamily: 'var(--font-serif)',
                color: 'var(--color-primary)',
                lineHeight: 1.15,
                margin: '0 0 20px 0',
                fontWeight: 600
              }}>
                Арбитражный юрист <br />в Липецке
              </h1>

              <p style={{
                fontSize: '17px',
                color: 'var(--color-deep-blue)',
                lineHeight: 1.6,
                marginBottom: '32px',
                opacity: 0.92,
                maxWidth: '640px'
              }}>
                Изучим документы и стадию дела, определим процессуальные риски, подготовим правовую позицию и представим интересы компании или ИП в арбитражном суде.
              </p>

              {/* Кнопки действий */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', marginBottom: '40px' }}>
                <a href="#form" className="btn btn-primary" style={{ padding: '15px 32px', fontSize: '15.5px' }}>
                  Обсудить арбитражный спор
                </a>
                <a href="#situations" className="btn btn-outline" style={{ padding: '15px 28px', fontSize: '15.5px' }}>
                  Выбрать ситуацию ↓
                </a>
              </div>

              {/* Служебная строка ответа */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: 'var(--color-text-secondary)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>Перезвоним в течение 15 минут в рабочее время. Без спама и навязывания услуг.</span>
              </div>
            </div>

            {/* Правая колонка: 3 ключевые дочерние услуги (Стадийный навигатор) */}
            <div style={{ flex: '1 1 380px', maxWidth: '440px' }}>
              <div style={{
                background: '#FFFFFF',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-primary)',
                boxShadow: '0 8px 30px rgba(23, 50, 77, 0.07)',
                padding: '28px 24px'
              }}>
                <div style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: 'var(--color-gold)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '16px'
                }}>
                  Стадийная процессуальная помощь
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <Link
                    href="/biznesu/arbitrazhnyj-yurist/isk-v-arbitrazhnyj-sud/"
                    className="hover-lift"
                    style={{
                      display: 'block',
                      padding: '14px 16px',
                      background: 'var(--color-bg-light)',
                      border: '1px solid var(--color-border)',
                      borderLeft: '3px solid var(--color-primary)',
                      textDecoration: 'none',
                      transition: 'all 0.2s'
                    }}
                  >
                    <strong style={{ display: 'block', fontSize: '14.5px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>
                      1. Подготовка и подача иска →
                    </strong>
                    <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.4, display: 'block' }}>
                      Проверка требований, расчет пошлины и запуск процесса истцом.
                    </span>
                  </Link>

                  <Link
                    href="/biznesu/arbitrazhnyj-yurist/zashchita-otvetchika-v-arbitrazhnom-sude/"
                    className="hover-lift"
                    style={{
                      display: 'block',
                      padding: '14px 16px',
                      background: 'var(--color-bg-light)',
                      border: '1px solid var(--color-border)',
                      borderLeft: '3px solid var(--color-gold)',
                      textDecoration: 'none',
                      transition: 'all 0.2s'
                    }}
                  >
                    <strong style={{ display: 'block', fontSize: '14.5px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>
                      2. Защита ответчика в суде →
                    </strong>
                    <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.4, display: 'block' }}>
                      Отзыв на иск, встречный иск, снижение неустойки и заседания.
                    </span>
                  </Link>

                  <Link
                    href="/biznesu/arbitrazhnyj-yurist/obzhalovanie-resheniya-arbitrazhnogo-suda/"
                    className="hover-lift"
                    style={{
                      display: 'block',
                      padding: '14px 16px',
                      background: 'var(--color-bg-light)',
                      border: '1px solid var(--color-border)',
                      borderLeft: '3px solid var(--color-deep-blue)',
                      textDecoration: 'none',
                      transition: 'all 0.2s'
                    }}
                  >
                    <strong style={{ display: 'block', fontSize: '14.5px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>
                      3. Обжалование решений суда →
                    </strong>
                    <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.4, display: 'block' }}>
                      Апелляционные и кассационные жалобы, приостановление исполнения.
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Строка доверия (4 факта) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
            marginTop: '48px',
            paddingTop: '36px',
            borderTop: '1px solid rgba(193, 160, 102, 0.25)'
          }}>
            <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '2px' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>
                  Опыт в арбитражных судах
                </strong>
                <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.45 }}>
                  Представительство истцов, ответчиков и третьих лиц
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '2px' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>
                  Комплексная защита
                </strong>
                <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.45 }}>
                  От досудебного анализа до кассационной инстанции
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '2px' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>
                  Прозрачный договор
                </strong>
                <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.45 }}>
                  Фиксация состава работы и стоимости каждого этапа
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <div style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '2px' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>
                  Конфиденциальность
                </strong>
                <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.45 }}>
                  Защита коммерческих данных и безопасный обмен
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 2: СИТУАЦИИ: В КАКОЙ СИТУАЦИИ ВАМ НУЖЕН АРБИТРАЖНЫЙ ЮРИСТ ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '44px', textAlign: 'left' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Типовые поводы для обращения
            </div>
            <h2 className="with-accent" style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-deep-blue)',
              margin: '0 0 16px 0',
              lineHeight: 1.2
            }}>
              В какой ситуации вам нужен арбитражный юрист
            </h2>
            <p style={{
              fontSize: '16px',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.6,
              margin: 0
            }}>
              Подключаемся к спору на любой стадии: до подачи иска, после получения претензии или определения суда, в процессе слушаний или на этапе апелляции.
            </p>
          </div>

          {/* 3x2 Сетка карточек */}
          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '32px' }}>
            {situations.map((item, i) => (
              <div
                key={i}
                className="hover-lift"
                style={{
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  padding: '32px 26px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)'
                }}
              >
                <div>
                  <div style={{
                    fontSize: '11.5px',
                    fontWeight: 700,
                    color: 'var(--color-gold)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '12px',
                    background: 'rgba(193, 160, 102, 0.12)',
                    padding: '4px 10px',
                    display: 'inline-block'
                  }}>
                    {item.tag}
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '18px',
                    fontWeight: 600,
                    color: 'var(--color-deep-blue)',
                    margin: '0 0 12px 0',
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
              </div>
            ))}
          </div>

          {/* Баннер «Не нашли свою ситуацию?» */}
          <div
            style={{
              background: 'linear-gradient(135deg, var(--color-deep-blue) 0%, #17324D 100%)',
              padding: '36px 44px',
              borderTop: '3px solid var(--color-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '24px'
            }}
          >
            <div style={{ maxWidth: '640px' }}>
              <h3 style={{
                color: '#FFFFFF',
                fontSize: '20px',
                fontFamily: 'var(--font-serif)',
                margin: '0 0 8px 0',
                lineHeight: 1.3
              }}>
                Не нашли свою ситуацию в списке?
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.82)', fontSize: '14.5px', margin: 0, lineHeight: 1.55 }}>
                Опишите обстоятельства арбитражного спора. Мы оценим процессуальную подведомственность, определим риски и предложим последовательный план действий.
              </p>
            </div>
            <a
              href="#form"
              className="btn btn-gold"
              style={{
                padding: '14px 30px',
                fontSize: '15px',
                fontWeight: 600,
                whiteSpace: 'nowrap'
              }}
            >
              Получить правовую оценку
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: СРОЧНЫЕ СИТУАЦИИ (ТЁМНЫЙ БЛОК + ДЕЙСТВИЯ) ═══ */}
      <section className="section" style={{ background: 'var(--color-deep-blue)', color: '#FFFFFF', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '44px', textAlign: 'left' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Критические процессуальные риски
            </div>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontFamily: 'var(--font-serif)',
              color: '#FFFFFF',
              margin: '0 0 16px 0',
              lineHeight: 1.2
            }}>
              Когда действовать нужно срочно
            </h2>
            <p style={{
              fontSize: '16px',
              color: 'rgba(255, 255, 255, 0.82)',
              lineHeight: 1.6,
              margin: 0
            }}>
              В арбитражном процессе пропуск срока или неявка в заседание не останавливают рассмотрение дела и могут привести к вынесению решения не в пользу компании.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '24px', marginBottom: '40px' }}>
            {urgentItems.map((item, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderLeft: '4px solid var(--color-gold)',
                  padding: '28px 26px'
                }}
              >
                <h3 style={{
                  fontSize: '18px',
                  fontFamily: 'var(--font-serif)',
                  color: '#FFFFFF',
                  margin: '0 0 10px 0',
                  lineHeight: 1.35
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '14.5px',
                  color: 'rgba(255, 255, 255, 0.78)',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Панель прямой телефонной связи */}
          <div style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.15)',
            paddingTop: '28px',
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            flexWrap: 'wrap'
          }}>
            <a href="tel:+79103503111" style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.02em' }} data-analytics="phone_click">
              +7 (910) 350-31-11
            </a>
            <a href="tel:+79103503111" className="btn-urgent-call" style={{ padding: '14px 28px', fontSize: '15px' }} data-analytics="phone_click">
              Позвонить юристу
            </a>
            <a href="#form" className="btn btn-urgent-outline" style={{ padding: '14px 28px', fontSize: '15px' }}>
              Описать спор онлайн
            </a>
            <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px' }}>
              Перезвоним в рабочее время и оценим риски до истечения процессуальных сроков
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
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontFamily: 'var(--font-serif)',
                color: 'var(--color-primary)',
                margin: 0,
                lineHeight: 1.2
              }}>
                До начала процесса <br />проверяем две вещи
              </h2>
            </div>
            <div style={{ maxWidth: '480px', paddingTop: '24px' }}>
              <p style={{
                fontSize: '15.5px',
                color: 'var(--color-deep-blue)',
                lineHeight: 1.65,
                margin: 0,
                opacity: 0.92
              }}>
                Сильная доказательственная база не гарантирует результат без соблюдения процессуальных норм. Мы оцениваем дело с двух взаимосвязанных сторон.
              </p>
            </div>
          </div>

          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            {/* Карточка 1: Материально-правовые основания */}
            <div style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-primary)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
                <span style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(193, 160, 102, 0.15)',
                  color: 'var(--color-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '15px'
                }}>1</span>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '20px',
                  color: 'var(--color-deep-blue)',
                  margin: 0
                }}>
                  Материально-правовая основа
                </h3>
              </div>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                Проверяем договорные обязательства, первичную документацию (акты, накладные, УПД), корректность расчёта основного долга, штрафов и процентов, а также соблюдение досудебного претензионного порядка.
              </p>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', color: 'var(--color-deep-blue)', lineHeight: 1.7 }}>
                <li>Наличие и действительность подписанных договоров и спецификаций</li>
                <li>Сроки исковой давности и фиксация признания долга оппонентом</li>
                <li>Обоснованность контррасчётов и возможность снижения неустойки</li>
              </ul>
            </div>

            {/* Карточка 2: Процессуальная реализуемость */}
            <div style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-gold)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
                <span style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(193, 160, 102, 0.15)',
                  color: 'var(--color-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '15px'
                }}>2</span>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '20px',
                  color: 'var(--color-deep-blue)',
                  margin: 0
                }}>
                  Процессуальная реализуемость
                </h3>
              </div>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                Оцениваем надлежащую подсудность спора, статус участников (юрлица, ИП, третьи лица), основания для наложения обеспечительных мер (арест счетов) и реальную исполнимость судебного акта.
              </p>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', color: 'var(--color-deep-blue)', lineHeight: 1.7 }}>
                <li>Определение компетентного арбитражного суда и вида производства</li>
                <li>Анализ картотеки арбитражных дел на наличие банкротных и иных исков</li>
                <li>Риски встречных исков и основания для назначения судебных экспертиз</li>
              </ul>
            </div>
          </div>

          {/* Золотая плашка действия с кнопкой справа */}
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
                Сопоставляем оба параметра на консультации до согласования объёма поручения
              </span>
            </div>
            <a href="#form" className="btn btn-primary" style={{ padding: '12px 28px', fontSize: '14.5px' }}>
              Проверить перспективу спора
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: СЦЕНАРИИ / ВЫБОР ПРОЦЕССУАЛЬНОГО МАРШРУТА ═══ */}
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
              Выбор процессуального маршрута
            </div>
            <h2 className="with-accent" style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-deep-blue)',
              margin: '0 0 16px 0',
              lineHeight: 1.2
            }}>
              Каждый спор требует индивидуального маршрута
            </h2>
            <p style={{
              fontSize: '16px',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.6,
              margin: 0
            }}>
              Порядок работы зависит от процессуальной роли доверителя, наличия встречных претензий и стадии рассмотрения дела.
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
                  padding: '34px 28px',
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
                    letterSpacing: '0.08em',
                    marginBottom: '14px',
                    background: 'rgba(193, 160, 102, 0.12)',
                    padding: '4px 10px',
                    display: 'inline-block'
                  }}>
                    {item.tag}
                  </div>
                  <h3 style={{
                    fontSize: '18px',
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--color-deep-blue)',
                    margin: '0 0 12px 0',
                    lineHeight: 1.35
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    margin: '0 0 20px 0'
                  }}>
                    {item.desc}
                  </p>
                </div>

                <div style={{
                  borderTop: '1px solid rgba(193, 160, 102, 0.25)',
                  paddingTop: '16px',
                  fontSize: '13px',
                  color: 'var(--color-primary)',
                  fontWeight: 500,
                  lineHeight: 1.45
                }}>
                  <span style={{ color: 'var(--color-gold)', fontWeight: 700, display: 'block', marginBottom: '2px', fontSize: '11.5px', textTransform: 'uppercase' }}>
                    Применимый маршрут:
                  </span>
                  {item.route}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 6: ЭТАПЫ РАБОТЫ (ГОРИЗОНТАЛЬНЫЕ КАРТОЧКИ НА ВСЮ ШИРИНУ) ═══ */}
      <section className="section bg-light" id="stages" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '44px', textAlign: 'left' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Порядок взаимодействия
            </div>
            <h2 className="with-accent" style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-primary)',
              margin: '0 0 16px 0',
              lineHeight: 1.2
            }}>
              Этапы ведения арбитражного спора
            </h2>
            <p style={{
              fontSize: '16px',
              color: 'var(--color-deep-blue)',
              lineHeight: 1.6,
              margin: 0,
              opacity: 0.92
            }}>
              Работа строится по прозрачным процессуальным этапам с фиксацией результатов и промежуточных согласований.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
            {stages.map((st, i) => (
              <div
                key={i}
                className="stage-horizontal-card hover-lift"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid var(--color-border)',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)',
                  padding: '28px 32px',
                  display: 'grid',
                  gridTemplateColumns: '80px 1.2fr 2fr 1.5fr',
                  alignItems: 'center',
                  gap: '24px',
                  position: 'relative'
                }}
              >
                <div className="stage-accent"></div>
                <div style={{
                  fontSize: '28px',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 700,
                  color: 'var(--color-gold)'
                }}>
                  {st.num}
                </div>
                <div>
                  <h3 style={{
                    fontSize: '17px',
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--color-deep-blue)',
                    margin: 0,
                    lineHeight: 1.35
                  }}>
                    {st.stage}
                  </h3>
                </div>
                <div>
                  <span style={{ fontSize: '11.5px', fontWeight: 700, color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '4px' }}>
                    Состав работы:
                  </span>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.55 }}>
                    {st.works}
                  </p>
                </div>
                <div style={{
                  background: 'rgba(193, 160, 102, 0.08)',
                  padding: '14px 18px',
                  borderLeft: '3px solid var(--color-gold)'
                }}>
                  <span style={{ fontSize: '11.5px', fontWeight: 700, color: 'var(--color-deep-blue)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '2px' }}>
                    Результат этапа:
                  </span>
                  <span style={{ fontSize: '13.5px', color: 'var(--color-deep-blue)', lineHeight: 1.45, fontWeight: 500 }}>
                    {st.result}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Плашка действия */}
          <div style={{
            padding: '24px 32px',
            background: '#FFFFFF',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-primary)',
            boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <span style={{ fontSize: '15px', color: 'var(--color-deep-blue)', fontWeight: 500 }}>
              Стоимость и объём каждого этапа фиксируются в договоре до начала процессуальных действий
            </span>
            <a href="#form" className="btn btn-primary" style={{ padding: '12px 28px', fontSize: '14.5px' }}>
              Согласовать этапы работы
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 7: КАТЕГОРИИ СПОРОВ (3x3 МАТРИЦА) ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '44px', textAlign: 'left' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Отраслевая компетенция
            </div>
            <h2 className="with-accent" style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-deep-blue)',
              margin: '0 0 16px 0',
              lineHeight: 1.2
            }}>
              Категории арбитражных споров
            </h2>
            <p style={{
              fontSize: '16px',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.6,
              margin: 0
            }}>
              Ведём судебные дела во всех основных сферах коммерческой и хозяйственной деятельности предприятий.
            </p>
          </div>

          <div className="claims-matrix-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px'
          }}>
            {disputeCategories.map((cat, i) => (
              <div
                key={i}
                className="usp-card hover-lift"
                style={{
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  border: '1px solid var(--color-border)',
                  padding: '30px 26px',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)'
                }}
              >
                <div className="usp-accent"></div>
                <div>
                  <h3 style={{
                    fontSize: '17.5px',
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--color-deep-blue)',
                    margin: '0 0 12px 0',
                    lineHeight: 1.35
                  }}>
                    {cat.title}
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    margin: '0 0 16px 0'
                  }}>
                    {cat.desc}
                  </p>
                </div>
                <Link
                  href={cat.href}
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--color-primary)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  Подробнее о направлении →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 8: ДОКУМЕНТЫ (ОБЯЗАТЕЛЬНО VS ДОПОЛНИТЕЛЬНО) ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '44px', textAlign: 'left' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Документооборот
            </div>
            <h2 className="with-accent" style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-primary)',
              margin: '0 0 16px 0',
              lineHeight: 1.2
            }}>
              Документы для правового анализа
            </h2>
            <p style={{
              fontSize: '16px',
              color: 'var(--color-deep-blue)',
              lineHeight: 1.6,
              margin: 0,
              opacity: 0.92
            }}>
              Для первичной оценки не требуется заверять копии у нотариуса — достаточно сканов или электронных копий документов.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            {/* Обязательные документы */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-primary)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px'
            }}>
              <div style={{
                fontSize: '12px',
                fontWeight: 700,
                color: 'var(--color-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '14px'
              }}>
                Обязательный базовый комплект
              </div>
              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '20px',
                color: 'var(--color-deep-blue)',
                margin: '0 0 16px 0'
              }}>
                Документы по сделке и спору
              </h3>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.75 }}>
                <li>Договор со всеми приложениями, спецификациями и допсоглашениями</li>
                <li>Первичные документы: акты выполненных работ, товарные накладные, УПД</li>
                <li>Досудебная претензия и подтверждение её направления (квитанция, опись)</li>
                <li>Ответ оппонента на претензию (при наличии)</li>
                <li>По начавшемуся спору: копия иска, определение суда, номер дела</li>
              </ul>
            </div>

            {/* Дополнительные документы */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-gold)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px'
            }}>
              <div style={{
                fontSize: '12px',
                fontWeight: 700,
                color: 'var(--color-gold)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '14px'
              }}>
                Дополнительные материалы
              </div>
              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '20px',
                color: 'var(--color-deep-blue)',
                margin: '0 0 16px 0'
              }}>
                Усиливающие доказательства
              </h3>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.75 }}>
                <li>Деловая переписка сторон (электронная почта, мессенджеры, протоколы встреч)</li>
                <li>Акты сверки взаимных расчетов, подписанные уполномоченными лицами</li>
                <li>Платежные поручения, выписки по банковским счетам, кассовые ордера</li>
                <li>Заключения независимых специалистов, экспертные исследования, дефектные ведомости</li>
                <li>Доверенность на представителя или уставные документы (выписка из ЕГРЮЛ)</li>
              </ul>
            </div>
          </div>

          {/* Предупреждение о конфиденциальности */}
          <div style={{
            background: 'rgba(23, 50, 77, 0.04)',
            border: '1px solid rgba(23, 50, 77, 0.1)',
            padding: '20px 24px',
            fontSize: '13.5px',
            color: 'var(--color-deep-blue)',
            lineHeight: 1.6,
            display: 'flex',
            alignItems: 'center',
            gap: '14px'
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span>
              <strong>Безопасность данных:</strong> Не передавайте конфиденциальные материалы через открытые каналы. После первичной консультации мы согласуем защищенный способ передачи документов.
            </span>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 9: КОМАНДА АРБИТРАЖНОЙ ПРАКТИКИ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '44px', textAlign: 'left' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Судебные представители
            </div>
            <h2 className="with-accent" style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-deep-blue)',
              margin: '0 0 16px 0',
              lineHeight: 1.2
            }}>
              Команда арбитражной практики «Де-Юре»
            </h2>
            <p style={{
              fontSize: '16px',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.6,
              margin: 0
            }}>
              Арбитражные споры ведут юристы с опытом представительства в арбитражных судах всех инстанций.
            </p>
          </div>

          <div style={{
            background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
            border: '1px solid var(--color-border)',
            borderTop: '3px solid var(--color-primary)',
            boxShadow: '0 8px 30px rgba(23, 50, 77, 0.06)',
            padding: '40px 48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '32px'
          }}>
            <div style={{ maxWidth: '640px' }}>
              <div style={{
                fontSize: '12px',
                fontWeight: 700,
                color: 'var(--color-gold)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '10px'
              }}>
                Стандарты судебного ведения дел
              </div>
              <h3 style={{
                fontSize: '22px',
                fontFamily: 'var(--font-serif)',
                color: 'var(--color-deep-blue)',
                margin: '0 0 14px 0',
                lineHeight: 1.3
              }}>
                Индивидуальное закрепление юриста за делом
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.65, margin: 0 }}>
                За каждым арбитражным спором закрепляется ведущий юрист практики, который готовит процессуальные документы, участвует в заседаниях и лично координирует процессуальную стратегию с руководством доверителя.
              </p>
            </div>
            <a href="#form" className="btn btn-primary" style={{ padding: '14px 32px', fontSize: '15px', whiteSpace: 'nowrap' }}>
              Подобрать юриста под спор
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 10: СУДЕБНАЯ ПРАКТИКА И КЕЙСЫ ═══ */}
      <section className="section bg-light" id="cases" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '44px', textAlign: 'left' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Практический опыт
            </div>
            <h2 className="with-accent" style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-primary)',
              margin: '0 0 16px 0',
              lineHeight: 1.2
            }}>
              Примеры завершённых арбитражных дел
            </h2>
            <p style={{
              fontSize: '16px',
              color: 'var(--color-deep-blue)',
              lineHeight: 1.6,
              margin: 0,
              opacity: 0.92
            }}>
              Обезличенные примеры судебных решений из нашей практики по сложным коммерческим спорам.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {cases.map((c, i) => (
              <div
                key={i}
                className="hover-lift"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <span style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--color-gold)' }}>
                      {c.num}
                    </span>
                    <span style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: 'var(--color-primary)',
                      background: 'rgba(193, 160, 102, 0.15)',
                      padding: '4px 8px',
                      borderRadius: '2px',
                      textTransform: 'uppercase'
                    }}>
                      {c.badge}
                    </span>
                  </div>
                  <div style={{
                    fontSize: '12.5px',
                    fontWeight: 700,
                    color: 'var(--color-deep-blue)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    marginBottom: '10px',
                    lineHeight: 1.4
                  }}>
                    {c.category}
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
                    {c.desc}
                  </p>
                </div>
                <div style={{
                  borderTop: '1px solid rgba(193, 160, 102, 0.25)',
                  paddingTop: '14px',
                  fontSize: '13px',
                  color: 'var(--color-deep-blue)',
                  fontWeight: 600,
                  lineHeight: 1.45
                }}>
                  {c.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 11: СХЕМА РАБОТЫ (ПРОЦЕСС) ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '44px', textAlign: 'left' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Понятный алгоритм
            </div>
            <h2 className="with-accent" style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-deep-blue)',
              margin: '0 0 16px 0',
              lineHeight: 1.2
            }}>
              Как мы начинаем работу по спору
            </h2>
            <p style={{
              fontSize: '16px',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.6,
              margin: 0
            }}>
              Четкая последовательность шагов от первичного звонка до вынесения итогового судебного решения.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            <div style={{ padding: '24px', background: 'var(--color-bg-light)', borderLeft: '3px solid var(--color-primary)' }}>
              <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '6px' }}>
                1. Обращение и согласование связи
              </strong>
              <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                Вы оставляете заявку или звоните юристу. Мы уточняем предмет спора, суд и процессуальные сроки.
              </span>
            </div>
            <div style={{ padding: '24px', background: 'var(--color-bg-light)', borderLeft: '3px solid var(--color-gold)' }}>
              <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '6px' }}>
                2. Передача документов и аудит
              </strong>
              <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                Изучаем договоры, акты, переписку и материалы дела. Оцениваем шансы и определяем риски.
              </span>
            </div>
            <div style={{ padding: '24px', background: 'var(--color-bg-light)', borderLeft: '3px solid var(--color-primary)' }}>
              <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '6px' }}>
                3. Заключение договора
              </strong>
              <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                Фиксируем состав услуг, этапы и фиксированную стоимость в официальном договоре.
              </span>
            </div>
            <div style={{ padding: '24px', background: 'var(--color-bg-light)', borderLeft: '3px solid var(--color-gold)' }}>
              <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '6px' }}>
                4. Подготовка и подача документов
              </strong>
              <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                Составляем иск, отзыв, жалобу, направляем сторонам и регистрируем в арбитражном суде.
              </span>
            </div>
            <div style={{ padding: '24px', background: 'var(--color-bg-light)', borderLeft: '3px solid var(--color-primary)' }}>
              <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '6px' }}>
                5. Судебное представительство
              </strong>
              <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                Участвуем во всех судебных заседаниях, заявляем ходатайства и защищаем интересы доверителя.
              </span>
            </div>
            <div style={{ padding: '24px', background: 'var(--color-bg-light)', borderLeft: '3px solid var(--color-gold)' }}>
              <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '6px' }}>
                6. Судебный акт и расходы
              </strong>
              <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                Получаем итоговый судебный акт, исполнительный лист и взыскиваем расходы на юриста с оппонента.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 12: ЦЕНЫ И СТОИМОСТЬ УСЛУГ ═══ */}
      <section className="section bg-light" id="pricing" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '44px', textAlign: 'left' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Тарифные планы
            </div>
            <h2 className="with-accent" style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-primary)',
              margin: '0 0 16px 0',
              lineHeight: 1.2
            }}>
              Стоимость услуг арбитражного юриста
            </h2>
            <p style={{
              fontSize: '16px',
              color: 'var(--color-deep-blue)',
              lineHeight: 1.6,
              margin: 0,
              opacity: 0.92
            }}>
              Прозрачные тарифы без скрытых платежей. Стоимость каждого согласованного этапа фиксируется в договоре.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '32px' }}>
            {pricingTiers.map((tier, i) => (
              <div
                key={i}
                className="hover-lift"
                style={{
                  background: '#FFFFFF',
                  border: tier.highlight ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                  borderTop: '4px solid var(--color-primary)',
                  padding: '36px 30px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: tier.highlight ? '0 8px 30px rgba(23, 50, 77, 0.1)' : '0 4px 20px rgba(23, 50, 77, 0.04)',
                  position: 'relative'
                }}
              >
                {tier.highlight && (
                  <div style={{
                    position: 'absolute',
                    top: '-13px',
                    right: '24px',
                    background: 'var(--color-primary)',
                    color: '#FFFFFF',
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    padding: '4px 12px',
                    borderRadius: '2px'
                  }}>
                    Популярный выбор
                  </div>
                )}
                <div>
                  <h3 style={{
                    fontSize: '20px',
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--color-deep-blue)',
                    margin: '0 0 8px 0',
                    lineHeight: 1.3
                  }}>
                    {tier.name}
                  </h3>
                  <div style={{
                    fontSize: '28px',
                    fontWeight: 700,
                    color: 'var(--color-gold)',
                    fontFamily: 'var(--font-serif)',
                    marginBottom: '14px'
                  }}>
                    {tier.price}
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, marginBottom: '24px' }}>
                    {tier.desc}
                  </p>
                  <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '20px', marginBottom: '28px' }}>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-deep-blue)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>
                      Что входит в тариф:
                    </div>
                    <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                      {tier.features.map((feat, idx) => (
                        <li key={idx}>{feat}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href="#form"
                  className={tier.highlight ? 'btn btn-primary' : 'btn btn-outline'}
                  style={{ width: '100%', textAlign: 'center', padding: '12px 20px', fontSize: '14.5px' }}
                >
                  Выбрать тариф
                </a>
              </div>
            ))}
          </div>

          <div style={{
            fontSize: '13.5px',
            color: 'var(--color-text-secondary)',
            textAlign: 'center',
            lineHeight: 1.5
          }}>
            Окончательная стоимость зависит от категории сложности спора, цены иска и объема доказательств.
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 13: FAQ (12 ВОПРОСОВ ИЗ ТЗ) ═══ */}
      <section className="section bg-white" id="faq" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '44px', textAlign: 'left' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Частые вопросы
            </div>
            <h2 className="with-accent" style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-deep-blue)',
              margin: '0 0 16px 0',
              lineHeight: 1.2
            }}>
              Вопросы и ответы по арбитражным делам
            </h2>
            <p style={{
              fontSize: '16px',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.6,
              margin: 0
            }}>
              Разъяснения арбитражного юриста по ключевым процессуальным моментам.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '900px' }}>
            {faqItems.map((item, i) => (
              <div
                key={i}
                style={{
                  border: '1px solid var(--color-border)',
                  background: openFaq === i ? 'var(--color-bg-light)' : '#FFFFFF',
                  transition: 'all 0.2s'
                }}
              >
                <button
                  onClick={() => toggleFaq(i)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    gap: '16px'
                  }}
                  aria-expanded={openFaq === i}
                >
                  <span style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: 'var(--color-deep-blue)',
                    fontFamily: 'var(--font-serif)'
                  }}>
                    {item.q}
                  </span>
                  <span style={{
                    fontSize: '20px',
                    color: 'var(--color-gold)',
                    fontWeight: 700,
                    transform: openFaq === i ? 'rotate(45deg)' : 'none',
                    transition: 'transform 0.2s',
                    flexShrink: 0
                  }}>
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div style={{
                    padding: '0 24px 22px 24px',
                    fontSize: '14.5px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.65,
                    borderTop: '1px solid rgba(0,0,0,0.05)'
                  }}>
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 14: ОФИС В ЛИПЕЦКЕ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'center'
          }}>
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
              <h2 className="with-accent" style={{
                fontSize: 'clamp(26px, 3.5vw, 36px)',
                fontFamily: 'var(--font-serif)',
                color: 'var(--color-primary)',
                margin: '0 0 20px 0',
                lineHeight: 1.25
              }}>
                Юридическая помощь компаниям региона
              </h2>
              <p style={{ fontSize: '15.5px', color: 'var(--color-deep-blue)', lineHeight: 1.65, marginBottom: '24px' }}>
                Работаем с компаниями и предпринимателями в Липецке и Липецкой области. Часть консультаций, подготовки документов и процессуальных действий может выполняться дистанционно.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14.5px', color: 'var(--color-deep-blue)', marginBottom: '32px' }}>
                <div><strong>Адрес:</strong> г. Липецк, пл. Победы, д. 8, офис 412</div>
                <div><strong>Режим работы:</strong> Пн–Пт с 09:00 до 18:00 (по предварительной записи)</div>
                <div><strong>Телефон:</strong> +7 (910) 350-31-11</div>
              </div>
              <a
                href="https://yandex.ru/maps/-/CDuWqM5Z"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-route-map"
                style={{ width: '100%', textAlign: 'center', padding: '14px 28px', fontSize: '15px' }}
              >
                Построить маршрут на Яндекс.Картах →
              </a>
            </div>

            <div style={{
              background: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-gold)',
              boxShadow: '0 8px 30px rgba(23, 50, 77, 0.08)',
              padding: '24px'
            }}>
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=39.573436%2C52.603884&z=16&pt=39.573436,52.603884,pm2rdm"
                width="100%"
                height="340"
                frameBorder="0"
                allowFullScreen={true}
                style={{ position: 'relative', border: '1px solid var(--color-border)' }}
                title="Офис Де-Юре на карте Липецка"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 15: ФИНАЛЬНАЯ ЛИД-ФОРМА ═══ */}
      <section className="section bg-white" id="form" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center', marginBottom: '40px' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Правовая оценка спора
            </div>
            <h2 className="with-accent" style={{
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-deep-blue)',
              margin: '0 0 16px 0',
              lineHeight: 1.2
            }}>
              Обсудите арбитражный спор с юристом
            </h2>
            <p style={{
              fontSize: '16px',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.6,
              margin: 0
            }}>
              Кратко опишите предмет спора, свою роль и текущую стадию. Если уже получен судебный документ, укажите его номер и дату.
            </p>
          </div>

          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <ContactsForm
              title="Заявка на арбитражную консультацию"
              subtitle="Перезвоним в течение 15 минут в рабочее время для уточнения обстоятельств спора."
              hiddenFields={[{ name: 'service', value: 'Арбитражный юрист в Липецке (Хаб)' }]}
              buttonText="Обсудить ситуацию"
            />

            <div style={{
              marginTop: '20px',
              fontSize: '12.5px',
              color: 'var(--color-text-secondary)',
              textAlign: 'center',
              lineHeight: 1.5
            }}>
              Не указывайте в форме коммерческую тайну и персональные данные. Материалы дела передаются после согласования защищённого канала связи.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
