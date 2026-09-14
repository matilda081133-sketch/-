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

export default function SdelkiKommercheskayaClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      title: 'Покупаем объект',
      desc: 'Нужно проверить права продавца, объект, землю, ограничения и условия расчётов до аванса или подписания договора.',
      tag: 'Покупка'
    },
    {
      title: 'Продаём недвижимость',
      desc: 'Требуется подготовить договор, закрыть риски претензий покупателя, защитить порядок оплаты и зафиксировать передачу.',
      tag: 'Продажа'
    },
    {
      title: 'Сложный объект или комплекс',
      desc: 'В сделку входят несколько зданий, земельный участок, сети, оборудование или действующие арендаторы.',
      tag: 'Комплекс'
    },
    {
      title: 'Отказ или приостановление',
      desc: 'Росреестр приостановил регистрацию либо вынес отказ: нужно разобрать причины и подготовить документы.',
      tag: 'Росреестр'
    },
    {
      title: 'Контрагент настаивает на своём договоре',
      desc: 'В проекте договора есть невыгодные условия об ответственности, задатке, одностороннем отказе или сроках.',
      tag: 'Экспертиза'
    },
    {
      title: 'Сделка с обременением или арендой',
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
      title: 'Самовольные изменения и реконструкция',
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
      result: 'Продавец устранил расхождения в Росреестре за свой счёт; покупатель безопасно завершил сделку без риска потери аванса.'
    },
    {
      title: 'Сопровождение продажи торгового здания',
      category: 'Продажа ТЦ',
      problem: 'Компания продавала отдельно стоящее торговое здание с действующими арендаторами. Покупатель предложил сложный график платежей с отсрочкой.',
      action: 'Подготовили договор купли-продажи с сохранением залога в силу закона до полной оплаты, урегулировали перевод прав по договорам аренды и составили подробный акт приёма-передачи объекта и оборудования.',
      result: 'Сделка успешно зарегистрирована в Росреестре; продавец получил 100% оплаты в строгом соответствии с графиком.'
    },
    {
      title: 'Устранение причин приостановления регистрации объекта',
      category: 'Снятие приостановки',
      problem: 'Росреестр приостановил государственную регистрацию перехода права на производственный корпус из-за отсутствия надлежащего корпоративного согласия.',
      action: 'Проанализировали текст уведомления, восстановили цепочку протоколов общего собрания участников, оформили недостающее решение в точном соответствии с уставом и подали дополнительные документы.',
      result: 'Приостановление отменено, переход права собственности зарегистрирован без судебных разбирательств.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Правовая экспертиза договора',
      price: 'от 15 000 ₽',
      subtitle: 'Анализ предложенного контрагентом договора, выявление скрытых ловушек, протокол разногласий.',
      buttonText: 'Выбрать тариф',
      buttonHref: '#contacts-form',
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
      buttonHref: '#contacts-form',
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
      buttonHref: '#contacts-form',
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
      buttonHref: '#contacts-form',
      features: [
        { name: 'Правовой анализ уведомления регистратора', value: '✓' },
        { name: 'Устранение несоответствий в документах', value: '✓' },
        { name: 'Подготовка заявлений и дополнительных пакетов', value: '✓' },
        { name: 'Контроль повторного рассмотрения', value: '✓' }
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

      {/* ═══ 1. ПЕРВЫЙ ЭКРАН ═══ */}
      <MilitaryHero
        breadcrumbs={
          <>
            <Link href="/" style={{ color: 'var(--color-primary)' }}>Главная</Link> <span style={{ margin: '0 8px' }}>/</span>
            <Link href="/biznesu/" style={{ color: 'var(--color-primary)' }}>Бизнесу</Link> <span style={{ margin: '0 8px' }}>/</span>
            <Link href="/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/" style={{ color: 'var(--color-primary)' }}>Юрист по недвижимости и строительству</Link> <span style={{ margin: '0 8px' }}>/</span>
            <span style={{ color: 'var(--color-text-muted)' }}>Сопровождение сделок</span>
          </>
        }
        superTitle="Коммерческая недвижимость • Сделки бизнеса • Липецк и Липецкая область"
        title="Сопровождение сделок с коммерческой недвижимостью в Липецке"
        subtitle="Проверим объект, продавца и документы, зафиксируем риски, согласуем условия договора и сопроводим расчёты, регистрацию и передачу недвижимости."
        trustItems={[
          { text: 'Начинаем до аванса и подписания' },
          { text: 'Проверяем объект и сторону сделки' },
          { text: 'Фиксируем объём работ и стоимость в договоре' }
        ]}
        primaryCtaText="Обсудить сделку"
        primaryCtaLink="#form"
        secondaryCtaText="Что проверит юрист"
        secondaryCtaLink="#situations"
      />

      {/* ═══ 2. КОГДА НУЖЕН ЮРИСТ (СИТУАЦИИ) ═══ */}
      <section style={{ backgroundColor: 'var(--color-white)', padding: '64px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 40px' }}>
            <h2 className="nowrap-desk" style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              Когда бизнесу требуется сопровождение сделки
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Подключаемся на любой стадии: до подписания соглашения о намерениях, при согласовании договора или после получения замечаний Росреестра.
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

      {/* ═══ 3. ЧТО ПРОВЕРИТ ЮРИСТ (DUE DILIGENCE) ═══ */}
      <section id="due-diligence" style={{ backgroundColor: '#F8FAFC', padding: '64px 0', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 40px' }}>
            <h2 className="nowrap-desk" style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              Что проверит юрист: 7 направлений Due Diligence
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Глубокая проверка объекта и сторон сделки. Мы не ограничиваемся одной выпиской ЕГРН и оцениваем скрытые правовые риски.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px'
          }}>
            {dueDiligenceItems.map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '12px',
                  padding: '24px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <div style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-primary)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '13px',
                    fontWeight: 700
                  }}>
                    {idx + 1}
                  </div>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-deep-blue)', margin: 0 }}>
                    {item.title}
                  </h3>
                </div>
                <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
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
                Что подготовить для первичной оценки сделки
              </h3>
              <p style={{ fontSize: '15px', color: '#CBD5E1', lineHeight: 1.6 }}>
                Для первого разговора достаточно адреса или кадастрового номера, роли компании и краткого описания стадии. Конфиденциальные документы передаются через защищённый канал после согласования.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '16px',
              marginBottom: '32px'
            }}>
              {[
                'Кадастровый номер или адрес коммерческого объекта',
                'Выписка из ЕГРН об основных характеристиках и зарегистрированных правах',
                'Правоустанавливающие документы и акт приёма-передачи предыдущей сделки',
                'Проект договора, предварительный договор, оферта или соглашение об авансе',
                'Документы на земельный участок под объектом и сведения о фактическом использовании',
                'Договоры аренды, ипотеки, сервитутов и иные документы об обременениях',
                'Устав и корпоративные решения сторон (одобрение крупной сделки) — если применимо',
                'Уведомление Росреестра о приостановлении или отказе, если оно уже получено'
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
                Отправить материалы на проверку
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 5. КАК ПРОХОДИТ СОПРОВОЖДЕНИЕ (PROCESS BLOCK) ═══ */}
      <ProcessBlock
        title="Этапы сопровождения сделки"
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
      />

      {/* ═══ 6. ПРАКТИКА (CASES BLOCK) ═══ */}
      <CasesBlock
        cases={cases}
        title="Практика сопровождения коммерческих сделок"
      />

      {/* ═══ 7. СТОИМОСТЬ (PRICING BLOCK) ═══ */}
      <PricingBlock
        title="Тарифы на сопровождение сделок"
        subtitle="Фиксированная стоимость услуг без скрытых доплат. Состав работ закрепляется в договоре."
        tiers={pricingTiers}
      />

      {/* ═══ 8. ВОПРОСЫ И ОТВЕТЫ (FAQ BLOCK) ═══ */}
      <FAQBlock
        title="Частые вопросы о сделках с недвижимостью"
        subtitle="Разъяснения юриста о сроках, порядке проверки и безопасных расчётах"
        faqs={faqs}
      />

      {/* ═══ 9. ФОРМА ОБРАТНОЙ СВЯЗИ (CONTACTS FORM) ═══ */}
      <ContactsForm
        title="Проверьте сделку до необратимых действий"
        subtitle="Оставьте заявку на предварительный анализ коммерческой недвижимости. Мы свяжемся с вами в течение 15 минут в рабочее время."
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
              Обсудить сопровождение сделки
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: 1.5, marginBottom: '24px' }}>
              Укажите контактные данные и кратко опишите объект. Мы свяжемся с вами в рабочее время для предварительной консультации.
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
                  Ваше имя или название организации
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
                  Параметры объекта и сделки
                </label>
                <textarea
                  rows={3}
                  placeholder="Покупка склада, проверка здания, кадастровый номер..."
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
