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

export default function AdvokatDtpClient() {
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
          "name": "Адвокат по ДТП с пострадавшими",
          "item": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-dtp-s-postradavshimi/"
        }
      ]
    },
    {
      "@type": "Service",
      "name": "Адвокат по ДТП с пострадавшими в Липецке",
      "description": "Защита водителей и представительство потерпевших по ст. 264 УК РФ при ДТП с тяжким вредом здоровью или погибшими в Липецке. Экспертизы, автотехника, суд.",
      "url": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-dtp-s-postradavshimi/",
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
          "name": "Когда наступает уголовная ответственность при ДТП?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Уголовная ответственность по ст. 264 УК РФ наступает только в случае причинения тяжкого вреда здоровью человека либо смерти. Если причинен легкий или средний вред здоровью, ответственность является административной (ст. 12.24 КоАП РФ)."
          }
        },
        {
          "@type": "Question",
          "name": "Можно ли примириться с потерпевшим по ст. 264 УК РФ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "По ч. 1 ст. 264 УК РФ (тяжкий вред здоровью) возможно прекращение дела за примирением сторон (ст. 25 УПК РФ). По ч. 3 ст. 264 УК РФ (смерть одного человека) прекращение также возможно по закону, но решение остается на усмотрение суда."
          }
        },
        {
          "@type": "Question",
          "name": "Что делать, если пешеход сам нарушил ПДД?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Нарушение ПДД пешеходом не освобождает водителя от ответственности автоматически. Экспертиза должна установить, имел ли водитель техническую возможность избежать наезда с момента возникновения опасности."
          }
        },
        {
          "@type": "Question",
          "name": "Кто возмещает моральный вред — страховая или водитель?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Страховая компания по ОСАГО возмещает только расходы на лечение и утраченный заработок (до 500 тыс. руб.). Компенсация морального вреда взыскивается непосредственно с причинителя вреда (владельца источника повышенной опасности)."
          }
        }
      ]
    }
  ]
};

  const situations = [
  {
    "title": "Причинение тяжкого вреда здоровью (ч. 1, 2 ст. 264)",
    "desc": "Пострадавший получил травмы, квалифицированные судмедэкспертизой как тяжкий вред здоровью (переломы, ЧМТ, утрата трудоспособности).",
    "impact": "Проверяем причинную связь между действиями водителя и наступившими последствиями, а также действия самого пешехода/водителя."
  },
  {
    "title": "ДТП со смертельным исходом (ч. 3, 4, 5, 6 ст. 264)",
    "desc": "Гибель одного или нескольких человек в результате дорожно-транспортного происшествия.",
    "impact": "Формируем доказательственную базу, назначаем комплексные экспертизы, организуем взаимодействие с родственниками погибших."
  },
  {
    "title": "Подозрение на состояние опьянения или оставление места ДТП",
    "desc": "Вменение квалифицирующих признаков по ч. 2, 4, 6 ст. 264 УК РФ (алкоголь, наркотики, отказ от освидетельствования, скрытие с места).",
    "impact": "Проверяем законность процедуры медицинского освидетельствования, целостность проб и объективность фиксации."
  },
  {
    "title": "Защита прав потерпевших и родственников погибших",
    "desc": "Необходимость признания потерпевшим, участия в допросах, взыскания компенсации морального и материального вреда.",
    "impact": "Готовим гражданский иск в уголовном процессе, контролируем полноту расследования и размер компенсаций."
  }
];
  const checkpoints = [
  {
    "title": "Наличие технической возможности избежать наезда / столкновения",
    "desc": "Рассчитываем остановочный путь, время реакции водителя, скорость движения и момент возникновения опасности."
  },
  {
    "title": "Правильность составления схемы ДТП и протокола осмотра",
    "desc": "Сопоставляем следы торможения, осыпи стекол, положение транспортных средств и дорожные условия (гололед, ямы)."
  },
  {
    "title": "Судебно-медицинская экспертиза вреда здоровью",
    "desc": "Проверяем правильность установления степени тяжести вреда (тяжкий вред vs средняя тяжесть, не влекущая уголовной ответственности)."
  },
  {
    "title": "Нарушения ПДД со стороны других участников ДТП",
    "desc": "Устанавливаем грубую неосторожность пешехода (переход в неположенном месте) или нарушения со стороны второго водителя."
  },
  {
    "title": "Основания для прекращения дела в связи с примирением",
    "desc": "По ч. 1 ст. 264 УК РФ организуем возмещение вреда и подачу ходатайства о прекращении дела по ст. 25 УПК РФ."
  },
  {
    "title": "Исправность транспортного средства до момента аварии",
    "desc": "Проводим автотехническую экспертизу на предмет внезапного отказа тормозной системы или рулевого управления."
  }
];
  const casesData: CaseData[] = [
  {
    "title": "Прекращение уголовного дела по ч. 1 ст. 264 УК РФ за примирением",
    "category": "ДТП с пешеходом",
    "problem": "Водитель совершил наезд на пешехода вне зоны перехода, причинив перелом бедра (тяжкий вред здоровью).",
    "action": "Адвокат организовал оплату лечения, реабилитации и согласовал с потерпевшим сумму моральной компенсации.",
    "result": "Суд удовлетворил ходатайство потерпевшего и прекратил уголовное дело за примирением сторон без судимости."
  },
  {
    "title": "Установление отсутствия технической возможности предотвратить ДТП",
    "category": "Оправдательный вердикт / отказ",
    "problem": "Пешеход в темное время суток внезапно выбежал из-за стоявшего автобуса прямо под колеса автомобиля.",
    "action": "Назначили независимую автотехническую экспертизу, доказавшую, что время с момента появления пешехода было меньше времени реакции.",
    "result": "Уголовное дело в отношении водителя прекращено за отсутствием в его действиях состава преступления."
  },
  {
    "title": "Назначение условного наказания по ч. 3 ст. 264 УК РФ",
    "category": "ДТП со смертельным исходом",
    "problem": "В результате столкновения на перекрестке погиб пассажир встречного автомобиля.",
    "action": "Доказали обоюдное нарушение правил обоими водителями, полностью возместили ущерб семье погибшего и представили положительные данные.",
    "result": "Суд назначил наказание с применением ст. 73 УК РФ (условно) без реального лишения свободы."
  }
];
  const processSteps: ProcessStep[] = [
  {
    "num": "01",
    "title": "Аудит протоколов осмотра и схемы ДТП",
    "desc": "Изучаем первоначальные замеры, привязку к ориентирам, погодные условия и показания свидетелей."
  },
  {
    "num": "02",
    "title": "Постановка вопросов для автотехнической экспертизы",
    "desc": "Формулируем точные вопросы эксперту о скорости, видимости, моменте возникновения опасности и тормозном пути."
  },
  {
    "num": "03",
    "title": "Участие в следственных экспериментах и допросах",
    "desc": "Контролируем проведение следственного эксперимента по определению видимости и участвуем в допросах экспертов."
  },
  {
    "num": "04",
    "title": "Защита в суде или примирение сторон",
    "desc": "Добиваемся прекращения дела по ст. 25 УПК РФ либо вынесения решения без изоляции от общества."
  }
];
  const pricingTiers: PricingTier[] = [
  {
    "title": "Анализ схемы ДТП и консультация",
    "subtitle": "Оценка автотехнических перспектив",
    "price": "от 5 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "правовой анализ схемы и протокола осмотра",
        "value": "Да"
      },
      {
        "name": "оценка степени тяжести вреда здоровью",
        "value": "Да"
      },
      {
        "name": "рекомендации по формулированию вопросов эксперту",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  },
  {
    "title": "Защита на предварительном следствии",
    "subtitle": "Следствие по ст. 264 УК РФ под ключ",
    "price": "от 40 000 ₽",
    "popular": true,
    "badgeText": "Востребовано",
    "features": [
      {
        "name": "участие во всех следственных действиях и экспериментах",
        "value": "Да"
      },
      {
        "name": "назначение независимых автотехнических экспертиз",
        "value": "Да"
      },
      {
        "name": "организация переговоров с потерпевшей стороной",
        "value": "Да"
      },
      {
        "name": "защита прав при предъявлении обвинения",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  },
  {
    "title": "Защита в суде первой инстанции",
    "subtitle": "Полное сопровождение судебного процесса",
    "price": "от 50 000 ₽",
    "popular": false,
    "features": [
      {
        "name": "участие во всех судебных заседаниях",
        "value": "Да"
      },
      {
        "name": "вызов и допрос экспертов-автотехников",
        "value": "Да"
      },
      {
        "name": "заявление ходатайства о примирении сторон",
        "value": "Да"
      },
      {
        "name": "подготовка позиции по гражданскому иску",
        "value": "Да"
      }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form"
  }
];
  const relatedServices = [
  {
    "title": "Автоюрист (гражданские споры по ДТП)",
    "desc": "Споры по ОСАГО, КАСКО, лишение прав, административные протоколы и гражданское взыскание ущерба.",
    "link": "/grazhdanam/avtoyurist/"
  },
  {
    "title": "Защита прав потерпевшего по уголовному делу",
    "desc": "Представительство пострадавших в ДТП и взыскание компенсации морального и физического вреда.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/zashchita-poterpevshego/"
  },
  {
    "title": "Обжалование приговора",
    "desc": "Апелляционное и кассационное обжалование судебных решений по уголовным делам о ДТП.",
    "link": "/grazhdanam/advokat-po-ugolovnym-delam/obzhalovanie-prigovora/"
  }
];
  const faqItems = [
  {
    "q": "Когда наступает уголовная ответственность при ДТП?",
    "a": "Уголовная ответственность по ст. 264 УК РФ наступает только в случае причинения тяжкого вреда здоровью человека либо смерти. Если причинен легкий или средний вред здоровью, ответственность является административной (ст. 12.24 КоАП РФ)."
  },
  {
    "q": "Можно ли примириться с потерпевшим по ст. 264 УК РФ?",
    "a": "По ч. 1 ст. 264 УК РФ (тяжкий вред здоровью) возможно прекращение дела за примирением сторон (ст. 25 УПК РФ). По ч. 3 ст. 264 УК РФ (смерть одного человека) прекращение также возможно по закону, но решение остается на усмотрение суда."
  },
  {
    "q": "Что делать, если пешеход сам нарушил ПДД?",
    "a": "Нарушение ПДД пешеходом не освобождает водителя от ответственности автоматически. Экспертиза должна установить, имел ли водитель техническую возможность избежать наезда с момента возникновения опасности."
  },
  {
    "q": "Кто возмещает моральный вред — страховая или водитель?",
    "a": "Страховая компания по ОСАГО возмещает только расходы на лечение и утраченный заработок (до 500 тыс. руб.). Компенсация морального вреда взыскивается непосредственно с причинителя вреда (владельца источника повышенной опасности)."
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
              <span style={{ color: '#FFFFFF' }}>Адвокат по ДТП с пострадавшими</span>
            </nav>
          }
          superTitle="Уголовное право • ст. 264 УК РФ"
          title={
            <span style={{ display: 'block' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                Адвокат по ДТП
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                с пострадавшими и погибшими
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                в Липецке
              </span>
            </span>
          }
          subtitle="Защита водителей и представительство потерпевших по ст. 264 УК РФ при тяжком вреде здоровью или гибели людей в ДТП. Автотехнические и судмедэкспертизы. Связь в рабочее время: Пн–Пт с 09:00 до 18:00."
          primaryCtaText="Обсудить ситуацию"
          primaryCtaLink="#form"
          primaryCtaSubtext={
            <span style={{ display: 'block' }}>
              <span style={{ whiteSpace: 'nowrap' }}>Перезвоним вам в течение 15 минут в рабочее время</span>
            </span>
          }
          trustItems={[
            { text: 'Проверим техническую возможность предотвратить ДТП' },
            { text: 'Оценим схему ДТП, протокол осмотра и состояние дорожного полотна' },
            { text: 'Защитим права при расследовании и добьемся примирения сторон' }
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
                <span style={{ display: "inline-block" }}>В каких случаях</span> <br />
                <span style={{ display: "inline-block" }}>возбуждается уголовное дело</span> <br />
                <span style={{ display: "inline-block" }}>по ст. 264 УК РФ</span>
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Уголовная ответственность наступает только при причинении тяжкого вреда здоровью человека либо его гибели.
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
                    Что проверяет адвокат по уголовным делам о ДТП
                  </h3>
                </div>
              </div>

              <p style={{ margin: '0 0 28px 0', fontSize: '15px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, maxWidth: '820px' }}>
                Ключевые точки автотехнического и медицинского исследования:
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
                  hiddenFields={[{ name: 'page', value: '/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-dtp-s-postradavshimi/' }]}
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
