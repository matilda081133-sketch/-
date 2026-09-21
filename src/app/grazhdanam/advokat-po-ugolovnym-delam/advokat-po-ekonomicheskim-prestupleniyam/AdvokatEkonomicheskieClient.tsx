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
  const situations = [
  {
    "tag": "Налоги / ст. 199",
    "title": "Неуплата налогов и сборов организацией (ст. 199, 199.2 УК РФ)",
    "desc": "Защита при налоговых проверках, оспаривание необоснованной налоговой выгоды и разрыв связей с «техническими» фирмами."
  },
  {
    "tag": "Растрата / ст. 160",
    "title": "Присвоение или растрата вверенного имущества (ст. 160 УК РФ)",
    "desc": "Разграничение служебных расходов, премий, списаний и корыстного хищения активов предприятия."
  },
  {
    "tag": "Полномочия / ст. 201",
    "title": "Злоупотребление полномочиями руководителем (ст. 201 УК РФ)",
    "desc": "Защита при корпоративных конфликтах между акционерами, доказывание экономической обоснованности решений."
  },
  {
    "tag": "Банкротство / ст. 195",
    "title": "Неправомерные действия при банкротстве (ст. 195–197 УК РФ)",
    "desc": "Оценка сделок по отчуждению активов, преднамеренного и фиктивного банкротства при спорах с кредиторами."
  },
  {
    "tag": "Обыск / Изъятие",
    "title": "Обыск в офисе, выемка серверов и первичной документации",
    "desc": "Срочный выезд адвоката для контроля законности изъятия носителей информации и пресечения остановки бизнеса."
  },
  {
    "tag": "ОБЭП / Запросы",
    "title": "Поступление запросов и требований о предоставлении документов",
    "desc": "Правовой аудит запросов полиции, предоставление безопасного объема документов без риска возбуждения дела."
  }
];
  const casesData: CaseData[] = [
  {
    "category": "ст. 199 ч. 2 УК РФ",
    "title": "Прекращение уголовного дела об уклонении от уплаты налогов на 48 млн ₽",
    "problem": "Следственный комитет возбудил уголовное дело против директора производственного предприятия за работу с контрагентами.",
    "action": "Параллельно обжаловали решение ФНС в арбитражном суде, доказали реальность поставки сырья и провели независимый аудит.",
    "result": "Арбитражный суд признал решение ФНС незаконным, уголовное дело прекращено за отсутствием состава преступления."
  },
  {
    "category": "ст. 160 ч. 4 УК РФ",
    "title": "Отказ в возбуждении дела о растрате активов предприятия",
    "problem": "Учредитель компании написал заявление на генерального директора, обвинив его в продаже техники по заниженной стоимости.",
    "action": "Предоставили отчет независимого оценщика об износе оборудования и протоколы заседаний совета директоров.",
    "result": "Следствие вынесло постановление об отказе в возбуждении дела ввиду отсутствия признаков хищения."
  },
  {
    "category": "ст. 201 УК РФ",
    "title": "Переквалификация и прекращение уголовного дела в суде",
    "problem": "Топ-менеджеру банка вменялось злоупотребление полномочиями при выдаче необеспеченных кредитов.",
    "action": "Доказали соблюдение внутренних регламентов банка при проверке заемщиков и отсутствие личной корыстной выгоды.",
    "result": "Обвинение снято, подсудимый полностью реабилитирован."
  }
];
  const processSteps: ProcessStep[] = [
  {
    "num": "01",
    "title": "Аудит хозяйственных операций",
    "desc": "Изучаем договоры, акты, товарные накладные, выписки по счетам и переписку с контрагентами."
  },
  {
    "num": "02",
    "title": "Судебно-бухгалтерская экспертиза",
    "desc": "Привлекаем профильных аудиторов для опровержения расчетов следователя и налоговых инспекторов."
  },
  {
    "num": "03",
    "title": "Защита при следственных действиях",
    "desc": "Адвокат сопровождает выемки, допросы сотрудников и руководителей, контролируя каждый вопрос."
  },
  {
    "num": "04",
    "title": "Снятие арестов и прекращение дела",
    "desc": "Добиваемся снятия обеспечительных арестов с расчетных счетов и прекращения уголовного преследования."
  }
];
  const pricingTiers: PricingTier[] = [
  {
    "title": "Правовой аудит рисков бизнеса",
    "subtitle": "Анализ запросов ОБЭП/ФНС и первичных документов",
    "price": "от 20 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "анализ обоснованности требований и запросов",
        "value": "Да"
      },
      {
        "name": "оценка рисков по экономическим составам",
        "value": "Да"
      },
      {
        "name": "подготовка безопасных ответов на запросы",
        "value": "Да"
      }
    ],
    "buttonText": "Заказать аудит",
    "buttonHref": "#form"
  },
  {
    "title": "Сопровождение налоговой/полицейской проверки",
    "subtitle": "Защита компании при доследственной проверке",
    "price": "от 50 000 ₽",
    "popular": true,
    "badgeText": "Востребовано",
    "features": [
      {
        "name": "выезд адвоката на опросы руководителей и бухгалтеров",
        "value": "Да"
      },
      {
        "name": "присутствие при обследовании помещений и выемках",
        "value": "Да"
      },
      {
        "name": "подготовка контррасчетов и доказательств",
        "value": "Да"
      },
      {
        "name": "предотвращение возбуждения уголовного дела",
        "value": "Да"
      }
    ],
    "buttonText": "Пригласить адвоката",
    "buttonHref": "#form"
  },
  {
    "title": "Комплексная защита руководства по уголовному делу",
    "subtitle": "Предварительное следствие и защита в суде",
    "price": "от 80 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "полная защита директора и бухгалтера",
        "value": "Да"
      },
      {
        "name": "назначение независимых экономических экспертиз",
        "value": "Да"
      },
      {
        "name": "снятие ареста со счетов и имущества компании",
        "value": "Да"
      }
    ],
    "buttonText": "Обсудить проект",
    "buttonHref": "#form"
  }
];
  const relatedLinks = [
  {
    "title": "Уголовно-правовая защита бизнеса",
    "link": "/biznesu/ugolovno-pravovaya-zashchita-biznesa/"
  },
  {
    "title": "Должностные преступления и взятки",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-dolzhnostnym-prestupleniyam-i-vzyatkam/"
  },
  {
    "title": "Адвокат по мошенничеству",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-moshennichestvu/"
  },
  {
    "title": "Задержание, обыск и допрос",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-pri-zaderzhanii-obyske-i-doprose/"
  }
];
  const faqItems = [
  {
    "q": "Могут ли арестовать директора по налоговой статье (ст. 199)?",
    "a": "По делам о преступлениях в сфере предпринимательской деятельности действует специальный запрет на заключение под стражу, установленный частью 1.1 статьи 108 УПК РФ. Если преступление связано с осуществлением предпринимательской или управленческой деятельности в коммерческой организации, следователь не вправе ходатайствовать об аресте при отсутствии исключительных обстоятельств. Защита незамедлительно представляет доказательства предпринимательского характера деятельности для избрания более мягкой меры пресечения (залог, домашний арест или запрет определенных действий)."
  },
  {
    "q": "Как прекратить уголовное дело по налогам без судимости?",
    "a": "В соответствии со ст. 28.1 УПК РФ и примечанием к ст. 199 УК РФ лицо впервые освобождается от уголовной ответственности, если до назначения судебного заседания полностью уплатило недоимку, пени и штрафы в бюджет."
  },
  {
    "q": "Что делать при внезапном обыске в офисе компании?",
    "a": "Немедленно вызывайте адвоката. До его прибытия потребуйте предъявить постановление, не отдавайте личные телефоны без отдельного процессуального оформления и требуйте внесения всех замечаний в протокол обыска."
  },
  {
    "q": "Обязана ли организация отвечать на все запросы ОБЭП?",
    "a": "Запросы полиции должны содержать ссылку на конкретный материал проверки или номер уголовного дела. Адвокат поможет проверить законность запроса и предоставить только те документы, которые не создадут дополнительных рисков."
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
        "@id": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-ekonomicheskim-prestupleniyam/#breadcrumbs",
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
            "name": "Экономические преступления",
            "item": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-ekonomicheskim-prestupleniyam/"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-ekonomicheskim-prestupleniyam/#service",
        "name": "Экономические преступления в Липецке",
        "description": "Защита генеральных директоров, учредителей, топ-менеджеров и главных бухгалтеров по уголовным делам в сфере экономики (ст. 159, 160, 199, 201 УК РФ). Докажем реальность хозяйственных операций и пресечем давление правоохранителей.",
        "url": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-ekonomicheskim-prestupleniyam/",
        "provider": { "@id": "https://dejure-help.ru/#organization" },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Липецк и Липецкая область"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-ekonomicheskim-prestupleniyam/#faq",
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
            <span style={{ color: 'var(--color-text-main)' }}>Экономические преступления</span>
          </>
        }
        superTitle="УГОЛОВНАЯ ЗАЩИТА РУКОВОДИТЕЛЕЙ И УЧАСТНИКОВ БИЗНЕСА • ЛИПЕЦК И ОБЛАСТЬ"
        title={
          <span style={{ display: 'block', maxWidth: '100%' }}>
            <span style={{ display: 'block' }}>Адвокат по экономическим</span>
            <span style={{ display: 'block' }}>преступлениям</span>
            <span style={{ display: 'block' }}>в Липецке</span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Защитим собственника, руководителя, бухгалтера или другого участника бизнеса при проверке, обыске, допросе, расследовании и в суде. Разберём документы, операции, деловую цель, полномочия и доказательства умысла.
          </span>
        }
        primaryCtaText="Обсудить ситуацию с адвокатом"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_cta_advokat_po_ekonomicheskim_prestupleniyam"
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

          {/* ═══ СОДЕРЖАТЕЛЬНЫЕ РАЗДЕЛЫ ПО ЭКОНОМИЧЕСКИМ ПРЕСТУПЛЕНИЯМ ═══ */}

          {/* Разграничение: Личная защита vs Защита бизнеса */}
          <div style={{ marginTop: '56px', marginBottom: '36px', background: '#F8FAFC', padding: '28px 26px', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-gold)' }}>
            <h4 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>
              Разграничение личной уголовной защиты и защиты компании
            </h4>
            <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
              На этой странице представлена <strong>личная уголовная защита</strong> конкретных физических лиц: собственников, генеральных директоров, главных бухгалтеров и топ-менеджеров при проверках, допросах, уголовном преследовании и в суде. Если ваша задача — комплексная защита самой организации, сохранение активов юридического лица, пресечение проверок контролирующих органов и сопровождение бизнеса в целом, перейдите в раздел{' '}
              <Link href="/biznesu/ugolovno-pravovaya-zashchita-biznesa/" style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                Уголовно-правовая защита бизнеса
              </Link>.
            </p>
          </div>

          {/* 1. Роль человека и стадия дела */}
          <div style={{ marginBottom: '48px' }}>
            <div style={{ maxWidth: '820px', marginBottom: '28px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Маршрутизатор
              </div>
              <h3 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                Роль человека и стадия дела
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Защита по экономическим делам требует разделения личного статуса должностного лица и корпоративных интересов предприятия.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '20px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-primary)', padding: '24px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>Руководство</span>
                  <h4 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>Собственник / Директор</h4>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    Проверка по операциям компании, контрагентам, кредитам, налогам или банкротству. Сохранение контроля, исключение ареста активов и персональная защита.
                  </p>
                </div>
                <a href="#form" className="btn btn-primary" style={{ marginTop: '16px', textAlign: 'center', padding: '10px 16px', fontSize: '13.5px' }}>Защитить руководителя</a>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-gold)', padding: '24px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>Финансы</span>
                  <h4 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>Главный бухгалтер</h4>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    Вызов на опрос или допрос в ОБЭП / СК по налоговым декларациям, первичным документам и платежам. Оценка личного риска и выработка безопасных показаний.
                  </p>
                </div>
                <a href="#form" className="btn btn-outline" style={{ marginTop: '16px', textAlign: 'center', padding: '10px 16px', fontSize: '13.5px' }}>Защита бухгалтера</a>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid #4A6B82', padding: '24px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>Полномочия</span>
                  <h4 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>Сотрудник / Подписант</h4>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    Подписывал документы по указанию руководства без понимания схемы. Доказывание отсутствия осведомленности и умысла на совершение преступления.
                  </p>
                </div>
                <a href="#form" className="btn btn-outline" style={{ marginTop: '16px', textAlign: 'center', padding: '10px 16px', fontSize: '13.5px' }}>Определить статус</a>
              </div>
            </div>
          </div>

          {/* 2. Какие экономические составы сопровождаем */}
          <div style={{ marginTop: '48px', marginBottom: '48px', background: 'var(--gradient-cream)', padding: '36px 32px', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-gold)' }}>
            <div style={{ maxWidth: '850px', marginBottom: '24px' }}>
              <h3 style={{ fontSize: 'clamp(22px, 2.8vw, 32px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 12px 0' }}>
                Какие экономические составы сопровождаем
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--color-deep-blue)', opacity: 0.95, margin: 0, lineHeight: 1.65 }}>
                Оказываем защиту по ключевым составам экономической направленности (главы 21, 22 и 23 УК РФ), привлекая при необходимости судебных бухгалтеров, налоговых юристов и финансовых аналитиков.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '18px' }}>
              <div style={{ background: '#FFFFFF', padding: '22px 18px', border: '1px solid rgba(0,0,0,0.06)' }}>
                <strong style={{ fontSize: '15.5px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '8px', fontFamily: 'var(--font-serif)' }}>
                  Налоговые преступления
                </strong>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: '0 0 8px 0' }}>
                  Ст. 198, 199, 199.1, 199.2 УК РФ: уклонение от уплаты налогов, сокрытие денежных средств от взыскания недоимки.
                </p>
                <span style={{ fontSize: '12.5px', color: 'var(--color-primary)', fontWeight: 600 }}>Защита: параллельный арбитражный процесс, ревизия решений ФНС.</span>
              </div>

              <div style={{ background: '#FFFFFF', padding: '22px 18px', border: '1px solid rgba(0,0,0,0.06)' }}>
                <strong style={{ fontSize: '15.5px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '8px', fontFamily: 'var(--font-serif)' }}>
                  Присвоение и растрата
                </strong>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: '0 0 8px 0' }}>
                  Ст. 160 УК РФ: обвинения генерального директора в хищении активов, выплате премий, продаже техники или списании имущества.
                </p>
                <span style={{ fontSize: '12.5px', color: 'var(--color-primary)', fontWeight: 600 }}>Защита: подтверждение деловой цели и рыночной стоимости.</span>
              </div>

              <div style={{ background: '#FFFFFF', padding: '22px 18px', border: '1px solid rgba(0,0,0,0.06)' }}>
                <strong style={{ fontSize: '15.5px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '8px', fontFamily: 'var(--font-serif)' }}>
                  Злоупотребление полномочиями
                </strong>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: '0 0 8px 0' }}>
                  Ст. 201 УК РФ: использование полномочий вопреки интересам коммерческой организации для извлечения выгод.
                </p>
                <span style={{ fontSize: '12.5px', color: 'var(--color-primary)', fontWeight: 600 }}>Защита: протоколы органов управления, экономический анализ сделки.</span>
              </div>

              <div style={{ background: '#FFFFFF', padding: '22px 18px', border: '1px solid rgba(0,0,0,0.06)' }}>
                <strong style={{ fontSize: '15.5px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '8px', fontFamily: 'var(--font-serif)' }}>
                  Банкротные составы
                </strong>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: '0 0 8px 0' }}>
                  Ст. 195, 196, 197 УК РФ: неправомерные действия при банкротстве, преднамеренное или фиктивное банкротство предприятия.
                </p>
                <span style={{ fontSize: '12.5px', color: 'var(--color-primary)', fontWeight: 600 }}>Защита: финансово-экономическая экспертиза платёжеспособности.</span>
              </div>

              <div style={{ background: '#FFFFFF', padding: '22px 18px', border: '1px solid rgba(0,0,0,0.06)' }}>
                <strong style={{ fontSize: '15.5px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '8px', fontFamily: 'var(--font-serif)' }}>
                  Финансовые и валютные составы
                </strong>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: '0 0 8px 0' }}>
                  Ст. 172, 174, 174.1, 193 УК РФ: незаконная банковская деятельность, легализация денежных средств, невозврат валюты.
                </p>
                <span style={{ fontSize: '12.5px', color: 'var(--color-primary)', fontWeight: 600 }}>Защита: происхождение активов, аудит банковских проводок.</span>
              </div>

              <div style={{ background: '#FFFFFF', padding: '22px 18px', border: '1px solid rgba(0,0,0,0.06)' }}>
                <strong style={{ fontSize: '15.5px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '8px', fontFamily: 'var(--font-serif)' }}>
                  Кредиты и субсидии
                </strong>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: '0 0 8px 0' }}>
                  Ст. 159.1, 176 УК РФ: незаконное получение кредита, предоставление ложных сведений о финансовом состоянии заемщика.
                </p>
                <span style={{ fontSize: '12.5px', color: 'var(--color-primary)', fontWeight: 600 }}>Защита: целевой характер расходования, отсутствие умысла на невозврат.</span>
              </div>
            </div>
          </div>

          {/* 3. Хозяйственный риск или преступный умысел */}
          <div style={{ marginTop: '48px', marginBottom: '48px' }}>
            <h3 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0' }}>
              Хозяйственный риск или преступный умысел
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
              Правоохранительные органы нередко пытаются криминализировать обычные коммерческие неудачи или неисполнение гражданско-правовых договоров:
            </p>
            <div className="grid grid-3" style={{ gap: '18px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '20px' }}>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0', fontFamily: 'var(--font-serif)' }}>Реальность сделок</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Сбор доказательств фактического движения товаров, выполнения работ, наличия ресурсов у контрагентов и деловой цели каждой спорной операции.
                </p>
              </div>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '20px' }}>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0', fontFamily: 'var(--font-serif)' }}>Обоснованный риск</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Применение положений ст. 41 УК РФ (обоснованный риск): решения руководства принимались в интересах развития бизнеса с соблюдением осмотрительности.
                </p>
              </div>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '20px' }}>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0', fontFamily: 'var(--font-serif)' }}>Отсутствие корысти</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Доказывание того, что полученные средства были полностью направлены на производственные нужды, выплату зарплаты или расчеты с контрагентами.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Документы, полномочия и движение денег */}
          <div style={{ marginTop: '48px', marginBottom: '48px', background: '#F8FAFC', padding: '32px 28px', border: '1px solid var(--color-border)' }}>
            <h3 style={{ fontSize: 'clamp(20px, 2.6vw, 28px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0' }}>
              Документы, полномочия и движение денег
            </h3>
            <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
              Экономическое обвинение строится на бумажном следе. Защита проводит сплошной аудит доказательств стороны обвинения:
            </p>
            <div className="grid grid-3" style={{ gap: '16px' }}>
              <div style={{ background: '#FFFFFF', padding: '18px', border: '1px solid var(--color-border)' }}>
                <strong style={{ fontSize: '15px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '6px' }}>Ревизия первичных документов</strong>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Сопоставление договоров, счетов-фактур, транспортных накладных и актов сверки с фактическими датами и складским учётом.
                </p>
              </div>
              <div style={{ background: '#FFFFFF', padding: '18px', border: '1px solid var(--color-border)' }}>
                <strong style={{ fontSize: '15px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '6px' }}>Разграничение полномочий</strong>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Устав, трудовые договоры, должностные инструкции и доверенности: проверка того, кто фактически принимал решения и отдавал распоряжения.
                </p>
              </div>
              <div style={{ background: '#FFFFFF', padding: '18px', border: '1px solid var(--color-border)' }}>
                <strong style={{ fontSize: '15px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '6px' }}>Анализ банковских выписок</strong>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Построение карты движения финансовых потоков, разделение расчетов по основной деятельности и сомнительных транзакций.
                </p>
              </div>
            </div>
          </div>

          {/* 5. Цифровые доказательства и переписка */}
          <div style={{ marginTop: '48px', marginBottom: '48px' }}>
            <h3 style={{ fontSize: 'clamp(20px, 2.6vw, 28px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0' }}>
              Цифровые доказательства и переписка
            </h3>
            <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
              Переписка в мессенджерах, электронная почта и базы 1С — ключевые доказательства следствия, требующие специального правового контроля:
            </p>
            <div className="grid grid-3" style={{ gap: '16px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '20px' }}>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 6px 0', fontFamily: 'var(--font-serif)' }}>Законность изъятия</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Проверка соблюдения ст. 164.1 УПК РФ: обязательное участие специалиста при изъятии электронных носителей и право законного владельца на копирование данных.
                </p>
              </div>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '20px' }}>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 6px 0', fontFamily: 'var(--font-serif)' }}>Контекст переписки</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Пресечение манипуляций вырванными из контекста цитатами из рабочих чатов, сопоставление переписки с реальными производственными задачами.
                </p>
              </div>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '20px' }}>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 6px 0', fontFamily: 'var(--font-serif)' }}>Аудит баз данных</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Фиксация версий баз 1С и ERP-систем на момент изъятия, исключение несанкционированного внесения изменений сторонними лицами.
                </p>
              </div>
            </div>
          </div>

          {/* 6. Обыск, изъятие техники и арест активов */}
          <div style={{ marginTop: '48px', marginBottom: '48px', background: 'var(--gradient-cream)', padding: '32px 28px', border: '1px solid var(--color-border)' }}>
            <h3 style={{ fontSize: 'clamp(20px, 2.6vw, 28px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 12px 0' }}>
              Обыск, изъятие техники и арест активов
            </h3>
            <p style={{ fontSize: '14.5px', color: 'var(--color-deep-blue)', lineHeight: 1.6, marginBottom: '20px', opacity: 0.95 }}>
              Силовые процессуальные действия парализуют деятельность бизнеса. Адвокат минимизирует ущерб законными средствами:
            </p>
            <div className="grid grid-3" style={{ gap: '16px' }}>
              <div style={{ background: '#FFFFFF', padding: '18px', border: '1px solid rgba(0,0,0,0.06)' }}>
                <strong style={{ fontSize: '15px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '6px' }}>Адвокатский контроль обыска</strong>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Присутствие адвоката исключает вбросы, давление на персонал и незаконное изъятие не относящихся к делу документов и личных вещей.
                </p>
              </div>
              <div style={{ background: '#FFFFFF', padding: '18px', border: '1px solid rgba(0,0,0,0.06)' }}>
                <strong style={{ fontSize: '15px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '6px' }}>Копирование рабочих баз</strong>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Реализация права на изготовление копий серверов и документов в порядке ч. 2.1 ст. 82 УПК РФ для продолжения текущей работы предприятия.
                </p>
              </div>
              <div style={{ background: '#FFFFFF', padding: '18px', border: '1px solid rgba(0,0,0,0.06)' }}>
                <strong style={{ fontSize: '15px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '6px' }}>Снятие ареста со счетов</strong>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Обжалование несоразмерного ареста банковских счетов и производственных фондов, доказывание принадлежности имущества третьим лицам.
                </p>
              </div>
            </div>
          </div>

          {/* 7. Возможные правовые маршруты */}
          <div style={{ marginTop: '48px', marginBottom: '56px' }}>
            <h3 style={{ fontSize: 'clamp(20px, 2.6vw, 28px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0' }}>
              Возможные правовые маршруты
            </h3>
            <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
              Маршрут защиты согласуется индивидуально после аудита документов и оценки рисков:
            </p>
            <div className="grid grid-3" style={{ gap: '16px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '20px' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', marginBottom: '6px' }}>Маршрут 1</div>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0', fontFamily: 'var(--font-serif)' }}>Отказ в возбуждении дела</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  На стадии проверки предоставить мотивированные пояснения, аудиторские заключения и арбитражные акты, исключив повод для возбуждения уголовного дела.
                </p>
              </div>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '20px' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', marginBottom: '6px' }}>Маршрут 2</div>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0', fontFamily: 'var(--font-serif)' }}>Прекращение за отсутствием состава</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Доказывание отсутствия умысла, реальности хозяйственных операций, обоснованного риска или отсутствия ущерба/недоимки (п. 2 ч. 1 ст. 24 УПК РФ).
                </p>
              </div>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '20px' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', marginBottom: '6px' }}>Маршрут 3</div>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0', fontFamily: 'var(--font-serif)' }}>Возмещение ущерба / уплата недоимки</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  По налоговым преступлениям (ст. 28.1 УПК РФ) — полное прекращение уголовного преследования при возмещении недоимки, пеней и штрафов до суда.
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
                  { name: 'source_page', value: 'https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-ekonomicheskim-prestupleniyam/' },
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
