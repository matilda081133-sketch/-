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
  const situations = [
  {
    "tag": "Кража / ст. 158",
    "title": "Тайное хищение имущества (из магазина, квартиры, с карты)",
    "desc": "Оспаривание стоимости похищенного, исключение признаков проникновения в жилище или кражи с банковского счета."
  },
  {
    "tag": "Грабеж / ст. 161",
    "title": "Открытое хищение имущества без насилия или с насилием",
    "desc": "Разграничение кражи и грабежа, доказывание отсутствия предварительного сговора и снижения роли участника."
  },
  {
    "tag": "Разбой / ст. 162",
    "title": "Нападение в целях хищения с угрозой или насилием",
    "desc": "Исключение квалифицирующих признаков применения оружия или предметов, переквалификация на менее тяжкий состав."
  },
  {
    "tag": "Оценка ущерба",
    "title": "Завышенная стоимость похищенного имущества потерпевшим",
    "desc": "Назначение независимой товароведческой экспертизы с учетом фактического износа и реальной рыночной цены."
  },
  {
    "tag": "Примирение",
    "title": "Возмещение ущерба и прекращение дела за примирением",
    "desc": "Организация диалога с потерпевшим, возмещение вреда и прекращение дела в суде по ст. 25 УПК РФ."
  },
  {
    "tag": "Потерпевший",
    "title": "Защита прав потерпевшего от хищения или нападения",
    "desc": "Доказывание реального размера ущерба, подача гражданского иска и контроль за ходом следствия."
  }
];
  const casesData: CaseData[] = [
  {
    "category": "ст. 162 -> ст. 161 УК РФ",
    "title": "Переквалификация с разбоя на грабёж и освобождение из-под стражи",
    "problem": "Клиенту вменялся разбой группой лиц с угрозой применения предмета, похожего на нож (до 10 лет строгой колонии).",
    "action": "Доказали отсутствие применения оружия, обоюдный характер конфликта и отсутствие предварительной договоренности.",
    "result": "Суд переквалифицировал деяние на ч. 1 ст. 161 УК РФ, назначив наказание, не связанное с лишением свободы."
  },
  {
    "category": "ст. 158 ч. 3 п. «г» УК РФ",
    "title": "Прекращение дела о краже с банковского счёта",
    "problem": "Молодой человек нашёл банковскую карту и совершил несколько покупок на сумму 3 200 рублей (тяжкое преступление).",
    "action": "Возместили ущерб владельцу карты, доказали отсутствие умысла на хищение в крупном размере.",
    "result": "Суд изменил категорию преступления на среднюю тяжесть и прекратил дело с судебным штрафом."
  },
  {
    "category": "ст. 158 ч. 2 УК РФ",
    "title": "Прекращение дела за примирением сторон по краже из магазина",
    "problem": "Доверителю грозило до 5 лет лишения свободы за групповую кражу техники из торгового центра.",
    "action": "Заключили соглашение о возмещении ущерба с представителем торговой сети и подготовили ходатайство.",
    "result": "Суд прекратил уголовное дело в первом заседании по ст. 25 УПК РФ."
  }
];
  const processSteps: ProcessStep[] = [
  {
    "num": "01",
    "title": "Изучение протоколов и видеозаписей",
    "desc": "Анализируем записи камер наблюдения, показания свидетелей и обстоятельства изъятия."
  },
  {
    "num": "02",
    "title": "Товароведческая экспертиза ущерба",
    "desc": "Назначаем независимую оценку стоимости имущества с учётом износа для снижения тяжести."
  },
  {
    "num": "03",
    "title": "Переговоры и возмещение вреда",
    "desc": "Выстраиваем диалог с потерпевшей стороной для подготовки примирения или смягчения."
  },
  {
    "num": "04",
    "title": "Защита в суде и минимизация наказания",
    "desc": "Добиваемся переквалификации, применения ст. 73 УК РФ (условно) или прекращения дела."
  }
];
  const pricingTiers: PricingTier[] = [
  {
    "title": "Первичная консультация и анализ дела",
    "subtitle": "Оценка квалификации, стоимости ущерба и рисков",
    "price": "от 5 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "детальный анализ обвинения и квалификации",
        "value": "Да"
      },
      {
        "name": "оценка возможности примирения сторон",
        "value": "Да"
      },
      {
        "name": "план первоочередных следственных действий",
        "value": "Да"
      }
    ],
    "buttonText": "Записаться",
    "buttonHref": "#form"
  },
  {
    "title": "Защита по ст. 158 УК РФ (Кража)",
    "subtitle": "Ведение дела на следствии и в суде",
    "price": "от 35 000 ₽",
    "popular": true,
    "badgeText": "Востребовано",
    "features": [
      {
        "name": "участие во всех следственных действиях",
        "value": "Да"
      },
      {
        "name": "независимая товароведческая экспертиза",
        "value": "Да"
      },
      {
        "name": "сопровождение примирения с потерпевшим",
        "value": "Да"
      },
      {
        "name": "защита в судебных заседаниях",
        "value": "Да"
      }
    ],
    "buttonText": "Выбрать тариф",
    "buttonHref": "#form"
  },
  {
    "title": "Защита по ст. 161, 162 УК РФ (Грабёж/Разбой)",
    "subtitle": "Тяжкие составы с угрозой реального срока",
    "price": "от 55 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "работа по исключению признаков насилия и оружия",
        "value": "Да"
      },
      {
        "name": "переквалификация на менее тяжкие статьи",
        "value": "Да"
      },
      {
        "name": "защита при избрании меры пресечения (арест)",
        "value": "Да"
      }
    ],
    "buttonText": "Обсудить защиту",
    "buttonHref": "#form"
  }
];
  const relatedLinks = [
  {
    "title": "Задержание, обыск и допрос",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-pri-zaderzhanii-obyske-i-doprose/"
  },
  {
    "title": "Защита прав потерпевшего",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/zashchita-poterpevshego/"
  },
  {
    "title": "Адвокат по мошенничеству",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-moshennichestvu/"
  }
];
  const faqItems = [
  {
    "q": "Чем грабёж отличается от кражи?",
    "a": "Кража совершается тайно от собственника и окружающих. Если потерпевший или очевидцы заметили изъятие и потребовали прекратить, а виновный продолжил удерживать вещь, деяние переходит в категорию открытого хищения — грабёж (ст. 161 УК РФ)."
  },
  {
    "q": "С какой суммы наступает уголовная ответственность за кражу?",
    "a": "Уголовная ответственность по ст. 158 УК РФ наступает при сумме хищения свыше 2 500 рублей. Хищение на меньшую сумму образует состав мелкого хищения (ст. 7.27 КоАП РФ), если нет квалифицирующих признаков (из одежды, с проникновением, с карты)."
  },
  {
    "q": "Можно ли примириться с потерпевшим по ст. 158 УК РФ?",
    "a": "Да, по частям 1 и 2 статьи 158 УК РФ (преступления небольшой и средней тяжести) дело может быть прекращено судом в связи с примирением сторон (ст. 25 УПК РФ), если ущерб полностью заглажен и подсудимый привлекается впервые."
  },
  {
    "q": "Что считается разбоем (ст. 162 УК РФ)?",
    "a": "Разбой — это нападение в целях хищения, совершенное с применением насилия, опасного для жизни или здоровья, либо с угрозой применения такого насилия. Преступление считается оконченным с момента начала нападения независимо от того, удалось ли завладеть вещью."
  }
];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        "@id": "https://dejure-help.ru/#organization",
        "name": "ЮК «Де-Юре»",
        "url": "https://dejure-help.ru",
        "logo": "https://dejure-help.ru/images/logo_dark.png",
        "telephone": "+7 (910) 350-31-11",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "ул. Советская, д. 35, оф. 213",
          "addressLocality": "Липецк",
          "addressRegion": "Липецкая область",
          "addressCountry": "RU"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-krazham-grabezham-i-razboyam/#breadcrumbs",
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
        "@id": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-krazham-grabezham-i-razboyam/#service",
        "name": "Кражи, грабежи и разбои в Липецке",
        "description": "Комплексная защита подозреваемых, обвиняемых и потерпевших по делам о хищении имущества (тайном, открытом или с применением насилия). Докажем отсутствие умысла, переквалифицируем обвинение на менее тяжкую статью и добьёмся прекращения дела.",
        "url": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-krazham-grabezham-i-razboyam/",
        "provider": { "@id": "https://dejure-help.ru/#organization" },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Липецк и Липецкая область"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-krazham-grabezham-i-razboyam/#faq",
        "mainEntity": faqItems.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
      }
    ]
  };

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
            <Link href="/">Главная</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/grazhdanam/">Гражданам</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/grazhdanam/advokat-po-ugolovnym-delam/">Адвокат по уголовным делам</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Кражи, грабежи и разбои</span>
          </>
        }
        superTitle="Защита по ст. 158, 161, 162 УК РФ • Липецк"
        title={
          <span style={{ display: 'block', maxWidth: '100%' }}>
            <span style={{ display: 'block' }}>Адвокат по кражам,</span>
            <span style={{ display: 'block' }}>грабежам и разбоям</span>
            <span style={{ display: 'block' }}>в Липецке</span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Комплексная защита подозреваемых, обвиняемых и потерпевших по делам о хищении имущества (тайном, открытом или с применением насилия). Докажем отсутствие умысла, переквалифицируем обвинение на менее тяжкую статью и добьёмся прекращения дела.
          </span>
        }
        primaryCtaText="Обсудить ситуацию с адвокатом"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_cta_advokat_po_krazham_grabezham_i_razboyam"
        primaryCtaSubtext={
          <>
            <span>Если требуется срочная помощь,</span><br />
            <span style={{ whiteSpace: 'nowrap' }}>позвоните: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (910) 350-31-11</a></span>
          </>
        }
        trustItems={[
          { text: 'Стратегию определяет Аркадий Бобкин — 22 года следственного опыта' },
          { text: 'Защиту и процессуальные действия ведут адвокаты коллегии' },
          { text: 'Фиксируем состав услуг и условия в соглашении до начала работы' },
          { text: 'Полная конфиденциальность и соблюдение адвокатской тайны' }
        ]}
        imageUrl="/images/bobkin.jpg"
        imageName="Аркадий Евгеньевич Бобкин"
        imageSubtitle="Директор ЮК «Де-Юре», куратор практики уголовного права"
        imageObjectPosition="50% -75px"
      />

      {/* ═══ БЛОК 2: В КАКИХ СИТУАЦИЯХ МЫ ПОМОГАЕМ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>В каких ситуациях</span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>мы помогаем гражданам</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Ознакомьтесь с типовыми сценариями. Если ваша ситуация требует срочного выезда, участия в процессуальном действии или защиты в суде — мы предложим оптимальную стратегию.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '40px' }}>
            {situations.map((item, i) => (
              <div key={i} className="hover-lift" style={{
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
              }}>
                <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.06, pointerEvents: 'none' }}>
                  <svg width="100" height="100" viewBox="0 0 24 24" fill="var(--color-deep-blue)">
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>

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

          {/* Сопутствующие уголовные услуги */}
          <div style={{ background: 'var(--gradient-cream)', padding: '24px 28px', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-primary)' }}>
            <div style={{ fontWeight: 600, color: 'var(--color-deep-blue)', marginBottom: '8px', fontSize: '15px' }}>
              Сопутствующие услуги уголовной практики:
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '14px' }}>
              {relatedLinks.map((rel, idx) => (
                <Link key={idx} href={rel.link} style={{ color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                  {rel.title} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: КУРАТОР ПРАКТИКИ ═══ */}
      <SpecialistBlock
        title="Куратор практики"
        name="Аркадий Евгеньевич Бобкин"
        position={<>Директор, управляющий партнёр ЮК «Де-Юре»,<br />куратор практики уголовного права</>}
        imageUrl="/images/bobkin.jpg"
        imagePosition="50% -75px"
        profileHref="/specialisty/bobkin-arkadiy-evgenevich/"
        profileText="Подробнее об Аркадии Евгеньевиче Бобкине →"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Юрист с 1997 года. Более 22 лет работы в следственных подразделениях налоговой полиции и МВД (следователь по ОВД, начальник следственной части). Определяет генеральную стратегию защиты, проверяет процессуальные уязвимости следствия и координирует работу профильных адвокатов.
          </span>,
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Анализ материалов доследственных проверок и доказательств обвинения</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Непосредственную защиту в органах следствия и суде ведут адвокаты коллегии</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Строгая конфиденциальность и соблюдение тайны следствия и адвокатской тайны</span>
            </li>
          </ul>
        ]}
        buttonText="Задать вопрос куратору"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 4: ПРИМЕРЫ ИЗ ПРАКТИКИ ═══ */}
      <CasesBlock
        title="Примеры дел из практики"
        showAllLink="/praktika/"
        showAllText="Смотреть все дела"
        showDemoWarning={true}
        cases={casesData}
      />

      {/* ═══ БЛОК 5: КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock
        title="Как проходит работа"
        subtitle="Чёткий алгоритм действий — вы всегда знаете, что происходит на каждом этапе вашего дела."
        alignTitle="center"
        steps={processSteps}
        ctaTitle="Готовы обсудить вашу ситуацию"
        ctaSubtitle="Опишите задачу — Аркадий Бобкин изучит обстоятельства и согласует состав защитной группы."
        ctaButtonText="Обсудить ситуацию"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 6: СТОИМОСТЬ УСЛУГ ═══ */}
      <PricingBlock
        title="Стоимость помощи адвоката"
        subtitle="Фиксированная стоимость услуг закрепляется в соглашении до начала работы."
        tiers={pricingTiers}
        disclaimer="Стоимость определяется после уточнения обстоятельств и изучения имеющихся документов. Состав услуг, цена и порядок оплаты фиксируются в соглашении до начала работы. Оплата вознаграждения исполнителя не включает государственные пошлины и сопутствующие экспертные расходы."
      />

      {/* ═══ БЛОК 7: ЧАСТЫЕ ВОПРОСЫ (FAQ) ═══ */}
      <FAQBlock
        superTitle="Частые вопросы доверителей"
        title={<><span>Ответы на</span> <br /><span>частые вопросы</span></>}
        subtitle="О процедурах, правах и следственных действиях"
        ctaText="Задать свой вопрос"
        ctaLink="#form"
        faqs={faqItems}
      />

      {/* ═══ БЛОК 8: ФИНАЛЬНАЯ ФОРМА ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px', padding: '80px 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  Связаться с нами
                </span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Обсудите ситуацию</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>с адвокатом</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Укажите, в каком органе проводится проверка или расследование, процессуальный статус и какие документы вручены. Обращение передадим Аркадию Евгеньевичу Бобкину для первичного правового анализа.
              </p>
              
              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация адвоката</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните прямо сейчас: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (910) 350-31-11</a>
                </p>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Адвокатская тайна:</strong>
                Все сведения и документы защищены режимом адвокатской тайны (ст. 8 ФЗ «Об адвокатской деятельности и адвокатуре в РФ»).
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Написать нам"
                subtitle={
                  <>
                    <span style={{ display: 'inline-block' }}>Оставьте имя и номер телефона. Адвокат свяжется с вами</span> <br />
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
                commentPlaceholder="Опишите вашу ситуацию: орган, статья, вызов, задержание..."
                hiddenFields={[
                  { name: 'source_page', value: 'https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-krazham-grabezham-i-razboyam/' },
                  { name: 'direction', value: 'advokat_ugolovnyj' },
                  { name: 'selected_specialist', value: 'bobkin-arkadiy-evgenevich' }
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
