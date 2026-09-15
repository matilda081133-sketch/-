'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';
import ProcessBlock from '@/components/ProcessBlock';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import PricingBlock, { PricingTier } from '@/components/PricingBlock';

export default function SdelkiKommercheskayaClient() {
  const faqs = [
    {
      q: 'Когда лучше подключать юриста?',
      a: 'До внесения аванса, задатка или обеспечительного платежа и до подписания предварительного договора. Если документы уже подписаны, юрист сначала определит, какие обязательства возникли и какие действия ещё доступны.'
    },
    {
      q: 'Можно заказать только проверку коммерческого объекта?',
      a: 'Да. Состав аудита согласуется заранее: объект и права, продавец, земля, ограничения, арендаторы, корпоративные документы и другие обстоятельства по конкретной сделке. Результат оформляется в согласованном письменном формате.'
    },
    {
      q: 'Вы работаете на стороне покупателя или продавца?',
      a: 'Можем сопровождать любую сторону, но только одну в конкретной сделке. До начала работы проверяем конфликт интересов и фиксируем, чью позицию защищает юридическая компания.'
    },
    {
      q: 'Достаточно ли выписки ЕГРН для безопасной покупки?',
      a: 'Нет. Выписка показывает важную часть зарегистрированных сведений, но не заменяет проверку основания права, полномочий стороны, корпоративных согласий, договоров с пользователями, земли, фактических изменений и условий расчётов.'
    },
    {
      q: 'Проверяете ли вы, подходит объект под наш вид деятельности?',
      a: 'Проверяем юридически значимые сведения: назначение, права на землю, ВРИ, территориальную зону, ограничения и доступные документы. Техническую пригодность, состояние конструкций и соответствие специальным нормам оценивают профильные специалисты.'
    },
    {
      q: 'Может ли юрист гарантировать, что сделку не оспорят?',
      a: 'Нет. Юрист выявляет доступные правовые риски и помогает управлять ими документами и структурой сделки, но не может исключить неизвестные факты, подложные документы, будущие действия третьих лиц или решения суда.'
    },
    {
      q: 'Сопровождаете ли вы расчёты и регистрацию?',
      a: 'Да, если это включено в согласованный объём. Юрист помогает связать оплату, подачу документов, регистрацию перехода права и передачу объекта; конкретный инструмент расчётов выбирается с учётом банка и условий сделки.'
    },
    {
      q: 'Что делать при приостановлении Росреестра?',
      a: 'Нужно сохранить уведомление и весь поданный комплект. Причины и способы устранения различаются, поэтому до повторной подачи следует проверить формулировку уведомления, договор, заявления и недостающие документы.'
    },
    {
      q: 'Проверяете ли вы налоги по сделке?',
      a: 'Юрист по недвижимости отмечает налоговые вопросы, которые могут влиять на структуру и документы. Полный расчёт налоговых последствий и учётную модель согласуют с налоговым специалистом или бухгалтером.'
    },
    {
      q: 'От чего зависят срок и стоимость сопровождения?',
      a: 'От количества и вида объектов, истории прав, структуры сделки, числа сторон, объёма документов, необходимости переговоров, корпоративных согласий, регистрации и привлечения внешних специалистов. Состав и стоимость фиксируются до начала этапа.'
    }
  ];

  const situations = [
    {
      title: 'Покупка объекта',
      desc: 'Нужно проверить права продавца, объект, землю, ограничения и условия расчётов до аванса или подписания договора.',
      tag: 'Покупка'
    },
    {
      title: 'Продажа недвижимости',
      desc: 'Требуется подготовить договор, закрыть риски претензий покупателя, защитить порядок оплаты и зафиксировать передачу.',
      tag: 'Продажа'
    },
    {
      title: (
        <>
          Сложный объект <br />
          или комплекс
        </>
      ),
      desc: 'В сделку входят несколько зданий, земельный участок, сети, оборудование или действующие арендаторы.',
      tag: 'Комплекс'
    },
    {
      title: 'Отказ или приостановление',
      desc: 'Росреестр приостановил регистрацию либо вынес отказ: нужно разобрать причины и подготовить недостающие документы.',
      tag: 'Росреестр'
    },
    {
      title: (
        <>
          Сделка с обременением <br />
          или арендой
        </>
      ),
      desc: 'Объект находится в залоге, под арестом, обременён долгосрочной арендой или имеет неснятые запреты.',
      tag: 'Обременения'
    }
  ];

  const dueDiligenceItems = [
    {
      title: 'Права и история объекта',
      desc: 'Основания возникновения права, цепочка предыдущих сделок, риски оспаривания по банкротным и корпоративным основаниям.'
    },
    {
      title: 'Продавец и правоспособность',
      desc: 'Полномочия подписанта, доверенности, корпоративные одобрения (крупные сделки, заинтересованность), судебные базы.'
    },
    {
      title: 'Обременения и ограничения',
      desc: 'Ипотека, залоги, сервитуты, права третьих лиц, действующие договоры аренды, судебные аресты и запреты.'
    },
    {
      title: 'Правовой статус земли',
      desc: 'Права на земельный участок под объектом (собственность, аренда публичной земли), вид разрешённого использования (ВРИ).'
    },
    {
      title: 'Градостроительные ограничения',
      desc: 'Территориальная зона по ПЗЗ, красные линии, охранные зоны (ЗОУИТ), санитарно-защитные зоны, ограничения застройки.'
    },
    {
      title: (
        <>
          Самовольные изменения <br />
          и реконструкция
        </>
      ),
      desc: 'Сопоставление поэтажных планов и данных ЕГРН с фактическими параметрами объекта, риски признания самовольной постройкой.'
    },
    {
      title: 'Условия расчётов и безопасность',
      desc: 'Безопасная структура расчётов (аккредитив, эскроу, депозит), порядок раскрытия платежа только после регистрации перехода права.'
    }
  ];

  const cases: CaseData[] = [
    {
      title: 'Проверка складского комплекса перед покупкой',
      category: 'Due Diligence склада',
      problem: 'Покупатель планировал приобрести складской комплекс площадью 4 200 кв. м. Продавец настаивал на крупном задатке до предоставления полного комплекта документов.',
      action: 'В ходе проверки выявили неснятое обременение в пользу предыдущего кредитора и расхождения между площадями в ЕГРН и техплане. Разработали проект договора с расчётом через безотзывный аккредитив с условием раскрытия после регистрации.',
      result: 'Продавец устранил расхождения в Росреестре за свой счёт; покупатель безопасно завершил сделку без риска потери аванса.',
      isDemo: false
    },
    {
      title: 'Сопровождение продажи торгового здания',
      category: 'Продажа ТЦ',
      problem: 'Компания продавала отдельно стоящее торговое здание с действующими арендаторами. Покупатель предложил сложный график платежей с отсрочкой.',
      action: 'Подготовили договор купли-продажи с сохранением залога в силу закона до полной оплаты, урегулировали перевод прав по договорам аренды и составили подробный акт приёма-передачи объекта и оборудования.',
      result: 'Сделка успешно зарегистрирована в Росреестре; продавец получил 100% оплаты в строгом соответствии с графиком.',
      isDemo: false
    },
    {
      title: 'Устранение причин приостановления регистрации объекта',
      category: 'Снятие приостановки',
      problem: 'Росреестр приостановил государственную регистрацию перехода права на производственный корпус из-за отсутствия надлежащего корпоративного согласия.',
      action: 'Проанализировали текст уведомления, восстановили цепочку протоколов общего собрания участников, оформили недостающее решение в точном соответствии с уставом и подали дополнительные документы.',
      result: 'Приостановление отменено, переход права собственности зарегистрирован без судебных разбирательств.',
      isDemo: false
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Правовая экспертиза договора',
      price: 'от 15 000 ₽',
      subtitle: 'Анализ предложенного контрагентом договора, выявление скрытых ловушек, протокол разногласий.',
      buttonText: 'Выбрать тариф',
      buttonHref: '#form',
      features: [
        { name: 'Анализ условий договора купли-продажи', value: '✓' },
        { name: 'Проверка порядка расчётов и ответственности', value: '✓' },
        { name: 'Подготовка протокола разногласий', value: '✓' },
        { name: 'Письменные рекомендации по редакции', value: '✓' }
      ],
      popular: false
    },
    {
      title: 'Due Diligence объекта и продавца',
      price: 'от 35 000 ₽',
      subtitle: 'Комплексная юридическая проверка объекта, прав, истории, обременений, земли и судебных рисков.',
      buttonText: 'Выбрать тариф',
      buttonHref: '#form',
      features: [
        { name: 'Проверка истории прав по выпискам ЕГРН', value: '✓' },
        { name: 'Проверка продавца (банкротство, суды, ФССП)', value: '✓' },
        { name: 'Анализ прав на землю и ограничений (ЗОУИТ)', value: '✓' },
        { name: 'Письменное заключение Due Diligence', value: '✓' }
      ],
      popular: true
    },
    {
      title: 'Сопровождение сделки «под ключ»',
      price: 'от 60 000 ₽',
      subtitle: 'Полный юридический цикл от аудита до государственной регистрации перехода права и акта приёма-передачи.',
      buttonText: 'Выбрать тариф',
      buttonHref: '#form',
      features: [
        { name: 'Полный Due Diligence объекта и сторон', value: '✓' },
        { name: 'Разработка индивидуального договора и актов', value: '✓' },
        { name: 'Участие в переговорах и согласование условий', value: '✓' },
        { name: 'Контроль безопасных расчётов и регистрации', value: '✓' }
      ],
      popular: false
    },
    {
      title: 'Снятие приостановления Росреестра',
      price: 'от 25 000 ₽',
      subtitle: 'Анализ причин приостановки или отказа, подготовка недостающих документов и сопровождение регистрации.',
      buttonText: 'Выбрать тариф',
      buttonHref: '#form',
      features: [
        { name: 'Правовой анализ уведомления регистратора', value: '✓' },
        { name: 'Устранение несоответствий в документах', value: '✓' },
        { name: 'Подготовка заявлений и дополнительных пакетов', value: '✓' },
        { name: 'Контроль повторного рассмотрения', value: '✓' }
      ],
      popular: false
    }
  ];

  const relatedServices = [
    {
      title: 'Юридическое сопровождение аренды',
      desc: 'Разработка и проверка договоров аренды коммерческой недвижимости, урегулирование разногласий и споров.',
      link: '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/yuridicheskoe-soprovozhdenie-arendy-kommercheskoy-nedvizhimosti/'
    },
    {
      title: 'Земельно-градостроительное сопровождение',
      desc: 'Права на землю, изменение ВРИ, ПЗЗ, градостроительный аудит участка и защита от ограничений застройки.',
      link: '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/zemelno-gradostroitelnoe-soprovozhdenie/'
    },
    {
      title: 'Сопровождение строительства',
      desc: 'Договоры генерального подряда, проектная документация, контроль приёмки по КС-2/КС-3 и ввод в эксплуатацию.',
      link: '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/yuridicheskoe-soprovozhdenie-stroitelstva/'
    },
    {
      title: 'Строительные споры в арбитраже',
      desc: 'Взыскание задолженности по подряду, защита от необоснованных претензий по качеству и судебная экспертиза.',
      link: '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/stroitelnye-spory/'
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
        '@id': 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/soprovozhdenie-sdelok-s-kommercheskoy-nedvizhimostyu/#service',
        name: 'Сопровождение сделок с коммерческой недвижимостью в Липецке',
        serviceType: 'Юридическое сопровождение покупки и продажи коммерческой недвижимости',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        url: 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/soprovozhdenie-sdelok-s-kommercheskoy-nedvizhimostyu/'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/soprovozhdenie-sdelok-s-kommercheskoy-nedvizhimostyu/#breadcrumb',
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
            name: 'Юрист по недвижимости и строительству',
            item: 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/'
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Сопровождение сделок',
            item: 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/soprovozhdenie-sdelok-s-kommercheskoy-nedvizhimostyu/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/soprovozhdenie-sdelok-s-kommercheskoy-nedvizhimostyu/#faq',
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

      {/* ═══ 1. ПЕРВЫЙ ЭКРАН (HERO) ═══ */}
      <MilitaryHero
        breadcrumbs={
          <>
            <Link href="/" style={{ color: 'var(--color-primary)' }}>Главная</Link> <span style={{ margin: '0 8px' }}>/</span>
            <Link href="/biznesu/" style={{ color: 'var(--color-primary)' }}>Бизнесу</Link> <span style={{ margin: '0 8px' }}>/</span>
            <Link href="/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/" style={{ color: 'var(--color-primary)' }}>Юрист по недвижимости и строительству</Link> <span style={{ margin: '0 8px' }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Сопровождение сделок</span>
          </>
        }
        superTitle={
          <span className="hero-title-span-mobile" style={{ display: 'inline-block' }}>
            Недвижимость и строительство • Сделки бизнеса • Липецк
          </span>
        }
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Сопровождение сделок
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              с коммерческой
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              недвижимостью
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Проверим объект, продавца и историю прав, зафиксируем риски, согласуем условия договора и сопроводим безопасные расчёты и регистрацию в Росреестре.
          </span>
        }
        trustItems={[
          { text: <span><strong>Начинаем до аванса</strong> и подписания предварительного договора</span> },
          { text: <span><strong>Глубокий Due Diligence</strong> объекта, продавца и прав на землю</span> },
          { text: <span><strong>Фиксированная стоимость</strong> и ответственность в договоре</span> }
        ]}
        primaryCtaText="Обсудить сделку"
        primaryCtaLink="#form"
        primaryCtaSubtext={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Перезвоним в течение 15 минут в рабочее время
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              или ответим по телефону: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (4742) 20-15-25</a>
            </span>
          </span>
        }
        secondaryCtaText="Что проверит юрист"
        secondaryCtaLink="#due-diligence"
        imageUrl="/images/nacheshnikov.jpg"
        imageName="Владимир Викторович Начешников"
        imageSubtitle="Специалист по сопровождению сделок и аудиту бизнеса"
        imageObjectPosition="center 15%"
      />

      {/* ═══ 2. КОГДА НУЖЕН ЮРИСТ (СИТУАЦИИ) — ШАБЛОН ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ 
              fontFamily: 'var(--font-serif)', 
              fontSize: 'clamp(28px, 4vw, 42px)', 
              color: 'var(--color-deep-blue)', 
              marginBottom: '16px', 
              marginTop: 0, 
              lineHeight: 1.25, 
              textAlign: 'left' 
            }}>
              <span style={{ display: 'inline-block' }}>Когда бизнесу требуется</span> <br />
              <span style={{ display: 'inline-block' }}>сопровождение сделки</span>
            </h2>
            <p style={{ 
              fontSize: '16px', 
              color: 'var(--color-deep-blue)', 
              opacity: 0.9, 
              fontWeight: 500, 
              margin: 0, 
              lineHeight: 1.6, 
              textAlign: 'left', 
              textWrap: 'balance' 
            }}>
              Подключаемся на любой стадии: до внесения аванса или задатка, при согласовании договора купли-продажи или после получения замечаний Росреестра.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
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
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.06, pointerEvents: 'none' }}>
                  <svg width="100" height="100" viewBox="0 0 24 24" fill="var(--color-deep-blue)">
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
                    marginBottom: '14px',
                    background: 'rgba(193, 160, 102, 0.1)',
                    padding: '4px 10px',
                    alignSelf: 'flex-start',
                    display: 'inline-block',
                    borderRadius: '2px',
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
              </div>
            ))}

            {/* Карточка 6: CTA Экспресс-анализ договора */}
            <div 
              className="hover-lift" 
              style={{
                padding: '36px 30px',
                background: 'linear-gradient(145deg, #10273B 0%, #17324D 100%)',
                border: '1px solid rgba(193, 160, 102, 0.35)',
                borderTop: '3px solid var(--color-gold)',
                boxShadow: '0 8px 30px rgba(16, 39, 59, 0.18)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.1, pointerEvents: 'none' }}>
                <svg width="100" height="100" viewBox="0 0 24 24" fill="#C1A066">
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
                  marginBottom: '14px',
                  background: 'rgba(193, 160, 102, 0.15)',
                  padding: '4px 10px',
                  alignSelf: 'flex-start',
                  display: 'inline-block',
                  borderRadius: '2px'
                }}>
                  Экспертиза проекта
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  margin: '0 0 14px 0',
                  lineHeight: 1.35,
                  position: 'relative',
                  zIndex: 1
                }}>
                  Контрагент настаивает на своём проекте договора?
                </h3>

                <p style={{
                  fontSize: '14.5px',
                  color: '#CBD5E1',
                  lineHeight: 1.6,
                  margin: '0 0 20px 0',
                  position: 'relative',
                  zIndex: 1
                }}>
                  Проверим кабальные условия об ответственности, задатке, одностороннем отказе и сроках до подписания документов.
                </p>
              </div>

              <div style={{ position: 'relative', zIndex: 1, marginTop: 'auto' }}>
                <a
                  href="#form"
                  className="btn btn-gold"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '12px 18px',
                    fontSize: '14px',
                    fontWeight: 700,
                    backgroundColor: 'var(--color-gold)',
                    color: 'var(--color-deep-blue)',
                    borderRadius: '2px',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 12px rgba(193, 160, 102, 0.25)'
                  }}
                >
                  Проверить договор контрагента
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. ЧТО ПРОВЕРИТ ЮРИСТ (DUE DILIGENCE) — ШАБЛОН НАПРАВЛЕНИЙ ═══ */}
      <section className="section bg-light" id="due-diligence" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Комплексный правовой аудит
            </div>
            <h2 className="with-accent" style={{ 
              fontSize: 'clamp(28px, 4vw, 42px)', 
              fontFamily: 'var(--font-serif)', 
              color: 'var(--color-primary)', 
              marginBottom: '16px', 
              marginTop: 0, 
              lineHeight: 1.2,
              textAlign: 'left'
            }}>
              <span style={{ display: 'inline-block' }}>Что проверит юрист:</span> <br />
              <span style={{ display: 'inline-block' }}>7 направлений Due Diligence</span>
            </h2>
            <p style={{ 
              fontSize: '16px', 
              color: 'var(--color-deep-blue)', 
              opacity: 0.9, 
              fontWeight: 500, 
              margin: 0, 
              lineHeight: 1.6, 
              textAlign: 'left',
              textWrap: 'balance' 
            }}>
              Глубокая проверка объекта и сторон сделки. Мы не ограничиваемся одной выпиской ЕГРН и оцениваем скрытые правовые риски.
            </p>
          </div>

          <style dangerouslySetInnerHTML={{ __html: `
            @media (min-width: 992px) {
              .due-diligence-cta-card {
                grid-column: span 2 !important;
              }
            }
            @media (max-width: 991px) {
              .due-diligence-cta-card {
                grid-column: 1 / -1 !important;
              }
            }
          `}} />

          <div className="grid grid-3" style={{ gap: '28px', position: 'relative' }}>
            {dueDiligenceItems.map((item, idx) => (
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
                <h3 style={{ 
                  fontSize: '18px', 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--color-deep-blue)', 
                  margin: '8px 0 14px 0', 
                  lineHeight: 1.35 
                }}>
                  {item.title}
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

            {/* Карточка 8: Завершающая CTA карточка аудита на всю оставшуюся ширину */}
            <div 
              className="hover-lift due-diligence-cta-card"
              style={{
                padding: '36px 36px',
                background: 'linear-gradient(145deg, #10273B 0%, #17324D 100%)',
                border: '1px solid rgba(193, 160, 102, 0.35)',
                borderTop: '4px solid var(--color-gold)',
                boxShadow: '0 8px 30px rgba(16, 39, 59, 0.18)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.1, pointerEvents: 'none' }}>
                <svg width="120" height="120" viewBox="0 0 24 24" fill="#C1A066">
                  <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '24px',
                position: 'relative',
                zIndex: 1
              }}>
                <div style={{ flex: '1 1 340px' }}>
                  <div style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: 'var(--color-gold)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '14px',
                    background: 'rgba(193, 160, 102, 0.15)',
                    padding: '4px 10px',
                    alignSelf: 'flex-start',
                    display: 'inline-block',
                    borderRadius: '2px'
                  }}>
                    Заключение Due Diligence
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '22px',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    margin: '0 0 10px 0',
                    lineHeight: 1.3
                  }}>
                    Нужна оценка объекта до внесения аванса?
                  </h3>

                  <p style={{
                    fontSize: '15px',
                    color: '#CBD5E1',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    Предоставим письменный отчёт с выявленными рисками, ограничениями и юридическими рекомендациями по структуре сделки.
                  </p>
                </div>

                <div style={{ flexShrink: 0 }}>
                  <a
                    href="#form"
                    className="btn btn-gold"
                    style={{
                      display: 'inline-block',
                      textAlign: 'center',
                      padding: '14px 28px',
                      fontSize: '15px',
                      fontWeight: 700,
                      backgroundColor: 'var(--color-gold)',
                      color: 'var(--color-deep-blue)',
                      borderRadius: '2px',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 4px 12px rgba(193, 160, 102, 0.25)'
                    }}
                  >
                    Заказать Due Diligence объекта
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 4. ЧТО ПОДГОТОВИТЬ ДЛЯ СТАРТА — ШАБЛОН ДОКУМЕНТОВ ═══ */}
      <section className="section bg-white" id="documents" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ 
              fontSize: 'clamp(28px, 4vw, 42px)', 
              fontFamily: 'var(--font-serif)', 
              color: 'var(--color-primary)', 
              marginBottom: '16px', 
              marginTop: 0, 
              lineHeight: 1.2,
              textAlign: 'left'
            }}>
              <span style={{ display: 'inline-block' }}>Что подготовить</span> <br />
              <span style={{ display: 'inline-block' }}>для первичной оценки сделки</span>
            </h2>
            <p style={{ 
              fontSize: '16px', 
              color: 'var(--color-deep-blue)', 
              opacity: 0.9, 
              fontWeight: 500, 
              margin: 0, 
              lineHeight: 1.6,
              textAlign: 'left'
            }}>
              Если части документов нет на руках, это не препятствует началу работы. Юрист проверит объект по открытым базам, определит недостающие материалы и поможет получить их.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            {/* Карточка 1: Документы по объекту и правам */}
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
                  Документы по объекту и правам
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Необходимы для подтверждения юридической чистоты коммерческого объекта, истории владения и зарегистрированных ограничений.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Кадастровый номер и выписка из ЕГРН</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Сведения об объекте недвижимости, площади, кадастровой стоимости, назначении и зарегистрированных ограничениях.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Правоустанавливающие договоры</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Договоры купли-продажи, мены, приватизации, акты приёма-передачи и документы предыдущих сделок продавца.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Документы на землю и обременения</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Права на земельный участок под объектом, договоры аренды, ипотеки, залогов и соглашения о сервитутах.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Карточка 2: Документы по сторонам и сделке */}
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
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0 }}>
                  Документы по сделке и сторонам
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Требуются для проверки правоспособности контрагента, полномочий подписантов и чистоты договорных условий.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Проект договора или соглашение об авансе</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Проект договора купли-продажи, предварительный договор, оферта или предложенный проект соглашения о задатке.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Устав и корпоративные согласия</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Устав юридического лица, решение о назначении директора, протокол одобрения крупной сделки или сделки с заинтересованностью.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Полномочия подписантов или приостановка</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Доверенности представителей, согласия супругов, либо уведомление Росреестра о приостановлении регистрации (при наличии).</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 5. КАК ПРОХОДИТ СОПРОВОЖДЕНИЕ (PROCESS BLOCK) ═══ */}
      <ProcessBlock
        title={
          <>
            <span style={{ display: 'inline-block' }}>Этапы сопровождения</span> <br />
            <span style={{ display: 'inline-block' }}>сделки с недвижимостью</span>
          </>
        }
        subtitle="Семь последовательных шагов безопасной покупки или продажи коммерческой недвижимости"
        steps={[
          {
            num: '01',
            title: 'Первичный контакт и аудит',
            desc: 'Фиксируем параметры сделки, запрашиваем исходные выписки и проверяем отсутствие конфликта интересов.'
          },
          {
            num: '02',
            title: 'Due Diligence объекта и продавца',
            desc: 'Проверяем историю перехода прав, обременения, судебные базы, банкротные риски и статус земли.'
          },
          {
            num: '03',
            title: 'Формирование структуры сделки',
            desc: 'Выбираем безопасную модель расчётов: аккредитив, эскроу, депозит нотариуса или залог в силу закона.'
          },
          {
            num: '04',
            title: 'Разработка и согласование договора',
            desc: 'Готовим проект договора купли-продажи с исчерпывающими заверениями об обстоятельствах и штрафными санкциями.'
          },
          {
            num: '05',
            title: 'Подписание и подача в Росреестр',
            desc: 'Контролируем корректность подписания полномочными лицами и сопровождение подачи документов на регистрацию.'
          },
          {
            num: '06',
            title: 'Регистрация перехода права',
            desc: 'Отслеживаем статус регистрационного действия в Росреестре и получаем выписку о зарегистрированном праве.'
          },
          {
            num: '07',
            title: 'Расчёты и передача объекта',
            desc: 'Контролируем раскрытие аккредитива после регистрации и подписание детализированного передаточного акта.'
          }
        ]}
        ctaTitle="Планируете покупку или продажу коммерческого объекта?"
        ctaSubtitle="Подключимся на согласованном этапе и обеспечим финансовую и юридическую безопасность сделки."
        ctaButtonText="Обсудить условия сделки"
        ctaButtonHref="#form"
      />

      {/* ═══ 6. ПРАКТИКА (CASES BLOCK) ═══ */}
      <CasesBlock
        title={
          <>
            <span style={{ display: 'inline-block' }}>Практика сопровождения</span> <br />
            <span style={{ display: 'inline-block' }}>коммерческих сделок</span>
          </>
        }
        cases={cases}
        showDemoWarning={false}
        resultLabel="Результат"
        showAllLink="/praktika"
        showAllText="Смотреть всю практику →"
      />

      {/* ═══ 7. СТОИМОСТЬ (PRICING BLOCK) ═══ */}
      <PricingBlock
        title="Тарифы на сопровождение сделок"
        subtitle="Фиксированная стоимость услуг без скрытых доплат. Состав работ закрепляется в договоре."
        tiers={pricingTiers}
        ctaTitle="Рассчитаем точную стоимость сопровождения сделки"
        ctaSubtitle="Оставьте заявку — юрист по недвижимости изучит параметры объекта и согласует прозрачную смету."
        ctaButtonText="Рассчитать стоимость"
        ctaButtonLink="#form"
      />

      {/* ═══ 8. ВОПРОСЫ И ОТВЕТЫ (FAQ BLOCK) ═══ */}
      <FAQBlock
        superTitle="Вопросы и ответы"
        title={
          <>
            <span style={{ display: 'inline-block' }}>Частые вопросы</span> <br />
            <span style={{ display: 'inline-block' }}>о сделках с недвижимостью</span>
          </>
        }
        subtitle="Разъяснения юриста о сроках, порядке проверки и безопасных расчётах"
        faqs={faqs}
      />

      {/* ═══ 9. СМЕЖНЫЕ НАПРАВЛЕНИЯ ПРАКТИКИ ДЛЯ БИЗНЕСА (ПО ШАБЛОНУ) ═══ */}
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
              Смежные направления практики по недвижимости и строительству
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '24px'
            }}>
              <h2 className="with-accent" style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: 'clamp(24px, 3.5vw, 34px)', 
                color: 'var(--color-deep-blue)', 
                margin: 0, 
                lineHeight: 1.25, 
                flex: '1 1 480px', 
                minWidth: '280px' 
              }}>
                <span style={{ display: "inline-block" }}>Смежные услуги</span> <br />
                <span style={{ display: "inline-block" }}>кластера недвижимости</span>
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
                Комплексная юридическая помощь бизнесу: аренда, градостроительный регламент, подрядные отношения и арбитражные споры.
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

      {/* ═══ 10. ФИНАЛЬНАЯ ФОРМА (СВЯЗАТЬСЯ С НАМИ) — ШАБЛОН ═══ */}
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
                Кратко опишите ситуацию и оставьте контакты. Юрист проверит кадастровый номер и свяжется с вами для предварительного правового разбора сделки.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация юриста по недвижимости</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните прямо сейчас: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (4742) 20-15-25</a>
                </p>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '6px' }}>
                  Липецк, ул. Советская, д. 35, офис 213 (приём по предварительной записи)
                </div>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Конфиденциальность:</strong>
                Не указывайте в форме конфиденциальные данные, коммерческую тайну и закрытые документы. Документы можно передать юристу после согласования защищённого способа связи.
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Обсудить сделку"
                subtitle={
                  <>
                    <span style={{ display: 'inline-block' }}>Оставьте контакты и кадастровый номер объекта. Юрист свяжется с вами</span> <br />
                    <span style={{ display: 'inline-block' }}>в течение 15 минут в рабочее время.</span>
                  </>
                }
                subtext={
                  <>
                    <span style={{ display: 'inline-block' }}>Если вы оставите заявку вечером или в&nbsp;выходной день,</span> <br />
                    <span style={{ display: 'inline-block' }}>мы перезвоним в&nbsp;ближайший рабочий день.</span>
                  </>
                }
                buttonText="Отправить данные на проверку"
                commentPlaceholder="Укажите кадастровый номер, адрес объекта или суть сделки (покупка, продажа, экспертиза договора)…"
                hiddenFields={[
                  { name: 'source_page', value: '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/soprovozhdenie-sdelok-s-kommercheskoy-nedvizhimostyu/' },
                  { name: 'service', value: 'Сопровождение сделок с коммерческой недвижимостью' }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
