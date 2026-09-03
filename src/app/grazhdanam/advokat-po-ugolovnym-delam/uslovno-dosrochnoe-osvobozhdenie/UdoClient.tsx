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
          "name": "Условно-досрочное освобождение",
          "item": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/uslovno-dosrochnoe-osvobozhdenie/"
        }
      ]
    },
    {
      "@type": "Service",
      "name": "Условно-досрочное освобождение в Липецке",
      "description": "Помощь адвоката по УДО (ст. 79 УК РФ) и замене наказания (ст. 80 УК РФ) в Липецке и Липецкой области. Сбор документов, снятие взысканий, суд.",
      "url": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/uslovno-dosrochnoe-osvobozhdenie/",
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
          "name": "Какую часть срока нужно отбыть для подачи на УДО?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Не менее 1/3 срока — за преступления небольшой или средней тяжести; не менее 1/2 срока — за тяжкие преступления; не менее 2/3 срока — за особо тяжкие преступления; не менее 3/4 срока — за преступления против половой неприкосновенности несовершеннолетних или связанные с наркотиками."
          }
        },
        {
          "@type": "Question",
          "name": "Чем УДО отличается от замены наказания по ст. 80 УК РФ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "При УДО осужденный полностью освобождается от отбывания наказания под надзор уголовно-исполнительной инспекции. При замене по ст. 80 УК РФ неотбытая часть лишения свободы заменяется другим, более мягким видом наказания (например, принудительными работами), причем право на ст. 80 наступает раньше, чем на УДО."
          }
        },
        {
          "@type": "Question",
          "name": "Можно ли подать на УДО, если не полностью погашен иск потерпевшего?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да. Закон требует принимать меры к возмещению вреда. Если осужденный трудоустроен в колонии, выплачивает по исполнительному листу посильные суммы или родственники частично погашают иск, суд не вправе отказать в УДО только по мотиву неполного погашения."
          }
        },
        {
          "@type": "Question",
          "name": "Через сколько времени можно подать повторное ходатайство об УДО при отказе?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "В случае отказа суда в условно-досрочном освобождении повторное ходатайство может быть подано не ранее чем по истечении 6 месяцев со дня вынесения постановления об отказе (ст. 175 УИК РФ)."
          }
        }
      ]
    }
  ]
};

  const situations = [
  {
    "title": "Наступление формального срока для подачи ходатайства",
    "desc": "Отбытие 1/3, 1/2, 2/3 или 3/4 срока наказания в зависимости от категории тяжести совершенного преступления.",
    "impact": "Проводим аудит личного дела осужденного, собираем недостающие характеристики и справки с воли."
  },
  {
    "title": "Наличие непогашенных взысканий в колонии",
    "desc": "Администрация учреждения наложила дисциплинарные взыскания (выговоры, водворение в ШИЗО), препятствующие УДО.",
    "impact": "Обжалуем незаконные взыскания через прокуратуру по надзору за ИУ или суд, добиваясь их досрочного снятия."
  },
  {
    "title": "Замена неотбытой части наказания более мягким (ст. 80 УК)",
    "desc": "Возможность перевода на принудительные работы (ИЦ), исправительные работы или ограничение свободы раньше срока УДО.",
    "impact": "Оцениваем более выгодный процессуальный маршрут (ст. 80 vs ст. 79 УК РФ) и готовим соответствующее ходатайство."
  },
  {
    "title": "Отказ суда в УДО и необходимость обжалования",
    "desc": "Суд первой инстанции вынес постановление об отказе в удовлетворении ходатайства по формальным или незаконным основаниям.",
    "impact": "Подаем апелляционную жалобу в областной суд либо готовим новое обоснованное ходатайство по истечении 6 месяцев."
  }
];
  const checkpoints = [
  {
    "title": "Поведение за весь период отбывания наказания",
    "desc": "Анализируем динамику: количество поощрений, добросовестное отношение к труду, участие в воспитательных мероприятиях."
  },
  {
    "title": "Возмещение причиненного преступлением ущерба",
    "desc": "Предоставляем документы о добровольном или принудительном погашении исковых требований потерпевших."
  },
  {
    "title": "Гарантии трудоустройства и проживания после освобождения",
    "desc": "Приобщаем гарантийные письма от работодателей о готовности принять на работу и справки о наличии жилья."
  },
  {
    "title": "Мнение потерпевшего и администрации исправительного учреждения",
    "desc": "Проводим работу с потерпевшей стороной для получения согласия или нейтральной позиции по вопросу УДО."
  },
  {
    "title": "Отношение к совершенному деянию и раскаяние",
    "desc": "Формируем позицию о признании вины, искреннем раскаянии и отсутствии риска рецидива."
  },
  {
    "title": "Семейное положение и состояние здоровья",
    "desc": "Приобщаем свидетельства о рождении детей, справки об инвалидности родственников или заболеваниях осужденного."
  }
];
  const casesData: CaseData[] = [
  {
    "title": "Удовлетворение ходатайства об УДО по тяжкой статье",
    "category": "УДО (ст. 79 УК РФ)",
    "problem": "Осужденному по ч. 4 ст. 159 УК РФ колония дала нейтральную характеристику из-за старого снятого выговора.",
    "action": "Адвокат предоставил 8 поощрений, документы о выплате 100% ущерба потерпевшему и гарантийное письмо о трудоустройстве.",
    "result": "Суд удовлетворил ходатайство адвоката, освободив доверителя условно-досрочно на 2 года и 4 месяца раньше срока."
  },
  {
    "title": "Отмена незаконного отказа в УДО в Липецком областном суде",
    "category": "Апелляционное обжалование",
    "problem": "Районный суд отказал в УДО, сославшись исключительно на тяжесть совершенного преступления.",
    "action": "Адвокат подал апелляционную жалобу со ссылкой на Постановление Пленума ВС РФ № 8 о недопустимости отказа по тяжести статьи.",
    "result": "Областной суд отменил постановление первой инстанции и постановил немедленно освободить осужденного."
  },
  {
    "title": "Замена лишения свободы на принудительные работы (ст. 80 УК РФ)",
    "category": "Замена наказания",
    "problem": "До права на УДО оставался 1 год, но право на замену наказания по ст. 80 УК РФ уже наступило.",
    "action": "Подготовили ходатайство о замене оставшейся части наказания принудительными работами с переводом в исправительный центр.",
    "result": "Суд удовлетворил ходатайство, осужденный переведен в ИЦ с возможностью свободного проживания и работы."
  }
];
  const processSteps: ProcessStep[] = [
  {
    "num": "01",
    "title": "Расчет срока и правовой аудит ситуации",
    "desc": "Проверяем отбытую часть срока, категорию преступления, наличие взысканий и размер непогашенного иска."
  },
  {
    "num": "02",
    "title": "Сбор доказательств и документов с воли",
    "desc": "Истребуем гарантийные письма работодателей, справки о месте жительства, составе семьи и медицинские документы."
  },
  {
    "num": "03",
    "title": "Подготовка и подача ходатайства в суд",
    "desc": "Составляем мотивированное ходатайство со ссылками на судебную практику и направляем в суд по месту нахождения ИУ."
  },
  {
    "num": "04",
    "title": "Личное участие в судебном заседании",
    "desc": "Адвокат выезжает в суд, представляет собранные доказательства, парирует возражения прокурора и защищает права осужденного."
  }
];
  const pricingTiers: PricingTier[] = [
  {
    "title": "Анализ материалов и расчет сроков",
    "subtitle": "Оценка перспектив подачи на УДО",
    "price": "от 5 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "точный расчет даты наступления права на УДО/ст. 80",
        "value": "Да"
      },
      {
        "name": "оценка шансов с учетом характеристики и иска",
        "value": "Да"
      },
      {
        "name": "перечень необходимых документов с воли",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  },
  {
    "title": "Подготовка ходатайства и пакета документов",
    "subtitle": "Полное досудебное формирование дела",
    "price": "от 25 000 ₽",
    "popular": true,
    "badgeText": "Востребовано",
    "features": [
      {
        "name": "сбор справок, гарантийных писем и характеристик",
        "value": "Да"
      },
      {
        "name": "составление мотивированного ходатайства об УДО",
        "value": "Да"
      },
      {
        "name": "работа с потерпевшими по вопросам возмещения",
        "value": "Да"
      },
      {
        "name": "контроль прохождения документов в суде",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  },
  {
    "title": "УДО под ключ с участием в суде",
    "subtitle": "Полное ведение процесса в суде",
    "price": "от 40 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "сбор полного пакета доказательств с воли",
        "value": "Да"
      },
      {
        "name": "подача ходатайства в суд по месту отбывания",
        "value": "Да"
      },
      {
        "name": "личное участие адвоката в судебном заседании",
        "value": "Да"
      },
      {
        "name": "обжалование отказа в апелляционной инстанции",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  }
];
  const relatedServices = [
  {
    "title": "Обжалование приговора (апелляция/кассация)",
    "desc": "Пересмотр незаконных и необоснованных приговоров суда с целью отмены или смягчения наказания.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/obzhalovanie-prigovora/"
  },
  {
    "title": "Адвокат по делам о наркотиках (ст. 228)",
    "desc": "Защита и пересмотр приговоров по делам о хранении и сбыте наркотических средств.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-delam-o-narkotikah/"
  },
  {
    "title": "Защита прав осужденных",
    "desc": "Обжалование условий содержания, незаконных взысканий и отказов в медицинской помощи.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/"
  }
];
  const faqItems = [
  {
    "q": "Какую часть срока нужно отбыть для подачи на УДО?",
    "a": "Не менее 1/3 срока — за преступления небольшой или средней тяжести; не менее 1/2 срока — за тяжкие преступления; не менее 2/3 срока — за особо тяжкие преступления; не менее 3/4 срока — за преступления против половой неприкосновенности несовершеннолетних или связанные с наркотиками."
  },
  {
    "q": "Чем УДО отличается от замены наказания по ст. 80 УК РФ?",
    "a": "При УДО осужденный полностью освобождается от отбывания наказания под надзор уголовно-исполнительной инспекции. При замене по ст. 80 УК РФ неотбытая часть лишения свободы заменяется другим, более мягким видом наказания (например, принудительными работами), причем право на ст. 80 наступает раньше, чем на УДО."
  },
  {
    "q": "Можно ли подать на УДО, если не полностью погашен иск потерпевшего?",
    "a": "Да. Закон требует принимать меры к возмещению вреда. Если осужденный трудоустроен в колонии, выплачивает по исполнительному листу посильные суммы или родственники частично погашают иск, суд не вправе отказать в УДО только по мотиву неполного погашения."
  },
  {
    "q": "Через сколько времени можно подать повторное ходатайство об УДО при отказе?",
    "a": "В случае отказа суда в условно-досрочном освобождении повторное ходатайство может быть подано не ранее чем по истечении 6 месяцев со дня вынесения постановления об отказе (ст. 175 УИК РФ)."
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
              <span style={{ color: '#FFFFFF' }}>Условно-досрочное освобождение</span>
            </nav>
          }
          superTitle="Уголовно-исполнительное право • ст. 79 УК РФ"
          title={
            <span style={{ display: 'block' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                Условно-досрочное освобождение
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                адвокат по УДО и ст. 80 УК РФ
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                в Липецке
              </span>
            </span>
          }
          subtitle="Юридическая помощь осужденным и родственникам по вопросам УДО (ст. 79 УК РФ) и замене неотбытой части наказания более мягким видом (ст. 80 УК РФ). Связь в рабочее время: Пн–Пт с 09:00 до 18:00."
          primaryCtaText="Обсудить ситуацию"
          primaryCtaLink="#form"
          primaryCtaSubtext={
            <span style={{ display: 'block' }}>
              <span style={{ whiteSpace: 'nowrap' }}>Перезвоним вам в течение 15 минут в рабочее время</span>
            </span>
          }
          trustItems={[
            { text: 'Рассчитаем точные формальные сроки наступления права на УДО' },
            { text: 'Соберем полный пакет доказательств исправления осужденного' },
            { text: 'Защитим позицию в судебном заседании по месту отбывания наказания' }
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
                <span style={{ display: "inline-block" }}>помощь адвоката</span> <br />
                <span style={{ display: "inline-block" }}>по вопросам УДО</span>
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Грамотно подготовленное ходатайство и доказательственная база существенно повышают вероятность положительного решения суда.
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
                    Что оценивает суд при рассмотрении ходатайства об УДО
                  </h3>
                </div>
              </div>

              <p style={{ margin: '0 0 28px 0', fontSize: '15px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, maxWidth: '820px' }}>
                Факторы, формирующие вывод суда о том, что осужденный не нуждается в полном отбывании наказания:
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
                  hiddenFields={[{ name: 'page', value: '/grazhdanam/advokat-po-ugolovnym-delam/uslovno-dosrochnoe-osvobozhdenie/' }]}
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
