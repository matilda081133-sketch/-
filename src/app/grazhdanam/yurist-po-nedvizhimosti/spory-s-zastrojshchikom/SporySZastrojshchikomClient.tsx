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
      subtitle: 'При нарушении сроков передачи',
      popular: true,
      badgeText: 'ВОСТРЕБОВАНО',
      price: 'от 25 000 ₽',
      features: [
        { name: 'Расчёт по периодам и ставкам ЦБ', value: '✓' },
        { name: 'Досудебная претензия застройщику', value: '✓' },
        { name: 'Судебный иск, штраф 50% и моральный вред', value: '✓' },
        { name: 'Взыскание расходов на аренду жилья', value: '✓' },
        { name: 'Предъявление листа в банк застройщика', value: '✓' }
      ],
      buttonText: 'Рассчитать неустойку',
      buttonHref: '#form'
    },
    {
      title: <>Расторжение договора ДДУ</>,
      subtitle: 'Выход из проблемной новостройки',
      popular: false,
      price: 'от 30 000 ₽',
      features: [
        { name: 'Анализ оснований для отказа от ДДУ', value: '✓' },
        { name: 'Уведомление застройщика и Росреестра', value: '✓' },
        { name: 'Возврат средств эскроу через банк', value: '✓' },
        { name: 'Взыскание процентов за пользование деньгами', value: '✓' },
        { name: 'Урегулирование ипотечных обязательств', value: '✓' }
      ],
      buttonText: 'Оценить расторжение',
      buttonHref: '#form'
    },
    {
      title: <>Компенсация за дефекты</>,
      subtitle: 'Строительный брак новостройки',
      popular: false,
      price: 'от 35 000 ₽',
      features: [
        { name: 'Организация приёмки с экспертом НОПРИЗ', value: '✓' },
        { name: 'Составление дефектной ведомости и сметы', value: '✓' },
        { name: 'Претензия об устранении или выплате', value: '✓' },
        { name: 'Взыскание стоимости ремонта и экспертизы', value: '✓' },
        { name: 'Судебное сопровождение под ключ', value: '✓' }
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
        superTitle="ДДУ • 214-ФЗ • просрочка • дефекты • Липецк"
        title={<>Споры с застройщиком <br />в Липецке</>}
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '560px', textWrap: 'balance' }}>
            Проверим ДДУ, сроки, документы по передаче и дефектам, рассчитаем требования с учётом мораториев и добьёмся реальной выплаты денег — от претензии до суда.
          </span>
        }
        primaryCtaText="Определить требования"
        primaryCtaLink="#form"
        primaryCtaAnalytics="dev_disputes_hero_click"
        primaryCtaSubtext="Перезвоним в течение 15 минут в рабочее время"
        secondaryCtaText="Виды требований"
        secondaryCtaLink="#directions"
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
              
              {/* Лист 4: Фоновый документ */}
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
                      <div style={{ width: '95%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Лист 3: Штамп ДДУ */}
              <div className="doc-wrapper-float-3">
                <div className="doc-sheet doc-sheet-3">
                  <div style={{ padding: '35px 25px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ position: 'absolute', top: '25px', left: '25px', width: '75px', height: '25px', border: '1.5px solid rgba(23, 50, 77, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-5deg)' }}>
                      <span style={{ fontSize: '4.5px', fontWeight: 'bold', color: 'rgba(23,50,77,0.4)', fontFamily: 'var(--font-serif)' }}>ДДУ № 214-ФЗ</span>
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
                      <div style={{ width: '80%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Лист 2: Акт дефектов / Претензия */}
              <div className="doc-wrapper-float-2">
                <div className="doc-sheet doc-sheet-2">
                  <div style={{ padding: '28px 22px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ position: 'absolute', top: '22px', left: '22px', width: '110px', height: '30px', border: '1px solid #C1A066', color: '#C1A066', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-4deg)', opacity: 0.95 }}>
                      <div style={{ fontFamily: 'var(--font-serif)', fontSize: '5px', textAlign: 'center', fontWeight: 'bold', lineHeight: 1.2 }}>
                        ПРЕТЕНЗИЯ ЗАСТРОЙЩИКУ<br/>
                        СТ. 6, 7 ФЗ № 214-ФЗ
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
                        <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Юрист по ДДУ:</div>
                        <div style={{ width: '70px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '8px' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Лист 1: Главный документ с логотипом и печатью */}
              <div className="doc-wrapper-float-1">
                <div className="doc-sheet doc-sheet-1">
                  <div style={{ padding: '26px 22px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(23,50,77,0.2)', paddingBottom: '10px', marginBottom: '14px' }}>
                      <img src="/images/logo_dark.png" alt="Де-Юре" style={{ width: '55px', height: 'auto', opacity: 0.9 }} />
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', alignItems: 'flex-end' }}>
                        <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', letterSpacing: '0.05em' }}>СУДЕБНАЯ ЗАЩИТА</span>
                        <span style={{ fontSize: '5px', color: 'var(--color-primary)' }}>Расчёт неустойки и убытков</span>
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
                        <line x1="75" y1="15" x2="75" y2="85" stroke="#C1A066" strokeWidth="1" />
                        <line x1="125" y1="15" x2="125" y2="85" stroke="#C1A066" strokeWidth="1" />
                        <line x1="25" y1="50" x2="125" y2="50" stroke="#C1A066" strokeWidth="1" />
                        <text x="35" y="38" fill="#10273B" fontSize="6.5" fontWeight="bold">Квартира</text>
                        <text x="85" y="38" fill="#10273B" fontSize="6.5" fontWeight="bold">Лоджия</text>
                        <text x="135" y="52" fill="#10273B" fontSize="6.5" fontWeight="bold">ДДУ 214-ФЗ</text>
                        <text x="35" y="72" fill="#C53030" fontSize="6" fontWeight="bold">Дефект / Срок</text>
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
          { text: 'Точный расчёт неустойки по периодам с учётом мораториев.' },
          { text: 'Оценка возврата средств со счетов эскроу при расторжении.' },
          { text: 'Привлечение аттестованных экспертов НОПРИЗ/НОСТРОЙ.' }
        ]}
      />

      {/* ═══ 2. ТРИ НАПРАВЛЕНИЯ ПОМОЩИ (ДОЧЕРНИЕ УСЛУГИ) ═══ */}
      <section className="section bg-white" id="directions" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Выберите требование к застройщику
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Каждая ситуация требует отдельного юридического механизма: расчёта по периодам, выхода из договора или строительной экспертизы.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '40px' }}>
            {[
              {
                tag: 'ПРОСРОЧКА',
                title: 'Взыскание неустойки по ДДУ',
                desc: 'Рассчитаем требования по применимым периодам, учтём изменения мораториев и ключевой ставки, подготовим претензию и иск, сопроводим суд и фактическое исполнение.',
                link: '/grazhdanam/yurist-po-nedvizhimosti/vzyskanie-neustojki-po-ddu/',
                btnText: 'Рассчитать требования'
              },
              {
                tag: 'ВЫХОД ИЗ ДДУ',
                title: 'Расторжение договора ДДУ',
                desc: 'Проверим основания и финансовые последствия выхода из договора, оценим возврат цены со счетов эскроу и процентов, проведём уведомление, переговоры или судебное расторжение.',
                link: '/grazhdanam/yurist-po-nedvizhimosti/rastorzhenie-ddu/',
                btnText: 'Оценить расторжение'
              },
              {
                tag: 'ДЕФЕКТЫ ОТДЕЛКИ',
                title: 'Компенсация за недостатки квартиры',
                desc: 'Поможем зафиксировать дефекты при приёмке, привлечём эксперта НОПРИЗ/НОСТРОЙ, обоснуем смету восстановительного ремонта и взыщем применимые суммы.',
                link: '/grazhdanam/yurist-po-nedvizhimosti/nedostatki-kvartiry-i-vzyskanie-rashodov/',
                btnText: 'Разобрать дефекты'
              }
            ].map((card, idx) => (
              <div
                key={idx}
                className="hover-lift"
                style={{
                  padding: '32px 28px',
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
                  <svg width="100" height="100" viewBox="0 0 24 24" fill="var(--color-deep-blue)">
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <div style={{ 
                  fontSize: '12px', 
                  fontWeight: 600, 
                  color: 'var(--color-gold)', 
                  marginBottom: '12px',
                  background: 'rgba(193, 160, 102, 0.1)',
                  padding: '4px 10px',
                  alignSelf: 'flex-start',
                  borderRadius: '2px'
                }}>
                  {card.tag}
                </div>
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--color-deep-blue)', lineHeight: 1.4, margin: '0 0 12px 0' }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: '0 0 24px 0', flexGrow: 1 }}>
                  {card.desc}
                </p>
                <Link
                  href={card.link}
                  className="btn btn-primary"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '12px 20px',
                    borderRadius: '0',
                    fontWeight: 600,
                    textDecoration: 'none'
                  }}
                >
                  {card.btnText} →
                </Link>
              </div>
            ))}
          </div>

          {/* CTA-плашка */}
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
                Не уверены, какое требование заявить первым?
              </h3>
              <p style={{ margin: '0', fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5, maxWidth: '640px' }}>
                Мы проанализируем договор ДДУ, дату планового ввода, фактическое состояние дома и поможем выбрать наиболее выгодную и безопасную стратегию защиты.
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <a 
                href="#form" 
                className="btn white-btn-custom" 
                style={{ display: 'inline-block', textAlign: 'center', fontSize: '15px' }}
              >
                Получить правовой анализ
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. ЧТО ПРОВЕРИТ ЮРИСТ ДО НАЧАЛА СПОРА ═══ */}
      <section className="section" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Что проверяем до предъявления требований
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Размер взыскания зависит не только от факта задержки или дефекта, но и от соблюдения процессуальных процедур и доказательственной базы.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', position: 'relative' }}>
            {[
              {
                title: 'Договор и статус сторон',
                desc: 'Зарегистрированный ДДУ, договор уступки права требования, статус гражданина как потребителя и отсутствие коммерческого назначения объекта.'
              },
              {
                title: 'Сроки и периоды нарушения',
                desc: 'Дата передачи по договору, фактическая дата уведомления о готовности, нормативные периоды мораториев и применимые редакции ст. 6 № 214-ФЗ.'
              },
              {
                title: 'Дополнительные соглашения',
                desc: 'Наличие подписанных допсоглашений о переносе сроков, действительность подписей и сохранение права на ранее начисленные штрафы.'
              },
              {
                title: 'Фиксация дефектов при приёмке',
                desc: 'Составление дефектной ведомости, привлечение аттестованного специалиста по постановлению № 2380 и соблюдение досудебного срока устранения.'
              },
              {
                title: 'Доказательства убытков',
                desc: 'Договоры найма жилья, квитанции об оплате аренды, переплата по процентам кредита и причинно-следственная связь с нарушением застройщика.'
              },
              {
                title: 'Платёжеспособность и эскроу',
                desc: 'Проверка финансовых показателей застройщика, наличие денежных средств на счетах, статус счёта эскроу в уполномоченном банке.'
              }
            ].map((item, idx) => (
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
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
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

      {/* ═══ 6. ЧТО ВАЖНО ЗНАТЬ ДО СПОРА ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Не теряйте доказательства до оценки документов
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Ошибочные действия при приёмке или подписании документов могут существенно усложнить или сделать невозможным взыскание компенсации.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
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
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0, paddingBottom: '12px', borderBottom: '1px solid rgba(23, 50, 77, 0.1)' }}>
                Ошибки при документах и сроках
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--color-gold)', fontWeight: 700, fontSize: '16px' }}>—</span>
                  <span style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Подписание допсоглашения о переносе срока без юридического анализа последствий</span>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--color-gold)', fontWeight: 700, fontSize: '16px' }}>—</span>
                  <span style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Использование типовых претензий из интернета без проверки мораториев</span>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--color-gold)', fontWeight: 700, fontSize: '16px' }}>—</span>
                  <span style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Согласие на заниженную компенсацию по мировому соглашению без расчёта перспектив</span>
                </li>
              </ul>
            </div>

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
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0, paddingBottom: '12px', borderBottom: '1px solid rgba(23, 50, 77, 0.1)' }}>
                Ошибки при фиксации дефектов
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--color-gold)', fontWeight: 700, fontSize: '16px' }}>—</span>
                  <span style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Подписание акта приёма-передачи без дефектной ведомости при наличии брака</span>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--color-gold)', fontWeight: 700, fontSize: '16px' }}>—</span>
                  <span style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Начало чистового ремонта до фиксации недостатков независимым экспертом</span>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--color-gold)', fontWeight: 700, fontSize: '16px' }}>—</span>
                  <span style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Отсутствие описи вложений и квитанций об отправке претензии застройщику</span>
                </li>
              </ul>
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

      {/* ═══ 9. СВЯЗАННЫЕ УСЛУГИ ═══ */}
      <section className="section bg-cream" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Связанные услуги
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Смежные направления помощи по защите прав на недвижимость и судебным спорам.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '20px' }}>
            <Link href="/grazhdanam/yurist-po-nedvizhimosti/soprovozhdenie-sdelok-s-nedvizhimostyu/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
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
                  Сопровождение сделок
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Комплексная юридическая проверка объекта и участников сделки, составление безопасных договоров.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '15px', fontWeight: 600 }}>
                  Подробнее →
                </div>
              </div>
            </Link>

            <Link href="/grazhdanam/yurist-po-nedvizhimosti/priznanie-prava-sobstvennosti-na-nedvizhimost/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
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
                  Признание права собственности
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Судебное подтверждение права на новостройку, дом, квартиру при банкротстве или ликвидации продавца.
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
                  Признание недействительными кабальных, мнимых договоров купли-продажи, дарения, залога.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '15px', fontWeight: 600 }}>
                  Подробнее →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 10. ФИНАЛЬНАЯ ФОРМА ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start', paddingTop: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>Связаться с нами</span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                Оцените перспективы спора с застройщиком
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Сообщите дату ДДУ, срок передачи по договору, подписан ли акт приёма-передачи и какие нарушения допущены. Мы проверим документы и сообщим реальные перспективы дела.
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
                  commentPlaceholder="Кратко опишите ситуацию с застройщиком…" 
                  subtext="Если вы оставите заявку вечером или в выходной день, мы перезвоним в ближайший рабочий день."
                  hiddenFields={[{ name: 'service', value: 'Споры с застройщиком' }]} 
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
