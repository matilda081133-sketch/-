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

export default function VzyskanieZarabotnojPlatyClient() {
  const cases: CaseData[] = [
    {
      category: 'Задержка зарплаты',
      title: (
        <span style={{ display: 'block' }}>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
            Взыскали зарплату
          </span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
            за три месяца и компенсацию
          </span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
            за задержку выплат работнику
          </span>
        </span>
      ),
      problem: 'Инженеру производственного предприятия три месяца перечисляли только часть зарплаты. В расчетных листках отражалась полная сумма, но работодатель объяснял задержку временными финансовыми трудностями.',
      action: 'Сопоставили расчетные листки и банковские выписки, рассчитали задолженность по каждой дате выплаты и компенсацию, направили требование работодателю и подготовили иск с обновляемым расчетом.',
      result: 'Суд взыскал 286 400 рублей задолженности, компенсацию за задержку по день фактического расчета и компенсацию морального вреда. После получения исполнительного документа работодатель полностью погасил присужденную сумму.'
    },
    {
      category: 'Расчет при увольнении',
      title: (
        <span style={{ display: 'block' }}>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
            Получили окончательный
          </span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
            расчет и компенсацию отпуска
          </span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
            после увольнения сотрудника
          </span>
        </span>
      ),
      problem: 'После увольнения менеджеру выплатили только оклад за последний месяц. Компенсацию за неиспользованный отпуск и часть заработка за фактически отработанные дни работодатель не включил в расчет.',
      action: 'Запросили расчетные документы, восстановили периоды работы и отпусков, подготовили расчет долга и компенсации за задержку и направили работодателю мотивированное требование с проектом исковых требований.',
      result: 'До подачи иска работодатель перечислил 173 800 рублей основного долга и компенсацию за просрочку, а также выдал исправленные расчетные документы.'
    },
    {
      category: 'Премии и переработки',
      title: (
        <span style={{ display: 'block' }}>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
            Добились выплаты
          </span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
            квартальной премии и оплаты
          </span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
            сверхурочной работы в суде
          </span>
        </span>
      ),
      problem: 'Руководителю отдела не выплатили квартальную премию после выполнения закрепленных показателей и не учли работу по вечерам в период запуска проекта. Работодатель ссылался на отсутствие отдельного приказа о переработках.',
      action: 'Проанализировали положение о премировании, показатели в CRM, служебную переписку, журналы доступа и задания руководства; подготовили расчет и позицию по каждому виду требований.',
      result: 'В ходе судебного разбирательства стороны заключили мировое соглашение: работодатель выплатил 245 000 рублей премии и доплат, компенсацию за задержку и часть расходов на юридическую помощь.'
    }
  ];

  const faqs = [
    {
      q: 'В какой срок можно обратиться в суд за зарплатой?',
      a: 'По спорам о невыплате или неполной выплате заработной платы и других причитающихся сумм обычно действует срок один год со дня установленного срока соответствующей выплаты. Начало и соблюдение срока нужно проверять по каждому требованию и документам конкретного дела.'
    },
    {
      q: 'Можно ли взыскать компенсацию за задержку?',
      a: 'Да. За каждый день задержки предусмотрена денежная компенсация не ниже установленного законом размера. Она рассчитывается со следующего дня после установленной даты выплаты по день фактического расчета включительно; условия договора или локальных актов могут предусматривать больший размер.'
    },
    {
      q: 'Что делать, если зарплату начисляли не полностью?',
      a: 'Нужно установить, какие суммы должны были быть начислены по договору, локальным актам и фактически выполненной работе. При споре значение имеют табели, графики, задания, показатели, расчетные документы и другие доказательства.'
    },
    {
      q: 'Можно ли взыскать невыплаченную премию?',
      a: 'Иногда можно, но премия не всегда является безусловной выплатой. Необходимо проверить условия премирования, выполнение показателей, полномочия работодателя и причину невыплаты.'
    },
    {
      q: 'Можно ли получить деньги, если работал без оформления?',
      a: 'Возможно, но сначала или одновременно может потребоваться доказать фактические трудовые отношения, период работы, обязанности и согласованный размер оплаты. Используются переписка, пропускные данные, графики, переводы, документы о выполненной работе и другие допустимые доказательства.'
    },
    {
      q: 'Обязательно ли сначала обращаться в трудовую инспекцию?',
      a: 'Нет. Выбор между требованием работодателю, инспекцией, прокуратурой и судом зависит от характера долга и доказательств. Обращение в государственный орган не должно приводить к пропуску срока обращения в суд.'
    },
    {
      q: 'Можно ли приостановить работу, если зарплату задерживают?',
      a: 'При задержке заработной платы более чем на 15 дней закон в ряде случаев допускает приостановление работы после письменного извещения работодателя. Есть категории работников и ситуации, для которых это запрещено, поэтому до отказа от выхода на работу нужно проверить применимость правила и правильно оформить уведомление.'
    },
    {
      q: 'Нужно ли платить госпошлину за иск?',
      a: 'Работники по требованиям, вытекающим из трудовых отношений, освобождаются от уплаты государственной пошлины и судебных расходов в предусмотренном законом порядке. Конкретный состав требований следует проверить до подачи заявления.'
    },
    {
      q: 'Можно ли получить помощь дистанционно?',
      a: 'Да. Консультацию, анализ документов, расчет и подготовку большинства процессуальных документов можно организовать дистанционно. Формат представительства зависит от места и стадии рассмотрения дела.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Консультация и расчет',
      subtitle: 'Проверка требований и задолженности',
      features: [
        { name: 'Правовая консультация юриста', value: '[уточняется]' },
        { name: 'Анализ расчетных документов и срока', value: '[уточняется]' },
        { name: 'Предварительный расчет долга и компенсаций', value: '[уточняется]' }
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
        { name: 'Претензия работодателю и расчет', value: '[уточняется]' },
        { name: 'Судебный приказ либо иск с приложениями', value: '[уточняется]' },
        { name: 'Формирование доказательной базы', value: '[уточняется]' }
      ],
      buttonText: 'Уточнить стоимость',
      buttonHref: '#form'
    },
    {
      title: 'Судебное взыскание',
      subtitle: 'Ведение дела о взыскании в суде',
      features: [
        { name: 'Подготовка правовой позиции', value: '[уточняется]' },
        { name: 'Представительство в судебных заседаниях', value: '[уточняется]' },
        { name: 'Получение и предъявление исполнительного листа', value: '[уточняется]' }
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
      desc: 'Уточняем период задолженности, условия оплаты, что было начислено и выплачено, какие документы и переписка сохранились.'
    },
    {
      num: '02',
      title: (
        <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
          Проверка и расчет
        </span>
      ),
      desc: 'Сопоставляем условия оплаты с фактической работой и выплатами, определяем основной долг, компенсацию и срок обращения.'
    },
    {
      num: '03',
      title: (
        <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
          Стратегия взыскания
        </span>
      ),
      desc: 'Определяем, достаточно ли требования работодателю, целесообразны ли обращения в государственные органы и какой судебный порядок применим.'
    },
    {
      num: '04',
      title: (
        <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
          Подготовка документов
        </span>
      ),
      desc: 'Готовим расчет, требование, заявление о судебном приказе или иск, приложения и ходатайства об истребовании недоступных документов.'
    },
    {
      num: '05',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Представительство</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и получение денег</span>
        </>
      ),
      desc: 'Представляем клиента в согласованном объеме, получаем исполнительный документ и при необходимости сопровождаем взыскание.'
    }
  ];

  const situations = [
    {
      tag: 'Задержка',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Зарплату</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>задерживают</span>
        </>
      ),
      desc: 'Срок выплаты прошел, работодатель переносит расчет, платит нерегулярно или обещает погасить долг позднее.'
    },
    {
      tag: 'Недоплата',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Выплачивают</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>только часть</span>
        </>
      ),
      desc: 'Начисления в расчетных листках и фактические переводы не совпадают либо работодатель уменьшил оплату без понятного основания.'
    },
    {
      tag: 'Увольнение',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Не рассчитали</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>при увольнении</span>
        </>
      ),
      desc: 'Не выплачены зарплата, компенсация за неиспользованный отпуск или другие суммы, причитающиеся при прекращении трудового договора.'
    },
    {
      tag: 'Премии',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Не выплатили</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>положенную премию</span>
        </>
      ),
      desc: 'Показатели выполнены, но работодатель исключил работника из приказа, изменил критерии или ссылается на неподтвержденные нарушения.'
    },
    {
      tag: 'Переработки',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Не оплатили</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>переработку</span>
        </>
      ),
      desc: 'Не учтены сверхурочные часы, работа ночью, в выходные или праздничные дни, хотя выполнение работы можно подтвердить.'
    },
    {
      tag: 'Удержания',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Незаконно удержали</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>денежные средства из зарплаты</span>
        </>
      ),
      desc: 'Работодатель произвел спорное удержание за недостачу, ущерб, обучение, форму, штраф или иное основание.'
    },
    {
      tag: 'Без договора',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Работали</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>без оформления</span>
        </>
      ),
      desc: 'Работодатель отрицает долг или сам факт работы; необходимо собрать доказательства допуска к работе, обязанностей и согласованной оплаты.'
    },
    {
      tag: 'Ликвидация',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Организация закрывается</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>или не выходит на связь</span>
        </>
      ),
      desc: 'Важно определить надлежащего ответчика, проверить статус работодателя и выбрать способ взыскания с учетом фактической ситуации.'
    }
  ];

  const paymentTypes = [
    {
      title: 'Задолженность по зарплате',
      desc: 'Оклад, тарифная часть и иные элементы оплаты труда, которые были начислены либо должны были быть начислены по установленным условиям.'
    },
    {
      title: 'Расчет при увольнении',
      desc: 'Невыплаченная зарплата, компенсация за неиспользованный отпуск и другие причитающиеся суммы.'
    },
    {
      title: 'Премии и стимулирующие выплаты',
      desc: 'Если право на выплату и выполнение условий подтверждаются договором, положением о премировании, показателями и другими документами.'
    },
    {
      title: 'Доплаты за особый режим работы',
      desc: 'Оплата сверхурочной, ночной работы, выходных и праздников — при наличии правовых оснований и доказательств фактически отработанного времени.'
    },
    {
      title: 'Компенсация за задержку',
      desc: 'Денежная компенсация за каждый день просрочки в размере не ниже установленного ТК РФ; договором или локальным актом размер может быть повышен.'
    },
    {
      title: 'Другие связанные требования',
      desc: 'В зависимости от обстоятельств — компенсация морального вреда и возмещение подтвержденных судебных расходов.'
    }
  ];

  const whatLawyerDoes = [
    'проверит трудовой договор, локальные акты, расчетные листки, табели, банковские выписки и иные доказательства;',
    'определит состав задолженности, период взыскания и срок обращения в суд;',
    'рассчитает невыплаченные суммы и денежную компенсацию за задержку;',
    'оценит, можно ли требовать премию, оплату переработок, спорных удержаний и иных выплат;',
    'подготовит требование работодателю, обращение в трудовую инспекцию или прокуратуру, если это оправдано стратегией;',
    'подготовит заявление о вынесении судебного приказа либо иск и комплект приложений с учетом характера спора;',
    'представит интересы работника в переговорах и суде в согласованном объеме;',
    'поможет получить исполнительный документ и организовать фактическое взыскание присужденных сумм.'
  ];

  const whatToPrepare = [
    'трудовой договор, дополнительные соглашения и документы об условиях оплаты;',
    'положение об оплате труда, положение о премировании, коллективный договор — если они доступны;',
    'расчетные листки, справки о доходах, ведомости и иные документы работодателя;',
    'банковские выписки или сведения о фактически полученных суммах;',
    'приказ об увольнении и расчетные документы — если спор возник после увольнения;',
    'табели, графики, пропускные данные, задания, отчеты и переписку о сверхурочной или иной работе;',
    'документы о выполнении показателей премирования;',
    'переписку с руководителем, бухгалтерией и кадровой службой о долге;',
    'ответы работодателя, трудовой инспекции, прокуратуры или других органов.'
  ];

    const relatedServices = [
    {
      title: 'Незаконное увольнение',
      desc: 'Оспаривание увольнения по статье, за прогул, принуждения к уходу и восстановление на работе.',
      link: '/grazhdanam/trudovoj-yurist/nezakonnoe-uvolnenie/'
    },
    {
      title: 'Незаконное сокращение',
      desc: 'Защита при сокращении штата: преимущественное право, предложение вакансий и выплаты.',
      link: '/grazhdanam/trudovoj-yurist/nezakonnoe-sokrashchenie/'
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
          { '@type': 'ListItem', 'position': 4, 'name': 'Взыскание зарплаты', 'item': 'https://dejure-help.ru/grazhdanam/trudovoj-yurist/vzyskanie-zarabotnoj-platy/' }
        ]
      },
      {
        '@type': 'LegalService',
        '@id': 'https://dejure-help.ru/grazhdanam/trudovoj-yurist/vzyskanie-zarabotnoj-platy/#service',
        'name': 'Взыскание заработной платы в Липецке',
        'description': 'Взыскание задолженности по заработной плате, окончательного расчета, премий, переработок и компенсаций.',
        'url': 'https://dejure-help.ru/grazhdanam/trudovoj-yurist/vzyskanie-zarabotnoj-platy/',
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
            <span style={{ color: 'var(--color-text-main)' }}>Взыскание заработной платы</span>
          </>
        }
        superTitle="Трудовые споры • расчет и взыскание"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Взыскание заработной платы
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              и выплат в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Проверим трудовой договор, расчетные документы и фактические выплаты. Определим состав задолженности и компенсации за задержку, подготовим требования и иск, представим Ваши интересы в споре с работодателем.
          </span>
        }
        primaryCtaText="Обсудить задолженность"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_vzyskanie"
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
          { text: 'Точный расчет долга и процентов за каждый день задержки' },
          { text: 'Взыскание премий, надбавок и оплаты сверхурочных часов' },
          { text: 'Досудебное урегулирование и представительство в суде' },
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
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>В каких ситуациях</span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>мы помогаем</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Поможем взыскать невыплаченные суммы, рассчитать компенсации и привлечь недобросовестного работодателя к ответственности.
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
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ display: 'inline-block' }}>
              Проверить, что можно взыскать
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: КАКИЕ ВЫПЛАТЫ МОЖНО ПОТРЕБОВАТЬ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              Какие выплаты можно потребовать
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Точный состав требований определяется по трудовому договору, локальным актам, расчетам работодателя и фактически выполненной работе.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            {paymentTypes.map((item, i) => (
              <div
                key={i}
                style={{
                  padding: '30px',
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>
                  {item.title}
                </h3>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* ═══ БЛОК 4: ЧЕМ ПОМОЖЕТ ЮРИСТ (ШАБЛОННЫЙ С НУМЕРАЦИЕЙ) ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Чем поможет юрист</span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>по взысканию зарплаты</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Взыщем всю сумму задолженности, компенсацию за задержку по ст. 236 ТК РФ, моральный вред и расходы на юриста.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', position: 'relative', marginBottom: '32px' }}>
            {[
              {
                num: '01',
                title: [
                  'Правовой аудит',
                  'начислений и долга'
                ],
                desc: 'Сверяем трудовой договор, оклад, премии, фактически отработанное время и расчетные листки.'
              },
              {
                num: '02',
                title: [
                  'Расчет процентов',
                  'по ст. 236 ТК РФ'
                ],
                desc: 'Рассчитываем денежную компенсацию за каждый день задержки в размере не ниже 1/150 ключевой ставки ЦБ РФ.'
              },
              {
                num: '03',
                title: [
                  'Досудебная претензия',
                  'и жалобы в органы'
                ],
                desc: 'Направляем аргументированную претензию, обращения в трудовую инспекцию, прокуратуру и следственные органы.'
              },
              {
                num: '04',
                title: [
                  'Подготовка иска',
                  'и обеспечительных мер'
                ],
                desc: 'Формируем иск в суд с ходатайством об аресте счетов работодателя для гарантии выплаты.'
              },
              {
                num: '05',
                title: [
                  'Судебная защита',
                  'в суде Липецка'
                ],
                desc: 'Доказываем в суде размер невыплаченной суммы, компенсацию морального вреда и расходы на юриста.'
              },
              {
                num: '06',
                title: [
                  'Исполнение через',
                  'банк и ФССП'
                ],
                desc: 'Предъявляем исполнительный лист напрямую в банк работодателя для быстрого списания денег.'
              }
            ].map((item, index) => (
              <div 
                key={index}
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
                  fontSize: '18px',
                  fontWeight: 700,
                  color: 'var(--color-gold)',
                  fontFamily: 'var(--font-serif)',
                  marginBottom: '12px'
                }}>
                  {item.num}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '17px',
                  fontWeight: 600,
                  color: 'var(--color-deep-blue)',
                  margin: '0 0 12px 0',
                  lineHeight: 1.35,
                  minHeight: '46px'
                }}>
                  {item.title.map((line, idx) => (
                    <span key={idx} className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                      {line}
                    </span>
                  ))}
                </h3>
                <p style={{
                  fontSize: '14.5px',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: ЧТО ПОДГОТОВИТЬ ДЛЯ КОНСУЛЬТАЦИИ (2 КАРТОЧКИ) ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Что подготовить</span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>для консультации</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Подготовьте имеющиеся финансовые и трудовые документы для точного расчета задолженности и процентов по ст. 236 ТК РФ.
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
                  Документы о работе и начислениях
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Официально подтверждают размер установленной заработной платы и период задержки.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Трудовой договор и приказы о выплатах</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Договор с указанием оклада, положения об оплате труда и премировании.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Расчетные листки за спорные периоды</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Выданные работодателем листки с начисленными и удержанными суммами.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Банковские выписки по зарплатной карте</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Выписка с движением средств и отсутствием поступлений в дни выплат.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Справки о доходах (2-НДФЛ)</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Официальные справки о начисленном доходе и суммах удержанных налогов.</span>
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
                  Доказательства выполнения работы
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Позволяют взыскать серую зарплату, переработки или деньги при неоформленных отношениях.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Табели учета рабочего времени</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Табели, журналы учета выхода на работу, пропускные ведомости и сменные графики.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Рабочая переписка и поручения</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Сообщения в WhatsApp, Telegram, корпоративная почта с обсуждением зарплаты и задач.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Документы с подписями работника</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Накладные, акты выполненных работ, отчеты, путевые листы и чеки.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Свидетельские показания коллег</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Контакты действующих или бывших сотрудников, готовых подтвердить факты работы.</span>
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
            <strong style={{ color: 'var(--color-primary)' }}>Важно:</strong> Срок обращения в суд по спорам о невыплате заработной платы составляет <strong>1 год</strong> со дня установленного срока выплаты указанных сумм (ч. 2 ст. 392 ТК РФ).
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
                Специализируется на взыскании задолженности по зарплате, расчетных выплат, компенсаций по ст. 236 ТК РФ и доказывании фактического заработка.
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
        title="Примеры дел о взыскании выплат"
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
        ctaTitle="Обсудите взыскание заработной платы"
        ctaSubtitle="Опишите ситуацию — юрист рассчитает точный размер задолженности и компенсаций."
        ctaButtonText="Обсудить задолженность"
        ctaButtonHref="#form"
        footerNote="Для оценки ситуации понадобятся имеющиеся документы: трудовой договор, расчетные листки или банковские выписки."
      />

      {/* ═══ БЛОК 9: СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость юридической помощи"
        subtitle="Стоимость зависит от периода задолженности, числа видов выплат, объема документов, необходимости восстанавливать учет рабочего времени и стадии спора. Состав работы и цена согласовываются до заключения договора."
        tiers={pricingTiers}
        disclaimer="Стоимость определяется после уточнения обстоятельств дела и изучения имеющихся документов. Состав услуг, цена и порядок оплаты фиксируются в договоре до начала работы."
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
        subtitle="О взыскании зарплаты и компенсаций"
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
                Обсудите невыплаченные суммы с Мариной Валерьевной Смольяниновой
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '28px', textWrap: 'balance' }}>
                Кратко укажите, какие выплаты и за какой период не получил работник. Обращение будет передано Марине Валерьевне Смольяниновой. Она уточнит условия оплаты, имеющиеся документы и фактические выплаты и согласует с Вами консультацию.
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
