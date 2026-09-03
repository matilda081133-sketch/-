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
import PricingBlock from '@/components/PricingBlock';
import ProcessBlock from '@/components/ProcessBlock';

export default function RassledovanieSluchayaClient() {
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
          "name": "Бизнесу",
          "item": "https://dejure-help.ru/biznesu/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Трудовые споры с работниками",
          "item": "https://dejure-help.ru/biznesu/trudovye-spory-s-rabotnikami/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Расследование несчастного случая",
          "item": "https://dejure-help.ru/biznesu/trudovye-spory-s-rabotnikami/rassledovanie-neschastnogo-sluchaya-na-proizvodstve/"
        }
      ]
    },
    {
      "@type": "Service",
      "name": "Расследование несчастного случая на производстве в Липецке",
      "description": "Срочная юридическая поддержка работодателя при производственных травмах: соблюдение порядка расследования, взаимодействие с ГИТ, СФР и прокуратурой.",
      "url": "https://dejure-help.ru/biznesu/trudovye-spory-s-rabotnikami/rassledovanie-neschastnogo-sluchaya-na-proizvodstve/",
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
          "streetAddress": "пл. Театральная, д. 3, офис 401",
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
          "name": "В какие сроки работодатель обязан завершить расследование?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Расследование легкого несчастного случая проводится комиссией в течение 3 календарных дней. Расследование несчастного случая с тяжелыми последствиями или смертельным исходом проводится в течение 15 календарных дней с возможностью продления председателем комиссии еще до 15 дней."
          }
        },
        {
          "@type": "Question",
          "name": "Кому работодатель обязан направить извещение в течение суток?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "При групповом, тяжелом или смертельном случае извещение в течение 24 часов направляется: в ГИТ, прокуратуру по месту происшествия, орган исполнительной власти субъекта РФ, территориальный орган СФР, соответствующий профсоюзный орган и территориальный орган отраслевого надзора (Ростехнадзор и др.)."
          }
        },
        {
          "@type": "Question",
          "name": "Что грозит за сокрытие несчастного случая на производстве?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Сокрытие страхового случая влечет административный штраф по ст. 5.44 КоАП РФ (до 10 000 руб.), а также внеплановую проверку ГИТ и риск привлечения к уголовной ответственности по ст. 143 УК РФ при тяжелых последствиях."
          }
        },
        {
          "@type": "Question",
          "name": "Может ли пострадавший работник входить в состав комиссии?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Нет, пострадавший работник не входит в состав комиссии по расследованию, однако он либо его доверенное лицо имеет право лично участвовать в расследовании несчастного случая, знакомиться с материалами и давать объяснения (ст. 229 ТК РФ)."
          }
        },
        {
          "@type": "Question",
          "name": "Кто утверждает акт формы Н-1?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Акт формы Н-1 утверждается руководителем организации (работодателем) и заверяется печатью. Один экземпляр выдается пострадавшему (или его родственникам) в течение 3 дней после завершения расследования, второй хранится у работодателя 45 лет."
          }
        }
      ]
    }
  ]
};

  const situations = [
  {
    "tag": "Первые 24 часа",
    "title": "Происшествие произошло только что",
    "desc": "Организуем неотложные действия по ст. 228 ТК РФ: фиксация обстановки, извещение СФР, ГИТ, прокуратуры и создание комиссии."
  },
  {
    "tag": "Тяжелый / смертельный",
    "title": "Тяжелая травма, групповой или смертельный случай",
    "desc": "Сопровождаем расширенное расследование с участием государственного инспектора труда, представителей профсоюза и администрации."
  },
  {
    "tag": "Спорная связь",
    "title": "Травма получена не при исполнении трудовых обязанностей",
    "desc": "Устанавливаем фактические обстоятельства для квалификации несчастного случая как не связанного с производством."
  },
  {
    "tag": "Вина пострадавшего",
    "title": "Грубая неосторожность самого работника",
    "desc": "Собираем доказательства нарушения работником инструкций по охране труда для установления процента вины по ст. 229.2 ТК РФ."
  },
  {
    "tag": "Прокурорская проверка",
    "title": "Проверка Следственного комитета или прокуратуры",
    "desc": "Защищаем руководство и инженера по охране труда при доследственной проверке по ст. 143 УК РФ."
  },
  {
    "tag": "Иск о компенсации",
    "title": "Пострадавший или родственники требуют выплат",
    "desc": "Оцениваем соразмерность требований о возмещении морального вреда и участвуем в судебном процессе."
  }
];
  const checkpoints = [
  {
    "title": "Первая помощь и медицина",
    "desc": "Немедленная организация оказания первой помощи пострадавшему и при необходимости доставка в медицинское учреждение."
  },
  {
    "title": "Фиксация обстановки",
    "desc": "Сохранение обстановки на месте происшествия либо составление подробной схемы, протокола осмотра и фото-/видеофиксация."
  },
  {
    "title": "Извещение в течение суток",
    "desc": "Направление обязательных извещений по установленной форме в СФР, ГИТ, прокуратуру, профильные надзоры и орган местного самоуправления."
  },
  {
    "title": "Формирование комиссии",
    "desc": "Издание приказа о создании комиссии в составе не менее 3 человек под председательством работодателя или инспектора ГИТ."
  },
  {
    "title": "Медицинское заключение (форма 315/у)",
    "desc": "Оперативное получение официального заключения о степени тяжести производственной травмы из медицинского учреждения."
  },
  {
    "title": "Оформление акта Н-1",
    "desc": "Квалификация происшествия, определение причин, составление акта формы Н-1 и регистрация в журнале учета."
  }
];
  const directions = [
  {
    "title": "Сопровождение проверок трудовой инспекции",
    "desc": "Анализ запроса и рисков, подготовка документов и объяснений, участие во взаимодействии с ГИТ, обжалование предписания или штрафа.",
    "link": "/biznesu/trudovye-spory-s-rabotnikami/soprovozhdenie-proverki-trudovoj-inspekcii/"
  },
  {
    "title": "Кадровый аудит организации",
    "desc": "Проверка трудовых договоров, локальных актов и кадровых процедур с перечнем рисков и рекомендациями по устранению нарушений.",
    "link": "/biznesu/trudovye-spory-s-rabotnikami/kadrovyj-audit/"
  },
  {
    "title": "Взыскание материального ущерба с работника",
    "desc": "Фиксация обстоятельств и размера ущерба, служебная проверка, добровольное урегулирование либо обращение в суд.",
    "link": "/biznesu/trudovye-spory-s-rabotnikami/vzyskanie-materialnogo-ushcherba-s-rabotnika/"
  }
];
  const cases: CaseData[] = [
  {
    "category": "Квалификация случая",
    "title": "Доказали, что травма получена не на производстве",
    "problem": "Сотрудник упал на лестнице в нерабочее время и утверждал, что выполнял срочное поручение руководителя.",
    "action": "Истребовали записи СКУД, видеокамер и табели, доказали отсутствие производственной необходимости нахождения на объекте.",
    "result": "Комиссия признала несчастный случай не связанным с производством, необоснованные выплаты предотвращены."
  },
  {
    "category": "Уголовная защита",
    "title": "Исключили уголовную ответственность директора при тяжелой травме",
    "problem": "Следственный комитет проводил доследственную проверку по ст. 143 УК РФ после травмы монтажника на стройплощадке.",
    "action": "Сформировали доказательства соблюдения всех норм охраны труда: своевременный инструктаж, выдача СИЗ, наряд-допуск.",
    "result": "Вынесено постановление об отказе в возбуждении уголовного дела в отношении генерального директора и главного инженера."
  },
  {
    "category": "Снижение компенсации",
    "title": "Снизили заявленный моральный вред с 1 500 000 до 150 000 рублей",
    "problem": "Пострадавший работник обратился в суд с иском о компенсации морального вреда, завысив требования в 10 раз.",
    "action": "Доказали в суде факт грубой неосторожности работника, пренебрегшего правилами безопасности при работе со станком.",
    "result": "Суд установил 40% вины работника и снизил размер компенсации до разумных 150 000 рублей."
  }
];
  const processSteps = [
  {
    "num": "01",
    "title": "Экстренный аудит ситуации",
    "desc": "Оцениваем тяжесть случая, проверяем сроки направления извещений и готовим проект приказа о комиссии."
  },
  {
    "num": "02",
    "title": "Осмотр и сбор доказательств",
    "desc": "Участвуем в осмотре места, опросе очевидцев, должностных лиц и пострадавшего, анализируем журналы инструктажей."
  },
  {
    "num": "03",
    "title": "Взаимодействие с госорганами",
    "desc": "Представляем интересы компании в контактах с инспектором ГИТ, прокуратурой, СФР и медучреждениями."
  },
  {
    "num": "04",
    "title": "Подготовка материалов и акта Н-1",
    "desc": "Формируем полный комплект материалов расследования, формулируем юридически выверенные выводы о причинах."
  },
  {
    "num": "05",
    "title": "Защита при спорах и исках",
    "desc": "Представляем компанию при разногласиях с ГИТ, доследственных проверках и исках о компенсации вреда."
  }
];
  const pricingTiers = [
  {
    "title": "Легкий несчастный случай",
    "subtitle": "Срок расследования до 3 дней",
    "price": "от 15 000 ₽",
    "features": [
      { name: "подготовка извещений и приказа", value: "Да" },
      { name: "оформление протоколов опроса", value: "Да" },
      { name: "составление акта формы Н-1", value: "Да" }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form",
    "analyticsEvent": "click_pricing_light_accident"
  },
  {
    "popular": true,
    "badgeText": "ПОПУЛЯРНЫЙ ВЫБОР",
    "title": "Тяжелый / групповой случай",
    "subtitle": "Срок расследования до 15 дней",
    "price": "от 35 000 ₽",
    "features": [
      { name: "участие в комиссии с инспектором ГИТ", value: "Да" },
      { name: "правовая экспертиза инструктажей и СОУТ", value: "Да" },
      { name: "защита от предписаний и штрафов", value: "Да" }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form",
    "analyticsEvent": "click_pricing_severe_accident"
  },
  {
    "title": "Комплексная защита руководства",
    "subtitle": "Включая СК РФ и суд",
    "price": "от 55 000 ₽",
    "features": [
      { name: "сопровождение проверки по ст. 143 УК РФ", value: "Да" },
      { name: "представительство в прокуратуре", value: "Да" },
      { name: "защита в суде по искам о моральном вреде", value: "Да" }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form",
    "analyticsEvent": "click_pricing_defense_accident"
  }
];
  const faqs = [
  {
    "q": "В какие сроки работодатель обязан завершить расследование?",
    "a": "Расследование легкого несчастного случая проводится комиссией в течение 3 календарных дней. Расследование несчастного случая с тяжелыми последствиями или смертельным исходом проводится в течение 15 календарных дней с возможностью продления председателем комиссии еще до 15 дней."
  },
  {
    "q": "Кому работодатель обязан направить извещение в течение суток?",
    "a": "При групповом, тяжелом или смертельном случае извещение в течение 24 часов направляется: в ГИТ, прокуратуру по месту происшествия, орган исполнительной власти субъекта РФ, территориальный орган СФР, соответствующий профсоюзный орган и территориальный орган отраслевого надзора (Ростехнадзор и др.)."
  },
  {
    "q": "Что грозит за сокрытие несчастного случая на производстве?",
    "a": "Сокрытие страхового случая влечет административный штраф по ст. 5.44 КоАП РФ (до 10 000 руб.), а также внеплановую проверку ГИТ и риск привлечения к уголовной ответственности по ст. 143 УК РФ при тяжелых последствиях."
  },
  {
    "q": "Может ли пострадавший работник входить в состав комиссии?",
    "a": "Нет, пострадавший работник не входит в состав комиссии по расследованию, однако он либо его доверенное лицо имеет право лично участвовать в расследовании несчастного случая, знакомиться с материалами и давать объяснения (ст. 229 ТК РФ)."
  },
  {
    "q": "Кто утверждает акт формы Н-1?",
    "a": "Акт формы Н-1 утверждается руководителем организации (работодателем) и заверяется печатью. Один экземпляр выдается пострадавшему (или его родственникам) в течение 3 дней после завершения расследования, второй хранится у работодателя 45 лет."
  }
];

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
            <Link href="/">Главная</Link><span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/biznesu/">Бизнесу</Link><span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/biznesu/trudovye-spory-s-rabotnikami/">Трудовые споры с работниками</Link><span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Расследование несчастного случая</span>
          </>
        }
        superTitle="Срочная помощь работодателям в Липецке"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Расследование несчастного</span> <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>случая на производстве</span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Помогаем работодателю оперативно выполнить обязательные действия, сформировать комиссию, собрать материалы и защитить позицию компании по итогам расследования.
          </span>
        }
        primaryCtaText="Срочная консультация"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_accident"
        primaryCtaSubtext={
          <span style={{ display: 'block' }}>
            <span style={{ whiteSpace: 'nowrap' }}>Перезвоним вам в течение 15 минут в рабочее время</span>
          </span>
        }
        trustItems={[
  {
    "text": "Контролируем сроки направления извещений в госорганы"
  },
  {
    "text": "Сопровождаем работу комиссии и оформление акта Н-1"
  },
  {
    "text": "Защищаем должностных лиц от необоснованной уголовной и административной ответственности"
  },
  {
    "text": "Куратор — Марина Валерьевна Смольянинова"
  }
]}
        imageUrl="/images/smolyaninova.jpg"
        imageObjectPosition="50% -75px"
        imageName="Марина Валерьевна Смольянинова"
        imageSubtitle="Ведущий юрист ЮК «Де-Юре», куратор направления «Трудовые споры с работниками»"
      />

      {/* ═══ БЛОК 2: СИТУАЦИИ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: "inline-block" }}>Когда работодателю необходима</span> <br /><span style={{ display: "inline-block" }}>срочная юридическая помощь</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              При наступлении несчастного случая закон устанавливает жесткие сроки (от 24 часов) для уведомления контролирующих органов. Ошибки фиксации создают прямую угрозу уголовной ответственности руководства.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {situations.map((sit, i) => (
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
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.08, pointerEvents: 'none' }}>
                  <svg width="100" height="100" viewBox="0 0 24 24" fill="var(--color-deep-blue)">
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                {sit.tag && (
                  <div style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: 'var(--color-gold)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '12px',
                    background: 'rgba(193, 160, 102, 0.1)',
                    padding: '4px 10px',
                    alignSelf: 'flex-start'
                  }}>
                    {sit.tag}
                  </div>
                )}

                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--color-deep-blue)', lineHeight: 1.4, margin: '0 0 14px 0' }}>
                  {sit.title}
                </h3>

                <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0, position: 'relative', zIndex: 1 }}>
                  {sit.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Темно-синяя карточка ключевых точек контроля прямо под карточками ситуаций */}
          <div style={{
            marginTop: '40px',
            background: 'linear-gradient(135deg, var(--color-deep-blue) 0%, #17324D 100%)',
            border: '1px solid var(--color-deep-blue)',
            borderTop: '3px solid var(--color-gold)',
            boxShadow: '0 10px 30px rgba(16, 39, 59, 0.2)',
            padding: '40px 36px',
            position: 'relative',
            overflow: 'hidden',
            marginBottom: '32px'
          }}>
            {/* Фоновый декоративный вектор */}
            <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.08, pointerEvents: 'none' }}>
              <svg width="120" height="120" viewBox="0 0 24 24" fill="#FFFFFF">
                <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', paddingBottom: '16px', borderBottom: '1px solid rgba(255, 255, 255, 0.15)', marginBottom: '20px' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 6v6l4 2"></path>
              </svg>
              <div>
                <h3 style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontFamily: 'var(--font-serif)', color: '#FFFFFF', margin: 0, lineHeight: 1.25 }}>
                  Что делаем при расследовании несчастного случая на производстве
                </h3>
              </div>
            </div>

            <p style={{ margin: '0 0 28px 0', fontSize: '15px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, maxWidth: '820px' }}>
              Обеспечиваем строгое соблюдение регламента расследования, сопровождаем работу комиссии и взаимодействие с надзорными органами:
            </p>

            <div className="grid grid-2" style={{ gap: '22px', position: 'relative', zIndex: 1 }}>
              {checkpoints.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: '#FFFFFF', marginBottom: '3px', lineHeight: 1.35 }}>
                      ${item.title}
                    </strong>
                    <span style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.55 }}>
                      ${item.desc}
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

      {/* ═══ БЛОК: КУРАТОР НАПРАВЛЕНИЯ ═══ */}
      <SpecialistBlock 
        title="Куратор направления"
        name="Марина Валерьевна Смольянинова"
        position={<>Ведущий юрист ЮК «Де-Юре»,<br />куратор направления «Трудовые споры с работниками»</>}
        imageUrl="/images/smolyaninova.jpg"
        imagePosition="50% -75px"
        profileHref="/specialisty/smolyaninova-marina-valerevna/"
        profileText="Подробнее о Марине Валерьевне Смольяниновой →"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Марина Валерьевна курирует обращения работодателей по трудовым спорам: проводит первичную правовую оценку, определяет необходимые документы и последовательность действий, готовит позицию для переговоров, взаимодействия с государственными органами и судебной защиты.
          </span>,
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>2005 год — окончила Институт международного права и экономики имени А. С. Грибоедова</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Более 13 лет работы в Федеральной службе судебных приставов, включая руководящие должности</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Более 5 лет юридической практики с представительством организаций в судах и государственных органах</span>
            </li>
          </ul>
        ]}
        buttonText="Задать вопрос Марине Валерьевне"
        buttonHref="#form"
      />

      {/* ═══ БЛОК: ПРИМЕРЫ ИЗ ПРАКТИКИ ═══ */}
      <CasesBlock
        title="Примеры дел из практики"
        showAllLink="/praktika/"
        showAllText="Смотреть все дела"
        showDemoWarning={true}
        cases={cases}
      />

      {/* ═══ БЛОК 7: КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock title="Порядок сопровождения расследования"
        subtitle="Полный юридический контроль от момента происшествия до утверждения материалов"
        steps={processSteps}
      />

      {/* ═══ БЛОК 8: СТОИМОСТЬ ЮРИДИЧЕСКОЙ ПОМОЩИ ═══ */}
      <PricingBlock
        title="Стоимость сопровождения расследования"
        subtitle="Стоимость зависит от категории тяжести случая и состава комиссии."
        tiers={pricingTiers}
        disclaimer="Стоимость определяется после уточнения задачи и изучения имеющихся документов. Состав услуг, цена и порядок оплаты фиксируются в договоре до начала работы. Оплата вознаграждения исполнителя не зависит от исхода дела и не включает государственные пошлины и сопутствующие расходы."
      />

      {/* ═══ БЛОК 9: ЧАСТЫЕ ВОПРОСЫ (FAQ) ═══ */}
      <FAQBlock
        superTitle="Вопросы о несчастных случаях"
        title=<><span>Ответы на вопросы</span> <br /><span>по расследованию</span></>
        subtitle="Сроки, состав комиссии и ответственность должностных лиц"
        ctaText="Задать свой вопрос"
        ctaLink="#form"
        faqs={faqs}
      />

      {/* ═══ БЛОК 9: СМЕЖНЫЕ УСЛУГИ НАПРАВЛЕНИЯ (СТРОГИЙ ШАБЛОН) ═══ */}
      <section id="directions" className="section bg-light" style={{ padding: '64px 0', background: 'var(--gradient-cream)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '36px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '14px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>Смежные услуги направления</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Если задача выходит за рамки конкретного вопроса, подключаем другие услуги практики трудового права.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '32px' }}>
            {directions.map((dir, i) => (
              <a key={i} href={dir.link} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                <div
                  className="card related-service-card hover-lift"
                  style={{
                    height: '100%',
                    minHeight: '200px',
                    padding: '28px',
                    background: 'var(--color-white)',
                    border: '1px solid var(--color-border)',
                    borderTop: '3px solid var(--color-primary)',
                    borderRadius: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    cursor: 'pointer',
                    transition: 'all 0.35s ease'
                  }}
                >
                  <div>
                    <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', lineHeight: 1.35, fontWeight: 600 }}>
                      {dir.title}
                    </h3>
                    <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                      {dir.desc}
                    </p>
                  </div>
                  <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, marginTop: 'auto', paddingTop: '14px', borderTop: '1px solid rgba(23, 50, 77, 0.06)' }}>
                    <span>Подробнее</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Баннер «Не нашли свою ситуацию?» */}
          <div
            style={{
              background: 'linear-gradient(135deg, var(--color-deep-blue) 0%, #17324D 100%)',
              padding: '36px 40px',
              borderTop: '3px solid var(--color-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '32px',
              flexWrap: 'wrap',
              boxShadow: '0 12px 30px rgba(11, 28, 42, 0.15)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.08, pointerEvents: 'none' }}>
              <svg width="120" height="120" viewBox="0 0 24 24" fill="#FFFFFF">
                <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <div style={{ flex: '1 1 500px', minWidth: '280px', position: 'relative', zIndex: 1 }}>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '22px', fontFamily: 'var(--font-serif)', color: '#FFFFFF', lineHeight: 1.3 }}>
                Не нашли свою ситуацию?
              </h3>
              <p style={{ margin: 0, fontSize: '14.5px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6 }}>
                Опишите ваш трудовой вопрос в форме. Изучим имеющиеся документы и предложим возможные варианты решения.
              </p>
            </div>
            <div style={{ flexShrink: 0, position: 'relative', zIndex: 1 }}>
              <a
                href="#form"
                className="btn btn-gold"
                style={{
                  display: 'inline-block',
                  textAlign: 'center',
                  fontSize: '15px',
                  padding: '14px 28px',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  borderRadius: '0'
                }}
              >
                Обсудить ситуацию
              </a>
            </div>
          </div>

          <div style={{ marginTop: '28px' }}>
            <Link href="/biznesu/trudovye-spory-s-rabotnikami/" className="all-services-link" style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '15px', textDecoration: 'underline', textUnderlineOffset: '4px', display: 'inline-flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s ease' }}>
              Смотреть все услуги практики трудового права →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 10: ФИНАЛЬНАЯ ФОРМА ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px', padding: '80px 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  Срочная связь с юристом
                </span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                <span className="hero-title-span-mobile" style={{ display: "block", whiteSpace: "nowrap" }}>Помощь при несчастном</span> <span className="hero-title-span-mobile" style={{ display: "block", whiteSpace: "nowrap" }}>случае</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Произошел несчастный случай? Марина Валерьевна Смольянинова немедленно подключится к координации обязательных действий и защите интересов компании.
              </p>
              
              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация юриста</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните прямо сейчас: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (910) 350-31-11</a>
                </p>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Конфиденциальность:</strong>
                Не указывайте в форме паспортные данные работников, сведения о здоровье и коммерческую тайну. Документы можно передать юристу после согласования защищённого способа связи.
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Написать нам"
                subtitle={
                  <>
                    <span style={{ display: 'inline-block' }}>Оставьте имя и номер телефона. Юрист свяжется с вами</span> <br />
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
                commentPlaceholder="Кратко опишите ситуацию: что произошло, степень тяжести травмы, когда это случилось..."
                hiddenFields={[
  {
    "name": "source_page",
    "value": "/biznesu/trudovye-spory-s-rabotnikami/rassledovanie-neschastnogo-sluchaya-na-proizvodstve/"
  },
  {
    "name": "direction",
    "value": "rassledovanie_neschastnogo_sluchaya"
  },
  {
    "name": "selected_specialist",
    "value": "smolyaninova-marina-valerevna"
  },
  {
    "name": "service_id",
    "value": "b2b-accident-investigation"
  }
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
