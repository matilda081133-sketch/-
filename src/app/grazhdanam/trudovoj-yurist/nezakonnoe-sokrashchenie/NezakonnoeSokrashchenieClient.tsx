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

export default function NezakonnoeSokrashchenieClient() {
  const cases: CaseData[] = [
    {
      category: 'Формальное сокращение',
      title: (
        <span style={{ display: 'block' }}>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
            Восстановили работника
          </span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
            после фиктивного сокращения
          </span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
            должности на предприятии
          </span>
        </span>
      ),
      problem: 'Специалиста предупредили о сокращении, а после увольнения его обязанности распределили между новым сотрудником и работником с почти идентичной должностью. В открытом доступе сохранилось объявление о поиске специалиста с теми же функциями.',
      action: 'Сопоставили должностные инструкции и вакансии, запросили штатные расписания до и после изменений, собрали переписку о передаче функций и заявили требования о восстановлении и связанных выплатах.',
      result: 'Суд признал увольнение незаконным, восстановил клиента в должности, взыскал средний заработок за время вынужденного прогула и компенсацию морального вреда.'
    },
    {
      category: 'Непредложенные вакансии',
      title: (
        <span style={{ display: 'block' }}>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
            Оспорили сокращение
          </span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
            из-за сокрытия свободных
          </span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
            подходящих вакансий
          </span>
        </span>
      ),
      problem: 'Работнику предложили одну нижестоящую должность, от которой он отказался. До увольнения в другом подразделении оставалась вакансия, соответствующая его квалификации, но в перечень ее не включили.',
      action: 'Подтвердили наличие вакансии приказами и кадровыми документами, сопоставили квалификационные требования с опытом клиента, подготовили иск и ходатайства об истребовании сведений у работодателя.',
      result: 'Суд признал увольнение незаконным, восстановил работника и взыскал средний заработок за период вынужденного прогула.'
    },
    {
      category: 'Выплаты при сокращении',
      title: (
        <span style={{ display: 'block' }}>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
            Добились выплаты
          </span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
            выходного пособия и среднего
          </span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
            заработка после сокращения
          </span>
        </span>
      ),
      problem: 'После сокращения работодатель выплатил только зарплату и компенсацию за отпуск. Выходное пособие не перечислил, а позднее отказал в выплате за период трудоустройства, сославшись на отсутствие денег.',
      action: 'Проверили дату увольнения и обращения работника, рассчитали задолженность и компенсацию за задержку, направили требование и подготовили иск с подтверждающими документами.',
      result: 'С работодателя взыскали выходное пособие, средний заработок за соответствующий период трудоустройства, компенсацию за задержку и компенсацию морального вреда.'
    }
  ];

  const faqs = [
    {
      q: 'За сколько должны предупредить о сокращении?',
      a: 'По общему правилу работника персонально и под подпись предупреждают не менее чем за два месяца. Для отдельных категорий и ситуаций действуют специальные правила. Досрочное увольнение возможно с письменного согласия работника и дополнительной компенсацией за оставшееся время предупреждения.'
    },
    {
      q: 'Какие вакансии обязан предложить работодатель?',
      a: 'Работодатель должен предлагать имеющуюся подходящую работу с учетом квалификации и состояния здоровья, а при ее отсутствии — нижестоящую или нижеоплачиваемую работу, которую сотрудник может выполнять. Территория поиска и дополнительные обязанности могут зависеть от договора и коллективных правил. Конкретный перечень проверяют по документам и фактическим вакансиям.'
    },
    {
      q: 'Кого должны оставить при сокращении одинаковых должностей?',
      a: 'Сначала сравнивают производительность труда и квалификацию. При равных показателях учитываются предусмотренные законом категории с преимущественным правом. Для вывода нужны должностные обязанности, образование, опыт, результаты работы и состав сравниваемых работников.'
    },
    {
      q: 'Кого нельзя уволить по сокращению?',
      a: 'Трудовое законодательство запрещает или ограничивает увольнение отдельных категорий работников по инициативе работодателя, включая ряд ситуаций, связанных с беременностью и семейными обязанностями. Гарантия зависит от конкретных обстоятельств, поэтому статус нужно подтвердить документами.'
    },
    {
      q: 'Какие выплаты положены при сокращении?',
      a: 'В общем случае в день увольнения выплачиваются окончательный расчет и выходное пособие в размере среднего месячного заработка. При соблюдении установленных условий могут полагаться выплаты за последующие периоды трудоустройства. Для сезонных работников, краткосрочных договоров, работодателей-физлиц и северных территорий действуют особенности.'
    },
    {
      q: 'В какой срок можно оспорить увольнение по сокращению?',
      a: 'По требованию о восстановлении на работе обычно действует месячный срок со дня вручения копии приказа, выдачи трудовой книжки либо предоставления сведений о трудовой деятельности. Начало срока определяют по документам конкретного дела; при уважительных причинах суд может решить вопрос о его восстановлении.'
    },
    {
      q: 'Нужно ли сначала обращаться в трудовую инспекцию?',
      a: 'Не всегда. Жалоба может помочь зафиксировать нарушения, но спор о восстановлении разрешает суд. Не следует рассчитывать, что обращение в инспекцию автоматически остановит срок обращения в суд.'
    },
    {
      q: 'Можно ли получить помощь дистанционно?',
      a: 'Да. Консультацию, анализ документов и подготовку большинства процессуальных документов можно организовать дистанционно. Формат представительства зависит от места и стадии рассмотрения дела.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Консультация и анализ',
      subtitle: 'Оценка сокращения и вакансий',
      features: [
        { name: 'Правовая консультация юриста', value: '[уточняется]' },
        { name: 'Проверка уведомления, вакансий и срока', value: '[уточняется]' },
        { name: 'Оценка гарантий, требований и доказательств', value: '[уточняется]' }
      ],
      buttonText: 'Уточнить стоимость',
      buttonHref: '#form'
    },
    {
      title: 'Подготовка документов',
      subtitle: 'Досудебная и процессуальная работа',
      popular: true,
      badgeText: 'Востребовано',
      features: [
        { name: 'Подготовка требований и обращений', value: '[уточняется]' },
        { name: 'Исковое заявление и расчет выплат', value: '[уточняется]' },
        { name: 'Формирование доказательной базы', value: '[уточняется]' }
      ],
      buttonText: 'Уточнить стоимость',
      buttonHref: '#form'
    },
    {
      title: 'Судебная защита',
      subtitle: 'Ведение дела по сокращению в суде',
      features: [
        { name: 'Подготовка позиции и ходатайств', value: '[уточняется]' },
        { name: 'Представительство в суде во всех инстанциях', value: '[уточняется]' },
        { name: 'Сопровождение исполнения судебного акта', value: '[уточняется]' }
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
      desc: 'Уточняем даты уведомления и увольнения, какие вакансии предлагались, кто остался на сопоставимых должностях и какие выплаты произведены.'
    },
    {
      num: '02',
      title: (
        <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
          Правовая оценка
        </span>
      ),
      desc: 'Проверяем реальность сокращения, процедуру, преимущественное право, специальные гарантии и судебный срок.'
    },
    {
      num: '03',
      title: (
        <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
          План защиты
        </span>
      ),
      desc: 'Определяем, что запросить и сохранить, есть ли основания требовать вакансию, вести переговоры, обращаться в государственные органы или подавать иск.'
    },
    {
      num: '04',
      title: (
        <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
          Подготовка дела
        </span>
      ),
      desc: 'Формируем требования, расчет, иск и доказательства; при необходимости просим суд истребовать штатные и кадровые документы.'
    },
    {
      num: '05',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Представительство</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и фактическое исполнение</span>
        </>
      ),
      desc: 'Представляем клиента в согласованном объеме и сопровождаем восстановление, исправление кадровых сведений и выплаты после решения.'
    }
  ];

  const situations = [
    {
      tag: 'Фиктивность',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Сокращение</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>выглядит формальным</span>
        </>
      ),
      desc: 'Должность убрали из штатного расписания, но прежние обязанности сохранились, переданы другому работнику или появилась аналогичная позиция.'
    },
    {
      tag: 'Вакансии',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Не предложили</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>все подходящие вакансии</span>
        </>
      ),
      desc: 'Работодатель не предлагал свободные подходящие должности, сделал это однократно либо не раскрывал вакансии, появившиеся до увольнения.'
    },
    {
      tag: 'Преимущество',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Не учли</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>преимущественное право оставления</span>
        </>
      ),
      desc: 'При сокращении нескольких работников не сравнили квалификацию и производительность либо проигнорировали предусмотренные законом преимущества.'
    },
    {
      tag: 'Сроки',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Нарушили</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>установленный срок уведомления</span>
        </>
      ),
      desc: 'Работника предупредили менее чем за два месяца, подменили уведомление соглашением или досрочно уволили без надлежащего согласия и компенсации.'
    },
    {
      tag: 'Гарантии',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Сокращают</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>защищенного работника</span>
        </>
      ),
      desc: 'Увольнение касается беременной женщины, родителя в защищенной законом семейной ситуации или другого работника со специальными гарантиями.'
    },
    {
      tag: 'Давление',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Предлагают</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>уволиться по собственному</span>
        </>
      ),
      desc: 'Вместо официального сокращения требуют заявление или невыгодное соглашение, чтобы не соблюдать гарантии и не выплачивать пособие.'
    },
    {
      tag: 'Пособие',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Не выплатили</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>положенные суммы</span>
        </>
      ),
      desc: 'Не перечислили выходное пособие, окончательный расчет или средний заработок за соответствующий период трудоустройства.'
    },
    {
      tag: 'Суд',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Увольнение</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>уже состоялось</span>
        </>
      ),
      desc: 'Нужно оценить срок, восстановление на работе, изменение записи, выплаты и доказательства нарушенной процедуры.'
    }
  ];

  const whatLawyerDoes = [
    'проверит реальность сокращения, уведомление, штатные документы и срок обращения в суд;',
    'проанализирует вакансии, требования к ним и соблюдение обязанности предлагать подходящую работу до увольнения;',
    'оценит преимущественное право и наличие запрета или специальных гарантий для конкретной категории работника;',
    'определит, какие документы и сведения нужно сохранить, запросить у работодателя или истребовать через суд;',
    'подготовит требования работодателю, обращение в трудовую инспекцию или прокуратуру, если это оправдано стратегией;',
    'сформулирует исковые требования: восстановление, изменение даты и формулировки, средний заработок за вынужденный прогул, выплаты при сокращении и компенсация морального вреда;',
    'представит интересы работника в переговорах и суде в согласованном объеме и поможет проконтролировать исполнение решения.'
  ];

  const whatToPrepare = [
    'трудовой договор, дополнительные соглашения, должностную инструкцию и документы об образовании или квалификации;',
    'уведомление о сокращении и все предложения вакансий с датами получения и ответами работника;',
    'приказ об увольнении, сведения о трудовой деятельности или трудовую книжку;',
    'доступные штатные расписания, приказы об изменении структуры, объявления о вакансиях и сведения о новых сотрудниках;',
    'документы о производительности, аттестациях, поощрениях, стаже и других обстоятельствах преимущественного права;',
    'документы о беременности, семейном положении, детях или иных обстоятельствах, если они дают специальные гарантии;',
    'расчетные листки, справки о доходах, платежные документы и расчет выплат при увольнении;',
    'переписку с руководителем и кадровой службой, ответы работодателя, инспекции или прокуратуры.'
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
      title: 'Производственная травма',
      desc: 'Расследование несчастного случая, акт Н-1, страховые выплаты и компенсация вреда.',
      link: '/grazhdanam/trudovoj-yurist/proizvodstvennaya-travma/'
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
          { '@type': 'ListItem', 'position': 4, 'name': 'Незаконное сокращение', 'item': 'https://dejure-help.ru/grazhdanam/trudovoj-yurist/nezakonnoe-sokrashchenie/' }
        ]
      },
      {
        '@type': 'LegalService',
        '@id': 'https://dejure-help.ru/grazhdanam/trudovoj-yurist/nezakonnoe-sokrashchenie/#service',
        'name': 'Защита при незаконном сокращении в Липецке',
        'description': 'Проверка реальности сокращения, сроков уведомления, предложенных вакансий и преимущественного права.',
        'url': 'https://dejure-help.ru/grazhdanam/trudovoj-yurist/nezakonnoe-sokrashchenie/',
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
            <span style={{ color: 'var(--color-text-main)' }}>Незаконное сокращение</span>
          </>
        }
        superTitle="Трудовые споры • гарантии и выплаты"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Юрист по незаконному
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              сокращению в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Проверим, было ли сокращение реальным, соблюдены ли сроки уведомления, правила предложения вакансий и преимущественное право. Поможем сохранить работу, оспорить увольнение и получить положенные выплаты.
          </span>
        }
        primaryCtaText="Проверить сокращение"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_sokrashchenie"
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
          { text: 'Проверка реальности сокращения штата' },
          { text: 'Анализ скрытых вакансий и преимущественного права' },
          { text: 'Взыскание выходного пособия и среднего заработка' },
          { text: 'Куратор — юрист М. В. Смольянинова' }
        ]}
        imageUrl="/images/smolyaninova.jpg"
        imageName="Марина Валерьевна Смольянинова"
        imageSubtitle="Ведущий юрист ЮК «Де-Юре», куратор направления «Трудовое право»"
        imageObjectPosition="center 20%"
      />

      {/* ═══ БЛОК 2: КОГДА НЕЛЬЗЯ ОТКЛАДЫВАТЬ (ТЕМНО-СИНИЙ БЛОК) ═══ */}
      <section style={{ background: 'var(--color-deep-blue)', padding: '64px 0 56px', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-white)', marginBottom: '12px', marginTop: 0 }}>
            <span style={{ display: 'inline-block' }}>Когда нельзя</span> <br /><span style={{ display: 'inline-block' }}>откладывать</span>
          </h2>
          <div style={{ width: '60px', height: '2px', background: 'var(--color-gold)', marginBottom: '20px' }}></div>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '16px', marginBottom: '40px', maxWidth: '640px', lineHeight: 1.6 }}>
            Если увольнение по сокращению уже состоялось, по требованию о восстановлении обычно действует месячный срок обращения в суд. До увольнения важно своевременно фиксировать предложенные вакансии, состав работников и документы работодателя.
          </p>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '40px' }}>
            <div
              className="urgent-card"
              style={{
                background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)',
                padding: '32px 28px',
                borderTop: '4px solid var(--color-gold)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px', minHeight: '48px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', marginTop: 0, lineHeight: 1.3 }}>
                  Получили уведомление
                </div>
              </div>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                Не подписывайте отказ от вакансий, не изучив перечень и условия. Сохраняйте все версии уведомлений и предложений работодателя.
              </p>
            </div>

            <div
              className="urgent-card"
              style={{
                background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)',
                padding: '32px 28px',
                borderTop: '4px solid var(--color-gold)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px', minHeight: '48px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', marginTop: 0, lineHeight: 1.3 }}>
                  Вакансии предлагают не всем
                </div>
              </div>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                Зафиксируйте, какие должности были свободны, кому их предложили и какие требования к ним установил работодатель.
              </p>
            </div>

            <div
              className="urgent-card"
              style={{
                background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)',
                padding: '32px 28px',
                borderTop: '4px solid var(--color-gold)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px', minHeight: '48px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', marginTop: 0, lineHeight: 1.3 }}>
                  Увольнение уже оформлено
                </div>
              </div>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                Сохраните приказ, уведомление, предложения вакансий и расчетные документы. Жалоба в инспекцию не должна привести к пропуску судебного срока.
              </p>
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '28px', display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <a href="tel:+79103503111" style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.02em' }}>
              +7 (910) 350-31-11
            </a>
            <a href="#form" className="btn-urgent-call" style={{ padding: '14px 28px', fontSize: '15px' }}>
              Проверить процедуру и срок
            </a>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
              Перезвоним вам в течение 15 минут в рабочее время
            </span>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: В КАКИХ СИТУАЦИЯХ МЫ ПОМОГАЕМ ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, whiteSpace: 'nowrap' }}>
              Что подготовить для консультации
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Предоставьте имеющиеся документы для проверки соблюдения порядка сокращения штата и расчета причитающихся выплат.
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
                  Кадровые документы по сокращению
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Определяют соблюдение обязательного регламента сокращения численности или штата работников.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Уведомление о сокращении должности</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Письменное извещение работодателя с датой вручения под роспись.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Предложения вакантных должностей</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Письменные списки вакансий или акты об отказе от предложенной работы.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Трудовой договор и штатное расписание</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Действующий договор, выписки из штатного расписания до и после процедуры.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Приказ об увольнении и расчетный листок</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Копия приказа по п. 2 ч. 1 ст. 81 ТК РФ и справка о выплаченных суммах пособия.</span>
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
                  Документы о преимущественном праве
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Подтверждают более высокую квалификацию или социальные гарантии оставления на работе.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Дипломы, сертификаты и аттестации</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Документы об образовании, повышении квалификации и результатах аттестаций.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Справки о составе семьи и иждивенцах</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Свидетельства о рождении детей, справки об инвалидности членов семьи.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Статус единственного кормильца</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Справки об отсутствии дохода у второго супруга или статусе родителя-одиночки.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Поощрения и трудовой стаж</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Грамоты, благодарности, сведения о непрерывном трудовом стаже в организации.</span>
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
            <strong style={{ color: 'var(--color-primary)' }}>Важно:</strong> Работодатель обязан предложить работнику <strong>все</strong> имеющиеся в данной местности вакансии, соответствующие квалификации или нижестоящие, на протяжении всего периода сокращения вплоть до дня увольнения.
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ display: 'inline-block', padding: '14px 32px' }}>
              Оценить основания и риски
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 6: СПЕЦИАЛИСТ ПО ДЕЛУ ═══ */}
            {/* ═══ БЛОК: СПЕЦИАЛИСТ ПО ДЕЛУ (ШАБЛОННЫЙ) ═══ */}
      <SpecialistBlock
        title={<><span style={{ display: 'block' }}>Вашим делом займется</span><span style={{ display: 'block' }}>Марина Валерьевна Смольянинова</span></>}
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
                Специализируется на защите работников при сокращении штата: преимущественное право (ст. 179 ТК), предложение вакансий и выплата пособий.
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
          </ul>,
          <a key="3" href="/specialisty/smolyaninova-marina-valerevna/" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }} data-analytics="specialist_profile_click">
            Подробнее о Марине Валерьевне Смольяниновой →
          </a>
        ]}
        buttonText="Задать вопрос Марине Валерьевне"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 7: ПРИМЕРЫ ДЕЛ ═══ */}
      <CasesBlock
        title="Примеры дел по незаконному сокращению"
        showAllLink="/praktika/"
        showAllText="Смотреть другие дела"
        showDemoWarning={true}
        cases={cases}
      />

      {/* ═══ БЛОК 8: КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock
        title="Как проходит работа"
        subtitle="Начать работу можно в офисе, по телефону или видеосвязи. Документы можно передать лично либо направить в электронном виде."
        alignTitle="center"
        steps={steps}
        ctaTitle="Обсудите ситуацию с сокращением"
        ctaSubtitle="Опишите обстоятельства — юрист изучит уведомление и проверит соблюдение гарантий."
        ctaButtonText="Проверить сокращение"
        ctaButtonHref="#form"
        footerNote="Для оценки ситуации понадобятся имеющиеся документы: уведомление о сокращении, предложения вакансий или расчетные листки."
      />

      {/* ═══ БЛОК 9: СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость юридической помощи"
        subtitle="Стоимость зависит от стадии сокращения, объема кадровых документов, необходимости проверять вакансии и преимущественное право, числа требований и стадии спора. Состав работы и цена согласовываются до заключения договора."
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

      {/* ═══ БЛОК 11: FAQ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы"
        title={<><span>Ответы на</span> <br /><span>частые вопросы</span></>}
        subtitle="О незаконном сокращении и гарантиях"
        ctaText="Задать свой вопрос"
        ctaLink="#form"
        faqs={faqs}
      />

      {/* ═══ БЛОК 12: ФОРМА ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px', padding: '80px 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>Связаться с нами</span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                Обсудите сокращение с Мариной Валерьевной Смольяниновой
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '28px', textWrap: 'balance' }}>
                Кратко опишите, когда Вас уведомили о сокращении, какие вакансии предложили и состоялось ли увольнение. Обращение будет передано Марине Валерьевне Смольяниновой. Она уточнит обстоятельства, срок и имеющиеся документы и согласует с Вами консультацию.
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
