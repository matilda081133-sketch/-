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

export default function ObzhalovaniePrigovoraClient() {
  const situations = [
  {
    "tag": "Срок 15 суток",
    "title": "Приговор только что вынесен (апелляционная стадия)",
    "desc": "Срочная подача апелляционной жалобы, истребование протокола и аудиозаписи судебного процесса."
  },
  {
    "tag": "Сплошная кассация",
    "title": "Приговор вступил в силу менее 6 месяцев назад",
    "desc": "Подача кассационной жалобы в кассационный суд с гарантированным рассмотрением в судебном заседании."
  },
  {
    "tag": "Выборочная кассация",
    "title": "Прошло более 6 месяцев со дня вступления приговора",
    "desc": "Подача жалобы по правилам выборочной кассации судье кассационного суда или в Верховный Суд РФ."
  },
  {
    "tag": "Суровое наказание",
    "title": "Несоразмерно строгое наказание без учёта смягчающих",
    "desc": "Доказывание неприменения судом обязательных положений ст. 61, 62, 64 или 73 УК РФ (условное осуждение)."
  },
  {
    "tag": "Нарушения УПК РФ",
    "title": "Существенные процессуальные нарушения в суде",
    "desc": "Нарушение тайны совещательной комнаты, права на защиту, непредоставление последнего слова или необоснованный отказ в допросе свидетелей."
  },
  {
    "tag": "Ошибочная квалификация",
    "title": "Неверная квалификация действий судом",
    "desc": "Переквалификация обвинения на менее тяжкую статью УК РФ со снижением срока наказания."
  }
];
  const casesData: CaseData[] = [
  {
    "category": "Апелляция (ст. 389 УПК)",
    "title": "Снижение срока наказания в Липецком областном суде на 2 года",
    "problem": "Районный суд назначил 6 лет строгого режима по ч. 4 ст. 159 УК РФ без учёта добровольного частичного возмещения ущерба.",
    "action": "Подали апелляционную жалобу, доказали факт возмещения до приговора и неприменение судом п. «к» ч. 1 ст. 61 УК РФ.",
    "result": "Областной суд изменил приговор, применил смягчающие обстоятельства и снизил наказание до 4 лет."
  },
  {
    "category": "Кассация (ст. 401 УПК)",
    "title": "Отмена приговора Первым кассационным судом и замена на условный срок",
    "problem": "Осужденный отбывал реальное лишение свободы по ст. 228 ч. 2 УК РФ при наличии тяжелых заболеваний.",
    "action": "Подготовили кассационную жалобу с медицинскими экспертизами и доказали невозможность отбывания наказания в ИК.",
    "result": "Кассационный суд отменил реальный срок и назначил условное осуждение с применением ст. 73 УК РФ."
  },
  {
    "category": "Апелляция (ст. 389 УПК)",
    "title": "Отмена приговора из-за нарушения права на последнее слово",
    "problem": "Судья первой инстанции удалил подсудимого из зала и не предоставил права выступить с последним словом.",
    "action": "Зафиксировали существенное нарушение ст. 293 УПК РФ по аудиозаписи и заявили о безусловной отмене судебного акта.",
    "result": "Приговор отменен полностью, дело направлено на новое судебное разбирательство в ином составе суда."
  }
];
  const processSteps: ProcessStep[] = [
    {
      num: '01',
      title: 'Фиксируем дату и статус',
      desc: 'Устанавливаем точную дату провозглашения приговора или вручения копии, меру пресечения, статус заявителя и историю обжалования.'
    },
    {
      num: '02',
      title: 'Проверяем срок и инстанцию',
      desc: 'Определяем доступную инстанцию (апелляция, сплошная или выборочная кассация), контролируем процессуальный срок и порядок подачи.'
    },
    {
      num: '03',
      title: 'Истребуем судебные акты',
      desc: 'Получаем обязательный минимум материалов: приговор, апелляционные и кассационные определения, протокол заседания и аудиозапись.'
    },
    {
      num: '04',
      title: 'Согласуем состав и стоимость',
      desc: 'Фиксируем объём изучения томов дела, задачи, командировки, участие в судебных заседаниях и цену до начала работы.'
    },
    {
      num: '05',
      title: 'Формируем карту нарушений',
      desc: 'Сопоставляем выводы приговора с протоколами, аудиозаписью и доказательствами; выявляем существенные нарушения УПК и УК РФ.'
    },
    {
      num: '06',
      title: 'Готовим жалобу и возражения',
      desc: 'Составляем мотивированную апелляционную или кассационную жалобу, дополнения, ходатайства либо возражения на жалобу обвинения.'
    },
    {
      num: '07',
      title: 'Защищаем позицию в суде',
      desc: 'Адвокат лично участвует в судебном заседании вышестоящего суда, обосновывает нарушения и отвечает на вопросы коллегии судей.'
    },
    {
      num: '08',
      title: 'Анализируем решение суда',
      desc: 'Оцениваем принятый судебный акт, разъясняем порядок исполнения решения либо готовим обжалование в следующей инстанции.'
    }
  ];
  const pricingTiers: PricingTier[] = [
  {
    "title": "Аудит приговора и материалов дела",
    "subtitle": "Оценка оснований для обжалования",
    "price": "от 15 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "детальный анализ текста приговора суда",
        "value": "Да"
      },
      {
        "name": "сопоставление с материалами дела",
        "value": "Да"
      },
      {
        "name": "правовое заключение о шансах в апелляции/кассации",
        "value": "Да"
      }
    ],
    "buttonText": "Заказать аудит",
    "buttonHref": "#form"
  },
  {
    "title": "Ведение апелляционного обжалования",
    "subtitle": "Жалоба и защита в областном суде",
    "price": "от 50 000 ₽",
    "popular": true,
    "badgeText": "Востребовано",
    "features": [
      {
        "name": "подача предварительной и мотивированной жалобы",
        "value": "Да"
      },
      {
        "name": "изучение протокола и аудиозаписи заседаний",
        "value": "Да"
      },
      {
        "name": "посещение осужденного в СИЗО",
        "value": "Да"
      },
      {
        "name": "участие в заседании суда апелляционной инстанции",
        "value": "Да"
      }
    ],
    "buttonText": "Выбрать тариф",
    "buttonHref": "#form"
  },
  {
    "title": "Ведение кассационного обжалования",
    "subtitle": "Жалоба в Первый кассационный суд (Саратов)",
    "price": "от 55 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "составление кассационной жалобы со ссылками на ВС РФ",
        "value": "Да"
      },
      {
        "name": "истребование необходимых заверенных судебных актов",
        "value": "Да"
      },
      {
        "name": "участие в заседании кассационного суда",
        "value": "Да"
      }
    ],
    "buttonText": "Обсудить жалобу",
    "buttonHref": "#form"
  }
];
  const relatedLinks = [
  {
    "title": "Условно-досрочное освобождение (УДО)",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/uslovno-dosrochnoe-osvobozhdenie/"
  },
  {
    "title": "Защита прав потерпевшего",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/zashchita-poterpevshego/"
  },
  {
    "title": "Адвокат по уголовным делам (главный раздел)",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/"
  }
];
  const faqItems = [
  {
    "q": "Что делать, если 15-дневный срок апелляции пропущен?",
    "a": "Если срок пропущен по уважительной причине (болезнь, позднее вручение копии приговора), адвокат подает ходатайство о восстановлении пропущенного срока (ст. 389.5 УПК РФ). Если срок не восстановлен, подается кассационная жалоба."
  },
  {
    "q": "Может ли апелляционный суд ужесточить наказание?",
    "a": "Апелляционный суд может ужесточить наказание или отменить оправдательный приговор только в том случае, если по этим основаниям подано апелляционное представление прокурора или жалоба потерпевшего."
  },
  {
    "q": "Чем сплошная кассация отличается от выборочной?",
    "a": "В сплошной кассации (в течение 6 месяцев) жалоба обязательно рассматривается в судебном заседании кассационного суда с участием адвоката. В выборочной — судья единолично решает, передавать ли дело на рассмотрение."
  },
  {
    "q": "Можно ли привлечь нового адвоката только на стадию обжалования?",
    "a": "Да, доверитель или его родственники имеют законное право заключить соглашение с новым адвокатом на любой стадии. Свежий взгляд часто позволяет обнаружить ошибки, пропущенные прежним защитником."
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
        "@id": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/obzhalovanie-prigovora/#breadcrumbs",
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
            "name": "Обжалование приговора",
            "item": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/obzhalovanie-prigovora/"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/obzhalovanie-prigovora/#service",
        "name": "Обжалование приговора в Липецке",
        "description": "Проанализируем приговор суда, протокол судебного заседания и материалы уголовного дела. Выявим существенные нарушения норм УПК и УК РФ, подготовим мотивированную апелляционную или кассационную жалобу и добьёмся отмены или смягчения наказания.",
        "url": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/obzhalovanie-prigovora/",
        "provider": { "@id": "https://dejure-help.ru/#organization" },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Липецк и Липецкая область"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/obzhalovanie-prigovora/#faq",
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
            <span style={{ color: 'var(--color-text-main)' }}>Обжалование приговора</span>
          </>
        }
        superTitle="Апелляция и кассация по уголовным делам • Липецк"
        title={
          <span style={{ display: 'block', maxWidth: '100%' }}>
            <span style={{ display: 'block' }}>Обжалование приговора</span>
            <span style={{ display: 'block' }}>по уголовному делу</span>
            <span style={{ display: 'block' }}>в Липецке</span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Изучим приговор и материалы дела, определим доступную инстанцию и проверим, какие нарушения могли повлиять на вывод о виновности, квалификацию или наказание. Подготовим жалобу, возражения и представим позицию в суде.
          </span>
        }
        primaryCtaText="Обсудить ситуацию с адвокатом"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_cta_obzhalovanie_prigovora"
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

          {/* ═══ СОДЕРЖАТЕЛЬНЫЕ РАЗДЕЛЫ ПО ОБЖАЛОВАНИЮ ПРИГОВОРА ═══ */}

          {/* 1. БЫСТРЫЙ МАРШРУТИЗАТОР ПО СТАДИЯМ И ИНСТАНЦИЯМ */}
          <div style={{ marginTop: '56px', marginBottom: '48px' }}>
            <div style={{ maxWidth: '820px', marginBottom: '28px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Процессуальная маршрутизация
              </div>
              <h3 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                Какой порядок обжалования подходит вашей ситуации
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Выбор судебной инстанции и порядка подачи жалобы зависит от даты вынесения приговора, факта вступления в законную силу и предыдущей истории рассмотрения.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '20px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-primary)', padding: '24px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>Срок — 15 суток</span>
                  <h4 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>Приговор вынесен недавно</h4>
                  <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    Приговор ещё не вступил в законную силу. Подаётся апелляционная жалоба в Липецкий областной суд (через районный суд, вынесший приговор).
                  </p>
                </div>
                <div style={{ marginTop: '14px', fontSize: '12.5px', fontWeight: 600, color: 'var(--color-primary)' }}>Маршрут: Апелляция</div>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-primary)', padding: '24px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>Осуждённый в СИЗО</span>
                  <h4 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>Вручение копии под стражей</h4>
                  <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    Для лица под стражей 15-суточный срок апелляции исчисляется <strong>со дня фактического вручения</strong> ему копии приговора под расписку.
                  </p>
                </div>
                <div style={{ marginTop: '14px', fontSize: '12.5px', fontWeight: 600, color: 'var(--color-primary)' }}>Маршрут: Спецсрок апелляции</div>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-gold)', padding: '24px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>Пропуск срока</span>
                  <h4 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>15 суток прошли по уважительной причине</h4>
                  <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    Подаём ходатайство о восстановлении пропущенного срока судье первой инстанции с подтверждением причин (болезнь, задержка выдачи приговора).
                  </p>
                </div>
                <div style={{ marginTop: '14px', fontSize: '12.5px', fontWeight: 600, color: 'var(--color-gold)' }}>Маршрут: Восстановление срока</div>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-primary)', padding: '24px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>Вступил в силу (до 6 мес)</span>
                  <h4 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>Апелляция уже прошла</h4>
                  <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    Подаётся жалоба по правилам сплошной кассации в Первый кассационный суд общей юрисдикции (Саратов) с обязательным открытым заседанием.
                  </p>
                </div>
                <div style={{ marginTop: '14px', fontSize: '12.5px', fontWeight: 600, color: 'var(--color-primary)' }}>Маршрут: Сплошная кассация</div>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-deep-blue)', padding: '24px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>Прошло более 6 месяцев</span>
                  <h4 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>Шестимесячный срок пропущен</h4>
                  <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    Подача жалобы по процедуре выборочной кассации судье кассационного суда либо непосредственно председателю Верховного Суда РФ.
                  </p>
                </div>
                <div style={{ marginTop: '14px', fontSize: '12.5px', fontWeight: 600, color: 'var(--color-deep-blue)' }}>Маршрут: Выборочная кассация</div>
              </div>

              <div style={{ background: 'var(--gradient-cream)', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-gold)', padding: '24px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>Риск ухудшения</span>
                  <h4 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>Жалоба прокурора или потерпевшего</h4>
                  <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    Обвинение требует отменить мягкий приговор или увеличить срок. Готовим письменные возражения и защищаем приговор в суде.
                  </p>
                </div>
                <a href="#form" className="btn btn-primary" style={{ marginTop: '16px', textAlign: 'center', padding: '10px 16px', fontSize: '13px' }}>Подготовить возражения</a>
              </div>
            </div>
          </div>

          {/* 2. ЧТО ПРОВЕРЯЕТ АДВОКАТ ПРИ АНАЛИЗЕ ПРИГОВОРА */}
          <div style={{ marginTop: '56px', marginBottom: '48px' }}>
            <div style={{ maxWidth: '820px', marginBottom: '28px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Аудит материалов дела
              </div>
              <h3 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                Что проверяет адвокат при изучении судебных актов
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Эффективная жалоба строится не на общих фразах о несогласии, а на выявлении конкретных противоречий и нарушений закона, допущенных следствием и судом первой инстанции.
              </p>
            </div>

            <div className="grid grid-2" style={{ gap: '20px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '22px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <div style={{ width: '8px', height: '8px', background: 'var(--color-primary)', borderRadius: '50%' }}></div>
                  <h4 style={{ margin: 0, fontSize: '16px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)' }}>Соответствие выводов суда доказательствам</h4>
                </div>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Проверяем, не содержат ли выводы приговора существенных противоречий, учтены ли доказательства защиты и не истолкованы ли неустранимые сомнения во вред осуждённому.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '22px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <div style={{ width: '8px', height: '8px', background: 'var(--color-primary)', borderRadius: '50%' }}></div>
                  <h4 style={{ margin: 0, fontSize: '16px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)' }}>Допустимость положенных в основу доказательств</h4>
                </div>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Проверяем соблюдение порядка проведения ОРД, обысков, выемок, экспертиз и допросов. Доказательства, полученные с нарушением закона (ст. 75 УПК РФ), подлежат исключению.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '22px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <div style={{ width: '8px', height: '8px', background: 'var(--color-gold)', borderRadius: '50%' }}></div>
                  <h4 style={{ margin: 0, fontSize: '16px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)' }}>Соблюдение фундаментальных прав на защиту</h4>
                </div>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Исследуем законность состава суда, тайну совещательной комнаты, непредоставление последнего слова, отказ в вызове свидетелей и сопоставляем протокол с аудиозаписью процесса.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '22px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <div style={{ width: '8px', height: '8px', background: 'var(--color-gold)', borderRadius: '50%' }}></div>
                  <h4 style={{ margin: 0, fontSize: '16px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)' }}>Квалификация деяния и справедливость срока</h4>
                </div>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Оцениваем правильность применения статей УК РФ, учёт смягчающих обстоятельств (ст. 61 УК РФ), возможность назначения наказания ниже низшего предела (ст. 64 УК РФ) или условного осуждения (ст. 73 УК РФ).
                </p>
              </div>
            </div>
          </div>

          {/* 3. ОСНОВАНИЯ ДЛЯ ОТМЕНЫ ИЛИ ИЗМЕНЕНИЯ ПРИГОВОРА */}
          <div style={{ marginTop: '56px', marginBottom: '48px' }}>
            <div style={{ maxWidth: '820px', marginBottom: '28px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Законные критерии (ст. 389.15, 401.15 УПК РФ)
              </div>
              <h3 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                4 законных основания для отмены или изменения приговора
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Вышестоящий суд отменяет либо изменяет приговор исключительно по основаниям, прямо закреплённым в уголовно-процессуальном законе.
              </p>
            </div>

            <div className="grid grid-4" style={{ gap: '18px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-primary)', padding: '20px 16px' }}>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Фактические выводы</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Выводы суда первой инстанции не подтверждаются исследованными доказательствами либо содержат существенные противоречия.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-primary)', padding: '20px 16px' }}>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Нарушения УПК РФ</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Нарушение права на защиту, правил доказывания, отказ в предоставлении переводчика или нарушение процедуры прений сторон.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-gold)', padding: '20px 16px' }}>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Неверная статья</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Ошибочная квалификация действий (например, вменение сбыта наркотиков вместо хранения, либо мошенничества вместо гражданского спора).
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-deep-blue)', padding: '20px 16px' }}>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Несправедливый срок</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Чрезмерная суровость назначенного наказания вследствие неприменения обязательных смягчающих норм или положений о рецидиве.
                </p>
              </div>
            </div>
          </div>

          {/* 4. АПЕЛЛЯЦИЯ И КАССАЦИЯ: КЛЮЧЕВЫЕ РАЗЛИЧИЯ */}
          <div style={{ marginTop: '56px', marginBottom: '48px' }}>
            <div style={{ maxWidth: '820px', marginBottom: '28px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Сравнительный анализ
              </div>
              <h3 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                Апелляция и кассация: ключевые различия процедур
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Апелляция и кассация преследуют разные процессуальные цели. Понимание их различий определяет структуру жалобы и характер заявляемых ходатайств.
              </p>
            </div>

            <div className="grid grid-2" style={{ gap: '24px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-primary)', padding: '24px' }}>
                <h4 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0' }}>
                  Апелляционная инстанция (ст. 389.1–389.36 УПК РФ)
                </h4>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  <li><strong>Статус акта:</strong> Приговор ещё НЕ вступил в законную силу.</li>
                  <li><strong>Срок подачи:</strong> 15 суток со дня провозглашения (или вручения копии осуждённому в СИЗО).</li>
                  <li><strong>Предмет проверки:</strong> Полная проверка законности, обоснованности и справедливости приговора.</li>
                  <li><strong>Доказательства:</strong> Возможно непосредственное исследование доказательств и допрос свидетелей.</li>
                  <li><strong>Куда подаётся:</strong> Через суд первой инстанции в апелляционную инстанцию (Липецкий областной суд).</li>
                </ul>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-gold)', padding: '24px' }}>
                <h4 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0' }}>
                  Кассационная инстанция (ст. 401.1–401.17 УПК РФ)
                </h4>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  <li><strong>Статус акта:</strong> Приговор УЖЕ вступил в законную силу после апелляции.</li>
                  <li><strong>Срок подачи:</strong> 6 месяцев для сплошной кассации; далее — правила выборочной кассации.</li>
                  <li><strong>Предмет проверки:</strong> Исключительно существенные нарушения материального или процессуального права.</li>
                  <li><strong>Доказательства:</strong> Суд не переоценивает факты дела заново; проверяется только строгое соблюдение закона.</li>
                  <li><strong>Куда подаётся:</strong> В Первый кассационный суд общей юрисдикции (г. Саратов) либо Верховный Суд РФ.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 5. ДОКУМЕНТЫ ДЛЯ ПЕРВИЧНОЙ ОЦЕНКИ */}
          <div style={{ marginTop: '56px', marginBottom: '48px' }}>
            <div style={{ maxWidth: '820px', marginBottom: '28px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Доказательства и материалы
              </div>
              <h3 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                Документы, необходимые для подготовки жалобы
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Для первичной экспресс-оценки достаточно приговора. Для составления сильной мотивированной жалобы исследуется весь массив процесса.
              </p>
            </div>

            <div className="grid grid-2" style={{ gap: '20px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '22px' }}>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 10px 0', borderBottom: '1px solid var(--color-border)', paddingBottom: '8px' }}>
                  Обязательный минимум
                </h4>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                  <li>Копия обжалуемого приговора районного (городского) суда.</li>
                  <li>Апелляционное определение (при обращении в кассационную инстанцию).</li>
                  <li>Справка о дате провозглашения приговора либо расписка о вручении копии в СИЗО.</li>
                </ul>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '22px' }}>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 10px 0', borderBottom: '1px solid var(--color-border)', paddingBottom: '8px' }}>
                  Материалы судебного процесса
                </h4>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                  <li>Протокол судебного заседания первой инстанции и аудиозапись процесса.</li>
                  <li>Письменные ходатайства стороны защиты, отклонённые судьёй.</li>
                  <li>Текст речи защитника в прениях и последнее слово подсудимого.</li>
                </ul>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '22px' }}>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 10px 0', borderBottom: '1px solid var(--color-border)', paddingBottom: '8px' }}>
                  Доказательственная база обвинения
                </h4>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                  <li>Ключевые заключения судебно-медицинских, почерковедческих или иных экспертиз.</li>
                  <li>Протоколы следственных действий (осмотра места происшествия, выемки, обыска).</li>
                  <li>Сведения об оперативно-розыскных мероприятиях (ОРД) при их наличии в деле.</li>
                </ul>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '22px' }}>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 10px 0', borderBottom: '1px solid var(--color-border)', paddingBottom: '8px' }}>
                  Предыдущие обращения и ответы
                </h4>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                  <li>Первоначальная апелляционная или кассационная жалоба назначенного адвоката.</li>
                  <li>Апелляционное или кассационное представление прокурора (при наличии).</li>
                  <li>Жалобы потерпевших и возражения на них.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 6. ВОЗМОЖНЫЕ РЕЗУЛЬТАТЫ ОБЖАЛОВАНИЯ */}
          <div style={{ marginTop: '56px', marginBottom: '48px' }}>
            <div style={{ maxWidth: '820px', marginBottom: '28px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Полномочия инстанций
              </div>
              <h3 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                Возможные результаты рассмотрения жалобы в суде
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                В зависимости от характера допущенных нарушений вышестоящий суд наделён законом широкими полномочиями по пересмотру приговора.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '20px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', padding: '22px 18px' }}>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Смягчение наказания</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Снижение срока лишения свободы, замена реального срока на условный (ст. 73 УК РФ) либо изменение вида исправительного учреждения на более мягкий.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', padding: '22px 18px' }}>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Переквалификация</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Изменение статьи или части обвинения на менее тяжкую (например, исключение квалифицирующих признаков «группа лиц», «особо крупный размер»).
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', padding: '22px 18px' }}>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Новое рассмотрение</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Отмена приговора и возврат дела в суд первой инстанции в ином составе суда при грубых процессуальных нарушениях порядка разбирательства.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-gold)', padding: '22px 18px' }}>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Прекращение дела</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Полная отмена судебного акта с прекращением уголовного дела при отсутствии события или состава преступления либо за истечением сроков давности.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-gold)', padding: '22px 18px' }}>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Оправдательный приговор</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Вынесение апелляционной инстанцией нового оправдательного приговора с признанием права осуждённого на полную реабилитацию.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-deep-blue)', padding: '22px 18px' }}>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Защита приговора</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Отказ в удовлетворении представления прокурора или жалобы потерпевшего, требовавших ужесточения наказания или реального срока.
                </p>
              </div>
            </div>
          </div>

          {/* 7. ЗАЩИТА ОТ УХУДШЕНИЯ ПОЛОЖЕНИЯ */}
          <div style={{ marginTop: '56px', marginBottom: '48px' }}>
            <div style={{ maxWidth: '820px', marginBottom: '28px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Защита от риска
              </div>
              <h3 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                Возражения на жалобу обвинения: защита от ухудшения
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Если прокуратура или потерпевший подали апелляционное представление с требованием ужесточить приговор, пассивная позиция недопустима.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-gold)', padding: '28px' }}>
              <div className="grid grid-2" style={{ gap: '24px' }}>
                <div>
                  <h4 style={{ fontSize: '17px', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>
                    Пределы поворота к худшему
                  </h4>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    По общему правилу (ст. 389.24 УПК РФ) суд апелляционной инстанции вправе ухудшить положение осуждённого <strong>только по представлению прокурора либо жалобе потерпевшего</strong> и строго в пределах заявленных ими доводов. Если обжаловал только осуждённый, назначить более строгое наказание закон запрещает.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: '17px', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>
                    Подготовка мотивированных возражений
                  </h4>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    Адвокат готовит письменные возражения на доводы обвинения, доказывает соразмерность и законность вынесенного мягкого приговора и отстаивает неизменность судебного акта в судебном заседании.
                  </p>
                </div>
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
                Укажите суд, дату вынесения приговора, статью УК РФ, назначенное наказание и текущую процессуальную стадию (до или после вступления в силу). Обращение передадим Аркадию Евгеньевичу Бобкину для первичного правового анализа.
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
                commentPlaceholder="Суд первой инстанции, статья приговора, срок, дата вынесения, мера пресечения..."
                hiddenFields={[
                  { name: 'source_page', value: 'https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/obzhalovanie-prigovora/' },
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
