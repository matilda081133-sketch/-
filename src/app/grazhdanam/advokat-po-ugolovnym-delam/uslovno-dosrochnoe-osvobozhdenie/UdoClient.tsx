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
    "buttonText": "Заказать анализ",
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
    "buttonText": "Выбрать тариф",
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
    "buttonText": "Обсудить жалобу",
    "buttonHref": "#form"
  }
];
  const relatedLinks = [
  {
    "title": "Обжалование приговора",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/obzhalovanie-prigovora/"
  },
  {
    "title": "Защита прав потерпевшего",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/zashchita-poterpevshego/"
  },
  {
    "title": "Адвокат по делам о наркотиках",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-delam-o-narkotikah/"
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
    "a": "Статья 80 УК РФ предусматривает замену неотбытой части наказания более мягким видом наказания (например, принудительными работами или исправительными работами), тогда как УДО (ст. 79 УК РФ) полностью освобождает от отбывания наказания под условием соблюдения установленных обязанностей. Сроки, после отбытия которых возможно обращение по ст. 80 УК РФ, по ряду категорий преступлений наступают раньше, чем для УДО. Защита оценивает, какой вариант в текущей ситуации перспективнее, либо подаёт ходатайства последовательно."
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
        "@id": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/uslovno-dosrochnoe-osvobozhdenie/#breadcrumbs",
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
        "@id": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/uslovno-dosrochnoe-osvobozhdenie/#service",
        "name": "Условно-досрочное освобождение в Липецке",
        "description": "Оценим формальные и фактические основания для УДО: отбытую часть срока, взыскания и поощрения, возмещение ущерба, гарантии жилья и работы. Соберём доказательства и представим интересы в суде.",
        "url": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/uslovno-dosrochnoe-osvobozhdenie/",
        "provider": { "@id": "https://dejure-help.ru/#organization" },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Липецк и Липецкая область"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/uslovno-dosrochnoe-osvobozhdenie/#faq",
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
            <span style={{ color: 'var(--color-text-main)' }}>Условно-досрочное освобождение</span>
          </>
        }
        superTitle="УДО и замена наказания (ст. 79, 80 УК РФ) • Липецк"
        title={
          <span style={{ display: 'block', maxWidth: '100%' }}>
            <span style={{ display: 'block' }}>Условно-досрочное</span>
            <span style={{ display: 'block' }}>освобождение</span>
            <span style={{ display: 'block' }}>в Липецке</span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Проверим, наступил ли срок для обращения, изучим поведение за весь период и соберём документы, которые помогают суду оценить исправление и готовность к жизни после освобождения. Подготовим ходатайство и представим позицию в суде.
          </span>
        }
        primaryCtaText="Обсудить ситуацию с адвокатом"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_cta_uslovno_dosrochnoe_osvobozhdenie"
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

          {/* ═══ СОДЕРЖАТЕЛЬНЫЕ РАЗДЕЛЫ ПО УСЛОВНО-ДОСРОЧНОМУ ОСВОБОЖДЕНИЮ ═══ */}

          {/* 1. БЫСТРАЯ ПРОВЕРКА ГОТОВНОСТИ К УДО */}
          <div style={{ marginTop: '56px', marginBottom: '48px' }}>
            <div style={{ maxWidth: '820px', marginBottom: '28px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Предварительный аудит
              </div>
              <h3 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                Что нужно проверить до подачи ходатайства об УДО
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Суд оценивает исправление осуждённого в совокупности. Прежде чем обращаться с ходатайством, необходимо детально исследовать 5 ключевых факторов.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '20px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-primary)', padding: '24px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>Сроки и зачёты</span>
                  <h4 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>Наступил ли срок?</h4>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    Проверяем приговор, категорию и состав преступления, назначенный и фактически отбытый срок, зачёты содержания под стражей (ст. 72 УК РФ) и изменения приговора. Раннее обращение возвращается без рассмотрения.
                  </p>
                </div>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-primary)', padding: '24px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>Динамика поведения</span>
                  <h4 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>Как отбывал наказание?</h4>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    Изучаем весь период: взыскания и поощрения, даты и основания, условия содержания, участие в воспитательных мероприятиях. Суд обязан исследовать всю динамику, а не изолированные факты.
                  </p>
                </div>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-primary)', padding: '24px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>Занятость в ИК</span>
                  <h4 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>Есть ли труд и обучение?</h4>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    Анализируем трудоустройство в колонии, поданные заявления о желании трудиться, освоение новых профессий и объективные причины отсутствия занятости (отсутствие рабочих мест, здоровье).
                  </p>
                </div>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-gold)', padding: '24px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>Исполнение обязательств</span>
                  <h4 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>Как возмещается вред?</h4>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    Проверяем исполнительные документы, удержания из зарплаты, добровольные переводы потерпевшим, баланс дохода и отсутствие признаков уклонения от погашения ущерба.
                  </p>
                </div>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-gold)', padding: '24px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>Ресоциализация</span>
                  <h4 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>Что будет после освобождения?</h4>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    Формируем пакет социальных гарантий: подтверждённое жильё (согласие собственника, выписка ЕГРН), гарантийное письмо работодателя, семейные обязательства и план адаптации.
                  </p>
                </div>
              </div>

              <div style={{ background: 'var(--gradient-cream)', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-deep-blue)', padding: '24px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>Юридическая помощь</span>
                  <h4 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>Оценить перспективу УДО</h4>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    Передайте приговор и сведения о колонии для первичного расчёта контрольных дат и составления доказательственной карты.
                  </p>
                </div>
                <a href="#form" className="btn btn-primary" style={{ marginTop: '16px', textAlign: 'center', padding: '10px 16px', fontSize: '13.5px' }}>Рассчитать срок УДО</a>
              </div>
            </div>
          </div>

          {/* 2. КАКАЯ ЧАСТЬ СРОКА ДОЛЖНА БЫТЬ ОТБЫТА */}
          <div style={{ marginTop: '56px', marginBottom: '48px' }}>
            <div style={{ maxWidth: '820px', marginBottom: '28px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Сроки по закону (ст. 79, 93 УК РФ)
              </div>
              <h3 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                Какая часть срока должна быть отбыта для права на УДО
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Закон устанавливает обязательные доли назначенного наказания в зависимости от категории преступления и состава. Фактически отбытый срок лишения свободы не может быть менее 6 месяцев.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '20px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-primary)', padding: '22px 20px' }}>
                <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--color-primary)', fontFamily: 'var(--font-serif)', marginBottom: '6px' }}>не менее 1/3</div>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Небольшая и средняя тяжесть</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Преступления, за которые максимальное наказание не превышает 3 лет (небольшая тяжесть) либо 5 лет умышленно / 10 лет по неосторожности (средняя тяжесть).
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-primary)', padding: '22px 20px' }}>
                <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--color-primary)', fontFamily: 'var(--font-serif)', marginBottom: '6px' }}>не менее 1/2</div>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Тяжкие преступления</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Умышленные деяния с наказанием до 10 лет лишения свободы (ч. 3–4 ст. 158, ч. 2–3 ст. 159, ч. 2 ст. 228 УК РФ и др.), если они не подпадают под спецправила 3/4.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-primary)', padding: '22px 20px' }}>
                <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--color-primary)', fontFamily: 'var(--font-serif)', marginBottom: '6px' }}>не менее 2/3</div>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Особо тяжкие составы</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Умышленные преступления с наказанием свыше 10 лет либо пожизненным, а также лица, которым ранее уже отменялось условно-досрочное освобождение.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-gold)', padding: '22px 20px' }}>
                <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', marginBottom: '6px' }}>не менее 3/4</div>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Специальные составы</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Тяжкие и особо тяжкие преступления в сфере незаконного оборота наркотиков (ст. 228.1, 229, 229.1 УК РФ), террористическая деятельность, преступления против несовершеннолетних.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-gold)', padding: '22px 20px' }}>
                <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', marginBottom: '6px' }}>не менее 4/5</div>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Лица до 14 лет</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Преступления против половой неприкосновенности несовершеннолетних, не достигших 14-летнего возраста.
                </p>
              </div>

              <div style={{ background: 'var(--gradient-cream)', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-deep-blue)', padding: '22px 20px' }}>
                <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', marginBottom: '6px' }}>≥ 6 месяцев</div>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Минимальный срок</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Фактически отбытый осуждённым срок лишения свободы не может быть менее полугода, даже если рассчитанная доля составляет меньший период.
                </p>
              </div>
            </div>
          </div>

          {/* 3. ЧТО ИМЕННО ОЦЕНИВАЕТ СУД */}
          <div style={{ marginTop: '56px', marginBottom: '48px' }}>
            <div style={{ maxWidth: '820px', marginBottom: '28px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Судебное исследование
              </div>
              <h3 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                Что именно исследует суд при рассмотрении ходатайства
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Закон не устанавливает автоматического права на освобождение по наступлению срока. Суд делает вывод об исправлении осуждённого на основе комплексного анализа всех сторон его личности.
              </p>
            </div>

            <div className="grid grid-2" style={{ gap: '20px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <div style={{ width: '8px', height: '8px', background: 'var(--color-primary)', borderRadius: '50%' }}></div>
                  <h4 style={{ margin: 0, fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)' }}>Поведение за весь период наказания</h4>
                </div>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: '0 0 12px 0' }}>
                  Суд изучает характеристику учреждения, наличие взысканий и поощрений, динамику изменения поведения, соблюдение правил внутреннего распорядка колонии и перевод в облегчённые условия.
                </p>
                <div style={{ fontSize: '12.5px', color: 'var(--color-primary)', fontWeight: 600 }}>Подтверждение: справка о поощрениях и взысканиях, характеристика ИК</div>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <div style={{ width: '8px', height: '8px', background: 'var(--color-primary)', borderRadius: '50%' }}></div>
                  <h4 style={{ margin: 0, fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)' }}>Отношение к труду и обучению</h4>
                </div>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: '0 0 12px 0' }}>
                  Оценивается добросовестный труд на производстве колонии, освоение рабочих специальностей, получение среднего или профессионального образования, участие в благоустройстве отряда.
                </p>
                <div style={{ fontSize: '12.5px', color: 'var(--color-primary)', fontWeight: 600 }}>Подтверждение: справка о трудовой занятости, дипломы, свидетельства ПТУ</div>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <div style={{ width: '8px', height: '8px', background: 'var(--color-gold)', borderRadius: '50%' }}></div>
                  <h4 style={{ margin: 0, fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)' }}>Возмещение причинённого вреда</h4>
                </div>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: '0 0 12px 0' }}>
                  Исследуется исполнение приговора в части гражданского иска, регулярность отчислений из зарплаты, добровольные платежи осуждённого и близких, а также объективные причины частичного возмещения.
                </p>
                <div style={{ fontSize: '12.5px', color: 'var(--color-primary)', fontWeight: 600 }}>Подтверждение: справка бухгалтерии ИК об удержаниях, квитанции, расписки</div>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <div style={{ width: '8px', height: '8px', background: 'var(--color-gold)', borderRadius: '50%' }}></div>
                  <h4 style={{ margin: 0, fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)' }}>План жизни и социальная адаптация</h4>
                </div>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: '0 0 12px 0' }}>
                  Суду важно понимать, куда осуждённый отправится после освобождения: наличие гарантированного места проживания, возможность трудоустройства, социальные связи с семьёй и детьми.
                </p>
                <div style={{ fontSize: '12.5px', color: 'var(--color-primary)', fontWeight: 600 }}>Подтверждение: гарантийное письмо работодателя, документы на жильё</div>
              </div>
            </div>
          </div>

          {/* 4. ПОВЕДЕНИЕ, ВЗЫСКАНИЯ И ПООЩРЕНИЯ */}
          <div style={{ marginTop: '56px', marginBottom: '48px' }}>
            <div style={{ maxWidth: '820px', marginBottom: '28px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Правовая позиция
              </div>
              <h3 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                Поведение, взыскания и поощрения: оценка в динамике
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Наличие взысканий в личном деле — не автоматический повод для отказа. Пленум Верховного Суда РФ № 8 прямо запрещает формальный подход при оценке дисциплинарной истории.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-gold)', padding: '28px' }}>
              <div className="grid grid-3" style={{ gap: '24px' }}>
                <div>
                  <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Старые и погашенные взыскания</h4>
                  <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    Взыскания, полученные в начале срока или более года назад, считаются снятыми или погашенными. Суд не вправе отказывать в УДО лишь на том основании, что нарушения когда-либо имели место.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Позитивная динамика</h4>
                  <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    Решающую роль играет поведение в предшествующий подаче ходатайства период: отсутствие свежих нарушений, получение благодарностей, снятие прежних взысканий мерами поощрения.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Оспаривание нарушений</h4>
                  <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    Если администрация искусственно наложила дисциплинарное взыскание перед наступлением срока УДО (ШИЗО, выговор), адвокат подаёт жалобу в прокуратуру и суд в отдельном порядке.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 5. ВОЗМЕЩЕНИЕ ВРЕДА И ОТНОШЕНИЕ К СОДЕЯННОМУ */}
          <div style={{ marginTop: '56px', marginBottom: '48px' }}>
            <div style={{ maxWidth: '820px', marginBottom: '28px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Материальная сторона
              </div>
              <h3 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                Возмещение вреда и отношение к приговору
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Наличие крупного невыплаченного гражданского иска или непризнание вины часто пугают родственников. Разъясняем реальные требования закона.
              </p>
            </div>

            <div className="grid grid-2" style={{ gap: '24px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '24px' }}>
                <h4 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>
                  Частичное возмещение вреда допустимо
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: '0 0 12px 0' }}>
                  Закон требует возмещения вреда в размере, определённом приговором суда, либо <strong>принятия мер к возмещению</strong> в меру реальных возможностей. Если зарплата в колонии составляет 5 000–10 000 ₽, осуждённый объективно не может быстро закрыть миллионный иск.
                </p>
                <div style={{ background: '#F8FAFC', padding: '12px 16px', borderLeft: '3px solid var(--color-primary)', fontSize: '13px', color: 'var(--color-text-secondary)' }}>
                  Суду важно доказать: удержания производились регулярно, осуждённый не отказывался от работы, а после освобождения имеет гарантии заработка для продолжения выплат.
                </div>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '24px' }}>
                <h4 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>
                  Непризнание вины не исключает УДО
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: '0 0 12px 0' }}>
                  Конституционный Суд РФ неоднократно разъяснял: непризнание осуждённым вины в совершённом преступлении не может служить законным основанием для отказа в условно-досрочном освобождении.
                </p>
                <div style={{ background: '#F8FAFC', padding: '12px 16px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)' }}>
                  Суд в стадии исполнения приговора не вправе проверять обоснованность осуждения. Оценивается только соблюдение режима и исправление в период отбывания наказания.
                </div>
              </div>
            </div>
          </div>

          {/* 6. ПОРЯДОК ОБРАЩЕНИЯ И РАССМОТРЕНИЯ */}
          <div style={{ marginTop: '56px', marginBottom: '48px' }}>
            <div style={{ maxWidth: '820px', marginBottom: '28px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Процессуальный регламент
              </div>
              <h3 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                Порядок подачи ходатайства и рассмотрения в суде
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Вопрос об УДО разрешает районный (городской) суд <strong>по месту нахождения исправительного учреждения</strong>, независимо от того, какой суд вынес исходный приговор.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '20px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '22px 18px' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', marginBottom: '6px' }}>ЭТАП 01</div>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Расчёт срока обращения</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Проверяем точные даты наступления права с учётом зачётов времени под стражей, апелляций и кассационных пересмотров.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '22px 18px' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', marginBottom: '6px' }}>ЭТАП 02</div>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Сбор документов с воли</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Запрашиваем гарантийные письма работодателей, подтверждения наличия жилья, справки о семье, иждивенцах и здоровье близких.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '22px 18px' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', marginBottom: '6px' }}>ЭТАП 03</div>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Подготовка ходатайства</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Составляем мотивированное ходатайство, где каждый аргумент подтверждён официальным документом и практикой Верховного Суда РФ.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '22px 18px' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', marginBottom: '6px' }}>ЭТАП 04</div>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Подача через спецотдел</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Ходатайство направляется осуждённым через спецчасть колонии либо адвокатом напрямую в суд по месту отбывания наказания.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '22px 18px' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', marginBottom: '6px' }}>ЭТАП 05</div>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Участие в заседании</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Адвокат лично участвует в судебном заседании, обосновывает позицию, парирует доводы прокурора и представителя учреждения.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '22px 18px' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', marginBottom: '6px' }}>ЭТАП 06</div>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Вступление в силу</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Постановление суда вступает в силу по истечении 15 суток, если не обжаловано прокурором, после чего осуждённый освобождается.
                </p>
              </div>
            </div>
          </div>

          {/* 7. ДОКУМЕНТЫ ДЛЯ ОЦЕНКИ И СУДА */}
          <div style={{ marginTop: '56px', marginBottom: '48px' }}>
            <div style={{ maxWidth: '820px', marginBottom: '28px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Доказательственная база
              </div>
              <h3 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                Перечень документов для оценки перспектив и суда
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Успех ходатайства зависит от качества доказательств. Документы собираются параллельно: частью из личного дела в колонии, частью — родственниками и адвокатом на свободе.
              </p>
            </div>

            <div className="grid grid-2" style={{ gap: '20px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '24px' }}>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 12px 0', borderBottom: '1px solid var(--color-border)', paddingBottom: '8px' }}>
                  Обязательный процессуальный минимум
                </h4>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  <li>Копия вступившего в силу приговора суда (с отметкой о вступлении).</li>
                  <li>Апелляционные, кассационные и надзорные постановления (если приговор изменялся).</li>
                  <li>Справка об отбытом сроке наказания и зачётах времени содержания в СИЗО.</li>
                  <li>Постановление суда об отказе в УДО (если ранее подавалось ходатайство).</li>
                </ul>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '24px' }}>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 12px 0', borderBottom: '1px solid var(--color-border)', paddingBottom: '8px' }}>
                  Материалы из исправительного учреждения
                </h4>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  <li>Характеристика администрации учреждения на осуждённого.</li>
                  <li>Справка о наличии поощрений и взысканий за весь период отбывания.</li>
                  <li>Справка о трудовой деятельности, освоенных специальностях и табелях выходов.</li>
                  <li>Заключение психологической службы и участие в воспитательных программах.</li>
                </ul>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '24px' }}>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 12px 0', borderBottom: '1px solid var(--color-border)', paddingBottom: '8px' }}>
                  Документы о возмещении вреда
                </h4>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  <li>Справка бухгалтерии колонии о суммах удержаний по исполнительному листу.</li>
                  <li>Квитанции почтовых и банковских переводов потерпевшим от родственников.</li>
                  <li>Справка о размере начисляемой заработной платы в учреждении.</li>
                  <li>Письменная позиция потерпевшего либо мировое соглашение (при наличии).</li>
                </ul>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '24px' }}>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 12px 0', borderBottom: '1px solid var(--color-border)', paddingBottom: '8px' }}>
                  Социальные гарантии с воли
                </h4>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  <li>Гарантийное письмо работодателя с обязательством трудоустройства и окладом.</li>
                  <li>Выписка из ЕГРН на жильё, согласие собственника на проживание и регистрацию.</li>
                  <li>Свидетельства о рождении несовершеннолетних детей, свидетельство о браке.</li>
                  <li>Медицинские документы о заболеваниях осуждённого либо престарелых родителей.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 8. УДО, СТАТЬЯ 80 УК РФ ИЛИ ОБЖАЛОВАНИЕ ОТКАЗА */}
          <div style={{ marginTop: '56px', marginBottom: '48px' }}>
            <div style={{ maxWidth: '820px', marginBottom: '28px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Стратегия защиты
              </div>
              <h3 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                УДО, статья 80 УК РФ или обжалование отказа
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Если срок для УДО ещё не подошёл или позиция администрации колонии негативна, выбираем наиболее надёжный процессуальный маршрут.
              </p>
            </div>

            <div className="grid grid-4" style={{ gap: '18px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-primary)', padding: '20px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>УДО (ст. 79 УК РФ)</h4>
                  <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    Полное освобождение от дальнейшего отбывания наказания. Подходит, когда наступил срок и собраны доказательства исправления.
                  </p>
                </div>
                <div style={{ marginTop: '14px', fontSize: '12px', fontWeight: 600, color: 'var(--color-primary)' }}>Основной маршрут</div>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-primary)', padding: '20px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Замена (ст. 80 УК РФ)</h4>
                  <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    Замена лишения свободы на принудительные работы (ПТР), исправительные работы или штраф. Часто доступна раньше УДО.
                  </p>
                </div>
                <div style={{ marginTop: '14px', fontSize: '12px', fontWeight: 600, color: 'var(--color-primary)' }}>Альтернатива УДО</div>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-gold)', padding: '20px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Обжалование отказа</h4>
                  <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    Апелляционная жалоба в областной суд в течение 15 суток при формальном подходе, ссылке на тяжесть преступления или процессуальных ошибках.
                  </p>
                </div>
                <div style={{ marginTop: '14px', fontSize: '12px', fontWeight: 600, color: 'var(--color-gold)' }}>Срок — 15 суток</div>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-deep-blue)', padding: '20px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Повторное обращение</h4>
                  <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    Подача нового ходатайства через 6 месяцев после отказа суда первой инстанции с устранением всех указанных недостатков.
                  </p>
                </div>
                <div style={{ marginTop: '14px', fontSize: '12px', fontWeight: 600, color: 'var(--color-deep-blue)' }}>Через 6 месяцев</div>
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
                Укажите учреждение, статью приговора, назначенный срок, фактически отбытую часть и наличие непогашенных взысканий для оценки перспективы обращения. Обращение передадим Аркадию Евгеньевичу Бобкину для первичного правового анализа.
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
                commentPlaceholder="Учреждение, статья приговора, назначенный срок, фактически отбыто, взыскания..."
                hiddenFields={[
                  { name: 'source_page', value: 'https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/uslovno-dosrochnoe-osvobozhdenie/' },
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
