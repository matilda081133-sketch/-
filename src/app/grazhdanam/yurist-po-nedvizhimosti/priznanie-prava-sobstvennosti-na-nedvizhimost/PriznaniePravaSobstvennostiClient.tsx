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

export default function PriznaniePravaSobstvennostiClient() {
  const faqs = [
    {
      q: 'Что делать, если документы на недвижимость утеряны или сгорели?',
      a: 'Если правоустанавливающие документы утрачены, а в архивах или БТИ сохранились лишь косвенные сведения (ордера, справки сельсоветов, выписки из похозяйственных книг, квитанции об оплате коммунальных услуг), оформить право во внесудебном порядке Росреестр не сможет. В этом случае подаётся иск в суд о признании права собственности на основании фактического владения.'
    },
    {
      q: 'Как работает приобретательная давность по ст. 234 ГК РФ?',
      a: 'Гражданин, не являющийся собственником имущества, но добросовестно, открыто и непрерывно владеющий им как своим собственным недвижимым имуществом в течение 15 лет (плюс 3 года срока исковой давности по истребованию), приобретает право собственности на это имущество по решению суда.'
    },
    {
      q: 'Можно ли признать право на квартиру в новостройке, если застройщик обанкротился?',
      a: 'Да. Если дом фактически введён в эксплуатацию или передан дольщикам, но застройщик ликвидирован или находится в процедуре конкурсного производства, право собственности признаётся через суд (в суде общей юрисдикции или в рамках дела о банкротстве в арбитражном суде).'
    },
    {
      q: 'Как оформить право на гараж или бокс в кооперативе (ГСК)?',
      a: 'При полной выплате паевого взноса член ГСК приобретает право собственности по закону (п. 4 ст. 218 ГК РФ). Если председатель не выдаёт справку, кооператив ликвидирован или утеряна архивная документация, право признаётся через суд на основании членской книжки и квитанций об оплате пая.'
    },
    {
      q: 'Является ли вступившее в силу решение суда основанием для записи в ЕГРН?',
      a: 'Да. Решение суда о признании права собственности является обязательным для исполнения органом регистрации прав (Росреестром) в силу ст. 58 Федерального закона № 218-ФЗ. На основании судебного акта Росреестр вносит запись о праве собственности в ЕГРН.'
    },
    {
      q: 'Какой размер госпошлины при подаче иска о признании права собственности?',
      a: 'Иск о признании права собственности является иском имущественного характера, подлежащим оценке. Государственная пошлина рассчитывается от цены иска (действительной инвентаризационной, кадастровой или рыночной стоимости объекта) по ст. 333.19 Налогового кодекса РФ.'
    }
  ];

  const cases = [
    {
      category: 'ПРИОБРЕТАТЕЛЬНАЯ ДАВНОСТЬ',
      title: 'Признание права собственности на жилой дом по ст. 234 ГК РФ',
      problem: 'Семья более 22 лет проживала в частном доме в пригороде Липецка. Дом был куплен по расписке у прежнего владельца в 1990-х годах, официальный договор купли-продажи не оформлялся, продавец скончался.',
      action: 'Собрали доказательства открытого владения: квитанции об оплате электроэнергии и газа за 20 лет, лицевые счета, показания соседей, провели техническую инвентаризацию и подали иск по приобретательной давности.',
      result: 'Суд признал за доверителем право собственности на жилой дом. Запись о праве внесена в ЕГРН, семья оформила землю под домом в собственность.',
      isDemo: false
    },
    {
      category: 'БАНКРОТСТВО ЗАСТРОЙЩИКА',
      title: 'Признание права собственности на квартиру при ликвидации застройщика',
      problem: 'Дольщик полностью оплатил квартиру по инвестиционному договору, дом был сдан, но застройщик был ликвидирован налоговой до передачи документов в Росреестр. Дольщик не мог зарегистрировать право.',
      action: 'Запросили архивную документацию застройщика, технический паспорт дома из БТИ, подтверждение 100% оплаты инвестиционного взноса и подали иск о признании права собственности.',
      result: 'Суд признал право собственности на квартиру за гражданином. Доверитель получил официальную выписку из ЕГРН без обременений.',
      isDemo: false
    },
    {
      category: 'ГАРАЖНЫЙ КООПЕРАТИВ',
      title: 'Оформление прав на гаражный бокс в ликвидированном ГСК',
      problem: 'Владелец гаража полностью выплатил паевой взнос в 1998 году, однако ГСК прекратил деятельность, председатель пропал, а Росреестр отказал в регистрации из-за отсутствия акта ввода кооператива.',
      action: 'Подняли архивные решения исполкома о выделении земли под гаражный массив, подтвердили членство и выплату пая по архивным банковским квитанциям, подали иск в районный суд.',
      result: 'Иск удовлетворён полностью: суд признал право собственности на капитальный гаражный бокс, после чего доверитель приватизировал землю под гаражом по гаражной амнистии.',
      isDemo: false
    }
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Анализ оснований',
      desc: 'Изучаем историю владения объектом, архивные справки, квитанции, выписки БТИ и отказ Росреестра.'
    },
    {
      num: '02',
      title: 'Сбор доказательств',
      desc: 'Направляем запросы в архивы, заказываем выписки из похозяйственных книг, опрашиваем свидетелей владения.'
    },
    {
      num: '03',
      title: 'Технический план',
      desc: 'Кадастровый инженер проводит замеры объекта и изготавливает актуальный технический план.'
    },
    {
      num: '04',
      title: 'Судебный процесс',
      desc: 'Составляем иск, рассчитываем госпошлину, обосновываем позицию и участвуем во всех судебных заседаниях.'
    },
    {
      num: '05',
      title: 'Регистрация в ЕГРН',
      desc: 'Получаем решение суда с отметкой о вступлении в силу и сопровождаем внесение записи в Росреестр.'
    }
  ];

  const pricingTiers = [
    {
      title: <>Правовой анализ ситуации</>,
      subtitle: 'Оценка перспективы',
      popular: false,
      price: 'от ХХХ ₽',
      features: [
        { name: 'Анализ архивных и первичных документов', value: '✓' },
        { name: 'Определение надлежащего ответчика и суда', value: '✓' },
        { name: 'Расчёт госпошлины и дорожная карта', value: '✓' }
      ],
      buttonText: 'Оценить шансы',
      buttonHref: '#form'
    },
    {
      title: <>Подготовка иска в суд</>,
      subtitle: 'Процессуальный пакет',
      popular: false,
      price: 'от ХХХ ₽',
      features: [
        { name: 'Составление искового заявления', value: '✓' },
        { name: 'Формирование доказательной базы', value: '✓' },
        { name: 'Инструкция по подаче и ведению дела', value: '✓' }
      ],
      buttonText: 'Заказать иск',
      buttonHref: '#form'
    },
    {
      title: <>Признание права под ключ</>,
      subtitle: 'Ведение дела до выписки ЕГРН',
      popular: true,
      badgeText: 'ВОСТРЕБОВАНО',
      price: 'от ХХХ ₽',
      features: [
        { name: 'Запросы в архивы и кадастровый учёт', value: '✓' },
        { name: 'Полное судебное представительство', value: '✓' },
        { name: 'Получение вступившего в силу решения суда', value: '✓' },
        { name: 'Внесение записи о праве в Росреестр', value: '✓' }
      ],
      buttonText: 'Оформить под ключ',
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
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/priznanie-prava-sobstvennosti-na-nedvizhimost/#service',
        name: 'Признание права собственности на недвижимость в Липецке',
        serviceType: 'Признание права собственности через суд',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        url: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/priznanie-prava-sobstvennosti-na-nedvizhimost/',
        description: 'Помощь в признании и регистрации права собственности на недвижимость в Липецке: проверим основание, подготовим документы, суд и внесение записи в ЕГРН.'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/priznanie-prava-sobstvennosti-na-nedvizhimost/#breadcrumbs',
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
            name: 'Признание права собственности',
            item: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/priznanie-prava-sobstvennosti-na-nedvizhimost/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/priznanie-prava-sobstvennosti-na-nedvizhimost/#faq',
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
            <span style={{ color: 'var(--color-text-main)' }}>Признание права собственности</span>
          </>
        }
        superTitle="От правового основания до записи в ЕГРН"
        title={<>Признание права собственности <br />на недвижимость в Липецке</>}
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '560px', textWrap: 'balance' }}>
            Поможем оформить право собственности через суд при утере документов, ликвидации застройщика, отказе Росреестра или по приобретательной давности.
          </span>
        }
        primaryCtaText="Оценить перспективу дела"
        primaryCtaLink="#form"
        primaryCtaAnalytics="prop_rights_hero_click"
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
                      <span style={{ fontSize: '4px', fontWeight: 'bold', color: 'rgba(23,50,77,0.4)', fontFamily: 'var(--font-serif)' }}>РЕШЕНИЕ СУДА</span>
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

      {/* ═══ 2. ПРИЧИНЫ ОБРАЩЕНИЯ В СУД ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
            <span className="badge badge-gold" style={{ marginBottom: '16px' }}>ТИПИЧНЫЕ СИТУАЦИИ</span>
            <h2 className="section-title">Когда право признаётся через суд</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Суд является единственным законным способом узаконить владение недвижимостью, если стандартный административный порядок не работает.
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '24px' }}>
            {[
              {
                tag: 'УТЕРЯ ДОКУМЕНТОВ',
                title: 'Нет правоустанавливающих бумаг',
                desc: 'Договоры, ордера или свидетельства старого образца утеряны, а архивы не содержат полных сведений для Росреестра.'
              },
              {
                tag: 'СТ. 234 ГК РФ',
                title: 'Приобретательная давность',
                desc: 'Открытое, добросовестное и непрерывное владение домом, квартирой или дачей более 15 лет как своей собственной.'
              },
              {
                tag: 'ЛИКВИДАЦИЯ ПРОДАВЦА',
                title: 'Ликвидация застройщика или ГСК',
                desc: 'Компания-застройщик или кооператив прекратили деятельность, не успев передать документы на кадастровый учёт.'
              },
              {
                tag: 'ОТКАЗ РОСРЕЕСТРА',
                title: 'Приостановка и отказ в ЕГРН',
                desc: 'Регистратор вынес решение об отказе из-за технических ошибок в документах или невозможности подтвердить правопредшественника.'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="situation-card"
                style={{
                  background: '#FFFFFF',
                  padding: '28px 24px',
                  borderRadius: '16px',
                  border: '1px solid rgba(23, 50, 77, 0.08)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}
              >
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--color-gold)',
                  background: 'rgba(193, 160, 102, 0.1)',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  display: 'inline-block',
                  marginBottom: '16px',
                  alignSelf: 'flex-start'
                }}>
                  {item.tag}
                </span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '12px', lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. ЧТО ВХОДИТ В УСЛУГУ (HelpScope с золотыми бейджами) ═══ */}
      <section className="section" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
            <span className="badge badge-gold" style={{ marginBottom: '16px' }}>ПЛАН ЗАЩИТЫ</span>
            <h2 className="section-title">Что сделает юрист «Де-Юре» по признанию права</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Мы выстраиваем юридическую стратегию и собираем неопровержимый пакет доказательств для суда.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {[
              {
                num: '01',
                title: 'Восстановление архивов',
                desc: 'Формируем адвокатские запросы в архивы Липецкой области, БТИ, администрации поселений и налоговую службу.'
              },
              {
                num: '02',
                title: 'Кадастровые замеры',
                desc: 'Привлекаем кадастрового инженера для точного определения координат, площади и изготовления техплана объекта.'
              },
              {
                num: '03',
                title: 'Свидетельская база',
                desc: 'Организуем подготовку свидетелей, подтверждающих факт непрерывного и открытого владения недвижимым имуществом.'
              },
              {
                num: '04',
                title: 'Составление иска',
                desc: 'Определяем надлежащего ответчика (муниципалитет, ТУ Росимущества), формулируем требования и рассчитываем пошлину.'
              },
              {
                num: '05',
                title: 'Представительство в суде',
                desc: 'Участвуем во всех судебных заседаниях, приобщаем архивные материалы, отстаиваем законность основания владения.'
              },
              {
                num: '06',
                title: 'Государственная регистрация',
                desc: 'После вступления судебного решения в законную силу подаём документы в Росреестр и передаём клиенту выписку ЕГРН.'
              }
            ].map((step, idx) => (
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
                  {step.num}
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-primary)', marginTop: '6px', marginBottom: '12px' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.93rem', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. КЕЙСЫ ═══ */}
      <CasesBlock
        title="Примеры судебного признания прав"
        showDemoWarning={false}
        resultLabel="Результат"
        cases={cases}
      />

      {/* ═══ 5. ПРОЦЕСС РАБОТЫ ═══ */}
      <ProcessBlock
        title="Как проходит работа"
        subtitle="Пять шагов от первичного изучения документов до внесения записи в ЕГРН."
        steps={processSteps}
      />

      {/* ═══ 6. СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость услуг по признанию права собственности"
        subtitle="Стоимость юридического сопровождения фиксируется в договоре и не меняется в процессе ведения дела."
        tiers={pricingTiers}
      />

      {/* ═══ 7. ЧАСТЫЕ ВОПРОСЫ (FAQ) ═══ */}
      <FAQBlock
        faqs={faqs}
        title={<>Ответы на частые вопросы <br />по признанию права собственности</>}
        subtitle="Правовые разъяснения норм Гражданского кодекса РФ, правил расчёта госпошлины и оформления через суд."
        ctaText="Задать свой вопрос"
        ctaLink="#form"
      />

      {/* ═══ 8. ФИНАЛЬНАЯ ФОРМА ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start' }}>
              <span className="badge badge-gold" style={{ marginBottom: '16px', alignSelf: 'flex-start' }}>
                КОНСУЛЬТАЦИЯ
              </span>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
                Оформите право собственности через суд
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '32px' }}>
                Укажите объект (квартира, дом, гараж, участок), какие документы сохранились и причину, по которой Росреестр отказывает в регистрации. Мы проверим перспективы и поможем оформить право.
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
                  Пн–Пт с 9:00 до 18:00. Принимаем архивные документы на предварительный анализ.
                </p>
              </div>
            </div>

            <div>
              <ContactsForm title="Написать нам" subtitle="" buttonText="Оставить заявку" commentPlaceholder="Кратко опишите ситуацию по недвижимости…" hiddenFields={[{ name: 'service', value: 'Признание права собственности' }]} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
