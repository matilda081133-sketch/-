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

export default function YuristNedvizhimostStroitelstvoClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 10 FAQ items from ТЗ BIZ-09
  const faqs = [
    {
      q: 'С какими задачами помогает юрист по недвижимости и строительству для бизнеса?',
      a: 'Помогаем проверить и сопроводить сделки с коммерческой недвижимостью, аренду, земельно-градостроительные вопросы, строительство и реконструкцию, а также споры между участниками строительного проекта. Конкретный состав помощи зависит от объекта, стадии и документов.'
    },
    {
      q: 'На чьей стороне вы работаете?',
      a: 'Можем представлять покупателя или продавца, арендодателя или арендатора, заказчика или подрядчика. До начала работы проверяем возможный конфликт интересов и фиксируем, чьи интересы и на каких этапах защищает юридическая компания.'
    },
    {
      q: 'Когда лучше подключать юриста к сделке с коммерческой недвижимостью?',
      a: 'До внесения задатка, подписания предварительного или основного договора и проведения расчётов. Если документы уже подписаны, можно передать их на анализ, чтобы определить оставшиеся риски и возможные действия.'
    },
    {
      q: 'Проверяете ли вы не только договор, но и сам объект?',
      a: 'Объём проверки согласуется отдельно. В него могут входить права и обременения, основания приобретения объекта, сведения ЕГРН, судебные и исполнительные риски, договоры аренды, права на землю и градостроительные ограничения. Техническое состояние оценивают профильные специалисты.'
    },
    {
      q: 'Можно ли обратиться только для проверки договора аренды?',
      a: 'Да. Можно согласовать отдельную экспертизу договора, подготовку протокола разногласий, участие в переговорах либо комплексное сопровождение заключения, изменения или расторжения аренды.'
    },
    {
      q: 'На какой стадии строительства нужен юрист?',
      a: 'Юрист может подключиться до приобретения участка, при формировании договорной структуры, получении разрешительной документации, исполнении договоров, приёмке, вводе объекта или после возникновения спора. Чем раньше выявлен правовой риск, тем больше вариантов его учесть в документах и действиях сторон.'
    },
    {
      q: 'Вы помогаете получить разрешение на строительство или ввод объекта?',
      a: 'Можем проверить правовую часть исходных документов, определить возможный маршрут, подготовить обращения и сопровождать взаимодействие с органами в согласованном объёме. Возможность получения документа оценивается только после анализа объекта, земли и стадии проекта.'
    },
    {
      q: 'Что делать, если уже получены претензия, иск, отказ или предписание?',
      a: 'Сохраните документ, приложения, подтверждение даты получения и связанную переписку. Передайте юристу сведения о документе и ближайших датах. Не подписывайте ответ или соглашение, смысл и последствия которых не проверены.'
    },
    {
      q: 'Какие документы нужны для первой встречи?',
      a: 'Полезны сведения об объекте, кадастровый номер, выписка ЕГРН, договоры и приложения, переписка, претензии, акты, градостроительные или разрешительные документы. Полный перечень определяется после уточнения задачи; отсутствие части документов не мешает начать первичный разбор.'
    },
    {
      q: 'От чего зависят срок и стоимость юридической помощи?',
      a: 'От количества объектов и участников, стадии проекта или спора, объёма документов, срочности, необходимости переговоров, экспертизы, судебного представительства и привлечения технических специалистов. Состав работ и порядок оплаты согласуются до начала соответствующего этапа.'
    }
  ];

  // 5 Directions of the cluster
  const directions = [
    {
      title: 'Сопровождение сделок с коммерческой недвижимостью',
      desc: 'Проверим объект, правообладателя и документы, поможем согласовать условия и сопроводим сделку на выбранных этапах.',
      href: '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/soprovozhdenie-sdelok-s-kommercheskoy-nedvizhimostyu/',
      badge: 'Покупка и продажа'
    },
    {
      title: 'Юридическое сопровождение аренды коммерческой недвижимости',
      desc: 'Подготовим или проверим договор, оценим риски арендодателя или арендатора и поможем урегулировать разногласия.',
      href: '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/yuridicheskoe-soprovozhdenie-arendy-kommercheskoy-nedvizhimosti/',
      badge: 'Аренда'
    },
    {
      title: 'Земельно-градостроительное сопровождение бизнеса',
      desc: 'Проверим правовой режим участка, градостроительные ограничения и возможность реализации коммерческого проекта.',
      href: '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/zemelno-gradostroitelnoe-soprovozhdenie/',
      badge: 'Земля и ПЗЗ'
    },
    {
      title: 'Юридическое сопровождение строительства и реконструкции',
      desc: 'Сформируем юридический маршрут проекта и подключимся к договорам, разрешительной работе, переписке и оформлению результата.',
      href: '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/yuridicheskoe-soprovozhdenie-stroitelstva/',
      badge: 'Проекты и стройка'
    },
    {
      title: 'Юрист по строительным спорам',
      desc: 'Разберём договор, акты и технические материалы, сформируем позицию и представим интересы в переговорах или арбитражном суде.',
      href: '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/stroitelnye-spory/',
      badge: 'Арбитраж и подряд'
    }
  ];

  // 8 Situations from ТЗ 7.1
  const situations = [
    {
      title: 'Покупка или продажа объекта',
      desc: 'Нужно проверить коммерческую недвижимость, продавца, ограничения и условия сделки до подписания документов.',
      linkText: 'Перейти к сопровождению сделки',
      href: '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/soprovozhdenie-sdelok-s-kommercheskoy-nedvizhimostyu/'
    },
    {
      title: 'Коммерческая аренда',
      desc: 'Нужно подготовить или проверить договор, изменить условия, расторгнуть аренду либо урегулировать спор по помещению.',
      linkText: 'Перейти к аренде',
      href: '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/yuridicheskoe-soprovozhdenie-arendy-kommercheskoy-nedvizhimosti/'
    },
    {
      title: 'Участок под проект',
      desc: 'Нужно понять, допускают ли права на землю, ВРИ, ПЗЗ, ГПЗУ и ограничения запланированное использование или строительство.',
      linkText: 'Перейти к земельному блоку',
      href: '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/zemelno-gradostroitelnoe-soprovozhdenie/'
    },
    {
      title: 'Строительство или реконструкция',
      desc: 'Требуется юридическая дорожная карта, договорная структура, разрешительная документация или сопровождение проекта до ввода.',
      linkText: 'Перейти к сопровождению строительства',
      href: '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/yuridicheskoe-soprovozhdenie-stroitelstva/'
    },
    {
      title: 'Конфликт по строительным работам',
      desc: 'Заказчик или подрядчик спорит об оплате, сроках, объёме, качестве, приёмке, недостатках или возврате аванса.',
      linkText: 'Перейти к строительным спорам',
      href: '/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/stroitelnye-spory/'
    },
    {
      title: 'Отказ органа или Росреестра',
      desc: 'Получен отказ, приостановка или требование представить дополнительные документы. Сначала определим предмет и правильный маршрут.',
      linkText: 'Получить разбор отказа',
      action: () => setIsModalOpen(true)
    },
    {
      title: 'Риск самовольной постройки',
      desc: 'Объект или реконструкцию считают самовольными, требуют прекратить использование, привести объект в соответствие или снести.',
      linkText: 'Срочная правовая оценка',
      action: () => setIsModalOpen(true)
    },
    {
      title: 'Задача затрагивает несколько стадий',
      desc: 'Покупка участка, изменение режима, строительство, аренда или спор связаны между собой и требуют общего плана действий.',
      linkText: 'Комплексная консультация',
      action: () => setIsModalOpen(true)
    }
  ];

  // 3 Cases from ТЗ section 8
  const cases: CaseData[] = [
    {
      title: 'Проверка имущественного комплекса перед покупкой',
      category: 'Сделка с объектом',
      problem: 'Бизнес планировал приобрести комплекс коммерческих зданий с земельным участком. Требовалось проверить историю перехода прав, обременения и риски оспаривания.',
      action: 'Проанализировали ЕГРН и правоустанавливающие документы, сопоставили сведения об объектах и участке, выявили скрытые риски и условия, которые следовало урегулировать до расчётов и подачи на регистрацию.',
      result: 'Стороны скорректировали договор и безопасный порядок расчётов; покупатель принял решение после получения структурированной оценки рисков.'
    },
    {
      title: 'Подготовка участка под производственный комплекс',
      category: 'Земля под проект',
      problem: 'Бизнес рассматривал земельный участок под размещение производственного объекта, но действующий режим земли и градостроительные документы требовали дополнительной проверки.',
      action: 'Проверили права на участок, вид разрешённого использования (ВРИ), территориальную зону по ПЗЗ, охранные зоны (ЗОУИТ) и доступные юридические процедуры; сформировали дорожную карту согласований.',
      result: 'Компания получила правовую дорожную карту и смогла объективно оценить реализуемость проекта до совершения основных инвестиций.'
    },
    {
      title: 'Защита генподрядчика в арбитражном споре по КС-2',
      category: 'Строительный спор',
      problem: 'Заказчик отказался оплачивать часть строительных работ, ссылаясь на недостатки и несоответствие объёма, указанного в исполнительной документации.',
      action: 'Изучили договор строительного подряда, смету, акты КС-2/КС-3, деловую переписку и журналы работ. Сформировали правовую позицию по односторонней приёмке, подготовили претензионные и процессуальные документы.',
      result: 'Обосновали надлежащее исполнение и соблюдение порядка сдачи работ; требования по оплате и встречные доводы рассмотрены с учётом строительной экспертизы.'
    }
  ];

  // 4 Pricing tiers from ТЗ 7.3
  const pricingTiers: PricingTier[] = [
    {
      title: 'Консультация и первичный разбор',
      price: 'от 5 000 ₽',
      subtitle: 'Анализ обстоятельств и стадии проекта, первичный просмотр документов и определение следующего правового шага.',
      buttonText: 'Выбрать тариф',
      buttonHref: '#contacts-form',
      features: [
        { name: 'Изучение исходных сведений и документов', value: '✓' },
        { name: 'Оценка рисков и стадии спора/проекта', value: '✓' },
        { name: 'Определение профильного направления', value: '✓' },
        { name: 'Рекомендации по следующим действиям', value: '✓' }
      ],
      popular: false
    },
    {
      title: 'Юридический аудит объекта или договора',
      price: 'от 25 000 ₽',
      subtitle: 'Глубокая правовая проверка объекта, участка или сложного договора аренды/подряда с фиксацией рисков.',
      buttonText: 'Выбрать тариф',
      buttonHref: '#contacts-form',
      features: [
        { name: 'Проверка истории прав и обременений по ЕГРН', value: '✓' },
        { name: 'Анализ договоров, приложений и регламентов', value: '✓' },
        { name: 'Выявление скрытых стоп-факторов', value: '✓' },
        { name: 'Письменное заключение с дорожной картой', value: '✓' }
      ],
      popular: true
    },
    {
      title: 'Сопровождение сделки или этапа проекта',
      price: 'от 45 000 ₽',
      subtitle: 'Полное юридическое ведение сделки, переговоров, разрешительного этапа или изменения условий аренды.',
      buttonText: 'Выбрать тариф',
      buttonHref: '#contacts-form',
      features: [
        { name: 'Подготовка индивидуальных договоров и актов', value: '✓' },
        { name: 'Участие в переговорах с контрагентами', value: '✓' },
        { name: 'Контроль безопасных расчётов (аккредитив, эскроу)', value: '✓' },
        { name: 'Сопровождение регистрационных процедур', value: '✓' }
      ],
      popular: false
    },
    {
      title: 'Защита в строительном споре в суде',
      price: 'от 60 000 ₽',
      subtitle: 'Досудебное урегулирование, работа с технической экспертизой и представительство бизнеса в арбитражном суде.',
      buttonText: 'Выбрать тариф',
      buttonHref: '#contacts-form',
      features: [
        { name: 'Анализ КС-2, КС-3, исполнительной документации', value: '✓' },
        { name: 'Претензионная работа и досудебный порядок', value: '✓' },
        { name: 'Формирование иска / отзыва и вопросов эксперту', value: '✓' },
        { name: 'Представительство во всех заседаниях арбитража', value: '✓' }
      ],
      popular: false
    }
  ];

  // Schema.org JSON-LD
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
        '@id': 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/#service',
        name: 'Юрист по недвижимости и строительству для бизнеса в Липецке',
        serviceType: 'Юридические услуги по коммерческой недвижимости, земле и строительству',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        url: 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/'
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/#faq',
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
            <span style={{ color: 'var(--color-text-muted)' }}>Юрист по недвижимости и строительству</span>
          </>
        }
        superTitle="Недвижимость и строительство • Бизнесу • Липецк и Липецкая область"
        title="Юрист по недвижимости и строительству для бизнеса в Липецке"
        subtitle="Проверим документы и правовые риски, определим подходящий формат помощи и подключимся к сделке, строительному проекту или спору на согласованных этапах."
        trustItems={[
          { text: 'Начинаем с документов и стадии проекта' },
          { text: 'Разделяем юридические, технические и финансовые риски' },
          { text: 'Состав работ и стоимость фиксируем в договоре' }
        ]}
        primaryCtaText="Обсудить задачу бизнеса"
        primaryCtaLink="#form"
        secondaryCtaText="Выбрать направление"
        secondaryCtaLink="#situations"
      />

      {/* ═══ 2. КОМУ ПОМОГАЕМ (СЕГМЕНТЫ) ═══ */}
      <section style={{ backgroundColor: 'var(--color-white)', padding: '54px 0 40px', borderBottom: '1px solid #ECEFF2' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 36px' }}>
            <h2 className="nowrap-desk" style={{ fontSize: '28px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              Кому помогаем
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Работаем с обеими сторонами коммерческих отношений. Позицию и возможный конфликт интересов проверяем до заключения договора с клиентом.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px'
          }}>
            {[
              { role: 'Собственники и инвесторы', desc: 'Защита активов, проверка чистоты объектов и планирование юридических маршрутов' },
              { role: 'Покупатели и продавцы', desc: 'Due diligence, согласование безопасных расчётов и регистрация сделок' },
              { role: 'Арендодатели и арендаторы', desc: 'Договоры коммерческой аренды, урегулирование разногласий и возврат площадей' },
              { role: 'Заказчики и застройщики', desc: 'Разрешительная документация, договоры генподряда и контроль исполнения' },
              { role: 'Подрядчики и субподрядчики', desc: 'Защита по КС-2/КС-3, взыскание задолженности и экспертиза объёмов/качества' }
            ].map((seg, idx) => (
              <div key={idx} style={{
                backgroundColor: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '12px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '8px' }}>
                  {seg.role}
                </div>
                <div style={{ fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                  {seg.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. КАТАЛОГ НАПРАВЛЕНИЙ КЛАСТЕРА (BIZ-09-01 ... BIZ-09-05) ═══ */}
      <section id="directions" style={{ backgroundColor: 'var(--color-white)', padding: '64px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 40px' }}>
            <h2 className="nowrap-desk" style={{ fontSize: '32px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              Выберите направление
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Каждое направление закрывает конкретный этап работы с коммерческой недвижимостью, землёй или строительством.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            {directions.map((dir) => (
              <div
                key={dir.href}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '16px',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 16px rgba(16,39,59,0.04)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
              >
                <div>
                  <div style={{
                    display: 'inline-block',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(212,175,55,0.12)',
                    color: '#B8860B',
                    fontSize: '12px',
                    fontWeight: 600,
                    marginBottom: '16px'
                  }}>
                    {dir.badge}
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '12px', lineHeight: 1.35 }}>
                    {dir.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
                    {dir.desc}
                  </p>
                </div>
                <div>
                  <Link
                    href={dir.href}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: 'var(--color-primary)',
                      fontWeight: 600,
                      fontSize: '15px',
                      textDecoration: 'none'
                    }}
                  >
                    Подробнее об услуге
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. ТИПОВЫЕ СИТУАЦИИ И БОЛИ БИЗНЕСА ═══ */}
      <section style={{ backgroundColor: '#F8FAFC', padding: '64px 0', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 40px' }}>
            <h2 className="nowrap-desk" style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              С какой ситуацией столкнулся бизнес
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Определите ваш сценарий. Мы оперативно подключимся для правовой квалификации обстоятельств и анализа документов.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px'
          }}>
            {situations.map((sit, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '12px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '10px' }}>
                    {sit.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: 1.55, marginBottom: '18px' }}>
                    {sit.desc}
                  </p>
                </div>
                <div>
                  {sit.href ? (
                    <Link
                      href={sit.href}
                      style={{
                        fontSize: '13px',
                        fontWeight: 600,
                        color: 'var(--color-primary)',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      {sit.linkText} →
                    </Link>
                  ) : (
                    <button
                      onClick={sit.action}
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        fontSize: '13px',
                        fontWeight: 600,
                        color: 'var(--color-primary)',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      {sit.linkText} →
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 5. ДИАГНОСТИКА: ЧТО ПОДГОТОВИТЬ ДЛЯ ПЕРВИЧНОГО РАЗБОРА ═══ */}
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
                Документы для первичного разбора
              </h3>
              <p style={{ fontSize: '15px', color: '#CBD5E1', lineHeight: 1.6 }}>
                Для первого разговора достаточно адреса или кадастрового номера, роли компании и краткого описания задачи. Конфиденциальные материалы передаются только через согласованный безопасный канал.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '16px',
              marginBottom: '32px'
            }}>
              {[
                'Сведения об объекте и кадастровый номер земельного участка или здания',
                'Выписка из ЕГРН об основных характеристиках и зарегистрированных правах',
                'Правоустанавливающие документы и история предыдущих сделок',
                'Проект договора, предварительный договор или соглашение об авансе',
                'Переписка сторон, акты осмотра, претензии и доказательства их доставки',
                'Градостроительные документы: ПЗЗ, ГПЗУ, техусловия, документация по планировке',
                'Договор строительного подряда, сметы, формы КС-2/КС-3 и журналы работ',
                'Определения суда, решения надзорных органов или уведомления Росреестра'
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
                Передать задачу на первичный анализ
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 6. КАК СТРОИТСЯ РАБОТА (PROCESS BLOCK) ═══ */}
      <ProcessBlock
        title="Как строится работа с бизнесом"
        subtitle="Шесть последовательных этапов: от исходных материалов до согласованного юридического результата"
        steps={[
          {
            num: '01',
            title: 'Задача и стадия',
            desc: 'Уточняем объект, роль компании, статус переговоров, строительную стадию или процессуальный срок.'
          },
          {
            num: '02',
            title: 'Исходные материалы',
            desc: 'Запрашиваем только необходимые документы и определяем, чего не хватает для оценки риска.'
          },
          {
            num: '03',
            title: 'Юридическая квалификация',
            desc: 'Проверяем права, градостроительные ограничения, условия сделки или обязательства по подряду.'
          },
          {
            num: '04',
            title: 'Варианты и риски',
            desc: 'Показываем сильные и уязвимые стороны позиции, возможные сценарии и сопутствующие расходы.'
          },
          {
            num: '05',
            title: 'Договор и фиксация',
            desc: 'Согласуем состав задач, сроки, стоимость и регламент взаимодействия до начала работы.'
          },
          {
            num: '06',
            title: 'Реализация и сопровождение',
            desc: 'Готовим документы, ведём переговоры или судебный процесс, регулярно информируя о каждом этапе.'
          }
        ]}
      />

      {/* ═══ 7. ПРАКТИКА (CASES BLOCK) ═══ */}
      <CasesBlock
        cases={cases}
        title="Редакционная практика по недвижимости и строительству"
      />

      {/* ═══ 8. СТОИМОСТЬ (PRICING BLOCK) ═══ */}
      <PricingBlock
        title="Стоимость юридической помощи"
        subtitle="Прозрачное ценообразование: состав работ и стоимость фиксируются в договоре до начала каждого этапа"
        tiers={pricingTiers}
      />

      {/* ═══ 9. ВОПРОСЫ И ОТВЕТЫ (FAQ BLOCK) ═══ */}
      <FAQBlock
        title="Частые вопросы бизнеса"
        subtitle="Ответы на ключевые вопросы о сопровождении сделок, проверке земли, договорах и строительных спорах"
        faqs={faqs}
      />

      {/* ═══ 10. ФОРМА ОБРАТНОЙ СВЯЗИ (CONTACTS FORM) ═══ */}
      <ContactsForm
        title="Обсудите задачу с недвижимостью или строительством"
        subtitle="Кратко опишите объект, стадию и что произошло. Мы свяжемся с вами в рабочее время в течение 15 минут, уточним детали и скажем, какие документы потребуются для первичного разбора."
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
              Обсудить задачу бизнеса
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: 1.5, marginBottom: '24px' }}>
              Оставьте контактные данные. Профильный B2B-юрист свяжется с вами в рабочее время для предварительного обсуждения задачи.
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
                  Ваше имя или название компании
                </label>
                <input
                  type="text"
                  required
                  placeholder="ООО «Компания» или Иван"
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
                  Кратко о задаче или объекте
                </label>
                <textarea
                  rows={3}
                  placeholder="Сделка с объектом, спор по КС-2, проверка земли..."
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
              <div style={{ fontSize: '12px', color: '#94A3B8', marginTop: '12px', textAlign: 'center' }}>
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
