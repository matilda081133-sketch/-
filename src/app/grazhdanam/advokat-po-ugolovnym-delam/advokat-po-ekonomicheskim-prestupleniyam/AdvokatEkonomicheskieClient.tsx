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
            "name": "Экономические преступления",
            "item": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-ekonomicheskim-prestupleniyam/"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Экономические преступления в Липецке",
        "description": "Личная защита директоров, учредителей и главных бухгалтеров при доследственных проверках УЭБиПК, налоговых расследованиях, обысках, допросах и в суде. Анализируем первичные документы, разделяем бизнес-риски и уголовный состав.",
        "url": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-ekonomicheskim-prestupleniyam/",
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
    "name": "Могут ли возбудить уголовное дело по налогам без решения ФНС?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "С 2022 года уголовные дела по ст. 198–199.2 УК РФ возбуждаются только по материалам налоговых органов, направленным следователю после истечения срока добровольной уплаты недоимки."
    }
  },
  {
    "@type": "Question",
    "name": "Как избежать уголовной ответственности директору по ст. 199 УК РФ?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Лицо, впервые совершившее преступление по ст. 198–199.1 УК РФ, освобождается от уголовной ответственности, если полностью уплатило недоимку, пени и штрафы в бюджет (ст. 76.1 УК РФ)."
    }
  },
  {
    "@type": "Question",
    "name": "Имеют ли право следователи изымать рабочие серверы компании?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "В соответствии со ст. 164.1 УПК РФ при расследовании экономических преступлений изъятие электронных носителей информации допускается только в исключительных случаях с обязательным копированием данных законному владельцу."
    }
  },
  {
    "@type": "Question",
    "name": "Несет ли ответственность главный бухгалтер за решения директора?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Бухгалтер несет ответственность только при доказанности прямого умысла и совместного сговора на совершение преступления. Выполнение прямых распоряжений руководителя без корыстного умысла состава преступления не образует."
    }
  }
]
      }
    ]
  };

  const situations = [
  {
    "tag": "Налоги",
    "title": "Уклонение от уплаты налогов (ст. 198, 199 УК РФ)",
    "desc": "Оценка материалов налоговой проверки, обоснованности дробления бизнеса, фиктивности контрагентов и расчет недоимки."
  },
  {
    "tag": "Банкротство",
    "title": "Преднамеренное и фиктивное банкротство (ст. 195, 196 УК РФ)",
    "desc": "Анализ сделок по отчуждению активов, финансово-экономической экспертизы признаков неплатежеспособности."
  },
  {
    "tag": "Растрата / Присвоение",
    "title": "Присвоение или растрата вверенного имущества (ст. 160 УК РФ)",
    "desc": "Разграничение служебных полномочий, расходования средств в интересах бизнеса и корыстного умысла."
  },
  {
    "tag": "Полномочия",
    "title": "Злоупотребление полномочиями руководителем (ст. 201 УК РФ)",
    "desc": "Оценка одобрения сделок учредителями, наступления тяжких последствий и соблюдения устава компании."
  },
  {
    "tag": "Легализация",
    "title": "Легализация (отмывание) денежных средств (ст. 174, 174.1 УК РФ)",
    "desc": "Проверка предикатного преступления, экономической обоснованности финансовых цепочек и фиктивности расчётов."
  },
  {
    "tag": "Кредиты / Субсидии",
    "title": "Незаконное получение кредита или субсидий (ст. 176, 159.2 УК РФ)",
    "desc": "Анализ предоставленных балансов, целевого использования выделенных бюджетных средств и мер поддержки."
  }
];
  const roles = [
  {
    "role": "Генеральный директор",
    "task": "Защита от личной уголовной ответственности, доказывание добросовестности управленческих решений.",
    "btnText": "Защита директора",
    "btnHref": "#form"
  },
  {
    "role": "Главный бухгалтер",
    "task": "Исключение признаков сговора, подтверждение выполнения профессиональных обязанностей без умысла.",
    "btnText": "Защита бухгалтера",
    "btnHref": "#form"
  },
  {
    "role": "Учредитель / Собственник",
    "task": "Защита активов компании от необоснованного ареста, контроль действий нанятого руководства.",
    "btnText": "Защита собственника",
    "btnHref": "#form"
  }
];
  const scope = {
  "included": [
    "Анализ бухгалтерской отчетности, актов налоговых проверок и договоров",
    "Личное участие адвоката во всех следственных действиях и допросах",
    "Подготовка ходатайств о назначении судебно-бухгалтерских и оценочных экспертиз",
    "Защита интересов руководства в судебных заседаниях"
  ],
  "extra": [
    "Привлечение независимых аудиторов и специалистов по финансово-экономической экспертизе",
    "Комплексный правовой аудит холдинговых структур и цепочек контрагентов",
    "Снятие арестов со счетов в рамках арбитражных и гражданских процессов"
  ]
};
  const matrix = {
  "title": "Что требует обязательного доказывания по экономическим делам",
  "subtitle": "Привлечение к уголовной ответственности предпринимателя недопустимо без доказывания прямого корыстного умысла и реального размера ущерба:",
  "items": [
    {
      "title": "Реальность хозяйственных операций",
      "desc": "Наличие первичных документов, товарных накладных, путевых листов и подтверждение фактической поставки."
    },
    {
      "title": "Прямой умысел на преступление",
      "desc": "Разграничение предпринимательского риска, ошибок менеджмента и заранее спланированного хищения."
    },
    {
      "title": "Точный расчет размера ущерба / недоимки",
      "desc": "Исключение из расчета реальных расходов бизнеса, уплаченных налогов и взаимных зачетов."
    },
    {
      "title": "Роль и полномочия конкретного лица",
      "desc": "Проверка должностных инструкций, доверенностей, права подписи и использования ЭЦП."
    },
    {
      "title": "Особый порядок возбуждения по налогам",
      "desc": "Дела по ст. 198–199 УК РФ возбуждаются только по материалам налоговых органов при неуплате недоимки в срок."
    },
    {
      "title": "Прекращение дела при возмещении ущерба",
      "desc": "Возможность освобождения от ответственности по ст. 76.1 УК РФ при полной оплате недоимки, штрафов и пеней."
    }
  ]
};
  const routes = [
  {
    "title": "Отказ в возбуждении дела на стадии проверки",
    "desc": "Представление аудиторского заключения и первичных документов, доказывающих законность хозяйственной деятельности."
  },
  {
    "title": "Освобождение от ответственности по ст. 76.1 УК РФ",
    "desc": "Полная уплата налоговой недоимки или возмещение ущерба бюджету для прекращения уголовного преследования."
  },
  {
    "title": "Переквалификация и прекращение за отсутствием состава",
    "desc": "Исключение квалифицирующих признаков группы лиц, особо крупного ущерба и доказывание отсутствия умысла."
  }
];
  const casesData: CaseData[] = [
  {
    "category": "ст. 199 ч. 2 УК РФ",
    "title": "Прекращение уголовного дела по налоговому составу",
    "problem": "Руководителю предприятия вменяли уклонение от уплаты НДС и налога на прибыль на сумму свыше 45 млн рублей.",
    "action": "Провели повторную финансово-экономическую экспертизу, уточнили расходы по реальным сделкам и снизили размер претензий.",
    "result": "После уплаты скорректированной суммы недоимки дело прекращено по нереабилитирующему основанию без судимости."
  },
  {
    "category": "ст. 160 ч. 4 УК РФ",
    "title": "Оправдание директора по обвинению в растрате средств компании",
    "problem": "Учредитель обвинил наемного директора в растрате 12 млн рублей при закупке производственного оборудования.",
    "action": "Доказали экономическую целесообразность закупки, соответствие рыночным ценам и одобрение сделки советом директоров.",
    "result": "Суд вынес оправдательный приговор за отсутствием в деянии состава преступления."
  },
  {
    "category": "ст. 196 УК РФ",
    "title": "Отказ в возбуждении дела о преднамеренном банкротстве",
    "problem": "Конкурсный управляющий подал заявление в полицию о выводе активов перед процедурой банкротства.",
    "action": "Представили экономический анализ ухудшения конъюнктуры рынка и доказали отсутствие умысла на банкротство.",
    "result": "Вынесено постановление об отказе в возбуждении уголовного дела."
  }
];
  const processSteps: ProcessStep[] = [
  {
    "num": "01",
    "title": "Аудит документов и финансовых потоков",
    "desc": "Анализируем первичные бухгалтерские документы, договоры и выписки по расчетным счетам."
  },
  {
    "num": "02",
    "title": "Подготовка персонала к допросам",
    "desc": "Инструктаж сотрудников, генерального директора и главного бухгалтера о процессуальных правах."
  },
  {
    "num": "03",
    "title": "Финансово-экономическая экспертиза",
    "desc": "Привлечение независимых специалистов для опровержения необоснованных расчетов следствия."
  },
  {
    "num": "04",
    "title": "Защита в суде и снятие арестов",
    "desc": "Участие в судебном следствии, прениях и разблокировка производственных активов компании."
  }
];
  const pricingTiers: PricingTier[] = [
  {
    "title": "Правовой аудит материалов проверки",
    "subtitle": "Оценка налоговых актов и рисков",
    "price": "от 15 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "анализ актов проверок и требований УЭБиПК",
        "value": "Да"
      },
      {
        "name": "оценка рисков уголовной ответственности",
        "value": "Да"
      },
      {
        "name": "выработка стратегии защиты компании",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  },
  {
    "title": "Защита руководства на следствии",
    "subtitle": "Комплексное ведение уголовного дела",
    "price": "от 60 000 ₽",
    "popular": true,
    "badgeText": "Востребовано",
    "features": [
      {
        "name": "участие во всех следственных действиях",
        "value": "Да"
      },
      {
        "name": "судебно-бухгалтерская экспертиза",
        "value": "Да"
      },
      {
        "name": "обжалование ареста счетов и имущества",
        "value": "Да"
      },
      {
        "name": "ознакомление со всеми материалами дела",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  },
  {
    "title": "Защита в суде первой инстанции",
    "subtitle": "Судебное следствие по экономическому делу",
    "price": "от 60 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "представление позиции и допрос экспертов",
        "value": "Да"
      },
      {
        "name": "ходатайства об исключении доказательств",
        "value": "Да"
      },
      {
        "name": "применение ст. 76.1 УК РФ при возмещении",
        "value": "Да"
      },
      {
        "name": "выступление в судебных прениях",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  }
];
  const docsAndDeadlines = {
  "docs": [
    "акты и решения выездных или камеральных налоговых проверок;",
    "требования и запросы сотрудников УЭБиПК и следственных органов;",
    "протоколы проведенных обысков, выемок и описи изъятых документов/серверов;",
    "договоры, первичные бухгалтерские документы (УПД, накладные, акты);",
    "банковские выписки и аудиторские заключения."
  ],
  "deadlines": "Срок доследственной проверки сообщений об экономических преступлениях — до 30 суток. Срок следствия по сложным экономическим делам составляет от 2 месяцев до года и более. Срок апелляционного обжалования судебного решения — 15 суток."
};
  const relatedServices = [
  {
    "title": "Адвокат по мошенничеству (ст. 159)",
    "desc": "Защита по обвинениям в хищении денежных средств и мошенничестве в сфере бизнеса.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-moshennichestvu/"
  },
  {
    "title": "Адвокат по должностным преступлениям",
    "desc": "Защита по делам о превышении полномочий, взятках и коммерческом подкупе.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-dolzhnostnym-prestupleniyam-i-vzyatkam/"
  },
  {
    "title": "Адвокат при задержании, обыске и допросе",
    "desc": "Срочный выезд адвоката при обысках в офисе и на производственных объектах.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-pri-zaderzhanii-obyske-i-doprose/"
  }
];
  const faqItems = [
  {
    "q": "Могут ли возбудить уголовное дело по налогам без решения ФНС?",
    "a": "С 2022 года уголовные дела по ст. 198–199.2 УК РФ возбуждаются только по материалам налоговых органов, направленным следователю после истечения срока добровольной уплаты недоимки."
  },
  {
    "q": "Как избежать уголовной ответственности директору по ст. 199 УК РФ?",
    "a": "Лицо, впервые совершившее преступление по ст. 198–199.1 УК РФ, освобождается от уголовной ответственности, если полностью уплатило недоимку, пени и штрафы в бюджет (ст. 76.1 УК РФ)."
  },
  {
    "q": "Имеют ли право следователи изымать рабочие серверы компании?",
    "a": "В соответствии со ст. 164.1 УПК РФ при расследовании экономических преступлений изъятие электронных носителей информации допускается только в исключительных случаях с обязательным копированием данных законному владельцу."
  },
  {
    "q": "Несет ли ответственность главный бухгалтер за решения директора?",
    "a": "Бухгалтер несет ответственность только при доказанности прямого умысла и совместного сговора на совершение преступления. Выполнение прямых распоряжений руководителя без корыстного умысла состава преступления не образует."
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
              <span style={{ color: 'var(--color-text-main)' }}>Экономические преступления</span>
            </>
          }
          superTitle="Экономические и налоговые составы УК РФ • Липецк"
          title={
            <span style={{ display: 'block' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                Адвокат по экономическим
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                и налоговым преступлениям
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                в Липецке
              </span>
            </span>
          }
          subtitle="Личная защита директоров, учредителей и главных бухгалтеров при доследственных проверках УЭБиПК, налоговых расследованиях, обысках, допросах и в суде. Анализируем первичные документы, разделяем бизнес-риски и уголовный состав."
          primaryCtaText="Обсудить ситуацию"
          primaryCtaLink="#form"
          primaryCtaAnalytics="click_advokat_po_ekonomicheskim_prestupleniyam_hero_cta"
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
                Срочные действия при обыске, выемке или проверке УЭБиПК
              </h2>
              <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, margin: 0 }}>
                Не отдавайте пароли от серверов без протокола, фиксируйте перечень изымаемых электронных носителей (ст. 164.1 УПК РФ) и требуйте участия адвоката.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '20px' }}>
              {[{"name":"Обыск в офисе или дома","what":"Контроль за изъятием серверов, документации 1С и внесение замечаний в протокол.","btnText":"Адвокат при обыске","btnHref":"/grazhdanam/advokat-po-ugolovnym-delam/advokat-pri-zaderzhanii-obyske-i-doprose/"},{"name":"Вызов на опрос по 144 УПК","what":"Подготовка правовой позиции руководства и сотрудников до дачи первых объяснений.","btnText":"Обсудить вызов","btnHref":"#form"},{"name":"Блокировка счетов / Арест имущества","what":"Обжалование незаконных обеспечительных мер и арестов имущества юридического лица.","btnText":"Снять арест","btnHref":"#form"}].map((evt, idx) => (
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
                  hiddenFields={[{ name: 'page', value: '/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-ekonomicheskim-prestupleniyam/' }]}
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
