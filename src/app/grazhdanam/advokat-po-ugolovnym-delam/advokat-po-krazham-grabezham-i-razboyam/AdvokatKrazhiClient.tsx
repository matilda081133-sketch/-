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

export default function AdvokatKrazhiClient() {
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
            "name": "Кражи, грабежи и разбои",
            "item": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-krazham-grabezham-i-razboyam/"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Кражи, грабежи и разбои в Липецке",
        "description": "Подключимся на стадии проверки, следствия или суда. Проверим разграничение открытого и тайного хищения, размер ущерба, квалифицирующие признаки группы и проникновения, оспорим доказательства и проведём защиту.",
        "url": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-krazham-grabezham-i-razboyam/",
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
    "name": "Чем грабёж отличается от разбоя?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Грабёж (ст. 161) — открытое хищение без применения опасного для жизни насилия. Разбой (ст. 162) — нападение с применением насилия, опасного для жизни/здоровья, либо с угрозой его применения. Наказание по ст. 162 существенно строже."
    }
  },
  {
    "@type": "Question",
    "name": "Можно ли примириться с потерпевшим по ст. 158 УК РФ?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Да, если кража относится к категории небольшой или средней тяжести (ч. 1 или ч. 2 ст. 158), обвиняемый привлекается впервые и полностью возместил ущерб потерпевшему (ст. 25 УПК РФ)."
    }
  },
  {
    "@type": "Question",
    "name": "Как определяется стоимость похищенного имущества?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Следствие обязано устанавливать реальную рыночную стоимость имущества на момент хищения с учётом износа, а не по первоначальным чекам покупки."
    }
  },
  {
    "@type": "Question",
    "name": "Что считается проникновением в жилище?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Проникновение — незаконное вторжение в жилое помещение против воли проживающих лиц. Если вход был свободным или по приглашению, данный признак подлежит исключению."
    }
  }
]
      }
    ]
  };

  const situations = [
  {
    "tag": "Тайное хищение",
    "title": "Кража (ст. 158 УК РФ)",
    "desc": "Проверим тайность изъятия имущества, стоимость похищенного без наценок и отсутствие признаков применения насилия."
  },
  {
    "tag": "Открытое хищение",
    "title": "Грабёж (ст. 161 УК РФ)",
    "desc": "Оценим, сознавал ли подозреваемый открытый характер действий и применялось ли насилие, не опасное для жизни."
  },
  {
    "tag": "С применением оружия",
    "title": "Разбой (ст. 162 УК РФ)",
    "desc": "Проверим реальность угрозы, признаки применения предметов в качестве оружия и направленность умысла."
  },
  {
    "tag": "Проникновение в жилище",
    "title": "Вменяют незаконное проникновение",
    "desc": "Проверим законность доступа в помещение, характер объекта (жилое или нежилое) и основания нахождения."
  },
  {
    "tag": "Сговор группы",
    "title": "Вменяют предварительный сговор",
    "desc": "Разграничим роли исполнителей, пособников и лиц, случайно оказавшихся на месте происшествия."
  },
  {
    "tag": "Завышенная оценка",
    "title": "Спор о размере причиненного ущерба",
    "desc": "Назначим товароведческую экспертизу с учётом фактического износа и реальной рыночной стоимости имущества."
  }
];
  const roles = [
  {
    "role": "Подозреваемый / Обвиняемый",
    "task": "Сформировать согласованную позицию, проверить допустимость улик и добиваться переквалификации.",
    "btnText": "Срочная защита",
    "btnHref": "#form"
  },
  {
    "role": "Родственник задержанного",
    "task": "Установить подразделение полиции, статью и организовать участие независимого адвоката по соглашению.",
    "btnText": "Помочь близкому",
    "btnHref": "#form"
  },
  {
    "role": "Потерпевший от хищения",
    "task": "Добиться возбуждения дела, признания потерпевшим, ареста имущества преступника и возмещения ущерба.",
    "btnText": "Защитить потерпевшего",
    "btnHref": "/grazhdanam/advokat-po-ugolovnym-delam/zashchita-poterpevshego/"
  }
];
  const scope = {
  "included": [
    "Изучение протоколов следственных действий, допросов и видеозаписей",
    "Участие в опознаниях, проверках показаний на месте и следственных экспериментах",
    "Подача ходатайств о проведении товароведческих и криминалистических экспертиз",
    "Защита в суде первой инстанции и участие в прениях"
  ],
  "extra": [
    "Срочные ночные выезды и защита в следственных изоляторах других регионов",
    "Привлечение независимых товароведов и экспертов-оценщиков",
    "Апелляционное обжалование приговора в суде субъекта РФ"
  ]
};
  const matrix = {
  "title": "Квалификационная матрица: Кража vs Грабёж vs Разбой",
  "subtitle": "Правильное разграничение способа изъятия и характера примененного насилия принципиально меняет категорию преступления:",
  "items": [
    {
      "title": "Способ изъятия имущества",
      "desc": "Кража совершается тайно от окружающих; грабёж — открыто; разбой — нападение с целью хищения."
    },
    {
      "title": "Характер примененного насилия",
      "desc": "Кража — без насилия; грабёж — насилие без опасности для жизни/здоровья; разбой — опасное для жизни насилие."
    },
    {
      "title": "Момент окончания преступления",
      "desc": "Кража и грабёж окончены при получении возможности распорядиться; разбой окончен с момента самого нападения."
    },
    {
      "title": "Использование предметов как оружия",
      "desc": "Влияет на вменение ч. 2 ст. 162 УК РФ; необходимо установить реальность использования и свойства предмета."
    },
    {
      "title": "Размер причиненного ущерба",
      "desc": "Значительный (от 5 тыс. руб.), крупный (от 250 тыс. руб.), особо крупный (от 1 млн руб.). Требует строгой экспертизы."
    },
    {
      "title": "Предварительный сговор группы",
      "desc": "Требует доказанности договоренности до начала действий; эксцесс исполнителя исключает ответственность группы."
    }
  ]
};
  const routes = [
  {
    "title": "Переквалификация на менее тяжкую статью",
    "desc": "Доказываем отсутствие признаков разбоя или насилия и добиваемся перевода обвинения на кражу (ст. 158 УК РФ)."
  },
  {
    "title": "Прекращение дела в связи с примирением",
    "desc": "По делам о кражах небольшой и средней тяжести при возмещении вреда добиваемся закрытия дела в суде (ст. 25 УПК РФ)."
  },
  {
    "title": "Исключение квалифицирующих признаков",
    "desc": "Исключаем незаконное проникновение, сговор группы и снижаем размер ущерба на основании экспертиз."
  }
];
  const casesData: CaseData[] = [
  {
    "category": "ст. 162 → ст. 158 ч. 2 УК РФ",
    "title": "Переквалификация обвинения с разбоя на кражу",
    "problem": "Следствие утверждало, что клиент угрожал ножом при изъятии ценностей на улице.",
    "action": "Истребовали записи видеокамер, доказали отсутствие угроз и нахождения ножа у клиента в момент инцидента.",
    "result": "Суд переквалифицировал обвинение на ч. 2 ст. 158 УК РФ, назначено наказание, не связанное с лишением свободы."
  },
  {
    "category": "ст. 158 ч. 2 УК РФ",
    "title": "Прекращение дела о краже в суде за примирением сторон",
    "problem": "Клиент впервые обвинялся в тайном хищении строительного инструмента стоимостью 45 000 рублей.",
    "action": "Возместили ущерб потерпевшему, подготовили мировое соглашение и заявление потерпевшего об отсутствии претензий.",
    "result": "Суд прекратил уголовное дело на основании ст. 25 УПК РФ, судимость отсутствует."
  },
  {
    "category": "ст. 161 ч. 2 УК РФ",
    "title": "Исключение квалифицирующего признака проникновения в жилище",
    "problem": "Клиенту вменяли грабёж с проникновением в дачный дом, что утяжеляло категорию преступления.",
    "action": "Доказали, что постройка являлась хозяйственным строением без статуса жилья, а доступ был свободным.",
    "result": "Квалифицирующий признак исключён, срок наказания снижен ниже низшего предела."
  }
];
  const processSteps: ProcessStep[] = [
  {
    "num": "01",
    "title": "Анализ протоколов и задержания",
    "desc": "Изучаем материалы первичной фиксации, основания задержания и досмотра."
  },
  {
    "num": "02",
    "title": "Участие в допросах и очных ставках",
    "desc": "Защищаем права доверителя при проведении всех процессуальных мероприятий."
  },
  {
    "num": "03",
    "title": "Товароведческая и видеоэкспертиза",
    "desc": "Назначаем независимую оценку имущества и детальный покадровый анализ видеозаписей."
  },
  {
    "num": "04",
    "title": "Защита в суде и прения",
    "desc": "Оспариваем недоказанные обвинения, заявляем ходатайства о примирении или переквалификации."
  }
];
  const pricingTiers: PricingTier[] = [
  {
    "title": "Защита при следственном действии",
    "subtitle": "Опознание, допрос, очная ставка",
    "price": "от 15 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "подготовка правовой позиции",
        "value": "Да"
      },
      {
        "name": "личное участие адвоката",
        "value": "Да"
      },
      {
        "name": "замечания в протокол следственного действия",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  },
  {
    "title": "Защита на предварительном следствии",
    "subtitle": "Сопровождение уголовного дела под ключ",
    "price": "от 45 000 ₽",
    "popular": true,
    "badgeText": "Востребовано",
    "features": [
      {
        "name": "полное сопровождение стадии следствия",
        "value": "Да"
      },
      {
        "name": "товароведческая экспертиза ущерба",
        "value": "Да"
      },
      {
        "name": "ходатайства о переквалификации",
        "value": "Да"
      },
      {
        "name": "ознакомление со всеми томами дела",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  },
  {
    "title": "Защита в суде первой инстанции",
    "subtitle": "Судебный процесс и участие в прениях",
    "price": "от 45 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "исследование доказательств и видеозаписей",
        "value": "Да"
      },
      {
        "name": "допрос свидетелей и потерпевших",
        "value": "Да"
      },
      {
        "name": "переговоры о примирении и возмещении",
        "value": "Да"
      },
      {
        "name": "выступление в прениях сторон",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  }
];
  const docsAndDeadlines = {
  "docs": [
    "протокол задержания, личного досмотра и изъятия вещей;",
    "протокол осмотра места происшествия и выемки;",
    "постановление о возбуждении уголовного дела;",
    "справка об оценке стоимости имущества и товарные чеки;",
    "заключения судебно-медицинских и товароведческих экспертиз."
  ],
  "deadlines": "Срок задержания до судебного решения об аресте — до 48 часов. Срок предварительного следствия — от 2 месяцев. Срок апелляционного обжалования приговора — 15 дней со дня провозглашения или вручения копии осуждённому."
};
  const relatedServices = [
  {
    "title": "Адвокат по мошенничеству (ст. 159)",
    "desc": "Защита при хищениях путём обмана и злоупотребления доверием.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-moshennichestvu/"
  },
  {
    "title": "Адвокат при задержании, обыске и допросе",
    "desc": "Срочное подключение защитника к неотложным следственным действиям.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-pri-zaderzhanii-obyske-i-doprose/"
  },
  {
    "title": "Защита прав потерпевшего",
    "desc": "Представительство потерпевших от грабежей и разбоев, взыскание морального и имущественного вреда.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/zashchita-poterpevshego/"
  }
];
  const faqItems = [
  {
    "q": "Чем грабёж отличается от разбоя?",
    "a": "Грабёж (ст. 161) — открытое хищение без применения опасного для жизни насилия. Разбой (ст. 162) — нападение с применением насилия, опасного для жизни/здоровья, либо с угрозой его применения. Наказание по ст. 162 существенно строже."
  },
  {
    "q": "Можно ли примириться с потерпевшим по ст. 158 УК РФ?",
    "a": "Да, если кража относится к категории небольшой или средней тяжести (ч. 1 или ч. 2 ст. 158), обвиняемый привлекается впервые и полностью возместил ущерб потерпевшему (ст. 25 УПК РФ)."
  },
  {
    "q": "Как определяется стоимость похищенного имущества?",
    "a": "Следствие обязано устанавливать реальную рыночную стоимость имущества на момент хищения с учётом износа, а не по первоначальным чекам покупки."
  },
  {
    "q": "Что считается проникновением в жилище?",
    "a": "Проникновение — незаконное вторжение в жилое помещение против воли проживающих лиц. Если вход был свободным или по приглашению, данный признак подлежит исключению."
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
              <span style={{ color: 'var(--color-text-main)' }}>Кражи, грабежи и разбои</span>
            </>
          }
          superTitle="Защита по ст. 158, 161, 162 УК РФ • Липецк и область"
          title={
            <span style={{ display: 'block' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                Адвокат по кражам, грабежам
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                и разбоям (ст. 158–162 УК РФ)
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                в Липецке
              </span>
            </span>
          }
          subtitle="Подключимся на стадии проверки, следствия или суда. Проверим разграничение открытого и тайного хищения, размер ущерба, квалифицирующие признаки группы и проникновения, оспорим доказательства и проведём защиту."
          primaryCtaText="Обсудить ситуацию"
          primaryCtaLink="#form"
          primaryCtaAnalytics="click_advokat_po_krazham_grabezham_i_razboyam_hero_cta"
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
                Срочный вызов или задержание по подозрению в хищении
              </h2>
              <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, margin: 0 }}>
                Первые показания и протоколы определяют квалификацию. Не признавайте вину в насилии или сговоре без конфиденциальной консультации с адвокатом.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '20px' }}>
              {[{"name":"Задержание сотрудниками полиции","what":"Уточните орган, основания задержания, потребуйте зафиксировать точное время.","btnText":"Адвокат при задержании","btnHref":"/grazhdanam/advokat-po-ugolovnym-delam/advokat-pri-zaderzhanii-obyske-i-doprose/"},{"name":"Вызов на допрос или опознание","what":"Подготовьтесь к процедуре с адвокатом: исключите наводящие вопросы и нарушения правил опознания.","btnText":"Обсудить вызов","btnHref":"#form"},{"name":"Обыск по месту жительства","what":"Требуйте внесения в протокол всех замечаний по упаковке и принадлежности изъятого имущества.","btnText":"Адвокат при обыске","btnHref":"/grazhdanam/advokat-po-ugolovnym-delam/advokat-pri-zaderzhanii-obyske-i-doprose/"}].map((evt, idx) => (
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

        {/* 3. Ситуации, в которых нужна помощь */}
        <section className="section bg-white" style={{ padding: '80px 0' }}>
          <div className="container">
            <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
              <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
                <span style={{ display: "inline-block" }}>Ситуации, в которых</span> <br /><span style={{ display: "inline-block" }}>необходима помощь</span> <br /><span style={{ display: "inline-block" }}>адвоката</span>
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Оценим фактические обстоятельства, определим срочность и предложим оптимальный алгоритм действий.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '24px' }}>
              {situations.map((sit, idx) => (
                <div
                  key={idx}
                  className="hover-lift"
                  style={{
                    padding: '30px 24px',
                    background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                    border: '1px solid var(--color-border)',
                    borderTop: '3px solid var(--color-primary)',
                    boxShadow: '0 4px 16px rgba(16, 39, 59, 0.04)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  {sit.tag && (
                    <div style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: 'var(--color-gold)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginBottom: '10px',
                      background: 'rgba(193, 160, 102, 0.1)',
                      padding: '3px 8px',
                      alignSelf: 'flex-start'
                    }}>
                      {sit.tag}
                    </div>
                  )}
                  <h3 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--color-deep-blue)', lineHeight: 1.35, margin: '0 0 10px 0' }}>
                    {sit.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    {sit.desc}
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
                <span style={{ display: "inline-block" }}>Выберите свой статус</span> <br /><span style={{ display: "inline-block" }}>в текущей ситуации</span>
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
                <span style={{ display: "inline-block" }}>Что входит в работу,</span> <br /><span style={{ display: "inline-block" }}>а что оценивается отдельно</span>
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
                <span style={{ display: "inline-block" }}>Возможные правовые</span> <br /><span style={{ display: "inline-block" }}>маршруты защиты</span>
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
                <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>Смежные услуги направления</span>
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
                  hiddenFields={[{ name: 'page', value: '/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-krazham-grabezham-i-razboyam/' }]}
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
