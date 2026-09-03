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

export default function PriznanieNaslednikaNedostojnymClient() {
  const cases: CaseData[] = [
    {
        "category": "Алименты / ФССП",
        "title": "Отстранили сына от наследства матери за злостное уклонение от алиментов",
        "problem": "Сын годами уклонялся от уплаты алиментов на содержание нетрудоспособной матери, задолженность превышала 600 000 руб., однако претендовал на квартиру.",
        "action": "Истребовали материалы исполнительного производства из ФССП, доказали злостный характер уклонения и подали иск по п. 2 ст. 1117 ГК РФ.",
        "result": "Суд признал наследника недостойным; квартира полностью перешла добросовестной дочери."
    },
    {
        "category": "Родительские права",
        "title": "Исключили лишённого прав отца из числа наследников погибшего сына",
        "problem": "Отец, лишённый родительских прав 15 лет назад, подал заявление нотариусу на получение выплат и имущества умершего совершеннолетнего сына.",
        "action": "Получили архивное решение суда о лишении прав и представили доказательства отсутствия восстановления в правах.",
        "result": "Нотариус отстранил отца от наследования на основании закона без судебных тяжб."
    },
    {
        "category": "Защита / Отказ в иске",
        "title": "Защитили добросовестного наследника от попытки признания недостойным",
        "problem": "Родственники пытались отстранить внука от наследства дедушки, обвиняя его в недостаточном уходе за умершим.",
        "action": "Доказали отсутствие судебных решений об алиментах и противоправных действий со стороны внука.",
        "result": "Суд полностью отказал в иске родственников; внук вступил в законные права."
    }
];
  const faqs = [
  {
    "q": "Кого закон относит к недостойным наследникам?",
    "a": "1) Лиц, совершивших умышленные противоправные действия против наследодателя или других наследников; 2) Родителей, лишённых родительских прав; 3) Граждан, злостно уклонявшихся от законных обязанностей по содержанию наследодателя (ст. 1117 ГК РФ)."
  },
  {
    "q": "Достаточно ли плохих отношений с наследодателем, чтобы признать наследника недостойным?",
    "a": "Нет. Личная неприязнь, ссоры или отсутствие общения не являются основаниями. Требуются вступившие в силу приговоры суда или доказанный факт злостного неисполнения алиментных обязательств."
  },
  {
    "q": "Что происходит с долей недостойного наследника?",
    "a": "Его доля переходит к другим наследникам по закону пропорционально их долям (приращение наследственных долей по ст. 1161 ГК РФ)."
  },
  {
    "q": "Может ли недостойный наследник претендовать на обязательную долю?",
    "a": "Нет. Правила ст. 1117 ГК РФ распространяются и на наследников, имеющих право на обязательную долю."
  }
];

  const pricingTiers: PricingTier[] = [
    {
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Правовая оценка</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>законных оснований</span>
        </>
      ),
      subtitle: 'Проверка фактов по ст. 1117 ГК РФ, анализ судебной практики и рисков',
      features: [
      {
              "name": "Анализ документов и судебных решений",
              "value": "[уточняется]"
      },
      {
              "name": "Проверка оснований отстранения",
              "value": "[уточняется]"
      },
      {
              "name": "План доказательной базы",
              "value": "[уточняется]"
      }
],
      buttonText: 'Оценить ситуацию',
      buttonHref: '#form'
    },
    {
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Сбор доказательств</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и подготовка иска</span>
        </>
      ),
      subtitle: 'Истребование справок ФССП, приговоров и подготовка иска в суд',
      features: [
      {
              "name": "Адвокатские запросы в ведомства",
              "value": "[уточняется]"
      },
      {
              "name": "Подготовка иска по ст. 1117 ГК РФ",
              "value": "[уточняется]"
      },
      {
              "name": "Расчёт перераспределения долей",
              "value": "[уточняется]"
      }
],
      buttonText: 'Заказать иск',
      buttonHref: '#form'
    },
    {
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Судебный процесс</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>«под ключ»</span>
        </>
      ),
      subtitle: 'Полное ведение дела в суде до исключения лица и оформления долей',
      popular: true,
      badgeText: 'Популярно',
      features: [
      {
              "name": "Представительство на всех заседаниях",
              "value": "[уточняется]"
      },
      {
              "name": "Исключение лица из состава наследников",
              "value": "[уточняется]"
      },
      {
              "name": "Переоформление прав у нотариуса",
              "value": "[уточняется]"
      }
],
      buttonText: 'Выбрать тариф',
      buttonHref: '#form'
    }
  ];

  const steps: ProcessStep[] = [
    {
      num: '01',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Изучаем ситуацию</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и документы</span>
        </>
      ),
      desc: 'Анализируем родственные связи, имеющиеся справки, свидетельства и завещания, проверяем сроки и риски споров.'
    },
    {
      num: '02',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Собираем недостающие</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>доказательства</span>
        </>
      ),
      desc: 'Запрашиваем архивные документы из ЗАГС, делаем запросы в банки, Росреестр, медицинские учреждения и к нотариусам.'
    },
    {
      num: '03',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Формируем правовую</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>стратегию</span>
        </>
      ),
      desc: 'Сравниваем нотариальный, переговорный и судебный варианты, оцениваем риски, сроки и согласовываем фиксированную стоимость.'
    },
    {
      num: '04',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Готовим документы</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и ведём процесс</span>
        </>
      ),
      desc: 'Составляем заявления нотариусу, исковые заявления в суд, ходатайства об экспертизах и представляем ваши интересы на заседаниях.'
    },
    {
      num: '05',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Сопровождаем</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>регистрацию прав</span>
        </>
      ),
      desc: 'После получения свидетельства нотариуса или решения суда помогаем завершить регистрацию права собственности в Росреестре.'
    },
    {
      isBanner: true,
      title: 'Дистанционный формат',
      desc: 'Первичное обсуждение и передача копий документов могут пройти дистанционно. Защищённый канал передачи документов согласуется после первичного контакта.'
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
        '@id': 'https://dejure-help.ru/grazhdanam/nasledstvennyj-yurist/priznanie-naslednika-nedostojnym/#breadcrumbs',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Главная', 'item': 'https://dejure-help.ru/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Гражданам', 'item': 'https://dejure-help.ru/grazhdanam/' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Наследственный юрист', 'item': 'https://dejure-help.ru/grazhdanam/nasledstvennyj-yurist/' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Признание наследника недостойным', 'item': 'https://dejure-help.ru/grazhdanam/nasledstvennyj-yurist/priznanie-naslednika-nedostojnym/' }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/grazhdanam/nasledstvennyj-yurist/priznanie-naslednika-nedostojnym/#service',
        'url': 'https://dejure-help.ru/grazhdanam/nasledstvennyj-yurist/priznanie-naslednika-nedostojnym/',
        'name': 'Признание наследника недостойным',
        'provider': { '@id': 'https://dejure-help.ru/#organization' },
        'areaServed': {
          '@type': 'AdministrativeArea',
          'name': 'Липецк и Липецкая область'
        },
        'description': 'Юридическая помощь по делам о признании наследника недостойным и исключении из наследства в Липецке. Проверим основания по ст. 1117 ГК РФ и представим интересы в суде.'
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/grazhdanam/nasledstvennyj-yurist/priznanie-naslednika-nedostojnym/#faq',
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
            <Link href="/grazhdanam/nasledstvennyj-yurist/">Наследственный юрист</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Признание наследника недостойным в Липецке</span>
          </>
        }
        superTitle="Наследственный юрист в Липецке"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Признание
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              наследника недостойным
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Исключение недобросовестных лиц из состава наследников по ст. 1117 ГК РФ, отстранение от наследства и перераспределение долей в судебном порядке.
          </span>
        }
        primaryCtaText="Обсудить ситуацию с юристом"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_cta_priznanie_nedostojnym"
        primaryCtaSubtext={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Если требуется срочная помощь, позвоните:
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (910) 350-31-11</a>
            </span>
          </span>
        }
        trustItems={[{"text":"Отстранение от наследования по ст. 1117 ГК РФ"},{"text":"Сбор доказательств противоправных действий"},{"text":"Перераспределение долей в пользу законных наследников"},{"text":"Куратор — юрист М. В. Смольянинова"}]}
        imageUrl="/images/smolyaninova.jpg"
        imageName="Марина Валерьевна Смольянинова"
        imageSubtitle="Ведущий юрист ЮК «Де-Юре», куратор направления «Наследственное право»"
        imageObjectPosition="center 20%"
      />

      {/* ═══ БЛОК 2: В КАКИХ СИТУАЦИЯХ МЫ ПОМОГАЕМ (ТИПОВОЙ ШАБЛОН) ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>В каких ситуациях</span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>мы можем помочь</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Ознакомьтесь с типовыми сценариями. Если ваша ситуация сложнее или включает несколько вопросов — мы разработаем индивидуальный план действий.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '40px' }}>
            {[
              {
                tag: 'Ст. 1117 ГК / Закон',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Противоправные действия</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>против наследодателя</span>
                  </>
                ),
                desc: 'Умышленные преступления или незаконные попытки склонить к составлению завещания в свою пользу.'
              },
              {
                tag: 'Алименты / ФССП',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Злостное уклонение</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>от уплаты алиментов</span>
                  </>
                ),
                desc: 'Неисполнение судебного решения об уплате алиментов или содержания престарелого наследодателя.'
              },
              {
                tag: 'Родительские права',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Лишение</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>родительских прав</span>
                  </>
                ),
                desc: 'Родители, лишённые родительских прав и не восстановленные в них ко дню открытия наследства.'
              },
              {
                tag: 'Подделка / Скрытие',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Подделка</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>или сокрытие завещания</span>
                  </>
                ),
                desc: 'Попытки скрыть существование законного завещания или подделать подпись умершего.'
              },
              {
                tag: 'Ст. 1117 ГК / Наследство',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Противоправные действия</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>ради получения наследства</span>
                  </>
                ),
                desc: 'Проверим, были ли умышленные противоправные действия направлены на призвание к наследованию, увеличение доли или устранение других наследников; соберём доказательства для суда либо защитим от необоснованных требований.'
              },
              {
                tag: 'Защита чести',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Защита</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>от ложных обвинений</span>
                  </>
                ),
                desc: 'Защита добросовестного наследника от попыток родственников объявить его недостойным из личной неприязни.'
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
        position={<>Ведущий юрист ЮК &#171;Де-Юре&#187;,<br />куратор направления &#171;Наследственное право&#187;</>}
        imageUrl="/images/smolyaninova.jpg"
        imagePosition="center 20%"
        profileHref="/specialisty/smolyaninova-marina-valerevna/"
        profileText="Подробнее о Марине Валерьевне Смольяниновой →"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            13 лет профессионального опыта в сфере правоприменения и защиты прав граждан: глубокое знание процедур, требований нотариата и судебной практики.
          </span>,
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Специализируется на комплексном сопровождении наследственных дел: оформление у нотариуса, восстановление сроков, оспаривание завещаний и выдел долей</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Успешный опыт мирного досудебного урегулирования споров между наследниками и защиты интересов доверителей в судах всех инстанций</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Ведёт наследственные дела в Липецке и Липецкой области; доступен дистанционный формат работы для доверителей из любых регионов России и из-за рубежа</span>
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
        title="Стоимость услуг наследственного юриста"
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
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Обсудите ситуацию</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>с наследственным юристом</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Опишите ситуацию, состав имущества и статус обращения к нотариусу. Обращение передадим Марине Валерьевне Смольяниновой. Она проверит документы, оценит риски и свяжется с вами для согласования порядка действий.
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
                commentPlaceholder="Опишите вашу ситуацию: состав наследства, наличие завещания, пропущен ли срок..."
                hiddenFields={[
                    { name: 'service', value: 'Признание наследника недостойным в Липецке | ЮК «Де-Юре»' },
                    { name: 'category', value: 'nasledstvennyj-yurist/priznanie-naslednika-nedostojnym' },
                    { name: 'specialist', value: 'Марина Валерьевна Смольянинова' }
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
