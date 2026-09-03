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
          "name": "Адвокат по кражам, грабежам и разбоям",
          "item": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-krazham-grabezham-i-razboyam/"
        }
      ]
    },
    {
      "@type": "Service",
      "name": "Адвокат по кражам, грабежам и разбоям в Липецке",
      "description": "Защита по обвинениям в краже (ст. 158), грабеже (ст. 161), разбое (ст. 162 УК РФ) в Липецке. Оспаривание квалификации, оценка ущерба, прекращение за примирением.",
      "url": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-krazham-grabezham-i-razboyam/",
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
          "name": "Можно ли прекратить дело о краже, если возместить ущерб?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да. По ч. 1 и ч. 2 ст. 158 УК РФ (преступления небольшой и средней тяжести) закон позволяет прекратить уголовное дело в связи с примирением с потерпевшим (ст. 25 УПК РФ) либо назначить судебный штраф (ст. 25.1 УПК РФ) при условии, что лицо привлекается впервые."
          }
        },
        {
          "@type": "Question",
          "name": "Что считается кражей с банковского счета (п. «г» ч. 3 ст. 158 УК РФ)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Оплата покупок найденной чужой банковской картой или перевод денег через мобильный банк без согласия владельца квалифицируется как тяжкое преступление независимо от суммы хищения (даже если списано 500 рублей)."
          }
        },
        {
          "@type": "Question",
          "name": "Чем грабеж отличается от разбоя?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Грабеж (ст. 161 УК РФ) — открытое хищение без насилия или с насилием, не опасным для жизни и здоровья. Разбой (ст. 162 УК РФ) — нападение с применением или угрозой применения насилия, опасного для жизни или здоровья, либо с оружием."
          }
        },
        {
          "@type": "Question",
          "name": "Как оценивается стоимость похищенного имущества?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ущерб рассчитывается исходя из фактической (остаточной) стоимости имущества на момент хищения с учетом износа, а для новых товаров из магазина — по оптовой закупочной цене без торговой наценки."
          }
        }
      ]
    }
  ]
};

  const situations = [
  {
    "title": "Обвинение в краже из магазина или предприятия (ст. 158)",
    "desc": "Задержание охраной, вменение тайного хищения с проникновением в помещение или группой лиц по предварительному сговору.",
    "impact": "Проверяем закупочную стоимость товара без торговой наценки, оцениваем возможность прекращения по ст. 25 УПК РФ."
  },
  {
    "title": "Вменение грабежа вместо кражи (ст. 161)",
    "desc": "Следствие утверждает, что хищение носило открытый характер, хотя лицо полагало, что действует тайно.",
    "impact": "Доказываем субъективную направленность умысла на тайное изъятие и переквалифицируем на ст. 158 УК РФ."
  },
  {
    "title": "Обвинение в разбое с применением предметов (ст. 162)",
    "desc": "Вменение применения оружия или предметов, используемых в качестве оружия, сопряженное с угрозой насилия.",
    "impact": "Проверяем реальность угрозы, характеристики предметов и отсутствие умысла на разбойное нападение."
  },
  {
    "title": "Хищение с банковского счета или карты (п. «г» ч. 3 ст. 158)",
    "desc": "Списание чужих денежных средств с найденной или переданной банковской карты квалифицируется как тяжкое преступление.",
    "impact": "Анализируем обстоятельства получения карты, объем списаний и основания для назначения наказания ниже низшего предела."
  }
];
  const checkpoints = [
  {
    "title": "Точный размер реального материального ущерба",
    "desc": "Назначаем товароведческую экспертизу для исключения завышенной оценки стоимости старого или изношенного имущества."
  },
  {
    "title": "Способ завладения имуществом (тайно / открыто)",
    "desc": "Анализируем записи камер наблюдения и показания очевидцев о моменте обнаружения факта изъятия имущества."
  },
  {
    "title": "Наличие квалифицирующего признака «проникновение»",
    "desc": "Проверяем свободный доступ в помещение и отсутствие признаков незаконного проникновения в хранилище/жилище."
  },
  {
    "title": "Добровольный отказ или покушение на хищение",
    "desc": "Устанавливаем, имело ли лицо реальную возможность распорядиться похищенным имуществом (оконченный состав vs ст. 30 УК РФ)."
  },
  {
    "title": "Возможность примирения с потерпевшим",
    "desc": "Организуем возмещение фактического ущерба и подписание процессуального заявления о прекращении уголовного дела."
  },
  {
    "title": "Роль каждого соучастника в группе",
    "desc": "Исключаем необоснованное вменение предварительного сговора и эксцесса исполнителя при совместных действиях."
  }
];
  const casesData: CaseData[] = [
  {
    "title": "Переквалификация с грабежа (ч. 2 ст. 161) на кражу (ч. 1 ст. 158 УК РФ)",
    "category": "Имущественные преступления",
    "problem": "Потерпевший утверждал, что кричал и требовал вернуть телефон, заявляя об открытом хищении группой лиц.",
    "action": "По видеозаписям доказали, что доверитель находился в наушниках и не слышал окликов, действуя с убеждением в тайности изъятия.",
    "result": "Дело переквалифицировано на ч. 1 ст. 158 УК РФ и прекращено в суде в связи с примирением сторон."
  },
  {
    "title": "Снижение суммы ущерба и прекращение дела с судебным штрафом",
    "category": "Кража (ст. 158 УК РФ)",
    "problem": "Магазин оценил ущерб по розничным ценам с наценкой в 80 тыс. руб., вменяя значительный ущерб по ч. 2 ст. 158 УК РФ.",
    "action": "Истребовали накладные оптовых закупок, доказали реальную стоимость в 18 тыс. руб. и возместили ущерб.",
    "result": "Обвинение снижено до ч. 1 ст. 158 УК РФ. Суд прекратил дело с назначением судебного штрафа без судимости."
  },
  {
    "title": "Исключение признака разбоя (ст. 162 УК РФ)",
    "category": "Тяжкие составы",
    "problem": "Доверителю вменяли разбойное нападение с применением ножа во время уличного конфликта.",
    "action": "Доказали, что нож не доставался и угрозы им не высказывались, а имело место завладение вещью в ходе драки.",
    "result": "Действия переквалифицированы на самоуправство и нанесение побоев, доверитель освобожден из-под стражи в зале суда."
  }
];
  const processSteps: ProcessStep[] = [
  {
    "num": "01",
    "title": "Анализ обстоятельств и видеозаписей",
    "desc": "Изучаем материалы задержания, видеозаписи с камер «Безопасный город» и протокол осмотра места происшествия."
  },
  {
    "num": "02",
    "title": "Проверка оценки стоимости имущества",
    "desc": "Истребуем закупочные чеки и первичные бухгалтерские документы потерпевшего для установления фактического ущерба."
  },
  {
    "num": "03",
    "title": "Переговоры о возмещении и примирении",
    "desc": "При согласии подзащитного организуем добровольное возмещение ущерба для прекращения дела по нереабилитирующим основаниям."
  },
  {
    "num": "04",
    "title": "Защита на следствии и в суде",
    "desc": "Добиваемся переквалификации на менее тяжкую статью, исключения отягчающих признаков и мягкого наказания."
  }
];
  const pricingTiers: PricingTier[] = [
  {
    "title": "Анализ дела и консультация",
    "subtitle": "Оценка квалификации и ущерба",
    "price": "от 5 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "правовая оценка протокола допроса и обвинения",
        "value": "Да"
      },
      {
        "name": "проверка оснований для примирения сторон",
        "value": "Да"
      },
      {
        "name": "рекомендации по переквалификации",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  },
  {
    "title": "Защита на стадии расследования",
    "subtitle": "Следствие / дознание под ключ",
    "price": "от 35 000 ₽",
    "popular": true,
    "badgeText": "Востребовано",
    "features": [
      {
        "name": "участие во всех допросах и очных ставках",
        "value": "Да"
      },
      {
        "name": "организация примирения с потерпевшим",
        "value": "Да"
      },
      {
        "name": "ходатайства о снижении объема обвинения",
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
    "title": "Защита в суде первой инстанции",
    "subtitle": "Полное судебное представительство",
    "price": "от 45 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "участие во всех судебных заседаниях",
        "value": "Да"
      },
      {
        "name": "допрос потерпевшего и свидетелей",
        "value": "Да"
      },
      {
        "name": "заявление о прекращении дела по ст. 25 УПК РФ",
        "value": "Да"
      },
      {
        "name": "обоснование наказания без лишения свободы",
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
    "desc": "Защита по сложным экономическим и имущественным преступлениям, совершенным путем обмана.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-moshennichestvu/"
  },
  {
    "title": "Адвокат при задержании и допросе",
    "desc": "Срочный выезд адвоката в дежурную часть или следственный орган при задержании с поличным.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-pri-zaderzhanii-obyske-i-doprose/"
  },
  {
    "title": "Обжалование приговора",
    "desc": "Апелляция и кассация по приговорам за кражу, грабеж или разбой с целью смягчения наказания.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/obzhalovanie-prigovora/"
  }
];
  const faqItems = [
  {
    "q": "Можно ли прекратить дело о краже, если возместить ущерб?",
    "a": "Да. По ч. 1 и ч. 2 ст. 158 УК РФ (преступления небольшой и средней тяжести) закон позволяет прекратить уголовное дело в связи с примирением с потерпевшим (ст. 25 УПК РФ) либо назначить судебный штраф (ст. 25.1 УПК РФ) при условии, что лицо привлекается впервые."
  },
  {
    "q": "Что считается кражей с банковского счета (п. «г» ч. 3 ст. 158 УК РФ)?",
    "a": "Оплата покупок найденной чужой банковской картой или перевод денег через мобильный банк без согласия владельца квалифицируется как тяжкое преступление независимо от суммы хищения (даже если списано 500 рублей)."
  },
  {
    "q": "Чем грабеж отличается от разбоя?",
    "a": "Грабеж (ст. 161 УК РФ) — открытое хищение без насилия или с насилием, не опасным для жизни и здоровья. Разбой (ст. 162 УК РФ) — нападение с применением или угрозой применения насилия, опасного для жизни или здоровья, либо с оружием."
  },
  {
    "q": "Как оценивается стоимость похищенного имущества?",
    "a": "Ущерб рассчитывается исходя из фактической (остаточной) стоимости имущества на момент хищения с учетом износа, а для новых товаров из магазина — по оптовой закупочной цене без торговой наценки."
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
              <span style={{ color: '#FFFFFF' }}>Адвокат по кражам, грабежам и разбоям</span>
            </nav>
          }
          superTitle="Уголовное право • ст. 158, 161, 162 УК РФ"
          title={
            <span style={{ display: 'block' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                Адвокат по кражам
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                грабежам и разбоям
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                в Липецке
              </span>
            </span>
          }
          subtitle="Защита подозреваемых и обвиняемых по делам о хищении имущества. Проверяем размер ущерба, роль соучастников, наличие насилия и законность изъятия. Связь в рабочее время: Пн–Пт с 09:00 до 18:00."
          primaryCtaText="Обсудить ситуацию"
          primaryCtaLink="#form"
          primaryCtaSubtext={
            <span style={{ display: 'block' }}>
              <span style={{ whiteSpace: 'nowrap' }}>Перезвоним вам в течение 15 минут в рабочее время</span>
            </span>
          }
          trustItems={[
            { text: 'Оценим реальный ущерб и исключим завышенные претензии' },
            { text: 'Защитим от необоснованной переквалификации кражи в грабеж или разбой' },
            { text: 'Добьемся прекращения дела по примирению сторон или судебного штрафа' }
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
                <span style={{ display: "inline-block" }}>требуется помощь адвоката</span> <br />
                <span style={{ display: "inline-block" }}>по имущественным делам</span>
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Анализируем видеозаписи, показания потерпевших и свидетелей, точность оценки стоимости похищенного.
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
                    Что устанавливает адвокат по делам о хищениях
                  </h3>
                </div>
              </div>

              <p style={{ margin: '0 0 28px 0', fontSize: '15px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, maxWidth: '820px' }}>
                Ключевые обстоятельства, влияющие на квалификацию и исход дела:
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
                  hiddenFields={[{ name: 'page', value: '/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-krazham-grabezham-i-razboyam/' }]}
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
