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

export default function VosstanovlenieSrokaPrinyatiyaNasledstvaClient() {
  const cases: CaseData[] = [
    {
        "category": "Ст. 1155 ГК РФ / Лечение",
        "title": "Восстановили срок наследнику после длительной реабилитации",
        "problem": "Доверитель находился на непрерывном стационарном лечении после ДТП в течение 8 месяцев и не мог обратиться к нотариусу.",
        "action": "Собрали медицинские карты, доказали подачу иска в течение 6 месяцев после выписки из больницы.",
        "result": "Суд восстановил срок, аннулировал старые свидетельства и признал право на долю в квартире."
    },
    {
        "category": "Служба в ВС / СВО",
        "title": "Защитили права военнослужащего, пропустившего срок из-за службы",
        "problem": "Военнослужащий находился в зоне боевых действий и узнал о смерти наследодателя только по возвращении.",
        "action": "Истребовали справки из воинской части, подтвердили уважительность причин пропуска и подготовили иск.",
        "result": "Срок восстановлен, за доверителем признано право на банковские вклады и земельный участок."
    },
    {
        "category": "Несовершеннолетние",
        "title": "Восстановили срок для ребёнка, чьи опекуны не оформили наследство",
        "problem": "Опекуны несовершеннолетнего не подали заявление нотариусу вовремя, имущество перешло другим родственникам.",
        "action": "Подали иск в интересах ребёнка, доказав, что несовершеннолетний не мог самостоятельно реализовать свои права.",
        "result": "Суд перераспределил доли в пользу несовершеннолетнего наследника."
    }
];
  const faqs = [
  {
    "q": "В какой срок нужно обратиться в суд для восстановления срока?",
    "a": "В суд необходимо обратиться строго в течение 6 месяцев ПОСЛЕ ТОГО, как отпали уважительные причины пропуска (например, после выписки из стационара или возвращения со службы)."
  },
  {
    "q": "Какие причины пропуска считаются судом уважительными?",
    "a": "Тяжёлая болезнь, беспомощное состояние, неграмотность, нахождение на военной службе или в командировке в труднодоступных местах, сокрытие факта смерти другими наследниками."
  },
  {
    "q": "Является ли незнание закона или нахождение в отпуске уважительной причиной?",
    "a": "Нет. Незнание норм гражданского права о 6-месячном сроке или нахождение в обычном отпуске судебная практика уважительными причинами не признаёт."
  },
  {
    "q": "Можно ли принять наследство без суда, если срок пропущен?",
    "a": "Да, но ТОЛЬКО при условии, что ВСЕ остальные наследники, уже принявшие наследство, дадут своё письменное согласие в присутствии нотариуса (п. 2 ст. 1155 ГК РФ)."
  }
];

  const pricingTiers: PricingTier[] = [
    {
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Оценка</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>уважительности причин</span>
        </>
      ),
      subtitle: 'Анализ документов, расчёт 6-месячного окна и правовое заключение по рискам',
      features: [
      {
              "name": "Проверка медицинских и командировочных справок",
              "value": "[уточняется]"
      },
      {
              "name": "Расчёт срока подачи иска",
              "value": "[уточняется]"
      },
      {
              "name": "Оценка шансов восстановления срока",
              "value": "[уточняется]"
      }
],
      buttonText: 'Оценить шансы',
      buttonHref: '#form'
    },
    {
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Подготовка иска</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>по ст. 1155 ГК РФ</span>
        </>
      ),
      subtitle: 'Составление искового заявления и сбор доказательной базы для суда',
      features: [
      {
              "name": "Иск о восстановлении срока и признании права",
              "value": "[уточняется]"
      },
      {
              "name": "Ходатайства об истребовании наследственного дела",
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
      subtitle: 'Полное представительство в суде с аннулированием старых свидетельств и оформлением долей',
      popular: true,
      badgeText: 'Популярно',
      features: [
      {
              "name": "Участие во всех заседаниях суда",
              "value": "[уточняется]"
      },
      {
              "name": "Аннулирование прав других наследников",
              "value": "[уточняется]"
      },
      {
              "name": "Регистрация права собственности в ЕГРН",
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
          'streetAddress': 'пл. Театральная, д. 3, офис 401',
          'addressLocality': 'Липецк',
          'postalCode': '398001',
          'addressCountry': 'RU'
        }
      },
      {
        '@type': 'Service',
        'name': 'Восстановление срока принятия наследства в Липецке | Де-Юре',
        'provider': { '@id': 'https://dejure-help.ru/#organization' },
        'areaServed': {
          '@type': 'AdministrativeArea',
          'name': 'Липецк и Липецкая область'
        },
        'description': 'Судебное восстановление пропущенного 6-месячного срока принятия наследства по ст. 1155 ГК РФ в Липецке. Доказывание уважительности причин пропуска.'
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
            <Link href="/grazhdanam/nasledstvennyj-yurist/">Наследственный юрист</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Восстановление срока принятия наследства в суде</span>
          </>
        }
        superTitle="Наследственный юрист в Липецке"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Восстановление срока
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              принятия наследства в суде
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Судебное восстановление пропущенного 6-месячного срока принятия наследства по ст. 1155 ГК РФ при наличии уважительных причин пропуска и защита ваших прав.
          </span>
        }
        primaryCtaText="Обсудить ситуацию с юристом"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_cta_vosstanovlenie_sroka"
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
        trustItems={[{"text":"Восстановление срока по ст. 1155 ГК РФ"},{"text":"Доказывание уважительности причин пропуска в суде"},{"text":"Аннулирование ранее выданных свидетельств нотариуса"},{"text":"Куратор — юрист М. В. Смольянинова"}]}
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
                tag: 'Лечение / Больница',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Тяжёлая болезнь</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>или госпитализация</span>
                  </>
                ),
                desc: 'Нахождение на стационарном лечении, беспомощное состояние или длительная реабилитация.'
              },
              {
                tag: 'Сокрытие / Незнание',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Неизвещение</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>о смерти родственника</span>
                  </>
                ),
                desc: 'Наследник объективно не знал и не должен был знать об открытии наследства из-за сокрытия факта другими лицами.'
              },
              {
                tag: 'Служба / СВО',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Длительная</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>командировка или служба</span>
                  </>
                ),
                desc: 'Служба в Вооружённых Силах, участие в СВО, нахождение в дальнем плавании или заграничной экспедиции.'
              },
              {
                tag: 'Несовершеннолетние',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Пропуск срока</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>за несовершеннолетнего</span>
                  </>
                ),
                desc: 'Непринятие наследства законными представителями ребёнка в установленный законом срок.'
              },
              {
                tag: 'Нотариус / Согласие',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Согласие</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>остальных наследников</span>
                  </>
                ),
                desc: 'Оформление наследства без суда при письменном согласии всех остальных наследников у нотариуса.'
              },
              {
                tag: 'Суд / Передел',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Перераспределение</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>уже оформленных долей</span>
                  </>
                ),
                desc: 'Аннулирование выданных нотариусом свидетельств и признание прав на долю за восстановленным наследником.'
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
                  pageType="nasledstvennyj-yurist/vosstanovlenie-sroka-prinyatiya-nasledstva"
                  serviceName="Восстановление срока принятия наследства в Липецке | Де-Юре"
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
