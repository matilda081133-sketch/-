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

export default function TrudovojClient() {
  const cases: CaseData[] = [
    {
      category: 'Увольнение / Восстановление',
      title: (
        <span style={{ display: 'block' }}>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
            Восстановили работника
          </span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
            после незаконного увольнения
          </span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
            за неисполнение обязанностей
          </span>
        </span>
      ),
      problem: 'Работника уволили после двух дисциплинарных взысканий. Работодатель ссылался на неоднократное неисполнение обязанностей, однако не запросил письменные объяснения по одному из эпизодов и не подтвердил, в чем именно состояло нарушение.',
      action: 'Изучили приказы, должностную инструкцию, уведомления и переписку. Выявили нарушения порядка применения взысканий, подготовили иск о признании увольнения незаконным и представили интересы работника в суде.',
      result: 'Увольнение признали незаконным, работника восстановили в должности. В его пользу взыскали средний заработок за время вынужденного прогула и компенсацию морального вреда.'
    },
    {
      category: 'Выплаты / Задержка зарплаты',
      title: (
        <span style={{ display: 'block' }}>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
            Взыскали задолженность
          </span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
            по заработной плате и расчет
          </span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
            при увольнении работника
          </span>
        </span>
      ),
      problem: 'Работодатель несколько месяцев задерживал официально начисленную заработную плату, а в день увольнения не выплатил задолженность и компенсацию за неиспользованный отпуск.',
      action: 'Проверили трудовой договор, расчетные листки, банковские выписки и сведения о начислениях. Рассчитали задолженность и компенсацию за задержку, подготовили требования и иск, представили интересы работника в суде.',
      result: 'С работодателя взыскали задолженность по заработной плате, компенсацию за неиспользованный отпуск, компенсацию за задержку выплат и компенсацию морального вреда.'
    },
    {
      category: 'Производственная травма',
      title: 'Добились расследования несчастного случая и надлежащего оформления производственной травмы',
      problem: 'Работник получил травму во время смены, но работодатель не организовал расследование и предложил указать в медицинских документах, что повреждение получено в быту.',
      action: 'Собрали медицинские документы, сведения о смене и порученной работе, переписку и контакты свидетелей. Подготовили обращение в государственную инспекцию труда и сопровождали дополнительное расследование обстоятельств несчастного случая.',
      result: 'Случай признали связанным с производством, оформили акт о несчастном случае. Работник получил возможность обратиться за предусмотренными страховыми выплатами и возмещением причиненного вреда.'
    }
  ];

  const faqs = [
    {
      q: 'С какими вопросами помогает трудовой юрист?',
      a: 'С незаконным увольнением и сокращением, невыплатой заработной платы и расчета, дисциплинарными взысканиями, изменением условий труда, неоформленными трудовыми отношениями и производственными травмами. Юрист может провести консультацию, проверить документы, подготовить требования, жалобы и иск, а также представить интересы работника.'
    },
    {
      q: 'Какой срок установлен для обращения в суд?',
      a: 'По спору об увольнении работник обычно может обратиться в суд в течение одного месяца, по требованиям о невыплате или неполной выплате заработной платы и других причитающихся сумм — в течение одного года, по большинству других индивидуальных трудовых споров — в течение трех месяцев. Начало исчисления срока зависит от ситуации. При пропуске по уважительной причине суд может восстановить срок, но откладывать обращение не следует.'
    },
    {
      q: 'Нужно ли сначала обращаться в трудовую инспекцию или к работодателю?',
      a: 'Не во всех случаях. Некоторые требования можно заявить работодателю или в государственную инспекцию труда, а по ряду споров работник вправе обращаться непосредственно в суд. Подача жалобы сама по себе не должна быть причиной пропустить срок судебной защиты, поэтому порядок действий лучше определить после анализа документов.'
    },
    {
      q: 'Можно ли защитить права, если трудовой договор не заключали?',
      a: 'Да, при наличии доказательств фактической работы можно требовать признания отношений трудовыми и заявлять связанные требования. Значение могут иметь пропуск, графики, переписка, поручения, переводы денег, документы о выполненной работе, свидетельские показания и другие материалы.'
    },
    {
      q: 'Какие документы нужны для консультации?',
      a: 'Подойдут все имеющиеся документы: трудовой договор, должностная инструкция, приказы, уведомления, расчетные листки, сведения о трудовой деятельности, переписка, записи обращений, медицинские документы и ответы государственных органов. Ждать полного комплекта не нужно: юрист определит, чего не хватает и как это получить.'
    },
    {
      q: 'Что можно взыскать с работодателя?',
      a: 'Состав требований зависит от нарушения. Это могут быть задолженность по заработной плате и другим выплатам, компенсация за задержку, средний заработок за время вынужденного прогула, компенсация за неиспользованный отпуск, возмещение вреда и компенсация морального вреда. Требования и расчет нужно определять по документам конкретного дела.'
    },
    {
      q: 'Можно ли вести трудовой спор дистанционно?',
      a: 'Да, консультацию, анализ документов и подготовку большинства обращений можно организовать дистанционно. Возможность представительства и необходимость личного участия зависят от стадии дела, места рассмотрения и требуемых процессуальных действий.'
    },
    {
      q: 'От чего зависит стоимость помощи?',
      a: 'От вида нарушения, срочности, объема документов, необходимости расчетов, переговоров, обращения в государственные органы или суд и количества судебных заседаний. Состав работ и стоимость согласовываются до заключения договора.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Консультация и анализ',
      subtitle: 'Разбор ситуации и оценка перспектив',
      features: [
        { name: 'Правовая консультация юриста', value: '[уточняется]' },
        { name: 'Анализ имеющихся документов', value: '[уточняется]' },
        { name: 'Оценка сроков, требований и действий', value: '[уточняется]' }
      ],
      buttonText: 'Уточнить стоимость',
      buttonHref: '#form'
    },
    {
      title: 'Подготовка и досудебная работа',
      subtitle: 'Документы, претензии и переговоры',
      popular: true,
      badgeText: 'Востребовано',
      features: [
        { name: 'Расчет задолженности и компенсаций', value: '[уточняется]' },
        { name: 'Подготовка заявлений, требований и жалоб', value: '[уточняется]' },
        { name: 'Взаимодействие с работодателем и госорганами', value: '[уточняется]' }
      ],
      buttonText: 'Уточнить стоимость',
      buttonHref: '#form'
    },
    {
      title: 'Судебная защита',
      subtitle: 'Ведение трудового спора в суде',
      features: [
        { name: 'Подготовка искового заявления и доказательств', value: '[уточняется]' },
        { name: 'Представительство в судебных заседаниях', value: '[уточняется]' },
        { name: 'Получение судебного акта и исполнение', value: '[уточняется]' }
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
      desc: 'Уточняем обстоятельства, что уже сделал работодатель, какие документы есть у работника и какие сроки необходимо учитывать.'
    },
    {
      num: '02',
      title: (
        <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
          Анализ документов
        </span>
      ),
      desc: 'Изучаем трудовой договор, приказы, уведомления, расчеты, переписку, медицинские и другие относящиеся к спору материалы.'
    },
    {
      num: '03',
      title: (
        <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
          План защиты
        </span>
      ),
      desc: 'Определяем требования, доказательства, сроки и последовательность действий; оцениваем внесудебный и судебный варианты.'
    },
    {
      num: '04',
      title: (
        <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
          Юридическая работа
        </span>
      ),
      desc: 'Готовим заявления, требования, жалобы и иск; проводим переговоры и при необходимости представляем интересы клиента в суде.'
    },
    {
      num: '05',
      title: (
        <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
          Контроль результата
        </span>
      ),
      desc: 'Информируем о ходе дела, согласовываем дальнейшие действия и при необходимости сопровождаем фактическое исполнение решения.'
    }
  ];

  const situations = [
    {
      tag: 'Увольнение',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Вынуждают</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>уволиться</span>
        </>
      ),
      desc: 'Требуют написать заявление по собственному желанию, угрожают увольнением «по статье», предлагают невыгодное соглашение или не допускают к работе.'
    },
    {
      tag: 'Процедура',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Уволили</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>или сократили с нарушениями</span>
        </>
      ),
      desc: 'Проверим основание, приказы, уведомления, сроки, предложенные вакансии и соблюдение установленной процедуры.'
    },
    {
      tag: 'Выплаты',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Не выплачивают</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>заработанные деньги</span>
        </>
      ),
      desc: 'Поможем взыскать заработную плату, расчет при увольнении, отпускные, премии, компенсацию за задержку и другие причитающиеся суммы.'
    },
    {
      tag: 'Оформление',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Работу не оформили</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>надлежащим образом</span>
        </>
      ),
      desc: 'Оценим, как доказать фактические трудовые отношения, если договора нет, вместо него заключен договор услуг или работника оформили как самозанятого.'
    },
    {
      tag: 'Взыскания',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Применяют</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>взыскания или меняют условия</span>
        </>
      ),
      desc: 'Проверим замечание, выговор, отстранение, перевод, изменение графика, оплаты или обязанностей и определим порядок обжалования.'
    },
    {
      tag: 'Травма',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Произошел</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>несчастный случай на работе</span>
        </>
      ),
      desc: 'Поможем добиться расследования и надлежащего оформления, оспорить выводы комиссии и заявить требования о положенных выплатах и возмещении вреда.'
    }
  ];

  const directions = [
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
          { '@type': 'ListItem', 'position': 3, 'name': 'Трудовой юрист', 'item': 'https://dejure-help.ru/grazhdanam/trudovoj-yurist/' }
        ]
      },
      {
        '@type': 'LegalService',
        '@id': 'https://dejure-help.ru/grazhdanam/trudovoj-yurist/#service',
        'name': 'Юридическая помощь по трудовым спорам в Липецке',
        'description': 'Помощь трудового юриста в Липецке: незаконное увольнение, сокращение, взыскание зарплаты и производственные травмы.',
        'url': 'https://dejure-help.ru/grazhdanam/trudovoj-yurist/',
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
            <span style={{ color: 'var(--color-text-main)' }}>Трудовой юрист</span>
          </>
        }
        superTitle="Трудовое право в Липецке"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Трудовой
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              юрист в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Помогаем работникам при незаконном увольнении и сокращении, невыплате заработной платы и производственной травме. Оценим документы, сроки и перспективу спора, подготовим обращения и представим интересы в суде.
          </span>
        }
        primaryCtaText="Обсудить ситуацию"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_trudovoj"
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
          { text: 'Проверка оснований и процедуры увольнения' },
          { text: 'Расчет задолженности по зарплате и компенсаций' },
          { text: 'Досудебные претензии и защита в суде' },
          { text: 'Куратор — юрист М. В. Смольянинова' }
        ]}
        imageUrl="/images/smolyaninova.jpg"
        imageName="Марина Валерьевна Смольянинова"
        imageSubtitle="Ведущий юрист ЮК «Де-Юре», куратор направления «Трудовое право»"
        imageObjectPosition="center 20%"
      />

      {/* ═══ БЛОК 2: КОГДА ВАЖНО НЕ ОТКЛАДЫВАТЬ ОБРАЩЕНИЕ (ТЕМНО-СИНИЙ БЛОК ИЗ ШАБЛОНА) ═══ */}
      <section style={{ background: 'var(--color-deep-blue)', padding: '64px 0 56px', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-white)', marginBottom: '12px', marginTop: 0 }}>
            <span style={{ display: 'inline-block' }}>Когда важно</span> <br /><span style={{ display: 'inline-block' }}>не откладывать обращение</span>
          </h2>
          <div style={{ width: '60px', height: '2px', background: 'var(--color-gold)', marginBottom: '20px' }}></div>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '16px', marginBottom: '40px', maxWidth: '640px', lineHeight: 1.6 }}>
            В трудовых спорах срок обращения в суд может быть коротким, а документы и переписка — утрачены. Чем раньше юрист увидит ситуацию, тем проще сохранить доказательства и не совершить необратимых действий.
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
                  Работника уже уволили
                </div>
              </div>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                По спору об увольнении обычно действует месячный срок обращения в суд. Нужно получить документы, проверить основание и процедуру увольнения и определить требования.
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
                  Требуют срочно подписать заявление
                </div>
              </div>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                До подписания важно понять последствия документа, зафиксировать давление и получить копии приказов, уведомлений и предложений работодателя.
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
                  Несчастный случай не оформляют
                </div>
              </div>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                Нужно сохранить медицинские документы, сведения о месте и времени происшествия, контакты свидетелей и подтверждения того, что работа выполнялась по поручению работодателя.
              </p>
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '28px', display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <a href="tel:+79103503111" style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.02em' }}>
              +7 (910) 350-31-11
            </a>
            <a href="tel:+79103503111" className="btn btn-urgent-call" style={{ padding: '14px 28px', fontSize: '15px' }} data-analytics="trudovoj_urgent_call_click">
              Позвонить юристу
            </a>
            <a href="#form" className="btn btn-urgent-outline" style={{ padding: '14px 28px', fontSize: '15px' }}>
              Описать ситуацию
            </a>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
              Перезвоним вам в течение 15 минут в рабочее время
            </span>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: В КАКИХ СИТУАЦИЯХ МЫ ПОМОГАЕМ (ТИПОВОЙ ШАБЛОН) ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>В каких ситуациях</span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>мы помогаем</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Разберем конфликт с работодателем, оценим документы и сроки, определим, какие требования можно заявить и какой способ защиты подходит в Вашей ситуации.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
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
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: НАПРАВЛЕНИЯ ПОМОЩИ ═══ */}
      <section id="directions" className="section" style={{ padding: '64px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Направления</span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>помощи</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Выберите ситуацию, чтобы узнать, какие нарушения имеют значение, что можно потребовать и как строится работа по делу.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '40px' }}>
            {directions.map((dir, i) => (
              <a key={i} href={dir.link} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div
                  className="card service-card"
                  style={{
                    height: '100%',
                    minHeight: '180px',
                    padding: '30px',
                    background: 'var(--color-white)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.3s',
                    position: 'relative',
                    borderTop: '3px solid var(--color-primary)'
                  }}
                >
                  <div>
                    <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3 }}>
                      {dir.title}
                    </h3>
                    <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      {dir.desc}
                    </p>
                  </div>
                  <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, marginTop: 'auto', transition: 'transform 0.3s' }}>
                    Подробнее
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </a>
            ))}

            {/* Карточка: «Не нашли свою ситуацию?» */}
            <div 
              className="card service-card service-card-span-2" 
              style={{ 
                padding: '32px 36px', 
                background: 'var(--color-deep-blue)', 
                border: '1px solid transparent',
                borderRadius: '0',
                display: 'flex', 
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '28px',
                transition: 'all 0.3s',
                position: 'relative',
                borderTop: '3px solid var(--color-gold)',
                boxShadow: '0 8px 16px rgba(16, 39, 59, 0.28)'
              }}
            >
              <style dangerouslySetInnerHTML={{ __html: `
                .service-card-span-2 {
                  grid-column: span 2;
                }
                @media (max-width: 991px) {
                  .service-card-span-2 {
                    grid-column: span 1 !important;
                    flex-direction: column !important;
                    align-items: flex-start !important;
                  }
                }
                .white-btn-custom {
                  background-color: var(--color-white) !important;
                  color: #10273B !important;
                  border: 1px solid var(--color-white) !important;
                  white-space: nowrap;
                  font-weight: 600;
                  padding: 14px 28px !important;
                  transition: all 0.3s ease !important;
                }
                .white-btn-custom:hover {
                  background-color: var(--color-primary) !important;
                  color: var(--color-white) !important;
                  border-color: var(--color-primary) !important;
                }
              `}} />
              <div style={{ flex: '1 1 300px' }}>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '24px', fontFamily: 'var(--font-serif)', color: 'var(--color-white)', lineHeight: 1.3 }}>
                  Не нашли свою ситуацию?
                </h3>
                <p style={{ margin: '0', fontSize: '16px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.55, maxWidth: '580px' }}>
                  <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Опишите ваш трудовой вопрос в форме. Изучим имеющиеся документы</span>{' '}<span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и предложим возможные варианты решения.</span>
                </p>
              </div>
              <div style={{ flexShrink: 0 }}>
                <a 
                  href="#form" 
                  className="btn white-btn-custom" 
                  style={{ display: 'inline-block', textAlign: 'center', fontSize: '15px' }}
                >
                  Обсудить ситуацию
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 6: КУРАТОР НАПРАВЛЕНИЯ ═══ */}
      <SpecialistBlock
        title="Куратор направления"
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
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>Специализируется на защите работников в спорах об увольнении, невыплате заработной платы и дисциплинарных взысканиях.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>Подготовка мотивированных претензий, расчетов компенсаций, исковых заявлений и представительство в судах и государственных органах.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>Сопровождает доверителей в Липецке и Липецкой области; возможен дистанционный формат работы.</span>
            </li>
          </ul>
        ]}
        buttonText="Задать вопрос юристу"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 7: КЕЙСЫ ═══ */}
      <CasesBlock
        title="Примеры из практики"
        showAllLink="/praktika/"
        showAllText="Смотреть все дела"
        showDemoWarning={true}
        cases={cases}
      />

      {/* ═══ БЛОК 8: КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock
        title="Как проходит работа"
        subtitle="Начать работу можно в офисе, по телефону или видеосвязи. Документы можно передать лично либо направить в электронном виде."
        alignTitle="center"
        steps={steps}
        ctaTitle="Обсудите трудовой спор с юристом"
        ctaSubtitle="Опишите ситуацию — юрист изучит документы и предложит план защиты ваших прав."
        ctaButtonText="Обсудить ситуацию"
        ctaButtonHref="#form"
        footerNote="Для оценки ситуации понадобятся: трудовой договор, приказы, уведомления, расчетные листки или переписка. Возможен дистанционный формат работы."
      />

      {/* ═══ БЛОК 9: СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость юридической помощи"
        subtitle="Стоимость зависит от вида нарушения, стадии спора, объема документов и необходимого состава работы. После консультации юрист определит задачи и согласует стоимость до заключения договора."
        tiers={pricingTiers}
        disclaimer="Стоимость определяется после уточнения обстоятельств дела и изучения имеющихся документов. Состав услуг, цена и порядок оплаты фиксируются в договоре до начала работы. Оплата вознаграждения не включает судебные расходы и государственные пошлины (при наличии)."
      />

      {/* ═══ БЛОК 10: FAQ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы"
        title={<><span>Ответы на</span> <br /><span>частые вопросы</span></>}
        subtitle="О трудовых спорах и защите прав работников"
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
                Обсудите трудовой спор с Мариной Валерьевной Смольяниновой
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '28px', textWrap: 'balance' }}>
                Кратко опишите, что произошло, и оставьте контактные данные. Обращение будет передано Марине Валерьевне Смольяниновой. Она уточнит, какие документы у Вас есть, изучит обстоятельства и согласует с Вами консультацию.
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
