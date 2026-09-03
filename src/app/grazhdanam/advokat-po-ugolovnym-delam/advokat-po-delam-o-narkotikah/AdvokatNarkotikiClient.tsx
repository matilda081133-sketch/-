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

export default function AdvokatNarkotikiClient() {
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
            "name": "Адвокат по делам о наркотиках",
            "item": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-delam-o-narkotikah/"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Адвокат по делам о наркотиках в Липецке",
        "description": "Подключимся с момента задержания, личного досмотра, обыска или на стадии следствия и суда. Проверим законность ОРМ, изъятия, процедуру взвешивания и химической экспертизы, разграничим хранение и сбыт.",
        "url": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-delam-o-narkotikah/",
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
    "name": "Что грозит за хранение без цели сбыта (ст. 228 УК РФ)?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "По ч. 1 ст. 228 (значительный размер) возможно наказание от штрафа до 3 лет лишения свободы, часто применяется условный срок. По ч. 2 (крупный размер) — от 3 до 10 лет лишения свободы."
    }
  },
  {
    "@type": "Question",
    "name": "Можно ли избежать тюрьмы по ст. 228.1 (сбыт)?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Статья 228.1 относится к тяжким и особо тяжким. Основные задачи защиты — доказать отсутствие умысла на сбыт и добиться переквалификации на ст. 228, либо применить ст. 64 УК РФ (ниже низшего предела)."
    }
  },
  {
    "@type": "Question",
    "name": "Имеют ли право оперативники вскрывать телефон при досмотре?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Осмотр содержимого телефона с доступом к личной переписке без добровольного согласия или судебного решения незаконен. Вы имеете право не сообщать пароли от устройств на основании ст. 51 Конституции РФ."
    }
  },
  {
    "@type": "Question",
    "name": "Что делать, если в протоколе записано то, чего я не говорил?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Перед подписанием протокола собственноручно напишите в графе «Замечания»: «С протоколом не согласен, показания записаны не с моих слов, давления не выдержал» и укажите реальные обстоятельства."
    }
  }
]
      }
    ]
  };

  const situations = [
  {
    "tag": "Хранение",
    "title": "Вменяют хранение или приобретение (ст. 228 УК РФ)",
    "desc": "Проверим фактический размер вещества (значительный, крупный, особо крупный), происхождение и процедуру изъятия."
  },
  {
    "tag": "Сбыт / Закладки",
    "title": "Вменяют покушение на сбыт (ст. 228.1 через ст. 30 УК РФ)",
    "desc": "Оценим доказательства умысла на сбыт: наличие расфасовки, переписки, весов, фото или только хранение для личного употребления."
  },
  {
    "tag": "Провокация / ОРМ",
    "title": "Проведена проверочная закупка или оперативный эксперимент",
    "desc": "Проанализируем законность оснований для проведения ОРМ, отсутствие провокации со стороны оперативников."
  },
  {
    "tag": "Экспертиза массы",
    "title": "Сомнения в результатах химической экспертизы",
    "desc": "Проверим методику исследования, расчёт сухого остатка, погрешность весов и квалификацию эксперта."
  },
  {
    "tag": "Группа лиц",
    "title": "Обвинение в составе группы по предварительному сговору",
    "desc": "Разграничим роль доверителя от действий организаторов и иных лиц для исключения отягчающих квалификаций."
  },
  {
    "tag": "Суд первой инстанции",
    "title": "Дело передано в суд с обвинительным заключением",
    "desc": "Подготовим судебную позицию, ходатайства о недопустимости доказательств и добьёмся переквалификации."
  }
];
  const roles = [
  {
    "role": "Меня задержали / обвиняют",
    "task": "Не давать показаний без защитника; проверить законность изъятия и досмотра; исключить сбыт.",
    "btnText": "Срочная защита",
    "btnHref": "#form"
  },
  {
    "role": "Задержан мой родственник",
    "task": "Установить отдел полиции или СК, статью, следователя; заключить соглашение и направить адвоката.",
    "btnText": "Помощь близкому",
    "btnHref": "#form"
  },
  {
    "role": "Дело уже в суде",
    "task": "Изучить все тома дела, оспорить незаконные доказательства ОРМ и добиваться минимального наказания.",
    "btnText": "Защита в суде",
    "btnHref": "#form"
  }
];
  const scope = {
  "included": [
    "Изучение постановлений, протоколов досмотра, обыска и экспертиз",
    "Участие в допросах, проверках показаний на месте и очных ставках",
    "Защита в суде при избрании и продлении меры пресечения (арест, домашний арест)",
    "Подготовка ходатайств о назначении повторных экспертиз и исключении доказательств"
  ],
  "extra": [
    "Срочный выезд в ночное время или за пределы Липецка",
    "Привлечение независимых химических и наркологических экспертов",
    "Апелляционное обжалование приговора суда первой инстанции"
  ]
};
  const matrix = {
  "title": "Хранение (ст. 228) или умысел на сбыт (ст. 228.1 УК РФ)",
  "subtitle": "Разграничение квалификации кардинально меняет категорию тяжести и размер наказания. Следствие обязано доказать конкретные признаки умысла на распространение:",
  "items": [
    {
      "title": "Фасовка и упаковочные материалы",
      "desc": "Наличие индивидуальных пакетов (зип-локов), фольги или единого свёртка для личного потребления."
    },
    {
      "title": "Электронные весы и предметы мерности",
      "desc": "Обнаружение весов со следами веществ либо их полное отсутствие у задержанного лица."
    },
    {
      "title": "Цифровая переписка и координаты",
      "desc": "Наличие в телефоне сообщений операторам, фото закладок, координат тайников или их отсутствие."
    },
    {
      "title": "Медицинское освидетельствование",
      "desc": "Установление факта наркотической зависимости и регулярного личного потребления вещества."
    },
    {
      "title": "Обстоятельства и законность изъятия",
      "desc": "Соблюдение прав при личном досмотре, непрерывность видеозаписи или участие незаинтересованных понятых."
    },
    {
      "title": "Определение чистой массы вещества",
      "desc": "Точное исключение нейтральных примесей, если методика требует выделения сухого остатка наркотического средства."
    }
  ]
};
  const routes = [
  {
    "title": "Исключение состава или недопустимость доказательств",
    "desc": "Если досмотр или ОРМ проведены с грубыми нарушениями закона, добиваемся исключения протоколов из доказательств."
  },
  {
    "title": "Переквалификация со сбыта (228.1) на хранение (228)",
    "desc": "Доказываем отсутствие умысла на передачу третьим лицам и приобретение исключительно для личных нужд."
  },
  {
    "title": "Смягчение наказания и применение ст. 64, 73 УК РФ",
    "desc": "Сбор характеристик, содействие следствию, добровольное лечение и исключение квалифицирующих признаков."
  }
];
  const casesData: CaseData[] = [
  {
    "category": "ст. 228.1 ч. 4 → ст. 228 ч. 2 УК РФ",
    "title": "Переквалификация покушения на сбыт в крупном размере на хранение",
    "problem": "Следствие вменило попытку сбыта через закладки из-за обнаружения нескольких свёртков при досмотре.",
    "action": "Доказали отсутствие фото с координатами, отсутствие переписки о продаже и подтвердили личную зависимость.",
    "result": "Суд переквалифицировал обвинение на ч. 2 ст. 228 УК РФ, наказание снижено в 3 раза."
  },
  {
    "category": "ст. 228 ч. 1 УК РФ",
    "title": "Прекращение уголовного дела с назначением судебного штрафа",
    "problem": "Молодой человек впервые привлекался к уголовной ответственности за хранение запрещенного вещества в значительном размере.",
    "action": "Оформили добровольное прохождение лечения, благотворительный взнос и подали ходатайство о применении ст. 76.2 УК РФ.",
    "result": "Суд освободил клиента от уголовной ответственности с назначением судебного штрафа без судимости."
  },
  {
    "category": "ст. 228 ч. 2 УК РФ",
    "title": "Исключение протокола личного досмотра из-за нарушений при изъятии",
    "problem": "Сотрудники полиции провели досмотр без участия понятых и без непрерывной видеофиксации.",
    "action": "Заявили мотивированное ходатайство о признании протокола досмотра недопустимым доказательством (ст. 75 УПК РФ).",
    "result": "Прокурор отказался от обвинения в части изъятого вещества, дело прекращено за отсутствием состава."
  }
];
  const processSteps: ProcessStep[] = [
  {
    "num": "01",
    "title": "Срочный выезд и конфиденциальная беседа",
    "desc": "Адвокат вступает в дело по ордеру, разъясняет права и вырабатывает позицию до первого допроса."
  },
  {
    "num": "02",
    "title": "Участие в процессуальных действиях",
    "desc": "Контроль законности допросов, очных ставок, проверок показаний и фиксация процессуальных нарушений."
  },
  {
    "num": "03",
    "title": "Аудит экспертиз и доказательств ОРД",
    "desc": "Проверка постановлений о проверочной закупке, рассекречивания материалов ОРМ и химических заключений."
  },
  {
    "num": "04",
    "title": "Защита в суде",
    "desc": "Представление доказательств защиты, допрос оперативников и экспертов, борьба за переквалификацию и мягкий приговор."
  }
];
  const pricingTiers: PricingTier[] = [
  {
    "title": "Участие в неотложном следственном действии",
    "subtitle": "Допрос, досмотр, обыск, мера пресечения",
    "price": "от 15 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "срочный выезд адвоката в рабочее время",
        "value": "Да"
      },
      {
        "name": "конфиденциальная беседа до допроса",
        "value": "Да"
      },
      {
        "name": "участие в заседании по аресту (ст. 108 УПК)",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  },
  {
    "title": "Защита на предварительном следствии",
    "subtitle": "Полное сопровождение на стадии следствия",
    "price": "от 50 000 ₽",
    "popular": true,
    "badgeText": "Востребовано",
    "features": [
      {
        "name": "участие во всех следственных действиях",
        "value": "Да"
      },
      {
        "name": "аудит экспертиз и материалов ОРД",
        "value": "Да"
      },
      {
        "name": "подача жалоб и ходатайств о переквалификации",
        "value": "Да"
      },
      {
        "name": "ознакомление со всеми томами дела (ст. 217)",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  },
  {
    "title": "Защита в суде первой инстанции",
    "subtitle": "Судебное следствие и прения сторон",
    "price": "от 50 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "выработка судебной стратегии",
        "value": "Да"
      },
      {
        "name": "допрос свидетелей, экспертов и понятых",
        "value": "Да"
      },
      {
        "name": "заявление ходатайств о недопустимости улик",
        "value": "Да"
      },
      {
        "name": "подготовка речи в прениях",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  }
];
  const docsAndDeadlines = {
  "docs": [
    "протокол задержания (ст. 91, 92 УПК РФ) и протокол личного досмотра;",
    "постановление о возбуждении уголовного дела;",
    "справка об исследовании и заключение судебной химической экспертизы;",
    "постановление об избрании меры пресечения;",
    "медицинские документы о состоянии здоровья и наркологическом учёте."
  ],
  "deadlines": "Срок задержания без решения суда не может превышать 48 часов (может быть продлен судом до 72 часов). Ходатайство об аресте рассматривается судом в течение 8 часов с момента поступления материалов. Срок апелляционного обжалования приговора — 15 суток."
};
  const relatedServices = [
  {
    "title": "Адвокат при задержании, обыске и допросе",
    "desc": "Срочное подключение защитника для участия в первых процессуальных действиях.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-pri-zaderzhanii-obyske-i-doprose/"
  },
  {
    "title": "Обжалование приговора",
    "desc": "Апелляционное и кассационное обжалование суровых приговоров по делам о наркотиках.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/obzhalovanie-prigovora/"
  },
  {
    "title": "Условно-досрочное освобождение (УДО)",
    "desc": "Оценка возможности освобождения после отбытия установленной законом части срока.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/uslovno-dosrochnoe-osvobozhdenie/"
  }
];
  const faqItems = [
  {
    "q": "Что грозит за хранение без цели сбыта (ст. 228 УК РФ)?",
    "a": "По ч. 1 ст. 228 (значительный размер) возможно наказание от штрафа до 3 лет лишения свободы, часто применяется условный срок. По ч. 2 (крупный размер) — от 3 до 10 лет лишения свободы."
  },
  {
    "q": "Можно ли избежать тюрьмы по ст. 228.1 (сбыт)?",
    "a": "Статья 228.1 относится к тяжким и особо тяжким. Основные задачи защиты — доказать отсутствие умысла на сбыт и добиться переквалификации на ст. 228, либо применить ст. 64 УК РФ (ниже низшего предела)."
  },
  {
    "q": "Имеют ли право оперативники вскрывать телефон при досмотре?",
    "a": "Осмотр содержимого телефона с доступом к личной переписке без добровольного согласия или судебного решения незаконен. Вы имеете право не сообщать пароли от устройств на основании ст. 51 Конституции РФ."
  },
  {
    "q": "Что делать, если в протоколе записано то, чего я не говорил?",
    "a": "Перед подписанием протокола собственноручно напишите в графе «Замечания»: «С протоколом не согласен, показания записаны не с моих слов, давления не выдержал» и укажите реальные обстоятельства."
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
              <span style={{ color: 'var(--color-text-main)' }}>Адвокат по делам о наркотиках</span>
            </>
          }
          superTitle="Защита по ст. 228, 228.1 УК РФ • Липецк и область"
          title={
            <span style={{ display: 'block' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                Адвокат по делам о наркотиках
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                ст. 228 и 228.1 УК РФ
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                в Липецке
              </span>
            </span>
          }
          subtitle="Подключимся с момента задержания, личного досмотра, обыска или на стадии следствия и суда. Проверим законность ОРМ, изъятия, процедуру взвешивания и химической экспертизы, разграничим хранение и сбыт."
          primaryCtaText="Обсудить ситуацию"
          primaryCtaLink="#form"
          primaryCtaAnalytics="click_advokat_po_delam_o_narkotikah_hero_cta"
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
                Срочные действия при задержании, досмотре или обыске по ст. 228
              </h2>
              <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, margin: 0 }}>
                Не соглашайтесь на признание без конфиденциального общения с адвокатом. Не прикасайтесь к подозрительным предметам и не подписывайте пустые протоколы.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '20px' }}>
              {[{"name":"Задержание на улице или в авто","what":"Уточните орган, основания, требуйте внесения времени фактического задержания в протокол.","btnText":"Адвокат при задержании","btnHref":"/grazhdanam/advokat-po-ugolovnym-delam/advokat-pri-zaderzhanii-obyske-i-doprose/"},{"name":"Обыск в квартире или досмотр","what":"Фиксируйте присутствие понятых, непрерывность наблюдения и требуйте упаковки изъятого.","btnText":"Адвокат при обыске","btnHref":"/grazhdanam/advokat-po-ugolovnym-delam/advokat-pri-zaderzhanii-obyske-i-doprose/"},{"name":"Первый допрос в отделе","what":"Используйте право на отказ от показаний по ст. 51 Конституции РФ до прибытия своего защитника.","btnText":"Обсудить вызов","btnHref":"#form"}].map((evt, idx) => (
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
                  hiddenFields={[{ name: 'page', value: '/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-delam-o-narkotikah/' }]}
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
