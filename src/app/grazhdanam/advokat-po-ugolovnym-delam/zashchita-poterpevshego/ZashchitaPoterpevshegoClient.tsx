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

export default function ZashchitaPoterpevshegoClient() {
  const situations = [
    {
      tag: "Проверка сообщения",
      title: "Подано заявление о преступлении, но процессуального решения нет",
      desc: "Устанавливаем номер КУСП, истребуем материалы проверки, пресекаем волокиту и необоснованные отказы через прокуратуру."
    },
    {
      tag: "Признание потерпевшим",
      title: "Уголовное дело возбуждено, однако официальный статус не оформлен",
      desc: "Подаём мотивированное ходатайство следователю о признании потерпевшим, вручении постановления и допуске представителя."
    },
    {
      tag: "Следственные действия",
      title: "Назначен допрос, очная ставка или следственный эксперимент",
      desc: "Готовим потерпевшего к следственным действиям, участвуем вместе с ним, контролируем протоколирование и вносим замечания."
    },
    {
      tag: "Отказ или прекращение",
      title: "Следствие бездействует, вынесен отказ либо дело незаконно прекращено",
      desc: "Получаем копии решений, анализируем мотивы и подаем жалобы руководителю органа, прокурору или в суд (ст. 124, 125 УПК РФ)."
    },
    {
      tag: "Гражданский иск",
      title: "Необходимо взыскать прямой материальный вред и вред здоровью",
      desc: "Собираем доказательства расходов, формируем детальный расчёт прямого имущественного вреда и заявляем гражданский иск в уголовном деле."
    },
    {
      tag: "Арест имущества (ст. 115)",
      title: "Риск отчуждения, сокрытия или вывода активов обвиняемым",
      desc: "Ходатайствуем перед следователем о розыске и судебном аресте недвижимости, счетов и транспорта обвиняемого для исполнения приговора."
    },
    {
      tag: "Судебное разбирательство",
      title: "Уголовное дело направлено в суд первой инстанции для рассмотрения",
      desc: "Участвуем во всех заседаниях суда, допросах подсудимого, исследовании доказательств, судебных прениях и отстаиваем гражданский иск."
    },
    {
      tag: "Безопасность и угрозы",
      title: "Потерпевшему или близким родственникам поступают угрозы и давление",
      desc: "Фиксируем факты давления, заявляем ходатайство о применении мер государственной защиты и об изменении меры пресечения на арест."
    }
  ];

  const casesData: CaseData[] = [
    {
      category: "Признание потерпевшим",
      title: "Получили статус потерпевшего и доступ к ключевым решениям",
      problem: "После подачи заявления уголовное дело было возбуждено, однако клиенту не вручили постановление о признании потерпевшим и не сообщали о процессуальных решениях. Из-за этого он не мог полноценно заявлять ходатайства и контролировать движение дела.",
      action: "Проверили материал и реквизиты уголовного дела; подготовили ходатайство о признании потерпевшим и выдаче копий затрагивающих интересы решений; после ответа выстроили перечень доказательств вреда и календарь процессуальных действий.",
      result: "Клиента признали потерпевшим, вручили необходимые постановления и допустили представителя. Команда получила процессуальную основу для дальнейших ходатайств и контроля расследования."
    },
    {
      category: "Гражданский иск и арест (ст. 115 УПК РФ)",
      title: "Подготовили гражданский иск и обеспечили доказательства ущерба",
      problem: "По делу о хищении в материалах была указана общая сумма ущерба, но часть переводов, стоимость утраченного имущества и связанные расходы не были подтверждены единым расчётом. Существовал риск, что гражданский иск останется без достаточного обоснования.",
      action: "Сопоставили банковские документы, договоры, чеки и материалы дела; отделили прямой вред от требований, подлежащих самостоятельному гражданскому рассмотрению; подготовили иск, расчёт и ходатайство об обеспечении требований.",
      result: "Суд признал доказанной заявленную часть прямого имущественного вреда и удовлетворил гражданский иск в подтверждённом размере. Обеспечительные ограничения сохранили до разрешения вопроса об исполнении."
    },
    {
      category: "Апелляционная инстанция",
      title: "Защитили позицию потерпевшего при обжаловании приговора",
      problem: "Осуждённый обжаловал приговор и просил исключить часть выводов, влияющих на гражданский иск. Потерпевший получил извещение незадолго до срока подачи письменной позиции и не понимал, какие доводы затрагивают его интересы.",
      action: "Изучили приговор и жалобу, выделили пределы спора, подготовили возражения по доказательствам вреда и гражданскому иску, представили позицию потерпевшего в заседании апелляционной инстанции.",
      result: "Суд отклонил доводы, затрагивавшие установленный размер вреда, и оставил решение по гражданскому иску без изменения. Итог зависел от материалов конкретного дела и содержания жалобы."
    }
  ];

  const processSteps: ProcessStep[] = [
    {
      num: "01",
      title: "Уточнение статуса и ситуации",
      desc: "Уточняем статус заявителя, стадию дела, ближайшее процессуальное действие и наличие угроз безопасности."
    },
    {
      num: "02",
      title: "Определение защитной группы",
      desc: "Проверяем конфликт интересов, изучаем первичные сведения и определяем профильного адвоката под категорию дела."
    },
    {
      num: "03",
      title: "Сбор процессуальных актов",
      desc: "Запрашиваем и получаем минимальный комплект решений: постановления о возбуждении, признании потерпевшим или отказе."
    },
    {
      num: "04",
      title: "Формирование карты вреда",
      desc: "Анализируем имущественный и моральный ущерб, медицинские документы, чеки и рассчитываем гражданский иск."
    },
    {
      num: "05",
      title: "Согласование стратегии",
      desc: "Фиксируем конкретные процессуальные задачи, календарь действий, объём поручения и стоимость в соглашении."
    },
    {
      num: "06",
      title: "Участие в следствии и суде",
      desc: "Готовим потерпевшего к следственным действиям, заявляем ходатайства, контролируем полноту и точность протоколов."
    },
    {
      num: "07",
      title: "Контроль решений и жалобы",
      desc: "Подаём жалобы на бездействие или незаконные решения (ст. 124, 125 УПК РФ), готовим возражения на жалобы осужденного."
    },
    {
      num: "08",
      title: "Фиксация результата и исполнение",
      desc: "Контролируем приговор в части возмещения вреда, получаем исполнительные документы и сопровождаем взыскание."
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: "Процессуальная диагностика и статус",
      subtitle: "Проверка решений и оформление прав",
      price: "от 15 000 ₽",
      popular: false,
      features: [
        { name: "анализ материалов проверки и отказных постановлений", value: "Да" },
        { name: "подготовка ходатайства о признании потерпевшим", value: "Да" },
        { name: "формирование карты прав, сроков и рисков", value: "Да" },
        { name: "определение перечня необходимых доказательств", value: "Да" }
      ],
      buttonText: "Заказать диагностику",
      buttonHref: "#form"
    },
    {
      title: "Представительство на следствии",
      subtitle: "Сопровождение потерпевшего в МВД / СК",
      price: "от 40 000 ₽",
      popular: true,
      badgeText: "Востребовано",
      features: [
        { name: "участие в допросах, очных ставках и следственных действиях", value: "Да" },
        { name: "подготовка гражданского иска и расчёта ущерба", value: "Да" },
        { name: "ходатайство о судебном аресте имущества (ст. 115 УПК РФ)", value: "Да" },
        { name: "обжалование волокиты и незаконных решений (ст. 124, 125 УПК РФ)", value: "Да" },
        { name: "ознакомление со всеми материалами по окончании следствия", value: "Да" }
      ],
      buttonText: "Выбрать тариф",
      buttonHref: "#form"
    },
    {
      title: "Представительство в суде первой инстанции",
      subtitle: "Судебный процесс и гражданский иск",
      price: "от 45 000 ₽",
      popular: false,
      features: [
        { name: "формирование правовой позиции и участие во всех заседаниях", value: "Да" },
        { name: "допрос подсудимого, свидетелей обвинения и защиты", value: "Да" },
        { name: "выступление в прениях сторон и поддержание гражданского иска", value: "Да" },
        { name: "взыскание процессуальных издержек на адвоката (ст. 131 УПК РФ)", value: "Да" },
        { name: "получение копии приговора и исполнительного листа", value: "Да" }
      ],
      buttonText: "Обсудить участие",
      buttonHref: "#form"
    }
  ];

  const relatedLinks = [
    {
      title: "Адвокат по уголовным делам (главный раздел)",
      link: "/grazhdanam/advokat-po-ugolovnym-delam/"
    },
    {
      title: "Адвокат по ДТП с пострадавшими",
      link: "/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-dtp-s-postradavshimi/"
    },
    {
      title: "Обжалование приговора",
      link: "/grazhdanam/advokat-po-ugolovnym-delam/obzhalovanie-prigovora/"
    },
    {
      title: "Адвокат по экономическим преступлениям",
      link: "/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-ekonomicheskim-prestupleniyam/"
    }
  ];

  const faqItems = [
    {
      q: "Когда человек становится потерпевшим?",
      a: "После возбуждения уголовного дела статус оформляется постановлением дознавателя, следователя или судьи либо определением суда. Если данные о пострадавшем появились позднее, решение принимается сразу после их установления."
    },
    {
      q: "Может ли потерпевший пригласить своего адвоката?",
      a: "Да. В силу части 1 статьи 45 УПК РФ потерпевший вправе иметь представителя — адвоката. Адвокат участвует в следственных действиях и судебных заседаниях вместе с потерпевшим либо по его поручению."
    },
    {
      q: "Что делать, если меня не признают потерпевшим?",
      a: "Необходимо установить, возбуждено ли уголовное дело, запросить официальное процессуальное решение, подать мотивированное ходатайство следователю и при отказе обжаловать его прокурору (ст. 124 УПК РФ) либо в районный суд (ст. 125 УПК РФ)."
    },
    {
      q: "Может ли адвокат присутствовать на допросе потерпевшего?",
      a: "Да. Представитель участвует в допросе потерпевшего, знакомится с протоколом следственного действия, делает письменные замечания о правильности и полноте записей и задает вопросы с разрешения следователя."
    },
    {
      q: "Как взыскать ущерб с обвиняемого?",
      a: "В уголовном деле заявляется гражданский иск о возмещении непосредственно причинённого имущественного вреда и компенсации морального вреда (ст. 44 УПК РФ). Гражданский истец освобождается от уплаты государственной пошлины."
    },
    {
      q: "Можно ли попросить арестовать имущество обвиняемого?",
      a: "Да. Потерпевший или его представитель вправе ходатайствовать перед следователем о выходе в суд с ходатайством о наложении ареста на имущество, ценные бумаги и банковские счета обвиняемого по ст. 115 УПК РФ для обеспечения иска."
    },
    {
      q: "Куда жаловаться на бездействие следователя?",
      a: "Маршрут зависит от органа, характера нарушения и стадии: руководителю следственного органа, прокурору в порядке ст. 124 УПК РФ либо в районный суд в порядке ст. 125 УПК РФ. Адвокат определяет надлежащего адресата для максимальной эффективности."
    },
    {
      q: "Что делать, если поступают угрозы от обвиняемого или его знакомых?",
      a: "При непосредственной угрозе жизни следует немедленно звонить в экстренные службы. В рамках дела адвокат фиксирует факты угроз и подает ходатайство о применении мер государственной защиты потерпевшего (ст. 11 УПК РФ, ФЗ № 119-ФЗ) и изменении меры пресечения обвиняемому на стражу."
    },
    {
      q: "Может ли потерпевший обжаловать приговор?",
      a: "Да, потерпевший и его представитель вправе обжаловать приговор суда в апелляционном и кассационном порядке в части, затрагивающей его права и законные интересы: по мотивам мягкости назначенного наказания или решения по гражданскому иску."
    },
    {
      q: "Обязан ли потерпевший сам приходить в суд, если есть адвокат?",
      a: "Наличие адвоката-представителя не отменяет обязанности явки потерпевшего по судебной повестке, если суд признает его личное участие обязательным для дачи показаний. В остальных заседаниях с согласия суда интересы может представлять адвокат."
    },
    {
      q: "Возместят ли расходы на оплату услуг адвоката-представителя?",
      a: "Расходы потерпевшего на представителя могут быть признаны процессуальными издержками и взысканы в порядке, установленном УПК РФ. Вопрос о размере, источнике и распределении расходов решает суд; автоматического взыскания всей суммы по соглашению с осуждённого нет."
    },
    {
      q: "Сколько стоит помощь адвоката потерпевшему?",
      a: "Стоимость зависит от процессуальной стадии, числа следственных действий и судебных заседаний, объёма материалов дела и сложности гражданского иска. Конкретный состав услуг и фиксированная сумма закрепляются в соглашении до начала работы."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        "@id": "https://dejure-help.ru/#organization",
        "name": "ЮК «Де-Юре»",
        "url": "https://dejure-help.ru",
        "logo": "https://dejure-help.ru/images/logo_dark.png",
        "telephone": "+7 (4742) 20-15-25",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "ул. Советская, д. 35, оф. 213",
          "addressLocality": "Липецк",
          "addressRegion": "Липецкая область",
          "addressCountry": "RU"
        }
      },
      {
        "@type": "Person",
        "@id": "https://dejure-help.ru/specialisty/bobkin-arkadiy-evgenevich/#person",
        "name": "Аркадий Бобкин",
        "jobTitle": "Куратор практики уголовного права",
        "url": "https://dejure-help.ru/specialisty/bobkin-arkadiy-evgenevich/"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/zashchita-poterpevshego/#breadcrumbs",
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
            "name": "Защита потерпевшего",
            "item": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/zashchita-poterpevshego/"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/zashchita-poterpevshego/#service",
        "name": "Защита потерпевшего в Липецке",
        "description": "Добьёмся возбуждения уголовного дела, признания потерпевшим, ареста имущества обвиняемого и полного возмещения материального и морального вреда. Представим ваши интересы на следствии, в суде и на стадии исполнения приговора.",
        "url": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/zashchita-poterpevshego/",
        "provider": { "@id": "https://dejure-help.ru/#organization" },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Липецк и Липецкая область"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/zashchita-poterpevshego/#faq",
        "mainEntity": faqItems.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
      }
    ]
  };

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
            <Link href="/">Главная</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/grazhdanam/">Гражданам</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/grazhdanam/advokat-po-ugolovnym-delam/">Адвокат по уголовным делам</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Защита потерпевшего</span>
          </>
        }
        superTitle="Уголовное дело • представительство потерпевшего"
        title={
          <span style={{ display: 'block', maxWidth: '100%' }}>
            <span style={{ display: 'block' }}>Адвокат для потерпевшего</span>
            <span style={{ display: 'block' }}>по уголовному делу</span>
            <span style={{ display: 'block' }}>в Липецке</span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Подключимся на стадии проверки, расследования или суда: определим процессуальный статус, подготовим к следственным действиям, заявим ходатайства и жалобы, соберём доказательства вреда, подготовим гражданский иск и представим позицию потерпевшего.
          </span>
        }
        primaryCtaText="Обсудить защиту интересов"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_cta_zashchita_poterpevshego"
        primaryCtaSubtext={
          <>
            <span>Если требуется срочная помощь,</span><br />
            <span style={{ whiteSpace: 'nowrap' }}>позвоните: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (4742) 20-15-25</a></span>
          </>
        }
        trustItems={[
          { text: 'Стратегию определяет Аркадий Бобкин — 22 года следственного опыта' },
          { text: 'Аркадий Бобкин курирует направление: проводит первичный разбор ситуации, определяет задачи по делу и согласует команду.' },
          { text: 'Если для представительства требуется статус адвоката, Аркадий Бобкин подбирает специалиста с учётом категории дела, процессуальной стадии и необходимых компетенций.' },
          { text: 'Фиксируем состав услуг, объем поручения и стоимость в соглашении до начала работы' }
        ]}
        imageUrl="/images/bobkin.jpg"
        imageName="Аркадий Евгеньевич Бобкин"
        imageSubtitle="Директор ЮК «Де-Юре», куратор практики уголовного права"
        imageObjectPosition="50% -75px"
      />

      {/* ═══ БЛОК 2: В КАКИХ СИТУАЦИЯХ МЫ ПОМОГАЕМ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>В каких ситуациях</span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>мы помогаем гражданам</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Ознакомьтесь с типовыми сценариями. Если ваша ситуация требует срочного выезда, участия в процессуальном действии или защиты в суде — мы предложим оптимальную стратегию.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '40px' }}>
            {situations.map((item, i) => (
              <div
                key={i}
                className="card hover-lift"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  borderRadius: '0',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '-15px',
                  width: '90px',
                  height: '90px',
                  opacity: 0.04,
                  pointerEvents: 'none',
                  color: 'var(--color-deep-blue)'
                }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>

                <div>
                  {item.tag && (
                    <div style={{
                      fontSize: '11.5px',
                      fontWeight: 700,
                      color: 'var(--color-primary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: '12px',
                      background: 'rgba(23, 50, 77, 0.06)',
                      padding: '3px 8px',
                      display: 'inline-block',
                      borderRadius: '2px'
                    }}>
                      {item.tag}
                    </div>
                  )}

                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '18px',
                    fontWeight: 600,
                    color: 'var(--color-deep-blue)',
                    margin: '0 0 12px 0',
                    lineHeight: 1.35
                  }}>
                    {item.title}
                  </h3>

                  <p style={{
                    fontSize: '14px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    {item.desc}
                  </p>
                </div>

                <a
                  href="#form"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--color-primary)',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    marginTop: '20px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-primary)')}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('form');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else window.location.hash = 'form';
                  }}
                >
                  <span>Защитить права</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            ))}
          </div>

          {/* 1. ЧТО КОНТРОЛИРУЕТ АДВОКАТ ПОТЕРПЕВШЕГО */}
          <div style={{ marginTop: '56px', marginBottom: '48px' }}>
            <div style={{ maxWidth: '840px', marginBottom: '28px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Процессуальный контроль
              </div>
              <h3 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                Что контролирует представитель потерпевшего на следствии и в суде
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Представитель обеспечивает соблюдение прав потерпевшего, контролирует процессуальные сроки и фиксацию причинённого вреда, формирует доказательную основу для максимально полного возмещения ущерба.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '20px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-primary)', padding: '24px 20px' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>01. Процессуальный статус</span>
                <h4 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Признание потерпевшим и гражданским истцом</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Контролируем своевременность вынесения постановлений о признании потерпевшим и гражданским истцом, разъяснение полного объёма процессуальных прав и немедленное вручение заверенных копий решений.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-primary)', padding: '24px 20px' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>02. Доказательства вреда</span>
                <h4 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Фиксация показаний и размера ущерба</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Контролируем правильность протоколирования показаний при допросах, исключаем искажение фактов, приобщаем к делу медицинские справки, чеки, договоры и товароведческие отчёты о стоимости ущерба.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-primary)', padding: '24px 20px' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>03. Ходатайства следствию</span>
                <h4 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Инициирование следственных действий</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Заявляем мотивированные ходатайства о вызове и допросе ключевых свидетелей, истребовании записей камер видеонаблюдения, проведении судебных экспертиз и приобщении значимых документов.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-gold)', padding: '24px 20px' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>04. Арест активов (ст. 115)</span>
                <h4 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Обеспечение гражданского иска</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Собираем доступные сведения об имуществе обвиняемого и заявляем ходатайства о принятии мер по обеспечению гражданского иска (наложение ареста на недвижимость, банковские счета и транспорт).
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-gold)', padding: '24px 20px' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>05. Материалы дела</span>
                <h4 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Ознакомление по окончании следствия</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Реализуем право потерпевшего на полное ознакомление со всеми материалами уголовного дела по ст. 216 УПК РФ, выявляем пробелы обвинения и при необходимости заявляем ходатайства о дополнительном расследовании.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-gold)', padding: '24px 20px' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>06. Судебный процесс</span>
                <h4 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Поддержание иска и прения сторон</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Участвуем в допросах подсудимого и свидетелей, исследуем доказательства, поддерживаем гражданский иск в судебных прениях и формулируем правовую позицию по мере наказания виновного.
                </p>
              </div>
            </div>
          </div>

          {/* 2. ПРАВА, ОБЯЗАННОСТИ И ОГРАНИЧЕНИЯ */}
          <div style={{ marginTop: '56px', marginBottom: '48px' }}>
            <div style={{ maxWidth: '840px', marginBottom: '28px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Баланс прав и процедур (ст. 42 УПК РФ)
              </div>
              <h3 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                Права, обязанности и реальные ограничения потерпевшего
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Закон наделяет потерпевшего комплексом процессуальных прав, однако их реализация строго регламентирована процессуальными стадиями и правилами уголовного судопроизводства.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-primary)', padding: '20px 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
                    Право на участие и доказательства
                  </div>
                  <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 6px 0' }}>Давать показания и заявлять ходатайства</h4>
                  <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    Потерпевший вправе давать показания на родном языке, представлять любые предметы и документы в качестве доказательств, заявлять отводы следователю, прокурору, судье или эксперту.
                  </p>
                </div>
                <div style={{ background: 'rgba(23, 50, 77, 0.03)', padding: '14px 16px', borderLeft: '2px solid var(--color-gold)' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Процессуальные рамки:</div>
                  <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    Участие потерпевшего в следственных действиях (осмотрах, экспериментах) допускается только с разрешения следователя или дознавателя и по установленной процедуре.
                  </p>
                </div>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-primary)', padding: '20px 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
                    Доступ к документам и экспертизам
                  </div>
                  <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 6px 0' }}>Знакомиться с протоколами и постановлениями</h4>
                  <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    Потерпевший имеет право получать копии постановлений о возбуждении дела, признании потерпевшим, приостановлении или прекращении дела, а также знакомиться с заключениями экспертиз.
                  </p>
                </div>
                <div style={{ background: 'rgba(23, 50, 77, 0.03)', padding: '14px 16px', borderLeft: '2px solid var(--color-gold)' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Процессуальные рамки:</div>
                  <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    Полный доступ ко всем томам уголовного дела и доказательствам предоставляется исключительно по завершении предварительного следствия (ст. 216 УПК РФ).
                  </p>
                </div>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-primary)', padding: '20px 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
                    Обжалование и судебный контроль
                  </div>
                  <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 6px 0' }}>Жалобы по ст. 124 и 125 УПК РФ</h4>
                  <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    Потерпевший вправе обжаловать действия и процессуальные решения дознавателя, следователя, прокурора и суда, а также обжаловать итоговый приговор суда.
                  </p>
                </div>
                <div style={{ background: 'rgba(23, 50, 77, 0.03)', padding: '14px 16px', borderLeft: '2px solid var(--color-gold)' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Процессуальные рамки:</div>
                  <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    Жалоба по ст. 125 УПК РФ рассматривает только решения, способные причинить ущерб конституционным правам либо затруднить доступ к правосудию; суд не решает вопрос о виновности.
                  </p>
                </div>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-gold)', padding: '20px 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
                    Процессуальные обязанности
                  </div>
                  <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 6px 0' }}>Явка по вызовам и достоверность</h4>
                  <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    Потерпевший обязан являться по повесткам следователя и суда, давать правдивые показания и соблюдать запрет на разглашение данных предварительного расследования (ст. 310 УК РФ).
                  </p>
                </div>
                <div style={{ background: 'rgba(23, 50, 77, 0.03)', padding: '14px 16px', borderLeft: '2px solid var(--color-gold)' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Ответственность по закону:</div>
                  <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    За отказ от дачи показаний и за дачу заведомо ложных показаний потерпевший несёт уголовную ответственность по статьям 307 и 308 УК РФ. Адвокат обеспечивает законность допроса.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. ВОЗМЕЩЕНИЕ ВРЕДА И ГРАЖДАНСКИЙ ИСК */}
          <div style={{ marginTop: '56px', marginBottom: '48px' }}>
            <div style={{ maxWidth: '840px', marginBottom: '28px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Возмещение ущерба (ст. 44 УПК РФ)
              </div>
              <h3 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                Возмещение вреда и гражданский иск в уголовном процессе
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Гражданский иск в уголовном деле рассматривается судом без уплаты государственной пошлины и позволяет взыскать весь прямой ущерб одновременно с постановлением приговора.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '20px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-primary)', padding: '24px 20px' }}>
                <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-primary)', fontFamily: 'var(--font-serif)', marginBottom: '6px' }}>Прямой ущерб</div>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Имущественный вред</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Расчёт стоимости похищенного, утраченного или повреждённого имущества на основе товарных чеков, отчётов независимой оценки или заключений судебных товароведческих экспертиз.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-primary)', padding: '24px 20px' }}>
                <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-primary)', fontFamily: 'var(--font-serif)', marginBottom: '6px' }}>Здоровье</div>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Расходы на лечение и уход</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Документирование затрат на платные медицинские операции, лекарства, реабилитацию, протезирование и санаторно-курортное лечение с подтверждением причинной связи с преступлением.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-primary)', padding: '24px 20px' }}>
                <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-primary)', fontFamily: 'var(--font-serif)', marginBottom: '6px' }}>Страдания</div>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Компенсация морального вреда</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Правовое обоснование физических и нравственных страданий, пережитых потерпевшим или семьёй погибшего. Размер компенсации определяет суд с учётом разумности и справедливости.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-gold)', padding: '24px 20px' }}>
                <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', marginBottom: '6px' }}>ст. 115 УПК РФ</div>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Арест имущества обвиняемого</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Ходатайствуем перед следователем и судом о наложении ареста на недвижимость, банковские счета, автомобили и ценные бумаги обвиняемого для гарантии фактической выплаты денег.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-gold)', padding: '24px 20px' }}>
                <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', marginBottom: '6px' }}>ст. 131 УПК РФ</div>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Взыскание расходов на адвоката</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Вознаграждение адвоката-представителя признаётся процессуальными издержками и по заявлению потерпевшего взыскивается судом с осуждённого в полном объёме или разумных пределах.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-gold)', padding: '24px 20px' }}>
                <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', marginBottom: '6px' }}>Разграничение</div>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Отдельный гражданский процесс</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  В уголовном деле разрешается только прямой ущерб от преступления. Сложные регрессные иски, проценты по ст. 395 ГК РФ или оспаривание сделок выделяются в самостоятельный гражданский спор.
                </p>
              </div>
            </div>
          </div>

          {/* 4. ЖАЛОБЫ И ПРОЦЕССУАЛЬНЫЕ МАРШРУТЫ */}
          <div style={{ marginTop: '56px', marginBottom: '48px' }}>
            <div style={{ maxWidth: '840px', marginBottom: '28px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Процессуальное реагирование
              </div>
              <h3 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                Жалобы и процессуальные маршруты при бездействии или нарушениях
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Эффективность обжалования зависит от точного выбора адресата, правильного обоснования нарушенного права и соблюдения процессуальных сроков.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '20px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-primary)', padding: '22px 20px' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>Не признают потерпевшим</span>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Ходатайство и жалоба по ст. 124</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Устанавливаем номер КУСП или уголовного дела, подаём официальное ходатайство следователю; при необоснованном отказе — жалоба прокурору по ст. 124 УПК РФ.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-primary)', padding: '22px 20px' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>Волокита следствия</span>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Жалоба руководителю органа</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  При затягивании расследования и невыполнении обязательных следственных действий направляем жалобу руководителю следственного органа или надзирающему прокурору.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-primary)', padding: '22px 20px' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>Отказ или прекращение</span>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Судебный контроль (ст. 125 УПК)</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Истребуем процессуальное постановление, выявляем непроверенные факты и добиваемся отмены незаконного отказа в суде с возобновлением проверки или следствия.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-gold)', padding: '22px 20px' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>Мягкий приговор</span>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Апелляционная жалоба</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Если суд назначил чрезмерно мягкое наказание или необоснованно снизил сумму гражданского иска, подаём апелляционную жалобу в областной суд в пределах прав потерпевшего.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-gold)', padding: '22px 20px' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>Жалоба осуждённого</span>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Возражения на апелляцию</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  При попытке виновного лица оспорить доказанность вреда или сумму иска готовим мотивированные письменные возражения и защищаем приговор в суде апелляционной инстанции.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-gold)', padding: '22px 20px' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>Угрозы и давление</span>
                <h4 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Меры безопасности (ФЗ № 119-ФЗ)</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Фиксируем факты запугивания со стороны подсудимого или его окружения и заявляем ходатайство о применении мер государственной защиты и заключении обвиняемого под стражу.
                </p>
              </div>
            </div>
          </div>

          {/* 5. ОСОБЫЕ КАТЕГОРИИ ДЕЛ */}
          <div style={{ marginTop: '56px', marginBottom: '48px' }}>
            <div style={{ maxWidth: '840px', marginBottom: '28px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Специальные сценарии
              </div>
              <h3 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                Особенности представительства по отдельным категориям дел
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Законодательство предусматривает специальный порядок участия для несовершеннолетних потерпевших, родственников погибших и по делам частного обвинения.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '20px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-primary)', padding: '24px 20px' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>Несовершеннолетний потерпевший</span>
                <h4 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Защита прав ребёнка</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Обязательное привлечение законного представителя, участие педагога или психолога (ст. 191 УПК РФ), ведение видеозаписи следственного действия для снижения повторной психологической травматизации ребёнка в суде.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-primary)', padding: '24px 20px' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>Преступление повлекло смерть</span>
                <h4 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Представительство семьи погибшего</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Оформление процессуального статуса потерпевшего за одним из близких родственников (ст. 42 УПК РФ), взыскание расходов на погребение, расходов по потере кормильца и компенсации морального вреда семье.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-primary)', padding: '24px 20px' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>Дела частного обвинения</span>
                <h4 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Побои и клевета (ст. 115, 116.1, 128.1)</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Составление заявления мировому судье по установленной форме, сбор доказательств и поддержание обвинения в судебном процессе адвокатом в качестве частного обвинителя.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-gold)', padding: '24px 20px' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>Множественность потерпевших</span>
                <h4 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Серийные хищения и пирамиды</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Координация позиции пострадавших по делам о мошенничестве, финансовом обмане или крупном ДТП для эффективного розыска имущества обвиняемого и исключения приоритета чужих требований.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-gold)', padding: '24px 20px' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>Угрозы и давление</span>
                <h4 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Государственная защита (ст. 11 УПК)</h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  Инициирование мер государственной защиты при наличии реальной угрозы безопасности потерпевшего или его родственников, включая личную охрану, охрану имущества и конфиденциальность сведений.
                </p>
              </div>

              <div style={{ background: 'var(--gradient-cream)', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-deep-blue)', padding: '24px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '8px' }}>Юридическая помощь</span>
                  <h4 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>Оценить перспективы дела</h4>
                  <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    Передайте сведения о стадии дела и имеющихся процессуальных документах для первичного правового анализа куратором практики Аркадием Бобкиным.
                  </p>
                </div>
                <a href="#form" className="btn btn-primary" style={{ marginTop: '16px', textAlign: 'center', padding: '10px 16px', fontSize: '13.5px' }}>Обсудить ситуацию</a>
              </div>
            </div>
          </div>

          {/* 6. СРОКИ И ПРИОРИТЕТЫ */}
          <div style={{ marginTop: '56px', marginBottom: '48px' }}>
            <div style={{ maxWidth: '840px', marginBottom: '28px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Контрольные сроки
              </div>
              <h3 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                Процессуальные сроки и ключевые приоритеты потерпевшего
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Своевременность процессуальных действий исключает пропуск сроков обжалования и гарантирует эффективную защиту прав потерпевшего.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '20px' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-primary)', padding: '22px 20px' }}>
                <div style={{ fontSize: '26px', fontWeight: 700, color: 'var(--color-primary)', fontFamily: 'var(--font-serif)', marginBottom: '4px' }}>от 3 до 30 суток</div>
                <h4 style={{ fontSize: '15px', color: 'var(--color-deep-blue)', margin: '0 0 6px 0' }}>Проверка сообщения (ст. 144 УПК РФ)</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Стандартный срок проверки заявления — 3 суток; руководитель органа вправе продлить до 10 суток, а при необходимости экспертиз прокурор продлевает до 30 суток.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-primary)', padding: '22px 20px' }}>
                <div style={{ fontSize: '26px', fontWeight: 700, color: 'var(--color-primary)', fontFamily: 'var(--font-serif)', marginBottom: '4px' }}>3–10 суток</div>
                <h4 style={{ fontSize: '15px', color: 'var(--color-deep-blue)', margin: '0 0 6px 0' }}>Жалоба прокурору (ст. 124 УПК РФ)</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Прокурор или руководитель следственного органа рассматривает жалобу потерпевшего в течение 3 суток, а при необходимости истребования материалов — до 10 суток.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-primary)', padding: '22px 20px' }}>
                <div style={{ fontSize: '26px', fontWeight: 700, color: 'var(--color-primary)', fontFamily: 'var(--font-serif)', marginBottom: '4px' }}>5–14 суток</div>
                <h4 style={{ fontSize: '15px', color: 'var(--color-deep-blue)', margin: '0 0 6px 0' }}>Судебный контроль (ст. 125 УПК РФ)</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Судья районного суда проверяет законность постановлений и бездействия следователя в судебном заседании в течение 5 суток (до 14 суток при истребовании проверки).
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-gold)', padding: '22px 20px' }}>
                <div style={{ fontSize: '26px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', marginBottom: '4px' }}>15 суток</div>
                <h4 style={{ fontSize: '15px', color: 'var(--color-deep-blue)', margin: '0 0 6px 0' }}>Апелляционная жалоба (ст. 389.4 УПК)</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Жалоба на приговор суда первой инстанции может быть подана потерпевшим в течение 15 суток со дня провозглашения судебного решения.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-gold)', padding: '22px 20px' }}>
                <div style={{ fontSize: '26px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', marginBottom: '4px' }}>До прений</div>
                <h4 style={{ fontSize: '15px', color: 'var(--color-deep-blue)', margin: '0 0 6px 0' }}>Подача гражданского иска (ст. 44)</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Гражданский иск предъявляется после возбуждения уголовного дела и до окончания судебного следствия в суде первой инстанции; оптимально заявить его на этапе предварительного следствия.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-gold)', padding: '22px 20px' }}>
                <div style={{ fontSize: '26px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', marginBottom: '4px' }}>Пн–Пт, 09–18</div>
                <h4 style={{ fontSize: '15px', color: 'var(--color-deep-blue)', margin: '0 0 6px 0' }}>Режим обработки обращений</h4>
                <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Приём и анализ обращений осуществляются в рабочее время с 09:00 до 18:00; заявки, поступившие вечером или в выходные, обрабатываются в начале ближайшего рабочего дня.
                </p>
              </div>
            </div>
          </div>

          {/* Сопутствующие уголовные услуги */}
          <div style={{ background: '#F4F5F7', padding: '24px 28px', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-primary)' }}>
            <div style={{ fontWeight: 600, color: 'var(--color-deep-blue)', marginBottom: '8px', fontSize: '15px' }}>
              Сопутствующие услуги уголовной практики:
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '14px' }}>
              {relatedLinks.map((rel, idx) => (
                <Link key={idx} href={rel.link} style={{ color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                  {rel.title} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: КУРАТОР ПРАКТИКИ ═══ */}
      <SpecialistBlock
        title="Куратор практики"
        name="Аркадий Евгеньевич Бобкин"
        position={<>Директор, управляющий партнёр<br />ЮК «Де-Юре»,<br />куратор практики уголовного права</>}
        imageUrl="/images/bobkin.jpg"
        imagePosition="center 15%"
        profileHref="/specialisty/bobkin-arkadiy-evgenevich/"
        profileText="Подробнее об Аркадии Евгеньевиче Бобкине →"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block', lineHeight: 1.6 }}>
            Аркадий Бобкин — управляющий партнёр и куратор практики уголовного права. Проводит первичный разбор ситуации, определяет стратегию защиты интересов потерпевшего, объём поручения и согласует состав специалистов.
          </span>,
          <p key="adv" style={{ color: 'var(--color-text-secondary)', margin: '14px 0 0 0', fontSize: '14.5px', lineHeight: 1.6 }}>
            Аркадий Бобкин определяет задачи по делу, подбирает необходимых специалистов и координирует представительство потерпевшего на следствии и в суде.
          </p>
        ]}
        buttonText="Задать вопрос куратору"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 4: ПРИМЕРЫ ИЗ ПРАКТИКИ ═══ */}
      <CasesBlock
        title="Примеры дел из практики"
        showAllLink="/praktika/"
        showAllText="Смотреть все дела"
        showDemoWarning={true}
        cases={casesData}
      />

      {/* ═══ БЛОК 5: КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock
        title="Как проходит работа"
        subtitle="Чёткий алгоритм действий — вы всегда знаете, что происходит на каждом этапе вашего дела."
        alignTitle="center"
        steps={processSteps}
        ctaTitle="Готовы обсудить вашу ситуацию"
        ctaSubtitle="Опишите задачу — Аркадий Бобкин изучит обстоятельства и согласует состав защитной группы."
        ctaButtonText="Обсудить ситуацию"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 6: СТОИМОСТЬ УСЛУГ ═══ */}
      <PricingBlock
        title="Стоимость помощи адвоката"
        subtitle="Фиксированная стоимость услуг закрепляется в соглашении до начала работы."
        tiers={pricingTiers}
        disclaimer="Стоимость определяется после уточнения обстоятельств и изучения имеющихся документов. Состав услуг, цена и порядок оплаты фиксируются в соглашении до начала работы. Оплата вознаграждения представителя не включает государственные пошлины и сопутствующие экспертные расходы. Расходы на представителя могут быть признаны процессуальными издержками и взысканы по решению суда в порядке ст. 131 УПК РФ."
      />

      {/* ═══ БЛОК 7: ЧАСТЫЕ ВОПРОСЫ (FAQ) ═══ */}
      <FAQBlock
        superTitle="Частые вопросы доверителей"
        title={<><span>Ответы на</span> <br /><span>частые вопросы</span></>}
        subtitle="О процессуальных правах, возмещении вреда и действиях адвоката"
        ctaText="Задать свой вопрос"
        ctaLink="#form"
        faqs={faqItems}
      />

      {/* ═══ БЛОК 8: ФИНАЛЬНАЯ ФОРМА ═══ */}
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
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Обсудите ситуацию</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>с адвокатом</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Укажите, вынесен ли отказ в возбуждении дела, возбуждено ли уголовное дело, какой орган его ведёт и какой вред причинён. Полный архив документов через открытую форму не отправляйте.
              </p>
              
              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация адвоката</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните прямо сейчас: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (4742) 20-15-25</a>
                </p>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Адвокатская тайна:</strong>
                Все сведения и документы защищены режимом адвокатской тайны (ст. 8 ФЗ «Об адвокатской деятельности и адвокатуре в РФ»).
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Написать нам"
                subtitle={
                  <>
                    <span style={{ display: 'inline-block' }}>Оставьте имя и номер телефона. Адвокат свяжется с вами</span> <br />
                    <span style={{ display: 'inline-block' }}>в течение 15 минут в рабочее время.</span>
                  </>
                }
                subtext={
                  <>
                    <span style={{ display: 'inline-block' }}>Если вы оставите заявку вечером или в&nbsp;выходной день,</span> <br />
                    <span style={{ display: 'inline-block' }}>мы перезвоним в&nbsp;ближайший рабочий день.</span>
                  </>
                }
                buttonText="Обсудить защиту интересов"
                commentPlaceholder="Кому нужна помощь, орган расследования, статус, ближайшее следственное действие или заседание..."
                hiddenFields={[
                  { name: 'source_page', value: 'https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/zashchita-poterpevshego/' },
                  { name: 'direction', value: 'advokat_ugolovnyj' },
                  { name: 'selected_specialist', value: 'bobkin-arkadiy-evgenevich' }
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
