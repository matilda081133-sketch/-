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
      title: 'Анализ ДДУ и дат',
      desc: 'Изучаем договор, плановый срок ввода, дату фактической передачи и переписку с застройщиком.'
    },
    {
      num: '02',
      title: 'Расчёт требований',
      desc: 'Рассчитываем неустойку по ключевой ставке ЦБ РФ с разбивкой по периодам действия мораториев.'
    },
    {
      num: '03',
      title: 'Досудебная претензия',
      desc: 'Направляем застройщику мотивированную претензию с расчётом и требованием добровольной выплаты.'
    },
    {
      num: '04',
      title: 'Судебный процесс',
      desc: 'Подаём иск по Закону о защите прав потребителей без госпошлины, защищаем сумму от ст. 333 ГК РФ.'
    },
    {
      num: '05',
      title: 'Взыскание денег',
      desc: 'Предъявляем исполнительный лист в банк застройщика и контролируем фактическое списание средств.'
    }
  ];

  const pricingTiers = [
    {
      title: <>Расчёт и претензия</>,
      subtitle: 'Досудебный этап',
      popular: false,
      price: 'от 10 000 ₽',
      features: [
        { name: 'Анализ договора ДДУ и допсоглашений', value: '✓' },
        { name: 'Расчёт неустойки с учётом мораториев', value: '✓' },
        { name: 'Составление мотивированной претензии', value: '✓' },
        { name: 'Контроль вручения застройщику', value: '✓' }
      ],
      buttonText: 'Заказать претензию',
      buttonHref: '#form'
    },
    {
      title: <>Взыскание в суде под ключ</>,
      subtitle: 'Судебный процесс до решения',
      popular: true,
      badgeText: 'ВОСТРЕБОВАНО',
      price: 'от 25 000 ₽',
      features: [
        { name: 'Подготовка иска и расчёт требований', value: '✓' },
        { name: 'Взыскание штрафа 50% и морального вреда', value: '✓' },
        { name: 'Мотивированные возражения против ст. 333 ГК', value: '✓' },
        { name: 'Участие во всех судебных заседаниях', value: '✓' },
        { name: 'Взыскание судебных расходов с застройщика', value: '✓' }
      ],
      buttonText: 'Взыскать неустойку',
      buttonHref: '#form'
    },
    {
      title: <>Неустойка + убытки (аренда)</>,
      subtitle: 'Максимальная компенсация потерь',
      popular: false,
      price: 'от 30 000 ₽',
      features: [
        { name: 'Взыскание законной неустойки по ДДУ', value: '✓' },
        { name: 'Доказывание расходов на аренду жилья', value: '✓' },
        { name: 'Взыскание переплаты по процентам кредита', value: '✓' },
        { name: 'Штраф 50% на совокупную сумму убытков', value: '✓' },
        { name: 'Получение исполнительного листа и исполнение', value: '✓' }
      ],
      buttonText: 'Взыскать с убытками',
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
        description: 'Взыскание неустойки по ДДУ с застройщика в Липецке: расчёт по 214-ФЗ с учётом мораториев, претензия, суд, штраф 50% и реальное получение денег.'
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
        superTitle="ДДУ • 214-ФЗ • просрочка сдачи • Липецк"
        title={<>Взыскание неустойки <br />по ДДУ в Липецке</>}
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '560px', textWrap: 'balance' }}>
            Рассчитаем неустойку по ч. 2 ст. 6 закона № 214-ФЗ с учётом актуальных мораториев и ставок ЦБ РФ. Взыщем неустойку, убытки на аренду, штраф 50% и моральный вред.
          </span>
        }
        primaryCtaText="Рассчитать неустойку"
        primaryCtaLink="#form"
        primaryCtaAnalytics="ddu_penalty_hero_click"
        primaryCtaSubtext="Перезвоним в течение 15 минут в рабочее время"
        secondaryCtaText="Состав требований"
        secondaryCtaLink="#requirements"
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
                      <span style={{ fontSize: '4.5px', fontWeight: 'bold', color: 'rgba(23,50,77,0.4)', fontFamily: 'var(--font-serif)' }}>РАСЧЁТ СТ. 6 ДДУ</span>
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
                        ИСКОВОЕ ЗАЯВЛЕНИЕ<br/>
                        О ВЗЫСКАНИИ НЕУСТОЙКИ
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
                        <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Застройщик:</div>
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
                        <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', letterSpacing: '0.05em' }}>ФЗ № 214-ФЗ</span>
                        <span style={{ fontSize: '5px', color: 'var(--color-primary)' }}>Штраф 50% + Убытки</span>
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
                        <text x="35" y="38" fill="#10273B" fontSize="6.5" fontWeight="bold">Срок по ДДУ</text>
                        <text x="110" y="38" fill="#C53030" fontSize="6.5" fontWeight="bold">Период просрочки</text>
                        <text x="35" y="70" fill="#10273B" fontSize="6" fontWeight="bold">Ставка ЦБ РФ</text>
                        <text x="110" y="70" fill="#1B8738" fontSize="6" fontWeight="bold">+ Штраф 50%</text>
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
          { text: 'Разбивка просрочки по периодам действия мораториев.' },
          { text: 'Взыскание убытков на вынужденный наём съёмного жилья.' },
          { text: 'Защита суммы иска от снижения по ст. 333 ГК РФ.' }
        ]}
      />

      {/* ═══ 2. СОСТАВ ТРЕБОВАНИЙ ═══ */}
      <section className="section bg-white" id="requirements" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.25 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block' }}>
                Что взыскивается
              </span>
              <span className="hero-title-span-mobile" style={{ display: 'block' }}>
                с застройщика при просрочке
              </span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Грамотно составленный иск включает не только базовую неустойку, но и компенсацию сопутствующих убытков, штраф 50% и моральный вред.
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '24px', marginBottom: '40px' }}>
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
                Застройщик предлагает подписать допсоглашение о переносе?
              </h3>
              <p style={{ margin: '0', fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5, maxWidth: '640px' }}>
                Не подписывайте документы до консультации с юристом. Подписание соглашения лишает вас права требовать законную неустойку за весь перенесённый период.
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <a 
                href="#form" 
                className="btn white-btn-custom" 
                style={{ display: 'inline-block', textAlign: 'center', fontSize: '15px' }}
              >
                Проверить допсоглашение
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. ПЛАН ДЕЙСТВИЙ ═══ */}
      <section className="section" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.25 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block' }}>
                Что сделает юрист
              </span>
              <span className="hero-title-span-mobile" style={{ display: 'block' }}>
                по ДДУ компании «Де-Юре»
              </span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Берём на себя всю процессуальную работу: от составления точного математического расчёта до поступления средств на ваш счёт.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {[
              {
                title: 'Анализ документов',
                desc: 'Анализируем ДДУ, дополнительные соглашения, договор уступки, уведомления застройщика и акт приёма-передачи.'
              },
              {
                title: 'Разбивка по периодам',
                desc: 'Разбиваем срок просрочки на правовые периоды, исключаем моратории и готовим математически выверенный расчёт.'
              },
              {
                title: 'Определение убытков',
                desc: 'Определяем состав дополнительных требований: аренда, переплата по кредиту, моральный вред и судебные издержки.'
              },
              {
                title: 'Досудебная претензия',
                desc: 'Готовим и направляем официальную претензию застройщику с подтверждением отправки для начисления штрафа 50%.'
              },
              {
                title: 'Иск и защита в суде',
                desc: 'Составляем иск, определяем выгодную подсудность, участвуем в заседаниях и парируем ст. 333 ГК РФ.'
              },
              {
                title: 'Исполнение решения',
                desc: 'Получаем исполнительный документ и направляем его в банк с реальным движением средств на расчётных счетах.'
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
        title={<>Частые вопросы <br />по взысканию неустойки по ДДУ</>}
        subtitle="Разъяснения норм ст. 6 закона № 214-ФЗ, правил расчёта и судебной практики по спорам с застройщиками."
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
            <Link href="/grazhdanam/yurist-po-nedvizhimosti/rastorzhenie-ddu/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
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
                  Расторжение ДДУ
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Выход из договора при длительной просрочке, возврат средств со счетов эскроу и процентов.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '15px', fontWeight: 600 }}>
                  Подробнее →
                </div>
              </div>
            </Link>

            <Link href="/grazhdanam/yurist-po-nedvizhimosti/nedostatki-kvartiry-i-vzyskanie-rashodov/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
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
                  Дефекты квартиры
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Фиксация брака, строительно-техническая экспертиза и взыскание стоимости ремонта.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '15px', fontWeight: 600 }}>
                  Подробнее →
                </div>
              </div>
            </Link>

            <Link href="/grazhdanam/yurist-po-nedvizhimosti/spory-s-zastrojshchikom/" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
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
                  Все споры с застройщиком
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Комплексная защита прав участников долевого строительства в судах Липецка.
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
                Рассчитайте сумму неустойки по вашему ДДУ
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Укажите цену договора, плановый срок передачи квартиры и текущий статус (подписан ли акт приёма-передачи). Юрист сделает точный расчёт с учётом ставок ЦБ и мораториев.
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
                  buttonText="Получить точный расчёт" 
                  commentPlaceholder="Укажите застройщика, цену ДДУ и срок сдачи…" 
                  subtext="Если вы оставите заявку вечером или в выходной день, мы перезвоним в ближайший рабочий день."
                  hiddenFields={[{ name: 'service', value: 'Взыскание неустойки по ДДУ' }]} 
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
