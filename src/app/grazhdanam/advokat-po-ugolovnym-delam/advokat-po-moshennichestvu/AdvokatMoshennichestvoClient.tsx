'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MilitaryHero from '@/components/MilitaryHero';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import SpecialistBlock from '@/components/SpecialistBlock';
import PricingBlock, { PricingTier } from '@/components/PricingBlock';
import ProcessBlock, { ProcessStep } from '@/components/ProcessBlock';

export default function AdvokatMoshennichestvoClient() {
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
          "item": "https://dejure-help.ru/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Гражданам",
          "item": "https://dejure-help.ru/grazhdanam/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Адвокат по уголовным делам",
          "item": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Адвокат по мошенничеству",
          "item": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-moshennichestvu/"
        }
      ]
    },
    {
      "@type": "Service",
      "name": "Адвокат по мошенничеству в Липецке",
      "description": "Защита по делам о мошенничестве (ст. 159 УК РФ) в Липецке: проверка умысла, анализ договоров, платежей, переписки. Сопровождение допросов, следствия и суда.",
      "url": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-moshennichestvu/",
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Липецк и Липецкая область"
      },
      "provider": {
        "@type": "LegalService",
        "name": "Юридическая компания «Де-Юре»",
        "url": "https://dejure-help.ru",
        "telephone": "+7-910-350-31-11",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "ул. Советская, д. 35, оф. 213",
          "addressLocality": "Липецк",
          "addressCountry": "RU"
        }
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Чем мошенничество отличается от обычного неисполнения обязательств?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Главное отличие — наличие прямого умысла на безвозмездное изъятие чужого имущества, возникшего ДО получения денег. Если лицо намеревалось исполнить договор, но не смогло из-за финансовых трудностей, это гражданско-правовой спор, а не преступление."
          }
        },
        {
          "@type": "Question",
          "name": "Могут ли арестовать предпринимателя по ст. 159 УК РФ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Согласно ч. 1.1 ст. 108 УПК РФ, заключение под стражу не применяется к подозреваемым и обвиняемым в преступлениях, совершенных в сфере предпринимательской деятельности, за исключением строго определенных законом случаев."
          }
        },
        {
          "@type": "Question",
          "name": "Что делать, если контрагент угрожает подать заявление в полицию по ст. 159?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Соберите всю первичную документацию (договор, спецификации, акты, платежки, переписку о ходе исполнения), составьте письменный ответ на претензию и проконсультируйтесь с адвокатом до вызова в полицию."
          }
        },
        {
          "@type": "Question",
          "name": "Можно ли примириться с потерпевшим по ст. 159 УК РФ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "По преступлениям небольшой и средней тяжести (ч. 1 и ч. 2 ст. 159 УК РФ) возможно прекращение уголовного дела в связи с примирением сторон (ст. 25 УПК РФ) или с назначением судебного штрафа при полном возмещении ущерба."
          }
        }
      ]
    }
  ]
};

  const situations = [
  {
    "title": "Неисполнение договора вменяют как хищение",
    "desc": "Контрагент заявляет об обмане из-за срыва сроков, не поставленного товара или неоплаты, требуя возбуждения уголовного дела.",
    "impact": "Доказываем реальность хозяйственной деятельности, отсутствие изначального умысла на обман и гражданско-правовой характер спора."
  },
  {
    "title": "Обвинение в сфере кредитования (ст. 159.1)",
    "desc": "Банк или МФО усматривают признаки ст. 159.1 УК РФ при предоставлении недостоверных сведений о доходах или месте работы.",
    "impact": "Проверяем факт внесения платежей, подлинность справок, мотивы заёмщика и размер фактического ущерба."
  },
  {
    "title": "Мошенничество при получении выплат (ст. 159.2)",
    "desc": "Претензии госорганов по маткапиталу, грантам, пособиям, субсидиям для бизнеса или социальным выплатам.",
    "impact": "Анализируем основания получения средств, целевое использование и отсутствие подложных документов."
  },
  {
    "title": "Мошенничество в сфере предпринимательства",
    "desc": "Вменение квалифицирующих признаков по ч. 5–7 ст. 159 УК РФ, подозрение в создании фиктивных обязательств.",
    "impact": "Проводим финансово-правовой аудит первичных документов, движения товара и безналичных расчётов."
  }
];
  const checkpoints = [
  {
    "title": "Наличие изначального умысла на хищение",
    "desc": "Устанавливаем, предпринимались ли реальные действия для исполнения обязательств до возникновения сложностей."
  },
  {
    "title": "Фактический размер имущественного ущерба",
    "desc": "Исключаем из расчёта суммы, добровольно возвращённые контрагенту, встречные поставки и штрафные санкции."
  },
  {
    "title": "Разграничение со ст. 160 и 165 УК РФ",
    "desc": "Проверяем правильность квалификации и отсутствие оснований для переквалификации на менее тяжкий состав."
  },
  {
    "title": "Законность оперативно-розыскных мероприятий",
    "desc": "Проверяем постановления на проведение ОРМ (прослушивание, обследование, эксперимент) и допустимость доказательств."
  },
  {
    "title": "Основания для прекращения по примирению или с возмещением",
    "desc": "Оцениваем процессуальные возможности прекращения дела по нереабилитирующим основаниям при согласии подзащитного."
  },
  {
    "title": "Наличие признаков состава преступления",
    "desc": "Формируем позицию об отсутствии состава преступления в связи с классическим неисполнением гражданского договора."
  }
];
  const casesData: CaseData[] = [
  {
    "title": "Прекращение уголовного дела по ч. 4 ст. 159 УК РФ на стадии следствия",
    "category": "Мошенничество в бизнесе",
    "problem": "Руководителю компании вменили хищение 12 млн руб. аванса по контракту на поставку сельхозтехники.",
    "action": "Адвокат предоставил документы о закупке запчастей, частичном исполнении и переписку о форс-мажоре у завода-изготовителя.",
    "result": "Следствие признало отсутствие умысла на хищение. Уголовное дело прекращено за отсутствием состава преступления."
  },
  {
    "title": "Переквалификация с мошенничества на самоуправство (ст. 330 УК РФ)",
    "category": "Имущественный спор",
    "problem": "Доверителю грозило до 5 лет лишения свободы за удержание автомобиля должника в счёт обеспечения займа.",
    "action": "Доказали наличие долговых обязательств и открытый характер действий доверителя без корыстного обмана.",
    "result": "Дело переквалифицировано на ч. 1 ст. 330 УК РФ со снижением наказания до судебного штрафа без судимости."
  },
  {
    "title": "Отказ в заключении под стражу по обвинению в крупном мошенничестве",
    "category": "Мера пресечения",
    "problem": "Следователь ходатайствовал об аресте и помещении в СИЗО предпринимателя по ч. 3 ст. 159 УК РФ.",
    "action": "Представили документы о предпринимательском статусе сделки (ч. 1.1 ст. 108 УПК РФ), наличии иждивенцев и поручительств.",
    "result": "Суд отказал в удовлетворении ходатайства следствия, избрав меру пресечения в виде запрета определённых действий."
  }
];
  const processSteps: ProcessStep[] = [
  {
    "num": "01",
    "title": "Срочный анализ материалов и квалификации",
    "desc": "Изучаем постановление о возбуждении дела, претензии потерпевшего, договоры и акты приема-передачи."
  },
  {
    "num": "02",
    "title": "Выработка позиции защиты до допроса",
    "desc": "Определяем целесообразность дачи показаний, использования ст. 51 Конституции РФ и объем раскрываемых сведений."
  },
  {
    "num": "03",
    "title": "Сбор доказательств реальности сделок",
    "desc": "Истребуем выписки по счетам, товарные накладные, переписку в мессенджерах и привлекаем аудиторов/специалистов."
  },
  {
    "num": "04",
    "title": "Защита в следственных органах и суде",
    "desc": "Лично участвуем во всех очных ставках, экспертизах, допросах, судебных заседаниях и прениях сторон."
  }
];
  const pricingTiers: PricingTier[] = [
  {
    "title": "Консультация и аудит договоров",
    "subtitle": "Оценка рисков по ст. 159 УК РФ",
    "price": "от 5 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "правовой анализ спорного договора и переписки",
        "value": "Да"
      },
      {
        "name": "оценка риска возбуждения уголовного дела",
        "value": "Да"
      },
      {
        "name": "рекомендации по линии поведения на опросе",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  },
  {
    "title": "Защита на стадии следствия",
    "subtitle": "Комплексная защита от обвинения",
    "price": "от 40 000 ₽",
    "popular": true,
    "badgeText": "Востребовано",
    "features": [
      {
        "name": "участие во всех следственных действиях",
        "value": "Да"
      },
      {
        "name": "доказывание хозяйственного характера спора",
        "value": "Да"
      },
      {
        "name": "подготовка ходатайств о переквалификации",
        "value": "Да"
      },
      {
        "name": "защита при избрании меры пресечения",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  },
  {
    "title": "Защита в суде первой инстанции",
    "subtitle": "Судебное следствие и прения",
    "price": "от 50 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "детальный анализ обвинительного заключения",
        "value": "Да"
      },
      {
        "name": "допрос свидетелей обвинения и экспертов",
        "value": "Да"
      },
      {
        "name": "приобщение доказательств невиновности",
        "value": "Да"
      },
      {
        "name": "выступление в судебных прениях",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  }
];
  const relatedServices = [
  {
    "title": "Экономические преступления",
    "desc": "Защита предпринимателей и руководства по делам об уклонении от налогов, растрате и коммерческом подкупе.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-ekonomicheskim-prestupleniyam/"
  },
  {
    "title": "Адвокат при задержании и допросе",
    "desc": "Срочный выезд адвоката в рабочее время для участия в неотложных следственных действиях и обысках.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-pri-zaderzhanii-obyske-i-doprose/"
  },
  {
    "title": "Обжалование приговора",
    "desc": "Апелляционное и кассационное обжалование незаконных приговоров по ст. 159 УК РФ в вышестоящих судах.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/obzhalovanie-prigovora/"
  }
];
  const faqItems = [
  {
    "q": "Чем мошенничество отличается от обычного неисполнения обязательств?",
    "a": "Главное отличие — наличие прямого умысла на безвозмездное изъятие чужого имущества, возникшего ДО получения денег. Если лицо намеревалось исполнить договор, но не смогло из-за финансовых трудностей, это гражданско-правовой спор, а не преступление."
  },
  {
    "q": "Могут ли арестовать предпринимателя по ст. 159 УК РФ?",
    "a": "Согласно ч. 1.1 ст. 108 УПК РФ, заключение под стражу не применяется к подозреваемым и обвиняемым в преступлениях, совершенных в сфере предпринимательской деятельности, за исключением строго определенных законом случаев."
  },
  {
    "q": "Что делать, если контрагент угрожает подать заявление в полицию по ст. 159?",
    "a": "Соберите всю первичную документацию (договор, спецификации, акты, платежки, переписку о ходе исполнения), составьте письменный ответ на претензию и проконсультируйтесь с адвокатом до вызова в полицию."
  },
  {
    "q": "Можно ли примириться с потерпевшим по ст. 159 УК РФ?",
    "a": "По преступлениям небольшой и средней тяжести (ч. 1 и ч. 2 ст. 159 УК РФ) возможно прекращение уголовного дела в связи с примирением сторон (ст. 25 УПК РФ) или с назначением судебного штрафа при полном возмещении ущерба."
  }
];

  return (
    <div style={{ backgroundColor: 'var(--color-cream)', minHeight: '100vh' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main id="main-content">
        {/* 1. Хлебные крошки и Hero */}
        <MilitaryHero
          breadcrumbs={
            <nav aria-label="Хлебные крошки" style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginBottom: '16px' }}>
              <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Главная</Link>
              <span>/</span>
              <Link href="/grazhdanam/" style={{ color: 'inherit', textDecoration: 'none' }}>Гражданам</Link>
              <span>/</span>
              <Link href="/grazhdanam/advokat-po-ugolovnym-delam/" style={{ color: 'inherit', textDecoration: 'none' }}>Адвокат по уголовным делам</Link>
              <span>/</span>
              <span style={{ color: '#FFFFFF' }}>Адвокат по мошенничеству</span>
            </nav>
          }
          superTitle="Уголовное право • ст. 159 УК РФ"
          title={
            <span style={{ display: 'block' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                Адвокат по мошенничеству
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                защита по ст. 159 УК РФ
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                в Липецке
              </span>
            </span>
          }
          subtitle="Защита подозреваемых, обвиняемых и свидетелей по делам о мошенничестве. Разграничиваем уголовное преступление и гражданско-правовой спор по договорам. Связь в рабочее время: Пн–Пт с 09:00 до 18:00."
          primaryCtaText="Обсудить ситуацию"
          primaryCtaLink="#form"
          primaryCtaSubtext={
            <span style={{ display: 'block' }}>
              <span style={{ whiteSpace: 'nowrap' }}>Перезвоним вам в течение 15 минут в рабочее время</span>
            </span>
          }
          trustItems={[
            { text: 'Оценим законность возбуждения дела и риски переквалификации' },
            { text: 'Проверим хозяйственный характер сделок, переписку и платежи' },
            { text: 'Защитим права на допросах, очных ставках, следствии и в суде' }
          ]}
          imageUrl="/images/bobkin.jpg"
          imageName="Аркадий Евгеньевич Бобкин"
          imageSubtitle="Куратор практики • Директор, управляющий партнёр ЮК «Де-Юре», более 22 лет следственного опыта"
        />

        {/* 2. Ситуации и встроенный чек-лист */}
        <section className="section bg-white" style={{ padding: '80px 0', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ textAlign: 'left', marginBottom: '40px', maxWidth: '820px' }}>
              <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--color-deep-blue)', marginBottom: '14px', marginTop: 0, lineHeight: 1.2 }}>
                <span style={{ display: "inline-block" }}>В каких ситуациях</span> <br />
                <span style={{ display: "inline-block" }}>требуется защита адвоката</span> <br />
                <span style={{ display: "inline-block" }}>по мошенничеству</span>
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Подключаемся на стадии проверки заявления, расследования или в суде, чтобы предотвратить необоснованное обвинение.
              </p>
            </div>

            {/* Карточки ситуаций */}
            <div className="grid grid-2" style={{ gap: '24px', marginBottom: '36px' }}>
              {situations.map((sit, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--color-cream)',
                    border: '1px solid var(--color-border)',
                    borderLeft: '4px solid var(--color-gold)',
                    padding: '28px 24px',
                    boxShadow: '0 4px 12px rgba(16, 39, 59, 0.03)'
                  }}
                >
                  <h3 style={{ fontSize: '19px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0', lineHeight: 1.35 }}>
                    {sit.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: '0 0 14px 0' }}>
                    {sit.desc}
                  </p>
                  <div style={{ fontSize: '13.5px', color: 'var(--color-primary)', fontWeight: 600, borderTop: '1px dashed rgba(23,55,94,0.15)', paddingTop: '10px' }}>
                    Позиция защиты: {sit.impact}
                  </div>
                </div>
              ))}
            </div>

            {/* Встроенная тёмно-синяя карточка чек-листа */}
            <div style={{
              backgroundColor: 'var(--color-deep-blue)',
              color: '#FFFFFF',
              borderTop: '3px solid var(--color-gold)',
              padding: '40px 36px',
              boxShadow: '0 10px 30px rgba(16, 39, 59, 0.15)',
              marginBottom: '32px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', paddingBottom: '16px', borderBottom: '1px solid rgba(255, 255, 255, 0.15)', marginBottom: '20px' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
                <div>
                  <h3 style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontFamily: 'var(--font-serif)', color: '#FFFFFF', margin: 0, lineHeight: 1.25 }}>
                    Что проверяет адвокат при обвинении по ст. 159 УК РФ
                  </h3>
                </div>
              </div>

              <p style={{ margin: '0 0 28px 0', fontSize: '15px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, maxWidth: '820px' }}>
                Анализируем доказательства следствия и выстраиваем доказательственную базу стороны защиты:
              </p>

              <div className="grid grid-2" style={{ gap: '22px' }}>
                {checkpoints.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <polyline points="9 11 12 14 22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                    <div>
                      <strong style={{ display: 'block', fontSize: '15px', color: '#FFFFFF', marginBottom: '3px', lineHeight: 1.35 }}>
                        {item.title}
                      </strong>
                      <span style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.55 }}>
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <a href="#form" className="btn btn-primary" style={{ display: 'inline-block', padding: '14px 32px' }}>
                Получить консультацию
              </a>
            </div>
          </div>
        </section>

        {/* 3. Куратор и адвокаты */}
        <SpecialistBlock
          title={
            <>
              <span style={{ display: 'block' }}>Стратегию определяет специалист</span>{' '}
              <span style={{ display: 'block' }}>с 22-летним следственным опытом</span>
            </>
          }
          name="Бобкин Аркадий Евгеньевич"
          position={<>Директор, управляющий партнёр ЮК «Де-Юре»,<br />куратор практики уголовного права</>}
          imageUrl="/images/bobkin.jpg"
          imagePosition="50% -75px"
          profileHref="/specialisty/bobkin-arkadiy-evgenevich/"
          profileText="Подробнее об Аркадии Евгеньевиче Бобкине →"
          description={[
            <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block', lineHeight: 1.6 }}>
              Юрист с 1997 года. Более 22 лет работал в следственных подразделениях налоговой полиции и МВД, в том числе следователем по особо важным делам и руководителем Следственной части по расследованию организованной преступной деятельности. Анализирует материалы с учётом внутренней логики расследования, заранее выявляет процессуальные уязвимости следствия и определяет генеральную стратегию защиты.
            </span>,
            <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
                <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
                <span>Анализ материалов проверки и уголовного дела с позиции следственного опыта</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
                <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
                <span>Оценка уголовно-правовых и процессуальных рисков доверителя</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
                <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
                <span>Координация работы адвокатов и привлечённых судебных экспертов</span>
              </li>
            </ul>
          ]}
          buttonText="Обсудить ситуацию с куратором"
          buttonHref="#form"
        />

        {/* 4. Кейсы */}
        <CasesBlock
          title={
            <>
              <span style={{ display: 'block' }}>Примеры дел</span>{' '}
              <span style={{ display: 'block' }}>из практики защиты</span>
            </>
          }
          cases={casesData}
        />

        {/* 5. Процесс */}
        <ProcessBlock
          title={
            <>
              <span style={{ display: 'block' }}>Этапы юридической</span>{' '}
              <span style={{ display: 'block' }}>защиты по делу</span>
            </>
          }
          steps={processSteps}
        />

        {/* 6. Стоимость */}
        <PricingBlock
          title="Стоимость услуг адвоката"
          subtitle="Стоимость определяется категорией дела, стадией, объёмом материалов и срочностью. Точные условия и цена фиксируются в соглашении до начала работы."
          tiers={pricingTiers}
          disclaimer="Точная стоимость и состав работы закрепляются в соглашении. Дополнительные расходы на эксперта, специалиста, командировку, копирование материалов и иные действия заранее согласовываются отдельно, если они необходимы."
        />

        {/* 7. Смежные услуги (3 карточки + ссылка, БЕЗ баннера) */}
        <section className="section bg-white" style={{ padding: '80px 0', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ textAlign: 'left', marginBottom: '40px', maxWidth: '820px' }}>
              <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--color-deep-blue)', marginBottom: '14px', marginTop: 0, lineHeight: 1.2 }}>
                <span style={{ display: "inline-block" }}>Смежные услуги</span> <br />
                <span style={{ display: "inline-block" }}>уголовно-правового</span> <br />
                <span style={{ display: "inline-block" }}>направления</span>
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Если задача выходит за рамки конкретного состава, подключаем другие услуги практики уголовного права.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '24px', marginBottom: '32px' }}>
              {relatedServices.map((srv, idx) => (
                <Link
                  key={idx}
                  href={srv.link}
                  style={{
                    backgroundColor: 'var(--color-cream)',
                    border: '1px solid var(--color-border)',
                    padding: '28px 24px',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 12px rgba(16, 39, 59, 0.03)'
                  }}
                  className="hover-card"
                >
                  <div>
                    <h3 style={{ fontSize: '19px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0', lineHeight: 1.35 }}>
                      {srv.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: '0 0 16px 0' }}>
                      {srv.desc}
                    </p>
                  </div>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    Подробнее →
                  </span>
                </Link>
              ))}
            </div>

            <div style={{ textAlign: 'center' }}>
              <Link
                href="/grazhdanam/advokat-po-ugolovnym-delam/"
                style={{ fontSize: '15px', fontWeight: 600, color: 'var(--color-primary)', textDecoration: 'none' }}
              >
                Смотреть все услуги практики уголовного права →
              </Link>
            </div>
          </div>
        </section>

        {/* 8. FAQ */}
        <FAQBlock
          superTitle="Частые вопросы"
          title={
            <>
              <span style={{ display: 'block' }}>Ответы на</span>{' '}
              <span style={{ display: 'block' }}>частые вопросы</span>
            </>
          }
          subtitle="О процессуальных правах, следственных действиях, доказательствах и рисках"
          faqs={faqItems}
        />

        {/* 9. Финальная форма */}
        <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px', padding: '80px 0' }}>
          <div className="container">
            <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                  <img
                    src="/images/bobkin.jpg"
                    alt="Аркадий Евгеньевич Бобкин"
                    style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--color-gold)' }}
                  />
                  <div>
                    <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 4px 0' }}>
                      Бобкин Аркадий Евгеньевич
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0 }}>
                      Директор, управляющий партнёр ЮК «Де-Юре» • 22 года следственного опыта
                    </p>
                  </div>
                </div>

                <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0 }}>
                  <span style={{ display: 'block' }}>Обсудите уголовное дело</span>{' '}
                  <span style={{ display: 'block' }}>с Аркадием Бобкиным</span>
                </h2>
                <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                  Кратко укажите, что происходит: проверка, вызов, задержание, следствие или суд. В рабочее время свяжемся с вами в течение 15 минут для правовой оценки.
                </p>

                <div style={{ marginTop: 'auto', backgroundColor: 'var(--color-cream)', padding: '20px', border: '1px solid var(--color-border)' }}>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-deep-blue)', marginBottom: '6px' }}>
                    Адрес офиса:
                  </div>
                  <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    Липецк, ул. Советская, д. 35, оф. 213 (приём по предварительной записи)
                  </div>
                </div>
              </div>

              <div>
                <ContactsForm
                  title=""
                  subtitle=""
                  buttonText="Отправить обращение"
                  hiddenFields={[{ name: 'page', value: '/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-moshennichestvu/' }]}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
