'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import PricingBlock, { PricingTier } from '@/components/PricingBlock';
import SpecialistBlock from '@/components/SpecialistBlock';

export default function VyhodUchastnikaClient() {
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
        areaServed: ['Липецк', 'Липецкая область']
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/korporativnyj-yurist/vyhod-uchastnika-iz-ooo/#service',
        name: 'Выход участника из ООО в Липецке',
        serviceType: 'Юридическое сопровождение выхода из состава участников ООО',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        description: 'Сопровождение выхода участника из ООО: проверка устава, подготовка к нотариусу, контроль изменений в ЕГРЮЛ и оформление последствий перехода доли.'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/biznesu/korporativnyj-yurist/vyhod-uchastnika-iz-ooo/#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
          { '@type': 'ListItem', position: 2, name: 'Бизнесу', item: 'https://dejure-help.ru/biznesu/' },
          { '@type': 'ListItem', position: 3, name: 'Корпоративный юрист', item: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/' },
          { '@type': 'ListItem', position: 4, name: 'Выход участника из ООО', item: 'https://dejure-help.ru/biznesu/korporativnyj-yurist/vyhod-uchastnika-iz-ooo/' }
        ]
      }
    ]
  };

  const situations = [
    {
      tag: 'Добровольный выход',
      title: <>Прекращение участия в бизнесе <br />по собственному желанию</>,
      desc: 'Участник решил выйти из проекта, передать долю обществу и зафиксировать право на получение действительной стоимости доли.'
    },
    {
      tag: 'Защита от долгов ООО',
      title: <>Снятие рисков субсидиарной <br />ответственности и штрафов</>,
      desc: 'Официальный выход из состава учредителей для исключения ответственности по новым обязательствам и долгам компании.'
    },
    {
      tag: 'Конфликт с партнёрами',
      title: <>Невозможность продолжать <br />совместную работу</>,
      desc: 'Выход из общества как цивилизованный способ прекращения участия без согласия остальных соучредителей (если это разрешено уставом).'
    },
    {
      tag: 'Со стороны общества',
      title: <>Оформление документов ООО <br />после выхода соучредителя</>,
      desc: 'Распределение доли, перешедшей обществу, между оставшимися участниками, продажа третьему лицу или погашение доли.'
    },
    {
      tag: 'Смена статуса участника',
      title: <>Переход на госслужбу <br />или смена вида деятельности</>,
      desc: 'Срочный выход из состава коммерческих организаций в связи с ограничениями закона о государственной службе или комплаенсом.'
    },
    {
      tag: 'Фиксация даты выхода',
      title: <>Определение отчетного периода <br />для расчета стоимости доли</>,
      desc: 'Точная фиксация даты подачи заявления нотариусу, определяющей бухгалтерский баланс для последующей выплаты активов.'
    }
  ];

  const whatWeCheck = [
    {
      title: 'Прямое разрешение в уставе',
      desc: 'По закону выход участника из ООО возможен только в том случае, если это прямо предусмотрено действующей редакцией устава общества.'
    },
    {
      title: 'Запрет на выход единственного участника',
      desc: 'Выход участников, в результате которого в обществе не остается ни одного участника, а также выход единственного участника категорически запрещены законом.'
    },
    {
      title: 'Нотариальное заявление',
      desc: 'Заявление о выходе подлежит обязательному нотариальному удостоверению. Нотариус сам направляет форму в ФНС и уведомляет общество.'
    },
    {
      title: 'Переход доли к обществу',
      desc: 'Доля переходит к самому ООО с момента внесения соответствующей записи в ЕГРЮЛ, после чего у общества возникает обязанность выплатить стоимость.'
    },
    {
      title: 'Распределение доли обществом',
      desc: 'В течение одного года доля, перешедшая обществу, должна быть распределена между оставшимися участниками или продана.'
    },
    {
      title: 'Срок выплаты действительной стоимости',
      desc: 'Общество обязано выплатить действительную стоимость доли в течение 3 месяцев со дня возникновения обязанности (если иной срок не в уставе).'
    }
  ];

  const practiceCases: CaseData[] = [
    {
      category: 'Выход при конфликте',
      title: 'Сопровождение выхода участника с долей 35% при жестком сопротивлении соучредителей',
      problem: 'Партнеры отказывались выкупать долю участника и блокировали проведение общих собраний, шантажируя убытками компании.',
      action: 'Провели аудит устава, подтвердили право на безусловный выход, подготовили заявление и организовали его нотариальное удостоверение с направлением в ФНС.',
      result: 'Запись в ЕГРЮЛ о выходе внесена за 5 рабочих дней. Доля перешла обществу, клиент освобожден от любых обязательств компании.'
    },
    {
      category: 'Распределение доли',
      title: 'Оформление перехода доли вышедшего учредителя и перераспределение между оставшимися',
      problem: 'После выхода миноритария доля 20% осталась на балансе общества. Оставшимся партнерам требовалось корректно распределить ее без нотариальной купли-продажи.',
      action: 'Подготовили протокол общего собрания о пропорциональном распределении доли общества между оставшимися участниками и подали форму Р13014 в ФНС.',
      result: 'Доля успешно распределена, сведения внесены в ЕГРЮЛ без дополнительных налоговых расходов для общества.'
    },
    {
      category: 'Срочный выход',
      title: 'Срочный выход из состава учредителей 3 компаний для назначения на руководящую должность',
      problem: 'Доверителя утверждали на государственную должность, требовалось в течение 10 дней полностью прекратить участие во всех юридических лицах.',
      action: 'За 2 дня подготовили комплекты документов по 3 обществам, организовали выездное нотариальное удостоверение заявлений и ускоренную подачу в ФНС.',
      result: 'Все записи в ЕГРЮЛ обновлены в установленный срок, проверка комплаенса пройдена успешно.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Анализ устава на право выхода',
      desc: 'Проверяем устав общества на наличие права на выход, отсутствие запретов и наличие нескольких участников в ООО.'
    },
    {
      step: '02',
      title: 'Подготовка заявления для нотариуса',
      desc: 'Составляем проект заявления о выходе, собираем документы, подтверждающие статус участника, и организуем визит к нотариусу.'
    },
    {
      step: '03',
      title: 'Нотариальное действие и подача в ФНС',
      desc: 'Нотариус удостоверяет заявление о выходе и в течение 2 рабочих дней направляет электронное заявление по форме Р13014 в налоговую.'
    },
    {
      step: '04',
      title: 'Контроль ЕГРЮЛ и уведомление общества',
      desc: 'Получаем лист записи ЕГРЮЛ о переходе доли обществу и направляем официальное требование о расчете действительной стоимости доли.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Аудит устава и консультация',
      subtitle: 'Проверка возможности выхода',
      popular: false,
      price: 'от 5 000 ₽',
      features: [
        { name: 'Правовой анализ устава на право выхода', value: 'Включено' },
        { name: 'Оценка налоговых и финансовых последствий', value: 'Включено' },
        { name: 'Инструкция по порядку действий у нотариуса', value: 'Включено' },
        { name: 'Проверка выписки из ЕГРЮЛ', value: 'Включено' }
      ],
      buttonText: 'Заказать аудит устава',
      buttonHref: '#form'
    },
    {
      title: 'Сопровождение выхода под ключ',
      subtitle: 'Полное процедурное сопровождение',
      popular: true,
      badgeText: 'Популярный выбор',
      price: 'от 15 000 ₽',
      features: [
        { name: 'Аудит устава и подготовка заявления о выходе', value: 'Включено' },
        { name: 'Координация нотариального удостоверения', value: 'Включено' },
        { name: 'Контроль регистрации изменений в ЕГРЮЛ', value: 'Включено' },
        { name: 'Подготовка требования о выплате стоимости доли', value: 'Включено' }
      ],
      buttonText: 'Оформить выход под ключ',
      buttonHref: '#form'
    },
    {
      title: 'Оформление последствий для ООО',
      subtitle: 'Распределение доли внутри общества',
      popular: false,
      price: 'от 20 000 ₽',
      features: [
        { name: 'Подготовка протокола о распределении доли', value: 'Включено' },
        { name: 'Оформление заявления по форме Р13014', value: 'Включено' },
        { name: 'Подача и регистрация изменений в ФНС', value: 'Включено' },
        { name: 'Консультирование бухгалтерии по расчету выплаты', value: 'Включено' }
      ],
      buttonText: 'Заказать распределение доли',
      buttonHref: '#form'
    }
  ];

  const faqs = [
    {
      q: 'Нужно ли согласие других участников на выход из ООО?',
      a: 'Нет. Если право на выход прямо предусмотрено уставом общества, согласие других участников или генерального директора не требуется. Выход является безусловным односторонним волеизъявлением участника.'
    },
    {
      q: 'Можно ли выйти из ООО, если в уставе написано, что выход запрещен?',
      a: 'Если устав прямо запрещает выход или не содержит указания на возможность выхода, участник не может подать заявление нотариусу. В таком случае выйти можно через продажу доли другим участникам или третьему лицу, либо потребовать от общества выкупить долю в установленных законом случаях.'
    },
    {
      q: 'С какого момента участник считается вышедшим из компании?',
      a: 'Участник утрачивает статус и права на долю с момента внесения записи о выходе и переходе доли к обществу в ЕГРЮЛ. С этой же даты прекращаются его права на участие в управлении и получение дивидендов.'
    },
    {
      q: 'Что делать, если общество не выплачивает стоимость доли после выхода?',
      a: 'Общество обязано выплатить действительную стоимость доли в течение 3 месяцев со дня выхода. Если выплата задерживается или занижена, подается досудебная претензия, а затем иск в Арбитражный суд Липецкой области о принудительном взыскании с процентами по ст. 395 ГК РФ.'
    }
  ];

  const relatedServices = [
    {
      title: 'Взыскание стоимости доли',
      desc: 'Расчет и судебное взыскание действительной стоимости доли после выхода.',
      link: '/biznesu/korporativnyj-yurist/vzyskanie-dejstvitelnoj-stoimosti-doli/'
    },
    {
      title: 'Сделки с долями ООО',
      desc: 'Купля-продажа доли вместо выхода при запрете в уставе.',
      link: '/biznesu/korporativnyj-yurist/sdelki-s-dolyami-ooo/'
    },
    {
      title: 'Корпоративные споры',
      desc: 'Защита при конфликтах и уклонении общества от расчетов.',
      link: '/biznesu/korporativnyj-yurist/korporativnye-spory-mezhdu-uchastnikami/'
    },
    {
      title: 'Защита корпоративного контроля',
      desc: 'Оспаривание сфальсифицированных заявлений о выходе.',
      link: '/biznesu/korporativnyj-yurist/zashchita-korporativnogo-kontrolya/'
    }
  ];

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
            <Link href="/biznesu/korporativnyj-yurist/">Корпоративный юрист</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Выход участника из ООО</span>
          </>
        }
        superTitle={
          <span style={{ whiteSpace: 'normal', display: 'inline-block', lineHeight: 1.4 }}>
            <span style={{ display: 'inline-block' }}>ПРЕКРАЩЕНИЕ УЧАСТИЯ В ООО •</span> <br />
            <span style={{ display: 'inline-block' }}>Липецк и нотариат</span>
          </span>
        }
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Выход участника из ООО
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Проверка устава на возможность выхода, подготовка документов для нотариуса, контроль регистрации перехода доли к обществу в ЕГРЮЛ и фиксация права на выплату стоимости доли.
          </span>
        }
        primaryCtaText="Проверить возможность выхода"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_corp_vyhod"
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
        imageSubtitle="Специалист по корпоративным процедурам, куратор направления"
        imageObjectPosition="center 15%"
        trustItems={[
          {
            text: (
              <span>
                <strong>Практический опыт с 1997 года</strong> в сопровождении корпоративных процедур
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Полная конфиденциальность</strong> и защита коммерческой тайны бизнеса
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Арбитражный суд Липецкой области</strong> и арбитражные суды РФ
              </span>
            )
          }
        ]}
      />

      {/* ═══ БЛОК 2: СИТУАЦИИ ═══ */}
      <section className="section bg-light" id="situations">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 50px auto' }}>
            <h2 className="section-title" style={{ marginBottom: '16px' }}>
              В каких ситуациях нужно оформить выход участника
            </h2>
            <p className="section-subtitle" style={{ color: 'var(--color-text-secondary)', margin: '0 auto' }}>
              Выход позволяет быстро и законно прекратить участие в компании без необходимости согласования с партнерами.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            {situations.map((sit, idx) => (
              <div
                key={idx}
                className="card service-card"
                style={{
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: '3px solid var(--color-primary)'
                }}
              >
                <div>
                  <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-primary)', fontWeight: 700, marginBottom: '12px' }}>
                    {sit.tag}
                  </div>
                  <h3 style={{ fontSize: '20px', color: 'var(--color-deep-blue)', marginBottom: '14px', lineHeight: 1.35 }}>
                    {sit.title}
                  </h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {sit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: ЧТО ПРОВЕРИТЬ ═══ */}
      <section className="section bg-white" id="check">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 50px auto' }}>
            <h2 className="section-title" style={{ marginBottom: '16px' }}>
              Возможен ли выход именно в вашей ситуации
            </h2>
            <p className="section-subtitle" style={{ color: 'var(--color-text-secondary)', margin: '0 auto' }}>
              Ключевые юридические требования законодательства об ООО, определяющие допустимость процедуры.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            {whatWeCheck.map((chk, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  padding: '32px 26px',
                  backgroundColor: 'var(--color-bg-light)',
                  border: '1px solid var(--color-border)'
                }}
              >
                <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', marginBottom: '12px', lineHeight: 1.4 }}>
                  {chk.title}
                </h3>
                <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {chk.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: КУРАТОР ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Владимир Викторович Начешников"
        position="Специалист по корпоративным процедурам и сопровождению бизнеса, куратор направления"
        imageUrl="/images/nacheshnikov.jpg"
        imagePosition="center 15%"
        profileHref="/specialisty/nacheshnikov-vladimir-viktorovich/"
        profileText="Подробнее о Владимире Викторовиче Начешникове →"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Важно согласовать не только само заявление о выходе, но и его правовые последствия: фиксацию даты баланса и последующий порядок взаиморасчетов.
          </span>,
          <span key="2" style={{ color: 'var(--color-deep-blue)', display: 'block', marginTop: '12px' }}>
            Владимир Викторович организует правовую экспертизу устава, готовит документы для нотариуса и контролирует корректность внесения сведений в ЕГРЮЛ.
          </span>
        ]}
        buttonText="Обсудить процедуру выхода"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 5: КЕЙСЫ ═══ */}
      <CasesBlock
        title="Примеры оформления выхода из ООО"
        cases={practiceCases}
        showAllLink="/praktika"
        showAllText="Смотреть всю практику →"
      />

      {/* ═══ БЛОК 6: КАК ПРОХОДИТ РАБОТА ═══ */}
      <section className="section bg-light" id="process">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 50px auto' }}>
            <h2 className="section-title" style={{ marginBottom: '16px' }}>
              От проверки устава до оформления последствий
            </h2>
            <p className="section-subtitle" style={{ color: 'var(--color-text-secondary)', margin: '0 auto' }}>
              Прозрачные этапы сопровождения процедуры выхода участника из состава ООО.
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '24px' }}>
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  padding: '32px 24px',
                  backgroundColor: 'var(--color-white)',
                  border: '1px solid var(--color-border)'
                }}
              >
                <div style={{ fontSize: '36px', fontWeight: 800, color: 'var(--color-primary)', opacity: 0.25, fontFamily: 'var(--font-serif)', marginBottom: '16px', lineHeight: 1 }}>
                  {step.step}
                </div>
                <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', marginBottom: '12px', lineHeight: 1.4 }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div style={{ marginTop: '48px' }}>
            <div
              className="card service-card cta-banner-card"
              style={{
                padding: '32px 36px',
                background: 'var(--color-deep-blue)',
                borderTop: '3px solid var(--color-gold)',
                boxShadow: '0 8px 16px rgba(16, 39, 59, 0.28)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '24px'
              }}
            >
              <div>
                <h3 style={{ color: 'var(--color-white)', fontSize: '22px', marginBottom: '8px' }}>
                  Хотите выйти из состава учредителей ООО?
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '15px', margin: 0 }}>
                  Проверим устав компании и подготовим заявление для нотариуса за 1 день.
                </p>
              </div>
              <a href="#form" className="btn white-btn-custom">
                Проверить устав
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 7: ТАРИФЫ ═══ */}
      <PricingBlock
        title="Стоимость сопровождения выхода из ООО"
        subtitle="Фиксированная цена юридических услуг. Нотариальные расходы оплачиваются отдельно."
        tiers={pricingTiers}
        ctaTitle="Рассчитаем стоимость выхода из общества"
        ctaSubtitle="Оставьте заявку — куратор направления проведет экспресс-аудит устава и свяжется с вами."
        ctaButtonText="Рассчитать стоимость"
        ctaButtonLink="#form"
      />

      {/* ═══ БЛОК 8: FAQ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы"
        title="Вопросы о выходе участника из ООО"
        subtitle="Разъяснения юристов по процедуре, срокам и последствиям выхода из состава учредителей."
        faqs={faqs}
      />

      {/* ═══ БЛОК 9: СВЯЗАННЫЕ УСЛУГИ ═══ */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 40px auto' }}>
            <h2 className="section-title" style={{ marginBottom: '12px' }}>
              Если выход — не единственный вопрос
            </h2>
            <p className="section-subtitle" style={{ color: 'var(--color-text-secondary)', margin: '0 auto' }}>
              Смежные направления корпоративной практики в Липецке.
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '20px' }}>
            {relatedServices.map((rel, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  padding: '24px 20px',
                  backgroundColor: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <h3 style={{ fontSize: '17px', color: 'var(--color-deep-blue)', marginBottom: '10px' }}>
                    <Link href={rel.link} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {rel.title}
                    </Link>
                  </h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: '16px' }}>
                    {rel.desc}
                  </p>
                </div>
                <Link href={rel.link} style={{ fontSize: '13.5px', color: 'var(--color-primary)', fontWeight: 600 }}>
                  Перейти к услуге →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 10: ФИНАЛЬНАЯ ФОРМА ═══ */}
      <ContactsForm
        title="Проверьте возможность выхода до обращения к нотариусу"
        subtitle="Оставьте заявку на экспресс-аудит. Проверим устав, подготовим документы и сопроводим выход из компании."
        hiddenFields={[{ name: 'service', value: 'Выход участника из ООО' }]}
      />

      <Footer />
    </>
  );
}
