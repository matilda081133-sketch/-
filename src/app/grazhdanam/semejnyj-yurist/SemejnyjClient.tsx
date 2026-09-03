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

export default function SemejnyjClient() {
  const cases: CaseData[] = [
    {
      category: 'Раздел имущества / Ипотека',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Разделили квартиру</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и бизнес без ущемления</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>прав доверительницы</span>
        </>
      ),
      problem: 'Супруг настаивал на единоличном сохранении 3-комнатной квартиры и доли в торговом ООО, предлагая минимальную компенсацию.',
      action: 'Провели независимую оценку активов, доказали вложение общих средств в развитие бизнеса и добились выдела 1/2 доли стоимости.',
      result: 'Доверителю присуждена компенсация 3,8 млн рублей и сохранено право на загородный участок.'
    },
    {
      category: 'Алименты / Скрытый доход',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Взыскали алименты</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>в твёрдой сумме</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>с предпринимателя</span>
        </>
      ),
      problem: 'Отец декларировал минимальную заработную плату 19 000 руб., фактически управляя прибыльным автосервисом.',
      action: 'Собрали доказательства реальных расходов ответчика, выписки по картам и доказали регулярный высокий доход.',
      result: 'Суд установил алименты в размере 2 прожиточных минимумов (31 000 руб. ежемесячно) с индексацией.'
    },
    {
      category: 'Дети / Место жительства',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Отстояли право</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>постоянного проживания</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>двоих детей с матерью</span>
        </>
      ),
      problem: 'Отец подал иск об определении места жительства детей с ним, привлекая административный ресурс и заявляя о нехватке дохода у матери.',
      action: 'Организовали обследование жилищно-бытовых условий органом опеки, доказали сильную привязанность детей к матери.',
      result: 'Суд полностью отказал в иске отца; дети остались проживать с матерью, с отца взысканы алименты.'
    }
  ];
  const faqs = [
  {
    "q": "Как проходит развод, если есть несовершеннолетние дети или спор об имуществе?",
    "a": "При наличии общих несовершеннолетних детей расторжение брака происходит исключительно через суд (мировой или районный — в зависимости от наличия спора о детях и стоимости имущества). Юрист готовит иск, рассчитывает пошлину и представляет ваши интересы в заседаниях, минимизируя ваш личный контакт с бывшим супругом."
  },
  {
    "q": "Можно ли разделить имущество без развода?",
    "a": "Да. Закон позволяет разделить общее имущество как в период брака (через брачный договор или нотариальное соглашение), так и после его расторжения в суде. Срок исковой давности после развода — 3 года с момента, когда лицо узнало о нарушении своего права."
  },
  {
    "q": "Как взыскать алименты, если у бывшего супруга нет официальной работы?",
    "a": "В таком случае алименты взыскиваются в твёрдой денежной сумме, кратной прожиточному минимуму на ребёнка в Липецкой области, либо в смешанном виде (ст. 83 СК РФ). Юрист помогает собрать доказательства фактического уровня жизни плательщика."
  },
  {
    "q": "Учитывает ли суд мнение ребёнка при определении места жительства?",
    "a": "Мнение ребёнка, достигшего возраста 10 лет, обязательно учитывается судом (ст. 57 СК РФ), если это не противоречит его интересам. Для детей младшего возраста решающую роль играют заключение органа опеки и судебная психолого-педагогическая экспертиза."
  },
  {
    "q": "Возможно ли решить семейный спор мирно, без суда?",
    "a": "Да. Если стороны готовы к диалогу, юрист помогает провести переговоры, составляет проект соглашения о разделе имущества, соглашения об уплате алиментов или соглашения о детях для последующего нотариального удостоверения."
  }
];

  const pricingTiers: PricingTier[] = [
    {
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Консультация</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и правовой анализ</span>
        </>
      ),
      subtitle: 'Анализ ситуации, проверка документов и формирование стратегии',
      features: [
      {
              "name": "Правовой анализ документов",
              "value": "[уточняется]"
      },
      {
              "name": "Оценка перспектив дела и рисков",
              "value": "[уточняется]"
      },
      {
              "name": "Пошаговый план дальнейших действий",
              "value": "[уточняется]"
      }
],
      buttonText: 'Записаться',
      buttonHref: '#form'
    },
    {
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Подготовка</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>процессуальных</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>документов</span>
        </>
      ),
      subtitle: 'Составление исковых заявлений, соглашений и ходатайств',
      features: [
      {
              "name": "Составление иска, отзыва или претензии",
              "value": "[уточняется]"
      },
      {
              "name": "Сбор доказательной базы и справок",
              "value": "[уточняется]"
      },
      {
              "name": "Расчёт пошлин и подача в суд",
              "value": "[уточняется]"
      }
],
      buttonText: 'Заказать иск',
      buttonHref: '#form'
    },
    {
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Представительство</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>в суде «под ключ»</span>
        </>
      ),
      subtitle: 'Полное ведение семейного спора в суде до вступления решения в силу',
      popular: true,
      badgeText: 'Популярно',
      features: [
      {
              "name": "Участие во всех заседаниях суда",
              "value": "[уточняется]"
      },
      {
              "name": "Взаимодействие с опекой и экспертами",
              "value": "[уточняется]"
      },
      {
              "name": "Получение готового судебного акта",
              "value": "[уточняется]"
      }
],
      buttonText: 'Выбрать тариф',
      buttonHref: '#form'
    },
    {
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Комплексное</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>ведение сложных</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>семейных споров</span>
        </>
      ),
      subtitle: 'Раздел бизнеса, параллельные споры о детях и скрытых активах',
      features: [
      {
              "name": "Параллельное ведение нескольких процессов",
              "value": "[уточняется]"
      },
      {
              "name": "Розыск скрытого имущества и счетов",
              "value": "[уточняется]"
      },
      {
              "name": "Сопровождение исполнительного листа",
              "value": "[уточняется]"
      }
],
      buttonText: 'Обсудить проект',
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
      desc: 'Анализируем обстоятельства семейного спора, судебные акты и соглашения, документы о детях, доходах, алиментах, браке и имуществе. Определяем правовую перспективу и основные риски.'
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
      desc: 'Определяем подходящую процедуру, состав доказательств и требования. При необходимости готовим запросы, взаимодействуем с органом опеки, экспертами, банками и государственными органами.'
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
      desc: 'Получаем судебный акт и исполнительные документы, сопровождаем внесение изменений в ЗАГС и Росреестр, взаимодействие с органом опеки или ФССП — в зависимости от предмета спора.'
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
          'streetAddress': 'ул. Советская, д. 35',
          'addressLocality': 'Липецк',
          'addressRegion': 'Липецкая область',
          'addressCountry': 'RU'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/grazhdanam/semejnyj-yurist/#breadcrumbs',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Главная', 'item': 'https://dejure-help.ru/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Гражданам', 'item': 'https://dejure-help.ru/grazhdanam/' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Семейный юрист', 'item': 'https://dejure-help.ru/grazhdanam/semejnyj-yurist/' }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/grazhdanam/semejnyj-yurist/#service',
        'url': 'https://dejure-help.ru/grazhdanam/semejnyj-yurist/',
        'name': 'Семейный юрист в Липецке',
        'provider': { '@id': 'https://dejure-help.ru/#organization' },
        'areaServed': {
          '@type': 'AdministrativeArea',
          'name': 'Липецк и Липецкая область'
        },
        'description': 'Помощь семейного юриста в Липецке: развод через суд, раздел имущества, алименты, споры о детях, отцовство, родительские права и брачный договор.'
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/grazhdanam/semejnyj-yurist/#faq',
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
            <span style={{ color: 'var(--color-text-main)' }}>Семейный юрист</span>
          </>
        }
        superTitle="Юридическая помощь гражданам"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Семейный
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              юрист в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Расторжение брака, раздел имущества, алименты, установление отцовства, определение места жительства и порядка общения с ребёнком, родительские права и брачные договоры. Куратор направления — юрист с 13-летним опытом.
          </span>
        }
        primaryCtaText="Обсудить ситуацию с юристом"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_cta_semejnyj_hub"
        primaryCtaSubtext={
          <>Если требуется срочная помощь, позвоните: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (910) 350-31-11</a></>
        }
        trustItems={[{"text":"Досудебное урегулирование и защита в суде"},{"text":"Сохранение имущества и защита интересов детей"},{"text":"Прозрачные условия и фиксированная стоимость"},{"text":"Куратор — юрист М. В. Смольянинова"}]}
        imageUrl="/images/smolyaninova.jpg"
        imageName="Марина Валерьевна Смольянинова"
        imageSubtitle="Ведущий юрист ЮК «Де-Юре», куратор направления «Семейное право»"
        imageObjectPosition="center 20%"
      />

      {/* ═══ БЛОК 2: С КАКИМИ СИТУАЦИЯМИ МЫ ПОМОГАЕМ (ТИПОВОЙ ШАБЛОН) ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>С какими ситуациями</span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>мы помогаем гражданам</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Семейные споры требуют взвешенного подхода и глубокого знания практики. Поможем защитить ваши права, сохранить имущество и соблюсти интересы детей.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {[
              {
                tag: 'Имущество / Развод',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Раздел</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>имущества и общих долгов</span>
                  </>
                ),
                desc: 'Раздел квартир, ипотеки, автомобилей, долей в бизнесе, вкладов или выплата справедливой компенсации.'
              },
              {
                tag: 'Алименты / Доход',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Взыскание или</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>изменение алиментов</span>
                  </>
                ),
                desc: 'Взыскание в твёрдой сумме или долях, поиск скрытых доходов, взыскание долга и неустойки за неуплату.'
              },
              {
                tag: 'Дети / Проживание',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Место жительства</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>ребёнка после развода</span>
                  </>
                ),
                desc: 'Определение, с кем из родителей останется ребёнок, взаимодействие с опекой и защита прав в суде.'
              },
              {
                tag: 'График / Общение',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Порядок общения</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>с ребёнком и близкими</span>
                  </>
                ),
                desc: 'Утверждение графика встреч, устранение препятствий в общении, защита прав отцов, матерей и бабушек.'
              },
              {
                tag: 'Права / Безопасность',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Лишение родительских</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>прав или их ограничение</span>
                  </>
                ),
                desc: 'Защита ребёнка при угрозе жизни, уклонении от воспитания, алкоголизме или защита от необоснованного иска.'
              },
              {
                tag: 'Договор / Защита',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Брачный договор</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>до брака или в браке</span>
                  </>
                ),
                desc: 'Составление и аудит брачного договора, защита личных активов, согласование ипотеки или оспаривание условий.'
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
        </div>
      </section>

      {/* ═══ БЛОК 3: НАПРАВЛЕНИЯ ПОМОЩИ (КАТАЛОГ УСЛУГ С 8-Й КАРТОЧКОЙ) ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Услуги</span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>семейного юриста</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Выберите конкретное направление, чтобы узнать порядок действий, необходимые документы и варианты решения вашей задачи.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {[
              {
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Расторжение брака</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>через суд</span>
                  </>
                ),
                desc: 'Подготовка иска и представительство в суде, если есть несовершеннолетние дети, второй супруг не согласен на развод или уклоняется от участия.',
                link: '/grazhdanam/semejnyj-yurist/rastorzhenie-braka/'
              },
              {
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Раздел</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>имущества супругов в суде</span>
                  </>
                ),
                desc: 'Раздел недвижимости, бизнеса, автотранспорта, кредитов и ипотеки. Составление соглашений и судебная защита.',
                link: '/grazhdanam/semejnyj-yurist/razdel-imushchestva-suprugov/'
              },
              {
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Взыскание алиментов</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>на детей или на супруга</span>
                  </>
                ),
                desc: 'Взыскание в долях от заработка или в твёрдой сумме, взыскание задолженности, неустойки и изменение размера.',
                link: '/grazhdanam/semejnyj-yurist/vzyskanie-alimentov/'
              },
              {
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Брачный договор</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и соглашения супругов</span>
                  </>
                ),
                desc: 'Разработка индивидуального брачного договора для защиты личных активов и недвижимости при покупке в ипотеку.',
                link: '/grazhdanam/semejnyj-yurist/brachnyj-dogovor/'
              },
              {
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Определение места</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>жительства ребёнка</span>
                  </>
                ),
                desc: 'Определение, с кем из родителей останется ребёнок, подготовка доказательств, работа с органами опеки в суде.',
                link: '/grazhdanam/semejnyj-yurist/opredelenie-mesta-zhitelstva-rebenka/'
              },
              {
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Порядок</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>общения с ребёнком</span>
                  </>
                ),
                desc: 'Составление понятного графика встреч с ребёнком, устранение препятствий второму родителю или родственникам.',
                link: '/grazhdanam/semejnyj-yurist/opredelenie-poryadka-obshcheniya-s-rebenkom/'
              },
              {
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Лишение и ограничение</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>родительских прав через суд</span>
                  </>
                ),
                desc: 'Судебная защита интересов детей при злостном неисполнении обязанностей либо защита родителя от неправомерного иска.',
                link: '/grazhdanam/semejnyj-yurist/lishenie-i-ogranichenie-roditelskih-prav/'
              },
              {
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Установление и</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>оспаривание отцовства</span>
                  </>
                ),
                desc: 'Внесение или аннулирование записи об отце через суд, назначение генетической экспертизы ДНК и оформление прав.',
                link: '/grazhdanam/semejnyj-yurist/ustanovlenie-i-osparivanie-ottsovstva/'
              }
            ].map((dir, i) => (
              <Link 
                key={i} 
                href={dir.link} 
                data-analytics="click_semejnyj_service_card" 
                style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', height: '100%' }}
              >
                <div 
                  className="card service-card hover-lift" 
                  style={{ 
                    height: '100%', 
                    minHeight: '260px',
                    padding: '32px 28px', 
                    background: 'var(--color-white)', 
                    border: '1px solid var(--color-border)',
                    borderTop: '4px solid var(--color-primary)',
                    borderRadius: '0',
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)',
                    transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.5s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.35s ease',
                    position: 'relative'
                  }}
                >
                  <div>
                    <h3 style={{ 
                      margin: '0 0 12px 0', 
                      fontSize: '18px', 
                      fontFamily: 'var(--font-serif)',
                      color: 'var(--color-deep-blue)', 
                      lineHeight: 1.35,
                      minHeight: '52px'
                    }}>
                      {dir.title}
                    </h3>
                    <p style={{ 
                      margin: '0 0 20px 0', 
                      fontSize: '14px', 
                      color: 'var(--color-text-secondary)', 
                      lineHeight: 1.55,
                      minHeight: '75px'
                    }}>
                      {dir.desc}
                    </p>
                  </div>
                  <div className="card-arrow" style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px', 
                    color: 'var(--color-primary)', 
                    fontSize: '14px', 
                    fontWeight: 600,
                    marginTop: 'auto',
                    paddingTop: '12px',
                    borderTop: '1px solid rgba(23, 50, 77, 0.06)'
                  }}>
                    <span>Подробнее</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </div>
                </div>
              </Link>
            ))}

            {/* 8-я карточка: Не нашли свою ситуацию */}
            <div 
              className="card service-card hover-lift" 
              style={{ 
                height: '100%', 
                minHeight: '260px',
                padding: '32px 28px', 
                background: 'linear-gradient(135deg, var(--color-deep-blue) 0%, #17324D 100%)', 
                border: '1px solid var(--color-deep-blue)',
                borderTop: '4px solid var(--color-gold)',
                borderRadius: '0',
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.1)',
                transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.5s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.35s ease',
                position: 'relative',
                color: 'var(--color-white)'
              }}
            >
              <div>
                <h3 style={{ 
                  margin: '0 0 12px 0', 
                  fontSize: '18px', 
                  fontFamily: 'var(--font-serif)',
                  color: 'var(--color-white)', 
                  lineHeight: 1.35,
                  minHeight: '52px'
                }}>
                  <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Не нашли</span>{' '}
                  <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>свою ситуацию?</span>
                </h3>
                <p style={{ 
                  margin: '0 0 20px 0', 
                  fontSize: '14px', 
                  color: 'rgba(255, 255, 255, 0.85)', 
                  lineHeight: 1.55,
                  minHeight: '75px'
                }}>
                  <span style={{ display: 'inline-block' }}>Опишите ваш семейный вопрос в форме. Изучим имеющиеся документы</span> <br /> <span style={{ display: 'inline-block' }}>и предложим возможные варианты решения.</span>
                </p>
              </div>
              <a 
                href="#form" 
                className="btn btn-gold" 
                style={{ 
                  width: '100%', 
                  textAlign: 'center', 
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '12px 20px',
                  fontSize: '14px',
                  marginTop: 'auto'
                }}
              >
                Обсудить ситуацию
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: КУРАТОР НАПРАВЛЕНИЯ (ТИПОВОЙ ШАБЛОН) ═══ */}
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

      {/* ═══ БЛОК 5: ПРИМЕРЫ ИЗ ПРАКТИКИ ═══ */}
      <CasesBlock
        title="Примеры дел из практики"
        showAllLink="/praktika/"
        showAllText="Смотреть все дела"
        showDemoWarning={true}
        cases={cases}
      />

      {/* ═══ БЛОК 6: КАК ПРОХОДИТ РАБОТА ═══ */}
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

      {/* ═══ БЛОК 7: СТОИМОСТЬ УСЛУГ ═══ */}
      <PricingBlock
        title="Стоимость услуг семейного юриста"
        subtitle="Стоимость зависит от сложности спора, состава имущества, наличия документов и необходимости судебного процесса."
        tiers={pricingTiers}
        disclaimer="Стоимость определяется после уточнения задачи и изучения имеющихся документов. Состав услуг, цена и порядок оплаты фиксируются в договоре до начала работы. Оплата вознаграждения исполнителя не зависит от исхода дела и не включает государственные пошлины и сопутствующие судебные расходы."
      />

      {/* ═══ БЛОК 8: ЧАСТЫЕ ВОПРОСЫ (FAQ) ═══ */}
      <FAQBlock
        superTitle="Частые вопросы клиентов"
        title={<><span>Ответы на</span> <br /><span>частые вопросы</span></>}
        subtitle="О процедурах и юридических тонкостях"
        ctaText="Задать свой вопрос"
        ctaLink="#form"
        faqs={faqs}
      />

      {/* ═══ БЛОК 9: ФИНАЛЬНАЯ ФОРМА (СВЯЗАТЬСЯ С НАМИ - ТИПОВОЙ 2-КОЛОНОЧНЫЙ ШАБЛОН) ═══ */}
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
                commentPlaceholder="Опишите вашу ситуацию: состав имущества, спор о детях или развод..."
                hiddenFields={[
                  { name: 'source_page', value: '/grazhdanam/semejnyj-yurist/' },
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
