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

export const metadata = {
  title: 'Выплаты семье погибшего военнослужащего — юрист в Липецке | Де-Юре',
  description: 'Помощь семье погибшего военнослужащего: проверка права каждого заявителя, федеральных, страховых и региональных выплат, документов и обжалование отказа.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/voennyj-yurist/vyplaty-seme-pogibshego-voennosluzhashchego/',
  },
  openGraph: {
    title: 'Выплаты семье погибшего военнослужащего — юрист в Липецке | Де-Юре',
    description: 'Помощь семье погибшего военнослужащего: проверка права каждого заявителя, федеральных, страховых и региональных выплат, документов и обжалование отказа.',
    url: 'https://dejure-help.ru/grazhdanam/voennyj-yurist/vyplaty-seme-pogibshego-voennosluzhashchego/',
    images: [{ url: 'https://dejure-help.ru/images/logo_dark.png' }],
  },
};

export default function VyplatySemePogibshegoPage() {
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://dejure-help.ru/team/konopkin-dmitriy-sergeevich/#person',
        'name': 'Дмитрий Сергеевич Конопкин',
        'jobTitle': 'Адвокат, партнёр ЮК «Де-Юре», куратор направления военного права',
        'description': 'Адвокат, реестровый номер 48/812. Бывший старший следователь отделов по расследованию особо важных дел СУ СК РФ по Липецкой области. Специалист по военному праву и защите прав военнослужащих и их семей.',
        'image': 'https://dejure-help.ru/images/konopkin.jpg',
        'worksFor': {
          '@type': 'LegalService',
          '@id': 'https://dejure-help.ru/#legalservice',
          'name': 'Юридическая компания «Де-Юре»'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/grazhdanam/voennyj-yurist/vyplaty-seme-pogibshego-voennosluzhashchego/#breadcrumb',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Главная', 'item': 'https://dejure-help.ru/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Гражданам', 'item': 'https://dejure-help.ru/grazhdanam/' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Военный юрист', 'item': 'https://dejure-help.ru/grazhdanam/voennyj-yurist/' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Выплаты семье погибшего', 'item': 'https://dejure-help.ru/grazhdanam/voennyj-yurist/vyplaty-seme-pogibshego-voennosluzhashchego/' }
        ]
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
    }
  ];

  const cases = [
    {
      category: 'Сбор и комплектность документов',
      title: 'Оформление выплат при неполном комплекте документов',
      problem: 'Семья начала оформление, но часть документов об обстоятельствах гибели и статусе получателей отсутствовала, поэтому рассмотрение не продвигалось.',
      action: 'Проверили имеющийся комплект, разделили документы по видам выплат, определили недостающее и подготовили обращения для их получения.',
      result: 'Необходимые документы были собраны и направлены для рассмотрения заявлений о выплатах.',
      isDemo: true
    },
    {
      category: 'Круг получателей выплат',
      title: 'Пересмотр вопроса о включении заявителя в число получателей',
      problem: 'Одного из заявителей не включили в число получателей, хотя у него имелись документы, которые могли подтверждать право на отдельную выплату.',
      action: 'Проверили условия конкретной выплаты, документы заявителя и основания принятого решения, подготовили обращение о повторном рассмотрении.',
      result: 'Документы заявителя были приняты к повторной проверке с учётом ранее нерассмотренных обстоятельств.',
      isDemo: true
    },
    {
      category: 'Доказывание иждивения',
      title: 'Подтверждение иждивения для получения выплаты',
      problem: 'Для обращения за выплатой одного родства было недостаточно: требовалось подтвердить, что заявитель находился на иждивении военнослужащего.',
      action: 'Определили юридически значимые обстоятельства, собрали доказательства материальной зависимости и подготовили обращение в суд.',
      result: 'Полученный судебный акт был использован для дальнейшего обращения за положенной выплатой.',
      isDemo: true
    }
  ];

  const steps = [
    {
      num: '1',
      title: 'Разбираем ситуацию',
      desc: 'Уточняем, кем заявитель приходится военнослужащему, какие выплаты уже оформлялись и на каком этапе возникла проблема.'
    },
    {
      num: '2',
      title: 'Проверяем право и документы',
      desc: 'Сопоставляем статус каждого заявителя с условиями отдельных выплат и изучаем полученные справки, свидетельства, заявления, ответы и отказы.'
    },
    {
      num: '3',
      title: 'Формируем недостающий комплект',
      desc: 'Определяем, какие документы нужно получить, исправить или запросить и требуется ли подтверждать юридически значимый факт.'
    },
    {
      num: '4',
      title: 'Сопровождаем обращения',
      desc: 'Готовим заявления и запросы, взаимодействуем с соответствующими органами и контролируем рассмотрение документов.'
    },
    {
      num: '5',
      title: 'Обжалуем нарушение при необходимости',
      desc: 'Проверяем основания задержки или отказа, готовим жалобу либо обращение в суд и сопровождаем дальнейшие действия.'
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
            Юрист по выплатам <br />
            семье погибшего <br />
            военнослужащего <br />
            в Липецке
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
        primaryCtaSubtext="Перезвоним в течение 15 минут в рабочее время"
        imageUrl="/-/images/konopkin.jpg"
        imageName="Дмитрий Сергеевич Конопкин"
        imageSubtitle="Адвокат, партнёр ЮК «Де-Юре»"
        trustItems={[
          { text: 'Проверяем право\nкаждого заявителя' },
          { text: 'Федеральные, страховые\nи региональные основания' },
          { text: 'Условия работы —\nв договоре' }
        ]}
      />

      {/* 4.4. В каких ситуациях мы можем помочь */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
                Повод для обращения
              </span>
              <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-primary)' }}></div>
            </div>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0 }}>
              В каких ситуациях мы можем помочь
            </h2>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '24px',
            marginBottom: '40px'
          }}>
            {[
              {
                title: '1. Непонятно, кто имеет право на выплаты',
                desc: 'Проверим статус каждого заявителя и условия отдельных выплат. Объясним, кто может обращаться и какие обстоятельства необходимо подтвердить.'
              },
              {
                title: '2. Не хватает документов',
                desc: 'Определим, каких документов о гибели, службе, родстве, обучении, инвалидности или иждивении недостаёт, и поможем их получить.'
              },
              {
                title: '3. Выплаты задерживают',
                desc: 'Установим, где остановилось рассмотрение, подготовим обращения и поможем получить официальный ответ по поданным документам.'
              },
              {
                title: '4. В выплате отказали',
                desc: 'Проверим основания отказа, документы и применённые нормы. Определим порядок досудебного или судебного обжалования.'
              },
              {
                title: '5. Заявителя не включили в число получателей',
                desc: 'Проверим, относится ли человек к кругу получателей конкретной выплаты и какие документы подтверждают его право.'
              },
              {
                title: '6. Право требуется подтвердить отдельно',
                desc: 'Поможем определить, нужно ли устанавливать иждивение, родство, фактическое воспитание или иное юридически значимое обстоятельство.'
              }
            ].map((item, i) => (
              <div key={i} style={{ 
                padding: '32px 28px', 
                background: 'var(--color-cream)',
                borderTop: '3px solid var(--color-gold)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%'
              }}>
                <div>
                  <h3 style={{ fontSize: '19px', fontWeight: 'bold', color: 'var(--color-deep-blue)', marginBottom: '16px', fontFamily: 'var(--font-serif)', lineHeight: 1.35 }}>
                    {item.title}
                  </h3>
                </div>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: '1.65', margin: 0, marginTop: 'auto' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* 4.5. Компактный CTA Card */}
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            background: 'linear-gradient(135deg, var(--color-deep-blue) 0%, #112538 100%)',
            borderTop: '3px solid var(--color-gold)',
            borderRadius: '4px',
            padding: '36px 44px',
            boxShadow: '0 12px 32px rgba(23, 50, 77, 0.12)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              right: '-40px',
              bottom: '-40px',
              width: '260px',
              height: '260px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(197, 160, 89, 0.08) 0%, rgba(0,0,0,0) 70%)',
              pointerEvents: 'none'
            }} />

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
                  Не уверены, есть ли у вас право на выплаты?
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
                  className="btn btn-gold"
                  style={{ 
                    whiteSpace: 'nowrap',
                    fontSize: '16px',
                    padding: '16px 36px',
                    display: 'inline-block',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease'
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
      <section className="section bg-cream" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'relative',
                borderRadius: '4px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
              }}>
                <img 
                  src="/images/konopkin.jpg" 
                  alt="Дмитрий Сергеевич Конопкин" 
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                />
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  Куратор направления
                </span>
              </div>

              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 38px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '8px' }}>
                Дмитрий Сергеевич Конопкин
              </h2>
              
              <p style={{ color: 'var(--color-gold)', fontWeight: 600, fontSize: '16px', marginBottom: '24px' }}>
                Адвокат, партнёр ЮК «Де-Юре», куратор направления военного права
              </p>

              <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: 1.65, marginBottom: '24px' }}>
                Дмитрий Сергеевич Конопкин лично ведёт работу по вопросам выплат семье погибшего военнослужащего. Он проверяет обстоятельства гибели или смерти, статус каждого заявителя, возможные федеральные, страховые и региональные основания, а также документы, необходимые для обращения. При задержке, отказе или необходимости подтвердить юридически значимый факт определяет возможный порядок действий.
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Адвокат, реестровый номер 48/812.',
                  'С 2016 по 2022 год работал в Следственном управлении Следственного комитета Российской Федерации по Липецкой области; прошёл путь до старшего следователя отдела по расследованию особо важных дел.',
                  'Ведёт военные дела в Липецкой области и представляет интересы доверителей в других регионах России.'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ 
                      width: '6px', 
                      height: '6px', 
                      borderRadius: '50%', 
                      background: 'var(--color-gold)', 
                      marginTop: '8px', 
                      flexShrink: 0 
                    }} />
                    <span style={{ color: 'var(--color-text-main)', fontSize: '15px', lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
                <a href="#form" className="btn">Обсудить ситуацию с адвокатом</a>
                <Link href="/specialisty/konopkin-dmitriy-sergeevich" style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none', fontSize: '15px' }}>
                  Подробнее о Дмитрии Сергеевиче Конопкине →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.7. Примеры из практики */}
      <CasesBlock cases={cases} title="Примеры из практики" showAllLink="/praktika" showDemoWarning={true} />

      {/* 4.8. Как проходит работа */}
      <ProcessBlock 
        steps={steps}
        title="Как проходит работа"
        subtitle=""
        ctaTitle=""
        footerNote="Консультацию и первичную проверку документов можно провести дистанционно. Необходимость личного участия юриста или адвоката определим после изучения ситуации."
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
            title: 'Консультация и проверка права',
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
            title: 'Оформление выплат',
            subtitle: 'Комплексное сопровождение подачи заявлений и получения выплат',
            price: 'ХХХ ₽',
            features: [
              { name: 'Проверка полного комплекта документов', value: '✓' },
              { name: 'Подготовка заявлений и запросов', value: '✓' },
              { name: 'Помощь в получении недостающих документов', value: '✓' },
              { name: 'Сопровождение подачи в ведомства', value: '✓' }
            ],
            buttonText: 'Оформить сопровождение',
            buttonHref: '#form',
            popular: false
          },
          {
            title: 'Обжалование отказа',
            subtitle: 'Досудебная и судебная защита прав получателей выплат',
            price: 'ХХХ ₽',
            features: [
              { name: 'Правовой анализ отказа или задержки', value: '✓' },
              { name: 'Подготовка жалобы или иска в суд', value: '✓' },
              { name: 'Представительство в ведомствах и суде', value: '✓' },
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
        superTitle="Частые вопросы"
        title="Частые вопросы о выплатах семье погибшего"
        subtitle="Ответы на популярные вопросы. Ответы носят информационный характер — точный порядок действий определяется после изучения ваших документов."
      />

      {/* 4.11. Связанные услуги */}
      <section className="section bg-cream" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
                Направления военного права
              </span>
              <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-primary)' }}></div>
            </div>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0 }}>
              Связанные услуги
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
            <Link 
              href="/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego"
              className="related-service-card"
              style={{
                background: 'var(--color-white)',
                padding: '36px 32px',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderTop: '3px solid var(--color-gold)',
                transition: 'all 0.3s ease'
              }}
            >
              <div>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.3 }}>
                  Выплаты за ранение военнослужащего
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                  Если требуется помощь в оформлении или обжаловании выплат при ранении, травме или контузии.
                </p>
              </div>
              <div className="related-link-arrow" style={{ marginTop: '24px', color: 'var(--color-primary)', fontWeight: 600, fontSize: '15px', transition: 'color 0.25s ease' }}>
                Подробнее →
              </div>
            </Link>

            <Link 
              href="/grazhdanam/voennyj-yurist/osparivanie-zaklyucheniya-vvk"
              className="related-service-card"
              style={{
                background: 'var(--color-white)',
                padding: '36px 32px',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderTop: '3px solid var(--color-gold)',
                transition: 'all 0.3s ease'
              }}
            >
              <div>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.3 }}>
                  Оспаривание заключения ВВК
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                  Если медицинское заключение не отражает характер или последствия ранения.
                </p>
              </div>
              <div className="related-link-arrow" style={{ marginTop: '24px', color: 'var(--color-primary)', fontWeight: 600, fontSize: '15px', transition: 'color 0.25s ease' }}>
                Подробнее →
              </div>
            </Link>

            <Link 
              href="/grazhdanam/voennyj-yurist/priznanie-voennosluzhashchego-umershim"
              className="related-service-card"
              style={{
                background: 'var(--color-white)',
                padding: '36px 32px',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderTop: '3px solid var(--color-gold)',
                transition: 'all 0.3s ease'
              }}
            >
              <div>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.3 }}>
                  Признание военнослужащего умершим
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                  Если требуется судебное признание военнослужащего безвестно отсутствующим или умершим для дальнейшего оформления выплат.
                </p>
              </div>
              <div className="related-link-arrow" style={{ marginTop: '24px', color: 'var(--color-primary)', fontWeight: 600, fontSize: '15px', transition: 'color 0.25s ease' }}>
                Подробнее →
              </div>
            </Link>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{__html: `
          .related-service-card:hover .related-link-arrow {
            color: var(--color-gold) !important;
          }
        `}} />
      </section>

      {/* 4.12. ContactsForm Section */}
      <section className="section bg-white" id="form">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  Связаться с адвокатом
                </span>
              </div>
              <h2 style={{ fontSize: 'clamp(32px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '20px', lineHeight: 1.2 }}>
                Обсудить ситуацию с Дмитрием Сергеевичем Конопкиным
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '17px', lineHeight: 1.65, marginBottom: '0' }}>
                Кратко опишите, что произошло, и оставьте контактные данные. Обращение будет передано Дмитрию Сергеевичу Конопкину. Он уточнит, какие документы у вас есть, изучит обстоятельства и согласует с вами консультацию.
              </p>
            </div>
            <div>
              <ContactsForm title="Написать адвокату" subtitle="" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
