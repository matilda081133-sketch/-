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

export default function YuristNedvizhimostStroitelstvoClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 10 FAQ items from ТЗ BIZ-09 (Section 9)
  const faqs = [
    {
      q: 'С какими задачами помогает юрист по недвижимости и строительству для бизнеса?',
      a: 'Помогаем проверить и сопроводить сделки с коммерческой недвижимостью, аренду, земельно-градостроительные вопросы, строительство и реконструкцию, а также споры между участниками строительного проекта. Конкретный состав помощи зависит от объекта, стадии и документов.'
    },
    {
      q: 'На чьей стороне вы работаете?',
      a: 'Можем представлять покупателя или продавца, арендодателя или арендатора, заказчика или подрядчика. До начала работы проверяем возможный конфликт интересов и фиксируем, чьи интересы и на каких этапах защищает юридическая компания.'
    },
    {
      q: 'Когда лучше подключать юриста к сделке с коммерческой недвижимостью?',
      a: 'До внесения задатка, подписания предварительного или основного договора и проведения расчётов. Если документы уже подписаны, можно передать их на анализ, чтобы определить оставшиеся риски и возможные действия.'
    },
    {
      q: 'Проверяете ли вы не только договор, но и сам объект?',
      a: 'Объём проверки согласуется отдельно. В него могут входить права и обременения, основания приобретения объекта, сведения ЕГРН, судебные и исполнительные риски, договоры аренды, права на землю и градостроительные ограничения. Техническое состояние оценивают профильные специалисты.'
    },
    {
      q: 'Можно ли обратиться только для проверки договора аренды?',
      a: 'Да. Можно согласовать отдельную экспертизу договора, подготовку протокола разногласий, участие в переговорах либо комплексное сопровождение заключения, изменения или расторжения аренды.'
    },
    {
      q: 'На какой стадии строительства нужен юрист?',
      a: 'Юрист может подключиться до приобретения участка, при формировании договорной структуры, получении разрешительной документации, исполнении договоров, приёмке, вводе объекта или после возникновения спора. Чем раньше выявлен правовой риск, тем больше вариантов его учесть в документах и действиях сторон.'
    },
    {
      q: 'Вы помогаете получить разрешение на строительство или ввод объекта?',
      a: 'Можем проверить правовую часть исходных документов, определить возможный маршрут, подготовить обращения и сопровождать взаимодействие с органами в согласованном объёме. Возможность получения документа оценивается только после анализа объекта, земли и стадии проекта.'
    },
    {
      q: 'Что делать, если уже получены претензия, иск, отказ или предписание?',
      a: 'Сохраните документ, приложения, подтверждение даты получения и связанную переписку. Передайте юристу сведения о документе и ближайших датах. Не подписывайте ответ или соглашение, смысл и последствия которых не проверены.'
    },
    {
      q: 'Какие документы нужны для первой встречи?',
      a: 'Полезны сведения об объекте, кадастровый номер, выписка ЕГРН, договоры и приложения, переписка, претензии, акты, градостроительные или разрешительные документы. Полный перечень определяется после уточнения задачи; отсутствие части документов не мешает начать первичный разбор.'
    },
    {
      q: 'От чего зависят срок и стоимость юридической помощи?',
      a: 'От количества объектов и участников, стадии проекта или спора, объёма документов, срочности, необходимости переговоров, экспертизы, судебного представительства и привлечения технических специалистов. Состав работ и порядок оплаты согласуются до начала соответствующего этапа.'
    }
  ];

  // 5 Directions of the cluster (ТЗ 7.2)
  const directions = [
    {
      title: 'Сопровождение сделок с коммерческой недвижимостью',
      desc: 'Проверим объект, правообладателя и документы, поможем согласовать условия и сопроводим сделку на выбранных этапах.',
      href: '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/soprovozhdenie-sdelok-s-kommercheskoy-nedvizhimostyu/',
      tag: 'Покупка и продажа'
    },
    {
      title: 'Юридическое сопровождение аренды коммерческой недвижимости',
      desc: 'Подготовим или проверим договор, оценим риски арендодателя или арендатора и поможем урегулировать разногласия.',
      href: '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/yuridicheskoe-soprovozhdenie-arendy-kommercheskoy-nedvizhimosti/',
      tag: 'Аренда'
    },
    {
      title: 'Земельно-градостроительное сопровождение бизнеса',
      desc: 'Проверим правовой режим участка, градостроительные ограничения и возможность реализации коммерческого проекта.',
      href: '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/zemelno-gradostroitelnoe-soprovozhdenie/',
      tag: 'Земля и ПЗЗ'
    },
    {
      title: 'Юридическое сопровождение строительства и реконструкции',
      desc: 'Сформируем юридический маршрут проекта и подключимся к договорам, разрешительной работе, переписке и оформлению результата.',
      href: '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/yuridicheskoe-soprovozhdenie-stroitelstva/',
      tag: 'Проекты и стройка'
    },
    {
      title: 'Юрист по строительным спорам',
      desc: 'Разберём договор, акты и технические материалы, сформируем позицию и представим интересы в переговорах или арбитражном суде.',
      href: '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/stroitelnye-spory/',
      tag: 'Арбитраж и подряд'
    }
  ];

  // 8 Situations from ТЗ 7.1
  const situations: { tag: string; title: string; desc: string; buttonText?: string; href?: string }[] = [
    {
      tag: 'ПОКУПКА И ПРОДАЖА',
      title: 'Покупка или продажа объекта',
      desc: 'Нужно проверить коммерческую недвижимость, продавца, ограничения и условия сделки до подписания документов.'
    },
    {
      tag: 'КОММЕРЧЕСКАЯ АРЕНДА',
      title: 'Коммерческая аренда',
      desc: 'Нужно подготовить или проверить договор, изменить условия, расторгнуть аренду либо урегулировать спор по помещению.'
    },
    {
      tag: 'ЗЕМЛЯ И ПРОЕКТ',
      title: 'Участок под проект',
      desc: 'Нужно понять, допускают ли права на землю, ВРИ, ПЗЗ, ГПЗУ и ограничения запланированное использование или строительство.'
    },
    {
      tag: 'СТРОИТЕЛЬСТВО',
      title: 'Строительство или реконструкция',
      desc: 'Требуется юридическая дорожная карта, договорная структура, разрешительная документация или сопровождение проекта до ввода.'
    },
    {
      tag: 'СТРОИТЕЛЬНЫЙ СПОР',
      title: 'Конфликт по строительным работам',
      desc: 'Заказчик или подрядчик спорит об оплате, сроках, объёме, качестве, приёмке, недостатках или возврате аванса.'
    },
    {
      tag: 'РОСРЕЕСТР И ВЕДОМСТВА',
      title: 'Отказ органа или Росреестра',
      desc: 'Получен отказ, приостановка или требование представить дополнительные документы. Сначала определим предмет и правильный маршрут.'
    },
    {
      tag: 'САМОВОЛЬНЫЙ ОБЪЕКТ',
      title: 'Риск самовольной постройки',
      desc: 'Объект или реконструкцию считают самовольными, требуют прекратить использование, привести объект в соответствие или снести.'
    },
    {
      tag: 'СЛОЖНАЯ ЗАДАЧА',
      title: 'Задача затрагивает несколько стадий',
      desc: 'Покупка участка, изменение режима, строительство, аренда или спор связаны между собой и требуют общего плана действий.',
      buttonText: 'Комплексная консультация',
      href: '#form'
    }
  ];

  // 6 Diagnostic Audit steps (ТЗ 7 п. 10)
  const auditItems = [
    {
      title: 'Первичный разбор и статус проекта',
      desc: 'Изучаем стадию отношений, цели бизнеса, состав сторон и ключевые документы для предварительной юридической квалификации.'
    },
    {
      title: 'Проверка прав, объекта и реестров ЕГРН',
      desc: 'Анализируем чистоту титула, обременения, судебные споры, цепочки сделок и риски оспаривания прав на недвижимость.'
    },
    {
      title: 'Земля, ВРИ, ПЗЗ и градостроительный режим',
      desc: 'Оцениваем допустимость размещения объекта по градостроительному плану, охранным зонам (ЗОУИТ) и нормативным ограничениям.'
    },
    {
      title: 'Договорная архитектура и риски исполнения',
      desc: 'Проверяем условия договоров подряда, аренды или купли-продажи, порядок расчётов, односторонний отказ и ответственность.'
    },
    {
      title: 'Выявление скрытых рисков и стоп-факторов',
      desc: 'Отделяем устранимые замечания от критических дефектов, грозящих признанием сделки недействительной или сносом постройки.'
    },
    {
      title: 'Формирование безопасной дорожной карты',
      desc: 'Предлагаем последовательный план действий: согласование условий, протокол разногласий, разрешительный этап или судебная защита.'
    }
  ];

  // 3 Cases from ТЗ section 8
  const cases: CaseData[] = [
    {
      title: 'Проверка коммерческого объекта перед покупкой',
      category: 'СДЕЛКА С ОБЪЕКТОМ',
      problem: 'Компания планировала приобрести складской комплекс. В документах требовалось проверить права на землю, характеристики зданий, обременения и последствия ранее выполненных изменений объекта.',
      action: 'Проанализировали ЕГРН и правоустанавливающие документы, сопоставили сведения об объектах и участке, выделили риски и условия, которые следовало урегулировать до расчётов и регистрации.',
      result: 'Стороны скорректировали документы и порядок сделки; покупатель принял решение после получения структурированной оценки рисков.',
      isDemo: false
    },
    {
      title: 'Подготовка участка под коммерческий проект',
      category: 'ЗЕМЛЯ ПОД ПРОЕКТ',
      problem: 'Бизнес рассматривал участок под размещение производственного объекта, но действующий режим земли и градостроительные документы требовали дополнительной проверки.',
      action: 'Проверили права на участок, ВРИ, территориальную зону, ограничения и доступные юридические процедуры; сформировали последовательность действий и перечень необходимых согласований.',
      result: 'Компания получила правовую дорожную карту и смогла оценить реализуемость проекта до основных инвестиций.',
      isDemo: false
    },
    {
      title: 'Защита подрядчика в споре об оплате работ',
      category: 'СТРОИТЕЛЬНЫЙ СПОР',
      problem: 'Заказчик отказался оплачивать часть строительных работ, ссылаясь на недостатки и несоответствие объёма, указанного в исполнительной документации.',
      action: 'Изучили договор, смету, акты КС-2/КС-3, деловую переписку и журналы работ. Сформировали правовую позицию по объёму и приёмке, подготовили претензионные и процессуальные документы.',
      result: 'Обосновали надлежащее исполнение и соблюдение порядка сдачи работ; требования по оплате и встречные доводы рассмотрены с учётом строительной экспертизы.',
      isDemo: false
    }
  ];

  // 6 Process Steps from ТЗ 7 п. 12
  const processSteps = [
    {
      num: '01',
      title: 'Задача и стадия',
      desc: 'Уточняем коммерческую цель, объект, стороны, текущую стадию проекта или суть возникшего разногласия.'
    },
    {
      num: '02',
      title: 'Исходные материалы',
      desc: 'Изучаем доступные документы: выписки ЕГРН, договоры, проектную документацию, акты или деловую переписку.'
    },
    {
      num: '03',
      title: 'Юридическая квалификация',
      desc: 'Определяем правовую природу проблемы, применимые правовые нормы, судебные и регуляторные риски.'
    },
    {
      num: '04',
      title: 'Варианты и риски',
      desc: 'Предлагаем доступные сценарии действий, оцениваем финансовые последствия и вероятность исхода.'
    },
    {
      num: '05',
      title: 'Согласованный объём',
      desc: 'Фиксируем состав юридических действий, контрольные этапы и стоимость в официальном договоре.'
    },
    {
      num: '06',
      title: 'Выполнение и результат',
      desc: 'Проводим аудит, переговоры, согласование условий, сопровождение сделки или судебную защиту в арбитраже.'
    }
  ];

  // 4 Pricing tiers from ТЗ 7.3
  const pricingTiers: PricingTier[] = [
    {
      title: 'Консультация и первичный разбор',
      price: 'от 5 000 ₽',
      subtitle: 'Анализ обстоятельств и стадии проекта, первичный просмотр документов и определение следующего правового шага.',
      buttonText: 'Выбрать тариф',
      buttonHref: '#form',
      features: [
        { name: 'Изучение исходных сведений и документов', value: '✓' },
        { name: 'Оценка рисков и стадии спора/проекта', value: '✓' },
        { name: 'Определение профильного направления', value: '✓' },
        { name: 'Рекомендации по следующим действиям', value: '✓' }
      ],
      popular: false
    },
    {
      title: 'Юридический аудит объекта или проекта',
      price: 'от 25 000 ₽',
      subtitle: 'Глубокая правовая проверка объекта, участка или сложного договора аренды/подряда с фиксацией рисков.',
      buttonText: 'Выбрать тариф',
      buttonHref: '#form',
      features: [
        { name: 'Проверка истории прав и обременений по ЕГРН', value: '✓' },
        { name: 'Анализ договоров, приложений и регламентов', value: '✓' },
        { name: 'Выявление скрытых стоп-факторов', value: '✓' },
        { name: 'Письменное заключение с дорожной картой', value: '✓' }
      ],
      popular: true,
      badgeText: 'ВОСТРЕБОВАНО'
    },
    {
      title: 'Подготовка документов или сопровождение',
      price: 'от 35 000 ₽',
      subtitle: 'Договор, протокол разногласий, претензия, переговоры, регистрационный или разрешительный этап.',
      buttonText: 'Выбрать тариф',
      buttonHref: '#form',
      features: [
        { name: 'Разработка безопасной структуры сделки', value: '✓' },
        { name: 'Участие в согласовании условий с контрагентом', value: '✓' },
        { name: 'Подготовка процессуальных и досудебных документов', value: '✓' },
        { name: 'Контроль регистрационных действий в Росреестре', value: '✓' }
      ],
      popular: false
    },
    {
      title: 'Комплексное сопровождение или суд',
      price: 'от 60 000 ₽',
      subtitle: 'Судебная защита в арбитраже или полное юридическое ведение строительного проекта на всех стадиях.',
      buttonText: 'Выбрать тариф',
      buttonHref: '#form',
      features: [
        { name: 'Формирование правовой позиции и доказательств', value: '✓' },
        { name: 'Представительство во всех судебных инстанциях', value: '✓' },
        { name: 'Взаимодействие с экспертами и госорганами', value: '✓' },
        { name: 'Регулярная отчётность и контроль исполнения', value: '✓' }
      ],
      popular: false
    }
  ];

  // 6 Related B2B Services (ТЗ 10.1)
  const relatedServices = [
    {
      title: 'Арбитражные споры для бизнеса',
      desc: 'Представительство компаний и ИП в арбитражных судах по имущественным, договорным и административным спорам.',
      link: '/biznesu/arbitrazhnyj-yurist/'
    },
    {
      title: 'Споры по договору поставки',
      desc: 'Взыскание задолженности, споры по качеству, срокам, одностороннему отказу и неустойкам при поставках товаров.',
      link: '/biznesu/dogovornoe-pravo/spory-po-dogovoru-postavki/'
    },
    {
      title: 'Взыскание задолженности с юрлиц',
      desc: 'Досудебное и судебное взыскание долгов, розыск активов должника и сопровождение исполнительного производства.',
      link: '/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/'
    },
    {
      title: 'Корпоративный юрист',
      desc: 'Корпоративные договоры, сделки с долями ООО, разрешение конфликтов участников и защита контроля над бизнесом.',
      link: '/biznesu/korporativnyj-yurist/'
    },
    {
      title: 'Исполнительное производство для бизнеса',
      desc: 'Эффективное взыскание по исполнительным листам, контроль действий судебных приставов и арест имущества.',
      link: '/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/'
    },
    {
      title: 'Трудовые споры для работодателей',
      desc: 'Защита бизнеса при проверках ГИТ, споры о материальной ответственности, увольнения и трудовые конфликты.',
      link: '/biznesu/trudovye-spory-s-rabotnikami/'
    }
  ];

  // Schema.org Graph
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
        '@id': 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/#service',
        name: 'Юрист по недвижимости и строительству для бизнеса в Липецке',
        serviceType: 'Юридические услуги по коммерческой недвижимости, земле и строительству',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        url: 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/',
        description: 'Юридическая помощь бизнесу по коммерческой недвижимости, земле и строительству в Липецке: сделки, аренда, сопровождение проектов и строительные споры.',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Направления юридической помощи бизнесу',
          itemListElement: directions.map(dir => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: dir.title,
              url: `https://dejure-help.ru${dir.href}`
            }
          }))
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/#breadcrumb',
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
            name: 'Юрист по недвижимости и строительству',
            item: 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/#faq',
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
            <span style={{ color: 'var(--color-text-main)' }}>Юрист по недвижимости и строительству</span>
          </>
        }
        superTitle={
          <span style={{ whiteSpace: 'normal', display: 'inline-block', lineHeight: 1.4 }}>
            <span style={{ display: 'inline-block' }}>Недвижимость и строительство •</span> <br />
            <span style={{ display: 'inline-block' }}>Бизнесу • Липецк и Липецкая область</span>
          </span>
        }
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Юрист по недвижимости
            </span>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              и строительству
            </span>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              для бизнеса
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '640px', textWrap: 'balance' }}>
            Проверим документы и правовые риски, определим подходящий формат помощи и подключимся к сделке, строительному проекту или спору на согласованных этапах.
          </span>
        }
        primaryCtaText="Обсудить задачу бизнеса"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_b2b_re"
        primaryCtaSubtext={
          <span style={{ display: 'block', marginTop: '-6px' }}>
            Перезвоним в течение 15 минут в рабочее время
          </span>
        }
        secondaryCtaText="С какими ситуациями помогаем"
        secondaryCtaLink="#situations"
        trustItems={[
          { text: 'Начинаем с документов и стадии проекта' },
          { text: 'Разделяем юридические, технические и финансовые риски' },
          { text: 'Состав работ и стоимость фиксируем в договоре' }
        ]}
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
              <path d="M3 21h18 M4 21v-2h16v2 M6 19V9 M10 19V9 M14 19V9 M18 19V9 M12 4l-9 5h18l-9-5z M4 9h16"/>
            </svg>

            <div className="mockup-container" style={{ zIndex: 1, margin: 0 }}>
              <div style={{ position: 'absolute', width: '220px', height: '220px', background: 'var(--color-primary)', filter: 'blur(90px)', opacity: 0.12, borderRadius: '50%' }}></div>
              
              {/* Лист 4: Фоновый документ */}
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

              {/* Лист 3: Выписка ЕГРН на коммерческий объект */}
              <div className="doc-wrapper-float-3">
                <div className="doc-sheet doc-sheet-3">
                  <div style={{ padding: '35px 25px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ position: 'absolute', top: '25px', left: '25px', width: '135px', height: '28px', border: '1.5px solid rgba(23, 50, 77, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-5deg)' }}>
                      <span style={{ fontSize: '8px', fontWeight: 'bold', color: 'rgba(23,50,77,0.7)', fontFamily: 'var(--font-serif)', letterSpacing: '0.04em' }}>ЕГРН БИЗНЕС № 48/01</span>
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

              {/* Лист 2: Договор строительного подряда / аренды */}
              <div className="doc-wrapper-float-2">
                <div className="doc-sheet doc-sheet-2">
                  <div style={{ padding: '28px 22px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ position: 'absolute', top: '22px', left: '22px', width: '160px', height: '36px', border: '1.25px solid #C1A066', color: '#9B7E55', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-4deg)', opacity: 0.95 }}>
                      <div style={{ fontFamily: 'var(--font-serif)', fontSize: '8.5px', textAlign: 'center', fontWeight: 'bold', lineHeight: 1.25, letterSpacing: '0.02em' }}>
                        ДОГОВОР ГЕНПОДРЯДА<br/>И КОММЕРЧЕСКОЙ АРЕНДЫ
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

                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '8px', borderTop: '1px dashed rgba(23,50,77,0.2)' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                        <div style={{ fontSize: '8px', fontWeight: 600, color: 'rgba(23,50,77,0.7)', fontFamily: 'var(--font-sans)' }}>Заказчик / Арендодатель:</div>
                        <div style={{ width: '90px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '6px' }}></div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                        <div style={{ fontSize: '8px', fontWeight: 600, color: 'rgba(23,50,77,0.7)', fontFamily: 'var(--font-sans)' }}>Подрядчик / Арендатор:</div>
                        <div style={{ width: '90px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '6px' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Лист 1: План земельного участка / объекта с печатью */}
              <div className="doc-wrapper-float-1">
                <div className="doc-sheet doc-sheet-1">
                  <div style={{ padding: '24px 20px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(23,50,77,0.2)', paddingBottom: '10px', marginBottom: '12px' }}>
                      <img src="/images/logo_dark.png" alt="Де-Юре" style={{ width: '62px', height: 'auto', opacity: 0.95 }} />
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', alignItems: 'flex-end' }}>
                        <span style={{ fontSize: '9px', fontWeight: 'bold', color: 'var(--color-deep-blue)', letterSpacing: '0.05em' }}>ГЕНПЛАН И ЗОУИТ</span>
                        <span style={{ fontSize: '8px', color: 'var(--color-primary)', fontWeight: 600 }}>ГПЗУ / ПЗЗ Липецк</span>
                      </div>
                    </div>

                    <div className="doc-map-box" style={{ 
                      width: '100%', 
                      height: '118px', 
                      background: 'rgba(247, 244, 237, 0.65)', 
                      border: '1px solid rgba(193, 160, 102, 0.35)', 
                      borderRadius: '2px', 
                      marginBottom: '10px', 
                      position: 'relative', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      padding: '4px' 
                    }}>
                      <svg width="100%" height="100%" viewBox="0 0 200 100" fill="none">
                        <rect x="10" y="8" width="180" height="84" fill="rgba(193, 160, 102, 0.10)" stroke="#10273B" strokeWidth="1.2" />
                        <line x1="100" y1="8" x2="100" y2="92" stroke="#10273B" strokeWidth="1" />
                        <line x1="10" y1="50" x2="100" y2="50" stroke="#10273B" strokeWidth="1" strokeDasharray="2 2" />
                        <line x1="100" y1="50" x2="190" y2="50" stroke="#10273B" strokeWidth="1" strokeDasharray="2 2" />
                        
                        {/* Складской блок */}
                        <text x="16" y="24" fill="#10273B" fontSize="7" fontWeight="bold">Складской блок</text>
                        <text x="16" y="36" fill="#80633F" fontSize="7.5" fontWeight="bold">480 м²</text>
                        
                        {/* Производство */}
                        <text x="16" y="66" fill="#10273B" fontSize="7" fontWeight="bold">Производство</text>
                        <text x="16" y="78" fill="#80633F" fontSize="7.5" fontWeight="bold">820 м²</text>
                        
                        {/* Зона разгрузки */}
                        <text x="106" y="24" fill="#10273B" fontSize="7" fontWeight="bold">Зона разгрузки</text>
                        <text x="106" y="36" fill="#64748B" fontSize="6.5">доки / пандусы</text>
                        
                        {/* Парковка / АБК */}
                        <text x="106" y="64" fill="#10273B" fontSize="7" fontWeight="bold">Парковка / АБК</text>
                        
                        {/* Общая площадь */}
                        <rect x="106" y="72" width="76" height="14" rx="2" fill="#10273B" />
                        <text x="144" y="82" textAnchor="middle" fill="#FFFFFF" fontSize="7.5" fontWeight="bold">S = 2 400 м²</text>
                      </svg>
                    </div>

                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '8px', borderTop: '1px solid rgba(23,50,77,0.15)' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                        <div style={{ fontSize: '9px', fontWeight: 'bold', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', letterSpacing: '0.03em' }}>ЮК «ДЕ-ЮРЕ» B2B</div>
                        <div style={{ fontSize: '8px', color: 'rgba(23,50,77,0.7)', fontFamily: 'var(--font-sans)' }}>Недвижимость и стройка • Липецк</div>
                      </div>
                      <div style={{ position: 'relative', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ width: '44px', height: '44px', borderRadius: '50%', border: '1.5px solid #17375E', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-12deg)', opacity: 0.95 }}>
                          <div style={{ width: '36px', height: '36px', borderRadius: '50%', border: '0.75px dashed #17375E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ fontSize: '5.5px', fontWeight: 'bold', color: '#17375E', textAlign: 'center', lineHeight: 1.15 }}>
                              ДЕ-ЮРЕ<br/>B2B
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

      {/* ═══ 2. БЛОК СИТУАЦИЙ (ПО ШАБЛОНУ) ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <style>{`
          @media (min-width: 993px) {
            .situation-card-last {
              grid-column: span 2;
            }
          }
        `}</style>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.25 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block' }}>
                С какой ситуацией
              </span>
              <span className="hero-title-span-mobile" style={{ display: 'block' }}>
                столкнулся бизнес
              </span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Определите ваш сценарий. Мы оперативно подключимся для правовой квалификации обстоятельств, проверки рисков и сопровождения проекта на согласованных этапах.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {situations.map((sit, i) => {
              const isLast = i === situations.length - 1;
              return (
                <div 
                  key={i} 
                  className={`card hover-lift ${isLast ? 'situation-card-last' : ''}`}
                  style={{ 
                    padding: isLast ? '36px 30px' : '32px 28px', 
                    background: isLast 
                      ? 'linear-gradient(145deg, #10273B 0%, #17324D 100%)' 
                      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)',
                    border: isLast 
                      ? '1px solid rgba(193, 160, 102, 0.35)' 
                      : '1px solid var(--color-border)',
                    borderTop: '3px solid var(--color-gold)',
                    borderRadius: '0',
                    boxShadow: isLast 
                      ? '0 8px 30px rgba(16, 39, 59, 0.18)' 
                      : '0 4px 20px rgba(23, 50, 77, 0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
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
                    opacity: isLast ? 0.1 : 0.04,
                    pointerEvents: 'none',
                    color: isLast ? '#C1A066' : 'var(--color-deep-blue)'
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
                        color: isLast ? 'var(--color-gold)' : 'var(--color-primary)', 
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em', 
                        marginBottom: '12px',
                        background: isLast ? 'rgba(193, 160, 102, 0.15)' : 'rgba(23, 50, 77, 0.06)',
                        padding: '3px 8px',
                        alignSelf: 'flex-start',
                        borderRadius: '2px',
                        display: 'inline-block'
                      }}>
                        {sit.tag}
                      </div>
                    )}

                    <h3 style={{ 
                      fontSize: '18px', 
                      fontFamily: 'var(--font-serif)', 
                      fontWeight: 600, 
                      color: isLast ? '#FFFFFF' : 'var(--color-deep-blue)', 
                      lineHeight: 1.35, 
                      margin: '0 0 12px 0'
                    }}>
                      {sit.title}
                    </h3>

                    <p style={{ 
                      fontSize: '14px', 
                      color: isLast ? '#CBD5E1' : 'var(--color-text-secondary)', 
                      lineHeight: 1.6, 
                      margin: isLast ? '0 0 20px 0' : 0
                    }}>
                      {sit.desc}
                    </p>
                  </div>

                  {isLast ? (
                    <div style={{ position: 'relative', zIndex: 1, marginTop: 'auto', paddingTop: '16px' }}>
                      <a
                        href="#form"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          background: 'linear-gradient(135deg, #C1A066 0%, #B89C72 100%)',
                          color: '#10273B',
                          padding: '13px 26px',
                          borderRadius: '2px',
                          fontSize: '14.5px',
                          fontWeight: 700,
                          textDecoration: 'none',
                          cursor: 'pointer',
                          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                          boxShadow: '0 4px 14px rgba(193, 160, 102, 0.25)',
                          letterSpacing: '0.01em'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#FFFFFF';
                          e.currentTarget.style.color = 'var(--color-deep-blue)';
                          e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 255, 255, 0.3)';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'linear-gradient(135deg, #C1A066 0%, #B89C72 100%)';
                          e.currentTarget.style.color = '#10273B';
                          e.currentTarget.style.boxShadow = '0 4px 14px rgba(193, 160, 102, 0.25)';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          const el = document.getElementById('form');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                          else window.location.hash = 'form';
                        }}
                      >
                        <span>{sit.buttonText || 'Комплексная консультация'}</span>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </a>
                    </div>
                  ) : (
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
                      <span>Защитить проект</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ 3. НАПРАВЛЕНИЯ ЮРИДИЧЕСКОЙ ПОМОЩИ (ПО ШАБЛОНУ) ═══ */}
      <section id="directions" className="section" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Направления юридической помощи
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block' }}>
                Выберите специализированную услугу кластера. Если задача
              </span>
              <span className="hero-title-span-mobile" style={{ display: 'block' }}>
                охватывает несколько стадий, опишите детали в форме —
              </span>
              <span className="hero-title-span-mobile" style={{ display: 'block' }}>
                мы разберёмся и сформируем единый безопасный маршрут.
              </span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            {directions.map((dir, i) => (
              <Link key={i} href={dir.href} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                <div 
                  className="card service-card hover-lift" 
                  style={{ 
                    height: '100%', 
                    minHeight: '200px',
                    padding: '30px', 
                    background: 'var(--color-white)', 
                    border: '1px solid var(--color-border)',
                    borderTop: '3px solid var(--color-primary)',
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

            {/* Карточка 6: «Нестандартный строительный проект», завершающая сетку 2х3 */}
            <div 
              className="card service-card" 
              style={{ 
                height: '100%', 
                minHeight: '200px',
                padding: '30px', 
                background: 'var(--color-deep-blue)', 
                border: '1px solid transparent',
                borderRadius: '0',
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                transition: 'all 0.3s',
                position: 'relative',
                borderTop: '3px solid var(--color-gold)',
                boxShadow: '0 8px 16px rgba(16, 39, 59, 0.28)'
              }}
            >
              <div>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-white)', lineHeight: 1.35, fontWeight: 600 }}>
                  Комплексный проект с землёй, стройкой и арендой?
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.55 }}>
                  Опишите вашу задачу. Изучим имеющиеся документы, определим этапы и предложим надёжные правовые механизмы реализации.
                </p>
              </div>
              <div style={{ marginTop: 'auto', paddingTop: '14px', borderTop: '1px solid rgba(255, 255, 255, 0.15)' }}>
                <a 
                  href="#form" 
                  className="btn white-btn-custom" 
                  style={{ 
                    display: 'inline-block', 
                    width: '100%',
                    textAlign: 'center', 
                    fontSize: '13.5px',
                    background: 'var(--color-white)',
                    color: 'var(--color-deep-blue)',
                    padding: '10px 18px',
                    fontWeight: 600,
                    textDecoration: 'none'
                  }}
                >
                  Обсудить проект
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 4. КОМУ ПОМОГАЕМ (ПО ШАБЛОНУ) ═══ */}
      <section className="section bg-white" id="who-we-help" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ 
              fontSize: 'clamp(28px, 4vw, 36px)', 
              fontFamily: 'var(--font-serif)', 
              color: 'var(--color-primary)', 
              marginBottom: '16px', 
              marginTop: 0, 
              lineHeight: 1.25,
              textAlign: 'left'
            }}>
              Кому помогаем
            </h2>
            <p style={{ 
              fontSize: '16px', 
              color: 'var(--color-deep-blue)', 
              opacity: 0.9, 
              fontWeight: 500, 
              margin: 0, 
              lineHeight: 1.6,
              textAlign: 'left'
            }}>
              Работаем с обеими сторонами коммерческих отношений. Позицию и возможный конфликт интересов проверяем до заключения договора с клиентом.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '20px', gridAutoRows: '1fr' }}>
            {[
              { 
                tag: 'Активы и владение',
                role: 'Собственники и инвесторы', 
                desc: 'Защита активов, проверка чистоты объектов и планирование юридических маршрутов' 
              },
              { 
                tag: 'Сделки и права',
                role: 'Покупатели и продавцы', 
                desc: 'Due diligence, согласование безопасных расчётов и регистрация сделок' 
              },
              { 
                tag: 'Коммерческая аренда',
                role: 'Арендодатели и арендаторы', 
                desc: 'Договоры коммерческой аренды, урегулирование разногласий и возврат площадей' 
              },
              { 
                tag: 'Стройка и девелопмент',
                role: 'Заказчики и застройщики', 
                desc: 'Разрешительная документация, договоры генподряда и контроль исполнения' 
              },
              { 
                tag: 'Подрядные работы',
                role: 'Подрядчики и субподрядчики', 
                desc: 'Защита по КС-2/КС-3, взыскание задолженности и экспертиза объёмов/качества' 
              }
            ].map((seg, idx) => (
              <div 
                key={idx} 
                className="hover-lift"
                style={{
                  padding: '22px 20px 20px 20px',
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '210px',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.04, pointerEvents: 'none' }}>
                  <svg width="75" height="75" viewBox="0 0 24 24" fill="var(--color-deep-blue)">
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>

                <div>
                  <div style={{ 
                    fontSize: '11px', 
                    fontWeight: 700, 
                    color: 'var(--color-gold)', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.08em', 
                    marginBottom: '8px',
                    background: 'rgba(193, 160, 102, 0.1)',
                    padding: '2px 8px',
                    alignSelf: 'flex-start',
                    borderRadius: '2px',
                    display: 'inline-block',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {seg.tag}
                  </div>

                  <h3 style={{ 
                    fontSize: '16.5px', 
                    fontFamily: 'var(--font-serif)', 
                    fontWeight: 600, 
                    color: 'var(--color-deep-blue)', 
                    lineHeight: 1.3, 
                    margin: '0 0 6px 0',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {seg.role}
                  </h3>

                  <p style={{ 
                    fontSize: '13.5px', 
                    color: 'var(--color-text-secondary)', 
                    lineHeight: 1.45, 
                    margin: 0,
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {seg.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Карточка 6: Определить стадию и следующий шаг (Компактная CTA-карточка) */}
            <div 
              className="hover-lift" 
              style={{ 
                padding: '22px 20px 20px 20px', 
                background: 'linear-gradient(145deg, #10273B 0%, #17324D 100%)',
                border: '1px solid rgba(193, 160, 102, 0.35)',
                borderTop: '3px solid var(--color-gold)',
                boxShadow: '0 6px 24px rgba(16, 39, 59, 0.15)',
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                minHeight: '210px',
                height: '100%',
                position: 'relative', 
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onClick={() => {
                const el = document.getElementById('form');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else window.location.hash = 'form';
              }}
            >
              <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.08, pointerEvents: 'none' }}>
                <svg width="75" height="75" viewBox="0 0 24 24" fill="#C1A066">
                  <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>

              <div>
                <h3 style={{ 
                  fontFamily: 'var(--font-serif)', 
                  fontSize: '16.5px', 
                  fontWeight: 600, 
                  color: '#FFFFFF', 
                  margin: '0 0 6px 0', 
                  lineHeight: 1.3,
                  position: 'relative',
                  zIndex: 1
                }}>
                  Определить стадию и следующий шаг по вашей ситуации
                </h3>
                <p style={{ 
                  fontSize: '13.5px', 
                  color: '#CBD5E1', 
                  lineHeight: 1.45, 
                  margin: 0, 
                  position: 'relative', 
                  zIndex: 1 
                }}>
                  Передайте документы юристу по недвижимости: проверим объект, сторону сделки, процессуальные сроки и подберём законный маршрут защиты.
                </p>
              </div>

              <div style={{ position: 'relative', zIndex: 1, marginTop: 'auto', paddingTop: '10px' }}>
                <a
                  href="#form"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--color-gold)',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('form');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else window.location.hash = 'form';
                  }}
                >
                  <span>Определить стадию и следующий шаг</span>
                  <span style={{ fontSize: '15px' }}>&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 5. ПРЕДВАРИТЕЛЬНЫЙ ПРАВОВОЙ АУДИТ (ORGANIC DIAGNOSTIC AUDIT MATRIX) ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
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
                Предварительный правовой аудит
              </div>
              <h2 className="with-accent" style={{
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontFamily: 'var(--font-serif)',
                color: 'var(--color-primary)',
                margin: 0,
                lineHeight: 1.2
              }}>
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                  Сначала — диагностика
                </span>
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                  задачи и рисков
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
                Одна и та же проблема может иметь разные причины: от условий договора и характеристик объекта до градостроительных ограничений земли или ранее выполненной реконструкции.
              </p>
            </div>
          </div>

          <style dangerouslySetInnerHTML={{ __html: `
            @media (max-width: 640px) {
              .audit-cta-card {
                grid-column: 1 / -1 !important;
              }
            }
          `}} />

          {/* Архитектурный реестр аудита */}
          <div style={{
            background: '#FFFFFF',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            boxShadow: '0 4px 25px rgba(23, 50, 77, 0.05)',
            marginBottom: '40px'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'
            }}>
              {auditItems.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '34px 30px',
                    borderBottom: idx < 4 ? '1px solid var(--color-border)' : 'none',
                    borderRight: idx % 2 === 0 ? '1px solid var(--color-border)' : 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    position: 'relative'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px', marginBottom: '10px' }}>
                    <span style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '26px',
                      fontWeight: 600,
                      color: 'var(--color-gold)',
                      lineHeight: 1,
                      letterSpacing: '-0.02em',
                      minWidth: '36px'
                    }}>
                      0{idx + 1}
                    </span>
                    <h3 style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '19px',
                      fontWeight: 600,
                      color: 'var(--color-deep-blue)',
                      margin: 0,
                      lineHeight: 1.3
                    }}>
                      {item.title}
                    </h3>
                  </div>
                  <p style={{
                    fontSize: '14.5px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    margin: 0,
                    paddingLeft: '50px'
                  }}>
                    {item.desc}
                  </p>
                </div>
              ))}

              {/* Карточка действия в одном ряду во всю оставшуюся ширину */}
              <div
                className="audit-cta-card"
                style={{
                  gridColumn: '1 / -1',
                  padding: '32px 34px',
                  background: 'linear-gradient(145deg, #FBF8F3 0%, #F5EFE6 100%)',
                  borderTop: '1px solid var(--color-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '24px',
                  width: '100%',
                  boxSizing: 'border-box'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: '1 1 320px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span style={{ fontSize: '15.5px', color: 'var(--color-deep-blue)', fontWeight: 600, lineHeight: 1.5 }}>
                    Проводим предварительную квалификацию рисков до подписания договоров, перечисления платежей или обращения в арбитражный суд
                  </span>
                </div>
                <a
                  href="#form"
                  className="btn btn-primary"
                  style={{
                    padding: '13px 28px',
                    fontSize: '14.5px',
                    whiteSpace: 'nowrap',
                    flexShrink: 0
                  }}
                >
                  Записаться на разбор ситуации
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 6. ПРИМЕРЫ ИЗ ПРАКТИКИ (CASES BLOCK) ═══ */}
      <CasesBlock
        title={
          <>
            Примеры задач <br />по недвижимости и строительству
          </>
        }
        showDemoWarning={false}
        resultLabel="Результат"
        cases={cases}
      />

      {/* ═══ 7. ПРОЦЕСС РАБОТЫ (PROCESS BLOCK) ═══ */}
      <ProcessBlock
        title="Как проходит работа"
        subtitle="Шесть последовательных шагов от первичного анализа документов до согласования сделки или судебного решения."
        steps={processSteps}
      />

      {/* ═══ 8. ЧТО ПОДГОТОВИТЬ К ПЕРВОЙ ВСТРЕЧЕ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Что можно подготовить</span> <br />
              <span style={{ display: 'inline-block' }}>к первой консультации</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Если части документов нет на руках, это не препятствует началу работы. Юрист проверит объект по открытым базам, определит недостающие материалы и поможет истребовать их в установленном порядке.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            {/* Карточка 1: Документы по объекту, земле и сделке */}
            <div style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-primary)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingBottom: '12px', borderBottom: '1px solid rgba(23, 50, 77, 0.1)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0 }}>
                  Документы по объекту, земле и сделке
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Необходимы для подтверждения юридической чистоты коммерческого объекта, правообладателя и условий планируемой сделки.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Выписка из ЕГРН и кадастровый номер</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Сведения об объекте недвижимости, здании, земельном участке, кадастровой стоимости и зарегистрированных обременениях.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Правоустанавливающие договоры</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Договоры купли-продажи, мены, приватизации, аренды земельного участка, предшествующие соглашения и акты приёма-передачи.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Градостроительные и проектные документы</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>ГПЗУ, выкопировка из ПЗЗ, технический план БТИ, схема планировочной организации земельного участка, проект реконструкции.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Карточка 2: Строительные документы, переписка и претензии */}
            <div style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-gold)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingBottom: '12px', borderBottom: '1px solid rgba(23, 50, 77, 0.1)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0 }}>
                  Строительные документы, переписка и претензии
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Подтверждают исполнение обязательств, фиксацию объёмов и дефектов, соблюдение претензионного порядка и позицию оппонента.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Договор подряда, сметы и акты КС-2/КС-3</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Договор генерального подряда, техническое задание, акты о приёмке выполненных работ, справки о стоимости и журнал работ.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Претензионная и деловая переписка</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Письма о приостановлении работ, вызовы на приёмку, дефектные акты, письменные мотивированные отказы и почтовые квитанции.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Отказы госорганов или судебные акты</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Уведомления Росреестра, предписания Госстройнадзора, отказ в разрешении на ввод, исковое заявление или определение суда.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Информационная плашка */}
          <div style={{
            background: 'var(--color-white)',
            padding: '24px 28px',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)',
            fontSize: '14.5px',
            color: 'var(--color-deep-blue)',
            lineHeight: 1.65,
            marginBottom: '32px'
          }}>
            <strong style={{ color: 'var(--color-primary)' }}>Если части документов нет на руках:</strong> не откладывайте консультацию. Юрист проведёт первичную правовую диагностику ситуации, определит ключевые риски и поможет истребовать недостающие материалы через Росреестр, администрацию, архив или судебный запрос.
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ display: 'inline-block' }}>
              Записаться на консультацию для бизнеса
            </a>
          </div>
        </div>
      </section>

      {/* ═══ 9. СТОИМОСТЬ (PRICING BLOCK ПО ШАБЛОНУ) ═══ */}
      <PricingBlock
        title="Стоимость юридической помощи"
        subtitle="Цена зависит от количества объектов и участников, стадии проекта или спора, объёма документов, необходимости экспертизы и арбитражного представительства."
        tiers={pricingTiers}
        ctaTitle="Точную стоимость определим до начала работы"
        ctaSubtitle="Сначала изучим обстоятельства и документы, предложим подходящий формат помощи и зафиксируем стоимость в договоре. Она не изменится без согласования."
        ctaButtonText="Получить расчёт стоимости"
        ctaButtonLink="#form"
        disclaimer="* Отдельно при необходимости оплачиваются государственная пошлина, нотариальные тарифы, независимая строительно-техническая экспертиза, кадастровые работы, проектные изыскания и выписки из ЕГРН. Состав внешних расходов фиксируется до начала работы."
      />

      {/* ═══ 10. СМЕЖНЫЕ ВОПРОСЫ И ДРУГИЕ ПРАКТИКИ ДЛЯ БИЗНЕСА (ПО ШАБЛОНУ) ═══ */}
      <section className="section bg-light" id="related-services" style={{ padding: '64px 0', background: 'var(--gradient-cream)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ marginBottom: '36px' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '10px'
            }}>
              Комплексная правовая помощь
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '24px'
            }}>
              <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 3.5vw, 36px)', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.25, flex: '1 1 480px', minWidth: '280px' }}>
                <span style={{ display: 'inline-block' }}>Смежные вопросы</span> <br /><span style={{ display: 'inline-block' }}>и другие практики для бизнеса</span>
              </h2>
              <p style={{
                flex: '0 1 440px',
                minWidth: '280px',
                fontSize: '15.5px',
                color: 'var(--color-text-secondary)',
                fontWeight: 400,
                lineHeight: 1.65,
                margin: 0,
                textAlign: 'left',
                textWrap: 'balance'
              }}>
                Если задача выходит за рамки недвижимости и строительства, подключаем профильных юристов других практик компании «Де-Юре» для всесторонней защиты интересов бизнеса.
              </p>
            </div>
          </div>

          <style dangerouslySetInnerHTML={{ __html: `
            .related-service-card {
              border-top: 3px solid var(--color-primary) !important;
            }
            .related-service-card:hover {
              border-top: 3px solid var(--color-gold) !important;
              transform: translateY(-4px);
              box-shadow: 0 12px 30px rgba(23, 50, 77, 0.08) !important;
            }
            .related-service-card:hover .card-arrow {
              color: var(--color-gold) !important;
            }
            .related-service-card:hover .card-arrow svg {
              stroke: var(--color-gold) !important;
              transform: translateX(4px);
            }
            .all-services-link:hover {
              color: var(--color-gold) !important;
            }
          `}} />

          <div className="grid grid-3" style={{ gap: '20px', marginBottom: '28px' }}>
            {relatedServices.map((rel, idx) => (
              <Link key={idx} href={rel.link} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                <div 
                  className="card related-service-card hover-lift" 
                  style={{ 
                    height: '100%', 
                    minHeight: '180px', 
                    padding: '26px 24px', 
                    background: 'var(--color-white)', 
                    border: '1px solid var(--color-border)',
                    borderTop: '3px solid var(--color-primary)',
                    borderRadius: '0',
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div>
                    <h3 style={{ margin: '0 0 10px 0', fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', lineHeight: 1.35, fontWeight: 700 }}>
                      {rel.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                      {rel.desc}
                    </p>
                  </div>
                  <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13.5px', fontWeight: 600, marginTop: '18px', transition: 'color 0.35s ease' }}>
                    <span>Подробнее об услуге</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: '28px' }}>
            <Link href="/biznesu/" className="all-services-link" style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '15px', textDecoration: 'underline', textUnderlineOffset: '4px', display: 'inline-flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s ease' }}>
              Смотреть все юридические услуги компании «Де-Юре» для бизнеса →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 11. ЧАСТЫЕ ВОПРОСЫ (FAQ BLOCK ПО ШАБЛОНУ) ═══ */}
      <FAQBlock
        faqs={faqs}
        title={<>Ответы на частые вопросы <br />по недвижимости и строительству</>}
        subtitle="Юридические разъяснения по сделкам с коммерческой недвижимостью, градостроительному регламенту, подряду и арбитражным спорам."
        ctaText="Задать свой вопрос"
        ctaLink="#form"
      />

      {/* ═══ 12. ФИНАЛЬНАЯ ФОРМА ОБРАТНОЙ СВЯЗИ (ПО ШАБЛОНУ) ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start', paddingTop: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>Связаться с нами</span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                Обсудите задачу с недвижимостью или строительством
              </h2>
              
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко опишите объект, стадию и что произошло. Мы уточним обстоятельства, скажем, какие документы потребуются для первичного разбора, и определим подходящее направление помощи.
              </p>
              
              <div style={{
                background: 'var(--gradient-cream)',
                padding: '24px 28px',
                borderLeft: '3px solid var(--color-primary)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                marginBottom: '28px'
              }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '6px' }}>Офис в Липецке</div>
                <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  г. Липецк, ул. Советская, д. 35, офис 213<br />
                  Пн–Пт с 9:00 до 18:00 • Возможно дистанционное ведение дел
                </div>
              </div>

              <div style={{ marginTop: 'auto' }}>
                <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <span>
                    Перезвоним в течение 15 минут в рабочее время
                  </span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
              <div style={{ background: 'var(--gradient-cream)', padding: '40px', borderRadius: '0', boxShadow: '0 8px 24px rgba(0,0,0,0.15)', width: '100%', border: '1px solid rgba(0,0,0,0.06)' }}>
                <ContactsForm 
                  title="Написать нам" 
                  subtitle=""
                  buttonText="Обсудить задачу бизнеса"
                  commentPlaceholder="Кратко опишите объект, стадию проекта или суть спора…"
                  subtext="Если вы оставите заявку вечером или в выходной день, мы перезвоним в ближайший рабочий день."
                  hiddenFields={[
                    { name: 'service', value: 'Юрист по недвижимости и строительству для бизнеса' }
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
