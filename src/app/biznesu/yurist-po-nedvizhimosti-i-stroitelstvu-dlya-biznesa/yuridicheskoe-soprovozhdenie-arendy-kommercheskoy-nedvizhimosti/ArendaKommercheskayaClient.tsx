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

export default function ArendaKommercheskayaClient() {
  const faqs = [
    {
      q: 'Когда лучше подключать юриста?',
      a: 'До подписания предварительных документов и перечисления обеспечения. Но помощь возможна и по действующему договору: при изменениях, уведомлениях, расчётах и возврате объекта.'
    },
    {
      q: 'Вы работаете и с арендаторами, и с арендодателями?',
      a: 'Да, но только за одну сторону конкретного вопроса. Перед принятием поручения проверяется конфликт интересов и фиксируется объём представительства.'
    },
    {
      q: 'Достаточно ли проверить только договор?',
      a: 'Не всегда. Риск может находиться в правах на объект, схеме помещения, полномочиях стороны, приложениях, правилах эксплуатации, переписке и фактическом порядке передачи.'
    },
    {
      q: 'Что важнее всего проверить арендатору?',
      a: 'Назначение и доступность объекта, полный состав платежей, порядок индексации, ремонт и улучшения, ответственность, условия одностороннего выхода и возврата обеспечения.'
    },
    {
      q: 'Что важно предусмотреть арендодателю?',
      a: 'Определённый объект и цель использования, надёжную платёжную модель, обеспечение, правила эксплуатации и ремонта, доказательства нарушений, прекращение договора и порядок возврата площади.'
    },
    {
      q: 'Нужно ли регистрировать договор аренды?',
      a: 'Договор аренды здания, сооружения или нежилого помещения, заключённый на срок не менее одного года, подлежит государственной регистрации и считается заключённым для третьих лиц с момента регистрации. Договоры на срок менее года не регистрируются.'
    },
    {
      q: 'Как защитить неотделимые улучшения?',
      a: 'В договоре необходимо детально согласовать право на проведение работ, перечень улучшений, смету, порядок согласования проектной документации и компенсацию стоимости либо освобождение от арендной платы на время ремонта (арендные каникулы).'
    },
    {
      q: 'Как правильно расторгнуть договор досрочно?',
      a: 'Следует проверить основания досрочного расторжения: право на немотивированный односторонний отказ (ст. 310 ГК РФ), срок предварительного уведомления (обычно 1-3 месяца), штрафные санкции (плату за отказ) и процедуру передачи объекта по акту.'
    },
    {
      q: 'Что делать при споре о возврате обеспечительного платежа?',
      a: 'Сопоставить акты приёма-передачи при въезде и выезде, фотофиксацию, расчёты по коммунальным и эксплуатационным услугам. При неправомерном удержании направить мотивированную претензию, а затем иск в арбитражный суд с начислением процентов по ст. 395 ГК РФ.'
    },
    {
      q: 'От чего зависят срок и стоимость сопровождения аренды?',
      a: 'От формата помощи (разовая экспертиза, разработка индивидуального договора под ключ или сопровождение сложных переговоров), площади объекта и перечня спорных условий.'
    }
  ];

  const situations = [
    {
      title: 'Вход в аренду и согласование договора',
      desc: 'Арендодатель или арендатор предлагает свой шаблон. Нужно выявить скрытые риски, несбалансированные штрафы и подготовить протокол разногласий.',
      tag: 'Заключение договора'
    },
    {
      title: 'Арендные каникулы и ремонт (fit-out)',
      desc: 'Согласование проектных работ, компенсации неотделимых улучшений, сроков доступа и ответственности за нарушение графиков.',
      tag: 'Ремонт и каникулы'
    },
    {
      title: 'Изменение ставки и условий договора',
      desc: 'Арендодатель повышает арендную плату или эксплуатационные расходы. Проверяем правомерность индексации и формулировки договора.',
      tag: 'Индексация'
    },
    {
      title: 'Досрочное расторжение и выход',
      desc: 'Бизнесу необходимо закрыть точку или сменить локацию. Оцениваем условия немотивированного отказа, плату за выход и сроки уведомления.',
      tag: 'Расторжение'
    },
    {
      title: 'Задолженность и удержание имущества',
      desc: 'Конфликт по оплате: ограничение доступа в помещение, отключение коммунальных услуг, удержание оборудования арендатора.',
      tag: 'Конфликт'
    }
  ];

  const checkItems = [
    {
      title: 'Права и полномочия арендодателя',
      desc: 'Проверка цепочки прав на объект, выписки ЕГРН, полномочий подписанта и согласия залогодержателя (банка).'
    },
    {
      title: 'Идентификация помещения и границы',
      desc: 'Точное описание предмета аренды: поэтажный план БТИ, экспликация, границы, кадастровый номер и площадь.'
    },
    {
      title: 'Структура арендной платы и расчёты',
      desc: 'Разделение базовой ставки, переменной части, коммунальных платежей, эксплуатационных расходов и НДС.'
    },
    {
      title: 'Регламент индексации ставки',
      desc: 'Ограничение частоты пересмотра платы (не чаще 1 раза в год), привязка к уровню инфляции и предельный процент роста.'
    },
    {
      title: 'Обеспечительный платёж (депозит)',
      desc: 'Закрытый перечень оснований для удержания, срок возврата при прекращении договора и запрет штрафных вычетов.'
    },
    {
      title: 'Неотделимые улучшения и ремонт',
      desc: 'Порядок согласования перепланировок, компенсация стоимости улучшений или зачёт в счёт аренды (каникулы).'
    },
    {
      title: 'Эксплуатация и разграничение ответственности',
      desc: 'Зоны ответственности за коммуникации, пожарную безопасность, текущий и капитальный ремонт здания.'
    },
    {
      title: 'Досрочный выход и плата за отказ',
      desc: 'Право на немотивированный односторонний отказ, сроки заблаговременного уведомления и порядок возврата площади.'
    }
  ];

  const cases: CaseData[] = [
    {
      title: 'Согласование договора аренды склада 3 000 кв. м для ритейлера',
      category: 'Аренда склада',
      problem: 'Арендатор планировал снять складской комплекс. Проект арендодателя содержал ежедневную неустойку за просрочку платежей в размере 0.5% и запрет на компенсацию улучшений.',
      action: 'Подготовили протокол разногласий, провели раунд переговоров, снизили штрафные санкции до рыночных значений, зафиксировали арендные каникулы 45 дней и регламент согласования неотделимых улучшений.',
      result: 'Подписан сбалансированный договор аренды на 5 лет с государственной регистрацией в Росреестре.',
      isDemo: false
    },
    {
      title: 'Защита арендодателя бизнес-центра при задолженности арендатора',
      category: 'Взыскание аренды',
      problem: 'Арендатор офисного блока прекратил выплату арендной платы и уклонялся от подписания акта возврата помещения, бросив офисную технику.',
      action: 'Направили уведомление об одностороннем отказе от договора, провели комиссионный осмотр с описью имущества с участием независимых свидетелей, передали помещение новому арендатору и взыскали долг с обеспечением.',
      result: 'Помещение возвращено в коммерческий оборот без простоев; задолженность погашена за счёт удержания обеспечения и досудебного соглашения.',
      isDemo: false
    },
    {
      title: 'Возврат обеспечительного платежа 1.8 млн ₽ арендатору',
      category: 'Возврат депозита',
      problem: 'После окончания срока аренды арендодатель удержал депозит в размере 1 800 000 ₽, сославшись на необходимость косметического ремонта торгового зала.',
      action: 'Сопоставили первичный акт приёма-передачи с возвратным актом, доказали естественный эксплуатационный износ по ст. 622 ГК РФ, составили досудебную претензию с расчётом процентов по ст. 395 ГК РФ.',
      result: 'Арендодатель вернул 100% обеспечительного платежа до обращения в арбитражный суд.',
      isDemo: false
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Правовая экспертиза договора',
      price: 'от 12 000 ₽',
      subtitle: 'Анализ договора аренды, оценка рисков, подготовка протокола разногласий и защитных формулировок.',
      buttonText: 'Выбрать тариф',
      buttonHref: '#form',
      features: [
        { name: 'Постатейный аудит договора и приложений', value: '✓' },
        { name: 'Проверка условий индексации и штрафов', value: '✓' },
        { name: 'Составление протокола разногласий', value: '✓' },
        { name: 'Письменные рекомендации юриста', value: '✓' }
      ],
      popular: false
    },
    {
      title: 'Разработка индивидуального договора',
      price: 'от 20 000 ₽',
      subtitle: 'Разработка индивидуального договора аренды нежилого помещения или здания под задачи вашего бизнеса.',
      buttonText: 'Выбрать тариф',
      buttonHref: '#form',
      features: [
        { name: 'Учёт специфики деятельности и объекта', value: '✓' },
        { name: 'Детальный регламент расчётов и каникул', value: '✓' },
        { name: 'Акты приёма-передачи и возврата', value: '✓' },
        { name: 'Защита обеспечительного платежа', value: '✓' }
      ],
      popular: true
    },
    {
      title: 'Сопровождение переговоров и сделки',
      price: 'от 40 000 ₽',
      subtitle: 'Участие юриста в согласовании условий с контрагентом, защита позиции и регистрация в Росреестре.',
      buttonText: 'Выбрать тариф',
      buttonHref: '#form',
      features: [
        { name: 'Участие в переговорах сторон', value: '✓' },
        { name: 'Согласование финальной редакции', value: '✓' },
        { name: 'Подготовка пакета для Росреестра', value: '✓' },
        { name: 'Контроль государственной регистрации', value: '✓' }
      ],
      popular: false
    },
    {
      title: 'Досудебное расторжение и споры',
      price: 'от 30 000 ₽',
      subtitle: 'Правовое сопровождение досрочного выхода из аренды, возврат обеспечительного платежа или взыскание долга.',
      buttonText: 'Выбрать тариф',
      buttonHref: '#form',
      features: [
        { name: 'Оценка правомерности расторжения', value: '✓' },
        { name: 'Подготовка уведомлений и претензий', value: '✓' },
        { name: 'Составление акта возврата помещения', value: '✓' },
        { name: 'Мировое соглашение о взаиморасчётах', value: '✓' }
      ],
      popular: false
    }
  ];

  const relatedServices = [
    {
      title: 'Сопровождение сделок с недвижимостью',
      desc: 'Due Diligence объекта, продавца и земли, договор купли-продажи и регистрация перехода прав.',
      link: '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/soprovozhdenie-sdelok-s-kommercheskoy-nedvizhimostyu/'
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
        '@id': 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/yuridicheskoe-soprovozhdenie-arendy-kommercheskoy-nedvizhimosti/#service',
        name: 'Юридическое сопровождение аренды коммерческой недвижимости в Липецке',
        serviceType: 'Юридические услуги по аренде коммерческой недвижимости',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        url: 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/yuridicheskoe-soprovozhdenie-arendy-kommercheskoy-nedvizhimosti/'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/yuridicheskoe-soprovozhdenie-arendy-kommercheskoy-nedvizhimosti/#breadcrumb',
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
            name: 'Сопровождение аренды',
            item: 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/yuridicheskoe-soprovozhdenie-arendy-kommercheskoy-nedvizhimosti/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/yuridicheskoe-soprovozhdenie-arendy-kommercheskoy-nedvizhimosti/#faq',
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
            <span style={{ color: 'var(--color-text-main)' }}>Сопровождение аренды</span>
          </>
        }
        superTitle={
          <span className="hero-title-span-mobile" style={{ display: 'inline-block' }}>
            Недвижимость и строительство • Аренда для бизнеса • Липецк
          </span>
        }
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Юридическое сопровождение
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              аренды коммерческой
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              недвижимости
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Проверим и согласуем договор аренды, защитим интересы арендатора или арендодателя, сопроводим изменение условий, расторжение и возврат объекта.
          </span>
        }
        trustItems={[
          { text: <span><strong>Работаем за одну сторону</strong> в конкретной сделке</span> },
          { text: <span><strong>Фиксируем риски и правки</strong> в протоколе разногласий</span> },
          { text: <span><strong>Стоимость и состав работ</strong> закреплены в договоре</span> }
        ]}
        primaryCtaText="Обсудить договор аренды"
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
        secondaryCtaLink="#what-we-check"
        imageUrl="/images/nacheshnikov.jpg"
        imageName="Владимир Викторович Начешников"
        imageSubtitle="Специалист по аренде и договорам коммерческой недвижимости"
        imageObjectPosition="center 15%"
      />

      {/* ═══ 2. КОГДА НУЖЕН ЮРИСТ ПО АРЕНДЕ (СИТУАЦИИ) — ШАБЛОН ═══ */}
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
              <span style={{ display: 'inline-block' }}>юрист по коммерческой аренде</span>
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
              Сопровождаем договоры аренды офисов, торговых центров, складов и производственных комплексов на любой стадии отношений.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {situations.map((sit, idx) => (
              <div
                key={idx}
                className="card hover-lift"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  borderRadius: '0',
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
                onClick={() => {
                  const el = document.getElementById('form');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else window.location.hash = 'form';
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
                  <span>Урегулировать аренду</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            ))}

            {/* Карточка 6: CTA Экспресс-аудит аренды */}
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
                  Возврат помещения
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
                  Спор по возврату помещения или обеспечительного платежа?
                </h3>

                <p style={{
                  fontSize: '14.5px',
                  color: '#CBD5E1',
                  lineHeight: 1.6,
                  margin: '0 0 20px 0',
                  position: 'relative',
                  zIndex: 1
                }}>
                  Оценим основания удержания депозита, сопоставим акты приёма-передачи и защитим права в досудебном и судебном порядке.
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
                  Урегулировать спор по аренде
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. ЧТО ПРОВЕРИМ И СОГЛАСУЕМ (ПО ШАБЛОНУ НАПРАВЛЕНИЙ) ═══ */}
      <section className="section bg-light" id="what-we-check" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
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
              Правовой аудит договора
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
              <span style={{ display: 'inline-block' }}>Что проверит и согласует юрист</span> <br />
              <span style={{ display: 'inline-block' }}>в договоре коммерческой аренды</span>
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
              8 ключевых параметров безопасности, защищающих финансовые интересы сторон и исключающих внезапные убытки.
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '24px', position: 'relative' }}>
            {checkItems.map((item, idx) => (
              <div
                key={idx}
                className="hover-lift"
                style={{
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  padding: '32px 26px 28px 26px',
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
                  left: '20px',
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
                  fontSize: '17px', 
                  fontFamily: 'var(--font-serif)', 
                  color: 'var(--color-deep-blue)', 
                  margin: '8px 0 12px 0', 
                  lineHeight: 1.35 
                }}>
                  {item.title}
                </h3>
                <p style={{ 
                  fontSize: '14px', 
                  color: 'var(--color-text-secondary)', 
                  lineHeight: 1.55, 
                  margin: 0 
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. ЧТО ПОДГОТОВИТЬ ДЛЯ АНАЛИЗА — ШАБЛОН ДОКУМЕНТОВ ═══ */}
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
              <span style={{ display: 'inline-block' }}>для правового анализа аренды</span>
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
              Для первичного разговора достаточно проекта договора, адреса объекта и роли стороны. Конфиденциальные документы передаются после согласования условий связи.
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
                  Документы по объекту и полномочиям
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Необходимы для проверки законности владения, отсутствия запретов и соответствия помещения техническим планам.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Выписка из ЕГРН на здание или помещение</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Сведения о зарегистрированных правах арендодателя, назначении объекта и наличии ипотеки или арестов.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Поэтажный план и экспликация БТИ</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Границы передаваемой площади, планы коммуникаций, отсутствие неузаконенных перепланировок.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Документы полномочий и согласие банка</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Доверенность на подписание, устав, согласие банка-залогодержателя на передачу объекта в аренду.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Карточка 2: Договорная документация и переписка */}
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
                  Договорная документация и переписка
                </h3>
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Требуются для анализа баланса прав и обязанностей, финансовых условий и регламента расторжения.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Проект или действующий договор аренды</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Полный текст договора со всеми приложениями, правилами ТЦ/БЦ и дополнительными соглашениями.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Акты приёма-передачи и платёжные документы</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Первичный передаточный акт с фиксацией состояния, платёжки об обеспечительном платеже и счетах.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '2px' }}>Претензии, уведомления и деловая переписка</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Письма об индексации, уведомления об одностороннем отказе, претензии о возврате депозита.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 5. ЭТАПЫ СОПРОВОЖДЕНИЯ АРЕНДЫ (PROCESS BLOCK) ═══ */}
      <ProcessBlock
        title={
          <>
            <span style={{ display: 'inline-block' }}>Порядок юридического</span> <br />
            <span style={{ display: 'inline-block' }}>сопровождения аренды</span>
          </>
        }
        subtitle="Шесть последовательных шагов от первичного аудита до защиты интересов при расторжении договора"
        steps={[
          {
            num: '01',
            title: 'Анализ договора и условий',
            desc: 'Изучаем проект договора, ставки, каникулы, скрытые платежи и распределение ответственности.'
          },
          {
            num: '02',
            title: 'Карта рисков и разногласия',
            desc: 'Формируем письменную таблицу рисков и подготавливаем юридически выверенный протокол разногласий.'
          },
          {
            num: '03',
            title: 'Переговоры с контрагентом',
            desc: 'Аргументируем позицию клиента, защищаем принципиальные пункты и согласовываем финальный компромисс.'
          },
          {
            num: '04',
            title: 'Подписание и регистрация',
            desc: 'Контролируем подписание полномочными лицами и регистрацию долгосрочного договора в Росреестре.'
          },
          {
            num: '05',
            title: 'Сопровождение при исполнении',
            desc: 'Юридическая поддержка при изменении ставок, субаренде, аварийных ситуациях и согласовании ремонтов.'
          },
          {
            num: '06',
            title: 'Безопасный возврат площадей',
            desc: 'Контроль составления акта возврата, защита от необоснованных претензий по износу и возврат депозита.'
          }
        ]}
        ctaTitle="Планируете заключение или расторжение договора аренды?"
        ctaSubtitle="Подключимся на любом этапе: выявим скрытые штрафы, согласуем условия и защитим права бизнеса."
        ctaButtonText="Обсудить договор аренды"
        ctaButtonHref="#form"
      />

      {/* ═══ 6. ПРАКТИКА (CASES BLOCK) ═══ */}
      <CasesBlock
        title={
          <>
            <span style={{ display: 'inline-block' }}>Практика сопровождения</span> <br />
            <span style={{ display: 'inline-block' }}>коммерческой аренды</span>
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
        title="Стоимость юридических услуг по аренде"
        subtitle="Прозрачные тарифы без скрытых платежей. Стоимость услуг фиксируется в договоре."
        tiers={pricingTiers}
        ctaTitle="Рассчитаем стоимость сопровождения аренды"
        ctaSubtitle="Оставьте заявку — юрист по недвижимости проверит договор и согласует прозрачный объём работ."
        ctaButtonText="Рассчитать стоимость"
        ctaButtonLink="#form"
      />

      {/* ═══ 8. ВОПРОСЫ И ОТВЕТЫ (FAQ BLOCK) ═══ */}
      <FAQBlock
        superTitle="Вопросы и ответы"
        title={
          <>
            <span style={{ display: 'inline-block' }}>Частые вопросы</span> <br />
            <span style={{ display: 'inline-block' }}>о коммерческой аренде</span>
          </>
        }
        subtitle="Разъяснения юриста о регистрации, арендных каникулах, индексации и возврате депозита"
        faqs={faqs}
      />

      {/* ═══ 9. СМЕЖНЫЕ НАПРАВЛЕНИЯ ПРАКТИКИ ДЛЯ БИЗНЕСА (ПО ШАБЛОНУ) ═══ */}
      <section className="section bg-light" id="related-services" style={{ padding: '64px 0', background: 'var(--gradient-cream)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ marginBottom: '36px' }}>
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
                Комплексная юридическая помощь бизнесу: купля-продажа, градостроительный регламент, строительство и арбитражные споры.
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
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>оценку договора</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко опишите ситуацию и оставьте контакты. Юрист изучит проект договора аренды или суть разногласий и свяжется с вами в течение 15 минут в рабочее время.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация юриста по аренде</strong>
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
                title="Обсудить аренду"
                subtitle={
                  <>
                    <span style={{ display: 'inline-block' }}>Оставьте контакты и суть вопроса. Юрист свяжется с вами</span> <br />
                    <span style={{ display: 'inline-block' }}>в течение 15 минут в рабочее время.</span>
                  </>
                }
                subtext={
                  <>
                    <span style={{ display: 'inline-block' }}>Если вы оставите заявку вечером или в&nbsp;выходной день,</span> <br />
                    <span style={{ display: 'inline-block' }}>мы перезвоним в&nbsp;ближайший рабочий день.</span>
                  </>
                }
                buttonText="Отправить договор на аудит"
                commentPlaceholder="Укажите параметры аренды (арендатор/арендодатель, объект, спорные условия, расторжение)…"
                hiddenFields={[
                  { name: 'source_page', value: '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/yuridicheskoe-soprovozhdenie-arendy-kommercheskoy-nedvizhimostyu/' },
                  { name: 'service', value: 'Юридическое сопровождение аренды коммерческой недвижимости' }
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
