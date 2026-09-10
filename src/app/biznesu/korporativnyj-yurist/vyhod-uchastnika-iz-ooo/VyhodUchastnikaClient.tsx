'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import ProcessBlock, { ProcessStep } from '@/components/ProcessBlock';
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

  const processSteps: ProcessStep[] = [
    {
      num: '01',
      title: 'Анализ устава на право выхода',
      desc: 'Проверяем устав общества на наличие права на выход, отсутствие запретов и наличие нескольких участников в ООО.'
    },
    {
      num: '02',
      title: 'Подготовка заявления для нотариуса',
      desc: 'Составляем проект заявления о выходе, собираем документы, подтверждающие статус участника, и организуем визит к нотариусу.'
    },
    {
      num: '03',
      title: 'Нотариальное действие и подача в ФНС',
      desc: 'Нотариус удостоверяет заявление о выходе и в течение 2 рабочих дней направляет электронное заявление по форме Р13014 в налоговую.'
    },
    {
      num: '04',
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

      {/* ═══ БЛОК 2: ТИПОВЫЕ СИТУАЦИИ / КОНФЛИКТЫ ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'inline-block' }}>Типовые ситуации выхода</span> <br />
              <span style={{ display: 'inline-block' }}>участника из ООО</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Выход позволяет быстро и законно прекратить участие в компании без необходимости согласования с партнерами.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '32px' }}>
            {situations.map((sit, idx) => (
              <div
                key={idx}
                className="hover-lift"
                style={{
                  padding: '36px 30px',
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
              >
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
                  display: 'inline-block',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {sit.tag}
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '20px',
                  fontWeight: 600,
                  color: 'var(--color-deep-blue)',
                  margin: '0 0 14px 0',
                  lineHeight: 1.35,
                  position: 'relative',
                  zIndex: 1
                }}>
                  {sit.title}
                </h3>

                <p style={{
                  fontSize: '15px',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.6,
                  margin: 0,
                  position: 'relative',
                  zIndex: 1
                }}>
                  {sit.desc}
                </p>
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
        title={<><span style={{ display: 'inline-block' }}>Примеры оформления</span> <br /><span style={{ display: 'inline-block' }}>выхода участника из ООО</span></>}
        cases={practiceCases}
        showAllLink="/praktika"
        showAllText="Смотреть всю практику →"
      />

      {/* ═══ БЛОК 6: КАК ПРОХОДИТ РАБОТА (ПОРЯДОК РАБОТЫ) ═══ */}
      <ProcessBlock
        title={<><span style={{ display: 'inline-block' }}>От проверки устава</span> <br /><span style={{ display: 'inline-block' }}>до оформления последствий</span></>}
        subtitle="Прозрачные этапы сопровождения процедуры выхода участника из состава ООО."
        steps={processSteps}
        ctaTitle="Хотите выйти из состава учредителей ООО?"
        ctaSubtitle="Проверим устав компании и подготовим заявление для нотариуса за 1 день."
        ctaButtonText="Проверить устав"
        ctaButtonHref="#form"
      />

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

      {/* ═══ БЛОК 9: СМЕЖНЫЕ НАПРАВЛЕНИЯ ПРАКТИКИ ДЛЯ БИЗНЕСА (ПО ШАБЛОНУ) ═══ */}
      <section className="section bg-light" id="related-services" style={{ padding: '64px 0', background: 'var(--gradient-cream)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '840px', marginBottom: '36px', textAlign: 'left' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '10px'
            }}>
              Смежные направления практики для бизнеса
            </div>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 3.5vw, 34px)', color: 'var(--color-deep-blue)', marginBottom: '14px', marginTop: 0, lineHeight: 1.25 }}>
              <span style={{ display: 'inline-block' }}>Другие корпоративные</span> <br /><span style={{ display: 'inline-block' }}>процедуры и споры</span>
            </h2>
            <p style={{ fontSize: '15.5px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.65, margin: 0, textWrap: 'balance' }}>
              Комплексное юридическое сопровождение собственников бизнеса и участников ООО.
            </p>
          </div>

          <div className={relatedServices.length === 4 ? "grid grid-4" : "grid grid-3"} style={{ gap: '20px', marginBottom: '28px' }}>
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

      {/* ═══ БЛОК 10: ФИНАЛЬНАЯ ФОРМА (СВЯЗАТЬСЯ С НАМИ) — ШАБЛОН ═══ */}
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
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>оценку ситуации</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко опишите ситуацию и оставьте контакты. Юрист изучит первичные документы и свяжется с вами для обсуждения правовой задачи.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация юриста</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните прямо сейчас: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (4742) 20-15-25</a>
                </p>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '6px' }}>
                  Липецк, ул. Советская, д. 35, офис 213 (приём по записи)
                </div>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Конфиденциальность:</strong>
                Не указывайте в форме конфиденциальные данные, коммерческую тайну и закрытые документы. Документы можно передать юристу после согласования защищённого способа связи.
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Написать нам"
                subtitle={
                  <>
                    <span style={{ display: 'inline-block' }}>Оставьте имя и номер телефона. Юрист свяжется с вами</span> <br />
                    <span style={{ display: 'inline-block' }}>в течение 15 минут в рабочее время.</span>
                  </>
                }
                subtext={
                  <>
                    <span style={{ display: 'inline-block' }}>Если вы оставите заявку вечером или в&nbsp;выходной день,</span> <br />
                    <span style={{ display: 'inline-block' }}>мы перезвоним в&nbsp;ближайший рабочий день.</span>
                  </>
                }
                buttonText="Обсудить выход из ООО"
                commentPlaceholder="Кратко опишите ситуацию: размер доли, есть ли согласие партнеров или ограничения в уставе…"
                hiddenFields={[
                  { name: 'source_page', value: '/biznesu/korporativnyj-yurist/vyhod-uchastnika-iz-ooo/' },
                  { name: 'service', value: 'Выход участника из состава ООО' }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
