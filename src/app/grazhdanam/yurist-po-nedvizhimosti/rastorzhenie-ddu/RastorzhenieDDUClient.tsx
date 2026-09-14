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
      title: 'Анализ документов',
      desc: 'Проверяем ДДУ, платежи, стадию строительства, банк эскроу и основания для расторжения.'
    },
    {
      num: '02',
      title: 'Выбор порядка',
      desc: 'Определяем процедуру: односторонний внесудебный отказ через Росреестр или судебный иск.'
    },
    {
      num: '03',
      title: 'Взаимодействие с банком',
      desc: 'Согласуем процедуру с банком-кредитором (при ипотеке) для безопасного закрытия кредита.'
    },
    {
      num: '04',
      title: 'Прекращение ДДУ',
      desc: 'Регистрируем расторжение договора в Росреестре и инициируем раскрытие счёта эскроу.'
    },
    {
      num: '05',
      title: 'Возврат денег и процентов',
      desc: 'Контролируем зачисление цены договора дольщику и взыскиваем законные проценты с застройщика.'
    }
  ];

  const pricingTiers = [
    {
      title: <>Правовой анализ ДДУ</>,
      subtitle: 'Оценка оснований',
      popular: false,
      price: 'от ХХХ ₽',
      features: [
        { name: 'Анализ условий выхода из договора', value: '✓' },
        { name: 'Проверка эскроу и рисков застройщика', value: '✓' },
        { name: 'Расчёт процентов за пользование деньгами', value: '✓' }
      ],
      buttonText: 'Оценить риски',
      buttonHref: '#form'
    },
    {
      title: <>Внесудебное расторжение</>,
      subtitle: 'Отказ через Росреестр',
      popular: true,
      badgeText: 'ВОСТРЕБОВАНО',
      price: 'от ХХХ ₽',
      features: [
        { name: 'Составление юридического отказа от ДДУ', value: '✓' },
        { name: 'Погашение записи в Росреестре', value: '✓' },
        { name: 'Взаимодействие с банком и возврат эскроу', value: '✓' }
      ],
      buttonText: 'Расторгнуть договор',
      buttonHref: '#form'
    },
    {
      title: <>Судебное расторжение ДДУ</>,
      subtitle: 'Ведение спора в суде',
      popular: false,
      price: 'от ХХХ ₽',
      features: [
        { name: 'Подготовка иска и доказательной базы', value: '✓' },
        { name: 'Представительство во всех заседаниях', value: '✓' },
        { name: 'Взыскание цены, процентов и штрафа 50%', value: '✓' }
      ],
      buttonText: 'Судебное расторжение',
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
        name: 'Расторжение ДДУ в Липецке',
        serviceType: 'Юридическая помощь при расторжении ДДУ',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        url: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/rastorzhenie-ddu/',
        description: 'Расторжение договора долевого участия в Липецке: проверим основания, подготовим отказ, соглашение или иск, возврат денег и сопровождение исполнения.'
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
        superTitle="Выход из договора долевого участия"
        title={<>Расторжение ДДУ <br />в Липецке</>}
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '560px', textWrap: 'balance' }}>
            Проверим основания для выхода из договора, обеспечим возврат 100% денег со счетов эскроу, закроем ипотеку и взыщем законные проценты с застройщика.
          </span>
        }
        primaryCtaText="Оценить расторжение ДДУ"
        primaryCtaLink="#form"
        primaryCtaAnalytics="ddu_termination_hero_click"
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
                      <span style={{ fontSize: '4px', fontWeight: 'bold', color: 'rgba(23,50,77,0.4)', fontFamily: 'var(--font-serif)' }}>ОТКАЗ ОТ ДДУ</span>
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

      {/* ═══ 2. ОСНОВАНИЯ ДЛЯ РАСТОРЖЕНИЯ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
            <span className="badge badge-gold" style={{ marginBottom: '16px' }}>ЗАКОННЫЕ ОСНОВАНИЯ</span>
            <h2 className="section-title">Когда можно законно выйти из ДДУ</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Федеральный закон № 214-ФЗ строго регламентирует случаи, когда дольщик вправе забрать деньги без финансовых потерь.
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '24px' }}>
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

      {/* ═══ 3. ТРИ СПОСОБА ПРЕКРАТИТЬ ДОГОВОР ═══ */}
      <section className="section" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
            <span className="badge badge-gold" style={{ marginBottom: '16px' }}>ПРОЦЕДУРА ВЫХОДА</span>
            <h2 className="section-title">Три способа расторгнуть договор ДДУ</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Выбираем наиболее быстрый и финансово безопасный маршрут исходя из фактических обстоятельств стройки.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {[
              {
                num: '01',
                title: 'Односторонний отказ',
                desc: 'Применяется при просрочке свыше 2 месяцев. Не требует согласия застройщика и суда. Договор прекращается с даты направления уведомления.'
              },
              {
                num: '02',
                title: 'Соглашение сторон',
                desc: 'Добровольное расторжение по соглашению. Важно зафиксировать точные сроки возврата денег, отсутствие штрафов и размер компенсации.'
              },
              {
                num: '03',
                title: 'Судебное расторжение',
                desc: 'Необходимо при существенном изменении проекта, отказе застройщика признавать дефекты или споре по сумме процентов.'
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
        title="Примеры расторжения ДДУ"
        showDemoWarning={false}
        resultLabel="Результат"
        cases={cases}
      />

      {/* ═══ 5. ПРОЦЕСС РАБОТЫ ═══ */}
      <ProcessBlock
        title="Как проходит расторжение"
        subtitle="Пять этапов возврата средств со счёта эскроу и взыскания процентов."
        steps={processSteps}
      />

      {/* ═══ 6. СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость услуг по расторжению ДДУ"
        subtitle="Фиксированные тарифы без скрытых платежей. Проценты за пользование средствами и судебные издержки возлагаются на застройщика."
        tiers={pricingTiers}
      />

      {/* ═══ 7. ЧАСТЫЕ ВОПРОСЫ (FAQ) ═══ */}
      <FAQBlock
        faqs={faqs}
        title={<>Ответы на частые вопросы <br />по расторжению договоров ДДУ</>}
        subtitle="Юридические правила возврата денег со счетов эскроу, погашения ипотеки и защиты прав дольщиков."
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
                Оцените перспективы выхода из ДДУ
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '32px' }}>
                Укажите причину расторжения, срок просрочки, привлекалась ли ипотека и статус счёта эскроу. Мы проанализируем договор и предложим безопасную схему возврата ваших денег.
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
                  Пн–Пт с 9:00 до 18:00. Принимаем документы на анализ дистанционно.
                </p>
              </div>
            </div>

            <div>
              <ContactsForm title="Написать нам" subtitle="" buttonText="Оставить заявку" commentPlaceholder="Кратко опишите ситуацию по недвижимости…" hiddenFields={[{ name: 'service', value: 'Расторжение ДДУ' }]} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
