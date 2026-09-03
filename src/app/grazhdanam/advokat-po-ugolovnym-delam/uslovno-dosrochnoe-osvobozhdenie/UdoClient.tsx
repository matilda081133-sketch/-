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

export default function UdoClient() {
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
            "name": "Условно-досрочное освобождение",
            "item": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/uslovno-dosrochnoe-osvobozhdenie/"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Условно-досрочное освобождение в Липецке",
        "description": "Оценим формальные и фактические основания для УДО: отбытую часть срока, взыскания и поощрения, возмещение ущерба, гарантии жилья и работы. Соберём доказательства и представим интересы в суде.",
        "url": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/uslovno-dosrochnoe-osvobozhdenie/",
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
    "name": "Какую часть срока нужно отбыть для подачи на УДО?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Для преступлений небольшой и средней тяжести — не менее 1/3 срока; для тяжких — не менее 1/2 срока; для особо тяжких — не менее 2/3 срока; за преступления по наркотикам (ст. 228.1) — не менее 3/4 срока."
    }
  },
  {
    "@type": "Question",
    "name": "Обязательно ли полностью возместить ущерб по иску?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Полное возмещение не является обязательным по закону, но необходимо доказать суду регулярные добровольные выплаты из заработка и отсутствие уклонения от погашения иска."
    }
  },
  {
    "@type": "Question",
    "name": "Что делать, если колония против УДО?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Отрицательное заключение колонии не связывает суд. Адвокат представляет суду доказательства исправления, внешние характеристики, гарантии трудоустройства и парирует доводы администрации."
    }
  },
  {
    "@type": "Question",
    "name": "Чем ст. 80 УК РФ отличается от УДО?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "По ст. 80 УК РФ происходит не полное освобождение, а замена лишения свободы на более мягкий вид наказания (принудительные работы в ИЦ). Сроки для подачи по ст. 80 часто наступают раньше, чем на УДО."
    }
  }
]
      }
    ]
  };

  const situations = [
  {
    "tag": "Срок подошел",
    "title": "Наступил формальный срок подачи на УДО",
    "desc": "Проверим точные даты, фактический срок отбывания в СИЗО и колонии, отсутствие процессуальных препятствий."
  },
  {
    "tag": "Замена на ПТР / ИТР",
    "title": "Замена наказания более мягким видом (ст. 80 УК РФ)",
    "desc": "Альтернатива УДО: перевод на принудительные работы (ПТР) или исправительные работы (ИТР) при наступлении срока."
  },
  {
    "tag": "Спор с колонией",
    "title": "Отрицательная характеристика или взыскания от ИК",
    "desc": "Обжалование незаконно наложенных дисциплинарных взысканий (ШИЗО) и сбор внешних положительных документов."
  },
  {
    "tag": "Иски потерпевших",
    "title": "Непогашенный гражданский иск потерпевших",
    "desc": "Организация регулярных добровольных выплат, подтверждение частичного возмещения и мировое урегулирование."
  },
  {
    "tag": "Ранее был отказ",
    "title": "Суд ранее отказал в удовлетворении ходатайства",
    "desc": "Анализ мотивов отказа, устранение замечаний суда и повторная подача ходатайства по истечении 6 месяцев."
  },
  {
    "tag": "Близкие осужденного",
    "title": "Помощь родственникам осужденного лица",
    "desc": "Сбор справок о гарантиях трудоустройства, предоставлении жилья, составе семьи и состоянии здоровья родных."
  }
];
  const roles = [
  {
    "role": "Сам осужденный",
    "task": "Конфиденциальная консультация адвоката в колонии, составление мотивированного ходатайства.",
    "btnText": "Помощь осужденному",
    "btnHref": "#form"
  },
  {
    "role": "Родственники осужденного",
    "task": "Сбор внешних характеристик, справок с работы, документов о жилье и возмещении вреда.",
    "btnText": "Помощь родственникам",
    "btnHref": "#form"
  },
  {
    "role": "Потерпевший по делу",
    "task": "Контроль за реальным возмещением ущерба и возражения против УДО при неисполнении обязательств.",
    "btnText": "Права потерпевшего",
    "btnHref": "/grazhdanam/advokat-po-ugolovnym-delam/zashchita-poterpevshego/"
  }
];
  const scope = {
  "included": [
    "Юридический аудит личного дела осужденного и расчет точных сроков",
    "Выезд адвоката в исправительное учреждение для согласования позиции",
    "Сбор справок о трудоустройстве, жилье, состоянии здоровья родственников",
    "Личное участие адвоката в судебном заседании по рассмотрению ходатайства"
  ],
  "extra": [
    "Обжалование дисциплинарных взысканий администрации ИК в судебном порядке",
    "Апелляционное обжалование постановления суда об отказе в УДО",
    "Выезды в колонии, расположенные за пределами Липецкой области"
  ]
};
  const matrix = {
  "title": "Что именно оценивает суд при рассмотрении ходатайства об УДО",
  "subtitle": "Суд оценивает поведение осужденного за весь период отбывания наказания, а не только перед подачей:",
  "items": [
    {
      "title": "Динамика поведения за весь срок",
      "desc": "Отсутствие неснятых взысканий, количество поощрений, добросовестное отношение к труду и обучению."
    },
    {
      "title": "Возмещение причиненного вреда",
      "desc": "Полное или частичное погашение гражданского иска, регулярность перечислений из заработной платы."
    },
    {
      "title": "Позиция администрации учреждения",
      "desc": "Заключение администрации ИК о целесообразности условно-досрочного освобождения осужденного."
    },
    {
      "title": "Позиция прокурора и потерпевших",
      "desc": "Учёт мнения потерпевшей стороны и надзирающего прокурора с правовым парированием возражений."
    },
    {
      "title": "Гарантии социальной адаптации",
      "desc": "Наличие постоянного жилья, обязательства работодателя о трудоустройстве и семейные связи."
    },
    {
      "title": "Раскаяние и признание вины",
      "desc": "Отношение к совершенному деянию и участие в общественной жизни исправительного учреждения."
    }
  ]
};
  const routes = [
  {
    "title": "Подача на условно-досрочное освобождение (УДО)",
    "desc": "Полное освобождение от дальнейшего отбывания наказания с установлением обязанностей на оставшийся срок."
  },
  {
    "title": "Замена неотбытой части более мягким видом (ст. 80 УК)",
    "desc": "Перевод из колонии в исправительный центр (принудительные работы) или на исправительные работы."
  },
  {
    "title": "Изменение вида исправительного учреждения (ст. 78 УИК)",
    "desc": "Перевод из колонии строгого режима в общий режим или в колонию-поселение с более мягкими условиями."
  }
];
  const casesData: CaseData[] = [
  {
    "category": "ст. 79 УК РФ (УДО)",
    "title": "Удовлетворение ходатайства об УДО осужденному по тяжкой статье",
    "problem": "Осужденный отбыл 1/2 срока наказания по тяжкому преступлению, однако колония дала нейтральную характеристику.",
    "action": "Собрали гарантийные письма от работодателя, подтвердили полное погашение иска и доказали исправление в суде.",
    "result": "Суд удовлетворил ходатайство адвоката и освободил клиента условно-досрочно на 2,5 года раньше срока."
  },
  {
    "category": "ст. 80 УК РФ (ПТР)",
    "title": "Замена неотбытой части наказания на принудительные работы",
    "problem": "Администрация колонии возражала против УДО из-за имевшегося в прошлом дисциплинарного взыскания.",
    "action": "Подали ходатайство о замене наказания на принудительные работы (ст. 80 УК РФ) с представлением трудовых гарантий.",
    "result": "Суд заменил оставшиеся 3 года лишения свободы на принудительные работы в исправительном центре."
  },
  {
    "category": "ст. 79 УК РФ",
    "title": "Отмена незаконного отказа суда первой инстанции в апелляции",
    "problem": "Суд первой инстанции формально отказал в УДО, сославшись на тяжесть совершенного преступления.",
    "action": "Подали апелляционную жалобу в областной суд со ссылкой на позицию Пленума ВС РФ о недопустимости отказа по тяжести.",
    "result": "Областной суд отменил постановление и вынес новое решение об условно-досрочном освобождении."
  }
];
  const processSteps: ProcessStep[] = [
  {
    "num": "01",
    "title": "Расчет сроков и аудит личного дела",
    "desc": "Проверяем наступление сроков по ст. 79, 80 УК РФ, историю взысканий и поощрений."
  },
  {
    "num": "02",
    "title": "Сбор пакета документов на воле",
    "desc": "Оформляем справки о жилье, гарантийные письма о трудоустройстве и документы о здоровье родных."
  },
  {
    "num": "03",
    "title": "Подготовка и подача ходатайства",
    "desc": "Составляем мотивированное ходатайство со ссылками на судебную практику и направляем в суд."
  },
  {
    "num": "04",
    "title": "Представительство в судебном заседании",
    "desc": "Адвокат лично защищает позицию в суде по месту нахождения исправительного учреждения."
  }
];
  const pricingTiers: PricingTier[] = [
  {
    "title": "Правовой анализ документов и шансов",
    "subtitle": "Оценка готовности личного дела",
    "price": "от 10 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "точный расчет сроков по ст. 79 и 80 УК",
        "value": "Да"
      },
      {
        "name": "анализ истории взысканий и поощрений",
        "value": "Да"
      },
      {
        "name": "список необходимых внешних документов",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  },
  {
    "title": "Комплексное ведение УДО под ключ",
    "subtitle": "От сбора справок до решения суда",
    "price": "от 40 000 ₽",
    "popular": true,
    "badgeText": "Востребовано",
    "features": [
      {
        "name": "сбор полного пакета внешних справок",
        "value": "Да"
      },
      {
        "name": "составление мотивированного ходатайства",
        "value": "Да"
      },
      {
        "name": "выезд адвоката в колонию к доверителю",
        "value": "Да"
      },
      {
        "name": "личное участие адвоката в судебном заседании",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  },
  {
    "title": "Обжалование отказа в суде апелляции",
    "subtitle": "Апелляционная жалоба в областной суд",
    "price": "от 30 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "анализ протокола и постановления суда",
        "value": "Да"
      },
      {
        "name": "составление апелляционной жалобы",
        "value": "Да"
      },
      {
        "name": "участие в заседании областного суда",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  }
];
  const docsAndDeadlines = {
  "docs": [
    "копия приговора суда (с апелляционным/кассационным определением);",
    "характеристика администрации исправительного учреждения;",
    "справка о наличии или отсутствии неснятых дисциплинарных взысканий;",
    "справка из бухгалтерии колонии о выплатах по исполнительным листам;",
    "гарантийное письмо от работодателя о готовности принять на работу и выписка из ЕГРН на жилье."
  ],
  "deadlines": "Ходатайство об УДО рассматривается судом обычно в срок от 1 до 2 месяцев с момента поступления. В случае отказа в удовлетворении повторное ходатайство может быть подано не ранее чем через 6 месяцев (ч. 10 ст. 175 УИК РФ)."
};
  const relatedServices = [
  {
    "title": "Обжалование приговора (апелляция/кассация)",
    "desc": "Пересмотр приговора, смягчение наказания и исключение отягчающих признаков.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/obzhalovanie-prigovora/"
  },
  {
    "title": "Адвокат по экономическим преступлениям",
    "desc": "Защита и урегулирование возмещения ущерба по экономическим делам.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-ekonomicheskim-prestupleniyam/"
  },
  {
    "title": "Защита прав потерпевшего",
    "desc": "Представительство интересов потерпевших при рассмотрении вопросов об УДО.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/zashchita-poterpevshego/"
  }
];
  const faqItems = [
  {
    "q": "Какую часть срока нужно отбыть для подачи на УДО?",
    "a": "Для преступлений небольшой и средней тяжести — не менее 1/3 срока; для тяжких — не менее 1/2 срока; для особо тяжких — не менее 2/3 срока; за преступления по наркотикам (ст. 228.1) — не менее 3/4 срока."
  },
  {
    "q": "Обязательно ли полностью возместить ущерб по иску?",
    "a": "Полное возмещение не является обязательным по закону, но необходимо доказать суду регулярные добровольные выплаты из заработка и отсутствие уклонения от погашения иска."
  },
  {
    "q": "Что делать, если колония против УДО?",
    "a": "Отрицательное заключение колонии не связывает суд. Адвокат представляет суду доказательства исправления, внешние характеристики, гарантии трудоустройства и парирует доводы администрации."
  },
  {
    "q": "Чем ст. 80 УК РФ отличается от УДО?",
    "a": "По ст. 80 УК РФ происходит не полное освобождение, а замена лишения свободы на более мягкий вид наказания (принудительные работы в ИЦ). Сроки для подачи по ст. 80 часто наступают раньше, чем на УДО."
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
              <span style={{ color: 'var(--color-text-main)' }}>Условно-досрочное освобождение</span>
            </>
          }
          superTitle="УДО и замена наказания (ст. 79, 80 УК РФ) • Липецк"
          title={
            <span style={{ display: 'block' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                Условно-досрочное освобождение
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                помощь адвоката по УДО
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                в Липецке
              </span>
            </span>
          }
          subtitle="Оценим формальные и фактические основания для УДО: отбытую часть срока, взыскания и поощрения, возмещение ущерба, гарантии жилья и работы. Соберём доказательства и представим интересы в суде."
          primaryCtaText="Обсудить ситуацию"
          primaryCtaLink="#form"
          primaryCtaAnalytics="click_uslovno_dosrochnoe_osvobozhdenie_hero_cta"
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
                Быстрая проверка готовности к подаче ходатайства об УДО
              </h2>
              <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, margin: 0 }}>
                Отказ суда отодвигает повторную подачу минимум на 6 месяцев. Важно подавать ходатайство только при полной готовности пакета документов.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '20px' }}>
              {[{"name":"Проверка части срока","what":"1/3 (небольшая/средняя тяжесть), 1/2 (тяжкие), 2/3 (особо тяжкие), 3/4 (наркотики ст. 228.1).","btnText":"Рассчитать срок","btnHref":"#form"},{"name":"Погашение взысканий","what":"Снятие действующих взысканий и получение положительной характеристики администрации ИК.","btnText":"Оценить шансы","btnHref":"#form"},{"name":"Возмещение ущерба","what":"Документы о добровольных выплатах по искам потерпевших или отсутствии задолженности.","btnText":"Подготовить пакет","btnHref":"#form"}].map((evt, idx) => (
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
                  hiddenFields={[{ name: 'page', value: '/grazhdanam/advokat-po-ugolovnym-delam/uslovno-dosrochnoe-osvobozhdenie/' }]}
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
