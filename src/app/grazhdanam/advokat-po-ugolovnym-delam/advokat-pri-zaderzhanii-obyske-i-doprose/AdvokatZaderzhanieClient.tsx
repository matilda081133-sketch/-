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
  const situations = [
  {
    "tag": "Задержание",
    "title": "Фактическое задержание и доставка в отдел (ст. 91, 92 УПК РФ)",
    "desc": "Защита при составлении протокола задержания, водворении в ИВС и подготовке к судебному заседанию по аресту."
  },
  {
    "tag": "Обыск / Выемка",
    "title": "Проведение обыска в квартире, офисе или автомобиле (ст. 182 УПК РФ)",
    "desc": "Контроль за законностью оснований, непрерывностью наблюдения, изъятием предметов и внесением замечаний."
  },
  {
    "tag": "Допрос свидетеля",
    "title": "Вызов на допрос в качестве свидетеля с риском смены статуса",
    "desc": "Участие адвоката (ч. 5 ст. 189 УПК РФ) для исключения наводящих вопросов и обвинительного уклона."
  },
  {
    "tag": "Допрос подозреваемого",
    "title": "Первый допрос подозреваемого или обвиняемого",
    "desc": "Обязательное предоставление конфиденциальной беседы с адвокатом до начала дачи показаний."
  },
  {
    "tag": "Очная ставка",
    "title": "Проведение очной ставки при наличии противоречий (ст. 192 УПК РФ)",
    "desc": "Подготовка позиции, парирование ложных показаний второго участника и пресечение психологического давления."
  },
  {
    "tag": "Опознание / Эксперимент",
    "title": "Участие в опознании и следственном эксперименте",
    "desc": "Контроль за соблюдением правил внешнего сходства статистов, отсутствием подсказок и условий эксперимента."
  }
];
  const casesData: CaseData[] = [
  {
    "category": "Допрос свидетеля",
    "title": "Предотвращение переквалификации свидетеля в подозреваемого",
    "problem": "Сотрудника компании вызвали на допрос по уголовному делу руководства с целью возложить на него вину за подписание актов.",
    "action": "Адвокат сопровождал допрос, пресек наводящие вопросы следователя и помог дать четкие показания о служебных обязанностях.",
    "result": "Клиент остался в статусе свидетеля, претензии правоохранительных органов были сняты."
  },
  {
    "category": "Обыск в жилье",
    "title": "Исключение протокола обыска из-за отсутствия судебного решения",
    "problem": "Сотрудники полиции провели неотложный обыск в жилом помещении без решения суда и без реальных оснований для неотложности.",
    "action": "Подали жалобу в порядке ст. 125 УПК РФ и доказали суду отсутствие оснований, не терпящих отлагательства.",
    "result": "Суд признал проведение обыска незаконным, все изъятые предметы исключены из материалов дела."
  },
  {
    "category": "Мера пресечения (ст. 108 УПК)",
    "title": "Отказ суда в заключении под стражу по тяжкому преступлению",
    "problem": "Следователь ходатайствовал об аресте задержанного по ч. 3 ст. 159 УК РФ, ссылаясь на тяжесть статьи.",
    "action": "Собрали медицинские документы, подтверждение права собственности на жилье и поручительства работодателя.",
    "result": "Суд отказал в удовлетворении ходатайства следователя и избрал меру пресечения в виде домашнего ареста."
  }
];
  const processSteps: ProcessStep[] = [
  {
    "num": "01",
    "title": "Срочный звонок и первичная оценка",
    "desc": "Уточняем орган, следователя, основание вызова и даем первичные инструкции безопасности."
  },
  {
    "num": "02",
    "title": "Прибытие адвоката и беседа наедине",
    "desc": "Адвокат предъявляет ордер, проводит конфиденциальную беседу и вырабатывает позицию."
  },
  {
    "num": "03",
    "title": "Участие в следственном действии",
    "desc": "Контроль за законностью каждого вопроса, процесса обыска или досмотра."
  },
  {
    "num": "04",
    "title": "Внесение замечаний и дальнейшие шаги",
    "desc": "Фиксация нарушений в протоколе, подача жалоб и защита в суде по мере пресечения."
  }
];
  const pricingTiers: PricingTier[] = [
  {
    "title": "Срочный выезд на следственное действие",
    "subtitle": "Обыск, допрос, очная ставка, выемка",
    "price": "от 15 000 ₽",
    "popular": true,
    "badgeText": "Востребовано",
    "features": [
      {
        "name": "срочный выезд адвоката в рабочее время",
        "value": "Да"
      },
      {
        "name": "конфиденциальная беседа до начала действия",
        "value": "Да"
      },
      {
        "name": "полное сопровождение следственного действия",
        "value": "Да"
      },
      {
        "name": "внесение замечаний в протокол",
        "value": "Да"
      }
    ],
    "buttonText": "Срочный вызов",
    "buttonHref": "#form"
  },
  {
    "title": "Защита при избрании меры пресечения",
    "subtitle": "Судебное заседание по ст. 108 УПК РФ",
    "price": "от 25 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "изучение ходатайства следователя об аресте",
        "value": "Да"
      },
      {
        "name": "срочный сбор документов для домашнего ареста/залога",
        "value": "Да"
      },
      {
        "name": "личное выступление адвоката в суде",
        "value": "Да"
      },
      {
        "name": "апелляционная жалоба при несогласии с арестом",
        "value": "Да"
      }
    ],
    "buttonText": "Выбрать защиту",
    "buttonHref": "#form"
  },
  {
    "title": "Комплексная защита в первые 72 часа",
    "subtitle": "Сопровождение с момента задержания",
    "price": "от 40 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "участие во всех первых следственных действиях",
        "value": "Да"
      },
      {
        "name": "посещение доверителя в ИВС",
        "value": "Да"
      },
      {
        "name": "защита в суде при избрании меры пресечения",
        "value": "Да"
      },
      {
        "name": "подача жалоб на незаконные действия сотрудников",
        "value": "Да"
      }
    ],
    "buttonText": "Обсудить защиту",
    "buttonHref": "#form"
  }
];
  const relatedLinks = [
  {
    "title": "Адвокат по мошенничеству",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-moshennichestvu/"
  },
  {
    "title": "Дела о наркотиках",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-delam-o-narkotikah/"
  },
  {
    "title": "Экономические преступления",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-ekonomicheskim-prestupleniyam/"
  }
];
  const faqItems = [
  {
    "q": "Имею ли я право молчать на допросе?",
    "a": "Статья 51 Конституции защищает от обязанности свидетельствовать против себя, супруга и близких родственников, но не является универсальной заменой подготовки по всем вопросам. Отказ от дачи показаний целесообразен, пока не выяснены статус, суть претензий и имеющиеся доказательства. Однако в дальнейшем мотивированные и последовательные показания могут быть необходимы для защиты, поэтому решение об использовании ст. 51 принимается совместно с адвокатом по каждому конкретному вопросу."
  },
  {
    "q": "Могут ли провести обыск без присутствия адвоката?",
    "a": "Адвокат имеет законное право присутствовать при производстве обыска (ч. 11 ст. 182 УПК РФ). Следователь обязан допустить защитника с момента его прибытия к месту проведения действия."
  },
  {
    "q": "Что делать, если дежурный адвокат склоняет к признанию вины?",
    "a": "Сообщите, что хотите пригласить адвоката по соглашению, и зафиксируйте это ходатайство в протоколе. Отказ от назначенного защитника возможен, но сам по себе не обязателен для дознавателя, следователя или суда. Порядок допуска выбранного адвоката и возможность отложения процессуального действия зависят от стадии дела и требований УПК РФ."
  },
  {
    "q": "Сколько времени длится допрос без перерыва?",
    "a": "Допрос не может длиться непрерывно более 4 часов. После перерыва не менее чем на 1 час допрос может быть продолжен, но общая продолжительность допроса в течение дня не может превышать 8 часов (ст. 187 УПК РФ)."
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
        "@id": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-pri-zaderzhanii-obyske-i-doprose/#breadcrumbs",
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
            "name": "Задержание, обыск и допрос",
            "item": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-pri-zaderzhanii-obyske-i-doprose/"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-pri-zaderzhanii-obyske-i-doprose/#service",
        "name": "Задержание, обыск и допрос в Липецке",
        "description": "Срочное подключение адвоката в рабочее время при вызове, опросе, допросе, обыске, выемке или задержании. Защитим права, исключим давление, проконтролируем составление протокола и выработаем безопасную позицию.",
        "url": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-pri-zaderzhanii-obyske-i-doprose/",
        "provider": { "@id": "https://dejure-help.ru/#organization" },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Липецк и Липецкая область"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-pri-zaderzhanii-obyske-i-doprose/#faq",
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
            <span style={{ color: 'var(--color-text-main)' }}>Задержание, обыск и допрос</span>
          </>
        }
        superTitle="Срочная защита при процессуальных действиях • Липецк"
        title={
          <span style={{ display: 'block', maxWidth: '100%' }}>
            <span style={{ display: 'block' }}>Адвокат при задержании,</span>
            <span style={{ display: 'block' }}>обыске и допросе</span>
            <span style={{ display: 'block' }}>в Липецке</span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Подключим адвоката к текущему или назначенному процессуальному действию: уточним статус и основание, защитим права, зафиксируем нарушения и определим следующий шаг по делу.
          </span>
        }
        primaryCtaText="Обсудить ситуацию с адвокатом"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_cta_advokat_pri_zaderzhanii_obyske_i_doprose"
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

      {/* ═══ СРОЧНЫЙ БЛОК: ЧТО ДЕЛАТЬ В ПЕРВЫЕ МИНУТЫ ═══ */}
      <section className="section" style={{ backgroundColor: 'var(--gradient-cream)', padding: '64px 0', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '36px' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
              Срочная памятка
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
              Что делать в первые минуты: выберите сценарий
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
              При контакте со следственными или оперативными органами ключевая задача — зафиксировать обстоятельства и не ухудшить свое процессуальное положение до прибытия адвоката.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '24px' }}>
            {/* Сценарий 1: Памятка первых действий */}
            <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-primary)', padding: '28px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>
                  Базовые правила
                </span>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 12px 0' }}>
                  Что сделать до звонка адвокату
                </h3>
                <ul style={{ paddingLeft: '18px', margin: '0 0 16px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  <li style={{ marginBottom: '6px' }}>Уточните ФИО, должности сотрудников, орган и документ-основание.</li>
                  <li style={{ marginBottom: '6px' }}>Не оказывайте физического сопротивления; несогласие выражайте словами для внесения в протокол.</li>
                  <li style={{ marginBottom: '6px' }}>Не уничтожайте, не прячьте и не передавайте технику или документы третьим лицам.</li>
                  <li style={{ marginBottom: '6px' }}>Используйте право не свидетельствовать против себя и близких (ст. 51 Конституции РФ).</li>
                  <li>Внимательно читайте каждый протокол перед подписанием и требуйте выдачи копии.</li>
                </ul>
              </div>
              <a href="#form" className="btn btn-primary" style={{ textAlign: 'center', padding: '10px 18px', fontSize: '14px' }}>
                Позвонить адвокату
              </a>
            </div>

            {/* Сценарий 2: Если человека задержали */}
            <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-gold)', padding: '28px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>
                  Ограничение свободы
                </span>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 12px 0' }}>
                  Если человека задержали
                </h3>
                <ul style={{ paddingLeft: '18px', margin: '0 0 16px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  <li style={{ marginBottom: '6px' }}><strong>Что сообщить близким:</strong> фактическое время и место задержания, орган, куда доставили, и состояние здоровья.</li>
                  <li style={{ marginBottom: '6px' }}><strong>Действия адвоката:</strong> выезд в орган, установление статуса, проверка фиксации точного времени ограничения свободы.</li>
                  <li style={{ marginBottom: '6px' }}><strong>Беседа наедине:</strong> проведение конфиденциальной встречи с подзащитным до первого официального допроса.</li>
                  <li><strong>Мера пресечения:</strong> срочный сбор документов (семья, жилье, здоровье) для суда по ст. 108 УПК РФ против ареста в СИЗО.</li>
                </ul>
              </div>
              <a href="#form" className="btn btn-primary" style={{ textAlign: 'center', padding: '10px 18px', fontSize: '14px' }}>
                Помочь задержанному
              </a>
            </div>

            {/* Сценарий 3: Обыск, осмотр или выемка */}
            <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-deep-blue)', padding: '28px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>
                  Следственные действия в помещении
                </span>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 12px 0' }}>
                  Если проводят обыск или выемку
                </h3>
                <ul style={{ paddingLeft: '18px', margin: '0 0 16px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  <li style={{ marginBottom: '6px' }}><strong>Основание:</strong> требуйте предъявления постановления следователя или судебного решения.</li>
                  <li style={{ marginBottom: '6px' }}><strong>Адвокат:</strong> заявите письменное ходатайство о допуске вашего адвоката к участию в обыске.</li>
                  <li style={{ marginBottom: '6px' }}><strong>Понятые и видео:</strong> следите, чтобы сотрудники не расходились по разным комнатам без понятых.</li>
                  <li><strong>Опись изъятого:</strong> требуйте детального описания каждого телефона, компьютера и документа с номерами и упаковкой.</li>
                </ul>
              </div>
              <a href="#form" className="btn btn-primary" style={{ textAlign: 'center', padding: '10px 18px', fontSize: '14px' }}>
                Адвокат при обыске
              </a>
            </div>

            {/* Сценарий 4: Допрос или беседа */}
            <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-primary)', padding: '28px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>
                  Вызов по повестке
                </span>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 12px 0' }}>
                  Если вызвали на допрос или беседу
                </h3>
                <ul style={{ paddingLeft: '18px', margin: '0 0 16px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  <li style={{ marginBottom: '6px' }}><strong>Статус:</strong> уточните, в каком качестве вас вызывают — свидетеля, потерпевшего или подозреваемого.</li>
                  <li style={{ marginBottom: '6px' }}><strong>Право на адвоката:</strong> свидетель и подозреваемый вправе явиться на допрос со своим адвокатом (ст. 189 УПК РФ).</li>
                  <li style={{ marginBottom: '6px' }}><strong>Подготовка:</strong> до явки восстановите события и согласуйте с защитником границы безопасных ответов.</li>
                  <li><strong>Замечания:</strong> адвокат пресечет наводящие вопросы и добьется точной формулировки показаний в протоколе.</li>
                </ul>
              </div>
              <a href="#form" className="btn btn-primary" style={{ textAlign: 'center', padding: '10px 18px', fontSize: '14px' }}>
                Подготовиться к допросу
              </a>
            </div>
          </div>
        </div>
      </section>

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
                  { name: 'source_page', value: 'https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-pri-zaderzhanii-obyske-i-doprose/' },
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
