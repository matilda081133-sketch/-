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

export default function SoprovozhdenieSokrashcheniyaClient() {
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
          "name": "Сопровождение сокращения штата",
          "item": "https://dejure-help.ru/biznesu/trudovye-spory-s-rabotnikami/soprovozhdenie-sokrashcheniya-shtata/"
        }
      ]
    },
    {
      "@type": "Service",
      "name": "Юридическое сопровождение сокращения штата в Липецке",
      "description": "Полный правовой контроль процедуры сокращения численности или штата: от приказа до выплат и защиты от восстановления работников.",
      "url": "https://dejure-help.ru/biznesu/trudovye-spory-s-rabotnikami/soprovozhdenie-sokrashcheniya-shtata/",
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
          "name": "За какой срок нужно уведомить работников о сокращении?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "О предстоящем увольнении в связи с сокращением численности или штата работники предупреждаются персонально и под роспись не менее чем за два месяца до увольнения."
          }
        },
        {
          "@type": "Question",
          "name": "Кого закон запрещает увольнять по сокращению штата?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Запрещено сокращать беременных женщин, женщин с детьми до 3 лет, одиноких матерей с детьми до 14 лет (или ребенком-инвалидом до 18 лет), а также работников, находящихся на больничном или в отпуске на дату увольнения."
          }
        },
        {
          "@type": "Question",
          "name": "Кто имеет преимущественное право остаться на работе?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "При равной производительности труда и квалификации предпочтение отдается: семейным при наличии двух и более иждивенцев; лицам, в семье которых нет других работников с самостоятельным заработком; работникам, получившим у данного работодателя трудовое увечье или профзаболевание, и др."
          }
        },
        {
          "@type": "Question",
          "name": "Какие выплаты положены работнику при сокращении?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Выплачивается заработная плата, компенсация за неиспользованный отпуск и выходное пособие в размере среднего месячного заработка. Также за работником сохраняется средний заработок на период трудоустройства до 2-3 месяцев по правилам ст. 178 ТК РФ."
          }
        },
        {
          "@type": "Question",
          "name": "Обязательно ли предлагать вакансии в других городах?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Работодатель обязан предлагать вакансии в других местностях только в том случае, если это прямо предусмотрено коллективным договором, соглашениями или трудовым договором."
          }
        }
      ]
    }
  ]
};

  const situations = [
  {
    "tag": "Планирование",
    "title": "Компания только планирует оптимизацию штата",
    "desc": "Нужно разработать дорожную карту, составить штатное расписание и подготовить приказ о начале мероприятий."
  },
  {
    "tag": "Льготные категории",
    "title": "В штате есть сотрудники с гарантиями от увольнения",
    "desc": "Определяем работников с абсолютным запретом на сокращение и анализируем преимущественное право оставления на работе."
  },
  {
    "tag": "Предложение вакансий",
    "title": "Требуется корректно предложить все вакансии",
    "desc": "Проверяем соответствие квалификации и контролируем регулярность предложения вакансий на протяжении всего срока."
  },
  {
    "tag": "Уведомление органов",
    "title": "Необходимо уведомить профсоюз и ЦЗН",
    "desc": "Соблюдаем обязательные сроки и форму извещения службы занятости и профсоюзных органов при обычном и массовом сокращении."
  },
  {
    "tag": "Досрочное увольнение",
    "title": "Работник согласен уволиться до истечения 2 месяцев",
    "desc": "Оформляем согласие на досрочное увольнение с выплатой дополнительной компенсации в строгом соответствии со ст. 180 ТК РФ."
  },
  {
    "tag": "Риск судебного иска",
    "title": "Сокращенный работник обратился в суд",
    "desc": "Формируем полную доказательственную базу и представляем интересы работодателя в судебных заседаниях."
  }
];
  const checkpoints = [
  {
    "title": "Реальность сокращения",
    "desc": "Обоснование экономической или организационной необходимости изменения структуры и утверждение нового штатного расписания."
  },
  {
    "title": "Преимущественное право",
    "desc": "Сравнительный анализ производительности труда и квалификации работников по правилам ст. 179 ТК РФ с протоколом комиссии."
  },
  {
    "title": "Письменные уведомления",
    "desc": "Персональное уведомление каждого работника под роспись не менее чем за два месяца до предполагаемой даты увольнения."
  },
  {
    "title": "Аудит всех вакансий",
    "desc": "Предложение всех подходящих и нижестоящих вакансий, имеющихся у работодателя в данной местности, на протяжении всего срока."
  },
  {
    "title": "Соблюдение гарантий",
    "desc": "Исключение из процедуры беременных женщин, женщин с детьми до 3 лет, одиноких матерей и других защищенных категорий."
  },
  {
    "title": "Расчет и выплаты",
    "desc": "Выплата выходного пособия, сохранение среднего заработка на период трудоустройства и расчет дополнительных компенсаций."
  }
];
  const directions = [
  {
    "title": "Юридическое сопровождение увольнения работника",
    "desc": "Проверка основания и доказательств, подготовка документов, переговоры с работником и защита работодателя при оспаривании.",
    "link": "/biznesu/trudovye-spory-s-rabotnikami/soprovozhdenie-uvolneniya-rabotnika/"
  },
  {
    "title": "Кадровый аудит организации",
    "desc": "Проверка трудовых договоров, локальных актов и кадровых процедур с перечнем рисков и рекомендациями по устранению нарушений.",
    "link": "/biznesu/trudovye-spory-s-rabotnikami/kadrovyj-audit/"
  },
  {
    "title": "Сопровождение проверок трудовой инспекции",
    "desc": "Анализ запроса и рисков, подготовка документов и объяснений, участие во взаимодействии с ГИТ, обжалование предписания или штрафа.",
    "link": "/biznesu/trudovye-spory-s-rabotnikami/soprovozhdenie-proverki-trudovoj-inspekcii/"
  }
];
  const cases: CaseData[] = [
  {
    "category": "Оптимизация структуры",
    "title": "Сопроводили сокращение штата без единого судебного спора",
    "problem": "Производственной компании требовалось сократить 14 штатных единиц в трех филиалах с соблюдением преимущественного права.",
    "action": "Разработали пошаговый план, подготовили протоколы комиссии по ст. 179 ТК РФ, вели учет вакансий и персональных уведомлений.",
    "result": "Процедура завершена в установленные сроки. Жалоб в ГИТ и исков о восстановлении не последовало."
  },
  {
    "category": "Защита в суде",
    "title": "Отстояли законность сокращения ведущего специалиста",
    "problem": "Уволенный по сокращению сотрудник заявил в суде, что ему не были предложены временные вакансии в обособленном подразделении.",
    "action": "Доказали в суде отсутствие вакансий, соответствующих квалификации истца, и полное соблюдение порядка уведомлений.",
    "result": "Суд признал увольнение законным и отказал работнику в восстановлении и взыскании 420 000 ₽."
  },
  {
    "category": "Досудебное урегулирование",
    "title": "Согласовали досрочное прекращение договоров с выплатой компенсаций",
    "problem": "Сотрудники закрываемого отдела планировали затягивать процесс через открытие больничных листов.",
    "action": "Провели переговоры и оформили соглашения о досрочном расторжении с выплатой дополнительной компенсации по ст. 180 ТК РФ.",
    "result": "Отдел ликвидирован на месяц раньше планового срока без трудового конфликта."
  }
];
  const processSteps = [
  {
    "num": "01",
    "title": "Аудит штата и планирование",
    "desc": "Анализируем штатное расписание, выявляем защищенные категории и оцениваем преимущественное право."
  },
  {
    "num": "02",
    "title": "Издание приказов и уведомлений",
    "desc": "Готовим приказ о сокращении, форму извещения ЦЗН и персональные уведомления сотрудников."
  },
  {
    "num": "03",
    "title": "Контроль предложения вакансий",
    "desc": "Ведем журнал учета вакансий и формируем письменные предложения на всех этапах срока предупреждения."
  },
  {
    "num": "04",
    "title": "Оформление увольнения и выплат",
    "desc": "Готовим итоговые приказы, рассчитываем выходные пособия и оформляем трудовые книжки."
  },
  {
    "num": "05",
    "title": "Защита позиции работодателя",
    "desc": "При возникновении разногласий готовим правовую позицию для трудовой инспекции и суда."
  }
];
  const pricingTiers = [
  {
    "title": "Аудит и дорожная карта",
    "subtitle": "Подготовительный этап",
    "price": "от 10 000 ₽",
    "features": [
      { name: "анализ штатного расписания", value: "Да" },
      { name: "выявление лиц с иммунитетом", value: "Да" },
      { name: "разработка графика мероприятий", value: "Да" }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form",
    "analyticsEvent": "click_pricing_audit_redundancy"
  },
  {
    "popular": true,
    "badgeText": "ПОПУЛЯРНЫЙ ВЫБОР",
    "title": "Полный пакет документов",
    "subtitle": "Документальное сопровождение",
    "price": "от 25 000 ₽",
    "features": [
      { name: "проекты приказов и уведомлений", value: "Да" },
      { name: "уведомления профсоюза и ЦЗН", value: "Да" },
      { name: "протоколы комиссии по ст. 179 ТК РФ", value: "Да" }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form",
    "analyticsEvent": "click_pricing_docs_redundancy"
  },
  {
    "title": "Комплекс «под ключ» + защита",
    "subtitle": "Сопровождение до завершения",
    "price": "от 45 000 ₽",
    "features": [
      { name: "полный юридический контроль", value: "Да" },
      { name: "участие в сложных переговорах", value: "Да" },
      { name: "представительство в суде и ГИТ", value: "Да" }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form",
    "analyticsEvent": "click_pricing_turnkey_redundancy"
  }
];
  const faqs = [
  {
    "q": "За какой срок нужно уведомить работников о сокращении?",
    "a": "О предстоящем увольнении в связи с сокращением численности или штата работники предупреждаются персонально и под роспись не менее чем за два месяца до увольнения."
  },
  {
    "q": "Кого закон запрещает увольнять по сокращению штата?",
    "a": "Запрещено сокращать беременных женщин, женщин с детьми до 3 лет, одиноких матерей с детьми до 14 лет (или ребенком-инвалидом до 18 лет), а также работников, находящихся на больничном или в отпуске на дату увольнения."
  },
  {
    "q": "Кто имеет преимущественное право остаться на работе?",
    "a": "При равной производительности труда и квалификации предпочтение отдается: семейным при наличии двух и более иждивенцев; лицам, в семье которых нет других работников с самостоятельным заработком; работникам, получившим у данного работодателя трудовое увечье или профзаболевание, и др."
  },
  {
    "q": "Какие выплаты положены работнику при сокращении?",
    "a": "Выплачивается заработная плата, компенсация за неиспользованный отпуск и выходное пособие в размере среднего месячного заработка. Также за работником сохраняется средний заработок на период трудоустройства до 2-3 месяцев по правилам ст. 178 ТК РФ."
  },
  {
    "q": "Обязательно ли предлагать вакансии в других городах?",
    "a": "Работодатель обязан предлагать вакансии в других местностях только в том случае, если это прямо предусмотрено коллективным договором, соглашениями или трудовым договором."
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
            <span style={{ color: 'var(--color-text-main)' }}>Сопровождение сокращения штата</span>
          </>
        }
        superTitle="Помощь работодателям в Липецке и области"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Сопровождение
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              сокращения штата
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Проверим процедуру, категории работников, вакансии, уведомления и выплаты — от подготовки решения до завершения сокращения без нарушений.
          </span>
        }
        primaryCtaText="Обсудить сокращение"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_redundancy"
        primaryCtaSubtext={
          <span style={{ display: 'block' }}>
            <span style={{ whiteSpace: 'nowrap' }}>Перезвоним вам в течение 15 минут в рабочее время</span>
          </span>
        }
        trustItems={[
  {
    "text": "Проверяем преимущественное право и гарантии"
  },
  {
    "text": "Контролируем сроки уведомлений работников и службы занятости"
  },
  {
    "text": "Формируем перечни вакансий и проекты приказов"
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
              <span style={{ display: "inline-block" }}>Когда компании</span> <br /><span style={{ display: "inline-block" }}>требуется сопровождение</span> <br /><span style={{ display: "inline-block" }}>сокращения штата</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Сокращение численности или штата — одна из наиболее строго регламентированных процедур ТК РФ. Любое процедурное упущение ведет к восстановлению сотрудников в суде.
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
                  Ключевые этапы и контрольные точки сокращения штата
                </h3>
              </div>
            </div>

            <p style={{ margin: '0 0 28px 0', fontSize: '15px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, maxWidth: '820px' }}>
              Проверяем обязательные процедуры и сроки, нарушение которых влечет признание сокращения незаконным:
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
      <ProcessBlock title="Этапы юридического сопровождения"
        subtitle="Полный правовой контроль от подготовки приказа до финальных расчетов"
        steps={processSteps}
      />

      {/* ═══ БЛОК 8: СТОИМОСТЬ ЮРИДИЧЕСКОЙ ПОМОЩИ ═══ */}
      <PricingBlock
        title="Стоимость сопровождения сокращения"
        subtitle="Стоимость зависит от численности сокращаемых сотрудников и структуры компании."
        tiers={pricingTiers}
        disclaimer="Стоимость определяется после уточнения задачи и изучения имеющихся документов. Состав услуг, цена и порядок оплаты фиксируются в договоре до начала работы. Оплата вознаграждения исполнителя не зависит от исхода дела и не включает государственные пошлины и сопутствующие расходы."
      />

      {/* ═══ БЛОК 9: ЧАСТЫЕ ВОПРОСЫ (FAQ) ═══ */}
      <FAQBlock
        superTitle="Вопросы о сокращении штата"
        title=<><span>Ответы на вопросы</span> <br /><span>по сокращению</span></>
        subtitle="Важные правовые нюансы и требования законодательства"
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
                <span className="hero-title-span-mobile" style={{ display: "block", whiteSpace: "nowrap" }}>Обсудить процедуру</span> <span className="hero-title-span-mobile" style={{ display: "block", whiteSpace: "nowrap" }}>сокращения</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Опишите планируемые изменения в штате. Марина Валерьевна Смольянинова оценит риски и составит дорожную карту законной процедуры.
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
                commentPlaceholder="Опишите задачу: сколько сотрудников планируется сократить, какие должности затрагиваются..."
                hiddenFields={[
  {
    "name": "source_page",
    "value": "/biznesu/trudovye-spory-s-rabotnikami/soprovozhdenie-sokrashcheniya-shtata/"
  },
  {
    "name": "direction",
    "value": "soprovozhdenie_sokrashcheniya"
  },
  {
    "name": "selected_specialist",
    "value": "smolyaninova-marina-valerevna"
  },
  {
    "name": "service_id",
    "value": "b2b-redundancy"
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
