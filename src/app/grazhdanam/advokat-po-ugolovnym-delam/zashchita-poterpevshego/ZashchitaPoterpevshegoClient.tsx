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
          "name": "Защита прав потерпевшего",
          "item": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/zashchita-poterpevshego/"
        }
      ]
    },
    {
      "@type": "Service",
      "name": "Защита прав потерпевшего в Липецке",
      "description": "Представительство потерпевших по уголовным делам в Липецке: возбуждение дела, гражданский иск, возмещение ущерба, контроль следствия и участие в суде.",
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
          "name": "Нужен ли потерпевшему адвокат, если есть следователь и прокурор?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Следователь и прокурор действуют в интересах государства и раскрытия преступления в целом. Адвокат потерпевшего защищает именно ваши частные интересы: добивается возмещения ущерба, ареста активов виновного, исключает затягивание дела и не позволяет увести виновных от ответственности."
          }
        },
        {
          "@type": "Question",
          "name": "Когда нужно подавать гражданский иск в уголовном процессе?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Гражданский иск может быть предъявлен после возбуждения уголовного дела и до окончания судебного следствия при разбирательстве дела в суде первой инстанции (ч. 2 ст. 44 УПК РФ). Госпошлиной такой иск не облагается."
          }
        },
        {
          "@type": "Question",
          "name": "Что делать, если следователь затягивает расследование?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Адвокат подает жалобы в порядке ст. 123–124 УПК РФ руководителю следственного органа и прокурору на бездействие следователя и нарушение разумных сроков уголовного судопроизводства (ст. 6.1 УПК РФ)."
          }
        },
        {
          "@type": "Question",
          "name": "Может ли потерпевший возражать против смягчения меры пресечения обвиняемому?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да. Потерпевший и его представитель вправе участвовать в судебных заседаниях по продлению срока содержания под стражей и высказывать мотивированные возражения против освобождения обвиняемого из СИЗО или перевода под домашний арест."
          }
        }
      ]
    }
  ]
};

  const situations = [
  {
    "title": "Полиция отказывает в возбуждении уголовного дела",
    "desc": "Вынесение формальных постановлений об отказе в возбуждении дела по заявлениям о мошенничестве, краже или побоях.",
    "impact": "Изучаем отказной материал, готовим мотивированные жалобы в прокуратуру и суд по ст. 124, 125 УПК РФ."
  },
  {
    "title": "Волокита и бездействие следственных органов",
    "desc": "Уголовное дело возбуждено, но следственные действия не проводятся, виновные лица не допрашиваются, экспертизы затягиваются.",
    "impact": "Подаем ходатайства о проведении неотложных следственных действий и жалобы на имя руководителя следственного органа."
  },
  {
    "title": "Взыскание материального ущерба и морального вреда",
    "desc": "Необходимость взыскания стоимости похищенного имущества, затрат на лечение, утраченного заработка и компенсации морального вреда.",
    "impact": "Составляем исковое заявление в рамках уголовного процесса и добиваемся обеспечительного ареста счетов и имущества обвиняемого."
  },
  {
    "title": "Попытки обвиняемого избежать справедливого наказания",
    "desc": "Оказание давления на потерпевшего, попытки подкупа, фальсификация доказательств невиновности или необоснованное затягивание процесса.",
    "impact": "Обеспечиваем процессуальную безопасность доверителя, участвуем во всех заседаниях и поддерживаем обвинение."
  }
];
  const checkpoints = [
  {
    "title": "Официальное признание лица потерпевшим (ст. 42 УПК РФ)",
    "desc": "Контролируем вынесение постановления о признании потерпевшим незамедлительно с момента возбуждения уголовного дела."
  },
  {
    "title": "Подача гражданского иска и признание гражданским истцом",
    "desc": "Формируем доказательную базу реального имущественного ущерба, расходов на лечение и физических/нравственных страданий."
  },
  {
    "title": "Наложение ареста на имущество подозреваемого / обвиняемого",
    "desc": "Ходатайствуем перед следователем и судом о наложении ареста на автомобили, недвижимость и счета виновного для гарантии выплат."
  },
  {
    "title": "Ознакомление со всеми постановлениями об экспертизах",
    "desc": "Ставим дополнительные вопросы экспертам, знакомимся с заключениями судебно-медицинских и товароведческих экспертиз."
  },
  {
    "title": "Участие в допросах, очных ставках и следственных действиях",
    "desc": "Задаем вопросы обвиняемому и свидетелям, фиксируем противоречия в их показаниях и пресекаем давление на потерпевшего."
  },
  {
    "title": "Обжалование необоснованного прекращения или приостановления дела",
    "desc": "Оспариваем незаконные решения следователя о приостановлении расследования за неустановлением лица, подлежащего привлечению."
  }
];
  const casesData: CaseData[] = [
  {
    "title": "Отмена трех незаконных отказов и возбуждение дела по ст. 159 УК РФ",
    "category": "Мошенничество в отношении граждан",
    "problem": "Полиция трижды выносила постановления об отказе в возбуждении дела по факту хищения 2.4 млн руб. под предлогом инвестиций.",
    "action": "Адвокат потерпевшего собрал выписки по счетам дропперов, подготовил жалобу прокурору области с анализом схемы хищения.",
    "result": "Постановление об отказе отменено, возбуждено уголовное дело по ч. 4 ст. 159 УК РФ, виновные лица установлены."
  },
  {
    "title": "Взыскание 3.5 млн рублей ущерба и морального вреда при ДТП",
    "category": "ДТП с тяжкими травмами",
    "problem": "Виновник аварии отказывался компенсировать затраты на сложные хирургические операции пострадавшего пассажира.",
    "action": "Адвокат подготовил гражданский иск в уголовном процессе, добился ареста двух иномарок обвиняемого до вынесения приговора.",
    "result": "Суд полностью удовлетворил гражданский иск, взыскав 3.5 млн руб., сумма выплачена за счет арестованного имущества."
  },
  {
    "title": "Предотвращение необоснованного прекращения уголовного дела",
    "category": "Причинение тяжкого вреда",
    "problem": "Следствие планировало прекратить уголовное дело в связи с якобы имевшей место необходимой обороной со стороны нападавшего.",
    "action": "Адвокат истребовал видеозаписи с камер уличного наблюдения, доказав инициативный и агрессивный характер действий нападавшего.",
    "result": "Дело направлено в суд с обвинительным заключением по ст. 111 УК РФ, виновный приговорен к реальному лишению свободы."
  }
];
  const processSteps: ProcessStep[] = [
  {
    "num": "01",
    "title": "Правовой аудит ситуации и отказных материалов",
    "desc": "Изучаем решение следствия, собираем доказательства причиненного вреда и определяем процессуальную стратегию."
  },
  {
    "num": "02",
    "title": "Добиваемся возбуждения уголовного дела",
    "desc": "Подаем мотивированные жалобы в надзорные органы, добиваемся отмены отказных постановлений и возбуждения дела."
  },
  {
    "num": "03",
    "title": "Подача гражданского иска и арест активов",
    "desc": "Заявляем иск о компенсации ущерба и морального вреда, ходатайствуем об аресте счетов и имущества обвиняемого."
  },
  {
    "num": "04",
    "title": "Представительство в следствии и судебных заседаниях",
    "desc": "Лично участвуем во всех процессуальных действиях, допросах, судебных заседаниях и прениях, поддерживая обвинение."
  }
];
  const pricingTiers: PricingTier[] = [
  {
    "title": "Анализ материалов и жалоба на отказ в ВУД",
    "subtitle": "Добиваемся возбуждения уголовного дела",
    "price": "от 10 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "изучение отказного материала в полиции / СК",
        "value": "Да"
      },
      {
        "name": "подготовка мотивированной жалобы прокурору",
        "value": "Да"
      },
      {
        "name": "контроль отмены незаконного постановления",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  },
  {
    "title": "Представительство на стадии следствия",
    "subtitle": "Комплексная защита прав потерпевшего",
    "price": "от 40 000 ₽",
    "popular": true,
    "badgeText": "Востребовано",
    "features": [
      {
        "name": "участие во всех следственных действиях и допросах",
        "value": "Да"
      },
      {
        "name": "составление гражданского иска о возмещении вреда",
        "value": "Да"
      },
      {
        "name": "ходатайства о наложении ареста на имущество обвиняемого",
        "value": "Да"
      },
      {
        "name": "ознакомление со всеми материалами уголовного дела",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  },
  {
    "title": "Представительство в суде первой инстанции",
    "subtitle": "Судебный процесс и поддержание иска",
    "price": "от 45 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "участие во всех судебных заседаниях",
        "value": "Да"
      },
      {
        "name": "поддержание обвинения и обоснование гражданского иска",
        "value": "Да"
      },
      {
        "name": "допрос обвиняемого, свидетелей и экспертов",
        "value": "Да"
      },
      {
        "name": "получение исполнительного листа после приговора",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  }
];
  const relatedServices = [
  {
    "title": "Адвокат по мошенничеству (ст. 159)",
    "desc": "Помощь пострадавшим от финансовых пирамид, недобросовестных застройщиков и мошеннических схем.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-moshennichestvu/"
  },
  {
    "title": "Адвокат по ДТП с пострадавшими (ст. 264)",
    "desc": "Взыскание компенсации морального вреда и расходов на лечение пострадавших в дорожных авариях.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-dtp-s-postradavshimi/"
  },
  {
    "title": "Исполнительное производство (взыскание)",
    "desc": "Реальное взыскание присужденных сумм ущерба через службу судебных приставов и банки.",
    "link": "/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/"
  }
];
  const faqItems = [
  {
    "q": "Нужен ли потерпевшему адвокат, если есть следователь и прокурор?",
    "a": "Следователь и прокурор действуют в интересах государства и раскрытия преступления в целом. Адвокат потерпевшего защищает именно ваши частные интересы: добивается возмещения ущерба, ареста активов виновного, исключает затягивание дела и не позволяет увести виновных от ответственности."
  },
  {
    "q": "Когда нужно подавать гражданский иск в уголовном процессе?",
    "a": "Гражданский иск может быть предъявлен после возбуждения уголовного дела и до окончания судебного следствия при разбирательстве дела в суде первой инстанции (ч. 2 ст. 44 УПК РФ). Госпошлиной такой иск не облагается."
  },
  {
    "q": "Что делать, если следователь затягивает расследование?",
    "a": "Адвокат подает жалобы в порядке ст. 123–124 УПК РФ руководителю следственного органа и прокурору на бездействие следователя и нарушение разумных сроков уголовного судопроизводства (ст. 6.1 УПК РФ)."
  },
  {
    "q": "Может ли потерпевший возражать против смягчения меры пресечения обвиняемому?",
    "a": "Да. Потерпевший и его представитель вправе участвовать в судебных заседаниях по продлению срока содержания под стражей и высказывать мотивированные возражения против освобождения обвиняемого из СИЗО или перевода под домашний арест."
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
              <span style={{ color: '#FFFFFF' }}>Защита прав потерпевшего</span>
            </nav>
          }
          superTitle="Уголовный процесс • Защита прав потерпевших"
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
          subtitle="Профессиональное представительство интересов потерпевших на стадии доследственной проверки, предварительного следствия и в суде. Добиваемся возбуждения дел, ареста активов виновных и полного возмещения вреда. Связь в рабочее время: Пн–Пт с 09:00 до 18:00."
          primaryCtaText="Обсудить ситуацию"
          primaryCtaLink="#form"
          primaryCtaSubtext={
            <span style={{ display: 'block' }}>
              <span style={{ whiteSpace: 'nowrap' }}>Перезвоним вам в течение 15 минут в рабочее время</span>
            </span>
          }
          trustItems={[
            { text: 'Добьемся отмены незаконного отказа в возбуждении уголовного дела' },
            { text: 'Заявим гражданский иск и обеспечим арест имущества обвиняемого' },
            { text: 'Защитим права потерпевшего в суде и не допустим ухода от ответственности' }
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
                <span style={{ display: "inline-block" }}>потерпевшему требуется</span> <br />
                <span style={{ display: "inline-block" }}>помощь адвоката</span>
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Адвокат потерпевшего обеспечивает активное участие в процессе, противодействуя волоките и формализму.
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
                    Что контролирует представитель потерпевшего
                  </h3>
                </div>
              </div>

              <p style={{ margin: '0 0 28px 0', fontSize: '15px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, maxWidth: '820px' }}>
                Ключевые процессуальные действия по защите прав пострадавшей стороны:
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
