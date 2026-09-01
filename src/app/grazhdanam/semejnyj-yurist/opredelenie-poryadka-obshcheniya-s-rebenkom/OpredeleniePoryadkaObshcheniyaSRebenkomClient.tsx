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

export default function OpredeleniePoryadkaObshcheniyaSRebenkomClient() {
  const cases: CaseData[] = [
    {
      category: 'Отец / График с ночёвками',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Утвердили для отца</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>встречи каждые вторые</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>выходные с ночёвкой</span>
        </>
      ),
      problem: 'Мать разрешала отцу видеть 5-летнюю дочь только 1 час в неделю в её присутствии.',
      action: 'Доказали в суде прекрасные жилищные условия отца, отсутствие вредных привычек и привязанность девочки.',
      result: 'Суд утвердил график: каждые вторые выходные с ночёвкой, половина каникул и 30 дней летнего отпуска.'
    },
    {
      category: 'Бабушка / Ст. 67 СК РФ',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Защитили право</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>бабушки и дедушки</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>на общение с внуком</span>
        </>
      ),
      problem: 'После гибели сына невестка заблокировала все контакты родителей погибшего с 3-летним внуком.',
      action: 'Подали иск в порядке ст. 67 СК РФ, доказали участие бабушки и дедушки в воспитании ребёнка с рождения.',
      result: 'Суд установил еженедельные встречи и право забирать внука на праздники.'
    },
    {
      category: 'Исполнение / Приставы',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Привлекли мать</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>к ответственности</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>за срыв встреч</span>
        </>
      ),
      problem: 'Мать систематически прятала ребёнка в дни встреч с отцом, игнорируя решение суда.',
      action: 'Инициировали выезды приставов, составили протоколы по ч. 2 ст. 5.35 КоАП РФ и предупредили о риске передачи ребёнка отцу.',
      result: 'Препятствия устранены, график встреч соблюдается в полном объёме.'
    }
  ];
  const faqs = [
  {
    "q": "Может ли родитель вывозить ребёнка за границу во время своего отпуска по графику?",
    "a": "Да, если второй родитель не оформил официальный запрет на выезд ребёнка из РФ в порядке МВД. При наличии утверждённого судом графика на время отпуска юрист помогает заранее урегулировать вопросы выезда."
  },
  {
    "q": "Что грозит родителю, который препятствует общению с ребёнком вопреки решению суда?",
    "a": "За неисполнение решения суда предусмотрена административная ответственность по ч. 2 и ч. 3 ст. 5.35 КоАП РФ (штрафы). При злостном систематическом нарушении суд по иску второго родителя вправе передать ребёнка ему (п. 3 ст. 66 СК РФ)."
  },
  {
    "q": "С какого возраста ребёнок может оставаться с отцом с ночёвкой?",
    "a": "Закон не устанавливает возраст, с которого ребёнок может оставаться у отдельно проживающего родителя с ночёвкой. Суд оценивает возраст и состояние здоровья ребёнка, его привязанность к родителю, прежний опыт общения, бытовые условия и способность родителя самостоятельно обеспечивать уход. Поэтому возможность ночёвок определяется индивидуально."
  }
];

  const pricingTiers: PricingTier[] = [
    {
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Разработка графика</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>встреч и переговоры</span>
        </>
      ),
      subtitle: 'Составление проекта графика общения и досудебное урегулирование',
      features: [
      {
              "name": "Подготовка индивидуального графика встреч",
              "value": "[уточняется]"
      },
      {
              "name": "Учёт режима дня, школы и секций ребёнка",
              "value": "[уточняется]"
      },
      {
              "name": "Досудебные переговоры со второй стороной",
              "value": "[уточняется]"
      }
],
      buttonText: 'Составить график',
      buttonHref: '#form'
    },
    {
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Судебный процесс</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>об общении с ребёнком</span>
        </>
      ),
      subtitle: 'Утверждение графика общения в суде с привлечением органов опеки',
      popular: true,
      badgeText: 'Популярно',
      features: [
      {
              "name": "Подготовка искового заявления в суд",
              "value": "[уточняется]"
      },
      {
              "name": "Взаимодействие с органом опеки",
              "value": "[уточняется]"
      },
      {
              "name": "Судебное представительство на всех заседаниях",
              "value": "[уточняется]"
      }
],
      buttonText: 'Выбрать тариф',
      buttonHref: '#form'
    },
    {
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Исполнение решения</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и устранение барьеров</span>
        </>
      ),
      subtitle: 'Принудительное исполнение графика через службу судебных приставов',
      features: [
      {
              "name": "Получение исполнительного листа",
              "value": "[уточняется]"
      },
      {
              "name": "Сопровождение встреч с судебным приставом",
              "value": "[уточняется]"
      },
      {
              "name": "Штрафы за препятствование общению",
              "value": "[уточняется]"
      }
],
      buttonText: 'Исполнить решение',
      buttonHref: '#form'
    }
  ];

  const steps: ProcessStep[] = [
    {
      num: '01',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Анализируем</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>порядок общения</span>
        </>
      ),
      desc: 'Выясняем, как происходили встречи раньше, какие препятствия возникли и существует ли соглашение или судебное решение.'
    },
    {
      num: '02',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Разрабатываем</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>исполнимый график</span>
        </>
      ),
      desc: 'Определяем дни, время, место встреч, ночёвки, праздники, каникулы, дистанционную связь и порядок передачи ребёнка.'
    },
    {
      num: '03',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Собираем</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>доказательства</span>
        </>
      ),
      desc: 'Подтверждаем участие родителя в жизни ребёнка, случаи препятствования общению и условия для безопасных встреч.'
    },
    {
      num: '04',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Проводим</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>переговоры</span>
        </>
      ),
      desc: 'Предлагаем второму родителю письменное соглашение, учитывающее режим, возраст и интересы ребёнка.'
    },
    {
      num: '05',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Представляем</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>интересы в суде</span>
        </>
      ),
      desc: 'Готовим иск или возражения, взаимодействуем с органом опеки и добиваемся конкретного исполнимого порядка.'
    },
    {
      num: '06',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Сопровождаем исполнение</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>или изменение порядка</span>
        </>
      ),
      desc: 'Помогаем при неисполнении решения либо при необходимости изменить устаревший график.'
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
        '@id': 'https://dejure-help.ru/grazhdanam/semejnyj-yurist/opredelenie-poryadka-obshcheniya-s-rebenkom/#breadcrumbs',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Главная', 'item': 'https://dejure-help.ru/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Гражданам', 'item': 'https://dejure-help.ru/grazhdanam/' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Семейный юрист', 'item': 'https://dejure-help.ru/grazhdanam/semejnyj-yurist/' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Определение порядка общения с ребёнком', 'item': 'https://dejure-help.ru/grazhdanam/semejnyj-yurist/opredelenie-poryadka-obshcheniya-s-rebenkom/' }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/grazhdanam/semejnyj-yurist/opredelenie-poryadka-obshcheniya-s-rebenkom/#service',
        'url': 'https://dejure-help.ru/grazhdanam/semejnyj-yurist/opredelenie-poryadka-obshcheniya-s-rebenkom/',
        'name': 'Определение порядка общения с ребёнком',
        'provider': { '@id': 'https://dejure-help.ru/#organization' },
        'areaServed': {
          '@type': 'AdministrativeArea',
          'name': 'Липецк и Липецкая область'
        },
        'description': 'Юридическая помощь в спорах о порядке общения с ребёнком в Липецке: график встреч, соглашение, суд, изменение и исполнение установленного порядка.'
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/grazhdanam/semejnyj-yurist/opredelenie-poryadka-obshcheniya-s-rebenkom/#faq',
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
            <span style={{ color: 'var(--color-text-main)' }}>Определение порядка общения с ребёнком в Липецке</span>
          </>
        }
        superTitle="Семейный юрист в Липецке"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Определение
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              порядка общения
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              с ребёнком в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Утверждение понятного и справедливого графика встреч с ребёнком в суде или через нотариальное соглашение. Устранение препятствий в общении.
          </span>
        }
        primaryCtaText="Обсудить ситуацию с юристом"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_cta_poryadok_obshcheniya"
        primaryCtaSubtext={
          <>Если требуется срочная помощь, позвоните: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (910) 350-31-11</a></>
        }
        trustItems={[{"text":"Разработка детального графика встреч и каникул"},{"text":"Устранение препятствий в общении с ребёнком"},{"text":"Защита прав отцов, матерей, бабушек и дедушек"},{"text":"Куратор — юрист М. В. Смольянинова"}]}
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
                tag: 'Препятствия / Конфликт',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Второй родитель</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>не даёт видеться с ребёнком</span>
                  </>
                ),
                desc: 'Необоснованные запреты на звонки, встречи, совместные прогулки и проведение выходных дней.'
              },
              {
                tag: 'График / Выходные',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Утверждение</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>понятного графика встреч</span>
                  </>
                ),
                desc: 'Фиксация конкретных дней недели, часов, порядка проведения праздников, дней рождения и отпуска.'
              },
              {
                tag: 'Бабушки / Родственники',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Общение с бабушками,</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>дедушками и близкими</span>
                  </>
                ),
                desc: 'Защита законного права близких родственников на общение с ребёнком по ст. 67 СК РФ.'
              },
              {
                tag: 'Без присутствия',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Встречи наедине без</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>присутствия второго супруга</span>
                  </>
                ),
                desc: 'Снятие ограничений на обязательное присутствие матери/отца во время встреч по мере взросления ребёнка.'
              },
              {
                tag: 'Исполнение / ФССП',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Неисполнение решения</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>суда о графике встреч</span>
                  </>
                ),
                desc: 'Привлечение виновного родителя к административной ответственности через судебных приставов.'
              },
              {
                tag: 'Изменение / Возраст',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Корректировка графика</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>при взрослении ребёнка</span>
                  </>
                ),
                desc: 'Расширение времени общения и ночёвок с родителем при поступлении ребёнка в школу или детский сад.'
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

          <div style={{ background: 'var(--gradient-cream)', padding: '20px 24px', border: '1px solid var(--color-border)', borderLeft: '4px solid var(--color-primary)', marginBottom: '32px' }}>
            <p style={{ margin: 0, fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              Если спор касается того, с кем ребёнок должен постоянно проживать, изучите услугу <Link href="/grazhdanam/semejnyj-yurist/opredelenie-mesta-zhitelstva-rebenka/" style={{ color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px', fontWeight: 600 }}>«Определение места жительства ребёнка» →</Link>
            </p>
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
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Обсудите порядок</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>общения с ребёнком</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Укажите возраст ребёнка, как сейчас проходят встречи, кто препятствует общению и какой график требуется установить или изменить. Юрист оценит ситуацию и предложит исполнимый порядок действий.
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
                  { name: 'source_page', value: 'https://dejure-help.ru/grazhdanam/semejnyj-yurist/opredelenie-poryadka-obshcheniya-s-rebenkom/' },
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
