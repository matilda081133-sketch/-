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
            "name": "Адвокат по мошенничеству",
            "item": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-moshennichestvu/"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Адвокат по мошенничеству в Липецке",
        "description": "Подключимся на стадии проверки, предварительного расследования или суда. Изучим документы и движение денег, оценим квалификацию, риски и доказательства, после чего предложим стратегию защиты или представительства потерпевшего.",
        "url": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-moshennichestvu/",
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
    "name": "В чём разница между неисполнением договора и мошенничеством?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Для мошенничества (ст. 159 УК РФ) обязателен прямой умысел на хищение, возникший до или в момент завладения имуществом. Обычное неисполнение обязательств из-за коммерческих рисков разрешается в гражданском порядке."
    }
  },
  {
    "@type": "Question",
    "name": "Что делать, если вызывают свидетелем, но вопросы задают обо мне?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Вы вправе явиться на допрос с адвокатом (ч. 5 ст. 189 УПК РФ) и не свидетельствовать против себя на основании ст. 51 Конституции РФ. Адвокат проконтролирует соблюдение процессуальных прав."
    }
  },
  {
    "@type": "Question",
    "name": "Можно ли вернуть деньги потерпевшему и закрыть дело?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "По статьям небольшой и средней тяжести при первичном привлечении возможно прекращение дела за примирением сторон (ст. 25 УПК РФ, ст. 76 УК РФ) при полном возмещении ущерба."
    }
  },
  {
    "@type": "Question",
    "name": "Как влияет размер ущерба на наказание?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Размер ущерба определяет часть ст. 159 УК РФ: значительный (от 10 тыс. руб. по частям 2), крупный (от 250 тыс. руб. или 4,5 млн по бизнесу), особо крупный (от 1 млн руб. или 18 млн по бизнесу)."
    }
  }
]
      }
    ]
  };

  const situations = [
  {
    "tag": "Договорный спор",
    "title": "Договорный конфликт стал уголовной проверкой",
    "desc": "Контрагент считает, что деньги или товар были получены без намерения исполнить обязательство."
  },
  {
    "tag": "Группа лиц",
    "title": "Вменяют участие в группе",
    "desc": "Следствие связывает действия нескольких лиц и предполагает общий умысел, хотя роли и осведомлённость различались."
  },
  {
    "tag": "Банковские счета",
    "title": "Проверяют банковские операции",
    "desc": "Запрашивают выписки, назначение платежей, доступ к картам, электронным средствам платежа или компьютерной информации."
  },
  {
    "tag": "Спорный ущерб",
    "title": "Спорят о размере ущерба",
    "desc": "Сумма влияет на квалификацию; расчёт может включать спорные операции, возвраты или имущество с неверной стоимостью."
  },
  {
    "tag": "Обыск и изъятие",
    "title": "Провели обыск и изъяли технику",
    "desc": "Нужно проверить документы, протокол, перечень изъятого и влияние цифровых данных на позицию."
  },
  {
    "tag": "Риск смены статуса",
    "title": "Вызывают как свидетеля, но вопросы о Ваших действиях",
    "desc": "Формальный статус может не отражать фактический риск; право на адвоката возникает и при проверке сообщения."
  }
];
  const roles = [
  {
    "role": "Меня проверяют / обвиняют",
    "task": "Не допустить необдуманной позиции; оценить состав, умысел, ущерб, роль и доказательства.",
    "btnText": "Нужна защита",
    "btnHref": "#form"
  },
  {
    "role": "Ищу адвоката для близкого",
    "task": "Установить орган, место, статус и ближайшее действие; организовать контакт с адвокатом.",
    "btnText": "Помочь близкому",
    "btnHref": "#form"
  },
  {
    "role": "Я пострадал от мошенничества",
    "task": "Зафиксировать доказательства, добиться процессуальных решений и работать над возмещением.",
    "btnText": "Защитить права потерпевшего",
    "btnHref": "/grazhdanam/advokat-po-ugolovnym-delam/zashchita-poterpevshego/"
  }
];
  const scope = {
  "included": [
    "Изучение переданных материалов и конфиденциальная консультация",
    "Письменная или устная стратегия по текущей стадии",
    "Подготовка предусмотренных договором ходатайств и жалоб",
    "Участие адвоката в согласованном количестве действий или заседаний"
  ],
  "extra": [
    "Срочное участие в отдельном следственном действии и выезд за пределы Липецка",
    "Экономическое, бухгалтерское, компьютерное исследование и заключение специалиста",
    "Апелляция, кассация, УДО и иные самостоятельные стадии после текущего поручения"
  ]
};
  const matrix = {
  "title": "Мошенничество или гражданско-правовой спор",
  "subtitle": "Для статьи 159 УК РФ принципиально исследуется направленность умысла, способ завладения и доказательства намерения исполнить обязательство:",
  "items": [
    {
      "title": "Переговоры до передачи имущества",
      "desc": "Показывают, какая информация сообщалась и могла ли она вводить контрагента в заблуждение."
    },
    {
      "title": "Реальные действия по исполнению",
      "desc": "Закупки, подрядчики, частичное исполнение и переписка восстанавливают действительный ход сделки."
    },
    {
      "title": "Движение денег и имущества",
      "desc": "Важно установить назначение операций, конечных получателей, возвраты и связь платежей с обязательством."
    },
    {
      "title": "Момент возникновения умысла",
      "desc": "Для ст. 159 УК РФ принципиально, существовал ли умысел до получения имущества или возник в ходе спора."
    },
    {
      "title": "Роль каждого участника",
      "desc": "Совместная работа или знакомство сами по себе не доказывают общий преступный умысел и распределение ролей."
    },
    {
      "title": "Размер и характер ущерба",
      "desc": "Расчёт должен опираться на фактические операции, стоимость имущества и исключать надуманные суммы."
    }
  ]
};
  const routes = [
  {
    "title": "Защита до возбуждения дела",
    "desc": "Анализируем запросы и документы при доследственной проверке, готовим участие в объяснениях, представляем материалы и добиваемся отказа в возбуждении дела."
  },
  {
    "title": "Защита на предварительном расследовании",
    "desc": "Проверяем обоснованность обвинения, участвуем в следственных действиях, заявляем ходатайства и жалобы, работаем с квалификацией и мерой пресечения."
  },
  {
    "title": "Защита в суде",
    "desc": "Формируем судебную позицию, участвуем в исследовании доказательств, допросах свидетелей и прениях сторон для справедливого решения."
  }
];
  const casesData: CaseData[] = [
  {
    "category": "ст. 159 УК РФ",
    "title": "Отказ в возбуждении уголовного дела по спору о поставке",
    "problem": "Контрагент подал заявление о мошенничестве, утверждая, что клиент умышленно не собирался поставлять товар.",
    "action": "Собрали переписку, подтверждения оплаты сырья и логистические накладные. Доказали хозяйственный характер задержки.",
    "result": "Следствие вынесло постановление об отказе в возбуждении уголовного дела."
  },
  {
    "category": "ст. 159 ч. 4 УК РФ",
    "title": "Исключение квалифицирующего признака совершения преступления группой",
    "problem": "Клиенту вменялось хищение в составе организованной группы с завышенным размером ущерба.",
    "action": "Провели аудит финансовых потоков, разграничили действия участников и доказали отсутствие предварительного сговора.",
    "result": "Дело переквалифицировано на менее тяжкую часть, мера пресечения сохранена без заключения под стражу."
  },
  {
    "category": "ст. 159 УК РФ",
    "title": "Прекращение уголовного дела в суде в связи с примирением сторон",
    "problem": "Уголовное дело о мошенничестве направлено в суд. Клиент признавал факт причинения вреда, но не соглашался с размером.",
    "action": "Провели переговоры с потерпевшим, согласовали реальный размер компенсации, оформили возмещение и подготовили ходатайство.",
    "result": "Суд прекратил уголовное дело в связи с примирением сторон и полным заглаживанием вреда."
  }
];
  const processSteps: ProcessStep[] = [
  {
    "num": "01",
    "title": "Первичный правовой анализ",
    "desc": "Уточняем статус, стадию, врученные документы, проверяем отсутствие конфликта интересов."
  },
  {
    "num": "02",
    "title": "Конфиденциальная консультация",
    "desc": "Разбираем фактическую сторону, движение средств, переписку и формируем позицию."
  },
  {
    "num": "03",
    "title": "Вступление адвоката в дело",
    "desc": "Оформляем соглашение и ордер, запрашиваем документы, участвуем в процессуальных действиях."
  },
  {
    "num": "04",
    "title": "Защита и процессуальный контроль",
    "desc": "Подаём ходатайства, привлекаем экспертов, обжалуем нарушения и защищаем интересы в суде."
  }
];
  const pricingTiers: PricingTier[] = [
  {
    "title": "Первичный анализ и консультация",
    "subtitle": "Оценка рисков и документов",
    "price": "от 5 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "правовой анализ ситуации и документов",
        "value": "Да"
      },
      {
        "name": "определение рисков и плана первых действий",
        "value": "Да"
      },
      {
        "name": "конфиденциальная очная консультация",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  },
  {
    "title": "Участие в следственном действии",
    "subtitle": "Допрос, обыск, очная ставка",
    "price": "от 15 000 ₽",
    "popular": true,
    "badgeText": "Востребовано",
    "features": [
      {
        "name": "подготовка правовой позиции доверителя",
        "value": "Да"
      },
      {
        "name": "личное участие адвоката в действии",
        "value": "Да"
      },
      {
        "name": "внесение замечаний в протокол",
        "value": "Да"
      },
      {
        "name": "подготовка неотложных ходатайств",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  },
  {
    "title": "Комплексная защита на стадии",
    "subtitle": "Проверка, следствие или суд",
    "price": "от 45 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "полное ведение стадии под ключ",
        "value": "Да"
      },
      {
        "name": "участие во всех следственных действиях",
        "value": "Да"
      },
      {
        "name": "сбор доказательств и привлечение экспертов",
        "value": "Да"
      },
      {
        "name": "подготовка жалоб и позиции в суде",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  }
];
  const docsAndDeadlines = {
  "docs": [
    "повестки, запросы, требования или постановления должностных лиц;",
    "протоколы проведённых обысков, выемок, допросов или задержания;",
    "договоры, спецификации, акты приёма-передачи и первичные накладные;",
    "банковские выписки, платёжные поручения и финансовые документы;",
    "деловую переписку (электронная почта, мессенджеры, претензии)."
  ],
  "deadlines": "Доследственная проверка проводится в срок от 3 до 30 суток (ст. 144 УПК РФ). Предварительное следствие длится от 2 месяцев с возможностью продления. Срок обжалования приговора в апелляционном порядке составляет 15 суток со дня провозглашения."
};
  const relatedServices = [
  {
    "title": "Экономические и налоговые преступления",
    "desc": "Защита руководителей и бухгалтеров при проверках бизнеса, налоговых и корпоративных расследованиях.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-ekonomicheskim-prestupleniyam/"
  },
  {
    "title": "Адвокат при задержании, обыске и допросе",
    "desc": "Срочное подключение адвоката в рабочее время для участия в неотложных процессуальных действиях.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-pri-zaderzhanii-obyske-i-doprose/"
  },
  {
    "title": "Защита прав потерпевшего",
    "desc": "Представительство потерпевших от мошенничества, подача гражданского иска и возмещение ущерба.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/zashchita-poterpevshego/"
  }
];
  const faqItems = [
  {
    "q": "В чём разница между неисполнением договора и мошенничеством?",
    "a": "Для мошенничества (ст. 159 УК РФ) обязателен прямой умысел на хищение, возникший до или в момент завладения имуществом. Обычное неисполнение обязательств из-за коммерческих рисков разрешается в гражданском порядке."
  },
  {
    "q": "Что делать, если вызывают свидетелем, но вопросы задают обо мне?",
    "a": "Вы вправе явиться на допрос с адвокатом (ч. 5 ст. 189 УПК РФ) и не свидетельствовать против себя на основании ст. 51 Конституции РФ. Адвокат проконтролирует соблюдение процессуальных прав."
  },
  {
    "q": "Можно ли вернуть деньги потерпевшему и закрыть дело?",
    "a": "По статьям небольшой и средней тяжести при первичном привлечении возможно прекращение дела за примирением сторон (ст. 25 УПК РФ, ст. 76 УК РФ) при полном возмещении ущерба."
  },
  {
    "q": "Как влияет размер ущерба на наказание?",
    "a": "Размер ущерба определяет часть ст. 159 УК РФ: значительный (от 10 тыс. руб. по частям 2), крупный (от 250 тыс. руб. или 4,5 млн по бизнесу), особо крупный (от 1 млн руб. или 18 млн по бизнесу)."
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
              <span style={{ color: 'var(--color-text-main)' }}>Адвокат по мошенничеству</span>
            </>
          }
          superTitle="Защита по ст. 159 УК РФ • Липецк и область"
          title={
            <span style={{ display: 'block' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                Адвокат по мошенничеству
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                защита по ст. 159 УК РФ
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                в Липецке
              </span>
            </span>
          }
          subtitle="Подключимся на стадии проверки, предварительного расследования или суда. Изучим документы и движение денег, оценим квалификацию, риски и доказательства, после чего предложим стратегию защиты или представительства потерпевшего."
          primaryCtaText="Обсудить ситуацию"
          primaryCtaLink="#form"
          primaryCtaAnalytics="click_advokat_po_moshennichestvu_hero_cta"
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
                Если Вас вызывают на объяснение, допрос или проводят обыск
              </h2>
              <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, margin: 0 }}>
                Не пытайтесь срочно согласовать версии с другими участниками, удалять переписку или исправлять документы. Сообщите адвокату, кто и куда Вас вызывает, какие документы предъявлены и когда должно состояться действие.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '20px' }}>
              {[{"name":"Вызов на объяснение или допрос","what":"Орган, должностное лицо, время явки, текущий статус, фото повестки.","btnText":"Обсудить вызов","btnHref":"#form"},{"name":"Обыск или выемка","what":"Адрес, орган, кто присутствует, предъявлен ли документ, какие действия начались.","btnText":"Адвокат при обыске","btnHref":"/grazhdanam/advokat-po-ugolovnym-delam/advokat-pri-zaderzhanii-obyske-i-doprose/"},{"name":"Задержание","what":"ФИО, предполагаемое место нахождения, орган, известная статья, кто сообщил.","btnText":"Адвокат при задержании","btnHref":"/grazhdanam/advokat-po-ugolovnym-delam/advokat-pri-zaderzhanii-obyske-i-doprose/"}].map((evt, idx) => (
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

        {/* 3. Ситуации, в которых нужна помощь */}
        <section className="section bg-white" style={{ padding: '80px 0' }}>
          <div className="container">
            <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
              <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
                <span style={{ display: "inline-block" }}>Ситуации, в которых</span> <br /><span style={{ display: "inline-block" }}>необходима помощь</span> <br /><span style={{ display: "inline-block" }}>адвоката</span>
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Оценим фактические обстоятельства, определим срочность и предложим оптимальный алгоритм действий.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '24px' }}>
              {situations.map((sit, idx) => (
                <div
                  key={idx}
                  className="hover-lift"
                  style={{
                    padding: '30px 24px',
                    background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                    border: '1px solid var(--color-border)',
                    borderTop: '3px solid var(--color-primary)',
                    boxShadow: '0 4px 16px rgba(16, 39, 59, 0.04)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  {sit.tag && (
                    <div style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: 'var(--color-gold)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginBottom: '10px',
                      background: 'rgba(193, 160, 102, 0.1)',
                      padding: '3px 8px',
                      alignSelf: 'flex-start'
                    }}>
                      {sit.tag}
                    </div>
                  )}
                  <h3 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--color-deep-blue)', lineHeight: 1.35, margin: '0 0 10px 0' }}>
                    {sit.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    {sit.desc}
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
                <span style={{ display: "inline-block" }}>Выберите свой статус</span> <br /><span style={{ display: "inline-block" }}>в текущей ситуации</span>
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
                <span style={{ display: "inline-block" }}>Что входит в работу,</span> <br /><span style={{ display: "inline-block" }}>а что оценивается отдельно</span>
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
                <span style={{ display: "inline-block" }}>Возможные правовые</span> <br /><span style={{ display: "inline-block" }}>маршруты защиты</span>
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
                <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>Смежные услуги направления</span>
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
                  hiddenFields={[{ name: 'page', value: '/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-moshennichestvu/' }]}
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
