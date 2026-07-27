import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';
import UrgentContactStrip from '@/components/UrgentContactStrip';
import SpecialistBlock from '@/components/SpecialistBlock';
import ProcessBlock from '@/components/ProcessBlock';
import CasesBlock from '@/components/CasesBlock';
import PricingBlock from '@/components/PricingBlock';
import Head from 'next/head';

export const metadata = {
  title: 'Военный юрист в Липецке — помощь военнослужащим | ЮК «Де-юре»',
  description: 'Юридическая помощь военнослужащим, призывникам и их близким в Липецке: уголовные дела, ВВК, выплаты, споры с военкоматом. Работа по России.',
  alternates: {
    canonical: 'https://dejure.ru/grazhdanam/voennyj-yurist/'
  },
  openGraph: {
    title: 'Военный юрист в Липецке — помощь военнослужащим | ЮК «Де-юре»',
    description: 'Юридическая помощь военнослужащим, призывникам и их близким в Липецке: уголовные дела, ВВК, выплаты, споры с военкоматом. Работа по России.',
    url: 'https://dejure.ru/grazhdanam/voennyj-yurist/',
    siteName: 'ЮК «Де-юре»',
    images: [
      {
        url: 'https://dejure.ru/images/og-military-lawyer.jpg', // Placeholder, needs actual OG image
        width: 1200,
        height: 630,
        alt: 'Военный юрист ЮК Де-юре',
      }
    ],
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function MilitaryLawyerHub() {
  const helps = [
    { text: 'Военнослужащие по контракту' },
    { text: 'Мобилизованные' },
    { text: 'Добровольцы' },
    { text: 'Призывники и допризывники' },
    { text: 'Ветераны боевых действий' },
    { text: 'Родственники военнослужащих' }
  ];

  const directions = [
    {
      title: 'Самовольное оставление части (СОЧ)',
      desc: 'Помощь при проверке, задержании, подготовке явки и защите по делу, связанному с оставлением части.',
      link: '/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/',
      slug: 'soch'
    },
    {
      title: 'Дезертирство',
      desc: 'Правовая оценка обстоятельств и умысла, помощь при явке или задержании, защита на стадии расследования и в суде.',
      link: '/grazhdanam/voennyj-yurist/dezertirstvo/',
      slug: 'dezertirstvo'
    },
    {
      title: 'Выплаты за ранение',
      desc: 'Помощь, если выплату не назначили, задерживают либо документы не подтверждают обстоятельства и тяжесть ранения.',
      link: '/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/',
      slug: 'vyplaty-ranenie'
    },
    {
      title: 'Выплаты семье погибшего',
      desc: 'Определение права на выплаты, сбор документов и обжалование отказа или неверного расчета.',
      link: '/grazhdanam/voennyj-yurist/vyplaty-seme-pogibshego-voennosluzhashchego/',
      slug: 'vyplaty-semya'
    },
    {
      title: 'Оспаривание заключений ВВК',
      desc: 'Анализ медицинских документов и заключений комиссии, подготовка жалобы и сопровождение пересмотра.',
      link: '/grazhdanam/voennyj-yurist/osparivanie-zaklyucheniya-vvk/',
      slug: 'vvk'
    },
    {
      title: 'Споры с военкоматом',
      desc: 'Помощь при несогласии с решением призывной комиссии и нарушениях процедуры со стороны военкомата.',
      link: '/grazhdanam/voennyj-yurist/spory-s-voenkomatom/',
      slug: 'voenkomat'
    },
    {
      title: 'Признание военнослужащего безвестно отсутствующим или объявление умершим',
      desc: 'Помощь семье в выборе правовой процедуры, подготовке доказательств и обращении в суд.',
      link: '/grazhdanam/voennyj-yurist/priznanie-voennosluzhashchego-umershim/',
      slug: 'bezvestno'
    }
  ];

  const faqs = [
    { q: 'С какими вопросами помогает военный юрист?', a: 'С выплатами и документами после ранения или гибели военнослужащего, заключениями ВВК, решениями военкомата, установлением статуса пропавшего военнослужащего и другими спорами, связанными с военной службой. Если ситуация связана с задержанием, проверкой или уголовным делом, к работе подключается адвокат.' },
    { q: 'В каких ситуациях нужно обращаться именно к адвокату?', a: 'Адвокат требуется, когда военнослужащего подозревают или обвиняют в преступлении, задержали, вызывают на допрос либо проводят иные процессуальные действия в рамках уголовного дела. По вопросам выплат, ВВК, увольнения и административным спорам помощь может оказывать юрист, если конкретное действие не требует статуса адвоката.' },
    { q: 'Можно ли обратиться родственнику военнослужащего?', a: 'Да. Родственник может сообщить обстоятельства, передать документы и получить разъяснение о возможных действиях. Возможность получить сведения, представлять интересы военнослужащего или заключить соглашение от его имени зависит от ситуации, полномочий и требований закона.' },
    { q: 'Можно ли вести дело дистанционно из другого региона?', a: 'Многие задачи можно начать дистанционно: провести консультацию, изучить документы, подготовить обращения и определить стратегию. Необходимость личного участия зависит от вида дела, стадии производства и места совершения процессуальных действий.' },
    { q: 'Что сообщить, если военнослужащего задержали?', a: 'Сообщите имя и дату рождения, воинскую часть, когда и где человека видели в последний раз, предполагаемую причину и фактическое место задержания, а также данные должностных лиц и документы, если они есть. Если часть сведений неизвестна, не откладывайте обращение.' },
    { q: 'Какие документы нужны для первичного разбора?', a: 'Подойдут имеющиеся документы: контракт, военный билет, заключение ВВК, медицинские выписки, справки о ранении, решения военкомата или призывной комиссии, постановления, повестки, ответы ведомств и переписка. Точный перечень зависит от ситуации; ждать полного комплекта перед обращением не нужно.' },
    { q: 'Можно ли подготовить рапорт или жалобы дистанционно?', a: 'Да, если специалист может получить факты и документы, необходимые для подготовки. До отправки нужно проверить адресата, способ подачи, приложения и подтверждение вручения. В отдельных ситуациях одной жалобы недостаточно и требуется дальнейшее сопровождение.' },
    { q: 'От чего зависит стоимость помощи?', a: 'От характера и сложности ситуации, стадии дела, объёма документов, количества необходимых действий, региона и необходимости личного участия адвоката или юриста. Состав работ и стоимость согласовываются до заключения договора.' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Главная",
            "item": "https://dejure.ru/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Гражданам",
            "item": "https://dejure.ru/grazhdanam/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Военный юрист",
            "item": "https://dejure.ru/grazhdanam/voennyj-yurist/"
          }
        ]
      },
      {
        "@type": "LegalService",
        "name": "ЮК «Де-юре»",
        "description": "Юридическая помощь военнослужащим в Липецке",
        "url": "https://dejure.ru/grazhdanam/voennyj-yurist/"
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      },
      {
        "@type": "Person",
        "name": "Дмитрий Сергеевич Конопкин",
        "jobTitle": "Адвокат, Руководитель практики военного права",
        "url": "https://dejure.ru/grazhdanam/voennyj-yurist/"
      }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      
      {/* 1. Первый экран */}
      <MilitaryHero 
        breadcrumbs={
          <>
            <a href="/" style={{ color: 'var(--color-primary)' }}>Главная</a> <span style={{ margin: '0 8px' }}>/</span> 
            <a href="/grazhdanam/" style={{ color: 'var(--color-primary)' }}>Гражданам</a> <span style={{ margin: '0 8px' }}>/</span> 
            <span style={{ color: 'var(--color-text-main)' }}>Военный юрист</span>
          </>
        }
        superTitle="Помощь военнослужащим в Липецке и по России"
        title="Военный юрист в Липецке"
        subtitle="Защита по уголовным делам (СОЧ, дезертирство, неисполнение приказа), оспаривание незаконных решений ВВК и призывных комиссий, помощь в получении положенных выплат для военнослужащих и членов их семей."
        primaryCtaText="Обсудить ситуацию"
        primaryCtaSubtext="Перезвоним в течение 15 минут в рабочее время"
        imageUrl="/-/images/konopkin.jpg"
        imageName="Дмитрий Сергеевич Конопкин"
        imageSubtitle="Адвокат, ведущий юрист военного направления"
        trustItems={[]} // Removed from hero per TZ
      />

      {/* 2. Компактная полоса */}
      <UrgentContactStrip />

      {/* 3. Кому помогаем */}
      <section className="section bg-white" id="audience">
        <div className="container">
          <h2 className="section-title text-center" style={{ marginBottom: '40px' }}>Кому мы помогаем</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '24px'
          }}>
            {helps.map((aud, i) => (
              <div key={i} style={{
                background: 'var(--color-cream)',
                padding: '32px',
                textAlign: 'left',
                fontWeight: 600,
                color: 'var(--color-deep-blue)',
                borderBottom: '4px solid var(--color-gold)',
                fontSize: '18px'
              }}>
                {aud.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Направления помощи */}
      <section id="directions" className="section" style={{ background: 'var(--color-cream)' }}>
        <div className="container">
          <h2 className="section-title text-center" style={{ marginBottom: '40px', textAlign: 'center' }}>Направления помощи</h2>
          
          <div className="grid grid-3" style={{ gap: '30px', marginBottom: '24px' }}>
            {/* Все 7 карточек услуг */}
            {directions.map((dir, i) => (
              <a key={i} href={dir.link} data-analytics="military_service_click" data-slug={dir.slug} style={{
                textDecoration: 'none',
                background: 'var(--color-white)',
                padding: '40px',
                borderRadius: '0',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid var(--color-border)',
                transition: 'all 0.4s ease',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }} className="service-card group">
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '4px',
                  height: '0%',
                  background: 'var(--color-gold)',
                  transition: 'height 0.4s ease'
                }} className="service-accent-line"></div>
                <h3 style={{ fontSize: '24px', fontWeight: 500, color: 'var(--color-deep-blue)', marginBottom: '16px', fontFamily: 'var(--font-serif)', transition: 'color 0.4s ease' }} className="service-title">
                  {dir.title}
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: 1.6, marginBottom: '32px', flexGrow: 1 }}>
                  {dir.desc}
                </p>
                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', color: 'var(--color-primary)', fontWeight: 600, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  <span style={{ borderBottom: '1px solid transparent', transition: 'border-color 0.3s' }} className="service-link-text">Подробнее</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginLeft: '8px', transform: 'translateX(0)', transition: 'transform 0.3s' }} className="service-arrow">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </a>
            ))}

            {/* Блок «Не нашли свою ситуацию?» */}
            <div className="span-2-desktop service-card" style={{
              background: 'var(--color-deep-blue)',
              padding: '40px',
              borderRadius: '0',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%'
            }}>
              <div>
                <h3 style={{ fontSize: '24px', fontWeight: 500, color: 'var(--color-white)', marginBottom: '16px', fontFamily: 'var(--font-serif)' }}>
                  Не нашли свою ситуацию?
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '16px', lineHeight: 1.6, marginBottom: '24px' }}>
                  Необязательно самостоятельно определять, какая именно услуга вам нужна. Кратко опишите обстоятельства — мы изучим вопрос и подскажем, какой специалист сможет помочь.
                </p>
              </div>
              <div>
                <a href="#form" className="btn btn-light" style={{ display: 'inline-block' }}>Описать ситуацию</a>
              </div>
            </div>
          </div>
          <style dangerouslySetInnerHTML={{__html: `
            .service-card {
              transition: all 0.4s ease;
            }
            .service-card:hover {
              box-shadow: 0 20px 40px rgba(23, 50, 77, 0.08);
              border-color: transparent;
              transform: translateY(-4px);
            }
            .service-card:hover .service-accent-line {
              height: 100%;
            }
            .service-card:hover .service-title {
              color: var(--color-primary);
            }
            .service-card:hover .service-link-text {
              border-color: var(--color-primary);
            }
            .service-card:hover .service-arrow {
              transform: translateX(4px);
            }
          `}} />
        </div>
      </section>

      {/* 5. Ведущий юрист */}
      <SpecialistBlock 
        title="Руководитель практики военного права"
        name="Дмитрий Сергеевич Конопкин"
        position="Адвокат, ведущий юрист военного направления"
        imageUrl="/-/images/konopkin.jpg"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>Подключается к защите на стадии проверки, предварительного расследования и судебного разбирательства, участвует в процессуальных действиях и сопровождает доверителя при взаимодействии со следственными органами.</span>,
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', background: 'var(--color-gold)', borderRadius: '50%' }}></div>
              Опыт работы в Следственном комитете
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', background: 'var(--color-gold)', borderRadius: '50%' }}></div>
              Реестровый номер 48/812
            </li>
          </ul>
        ]}
        buttonText="Задать вопрос адвокату"
      />

      {/* Как проходит работа */}
      <ProcessBlock 
        title="Как проходит работа"
        subtitle=""
        ctaTitle=""
        steps={[
          { num: '01', title: 'Первичный разбор', desc: 'Уточняем обстоятельства, срочность, процессуальную стадию и имеющиеся документы.' },
          { num: '02', title: 'Определяем специалиста', desc: 'Понимаем, нужен ли адвокат либо задачу вправе выполнить юрист.' },
          { num: '03', title: 'Согласовываем объём', desc: 'Фиксируем перечень работ, формат взаимодействия, стоимость и условия в договоре.' },
          { num: '04', title: 'Приступаем к работе', desc: 'Готовим документы, участвуем в необходимых действиях и сообщаем клиенту о ходе дела.' }
        ]}
      />

      {/* 6. Дела из практики */}
      <CasesBlock 
        title="Примеры из практики"
        showAllLink="#"
        showDemoWarning={true}
        cases={[
          {
            category: "Военное право",
            title: "[Кейс 1: Пример заголовка дела]",
            problem: "Здесь будет размещено реальное дело из практики по защите прав военнослужащего.",
            action: "Текст на этапе макета является заглушкой и будет заменен после согласования.",
            result: "[Ключевой результат]",
            isDemo: true
          },
          {
            category: "Военное право",
            title: "[Кейс 2: Пример заголовка дела]",
            problem: "Здесь будет размещено реальное дело из практики по защите прав военнослужащего.",
            action: "Текст на этапе макета является заглушкой и будет заменен после согласования.",
            result: "[Ключевой результат]",
            isDemo: true
          }
        ]}
      />

      {/* 7. Срочный блок */}
      <section className="section" style={{ background: 'var(--color-cream)' }}>
        <div className="container">
          <h2 className="section-title text-center" style={{ marginBottom: '24px', textAlign: 'center' }}>
            Если помощь нужна прямо сейчас
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)', fontSize: '16px', maxWidth: '700px', margin: '0 auto 40px auto', lineHeight: 1.6 }}>
            Ниже — типичные ситуации, в которых откладывать обращение за юридической помощью опасно. Чем раньше подключится профильный специалист, тем больше возможностей для защиты ваших прав.
          </p>
          <div className="grid grid-3" style={{ gap: '24px' }}>
            <div style={{ padding: '24px', borderLeft: '4px solid #D9534F', background: 'var(--color-white)', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D9534F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                <h4 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', margin: 0 }}>Военнослужащего задержали</h4>
              </div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                Уточните фактическое место нахождения, время и предполагаемую причину задержания. Не передавайте непроверенные сведения от имени задержанного. Свяжитесь с адвокатом.
              </p>
            </div>
            <div style={{ padding: '24px', borderLeft: '4px solid #D9534F', background: 'var(--color-white)', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D9534F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                <h4 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', margin: 0 }}>Возбуждено дело или вызывают на допрос</h4>
              </div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                До объяснений и подписания документов согласуйте позицию с адвокатом. Сохраните повестку, постановление и иные полученные документы.
              </p>
            </div>
            <div style={{ padding: '24px', borderLeft: '4px solid #D9534F', background: 'var(--color-white)', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D9534F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                <h4 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', margin: 0 }}>Военнослужащий не выходит на связь</h4>
              </div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                Зафиксируйте даты и обстоятельства последнего контакта, воинскую часть и известные обращения. Соберите официальные ответы и документы, не полагаясь только на устные сообщения.
              </p>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: '40px' }}>
            <a href="tel:+79103503111" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '16px' }} data-analytics="military_urgent_call_click">
              Позвонить адвокату
            </a>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginTop: '16px' }}>
              +7 (910) 350-31-11 • Перезвоним в течение 15 минут в рабочее время
            </p>
          </div>
        </div>
      </section>

      {/* 8. Другие вопросы и дистанционная помощь */}
      <section className="section bg-cream">
        <div className="container remote-help-grid">
          {/* Row 1 / Mobile Order 1 & 3 */}
          <div className="remote-help-item-h1" style={{ display: 'flex', alignItems: 'flex-start' }}>
            <h2 className="section-title" style={{ fontSize: 'clamp(24px, 3vw, 32px)', margin: 0 }}>
              Если вашей ситуации нет в списке
            </h2>
          </div>
          <div className="remote-help-item-h2" style={{ display: 'flex', alignItems: 'flex-start' }}>
            <h2 className="section-title" style={{ fontSize: 'clamp(24px, 3vw, 32px)', margin: 0 }}>
              Что можно сделать дистанционно
            </h2>
          </div>
          
          {/* Row 2 / Mobile Order 2 & 4 */}
          <div className="remote-help-item-p1" style={{ display: 'flex', flexDirection: 'column' }}>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '32px' }}>
              Необязательно самостоятельно определять вид услуги. Опишите обстоятельства — мы разберём ситуацию, уточним необходимые документы и определим, какой специалист должен подключиться.
            </p>
            <div style={{ marginTop: 'auto' }}>
              <a href="#form" className="btn btn-primary">Описать ситуацию</a>
            </div>
          </div>
          <div className="remote-help-item-p2" style={{ display: 'flex', flexDirection: 'column' }}>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: 1.6, margin: 0 }}>
              Провести первичную консультацию, изучить документы, подготовить обращения и жалобы, определить порядок дальнейших действий. Возможность полностью дистанционной работы зависит от характера дела и необходимости личного участия адвоката или юриста.
            </p>
          </div>
        </div>
      </section>


      {/* 10. Стоимость */}
      {/* 10. PRICES */}
      <PricingBlock 
        title="Стоимость юридической помощи"
        subtitle="Стоимость зависит от характера ситуации, стадии дела, объёма документов, сложности и необходимости личного участия адвоката. После первичного разбора мы определим перечень работ и согласуем стоимость до заключения договора."
        tiers={[
          {
            title: 'Базовые услуги',
            subtitle: 'Первичный анализ и документы',
            popular: false,
            features: [
              { name: 'Консультация и анализ документов', value: 'от [УТОЧНИТЬ] ₽' },
              { name: 'Подготовка заявления, рапорта или жалобы', value: 'от [УТОЧНИТЬ] ₽' }
            ]
          },
          {
            title: 'Ведение дела',
            subtitle: 'Комплексная защита',
            popular: true,
            features: [
              { name: 'Сопровождение спора', value: 'от [УТОЧНИТЬ] ₽' },
              { name: 'Защита по уголовному делу', value: 'от [УТОЧНИТЬ] ₽' }
            ]
          }
        ]}
      />

      {/* 11. FAQ */}
      <FAQBlock 
        faqs={faqs} 
        title="Частые вопросы"
        subtitle=""
      />

      {/* 12. Финальная форма */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0 }}>
                Получите первичную оценку ситуации
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко опишите, что произошло. Мы определим срочность, уточним необходимые документы и подключим Дмитрия Сергеевича Конопкина либо другого специалиста с нужными полномочиями.
              </p>
              
              <div style={{ marginTop: 'auto', marginBottom: '64px' }}>
                <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  Перезвоним в течение 15 минут в рабочее время
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <ContactsForm title="Отправить обращение" subtitle="" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
