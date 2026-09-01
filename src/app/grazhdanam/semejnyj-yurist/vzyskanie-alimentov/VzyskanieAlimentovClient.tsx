'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MilitaryHero from '@/components/MilitaryHero';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import SpecialistBlock from '@/components/SpecialistBlock';
import PricingBlock, { PricingTier } from '@/components/PricingBlock';
import ProcessBlock, { ProcessStep } from '@/components/ProcessBlock';

export default function VzyskanieAlimentovClient() {
  const cases: CaseData[] = [
    {
      category: 'ТДС / Предприниматель',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Увеличили алименты</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>с 4 500 руб. до</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>28 000 руб. в месяц</span>
        </>
      ),
      problem: 'Отец-предприниматель декларировал нулевую прибыль, перечисляя на ребёнка символические суммы.',
      action: 'Истребовали через суд данные о расходах по личным счетам и доказали привычный уровень содержания ребёнка.',
      result: 'Суд установил алименты в размере 1,8 прожиточного минимума с ежеквартальной индексацией.'
    },
    {
      category: 'Неустойка / ФССП',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Взыскали долг</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>850 000 руб. и</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>420 000 руб. неустойки</span>
        </>
      ),
      problem: 'Должник 4 года уклонялся от выплат, пристав бездействовал и не рассчитывал задолженность.',
      action: 'Подали жалобу на бездействие пристава, получили расчёт долга и заявили иск о взыскании неустойки.',
      result: 'Суд удовлетворил требования в полном объёме; наложен арест на автомобиль должника.'
    },
    {
      category: 'Содержание матери / До 3 лет',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Взыскали алименты</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>на ребёнка и ежемесячное</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>содержание матери</span>
        </>
      ),
      problem: 'После развода муж отказывался материально помогать жене, находящейся в декретном отпуске с 10-месячным ребёнком.',
      action: 'Подготовили иск о взыскании алиментов на ребёнка и на содержание матери до 3 лет.',
      result: 'Суд взыскал 1/4 дохода на ребёнка и 15 000 руб. ежемесячно на содержание матери.'
    }
  ];
  const faqs = [
  {
    "q": "Как быстрее взыскать алименты: через приказ или через иск?",
    "a": "Судебный приказ выносится в течение 10 дней со дня поступления заявления без вызова взыскателя и должника. Приказное производство применяется, когда алименты взыскиваются в долях от дохода и отсутствует спор об отцовстве. Если требуется твёрдая денежная сумма, смешанный способ взыскания или должник отменил приказ, подаётся исковое заявление."
  },
  {
    "q": "Можно ли взыскать алименты за прошедший период?",
    "a": "Алименты присуждаются с момента обращения в суд. За прошедший период (в пределах 3 лет) алименты могут быть взысканы только в случае, если судом установлено, что до обращения в суд принимались меры к получению средств, но плательщик уклонялся от уплаты (п. 2 ст. 107 СК РФ)."
  },
  {
    "q": "Что делать, если пристав не ищет имущество должника?",
    "a": "Юрист подаёт официальные ходатайства о проверке всех банковских счетов, наложении запрета на выезд из РФ, ограничении водительских прав и привлечении должника к административной ответственности по ст. 5.35.1 КоАП РФ."
  }
];

  const pricingTiers: PricingTier[] = [
    {
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Судебный приказ</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>о взыскании алиментов</span>
        </>
      ),
      subtitle: 'Быстрое взыскание алиментов в долях без вызова сторон в суд',
      features: [
      {
              "name": "Подготовка заявления о выдаче приказа",
              "value": "[уточняется]"
      },
      {
              "name": "Подача мировому судье",
              "value": "[уточняется]"
      },
      {
              "name": "Передача приказа приставам или в банк",
              "value": "[уточняется]"
      }
],
      buttonText: 'Заказать приказ',
      buttonHref: '#form'
    },
    {
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Иск в суд</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>о взыскании в ТДС</span>
        </>
      ),
      subtitle: 'Взыскание в твёрдой сумме или смешанном виде при скрытом доходе',
      popular: true,
      badgeText: 'Популярно',
      features: [
      {
              "name": "Сбор доказательств уровня расходов",
              "value": "[уточняется]"
      },
      {
              "name": "Подготовка иска и расчёт обоснования",
              "value": "[уточняется]"
      },
      {
              "name": "Представительство в районном суде",
              "value": "[уточняется]"
      }
],
      buttonText: 'Выбрать тариф',
      buttonHref: '#form'
    },
    {
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Взыскание долга</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и неустойки «под ключ»</span>
        </>
      ),
      subtitle: 'Полное сопровождение исполнительного производства и взыскание штрафов',
      features: [
      {
              "name": "Расчёт неустойки по ст. 115 СК РФ",
              "value": "[уточняется]"
      },
      {
              "name": "Контроль работы судебных приставов",
              "value": "[уточняется]"
      },
      {
              "name": "Арест имущества и запрет выезда должника",
              "value": "[уточняется]"
      }
],
      buttonText: 'Взыскать долг',
      buttonHref: '#form'
    }
  ];

  const steps: ProcessStep[] = [
    {
      num: '01',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Проверяем основания</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и документы</span>
        </>
      ),
      desc: 'Анализируем свидетельство о рождении, соглашения, судебные акты, сведения о выплатах, доходах и образовавшейся задолженности.'
    },
    {
      num: '02',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Выбираем способ</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>взыскания</span>
        </>
      ),
      desc: 'Определяем, подходит ли судебный приказ, взыскание в долях, твёрдой денежной сумме или смешанном виде.'
    },
    {
      num: '03',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Собираем доказательства</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и выполняем расчёты</span>
        </>
      ),
      desc: 'Подтверждаем расходы на ребёнка, фактический уровень дохода плательщика, рассчитываем задолженность и неустойку.'
    },
    {
      num: '04',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Готовим документы</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и представляем в суде</span>
        </>
      ),
      desc: 'Составляем заявление или иск, отзыв, расчёты и ходатайства об истребовании сведений.'
    },
    {
      num: '05',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Сопровождаем</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>взыскание</span>
        </>
      ),
      desc: 'Получаем судебный приказ или исполнительный лист, передаём его в ФССП и контролируем расчёт задолженности и применение исполнительных мер.'
    },
    {
      isBanner: true,
      title: 'Работаем дистанционно',
      desc: 'Первичное обсуждение и передача копий документов могут пройти дистанционно.'
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LegalService',
        '@id': 'https://dejure-help.ru/#organization',
        'name': 'ЮК «Де-Юре»',
        'url': 'https://dejure-help.ru',
        'logo': 'https://dejure-help.ru/images/logo_dark.png',
        'telephone': '+7 (910) 350-31-11',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'ул. Советская, д. 35',
          'addressLocality': 'Липецк',
          'addressRegion': 'Липецкая область',
          'addressCountry': 'RU'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/grazhdanam/semejnyj-yurist/vzyskanie-alimentov/#breadcrumbs',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Главная', 'item': 'https://dejure-help.ru/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Гражданам', 'item': 'https://dejure-help.ru/grazhdanam/' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Семейный юрист', 'item': 'https://dejure-help.ru/grazhdanam/semejnyj-yurist/' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Взыскание алиментов', 'item': 'https://dejure-help.ru/grazhdanam/semejnyj-yurist/vzyskanie-alimentov/' }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/grazhdanam/semejnyj-yurist/vzyskanie-alimentov/#service',
        'url': 'https://dejure-help.ru/grazhdanam/semejnyj-yurist/vzyskanie-alimentov/',
        'name': 'Взыскание алиментов',
        'provider': { '@id': 'https://dejure-help.ru/#organization' },
        'areaServed': {
          '@type': 'AdministrativeArea',
          'name': 'Липецк и Липецкая область'
        },
        'description': 'Помощь юриста по алиментам в Липецке: взыскание в долях или твёрдой сумме, изменение размера, задолженность, неустойка и представительство в суде.'
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/grazhdanam/semejnyj-yurist/vzyskanie-alimentov/#faq',
        'mainEntity': faqs.map(faq => ({
          '@type': 'Question',
          'name': faq.q,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.a
          }
        }))
      },
      {
        '@type': 'Person',
        '@id': 'https://dejure-help.ru/specialisty/smolyaninova-marina-valerevna/#person',
        'name': 'Марина Валерьевна Смольянинова',
        'jobTitle': 'Ведущий юрист',
        'url': 'https://dejure-help.ru/specialisty/smolyaninova-marina-valerevna/',
        'worksFor': { '@id': 'https://dejure-help.ru/#organization' }
      }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      {/* ═══ БЛОК 1: HERO ═══ */}
      <MilitaryHero
        breadcrumbs={
          <>
            <Link href="/">Главная</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/grazhdanam/">Гражданам</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/grazhdanam/semejnyj-yurist/">Семейный юрист</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Взыскание алиментов в Липецке</span>
          </>
        }
        superTitle="Семейный юрист в Липецке"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Взыскание алиментов
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Взыскание алиментов в долях от дохода или в твёрдой денежной сумме, взыскание задолженности, неустойки и изменение ранее установленного размера выплат.
          </span>
        }
        primaryCtaText="Обсудить ситуацию с юристом"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_cta_vzyskanie_alimentov"
        primaryCtaSubtext={
          <>Если требуется срочная помощь, позвоните: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (910) 350-31-11</a></>
        }
        trustItems={[{"text":"Взыскание в долях и твёрдой денежной сумме"},{"text":"Поиск скрытых доходов плательщика"},{"text":"Расчёт и взыскание неустойки за просрочку"},{"text":"Куратор — юрист М. В. Смольянинова"}]}
        imageUrl="/images/smolyaninova.jpg"
        imageName="Марина Валерьевна Смольянинова"
        imageSubtitle="Ведущий юрист ЮК «Де-Юре», куратор направления «Семейное право»"
        imageObjectPosition="center 20%"
      />

      {/* ═══ БЛОК 2: В КАКИХ СИТУАЦИЯХ МЫ ПОМОГАЕМ (ТИПОВОЙ ШАБЛОН) ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>В каких ситуациях</span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>мы помогаем гражданам</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Ознакомьтесь с типовыми сценариями. Если ваша ситуация сложнее или включает несколько спорных вопросов — мы разработаем индивидуальную стратегию защиты.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '40px' }}>
            {[
              {
                tag: 'Доход / Проценты',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Взыскание в долях</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>от официальной зарплаты</span>
                  </>
                ),
                desc: '1/4 на одного ребёнка, 1/3 на двоих, 1/2 на трёх и более детей при стабильном официальном доходе.'
              },
              {
                tag: 'ТДС / Без работы',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Алименты в твёрдой</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>денежной сумме (ТДС)</span>
                  </>
                ),
                desc: 'При отсутствии постоянного дохода, сезонной работе, заработке в валюте или статусе самозанятого/ИП.'
              },
              {
                tag: 'Скрытие / Бизнес',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Поиск скрытых</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>доходов плательщика</span>
                  </>
                ),
                desc: 'Выявление реальных доходов через налоговые органы, банковские выписки, имущество и сделки.'
              },
              {
                tag: 'Долг / Неустойка',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Взыскание долга</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и неустойки 0,1% в день</span>
                  </>
                ),
                desc: 'Расчёт задолженности через судебных приставов, взыскание штрафных санкций и процентов за неуплату.'
              },
              {
                tag: 'Изменение / Суд',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Увеличение или</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>уменьшение выплат</span>
                  </>
                ),
                desc: 'Изменение размера алиментов при рождении других детей, изменении материального или семейного положения.'
              },
              {
                tag: 'Супруг / До 3 лет',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Алименты на содержание</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>матери ребёнка до 3 лет</span>
                  </>
                ),
                desc: 'Взыскание содержания на супругу в период беременности и до достижения ребёнком возраста 3 лет.'
              }
            ].map((item, i) => (
              <div key={i} className="hover-lift" style={{
                padding: '36px 30px',
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-primary)',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.45s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease'
              }}>
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
                  position: 'relative',
                  zIndex: 1
                }}>
                  {item.tag}
                </div>
                <h3 style={{ 
                  fontFamily: 'var(--font-serif)', 
                  fontSize: '17px', 
                  fontWeight: 600,
                  color: 'var(--color-deep-blue)', 
                  margin: '0 0 12px 0', 
                  lineHeight: 1.35, 
                  minHeight: '44px',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {item.title}
                </h3>
                <p style={{ 
                  color: 'var(--color-text-secondary)', 
                  fontSize: '14px', 
                  lineHeight: 1.6, 
                  margin: 0,
                  position: 'relative',
                  zIndex: 1
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ display: 'inline-block' }}>
              Получить правовую оценку
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: КУРАТОР НАПРАВЛЕНИЯ (ТИПОВОЙ ШАБЛОН) ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Марина Валерьевна Смольянинова"
        position={<>Ведущий юрист ЮК &#171;Де-Юре&#187;,<br />куратор направления &#171;Семейное право&#187;</>}
        imageUrl="/images/smolyaninova.jpg"
        imagePosition="center 20%"
        profileHref="/specialisty/smolyaninova-marina-valerevna/"
        profileText="Подробнее о Марине Валерьевне Смольяниновой →"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            13 лет профессионального опыта в сфере правоприменения, защиты прав граждан и семейных правоотношений.
          </span>,
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Специализируется на комплексном разрешении семейных споров: раздел сложного имущества и бизнеса, алименты, определение места жительства детей</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Успешный опыт мирного досудебного урегулирования конфликтов, составления соглашений и судебной защиты интересов доверителей</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Ведёт дела в Липецке и Липецкой области; доступен дистанционный формат работы для доверителей из любых регионов России</span>
            </li>
          </ul>
        ]}
        buttonText="Задать вопрос юристу"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 4: ПРИМЕРЫ ИЗ ПРАКТИКИ ═══ */}
      <CasesBlock
        title="Примеры дел из практики"
        showAllLink="/praktika/"
        showAllText="Смотреть все дела"
        showDemoWarning={true}
        cases={cases}
      />

      {/* ═══ БЛОК 5: КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock
        title="Как проходит работа"
        subtitle="Чёткий алгоритм действий — вы всегда знаете, что происходит на каждом этапе вашего дела."
        alignTitle="center"
        steps={steps}
        ctaTitle="Готовы обсудить вашу ситуацию"
        ctaSubtitle="Опишите задачу — юрист изучит документы и предложит понятный план действий."
        ctaButtonText="Обсудить ситуацию"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 6: СТОИМОСТЬ УСЛУГ ═══ */}
      <PricingBlock
        title="Стоимость услуг семейного юриста"
        subtitle="Стоимость зависит от сложности спора, состава имущества, наличия документов и необходимости судебного процесса."
        tiers={pricingTiers}
        disclaimer="Стоимость определяется после уточнения задачи и изучения имеющихся документов. Состав услуг, цена и порядок оплаты фиксируются в договоре до начала работы. Оплата вознаграждения исполнителя не зависит от исхода дела и не включает государственные пошлины и сопутствующие судебные расходы."
      />

      {/* ═══ БЛОК 7: ЧАСТЫЕ ВОПРОСЫ (FAQ) ═══ */}
      <FAQBlock
        superTitle="Частые вопросы клиентов"
        title={<><span>Ответы на</span> <br /><span>частые вопросы</span></>}
        subtitle="О процедурах и юридических тонкостях"
        ctaText="Задать свой вопрос"
        ctaLink="#form"
        faqs={faqs}
      />

      {/* ═══ БЛОК 8: ФИНАЛЬНАЯ ФОРМА (СВЯЗАТЬСЯ С НАМИ - ТИПОВОЙ 2-КОЛОНОЧНЫЙ ШАБЛОН) ═══ */}
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
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Обсудите взыскание</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>алиментов с юристом</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Укажите, установлены ли алименты, как сейчас производятся выплаты, известны ли доходы плательщика и образовалась ли задолженность. Марина Валерьевна Смольянинова оценит подходящий способ взыскания и необходимые документы.
              </p>
              
              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация юриста</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните прямо сейчас: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (910) 350-31-11</a>
                </p>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Конфиденциальность:</strong>
                Все сведения и документы защищены профессиональной тайной. Безопасный способ передачи документов согласуем после первичного контакта.
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
                buttonText="Отправить обращение"
                commentPlaceholder="Опишите вашу ситуацию: ..."
                hiddenFields={[
                  { name: 'source_page', value: 'https://dejure-help.ru/grazhdanam/semejnyj-yurist/vzyskanie-alimentov/' },
                  { name: 'direction', value: 'semejnyj_yurist' },
                  { name: 'selected_specialist', value: 'smolyaninova-marina-valerevna' }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
