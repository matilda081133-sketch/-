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

export default function BankrotstvoFizicheskihLicClient() {
  const cases: CaseData[] = [
    {
      category: 'Судебное банкротство / Кредиты',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Освободили от кредитов</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>после потери дохода</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>с сохранением жилья</span>
        </>
      ),
      problem: 'У клиента накопилось 1,4 млн ₽ по кредитам и кредитным картам перед 5 банками. После сокращения доход снизился более чем вдвое. В собственности оставалась единственная квартира.',
      action: 'Провели аудит кредитных договоров, подтвердили исполнительский иммунитет на единственное жильё, подготовили заявление и сопровождали процедуру в суде.',
      result: 'Арбитражный суд завершил реализацию имущества и освободил доверителя от обязательств. Единственная квартира полностью сохранена за клиентом.'
    },
    {
      category: 'Имущество супругов / Автомобиль',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Защитили долю</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>супруга при банкротстве</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и списали 2,2 млн ₽</span>
        </>
      ),
      problem: 'Задолженность составляла 2,2 млн ₽. В браке был приобретён автомобиль. Клиент опасался, что супруг потеряет средства без компенсации.',
      action: 'До подачи заявления оценили статус автомобиля и происхождение обязательств. Оформили подтверждение доли супруга и сопроводили расчёты в конкурсной массе.',
      result: 'Автомобиль реализован по прозрачной оценке, супруг получил причитающуюся долю 50% от стоимости, а должник освобождён от остатка задолженности.'
    },
    {
      category: 'Диагностика рисков / Сделки',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Предотвратили риски</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>оспаривания сделки</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>до обращения в суд</span>
        </>
      ),
      problem: 'Клиент планировал банкротство при долге 980 000 ₽, но незадолго до этого продал машину родственнику по заниженной стоимости.',
      action: 'Провели правовой анализ сделки, выявили высокий риск признания её недействительной и отказа в списании долгов. Разработали альтернативный план реструктуризации.',
      result: 'Клиент отказался от рискованной подачи, сохранил сделку от оспаривания и урегулировал задолженность в досудебном порядке.'
    }
  ];

  const faqs = [
    {
      q: 'Какая сумма долга нужна для банкротства гражданина?',
      a: 'Закон не запрещает подавать заявление при любой сумме, если очевидно, что исполнить обязательства невозможно. При сумме от 500 000 ₽ и просрочке от 3 месяцев закон устанавливает обязанность гражданина обратиться в суд. Для внесудебного банкротства через МФЦ установлен диапазон от 25 000 до 1 000 000 ₽ при соблюдении одного из 4 законных оснований.'
    },
    {
      q: 'Заберут ли единственную квартиру?',
      a: 'По общему правилу единственное жильё защищено исполнительским иммунитетом (ст. 446 ГПК РФ) и не включается в конкурсную массу. Исключения составляют ипотечное жильё (находится в залоге) и объекты с признаками роскошного жилья, по которым действует специальная судебная практика.'
    },
    {
      q: 'Все ли долги списываются при банкротстве?',
      a: 'Большинство кредитов, займов, налогов и коммунальных долгов прекращаются. Однако закон прямо запрещает освобождать от алиментов, возмещения вреда жизни и здоровью, компенсации морального вреда, текущих платежей и требований, возникших в результате недобросовестного поведения или сокрытия активов.'
    },
    {
      q: 'Что будет с имуществом супруга?',
      a: 'Имущество, нажитое в браке, является совместной собственностью. Доля должника может быть включена в конкурсную массу. При реализации совместного имущества супругу выплачивается его законная доля (по общему правилу 50%), за исключением случаев общих супружеских обязательств.'
    },
    {
      q: 'Могут ли оспорить сделки за последние 3 года?',
      a: 'Финансовый управляющий и кредиторы проверяют сделки должника за 3 года до подачи заявления. Оспариванию подлежат безвозмездные сделки (дарение), продажи имущества родственникам по заниженным ценам и предпочтительное погашение долга одному кредитору в ущерб остальным.'
    },
    {
      q: 'Сколько длится судебная процедура банкротства?',
      a: 'В среднем от 6 до 10 месяцев. Срок зависит от графика судебных заседаний, скорости работы финансового управляющего, наличия имущества для торгов и активности кредиторов.'
    },
    {
      q: 'Обязательно ли нанимать юриста?',
      a: 'Закон не обязывает иметь представителя, но самостоятельное ведение дела сопряжено с рисками: выбор неподходящей процедуры, ошибки в списке кредиторов, риск отказа суда в списании долгов из-за неверных процессуальных шагов. Юрист обеспечивает правовую защиту и минимизацию рисков.'
    },
    {
      q: 'Можно ли пройти банкротство дистанционно?',
      a: 'Да. Анализ документов, подготовка позиции и подача заявления в арбитражный суд через систему «Мой Арбитр» могут проходить полностью дистанционно. Участие в заседаниях юрист принимает по доверенности.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Анализ ситуации и рисков',
      subtitle: 'Комплексный аудит долгов, имущества, сделок за 3 года и выбор маршрута',
      features: [
        { name: 'Анализ кредитов, договоров и расписок', value: '[уточняется]' },
        { name: 'Проверка имущества и рисков для семьи', value: '[уточняется]' },
        { name: 'Оценка оснований для списания долгов', value: '[уточняется]' },
        { name: 'Письменная стратегия и расчёт расходов', value: '[уточняется]' }
      ],
      buttonText: 'Записаться на анализ',
      buttonHref: '#form'
    },
    {
      title: 'Внесудебное банкротство (МФЦ)',
      subtitle: 'Подготовка пакета документов для бесплатной процедуры по ст. 223.2 № 127-ФЗ',
      features: [
        { name: 'Проверка 4 законных оснований МФЦ', value: '[уточняется]' },
        { name: 'Формирование полного списка кредиторов', value: '[уточняется]' },
        { name: 'Сбор справок по пенсии, пособиям и ФССП', value: '[уточняется]' },
        { name: 'Заполнение заявления по утверждённой форме', value: '[уточняется]' }
      ],
      buttonText: 'Проверить условия МФЦ',
      buttonHref: '/grazhdanam/bankrotstvo-fizicheskih-lic/cherez-mfc/'
    },
    {
      title: 'Судебное банкротство «под ключ»',
      subtitle: 'Полное ведение дела в арбитражном суде до определения об освобождении от долгов',
      popular: true,
      badgeText: 'Популярно',
      features: [
        { name: 'Сбор полного пакета документов', value: '[уточняется]' },
        { name: 'Составление и подача заявления в суд', value: '[уточняется]' },
        { name: 'Взаимодействие с финансовым управляющим', value: '[уточняется]' },
        { name: 'Защита имущества и участие в заседаниях', value: '[уточняется]' }
      ],
      buttonText: 'Выбрать тариф',
      buttonHref: '#form'
    },
    {
      title: 'Сопровождение сложных споров',
      subtitle: 'Защита при оспаривании сделок, залогах, ипотеке и наличии бизнеса',
      features: [
        { name: 'Защита сделок от оспаривания кредиторами', value: '[уточняется]' },
        { name: 'Сохранение долей в общем имуществе супругов', value: '[уточняется]' },
        { name: 'Исключение имущества из конкурсной массы', value: '[уточняется]' },
        { name: 'Обособленные споры в рамках дела', value: '[уточняется]' }
      ],
      buttonText: 'Обсудить сложное дело',
      buttonHref: '#form'
    }
  ];

  const steps: ProcessStep[] = [
    {
      num: '01',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Изучаем ситуацию</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и структуру долгов</span>
        </>
      ),
      desc: 'Анализируем общую сумму задолженности, состав кредиторов, судебные приказы, исполнительные производства, доходы и имущество гражданина.'
    },
    {
      num: '02',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Оцениваем риски</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>сделок и имущества</span>
        </>
      ),
      desc: 'Проверяем сделки за последние 3 года, статус единственного жилья, совместную собственность супругов и исключаем риски отказа в списании.'
    },
    {
      num: '03',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Определяем маршрут</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и готовим документы</span>
        </>
      ),
      desc: 'Сравниваем судебный путь и внесудебную процедуру через МФЦ, собираем полный пакет справок, формируем реестр кредиторов и заявление.'
    },
    {
      num: '04',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Ведём процедуру</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>в арбитражном суде</span>
        </>
      ),
      desc: 'Подаём заявление, взаимодействуем с финансовым управляющим, защищаем интересы доверителя на заседаниях и контролируем требования кредиторов.'
    },
    {
      num: '05',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Получаем судебный акт</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>об освобождении</span>
        </>
      ),
      desc: 'Получаем определение арбитражного суда о завершении процедуры и освобождении гражданина от дальнейшего исполнения обязательств.'
    },
    {
      isBanner: true,
      title: 'Дистанционный формат',
      desc: 'Первичное обсуждение, аудит документов и ведение процесса в арбитражном суде могут проходить дистанционно. Защищённый канал передачи документов согласуется после первого контакта.'
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
          'streetAddress': 'ул. Советская, д. 35, оф. 213',
          'addressLocality': 'Липецк',
          'addressRegion': 'Липецкая область',
          'addressCountry': 'RU'
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/grazhdanam/bankrotstvo-fizicheskih-lic/#breadcrumbs',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Главная', 'item': 'https://dejure-help.ru/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Гражданам', 'item': 'https://dejure-help.ru/grazhdanam/' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Банкротство физических лиц', 'item': 'https://dejure-help.ru/grazhdanam/bankrotstvo-fizicheskih-lic/' }
        ]
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/grazhdanam/bankrotstvo-fizicheskih-lic/#service',
        'url': 'https://dejure-help.ru/grazhdanam/bankrotstvo-fizicheskih-lic/',
        'name': 'Банкротство физических лиц в Липецке',
        'provider': { '@id': 'https://dejure-help.ru/#organization' },
        'areaServed': {
          '@type': 'AdministrativeArea',
          'name': 'Липецк и Липецкая область'
        },
        'description': 'Юридическая помощь при банкротстве физических лиц в Липецке: оценим долги, имущество и сделки, объясним риски и сопроводим судебную или внесудебную процедуру.'
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/grazhdanam/bankrotstvo-fizicheskih-lic/#faq',
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
        '@id': 'https://dejure-help.ru/specialisty/nacheshnikov-vladimir-viktorovich/#person',
        'name': 'Владимир Викторович Начешников',
        'jobTitle': 'Специалист ЮК «Де-Юре» по банкротству граждан',
        'url': 'https://dejure-help.ru/specialisty/nacheshnikov-vladimir-viktorovich/',
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
            <span style={{ color: 'var(--color-text-main)' }}>Банкротство физических лиц</span>
          </>
        }
        superTitle="Юридическая помощь гражданам"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Банкротство
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              физических лиц в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Проверим, подходит ли Вам судебное банкротство или процедура через МФЦ, какие обязательства могут быть прекращены и чем процедура рискует для имущества, дохода и совершённых сделок. Куратор — специалист с опытом с 1997 года.
          </span>
        }
        primaryCtaText="Обсудить ситуацию с юристом"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_cta_bankruptcy_hub"
        primaryCtaSubtext={
          <>Если требуется срочная помощь, позвоните: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (910) 350-31-11</a></>
        }
        trustItems={[
          { text: 'Оцениваем долги, имущество, доходы и сделки' },
          { text: 'Объясняем риски до заключения договора и суда' },
          { text: 'Прозрачные условия и фиксированная стоимость' },
          { text: 'Куратор — специалист В. В. Начешников' }
        ]}
        imageUrl="/images/nacheshnikov.jpg"
        imageName="Владимир Викторович Начешников"
        imageSubtitle="Специалист ЮК «Де-Юре», куратор направления «Банкротство граждан»"
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
              Банкротство требует взвешенного юридического анализа. Поможем оценить риски, защитить законные права и выбрать правильный маршрут списания задолженности.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {[
              {
                tag: 'Платежи / Доход',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Платежи превышают</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>реальные возможности</span>
                  </>
                ),
                desc: 'Дохода не хватает одновременно на жизнь семьи и ежемесячные платежи всем кредиторам, долги продолжают накапливаться.'
              },
              {
                tag: 'Долговая спираль',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Долги закрываются</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>новыми займами и МФО</span>
                  </>
                ),
                desc: 'Кредитная нагрузка лавинообразно растёт, а новые микрозаймы лишь откладывают просрочку и увеличивают переплату.'
              },
              {
                tag: 'Суды / Приставы',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Начались суды,</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>аресты счетов и удержания</span>
                  </>
                ),
                desc: 'Есть судебные приказы, иски, исполнительные производства, аресты банковских карт или списания из заработной платы.'
              },
              {
                tag: 'Снижение дохода',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Доход резко снизился</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>из-за внешних причин</span>
                  </>
                ),
                desc: 'Потеря работы, болезнь, закрытие бизнеса или рост обязательных расходов лишили возможности обслуживать кредиты.'
              },
              {
                tag: 'Имущество / Семья',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Есть риск для имущества</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и совместной собственности</span>
                  </>
                ),
                desc: 'В собственности жильё, автомобиль, доля, дача, имущество в браке либо за последние 3 года совершались крупные сделки.'
              },
              {
                tag: 'Инициатива банка',
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Кредитор готовит</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>принудительное банкротство</span>
                  </>
                ),
                desc: 'Получено уведомление от банка или МФО о намерении обратиться в суд с заявлением о банкротстве гражданина.'
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

      {/* ═══ БЛОК 3: НАПРАВЛЕНИЯ ПОМОЩИ (КАТАЛОГ УСЛУГ С КАРТОЧКОЙ МФЦ И 6-Й КАРТОЧКОЙ) ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Услуги юриста</span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>по банкротству граждан</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Выберите конкретное направление, чтобы узнать условия процедуры, необходимые документы и варианты законного списания задолженности.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {[
              {
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Внесудебное банкротство</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>через МФЦ без суда</span>
                  </>
                ),
                desc: 'Проверка 4 законных оснований по ст. 223.2, лимита 25к–1М ₽, формирование полного списка кредиторов без риска возврата заявления.',
                link: '/grazhdanam/bankrotstvo-fizicheskih-lic/cherez-mfc/'
              },
              {
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Судебное банкротство</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>физических лиц «под ключ»</span>
                  </>
                ),
                desc: 'Комплексное сопровождение в арбитражном суде: сбор документов, взаимодействие с финансовым управляющим и списание долгов.',
                link: '#form'
              },
              {
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Защита имущества</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и совместной собственности</span>
                  </>
                ),
                desc: 'Защита единственного жилья, долей в недвижимости, прав супруга при реализации имущества и минимизация потерь семьи.',
                link: '#form'
              },
              {
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Кредитный юрист</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и споры с банками</span>
                  </>
                ),
                desc: 'Оспаривание навязанных страховок, завышенных неустоек, незаконных кредитов и прекращение давления коллекторов.',
                link: '/grazhdanam/kreditnyj-yurist/'
              },
              {
                title: (
                  <>
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Юрист по исполнительному</span>{' '}
                    <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>производству и приставам</span>
                  </>
                ),
                desc: 'Снятие арестов со счетов и имущества, отмена судебных приказов, снижение размера удержаний из заработной платы.',
                link: '/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/'
              }
            ].map((dir, i) => (
              <Link 
                key={i} 
                href={dir.link} 
                data-analytics="click_bankruptcy_service_card" 
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

            {/* 6-я карточка: Не нашли свою ситуацию */}
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
                  <span style={{ display: 'inline-block' }}>Опишите вашу долговую ситуацию в форме. Изучим имеющиеся документы</span> <br /> <span style={{ display: 'inline-block' }}>и предложим возможные варианты законного списания.</span>
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
        name="Владимир Викторович Начешников"
        position={<>Специалист ЮК &#171;Де-Юре&#187;,<br />куратор направления &#171;Банкротство граждан&#187;</>}
        imageUrl="/images/nacheshnikov.jpg"
        imagePosition="center 20%"
        profileHref="/specialisty/nacheshnikov-vladimir-viktorovich/"
        profileText="Подробнее о Владимире Викторовиче Начешникове →"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Практический опыт в сфере юридических и корпоративных процедур — с 1997 года.
          </span>,
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Оценивает основания для судебного банкротства и внесудебной процедуры через МФЦ</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Проводит глубокий аудит рисков для имущества, совместной собственности супругов и сделок за 3 года</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Сопровождает процедуры в Липецке и Липецкой области; доступен дистанционный формат работы</span>
            </li>
          </ul>
        ]}
        buttonText="Задать вопрос специалисту"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 5: ПРИМЕРЫ ИЗ ПРАКТИКИ ═══ */}
      <CasesBlock
        title="Примеры дел из практики"
        showAllLink="/praktika/"
        cases={cases}
      />

      {/* ═══ БЛОК 6: СТОИМОСТЬ УСЛУГ (ТИПОВОЙ ТАРИФНЫЙ ШАБЛОН) ═══ */}
      <PricingBlock
        title="Стоимость услуг по банкротству физических лиц"
        subtitle="Честные цены, закрепленные в договоре. Никаких скрытых комиссий и неожиданных платежей."
        tiers={pricingTiers}
        ctaTitle="Точную стоимость определим до начала работы"
        ctaSubtitle="Сначала изучим состав обязательств, имущество и документы, предложим подходящий маршрут и зафиксируем стоимость в договоре."
        ctaButtonText="Получить расчёт стоимости"
        ctaButtonLink="#form"
      />

      {/* ═══ БЛОК 7: ПОРЯДОК РАБОТЫ (ТИПОВОЙ ШАБЛОН) ═══ */}
      <ProcessBlock
        title="Как проходит процедура банкротства"
        subtitle="Прозрачный процесс работы от первого правового аудита документов до вынесения арбитражным судом определения о списании долгов."
        steps={steps}
      />

      {/* ═══ БЛОК 8: ЧАСТЫЕ ВОПРОСЫ (ТИПОВОЙ ШАБЛОН) ═══ */}
      <FAQBlock
        superTitle="Частые вопросы клиентов"
        title="Ответы на важные вопросы о банкротстве"
        subtitle="Мы собрали главные вопросы доверителей о банкротстве граждан. Если вы не нашли ответ на свой вопрос — свяжитесь с нами для индивидуального анализа."
        faqs={faqs}
      />

      {/* ═══ БЛОК 9: ОФИС В ЛИПЕЦКЕ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '40px', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  Офис в Липецке
                </span>
              </div>
              <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 38px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
                Обсудить банкротство с юристом в Липецке
              </h2>
              <p style={{ fontSize: '15.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                Можно встретиться в офисе «Де-Юре» или начать работу дистанционно. Перед визитом согласуйте время, чтобы специалист подготовился к разбору ситуации.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>г. Липецк, ул. Советская, д. 35, оф. 213</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <a href="tel:+79103503111" style={{ color: 'var(--color-deep-blue)', textDecoration: 'none', fontWeight: 600 }}>
                    +7 (910) 350-31-11
                  </a>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a href="#form" className="btn btn-primary" style={{ padding: '12px 28px' }}>
                  Записаться на встречу
                </a>
                <a href="tel:+79103503111" className="btn btn-outline" style={{ padding: '12px 24px' }}>
                  Позвонить
                </a>
              </div>
            </div>

            {/* Карточка-карта */}
            <div style={{
              background: 'var(--color-white)',
              border: '1px solid var(--color-border)',
              padding: '24px',
              boxShadow: '0 8px 30px rgba(23, 50, 77, 0.08)'
            }}>
              <div style={{ position: 'relative', width: '100%', height: '260px', background: '#EAEFE9', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A9b142eb3df8beaf1922c2a939fbfbfab52ca8cfb0f195d9e5b85a3a41a4a496f&amp;source=constructor"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  title="Офис ЮК Де-Юре в Липецке"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 10: ФИНАЛЬНАЯ ФОРМА ═══ */}
      <section id="form" className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <ContactsForm
            title="Проверьте возможность банкротства и риски до подачи заявления"
            subtitle="Кратко опишите ситуацию. Юрист уточнит состав долгов, имущество и другие обстоятельства, необходимые для предварительной оценки."
            buttonText="Проверить возможность банкротства"
            commentPlaceholder="Примерная сумма долга, количество кредиторов, имущество и стадия взыскания…"
            hiddenFields={[
              { name: 'serviceId', value: 'bankruptcy_individual' },
              { name: 'pageId', value: 'CIV-06' },
              { name: 'curatorId', value: 'nacheshnikov' }
            ]}
            subtext={
              <>
                Перезвоним в течение 15 минут в рабочее время. Если заявка оставлена вечером или в выходной день, перезвоним в ближайший рабочий день.
                <span style={{ display: 'block', marginTop: '6px', fontSize: '12.5px', color: 'var(--color-text-secondary)' }}>
                  Не указывайте паспортные данные, номера счетов и другие конфиденциальные сведения. Их можно передать юристу после установления защищённого способа связи.
                </span>
              </>
            }
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
