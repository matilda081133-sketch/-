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

export default function SoprovozhdenieStroitelstvaClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const faqs = [
    {
      q: 'На какой стадии подключать юриста по строительству?',
      a: 'Оптимально — до заключения основных договоров, заказа проектирования и начала строительно-монтажных работ. Но юрист может подключиться на любой стадии: сначала определяется, какие решения уже приняты, что можно скорректировать и какие сроки являются ближайшими.'
    },
    {
      q: 'Чем реконструкция отличается от капитального ремонта и перепланировки?',
      a: 'Реконструкция связана с изменением основных параметров объекта капитального строительства (высоты, количества этажей, площади, объёма), надстройкой, перестройкой или заменой несущих конструкций по ст. 1 Градостроительного кодекса РФ. Для неё требуется проект и разрешение.'
    },
    {
      q: 'Кто может быть застройщиком и техническим заказчиком?',
      a: 'Застройщиком выступает правообладатель земельного участка (собственник или арендатор), обеспечивающий строительство. Технический заказчик действует от имени застройщика, организует проектирование, изыскания и строительство и обязан состоять в СРО в случаях, предусмотренных ГрК РФ.'
    },
    {
      q: 'ГПЗУ разрешает начинать строительство?',
      a: 'Нет. Градостроительный план земельного участка содержит информацию для проектирования и последующих разрешительных процедур, но сам по себе не заменяет проектную документацию, положительное заключение экспертизы и разрешение на строительство.'
    },
    {
      q: 'Всегда ли нужны экспертиза проекта и разрешение на строительство?',
      a: 'Нет. Статьи 49 и 51 Градостроительного кодекса РФ предусматривают исключения (например, для ряда некапитальных строений или объектов вспомогательного использования). До начала работ необходимо документально подтвердить применимый режим.'
    },
    {
      q: 'Можно ли начать работы до получения разрешения на строительство?',
      a: 'Начало строительно-монтажных работ без разрешения влечёт административную ответственность по ст. 9.5 КоАП РФ со штрафами до 1 000 000 ₽ или приостановлением деятельности, а возводимый объект рискует быть признан самовольной постройкой (ст. 222 ГК РФ) с требованием о сносе.'
    },
    {
      q: 'Как правильно оформить изменения в проекте в процессе стройки?',
      a: 'Изменения должны фиксироваться авторским надзором, отражаться в исполнительной документации и проходить повторную экспертизу проектной документации либо экспертное сопровождение (ст. 49 ГрК РФ) с последующим внесением изменений в разрешение на строительство.'
    },
    {
      q: 'Что делать при отказе в выдаче разрешения на ввод объекта?',
      a: 'Проанализировать письменный мотивированный отказ органа строительного надзора или местного самоуправления. Часто причина кроется в расхождениях между фактическими параметрами объекта и исходным проектом, которые устраняются подготовкой скорректированного техплана.'
    },
    {
      q: 'Помогаете ли вы в составлении договоров генподряда?',
      a: 'Да. Разрабатываем сбалансированные договоры строительного подряда и генподряда с детальным регламентом сдачи-приёмки по формам КС-2/КС-3, порядком освидетельствования скрытых работ, гарантийными удержаниями и защитой от необоснованного отказа от оплаты.'
    },
    {
      q: 'От чего зависят срок и стоимость сопровождения строительного проекта?',
      a: 'От масштаба объекта (площадь, класс опасности, этажность), стадии подключения (до проектирования, в ходе стройки или на этапе ввода) и объёма задач (разработка договоров, аудит или сопровождение полного цикла).'
    }
  ];

  const situations = [
    {
      title: 'Старт проекта и договорная структура',
      desc: 'Требуется распределить функции застройщика, техзаказчика, генподрядчика и проектировщика и разработать пакет строительных договоров.',
      tag: 'Старт проекта'
    },
    {
      title: 'Получение разрешения на строительство',
      desc: 'Аудит проектной документации, подготовка заявления и правовое сопровождение получения разрешения в органе власти.',
      tag: 'Разрешение'
    },
    {
      title: 'Реконструкция коммерческого здания',
      desc: 'Планируется надстройка, пристройка или изменение несущих конструкций склада, цеха или ТЦ. Определяем правовой маршрут.',
      tag: 'Реконструкция'
    },
    {
      title: 'Изменения в проекте и допработы',
      desc: 'В ходе стройки возникла необходимость изменить проектные решения или выполнить допработы. Оформляем документацию без риска спора.',
      tag: 'Допработы'
    },
    {
      title: 'Ввод объекта в эксплуатацию',
      desc: 'Подготовка пакета для получения разрешения на ввод, технический план, преодоление замечаний Госстройнадзора.',
      tag: 'Ввод объекта'
    },
    {
      title: 'Риск самовольной постройки',
      desc: 'Строительство начато без разрешения или с отклонениями от проекта. Требуется правовая диагностика и план минимизации рисков сноса.',
      tag: 'Самострой'
    }
  ];

  const auditDirections = [
    {
      title: 'Правовой статус участка и ГПЗУ',
      desc: 'Соответствие параметров проектируемого объекта ВРИ, ПЗЗ, красным линиям и градостроительному плану участка.'
    },
    {
      title: 'Статус застройщика и СРО',
      desc: 'Полномочия заказчика, наличие обязательного членства в СРО у проектировщика, изыскателя и генерального подрядчика.'
    },
    {
      title: 'Договоры на изыскания и проект',
      desc: 'Технические задания, разграничение ответственности за ошибки в проекте, передача исключительных прав на документацию.'
    },
    {
      title: 'Экспертиза проектной документации',
      desc: 'Проверка необходимости государственной или негосударственной экспертизы, соответствие исходно-разрешительным данным.'
    },
    {
      title: 'Договорная обвязка генподряда',
      desc: 'Регламент сдачи-приёмки КС-2/КС-3, графики платежей, гарантийные удержания, ответственность за срыв сроков и дефекты.'
    },
    {
      title: 'Разрешительная документация',
      desc: 'Проверка комплектности документов по ст. 51 ГрК РФ для получения разрешения на строительство без риска возврата.'
    },
    {
      title: 'Строительный контроль и журналы',
      desc: 'Правовой регламент ведения исполнительной документации, актов скрытых работ и претензионной переписки на стройплощадке.'
    },
    {
      title: 'Подготовка к вводу и постановке на учёт',
      desc: 'Сверка фактических параметров по техплану с проектом и разрешением, подготовка заявления на ввод по ст. 55 ГрК РФ.'
    }
  ];

  const cases: CaseData[] = [
    {
      title: 'Юридическое сопровождение строительства логистического комплекса 8 500 кв. м',
      category: 'Новое строительство',
      problem: 'Инвестор планировал строительство крупного распределительного центра. Требовалось выстроить договорные отношения с техническим заказчиком, генпроектировщиком и генподрядчиком.',
      action: 'Разработали индивидуальные договоры генподряда с гарантийным удержанием 5% до истечения 12 месяцев эксплуатации, провели аудит проектной документации и сопроводили получение разрешения на строительство.',
      result: 'Разрешение на строительство получено с первого раза; строительно-монтажные работы завершены без взаимных претензий.'
    },
    {
      title: 'Правовое сопровождение реконструкции производственного корпуса',
      category: 'Реконструкция',
      problem: 'Предприятие увеличило высоту и площадь цеха за счёт возведения антресолей и пристроек, столкнувшись с предписанием надзорного органа о незаконной реконструкции.',
      action: 'Провели правовой и технический аудит, организовали подготовку проектной документации на реконструкцию, подтвердили соответствие нормам безопасности и сопроводили административную процедуру согласования.',
      result: 'Предписание снято без судебных штрафов; обновлённые параметры здания поставлены на государственный кадастровый учёт.'
    },
    {
      title: 'Преодоление отказа во вводе торгового комплекса в эксплуатацию',
      category: 'Ввод в эксплуатацию',
      problem: 'Орган местного самоуправления отказал во вводе в эксплуатацию ТК площадью 3 200 кв. м из-за незначительного расхождения площадей по результатам кадастровой съёмки.',
      action: 'Подготовили заключение проектной организации о допустимости отклонений в пределах строительных допусков по СП, внесли корректировки в исполнительную документацию и подали повторное заявление.',
      result: 'Получено разрешение на ввод объекта в эксплуатацию; зарегистрировано право собственности застройщика.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Экспертиза проектных документов и договоров',
      price: 'от 25 000 ₽',
      subtitle: 'Правовой аудит договоров подряда/проектирования, исходно-разрешительных документов и выявление рисков.',
      buttonText: 'Выбрать тариф',
      buttonHref: '#contacts-form',
      features: [
        { name: 'Анализ договоров с подрядчиками и СРО', value: '✓' },
        { name: 'Проверка исходно-разрешительного пакета', value: '✓' },
        { name: 'Составление протоколов разногласий', value: '✓' },
        { name: 'Письменные рекомендации по рискам', value: '✓' }
      ],
      popular: false
    },
    {
      title: 'Сопровождение получения разрешения',
      price: 'от 45 000 ₽',
      subtitle: 'Подготовка пакета по ст. 51 ГрК РФ, аудит экспертизы проекта и сопровождение взаимодействия с ведомством.',
      buttonText: 'Выбрать тариф',
      buttonHref: '#contacts-form',
      features: [
        { name: 'Проверка соответствия проекту и ГПЗУ', value: '✓' },
        { name: 'Подготовка заявления и правового пакета', value: '✓' },
        { name: 'Контроль рассмотрения в органе власти', value: '✓' },
        { name: 'Устранение возможных замечаний', value: '✓' }
      ],
      popular: true
    },
    {
      title: 'Сопровождение ввода объекта (ст. 55 ГрК РФ)',
      price: 'от 55 000 ₽',
      subtitle: 'Правовой контроль подготовки к вводу объекта, сопоставление техплана с проектом и получение разрешения на ввод.',
      buttonText: 'Выбрать тариф',
      buttonHref: '#contacts-form',
      features: [
        { name: 'Сверка фактических параметров и проекта', value: '✓' },
        { name: 'Проверка исполнительной документации', value: '✓' },
        { name: 'Получение разрешения на ввод в эксплуатацию', value: '✓' },
        { name: 'Кадастровый учёт и регистрация права', value: '✓' }
      ],
      popular: false
    },
    {
      title: 'Комплексный юридический надзор проекта',
      price: 'от 80 000 ₽',
      subtitle: 'Полное юридическое сопровождение строительства от исходной точки до регистрации права собственности.',
      buttonText: 'Выбрать тариф',
      buttonHref: '#contacts-form',
      features: [
        { name: 'Постоянное сопровождение всех договоров', value: '✓' },
        { name: 'Контроль актов КС-2/КС-3 и переписки', value: '✓' },
        { name: 'Урегулирование текущих разногласий', value: '✓' },
        { name: 'Взаимодействие с надзорными инстанциями', value: '✓' }
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
        '@id': 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/yuridicheskoe-soprovozhdenie-stroitelstva/#service',
        name: 'Юридическое сопровождение строительства и реконструкции в Липецке',
        serviceType: 'Юридические услуги по сопровождению строительства и реконструкции',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        url: 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/yuridicheskoe-soprovozhdenie-stroitelstva/'
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/yuridicheskoe-soprovozhdenie-stroitelstva/#faq',
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
            <span style={{ color: 'var(--color-text-muted)' }}>Сопровождение строительства</span>
          </>
        }
        superTitle="Строительство и реконструкция • Бизнесу • Липецк"
        title="Юридическое сопровождение строительства и реконструкции в Липецке"
        subtitle="Сформируем юридический маршрут проекта, подготовим договоры подряда и разрешительную базу, проконтролируем изменения и сопроводим объект до ввода в эксплуатацию."
        trustItems={[
          { text: 'Начинаем до закупки и подрядных работ' },
          { text: 'Связываем договоры, проект и разрешения' },
          { text: 'Стоимость и состав задач фиксируем в договоре' }
        ]}
        primaryCtaText="Обсудить строительный проект"
        primaryCtaLink="#form"
        secondaryCtaText="Что проверит юрист"
        secondaryCtaLink="#situations"
      />

      {/* ═══ 2. КОГДА НУЖЕН ЮРИСТ ПО СТРОИТЕЛЬСТВУ ═══ */}
      <section style={{ backgroundColor: 'var(--color-white)', padding: '64px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 40px' }}>
            <h2 className="nowrap-desk" style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              Когда проекту требуется юридическое сопровождение
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Помогаем застройщикам, техническим заказчикам и инвесторам предотвратить риски штрафов, простоев и отказа во вводе объекта.
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

      {/* ═══ 3. НАПРАВЛЕНИЯ АУДИТА ═══ */}
      <section id="project-audit" style={{ backgroundColor: '#F8FAFC', padding: '64px 0', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 40px' }}>
            <h2 className="nowrap-desk" style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              Что проверит юрист: 8 ключевых блоков проекта
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Правовая экспертиза строительного проекта от градостроительного регламента до итоговой документации ввода в эксплуатацию.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px'
          }}>
            {auditDirections.map((item, idx) => (
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
                Что подготовить для первичной оценки проекта
              </h3>
              <p style={{ fontSize: '15px', color: '#CBD5E1', lineHeight: 1.6 }}>
                Для первого обсуждения достаточно адреса объекта, кадастрового номера, назначения здания и текущей стадии.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '16px',
              marginBottom: '32px'
            }}>
              {[
                'Адрес и кадастровые номера земельного участка и реконструируемого объекта',
                'Краткое описание параметров: площадь застройки, этажность, назначение объекта',
                'Выписки из ЕГРН на землю и здание, договоры аренды и сервитуты — если есть',
                'ПЗЗ, ГПЗУ, техусловия и исходно-разрешительные документы — если получены',
                'Проектная документация, заключения экспертизы и разрешения на строительство',
                'Договоры с техзаказчиком, проектировщиком, подрядчиками и акты КС-2/КС-3',
                'Заявления, замечания, отказы ведомств и предписания органов стройнадзора'
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
                Отправить параметры проекта на оценку
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 5. ЭТАПЫ СОПРОВОЖДЕНИЯ СТРОИТЕЛЬСТВА (PROCESS BLOCK) ═══ */}
      <ProcessBlock
        title="Этапы сопровождения строительного проекта"
        subtitle="Восемь стадий правового контроля: от подготовки до ввода в эксплуатацию и регистрации права"
        steps={[
          {
            num: '01',
            title: 'Аудит участка и исходных данных',
            desc: 'Проверяем права на землю, ПЗЗ, ГПЗУ и технические ограничения перед проектированием.'
          },
          {
            num: '02',
            title: 'Договоры с проектировщиками',
            desc: 'Фиксируем техническое задание, этапы проектирования, согласование в экспертизе и авторские права.'
          },
          {
            num: '03',
            title: 'Экспертиза проекта и разрешение',
            desc: 'Контролируем комплектность по ст. 51 ГрК РФ и сопровождение получения разрешения на строительство.'
          },
          {
            num: '04',
            title: 'Договоры генподряда и стройки',
            desc: 'Разрабатываем регламенты сдачи-приёмки КС-2/КС-3, удержаний, штрафов и порядка допработ.'
          },
          {
            num: '05',
            title: 'Правовой надзор в ходе стройки',
            desc: 'Юридическое сопровождение изменений в проект, актов скрытых работ и претензионной переписки.'
          },
          {
            num: '06',
            title: 'Проверка исполнительной базы',
            desc: 'Аудит соответствия техплана, журналов работ и разрешительных документов перед подачей на ввод.'
          },
          {
            num: '07',
            title: 'Получение разрешения на ввод',
            desc: 'Сопровождение процедуры по ст. 55 ГрК РФ и преодоление возможных замечаний органа надзора.'
          },
          {
            num: '08',
            title: 'Кадастровый учёт и регистрация',
            desc: 'Постановка здания на кадастровый учёт и государственная регистрация права собственности в Росреестре.'
          }
        ]}
      />

      {/* ═══ 6. ПРАКТИКА (CASES BLOCK) ═══ */}
      <CasesBlock
        cases={cases}
        title="Практика сопровождения строительных проектов"
      />

      {/* ═══ 7. СТОИМОСТЬ (PRICING BLOCK) ═══ */}
      <PricingBlock
        title="Стоимость сопровождения строительства"
        subtitle="Прозрачные тарифы на аудит, согласования и абонентский надзор проектов"
        tiers={pricingTiers}
      />

      {/* ═══ 8. ВОПРОСЫ И ОТВЕТЫ (FAQ BLOCK) ═══ */}
      <FAQBlock
        title="Частые вопросы по строительству и реконструкции"
        subtitle="Разъяснения юриста о разрешениях на строительство, экспертизе проектов и вводе объектов"
        faqs={faqs}
      />

      {/* ═══ 9. ФОРМА ОБРАТНОЙ СВЯЗИ (CONTACTS FORM) ═══ */}
      <ContactsForm
        title="Обсудите строительный проект с юристом"
        subtitle="Оставьте заявку на предварительный анализ проекта или реконструкции. Мы свяжемся с вами в течение 15 минут в рабочее время."
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
              Консультация по строительному проекту
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: 1.5, marginBottom: '24px' }}>
              Укажите ваши контактные данные и стадию проекта. Профильный юрист свяжется с вами в рабочее время.
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
                  Параметры объекта и стадия
                </label>
                <textarea
                  rows={3}
                  placeholder="Строительство склада, реконструкция цеха, получение разрешения на ввод..."
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
