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

export default function AdvokatVzyatkiClient() {
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
          "name": "Адвокат по должностным преступлениям и взяткам",
          "item": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-dolzhnostnym-prestupleniyam-i-vzyatkam/"
        }
      ]
    },
    {
      "@type": "Service",
      "name": "Адвокат по должностным преступлениям и взяткам в Липецке",
      "description": "Защита по обвинениям во взятках (ст. 290, 291 УК РФ), коммерческом подкупе, превышении полномочий в Липецке. Аудит ОРМ, защита от провокаций, следственный опыт.",
      "url": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-dolzhnostnym-prestupleniyam-i-vzyatkam/",
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
          "name": "Что считается провокацией взятки и как ее доказать?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Провокация — это склонение лица к совершению преступления, если ранее у него не было умысла на получение или дачу взятки. Доказывается через фоноскопические экспертизы аудиозаписей, анализ переписки и проверку отсутствия оперативных данных до начала эксперимента."
          }
        },
        {
          "@type": "Question",
          "name": "Можно ли избежать наказания, если добровольно сообщить о даче взятки?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да. Согласно примечанию к ст. 291 УК РФ, лицо, давшее взятку, освобождается от уголовной ответственности, если имело место вымогательство взятки либо если лицо после совершения преступления добровольно сообщило об этом в орган, имеющий право возбуждать уголовное дело."
          }
        },
        {
          "@type": "Question",
          "name": "Какая сумма считается крупным и особо крупным размером взятки?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Значительный размер — свыше 25 000 рублей; крупный размер — свыше 150 000 рублей; особо крупный размер — свыше 1 000 000 рублей. От размера суммы напрямую зависит квалификация и суровость наказания (до 15 лет лишения свободы)."
          }
        },
        {
          "@type": "Question",
          "name": "Чем взятка отличается от коммерческого подкупа?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Взятка (ст. 290, 291 УК РФ) передается должностному лицу государственного или муниципального органа. Коммерческий подкуп (ст. 204 УК РФ) передается лицу, выполняющему управленческие функции в коммерческой или иной организации."
          }
        }
      ]
    }
  ]
};

  const situations = [
  {
    "title": "Получение взятки должностным лицом (ст. 290 УК РФ)",
    "desc": "Задержание при передаче денег, обвинение в совершении действий (бездействия) в пользу взяткодателя или за общее покровительство.",
    "impact": "Проверяем полномочия должностного лица, факт вымогательства, законность ОРМ и наличие провокации."
  },
  {
    "title": "Дача взятки должностному лицу (ст. 291 УК РФ)",
    "desc": "Обвинение предпринимателя или гражданина в передаче незаконного вознаграждения сотруднику контрольного или правоохранительного органа.",
    "impact": "Оцениваем возможность освобождения по примечанию к ст. 291 УК РФ (добровольное сообщение и вымогательство)."
  },
  {
    "title": "Посредничество во взяточничестве (ст. 291.1 УК РФ)",
    "desc": "Обвинение в непосредственной передаче взятки по поручению либо способствовании в достижении соглашения между сторонами.",
    "impact": "Разграничиваем посредничество и мошенничество (ст. 159 УК РФ), проверяем реальность передачи средств."
  },
  {
    "title": "Превышение и злоупотребление полномочиями (ст. 285, 286)",
    "desc": "Вменение совершения действий, выходящих за пределы полномочий, повлекших существенное нарушение прав граждан или государства.",
    "impact": "Изучаем должностные регламенты, инструкции, причинную связь и отсутствие корыстной или иной личной заинтересованности."
  }
];
  const checkpoints = [
  {
    "title": "Законность постановления о проведении оперативного эксперимента",
    "desc": "Проверяем, имелись ли реальные основания для ОРД или оперативные службы искусственно спровоцировали передачу средств."
  },
  {
    "title": "Процедура пометки и выдачи денежных средств",
    "desc": "Анализируем протокол осмотра и пометки купюр, использование люминесцентного спецсостава и смывы с рук."
  },
  {
    "title": "Аудио- и видеозаписи скрытого наблюдения",
    "desc": "Проводим фоноскопическую и лингвистическую экспертизу разговоров для установления инициатора передачи денег."
  },
  {
    "title": "Фактический статус и круг полномочий должностного лица",
    "desc": "Устанавливаем, входило ли в служебные полномочия должностного лица совершение тех действий, за которые переданы деньги."
  },
  {
    "title": "Основания для освобождения по примечанию к статьям 291, 291.1",
    "desc": "Проверяем факт добровольного сообщения в органы о даче взятки или способствования раскрытию преступления."
  },
  {
    "title": "Разграничение взятки и подарка (ст. 575 ГК РФ)",
    "desc": "Оцениваем стоимость переданного предмета и отсутствие встречного предоставления служебных преимуществ."
  }
];
  const casesData: CaseData[] = [
  {
    "title": "Прекращение дела о даче взятки по примечанию к ст. 291 УК РФ",
    "category": "Дача взятки",
    "problem": "Предпринимателя задержали по подозрению в даче взятки сотруднику контролирующего органа при проверке предприятия.",
    "action": "Адвокат доказал факт вымогательства взятки со стороны проверяющего и своевременное добровольное обращение доверителя.",
    "result": "Следственный комитет прекратил уголовное преследование доверителя на основании примечания к ст. 291 УК РФ."
  },
  {
    "title": "Переквалификация со взятки (ст. 290) на покушение на мошенничество",
    "category": "Должностные преступления",
    "problem": "Сотруднику госучреждения вменяли получение взятки в крупном размере (ч. 5 ст. 290 УК РФ, до 12 лет лишения свободы).",
    "action": "Доказали, что совершение действий не входило в круг полномочий доверителя и он не мог повлиять на решение.",
    "result": "Действия переквалифицированы на ч. 3 ст. 159 УК РФ со значительным смягчением наказания до условного срока."
  },
  {
    "title": "Исключение видеозаписи ОРМ в связи с доказанной провокацией",
    "category": "Провокация взятки",
    "problem": "Заявитель неоднократно настойчиво навязывал передачу денег чиновнику, который изначально отказывался от вознаграждения.",
    "action": "Провели психолого-лингвистическую экспертизу аудиозаписей, подтвердившую инициативу и давление со стороны взяткодателя.",
    "result": "Суд признал проведение оперативного эксперимента незаконным и оправдал должностное лицо."
  }
];
  const processSteps: ProcessStep[] = [
  {
    "num": "01",
    "title": "Срочный анализ материалов ОРД",
    "desc": "Изучаем постановления о рассекречивании ОРМ, протоколы изъятия денег и аудиозаписи переговоров."
  },
  {
    "num": "02",
    "title": "Защита от провокации и выработка позиции",
    "desc": "Формируем правовую позицию: отсутствие состава, провокация, переквалификация на мошенничество или освобождение."
  },
  {
    "num": "03",
    "title": "Назначение лингвистических и фоноскопических экспертиз",
    "desc": "Ставим перед экспертами вопросы о признаках подстрекательства, монтажа записей и истинном значении фраз."
  },
  {
    "num": "04",
    "title": "Защита в СК РФ и судебных инстанциях",
    "desc": "Участвуем во всех процессуальных действиях, допрашиваем оперативных сотрудников и защищаем доверителя в суде."
  }
];
  const pricingTiers: PricingTier[] = [
  {
    "title": "Первичный анализ материалов ОРМ",
    "subtitle": "Оценка допустимости доказательств",
    "price": "от 10 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "правовой анализ постановлений о проведении ОРД",
        "value": "Да"
      },
      {
        "name": "оценка рисков применения ст. 290/291 УК РФ",
        "value": "Да"
      },
      {
        "name": "выявление признаков оперативной провокации",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  },
  {
    "title": "Защита на предварительном следствии в СК",
    "subtitle": "Комплексное ведение коррупционного дела",
    "price": "от 55 000 ₽",
    "popular": true,
    "badgeText": "Востребовано",
    "features": [
      {
        "name": "участие во всех допросах, очных ставках, экспертизах",
        "value": "Да"
      },
      {
        "name": "доказывание провокации и нарушений при ОРД",
        "value": "Да"
      },
      {
        "name": "защита при избрании меры пресечения в суде",
        "value": "Да"
      },
      {
        "name": "работа по переквалификации на менее тяжкий состав",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  },
  {
    "title": "Защита в суде первой инстанции",
    "subtitle": "Судебный процесс под ключ",
    "price": "от 70 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "полное представительство во всех заседаниях",
        "value": "Да"
      },
      {
        "name": "допрос оперативных сотрудников и заявителя",
        "value": "Да"
      },
      {
        "name": "исключение недопустимых результатов ОРМ",
        "value": "Да"
      },
      {
        "name": "подготовка и выступление в судебных прениях",
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
    "desc": "Защита предпринимателей и руководства по делам о налогах, мошенничестве и растрате.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-ekonomicheskim-prestupleniyam/"
  },
  {
    "title": "Адвокат при задержании и допросе",
    "desc": "Неотложная помощь при задержании с поличным сотрудниками УФСБ или ОЭБиПК.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-pri-zaderzhanii-obyske-i-doprose/"
  },
  {
    "title": "Обжалование приговора",
    "desc": "Апелляционное и кассационное обжалование суровых приговоров по должностным преступлениям.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/obzhalovanie-prigovora/"
  }
];
  const faqItems = [
  {
    "q": "Что считается провокацией взятки и как ее доказать?",
    "a": "Провокация — это склонение лица к совершению преступления, если ранее у него не было умысла на получение или дачу взятки. Доказывается через фоноскопические экспертизы аудиозаписей, анализ переписки и проверку отсутствия оперативных данных до начала эксперимента."
  },
  {
    "q": "Можно ли избежать наказания, если добровольно сообщить о даче взятки?",
    "a": "Да. Согласно примечанию к ст. 291 УК РФ, лицо, давшее взятку, освобождается от уголовной ответственности, если имело место вымогательство взятки либо если лицо после совершения преступления добровольно сообщило об этом в орган, имеющий право возбуждать уголовное дело."
  },
  {
    "q": "Какая сумма считается крупным и особо крупным размером взятки?",
    "a": "Значительный размер — свыше 25 000 рублей; крупный размер — свыше 150 000 рублей; особо крупный размер — свыше 1 000 000 рублей. От размера суммы напрямую зависит квалификация и суровость наказания (до 15 лет лишения свободы)."
  },
  {
    "q": "Чем взятка отличается от коммерческого подкупа?",
    "a": "Взятка (ст. 290, 291 УК РФ) передается должностному лицу государственного или муниципального органа. Коммерческий подкуп (ст. 204 УК РФ) передается лицу, выполняющему управленческие функции в коммерческой или иной организации."
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
              <span style={{ color: '#FFFFFF' }}>Адвокат по должностным преступлениям и взяткам</span>
            </nav>
          }
          superTitle="Уголовное право • ст. 290, 291, 285 УК РФ"
          title={
            <span style={{ display: 'block' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                Адвокат по взяткам
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                и должностным преступлениям
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                в Липецке
              </span>
            </span>
          }
          subtitle="Защита должностных лиц, предпринимателей и граждан по делам о даче, получении взятки, посредничестве и превышении полномочий. Аудит ОРМ и защита от провокаций. Связь в рабочее время: Пн–Пт с 09:00 до 18:00."
          primaryCtaText="Обсудить ситуацию"
          primaryCtaLink="#form"
          primaryCtaSubtext={
            <span style={{ display: 'block' }}>
              <span style={{ whiteSpace: 'nowrap' }}>Перезвоним вам в течение 15 минут в рабочее время</span>
            </span>
          }
          trustItems={[
            { text: 'Проверим законность проведения ОРД (оперативного эксперимента)' },
            { text: 'Докажем провокацию взятки со стороны оперативных служб' },
            { text: 'Защитим от необоснованного ареста и заключения в СИЗО' }
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
                <span style={{ display: "inline-block" }}>требуется защита</span> <br />
                <span style={{ display: "inline-block" }}>по коррупционным статьям</span>
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Дела о взятках и превышении полномочий всегда строятся на материалах оперативно-розыскной деятельности (ОРД).
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
                    Что проверяет адвокат по делам о взятках
                  </h3>
                </div>
              </div>

              <p style={{ margin: '0 0 28px 0', fontSize: '15px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, maxWidth: '820px' }}>
                Ключевые аспекты проверки законности доказательств обвинения:
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
                  hiddenFields={[{ name: 'page', value: '/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-dolzhnostnym-prestupleniyam-i-vzyatkam/' }]}
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
