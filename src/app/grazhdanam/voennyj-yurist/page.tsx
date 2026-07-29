// !!! FINAL VERSION - FROZEN BY USER REQUEST !!!
// !!! НЕ ИЗМЕНЯТЬ И НЕ ПЕРЕПИСЫВАТЬ ЭТУ СТРАНИЦУ — ФИНАЛЬНАЯ ВЕРСИЯ !!!
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
  title: 'Военный юрист в Липецке — помощь военнослужащим | ЮК «Де-Юре»',
  description: 'Юридическая помощь военнослужащим, призывникам и их близким в Липецке: ВВК, выплаты, споры с военкоматом, защита по уголовным делам. Работа по России.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/voennyj-yurist/'
  },
  openGraph: {
    title: 'Военный юрист в Липецке — помощь военнослужащим | ЮК «Де-Юре»',
    description: 'Юридическая помощь военнослужащим, призывникам и их близким в Липецке: ВВК, выплаты, споры с военкоматом, защита по уголовным делам. Работа по России.',
    url: 'https://dejure-help.ru/grazhdanam/voennyj-yurist/',
    siteName: 'ЮК «Де-Юре»',
    images: [
      {
        url: 'https://dejure-help.ru/images/og-military-lawyer.jpg',
        width: 1200,
        height: 630,
        alt: 'Военный юрист в Липецке'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  }
};

export default function VoennyjYuristPage() {
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

  const directions = [
    { title: 'Выплаты за ранение', desc: 'Помощь, если выплату не назначили, задерживают либо документы не подтверждают обстоятельства и тяжесть ранения.', link: '/-/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/', slug: 'vyplaty-ranenie' },
    { title: 'Выплаты семье погибшего', desc: 'Определение права на выплаты, сбор документов и обжалование отказа или неверного расчёта.', link: '/-/grazhdanam/voennyj-yurist/vyplaty-seme-pogibshego-voennosluzhashchego/', slug: 'vyplaty-semya' },
    { title: 'Оспаривание заключений ВВК', desc: 'Анализ медицинских документов и заключений комиссии, подготовка жалобы и сопровождение пересмотра.', link: '/-/grazhdanam/voennyj-yurist/osparivanie-zaklyucheniya-vvk/', slug: 'vvk' },
    { title: 'Споры с военкоматом', desc: 'Помощь при несогласии с решением призывной комиссии и нарушениях процедуры со стороны военкомата.', link: '/-/grazhdanam/voennyj-yurist/spory-s-voenkomatom/', slug: 'voenkomat' },
    { title: 'Признание военнослужащего безвестно отсутствующим или объявление умершим', desc: 'Помощь семье в выборе правовой процедуры, подготовке доказательств и обращении в суд.', link: '/-/grazhdanam/voennyj-yurist/priznanie-voennosluzhashchego-umershim/', slug: 'bezvestno' },
  ];

  const situations = [
    { who: 'Контрактникам, мобилизованным и добровольцам', situation: 'Если проводится проверка или возбуждено уголовное дело', help: 'Оценим обстоятельства и процессуальный статус, изучим документы и определим порядок защиты до объяснений, допроса или задержания.' },
    { who: 'Военнослужащим после ранения', situation: 'Если выплату не назначили, задерживают или рассчитали неверно', help: 'Проверим основания и документы, подготовим обращения и поможем обжаловать отказ или неверный расчёт.' },
    { who: 'Военнослужащим с заболеваниями и последствиями ранений', situation: 'Если заключение ВВК не соответствует состоянию здоровья', help: 'Изучим медицинские документы, оценим основания для обжалования и поможем добиться повторного рассмотрения.' },
    { who: 'Призывникам и допризывникам', situation: 'Если вы не согласны с решением призывной комиссии', help: 'Проверим процедуру и основания для отсрочки или освобождения, подготовим жалобу либо обращение в суд.' },
    { who: 'Родственникам погибших военнослужащих', situation: 'Если возникли сложности с оформлением положенных выплат', help: 'Определим круг получателей и комплект документов, поможем обжаловать отказ, задержку или неправильный расчёт.' },
    { who: 'Родственникам военнослужащих, местонахождение которых неизвестно', situation: 'Если необходимо установить статус и оформить юридические последствия', help: 'Поможем собрать документы, выбрать правовую процедуру и обратиться в компетентные органы или суд.' },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://dejure-help.ru/" },
          { "@type": "ListItem", "position": 2, "name": "Гражданам", "item": "https://dejure-help.ru/grazhdanam/" },
          { "@type": "ListItem", "position": 3, "name": "Военный юрист", "item": "https://dejure-help.ru/grazhdanam/voennyj-yurist/" }
        ]
      },
      {
        "@type": "LegalService",
        "name": "ЮК «Де-Юре»",
        "description": "Юридическая помощь военнослужащим в Липецке",
        "url": "https://dejure-help.ru/grazhdanam/voennyj-yurist/"
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": { "@type": "Answer", "text": faq.a }
        }))
      },
      {
        "@type": "Person",
        "name": "Дмитрий Сергеевич Конопкин",
        "jobTitle": "Адвокат",
        "url": "https://dejure-help.ru/specialisty/konopkin-dmitriy-sergeevich/"
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
      
      {/* ═══ 1. Первый экран ═══ */}
      <MilitaryHero 
        breadcrumbs={
          <>
            <a href="/-/" style={{ color: 'var(--color-primary)' }}>Главная</a> <span style={{ margin: '0 8px' }}>/</span> 
            <a href="/-/grazhdanam/" style={{ color: 'var(--color-primary)' }}>Гражданам</a> <span style={{ margin: '0 8px' }}>/</span> 
            <span style={{ color: 'var(--color-text-main)' }}>Военный юрист</span>
          </>
        }
        superTitle="Помощь военнослужащим в Липецке и по России"
        title={<>Военный юрист <br />в Липецке</>}
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '560px', textWrap: 'balance' }}>
            Защита по уголовным делам, оспаривание<br />
            заключений ВВК и решений призывных комиссий,<br />
            помощь в получении положенных выплат<br />
            для военнослужащих и членов их семей.
          </span>
        }
        primaryCtaText="Обсудить ситуацию"
        primaryCtaLink="#form"
        primaryCtaSubtext="Перезвоним в течение 15 минут в рабочее время"
        imageUrl="/-/images/konopkin.jpg"
        imageName="Дмитрий Сергеевич Конопкин"
        imageSubtitle="Адвокат, партнёр ЮК «Де-Юре»"
        trustItems={[]}
      />

      {/* ═══ 2. Когда юридическая помощь нужна срочно ═══ */}
      <section style={{ background: 'var(--color-deep-blue)', padding: '64px 0 56px', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-white)', marginBottom: '12px', marginTop: 0 }}>
            Когда юридическая<br />помощь нужна срочно
          </h2>
          <div style={{ width: '60px', height: '2px', background: 'var(--color-gold)', marginBottom: '20px' }}></div>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '16px', marginBottom: '40px', maxWidth: '620px', lineHeight: 1.6 }}>
            Типичные ситуации, в которых важно<br />подключить специалиста как можно раньше.
          </p>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '40px' }}>
            {/* Карточка 1 */}
            <div 
              className="urgent-card"
              style={{ 
                background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)', 
                padding: '32px 28px', 
                borderTop: '4px solid var(--color-gold)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px', minHeight: '48px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', marginTop: 0, lineHeight: 1.3 }}>
                  Военнослужащего задержали
                </div>
              </div>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                Важно установить его местонахождение и процессуальный статус и подключить адвоката до объяснений или допроса.
              </p>
            </div>

            {/* Карточка 2 */}
            <div 
              className="urgent-card"
              style={{ 
                background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)', 
                padding: '32px 28px', 
                borderTop: '4px solid var(--color-gold)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px', minHeight: '48px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', marginTop: 0, lineHeight: 1.3 }}>
                  Возбуждено уголовное дело или вызывают на допрос
                </div>
              </div>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                До явки нужно понять статус военнослужащего, изучить документы и определить позицию.
              </p>
            </div>

            {/* Карточка 3 */}
            <div 
              className="urgent-card"
              style={{ 
                background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)', 
                padding: '32px 28px', 
                borderTop: '4px solid var(--color-gold)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px', minHeight: '48px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', marginTop: 0, lineHeight: 1.3 }}>
                  Военнослужащий перестал выходить на связь
                </div>
              </div>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                Нужно собрать сведения о части, последнем месте нахождения и официальном статусе, затем определить порядок обращений.
              </p>
            </div>
          </div>

          <style dangerouslySetInnerHTML={{__html: `
            .urgent-card:hover {
              transform: translateY(-6px);
              box-shadow: 0 16px 36px rgba(0,0,0,0.22) !important;
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
              transition: all 0.3s ease !important;
              border: 1px solid var(--color-gold) !important;
            }
            .btn-urgent-call:hover {
              background-color: #FFFFFF !important;
              color: #0B1C2A !important;
              border-color: #FFFFFF !important;
            }
          `}} />

          {/* Зона связи */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '28px', display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <a href="tel:+79103503111" style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.02em' }}>
              +7 (910) 350-31-11
            </a>
            <a href="tel:+79103503111" className="btn-urgent-call" style={{ padding: '14px 28px', fontSize: '15px' }} data-analytics="military_urgent_call_click">
              Позвонить адвокату
            </a>
            <a href="#form" className="btn btn-urgent-outline" style={{ padding: '14px 28px', fontSize: '15px' }}>
              Описать ситуацию
            </a>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
              Перезвоним в течение 15 минут в рабочее время
            </span>
          </div>
        </div>
      </section>

      {/* ═══ 3. Кому мы помогаем ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Кому мы помогаем
            </h2>
            <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Комплексная защита прав военнослужащих, призывников и их семей. Поможем разобрать вашу ситуацию и выстроить правовую позицию.
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
                {/* Vector watermark graphic from SOCH page */}
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
                  {sit.who}
                </div>

                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--color-deep-blue)', lineHeight: 1.4, margin: '0 0 14px 0' }}>
                  {sit.situation}
                </h3>

                <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0, position: 'relative', zIndex: 1 }}>
                  {sit.help}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. Направления помощи ═══ */}
      <section id="directions" className="section" style={{ padding: '64px 0', background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Направления помощи
            </h2>
            <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Специализированная юридическая защита для военнослужащих, призывников и их семей. 
              Полное сопровождение от консультации до представительства в суде.
            </p>
          </div>
          
          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '40px' }}>
            {directions.map((dir, i) => (
              <a key={i} href={dir.link} data-analytics="military_service_click" data-slug={dir.slug} style={{ textDecoration: 'none', display: 'block' }}>
                <div 
                  className="card service-card" 
                  style={{ 
                    height: '100%', 
                    minHeight: '160px',
                    padding: '30px', 
                    background: 'var(--color-white)', 
                    border: '1px solid var(--color-border)',
                    borderRadius: '0',
                    display: 'flex', 
                    flexDirection: 'column',
                    transition: 'all 0.3s',
                    position: 'relative',
                    borderTop: '3px solid var(--color-primary)'
                  }}
                >
                  <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3 }}>
                    {dir.title}
                  </h3>
                  <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                    {dir.desc}
                  </p>
                  <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, transition: 'transform 0.3s' }}>
                    Подробнее 
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.3s' }}>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </a>
            ))}

            {/* Не нашли свою ситуацию? (3-я карточка во 2-й строке) */}
            <div style={{ gridColumn: 'span 1' }}>
              <div 
                className="card service-card" 
                style={{ 
                  height: '100%', 
                  minHeight: '160px',
                  padding: '30px', 
                  background: 'var(--color-deep-blue)', 
                  border: '1px solid transparent',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '20px',
                  transition: 'all 0.3s',
                  position: 'relative',
                  borderTop: '3px solid var(--color-gold)'
                }}
              >
                <style>
                  {`
                    .white-btn-custom {
                      background-color: var(--color-white);
                      color: var(--color-deep-blue);
                      border: 1px solid var(--color-white);
                    }
                    .white-btn-custom:hover {
                      background-color: var(--color-primary) !important;
                      color: var(--color-white) !important;
                      border-color: var(--color-primary) !important;
                    }
                  `}
                </style>
                <div>
                  <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-white)', lineHeight: 1.3 }}>
                    Не нашли свою ситуацию?
                  </h3>
                  <p style={{ margin: '0', fontSize: '14px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>
                    Кратко опишите обстоятельства — мы изучим вопрос и подскажем, какой специалист сможет помочь.
                  </p>
                </div>
                <div>
                  <a href="#form" className="btn white-btn-custom" style={{ display: 'inline-block', width: '100%', textAlign: 'center', fontSize: '14px', padding: '12px 20px' }}>
                    Описать ситуацию
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 5. Куратор направления ═══ */}
      <SpecialistBlock 
        title="Куратор направления"
        name="Дмитрий Сергеевич Конопкин"
        position="Адвокат, партнёр ЮК «Де-Юре», куратор направления «Военное право»"
        imageUrl="/-/images/konopkin.jpg"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Дмитрий Сергеевич Конопкин курирует работу по военному праву: определяет правовую позицию, контролирует ведение дел и подключается к сложным вопросам, связанным с выплатами, заключениями ВВК, спорами с военкоматами и уголовной защитой военнослужащих. Опыт работы в Следственном комитете помогает оценивать правовые риски и выстраивать защиту по делам, связанным с уголовным преследованием.
          </span>,
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', background: 'var(--color-gold)', borderRadius: '50%' }}></div>
              Опыт работы в Следственном комитете с 2016 по 2022 год
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', background: 'var(--color-gold)', borderRadius: '50%' }}></div>
              С сентября 2022 года — адвокат
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', background: 'var(--color-gold)', borderRadius: '50%' }}></div>
              Реестровый номер 48/812
            </li>
          </ul>,
          <a key="3" href="/-/specialisty/konopkin-dmitriy-sergeevich/" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
            Подробнее о Дмитрии Сергеевиче Конопкине →
          </a>
        ]}
        buttonText="Задать вопрос адвокату"
        buttonHref="#form"
      />

      {/* ═══ 6. Примеры из практики ═══ */}
      <CasesBlock 
        title="Примеры из практики"
        showDemoWarning={true}
        cases={[
          {
            category: "ВОЕННО-ВРАЧЕБНАЯ ЭКСПЕРТИЗА",
            title: "Добились повторного освидетельствования после ранения",
            problem: "После лечения военнослужащего признали годным к дальнейшей службе, не учтя часть диагнозов, ограничения движений и последствия ранения. Направление на повторную ВВК не выдавали.",
            action: "Изучили госпитальные документы и результаты обследований, определили, каких заключений не хватает, подготовили рапорт и обращения в вышестоящую ВВК и военную прокуратуру.",
            result: "Военнослужащего направили на повторное освидетельствование. Комиссия рассмотрела ранее неучтённые диагнозы и медицинские документы.",
            isDemo: true
          },
          {
            category: "ВЫПЛАТЫ ВОЕННОСЛУЖАЩИМ",
            title: "Получили выплату после задержки оформления документов",
            problem: "После лечения военнослужащему не назначили выплату за ранение: необходимые справки не были своевременно оформлены и переданы между госпиталем и воинской частью.",
            action: "Проверили комплект документов, направили запросы в госпиталь и часть, добились оформления недостающих справок и обжаловали затягивание процедуры.",
            result: "Документы передали в уполномоченный орган, после чего военнослужащему назначили и перечислили выплату.",
            isDemo: true
          },
          {
            category: "ПРИЗЫВ И РЕШЕНИЯ ПРИЗЫВНОЙ КОМИССИИ",
            title: "Обжаловали решение о призыве без учёта медицинских документов",
            problem: "Призывная комиссия признала гражданина годным к военной службе, хотя представленные медицинские документы подтверждали заболевание и необходимость дополнительного обследования.",
            action: "Проверили материалы медицинского освидетельствования, собрали недостающие заключения, подготовили жалобу в вышестоящую призывную комиссию и заявление о проведении дополнительного обследования.",
            result: "Решение о призыве отменили. Гражданина направили на дополнительное обследование и новое медицинское освидетельствование.",
            isDemo: true
          }
        ]}
      />

      {/* ═══ 7. Как проходит работа ═══ */}
      <ProcessBlock 
        title="Как проходит работа"
        subtitle=""
        ctaTitle=""
        steps={[
          { num: '01', title: 'Первичная консультация', desc: 'Обсуждаем ситуацию в офисе, по телефону или видеосвязи, уточняем обстоятельства и срочность.' },
          { num: '02', title: 'Изучение документов', desc: 'Анализируем имеющиеся материалы. Документы можно передать лично или направить в электронном виде.' },
          { num: '03', title: 'План действий', desc: 'Оцениваем правовые основания, риски и предлагаем порядок защиты, обжалования или получения положенных выплат.' },
          { num: '04', title: 'Юридическая работа', desc: 'Готовим документы, обращения и жалобы; при необходимости участвуем в процессуальных действиях и представляем интересы клиента.' },
          { num: '05', title: 'Информирование', desc: 'Сообщаем о ходе работы, объясняем результаты и заранее согласовываем дальнейшие действия.' },
          { isBanner: true, title: 'Дистанционный формат', desc: 'Значительную часть работы можно организовать дистанционно. Если требуется личное участие адвоката или юриста, заранее согласуем место и порядок работы.' }
        ]}
      />

      {/* ═══ 8. Стоимость юридической помощи ═══ */}
      <PricingBlock 
        title="Стоимость юридической помощи"
        subtitle="Точная стоимость зависит от состояния документов, стадии дела и необходимости обжалования. После первичной консультации специалист определит объём работы и назовёт стоимость до заключения договора."
        tiers={[
          {
            title: 'Консультация и анализ',
            subtitle: 'Первичный разбор',
            popular: false,
            price: 'ХХХ ₽',
            features: [
              { name: 'Консультация и анализ документов', value: '✓' },
              { name: 'Подготовка заявления, рапорта или жалобы', value: '✓' },
              { name: 'План первоочередных действий', value: '✓' }
            ],
            buttonText: 'Уточнить стоимость',
            buttonHref: '#form'
          },
          {
            title: 'Досудебная работа',
            subtitle: 'Запросы и жалобы',
            popular: true,
            price: 'ХХХ ₽',
            features: [
              { name: 'Подготовка адвокатских запросов', value: '✓' },
              { name: 'Обращения в ведомства и части', value: '✓' },
              { name: 'Жалобы при задержке или отказе', value: '✓' }
            ],
            buttonText: 'Уточнить стоимость',
            buttonHref: '#form'
          },
          {
            title: 'Судебная защита',
            subtitle: 'Судебное обжалование',
            popular: false,
            price: 'ХХХ ₽',
            features: [
              { name: 'Подготовка иска или жалобы в суд.', value: '✓' },
              { name: 'Сбор доказательной базы', value: '✓' },
              { name: 'Представительство в военном суде', value: '✓' }
            ],
            buttonText: 'Уточнить стоимость',
            buttonHref: '#form'
          }
        ]}
        ctaTitle=""
      />

      {/* ═══ 9. Ответы на частые вопросы ═══ */}
      <FAQBlock 
        faqs={faqs} 
        title="Ответы на частые вопросы"
        subtitle="Собрали ответы на частые вопросы о защите военнослужащих, прохождении ВВК, выплатах, призыве и дистанционной работе. Если вы не нашли ответа, опишите свою ситуацию специалисту."
        ctaText="Задать свой вопрос"
        ctaLink="#form"
      />

      {/* ═══ 10. Финальная форма ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>Связаться с нами</span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                Получите первичную оценку ситуации
              </h2>
              
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Опишите ситуацию и оставьте контактные данные. Обращение передадим Дмитрию Сергеевичу Конопкину. Он изучит обстоятельства и предложит возможный порядок действий.
              </p>
              
              <div style={{ marginTop: '32px' }}>
                <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  Перезвоним в течение 15 минут в рабочее время
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
              <div style={{ background: 'var(--gradient-cream)', padding: '40px', borderRadius: '0', boxShadow: '0 8px 24px rgba(0,0,0,0.15)', width: '100%', border: '1px solid rgba(0,0,0,0.06)' }}>
                <ContactsForm title="Написать нам" subtitle="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
