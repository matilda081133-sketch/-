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
          "name": "Адвокат по делам о наркотиках",
          "item": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-delam-o-narkotikah/"
        }
      ]
    },
    {
      "@type": "Service",
      "name": "Адвокат по делам о наркотиках в Липецке",
      "description": "Защита по делам о наркотиках (ст. 228, 228.1 УК РФ) в Липецке. Проверка законности задержания, досмотра, экспертиз и веса вещества. Следственный опыт.",
      "url": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-delam-o-narkotikah/",
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
          "name": "Что делать, если предлагают признать вину в обмен на подписку о невыезде?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ни в коем случае не соглашайтесь на признание вины или подписание признательных показаний до консультации с независимым адвокатом. Признание вины в сбыте необратимо ухудшает процессуальное положение."
          }
        },
        {
          "@type": "Question",
          "name": "Какая разница между ст. 228 и ст. 228.1 УК РФ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Статья 228 УК РФ предусматривает ответственность за незаконное приобретение, хранение, перевозку без цели сбыта. Статья 228.1 УК РФ — за производство, сбыт или пересылку, где санкции начинаются от 4 до 20 лет лишения свободы."
          }
        },
        {
          "@type": "Question",
          "name": "Можно ли получить условный срок по ст. 228 УК РФ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "По частям 1 и 2 ст. 228 УК РФ при наличии смягчающих обстоятельств, положительных характеристик и грамотной позиции защиты суды нередко применяют ст. 73 УК РФ (условное осуждение)."
          }
        },
        {
          "@type": "Question",
          "name": "Как проверяется правильность определения веса наркотика?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Адвокат анализирует заключение химической экспертизы: исследовался ли сухой остаток, отделялись ли нейтральные примеси, соответствуют ли погрешности весового оборудования требованиям стандартов."
          }
        }
      ]
    }
  ]
};

  const situations = [
  {
    "title": "Задержание на улице или при проверке авто",
    "desc": "Проведение личного досмотра, досмотра транспортного средства, изъятие свертков без понятых или с нарушением видеозаписи.",
    "impact": "Фиксируем процессуальные нарушения при изъятии, исключаем недопустимые доказательства из материалов дела."
  },
  {
    "title": "Хранение квалифицируют как сбыт (ст. 228.1)",
    "desc": "Следователь вменяет покушение на сбыт только на основании количества свертков или обнаружения весов/фасовочных пакетов.",
    "impact": "Доказываем отсутствие умысла на распространение, переквалифицируем обвинение на ст. 228 УК РФ (хранение)."
  },
  {
    "title": "Провокация и проверочная закупка",
    "desc": "Проведение проверочной закупки сотрудниками правоохранительных органов с признаками подстрекательства и фальсификации.",
    "impact": "Анализируем постановление о проведении ОРМ, доказываем провокационные действия со стороны закупщика."
  },
  {
    "title": "Обыск в квартире или по месту жительства",
    "desc": "Проведение обыска в жилище без судебного решения по постановлению следователя в случаях, не терпящих отлагательства.",
    "impact": "Проверяем законность судебной проверки обыска, соответствие протокола фактическим обстоятельствам."
  }
];
  const checkpoints = [
  {
    "title": "Соблюдение процедуры изъятия и упаковки",
    "desc": "Проверяем целостность первоначальной упаковки, подписи понятых, непрерывность фиксации и передачу эксперту."
  },
  {
    "title": "Заключение физико-химической экспертизы",
    "desc": "Оцениваем методику определения чистого веса вещества, размер (значительный, крупный, особо крупный)."
  },
  {
    "title": "Основания проведения проверочной закупки (ОРД)",
    "desc": "Проверяем наличие зарегистрированной оперативной информации до начала проведения оперативных мероприятий."
  },
  {
    "title": "Цифровые доказательства и переписка",
    "desc": "Оцениваем законность осмотра смартфона, принадлежность аккаунтов и отсутствие признаков постороннего вмешательства."
  },
  {
    "title": "Смывы с рук и срезы ногтевых пластин",
    "desc": "Проверяем процедуру отбора биологических образцов и экспертные выводы о наличии следов наркотических средств."
  },
  {
    "title": "Возможность освобождения по примечанию к ст. 228",
    "desc": "Оцениваем факт добровольной сдачи наркотических средств и активного способствования раскрытию преступления."
  }
];
  const casesData: CaseData[] = [
  {
    "title": "Переквалификация с ч. 4 ст. 228.1 на ч. 2 ст. 228 УК РФ",
    "category": "Наркотики (ст. 228 УК РФ)",
    "problem": "Молодому человеку вменяли покушение на сбыт в крупном размере (от 10 до 20 лет лишения свободы).",
    "action": "Адвокат доказал приобретение вещества исключительно для личного употребления без цели сбыта и распространения.",
    "result": "Суд переквалифицировал действия на хранение (ч. 2 ст. 228 УК РФ) с назначением условного срока наказания."
  },
  {
    "title": "Исключение протокола личного досмотра из доказательств",
    "category": "Процессуальные нарушения",
    "problem": "Вещество было изъято у доверителя сотрудниками ППС без привлечения понятых и без ведения непрерывной видеозаписи.",
    "action": "Заявили мотивированное ходатайство о признании протокола досмотра недопустимым доказательством (ст. 75 УПК РФ).",
    "result": "В связи с недопустимостью ключевого доказательства уголовное дело в отношении доверителя было прекращено."
  },
  {
    "title": "Отказ в аресте и назначение домашнего ареста по ст. 228.1 УК РФ",
    "category": "Мера пресечения",
    "problem": "Следователь настаивал на заключении под стражу в СИЗО студента, впервые привлекаемого к ответственности.",
    "action": "Собрали положительные характеристики, медицинские документы и подтвердили наличие постоянного места жительства.",
    "result": "Суд отклонил ходатайство об аресте и избрал меру пресечения в виде домашнего ареста."
  }
];
  const processSteps: ProcessStep[] = [
  {
    "num": "01",
    "title": "Срочный выезд и конфиденциальная беседа",
    "desc": "Прибываем к задержанному, разъясняем права по ст. 51 Конституции РФ и вырабатываем согласованную позицию."
  },
  {
    "num": "02",
    "title": "Контроль первичных процессуальных действий",
    "desc": "Присутствуем при допросе, освидетельствовании, отборе смывов, вносим возражения и замечания в протоколы."
  },
  {
    "num": "03",
    "title": "Аудит экспертиз и размера вещества",
    "desc": "Назначаем повторную химическую экспертизу при сомнениях в точности определения веса сухого остатка."
  },
  {
    "num": "04",
    "title": "Защита в суде и борьба за мягкий приговор",
    "desc": "Доказываем смягчающие обстоятельства, оспариваем обвинение и добиваемся применения ст. 64 или 73 УК РФ."
  }
];
  const pricingTiers: PricingTier[] = [
  {
    "title": "Первичный выезд и допрос",
    "subtitle": "Срочная помощь при задержании",
    "price": "от 15 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "срочный выезд адвоката в отдел полиции",
        "value": "Да"
      },
      {
        "name": "конфиденциальная встреча с задержанным",
        "value": "Да"
      },
      {
        "name": "участие в первом допросе подозреваемого",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  },
  {
    "title": "Защита на предварительном следствии",
    "subtitle": "Комплексное ведение дела по ст. 228",
    "price": "от 45 000 ₽",
    "popular": true,
    "badgeText": "Востребовано",
    "features": [
      {
        "name": "участие во всех следственных действиях",
        "value": "Да"
      },
      {
        "name": "проверка экспертиз и обжалование нарушений",
        "value": "Да"
      },
      {
        "name": "работа по переквалификации со сбыта на хранение",
        "value": "Да"
      },
      {
        "name": "защита в суде по мере пресечения",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  },
  {
    "title": "Защита в суде первой инстанции",
    "subtitle": "Судебный процесс под ключ",
    "price": "от 55 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "участие во всех судебных заседаниях",
        "value": "Да"
      },
      {
        "name": "допрос понятых, закупщиков и экспертов",
        "value": "Да"
      },
      {
        "name": "исключение недопустимых доказательств",
        "value": "Да"
      },
      {
        "name": "обоснование минимального наказания или ст. 73 УК",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  }
];
  const relatedServices = [
  {
    "title": "Адвокат при задержании и обыске",
    "desc": "Неотложная помощь адвоката при задержании с поличным, личном досмотре и обыске в помещении.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-pri-zaderzhanii-obyske-i-doprose/"
  },
  {
    "title": "Обжалование приговора",
    "desc": "Подача апелляционных и кассационных жалоб на суровые приговоры по делам о наркотиках.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/obzhalovanie-prigovora/"
  },
  {
    "title": "Условно-досрочное освобождение (УДО)",
    "desc": "Подготовка ходатайств об УДО и замене режима для лиц, отбывающих наказание по ст. 228 УК РФ.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/uslovno-dosrochnoe-osvobozhdenie/"
  }
];
  const faqItems = [
  {
    "q": "Что делать, если предлагают признать вину в обмен на подписку о невыезде?",
    "a": "Ни в коем случае не соглашайтесь на признание вины или подписание признательных показаний до консультации с независимым адвокатом. Признание вины в сбыте необратимо ухудшает процессуальное положение."
  },
  {
    "q": "Какая разница между ст. 228 и ст. 228.1 УК РФ?",
    "a": "Статья 228 УК РФ предусматривает ответственность за незаконное приобретение, хранение, перевозку без цели сбыта. Статья 228.1 УК РФ — за производство, сбыт или пересылку, где санкции начинаются от 4 до 20 лет лишения свободы."
  },
  {
    "q": "Можно ли получить условный срок по ст. 228 УК РФ?",
    "a": "По частям 1 и 2 ст. 228 УК РФ при наличии смягчающих обстоятельств, положительных характеристик и грамотной позиции защиты суды нередко применяют ст. 73 УК РФ (условное осуждение)."
  },
  {
    "q": "Как проверяется правильность определения веса наркотика?",
    "a": "Адвокат анализирует заключение химической экспертизы: исследовался ли сухой остаток, отделялись ли нейтральные примеси, соответствуют ли погрешности весового оборудования требованиям стандартов."
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
              <span style={{ color: '#FFFFFF' }}>Адвокат по делам о наркотиках</span>
            </nav>
          }
          superTitle="Уголовное право • ст. 228, 228.1 УК РФ"
          title={
            <span style={{ display: 'block' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                Адвокат по делам о наркотиках
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                защита по ст. 228 УК РФ
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                в Липецке
              </span>
            </span>
          }
          subtitle="Защита подозреваемых и обвиняемых по ст. 228, 228.1 УК РФ. Проверяем законность ОРМ, процедуру изъятия, химическую экспертизу и размер вещества. Связь в рабочее время: Пн–Пт с 09:00 до 18:00."
          primaryCtaText="Обсудить ситуацию"
          primaryCtaLink="#form"
          primaryCtaSubtext={
            <span style={{ display: 'block' }}>
              <span style={{ whiteSpace: 'nowrap' }}>Перезвоним вам в течение 15 минут в рабочее время</span>
            </span>
          }
          trustItems={[
            { text: 'Проверим допустимость протоколов изъятия и досмотра' },
            { text: 'Оценим законность ОРМ и провокации со стороны сотрудников' },
            { text: 'Защитим от необоснованной переквалификации хранения в сбыт' }
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
                <span style={{ display: "inline-block" }}>требуется защита адвоката</span> <br />
                <span style={{ display: "inline-block" }}>по ст. 228 УК РФ</span>
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                В делах о наркотических средствах ключевое значение имеют первые процессуальные часы и соблюдение порядка изъятия.
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
                    Что проверяет адвокат по делам о наркотиках
                  </h3>
                </div>
              </div>

              <p style={{ margin: '0 0 28px 0', fontSize: '15px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, maxWidth: '820px' }}>
                Ключевые точки аудита доказательств стороны обвинения:
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
                  hiddenFields={[{ name: 'page', value: '/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-delam-o-narkotikah/' }]}
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
