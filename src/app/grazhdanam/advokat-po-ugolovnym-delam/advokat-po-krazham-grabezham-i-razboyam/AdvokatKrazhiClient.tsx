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
        "telephone": "+7 (4742) 20-15-25",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "ул. Советская, д. 35, оф. 213",
          "addressLocality": "Липецк",
          "addressRegion": "Липецкая область",
          "addressCountry": "RU"
        }
      },
      {
        "@type": "Person",
        "@id": "https://dejure-help.ru/specialisty/bobkin-arkadiy-evgenevich/#person",
        "name": "Аркадий Бобкин",
        "jobTitle": "Куратор практики уголовного права",
        "url": "https://dejure-help.ru/specialisty/bobkin-arkadiy-evgenevich/"
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
            Подключимся после задержания, обыска, опознания или вызова на допрос. Проверим, было ли изъятие тайным или открытым, характер насилия и угрозы, размер ущерба, роль каждого участника и допустимость доказательств. Цель защиты — исключить необоснованные квалифицирующие признаки, добиться прекращения преследования, изменения квалификации или смягчения наказания.
          </span>
        }
        primaryCtaText="Обсудить ситуацию с адвокатом"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_cta_advokat_po_krazham_grabezham_i_razboyam"
        primaryCtaSubtext={
          <>
            <span>Если требуется срочная помощь,</span><br />
            <span style={{ whiteSpace: 'nowrap' }}>позвоните: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (4742) 20-15-25</a></span>
          </>
        }
        trustItems={[
          { text: 'Стратегию определяет Аркадий Бобкин — 22 года следственного опыта' },
          { text: 'Аркадий Бобкин курирует направление: проводит первичный разбор ситуации, определяет необходимый состав специалистов и организует работу по делу с учётом его категории и стадии.' },
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
              <div
                key={i}
                className="card hover-lift"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  borderRadius: '0',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '-15px',
                  width: '90px',
                  height: '90px',
                  opacity: 0.04,
                  pointerEvents: 'none',
                  color: 'var(--color-deep-blue)'
                }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>

                <div>
                  {item.tag && (
                    <div style={{
                      fontSize: '11.5px',
                      fontWeight: 700,
                      color: 'var(--color-primary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: '12px',
                      background: 'rgba(23, 50, 77, 0.06)',
                      padding: '3px 8px',
                      display: 'inline-block',
                      borderRadius: '2px'
                    }}>
                      {item.tag}
                    </div>
                  )}

                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '18px',
                    fontWeight: 600,
                    color: 'var(--color-deep-blue)',
                    margin: '0 0 12px 0',
                    lineHeight: 1.35
                  }}>
                    {item.title}
                  </h3>

                  <p style={{
                    fontSize: '14px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    {item.desc}
                  </p>
                </div>

                <a
                  href="#form"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--color-primary)',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    marginTop: '20px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-primary)')}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('form');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else window.location.hash = 'form';
                  }}
                >
                  <span>Защитить права</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            ))}
          </div>

          {/* ═══ СОДЕРЖАТЕЛЬНЫЕ РАЗДЕЛЫ ПО КРАЖАМ, ГРАБЕЖАМ И РАЗБОЯМ ═══ */}

          {/* 1. Ваша роль и стадия дела */}
          <div style={{ marginTop: '56px', marginBottom: '48px' }}>
            <div style={{ maxWidth: '820px', marginBottom: '28px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Маршрутизатор по статусу
              </div>
              <h3 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                Ваша роль и стадия дела
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Первая задача защиты определяется процессуальным статусом участника и моментом вступления адвоката в дело.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '20px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-primary)', padding: '24px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>Срочно</span>
                  <h4 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>Меня задержали</h4>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    Установить процессуальный статус и ближайшее действие, пресечь давление и организовать конфиденциальную встречу с адвокатом до первого допроса.
                  </p>
                </div>
                <a href="#form" className="btn btn-primary" style={{ marginTop: '16px', textAlign: 'center', padding: '10px 16px', fontSize: '13.5px' }}>Вызвать адвоката</a>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-gold)', padding: '24px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>Следствие</span>
                  <h4 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>Дело расследуется</h4>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    Изучить постановления и протоколы, проверить квалификацию, доказательства, индивидуальную роль и основания меры пресечения.
                  </p>
                </div>
                <a href="#form" className="btn btn-outline" style={{ marginTop: '16px', textAlign: 'center', padding: '10px 16px', fontSize: '13.5px' }}>Передать материалы</a>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid #4A6B82', padding: '24px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>Родственникам</span>
                  <h4 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>Ищу защиту близкому</h4>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    Собрать минимум данных о задержании и незамедлительно обеспечить контакт адвоката с доверителем в ИВС или СИЗО.
                  </p>
                </div>
                <a href="#form" className="btn btn-outline" style={{ marginTop: '16px', textAlign: 'center', padding: '10px 16px', fontSize: '13.5px' }}>Помочь близкому</a>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid #10273B', padding: '24px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>Суд</span>
                  <h4 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>Дело в суде</h4>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    Выделить предмет спора, сопоставить материалы с доказательствами защиты и составить план исследования доказательств.
                  </p>
                </div>
                <a href="#form" className="btn btn-outline" style={{ marginTop: '16px', textAlign: 'center', padding: '10px 16px', fontSize: '13.5px' }}>Защита в суде</a>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid #C5A059', padding: '24px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>Свидетель</span>
                  <h4 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>Свидетель с риском</h4>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    Оценить риск изменения статуса на подозреваемого при вызове по совместной поездке, продаже вещи или камерам; обеспечить явку с адвокатом.
                  </p>
                </div>
                <a href="#form" className="btn btn-outline" style={{ marginTop: '16px', textAlign: 'center', padding: '10px 16px', fontSize: '13.5px' }}>Адвокат на допрос</a>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid #718096', padding: '24px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>Потерпевший</span>
                  <h4 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>Я потерпевший</h4>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    Зафиксировать размер вреда, добиться признания потерпевшим, заявить гражданский иск и контролировать расследование.
                  </p>
                </div>
                <a href="/grazhdanam/advokat-po-ugolovnym-delam/zashchita-poterpevshego/" className="btn btn-outline" style={{ marginTop: '16px', textAlign: 'center', padding: '10px 16px', fontSize: '13.5px' }}>Защита потерпевшего</a>
              </div>
            </div>
          </div>

          {/* 2. Кража, грабёж или разбой */}
          <div style={{ marginTop: '48px', marginBottom: '48px', background: 'var(--gradient-cream)', padding: '36px 32px', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-gold)' }}>
            <div style={{ maxWidth: '850px', marginBottom: '24px' }}>
              <h3 style={{ fontSize: 'clamp(22px, 2.8vw, 32px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 12px 0', lineHeight: 1.25 }}>
                Кража, грабёж или разбой
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--color-deep-blue)', opacity: 0.95, margin: 0, lineHeight: 1.65 }}>
                Название состава определяется не бытовым словом, а установленными обстоятельствами дела. Ключевые вопросы — каким было изъятие (тайным или открытым), понимал ли человек, что его действия замечены, применялись ли насилие или угроза и насколько они были опасны. Итоговая правовая оценка всегда требует детального изучения доказательств.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '20px' }}>
              <div style={{ background: '#FFFFFF', padding: '24px 20px', border: '1px solid rgba(0,0,0,0.06)' }}>
                <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '8px', fontFamily: 'var(--font-serif)' }}>
                  Кража · ст. 158 УК РФ
                </strong>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: '0 0 10px 0' }}>
                  Тайное хищение чужого имущества. Действия совершаются незаметно для собственника и окружающих.
                </p>
                <div style={{ fontSize: '12.5px', color: 'var(--color-primary)', fontWeight: 600 }}>
                  Проверяется: условия наблюдения, осознание незаметности, момент обнаружения, стоимость, проникновение.
                </div>
              </div>

              <div style={{ background: '#FFFFFF', padding: '24px 20px', border: '1px solid rgba(0,0,0,0.06)' }}>
                <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '8px', fontFamily: 'var(--font-serif)' }}>
                  Грабёж · ст. 161 УК РФ
                </strong>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: '0 0 10px 0' }}>
                  Открытое хищение чужого имущества. Совершается в присутствии собственника или очевидцев, когда виновный осознаёт открытый характер.
                </p>
                <div style={{ fontSize: '12.5px', color: 'var(--color-primary)', fontWeight: 600 }}>
                  Проверяется: кто видел изъятие, осознание открытости, неопасное насилие или угроза, индивидуальная роль.
                </div>
              </div>

              <div style={{ background: '#FFFFFF', padding: '24px 20px', border: '1px solid rgba(0,0,0,0.06)' }}>
                <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '8px', fontFamily: 'var(--font-serif)' }}>
                  Разбой · ст. 162 УК РФ
                </strong>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: '0 0 10px 0' }}>
                  Нападение в целях хищения с опасным насилием либо угрозой его применения. Окончено с момента начала нападения.
                </p>
                <div style={{ fontSize: '12.5px', color: 'var(--color-primary)', fontWeight: 600 }}>
                  Проверяется: реальность и характер угрозы, опасность насилия, свойства предмета, цель и момент нападения.
                </div>
              </div>
            </div>
          </div>

          {/* 3. Статья 158 УК РФ: кража */}
          <div style={{ marginTop: '48px', marginBottom: '48px' }}>
            <h3 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0' }}>
              Статья 158 УК РФ: кража
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
              Кража характеризуется тайным способом завладения имуществом. Для определения квалификации и тяжести последствий исследуются:
            </p>
            <div className="grid grid-3" style={{ gap: '18px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '20px' }}>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0', fontFamily: 'var(--font-serif)' }}>Тайность изъятия</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Осознавал ли человек незаметность действий. Если очевидцы наблюдали изъятие, но виновный добросовестно полагал, что действует тайно, содеянное квалифицируется как кража.
                </p>
              </div>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '20px' }}>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0', fontFamily: 'var(--font-serif)' }}>Признак проникновения</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Проверяются назначение объекта (помещение, хранилище, жилище), режим доступа, законность нахождения и момент возникновения умысла на хищение.
                </p>
              </div>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '20px' }}>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0', fontFamily: 'var(--font-serif)' }}>Кража с банковского счёта</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Квалификация по п. «г» ч. 3 ст. 158 УК РФ (тяжкое преступление). Защита проверяет умысел, суммы транзакций, статус карты (найдена/передана) и основания для переквалификации.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Статья 161 УК РФ: грабёж */}
          <div style={{ marginTop: '48px', marginBottom: '48px' }}>
            <h3 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0' }}>
              Статья 161 УК РФ: грабёж
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
              Грабёж предполагает открытый способ завладения чужим имуществом. Ключевые аспекты правовой защиты:
            </p>
            <div className="grid grid-3" style={{ gap: '18px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '20px' }}>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0', fontFamily: 'var(--font-serif)' }}>Осознание открытости</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Хищение является открытым только тогда, когда виновный осознавал, что потерпевший или другие лица понимают противоправный характер происходящего, но игнорировал это.
                </p>
              </div>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '20px' }}>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0', fontFamily: 'var(--font-serif)' }}>Неопасное насилие</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Побои, связывание или удержание, не причинившие вреда здоровью и не создававшие угрозы жизни. Доказывание отсутствия признаков разбойного нападения.
                </p>
              </div>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '20px' }}>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0', fontFamily: 'var(--font-serif)' }}>Момент перерастания</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Если начавшееся тайное хищение было замечено, но виновный бросил вещь и скрылся, грабёж отсутствует. Защита восстанавливает точную хронологию действий.
                </p>
              </div>
            </div>
          </div>

          {/* 5. Статья 162 УК РФ: разбой */}
          <div style={{ marginTop: '48px', marginBottom: '48px' }}>
            <h3 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0' }}>
              Статья 162 УК РФ: разбой
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
              Разбой относится к категории особо тяжких преступлений против собственности. Предмет защиты:
            </p>
            <div className="grid grid-3" style={{ gap: '18px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '20px' }}>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0', fontFamily: 'var(--font-serif)' }}>Признак нападения</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Внезапный агрессивный акт, направленный на завладение имуществом. Отделение внезапного нападения от спонтанного бытового конфликта без корыстной цели.
                </p>
              </div>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '20px' }}>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0', fontFamily: 'var(--font-serif)' }}>Опасное насилие</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Причинение вреда здоровью (тяжкого, средней тяжести, легкого) либо насилие, создававшее реальную опасность для жизни в момент применения.
                </p>
              </div>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '20px' }}>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0', fontFamily: 'var(--font-serif)' }}>Момент окончания</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Состав считается оконченным с момента начала применения насилия или угрозы. Фактическое завладение вещью не требуется для квалификации.
                </p>
              </div>
            </div>
          </div>

          {/* 6. Насилие, угроза и использование оружия */}
          <div style={{ marginTop: '48px', marginBottom: '48px', background: '#F8FAFC', padding: '32px 28px', border: '1px solid var(--color-border)' }}>
            <h3 style={{ fontSize: 'clamp(20px, 2.6vw, 28px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0' }}>
              Насилие, угроза и использование оружия
            </h3>
            <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
              Разграничение степени опасности насилия и статуса используемых предметов определяет границу между статьями 161 и 162 УК РФ:
            </p>
            <div className="grid grid-3" style={{ gap: '16px' }}>
              <div style={{ background: '#FFFFFF', padding: '18px', border: '1px solid var(--color-border)' }}>
                <strong style={{ fontSize: '15px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '6px' }}>Характер насилия</strong>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Исследование судебно-медицинских экспертиз, механизма травм и причинно-следственной связи для исключения вменения опасного насилия.
                </p>
              </div>
              <div style={{ background: '#FFFFFF', padding: '18px', border: '1px solid var(--color-border)' }}>
                <strong style={{ fontSize: '15px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '6px' }}>Реальность угрозы</strong>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Анализ слов, жестов, обстановки и субъективного восприятия угрозы: имелись ли реальные основания опасаться немедленной расправы.
                </p>
              </div>
              <div style={{ background: '#FFFFFF', padding: '18px', border: '1px solid var(--color-border)' }}>
                <strong style={{ fontSize: '15px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '6px' }}>Оружие или предметы</strong>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Проверка конструктивных свойств предметов, способа их демонстрации и осведомленности остальных участников о наличии предмета.
                </p>
              </div>
            </div>
          </div>

          {/* 7. Размер ущерба и квалифицирующие признаки */}
          <div style={{ marginTop: '48px', marginBottom: '48px' }}>
            <h3 style={{ fontSize: 'clamp(20px, 2.6vw, 28px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0' }}>
              Размер ущерба и квалифицирующие признаки
            </h3>
            <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
              Размер ущерба непосредственно влияет на часть статьи и строгость возможного наказания:
            </p>
            <div className="grid grid-3" style={{ gap: '16px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '20px' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', marginBottom: '4px' }}>Потерпевшему</div>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 6px 0', fontFamily: 'var(--font-serif)' }}>Значительный ущерб</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  От 5 000 рублей. Оценивается с учетом имущественного положения гражданина, его доходов, наличия иждивенцев и совокупного дохода семьи.
                </p>
              </div>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '20px' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', marginBottom: '4px' }}>От 250 000 ₽</div>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 6px 0', fontFamily: 'var(--font-serif)' }}>Крупный размер</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Тяжкий квалифицирующий признак. Требует назначения независимой товароведческой экспертизы с учетом амортизации и износа.
                </p>
              </div>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '20px' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', marginBottom: '4px' }}>От 1 000 000 ₽</div>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 6px 0', fontFamily: 'var(--font-serif)' }}>Особо крупный размер</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Следствие часто исходит из покупной цены новых вещей. Адвокат добивается оценки фактической рыночной стоимости имущества на день хищения.
                </p>
              </div>
            </div>
          </div>

          {/* 8. Группа лиц и индивидуальная роль */}
          <div style={{ marginTop: '48px', marginBottom: '48px', background: 'var(--gradient-cream)', padding: '32px 28px', border: '1px solid var(--color-border)' }}>
            <h3 style={{ fontSize: 'clamp(20px, 2.6vw, 28px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 12px 0' }}>
              Группа лиц и индивидуальная роль
            </h3>
            <p style={{ fontSize: '14.5px', color: 'var(--color-deep-blue)', lineHeight: 1.6, marginBottom: '20px', opacity: 0.95 }}>
              Присутствие рядом с местом преступления не тождественно предварительному сговору. Защита отделяет доказанные действия конкретного лица от общих формулировок обвинения:
            </p>
            <div className="grid grid-3" style={{ gap: '16px' }}>
              <div style={{ background: '#FFFFFF', padding: '18px', border: '1px solid rgba(0,0,0,0.06)' }}>
                <strong style={{ fontSize: '15px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '6px' }}>Предварительный сговор</strong>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Проверяются время, место и содержание договоренности. Без доказанной предварительной договоренности признак группы подлежит исключению.
                </p>
              </div>
              <div style={{ background: '#FFFFFF', padding: '18px', border: '1px solid rgba(0,0,0,0.06)' }}>
                <strong style={{ fontSize: '15px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '6px' }}>Эксцесс исполнителя</strong>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Если один из участников применил опасное насилие или оружие без ведома остальных, соучастники не несут ответственности за разбой.
                </p>
              </div>
              <div style={{ background: '#FFFFFF', padding: '18px', border: '1px solid rgba(0,0,0,0.06)' }}>
                <strong style={{ fontSize: '15px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '6px' }}>Индивидуальный вклад</strong>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Установление того, кто именно входил в помещение, кто изымал вещь, а кто лишь ожидал или подвозил без осведомленности о преступлении.
                </p>
              </div>
            </div>
          </div>

          {/* 9. Какие доказательства требуют проверки */}
          <div style={{ marginTop: '48px', marginBottom: '48px' }}>
            <h3 style={{ fontSize: 'clamp(20px, 2.6vw, 28px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0' }}>
              Какие доказательства требуют проверки
            </h3>
            <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
              Позиция защиты формируется на основе всесторонней ревизии доказательственной базы стороны обвинения:
            </p>
            <div className="grid grid-2" style={{ gap: '16px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-primary)', padding: '18px 20px' }}>
                <strong style={{ fontSize: '15px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '6px' }}>Протоколы следственных действий</strong>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Задержание, личный досмотр, осмотр места происшествия, выемка: проверка участия реальных понятых, непрерывности фиксации и соблюдения правил упаковки изъятых вещей.
                </p>
              </div>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-primary)', padding: '18px 20px' }}>
                <strong style={{ fontSize: '15px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '6px' }}>Видеозаписи камер наблюдения</strong>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Истребование исходных файлов до, во время и после события; проверка непрерывности, угла обзора, слышимости окликов и признаков видеомонтажа.
                </p>
              </div>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-gold)', padding: '18px 20px' }}>
                <strong style={{ fontSize: '15px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '6px' }}>Опознание и первые показания</strong>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Сопоставление первичных описаний внешности с протоколами опознания, проверка условий восприятия и исключение предварительного показа фотографий подозреваемого.
                </p>
              </div>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-gold)', padding: '18px 20px' }}>
                <strong style={{ fontSize: '15px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '6px' }}>Экспертизы, биллинг и переписка</strong>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Товароведческая оценка ущерба, судебно-медицинская экспертиза вреда здоровью, детализация телефонных соединений и геолокация для проверки алиби.
                </p>
              </div>
            </div>
          </div>

          {/* 10. Возможные правовые маршруты */}
          <div style={{ marginTop: '48px', marginBottom: '56px' }}>
            <h3 style={{ fontSize: 'clamp(20px, 2.6vw, 28px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0' }}>
              Возможные правовые маршруты
            </h3>
            <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
              Маршруты определяют направления работы защиты в зависимости от установленных фактов и доказательств:
            </p>
            <div className="grid grid-3" style={{ gap: '16px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '20px' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', marginBottom: '6px' }}>Маршрут 1</div>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0', fontFamily: 'var(--font-serif)' }}>Отсутствие события или непричастность</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Сбор доказательств алиби, оспаривание результатов опознания, проверка альтернативных версий и ходатайство о прекращении преследования.
                </p>
              </div>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '20px' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', marginBottom: '6px' }}>Маршрут 2</div>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0', fontFamily: 'var(--font-serif)' }}>Переквалификация обвинения</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Исключение признаков грабежа в пользу кражи, исключение разбоя, снятие отягчающих квалифицирующих признаков группы, оружия или проникновения.
                </p>
              </div>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '20px' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', marginBottom: '6px' }}>Маршрут 3</div>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0', fontFamily: 'var(--font-serif)' }}>Исключение доказательств</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Признание протоколов обыска, выемки или опознания недопустимыми доказательствами ввиду грубых нарушений требований УПК РФ.
                </p>
              </div>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '20px' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', marginBottom: '6px' }}>Маршрут 4</div>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0', fontFamily: 'var(--font-serif)' }}>Смягчение наказания</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Возмещение ущерба, сбор смягчающих обстоятельств, назначение наказания ниже низшего предела (ст. 64 УК РФ) или условного срока (ст. 73 УК РФ).
                </p>
              </div>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '20px' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', marginBottom: '6px' }}>Маршрут 5</div>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0', fontFamily: 'var(--font-serif)' }}>Примирение сторон</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  По делам небольшой и средней тяжести при первичном привлечении — полное заглаживание вреда и прекращение уголовного дела по ст. 25 УПК РФ.
                </p>
              </div>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '20px' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', marginBottom: '6px' }}>Маршрут 6</div>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0', fontFamily: 'var(--font-serif)' }}>Защита потерпевшего</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Обеспечение процессуального статуса, розыск и опись похищенного имущества, подача гражданского иска и контроль за реальным возмещением вреда.
                </p>
              </div>
            </div>
          </div>


          {/* Сопутствующие уголовные услуги */}
          <div style={{ background: '#F4F5F7', padding: '24px 28px', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-primary)' }}>
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
        position={<>Директор, управляющий партнёр<br />ЮК «Де-Юре»,<br />куратор практики уголовного права</>}
        imageUrl="/images/bobkin.jpg"
        imagePosition="center 15%"
        profileHref="/specialisty/bobkin-arkadiy-evgenevich/"
        profileText="Подробнее об Аркадии Евгеньевиче Бобкине →"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block', lineHeight: 1.6 }}>
            Аркадий Бобкин — куратор направления «Уголовное право». Проводит первичный разбор ситуации, определяет задачи по делу, подбирает необходимых специалистов и координирует их работу на всех этапах.
          </span>,
          <p key="adv" style={{ color: 'var(--color-text-secondary)', margin: '14px 0 0 0', fontSize: '14.5px', lineHeight: 1.6 }}>
            Если для защиты или представительства требуется статус адвоката, Аркадий Бобкин подбирает специалиста с учётом категории дела, процессуальной стадии и необходимых компетенций.
          </p>
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
                  Позвоните прямо сейчас: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (4742) 20-15-25</a>
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
