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

export default function LegalizaciyaSamovolnojPostrojkiClient() {
  const faqs = [
    {
      q: 'Что считается самовольной постройкой по закону?',
      a: 'По ст. 222 ГК РФ самовольной постройкой является здание, сооружение или другое строение, возведённое на земельном участке, не предоставленном в установленном порядке, или разрешённое использование которого не допускает строительства, либо созданное без необходимых согласований/разрешений или с нарушением градостроительных норм и правил.'
    },
    {
      q: 'Можно ли узаконить самострой без обращения в суд?',
      a: 'Да, если объект подпадает под действие «дачной амнистии» (индивидуальные жилые и садовые дома на участках ИЖС, ЛПХ и садоводства), оформление возможно в упрощённом порядке через подготовку технического плана кадастровым инженером и прямую регистрацию в Росреестре. Если Росреестр выдал отказ или объект не подпадает под амнистию, требуется судебный порядок.'
    },
    {
      q: 'Какие условия обязательны для признания права на самострой через суд?',
      a: 'Суд признаёт право собственности при одновременном соблюдении четырёх условий: наличие у заявителя прав на землю, допускающих строительство; соответствие объекта градостроительным регламентам и ПЗЗ на дату обращения; сохранение постройки не нарушает права третьих лиц и не создаёт угрозу жизни и здоровью граждан.'
    },
    {
      q: 'Что делать, если администрация подала иск о сносе постройки?',
      a: 'Необходимо немедленно вступить в судебный процесс, заявить встречный иск о признании права собственности на постройку (по ст. 222 ГК РФ) и ходатайствовать о назначении комплексной судебной строительно-технической и пожарно-технической экспертизы.'
    },
    {
      q: 'Можно ли узаконить пристройку к частному дому или реконструкцию?',
      a: 'Да. Реконструкция (увеличение площади, пристройка комнат, возведение мансарды) узаконивается через внесение изменений в технические параметры дома либо через признание права собственности на жилой дом в реконструированном виде через суд.'
    },
    {
      q: 'Сколько времени занимает процесс легализации самостроя в Липецке?',
      a: 'Внесудебный порядок (подготовка техплана и регистрация) занимает от 2 до 4 недель. Судебный процесс с проведением судебной экспертизы и получением вступившего в силу решения суда длится в среднем от 3 до 6 месяцев.'
    }
  ];

  const cases = [
    {
      category: 'САМОВОЛЬНЫЙ ДОМ',
      title: 'Признание права собственности на жилой дом без разрешения на строительство',
      problem: 'Собственник возвёл капитальный двухэтажный жилой дом на участке ИЖС в Липецке без направления уведомления о строительстве. Администрация города отказала во вводе объекта в эксплуатацию и направила предупреждение о сносе.',
      action: 'Провели независимое строительное обследование на соответствие СП и СНиП, доказали безопасность конструкций, соблюдение санитарных отступов от границ соседей и подали встречный иск по ст. 222 ГК РФ.',
      result: 'Суд полностью удовлетворил встречный иск, признав за доверителем право собственности на жилой дом. На основании решения суда право зарегистрировано в ЕГРН.',
      isDemo: false
    },
    {
      category: 'РЕКОНСТРУКЦИЯ И ПРИСТРОЙКА',
      title: 'Узаконивание двухэтажной кирпичной пристройки к дому в долевой собственности',
      problem: 'Один из сособственников возвёл капитальную пристройку к общему дому без согласия второго дольщика и без проекта. Второй сособственник обратился в суд с требованием снести пристройку.',
      action: 'Провели строительную экспертизу несущей способности фундамента, подтвердили отсутствие негативного воздействия на исходное здание, заключили мировое соглашение с перераспределением долей в доме.',
      result: 'Суд утвердил мировое соглашение, пристройка сохранена, право собственности доверителя оформлено с учётом увеличенной фактической площади.',
      isDemo: false
    },
    {
      category: 'ОТБИТЫЙ СНОС',
      title: 'Защита от сноса коммерческой пристройки к капитальному зданию',
      problem: 'Муниципальный орган инициировал иск о сносе самовольной входной группы и пристройки, ссылаясь на нарушение отступов от красных линий дорожной сети.',
      action: 'Подняли исторические градостроительные планы, доказали, что строительство велось до изменения красных линий генерального плана, представили заключение пожарной безопасности.',
      result: 'В иске администрации о сносе отказано в полном объёме, постройка сохранена и зарегистрирована в установленном законом порядке.',
      isDemo: false
    }
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Правовой аудит объекта',
      desc: 'Изучаем документы на земельный участок, категорию, ВРИ, параметры объекта и градостроительный план (ГПЗУ).'
    },
    {
      num: '02',
      title: 'Выбор порядка оформления',
      desc: 'Определяем возможность упрощённого внесудебного оформления (амнистия) или необходимость судебного порядка.'
    },
    {
      num: '03',
      title: 'Техническое обследование',
      desc: 'Организуем инструментальное обследование экспертом: проверка капитальности, строительных и противопожарных норм.'
    },
    {
      num: '04',
      title: 'Судебный процесс',
      desc: 'Подаём иск о признании права собственности по ст. 222 ГК РФ, защищаем объект от сноса в суде.'
    },
    {
      num: '05',
      title: 'Запись в ЕГРН',
      desc: 'Кадастровый инженер изготавливает технический план на основании судебного акта, вносим объект в Росреестр.'
    }
  ];

  const pricingTiers = [
    {
      title: <>Правовой анализ объекта</>,
      subtitle: 'Оценка рисков',
      popular: false,
      price: 'от ХХХ ₽',
      features: [
        { name: 'Анализ прав на землю и ограничений ПЗЗ', value: '✓' },
        { name: 'Оценка риска иска о сносе объекта', value: '✓' },
        { name: 'Выбор оптимального порядка узаконивания', value: '✓' }
      ],
      buttonText: 'Оценить объект',
      buttonHref: '#form'
    },
    {
      title: <>Внесудебная легализация</>,
      subtitle: 'Упрощённый порядок',
      popular: false,
      price: 'от ХХХ ₽',
      features: [
        { name: 'Взаимодействие с кадастровым инженером', value: '✓' },
        { name: 'Подготовка уведомлений и техплана', value: '✓' },
        { name: 'Регистрация права собственности в ЕГРН', value: '✓' }
      ],
      buttonText: 'Узаконить без суда',
      buttonHref: '#form'
    },
    {
      title: <>Признание права через суд</>,
      subtitle: 'Под ключ по ст. 222 ГК РФ',
      popular: true,
      badgeText: 'ВОСТРЕБОВАНО',
      price: 'от ХХХ ₽',
      features: [
        { name: 'Строительно-техническая экспертиза', value: '✓' },
        { name: 'Составление иска и защита от сноса', value: '✓' },
        { name: 'Ведение всех заседаний до решения суда', value: '✓' },
        { name: 'Кадастровый учёт и регистрация права', value: '✓' }
      ],
      buttonText: 'Признать право в суде',
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
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/legalizaciya-samovolnoj-postrojki/#service',
        name: 'Легализация самовольной постройки в Липецке',
        serviceType: 'Узаконивание самовольных построек и домов',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        url: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/legalizaciya-samovolnoj-postrojki/',
        description: 'Легализация дома, пристройки и реконструкции в Липецке: проверим участок и параметры, выберем порядок, подготовим документы, суд и регистрацию.'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/legalizaciya-samovolnoj-postrojki/#breadcrumbs',
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
            name: 'Легализация самовольной постройки',
            item: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/legalizaciya-samovolnoj-postrojki/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/legalizaciya-samovolnoj-postrojki/#faq',
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
            <span style={{ color: 'var(--color-text-main)' }}>Легализация постройки</span>
          </>
        }
        superTitle="Сохранение объекта и оформление права"
        title={<>Легализация самовольной <br />постройки в Липецке</>}
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '560px', textWrap: 'balance' }}>
            Поможем узаконить дом, пристройку или реконструкцию: проверим землю и ПЗЗ, защитим от сноса, организуем экспертизу безопасности и признаем право через суд.
          </span>
        }
        primaryCtaText="Оценить возможность узаконивания"
        primaryCtaLink="#form"
        primaryCtaAnalytics="unauthorized_build_hero_click"
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
                      <span style={{ fontSize: '4px', fontWeight: 'bold', color: 'rgba(23,50,77,0.4)', fontFamily: 'var(--font-serif)' }}>СТ. 222 ГК РФ</span>
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

      {/* ═══ 2. ЧЕТЫРЕ ВОЗМОЖНЫХ МАРШРУТА ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
            <span className="badge badge-gold" style={{ marginBottom: '16px' }}>ВАРИАНТЫ ОФОРМЛЕНИЯ</span>
            <h2 className="section-title">Четыре пути узаконивания постройки</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Мы выбираем наименее затратный способ: от упрощённой регистрации по дачной амнистии до защиты от иска администрации в суде.
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '24px' }}>
            {[
              {
                tag: 'ДАЧНАЯ АМНИСТИЯ',
                title: 'Упрощённая регистрация',
                desc: 'Оформление жилых и садовых домов на участках ИЖС, ЛПХ и СНТ по техплану без обращения в суд и без штрафов.'
              },
              {
                tag: 'УВЕДОМИТЕЛЬНЫЙ ПОРЯДОК',
                title: 'Уведомление в администрацию',
                desc: 'Подача уведомления о планируемом строительстве или реконструкции при наличии возможности соблюдения регламентов.'
              },
              {
                tag: 'СУДЕБНЫЙ ИСК',
                title: 'Иск по ст. 222 ГК РФ',
                desc: 'Судебное признание права собственности на самовольный объект при отказе администрации или нарушении параметров.'
              },
              {
                tag: 'ЗАЩИТА ОТ СНОСА',
                title: 'Встречный иск о сносе',
                desc: 'Защита строения при подаче иска муниципальным органом: строительная экспертиза безопасности и сохранение объекта.'
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
            <span className="badge badge-gold" style={{ marginBottom: '16px' }}>ПЛАН ДЕЙСТВИЙ</span>
            <h2 className="section-title">Что сделает юрист «Де-Юре» по самовольной постройке</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Обеспечиваем полную правовую и техническую защиту: от проверки земли до внесения записи о собственности в ЕГРН.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {[
              {
                num: '01',
                title: 'Аудит прав на землю',
                desc: 'Проверяем категорию земель, ВРИ, границы межевания, охранные зоны инженерных сетей (ЗОУИТ) и правила застройки.'
              },
              {
                num: '02',
                title: 'Техническая экспертиза',
                desc: 'Привлекаем экспертов для заключения о несущей способности конструкций, пожарной безопасности и соответствии СНиП.'
              },
              {
                num: '03',
                title: 'Согласование с соседями',
                desc: 'Анализируем соблюдение нормативных отступов от границ соседних участков и исключаем риски претензий смежников.'
              },
              {
                num: '04',
                title: 'Административный этап',
                desc: 'Формируем комплект документов и подаём обращение в уполномоченные органы архитектуры и градостроительства.'
              },
              {
                num: '05',
                title: 'Судебное признание права',
                desc: 'Готовим иск о признании права собственности по ст. 222 ГК РФ, защищаем доказательства в суде Липецка.'
              },
              {
                num: '06',
                title: 'Кадастровый учёт и ЕГРН',
                desc: 'Контролируем изготовление технического плана кадастровым инженером и внесение сведений в Росреестр.'
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
        title="Примеры легализации самостроя"
        showDemoWarning={false}
        resultLabel="Результат"
        cases={cases}
      />

      {/* ═══ 5. ПРОЦЕСС РАБОТЫ ═══ */}
      <ProcessBlock
        title="Как проходит узаконивание"
        subtitle="Пять этапов оформления права собственности на самовольно возведённый объект."
        steps={processSteps}
      />

      {/* ═══ 6. СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость услуг по легализации самостроя"
        subtitle="Фиксированная стоимость юридического сопровождения согласуется до начала работы и фиксируется в договоре."
        tiers={pricingTiers}
      />

      {/* ═══ 7. ЧАСТЫЕ ВОПРОСЫ (FAQ) ═══ */}
      <FAQBlock
        faqs={faqs}
        title={<>Ответы на частые вопросы <br />по самовольным постройкам</>}
        subtitle="Разъяснения положений ст. 222 ГК РФ, требований дачной амнистии и правил судебной строительной экспертизы."
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
                Узаконьте постройку и защитите объект
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '32px' }}>
                Опишите объект, оформлен ли земельный участок в собственность или аренду, есть ли предписания или претензии администрации. Мы оценим шансы и предложим оптимальный путь.
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
                  Пн–Пт с 9:00 до 18:00. Возможен выезд юриста на объект.
                </p>
              </div>
            </div>

            <div>
              <ContactsForm title="Написать нам" subtitle="" buttonText="Оставить заявку" commentPlaceholder="Кратко опишите ситуацию по недвижимости…" hiddenFields={[{ name: 'service', value: 'Легализация самовольной постройки' }]} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
