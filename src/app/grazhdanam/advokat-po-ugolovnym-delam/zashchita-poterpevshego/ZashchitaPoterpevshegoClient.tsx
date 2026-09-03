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

export default function ZashchitaPoterpevshegoClient() {
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
            "name": "Защита потерпевшего",
            "item": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/zashchita-poterpevshego/"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Защита потерпевшего в Липецке",
        "description": "Добьёмся возбуждения уголовного дела, признания потерпевшим, ареста имущества обвиняемого и полного возмещения материального и морального вреда. Представим ваши интересы на следствии, в суде и на стадии исполнения приговора.",
        "url": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/zashchita-poterpevshego/",
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
    "name": "Имеет ли право потерпевший на бесплатного адвоката?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Государство предоставляет бесплатного защитника только подозреваемым и обвиняемым. Потерпевший привлекает адвоката (представителя) по соглашению, однако все расходы на оплату услуг адвоката взыскиваются с осужденного по решению суда."
    }
  },
  {
    "@type": "Question",
    "name": "Облагается ли гражданский иск в уголовном деле госпошлиной?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Нет, в силу части 2 статьи 44 УПК РФ гражданский истец при предъявлении иска в уголовном деле освобождается от уплаты государственной пошлины независимо от суммы иска."
    }
  },
  {
    "@type": "Question",
    "name": "Что делать, если виновник скрывает свое имущество?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Адвокат подает мотивированное ходатайство следователю о наложении ареста на имущество подозреваемого в порядке ст. 115 УПК РФ, а также направляет адвокатские запросы в Росреестр, ГИБДД и банки."
    }
  },
  {
    "@type": "Question",
    "name": "Может ли потерпевший возражать против УДО осужденного?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Да, потерпевший извещается судом о рассмотрении ходатайства об УДО и имеет право направить в суд письменные возражения или лично выступить против освобождения, особенно если причиненный вред не был возмещен."
    }
  }
]
      }
    ]
  };

  const situations = [
  {
    "tag": "Отказ в возбуждении",
    "title": "Полиция вынесла отказ в возбуждении уголовного дела",
    "desc": "Анализ отказного материала, выявление непроверенных фактов и подача жалобы на незаконное решение."
  },
  {
    "tag": "Затягивание следствия",
    "title": "Волокита и бездействие органов следствия",
    "desc": "Подача ходатайств о проведении конкретных следственных действий, допросов свидетелей и экспертиз."
  },
  {
    "tag": "Гражданский иск",
    "title": "Подготовка гражданского иска о возмещении ущерба",
    "desc": "Расчёт прямого материального вреда, расходов на лечение, восстановление и компенсации морального вреда."
  },
  {
    "tag": "Арест активов",
    "title": "Наложение ареста на имущество виновного лица (ст. 115 УПК РФ)",
    "desc": "Розыск недвижимости, транспорта и счетов обвиняемого для гарантированного исполнения приговора."
  },
  {
    "tag": "Судебный процесс",
    "title": "Представительство интересов потерпевшего в суде",
    "desc": "Участие в допросах подсудимого, прениях сторон, возражения против чрезмерно мягкого наказания или УДО."
  },
  {
    "tag": "Преступления против личности",
    "title": "Потерпевшие от насильственных преступлений и ДТП",
    "desc": "Комплексная защита прав пострадавших и семей погибших при ДТП, причинении вреда здоровью и жизни."
  }
];
  const roles = [
  {
    "role": "Потерпевший гражданин",
    "task": "Личное сопровождение адвокатом на всех допросах, очных ставках и в судебных заседаниях.",
    "btnText": "Помощь потерпевшему",
    "btnHref": "#form"
  },
  {
    "role": "Семья погибшего лица",
    "task": "Признание потерпевшими близких родственников, взыскание расходов на погребение и морального вреда.",
    "btnText": "Помощь семье",
    "btnHref": "#form"
  },
  {
    "role": "Юридическое лицо / Бизнес",
    "task": "Представительство интересов компании, признанной потерпевшей от мошенничества или растраты.",
    "btnText": "Защита бизнеса",
    "btnHref": "#form"
  }
];
  const scope = {
  "included": [
    "Составление заявления о преступлении и жалоб на бездействие следственных органов",
    "Участие адвоката во всех следственных действиях с участием потерпевшего",
    "Подготовка и подача гражданского иска в рамках уголовного дела",
    "Представительство в судебных заседаниях первой и вышестоящих инстанций"
  ],
  "extra": [
    "Розыск скрытого имущества и счетов обвиняемого через адвокатские запросы",
    "Сопровождение исполнительного производства по взысканию сумм после приговора",
    "Обжалование решений об условно-досрочном освобождении осужденного лица"
  ]
};
  const matrix = {
  "title": "Права потерпевшего и реальный процессуальный контроль",
  "subtitle": "Потерпевший является полноправной стороной обвинения и обладает широким перечнем законных прав:",
  "items": [
    {
      "title": "Право знать о предъявленном обвинении",
      "desc": "Следователь обязан ознакомить потерпевшего с постановлением о привлечении лица в качестве обвиняемого."
    },
    {
      "title": "Право заявлять ходатайства и отводы",
      "desc": "Потерпевший вправе требовать проведения судебных экспертиз, вызова свидетелей и приобщения доказательств."
    },
    {
      "title": "Гражданский иск без госпошлины",
      "desc": "Гражданский иск в уголовном деле освобождается от уплаты государственной пошлины (ст. 44 УПК РФ)."
    },
    {
      "title": "Ознакомление со всеми материалами дела",
      "desc": "По окончании следствия потерпевший знакомится со всеми томами уголовного дела (ст. 216 УПК РФ)."
    },
    {
      "title": "Право выступать в судебных прениях",
      "desc": "Потерпевший и его представитель выступают в прениях и высказывают мнение о строгом наказании виновного."
    },
    {
      "title": "Право обжаловать приговор суда",
      "desc": "Потерпевший имеет безусловное право подать апелляционную или кассационную жалобу на мягкость приговора."
    }
  ]
};
  const routes = [
  {
    "title": "Возбуждение уголовного дела и признание потерпевшим",
    "desc": "Отмена незаконных отказных постановлений и добивание официального статуса потерпевшего."
  },
  {
    "title": "Арест имущества и обеспечение гражданского иска",
    "desc": "Блокировка счетов, транспорта и недвижимости обвиняемого до вынесения приговора."
  },
  {
    "title": "Взыскание максимальной компенсации вреда в суде",
    "desc": "Взыскание материального ущерба, расходов на лечение, адвоката и компенсации морального вреда."
  }
];
  const casesData: CaseData[] = [
  {
    "category": "Отмена отказа в возбуждении",
    "title": "Отмена 3 постановлений об отказе и возбуждение уголовного дела по ст. 159",
    "problem": "Полиция в течение года отказывала гражданину в возбуждении дела по факту хищения 3,8 млн рублей.",
    "action": "Изучили отказные материалы, подготовили жалобу прокурору области с анализом банковских проводок мошенников.",
    "result": "Отказ отменен, возбуждено уголовное дело по ч. 4 ст. 159 УК РФ, на имущество обвиняемого наложен арест."
  },
  {
    "category": "ст. 264 УК РФ (ДТП)",
    "title": "Взыскание 2,5 млн рублей компенсации морального вреда в пользу семьи погибшего",
    "problem": "В результате ДТП погиб пешеход. Виновник аварии предлагал минимальную компенсацию в 200 000 рублей.",
    "action": "Представили интересы родственников в суде, доказали грубые нарушения ПДД и заявили гражданский иск.",
    "result": "Суд удовлетворил иск потерпевших в полном объёме, взыскав 2 500 000 рублей морального вреда."
  },
  {
    "category": "ст. 115 УПК РФ (Арест имущества)",
    "title": "Обеспечение возмещения ущерба через арест элитного автомобиля обвиняемого",
    "problem": "Обвиняемый в присвоении средств пытался переоформить имущество на родственников до суда.",
    "action": "Подали ходатайство следователю и добились судебного ареста автомобиля стоимостью 6 млн рублей.",
    "result": "Имущество сохранено и после вступления приговора в силу реализовано в счет погашения ущерба потерпевшему."
  }
];
  const processSteps: ProcessStep[] = [
  {
    "num": "01",
    "title": "Анализ ситуации и подача заявления",
    "desc": "Формулируем юридически грамотное заявление о преступлении с приложением доказательств."
  },
  {
    "num": "02",
    "title": "Контроль доследственной проверки",
    "desc": "Участие в опросах, ходатайства об изъятии видеозаписей и обжалование волокиты."
  },
  {
    "num": "03",
    "title": "Подготовка гражданского иска и арест активов",
    "desc": "Расчет всех видов ущерба и ходатайство о наложении ареста на имущество обвиняемого."
  },
  {
    "num": "04",
    "title": "Судебное представительство и исполнение",
    "desc": "Защита прав потерпевшего в суде, прениях и сопровождение взыскания через приставов."
  }
];
  const pricingTiers: PricingTier[] = [
  {
    "title": "Обжалование отказа в возбуждении дела",
    "subtitle": "Жалоба прокурору или в суд (ст. 124, 125)",
    "price": "от 15 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "изучение отказного материала проверки",
        "value": "Да"
      },
      {
        "name": "составление мотивированной жалобы прокурору/в суд",
        "value": "Да"
      },
      {
        "name": "участие в судебном заседании по ст. 125 УПК РФ",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  },
  {
    "title": "Представительство на стадии следствия",
    "subtitle": "Сопровождение потерпевшего в СК/МВД",
    "price": "от 40 000 ₽",
    "popular": true,
    "badgeText": "Востребовано",
    "features": [
      {
        "name": "участие во всех следственных действиях",
        "value": "Да"
      },
      {
        "name": "подготовка и подача гражданского иска",
        "value": "Да"
      },
      {
        "name": "ходатайства о наложении ареста на имущество",
        "value": "Да"
      },
      {
        "name": "ознакомление со всеми материалами дела",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  },
  {
    "title": "Представительство потерпевшего в суде",
    "subtitle": "Судебный процесс и взыскание вреда",
    "price": "от 40 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "поддержание обвинения и гражданского иска в суде",
        "value": "Да"
      },
      {
        "name": "допрос подсудимого, экспертов и свидетелей",
        "value": "Да"
      },
      {
        "name": "выступление в судебных прениях",
        "value": "Да"
      },
      {
        "name": "получение исполнительного листа",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  }
];
  const docsAndDeadlines = {
  "docs": [
    "талон-уведомление о принятии заявления о преступлении;",
    "постановление о признании потерпевшим и гражданским истцом;",
    "постановление об отказе в возбуждении уголовного дела (при обжаловании);",
    "медицинские документы, чеки на лекарства, договоры на лечение и реабилитацию;",
    "документы, подтверждающие стоимость похищенного или поврежденного имущества."
  ],
  "deadlines": "Жалоба прокурору в порядке ст. 124 УПК РФ рассматривается в течение 3 суток (может быть продлен до 10 суток). Жалоба в суд в порядке ст. 125 УПК РФ рассматривается в течение 5 суток со дня поступления. Срок апелляционного обжалования приговора потерпевшим — 15 суток."
};
  const relatedServices = [
  {
    "title": "Адвокат по уголовным делам (главный раздел)",
    "desc": "Полный перечень услуг уголовной практики ЮК «Де-Юре».",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/"
  },
  {
    "title": "Адвокат по ДТП с пострадавшими (ст. 264)",
    "desc": "Представительство пострадавших в автоавариях и семей погибших.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-dtp-s-postradavshimi/"
  },
  {
    "title": "Обжалование приговора",
    "desc": "Апелляционное обжалование чрезмерно мягких судебных приговоров.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/obzhalovanie-prigovora/"
  }
];
  const faqItems = [
  {
    "q": "Имеет ли право потерпевший на бесплатного адвоката?",
    "a": "Государство предоставляет бесплатного защитника только подозреваемым и обвиняемым. Потерпевший привлекает адвоката (представителя) по соглашению, однако все расходы на оплату услуг адвоката взыскиваются с осужденного по решению суда."
  },
  {
    "q": "Облагается ли гражданский иск в уголовном деле госпошлиной?",
    "a": "Нет, в силу части 2 статьи 44 УПК РФ гражданский истец при предъявлении иска в уголовном деле освобождается от уплаты государственной пошлины независимо от суммы иска."
  },
  {
    "q": "Что делать, если виновник скрывает свое имущество?",
    "a": "Адвокат подает мотивированное ходатайство следователю о наложении ареста на имущество подозреваемого в порядке ст. 115 УПК РФ, а также направляет адвокатские запросы в Росреестр, ГИБДД и банки."
  },
  {
    "q": "Может ли потерпевший возражать против УДО осужденного?",
    "a": "Да, потерпевший извещается судом о рассмотрении ходатайства об УДО и имеет право направить в суд письменные возражения или лично выступить против освобождения, особенно если причиненный вред не был возмещен."
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
            <>
              <Link href="/">Главная</Link><span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
              <Link href="/grazhdanam/">Гражданам</Link><span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
              <Link href="/grazhdanam/advokat-po-ugolovnym-delam/">Адвокат по уголовным делам</Link><span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
              <span style={{ color: 'var(--color-text-main)' }}>Защита потерпевшего</span>
            </>
          }
          superTitle="Представительство потерпевших • Липецк и область"
          title={
            <span style={{ display: 'block' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                Адвокат для потерпевшего
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                по уголовному делу
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                в Липецке
              </span>
            </span>
          }
          subtitle="Добьёмся возбуждения уголовного дела, признания потерпевшим, ареста имущества обвиняемого и полного возмещения материального и морального вреда. Представим ваши интересы на следствии, в суде и на стадии исполнения приговора."
          primaryCtaText="Обсудить ситуацию"
          primaryCtaLink="#form"
          primaryCtaAnalytics="click_zashchita_poterpevshego_hero_cta"
          primaryCtaSubtext={
            <span style={{ display: 'block' }}>
              <span style={{ whiteSpace: 'nowrap' }}>Перезвоним вам в течение 15 минут в рабочее время</span>
            </span>
          }
          trustItems={[
            { text: 'Стратегию определяет Аркадий Бобкин — 22 года следственного опыта' },
            { text: 'Защиту и процессуальные действия ведут адвокаты коллегии' },
            { text: 'Фиксируем состав услуг и условия в соглашении до начала работы' }
          ]}
          imageUrl="/images/bobkin.jpg"
          imageObjectPosition="50% -75px"
          imageName="Аркадий Евгеньевич Бобкин"
          imageSubtitle="Куратор практики • Директор, управляющий партнёр ЮК «Де-Юре», более 22 лет следственного опыта"
        />

        {/* 2. Срочный блок: Если вызывают, задержали или проводят обыск */}
        <section style={{ padding: '40px 0', background: 'var(--color-deep-blue)', color: '#FFFFFF', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="container">
            <div style={{ maxWidth: '840px', marginBottom: '24px' }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(22px, 3vw, 28px)', color: '#FFFFFF', margin: '0 0 10px 0', lineHeight: 1.3 }}>
                Срочная помощь потерпевшим: фиксация следов и отмена незаконных отказов
              </h2>
              <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, margin: 0 }}>
                Полиция часто выносит необоснованные постановления об отказе в возбуждении дела. Адвокат добьётся отмены отказа через прокуратуру или суд.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '20px' }}>
              {[{"name":"Полиция отказывает в возбуждении","what":"Подача мотивированной жалобы прокурору (ст. 124 УПК РФ) или в суд (ст. 125 УПК РФ).","btnText":"Обжаловать отказ","btnHref":"#form"},{"name":"Угрозы и давление со стороны обвиняемых","what":"Заявление мер государственной защиты потерпевшего и ходатайство об аресте обвиняемого.","btnText":"Защита от угроз","btnHref":"#form"},{"name":"Риск сокрытия имущества преступником","what":"Срочное ходатайство следователю о наложении ареста на имущество и счета обвиняемого.","btnText":"Арест имущества","btnHref":"#form"}].map((evt, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderTop: '3px solid var(--color-gold)',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: '16px', fontFamily: 'var(--font-serif)', color: '#FFFFFF', margin: '0 0 8px 0' }}>
                      {evt.name}
                    </h3>
                    <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.5, margin: '0 0 14px 0' }}>
                      {evt.what}
                    </p>
                  </div>
                  <a
                    href={evt.btnHref}
                    className="btn white-btn-custom"
                    style={{ fontSize: '13px', padding: '8px 16px', textAlign: 'center', display: 'block' }}
                  >
                    {evt.btnText}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. С какими ситуациями мы помогаем гражданам (ТИПОВОЙ ШАБЛОН) */}
        <section className="section bg-white" style={{ padding: '80px 0' }}>
          <div className="container">
            <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
              <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>С какими ситуациями</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>мы помогаем гражданам</span>
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
                Оценим фактические обстоятельства, определим срочность и подскажем правильный порядок дальнейших действий.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '28px' }}>
              {situations.map((item, i) => (
                <div
                  key={i}
                  className="hover-lift"
                  style={{
                    padding: '36px 30px',
                    background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                    border: '1px solid var(--color-border)',
                    borderTop: '3px solid var(--color-primary)',
                    boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.45s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease'
                  }}
                >
                  <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.06, pointerEvents: 'none' }}>
                    <svg width="100" height="100" viewBox="0 0 24 24" fill="var(--color-deep-blue)">
                      <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                  </div>

                  {item.tag && (
                    <div style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      color: 'var(--color-gold)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginBottom: '14px',
                      background: 'rgba(193, 160, 102, 0.1)',
                      padding: '4px 10px',
                      alignSelf: 'flex-start',
                      position: 'relative',
                      zIndex: 1
                    }}>
                      {item.tag}
                    </div>
                  )}
                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '17px',
                    fontWeight: 600,
                    color: 'var(--color-deep-blue)',
                    margin: '0 0 12px 0',
                    lineHeight: 1.35,
                    minHeight: '44px',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    color: 'var(--color-text-secondary)',
                    fontSize: '14px',
                    lineHeight: 1.6,
                    margin: 0,
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Маршрутизатор по роли */}
        <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)', borderTop: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
              <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Выберите свой статус</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>в текущей ситуации</span>
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Задачи и порядок взаимодействия существенно отличаются для обвиняемых, их родственников и потерпевших.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '24px' }}>
              {roles.map((r, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--color-border)',
                    borderTop: '3px solid var(--color-gold)',
                    padding: '28px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 16px rgba(16, 39, 59, 0.04)'
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>
                      {r.role}
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: '0 0 20px 0' }}>
                      {r.task}
                    </p>
                  </div>
                  <a href={r.btnHref} className="btn btn-primary" style={{ fontSize: '14px', padding: '10px 20px', textAlign: 'center' }}>
                    {r.btnText}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Состав и границы услуги */}
        <section className="section bg-white" style={{ padding: '80px 0', borderTop: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ maxWidth: '780px', marginBottom: '40px', textAlign: 'left' }}>
              <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Что входит в работу,</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>а что оценивается отдельно</span>
              </h2>
            </div>

            <div className="grid grid-2" style={{ gap: '32px' }}>
              <div style={{ backgroundColor: 'var(--color-cream)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', padding: '32px 28px' }}>
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 16px 0' }}>
                  Входит в согласованный этап:
                </h3>
                <ul style={{ margin: 0, paddingLeft: '18px', color: 'var(--color-text-secondary)', fontSize: '14px', lineHeight: 1.7 }}>
                  {scope.included.map((inc, i) => (
                    <li key={i} style={{ marginBottom: '8px' }}>{inc}</li>
                  ))}
                </ul>
              </div>

              <div style={{ backgroundColor: 'var(--color-cream)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-gold)', padding: '32px 28px' }}>
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 16px 0' }}>
                  Требует отдельного согласования:
                </h3>
                <ul style={{ margin: 0, paddingLeft: '18px', color: 'var(--color-text-secondary)', fontSize: '14px', lineHeight: 1.7 }}>
                  {scope.extra.map((ext, i) => (
                    <li key={i} style={{ marginBottom: '8px' }}>{ext}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Аналитическая матрица / ключевые критерии разбора */}
        <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)', borderTop: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ maxWidth: '820px', marginBottom: '48px', textAlign: 'left' }}>
              <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
                {matrix.title}
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                {matrix.subtitle}
              </p>
            </div>

            <div className="grid grid-2" style={{ gap: '24px' }}>
              {matrix.items.map((it, idx) => (
                <div
                  key={idx}
                  className="hover-lift"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--color-border)',
                    borderLeft: '4px solid var(--color-gold)',
                    padding: '24px 20px',
                    boxShadow: '0 2px 10px rgba(16, 39, 59, 0.03)'
                  }}
                >
                  <h3 style={{ fontSize: '16.5px', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>
                    {it.title}
                  </h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    {it.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Возможные правовые маршруты */}
        <section className="section bg-white" style={{ padding: '80px 0', borderTop: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ maxWidth: '780px', marginBottom: '40px', textAlign: 'left' }}>
              <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Возможные правовые</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>маршруты защиты</span>
              </h2>
            </div>

            <div className="grid grid-3" style={{ gap: '24px' }}>
              {routes.map((rt, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--color-cream)',
                    border: '1px solid var(--color-border)',
                    borderTop: '3px solid var(--color-deep-blue)',
                    padding: '28px 22px'
                  }}
                >
                  <h3 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>
                    {rt.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {rt.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Куратор практики */}
        <SpecialistBlock
          title="Куратор практики"
          name="Бобкин Аркадий Евгеньевич"
          position={<>Директор, управляющий партнёр ЮК «Де-Юре»,<br />куратор практики уголовного права</>}
          imageUrl="/images/bobkin.jpg"
          imagePosition="50% -75px"
          profileHref="/specialisty/bobkin-arkadiy-evgenevich/"
          profileText="Подробнее об Аркадии Евгеньевиче Бобкине →"
          description={[
            <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block', lineHeight: 1.6 }}>
              Юрист с 1997 года. Более 22 лет работы в следственных подразделениях налоговой полиции и МВД (следователь по ОВД, начальник следственной части). Определяет генеральную стратегию защиты, проверяет процессуальные уязвимости следствия и координирует работу профильных адвокатов.
            </span>,
            <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
                <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
                <span>Анализ материалов проверки и доказательств обвинения</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
                <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
                <span>Непосредственную защиту ведут адвокаты Коллегии адвокатов «Де-Юре»</span>
              </li>
            </ul>
          ]}
          buttonText="Обсудить ситуацию с куратором"
          buttonHref="#form"
        />

        {/* 9. Примеры из практики */}
        <CasesBlock
          title="Примеры дел из практики"
          showAllLink="/praktika/"
          showAllText="Смотреть все дела"
          showDemoWarning={true}
          cases={casesData}
        />

        {/* 10. Как строится работа */}
        <ProcessBlock
          title="Как строится работа по делу"
          subtitle="Последовательный процесс защиты с фиксацией каждого шага"
          steps={processSteps}
        />

        {/* 11. Стоимость помощи */}
        <PricingBlock
          title="Стоимость помощи"
          subtitle="Фиксируем состав услуг и условия в договоре до начала работы."
          tiers={pricingTiers}
          disclaimer="Стоимость определяется после изучения материалов и обстоятельств дела. Вознаграждение исполнителя не зависит от исхода дела и не включает судебные пошлины и расходы на привлечённых специалистов."
        />

        {/* 12. Документы и сроки */}
        <section className="section bg-white" style={{ padding: '80px 0', borderTop: '1px solid var(--color-border)' }}>
          <div className="container">
            <div className="grid grid-2" style={{ gap: '36px' }}>
              <div style={{ backgroundColor: 'var(--color-cream)', border: '1px solid var(--color-border)', padding: '32px 28px' }}>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0' }}>
                  Что подготовить для консультации:
                </h3>
                <ul style={{ margin: 0, paddingLeft: '18px', color: 'var(--color-text-secondary)', fontSize: '14px', lineHeight: 1.7 }}>
                  {docsAndDeadlines.docs.map((doc, i) => (
                    <li key={i}>{doc}</li>
                  ))}
                </ul>
              </div>

              <div style={{ backgroundColor: 'var(--color-deep-blue)', color: '#FFFFFF', padding: '32px 28px', borderTop: '3px solid var(--color-gold)' }}>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: '#FFFFFF', margin: '0 0 14px 0' }}>
                  Процессуальные сроки и срочность:
                </h3>
                <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.65, margin: 0 }}>
                  {docsAndDeadlines.deadlines}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 13. Смежные услуги направления */}
        <section id="directions" className="section bg-light" style={{ padding: '64px 0', background: 'var(--gradient-cream)', borderTop: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ maxWidth: '780px', marginBottom: '32px', textAlign: 'left' }}>
              <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '14px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Смежные услуги направления</span>
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Если ситуация затрагивает другие составы или процедуры, подключаем смежные услуги практики уголовного права.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '20px' }}>
              {relatedServices.map((dir, i) => (
                <Link key={i} href={dir.link} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                  <div
                    className="card related-service-card hover-lift"
                    style={{
                      height: '100%',
                      minHeight: '180px',
                      padding: '24px',
                      background: 'var(--color-white)',
                      border: '1px solid var(--color-border)',
                      borderTop: '3px solid var(--color-primary)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      cursor: 'pointer'
                    }}
                  >
                    <div>
                      <h3 style={{ margin: '0 0 10px 0', fontSize: '17px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', lineHeight: 1.35 }}>
                        {dir.title}
                      </h3>
                      <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                        {dir.desc}
                      </p>
                    </div>
                    <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '13.5px', fontWeight: 600, marginTop: '16px' }}>
                      <span>Подробнее →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '36px' }}>
              <Link
                href="/grazhdanam/advokat-po-ugolovnym-delam/"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--color-primary)',
                  fontSize: '15px',
                  fontWeight: 600,
                  textDecoration: 'none'
                }}
              >
                <span>Смотреть все услуги практики уголовного права</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* 14. FAQ */}
        <FAQBlock
          superTitle="Вопросы и ответы"
          title=<><span>Ответы на частые</span> <br /><span>вопросы</span></>
          subtitle="Разбираем процедурные нюансы, доказательства и права участников"
          ctaText="Задать свой вопрос"
          ctaLink="#form"
          faqs={faqItems}
        />

        {/* 15. Финальная форма */}
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
                  <span style={{ display: 'block' }}>Обсудите ситуацию</span>{' '}
                  <span style={{ display: 'block' }}>с адвокатом</span>
                </h2>
                <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                  Кратко укажите, что происходит и какие документы есть на руках. В рабочее время свяжемся с вами в течение 15 минут.
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
                  hiddenFields={[{ name: 'page', value: '/grazhdanam/advokat-po-ugolovnym-delam/zashchita-poterpevshego/' }]}
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
