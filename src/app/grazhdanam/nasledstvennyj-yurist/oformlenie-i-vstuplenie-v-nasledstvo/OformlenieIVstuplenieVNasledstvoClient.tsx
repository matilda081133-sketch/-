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

export default function OformlenieIVstuplenieVNasledstvoClient() {
  const cases: CaseData[] = [
    {
        "category": "Оформление / ЗАГС",
        "title": "Подтвердили родство через суд и оформили квартиру у нотариуса",
        "problem": "В свидетельствах о рождении матери и дочери была допущена ошибка в написании фамилии, нотариус отказал в выдаче свидетельства.",
        "action": "Истребовали архивные актовые записи, установили факт родственных отношений в суде и передали решение нотариусу.",
        "result": "Нотариус выдал свидетельство о праве на наследство, квартира успешно переоформлена в собственность."
    },
    {
        "category": "Доли / Супруг",
        "title": "Выделили супружескую долю и защитили права вдовы",
        "problem": "Дети наследодателя от первого брака претендовали на весь загородный дом, купленный во втором браке.",
        "action": "Оформили выдел 1/2 супружеской доли из наследственной массы, разделив между всеми наследниками только оставшуюся половину.",
        "result": "Доверительница сохранила законные 3/4 доли в доме и избежала неправомерного выселения."
    },
    {
        "category": "Дистанционно / Нотариус",
        "title": "Оформили наследство в Липецке для доверителя из Санкт-Петербурга",
        "problem": "Клиент не имел возможности приехать в Липецк для открытия и ведения наследственного дела на квартиру и автомобиль.",
        "action": "По доверенности открыли дело, собрали выписки из ЕГРН, провели оценку авто и получили свидетельства о праве.",
        "result": "Право собственности зарегистрировано в Росреестре без единой поездки клиента в Липецк."
    }
];
  const faqs = [
  {
    "q": "Какие документы нужны для открытия наследственного дела у нотариуса?",
    "a": "Свидетельство о смерти, паспорт наследника, документы, подтверждающие родство (свидетельства о рождении, браке), справка с последнего места жительства умершего (или выписка из домовой книги), а также правоустанавливающие документы на имущество (выписки ЕГРН, договоры, ПТС)."
  },
  {
    "q": "К какому нотариусу обращаться для открытия дела?",
    "a": "Наследственное дело открывается по последнему месту жительства наследодателя. Благодаря программе «Наследство без границ» в Липецке можно обратиться к любому нотариусу города."
  },
  {
    "q": "Что делать, если утеряно свидетельство о рождении или браке?",
    "a": "Юрист делает запросы в органы ЗАГС по месту регистрации акта гражданского состояния для получения повторного свидетельства или архивной справки. При отсутствии актовой записи факт родства устанавливается через суд."
  },
  {
    "q": "Можно ли оформить наследство по доверенности?",
    "a": "Да. Нотариальная доверенность даёт юристу право подавать заявления, истребовать справки, представлять интересы у нотариуса, в банках, Росреестре и получать готовые свидетельства."
  }
];

  const pricingTiers: PricingTier[] = [
    {
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Консультация</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и проверка документов</span>
        </>
      ),
      subtitle: 'Анализ оснований, проверка сроков и подготовка комплекта для нотариуса',
      features: [
      {
              "name": "Проверка состава документов и родства",
              "value": "[уточняется]"
      },
      {
              "name": "Расчёт наследственных долей",
              "value": "[уточняется]"
      },
      {
              "name": "Инструкция по обращению к нотариусу",
              "value": "[уточняется]"
      }
],
      buttonText: 'Записаться',
      buttonHref: '#form'
    },
    {
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Сопровождение</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>у нотариуса</span>
        </>
      ),
      subtitle: 'Ведение дела от первого заявления до получения свидетельств о праве',
      popular: true,
      badgeText: 'Популярно',
      features: [
      {
              "name": "Открытие наследственного дела",
              "value": "[уточняется]"
      },
      {
              "name": "Запросы в ЗАГС, банки и Росреестр",
              "value": "[уточняется]"
      },
      {
              "name": "Контроль выдачи свидетельств",
              "value": "[уточняется]"
      }
],
      buttonText: 'Выбрать тариф',
      buttonHref: '#form'
    },
    {
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Оформление «под ключ»</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>с регистрацией</span>
        </>
      ),
      subtitle: 'Полный комплекс услуг, включая регистрацию прав в Росреестре',
      features: [
      {
              "name": "Все нотариальные действия",
              "value": "[уточняется]"
      },
      {
              "name": "Сбор архивных справок",
              "value": "[уточняется]"
      },
      {
              "name": "Регистрация права собственности в ЕГРН",
              "value": "[уточняется]"
      }
],
      buttonText: 'Оформить под ключ',
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
        '@id': 'https://dejure-help.ru/grazhdanam/nasledstvennyj-yurist/oformlenie-i-vstuplenie-v-nasledstvo/#breadcrumbs',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Главная', 'item': 'https://dejure-help.ru/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Гражданам', 'item': 'https://dejure-help.ru/grazhdanam/' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Наследственный юрист', 'item': 'https://dejure-help.ru/grazhdanam/nasledstvennyj-yurist/' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Оформление и вступление в наследство', 'item': 'https://dejure-help.ru/grazhdanam/nasledstvennyj-yurist/oformlenie-i-vstuplenie-v-nasledstvo/' }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/grazhdanam/nasledstvennyj-yurist/oformlenie-i-vstuplenie-v-nasledstvo/#service',
        'url': 'https://dejure-help.ru/grazhdanam/nasledstvennyj-yurist/oformlenie-i-vstuplenie-v-nasledstvo/',
        'name': 'Оформление и вступление в наследство',
        'provider': { '@id': 'https://dejure-help.ru/#organization' },
        'areaServed': {
          '@type': 'AdministrativeArea',
          'name': 'Липецк и Липецкая область'
        },
        'description': 'Помощь в оформлении наследства по закону и завещанию в Липецке: нотариус, сбор документов, подтверждение родства и прав. Разберём ситуацию и поможем оформить имущество.'
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/grazhdanam/nasledstvennyj-yurist/oformlenie-i-vstuplenie-v-nasledstvo/#faq',
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
            <span style={{ color: 'var(--color-text-main)' }}>Оформление и вступление в наследство в Липецке</span>
          </>
        }
        superTitle="Наследственный юрист в Липецке"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Оформление
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              и вступление в наследство
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Открытие наследственного дела у нотариуса, сбор недостающих справок, подтверждение родства и сопровождение до получения свидетельств о праве собственности.
          </span>
        }
        primaryCtaText="Обсудить ситуацию с юристом"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_cta_oformlenie_nasledstva"
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
        trustItems={[{"text":"Открытие наследственного дела в срок"},{"text":"Восстановление утерянных документов ЗАГС"},{"text":"Сопровождение до выдачи свидетельств"},{"text":"Куратор — юрист М. В. Смольянинова"}]}
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
                tag: 'Нотариус / Сроки',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Открытие</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>дела у нотариуса</span>
                  </>
                ),
                desc: 'Подача заявления в установленный 6-месячный срок, выбор нотариальной конторы по месту открытия наследства.'
              },
              {
                tag: 'ЗАГС / Родство',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Утеряны</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>документы о родстве</span>
                  </>
                ),
                desc: 'Истребование повторных свидетельств, архивных справок и актовых записей через органы ЗАГС по всей России.'
              },
              {
                tag: 'Росреестр / Ошибки',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Не оформлены</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>права умершего</span>
                  </>
                ),
                desc: 'Включение имущества в наследственную массу, исправление ошибок в договорах, приватизация и кадастровый учёт.'
              },
              {
                tag: 'Доли / Супруг',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Несколько</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>наследников</span>
                  </>
                ),
                desc: 'Определение долей каждого наследника, выделение супружеской доли и согласование порядка оформления.'
              },
              {
                tag: 'Дистанционно',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Наследство</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>в другом регионе</span>
                  </>
                ),
                desc: 'Дистанционное ведение наследственного дела по доверенности без необходимости поездок доверителя.'
              },
              {
                tag: 'Отказ / Суд',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Отказ</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>нотариуса в оформлении</span>
                  </>
                ),
                desc: 'Устранение замечаний нотариуса, правовой аудит спорных справок либо признание права собственности через суд.'
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

          {/* Блок переходов при пропуске срока */}
          <div style={{
            marginTop: '32px',
            marginBottom: '36px',
            padding: '24px 28px',
            background: 'var(--color-white)',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            boxShadow: '0 4px 16px rgba(23, 50, 77, 0.05)',
            fontSize: '15px',
            color: 'var(--color-deep-blue)',
            lineHeight: 1.6
          }}>
            <p style={{ margin: '0 0 10px 0', fontWeight: 600 }}>
              Если срок обращения к нотариусу уже пропущен, сначала важно определить правовой маршрут:
            </p>
            <ul style={{ margin: 0, paddingLeft: '20px', listStyleType: 'disc' }}>
              <li style={{ marginBottom: '8px' }}>
                вы пользовались имуществом, оплачивали расходы или содержали его в течение шести месяцев —{' '}
                <Link href="/grazhdanam/nasledstvennyj-yurist/ustanovlenie-fakta-prinyatiya-nasledstva/" style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'underline' }}>
                  Установление факта принятия наследства
                </Link>;
              </li>
              <li>
                наследство фактически не принимали и есть причины пропуска срока —{' '}
                <Link href="/grazhdanam/nasledstvennyj-yurist/vosstanovlenie-sroka-prinyatiya-nasledstva/" style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'underline' }}>
                  Восстановление срока принятия наследства
                </Link>.
              </li>
            </ul>
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
                    { name: 'service', value: 'Оформление и вступление в наследство в Липецке | ЮК «Де-Юре»' },
                    { name: 'category', value: 'nasledstvennyj-yurist/oformlenie-i-vstuplenie-v-nasledstvo' },
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
