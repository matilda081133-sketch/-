'use client';

import React, { useState } from 'react';
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
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    },
    {
      title: 'Возврат помещения и обеспечение',
      desc: 'Разногласия по акту возврата, естественному износу, восстановительному ремонту и неправомерному удержанию обеспечительного платежа.',
      tag: 'Возврат депозита'
    }
  ];

  const checkItems = [
    'Правомерность полномочий и цепочка прав арендодателя на объект',
    'Точное описание помещения (план, экспликация, границы, кадастровый номер)',
    'Порядок расчётов: базовая ставка, переменная часть, коммунальные платежи',
    'Условия индексации арендной платы (ограничение частоты и процента)',
    'Обеспечительный платёж: основания удержания и сроки возврата',
    'Неотделимые улучшения и согласование перепланировок/ремонта',
    'Распределение эксплуатационных расходов и бремени содержания',
    'Основания досрочного расторжения и плата за отказ от договора'
  ];

  const cases: CaseData[] = [
    {
      title: 'Согласование договора аренды склада 3 000 кв. м для ритейлера',
      category: 'Аренда склада',
      problem: 'Арендатор планировал снять складской комплекс. Проект арендодателя содержал ежедневную неустойку за просрочку платежей в размере 0.5% и запрет на компенсацию улучшений.',
      action: 'Подготовили протокол разногласий, провели раунд переговоров, снизили штрафные санкции до рыночных значений, зафиксировали арендные каникулы 45 дней и регламент согласования неотделимых улучшений.',
      result: 'Подписан сбалансированный договор аренды на 5 лет с государственной регистрацией в Росреестре.'
    },
    {
      title: 'Защита арендодателя бизнес-центра при задолженности арендатора',
      category: 'Взыскание аренды',
      problem: 'Арендатор офисного блока прекратил выплату арендной платы и уклонялся от подписания акта возврата помещения, бросив офисную технику.',
      action: 'Направили уведомление об одностороннем отказе от договора, провели комиссионный осмотр с описью имущества с участием независимых свидетелей, передали помещение новому арендатору и взыскали долг с обеспечением.',
      result: 'Помещение возвращено в коммерческий оборот без простоев; задолженность погашена за счёт удержания обеспечения и досудебного соглашения.'
    },
    {
      title: 'Возврат обеспечительного платежа 1.8 млн ₽ арендатору',
      category: 'Возврат депозита',
      problem: 'После окончания срока аренды арендодатель удержал депозит в размере 1 800 000 ₽, сославшись на необходимость косметического ремонта торгового зала.',
      action: 'Сопоставили первичный акт приёма-передачи с возвратным актом, доказали естественный эксплуатационный износ по ст. 622 ГК РФ, составили досудебную претензию с расчётом процентов по ст. 395 ГК РФ.',
      result: 'Арендодатель вернул 100% обеспечительного платежа до обращения в арбитражный суд.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Правовая экспертиза договора',
      price: 'от 12 000 ₽',
      subtitle: 'Анализ договора аренды, оценка рисков, подготовка протокола разногласий и защитных формулировок.',
      buttonText: 'Выбрать тариф',
      buttonHref: '#contacts-form',
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
      buttonHref: '#contacts-form',
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
      buttonHref: '#contacts-form',
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
      buttonHref: '#contacts-form',
      features: [
        { name: 'Оценка правомерности расторжения', value: '✓' },
        { name: 'Подготовка уведомлений и претензий', value: '✓' },
        { name: 'Составление акта возврата помещения', value: '✓' },
        { name: 'Мировое соглашение о взаиморасчётах', value: '✓' }
      ],
      popular: false
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

      {/* ═══ 1. ПЕРВЫЙ ЭКРАН ═══ */}
      <MilitaryHero
        breadcrumbs={
          <>
            <Link href="/" style={{ color: 'var(--color-primary)' }}>Главная</Link> <span style={{ margin: '0 8px' }}>/</span>
            <Link href="/biznesu/" style={{ color: 'var(--color-primary)' }}>Бизнесу</Link> <span style={{ margin: '0 8px' }}>/</span>
            <Link href="/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/" style={{ color: 'var(--color-primary)' }}>Юрист по недвижимости и строительству</Link> <span style={{ margin: '0 8px' }}>/</span>
            <span style={{ color: 'var(--color-text-muted)' }}>Сопровождение аренды</span>
          </>
        }
        superTitle="Коммерческая недвижимость • Аренда для бизнеса • Липецк"
        title="Юридическое сопровождение аренды коммерческой недвижимости в Липецке"
        subtitle="Проверим и согласуем договор аренды, защитим интересы арендатора или арендодателя, сопроводим изменение условий, расторжение и возврат объекта."
        trustItems={[
          { text: 'Работаем за одну сторону в сделке' },
          { text: 'Фиксируем риски и правки письменно' },
          { text: 'Стоимость и объём — в договоре' }
        ]}
        primaryCtaText="Обсудить договор аренды"
        primaryCtaLink="#form"
        secondaryCtaText="Что проверит юрист"
        secondaryCtaLink="#situations"
      />

      {/* ═══ 2. КОГДА НУЖЕН ЮРИСТ ПО АРЕНДЕ ═══ */}
      <section style={{ backgroundColor: 'var(--color-white)', padding: '64px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 40px' }}>
            <h2 className="nowrap-desk" style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              Когда бизнесу требуется юрист по коммерческой аренде
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Сопровождаем договоры аренды офисов, торговых центров, складов и производственных комплексов на любой стадии.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            {situations.map((sit, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '12px',
                  padding: '24px'
                }}
              >
                <div style={{
                  display: 'inline-block',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(212,175,55,0.15)',
                  color: '#B8860B',
                  fontSize: '12px',
                  fontWeight: 600,
                  marginBottom: '12px'
                }}>
                  {sit.tag}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '10px' }}>
                  {sit.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: 1.55 }}>
                  {sit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. ЧТО ПРОВЕРИМ И СОГЛАСУЕМ ═══ */}
      <section id="what-we-check" style={{ backgroundColor: '#F8FAFC', padding: '64px 0', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 40px' }}>
            <h2 className="nowrap-desk" style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              Что проверит и согласует юрист в договоре аренды
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              8 ключевых параметров безопасности аренды, защищающих финансовые интересы и операционную деятельность бизнеса.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '16px'
          }}>
            {checkItems.map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '10px',
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}
              >
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-primary)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: 700,
                  flexShrink: 0,
                  marginTop: '1px'
                }}>
                  {idx + 1}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. ДИАГНОСТИКА: ЧТО ПОДГОТОВИТЬ ДЛЯ СТАРТА ═══ */}
      {/* КРИТИЧЕСКОЕ ПРАВИЛО ДИЗАЙНА: светлый фон секции var(--gradient-cream), не синий! */}
      <section style={{ background: 'var(--gradient-cream)', padding: '64px 0' }}>
        <div className="container">
          <div style={{
            backgroundColor: '#10273B',
            borderRadius: '20px',
            padding: '44px 40px',
            color: '#FFFFFF',
            boxShadow: '0 12px 32px rgba(16,39,59,0.18)'
          }}>
            <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center', marginBottom: '32px' }}>
              <div style={{
                display: 'inline-block',
                padding: '4px 12px',
                borderRadius: '6px',
                backgroundColor: 'rgba(212,175,55,0.18)',
                color: '#D4AF37',
                fontSize: '13px',
                fontWeight: 600,
                marginBottom: '12px'
              }}>
                Пакет документов
              </div>
              <h3 className="nowrap-desk" style={{ fontSize: '26px', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
                Что подготовить для правового анализа аренды
              </h3>
              <p style={{ fontSize: '15px', color: '#CBD5E1', lineHeight: 1.6 }}>
                Для первого разговора достаточно проекта договора, адреса объекта и роли стороны. Конфиденциальные документы передаются через защищённый канал после контакта.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '16px',
              marginBottom: '32px'
            }}>
              {[
                'Проект и действующие редакции договора аренды, приложения и допсоглашения',
                'Выписка из ЕГРН, план или экспликация помещения и документы о полномочиях',
                'Коммерческое предложение, переписка по спорным условиям и протокол разногласий',
                'Счета, акты, расчёты платежей и документы об обеспечении — для действующего договора',
                'Уведомления, претензии, подтверждения вручения и сведения о сроках ответа',
                'Краткое описание бизнес-целей использования объекта и критических условий'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(212,175,55,0.2)',
                    color: '#D4AF37',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 700,
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    ✓
                  </div>
                  <span style={{ fontSize: '14px', color: '#E2E8F0', lineHeight: 1.5 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center' }}>
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn btn-gold"
                style={{ padding: '14px 32px', fontSize: '15px', fontWeight: 600 }}
              >
                Отправить договор на юридический аудит
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 5. ЭТАПЫ СОПРОВОЖДЕНИЯ АРЕНДЫ (PROCESS BLOCK) ═══ */}
      <ProcessBlock
        title="Как строится работа по аренде"
        subtitle="Шесть шагов от первичного аудита до защиты интересов при расторжении договора"
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
      />

      {/* ═══ 6. ПРАКТИКА (CASES BLOCK) ═══ */}
      <CasesBlock
        cases={cases}
        title="Практика сопровождения коммерческой аренды"
      />

      {/* ═══ 7. СТОИМОСТЬ (PRICING BLOCK) ═══ */}
      <PricingBlock
        title="Стоимость юридических услуг по аренде"
        subtitle="Прозрачные тарифы без скрытых платежей. Стоимость услуг фиксируется в соглашении."
        tiers={pricingTiers}
      />

      {/* ═══ 8. ВОПРОСЫ И ОТВЕТЫ (FAQ BLOCK) ═══ */}
      <FAQBlock
        title="Частые вопросы по коммерческой аренде"
        subtitle="Разъяснения юриста по ставкам, регистрационным действиям и досрочному выходу"
        faqs={faqs}
      />

      {/* ═══ 9. ФОРМА ОБРАТНОЙ СВЯЗИ (CONTACTS FORM) ═══ */}
      <ContactsForm
        title="Обсудите договор коммерческой аренды с юристом"
        subtitle="Оставьте заявку на предварительный аудит договора аренды. Мы свяжемся с вами в течение 15 минут в рабочее время."
      />

      <Footer />

      {/* Модальное окно быстрой заявки */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(16,39,59,0.7)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: '36px 32px',
              maxWidth: '540px',
              width: '100%',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#64748B'
              }}
            >
              ×
            </button>
            <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '10px' }}>
              Консультация по коммерческой аренде
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: 1.5, marginBottom: '24px' }}>
              Укажите ваши контактные данные и сторону сделки (арендатор / арендодатель). Мы свяжемся с вами в рабочее время.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Спасибо! Ваша заявка принята. Юрист свяжется с вами в рабочее время.');
                setIsModalOpen(false);
              }}
            >
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                  Ваше имя или организация
                </label>
                <input
                  type="text"
                  required
                  placeholder="ООО «Компания» или представитель"
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    border: '1px solid #CBD5E1',
                    fontSize: '14px'
                  }}
                />
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                  Телефон для связи
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+7 (___) ___-__-__"
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    border: '1px solid #CBD5E1',
                    fontSize: '14px'
                  }}
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                  Кратко о задаче
                </label>
                <textarea
                  rows={3}
                  placeholder="Проверка договора аренды склада, протокол разногласий, возврат депозита..."
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    border: '1px solid #CBD5E1',
                    fontSize: '14px',
                    resize: 'vertical'
                  }}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', padding: '14px', fontSize: '15px', fontWeight: 600 }}
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
