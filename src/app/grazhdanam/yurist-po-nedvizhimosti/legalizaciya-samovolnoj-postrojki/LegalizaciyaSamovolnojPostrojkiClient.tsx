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
      title: 'Градостроительный аудит',
      desc: 'Изучаем права на земельный участок, ПЗЗ, отступы от границ, охранные зоны и красные линии.'
    },
    {
      num: '02',
      title: 'Техническое обследование',
      desc: 'Организуем инструментальное обследование постройки на соответствие строительным и пожарным нормам.'
    },
    {
      num: '03',
      title: 'Внесудебная попытка',
      desc: 'Подаём уведомление или заявление в Росреестр / администрацию для фиксации официального отказа.'
    },
    {
      num: '04',
      title: 'Иск по ст. 222 ГК РФ',
      desc: 'Готовим иск о признании права собственности, формулируем вопросы для судебной экспертизы.'
    },
    {
      num: '05',
      title: 'Регистрация в ЕГРН',
      desc: 'Получаем вступившее в силу решение суда и регистрируем право собственности в Росреестре.'
    }
  ];

  const pricingTiers = [
    {
      title: <>Градостроительный аудит</>,
      subtitle: 'Оценка шансов узаконивания',
      popular: false,
      price: 'от 15 000 ₽',
      features: [
        { name: 'Анализ документов на землю и постройку', value: '✓' },
        { name: 'Проверка ПЗЗ, ВРИ и охранных зон (ЗОУИТ)', value: '✓' },
        { name: 'Выявление нарушений отступов от границ', value: '✓' },
        { name: 'Письменная дорожная карта оформления', value: '✓' }
      ],
      buttonText: 'Заказать аудит',
      buttonHref: '#form'
    },
    {
      title: <>Судебное узаконивание (ст. 222 ГК)</>,
      subtitle: 'Признание права собственности под ключ',
      popular: true,
      badgeText: 'ВОСТРЕБОВАНО',
      price: 'от 45 000 ₽',
      features: [
        { name: 'Подготовка искового заявления по ст. 222 ГК РФ', value: '✓' },
        { name: 'Организация судебной строительной экспертизы', value: '✓' },
        { name: 'Защита от претензий администрации и соседей', value: '✓' },
        { name: 'Участие во всех судебных заседаниях', value: '✓' },
        { name: 'Внесение сведений об объекте в ЕГРН', value: '✓' }
      ],
      buttonText: 'Узаконить постройку',
      buttonHref: '#form'
    },
    {
      title: <>Защита от иска о сносе</>,
      subtitle: 'Отражение претензий администрации',
      popular: false,
      price: 'от 40 000 ₽',
      features: [
        { name: 'Правовая оценка иска о сносе постройки', value: '✓' },
        { name: 'Встречный иск о сохранении объекта', value: '✓' },
        { name: 'Доказывание отсутствия угрозы жизни и здоровью', value: '✓' },
        { name: 'Снятие обеспечительных мер (арестов)', value: '✓' },
        { name: 'Сохранение строения в собственности', value: '✓' }
      ],
      buttonText: 'Защитить от сноса',
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
        serviceType: 'Узаконивание самовольных построек',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        url: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/legalizaciya-samovolnoj-postrojki/',
        description: 'Легализация самовольных построек, домов, пристроек и реконструкций в Липецке: признание права по ст. 222 ГК РФ, защита от сноса и регистрация в ЕГРН.'
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
            <span style={{ color: 'var(--color-text-main)' }}>Легализация самовольной постройки</span>
          </>
        }
        superTitle="Самострой • ст. 222 ГК РФ • защита от сноса • Липецк"
        title={<>Легализация самовольной <br />постройки в Липецке</>}
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '560px', textWrap: 'balance' }}>
            Узаконим дом, пристройку, гараж или реконструкцию через суд по ст. 222 ГК РФ либо в административном порядке. Защитим объект от иска администрации о сносе.
          </span>
        }
        primaryCtaText="Узаконить постройку"
        primaryCtaLink="#form"
        primaryCtaAnalytics="unauthorized_build_hero_click"
        primaryCtaSubtext="Перезвоним в течение 15 минут в рабочее время"
        secondaryCtaText="Виды самостроя"
        secondaryCtaLink="#objects"
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
                    <div style={{ position: 'absolute', top: '25px', left: '25px', width: '75px', height: '25px', border: '1.5px solid rgba(23, 50, 77, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-5deg)' }}>
                      <span style={{ fontSize: '4.5px', fontWeight: 'bold', color: 'rgba(23,50,77,0.4)', fontFamily: 'var(--font-serif)' }}>СТ. 222 ГК РФ</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '35px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end' }}>
                        <div style={{ width: '95px', height: '3px', background: 'rgba(23,50,77,0.2)' }}></div>
                        <div style={{ width: '55px', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>
                    </div>
                    <div style={{ width: '130px', height: '6px', background: 'var(--color-primary)', margin: '0 auto 30px auto' }}></div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <div style={{ width: '100%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      <div style={{ width: '95%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="doc-wrapper-float-2">
                <div className="doc-sheet doc-sheet-2">
                  <div style={{ padding: '28px 22px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ position: 'absolute', top: '22px', left: '22px', width: '110px', height: '30px', border: '1px solid #C1A066', color: '#C1A066', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-4deg)', opacity: 0.95 }}>
                      <div style={{ fontFamily: 'var(--font-serif)', fontSize: '5px', textAlign: 'center', fontWeight: 'bold', lineHeight: 1.2 }}>
                        ТЕХНИЧЕСКИЙ ПЛАН<br/>
                        ЖИЛОГО ДОМА
                      </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '24px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end' }}>
                        <div style={{ width: '90px', height: '3px', background: 'rgba(23,50,77,0.2)' }}></div>
                        <div style={{ width: '50px', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>
                    </div>

                    <div style={{ width: '140px', height: '6px', background: 'var(--color-primary)', margin: '0 auto 16px auto' }}></div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                      <div style={{ width: '40%', height: '3px', background: 'rgba(23,50,77,0.2)' }}></div>
                      <div style={{ width: '100%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      <div style={{ width: '90%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                    </div>

                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '8px', borderTop: '1px dashed rgba(23,50,77,0.15)' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                        <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Собственник земли:</div>
                        <div style={{ width: '70px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '8px' }}></div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                        <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Кадастровый инженер:</div>
                        <div style={{ width: '70px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '8px' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="doc-wrapper-float-1">
                <div className="doc-sheet doc-sheet-1">
                  <div style={{ padding: '26px 22px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(23,50,77,0.2)', paddingBottom: '10px', marginBottom: '14px' }}>
                      <img src="/images/logo_dark.png" alt="Де-Юре" style={{ width: '55px', height: 'auto', opacity: 0.9 }} />
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', alignItems: 'flex-end' }}>
                        <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', letterSpacing: '0.05em' }}>ПРИЗНАНИЕ ПРАВА</span>
                        <span style={{ fontSize: '5px', color: 'var(--color-primary)' }}>Решение суда по ст. 222</span>
                      </div>
                    </div>

                    <div className="doc-map-box" style={{ 
                      width: '100%', 
                      height: '110px', 
                      background: 'rgba(247, 244, 237, 0.6)', 
                      border: '1px solid rgba(193, 160, 102, 0.3)', 
                      borderRadius: '2px', 
                      marginBottom: '12px',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '4px'
                    }}>
                      <svg width="100%" height="100%" viewBox="0 0 200 100" fill="none">
                        <line x1="0" y1="50" x2="200" y2="50" stroke="rgba(23,50,77,0.06)" strokeDasharray="2 2" />
                        <rect x="25" y="15" width="150" height="70" fill="rgba(193, 160, 102, 0.1)" stroke="#C1A066" strokeWidth="1.5" />
                        <polygon points="25,45 100,15 175,45" fill="rgba(193, 160, 102, 0.2)" stroke="#C1A066" strokeWidth="1.2" />
                        <rect x="65" y="55" width="30" height="30" fill="rgba(23, 50, 77, 0.1)" stroke="#10273B" strokeWidth="1" />
                        <rect x="110" y="55" width="25" height="30" fill="rgba(23, 50, 77, 0.1)" stroke="#10273B" strokeWidth="1" />
                        <text x="35" y="92" fill="#1B8738" fontSize="6.5" fontWeight="bold">✓ Безопасность подтверждена</text>
                      </svg>
                    </div>

                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '8px', borderTop: '1px solid rgba(23,50,77,0.15)' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)' }}>ЮК «ДЕ-ЮРЕ»</div>
                        <div style={{ fontSize: '9.5px', color: 'rgba(23,50,77,0.75)', fontFamily: 'var(--font-sans)' }}>Узаконивание построек • Липецк</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        trustItems={[
          { text: 'Оценка градостроительных регламентов и отступов по ПЗЗ.' },
          { text: 'Проведение комплексной строительно-технической экспертизы.' },
          { text: 'Признание права по ст. 222 ГК РФ и защита от исков о сносе.' }
        ]}
      />

      {/* ═══ 2. ВИДЫ САМОСТРОЯ ═══ */}
      <section className="section bg-white" id="objects" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              С какими объектами самостроя мы работаем
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Поможем узаконить вновь возведённые строения или узаконить проведённую реконструкцию существующих зданий.
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '24px', marginBottom: '40px' }}>
            {[
              {
                tag: 'ЖИЛОЙ ДОМ',
                title: 'Жилые и садовые дома',
                desc: 'Капитальные дома, возведённые без уведомления о строительстве, с нарушением отступов от межи или на землях без надлежащего ВРИ.'
              },
              {
                tag: 'РЕКОНСТРУКЦИЯ',
                title: 'Пристройки и мансарды',
                desc: 'Увеличение площади дома, пристройка дополнительных жилых помещений, гаражей, надстройка этажей без согласованного проекта.'
              },
              {
                tag: 'ГАРАЖИ И ХОЗПОСТРОЙКИ',
                title: 'Гаражи, бани, склады',
                desc: 'Капитальные вспомогательные строения на ленточных и плитных фундаментах, требующие официальной регистрации права.'
              },
              {
                tag: 'ЗАЩИТА ОТ СНОСА',
                title: 'Угроза сноса объекта',
                desc: 'Судебная защита собственников от исков администрации г. Липецка и органов строительного надзора об обязательном сносе.'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="hover-lift"
                style={{
                  padding: '28px 24px',
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  border: '1px solid var(--color-border)',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.06, pointerEvents: 'none' }}>
                  <svg width="90" height="90" viewBox="0 0 24 24" fill="var(--color-deep-blue)">
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <div style={{ 
                  fontSize: '11px', 
                  fontWeight: 600, 
                  color: 'var(--color-gold)', 
                  marginBottom: '12px',
                  background: 'rgba(193, 160, 102, 0.1)',
                  padding: '3px 8px',
                  alignSelf: 'flex-start',
                  borderRadius: '2px'
                }}>
                  {item.tag}
                </div>
                <h3 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--color-deep-blue)', lineHeight: 1.35, margin: '0 0 10px 0' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="card service-card cta-banner-card" style={{ 
            width: '100%', 
            padding: '32px 36px', 
            background: 'var(--color-deep-blue)', 
            borderRadius: '0',
            borderTop: '3px solid var(--color-gold)',
            boxShadow: '0 8px 16px rgba(16, 39, 59, 0.28)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '24px',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ flex: '1 1 300px' }}>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-white)', lineHeight: 1.3 }}>
                Получили предписание или судебный иск о сносе?
              </h3>
              <p style={{ margin: '0', fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5, maxWidth: '640px' }}>
                Подадим встречный иск, проведём строительную экспертизу и добьёмся сохранения постройки, если объект соответствует обязательным требованиям.
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <a 
                href="#form" 
                className="btn white-btn-custom" 
                style={{ display: 'inline-block', textAlign: 'center', fontSize: '15px' }}
              >
                Отразить иск о сносе
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. УСЛОВИЯ ЛЕГАЛИЗАЦИИ ═══ */}
      <section className="section" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Что проверим перед легализацией постройки
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Четыре обязательных критерия, которые проверяет суд при признании права собственности на самовольную постройку.
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '24px' }}>
            {[
              {
                title: 'Права на земельный участок',
                desc: 'Земля должна находиться в собственности, пожизненном наследуемом владении или долгосрочной аренде с правом строительства.'
              },
              {
                title: 'Вид использования земли',
                desc: 'Категория и разрешённое использование участка (ВРИ) должны допускать размещение возведённого объекта.'
              },
              {
                title: 'Безопасность объекта',
                desc: 'Постройка должна отвечать строительным, санитарным, экологическим и противопожарным нормам и не создавать угрозы.'
              },
              {
                title: 'Отсутствие споров с соседями',
                desc: 'Сохранение постройки не должно нарушать законные интересы смежных землепользователей и третьих лиц.'
              }
            ].map((step, idx) => (
              <div
                key={idx}
                className="hover-lift"
                style={{
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  padding: '32px 24px',
                  border: '1px solid var(--color-border)',
                  borderTop: '4px solid var(--color-gold)',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '24px',
                  background: 'var(--color-gold)',
                  color: '#FFFFFF',
                  fontSize: '12px',
                  fontWeight: 700,
                  padding: '2px 10px',
                  borderRadius: '2px',
                  letterSpacing: '0.05em'
                }}>
                  0{idx + 1}
                </div>
                <h3 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '8px 0 12px 0', lineHeight: 1.35 }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. КЕЙСЫ ═══ */}
      <CasesBlock
        title="Примеры узаконивания построек"
        showDemoWarning={false}
        resultLabel="Результат"
        cases={cases}
      />

      {/* ═══ КАК УЗАКОНИМ ОБЪЕКТ ═══ */}
      <section className="section bg-white" style={{ padding: '70px 0 10px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '32px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(26px, 3.8vw, 34px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Как узаконим объект
            </h2>
          </div>

          <div className="grid grid-4" style={{ gap: '20px' }}>
            {[
              {
                title: 'Административный порядок',
                desc: 'Оформление в административном порядке.'
              },
              {
                title: 'Согласование параметров',
                desc: 'Согласование реконструкции и новых параметров объекта.'
              },
              {
                title: 'Судебный порядок',
                desc: 'Признание права собственности через суд.'
              },
              {
                title: 'Защита от сноса',
                desc: 'Защита от требования администрации о сносе.'
              }
            ].map((method, idx) => (
              <div
                key={idx}
                className="card hover-lift"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  borderRadius: '0',
                  padding: '24px 20px',
                  boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)'
                }}
              >
                <div style={{ fontSize: '16px', fontWeight: 600, fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '8px' }}>
                  {method.title}
                </div>
                <div style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                  {method.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 5. ПРОЦЕСС ═══ */}
      <ProcessBlock
        title="Порядок узаконивания самостроя"
        subtitle="Пять этапов от градостроительного аудита до получения выписки из ЕГРН."
        steps={processSteps}
      />

      {/* ═══ 6. СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость услуг по легализации самостроя"
        subtitle="Прозрачная фиксация стоимости в договоре. Возможно ведение дела под ключ с внесением записи в ЕГРН."
        tiers={pricingTiers}
      />

      {/* ═══ 7. ЧАСТЫЕ ВОПРОСЫ (FAQ) ═══ */}
      <FAQBlock
        faqs={faqs}
        title={<>Частые вопросы <br />по легализации самовольных построек</>}
        subtitle="Разъяснения ст. 222 ГК РФ, правил дачной амнистии и судебной практики по сохранению самостроя."
        ctaText="Задать свой вопрос"
        ctaLink="#form"
      />

      {/* ═══ 8. СВЯЗАННЫЕ УСЛУГИ ═══ */}
      <section className="section bg-cream" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Связанные услуги
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Смежные направления помощи по недвижимости и земельным правам.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '20px' }}>
            <Link href="/grazhdanam/yurist-po-nedvizhimosti/priznanie-prava-sobstvennosti-na-nedvizhimost/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div 
                className="card related-service-card hover-lift" 
                style={{ 
                  height: '100%', 
                  padding: '32px', 
                  background: 'var(--color-white)', 
                  border: '1px solid var(--color-border)',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column'
                }}
              >
                <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                  Признание права
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Признание права собственности на квартиру, дом, долю в новостройке через суд.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '15px', fontWeight: 600 }}>
                  Подробнее →
                </div>
              </div>
            </Link>

            <Link href="/grazhdanam/zemelnyj-yurist/spory-o-granicah-zemelnogo-uchastka/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div 
                className="card related-service-card hover-lift" 
                style={{ 
                  height: '100%', 
                  padding: '32px', 
                  background: 'var(--color-white)', 
                  border: '1px solid var(--color-border)',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column'
                }}
              >
                <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                  Споры о границах земли
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Устранение наложений границ, реестровых ошибок и согласование межевания.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '15px', fontWeight: 600 }}>
                  Подробнее →
                </div>
              </div>
            </Link>

            <Link href="/grazhdanam/yurist-po-nedvizhimosti/soprovozhdenie-sdelok-s-nedvizhimostyu/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div 
                className="card related-service-card hover-lift" 
                style={{ 
                  height: '100%', 
                  padding: '32px', 
                  background: 'var(--color-white)', 
                  border: '1px solid var(--color-border)',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column'
                }}
              >
                <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                  Сопровождение сделок
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Безопасная покупка и продажа узаконенных домов и земельных участков.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '15px', fontWeight: 600 }}>
                  Подробнее →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 9. ФИНАЛЬНАЯ ФОРМА ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start', paddingTop: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>Связаться с нами</span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                Узаконьте постройку и защитите её от сноса
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко укажите тип объекта (дом, пристройка, баня), категорию земли и наличие претензий от администрации или соседей. Юрист оценит шансы признания права по ст. 222 ГК РФ.
              </p>
              <div style={{ marginTop: '32px' }}>
                <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <span>Перезвоним вам в течение 15 минут в рабочее время</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
              <div style={{ background: 'var(--gradient-cream)', padding: '40px', borderRadius: '0', boxShadow: '0 8px 24px rgba(0,0,0,0.15)', width: '100%', border: '1px solid rgba(0,0,0,0.06)' }}>
                <ContactsForm 
                  title="Написать нам" 
                  subtitle="" 
                  buttonText="Оценить перспективу" 
                  commentPlaceholder="Опишите постройку (дом, пристройка, отступы, претензии)…" 
                  subtext="Если вы оставите заявку вечером или в выходной день, мы перезвоним в ближайший рабочий день."
                  hiddenFields={[{ name: 'service', value: 'Легализация самовольной постройки' }]} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
