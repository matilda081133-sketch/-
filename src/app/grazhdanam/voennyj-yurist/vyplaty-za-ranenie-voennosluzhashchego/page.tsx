import Link from 'next/link';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import PricingBlock from '@/components/PricingBlock';
import MilitaryHero from '@/components/MilitaryHero';
import SpecialistBlock from '@/components/SpecialistBlock';
import CasesBlock from '@/components/CasesBlock';
import ProcessBlock from '@/components/ProcessBlock';

export const metadata = {
  title: 'Выплаты за ранение военнослужащего — юрист в Липецке | ЮК «Де-Юре»',
  description: 'Помощь с выплатами за ранение: проверка справок и оснований, запрос документов, обжалование задержки или отказа, представительство в суде. 📞 +7 (4742) 20-15-25.',
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/'
  },
  openGraph: {
    title: 'Выплаты за ранение военнослужащего — юрист в Липецке | ЮК «Де-Юре»',
    description: 'Помощь с выплатами за ранение: проверка справок и оснований, запрос документов, обжалование задержки или отказа, представительство в суде. 📞 +7 (4742) 20-15-25.',
    url: 'https://dejure-help.ru/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/',
    siteName: 'ЮК «Де-Юре»',
    images: [
      {
        url: 'https://dejure-help.ru/images/og-military-lawyer.jpg',
        width: 1200,
        height: 630,
        alt: 'Выплаты за ранение военнослужащего'
      }
    ],
    locale: 'ru_RU',
    type: 'website'
  }
};

export default function VyplatyRaneniePage() {
  const faqs = [
    { 
      q: 'Какие выплаты могут быть положены после ранения?', 
      a: 'В зависимости от статуса военнослужащего, обстоятельств и даты ранения могут проверяться разные самостоятельные основания: федеральные единовременные выплаты, обязательное государственное страхование, региональные меры поддержки, а также выплаты, связанные с инвалидностью или увольнением по состоянию здоровья. У каждой меры свои условия, круг получателей и комплект документов. Поэтому нельзя исходить из того, что любому раненому автоматически положены все выплаты. Специалист проверит каждое возможное основание отдельно.' 
    },
    { 
      q: 'От чего зависит размер выплаты?', 
      a: 'Размер определяется не только самим фактом ранения. Значение могут иметь вид выплаты, действовавшие на дату ранения правила, установленная степень тяжести, обстоятельства получения ранения, наличие повторного ранения, инвалидности или оснований для увольнения, а также региональные нормы. Сначала необходимо сопоставить медицинские и служебные документы с условиями конкретной выплаты. Поэтому на странице не указывается одна универсальная сумма, применимая ко всем ситуациям.' 
    },
    { 
      q: 'Какие документы необходимы для оформления?', 
      a: 'Состав документов зависит от конкретной выплаты. Для первичного разбора обычно нужны имеющиеся справки о ранении и его тяжести, медицинские выписки и заключения, служебные документы об обстоятельствах получения ранения, документы о статусе и прохождении службы, а также заявления, ответы, решения об отказе и сведения о начислениях, если оформление уже начиналось. Специалист проверит комплект, разделит документы на уже имеющиеся и те, которые необходимо получить, исправить или запросить.' 
    },
    { 
      q: 'Что делать, если справку о ранении не выдают?', 
      a: 'Сначала нужно установить, какой орган или организация должны оформить документ в конкретной ситуации и на каком этапе возникла задержка: в медицинской организации, воинской части либо при передаче сведений. Обращения лучше подавать так, чтобы сохранялось подтверждение даты и содержания запроса. Специалист проверит имеющиеся медицинские и служебные документы, определит адресата, подготовит обращение и, если вопрос не решается, предложит порядок обжалования бездействия или отказа.' 
    },
    { 
      q: 'Почему выплату могут задерживать?', 
      a: 'Задержка может быть связана с неполным комплектом документов, противоречиями в справках и медицинских материалах, отсутствием необходимых сведений об обстоятельствах ранения, непередачей документов между организациями либо тем, что по обращению не принято оформленное решение. Для выбора способа защиты важно понять, где именно остановилась процедура. После проверки переписки и документов специалист определит, требуется ли дополнить комплект, подать запрос, жалобу или обращаться в суд.' 
    },
    { 
      q: 'Что делать при отказе в выплате?', 
      a: 'Желательно получить письменное решение с основаниями отказа и сохранить все документы, которые подавались на выплату. Затем нужно проверить, верно ли установлены обстоятельства ранения, учтены ли медицинские и служебные документы и применены ли правила, действовавшие в соответствующий период. В зависимости от причины отказа может потребоваться дополнить документы, исправить сведения, подать жалобу или административный иск. Конкретный порядок определяется после изучения решения и материалов.' 
    },
    { 
      q: 'Можно ли обжаловать неправильно указанную тяжесть ранения?', 
      a: 'Если в документах неполно отражены характер ранения, диагнозы или последствия травмы, это может повлиять на вывод о применимости и размере отдельных выплат. Нужно сопоставить медицинские материалы, формулировки в справках и решение, которое принято на их основании. В зависимости от выявленной ошибки специалист поможет запросить недостающие сведения, подготовить обращение об исправлении или повторном рассмотрении документов и определить, есть ли основания для последующего обжалования.' 
    },
    { 
      q: 'Может ли родственник заниматься оформлением документов?', 
      a: 'Родственник может помогать собирать документы, получать информацию и взаимодействовать со специалистом. Однако возможность подписывать и подавать заявления, получать официальные ответы или представлять военнослужащего зависит от характера действия и наличия необходимых полномочий. В некоторых случаях потребуется доверенность, а отдельные документы должен подписать или получить сам военнослужащий. После уточнения ситуации специалист объяснит, что родственник может сделать самостоятельно и какие полномочия нужно оформить.' 
    },
    { 
      q: 'Можно ли обратиться к юристу дистанционно?', 
      a: 'Да. Первичную консультацию, проверку копий документов, определение недостающих сведений и подготовку заявлений, запросов или жалоб можно организовать дистанционно. При этом не каждая стадия дела проходит без личного участия: необходимость присутствия специалиста, представительства или обращения в суд зависит от обстоятельств и полномочий. После изучения ситуации будет понятно, какую часть работы можно выполнить удалённо и где потребуется личное участие юриста или адвоката.' 
    },
    { 
      q: 'Сколько времени занимает сопровождение?', 
      a: 'Единого срока нет. Он зависит от того, оформлены ли исходные документы, нужно ли получать или исправлять медицинские и служебные сведения, на какой стадии находится обращение и потребуется ли обжалование. Сроки ответа государственных органов и судебного рассмотрения также не полностью зависят от представителя. После первичной проверки специалист разделит работу на этапы, укажет ближайшие действия и сможет дать ориентир по продолжительности с учётом конкретной ситуации.' 
    }
  ];

  const situations = [
    {
      title: <><span style={{ display: 'inline-block' }}>Выплату после ранения</span> <br /><span style={{ display: 'inline-block' }}>не назначили</span></>,
      desc: 'Проверим основания отказа и имеющиеся документы. Определим, что необходимо получить или исправить и в каком порядке обжаловать решение.'
    },
    {
      title: <><span style={{ display: 'inline-block' }}>Оформление</span> <br /><span style={{ display: 'inline-block' }}>или перечисление выплаты затягивается</span></>,
      desc: 'Установим, на каком этапе остановилась процедура. Подготовим обращения и поможем добиться рассмотрения документов.'
    },
    {
      title: <><span style={{ display: 'inline-block' }}>Не выдают</span> <br /><span style={{ display: 'inline-block' }}>необходимые документы</span></>,
      desc: 'Определим, каких медицинских или служебных документов не хватает, и поможем обратиться за их оформлением или восстановлением.'
    },
    {
      title: <><span style={{ display: 'inline-block' }}>В документах</span> <br /><span style={{ display: 'inline-block' }}>допущены ошибки</span></>,
      desc: 'Проверим справки, заключения и выписки. Поможем исправить сведения об обстоятельствах, характере или последствиях ранения.'
    },
    {
      title: <><span style={{ display: 'inline-block' }}>Размер выплаты</span> <br /><span style={{ display: 'inline-block' }}>вызывает сомнения</span></>,
      desc: 'Проверим, какие выплаты применимы в вашей ситуации и правильно ли определены основания и размер назначенных сумм.'
    },
    {
      title: <><span style={{ display: 'inline-block' }}>Непонятно, какие выплаты</span> <br /><span style={{ display: 'inline-block' }}>положены</span></>,
      desc: 'Изучим обстоятельства ранения и имеющиеся документы, объясним возможные основания для выплат и порядок их оформления.'
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LegalService"],
        "@id": "https://dejure-help.ru/#organization",
        "name": "Юридическая компания «Де-Юре»",
        "url": "https://dejure-help.ru/",
        "telephone": "+7 (4742) 20-15-25",
        "address": {
          "@type": "PostalAddress",
          "postalCode": "398001",
          "addressLocality": "Липецк",
          "addressRegion": "Липецкая область",
          "streetAddress": "ул. Советская, д. 35, оф. 213",
          "addressCountry": "RU"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://dejure-help.ru/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://dejure-help.ru/" },
          { "@type": "ListItem", "position": 2, "name": "Гражданам", "item": "https://dejure-help.ru/grazhdanam/" },
          { "@type": "ListItem", "position": 3, "name": "Военный юрист", "item": "https://dejure-help.ru/grazhdanam/voennyj-yurist/" },
          { "@type": "ListItem", "position": 4, "name": "Выплаты за ранение", "item": "https://dejure-help.ru/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/" }
        ]
      },
      {
        "@type": "LegalService",
        "@id": "https://dejure-help.ru/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/#service",
        "name": "Юридическая помощь по выплатам за ранение военнослужащих в Липецке",
        "description": "Помощь с выплатами за ранение: проверка справок и оснований, запрос документов, обжалование задержки или отказа, представительство в суде.",
        "url": "https://dejure-help.ru/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/",
        "provider": { "@id": "https://dejure-help.ru/#organization" }
      },
      {
        "@type": "Person",
        "@id": "https://dejure-help.ru/specialisty/konopkin-dmitriy-sergeevich/#person",
        "name": "Дмитрий Сергеевич Конопкин",
        "jobTitle": "Адвокат, независимый партнёр ЮК «Де-Юре», куратор направления «Военное право»",
        "description": "Реестровый номер 48/812",
        "url": "https://dejure-help.ru/specialisty/konopkin-dmitriy-sergeevich/",
        "image": "https://dejure-help.ru/images/konopkin.jpg",
        "worksFor": { "@id": "https://dejure-help.ru/#organization" }
      },
      {
        "@type": "WebPage",
        "@id": "https://dejure-help.ru/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/#webpage",
        "url": "https://dejure-help.ru/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/",
        "name": "Выплаты за ранение военнослужащего — юрист в Липецке | ЮК «Де-Юре»",
        "description": "Помощь с выплатами за ранение: проверка справок и оснований, запрос документов, обжалование задержки или отказа, представительство в суде.",
        "breadcrumb": { "@id": "https://dejure-help.ru/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/#breadcrumb" },
        "mainEntity": { "@id": "https://dejure-help.ru/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/#service" }
      },
      {
        "@type": "FAQPage",
        "@id": "https://dejure-help.ru/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/#faq",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": { "@type": "Answer", "text": faq.a }
        }))
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
            <a href="/" style={{ color: 'var(--color-primary)' }}>Главная</a> <span style={{ margin: '0 8px' }}>/</span> 
            <a href="/grazhdanam/" style={{ color: 'var(--color-primary)' }}>Гражданам</a> <span style={{ margin: '0 8px' }}>/</span> 
            <a href="/grazhdanam/voennyj-yurist/" style={{ color: 'var(--color-primary)' }}>Военный юрист</a> <span style={{ margin: '0 8px' }}>/</span> 
            <span style={{ color: 'var(--color-text-main)' }}>Выплаты за ранение</span>
          </>
        }
        superTitle="Военные выплаты • анализ документов и обжалование"
        title={<><span style={{ display: 'inline-block' }}>Юрист по выплатам</span> <br /><span style={{ display: 'inline-block' }}>за ранение военнослужащего</span> <br /><span style={{ display: 'inline-block' }}>в Липецке</span></>}
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '640px', textWrap: 'balance' }}>
            <span style={{ display: 'inline-block' }}>Проверим документы и виды положенных выплат,</span> <br />
            <span style={{ display: 'inline-block' }}>запросим недостающие сведения и определим порядок</span> <br />
            <span style={{ display: 'inline-block' }}>действий при задержке, отказе, неверно определённой</span> <br />
            <span style={{ display: 'inline-block' }}>степени тяжести ранения или неполной выплате.</span>
          </span>
        }
        primaryCtaText="Получить консультацию"
        primaryCtaLink="#form"
        primaryCtaSubtext="Перезвоним вам в течение 15 минут в рабочее время"
        imageUrl="/images/konopkin.jpg"
        imageName="Дмитрий Сергеевич Конопкин"
        imageSubtitle="Адвокат, независимый партнёр ЮК «Де-Юре», куратор направления «Военное право»"
        imageMarginTop="0px"
        trustItems={[
          { text: <><span style={{ display: 'inline-block' }}>Проверяем правовые основания</span> <span style={{ display: 'inline-block' }}>для получения выплат</span></> },
          { text: <><span style={{ display: 'inline-block' }}>Начинаем с проверки медицинских и служебных документов,</span> <span style={{ display: 'inline-block' }}>а также заключений ВВК — если они относятся к выплате.</span></> },
          { text: <><span style={{ display: 'inline-block' }}>Фиксируем объём и стоимость правовой помощи</span> <span style={{ display: 'inline-block' }}>в договоре</span></> }
        ]}
      />

      {/* ═══ 3. В каких ситуациях мы можем помочь ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, whiteSpace: 'nowrap' }}>
              В каких ситуациях мы можем помочь
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Найдите свою проблему — мы подскажем, с каких документов начать и как восстановить ваши права.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '40px' }}>
            {situations.map((sit, i) => (
              <div
                key={i}
                className="card hover-lift"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)',
                  padding: '28px 24px',
                  borderRadius: '0',
                  boxShadow: '0 4px 16px rgba(23, 50, 77, 0.05)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
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
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: 'var(--color-primary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '10px',
                      background: 'rgba(23, 50, 77, 0.06)',
                      padding: '2px 6px',
                      display: 'inline-block'
                    }}
                  >
                    {`СИТУАЦИЯ 0${i + 1}`}
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '17px',
                      fontWeight: 600,
                      color: 'var(--color-deep-blue)',
                      marginBottom: '10px',
                      lineHeight: '1.3'
                    }}
                  >
                    {sit.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '13.5px',
                      color: 'var(--color-text-secondary)',
                      lineHeight: '1.5',
                      margin: 0
                    }}
                  >
                    {sit.desc}
                  </p>
                </div>

                <a
                  href="#form"
                  className="situation-btn"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--color-primary)',
                    fontSize: '13px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    marginTop: '16px',
                    cursor: 'pointer'
                  }}
                >
                  <span>Разобрать ситуацию</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. Компактная карточка CTA ═══ */}
      <section className="section bg-white" style={{ padding: '0 0 80px 0' }}>
        <div className="container">
          <div style={{ 
            background: 'var(--color-deep-blue)', 
            borderTop: '3px solid var(--color-gold)',
            padding: '36px 40px',
            boxShadow: '0 12px 35px rgba(23, 50, 77, 0.14)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            gap: '32px', 
            flexWrap: 'wrap',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Vector watermark graphic */}
            <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', opacity: 0.08, pointerEvents: 'none' }}>
              <svg width="140" height="140" viewBox="0 0 24 24" fill="#FFFFFF">
                <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>

            <div style={{ maxWidth: '680px', position: 'relative', zIndex: 1 }}>
              <h3 style={{ fontSize: '22px', fontFamily: 'var(--font-serif)', color: 'var(--color-white)', margin: '0 0 10px 0', lineHeight: 1.3 }}>
                Не уверены, относится ли ваша ситуация <br />к одному из этих случаев?
              </h3>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: 1.6, maxWidth: '780px' }}>
                <span style={{ display: 'block' }}>Опишите обстоятельства и укажите, какие документы у вас есть. Дмитрий Сергеевич Конопкин</span>
                <span style={{ display: 'block' }}>изучит информацию и определит возможный порядок действий.</span>
              </p>
            </div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <style dangerouslySetInnerHTML={{__html: `
                .btn-cta-gold {
                  background-color: var(--color-gold) !important;
                  color: var(--color-deep-blue) !important;
                  border: 1px solid var(--color-gold) !important;
                  transition: all 0.3s ease !important;
                  display: inline-block;
                  text-decoration: none;
                }
                .btn-cta-gold:hover {
                  background-color: transparent !important;
                  color: #FFFFFF !important;
                  border-color: var(--color-gold) !important;
                  box-shadow: 0 0 10px rgba(200, 169, 126, 0.3) !important;
                }
              `}} />
              <a href="#form" className="btn btn-cta-gold" style={{ padding: '14px 32px', fontSize: '15px', fontWeight: 700, whiteSpace: 'nowrap' }}>
                Обсудить ситуацию
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 5. Куратор направления ═══ */}
      <SpecialistBlock 
        title="Куратор направления"
        name="Дмитрий Сергеевич Конопкин"
        position="Адвокат, независимый партнёр ЮК «Де-Юре», куратор направления «Военное право»"
        imageUrl="/images/konopkin.jpg"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Дмитрий Сергеевич Конопкин лично ведёт работу по вопросам выплат за ранение военнослужащих. Он проверяет медицинские и служебные документы, определяет возможные основания для получения выплат и порядок действий при задержке, отказе или неверном оформлении документов.
          </span>,
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }}></div>
              <span>Адвокат, реестровый номер 48/812.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }}></div>
              <span>С 2016 по 2022 год работал в Следственном управлении Следственного комитета Российской Федерации по Липецкой области; прошёл путь до старшего следователя отдела по расследованию особо важных дел.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', marginTop: '8px', flexShrink: 0 }}></div>
              <span>Ведёт военные дела в Липецкой области и представляет интересы доверителей в других регионах России.</span>
            </li>
          </ul>,
          <a key="3" href="/specialisty/konopkin-dmitriy-sergeevich/" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
            Подробнее о Дмитрии Сергеевиче Конопкине →
          </a>
        ]}
        buttonText="Обсудить ситуацию с адвокатом"
        buttonHref="#form"
      />

      {/* ═══ 6. Примеры из практики ═══ */}
      <CasesBlock 
        title="Примеры из практики"
        showDemoWarning={true}
        cases={[
          {
            category: "ВЫПЛАТЫ ВОЕННОСЛУЖАЩИМ",
            title: "Выплата после восстановления недостающих документов",
            problem: "После лечения военнослужащий не получил выплату за ранение. Выяснилось, что часть медицинских и служебных документов не была оформлена или передана в установленном порядке.",
            action: "Проверили имеющиеся документы, определили, каких сведений не хватает, подготовили обращения в медицинскую организацию и воинскую часть и проконтролировали оформление необходимого комплекта.",
            result: "Недостающие документы были оформлены и направлены для рассмотрения вопроса о назначении выплаты.",
            isDemo: true
          },
          {
            category: "ВОЕННО-ВРАЧЕБНАЯ ЭКСПЕРТИЗА",
            title: "Пересмотр документов о тяжести ранения",
            problem: "Характер и последствия ранения были отражены в документах неполно, из-за чего военнослужащий не мог подтвердить право на выплату в соответствующем размере.",
            action: "Изучили медицинские документы, сопоставили диагнозы и последствия травмы, подготовили обращения для исправления и дополнения сведений.",
            result: "Документы были рассмотрены повторно с учётом ранее неотражённых медицинских обстоятельств.",
            isDemo: true
          },
          {
            category: "ОБЖАЛОВАНИЕ ОТКАЗОВ",
            title: "Обжалование отказа в назначении выплаты",
            problem: "Военнослужащему отказали в выплате, несмотря на наличие документов, подтверждающих ранение и обстоятельства его получения.",
            action: "Проверили основания отказа, собрали подтверждающие документы, подготовили жалобу и представляли интересы военнослужащего при её рассмотрении.",
            result: "Первоначальное решение было пересмотрено, документы направлены на повторное рассмотрение вопроса о выплате.",
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
          { num: '01', title: 'Разбираем ситуацию', desc: 'Уточняем обстоятельства ранения, какие выплаты уже оформлялись и на каком этапе возникла проблема.' },
          { num: '02', title: 'Проверяем документы', desc: 'Изучаем медицинские заключения, справки, выписки, решения и полученные отказы.' },
          { num: '03', title: 'Определяем порядок действий', desc: 'Объясняем, какие документы необходимо получить или исправить и куда следует обращаться.' },
          { num: '04', title: 'Сопровождаем оформление или обжалование', desc: 'Готовим заявления, запросы и жалобы, взаимодействуем с соответствующими органами, при необходимости обращаемся в суд.' },
          { num: '05', title: 'Контролируем результат', desc: 'Отслеживаем рассмотрение обращений и информируем клиента о дальнейших действиях.' },
          { isBanner: true, title: 'Дистанционный формат', desc: 'Консультацию и проверку документов можно провести дистанционно. Необходимость личного участия юриста или адвоката определим после изучения ситуации.' }
        ]}
      />

      {/* ═══ 8. Стоимость ═══ */}
      <PricingBlock 
        title="Стоимость юридической помощи"
        subtitle="Стоимость зависит от стадии оформления: первичный разбор, подготовка обращения при задержке или отказе, документ для суда либо представительство в судебном процессе."
        ctaTitle=""
        disclaimer="Окончательная стоимость зависит от объёма материалов, стадии дела, срочности и необходимого объёма работы. Цена и состав услуг фиксируются в договоре до начала работы. Государственные пошлины, нотариальные услуги, экспертизы, медицинские исследования, почтовые расходы и выезд за пределы согласованной территории оплачиваются отдельно. Если после консультации заключается договор на дальнейшую работу, стоимость консультации засчитывается в оплату по договору. Последующее судебное заседание сверх включённых трёх — от 10 000 ₽."
        pageUrl="https://dejure-help.ru/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/"
        direction="Военное право"
        tiers={[
          {
            title: 'Консультация по выплатам за ранение',
            subtitle: 'Устный разбор имеющихся сведений и возможного порядка оформления или обжалования.',
            popular: false,
            price: '2 000 ₽',
            priceUnit: 'за консультацию до 1 часа',
            features: [
              { name: 'Уточнение статуса и обстоятельств ранения', value: 'Включено' },
              { name: 'Обсуждение имеющихся документов и ответов', value: 'Включено' },
              { name: 'Рекомендации по ближайшим действиям', value: 'Включено' }
            ],
            exclusions: 'Проверка большого комплекта медицинских и служебных документов, письменный перечень выплат и подготовка обращений не входят.',
            buttonText: 'Разобрать ситуацию',
            buttonHref: '#form'
          },
          {
            title: 'Жалоба или заявление по выплате',
            subtitle: 'Один документ при задержке, отказе, неполном оформлении или неверном расчёте.',
            popular: false,
            price: 'от 5 000 ₽',
            priceUnit: 'за один документ',
            features: [
              { name: 'Изучение предоставленных материалов для документа', value: 'Включено' },
              { name: 'Формирование правовой позиции', value: 'Включено' },
              { name: 'Подготовка жалобы или заявления; срок — от 3 рабочих дней', value: 'Включено' }
            ],
            exclusions: 'Получение недостающих справок, подача, контроль рассмотрения и представительство не входят.',
            buttonText: 'Заказать обращение',
            buttonHref: '#form'
          },
          {
            title: 'Документ для обращения в суд',
            subtitle: 'Подготовка одного процессуального документа; его вид определяется по предмету спора.',
            popular: false,
            price: 'от 10 000 ₽',
            priceUnit: 'за один процессуальный документ',
            features: [
              { name: 'Подготовка искового, административного искового заявления или иного применимого документа', value: 'Включено' },
              { name: 'Формирование правовой позиции по переданным материалам', value: 'Включено' },
              { name: 'Срок подготовки — от 3 рабочих дней', value: 'Включено' }
            ],
            exclusions: 'Подача, государственная пошлина, сбор доказательств, экспертизы и представительство не входят.',
            buttonText: 'Заказать документ в суд',
            buttonHref: '#form'
          },
          {
            title: 'Представительство в суде по выплате',
            subtitle: 'Участие юриста в суде первой инстанции по спору о назначении или размере выплаты.',
            popular: false,
            price: 'от 40 000 ₽',
            priceUnit: 'до 3 судебных заседаний',
            features: [
              { name: 'Участие в предварительных и основных заседаниях', value: 'Включено' },
              { name: 'Представление позиции клиента', value: 'Включено' },
              { name: 'Информирование о ходе судебного разбирательства', value: 'Включено' }
            ],
            exclusions: 'Процессуальные документы, экспертизы и последующие заседания не входят. Последующее заседание — от 10 000 ₽.',
            buttonText: 'Обсудить ведение дела',
            buttonHref: '#form'
          }
        ]}
      />

      {/* ═══ 9. Ответы на частые вопросы ═══ */}
      <FAQBlock 
        faqs={faqs} 
        title="Частые вопросы о выплатах за ранение"
        subtitle="Ответы на частые вопросы о проверке справок, причинах задержек, обжаловании отказов и дистанционном ведении дела. Если у вас остался вопрос, задайте его специалисту."
        ctaText="Задать свой вопрос"
        ctaLink="#form"
      />

      {/* ═══ БЛОК: СВЯЗАННЫЕ УСЛУГИ ═══ */}
      <section className="section bg-cream" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Связанные услуги
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              <span style={{ display: 'block' }}>Смежные направления помощи при вопросах,</span>
              <span style={{ display: 'block' }}>связанных с ранением, ВВК и решениями командования.</span>
            </p>
          </div>

          <style dangerouslySetInnerHTML={{ __html: `
            .related-service-card {
              border-top: 3px solid var(--color-primary) !important;
            }
            .related-service-card:hover {
              border-top: 3px solid var(--color-gold) !important;
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
            <Link href="/grazhdanam/voennyj-yurist/osparivanie-zaklyucheniya-vvk/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div 
                className="card related-service-card" 
                style={{ 
                  height: '100%', 
                  minHeight: '140px',
                  padding: '32px', 
                  background: 'var(--color-white)', 
                  border: '1px solid var(--color-border)',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column', 
                  transition: 'all 0.3s',
                  position: 'relative'
                }}
              >
                <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                  <span style={{ display: 'inline-block' }}>Оспаривание заключения</span> <br /><span style={{ display: 'inline-block' }}>ВВК</span>
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Поможем оспорить категорию годности или причинную связь ранения, если от этого зависит назначение и размер положенных выплат.
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
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column', 
                  transition: 'all 0.3s',
                  position: 'relative'
                }}
              >
                <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                  <span style={{ display: 'inline-block' }}>Оспаривание решений</span> <br /><span style={{ display: 'inline-block' }}>и действий военкомата</span>
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Помощь при несогласии с решением призывной комиссии, отказе принять или рассмотреть документы и других нарушениях со стороны военкомата.
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

      {/* ═══ 11. Финальная форма ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start', paddingTop: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>Связаться с нами</span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                Расскажите о ситуации с выплатой
              </h2>
              
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко опишите, что произошло, и оставьте контактные данные. <span style={{ color: 'var(--color-deep-blue)', fontWeight: 600 }}>Обращение будет передано Дмитрию Сергеевичу Конопкину.</span> Он уточнит, какие документы у вас есть, изучит обстоятельства и согласует с вами консультацию.
              </p>
              
              <div style={{ marginTop: '32px' }}>
                <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <span>
                    Перезвоним вам в течение 15 минут в рабочее время
                  </span>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start' }}>
              <div style={{ background: 'var(--gradient-cream)', padding: '40px', borderRadius: '0', boxShadow: '0 8px 24px rgba(0,0,0,0.15)', width: '100%', border: '1px solid rgba(0,0,0,0.06)' }}>
                <ContactsForm 
                  title="Написать нам" 
                  subtitle="" 
                  direction="Военное право"
                  hiddenFields={[
                    { name: 'source_page', value: 'https://dejure-help.ru/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/' },
                    { name: 'direction', value: 'Военное право' }
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

