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

export default function SporyPostavkaClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const faqs = [
    {
      q: 'Вы представляете и поставщиков, и покупателей?',
      a: 'Да. Поставщику помогаем подтвердить исполнение и оплату либо защищаться от претензий; покупателю — зафиксировать нарушение и выбрать требования. До принятия поручения проверяется конфликт интересов.'
    },
    {
      q: 'Обязательно ли направлять претензию до арбитражного суда?',
      a: 'Это зависит от требования, закона и договора. Для многих денежных требований из договоров действует обязательный досудебный порядок; общий срок по АПК РФ может составлять 30 календарных дней с даты направления претензии, если другой срок или порядок не установлен законом или договором. Конкретное правило нужно проверить по документам.'
    },
    {
      q: 'Какими документами можно подтвердить поставку?',
      a: 'Оценивается совокупность: договор и заявки, УПД и накладные, транспортные документы, ЭДО, доверенности, складские и бухгалтерские данные, переписка, платежи и дальнейшее использование товара. Набор зависит от способа передачи.'
    },
    {
      q: 'Что делать, если товар не соответствует качеству?',
      a: 'Зафиксируйте дату и состояние товара, сохраните упаковку и документы, проверьте порядок приёмки и уведомления. Не меняйте состояние спорной продукции без необходимости. Конкретное требование и потребность в исследовании определяются после анализа.'
    },
    {
      q: 'Можно ли отказаться от товара при нарушении ассортимента или комплектности?',
      a: 'Возможность и последствия зависят от характера нарушения, условий договора, своевременности приёмки и выбранного способа защиты. Автоматический отказ без проверки документов может создать дополнительные риски.'
    },
    {
      q: 'Что если покупатель не подписал накладную или УПД?',
      a: 'Отсутствие подписи усложняет доказывание, но не всегда означает, что поставки не было. Проверяются транспортные, электронные, складские, платёжные и иные данные. Заранее гарантировать взыскание нельзя.'
    },
    {
      q: 'Покупатель пропустил срок приёмки — он теряет все требования?',
      a: 'Не обязательно. Значение имеют договор, вид недостатка, момент его обнаружения, порядок уведомления и причины пропуска. Для явных и скрытых недостатков оценка может различаться.'
    },
    {
      q: 'Можно ли взыскать неустойку за просрочку или недопоставку?',
      a: 'Если есть правовое основание, подтверждены нарушение и период. Нужно проверить договор, восполнение поставки, действия обеих сторон, расчёт и возможные возражения о соразмерности.'
    },
    {
      q: 'Когда нужна экспертиза качества товара?',
      a: 'Когда спор требует специальных знаний о дефекте, причине, времени возникновения или возможности использования. До назначения важно сохранить объект и документы. Вид исследования и вопросы определяются под конкретный спор.'
    },
    {
      q: 'Можно ли прекратить договор из-за повторных нарушений?',
      a: 'Закон предусматривает основания для одностороннего отказа при существенных нарушениях поставки, но необходимо проверить факты, повторность, порядок уведомления и условия договора. Законность отказа может стать отдельным предметом спора.'
    },
    {
      q: 'Можно ли урегулировать спор без суда?',
      a: 'Да. Возможны допоставка, замена, новый график, зачёт, скидка, возврат товара, прекращение или мировое соглашение. Условия должны быть исполнимыми и привязанными к конкретным партиям и платежам.'
    },
    {
      q: 'От чего зависит стоимость?',
      a: 'От числа партий и документов, суммы и состава требований, состояния товара, необходимости исследования или экспертизы, количества участников и заседаний. Состав работ и стоимость фиксируем после оценки.'
    }
  ];

  const situations = [
    {
      title: 'Покупатель не оплатил товар или удержал часть суммы',
      desc: 'Проверим передачу и принятие товара, условия оплаты, зачёт, встречные возражения и расчёт требований.',
      tag: 'Оплата',
      btnText: 'Разобрать спор об оплате'
    },
    {
      title: 'Товар не поставлен или передан не в полном количестве',
      desc: 'Сопоставим заявки, спецификации, график и документы по партиям; определим требования и доказательства.',
      tag: 'Недопоставка',
      btnText: 'Оценить недопоставку'
    },
    {
      title: 'Поставка просрочена или нарушен график партий',
      desc: 'Восстановим хронологию, проверим сроки, содействие сторон, восполнение и расчёт санкций.',
      tag: 'Сроки',
      btnText: 'Разобрать спор о сроках'
    },
    {
      title: 'Поставлен товар с недостатками или спорна причина дефекта',
      desc: 'Оценим приёмку, уведомление, хранение, использование, документы качества и необходимость исследования.',
      tag: 'Качество',
      btnText: 'Разобрать спор о качестве'
    },
    {
      title: 'Нарушены ассортимент, комплектность, маркировка или упаковка',
      desc: 'Проверим характеристики, фактическую партию, своевременность замечаний и способы защиты.',
      tag: 'Комплект',
      btnText: 'Оценить нарушение'
    },
    {
      title: 'Покупатель отказался принимать товар или поставщик не согласен с актом',
      desc: 'Разберём осмотр, расхождения, ответственное хранение, вызов представителя и вручение документов.',
      tag: 'Приёмка',
      btnText: 'Разобрать приёмку'
    },
    {
      title: 'Заявлены неустойка, проценты, убытки или замещающая закупка',
      desc: 'Проверим основание, период, причинную связь, расчёт и возражения другой стороны.',
      tag: 'Санкции',
      btnText: 'Оценить санкции'
    },
    {
      title: 'Нужно прекратить поставки или оспорить односторонний отказ',
      desc: 'Оценим существенность нарушения, уведомление, судьбу партий, расчёты и последствия прекращения.',
      tag: 'Отказ',
      btnText: 'Оценить отказ и убытки'
    }
  ];

  const reviewDirections = [
    {
      title: 'Договорная модель',
      desc: 'Договор, рамочные условия, спецификации, заявки, протоколы разногласий и приоритет документов для определения предмета и спорной партии.'
    },
    {
      title: 'Товар и объём',
      desc: 'Наименование, количество, ассортимент, комплектность, тара, маркировка и характеристики для сопоставления с фактически переданным.'
    },
    {
      title: 'Срок и график',
      desc: 'Периоды, заявки, досрочная поставка, восполнение, приостановка и содействие сторон для определения периода санкций и возражений.'
    },
    {
      title: 'Доставка и передача',
      desc: 'Адрес, перевозчик, полномочия получателя, накладные, УПД, ЭДО и переход риска утраты для доказывания факта и момента вручения.'
    },
    {
      title: 'Приёмка и уведомление',
      desc: 'Осмотр, акт расхождений, вызов представителя, ответственное хранение и уведомления для понимания своевременно зафиксированных дефектов.'
    },
    {
      title: 'Качество и причина',
      desc: 'Сертификаты, образцы, фото, хранение, эксплуатация, лабораторные данные и экспертиза для разграничения брака и повреждений.'
    },
    {
      title: 'Расчёты и сальдо',
      desc: 'Цена, аванс, отсрочка, платежи по партиям, зачёт, удержание и назначение платежа для формирования обоснованного расчёта.'
    },
    {
      title: 'Ответственность и выход',
      desc: 'Неустойка, убытки, замещающая сделка, ограничение ответственности, отказ и расторжение для защиты интересов бизнеса.'
    }
  ];

  const cases: CaseData[] = [
    {
      title: 'Подтвердили передачу товара при неполном комплекте первичных документов',
      category: 'Позиция поставщика',
      problem: 'Покупатель не оплатил несколько партий и сослался на отсутствие части подписанных УПД, хотя товар был доставлен, оприходован и использован.',
      action: 'Сопоставили договор, заявки, транспортные документы, ЭДО, складские данные, переписку и платежи по предыдущим партиям; разделили подтверждённые и спорные поставки.',
      result: 'Требования были построены на совокупности согласующихся доказательств передачи и принятия каждой партии, а не на одном недостающем документе.'
    },
    {
      title: 'Зафиксировали требования по партии товара с недостатками',
      category: 'Позиция покупателя',
      problem: 'После приёмки оборудования проявились повторяющиеся дефекты, а поставщик связал их с неправильным хранением и эксплуатацией у покупателя.',
      action: 'Проверили условия качества и гарантии, хронологию обнаружения, уведомления, хранение и использование, сформировали вопросы для исследования и правовую позицию.',
      result: 'Спор был переведён из общих претензий в проверяемую модель: конкретные недостатки, причина, своевременность уведомления и соразмерное требование.'
    },
    {
      title: 'Согласовали восполнение недопоставки и новый график расчётов',
      category: 'Досудебное урегулирование',
      problem: 'Поставщик нарушил график нескольких партий, покупатель удержал оплату, а продолжение конфликта угрожало остановить снабжение.',
      action: 'Разделили исполненные и просроченные партии, сверили взаимные требования и подготовили соглашение о допоставке, платежах и последствиях нового нарушения.',
      result: 'Стороны получили исполнимый график с привязкой товара и платежей к конкретным партиям, не оставляя долг и санкции в неопределённом виде.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Оценка позиции',
      price: 'ХХХ ₽',
      subtitle: 'Анализ согласованного комплекта и спорных партий; консультация или заключение; сценарии и следующий шаг.',
      buttonText: 'Оценить спор',
      buttonHref: '#form',
      features: [
        { name: 'Анализ обстоятельств и документов поставки', value: '✓' },
        { name: 'Проверка соблюдения порядка приёмки и уведомлений', value: '✓' },
        { name: 'Оценка требований, санкций и встречных рисков', value: '✓' },
        { name: 'Рекомендации по доказательствам и сценариям', value: '✓' }
      ],
      popular: false
    },
    {
      title: 'Претензионная работа',
      price: 'от ХХХ ₽',
      subtitle: 'Претензия или ответ, правовая позиция, расчёт в согласованном объёме; переговоры — если включены.',
      buttonText: 'Обсудить претензию',
      buttonHref: '#form',
      features: [
        { name: 'Составление мотивированной претензии или ответа', value: '✓' },
        { name: 'Соблюдение порядка досудебного урегулирования', value: '✓' },
        { name: 'Переговорная позиция и проект соглашения', value: '✓' },
        { name: 'Подготовка пакета доказательств для суда', value: '✓' }
      ],
      popular: true
    },
    {
      title: 'Ведение первой инстанции',
      price: 'от ХХХ ₽',
      subtitle: 'Подготовка позиции и процессуальных документов, представительство в согласованном числе заседаний.',
      buttonText: 'Обсудить ведение дела',
      buttonHref: '#form',
      features: [
        { name: 'Исковое заявление либо мотивированный отзыв', value: '✓' },
        { name: 'Формирование доказательственной базы и расчётов', value: '✓' },
        { name: 'Ходатайства, вопросы товароведческой экспертизы', value: '✓' },
        { name: 'Участие в заседаниях арбитражного суда', value: '✓' }
      ],
      popular: false
    },
    {
      title: 'Апелляция, кассация, исполнение',
      price: 'по оценке',
      subtitle: 'Отдельный этап после анализа материалов и судебного акта; состав фиксируется в задании.',
      buttonText: 'Передать материалы',
      buttonHref: '#form',
      features: [
        { name: 'Правовой анализ принятого судебного акта', value: '✓' },
        { name: 'Подготовка апелляционной или кассационной жалобы', value: '✓' },
        { name: 'Представительство в судах вышестоящих инстанций', value: '✓' },
        { name: 'Исполнение решения и сопровождение в ФССП/банках', value: '✓' }
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
          streetAddress: 'ул. Советская, 35',
          addressLocality: 'Липецк',
          addressRegion: 'Липецкая область',
          addressCountry: 'RU'
        },
        areaServed: ['Липецк', 'Липецкая область']
      },
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/biznesu/dogovornoe-pravo/spory-po-dogovoru-postavki/#service',
        name: 'Юрист по спорам из договоров поставки в Липецке',
        serviceType: 'Юридические услуги по спорам из договоров поставки и купли-продажи бизнеса',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        url: 'https://dejure-help.ru/biznesu/dogovornoe-pravo/spory-po-dogovoru-postavki/',
        description: 'Поможем поставщику или покупателю в споре по договору поставки: оценим документы, подготовим претензию или защиту и представим бизнес в арбитражном суде.'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/biznesu/dogovornoe-pravo/spory-po-dogovoru-postavki/#breadcrumb',
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
            name: 'Договорное право',
            item: 'https://dejure-help.ru/biznesu/dogovornoe-pravo/'
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Споры по договору поставки',
            item: 'https://dejure-help.ru/biznesu/dogovornoe-pravo/spory-po-dogovoru-postavki/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/biznesu/dogovornoe-pravo/spory-po-dogovoru-postavki/#faq',
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
            <Link href="/biznesu/dogovornoe-pravo/" style={{ color: 'var(--color-primary)' }}>Договорное право</Link> <span style={{ margin: '0 8px' }}>/</span>
            <span style={{ color: 'var(--color-text-muted)' }}>Споры по договору поставки</span>
          </>
        }
        superTitle="Договорное право • Для бизнеса"
        title="Юрист по спорам из договоров поставки"
        subtitle="Проверим договор, спецификации, передачу и приёмку товара, подготовим требования или защиту и представим поставщика либо покупателя в арбитражном суде."
        trustItems={[
          { text: 'Работаем на стороне поставщика и покупателя' },
          { text: 'Оцениваем документы, товар и хронологию поставки' },
          { text: 'Согласуем стратегию, объём и стоимость до начала работы' }
        ]}
        primaryCtaText="Обсудить спор по поставке"
        primaryCtaLink="#form"
        primaryCtaSubtext="Перезвоним в течение 15 минут в рабочее время"
        secondaryCtaText="С чем поможем"
        secondaryCtaLink="#supply-situations"
        imageUrl="/images/spory-postavki-hero.webp"
        imageObjectPosition="center"
      />

      {/* ═══ 1.1. СТРОКА ДОВЕРИЯ ═══ */}
      <section style={{ backgroundColor: 'var(--color-bg-light)', borderBottom: '1px solid var(--color-border)', padding: '24px 0' }}>
        <div className="container">
          <div className="grid grid-3" style={{ gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                <polyline points="9 11 12 14 22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
              <div style={{ fontSize: '15px', color: 'var(--color-deep-blue)', fontWeight: 500, lineHeight: 1.5 }}>
                Сопоставляем договор и спецификации с фактическим движением товара.
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                <polyline points="9 11 12 14 22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
              <div style={{ fontSize: '15px', color: 'var(--color-deep-blue)', fontWeight: 500, lineHeight: 1.5 }}>
                Проверяем документы обеих сторон, приёмку, уведомления и расчёты.
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                <polyline points="9 11 12 14 22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
              <div style={{ fontSize: '15px', color: 'var(--color-deep-blue)', fontWeight: 500, lineHeight: 1.5 }}>
                Не обещаем результат до оценки доказательств и возможной экспертизы.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. ТИПОВЫЕ СИТУАЦИИ СПОРА ═══ */}
      <section id="supply-situations" style={{ backgroundColor: 'var(--color-white)', padding: '64px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 40px' }}>
            <h2 className="nowrap-desk" style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              Помощь поставщикам и покупателям
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              В поставочном споре значение имеют не только условия договора, но и каждая партия: заявка, сроки, транспортные документы, приёмка, уведомления и дальнейшее обращение с товаром.
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
                className="card hover-lift"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  borderRadius: '0',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                  position: 'relative',
                  overflow: 'hidden'
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
                >
                  <span>{sit.btnText}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. НАПРАВЛЕНИЯ ПРОВЕРКИ ЦЕПОЧКИ ПОСТАВКИ ═══ */}
      <section id="supply-review" style={{ backgroundColor: '#F8FAFC', padding: '64px 0', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 40px' }}>
            <h2 className="nowrap-desk" style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              Проверим всю цепочку поставки
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Позиция в суде зависит от того, что стороны согласовали, как товар двигался и что было зафиксировано в момент передачи и после неё.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px'
          }}>
            {reviewDirections.map((item, idx) => (
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

      {/* ═══ 3.1. ПОДКЛЮЧИМСЯ НА НУЖНОЙ СТАДИИ СПОРА ═══ */}
      <section id="supply-stage" className="section bg-white" style={{ padding: '64px 0', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 40px' }}>
            <h2 className="nowrap-desk" style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              Подключимся на нужной стадии спора
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Объём работы зависит от того, только ли обнаружено нарушение, обменялись ли стороны претензиями или спор уже рассматривается судом.
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '20px' }}>
            {[
              {
                stage: '01',
                title: 'Оценка позиции',
                desc: 'Изучаем поставочную цепочку, требования и возражения; определяем, какие доказательства ещё можно получить законно.',
                result: 'Консультация или заключение со сценариями и следующим шагом.',
                btnText: 'Оценить спор'
              },
              {
                stage: '02',
                title: 'Фиксация и претензия',
                desc: 'Помогаем оформить документы по нарушению, готовим претензию или ответ и переговорную позицию.',
                result: 'Зафиксированная позиция и пакет досудебного этапа.',
                btnText: 'Обсудить претензию'
              },
              {
                stage: '03',
                title: 'Первая инстанция',
                desc: 'Формируем иск или защиту, расчёты, доказательства, вопросы эксперту и процессуальные документы.',
                result: 'Ведение согласованного объёма дела в арбитражном суде.',
                btnText: 'Обсудить ведение дела'
              },
              {
                stage: '04',
                title: 'Обжалование и исполнение',
                desc: 'Анализируем судебный акт и материалы, готовим жалобу или возражения; исполнение оцениваем отдельно.',
                result: 'Согласованный этап апелляции, кассации или исполнения.',
                btnText: 'Передать материалы'
              }
            ].map((st, idx) => (
              <div
                key={idx}
                className="card hover-lift"
                style={{
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)'
                }}
              >
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', marginBottom: '8px', letterSpacing: '0.05em' }}>
                    ЭТАП {st.stage}
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--color-deep-blue)', margin: '0 0 12px 0', fontFamily: 'var(--font-serif)' }}>
                    {st.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: '0 0 16px 0' }}>
                    {st.desc}
                  </p>
                  <div style={{ padding: '10px 12px', background: 'rgba(23, 50, 77, 0.03)', borderLeft: '2px solid var(--color-primary)', fontSize: '13px', color: 'var(--color-deep-blue)', lineHeight: 1.45, marginBottom: '20px' }}>
                    <strong>Результат:</strong> {st.result}
                  </div>
                </div>
                <a
                  href="#form"
                  className="btn btn-secondary"
                  style={{ width: '100%', textAlign: 'center', padding: '10px 14px', fontSize: '13.5px', textDecoration: 'none' }}
                >
                  {st.btnText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3.2. СОХРАНИТЕ ТОВАР, ДОКУМЕНТЫ И СРОКИ ═══ */}
      <section style={{ backgroundColor: '#F8FAFC', padding: '64px 0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 36px' }}>
            <h2 className="nowrap-desk" style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              Сохраните товар, документы и сроки
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              До оценки позиции важно не потерять доказательства и не изменить состояние спорного товара. Конкретные действия зависят от договора, свойств продукции и стадии.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '16px',
            maxWidth: '1060px',
            margin: '0 auto'
          }}>
            {[
              'зафиксируйте дату обнаружения нарушения и ближайшие договорные либо процессуальные сроки;',
              'сохраните договор, заявки, версии спецификаций, ЭДО, переписку и доказательства отправки документов;',
              'сохраните накладные, УПД, транспортные документы, доверенности, складские журналы и данные о получателе;',
              'зафиксируйте состояние товара, упаковки, маркировки, пломб, количество мест и условия хранения законным способом;',
              'не уничтожайте и не перерабатывайте спорный товар, образцы или упаковку до согласования плана, если это возможно и безопасно;',
              'не оформляйте документы задним числом и не меняйте файлы, которые могут иметь доказательственное значение;',
              'не подписывайте автоматически признание долга, отказ от претензий или акт без замечаний; не пропускайте необходимое уведомление без оценки;',
              'не загружайте коммерческую тайну и материалы спора в обычную лид-форму — безопасный способ передачи согласуется после контакта.'
            ].map((rule, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}
              >
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(193, 160, 102, 0.15)',
                  color: 'var(--color-gold)',
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
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
                  {rule}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. ДОКУМЕНТЫ ДЛЯ ОЦЕНКИ ═══ */}
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
                Документы для оценки
              </div>
              <h3 className="nowrap-desk" style={{ fontSize: '26px', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
                Что потребуется юристу
              </h3>
              <p style={{ fontSize: '15px', color: '#CBD5E1', lineHeight: 1.6 }}>
                Для первого разговора достаточно назвать роль компании, товар, спорную партию, сумму, стадию и ближайший срок. После этого согласуем комплект документов.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '16px',
              marginBottom: '32px'
            }}>
              {[
                'договор, протоколы разногласий, дополнительные соглашения и условия об электронном документообороте;',
                'спецификации, заявки, заказы, графики и документы согласования товара, количества, цены и сроков;',
                'УПД, товарные и транспортные накладные, экспедиторские документы, доверенности и подтверждения ЭДО;',
                'счета, счета-фактуры, платёжные поручения, акты сверки и расчёты по каждой спорной партии;',
                'акты приёмки и расхождений, уведомления, вызовы представителя, претензии, ответы и доказательства направления;',
                'паспорта, сертификаты, документы качества, фото, сведения об образцах, хранении, эксплуатации и исследованиях;',
                'иск, отзыв, определения и судебные акты — если дело уже началось;',
                'краткая хронология и цель: получить оплату или товар, заменить партию, снизить требования либо договориться.'
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
              <a
                href="#form"
                className="btn btn-gold"
                style={{ padding: '14px 32px', fontSize: '15px', fontWeight: 600, display: 'inline-block', textDecoration: 'none' }}
              >
                Обсудить передачу документов
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 5. ЭТАПЫ РАБОТЫ (PROCESS BLOCK) ═══ */}
      <ProcessBlock
        title="Как строим работу по спору поставщика и покупателя"
        subtitle="Состав этапов зависит от количества партий, состояния товара и стадии конфликта. До начала фиксируем задачу и формат результата."
        steps={[
          {
            num: '01',
            title: 'Определяем спорную поставку',
            desc: 'Связываем договор, спецификации, заявки, партии, платежи, документы передачи и ближайшие сроки.'
          },
          {
            num: '02',
            title: 'Восстанавливаем движение товара',
            desc: 'Проверяем отгрузку, перевозку, получение, приёмку, хранение, использование и уведомления.'
          },
          {
            num: '03',
            title: 'Оцениваем требования',
            desc: 'Сопоставляем качество, количество, сроки, расчёты, санкции, встречные риски и необходимость экспертизы.'
          },
          {
            num: '04',
            title: 'Согласуем стратегию',
            desc: 'Определяем цель, действия с товаром, досудебный порядок, требования или линию защиты.'
          },
          {
            num: '05',
            title: 'Готовим документы и ведём спор',
            desc: 'Составляем претензию, ответ, иск, отзыв, ходатайства или соглашение; представляем позицию.'
          },
          {
            num: '06',
            title: 'Фиксируем результат',
            desc: 'Объясняем последствия соглашения или судебного акта и согласуем дальнейшие поставки, обжалование либо исполнение.'
          }
        ]}
      />

      {/* ═══ 6. ПРАКТИКА (CASES BLOCK) ═══ */}
      <CasesBlock
        cases={cases}
        title="Примеры из практики по спорам из поставки"
      />

      {/* ═══ 7. СТОИМОСТЬ (PRICING BLOCK) ═══ */}
      <PricingBlock
        title="Стоимость юридических услуг"
        subtitle="Прозрачное ценообразование. Судебные расходы взыскиваются с проигравшей стороны."
        tiers={pricingTiers}
      />

      {/* ═══ 7.1. СВЯЗАННЫЕ УСЛУГИ ═══ */}
      <section className="section" style={{ padding: '64px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 40px' }}>
            <h2 className="nowrap-desk" style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              Связанные услуги договорного направления
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Если задача шире одного спора по поставке, ознакомьтесь со смежными практическими направлениями нашей компании.
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '20px' }}>
            {[
              {
                title: 'Договорный юрист для бизнеса',
                desc: 'Вопрос затрагивает несколько договоров или требуется комплексная правовая поддержка бизнеса.',
                url: '/biznesu/dogovornoe-pravo/'
              },
              {
                title: 'Разработка и экспертиза договоров',
                desc: 'Спора ещё нет либо после урегулирования нужно обновить или проверить договор поставки.',
                url: '/biznesu/dogovornoe-pravo/razrabotka-i-ekspertiza-dogovorov/'
              },
              {
                title: 'Аудит договорной работы',
                desc: 'Конфликт выявил повторяющиеся ошибки в заявках, приёмке, ЭДО или контроле оплат.',
                url: '/biznesu/dogovornoe-pravo/audit-dogovornoj-raboty/'
              },
              {
                title: 'Договорные споры',
                desc: 'Конфликт относится не к поставке товара либо содержит несколько различных договорных оснований.',
                url: '/biznesu/dogovornoe-pravo/dogovornye-spory/'
              }
            ].map((srv, idx) => (
              <Link key={idx} href={srv.url} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                <div
                  className="card hover-lift"
                  style={{
                    height: '100%',
                    padding: '24px 20px',
                    background: 'var(--color-white)',
                    border: '1px solid var(--color-border)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: '17px', fontWeight: 600, color: 'var(--color-deep-blue)', margin: '0 0 10px 0', fontFamily: 'var(--font-serif)' }}>
                      {srv.title}
                    </h3>
                    <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                      {srv.desc}
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600, marginTop: '16px' }}>
                    <span>Подробнее</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

      {/* ═══ 8. ВОПРОСЫ И ОТВЕТЫ (FAQ BLOCK) ═══ */}
      <FAQBlock
        title="Частые вопросы по спорам из поставки"
        subtitle="Ответы арбитражного юриста по документам, срокам, претензиям и экспертизе качества"
        faqs={faqs}
      />

      {/* ═══ 9. ФОРМА ОБРАТНОЙ СВЯЗИ (CONTACTS FORM) ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px', padding: '80px 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start', paddingTop: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }} />
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  Связаться с нами
                </span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                Обсудите спор по поставке с юристом
              </h2>

              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко укажите, вы поставщик или покупатель, что произошло с товаром или оплатой, получена ли претензия или иск и какой ближайший срок известен. Мы уточним задачу и предложим формат оценки.
              </p>

              <div style={{ marginTop: '32px' }}>
                <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>Прямой телефон: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>+7 (4742) 20-15-25</a></span>
                </div>
                <div style={{ marginTop: '12px', fontSize: '14px', color: 'var(--color-text-secondary)', paddingLeft: '36px' }}>
                  Пн–Пт: 9:00 – 18:00 • ул. Советская, 35
                </div>
                <div style={{ marginTop: '8px', fontSize: '13.5px', color: 'var(--color-gold-text)', paddingLeft: '36px', fontWeight: 500 }}>
                  Перезвоним в течение 15 минут в рабочее время
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
              <div style={{ background: 'var(--gradient-cream)', padding: '40px', borderRadius: '0', boxShadow: '0 8px 24px rgba(0,0,0,0.15)', width: '100%', border: '1px solid rgba(0,0,0,0.06)' }}>
                <ContactsForm
                  title="Оставить заявку"
                  subtitle=""
                  buttonText="Оставить заявку"
                  commentPlaceholder="Кратко опишите суть спора по поставке…"
                  subtext="Не указывайте в форме коммерческую тайну, реквизиты, персональные данные и содержание конфиденциальной переписки. Документы можно передать после согласования безопасного способа связи."
                  hiddenFields={[
                    { name: 'pageId', value: 'B2B-04-04' },
                    { name: 'pageTitle', value: 'Споры по договору поставки в Липецке' },
                    { name: 'practice', value: 'Договорное право' },
                    { name: 'service', value: 'spory-po-dogovoru-postavki' }
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

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
              Консультация по спору из поставки
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: 1.5, marginBottom: '24px' }}>
              Укажите контактные данные и сторону сделки (поставщик / покупатель). Юрист свяжется с вами в рабочее время.
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
                  Суть спора
                </label>
                <textarea
                  rows={3}
                  placeholder="Неоплата поставки, поставка некачественного товара, удержание оплаты..."
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
