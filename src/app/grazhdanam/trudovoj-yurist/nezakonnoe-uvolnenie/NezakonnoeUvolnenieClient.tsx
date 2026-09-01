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

export default function NezakonnoeUvolnenieClient() {
  const cases: CaseData[] = [
    {
      category: 'Дисциплинарное увольнение',
      title: (
        <span style={{ display: 'block' }}>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
            Отменили увольнение
          </span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
            за неоднократное неисполнение
          </span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
            трудовых обязанностей
          </span>
        </span>
      ),
      problem: 'Руководителя смены уволили «по статье» после двух дисциплинарных взысканий. Работодатель сослался на повторное невыполнение поручения, хотя содержание задания и срок исполнения документально не подтвердил.',
      action: 'Проверили оба взыскания и кадровые документы, собрали переписку и отчеты о выполненной работе, заявили требования о признании приказов незаконными, восстановлении и выплатах.',
      result: 'Суд признал увольнение незаконным, восстановил клиента в должности и взыскал средний заработок за время вынужденного прогула и компенсацию морального вреда.'
    },
    {
      category: 'Увольнение по собственному',
      title: (
        <span style={{ display: 'block' }}>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
            Доказали, что заявление
          </span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
            об увольнении по собственному
          </span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
            подписано под давлением
          </span>
        </span>
      ),
      problem: 'После конфликта с руководителем работнику предложили немедленно написать заявление, угрожая увольнением за якобы допущенные нарушения. В переписке сохранились требования кадровой службы и обсуждение условий ухода.',
      action: 'Зафиксировали доказательства давления, восстановили последовательность событий, подготовили иск и расчет связанных требований, провели переговоры с работодателем.',
      result: 'Стороны заключили мировое соглашение: работодатель изменил сведения об увольнении, выплатил согласованную компенсацию и возместил часть расходов на юридическую помощь.'
    },
    {
      category: 'Испытательный срок',
      title: (
        <span style={{ display: 'block' }}>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
            Оспорили увольнение
          </span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
            как не прошедшего испытание
          </span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
            в период испытательного срока
          </span>
        </span>
      ),
      problem: 'Специалиста уволили в период испытательного срока. В уведомлении использовали общие формулировки, а подтверждений невыполненных задач и претензий к качеству работы не представили.',
      action: 'Сопоставили трудовой договор, план задач, отчеты и переписку, запросили документы об оценке испытания и указали на отсутствие конкретных подтвержденных причин увольнения.',
      result: 'Суд признал увольнение незаконным, изменил формулировку и дату прекращения трудового договора и взыскал средний заработок за период вынужденного прогула.'
    }
  ];

  const faqs = [
    {
      q: 'В какой срок можно оспорить увольнение?',
      a: 'Обычно работник может обратиться в суд в течение одного месяца со дня вручения копии приказа об увольнении, выдачи трудовой книжки либо предоставления сведений о трудовой деятельности. Начало срока нужно определять по документам конкретного дела. При уважительных причинах пропуска суд может восстановить срок.'
    },
    {
      q: 'Нужно ли сначала жаловаться в трудовую инспекцию?',
      a: 'Не всегда. Спор о восстановлении на работе рассматривает суд. Жалоба в инспекцию или прокуратуру может быть полезна, но не следует рассчитывать, что она автоматически остановит срок для обращения в суд.'
    },
    {
      q: 'Можно ли восстановиться после увольнения по собственному желанию?',
      a: 'Можно пытаться оспорить увольнение, если заявление не выражало добровольную волю работника. Однако давление необходимо доказать, поэтому значение имеют переписка, записи разговоров, свидетели, последовательность действий и другие обстоятельства.'
    },
    {
      q: 'Что можно потребовать кроме восстановления?',
      a: 'В зависимости от ситуации можно заявить изменение даты или формулировки увольнения, средний заработок за время вынужденного прогула, компенсацию морального вреда и другие связанные требования. Точный состав определяется после анализа дела.'
    },
    {
      q: 'Обязательно ли возвращаться на прежнюю работу?',
      a: 'Нет. Если работник не хочет возвращаться или уже трудоустроился, с юристом можно обсудить требование об изменении формулировки и даты увольнения и взыскании причитающихся сумм.'
    },
    {
      q: 'Кто должен доказывать законность увольнения?',
      a: 'По спору об увольнении значение имеют основание прекращения договора, соблюдение процедуры и доказательства сторон. Работодатель должен обосновать законность принятого решения, а работнику важно подтвердить обстоятельства, на которые он ссылается, в том числе давление при заявлении по собственному желанию.'
    },
    {
      q: 'Нужно ли платить госпошлину за иск?',
      a: 'Работники при обращении в суд с требованиями, вытекающими из трудовых отношений, освобождаются от судебных расходов и государственной пошлины. Конкретный набор требований лучше проверить до подачи иска.'
    },
    {
      q: 'Можно ли получить помощь дистанционно?',
      a: 'Да. Консультацию, анализ документов и подготовку большинства процессуальных документов можно организовать дистанционно. Формат представительства зависит от места и стадии рассмотрения дела.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Консультация и анализ',
      subtitle: 'Оценка увольнения и сроков',
      features: [
        { name: 'Правовая консультация юриста', value: '[уточняется]' },
        { name: 'Проверка оснований, документов и срока', value: '[уточняется]' },
        { name: 'Оценка возможных требований и доказательств', value: '[уточняется]' }
      ],
      buttonText: 'Уточнить стоимость',
      buttonHref: '#form'
    },
    {
      title: 'Подготовка документов',
      subtitle: 'Досудебная и процессуальная работа',
      badgeText: 'Популярно',
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
      subtitle: 'Ведение дела об увольнении в суде',
      features: [
        { name: 'Подготовка правовой позиции', value: '[уточняется]' },
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
      desc: 'Уточняем дату и основание увольнения, что подписал работник, какие документы и доказательства сохранились.'
    },
    {
      num: '02',
      title: (
        <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
          Правовая оценка
        </span>
      ),
      desc: 'Проверяем законность основания, процедуру, судебный срок и возможные требования к работодателю.'
    },
    {
      num: '03',
      title: (
        <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
          План защиты
        </span>
      ),
      desc: 'Определяем, что нужно запросить или сохранить, целесообразны ли переговоры и обращения в государственные органы, когда подавать иск.'
    },
    {
      num: '04',
      title: (
        <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
          Подготовка дела
        </span>
      ),
      desc: 'Формируем требования, расчет, иск и доказательства; при необходимости заявляем ходатайства об истребовании документов.'
    },
    {
      num: '05',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Представительство</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и фактическое исполнение</span>
        </>
      ),
      desc: 'Представляем клиента в согласованном объеме и сопровождаем внесение изменений, выплаты и восстановление на работе после решения.'
    }
  ];

  const situations = [
    {
      tag: 'Основание',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Уволили</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>без законного основания</span>
        </>
      ),
      desc: 'Работодатель указал основание, которое не подтверждается документами или фактическими обстоятельствами.'
    },
    {
      tag: 'Процедура',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Нарушили</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>порядок увольнения</span>
        </>
      ),
      desc: 'Не запросили объяснение, неправильно оформили взыскания, нарушили сроки или не ознакомили с обязательными документами.'
    },
    {
      tag: 'Давление',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Вынудили</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>написать заявление</span>
        </>
      ),
      desc: 'Работник подал заявление под давлением, угрозой увольнения «по статье», лишения выплат или создания невыносимых условий.'
    },
    {
      tag: 'Прогул',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Уволили</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>за прогул</span>
        </>
      ),
      desc: 'Отсутствие имело уважительную причину, время отсутствия определено неверно либо работодатель нарушил процедуру.'
    },
    {
      tag: 'Взыскания',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Уволили</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>за неоднократные нарушения</span>
        </>
      ),
      desc: 'Предыдущие взыскания спорны, проступок не доказан либо наказание несоразмерно обстоятельствам.'
    },
    {
      tag: 'Испытание',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Не прошли</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>испытательный срок</span>
        </>
      ),
      desc: 'Работодатель не подтвердил неудовлетворительный результат конкретными фактами или нарушил порядок уведомления.'
    },
    {
      tag: 'Трудовая книжка',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Нужно изменить</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>запись об увольнении</span>
        </>
      ),
      desc: 'Возвращаться к работодателю человек не хочет, но основание или дата увольнения мешают трудоустройству и должны быть оспорены.'
    },
    {
      tag: 'Расчет',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Не выдали документы</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и окончательный расчет</span>
        </>
      ),
      desc: 'Нужно получить документы, проверить начисления и одновременно определить связанные требования к работодателю.'
    }
  ];

  const whatLawyerDoes = [
    'проверит основание увольнения, соблюдение процедуры и срок обращения в суд;',
    'определит, какие доказательства необходимо сохранить, запросить или истребовать;',
    'подготовит заявление работодателю, обращение в трудовую инспекцию или прокуратуру, если это оправдано стратегией;',
    'сформулирует требования: восстановление, изменение даты и формулировки, средний заработок за вынужденный прогул, компенсация морального вреда и иные связанные требования;',
    'подготовит иск, расчет и комплект приложений;',
    'представит интересы работника в переговорах и суде в согласованном объеме;',
    'поможет проконтролировать фактическое исполнение решения о восстановлении и внесение корректных сведений.'
  ];

  const whatToPrepare = [
    'трудовой договор, дополнительные соглашения и должностную инструкцию;',
    'приказ об увольнении, сведения о трудовой деятельности или трудовую книжку;',
    'уведомления, акты, требования дать объяснения, объяснительные, замечания и выговоры;',
    'заявление по собственному желанию или соглашение о прекращении договора, если их предлагали или подписали;',
    'переписку с руководителем и кадровой службой, пропускные данные, графики, табели и документы о выполненной работе;',
    'медицинские документы и иные подтверждения уважительных причин отсутствия;',
    'расчетные листки, справки о доходах и документы о выплатах при увольнении;',
    'ответы работодателя, трудовой инспекции, прокуратуры или других органов.'
  ];

  const relatedServices = [
    {
      title: 'Взыскание заработной платы и других выплат',
      desc: 'Если работодатель не выплатил расчет, зарплату, отпускные, премию или компенсацию.',
      link: '/grazhdanam/trudovoj-yurist/vzyskanie-zarabotnoj-platy/'
    },
    {
      title: 'Незаконное сокращение',
      desc: 'Если трудовой договор прекращен по сокращению численности или штата с нарушением процедуры или гарантий.',
      link: '/grazhdanam/trudovoj-yurist/nezakonnoe-sokrashchenie/'
    },
    {
      title: 'Трудовой юрист в Липецке',
      desc: 'Если ситуация не относится только к увольнению или требуется помощь по другому нарушению прав работника.',
      link: '/grazhdanam/trudovoj-yurist/'
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
          { '@type': 'ListItem', 'position': 4, 'name': 'Незаконное увольнение', 'item': 'https://dejure-help.ru/grazhdanam/trudovoj-yurist/nezakonnoe-uvolnenie/' }
        ]
      },
      {
        '@type': 'LegalService',
        '@id': 'https://dejure-help.ru/grazhdanam/trudovoj-yurist/nezakonnoe-uvolnenie/#service',
        'name': 'Помощь при незаконном увольнении в Липецке',
        'description': 'Оценка оснований и сроков увольнения, подготовка иска, восстановление на работе, выплаты и изменение формулировки.',
        'url': 'https://dejure-help.ru/grazhdanam/trudovoj-yurist/nezakonnoe-uvolnenie/',
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
            <span style={{ color: 'var(--color-text-main)' }}>Незаконное увольнение</span>
          </>
        }
        superTitle="Трудовые споры • восстановление и выплаты"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Незаконное увольнение
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              и восстановление на работе
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Проверим основания и порядок увольнения, оценим срок и доказательства. Подготовим требования и иск, добьемся восстановления на работе либо изменения даты и формулировки увольнения, заявим связанные выплаты.
          </span>
        }
        primaryCtaText="Обсудить увольнение"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_uvolnenie"
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
          { text: 'Проверка законности приказов и взысканий' },
          { text: 'Взыскание среднего заработка за вынужденный прогул' },
          { text: 'Защита при давлении и принуждении к увольнению' },
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
            По спору об увольнении обычно действует месячный срок обращения в суд. Одновременно могут исчезнуть переписка, записи доступа, рабочие документы и другие доказательства, поэтому оценить ситуацию лучше сразу.
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
                  Увольнение уже оформлено
                </div>
              </div>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                Сохраните приказ, сведения о трудовой деятельности, расчетные документы и переписку. Не ждите ответа инспекции, если из-за этого можно пропустить судебный срок.
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
                  Требуют заявление по собственному
                </div>
              </div>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                Не подписывайте заявление или соглашение, если не хотите увольняться и не понимаете последствий. Зафиксируйте предложения и давление работодателя законным способом.
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
                  Готовят увольнение «по статье»
                </div>
              </div>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                Запрашивайте копии приказов и актов, давайте содержательные объяснения, сохраняйте подтверждения уважительных причин и выполненной работы.
              </p>
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '28px', display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <a href="tel:+79103503111" style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.02em' }}>
              +7 (910) 350-31-11
            </a>
            <a href="#form" className="btn-urgent-call" style={{ padding: '14px 28px', fontSize: '15px' }}>
              Проверить срок и документы
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
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>В каких ситуациях</span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>мы помогаем</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Оценим обстоятельства увольнения, законность приказов и соблюдение установленных законом процедур.
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
              Описать свою ситуацию
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: ЧЕМ ПОМОЖЕТ ЮРИСТ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              Чем поможет юрист
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Комплексная защита прав работника на всех стадиях спора об увольнении.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
            {whatLawyerDoes.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '20px 24px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderLeft: '3px solid var(--color-primary)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}>
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: ЧТО ПОДГОТОВИТЬ ДЛЯ КОНСУЛЬТАЦИИ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              Что подготовить для консультации
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Не нужно ждать полного комплекта. Направьте то, что уже есть:
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
            {whatToPrepare.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '20px 24px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderLeft: '3px solid var(--color-gold)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 6: СПЕЦИАЛИСТ ПО ДЕЛУ ═══ */}
      <SpecialistBlock
        title="Вашим делом займется Марина Валерьевна Смольянинова"
        name="Марина Валерьевна Смольянинова"
        position="Ведущий юрист ЮК &#171;Де-Юре&#187;"
        imageUrl="/images/smolyaninova.jpg"
        description={[
          'Специализируется на трудовых спорах и защите прав работников.',
          'Анализирует документы и доказательства, готовит правовую позицию и процессуальные документы.',
          'Сопровождает переговоры с работодателем и представляет интересы клиентов в суде.',
          'Более 5 лет юридической и судебной практики в сфере гражданского и трудового права.'
        ]}
        buttonText="Задать вопрос юристу"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 7: ПРИМЕРЫ ДЕЛ ═══ */}
      <CasesBlock
        title="Примеры дел по незаконному увольнению"
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
        ctaTitle="Обсудите ситуацию с увольнением"
        ctaSubtitle="Опишите, что произошло — юрист оценит сроки и перспективы дела."
        ctaButtonText="Обсудить увольнение"
        ctaButtonHref="#form"
        footerNote="Для оценки ситуации понадобятся имеющиеся документы: приказ, уведомления, расчетные листки или переписка."
      />

      {/* ═══ БЛОК 9: СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость юридической помощи"
        subtitle="Стоимость зависит от основания увольнения, срочности, объема документов, числа связанных требований и стадии спора. Состав работы и цена согласовываются до заключения договора."
        tiers={pricingTiers}
        disclaimer="Стоимость определяется после уточнения обстоятельств дела и изучения имеющихся документов. Состав услуг, цена и порядок оплаты фиксируются в договоре до начала работы."
      />

      {/* ═══ БЛОК 10: СВЯЗАННЫЕ УСЛУГИ ═══ */}
      <section className="section bg-cream" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              Другие трудовые споры работников
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Смежные направления помощи при нарушении трудовых прав.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            {relatedServices.map((srv, i) => (
              <Link key={i} href={srv.link} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                <div
                  className="card related-service-card"
                  style={{
                    height: '100%',
                    minHeight: '160px',
                    padding: '30px',
                    background: 'var(--color-white)',
                    border: '1px solid var(--color-border)',
                    borderTop: '3px solid var(--color-primary)',
                    borderRadius: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s',
                    position: 'relative'
                  }}
                >
                  <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)', fontWeight: 700 }}>
                    {srv.title}
                  </h3>
                  <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                    {srv.desc}
                  </p>
                  <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600 }}>
                    Подробнее
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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

      {/* ═══ БЛОК 11: FAQ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы"
        title={<><span>Ответы на</span> <br /><span>частые вопросы</span></>}
        subtitle="О незаконном увольнении и восстановлении"
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
                Обсудите увольнение с Мариной Валерьевной Смольяниновой
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '28px', textWrap: 'balance' }}>
                Кратко опишите, когда и по какому основанию Вас уволили либо какие документы предлагают подписать. Обращение будет передано Марине Валерьевне Смольяниновой. Она уточнит обстоятельства, срок и имеющиеся документы и согласует с Вами консультацию.
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
