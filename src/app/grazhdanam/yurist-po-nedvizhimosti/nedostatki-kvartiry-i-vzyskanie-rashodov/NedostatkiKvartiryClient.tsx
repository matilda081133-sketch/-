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
      title: 'Фиксация дефектов',
      desc: 'Осматриваем квартиру с сертифицированным специалистом реестра НОПРИЗ/НОСТРОЙ, составляем акт осмотра.'
    },
    {
      num: '02',
      title: 'Сметный расчёт',
      desc: 'Эксперт рассчитывает полную рыночную стоимость восстановительных строительных и отделочных работ.'
    },
    {
      num: '03',
      title: 'Досудебная претензия',
      desc: 'Направляем застройщику мотивированное требование с приложением экспертного заключения и сметы.'
    },
    {
      num: '04',
      title: 'Судебный процесс',
      desc: 'Представляем интересы в суде, участвуем в судебной экспертизе, обосновываем расчёт и парируем возражения.'
    },
    {
      num: '05',
      title: 'Взыскание средств',
      desc: 'Получаем исполнительный лист, направляем его в банк застройщика и контролируем поступление денег на счёт.'
    }
  ];

  const pricingTiers = [
    {
      title: <>Организация экспертизы</>,
      subtitle: 'Фиксация брака',
      popular: false,
      price: 'от ХХХ ₽',
      features: [
        { name: 'Выезд эксперта реестра НОПРИЗ', value: '✓' },
        { name: 'Инструментальное обследование квартиры', value: '✓' },
        { name: 'Официальный акт со сметой расходов', value: '✓' }
      ],
      buttonText: 'Вызвать эксперта',
      buttonHref: '#form'
    },
    {
      title: <>Претензия и досудебный этап</>,
      subtitle: 'Досудебное урегулирование',
      popular: false,
      price: 'от ХХХ ₽',
      features: [
        { name: 'Анализ условий гарантии по ДДУ', value: '✓' },
        { name: 'Составление мотивированной претензии', value: '✓' },
        { name: 'Переговоры с представителями застройщика', value: '✓' }
      ],
      buttonText: 'Составить претензию',
      buttonHref: '#form'
    },
    {
      title: <>Взыскание через суд под ключ</>,
      subtitle: 'Судебное ведение спора',
      popular: true,
      badgeText: 'ВОСТРЕБОВАНО',
      price: 'от ХХХ ₽',
      features: [
        { name: 'Подготовка иска и доказательной базы', value: '✓' },
        { name: 'Представительство во всех заседаниях', value: '✓' },
        { name: 'Взыскание сметы, штрафа 50% и экспертизы', value: '✓' }
      ],
      buttonText: 'Взыскать под ключ',
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
        name: 'Недостатки квартиры от застройщика в Липецке',
        serviceType: 'Взыскание расходов на устранение строительных дефектов',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        url: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/nedostatki-kvartiry-i-vzyskanie-rashodov/',
        description: 'Помощь при недостатках квартиры от застройщика в Липецке: оценим документы и дефекты, подготовим требование, взыщем расходы или уменьшение цены.'
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
            name: 'Недостатки квартиры и взыскание расходов',
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
        superTitle="Защита дольщика при строительных дефектах"
        title={<>Недостатки квартиры от застройщика: <br />взыскание расходов в Липецке</>}
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '560px', textWrap: 'balance' }}>
            Организуем фиксацию дефектов сертифицированным экспертом НОПРИЗ, составим сметный расчёт, проведём досудебную претензию и взыщем полную стоимость ремонта через суд.
          </span>
        }
        primaryCtaText="Оценить стоимость устранения"
        primaryCtaLink="#form"
        primaryCtaAnalytics="defects_hero_click"
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
                      <span style={{ fontSize: '4px', fontWeight: 'bold', color: 'rgba(23,50,77,0.4)', fontFamily: 'var(--font-serif)' }}>ДЕФЕКТНЫЙ АКТ</span>
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

      {/* ═══ 2. ТИПЫ ДЕФЕКТОВ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
            <span className="badge badge-gold" style={{ marginBottom: '16px' }}>ТИПИЧНЫЙ БРАК</span>
            <h2 className="section-title">С какими недостатками мы помогаем</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Любые отступления от строительных норм (СП, ГОСТ, СНиП) и условий проектной декларации подлежат компенсации за счёт застройщика.
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '24px' }}>
            {[
              {
                tag: 'ГЕОМЕТРИЯ И СТЕНЫ',
                title: 'Кривизна стен и перегородок',
                desc: 'Отклонения от вертикали, неровности штукатурки, трещины в кладке и пустоты под отделочным слоем.'
              },
              {
                tag: 'ПОЛ И СТЯЖКА',
                title: 'Дефекты стяжки пола',
                desc: 'Перепады высот, бухтение стяжки, растрескивание, нарушение технологии полусухой заливки и гидроизоляции.'
              },
              {
                tag: 'ОКНА И ДВЕРИ',
                title: 'Продувание оконных блоков',
                desc: 'Деформация рам, отсутствие прижима, продувание монтажных швов, трещины стеклопакетов и царапины профиля.'
              },
              {
                tag: 'ТЕПЛО И ВЕНТИЛЯЦИЯ',
                title: 'Промерзание и плесень',
                desc: 'Мостики холода на стыках плит, промерзание углов, обратная тяга вентиляции и сырость в жилых комнатах.'
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
            <span className="badge badge-gold" style={{ marginBottom: '16px' }}>ПЛАН ВЗЫСКАНИЯ</span>
            <h2 className="section-title">Что сделает юрист «Де-Юре» по дефектам новостройки</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Формируем неопровержимую доказательную базу, чтобы исключить затягивание спора и отказ суда.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {[
              {
                num: '01',
                title: 'Осмотр с экспертом',
                desc: 'Привлекаем аттестованного специалиста из национального реестра НОПРИЗ/НОСТРОЙ для инструментального обследования.'
              },
              {
                num: '02',
                title: 'Составление дефектного акта',
                desc: 'Фиксируем все нарушения СП и ГОСТ с приложением поверочных сертификатов измерительных приборов.'
              },
              {
                num: '03',
                title: 'Сметный расчёт',
                desc: 'Рассчитываем полную сметную стоимость ремонтно-восстановительных работ по официальным расценкам региона.'
              },
              {
                num: '04',
                title: 'Досудебная претензия',
                desc: 'Направляем застройщику мотивированное требование о выплате с установлением предусмотренного законом срока.'
              },
              {
                num: '05',
                title: 'Защита в суде',
                desc: 'Подаём иск, представляем экспертное заключение, участвуем в судебной экспертизе и требуем штраф 50%.'
              },
              {
                num: '06',
                title: 'Исполнение и выплата',
                desc: 'Получаем исполнительный лист и добиваемся фактического зачисления денежных средств на ваш счёт.'
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
        title="Примеры взыскания за дефекты"
        showDemoWarning={false}
        resultLabel="Результат"
        cases={cases}
      />

      {/* ═══ 5. ПРОЦЕСС РАБОТЫ ═══ */}
      <ProcessBlock
        title="Как проходит работа"
        subtitle="Пять шагов от фиксации дефектов до получения денежной компенсации."
        steps={processSteps}
      />

      {/* ═══ 6. СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость услуг по недостаткам квартиры"
        subtitle="Все понесённые расходы на проведение строительной экспертизы и юридическую помощь взыскиваются с застройщика."
        tiers={pricingTiers}
      />

      {/* ═══ 7. ЧАСТЫЕ ВОПРОСЫ (FAQ) ═══ */}
      <FAQBlock
        faqs={faqs}
        title={<>Ответы на частые вопросы <br />по строительным недостаткам</>}
        subtitle="Правила фиксации строительного брака, порядок взаимодействия с экспертами и судебная практика."
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
                Взыщите расходы на устранение брака
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '32px' }}>
                Опишите выявленные недостатки квартиры, подписан ли акт приёма-передачи и начат ли чистовой ремонт. Мы организуем осмотр экспертом и подготовим требования.
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
                  Пн–Пт с 9:00 до 18:00. Принимаем фото и акты дефектов на предварительный анализ.
                </p>
              </div>
            </div>

            <div>
              <ContactsForm title="Написать нам" subtitle="" buttonText="Оставить заявку" commentPlaceholder="Кратко опишите ситуацию по недвижимости…" hiddenFields={[{ name: 'service', value: 'Недостатки квартиры от застройщика' }]} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
