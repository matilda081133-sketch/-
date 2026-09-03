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

export default function ProizvodstvennayaTravmaClient() {
  const cases: CaseData[] = [
    {
      category: 'Сокрытие травмы',
      title: (
        <span style={{ display: 'block' }}>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
            Добились расследования
          </span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
            травмы, которую работодатель
          </span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
            пытался скрыть от комиссии
          </span>
        </span>
      ),
      problem: 'Оператор повредил кисть на производственной линии. Руководитель предложил оформить происшествие как бытовое и не создавал комиссию. В медицинской карте было зафиксировано, что травма получена во время смены, а происшествие видели коллеги.',
      action: 'Собрали медицинские записи, сведения о смене, переписку и объяснения очевидцев, подготовили заявление работодателю и обращение в трудовую инспекцию, участвовали в дополнительном расследовании.',
      result: 'Несчастный случай признали связанным с производством, оформили акт установленной формы и передали материалы для назначения страхового обеспечения.'
    },
    {
      category: 'Оспаривание вины',
      title: (
        <span style={{ display: 'block' }}>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
            Оспорили вывод
          </span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
            о грубой неосторожности
          </span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
            пострадавшего работника
          </span>
        </span>
      ),
      problem: 'Работник получил тяжелую травму при работе на высоте. Комиссия указала на его грубую неосторожность, хотя обязательный инструктаж документально не подтверждался, а выданные средства защиты не соответствовали условиям работ.',
      action: 'Проверили материалы расследования, документы об обучении и выдаче средств защиты, собрали показания коллег и технические сведения, подготовили разногласия и добились дополнительной проверки выводов комиссии.',
      result: 'Вывод о грубой неосторожности исключили из материалов расследования; страховое обеспечение назначили без уменьшения по вине пострадавшего.'
    },
    {
      category: 'ДТП в поездке',
      title: (
        <span style={{ display: 'block' }}>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
            Признали производственным
          </span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
            ДТП во время служебной
          </span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
            поездки на автомобиле
          </span>
        </span>
      ),
      problem: 'Сотрудник получил травмы в ДТП по пути между объектами на автомобиле работодателя. Комиссия сочла происшествие обычным дорожным случаем и не связала его с выполнением трудовых обязанностей.',
      action: 'Собрали служебное задание, маршрутные документы, переписку с руководителем и данные о передвижении автомобиля, оспорили квалификацию происшествия и подготовили требования по выплатам и компенсации.',
      result: 'Происшествие признали несчастным случаем на производстве, оформили акт; пострадавший получил страховые выплаты, а с работодателя взыскали компенсацию морального вреда.'
    }
  ];

  const faqs = [
    {
      q: 'Что делать сразу после травмы на работе?',
      a: 'Получите медицинскую помощь и сообщите, что травма связана с работой. По возможности уведомите руководителя письменно, сохраните контакты свидетелей, фотографии, переписку и сведения о камерах. Не подписывайте объяснения с неверными обстоятельствами без замечаний и не соглашайтесь оформлять травму как бытовую.'
    },
    {
      q: 'Что делать, если работодатель не проводит расследование?',
      a: 'Потребуйте расследование письменно и сохраните подтверждение обращения. При отказе или уклонении можно обращаться в государственную инспекцию труда и, в зависимости от задачи, в суд. Государственный инспектор вправе проводить дополнительное расследование при выявлении сокрытого случая или нарушений.'
    },
    {
      q: 'Можно ли признать травму производственной, если в больницу обратились не сразу?',
      a: 'Позднее обращение само по себе не отменяет обязанность установить обстоятельства. Но доказать связь с работой может быть сложнее, поэтому важны медицинские записи, свидетели, документы о смене и задании, переписка и иные следы происшествия.'
    },
    {
      q: 'Если я нарушил инструкцию, выплаты не положены?',
      a: 'Не автоматически. Комиссия должна установить причины, нарушения и наличие именно грубой неосторожности пострадавшего. Даже при ее установлении закон ограничивает возможное уменьшение ежемесячной страховой выплаты; отказ во всем обеспечении только по этой причине недопустимо считать универсальным правилом.'
    },
    {
      q: 'Какие выплаты возможны при производственной травме?',
      a: 'В зависимости от последствий и подтверждающих документов возможны пособие по временной нетрудоспособности, единовременная и ежемесячная страховые выплаты, оплата отдельных дополнительных расходов на медицинскую, социальную и профессиональную реабилитацию. Отдельно оцениваются требования о возмещении вреда и компенсации морального вреда.'
    },
    {
      q: 'Кто платит компенсацию морального вреда?',
      a: 'Компенсация морального вреда не относится к страховым выплатам СФР. Требование обычно заявляется к лицу, ответственному за причинение вреда, с учетом обстоятельств происшествия и оснований ответственности.'
    },
    {
      q: 'Можно ли оспорить акт и выводы комиссии?',
      a: 'Да. Разногласия по расследованию, оформлению и учету несчастного случая рассматриваются трудовой инспекцией, а ее решения могут быть обжалованы. Конкретный способ защиты зависит от того, что именно оспаривается и какие документы уже оформлены.'
    },
    {
      q: 'Можно ли получить помощь дистанционно?',
      a: 'Да. Консультацию, анализ материалов, подготовку обращений и большинства процессуальных документов можно организовать дистанционно. Осмотр материалов, участие в расследовании и представительство согласуются с учетом региона и стадии дела.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Консультация и анализ',
      subtitle: 'Оценка происшествия и расследования',
      features: [
        { name: 'Правовая консультация юриста', value: '[уточняется]' },
        { name: 'Проверка документов и статуса расследования', value: '[уточняется]' },
        { name: 'Оценка доказательств, выплат и требований', value: '[уточняется]' }
      ],
      buttonText: 'Уточнить стоимость',
      buttonHref: '#form'
    },
    {
      title: 'Подготовка документов',
      subtitle: 'Обращения и правовая позиция',
      popular: true,
      badgeText: 'Востребовано',
      features: [
        { name: 'Заявления, разногласия и жалобы в ГИТ', value: '[уточняется]' },
        { name: 'Требования по выплатам и возмещению вреда', value: '[уточняется]' },
        { name: 'Исковое заявление и комплект доказательств', value: '[уточняется]' }
      ],
      buttonText: 'Уточнить стоимость',
      buttonHref: '#form'
    },
    {
      title: 'Комплексное сопровождение',
      subtitle: 'Расследование и судебная защита',
      features: [
        { name: 'Сопровождение работы с комиссией и СФР', value: '[уточняется]' },
        { name: 'Представительство в суде во всех инстанциях', value: '[уточняется]' },
        { name: 'Контроль оформления акта и выплат', value: '[уточняется]' }
      ],
      buttonText: 'Уточнить стоимость',
      buttonHref: '#form'
    }
  ];

  const steps: ProcessStep[] = [
    {
      num: '01',
      title: (
        <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
          Консультация
        </span>
      ),
      desc: 'Уточняем обстоятельства травмы, состояние расследования, медицинские последствия, действия работодателя и уже полученные документы.'
    },
    {
      num: '02',
      title: (
        <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
          Правовая оценка
        </span>
      ),
      desc: 'Определяем, подлежит ли случай расследованию, какие выводы и нарушения можно оспаривать, какие виды обеспечения и требования возможны.'
    },
    {
      num: '03',
      title: (
        <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
          План действий
        </span>
      ),
      desc: 'Фиксируем доказательства, выбираем порядок взаимодействия с работодателем, инспекцией, СФР, прокуратурой или судом и определяем последовательность требований.'
    },
    {
      num: '04',
      title: (
        <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
          Подготовка и сопровождение
        </span>
      ),
      desc: 'Готовим заявления, разногласия, жалобы, расчеты и процессуальные документы; сопровождаем расследование и получение необходимых заключений.'
    },
    {
      num: '05',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Представительство</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и фактическое исполнение</span>
        </>
      ),
      desc: 'Представляем клиента в согласованном объеме и контролируем оформление акта, назначение выплат и исполнение судебного или иного решения.'
    }
  ];

  const situations = [
    {
      tag: 'Сокрытие',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Работодатель</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>скрывает травму</span>
        </>
      ),
      desc: 'Просит указать бытовую причину, не сообщает о происшествии, не создает комиссию или предлагает лечение и деньги без официального оформления.'
    },
    {
      tag: 'Квалификация',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Случай признали</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>непроизводственным</span>
        </>
      ),
      desc: 'Комиссия отрицает связь с работой, хотя травма произошла при выполнении задания, в служебной поездке, на территории работодателя или при иных связанных с работой обстоятельствах.'
    },
    {
      tag: 'Акт Н-1',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>В акте</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>искажены обстоятельства</span>
        </>
      ),
      desc: 'Не отражены свидетели, состояние оборудования, отсутствие инструктажа или средств защиты; ответственность необоснованно перекладывают на пострадавшего.'
    },
    {
      tag: 'Нарушения',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Расследование</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>проведено с нарушениями</span>
        </>
      ),
      desc: 'Пострадавшего не знакомят с материалами, нарушен состав комиссии, не собраны важные документы или не выдан экземпляр акта.'
    },
    {
      tag: 'Сроки',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Травма</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>проявилась позднее</span>
        </>
      ),
      desc: 'За медицинской помощью обратились не сразу, последствия усилились после смены или работодатель ссылается на позднее сообщение как на основание для отказа.'
    },
    {
      tag: 'Выплаты СФР',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Не назначены</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>страховые выплаты</span>
        </>
      ),
      desc: 'Несчастный случай оформлен, но возникли проблемы с пособием, единовременной или ежемесячной выплатой, подтверждением утраты профессиональной трудоспособности.'
    },
    {
      tag: 'Лечение',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Не оплачивают</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>лечение и реабилитацию</span>
        </>
      ),
      desc: 'Нужно определить, какие дополнительные расходы могут быть оплачены в системе обязательного страхования и чем их подтвердить.'
    },
    {
      tag: 'Вред здоровью',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Требуется</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>возмещение вреда здоровью</span>
        </>
      ),
      desc: 'Травма привела к длительному лечению, утрате заработка, инвалидности или нравственным и физическим страданиям, и требуется определить требования к работодателю и другим ответственным лицам.'
    }
  ];

  const whatLawyerDoes = [
    'восстановит хронологию происшествия и определит, какие доказательства важно сохранить в первую очередь;',
    'проверит, подлежит ли событие расследованию как несчастный случай на производстве и кто должен его расследовать;',
    'поможет потребовать расследование или дополнительное расследование при сокрытии случая и нарушениях комиссии;',
    'изучит акт, материалы расследования, медицинские документы, объяснения свидетелей, записи камер, документы об инструктаже и состоянии оборудования;',
    'подготовит разногласия, заявления и обращения в государственную инспекцию труда, СФР, прокуратуру или суд — в зависимости от задачи;',
    'поможет оспорить квалификацию случая и необоснованный вывод о грубой неосторожности пострадавшего;',
    'определит возможные виды страхового обеспечения, дополнительные расходы и требования о возмещении вреда и компенсации морального вреда;',
    'представит интересы клиента в переговорах, государственных органах и суде в согласованном объеме и поможет проконтролировать исполнение результата.'
  ];

  const whatToPrepare = [
    'дату, время, место и краткую последовательность событий происшествия;',
    'сведения о свидетелях, камерах, фотографиях, переписке и документах о задании;',
    'медицинские документы с обстоятельствами травмы, больничный лист и степень тяжести;',
    'трудовой договор, должностную инструкцию, наряд, путевой лист или сменный журнал;',
    'извещения, приказ о комиссии, акт, протоколы и другие материалы расследования;',
    'документы об инструктажах, обучении, средствах защиты и состоянии оборудования;',
    'решения СФР, заключения МСЭ и индивидуальную программу реабилитации;',
    'чеки, договоры и назначения, подтверждающие расходы на лечение и реабилитацию.'
  ];

    const relatedServices = [
    {
      title: 'Незаконное увольнение',
      desc: 'Оспаривание увольнения по статье, за прогул, принуждения к уходу и восстановление на работе.',
      link: '/grazhdanam/trudovoj-yurist/nezakonnoe-uvolnenie/'
    },
    {
      title: 'Взыскание заработной платы',
      desc: 'Взыскание задолженности, расчетных выплат, отпускных и компенсации по ст. 236 ТК РФ.',
      link: '/grazhdanam/trudovoj-yurist/vzyskanie-zarabotnoj-platy/'
    },
    {
      title: 'Незаконное сокращение',
      desc: 'Защита при сокращении штата: преимущественное право, предложение вакансий и выплаты.',
      link: '/grazhdanam/trudovoj-yurist/nezakonnoe-sokrashchenie/'
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://dejure-help.ru/#organization',
        'name': 'Юридическая компания «Де-Юре»',
        'url': 'https://dejure-help.ru/',
        'logo': 'https://dejure-help.ru/images/logo.png',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Липецк',
          'addressCountry': 'RU'
        }
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Главная', 'item': 'https://dejure-help.ru/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Гражданам', 'item': 'https://dejure-help.ru/grazhdanam/' },
          { '@type': 'ListItem', 'position': 3, 'name': 'Трудовой юрист', 'item': 'https://dejure-help.ru/grazhdanam/trudovoj-yurist/' },
          { '@type': 'ListItem', 'position': 4, 'name': 'Производственная травма', 'item': 'https://dejure-help.ru/grazhdanam/trudovoj-yurist/proizvodstvennaya-travma/' }
        ]
      },
      {
        '@type': 'LegalService',
        '@id': 'https://dejure-help.ru/grazhdanam/trudovoj-yurist/proizvodstvennaya-travma/#service',
        'name': 'Помощь юриста при производственной травме в Липецке',
        'description': 'Расследование несчастного случая, проверка акта Н-1, оформление выплат СФР и возмещение вреда здоровью.',
        'url': 'https://dejure-help.ru/grazhdanam/trudovoj-yurist/proizvodstvennaya-travma/',
        'provider': { '@id': 'https://dejure-help.ru/#organization' }
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
            <Link href="/grazhdanam/trudovoj-yurist/">Трудовой юрист</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Производственная травма</span>
          </>
        }
        superTitle="Трудовые споры • расследование и выплаты"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Юрист по производственной
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              травме в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Поможем добиться расследования несчастного случая, проверить акт и выводы комиссии, оформить страховые выплаты и потребовать возмещение вреда, причиненного здоровью.
          </span>
        }
        primaryCtaText="Обсудить ситуацию"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_travma"
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
        trustItems={[
          { text: 'Официальное расследование и оформление акта Н-1' },
          { text: 'Оспаривание выводов о вине или грубой неосторожности' },
          { text: 'Оформление страховых выплат СФР и возмещения вреда' },
          { text: 'Куратор — юрист М. В. Смольянинова' }
        ]}
        imageUrl="/images/smolyaninova.jpg"
        imageName="Марина Валерьевна Смольянинова"
        imageSubtitle="Ведущий юрист ЮК «Де-Юре», куратор направления «Трудовое право»"
        imageObjectPosition="center 20%"
      />

      {/* ═══ БЛОК 2: В КАКИХ СИТУАЦИЯХ МЫ ПОМОГАЕМ ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              В каких ситуациях мы помогаем
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Окажем правовую помощь на любой стадии: от фиксации несчастного случая до взыскания компенсаций за причиненный вред здоровью.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '40px' }}>
            {situations.map((sit, i) => (
              <div
                key={i}
                className="hover-lift"
                style={{
                  padding: '36px 30px',
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Фоновый декоративный вектор как в шаблоне */}
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
                  marginBottom: '12px',
                  background: 'rgba(193, 160, 102, 0.1)',
                  padding: '4px 10px',
                  alignSelf: 'flex-start'
                }}>
                  {sit.tag}
                </div>

                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--color-deep-blue)', lineHeight: 1.4, margin: '0 0 14px 0' }}>
                  {sit.title}
                </h3>

                <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0, position: 'relative', zIndex: 1 }}>
                  {sit.desc}
                </p>
              </div>
            ))}

            {/* Карточка 9: Получить оценку ситуации (рядом с Вред здоровью / Требуется возмещение вреда здоровью) */}
            <div 
              className="card service-card hover-lift" 
              style={{ 
                height: '100%', 
                minHeight: '260px',
                padding: '36px 30px', 
                background: 'var(--color-deep-blue)', 
                border: '1px solid var(--color-deep-blue)', 
                borderTop: '3px solid var(--color-gold)', 
                boxShadow: '0 10px 30px rgba(16, 39, 59, 0.2)', 
                position: 'relative',
                overflow: 'hidden',
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                boxSizing: 'border-box'
              }}
            >
              {/* Фоновый декоративный вектор как в шаблоне */}
              <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.08, pointerEvents: 'none' }}>
                <svg width="100" height="100" viewBox="0 0 24 24" fill="#FFFFFF">
                  <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>

              <div>
                <div style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: 'var(--color-gold)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '12px',
                  background: 'rgba(193, 160, 102, 0.15)',
                  padding: '4px 10px',
                  display: 'inline-block'
                }}>
                  Другая ситуация
                </div>
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', fontWeight: 600, color: '#FFFFFF', lineHeight: 1.4, margin: '0 0 14px 0' }}>
                  Получить оценку ситуации
                </h3>
                <p style={{ fontSize: '14.5px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, margin: 0 }}>
                  Не нашли свой случай? Опишите обстоятельства происшествия — юрист оценит документы, проверит процедуру расследования и подскажет план действий.
                </p>
              </div>

              <div style={{ marginTop: '24px' }}>
                <a 
                  href="#form" 
                  className="btn btn-gold" 
                  style={{ 
                    display: 'block', 
                    width: '100%', 
                    textAlign: 'center',
                    padding: '14px 20px',
                    fontSize: '15px',
                    borderRadius: '0',
                    boxSizing: 'border-box'
                  }}
                >
                  Получить оценку ситуации
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: ЧЕМ ПОМОЖЕТ ЮРИСТ (ТОЧНЫЙ ШАБЛОН С НОМЕРАМИ) ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Чем поможет юрист</span> <br />
              <span style={{ display: 'inline-block' }}>при производственной травме</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Защитим права пострадавшего работника: от надлежащего расследования несчастного случая до полного взыскания компенсаций и страховых выплат.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            {[
              {
                num: '01',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Анализ обстоятельств</span>
                    <span style={{ display: 'block' }}>несчастного случая</span>
                  </>
                ),
                desc: 'Устанавливаем связь травмы с выполнением трудовых обязанностей и соблюдение работодателем ст. 227-231 ТК РФ.'
              },
              {
                num: '02',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Контроль расследования</span>
                    <span style={{ display: 'block' }}>и акта формы Н-1</span>
                  </>
                ),
                desc: 'Участвуем в расследовании комиссии, добиваемся составления формы Н-1 и исключения необоснованной вины работника.'
              },
              {
                num: '03',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Оспаривание сокрытия</span>
                    <span style={{ display: 'block' }}>травмы работодателем</span>
                  </>
                ),
                desc: 'Инициируем проверку ГИТ и прокуратуры при попытках работодателя оформить травму как «бытовую».'
              },
              {
                num: '04',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Расчет ущерба</span>
                    <span style={{ display: 'block' }}>и морального вреда</span>
                  </>
                ),
                desc: 'Рассчитываем утраченный заработок, расходы на лечение, реабилитацию и размер компенсации морального вреда.'
              },
              {
                num: '05',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Судебное взыскание</span>
                    <span style={{ display: 'block' }}>всех компенсаций</span>
                  </>
                ),
                desc: 'Защищаем права пострадавшего в суде Липецка против работодателя и Социального фонда России.'
              },
              {
                num: '06',
                title: (
                  <>
                    <span style={{ display: 'block' }}>Контроль страховых</span>
                    <span style={{ display: 'block' }}>выплат (125-ФЗ)</span>
                  </>
                ),
                desc: 'Сопровождаем получение единовременных и ежемесячных страховых выплат по закону № 125-ФЗ.'
              }
            ].map((item, idx) => (
              <div key={idx} className="hover-lift" style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '38px 24px 30px 24px',
                border: '1px solid var(--color-border)',
                borderTop: '4px solid var(--color-gold)',
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                borderRadius: '0',
                position: 'relative',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '20px',
                  background: 'var(--color-gold)',
                  color: '#FFFFFF',
                  fontSize: '12px',
                  fontWeight: 700,
                  padding: '2px 10px',
                  borderRadius: '2px',
                  letterSpacing: '0.05em'
                }}>
                  {item.num}
                </div>
                <div>
                  <h3 style={{ margin: '8px 0 10px 0', fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>
                    {item.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: ЧТО ПОДГОТОВИТЬ ДЛЯ КОНСУЛЬТАЦИИ (2 КАРТОЧКИ) ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, whiteSpace: 'nowrap' }}>
              Что подготовить для консультации
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Предоставьте медицинские и рабочие документы для оценки перспективы признания травмы производственной и взыскания компенсаций.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            {/* Карточка 1 */}
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
                </svg>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0 }}>
                  Медицинские и официальные документы
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Фиксируют факт повреждения здоровья, степень тяжести травмы и понесенные расходы на лечение.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Медицинские заключения и выписки</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Справка формы 315/у о характере и тяжести повреждений, выписные эпикризы.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Листки нетрудоспособности</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Больничные листы с кодом производственной травмы (код 02 или 04).</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Акт расследования несчастного случая</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Акт по форме Н-1 либо протоколы заседаний комиссии работодателя.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Чеки и квитанции на лечение</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Платежные документы на покупку лекарств, платные операции и реабилитацию.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Карточка 2 */}
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
                  <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0 }}>
                  Доказательства производственного характера
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Подтверждают, что несчастный случай произошел во время работы по заданию работодателя.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Трудовой договор и сменные листы</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Договор, наряды-допуски, сменные задания и журналы инструктажей по ТБ.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Контакты и показания свидетелей</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Данные коллег и очевидцев, присутствовавших при происшествии на производстве.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Фото и видеозаписи с места</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Записи камер видеонаблюдения, фото неисправного оборудования и места травмы.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Переписка с руководством</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Сообщения и звонки руководству сразу после получения повреждения здоровья.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Важно: полупрозрачная карточка */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.65)',
            backdropFilter: 'blur(6px)',
            padding: '22px 28px',
            border: '1px solid rgba(23, 50, 77, 0.08)',
            borderLeft: '4px solid var(--color-gold)',
            fontSize: '14px',
            color: 'var(--color-deep-blue)',
            lineHeight: 1.6,
            marginBottom: '32px'
          }}>
            <strong style={{ color: 'var(--color-primary)' }}>Важно:</strong> Не соглашайтесь оформлять травму как «бытовую» под обещания работодателя оплатить лечение — это лишает вас установленных законом пожизненных страховых гарантий и выплат Социального фонда РФ.
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ display: 'inline-block', padding: '14px 32px' }}>
              Оценить основания и риски
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: СПЕЦИАЛИСТ ПО ДЕЛУ ═══ */}
            {/* ═══ БЛОК: СПЕЦИАЛИСТ ПО ДЕЛУ (ШАБЛОННЫЙ) ═══ */}
      <SpecialistBlock
        title="Вашим делом займется Марина Валерьевна Смольянинова"
        name="Марина Валерьевна Смольянинова"
        position={<>Ведущий юрист ЮК «Де-Юре»,<br />куратор направления «Трудовое право»</>}
        imageUrl="/images/smolyaninova.jpg"
        imagePosition="center 20%"
        profileHref="/specialisty/smolyaninova-marina-valerevna/"
        profileText="Подробнее о Марине Валерьевне Смольяниновой →"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Более пяти лет юридической практики и судебного представительства по защите прав граждан.
          </span>,
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>
                Специализируется на защите прав работников при несчастных случаях на производстве, оформлении акта Н-1 и взыскании страховых выплат и морального вреда.
              </span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>
                Анализирует кадровые документы и доказательства, готовит мотивированную правовую позицию и рассчитывает положенные выплаты.
              </span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>
                Представляет интересы доверителей в судах Липецка и Липецкой области, а также ведет дела дистанционно по всей России.
              </span>
            </li>
          </ul>
        ]}
        buttonText="Задать вопрос Марине Валерьевне"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 6: ПРИМЕРЫ ДЕЛ ═══ */}
      <CasesBlock
        title={
          <>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Примеры дел по
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              производственным травмам
            </span>
          </>
        }
        showAllLink="/praktika/"
        showAllText="Смотреть все дела"
        showDemoWarning={true}
        cases={cases}
      />

      {/* ═══ БЛОК 7: КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock
        title="Как проходит работа"
        subtitle="Начать работу можно в офисе, по телефону или видеосвязи. Документы можно передать лично либо направить в электронном виде."
        alignTitle="center"
        steps={steps}
        ctaTitle="Обсудите ситуацию с травмой"
        ctaSubtitle="Опишите обстоятельства происшествия — юрист оценит перспективы официального расследования."
        ctaButtonText="Обсудить ситуацию"
        ctaButtonHref="#form"
        footerNote="Для первичного разбора понадобятся медицинские справки, сведения о свидетелях или материалы комиссии (при наличии)."
      />

      {/* ═══ БЛОК 8: СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость юридической помощи"
        subtitle="Стоимость зависит от стадии расследования, объема материалов, медицинских последствий, числа органов и требований, необходимости экспертиз и судебного спора. Состав работы и цена согласовываются до заключения договора."
        tiers={pricingTiers}
        disclaimer={
          <>
            <span style={{ display: 'block' }}>
              Стоимость определяется после уточнения обстоятельств дела и изучения имеющихся документов.
            </span>
            <span style={{ display: 'block' }}>
              Состав услуг, цена и порядок оплаты фиксируются в договоре до начала работы.
            </span>
          </>
        }
      />

            {/* ═══ БЛОК: СВЯЗАННЫЕ УСЛУГИ (ШАБЛОН АВТОЮРИСТА) ═══ */}
      <section className="section bg-cream" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                Другие трудовые споры
              </span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Смежные направления помощи при нарушении трудовых прав,</span> <br className="hidden-mobile" />
              <span style={{ display: 'inline-block' }}>спорах об увольнении и взыскании выплат.</span>
            </p>
          </div>

          <style dangerouslySetInnerHTML={{ __html: `
            .related-service-card {
              border-top: 3px solid var(--color-primary) !important;
            }
            .related-service-card:hover {
              border-top: 3px solid var(--color-primary) !important;
            }
            .related-service-card:hover .card-arrow {
              color: var(--color-gold) !important;
            }
            .related-service-card:hover .card-arrow svg {
              stroke: var(--color-gold) !important;
            }
            .all-services-link:hover {
              color: var(--color-gold) !important;
            }
          `}} />
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 380px))', gap: '20px' }}>
            {relatedServices.map((srv, i) => (
              <Link key={i} href={srv.link} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                <div 
                  className="card related-service-card" 
                  style={{ 
                    height: '100%', 
                    minHeight: '160px',
                    padding: '28px 22px', 
                    background: 'var(--color-white)', 
                    border: '1px solid var(--color-border)', 
                    borderTop: '3px solid var(--color-primary)',
                    borderRadius: '0',
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'space-between',
                    transition: 'all 0.3s',
                    position: 'relative'
                  }}
                >
                  <div>
                    <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                      {srv.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      {srv.desc}
                    </p>
                  </div>
                  <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, transition: 'transform 0.3s' }}>
                    Подробнее 
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: '36px', textAlign: 'center' }}>
            <Link 
              href="/grazhdanam/trudovoj-yurist/" 
              className="all-services-link"
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px', 
                color: 'var(--color-primary)', 
                fontSize: '15px', 
                fontWeight: 600, 
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}
            >
              Все услуги трудового юриста в Липецке
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 10: FAQ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы"
        title={<><span>Ответы на</span> <br /><span>частые вопросы</span></>}
        subtitle="О расследовании травм и выплатах"
        ctaText="Задать свой вопрос"
        ctaLink="#form"
        faqs={faqs}
      />

      {/* ═══ БЛОК 11: ФОРМА ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px', padding: '80px 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>Связаться с нами</span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                Обсудите производственную травму с Мариной Валерьевной Смольяниновой
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '28px', textWrap: 'balance' }}>
                Кратко опишите, когда и при каких обстоятельствах произошла травма и проводит ли работодатель расследование. Обращение будет передано Марине Валерьевне Смольяниновой. Она уточнит обстоятельства, имеющиеся документы и согласует с Вами консультацию.
              </p>
              <a href="tel:+79103503111" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '24px', fontWeight: 'bold', color: 'var(--color-deep-blue)', textDecoration: 'none', marginBottom: '16px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.47 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 5.55 5.55l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +7 (910) 350-31-11
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-secondary)', fontSize: '14px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
                <span>Перезвоним в течение 15 минут в рабочее время</span>
              </div>
            </div>
            <div>
              <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}>
                <ContactsForm buttonText="Получить консультацию" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
