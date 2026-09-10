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

  const urgentMeasures: { title: React.ReactNode; desc: string }[] = [
    {
      title: <><span style={{ display: 'inline-block' }}>Блокировка действий</span> <br /><span style={{ display: 'inline-block' }}>в налоговой (ФНС)</span></>,
      desc: 'Срочная подача возражений по форме Р38001 с требованием приостановить или запретить внесение несанкционированных изменений в ЕГРЮЛ.'
    },
    {
      title: <><span style={{ display: 'inline-block' }}>Уведомление и заморозка</span> <br /><span style={{ display: 'inline-block' }}>счетов в банках</span></>,
      desc: 'Официальные уведомления обслуживающих банков о спорности полномочий с требованием заблокировать расходные операции по счетам.'
    },
    {
      title: <><span style={{ display: 'inline-block' }}>Обеспечительные меры</span> <br /><span style={{ display: 'inline-block' }}>арбитражного суда</span></>,
      desc: 'Подача в Арбитражный суд Липецкой области ходатайств о запрете регистрационных действий, сделок с имуществом и голосования долями.'
    },
    {
      title: <><span style={{ display: 'inline-block' }}>Оспаривание поддельных</span> <br /><span style={{ display: 'inline-block' }}>протоколов и решений</span></>,
      desc: 'Исковые заявления о признании недействительными решений собраний, договоров отчуждения долей и назначений директоров.'
    },
    {
      title: <><span style={{ display: 'inline-block' }}>Виндикация и возврат</span> <br /><span style={{ display: 'inline-block' }}>похищенных долей</span></>,
      desc: 'Иски о восстановлении корпоративного контроля и возврате доли законному владельцу по ст. 65.2 ГК РФ.'
    },
    {
      title: <><span style={{ display: 'inline-block' }}>Уголовно-правовая</span> <br /><span style={{ display: 'inline-block' }}>защита собственника</span></>,
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

  const processSteps: ProcessStep[] = [
    {
      num: '01',
      title: 'Срочная диагностика в первые часы',
      desc: 'Проверяем ЕГРЮЛ, поданные в налоговую формы, статус электронных подписей и банковских счетов, фиксируем доказательства.'
    },
    {
      num: '02',
      title: 'Неотложные блокирующие меры',
      desc: 'Подаем форму Р38001 в ФНС, рассылаем уведомления в банки и подаем в арбитраж заявления о срочных обеспечительных мерах.'
    },
    {
      num: '03',
      title: 'Судебный иск по существу спора',
      desc: 'Формируем исковые требования о признании решений недействительными, восстановлении контроля над долями и истребовании имущества.'
    },
    {
      num: '04',
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

      {/* ═══ БЛОК 3: МЕРЫ ЗАЩИТЫ (ПО ШАБЛОНУ НАПРАВЛЕНИЙ) ═══ */}
      <section className="section" id="measures" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              <span style={{ display: 'inline-block' }}>Срочная защита бизнеса</span> <br />
              <span style={{ display: 'inline-block' }}>строится из нескольких контуров</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Синхронные юридические действия в налоговых органах,</span> <br />
              <span style={{ display: 'inline-block' }}>банках, Росреестре и арбитражном суде.</span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', position: 'relative' }}>
            {urgentMeasures.map((item, idx) => (
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
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
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
        title={<><span style={{ display: 'inline-block' }}>Примеры защиты</span> <br /><span style={{ display: 'inline-block' }}>и восстановления управления</span></>}
        cases={practiceCases}
        showAllLink="/praktika"
        showAllText="Смотреть всю практику →"
      />

      {/* ═══ БЛОК 6: КАК ПРОХОДИТ РАБОТА (ПОРЯДОК РАБОТЫ) ═══ */}
      <ProcessBlock
        title={<><span style={{ display: 'inline-block' }}>Этапы защиты</span> <br /><span style={{ display: 'inline-block' }}>корпоративного контроля</span></>}
        subtitle="Последовательный план действий: от экстренной блокировки до полного восстановления законных полномочий."
        steps={processSteps}
        ctaTitle="Обнаружили попытку захвата управления или смену директора?"
        ctaSubtitle="Примем экстренные меры: заблокируем налоговую регистрацию и расчетные счета сегодня."
        ctaButtonText="Защитить бизнес сейчас"
        ctaButtonHref="#form"
      />

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
                <span style={{ display: "inline-block" }}>Смежные направления</span> <br /><span style={{ display: "inline-block" }}>корпоративной защиты</span>
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
                Срочные обеспечительные меры, оспаривание незаконных решений и защита директоров.
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
                buttonText="Защитить корпоративный контроль"
                commentPlaceholder="Кратко опишите угрозу: несанкционированная смена директора, вывод активов, подделка решений…"
                hiddenFields={[
                  { name: 'source_page', value: '/biznesu/korporativnyj-yurist/zashchita-korporativnogo-kontrolya/' },
                  { name: 'service', value: 'Защита корпоративного контроля' }
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
