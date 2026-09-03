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

export default function VzyskanieUshcherbaB2BClient() {
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
          "name": "Взыскание материального ущерба с работника",
          "item": "https://dejure-help.ru/biznesu/trudovye-spory-s-rabotnikami/vzyskanie-materialnogo-ushcherba-s-rabotnika/"
        }
      ]
    },
    {
      "@type": "Service",
      "name": "Взыскание материального ущерба с работника в Липецке",
      "description": "Правовое сопровождение процедуры привлечения работника к материальной ответственности: от акта инвентаризации до взыскания через суд.",
      "url": "https://dejure-help.ru/biznesu/trudovye-spory-s-rabotnikami/vzyskanie-materialnogo-ushcherba-s-rabotnika/",
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
          "name": "Можно ли взыскать ущерб, если с работником не был подписан договор о полной материальной ответственности?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "В таком случае работник несет ответственность только в пределах своего среднего месячного заработка (ст. 241 ТК РФ). Полная ответственность без договора возможна только в исключительных случаях по ст. 243 ТК РФ: умышленное причинение ущерба, состояние опьянения, совершение преступления, разглашение тайны или причинение ущерба не при исполнении обязанностей."
          }
        },
        {
          "@type": "Question",
          "name": "Какой срок давности установлен для обращения работодателя в суд о взыскании ущерба?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Работодатель имеет право обратиться в суд по спорам о возмещении работником ущерба в течение одного года со дня обнаружения причиненного ущерба (ч. 4 ст. 392 ТК РФ). Пропуск этого срока без уважительных причин влечет отказ в иске."
          }
        },
        {
          "@type": "Question",
          "name": "Какую максимальную сумму можно удерживать из зарплаты работника в месяц?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "По общему правилу общий размер всех удержаний при каждой выплате заработной платы не может превышать 20 процентов, а в случаях, предусмотренных федеральными законами, — 50 процентов заработной платы (ст. 138 ТК РФ)."
          }
        },
        {
          "@type": "Question",
          "name": "Можно ли взыскать с работника упущенную выгоду предприятия?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Нет, в соответствии со ст. 238 ТК РФ работник обязан возместить работодателю только прямой действительный ущерб. Неполученные доходы (упущенная выгода) взысканию с работника не подлежат."
          }
        },
        {
          "@type": "Question",
          "name": "Что делать, если работник уволился до завершения служебной проверки?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Увольнение работника не освобождает его от материальной ответственности за ущерб, причиненный в период действия трудового договора. Работодатель завершает проверку и обращается с иском о взыскании ущерба в суд по месту жительства бывшего сотрудника."
          }
        }
      ]
    }
  ]
};

  const situations = [
  {
    "tag": "Недостача ТМЦ",
    "title": "Выявлена недостача товара или денежных средств",
    "desc": "Проводим инвентаризацию, сопоставляем первичные учетные документы и устанавливаем круг ответственных лиц."
  },
  {
    "tag": "Повреждение имущества",
    "title": "Работник повредил оборудование, технику или автомобиль",
    "desc": "Фиксируем факт повреждения, определяем восстановительную стоимость и причинно-следственную связь с действиями сотрудника."
  },
  {
    "tag": "Штрафы госорганов",
    "title": "Компания оштрафована по вине конкретного работника",
    "desc": "Оцениваем возможность взыскания суммы административного штрафа с виновного должностного лица или водителя."
  },
  {
    "tag": "Бригадная ответственность",
    "title": "Ущерб причинен при коллективной материальной ответственности",
    "desc": "Определяем степень вины и долю возмещения каждого члена коллектива в соответствии с правилами ст. 245 ТК РФ."
  },
  {
    "tag": "Добровольное погашение",
    "title": "Работник готов возместить ущерб добровольно",
    "desc": "Составляем юридически безупречное соглашение о рассрочке платежей и обеспечиваем признание долга."
  },
  {
    "tag": "Отказ от возмещения",
    "title": "Работник отрицает вину или уволился до погашения",
    "desc": "Готовим доказательственную базу и подаем исковое заявление в суд в пределах установленного годичного срока."
  }
];
  const checkpoints = [
  {
    "title": "Прямой действительный ущерб",
    "desc": "Доказываем реальное уменьшение имущества компании или необходимость произвести затраты. Упущенная выгода с работника не взыскивается."
  },
  {
    "title": "Противоправность поведения",
    "desc": "Устанавливаем нарушение работником должностных обязанностей, инструкций, ПДД или локальных актов работодателя."
  },
  {
    "title": "Причинно-следственная связь",
    "desc": "Подтверждаем документально, что ущерб наступил именно вследствие действий (бездействия) конкретного сотрудника."
  },
  {
    "title": "Вина работника",
    "desc": "Выявляем умысел или неосторожность; исключаем форс-мажор, крайнюю необходимость, необходимую оборону или нормальный хозриск."
  },
  {
    "title": "Пределы ответственности",
    "desc": "Определяем, ограничен ли ущерб средним заработком (ст. 241 ТК РФ) либо наступила полная ответственность по ст. 243 ТК РФ."
  },
  {
    "title": "Соблюдение процедуры ст. 247 ТК РФ",
    "desc": "Обязательный приказ о создании комиссии, проведение проверки, письменный запрос объяснений и составление акта."
  }
];
  const directions = [
  {
    "title": "Юридическое сопровождение увольнения работника",
    "desc": "Проверка основания и доказательств, подготовка документов, переговоры с работником и защита работодателя при оспаривании.",
    "link": "/biznesu/trudovye-spory-s-rabotnikami/soprovozhdenie-uvolneniya-rabotnika/"
  },
  {
    "title": "Кадровый аудит организации",
    "desc": "Проверка трудовых договоров, локальных актов и кадровых процедур с перечнем рисков и рекомендациями по устранению нарушений.",
    "link": "/biznesu/trudovye-spory-s-rabotnikami/kadrovyj-audit/"
  },
  {
    "title": "Сопровождение проверок трудовой инспекции",
    "desc": "Анализ запроса и рисков, подготовка документов и объяснений, участие во взаимодействии с ГИТ, обжалование предписания или штрафа.",
    "link": "/biznesu/trudovye-spory-s-rabotnikami/soprovozhdenie-proverki-trudovoj-inspekcii/"
  }
];
  const cases: CaseData[] = [
  {
    "category": "Добровольное возмещение",
    "title": "Добились добровольного возмещения недостачи на 380 000 рублей",
    "problem": "После ревизии на складе выявлена недостача электроинструмента. Заведующий складом отказывался подписывать акт инвентаризации.",
    "action": "Провели служебную проверку, сопоставили накладные с данными видеонаблюдения, подготовили соглашение о рассрочке выплат.",
    "result": "Работник признал долг и выплатил 100% ущерба в течение 4 месяцев без обращения работодателя в суд."
  },
  {
    "category": "Взыскание через суд",
    "title": "Взыскали с виновника ДТП полную стоимость ремонта служебного авто",
    "problem": "Водитель служебного автомобиля совершил аварию в нетрезвом виде, страхового возмещения ОСАГО не хватило для покрытия ремонта.",
    "action": "Истребовали материалы ГИБДД, провели независимую оценку восстановительного ремонта и подали иск по п. 4 ст. 243 ТК РФ.",
    "result": "Суд взыскал с работника 540 000 рублей ущерба и судебные расходы компании в полном объеме."
  },
  {
    "category": "Оспаривание удержания",
    "title": "Отстояли законность удержания из заработной платы при увольнении",
    "problem": "Уволенный менеджер пожаловался в трудовую инспекцию на удержание стоимости утраченного ноутбука из окончательного расчета.",
    "action": "Предоставили в ГИТ акт выдачи техники, материалы служебной проверки и распоряжение об удержании в пределах среднего заработка.",
    "result": "ГИТ признала действия компании правомерными, в выдаче предписания работнику отказано."
  }
];
  const processSteps = [
  {
    "num": "01",
    "title": "Фиксация факта ущерба",
    "desc": "Проводим инвентаризацию, составляем акт осмотра поврежденного имущества или сличительную ведомость."
  },
  {
    "num": "02",
    "title": "Служебное расследование",
    "desc": "Создаем комиссию, запрашиваем письменные объяснения работника (срок 2 рабочих дня) и устанавливаем причины."
  },
  {
    "num": "03",
    "title": "Оценка размера и пределов",
    "desc": "Рассчитываем прямой ущерб с учетом износа, проверяем наличие оснований для полной материальной ответственности."
  },
  {
    "num": "04",
    "title": "Издание распоряжения / соглашение",
    "desc": "Издаем распоряжение об удержании (до 1 месяца со дня установления размера) либо оформляем соглашение о возмещении."
  },
  {
    "num": "05",
    "title": "Судебное взыскание",
    "desc": "При превышении предела среднего заработка или несогласии работника готовим иск и представляем работодателя в суде."
  }
];
  const pricingTiers = [
  {
    "title": "Аудит документов и процедура",
    "subtitle": "Служебная проверка",
    "price": "от 10 000 ₽",
    "features": [
      { name: "экспертиза договоров о матответственности", value: "Да" },
      { name: "составление актов и запросов объяснений", value: "Да" },
      { name: "расчет предела ответственности", value: "Да" }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form",
    "analyticsEvent": "click_pricing_audit_damages"
  },
  {
    "popular": true,
    "badgeText": "ПОПУЛЯРНЫЙ ВЫБОР",
    "title": "Соглашение о возмещении",
    "subtitle": "Досудебное урегулирование",
    "price": "от 15 000 ₽",
    "features": [
      { name: "переговоры с работником", value: "Да" },
      { name: "составление соглашения о рассрочке", value: "Да" },
      { name: "оформление обеспечения исполнения", value: "Да" }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form",
    "analyticsEvent": "click_pricing_settle_damages"
  },
  {
    "title": "Судебное взыскание",
    "subtitle": "Представительство в суде",
    "price": "от 30 000 ₽",
    "features": [
      { name: "подготовка и подача искового заявления", value: "Да" },
      { name: "участие во всех судебных заседаниях", value: "Да" },
      { name: "сопровождение исполнительного листа", value: "Да" }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form",
    "analyticsEvent": "click_pricing_court_damages"
  }
];
  const faqs = [
  {
    "q": "Можно ли взыскать ущерб, если с работником не был подписан договор о полной материальной ответственности?",
    "a": "В таком случае работник несет ответственность только в пределах своего среднего месячного заработка (ст. 241 ТК РФ). Полная ответственность без договора возможна только в исключительных случаях по ст. 243 ТК РФ: умышленное причинение ущерба, состояние опьянения, совершение преступления, разглашение тайны или причинение ущерба не при исполнении обязанностей."
  },
  {
    "q": "Какой срок давности установлен для обращения работодателя в суд о взыскании ущерба?",
    "a": "Работодатель имеет право обратиться в суд по спорам о возмещении работником ущерба в течение одного года со дня обнаружения причиненного ущерба (ч. 4 ст. 392 ТК РФ). Пропуск этого срока без уважительных причин влечет отказ в иске."
  },
  {
    "q": "Какую максимальную сумму можно удерживать из зарплаты работника в месяц?",
    "a": "По общему правилу общий размер всех удержаний при каждой выплате заработной платы не может превышать 20 процентов, а в случаях, предусмотренных федеральными законами, — 50 процентов заработной платы (ст. 138 ТК РФ)."
  },
  {
    "q": "Можно ли взыскать с работника упущенную выгоду предприятия?",
    "a": "Нет, в соответствии со ст. 238 ТК РФ работник обязан возместить работодателю только прямой действительный ущерб. Неполученные доходы (упущенная выгода) взысканию с работника не подлежат."
  },
  {
    "q": "Что делать, если работник уволился до завершения служебной проверки?",
    "a": "Увольнение работника не освобождает его от материальной ответственности за ущерб, причиненный в период действия трудового договора. Работодатель завершает проверку и обращается с иском о взыскании ущерба в суд по месту жительства бывшего сотрудника."
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
            <span style={{ color: 'var(--color-text-main)' }}>Взыскание материального ущерба с работника</span>
          </>
        }
        superTitle="Помощь работодателям в Липецке и области"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Взыскание материального</span> <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>ущерба с работника</span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Организуем служебную проверку, установим размер прямого ущерба и вину работника, оформим добровольное возмещение или взыщем средства через суд.
          </span>
        }
        primaryCtaText="Обсудить ущерб"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_damages"
        primaryCtaSubtext={
          <span style={{ display: 'block' }}>
            <span style={{ whiteSpace: 'nowrap' }}>Перезвоним вам в течение 15 минут в рабочее время</span>
          </span>
        }
        trustItems={[
  {
    "text": "Проводим служебную проверку по ст. 247 ТК РФ"
  },
  {
    "text": "Оцениваем действительность договоров о полной материальной ответственности"
  },
  {
    "text": "Оформляем соглашения о добровольном возмещении и судебные иски"
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
              <span style={{ display: "inline-block" }}>В каких ситуациях</span> <br /><span style={{ display: "inline-block" }}>мы помогаем работодателю</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Соблюдение процедуры проверки по ТК РФ — главное условие успешного взыскания ущерба. Любое нарушение правил инвентаризации или истребования объяснений лишает компанию шансов в суде.
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
        </div>
      </section>

      
      {/* ═══ БЛОК 3: ЧТО ПРОВЕРЯЕМ / ОСОБЕННОСТИ ═══ */}
      <section className="section bg-cream" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: "inline-block" }}>Что обязательно проверяем</span> <br /><span style={{ display: "inline-block" }}>до удержания или суда</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Правовые условия, без доказательства которых суд откажет работодателю во взыскании ущерба.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {checkpoints.map((cp, i) => (
              <div
                key={i}
                className="hover-lift"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '38px 24px 30px 24px',
                  border: '1px solid var(--color-border)',
                  borderTop: '4px solid var(--color-gold)',
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  borderRadius: '0',
                  position: 'relative',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '20px',
                  background: 'var(--color-gold)',
                  color: '#FFFFFF',
                  fontSize: '12px',
                  fontWeight: 700,
                  padding: '2px 10px',
                  borderRadius: '2px',
                  letterSpacing: '0.05em'
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 style={{ margin: '8px 0 10px 0', fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>
                  {cp.title}
                </h3>
                <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                  {cp.desc}
                </p>
              </div>
            ))}
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
      <ProcessBlock title="Этапы взыскания ущерба"
        subtitle="Последовательный правовой алгоритм защиты активов компании"
        steps={processSteps}
      />

      {/* ═══ БЛОК 8: СТОИМОСТЬ ЮРИДИЧЕСКОЙ ПОМОЩИ ═══ */}
      <PricingBlock
        title="Стоимость сопровождения взыскания ущерба"
        subtitle="Прозрачные тарифы на досудебную работу и судебное представительство."
        tiers={pricingTiers}
        disclaimer="Стоимость определяется после уточнения задачи и изучения имеющихся документов. Состав услуг, цена и порядок оплаты фиксируются в договоре до начала работы. Оплата вознаграждения исполнителя не зависит от исхода дела и не включает государственные пошлины и сопутствующие расходы."
      />

      {/* ═══ БЛОК 9: ЧАСТЫЕ ВОПРОСЫ (FAQ) ═══ */}
      <FAQBlock
        superTitle="Вопросы о материальной ответственности"
        title=<><span>Ответы на вопросы</span> <br /><span>по взысканию ущерба</span></>
        subtitle="Ограничения, сроки давности и порядок удержания"
        ctaText="Задать свой вопрос"
        ctaLink="#form"
        faqs={faqs}
      />

      {/* ═══ БЛОК НАПРАВЛЕНИЙ / СМЕЖНЫХ УСЛУГ ═══ */}
      <section id="directions" className="section bg-light" style={{ padding: '64px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>Смежные услуги направления</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Если задача выходит за рамки конкретного вопроса, подключаем другие услуги практики трудового права.
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '20px' }}>
            {directions.map((dir, i) => (
              <a key={i} href={dir.link} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                <div
                  className="card service-card hover-lift"
                  style={{
                    height: '100%',
                    minHeight: '220px',
                    padding: '28px',
                    background: 'var(--color-white)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    borderTop: '3px solid var(--color-primary)',
                    cursor: 'pointer',
                    transition: 'all 0.35s ease'
                  }}
                >
                  <div>
                    <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', lineHeight: 1.35 }}>
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

            {/* 4-я карточка: Не нашли свою ситуацию? */}
            <div 
              className="card service-card hover-lift" 
              style={{ 
                height: '100%', 
                minHeight: '220px',
                padding: '28px', 
                background: 'linear-gradient(135deg, var(--color-deep-blue) 0%, #17324D 100%)', 
                border: '1px solid var(--color-deep-blue)',
                borderRadius: '0',
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                transition: 'all 0.3s',
                position: 'relative',
                borderTop: '3px solid var(--color-gold)',
                boxShadow: '0 4px 20px rgba(11, 28, 42, 0.15)',
                boxSizing: 'border-box'
              }}
            >
              <div>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-white)', lineHeight: 1.35 }}>
                  <span style={{ display: 'block', whiteSpace: 'nowrap' }}>Не нашли</span>{' '}
                  <span style={{ display: 'block', whiteSpace: 'nowrap' }}>свою ситуацию?</span>
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.55 }}>
                  Опишите ваш трудовой вопрос в форме. Изучим имеющиеся документы и предложим возможные варианты решения.
                </p>
              </div>
              <div style={{ marginTop: 'auto', paddingTop: '14px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <a 
                  href="#form" 
                  className="btn btn-gold" 
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    width: '100%',
                    padding: '12px 20px', 
                    fontSize: '14px', 
                    borderRadius: '0',
                    textAlign: 'center',
                    boxSizing: 'border-box'
                  }}
                >
                  Обсудить ситуацию
                </a>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '32px' }}>
            <Link href="/biznesu/trudovye-spory-s-rabotnikami/" className="all-services-link" style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', textDecoration: 'underline', textUnderlineOffset: '4px', display: 'inline-flex', alignItems: 'center', gap: '6px', transition: 'color 0.2s ease' }}>
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
                  Связаться с юристом
                </span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                <span className="hero-title-span-mobile" style={{ display: "block", whiteSpace: "nowrap" }}>Обсудить взыскание</span> <span className="hero-title-span-mobile" style={{ display: "block", whiteSpace: "nowrap" }}>ущерба с работника</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Опишите обстоятельства причинения ущерба. Марина Валерьевна Смольянинова оценит доказательства и разработает стратегию возмещения средств.
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
                commentPlaceholder="Опишите происшествие: какой ущерб причинен, кем, оформлен ли договор о матответственности..."
                hiddenFields={[
  {
    "name": "source_page",
    "value": "/biznesu/trudovye-spory-s-rabotnikami/vzyskanie-materialnogo-ushcherba-s-rabotnika/"
  },
  {
    "name": "direction",
    "value": "vzyskanie_ushcherba_b2b"
  },
  {
    "name": "selected_specialist",
    "value": "smolyaninova-marina-valerevna"
  },
  {
    "name": "service_id",
    "value": "b2b-damages-recovery"
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
