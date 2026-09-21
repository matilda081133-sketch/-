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
  const situations = [
  {
    "tag": "Взятка / ст. 290",
    "title": "Получение взятки должностным лицом лично или через посредника",
    "desc": "Проверка наличия служебных полномочий, фиксация провокации взятки и признаков оперативного эксперимента."
  },
  {
    "tag": "Дача / ст. 291",
    "title": "Дача взятки должностному лицу за совершение действий",
    "desc": "Освобождение от ответственности в связи с добровольным сообщением и вымогательством взятки (ст. 291 прим)."
  },
  {
    "tag": "Посредник / ст. 291.1",
    "title": "Посредничество во взяточничестве или обещание посредничества",
    "desc": "Разграничение реального посредничества и мошенничества (ст. 159 УК РФ), когда передача денег не планировалась."
  },
  {
    "tag": "Полномочия / ст. 285",
    "title": "Злоупотребление или превышение должностных полномочий",
    "desc": "Анализ должностных регламентов, инструкций и доказывание отсутствия корыстной или иной личной заинтересованности."
  },
  {
    "tag": "Халатность / ст. 293",
    "title": "Халатность с причинением крупного ущерба или вреда",
    "desc": "Установление отсутствия реальной технической возможности исполнить обязанности или предотвратить последствия."
  },
  {
    "tag": "Эксперимент / ОРД",
    "title": "Задержание с поличным при проведении оперативного эксперимента",
    "desc": "Срочный выезд адвоката, ревизия оснований проведения ОРМ, меченых купюр и аудиовидеозаписей."
  }
];
  const casesData: CaseData[] = [
  {
    "category": "ст. 290 -> ст. 159 УК РФ",
    "title": "Переквалификация со взятки на мошенничество и снижение срока",
    "problem": "Чиновнику вменялось получение взятки в крупном размере за содействие в оформлении земельного участка.",
    "action": "Доказали, что предоставление участка не входило в служебные полномочия клиента и он не мог повлиять на решение.",
    "result": "Суд переквалифицировал обвинение со ст. 290 на ст. 159 ч. 3 УК РФ, исключив наказание в виде 8 лет строгого режима."
  },
  {
    "category": "ст. 291 примечание УК РФ",
    "title": "Освобождение предпринимателя от уголовной ответственности за дачу взятки",
    "problem": "Бизнесмена задержали при передаче денег сотруднику контролирующего органа за непривлечение к ответственности.",
    "action": "Доказали факт вымогательства взятки со стороны инспектора и своевременно оформили добровольное заявление.",
    "result": "Уголовное преследование предпринимателя прекращено по примечанию к ст. 291 УК РФ."
  },
  {
    "category": "ст. 286 УК РФ",
    "title": "Оправдательный приговор по обвинению в превышении полномочий",
    "problem": "Руководителя муниципального учреждения обвиняли в подписании актов выполненных работ без фактической проверки.",
    "action": "Доказали соответствие действий должностной инструкции и наличие положительных заключений строительного контроля.",
    "result": "Суд вынес оправдательный приговор в связи с отсутствием состава преступления."
  }
];
  const processSteps: ProcessStep[] = [
  {
    "num": "01",
    "title": "Аудит материалов оперативного эксперимента",
    "desc": "Изучаем аудиовидеозаписи ОРМ, основания проведения эксперимента и признаки провокации."
  },
  {
    "num": "02",
    "title": "Анализ должностных обязанностей",
    "desc": "Сопоставляем вменяемые действия с официальным регламентом и полномочиями доверителя."
  },
  {
    "num": "03",
    "title": "Защита в СК РФ и суде по мере пресечения",
    "desc": "Пресекаем незаконное давление, добиваемся домашнего ареста или залога вместо заключения в СИЗО."
  },
  {
    "num": "04",
    "title": "Оспаривание квалификации и минимизация",
    "desc": "Боремся за переквалификацию на мошенничество или прекращение преследования."
  }
];
  const pricingTiers: PricingTier[] = [
  {
    "title": "Первичный анализ материалов проверки",
    "subtitle": "Оценка должностных полномочий и рисков ОРД",
    "price": "от 15 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "изучение должностных инструкций и регламентов",
        "value": "Да"
      },
      {
        "name": "оценка законности проведенных ОРМ",
        "value": "Да"
      },
      {
        "name": "выработка стратегии поведения при вызове в СК",
        "value": "Да"
      }
    ],
    "buttonText": "Записаться",
    "buttonHref": "#form"
  },
  {
    "title": "Срочный выезд при задержании с поличным",
    "subtitle": "Участие в первых допросах в СК РФ и суде по аресту",
    "price": "от 35 000 ₽",
    "popular": true,
    "badgeText": "Востребовано",
    "features": [
      {
        "name": "срочный выезд адвоката в Следственный комитет",
        "value": "Да"
      },
      {
        "name": "конфиденциальная беседа до дачи показаний",
        "value": "Да"
      },
      {
        "name": "защита в суде при избрании меры пресечения",
        "value": "Да"
      }
    ],
    "buttonText": "Пригласить адвоката",
    "buttonHref": "#form"
  },
  {
    "title": "Комплексная защита по коррупционным делам",
    "subtitle": "Предварительное следствие в СК и суд под ключ",
    "price": "от 80 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "полная защита по ст. 290, 291, 285, 286 УК РФ",
        "value": "Да"
      },
      {
        "name": "назначение лингвистических и фоноскопических экспертиз",
        "value": "Да"
      },
      {
        "name": "работа по переквалификации обвинения",
        "value": "Да"
      }
    ],
    "buttonText": "Обсудить защиту",
    "buttonHref": "#form"
  }
];
  const relatedLinks = [
  {
    "title": "Экономические преступления",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-ekonomicheskim-prestupleniyam/"
  },
  {
    "title": "Мошенничество",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-moshennichestvu/"
  },
  {
    "title": "Задержание, обыск и допрос",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-pri-zaderzhanii-obyske-i-doprose/"
  },
  {
    "title": "Обжалование приговора",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/obzhalovanie-prigovora/"
  }
];
  const faqItems = [
  {
    "q": "Что считается взяткой (ст. 290 УК РФ)?",
    "a": "Взяткой признаются деньги, ценные бумаги, иное имущество либо незаконное оказание услуг имущественного характера должностному лицу за совершение действий (бездействия) в пользу взяткодателя, входящих в служебные полномочия чиновника."
  },
  {
    "q": "В чем разница между взяткой и подарком чиновнику?",
    "a": "Сумма до 3 000 ₽ сама по себе не делает передачу законным подарком. Гражданский кодекс РФ допускает обычные подарки стоимостью не более трех тысяч рублей работникам определенных сфер (например, медицинских или образовательных учреждений), однако это не распространяется на случаи, когда выгода передается должностному лицу за совершение действий (бездействия), входящих в его служебные полномочия. Если передача обусловлена должностным положением, обвинение квалифицирует это как получение взятки независимо от суммы."
  },
  {
    "q": "Как освободиться от ответственности за дачу взятки?",
    "a": "В соответствии с примечанием к ст. 291 УК РФ лицо освобождается от уголовной ответственности, если оно активно способствовало раскрытию преступления и либо в отношении него имело место вымогательство, либо лицо добровольно сообщило о даче взятки в орган следствия."
  },
  {
    "q": "Что такое провокация взятки?",
    "a": "Провокация — это попытка передачи денег должностному лицу без его согласия либо создание искусственных условий для вынуждения принять ценности в целях искусственного формирования доказательств преступления. Провокация взятки сама является уголовно наказуемым деянием (ст. 304 УК РФ)."
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
        "@id": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-dolzhnostnym-prestupleniyam-i-vzyatkam/#breadcrumbs",
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
            "name": "Должностные преступления и взятки",
            "item": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-dolzhnostnym-prestupleniyam-i-vzyatkam/"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-dolzhnostnym-prestupleniyam-i-vzyatkam/#service",
        "name": "Должностные преступления и взятки в Липецке",
        "description": "Защита государственных и муниципальных служащих, сотрудников контролирующих органов и предпринимателей по делам о получении, даче и посредничестве во взяточничестве, превышении и злоупотреблении полномочиями.",
        "url": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-dolzhnostnym-prestupleniyam-i-vzyatkam/",
        "provider": { "@id": "https://dejure-help.ru/#organization" },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Липецк и Липецкая область"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-dolzhnostnym-prestupleniyam-i-vzyatkam/#faq",
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
            <span style={{ color: 'var(--color-text-main)' }}>Должностные преступления и взятки</span>
          </>
        }
        superTitle="Защита по ст. 290, 291, 285, 286 УК РФ • Липецк"
        title={
          <span style={{ display: 'block', maxWidth: '100%' }}>
            <span style={{ display: 'block' }}>Адвокат по взяткам</span>
            <span style={{ display: 'block' }}>и должностным преступлениям</span>
            <span style={{ display: 'block' }}>в Липецке</span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Защитим при проверке и обвинении в получении или даче взятки, посредничестве, злоупотреблении и превышении полномочий. Проверим статус, служебные функции, договорённости, движение ценностей, последствия и законность доказательств.
          </span>
        }
        primaryCtaText="Обсудить ситуацию с адвокатом"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_cta_advokat_po_dolzhnostnym_prestupleniyam_i_vzyatkam"
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

          {/* ═══ СОДЕРЖАТЕЛЬНЫЕ РАЗДЕЛЫ ПО ДОЛЖНОСТНЫМ ДЕЛАМ И ВЗЯТКАМ ═══ */}

          {/* 1. Кого и в чём обвиняют (Маршрутизатор ролей) */}
          <div style={{ marginTop: '56px', marginBottom: '48px' }}>
            <div style={{ maxWidth: '820px', marginBottom: '28px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Маршрутизатор ролей
              </div>
              <h3 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                Кого и в чём обвиняют: выберите вашу ситуацию
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Защита по коррупционным и должностным делам строится индивидуально с учётом статуса, круга полномочий и стадии процессуальной проверки.
              </p>
            </div>

            <div className="grid grid-2" style={{ gap: '20px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-primary)', padding: '24px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>Госслужба и полномочия</span>
                  <h4 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>Должностное лицо / Получатель</h4>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    Проверка или обвинение по ст. 285, 286, 290, 292, 293 УК РФ. Проверяем источник публичных полномочий, служебные регламенты, причинную связь с решением и законность оперативного эксперимента.
                  </p>
                </div>
                <a href="#form" className="btn btn-primary" style={{ marginTop: '16px', textAlign: 'center', padding: '10px 16px', fontSize: '13.5px' }}>Защитить должностное лицо</a>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-gold)', padding: '24px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>Бизнес и граждане</span>
                  <h4 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>Предполагаемый взяткодатель</h4>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    Деньги или выгода переданы либо предложены чиновнику (ст. 291, 291.2 УК РФ). Оцениваем признаки вымогательства взятки, добровольность обращения и основания для освобождения от ответственности.
                  </p>
                </div>
                <a href="#form" className="btn btn-primary" style={{ marginTop: '16px', textAlign: 'center', padding: '10px 16px', fontSize: '13.5px' }}>Оценить риски ст. 291 УК РФ</a>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-deep-blue)', padding: '24px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>Содействие</span>
                  <h4 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>Предполагаемый посредник</h4>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    Обвинение в передаче предмета или способствовании договоренности (ст. 291.1 УК РФ). Отделяем бытовую помощь от осознанного посредничества и проверяем размер и направленность умысла.
                  </p>
                </div>
                <a href="#form" className="btn btn-primary" style={{ marginTop: '16px', textAlign: 'center', padding: '10px 16px', fontSize: '13.5px' }}>Защита посредника</a>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-primary)', padding: '24px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>Срочная помощь</span>
                  <h4 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>Родственник задержанного</h4>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    Близкого задержали с поличным или проводят обыск дома. Подключаем адвоката к следственным действиям, посещаем изолятор (ИВС/СИЗО) и готовим позицию по мере пресечения.
                  </p>
                </div>
                <a href="#form" className="btn btn-primary" style={{ marginTop: '16px', textAlign: 'center', padding: '10px 16px', fontSize: '13.5px' }}>Срочный выезд адвоката</a>
              </div>
            </div>
          </div>

          {/* 2. Получение, дача или посредничество */}
          <div style={{ marginBottom: '48px' }}>
            <div style={{ maxWidth: '820px', marginBottom: '28px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Квалификация коррупционных составов
              </div>
              <h3 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                Получение, дача или посредничество: специфика защиты
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Размер вознаграждения влияет на тяжесть части статьи, но не подменяет доказанность самого состава преступления, служебной связи и умысла.
              </p>
            </div>

            <div className="grid grid-2" style={{ gap: '20px' }}>
              <div style={{ background: '#F8FAFC', border: '1px solid var(--color-border)', padding: '24px' }}>
                <h4 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>
                  Получение взятки (ст. 290 УК РФ)
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Исследуется, входило ли действие (бездействие) в служебные полномочия либо мог ли чиновник способствовать решению в силу должности. Проверяются факт получения выгоды, отсутствие провокации и соответствие размера инкриминируемой части статьи.
                </p>
              </div>

              <div style={{ background: '#F8FAFC', border: '1px solid var(--color-border)', padding: '24px' }}>
                <h4 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>
                  Дача взятки (ст. 291 УК РФ)
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Защита оценивает адресата, мотив предложения, добровольность передачи и наличие вымогательства со стороны чиновника. При соблюдении условий примечания к статье добиваемся освобождения доверителя от уголовной ответственности.
                </p>
              </div>

              <div style={{ background: '#F8FAFC', border: '1px solid var(--color-border)', padding: '24px' }}>
                <h4 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>
                  Посредничество во взяточничестве (ст. 291.1 УК РФ)
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Ответственность наступает за непосредственную передачу взятки по поручению или содействие соглашению. Защита проверяет осведомленность лица о коррупционной цели, размер взятки (от 25 000 ₽) и разграничивает посредничество с мошенничеством.
                </p>
              </div>

              <div style={{ background: '#F8FAFC', border: '1px solid var(--color-border)', padding: '24px' }}>
                <h4 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>
                  Мелкое взяточничество (ст. 291.2 УК РФ)
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Сумма взятки не превышает 10 000 рублей. Проверяются способ передачи, отсутствие вымогательства, наличие судимости по аналогичным составам и перспектива прекращения дела с назначением судебного штрафа (ст. 76.2 УК РФ).
                </p>
              </div>
            </div>
          </div>

          {/* 3. Злоупотребление или превышение полномочий */}
          <div style={{ marginBottom: '48px' }}>
            <div style={{ maxWidth: '820px', marginBottom: '28px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Служебные преступления
              </div>
              <h3 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                Злоупотребление или превышение полномочий
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Не каждое управленческое или процедурное нарушение образует состав преступления. Для квалификации следствие обязано доказать конкретные признаки.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '20px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '22px', borderLeft: '4px solid var(--color-primary)' }}>
                <h4 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>
                  Злоупотребление (ст. 285 УК РФ)
                </h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Использование служебных полномочий вопреки интересам службы. Обязательны два признака: корыстная или иная личная заинтересованность и наступление существенного вреда правам граждан, организаций или государства.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '22px', borderLeft: '4px solid var(--color-gold)' }}>
                <h4 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>
                  Превышение (ст. 286 УК РФ)
                </h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Совершение действий, явно выходящих за пределы полномочий должностного лица. Защита доказывает, что решение соответствовало регламенту, принималось в ситуации крайней необходимости или носило коллегиальный характер.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '22px', borderLeft: '4px solid var(--color-deep-blue)' }}>
                <h4 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>
                  Подлог и халатность (ст. 292, 293 УК РФ)
                </h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Разграничиваем умышленное внесение ложных данных в официальные документы и небрежность при отсутствии технической или кадровой возможности исполнить служебные обязанности в полном объеме.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Взятка, подарок, коммерческий подкуп или мошенничество */}
          <div style={{ marginBottom: '48px', background: '#F8FAFC', padding: '32px 28px', border: '1px solid var(--color-border)' }}>
            <h3 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 16px 0' }}>
              Взятка, подарок, коммерческий подкуп или мошенничество
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
              Точная квалификация деяния — основа стратегии защиты. Смешение этих составов следствием часто приводит к необоснованному ужесточению обвинения:
            </p>

            <div className="grid grid-2" style={{ gap: '20px' }}>
              <div style={{ background: '#FFFFFF', padding: '20px', border: '1px solid var(--color-border)' }}>
                <strong style={{ color: 'var(--color-deep-blue)', fontSize: '16px', display: 'block', marginBottom: '8px' }}>Взятка vs Законный подарок</strong>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Взятка всегда обусловлена служебным поведением должностного лица (действием, бездействием, покровительством). Законный подарок имеет самостоятельное основание (праздник, протокольное мероприятие) и не связан с выполнением служебных обязанностей.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', padding: '20px', border: '1px solid var(--color-border)' }}>
                <strong style={{ color: 'var(--color-deep-blue)', fontSize: '16px', display: 'block', marginBottom: '8px' }}>Взятка vs Коммерческий подкуп (ст. 204 УК РФ)</strong>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Субъектом взятки является только публичное должностное лицо (госорган, муниципалитет, контрольное ведомство). Передача незаконного вознаграждения руководителю или менеджеру коммерческой организации квалифицируется как коммерческий подкуп.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', padding: '20px', border: '1px solid var(--color-border)' }}>
                <strong style={{ color: 'var(--color-deep-blue)', fontSize: '16px', display: 'block', marginBottom: '8px' }}>Взятка vs Мошенничество (ст. 159 УК РФ)</strong>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Если лицо обещало «решить вопрос», но заведомо не обладало полномочиями и возможностью повлиять на решение, содеянное является хищением путем обмана (мошенничеством), санкция за которое существенно мягче, чем за получение взятки.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', padding: '20px', border: '1px solid var(--color-border)' }}>
                <strong style={{ color: 'var(--color-deep-blue)', fontSize: '16px', display: 'block', marginBottom: '8px' }}>Благодарность vs Взятка</strong>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Передача вознаграждения после совершения служебного действия оценивается по наличию предварительной договоренности. При отсутствии предварительного соглашения состав получения взятки отсутствует.
                </p>
              </div>
            </div>
          </div>

          {/* 5. Проверка ОРМ, записей и передачи предмета */}
          <div style={{ marginBottom: '48px' }}>
            <div style={{ maxWidth: '820px', marginBottom: '28px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Доказательственная база
              </div>
              <h3 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                Проверка ОРМ, записей и передачи предмета
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Коррупционные дела основываются на оперативно-розыскных мероприятиях (ОРМ). Нарушения при их проведении влекут признание доказательств недопустимыми.
              </p>
            </div>

            <div className="grid grid-2" style={{ gap: '20px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '22px' }}>
                <h4 style={{ fontSize: '16.5px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>
                  Оперативный эксперимент и провокация
                </h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Проверяем, исходила ли инициатива от доверителя или его склоняли к получению ценностей, которые без давления правоохранителей не были бы приняты. Доказываем провокацию взятки в нарушение ст. 5 ФЗ «Об ОРД».
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '22px' }}>
                <h4 style={{ fontSize: '16.5px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>
                  Аудио-, видеозаписи и переписка
                </h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Анализируем целостность файлов, непрерывность записи, контекст разговора до и после ключевых фраз. Инициируем фоноскопические и лингвистические экспертизы для исключения монтажа и субъективной трактовки слов.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '22px' }}>
                <h4 style={{ fontSize: '16.5px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>
                  Меченые купюры и смывы с рук
                </h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Проверяем постановление об осмотре и выдаче денег заявителю, фиксацию серийных номеров, порядок изъятия, упаковки и опечатывания, а также соблюдение методики отбора контрольных смывов люминесцентного состава.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '22px' }}>
                <h4 style={{ fontSize: '16.5px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>
                  Протоколы следственных действий и понятые
                </h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Выявляем фиктивное участие понятых, несоответствие времени составления протоколов фактическим событиям и нарушения порядка рассекречивания результатов ОРД для приобщения к делу.
                </p>
              </div>
            </div>
          </div>

          {/* 6. Должностные полномочия и связь с вознаграждением */}
          <div style={{ marginBottom: '48px' }}>
            <div style={{ maxWidth: '820px', marginBottom: '28px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Служебный анализ
              </div>
              <h3 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                Должностные полномочия и связь с вознаграждением
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Ключевой фактор защиты — сопоставление вменяемых действий с официальными регламентами, приказами и реальной практикой принятия решений в ведомстве.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '20px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '20px' }}>
                <h4 style={{ fontSize: '16px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>
                  Анализ регламентов
                </h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Изучаем должностную инструкцию, приказы о распределении обязанностей и временном замещении для установления точных рамок прав и обязанностей доверителя.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '20px' }}>
                <h4 style={{ fontSize: '16px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>
                  Маршрут решений
                </h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Восстанавливаем цепочку согласований документа: визы коллег, заключения профильных отделов и коллегиальные решения, исключающие единоличную вину.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '20px' }}>
                <h4 style={{ fontSize: '16px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>
                  Отсутствие корысти
                </h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Доказываем направленность действий на обеспечение нормальной работы ведомства, исполнение вышестоящих указаний или добросовестное заблуждение.
                </p>
              </div>
            </div>
          </div>

          {/* 7. Возможные правовые маршруты */}
          <div style={{ marginBottom: '56px' }}>
            <div style={{ maxWidth: '820px', marginBottom: '28px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Стратегия защиты
              </div>
              <h3 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                Возможные правовые маршруты защиты
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                После изучения материалов адвокат формирует правовую позицию, направленную на прекращение дела, смягчение обвинения либо оправдание.
              </p>
            </div>

            <div className="grid grid-2" style={{ gap: '20px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', padding: '22px' }}>
                <strong style={{ color: 'var(--color-deep-blue)', fontSize: '16px', display: 'block', marginBottom: '6px' }}>Отсутствие состава или события</strong>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Доказывание законности действий служащего, отсутствия коррупционного соглашения или отсутствия существенного вреда. Прекращение дела следователем либо оправдательный приговор суда.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-gold)', padding: '22px' }}>
                <strong style={{ color: 'var(--color-deep-blue)', fontSize: '16px', display: 'block', marginBottom: '6px' }}>Переквалификация обвинения</strong>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Исключение необоснованных квалифицирующих признаков (вымогательство, группа лиц по предварительному сговору, особо крупный размер) либо переход на мошенничество или халатность с не связанными с лишением свободы мерами.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-deep-blue)', padding: '22px' }}>
                <strong style={{ color: 'var(--color-deep-blue)', fontSize: '16px', display: 'block', marginBottom: '6px' }}>Исключение доказательств ОРМ</strong>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Признание протоколов оперативного эксперимента, фонограмм и досмотров недопустимыми доказательствами ввиду процессуальных нарушений, что разрушает конструкцию обвинения.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', padding: '22px' }}>
                <strong style={{ color: 'var(--color-deep-blue)', fontSize: '16px', display: 'block', marginBottom: '6px' }}>Специальное освобождение и смягчение</strong>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Применение примечаний к ст. 291 и 291.1 УК РФ при добровольном сообщении и вымогательстве, а также сбор совокупности смягчающих обстоятельств для назначения наказания ниже низшего предела (ст. 64 УК РФ).
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
                  { name: 'source_page', value: 'https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-dolzhnostnym-prestupleniyam-i-vzyatkam/' },
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
