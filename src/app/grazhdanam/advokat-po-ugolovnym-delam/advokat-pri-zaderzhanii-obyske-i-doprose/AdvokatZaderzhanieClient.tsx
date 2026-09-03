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
            "name": "Задержание, обыск и допрос",
            "item": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-pri-zaderzhanii-obyske-i-doprose/"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Задержание, обыск и допрос в Липецке",
        "description": "Срочное подключение адвоката в рабочее время при вызове, опросе, допросе, обыске, выемке или задержании. Защитим права, исключим давление, проконтролируем составление протокола и выработаем безопасную позицию.",
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
    "name": "Имею ли я право молчать на допросе?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Да, в соответствии со статьей 51 Конституции РФ никто не обязан свидетельствовать против себя самого, своего супруга и близких родственников. Отказ от дачи показаний не является доказательством виновности."
    }
  },
  {
    "@type": "Question",
    "name": "Могут ли провести обыск без присутствия адвоката?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Адвокат имеет законное право присутствовать при производстве обыска (ч. 11 ст. 182 УПК РФ). Следователь обязан допустить защитника с момента его прибытия к месту проведения действия."
    }
  },
  {
    "@type": "Question",
    "name": "Что делать, если дежурный адвокат склоняет к признанию вины?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Вы имеете право отказаться от услуг назначенного государством адвоката и потребовать вызова защитника по соглашению. Напишите отказ собственноручно в протоколе."
    }
  },
  {
    "@type": "Question",
    "name": "Сколько времени длится допрос без перерыва?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Допрос не может длиться непрерывно более 4 часов. После перерыва не менее чем на 1 час допрос может быть продолжен, но общая продолжительность допроса в течение дня не может превышать 8 часов (ст. 187 УПК РФ)."
    }
  }
]
      }
    ]
  };

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
  const roles = [
  {
    "role": "Задержанный гражданин",
    "task": "Реализовать право на конфиденциальную беседу с защитником до первого допроса.",
    "btnText": "Срочная защита",
    "btnHref": "#form"
  },
  {
    "role": "Родственник задержанного",
    "task": "Установить местонахождение, заключить соглашение и направить адвоката в орган следствия.",
    "btnText": "Помочь родственнику",
    "btnHref": "#form"
  },
  {
    "role": "Свидетель по вызову",
    "task": "Явиться на следственное действие с адвокатом для защиты от уголовных рисков.",
    "btnText": "Адвокат свидетелю",
    "btnHref": "#form"
  }
];
  const scope = {
  "included": [
    "Срочный выезд адвоката к месту проведения процессуального действия в рабочее время",
    "Конфиденциальная консультация доверителя продолжительностью не менее 2 часов",
    "Личное участие адвоката во всем процессуальном действии от начала до конца",
    "Внесение собственноручных замечаний и возражений в протокол следственного действия"
  ],
  "extra": [
    "Ночные выезды и сопровождение действий за пределами города Липецка",
    "Участие в судебных заседаниях по избранию меры пресечения (арест/домашний арест)",
    "Последующее комплексное ведение уголовного дела на стадии предварительного следствия"
  ]
};
  const matrix = {
  "title": "Статус определяет права и уголовно-правовые риски",
  "subtitle": "Объём процессуальных прав и последствий кардинально зависит от процессуального статуса лица:",
  "items": [
    {
      "title": "Свидетель (ст. 56 УПК РФ)",
      "desc": "Обязан давать показания, но имеет право явиться с адвокатом и отказаться свидетельствовать против себя и близких (ст. 51 Конституции РФ)."
    },
    {
      "title": "Подозреваемый (ст. 46 УПК РФ)",
      "desc": "Имеет право знать, в чем подозревается, получить свидание с адвокатом наедине до допроса, давать показания или отказаться от них."
    },
    {
      "title": "Обвиняемый (ст. 47 УПК РФ)",
      "desc": "Имеет право на ознакомление с постановлением о привлечении, всеми протоколами следственных действий со своим участием."
    },
    {
      "title": "Фиксация нарушений в протоколе",
      "desc": "Все факты давления, отказов в звонке, отсутствия понятых должны быть зафиксированы в протоколе до его подписания."
    },
    {
      "title": "Срок составления протокола задержания",
      "desc": "Протокол должен быть составлен не позднее 3 часов с момента фактического доставления в орган следствия."
    },
    {
      "title": "Отказ от адвоката по назначению",
      "desc": "Задержанный вправе в любой момент заявить мотивированный отказ от дежурного адвоката и потребовать защитника по соглашению."
    }
  ]
};
  const routes = [
  {
    "title": "Сохранение статуса свидетеля",
    "desc": "Грамотные показания в присутствии адвоката предотвращают перевод свидетеля в категорию подозреваемых."
  },
  {
    "title": "Отказ в аресте и мягкая мера пресечения",
    "desc": "Представление суду документов о жилье, семье, здоровье для избрания подписки о невыезде или залога."
  },
  {
    "title": "Исключение протоколов из доказательств (ст. 75 УПК)",
    "desc": "Фиксация грубых нарушений процедуры обыска или допроса для признания полученных улик недопустимыми."
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
    "buttonText": "Уточнить стоимость",
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
    "buttonText": "Уточнить стоимость",
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
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  }
];
  const docsAndDeadlines = {
  "docs": [
    "повестка, уведомление или СМС-сообщение о вызове к следователю;",
    "постановление о производстве обыска или выемки;",
    "протокол задержания подозреваемого (ст. 92 УПК РФ);",
    "копия протокола проведенного следственного действия;",
    "документы, подтверждающие наличие постоянного жилья и семьи (для суда по аресту)."
  ],
  "deadlines": "Срок составления протокола задержания — не более 3 часов с момента доставления. Предельный срок задержания без решения суда — 48 часов (может быть продлен до 72 часов). Рассмотрение ходатайства об аресте в суде — не более 8 часов с момента поступления материалов."
};
  const relatedServices = [
  {
    "title": "Адвокат по мошенничеству (ст. 159)",
    "desc": "Комплексная защита при расследовании уголовных дел о хищениях.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-moshennichestvu/"
  },
  {
    "title": "Адвокат по делам о наркотиках (ст. 228)",
    "desc": "Защита при задержании и досмотре по наркотическим составам.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-delam-o-narkotikah/"
  },
  {
    "title": "Экономические и налоговые преступления",
    "desc": "Защита бизнеса и руководства при обысках и выемках документации.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-ekonomicheskim-prestupleniyam/"
  }
];
  const faqItems = [
  {
    "q": "Имею ли я право молчать на допросе?",
    "a": "Да, в соответствии со статьей 51 Конституции РФ никто не обязан свидетельствовать против себя самого, своего супруга и близких родственников. Отказ от дачи показаний не является доказательством виновности."
  },
  {
    "q": "Могут ли провести обыск без присутствия адвоката?",
    "a": "Адвокат имеет законное право присутствовать при производстве обыска (ч. 11 ст. 182 УПК РФ). Следователь обязан допустить защитника с момента его прибытия к месту проведения действия."
  },
  {
    "q": "Что делать, если дежурный адвокат склоняет к признанию вины?",
    "a": "Вы имеете право отказаться от услуг назначенного государством адвоката и потребовать вызова защитника по соглашению. Напишите отказ собственноручно в протоколе."
  },
  {
    "q": "Сколько времени длится допрос без перерыва?",
    "a": "Допрос не может длиться непрерывно более 4 часов. После перерыва не менее чем на 1 час допрос может быть продолжен, но общая продолжительность допроса в течение дня не может превышать 8 часов (ст. 187 УПК РФ)."
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
            <>
              <Link href="/">Главная</Link><span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
              <Link href="/grazhdanam/">Гражданам</Link><span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
              <Link href="/grazhdanam/advokat-po-ugolovnym-delam/">Адвокат по уголовным делам</Link><span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
              <span style={{ color: 'var(--color-text-main)' }}>Задержание, обыск и допрос</span>
            </>
          }
          superTitle="Срочная защита при процессуальных действиях • Липецк"
          title={
            <span style={{ display: 'block' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                Адвокат при задержании,
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                обыске и допросе
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                в Липецке
              </span>
            </span>
          }
          subtitle="Срочное подключение адвоката в рабочее время при вызове, опросе, допросе, обыске, выемке или задержании. Защитим права, исключим давление, проконтролируем составление протокола и выработаем безопасную позицию."
          primaryCtaText="Обсудить ситуацию"
          primaryCtaLink="#form"
          primaryCtaAnalytics="click_advokat_pri_zaderzhanii_obyske_i_doprose_hero_cta"
          primaryCtaSubtext={
            <span style={{ display: 'block' }}>
              <span style={{ whiteSpace: 'nowrap' }}>Перезвоним вам в течение 15 минут в рабочее время</span>
            </span>
          }
          trustItems={[
            { text: 'Стратегию определяет Аркадий Бобкин — 22 года следственного опыта' },
            { text: 'Защиту и процессуальные действия ведут адвокаты коллегии' },
            { text: 'Фиксируем состав услуг и условия в соглашении до начала работы' }
          ]}
          imageUrl="/images/bobkin.jpg"
          imageObjectPosition="50% -75px"
          imageName="Аркадий Евгеньевич Бобкин"
          imageSubtitle="Куратор практики • Директор, управляющий партнёр ЮК «Де-Юре», более 22 лет следственного опыта"
        />

        {/* 2. Срочный блок: Если вызывают, задержали или проводят обыск */}
        <section style={{ padding: '40px 0', background: 'var(--color-deep-blue)', color: '#FFFFFF', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="container">
            <div style={{ maxWidth: '840px', marginBottom: '24px' }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(22px, 3vw, 28px)', color: '#FFFFFF', margin: '0 0 10px 0', lineHeight: 1.3 }}>
                Памятка первых действий при внезапных действиях правоохранителей
              </h2>
              <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, margin: 0 }}>
                Не давайте показаний без своего адвоката на основании ст. 51 Конституции РФ. Не подписывайте протоколы без прочтения и фиксируйте точное время фактического ограничения свободы.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '20px' }}>
              {[{"name":"Человека задержали","what":"Уточните орган, фамилию следователя, статью и потребуйте реализовать право на звонок близким.","btnText":"Срочный вызов","btnHref":"#form"},{"name":"Пришли с обыском","what":"Требуйте предъявления постановления суда/следователя, присутствия адвоката и участия понятых.","btnText":"Адвокат на обыск","btnHref":"#form"},{"name":"Вызывают на допрос","what":"Не являйтесь без подготовки: согласуйте с адвокатом правовой статус и круг возможных вопросов.","btnText":"Подготовка к допросу","btnHref":"#form"}].map((evt, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderTop: '3px solid var(--color-gold)',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: '16px', fontFamily: 'var(--font-serif)', color: '#FFFFFF', margin: '0 0 8px 0' }}>
                      {evt.name}
                    </h3>
                    <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.5, margin: '0 0 14px 0' }}>
                      {evt.what}
                    </p>
                  </div>
                  <a
                    href={evt.btnHref}
                    className="btn white-btn-custom"
                    style={{ fontSize: '13px', padding: '8px 16px', textAlign: 'center', display: 'block' }}
                  >
                    {evt.btnText}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. С какими ситуациями мы помогаем гражданам (ТИПОВОЙ ШАБЛОН) */}
        <section className="section bg-white" style={{ padding: '80px 0' }}>
          <div className="container">
            <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
              <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>С какими ситуациями</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>мы помогаем гражданам</span>
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
                Оценим фактические обстоятельства, определим срочность и подскажем правильный порядок дальнейших действий.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '28px' }}>
              {situations.map((item, i) => (
                <div
                  key={i}
                  className="hover-lift"
                  style={{
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
                  }}
                >
                  <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.06, pointerEvents: 'none' }}>
                    <svg width="100" height="100" viewBox="0 0 24 24" fill="var(--color-deep-blue)">
                      <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                  </div>

                  {item.tag && (
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
                  )}
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
          </div>
        </section>

        {/* 4. Маршрутизатор по роли */}
        <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)', borderTop: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
              <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Выберите свой статус</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>в текущей ситуации</span>
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Задачи и порядок взаимодействия существенно отличаются для обвиняемых, их родственников и потерпевших.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '24px' }}>
              {roles.map((r, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--color-border)',
                    borderTop: '3px solid var(--color-gold)',
                    padding: '28px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 16px rgba(16, 39, 59, 0.04)'
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>
                      {r.role}
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: '0 0 20px 0' }}>
                      {r.task}
                    </p>
                  </div>
                  <a href={r.btnHref} className="btn btn-primary" style={{ fontSize: '14px', padding: '10px 20px', textAlign: 'center' }}>
                    {r.btnText}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Состав и границы услуги */}
        <section className="section bg-white" style={{ padding: '80px 0', borderTop: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ maxWidth: '780px', marginBottom: '40px', textAlign: 'left' }}>
              <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Что входит в работу,</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>а что оценивается отдельно</span>
              </h2>
            </div>

            <div className="grid grid-2" style={{ gap: '32px' }}>
              <div style={{ backgroundColor: 'var(--color-cream)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', padding: '32px 28px' }}>
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 16px 0' }}>
                  Входит в согласованный этап:
                </h3>
                <ul style={{ margin: 0, paddingLeft: '18px', color: 'var(--color-text-secondary)', fontSize: '14px', lineHeight: 1.7 }}>
                  {scope.included.map((inc, i) => (
                    <li key={i} style={{ marginBottom: '8px' }}>{inc}</li>
                  ))}
                </ul>
              </div>

              <div style={{ backgroundColor: 'var(--color-cream)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-gold)', padding: '32px 28px' }}>
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 16px 0' }}>
                  Требует отдельного согласования:
                </h3>
                <ul style={{ margin: 0, paddingLeft: '18px', color: 'var(--color-text-secondary)', fontSize: '14px', lineHeight: 1.7 }}>
                  {scope.extra.map((ext, i) => (
                    <li key={i} style={{ marginBottom: '8px' }}>{ext}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Аналитическая матрица / ключевые критерии разбора */}
        <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)', borderTop: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ maxWidth: '820px', marginBottom: '48px', textAlign: 'left' }}>
              <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
                {matrix.title}
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                {matrix.subtitle}
              </p>
            </div>

            <div className="grid grid-2" style={{ gap: '24px' }}>
              {matrix.items.map((it, idx) => (
                <div
                  key={idx}
                  className="hover-lift"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--color-border)',
                    borderLeft: '4px solid var(--color-gold)',
                    padding: '24px 20px',
                    boxShadow: '0 2px 10px rgba(16, 39, 59, 0.03)'
                  }}
                >
                  <h3 style={{ fontSize: '16.5px', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>
                    {it.title}
                  </h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    {it.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Возможные правовые маршруты */}
        <section className="section bg-white" style={{ padding: '80px 0', borderTop: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ maxWidth: '780px', marginBottom: '40px', textAlign: 'left' }}>
              <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Возможные правовые</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>маршруты защиты</span>
              </h2>
            </div>

            <div className="grid grid-3" style={{ gap: '24px' }}>
              {routes.map((rt, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--color-cream)',
                    border: '1px solid var(--color-border)',
                    borderTop: '3px solid var(--color-deep-blue)',
                    padding: '28px 22px'
                  }}
                >
                  <h3 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>
                    {rt.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {rt.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Куратор практики */}
        <SpecialistBlock
          title="Куратор практики"
          name="Бобкин Аркадий Евгеньевич"
          position={<>Директор, управляющий партнёр ЮК «Де-Юре»,<br />куратор практики уголовного права</>}
          imageUrl="/images/bobkin.jpg"
          imagePosition="50% -75px"
          profileHref="/specialisty/bobkin-arkadiy-evgenevich/"
          profileText="Подробнее об Аркадии Евгеньевиче Бобкине →"
          description={[
            <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block', lineHeight: 1.6 }}>
              Юрист с 1997 года. Более 22 лет работы в следственных подразделениях налоговой полиции и МВД (следователь по ОВД, начальник следственной части). Определяет генеральную стратегию защиты, проверяет процессуальные уязвимости следствия и координирует работу профильных адвокатов.
            </span>,
            <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
                <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
                <span>Анализ материалов проверки и доказательств обвинения</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
                <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
                <span>Непосредственную защиту ведут адвокаты Коллегии адвокатов «Де-Юре»</span>
              </li>
            </ul>
          ]}
          buttonText="Обсудить ситуацию с куратором"
          buttonHref="#form"
        />

        {/* 9. Примеры из практики */}
        <CasesBlock
          title="Примеры дел из практики"
          showAllLink="/praktika/"
          showAllText="Смотреть все дела"
          showDemoWarning={true}
          cases={casesData}
        />

        {/* 10. Как строится работа */}
        <ProcessBlock
          title="Как строится работа по делу"
          subtitle="Последовательный процесс защиты с фиксацией каждого шага"
          steps={processSteps}
        />

        {/* 11. Стоимость помощи */}
        <PricingBlock
          title="Стоимость помощи"
          subtitle="Фиксируем состав услуг и условия в договоре до начала работы."
          tiers={pricingTiers}
          disclaimer="Стоимость определяется после изучения материалов и обстоятельств дела. Вознаграждение исполнителя не зависит от исхода дела и не включает судебные пошлины и расходы на привлечённых специалистов."
        />

        {/* 12. Документы и сроки */}
        <section className="section bg-white" style={{ padding: '80px 0', borderTop: '1px solid var(--color-border)' }}>
          <div className="container">
            <div className="grid grid-2" style={{ gap: '36px' }}>
              <div style={{ backgroundColor: 'var(--color-cream)', border: '1px solid var(--color-border)', padding: '32px 28px' }}>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0' }}>
                  Что подготовить для консультации:
                </h3>
                <ul style={{ margin: 0, paddingLeft: '18px', color: 'var(--color-text-secondary)', fontSize: '14px', lineHeight: 1.7 }}>
                  {docsAndDeadlines.docs.map((doc, i) => (
                    <li key={i}>{doc}</li>
                  ))}
                </ul>
              </div>

              <div style={{ backgroundColor: 'var(--color-deep-blue)', color: '#FFFFFF', padding: '32px 28px', borderTop: '3px solid var(--color-gold)' }}>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: '#FFFFFF', margin: '0 0 14px 0' }}>
                  Процессуальные сроки и срочность:
                </h3>
                <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.65, margin: 0 }}>
                  {docsAndDeadlines.deadlines}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 13. Смежные услуги направления */}
        <section id="directions" className="section bg-light" style={{ padding: '64px 0', background: 'var(--gradient-cream)', borderTop: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ maxWidth: '780px', marginBottom: '32px', textAlign: 'left' }}>
              <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '14px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Смежные услуги направления</span>
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Если ситуация затрагивает другие составы или процедуры, подключаем смежные услуги практики уголовного права.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '20px' }}>
              {relatedServices.map((dir, i) => (
                <Link key={i} href={dir.link} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                  <div
                    className="card related-service-card hover-lift"
                    style={{
                      height: '100%',
                      minHeight: '180px',
                      padding: '24px',
                      background: 'var(--color-white)',
                      border: '1px solid var(--color-border)',
                      borderTop: '3px solid var(--color-primary)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      cursor: 'pointer'
                    }}
                  >
                    <div>
                      <h3 style={{ margin: '0 0 10px 0', fontSize: '17px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', lineHeight: 1.35 }}>
                        {dir.title}
                      </h3>
                      <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                        {dir.desc}
                      </p>
                    </div>
                    <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '13.5px', fontWeight: 600, marginTop: '16px' }}>
                      <span>Подробнее →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '36px' }}>
              <Link
                href="/grazhdanam/advokat-po-ugolovnym-delam/"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--color-primary)',
                  fontSize: '15px',
                  fontWeight: 600,
                  textDecoration: 'none'
                }}
              >
                <span>Смотреть все услуги практики уголовного права</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* 14. FAQ */}
        <FAQBlock
          superTitle="Вопросы и ответы"
          title=<><span>Ответы на частые</span> <br /><span>вопросы</span></>
          subtitle="Разбираем процедурные нюансы, доказательства и права участников"
          ctaText="Задать свой вопрос"
          ctaLink="#form"
          faqs={faqItems}
        />

        {/* 15. Финальная форма */}
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
                  <span style={{ display: 'block' }}>Обсудите ситуацию</span>{' '}
                  <span style={{ display: 'block' }}>с адвокатом</span>
                </h2>
                <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                  Кратко укажите, что происходит и какие документы есть на руках. В рабочее время свяжемся с вами в течение 15 минут.
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
