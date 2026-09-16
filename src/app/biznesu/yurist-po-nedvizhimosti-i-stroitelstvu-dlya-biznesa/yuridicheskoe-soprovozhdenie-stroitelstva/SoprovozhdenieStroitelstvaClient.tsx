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

export default function SoprovozhdenieStroitelstvaClient() {
  const faqs = [
    {
      q: 'На какой стадии подключать юриста по строительству?',
      a: 'Оптимально — до заключения основных договоров, заказа проектирования и начала строительно-монтажных работ. Но юрист может подключиться на любой стадии: сначала определяется, какие решения уже приняты, что можно скорректировать и какие сроки являются ближайшими.'
    },
    {
      q: 'Чем реконструкция отличается от капитального ремонта и перепланировки?',
      a: 'Реконструкция связана с изменением параметров объекта капитального строительства или его частей и определяется по фактическому составу работ, а не только по названию договора. Обычно для реконструкции требуются проектная документация и разрешение на строительство, но Градостроительный кодекс РФ предусматривает исключения. Применимый порядок необходимо определять по характеристикам объекта и планируемых работ.'
    },
    {
      q: 'Кто может быть застройщиком и техническим заказчиком?',
      a: 'Застройщиком выступает правообладатель земельного участка (собственник или арендатор), обеспечивающий строительство. Технический заказчик действует от имени застройщика, организует проектирование, изыскания и строительство и обязан состоять в СРО в случаях, предусмотренных ГрК РФ.'
    },
    {
      q: 'ГПЗУ разрешает начинать строительство?',
      a: 'Нет. Градостроительный план земельного участка содержит информацию для проектирования и последующих разрешительных процедур, но сам по себе не заменяет проектную документацию, положительное заключение экспертизы и разрешение на строительство.'
    },
    {
      q: 'Всегда ли нужны экспертиза проекта и разрешение на строительство?',
      a: 'Нет. Статьи 49 и 51 Градостроительного кодекса РФ предусматривают исключения (например, для ряда некапитальных строений или объектов вспомогательного использования). До начала работ необходимо документально подтвердить применимый режим.'
    },
    {
      q: 'Можно ли начать работы до получения разрешения на строительство?',
      a: 'Начало строительно-монтажных работ без разрешения влечёт административную ответственность по ст. 9.5 КоАП РФ со штрафами до 1 000 000 ₽ или приостановлением деятельности, а возводимый объект рискует быть признан самовольной постройкой (ст. 222 ГК РФ) с требованием о сносе.'
    },
    {
      q: 'Как правильно оформить изменения в проекте в процессе стройки?',
      a: 'Изменения необходимо зафиксировать в проектной и исполнительной документации и проверить, влияют ли они на параметры объекта, безопасность и выводы экспертизы. В зависимости от характера изменений может потребоваться подтверждение соответствия, экспертное сопровождение, повторная экспертиза и внесение изменений в сведения о разрешении на строительство. Точный порядок определяют после сопоставления изменений с проектом и действующими требованиями ГрК РФ.'
    },
    {
      q: 'Что делать при отказе в выдаче разрешения на ввод объекта?',
      a: 'Проанализировать письменный мотивированный отказ органа строительного надзора или местного самоуправления. Часто причина кроется в расхождениях между фактическими параметрами объекта и исходным проектом, которые устраняются подготовкой скорректированного техплана.'
    },
    {
      q: 'Помогаете ли вы в составлении договоров генподряда?',
      a: 'Да. Разрабатываем сбалансированные договоры строительного подряда и генподряда с детальным регламентом сдачи-приёмки по формам КС-2/КС-3, порядком освидетельствования скрытых работ, гарантийными удержаниями и защитой от необоснованного отказа от оплаты.'
    },
    {
      q: 'От чего зависят срок и стоимость сопровождения строительного проекта?',
      a: 'От масштаба объекта (площадь, класс опасности, этажность), стадии подключения (до проектирования, в ходе стройки или на этапе ввода) и объёма задач (разработка договоров, аудит или сопровождение полного цикла).'
    }
  ];

  const situations = [
    {
      title: 'Старт проекта и договорная структура',
      desc: 'Требуется распределить функции застройщика, техзаказчика, генподрядчика и проектировщика и разработать пакет строительных договоров.',
      tag: 'Старт проекта'
    },
    {
      title: 'Получение разрешения на строительство',
      desc: 'Аудит проектной документации, подготовка заявления и правовое сопровождение получения разрешения в органе власти.',
      tag: 'Разрешение'
    },
    {
      title: 'Реконструкция коммерческого здания',
      desc: 'Планируется надстройка, пристройка или изменение несущих конструкций склада, цеха или ТЦ. Определяем правовой маршрут.',
      tag: 'Реконструкция'
    },
    {
      title: 'Изменения в проекте и допработы',
      desc: 'В ходе стройки возникла необходимость изменить проектные решения или выполнить допработы. Оформляем документацию без риска спора.',
      tag: 'Допработы'
    },
    {
      title: 'Ввод объекта в эксплуатацию',
      desc: 'Подготовка пакета для получения разрешения на ввод, технический план, преодоление замечаний Госстройнадзора.',
      tag: 'Ввод объекта'
    }
  ];

  const auditDirections = [
    {
      num: '01',
      title: 'Правовой статус участка и ГПЗУ',
      desc: 'Соответствие параметров проектируемого объекта ВРИ, ПЗЗ, красным линиям и градостроительному плану участка.'
    },
    {
      num: '02',
      title: 'Статус застройщика и СРО',
      desc: 'Полномочия заказчика, наличие обязательного членства в СРО у проектировщика, изыскателя и генерального подрядчика.'
    },
    {
      num: '03',
      title: 'Договоры на изыскания и проект',
      desc: 'Технические задания, разграничение ответственности за ошибки в проекте, передача исключительных прав на документацию.'
    },
    {
      num: '04',
      title: 'Экспертиза проектной документации',
      desc: 'Проверка необходимости государственной или негосударственной экспертизы, соответствие исходно-разрешительным данным.'
    },
    {
      num: '05',
      title: 'Договорная обвязка генподряда',
      desc: 'Регламент сдачи-приёмки КС-2/КС-3, графики платежей, гарантийные удержания, ответственность за срыв сроков и дефекты.'
    },
    {
      num: '06',
      title: 'Разрешительная документация',
      desc: 'Проверка комплектности документов по ст. 51 ГрК РФ для получения разрешения на строительство без риска возврата.'
    },
    {
      num: '07',
      title: 'Строительный контроль и журналы',
      desc: 'Правовой регламент ведения исполнительной документации, актов скрытых работ и претензионной переписки на стройплощадке.'
    },
    {
      num: '08',
      title: 'Подготовка к вводу и постановке на учёт',
      desc: 'Сверка фактических параметров по техплану с проектом и разрешением, подготовка заявления на ввод по ст. 55 ГрК РФ.'
    }
  ];

  const cases: CaseData[] = [
    {
      title: 'Юридическое сопровождение строительства логистического комплекса 8 500 кв. м',
      category: 'Новое строительство',
      problem: 'Инвестор планировал строительство крупного распределительного центра. Требовалось выстроить договорные отношения с техническим заказчиком, генпроектировщиком и генподрядчиком.',
      action: 'Разработали индивидуальные договоры генподряда с гарантийным удержанием 5% до истечения 12 месяцев эксплуатации, провели аудит проектной документации и сопроводили получение разрешения на строительство.',
      result: 'Разрешение на строительство получено с первого раза; строительно-монтажные работы завершены без взаимных претензий.'
    },
    {
      title: 'Правовое сопровождение реконструкции производственного корпуса',
      category: 'Реконструкция',
      problem: 'Предприятие увеличило высоту и площадь цеха за счёт возведения антресолей и пристроек, столкнувшись с предписанием надзорного органа о незаконной реконструкции.',
      action: 'Провели правовой и технический аудит, организовали подготовку проектной документации на реконструкцию, подтвердили соответствие нормам безопасности и сопроводили административную процедуру согласования.',
      result: 'Предписание снято без судебных штрафов; обновлённые параметры здания поставлены на государственный кадастровый учёт.'
    },
    {
      title: 'Преодоление отказа во вводе торгового комплекса в эксплуатацию',
      category: 'Ввод в эксплуатацию',
      problem: 'Орган местного самоуправления отказал во вводе в эксплуатацию ТК площадью 3 200 кв. м из-за незначительного расхождения площадей по результатам кадастровой съёмки.',
      action: 'Подготовили заключение проектной организации о допустимости отклонений в пределах строительных допусков по СП, внесли корректировки в исполнительную документацию и подали повторное заявление.',
      result: 'Получено разрешение на ввод объекта в эксплуатацию; зарегистрировано право собственности застройщика.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Экспертиза проектных документов и договоров',
      price: 'от 25 000 ₽',
      subtitle: 'Правовой аудит договоров подряда/проектирования, исходно-разрешительных документов и выявление рисков.',
      buttonText: 'Выбрать тариф',
      buttonHref: '#form',
      features: [
        { name: 'Анализ договоров с подрядчиками и СРО', value: '✓' },
        { name: 'Проверка исходно-разрешительного пакета', value: '✓' },
        { name: 'Составление протоколов разногласий', value: '✓' },
        { name: 'Письменные рекомендации по рискам', value: '✓' }
      ],
      popular: false
    },
    {
      title: 'Сопровождение получения разрешения',
      price: 'от 45 000 ₽',
      subtitle: 'Подготовка пакета по ст. 51 ГрК РФ, аудит экспертизы проекта и сопровождение взаимодействия с ведомством.',
      buttonText: 'Выбрать тариф',
      buttonHref: '#form',
      features: [
        { name: 'Проверка соответствия проекту и ГПЗУ', value: '✓' },
        { name: 'Подготовка заявления и правового пакета', value: '✓' },
        { name: 'Контроль рассмотрения в органе власти', value: '✓' },
        { name: 'Устранение возможных замечаний', value: '✓' }
      ],
      popular: true
    },
    {
      title: 'Сопровождение ввода объекта (ст. 55 ГрК РФ)',
      price: 'от 55 000 ₽',
      subtitle: 'Правовой контроль подготовки к вводу объекта, сопоставление техплана с проектом и получение разрешения на ввод.',
      buttonText: 'Выбрать тариф',
      buttonHref: '#form',
      features: [
        { name: 'Сверка фактических параметров и проекта', value: '✓' },
        { name: 'Проверка исполнительной документации', value: '✓' },
        { name: 'Получение разрешения на ввод в эксплуатацию', value: '✓' },
        { name: 'Кадастровый учёт и регистрация права', value: '✓' }
      ],
      popular: false
    },
    {
      title: 'Комплексный юридический надзор проекта',
      price: 'от 80 000 ₽',
      subtitle: 'Полное юридическое сопровождение строительства от исходной точки до регистрации права собственности.',
      buttonText: 'Выбрать тариф',
      buttonHref: '#form',
      features: [
        { name: 'Постоянное сопровождение всех договоров', value: '✓' },
        { name: 'Контроль актов КС-2/КС-3 и переписки', value: '✓' },
        { name: 'Урегулирование текущих разногласий', value: '✓' },
        { name: 'Взаимодействие с надзорными инстанциями', value: '✓' }
      ],
      popular: false
    }
  ];

  const relatedServices = [
    {
      title: 'Сделки с недвижимостью',
      desc: 'Сопровождение купли-продажи коммерческих зданий, земельных массивов, складов и производственных комплексов.',
      link: '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/soprovozhdenie-sdelok-s-kommercheskoy-nedvizhimostyu/'
    },
    {
      title: 'Аренда коммерческой недвижимости',
      desc: 'Аудит и составление договоров аренды для арендаторов и арендодателей, защита обеспечительных платежей.',
      link: '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/yuridicheskoe-soprovozhdenie-arendy-kommercheskoy-nedvizhimosti/'
    },
    {
      title: 'Земля и градостроительство',
      desc: 'Градостроительный аудит, смена ВРИ, внесение изменений в ПЗЗ, получение ГПЗУ и оформление участков.',
      link: '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/zemelno-gradostroitelnoe-soprovozhdenie/'
    },
    {
      title: 'Строительные споры в арбитраже',
      desc: 'Взыскание задолженности по КС-2/КС-3, защита от претензий по качеству и срокам, судебная экспертиза.',
      link: '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/stroitelnye-spory/'
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
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/yuridicheskoe-soprovozhdenie-stroitelstva/#breadcrumb',
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
            name: 'Юрист по недвижимости и строительству для бизнеса',
            item: 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/'
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Юридическое сопровождение строительства и реконструкции',
            item: 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/yuridicheskoe-soprovozhdenie-stroitelstva/'
          }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/yuridicheskoe-soprovozhdenie-stroitelstva/#service',
        name: 'Юридическое сопровождение строительства и реконструкции в Липецке',
        serviceType: 'Юридические услуги по сопровождению строительства и реконструкции',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        url: 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/yuridicheskoe-soprovozhdenie-stroitelstva/'
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/yuridicheskoe-soprovozhdenie-stroitelstva/#faq',
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

      {/* ═══ 1. ПЕРВЫЙ ЭКРАН (HERO) ═══ */}
      <MilitaryHero
        breadcrumbs={
          <>
            <Link href="/" style={{ color: 'var(--color-primary)' }}>Главная</Link> <span style={{ margin: '0 8px' }}>/</span>
            <Link href="/biznesu/" style={{ color: 'var(--color-primary)' }}>Бизнесу</Link> <span style={{ margin: '0 8px' }}>/</span>
            <Link href="/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/" style={{ color: 'var(--color-primary)' }}>Юрист по недвижимости и строительству</Link> <span style={{ margin: '0 8px' }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Сопровождение строительства</span>
          </>
        }
        superTitle={
          <span className="hero-title-span-mobile" style={{ display: 'inline-block' }}>
            Недвижимость и строительство • <br />
            Сопровождение строительства • Липецк
          </span>
        }
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Юридическое сопровождение
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              строительства и реконструкции
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Сформируем юридический маршрут проекта, подготовим договоры подряда и разрешительную базу, проконтролируем изменения и сопроводим объект до ввода в эксплуатацию.
          </span>
        }
        trustItems={[
          { text: <span><strong>Начинаем до закупки</strong> и подрядных строительных работ</span> },
          { text: <span><strong>Связываем договоры</strong>, проектную базу и разрешения в единую систему</span> },
          { text: <span><strong>Фиксированная стоимость</strong> и измеримые этапы в договоре</span> }
        ]}
        primaryCtaText="Обсудить строительный проект"
        primaryCtaLink="#form"
        primaryCtaSubtext={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Перезвоним в течение 15 минут в рабочее время
            </span>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              или звоните: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (4742) 20-15-25</a>
            </span>
          </span>
        }
        secondaryCtaText="Что проверит юрист"
        secondaryCtaLink="#situations"
        imageUrl="/images/nacheshnikov.jpg"
        imageName="Владимир Викторович Начешников"
        imageSubtitle="Специалист по сопровождению строительства и девелопмента"
        imageObjectPosition="center 15%"
      />

      {/* ═══ 2. КОГДА НУЖЕН ЮРИСТ (СИТУАЦИИ) ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
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
              Строительная практика
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
              <span style={{ display: 'inline-block' }}>Когда строительному проекту</span> <br />
              <span style={{ display: 'inline-block' }}>требуется юридическое сопровождение</span>
            </h2>
            <p style={{ 
              fontSize: '16px', 
              color: 'var(--color-deep-blue)', 
              opacity: 0.9, 
              lineHeight: 1.65, 
              margin: 0,
              maxWidth: '740px',
              textAlign: 'left',
              textWrap: 'balance'
            }}>
              Помогаем застройщикам, техническим заказчикам и инвесторам предотвратить риски штрафов, простоев, судебных споров и отказа во вводе объекта.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            {situations.map((sit, idx) => (
              <div
                key={idx}
                className="card hover-lift"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  borderRadius: '0',
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
                onClick={() => {
                  const el = document.getElementById('form');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else window.location.hash = 'form';
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
                  <span>Защитить проект</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            ))}

            {/* Карточка 6: CTA для сложных ситуаций */}
            <div
              className="card hover-lift"
              style={{
                background: 'linear-gradient(145deg, #10273B 0%, #17324D 100%)',
                border: '1px solid rgba(193, 160, 102, 0.35)',
                borderTop: '3px solid var(--color-gold)',
                borderRadius: '0',
                padding: '26px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 6px 24px rgba(16, 39, 59, 0.15)',
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
                opacity: 0.08,
                pointerEvents: 'none',
                color: '#C1A066'
              }}>
                <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>

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
                  Экспресс-аудит
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  margin: '0 0 10px 0',
                  lineHeight: 1.35
                }}>
                  Сложный объект или предписание надзора?
                </h3>

                <p style={{
                  fontSize: '14px',
                  color: '#CBD5E1',
                  lineHeight: 1.5,
                  margin: '0 0 16px 0'
                }}>
                  Проанализируем документацию, выявим скрытые строительные риски и сформируем правовой план защиты проекта.
                </p>
              </div>

              <div style={{ position: 'relative', zIndex: 1, marginTop: 'auto', paddingTop: '12px' }}>
                <a
                  href="#form"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--color-gold)',
                    fontSize: '14px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#dfca9e')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('form');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else window.location.hash = 'form';
                  }}
                >
                  <span>Заказать аудит проекта</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. НАПРАВЛЕНИЯ СТРОИТЕЛЬНОГО АУДИТА (DUE DILIGENCE ПО ШАБЛОНУ) ═══ */}
      <section className="section bg-light" id="due-diligence" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
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
              Комплексный анализ
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
              <span style={{ display: 'inline-block' }}>Что проверит юрист:</span> <br />
              <span style={{ display: 'inline-block' }}>8 направлений Due Diligence проекта</span>
            </h2>
            <p style={{ 
              fontSize: '16px', 
              color: 'var(--color-deep-blue)', 
              opacity: 0.9, 
              lineHeight: 1.65, 
              margin: 0, 
              maxWidth: '740px',
              textAlign: 'left',
              textWrap: 'balance'
            }}>
              Правовая экспертиза строительного проекта от градостроительного регламента до итоговой документации ввода в эксплуатацию.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '20px', position: 'relative', gridAutoRows: '1fr' }}>
            {auditDirections.map((item, idx) => (
              <div
                key={idx}
                className="hover-lift"
                style={{
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  padding: '30px 24px 26px 24px',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '235px',
                  height: '100%',
                  position: 'relative'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '22px',
                  background: 'var(--color-gold)',
                  color: '#FFFFFF',
                  fontSize: '13px',
                  fontWeight: 700,
                  padding: '3px 10px',
                  borderRadius: '2px',
                  letterSpacing: '0.05em'
                }}>
                  {item.num}
                </div>
                <div>
                  <h3 style={{ 
                    fontSize: '17.5px', 
                    fontFamily: 'var(--font-serif)', 
                    color: 'var(--color-deep-blue)', 
                    margin: '6px 0 10px 0', 
                    lineHeight: 1.35,
                    minHeight: '48px'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ 
                    fontSize: '14px', 
                    color: 'var(--color-text-secondary)', 
                    lineHeight: 1.55, 
                    margin: 0,
                    minHeight: '80px'
                  }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Карточка 9: Завершающая CTA карточка аудита */}
            <div 
              className="hover-lift"
              style={{
                padding: '30px 24px 26px 24px',
                background: 'linear-gradient(145deg, #10273B 0%, #17324D 100%)',
                border: '1px solid rgba(193, 160, 102, 0.35)',
                borderTop: '3px solid var(--color-gold)',
                boxShadow: '0 8px 30px rgba(16, 39, 59, 0.18)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '235px',
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
              <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.1, pointerEvents: 'none' }}>
                <svg width="100" height="100" viewBox="0 0 24 24" fill="#C1A066">
                  <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>

              <div>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '17.5px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  margin: '6px 0 10px 0',
                  lineHeight: 1.35,
                  minHeight: '48px'
                }}>
                  Нужен аудит строительного проекта?
                </h3>

                <p style={{
                  fontSize: '14px',
                  color: '#CBD5E1',
                  lineHeight: 1.55,
                  margin: 0,
                  minHeight: '80px'
                }}>
                  Предоставим письменное заключение с анализом рисков, условий генподряда и правовыми рекомендациями.
                </p>
              </div>

              <div style={{ marginTop: 'auto', paddingTop: '16px', position: 'relative', zIndex: 1 }}>
                <a
                  href="#form"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--color-gold)',
                    fontSize: '14px',
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
                  <span>Заказать Due Diligence проекта</span>
                  <span style={{ fontSize: '16px' }}>&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 4. ЧТО ПОДГОТОВИТЬ ДЛЯ СТАРТА (ДОКУМЕНТЫ) ═══ */}
      <section className="section bg-white" id="documents" style={{ padding: '80px 0' }}>
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
              Пакет документов
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
              <span style={{ display: 'inline-block' }}>Что подготовить для аудита</span> <br />
              <span style={{ display: 'inline-block' }}>строительного проекта</span>
            </h2>
            <p style={{ 
              fontSize: '16px', 
              color: 'var(--color-deep-blue)', 
              opacity: 0.9, 
              lineHeight: 1.65, 
              margin: 0,
              maxWidth: '740px',
              textAlign: 'left',
              textWrap: 'balance'
            }}>
              Для первичного анализа достаточно адреса объекта, кадастрового номера и стадии стройки. Остальные документы запросим и проанализируем по ходу аудита.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '32px', marginBottom: '40px' }}>
            {/* Карточка 1: Исходно-разрешительная и проектная документация */}
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
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0 }}>
                  Исходно-разрешительная база
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Необходима для проверки градостроительного регламента, соответствия параметров объекта и законности застройки.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Выписка ЕГРН на землю и здание</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Кадастровый номер, права собственности/аренды, вид разрешённого использования и обременения.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>ГПЗУ и технические условия</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Градостроительный план участка, отступы, охранные зоны ЗОУИТ и условия подключения к сетям.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Проект и экспертиза (при наличии)</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Разделы проектной документации (АР, КР, СПОЗУ), заключение экспертизы и разрешение на строительство.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Карточка 2: Договорная база и строительный контроль */}
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
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0 }}>
                  Договорная база и стройконтроль
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Необходимы для проверки распределения ответственности застройщика, генподрядчика и проектировщика.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Договоры подряда и техзаказчика</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Соглашения с генеральным проектировщиком, подрядчиками, наличие членства в СРО и страховки.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Акты приёмки (КС-2, КС-3)</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Акты выполненных работ, справки о стоимости, журналы общих работ и акты скрытых работ.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Предписания и переписка</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Замечания органов Госстройнадзора, мотивированные отказы ведомств и претензии сторон.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Информационная плашка */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(23, 50, 77, 0.04) 0%, rgba(23, 50, 77, 0.08) 100%)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <strong>Нет полного комплекта документов?</strong> Начнём с того, что есть в наличии. Недостающие градостроительные сведения, регламенты и выписки из реестров запросим самостоятельно.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ 5. ЭТАПЫ СОПРОВОЖДЕНИЯ СТРОИТЕЛЬСТВА (PROCESS BLOCK) ═══ */}
      <ProcessBlock
        title="Порядок работы по сопровождению проекта"
        subtitle="Пять стадий правового контроля: от первичного аудита до ввода в эксплуатацию и регистрации права"
        steps={[
          {
            num: '01',
            title: 'Аудит участка и исходных данных',
            desc: 'Проверяем права на землю, ПЗЗ, ГПЗУ, ЗОУИТ и технические ограничения перед проектированием.'
          },
          {
            num: '02',
            title: 'Договоры с проектировщиками и СРО',
            desc: 'Фиксируем техническое задание, этапы проектирования, согласование в экспертизе и авторские права.'
          },
          {
            num: '03',
            title: 'Экспертиза проекта и разрешение',
            desc: 'Контролируем комплектность по ст. 51 ГрК РФ и сопровождение получения разрешения на строительство.'
          },
          {
            num: '04',
            title: 'Правовой надзор за генподрядом',
            desc: 'Регламентируем сдачу-приёмку КС-2/КС-3, гарантийные удержания, порядок допработ и претензионную переписку.'
          },
          {
            num: '05',
            title: 'Ввод в эксплуатацию и регистрация',
            desc: 'Сверка техплана с проектом, получение разрешения на ввод по ст. 55 ГрК РФ и регистрация прав в Росреестре.'
          }
        ]}
      />

      {/* ═══ 6. ПРАКТИКА (CASES BLOCK) ═══ */}
      <CasesBlock
        cases={cases}
        title={
          <>
            <span style={{ display: 'inline-block' }}>Практика сопровождения</span> <br />
            <span style={{ display: 'inline-block' }}>строительства и девелопмента</span>
          </>
        }
        showDemoWarning={false}
        resultLabel="Результат"
        showAllLink="/praktika"
        showAllText="Смотреть всю практику →"
      />

      {/* ═══ 7. СТОИМОСТЬ (PRICING BLOCK) ═══ */}
      <PricingBlock
        title="Стоимость юридического сопровождения строительства"
        subtitle="Фиксированная стоимость работ, закреплённая в договоре. Понятные и измеримые этапы."
        tiers={pricingTiers}
      />

      {/* ═══ 8. ВОПРОСЫ И ОТВЕТЫ (FAQ BLOCK) ═══ */}
      <FAQBlock
        title="Частые вопросы по строительству и реконструкции"
        subtitle="Разъяснения юриста о разрешениях на строительство, экспертизе проектов и вводе объектов"
        faqs={faqs}
      />

      {/* ═══ 9. СМЕЖНЫЕ УСЛУГИ КЛАСТЕРА (GRID-4) ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ marginBottom: '36px' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '24px'
            }}>
              <h2 className="with-accent" style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: 'clamp(24px, 3.5vw, 34px)', 
                color: 'var(--color-deep-blue)', 
                margin: 0, 
                lineHeight: 1.25, 
                flex: '1 1 480px', 
                minWidth: '280px' 
              }}>
                <span style={{ display: "inline-block" }}>Смежные услуги</span> <br />
                <span style={{ display: "inline-block" }}>кластера недвижимости</span>
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
                Комплексная юридическая помощь бизнесу: купля-продажа, коммерческая аренда, земельное право и судебный арбитраж.
              </p>
            </div>
          </div>

          <div className="grid grid-4" style={{ gap: '20px', marginBottom: '28px' }}>
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
        </div>
      </section>

      {/* ═══ 10. ФИНАЛЬНАЯ ФОРМА (СВЯЗАТЬСЯ С НАМИ) — ШАБЛОН ═══ */}
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
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Получите первичную</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>оценку проекта</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко опишите параметры объекта и текущую стадию. Юрист оценит правовые риски, комплектность документов и свяжется с вами в течение 15 минут в рабочее время.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация строительного юриста</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните прямо сейчас: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (4742) 20-15-25</a>
                </p>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '6px' }}>
                  Липецк, ул. Советская, д. 35, офис 213 (приём по предварительной записи)
                </div>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Конфиденциальность:</strong>
                Не указывайте в форме конфиденциальные инвестиционные планы и закрытые данные. Документы можно передать юристу после согласования защищённого канала связи.
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Обсудить строительный проект"
                subtitle={
                  <>
                    <span style={{ display: 'inline-block' }}>Опишите объект и стадию стройки. Юрист свяжется с вами</span> <br />
                    <span style={{ display: 'inline-block' }}>в течение 15 минут в рабочее время.</span>
                  </>
                }
                subtext={
                  <>
                    <span style={{ display: 'inline-block' }}>Если вы оставите заявку вечером или в&nbsp;выходной день,</span> <br />
                    <span style={{ display: 'inline-block' }}>мы перезвоним в&nbsp;ближайший рабочий день.</span>
                  </>
                }
                buttonText="Отправить проект на оценку"
                commentPlaceholder="Укажите назначение объекта (склад, цех, ТЦ), стадию и возникшие вопросы…"
                hiddenFields={[
                  { name: 'source_page', value: '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/yuridicheskoe-soprovozhdenie-stroitelstva/' },
                  { name: 'service', value: 'Юридическое сопровождение строительства и реконструкции' }
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
