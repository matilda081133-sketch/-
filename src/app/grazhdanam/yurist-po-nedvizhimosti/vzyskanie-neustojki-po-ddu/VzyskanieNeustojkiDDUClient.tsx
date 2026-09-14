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

export default function VzyskanieNeustojkiDDUClient() {
  const faqs = [
    {
      q: 'Как рассчитывается неустойка по закону № 214-ФЗ?',
      a: 'По ч. 2 ст. 6 Федерального закона № 214-ФЗ застройщик уплачивает гражданину-участнику долевого строительства неустойку в размере 1/150 ключевой ставки ЦБ РФ от цены договора за каждый день просрочки. При расчёте обязательно учитываются периоды действия государственных мораториев.'
    },
    {
      q: 'Действуют ли сейчас моратории на неустойку по ДДУ?',
      a: 'В отдельные периоды Правительство РФ устанавливало моратории (постановления № 442, № 480, № 326), освобождающие застройщиков от уплаты неустоек или ограничивающие их размер. Наш юрист делит весь период задержки на правовые интервалы и рассчитывает сумму строго в соответствии с действовавшими нормами.'
    },
    {
      q: 'Можно ли взыскать неустойку, если застройщик прислал уведомление о переносе срока?',
      a: 'Да. Сам факт направления письма застройщиком о переносе срока сдачи дома не продлевает срок по договору и не освобождает от ответственности. Срок считается законно изменённым только в случае, если дольщик добровольно подписал дополнительное соглашение к ДДУ и оно прошло регистрацию в Росреестре.'
    },
    {
      q: 'Что можно взыскать помимо неустойки?',
      a: 'Помимо неустойки застройщик обязан возместить документально подтверждённые убытки (например, расходы на вынужденный наём жилья), компенсацию морального вреда, штраф в размере 50% от присуждённой суммы за отказ добровольно удовлетворить претензию потребителя, а также судебные расходы на юриста.'
    },
    {
      q: 'Как противодействовать снижению неустойки по ст. 333 ГК РФ?',
      a: 'Застройщики обязаны доказать исключительность обстоятельств и явную несоразмерность последствиям нарушения. Мы готовим детальные процессуальные возражения: подтверждаем ипотечные платежи доверителя, отсутствие у него иного жилья, переплаты за аренду и инфляционные потери.'
    },
    {
      q: 'Как реально получить деньги после вынесения решения суда?',
      a: 'После вступления решения суда в законную силу мы получаем исполнительный лист и направляем его напрямую в банк, где открыты действующие расчётные счета застройщика, либо в Федеральную службу судебных приставов (ФССП) с контролем ареста счетов.'
    }
  ];

  const cases = [
    {
      category: 'ПРОСРОЧКА СДАЧИ',
      title: 'Сложный расчёт неустойки через несколько периодов регулирования',
      problem: 'Застройщик задержал передачу двухкомнатной квартиры на 9 месяцев, охвативших период действия моратория и резкого изменения ключевой ставки Банка России. Предложенное мировое соглашение покрывало лишь 15% реальных потерь.',
      action: 'Разделили срок просрочки на юридические интервалы, применили ключевую ставку по нормам соответствующих периодов, сформировали досудебную претензию и подготовили мотивированные возражения против снижения по ст. 333 ГК РФ.',
      result: 'Суд удовлетворил требования дольщика, взыскав неустойку, штраф 50% по закону о защите прав потребителей и расходы на представителя. Сумма взыскана со счёта застройщика.',
      isDemo: false
    },
    {
      category: 'УБЫТКИ И АРЕНДА',
      title: 'Взыскание неустойки и компенсации за наём временного жилья',
      problem: 'Семья с детьми была вынуждена арендовать жильё из-за срыва срока ввода новостройки более чем на 7 месяцев. Застройщик утверждал, что аренда не подлежит компенсации.',
      action: 'Собрали доказательную базу: договор найма квартиры, выписки банковских переводов собственнику, подтверждение отсутствия в собственности иного жилья в Липецке и заявили иск о взыскании убытков параллельно с неустойкой.',
      result: 'Суд полностью взыскал неустойку и признал расходы на аренду жилья прямыми убытками, подлежащими возмещению застройщиком в полном объёме.',
      isDemo: false
    },
    {
      category: 'УСТУПКА ТРЕБОВАНИЯ',
      title: 'Взыскание неустойки новым дольщиком по договору цессии',
      problem: 'Дольщик приобрёл права на квартиру по договору уступки права требования (цессии) уже в период возникшей просрочки. Застройщик возражал в суде, заявляя об отсутствии статуса потребителя.',
      action: 'Доказали переход полного объёма прав первоначального дольщика к новому кредитору по ст. 384 ГК РФ и личное использование квартиры гражданином для семейных нужд без коммерческой цели.',
      result: 'Суд отклонил доводы застройщика и взыскал неустойку за весь период нарушения обязательства с начислением потребительского штрафа 50%.',
      isDemo: false
    }
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Первичный анализ',
      desc: 'Изучаем ДДУ, дату плановой сдачи, уведомления и проверяем наличие просрочки.'
    },
    {
      num: '02',
      title: 'Расчёт требований',
      desc: 'Рассчитываем неустойку по правовым периодам с учётом ключевой ставки ЦБ РФ и действовавших норм.'
    },
    {
      num: '03',
      title: 'Претензия застройщику',
      desc: 'Составляем и направляем досудебную претензию с подробным расчётом и банковскими реквизитами.'
    },
    {
      num: '04',
      title: 'Судебное производство',
      desc: 'Подаём иск в суд по выбору дольщика, защищаем расчёт от необоснованного снижения по ст. 333 ГК РФ.'
    },
    {
      num: '05',
      title: 'Исполнение решения',
      desc: 'Получаем исполнительный лист и предъявляем его ко взысканию в банк застройщика или ФССП.'
    }
  ];

  const pricingTiers = [
    {
      title: <>Досудебная претензия</>,
      subtitle: 'Претензионный порядок',
      popular: false,
      price: 'от ХХХ ₽',
      features: [
        { name: 'Правовой расчёт неустойки по периодам', value: '✓' },
        { name: 'Составление мотивированной претензии', value: '✓' },
        { name: 'Контроль вручения застройщику', value: '✓' }
      ],
      buttonText: 'Заказать претензию',
      buttonHref: '#form'
    },
    {
      title: <>Судебное взыскание под ключ</>,
      subtitle: 'Полное ведение дела',
      popular: true,
      badgeText: 'ВОСТРЕБОВАНО',
      price: 'от ХХХ ₽',
      features: [
        { name: 'Подготовка иска и доказательной базы', value: '✓' },
        { name: 'Представительство во всех заседаниях', value: '✓' },
        { name: 'Возражения на снижение по ст. 333 ГК', value: '✓' },
        { name: 'Получение исполнительного листа', value: '✓' }
      ],
      buttonText: 'Взыскать под ключ',
      buttonHref: '#form'
    },
    {
      title: <>Взыскание убытков и аренды</>,
      subtitle: 'Комплексный иск',
      popular: false,
      price: 'от ХХХ ₽',
      features: [
        { name: 'Обоснование расходов на наём жилья', value: '✓' },
        { name: 'Взыскание переплаты по процентам', value: '✓' },
        { name: 'Штраф 50% и моральный вред', value: '✓' }
      ],
      buttonText: 'Взыскать убытки',
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
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/vzyskanie-neustojki-po-ddu/#service',
        name: 'Взыскание неустойки по ДДУ в Липецке',
        serviceType: 'Взыскание неустойки с застройщика',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        url: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/vzyskanie-neustojki-po-ddu/',
        description: 'Взыскание неустойки с застройщика по ДДУ в Липецке: проверим период просрочки, рассчитаем требования, подготовим претензию, иск и исполнение.'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/vzyskanie-neustojki-po-ddu/#breadcrumbs',
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
            name: 'Взыскание неустойки по ДДУ',
            item: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/vzyskanie-neustojki-po-ddu/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/vzyskanie-neustojki-po-ddu/#faq',
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
            <span style={{ color: 'var(--color-text-main)' }}>Взыскание неустойки</span>
          </>
        }
        superTitle="Просрочка передачи квартиры по ДДУ"
        title={<>Взыскание неустойки <br />по ДДУ в Липецке</>}
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '560px', textWrap: 'balance' }}>
            Проверим период просрочки, рассчитаем применимые требования с учётом мораториев и ключевой ставки, подготовим претензию, иск и доведём дело до фактического исполнения.
          </span>
        }
        primaryCtaText="Рассчитать сумму неустойки"
        primaryCtaLink="#form"
        primaryCtaAnalytics="ddu_penalty_hero_click"
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
                      <span style={{ fontSize: '4px', fontWeight: 'bold', color: 'rgba(23,50,77,0.4)', fontFamily: 'var(--font-serif)' }}>РАСЧЁТ № 214-ФЗ</span>
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

      {/* ═══ 2. ЧТО МОЖНО ЗАЯВИТЬ В СУДЕ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
            <span className="badge badge-gold" style={{ marginBottom: '16px' }}>СОСТАВ ТРЕБОВАНИЙ</span>
            <h2 className="section-title">Что взыскивается с застройщика при просрочке</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Грамотно составленный иск включает не только базовую неустойку, но и компенсацию сопутствующих убытков, штраф 50% и моральный вред.
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '24px' }}>
            {[
              {
                tag: 'ОСНОВНОЕ ТРЕБОВАНИЕ',
                title: 'Неустойка по ДДУ',
                desc: '1/150 ключевой ставки ЦБ РФ за каждый день просрочки от цены договора за весь период законного начисления.'
              },
              {
                tag: 'ПРЯМЫЕ УБЫТКИ',
                title: 'Расходы на аренду',
                desc: 'Возмещение арендной платы за съёмное жильё за весь период задержки при документальном подтверждении договора и платежей.'
              },
              {
                tag: 'ПОТРЕБИТЕЛЬСКИЙ ШТРАФ',
                title: 'Штраф 50%',
                desc: 'Штраф в размере 50% от всей присуждённой суммы за отказ добровольно исполнить обоснованную претензию дольщика.'
              },
              {
                tag: 'МОРАЛЬНЫЙ ВРЕД',
                title: 'Моральный вред и расходы',
                desc: 'Компенсация нравственных страданий, а также возмещение всех понесённых расходов на юридические услуги и доверенности.'
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
            <h2 className="section-title">Что сделает юрист по ДДУ компании «Де-Юре»</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Берём на себя всю процессуальную работу: от составления точного математического расчёта до поступления средств на ваш счёт.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {[
              {
                num: '01',
                title: 'Анализ документов',
                desc: 'Анализируем ДДУ, дополнительные соглашения, договор уступки, уведомления застройщика и акт приёма-передачи.'
              },
              {
                num: '02',
                title: 'Разбивка по периодам',
                desc: 'Разбиваем срок просрочки на правовые периоды, исключаем моратории и готовим математически выверенный расчёт.'
              },
              {
                num: '03',
                title: 'Определение убытков',
                desc: 'Определяем состав дополнительных требований: аренда, переплата по кредиту, моральный вред и судебные издержки.'
              },
              {
                num: '04',
                title: 'Досудебная претензия',
                desc: 'Готовим и направляем официальную претензию застройщику с подтверждением отправки для начисления штрафа 50%.'
              },
              {
                num: '05',
                title: 'Иск и защита в суде',
                desc: 'Составляем иск, определяем выгодную подсудность, участвуем в заседаниях и парируем ст. 333 ГК РФ.'
              },
              {
                num: '06',
                title: 'Исполнение решения',
                desc: 'Получаем исполнительный документ и направляем его в банк с реальным движением средств на расчётных счетах.'
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
        title="Примеры взыскания неустойки"
        showDemoWarning={false}
        resultLabel="Результат"
        cases={cases}
      />

      {/* ═══ 5. ПРОЦЕСС ═══ */}
      <ProcessBlock
        title="Процесс и сроки взыскания"
        subtitle="От первой консультации до фактического зачисления денег на ваш расчётный счёт."
        steps={processSteps}
      />

      {/* ═══ 6. СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость услуг по взысканию неустойки"
        subtitle="Прозрачная фиксация стоимости в договоре без скрытых доплат. Судебные расходы взыскиваются с застройщика."
        tiers={pricingTiers}
      />

      {/* ═══ 7. ЧАСТЫЕ ВОПРОСЫ (FAQ) ═══ */}
      <FAQBlock
        faqs={faqs}
        title={<>Ответы на частые вопросы <br />по неустойке по ДДУ</>}
        subtitle="Разъяснения норм Федерального закона № 214-ФЗ, правил применения ст. 333 ГК РФ и мораториев."
        ctaText="Задать свой вопрос"
        ctaLink="#form"
      />

      {/* ═══ 8. ФИНАЛЬНАЯ ФОРМА ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start' }}>
              <span className="badge badge-gold" style={{ marginBottom: '16px', alignSelf: 'flex-start' }}>
                РАСЧЁТ НЕУСТОЙКИ
              </span>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
                Рассчитайте сумму неустойки с застройщика
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '32px' }}>
                Укажите дату заключения ДДУ, плановый срок сдачи, цену договора и подписан ли акт приёма-передачи. Мы проверим применимые периоды и сообщим точную сумму к взысканию.
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
                  Пн–Пт с 9:00 до 18:00. Возможно дистанционное ведение дел.
                </p>
              </div>
            </div>

            <div>
              <ContactsForm title="Написать нам" subtitle="" buttonText="Оставить заявку" commentPlaceholder="Кратко опишите ситуацию по недвижимости…" hiddenFields={[{ name: 'service', value: 'Взыскание неустойки по ДДУ' }]} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
