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

export default function TrudovyeSporyB2BClient() {
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
        }
      ]
    },
    {
      "@type": "Service",
      "name": "Трудовые споры с работниками в Липецке",
      "description": "Юридическая помощь работодателям в трудовых спорах с работниками: увольнение, сокращение, проверки ГИТ, кадровый аудит, взыскание ущерба и судебная защита.",
      "url": "https://dejure-help.ru/biznesu/trudovye-spory-s-rabotnikami/",
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
          "name": "Можно ли обратиться до того, как возник спор с работником?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да. Юрист может проверить основание и документы до увольнения, сокращения, изменения условий труда или другого кадрового решения. На этой стадии обычно остаётся больше вариантов скорректировать процедуру и доказательственную базу."
          }
        },
        {
          "@type": "Question",
          "name": "Что делать, если работник уже подал иск?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Передайте юристу иск, приложения, кадровые документы и сведения о дате получения материалов. Нужно определить процессуальные сроки, проверить заявленные требования и подготовить доказательства и возражения от имени работодателя."
          }
        },
        {
          "@type": "Question",
          "name": "Какие документы нужны для первичной оценки?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Состав зависит от ситуации. Обычно нужны трудовой договор и дополнительные соглашения, локальные акты, приказы, должностная инструкция, уведомления, объяснения, переписка, расчётные документы, материалы ГИТ или суда. На первой консультации юрист уточнит минимальный комплект."
          }
        },
        {
          "@type": "Question",
          "name": "Можно ли полностью исключить риск оспаривания увольнения?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Нет. Работник вправе обратиться в государственные органы или суд, а результат зависит от обстоятельств и доказательств. Задача юридического сопровождения — проверить основания и процедуру, выявить слабые места и подготовить обоснованную позицию работодателя."
          }
        },
        {
          "@type": "Question",
          "name": "Юрист может вести переговоры с работником?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да, если такой формат согласован и подходит ситуации. Переговоры могут использоваться до кадрового решения, во время конфликта или после обращения работника в суд. Условия любого соглашения согласуются с работодателем."
          }
        },
        {
          "@type": "Question",
          "name": "Можно ли сопровождать проверку ГИТ после её начала?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да. Важно как можно раньше передать уведомление, запрос документов и имеющиеся материалы, чтобы проверить объём требований, подготовить документы и объяснения и определить порядок дальнейшего взаимодействия."
          }
        },
        {
          "@type": "Question",
          "name": "Можно ли работать дистанционно?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Консультацию, анализ документов и подготовку правовой позиции можно организовать дистанционно. Если требуется личное участие в переговорах, проверке или судебном заседании, место и порядок работы согласуются отдельно."
          }
        },
        {
          "@type": "Question",
          "name": "От чего зависит стоимость помощи?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "От стадии и сложности ситуации, объёма документов, количества работников, срочности, необходимости выезда, переговоров, взаимодействия с государственными органами и судебного представительства. Стоимость согласуется до начала соответствующего объёма работ."
          }
        }
      ]
    }
  ]
};

  const situations = [
  {
    "tag": "Претензия или иск",
    "title": "Работник оспаривает решение компании",
    "desc": "Получена претензия, жалоба или иск об увольнении, взыскании выплат, изменении условий труда либо дисциплинарном взыскании."
  },
  {
    "tag": "Сложное увольнение",
    "title": "Предстоит увольнение в конфликтной ситуации",
    "desc": "Нужно выбрать законное основание, проверить доказательства и оформить процедуру так, чтобы компания могла обосновать своё решение."
  },
  {
    "tag": "Оптимизация штата",
    "title": "Компания планирует сокращение",
    "desc": "Необходимо определить процедуру, учесть гарантии отдельным категориям работников, вакансии, уведомления и выплаты."
  },
  {
    "tag": "Внимание инспекции",
    "title": "Поступила жалоба или началась проверка ГИТ",
    "desc": "Важно оценить запрос, подготовить документы и объяснения, сопровождать взаимодействие с инспекцией и при необходимости обжаловать результат."
  },
  {
    "tag": "Убытки компании",
    "title": "Работник причинил компании ущерб",
    "desc": "До удержания или обращения в суд нужно установить размер прямого ущерба, причины, вину и соблюсти обязательную процедуру проверки."
  },
  {
    "tag": "ЧП на производстве",
    "title": "Произошёл несчастный случай",
    "desc": "Работодателю необходимо без промедления выполнить обязательные действия, организовать расследование и правильно оформить материалы."
  }
];
  
  const directions = [
  {
    "title": "Юридическое сопровождение увольнения работника",
    "desc": "Проверка основания и доказательств, подготовка документов, переговоры с работником и защита работодателя при оспаривании увольнения.",
    "link": "/biznesu/trudovye-spory-s-rabotnikami/soprovozhdenie-uvolneniya-rabotnika/"
  },
  {
    "title": "Юридическое сопровождение сокращения штата",
    "desc": "Правовая проверка процедуры, категорий работников, вакансий, уведомлений и выплат — от подготовки решения до завершения сокращения.",
    "link": "/biznesu/trudovye-spory-s-rabotnikami/soprovozhdenie-sokrashcheniya-shtata/"
  },
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
  },
  {
    "title": "Сопровождение расследования несчастного случая",
    "desc": "Помощь работодателю в обязательных действиях, работе комиссии, сборе материалов и защите позиции по итогам расследования.",
    "link": "/biznesu/trudovye-spory-s-rabotnikami/rassledovanie-neschastnogo-sluchaya-na-proizvodstve/"
  }
];
  const cases: CaseData[] = [
  {
    "category": "Конфликтное увольнение",
    "title": "Урегулировали спор без восстановления руководителя в должности",
    "problem": "После увольнения руководителя подразделения работник потребовал восстановления, выплату среднего заработка за время вынужденного прогула и компенсацию морального вреда. В документах работодателя были противоречия, повышавшие риск проигрыша в суде.",
    "action": "Проверили основание и процедуру увольнения, оценили доказательства сторон, рассчитали возможные расходы компании и подготовили позицию для переговоров. Предложили условия соглашения, закрывавшие спор без восстановления.",
    "result": "Стороны заключили соглашение: трудовые отношения не возобновлялись, выплачена согласованная сумма, работник отказался от претензий. Компания избежала длительного судебного процесса."
  },
  {
    "category": "Проверка трудовой инспекции",
    "title": "Не допустили предписания о заявленной работником задолженности",
    "problem": "Бывший сотрудник пожаловался в ГИТ на неоплату сверхурочной работы и потребовал начислить выплаты за несколько месяцев. Инспекция запросила трудовой договор, табели, приказы и расчётные листки.",
    "action": "Сопоставили документы с фактическим режимом работы, выявили расхождения в отдельных формах, подготовили подробные пояснения и систематизированный комплект материалов для инспектора.",
    "result": "Заявленная задолженность по сверхурочной работе не подтвердилась. Предписание о выплате не выдавалось; компания скорректировала кадровые документы."
  },
  {
    "category": "Материальный ущерб",
    "title": "Добились добровольного возмещения ущерба без суда",
    "problem": "После инвентаризации компания выявила недостачу оборудования, переданного материально ответственному работнику. Работник не соглашался с заявленным размером требований.",
    "action": "Организовали служебную проверку, собрали акты о передаче имущества, определили размер прямого действительного ущерба с учётом износа, получили письменные объяснения и оформили соглашение с графиком платежей.",
    "result": "Работник признал согласованную сумму ущерба и подписал обязательство о погашении. Компания получила выплаты без судебных издержек."
  }
];
  const processSteps = [
  {
    "num": "01",
    "title": "Первичная консультация",
    "desc": "Обсуждаем ситуацию с собственником, руководителем или HR, уточняем стадию конфликта, сроки и желаемый результат."
  },
  {
    "num": "02",
    "title": "Анализ документов и рисков",
    "desc": "Изучаем трудовой договор, локальные акты, приказы, переписку, объяснения, материалы проверки или суда. Выявляем слабые места."
  },
  {
    "num": "03",
    "title": "План действий",
    "desc": "Предлагаем правовой сценарий: корректное оформление кадрового решения, переговоры, ответ госоргану или судебная защита."
  },
  {
    "num": "04",
    "title": "Юридическая работа",
    "desc": "Готовим документы и правовую позицию, участвуем в переговорах и взаимодействии с ГИТ, представляем компанию в суде."
  },
  {
    "num": "05",
    "title": "Информирование",
    "desc": "Сообщаем о ходе работы, объясняем полученные решения, заранее согласовываем действия, влияющие на сроки или расходы."
  }
];
  const pricingTiers = [
  {
    "title": "Консультация и анализ",
    "subtitle": "Первичная правовая оценка",
    "price": "от 5 000 ₽",
    "features": [
      { name: "консультация по ситуации работодателя", value: "Да" },
      { name: "анализ основных документов", value: "Да" },
      { name: "оценка рисков и первоочередных действий", value: "Да" }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form",
    "analyticsEvent": "click_pricing_consultation_b2b_labor"
  },
  {
    "title": "Досудебная работа",
    "subtitle": "Документы и урегулирование",
    "price": "от 15 000 ₽",
    "features": [
      { name: "подготовка кадровых и правовых документов", value: "Да" },
      { name: "переговоры и письменная позиция", value: "Да" },
      { name: "обращения и ответы государственным органам", value: "Да" }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form",
    "analyticsEvent": "click_pricing_pre_court_b2b_labor"
  },
  {
    "title": "Судебная защита",
    "subtitle": "Представительство работодателя",
    "price": "от 30 000 ₽",
    "features": [
      { name: "подготовка процессуальных документов", value: "Да" },
      { name: "формирование доказательственной позиции", value: "Да" },
      { name: "представительство в суде", value: "Да" }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form",
    "analyticsEvent": "click_pricing_court_b2b_labor"
  }
];
  const faqs = [
  {
    "q": "Можно ли обратиться до того, как возник спор с работником?",
    "a": "Да. Юрист может проверить основание и документы до увольнения, сокращения, изменения условий труда или другого кадрового решения. На этой стадии обычно остаётся больше вариантов скорректировать процедуру и доказательственную базу."
  },
  {
    "q": "Что делать, если работник уже подал иск?",
    "a": "Передайте юристу иск, приложения, кадровые документы и сведения о дате получения материалов. Нужно определить процессуальные сроки, проверить заявленные требования и подготовить доказательства и возражения от имени работодателя."
  },
  {
    "q": "Какие документы нужны для первичной оценки?",
    "a": "Состав зависит от ситуации. Обычно нужны трудовой договор и дополнительные соглашения, локальные акты, приказы, должностная инструкция, уведомления, объяснения, переписка, расчётные документы, материалы ГИТ или суда. На первой консультации юрист уточнит минимальный комплект."
  },
  {
    "q": "Можно ли полностью исключить риск оспаривания увольнения?",
    "a": "Нет. Работник вправе обратиться в государственные органы или суд, а результат зависит от обстоятельств и доказательств. Задача юридического сопровождения — проверить основания и процедуру, выявить слабые места и подготовить обоснованную позицию работодателя."
  },
  {
    "q": "Юрист может вести переговоры с работником?",
    "a": "Да, если такой формат согласован и подходит ситуации. Переговоры могут использоваться до кадрового решения, во время конфликта или после обращения работника в суд. Условия любого соглашения согласуются с работодателем."
  },
  {
    "q": "Можно ли сопровождать проверку ГИТ после её начала?",
    "a": "Да. Важно как можно раньше передать уведомление, запрос документов и имеющиеся материалы, чтобы проверить объём требований, подготовить документы и объяснения и определить порядок дальнейшего взаимодействия."
  },
  {
    "q": "Можно ли работать дистанционно?",
    "a": "Консультацию, анализ документов и подготовку правовой позиции можно организовать дистанционно. Если требуется личное участие в переговорах, проверке или судебном заседании, место и порядок работы согласуются отдельно."
  },
  {
    "q": "От чего зависит стоимость помощи?",
    "a": "От стадии и сложности ситуации, объёма документов, количества работников, срочности, необходимости выезда, переговоров, взаимодействия с государственными органами и судебного представительства. Стоимость согласуется до начала соответствующего объёма работ."
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
            <span style={{ color: 'var(--color-text-main)' }}>Трудовые споры с работниками</span>
          </>
        }
        superTitle="Помощь работодателям в Липецке и области"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Трудовые споры</span> <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>с работниками в Липецке</span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Помогаем законно провести сложное кадровое решение, урегулировать конфликт с работником, подготовиться к проверке ГИТ и защитить интересы компании в суде.
          </span>
        }
        primaryCtaText="Обсудить ситуацию"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_b2b_labor"
        primaryCtaSubtext={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Перезвоним вам в течение 15 минут
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              в рабочее время
            </span>
          </span>
        }
        trustItems={[
  {
    "text": "Оцениваем основания и кадровые риски"
  },
  {
    "text": "Защищаем интересы компании при проверках и в суде"
  },
  {
    "text": "Разрабатываем документы под конкретную ситуацию"
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
              <span style={{ display: "inline-block" }}>Когда работодателю стоит</span> <br /><span style={{ display: "inline-block" }}>подключить трудового юриста</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Чем раньше проверены основания, документы и последовательность действий, тем больше возможностей снизить риск спора, восстановления работника, выплат и санкций.
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

      

      {/* ═══ БЛОК НАПРАВЛЕНИЙ / СВЯЗАННЫХ УСЛУГ ═══ */}
      <section id="directions" className="section" style={{ padding: '64px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>Направления помощи</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Подключаемся на стадии подготовки кадрового решения, досудебного конфликта, проверки или судебного разбирательства. Выберите ситуацию, чтобы увидеть порядок и объём помощи.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '32px' }}>
            {directions.map((dir, i) => (
              <a key={i} href={dir.link} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div
                  className="card service-card"
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
                    cursor: 'pointer'
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
          </div>

          {/* Баннер «Не нашли свою ситуацию?» */}
          <div
            style={{
              marginTop: '32px',
              background: 'linear-gradient(135deg, var(--color-deep-blue) 0%, #17324D 100%)',
              padding: '40px 48px',
              borderTop: '3px solid var(--color-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '32px',
              flexWrap: 'wrap',
              boxShadow: '0 12px 30px rgba(11, 28, 42, 0.15)'
            }}
          >
            <div style={{ flex: '1 1 500px', minWidth: '280px' }}>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '26px', fontFamily: 'var(--font-serif)', color: '#FFFFFF', lineHeight: 1.3 }}>
                Не нашли свою ситуацию?
              </h3>
              <p style={{ margin: 0, fontSize: '15px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6 }}>
                <span style={{ display: 'inline-block' }}>Опишите ваш трудовой вопрос в форме. Изучим имеющиеся документы</span> <br />
                <span style={{ display: 'inline-block' }}>и предложим возможные варианты решения.</span>
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <a
                href="#form"
                className="btn white-btn-custom"
                style={{
                  display: 'inline-block',
                  textAlign: 'center',
                  fontSize: '15px',
                  padding: '14px 28px',
                  fontWeight: 600,
                  whiteSpace: 'nowrap'
                }}
              >
                Описать ситуацию
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: КУРАТОР НАПРАВЛЕНИЯ ═══ */}
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
      <ProcessBlock title="Как проходит работа"
        subtitle="Прозрачный и понятный процесс от первой консультации до защиты позиции компании"
        steps={processSteps}
      />

      {/* ═══ БЛОК 8: СТОИМОСТЬ ЮРИДИЧЕСКОЙ ПОМОЩИ ═══ */}
      <PricingBlock
        title="Стоимость юридической помощи"
        subtitle="Стоимость зависит от стадии спора, объёма документов, срочности и необходимости участия в переговорах, проверке или суде."
        tiers={pricingTiers}
        disclaimer="Стоимость определяется после уточнения задачи и изучения имеющихся документов. Состав услуг, цена и порядок оплаты фиксируются в договоре до начала работы. Оплата вознаграждения исполнителя не зависит от исхода дела и не включает государственные пошлины и сопутствующие расходы."
      />

      {/* ═══ БЛОК 9: ЧАСТЫЕ ВОПРОСЫ (FAQ) ═══ */}
      <FAQBlock
        superTitle="Частые вопросы работодателей"
        title=<><span>Ответы на</span> <br /><span>частые вопросы</span></>
        subtitle="О процедурах, проверках, рисках и порядке работы"
        ctaText="Задать свой вопрос"
        ctaLink="#form"
        faqs={faqs}
      />

      {/* ═══ БЛОК 10: ФИНАЛЬНАЯ ФОРМА ═══ */}
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
                <span className="hero-title-span-mobile" style={{ display: "block", whiteSpace: "nowrap" }}>Получите первичную</span> <span className="hero-title-span-mobile" style={{ display: "block", whiteSpace: "nowrap" }}>оценку ситуации</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко опишите, что произошло, и оставьте контактные данные. Обращение будет передано Марине Валерьевне Смольяниновой. Она уточнит, какие документы есть у компании, изучит обстоятельства и согласует с вами консультацию.
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
                commentPlaceholder="Кратко опишите ситуацию: спор с работником, проверка ГИТ, увольнение, кадровый вопрос..."
                hiddenFields={[
  {
    "name": "source_page",
    "value": "/biznesu/trudovye-spory-s-rabotnikami/"
  },
  {
    "name": "direction",
    "value": "trudovye_spory_b2b"
  },
  {
    "name": "selected_specialist",
    "value": "smolyaninova-marina-valerevna"
  },
  {
    "name": "service_id",
    "value": "b2b-labor-disputes"
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
