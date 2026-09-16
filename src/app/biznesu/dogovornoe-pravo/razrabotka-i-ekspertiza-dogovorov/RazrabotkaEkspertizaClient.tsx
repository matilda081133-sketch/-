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

export default function RazrabotkaEkspertizaClient() {
  const [activeContext, setActiveContext] = useState<string>('contract-review');

  const faqs = [
    {
      q: 'Что лучше: разработать новый договор или доработать шаблон?',
      a: 'Если шаблон соответствует типу сделки и реальному процессу компании, его можно доработать. Новый документ нужен, когда меняются роли сторон, предмет, расчёты, приёмка, набор приложений или схема отношений не укладывается в типовую конструкцию. Выбор делается после знакомства с задачей и материалами.'
    },
    {
      q: 'Что входит в правовую экспертизу договора?',
      a: 'Проверяем договор и согласованные приложения, сопоставляем условия с моделью сделки, оцениваем предмет, расчёты, сроки, приёмку, ответственность, изменение и прекращение, уведомления и порядок споров. Формат результата — комментарии, таблица рисков, правки или заключение — согласуется до начала работы.'
    },
    {
      q: 'Проверяете ли вы договор с позиции конкретной стороны?',
      a: 'Да. Один и тот же пункт по-разному влияет на поставщика и покупателя, заказчика и исполнителя, арендодателя и арендатора. При проверке учитываем роль компании, её фактические процессы и переговорные приоритеты, не подменяя коммерческие решения руководителя.'
    },
    {
      q: 'Можно ли проверить только самые рискованные разделы?',
      a: 'Да, если задача и границы проверки определены заранее. Например, можно сосредоточиться на приёмке, оплате, ответственности или одностороннем отказе. При этом юрист предупредит, если вывод по выбранному разделу зависит от других условий договора или приложений.'
    },
    {
      q: 'Подготовите ли вы протокол разногласий?',
      a: 'Да. Можно подготовить протокол разногласий, таблицу редакций либо договор с правками. Формат выбирается с учётом стадии согласования и принятого у сторон документооборота. Подписание документа контрагентом не гарантируется.'
    },
    {
      q: 'Можно ли подключить юриста к переговорам?',
      a: 'Да. Сначала определяем критичные и компромиссные условия, готовим формулировки и аргументы. Участие в переговорах включается в согласованный объём отдельно от базовой проверки, если это требуется.'
    },
    {
      q: 'Проверяете ли вы контрагента вместе с договором?',
      a: 'Базовая проверка полномочий и данных, которые влияют на заключение договора, может входить в задание. Расширенная проверка благонадёжности, судебной истории, лицензий, финансового положения и взаимосвязей согласуется отдельно: её объём зависит от сделки и доступных источников.'
    },
    {
      q: 'Сколько времени занимает разработка или проверка договора?',
      a: 'Срок зависит от объёма текста, количества приложений, специфики сделки и выбранного формата (только риски или подготовка новой редакции). Ориентировочный срок подтверждаем после просмотра материалов.'
    },
    {
      q: 'Можно ли получить консультацию и документы дистанционно?',
      a: 'Да. Обсуждение задачи проводим по телефону или видеосвязи, а документы передаём в электронном виде согласованным способом. Личное присутствие необходимо только для очных переговоров, если они согласованы.'
    },
    {
      q: 'От чего зависит стоимость услуг?',
      a: 'Стоимость зависит от объёма и сложности документов, количества приложений и участников, формата результата, необходимости переговоров и срока конкретного задания. Цену и состав работ согласуем до начала работы.'
    }
  ];

  const situations = [
    {
      tag: 'Новая сделка',
      title: 'Нет подходящего договора под новую модель работы',
      desc: 'Уточним роли сторон, последовательность действий, расчёты и подтверждающие документы; подготовим проект и необходимые приложения.',
      context: 'drafting',
      btnText: 'Обсудить разработку'
    },
    {
      tag: 'Проект контрагента',
      title: 'Вам прислали договор, и его нужно безопасно подписать',
      desc: 'Проверим условия на скрытые риски, несимметричные санкции, основания для одностороннего отказа и сложные правила приёмки.',
      context: 'counterparty_review',
      btnText: 'Передать на экспертизу'
    },
    {
      tag: 'Протокол разногласий',
      title: 'Нужно отклонить невыгодные условия и предложить свои',
      desc: 'Подготовим мотивированные формулировки, протокол разногласий или таблицу редакций, чтобы обосновать позицию перед контрагентом.',
      context: 'protocol',
      btnText: 'Подготовить протокол'
    },
    {
      tag: 'Сложные условия',
      title: 'Сделка нестандартная: смешанный договор, залог, поручительство',
      desc: 'Свяжем несколько обязательств в единую юридическую конструкцию, разграничим ответственность и порядок расчётов.',
      context: 'complex_deal',
      btnText: 'Разобрать сделку'
    },
    {
      tag: 'Переговоры',
      title: 'Контрагент настаивает на своей редакции, сделка под угрозой',
      desc: 'Поможем определить допустимые компромиссы, подготовить юридические аргументы и при согласовании подключимся к переговорам.',
      context: 'negotiation',
      btnText: 'Подключить к переговорам'
    },
    {
      tag: 'Допсоглашение',
      title: 'Нужно изменить объём, сроки, цену или расторгнуть договор',
      desc: 'Оценим последствия изменений, проверим основания прекращения обязательств и подготовим дополнительное соглашение или уведомление.',
      context: 'amendment',
      btnText: 'Согласовать изменения'
    }
  ];

  const formats = [
    {
      badge: 'Формат 01',
      title: 'Разработка договора с нуля',
      desc: 'Создаём договор под конкретную коммерческую модель, регламенты и документооборот компании. Включаем необходимые приложения и акты.',
      result: 'Готовый рабочий проект договора и комплект приложений.',
      context: 'drafting',
      cta: 'Обсудить разработку'
    },
    {
      badge: 'Формат 02',
      title: 'Правовая экспертиза проекта',
      desc: 'Проверяем проект контрагента и связанные документы, фиксируем замечания, объясняем последствия и приоритетность рисков.',
      result: 'Таблица рисков, экспертное заключение или комментарии.',
      context: 'review',
      cta: 'Передать на проверку'
    },
    {
      badge: 'Формат 03',
      title: 'Экспертиза с подготовкой правок',
      desc: 'Не только указываем проблему, но и предлагаем рабочую редакцию спорных пунктов либо протокол разногласий к договору.',
      result: 'Протокол разногласий или договор в режиме рецензирования.',
      context: 'redline',
      cta: 'Обсудить правки'
    },
    {
      badge: 'Формат 04',
      title: 'Согласование и переговоры',
      desc: 'Готовим переговорную позицию, обоснования для контрагента и при необходимости участвуем в согласовании условий.',
      result: 'Согласованная редакция и защита коммерческих интересов.',
      context: 'negotiation',
      cta: 'Подключить к переговорам'
    }
  ];

  const reviewScope = [
    {
      title: 'Предмет и модель сделки',
      what: 'Что именно должна сделать каждая сторона, в какой последовательности и с каким измеримым результатом.',
      why: 'Размытый предмет осложняет исполнение, приёмку и требования сторон.'
    },
    {
      title: 'Цена и порядок расчётов',
      what: 'Формула цены, НДС, авансирование, этапы, основания платежа, удержания, изменение стоимости.',
      why: 'Оплата должна быть связана с понятными событиями и первичными документами.'
    },
    {
      title: 'Сроки исполнения и заявки',
      what: 'Начало и окончание, этапы, порядок подачи заявок, продление, перенос и последствия просрочки.',
      why: 'Неоднозначные сроки создают споры о моменте нарушения обязательств.'
    },
    {
      title: 'Приёмка и документооборот',
      what: 'Акты, накладные, универсальные передаточные документы (УПД), электронный документооборот, сроки проверки.',
      why: 'Договор должен учитывать реальный процесс фиксации исполнения.'
    },
    {
      title: 'Качество и гарантийные обязательства',
      what: 'Требования к товару или услуге, гарантийный период, порядок фиксации дефектов и сроки их устранения.',
      why: 'Общие фразы без чёткой процедуры не защищают от убытков.'
    },
    {
      title: 'Ответственность и штрафные санкции',
      what: 'Неустойка, пени, штрафы, ограничение ответственности, возмещение потерь, заверения об обстоятельствах.',
      why: 'Проверяем соразмерность санкций и отсутствие несимметричных штрафов.'
    },
    {
      title: 'Изменение и расторжение',
      what: 'Основания одностороннего отказа, порядок уведомлений, последствия прекращения сделки, возврат предоплаты.',
      why: 'Важно предусмотреть безопасный выход из сделки без судебных штрафов.'
    },
    {
      title: 'Подсудность и претензионный порядок',
      what: 'Срок ответа на претензию, выбор суда, электронные уведомления и адреса для юридически значимых сообщений.',
      why: 'Формальные оговорки должны исключать территориальные неудобства при споре.'
    }
  ];

  const contractTypes = [
    'Поставка товаров и оборудования',
    'Возмездное оказание коммерческих услуг',
    'Подряд (кроме строительного)',
    'Коммерческая аренда и субаренда',
    'Купля-продажа коммерческого имущества',
    'Перевозка и транспортная экспедиция',
    'Складское и ответственное хранение',
    'Заем и финансовые документы',
    'Агентирование, комиссия и поручение',
    'Финансовый лизинг',
    'Уступка права требования (цессия) и перевод долга',
    'Лицензионные и смешанные договоры'
  ];

  const workSteps = [
    {
      num: '01',
      title: 'Уточняем сделку и приоритеты',
      desc: 'Вы описываете бизнес-задачу, стороны, порядок исполнения и условия, которые для компании критичны.'
    },
    {
      num: '02',
      title: 'Проверяем комплект материалов',
      desc: 'Изучаем договор, приложения и исходные данные; определяем недостающие документы и вопросы.'
    },
    {
      num: '03',
      title: 'Согласуем объём и результат',
      desc: 'Фиксируем формат: проект, комментарии, таблица рисков, правки, протокол разногласий или переговоры; определяем стоимость и срок.'
    },
    {
      num: '04',
      title: 'Разрабатываем или проверяем',
      desc: 'Сопоставляем юридические условия с фактической схемой сделки и готовим согласованный результат.'
    },
    {
      num: '05',
      title: 'Обсуждаем выводы и доработки',
      desc: 'Объясняем критичные пункты, отвечаем на вопросы и в пределах согласованного объёма корректируем редакцию.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Консультация по условиям договора',
      price: 'ХХХ ₽',
      subtitle: 'Разбор проекта, обстоятельств сделки, рисков и рекомендаций по согласованию.',
      buttonText: 'Записаться на консультацию',
      buttonHref: '#form',
      features: [
        { name: 'Анализ ключевых условий сделки', value: '✓' },
        { name: 'Разбор рисков предмета, цены и расчётов', value: '✓' },
        { name: 'Оценка условий приёмки и ответственности', value: '✓' },
        { name: 'Рекомендации по тактике согласования', value: '✓' }
      ],
      popular: false
    },
    {
      title: 'Правовая экспертиза с правками',
      price: 'от ХХХ ₽',
      subtitle: 'Анализ проекта контрагента с таблицей рисков и подготовкой протокола разногласий.',
      buttonText: 'Заказать экспертизу договора',
      buttonHref: '#form',
      popular: true,
      badgeText: 'ВОСТРЕБОВАНО',
      features: [
        { name: 'Построчный правовой анализ текста и приложений', value: '✓' },
        { name: 'Таблица критичных и коммерческих рисков', value: '✓' },
        { name: 'Подготовка протокола разногласий или редакции', value: '✓' },
        { name: 'Аргументы для согласования с контрагентом', value: '✓' }
      ]
    },
    {
      title: 'Разработка договора под ключ',
      price: 'от ХХХ ₽',
      subtitle: 'Создание индивидуального договора под вашу бизнес-модель и документооборот.',
      buttonText: 'Заказать разработку договора',
      buttonHref: '#form',
      popular: false,
      features: [
        { name: 'Разработка структуры под специфику сделки', value: '✓' },
        { name: 'Защита от неисполнения и задержки оплаты', value: '✓' },
        { name: 'Комплект приложений: спецификации, формы актов', value: '✓' },
        { name: 'Доработка редакции по итогам обратной связи', value: '✓' }
      ]
    }
  ];

  const cases: CaseData[] = [
    {
      title: 'Исключили несимметричные штрафы и изменили условия приёмки',
      category: 'Экспертиза договора',
      problem: 'Покупатель предложил поставщику подписать договор с короткими сроками приёмки, правом удержания оплаты до года и несоразмерными штрафами за незначительную задержку отгрузки.',
      action: 'Провели правовую экспертизу проекта, подготовили протокол разногласий, сформулировали аргументы для переговоров и переписали разделы о приёмке, ответственности и порядке расчётов.',
      result: 'Стороны согласовали рабочую редакцию договора, в которой порядок поставки и подтверждающие документы соответствовали реальному процессу компании, а спорные риски были распределены понятнее.',
      isDemo: false
    },
    {
      title: 'Разработали договор оказания услуг со сложной формулой цены',
      category: 'Разработка договора',
      problem: 'Компания запускала B2B-сервис с плавающей стоимостью, зависящей от объёма обработанных заявок и KPI. Типовой договор из интернета не связывал отчёты с оплатой и создавал налоговые риски.',
      action: 'Уточнили модель расчётов, описали процедуру согласования ежемесячных отчётов, порядок фиксации объёма услуг и безопасный механизм мотивированного отказа от приёмки.',
      result: 'Подготовлен прозрачный договор с комплектом приложений, исключивший разногласия по расчётам и защитивший компанию при камеральной налоговой проверке.',
      isDemo: false
    },
    {
      title: 'Согласовали протокол разногласий к договору аренды склада',
      category: 'Протокол разногласий',
      problem: 'Арендодатель требовал право одностороннего увеличения ставки на 20% ежегодно, обеспечительный платёж в тройном размере и возложение капитального ремонта на арендатора.',
      action: 'Подготовили протокол разногласий, привязали индексацию к официальному уровню инфляции с предельным потолком 7%, разграничили текущий и капитальный ремонт и зафиксировали порядок возврата депозита.',
      result: 'Арендодатель подписал договор в редакции протокола разногласий без срыва сроков заезда арендатора на складской комплекс.',
      isDemo: false
    }
  ];

  const relatedServices = [
    {
      title: 'Аудит договорной работы компании',
      desc: 'Комплексная проверка всех применяемых типовых форм, маршрутов согласования и регламентов контроля обязательств.',
      link: '/biznesu/dogovornoe-pravo/audit-dogovornoj-raboty/'
    },
    {
      title: 'Договорные споры для бизнеса',
      desc: 'Досудебное претензионное урегулирование и ведение арбитражных дел при нарушении условий договора контрагентом.',
      link: '/biznesu/dogovornoe-pravo/dogovornye-spory/'
    },
    {
      title: 'Споры по договору поставки',
      desc: 'Узкопрофильная защита поставщиков и покупателей: проверка УПД, ТОРГ-12, транспортных накладных и взыскание долгов.',
      link: '/biznesu/dogovornoe-pravo/spory-po-dogovoru-postavki/'
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
        '@id': 'https://dejure-help.ru/biznesu/dogovornoe-pravo/razrabotka-i-ekspertiza-dogovorov/#service',
        name: 'Разработка и экспертиза договоров для бизнеса в Липецке',
        serviceType: 'Разработка и правовая экспертиза договоров',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        url: 'https://dejure-help.ru/biznesu/dogovornoe-pravo/razrabotka-i-ekspertiza-dogovorov/',
        description: 'Разработка и правовая экспертиза договоров для бизнеса в Липецке. Проверим проект контрагента, выявим скрытые риски, подготовим протокол разногласий или индивидуальный договор под ключ.'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://dejure-help.ru/biznesu/dogovornoe-pravo/razrabotka-i-ekspertiza-dogovorov/#breadcrumb',
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
            name: 'Разработка и экспертиза договоров',
            item: 'https://dejure-help.ru/biznesu/dogovornoe-pravo/razrabotka-i-ekspertiza-dogovorov/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/biznesu/dogovornoe-pravo/razrabotka-i-ekspertiza-dogovorov/#faq',
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
            <span style={{ color: 'var(--color-text-muted)' }}>Разработка и экспертиза</span>
          </>
        }
        superTitle="Договорное право • B2B • Липецк"
        title="Разработка и экспертиза договоров для бизнеса"
        subtitle="Подготовим договор под конкретную сделку или проверим проект контрагента: выявим риски, предложим формулировки и защитим позицию компании."
        trustItems={[
          { text: 'Анализируем условия под процессы и риски компании' },
          { text: 'Выделяем критичные, спорные и переговорные пункты' },
          { text: 'Готовим договор, правки или протокол разногласий' }
        ]}
        primaryCtaText="Обсудить договор"
        primaryCtaLink="#form"
        primaryCtaSubtext="Перезвоним в течение 15 минут в рабочее время"
        secondaryCtaText="Форматы помощи"
        secondaryCtaLink="#formats"
      />

      {/* ═══ 1.1. СТРОКА ДОВЕРИЯ ═══ */}
      <section style={{ backgroundColor: 'var(--color-bg-light)', borderBottom: '1px solid var(--color-border)', padding: '24px 0' }}>
        <div className="container">
          <div className="grid grid-3" style={{ gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ color: 'var(--color-gold)', fontSize: '20px', lineHeight: 1 }}>✓</div>
              <div style={{ fontSize: '15px', color: 'var(--color-deep-blue)', fontWeight: 500, lineHeight: 1.5 }}>
                Проверяем договор на соответствие реальным бизнес-процессам компании.
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ color: 'var(--color-gold)', fontSize: '20px', lineHeight: 1 }}>✓</div>
              <div style={{ fontSize: '15px', color: 'var(--color-deep-blue)', fontWeight: 500, lineHeight: 1.5 }}>
                Предлагаем конкретные формулировки и протоколы разногласий.
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ color: 'var(--color-gold)', fontSize: '20px', lineHeight: 1 }}>✓</div>
              <div style={{ fontSize: '15px', color: 'var(--color-deep-blue)', fontWeight: 500, lineHeight: 1.5 }}>
                Сроки, формат результата и стоимость фиксируем до начала работы.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. КОГДА НУЖНА РАЗРАБОТКА ИЛИ ПРОВЕРКА ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Когда нужна разработка <br />или проверка договора
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Помогаем на любом этапе заключения сделки: когда договора ещё нет, когда контрагент прислал невыгодный проект или когда зашли в тупик переговоры.
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
                  onClick={() => setActiveContext(sit.context)}
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

      {/* ═══ 3. КАКОЙ ФОРМАТ ПОМОЩИ НУЖЕН ═══ */}
      <section id="formats" className="section" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Какой формат помощи нужен
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Выберите необходимый объём юридического участия: от разовой оценки рисков до полной разработки индивидуального комплекта документов.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '24px' }}>
            {formats.map((fmt, idx) => (
              <div
                key={idx}
                className="card service-card hover-lift"
                style={{
                  padding: '32px 30px',
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  borderRadius: '0',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)'
                }}
              >
                <div>
                  <div style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'var(--color-gold)',
                    letterSpacing: '0.05em',
                    marginBottom: '10px',
                    textTransform: 'uppercase'
                  }}>
                    {fmt.badge}
                  </div>
                  <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', color: 'var(--color-deep-blue)', lineHeight: 1.35, fontFamily: 'var(--font-serif)', fontWeight: 600 }}>
                    {fmt.title}
                  </h3>
                  <p style={{ margin: '0 0 16px 0', fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                    {fmt.desc}
                  </p>
                  <div style={{ padding: '12px 14px', background: 'var(--color-bg-light)', borderLeft: '3px solid var(--color-gold)', fontSize: '13.5px', color: 'var(--color-deep-blue)', marginBottom: '20px' }}>
                    <strong>Результат:</strong> {fmt.result}
                  </div>
                </div>

                <a
                  href="#form"
                  onClick={() => setActiveContext(fmt.context)}
                  className="card-arrow"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--color-primary)',
                    fontSize: '14px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    paddingTop: '14px',
                    borderTop: '1px solid rgba(23, 50, 77, 0.06)'
                  }}
                >
                  <span>{fmt.cta}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. ЧТО ПРОВЕРЯЕМ В ДОГОВОРЕ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Что проверяем в договоре: <br />8 направлений анализа
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Правовая оценка текста и приложений, чтобы исключить судебные уязвимости, потерю активов и неконтролируемые санкции.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '24px' }}>
            {reviewScope.map((item, idx) => (
              <div
                key={idx}
                className="hover-lift"
                style={{
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  padding: '28px 26px',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--color-gold)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 700 }}>
                    0{idx + 1}
                  </div>
                  <h3 style={{ margin: 0, fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', fontWeight: 600 }}>
                    {item.title}
                  </h3>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-main)', lineHeight: 1.55 }}>
                  {item.what}
                </p>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', fontStyle: 'italic', borderTop: '1px dashed rgba(23, 50, 77, 0.1)', paddingTop: '8px', marginTop: '4px' }}>
                  Почему важно: {item.why}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 5. С КАКИМИ ДОГОВОРАМИ РАБОТАЕМ ═══ */}
      <section className="section" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              С какими договорами <br />работаем
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Разрабатываем и проверяем типовые, нестандартные и смешанные договоры для коммерческих компаний и предпринимателей.
            </p>
          </div>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '24px'
          }}>
            {contractTypes.map((item, idx) => (
              <span
                key={idx}
                style={{
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  padding: '10px 18px',
                  fontSize: '14.5px',
                  color: 'var(--color-deep-blue)',
                  fontWeight: 500,
                  display: 'inline-block'
                }}
              >
                {item}
              </span>
            ))}
          </div>

          <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', margin: 0 }}>
            Строительный подряд относится к отраслевому направлению{' '}
            <Link
              href="/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/"
              style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'underline' }}
            >
              юриста по недвижимости и строительству для бизнеса
            </Link>.
          </p>
        </div>
      </section>

      {/* ═══ 6. ЧТО НУЖНО ДЛЯ НАЧАЛА РАБОТЫ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Что нужно для начала работы
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Для первого звонка достаточно кратко описать задачу. Для проведения экспертизы или разработки понадобятся материалы:
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px' }}>
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
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0, paddingBottom: '12px', borderBottom: '1px solid rgba(23, 50, 77, 0.1)' }}>
                Проект или коммерческие условия
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '3px' }}>Проект договора или шаблон</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Текст контрагента либо шаблон, используемый в компании на текущий момент.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '3px' }}>Приложения и спецификации</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Коммерческое предложение, техническое задание, графики платежей и поставок.</span>
                  </div>
                </li>
              </ul>
            </div>

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
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0, paddingBottom: '12px', borderBottom: '1px solid rgba(23, 50, 77, 0.1)' }}>
                Процессы и переписка
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '3px' }}>Описание реального процесса</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Кто, что, когда делает и какими первичными документами подтверждается закрытие обязательств.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)', marginBottom: '3px' }}>Переписка по разногласиям</strong>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Замечания контрагента, спорные формулировки и контрольная дата подписания.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 7. КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock
        title="Как проходит работа"
        subtitle="Пять последовательных этапов для подготовки безопасного договора."
        steps={workSteps}
      />

      {/* ═══ 8. СТОИМОСТЬ УСЛУГ ═══ */}
      <PricingBlock
        title="Стоимость разработки и экспертизы договоров"
        subtitle="Стоимость зависит от объёма и сложности документов, количества приложений и участников, формата результата, необходимости переговоров и срока конкретного задания. Цену и состав работ согласуем до начала работы."
        tiers={pricingTiers}
        ctaTitle="Точную стоимость определим до начала работы"
        ctaSubtitle="Сначала изучим проект или задачу, предложим подходящий формат помощи и согласуем стоимость. Она не изменится без согласования с вами."
        ctaButtonText="Получить расчёт стоимости"
        ctaButtonLink="#form"
      />

      {/* ═══ 9. ПРИМЕРЫ ИЗ ПРАКТИКИ ═══ */}
      <CasesBlock
        title="Примеры из практики"
        cases={cases}
        showDemoWarning={false}
        resultLabel="Ключевой результат"
      />

      {/* ═══ 10. СВЯЗАННЫЕ УСЛУГИ ═══ */}
      <section className="section" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Связанные услуги
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Если задача не ограничивается одним договором, подключим смежные направления договорного права для бизнеса.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            {relatedServices.map((rel, idx) => (
              <Link key={idx} href={rel.link} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                <div
                  className="card related-service-card hover-lift"
                  style={{
                    height: '100%',
                    padding: '30px 26px',
                    background: 'var(--color-white)',
                    border: '1px solid var(--color-border)',
                    borderTop: '3px solid var(--color-gold)',
                    borderRadius: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--color-deep-blue)', marginBottom: '12px', lineHeight: 1.35 }}>
                      {rel.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                      {rel.desc}
                    </p>
                  </div>
                  <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, marginTop: '20px', paddingTop: '14px', borderTop: '1px solid rgba(23, 50, 77, 0.06)' }}>
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

      {/* ═══ 11. FAQ ═══ */}
      <FAQBlock
        faqs={faqs}
        title={<>Ответы на<br />частые вопросы</>}
        subtitle="Собрали ответы на частые вопросы по разработке, правовой экспертизе, согласованию и протоколам разногласий."
        ctaText="Задать свой вопрос"
        ctaLink="#form"
      />

      {/* ═══ 12. ФИНАЛЬНАЯ ФОРМА ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px' }}>
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
                Получите первичную оценку <br />проекта договора
              </h2>

              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Опишите условия сделки, приложите проект или задайте вопрос юристу. Проверим риски, определим необходимый формат помощи и свяжемся с вами в рабочее время.
              </p>

              <div style={{ marginTop: '32px' }}>
                <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>Прямой телефон: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>+7 (4742) 20-15-25</a></span>
                </div>
                <div style={{ marginTop: '12px', fontSize: '14px', color: 'var(--color-text-secondary)', paddingLeft: '36px' }}>
                  Пн–Пт: 9:00 – 18:00 • ул. Советская, д. 35, оф. 213
                </div>
                <div style={{ marginTop: '8px', fontSize: '13.5px', color: 'var(--color-gold-text)', paddingLeft: '36px', fontWeight: 500 }}>
                  Перезвоним в течение 15 минут в рабочее время
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
              <div style={{ background: 'var(--gradient-cream)', padding: '40px', borderRadius: '0', boxShadow: '0 8px 24px rgba(0,0,0,0.15)', width: '100%', border: '1px solid rgba(0,0,0,0.06)' }}>
                <ContactsForm
                  title="Написать нам"
                  subtitle=""
                  buttonText="Оставить заявку"
                  commentPlaceholder="Кратко опишите сделку или приложите текст договора…"
                  subtext="Если вы оставите заявку вечером или в выходной день, мы перезвоним в ближайший рабочий день."
                  hiddenFields={[
                    { name: 'pageId', value: 'B2B-04-01' },
                    { name: 'pageTitle', value: 'Разработка и правовая экспертиза договоров' },
                    { name: 'practice', value: 'Договорное право' },
                    { name: 'context', value: activeContext }
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
