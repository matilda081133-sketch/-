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

export default function BrachnyjDogovorClient() {
  const cases: CaseData[] = [
    {
        "category": "Ипотека / Банк",
        "title": "Разработали брачный договор для одобрения ипотеки без участия супруга",
        "problem": "Банк отказывал в ипотеке из-за просрочек супруга по потребительским кредитам.",
        "action": "Составили брачный договор с режимом раздельной собственности на покупаемую квартиру и обязательства по кредиту.",
        "result": "Банк одобрил льготную ипотеку; право собственности доверительницы полностью защищено."
    },
    {
        "category": "Бизнес / Защита",
        "title": "Защитили производственную компанию клиента от раздела при разводе",
        "problem": "Предприниматель планировал привлечь инвесторов, но требовалось исключить корпоративные риски семейных споров.",
        "action": "Разработали комплексный брачный договор, закрепив доли в бизнесе и доходы за супругом-основателем.",
        "result": "Договор удостоверен нотариусом; инвестиционная сделка успешно закрыта."
    },
    {
        "category": "Ст. 44 СК РФ / Оспаривание",
        "title": "Оспорили брачный договор, лишавший доверительницу всего имущества",
        "problem": "По брачному договору все 3 квартиры и дом отходили мужу, а жене оставался только автомобиль 2012 года.",
        "action": "Доказали в суде факт крайне неблагоприятного положения супруги по ст. 44 СК РФ.",
        "result": "Брачный договор признан недействительным; имущество разделено пополам."
    }
];
  const faqs = [
  {
    "q": "Обязательно ли заверять брачный договор у нотариуса?",
    "a": "Да. В соответствии с п. 2 ст. 41 Семейного кодекса РФ брачный договор подлежит обязательному нотариальному удостоверению. Несоблюдение нотариальной формы влечёт его недействительность (ничтожность)."
  },
  {
    "q": "Можно ли в брачном договоре определить, с кем останутся дети?",
    "a": "Нет. Брачный договор регулирует исключительно имущественные права и обязанности супругов (ст. 42 СК РФ). Права и обязанности в отношении детей, порядок общения и личные неимущественные отношения брачным договором регулироваться не могут."
  },
  {
    "q": "Когда брачный договор вступает в законную силу?",
    "a": "Если договор заключён до вступления в брак, он вступает в силу со дня государственной регистрации заключения брака в ЗАГС. Если договор заключён супругами в период брака — с момента его нотариального удостоверения."
  }
];

  const pricingTiers: PricingTier[] = [
    {
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Аудит проекта</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>брачного договора</span>
        </>
      ),
      subtitle: 'Правовая экспертиза готового текста и выявление рисков оспаривания',
      features: [
      {
              "name": "Проверка текста на соответствие СК РФ",
              "value": "[уточняется]"
      },
      {
              "name": "Выявление неблагоприятных условий",
              "value": "[уточняется]"
      },
      {
              "name": "Рекомендации по корректировке формулировок",
              "value": "[уточняется]"
      }
],
      buttonText: 'Проверить договор',
      buttonHref: '#form'
    },
    {
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Разработка договора</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>у юриста «под ключ»</span>
        </>
      ),
      subtitle: 'Индивидуальный проект брачного договора под ваши цели и имущество',
      popular: true,
      badgeText: 'Популярно',
      features: [
      {
              "name": "Согласование условий с обоими супругами",
              "value": "[уточняется]"
      },
      {
              "name": "Учёт требований банков и Росреестра",
              "value": "[уточняется]"
      },
      {
              "name": "Подготовка комплекта для нотариуса",
              "value": "[уточняется]"
      }
],
      buttonText: 'Выбрать тариф',
      buttonHref: '#form'
    },
    {
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Оспаривание</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>договора в судебном порядке</span>
        </>
      ),
      subtitle: 'Признание брачного договора недействительным и раздел имущества',
      features: [
      {
              "name": "Анализ кабальности условий по ст. 44 СК РФ",
              "value": "[уточняется]"
      },
      {
              "name": "Подготовка иска и формирование доказательств",
              "value": "[уточняется]"
      },
      {
              "name": "Судебное представительство во всех инстанциях",
              "value": "[уточняется]"
      }
],
      buttonText: 'Оспорить договор',
      buttonHref: '#form'
    }
  ];

  const steps: ProcessStep[] = [
    {
      num: '01',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Изучаем</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>ситуацию и документы</span>
        </>
      ),
      desc: 'Анализируем свидетельства, выписки по счетам, договоры на имущество и определяем правовую перспективу дела.'
    },
    {
      num: '02',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Ищем варианты</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>мирного соглашения</span>
        </>
      ),
      desc: 'Если вторая сторона готова к диалогу, проводим переговоры и готовим проект нотариального соглашения без суда.'
    },
    {
      num: '03',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Формируем</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>правовую стратегию</span>
        </>
      ),
      desc: 'Собираем доказательства, запрашиваем архивные справки, выписки ЕГРН, рассчитываем госпошлину и согласуем план.'
    },
    {
      num: '04',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Готовим</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>документы и ведём процесс</span>
        </>
      ),
      desc: 'Составляем иск, ходатайства об обеспечительных мерах, экспертизах и защищаем ваши интересы во всех заседаниях суда.'
    },
    {
      num: '05',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Сопровождаем</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>исполнение решения</span>
        </>
      ),
      desc: 'Получаем готовый судебный акт, исполнительный лист и сопровождаем регистрацию прав в Росреестре или работу с ФССП.'
    },
    {
      isBanner: true,
      title: 'Дистанционный формат',
      desc: 'Первичное обсуждение и передача копий документов могут пройти дистанционно. Защищённый канал связи согласуется после первичного контакта.'
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
          'streetAddress': 'пл. Театральная, д. 3, офис 401',
          'addressLocality': 'Липецк',
          'postalCode': '398001',
          'addressCountry': 'RU'
        }
      },
      {
        '@type': 'Service',
        'name': 'Брачный договор в Липецке — составление и проверка | Де-Юре',
        'provider': { '@id': 'https://dejure-help.ru/#organization' },
        'areaServed': {
          '@type': 'AdministrativeArea',
          'name': 'Липецк и Липецкая область'
        },
        'description': 'Юридическая помощь по брачному договору в Липецке: составление, проверка, изменение, расторжение и оспаривание. Подготовка к нотариальному удостоверению.'
      },
      {
        '@type': 'FAQPage',
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
            <span style={{ color: 'var(--color-text-main)' }}>Брачный договор в Липецке</span>
          </>
        }
        superTitle="Семейный юрист в Липецке"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Брачный
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              договор в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Разработка индивидуального брачного договора для защиты личных активов, бизнеса и недвижимости, правовой аудит готовых соглашений и сопровождение у нотариуса.
          </span>
        }
        primaryCtaText="Обсудить ситуацию с юристом"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_cta_brachnyj_dogovor"
        primaryCtaSubtext={
          <>Если требуется срочная помощь, позвоните: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (910) 350-31-11</a></>
        }
        trustItems={[{"text":"Защита личного имущества и долей в бизнесе"},{"text":"Составление договоров для ипотеки и банков"},{"text":"Проверка на кабальность и риски оспаривания"},{"text":"Куратор — юрист М. В. Смольянинова"}]}
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
                tag: 'Ипотека / Банк',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Брачный договор</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>для оформления ипотеки</span>
                  </>
                ),
                desc: 'Исключение супруга с плохой кредитной историей из созаёмщиков или закрепление квартиры за плательщиком.'
              },
              {
                tag: 'Бизнес / Активы',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Защита бизнеса</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и долей в компаниях</span>
                  </>
                ),
                desc: 'Сохранение коммерческой недвижимости, акций и долей в ООО за супругом-предпринимателем при разводе.'
              },
              {
                tag: 'Личное жильё',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Раздельный режим</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>собственности супругов</span>
                  </>
                ),
                desc: 'Закрепление правила: каждый объект недвижимости остаётся в собственности того, на чьё имя он оформлен.'
              },
              {
                tag: 'Долги / Риски',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Защита семьи</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>от долгов и кредитов</span>
                  </>
                ),
                desc: 'Разграничение кредитных обязательств, исключающее обращение взыскания на имущество второго супруга.'
              },
              {
                tag: 'Аудит / Анализ',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Правовой анализ</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>готового проекта договора</span>
                  </>
                ),
                desc: 'Проверка условий договора, предложенного второй стороной, на скрытые риски и дискриминационные пункты.'
              },
              {
                tag: 'Суд / Отмена',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Оспаривание</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>брачного договора в суде</span>
                  </>
                ),
                desc: 'Признание договора недействительным по ст. 44 СК РФ, если условия ставят супруга в крайне неблагоприятное положение.'
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
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Обсудите ситуацию</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>с семейным юристом</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Опишите ситуацию, состав имущества или спорные вопросы о детях. Обращение передадим Марине Валерьевне Смольяниновой. Она проверит документы, оценит риски и свяжется с вами для согласования порядка действий.
              </p>
              
              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '8px', fontSize: '15px' }}>
                  Прямой контакт для срочных вопросов:
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                  <a href="tel:+79103503111" style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-primary)', textDecoration: 'none' }}>
                    +7 (910) 350-31-11
                  </a>
                  <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>
                    (Пн-Пт 9:00 - 18:00)
                  </span>
                </div>
              </div>

              <div style={{ marginTop: 'auto', paddingTop: '10px' }}>
                <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Гарантируем конфиденциальность. Данные передаются только юристу компании «Де-Юре» для правового анализа.
                </p>
              </div>
            </div>

            <div>
              <div style={{ background: 'var(--color-white)', padding: '40px', border: '1px solid var(--color-border)', borderTop: '4px solid var(--color-primary)', boxShadow: '0 12px 40px rgba(23, 50, 77, 0.08)' }}>
                <ContactsForm 
                  title="Заявка на консультацию" 
                  subtitle="Заполните форму, и юрист свяжется с вами в течение 15 минут"
                  hiddenFields={[
                    { name: 'service', value: 'Брачный договор в Липецке — составление и проверка | Де-Юре' },
                    { name: 'category', value: 'semejnyj-yurist/brachnyj-dogovor' },
                    { name: 'specialist', value: 'Марина Валерьевна Смольянинова' }
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
