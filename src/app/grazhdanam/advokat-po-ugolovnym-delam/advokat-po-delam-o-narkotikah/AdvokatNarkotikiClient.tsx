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
    const situations = [
    {
      tag: "Хранение / ст. 228",
      title: (
        <>
          <span style={{ display: 'block' }}>Изъятие запрещенных веществ</span>
          <span style={{ display: 'block' }}>для личного употребления</span>
        </>
      ),
      desc: "Обвинение по ст. 228 УК РФ без цели сбыта. Проверка законности личного досмотра, оснований остановки и упаковки изъятого."
    },
    {
      tag: "Сбыт / ст. 228.1",
      title: (
        <>
          <span style={{ display: 'block' }}>Обвинение в покушении на</span>
          <span style={{ display: 'block' }}>сбыт («закладки», передача)</span>
        </>
      ),
      desc: "Переквалификация со сбыта на хранение, доказывание отсутствия умысла на распространение и фасовку."
    },
    {
      tag: "Закупка / Провокация",
      title: (
        <>
          <span style={{ display: 'block' }}>Проведение проверочной</span>
          <span style={{ display: 'block' }}>закупки сотрудниками МВД</span>
        </>
      ),
      desc: "Выявление признаков полицейской провокации и нарушений ФЗ «Об оперативно-розыскной деятельности»."
    },
    {
      tag: "Экспертиза / Вес",
      title: (
        <>
          <span style={{ display: 'block' }}>Оспаривание размера</span>
          <span style={{ display: 'block' }}>(значительный, крупный,</span>
          <span style={{ display: 'block' }}>особо крупный)</span>
        </>
      ),
      desc: "Проверка методики судебно-химической экспертизы, массы чистого вещества и наличия нейтральных примесей."
    },
    {
      tag: "Задержание / ИВС",
      title: (
        <>
          <span style={{ display: 'block' }}>Человек задержан с поличным</span>
          <span style={{ display: 'block' }}>и помещен в изолятор</span>
        </>
      ),
      desc: "Срочный выезд адвоката, исключение самооговора под давлением и участие в судебном заседании по аресту."
    },
    {
      tag: "Группа / ст. 210",
      title: (
        <>
          <span style={{ display: 'block' }}>Вменение совершения</span>
          <span style={{ display: 'block' }}>преступления группой лиц</span>
          <span style={{ display: 'block' }}>по сговору</span>
        </>
      ),
      desc: "Исключение квалифицирующего признака группы, роли соисполнителя или организатора."
    }
  ];
  const casesData: CaseData[] = [
  {
    "category": "ст. 228.1 -> ст. 228 УК РФ",
    "title": "Переквалификация со сбыта в крупном размере на хранение",
    "problem": "Подзащитному вменяли покушение на сбыт (ч. 4 ст. 228.1 УК РФ, от 10 до 20 лет) из-за обнаружения расфасованных пакетов.",
    "action": "Доказали отсутствие весов, упаковочных материалов, переписки с покупателями и подтвердили факт личной зависимости.",
    "result": "Суд переквалифицировал обвинение на ч. 2 ст. 228 УК РФ и назначил наказание ниже низшего предела."
  },
  {
    "category": "ст. 228 ч. 1 УК РФ",
    "title": "Прекращение уголовного дела в суде с назначением штрафа",
    "problem": "Студент был задержан с запрещенным веществом в значительном размере для личного употребления.",
    "action": "Собрали положительные характеристики, доказали первое привлечение и прохождение курса лечения.",
    "result": "Суд прекратил уголовное дело на основании ст. 25.1 УПК РФ с назначением судебного штрафа 15 000 рублей."
  },
  {
    "category": "ст. 228.1 УК РФ (ОРМ)",
    "title": "Исключение результатов проверочной закупки из-за провокации",
    "problem": "Сотрудники полиции неоднократно склоняли лицо к передаче вещества в ходе оперативного эксперимента.",
    "action": "Доказали отсутствие первичной оперативной информации о сбыте и факт активного склонения со стороны агента.",
    "result": "Результаты ОРМ признаны недопустимыми доказательствами, обвинение в сбыте полностью снято."
  }
];
  const processSteps: ProcessStep[] = [
  {
    "num": "01",
    "title": "Срочный выезд и конфиденциальная беседа",
    "desc": "Адвокат выезжает в отдел полиции, пресекает давление и вырабатывает безопасную позицию."
  },
  {
    "num": "02",
    "title": "Аудит законности ОРД и досмотра",
    "desc": "Проверяем основания остановки, постановление на ОРМ, присутствие понятых и протоколы изъятия."
  },
  {
    "num": "03",
    "title": "Ревизия химической экспертизы",
    "desc": "Контролируем корректность методики исследования, массу сухого остатка и квалификацию размера."
  },
  {
    "num": "04",
    "title": "Защита в следствии и судебном процессе",
    "desc": "Боремся за переквалификацию на менее тяжкую часть, мягкую меру пресечения и минимальный срок."
  }
];
  const pricingTiers: PricingTier[] = [
  {
    "title": "Срочный выезд при задержании",
    "subtitle": "Участие в досмотре, допросе и ИВС в первые 24 часа",
    "price": "от 15 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "срочный выезд адвоката в отдел полиции",
        "value": "Да"
      },
      {
        "name": "конфиденциальная беседа до дачи показаний",
        "value": "Да"
      },
      {
        "name": "контроль составления протокола досмотра",
        "value": "Да"
      }
    ],
    "buttonText": "Срочный вызов",
    "buttonHref": "#form"
  },
  {
    "title": "Защита по ст. 228 УК РФ (Хранение)",
    "subtitle": "Комплексное ведение дела на следствии и в суде",
    "price": "от 45 000 ₽",
    "popular": true,
    "badgeText": "Востребовано",
    "features": [
      {
        "name": "защита на всех следственных действиях",
        "value": "Да"
      },
      {
        "name": "проверка законности изъятия и экспертизы",
        "value": "Да"
      },
      {
        "name": "сбор смягчающих доказательств",
        "value": "Да"
      },
      {
        "name": "добивание условного срока или судебного штрафа",
        "value": "Да"
      }
    ],
    "buttonText": "Выбрать тариф",
    "buttonHref": "#form"
  },
  {
    "title": "Защита по ст. 228.1 УК РФ (Сбыт)",
    "subtitle": "Сложные дела с ОРМ, группой лиц и крупным размером",
    "price": "от 65 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "анализ материалов проверочной закупки/ОРД",
        "value": "Да"
      },
      {
        "name": "работа по переквалификации со сбыта на хранение",
        "value": "Да"
      },
      {
        "name": "защита в суде первой и апелляционной инстанций",
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
    "title": "Обжалование приговора",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/obzhalovanie-prigovora/"
  },
  {
    "title": "Условно-досрочное освобождение",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/uslovno-dosrochnoe-osvobozhdenie/"
  }
];
  const faqItems = [
  {
    "q": "Каковы последствия признания вины в сбыте на первом допросе?",
    "a": "Признательные показания могут получить существенное доказательственное значение, особенно если они даны в присутствии защитника. До допроса важно конфиденциально обсудить со специалистом процессуальный статус, известные обстоятельства и риски. Решение использовать статью 51 Конституции РФ принимается применительно к конкретным вопросам и ситуации, а не как универсальное решение."
  },
  {
    "q": "Можно ли переквалифицировать сбыт (ст. 228.1) на хранение (ст. 228)?",
    "a": "Да, если в материалах дела отсутствуют прямые доказательства умысла на распространение (переписка, весы, фасовка, показания покупателей). Обнаружение вещества даже в крупном размере само по себе не образует состав сбыта."
  },
  {
    "q": "Как доказать провокацию со стороны сотрудников полиции?",
    "a": "Провокация доказывается анализом оснований проведения ОРМ: если у полиции не было оперативных данных о том, что лицо уже занимается сбытом, а инициатива исходила от агента, такие доказательства признаются недопустимыми."
  },
  {
    "q": "Возможно ли условное осуждение по делам о наркотиках?",
    "a": "Возможность условного осуждения зависит от квалификации, назначенного срока, ограничений статьи 73 УК РФ, обстоятельств дела и личности подсудимого. Статья 64 УК РФ может применяться при исключительных обстоятельствах, но не является универсальным обязательным условием для назначения условного наказания."
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
        "@id": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-delam-o-narkotikah/#breadcrumbs",
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
            "name": "Дела о наркотиках",
            "item": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-delam-o-narkotikah/"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-delam-o-narkotikah/#service",
        "name": "Дела о наркотиках в Липецке",
        "description": "Защита на стадиях задержания, следствия и суда по делам о хранении, приобретении, перевозке и сбыте наркотических средств. Проверим законность ОРМ «Проверочная закупка», процедуру досмотра, вес вещества и точность химической экспертизы.",
        "url": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-delam-o-narkotikah/",
        "provider": { "@id": "https://dejure-help.ru/#organization" },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Липецк и Липецкая область"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-delam-o-narkotikah/#faq",
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
            <span style={{ color: 'var(--color-text-main)' }}>Дела о наркотиках</span>
          </>
        }
        superTitle="ЗАЩИТА ПО СТ. 228 И 228.1 УК РФ • ЛИПЕЦК И ОБЛАСТЬ"
        title={
          <span style={{ display: 'block', maxWidth: '100%' }}>
            <span style={{ display: 'block' }}>Адвокат по делам</span>
            <span style={{ display: 'block' }}>о наркотиках</span>
            <span style={{ display: 'block' }}>(ст. 228, 228.1)</span>
            <span style={{ display: 'block' }}>в Липецке</span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Защита на стадиях задержания, следствия и суда по делам о хранении, приобретении, перевозке и сбыте наркотических средств. Проверим законность ОРМ «Проверочная закупка», процедуру досмотра, вес вещества и точность химической экспертизы.
          </span>
        }
        primaryCtaText="Обсудить ситуацию с адвокатом"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_cta_advokat_po_delam_o_narkotikah"
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


          {/* ═══ СОДЕРЖАТЕЛЬНЫЕ БЛОКИ ИЗ ТЗ ПО ДЕЛАМ О НАРКОТИКАХ ═══ */}

          {/* РАЗДЕЛ 1: ЧТО ПРОИЗОШЛО И НА КАКОЙ СТАДИИ НАХОДИТСЯ ДЕЛО */}
          <div style={{ marginTop: '56px', marginBottom: '56px' }}>
            <div style={{ maxWidth: '820px', marginBottom: '32px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Маршрутизатор по стадии
              </div>
              <h3 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                Что произошло и на какой стадии находится дело
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Первые действия определяют дальнейший ход расследования. Подключаем адвоката на любой стадии дела.
              </p>
            </div>

            <div className="grid grid-2" style={{ gap: '24px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-primary)', padding: '28px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '10px' }}>
                    Срочно: Задержание / Обыск
                  </span>
                  <h4 style={{ fontSize: '19px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 12px 0', lineHeight: 1.3 }}>
                    Меня задержали или идёт обыск
                  </h4>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    Первая задача — установить точное место, орган и процессуальный статус; подключить адвоката до ключевых объяснений и первого допроса, чтобы исключить давление и самооговор.
                  </p>
                </div>
                <div style={{ marginTop: '20px' }}>
                  <a href="tel:+74742201525" className="btn btn-primary" style={{ display: 'inline-block', width: '100%', textAlign: 'center', padding: '12px 20px', fontSize: '14px' }} data-analytics="phone_click">
                    Позвонить адвокату
                  </a>
                </div>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-gold)', padding: '28px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '10px' }}>
                    Стадия расследования
                  </span>
                  <h4 style={{ fontSize: '19px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 12px 0', lineHeight: 1.3 }}>
                    Дело расследуется
                  </h4>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    Первая задача — получить и изучить документы, проверить квалификацию, допустимость доказательств, выводы химической экспертизы и спланировать ближайшие процессуальные действия.
                  </p>
                </div>
                <div style={{ marginTop: '20px' }}>
                  <a href="#form" className="btn btn-primary" style={{ display: 'inline-block', width: '100%', textAlign: 'center', padding: '12px 20px', fontSize: '14px' }}>
                    Передать ситуацию на анализ
                  </a>
                </div>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid #4A6B82', padding: '28px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '10px' }}>
                    Помощь родственникам
                  </span>
                  <h4 style={{ fontSize: '19px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 12px 0', lineHeight: 1.3 }}>
                    Ищу защиту близкому
                  </h4>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    Первая задача — собрать минимум данных о задержании и незамедлительно организовать конфиденциальный контакт адвоката с доверителем в ИВС или СИЗО.
                  </p>
                </div>
                <div style={{ marginTop: '20px' }}>
                  <a href="#form" className="btn btn-outline" style={{ display: 'inline-block', width: '100%', textAlign: 'center', padding: '12px 20px', fontSize: '14px' }}>
                    Помочь близкому
                  </a>
                </div>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid #10273B', padding: '28px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '10px' }}>
                    Судебная стадия
                  </span>
                  <h4 style={{ fontSize: '19px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 12px 0', lineHeight: 1.3 }}>
                    Дело в суде
                  </h4>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    Первая задача — изучить обвинительное заключение и все тома материалов уголовного дела, определить предмет судебного спора и разработать план защиты.
                  </p>
                </div>
                <div style={{ marginTop: '20px' }}>
                  <a href="#form" className="btn btn-outline" style={{ display: 'inline-block', width: '100%', textAlign: 'center', padding: '12px 20px', fontSize: '14px' }}>
                    Нужна защита в суде
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* РАЗДЕЛ 2: ХРАНЕНИЕ ИЛИ УМЫСЕЛ НА СБЫТ */}
          <div style={{ marginTop: '56px', marginBottom: '56px', background: 'var(--gradient-cream)', padding: '40px 36px', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-gold)' }}>
            <div style={{ maxWidth: '850px', marginBottom: '28px' }}>
              <h3 style={{ fontSize: 'clamp(22px, 2.8vw, 32px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                Хранение или умысел на сбыт
              </h3>
              <p style={{ fontSize: '15.5px', color: 'var(--color-deep-blue)', opacity: 0.95, margin: 0, lineHeight: 1.65, fontWeight: 500 }}>
                Разграничение хранения без цели сбыта (ст. 228 УК РФ) и сбыта либо покушения на него (ст. 228.1 УК РФ) — фундаментальный вопрос защиты. Для переквалификации обвинения исследуются обстоятельства приобретения, количество, фасовка, цифровые следы и фактические действия.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '20px' }}>
              <div style={{ background: '#FFFFFF', padding: '24px 20px', border: '1px solid rgba(0,0,0,0.06)' }}>
                <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '8px', fontFamily: 'var(--font-serif)' }}>
                  Обстоятельства приобретения
                </strong>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Когда, где и каким способом объект оказался у лица; подтверждается ли версия личного употребления независимыми данными и показаниями.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', padding: '24px 20px', border: '1px solid rgba(0,0,0,0.06)' }}>
                <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '8px', fontFamily: 'var(--font-serif)' }}>
                  Количество и упаковка
                </strong>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Как объект обнаружен и упакован, изменялась ли упаковка при изъятии, обнаружены ли весы, зиплоки, упаковочные материалы.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', padding: '24px 20px', border: '1px solid rgba(0,0,0,0.06)' }}>
                <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '8px', fontFamily: 'var(--font-serif)' }}>
                  Цифровые следы
                </strong>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Кому принадлежали устройство и аккаунт, полный ли контекст извлечён, совпадают ли время, геолокация фото и действия участника.
                </p>
              </div>
            </div>

            <div style={{ marginTop: '20px', background: '#FFFFFF', padding: '16px 20px', borderLeft: '3px solid var(--color-primary)', fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
              <strong style={{ color: 'var(--color-deep-blue)' }}>Важно: </strong>
              Страница не должна обещать автоматическую переквалификацию. Даже отсутствие факта передачи не всегда исключает обвинение в покушении на сбыт: значение имеют установленный умысел и совершённые действия.
            </div>
          </div>

          {/* РАЗДЕЛ 3: РАЗМЕР, ВЕЩЕСТВО И РЕЗУЛЬТАТЫ ЭКСПЕРТИЗЫ */}
          <div style={{ marginTop: '56px', marginBottom: '56px' }}>
            <div style={{ maxWidth: '820px', marginBottom: '32px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Судебно-химическая экспертиза
              </div>
              <h3 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                Размер, вещество и результаты экспертизы
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Квалификация по конкретной части статьи зависит от размера вещества: значительный, крупный или особо крупный. Тщательно проверяем справку об исследовании и заключение эксперта.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '24px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '26px 22px', borderTop: '3px solid var(--color-primary)' }}>
                <h4 style={{ fontSize: '17.5px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>
                  Методика исследования
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Проверяем соблюдение методических рекомендаций ЭКЦ МВД, методику высушивания до постоянной массы, определение влажности и разделение нейтральных наполнителей от активного наркотического вещества.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '26px 22px', borderTop: '3px solid var(--color-gold)' }}>
                <h4 style={{ fontSize: '17.5px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>
                  Расчёт массы и размера
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Сопоставляем выводы эксперта с Постановлением Правительства РФ № 1002. В ряде случаев исключение нейтральных примесей позволяет снизить размер с крупного до значительного, что кардинально меняет санкцию.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '26px 22px', borderTop: '3px solid #4A6B82' }}>
                <h4 style={{ fontSize: '17.5px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>
                  Целостность и опечатывание
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Анализируем сохранность упаковки, целостность пломб и пояснительных надписей понятых при передаче объекта из места изъятия в экспертное учреждение. Нарушение опечатывания влечёт недопустимость заключения.
                </p>
              </div>
            </div>
          </div>

          {/* РАЗДЕЛ 4: ПРОВЕРКА ЗАКУПКИ, НАБЛЮДЕНИЯ И ДРУГИХ ОРМ */}
          <div style={{ marginTop: '56px', marginBottom: '56px', background: '#F8FAFC', padding: '40px 36px', border: '1px solid var(--color-border)' }}>
            <div style={{ maxWidth: '820px', marginBottom: '32px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Оперативно-розыскная деятельность
              </div>
              <h3 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                Проверка закупки, наблюдения и других ОРМ
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Материалы оперативного эксперимента, проверочной закупки и наблюдения подлежат строгой проверке на соответствие требованиям Федерального закона «Об ОРД».
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '24px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '26px 22px' }}>
                <strong style={{ fontSize: '17px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '10px', fontFamily: 'var(--font-serif)' }}>
                  Основания проведения ОРМ
                </strong>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Проверяем наличие официального постановления руководителя органа на проведение закупки, наличие предварительной оперативной информации о признаках сбыта и законность привлечения агента.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '26px 22px' }}>
                <strong style={{ fontSize: '17px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '10px', fontFamily: 'var(--font-serif)' }}>
                  Исключение провокации
                </strong>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Выявляем факты активного склонения, настойчивых уговоров или давления со стороны оперативных сотрудников и закупщика. Признаки провокации влекут признание результатов ОРМ недопустимыми доказательствами.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '26px 22px' }}>
                <strong style={{ fontSize: '17px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '10px', fontFamily: 'var(--font-serif)' }}>
                  Порядок рассекречивания
                </strong>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Контролируем соблюдение Инструкции о порядке представления результатов ОРД следователю или в суд, а также процедуру осмотра и выдачи денежных средств закупщику.
                </p>
              </div>
            </div>
          </div>

          {/* РАЗДЕЛ 5: ОБЫСК, ДОСМОТР, ИЗЪЯТИЕ И ПОНЯТЫЕ */}
          <div style={{ marginTop: '56px', marginBottom: '56px' }}>
            <div style={{ maxWidth: '820px', marginBottom: '32px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Процессуальные нарушения
              </div>
              <h3 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                Обыск, досмотр, изъятие и понятые
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Нарушение установленного законом порядка обнаружения, изъятия и фиксации предметов лишает протокол юридической силы на основании ст. 75 УПК РФ.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '24px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '26px 22px', borderTop: '3px solid var(--color-primary)' }}>
                <h4 style={{ fontSize: '17.5px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>
                  Протоколы досмотра и обыска
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Проверяем законность оснований остановки и досмотра, наличие судебного решения при обыске в жилище, разъяснение процессуальных прав и правильность внесения замечаний участниками.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '26px 22px', borderTop: '3px solid var(--color-gold)' }}>
                <h4 style={{ fontSize: '17.5px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>
                  Статус и участие понятых
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Проверяем незаинтересованность понятых (исключение штатных стажёров или зависимых лиц), их непрерывное присутствие при обнаружении веществ и соответствие их показаний тексту протокола.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '26px 22px', borderTop: '3px solid #4A6B82' }}>
                <h4 style={{ fontSize: '17.5px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>
                  Фиксация смывов и срезов
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Анализируем правильность изъятия смывов с рук, срезов ногтевых пластин и карманов одежды. Отсутствие следов на теле и одежде опровергает контакт лица с изъятым веществом.
                </p>
              </div>
            </div>
          </div>

          {/* РАЗДЕЛ 6: ВОЗМОЖНЫЕ ПРАВОВЫЕ МАРШРУТЫ */}
          <div style={{ marginTop: '56px', marginBottom: '56px', background: '#FAF7F2', padding: '40px 36px', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-primary)' }}>
            <div style={{ maxWidth: '820px', marginBottom: '32px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Стратегия защиты
              </div>
              <h3 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                Возможные правовые маршруты
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Направление работы выстраивается индивидуально в зависимости от доказательств, квалификации и стадии производства по делу.
              </p>
            </div>

            <div className="grid grid-2" style={{ gap: '24px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '26px 22px' }}>
                <strong style={{ fontSize: '17.5px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '10px', fontFamily: 'var(--font-serif)' }}>
                  Срочная защита после задержания
                </strong>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Адвокат устанавливает статус и место нахождения доверителя, проводит конфиденциальную консультацию, участвует в допросе в качестве подозреваемого и фиксирует юридически значимые обстоятельства.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '26px 22px' }}>
                <strong style={{ fontSize: '17.5px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '10px', fontFamily: 'var(--font-serif)' }}>
                  Защита на предварительном расследовании
                </strong>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Изучаются протоколы, экспертизы, цифровые и оперативные материалы; заявляются ходатайства и жалобы; проверяются обоснованность каждого эпизода, квалификация, роль и мера пресечения.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '26px 22px' }}>
                <strong style={{ fontSize: '17.5px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '10px', fontFamily: 'var(--font-serif)' }}>
                  Оспаривание цели сбыта или роли
                </strong>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Подходит, когда обвинение выводит умысел или соучастие из косвенных признаков. Стратегия строится на полном контексте и индивидуальных действиях для переквалификации на хранение.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '26px 22px' }}>
                <strong style={{ fontSize: '17.5px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '10px', fontFamily: 'var(--font-serif)' }}>
                  Защита в суде
                </strong>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Команда сопоставляет обвинение с исследованными доказательствами, представляет позицию, допрашивает участников, понятых и экспертов, добиваясь оценки каждого спорного обстоятельства.
                </p>
              </div>
            </div>

            <div style={{ marginTop: '20px', background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
              <strong style={{ color: 'var(--color-deep-blue)' }}>Ограничение: </strong>
              Нельзя обещать освобождение, прекращение дела, исключение доказательства, переквалификацию или наказание без лишения свободы. Возможность каждого результата определяется после изучения материалов и зависит от решений следствия и суда.
            </div>
          </div>

          {/* РАЗДЕЛ 7: КАКИЕ ДОКУМЕНТЫ НУЖНЫ ДЛЯ ПЕРВИЧНОГО АНАЛИЗА */}
          <div style={{ marginTop: '56px', marginBottom: '56px', background: '#FFFFFF', padding: '40px 36px', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-gold)' }}>
            <div style={{ maxWidth: '820px', marginBottom: '28px' }}>
              <h3 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                Какие документы нужны для первичного анализа
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Для предметной оценки перспектив по статьям 228 и 228.1 УК РФ рекомендуется подготовить следующие процессуальные документы:
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px', marginBottom: '28px' }}>
              {[
                'повестку, протокол задержания, постановления о возбуждении дела, привлечении в качестве обвиняемого и мере пресечения — если они есть;',
                'протокол личного обыска, осмотра, обыска, выемки и приложения к ним;',
                'опись изъятого, сведения об упаковке и копии документов, выданных после процессуального действия;',
                'справку об исследовании, постановление о назначении экспертизы и заключение эксперта;',
                'протоколы допросов, очных ставок, предъявления для опознания и других действий;',
                'обвинительное заключение и судебные извещения, если дело уже передано в суд;',
                'краткую хронологию событий, известные данные об органе и ближайшие даты.'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', background: '#F8FAFC', padding: '16px 18px', border: '1px solid var(--color-border)' }}>
                  <div style={{ width: '8px', height: '8px', minWidth: '8px', background: 'var(--color-gold)', borderRadius: '50%', marginTop: '7px' }}></div>
                  <span style={{ fontSize: '14px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>{item}</span>
                </div>
              ))}
            </div>

            <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-primary)', fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
              Если документы не выданы или находятся у следователя, это не препятствует первичному разговору. Не загружать материалы через публичные комментарии и рекламные формы; безопасный способ передачи согласовать после контакта.
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
                  { name: 'source_page', value: 'https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-delam-o-narkotikah/' },
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
