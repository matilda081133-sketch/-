'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';
import ProcessBlock from '@/components/ProcessBlock';
import CasesBlock from '@/components/CasesBlock';
import PricingBlock from '@/components/PricingBlock';

export default function YuristPoNedvizhimostiClient() {
  const [activeTab, setActiveTab] = useState('all');

  const faqs = [
    {
      q: 'Чем юрист отличается от риелтора при покупке квартиры?',
      a: 'Риелтор обычно организует поиск объекта и взаимодействие сторон. Юрист оценивает правовые основания и риски, проверяет документы и условия договора, предлагает способы снизить риск оспаривания, потери денег или невозможности зарегистрировать право. Конкретный объём проверки зависит от объекта и доступных документов.'
    },
    {
      q: 'Можно ли гарантировать юридическую чистоту недвижимости?',
      a: 'Абсолютную гарантию дать нельзя: часть обстоятельств может не отражаться в реестрах или документах. Задача проверки — выявить доступные риски, запросить дополнительные подтверждения, изменить условия сделки или рекомендовать отказаться от неё, если риск нельзя приемлемо снизить.'
    },
    {
      q: 'Достаточно ли выписки ЕГРН?',
      a: 'Нет. Выписка показывает зарегистрированные сведения на дату её формирования, но не заменяет анализ основания права, истории объекта, полномочий стороны, семейных и банкротных рисков, условий расчётов и других обстоятельств конкретной сделки.'
    },
    {
      q: 'Когда лучше обращаться: до аванса или после?',
      a: 'Лучше до передачи аванса или задатка и до подписания документов. Если деньги уже переданы, нужно проверить условия соглашения и не подписывать новые документы без оценки последствий.'
    },
    {
      q: 'Что делать, если Росреестр приостановил регистрацию?',
      a: 'Сначала нужно изучить уведомление и понять причину. Иногда достаточно предоставить или исправить документы; в других случаях требуется участие второй стороны, установление права либо обжалование. Универсально подавать тот же комплект повторно или сразу идти в суд не следует.'
    },
    {
      q: 'Можно ли признать право собственности без договора?',
      a: 'Возможность зависит от основания приобретения, фактических обстоятельств и доказательств. Суд не заменяет отсутствующий документ автоматически. Юрист определит надлежащий способ защиты и круг участников после изучения материалов.'
    },
    {
      q: 'В течение какого срока можно оспорить сделку?',
      a: 'Срок зависит от основания недействительности, момента, когда лицо узнало или должно было узнать о нарушении, и других обстоятельств. Оценивать срок нужно по конкретным требованиям и документам; откладывать анализ после получения иска или выявления проблемы не стоит.'
    },
    {
      q: 'Можно ли узаконить любой самовольно построенный дом или пристройку?',
      a: 'Нет. Учитываются права на землю, допустимость строительства, параметры объекта, безопасность, права третьих лиц и возможность устранить нарушения. До обращения в суд нужно оценить внесудебный путь и риск встречного требования о сносе.'
    },
    {
      q: 'Что можно потребовать от застройщика при недостатках квартиры?',
      a: 'Способ защиты зависит от характера недостатков, условий договора, даты и порядка приёмки, фиксации дефектов и действующего регулирования. Это может быть устранение недостатков, соразмерное уменьшение цены, возмещение обоснованных расходов или иное применимое требование.'
    },
    {
      q: 'Можно ли работать дистанционно?',
      a: 'Консультацию, анализ документов, подготовку позиции и часть процессуальной работы можно проводить дистанционно. Необходимость личного участия, осмотра объекта, экспертизы или заседаний определяется по ситуации.'
    },
    {
      q: 'От чего зависит стоимость?',
      a: 'От вида и количества объектов, числа участников, объёма документов, сложности рисков, стадии регистрации или суда, необходимости переговоров, экспертизы и представительства. Стоимость каждого согласованного этапа фиксируется до его начала.'
    }
  ];

  const cases = [
    {
      category: 'СДЕЛКИ И ПРОВЕРКА',
      title: 'Проверили квартиру перед покупкой и изменили схему сделки',
      problem: 'Покупатель выбрал квартиру на вторичном рынке и планировал внести крупный аванс. Объект несколько раз переходил между родственниками, продавец действовал через представителя, а часть документов стороны предлагали предоставить после подписания.',
      action: 'Проверили основания права и цепочку переходов, полномочия представителя, ограничения и судебные риски; запросили недостающие документы; переработали условия аванса, договора и раскрытия расчётов.',
      result: 'Клиент получил перечень выявленных рисков и провёл сделку только после их устранения, с согласованным порядком регистрации, передачи объекта и доступа продавца к деньгам.',
      isDemo: false
    },
    {
      category: 'ОСПАРИВАНИЕ СДЕЛОК',
      title: 'Защитили покупателя в споре об оспаривании сделки',
      problem: 'После регистрации права прежний собственник потребовал вернуть квартиру, заявив, что при продаже не понимал последствий своих действий. Покупатель уже оплатил объект и начал ремонт.',
      action: 'Проанализировали обстоятельства заключения и исполнения договора, подтверждение расчётов, поведение сторон до и после сделки, собрали документы и свидетельства добросовестности приобретателя, подготовили возражения и позицию по экспертизе.',
      result: 'Суд отказал в возврате квартиры; зарегистрированное право покупателя сохранилось, а заявленные обеспечительные ограничения были сняты после вступления решения в силу.',
      isDemo: false
    },
    {
      category: 'СПОРА С ЗАСТРОЙЩИКОМ',
      title: 'Взыскали расходы на устранение недостатков новостройки',
      problem: 'После передачи квартиры собственники обнаружили промерзание наружной стены, нарушение геометрии оконных проёмов и дефекты стяжки. Застройщик признал только часть недостатков и затягивал ремонт.',
      action: 'Организовали фиксацию дефектов, проверили техническое заключение и расчёт расходов, направили претензию, сформировали требования и представили интересы в суде.',
      result: 'В пользу собственников взысканы подтверждённые расходы на устранение недостатков и иные применимые выплаты; полученные средства позволили выполнить ремонт выбранной подрядной организацией.',
      isDemo: false
    }
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Уточняем ситуацию',
      desc: 'Уточняем объект, участников, цель и текущую стадию. Сообщаем, какие документы нужны для первичной оценки.'
    },
    {
      num: '02',
      title: 'Изучаем документы',
      desc: 'Изучаем документы и доступные сведения. Отделяем устранимые риски от обстоятельств, которые могут потребовать отказа от сделки или судебной защиты.'
    },
    {
      num: '03',
      title: 'Согласуем решение',
      desc: 'Предлагаем варианты, объём работ, стоимость и ожидаемый результат каждого этапа. Фиксируем выбранный вариант в договоре.'
    },
    {
      num: '04',
      title: 'Выполняем действия',
      desc: 'Готовим документы и выполняем согласованные действия: проверка, переговоры, договор, регистрация, претензия, экспертиза или суд.'
    },
    {
      num: '05',
      title: 'Итоговый результат',
      desc: 'Сопровождаем оформление или исполнение результата в пределах договора и сообщаем клиенту о следующих действиях и сроках.'
    }
  ];

  const pricingTiers = [
    {
      title: <>Консультация с анализом документов</>,
      subtitle: 'Первичный разбор',
      popular: false,
      price: 'от ХХХ ₽',
      features: [
        { name: 'Изучение основных материалов', value: '✓' },
        { name: 'Оценка рисков и вариантов', value: '✓' },
        { name: 'Рекомендации по следующему шагу', value: '✓' }
      ],
      buttonText: 'Записаться на консультацию',
      buttonHref: '#form'
    },
    {
      title: <>Проверка юридической чистоты</>,
      subtitle: 'Безопасность сделки',
      popular: true,
      badgeText: 'ВОСТРЕБОВАНО',
      price: 'от ХХХ ₽',
      features: [
        { name: 'Право, история и ограничения', value: '✓' },
        { name: 'Проверка сторон и рисков банкротства', value: '✓' },
        { name: 'Письменное заключение по рискам', value: '✓' }
      ],
      buttonText: 'Заказать проверку',
      buttonHref: '#form'
    },
    {
      title: <>Сопровождение сделки под ключ</>,
      subtitle: 'Комплексная защита',
      popular: false,
      price: 'от ХХХ ₽',
      features: [
        { name: 'Проверка объекта и контрагента', value: '✓' },
        { name: 'Подготовка договора и расчётов', value: '✓' },
        { name: 'Контроль регистрации и передачи', value: '✓' }
      ],
      buttonText: 'Обсудить сделку',
      buttonHref: '#form'
    },
    {
      title: <>Судебная защита и споры</>,
      subtitle: 'Представительство в суде',
      popular: false,
      price: 'от ХХХ ₽',
      features: [
        { name: 'Споры с застройщиками и ДДУ', value: '✓' },
        { name: 'Признание прав и самострой', value: '✓' },
        { name: 'Оспаривание сделок с недвижимостью', value: '✓' }
      ],
      buttonText: 'Рассчитать стоимость',
      buttonHref: '#form'
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
        areaServed: ['Липецк', 'Липецкая область']
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/#service',
        name: 'Услуги юриста по недвижимости в Липецке',
        serviceType: 'Юридическая помощь по недвижимости',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        url: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/',
        description: 'Помощь юриста по недвижимости в Липецке: сопровождение сделок, споры с застройщиком, признание права собственности и оспаривание сделок.'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/#breadcrumbs',
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
            name: 'Гражданам',
            item: 'https://dejure-help.ru/grazhdanam/'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Юрист по недвижимости',
            item: 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/#faq',
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

      {/* ═══ 1. ПЕРВЫЙ ЭКРАН ═══ */}
      <MilitaryHero
        breadcrumbs={
          <>
            <Link href="/" style={{ color: 'var(--color-primary)' }}>Главная</Link> <span style={{ margin: '0 8px' }}>/</span>
            <Link href="/grazhdanam/" style={{ color: 'var(--color-primary)' }}>Гражданам</Link> <span style={{ margin: '0 8px' }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Юрист по недвижимости</span>
          </>
        }
        superTitle="Недвижимость • сделки • право собственности"
        title={<>Юрист по недвижимости <br />в Липецке</>}
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '560px', textWrap: 'balance' }}>
            Проверим документы и правовую историю объекта, оценим риски сделки или спора и предложим способ оформить либо защитить ваше право на недвижимость.
          </span>
        }
        primaryCtaText="Оценить перспективы дела"
        primaryCtaLink="#form"
        primaryCtaAnalytics="re_hero_consultation_click"
        primaryCtaSubtext="Перезвоним в течение 15 минут в рабочее время"
        rightContent={
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', width: '100%' }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '130%',
              height: '130%',
              background: 'radial-gradient(circle, rgba(193, 160, 102, 0.15) 0%, rgba(23, 50, 77, 0.04) 40%, transparent 70%)',
              zIndex: 0,
              pointerEvents: 'none'
            }} />

            <svg style={{ position: 'absolute', top: '40%', left: '85%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', opacity: 0.09, zIndex: 0, pointerEvents: 'none' }} viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="0.6">
              <path d="M3 21h18 M4 21v-2h16v2 M6 19V9 M10 19V9 M14 19V9 M18 19V9 M12 4l-9 5h18l-9-5z M4 9h16"/>
            </svg>

            <div className="mockup-container" style={{ zIndex: 1, margin: 0 }}>
              <div style={{ position: 'absolute', width: '220px', height: '220px', background: 'var(--color-primary)', filter: 'blur(90px)', opacity: 0.12, borderRadius: '50%' }}></div>
              
              <div className="doc-wrapper-float-4">
                <div className="doc-sheet doc-sheet-4">
                  <div style={{ padding: '35px 25px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '30px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end' }}>
                        <div style={{ width: '90px', height: '3px', background: 'rgba(23,50,77,0.2)' }}></div>
                        <div style={{ width: '70px', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>
                    </div>
                    <div style={{ width: '140px', height: '6px', background: 'var(--color-primary)', margin: '0 auto 30px auto' }}></div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ width: '100%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      <div style={{ width: '90%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="doc-wrapper-float-3">
                <div className="doc-sheet doc-sheet-3">
                  <div style={{ padding: '35px 25px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ position: 'absolute', top: '25px', left: '25px', width: '65px', height: '25px', border: '1.5px solid rgba(23, 50, 77, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-5deg)' }}>
                      <span style={{ fontSize: '4px', fontWeight: 'bold', color: 'rgba(23,50,77,0.4)', fontFamily: 'var(--font-serif)' }}>ЕГРН № 48-14/2026</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '35px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end' }}>
                        <div style={{ width: '95px', height: '3px', background: 'rgba(23,50,77,0.2)' }}></div>
                        <div style={{ width: '55px', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>
                    </div>
                    <div style={{ width: '120px', height: '6px', background: 'var(--color-gold)', margin: '0 auto 25px auto' }}></div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ width: '100%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      <div style={{ width: '85%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      />

      {/* ═══ 2. НАВИГАЦИЯ ПО СИТУАЦИЯМ ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
            <span className="badge badge-gold" style={{ marginBottom: '16px' }}>ТИПИЧНЫЕ СИТУАЦИИ</span>
            <h2 className="section-title">С какой ситуацией вы столкнулись?</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Выберите ближайший вариант. Если вопрос затрагивает несколько направлений, определим основной способ защиты после анализа документов.
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '24px' }}>
            {[
              {
                tag: 'ПОКУПКА КВАРТИРЫ',
                title: 'Покупаю недвижимость',
                desc: 'Нужно проверить объект, продавца, документы, договор и порядок расчётов до передачи денег.',
                link: '/grazhdanam/yurist-po-nedvizhimosti/soprovozhdenie-sdelok-s-nedvizhimostyu/',
                btnText: 'Сопровождение сделки'
              },
              {
                tag: 'ПРОДАЖА И ДАРЕНИЕ',
                title: 'Продаю или передаю объект',
                desc: 'Нужно подготовить договор, согласовать условия, регистрацию, расчёты и передачу недвижимости.',
                link: '/grazhdanam/yurist-po-nedvizhimosti/soprovozhdenie-sdelok-s-nedvizhimostyu/',
                btnText: 'Подготовить договор'
              },
              {
                tag: 'СПОР С ЗАСТРОЙЩИКОМ',
                title: 'Застройщик нарушил обязательства',
                desc: 'Просрочка, дефекты, изменение объекта, отказ платить или необходимость выйти из ДДУ.',
                link: '/grazhdanam/yurist-po-nedvizhimosti/spory-s-zastrojshchikom/',
                btnText: 'Споры с застройщиком'
              },
              {
                tag: 'ОФОРМЛЕНИЕ ПРАВ',
                title: 'Право не удаётся оформить',
                desc: 'Не хватает документов, другая сторона уклоняется, право оспаривают или требуется судебное признание.',
                link: '/grazhdanam/yurist-po-nedvizhimosti/priznanie-prava-sobstvennosti-na-nedvizhimost/',
                btnText: 'Признание права'
              },
              {
                tag: 'ОСПАРИВАНИЕ СДЕЛКИ',
                title: 'Сделку хотят отменить',
                desc: 'Предъявлен иск либо есть основания оспорить куплю-продажу, дарение или другую передачу объекта.',
                link: '/grazhdanam/yurist-po-nedvizhimosti/osparivanie-sdelok-s-nedvizhimostyu/',
                btnText: 'Защита или иск'
              },
              {
                tag: 'САМОВОЛЬНАЯ ПОСТРОЙКА',
                title: 'Постройку требуют снести',
                desc: 'Нужно оценить возможность сохранения, оформления и защиты капитального объекта или пристройки.',
                link: '/grazhdanam/yurist-po-nedvizhimosti/legalizaciya-samovolnoj-postrojki/',
                btnText: 'Узаконить постройку'
              },
              {
                tag: 'ПРИОСТАНОВКА В РОСРЕЕСТРЕ',
                title: 'Росреестр приостановил регистрацию',
                desc: 'Определим причину: устранимые замечания, спор о праве или скрытая проблема сделки.',
                link: '#form',
                btnText: 'Разобрать причину'
              },
              {
                tag: 'СЛОЖНАЯ СИТУАЦИЯ',
                title: 'Не знаю, с чего начать',
                desc: 'Опишите объект, участников и текущую стадию — распределим задачу профильному юристу.',
                link: '#form',
                btnText: 'Получить консультацию'
              }
            ].map((card, idx) => (
              <div
                key={idx}
                className="situation-card"
                style={{
                  background: '#FFFFFF',
                  padding: '28px 24px',
                  borderRadius: '16px',
                  border: '1px solid rgba(23, 50, 77, 0.08)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}
              >
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--color-gold)',
                  background: 'rgba(193, 160, 102, 0.1)',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  display: 'inline-block',
                  marginBottom: '16px',
                  alignSelf: 'flex-start'
                }}>
                  {card.tag}
                </span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '12px', lineHeight: 1.3 }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: 1.6, flexGrow: 1, marginBottom: '20px' }}>
                  {card.desc}
                </p>
                <Link
                  href={card.link}
                  className="btn btn-secondary"
                  style={{
                    fontSize: '0.85rem',
                    padding: '8px 16px',
                    textAlign: 'center',
                    borderRadius: '8px',
                    width: '100%'
                  }}
                >
                  {card.btnText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. НАПРАВЛЕНИЯ ПОМОЩИ (УСЛУГИ КЛАСТЕРА) ═══ */}
      <section className="section" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
            <span className="badge badge-gold" style={{ marginBottom: '16px' }}>СПЕЦИАЛИЗАЦИЯ</span>
            <h2 className="section-title">Услуги юриста по недвижимости</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Комплексная юридическая помощь: от экспертизы договоров и безопасных расчётов до защиты в судах всех инстанций.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {[
              {
                title: 'Сопровождение сделок с недвижимостью',
                desc: 'Проверим объект и сторону сделки, подготовим договор, согласуем безопасные расчёты и сопроводим регистрацию и передачу.',
                link: '/grazhdanam/yurist-po-nedvizhimosti/soprovozhdenie-sdelok-s-nedvizhimostyu/'
              },
              {
                title: 'Споры с застройщиком',
                desc: 'Определим вид требований по просрочке, недостаткам или расторжению ДДУ и выстроим претензионную и судебную работу.',
                link: '/grazhdanam/yurist-po-nedvizhimosti/spory-s-zastrojshchikom/'
              },
              {
                title: 'Взыскание неустойки по ДДУ',
                desc: 'Рассчитаем применимые требования, подготовим претензию и иск, сопроводим спор и исполнение судебного решения.',
                link: '/grazhdanam/yurist-po-nedvizhimosti/vzyskanie-neustojki-po-ddu/'
              },
              {
                title: 'Расторжение ДДУ',
                desc: 'Проверим основания и последствия выхода из договора, подготовим уведомление, соглашение или судебные требования.',
                link: '/grazhdanam/yurist-po-nedvizhimosti/rastorzhenie-ddu/'
              },
              {
                title: 'Компенсация за недостатки квартиры',
                desc: 'Поможем зафиксировать дефекты, определить надлежащее требование и взыскать обоснованные расходы или компенсацию.',
                link: '/grazhdanam/yurist-po-nedvizhimosti/nedostatki-kvartiry-i-vzyskanie-rashodov/'
              },
              {
                title: 'Легализация самовольной постройки',
                desc: 'Оценим землю, параметры и документы объекта, возможность внесудебного оформления или признания права через суд.',
                link: '/grazhdanam/yurist-po-nedvizhimosti/legalizaciya-samovolnoj-postrojki/'
              },
              {
                title: 'Признание права собственности',
                desc: 'Установим основание права, подготовим доказательства и добьёмся оформления объекта в административном порядке или через суд.',
                link: '/grazhdanam/yurist-po-nedvizhimosti/priznanie-prava-sobstvennosti-na-nedvizhimost/'
              },
              {
                title: 'Оспаривание сделок с недвижимостью',
                desc: 'Оценим основания недействительности, заявим иск либо выстроим защиту добросовестного приобретателя и сохраним имущество.',
                link: '/grazhdanam/yurist-po-nedvizhimosti/osparivanie-sdelok-s-nedvizhimostyu/'
              }
            ].map((svc, idx) => (
              <div
                key={idx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '32px 28px',
                  border: '1px solid rgba(23, 50, 77, 0.08)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '14px', lineHeight: 1.35 }}>
                    {svc.title}
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
                    {svc.desc}
                  </p>
                </div>
                <Link
                  href={svc.link}
                  style={{
                    color: 'var(--color-gold)',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    textDecoration: 'none'
                  }}
                >
                  Подробнее об услуге <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. ЧТО ПРОВЕРИТ ЮРИСТ (HelpScope с золотыми бейджами) ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
            <span className="badge badge-gold" style={{ marginBottom: '16px' }}>ЮРИДИЧЕСКИЙ АНАЛИЗ</span>
            <h2 className="section-title">Что проверяем до сделки или выбора способа защиты</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Выявляем скрытые риски, которые можно установить по документам, реестрам и официальным базам данных, и предлагаем способы их законного устранения.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {[
              {
                num: '01',
                title: 'Объект и сведения ЕГРН',
                desc: 'Правообладатели, актуальные характеристики, ограничения, обременения, аресты и зарегистрированные притязания третьих лиц в доступном объёме.'
              },
              {
                num: '02',
                title: 'Основания права и переходы',
                desc: 'Договоры купли-продажи, дарения, наследование, приватизация, судебные акты, полномочия представителей и нотариальные согласия.'
              },
              {
                num: '03',
                title: 'Статус и риски сторон',
                desc: 'Дееспособность в юридически доступных пределах, полномочия, семейный статус супругов, исполнительные производства, долги ФССП и риски банкротства.'
              },
              {
                num: '04',
                title: 'Договор и порядок расчётов',
                desc: 'Существенные условия, цена, сроки, заверения об обстоятельствах, ответственность, условия безопасного доступа к деньгам и передача объекта по акту.'
              },
              {
                num: '05',
                title: 'ДДУ и новостройки',
                desc: 'Договор долевого участия, перенос сроков, односторонние акты, претензии, строительные дефекты, экспертные заключения и ограничения на выплаты.'
              },
              {
                num: '06',
                title: 'Самовольные объекты',
                desc: 'Права на земельный участок, градостроительные регламенты, ПЗЗ, технические характеристики постройки, позиция администрации и перспективы суда.'
              },
              {
                num: '07',
                title: 'Судебная перспектива',
                desc: 'Определение надлежащих сторон, основание требований, исковая давность, доказательства, обеспечительные меры и исполнимость судебного решения.'
              }
            ].map((step, idx) => (
              <div
                key={idx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '32px 24px 24px 24px',
                  border: '1px solid rgba(23, 50, 77, 0.08)',
                  borderTop: '4px solid var(--color-gold)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '24px',
                  background: 'linear-gradient(135deg, var(--color-gold) 0%, #D4AF37 100%)',
                  color: '#FFFFFF',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  padding: '3px 12px',
                  borderRadius: '20px',
                  letterSpacing: '0.05em',
                  boxShadow: '0 2px 6px rgba(193, 160, 102, 0.4)'
                }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-primary)', marginTop: '6px', marginBottom: '12px' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.93rem', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 5. КЕЙСЫ ═══ */}
      <CasesBlock
        title="Примеры задач по недвижимости"
        showDemoWarning={false}
        resultLabel="Результат"
        cases={cases}
      />

      {/* ═══ 6. ПРОЦЕСС РАБОТЫ ═══ */}
      <ProcessBlock
        title="Как проходит работа"
        subtitle="Пять последовательных шагов от первичного анализа документов до завершения сделки или исполнения решения суда."
        steps={processSteps}
      />

      {/* ═══ 7. ДОКУМЕНТЫ ДЛЯ АНАЛИЗА ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
            border: '1px solid rgba(23, 50, 77, 0.08)',
            borderRadius: '20px',
            padding: '48px 40px',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.03)'
          }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <span className="badge badge-gold" style={{ marginBottom: '16px' }}>ПОДГОТОВКА</span>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '16px' }}>
                Что можно подготовить к первой встрече
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '28px' }}>
                Если части документов нет, всё равно обратитесь за консультацией. На первичном разборе мы определим, что необходимо запросить и какие действия нельзя откладывать.
              </p>

              <div className="grid grid-2" style={{ gap: '16px' }}>
                {[
                  'Выписка из ЕГРН и правоустанавливающие документы на объект',
                  'Проект договора, ДДУ, предварительный договор, соглашение об авансе или задатке',
                  'Уведомление Росреестра о приостановлении или отказе в регистрации',
                  'Претензии, ответы, переписка с продавцом, застройщиком или госорганами',
                  'Акт приёма-передачи, дефектная ведомость, заключение специалиста или смета',
                  'Исковое заявление, повестка, решение суда (если спор уже находится в суде)',
                  'Документы на земельный участок и технический план (для вопроса о самострое)'
                ].map((doc, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: 'rgba(193, 160, 102, 0.15)',
                      color: 'var(--color-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      flexShrink: 0,
                      marginTop: '2px'
                    }}>
                      ✓
                    </div>
                    <span style={{ fontSize: '0.95rem', color: 'var(--color-text-main)', lineHeight: 1.5 }}>
                      {doc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 8. СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость услуг юриста по недвижимости"
        subtitle="Цена зависит от количества объектов, объёма документов, стадии регистрации или спора, необходимости проведения экспертизы и судебного представительства."
        tiers={pricingTiers}
      />

      <div className="container" style={{ marginTop: '-40px', marginBottom: '60px' }}>
        <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          * Отдельно при необходимости оплачиваются государственная пошлина, нотариальные тарифы, независимая оценка, строительно-техническая экспертиза, выписки из ЕГРН и услуги кадастрового инженера. Состав расходов согласуется до начала работы.
        </p>
      </div>

      {/* ═══ 9. ГРАНИЦЫ НАПРАВЛЕНИЯ И СМЕЖНЫЕ ВОПРОСЫ ═══ */}
      <section className="section" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
            <span className="badge badge-gold" style={{ marginBottom: '16px' }}>МАРШРУТИЗАЦИЯ</span>
            <h2 className="section-title">Границы направления и смежные вопросы</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Если ваш вопрос выходит за рамки классических сделок с недвижимостью, мы подключим профильных юристов других практик компании «Де-Юре».
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            {[
              {
                topic: 'Жилищные споры и ЖКХ',
                details: 'Вселение, выселение, выписка через суд, приватизация, соцнаём, споры с управляющей компанией, заливы квартир и перепланировка.',
                link: '/grazhdanam/zhilishchnyj-yurist/',
                label: 'Жилищный юрист'
              },
              {
                topic: 'Земельные участки и границы',
                details: 'Межевание, реестровые ошибки, наложение границ, сервитут, изменение вида разрешённого использования (ВРИ) и снижение кадастровой стоимости.',
                link: '/grazhdanam/zemelnyj-yurist/',
                label: 'Земельный юрист'
              },
              {
                topic: 'Семейный раздел имущества',
                details: 'Раздел совместно нажитой недвижимости супругов при разводе, брачные договоры, соглашения о разделе жилья и ипотечных обязательств.',
                link: '/grazhdanam/semejnyj-yurist/',
                label: 'Семейный юрист'
              },
              {
                topic: 'Наследственные споры',
                details: 'Оформление наследства на квартиру или дом, восстановление срока принятия, выдел обязательной доли и оспаривание завещания.',
                link: '/grazhdanam/nasledstvennyj-yurist/',
                label: 'Наследственный юрист'
              },
              {
                topic: 'Ипотечные долги и залоги',
                details: 'Споры с банками по кредитным договорам, обращение взыскания на заложенную квартиру, защита от торгов и сохранение единственного жилья.',
                link: '/grazhdanam/kreditnyj-yurist/',
                label: 'Кредитный юрист'
              },
              {
                topic: 'Коммерческая недвижимость (B2B)',
                details: 'Сделки юридических лиц и ИП с нежилыми помещениями, складами, арендой, строительные подряды и арбитражные споры.',
                link: '/biznesu/arbitrazhnyj-yurist/',
                label: 'Арбитражный юрист'
              }
            ].map((rel, idx) => (
              <div
                key={idx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  border: '1px solid rgba(23, 50, 77, 0.08)',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '10px' }}>
                    {rel.topic}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.55, marginBottom: '20px' }}>
                    {rel.details}
                  </p>
                </div>
                <Link
                  href={rel.link}
                  style={{
                    color: 'var(--color-gold)',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  {rel.label} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 10. ЧАСТЫЕ ВОПРОСЫ (FAQ) ═══ */}
      <FAQBlock
        faqs={faqs}
        title={<>Ответы на частые вопросы <br />по недвижимости</>}
        subtitle="Юридические разъяснения по проверке объектов, спорам с застройщиками, самовольным постройкам и судебной практике."
        ctaText="Задать свой вопрос"
        ctaLink="#form"
      />

      {/* ═══ 11. ФИНАЛЬНАЯ ФОРМА ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start' }}>
              <span className="badge badge-gold" style={{ marginBottom: '16px', alignSelf: 'flex-start' }}>
                КОНСУЛЬТАЦИЯ
              </span>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
                Передайте ситуацию на первичный разбор
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '32px' }}>
                Укажите объект, вашу роль, что уже произошло и какие документы есть на руках. Мы определим профиль услуги, сообщим, что потребуется для правового анализа, и согласуем следующий шаг.
              </p>

              <div style={{
                background: 'var(--color-bg-light)',
                borderRadius: '16px',
                padding: '24px 28px',
                border: '1px solid rgba(23, 50, 77, 0.08)',
                marginTop: 'auto'
              }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '8px' }}>
                  Офис в Липецке
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.6 }}>
                  г. Липецк, ул. Советская, д. 35, офис 213.<br />
                  Телефон: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>+7 (4742) 20-15-25</a><br />
                  Пн–Пт с 9:00 до 18:00. Возможно дистанционное ведение дел.
                </p>
              </div>
            </div>

            <div>
              <ContactsForm title="Написать нам" subtitle="" buttonText="Оставить заявку" commentPlaceholder="Кратко опишите ситуацию по недвижимости…" hiddenFields={[{ name: 'service', value: 'Юрист по недвижимости' }]} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
