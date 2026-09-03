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
import PricingBlock from '@/components/PricingBlock';
import ProcessBlock from '@/components/ProcessBlock';

export default function SoprovozhdenieUvolneniyaClient() {
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
          "name": "Бизнесу",
          "item": "https://dejure-help.ru/biznesu/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Трудовые споры с работниками",
          "item": "https://dejure-help.ru/biznesu/trudovye-spory-s-rabotnikami/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Сопровождение увольнения работника",
          "item": "https://dejure-help.ru/biznesu/trudovye-spory-s-rabotnikami/soprovozhdenie-uvolneniya-rabotnika/"
        }
      ]
    },
    {
      "@type": "Service",
      "name": "Юридическое сопровождение увольнения работника в Липецке",
      "description": "Правовое сопровождение сложного увольнения: выбор основания, проверка доказательств, оформление процедуры, переговоры и защита работодателя.",
      "url": "https://dejure-help.ru/biznesu/trudovye-spory-s-rabotnikami/soprovozhdenie-uvolneniya-rabotnika/",
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
          "streetAddress": "пл. Театральная, д. 3, офис 401",
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
          "name": "Можно ли уволить сотрудника во время больничного или отпуска?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "По инициативе работодателя увольнение в период временной нетрудоспособности или отпуска запрещено законом (ст. 81 ТК РФ), за исключением ликвидации организации. Однако увольнение по соглашению сторон или по собственному желанию в этот период возможно."
          }
        },
        {
          "@type": "Question",
          "name": "Сколько времени даётся работнику на дачу письменных объяснений?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Работодатель обязан предоставить работнику не менее 2 рабочих дней для предоставления письменных объяснений с момента вручения требования. Если по истечении двух рабочих дней объяснение не предоставлено, составляется соответствующий акт."
          }
        },
        {
          "@type": "Question",
          "name": "Что делать, если работник отказывается подписывать приказ об увольнении?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "В таком случае на самом приказе делается соответствующая запись либо составляется отдельный акт об отказе от ознакомления в присутствии не менее двух свидетелей. Это подтверждает соблюдение работодателем установленного порядка."
          }
        },
        {
          "@type": "Question",
          "name": "Как правильно оформить увольнение по соглашению сторон?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Составляется письменное соглашение в двух экземплярах с указанием даты прекращения договора, порядка передачи дел, размера выходного пособия или компенсации (при наличии) и отсутствия взаимных претензий."
          }
        },
        {
          "@type": "Question",
          "name": "Что грозит работодателю при признании увольнения незаконным?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Суд восстанавливает работника в прежней должности, обязывает выплатить средний заработок за все время вынужденного прогула со дня увольнения по день вынесения решения, а также может взыскать компенсацию морального вреда и судебные расходы."
          }
        },
        {
          "@type": "Question",
          "name": "Какой срок давности у работника для обращения в суд об оспаривании увольнения?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Работник имеет право обратиться в суд по спорам об увольнении в течение одного месяца со дня вручения ему копии приказа об увольнении либо со дня выдачи трудовой книжки (сведений о трудовой деятельности)."
          }
        }
      ]
    }
  ]
};

  const situations = [
  {
    "tag": "Неисполнение обязанностей",
    "title": "Сотрудник систематически не выполняет обязанности",
    "desc": "Нужно проверить действующие взыскания, содержание обязанностей, доказательства нового нарушения и соблюдение дисциплинарной процедуры."
  },
  {
    "tag": "Грубое нарушение",
    "title": "Зафиксирован прогул или иное нарушение",
    "desc": "Важно установить фактические обстоятельства, запросить объяснения, проверить уважительность причин и соразмерность увольнения."
  },
  {
    "tag": "Утрата доверия",
    "title": "Основания для утраты доверия",
    "desc": "Необходимо проверить круг обязанностей работника, характер виновных действий, документы и применимый порядок увольнения."
  },
  {
    "tag": "Несоответствие должности",
    "title": "Работник не соответствует должности",
    "desc": "До решения об увольнении нужно оценить результаты аттестации, документы, вакансии и гарантии конкретного работника."
  },
  {
    "tag": "Соглашение сторон",
    "title": "Стороны готовы обсуждать соглашение",
    "desc": "Поможем сформулировать условия прекращения договора, выплаты, передачу дел и имущества так, чтобы снизить риск нового конфликта."
  },
  {
    "tag": "Судебный спор",
    "title": "Увольнение уже оспаривается в суде",
    "desc": "Изучим иск или жалобу в ГИТ, сформируем доказательственную позицию и представим интересы работодателя."
  }
];
  const checkpoints = [
  {
    "title": "Правовое основание",
    "desc": "Соответствуют ли фактические обстоятельства конкретному основанию прекращения трудового договора и можно ли его доказать в суде."
  },
  {
    "title": "Документы и доказательства",
    "desc": "Закреплены ли обязанности работника, корректно ли оформлены акты, служебные записки, уведомления, переписка и табели."
  },
  {
    "title": "Соблюдение процедуры",
    "desc": "Действуют ли ранее применённые взыскания, соблюдены ли сроки запроса объяснений (2 рабочих дня) и ознакомления с приказами."
  },
  {
    "title": "Гарантии и иммунитеты",
    "desc": "Нет ли запрета на увольнение в конкретный период (больничный, отпуск) или специальных гарантий (беременность, несовершеннолетние)."
  },
  {
    "title": "Соразмерность проступка",
    "desc": "Учтены ли предшествующее поведение работника, отношение к труду и тяжесть совершенного нарушения в соответствии с судебной практикой."
  },
  {
    "title": "Риски восстановления",
    "desc": "Рассчитываем потенциальный размер выплат за время вынужденного прогула и морального вреда для выбора оптимального пути."
  }
];
  const directions = [
  {
    "title": "Юридическое сопровождение сокращения штата",
    "desc": "Правовая проверка процедуры, категорий работников, вакансий, уведомлений и выплат — от подготовки решения до завершения.",
    "link": "/biznesu/trudovye-spory-s-rabotnikami/soprovozhdenie-sokrashcheniya-shtata/"
  },
  {
    "title": "Сопровождение проверок трудовой инспекции",
    "desc": "Анализ запроса и рисков, подготовка документов и объяснений, участие во взаимодействии с ГИТ, обжалование предписания или штрафа.",
    "link": "/biznesu/trudovye-spory-s-rabotnikami/soprovozhdenie-proverki-trudovoj-inspekcii/"
  },
  {
    "title": "Кадровый аудит организации",
    "desc": "Проверка трудовых договоров, локальных актов и кадровых процедур с перечнем рисков и рекомендациями по устранению нарушений.",
    "link": "/biznesu/trudovye-spory-s-rabotnikami/kadrovyj-audit/"
  }
];
  const cases: CaseData[] = [
  {
    "category": "Конфликтное увольнение",
    "title": "Урегулировали спор без восстановления руководителя в должности",
    "problem": "После увольнения руководителя подразделения работник потребовал восстановления, выплату среднего заработка за вынужденный прогул и моральный вред.",
    "action": "Проверили основание и процедуру увольнения, оценили доказательства сторон, рассчитали возможные расходы компании и подготовили соглашение.",
    "result": "Стороны заключили соглашение: трудовые отношения прекращены, работник отказался от претензий, компания избежала суда."
  },
  {
    "category": "Увольнение за прогул",
    "title": "Подтвердили законность увольнения за отсутствие на рабочем месте",
    "problem": "Работник оспорил увольнение за прогул, утверждая, что отсутствовал по уважительной причине без документального подтверждения.",
    "action": "Собрали акты об отсутствии, подтвердили надлежащее истребование объяснений и соблюдение сроков привлечения к дисциплинарной ответственности.",
    "result": "Суд отказал работнику в иске о восстановлении на работе и взыскании среднего заработка в полном объёме."
  },
  {
    "category": "Неоднократное неисполнение",
    "title": "Обосновали увольнение за систематическое нарушение обязанностей",
    "problem": "Сотрудник регулярно срывал сроки сдачи отчётности и пытался оспорить предшествующие дисциплинарные взыскания.",
    "action": "Провели аудит должностной инструкции, трудового договора и приказов о взысканиях, сформировали безупречную доказательственную базу.",
    "result": "Увольнение признано законным, претензии работника отклонены инспекцией труда и судом."
  }
];
  const processSteps = [
  {
    "num": "01",
    "title": "Анализ ситуации и основания",
    "desc": "Изучаем трудовой договор, локальные акты, должностную инструкцию и фактические обстоятельства для выбора законного основания."
  },
  {
    "num": "02",
    "title": "Сбор и проверка доказательств",
    "desc": "Оформляем или проверяем акты, служебные записки, запросы объяснений и табели учёта рабочего времени."
  },
  {
    "num": "03",
    "title": "Подготовка документов",
    "desc": "Составляем юридически выверенные проекты приказов, уведомлений или соглашения о расторжении трудового договора."
  },
  {
    "num": "04",
    "title": "Сопровождение процедуры",
    "desc": "Контролируем соблюдение сроков, порядок ознакомления, передачу дел и выдачу трудовой книжки/расчёта."
  },
  {
    "num": "05",
    "title": "Защита при оспаривании",
    "desc": "В случае жалобы работника в ГИТ или иска в суд готовим мотивированные возражения и представляем работодателя."
  }
];
  const pricingTiers = [
  {
    "title": "Консультация и аудит основания",
    "subtitle": "Первичная оценка рисков",
    "price": "от 5 000 ₽",
    "features": [
      { name: "анализ трудового договора и инструкций", value: "Да" },
      { name: "оценка достаточности доказательств", value: "Да" },
      { name: "выбор законного основания увольнения", value: "Да" }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form",
    "analyticsEvent": "click_pricing_audit_dismissal"
  },
  {
    "popular": true,
    "badgeText": "Востребовано",
    "title": "Полное сопровождение процедуры",
    "subtitle": "Документы и переговоры",
    "price": "от 15 000 ₽",
    "features": [
      { name: "составление актов", value: "Да" },
      { name: "запросов", value: "Да" },
      { name: "приказов", value: "Да" },
      { name: "подготовка соглашения сторон", value: "Да" },
      { name: "правовой контроль всей процедуры", value: "Да" }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form",
    "analyticsEvent": "click_pricing_full_dismissal"
  },
  {
    "title": "Защита в суде / ГИТ",
    "subtitle": "Судебное представительство",
    "price": "от 30 000 ₽",
    "features": [
      { name: "подготовка отзыва и доказательств", value: "Да" },
      { name: "участие в судебных заседаниях", value: "Да" },
      { name: "защита от восстановления работника", value: "Да" }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form",
    "analyticsEvent": "click_pricing_court_dismissal"
  }
];
  const faqs = [
  {
    "q": "Можно ли уволить сотрудника во время больничного или отпуска?",
    "a": "По инициативе работодателя увольнение в период временной нетрудоспособности или отпуска запрещено законом (ст. 81 ТК РФ), за исключением ликвидации организации. Однако увольнение по соглашению сторон или по собственному желанию в этот период возможно."
  },
  {
    "q": "Сколько времени даётся работнику на дачу письменных объяснений?",
    "a": "Работодатель обязан предоставить работнику не менее 2 рабочих дней для предоставления письменных объяснений с момента вручения требования. Если по истечении двух рабочих дней объяснение не предоставлено, составляется соответствующий акт."
  },
  {
    "q": "Что делать, если работник отказывается подписывать приказ об увольнении?",
    "a": "В таком случае на самом приказе делается соответствующая запись либо составляется отдельный акт об отказе от ознакомления в присутствии не менее двух свидетелей. Это подтверждает соблюдение работодателем установленного порядка."
  },
  {
    "q": "Как правильно оформить увольнение по соглашению сторон?",
    "a": "Составляется письменное соглашение в двух экземплярах с указанием даты прекращения договора, порядка передачи дел, размера выходного пособия или компенсации (при наличии) и отсутствия взаимных претензий."
  },
  {
    "q": "Что грозит работодателю при признании увольнения незаконным?",
    "a": "Суд восстанавливает работника в прежней должности, обязывает выплатить средний заработок за все время вынужденного прогула со дня увольнения по день вынесения решения, а также может взыскать компенсацию морального вреда и судебные расходы."
  },
  {
    "q": "Какой срок давности у работника для обращения в суд об оспаривании увольнения?",
    "a": "Работник имеет право обратиться в суд по спорам об увольнении в течение одного месяца со дня вручения ему копии приказа об увольнении либо со дня выдачи трудовой книжки (сведений о трудовой деятельности)."
  }
];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      {/* ═══ БЛОК 1: HERO ═══ */}
      <MilitaryHero
        breadcrumbs={
          <>
            <Link href="/">Главная</Link><span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/biznesu/">Бизнесу</Link><span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/biznesu/trudovye-spory-s-rabotnikami/">Трудовые споры с работниками</Link><span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Сопровождение увольнения работника</span>
          </>
        }
        superTitle="Помощь работодателям в Липецке и области"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Сопровождение
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              увольнения работника
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Проверим основание и доказательства, подготовим документы, сопроводим переговоры и процедуру увольнения, а при оспаривании — защитим интересы работодателя.
          </span>
        }
        primaryCtaText="Обсудить увольнение"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_dismissal"
        primaryCtaSubtext={
          <span style={{ display: 'block' }}>
            <span style={{ whiteSpace: 'nowrap' }}>Перезвоним вам в течение 15 минут в рабочее время</span>
          </span>
        }
        trustItems={[
  {
    "text": "Проверяем законность основания до увольнения"
  },
  {
    "text": "Готовим приказы, акты и письменные уведомления"
  },
  {
    "text": "Сопровождаем переговоры и соглашения сторон"
  },
  {
    "text": "Куратор — Марина Валерьевна Смольянинова"
  }
]}
        imageUrl="/images/smolyaninova.jpg"
        imageObjectPosition="50% -75px"
        imageName="Марина Валерьевна Смольянинова"
        imageSubtitle="Ведущий юрист ЮК «Де-Юре», куратор направления «Трудовые споры с работниками»"
      />

      {/* ═══ БЛОК 2: СИТУАЦИИ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: "inline-block" }}>В каких ситуациях</span> <br /><span style={{ display: "inline-block" }}>мы помогаем работодателю</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Подключаться лучше до издания приказа: после совершения процессуальной ошибки исправить позицию сложнее. Но юрист может вступить в работу и тогда, когда претензия или иск уже поданы.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {situations.map((sit, i) => (
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
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.08, pointerEvents: 'none' }}>
                  <svg width="100" height="100" viewBox="0 0 24 24" fill="var(--color-deep-blue)">
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                {sit.tag && (
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
                    {sit.tag}
                  </div>
                )}

                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--color-deep-blue)', lineHeight: 1.4, margin: '0 0 14px 0' }}>
                  {sit.title}
                </h3>

                <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0, position: 'relative', zIndex: 1 }}>
                  {sit.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Темно-синяя карточка ключевых точек контроля прямо под карточками ситуаций */}
          <div style={{
            marginTop: '40px',
            background: 'linear-gradient(135deg, var(--color-deep-blue) 0%, #17324D 100%)',
            border: '1px solid var(--color-deep-blue)',
            borderTop: '3px solid var(--color-gold)',
            boxShadow: '0 10px 30px rgba(16, 39, 59, 0.2)',
            padding: '40px 36px',
            position: 'relative',
            overflow: 'hidden',
            marginBottom: '32px'
          }}>
            {/* Фоновый декоративный вектор */}
            <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.08, pointerEvents: 'none' }}>
              <svg width="120" height="120" viewBox="0 0 24 24" fill="#FFFFFF">
                <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', paddingBottom: '16px', borderBottom: '1px solid rgba(255, 255, 255, 0.15)', marginBottom: '20px' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 6v6l4 2"></path>
              </svg>
              <div>
                <h3 style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontFamily: 'var(--font-serif)', color: '#FFFFFF', margin: 0, lineHeight: 1.25 }}>
                  Что проверяем до выбора основания увольнения
                </h3>
              </div>
            </div>

            <p style={{ margin: '0 0 28px 0', fontSize: '15px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, maxWidth: '820px' }}>
              <span style={{ display: 'inline-block' }}>Предотвращаем типичные ошибки оформления, которые приводят</span> <br className="hidden-mobile" />
              <span style={{ display: 'inline-block' }}>к восстановлению работника через суд и взысканию среднего заработка:</span>
            </p>

            <div className="grid grid-2" style={{ gap: '22px', position: 'relative', zIndex: 1 }}>
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

      {/* ═══ БЛОК: КУРАТОР НАПРАВЛЕНИЯ ═══ */}
      <SpecialistBlock 
        title="Куратор направления"
        name="Марина Валерьевна Смольянинова"
        position={<>Ведущий юрист ЮК «Де-Юре»,<br />куратор направления «Трудовые споры с работниками»</>}
        imageUrl="/images/smolyaninova.jpg"
        imagePosition="50% -75px"
        profileHref="/specialisty/smolyaninova-marina-valerevna/"
        profileText="Подробнее о Марине Валерьевне Смольяниновой →"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Марина Валерьевна курирует обращения работодателей по трудовым спорам: проводит первичную правовую оценку, определяет необходимые документы и последовательность действий, готовит позицию для переговоров, взаимодействия с государственными органами и судебной защиты.
          </span>,
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>2005 год — окончила Институт международного права и экономики имени А. С. Грибоедова</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Более 13 лет работы в Федеральной службе судебных приставов, включая руководящие должности</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Более 5 лет юридической практики с представительством организаций в судах и государственных органах</span>
            </li>
          </ul>
        ]}
        buttonText="Задать вопрос Марине Валерьевне"
        buttonHref="#form"
      />

      {/* ═══ БЛОК: ПРИМЕРЫ ИЗ ПРАКТИКИ ═══ */}
      <CasesBlock
        title="Примеры дел из практики"
        showAllLink="/praktika/"
        showAllText="Смотреть все дела"
        showDemoWarning={true}
        cases={cases}
      />

      {/* ═══ БЛОК 7: КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock title="Как проходит сопровождение увольнения"
        subtitle="Пошаговый правовой контроль на каждом этапе процедуры"
        steps={processSteps}
      />

      {/* ═══ БЛОК 8: СТОИМОСТЬ ЮРИДИЧЕСКОЙ ПОМОЩИ ═══ */}
      <PricingBlock
        title="Стоимость сопровождения увольнения"
        subtitle="Фиксируем состав услуг и стоимость в договоре до начала работы."
        tiers={pricingTiers}
        disclaimer="Стоимость определяется после уточнения задачи и изучения имеющихся документов. Состав услуг, цена и порядок оплаты фиксируются в договоре до начала работы. Оплата вознаграждения исполнителя не зависит от исхода дела и не включает государственные пошлины и сопутствующие расходы."
      />

      {/* ═══ БЛОК 9: ЧАСТЫЕ ВОПРОСЫ (FAQ) ═══ */}
      <FAQBlock
        superTitle="Вопросы об увольнении работников"
        title=<><span>Ответы на вопросы</span> <br /><span>по увольнению</span></>
        subtitle="Разбираем сложные ситуации, сроки и процедурные нюансы"
        ctaText="Задать свой вопрос"
        ctaLink="#form"
        faqs={faqs}
      />

      {/* ═══ БЛОК 9: СМЕЖНЫЕ УСЛУГИ НАПРАВЛЕНИЯ (ТОЧНЫЙ ШАБЛОН) ═══ */}
      <section id="directions" className="section bg-light" style={{ padding: '64px 0', background: 'var(--gradient-cream)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '32px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '14px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>Смежные услуги направления</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Если задача выходит за рамки конкретного вопроса, подключаем другие услуги практики трудового права.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '20px' }}>
            {directions.map((dir, i) => (
              <a key={i} href={dir.link} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                <div
                  className="card related-service-card hover-lift"
                  style={{
                    height: '100%',
                    minHeight: '180px',
                    padding: '24px',
                    background: 'var(--color-white)',
                    border: '1px solid var(--color-border)',
                    borderTop: '3px solid var(--color-primary)',
                    borderRadius: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.3s'
                  }}
                >
                  <div>
                    <h3 style={{ margin: '0 0 10px 0', fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', lineHeight: 1.35, fontWeight: 700 }}>
                      {dir.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                      {dir.desc}
                    </p>
                  </div>
                  <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600, marginTop: '16px', transition: 'color 0.35s ease' }}>
                    <span>Подробнее</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div style={{ marginTop: '28px' }}>
            <Link href="/biznesu/trudovye-spory-s-rabotnikami/" className="all-services-link" style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '15px', textDecoration: 'underline', textUnderlineOffset: '4px', display: 'inline-flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s ease' }}>
              Смотреть все услуги практики трудового права →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 10: ФИНАЛЬНАЯ ФОРМА ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px', padding: '80px 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  Связаться с юристом
                </span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                <span className="hero-title-span-mobile" style={{ display: "block", whiteSpace: "nowrap" }}>Обсудить увольнение</span> <span className="hero-title-span-mobile" style={{ display: "block", whiteSpace: "nowrap" }}>работника</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Опишите ситуацию с сотрудником. Марина Валерьевна Смольянинова изучит обстоятельства, оценит основания и предложит законный порядок действий.
              </p>
              
              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация юриста</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните прямо сейчас: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (910) 350-31-11</a>
                </p>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Конфиденциальность:</strong>
                Не указывайте в форме паспортные данные работников, сведения о здоровье и коммерческую тайну. Документы можно передать юристу после согласования защищённого способа связи.
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Написать нам"
                subtitle={
                  <>
                    <span style={{ display: 'inline-block' }}>Оставьте имя и номер телефона. Юрист свяжется с вами</span> <br />
                    <span style={{ display: 'inline-block' }}>в течение 15 минут в рабочее время.</span>
                  </>
                }
                subtext={
                  <>
                    <span style={{ display: 'inline-block' }}>Если вы оставите заявку вечером или в&nbsp;выходной день,</span> <br />
                    <span style={{ display: 'inline-block' }}>мы перезвоним в&nbsp;ближайший рабочий день.</span>
                  </>
                }
                buttonText="Отправить обращение"
                commentPlaceholder="Опишите ситуацию: в чем заключается проступок сотрудника, какие документы уже составлены..."
                hiddenFields={[
  {
    "name": "source_page",
    "value": "/biznesu/trudovye-spory-s-rabotnikami/soprovozhdenie-uvolneniya-rabotnika/"
  },
  {
    "name": "direction",
    "value": "soprovozhdenie_uvolneniya"
  },
  {
    "name": "selected_specialist",
    "value": "smolyaninova-marina-valerevna"
  },
  {
    "name": "service_id",
    "value": "b2b-dismissal"
  }
]}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
