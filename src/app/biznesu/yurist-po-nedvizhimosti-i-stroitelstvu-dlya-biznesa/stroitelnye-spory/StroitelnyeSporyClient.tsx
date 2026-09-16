'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';
import ProcessBlock from '@/components/ProcessBlock';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import PricingBlock, { PricingTier } from '@/components/PricingBlock';

export default function StroitelnyeSporyClient() {
  const [activeRole, setActiveRole] = useState<'plaintiff' | 'defendant'>('plaintiff');

  const faqs = [
    {
      q: 'Вы защищаете заказчиков или подрядчиков?',
      a: 'Обе стороны коммерческого спора. Сначала детально проверяются договор, фактическое исполнение, акты, переписка и технические материалы. Возможный конфликт интересов проверяется до принятия поручения.'
    },
    {
      q: 'Можно взыскать оплату без подписанных КС-2 и КС-3?',
      a: 'Да, в соответствии со ст. 753 ГК РФ при направлении актов заказчику и отсутствии мотивированного отказа в установленный срок подрядчик вправе составить односторонний акт. Доказательствами выступают извещения о готовности, исполнительная документация, переписка и фактическое использование объекта.'
    },
    {
      q: 'Односторонний акт всегда подтверждает выполнение работ?',
      a: 'Нет. Суд оценивает соблюдение процедуры сдачи (направление уведомления о готовности к приёмке), причины отказа другой стороны и весь комплекс доказательств. Сам факт составления акта без надлежащего уведомления заказчика не гарантирует взыскание.'
    },
    {
      q: 'Что делать заказчику при обнаружении недостатков?',
      a: 'Зафиксировать состояние объекта, составить дефектную ведомость, своевременно направить подрядчику мотивированное уведомление и обеспечить ему возможность участия в комиссионном осмотре. Не устранять недостатки сторонними силами до проведения досудебной экспертизы или фиксации доказательств.'
    },
    {
      q: 'Кто оплачивает строительно-техническую экспертизу?',
      a: 'Внесудебное исследование первоначально оплачивает заказавшая его сторона. При назначении судебной экспертизы деньги на депозит суда обычно вносит сторона, заявившая ходатайство, либо стороны в порядке, установленном судом. В итоговом судебном акте расходы распределяются с учётом результата рассмотрения требований: при частичном удовлетворении иска — пропорционально, а расходы на представителя взыскиваются в разумных пределах.'
    },
    {
      q: 'Можно взыскать стоимость дополнительных работ?',
      a: 'Только если подрядчик своевременно предупредил заказчика о необходимости допработ по ст. 743 ГК РФ, приостановил работы до получения согласия или заказчик фактически согласовал их выполнение дополнительным соглашением или перепиской.'
    },
    {
      q: 'Как защититься от необоснованной неустойки за просрочку?',
      a: 'Доказать вину заказчика в просрочке (ст. 405, 406 ГК РФ): непредоставление строительной площадки, задержка передачи проектной документации, задержка аванса или встречных поставок материалов. Также заявляется ходатайство о снижении неустойки по ст. 333 ГК РФ.'
    },
    {
      q: 'Работаете ли вы по спорам в рамках госконтрактов (44-ФЗ и 223-ФЗ)?',
      a: 'Да. Сопровождаем споры по государственным и муниципальным контрактам: взыскание задолженности, защита от списания банковской гарантии, отказ от контракта и защита от включения в Реестр недобросовестных поставщиков (РНП в ФАС).'
    },
    {
      q: 'Обязателен ли досудебный претензионный порядок?',
      a: 'Для большинства денежных требований из договоров строительного подряда между организациями и ИП претензионный порядок обязателен. Обычно обратиться в арбитражный суд можно через 30 календарных дней после направления претензии, если закон или договор не устанавливает другой срок. Однако из правила существуют исключения, а ответчику по уже поданному иску не требуется предварительно направлять собственную претензию только для подготовки отзыва. Применимый порядок проверяется по предмету требований и условиям договора.'
    },
    {
      q: 'От чего зависят срок и стоимость ведения строительного спора?',
      a: 'От цены иска, объёма исполнительной документации, необходимости назначения комплексной строительно-технической экспертизы и инстанции арбитражного суда.'
    }
  ];

  const situations = [
    {
      title: 'Неоплата выполненных работ по КС-2',
      desc: 'Заказчик уклоняется от подписания форм КС-2/КС-3, затягивает приёмку или удерживает гарантийный платёж без законных оснований.',
      tag: 'Неоплата работ'
    },
    {
      title: 'Претензии по качеству и скрытые дефекты',
      desc: 'Заказчик заявляет о недостатках, требует безвозмездного устранения, снижения цены договора или возмещения расходов на сторонних подрядчиков.',
      tag: 'Качество работ'
    },
    {
      title: 'Срыв сроков и встречные штрафы',
      desc: 'Начисление крупной неустойки за просрочку этапов строительства при наличии вины заказчика (несвоевременный допуск, задержка проекта).',
      tag: 'Неустойка и сроки'
    },
    {
      title: 'Несогласованные дополнительные работы',
      desc: 'Подрядчик выполнил работы, не учтённые в смете, но заказчик отказывается подписывать дополнительные соглашения и производить оплату.',
      tag: 'Допработы'
    },
    {
      title: 'Возврат неотработанного аванса',
      desc: 'Заказчик отказался от договора в одностороннем порядке по ст. 715 или 717 ГК РФ и требует возврата всей суммы авансового платежа.',
      tag: 'Возврат аванса'
    }
  ];

  const auditDirections = [
    {
      title: 'Договор строительного подряда и сметы',
      desc: 'Порядок сдачи-приёмки, сроки, основания удержаний, распределение рисков непредвиденных работ, претензионный порядок.'
    },
    {
      title: 'Хронология уведомлений и сдачи работ',
      desc: 'Соблюдение процедуры извещения заказчика о готовности к приёмке скрытых и завершённых работ по ст. 753 ГК РФ.'
    },
    {
      title: 'Исполнительная документация и журналы',
      desc: 'Акты освидетельствования скрытых работ (АОСР), общий и специальные журналы работ, паспорта и сертификаты на материалы.'
    },
    {
      title: 'Деловая переписка и предупреждения',
      desc: 'Письма о невозможности продолжения работ из-за действий заказчика (ст. 716 ГК РФ), задержки передачи фронта или документации.'
    },
    {
      title: 'Односторонние акты и мотивированные отказы',
      desc: 'Правовой анализ причин отказа заказчика: являются ли замечания мотивированными, существенными и устранимыми.'
    },
    {
      title: 'Основания строительной экспертизы',
      desc: 'Формулирование вопросов эксперту по объёму, качеству, стоимости работ и установлению причинно-следственной связи дефектов.'
    },
    {
      title: 'Расчёт встречных требований и неустойки',
      desc: 'Контррасчёт штрафных санкций, зачёт взаимных требований, расчёт процентов за пользование чужими денежными средствами.'
    },
    {
      title: 'Процессуальная стратегия в арбитраже',
      desc: 'Обеспечительные меры (арест счетов, запрет списания банковской гарантии), досудебная претензия, иск или отзыв.'
    }
  ];

  const cases: CaseData[] = [
    {
      title: 'Взыскание 14.8 млн ₽ по односторонним актам КС-2',
      category: 'Взыскание по КС-2',
      problem: 'Генеральный подрядчик отказался подписывать акты КС-2/КС-3 на сумму 14 800 000 ₽, сославшись на отсутствие исполнительных схем и задержку сдачи объекта.',
      action: 'Доказали своевременное направление извещений о готовности к приёмке ценными письмами с описью. В суде инициировали судебную экспертизу, подтвердившую соответствие объёмов проекту.',
      result: 'Арбитражный суд удовлетворил иск в полном объёме, взыскав основной долг 14.8 млн ₽, неустойку и судебные расходы.',
      isDemo: false
    },
    {
      title: 'Защита заказчика завода от необоснованных требований подрядчика на 22 млн ₽',
      category: 'Защита заказчика',
      problem: 'Подрядчик обратился в арбитраж с требованием оплатить допработы на 22 млн ₽. Заказчик выявил прогибы перекрытий и отклонения от проекта.',
      action: 'Обосновали несоблюдение подрядчиком порядка ст. 743 ГК РФ о согласовании допработ, доказали ненадлежащее качество монтажа и заявили встречный иск об устранении брака.',
      result: 'В удовлетворении иска подрядчика отказано; встречный иск заказчика удовлетворён, подрядчик возместил стоимость переделки.',
      isDemo: false
    },
    {
      title: 'Защита подрядчика по 44-ФЗ от включения в РНП и взыскание долга',
      category: '44-ФЗ / Защита от РНП',
      problem: 'Муниципальный заказчик принял решение об одностороннем отказе от контракта на капремонт школы и направил документы в УФАС для включения в РНП.',
      action: 'Собрали переписку, подтверждающую невозможность выполнения работ из-за необеспечения доступа в здание, доказали добросовестность подрядчика на заседании комиссии ФАС.',
      result: 'Комиссия УФАС отказала во включении сведений в РНП; в арбитражном суде с заказчика взыскана стоимость фактически выполненного этапа.',
      isDemo: false
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Правовой аудит спора',
      price: 'от 25 000 ₽',
      subtitle: 'Анализ договора, КС-2/КС-3, актов и деловой переписки перед судом',
      buttonText: 'Заказать аудит',
      buttonHref: '#form',
      features: [
        { name: 'Правовой анализ договора и первички', value: '✓' },
        { name: 'Оценка судебно-технических перспектив', value: '✓' },
        { name: 'Проверка претензионного порядка', value: '✓' },
        { name: 'Формирование письменного заключения', value: '✓' }
      ],
      popular: false
    },
    {
      title: 'Досудебное урегулирование',
      price: 'от 35 000 ₽',
      subtitle: 'Претензия, контр-претензия, проведение переговоров и актирование',
      buttonText: 'Начать урегулирование',
      buttonHref: '#form',
      features: [
        { name: 'Составление мотивированной претензии / отзыва', value: '✓' },
        { name: 'Организация технической фиксации дефектов', value: '✓' },
        { name: 'Участие в переговорах сторон', value: '✓' },
        { name: 'Подготовка соглашения / протокола разногласий', value: '✓' }
      ],
      popular: true
    },
    {
      title: 'Арбитражное дело под ключ',
      price: 'от 75 000 ₽',
      subtitle: 'Полное сопровождение дела в арбитражном суде первой инстанции',
      buttonText: 'Заказать ведение дела',
      buttonHref: '#form',
      features: [
        { name: 'Подготовка иска / отзыва / встречного иска', value: '✓' },
        { name: 'Обеспечительные меры (арест счетов)', value: '✓' },
        { name: 'Формирование вопросов судебной экспертизе', value: '✓' },
        { name: 'Участие во всех судебных заседаниях', value: '✓' }
      ],
      popular: false
    }
  ];

  const relatedServices = [
    {
      title: 'Юридическое сопровождение строительства и реконструкции',
      desc: 'Если судебного конфликта ещё нет и требуется выстроить договоры, приёмку, переписку и разрешительный маршрут проекта.',
      link: '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/yuridicheskoe-soprovozhdenie-stroitelstva/'
    },
    {
      title: 'Арбитражный юрист',
      desc: 'Если основной вопрос связан со стадией арбитражного процесса, обжалованием судебного акта или защитой ответчика.',
      link: '/biznesu/arbitrazhnyj-yurist/'
    },
    {
      title: 'Взыскание задолженности с юридических лиц',
      desc: 'Если долг признан и спор об объёме, качестве или приёмке строительных работ отсутствует.',
      link: '/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/'
    },
    {
      title: 'Договорное право',
      desc: 'Если требуется разработать или проверить договор подряда до возникновения конфликта.',
      link: '/biznesu/dogovornoe-pravo/'
    }
  ];

  const jsonLdGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LegalService',
        '@id': 'https://dejure-help.ru/#legalservice',
        name: 'Юридическая компания Де-Юре',
        url: 'https://dejure-help.ru/',
        telephone: '+7 (4742) 20-15-25',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'ул. Советская, д. 35, оф. 213',
          addressLocality: 'Липецк',
          addressRegion: 'Липецкая область',
          addressCountry: 'RU'
        },
        areaServed: ['Липецк', 'Липецкая область']
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/stroitelnye-spory/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Главная',
            item: 'https://dejure-help.ru/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Бизнесу',
            item: 'https://dejure-help.ru/biznesu/'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Юрист по недвижимости и строительству для бизнеса',
            item: 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/'
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Юрист по строительным спорам в Липецке',
            item: 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/stroitelnye-spory/'
          }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/stroitelnye-spory/#service',
        name: 'Юрист по строительным спорам в Липецке',
        serviceType: 'Юридические услуги по строительным спорам и арбитражным делам',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        url: 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/stroitelnye-spory/'
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/stroitelnye-spory/#faq',
        mainEntity: faqs.map(faq => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a
          }
        }))
      }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />
      <Header />

      {/* ═══ 1. ПЕРВЫЙ ЭКРАН (HERO) ═══ */}
      <MilitaryHero
        breadcrumbs={
          <>
            <Link href="/" style={{ color: 'var(--color-primary)' }}>Главная</Link> <span style={{ margin: '0 8px' }}>/</span>
            <Link href="/biznesu/" style={{ color: 'var(--color-primary)' }}>Бизнесу</Link> <span style={{ margin: '0 8px' }}>/</span>
            <Link href="/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/" style={{ color: 'var(--color-primary)' }}>Юрист по недвижимости и строительству</Link> <span style={{ margin: '0 8px' }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Строительные споры</span>
          </>
        }
        superTitle={
          <span className="hero-title-span-mobile" style={{ display: 'inline-block' }}>
            Строительные споры • Арбитраж и подряд • Липецк
          </span>
        }
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Юрист по строительным
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              спорам в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Защитим подрядчика или заказчика в споре о неоплате, качестве, объёмах работ, сроках, неустойке и приёмке по формам КС-2/КС-3 в арбитражном суде.
          </span>
        }
        trustItems={[
          { text: <span><strong>Начинаем с анализа КС-2</strong>, смет, АОСР и переписки</span> },
          { text: <span><strong>Формируем позицию</strong> для переговоров и арбитражного суда</span> },
          { text: <span><strong>Фиксированная стоимость</strong> и измеримые этапы в договоре</span> }
        ]}
        primaryCtaText="Обсудить строительный спор"
        primaryCtaLink="#form"
        primaryCtaSubtext={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Перезвоним в течение 15 минут в рабочее время
            </span>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              или звоните: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (4742) 20-15-25</a>
            </span>
          </span>
        }
        secondaryCtaText="Что проверит юрист"
        secondaryCtaLink="#situations"
        imageUrl="/images/nacheshnikov.jpg"
        imageName="Владимир Викторович Начешников"
        imageSubtitle="Специалист по строительным спорам и подрядным договорам"
        imageObjectPosition="center 15%"
      />

      {/* ═══ 2. ТИПОВЫЕ СИТУАЦИИ (СИТУАЦИИ) ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px', textAlign: 'left' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Арбитражная практика
            </div>
            <h2 className="with-accent" style={{ 
              fontSize: 'clamp(28px, 4vw, 42px)', 
              fontFamily: 'var(--font-serif)', 
              color: 'var(--color-primary)', 
              marginBottom: '16px', 
              marginTop: 0, 
              lineHeight: 1.2,
              textAlign: 'left'
            }}>
              <span style={{ display: 'inline-block' }}>С какими строительными</span> <br />
              <span style={{ display: 'inline-block' }}>конфликтами работает юрист</span>
            </h2>
            <p style={{ 
              fontSize: '16px', 
              color: 'var(--color-deep-blue)', 
              opacity: 0.9, 
              lineHeight: 1.65, 
              margin: 0,
              maxWidth: '740px',
              textAlign: 'left',
              textWrap: 'balance'
            }}>
              Подключаемся как на стадии первых разногласий и претензий, так и в разгар судебного процесса в арбитражном суде.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            {situations.map((sit, idx) => (
              <div
                key={idx}
                className="card hover-lift"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  borderRadius: '0',
                  padding: '26px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
                onClick={() => {
                  const el = document.getElementById('form');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else window.location.hash = 'form';
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
                  {sit.tag && (
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
                      {sit.tag}
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
                    {sit.title}
                  </h3>

                  <p style={{
                    fontSize: '14px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    {sit.desc}
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
                  <span>Защитить проект</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            ))}

            {/* Карточка 6: CTA для сложных ситуаций */}
            <div
              className="card hover-lift"
              style={{
                background: 'linear-gradient(145deg, #10273B 0%, #17324D 100%)',
                border: '1px solid rgba(193, 160, 102, 0.35)',
                borderTop: '3px solid var(--color-gold)',
                borderRadius: '0',
                padding: '26px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 6px 24px rgba(16, 39, 59, 0.15)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
              onClick={() => {
                const el = document.getElementById('form');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else window.location.hash = 'form';
              }}
            >
              <div style={{
                position: 'absolute',
                top: '-15px',
                right: '-15px',
                width: '90px',
                height: '90px',
                opacity: 0.08,
                pointerEvents: 'none',
                color: '#C1A066'
              }}>
                <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>

              <div>
                <div style={{
                  fontSize: '11.5px',
                  fontWeight: 700,
                  color: 'var(--color-gold)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '12px',
                  background: 'rgba(193, 160, 102, 0.15)',
                  padding: '3px 8px',
                  display: 'inline-block',
                  borderRadius: '2px'
                }}>
                  Госконтракты / РНП
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  margin: '0 0 10px 0',
                  lineHeight: 1.35
                }}>
                  Госконтракты 44-ФЗ/223-ФЗ и риск РНП?
                </h3>

                <p style={{
                  fontSize: '14px',
                  color: '#CBD5E1',
                  lineHeight: 1.5,
                  margin: '0 0 16px 0'
                }}>
                  Односторонний отказ государственного заказчика, удержание гарантии и риск РНП требуют срочной защиты в ФАС и суде.
                </p>
              </div>

              <div style={{ position: 'relative', zIndex: 1, marginTop: 'auto', paddingTop: '12px' }}>
                <a
                  href="#form"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--color-gold)',
                    fontSize: '14px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#dfca9e')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('form');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else window.location.hash = 'form';
                  }}
                >
                  <span>Заказать аудит спора</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. НАПРАВЛЕНИЯ ПРОВЕРКИ ═══ */}
      <section className="section bg-light" id="audit-points" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px', textAlign: 'left' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Комплексный анализ
            </div>
            <h2 className="with-accent" style={{ 
              fontSize: 'clamp(28px, 4vw, 42px)', 
              fontFamily: 'var(--font-serif)', 
              color: 'var(--color-primary)', 
              marginBottom: '16px', 
              marginTop: 0, 
              lineHeight: 1.2,
              textAlign: 'left'
            }}>
              <span style={{ display: 'inline-block' }}>Что проверит юрист:</span> <br />
              <span style={{ display: 'inline-block' }}>8 направлений анализа конфликта</span>
            </h2>
            <p style={{ 
              fontSize: '16px', 
              color: 'var(--color-deep-blue)', 
              opacity: 0.9, 
              lineHeight: 1.65, 
              margin: 0, 
              maxWidth: '740px',
              textAlign: 'left',
              textWrap: 'balance'
            }}>
              Правовая квалификация документов, действий сторон и доказательств для победы в арбитражном суде.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '20px', position: 'relative', gridAutoRows: '1fr' }}>
            {auditDirections.map((item, idx) => (
              <div
                key={idx}
                className="hover-lift"
                style={{
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  padding: '30px 24px 26px 24px',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '270px',
                  height: '100%',
                  position: 'relative'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '22px',
                  background: 'var(--color-gold)',
                  color: '#FFFFFF',
                  fontSize: '13px',
                  fontWeight: 700,
                  padding: '3px 10px',
                  borderRadius: '2px',
                  letterSpacing: '0.05em'
                }}>
                  0{idx + 1}
                </div>
                <div>
                  <h3 style={{ 
                    fontSize: '17.5px', 
                    fontFamily: 'var(--font-serif)', 
                    color: 'var(--color-deep-blue)', 
                    margin: '6px 0 10px 0', 
                    lineHeight: 1.35,
                    minHeight: '48px'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ 
                    fontSize: '14px', 
                    color: 'var(--color-text-secondary)', 
                    lineHeight: 1.55, 
                    margin: 0,
                    minHeight: '80px'
                  }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Карточка 9: Завершающая CTA карточка аудита */}
            <div 
              className="hover-lift"
              style={{
                padding: '30px 24px 26px 24px',
                background: 'linear-gradient(145deg, #10273B 0%, #17324D 100%)',
                border: '1px solid rgba(193, 160, 102, 0.35)',
                borderTop: '3px solid var(--color-gold)',
                boxShadow: '0 8px 30px rgba(16, 39, 59, 0.18)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '270px',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onClick={() => {
                const el = document.getElementById('form');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else window.location.hash = 'form';
              }}
            >
              <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.1, pointerEvents: 'none' }}>
                <svg width="100" height="100" viewBox="0 0 24 24" fill="#C1A066">
                  <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>

              <div>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '17.5px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  margin: '6px 0 10px 0',
                  lineHeight: 1.35,
                  minHeight: '48px'
                }}>
                  Нужен аудит строительного спора?
                </h3>

                <p style={{
                  fontSize: '14px',
                  color: '#CBD5E1',
                  lineHeight: 1.55,
                  margin: 0,
                  minHeight: '80px'
                }}>
                  Предоставим письменное заключение с анализом рисков, доказательственной базы и правовыми рекомендациями.
                </p>
              </div>

              <div style={{ marginTop: 'auto', paddingTop: '16px', position: 'relative', zIndex: 1 }}>
                <a
                  href="#form"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--color-gold)',
                    fontSize: '14px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('form');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else window.location.hash = 'form';
                  }}
                >
                  <span>Заказать Due Diligence спора</span>
                  <span style={{ fontSize: '16px' }}>&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 4. ЧТО ПОДГОТОВИТЬ К ПЕРВОЙ ВСТРЕЧЕ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Что можно подготовить</span> <br />
              <span style={{ display: 'inline-block' }}>к первой консультации</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Если части документов нет на руках, это не препятствует началу работы. Юрист проверит исполнительную документацию, определит недостающие материалы и поможет истребовать их.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            {/* Карточка 1: Договорные и исполнительные документы */}
            <div style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-primary)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingBottom: '12px', borderBottom: '1px solid rgba(23, 50, 77, 0.1)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <h3 style={{ fontSize: '19px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', margin: 0, fontWeight: 700 }}>
                  Договорные и исполнительные документы
                </h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  'Договор строительного подряда, ТЗ, сметы и допсоглашения',
                  'Акты КС-2/КС-3, УПД и справки о стоимости работ',
                  'Платёжные поручения, счета, расчёты авансов и удержаний',
                  'Акты освидетельствования скрытых работ (АОСР) и журналы'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '14.5px', color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <polyline points="9 11 12 14 22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Карточка 2: Переписка и доказательства */}
            <div style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-gold)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingBottom: '12px', borderBottom: '1px solid rgba(23, 50, 77, 0.1)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <h3 style={{ fontSize: '19px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', margin: 0, fontWeight: 700 }}>
                  Переписка и доказательства спора
                </h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  'Извещения о готовности к приёмке и уведомления о приостановке',
                  'Претензии, ответы на них и уведомления об отказе',
                  'Дефектные ведомости и заключения независимых экспертов',
                  'Фото- и видеоматериалы фиксации состояния объекта'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '14.5px', color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <polyline points="9 11 12 14 22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 5. ЭТАПЫ ВЕДЕНИЯ СПОРА (ПЕРЕКЛЮЧАТЕЛЬ МАРШРУТА) ═══ */}
      <section className="section bg-white" style={{ paddingTop: '20px', paddingBottom: '0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            padding: '6px',
            backgroundColor: '#F7F4ED',
            borderRadius: '4px',
            gap: '6px',
            border: '1px solid var(--color-border)'
          }}>
            <button
              type="button"
              onClick={() => setActiveRole('plaintiff')}
              style={{
                fontFamily: 'var(--font-sans)',
                padding: '11px 24px',
                borderRadius: '2px',
                border: 'none',
                fontWeight: 600,
                fontSize: '15px',
                cursor: 'pointer',
                backgroundColor: activeRole === 'plaintiff' ? 'var(--color-primary)' : 'transparent',
                color: activeRole === 'plaintiff' ? '#FFFFFF' : 'var(--color-deep-blue)',
                transition: 'all 0.2s ease'
              }}
            >
              Маршрут истца (взыскание / подряд)
            </button>
            <button
              type="button"
              onClick={() => setActiveRole('defendant')}
              style={{
                fontFamily: 'var(--font-sans)',
                padding: '11px 24px',
                borderRadius: '2px',
                border: 'none',
                fontWeight: 600,
                fontSize: '15px',
                cursor: 'pointer',
                backgroundColor: activeRole === 'defendant' ? 'var(--color-primary)' : 'transparent',
                color: activeRole === 'defendant' ? '#FFFFFF' : 'var(--color-deep-blue)',
                transition: 'all 0.2s ease'
              }}
            >
              Маршрут ответчика (защита от претензий)
            </button>
          </div>
        </div>
      </section>

      <ProcessBlock
        title={activeRole === 'plaintiff' ? (
          <>
            Порядок действий для истца <br />
            в строительном споре
          </>
        ) : (
          <>
            Порядок защиты для ответчика <br />
            в строительном споре
          </>
        )}
        subtitle="Состав и последовательность работы зависят от роли клиента: требования истца, защита ответчика и исполнение решения проходят по разным маршрутам."
        steps={activeRole === 'plaintiff' ? [
          {
            num: '01',
            title: 'Аудит документов и фиксация',
            desc: 'Изучаем договор, сметы, формы КС-2/КС-3, переписку и наличие извещений о готовности к приёмке.'
          },
          {
            num: '02',
            title: 'Техническая фиксация и осмотр',
            desc: 'Организуем осмотр объекта, фиксацию дефектов или объёмов работ с привлечением технического эксперта.'
          },
          {
            num: '03',
            title: 'Расчёт требований и санкций',
            desc: 'Формируем обоснованный расчёт суммы основного долга, договорной неустойки, убытков и процентов по ст. 395 ГК РФ.'
          },
          {
            num: '04',
            title: 'Досудебная стадия',
            desc: 'Для будущего истца проверяем обязательность претензионного порядка, срок ожидания и направляем претензию. Для ответчика анализируем полученные требования, готовим ответ и фиксируем возражения и встречные требования.'
          },
          {
            num: '05',
            title: 'Иск, отзыв и обеспечительные меры',
            desc: 'В зависимости от роли клиента готовим иск, отзыв или встречный иск. При наличии предусмотренных законом оснований заявляем обеспечительные меры, например арест денежных средств в пределах требований, чтобы снизить риск неисполнения будущего решения.'
          },
          {
            num: '06',
            title: 'Судебная экспертиза',
            desc: 'Формируем вопросы для эксперта, участвуем в выборе экспертной организации и допросе эксперта в суде.'
          },
          {
            num: '07',
            title: 'Судебное представительство',
            desc: 'Защищаем позицию истца во всех заседаниях арбитражного суда первой, апелляционной и кассационной инстанций.'
          },
          {
            num: '08',
            title: 'Исполнение решения суда',
            desc: 'Получаем исполнительный лист, определяем доступный способ взыскания и предъявляем документ в банк или ФССП. Сопровождаем согласованные исполнительные действия; фактическое получение денег зависит от активов должника и установленных законом ограничений.'
          }
        ] : [
          {
            num: '01',
            title: 'Анализ иска и материалов',
            desc: 'Изучаем исковое заявление, приложенные расчёты, формы КС-2/КС-3, определения суда и процессуальные сроки.'
          },
          {
            num: '02',
            title: 'Проверка нарушений и сроков',
            desc: 'Проверяем соблюдение истцом досудебного порядка, процедуру сдачи работ и сроки исковой давности.'
          },
          {
            num: '03',
            title: 'Контр-анализ объёмов и качества',
            desc: 'Привлекаем технического специалиста для оценки реального качества работ и причин возникновения дефектов.'
          },
          {
            num: '04',
            title: 'Досудебная стадия',
            desc: 'Для будущего истца проверяем обязательность претензионного порядка, срок ожидания и направляем претензию. Для ответчика анализируем полученные требования, готовим ответ и фиксируем возражения и встречные требования.'
          },
          {
            num: '05',
            title: 'Иск, отзыв и обеспечительные меры',
            desc: 'В зависимости от роли клиента готовим иск, отзыв или встречный иск. При наличии предусмотренных законом оснований заявляем обеспечительные меры, например арест денежных средств в пределах требований, чтобы снизить риск неисполнения будущего решения.'
          },
          {
            num: '06',
            title: 'Экспертная позиция',
            desc: 'Готовим альтернативные вопросы судебному эксперту, заявляем отвод недобросовестным экспертным учреждениям.'
          },
          {
            num: '07',
            title: 'Защита в арбитражном суде',
            desc: 'Отстаиваем интересы ответчика в заседаниях, снижаем неустойку по ст. 333 ГК РФ и отбиваем претензии.'
          },
          {
            num: '08',
            title: 'Исполнение решения суда',
            desc: 'Получаем исполнительный лист, определяем доступный способ взыскания и предъявляем документ в банк или ФССП. Сопровождаем согласованные исполнительные действия; фактическое получение денег зависит от активов должника и установленных законом ограничений.'
          }
        ]}
      />

      {/* ═══ 6. ПРАКТИКА (CASES BLOCK) ═══ */}
      <CasesBlock
        cases={cases}
        title="Практика по строительным спорам"
      />

      {/* ═══ 7. СТОИМОСТЬ (PRICING BLOCK) ═══ */}
      <PricingBlock
        title="Стоимость ведения строительных споров"
        subtitle="Прозрачные тарифы. Судебные расходы взыскиваются с проигравшей стороны."
        tiers={pricingTiers}
      />

      {/* ═══ 8. ВОПРОСЫ И ОТВЕТЫ (FAQ BLOCK) ═══ */}
      <FAQBlock
        title="Частые вопросы по строительным спорам"
        subtitle="Ответы арбитражного юриста по КС-2, экспертизе, допработам и срокам"
        faqs={faqs}
      />

      {/* ═══ 9. СМЕЖНЫЕ УСЛУГИ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ marginBottom: '36px' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '24px'
            }}>
              <h2 className="with-accent" style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: 'clamp(24px, 3.5vw, 34px)', 
                color: 'var(--color-deep-blue)', 
                margin: 0, 
                lineHeight: 1.25, 
                flex: '1 1 480px', 
                minWidth: '280px' 
              }}>
                <span style={{ display: "inline-block" }}>Смежные услуги</span> <br />
                <span style={{ display: "inline-block" }}>строительной практики</span>
              </h2>
              <p style={{
                flex: '0 1 440px',
                minWidth: '280px',
                fontSize: '15.5px',
                color: 'var(--color-text-secondary)',
                fontWeight: 400,
                lineHeight: 1.65,
                margin: 0,
                textAlign: 'left',
                textWrap: 'balance'
              }}>
                Комплексная юридическая помощь бизнесу: сопровождение проектов, договоры, арбитражный процесс и взыскание задолженности.
              </p>
            </div>
          </div>

          <div className="grid grid-4" style={{ gap: '20px', marginBottom: '28px' }}>
            {relatedServices.map((rel, idx) => (
              <Link key={idx} href={rel.link} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                <div
                  className="card related-service-card hover-lift"
                  style={{
                    height: '100%',
                    minHeight: '180px',
                    padding: '26px 24px',
                    background: 'var(--color-white)',
                    border: '1px solid var(--color-border)',
                    borderTop: '3px solid var(--color-primary)',
                    borderRadius: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div>
                    <h3 style={{ margin: '0 0 10px 0', fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', lineHeight: 1.35, fontWeight: 700 }}>
                      {rel.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                      {rel.desc}
                    </p>
                  </div>
                  <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13.5px', fontWeight: 600, marginTop: '18px', transition: 'color 0.35s ease' }}>
                    <span>Подробнее об услуге</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 10. ФОРМА ЗАЯВКИ (CONTACT SECTION / СВЯЗАТЬСЯ С НАМИ) ═══ */}
      <section className="section bg-white" id="form" style={{ padding: '80px 0', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '48px', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  Связаться с нами
                </span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Получите первичную</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>оценку спора</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко опишите ситуацию и оставьте контакты. Юрист изучит материалы по КС-2, сметы, акты или суть разногласий и свяжется с вами в течение 15 минут в рабочее время.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация строительного юриста</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните прямо сейчас: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (4742) 20-15-25</a>
                </p>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '6px' }}>
                  Липецк, ул. Советская, д. 35, офис 213 (приём по предварительной записи)
                </div>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Конфиденциальность:</strong>
                Не указывайте в форме конфиденциальные данные, коммерческую тайну и закрытые документы. Материалы можно передать юристу после согласования защищённого канала связи.
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Обсудить строительный спор"
                subtitle={
                  <>
                    <span style={{ display: 'inline-block' }}>Оставьте контакты и суть спора. Юрист свяжется с вами</span> <br />
                    <span style={{ display: 'inline-block' }}>в течение 15 минут в рабочее время.</span>
                  </>
                }
                subtext={
                  <>
                    <span style={{ display: 'inline-block' }}>Если вы оставите заявку вечером или в&nbsp;выходной день,</span> <br />
                    <span style={{ display: 'inline-block' }}>мы перезвоним в&nbsp;ближайший рабочий день.</span>
                  </>
                }
                buttonText="Отправить материалы на анализ"
                commentPlaceholder="Укажите предмет спора (неоплата КС-2, претензии по качеству, срыв сроков, допработы)…"
                hiddenFields={[
                  { name: 'source_page', value: '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/stroitelnye-spory/' },
                  { name: 'service', value: 'Строительные споры в арбитраже' }
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
