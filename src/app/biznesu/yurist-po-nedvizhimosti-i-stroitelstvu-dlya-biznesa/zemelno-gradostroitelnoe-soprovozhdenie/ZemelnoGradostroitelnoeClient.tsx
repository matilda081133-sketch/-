'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';
import ProcessBlock from '@/components/ProcessBlock';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import PricingBlock, { PricingTier } from '@/components/PricingBlock';

export default function ZemelnoGradostroitelnoeClient() {
  const faqs = [
    {
      q: 'Когда заказывать градостроительный аудит участка?',
      a: 'До аванса, покупки, долгосрочной аренды и заказа проектирования. Аудит сопоставляет не только сведения ЕГРН, но и ПЗЗ, предельные параметры, охранные зоны, документацию по планировке, подъездные пути и бизнес-цель компании.'
    },
    {
      q: 'Можно ли заранее понять, что разрешено построить?',
      a: 'Можно оценить правовой и градостроительный потенциал участка и выявить условия реализации проекта. Окончательный вывод зависит от актуальных документов, параметров проектируемого объекта и процедур, которые предстоит пройти.'
    },
    {
      q: 'Чем изменение ВРИ отличается от перевода земли в другую категорию?',
      a: 'ВРИ определяет допустимое использование внутри установленной категории и территориальной зоны, а категория относится к глобальному целевому назначению земель. Это принципиально разные процедуры; маршрут выбирается после правового анализа.'
    },
    {
      q: 'Всегда ли можно выбрать основной ВРИ самостоятельно?',
      a: 'Нет. Нужно учитывать действующий градостроительный регламент территориальной зоны, статус земли, зарегистрированные ограничения, сведения ЕГРН и специальные правила. Для условно разрешённого вида требуется отдельная публичная процедура.'
    },
    {
      q: 'Что делать, если нужного использования нет в ПЗЗ?',
      a: 'Проверить территориальную зону, возможность предоставления разрешения на условно разрешённый вид, внесения изменений в ПЗЗ, отклонения от предельных параметров или альтернативной конфигурации проекта.'
    },
    {
      q: 'Можно ли получить муниципальный участок без торгов?',
      a: 'Предоставление публичных участков без торгов допускается строго в случаях, предусмотренных ст. 39.6 ЗК РФ (например, под объекты масштабных инвестиционных проектов, достройку незавершённого строительства или собственникам расположенных на участке зданий).'
    },
    {
      q: 'Что такое ЗОУИТ и чем они опасны для проекта?',
      a: 'Зоны с особыми условиями использования территорий (охранные зоны ЛЭП, газопроводов, водоохранные зоны, санитарно-защитные зоны производств, приаэродромные территории). Они накладывают прямой запрет или жёсткие ограничения на строительство.'
    },
    {
      q: 'Как оспорить отказ в выдаче ГПЗУ или предоставлении участка?',
      a: 'Сначала подаётся досудебная претензия или жалоба в вышестоящий орган. При сохранении незаконного отказа юрист подготавливает административное исковое заявление в арбитражный суд по главе 24 АПК РФ.'
    },
    {
      q: 'Помогаете ли вы с публичными слушаниями?',
      a: 'Да. Готовим правовое и градостроительное обоснование для участия в общественных обсуждениях при изменении ПЗЗ или предоставлении разрешения на условно разрешённый вид использования.'
    },
    {
      q: 'От чего зависят срок и стоимость земельного сопровождения?',
      a: 'От правового статуса земли (частная, государственная, неразграниченная), сложности градостроительных ограничений и перечня согласующих инстанций.'
    }
  ];

  const situations = [
    {
      title: 'Подбор и аудит участка до сделки',
      desc: 'Проверим градостроительный регламент, ПЗЗ, ВРИ, ограничения и скрытые охранные зоны до покупки земли или заказа проекта.',
      tag: 'Due Diligence участка'
    },
    {
      title: 'Изменение ВРИ под коммерческий объект',
      desc: 'Текущий вид разрешённого использования не позволяет разместить производство, склад, ТЦ или автосервис. Требуется смена или добавление ВРИ.',
      tag: 'Смена ВРИ'
    },
    {
      title: 'Внесение изменений в ПЗЗ',
      desc: 'Необходимый вид деятельности не предусмотрен территориальной зоной. Подготовим обоснование и сопроводим корректировку карты зонирования.',
      tag: 'Изменение ПЗЗ'
    },
    {
      title: 'Получение ГПЗУ и преодоление отказов',
      desc: 'Администрация отказывает в выдаче градостроительного плана или включает недостоверные ограничения пятна застройки. Добьёмся выдачи без искажений.',
      tag: 'ГПЗУ'
    },
    {
      title: 'Оформление публичной земли',
      desc: 'Аренда или выкуп муниципального/государственного земельного участка под коммерческий объект с торгов или без торгов по ст. 39.6 ЗК РФ.',
      tag: 'Публичная земля'
    }
  ];

  const auditDirections = [
    {
      num: '01',
      title: 'Права и границы участка',
      desc: 'Сведения ЕГРН, статус границ, реестровые ошибки, наложения, права третьих лиц и законность формирования участка.'
    },
    {
      num: '02',
      title: 'ПЗЗ и территориальная зона',
      desc: 'Градостроительный регламент, основные, условно разрешённые и вспомогательные виды разрешённого использования.'
    },
    {
      num: '03',
      title: 'Предельные параметры застройки',
      desc: 'Максимальный процент застройки, минимальные отступы от границ, предельная этажность и высота объектов.'
    },
    {
      num: '04',
      title: 'Охранные зоны и ЗОУИТ',
      desc: 'Охранные зоны ЛЭП, газопроводов, кабелей связи, водоохранные зоны, санитарно-защитные зоны предприятий, приаэродромная территория.'
    },
    {
      num: '05',
      title: 'Красные линии и планировка',
      desc: 'Проекты межевания и планировки территории, красные линии улично-дорожной сети, риски изъятия для публичных нужд.'
    },
    {
      num: '06',
      title: 'Подъездные пути и сервитуты',
      desc: 'Правовой доступ к землям общего пользования, необходимость установления частного или публичного сервитута.'
    },
    {
      num: '07',
      title: 'Инженерная инфраструктура',
      desc: 'Технические условия подключения, охранные обязательства и проходящие по участку транзитные коммуникации.'
    },
    {
      num: '08',
      title: 'Риски отказов органов власти',
      desc: 'Анализ оснований возможных отказов в выдаче разрешений и подготовка аргументированной позиции заявителя.'
    }
  ];

  const cases: CaseData[] = [
    {
      title: 'Аудит участка под логистический комплекс 12 000 кв. м',
      category: 'Аудит участка',
      problem: 'Инвестор планировал приобрести участок 5 га под складской терминал. Продавец заявлял о полном отсутствии ограничений на строительство.',
      action: 'Сопоставили проект планировки территории, материалы ИСОГД и схемы сетей. Выявили незарегистрированную в ЕГРН охранную зону газопровода, пересекающую 40% участка.',
      result: 'Инвестор избежал покупки проблемного участка с прямым запретом на застройку, сохранив свыше 70 млн ₽ инвестиций.',
      isDemo: false
    },
    {
      title: 'Смена вида разрешённого использования под производственную базу',
      category: 'Изменение ВРИ',
      problem: 'Организация приобрела землю с ВРИ «для сельскохозяйственного производства». Для открытия цеха требовался перевод в производственный ВРИ.',
      action: 'Изучили ПЗЗ муниципального образования, подтвердили вхождение в нужную подзону, подготовили заявление и комплект обоснований, исключив необходимость публичных слушаний.',
      result: 'В ЕГРН внесены изменения: установлен ВРИ «Производственная деятельность», получено согласование на проектирование.',
      isDemo: false
    },
    {
      title: 'Преодоление незаконного отказа в выдаче ГПЗУ',
      category: 'Получение ГПЗУ',
      problem: 'Орган местного самоуправления отказал в выдаче ГПЗУ со ссылкой на отсутствие утверждённого проекта межевания квартала.',
      action: 'Подготовили правовое заключение со ссылками на ст. 57.3 Градостроительного кодекса РФ и практику Верховного Суда РФ о неправомерности отказа при наличии межевания участка.',
      result: 'Администрация отозвала отказ и выдала градостроительный план земельного участка с полной запечатанной зоной застройки.',
      isDemo: false
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Градостроительный экспресс-аудит',
      price: 'от 20 000 ₽',
      subtitle: 'Анализ правового статуса, ПЗЗ, территориальной зоны, доступных ВРИ и очевидных ограничений.',
      buttonText: 'Выбрать тариф',
      buttonHref: '#form',
      features: [
        { name: 'Анализ выписки ЕГРН и ПЗЗ территории', value: '✓' },
        { name: 'Проверка основных и условных ВРИ', value: '✓' },
        { name: 'Выявление ограничений и ЗОУИТ', value: '✓' },
        { name: 'Письменный отчёт с правовыми выводами', value: '✓' }
      ],
      popular: false
    },
    {
      title: 'Комплексный Due Diligence земли',
      price: 'от 45 000 ₽',
      subtitle: 'Глубокий аудит участка, ИСОГД, сетей, красных линий, проектов планировки и подъездных путей.',
      buttonText: 'Выбрать тариф',
      buttonHref: '#form',
      features: [
        { name: 'Полная проверка по градостроительным базам', value: '✓' },
        { name: 'Анализ проектов планировки и межевания', value: '✓' },
        { name: 'Оценка рисков отказов и публичных сервитутов', value: '✓' },
        { name: 'Пошаговая дорожная карта освоения участка', value: '✓' }
      ],
      popular: true
    },
    {
      title: 'Смена ВРИ или изменение ПЗЗ',
      price: 'от 50 000 ₽',
      subtitle: 'Юридическое сопровождение изменения вида разрешённого использования или внесения изменений в ПЗЗ.',
      buttonText: 'Выбрать тариф',
      buttonHref: '#form',
      features: [
        { name: 'Подготовка пакета заявлений и обоснований', value: '✓' },
        { name: 'Взаимодействие с профильными комитетами', value: '✓' },
        { name: 'Участие в общественных обсуждениях', value: '✓' },
        { name: 'Контроль внесения сведений в ЕГРН', value: '✓' }
      ],
      popular: false
    },
    {
      title: 'Оформление участка или спор с органом',
      price: 'от 60 000 ₽',
      subtitle: 'Оформление земли из публичной собственности (аренда/выкуп) либо обжалование отказа в суде.',
      buttonText: 'Выбрать тариф',
      buttonHref: '#form',
      features: [
        { name: 'Сопровождение процедур по ст. 39.6 ЗК РФ', value: '✓' },
        { name: 'Досудебная претензия и жалоба на отказ', value: '✓' },
        { name: 'Иск в арбитражный суд по гл. 24 АПК РФ', value: '✓' },
        { name: 'Судебное представительство во всех инстанциях', value: '✓' }
      ],
      popular: false
    }
  ];

  const relatedServices = [
    {
      title: 'Сопровождение сделок с недвижимостью',
      desc: 'Due Diligence объекта, продавца и земли, договор купли-продажи и регистрация перехода прав.',
      link: '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/soprovozhdenie-sdelok-s-kommercheskoy-nedvizhimostyu/'
    },
    {
      title: 'Юридическое сопровождение аренды',
      desc: 'Разработка и проверка договоров аренды коммерческой недвижимости, урегулирование разногласий и споров.',
      link: '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/yuridicheskoe-soprovozhdenie-arendy-kommercheskoy-nedvizhimosti/'
    },
    {
      title: 'Сопровождение строительства',
      desc: 'Договоры генерального подряда, проектная документация, контроль приёмки по КС-2/КС-3 и ввод в эксплуатацию.',
      link: '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/yuridicheskoe-soprovozhdenie-stroitelstva/'
    },
    {
      title: 'Строительные споры в арбитраже',
      desc: 'Взыскание задолженности по подряду, защита от необоснованных претензий по качеству и судебная экспертиза.',
      link: '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/stroitelnye-spory/'
    }
  ];

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
        areaServed: ['Липецк', 'Липецкая область'],
        employee: {
          '@id': 'https://dejure-help.ru/specialisty/nacheshnikov-vladimir-viktorovich/#person'
        }
      },
      {
        '@type': 'Person',
        '@id': 'https://dejure-help.ru/specialisty/nacheshnikov-vladimir-viktorovich/#person',
        name: 'Владимир Викторович Начешников',
        url: 'https://dejure-help.ru/specialisty/nacheshnikov-vladimir-viktorovich/',
        worksFor: {
          '@id': 'https://dejure-help.ru/#legalservice'
        }
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/zemelno-gradostroitelnoe-soprovozhdenie/#service',
        name: 'Земельно-градостроительное сопровождение бизнеса в Липецке',
        serviceType: 'Юридические услуги по земельному праву и градостроительству для бизнеса',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        url: 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/zemelno-gradostroitelnoe-soprovozhdenie/'
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/zemelno-gradostroitelnoe-soprovozhdenie/#faq',
        mainEntity: faqs.map(faq => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a
          }
        }))
      }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />
      <Header />

      {/* ═══ 1. ПЕРВЫЙ ЭКРАН (HERO) ═══ */}
      <MilitaryHero
        breadcrumbs={
          <>
            <Link href="/" style={{ color: 'var(--color-primary)' }}>Главная</Link> <span style={{ margin: '0 8px' }}>/</span>
            <Link href="/biznesu/" style={{ color: 'var(--color-primary)' }}>Бизнесу</Link> <span style={{ margin: '0 8px' }}>/</span>
            <Link href="/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/" style={{ color: 'var(--color-primary)' }}>Юрист по недвижимости и строительству</Link> <span style={{ margin: '0 8px' }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Земельно-градостроительное сопровождение</span>
          </>
        }
        superTitle={
          <span className="hero-title-span-mobile" style={{ display: 'inline-block' }}>
            Недвижимость и строительство • Земля и градостроительство • Липецк
          </span>
        }
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Земельно-градостроительное
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              сопровождение бизнеса
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Проверим градостроительный потенциал участка, поможем изменить ВРИ и ПЗЗ, получить ГПЗУ, оформить землю и снять риски до начала проектирования и строительства.
          </span>
        }
        trustItems={[
          { text: <span><strong>Начинаем до покупки</strong> и заказа проектирования объекта</span> },
          { text: <span><strong>Комплексный аудит</strong>: право, ПЗЗ, ЗОУИТ и сети в связке</span> },
          { text: <span><strong>Фиксированная стоимость</strong> и маршрут в договоре</span> }
        ]}
        primaryCtaText="Обсудить участок под проект"
        primaryCtaLink="#form"
        primaryCtaSubtext={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Перезвоним в течение 15 минут в рабочее время
            </span>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              или звоните: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (4742) 20-15-25</a>
            </span>
          </span>
        }
        secondaryCtaText="Что проверит юрист"
        secondaryCtaLink="#situations"
        imageUrl="/images/nacheshnikov.jpg"
        imageName="Владимир Викторович Начешников"
        imageSubtitle="Специалист по градостроительному праву и недвижимости"
      />

      {/* ═══ 2. КОГДА НУЖЕН ЮРИСТ (СИТУАЦИИ) ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px', textAlign: 'left' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Земельно-градостроительная практика
            </div>
            <h2 className="with-accent" style={{ 
              fontSize: 'clamp(28px, 4vw, 42px)', 
              fontFamily: 'var(--font-serif)', 
              color: 'var(--color-primary)', 
              marginBottom: '16px', 
              marginTop: 0, 
              lineHeight: 1.2,
              textAlign: 'left'
            }}>
              <span style={{ display: 'inline-block' }}>Когда бизнесу требуется</span> <br />
              <span style={{ display: 'inline-block' }}>земельно-градостроительный юрист</span>
            </h2>
            <p style={{ 
              fontSize: '16px', 
              color: 'var(--color-deep-blue)', 
              opacity: 0.9, 
              lineHeight: 1.65, 
              margin: 0,
              maxWidth: '740px',
              textAlign: 'left',
              textWrap: 'balance'
            }}>
              Помогаем инвесторам, застройщикам и собственникам земли сформировать безупречную правовую базу под коммерческие, логистические и производственные объекты.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            {situations.map((sit, idx) => (
              <div
                key={idx}
                className="card hover-lift"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  borderRadius: '0',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '-15px',
                  width: '90px',
                  height: '90px',
                  opacity: 0.04,
                  pointerEvents: 'none',
                  color: 'var(--color-deep-blue)'
                }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>

                <div>
                  <div style={{
                    fontSize: '11.5px',
                    fontWeight: 700,
                    color: 'var(--color-primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: '12px',
                    background: 'rgba(23, 50, 77, 0.06)',
                    padding: '3px 8px',
                    display: 'inline-block',
                    borderRadius: '2px'
                  }}>
                    {sit.tag}
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '18px',
                    fontWeight: 600,
                    color: 'var(--color-deep-blue)',
                    margin: '0 0 12px 0',
                    lineHeight: 1.35
                  }}>
                    {sit.title}
                  </h3>

                  <p style={{
                    fontSize: '14px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    {sit.desc}
                  </p>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--color-primary)',
                  fontSize: '13px',
                  fontWeight: 600,
                  marginTop: '20px'
                }}>
                  <span>Защитить проект</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            ))}

            {/* Карточка 6: CTA для сложных ситуаций */}
            <div
              className="card hover-lift"
              style={{
                background: 'linear-gradient(135deg, #17324D 0%, #0F2133 100%)',
                border: '1px solid #2A4A6D',
                borderTop: '3px solid var(--color-gold)',
                borderRadius: '0',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 8px 24px rgba(15, 33, 51, 0.25)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                position: 'absolute',
                bottom: '-20px',
                right: '-20px',
                width: '120px',
                height: '120px',
                opacity: 0.08,
                pointerEvents: 'none',
                color: 'var(--color-gold)'
              }}>
                <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                </svg>
              </div>

              <div>
                <div style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: 'var(--color-gold)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '14px',
                  background: 'rgba(193, 160, 102, 0.15)',
                  padding: '4px 10px',
                  alignSelf: 'flex-start',
                  display: 'inline-block',
                  borderRadius: '2px'
                }}>
                  Сложные споры
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  margin: '0 0 14px 0',
                  lineHeight: 1.35,
                  position: 'relative',
                  zIndex: 1
                }}>
                  ЗОУИТ, сервитуты или отказ администрации?
                </h3>

                <p style={{
                  fontSize: '14.5px',
                  color: '#CBD5E1',
                  lineHeight: 1.6,
                  margin: '0 0 20px 0',
                  position: 'relative',
                  zIndex: 1
                }}>
                  Оценим основания ограничений, снизим санитарно-защитные разрывы или оспорим незаконный отказ в суде по главе 24 АПК РФ.
                </p>
              </div>

              <div style={{ position: 'relative', zIndex: 1, marginTop: 'auto' }}>
                <a
                  href="#form"
                  className="btn btn-gold"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '12px 18px',
                    fontSize: '14px',
                    fontWeight: 700,
                    backgroundColor: 'var(--color-gold)',
                    color: 'var(--color-deep-blue)',
                    borderRadius: '2px',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 12px rgba(193, 160, 102, 0.25)'
                  }}
                >
                  Обсудить проект с юристом
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. НАПРАВЛЕНИЯ АУДИТА ═══ */}
      <section className="section bg-light" id="audit-points" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px', textAlign: 'left' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Комплексный анализ
            </div>
            <h2 className="with-accent" style={{ 
              fontSize: 'clamp(28px, 4vw, 42px)', 
              fontFamily: 'var(--font-serif)', 
              color: 'var(--color-primary)', 
              marginBottom: '16px', 
              marginTop: 0, 
              lineHeight: 1.2,
              textAlign: 'left'
            }}>
              <span style={{ display: 'inline-block' }}>Что проверит юрист: 8 направлений</span> <br />
              <span style={{ display: 'inline-block' }}>градостроительного аудита участка</span>
            </h2>
            <p style={{ 
              fontSize: '16px', 
              color: 'var(--color-deep-blue)', 
              opacity: 0.9, 
              lineHeight: 1.65, 
              margin: 0,
              maxWidth: '740px',
              textAlign: 'left',
              textWrap: 'balance'
            }}>
              Комплексный анализ территории, позволяющий выявить скрытые юридические и градостроительные стоп-факторы до крупных финансовых затрат на проектирование и покупку.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '24px' }}>
            {auditDirections.map((item, idx) => (
              <div
                key={idx}
                className="card hover-lift"
                style={{
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  borderLeft: '4px solid var(--color-gold)',
                  borderRadius: '0',
                  padding: '28px 24px',
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'flex-start',
                  boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)'
                }}
              >
                <div style={{
                  fontSize: '18px',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 700,
                  color: 'var(--color-gold)',
                  lineHeight: 1,
                  paddingTop: '2px'
                }}>
                  {item.num}
                </div>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '17px',
                    fontWeight: 700,
                    color: 'var(--color-deep-blue)',
                    margin: '0 0 8px 0',
                    lineHeight: 1.3
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    margin: 0,
                    fontSize: '14px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6
                  }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. ЧТО ПОДГОТОВИТЬ ДЛЯ СТАРТА (ДОКУМЕНТЫ) ═══ */}
      <section className="section bg-white" id="documents" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px', textAlign: 'left' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Пакет документов
            </div>
            <h2 className="with-accent" style={{ 
              fontSize: 'clamp(28px, 4vw, 42px)', 
              fontFamily: 'var(--font-serif)', 
              color: 'var(--color-primary)', 
              marginBottom: '16px', 
              marginTop: 0, 
              lineHeight: 1.2,
              textAlign: 'left'
            }}>
              <span style={{ display: 'inline-block' }}>Что подготовить для аудита</span> <br />
              <span style={{ display: 'inline-block' }}>и оформления земельного участка</span>
            </h2>
            <p style={{ 
              fontSize: '16px', 
              color: 'var(--color-deep-blue)', 
              opacity: 0.9, 
              lineHeight: 1.65, 
              margin: 0,
              maxWidth: '740px',
              textAlign: 'left',
              textWrap: 'balance'
            }}>
              Для первичного разбора достаточно кадастрового номера и назначения объекта. Для углублённого аудита юрист изучает правоустанавливающие и градостроительные документы.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '32px', marginBottom: '40px' }}>
            {/* Карточка 1: Правоустанавливающие и исходные документы */}
            <div style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-primary)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingBottom: '12px', borderBottom: '1px solid rgba(23, 50, 77, 0.1)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0 }}>
                  Правоустанавливающие документы
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Необходимы для проверки законности формирования участка, титула владения и зарегистрированных ограничений.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Выписка из ЕГРН на земельный участок</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Кадастровый номер, категория, вид разрешённого использования (ВРИ), собственник, арендатор и обременения.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Договор основания или акт органа власти</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Договор купли-продажи, договор аренды публичной земли, постановление о предоставлении или проект межевания.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Межевой план и координаты поворотных точек</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Сведения об установленных границах, отсутствие реестровых ошибок, наложений и пересечений со смежниками.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Карточка 2: Градостроительная документация */}
            <div style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-gold)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingBottom: '12px', borderBottom: '1px solid rgba(23, 50, 77, 0.1)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0 }}>
                  Градостроительная документация
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Определяет градостроительный регламент территории, предельные параметры застройки и технические ограничения.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>ГПЗУ (градостроительный план участка)</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Пятно допустимого размещения объекта, минимальные отступы от границ, высотные и плотностные регламенты.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Проекты планировки и межевания (ППТ / ПМТ)</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Красные линии улично-дорожной сети, коридоры инженерных сетей и перспективы развития квартала.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Переписка с органами власти и технические условия</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Письменные отказы профильных комитетов, протоколы публичных слушаний, ТУ на присоединение к сетям.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Широкая плашка призыва к действию */}
          <div style={{
            background: 'linear-gradient(135deg, #17324D 0%, #0F2133 100%)',
            padding: '36px 40px',
            borderTop: '3px solid var(--color-gold)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            boxShadow: '0 8px 30px rgba(15, 33, 51, 0.2)'
          }}>
            <div style={{ maxWidth: '650px' }}>
              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '22px',
                color: '#FFFFFF',
                margin: '0 0 8px 0',
                lineHeight: 1.3
              }}>
                Нужна правовая оценка земельного участка перед сделкой или проектом?
              </h3>
              <p style={{ margin: 0, fontSize: '14.5px', color: '#CBD5E1', lineHeight: 1.6 }}>
                Отправьте кадастровый номер. Юрист оперативно проверит статус по ПЗЗ, территориальной зоне и явным ограничениям.
              </p>
            </div>
            <a
              href="#form"
              className="btn btn-gold"
              style={{
                padding: '14px 28px',
                fontSize: '15px',
                fontWeight: 700,
                backgroundColor: 'var(--color-gold)',
                color: 'var(--color-deep-blue)',
                borderRadius: '2px',
                textDecoration: 'none',
                flexShrink: 0,
                boxShadow: '0 4px 15px rgba(193, 160, 102, 0.3)'
              }}
            >
              Отправить кадастровый номер на проверку
            </a>
          </div>
        </div>
      </section>

      {/* ═══ 5. ЭТАПЫ РАБОТЫ (PROCESS BLOCK) ═══ */}
      <ProcessBlock
        title="Этапы сопровождения земельных проектов"
        subtitle="Семь последовательных шагов от аудита потенциала до получения разрешительной базы"
        steps={[
          {
            num: '01',
            title: 'Анализ задачи и параметров',
            desc: 'Изучаем параметры планируемого объекта, требования к коммуникациям, подъездам и санитарным зонам.'
          },
          {
            num: '02',
            title: 'Градостроительный аудит',
            desc: 'Сопоставляем данные ЕГРН, ПЗЗ, карты зон с особыми условиями (ЗОУИТ) и красные линии.'
          },
          {
            num: '03',
            title: 'Выбор правового маршрута',
            desc: 'Определяем способ реализации: смена ВРИ, получение разрешения на условный вид или корректировка ПЗЗ.'
          },
          {
            num: '04',
            title: 'Подготовка обоснований',
            desc: 'Разрабатываем доказательную базу, заявления, схемы и пояснительные записки для органов власти.'
          },
          {
            num: '05',
            title: 'Сопровождение процедур',
            desc: 'Взаимодействуем с профильными ведомствами, участвуем в комиссиях и общественных обсуждениях.'
          },
          {
            num: '06',
            title: 'Регистрация изменений в ЕГРН',
            desc: 'Контролируем внесение обновлённых сведений о ВРИ, границах или виде использования в Росреестр.'
          },
          {
            num: '07',
            title: 'Переход к проектированию',
            desc: 'Передаём сформированный юридический пакет техническим специалистам и проектным организациям.'
          }
        ]}
      />

      {/* ═══ 6. ПРАКТИКА (CASES BLOCK) ═══ */}
      <CasesBlock
        cases={cases}
        title="Практика по земельным и градостроительным делам"
      />

      {/* ═══ 7. СТОИМОСТЬ (PRICING BLOCK) ═══ */}
      <PricingBlock
        title="Стоимость земельно-градостроительных услуг"
        subtitle="Фиксированная стоимость работ, закреплённая в договоре. Понятные и измеримые этапы."
        tiers={pricingTiers}
      />

      {/* ═══ 8. ВОПРОСЫ И ОТВЕТЫ (FAQ BLOCK) ═══ */}
      <FAQBlock
        title="Частые вопросы по земле и градостроительству"
        subtitle="Разъяснения юриста о ВРИ, охранных зонах, ГПЗУ и получении публичных участков"
        faqs={faqs}
      />

      {/* ═══ 9. СМЕЖНЫЕ УСЛУГИ КЛАСТЕРА (GRID-4) ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)', borderTop: '1px solid var(--color-border)' }}>
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
              Смежные направления практики по недвижимости и строительству
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '24px'
            }}>
              <h2 className="with-accent" style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: 'clamp(24px, 3.5vw, 34px)', 
                color: 'var(--color-deep-blue)', 
                margin: 0, 
                lineHeight: 1.25, 
                flex: '1 1 480px', 
                minWidth: '280px' 
              }}>
                <span style={{ display: "inline-block" }}>Смежные услуги</span> <br />
                <span style={{ display: "inline-block" }}>кластера недвижимости</span>
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
                Комплексная юридическая помощь бизнесу: купля-продажа, коммерческая аренда, сопровождение строительства и судебный арбитраж.
              </p>
            </div>
          </div>

          <div className="grid grid-4" style={{ gap: '20px', marginBottom: '28px' }}>
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

      {/* ═══ 10. ФИНАЛЬНАЯ ФОРМА (СВЯЗАТЬСЯ С НАМИ) — ШАБЛОН ═══ */}
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
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>оценку участка</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко опишите задачу и оставьте кадастровый номер. Юрист оценит градостроительный потенциал территории по ПЗЗ и свяжется с вами в течение 15 минут в рабочее время.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация земельного юриста</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните прямо сейчас: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (4742) 20-15-25</a>
                </p>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '6px' }}>
                  Липецк, ул. Советская, д. 35, офис 213 (приём по предварительной записи)
                </div>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Конфиденциальность:</strong>
                Не указывайте в форме конфиденциальные инвестиционные планы и закрытые данные. Документы можно передать юристу после согласования защищённого канала связи.
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Обсудить участок под проект"
                subtitle={
                  <>
                    <span style={{ display: 'inline-block' }}>Оставьте кадастровый номер и суть задачи. Юрист свяжется с вами</span> <br />
                    <span style={{ display: 'inline-block' }}>в течение 15 минут в рабочее время.</span>
                  </>
                }
                subtext={
                  <>
                    <span style={{ display: 'inline-block' }}>Если вы оставите заявку вечером или в&nbsp;выходной день,</span> <br />
                    <span style={{ display: 'inline-block' }}>мы перезвоним в&nbsp;ближайший рабочий день.</span>
                  </>
                }
                buttonText="Отправить участок на анализ"
                commentPlaceholder="Укажите кадастровый номер (например, 48:20:...) и планируемое назначение объекта…"
                hiddenFields={[
                  { name: 'source_page', value: '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/zemelno-gradostroitelnoe-soprovozhdenie/' },
                  { name: 'service', value: 'Земельно-градостроительное сопровождение бизнеса' }
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
