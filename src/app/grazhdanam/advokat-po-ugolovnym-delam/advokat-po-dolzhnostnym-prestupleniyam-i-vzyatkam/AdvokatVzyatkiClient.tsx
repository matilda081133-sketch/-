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

export default function AdvokatVzyatkiClient() {
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
            "name": "Должностные преступления и взятки",
            "item": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-dolzhnostnym-prestupleniyam-i-vzyatkam/"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Должностные преступления и взятки в Липецке",
        "description": "Профессиональная защита должностных лиц, предпринимателей и граждан при обвинении в даче, получении или посредничестве во взяточничестве, превышении и злоупотреблении полномочиями. Проверим законность ОРМ и провокацию.",
        "url": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-dolzhnostnym-prestupleniyam-i-vzyatkam/",
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
    "name": "Что признается взяткой по закону?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Взяткой признаются не только наличные деньги и безналичные переводы, но и ценные бумаги, имущество, а также услуги имущественного характера (ремонт, путевки, оплата счетов) за действие или бездействие по службе."
    }
  },
  {
    "@type": "Question",
    "name": "Что делать, если меня провоцируют на получение денег?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Категорически не соглашайтесь на предложения, не берите в руки предметы и не обсуждайте условия передачи. Незамедлительно обратитесь к адвокату для фиксации факта провокации."
    }
  },
  {
    "@type": "Question",
    "name": "Как освобождается от ответственности взяткодатель?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Лицо освобождается от уголовной ответственности по ст. 291 УК РФ, если имело место вымогательство взятки либо если лицо добровольно сообщило о совершенном преступлении в орган, имеющий право возбуждать уголовные дела."
    }
  },
  {
    "@type": "Question",
    "name": "Может ли быть взятка без присутствия должностных полномочий?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Если лицо получило деньги за решение вопроса, который заведомо не входит в его служебные полномочия, содеянное квалифицируется не как взятка (ст. 290), а как мошенничество (ст. 159 УК РФ), что влечет менее строгое наказание."
    }
  }
]
      }
    ]
  };

  const situations = [
  {
    "tag": "Получение взятки",
    "title": "Получение взятки должностным лицом (ст. 290 УК РФ)",
    "desc": "Проверим статус должностного лица, круг служебных полномочий, факт вымогательства или отсутствие связи с действиями по службе."
  },
  {
    "tag": "Дача взятки",
    "title": "Дача взятки должностному лицу (ст. 291 УК РФ)",
    "desc": "Оценим основания для освобождения от уголовной ответственности в связи с добровольным сообщением (примечание к ст. 291 УК РФ)."
  },
  {
    "tag": "Посредничество",
    "title": "Посредничество во взяточничестве (ст. 291.1 УК РФ)",
    "desc": "Разграничим роль посредника, пособника и случаи мошенничества под видом передачи денег третьим лицам."
  },
  {
    "tag": "Превышение полномочий",
    "title": "Превышение и злоупотребление полномочиями (ст. 285, 286 УК РФ)",
    "desc": "Анализ должностных регламентов, корыстной или иной личной заинтересованности и наступления тяжких последствий."
  },
  {
    "tag": "Коммерческий подкуп",
    "title": "Коммерческий подкуп в коммерческих организациях (ст. 204 УК РФ)",
    "desc": "Проверка полномочий лица, выполняющего управленческие функции, и законности оперативных мероприятий."
  },
  {
    "tag": "Мелкое взяточничество",
    "title": "Мелкое взяточничество до 10 000 рублей (ст. 291.2 УК РФ)",
    "desc": "Защита по составам небольшой тяжести с возможностью прекращения дела и назначения судебного штрафа."
  }
];
  const roles = [
  {
    "role": "Должностное лицо / Служащий",
    "task": "Исключить признаки вымогательства, проверить полномочия и оспорить законность ОРД.",
    "btnText": "Защита служащего",
    "btnHref": "#form"
  },
  {
    "role": "Предприниматель / Гражданин",
    "task": "Применить примечание к ст. 291 УК РФ об освобождении от ответственности при вымогательстве.",
    "btnText": "Защита взяткодателя",
    "btnHref": "#form"
  },
  {
    "role": "Родственник задержанного",
    "task": "Срочно направить независимого адвоката в Следственный комитет или изолятор временного содержания.",
    "btnText": "Помочь близкому",
    "btnHref": "#form"
  }
];
  const scope = {
  "included": [
    "Анализ постановлений о проведении оперативного эксперимента и рассекречивании ОРД",
    "Участие в допросах, очных ставках и проверках показаний на стадии СК РФ",
    "Подача жалоб на незаконные действия оперативных сотрудников и следователей",
    "Защита в судебном процессе первой и апелляционной инстанций"
  ],
  "extra": [
    "Фонографические и лингвистические экспертизы аудио- и видеозаписей разговоров",
    "Срочный выезд в ночное время и защита в следственных изоляторах других субъектов РФ",
    "Обжалование меры пресечения в судах вышестоящих инстанций"
  ]
};
  const matrix = {
  "title": "Матрица состава: Взятка, подарок, подкуп или мошенничество",
  "subtitle": "Для квалификации преступлений против государственной службы принципиально исследуются полномочия лица и характер действий:",
  "items": [
    {
      "title": "Статус должностного лица",
      "desc": "Наличие организационно-распорядительных или административно-хозяйственных функций по закону."
    },
    {
      "title": "Связь с действиями по службе",
      "desc": "Входило ли совершение действия в служебные полномочия лица или оно не имело возможности повлиять на результат."
    },
    {
      "title": "Взятка или мошенничество (ст. 159)",
      "desc": "Если лицо взяло деньги, заведомо зная, что не может выполнить действие, содеянное квалифицируется как мошенничество."
    },
    {
      "title": "Обычный подарок или взятка",
      "desc": "Подарки служащим стоимостью до 3 000 руб. (ст. 575 ГК РФ) без условия совершения конкретных служебных действий."
    },
    {
      "title": "Провокация со стороны оперативников",
      "desc": "Искусственное создание условий для передачи ценностей при отсутствии сформированного умысла у лица."
    },
    {
      "title": "Добровольное заявление о взятке",
      "desc": "Основание для полного освобождения взяткодателя от ответственности по примечанию к ст. 291 УК РФ."
    }
  ]
};
  const routes = [
  {
    "title": "Исключение доказательств ОРД и прекращение дела",
    "desc": "Доказываем факт провокации взятки со стороны сотрудников правоохранительных органов."
  },
  {
    "title": "Переквалификация со взятки на мошенничество (ст. 159)",
    "desc": "Доказываем отсутствие у лица реальных служебных полномочий, что существенно снижает наказание."
  },
  {
    "title": "Освобождение от ответственности по примечанию к ст. 291",
    "desc": "Оформление добровольного сообщения о факте передачи взятки или доказывание вымогательства."
  }
];
  const casesData: CaseData[] = [
  {
    "category": "ст. 290 → ст. 159 ч. 3 УК РФ",
    "title": "Переквалификация обвинения в получении взятки на мошенничество",
    "problem": "Сотруднику учреждения вменяли получение взятки в крупном размере за содействие в согласовании документов.",
    "action": "Доказали, что согласование не входило в круг его должностных обязанностей и он не мог повлиять на решение.",
    "result": "Дело переквалифицировано со ст. 290 на ст. 159 УК РФ, исключено наказание в виде 8 лет строгого режима."
  },
  {
    "category": "ст. 291 УК РФ",
    "title": "Освобождение взяткодателя от ответственности по примечанию к статье",
    "problem": "Предприниматель передал денежные средства под угрозой блокировки разрешительной документации.",
    "action": "Собрали доказательства вымогательства взятки должностным лицом, подали заявление и активно способствовали следствию.",
    "result": "Следственный орган освободил предпринимателя от уголовной ответственности на основании примечания к ст. 291 УК РФ."
  },
  {
    "category": "ст. 286 ч. 1 УК РФ",
    "title": "Прекращение уголовного дела о превышении полномочий за отсутствием состава",
    "problem": "Руководителю подразделения вменили превышение полномочий при подписании акта выполненных работ.",
    "action": "Изучили должностной регламент и акты строительного контроля, доказав отсутствие умысла и наступления вреда.",
    "result": "Уголовное дело прекращено на стадии предварительного расследования по реабилитирующему основанию."
  }
];
  const processSteps: ProcessStep[] = [
  {
    "num": "01",
    "title": "Анализ материалов ОРД и аудиозаписей",
    "desc": "Изучаем постановления о проведении проверочной закупки, стенограммы аудиозаписей и протоколы."
  },
  {
    "num": "02",
    "title": "Лингвистическая и фонографическая экспертиза",
    "desc": "Исследование записей разговоров на предмет отсутствия признаков вымогательства и наличия провокации."
  },
  {
    "num": "03",
    "title": "Участие в допросах в СК РФ",
    "desc": "Формирование четкой процессуальной позиции и защита доверителя на всех этапах следствия."
  },
  {
    "num": "04",
    "title": "Судебная защита и переквалификация",
    "desc": "Допрос оперативных сотрудников, понятых, исследование доказательств и выступление в прениях."
  }
];
  const pricingTiers: PricingTier[] = [
  {
    "title": "Участие в неотложном следственном действии",
    "subtitle": "Обыск, допрос в СК, мера пресечения",
    "price": "от 20 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "срочный выезд адвоката к следователю СК",
        "value": "Да"
      },
      {
        "name": "конфиденциальная беседа и выработка позиции",
        "value": "Да"
      },
      {
        "name": "участие в суде по мере пресечения",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  },
  {
    "title": "Защита на стадии предварительного следствия",
    "subtitle": "Комплексное сопровождение в СК РФ",
    "price": "от 65 000 ₽",
    "popular": true,
    "badgeText": "Востребовано",
    "features": [
      {
        "name": "полное сопровождение стадии следствия",
        "value": "Да"
      },
      {
        "name": "аудит законности материалов ОРД",
        "value": "Да"
      },
      {
        "name": "лингвистическая и фонографическая экспертиза",
        "value": "Да"
      },
      {
        "name": "ознакомление со всеми томами дела",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  },
  {
    "title": "Защита в суде первой инстанции",
    "subtitle": "Судебный процесс по должностному делу",
    "price": "от 65 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "допрос свидетелей и оперативных сотрудников",
        "value": "Да"
      },
      {
        "name": "ходатайства о недопустимости провокационных улик",
        "value": "Да"
      },
      {
        "name": "борьба за переквалификацию статьи",
        "value": "Да"
      },
      {
        "name": "выступление в прениях сторон",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  }
];
  const docsAndDeadlines = {
  "docs": [
    "постановление о возбуждении уголовного дела следователем СК РФ;",
    "протоколы задержания, личного обыска и изъятия денежных средств;",
    "постановления о предоставлении результатов ОРД следователю;",
    "должностные регламенты, контракты, приказы о назначении на должность;",
    "стенограммы и аудио/видеозаписи оперативных экспериментов."
  ],
  "deadlines": "Срок задержания без суда — до 48 часов. Срок следствия по должностным делам СК РФ составляет от 2 месяцев с продлением. Срок апелляционного обжалования приговора суда — 15 дней со дня вручения копии."
};
  const relatedServices = [
  {
    "title": "Экономические и налоговые преступления",
    "desc": "Защита руководителей и бухгалтеров при расследовании корпоративных споров.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-ekonomicheskim-prestupleniyam/"
  },
  {
    "title": "Адвокат по мошенничеству (ст. 159)",
    "desc": "Защита при переквалификации обвинений в получении взятки на мошенничество.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-moshennichestvu/"
  },
  {
    "title": "Адвокат при задержании, обыске и допросе",
    "desc": "Срочное подключение защитника к неотложным следственным действиям СК РФ.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/advokat-pri-zaderzhanii-obyske-i-doprose/"
  }
];
  const faqItems = [
  {
    "q": "Что признается взяткой по закону?",
    "a": "Взяткой признаются не только наличные деньги и безналичные переводы, но и ценные бумаги, имущество, а также услуги имущественного характера (ремонт, путевки, оплата счетов) за действие или бездействие по службе."
  },
  {
    "q": "Что делать, если меня провоцируют на получение денег?",
    "a": "Категорически не соглашайтесь на предложения, не берите в руки предметы и не обсуждайте условия передачи. Незамедлительно обратитесь к адвокату для фиксации факта провокации."
  },
  {
    "q": "Как освобождается от ответственности взяткодатель?",
    "a": "Лицо освобождается от уголовной ответственности по ст. 291 УК РФ, если имело место вымогательство взятки либо если лицо добровольно сообщило о совершенном преступлении в орган, имеющий право возбуждать уголовные дела."
  },
  {
    "q": "Может ли быть взятка без присутствия должностных полномочий?",
    "a": "Если лицо получило деньги за решение вопроса, который заведомо не входит в его служебные полномочия, содеянное квалифицируется не как взятка (ст. 290), а как мошенничество (ст. 159 УК РФ), что влечет менее строгое наказание."
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
              <span style={{ color: 'var(--color-text-main)' }}>Должностные преступления и взятки</span>
            </>
          }
          superTitle="Защита по ст. 290, 291, 285, 286 УК РФ • Липецк"
          title={
            <span style={{ display: 'block' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                Адвокат по должностным
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                преступлениям и взяткам
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                в Липецке
              </span>
            </span>
          }
          subtitle="Профессиональная защита должностных лиц, предпринимателей и граждан при обвинении в даче, получении или посредничестве во взяточничестве, превышении и злоупотреблении полномочиями. Проверим законность ОРМ и провокацию."
          primaryCtaText="Обсудить ситуацию"
          primaryCtaLink="#form"
          primaryCtaAnalytics="click_advokat_po_dolzhnostnym_prestupleniyam_i_vzyatkam_hero_cta"
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
                Срочные действия при задержании с поличным или проведении ОРД
              </h2>
              <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, margin: 0 }}>
                Не соглашайтесь на явку с повинной под давлением. Проверьте законность оперативного эксперимента, не прикасайтесь к денежным купюрам и требуйте адвоката.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '20px' }}>
              {[{"name":"Задержание при передаче денег","what":"Фиксация порядка смывов с рук, упаковки купюр и присутствия незаинтересованных понятых.","btnText":"Адвокат при задержании","btnHref":"/grazhdanam/advokat-po-ugolovnym-delam/advokat-pri-zaderzhanii-obyske-i-doprose/"},{"name":"Провокация взятки сотрудниками ОРД","what":"Сбор доказательств склонения и отсутствия предварительного согласия на получение ценностей.","btnText":"Оценить провокацию","btnHref":"#form"},{"name":"Обыск в служебном кабинете","what":"Контроль за изъятием служебной документации, электронных носителей и личных вещей.","btnText":"Адвокат при обыске","btnHref":"/grazhdanam/advokat-po-ugolovnym-delam/advokat-pri-zaderzhanii-obyske-i-doprose/"}].map((evt, idx) => (
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
                  hiddenFields={[{ name: 'page', value: '/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-dolzhnostnym-prestupleniyam-i-vzyatkam/' }]}
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
