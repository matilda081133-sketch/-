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

export default function NedostatkiKvartiryClient() {
  const faqs = [
    {
      q: 'Можно ли требовать компенсацию, если акт приёма-передачи подписан без замечаний?',
      a: 'Да. По закону гарантийный срок на объект долевого строительства составляет не менее 5 лет (на технологическое и инженерное оборудование — не менее 3 лет). Скрытые дефекты (промерзание стен, продувание окон, трещины стяжки, проблемы вентиляции), которые невозможно было обнаружить при визуальном первичном осмотре, подлежат возмещению в течение всего гарантийного срока.'
    },
    {
      q: 'Какой специалист имеет право составлять дефектный акт для суда?',
      a: 'Специалист должен состоять в Национальном реестре специалистов (НОПРИЗ или НОСТРОЙ) и работать по трудовому договору в организации — члене соответствующей саморегулируемой организации (СРО). Акты, составленные неаттестованными лицами, судом отклоняются.'
    },
    {
      q: 'Что можно потребовать: деньги на ремонт или устранение силами застройщика?',
      a: 'Закон предусматривает три альтернативных способа защиты: безвозмездное устранение дефектов застройщиком, соразмерное уменьшение цены ДДУ или возмещение подтверждённых расходов дольщика на самостоятельное устранение дефектов. На практике дольщики чаще выбирают денежное возмещение, чтобы нанять проверенных подрядчиков.'
    },
    {
      q: 'Можно ли делать чистовой ремонт до проведения строительной экспертизы?',
      a: 'Делать ремонт до фиксации дефектов категорически не рекомендуется. Если дефекты будут скрыты отделочными материалами, судебный эксперт не сможет установить их наличие, объём и причину возникновения, что приведёт к отказу в иске.'
    },
    {
      q: 'Обязана ли управляющая компания составлять акт осмотра при заливе или промерзании?',
      a: 'Да, при обращении жильца управляющая организация обязана направить комиссию и составить акт первичного осмотра с указанием видимых повреждений. Этот акт является важным доказательством даты возникновения проблемы.'
    },
    {
      q: 'Кто оплачивает расходы на независимую досудебную экспертизу?',
      a: 'Изначально экспертизу оплачивает дольщик, однако при удовлетворении иска суд полностью взыскивает стоимость досудебного исследования и услуг эксперта с застройщика в качестве судебных издержек.'
    }
  ];

  const cases = [
    {
      category: 'ТЕХНИЧЕСКИЙ БРАК',
      title: 'Взыскание стоимости восстановительного ремонта новостройки',
      problem: 'В сданной квартире выявлены отклонения стен от вертикали свыше 25 мм, многочисленные пустоты и трещины в полусухой стяжке и деформация стеклопакетов. Застройщик предложил частичную затирку швов.',
      action: 'Организовали осмотр сертифицированным экспертом НОПРИЗ, составили акт со сметным расчётом по ценам Минстроя, направили досудебную претензию и провели судебный процесс с защитой заключения.',
      result: 'Суд взыскал с застройщика полную сметную стоимость устранения дефектов, штраф 50% и все понесённые расходы на проведение строительно-технической экспертизы.',
      isDemo: false
    },
    {
      category: 'ПРОМЕРЗАНИЕ СТЕН',
      title: 'Устранение промерзания наружных швов и компенсация ущерба',
      problem: 'Зимой в угловой комнате новостройки появилась сырость, плесень и наледь на стыках плит. Застройщик и УК перекладывали вину друг на друга, ссылаясь на неправильное проветривание.',
      action: 'Провели тепловизионное обследование квартиры в отопительный период, зафиксировали температурные мостики холода и нарушение СНиП по теплоизоляции фасада, подали иск в Липецкий суд.',
      result: 'Суд обязал застройщика выполнить наружное утепление фасада и взыскал в пользу собственника компенсацию на демонтаж испорченной отделки и антигрибковую обработку.',
      isDemo: false
    },
    {
      category: 'СКРЫТЫЕ ДЕФЕКТЫ',
      title: 'Взыскание компенсации за дефекты труб отопления в период гарантии',
      problem: 'Через 2 года после приёмки квартиры произошёл разрыв фитинга лучевой разводки отопления в стяжке пола, повлекший залив собственной квартиры и соседей снизу.',
      action: 'Доказали заводской дефект соединительного узла и нарушение технологии монтажа труб отопления при строительстве дома в пределах 5-летнего гарантийного срока застройщика.',
      result: 'С застройщика взыскана стоимость ремонта квартиры доверителя, а также полностью компенсирован ущерб, причинённый заливом соседям снизу.',
      isDemo: false
    }
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Приёмка и осмотр экспертом',
      desc: 'Привлекаем эксперта из реестра НОПРИЗ/НОСТРОЙ со специальным поверенным оборудованием.'
    },
    {
      num: '02',
      title: 'Дефектная ведомость и смета',
      desc: 'Фиксируем все отклонения от СП и ГОСТ, рассчитываем сметную стоимость восстановительного ремонта.'
    },
    {
      num: '03',
      title: 'Досудебная претензия',
      desc: 'Направляем застройщику требование о выплате стоимости устранения дефектов с приложением акта.'
    },
    {
      num: '04',
      title: 'Судебный иск и экспертиза',
      desc: 'Подаём иск по закону о защите прав потребителей, защищаем выводы экспертизы в судебных заседаниях.'
    },
    {
      num: '05',
      title: 'Взыскание через банк',
      desc: 'Взыскиваем обоснованную стоимость устранения дефектов, положенный потребительский штраф, неустойку и расходы на экспертизу через банк застройщика.'
    }
  ];

  const pricingTiers = [
    {
      title: <>Приёмка с экспертом</>,
      subtitle: 'Выезд эксперта НОПРИЗ',
      popular: false,
      price: 'от 15 000 ₽',
      features: [
        { name: 'Инструментальный осмотр квартиры', value: '✓' },
        { name: 'Проверка стен, стяжки, окон, вентиляции', value: '✓' },
        { name: 'Составление дефектного акта по ГОСТ', value: '✓' },
        { name: 'Инструкция по подписанию акта приёмки', value: '✓' }
      ],
      buttonText: 'Заказать приёмку',
      buttonHref: '#form'
    },
    {
      title: <>Претензия и переговоры</>,
      subtitle: 'Досудебное урегулирование',
      popular: false,
      price: 'от 12 000 ₽',
      features: [
        { name: 'Правовой анализ дефектной ведомости', value: '✓' },
        { name: 'Составление сметного обоснования убытков', value: '✓' },
        { name: 'Мотивированная досудебная претензия', value: '✓' },
        { name: 'Переговоры с юридическим отделом застройщика', value: '✓' }
      ],
      buttonText: 'Направить претензию',
      buttonHref: '#form'
    },
    {
      title: <>Взыскание в суде под ключ</>,
      subtitle: 'Судебное возмещение стоимости ремонта',
      popular: true,
      badgeText: 'ВОСТРЕБОВАНО',
      price: 'от 35 000 ₽',
      features: [
        { name: 'Подготовка иска и организация судебной экспертизы', value: '✓' },
        { name: 'Обоснованная стоимость устранения дефектов + положенный потребительский штраф', value: '✓' },
        { name: 'Взыскание морального вреда и расходов на юриста', value: '✓' },
        { name: 'Участие во всех судебных заседаниях', value: '✓' },
        { name: 'Исполнение решения и перечисление денег', value: '✓' }
      ],
      buttonText: 'Взыскать в суде',
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
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/nedostatki-kvartiry-i-vzyskanie-rashodov/#service',
        name: 'Взыскание расходов за недостатки квартиры в Липецке',
        serviceType: 'Компенсация за дефекты квартиры от застройщика',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        url: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/nedostatki-kvartiry-i-vzyskanie-rashodov/',
        description: 'Юрист по недостаткам квартиры в Липецке: приёмка с экспертом НОПРИЗ, дефектная ведомость, смета, суд с застройщиком и взыскание стоимости ремонта.'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/nedostatki-kvartiry-i-vzyskanie-rashodov/#breadcrumbs',
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
            name: 'Недостатки квартиры',
            item: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/nedostatki-kvartiry-i-vzyskanie-rashodov/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/nedostatki-kvartiry-i-vzyskanie-rashodov/#faq',
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
            <span style={{ color: 'var(--color-text-main)' }}>Недостатки квартиры</span>
          </>
        }
        superTitle="Строительный брак • приёмка • экспертиза • Липецк"
        title={<>Недостатки квартиры <br />и взыскание расходов <br />в Липецке</>}
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '560px', textWrap: 'balance' }}>
            Зафиксируем строительные дефекты, проведём экспертизу и добьёмся нужного результата: устранения недостатков, уменьшения цены квартиры или выплаты денег на ремонт.
          </span>
        }
        primaryCtaText="Разобрать дефекты"
        primaryCtaLink="#form"
        primaryCtaAnalytics="defects_hero_click"
        primaryCtaSubtext="Перезвоним в течение 15 минут в рабочее время"
        secondaryCtaText="Виды дефектов"
        secondaryCtaLink="#defects"
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
                      <span style={{ fontSize: '4.5px', fontWeight: 'bold', color: 'rgba(23,50,77,0.4)', fontFamily: 'var(--font-serif)' }}>ДЕФЕКТНЫЙ АКТ</span>
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
                        ЗАКЛЮЧЕНИЕ ЭКСПЕРТА<br/>
                        НОПРИЗ / НОСТРОЙ
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
                        <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Специалист:</div>
                        <div style={{ width: '70px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '8px' }}></div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                        <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Юрист по дефектам:</div>
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
                        <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', letterSpacing: '0.05em' }}>СМЕТНЫЙ РАСЧЁТ</span>
                        <span style={{ fontSize: '5px', color: 'var(--color-primary)' }}>Возмещение ремонта</span>
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
                        <text x="32" y="35" fill="#C53030" fontSize="6" fontWeight="bold">Стяжка: трещины</text>
                        <text x="82" y="35" fill="#C53030" fontSize="6" fontWeight="bold">Окна: продувание</text>
                        <text x="130" y="35" fill="#C53030" fontSize="6" fontWeight="bold">Стены: уклон</text>
                        <text x="45" y="70" fill="#1B8738" fontSize="7" fontWeight="bold">Смета Минстроя РФ</text>
                        <text x="135" y="70" fill="#10273B" fontSize="6" fontWeight="bold">+ Штраф 50%</text>
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
          { text: 'Привлечение аттестованных судебных экспертов НОПРИЗ.' },
          { text: 'Составление сметы по официальным нормативам Минстроя РФ.' },
          { text: 'Взыскание обоснованной стоимости устранения дефектов, положенного потребительского штрафа и экспертизы.' }
        ]}
      />

      {/* ═══ 2. ТИПИЧНЫЕ ДЕФЕКТЫ ═══ */}
      <section className="section bg-white" id="defects" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.25 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block' }}>
                Типичные дефекты квартир
              </span>
              <span className="hero-title-span-mobile" style={{ display: 'block' }}>
                в новостройках
              </span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Большинство дефектов не видны невооружённым глазом и выявляются только специальным поверенным оборудованием.
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '24px', marginBottom: '40px' }}>
            {[
              {
                tag: 'КРИВЫЕ СТЕНЫ',
                title: 'Отклонения стен и полов',
                desc: 'Отклонение геометрии стен от вертикали, неровности штукатурного слоя, трещины и пустоты полусухой стяжки.'
              },
              {
                tag: 'ОКОННЫЕ БЛОКИ',
                title: 'Оконные конструкции',
                desc: 'Продувание, деформация рам, отсутствие пароизоляционных лент по ГОСТ, царапины и окалины стеклопакетов.'
              },
              {
                tag: 'ВЕНТИЛЯЦИЯ И СЫРОСТЬ',
                title: 'Вентиляция и микроклимат',
                desc: 'Обратная тяга в вентканалах, промерзание межпанельных швов, повышенная влажность и появление грибка.'
              },
              {
                tag: 'ИНЖЕНЕРНЫЕ СЕТИ',
                title: 'Отопление и сантехника',
                desc: 'Течи фитингов разводки в стяжке, отсутствие теплоизоляции труб, нарушения в электрощитах и заземлении.'
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
                Не начинайте чистовой ремонт до проведения экспертизы!
              </h3>
              <p style={{ margin: '0', fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5, maxWidth: '640px' }}>
                После укладки плитки или ламината доказать наличие первоначальных дефектов стяжки и стен будет значительно сложнее. Вызовите эксперта для фиксации брака.
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <a 
                href="#form" 
                className="btn white-btn-custom" 
                style={{ display: 'inline-block', textAlign: 'center', fontSize: '15px' }}
              >
                Вызвать эксперта
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ЧТО МОЖНО ПОТРЕБОВАТЬ ОТ ЗАСТРОЙЩИКА ═══ */}
      <section className="section bg-white" style={{ padding: '70px 0 10px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '32px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(26px, 3.8vw, 34px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Что можно потребовать от застройщика
            </h2>
          </div>

          <div className="grid grid-4" style={{ gap: '20px' }}>
            {[
              {
                title: 'Устранение дефектов',
                desc: 'Бесплатно устранить обнаруженные недостатки.'
              },
              {
                title: 'Уменьшение цены',
                desc: 'Уменьшить цену квартиры.'
              },
              {
                title: 'Возмещение расходов',
                desc: 'Возместить обоснованные расходы на ремонт.'
              },
              {
                title: 'Расторжение договора',
                desc: 'При существенных недостатках — расторгнуть ДДУ и вернуть деньги.'
              }
            ].map((req, idx) => (
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
                  {req.title}
                </div>
                <div style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                  {req.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. ЭТАПЫ РАБОТЫ ═══ */}
      <section className="section" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
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
                <h2 className="nowrap-desk" style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontFamily: 'var(--font-serif)', color: '#FFFFFF', margin: 0, lineHeight: 1.25 }}>
                  Как получить компенсацию за строительный брак
                </h2>
              </div>
            </div>

            <p style={{ margin: '0 0 28px 0', fontSize: '15px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, maxWidth: '820px' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block' }}>
                Последовательный юридический регламент от фиксации
              </span>
              <span className="hero-title-span-mobile" style={{ display: 'block' }}>
                нарушений до перечисления денег на ваш счёт.
              </span>
            </p>

            <div className="grid grid-2" style={{ gap: '22px', position: 'relative', zIndex: 1 }}>
              {[
                {
                  title: 'Инструментальная фиксация',
                  desc: 'Осмотр сертифицированным экспертом НОПРИЗ с использованием лазерных дальномеров, тепловизоров и анемометров.'
                },
                {
                  title: 'Дефектная ведомость и смета',
                  desc: 'Составление официальной сметы стоимости восстановительного ремонта с учётом рыночных цен материалов и работ.'
                },
                {
                  title: 'Претензия застройщику',
                  desc: 'Направление обоснованной претензии с требованием добровольного возмещения в установленный законом срок.'
                },
                {
                  title: 'Судебный процесс',
                  desc: 'Подача иска в суд, назначение судебной строительной экспертизы и защита выводов независимого эксперта.'
                },
                {
                  title: 'Положенный потребительский штраф',
                  desc: 'Взыскание штрафа за отказ добровольно возместить ущерб, морального вреда и неустойки по закону о защите прав потребителей.'
                },
                {
                  title: 'Исполнение и выплата',
                  desc: 'Предъявление исполнительного листа в банк застройщика и контроль зачисления денег на расчётный счёт дольщика.'
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
              Получить компенсацию за брак
            </a>
          </div>
        </div>
      </section>

      {/* ═══ 4. КЕЙСЫ ═══ */}
      <CasesBlock
        title="Примеры взыскания за дефекты"
        showDemoWarning={false}
        resultLabel="Результат"
        cases={cases}
      />

      {/* ═══ 5. ПРОЦЕСС РАБОТЫ ═══ */}
      <ProcessBlock
        title="Процесс работы с дефектами"
        subtitle="Пять шагов для получения денежной компенсации за строительные недостатки квартиры."
        steps={processSteps}
      />

      {/* ═══ 6. СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость услуг по недостаткам квартиры"
        subtitle="Прозрачная фиксация стоимости в договоре без скрытых доплат. Расходы на юриста и экспертизу взыскиваются с застройщика."
        tiers={pricingTiers}
      />

      {/* ═══ 7. ЧАСТЫЕ ВОПРОСЫ (FAQ) ═══ */}
      <FAQBlock
        faqs={faqs}
        title={<>Частые вопросы <br />по строительным недостаткам квартиры</>}
        subtitle="Разъяснения норм ст. 7 закона № 214-ФЗ, гарантийных сроков и судебной практики в Липецке."
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
                  Неустойка по ДДУ
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Взыскание неустойки за просрочку сдачи дома с компенсацией аренды жилья.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '15px', fontWeight: 600 }}>
                  Подробнее →
                </div>
              </div>
            </Link>

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
                  Выход из договора при существенных дефектах и возврат денег с эскроу-счёта.
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
                Взыщите стоимость устранения недостатков
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко опишите характер дефектов (стены, стяжка, окна, промерзание), подписан ли акт приёма-передачи и начат ли ремонт. Юрист подскажет порядок вызова эксперта.
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
                  commentPlaceholder="Опишите обнаруженные дефекты новостройки…" 
                  subtext="Если вы оставите заявку вечером или в выходной день, мы перезвоним в ближайший рабочий день."
                  hiddenFields={[{ name: 'service', value: 'Недостатки квартиры новостройки' }]} 
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
