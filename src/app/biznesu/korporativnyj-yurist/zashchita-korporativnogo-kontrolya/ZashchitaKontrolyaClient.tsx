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

export default function ZashchitaKontrolyaClient() {
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
        '@id': 'https://dejure-help.ru/biznesu/korporativnyj-yurist/zashchita-korporativnogo-kontrolya/#service',
        name: 'Защита и восстановление корпоративного контроля в Липецке',
        serviceType: 'Экстренная защита корпоративного контроля и активов бизнеса',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        description: 'Защита и восстановление корпоративного контроля: незаконная смена директора или участников, изменения в ЕГРЮЛ, блокировка счетов и риск вывода активов.'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/biznesu/korporativnyj-yurist/zashchita-korporativnogo-kontrolya/#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
          { '@type': 'ListItem', position: 2, name: 'Бизнесу', item: 'https://dejure-help.ru/biznesu/' },
          { '@type': 'ListItem', position: 3, name: 'Корпоративный юрист', item: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/' },
          { '@type': 'ListItem', position: 4, name: 'Защита корпоративного контроля', item: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/zashchita-korporativnogo-kontrolya/' }
        ]
      }
    ]
  };

  const situations = [
    {
      tag: 'Незаконная смена директора',
      title: <>В ЕГРЮЛ появился новый директор <br />без вашего ведома</>,
      desc: 'По поддельным протоколам или решениям назначен посторонний руководитель, переоформивший доступ к банковским счетам.'
    },
    {
      tag: 'Хищение долей в ООО',
      title: <>Участник лишился доли <br />по фальсифицированным сделкам</>,
      desc: 'Доля переоформлена по поддельному заявлению о выходе, фиктивному договору купли-продажи или через размытие уставного капитала.'
    },
    {
      tag: 'Блокировка доступа',
      title: <>Собственника не пускают в офис <br />и заблокировали ЭЦП</>,
      desc: 'Смена охраны, отзыв электронных цифровых подписей, отключение от 1С и банковского обслуживания законного владельца бизнеса.'
    },
    {
      tag: 'Угроза вывода активов',
      title: <>Срочная продажа недвижимости <br />и техники компании</>,
      desc: 'Новый нелегитимный директор спешно заключает договоры купли-продажи ключевых активов аффилированным фирмам-однодневкам.'
    },
    {
      tag: 'Фальсификация решений',
      title: <>Подделка подписей <br />в протоколах собраний</>,
      desc: 'Внесение изменений в устав, увеличение уставного капитала или одобрение крупных сделок без участия законного участника.'
    },
    {
      tag: 'Недружественное поглощение',
      title: <>Комплексная рейдерская атака <br />на предприятие</>,
      desc: 'Синхронная подача заявлений в налоговую, банки, суды и правоохранительные органы с целью парализовать бизнес и заставить отдать долю.'
    }
  ];

  const urgentMeasures = [
    {
      title: 'Блокировка налоговой (ФНС)',
      desc: 'Срочная подача возражений по форме Р38001 с требованием приостановить или запретить внесение изменений в ЕГРЮЛ.'
    },
    {
      title: 'Уведомление банков',
      desc: 'Официальные уведомления обслуживающих банков о спорности полномочий с требованием заблокировать расходные операции по счетам.'
    },
    {
      title: 'Обеспечительные меры суда',
      desc: 'Подача в Арбитражный суд Липецкой области ходатайств о запрете регистрационных действий, сделок с имуществом и голосования долями.'
    },
    {
      title: 'Оспаривание протоколов и решений',
      desc: 'Исковые заявления о признании недействительными решений собраний, договоров отчуждения долей и назначений директоров.'
    },
    {
      title: 'Виндикация и возврат долей',
      desc: 'Иски о восстановлении корпоративного контроля и возврате доли законному владельцу по ст. 65.2 ГК РФ.'
    },
    {
      title: 'Уголовно-правовая защита',
      desc: 'Подготовка заявлений в Следственный комитет и МВД по ст. 170.1, 185.5 УК РФ (фальсификация ЕГРЮЛ и решений собраний).'
    }
  ];

  const practiceCases: CaseData[] = [
    {
      category: 'Смена директора',
      title: 'Экстренная блокировка смены генерального директора и сохранение 45 млн ₽ на счетах',
      problem: 'Мошенники по поддельному протоколу подали документы в МИФНС о назначении нового директора производственного комбината.',
      action: 'В течение 4 часов подготовили и подали возражение по форме Р38001 в ФНС, уведомили службу безопасности 3 банков и подали иск в Арбитражный суд с обеспечительными мерами.',
      result: 'Налоговая инспекция вынесла отказ в регистрации изменений, расходные операции в банках были остановлены. Контроль и средства полностью сохранены.'
    },
    {
      category: 'Возврат доли',
      title: 'Восстановление 100% доли участника, похищенной по фальшивому заявлению о выходе',
      problem: 'Собственник агрофирмы узнал из ЕГРЮЛ, что он якобы вышел из компании, а его доля была распределена директору.',
      action: 'Инициировали судебный процесс о восстановлении корпоративного контроля (ст. 65.2 ГК РФ), провели почерковедческую экспертизу заявления и заявили арест доли.',
      result: 'Суд признал заявление о выходе ничтожным и восстановил 100% долей за законным собственником с аннулированием всех промежуточных записей.'
    },
    {
      category: 'Остановка вывода активов',
      title: 'Запрет продажи производственной базы стоимостью 80 млн ₽ в ходе недружественного поглощения',
      problem: 'Оппоненты попытались продать завод подставной компании по фиктивному договору купли-продажи.',
      action: 'За 24 часа подали иск в арбитраж с требованием о признании сделки недействительной и добились судебного запрета Росреестру регистрировать переход прав.',
      result: 'Обеспечительные меры наложены, недвижимость спасена от вывода, в дальнейшем спор был разрешен в пользу собственника.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Срочная диагностика в первые часы',
      desc: 'Проверяем ЕГРЮЛ, поданные в налоговую формы, статус электронных подписей и банковских счетов, фиксируем доказательства.'
    },
    {
      step: '02',
      title: 'Неотложные блокирующие меры',
      desc: 'Подаем форму Р38001 в ФНС, рассылаем уведомления в банки и подаем в арбитраж заявления о срочных обеспечительных мерах.'
    },
    {
      step: '03',
      title: 'Судебный иск по существу спора',
      desc: 'Формируем исковые требования о признании решений недействительными, восстановлении контроля над долями и истребовании имущества.'
    },
    {
      step: '04',
      title: 'Исполнение и возврат управления',
      desc: 'Обеспечиваем аннулирование незаконных записей в ЕГРЮЛ, восстанавливаем законного директора, доступ к базам данных и счетам.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Срочные меры (Первые 24 часа)',
      subtitle: 'Неотложная блокировка изменений в ФНС и банках',
      popular: false,
      price: 'от 25 000 ₽',
      features: [
        { name: 'Подача возражений Р38001 в налоговую инспекцию', value: 'Включено' },
        { name: 'Блокирующие уведомления в обслуживающие банки', value: 'Включено' },
        { name: 'Фиксация доказательств и мониторинг ЕГРЮЛ', value: 'Включено' },
        { name: 'Определение судебной стратегии защиты', value: 'Включено' }
      ],
      buttonText: 'Принять срочные меры',
      buttonHref: '#form'
    },
    {
      title: 'Обеспечительные меры в арбитраже',
      subtitle: 'Судебный арест долей, счетов и имущества',
      popular: true,
      badgeText: 'Экстренная защита',
      price: 'от 50 000 ₽',
      features: [
        { name: 'Подготовка и подача ходатайства об обеспечении иска', value: 'Включено' },
        { name: 'Запрет налоговой вносить записи в ЕГРЮЛ', value: 'Включено' },
        { name: 'Арест расчетных счетов и имущества компании', value: 'Включено' },
        { name: 'Предъявление исполнительного листа в ФССП/ФНС', value: 'Включено' }
      ],
      buttonText: 'Наложить арест через суд',
      buttonHref: '#form'
    },
    {
      title: 'Восстановление контроля под ключ',
      subtitle: 'Полный комплекс: суд, ФНС, банки, экспертизы',
      popular: false,
      price: 'от 90 000 ₽',
      features: [
        { name: 'Судебный иск о восстановлении корпоративного контроля', value: 'Включено' },
        { name: 'Оспаривание цепочки сделок и протоколов', value: 'Включено' },
        { name: 'Организация судебных почерковедческих экспертиз', value: 'Включено' },
        { name: 'Восстановление законного директора в ЕГРЮЛ', value: 'Включено' }
      ],
      buttonText: 'Восстановить контроль',
      buttonHref: '#form'
    }
  ];

  const faqs = [
    {
      q: 'Что делать в первые часы, если директор сменился без вашего ведома?',
      a: 'Главное — не терять время: немедленно подать в регистрирующий налоговый орган форму Р38001 (возражение заинтересованного лица), уведомить все банки о фальсификации документов для блокировки расходных операций и подать иск в Арбитражный суд с ходатайством о принятии обеспечительных мер.'
    },
    {
      q: 'Можно ли отменить запись в ЕГРЮЛ через налоговую инспекцию без суда?',
      a: 'Налоговый орган самостоятельно не отменяет уже внесенные записи, если заявитель предоставил формально полный комплект документов. Аннулировать незаконную запись в ЕГРЮЛ и вернуть контроль можно только на основании вступившего в законную силу решения арбитражного суда.'
    },
    {
      q: 'Как суд восстанавливает корпоративный контроль над долей?',
      a: 'В соответствии со ст. 65.2 ГК РФ участник, утративший долю помимо своей воли, вправе требовать возвращения ему доли с выплатой справедливой компенсации приобретателям или без нее (в зависимости от добросовестности). Суд восстанавливает права участника в ЕГРЮЛ с аннулированием всех промежуточных записей.'
    },
    {
      q: 'Сколько времени занимает получение обеспечительных мер суда?',
      a: 'Ходатайство об обеспечении иска рассматривается арбитражным судом не позднее следующего дня после его поступления без вызова сторон. При наличии надлежащих доказательств угрозы утраты активов определение об обеспечении выносится в течение 24–48 часов.'
    }
  ];

  const relatedServices = [
    {
      title: 'Корпоративные споры',
      desc: 'Защита при внутренних конфликтах участников и директоров.',
      link: '/biznesu/korporativnyj-yurist/korporativnye-spory-mezhdu-uchastnikami/'
    },
    {
      title: 'Сделки с долями ООО',
      desc: 'Проверка чистоты перехода прав на доли компании.',
      link: '/biznesu/korporativnyj-yurist/sdelki-s-dolyami-ooo/'
    },
    {
      title: 'Взыскание стоимости доли',
      desc: 'Взыскание активов при незаконном выходе или исключении.',
      link: '/biznesu/korporativnyj-yurist/vzyskanie-dejstvitelnoj-stoimosti-doli/'
    },
    {
      title: 'Корпоративный договор',
      desc: 'Превентивная защита от потери контроля и несанкционированных решений.',
      link: '/biznesu/korporativnyj-yurist/korporativnyj-dogovor/'
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
            <span style={{ color: 'var(--color-text-main)' }}>Защита корпоративного контроля</span>
          </>
        }
        superTitle={
          <span style={{ whiteSpace: 'normal', display: 'inline-block', lineHeight: 1.4 }}>
            <span style={{ display: 'inline-block' }}>ЭКСТРЕННАЯ ЗАЩИТА БИЗНЕСА И АКТИВОВ •</span> <br />
            <span style={{ display: 'inline-block' }}>Липецк и арбитраж</span>
          </span>
        }
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Защита корпоративного контроля
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Срочная юридическая помощь при незаконной смене директора, захвате долей, блокировке счетов и рисках вывода активов: блокировка ФНС, обеспечительные аресты в суде и возврат управления.
          </span>
        }
        primaryCtaText="Срочно защитить контроль"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_corp_kontrol"
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
              <span style={{ display: 'inline-block' }}>Типовые угрозы и риски</span> <br />
              <span style={{ display: 'inline-block' }}>потери контроля над ООО</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Экстренные ситуации требуют незамедлительных юридических мер: возражений в ФНС, обеспечительных мер и судебной защиты.
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

      {/* ═══ БЛОК 3: МЕРЫ ЗАЩИТЫ ═══ */}
      <section className="section bg-white" id="measures">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 50px auto' }}>
            <h2 className="section-title" style={{ marginBottom: '16px' }}>
              Срочная защита строится из нескольких контуров
            </h2>
            <p className="section-subtitle" style={{ color: 'var(--color-text-secondary)', margin: '0 auto' }}>
              Синхронные действия в налоговых органах, банках, Росреестре и арбитражном суде.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            {urgentMeasures.map((item, idx) => (
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
            Защита корпоративного контроля требует молниеносной мобилизации: блокировка налоговых изменений и счетов должна происходить в первые же часы.
          </span>,
          <span key="2" style={{ color: 'var(--color-deep-blue)', display: 'block', marginTop: '12px' }}>
            Владимир Викторович координирует экстренные регистрационные возражения и сбор доказательств. В судебных спорах и процессуальной защите участвуют профильные арбитражные юристы команды «Де-Юре».
          </span>
        ]}
        buttonText="Срочно связаться с куратором"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 5: КЕЙСЫ ═══ */}
      <CasesBlock
        title="Примеры защиты и восстановления управления"
        cases={practiceCases}
        showAllLink="/praktika"
        showAllText="Смотреть всю практику →"
      />

      {/* ═══ БЛОК 6: КАК ПРОХОДИТ РАБОТА ═══ */}
      <section className="section bg-light" id="process">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 50px auto' }}>
            <h2 className="section-title" style={{ marginBottom: '16px' }}>
              Этапы защиты корпоративного контроля
            </h2>
            <p className="section-subtitle" style={{ color: 'var(--color-text-secondary)', margin: '0 auto' }}>
              Последовательный план действий: от экстренной блокировки до полного восстановления законных полномочий.
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
                  Обнаружили попытку захвата управления или смена директора?
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '15px', margin: 0 }}>
                  Примем экстренные меры: заблокируем налоговую регистрацию и расчетные счета сегодня.
                </p>
              </div>
              <a href="#form" className="btn white-btn-custom">
                Защитить бизнес сейчас
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 7: ТАРИФЫ ═══ */}
      <PricingBlock
        title="Стоимость защиты корпоративного контроля"
        subtitle="Фиксированные тарифы, оперативный выезд и немедленный старт работы."
        tiers={pricingTiers}
        ctaTitle="Рассчитаем стоимость защиты управления компанией"
        ctaSubtitle="Оставьте заявку — куратор направления свяжется с вами в течение 10 минут для немедленного реагирования."
        ctaButtonText="Срочная консультация"
        ctaButtonLink="#form"
      />

      {/* ═══ БЛОК 8: FAQ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы"
        title="Частые вопросы о восстановлении корпоративного контроля"
        subtitle="Ответы арбитражных юристов на ключевые вопросы при попытках захвата управления бизнесом."
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
              Правовые услуги для собственников бизнеса и руководителей в Липецке.
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
        title="Опишите, что изменилось в управлении компанией"
        subtitle="Оставьте заявку на экстренную помощь. Проверим реестры, заблокируем несанкционированные действия и восстановим контроль."
        hiddenFields={[{ name: 'service', value: 'Защита корпоративного контроля' }]}
      />

      <Footer />
    </>
  );
}
