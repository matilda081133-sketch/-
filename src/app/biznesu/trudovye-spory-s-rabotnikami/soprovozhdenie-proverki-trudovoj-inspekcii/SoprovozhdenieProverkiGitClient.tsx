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

export default function SoprovozhdenieProverkiGitClient() {
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
          "name": "Проверки трудовой инспекции",
          "item": "https://dejure-help.ru/biznesu/trudovye-spory-s-rabotnikami/soprovozhdenie-proverki-trudovoj-inspekcii/"
        }
      ]
    },
    {
      "@type": "Service",
      "name": "Сопровождение проверок трудовой инспекции в Липецке",
      "description": "Правовая защита работодателя при плановых и внеплановых проверках ГИТ, прокурорских проверках и профилактических визитах.",
      "url": "https://dejure-help.ru/biznesu/trudovye-spory-s-rabotnikami/soprovozhdenie-proverki-trudovoj-inspekcii/",
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
          "name": "Может ли трудовая инспекция прийти с внеплановой проверкой без предупреждения?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "О проведении внеплановой выездной проверки работодатель должен быть уведомлен не менее чем за 24 часа. Без предварительного уведомления проверка возможна только при угрозе причинения вреда жизни и здоровью граждан по согласованию с прокуратурой."
          }
        },
        {
          "@type": "Question",
          "name": "Какой срок дается на предоставление документов по запросу ГИТ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Срок указывается в распоряжении инспектора и обычно составляет от 2 до 10 рабочих дней. При невозможности предоставить документы в срок необходимо направить мотивированное ходатайство о продлении срока."
          }
        },
        {
          "@type": "Question",
          "name": "В какой срок можно обжаловать предписание трудовой инспекции?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Предписание может быть обжаловано в вышестоящий орган инспекции труда в течение 10 рабочих дней или в суд в порядке административного судопроизводства (КАС РФ) в течение 3 месяцев со дня его получения."
          }
        },
        {
          "@type": "Question",
          "name": "Может ли инспектор ГИТ оштрафовать и организацию, и директора одновременно?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да, КоАП РФ допускает одновременное привлечение к ответственности юридического лица и его должностного лица (руководителя) за одно и то же нарушение с назначением раздельных штрафов."
          }
        },
        {
          "@type": "Question",
          "name": "Обязательно ли пускать инспектора на территорию предприятия?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Инспектор имеет право беспрепятственного прохода при предъявлении служебного удостоверения и заверенной копии распоряжения о проведении выездной проверки. Необоснованный отказ влечет ответственность по ст. 19.4.1 КоАП РФ."
          }
        }
      ]
    }
  ]
};

  const situations = [
  {
    "tag": "Жалоба работника",
    "title": "Поступила жалоба действующего или бывшего сотрудника",
    "desc": "Оцениваем предмет претензии (задержка выплат, увольнение, охрана труда) и готовим позицию до визита инспектора."
  },
  {
    "tag": "Запрос документов",
    "title": "Получено распоряжение или запрос о предоставлении документов",
    "desc": "Проверяем правомерность истребуемого списка, сроки и готовим систематизированный пакет с сопроводительным письмом."
  },
  {
    "tag": "Внеплановый контроль",
    "title": "Назначена внеплановая документарная или выездная проверка",
    "desc": "Контролируем соблюдение полномочий инспектора и сопровождаем очные проверочные действия."
  },
  {
    "tag": "Профилактический визит",
    "title": "Назначен обязательный или профилактический визит ГИТ",
    "desc": "Готовим персонал и документы, выявляем зоны риска и предотвращаем перевод визита в контрольное мероприятие."
  },
  {
    "tag": "Выдано предписание",
    "title": "Инспекция выдала предписание об устранении нарушений",
    "desc": "Оцениваем исполнимость требований, готовим отчет об исполнении либо подаем жалобу на отмену предписания."
  },
  {
    "tag": "Наложен штраф",
    "title": "Составлен протокол об административном правонарушении",
    "desc": "Обжалуем постановление о привлечении к ответственности в вышестоящий орган или в суд для отмены или снижения штрафа."
  }
];
  const checkpoints = [
  {
    "title": "Полномочия и основания",
    "desc": "Проверка оснований проведения проверки по Федеральному закону № 248-ФЗ и наличия согласования с прокуратурой."
  },
  {
    "title": "Объем истребуемых сведений",
    "desc": "Исключение запросов документов, не относящихся к предмету проверки или уже имеющихся в распоряжении госорганов."
  },
  {
    "title": "Соответствие табелей и расчетов",
    "desc": "Аудит расчетных листков, табелей учета рабочего времени, графиков отпусков и приказов на предмет внутренних противоречий."
  },
  {
    "title": "Охрана труда и инструктажи",
    "desc": "Проверка журналов инструктажей, карт СОУТ, норм выдачи СИЗ и медицинских осмотров работников."
  },
  {
    "title": "Письменные пояснения",
    "desc": "Составление юридически мотивированных ответов на вопросы инспектора, закрывающих спорные моменты."
  },
  {
    "title": "Процессуальные сроки",
    "desc": "Контроль сроков проведения проверки, составления акта и вынесения постановлений для фиксации нарушений инспекции."
  }
];
  const directions = [
  {
    "title": "Кадровый аудит организации",
    "desc": "Проверка трудовых договоров, локальных актов и кадровых процедур с перечнем рисков и рекомендациями по устранению нарушений.",
    "link": "/biznesu/trudovye-spory-s-rabotnikami/kadrovyj-audit/"
  },
  {
    "title": "Юридическое сопровождение увольнения работника",
    "desc": "Проверка основания и доказательств, подготовка документов, переговоры с работником и защита работодателя при оспаривании.",
    "link": "/biznesu/trudovye-spory-s-rabotnikami/soprovozhdenie-uvolneniya-rabotnika/"
  },
  {
    "title": "Расследование несчастного случая на производстве",
    "desc": "Помощь работодателю в обязательных действиях, работе комиссии, сборе материалов и защите позиции компании.",
    "link": "/biznesu/trudovye-spory-s-rabotnikami/rassledovanie-neschastnogo-sluchaya-na-proizvodstve/"
  }
];
  const cases: CaseData[] = [
  {
    "category": "Проверка по жалобе",
    "title": "Не допустили предписания о заявленной работником задолженности",
    "problem": "Бывший сотрудник пожаловался в ГИТ на неоплату сверхурочной работы и потребовал начислить выплаты за несколько месяцев.",
    "action": "Сопоставили документы с фактическим режимом работы, выявили расхождения в отдельных формах, подготовили подробные пояснения.",
    "result": "Задолженность не подтвердилась. Предписание о выплате не выдавалось; компания устранила формальные недочеты."
  },
  {
    "category": "Отмена штрафа",
    "title": "Отменили в суде штраф ГИТ в размере 130 000 рублей",
    "problem": "Инспектор вынес постановление о штрафе за нарушения в оформлении трудовых договоров по ст. 5.27 КоАП РФ.",
    "action": "Доказали процессуальные нарушения при составлении протокола и малозначительность технической ошибки в договоре.",
    "result": "Постановление инспекции отменено судом, производство по административному делу прекращено."
  },
  {
    "category": "Предотвращение санкций",
    "title": "Урегулировали претензии инспектора на стадии профилактического визита",
    "problem": "В ходе визита выявлены замечания к локальным актам об оплате труда, грозившие перерасти во внеплановую проверку.",
    "action": "Оперативно разработали новую редакцию Положения об оплате труда и согласовали устранение замечаний без санкций.",
    "result": "Проверка не назначалась, компании выданы исключительно рекомендации без наложения штрафов."
  }
];
  const processSteps = [
  {
    "num": "01",
    "title": "Анализ запроса и оснований",
    "desc": "Изучаем распоряжение о проверке, проверяем законность требований и определяем стратегию взаимодействия."
  },
  {
    "num": "02",
    "title": "Экспертиза документов",
    "desc": "Проводим аудит кадровых документов перед передачей инспектору, устраняем технические ошибки."
  },
  {
    "num": "03",
    "title": "Подготовка пояснений",
    "desc": "Составляем правовые комментарии и сопроводительные письма по каждому пункту запроса."
  },
  {
    "num": "04",
    "title": "Взаимодействие с инспектором",
    "desc": "Представляем интересы компании при ознакомлении с материалами, даче объяснений и составлении акта."
  },
  {
    "num": "05",
    "title": "Обжалование результатов",
    "desc": "При несогласии с выводами инспекции готовим возражения на акт, обжалуем предписание или штраф в суде."
  }
];
  const pricingTiers = [
  {
    "title": "Анализ запроса и пояснения",
    "subtitle": "Документарная проверка",
    "price": "от 10 000 ₽",
    "features": [
      { name: "правовой анализ требований ГИТ", value: "Да" },
      { name: "проверка пакета документов", value: "Да" },
      { name: "подготовка мотивированного ответа", value: "Да" }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form",
    "analyticsEvent": "click_pricing_docs_git"
  },
  {
    "popular": true,
    "badgeText": "ПОПУЛЯРНЫЙ ВЫБОР",
    "title": "Полное сопровождение проверки",
    "subtitle": "Под ключ с взаимодействием",
    "price": "от 25 000 ₽",
    "features": [
      { name: "участие во взаимодействии с инспектором", value: "Да" },
      { name: "контроль процессуальных сроков", value: "Да" },
      { name: "составление возражений на акт", value: "Да" }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form",
    "analyticsEvent": "click_pricing_full_git"
  },
  {
    "title": "Обжалование предписания / штрафа",
    "subtitle": "Судебная защита",
    "price": "от 30 000 ₽",
    "features": [
      { name: "подготовка жалобы в ГИТ / суд", value: "Да" },
      { name: "представительство в судебных заседаниях", value: "Да" },
      { name: "отмена штрафов и предписаний", value: "Да" }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form",
    "analyticsEvent": "click_pricing_appeal_git"
  }
];
  const faqs = [
  {
    "q": "Может ли трудовая инспекция прийти с внеплановой проверкой без предупреждения?",
    "a": "О проведении внеплановой выездной проверки работодатель должен быть уведомлен не менее чем за 24 часа. Без предварительного уведомления проверка возможна только при угрозе причинения вреда жизни и здоровью граждан по согласованию с прокуратурой."
  },
  {
    "q": "Какой срок дается на предоставление документов по запросу ГИТ?",
    "a": "Срок указывается в распоряжении инспектора и обычно составляет от 2 до 10 рабочих дней. При невозможности предоставить документы в срок необходимо направить мотивированное ходатайство о продлении срока."
  },
  {
    "q": "В какой срок можно обжаловать предписание трудовой инспекции?",
    "a": "Предписание может быть обжаловано в вышестоящий орган инспекции труда в течение 10 рабочих дней или в суд в порядке административного судопроизводства (КАС РФ) в течение 3 месяцев со дня его получения."
  },
  {
    "q": "Может ли инспектор ГИТ оштрафовать и организацию, и директора одновременно?",
    "a": "Да, КоАП РФ допускает одновременное привлечение к ответственности юридического лица и его должностного лица (руководителя) за одно и то же нарушение с назначением раздельных штрафов."
  },
  {
    "q": "Обязательно ли пускать инспектора на территорию предприятия?",
    "a": "Инспектор имеет право беспрепятственного прохода при предъявлении служебного удостоверения и заверенной копии распоряжения о проведении выездной проверки. Необоснованный отказ влечет ответственность по ст. 19.4.1 КоАП РФ."
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
            <span style={{ color: 'var(--color-text-main)' }}>Проверки трудовой инспекции</span>
          </>
        }
        superTitle="Помощь работодателям в Липецке и области"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Сопровождение проверок</span> <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>трудовой инспекции</span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Анализируем запрос и риски, готовим документы и объяснения, участвуем во взаимодействии с ГИТ и защищаем компанию при предписаниях или штрафах.
          </span>
        }
        primaryCtaText="Обсудить проверку"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_git"
        primaryCtaSubtext={
          <span style={{ display: 'block' }}>
            <span style={{ whiteSpace: 'nowrap' }}>Перезвоним вам в течение 15 минут в рабочее время</span>
          </span>
        }
        trustItems={[
  {
    "text": "Анализируем законность требований инспектора"
  },
  {
    "text": "Готовим пояснения и комплект кадровых документов"
  },
  {
    "text": "Обжалуем неправомерные предписания и штрафы"
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
              <span style={{ display: "inline-block" }}>Когда работодателю необходима</span> <br /><span style={{ display: "inline-block" }}>помощь при проверке ГИТ</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Оперативное подключение юриста на этапе запроса документов позволяет исключить избыточные требования инспектора и предотвратить штрафы до сотен тысяч рублей.
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
              <span style={{ display: "inline-block" }}>Что проверяет юрист</span> <br /><span style={{ display: "inline-block" }}>при получении запроса ГИТ</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Правовой фильтр исключает предоставление лишних документов, которые могут послужить поводом для расширения проверки.
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
      

      {/* ═══ БЛОК НАПРАВЛЕНИЙ / СВЯЗАННЫХ УСЛУГ ═══ */}
      <section id="directions" className="section" style={{ padding: '64px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>Смежные услуги направления</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Превентивная защита и урегулирование кадровых конфликтов.
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
      <ProcessBlock title="Порядок сопровождения проверки"
        subtitle="Защита интересов работодателя на всех стадиях взаимодействия с ГИТ"
        steps={processSteps}
      />

      {/* ═══ БЛОК 8: СТОИМОСТЬ ЮРИДИЧЕСКОЙ ПОМОЩИ ═══ */}
      <PricingBlock
        title="Стоимость сопровождения проверок ГИТ"
        subtitle="Прозрачные тарифы в зависимости от формата и стадии проверки."
        tiers={pricingTiers}
        disclaimer="Стоимость определяется после уточнения задачи и изучения имеющихся документов. Состав услуг, цена и порядок оплаты фиксируются в договоре до начала работы. Оплата вознаграждения исполнителя не зависит от исхода дела и не включает государственные пошлины и сопутствующие расходы."
      />

      {/* ═══ БЛОК 9: ЧАСТЫЕ ВОПРОСЫ (FAQ) ═══ */}
      <FAQBlock
        superTitle="Вопросы о проверках трудовой инспекции"
        title=<><span>Ответы на вопросы</span> <br /><span>по проверкам ГИТ</span></>
        subtitle="Права работодателя, полномочия инспекторов и сроки"
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
                  Связаться с юристом
                </span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                <span className="hero-title-span-mobile" style={{ display: "block", whiteSpace: "nowrap" }}>Помощь при проверке</span> <span className="hero-title-span-mobile" style={{ display: "block", whiteSpace: "nowrap" }}>трудовой инспекции</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Получили запрос или уведомление от ГИТ? Марина Валерьевна Смольянинова оперативно изучит документы и подготовит безопасный ответ.
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
                commentPlaceholder="Опишите ситуацию: от кого поступил запрос, какие документы запрашивают, какие сроки указаны..."
                hiddenFields={[
  {
    "name": "source_page",
    "value": "/biznesu/trudovye-spory-s-rabotnikami/soprovozhdenie-proverki-trudovoj-inspekcii/"
  },
  {
    "name": "direction",
    "value": "soprovozhdenie_proverki_git"
  },
  {
    "name": "selected_specialist",
    "value": "smolyaninova-marina-valerevna"
  },
  {
    "name": "service_id",
    "value": "b2b-git-check"
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
