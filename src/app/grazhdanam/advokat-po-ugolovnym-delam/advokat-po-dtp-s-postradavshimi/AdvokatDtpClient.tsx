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

export default function AdvokatDtpClient() {
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
            "name": "Адвокат по ДТП с пострадавшими",
            "item": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-dtp-s-postradavshimi/"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Адвокат по ДТП с пострадавшими в Липецке",
        "description": "Подключимся сразу после аварии, на стадии проверки в ГИБДД/следствии или в суде. Организуем независимые автотехнические и судебно-медицинские экспертизы, восстановим схему ДТП, защитим водителя или представим интересы потерпевших.",
        "url": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-dtp-s-postradavshimi/",
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
    "name": "Что считается тяжким вредом здоровью при ДТП?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Тяжкий вред здоровью устанавливается СМЭ: вред, опасный для жизни (черепно-мозговые травмы, переломы позвоночника), потеря органа или его функции, неизгладимое обезображивание лица, утрата трудоспособности более чем на одну треть."
    }
  },
  {
    "@type": "Question",
    "name": "Возможно ли примирение сторон по ст. 264 УК РФ?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Да, по ч. 1 и ч. 3 ст. 264 УК РФ (небольшая и средняя тяжесть) при первичном привлечении и полном возмещении ущерба потерпевшим возможно прекращение дела судом по ст. 76 УК РФ."
    }
  },
  {
    "@type": "Question",
    "name": "Что делать, если пешеход сам нарушил ПДД?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Грубая неосторожность пешехода является ключевым предметом автотехнической экспертизы. Если будет доказано, что водитель соблюдал скоростной режим и не имел технической возможности затормозить, уголовная ответственность исключается."
    }
  },
  {
    "@type": "Question",
    "name": "Обязательно ли возмещать моральный вред до суда?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Добровольное возмещение вреда до или во время судебного процесса признаётся смягчающим вину обстоятельством (п. «к» ч. 1 ст. 61 УК РФ) и является обязательным условием для прекращения дела за примирением сторон."
    }
  }
]
      }
    ]
  };

  const situations = [
  {
    "tag": "Тяжкий вред здоровью",
    "title": "Причинение тяжкого вреда здоровью (ст. 264 ч. 1, 2 УК РФ)",
    "desc": "Проверим причинную связь между нарушением ПДД и полученными травмами на основании судмедэкспертизы (СМЭ)."
  },
  {
    "tag": "Погибший в аварии",
    "title": "ДТП со смертельным исходом (ст. 264 ч. 3, 4 УК РФ)",
    "desc": "Восстановим видимость, скорость и техническую возможность водителя предотвратить наезд или столкновение."
  },
  {
    "tag": "Опьянение / Отказ",
    "title": "Обвинение в нетрезвом вождении или отказе от освидетельствования",
    "desc": "Проверим процедурные акты, видеозапись продувки и основания направления в наркологический диспансер."
  },
  {
    "tag": "Оставление места ДТП",
    "title": "Обвинение в оставлении места происшествия",
    "desc": "Оценим уважительность причин оставления (доставка пострадавшего в больницу, отсутствие связи)."
  },
  {
    "tag": "Неправильная схема",
    "title": "Искажение схемы ДТП и дорожных условий",
    "desc": "Истребуем видеозаписи системы «Безопасный город», регистраторов и зафиксируем дефекты дорожного полотна."
  },
  {
    "tag": "Помощь пострадавшим",
    "title": "Представительство потерпевших и родственников погибших",
    "desc": "Взыскание компенсации морального вреда, расходов на лечение, погребение и утраченного заработка."
  }
];
  const roles = [
  {
    "role": "Водитель под следствием",
    "task": "Установить отсутствие технической возможности избежать ДТП, провести независимую автотехнику.",
    "btnText": "Защита водителя",
    "btnHref": "#form"
  },
  {
    "role": "Родственник водителя",
    "task": "Организовать срочную защиту при угрозе избрания меры пресечения в виде заключения под стражу.",
    "btnText": "Помочь водителю",
    "btnHref": "#form"
  },
  {
    "role": "Пострадавший / Семья погибшего",
    "task": "Добиться объективного расследования, привлечения виновного и максимальной компенсации вреда.",
    "btnText": "Помощь потерпевшему",
    "btnHref": "/grazhdanam/advokat-po-ugolovnym-delam/zashchita-poterpevshego/"
  }
];
  const scope = {
  "included": [
    "Анализ схемы ДТП, протоколов осмотра ТС и места происшествия",
    "Формирование вопросов для автотехнической, трасологической и судебно-медицинской экспертиз",
    "Участие в допросах, следственных экспериментах и проверках показаний на месте",
    "Представительство в судебных заседаниях и переговоры о компенсации вреда"
  ],
  "extra": [
    "Выезд автоэксперта и трасолога на место ДТП для проведения замеров",
    "Комплексные комиссионные экспертизы в независимых экспертных учреждениях",
    "Гражданские иски к страховым компаниям и дорожным службам"
  ]
};
  const matrix = {
  "title": "Что доказывается по ст. 264 УК РФ: ключевые факторы квалификации",
  "subtitle": "Уголовная ответственность наступает только при доказанности конкретных нарушений ПДД и причинной связи с наступившими последствиями:",
  "items": [
    {
      "title": "Конкретный пункт правил ПДД",
      "desc": "Следствие обязано доказать нарушение конкретного пункта (скорость, дистанция, маневрирование), а не общие формулировки."
    },
    {
      "title": "Техническая возможность избежать ДТП",
      "desc": "Рассчитывается автотехнической экспертизой с учётом времени реакции водителя и остановочного пути."
    },
    {
      "title": "Степень тяжести вреда здоровью",
      "desc": "Уголовная ответственность возникает только при тяжком вреде (потеря органа, неизгладимое обезображивание лица, угроза жизни)."
    },
    {
      "title": "Дорожные условия и видимость",
      "desc": "Наличие гололёда, неосвещённых участков, отсутствия дорожных знаков или разметки исключает вину водителя."
    },
    {
      "title": "Действия самого пешехода или второго водителя",
      "desc": "Грубая неосторожность потерпевшего (переход в неположенном месте на тёмной трассе) существенно влияет на исход."
    },
    {
      "title": "Законность медосвидетельствования",
      "desc": "Соблюдение регламента применения алкотестера, температурного режима и порядка химико-токсикологического исследования."
    }
  ]
};
  const routes = [
  {
    "title": "Прекращение дела за отсутствием состава",
    "desc": "Доказываем экспертным путём отсутствие у водителя технической возможности предотвратить столкновение."
  },
  {
    "title": "Примирение сторон в суде (ст. 76 УК РФ)",
    "desc": "При добровольном возмещении вреда потерпевшему добиваемся прекращения уголовного дела в суде без судимости."
  },
  {
    "title": "Смягчение наказания и сохранение прав",
    "desc": "Исключение отягчающих признаков, учёт содействия, сохранение свободы и минимальный срок лишения прав."
  }
];
  const casesData: CaseData[] = [
  {
    "category": "ст. 264 ч. 1 УК РФ",
    "title": "Отказ в возбуждении дела: отсутствие технической возможности наезда",
    "problem": "Пешеход выбежал на проезжую часть вне пешеходного перехода в тёмное время суток, получив тяжкий вред здоровью.",
    "action": "Провели независимый следственный эксперимент, рассчитали видимость пешехода в темной одежде и доказали отсутствие технической возможности остановиться.",
    "result": "Следственный орган вынес постановление об отказе в возбуждении уголовного дела."
  },
  {
    "category": "ст. 264 ч. 3 УК РФ",
    "title": "Прекращение уголовного дела в суде за примирением сторон",
    "problem": "В результате столкновения на перекрёстке погиб пассажир. Водитель полностью признавал вину и раскаивался.",
    "action": "Провели переговоры с семьей погибшего, выплатили согласованную компенсацию морального вреда и оформили заявление о примирении.",
    "result": "Суд удовлетворил ходатайство и прекратил уголовное дело в связи с примирением сторон."
  },
  {
    "category": "ст. 264 ч. 2 УК РФ",
    "title": "Исключение состояния опьянения из-за нарушений процедуры освидетельствования",
    "problem": "Водителю вменили состояние опьянения на основании акта с нарушением калибровки прибора.",
    "action": "Запросили паспорта поверки прибора, доказали процессуальные нарушения забора биоматериала и исключили акт освидетельствования.",
    "result": "Дело переквалифицировано на ч. 1 ст. 264 УК РФ, исключено наказание в виде реального лишения свободы."
  }
];
  const processSteps: ProcessStep[] = [
  {
    "num": "01",
    "title": "Анализ материалов ДТП и схемы",
    "desc": "Изучаем схему происшествия, протокол осмотра места и повреждений автомобилей."
  },
  {
    "num": "02",
    "title": "Постановка вопросов для автотехники",
    "desc": "Формулируем точные исходные данные для экспертизы скорости, остановочного пути и видимости."
  },
  {
    "num": "03",
    "title": "Участие в следственных действиях",
    "desc": "Сопровождаем следственные эксперименты, допросы участников и очные ставки."
  },
  {
    "num": "04",
    "title": "Защита в суде и мировое соглашение",
    "desc": "Представляем позицию в суде, организуем процесс возмещения вреда и добиваемся мягкого решения."
  }
];
  const pricingTiers: PricingTier[] = [
  {
    "title": "Первичный анализ материалов ДТП",
    "subtitle": "Оценка схемы, повреждений и рисков",
    "price": "от 5 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "правовой анализ схемы и протоколов",
        "value": "Да"
      },
      {
        "name": "оценка перспектив автотехнической экспертизы",
        "value": "Да"
      },
      {
        "name": "план первоочередных действий водителя",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  },
  {
    "title": "Защита на предварительном следствии",
    "subtitle": "Сопровождение уголовного дела по ДТП",
    "price": "от 45 000 ₽",
    "popular": true,
    "badgeText": "Востребовано",
    "features": [
      {
        "name": "участие во всех следственных действиях",
        "value": "Да"
      },
      {
        "name": "подготовка вопросов экспертам-автотехникам",
        "value": "Да"
      },
      {
        "name": "участие в следственных экспериментах",
        "value": "Да"
      },
      {
        "name": "ознакомление с материалами дела",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  },
  {
    "title": "Защита в суде первой инстанции",
    "subtitle": "Судебный процесс и урегулирование вреда",
    "price": "от 45 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "допрос свидетелей и экспертов-автотехников",
        "value": "Да"
      },
      {
        "name": "переговоры о мировом соглашении и примирении",
        "value": "Да"
      },
      {
        "name": "подготовка ходатайства о прекращении дела",
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
    "справка о ДТП, схема места происшествия и протокол осмотра;",
    "протоколы осмотра транспортных средств с фиксацией повреждений;",
    "заключение судебно-медицинской экспертизы (СМЭ) о степени тяжести вреда;",
    "заключение автотехнической и трасологической экспертиз;",
    "видеозаписи с видеорегистраторов, камер наблюдения и фото с места ДТП."
  ],
  "deadlines": "Доследственная проверка по факту ДТП с пострадавшими проводится до 30 суток. Срок следствия — от 2 месяцев. Срок апелляционного обжалования приговора суда — 15 дней."
};
  const relatedServices = [
  {
    "title": "Автоюрист (гражданские споры по ДТП)",
    "desc": "Споры по ОСАГО, КАСКО и взыскание ущерба при ДТП в гражданском порядке.",
    "link": "/grazhdanam/avtoyurist/"
  },
  {
    "title": "Защита прав потерпевшего по уголовному делу",
    "desc": "Представительство потерпевших при ДТП, взыскание компенсации морального вреда.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/zashchita-poterpevshego/"
  },
  {
    "title": "Обжалование приговора",
    "desc": "Апелляционное обжалование судебных решений по уголовным делам о ДТП.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/obzhalovanie-prigovora/"
  }
];
  const faqItems = [
  {
    "q": "Что считается тяжким вредом здоровью при ДТП?",
    "a": "Тяжкий вред здоровью устанавливается СМЭ: вред, опасный для жизни (черепно-мозговые травмы, переломы позвоночника), потеря органа или его функции, неизгладимое обезображивание лица, утрата трудоспособности более чем на одну треть."
  },
  {
    "q": "Возможно ли примирение сторон по ст. 264 УК РФ?",
    "a": "Да, по ч. 1 и ч. 3 ст. 264 УК РФ (небольшая и средняя тяжесть) при первичном привлечении и полном возмещении ущерба потерпевшим возможно прекращение дела судом по ст. 76 УК РФ."
  },
  {
    "q": "Что делать, если пешеход сам нарушил ПДД?",
    "a": "Грубая неосторожность пешехода является ключевым предметом автотехнической экспертизы. Если будет доказано, что водитель соблюдал скоростной режим и не имел технической возможности затормозить, уголовная ответственность исключается."
  },
  {
    "q": "Обязательно ли возмещать моральный вред до суда?",
    "a": "Добровольное возмещение вреда до или во время судебного процесса признаётся смягчающим вину обстоятельством (п. «к» ч. 1 ст. 61 УК РФ) и является обязательным условием для прекращения дела за примирением сторон."
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
              <span style={{ color: 'var(--color-text-main)' }}>Адвокат по ДТП с пострадавшими</span>
            </>
          }
          superTitle="Защита по ст. 264 УК РФ • Липецк и область"
          title={
            <span style={{ display: 'block' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                Адвокат по ДТП с пострадавшими
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                ст. 264 УК РФ
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                в Липецке
              </span>
            </span>
          }
          subtitle="Подключимся сразу после аварии, на стадии проверки в ГИБДД/следствии или в суде. Организуем независимые автотехнические и судебно-медицинские экспертизы, восстановим схему ДТП, защитим водителя или представим интересы потерпевших."
          primaryCtaText="Обсудить ситуацию"
          primaryCtaLink="#form"
          primaryCtaAnalytics="click_advokat_po_dtp_s_postradavshimi_hero_cta"
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
                Срочные действия на месте ДТП, в больнице или при освидетельствовании
              </h2>
              <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, margin: 0 }}>
                Не подписывайте неполные схемы ДТП. Фиксируйте погодные условия, следы торможения, расположение осыпи стекол и наличие видеорегистраторов.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '20px' }}>
              {[{"name":"Оформление ДТП на месте","what":"Контроль составления схемы, протокола осмотра места происшествия и фиксации следов.","btnText":"Срочный выезд","btnHref":"#form"},{"name":"Медицинское освидетельствование","what":"Проверка законности направления, целостности пломб приборов и порядка забора проб.","btnText":"Консультация","btnHref":"#form"},{"name":"Тяжкий вред здоровью или погибшие","what":"Срочное вступление адвоката для предотвращения ареста водителя и назначения повторной автотехники.","btnText":"Защита водителя","btnHref":"#form"}].map((evt, idx) => (
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
                  hiddenFields={[{ name: 'page', value: '/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-dtp-s-postradavshimi/' }]}
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
