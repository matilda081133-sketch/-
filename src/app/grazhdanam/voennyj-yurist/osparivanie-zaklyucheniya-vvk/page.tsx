import Link from 'next/link';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';
import SpecialistBlock from '@/components/SpecialistBlock';
import ProcessBlock from '@/components/ProcessBlock';
import CasesBlock from '@/components/CasesBlock';
import PricingBlock from '@/components/PricingBlock';

export const metadata = {
  title: 'Оспаривание заключения ВВК — юрист в Липецке | Де-Юре',
  description: 'Оспаривание заключения ВВК: анализ заключения и медицинских документов, жалоба в вышестоящую ВВК и судебное обжалование в Липецке.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/voennyj-yurist/osparivanie-zaklyucheniya-vvk/',
  },
  openGraph: {
    title: 'Оспаривание заключения ВВК — юрист в Липецке | Де-Юре',
    description: 'Оспаривание заключения ВВК: анализ заключения и медицинских документов, жалоба в вышестоящую ВВК и судебное обжалование в Липецке.',
    url: 'https://dejure-help.ru/grazhdanam/voennyj-yurist/osparivanie-zaklyucheniya-vvk/',
    siteName: 'ЮК «Де-Юре»',
    images: [{ url: 'https://dejure-help.ru/images/konopkin.jpg', width: 1200, height: 630 }],
    locale: 'ru_RU',
    type: 'website'
  }
};

export default function VvkPage() {
  const faqs = [
    { 
      q: 'Что может быть предметом оспаривания?', 
      a: 'Предметом оспаривания могут быть установленная категория годности, неполный учёт заболевания или ранения, вывод о причинной связи, а также заключения об отпуске по болезни, освобождении от обязанностей, ограничениях или годности к дальнейшему прохождению службы.' 
    },
    { 
      q: 'Куда сначала обращаться: в вышестоящую ВВК или в суд?', 
      a: 'Законодательство позволяет подавать жалобу как в вышестоящую военно-врачебную комиссию, так и сразу обращаться с административным исковым заявлением в суд. Выбор маршрута зависит от характера нарушений, сроков и наличия имеющихся медицинских документов.' 
    },
    { 
      q: 'Какие медицинские документы нужны для анализа?', 
      a: 'Подойдут само заключение ВВК (или справка), медицинская карта, выписки из госпиталей, результаты обследований, анализов и заключений профильных специалистов, подтверждающие фактическое состояние здоровья.' 
    },
    { 
      q: 'Что делать, если документы не выдают на руки?', 
      a: 'Если госпиталь или воинская часть задерживают или не выдают копии медицинских карт и заключений ВВК, адвокат направляет официальные адвокатские запросы и обращения для их истребования.' 
    },
    { 
      q: 'Можно ли требовать повторного освидетельствования?', 
      a: 'Да, при выявлении неполноты обследования, процессуальных нарушений или изменении состояния здоровья заявляются требования о проведении контрольного обследования и повторного освидетельствования.' 
    },
    { 
      q: 'В чём разница между независимой ВВЭ и судебной экспертизой?', 
      a: 'Независимая военно-врачебная экспертиза может проводиться по инициативе гражданина в медицинской организации, имеющей соответствующую лицензию. Судебная экспертиза назначается судом в рамках рассматриваемого дела. Необходимость и подходящий вид экспертизы определяются после изучения заключения ВВК, медицинских документов и предмета спора.' 
    },
    { 
      q: 'Приостанавливает ли подача жалобы исполнение решений?', 
      a: 'Подача жалобы на заключение ВВК автоматически не приостанавливает приказ командования или решение призывной комиссии. Для приостановки необходимо заявлять отдельные ходатайства о мерах предварительной защиты.' 
    },
    { 
      q: 'Можно ли оспорить не категорию годности, а причинную связь?', 
      a: 'Да. Предметом оспаривания часто является именно формулировка причинной связи заболевания или ранения со службой, так как от этого напрямую зависит право на страховые и государственные выплаты.' 
    },
    { 
      q: 'Как проходит работа, если военнослужащий находится в другом регионе?', 
      a: 'Первичную консультацию, проверку документов, составление адвокатских запросов, жалоб и исков можно провести полностью дистанционно. Личное участие согласовывается при необходимости судебных заседаний.' 
    },
    { 
      q: 'От чего зависит стоимость юридической помощи по ВВК?', 
      a: 'Стоимость зависит от этапа обращения (анализ, досудебная жалоба или суд), объёма медицинской документации, необходимости истребования документов и проведения экспертных исследований.' 
    }
  ];

  const jsonLdGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://dejure-help.ru/#website',
        url: 'https://dejure-help.ru/',
        name: 'ЮК «Де-Юре»'
      },
      {
        '@type': 'LegalService',
        '@id': 'https://dejure-help.ru/#organization',
        name: 'ЮК «Де-Юре»',
        url: 'https://dejure-help.ru/',
        logo: 'https://dejure-help.ru/images/logo.png',
        telephone: '+7 910 350-31-11',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Липецк',
          addressRegion: 'Липецкая область',
          addressCountry: 'RU'
        },
        areaServed: ['Липецк', 'Липецкая область', 'Россия']
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/grazhdanam/voennyj-yurist/osparivanie-zaklyucheniya-vvk/#service',
        name: 'Оспаривание заключения ВВК',
        serviceType: 'Юридическая помощь по оспариванию заключения ВВК',
        url: 'https://dejure-help.ru/grazhdanam/voennyj-yurist/osparivanie-zaklyucheniya-vvk/',
        description: 'Оспаривание заключения военно-врачебной комиссии: анализ медицинских документов, подача жалобы в вышестоящую ВВК и судебное обжалование в Липецке.',
        provider: {
          '@id': 'https://dejure-help.ru/#organization'
        },
        areaServed: ['Липецк', 'Липецкая область', 'Россия']
      },
      {
        '@type': 'Person',
        '@id': 'https://dejure-help.ru/specialisty/konopkin-dmitriy-sergeevich/#person',
        name: 'Конопкин Дмитрий Сергеевич',
        jobTitle: 'Адвокат, председатель Коллегии адвокатов «Де-Юре», куратор направления «Военное право»',
        description: 'Реестровый номер 48/812 в реестре адвокатов Липецкой области. Специалист по оспариванию заключений ВВК и защите прав военнослужащих.',
        image: 'https://dejure-help.ru/images/konopkin.jpg',
        url: 'https://dejure-help.ru/specialisty/konopkin-dmitriy-sergeevich/',
        affiliation: {
          '@id': 'https://dejure-help.ru/#organization'
        },
        worksFor: {
          '@id': 'https://dejure-help.ru/#organization'
        },
        knowsAbout: [
          'военно-врачебная комиссия',
          'оспаривание заключения ВВК',
          'военное право'
        ]
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/grazhdanam/voennyj-yurist/osparivanie-zaklyucheniya-vvk/#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
          { '@type': 'ListItem', position: 2, name: 'Гражданам', item: 'https://dejure-help.ru/grazhdanam/' },
          { '@type': 'ListItem', position: 3, name: 'Военный юрист', item: 'https://dejure-help.ru/grazhdanam/voennyj-yurist/' },
          { '@type': 'ListItem', position: 4, name: 'Оспаривание заключения ВВК', item: 'https://dejure-help.ru/grazhdanam/voennyj-yurist/osparivanie-zaklyucheniya-vvk/' }
        ]
      },
      {
        '@type': 'WebPage',
        '@id': 'https://dejure-help.ru/grazhdanam/voennyj-yurist/osparivanie-zaklyucheniya-vvk/#webpage',
        url: 'https://dejure-help.ru/grazhdanam/voennyj-yurist/osparivanie-zaklyucheniya-vvk/',
        name: 'Оспаривание заключения ВВК — юрист в Липецке | Де-Юре',
        description: 'Оспаривание заключения ВВК: анализ заключения и медицинских документов, жалоба в вышестоящую ВВК и судебное обжалование в Липецке.',
        breadcrumb: {
          '@id': 'https://dejure-help.ru/grazhdanam/voennyj-yurist/osparivanie-zaklyucheniya-vvk/#breadcrumb'
        },
        mainEntity: {
          '@id': 'https://dejure-help.ru/grazhdanam/voennyj-yurist/osparivanie-zaklyucheniya-vvk/#service'
        },
        isPartOf: {
          '@id': 'https://dejure-help.ru/#website'
        },
        about: {
          '@id': 'https://dejure-help.ru/grazhdanam/voennyj-yurist/osparivanie-zaklyucheniya-vvk/#service'
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/grazhdanam/voennyj-yurist/osparivanie-zaklyucheniya-vvk/#faq',
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

  const situations = [
    {
      tag: 'СИТУАЦИЯ 01',
      title: <><span style={{ display: 'inline-block' }}>Установлена неверная</span> <br /><span style={{ display: 'inline-block' }}>категория годности</span></>,
      desc: 'Сопоставим вывод ВВК с диагнозами, медицинскими документами и применимыми требованиями к состоянию здоровья.'
    },
    {
      tag: 'СИТУАЦИЯ 02',
      title: <><span style={{ display: 'inline-block' }}>Не учтены заболевание, травма</span> <br /><span style={{ display: 'inline-block' }}>или последствия ранения</span></>,
      desc: 'Проверим, какие диагнозы, обследования и последствия отражены в материалах, а какие не получили оценки при вынесении заключения.'
    },
    {
      tag: 'СИТУАЦИЯ 03',
      title: <><span style={{ display: 'inline-block' }}>Освидетельствование</span> <br /><span style={{ display: 'inline-block' }}>проведено неполно</span></>,
      desc: 'Оценим, были ли изучены необходимые документы и проведены обследования, без которых вывод о состоянии здоровья мог быть преждевременным.'
    },
    {
      tag: 'СИТУАЦИЯ 04',
      title: <><span style={{ display: 'inline-block' }}>Неверно определена причинная связь</span> <br /><span style={{ display: 'inline-block' }}>или тяжесть ранения</span></>,
      desc: 'Изучим формулировку заключения, обстоятельства службы и медицинские материалы. Определим, какие выводы и доказательства требуют проверки.'
    },
    {
      tag: 'СИТУАЦИЯ 05',
      title: <><span style={{ display: 'inline-block' }}>В заключении не указаны необходимые</span> <br /><span style={{ display: 'inline-block' }}>ограничения по состоянию здоровья</span></>,
      desc: 'Проверим выводы ВВК об отпуске по болезни, освобождении от обязанностей, ограничениях, возможности продолжать службу или основаниях увольнения.'
    },
    {
      tag: 'СИТУАЦИЯ 06',
      title: <><span style={{ display: 'inline-block' }}>Вышестоящая ВВК оставила</span> <br /><span style={{ display: 'inline-block' }}>заключение без изменения</span></>,
      desc: 'Оценим ответ вышестоящей ВВК и материалы дела, чтобы определить основания и доказательства для дальнейшего судебного обжалования.'
    }
  ];

  return (
    <main>
      {/* JSON-LD Structured Data Graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />
      
      <Header />
      
      {/* ═══ 1. ПЕРВЫЙ ЭКРАН (MILITARY HERO С СТРОКОЙ ДОВЕРИЯ) ═══ */}
      <MilitaryHero 
        breadcrumbs={
          <>
            <a href="/" style={{ color: 'var(--color-primary)' }}>Главная</a> <span style={{ margin: '0 8px' }}>/</span> 
            <a href="/grazhdanam/" style={{ color: 'var(--color-primary)' }}>Гражданам</a> <span style={{ margin: '0 8px' }}>/</span> 
            <a href="/grazhdanam/voennyj-yurist/" style={{ color: 'var(--color-primary)' }}>Военный юрист</a> <span style={{ margin: '0 8px' }}>/</span> 
            <span style={{ color: 'var(--color-text-main)' }}>Оспаривание ВВК</span>
          </>
        }
        superTitle="Военно-врачебная комиссия • досудебное и судебное обжалование"
        title={<><span style={{ display: 'inline-block' }}>Юрист по оспариванию заключения ВВК</span> <br /><span style={{ display: 'inline-block' }}>в Липецке</span></>}
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '580px', textWrap: 'balance' }}>
            <span style={{ display: 'inline-block' }}>Проверим заключение и медицинские документы,</span> <br />
            <span style={{ display: 'inline-block' }}>определим порядок обращения</span> <br />
            <span style={{ display: 'inline-block' }}>в вышестоящую ВВК или суд</span> <br />
            <span style={{ display: 'inline-block' }}>и сформулируем требования о пересмотре результата.</span>
          </span>
        }
        primaryCtaText="Обсудить ситуацию"
        primaryCtaLink="#form"
        primaryCtaSubtext="Перезвоним вам в течение 15 минут в рабочее время"
        imageUrl="/images/konopkin.jpg"
        imageName="Дмитрий Сергеевич Конопкин"
        imageSubtitle="Адвокат, председатель Коллегии адвокатов «Де-Юре», куратор направления «Военное право»"
        imageMarginTop="0px"
        trustItems={[
          { text: <><span style={{ display: 'inline-block' }}>Проверяем заключение</span> <span style={{ display: 'inline-block' }}>и медицинские документы</span></> },
          { text: <><span style={{ display: 'inline-block' }}>Определяем подходящий</span> <span style={{ display: 'inline-block' }}>порядок обжалования</span></> },
          { text: <><span style={{ display: 'inline-block' }}>Фиксируем объём и стоимость правовой помощи</span> <span style={{ display: 'inline-block' }}>в договоре</span></> }
        ]}
      />

      {/* ═══ 2. В КАКИХ СИТУАЦИЯХ МЫ МОЖЕМ ПОМОЧЬ ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, whiteSpace: 'nowrap' }}>
              В каких ситуациях мы можем помочь
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Поможем разобрать Вашу ситуацию, проверить документы и выстроить правовую позицию для оспаривания заключения ВВК.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {situations.map((sit, i) => (
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
                  marginBottom: '12px',
                  background: 'rgba(193, 160, 102, 0.1)',
                  padding: '4px 10px',
                  alignSelf: 'flex-start'
                }}>
                  {sit.tag}
                </div>

                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--color-deep-blue)', lineHeight: 1.4, margin: '0 0 14px 0', whiteSpace: 'pre-line' }}>
                  {sit.title}
                </h3>

                <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0, position: 'relative', zIndex: 1 }}>
                  {sit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 2.1. ПРОМЕЖУТОЧНЫЙ CTA (КАРТОЧКА НА ВСЮ ШИРИНУ В СТИЛЕ "НЕ НАШЛИ СВОЮ СИТУАЦИЮ?") ═══ */}
      <section style={{ padding: '0 0 80px 0', background: 'var(--color-white)' }}>
        <div className="container">
          <div 
            className="card service-card cta-banner-card" 
            style={{ 
              width: '100%', 
              padding: '36px 40px', 
              background: 'var(--color-deep-blue)', 
              borderRadius: '0',
              display: 'flex', 
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '32px',
              flexWrap: 'wrap',
              position: 'relative',
              borderTop: '3px solid var(--color-gold)',
              boxShadow: '0 8px 16px rgba(16, 39, 59, 0.28), 0 2px 6px rgba(16, 39, 59, 0.18)'
            }}
          >
            <div style={{ flex: '1 1 500px' }}>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '22px', fontFamily: 'var(--font-serif)', color: 'var(--color-white)', lineHeight: 1.3 }}>
                Не уверены, есть ли основания для оспаривания?
              </h3>
              <p style={{ margin: '0', fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, maxWidth: '780px' }}>
                Опишите, с каким выводом ВВК вы не согласны и какие медицинские документы у вас есть. Дмитрий Сергеевич Конопкин проверит ситуацию и определит возможный порядок действий.
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <a href="#form" className="btn white-btn-custom" style={{ padding: '14px 32px', fontSize: '15px', display: 'inline-block' }}>
                Проверить основания для обжалования
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. КУРАТОР НАПРАВЛЕНИЯ (БЛОК СПЕЦИАЛИСТА) ═══ */}
      <SpecialistBlock 
        title="Куратор направления"
        name="Конопкин Дмитрий Сергеевич"
        position={<>Адвокат, председатель Коллегии адвокатов «Де-Юре»,<br />куратор направления «Военное право»</>}
        imageUrl="/images/konopkin.jpg"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Дмитрий Сергеевич Конопкин курирует работу по оспариванию заключений ВВК. Изучает заключение комиссии и медицинские материалы, определяет основания и порядок обжалования, контролирует подготовку жалобы или обращения в суд.
          </span>,
          <span key="2" style={{ color: 'var(--color-text-secondary)', display: 'block', marginTop: '8px', fontSize: '14px' }}>
            Реестровый номер 48/812 в реестре адвокатов Липецкой области
          </span>
        ]}
        buttonText="Обсудить ситуацию с адвокатом"
        buttonHref="#form"
      />

      {/* ═══ 4. ДОКУМЕНТЫ ДЛЯ ОСПАРИВАНИЯ ВВК ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Какие документы нужны <br />для оспаривания ВВК
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Для первичной юридической оценки достаточно имеющихся на руках документов. Полный комплект формируется в ходе работы.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            {/* Карточка 1 */}
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
                <span style={{ display: 'inline-block' }}>Заключение комиссии</span> <br />
                <span style={{ display: 'inline-block' }}>и медицинские материалы</span>
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Заключение ВВК или справка</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Оспариваемый акт военно-врачебной комиссии с установленной категорией или формулировкой.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Медицинские карты и выписки</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>История болезни, выписные эпикризы из госпиталей, медицинская книжка и результаты обследований.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Карточка 2 */}
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
                <span style={{ display: 'inline-block' }}>Служебные документы</span> <br />
                <span style={{ display: 'inline-block' }}>и независимые исследования</span>
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Документы о военной службе и ранении</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Справка о травме/ранении, направление на ВВК, служебные характеристики и приказы.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Независимые заключения и ответы</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Результаты обследований в гражданских клиниках, ответы вышестоящих ВВК или прокуратуры.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div style={{
            background: 'var(--color-white)',
            padding: '20px 28px',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            boxShadow: '0 4px 16px rgba(23, 50, 77, 0.05)',
            fontSize: '15px',
            color: 'var(--color-deep-blue)',
            fontWeight: 500,
            lineHeight: 1.6
          }}>
            Если части документов или медицинских карт нет на руках, не откладывайте обращение. Адвокат направит официальные запросы для их истребования из медучреждений и части.
          </div>
        </div>
      </section>

      {/* ═══ 4. ПРАКТИКА ПО ОСПАРИВАНИЮ ВВК ═══ */}
      <CasesBlock 
        title={<>Практика по оспариванию <br />заключений ВВК</>}
        showAllLink="/praktika"
        showDemoWarning={false}
        resultLabel="Ключевой результат"
        cases={[
          {
            category: "КАТЕГОРИЯ ГОДНОСТИ",
            title: "Добились изменения категории годности после ранения",
            problem: "После лечения военнослужащего признали годным к военной службе с незначительными ограничениями. При освидетельствовании комиссия не учла сохраняющиеся последствия ранения и результаты нескольких обследований.",
            action: "Изучили заключение ВВК и медицинские документы, выявили неучтённые диагнозы и несоответствие выводов комиссии данным обследований. Подготовили жалобу в вышестоящую ВВК и представили медицинское обоснование необходимости контрольного освидетельствования.",
            result: "Военнослужащего направили на контрольное освидетельствование. Последствия ранения учли, первоначальное заключение отменили и установили соответствующую состоянию здоровья категорию годности.",
            isDemo: false
          },
          {
            category: "СУДЕБНОЕ ОБЖАЛОВАНИЕ",
            title: "Через суд отменили заключение ВВК, вынесенное без полного обследования",
            problem: "Комиссия вынесла заключение о категории годности без обследования по профильному заболеванию и не оценила представленные заключения гражданских медицинских учреждений. Жалоба в вышестоящую ВВК результата не дала.",
            action: "Получили медицинские документы, подтвердили, какие обязательные исследования не были проведены, и подготовили административный иск. В суде обосновали, что заключение принято на неполных данных и не содержит оценки всех установленных заболеваний.",
            result: "Суд признал оспариваемое заключение незаконным. Военнослужащего направили на новое освидетельствование, по итогам которого категория годности была изменена.",
            isDemo: false
          },
          {
            category: "ПРИЧИННАЯ СВЯЗЬ",
            title: "Добились признания заболевания связанным с военной службой",
            problem: "В заключении ВВК заболевание указали как общее, не связанное с прохождением службы. Из-за этой формулировки военнослужащий не мог реализовать связанные с состоянием здоровья права и получить предусмотренные гарантии.",
            action: "Восстановили последовательность появления и развития заболевания, собрали медицинские документы за период службы и сведения об условиях её прохождения. Подготовили жалобу на вывод ВВК о причинной связи заболевания.",
            result: "Первоначальное заключение пересмотрели. Причинную связь заболевания с прохождением военной службы установили в юридически значимой формулировке.",
            isDemo: false
          }
        ]}
      />

      {/* ═══ 5. КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock 
        title="Как проходит работа"
        subtitle=""
        steps={[
          { num: '01', title: 'Анализ документов', desc: 'Проверяем заключение ВВК, медицинские выписки и формулировки на предмет неполноты или нарушений.' },
          { num: '02', title: 'Определение стратегии', desc: 'Выбираем порядок обжалования — вышестоящая ВВК или административное исковое заявление в суд.' },
          { num: '03', title: 'Подготовка материалов', desc: 'Формируем доказательную базу, подаем адвокатские запросы и составляем мотивированную жалобу или иск.' },
          { num: '04', title: 'Сопровождение процедуры', desc: 'Сопровождаем рассмотрение обращения в вышестоящей ВВК или представляем интересы доверителя в судебном процессе.' },
          { num: '05', title: 'Сопровождаем пересмотр заключения', desc: 'Если принято решение о контрольном обследовании или повторном освидетельствовании, сопровождаем дальнейшую процедуру и проверяем исполнение принятого решения.' },
          { isBanner: true, title: 'Дистанционный формат', desc: 'Консультацию, проверку копии заключения и медицинских документов, подготовку запросов и жалобы можно организовать дистанционно. Необходимость личного участия определяется после анализа материалов.' }
        ]}
      />

      {/* ═══ 6. СТОИМОСТЬ ═══ */}
      <PricingBlock 
        title="Стоимость"
        subtitle="Точная стоимость зависит от состояния документов, стадии дела и необходимости обжалования. После первичной консультации специалист определит объём работы и назовёт стоимость до заключения договора."
        tiers={[
          {
            title: <><span style={{ display: 'inline-block' }}>Первичный</span> <br /><span style={{ display: 'inline-block' }}>анализ</span></>,
            subtitle: 'Оценка документов',
            popular: false,
            price: 'от 5 000 ₽',
            features: [
              { name: 'Оценка медицинских материалов', value: '✓' },
              { name: 'Определение оснований для спора', value: '✓' },
              { name: 'Составление плана действий', value: '✓' }
            ],
            buttonText: 'Уточнить стоимость',
            buttonHref: '#form'
          },
          {
            title: <><span style={{ display: 'inline-block' }}>Досудебная</span> <br /><span style={{ display: 'inline-block' }}>жалоба</span></>,
            subtitle: 'Вышестоящая ВВК',
            popular: true,
            badgeText: 'ВОСТРЕБОВАНО',
            price: 'от 15 000 ₽',
            features: [
              { name: 'Подготовка адвокатских запросов', value: '✓' },
              { name: 'Мотивированная жалоба в ВВК', value: '✓' },
              { name: 'Истребование медкарт и справок', value: '✓' }
            ],
            buttonText: 'Уточнить стоимость',
            buttonHref: '#form'
          },
          {
            title: <><span style={{ display: 'inline-block' }}>Судебное</span> <br /><span style={{ display: 'inline-block' }}>обжалование</span></>,
            subtitle: 'Защита в суде',
            popular: false,
            price: 'от 35 000 ₽',
            features: [
              { name: 'Подготовка и подача иска в суд', value: '✓' },
              { name: 'Инициирование экспертизы', value: '✓' },
              { name: 'Представительство под ключ', value: '✓' }
            ],
            buttonText: 'Уточнить стоимость',
            buttonHref: '#form'
          }
        ]}
        />

      {/* ═══ 7. ЧАСТЫЕ ВОПРОСЫ ОБ ОСПАРИВАНИИ ЗАКЛЮЧЕНИЯ ВВК ═══ */}
      <FAQBlock 
        faqs={faqs} 
        title={<><span style={{ display: 'inline-block' }}>Частые вопросы</span> <br /><span style={{ display: 'inline-block' }}>об оспаривании заключения ВВК</span></>}
        subtitle="Собрали ответы на ключевые вопросы об оспаривании заключения ВВК. Информация носит общий характер. Возможный порядок действий зависит от обстоятельств и документов."
        ctaText="Задать свой вопрос"
        ctaLink="#form"
      />

      {/* ═══ 8. СВЯЗАННЫЕ УСЛУГИ ═══ */}
            {/* ═══ БЛОК: СВЯЗАННЫЕ УСЛУГИ ═══ */}
      <section className="section bg-cream" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Связанные услуги
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              <span style={{ display: 'inline-block' }}>Смежные направления помощи</span> <br /><span style={{ display: 'inline-block' }}>при вопросах, связанных с ВВК</span> <br /><span style={{ display: 'inline-block' }}>и решениями органов военного управления.</span>
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
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 380px))', gap: '20px' }}>
            <Link href="/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
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
                  <span style={{ display: 'inline-block' }}>Выплаты за ранение</span> <br /><span style={{ display: 'inline-block' }}>военнослужащего</span>
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Помощь в получении положенных страховых и единовременных выплат после прохождения ВВК и установления категории годности.
                </p>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '15px', fontWeight: 600, transition: 'transform 0.3s' }}>
                  Подробнее 
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </Link>
            <Link href="/grazhdanam/voennyj-yurist/spory-s-voenkomatom/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
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
                  <span style={{ display: 'inline-block' }}>Споры с военкоматом</span> <br /><span style={{ display: 'inline-block' }}>и командованием</span>
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Обжалование решений призывных комиссий, отказов в направлении на освидетельствование и неправомерных действий командования.
                </p>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '15px', fontWeight: 600, transition: 'transform 0.3s' }}>
                  Подробнее 
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </Link>
          </div>

          <div style={{ marginTop: '32px' }}>
            <Link href="/grazhdanam/voennyj-yurist/" className="all-services-link" style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', textDecoration: 'underline', textUnderlineOffset: '4px', display: 'inline-flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s ease' }}>
              Смотреть все услуги военного юриста →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 9. СВЯЗАТЬСЯ С НАМИ (ФИНАЛЬНАЯ ФОРМА) ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingTop: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>Связаться с нами</span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                Расскажите, с каким заключением ВВК вы не согласны
              </h2>
              
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', whiteSpace: 'pre-line' }}>
                Кратко укажите, какой вывод ВВК вы хотите оспорить,{'\n'}
                когда вынесено заключение и какие медицинские{'\n'}
                документы имеются. Обращение передадим{'\n'}
                Дмитрию Сергеевичу Конопкину.
              </p>
              
              <div style={{ marginTop: '32px' }}>
                <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
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
                  title="Написать нам" 
                  subtitle="" 
                  buttonText="Получить консультацию"
                  commentPlaceholder="Например: ВВК не учла заболевание и установила категорию «Б»..."
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
