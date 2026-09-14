'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';
import ProcessBlock from '@/components/ProcessBlock';
import CasesBlock from '@/components/CasesBlock';
import PricingBlock from '@/components/PricingBlock';

export default function SporySZastrojshchikomClient() {
  const faqs = [
    {
      q: 'Можно ли взыскать неустойку, если акт приёма-передачи уже подписан?',
      a: 'Да. Подписание акта фиксирует дату фактической передачи объекта и прекращает начисление неустойки за просрочку, но не лишает дольщика права взыскать неустойку за уже допущенный период просрочки. Важно проверить, чтобы в акте не содержался добровольный отказ от финансовых требований.'
    },
    {
      q: 'Что делать, если застройщик прислал допсоглашение о переносе срока?',
      a: 'Застройщик обязан предложить изменение срока, если строительство затягивается, но дольщик не обязан его подписывать. Подписание такого соглашения законно переносит срок сдачи и лишает права требовать неустойку за согласованный период переноса.'
    },
    {
      q: 'В каких случаях целесообразно расторгать ДДУ?',
      a: 'Расторжение оправдано при существенной просрочке сдачи объекта (более 2 месяцев), приостановке строительства, значительном изменении проектной документации или площади квартиры, а также при неустранимых дефектах. Перед выходом из ДДУ необходимо оценить финансовое состояние застройщика и статус счёта эскроу.'
    },
    {
      q: 'Можно ли требовать деньги за дефекты, если застройщик предлагает ремонт?',
      a: 'По закону дольщик вправе заявить безвозмездное устранение недостатков, соразмерное уменьшение цены договора или возмещение собственных расходов на устранение. Порядок заявления требований зависит от условий ДДУ, даты приёмки и положений действующего законодательства.'
    },
    {
      q: 'Применяются ли моратории на неустойку по ДДУ?',
      a: 'Правительством РФ в отдельные периоды вводились особенности начисления и взыскания неустоек и штрафов (например, постановления № 442, № 480, № 326). Юрист при расчёте делит срок просрочки на юридические интервалы и рассчитывает санкции строго по нормам, действовавшим в каждый конкретный день.'
    },
    {
      q: 'Может ли суд снизить размер неустойки по ст. 333 ГК РФ?',
      a: 'Да, застройщики практически всегда ходатайствуют о снижении неустойки. Наша задача в суде — представить мотивированные возражения, доказать соразмерность заявленных требований, подтвердить убытки дольщика и минимизировать процент снижения.'
    }
  ];

  const cases = [
    {
      category: 'ПРОСРОЧКА И НЕУСТОЙКА',
      title: 'Просрочка передачи квартиры и корректный расчёт требований',
      problem: 'Срок сдачи дома по ДДУ истёк, застройщик предлагал допсоглашение о переносе срока на 8 месяцев без компенсации. Дольщик пытался рассчитать требования по интернет-калькулятору без учёта мораториев.',
      action: 'Проанализировали ДДУ и переписку, разделили период на нормативные интервалы, составили расчёт с актуальными ставками ЦБ, направили досудебную претензию и подали иск с обоснованием отсутствия оснований для ст. 333 ГК РФ.',
      result: 'Суд взыскал неустойку за все применимые периоды, штраф 50% и компенсацию морального вреда. Исполнительный лист направлен в банк застройщика.',
      isDemo: false
    },
    {
      category: 'РАСТОРЖЕНИЕ ДДУ',
      title: 'Расторжение договора ДДУ вместо неопределённого ожидания',
      problem: 'Строительство дома фактически остановилось, задержка превысила 5 месяцев. Дольщик выплачивал ипотеку и нес финансовые убытки на аренду временного жилья.',
      action: 'Оценили риски застройщика и счета эскроу, подготовили уведомление об одностороннем отказе от исполнения ДДУ, провели взаимодействие с банком-кредитором и добились расторжения.',
      result: 'Договор ДДУ прекращён во внесудебном порядке через Росреестр. Вся сумма цены договора возвращена дольщику со счёта эскроу, ипотечный кредит закрыт без штрафных санкций.',
      isDemo: false
    },
    {
      category: 'ДЕФЕКТЫ НОВОСТРОЙКИ',
      title: 'Взыскание компенсации на устранение строительных дефектов',
      problem: 'При приёмке квартиры обнаружены трещины в стяжке пола, продувание оконных блоков и промерзание угловых швов. Застройщик выполнил косметическую замазку, отказавшись от капитального устранения.',
      action: 'Привлекли независимого специалиста из реестра НОПРИЗ/НОСТРОЙ, составили дефектный акт со сметным расчётом, направили мотивированную претензию и защитили выводы экспертизы в суде.',
      result: 'Суд взыскал с застройщика полную стоимость восстановительного ремонта, расходы на досудебную экспертизу и штрафные санкции. Дольщики наняли профессиональную бригаду.',
      isDemo: false
    }
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Изучаем ДДУ и даты',
      desc: 'Получаем ДДУ, дополнительные соглашения, акты, уведомления застройщика и платёжные поручения.'
    },
    {
      num: '02',
      title: 'Выбираем маршрут',
      desc: 'Определяем приоритетный способ защиты: взыскание неустойки, выход из договора (расторжение) или компенсация за дефекты.'
    },
    {
      num: '03',
      title: 'Точный правовой расчёт',
      desc: 'Проверяем сроки исковой давности, редакции законов, моратории, ключевую ставку ЦБ РФ и оцениваем исполнимость.'
    },
    {
      num: '04',
      title: 'Претензия и переговоры',
      desc: 'Направляем официальную претензию с надлежащими расчётами, соблюдаем обязательный досудебный порядок.'
    },
    {
      num: '05',
      title: 'Суд и исполнение',
      desc: 'Представляем интересы во всех судебных заседаниях, противодействуем ст. 333 ГК РФ, получаем решение и исполнительный лист.'
    }
  ];

  const pricingTiers = [
    {
      title: <>Взыскание неустойки по ДДУ</>,
      subtitle: 'При просрочке сдачи',
      popular: true,
      badgeText: 'ВОСТРЕБОВАНО',
      price: 'от ХХХ ₽',
      features: [
        { name: 'Расчёт по периодам и ставкам ЦБ', value: '✓' },
        { name: 'Досудебная претензия застройщику', value: '✓' },
        { name: 'Судебный иск, штраф 50% и моральный вред', value: '✓' }
      ],
      buttonText: 'Рассчитать неустойку',
      buttonHref: '#form'
    },
    {
      title: <>Расторжение договора ДДУ</>,
      subtitle: 'Выход из договора',
      popular: false,
      price: 'от ХХХ ₽',
      features: [
        { name: 'Анализ оснований для расторжения', value: '✓' },
        { name: 'Уведомление об отказе / иск в суд', value: '✓' },
        { name: 'Возврат средств эскроу и процентов', value: '✓' }
      ],
      buttonText: 'Оценить расторжение',
      buttonHref: '#form'
    },
    {
      title: <>Компенсация за недостатки</>,
      subtitle: 'Строительные дефекты',
      popular: false,
      price: 'от ХХХ ₽',
      features: [
        { name: 'Организация приёмки и экспертизы', value: '✓' },
        { name: 'Составление дефектной ведомости', value: '✓' },
        { name: 'Взыскание стоимости восстановительного ремонта', value: '✓' }
      ],
      buttonText: 'Взыскать расходы',
      buttonHref: '#form'
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
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/spory-s-zastrojshchikom/#service',
        name: 'Споры с застройщиком в Липецке',
        serviceType: 'Юридическая помощь дольщикам',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        url: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/spory-s-zastrojshchikom/',
        description: 'Юрист по спорам с застройщиком в Липецке: просрочка по ДДУ, расторжение договора, недостатки квартиры, претензия, суд и исполнение решения.'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/spory-s-zastrojshchikom/#breadcrumbs',
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
            name: 'Гражданам',
            item: 'https://dejure-help.ru/grazhdanam/'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Юрист по недвижимости',
            item: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/'
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Споры с застройщиком',
            item: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/spory-s-zastrojshchikom/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/spory-s-zastrojshchikom/#faq',
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
            <Link href="/grazhdanam/" style={{ color: 'var(--color-primary)' }}>Гражданам</Link> <span style={{ margin: '0 8px' }}>/</span>
            <Link href="/grazhdanam/yurist-po-nedvizhimosti/" style={{ color: 'var(--color-primary)' }}>Юрист по недвижимости</Link> <span style={{ margin: '0 8px' }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Споры с застройщиком</span>
          </>
        }
        superTitle="ДДУ • просрочка • качество квартиры"
        title={<>Споры с застройщиком <br />в Липецке</>}
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '560px', textWrap: 'balance' }}>
            Проверим ДДУ, сроки, документы по передаче и дефектам, определим применимые требования и реальный порядок получения результата — от претензии до исполнения решения.
          </span>
        }
        primaryCtaText="Определить требования"
        primaryCtaLink="#form"
        primaryCtaAnalytics="dev_disputes_hero_click"
        primaryCtaSubtext="Перезвоним в течение 15 минут в рабочее время"
        rightContent={
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', width: '100%' }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '130%',
              height: '130%',
              background: 'radial-gradient(circle, rgba(193, 160, 102, 0.15) 0%, rgba(23, 50, 77, 0.04) 40%, transparent 70%)',
              zIndex: 0,
              pointerEvents: 'none'
            }} />

            <svg style={{ position: 'absolute', top: '40%', left: '85%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', opacity: 0.09, zIndex: 0, pointerEvents: 'none' }} viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="0.6">
              <path d="M3 21h18 M4 21v-2h16v2 M6 19V9 M10 19V9 M14 19V9 M18 19V9 M12 4l-9 5h18l-9-5z M4 9h16"/>
            </svg>

            <div className="mockup-container" style={{ zIndex: 1, margin: 0 }}>
              <div style={{ position: 'absolute', width: '220px', height: '220px', background: 'var(--color-primary)', filter: 'blur(90px)', opacity: 0.12, borderRadius: '50%' }}></div>
              
              <div className="doc-wrapper-float-4">
                <div className="doc-sheet doc-sheet-4">
                  <div style={{ padding: '35px 25px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '30px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end' }}>
                        <div style={{ width: '90px', height: '3px', background: 'rgba(23,50,77,0.2)' }}></div>
                        <div style={{ width: '70px', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>
                    </div>
                    <div style={{ width: '140px', height: '6px', background: 'var(--color-primary)', margin: '0 auto 30px auto' }}></div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ width: '100%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      <div style={{ width: '90%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="doc-wrapper-float-3">
                <div className="doc-sheet doc-sheet-3">
                  <div style={{ padding: '35px 25px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ position: 'absolute', top: '25px', left: '25px', width: '65px', height: '25px', border: '1.5px solid rgba(23, 50, 77, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-5deg)' }}>
                      <span style={{ fontSize: '4px', fontWeight: 'bold', color: 'rgba(23,50,77,0.4)', fontFamily: 'var(--font-serif)' }}>ДДУ № 214-ФЗ</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '35px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end' }}>
                        <div style={{ width: '95px', height: '3px', background: 'rgba(23,50,77,0.2)' }}></div>
                        <div style={{ width: '55px', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>
                    </div>
                    <div style={{ width: '120px', height: '6px', background: 'var(--color-gold)', margin: '0 auto 25px auto' }}></div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ width: '100%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      <div style={{ width: '85%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      />

      {/* ═══ 2. ТРИ НАПРАВЛЕНИЯ ПОМОЩИ (ДОЧЕРНИЕ УСЛУГИ) ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
            <span className="badge badge-gold" style={{ marginBottom: '16px' }}>ВИДЫ ТРЕБОВАНИЙ</span>
            <h2 className="section-title">Выберите требование по характеру нарушения</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Каждая ситуация требует отдельного юридического механизма: расчёта по периодам, выхода из договора или экспертизы строительного брака.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '30px' }}>
            {[
              {
                title: 'Взыскание неустойки по ДДУ',
                desc: 'Рассчитаем требования по применимым периодам, учтём изменения мораториев и ключевой ставки, подготовим претензию и иск, сопроводим суд и фактическое исполнение.',
                link: '/grazhdanam/yurist-po-nedvizhimosti/vzyskanie-neustojki-po-ddu/',
                btnText: 'Рассчитать требования'
              },
              {
                title: 'Расторжение договора ДДУ',
                desc: 'Проверим основания и финансовые последствия выхода из договора, оценим возврат цены со счетов эскроу и процентов, проведём уведомление, переговоры или судебное расторжение.',
                link: '/grazhdanam/yurist-po-nedvizhimosti/rastorzhenie-ddu/',
                btnText: 'Оценить расторжение'
              },
              {
                title: 'Компенсация за недостатки квартиры',
                desc: 'Поможем зафиксировать дефекты при приёмке, привлечём эксперта НОПРИЗ/НОСТРОЙ, обоснуем смету восстановительного ремонта и взыщем применимые суммы.',
                link: '/grazhdanam/yurist-po-nedvizhimosti/nedostatki-kvartiry-i-vzyskanie-rashodov/',
                btnText: 'Разобрать дефекты'
              }
            ].map((card, idx) => (
              <div
                key={idx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '36px 30px',
                  border: '1px solid rgba(23, 50, 77, 0.08)',
                  borderTop: '4px solid var(--color-gold)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '16px', lineHeight: 1.3 }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '0.96rem', color: 'var(--color-text-muted)', lineHeight: 1.65, marginBottom: '28px' }}>
                    {card.desc}
                  </p>
                </div>
                <Link
                  href={card.link}
                  className="btn btn-primary"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '12px 20px',
                    borderRadius: '8px',
                    fontWeight: 600,
                    textDecoration: 'none'
                  }}
                >
                  {card.btnText} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. ЧТО ПРОВЕРИТ ЮРИСТ ДО НАЧАЛА СПОРА ═══ */}
      <section className="section" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
            <span className="badge badge-gold" style={{ marginBottom: '16px' }}>ЮРИДИЧЕСКИЙ АНАЛИЗ</span>
            <h2 className="section-title">Что проверяем до предъявления требований</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Размер взыскания зависит не только от факта задержки или дефекта, но и от соблюдения процессуальных процедур и доказательственной базы.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {[
              {
                num: '01',
                title: 'Договор и статус сторон',
                desc: 'Зарегистрированный ДДУ, договор уступки права требования, статус гражданина как потребителя и отсутствие коммерческого назначения объекта.'
              },
              {
                num: '02',
                title: 'Сроки и периоды нарушения',
                desc: 'Дата передачи по договору, фактическая дата уведомления о готовности, нормативные периоды мораториев и применимые редакции ст. 6 № 214-ФЗ.'
              },
              {
                num: '03',
                title: 'Дополнительные соглашения',
                desc: 'Наличие подписанных допсоглашений о переносе сроков, действительность подписей и сохранение права на ранее начисленные штрафы.'
              },
              {
                num: '04',
                title: 'Фиксация дефектов при приёмке',
                desc: 'Составление дефектной ведомости, привлечение аттестованного специалиста по постановлению № 2380 и соблюдение досудебного срока устранения.'
              },
              {
                num: '05',
                title: 'Доказательства убытков',
                desc: 'Договоры найма жилья, квитанции об оплате аренды, переплата по процентам кредита и причинно-следственная связь с нарушением застройщика.'
              },
              {
                num: '06',
                title: 'Платёжеспособность и эскроу',
                desc: 'Проверка финансовых показателей застройщика, наличие денежных средств на счетах, статус счёта эскроу в уполномоченном банке.'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '32px 24px 24px 24px',
                  border: '1px solid rgba(23, 50, 77, 0.08)',
                  borderTop: '4px solid var(--color-gold)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '24px',
                  background: 'linear-gradient(135deg, var(--color-gold) 0%, #D4AF37 100%)',
                  color: '#FFFFFF',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  padding: '3px 12px',
                  borderRadius: '20px',
                  letterSpacing: '0.05em',
                  boxShadow: '0 2px 6px rgba(193, 160, 102, 0.4)'
                }}>
                  {item.num}
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-primary)', marginTop: '6px', marginBottom: '12px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.93rem', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. КЕЙСЫ ═══ */}
      <CasesBlock
        title="Примеры споров с застройщиком"
        showDemoWarning={false}
        resultLabel="Результат"
        cases={cases}
      />

      {/* ═══ 5. ПРОЦЕСС РАБОТЫ ═══ */}
      <ProcessBlock
        title="Как проходит работа"
        subtitle="Пять шагов для взыскания компенсации или выхода из договора с застройщиком."
        steps={processSteps}
      />

      {/* ═══ 6. ЧТО ВАЖНО СДЕЛАТЬ ДО СПОРА ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
            border: '1px solid rgba(23, 50, 77, 0.08)',
            borderRadius: '20px',
            padding: '48px 40px',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.03)'
          }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <span className="badge badge-gold" style={{ marginBottom: '16px' }}>ВАЖНО ЗНАТЬ</span>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '16px' }}>
                Не теряйте доказательства до оценки документов
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '28px' }}>
                Ошибочные действия при приёмке или подписании документов могут существенно усложнить или сделать невозможным взыскание компенсации.
              </p>

              <div className="grid grid-2" style={{ gap: '16px' }}>
                {[
                  'Не подписывайте допсоглашение о переносе срока без юридического анализа формулировок',
                  'Не подписывайте акт приёма-передачи без фиксации известных существенных дефектов',
                  'До отделки и ремонта зафиксируйте все недостатки фото-, видеосъёмкой и актом',
                  'Не используйте шаблонные претензии из интернета без проверки мораториев и актуальных законов',
                  'Сохраняйте почтовые квитанции, описи вложений и переписку с застройщиком',
                  'Не соглашайтесь на мировые соглашения с заниженными суммами без оценки реальных перспектив'
                ].map((rule, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: 'rgba(193, 160, 102, 0.15)',
                      color: 'var(--color-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      flexShrink: 0,
                      marginTop: '2px'
                    }}>
                      ✓
                    </div>
                    <span style={{ fontSize: '0.95rem', color: 'var(--color-text-main)', lineHeight: 1.5 }}>
                      {rule}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 7. СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость услуг по спорам с застройщиком"
        subtitle="Фиксированная стоимость каждого этапа согласуется до начала работы. Возможно ведение дела под ключ с получением исполнительного документа."
        tiers={pricingTiers}
      />

      {/* ═══ 8. ЧАСТЫЕ ВОПРОСЫ (FAQ) ═══ */}
      <FAQBlock
        faqs={faqs}
        title={<>Ответы на частые вопросы <br />по спорам с застройщиками</>}
        subtitle="Разъяснения по правилам начисления неустоек, правам дольщиков при дефектах и судебной практике."
        ctaText="Задать свой вопрос"
        ctaLink="#form"
      />

      {/* ═══ 9. ФИНАЛЬНАЯ ФОРМА ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start' }}>
              <span className="badge badge-gold" style={{ marginBottom: '16px', alignSelf: 'flex-start' }}>
                КОНСУЛЬТАЦИЯ
              </span>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
                Оцените перспективы спора с застройщиком
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '32px' }}>
                Сообщите дату ДДУ, срок передачи по договору, подписан ли акт приёма-передачи и какие нарушения допущены. Мы проверим документы и сообщим реальные перспективы дела.
              </p>

              <div style={{
                background: 'var(--color-bg-light)',
                borderRadius: '16px',
                padding: '24px 28px',
                border: '1px solid rgba(23, 50, 77, 0.08)',
                marginTop: 'auto'
              }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '8px' }}>
                  Офис в Липецке
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.6 }}>
                  г. Липецк, ул. Советская, д. 35, офис 213.<br />
                  Телефон: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>+7 (4742) 20-15-25</a><br />
                  Пн–Пт с 9:00 до 18:00. Принимаем документы на анализ дистанционно.
                </p>
              </div>
            </div>

            <div>
              <ContactsForm title="Написать нам" subtitle="" buttonText="Оставить заявку" commentPlaceholder="Кратко опишите ситуацию по недвижимости…" hiddenFields={[{ name: 'service', value: 'Споры с застройщиком' }]} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
