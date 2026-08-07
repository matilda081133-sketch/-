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
  title: 'Оспаривание решений военкомата в Липецке — адвокат | Де-Юре',
  description: 'Проверка решений и действий военкомата и призывной комиссии, подготовка жалобы или административного иска, представительство. ЮК «Де-Юре».',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/voennyj-yurist/spory-s-voenkomatom/',
  },
  openGraph: {
    title: 'Оспаривание решений военкомата в Липецке — адвокат | Де-Юре',
    description: 'Проверка решений и действий военкомата и призывной комиссии, подготовка жалобы или административного иска, представительство. ЮК «Де-Юре».',
    url: 'https://dejure-help.ru/grazhdanam/voennyj-yurist/spory-s-voenkomatom/',
    siteName: 'ЮК «Де-Юре»',
    images: [{ url: 'https://dejure-help.ru/images/konopkin.jpg', width: 1200, height: 630 }],
    locale: 'ru_RU',
    type: 'website'
  }
};

export default function SporySVoenkomatomPage() {
  const faqs = [
    {
      q: 'Какие решения призывной комиссии можно оспорить?',
      a: 'Можно обжаловать решение или заключение, которое, по мнению гражданина, нарушает его права: например, решение о призыве, отказ в отсрочке или освобождении, отказ в направлении на альтернативную гражданскую службу либо заключение о непрохождении службы без законных оснований. Точный предмет обжалования определяется по выписке и материалам.'
    },
    {
      q: 'Можно ли оспорить действие или бездействие военкомата?',
      a: 'Да, если действие, отказ или отсутствие решения нарушает права гражданина. Сначала необходимо определить, что именно должен был сделать военный комиссариат, чем подтверждается обращение и какой способ защиты применим.'
    },
    {
      q: 'Что делать, если на руках нет решения?',
      a: 'Нужно получить выписку или иной документ, позволяющий установить содержание и дату решения. Адвокат поможет определить, какой материал запросить и как зафиксировать обращение.'
    },
    {
      q: 'Куда обращаться: в призывную комиссию субъекта или в суд?',
      a: 'Маршрут зависит от вида решения, обстоятельств и уже предпринятых действий. Закон предусматривает досудебное обжалование ряда решений в призывную комиссию субъекта, а также судебную защиту. Выбирать порядок следует после изучения документов.'
    },
    {
      q: 'Приостанавливает ли жалоба или иск исполнение решения?',
      a: 'Не в каждом случае. Последствия подачи жалобы или обращения в суд зависят от того, какое решение обжалуется и на каком этапе. Поэтому нельзя исходить из универсального правила об автоматическом приостановлении.'
    },
    {
      q: 'Как быстро нужно обратиться к адвокату?',
      a: 'После получения решения или отказа лучше не откладывать проверку документов. Процессуальные сроки и возможные последствия зависят от предмета спора и момента, когда гражданину стало известно о нарушении.'
    },
    {
      q: 'Если спор связан с категорией годности, какая страница мне нужна?',
      a: 'Если нужно оспорить медицинское заключение или категорию годности, основная услуга — «Оспаривание заключения ВВК». Если на основании этого заключения уже принято спорное решение призывной комиссии, может потребоваться работа с обоими документами.'
    },
    {
      q: 'Может ли родитель обратиться вместо совершеннолетнего сына?',
      a: 'Родитель может получить консультацию и передать информацию, но представительство совершеннолетнего гражданина требует надлежащим образом оформленных полномочий. Конкретную форму доверенности определяют по предполагаемым действиям.'
    },
    {
      q: 'Можно ли работать дистанционно?',
      a: 'Консультацию, анализ документов и подготовку обращений можно проводить дистанционно. Возможность удалённого представительства и необходимость личного участия определяются по конкретной процедуре и региону.'
    },
    {
      q: 'От чего зависит стоимость?',
      a: 'От предмета спора, количества и состояния документов, срочности процессуальных действий, выбранного порядка обжалования и объёма представительства. Состав работ и цена фиксируются после первичного анализа.'
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
        name: 'Де-Юре',
        url: 'https://dejure-help.ru/',
        logo: 'https://dejure-help.ru/images/logo.png',
        telephone: '+7 910 350-31-11',
        address: {
          '@type': 'PostalAddress',
          postalCode: '398001',
          streetAddress: 'ул. Советская, д. 35, оф. 213',
          addressLocality: 'Липецк',
          addressRegion: 'Липецкая область',
          addressCountry: 'RU'
        },
        areaServed: ['Липецк', 'Липецкая область', 'Россия']
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/grazhdanam/voennyj-yurist/spory-s-voenkomatom/#service',
        name: 'Оспаривание решений и действий военкомата',
        serviceType: 'Юридическая помощь при оспаривании решений и действий военкомата и призывной комиссии',
        url: 'https://dejure-help.ru/grazhdanam/voennyj-yurist/spory-s-voenkomatom/',
        description: 'Проверим решение и документы, определим подходящий порядок обжалования, подготовим жалобу или административный иск и представим ваши интересы.',
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Липецк и Липецкая область'
        },
        provider: { '@id': 'https://dejure-help.ru/#organization' }
      },
      {
        '@type': 'Person',
        '@id': 'https://dejure-help.ru/specialisty/konopkin-dmitriy-sergeevich/#person',
        name: 'Конопкин Дмитрий Сергеевич',
        jobTitle: 'Адвокат, председатель Коллегии адвокатов «Де-Юре»',
        url: 'https://dejure-help.ru/specialisty/konopkin-dmitriy-sergeevich/',
        image: 'https://dejure-help.ru/images/konopkin.jpg',
        worksFor: { '@id': 'https://dejure-help.ru/#organization' },
        knowsAbout: ['Военное право', 'Споры с военкоматом', 'Обжалование решений призывной комиссии']
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/grazhdanam/voennyj-yurist/spory-s-voenkomatom/#faq',
        mainEntity: faqs.map(faq => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a
          }
        }))
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/grazhdanam/voennyj-yurist/spory-s-voenkomatom/#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
          { '@type': 'ListItem', position: 2, name: 'Гражданам', item: 'https://dejure-help.ru/grazhdanam/' },
          { '@type': 'ListItem', position: 3, name: 'Военный юрист', item: 'https://dejure-help.ru/grazhdanam/voennyj-yurist/' },
          { '@type': 'ListItem', position: 4, name: 'Оспаривание решений и действий военкомата', item: 'https://dejure-help.ru/grazhdanam/voennyj-yurist/spory-s-voenkomatom/' }
        ]
      },
      {
        '@type': 'WebPage',
        '@id': 'https://dejure-help.ru/grazhdanam/voennyj-yurist/spory-s-voenkomatom/#webpage',
        url: 'https://dejure-help.ru/grazhdanam/voennyj-yurist/spory-s-voenkomatom/',
        name: 'Оспаривание решений военкомата в Липецке — адвокат | Де-Юре',
        description: 'Проверка решений и действий военкомата и призывной комиссии, подготовка жалобы или административного иска, представительство. ЮК «Де-Юре».',
        breadcrumb: { '@id': 'https://dejure-help.ru/grazhdanam/voennyj-yurist/spory-s-voenkomatom/#breadcrumb' },
        mainEntity: { '@id': 'https://dejure-help.ru/grazhdanam/voennyj-yurist/spory-s-voenkomatom/#service' },
        isPartOf: { '@id': 'https://dejure-help.ru/#website' },
        about: { '@id': 'https://dejure-help.ru/grazhdanam/voennyj-yurist/spory-s-voenkomatom/#service' }
      }
    ]
  };

  const situations = [
    {
      tag: 'СИТУАЦИЯ 01',
      title: 'Решение о призыве принято с нарушениями',
      desc: 'Проверим решение и материалы, на которых оно основано. Определим, какие нарушения имеют юридическое значение и как их зафиксировать.'
    },
    {
      tag: 'СИТУАЦИЯ 02',
      title: 'Не учли право на отсрочку или освобождение',
      desc: 'Изучим подтверждающие документы и причины отказа. Подготовим требования с учётом фактического основания и принятого решения.'
    },
    {
      tag: 'СИТУАЦИЯ 03',
      title: 'Документы не приняли или не рассмотрели',
      desc: 'Поможем подтвердить подачу документов, получить письменный ответ и оспорить действие или бездействие уполномоченного органа.'
    },
    {
      tag: 'СИТУАЦИЯ 04',
      title: 'Не выдают решение или выписку',
      desc: 'Подготовим обращение для получения материалов, необходимых для проверки решения и выбора дальнейшего порядка защиты.'
    },
    {
      tag: 'СИТУАЦИЯ 05',
      title: 'В сведениях воинского учёта допущена ошибка',
      desc: 'Проверим документы и последствия ошибки. Определим порядок исправления сведений и обжалования отказа или бездействия.'
    },
    {
      tag: 'СИТУАЦИЯ 06',
      title: 'Непонятно, куда и в каком порядке обращаться',
      desc: 'Установим, какое решение или действие нарушает права, какой орган его принял и какой способ защиты применим в конкретной ситуации.'
    }
  ];

  const practiceCases = [
    {
      category: 'ОСПАРИВАНИЕ РЕШЕНИЙ',
      title: 'Отменили решение о призыве при наличии права на отсрочку',
      problem: 'Призывная комиссия приняла решение о призыве, хотя гражданин продолжал обучение и представил документы, подтверждающие право на отсрочку.',
      action: 'Изучили решение комиссии и документы из образовательной организации, подготовили жалобу и представили интересы доверителя при её рассмотрении.',
      result: 'Решение о призыве отменено. Право доверителя на отсрочку учтено при повторном рассмотрении вопроса.',
      isDemo: true
    },
    {
      category: 'СУДЕБНАЯ ЗАЩИТА',
      title: 'Добились повторного рассмотрения решения призывной комиссии',
      problem: 'Решение о призыве было принято без надлежащей оценки представленных гражданином документов и обстоятельств, имеющих значение для его освобождения от призыва.',
      action: 'Получили материалы, выявили нарушения процедуры, подготовили административное исковое заявление и сформировали доказательственную позицию.',
      result: 'Суд признал решение незаконным и обязал призывную комиссию повторно рассмотреть вопрос с учётом представленных документов.',
      isDemo: true
    },
    {
      category: 'ВОИНСКИЙ УЧЁТ',
      title: 'Исправили сведения воинского учёта и добились снятия ограничений',
      problem: 'В сведениях воинского учёта содержалась ошибка. Обращения гражданина не привели к её исправлению, а установленные ограничения продолжали действовать.',
      action: 'Собрали подтверждающие документы, подготовили обращение в военкомат и проконтролировали внесение изменений в учётные сведения.',
      result: 'Ошибочные сведения исправлены, основания для сохранения ограничений устранены.',
      isDemo: true
    }
  ];

  const steps = [
    { num: '01', title: 'Разбираем ситуацию', desc: 'Уточняем, какое решение принято, кем и когда, какие документы подавались и что уже предпринималось.' },
    { num: '02', title: <>Изучаем решение <br />и документы</>, desc: 'Проверяем выписку, ответы, медицинские и иные подтверждающие материалы в пределах предмета спора.' },
    { num: '03', title: 'Определяем способ защиты', desc: 'Выбираем досудебное обжалование, обращение в суд или иной применимый порядок. Объясняем задачи, ограничения и состав работ.' },
    { num: '04', title: 'Готовим и подаём документы', desc: 'Составляем жалобу, заявления, ходатайства или административный иск и формируем комплект приложений.' },
    { num: '05', title: 'Сопровождаем рассмотрение', desc: 'Представляем интересы в согласованном объёме, контролируем движение обращения или дела и объясняем дальнейшие действия.' },
    { isBanner: true, title: 'Дистанционный формат', desc: 'Первичную консультацию, проверку документов, составление адвокатских запросов, жалоб и исков можно провести полностью дистанционно. Личное участие согласовывается при необходимости.' }
  ];

  return (
    <main>
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
            <span style={{ color: 'var(--color-text-main)' }}>Споры с военкоматом</span>
          </>
        }
        superTitle="Военное право • жалобы и судебная защита"
        title={<><span style={{ display: 'block' }}>Оспаривание</span><span style={{ display: 'block' }}>решений и действий</span><span style={{ display: 'block' }}>военкомата в Липецке</span></>}
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '580px', textWrap: 'balance' }}>
            <span style={{ display: 'inline-block' }}>Проверим решение и документы,</span> <br />
            <span style={{ display: 'inline-block' }}>определим подходящий порядок обжалования,</span> <br />
            <span style={{ display: 'inline-block' }}>подготовим жалобу или административный иск</span> <br />
            <span style={{ display: 'inline-block' }}>и представим ваши интересы.</span>
          </span>
        }
        primaryCtaText="Обсудить решение военкомата"
        primaryCtaLink="#form"
        primaryCtaSubtext="Перезвоним вам в течение 15 минут в рабочее время"
        imageUrl="/images/konopkin.jpg"
        imageName="Дмитрий Сергеевич Конопкин"
        imageSubtitle="Адвокат, председатель Коллегии адвокатов «Де-Юре», куратор направления «Военное право»"
        trustItems={[
          { text: 'Проверяем принятое решение и имеющиеся материалы' },
          { text: <>Выбираем порядок обжалования — в призывной<br />комиссии субъекта РФ или в суде</> },
          { text: 'Фиксируем объём и стоимость правовой помощи в договоре' }
        ]}
      />

      {/* ═══ 2. В КАКИХ СИТУАЦИЯХ МЫ МОЖЕМ ПОМОЧЬ ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              <span style={{ display: 'inline-block' }}>В каких ситуациях</span> <br /><span style={{ display: 'inline-block' }}>мы можем помочь</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Поможем разобрать вашу ситуацию, проверить документы и выстроить<br />
              правовую позицию для оспаривания решения или действий военкомата.
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

      {/* ═══ 2.1. ПРОМЕЖУТОЧНЫЙ CTA (ТЕМНО-СИНИЙ БАННЕР С ЗОЛОТОЙ ПЛАШКОЙ) ═══ */}
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
                Не уверены, какое решение нужно оспаривать?
              </h3>
              <p style={{ margin: '0', fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, maxWidth: '780px' }}>
                Дмитрий Сергеевич Конопкин изучит вашу ситуацию и документы, оценит законность решения военкомата и определит возможный порядок действий.
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <a href="#form" className="btn white-btn-custom" style={{ padding: '14px 32px', fontSize: '15px', display: 'inline-block' }}>
                Обсудить ситуацию
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2.2. КАКИЕ ДОКУМЕНТЫ ПОДГОТОВИТЬ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Какие документы нужны <br />для проверки решения военкомата
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Точный перечень зависит от того, какое решение или действие вы хотите оспорить. Для первичного разбора достаточно прислать имеющиеся документы.
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
                Оспариваемые решения <br />и воинский учёт
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(193, 160, 102, 0.15)', border: '1px solid var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Решение или выписка протокола</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Выписка из протокола призывной комиссии, письменный отказ, повестка или уведомление.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(193, 160, 102, 0.15)', border: '1px solid var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Материалы воинского учёта</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Военный билет, приписное удостоверение, сведения из реестра воинского учёта.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Карточка 2 */}
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
                Подтверждающие документы <br />и переписка
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(193, 160, 102, 0.15)', border: '1px solid var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Документы на отсрочку / освобождение</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Справки об обучении, медицинские заключения, документы о семейном положении.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(193, 160, 102, 0.15)', border: '1px solid var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Подтверждение прошлых обращений</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Копии ранее поданных заявлений, жалоб, ответов и квитанций об отправке.</span>
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
            Если части документов нет, всё равно можно обращаться: адвокат определит, какие материалы необходимо получить, и направит официальные запросы.
          </div>
        </div>
      </section>

      {/* ═══ 3. КУРАТОР НАПРАВЛЕНИЯ (БЛОК СПЕЦИАЛИСТА) ═══ */}
      <SpecialistBlock 
        title="Куратор направления"
        name="Дмитрий Сергеевич Конопкин"
        position={<>Адвокат, председатель Коллегии адвокатов «Де-Юре»,<br />куратор направления «Военное право»</>}
        imageUrl="/images/konopkin.jpg"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Дмитрий Сергеевич Конопкин ведёт военное направление и подключается к спорам с военными комиссариатами и призывными комиссиями. Изучает решение и документы, определяет предмет обжалования и представляет интересы доверителя при внесудебном обжаловании и в суде.
          </span>,
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', background: 'var(--color-gold)', borderRadius: '50%' }}></div>
              Адвокат, реестровый номер 48/812 в реестре адвокатов Липецкой области
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', background: 'var(--color-gold)', borderRadius: '50%' }}></div>
              С 2016 по 2022 год работал в СК РФ; прошёл путь до старшего следователя по особо важным делам
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', background: 'var(--color-gold)', borderRadius: '50%' }}></div>
              Ведёт военные дела в Липецкой области и представляет интересы доверителей в других регионах России
            </li>
          </ul>,
          <a key="3" href="/specialisty/konopkin-dmitriy-sergeevich/" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
            Подробнее о Дмитрии Сергеевиче Конопкине →
          </a>
        ]}
        buttonText="Обсудить ситуацию с адвокатом"
        buttonHref="#form"
      />

      {/* ═══ 3.1. ПРАКТИКА ПО СПОРАМ С ВОЕНКОМАТАМИ ═══ */}
      <CasesBlock 
        title="Практика по спорам с военкоматами"
        showAllLink=""
        showDemoWarning={true}
        cases={practiceCases}
      />

      {/* ═══ 4. КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock 
        title="Как проходит работа"
        subtitle=""
        ctaTitle=""
        steps={steps}
      />

      {/* ═══ 4.1. СТОИМОСТЬ ЮРИДИЧЕСКОЙ ПОМОЩИ ═══ */}
      <PricingBlock 
        title="Стоимость юридической помощи"
        subtitle="Точная стоимость зависит от состояния документов, стадии дела и необходимости обжалования. После первичной консультации специалист определит объём работы и назовёт стоимость до заключения договора."
        tiers={[
          {
            title: <><span style={{ display: 'inline-block' }}>Консультация</span> <br /><span style={{ display: 'inline-block' }}>и анализ</span></>,
            subtitle: 'Первичный разбор',
            popular: false,
            price: 'от XXX ₽',
            features: [
              { name: 'Консультация и анализ документов', value: '✓' },
              { name: 'Оценка решений и выписок', value: '✓' },
              { name: 'План первоочередных действий', value: '✓' }
            ],
            buttonText: 'Уточнить стоимость',
            buttonHref: '#form'
          },
          {
            title: <><span style={{ display: 'inline-block' }}>Досудебная</span> <br /><span style={{ display: 'inline-block' }}>работа</span></>,
            subtitle: 'Запросы и жалобы',
            popular: true,
            badgeText: 'ВОСТРЕБОВАНО',
            price: 'от XXX ₽',
            features: [
              { name: 'Подготовка адвокатских запросов', value: '✓' },
              { name: 'Жалобы в призывную комиссию субъекта РФ', value: '✓' },
              { name: 'Истребование документов и ответов', value: '✓' }
            ],
            buttonText: 'Уточнить стоимость',
            buttonHref: '#form'
          },
          {
            title: <><span style={{ display: 'inline-block' }}>Судебная</span> <br /><span style={{ display: 'inline-block' }}>защита</span></>,
            subtitle: 'Судебное обжалование',
            popular: false,
            price: 'от XXX ₽',
            features: [
              { name: 'Подготовка иска или жалобы в суд', value: '✓' },
              { name: 'Сбор доказательной базы', value: '✓' },
              { name: 'Представительство интересов в суде', value: '✓' }
            ],
            buttonText: 'Уточнить стоимость',
            buttonHref: '#form'
          }
        ]}
        ctaTitle=""
      />

      {/* ═══ 5. ЧАСТЫЕ ВОПРОСЫ ═══ */}
      <FAQBlock 
        faqs={faqs} 
        title={<><span style={{ display: 'inline-block' }}>Частые вопросы</span> <br /><span style={{ display: 'inline-block' }}>об оспаривании решений военкомата</span></>}
        subtitle="Собрали ответы на ключевые вопросы об оспаривании решений и действий военкомата. Информация носит общий характер. Порядок действий зависит от конкретного документа."
        ctaText="Задать свой вопрос"
        ctaLink="#form"
      />

      {/* ═══ 6. СВЯЗАННЫЕ НАПРАВЛЕНИЯ ═══ */}
      <section className="section bg-cream" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Связанные направления
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Если спор связан с результатами медицинского освидетельствования или категорией годности, может потребоваться отдельное оспаривание заключения ВВК. Другие вопросы призыва, военной службы и защиты прав военнослужащих собраны в разделе «Военный юрист».
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
          `}} />
          
          <div className="grid grid-2" style={{ gap: '28px' }}>
            {/* Card 1: Оспаривание заключения ВВК */}
            <a href="/grazhdanam/voennyj-yurist/osparivanie-zaklyucheniya-vvk/" style={{ textDecoration: 'none', display: 'block' }}>
              <div 
                className="card related-service-card" 
                style={{ 
                  height: '100%', 
                  minHeight: '160px',
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
                  Оспаривание заключения ВВК
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Помощь при несогласии с результатами военно-врачебного освидетельствования, категорией годности или выводами о состоянии здоровья.
                </p>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '15px', fontWeight: 600, transition: 'transform 0.3s' }}>
                  Подробнее об услуге →
                </div>
              </div>
            </a>

            {/* Card 2: Военный юрист (переход в раздел) */}
            <a href="/grazhdanam/voennyj-yurist/" style={{ textDecoration: 'none', display: 'block' }}>
              <div 
                className="card related-service-card" 
                style={{ 
                  height: '100%', 
                  minHeight: '160px',
                  padding: '32px', 
                  background: 'var(--color-white)', 
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'all 0.3s',
                  position: 'relative'
                }}
              >
                <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-gold)', fontWeight: 700, marginBottom: '6px' }}>
                  РАЗДЕЛ УСЛУГ
                </div>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                  Военный юрист
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Все услуги по вопросам призыва, прохождения военной службы, выплат, ВВК и защиты прав военнослужащих.
                </p>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-gold)', fontSize: '15px', fontWeight: 600, transition: 'transform 0.3s' }}>
                  Перейти в раздел →
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ═══ 7. СВЯЗАТЬСЯ С НАМИ (ФИНАЛЬНАЯ ФОРМА) ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingTop: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>Связаться с нами</span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                Обсудите ситуацию с Дмитрием Сергеевичем Конопкиным
              </h2>
              
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px' }}>
                Кратко опишите, какое решение принял военкомат или какие его действия либо бездействие вы хотите оспорить, и оставьте контактные данные. Обращение будет передано Дмитрию Сергеевичу Конопкину. Он уточнит обстоятельства, проверит, какие документы у вас есть, и согласует с вами консультацию.
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
                  commentPlaceholder="Например: Военкомат отказал в отсрочке и выдал повестку..."
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
