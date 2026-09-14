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

export default function RastorzhenieDDUClient() {
  const faqs = [
    {
      q: 'В каких случаях дольщик вправе расторгнуть ДДУ в одностороннем порядке?',
      a: 'По ст. 9 Федерального закона № 214-ФЗ дольщик вправе отказаться от договора в одностороннем внесудебном порядке при просрочке передачи объекта более чем на 2 месяца, а также при существенном нарушении требований к качеству квартиры или неисполнении застройщиком обязанности устранить дефекты.'
    },
    {
      q: 'Как возвращаются деньги, если покупка производилась через счёт эскроу?',
      a: 'При расторжении ДДУ и регистрации прекращения договора в Росреестре уполномоченный банк закрывает счёт эскроу и возвращает всю сумму цены договора депоненту (дольщику). Если привлекалась ипотека, средства сначала идут на погашение основного долга перед банком-кредитором.'
    },
    {
      q: 'Положены ли проценты за пользование денежными средствами при расторжении?',
      a: 'Да. Застройщик обязан выплатить гражданину проценты на сумму цены договора в размере 1/150 ключевой ставки ЦБ РФ со дня внесения средств до дня их фактического возврата (ст. 9 № 214-ФЗ), за исключением периодов действия государственных мораториев.'
    },
    {
      q: 'Что происходит с ипотечным кредитом при расторжении ДДУ?',
      a: 'Ипотечный договор не прекращается автоматически. Возвращённые со счёта эскроу средства направляются на досрочное погашение ипотеки. Юрист согласует с банком порядок перечисления и контролирует закрытие кредитной линии без штрафов и ухудшения кредитной истории.'
    },
    {
      q: 'Что выгоднее: взыскать неустойку или расторгнуть ДДУ?',
      a: 'Если дом достраивается и квартира вам нужна, выгоднее сохранить договор и взыскать неустойку. Если стройка заморожена, застройщик на грани банкротства или квартира потеряла потребительскую ценность, расторжение — единственный способ вернуть средства со счёта эскроу.'
    },
    {
      q: 'Нужно ли обращаться в суд для расторжения договора?',
      a: 'При задержке сдачи свыше 2 месяцев расторжение происходит во внесудебном порядке путём направления застройщику уведомления об отказе и подачи заявления в Росреестр. Судебный порядок требуется, если основанием являются проектные изменения, дефекты или застройщик уклоняется от возврата процентов.'
    }
  ];

  const cases = [
    {
      category: 'ОДНОСТОРОННИЙ ОТКАЗ',
      title: 'Возврат средств со счёта эскроу при остановке строительства',
      problem: 'Строительство ЖК остановилось на уровне 4 этажа, задержка сдачи превысила 3 месяца. Дольщик ежемесячно вносил ипотечные платежи и арендовал квартиру.',
      action: 'Подготовили юридически безупречное уведомление об одностороннем отказе от ДДУ, подали заявление о погашении записи в ЕГРН в Росреестр, уведомили банк эскроу-агента и банк-кредитор.',
      result: 'Запись о ДДУ погашена, банк вернул 100% средств со счёта эскроу, ипотечный кредит полностью закрыт, а с застройщика через суд взысканы проценты за пользование деньгами.',
      isDemo: false
    },
    {
      category: 'СУДЕБНОЕ РАСТОРЖЕНИЕ',
      title: 'Расторжение ДДУ из-за критического изменения проекта новостройки',
      problem: 'Застройщик в одностороннем порядке внёс изменения в проектную документацию: уменьшил полезную площадь квартиры на 8 кв. м и перенёс перегородки, сделав планировку непригодной для семьи.',
      action: 'Зафиксировали несоответствие проектной декларации первоначальному плану ДДУ, подготовили досудебное требование, а после отказа застройщика подали иск о судебном расторжении договора.',
      result: 'Суд расторг ДДУ по п. 1 ч. 1.1 ст. 9 № 214-ФЗ, обязал застройщика вернуть всю стоимость договора, проценты за 14 месяцев и компенсировать расходы на юриста.',
      isDemo: false
    },
    {
      category: 'ВЗЫСКАНИЕ ПРОЦЕНТОВ',
      title: 'Взыскание процентов за пользование деньгами после соглашения о расторжении',
      problem: 'Стороны подписали соглашение о расторжении ДДУ, застройщик вернул номинал квартиры через 6 месяцев, но категорически отказался выплачивать законные проценты по закону № 214-ФЗ.',
      action: 'Произвели помесячный расчёт процентов по ключевой ставке Банка России за весь период нахождения средств у застройщика, направили претензию и подали иск в суд.',
      result: 'Суд взыскал проценты за пользование чужими денежными средствами в полном объёме, потребительский штраф 50% и компенсацию морального вреда.',
      isDemo: false
    }
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Оценка оснований и рисков',
      desc: 'Проверяем сроки просрочки, состояние застройщика, остаток средств на эскроу и кредитный договор.'
    },
    {
      num: '02',
      title: 'Уведомление об отказе',
      desc: 'Составляем и направляем застройщику юридически безупречное уведомление об одностороннем отказе от ДДУ.'
    },
    {
      num: '03',
      title: 'Погашение записи в Росреестре',
      desc: 'Подаём заявление в Росреестр о прекращении ДДУ, контролируем снятие обременения с объекта.'
    },
    {
      num: '04',
      title: 'Возврат денег со счёта эскроу',
      desc: 'Предоставляем подтверждение Росреестра в банк эскроу-агент для мгновенного разблокирования средств.'
    },
    {
      num: '05',
      title: 'Взыскание процентов в суде',
      desc: 'Взыскиваем с застройщика законные проценты по ст. 9 № 214-ФЗ, штраф 50% и убытки.'
    }
  ];

  const pricingTiers = [
    {
      title: <>Правовой анализ оснований</>,
      subtitle: 'Оценка рисков выхода из ДДУ',
      popular: false,
      price: 'от 10 000 ₽',
      features: [
        { name: 'Анализ договора ДДУ и сроков нарушения', value: '✓' },
        { name: 'Проверка статуса счёта эскроу в банке', value: '✓' },
        { name: 'Расчёт процентов по ч. 2 ст. 9 № 214-ФЗ', value: '✓' },
        { name: 'Письменное заключение о безопасности', value: '✓' }
      ],
      buttonText: 'Оценить риски',
      buttonHref: '#form'
    },
    {
      title: <>Внесудебное расторжение</>,
      subtitle: 'При просрочке свыше 2 месяцев',
      popular: true,
      badgeText: 'ВОСТРЕБОВАНО',
      price: 'от 25 000 ₽',
      features: [
        { name: 'Уведомление об одностороннем отказе', value: '✓' },
        { name: 'Регистрация прекращения ДДУ в Росреестре', value: '✓' },
        { name: 'Взаимодействие с банком эскроу-агентом', value: '✓' },
        { name: 'Возврат 100% средств со счёта эскроу', value: '✓' },
        { name: 'Закрытие ипотечных обязательств', value: '✓' }
      ],
      buttonText: 'Расторгнуть договор',
      buttonHref: '#form'
    },
    {
      title: <>Судебное расторжение + проценты</>,
      subtitle: 'При дефектах или отказе застройщика',
      popular: false,
      price: 'от 35 000 ₽',
      features: [
        { name: 'Подготовка иска о расторжении ДДУ', value: '✓' },
        { name: 'Судебное доказывание нарушений застройщика', value: '✓' },
        { name: 'Взыскание процентов, штрафа 50% и убытков', value: '✓' },
        { name: 'Ведение дела во всех инстанциях', value: '✓' },
        { name: 'Фактическое исполнение решения', value: '✓' }
      ],
      buttonText: 'Расторгнуть через суд',
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
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/rastorzhenie-ddu/#service',
        name: 'Расторжение договора ДДУ в Липецке',
        serviceType: 'Расторжение договора долевого участия',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        url: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/rastorzhenie-ddu/',
        description: 'Расторжение договора ДДУ в Липецке: возврат средств со счетов эскроу, взыскание процентов по 214-ФЗ, урегулирование ипотеки и судебная защита.'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/rastorzhenie-ddu/#breadcrumbs',
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
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Расторжение ДДУ',
            item: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/rastorzhenie-ddu/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/rastorzhenie-ddu/#faq',
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
            <Link href="/grazhdanam/yurist-po-nedvizhimosti/spory-s-zastrojshchikom/" style={{ color: 'var(--color-primary)' }}>Споры с застройщиком</Link> <span style={{ margin: '0 8px' }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Расторжение ДДУ</span>
          </>
        }
        superTitle="ДДУ • 214-ФЗ • возврат эскроу • проценты • Липецк"
        title={<>Расторжение договора <br />ДДУ в Липецке</>}
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '560px', textWrap: 'balance' }}>
            Поможем безопасно выйти из договора долевого участия, вернуть 100% средств со счёта эскроу, закрыть ипотеку и взыскать с застройщика проценты за пользование деньгами.
          </span>
        }
        primaryCtaText="Оценить расторжение"
        primaryCtaLink="#form"
        primaryCtaAnalytics="cancel_ddu_hero_click"
        primaryCtaSubtext="Перезвоним в течение 15 минут в рабочее время"
        secondaryCtaText="Основания выхода"
        secondaryCtaLink="#grounds"
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
                      <span style={{ fontSize: '4.5px', fontWeight: 'bold', color: 'rgba(23,50,77,0.4)', fontFamily: 'var(--font-serif)' }}>СТ. 9 № 214-ФЗ</span>
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
                        УВЕДОМЛЕНИЕ ОБ ОТКАЗЕ<br/>
                        ОТ ИСПОЛНЕНИЯ ДДУ
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
                        <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Дольщик:</div>
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
                        <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', letterSpacing: '0.05em' }}>ВОЗВРАТ ЭСКРОУ</span>
                        <span style={{ fontSize: '5px', color: 'var(--color-primary)' }}>100% средств дольщика</span>
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
                        <line x1="100" y1="15" x2="100" y2="85" stroke="#C1A066" strokeWidth="1" strokeDasharray="3 3" />
                        <text x="35" y="38" fill="#10273B" fontSize="6.5" fontWeight="bold">Счёт эскроу</text>
                        <text x="110" y="38" fill="#1B8738" fontSize="6.5" fontWeight="bold">100% возврат</text>
                        <text x="35" y="70" fill="#10273B" fontSize="6" fontWeight="bold">Росреестр</text>
                        <text x="110" y="70" fill="#10273B" fontSize="6" fontWeight="bold">+ Проценты 214-ФЗ</text>
                      </svg>
                    </div>

                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '8px', borderTop: '1px solid rgba(23,50,77,0.15)' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)' }}>ЮК «ДЕ-ЮРЕ»</div>
                        <div style={{ fontSize: '9.5px', color: 'rgba(23,50,77,0.75)', fontFamily: 'var(--font-sans)' }}>Защита дольщиков • Липецк</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        trustItems={[
          { text: 'Полный возврат денег со счёта эскроу в уполномоченном банке.' },
          { text: 'Взыскание процентов по ст. 9 закона № 214-ФЗ с застройщика.' },
          { text: 'Урегулирование ипотечных обязательств без санкций банка.' }
        ]}
      />

      {/* ═══ 2. ОСНОВАНИЯ ДЛЯ РАСТОРЖЕНИЯ ═══ */}
      <section className="section bg-white" id="grounds" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Когда можно законно выйти из ДДУ
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block' }}>
                Федеральный закон № 214-ФЗ строго регламентирует случаи,
              </span>
              <span className="hero-title-span-mobile" style={{ display: 'block' }}>
                когда дольщик вправе забрать деньги без финансовых потерь.
              </span>
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '24px', marginBottom: '40px' }}>
            {[
              {
                tag: 'ПРОСРОЧКА > 2 МЕСЯЦЕВ',
                title: 'Задержка передачи объекта',
                desc: 'Нарушение срока сдачи дома более чем на 2 месяца даёт безусловное право на односторонний внесудебный отказ от договора.'
              },
              {
                tag: 'ОСТАНОВКА СТРОЙКИ',
                title: 'Заморозка строительства',
                desc: 'Прекращение или явное замедление работ, свидетельствующее о невозможности завершения дома в разумные сроки.'
              },
              {
                tag: 'СУЩЕСТВЕННЫЕ ДЕФЕКТЫ',
                title: 'Неустранимые недостатки',
                desc: 'Строительный брак, делающий объект непригодным для проживания, при отказе застройщика безвозмездно устранить дефекты.'
              },
              {
                tag: 'ИЗМЕНЕНИЕ ПРОЕКТА',
                title: 'Перепланировка проекта',
                desc: 'Существенное изменение проектной документации дома или площади квартиры более чем на допустимый договором процент.'
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
                Опасаетесь остаться без квартиры и без денег?
              </h3>
              <p style={{ margin: '0', fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5, maxWidth: '640px' }}>
                Мы проверим статус эскроу-счёта и финансовое состояние застройщика до подачи документов на расторжение, исключив любые риски потери средств.
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <a 
                href="#form" 
                className="btn white-btn-custom" 
                style={{ display: 'inline-block', textAlign: 'center', fontSize: '15px' }}
              >
                Проверить эскроу-счёт
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. ТРИ СПОСОБА ПРЕКРАТИТЬ ДОГОВОР ═══ */}
      <section className="section" style={{ padding: '80px 0', background: 'var(--color-deep-blue)' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(145deg, #10273B 0%, #17324D 100%)',
            border: '1px solid rgba(193, 160, 102, 0.35)',
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
                  Три способа расторгнуть договор ДДУ
                </h3>
              </div>
            </div>

            <p style={{ margin: '0 0 28px 0', fontSize: '15px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, maxWidth: '820px' }}>
              <span style={{ display: 'inline-block' }}>Выбираем наиболее быстрый и финансово безопасный маршрут исходя из фактических обстоятельств стройки:</span>
            </p>

            <div className="grid grid-2" style={{ gap: '22px', position: 'relative', zIndex: 1 }}>
              {[
                {
                  title: 'Односторонний отказ (ст. 9 № 214-ФЗ)',
                  desc: 'Применяется при просрочке свыше 2 месяцев или существенных строительных дефектах. Не требует согласия застройщика и судебного процесса.'
                },
                {
                  title: 'Сроки прекращения договора',
                  desc: 'ДДУ считается расторгнутым со дня направления застройщику официального письменного уведомления заказным письмом с описью вложений.'
                },
                {
                  title: 'Добровольное соглашение сторон',
                  desc: 'Взаимное расторжение ДДУ. Важно зафиксировать обязательство возврата денег, отсутствие штрафных удержаний и точные сроки выплат.'
                },
                {
                  title: 'Урегулирование ипотеки и эскроу',
                  desc: 'Согласование порядка перечисления средств между уполномоченным банком, счётом эскроу и дольщиком для снятия залога и закрытия кредита.'
                },
                {
                  title: 'Судебное расторжение ДДУ',
                  desc: 'Необходимо при существенном изменении проекта, превышении площади более чем на 5%, заморозке стройки или отказе признавать недостатки.'
                },
                {
                  title: 'Взыскание процентов и убытков',
                  desc: 'Через суд взыскиваются проценты за пользование деньгами (1/150 ключевой ставки ЦБ за каждый день), судебные расходы, штраф 50% и моральный вред.'
                }
              ].map((item, idx) => (
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
              Выбрать способ расторжения ДДУ
            </a>
          </div>
        </div>
      </section>

      {/* ═══ 4. КЕЙСЫ ═══ */}
      <CasesBlock
        title="Примеры расторжения ДДУ"
        showDemoWarning={false}
        resultLabel="Результат"
        cases={cases}
      />

      {/* ═══ 5. ПРОЦЕСС РАБОТЫ ═══ */}
      <ProcessBlock
        title="Как проходит процедура выхода из ДДУ"
        subtitle="Пошаговый регламент от анализа оснований до фактического возврата денег на счёт."
        steps={processSteps}
      />

      {/* ═══ 6. СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость услуг по расторжению ДДУ"
        subtitle="Прозрачная фиксация стоимости в договоре без скрытых доплат. Судебные расходы взыскиваются с застройщика."
        tiers={pricingTiers}
      />

      {/* ═══ 7. ЧАСТЫЕ ВОПРОСЫ (FAQ) ═══ */}
      <FAQBlock
        faqs={faqs}
        title={<>Частые вопросы <br />по расторжению договора ДДУ</>}
        subtitle="Разъяснения ст. 9 закона № 214-ФЗ, правил возврата денег со счетов эскроу и судебной практики."
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
              Смежные направления помощи дольщикам при нарушениях застройщика.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '20px' }}>
            <Link href="/grazhdanam/yurist-po-nedvizhimosti/vzyskanie-neustojki-po-ddu/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
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
                  Взыскание неустойки
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Если вы хотите получить квартиру и компенсировать задержку сдачи по закону № 214-ФЗ.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '15px', fontWeight: 600 }}>
                  Подробнее →
                </div>
              </div>
            </Link>

            <Link href="/grazhdanam/yurist-po-nedvizhimosti/nedostatki-kvartiry-i-vzyskanie-rashodov/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
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
                  Дефекты квартиры
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Фиксация строительного брака, экспертиза и взыскание компенсации на ремонт.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '15px', fontWeight: 600 }}>
                  Подробнее →
                </div>
              </div>
            </Link>

            <Link href="/grazhdanam/yurist-po-nedvizhimosti/spory-s-zastrojshchikom/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
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
                  Все споры с застройщиком
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Комплексная защита прав участников долевого строительства в Липецке.
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
                Оцените перспективы расторжения ДДУ
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Укажите название жилого комплекса, срок сдачи по договору и причину выхода из проекта. Мы оценим безопасность расторжения и подскажем верный порядок действий.
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
                  buttonText="Оценить расторжение" 
                  commentPlaceholder="Укажите ЖК, дату сдачи по ДДУ и причину расторжения…" 
                  subtext="Если вы оставите заявку вечером или в выходной день, мы перезвоним в ближайший рабочий день."
                  hiddenFields={[{ name: 'service', value: 'Расторжение ДДУ' }]} 
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
