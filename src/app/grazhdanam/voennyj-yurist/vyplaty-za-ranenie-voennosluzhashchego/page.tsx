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
  description: 'Помощь с выплатами за ранение: проверка справок и оснований, запрос документов, обжалование задержки или отказа, представительство в суде.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: 'https://dejure-help.ru/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/'
  },
  openGraph: {
    title: 'Выплаты за ранение военнослужащего — юрист в Липецке | ЮК «Де-Юре»',
    description: 'Помощь с выплатами за ранение: проверка справок и оснований, запрос документов, обжалование задержки или отказа, представительство в суде.',
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
        "@type": "Organization",
        "@id": "https://dejure-help.ru/#organization",
        "name": "Юридическая компания «Де-Юре»",
        "url": "https://dejure-help.ru/",
        "logo": "https://dejure-help.ru/images/logo.png",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Липецк",
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
        "jobTitle": "Адвокат",
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
        imageSubtitle="Адвокат, председатель Коллегии адвокатов «Де-Юре», куратор направления «Военное право»"
        imageMarginTop="64px"
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
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              В каких ситуациях <br />мы можем помочь
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Найдите свою проблему — мы подскажем, с каких документов начать и как восстановить ваши права.
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
                {/* Vector watermark graphic from SOCH / hub page */}
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
                  {`СИТУАЦИЯ 0${i + 1}`}
                </div>

                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--color-deep-blue)', lineHeight: 1.4, margin: '0 0 14px 0', position: 'relative', zIndex: 1, whiteSpace: 'pre-line' }}>
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

            <div style={{ maxWidth: '680px', position: 'relative', zIndex: 1 }}>
              <h3 style={{ fontSize: '24px', fontFamily: 'var(--font-serif)', color: 'var(--color-white)', margin: '0 0 10px 0', lineHeight: 1.3 }}>
                <span style={{ display: 'inline-block' }}>Не уверены, относится ли ваша ситуация</span> <br /><span style={{ display: 'inline-block' }}>к одному из этих случаев?</span>
              </h3>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: 1.5, textWrap: 'pretty' }}>
                Опишите обстоятельства и укажите, какие документы у вас есть. Дмитрий Сергеевич Конопкин изучит информацию и определит возможный порядок действий.
              </p>
            </div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <a href="#form" className="btn white-btn-custom" style={{ padding: '14px 32px', fontSize: '15px', fontWeight: 700, whiteSpace: 'nowrap' }}>
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
        position={<>Адвокат, председатель Коллегии адвокатов «Де-Юре»,<br />куратор направления «Военное право»</>}
        imageUrl="/images/konopkin.jpg"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Дмитрий Сергеевич Конопкин лично ведёт работу по вопросам выплат за ранение военнослужащих. Он проверяет медицинские и служебные документы, определяет возможные основания для получения выплат и порядок действий при задержке, отказе или неверном оформлении документов.
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
          <a key="3" href="/specialisty/konopkin-dmitriy-sergeevich/" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
            Подробнее о Дмитрии Сергеевиче Конопкине →
          </a>
        ]}
        buttonText="Задать вопрос Дмитрию Сергеевичу"
        buttonHref="#form"
      />

      {/* ═══ 6. Примеры из практики ═══ */}
      <CasesBlock 
        title="Примеры из практики"
        showDemoWarning={true}
        cases={[
          {
            category: "ВЫПЛАТЫ ВОЕННОСЛУЖАЩИМ",
            title: "Добились назначения выплаты после отказа из-за расхождений в документах",
            problem: "Военнослужащий получил ранение, прошёл лечение и представил документы для оформления единовременной выплаты. Выплату не назначили из-за расхождений в дате и обстоятельствах ранения, указанных в медицинских и служебных документах.",
            action: "Сопоставили медицинские выписки, справку о ранении и сведения воинской части. Установили, какие документы содержат противоречия, подготовили обращения об их исправлении и повторно направили материалы на выплату с юридическим обоснованием.",
            result: "Расхождения в документах устранили. Право военнослужащего на выплату подтвердили, выплату назначили и перечислили.",
            isDemo: true
          },
          {
            category: "ВОЕННО-ВРАЧЕБНАЯ ЭКСПЕРТИЗА",
            title: "Добились пересмотра тяжести ранения и увеличения выплаты",
            problem: "Ранение военнослужащего отнесли к лёгким, хотя последствия травмы и данные медицинских обследований указывали на признаки тяжёлого увечья. Из-за этого ему назначили выплату в меньшем размере.",
            action: "Изучили медицинскую документацию и сопоставили установленный диагноз с действующим перечнем увечий. Собрали недостающие медицинские сведения, подготовили обращение о пересмотре степени тяжести и сопровождали повторное рассмотрение материалов.",
            result: "Степень тяжести ранения пересмотрели. Военнослужащему назначили выплату в надлежащем размере и перечислили разницу.",
            isDemo: true
          },
          {
            category: "ОБЖАЛОВАНИЕ ОТКАЗОВ",
            title: "Добились отдельной выплаты за повторное ранение",
            problem: "Военнослужащий получил два ранения в разное время. Выплату назначили только по первому случаю, а второе ранение посчитали продолжением прежнего лечения и отдельно не рассмотрели.",
            action: "Разделили два страховых случая по датам, обстоятельствам и медицинским документам. Подтвердили, что второе ранение было получено в другой период и оформлено самостоятельными медицинскими материалами. Подготовили обращение о назначении выплаты по второму случаю.",
            result: "Второе ранение признали самостоятельным основанием. Военнослужащему назначили и перечислили дополнительную выплату.",
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
          { isBanner: true, title: 'Дистанционный формат', desc: 'Значительную часть работы можно организовать дистанционно. Если требуется личное участие адвоката или юриста, заранее согласуем место и порядок работы.' }
        ]}
      />

      {/* ═══ 8. Стоимость ═══ */}
      <PricingBlock 
        title="Стоимость юридической помощи"
        subtitle="Точная стоимость зависит от состояния документов, стадии оформления и необходимости обжалования. После первичной консультации специалист определит объём работы и назовёт стоимость до заключения договора."
        tiers={[
          {
            title: <>Консультация <br />и анализ</>,
            subtitle: 'Первичный разбор',
            popular: false,
            price: 'ХХХ ₽',
            features: [
              { name: 'Проверка имеющихся справок', value: '✓' },
              { name: 'Определение оснований для выплат', value: '✓' },
              { name: 'План первоочередных действий', value: '✓' }
            ],
            buttonText: 'Уточнить стоимость',
            buttonHref: '#form'
          },
          {
            title: <>Досудебная <br />работа</>,
            subtitle: 'Запросы и жалобы',
            popular: true,
            badgeText: 'ВОСТРЕБОВАНО',
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
            title: <>Судебное <br />обжалование</>,
            subtitle: 'Судебная защита',
            popular: false,
            price: 'ХХХ ₽',
            features: [
              { name: 'Подготовка иска или жалобы в суд.', value: '✓' },
              { name: 'Сбор доказательной базы', value: '✓' },
              { name: 'Представительство в суде', value: '✓' }
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
        title={<><span style={{ display: 'inline-block' }}>Частые вопросы</span> <br /><span style={{ display: 'inline-block' }}>о выплатах за ранение</span> <br /><span style={{ display: 'inline-block' }}>военнослужащего</span></>}
        subtitle="Ответы на частые вопросы о проверке справок, причинах задержек, обжаловании отказов и дистанционном ведении дела. Если у вас остался вопрос, задайте его специалисту."
        ctaText="Задать свой вопрос"
        ctaLink="#form"
      />

      {/* ═══ 10. Связанные услуги ═══ */}
      <section className="section bg-cream" style={{ padding: '64px 0', background: 'var(--gradient-cream)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', marginBottom: '32px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '12px', marginTop: 0 }}>
              Связанные услуги
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Соседние направления юридической помощи военнослужащим и их семьям.
            </p>
          </div>

          <style dangerouslySetInnerHTML={{__html: `
            .related-card-link:hover .related-more-btn {
              color: var(--color-gold) !important;
            }
            .related-more-btn {
              transition: color 0.3s ease !important;
            }
          `}} />

          <div className="grid grid-2" style={{ gap: '24px' }}>
            <a href="/grazhdanam/voennyj-yurist/osparivanie-zaklyucheniya-vvk/" className="related-card-link" style={{ textDecoration: 'none' }}>
              <div className="card hover-lift" style={{ 
                padding: '28px 24px', 
                background: '#FFFFFF', 
                borderLeft: '4px solid var(--color-primary)',
                boxShadow: '0 4px 14px rgba(16, 39, 59, 0.06)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease'
              }}>
                <div>
                  <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>
                    Оспаривание заключения ВВК
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                    Если медицинское заключение не отражает характер или последствия ранения.
                  </p>
                </div>
                <div className="related-more-btn" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, marginTop: '16px' }}>
                  Подробнее →
                </div>
              </div>
            </a>

            <a href="/grazhdanam/voennyj-yurist/vyplaty-seme-pogibshego-voennosluzhashchego/" className="related-card-link" style={{ textDecoration: 'none' }}>
              <div className="card hover-lift" style={{ 
                padding: '28px 24px', 
                background: '#FFFFFF', 
                borderLeft: '4px solid var(--color-primary)',
                boxShadow: '0 4px 14px rgba(16, 39, 59, 0.06)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease'
              }}>
                <div>
                  <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>
                    Выплаты семье погибшего военнослужащего
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                    Если после гибели военнослужащего семье требуется помощь с оформлением положенных выплат.
                  </p>
                </div>
                <div className="related-more-btn" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, marginTop: '16px' }}>
                  Подробнее →
                </div>
              </div>
            </a>
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
                    Перезвоним вам в течение<br />
                    15 минут в рабочее время
                  </span>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start' }}>
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

