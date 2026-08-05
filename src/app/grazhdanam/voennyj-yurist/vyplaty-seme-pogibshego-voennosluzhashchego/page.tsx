import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';
import CasesBlock from '@/components/CasesBlock';
import ProcessBlock from '@/components/ProcessBlock';
import PricingBlock from '@/components/PricingBlock';
import SpecialistBlock from '@/components/SpecialistBlock';

export const metadata = {
  title: 'Выплаты семье погибшего военнослужащего — юрист в Липецке | Де-Юре',
  description: 'Помощь семье погибшего военнослужащего: проверка права каждого заявителя, федеральных, страховых и региональных выплат, документов и обжалование отказа.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/voennyj-yurist/vyplaty-seme-pogibshego-voennosluzhashchego/',
  },
  openGraph: {
    type: 'website',
    title: 'Выплаты семье погибшего военнослужащего — юрист в Липецке | Де-Юре',
    description: 'Помощь семье погибшего военнослужащего: проверка права каждого заявителя, федеральных, страховых и региональных выплат, документов и обжалование отказа.',
    url: 'https://dejure-help.ru/grazhdanam/voennyj-yurist/vyplaty-seme-pogibshego-voennosluzhashchego/',
    images: [
      {
        url: 'https://dejure-help.ru/images/og/vyplaty-seme-pogibshego-voennosluzhashchego.jpg',
        width: 1200,
        height: 630,
        alt: 'Юридическая помощь семье погибшего военнослужащего — Де-Юре',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Выплаты семье погибшего военнослужащего — юрист в Липецке | Де-Юре',
    description: 'Помощь семье погибшего военнослужащего: проверка права каждого заявителя, федеральных, страховых и региональных выплат, документов и обжалование отказа.',
    images: ['https://dejure-help.ru/images/og/vyplaty-seme-pogibshego-voennosluzhashchego.jpg'],
  },
};

export default function VyplatySemePogibshegoPage() {
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LegalService',
        '@id': 'https://dejure-help.ru/#organization',
        'name': 'Юридическая компания «Де-Юре»',
        'url': 'https://dejure-help.ru/',
        'telephone': '+7 910 350-31-11',
        'address': {
          '@type': 'PostalAddress',
          'postalCode': '398001',
          'streetAddress': 'ул. Советская, д. 35, оф. 213',
          'addressLocality': 'Липецк',
          'addressRegion': 'Липецкая область',
          'addressCountry': 'RU'
        }
      },
      {
        '@type': 'WebSite',
        '@id': 'https://dejure-help.ru/#website',
        'url': 'https://dejure-help.ru/',
        'name': 'Де-Юре',
        'publisher': { '@id': 'https://dejure-help.ru/#organization' },
        'inLanguage': 'ru-RU'
      },
      {
        '@type': 'Person',
        '@id': 'https://dejure-help.ru/specialisty/konopkin-dmitriy-sergeevich/#person',
        'name': 'Дмитрий Сергеевич Конопкин',
        'url': 'https://dejure-help.ru/specialisty/konopkin-dmitriy-sergeevich/',
        'jobTitle': 'Адвокат, партнёр ЮК «Де-Юре», куратор направления военного права',
        'image': 'https://dejure-help.ru/images/konopkin.jpg',
        'worksFor': { '@id': 'https://dejure-help.ru/#organization' }
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/grazhdanam/voennyj-yurist/vyplaty-seme-pogibshego-voennosluzhashchego/#service',
        'name': 'Юридическая помощь по выплатам семье погибшего военнослужащего',
        'serviceType': 'Проверка права на выплаты семье погибшего военнослужащего, оформление выплат и обжалование отказов',
        'url': 'https://dejure-help.ru/grazhdanam/voennyj-yurist/vyplaty-seme-pogibshego-voennosluzhashchego/',
        'provider': { '@id': 'https://dejure-help.ru/#organization' },
        'areaServed': { '@type': 'AdministrativeArea', 'name': 'Липецк и Липецкая область' }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/grazhdanam/voennyj-yurist/vyplaty-seme-pogibshego-voennosluzhashchego/#breadcrumb',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Главная', 'item': 'https://dejure-help.ru/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Гражданам', 'item': 'https://dejure-help.ru/grazhdanam/' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Военный юрист', 'item': 'https://dejure-help.ru/grazhdanam/voennyj-yurist/' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Выплаты семье погибшего военнослужащего', 'item': 'https://dejure-help.ru/grazhdanam/voennyj-yurist/vyplaty-seme-pogibshego-voennosluzhashchego/' }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/grazhdanam/voennyj-yurist/vyplaty-seme-pogibshego-voennosluzhashchego/#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Какие выплаты могут быть положены семье погибшего военнослужащего?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'В зависимости от статуса военнослужащего, обстоятельств и даты гибели или смерти могут проверяться несколько самостоятельных оснований: специальные федеральные выплаты, единовременное пособие, обязательное государственное страхование, ежемесячные компенсации и региональные меры поддержки. У каждой выплаты свои условия, круг получателей и документы. Поэтому специалист проверяет каждое основание отдельно.' }
          },
          {
            '@type': 'Question',
            'name': 'Кто из родственников может претендовать на выплаты?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'К возможным получателям могут относиться супруг или супруга, родители, дети и другие лица, прямо указанные в правилах конкретной выплаты. Для отдельных заявителей имеют значение возраст, очное обучение, инвалидность, иждивение или фактическое воспитание. Само по себе родство не означает автоматического права на все выплаты.' }
          },
          {
            '@type': 'Question',
            'name': 'Одинаков ли круг получателей для всех выплат?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Нет. Круг получателей федеральной, страховой и региональной выплаты может различаться. Один и тот же человек может иметь право на одну меру поддержки и не соответствовать условиям другой. Поэтому нельзя использовать единый список родственников без проверки каждой выплаты.' }
          },
          {
            '@type': 'Question',
            'name': 'Можно ли получить несколько видов выплат?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'В ряде случаев проверяются несколько самостоятельных выплат одновременно, но их совместимость, условия и порядок распределения нужно устанавливать отдельно. Наличие права на одну выплату не подтверждает автоматически право на остальные.' }
          },
          {
            '@type': 'Question',
            'name': 'Что делать, если заявителя не включили в число получателей или отказали в выплате?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Необходимо изучить письменные основания отказа или невключения, сопоставить условия конкретной выплаты с документами заявителя и определить порядок досудебного либо судебного обжалования.' }
          },
          {
            '@type': 'Question',
            'name': 'Можно ли проконсультироваться или начать работу дистанционно?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Да. Первичный разбор ситуации, анализ имеющихся справок, свидетельств и ответов ведомств, а также подготовка необходимых документов могут проводиться дистанционно.' }
          },
          {
            '@type': 'Question',
            'name': 'Какие документы нужны для проверки права на выплаты?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Обычно проверяются документы о гибели или смерти и обстоятельствах её наступления, сведения о прохождении службы, документы о родстве, браке, рождении детей, обучении, инвалидности или иждивении, а также ранее поданные заявления и ответы ведомств. Точный перечень зависит от статуса военнослужащего, вида выплаты и положения каждого заявителя. На первичной консультации можно начать с тех документов, которые уже есть: специалист определит, чего не хватает и где это получить.' }
          },
          {
            '@type': 'Question',
            'name': 'Есть ли срок для обращения за выплатами или обжалования отказа?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'Сроки зависят от конкретной выплаты, основания обращения и способа защиты права. Для подачи заявления, досудебной жалобы и обращения в суд могут действовать разные сроки. Поэтому при задержке, отказе или невключении в число получателей лучше не откладывать проверку документов: специалист установит применимый срок и оценит, можно ли его восстановить, если он уже пропущен.' }
          },
          {
            '@type': 'Question',
            'name': 'Можно ли получить выплату, если военнослужащий умер позднее от последствий ранения или заболевания?',
            'acceptedAnswer': { '@type': 'Answer', 'text': 'В отдельных случаях право семьи может сохраняться, если подтверждена связь смерти с ранением, травмой, контузией или заболеванием, полученными в период службы, и соблюдены условия конкретной выплаты или страхового обеспечения. Значение имеют причина смерти, медицинские документы, заключения уполномоченных органов, дата увольнения и срок, прошедший после него. Эти обстоятельства необходимо проверять применительно к каждой выплате отдельно.' }
          }
        ]
      },
      {
        '@type': 'WebPage',
        '@id': 'https://dejure-help.ru/grazhdanam/voennyj-yurist/vyplaty-seme-pogibshego-voennosluzhashchego/#webpage',
        'url': 'https://dejure-help.ru/grazhdanam/voennyj-yurist/vyplaty-seme-pogibshego-voennosluzhashchego/',
        'name': 'Выплаты семье погибшего военнослужащего — юрист в Липецке | Де-Юре',
        'isPartOf': { '@id': 'https://dejure-help.ru/#website' },
        'about': { '@id': 'https://dejure-help.ru/grazhdanam/voennyj-yurist/vyplaty-seme-pogibshego-voennosluzhashchego/#service' },
        'breadcrumb': { '@id': 'https://dejure-help.ru/grazhdanam/voennyj-yurist/vyplaty-seme-pogibshego-voennosluzhashchego/#breadcrumb' },
        'mainEntity': [
          { '@id': 'https://dejure-help.ru/grazhdanam/voennyj-yurist/vyplaty-seme-pogibshego-voennosluzhashchego/#service' },
          { '@id': 'https://dejure-help.ru/grazhdanam/voennyj-yurist/vyplaty-seme-pogibshego-voennosluzhashchego/#faq' }
        ],
        'inLanguage': 'ru-RU'
      }
    ]
  };

  const faqs = [
    { 
      q: 'Какие выплаты могут быть положены семье погибшего военнослужащего?', 
      a: 'В зависимости от статуса военнослужащего, обстоятельств и даты гибели или смерти могут проверяться несколько самостоятельных оснований: специальные федеральные выплаты, единовременное пособие, обязательное государственное страхование, ежемесячные компенсации и региональные меры поддержки. У каждой выплаты свои условия, круг получателей и документы. Поэтому специалист проверяет каждое основание отдельно.' 
    },
    { 
      q: 'Кто из родственников может претендовать на выплаты?', 
      a: 'К возможным получателям могут относиться супруг или супруга, родители, дети и другие лица, прямо указанные в правилах конкретной выплаты. Для отдельных заявителей имеют значение возраст, очное обучение, инвалидность, иждивение или фактическое воспитание. Само по себе родство не означает автоматического права на все выплаты.' 
    },
    { 
      q: 'Одинаков ли круг получателей для всех выплат?', 
      a: 'Нет. Круг получателей федеральной, страховой и региональной выплаты может различаться. Один и тот же человек может иметь право на одну меру поддержки и не соответствовать условиям другой. Поэтому нельзя использовать единый список родственников без проверки каждой выплаты.' 
    },
    { 
      q: 'Можно ли получить несколько видов выплат?', 
      a: 'В ряде случаев проверяются несколько самостоятельных выплат одновременно, но их совместимость, условия и порядок распределения нужно устанавливать отдельно. Наличие права на одну выплату не подтверждает автоматически право на остальные.' 
    },
    { 
      q: 'Что делать, если заявителя не включили в число получателей или отказали в выплате?', 
      a: 'Необходимо изучить письменные основания отказа или невключения, сопоставить условия конкретной выплаты с документами заявителя и определить порядок досудебного либо судебного обжалования.' 
    },
    { 
      q: 'Можно ли проконсультироваться или начать работу дистанционно?', 
      a: 'Да. Первичный разбор ситуации, анализ имеющихся справок, свидетельств и ответов ведомств, а также подготовка необходимых документов могут проводиться дистанционно.' 
    },
    { 
      q: 'Какие документы нужны для проверки права на выплаты?', 
      a: 'Обычно проверяются документы о гибели или смерти и обстоятельствах её наступления, сведения о прохождении службы, документы о родстве, браке, рождении детей, обучении, инвалидности или иждивении, а также ранее поданные заявления и ответы ведомств. Точный перечень зависит от статуса военнослужащего, вида выплаты и положения каждого заявителя. На первичной консультации можно начать с тех документов, которые уже есть: специалист определит, чего не хватает и где это получить.' 
    },
    { 
      q: 'Есть ли срок для обращения за выплатами или обжалования отказа?', 
      a: 'Сроки зависят от конкретной выплаты, основания обращения и способа защиты права. Для подачи заявления, досудебной жалобы и обращения в суд могут действовать разные сроки. Поэтому при задержке, отказе или невключении в число получателей лучше не откладывать проверку документов: специалист установит применимый срок и оценит, можно ли его восстановить, если он уже пропущен.' 
    },
    { 
      q: 'Можно ли получить выплату, если военнослужащий умер позднее от последствий ранения или заболевания?', 
      a: 'В отдельных случаях право семьи может сохраняться, если подтверждена связь смерти с ранением, травмой, контузией или заболеванием, полученными в период службы, и соблюдены условия конкретной выплаты или страхового обеспечения. Значение имеют причина смерти, медицинские документы, заключения уполномоченных органов, дата увольнения и срок, прошедший после него. Эти обстоятельства необходимо проверять применительно к каждой выплате отдельно.' 
    }
  ];

  const cases = [
    {
      category: 'Сбор и комплектность документов',
      title: 'Оформление выплат при неполном комплекте документов',
      problem: 'Семья начала оформлять выплаты после гибели военнослужащего, но не знала, какие выплаты нужно проверять для каждого заявителя и какие документы необходимо представить. Из-за отсутствия части документов заявления не могли быть рассмотрены по существу.',
      action: 'Определили возможные основания выплат отдельно для каждого заявителя, составили перечень недостающих документов, подготовили запросы и обращения для их получения, проверили комплектность заявлений перед подачей.',
      result: 'Недостающие документы были получены, заявления поданы полными комплектами. После их рассмотрения членам семьи назначили выплаты, право на которые было подтверждено документами.',
      isDemo: true
    },
    {
      category: 'Круг получателей выплат',
      title: 'Включение заявителя в число получателей',
      problem: 'Одного из членов семьи не включили в число получателей отдельной выплаты, хотя его статус и документы могли подтверждать такое право.',
      action: 'Изучили основания принятого решения и условия конкретной выплаты, проверили документы заявителя, выявили неучтённые обстоятельства и подготовили обращение о пересмотре решения. Сформировали правовую позицию и дополнительные подтверждения.',
      result: 'Решение пересмотрели. Заявителя включили в число получателей, и выплата была назначена с учётом причитающейся ему доли.',
      isDemo: true
    },
    {
      category: 'Доказывание иждивения',
      title: 'Подтверждение иждивения для получения выплаты',
      problem: 'Для получения выплаты заявителю было недостаточно подтвердить родство с военнослужащим: требовалось доказать, что помощь погибшего являлась для него постоянным и основным источником средств к существованию.',
      action: 'Определили юридически значимые обстоятельства, собрали документы о доходах и материальной помощи, подготовили доказательства совместного проживания и расходов, сформировали заявление в суд и представили позицию заявителя.',
      result: 'Суд установил факт нахождения заявителя на иждивении военнослужащего. Судебный акт позволил подтвердить право заявителя и обратиться за положенной выплатой.',
      isDemo: true
    }
  ];

  const steps = [
    {
      num: '01',
      title: 'Разбираем ситуацию',
      desc: 'Уточняем, кем заявитель приходится военнослужащему, какие выплаты уже оформлялись и на каком этапе возникла проблема.'
    },
    {
      num: '02',
      title: 'Проверяем право и документы',
      desc: 'Сопоставляем статус каждого заявителя с условиями отдельных выплат и изучаем полученные справки, свидетельства, заявления, ответы и отказы.'
    },
    {
      num: '03',
      title: 'Формируем недостающий комплект',
      desc: 'Определяем, какие документы нужно получить, исправить или запросить и требуется ли подтверждать юридически значимый факт.'
    },
    {
      num: '04',
      title: 'Сопровождаем обращения',
      desc: 'Готовим заявления и запросы, взаимодействуем с соответствующими органами и контролируем рассмотрение документов.'
    },
    {
      num: '05',
      title: 'Обжалуем нарушение при необходимости',
      desc: 'Проверяем основания задержки или отказа, готовим жалобу либо обращение в суд и сопровождаем дальнейшие действия.'
    },
    {
      isBanner: true,
      title: 'Дистанционный формат',
      desc: 'Значительную часть работы можно организовать дистанционно. Если требуется личное участие адвоката или юриста, заранее согласуем место и порядок работы.'
    }
  ];

  return (
    <main>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      
      {/* 4.2. Первый экран */}
      <MilitaryHero 
        breadcrumbs={
          <>
            <a href="/-/" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>Главная</a> <span style={{ margin: '0 8px' }}>/</span> 
            <a href="/-/grazhdanam/" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>Гражданам</a> <span style={{ margin: '0 8px' }}>/</span> 
            <a href="/-/grazhdanam/voennyj-yurist/" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>Военный юрист</a> <span style={{ margin: '0 8px' }}>/</span> 
            <span style={{ color: 'var(--color-text-main)' }}>Выплаты семье погибшего</span>
          </>
        }
        superTitle="Военные выплаты • проверка права и документов"
        title={
          <>
            <span style={{ display: 'block' }}>Юрист по выплатам</span>
            <span style={{ display: 'block' }}>семье погибшего</span>
            <span style={{ display: 'block' }}>военнослужащего</span>
            <span style={{ display: 'block' }}>в Липецке</span>
          </>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '580px', textWrap: 'balance' }}>
            Проверим право каждого заявителя на положенные<br />
            выплаты, определим недостающие документы<br />
            и порядок действий при задержке, отказе<br />
            или споре о включении в число получателей.
          </span>
        }
        primaryCtaText="Получить консультацию"
        primaryCtaLink="#form"
        primaryCtaSubtext="Перезвоним вам в течение 15 минут в рабочее время"
        imageUrl="/-/images/konopkin.jpg"
        imageName="Дмитрий Сергеевич Конопкин"
        imageSubtitle="Адвокат, партнёр ЮК «Де-Юре», куратор направления «Военное право»"
        imageMarginTop="64px"
        trustItems={[
          { text: <><span style={{ display: 'inline-block' }}>Проверяем федеральные и региональные выплаты,</span> <span style={{ display: 'inline-block' }}>а также страховое обеспечение</span></> },
          { text: <><span style={{ display: 'inline-block' }}>Оцениваем право каждого заявителя</span> <span style={{ display: 'inline-block' }}>на получение выплат</span></> },
          { text: <><span style={{ display: 'inline-block' }}>Фиксируем объём и стоимость правовой помощи</span> <span style={{ display: 'inline-block' }}>в договоре</span></> }
        ]}
      />

      {/* 4.4. В каких ситуациях мы можем помочь */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              <span style={{ display: 'inline-block' }}>В каких ситуациях</span> <br /><span style={{ display: 'inline-block' }}>мы можем помочь</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Поможем разобрать Вашу ситуацию, проверить документы<br />
              и выстроить правовую позицию для получения положенных выплат.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '40px' }}>
            {[
              {
                tag: 'СИТУАЦИЯ 01',
                title: <><span style={{ display: 'inline-block' }}>Непонятно, кто имеет право</span> <br /><span style={{ display: 'inline-block' }}>на выплаты</span></>,
                desc: 'Проверим статус каждого заявителя и условия отдельных выплат. Объясним, кто может обращаться и какие обстоятельства необходимо подтвердить.'
              },
              {
                tag: 'СИТУАЦИЯ 02',
                title: <><span style={{ display: 'inline-block' }}>Не хватает</span> <br /><span style={{ display: 'inline-block' }}>документов</span></>,
                desc: 'Определим, каких документов о гибели, службе, родстве, обучении, инвалидности или иждивении недостаёт, и поможем их получить.'
              },
              {
                tag: 'СИТУАЦИЯ 03',
                title: <><span style={{ display: 'inline-block' }}>Выплаты</span> <br /><span style={{ display: 'inline-block' }}>задерживают</span></>,
                desc: 'Установим, где остановилось рассмотрение, подготовим обращения и поможем получить официальный ответ по поданным документам.'
              },
              {
                tag: 'СИТУАЦИЯ 04',
                title: <><span style={{ display: 'inline-block' }}>В выплате</span> <br /><span style={{ display: 'inline-block' }}>отказали</span></>,
                desc: 'Проверим основания отказа, документы и применённые нормы. Определим порядок досудебного или судебного обжалования.'
              },
              {
                tag: 'СИТУАЦИЯ 05',
                title: <><span style={{ display: 'inline-block' }}>Заявителя не включили</span> <br /><span style={{ display: 'inline-block' }}>в число получателей</span></>,
                desc: 'Проверим, относится ли человек к кругу получателей конкретной выплаты и какие документы подтверждают его право.'
              },
              {
                tag: 'СИТУАЦИЯ 06',
                title: <><span style={{ display: 'inline-block' }}>Право требуется</span> <br /><span style={{ display: 'inline-block' }}>подтвердить отдельно</span></>,
                desc: 'Поможем определить, нужно ли устанавливать иждивение, родство, фактическое воспитание или иное юридически значимое обстоятельство.'
              }
            ].map((sit, i) => (
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
                {/* Vector watermark graphic */}
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
                  marginBottom: '12px',
                  background: 'rgba(193, 160, 102, 0.1)',
                  padding: '4px 10px',
                  alignSelf: 'flex-start'
                }}>
                  {sit.tag}
                </div>

                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--color-deep-blue)', lineHeight: 1.4, margin: '0 0 14px 0' }}>
                  {sit.title}
                </h3>

                <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0, position: 'relative', zIndex: 1 }}>
                  {sit.desc}
                </p>
              </div>
            ))}
          </div>

          {/* 4.5. Компактный CTA Card */}
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            background: 'var(--color-deep-blue)',
            borderTop: '3px solid var(--color-gold)',
            borderRadius: '0',
            padding: '36px 44px',
            boxShadow: '0 12px 32px rgba(23, 50, 77, 0.12)',
            position: 'relative',
            overflow: 'hidden'
          }} className="cta-banner-card">
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '32px',
              flexWrap: 'wrap',
              position: 'relative',
              zIndex: 1
            }}>
              <div style={{ flex: '1 1 500px', maxWidth: '800px' }}>
                <h3 style={{
                  color: '#FFFFFF',
                  fontSize: 'clamp(22px, 2.5vw, 26px)',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 700,
                  marginBottom: '10px',
                  lineHeight: 1.3
                }}>
                  <span style={{ display: 'inline-block' }}>Не уверены, есть ли у вас право</span> <br /><span style={{ display: 'inline-block' }}>на выплаты?</span>
                </h3>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: '16px',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  Опишите, кем вы приходитесь военнослужащему и какие документы уже получены. Дмитрий Сергеевич Конопкин изучит информацию и определит возможный порядок действий.
                </p>
              </div>

              <div style={{ flexShrink: 0 }}>
                <a 
                  href="#form" 
                  className="btn white-btn-custom"
                  style={{ 
                    whiteSpace: 'nowrap',
                    fontSize: '16px',
                    padding: '16px 36px',
                    fontWeight: 700
                  }}
                >
                  Обсудить ситуацию
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.6. Куратор направления */}
      <SpecialistBlock 
        title="Куратор направления"
        name="Дмитрий Сергеевич Конопкин"
        position={<>Адвокат, партнёр ЮК «Де-Юре»,<br />куратор направления «Военное право»</>}
        imageUrl="/-/images/konopkin.jpg"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Дмитрий Сергеевич Конопкин курирует работу по оформлению выплат семье погибшего военнослужащего. Проверяет право каждого заявителя и основания по отдельным видам выплат, определяет порядок действий при задержке, отказе или необходимости установить юридически значимый факт.
          </span>,
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Опыт работы в Следственном комитете с 2016 по 2022 год</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>С сентября 2022 года — адвокат</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Реестровый номер 48/812</span>
            </li>
          </ul>,
          <a key="3" href="/-/specialisty/konopkin-dmitriy-sergeevich/" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
            Подробнее о Дмитрии Сергеевиче Конопкине →
          </a>
        ]}
        buttonText="Задать вопрос Дмитрию Сергеевичу"
        buttonHref="#form"
      />

      {/* 4.7. Примеры из практики */}
      <CasesBlock cases={cases} title="Примеры из практики" showAllLink="/praktika" showDemoWarning={true} resultLabel="Результат" />

      {/* 4.8. Как проходит работа */}
      <ProcessBlock 
        steps={steps}
        title="Как проходит работа"
        subtitle=""
        ctaTitle=""
      />

      {/* 4.9. Стоимость */}
      <PricingBlock 
        title="Стоимость"
        subtitle="Состав работ и порядок оплаты фиксируются в договоре до начала процесса"
        disclaimer="Точная стоимость зависит от числа заявителей и проверяемых оснований, полноты документов, необходимости устанавливать юридически значимые факты и наличия досудебного или судебного спора. Дмитрий Сергеевич Конопкин оценит объём работы и назовёт стоимость до заключения договора."
        guaranteeText="Если после консультации заключается договор на дальнейшую работу, стоимость консультации засчитывается в оплату по договору."
        ctaTitle=""
        tiers={[
          {
            title: <><span style={{ display: 'inline-block' }}>Консультация</span> <br /><span style={{ display: 'inline-block' }}>и проверка права</span></>,
            subtitle: 'Первичный разбор ситуации и определение ближайшего порядка действий',
            price: 'ХХХ ₽',
            features: [
              { name: 'Первичный разбор статуса заявителя', value: '✓' },
              { name: 'Анализ возможных видов выплат', value: '✓' },
              { name: 'Изучение имеющихся документов', value: '✓' },
              { name: 'Определение ближайшего порядка действий', value: '✓' }
            ],
            buttonText: 'Записаться на консультацию',
            buttonHref: '#form',
            popular: false
          },
          {
            title: <><span style={{ display: 'inline-block' }}>Оформление</span> <br /><span style={{ display: 'inline-block' }}>выплат</span></>,
            subtitle: 'Комплексное сопровождение подачи заявлений и получения выплат',
            badgeText: 'ВОСТРЕБОВАНО',
            price: 'ХХХ ₽',
            features: [
              { name: 'Проверка полного комплекта документов', value: '✓' },
              { name: 'Подготовка заявлений и запросов', value: '✓' },
              { name: 'Помощь в получении недостающих документов', value: '✓' },
              { name: 'Сопровождение подачи в ведомства', value: '✓' }
            ],
            buttonText: 'Оформить сопровождение',
            buttonHref: '#form',
            popular: true
          },
          {
            title: <><span style={{ display: 'inline-block' }}>Обжалование</span> <br /><span style={{ display: 'inline-block' }}>отказа</span></>,
            subtitle: 'Досудебная и судебная защита прав получателей выплат',
            price: 'ХХХ ₽',
            features: [
              { name: 'Правовой анализ отказа или задержки', value: '✓' },
              { name: 'Подготовка жалобы или иска в суд', value: '✓' },
              { name: <>Представительство в ведомствах<br />и суде</>, value: '✓' },
              { name: 'Сопровождение обжалования в объёме договора', value: '✓' }
            ],
            buttonText: 'Обсудить обжалование',
            buttonHref: '#form',
            popular: false
          }
        ]}
      />

      {/* 4.10. Частые вопросы */}
      <FAQBlock 
        faqs={faqs}
        title={<><span style={{ display: 'inline-block' }}>Частые вопросы</span> <br /><span style={{ display: 'inline-block' }}>о выплатах семье погибшего</span> <br /><span style={{ display: 'inline-block' }}>военнослужащего</span></>}
        subtitle="Ответы на популярные вопросы. Ответы носят информационный характер — точный порядок действий определяется после изучения ваших документов."
        ctaText="Задать свой вопрос"
        ctaLink="#form"
      />

      {/* 4.11. Связанная услуга */}
      <section className="section bg-cream" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Связанная услуга
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              <span style={{ display: 'inline-block' }}>Смежная услуга при вопросах,</span> <br />
              <span style={{ display: 'inline-block' }}>связанных с оформлением выплат</span> <br />
              <span style={{ display: 'inline-block' }}>и защитой прав семьи военнослужащего.</span>
            </p>
          </div>

          <style dangerouslySetInnerHTML={{ __html: `
            .related-service-card {
              border-top: 3px solid var(--color-primary) !important;
            }
            .related-service-card:hover {
              border-top: 3px solid var(--color-primary) !important;
            }
            .related-service-card:hover .card-arrow {
              color: var(--color-gold) !important;
            }
            .related-service-card:hover .card-arrow svg {
              stroke: var(--color-gold) !important;
            }
            .all-services-link:hover {
              color: var(--color-gold) !important;
            }
          `}} />
          <div style={{ maxWidth: '560px' }}>
            <a href="/-/grazhdanam/voennyj-yurist/priznanie-voennosluzhashchego-umershim/" style={{ textDecoration: 'none', display: 'block' }}>
              <div 
                className="card related-service-card" 
                style={{ 
                  height: '100%', 
                  minHeight: '140px',
                  padding: '32px', 
                  background: 'var(--color-white)', 
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'all 0.3s',
                  position: 'relative'
                }}
              >
                <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                  <span style={{ display: 'inline-block' }}>Объявление военнослужащего</span> <br /><span style={{ display: 'inline-block' }}>умершим</span>
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Поможем обратиться в суд для объявления военнослужащего умершим, если без судебного решения невозможно оформить выплаты и другие права семьи.
                </p>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '15px', fontWeight: 600, transition: 'transform 0.3s' }}>
                  Подробнее 
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </a>
          </div>

          <div style={{ marginTop: '32px' }}>
            <a href="/-/grazhdanam/voennyj-yurist/" className="all-services-link" style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', textDecoration: 'underline', textUnderlineOffset: '4px', display: 'inline-flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s ease' }}>
              Смотреть все услуги военного юриста →
            </a>
          </div>
        </div>
      </section>

      {/* 4.12. ContactsForm Section */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingTop: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  Связаться с адвокатом
                </span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                <span style={{ display: 'inline-block' }}>Обсудите ситуацию</span> <br /><span style={{ display: 'inline-block' }}>с Дмитрием Сергеевичем Конопкиным</span>
              </h2>
              
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко опишите, что произошло, и оставьте контактные данные. <span style={{ color: 'var(--color-deep-blue)', fontWeight: 600 }}>Обращение будет передано Дмитрию Сергеевичу Конопкину.</span> Он уточнит, какие документы у вас есть, изучит обстоятельства и согласует с вами консультацию.
              </p>
              
              <div style={{ marginTop: '32px' }}>
                <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 22 16.92z"></path></svg>
                  <span>
                    Перезвоним вам в течение<br />
                    15 минут в рабочее время
                  </span>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
              <div style={{ background: 'var(--gradient-cream)', padding: '40px', borderRadius: '0', boxShadow: '0 8px 24px rgba(0,0,0,0.15)', width: '100%', border: '1px solid rgba(0,0,0,0.06)' }}>
                <ContactsForm 
                  title="Написать адвокату" 
                  subtitle="" 
                  buttonText="Получить консультацию"
                  commentPlaceholder="Кратко опишите обстоятельства и имеющиеся документы..."
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


