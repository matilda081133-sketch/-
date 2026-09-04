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
    "num": "01",
    "title": "Подача краткой жалобы в 15-дневный срок",
    "desc": "Предотвращаем вступление приговора в законную силу и сохраняем статус подсудимого."
  },
  {
    "num": "02",
    "title": "Изучение протокола, аудиозаписи и дела",
    "desc": "Аудит всех томов дела и сопоставление письменного протокола с аудиозаписью процесса."
  },
  {
    "num": "03",
    "title": "Подготовка мотивированной жалобы",
    "desc": "Формулирование конкретных юридических оснований для отмены или изменения приговора."
  },
  {
    "num": "04",
    "title": "Защита в суде апелляции или кассации",
    "desc": "Личное выступление адвоката в судебном заседании, допрос свидетелей и участие в прениях."
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
            Проанализируем приговор суда, протокол судебного заседания и материалы уголовного дела. Выявим существенные нарушения норм УПК и УК РФ, подготовим мотивированную апелляционную или кассационную жалобу и добьёмся отмены или смягчения наказания.
          </span>
        }
        primaryCtaText="Обсудить ситуацию с адвокатом"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_cta_obzhalovanie_prigovora"
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
