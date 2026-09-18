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

export default function OsparivanieSdelokBankrotstvoClient() {
  const situations = [
    {
      tag: 'Кредитор / Заявитель',
      title: 'Вывод ликвидного имущества и техники перед банкротством должника',
      desc: 'Должник распродал активы аффилированным лицам по заниженной цене. Докажем недействительность договоров и вернём имущество в конкурсную массу.'
    },
    {
      tag: 'Покупатель / Ответчик',
      title: 'Управляющий требует признать сделку недействительной и изъять актив',
      desc: 'Защитим добросовестного покупателя автомобиля, техники или недвижимости. Докажем реальность оплаты, рыночность цены и отсутствие осведомлённости о кризисе.'
    },
    {
      tag: 'Сделка с предпочтением',
      title: 'Оспаривание погашения долга или зачёта по статье 61.3 Закона о банкротстве',
      desc: 'Платеж в пользу кредитора объявляют предпочтительным. Докажем совершение операции в рамках обычной хозяйственной деятельности компании.'
    },
    {
      tag: 'Взаимозачёты и цессия',
      title: 'Отмена соглашений о зачёте требований и договоров уступки права',
      desc: 'Обоснуем правомерность прекращения обязательств зачётом или сальдированием взаимных предоставлений по строительным и поставочным контрактам.'
    },
    {
      tag: 'Связь с субсидиаркой',
      title: 'Сделка одновременно вменяется директору как основание субсидиарной ответственности',
      desc: 'Выстроим синхронизированную защиту: докажем разумность экономической цели сделки и отсутствие вреда кредиторам, сняв риски с руководителя.'
    },
    {
      tag: 'Превентивный аудит',
      title: 'Правовая проверка договора перед покупкой имущества у компании в кризисе',
      desc: 'Проведём комплексный аудит финансового состояния продавца, картотеки арбитражных дел и согласуем безопасную структуру расчётов.'
    }
  ];

  const urgentCards = [
    {
      title: 'Периоды подозрительности: 1 месяц, 1 год, 3 года',
      desc: 'Сделки с предпочтением оспариваются за 1–6 месяцев до возбуждения дела (ст. 61.3), неравноценные сделки — за 1 год, а сделки с целью причинения вреда кредиторам — за 3 года (ст. 61.2).'
    },
    {
      title: 'Риск обеспечительного ареста спорного имущества',
      desc: 'Управляющий одновременно с подачей заявления в суд заявляет ходатайство о наложении ареста и запрета регистрационных действий на недвижимость или технику ответчика.'
    },
    {
      title: 'Категорический запрет на фальсификацию первички',
      desc: 'Попытки изготовить товарные накладные, акты или договоры задним числом выявляются судебной экспертизой давности документов и ведут к безусловному признанию сделки ничтожной.'
    }
  ];

  const analysisContours = [
    {
      title: 'Полномочия заявителя и стадия',
      what: 'Проверяем право заявителя (управляющий или кредитор с долей более 10% реестра) на оспаривание сделки.',
      why: 'Пресечь неправомерные иски неуполномоченных лиц на ранней процессуальной стадии.'
    },
    {
      title: 'Реальность встречного исполнения',
      what: 'Устанавливаем фактическое перемещение товара, реальность работ, наличие складских мощностей и транспорта.',
      why: 'Опровергнуть подозрения суда в мнимости, притворности или бестоварности сделки.'
    },
    {
      title: 'Специальные банкротные нормы',
      what: 'Квалифицируем основания по ст. 61.2 (неравноценность, причинение вреда) и ст. 61.3 (предпочтение кредитору).',
      why: 'Сформировать точную доказательственную базу под презумпции конкретной статьи закона.'
    },
    {
      title: 'Общегражданские основания ГК РФ',
      what: 'Анализируем ст. 10 и 168 ГК РФ (злоупотребление правом, мнимые и притворные сделки) за пределами 3-летнего срока.',
      why: 'Защитить интересы конкурсной массы при выводе активов за пределами банкротных сроков.'
    },
    {
      title: 'Рыночность цены и экспертиза',
      what: 'Сопоставляем цену сделки со среднерыночными показателями региона на момент подписания договора.',
      why: 'Подтвердить справедливость условий контракта или оспорить занижение стоимости активов.'
    },
    {
      title: 'Последствия недействительности',
      what: 'Определяем режим реституции: возврат актива в натуре, взыскание стоимости или восстановление долга в реестре.',
      why: 'Добиться максимального финансового эффекта для доверителя при исполнении решения суда.'
    }
  ];

  const processSteps: ProcessStep[] = [
    {
      num: '01',
      title: 'Анализ сделки и периода подозрительности',
      desc: 'Изучаем договор, платежи, выписки по счетам и сопоставляем дату сделки с датой возбуждения дела о банкротстве.'
    },
    {
      num: '02',
      title: 'Сбор доказательственной базы',
      desc: 'Восстанавливаем первичную цепочку поставки: спецификации, путевые листы, доверенности, выписки банка и переписку.'
    },
    {
      num: '03',
      title: 'Оценка рыночности и добросовестности',
      desc: 'Проводим предварительное исследование стоимости объекта и подтверждаем стандарт должной осмотрительности покупателя.'
    },
    {
      num: '04',
      title: 'Подготовка заявления или отзыва',
      desc: 'Составляем мотивированное заявление в арбитражный суд либо развёрнутый отзыв со ссылками на судебную практику ВС РФ.'
    },
    {
      num: '05',
      title: 'Судебное представительство',
      desc: 'Защищаем позицию в заседаниях арбитражного суда, заявляем ходатайства о назначении судебной экспертизы и допросе свидетелей.'
    },
    {
      num: '06',
      title: 'Применение последствий решения',
      desc: 'Контролируем фактический возврат имущества в конкурсную массу либо защищаем сохранность актива добросовестного приобретателя.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Экспресс-аудит сделки',
      subtitle: 'Оценка рисков оспаривания',
      price: 'от 10 000 ₽',
      popular: false,
      features: [
        { name: 'анализ условий договора и платежей', value: 'Да' },
        { name: 'проверка периода подозрительности (ст. 61.2, 61.3)', value: 'Да' },
        { name: 'оценка рисков обеспечительных мер', value: 'Да' },
        { name: 'письменное заключение с рекомендациями', value: 'Да' }
      ],
      buttonText: 'Заказать аудит',
      buttonHref: '#form'
    },
    {
      title: 'Подготовка заявления или отзыва',
      subtitle: 'Формирование правовой позиции',
      price: 'от 30 000 ₽',
      popular: true,
      badgeText: 'Востребовано',
      features: [
        { name: 'подготовка мотивированного иска или отзыва', value: 'Да' },
        { name: 'формирование доказательственной базы первички', value: 'Да' },
        { name: 'подбор актуальной практики Верховного Суда РФ', value: 'Да' },
        { name: 'подача документов через «Мой Арбитр»', value: 'Да' }
      ],
      buttonText: 'Подготовить позицию',
      buttonHref: '#form'
    },
    {
      title: 'Ведение спора под ключ',
      subtitle: 'Полное судебное представительство',
      price: 'от 60 000 ₽',
      popular: false,
      features: [
        { name: 'все действия тарифа «Подготовка позиции»', value: 'Да' },
        { name: 'участие во всех судебных заседаниях суда', value: 'Да' },
        { name: 'сопровождение судебной оценочной экспертизы', value: 'Да' },
        { name: 'противодействие необоснованным арестам', value: 'Да' }
      ],
      buttonText: 'Передать спор юристу',
      buttonHref: '#form'
    },
    {
      title: 'Апелляционное обжалование',
      subtitle: 'Защита в вышестоящей инстанции',
      price: 'от 35 000 ₽',
      popular: false,
      features: [
        { name: 'детальный анализ вынесенного определения суда', value: 'Да' },
        { name: 'выявление судебных ошибок при оценке доказательств', value: 'Да' },
        { name: 'составление и подача мотивированной жалобы', value: 'Да' },
        { name: 'представительство в суде апелляционной инстанции', value: 'Да' }
      ],
      buttonText: 'Обжаловать акт суда',
      buttonHref: '#form'
    }
  ];

  const casesData: CaseData[] = [
    {
      category: 'Защита покупателя',
      title: 'Защита добросовестного покупателя коммерческой недвижимости от отмены сделки',
      problem: 'Конкурсный управляющий потребовал признать недействительным договор купли-продажи склада стоимостью 28 млн ₽, ссылаясь на занижение цены на 30%.',
      action: 'Собрали доказательства реального технического состояния объекта на момент покупки, провели судебную оценочную экспертизу и подтвердили добросовестность приобретателя.',
      result: 'Арбитражный суд Липецкой области отказал управляющему в удовлетворении требований. Недвижимость осталась в собственности доверителя.'
    },
    {
      category: 'Возврат активов',
      title: 'Оспаривание вывода спецтехники должника в интересах конкурсного кредитора',
      problem: 'За 4 месяца до банкротства строительная компания реализовала 12 единиц техники аффилированной фирме без реальной оплаты по заниженной стоимости.',
      action: 'Доказали фактическую аффилированность сторон через общие IP-адреса и учредителей, установили отсутствие реального движения денег и взыскали технику.',
      result: 'Сделки признаны недействительными, спецтехника возвращена в конкурсную массу, доля погашения долгов перед доверителем выросла до 64%.'
    },
    {
      category: 'Сделка с предпочтением',
      title: 'Защита платежей поставщика на 9,5 млн ₽ от возврата в конкурсную массу',
      problem: 'Управляющий подал иск о признании платежей поставщику за 2 месяца до банкротства сделкой с предпочтением по статье 61.3 Закона о банкротстве.',
      action: 'Доказали совершение платежей в рамках обычной хозяйственной деятельности: аналогичные оплаты проводились сторонами на протяжении 4 лет без нарушений.',
      result: 'Суд согласился с позицией защиты и полностью отказал в признании платежей недействительными. Доверитель сохранил полученные 9,5 млн ₽.'
    }
  ];

  const faqItems: FAQItem[] = [
    {
      q: 'Какие сделки должника подлежат оспариванию при банкротстве?',
      a: 'Оспариваются сделки по специальным банкротным основаниям (ст. 61.2 и 61.3 Закона о банкротстве): подозрительные сделки с неравноценным встречным исполнением, сделки, направленные на причинение вреда имущественным правам кредиторов, и сделки с оказанием предпочтения одному из кредиторов перед другими.'
    },
    {
      q: 'За какой период до банкротства могут проверить и отменить сделку?',
      a: 'Глубина проверки зависит от основания: сделки с предпочтением проверяются за 1–6 месяцев; подозрительные неравноценные сделки — за 1 год; сделки, совершенные с целью причинения вреда кредиторам — за 3 года до принятия судом заявления о признании должника банкротом.'
    },
    {
      q: 'Кто вправе подать заявление о признании сделки недействительной?',
      a: 'Правом на подачу заявления обладает арбитражный управляющий по собственной инициативе либо по решению собрания кредиторов, а также конкурсные кредиторы или уполномоченный орган, размер требований которых составляет более 10% от общей суммы реестра.'
    },
    {
      q: 'Как добросовестному покупателю защитить купленное имущество?',
      a: 'Необходимо доказать совокупность обстоятельств: реальность оплаты (выписки банка), рыночность стоимости на момент покупки (отчёт об оценке или экспертиза), фактическое владение и использование имущества, а также отсутствие осведомлённости о финансовых трудностях продавца.'
    },
    {
      q: 'Что означает «сделка, совершенная в процессе обычной хозяйственной деятельности»?',
      a: 'Если сделка с предпочтением (например, оплата за поставленный товар) не отличалась по срокам, суммам и условиям от ранее совершавшихся сторонами сделок, и цена не превышала 1% балансовой стоимости активов должника, она не подлежит признанию недействительной по п. 2 ст. 61.4.'
    },
    {
      q: 'Что происходит с имуществом, если суд признал сделку недействительной?',
      a: 'Применяются последствия недействительности сделки: покупатель обязан вернуть имущество в конкурсную массу должника в натуре. Если имущество перепродано, взыскивается его действительная стоимость. При этом требование покупателя о возврате денег включается в третью очередь реестра.'
    },
    {
      q: 'Можно ли оспорить взаимозачёт требований?',
      a: 'Зачёт встречных однородных требований в период неплатёжеспособности может быть оспорен как сделка с предпочтением. Однако если спорные операции представляют собой сальдирование взаимных обязательств в рамках единого договора, суды признают такие действия правомерными.'
    },
    {
      q: 'Влечет ли отмена сделки автоматическую субсидиарную ответственность директора?',
      a: 'Не автоматически, но признание крупной сделки причинившей вред кредиторам является одним из главных доказательств вины руководителя при рассмотрении спора о субсидиарной ответственности. Защиту по обоим спорам необходимо вести согласованно.'
    },
    {
      q: 'Какую роль играет судебная экспертиза в таких спорах?',
      a: 'Судебная оценочная экспертиза является ключевым доказательством рыночности стоимости спорного объекта. Экспертиза давности документов опровергает или подтверждает дату фактического составления договоров и актов приёма-передачи.'
    },
    {
      q: 'Сколько времени занимает рассмотрение спора в арбитражном суде?',
      a: 'Рассмотрение заявления в первой инстанции с проведением судебной экспертизы занимает в среднем от 4 до 9 месяцев.'
    }
  ];

  const relatedServices = [
    {
      title: 'Банкротство компании со стороны должника',
      desc: 'Превентивный аудит хозяйственных операций и инвентаризация имущества.',
      link: '/biznesu/bankrotstvo-biznesa/bankrotstvo-kompanii-so-storony-dolzhnika/'
    },
    {
      title: 'Защита от субсидиарной ответственности',
      desc: 'Защита директора и учредителей при вменении убыточных сделок.',
      link: '/biznesu/bankrotstvo-biznesa/zashchita-ot-subsidiarnoj-otvetstvennosti/'
    },
    {
      title: 'Представление интересов кредитора',
      desc: 'Контроль за деятельностью арбитражного управляющего и пополнением массы.',
      link: '/biznesu/bankrotstvo-biznesa/predstavlenie-interesov-kreditora/'
    },
    {
      title: 'Обжалование действий арбитражного управляющего',
      desc: 'Пресечение уклонения управляющего от оспаривания сомнительных сделок должника.',
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
        '@id': 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/osparivanie-sdelok-pri-bankrotstve/#service',
        name: 'Оспаривание сделок при банкротстве в Липецке',
        serviceType: 'Судебное оспаривание и защита сделок должника в деле о банкротстве',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        url: 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/osparivanie-sdelok-pri-bankrotstve/',
        description: 'Оспаривание и судебная защита сделок должника при банкротстве: ст. 61.2 и 61.3 Закона о банкротстве, ст. 10 и 168 ГК РФ, защита добросовестных покупателей.'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/osparivanie-sdelok-pri-bankrotstve/#breadcrumb',
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
            name: 'Оспаривание сделок при банкротстве',
            item: 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/osparivanie-sdelok-pri-bankrotstve/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/osparivanie-sdelok-pri-bankrotstve/#faq',
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
            <span style={{ color: 'var(--color-text-main)' }}>Оспаривание сделок при банкротстве</span>
          </>
        }
        superTitle={
          <span style={{ whiteSpace: 'normal', display: 'inline-block', lineHeight: 1.4 }}>
            <span style={{ display: 'inline-block' }}>БАНКРОТСТВО КОМПАНИИ • СДЕЛКИ ДОЛЖНИКА •</span> <br />
            <span style={{ display: 'inline-block' }}>Липецк и арбитраж</span>
          </span>
        }
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Оспаривание сделок
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              при банкротстве
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Возврат активов в конкурсную массу по инициативе кредиторов или защита добросовестных приобретателей от отмены договоров по ст. 61.2, 61.3 Закона о банкротстве и ст. 10, 168 ГК РФ.
          </span>
        }
        primaryCtaText="Оценить риски по сделке"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_osparivanie_sdelok"
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
                <strong>Оспаривание и защита</strong> договоров купли-продажи, залога, зачётов и платежей
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Судебная экспертиза</strong> рыночной стоимости имущества и оборудования
              </span>
            )
          }
        ]}
      />

      {/* ═══ БЛОК 2: ТИПОВЫЕ СИТУАЦИИ (#situations) ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'inline-block' }}>В каких ситуациях требуются</span> <br />
              <span style={{ display: 'inline-block' }}>споры о сделках должника</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Обособленный спор может затрагивать интересы как самого банкрота и кредиторов, так и добросовестных покупателей имущества и контрагентов.
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
                  <span>Разобрать ситуацию</span>
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

      {/* ═══ БЛОК 3: СРОЧНОСТЬ (#urgent) ═══ */}
      <section className="section" id="urgent" style={{ background: 'var(--color-deep-blue)', color: '#FFFFFF', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '60px', height: '2px', background: 'var(--color-gold)' }}></div>
              <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Срочность защиты
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 3.8vw, 38px)', color: '#FFFFFF', margin: '0 0 16px 0', lineHeight: 1.25 }}>
              Что необходимо предпринять сразу при угрозе оспаривания сделки
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.82)', margin: 0, lineHeight: 1.65 }}>
              Первые процессуальные шаги определяют исход спора. Сохранение доказательств реальности сделки — фундамент судебной позиции:
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '40px' }}>
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
            padding: '16px 24px',
            marginBottom: '32px',
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '14px',
            lineHeight: 1.6
          }}>
            <span style={{ display: 'inline-block' }}>
              <strong style={{ color: '#FFFFFF' }}>Важно:</strong> Банкротство продавца не означает автоматической недействительности ранее совершенных договоров.
            </span> <br className="hidden-mobile" />
            <span style={{ display: 'inline-block' }}>
              Суд обязан исследовать добросовестность контрагента, рыночность цены и встречное исполнение. Докажем законность сделки в суде.
            </span>
          </div>

          <style dangerouslySetInnerHTML={{__html: `
            .urgent-card {
              transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
            }
            .urgent-card:hover {
              transform: translateY(-6px);
              box-shadow: 0 18px 36px rgba(0,0,0,0.28) !important;
            }
            .btn-urgent-outline {
              border: 1px solid rgba(255,255,255,0.8) !important;
              color: #FFFFFF !important;
              background: transparent !important;
              text-decoration: none !important;
              font-weight: 600 !important;
              transition: all 0.3s ease !important;
              border-radius: 0 !important;
              display: inline-block !important;
            }
            .btn-urgent-outline:hover {
              background: rgba(255,255,255,0.18) !important;
              color: #FFFFFF !important;
              border-color: #FFFFFF !important;
            }
            .btn-urgent-call {
              display: inline-block !important;
              border-radius: 0 !important;
              text-decoration: none !important;
              background-color: var(--color-gold) !important;
              color: var(--color-deep-blue) !important;
              font-weight: 700 !important;
              transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
              border: 1px solid var(--color-gold) !important;
            }
            .btn-urgent-call:hover {
              background-color: #FFFFFF !important;
              color: #0B1C2A !important;
              border-color: #FFFFFF !important;
              transform: translateY(-2px);
            }
          `}} />

          {/* Зона связи */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '28px', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <a href="tel:+79103503111" style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.02em' }} data-analytics="phone_click">
              +7 (910) 350-31-11
            </a>
            <a href="tel:+79103503111" className="btn-urgent-call" style={{ padding: '14px 28px', fontSize: '15px' }} data-analytics="phone_click">
              Позвонить юристу
            </a>
            <a href="#form" className="btn btn-urgent-outline" style={{ padding: '14px 28px', fontSize: '15px' }}>
              Срочная консультация
            </a>
            <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px', marginLeft: '4px' }}>
              Консультация дежурного юриста по банкротству
            </span>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: ШЕСТЬ КОНТУРОВ АНАЛИЗА СДЕЛКИ (#check) ═══ */}
      <section className="section" id="check" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              <span style={{ display: 'inline-block' }}>Шесть контуров правового</span> <br />
              <span style={{ display: 'inline-block' }}>анализа оспоримости сделки</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Каждая сделка проверяется по строгой системе материальных и процессуальных критериев до обращения в суд.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', position: 'relative' }}>
            {analysisContours.map((item, idx) => (
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
                  <strong>Что исследуем:</strong> {item.what}
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
        title={<><span style={{ display: 'inline-block' }}>Практика оспаривания</span> <br /><span style={{ display: 'inline-block' }}>и защиты сделок должника</span></>}
        cases={casesData}
        showAllLink="/praktika/"
        showAllText="Смотреть всю практику →"
        showDemoWarning={true}
      />

      {/* ═══ БЛОК 7: ПОРЯДОК РАБОТЫ ═══ */}
      <ProcessBlock
        title="Порядок совместной работы"
        subtitle="Шесть последовательных шагов: от анализа договора до вынесения итогового судебного акта."
        alignTitle="center"
        steps={processSteps}
        ctaTitle="Нужно оценить риски по сделке?"
        ctaSubtitle="Передайте договор и документы об оплате на анализ арбитражным юристам."
        ctaButtonText="Оценить риски сделки"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 8: ТАРИФЫ И СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость оспаривания и защиты сделок"
        subtitle="Фиксированная стоимость услуг юристов в договоре. Судебные экспертизы рассчитываются индивидуально."
        tiers={pricingTiers}
        disclaimer="Стоимость судебной оценочной экспертизы, государственной пошлины и нотариальных расходов оплачивается отдельно и при победе в споре взыскивается с процессуального оппонента."
        ctaTitle="Рассчитаем стоимость ведения спора"
        ctaSubtitle="Оставьте заявку — куратор проведет предварительный аудит сделки и подготовит смету."
        ctaButtonText="Рассчитать стоимость"
        ctaButtonLink="#form"
      />

      {/* ═══ БЛОК 9: FAQ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы о сделках"
        title={<><span>Вопросы и ответы</span> <br /><span>об оспаривании сделок</span></>}
        subtitle="О периодах подозрительности, защите добросовестных покупателей и возврате активов"
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
                <span style={{ display: 'inline-block' }}>Связанные процедуры</span> <br /><span style={{ display: 'inline-block' }}>в деле о банкротстве</span>
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
                Комплексная защита интересов сторон в обособленных спорах арбитражного суда.
              </p>
            </div>
          </div>

          <style dangerouslySetInnerHTML={{ __html: `
            .related-service-card {
              border-top: 3px solid var(--color-primary) !important;
              transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
            }
            .related-service-card:hover {
              border-top: 3px solid var(--color-gold) !important;
              transform: translateY(-6px) !important;
              box-shadow: 0 16px 36px rgba(23, 50, 77, 0.12) !important;
            }
            .related-service-card:hover .card-arrow {
              color: var(--color-gold) !important;
            }
            .related-service-card:hover .card-arrow svg {
              stroke: var(--color-gold) !important;
              transform: translateX(6px) !important;
            }
          `}} />

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
                    borderRadius: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)'
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
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Оцените риски сделки</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>до подачи иска в суд</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Сообщите номер дела, вашу процессуальную роль и тип сделки (купля-продажа, зачёт, платёж или залог). Юрист конфиденциально изучит обстоятельства и свяжется с вами.
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
                Не передавайте через форму конфиденциальные финансовые сведения, договоры и банковские тайны. Защищённый канал передачи документов согласуем после контакта.
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Заявка на оценку сделки"
                subtitle="Оставьте контакты и номер дела — юрист свяжется с вами в течение 15 минут в рабочее время."
                subtext="Если вы оставите заявку вечером или в выходной день, мы свяжемся с вами в ближайший рабочий день."
                buttonText="Оценить риски по сделке"
                commentPlaceholder="Кратко укажите суть сделки, номер дела или тип отчужденного имущества…"
                hiddenFields={[
                  { name: 'source_page', value: '/biznesu/bankrotstvo-biznesa/osparivanie-sdelok-pri-bankrotstve/' },
                  { name: 'service', value: 'Оспаривание сделок при банкротстве' }
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
