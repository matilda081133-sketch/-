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

export default function SdelkiSDolyamiClient() {
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
        '@id': 'https://dejure-help.ru/biznesu/korporativnyj-yurist/sdelki-s-dolyami-ooo/#service',
        name: 'Сопровождение сделок с долями ООО в Липецке',
        serviceType: 'Юридическое сопровождение купли-продажи и отчуждения долей ООО',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        description: 'Сопровождение продажи, покупки и дарения доли ООО: проверка устава и ограничений, оферта и согласия, договор, расчёты, нотариус и регистрация перехода.'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/biznesu/korporativnyj-yurist/sdelki-s-dolyami-ooo/#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
          { '@type': 'ListItem', position: 2, name: 'Бизнесу', item: 'https://dejure-help.ru/biznesu/' },
          { '@type': 'ListItem', position: 3, name: 'Корпоративный юрист', item: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/' },
          { '@type': 'ListItem', position: 4, name: 'Сделки с долями ООО', item: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/sdelki-s-dolyami-ooo/' }
        ]
      }
    ]
  };

  const situations = [
    {
      tag: 'Продажа доли третьему лицу',
      title: <>Продажа доли инвестору <br />или новому участнику</>,
      desc: 'Соблюдение преимущественного права других участников и самого общества, направление оферт, получение отказов и нотариат.'
    },
    {
      tag: 'Продажа между участниками',
      title: <>Перераспределение долей <br />внутри действующего состава</>,
      desc: 'Выкуп доли партнёра, оформление договора купли-продажи по упрощенной схеме без нарушения корпоративного баланса.'
    },
    {
      tag: 'Дарение доли',
      title: <>Безвозмездная передача доли <br />родственнику или партнеру</>,
      desc: 'Проверка запрета на дарение в уставе, налоговые последствия для одаряемого и оформление нотариального договора.'
    },
    {
      tag: 'Залог доли (финансирование)',
      title: <>Оформление залога доли <br />в обеспечение займа или кредита</>,
      desc: 'Подготовка договора залога с нотариальным удостоверением и внесением сведений об обременении в ЕГРЮЛ.'
    },
    {
      tag: 'Опционы на долю',
      title: <>Предоставление опциона на покупку <br />или продажу доли (Call / Put)</>,
      desc: 'Безотзывная оферта для инвесторов или топ-менеджеров с условием акцепта при наступлении определенных KPI или дат.'
    },
    {
      tag: 'Наследование доли',
      title: <>Вступление в права наследника <br />умершего участника ООО</>,
      desc: 'Проверка устава на необходимость получения согласия остальных участников на переход доли к наследникам.'
    }
  ];

  const whatWeCheck = [
    {
      title: 'Устав общества и ограничения',
      desc: 'Наличие прямого запрета на продажу долей третьим лицам, необходимость получения согласия общества или других участников.'
    },
    {
      title: 'Оплата доли продавцом',
      desc: 'Документальное подтверждение полной оплаты доли в уставном капитале (без этого сделка не может быть удостоверена нотариусом).'
    },
    {
      title: 'Соблюдение преимущественного права',
      desc: 'Корректность направления нотариальной оферты через общество, соблюдение 30-дневного срока и сбор нотариальных отказов.'
    },
    {
      title: 'Семейный статус и согласия супругов',
      desc: 'Проверка режима совместной собственности и оформление нотариального согласия супруга на покупку или продажу доли.'
    },
    {
      title: 'Обременения и аресты',
      desc: 'Проверка отсутствия залогов, судебных арестов или запретов на регистрационные действия в отношении доли в ЕГРЮЛ.'
    },
    {
      title: 'Корпоративные одобрения',
      desc: 'Оформление решений об одобрении крупной сделки или сделки с заинтересованностью, если стороной выступает юрлицо.'
    }
  ];

  const practiceCases: CaseData[] = [
    {
      category: 'Преимущественное право',
      title: 'Сопровождение продажи 40% доли третьему лицу с соблюдением преимущественного права',
      problem: 'Участник хотел продать свою долю независимому инвестору за 12 млн ₽, второй участник затягивал ответы и уклонялся от получения писем.',
      action: 'Оформили нотариальную оферту, направили через общество по закону, зафиксировали истечение 30-дневного срока, подготовили договор купли-продажи и провели сделку у нотариуса.',
      result: 'Сделка нотариально удостоверена и зарегистрирована в ЕГРЮЛ без риска последующего перевода прав покупателя на второго участника.'
    },
    {
      category: 'Опцион на долю',
      title: 'Оформление опциона на выкуп 25% доли при срыве обязательств по финансированию',
      problem: 'Инвестор входил в состав учредителей строительной компании, обязуясь предоставить заем 30 млн ₽, основатель требовал гарантий возврата доли.',
      action: 'Подготовили соглашение о предоставлении опциона на заключение договора купли-продажи доли (Call-option) за символическую сумму в 10 000 ₽ при неисполнении условий траншей.',
      result: 'Нотариальный опцион зарегистрирован в ЕГРЮЛ, права основателя на возврат контроля были полностью защищены.'
    },
    {
      category: 'Залог доли',
      title: 'Оформление договора залога 100% долей ООО под обеспечение займа в 25 млн ₽',
      problem: 'Займодавец предоставлял крупный заем торговому предприятию и требовал залог долей компании с правом голосования на период невозврата.',
      action: 'Разработали договор залога доли с условием осуществления прав участника залогодержателем при просрочке выплат более чем на 15 дней, сопроводили сделку у нотариуса.',
      result: 'Обременение успешно внесено в ЕГРЮЛ, заемщик получил средства, займодавец — абсолютную гарантию возврата.'
    }
  ];

  const processSteps: ProcessStep[] = [
    {
      num: '01',
      title: 'Аудит устава и оснований владения',
      desc: 'Изучаем устав на ограничения, проверяем документы, подтверждающие оплату доли и законность ее приобретения продавцом.'
    },
    {
      num: '02',
      title: 'Оферты и соблюдение преимущественного права',
      desc: 'Готовим нотариальные оферты участникам и обществу, контролируем сроки и оформляем нотариальные отказы.'
    },
    {
      num: '03',
      title: 'Подготовка договора и согласий',
      desc: 'Разрабатываем индивидуальный проект договора купли-продажи/дарения/залога, собираем согласия супругов и одобрения сделки.'
    },
    {
      num: '04',
      title: 'Нотариальная сделка и регистрация в ЕГРЮЛ',
      desc: 'Сопровождаем подписание у нотариуса, который самостоятельно передает электронное заявление в ФНС, и контролируем выписку ЕГРЮЛ.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Продажа между участниками',
      subtitle: 'Внутреннее перераспределение долей',
      popular: false,
      price: 'от 20 000 ₽',
      features: [
        { name: 'Анализ устава и выписки ЕГРЮЛ', value: 'Включено' },
        { name: 'Подготовка договора купли-продажи доли', value: 'Включено' },
        { name: 'Формирование комплекта для нотариуса', value: 'Включено' },
        { name: 'Контроль внесения изменений в ЕГРЮЛ', value: 'Включено' }
      ],
      buttonText: 'Заказать сопровождение',
      buttonHref: '#form'
    },
    {
      title: 'Продажа доли третьему лицу',
      subtitle: 'С соблюдением преимущественного права',
      popular: true,
      badgeText: 'Комплексная защита',
      price: 'от 35 000 ₽',
      features: [
        { name: 'Оформление оферт и отказов от преимущественного права', value: 'Включено' },
        { name: 'Проверка оплаты доли и отсутствия обременений', value: 'Включено' },
        { name: 'Разработка договора с гарантиями и заверениями', value: 'Включено' },
        { name: 'Сопровождение нотариальной сделки и расчетов', value: 'Включено' }
      ],
      buttonText: 'Выбрать сопровождение',
      buttonHref: '#form'
    },
    {
      title: 'Опционы / Залог долей',
      subtitle: 'Сложные инвестиционные конструкции',
      popular: false,
      price: 'от 50 000 ₽',
      features: [
        { name: 'Разработка опционного соглашения (Call / Put)', value: 'Включено' },
        { name: 'Договор залога доли с условиями осуществления прав', value: 'Включено' },
        { name: 'Синхронизация с корпоративным договором', value: 'Включено' },
        { name: 'Полное юридическое сопровождение у нотариуса', value: 'Включено' }
      ],
      buttonText: 'Заказать опцион / залог',
      buttonHref: '#form'
    }
  ];

  const faqs = [
    {
      q: 'Обязательно ли заверять договор купли-продажи доли ООО у нотариуса?',
      a: 'Да. В соответствии с п. 11 ст. 21 Закона об ООО сделка, направленная на отчуждение доли или части доли в уставном капитале общества, подлежит обязательному нотариальному удостоверению. Несоблюдение нотариальной формы влечет за собой недействительность этой сделки.'
    },
    {
      q: 'Когда право на долю переходит к покупателю?',
      a: 'Доля в уставном капитале общества переходит к ее приобретателю с момента внесения соответствующей записи в Единый государственный реестр юридических лиц (ЕГРЮЛ). Заявление в ФНС подает сам нотариус в электронном виде в течение 2 рабочих дней после удостоверения сделки.'
    },
    {
      q: 'Можно ли обойти преимущественное право через дарение доли?',
      a: 'Попытка прикрыть куплю-продажу договором дарения (притворная сделка) несет колоссальные риски: другие участники могут через суд признать сделку недействительной, применить последствия притворной сделки и потребовать перевода прав покупателя на себя, а покупатель рискует потерять выплаченные деньги.'
    },
    {
      q: 'Какие документы требует нотариус для удостоверения сделки с долей?',
      a: 'Устав общества в действующей редакции, выписка из ЕГРЮЛ, решение о создании/назначении директора, документ, подтверждающий оплату доли продавцом, документ-основание приобретения доли продавцом, оферты и отказы от преимущественного права, согласия супругов сторон.'
    }
  ];

  const relatedServices = [
    {
      title: 'Покупка и продажа бизнеса',
      desc: 'Комплексный Due Diligence компании и сделки M&A.',
      link: '/biznesu/korporativnyj-yurist/pokupka-prodazha-biznesa/'
    },
    {
      title: 'Корпоративный договор',
      desc: 'Фиксация правил партнерства и ограничений на продажу долей.',
      link: '/biznesu/korporativnyj-yurist/korporativnyj-dogovor/'
    },
    {
      title: 'Выход участника из ООО',
      desc: 'Отказ от доли с передачей её обществу через нотариуса.',
      link: '/biznesu/korporativnyj-yurist/vyhod-uchastnika-iz-ooo/'
    },
    {
      title: 'Защита корпоративного контроля',
      desc: 'Предотвращение незаконного отчуждения долей рейдерами.',
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
            <span style={{ color: 'var(--color-text-main)' }}>Сделки с долями ООО</span>
          </>
        }
        superTitle={
          <span style={{ whiteSpace: 'normal', display: 'inline-block', lineHeight: 1.4 }}>
            <span style={{ display: 'inline-block' }}>ПЕРЕХОД ПРАВ НА ДОЛИ ООО •</span> <br />
            <span style={{ display: 'inline-block' }}>Липецк и нотариат</span>
          </span>
        }
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Сопровождение сделок с долями ООО
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Юридически безупречная купля-продажа, дарение, залог и опционы на доли: проверка ограничений устава, соблюдение преимущественного права, подготовка договоров и нотариат.
          </span>
        }
        primaryCtaText="Проверить сделку с долей"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_corp_sdelki"
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
              <span style={{ display: 'inline-block' }}>Типовые ситуации сделок</span> <br />
              <span style={{ display: 'inline-block' }}>с долями ООО</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Любая передача доли требует строгого соблюдения устава, корпоративного законодательства и нотариального удостоверения.
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

      {/* ═══ БЛОК 3: ЧТО ПРОВЕРЯЕМ ═══ */}
      <section className="section bg-white" id="check">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 50px auto' }}>
            <h2 className="section-title" style={{ marginBottom: '16px' }}>
              Что важно проверить до подписания договора
            </h2>
            <p className="section-subtitle" style={{ color: 'var(--color-text-secondary)', margin: '0 auto' }}>
              Выявляем скрытые препятствия, которые могут привести к отказу нотариуса или оспариванию сделки в суде.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            {whatWeCheck.map((chk, idx) => (
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
                  {chk.title}
                </h3>
                <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {chk.desc}
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
            Сделка с долей требует скрупулезной подготовки: нотариус проверяет каждый документ цепочки владения и откажет при малейшей нестыковке.
          </span>,
          <span key="2" style={{ color: 'var(--color-deep-blue)', display: 'block', marginTop: '12px' }}>
            Владимир Викторович формирует безупречный комплект документов для нотариуса, согласует оферты участников и контролирует внесение сведений о новом собственнике в ЕГРЮЛ.
          </span>
        ]}
        buttonText="Обсудить сделку с куратором"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 5: КЕЙСЫ ═══ */}
      <CasesBlock
        title={<><span style={{ display: 'inline-block' }}>Примеры сопровождения</span> <br /><span style={{ display: 'inline-block' }}>сделок с долями ООО</span></>}
        cases={practiceCases}
        showAllLink="/praktika"
        showAllText="Смотреть всю практику →"
      />

      {/* ═══ БЛОК 6: КАК ПРОХОДИТ РАБОТА (ПОРЯДОК РАБОТЫ) ═══ */}
      <ProcessBlock
        title={<><span style={{ display: 'inline-block' }}>Порядок сопровождения</span> <br /><span style={{ display: 'inline-block' }}>сделки с долей</span></>}
        subtitle="Четкая и быстрая процедура от предварительного аудита до получения выписки ЕГРЮЛ."
        steps={processSteps}
        ctaTitle="Планируете продажу, покупку или дарение доли ООО?"
        ctaSubtitle="Проверим устав на ограничения и организуем сделку у нотариуса без очередей и рисков."
        ctaButtonText="Подготовить документы"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 7: ТАРИФЫ ═══ */}
      <PricingBlock
        title="Стоимость сопровождения сделки с долей ООО"
        subtitle="Прозрачная фиксированная цена. Нотариальные тарифы оплачиваются отдельно."
        tiers={pricingTiers}
        ctaTitle="Рассчитаем стоимость сопровождения вашей сделки"
        ctaSubtitle="Оставьте заявку — куратор направления проверит документы и согласует дату сделки у нотариуса."
        ctaButtonText="Рассчитать стоимость"
        ctaButtonLink="#form"
      />

      {/* ═══ БЛОК 8: FAQ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы"
        title="Вопросы о сделках с долями ООО"
        subtitle="Ответы на популярные вопросы продавцов, покупателей и учредителей обществ."
        faqs={faqs}
      />

      {/* ═══ БЛОК 9: СМЕЖНЫЕ НАПРАВЛЕНИЯ ПРАКТИКИ ДЛЯ БИЗНЕСА (ПО ШАБЛОНУ) ═══ */}
      <section className="section bg-light" id="related-services" style={{ padding: '64px 0', background: 'var(--gradient-cream)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ marginBottom: '36px' }}>
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
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '24px'
            }}>
              <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 3.5vw, 34px)', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.25, flex: '1 1 480px', minWidth: '280px' }}>
                <span style={{ display: "inline-block" }}>Смежные услуги</span> <br /><span style={{ display: "inline-block" }}>по сделкам и долям</span>
              </h2>
              <p style={{
                flex: '0 1 440px',
                minWidth: '280px',
                fontSize: '15.5px',
                color: 'var(--color-text-secondary)',
                fontWeight: 400,
                lineHeight: 1.65,
                margin: 0,
                textAlign: 'left',
                textWrap: 'balance'
              }}>
                Правовое сопровождение корпоративных договоров, передачи долей и защиты активов.
              </p>
            </div>
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
                buttonText="Оформить сделку с долей"
                commentPlaceholder="Кратко опишите планируемую сделку: купля-продажа, дарение, опцион или иной формат…"
                hiddenFields={[
                  { name: 'source_page', value: '/biznesu/korporativnyj-yurist/sdelki-s-dolyami-ooo/' },
                  { name: 'service', value: 'Сделки с долями ООО' }
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
