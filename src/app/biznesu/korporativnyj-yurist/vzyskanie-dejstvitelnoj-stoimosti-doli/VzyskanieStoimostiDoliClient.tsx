'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import ProcessBlock, { ProcessStep } from '@/components/ProcessBlock';
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

  const processSteps: ProcessStep[] = [
    {
      num: '01',
      title: 'Финансово-правовой анализ баланса',
      desc: 'Изучаем бухгалтерскую отчетность на дату окончания отчетного периода, предшествующего дню подачи заявления о выходе.'
    },
    {
      num: '02',
      title: 'Предварительная рыночная оценка активов',
      desc: 'Привлекаем независимых оценщиков для определения реальной рыночной стоимости недвижимости, техники и нематериальных активов.'
    },
    {
      num: '03',
      title: 'Претензия и обеспечительные меры',
      desc: 'Направляем мотивированную претензию с расчетом, а при отсутствии выплаты подаем иск в суд с ходатайством об аресте счетов общества.'
    },
    {
      num: '04',
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
        title={<><span style={{ display: 'inline-block' }}>Примеры дел</span> <br /><span style={{ display: 'inline-block' }}>по взысканию стоимости доли</span></>}
        cases={practiceCases}
        showAllLink="/praktika"
        showAllText="Смотреть всю практику →"
      />

      {/* ═══ БЛОК 6: КАК ПРОХОДИТ РАБОТА (ПОРЯДОК РАБОТЫ) ═══ */}
      <ProcessBlock
        title={<><span style={{ display: 'inline-block' }}>Порядок работы</span> <br /><span style={{ display: 'inline-block' }}>по взысканию стоимости доли</span></>}
        subtitle="От независимой оценки активов до фактического зачисления денежных средств на ваш счет."
        steps={processSteps}
        ctaTitle="Общество не платит или занизило выплату за долю?"
        ctaSubtitle="Рассчитаем реальную рыночную стоимость ваших чистых активов и защитим интересы в суде."
        ctaButtonText="Рассчитать стоимость доли"
        ctaButtonHref="#form"
      />

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

      {/* ═══ БЛОК 9: СМЕЖНЫЕ НАПРАВЛЕНИЯ ПРАКТИКИ ДЛЯ БИЗНЕСА (ПО ШАБЛОНУ) ═══ */}
      <section className="section bg-light" id="related-services" style={{ padding: '64px 0', background: 'var(--gradient-cream)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '840px', marginBottom: '36px', textAlign: 'left' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '10px'
            }}>
              Смежные направления практики для бизнеса
            </div>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 3.5vw, 34px)', color: 'var(--color-deep-blue)', marginBottom: '14px', marginTop: 0, lineHeight: 1.25 }}>
              <span style={{ display: 'inline-block' }}>Другие корпоративные</span> <br /><span style={{ display: 'inline-block' }}>задачи и споры</span>
            </h2>
            <p style={{ fontSize: '15.5px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.65, margin: 0, textWrap: 'balance' }}>
              Юридические услуги для участников и бизнеса при изменении состава собственников.
            </p>
          </div>

          <div className={relatedServices.length === 4 ? "grid grid-4" : "grid grid-3"} style={{ gap: '20px', marginBottom: '28px' }}>
            {relatedServices.map((rel, idx) => (
              <Link key={idx} href={rel.link} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                <div
                  className="card related-service-card hover-lift"
                  style={{
                    height: '100%',
                    minHeight: '180px',
                    padding: '26px 24px',
                    background: 'var(--color-white)',
                    border: '1px solid var(--color-border)',
                    borderTop: '3px solid var(--color-primary)',
                    borderRadius: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div>
                    <h3 style={{ margin: '0 0 10px 0', fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', lineHeight: 1.35, fontWeight: 700 }}>
                      {rel.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                      {rel.desc}
                    </p>
                  </div>
                  <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13.5px', fontWeight: 600, marginTop: '18px', transition: 'color 0.35s ease' }}>
                    <span>Подробнее об услуге</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 10: ФИНАЛЬНАЯ ФОРМА (СВЯЗАТЬСЯ С НАМИ) — ШАБЛОН ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px', padding: '80px 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  Связаться с нами
                </span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Получите первичную</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>оценку ситуации</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко опишите ситуацию и оставьте контакты. Юрист изучит первичные документы и свяжется с вами для обсуждения правовой задачи.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация юриста</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните прямо сейчас: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (4742) 20-15-25</a>
                </p>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '6px' }}>
                  Липецк, ул. Советская, д. 35, офис 213 (приём по записи)
                </div>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Конфиденциальность:</strong>
                Не указывайте в форме конфиденциальные данные, коммерческую тайну и закрытые документы. Документы можно передать юристу после согласования защищённого способа связи.
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Написать нам"
                subtitle={
                  <>
                    <span style={{ display: 'inline-block' }}>Оставьте имя и номер телефона. Юрист свяжется с вами</span> <br />
                    <span style={{ display: 'inline-block' }}>в течение 15 минут в рабочее время.</span>
                  </>
                }
                subtext={
                  <>
                    <span style={{ display: 'inline-block' }}>Если вы оставите заявку вечером или в&nbsp;выходной день,</span> <br />
                    <span style={{ display: 'inline-block' }}>мы перезвоним в&nbsp;ближайший рабочий день.</span>
                  </>
                }
                buttonText="Рассчитать стоимость доли"
                commentPlaceholder="Кратко опишите ситуацию: размер доли, выплаченная сумма или отказ в выплате…"
                hiddenFields={[
                  { name: 'source_page', value: '/biznesu/korporativnyj-yurist/vzyskanie-dejstvitelnoj-stoimosti-doli/' },
                  { name: 'service', value: 'Взыскание действительной стоимости доли' }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
