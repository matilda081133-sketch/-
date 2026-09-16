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
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    },
    {
      title: 'Госконтракты 44-ФЗ/223-ФЗ и риск РНП',
      desc: 'Односторонний отказ государственного заказчика, риск взыскания обеспечения контракта и угроза включения компании в РНП.',
      tag: 'Госконтракты / РНП'
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
      result: 'Арбитражный суд удовлетворил иск в полном объёме, взыскав основной долг 14.8 млн ₽, неустойку и судебные расходы.'
    },
    {
      title: 'Защита заказчика завода от необоснованных требований подрядчика на 22 млн ₽',
      category: 'Защита заказчика',
      problem: 'Подрядчик обратился в арбитраж с требованием оплатить допработы на 22 млн ₽. Заказчик выявил прогибы перекрытий и отклонения от проекта.',
      action: 'Обосновали несоблюдение подрядчиком порядка ст. 743 ГК РФ о согласовании допработ, доказали ненадлежащее качество монтажа и заявили встречный иск об устранении брака.',
      result: 'В удовлетворении иска подрядчика отказано; встречный иск заказчика удовлетворён, подрядчик возместил стоимость переделки.'
    },
    {
      title: 'Защита подрядчика по 44-ФЗ от включения в РНП и взыскание долга',
      category: '44-ФЗ / Защита от РНП',
      problem: 'Муниципальный заказчик принял решение об одностороннем отказе от контракта на капремонт школы и направил документы в УФАС для включения в РНП.',
      action: 'Собрали переписку, подтверждающую невозможность выполнения работ из-за необеспечения доступа в здание, доказали добросовестность подрядчика на заседании комиссии ФАС.',
      result: 'Комиссия УФАС отказала во включении сведений в РНП; в арбитражном суде с заказчика взыскана стоимость фактически выполненного этапа.'
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
      title: 'Сделки с коммерческой недвижимостью',
      desc: 'Сопровождение купли-продажи коммерческих зданий, земельных массивов, складов и производственных комплексов.',
      link: '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/soprovozhdenie-sdelok-s-kommercheskoy-nedvizhimostyu/'
    },
    {
      title: 'Аренда коммерческой недвижимости',
      desc: 'Аудит и составление договоров аренды для арендаторов и арендодателей, защита обеспечительных платежей.',
      link: '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/yuridicheskoe-soprovozhdenie-arendy-kommercheskoy-nedvizhimosti/'
    },
    {
      title: 'Земля и градостроительство',
      desc: 'Градостроительный аудит, смена ВРИ, внесение изменений в ПЗЗ, получение ГПЗУ и оформление участков.',
      link: '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/zemelno-gradostroitelnoe-soprovozhdenie/'
    },
    {
      title: 'Сопровождение строительства и реконструкции',
      desc: 'Правовое сопровождение от старта проекта и договоров подряда до получения разрешения на ввод объекта в эксплуатацию.',
      link: '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/yuridicheskoe-soprovozhdenie-stroitelstva/'
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

      {/* ═══ 1. ПЕРВЫЙ ЭКРАН ═══ */}
      <MilitaryHero
        breadcrumbs={
          <>
            <Link href="/" style={{ color: 'var(--color-primary)' }}>Главная</Link> <span style={{ margin: '0 8px' }}>/</span>
            <Link href="/biznesu/" style={{ color: 'var(--color-primary)' }}>Бизнесу</Link> <span style={{ margin: '0 8px' }}>/</span>
            <Link href="/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/" style={{ color: 'var(--color-primary)' }}>Юрист по недвижимости и строительству</Link> <span style={{ margin: '0 8px' }}>/</span>
            <span style={{ color: 'var(--color-text-muted)' }}>Строительные споры</span>
          </>
        }
        superTitle="Строительные споры • Арбитраж и подряд • Липецк"
        title="Юрист по строительным спорам в Липецке"
        subtitle="Защитим подрядчика или заказчика в споре о неоплате, качестве, объёмах работ, сроках, неустойке и приёмке по формам КС-2/КС-3 в арбитражном суде."
        trustItems={[
          { text: 'Начинаем с анализа КС-2, смет и переписки' },
          { text: 'Формируем позицию для переговоров и суда' },
          { text: 'Стоимость и этапы фиксируем в соглашении' }
        ]}
        primaryCtaText="Обсудить строительный спор"
        primaryCtaLink="#form"
        secondaryCtaText="Что проверит юрист"
        secondaryCtaLink="#situations"
      />

      {/* ═══ 2. ТИПОВЫЕ СИТУАЦИИ СПОРА ═══ */}
      <section style={{ backgroundColor: 'var(--color-white)', padding: '64px 0' }} id="situations">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 40px' }}>
            <h2 className="nowrap-desk" style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              С какими строительными конфликтами работает юрист
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Подключаемся как на стадии первых разногласий и претензий, так и в разгар судебного процесса в арбитраже.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            {situations.map((sit, idx) => (
              <div
                key={idx}
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

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--color-primary)',
                  fontSize: '13px',
                  fontWeight: 600,
                  marginTop: '20px'
                }}>
                  <span>Защитить проект</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. НАПРАВЛЕНИЯ ПРОВЕРКИ ═══ */}
      <section id="audit-points" style={{ backgroundColor: '#F8FAFC', padding: '64px 0', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 40px' }}>
            <h2 className="nowrap-desk" style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              Что проверит юрист: 8 направлений анализа конфликта
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Правовая квалификация документов, действий сторон и доказательств для победы в арбитражном суде.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px'
          }}>
            {auditDirections.map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '12px',
                  padding: '24px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <div style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-primary)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '13px',
                    fontWeight: 700
                  }}>
                    {idx + 1}
                  </div>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-deep-blue)', margin: 0 }}>
                    {item.title}
                  </h3>
                </div>
                <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. ДИАГНОСТИКА: ЧТО ПОДГОТОВИТЬ ДЛЯ СТАРТА ═══ */}
      <section style={{ background: 'var(--gradient-cream)', padding: '64px 0' }}>
        <div className="container">
          <div style={{
            backgroundColor: '#10273B',
            borderRadius: '20px',
            padding: '44px 40px',
            color: '#FFFFFF',
            boxShadow: '0 12px 32px rgba(16,39,59,0.18)'
          }}>
            <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center', marginBottom: '32px' }}>
              <div style={{
                display: 'inline-block',
                padding: '4px 12px',
                borderRadius: '6px',
                backgroundColor: 'rgba(212,175,55,0.18)',
                color: '#D4AF37',
                fontSize: '13px',
                fontWeight: 600,
                marginBottom: '12px'
              }}>
                Пакет документов
              </div>
              <h3 className="nowrap-desk" style={{ fontSize: '26px', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
                Что подготовить для правовой оценки строительного спора
              </h3>
              <p style={{ fontSize: '15px', color: '#CBD5E1', lineHeight: 1.6 }}>
                Не отправляйте исполнительную документацию через форму. После первого звонка юрист согласует безопасный защищённый канал передачи файлов.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '16px',
              marginBottom: '32px'
            }}>
              {[
                'Договор строительного подряда, техническое задание, сметы и допсоглашения',
                'Акты КС-2/КС-3, универсальные передаточные документы и справки о стоимости',
                'Платёжные поручения, счета на оплату, расчёты авансов и гарантийных удержаний',
                'Деловая переписка: извещения о готовности к приёмке, уведомления о приостановке',
                'Акты освидетельствования скрытых работ (АОСР), журналы работ и предписания надзора',
                'Претензии, ответы на претензии, уведомления об одностороннем отказе от договора',
                'Фото- и видеоматериалы, дефектные ведомости и заключения досудебных экспертов'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(212,175,55,0.2)',
                    color: '#D4AF37',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 700,
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    ✓
                  </div>
                  <span style={{ fontSize: '14px', color: '#E2E8F0', lineHeight: 1.5 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center' }}>
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn btn-gold"
                style={{ padding: '14px 32px', fontSize: '15px', fontWeight: 600 }}
              >
                Передать материалы спора на анализ
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 5. ЭТАПЫ ВЕДЕНИЯ СПОРА (PROCESS BLOCK С РАЗДЕЛЕНИЕМ ИСТЦА И ОТВЕТЧИКА) ═══ */}
      <section style={{ backgroundColor: 'var(--color-white)', paddingTop: '40px', paddingBottom: '0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex',
            padding: '6px',
            backgroundColor: '#F1F5F9',
            borderRadius: '8px',
            gap: '6px',
            boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.06)'
          }}>
            <button
              onClick={() => setActiveRole('plaintiff')}
              style={{
                padding: '10px 24px',
                borderRadius: '6px',
                border: 'none',
                fontWeight: 700,
                fontSize: '14.5px',
                cursor: 'pointer',
                backgroundColor: activeRole === 'plaintiff' ? 'var(--color-primary)' : 'transparent',
                color: activeRole === 'plaintiff' ? '#FFFFFF' : 'var(--color-deep-blue)',
                transition: 'all 0.2s ease',
                boxShadow: activeRole === 'plaintiff' ? '0 2px 8px rgba(23,50,77,0.2)' : 'none'
              }}
            >
              Маршрут истца (взыскание / подряд)
            </button>
            <button
              onClick={() => setActiveRole('defendant')}
              style={{
                padding: '10px 24px',
                borderRadius: '6px',
                border: 'none',
                fontWeight: 700,
                fontSize: '14.5px',
                cursor: 'pointer',
                backgroundColor: activeRole === 'defendant' ? 'var(--color-primary)' : 'transparent',
                color: activeRole === 'defendant' ? '#FFFFFF' : 'var(--color-deep-blue)',
                transition: 'all 0.2s ease',
                boxShadow: activeRole === 'defendant' ? '0 2px 8px rgba(23,50,77,0.2)' : 'none'
              }}
            >
              Маршрут ответчика (защита от претензий)
            </button>
          </div>
        </div>
      </section>

      <ProcessBlock
        title={activeRole === 'plaintiff' ? "Порядок действий для истца в строительном споре" : "Порядок защиты для ответчика в строительном споре"}
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
          <div style={{ maxWidth: '780px', marginBottom: '40px', textAlign: 'left' }}>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '12px', marginTop: 0, lineHeight: 1.25 }}>
              Смежные направления практики по недвижимости и строительству
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Если вашей компании требуется комплексное решение, ознакомьтесь с другими направлениями строительной практики:
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '24px' }}>
            {relatedServices.map((rel, idx) => (
              <Link key={idx} href={rel.link} style={{ textDecoration: 'none' }} className="card-link">
                <div
                  className="card hover-lift"
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

      {/* ═══ 10. ФОРМА ОБРАТНОЙ СВЯЗИ (CONTACTS FORM) ═══ */}
      <ContactsForm
        title="Обсудите строительный спор с арбитражным юристом"
        subtitle="Оставьте заявку на предварительный анализ спора. Мы свяжемся с вами в течение 15 минут в рабочее время."
      />

      <Footer />

      {/* Модальное окно быстрой заявки */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(16,39,59,0.7)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: '36px 32px',
              maxWidth: '540px',
              width: '100%',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#64748B'
              }}
            >
              ×
            </button>
            <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '10px' }}>
              Консультация по строительному спору
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: 1.5, marginBottom: '24px' }}>
              Укажите ваши контактные данные и суть конфликта (неоплата, дефекты, просрочка). Юрист свяжется с вами в рабочее время.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Спасибо! Ваша заявка принята. Юрист свяжется с вами в рабочее время.');
                setIsModalOpen(false);
              }}
            >
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                  Ваше имя или название компании
                </label>
                <input
                  type="text"
                  required
                  placeholder="ООО «Компания» или представитель"
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    border: '1px solid #CBD5E1',
                    fontSize: '14px'
                  }}
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                  Телефон для связи
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+7 (___) ___-__-__"
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    border: '1px solid #CBD5E1',
                    fontSize: '14px'
                  }}
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                  Краткое описание спора
                </label>
                <textarea
                  rows={3}
                  placeholder="Взыскание задолженности по КС-2, претензии по качеству, срыв сроков..."
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    border: '1px solid #CBD5E1',
                    fontSize: '14px',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', padding: '14px', fontSize: '15px', fontWeight: 600 }}
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
