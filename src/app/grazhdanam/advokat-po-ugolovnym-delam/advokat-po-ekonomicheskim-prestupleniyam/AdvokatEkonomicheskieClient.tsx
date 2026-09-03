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

export default function AdvokatEkonomicheskieClient() {
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
          "name": "Адвокат по экономическим преступлениям",
          "item": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-ekonomicheskim-prestupleniyam/"
        }
      ]
    },
    {
      "@type": "Service",
      "name": "Адвокат по экономическим преступлениям в Липецке",
      "description": "Защита руководителей, предпринимателей и бухгалтеров по экономическим и налоговым преступлениям (ст. 199, 160, 201 УК РФ) в Липецке. Экс-следователи по ОВД.",
      "url": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-ekonomicheskim-prestupleniyam/",
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
          "name": "Когда материалы налоговой проверки передаются в следственные органы?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ФНС обязана направить материалы в Следственный комитет РФ, если налогоплательщик не уплатил недоимку, пени и штрафы в течение 75 дней после вступления в силу решения по налоговой проверке (при условии, что сумма превышает крупный размер по ст. 199 УК РФ)."
          }
        },
        {
          "@type": "Question",
          "name": "Можно ли избежать уголовной ответственности по налогам, если погасить долг?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да. Согласно примечанию к ст. 199 УК РФ и ст. 28.1 УПК РФ, лицо, впервые совершившее преступление, полностью освобождается от уголовной ответственности, если ущерб бюджету (налоги, пени, штрафы) возмещен в полном объеме до вынесения приговора."
          }
        },
        {
          "@type": "Question",
          "name": "Могут ли арестовать счета компании по уголовному делу директора?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Следователь вправе ходатайствовать об аресте имущества для обеспечения исполнения приговора в части гражданского иска или штрафа. Однако адвокат может обжаловать арест счетов, если он парализует законную операционную деятельность предприятия и выплату зарплаты."
          }
        },
        {
          "@type": "Question",
          "name": "Как правильно вести себя при внезапном обыске в офисе (ОЭБиПК / СК)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Немедленно свяжитесь с адвокатом, потребуйте предъявить постановление об обыске, не давайте показаний без защитника (ст. 51 Конституции РФ), требуйте внесения в протокол всех изъятых предметов и замечаний о нарушениях."
          }
        }
      ]
    }
  ]
};

  const situations = [
  {
    "title": "Уклонение от уплаты налогов (ст. 199 УК РФ)",
    "desc": "Материалы выездной налоговой проверки направлены в СК РФ по признакам неуплаты НДС, налога на прибыль или дробления бизнеса.",
    "impact": "Проверяем расчет недоимки, обосновываем отсутствие умысла, используем возможность прекращения дела при уплате налогов и пени."
  },
  {
    "title": "Присвоение или растрата вверенного имущества (ст. 160)",
    "desc": "Обвинение директора, бухгалтера или материально ответственного лица в хищении средств организации или партнеров.",
    "impact": "Проводим финансово-бухгалтерский аудит первичных документов, доказываем расходование средств в интересах предприятия."
  },
  {
    "title": "Злоупотребление полномочиями руководителем (ст. 201)",
    "desc": "Претензии учредителей, акционеров или конкурсного управляющего о заключении невыгодных сделок и причинении вреда.",
    "impact": "Доказываем коммерческую обоснованность сделок и нормальный предпринимательский риск без корыстной цели."
  },
  {
    "title": "Незаконное предпринимательство или банковская деятельность",
    "desc": "Обвинения по ст. 171, 172 УК РФ при работе без лицензии, обналичивании средств или транзитных операциях.",
    "impact": "Анализируем требования законодательства о лицензировании, реальные объемы извлеченного дохода и структуру расчетов."
  }
];
  const checkpoints = [
  {
    "title": "Соблюдение процедуры возбуждения уголовного дела по налогам",
    "desc": "Проверяем сроки направления материалов из ФНС, вступление в силу налогового решения и предоставление срока на добровольную уплату."
  },
  {
    "title": "Реальность совершенных хозяйственных операций",
    "desc": "Собираем доказательственную базу фактического выполнения работ, поставки материалов, наличия складских и транспортных мощностей."
  },
  {
    "title": "Обоснованность финансово-экономических экспертиз следствия",
    "desc": "Привлекаем независимых аудиторов и экспертов для проверки методики расчета ущерба и исключения двойного учета сумм."
  },
  {
    "title": "Пределы предпринимательского риска",
    "desc": "Доказываем, что действия руководителя были направлены на предотвращение убытков компании в условиях меняющегося рынка."
  },
  {
    "title": "Применение специальных оснований освобождения от ответственности",
    "desc": "Оцениваем возможность прекращения дела по ст. 28.1 УПК РФ и ст. 76.1 УК РФ при возмещении ущерба в бюджет."
  },
  {
    "title": "Защита от ареста счетов и имущества предприятия",
    "desc": "Оспариваем необоснованный арест имущества третьих лиц, не являющихся обвиняемыми по уголовному делу."
  }
];
  const casesData: CaseData[] = [
  {
    "title": "Прекращение уголовного дела по ст. 199 УК РФ на стадии проверки",
    "category": "Налоговые преступления",
    "problem": "ФНС передала в СК РФ материалы о неуплате НДС на сумму 48 млн руб. через якобы фиктивных субподрядчиков.",
    "action": "Адвокаты предоставили доказательства фактического выполнения работ: путевые листы, пропуска на объект, фотофиксацию и показания прорабов.",
    "result": "Следователь СК вынес постановление об отказе в возбуждении уголовного дела за отсутствием состава преступления."
  },
  {
    "title": "Снятие ареста с производственного оборудования предприятия",
    "category": "Ограничение прав бизнеса",
    "problem": "В рамках дела в отношении экс-директора суд наложил арест на производственные станки действующего завода.",
    "action": "Доказали, что оборудование принадлежит юридическому лицу, приобретено на законные доходы и не является орудием преступления.",
    "result": "Суд отменил постановление об аресте имущества, предприятие возобновило производственную деятельность."
  },
  {
    "title": "Отказ в переквалификации со ст. 160 на ч. 4 ст. 159 УК РФ",
    "category": "Экономические споры",
    "problem": "Следствие пыталось квалифицировать списание строительных материалов как мошенничество организованной группой.",
    "action": "Предоставили акты списания, технологические карты и дефектные ведомости, подтверждающие производственную необходимость.",
    "result": "Дело переквалифицировано на состав средней тяжести со снижением санкций и сохранением свободы доверителя."
  }
];
  const processSteps: ProcessStep[] = [
  {
    "num": "01",
    "title": "Комплексный правовой и финансовый аудит",
    "desc": "Изучаем акты налоговых проверок, заключения экспертов следствия, бухгалтерскую отчетность и договоры."
  },
  {
    "num": "02",
    "title": "Разработка экономической стратегии защиты",
    "desc": "Аркадий Бобкин с 22-летним опытом расследования экономических дел формирует тактику защиты руководства."
  },
  {
    "num": "03",
    "title": "Сопровождение допросов ключевых сотрудников",
    "desc": "Готовим генерального директора, финансового директора и главного бухгалтера к допросам и очным ставкам."
  },
  {
    "num": "04",
    "title": "Защита в следственных органах и арбитраже",
    "desc": "Синхронизируем уголовную защиту с обжалованием решений ФНС в арбитражном суде для развала обвинения."
  }
];
  const pricingTiers: PricingTier[] = [
  {
    "title": "Правовой аудит материалов проверки",
    "subtitle": "Оценка уголовных рисков бизнеса",
    "price": "от 10 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "анализ акта налоговой проверки и претензий СК",
        "value": "Да"
      },
      {
        "name": "оценка рисков привлечения руководства к ст. 199",
        "value": "Да"
      },
      {
        "name": "выработка инструкций для персонала на случай обыска",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  },
  {
    "title": "Защита руководства на стадии следствия",
    "subtitle": "Комплексное уголовно-правовое ведение",
    "price": "от 50 000 ₽",
    "popular": true,
    "badgeText": "Востребовано",
    "features": [
      {
        "name": "личное участие адвоката во всех допросах и обысках",
        "value": "Да"
      },
      {
        "name": "привлечение независимых аудиторов и экономистов",
        "value": "Да"
      },
      {
        "name": "обжалование незаконных обеспечительных арестов",
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
    "title": "Защита в суде по экономическому делу",
    "subtitle": "Судебное следствие под ключ",
    "price": "от 65 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "участие во всех судебных заседаниях",
        "value": "Да"
      },
      {
        "name": "допрос налоговых инспекторов и экспертов",
        "value": "Да"
      },
      {
        "name": "доказывание отсутствия корыстного умысла",
        "value": "Да"
      },
      {
        "name": "применение норм ст. 76.1 УК РФ об освобождении",
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
    "desc": "Защита при обвинениях в хищении бюджетных средств, неисполнении контрактов и мошенничестве в бизнесе.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-moshennichestvu/"
  },
  {
    "title": "Адвокат по должностным преступлениям",
    "desc": "Защита руководителей и должностных лиц по обвинениям во взятках, коммерческом подкупе и превышении полномочий.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-dolzhnostnym-prestupleniyam-i-vzyatkam/"
  },
  {
    "title": "Адвокат при обыске и выемке документов",
    "desc": "Срочный выезд адвоката при проведении обыска в офисе, на складе или по месту жительства директора.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-pri-zaderzhanii-obyske-i-doprose/"
  }
];
  const faqItems = [
  {
    "q": "Когда материалы налоговой проверки передаются в следственные органы?",
    "a": "ФНС обязана направить материалы в Следственный комитет РФ, если налогоплательщик не уплатил недоимку, пени и штрафы в течение 75 дней после вступления в силу решения по налоговой проверке (при условии, что сумма превышает крупный размер по ст. 199 УК РФ)."
  },
  {
    "q": "Можно ли избежать уголовной ответственности по налогам, если погасить долг?",
    "a": "Да. Согласно примечанию к ст. 199 УК РФ и ст. 28.1 УПК РФ, лицо, впервые совершившее преступление, полностью освобождается от уголовной ответственности, если ущерб бюджету (налоги, пени, штрафы) возмещен в полном объеме до вынесения приговора."
  },
  {
    "q": "Могут ли арестовать счета компании по уголовному делу директора?",
    "a": "Следователь вправе ходатайствовать об аресте имущества для обеспечения исполнения приговора в части гражданского иска или штрафа. Однако адвокат может обжаловать арест счетов, если он парализует законную операционную деятельность предприятия и выплату зарплаты."
  },
  {
    "q": "Как правильно вести себя при внезапном обыске в офисе (ОЭБиПК / СК)?",
    "a": "Немедленно свяжитесь с адвокатом, потребуйте предъявить постановление об обыске, не давайте показаний без защитника (ст. 51 Конституции РФ), требуйте внесения в протокол всех изъятых предметов и замечаний о нарушениях."
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
              <span style={{ color: '#FFFFFF' }}>Адвокат по экономическим преступлениям</span>
            </nav>
          }
          superTitle="Уголовное право • Налоги и экономика"
          title={
            <span style={{ display: 'block' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                Адвокат по экономическим
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                и налоговым преступлениям
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                в Липецке
              </span>
            </span>
          }
          subtitle="Личная защита руководителей, предпринимателей, бухгалтеров и учредителей бизнеса. Оценка рисков налоговых проверок, споров с контрагентами и уголовных дел. Связь в рабочее время: Пн–Пт с 09:00 до 18:00."
          primaryCtaText="Обсудить ситуацию"
          primaryCtaLink="#form"
          primaryCtaSubtext={
            <span style={{ display: 'block' }}>
              <span style={{ whiteSpace: 'nowrap' }}>Перезвоним вам в течение 15 минут в рабочее время</span>
            </span>
          }
          trustItems={[
            { text: 'Анализ рисков передачи материалов из ФНС в Следственный комитет' },
            { text: 'Защита при выемках, обысках в офисе и допросах топ-менеджмента' },
            { text: 'Доказывание отсутствия умысла и реальности хозяйственных операций' }
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
                <span style={{ display: "inline-block" }}>требуется адвокат</span> <br />
                <span style={{ display: "inline-block" }}>по экономическим делам</span>
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Следственный опыт в сфере налоговых и экономических преступлений позволяет защитить руководство и активы компании.
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
                    Что проверяет адвокат по экономическим делам
                  </h3>
                </div>
              </div>

              <p style={{ margin: '0 0 28px 0', fontSize: '15px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, maxWidth: '820px' }}>
                Ключевые точки аудита финансово-хозяйственной деятельности:
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
                  hiddenFields={[{ name: 'page', value: '/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-ekonomicheskim-prestupleniyam/' }]}
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
