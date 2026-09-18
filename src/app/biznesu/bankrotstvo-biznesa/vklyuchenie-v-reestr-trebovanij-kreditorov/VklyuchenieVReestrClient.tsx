'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock, { FAQItem } from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import ProcessBlock, { ProcessStep } from '@/components/ProcessBlock';
import PricingBlock, { PricingTier } from '@/components/PricingBlock';
import SpecialistBlock from '@/components/SpecialistBlock';

export default function VklyuchenieVReestrClient() {
  const situations = [
    {
      tag: 'Поставка / подряд',
      title: 'Неоплата поставки или работ при открытой процедуре банкротства',
      desc: 'Должник вошёл в процедуру наблюдения или конкурсного производства. Проверим публикацию в ЕФРСБ, сроки и заявим обоснованное требование.'
    },
    {
      tag: 'Судебное решение',
      title: 'Решение и исполнительный лист получены, но взыскание остановлено',
      desc: 'После введения банкротства исполнительное производство оканчивается. Используем преюдицию судебного акта для скорейшего включения в реестр.'
    },
    {
      tag: 'Залоговое требование',
      title: 'Необходимость признания залогового статуса на имущество должника',
      desc: 'Подтвердим действительность залога оборудования, автотранспорта или недвижимости, чтобы получить преимущественное право на 80% выручки от торгов.'
    },
    {
      tag: 'Долг без суда',
      title: 'Требование подтверждается договором и первичными документами',
      desc: 'Отсутствие вступившего в силу решения не мешает включению. Сформируем безупречную доказательственную базу поставки и защитим её от возражений.'
    },
    {
      tag: 'Пропущенный срок',
      title: 'Двухмесячный срок закрытия реестра пропущен кредитором',
      desc: 'Оценим уважительность причин пропуска, проверим возможность восстановления срока либо обеспечим включение требований «за реестр».'
    },
    {
      tag: 'Текущие платежи',
      title: 'Обязательство должника возникло после возбуждения дела о банкротстве',
      desc: 'Текущие платежи погашаются вне очереди и не подлежат включению в реестр. Поможем взыскать текущий долг через банк или службу судебных приставов.'
    }
  ];

  const urgentCards = [
    {
      title: '30 дней в процедуре наблюдения',
      desc: 'Для участия в первом собрании кредиторов с правом голоса заявление должно быть подано в течение 30 календарных дней с даты официальной публикации в газете «Коммерсантъ».'
    },
    {
      title: '2 месяца в конкурсном производстве',
      desc: 'Реестр требований закрывается через 2 месяца с даты публикации о банкротстве. Требования, поданные позже, удовлетворяются «за реестром» — только после 100% погашения реестровых долгов.'
    },
    {
      title: 'Обязательное уведомление участников',
      desc: 'До подачи в арбитражный суд кредитор обязан направить копии заявления и документов должнику и арбитражному управляющему. Без квитанций об отправке суд оставит заявление без движения.'
    }
  ];

  const diagnosticContours = [
    {
      title: 'Дело и процессуальный срок',
      what: 'Арбитражный суд, номер дела, стадия процедуры, дата публикации в ЕФРСБ и «Коммерсанте», дата ближайшего заседания.',
      why: 'Точно рассчитать дедлайн подачи и не допустить закрытия реестра требований.'
    },
    {
      title: 'Правовой режим требования',
      what: 'Разграничение реестрового и текущего характера обязательства, очередность удовлетворения и залоговый статус.',
      why: 'Выбрать законный процессуальный маршрут и исключить отказ суда во включении.'
    },
    {
      title: 'Договорное основание и первичка',
      what: 'Договор, спецификации, товарные накладные, акты приёма-передачи, УПД, доверенности и выписки банка.',
      why: 'Подтвердить реальность хозяйственной операции и устранить сомнения суда в безденежности.'
    },
    {
      title: 'Обоснованный расчёт задолженности',
      what: 'Разделение основного долга, законных неустоек, процентов по ст. 395 ГК РФ и судебных расходов на дату введения процедуры.',
      why: 'Заявить правильную сумму, дающую максимальное количество голосов на собрании.'
    },
    {
      title: 'Отработка возможных возражений',
      what: 'Анализ рисков претензий со стороны управляющего или кредиторов (сроки давности, аффилированность, мнимость).',
      why: 'Заранее подготовить письменную правовую позицию и судебную практику ВС РФ.'
    },
    {
      title: 'Подача через «Мой Арбитр»',
      what: 'Формирование электронного пакета документов, подтверждение отправки сторонам, оплата госпошлины.',
      why: 'Зарегистрировать заявление в арбитражном суде без оставления без движения.'
    }
  ];

  const processSteps: ProcessStep[] = [
    {
      num: '01',
      title: 'Находим дело и проверяем публикацию',
      desc: 'Изучаем карточку дела в КАД и публикации в ЕФРСБ, фиксируем процедуру банкротства, процессуальные сроки и ближайшие заседания.'
    },
    {
      num: '02',
      title: 'Квалифицируем правовой режим требования',
      desc: 'Определяем реестровый или текущий режим долга, очередность удовлетворения, обеспечение и последствия возможного пропуска срока.'
    },
    {
      num: '03',
      title: 'Формируем доказательственную базу',
      desc: 'Проверяем первичные документы, реальность хозяйственных операций, расчёт задолженности, судебные акты и риски возражений.'
    },
    {
      num: '04',
      title: 'Готовим и подаём заявление',
      desc: 'Составляем мотивированное заявление, направляем копии управляющему и должнику, подаём документы в арбитражный суд через «Мой Арбитр».'
    },
    {
      num: '05',
      title: 'Защищаем требование в суде',
      desc: 'Отвечаем на отзывы и возражения участников дела, представляем дополнительные доказательства и участвуем в судебном заседании.'
    },
    {
      num: '06',
      title: 'Проверяем судебный акт и реестр',
      desc: 'Анализируем вынесенное определение суда, контролируем отражение требований в реестре и формулируем план дальнейших действий.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Срочная диагностика требования',
      subtitle: 'Экспресс-проверка дела и сроков',
      price: 'от 5 000 ₽',
      popular: false,
      features: [
        { name: 'проверка стадии банкротства и публикаций в ЕФРСБ', value: 'Да' },
        { name: 'анализ реестрового/текущего характера долга', value: 'Да' },
        { name: 'оценка рисков пропуска процессуального срока', value: 'Да' },
        { name: 'письменное заключение с планом действий', value: 'Да' }
      ],
      buttonText: 'Заказать диагностику',
      buttonHref: '#form'
    },
    {
      title: 'Подготовка и подача заявления',
      subtitle: 'Комплект документов для арбитража',
      price: 'от 15 000 ₽',
      popular: true,
      badgeText: 'Базовый',
      features: [
        { name: 'правовой анализ первичных документов и договоров', value: 'Да' },
        { name: 'составление расчёта основного долга и неустоек', value: 'Да' },
        { name: 'подготовка мотивированного заявления в суд', value: 'Да' },
        { name: 'направление участникам и электронная подача', value: 'Да' }
      ],
      buttonText: 'Подать заявление',
      buttonHref: '#form'
    },
    {
      title: 'Ведение требования при возражениях',
      subtitle: 'Судебная защита при сопротивлении сторон',
      price: 'от 30 000 ₽',
      popular: false,
      features: [
        { name: 'все действия тарифа «Подготовка и подача»', value: 'Да' },
        { name: 'подготовка мотивированных контрвозражений', value: 'Да' },
        { name: 'сбор дополнительных доказательств реальности', value: 'Да' },
        { name: 'участие в судебных заседаниях арбитража', value: 'Да' }
      ],
      buttonText: 'Защитить требование',
      buttonHref: '#form'
    },
    {
      title: 'Обжалование судебного акта',
      subtitle: 'Апелляция или кассация',
      price: 'от 20 000 ₽',
      popular: false,
      features: [
        { name: 'детальный анализ определения суда 1-й инстанции', value: 'Да' },
        { name: 'выявление нарушений материального и процессуального права', value: 'Да' },
        { name: 'составление и подача мотивированной жалобы', value: 'Да' },
        { name: 'представительство в суде апелляционной инстанции', value: 'Да' }
      ],
      buttonText: 'Обсудить обжалование',
      buttonHref: '#form'
    }
  ];

  const casesData: CaseData[] = [
    {
      category: 'Поставка / Оборудование',
      title: 'Включение требования поставщика без предшествующего решения суда',
      problem: 'Компания поставила производственное сырьё на 4,2 млн ₽. Должник вошёл в наблюдение. Конкурсный управляющий заявил возражения о недоказанности реальности поставки.',
      action: 'Уложились в 30-дневный срок, собрали полную первичную цепочку (УПД с отметками склада, путевые листы перевозчика, складские ордера) и отработали возражения в заседании.',
      result: 'Арбитражный суд Липецкой области признал требование полностью обоснованным и включил всю сумму 4,2 млн ₽ в третью очередь реестра.'
    },
    {
      category: 'Строительный подряд',
      title: 'Требование подрядчика на 8,6 млн ₽ по вступившему в силу решению суда',
      problem: 'Кредитор получил исполнительный лист, но судебные приставы окончили производство из-за введения конкурсного производства в отношении застройщика.',
      action: 'Проанализировали состав присуждённой суммы, разделили основной долг, неустойку и госпошлину, направили заявление управляющему и подали в арбитражный суд.',
      result: 'Требование 8,6 млн ₽ включено в реестр в первом же заседании суда без затягивания сроков.'
    },
    {
      category: 'Залог имущества',
      title: 'Подтверждение залогового статуса на промышленную спецтехнику',
      problem: 'Кредитор выдал финансирование под залог техники на 14 млн ₽. Управляющий оспаривал действительность залога и соответствие серийных номеров.',
      action: 'Провели анализ регистрации уведомлений в нотариальном реестре залогов, подтвердили фактическое нахождение техники у должника и разделили реестровые суммы.',
      result: 'Суд признал требование залоговым в полном объёме с правом преимущественного получения 80% денежных средств от продажи техники.'
    }
  ];

  const faqItems: FAQItem[] = [
    {
      q: 'Как узнать дату закрытия реестра требований кредиторов?',
      a: 'Дата закрытия реестра отсчитывается строго от даты публикации сообщения о введении соответствующей процедуры в официальном издании (газета «Коммерсантъ») и на Федресурсе (ЕФРСБ). В конкурсном производстве этот срок составляет 2 месяца со дня публикации.'
    },
    {
      q: 'Можно ли включиться в реестр, если нет решения суда?',
      a: 'Да. Наличие судебного акта не обязательно. В деле о банкротстве арбитражный суд самостоятельно исследует первичные документы (договоры, товарные накладные, акты, счета, сверки) и проверяет реальность отношений сторон.'
    },
    {
      q: 'Что будет, если пропустить двухмесячный срок закрытия реестра?',
      a: 'Требование всё равно можно заявить, однако оно будет признано судом «зареестровым». Это означает, что кредитор лишается права голоса на собраниях, а выплаты получит только после полного удовлетворения всех реестровых требований.'
    },
    {
      q: 'В чем разница между текущими и реестровыми платежами?',
      a: 'Реестровые требования — это долги, возникшие до принятия судом заявления о признании должника банкротом. Текущие платежи возникли после этой даты; они не включаются в реестр и погашаются должником в приоритетном внеочередном порядке.'
    },
    {
      q: 'Дает ли включение в реестр право голоса на собраниях кредиторов?',
      a: 'Право голоса дают требования третьей очереди по основному долгу и процентам. Неустойки, штрафы и пени учитываются в реестре отдельно и права голоса на собраниях кредиторов не предоставляют.'
    },
    {
      q: 'Кто может возражать против включения моего требования?',
      a: 'Возражения вправе заявить должник, арбитражный управляющий, а также любые конкурсные кредиторы, чьи требования уже включены в реестр. Наша задача — заблаговременно отработать все возможные возражения.'
    },
    {
      q: 'Нужно ли платить государственную пошлину за подачу заявления?',
      a: 'С сентября 2024 года законодательством введены новые правила уплаты государственной пошлины при обращении в арбитражный суд в делах о банкротстве. Точный размер госпошлины юрист рассчитывает индивидуально перед подачей заявления.'
    },
    {
      q: 'Сколько времени занимает рассмотрение заявления в суде?',
      a: 'Обычно судебное заседание по проверке обоснованности требования назначается в срок от 1 до 2 месяцев с даты принятия заявления арбитражным судом.'
    },
    {
      q: 'Гарантирует ли включение в реестр 100% возврат денег?',
      a: 'Включение в реестр юридически закрепляет долг и право на выплаты. Реальный процент возврата зависит от конкурсной массы, активности кредиторов при контроле управляющего и оспаривания подозрительных сделок должника.'
    },
    {
      q: 'Что делать после получения определения о включении в реестр?',
      a: 'Необходимо запросить у арбитражного управляющего выписку из реестра, зарегистрироваться для участия в собраниях кредиторов и перейти к контролю процедуры в рамках комплексного сопровождения кредитора.'
    }
  ];

  const relatedServices = [
    {
      title: 'Представление интересов кредитора',
      desc: 'Комплексный контроль процедуры банкротства и собраний кредиторов.',
      link: '/biznesu/bankrotstvo-biznesa/predstavlenie-interesov-kreditora/'
    },
    {
      title: 'Оспаривание сделок при банкротстве',
      desc: 'Возврат незаконно выведенного должником имущества в конкурсную массу.',
      link: '/biznesu/bankrotstvo-biznesa/osparivanie-sdelok-pri-bankrotstve/'
    },
    {
      title: 'Защита от субсидиарной ответственности',
      desc: 'Взыскание задолженности компании с личного имущества бенефициаров.',
      link: '/biznesu/bankrotstvo-biznesa/zashchita-ot-subsidiarnoj-otvetstvennosti/'
    },
    {
      title: 'Обжалование действий арбитражного управляющего',
      desc: 'Судебное пресечение бездействия и затягивания расчётов с кредиторами.',
      link: '/biznesu/bankrotstvo-biznesa/obzhalovanie-dejstvij-arbitrazhnogo-upravlyayushchego/'
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
        '@id': 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/vklyuchenie-v-reestr-trebovanij-kreditorov/#service',
        name: 'Включение в реестр требований кредиторов в Липецке',
        serviceType: 'Юридическое сопровождение включения в реестр требований кредиторов в деле о банкротстве',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        url: 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/vklyuchenie-v-reestr-trebovanij-kreditorov/',
        description: 'Проверка сроков и публикаций в ЕФРСБ, расчёт задолженности, подача заявления в арбитражный суд и судебное представительство при возражениях.'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/vklyuchenie-v-reestr-trebovanij-kreditorov/#breadcrumb',
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
            name: 'Банкротство бизнеса',
            item: 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/'
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Включение в реестр требований',
            item: 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/vklyuchenie-v-reestr-trebovanij-kreditorov/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/vklyuchenie-v-reestr-trebovanij-kreditorov/#faq',
        mainEntity: faqItems.map(item => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a
          }
        }))
      }
    ]
  };

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
            <Link href="/biznesu/">Бизнесу</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/biznesu/bankrotstvo-biznesa/">Банкротство бизнеса</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Включение в реестр требований</span>
          </>
        }
        superTitle={
          <span style={{ whiteSpace: 'normal', display: 'inline-block', lineHeight: 1.4 }}>
            <span style={{ display: 'inline-block' }}>БАНКРОТСТВО КОМПАНИИ • РЕЕСТР ТРЕБОВАНИЙ •</span> <br />
            <span style={{ display: 'inline-block' }}>Липецк и арбитраж</span>
          </span>
        }
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Включение в реестр
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              требований кредиторов
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Проверим публикацию в ЕФРСБ, стадию дела и режим долга. Подготовим заявление и доказательства, подадим документы через систему «Мой Арбитр» и защитим требование в арбитражном суде.
          </span>
        }
        primaryCtaText="Проверить срок и требование"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_vklyuchenie_v_reestr"
        primaryCtaSubtext={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Перезвоним в рабочее время
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              или ответим по телефону: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (4742) 20-15-25</a>
            </span>
          </span>
        }
        imageUrl="/images/nacheshnikov.jpg"
        imageName="Владимир Викторович Начешников"
        imageSubtitle="Куратор направления арбитражного и банкротного права"
        imageObjectPosition="center 15%"
        trustItems={[
          {
            text: (
              <span>
                <strong>Куратор направления</strong> — Владимир Викторович Начешников
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Строгий контроль сроков</strong> по ст. 71 и ст. 100 Закона № 127-ФЗ
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Доказывание долга</strong> по первичным документам даже без решения суда
              </span>
            )
          }
        ]}
      />

      {/* ═══ БЛОК 2: ТИПОВЫЕ СИТУАЦИИ (#situations) ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'inline-block' }}>Основания для включения</span> <br />
              <span style={{ display: 'inline-block' }}>требований в реестр</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              У каждой категории кредиторов свои процессуальные особенности: от преюдиции вступившего в силу решения суда до доказывания реальности поставок по первичным документам.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '32px' }}>
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
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('form');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else window.location.hash = 'form';
                  }}
                >
                  <span>Заявить требование</span>
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

      {/* ═══ БЛОК 3: СРОЧНОСТЬ — СРОКИ И РИСКИ (#urgent) ═══ */}
      <section className="section" id="urgent" style={{ background: 'var(--color-deep-blue)', color: '#FFFFFF', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '60px', height: '2px', background: 'var(--color-gold)' }}></div>
              <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Срочность обращения
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 3.8vw, 38px)', color: '#FFFFFF', margin: '0 0 16px 0', lineHeight: 1.25 }}>
              Не откладывайте подачу заявления — пропуск срока необратим
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.82)', margin: 0, lineHeight: 1.65 }}>
              Сроки в банкротстве исчисляются строго по публикациям в официальных источниках. Ошибка в расчете даты лишает кредитора права голоса и гарантий выплат:
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '40px' }}>
            {urgentCards.map((card, cIdx) => (
              <div
                key={cIdx}
                className="urgent-card hover-lift"
                style={{
                  background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)',
                  padding: '30px 24px',
                  borderTop: '4px solid var(--color-gold)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <div style={{ fontSize: '16.5px', fontWeight: 700, color: 'var(--color-deep-blue)', lineHeight: 1.35, fontFamily: 'var(--font-serif)' }}>
                      {card.title}
                    </div>
                  </div>
                  <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '14px', lineHeight: 1.55, margin: 0 }}>
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.08)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '24px 28px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px'
          }}>
            <div style={{ maxWidth: '680px' }}>
              <strong style={{ display: 'block', fontSize: '16px', color: '#FFFFFF', marginBottom: '4px' }}>
                Проверим дату публикации в ЕФРСБ и подготовим заявление за 48 часов
              </strong>
              <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.5 }}>
                Успеем подать документы до закрытия реестра и обеспечим надлежащее уведомление арбитражного управляющего.
              </span>
            </div>
            <a
              href="#form"
              className="btn"
              style={{
                background: 'var(--color-gold)',
                color: 'var(--color-deep-blue)',
                fontWeight: 700,
                padding: '14px 26px',
                whiteSpace: 'nowrap',
                textDecoration: 'none'
              }}
            >
              Срочная консультация
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: КОНТУРЫ ПРОВЕРКИ ТРЕБОВАНИЯ (#check) ═══ */}
      <section className="section" id="check" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              <span style={{ display: 'inline-block' }}>Шесть контуров правовой</span> <br />
              <span style={{ display: 'inline-block' }}>проверки требования кредитора</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Тщательная подготовка каждого документа исключает оставление без движения и отбивает возражения управляющего.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', position: 'relative' }}>
            {diagnosticContours.map((item, idx) => (
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
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '8px 0 14px 0', lineHeight: 1.35 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: '0 0 12px 0' }}>
                  <strong>Что исследуем:</strong> {item.what}
                </p>
                <p style={{ fontSize: '13.5px', color: 'var(--color-deep-blue)', lineHeight: 1.55, margin: 0, borderTop: '1px dashed var(--color-border)', paddingTop: '10px' }}>
                  <strong>Зачем:</strong> {item.why}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: КУРАТОР НАПРАВЛЕНИЯ ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Владимир Викторович Начешников"
        position="Специалист по арбитражным спорам и банкротству, куратор корпоративного направления"
        imageUrl="/images/nacheshnikov.jpg"
        imagePosition="center 15%"
        profileHref="/specialisty/nacheshnikov-vladimir-viktorovich/"
        profileText="Подробнее о Владимире Викторовиче Начешникове →"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Банкротство должника — это не формальная ликвидация компании, а сложный судебный процесс с высокими рисками личной субсидиарной ответственности руководства и учредителей.
          </span>,
          <span key="2" style={{ color: 'var(--color-deep-blue)', display: 'block', marginTop: '12px' }}>
            Владимир Викторович лично руководит правовым аудитом кризисной ситуации, оценивает безопасность сделок за трёхлетний период и формирует выверенную позицию для арбитражного суда.
          </span>
        ]}
        buttonText="Обсудить ситуацию с куратором"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 6: ПРАКТИКА И КЕЙСЫ ═══ */}
      <CasesBlock
        title={<><span style={{ display: 'inline-block' }}>Практика включения требований</span> <br /><span style={{ display: 'inline-block' }}>в реестр кредиторов</span></>}
        cases={casesData}
        showAllLink="/praktika/"
        showAllText="Смотреть всю практику →"
        showDemoWarning={true}
      />

      {/* ═══ БЛОК 7: ПОРЯДОК РАБОТЫ ═══ */}
      <ProcessBlock
        title="Порядок совместной работы"
        subtitle="Шесть шагов от проверки публикации до вынесения определения арбитражного суда."
        alignTitle="center"
        steps={processSteps}
        ctaTitle="Нужно заявить требование в арбитраж?"
        ctaSubtitle="Проверим карточку дела и подготовим комплект документов для суда."
        ctaButtonText="Заявить требование"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 8: ТАРИФЫ И СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость включения в реестр кредиторов"
        subtitle="Фиксированная стоимость юридических услуг. Все расходы взыскиваются с должника."
        tiers={pricingTiers}
        disclaimer="Госпошлина за рассмотрение требований в арбитражном суде, нотариальные расходы и почтовые отправления оплачиваются отдельно и при удовлетворении заявления возмещаются за счет должника."
        ctaTitle="Рассчитаем стоимость подготовки заявления"
        ctaSubtitle="Оставьте заявку — куратор проведет предварительный аудит дела и свяжется с вами."
        ctaButtonText="Рассчитать стоимость"
        ctaButtonLink="#form"
      />

      {/* ═══ БЛОК 9: FAQ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы кредиторов"
        title={<><span>Вопросы и ответы</span> <br /><span>о включении в реестр</span></>}
        subtitle="О сроках, первичных документах, госпошлинах и правах голоса"
        ctaText="Задать свой вопрос"
        ctaLink="#form"
        faqs={faqItems}
      />

      {/* ═══ БЛОК 10: СМЕЖНЫЕ НАПРАВЛЕНИЯ ПРАКТИКИ ═══ */}
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
              Смежные направления практики
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '24px'
            }}>
              <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 3.5vw, 34px)', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.25, flex: '1 1 480px', minWidth: '280px' }}>
                <span style={{ display: 'inline-block' }}>Связанные процедуры</span> <br /><span style={{ display: 'inline-block' }}>в банкротном праве</span>
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
                Комплексная защита прав кредиторов и взыскателей в арбитражных судах всех инстанций.
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

      {/* ═══ БЛОК 11: ФИНАЛЬНАЯ ФОРМА (#form) ═══ */}
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
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Проверьте требование</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>до закрытия реестра</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Сообщите номер дела или ИНН должника, сумму задолженности и статус документов. Юрист проверит процессуальный срок и скажет, какие материалы нужны для подачи.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация юриста</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните нам: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (4742) 20-15-25</a>
                </p>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '6px' }}>
                  Липецк, ул. Советская, д. 35, офис 213 (приём по записи)
                </div>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Конфиденциальность:</strong>
                Не указывайте в форме конфиденциальные финансовые сведения и закрытые договоры. Защищённый канал передачи документов согласуем после контакта.
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Заявка на включение в реестр"
                subtitle="Оставьте контакты и номер дела — юрист свяжется с вами в течение 15 минут в рабочее время."
                subtext="Если вы оставите заявку вечером или в выходной день, мы свяжемся с вами в ближайший рабочий день."
                buttonText="Проверить срок и требование"
                commentPlaceholder="Кратко укажите сумму долга, номер дела или наименование компании-должника…"
                hiddenFields={[
                  { name: 'source_page', value: '/biznesu/bankrotstvo-biznesa/vklyuchenie-v-reestr-trebovanij-kreditorov/' },
                  { name: 'service', value: 'Включение в реестр требований кредиторов' }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 12: FOOTER ═══ */}
      <Footer />
    </>
  );
}
