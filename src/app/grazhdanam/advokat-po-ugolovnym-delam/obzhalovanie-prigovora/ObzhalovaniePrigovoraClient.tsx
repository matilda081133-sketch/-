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
            "name": "Обжалование приговора",
            "item": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/obzhalovanie-prigovora/"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Обжалование приговора в Липецке",
        "description": "Проанализируем приговор суда, протокол судебного заседания и материалы уголовного дела. Выявим существенные нарушения норм УПК и УК РФ, подготовим мотивированную апелляционную или кассационную жалобу и добьёмся отмены или смягчения наказания.",
        "url": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/obzhalovanie-prigovora/",
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
    "name": "Что делать, если 15-дневный срок апелляции пропущен?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Если срок пропущен по уважительной причине (болезнь, позднее вручение копии приговора), адвокат подает ходатайство о восстановлении пропущенного срока (ст. 389.5 УПК РФ). Если срок не восстановлен, подается кассационная жалоба."
    }
  },
  {
    "@type": "Question",
    "name": "Может ли апелляционный суд ужесточить наказание?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Апелляционный суд может ужесточить наказание или отменить оправдательный приговор только в том случае, если по этим основаниям подано апелляционное представление прокурора или жалоба потерпевшего."
    }
  },
  {
    "@type": "Question",
    "name": "Чем сплошная кассация отличается от выборочной?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "В сплошной кассации (в течение 6 месяцев) жалоба обязательно рассматривается в судебном заседании кассационного суда с участием адвоката. В выборочной — судья единолично решает, передавать ли дело на рассмотрение."
    }
  },
  {
    "@type": "Question",
    "name": "Можно ли привлечь нового адвоката только на стадию обжалования?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Да, доверитель или его родственники имеют законное право заключить соглашение с новым адвокатом на любой стадии. Свежий взгляд часто позволяет обнаружить ошибки, пропущенные прежним защитником."
    }
  }
]
      }
    ]
  };

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
  const roles = [
  {
    "role": "Осужденный гражданин",
    "task": "Изучение протокола заседания в СИЗО, подача мотивированной апелляционной или кассационной жалобы.",
    "btnText": "Помощь осужденному",
    "btnHref": "#form"
  },
  {
    "role": "Родственники осужденного",
    "task": "Заключение соглашения с новым адвокатом, истребование копий материалов и протокола дела.",
    "btnText": "Помощь родственникам",
    "btnHref": "#form"
  },
  {
    "role": "Потерпевший по делу",
    "task": "Обжалование чрезмерно мягкого приговора или необоснованного оправдания виновного лица.",
    "btnText": "Жалоба потерпевшего",
    "btnHref": "/grazhdanam/advokat-po-ugolovnym-delam/zashchita-poterpevshego/"
  }
];
  const scope = {
  "included": [
    "Полное изучение материалов уголовного дела, протокола и аудиозаписи заседаний",
    "Подготовка подробной апелляционной или кассационной жалобы со ссылками на практику ВС РФ",
    "Подача замечаний на протокол судебного заседания суда первой инстанции",
    "Личное участие адвоката в заседании суда апелляционной или кассационной инстанции"
  ],
  "extra": [
    "Выезд адвоката в Первый кассационный суд общей юрисдикции (г. Саратов)",
    "Подготовка надзорной жалобы в Президиум Верховного Суда РФ",
    "Получение заключений независимых экспертов для приобщения к жалобе"
  ]
};
  const matrix = {
  "title": "Основания для отмены или изменения приговора (ст. 389.15, 401.15 УПК РФ)",
  "subtitle": "Вышестоящий суд изменяет приговор только при доказанности конкретных фундаментальных нарушений закона:",
  "items": [
    {
      "title": "Несоответствие выводов суда фактам дела",
      "desc": "Выводы суда не подтверждаются доказательствами, рассмотренными в заседании, либо суд не учел важные доказательства защиты."
    },
    {
      "title": "Существенное нарушение уголовно-процессуального закона",
      "desc": "Лишение или ограничение гарантированных прав (отказ в переводчике, нарушение права на защиту, тайна совещания)."
    },
    {
      "title": "Неправильное применение уголовного закона",
      "desc": "Квалификация по более тяжкой статье, неприменение норм Общей части УК РФ (ст. 61, 62, 64) или ошибки исчисления срока."
    },
    {
      "title": "Несправедливость назначенного наказания",
      "desc": "Назначение наказания, не соответствующего тяжести содеянного и личности осужденного, чрезмерная суровость."
    },
    {
      "title": "Расхождения протокола и аудиозаписи",
      "desc": "Искажение в письменном протоколе показаний ключевых свидетелей, подтверждаемое официальной аудиозаписью процесса."
    },
    {
      "title": "Новые смягчающие обстоятельства",
      "desc": "Возмещение вреда после приговора, изменение состояния здоровья, рождение детей, содействие правосудию."
    }
  ]
};
  const routes = [
  {
    "title": "Полная отмена приговора с оправданием",
    "desc": "Доказывание непричастности лица или отсутствия в деянии состава преступления в апелляционном суде."
  },
  {
    "title": "Переквалификация и снижение наказания",
    "desc": "Перевод на менее тяжкую часть статьи и существенное сокращение срока лишения свободы."
  },
  {
    "title": "Возврат дела прокурору или на новое рассмотрение",
    "desc": "Отмена приговора из-за грубых процессуальных нарушений и возврат дела в первую инстанцию."
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
    "buttonText": "Уточнить стоимость",
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
    "buttonText": "Уточнить стоимость",
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
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  }
];
  const docsAndDeadlines = {
  "docs": [
    "копия обжалуемого приговора суда первой инстанции (с отметкой о вступлении при кассации);",
    "копия апелляционного определения (при подаче в кассационную инстанцию);",
    "протокол судебного заседания и официальная аудиозапись процесса;",
    "документы о новых смягчающих обстоятельствах (справки о здоровье, возмещении вреда, детях);",
    "копия первоначальной апелляционной жалобы и возражений прокурора."
  ],
  "deadlines": "Срок апелляционного обжалования — 15 суток со дня провозглашения приговора (для лиц под стражей — со дня вручения копии). Срок подачи кассационной жалобы в порядке сплошной кассации — 6 месяцев со дня вступления приговора в силу."
};
  const relatedServices = [
  {
    "title": "Условно-досрочное освобождение (УДО)",
    "desc": "Освобождение от отбывания наказания после отбытия установленной части срока.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/uslovno-dosrochnoe-osvobozhdenie/"
  },
  {
    "title": "Адвокат по уголовным делам (главный раздел)",
    "desc": "Полный комплекс услуг защиты на всех стадиях уголовного судопроизводства.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/"
  },
  {
    "title": "Защита прав потерпевшего",
    "desc": "Обжалование необоснованно мягких приговоров и отказов в возмещении вреда.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/zashchita-poterpevshego/"
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
              <span style={{ color: 'var(--color-text-main)' }}>Обжалование приговора</span>
            </>
          }
          superTitle="Апелляция и кассация по уголовным делам • Липецк"
          title={
            <span style={{ display: 'block' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                Обжалование приговора
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                по уголовному делу
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                в Липецке
              </span>
            </span>
          }
          subtitle="Проанализируем приговор суда, протокол судебного заседания и материалы уголовного дела. Выявим существенные нарушения норм УПК и УК РФ, подготовим мотивированную апелляционную или кассационную жалобу и добьёмся отмены или смягчения наказания."
          primaryCtaText="Обсудить ситуацию"
          primaryCtaLink="#form"
          primaryCtaAnalytics="click_obzhalovanie_prigovora_hero_cta"
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
                Срок апелляционного обжалования — строго 15 суток!
              </h2>
              <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, margin: 0 }}>
                Пропуск 15-дневного срока со дня провозглашения приговора (или вручения копии осужденному под стражей) влечет вступление приговора в законную силу.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '20px' }}>
              {[{"name":"Подача краткой апелляционной жалобы","what":"Срочная подача жалобы в пределах 15 суток для предотвращения вступления приговора в силу.","btnText":"Подать жалобу","btnHref":"#form"},{"name":"Ознакомление с протоколом и аудиозаписью","what":"Подача замечаний на протокол судебного заседания в течение 3 суток с момента ознакомления.","btnText":"Изучить протокол","btnHref":"#form"},{"name":"Сплошная кассация (до 6 месяцев)","what":"Обжалование вступившего в силу приговора в Первый кассационный суд общей юрисдикции (г. Саратов).","btnText":"Кассационная жалоба","btnHref":"#form"}].map((evt, idx) => (
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
                  hiddenFields={[{ name: 'page', value: '/grazhdanam/advokat-po-ugolovnym-delam/obzhalovanie-prigovora/' }]}
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
