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
      title: 'Архивный поиск и аудит',
      desc: 'Запрашиваем архивные копии решений, ордеров, справок БТИ, выписок из похозяйственных книг.'
    },
    {
      num: '02',
      title: 'Техническая инвентаризация',
      desc: 'Организуем изготовление технического плана кадастровым инженером для постановки объекта на учёт.'
    },
    {
      num: '03',
      title: 'Отказ Росреестра',
      desc: 'Подаём заявление на регистрацию для получения официального мотивированного отказа органа регистрации.'
    },
    {
      num: '04',
      title: 'Иск в суд и доказывание',
      desc: 'Формируем правовую позицию по ст. 218, 234 ГК РФ, собираем свидетельские показания и квитанции.'
    },
    {
      num: '05',
      title: 'Регистрация права в ЕГРН',
      desc: 'Направляем вступившее в силу решение суда в Росреестр и получаем выписку с зарегистрированным правом.'
    }
  ];

  const pricingTiers = [
    {
      title: <>Анализ документов и архив</>,
      subtitle: 'Досудебный аудит и поиск',
      popular: false,
      price: 'от 10 000 ₽',
      features: [
        { name: 'Правовой анализ цепочки владения', value: '✓' },
        { name: 'Архивные запросы в БТИ и госархивы', value: '✓' },
        { name: 'Оценка оснований признания права', value: '✓' },
        { name: 'Формирование доказательственной базы', value: '✓' }
      ],
      buttonText: 'Заказать аудит',
      buttonHref: '#form'
    },
    {
      title: <>Признание права в суде</>,
      subtitle: 'Судебное оформление под ключ',
      popular: true,
      badgeText: 'ВОСТРЕБОВАНО',
      price: 'от 40 000 ₽',
      features: [
        { name: 'Подготовка искового заявления', value: '✓' },
        { name: 'Сбор доказательств открытого владения', value: '✓' },
        { name: 'Участие во всех судебных заседаниях', value: '✓' },
        { name: 'Получение вступившего в силу решения', value: '✓' },
        { name: 'Внесение сведений о праве в ЕГРН', value: '✓' }
      ],
      buttonText: 'Признать право в суде',
      buttonHref: '#form'
    },
    {
      title: <>Сложные объекты и банкротство</>,
      subtitle: 'Новостройки, ликвидация, споры',
      popular: false,
      price: 'от 45 000 ₽',
      features: [
        { name: 'Признание права при банкротстве застройщика', value: '✓' },
        { name: 'Оформление прав на ликвидированные ГСК/СНТ', value: '✓' },
        { name: 'Отражение встречных притязаний администрации', value: '✓' },
        { name: 'Сопровождение в арбитражном суде', value: '✓' },
        { name: 'Регистрация права в Росреестре', value: '✓' }
      ],
      buttonText: 'Оформить сложный объект',
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
        description: 'Признание права собственности на квартиру, дом, гараж, новостройку через суд в Липецке: приобретательная давность, утеря документов, регистрация в ЕГРН.'
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
        superTitle="Судебное признание права • ст. 218, 234 ГК РФ • Липецк"
        title={<>Признание <br />права собственности <br />на недвижимость <br />в Липецке</>}
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '560px', textWrap: 'balance' }}>
            Оформим право собственности через суд на квартиру, дом, новостройку или гараж при утере документов, отказе Росреестра, банкротстве продавца или по приобретательной давности.
          </span>
        }
        primaryCtaText="Признать право через суд"
        primaryCtaLink="#form"
        primaryCtaAnalytics="recognition_hero_click"
        primaryCtaSubtext="Перезвоним в течение 15 минут в рабочее время"
        secondaryCtaText="Основания иска"
        secondaryCtaLink="#situations"
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
                      <span style={{ fontSize: '4.5px', fontWeight: 'bold', color: 'rgba(23,50,77,0.4)', fontFamily: 'var(--font-serif)' }}>СТ. 218, 234 ГК</span>
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
                        РЕШЕНИЕ СУДА<br/>
                        О ПРИЗНАНИИ ПРАВА
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
                        <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Собственник:</div>
                        <div style={{ width: '70px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '8px' }}></div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                        <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Росреестр:</div>
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
                        <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', letterSpacing: '0.05em' }}>РЕГИСТРАЦИЯ В ЕГРН</span>
                        <span style={{ fontSize: '5px', color: 'var(--color-primary)' }}>На основании судебного акта</span>
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
                        <line x1="85" y1="15" x2="85" y2="85" stroke="#C1A066" strokeWidth="1" />
                        <text x="35" y="38" fill="#10273B" fontSize="6.5" fontWeight="bold">Квартира / Дом</text>
                        <text x="35" y="65" fill="#10273B" fontSize="6" fontWeight="bold">Владение &gt; 15 лет</text>
                        <text x="100" y="45" fill="#1B8738" fontSize="7" fontWeight="bold">ПРАВО ПРИЗНАНО</text>
                        <text x="102" y="65" fill="#10273B" fontSize="6" fontWeight="bold">Выписка ЕГРН получена</text>
                      </svg>
                    </div>

                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '8px', borderTop: '1px solid rgba(23,50,77,0.15)' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)' }}>ЮК «ДЕ-ЮРЕ»</div>
                        <div style={{ fontSize: '9.5px', color: 'rgba(23,50,77,0.75)', fontFamily: 'var(--font-sans)' }}>Судебная защита прав • Липецк</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        trustItems={[
          { text: 'Оформление прав при полной утрате исходных документов.' },
          { text: 'Применение срока приобретательной давности по ст. 234 ГК РФ.' },
          { text: 'Внесение записи в ЕГРН на основании решения суда под ключ.' }
        ]}
      />

      {/* ═══ 2. СИТУАЦИИ ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '850px', marginBottom: '48px' }}>
            <h2 className="with-accent nowrap-desk" style={{ fontSize: 'clamp(26px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Когда право признаётся только через суд
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Если Росреестр отказывает во внесудебной регистрации, единственным законным способом получить собственность остаётся судебный акт.
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '24px', marginBottom: '40px' }}>
            {[
              {
                tag: 'ДАВНОСТЬ ВЛАДЕНИЯ',
                title: 'Владение более 15 лет',
                desc: 'Добросовестное, открытое и непрерывное владение домом или квартирой как своей собственной по ст. 234 ГК РФ.'
              },
              {
                tag: 'УТЕРЯ ДОКУМЕНТОВ',
                title: (
                  <>
                    Утрата архивов <br />
                    и ордеров
                  </>
                ),
                desc: 'Отсутствие первичных правоустанавливающих договоров, ликвидация предприятий, выдававших жильё в 1980–1990-х годах.'
              },
              {
                tag: 'БАНКРОТСТВО',
                title: 'Ликвидация застройщика',
                desc: 'Застройщик обанкротился или исключён из ЕГРЮЛ до передачи документов в Росреестр при фактически сданном объекте.'
              },
              {
                tag: 'ГАРАЖИ И КООПЕРАТИВЫ',
                title: (
                  <>
                    Паенакопления <br />
                    в ГСК / СНТ
                  </>
                ),
                desc: 'Полная выплата пая при отсутствии председателя, правоустанавливающих документов кооператива или актов ввода.'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="hover-lift"
                style={{
                  padding: '28px 24px',
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
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
                Получили письменный отказ или приостановку Росреестра?
              </h3>
              <p style={{ margin: '0', fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5, maxWidth: '640px' }}>
                Покажите уведомление юристу. Мы проанализируем основания отказа и подготовим иск для признания права собственности через суд.
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <a 
                href="#form" 
                className="btn white-btn-custom" 
                style={{ display: 'inline-block', textAlign: 'center', fontSize: '15px' }}
              >
                Разобрать отказ Росреестра
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. ЭТАПЫ СУДЕБНОГО ПРИЗНАНИЯ ═══ */}
      <section className="section" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Этапы судебного признания права
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Полный цикл защиты ваших законных интересов до получения выписки из ЕГРН.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {[
              {
                title: 'Сбор архивных доказательств',
                desc: 'Направляем запросы в муниципальные архивы, органы технической инвентаризации (БТИ), налоговые органы и ведомства.'
              },
              {
                title: 'Технический план объекта',
                desc: 'Привлекаем аттестованного кадастрового инженера для проведения обмеров и формирования технического описания недвижимости.'
              },
              {
                title: 'Формирование иска по ГК РФ',
                desc: 'Составляем иск, определяем правильный состав ответчиков и третьих лиц (администрация города, Росреестр, наследники).'
              },
              {
                title: 'Судебное представительство',
                desc: 'Участвуем во всех судебных заседаниях, допрашиваем свидетелей, представляем доказательства добросовестности.'
              },
              {
                title: 'Вступление решения в силу',
                desc: 'Контролируем изготовление решения в окончательной форме, получаем отметку о вступлении в законную силу.'
              },
              {
                title: 'Регистрация права в ЕГРН',
                desc: 'Сдаём судебный акт в Росреестр и передаём доверителю выписку из ЕГРН с зарегистрированным правом собственности.'
              }
            ].map((step, idx) => (
              <div
                key={idx}
                className="hover-lift"
                style={{
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  padding: '36px 30px 32px 30px',
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
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '8px 0 14px 0', lineHeight: 1.35 }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. КЕЙСЫ ═══ */}
      <CasesBlock
        title="Примеры признания права собственности"
        showDemoWarning={false}
        resultLabel="Результат"
        cases={cases}
      />

      {/* ═══ 5. ПРОЦЕСС ═══ */}
      <ProcessBlock
        title="Порядок работы юриста"
        subtitle="Пять шагов для получения законного права собственности на спорный объект."
        steps={processSteps}
      />

      {/* ═══ 6. СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость услуг по признанию права собственности"
        subtitle="Прозрачная фиксация стоимости в договоре без скрытых доплат. Оплата судебной пошлины рассчитывается отдельно."
        tiers={pricingTiers}
      />

      {/* ═══ 7. ЧАСТЫЕ ВОПРОСЫ (FAQ) ═══ */}
      <FAQBlock
        faqs={faqs}
        title={<>Частые вопросы <br />по признанию права собственности</>}
        subtitle="Разъяснения норм ст. 218 и 234 ГК РФ, правил оформления объектов без документов и судебной практики."
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
              Смежные направления помощи по защите и оформлению недвижимости.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '20px' }}>
            <Link href="/grazhdanam/yurist-po-nedvizhimosti/legalizaciya-samovolnoj-postrojki/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div 
                className="card" 
                style={{ 
                  height: '100%', 
                  padding: '32px', 
                  background: 'var(--color-white)', 
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column'
                }}
              >
                <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                  Узаконивание самостроя
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Легализация домов, пристроек и реконструкций по ст. 222 ГК РФ.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '15px', fontWeight: 600 }}>
                  Подробнее →
                </div>
              </div>
            </Link>

            <Link href="/grazhdanam/zemelnyj-yurist/oformlenie-prav-na-zemelnyj-uchastok/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div 
                className="card" 
                style={{ 
                  height: '100%', 
                  padding: '32px', 
                  background: 'var(--color-white)', 
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column'
                }}
              >
                <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                  Оформление прав на землю
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Приватизация и выкуп земельных участков под оформленными зданиями.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '15px', fontWeight: 600 }}>
                  Подробнее →
                </div>
              </div>
            </Link>

            <Link href="/grazhdanam/yurist-po-nedvizhimosti/osparivanie-sdelok-s-nedvizhimostyu/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
              <div 
                className="card" 
                style={{ 
                  height: '100%', 
                  padding: '32px', 
                  background: 'var(--color-white)', 
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column'
                }}
              >
                <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                  Оспаривание сделок
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Возврат имущества, незаконно оформленного третьими лицами.
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
                Оформите право собственности через суд
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко опишите объект (квартира, дом, гараж), имеющиеся документы и причину невозможности регистрации в обычном порядке. Мы предложим надёжную стратегию защиты.
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
                  buttonText="Оставить заявку" 
                  commentPlaceholder="Опишите ситуацию (объект, утеря документов, отказ Росреестра)…" 
                  subtext="Если вы оставите заявку вечером или в выходной день, мы перезвоним в ближайший рабочий день."
                  hiddenFields={[{ name: 'service', value: 'Признание права собственности на недвижимость' }]} 
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
