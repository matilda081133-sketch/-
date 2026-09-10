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

export default function PokupkaProdazhaBiznesaClient() {
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
        '@id': 'https://dejure-help.ru/biznesu/korporativnyj-yurist/pokupka-prodazha-biznesa/#service',
        name: 'Юридическое сопровождение покупки и продажи бизнеса в Липецке',
        serviceType: 'Сопровождение сделок купли-продажи бизнеса и активов (M&A)',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        description: 'Проверка и сопровождение покупки или продажи действующего бизнеса: due diligence, структура сделки, договоры, расчёты, закрытие и переход управления.'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/biznesu/korporativnyj-yurist/pokupka-prodazha-biznesa/#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
          { '@type': 'ListItem', position: 2, name: 'Бизнесу', item: 'https://dejure-help.ru/biznesu/' },
          { '@type': 'ListItem', position: 3, name: 'Корпоративный юрист', item: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/' },
          { '@type': 'ListItem', position: 4, name: 'Покупка и продажа бизнеса', item: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/pokupka-prodazha-biznesa/' }
        ]
      }
    ]
  };

  const situations = [
    {
      tag: 'Покупка готового бизнеса',
      title: <>Приобретение 100% долей <br />действующей компании</>,
      desc: 'Необходим аудит рисков (due diligence): скрытые долги, обременения имущества, судебные иски, налоговые претензии и действительность лицензий.'
    },
    {
      tag: 'Продажа своего бизнеса',
      title: <>Подготовка компании к продаже <br />по максимальной цене</>,
      desc: 'Устранение юридических дефектов, структурирование активов, оформление соглашений о конфиденциальности (NDA) и защита получения оплаты.'
    },
    {
      tag: 'Покупка активов (Asset Deal)',
      title: <>Приобретение оборудования, <br />недвижимости или товарного знака</>,
      desc: 'Покупка только ценных активов без перехода юридического лица и его возможных старых долговых или налоговых обязательств.'
    },
    {
      tag: 'Вход стратегического партнера',
      title: <>Продажа контрольного или <br />блокирующего пакета долей</>,
      desc: 'Оформление опционов, рассрочки платежей, заверений об обстоятельствах и сохранение части контроля за основателем.'
    },
    {
      tag: 'Франшизы и дистрибуция',
      title: <>Покупка франчайзинговой сети <br />или дилерского центра</>,
      desc: 'Проверка прав на бренды, коммерческую тайну, договоров аренды торговых площадей и действительности дистрибьюторских соглашений.'
    },
    {
      tag: 'Безопасные расчеты',
      title: <>Защита сторон при передаче <br />крупных денежных сумм</>,
      desc: 'Организация расчетов через эскроу-счета, аккредитивы, банковские ячейки и холдирование средств до регистрации изменений в ЕГРЮЛ.'
    }
  ];

  const dueDiligenceBlocks = [
    {
      title: 'Корпоративный аудит',
      desc: 'История создания компании, законность перехода долей всех предыдущих владельцев, оплата уставного капитала, полномочия директора.'
    },
    {
      title: 'Имущественный аудит',
      desc: 'Проверка прав на недвижимость, транспорт, оборудование, товарные знаки, наличие залогов, арестов и правопритязаний третьих лиц.'
    },
    {
      title: 'Договорной аудит',
      desc: 'Анализ ключевых контрактов с клиентами и поставщиками, договоров аренды, штрафных санкций и рисков одностороннего расторжения.'
    },
    {
      title: 'Судебный и долговой аудит',
      desc: 'Поиск открытых и завершенных судебных дел в арбитраже и судах общей юрисдикции, исполнительных производств в ФССП, поручительств.'
    },
    {
      title: 'Налоговый аудит рисков',
      desc: 'Выявление признаков дробления бизнеса, сомнительных контрагентов, нереализованных вычетов и рисков доначислений по НДС и налогу на прибыль.'
    },
    {
      title: 'Трудовой аудит',
      desc: 'Проверка трудовых договоров ключевых сотрудников, невыплаченных компенсаций, «золотых парашютов» и рисков ухода топ-менеджмента.'
    }
  ];

  const practiceCases: CaseData[] = [
    {
      category: 'Due Diligence',
      title: 'Выявление скрытого налогового риска на 18 млн ₽ при покупке логистической компании',
      problem: 'Покупатель планировал приобрести 100% долей транспортного предприятия за 45 млн ₽. Продавец заявлял о кристальной чистоте бизнеса.',
      action: 'В ходе due diligence юристы «Де-Юре» выявили цепочку фиктивных субподрядчиков за предыдущие два года с высоким риском доначисления 18 млн ₽ налогов и штрафов.',
      result: 'На основании отчета покупатель снизил стоимость сделки на 12 млн ₽ и зафиксировал удержание остатка на эскроу-счете до истечения срока налоговой проверки.'
    },
    {
      category: 'Защита продавца',
      title: 'Продажа агропредприятия с гарантией получения платежей в рассрочку',
      problem: 'Собственник продавал тепличный комплекс за 60 млн ₽ с рассрочкой оплаты на 18 месяцев и опасался потери контроля до окончательного расчета.',
      action: 'Структурировали сделку с залогом доли в пользу продавца в ЕГРЮЛ, корпоративным договором с ограничением отчуждения активов и безотзывной банковской гарантией.',
      result: 'Сделка закрыта, все транши выплачены в срок, имущественный комплекс был полностью застрахован от вывода до финальной оплаты.'
    },
    {
      category: 'Asset Deal',
      title: 'Покупка сети пекарен через приобретение активов вместо рискованного юрлица',
      problem: 'Компания-продавец имела открытые судебные споры с арендодателями. Покупатель хотел получить только оборудование и локации.',
      action: 'Перевели сделку из формата покупки доли (Share Deal) в формат покупки комплекса активов (Asset Deal): переоформили прямые договоры аренды, выкупили оборудование и бренд.',
      result: 'Покупатель запустил бизнес под своим новым юрлицом без риска привлечения к долгам прежнего владельца.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Предварительные переговоры и NDA',
      desc: 'Подписываем соглашение о неразглашении конфиденциальной информации (NDA) и фиксируем базовые намерения в Term Sheet.'
    },
    {
      step: '02',
      title: 'Комплексный Due Diligence',
      desc: 'Проводим полный правовой, налоговый и имущественный аудит бизнеса, формируем отчет с картой рисков и рекомендациями.'
    },
    {
      step: '03',
      title: 'Структурирование и договоры',
      desc: 'Разрабатываем договор купли-продажи долей/активов, соглашения о заверениях и гарантиях (ст. 431.2 ГК РФ), настраиваем эскроу.'
    },
    {
      step: '04',
      title: 'Закрытие сделки и передача контроля',
      desc: 'Сопровождаем удостоверение сделки у нотариуса, контролируем регистрацию в ФНС, передачу ключей, ЭЦП, банк-клиента и документации.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Due Diligence (Правовой аудит)',
      subtitle: 'Комплексная проверка бизнеса перед покупкой',
      popular: false,
      price: 'от 35 000 ₽',
      features: [
        { name: 'Анализ корпоративной истории и ЕГРЮЛ', value: 'Включено' },
        { name: 'Проверка судов, залогов, долгов и ФССП', value: 'Включено' },
        { name: 'Аудит прав на имущество и ключевых договоров', value: 'Включено' },
        { name: 'Письменный отчет с оценкой рисков', value: 'Включено' }
      ],
      buttonText: 'Заказать Due Diligence',
      buttonHref: '#form'
    },
    {
      title: 'Полное сопровождение сделки',
      subtitle: 'Подготовка документов, расчеты и нотариус',
      popular: true,
      badgeText: 'Комплекс под ключ',
      price: 'от 65 000 ₽',
      features: [
        { name: 'Due Diligence бизнеса и активов', value: 'Включено' },
        { name: 'Подготовка договора купли-продажи с заверениями', value: 'Включено' },
        { name: 'Настройка безопасных расчетов (эскроу/аккредитив)', value: 'Включено' },
        { name: 'Сопровождение у нотариуса и контроль ЕГРЮЛ', value: 'Включено' }
      ],
      buttonText: 'Заказать сопровождение сделки',
      buttonHref: '#form'
    },
    {
      title: 'M&A Сопровождение крупного бизнеса',
      subtitle: 'Сложные холдинговые структуры и сети',
      popular: false,
      price: 'от 120 000 ₽',
      features: [
        { name: 'Аудит группы компаний и лицензий', value: 'Включено' },
        { name: 'Корпоративный договор и опционные соглашения', value: 'Включено' },
        { name: 'Антимонопольное согласование в ФАС (при необходимости)', value: 'Включено' },
        { name: 'Поэтапная передача операционного контроля', value: 'Включено' }
      ],
      buttonText: 'Обсудить M&A проект',
      buttonHref: '#form'
    }
  ];

  const faqs = [
    {
      q: 'Что лучше покупать: долю в ООО (Share Deal) или активы компании (Asset Deal)?',
      a: 'При покупке доли вы приобретаете компанию целиком вместе со всей её историей, контрактами, лицензиями, но и со всеми скрытыми долгами и налоговыми рисками. Покупка активов позволяет приобрести только оборудование, товар или недвижимость без старых обязательств, но требует переоформления всех договоров и лицензий заново.'
    },
    {
      q: 'Как защитить покупателя от внезапно открывшихся долгов после сделки?',
      a: 'В договор купли-продажи включаются детализированные заверения об обстоятельствах (ст. 431.2 ГК РФ) и обязательство продавца возместить имущественные потери (ст. 406.1 ГК РФ). Также используется удержание части покупной цены на эскроу-счете на срок от 6 до 24 месяцев.'
    },
    {
      q: 'Сколько времени занимает проверка бизнеса (Due Diligence)?',
      a: 'Стандартный правовой аудит небольшой компании занимает 3–5 рабочих дней с момента предоставления документов. Для крупных предприятий, сетей или производств с большим объемом недвижимости проверка длится от 7 до 14 рабочих дней.'
    },
    {
      q: 'Обязательно ли согласие супруга при продаже или покупке доли ООО?',
      a: 'Да, если доля приобреталась или отчуждается в период брака (за исключением случаев наличия брачного договора). Нотариально удостоверенное согласие супруга является обязательным требованием закона при совершении сделки у нотариуса.'
    }
  ];

  const relatedServices = [
    {
      title: 'Сделки с долями ООО',
      desc: 'Сопровождение купли-продажи долей у нотариуса.',
      link: '/biznesu/korporativnyj-yurist/sdelki-s-dolyami-ooo/'
    },
    {
      title: 'Реорганизация бизнеса',
      desc: 'Слияние, присоединение и выделение активов.',
      link: '/biznesu/korporativnyj-yurist/reorganizaciya-biznesa/'
    },
    {
      title: 'Корпоративный договор',
      desc: 'Согласование прав новых партнеров и инвесторов.',
      link: '/biznesu/korporativnyj-yurist/korporativnyj-dogovor/'
    },
    {
      title: 'Защита корпоративного контроля',
      desc: 'Предотвращение потери управления при смене собственников.',
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
            <span style={{ color: 'var(--color-text-main)' }}>Покупка и продажа бизнеса</span>
          </>
        }
        superTitle={
          <span style={{ whiteSpace: 'normal', display: 'inline-block', lineHeight: 1.4 }}>
            <span style={{ display: 'inline-block' }}>СДЕЛКИ С БИЗНЕСОМ И M&A •</span> <br />
            <span style={{ display: 'inline-block' }}>Липецк и Липецкая область</span>
          </span>
        }
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Покупка и продажа бизнеса
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Юридический аудит (Due Diligence), структурирование сделки, подготовка договоров с гарантиями, безопасные расчеты и передача операционного контроля.
          </span>
        }
        primaryCtaText="Заказать аудит сделки"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_corp_pokupka"
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
              <span style={{ display: 'inline-block' }}>Типовые ситуации при покупке</span> <br />
              <span style={{ display: 'inline-block' }}>и продаже бизнеса</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Сделки M&A требуют глубокого анализа рисков, структуры владения, долговой нагрузки и обеспечения безопасности расчетов.
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

      {/* ═══ БЛОК 3: ЧТО ПРОВЕРЯЕМ (DUE DILIGENCE) ═══ */}
      <section className="section bg-white" id="diligence">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 50px auto' }}>
            <h2 className="section-title" style={{ marginBottom: '16px' }}>
              Due Diligence бизнеса до подписания документов
            </h2>
            <p className="section-subtitle" style={{ color: 'var(--color-text-secondary)', margin: '0 auto' }}>
              Проверяем все юридические, имущественные и финансовые аспекты приобретаемого предприятия.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            {dueDiligenceBlocks.map((blk, idx) => (
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
                  {blk.title}
                </h3>
                <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {blk.desc}
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
            Покупка бизнеса требует жесткой координации: от аудита первичных документов до нотариального закрытия сделки и безопасного перевода денег.
          </span>,
          <span key="2" style={{ color: 'var(--color-deep-blue)', display: 'block', marginTop: '12px' }}>
            Владимир Викторович организует процедурный аудит компаний и активов, координирует работу с банками по эскроу-счетам и нотариусами Липецкой области.
          </span>
        ]}
        buttonText="Обсудить сделку с куратором"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 5: КЕЙСЫ ═══ */}
      <CasesBlock
        title="Примеры сопровождения сделок купли-продажи бизнеса"
        cases={practiceCases}
        showAllLink="/praktika"
        showAllText="Смотреть всю практику →"
      />

      {/* ═══ БЛОК 6: КАК ПРОХОДИТ РАБОТА ═══ */}
      <section className="section bg-light" id="process">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 50px auto' }}>
            <h2 className="section-title" style={{ marginBottom: '16px' }}>
              Порядок сопровождения сделки с бизнесом
            </h2>
            <p className="section-subtitle" style={{ color: 'var(--color-text-secondary)', margin: '0 auto' }}>
              Последовательный алгоритм, гарантирующий юридическую чистоту и финансовую безопасность.
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
                  Нашли подходящий бизнес для покупки или ведете переговоры?
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '15px', margin: 0 }}>
                  Проведем экспресс-аудит объекта и защитим вас от скрытых долгов продавца.
                </p>
              </div>
              <a href="#form" className="btn white-btn-custom">
                Заказать аудит
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 7: ТАРИФЫ ═══ */}
      <PricingBlock
        title="Стоимость сопровождения покупки или продажи бизнеса"
        subtitle="Прозрачные тарифы, зафиксированные в договоре. Защита интересов клиента."
        tiers={pricingTiers}
        ctaTitle="Рассчитаем стоимость сопровождения сделки"
        ctaSubtitle="Оставьте заявку — проанализируем параметры бизнеса и подготовим индивидуальное коммерческое предложение."
        ctaButtonText="Рассчитать стоимость"
        ctaButtonLink="#form"
      />

      {/* ═══ БЛОК 8: FAQ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы"
        title="Вопросы о покупке и продаже бизнеса"
        subtitle="Разъяснения юристов по юридической чистоте, налогам и структурированию M&A сделок."
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
              Полный комплекс юридических услуг для бизнеса в Липецке.
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
        title="Проверьте сделку до передачи денег и управления"
        subtitle="Оставьте заявку на консультацию. Проведем аудит рисков и обеспечим безопасную передачу активов."
        hiddenFields={[{ name: 'service', value: 'Покупка и продажа бизнеса' }]}
      />

      <Footer />
    </>
  );
}
