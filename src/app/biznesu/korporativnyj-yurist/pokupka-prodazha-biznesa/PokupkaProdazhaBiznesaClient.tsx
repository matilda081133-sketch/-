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

  const processSteps: ProcessStep[] = [
    {
      num: '01',
      title: 'Предварительные переговоры и NDA',
      desc: 'Подписываем соглашение о неразглашении конфиденциальной информации (NDA) и фиксируем базовые намерения в Term Sheet.'
    },
    {
      num: '02',
      title: 'Комплексный Due Diligence',
      desc: 'Проводим полный правовой, налоговый и имущественный аудит бизнеса, формируем отчет с картой рисков и рекомендациями.'
    },
    {
      num: '03',
      title: 'Структурирование и договоры',
      desc: 'Разрабатываем договор купли-продажи долей/активов, соглашения о заверениях и гарантиях (ст. 431.2 ГК РФ), настраиваем эскроу.'
    },
    {
      num: '04',
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
        title={<><span style={{ display: 'inline-block' }}>Примеры сопровождения</span> <br /><span style={{ display: 'inline-block' }}>покупки и продажи бизнеса</span></>}
        cases={practiceCases}
        showAllLink="/praktika"
        showAllText="Смотреть всю практику →"
      />

      {/* ═══ БЛОК 6: КАК ПРОХОДИТ РАБОТА (ПОРЯДОК РАБОТЫ) ═══ */}
      <ProcessBlock
        title={<><span style={{ display: 'inline-block' }}>Порядок сопровождения</span> <br /><span style={{ display: 'inline-block' }}>сделки с бизнесом</span></>}
        subtitle="Последовательный алгоритм, гарантирующий юридическую чистоту и финансовую безопасность."
        steps={processSteps}
        ctaTitle="Нашли подходящий бизнес для покупки или ведете переговоры?"
        ctaSubtitle="Проведем экспресс-аудит объекта и защитим вас от скрытых долгов продавца."
        ctaButtonText="Заказать аудит"
        ctaButtonHref="#form"
      />

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
              <span style={{ display: 'inline-block' }}>Другие услуги</span> <br /><span style={{ display: 'inline-block' }}>по сделкам и активам</span>
            </h2>
            <p style={{ fontSize: '15.5px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.65, margin: 0, textWrap: 'balance' }}>
              Комплексный аудит Due Diligence, оформление сделок и защита от скрытых рисков.
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
                buttonText="Сопроводить сделку с бизнесом"
                commentPlaceholder="Кратко опишите объект сделки: сфера бизнеса, форма передачи активов, стадия переговоров…"
                hiddenFields={[
                  { name: 'source_page', value: '/biznesu/korporativnyj-yurist/pokupka-prodazha-biznesa/' },
                  { name: 'service', value: 'Покупка и продажа готового бизнеса' }
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
