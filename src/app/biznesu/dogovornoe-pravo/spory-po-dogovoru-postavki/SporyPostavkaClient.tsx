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
      a: 'Да. Поставщику помогаем подтвердить фактическое исполнение и оплату либо защищаться от претензий; покупателю — зафиксировать нарушение, недостатки товара и выбрать требования. До принятия поручения проверяется конфликт интересов.'
    },
    {
      q: 'Обязательно ли направлять претензию до арбитражного суда?',
      a: 'Да, для денежных требований из договоров поставки действует обязательный досудебный претензионный порядок (ч. 5 ст. 4 АПК РФ). Общий срок ответа составляет 30 календарных дней со дня направления претензии, если иной срок не указан в договоре.'
    },
    {
      q: 'Какими документами можно подтвердить поставку?',
      a: 'Оценивается совокупность доказательств: договор и спецификации, универсальные передаточные документы (УПД), товарные накладные ТОРГ-12, транспортные накладные, выписки из систем ЭДО, доверенности на получение ТМЦ, складские расписки, переписка и платёжные поручения.'
    },
    {
      q: 'Что делать, если товар не соответствует качеству?',
      a: 'Зафиксировать дату и состояние товара, составить акт осмотра с участием перевозчика/поставщика, сохранить упаковку и маркировку, своевременно направить мотивированное уведомление. Не пускать некачественную продукцию в переработку до осмотра или экспертизы.'
    },
    {
      q: 'Можно ли отказаться от товара при нарушении ассортимента или комплектности?',
      a: 'Да, в соответствии со ст. 468 и 480 ГК РФ покупатель вправе отказаться от принятия и оплаты товара, а если он оплачен — потребовать возврата уплаченной суммы, уведомив поставщика в разумный срок.'
    },
    {
      q: 'Что если покупатель не подписал накладную или УПД?',
      a: 'Отсутствие подписи усложняет доказывание, но факт вручения может подтверждаться транспортными документами перевозчика, путевыми листами, журналом въезда на территорию склада покупателя, частичной оплатой и принятием товара на бухгалтерский учёт.'
    },
    {
      q: 'Покупатель пропустил срок приёмки — он теряет все требования?',
      a: 'Не обязательно. По закону скрытые производственные недостатки, которые не могли быть выявлены при обычной приёмке, могут быть предъявлены в пределах гарантийного срока или 2 лет (ст. 477 ГК РФ).'
    },
    {
      q: 'Можно ли взыскать неустойку за просрочку или недопоставку?',
      a: 'Да, при наличии договорной или законной неустойки (ст. 395 ГК РФ или ст. 521 ГК РФ). Также возможно взыскание убытков в виде разницы в цене при совершении замещающей сделки по ст. 524 ГК РФ.'
    },
    {
      q: 'Когда нужна экспертиза качества товара?',
      a: 'Когда возникли разногласия о причинах дефекта (производственный брак или нарушение правил транспортировки/хранения/эксплуатации покупателем). Экспертиза может проводиться во внесудебном порядке либо назначаться арбитражным судом.'
    },
    {
      q: 'Можно ли урегулировать спор без суда?',
      a: 'Да. Возможны допоставка, замена бракованной партии, согласование дисконта, график рассрочки платежей, зачёт взаимных требований или заключение медиативного соглашения.'
    }
  ];

  const situations = [
    {
      title: 'Неоплата поставленного товара',
      desc: 'Покупатель принял товар, но не оплатил или удержал часть суммы со ссылкой на несуществующие претензии.',
      tag: 'Оплата'
    },
    {
      title: 'Недопоставка или срыв сроков',
      desc: 'Товар не поставлен вовсе, нарушен график поставок или передана только часть оплаченной партии.',
      tag: 'Сроки и недопоставка'
    },
    {
      title: 'Поставка некачественного товара',
      desc: 'Брак, скрытые дефекты, несоответствие ГОСТ, ТУ или согласованным спецификациям и чертежам.',
      tag: 'Качество'
    },
    {
      title: 'Нарушение ассортимента и комплекта',
      desc: 'Передан товар других артикулов, нарушена комплектность, отсутствует сопроводительная или техническая документация.',
      tag: 'Комплектность'
    },
    {
      title: 'Отказ от приёмки на складе',
      desc: 'Покупатель необоснованно уклоняется от приёмки доставленного товара или поставщик не согласен с дефектным актом.',
      tag: 'Приёмка'
    },
    {
      title: 'Односторонний отказ и убытки',
      desc: 'Контрагент отказался от договора поставки, сорвал производственный цикл; требуется взыскание убытков по замещающей сделке.',
      tag: 'Отказ и убытки'
    }
  ];

  const reviewDirections = [
    {
      title: 'Договор и спецификации',
      desc: 'Сопоставление рамочного договора, заявок, спецификаций и переписки по согласованию существенных условий поставки.'
    },
    {
      title: 'Фактическое движение товара',
      desc: 'Транспортные накладные, экспедиторские расписки, путевые листы, доверенности водителей и отметки складов.'
    },
    {
      title: 'Первичные учётные документы',
      desc: 'Товарные накладные ТОРГ-12, УПД, электронный документооборот (ЭДО), сверка подписей и печатей уполномоченных лиц.'
    },
    {
      title: 'Соблюдение регламента приёмки',
      desc: 'Сроки осмотра, вызов представителя поставщика, составление актов расхождений ТОРГ-2, условия ответственного хранения.'
    },
    {
      title: 'Качество и доказательства дефектов',
      desc: 'Паспорта качества, сертификаты, фото- и видеофиксация брака, заключения испытательных лабораторий.'
    },
    {
      title: 'Расчёты и взаимные сальдо',
      desc: 'Сверка платежей, платёжные поручения, назначение платежей, зачёты встречных однородных требований.'
    },
    {
      title: 'Досудебная претензионная работа',
      desc: 'Проверка направления претензий, соблюдение 30-дневного претензионного срока по ч. 5 ст. 4 АПК РФ.'
    },
    {
      title: 'Арбитражная судебная стратегия',
      desc: 'Исковое заявление, применение обеспечительных мер к счетам контрагента, формулирование вопросов товароведческой экспертизы.'
    }
  ];

  const cases: CaseData[] = [
    {
      title: 'Подтверждение передачи товара при отсутствии части подписанных УПД',
      category: 'Позиция поставщика',
      problem: 'Покупатель не оплатил две крупные партии металлопроката, сославшись на то, что на УПД отсутствует печать организации и подпись генерального директора.',
      action: 'Собрали транспортные накладные привлечённого перевозчика, данные спутникового трекинга доставки на склад покупателя, доверенности кладовщика и доказательства списания металла в производство.',
      result: 'Суд признал факт надлежащей передачи товара доказанным; долг 6 400 000 ₽ и неустойка взысканы в полном объёме.'
    },
    {
      title: 'Взыскание убытков за поставку бракованного промышленного оборудования',
      category: 'Позиция покупателя',
      problem: 'После запуска производственной линии проявились скрытые дефекты редукторов. Поставщик возложил вину на покупателя, заявив о перегрузках.',
      action: 'Организовали проведение судебной товароведческой и инженерной экспертизы, которая подтвердила заводской дефект термообработки деталей шестерён.',
      result: 'Суд обязал поставщика забрать бракованное оборудование, вернул покупателю 11 200 000 ₽ стоимости и возместил убытки от простоя цеха.'
    },
    {
      title: 'Досудебное соглашение о допоставке и реструктуризации долга',
      category: 'Досудебное соглашение',
      problem: 'Поставщик задержал отгрузку сырья на 45 дней, из-за чего покупатель остановил оплату предыдущих партий. Обе стороны готовились к встречным искам.',
      action: 'Провели аудит встречных обязательств, разработали соглашение о поэтапной допоставке сырья с предоставлением дисконта и новым графиком платежей.',
      result: 'Стороны сохранили долгосрочный контракт без судебных расходов и штрафов; поставки возобновлены в полном объёме.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Правовая оценка спора по поставке',
      price: 'от 15 000 ₽',
      subtitle: 'Анализ договора, накладных, транспортных документов, оценка судебной перспективы и рисков.',
      buttonText: 'Выбрать тариф',
      buttonHref: '#contacts-form',
      features: [
        { name: 'Изучение документов поставки и оплат', value: '✓' },
        { name: 'Проверка соблюдения порядка приёмки', value: '✓' },
        { name: 'Расчёт суммы долга, неустойки и убытков', value: '✓' },
        { name: 'Письменное заключение со стратегией', value: '✓' }
      ],
      popular: false
    },
    {
      title: 'Претензия и досудебное урегулирование',
      price: 'от 25 000 ₽',
      subtitle: 'Подготовка мотивированной претензии со ссылками на АПК РФ и ГК РФ, переговоры с контрагентом.',
      buttonText: 'Выбрать тариф',
      buttonHref: '#contacts-form',
      features: [
        { name: 'Составление претензии или отзыва', value: '✓' },
        { name: 'Соблюдение обязательного порядка АПК РФ', value: '✓' },
        { name: 'Ведение переговоров о добровольной оплате', value: '✓' },
        { name: 'Подготовка соглашения о взаиморасчётах', value: '✓' }
      ],
      popular: true
    },
    {
      title: 'Представительство в арбитражном суде',
      price: 'от 60 000 ₽',
      subtitle: 'Полное судебное ведение дела в суде первой инстанции от иска до получения решения.',
      buttonText: 'Выбрать тариф',
      buttonHref: '#contacts-form',
      features: [
        { name: 'Составление иска / отзыва и расчётов', value: '✓' },
        { name: 'Ходатайства об обеспечительных мерах', value: '✓' },
        { name: 'Участие во всех судебных заседаниях', value: '✓' },
        { name: 'Взыскание судебных расходов с оппонента', value: '✓' }
      ],
      popular: false
    },
    {
      title: 'Комплексная защита со списанием и ФССП',
      price: 'от 90 000 ₽',
      subtitle: 'Суд, надзор за товароведческой экспертизой, апелляция и реальное взыскание через банки или приставов.',
      buttonText: 'Выбрать тариф',
      buttonHref: '#contacts-form',
      features: [
        { name: 'Ведение дела во всех инстанциях', value: '✓' },
        { name: 'Работа с судебной экспертизой товара', value: '✓' },
        { name: 'Исполнительное производство до списания', value: '✓' },
        { name: 'Розыск счетов и имущества должника', value: '✓' }
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
        '@id': 'https://dejure-help.ru/biznesu/dogovornoe-pravo/spory-po-dogovoru-postavki/#service',
        name: 'Юрист по спорам из договоров поставки в Липецке',
        serviceType: 'Юридические услуги по спорам из договоров поставки и купли-продажи бизнеса',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        url: 'https://dejure-help.ru/biznesu/dogovornoe-pravo/spory-po-dogovoru-postavki/'
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
            <span style={{ color: 'var(--color-primary)' }}>Договорное право</span> <span style={{ margin: '0 8px' }}>/</span>
            <span style={{ color: 'var(--color-text-muted)' }}>Споры по договору поставки</span>
          </>
        }
        superTitle="Договорное право • Для бизнеса • Липецк"
        title="Юрист по спорам из договоров поставки"
        subtitle="Проверим договор, спецификации, передачу и приёмку товара, подготовим требования или защиту и представим поставщика либо покупателя в арбитражном суде."
        trustItems={[
          { text: 'Работаем на стороне поставщика и покупателя' },
          { text: 'Оцениваем документы, товар и хронологию поставки' },
          { text: 'Согласуем стратегию, объём и стоимость до начала работы' }
        ]}
        primaryCtaText="Обсудить спор по поставке"
        primaryCtaLink="#form"
        secondaryCtaText="С чем поможем"
        secondaryCtaLink="#situations"
      />

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

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--color-primary)',
                  fontSize: '13px',
                  fontWeight: 600,
                  marginTop: '20px'
                }}>
                  <span>Защитить проект</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. НАПРАВЛЕНИЯ ПРОВЕРКИ ЦЕПОЧКИ ПОСТАВКИ ═══ */}
      <section style={{ backgroundColor: '#F8FAFC', padding: '64px 0', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
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
                Документы для оценки
              </div>
              <h3 className="nowrap-desk" style={{ fontSize: '26px', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
                Что подготовить для правовой оценки спора по поставке
              </h3>
              <p style={{ fontSize: '15px', color: '#CBD5E1', lineHeight: 1.6 }}>
                Не указывайте конфиденциальные реквизиты в открытой форме. Документы передаются через защищённый канал после согласования формата связи.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '16px',
              marginBottom: '32px'
            }}>
              {[
                'Договор поставки, спецификации, заявки и дополнительные соглашения',
                'Товарные накладные ТОРГ-12, УПД и выгрузки из систем ЭДО',
                'Транспортные накладные, путевые листы, экспедиторские расписки',
                'Доверенности на получение ТМЦ и акты приёма-передачи товара',
                'Деловая переписка сторон (почта, мессенджеры, электронная переписка)',
                'Акты о расхождениях по количеству и качеству (ТОРГ-2), дефектные ведомости',
                'Претензии, уведомления об отказе, платёжные поручения и акты сверки'
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
                Отправить документы на правовой анализ
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 5. ЭТАПЫ РАБОТЫ (PROCESS BLOCK) ═══ */}
      <ProcessBlock
        title="Как проходит работа по поставочному спору"
        subtitle="Семь последовательных этапов: от изучения первичных документов до получения денежных средств"
        steps={[
          {
            num: '01',
            title: 'Анализ поставочных документов',
            desc: 'Изучаем договор, заявки, спецификации, УПД, транспортные накладные и условия приёмки.'
          },
          {
            num: '02',
            title: 'Фиксация доказательств',
            desc: 'Сопоставляем данные перевозчиков, складского учёта, доверенностей и электронной переписки.'
          },
          {
            num: '03',
            title: 'Расчёт требований и санкций',
            desc: 'Рассчитываем сумму основного долга, законной или договорной неустойки и убытков.'
          },
          {
            num: '04',
            title: 'Досудебный претензионный порядок',
            desc: 'Направляем мотивированную претензию либо ответ на требования оппонента со ссылками на закон.'
          },
          {
            num: '05',
            title: 'Подача иска и обеспечительные меры',
            desc: 'Готовим иск в арбитражный суд и ходатайствуем об аресте счетов должника для гарантии выплат.'
          },
          {
            num: '06',
            title: 'Судебное представительство',
            desc: 'Защищаем интересы поставщика или покупателя во всех судебных заседаниях и инстанциях.'
          },
          {
            num: '07',
            title: 'Исполнение решения арбитража',
            desc: 'Получаем исполнительный лист и сопровождаем списание денежных средств через банк должника.'
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

      {/* ═══ 8. ВОПРОСЫ И ОТВЕТЫ (FAQ BLOCK) ═══ */}
      <FAQBlock
        title="Частые вопросы по спорам из поставки"
        subtitle="Ответы арбитражного юриста по документам, срокам, претензиям и экспертизе качества"
        faqs={faqs}
      />

      {/* ═══ 9. ФОРМА ОБРАТНОЙ СВЯЗИ (CONTACTS FORM) ═══ */}
      <ContactsForm
        title="Обсудите спор по поставке с юристом"
        subtitle="Кратко укажите, вы поставщик или покупатель, что произошло с товаром или оплатой. Мы свяжемся с вами в течение 15 минут в рабочее время."
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
