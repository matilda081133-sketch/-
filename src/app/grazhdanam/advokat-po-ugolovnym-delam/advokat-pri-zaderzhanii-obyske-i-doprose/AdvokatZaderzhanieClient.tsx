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

export default function AdvokatZaderzhanieClient() {
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
          "name": "Адвокат при задержании, обыске и допросе",
          "item": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-pri-zaderzhanii-obyske-i-doprose/"
        }
      ]
    },
    {
      "@type": "Service",
      "name": "Адвокат при задержании, обыске и допросе в Липецке",
      "description": "Срочный выезд адвоката при задержании, обыске, выемке, допросе в Липецке. Защита от давления, фиксация нарушений в протоколах. В рабочее время Пн–Пт 09:00–18:00.",
      "url": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-pri-zaderzhanii-obyske-i-doprose/",
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
          "name": "Сколько времени полиция может удерживать человека без предъявления обвинения?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Срок задержания в качестве подозреваемого не может превышать 48 часов с момента фактического ограничения свободы передвижения (ст. 92 УПК РФ). По истечении 48 часов лицо должно быть освобождено либо доставлено в суд для решения вопроса об аресте."
          }
        },
        {
          "@type": "Question",
          "name": "Имеет ли задержанный право на телефонный звонок?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да. Согласно ч. 1 ст. 96 УПК РФ, подозреваемый имеет право на один телефонный разговор на русском языке в присутствии дознавателя или следователя в целях уведомления близких родственников о своем задержании и месте нахождения не позднее 3 часов с момента доставления."
          }
        },
        {
          "@type": "Question",
          "name": "Что делать, если при обыске не пускают адвоката?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Следователь не вправе запретить присутствие адвоката лица, в помещении которого проводится обыск (ч. 11 ст. 182 УПК РФ). Требуйте внесения в протокол записи: «В допуске адвоката отказано следователем» и не подписывайте документы без замечаний."
          }
        },
        {
          "@type": "Question",
          "name": "Стоит ли давать показания на первом допросе?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Без предварительной консультации с выбранным адвокатом давать показания категорически не рекомендуется. Целесообразно воспользоваться ст. 51 Конституции РФ до момента полного ознакомления защитника с обстоятельствами дела."
          }
        }
      ]
    }
  ]
};

  const situations = [
  {
    "title": "Фактическое задержание человека (ст. 91 УПК РФ)",
    "desc": "Человека остановили на улице, в автомобиле или офисе, доставили в отдел полиции или СК РФ и удерживают без связи.",
    "impact": "Прибываем в орган, устанавливаем процессуальный статус, фиксируем точное время фактического задержания (до 48 часов)."
  },
  {
    "title": "Внезапный обыск в квартире, доме или офисе",
    "desc": "Сотрудники силовых ведомств проводят обследование или обыск, изымают документы, технику, деньги и телефоны.",
    "impact": "Контролируем соблюдение прав, требуем внесения в протокол всех изъятых предметов и фиксируем процессуальные нарушения."
  },
  {
    "title": "Вызов на допрос в качестве свидетеля или подозреваемого",
    "desc": "Вручение повестки или звонок следователя с требованием срочно явиться для дачи показаний.",
    "impact": "Проводим предварительный инструктаж, вырабатываем показания и сопровождаем доверителя на допросе."
  },
  {
    "title": "Избрание меры пресечения в суде (арест / СИЗО)",
    "desc": "Следователь подал в суд ходатайство о заключении под стражу на 2 месяца в следственный изолятор.",
    "impact": "Собираем доказательства для отказа в аресте и избрания домашнего ареста, залога или запрета определенных действий."
  }
];
  const checkpoints = [
  {
    "title": "Право на конфиденциальную беседу до допроса (ч. 4 ст. 46 УПК)",
    "desc": "Обеспечиваем проведение встречи наедине и конфиденциально продолжительностью не менее 2 часов до первого допроса."
  },
  {
    "title": "Разъяснение права не свидетельствовать против себя (ст. 51)",
    "desc": "Определяем, на какие вопросы отвечать, а в отношении каких целесообразно воспользоваться конституционным правом молчания."
  },
  {
    "title": "Законность постановления об обыске или задержании",
    "desc": "Проверяем судебное решение, полномочия следователя и наличие оснований для неотложного производства обыска."
  },
  {
    "title": "Участие понятых и непрерывная видеозапись",
    "desc": "Следим за тем, чтобы понятые присутствовали при всех действиях и не были подставными лицами (стажерами полиции)."
  },
  {
    "title": "Внесение замечаний в протокол следственного действия",
    "desc": "Собственноручно вносим в протокол все нарушения, угрозы, отказ в предоставлении защитника или неточности фиксации."
  },
  {
    "title": "Соблюдение предельных сроков задержания (48 часов)",
    "desc": "Контролируем передачу материалов в суд по мере пресечения или освобождение доверителя по истечении 48 часов."
  }
];
  const casesData: CaseData[] = [
  {
    "title": "Отказ в удовлетворении ходатайства следователя об аресте в СИЗО",
    "category": "Мера пресечения",
    "problem": "Следователь настаивал на заключении под стражу доверителя, подозреваемого в тяжком преступлении против собственности.",
    "action": "Адвокат оперативно собрал справки о наличии малолетних детей, жилья в Липецке и постоянного места работы.",
    "result": "Суд отказал в аресте и избрал меру пресечения в виде домашнего ареста, доверитель остался с семьей."
  },
  {
    "title": "Признание протокола обыска недопустимым доказательством",
    "category": "Обыск в помещении",
    "problem": "В ходе обыска в офисе сотрудники изъяли серверы и документы без составления подробной описи на месте.",
    "action": "Адвокат зафиксировал в протоколе нарушения порядка упаковки и отсутствие понятых при изъятии в соседней комнате.",
    "result": "Суд исключил протокол обыска и все изъятые носители информации из доказательств обвинения."
  },
  {
    "title": "Освобождение задержанного из ИВС без предъявления обвинения",
    "category": "Задержание (ст. 91 УПК РФ)",
    "problem": "Доверителя задержали по подозрению в грабеже и поместили в изолятор временного содержания.",
    "action": "Адвокат доказал наличие алиби (биллинги телефона и записи видеокамер) в момент совершения преступления.",
    "result": "По истечении 48 часов доверитель освобожден из ИВС без избрания меры пресечения, статус снят."
  }
];
  const processSteps: ProcessStep[] = [
  {
    "num": "01",
    "title": "Срочный звонок и выяснение органа",
    "desc": "Уточняем, кто задержал, по какому адресу находится человек и в какое подразделение выезжать."
  },
  {
    "num": "02",
    "title": "Прибытие и конфиденциальная беседа",
    "desc": "Вступаем в дело по ордеру, проводим беседу наедине и определяем линию защиты на первые сутки."
  },
  {
    "num": "03",
    "title": "Участие в допросе и следственных действиях",
    "desc": "Присутствуем при допросе, опознании, обыске, очных ставках, вносим возражения и замечания в протоколы."
  },
  {
    "num": "04",
    "title": "Защита в суде при избрании меры пресечения",
    "desc": "Готовим доказательства для отказа в заключении под стражу (СИЗО) и добиваемся мягкой меры пресечения."
  }
];
  const pricingTiers: PricingTier[] = [
  {
    "title": "Срочный выезд и участие в допросе",
    "subtitle": "Разовое следственное действие",
    "price": "от 15 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "срочный выезд в отдел полиции / СК в рабочее время",
        "value": "Да"
      },
      {
        "name": "конфиденциальная встреча с подзащитным",
        "value": "Да"
      },
      {
        "name": "участие в первом допросе или очной ставке",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  },
  {
    "title": "Участие при обыске и выемке",
    "subtitle": "Защита при обыске в помещении",
    "price": "от 20 000 ₽",
    "popular": true,
    "badgeText": "Востребовано",
    "features": [
      {
        "name": "выезд на место проведения обыска",
        "value": "Да"
      },
      {
        "name": "контроль за действиями оперативной группы и понятых",
        "value": "Да"
      },
      {
        "name": "контроль подробной описи изымаемых предметов",
        "value": "Да"
      },
      {
        "name": "внесение мотивированных замечаний в протокол",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  },
  {
    "title": "Защита в суде по мере пресечения (арест)",
    "subtitle": "Предотвращение отправки в СИЗО",
    "price": "от 25 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "срочный сбор документов для суда (жилье, дети, здоровье)",
        "value": "Да"
      },
      {
        "name": "подготовка возражений на ходатайство следователя",
        "value": "Да"
      },
      {
        "name": "личное выступление адвоката в судебном заседании",
        "value": "Да"
      },
      {
        "name": "обоснование домашнего ареста или залога",
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
    "desc": "Защита при обвинениях в хищении, экономических проверках и следственных действиях.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-moshennichestvu/"
  },
  {
    "title": "Адвокат по делам о наркотиках (ст. 228)",
    "desc": "Защита при задержании с поличным, личном досмотре и изъятии запрещенных веществ.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-delam-o-narkotikah/"
  },
  {
    "title": "Обжалование приговора",
    "desc": "Апелляционное и кассационное обжалование незаконных постановлений и приговоров.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/obzhalovanie-prigovora/"
  }
];
  const faqItems = [
  {
    "q": "Сколько времени полиция может удерживать человека без предъявления обвинения?",
    "a": "Срок задержания в качестве подозреваемого не может превышать 48 часов с момента фактического ограничения свободы передвижения (ст. 92 УПК РФ). По истечении 48 часов лицо должно быть освобождено либо доставлено в суд для решения вопроса об аресте."
  },
  {
    "q": "Имеет ли задержанный право на телефонный звонок?",
    "a": "Да. Согласно ч. 1 ст. 96 УПК РФ, подозреваемый имеет право на один телефонный разговор на русском языке в присутствии дознавателя или следователя в целях уведомления близких родственников о своем задержании и месте нахождения не позднее 3 часов с момента доставления."
  },
  {
    "q": "Что делать, если при обыске не пускают адвоката?",
    "a": "Следователь не вправе запретить присутствие адвоката лица, в помещении которого проводится обыск (ч. 11 ст. 182 УПК РФ). Требуйте внесения в протокол записи: «В допуске адвоката отказано следователем» и не подписывайте документы без замечаний."
  },
  {
    "q": "Стоит ли давать показания на первом допросе?",
    "a": "Без предварительной консультации с выбранным адвокатом давать показания категорически не рекомендуется. Целесообразно воспользоваться ст. 51 Конституции РФ до момента полного ознакомления защитника с обстоятельствами дела."
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
              <span style={{ color: '#FFFFFF' }}>Адвокат при задержании, обыске и допросе</span>
            </nav>
          }
          superTitle="Уголовный процесс • Срочная помощь"
          title={
            <span style={{ display: 'block' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                Адвокат при задержании
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                обыске и допросе
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                в Липецке
              </span>
            </span>
          }
          subtitle="Срочная юридическая помощь при проведении неотложных следственных действий: задержании, обыске, выемке, очной ставке и первом допросе. Связь в рабочее время: Пн–Пт с 09:00 до 18:00."
          primaryCtaText="Обсудить ситуацию"
          primaryCtaLink="#form"
          primaryCtaSubtext={
            <span style={{ display: 'block' }}>
              <span style={{ whiteSpace: 'nowrap' }}>Перезвоним вам в течение 15 минут в рабочее время</span>
            </span>
          }
          trustItems={[
            { text: 'Оперативный выезд адвоката в следственный орган или на место обыска' },
            { text: 'Конфиденциальная консультация до начала первого допроса' },
            { text: 'Предотвращение психологического давления и самооговора' }
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
                <span style={{ display: "inline-block" }}>Когда требуется</span> <br />
                <span style={{ display: "inline-block" }}>срочное присутствие</span> <br />
                <span style={{ display: "inline-block" }}>адвоката по уголовным делам</span>
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Первые 24–48 часов после задержания или обыска определяют всю дальнейшую перспективу уголовного дела.
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
                    Что контролирует адвокат при следственных действиях
                  </h3>
                </div>
              </div>

              <p style={{ margin: '0 0 28px 0', fontSize: '15px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, maxWidth: '820px' }}>
                Меры процессуальной защиты прав доверителя с первой минуты:
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
                  hiddenFields={[{ name: 'page', value: '/grazhdanam/advokat-po-ugolovnym-delam/advokat-pri-zaderzhanii-obyske-i-doprose/' }]}
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
