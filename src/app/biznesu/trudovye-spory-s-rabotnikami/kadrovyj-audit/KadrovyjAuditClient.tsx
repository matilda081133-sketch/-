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

export default function KadrovyjAuditClient() {
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
          "name": "Кадровый аудит организации",
          "item": "https://dejure-help.ru/biznesu/trudovye-spory-s-rabotnikami/kadrovyj-audit/"
        }
      ]
    },
    {
      "@type": "Service",
      "name": "Кадровый аудит организации в Липецке",
      "description": "Превентивная юридическая проверка кадровой документации и трудовых процессов компании для снижения рисков проверок ГИТ и судебных споров.",
      "url": "https://dejure-help.ru/biznesu/trudovye-spory-s-rabotnikami/kadrovyj-audit/",
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
          "name": "Можно ли провести кадровый аудит полностью дистанционно?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да. Вы можете предоставить скан-копии или электронные образы документов через защищенный канал связи. Результаты проверки, аналитический отчет и обновленные шаблоны передаются в электронном виде с подробной онлайн-консультацией юриста."
          }
        },
        {
          "@type": "Question",
          "name": "Как обеспечивается конфиденциальность коммерческой информации?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "До начала работ подписывается соглашение о неразглашении конфиденциальной информации (NDA) и договор об оказании юридических услуг с жесткими обязательствами по сохранению коммерческой и персональной тайны."
          }
        },
        {
          "@type": "Question",
          "name": "Сколько времени занимает проведение кадрового аудита?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Срок зависит от численности штата и объема документов. Экспресс-аудит занимает от 3 до 5 рабочих дней, комплексный аудит средней компании — от 7 до 14 рабочих дней."
          }
        },
        {
          "@type": "Question",
          "name": "Какие локальные нормативные акты обязательны для каждого работодателя?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "К обязательным ЛНА относятся: Правила внутреннего трудового распорядка (ПВТР), Положение об оплате труда (если условия не исчерпываются договором), Положение о защите персональных данных работников, Инструкции по охране труда и График отпусков."
          }
        },
        {
          "@type": "Question",
          "name": "Помогает ли аудит исправить документы задним числом?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Аудит выявляет пробелы и предлагает законные правовые механизмы их закрытия: составление дополнительных соглашений, актуализацию приказов текущей датой и приведение локальных актов в соответствие с фактическими процессами компании."
          }
        }
      ]
    }
  ]
};

  const situations = [
  {
    "tag": "Смена кадров / руководства",
    "title": "Сменился генеральный директор или главный кадровик",
    "desc": "Необходимо провести инвентаризацию кадрового архива, зафиксировать состояние документации и разграничить ответственность."
  },
  {
    "tag": "Подготовка к проверке",
    "title": "Ожидается плановая проверка ГИТ или прокуратуры",
    "desc": "Проводим комплексную предпроверочную экспертизу всех обязательных журналов, договоров, табелей и локальных актов."
  },
  {
    "tag": "Рост бизнеса",
    "title": "Масштабирование штата или открытие филиалов",
    "desc": "Разрабатываем единые стандарты трудовых отношений, типизируем трудовые договоры и положения под расширенную структуру."
  },
  {
    "tag": "Конфликтная среда",
    "title": "Риск трудовых споров или жалоб в инспекцию",
    "desc": "Проверяем правильность установления окладов, премий, надбавок и фиксации рабочего времени для защиты от финансовых претензий."
  },
  {
    "tag": "Удаленный персонал",
    "title": "Применение дистанционного и гибридного формата",
    "desc": "Адаптируем трудовые договоры и локальные акты под требования главы 49.1 ТК РФ об особенностях дистанционной работы."
  },
  {
    "tag": "Продажа / Due Diligence",
    "title": "Подготовка бизнеса к продаже или реорганизации",
    "desc": "Оцениваем потенциальные кадровые обязательства и скрытые трудовые риски для собственников и инвесторов."
  }
];
  const checkpoints = [
  {
    "title": "Трудовые договоры",
    "desc": "Анализ обязательных условий по ст. 57 ТК РФ: трудовая функция, условия труда на рабочем месте, режим работы, оплата труда."
  },
  {
    "title": "Локальные нормативные акты",
    "desc": "Проверка ПВТР, Положения об оплате труда и премировании, Положения о защите персональных данных, Положения о коммерческой тайне."
  },
  {
    "title": "Оплата труда и табели",
    "desc": "Соответствие табелей учета рабочего времени графикам, проверка корректности начисления сверхурочных, ночных и праздничных выплат."
  },
  {
    "title": "Охрана труда и СОУТ",
    "desc": "Наличие карт специальной оценки условий труда, журналов проведения вводных и периодических инструктажей, медосмотров."
  },
  {
    "title": "Материальная ответственность",
    "desc": "Законность заключения договоров о полной индивидуальной и коллективной материальной ответственности по перечням Минтруда."
  },
  {
    "title": "Отчет и рекомендации",
    "desc": "Предоставление детализированного отчета со ссылками на нормы ТК РФ, классификацией рисков по степени критичности и проектами исправлений."
  }
];
  const directions = [
  {
    "title": "Сопровождение проверок трудовой инспекции",
    "desc": "Анализ запроса и рисков, подготовка документов и объяснений, участие во взаимодействии с ГИТ, обжалование предписания или штрафа.",
    "link": "/biznesu/trudovye-spory-s-rabotnikami/soprovozhdenie-proverki-trudovoj-inspekcii/"
  },
  {
    "title": "Юридическое сопровождение увольнения работника",
    "desc": "Проверка основания и доказательств, подготовка документов, переговоры с работником и защита работодателя при оспаривании.",
    "link": "/biznesu/trudovye-spory-s-rabotnikami/soprovozhdenie-uvolneniya-rabotnika/"
  },
  {
    "title": "Взыскание материального ущерба с работника",
    "desc": "Фиксация обстоятельств и размера ущерба, служебная проверка, добровольное урегулирование либо обращение в суд.",
    "link": "/biznesu/trudovye-spory-s-rabotnikami/vzyskanie-materialnogo-ushcherba-s-rabotnika/"
  }
];
  const cases: CaseData[] = [
  {
    "category": "Предотвращение штрафов",
    "title": "Устранили нарушения в договорах 65 сотрудников до проверки ГИТ",
    "problem": "В ходе выборочного аудита выявлено отсутствие обязательных условий о классе условий труда и компенсациях за вредность.",
    "action": "Разработали типовые дополнительные соглашения к трудовым договорам и регламентировали ознакомление с результатами СОУТ.",
    "result": "Плановая проверка ГИТ прошла без единого замечания и предписания. Предотвращены штрафы на сумму свыше 500 000 ₽."
  },
  {
    "category": "Оптимизация локальных актов",
    "title": "Переработали систему премирования и исключили риск взыскания бонусов",
    "problem": "Положение об оплате труда содержало размытые критерии депремирования, создававшие риск проигрыша споров с уволенными сотрудниками.",
    "action": "Внедрили прозрачную систему стимулирующих выплат с четкими условиями начисления премии в зависимости от показателей.",
    "result": "Компания защищена от необоснованных требований о выплате годовых бонусов при расторжении договоров."
  },
  {
    "category": "Инвентаризация архива",
    "title": "Восстановили кадровый учет логистического оператора при смене руководства",
    "problem": "У нового директора отсутствовали подтверждения ознакомления 40 водителей с графиками сменности и нормами расхода ГСМ.",
    "action": "Провели аудит за 3 предшествующих года, восстановили недостающие приказы, листы ознакомления и журналы учета.",
    "result": "Кадровый архив полностью упорядочен, риски ответственности нового руководителя нивелированы."
  }
];
  const processSteps = [
  {
    "num": "01",
    "title": "Определение периметра проверки",
    "desc": "Согласовываем объем (сплошной аудит или выборочная проверка ключевых позиций) и перечень документов."
  },
  {
    "num": "02",
    "title": "Сбор и экспертиза документации",
    "desc": "Изучаем локальные нормативные акты, трудовые договоры, приказы, журналы и табели компании."
  },
  {
    "num": "03",
    "title": "Классификация выявленных рисков",
    "desc": "Группируем нарушения по степени опасности: критические (штрафы/дисквалификация), существенные и технические."
  },
  {
    "num": "04",
    "title": "Подготовка отчета и дорожной карты",
    "desc": "Формируем письменное заключение с конкретными ссылками на закон и проектами исправлений."
  },
  {
    "num": "05",
    "title": "Внедрение изменений и консультация",
    "desc": "Передаем исправленные шаблоны документов и проводим инструктаж для руководства и кадровой службы."
  }
];
  const pricingTiers = [
  {
    "title": "Экспресс-аудит (до 20 чел.)",
    "subtitle": "Выборочная проверка базы",
    "price": "от 15 000 ₽",
    "features": [
      { name: "проверка обязательных локальных актов", value: "Да" },
      { name: "аудит типовых трудовых договоров", value: "Да" },
      { name: "отчет с рекомендациями", value: "Да" }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form",
    "analyticsEvent": "click_pricing_express_audit"
  },
  {
    "popular": true,
    "badgeText": "Востребовано",
    "title": "Комплексный аудит (до 50 чел.)",
    "subtitle": "Полная проверка документации",
    "price": "от 35 000 ₽",
    "features": [
      { name: "сплошная проверка всех договоров", value: "Да" },
      { name: "аудит табелей", value: "Да" },
      { name: "отпусков и приказов", value: "Да" },
      { name: "пакет шаблонов для исправления", value: "Да" }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form",
    "analyticsEvent": "click_pricing_full_audit"
  },
  {
    "title": "Аудит крупного бизнеса (50+ чел.)",
    "subtitle": "Индивидуальный периметр",
    "price": "от 55 000 ₽",
    "features": [
      { name: "аудит филиалов и обособленных подразделений", value: "Да" },
      { name: "разработка кадровой политики под ключ", value: "Да" },
      { name: "сопровождение внедрения регламентов", value: "Да" }
    ],
    "buttonText": "Уточнить стоимость",
    "buttonHref": "#form",
    "analyticsEvent": "click_pricing_enterprise_audit"
  }
];
  const faqs = [
  {
    "q": "Можно ли провести кадровый аудит полностью дистанционно?",
    "a": "Да. Вы можете предоставить скан-копии или электронные образы документов через защищенный канал связи. Результаты проверки, аналитический отчет и обновленные шаблоны передаются в электронном виде с подробной онлайн-консультацией юриста."
  },
  {
    "q": "Как обеспечивается конфиденциальность коммерческой информации?",
    "a": "До начала работ подписывается соглашение о неразглашении конфиденциальной информации (NDA) и договор об оказании юридических услуг с жесткими обязательствами по сохранению коммерческой и персональной тайны."
  },
  {
    "q": "Сколько времени занимает проведение кадрового аудита?",
    "a": "Срок зависит от численности штата и объема документов. Экспресс-аудит занимает от 3 до 5 рабочих дней, комплексный аудит средней компании — от 7 до 14 рабочих дней."
  },
  {
    "q": "Какие локальные нормативные акты обязательны для каждого работодателя?",
    "a": "К обязательным ЛНА относятся: Правила внутреннего трудового распорядка (ПВТР), Положение об оплате труда (если условия не исчерпываются договором), Положение о защите персональных данных работников, Инструкции по охране труда и График отпусков."
  },
  {
    "q": "Помогает ли аудит исправить документы задним числом?",
    "a": "Аудит выявляет пробелы и предлагает законные правовые механизмы их закрытия: составление дополнительных соглашений, актуализацию приказов текущей датой и приведение локальных актов в соответствие с фактическими процессами компании."
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
            <span style={{ color: 'var(--color-text-main)' }}>Кадровый аудит организации</span>
          </>
        }
        superTitle="Помощь работодателям в Липецке и области"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Кадровый аудит
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              и проверка документов
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Проверяем трудовые договоры, локальные нормативные акты и кадровые процедуры для предотвращения штрафов ГИТ и трудовых споров с работниками.
          </span>
        }
        primaryCtaText="Заказать аудит"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_audit"
        primaryCtaSubtext={
          <span style={{ display: 'block' }}>
            <span style={{ whiteSpace: 'nowrap' }}>Перезвоним вам в течение 15 минут в рабочее время</span>
          </span>
        }
        trustItems={[
  {
    "text": "Выявляем скрытые риски в кадровых документах"
  },
  {
    "text": "Разрабатываем персональные рекомендации и правки"
  },
  {
    "text": "Готовим компанию к плановым проверкам и проверкам ГИТ"
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
              <span style={{ display: "inline-block" }}>Когда компании</span> <br /><span style={{ display: "inline-block" }}>необходим аудит</span> <br /><span style={{ display: "inline-block" }}>кадровых документов</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Своевременный аудит позволяет выявить системные ошибки в кадровом учете и локальных актах до того, как они повлекут штрафы или претензии работников.
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
                  Что входит в программу кадрового аудита организации
                </h3>
              </div>
            </div>

            <p style={{ margin: '0 0 28px 0', fontSize: '15px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, maxWidth: '820px' }}>
              Выявляем скрытые правовые риски, несоответствия локальных актов и предотвращаем претензии работников и надзорных органов:
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
      <ProcessBlock title="Как мы проводим кадровый аудит"
        subtitle="Поэтапная методика правовой экспертизы кадровых процессов"
        steps={processSteps}
      />

      {/* ═══ БЛОК 8: СТОИМОСТЬ ЮРИДИЧЕСКОЙ ПОМОЩИ ═══ */}
      <PricingBlock
        title="Стоимость кадрового аудита"
        subtitle="Стоимость зависит от численности персонала компании и глубины проверки."
        tiers={pricingTiers}
        disclaimer="Стоимость определяется после уточнения задачи и изучения имеющихся документов. Состав услуг, цена и порядок оплаты фиксируются в договоре до начала работы. Оплата вознаграждения исполнителя не зависит от исхода дела и не включает государственные пошлины и сопутствующие расходы."
      />

      {/* ═══ БЛОК 9: ЧАСТЫЕ ВОПРОСЫ (FAQ) ═══ */}
      <FAQBlock
        superTitle="Вопросы о кадровом аудите"
        title=<><span>Ответы на вопросы</span> <br /><span>по кадровому аудиту</span></>
        subtitle="Форматы проведения, конфиденциальность и результаты"
        ctaText="Задать свой вопрос"
        ctaLink="#form"
        faqs={faqs}
      />

      {/* ═══ БЛОК 9: СМЕЖНЫЕ УСЛУГИ НАПРАВЛЕНИЯ (ТОЧНЫЙ ШАБЛОН) ═══ */}
      <section id="directions" className="section bg-light" style={{ padding: '64px 0', background: 'var(--gradient-cream)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '32px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '14px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>Смежные услуги направления</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Если задача выходит за рамки конкретного вопроса, подключаем другие услуги практики трудового права.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '20px' }}>
            {directions.map((dir, i) => (
              <a key={i} href={dir.link} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                <div
                  className="card related-service-card hover-lift"
                  style={{
                    height: '100%',
                    minHeight: '180px',
                    padding: '24px',
                    background: 'var(--color-white)',
                    border: '1px solid var(--color-border)',
                    borderTop: '3px solid var(--color-primary)',
                    borderRadius: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.3s'
                  }}
                >
                  <div>
                    <h3 style={{ margin: '0 0 10px 0', fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', lineHeight: 1.35, fontWeight: 700 }}>
                      {dir.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                      {dir.desc}
                    </p>
                  </div>
                  <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600, marginTop: '16px', transition: 'color 0.35s ease' }}>
                    <span>Подробнее</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </a>
            ))}
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
                  Связаться с юристом
                </span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                <span className="hero-title-span-mobile" style={{ display: "block", whiteSpace: "nowrap" }}>Заказать кадровый</span> <span className="hero-title-span-mobile" style={{ display: "block", whiteSpace: "nowrap" }}>аудит организации</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Оставьте заявку на аудит. Марина Валерьевна Смольянинова свяжется с вами для уточнения численности штата и согласования формата проверки.
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
                commentPlaceholder="Укажите сферу деятельности компании, примерную численность сотрудников и задачу аудита..."
                hiddenFields={[
  {
    "name": "source_page",
    "value": "/biznesu/trudovye-spory-s-rabotnikami/kadrovyj-audit/"
  },
  {
    "name": "direction",
    "value": "kadrovyj_audit"
  },
  {
    "name": "selected_specialist",
    "value": "smolyaninova-marina-valerevna"
  },
  {
    "name": "service_id",
    "value": "b2b-hr-audit"
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
