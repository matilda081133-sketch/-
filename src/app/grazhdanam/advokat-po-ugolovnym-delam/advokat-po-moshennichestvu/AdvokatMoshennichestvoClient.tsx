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

export default function AdvokatMoshennichestvoClient() {
  const situations = [
  {
    "tag": "Сделка / Контракт",
    "title": "Неисполнение договора или срыв сроков поставки",
    "desc": "Контрагент подал заявление о мошенничестве из-за задержки поставки или неоплаты, пытаясь использовать полицию как инструмент давления."
  },
  {
    "tag": "Кредиты / Банки",
    "title": "Претензии банков и МФО (ст. 159.1 УК РФ)",
    "desc": "Обвинение в предоставлении недостоверных сведений о доходах или месте работы при оформлении кредита или лизинга."
  },
  {
    "tag": "Субсидии / Бюджет",
    "title": "Обвинение в хищении выплат и субсидий (ст. 159.2)",
    "desc": "Проверка законности получения господдержки, грантов, материнского капитала или социальных выплат."
  },
  {
    "tag": "ИТ / Компьютеры",
    "title": "Кибермошенничество и платежи (ст. 159.3, 159.6)",
    "desc": "Операции с банковскими картами, электронными деньгами, фишингом и несанкционированным доступом к счетам."
  },
  {
    "tag": "Вызов / Опрос",
    "title": "Вызов в ОБЭП / ОЭБиПК для дачи объяснений",
    "desc": "Проведение доследственной проверки по заявлению партнёра, требование предоставить первичную бухгалтерию и переписку."
  },
  {
    "tag": "Следствие / Суд",
    "title": "Предъявлено обвинение по ч. 2, 3 или 4 ст. 159 УК РФ",
    "desc": "Угроза заключения под стражу при вменении крупного или особо крупного размера, либо совершения группой лиц."
  }
];
  const casesData: CaseData[] = [
  {
    "category": "ст. 159 ч. 4 УК РФ",
    "title": "Отказ в возбуждении дела по спору о поставке на 14 млн ₽",
    "problem": "Заявитель требовал возбудить дело против директора за срыв сроков поставки оборудования, заявив о хищении аванса.",
    "action": "Доказали целевое расходование средств на закупку комплектующих, предоставили переписку о логистических задержках.",
    "result": "Вынесено постановление об отказе в возбуждении дела. Спор переведён в Арбитражный суд."
  },
  {
    "category": "ст. 159 ч. 3 УК РФ",
    "title": "Переквалификация обвинения и освобождение от наказания",
    "problem": "Предпринимателю вменялось хищение бюджетной субсидии на развитие бизнеса в крупном размере.",
    "action": "Провели независимую финансовую экспертизу, доказали частичное выполнение условий программы и отсутствие корыстного умысла.",
    "result": "Действия переквалифицированы на ст. 327 УК РФ, клиент освобождён от уголовной ответственности с назначением судебного штрафа."
  },
  {
    "category": "ст. 159 ч. 2 УК РФ",
    "title": "Прекращение уголовного дела за примирением сторон",
    "problem": "Клиента обвиняли в мошенничестве при продаже автомобиля с сокрытием информации об обременении.",
    "action": "Организовали переговоры, обеспечили возврат средств покупателю и заключили мировое соглашение.",
    "result": "Уголовное дело полностью прекращено судом на основании ст. 25 УПК РФ в связи с примирением сторон."
  }
];
  const processSteps: ProcessStep[] = [
  {
    "num": "01",
    "title": "Анализ договоров и транзакций",
    "desc": "Изучаем основания возникновения обязательств, первичные документы, переписку сторон и платежи."
  },
  {
    "num": "02",
    "title": "Выработка линии защиты",
    "desc": "Формулируем доказательства отсутствия обмана и направленности умысла на исполнение сделки."
  },
  {
    "num": "03",
    "title": "Участие в процессуальных действиях",
    "desc": "Адвокат сопровождает допросы, очные ставки, выемки и судебные заседания по мере пресечения."
  },
  {
    "num": "04",
    "title": "Доказывание невиновности или смягчение",
    "desc": "Исключаем признаки организованной группы, снижаем размер вменяемого ущерба и добиваемся прекращения."
  }
];
  const pricingTiers: PricingTier[] = [
  {
    "title": "Первичный анализ и консультация",
    "subtitle": "Оценка договоров, переписки и рисков ст. 159",
    "price": "от 5 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "анализ спорных сделок и документов",
        "value": "Да"
      },
      {
        "name": "оценка рисков по частям 1–7 ст. 159",
        "value": "Да"
      },
      {
        "name": "выработка первичных инструкций безопасности",
        "value": "Да"
      }
    ],
    "buttonText": "Записаться",
    "buttonHref": "#form"
  },
  {
    "title": "Защита на стадии доследственной проверки",
    "subtitle": "Опрос в ОБЭП, подача мотивированных объяснений",
    "price": "от 30 000 ₽",
    "popular": true,
    "badgeText": "Востребовано",
    "features": [
      {
        "name": "участие адвоката в опросах в ОБЭП/ОЭБиПК",
        "value": "Да"
      },
      {
        "name": "подготовка правовой позиции и контрдоказательств",
        "value": "Да"
      },
      {
        "name": "доказывание хозяйственного характера спора",
        "value": "Да"
      },
      {
        "name": "добивание отказного постановления",
        "value": "Да"
      }
    ],
    "buttonText": "Пригласить адвоката",
    "buttonHref": "#form"
  },
  {
    "title": "Защита на предварительном следствии и в суде",
    "subtitle": "Комплексное ведение уголовного дела",
    "price": "от 60 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "защита во всех следственных действиях",
        "value": "Да"
      },
      {
        "name": "назначение финансово-экономических экспертиз",
        "value": "Да"
      },
      {
        "name": "работа по исключению недопустимых доказательств",
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
    "title": "Экономические преступления",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-ekonomicheskim-prestupleniyam/"
  },
  {
    "title": "Задержание, обыск и допрос",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-pri-zaderzhanii-obyske-i-doprose/"
  },
  {
    "title": "Защита прав потерпевшего",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/zashchita-poterpevshego/"
  }
];
  const faqItems = [
  {
    "q": "Чем мошенничество отличается от обычного неисполнения договора?",
    "a": "Главное отличие — наличие прямого умысла на хищение до момента получения денег. Если лицо намеревалось исполнить договор, но не смогло из-за финансовых трудностей, это гражданско-правовой спор, а не уголовное преступление."
  },
  {
    "q": "Могут ли арестовать по ст. 159 УК РФ до суда?",
    "a": "По ч. 1 и 2 ст. 159 УК РФ заключение под стражу применяется крайне редко. По ч. 3 и 4 (крупный и особо крупный размер) следователи часто ходатайствуют об аресте, если не доказано наличие постоянного жилья, семьи или факт совершения деяния в сфере предпринимательской деятельности (ч. 1.1 ст. 108 УПК РФ)."
  },
  {
    "q": "Что делать, если контрагент угрожает уголовным делом?",
    "a": "Не поддавайтесь на провокации и не давайте поспешных объяснений. Соберите всю первичную документацию (накладные, акты, выписки, переписку) и обратитесь к адвокату для формирования позиции до первого визита в полицию."
  },
  {
    "q": "Поможет ли добровольное возмещение ущерба?",
    "a": "Возмещение ущерба является важнейшим смягчающим обстоятельством (п. «к» ч. 1 ст. 61 УК РФ) и позволяет прекратить дело по нереабилитирующим основаниям (примирение сторон, судебный штраф) по преступлениям небольшой и средней тяжести."
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
        "@id": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-moshennichestvu/#breadcrumbs",
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
            "name": "Адвокат по мошенничеству",
            "item": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-moshennichestvu/"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-moshennichestvu/#service",
        "name": "Адвокат по мошенничеству в Липецке",
        "description": "Разберём обвинение по статьям 159–159.6 УК РФ: в сфере предпринимательства, кредитования, страхования и компьютерной информации. Докажем отсутствие умысла на хищение и переведём спор в гражданско-правовое русло.",
        "url": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-moshennichestvu/",
        "provider": { "@id": "https://dejure-help.ru/#organization" },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Липецк и Липецкая область"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-moshennichestvu/#faq",
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
            <span style={{ color: 'var(--color-text-main)' }}>Адвокат по мошенничеству</span>
          </>
        }
        superTitle="Защита по ст. 159 УК РФ • Липецк"
        title={
          <span style={{ display: 'block', maxWidth: '100%' }}>
            <span style={{ display: 'block' }}>Адвокат по мошенничеству</span>
            <span style={{ display: 'block' }}>(ст. 159 УК РФ)</span>
            <span style={{ display: 'block' }}>в Липецке</span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Подключимся на стадии проверки, предварительного расследования или суда. Изучим документы и движение денег, проверим доказательства умысла и основания уголовной квалификации. Цель защиты — исключить необоснованное обвинение, добиться прекращения уголовного преследования, изменения квалификации или смягчения последствий с учётом обстоятельств дела.
          </span>
        }
        primaryCtaText="Обсудить ситуацию с адвокатом"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_cta_advokat_po_moshennichestvu"
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


          {/* ═══ СОДЕРЖАТЕЛЬНЫЕ БЛОКИ ИЗ ТЗ ПО МОШЕННИЧЕСТВУ ═══ */}

          {/* РАЗДЕЛ 1: ВАША РОЛЬ И СТАДИЯ ДЕЛА */}
          <div style={{ marginTop: '56px', marginBottom: '56px' }}>
            <div style={{ maxWidth: '820px', marginBottom: '32px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Маршрутизатор по статусу
              </div>
              <h3 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                Ваша роль и стадия дела
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Первоочередные процессуальные действия зависят от вашего статуса и этапа дела. Не делайте поспешных заявлений до выработки защитной стратегии.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '24px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-primary)', padding: '28px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '10px' }}>
                    Статус: Проверяемый / Обвиняемый
                  </span>
                  <h4 style={{ fontSize: '19px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 12px 0', lineHeight: 1.3 }}>
                    Меня проверяют или обвиняют
                  </h4>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    Главная задача — не допустить формирования необдуманной позиции. Оцениваем состав преступления, направленность и момент возникновения умысла, обоснованность размера ущерба, индивидуальную роль и допустимость доказательств. Адвокат подключается до первого опроса или допроса.
                  </p>
                </div>
                <div style={{ marginTop: '20px' }}>
                  <a href="#form" className="btn btn-primary" style={{ display: 'inline-block', width: '100%', textAlign: 'center', padding: '12px 20px', fontSize: '14px' }}>
                    Нужна защита
                  </a>
                </div>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-gold)', padding: '28px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '10px' }}>
                    Срочно: Задержание близкого
                  </span>
                  <h4 style={{ fontSize: '19px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 12px 0', lineHeight: 1.3 }}>
                    Ищу адвоката для близкого
                  </h4>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    Главная задача — экстренно установить подразделение (ОЭБиПК, следственный отдел МВД или СК), точное место нахождения задержанного, процессуальный статус и планируемые действия. Организуем срочный выезд адвоката для конфиденциального свидания до ключевого допроса.
                  </p>
                </div>
                <div style={{ marginTop: '20px' }}>
                  <a href="#form" className="btn btn-primary" style={{ display: 'inline-block', width: '100%', textAlign: 'center', padding: '12px 20px', fontSize: '14px' }}>
                    Помочь близкому
                  </a>
                </div>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid #4A6B82', padding: '28px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '10px' }}>
                    Статус: Потерпевший
                  </span>
                  <h4 style={{ fontSize: '19px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 12px 0', lineHeight: 1.3 }}>
                    Я пострадал от мошенничества
                  </h4>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    Главная задача — зафиксировать доказательства хищения, не допустить формального отказа в возбуждении уголовного дела под предлогом гражданско-правового спора, добиться признания потерпевшим и гражданским истцом и наложить арест на имущество виновных для возмещения вреда.
                  </p>
                </div>
                <div style={{ marginTop: '20px' }}>
                  <a href="#form" className="btn btn-outline" style={{ display: 'inline-block', width: '100%', textAlign: 'center', padding: '12px 20px', fontSize: '14px' }}>
                    Защитить права потерпевшего
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* РАЗДЕЛ 2: МОШЕННИЧЕСТВО ИЛИ ГРАЖДАНСКО-ПРАВОВОЙ СПОР */}
          <div style={{ marginTop: '56px', marginBottom: '56px', background: 'var(--gradient-cream)', padding: '40px 36px', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-gold)' }}>
            <div style={{ maxWidth: '850px', marginBottom: '28px' }}>
              <h3 style={{ fontSize: 'clamp(22px, 2.8vw, 32px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                Мошенничество или гражданско-правовой спор
              </h3>
              <p style={{ fontSize: '15.5px', color: 'var(--color-deep-blue)', opacity: 0.95, margin: 0, lineHeight: 1.65, fontWeight: 500 }}>
                Само по себе неисполнение договора, задержка возврата денег, убыток или банкротство контрагента не дают автоматического ответа о наличии мошенничества. Для статьи 159 УК РФ исследуют, было ли хищение путём обмана или злоупотребления доверием, когда возник умысел на завладение имуществом и какие действия подтверждают либо опровергают намерение исполнить обязательство.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '20px' }}>
              <div style={{ background: '#FFFFFF', padding: '24px 20px', border: '1px solid rgba(0,0,0,0.06)' }}>
                <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '8px', fontFamily: 'var(--font-serif)' }}>
                  Переговоры до передачи имущества
                </strong>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Показывают, какая информация сообщалась и могла ли она вводить контрагента в заблуждение относительно условий и намерений.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', padding: '24px 20px', border: '1px solid rgba(0,0,0,0.06)' }}>
                <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '8px', fontFamily: 'var(--font-serif)' }}>
                  Роль каждого участника
                </strong>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Совместная работа, служебное подчинение или знакомство сами по себе не доказывают общий преступный умысел и конкретную роль.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', padding: '24px 20px', border: '1px solid rgba(0,0,0,0.06)' }}>
                <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '8px', fontFamily: 'var(--font-serif)' }}>
                  Размер и характер ущерба
                </strong>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Расчёт должен опираться на фактические операции, стоимость имущества и применимые правила квалификации без необоснованных начислений.
                </p>
              </div>
            </div>
          </div>

          {/* РАЗДЕЛ 3: ЧТО МОЖЕТ ПОДТВЕРЖДАТЬ ИЛИ ОПРОВЕРГАТЬ УМЫСЕЛ */}
          <div style={{ marginTop: '56px', marginBottom: '56px' }}>
            <div style={{ maxWidth: '820px', marginBottom: '32px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Субъективная сторона
              </div>
              <h3 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                Что может подтверждать или опровергать умысел
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Для квалификации по ст. 159 УК РФ следствие обязано доказать прямой корыстный умысел, направленный на безвозмездное изъятие чужого имущества.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '24px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '28px 24px', borderTop: '3px solid var(--color-primary)' }}>
                <h4 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 12px 0', lineHeight: 1.35 }}>
                  Момент возникновения умысла
                </h4>
                <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Для договорного мошенничества принципиально, существовал ли умысел до получения имущества или права на него. Если обязательство не исполнено из-за последующих объективных финансовых или хозяйственных трудностей, уголовная ответственность исключается.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '28px 24px', borderTop: '3px solid var(--color-gold)' }}>
                <h4 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 12px 0', lineHeight: 1.35 }}>
                  Ресурсы и реальные действия
                </h4>
                <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Закупки, наём сотрудников, договоры с подрядчиками, частичное исполнение обязательств и деловая переписка подтверждают реальное намерение исполнить сделку и служат главным доказательством отсутствия первоначального обмана.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '28px 24px', borderTop: '3px solid #4A6B82' }}>
                <h4 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 12px 0', lineHeight: 1.35 }}>
                  Внешние объективные факторы
                </h4>
                <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Срыв поставок контрагентами, блокировка счетов кредитными организациями, изменения законодательства, валютные колебания и форс-мажор доказывают предпринимательский риск, а не преднамеренное преступное завладение активами.
                </p>
              </div>
            </div>
          </div>

          {/* РАЗДЕЛ 4: ДОГОВОРЫ, ПЛАТЕЖИ И ЭЛЕКТРОННАЯ ПЕРЕПИСКА */}
          <div style={{ marginTop: '56px', marginBottom: '56px', background: '#F8FAFC', padding: '40px 36px', border: '1px solid var(--color-border)' }}>
            <div style={{ maxWidth: '820px', marginBottom: '32px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Доказательственная база
              </div>
              <h3 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                Договоры, платежи и электронная переписка
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Письменные и цифровые следы служат объективной основой доказывания действительных взаимоотношений сторон сделки.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '24px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '26px 22px' }}>
                <strong style={{ fontSize: '17px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '10px', fontFamily: 'var(--font-serif)' }}>
                  Движение денег и имущества
                </strong>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Важно установить точное назначение операций, конечных получателей, встречные поставки, произведённые возвраты и прямую связь платежей с обязательством. Анализируем банковские выписки и назначения платежей.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '26px 22px' }}>
                <strong style={{ fontSize: '17px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '10px', fontFamily: 'var(--font-serif)' }}>
                  Договорная и первичная база
                </strong>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Договоры, спецификации, товарные накладные, акты приёма-передачи, путевые листы и доверенности. Проверяем полномочия подписантов, подлинность подписей и соответствие фактической хронологии хозяйственных операций.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '26px 22px' }}>
                <strong style={{ fontSize: '17px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '10px', fontFamily: 'var(--font-serif)' }}>
                  Электронная переписка и коммуникация
                </strong>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Корпоративная почта, сообщения в мессенджерах, аудиозаписи и протоколы разногласий помогают восстановить контекст переговоров и подтверждают отсутствие намеренного введения контрагента в заблуждение.
                </p>
              </div>
            </div>
          </div>

          {/* РАЗДЕЛ 5: ВОЗМОЖНЫЕ ПРАВОВЫЕ МАРШРУТЫ */}
          <div style={{ marginTop: '56px', marginBottom: '56px' }}>
            <div style={{ maxWidth: '820px', marginBottom: '32px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Процессуальная стратегия
              </div>
              <h3 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                Возможные правовые маршруты
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Направление работы зависит от стадии рассмотрения материала, состава участников и собранных доказательств.
              </p>
            </div>

            <div className="grid grid-2" style={{ gap: '24px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '28px', borderLeft: '4px solid var(--color-primary)' }}>
                <h4 style={{ fontSize: '19px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>
                  Защита до возбуждения дела
                </h4>
                <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Подходит при проверке сообщения о преступлении (в порядке ст. 144–145 УПК РФ). Анализируем запросы и документы, готовим участие доверителя в опросах и даче объяснений, представляем значимые оправдательные материалы и обжалуем незаконные действия проверяющих при наличии оснований.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '28px', borderLeft: '4px solid var(--color-gold)' }}>
                <h4 style={{ fontSize: '19px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>
                  Защита на предварительном расследовании
                </h4>
                <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Проверяем законность возбуждения дела и предъявленного обвинения, участвуем в следственных действиях (допросы, очные ставки, обыски), заявляем ходатайства и жалобы, работаем с квалификацией, индивидуальной ролью, размером ущерба и мерой пресечения.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '28px', borderLeft: '4px solid #10273B' }}>
                <h4 style={{ fontSize: '19px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>
                  Защита в суде
                </h4>
                <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Формируем судебную позицию, участвуем в судебном следствии, исследовании доказательств, перекрёстных допросах свидетелей и прениях сторон. Объём работы определяется после детального ознакомления со всеми материалами уголовного дела и обвинительным заключением.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '28px', borderLeft: '4px solid #4A6B82' }}>
                <h4 style={{ fontSize: '19px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>
                  Представительство потерпевшего
                </h4>
                <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Собираем и структурируем документы, сопровождаем подачу заявления о преступлении и процессуальные действия, заявляем гражданский иск и ходатайства, направленные на арест счетов и активов виновных лиц для обеспечения реального возмещения вреда.
                </p>
              </div>
            </div>

            <div style={{ marginTop: '20px', background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
              <strong style={{ color: 'var(--color-deep-blue)' }}>Ограничение: </strong>
              Конкретный маршрут и возможный процессуальный результат определяются только после изучения фактов. На странице нельзя обещать отказ в возбуждении дела, прекращение преследования, изменение меры пресечения, оправдательный приговор или возврат всей суммы.
            </div>
          </div>

          {/* РАЗДЕЛ 6: ЧТО ПРЕДОСТАВИТЬ ДЛЯ ПЕРВИЧНОГО АНАЛИЗА */}
          <div style={{ marginTop: '56px', marginBottom: '56px', background: '#FAF7F2', padding: '40px 36px', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-gold)' }}>
            <div style={{ maxWidth: '820px', marginBottom: '28px' }}>
              <h3 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                Что предоставить для первичного анализа
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Если у вас имеются перечисленные документы, подготовьте их к первой консультации для максимально точной оценки перспектив:
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px', marginBottom: '28px' }}>
              {[
                'повестку, уведомление, постановление о возбуждении дела, привлечении в качестве обвиняемого или избрании меры пресечения — если они есть;',
                'протоколы обыска, выемки, задержания, допросов и перечень изъятого имущества и документов;',
                'договоры, приложения, акты, счета, накладные, деловую переписку и документы об исполнении обязательств;',
                'банковские выписки, платёжные поручения, расписки и сведения о возвратах денежных средств;',
                'заключения экспертов, ревизий, аудиторских исследований и расчёт предполагаемого ущерба;',
                'краткую хронологию событий, перечень участников и ближайшие известные процессуальные даты.'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', background: '#FFFFFF', padding: '16px 18px', border: '1px solid var(--color-border)' }}>
                  <div style={{ width: '8px', height: '8px', minWidth: '8px', background: 'var(--color-gold)', borderRadius: '50%', marginTop: '7px' }}></div>
                  <span style={{ fontSize: '14px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>{item}</span>
                </div>
              ))}
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.8)', padding: '16px 20px', borderLeft: '3px solid var(--color-primary)', fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
              Если документов нет или они изъяты, всё равно можно обратиться. Не пересылайте материалы через публичные комментарии и рекламные формы; способ безопасной передачи согласуйте с командой.
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
                  { name: 'source_page', value: 'https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-moshennichestvu/' },
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
