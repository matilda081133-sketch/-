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

export default function KreditnyjYuristClient() {
  const jsonLdGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://dejure-help.ru/grazhdanam/kreditnyj-yurist/#service',
        name: 'Услуги кредитного юриста в Липецке',
        url: 'https://dejure-help.ru/grazhdanam/kreditnyj-yurist/',
        serviceType: 'Защита прав заемщиков и споры с банками',
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Липецк и Липецкая область'
        },
        provider: {
          '@id': 'https://dejure-help.ru/#organization'
        },
        description: 'Комплексная защита граждан и заемщиков по кредитным спорам, отмена судебных приказов, защита по искам банков и МФО, снижение штрафов и прекращение взыскания.'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/grazhdanam/kreditnyj-yurist/#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
          { '@type': 'ListItem', position: 2, name: 'Гражданам', item: 'https://dejure-help.ru/grazhdanam/' },
          { '@type': 'ListItem', position: 3, name: 'Кредитный юрист', item: 'https://dejure-help.ru/grazhdanam/kreditnyj-yurist/' }
        ]
      }
    ]
  };

  const services = [
    {
      title: 'Отмена судебного приказа',
      desc: 'Срочная подача возражений мировому судье по кредитам и микрозаймам, восстановление пропущенного 10-дневного срока, поворот исполнения.',
      link: '/grazhdanam/kreditnyj-yurist/otmena-sudebnogo-prikaza/',
      isChild: true,
      badge: 'Популярная услуга'
    },
    {
      title: 'Защита по искам банков и МФО',
      desc: 'Представительство в суде, перерасчет задолженности, оспаривание незаконных комиссий и снижение неустойки по ст. 333 ГК РФ.',
      link: '#form',
      badge: 'Судебная защита'
    },
    {
      title: 'Применение срока исковой давности',
      desc: 'Полное или частичное списание старых долгов по кредитам и кредитным картам при пропуске банком 3-летнего срока давности (ст. 196, 200 ГК РФ).',
      link: '#form',
      badge: 'Списание долга'
    },
    {
      title: 'Защита от коллекторов',
      desc: 'Отказ от взаимодействия с коллекторами, подача жалоб в ФССП, Банк России и прокуратуру при угрозах и нарушениях Федерального закона № 230-ФЗ.',
      link: '#form',
      badge: 'Защита прав'
    },
    {
      title: 'Возврат навязанных страховок',
      desc: 'Возврат стоимости страховых полисов, комиссий и дополнительных услуг при оформлении автокредитов и потребительских займов.',
      link: '#form',
      badge: 'Возврат денег'
    },
    {
      title: 'Сохранение прожиточного минимума',
      desc: 'Подача заявлений в ФССП и банки для защиты дохода и гарантированного сохранения прожиточного минимума при удержаниях с пенсии и зарплаты.',
      link: '#form',
      badge: 'Защита дохода'
    }
  ];

  const cases: CaseData[] = [
    {
      category: 'Судебный приказ / МФО',
      title: 'Отменили приказ МФО и предотвратили взыскание 68 000 ₽',
      problem: 'Микрофинансовая организация получила судебный приказ с начислением завышенных процентов и штрафов, превышающих сумму основного долга в 4 раза.',
      action: 'Подготовили мотивированные возражения мировому судье, указав на несогласие с исполнением и завышенный расчет. Зафиксировали дату отправки.',
      result: 'Судебный приказ отменен. МФО отказалась от подачи иска ввиду истечения срока давности.'
    },
    {
      category: 'Иск банка / Снижение неустойки',
      title: 'Снизили сумму требований банка с 890 000 ₽ до 340 000 ₽',
      problem: 'Банк обратился в районный суд с иском о взыскании долга по кредиту 5-летней давности, начислив пени в размере 450 000 ₽.',
      action: 'Заявили ходатайство о применении срока исковой давности по ранним платежам и снижении неустойки по ст. 333 ГК РФ как явно несоразмерной.',
      result: 'Суд исключил платежи за пределами 3-летнего срока и снизил неустойку до 25 000 ₽. Сумма взыскания уменьшена более чем в 2,5 раза.'
    },
    {
      category: 'Коллекторы / Уступка прав (цессия)',
      title: 'Полный отказ в иске коллекторскому агентству на 210 000 ₽',
      problem: 'Коллекторское агентство предъявило иск по старому долгу, приобретенному по договору цессии, без надлежащих подтверждающих документов.',
      action: 'Истребовали в суде первичные документы и доказательства надлежащего перехода права требования, заявили о пропуске срока давности.',
      result: 'Суд полностью отказал коллекторам в удовлетворении исковых требований. Долг аннулирован в судебном порядке.'
    }
  ];

  const processSteps: ProcessStep[] = [
    {
      num: '01',
      title: 'Правовой аудит документов',
      desc: 'Изучаем кредитный договор, выписки, требования банка, судебный приказ или исковое заявление.'
    },
    {
      num: '02',
      title: 'Выбор стратегии защиты',
      desc: 'Определяем возможность отмены приказа, применения срока исковой давности или снижения неустойки.'
    },
    {
      num: '03',
      title: 'Подготовка процессуальных документов',
      desc: 'Составляем возражения, отзывы на исковые заявления, контррасчеты задолженности и ходатайства.'
    },
    {
      num: '04',
      title: 'Судебное представительство',
      desc: 'Защищаем интересы заемщика в судебных заседаниях мировых и районных судов Липецка и Липецкой области.'
    },
    {
      num: '05',
      title: 'Работа со службой приставов',
      desc: 'Контролируем прекращение исполнительных производств, снятие арестов с карт и сохранение дохода.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Отмена судебного приказа',
      subtitle: 'Срочная защита от списаний',
      popular: true,
      badgeText: 'Срочно',
      price: 'от 4 500 ₽',
      features: [
        { name: 'Анализ приказа и проверка сроков', value: 'Включено' },
        { name: 'Составление возражений по ст. 129 ГПК РФ', value: 'Включено' },
        { name: 'Подача в суд с отметкой о вручении', value: 'Включено' },
        { name: 'Получение определения об отмене', value: 'Включено' }
      ],
      buttonText: 'Заказать отмену',
      buttonHref: '/grazhdanam/kreditnyj-yurist/otmena-sudebnogo-prikaza/'
    },
    {
      title: 'Защита в суде по иску банка',
      subtitle: 'Снижение суммы долга и штрафов',
      popular: false,
      price: 'от 12 000 ₽',
      features: [
        { name: 'Правовой анализ иска и расчет задолженности', value: 'Включено' },
        { name: 'Подготовка отзыва и контррасчета', value: 'Включено' },
        { name: 'Заявление о сроке давности и ст. 333 ГК РФ', value: 'Включено' },
        { name: 'Участие юриста в судебных заседаниях', value: 'Включено' }
      ],
      buttonText: 'Заказать защиту',
      buttonHref: '#form'
    },
    {
      title: 'Защита от коллекторов и ФССП',
      subtitle: 'Прекращение звонков и арестов',
      popular: false,
      price: 'от 8 000 ₽',
      features: [
        { name: 'Отказ от взаимодействия с коллекторами', value: 'Включено' },
        { name: 'Жалобы в ФССП и контролирующие органы', value: 'Включено' },
        { name: 'Заявления о сохранении прожиточного минимума', value: 'Включено' },
        { name: 'Снятие арестов с банковских карт', value: 'Включено' }
      ],
      buttonText: 'Заказать услугу',
      buttonHref: '#form'
    }
  ];

  const faqs = [
    {
      q: 'Что делать, если банк подал в суд?',
      a: 'Не игнорируйте судебные повестки. В суде можно существенно снизить сумму долга, применить срок исковой давности (3 года) и снизить неустойку по статье 333 ГК РФ. Своевременное обращение к кредитному юристу позволяет подготовить аргументированный отзыв и контррасчет.'
    },
    {
      q: 'Как узнать о наличии судебного приказа?',
      a: 'Сведения можно проверить на сайте мирового судьи по месту жительства, на портале Госуслуг в разделе уведомлений или в Банке данных исполнительных производств на сайте ФССП России.'
    },
    {
      q: 'Можно ли не платить кредит, если прошло больше 3 лет?',
      a: 'Если с момента последнего платежа или окончания срока кредитного договора прошло более 3 лет, кредитор утрачивает право на судебную защиту. Но срок исковой давности не применяется судом автоматически — о нем обязательно нужно заявить в процессе.'
    },
    {
      q: 'Имеют ли право коллекторы звонить родственникам и на работу?',
      a: 'Нет. Согласно Федеральному закону № 230-ФЗ, звонки третьим лицам без их письменного согласия и согласия должника строго запрещены. При нарушениях мы готовим жалобы в ФССП, что влечет штрафы для коллекторов до 500 000 ₽.'
    },
    {
      q: 'Как сохранить прожиточный минимум при удержании приставами?',
      a: 'Федеральный закон № 234-ФЗ гарантирует должнику сохранение ежемесячного дохода в размере прожиточного минимума. Для этого подается заявление судебному приставу с указанием реквизитов счета, на который поступает доход.'
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
            <Link href="/grazhdanam/">Гражданам</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Кредитный юрист</span>
          </>
        }
        superTitle="ЗАЩИТА ЗАЕМЩИКОВ И СПОРЫ С БАНКАМИ • Липецк и область"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Кредитный юрист
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              в Липецке
            </span>
          </span>
        }
        subtitle="Защита прав заемщиков в спорах с банками, МФО и коллекторами: отмена судебных приказов, снижение неустойки и штрафов, применение срока исковой давности, защита от приставов."
        primaryCtaText="Получить консультацию юриста"
        primaryCtaLink="#form"
        primaryCtaAnalytics="co_hero_primary_click"
        primaryCtaSubtext="Разберем ситуацию и подберем законный способ снижения или аннулирования долга"
        imageUrl="/images/nacheshnikov.jpg"
        imageName="Владимир Викторович Начешников"
        imageSubtitle="Специалист по корпоративным процедурам и защите заемщиков, куратор направления"
        imageObjectPosition="center 15%"
        trustItems={[
          {
            text: (
              <span>
                <strong>Практический опыт с 1997 года</strong> в защите прав граждан и заемщиков
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Снижение неустойки и штрафов</strong> по ст. 333 ГК РФ до разумных пределов
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Отмена судебных приказов</strong> мировых судей Липецка и области под ключ
              </span>
            )
          }
        ]}
      />

      {/* ═══ БЛОК 2: НАПРАВЛЕНИЯ ПОМОЩИ (УСЛУГИ ХАБА) ═══ */}
      <section className="section bg-white" id="services" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '12px', color: 'var(--color-primary)' }}>
                Направления работы
              </span>
            </div>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--color-deep-blue)', margin: '0 0 16px', lineHeight: 1.25 }}>
              Услуги кредитного юриста в Липецке
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.65, margin: 0 }}>
              Комплексная защита прав граждан на всех стадиях: до суда, в мировых и районных судах, а также в исполнительном производстве.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {services.map((srv, idx) => (
              <div
                key={idx}
                className="hover-lift"
                style={{
                  background: srv.isChild ? 'linear-gradient(160deg, #FFFFFF 0%, #F5F0E6 100%)' : 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  border: srv.isChild ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                  borderTop: '4px solid var(--color-primary)',
                  padding: '36px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative'
                }}
              >
                <div>
                  <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '12px' }}>
                    {srv.badge}
                  </span>
                  <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px', lineHeight: 1.35 }}>
                    {srv.title}
                  </h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: '0 0 24px' }}>
                    {srv.desc}
                  </p>
                </div>
                <div>
                  <Link
                    href={srv.link}
                    className="btn btn-outline"
                    style={{ width: '100%', textAlign: 'center', padding: '12px 20px', fontSize: '14px', fontWeight: 600 }}
                  >
                    {srv.isChild ? 'Перейти к услуге →' : 'Подробнее →'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: ПРАКТИКА И КЕЙСЫ ═══ */}
      <CasesBlock
        cases={cases}
        title="Практика по кредитным спорам"
        showAllLink="/praktika"
        showAllText="Смотреть всю практику"
      />

      {/* ═══ БЛОК 4: ПОШАГОВЫЙ ПРОЦЕСС ═══ */}
      <ProcessBlock
        title="Как проходит защита прав заемщика"
        subtitle="Прозрачные этапы работы от правового анализа договора до вынесения итогового решения суда."
        steps={processSteps}
        ctaTitle="Банк требует долг или подал в суд?"
        ctaSubtitle="Оставьте заявку — кредитный юрист изучит документы и определит законные варианты снижения долга."
        ctaButtonText="Получить консультацию"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 5: СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость услуг кредитного юриста в Липецке"
        subtitle="Честные фиксированные цены без скрытых комиссий. Стоимость закрепляется в договоре."
        tiers={pricingTiers}
        ctaTitle="Рассчитаем стоимость защиты до начала работы"
        ctaSubtitle="Изучим кредитные документы, определим объем работы и зафиксируем стоимость выбранного пакета."
        ctaButtonText="Получить точный расчёт"
        ctaButtonLink="#form"
      />

      {/* ═══ БЛОК 6: СПЕЦИАЛИСТ ═══ */}
      <SpecialistBlock
        title="Куратор направления — Владимир Викторович Начешников"
        name="Владимир Викторович Начешников"
        position="Специалист по корпоративным процедурам и защите заемщиков, куратор направления"
        imageUrl="/images/nacheshnikov.jpg"
        imagePosition="center 15%"
        description={[
          'Владимир Начешников координирует правовую защиту заемщиков, отмену судебных приказов и судебные споры с кредитными организациями.',
          'Практический опыт в сфере юридических и процессуальных процедур — с 1997 года. Помогает заемщикам противостоять незаконным начислениям процентов, штрафов и неправомерным действиям коллекторов.',
          'Организует сбор доказательств, проведение контррасчетов задолженности, взаимодействие с мировыми и районными судами Липецка и области.'
        ]}
        buttonText="Задать вопрос Владимиру Начешникову"
        buttonHref="#form"
        profileHref="/specialisty/nacheshnikov-vladimir-viktorovich/"
        profileText="Подробнее о специалисте →"
      />

      {/* ═══ БЛОК 7: ЧАСТЫЕ ВОПРОСЫ (FAQ) ═══ */}
      <FAQBlock
        title="Частые вопросы заемщиков"
        subtitle="Ответы кредитного юриста на самые важные вопросы о долгах, судах и коллекторах."
        faqs={faqs}
      />

      {/* ═══ БЛОК 8: ОФИС И ФИНАЛЬНАЯ ФОРМА ═══ */}
      <section id="form" className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <ContactsForm
            title="Запишитесь на консультацию кредитного юриста"
            subtitle="Оставьте заявку — специалист свяжется с вами в течение 10–15 минут для предварительного анализа ситуации."
            buttonText="Получить консультацию"
            commentPlaceholder="Банк, МФО, сумма долга, стадия (звонки, суд, приставы)..."
            hiddenFields={[
              { name: 'service', value: 'kreditnyj_yurist_hub' },
              { name: 'source_block', value: 'hub_final_form' }
            ]}
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
