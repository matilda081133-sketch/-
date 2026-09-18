'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock, { FAQItem } from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import ProcessBlock, { ProcessStep } from '@/components/ProcessBlock';
import PricingBlock, { PricingTier } from '@/components/PricingBlock';
import SpecialistBlock from '@/components/SpecialistBlock';

export default function PredstavlenieKreditoraClient() {
  const situations = [
    {
      tag: 'Поставщик / подрядчик',
      title: 'Должник перестал платить, открыта процедура банкротства',
      desc: 'Контрагент вошёл в банкротство, платежи заблокированы. Поможем своевременно заявить требования в арбитражный суд и не пропустить процессуальные сроки реестра.'
    },
    {
      tag: 'Аренда / лизинг',
      title: 'Задолженность по аренде и возврат переданного имущества',
      desc: 'Разделим текущие платежи и реестровую задолженность, обеспечим юридическую защиту имущества от включения в общую конкурсную массу должника.'
    },
    {
      tag: 'Судебный акт',
      title: 'Есть решение суда, но исполнительное производство остановлено',
      desc: 'С момента введения банкротства исполнительные листы передаются арбитражному управляющему. Переведём взыскание в банкротный процесс без потери времени.'
    },
    {
      tag: 'Залоговый кредитор',
      title: 'Необходимость признания залогового статуса и контроль условий торгов',
      desc: 'Оформим статус залогового кредитора, разработаем и утвердим положение о торгах, обеспечим преимущественное получение 80% выручки от продажи залога.'
    },
    {
      tag: 'Миноритарный кредитор',
      title: 'Небольшая доля голосов в реестре: риск потери контроля',
      desc: 'Мажоритарные кредиторы пытаются провести ликвидацию без учета ваших интересов. Объединим голоса, оспорим незаконные решения собрания и защитим права.'
    },
    {
      tag: 'Фиктивные долги',
      title: 'Аффилированные кредиторы заявляют искусственные долги',
      desc: 'Собственники должника пытаются «размыть» реестр поддельными договорами займа. Докажем притворность требований и добьемся их субординации или исключения.'
    }
  ];

  const urgentCards = [
    {
      title: 'Срок закрытия реестра — 2 месяца',
      desc: 'В процедуре наблюдения и конкурсного производства установлен жёсткий двухмесячный срок на подачу требований. Опоздание переводит долг «за реестр», где шансы на возврат стремятся к нулю.'
    },
    {
      title: 'Первое собрание кредиторов',
      desc: 'Именно на первом собрании решается судьба компании, избирается комитет кредиторов и кандидатура арбитражного управляющего. Пассивный кредитор теряет право влиять на процедуру.'
    },
    {
      title: 'Риск вывода активов на торгах',
      desc: 'Если управляющий находится под влиянием должника, имущество может быть оценено с кратным дисконтом и продано через подставные торги. Необходим постоянный процессуальный надзор.'
    }
  ];

  const diagnosticContours = [
    {
      title: 'Анализ дела в картотеке арбитража',
      what: 'Определяем текущую стадию (наблюдение, конкурсное производство), дату публикаций и процессуальные дедлайны.',
      why: 'Исключить пропуск срока на включение в реестр и обжалование определений суда.'
    },
    {
      title: 'Аудит обоснованности требований',
      what: 'Проверяем первичные документы поставки, подписи, акты сверки, сроки исковой давности и основания долга.',
      why: 'Сформировать безупречную позицию, которую не смогут оспорить должник и арбитражный управляющий.'
    },
    {
      title: 'Контроль арбитражного управляющего',
      what: 'Изучаем отчёты АУ, инвентаризационные описи, обоснованность привлечения сторонних специалистов и текущие расходы.',
      why: 'Пресечь необоснованное уменьшение конкурсной массы и затягивание процедуры.'
    },
    {
      title: 'Противодействие фиктивным кредиторам',
      what: 'Анализируем требования аффилированных лиц, займы учредителей и бестоварные сделки в суде.',
      why: 'Не допустить размытия реестра и перехода контроля над собранием кредиторов к должнику.'
    },
    {
      title: 'Оспаривание сделок должника',
      what: 'Выявляем отчуждение техники, недвижимости и платежи с предпочтением за 3 года до банкротства.',
      why: 'Вернуть выведенные активы обратно в конкурсную массу для пропорционального погашения долгов.'
    },
    {
      title: 'Субсидиарная ответственность КДЛ',
      what: 'Устанавливаем виновные действия руководителей, непередачу бухгалтерской базы и неподачу заявления.',
      why: 'Взыскать непогашенный долг напрямую с личного имущества бенефициаров и директора компании.'
    }
  ];

  const processSteps: ProcessStep[] = [
    {
      num: '01',
      title: 'Проверяем дело и сроки',
      desc: 'Находим актуальные судебные акты и публикации на Федресурсе, определяем стадию и ближайшие процессуальные события.'
    },
    {
      num: '02',
      title: 'Определяем статус кредитора',
      desc: 'Проверяем первичные документы, залоговое обеспечение, права голоса и формируем правовую позицию.'
    },
    {
      num: '03',
      title: 'Согласуем стратегию',
      desc: 'Фиксируем ключевые цели: включение в реестр, контроль собрания, оспаривание сделок или взыскание с директора.'
    },
    {
      num: '04',
      title: 'Представляем в суде',
      desc: 'Готовим заявления и ходатайства, участвуем в судебных заседаниях и отбиваем возражения оппонентов.'
    },
    {
      num: '05',
      title: 'Участвуем в процедуре',
      desc: 'Анализируем отчеты управляющего, голосуем на собраниях кредиторов и защищаем конкурсную массу.'
    },
    {
      num: '06',
      title: 'Контролируем результат',
      desc: 'Отслеживаем проведение открытых торгов, распределение вырученных средств и фактические выплаты кредитору.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Диагностика позиции',
      subtitle: 'Проверка дела, публикаций и прав',
      price: 'от 5 000 ₽',
      popular: false,
      features: [
        { name: 'анализ реестра и картотеки арбитража', value: 'Да' },
        { name: 'проверка статуса должника и управляющего', value: 'Да' },
        { name: 'карта сроков и первоочередных действий', value: 'Да' }
      ],
      buttonText: 'Заказать диагностику',
      buttonHref: '#form'
    },
    {
      title: 'Стратегия участия кредитора',
      subtitle: 'План действий и расчёт перспектив',
      price: 'от 25 000 ₽',
      popular: true,
      badgeText: 'Востребовано',
      features: [
        { name: 'анализ повестки собрания кредиторов', value: 'Да' },
        { name: 'оценка шансов на пополнение массы', value: 'Да' },
        { name: 'выявление сомнительных кредиторов', value: 'Да' },
        { name: 'подготовка дорожной карты участия', value: 'Да' }
      ],
      buttonText: 'Разработать стратегию',
      buttonHref: '#form'
    },
    {
      title: 'Представительство на собрании',
      subtitle: 'Участие в собрании кредиторов',
      price: 'от 20 000 ₽',
      popular: false,
      features: [
        { name: 'анализ материалов к собранию', value: 'Да' },
        { name: 'подготовка позиции и голосование', value: 'Да' },
        { name: 'очное или заочное представительство', value: 'Да' },
        { name: 'фиксация нарушений в протоколе', value: 'Да' }
      ],
      buttonText: 'Делегировать участие',
      buttonHref: '#form'
    },
    {
      title: 'Судебное представительство',
      subtitle: 'Защита позиции в арбитражном суде',
      price: 'от 35 000 ₽',
      popular: false,
      features: [
        { name: 'подготовка отзывов и ходатайств', value: 'Да' },
        { name: 'участие в судебных заседаниях', value: 'Да' },
        { name: 'противодействие фиктивным долгам', value: 'Да' }
      ],
      buttonText: 'Передать дело в суд',
      buttonHref: '#form'
    },
    {
      title: 'Комплексное сопровождение',
      subtitle: 'Полный процессуальный контроль процедуры',
      price: 'от 45 000 ₽',
      popular: false,
      features: [
        { name: 'контроль всех отчётов управляющего', value: 'Да' },
        { name: 'участие во всех собраниях кредиторов', value: 'Да' },
        { name: 'направление процессуальных запросов', value: 'Да' },
        { name: 'регулярная отчётность доверителю', value: 'Да' }
      ],
      buttonText: 'Обсудить сопровождение',
      buttonHref: '#form'
    }
  ];

  const casesData: CaseData[] = [
    {
      category: 'Поставщик / Оборудование',
      title: 'Поставщик: комплексный контроль процедуры банкротства должника',
      problem: 'После включения требования поставщика на 14 млн ₽ конкурсный управляющий затягивал инвентаризацию и отчёты, готовя вывод активов.',
      action: 'Запросили финансовую документацию, инициировали внеочередное собрание кредиторов, поставили перед управляющим вопросы по сохранности оборудования.',
      result: 'Пресечена попытка незаконной продажи активов по заниженной оценке, утверждён прозрачный порядок открытых торгов с контролем кредитора.'
    },
    {
      category: 'Залоговый кредитор / Недвижимость',
      title: 'Залоговый кредитор: защита права на приоритетное удовлетворение',
      problem: 'Конкурсный управляющий необоснованно включил в смету текущих расходов эксплуатацию залогового здания, занижая долю кредитора.',
      action: 'Подготовили мотивированные возражения в арбитражный суд, оспорили распределение расходов конкурсного производства и утвердили судебное положение о порядке реализации.',
      result: 'Суд обязал направить 80% всей выручки от продажи напрямую на погашение задолженности перед залоговым кредитором.'
    },
    {
      category: 'Миноритарный кредитор / Торговля',
      title: 'Миноритарный кредитор: блокировка фиктивных требований аффилированного лица',
      problem: 'Кредитор обладал 6% голосов в реестре, тогда как аффилированное с должником лицо предъявило требования на 70% реестра по сомнительным займам.',
      action: 'Провели независимый аудит сделок должника за 3 года, доказали корпоративную природу и притворность займа мажоритарного кредитора, добились субординации.',
      result: 'Требования аффилированного лица субординированы, доверитель стал реальным мажоритарным кредитором с решающим голосом.'
    }
  ];

  const faqItems: FAQItem[] = [
    {
      q: 'Зачем кредитору юрист, если арбитражный управляющий обязан соблюдать закон?',
      a: 'Арбитражный управляющий — фигура процессуально самостоятельная, но на практике его лояльность нередко принадлежит инициатору процедуры или мажоритарному кредитору. Без активного участия со стороны кредитора управляющий может не оспаривать сделки должника и не привлекать руководство к субсидиарной ответственности.'
    },
    {
      q: 'Что делать, если должник вошел в банкротство, а суд еще не вынес решение по иску?',
      a: 'Если иск о взыскании рассматривается в общем порядке и банкротство должника уже введено, производство по иску может быть приостановлено. Требование заявляется непосредственно в дело о банкротстве в Арбитражный суд Липецкой области.'
    },
    {
      q: 'Можно ли вступить в дело, если процедура уже длится несколько месяцев?',
      a: 'Да. Сначала юрист проверяет реестр и прошедшие судебные заседания. Даже если двухмесячный срок закрытия реестра пропущен, требования подлежат включению «за реестр», а кредитор сохраняет право оспаривать сделки должника и действия управляющего.'
    },
    {
      q: 'Как кредитор голосует на собраниях?',
      a: 'Число голосов пропорционально сумме основного долга, включенного в третью очередь реестра. Неустойки, пени и штрафы права голоса не дают. Юрист может участвовать в собрании по нотариальной доверенности или через электронное голосование.'
    },
    {
      q: 'Как оспорить подозрительные сделки должника?',
      a: 'Правом на подачу заявления об оспаривании сделок обладает арбитражный управляющий, а также конкурсные кредиторы, чьи требования составляют более 10% от реестра. Если у кредитора меньше 10%, юристы инициируют обязание управляющего подать иск через собрание кредиторов или суд.'
    },
    {
      q: 'Можно ли взыскать непогашенный остаток долга с директора должника?',
      a: 'Да. Если имущества компании недостаточно для расчетов, подается заявление о привлечении контролирующих должника лиц (руководителя, учредителей) к субсидиарной ответственности. По исполнительному листу взыскание обращается на личное имущество директора.'
    },
    {
      q: 'Что дает кредитору статус залогового?',
      a: 'Залоговый кредитор получает право определять начальную продажную цену и порядок реализации предмета залога на торгах, а также получает до 80% средств от его продажи в приоритетном порядке.'
    },
    {
      q: 'Как проверить, не вывел ли должник активы перед банкротством?',
      a: 'Юрист запрашивает через суд и управляющего выписки по счетам компании, сведения Росреестра и ГИБДД за последние 3 года. Любые нетипичные платежи и отчуждение имущества подвергаются судебной экспертизе.'
    },
    {
      q: 'Сколько времени занимает банкротный процесс для кредитора?',
      a: 'Процедура конкурсного производства в среднем длится от 6 до 18 месяцев в зависимости от количества имущества и интенсивности судебных споров по оспариванию сделок.'
    },
    {
      q: 'Возмещаются ли расходы на юридические услуги за счет должника?',
      a: 'Судебные расходы по обособленным спорам (включение в реестр, признание сделок недействительными) могут быть взысканы с проигравшей стороны или конкурсной массы должника.'
    }
  ];

  const relatedServices = [
    {
      title: 'Банкротство компании со стороны должника',
      desc: 'Защита предприятия и директора при наступлении признаков неплатёжеспособности.',
      link: '/biznesu/bankrotstvo-biznesa/bankrotstvo-kompanii-so-storony-dolzhnika/'
    },
    {
      title: 'Включение в реестр требований',
      desc: 'Соблюдение сроков, сбор доказательств и защита требования в арбитражном суде.',
      link: '/biznesu/bankrotstvo-biznesa/vklyuchenie-v-reestr-trebovanij-kreditorov/'
    },
    {
      title: 'Оспаривание сделок при банкротстве',
      desc: 'Возврат выведенного должником имущества и денежных средств в конкурсную массу.',
      link: '/biznesu/bankrotstvo-biznesa/osparivanie-sdelok-pri-bankrotstve/'
    },
    {
      title: 'Обжалование действий управляющего',
      desc: 'Пресечение злоупотреблений, затягивания процедуры и занижения стоимости активов.',
      link: '/biznesu/bankrotstvo-biznesa/obzhalovanie-dejstvij-arbitrazhnogo-upravlyayushchego/'
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
        '@id': 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/predstavlenie-interesov-kreditora/#service',
        name: 'Представление интересов кредитора в банкротстве компании в Липецке',
        serviceType: 'Юридическое представительство кредиторов в делах о несостоятельности (банкротстве)',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        url: 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/predstavlenie-interesov-kreditora/',
        description: 'Защита прав кредиторов в банкротстве должников в Липецке: включение в реестр, контроль управляющего, собрания кредиторов, оспаривание сделок должника.'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/predstavlenie-interesov-kreditora/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Главная',
            item: 'https://dejure-help.ru/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Бизнесу',
            item: 'https://dejure-help.ru/biznesu/'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Банкротство бизнеса',
            item: 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/'
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Представление интересов кредитора',
            item: 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/predstavlenie-interesov-kreditora/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/predstavlenie-interesov-kreditora/#faq',
        mainEntity: faqItems.map(item => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a
          }
        }))
      }
    ]
  };

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
            <Link href="/biznesu/bankrotstvo-biznesa/">Банкротство бизнеса</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Представление интересов кредитора</span>
          </>
        }
        superTitle={
          <span style={{ whiteSpace: 'normal', display: 'inline-block', lineHeight: 1.4 }}>
            <span style={{ display: 'inline-block' }}>БАНКРОТСТВО КОМПАНИИ • КРЕДИТОР •</span> <br />
            <span style={{ display: 'inline-block' }}>Липецк и арбитраж</span>
          </span>
        }
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Представление интересов
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              кредитора в банкротстве
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Проверим стадию дела, статус требования и реальные рычаги влияния. Сформируем стратегию и представим кредитора на собраниях и в арбитражном суде.
          </span>
        }
        primaryCtaText="Проверить позицию кредитора"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_predstavlenie_kreditora"
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
        imageSubtitle="Куратор направления арбитражного и банкротного права"
        imageObjectPosition="center 15%"
        trustItems={[
          {
            text: (
              <span>
                <strong>Куратор направления</strong> — Владимир Викторович Начешников
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Практический опыт с 1997 года</strong> в арбитражных процессах и спорах о банкротстве
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Реальный возврат средств</strong> через оспаривание сделок и субсидиарную ответственность
              </span>
            )
          }
        ]}
      />

      {/* ═══ БЛОК 2: ТИПОВЫЕ СИТУАЦИИ КРЕДИТОРОВ (#situations) ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'inline-block' }}>В каких ситуациях кредитору</span> <br />
              <span style={{ display: 'inline-block' }}>требуется судебная защита</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              У каждой категории взыскателей свои процессуальные цели: от подтверждения залогового статуса до судебного отбития фиктивных требований аффилированных лиц.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '32px' }}>
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
                  {sit.tag && (
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
                  )}

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

                <a
                  href="#form"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--color-primary)',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    marginTop: '20px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-primary)')}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('form');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else window.location.hash = 'form';
                  }}
                >
                  <span>Защитить требование</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: СРОЧНОСТЬ — РИСКИ ПАССИВНОСТИ КРЕДИТОРА (#urgent) ═══ */}
      <section className="section" id="urgent" style={{ background: 'var(--color-deep-blue)', color: '#FFFFFF', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '60px', height: '2px', background: 'var(--color-gold)' }}></div>
              <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Срочность обращения
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 3.8vw, 38px)', color: '#FFFFFF', margin: '0 0 16px 0', lineHeight: 1.25 }}>
              Когда пассивность кредитора приводит к потере денег
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.82)', margin: 0, lineHeight: 1.65 }}>
              В банкротстве действует принцип «активный кредитор защищает свои деньги». Бездействие кредитора позволяет должнику распродать активы и списать долг:
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '20px', marginBottom: '40px' }}>
            {urgentCards.map((card, cIdx) => (
              <div
                key={cIdx}
                className="urgent-card hover-lift"
                style={{
                  background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)',
                  padding: '30px 24px',
                  borderTop: '4px solid var(--color-gold)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <div style={{ fontSize: '16.5px', fontWeight: 700, color: 'var(--color-deep-blue)', lineHeight: 1.35, fontFamily: 'var(--font-serif)' }}>
                      {card.title}
                    </div>
                  </div>
                  <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '14px', lineHeight: 1.55, margin: 0 }}>
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.08)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '24px 28px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px'
          }}>
            <div style={{ maxWidth: '680px' }}>
              <strong style={{ display: 'block', fontSize: '16px', color: '#FFFFFF', marginBottom: '4px' }}>
                Не ждите окончания процедуры — управляющий не станет защищать ваши интересы по собственной инициативе
              </strong>
              <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.5 }}>
                Проверим публикации в ЕФРСБ и поможем занять активную процессуальную позицию на ближайшем судебном заседании.
              </span>
            </div>
            <a
              href="#form"
              className="btn"
              style={{
                background: 'var(--color-gold)',
                color: 'var(--color-deep-blue)',
                fontWeight: 700,
                padding: '14px 26px',
                whiteSpace: 'nowrap',
                textDecoration: 'none'
              }}
            >
              Срочная консультация
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: КОНТУРЫ ПРАВОВОЙ ЗАЩИТЫ КРЕДИТОРА (#check) ═══ */}
      <section className="section" id="check" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              <span style={{ display: 'inline-block' }}>Шесть контуров правовой</span> <br />
              <span style={{ display: 'inline-block' }}>защиты интересов кредитора</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Комплексный охват: от первичного анализа карточки дела в арбитраже до реального пополнения конкурсной массы.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', position: 'relative' }}>
            {diagnosticContours.map((item, idx) => (
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
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: '0 0 12px 0' }}>
                  <strong>Что делаем:</strong> {item.what}
                </p>
                <p style={{ fontSize: '13.5px', color: 'var(--color-deep-blue)', lineHeight: 1.55, margin: 0, borderTop: '1px dashed var(--color-border)', paddingTop: '10px' }}>
                  <strong>Результат:</strong> {item.why}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: КУРАТОР НАПРАВЛЕНИЯ ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Владимир Викторович Начешников"
        position="Специалист по арбитражным спорам и банкротству, куратор корпоративного направления"
        imageUrl="/images/nacheshnikov.jpg"
        imagePosition="center 15%"
        profileHref="/specialisty/nacheshnikov-vladimir-viktorovich/"
        profileText="Подробнее о Владимире Викторовиче Начешникове →"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Банкротство должника — это не формальная ликвидация компании, а сложный судебный процесс с высокими рисками личной субсидиарной ответственности руководства и учредителей.
          </span>,
          <span key="2" style={{ color: 'var(--color-deep-blue)', display: 'block', marginTop: '12px' }}>
            Владимир Викторович лично руководит правовым аудитом кризисной ситуации, оценивает безопасность сделок за трёхлетний период и формирует выверенную позицию для арбитражного суда.
          </span>
        ]}
        buttonText="Обсудить ситуацию с куратором"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 6: ПРАКТИКА И КЕЙСЫ ═══ */}
      <CasesBlock
        title={<><span style={{ display: 'inline-block' }}>Практика защиты кредиторов</span> <br /><span style={{ display: 'inline-block' }}>в арбитражных процессах</span></>}
        cases={casesData}
        showAllLink="/praktika/"
        showAllText="Смотреть всю практику →"
        showDemoWarning={true}
      />

      {/* ═══ БЛОК 7: ПОРЯДОК РАБОТЫ ═══ */}
      <ProcessBlock
        title="Порядок совместной работы"
        subtitle="Шесть последовательных шагов защиты интересов кредитора в арбитражном процессе."
        alignTitle="center"
        steps={processSteps}
        ctaTitle="Хотите оценить шансы на возврат задолженности?"
        ctaSubtitle="Передайте номер дела на экспресс-анализ ведущим банкротным юристам."
        ctaButtonText="Проверить позицию"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 8: ТАРИФЫ И СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость защиты интересов кредитора"
        subtitle="Фиксированная стоимость юридических услуг. Все расходы взыскиваются с должника."
        tiers={pricingTiers}
        disclaimer="Судебные расходы, государственные пошлины, экспертизы и публикации в ЕФРСБ оплачиваются отдельно и при удовлетворении требований подлежат взысканию с конкурсной массы должника."
        ctaTitle="Рассчитаем стоимость защиты взыскателя"
        ctaSubtitle="Оставьте заявку — куратор проведет предварительный анализ карточки дела и подготовит расчет."
        ctaButtonText="Рассчитать стоимость"
        ctaButtonLink="#form"
      />

      {/* ═══ БЛОК 9: FAQ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы кредиторов"
        title={<><span>Вопросы и ответы</span> <br /><span>о представлении кредитора</span></>}
        subtitle="О собраниях кредиторов, правах голоса, контроле управляющего и возврате средств"
        ctaText="Задать свой вопрос"
        ctaLink="#form"
        faqs={faqItems}
      />

      {/* ═══ БЛОК 10: СМЕЖНЫЕ НАПРАВЛЕНИЯ ПРАКТИКИ ═══ */}
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
              Смежные направления практики
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '24px'
            }}>
              <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 3.5vw, 34px)', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.25, flex: '1 1 480px', minWidth: '280px' }}>
                <span style={{ display: 'inline-block' }}>Связанные процедуры</span> <br /><span style={{ display: 'inline-block' }}>в банкротном праве</span>
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
                Комплексная юридическая поддержка кредиторов и взыскателей в арбитражных судах РФ.
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

      {/* ═══ БЛОК 11: ФИНАЛЬНАЯ ФОРМА (#form) ═══ */}
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
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Проверьте требование</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>до следующего события</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Сообщите номер дела или ИНН должника, статус требования и текущую стадию. Юрист проверит доступные процессуальные действия и согласует формат работы.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация юриста</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните нам: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (4742) 20-15-25</a>
                </p>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '6px' }}>
                  Липецк, ул. Советская, д. 35, офис 213 (приём по записи)
                </div>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Конфиденциальность:</strong>
                Не указывайте в форме конфиденциальные финансовые сведения и коммерческую тайну. Защищённый канал передачи документов согласуем после контакта.
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Заявка на оценку позиции"
                subtitle="Оставьте контакты и номер дела — юрист свяжется с вами в течение 15 минут в рабочее время."
                subtext="Если вы оставите заявку вечером или в выходной день, мы свяжемся с вами в ближайший рабочий день."
                buttonText="Проверить позицию кредитора"
                commentPlaceholder="Кратко укажите суть долга, номер дела или наименование должника…"
                hiddenFields={[
                  { name: 'source_page', value: '/biznesu/bankrotstvo-biznesa/predstavlenie-interesov-kreditora/' },
                  { name: 'service', value: 'Представление интересов кредитора в банкротстве' }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 12: FOOTER ═══ */}
      <Footer />
    </>
  );
}
