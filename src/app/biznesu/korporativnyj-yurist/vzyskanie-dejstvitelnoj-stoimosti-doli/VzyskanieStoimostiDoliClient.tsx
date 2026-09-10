'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import PricingBlock, { PricingTier } from '@/components/PricingBlock';
import SpecialistBlock from '@/components/SpecialistBlock';

export default function VzyskanieStoimostiDoliClient() {
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
        '@id': 'https://dejure-help.ru/biznesu/korporativnyj-yurist/vzyskanie-dejstvitelnoj-stoimosti-doli/#service',
        name: 'Взыскание действительной стоимости доли в Липецке',
        serviceType: 'Взыскание действительной стоимости доли вышедшего участника ООО',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        description: 'Помощь при невыплате или занижении действительной стоимости доли ООО: анализ расчёта и активов, оценка, претензия, переговоры и судебное взыскание.'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/biznesu/korporativnyj-yurist/vzyskanie-dejstvitelnoj-stoimosti-doli/#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
          { '@type': 'ListItem', position: 2, name: 'Бизнесу', item: 'https://dejure-help.ru/biznesu/' },
          { '@type': 'ListItem', position: 3, name: 'Корпоративный юрист', item: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/' },
          { '@type': 'ListItem', position: 4, name: 'Взыскание стоимости доли', item: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/vzyskanie-dejstvitelnoj-stoimosti-doli/' }
        ]
      }
    ]
  };

  const situations = [
    {
      tag: 'Полный отказ в выплате',
      title: <>Общество игнорирует требование <br />и не выплачивает деньги</>,
      desc: 'Прошло более 3 месяцев с момента выхода, однако руководство не выходит на связь и уклоняется от выплаты действительной стоимости доли.'
    },
    {
      tag: 'Занижение по балансу',
      title: <>Расчет произведен <br />по заниженной балансовой стоимости</>,
      desc: 'Недвижимость, земля, транспорт и оборудование учтены с огромной амортизацией по остаточной стоимости вместо реальной рыночной цены.'
    },
    {
      tag: 'Скрытие активов',
      title: <>Перед выходом участника <br />активы были выведены</>,
      desc: 'Руководство искусственно создало фиктивную кредиторскую задолженность или продало имущество аффилированным лицам для уменьшения чистых активов.'
    },
    {
      tag: 'Сокрытие бухгалтерии',
      title: <>Отказ в предоставлении <br />бухгалтерского баланса и первички</>,
      desc: 'Бывшему участнику не предоставляют расчет чистых активов и первичные учетные документы, на основании которых рассчитана выплата.'
    },
    {
      tag: 'Выплата неликвидным имуществом',
      title: <>Навязывание имущества <br />вместо денежных средств</>,
      desc: 'Общество пытается выдать неликвидный товар или имущество по завышенной оценке без согласия вышедшего участника.'
    },
    {
      tag: 'Проценты за задержку',
      title: <>Взыскание процентов по ст. 395 ГК РФ <br />за период просрочки</>,
      desc: 'Начисление законных процентов за пользование чужими денежными средствами за весь период незаконной задержки выплаты.'
    }
  ];

  const whatAffectsPrice = [
    {
      title: 'Рыночная стоимость чистых активов (СЧА)',
      desc: 'Судебная практика ВС РФ однозначно указывает: действительная стоимость доли должна рассчитываться исходя из рыночной, а не балансовой стоимости имущества.'
    },
    {
      title: 'Рыночная переоценка недвижимости',
      desc: 'Здания, земельные участки и производственные комплексы часто числятся на балансе по ценам 10-летней давности, занижая стоимость доли в 3–10 раз.'
    },
    {
      title: 'Оценка дебиторской задолженности',
      desc: 'Проверка реальности дебиторской задолженности покупателей и заказчиков для включения ее в расчет чистых активов общества.'
    },
    {
      title: 'Оспаривание фиктивных долгов',
      desc: 'Выявление и признание недействительными договоров займов и поручительств, искусственно созданных директором перед выходом участника.'
    },
    {
      title: 'Судебная экспертиза',
      desc: 'Назначение независимой судебной финансово-экономической и оценочной экспертизы в Арбитражном суде Липецкой области.'
    },
    {
      title: 'Обеспечительные меры (арест счетов)',
      desc: 'Наложение ареста на денежные средства и имущество общества в пределах цены иска для гарантии реального взыскания денег.'
    }
  ];

  const practiceCases: CaseData[] = [
    {
      category: 'Рыночная оценка',
      title: 'Увеличение выплаты действительной стоимости доли с 400 тыс. ₽ до 9,6 млн ₽',
      problem: 'После выхода из аграрного предприятия участнику с долей 25% выплатили 400 000 ₽ на основании данных баланса. Реальный имущественный комплекс включал 12 единиц сельхозтехники и элеватор.',
      action: 'Подали иск в Арбитражный суд, истребовали первичные документы и добились назначения судебной экспертизы рыночной стоимости чистых активов.',
      result: 'Суд установил рыночную стоимость чистых активов в размере 38,4 млн ₽ и взыскал в пользу клиента 9,6 млн ₽ стоимости доли плюс 820 тыс. ₽ процентов.'
    },
    {
      category: 'Оспаривание вывода активов',
      title: 'Взыскание 18,2 млн ₽ с признанием недействительными фиктивных займов директора',
      problem: 'Генеральный директор за месяц до выхода соучредителя оформил фиктивные договоры займа на 30 млн ₽ с подконтрольной фирмой, обнулив чистые активы.',
      action: 'Доказали безденежность и притворный характер займов, добились признания сделок недействительными и исключения мнимых обязательств из расчета СЧА.',
      result: 'Арбитражный суд Липецкой области полностью удовлетворил иск и взыскал 18,2 млн ₽ действительной стоимости доли.'
    },
    {
      category: 'Досудебное соглашение',
      title: 'Взыскание 6,5 млн ₽ через досудебную претензию с угрозой обеспечительных мер',
      problem: 'Торговая компания уклонялась от выплаты 6,5 млн ₽ вышедшему партнеру, ссылаясь на кассовый разрыв.',
      action: 'Подготовили мотивированную претензию с проектом иска, расчетом процентов по ст. 395 ГК РФ и заявлением об аресте счетов общества.',
      result: 'Руководство компании согласилось на мировое урегулирование и выплатило всю сумму двумя траншами в течение 20 дней.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Финансово-правовой анализ баланса',
      desc: 'Изучаем бухгалтерскую отчетность на дату окончания отчетного периода, предшествующего дню подачи заявления о выходе.'
    },
    {
      step: '02',
      title: 'Предварительная рыночная оценка активов',
      desc: 'Привлекаем независимых оценщиков для определения реальной рыночной стоимости недвижимости, техники и нематериальных активов.'
    },
    {
      step: '03',
      title: 'Претензия и обеспечительные меры',
      desc: 'Направляем мотивированную претензию с расчетом, а при отсутствии выплаты подаем иск в суд с ходатайством об аресте счетов общества.'
    },
    {
      step: '04',
      title: 'Судебная экспертиза и получение денег',
      desc: 'Сопровождаем судебную экспертизу в арбитраже, получаем исполнительный лист и взыскиваем средства через банк или ФССП.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Экспресс-аудит расчета и активов',
      subtitle: 'Оценка перспектив увеличения выплаты',
      popular: false,
      price: 'от 15 000 ₽',
      features: [
        { name: 'Анализ бухгалтерского баланса общества', value: 'Включено' },
        { name: 'Предварительный расчет рыночной СЧА', value: 'Включено' },
        { name: 'Правовое заключение о сумме недоплаты', value: 'Включено' },
        { name: 'Подготовка досудебной претензии', value: 'Включено' }
      ],
      buttonText: 'Заказать аудит расчета',
      buttonHref: '#form'
    },
    {
      title: 'Судебное взыскание под ключ',
      subtitle: 'Полное ведение дела в Арбитражном суде',
      popular: true,
      badgeText: 'Максимальный результат',
      price: 'от 55 000 ₽',
      features: [
        { name: 'Подготовка иска и обеспечительных мер (арест)', value: 'Включено' },
        { name: 'Организация судебной рыночной экспертизы', value: 'Включено' },
        { name: 'Представительство во всех судебных заседаниях', value: 'Включено' },
        { name: 'Взыскание процентов по ст. 395 ГК РФ и расходов', value: 'Включено' }
      ],
      buttonText: 'Взыскать стоимость доли',
      buttonHref: '#form'
    },
    {
      title: 'Сложные споры с выводом активов',
      subtitle: 'Оспаривание мнимых сделок и займов',
      popular: false,
      price: 'от 85 000 ₽',
      features: [
        { name: 'Оспаривание фиктивных обязательств директора', value: 'Включено' },
        { name: 'Возврат выведенного имущества в конкурсную массу/СЧА', value: 'Включено' },
        { name: 'Привлечение руководства к субсидиарной ответственности', value: 'Включено' },
        { name: 'Исполнение решения через банки и приставов', value: 'Включено' }
      ],
      buttonText: 'Защитить активы и взыскать',
      buttonHref: '#form'
    }
  ];

  const faqs = [
    {
      q: 'На какую дату рассчитывается действительная стоимость доли?',
      a: 'Действительная стоимость доли определяется по данным бухгалтерской отчетности общества за последний отчетный период, предшествующий дню подачи заявления о выходе из общества (обычно это 31 декабря предыдущего года или предшествующий квартал).'
    },
    {
      q: 'Почему балансовая стоимость отличается от действительной рыночной стоимости?',
      a: 'Бухгалтерский баланс учитывает основные средства по остаточной стоимости с учетом амортизации, а недвижимость и землю — по исторической стоимости приобретения. В суде действительная стоимость рассчитывается на основе рыночной оценки всех активов на дату выхода.'
    },
    {
      q: 'Какой срок исковой давности по спорам о выплате действительной стоимости доли?',
      a: 'Срок исковой давности составляет 3 года со дня, когда общество должно было выплатить действительную стоимость доли (по общему правилу — по истечении 3 месяцев со дня выхода участника).'
    },
    {
      q: 'Можно ли взыскать проценты за задержку выплаты стоимости доли?',
      a: 'Да. За весь период просрочки выплаты подлежат начислению и взысканию проценты за пользование чужими денежными средствами по ст. 395 ГК РФ по ключевой ставке Банка России.'
    }
  ];

  const relatedServices = [
    {
      title: 'Выход участника из ООО',
      desc: 'Оформление заявления о выходе у нотариуса.',
      link: '/biznesu/korporativnyj-yurist/vyhod-uchastnika-iz-ooo/'
    },
    {
      title: 'Корпоративные споры',
      desc: 'Защита при корпоративных конфликтах и убытках директора.',
      link: '/biznesu/korporativnyj-yurist/korporativnye-spory-mezhdu-uchastnikami/'
    },
    {
      title: 'Сделки с долями ООО',
      desc: 'Купля-продажа доли вместо выхода.',
      link: '/biznesu/korporativnyj-yurist/sdelki-s-dolyami-ooo/'
    },
    {
      title: 'Защита корпоративного контроля',
      desc: 'Предотвращение вывода активов компании.',
      link: '/biznesu/korporativnyj-yurist/zashchita-korporativnogo-kontrolya/'
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />
      <Header />

      {/* ═══ БЛОК 1: HERO ═══ */}
      <MilitaryHero
        breadcrumbs={
          <>
            <Link href="/">Главная</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/biznesu/">Бизнесу</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/biznesu/korporativnyj-yurist/">Корпоративный юрист</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Взыскание стоимости доли</span>
          </>
        }
        superTitle={
          <span style={{ whiteSpace: 'normal', display: 'inline-block', lineHeight: 1.4 }}>
            <span style={{ display: 'inline-block' }}>РЫНОЧНАЯ ОЦЕНКА И СУДЕБНОЕ ВЗЫСКАНИЕ •</span> <br />
            <span style={{ display: 'inline-block' }}>Липецк и Арбитражный суд</span>
          </span>
        }
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Взыскание стоимости доли ООО
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Защита прав вышедшего участника ООО: независимая рыночная оценка чистых активов, оспаривание заниженных расчетов, обеспечительные аресты счетов и взыскание в Арбитражном суде.
          </span>
        }
        primaryCtaText="Рассчитать реальную стоимость доли"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_corp_vzyskanie"
        primaryCtaSubtext={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Перезвоним в рабочее время
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              или ответим по телефону: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (4742) 20-15-25</a>
            </span>
          </span>
        }
        imageUrl="/images/nacheshnikov.jpg"
        imageName="Владимир Викторович Начешников"
        imageSubtitle="Специалист по корпоративным процедурам, куратор направления"
        imageObjectPosition="center 15%"
        trustItems={[
          {
            text: (
              <span>
                <strong>Практический опыт с 1997 года</strong> в сопровождении корпоративных процедур
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Полная конфиденциальность</strong> и защита коммерческой тайны бизнеса
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Арбитражный суд Липецкой области</strong> и арбитражные суды РФ
              </span>
            )
          }
        ]}
      />

      {/* ═══ БЛОК 2: ТИПОВЫЕ СИТУАЦИИ / КОНФЛИКТЫ ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'inline-block' }}>Типовые споры о выплате</span> <br />
              <span style={{ display: 'inline-block' }}>стоимости доли в ООО</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              В большинстве случаев общество существенно занижает размер выплаты или полностью уклоняется от перечисления средств.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '32px' }}>
            {situations.map((sit, idx) => (
              <div
                key={idx}
                className="hover-lift"
                style={{
                  padding: '36px 30px',
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.06, pointerEvents: 'none' }}>
                  <svg width="100" height="100" viewBox="0 0 24 24" fill="var(--color-deep-blue)">
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>

                <div style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: 'var(--color-gold)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '14px',
                  background: 'rgba(193, 160, 102, 0.1)',
                  padding: '4px 10px',
                  alignSelf: 'flex-start',
                  display: 'inline-block',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {sit.tag}
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '20px',
                  fontWeight: 600,
                  color: 'var(--color-deep-blue)',
                  margin: '0 0 14px 0',
                  lineHeight: 1.35,
                  position: 'relative',
                  zIndex: 1
                }}>
                  {sit.title}
                </h3>

                <p style={{
                  fontSize: '15px',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.6,
                  margin: 0,
                  position: 'relative',
                  zIndex: 1
                }}>
                  {sit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: ИЗ ЧЕГО СКЛАДЫВАЕТСЯ СТОИМОСТЬ ═══ */}
      <section className="section bg-white" id="valuation">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 50px auto' }}>
            <h2 className="section-title" style={{ marginBottom: '16px' }}>
              Что влияет на действительную стоимость доли
            </h2>
            <p className="section-subtitle" style={{ color: 'var(--color-text-secondary)', margin: '0 auto' }}>
              Рыночная оценка чистых активов компании — главный инструмент справедливой выплаты вышедшему участнику.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            {whatAffectsPrice.map((item, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  padding: '32px 26px',
                  backgroundColor: 'var(--color-bg-light)',
                  border: '1px solid var(--color-border)'
                }}
              >
                <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', marginBottom: '12px', lineHeight: 1.4 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: КУРАТОР ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Владимир Викторович Начешников"
        position="Специалист по корпоративным процедурам и сопровождению бизнеса, куратор направления"
        imageUrl="/images/nacheshnikov.jpg"
        imagePosition="center 15%"
        profileHref="/specialisty/nacheshnikov-vladimir-viktorovich/"
        profileText="Подробнее о Владимире Викторовиче Начешникове →"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Споры о действительной стоимости доли требуют синергии юридической и финансово-экономической экспертизы.
          </span>,
          <span key="2" style={{ color: 'var(--color-deep-blue)', display: 'block', marginTop: '12px' }}>
            Владимир Викторович с 1997 года курирует корпоративные споры и процедуры. В вопросах рыночной оценки и судебного представительства в Арбитражном суде Липецкой области работает совместно с профильными юристами и судебными экспертами.
          </span>
        ]}
        buttonText="Обсудить спор по стоимости доли"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 5: КЕЙСЫ ═══ */}
      <CasesBlock
        title="Примеры взыскания действительной стоимости доли"
        cases={practiceCases}
        showAllLink="/praktika"
        showAllText="Смотреть всю практику →"
      />

      {/* ═══ БЛОК 6: КАК ПРОХОДИТ РАБОТА ═══ */}
      <section className="section bg-light" id="process">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 50px auto' }}>
            <h2 className="section-title" style={{ marginBottom: '16px' }}>
              Порядок работы по взысканию стоимости доли
            </h2>
            <p className="section-subtitle" style={{ color: 'var(--color-text-secondary)', margin: '0 auto' }}>
              От независимой оценки активов до фактического зачисления денежных средств на ваш счет.
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '24px' }}>
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  padding: '32px 24px',
                  backgroundColor: 'var(--color-white)',
                  border: '1px solid var(--color-border)'
                }}
              >
                <div style={{ fontSize: '36px', fontWeight: 800, color: 'var(--color-primary)', opacity: 0.25, fontFamily: 'var(--font-serif)', marginBottom: '16px', lineHeight: 1 }}>
                  {step.step}
                </div>
                <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', marginBottom: '12px', lineHeight: 1.4 }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div style={{ marginTop: '48px' }}>
            <div
              className="card service-card cta-banner-card"
              style={{
                padding: '32px 36px',
                background: 'var(--color-deep-blue)',
                borderTop: '3px solid var(--color-gold)',
                boxShadow: '0 8px 16px rgba(16, 39, 59, 0.28)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '24px'
              }}
            >
              <div>
                <h3 style={{ color: 'var(--color-white)', fontSize: '22px', marginBottom: '8px' }}>
                  Общество не платит или занизило выплату за долю?
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '15px', margin: 0 }}>
                  Рассчитаем реальную рыночную стоимость ваших чистых активов и защитим интересы в суде.
                </p>
              </div>
              <a href="#form" className="btn white-btn-custom">
                Рассчитать стоимость доли
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 7: ТАРИФЫ ═══ */}
      <PricingBlock
        title="Стоимость помощи по спору о действительной стоимости доли"
        subtitle="Прозрачное ценообразование. Судебные расходы взыскиваются с общества-ответчика."
        tiers={pricingTiers}
        ctaTitle="Рассчитаем стоимость защиты ваших прав"
        ctaSubtitle="Оставьте заявку — куратор направления проведет предварительный анализ бухгалтерского баланса."
        ctaButtonText="Рассчитать стоимость"
        ctaButtonLink="#form"
      />

      {/* ═══ БЛОК 8: FAQ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы"
        title="Частые вопросы о действительной стоимости доли"
        subtitle="Разъяснения судебных юристов по определению стоимости чистых активов и взысканию выплат."
        faqs={faqs}
      />

      {/* ═══ БЛОК 9: СВЯЗАННЫЕ УСЛУГИ ═══ */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 40px auto' }}>
            <h2 className="section-title" style={{ marginBottom: '12px' }}>
              Другие корпоративные задачи
            </h2>
            <p className="section-subtitle" style={{ color: 'var(--color-text-secondary)', margin: '0 auto' }}>
              Юридические услуги для участников и бизнеса в Липецке.
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '20px' }}>
            {relatedServices.map((rel, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  padding: '24px 20px',
                  backgroundColor: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <h3 style={{ fontSize: '17px', color: 'var(--color-deep-blue)', marginBottom: '10px' }}>
                    <Link href={rel.link} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {rel.title}
                    </Link>
                  </h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: '16px' }}>
                    {rel.desc}
                  </p>
                </div>
                <Link href={rel.link} style={{ fontSize: '13.5px', color: 'var(--color-primary)', fontWeight: 600 }}>
                  Перейти к услуге →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 10: ФИНАЛЬНАЯ ФОРМА ═══ */}
      <ContactsForm
        title="Проверьте расчёт до истечения срока исковой давности"
        subtitle="Оставьте заявку на бесплатный экспресс-анализ. Оценим бухгалтерский баланс и определим перспективы взыскания реальной суммы."
        hiddenFields={[{ name: 'service', value: 'Взыскание действительной стоимости доли' }]}
      />

      <Footer />
    </>
  );
}
