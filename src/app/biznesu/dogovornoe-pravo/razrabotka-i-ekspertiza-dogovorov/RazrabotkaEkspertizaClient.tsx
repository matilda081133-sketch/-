'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';
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
      context: 'drafting'
    },
    {
      tag: 'Проект контрагента',
      title: 'Нужно проверить договор до подписания',
      desc: 'Проверим условия в интересах вашей стороны, выделим критичные риски и предложим изменения с учётом переговорной позиции.',
      context: 'review'
    },
    {
      tag: 'Сложная структура',
      title: 'Сделка включает несколько этапов, объектов или участников',
      desc: 'Определим, как связать основной договор, спецификации, заявки, технические задания, гарантии и документы приёмки.',
      context: 'complex'
    },
    {
      tag: 'Разногласия',
      title: 'Стороны не могут согласовать отдельные пункты',
      desc: 'Подготовим таблицу замечаний, новую редакцию или протокол разногласий и объясним последствия разных вариантов.',
      context: 'disagreement'
    },
    {
      tag: 'Изменения',
      title: 'Нужно изменить действующий договор без конфликта',
      desc: 'Проверим, как поправки влияют на уже возникшие обязательства, и подготовим дополнительное соглашение либо новую редакцию.',
      context: 'amendment'
    },
    {
      tag: 'Шаблон',
      title: 'Типовой договор не соответствует реальному процессу',
      desc: 'Сопоставим документ с продажами, закупками, логистикой, оплатой и документооборотом; адаптируем условия под фактическую работу.',
      context: 'template'
    },
    {
      tag: 'Переговоры',
      title: 'Нужно юридически обосновать позицию на переговорах',
      desc: 'Определим обязательные и компромиссные условия, подготовим формулировки и при согласовании подключимся к обсуждению с контрагентом.',
      context: 'negotiation'
    },
    {
      tag: 'Подписание скоро',
      title: 'Установлена дата подписания или запуска сделки',
      desc: 'Сообщите дату и объём документов. После просмотра материалов подтвердим, можно ли выполнить необходимый объём к указанному времени.',
      context: 'deadline'
    }
  ];

  const formats = [
    {
      title: 'Разработка договора',
      desc: 'Создаём документ под фактическую модель сделки, распределение обязанностей, расчёты, приёмку и риски вашей стороны.',
      result: 'Проект договора и согласованные приложения.',
      cta: 'Обсудить разработку',
      context: 'drafting'
    },
    {
      title: 'Правовая экспертиза',
      desc: 'Проверяем проект и связанные документы, фиксируем замечания, объясняем последствия и приоритетность рисков.',
      result: 'Комментарий, таблица рисков или заключение — по согласованному формату.',
      cta: 'Передать на проверку',
      context: 'review'
    },
    {
      title: 'Экспертиза с правками',
      desc: 'Не только указываем проблему, но и предлагаем рабочую редакцию спорных пунктов либо полный вариант документа.',
      result: 'Договор с правками, таблица редакций или протокол разногласий.',
      cta: 'Обсудить правки',
      context: 'redline'
    },
    {
      title: 'Согласование условий',
      desc: 'Готовим переговорную позицию и при необходимости участвуем в обсуждении договора со второй стороной.',
      result: 'Согласованные формулировки и обновлённый комплект документов.',
      cta: 'Подключить к переговорам',
      context: 'negotiation'
    }
  ];

  const reviewScope = [
    {
      title: 'Предмет и модель сделки',
      what: 'Что именно должна сделать каждая сторона, в какой последовательности и с каким измеримым результатом.',
      why: 'Размытый предмет осложняет исполнение, приёмку и требования сторон.'
    },
    {
      title: 'Цена и расчёты',
      what: 'Формула цены, НДС, аванс, этапы, основания платежа, удержания, изменение стоимости.',
      why: 'Оплата должна быть связана с понятными событиями и документами.'
    },
    {
      title: 'Сроки и заявки',
      what: 'Начало и окончание, этапы, порядок заявок, продление, перенос и последствия просрочки.',
      why: 'Неоднозначные сроки создают споры о моменте нарушения.'
    },
    {
      title: 'Приёмка и доказательства',
      what: 'Акты, накладные, отчёты, электронные сообщения, мотивированный отказ, сроки проверки результата.',
      why: 'Договор должен учитывать, какие документы реально формирует бизнес.'
    },
    {
      title: 'Качество и гарантии',
      what: 'Требования к товару, работе или услуге, гарантийный период, порядок фиксации недостатков и устранения.',
      why: 'Общие фразы без процедуры могут не решить конфликт.'
    },
    {
      title: 'Ответственность',
      what: 'Неустойка, убытки, ограничения ответственности, возмещение потерь, заверения и форс-мажор.',
      why: 'Проверяем не только размер санкций, но и основания их применения.'
    },
    {
      title: 'Изменение и прекращение',
      what: 'Дополнительные соглашения, односторонний отказ, расторжение, последствия прекращения, возврат документов и имущества.',
      why: 'Важно понимать, как выйти из отношений и закрыть расчёты.'
    },
    {
      title: 'Споры и коммуникации',
      what: 'Претензионный порядок, подсудность, адреса и способы уведомлений, электронный документооборот.',
      why: 'Формальные условия должны быть исполнимы в рабочем процессе компании.'
    }
  ];

  const contractTypes = [
    'Поставка товаров и оборудования',
    'Возмездное оказание услуг',
    'Подряд (кроме строительного)',
    'Коммерческая аренда',
    'Купля-продажа',
    'Перевозка и транспортная экспедиция',
    'Складское хранение',
    'Заем и финансовые документы',
    'Агентирование, комиссия и поручение',
    'Лизинг',
    'Уступка права требования (цессия) и перевод долга',
    'Лицензионные и смешанные договоры'
  ];

  const prepDocs = [
    'Проект договора контрагента либо используемый компанией шаблон',
    'Коммерческое предложение, техническое задание, спецификации, заявки и формы актов',
    'Описание фактического процесса: кто, что, когда и каким документом подтверждает',
    'Планируемые расчёты, НДС, авансирование, этапы и условия оплаты',
    'Переписка по уже согласованным и спорным условиям',
    'Корпоративные или доверительные ограничения на подписание — если они имеют значение',
    'Дата планируемого подписания или переговоров, если она уже назначена'
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
      title: 'Разрабатываем или проверяем документ',
      desc: 'Сопоставляем юридические условия с фактической схемой сделки и готовим согласованный результат.'
    },
    {
      num: '05',
      title: 'Обсуждаем выводы и доработки',
      desc: 'Объясняем критичные пункты, отвечаем на вопросы и в пределах согласованного объёма корректируем редакцию после обратной связи.'
    }
  ];

  const deliverables = [
    'Проект договора под конкретную сделку и процессы компании',
    'Перечень правовых и договорных рисков с приоритетами',
    'Комментарии к спорным пунктам понятным языком',
    'Редакция договора с правками или сравнительная таблица условий',
    'Протокол разногласий, дополнительное соглашение либо новая редакция документа',
    'Комплект приложений: спецификация, техническое задание, форма заявки, акта или отчёта — если включено в объём',
    'Переговорная позиция и сопровождение согласования в пределах договора с клиентом'
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Консультация по условиям договора',
      price: 'ХХХ ₽',
      subtitle: 'Разбор задачи; ответы по спорным условиям; рекомендации по дальнейшим действиям.',
      buttonText: 'Записаться на консультацию',
      buttonHref: '#contact-form',
      features: [
        { name: 'Анализ ключевых условий сделки', value: '✓' },
        { name: 'Оценка спорных положений и формулировок', value: '✓' },
        { name: 'Рекомендации по переговорной позиции', value: '✓' }
      ],
      popular: false
    },
    {
      title: 'Правовая экспертиза договора',
      price: 'от ХХХ ₽',
      subtitle: 'Проверка договора и приложений; перечень замечаний и рисков; обсуждение выводов.',
      buttonText: 'Передать на проверку',
      buttonHref: '#contact-form',
      features: [
        { name: 'Детальная проверка договора и приложений', value: '✓' },
        { name: 'Письменная таблица замечаний и рисков', value: '✓' },
        { name: 'Оценка условий с позиции вашей стороны', value: '✓' },
        { name: 'Консультация юриста по итогам экспертизы', value: '✓' }
      ],
      popular: true
    },
    {
      title: 'Экспертиза с правками',
      price: 'от ХХХ ₽',
      subtitle: 'Анализ; предложенная редакция; таблица изменений или протокол разногласий; обсуждение результата.',
      buttonText: 'Уточнить стоимость',
      buttonHref: '#contact-form',
      features: [
        { name: 'Полный правовой анализ проекта', value: '✓' },
        { name: 'Подготовка протокола разногласий или новой редакции', value: '✓' },
        { name: 'Аргументы для контрагента по каждому пункту', value: '✓' },
        { name: 'Корректировка текста по итогам обратной связи', value: '✓' }
      ],
      popular: false
    },
    {
      title: 'Разработка договора',
      price: 'от ХХХ ₽',
      subtitle: 'Анализ модели сделки; проект договора; согласованные приложения; цикл обсуждения.',
      buttonText: 'Обсудить разработку',
      buttonHref: '#contact-form',
      features: [
        { name: 'Разработка структуры под бизнес-модель', value: '✓' },
        { name: 'Формирование проекта договора и приложений', value: '✓' },
        { name: 'Сбалансированная защита прав компании', value: '✓' },
        { name: 'Согласование и доработка проекта', value: '✓' }
      ],
      popular: false
    }
  ];

  const cases: CaseData[] = [
    {
      title: 'Подготовили договор на комплексное обслуживание оборудования',
      category: 'Разработка договора',
      problem: 'Компания начинала оказывать обслуживание оборудования на нескольких объектах заказчика. Типовой договор не описывал заявки, сроки реакции, допуск специалистов, расходные материалы и подтверждение выполненных работ.',
      action: 'Разобрали фактический процесс, разделили плановые и внеплановые работы, связали заявки со сроками, подготовили порядок допуска и приёмки, формы отчёта и акта, а также условия об оплате дополнительных работ.',
      result: 'Компания получила договор и комплект приложений, которые отражали реальную организацию обслуживания и позволяли фиксировать объём выполненных обязательств.'
    },
    {
      title: 'Переработали проект договора поставки покупателя',
      category: 'Экспертиза договора',
      problem: 'Поставщику предложили форму покупателя с правом менять объём заказов, широкими основаниями для отказа от товара и несбалансированной ответственностью при отсутствии понятного порядка заявок и приёмки.',
      action: 'Сопоставили проект с логистикой и документооборотом поставщика, выделили критичные пункты, подготовили редакцию условий о заявках, сроках, приёмке, оплате, санкциях и подтверждающих документах.',
      result: 'Стороны согласовали рабочую редакцию, в которой обязанности поставщика соответствовали управляемому процессу, а порядок приёмки и расчётов стал определённее.'
    },
    {
      title: 'Согласовали изменения к договору услуг через протокол разногласий',
      category: 'Согласование условий',
      problem: 'Исполнителю направили договор с оплатой только после субъективной оценки результата, правом заказчика отказаться без оплаты фактически выполненного объёма и неопределённым перечнем отчётных документов.',
      action: 'Определили обязательные и компромиссные условия, подготовили протокол разногласий и аргументы по приёмке, оплате и прекращению договора, затем доработали редакцию по итогам переговоров.',
      result: 'В подписанном комплекте были зафиксированы измеримые этапы, документы приёмки и порядок расчётов при досрочном прекращении отношений.'
    }
  ];

  const relatedServices = [
    {
      title: 'Договорный юрист для бизнеса',
      desc: 'Если задача выходит за рамки одного договора или требуется системный выбор направления.',
      link: '/biznesu/dogovornoe-pravo/'
    },
    {
      title: 'Аудит договорной работы',
      desc: 'Нужно проверить не один договор, а шаблоны и сквозной процесс согласования всей компании.',
      link: '/biznesu/dogovornoe-pravo/audit-dogovornoj-raboty/'
    },
    {
      title: 'Помощь в договорном споре',
      desc: 'Разногласия уже связаны с нарушением обязательств, оплатой, качеством товара или расторжением.',
      link: '/biznesu/dogovornoe-pravo/dogovornye-spory/'
    },
    {
      title: 'Спор по договору поставки',
      desc: 'Уже возник конфликт о товаре, сроках поставки, приёмке, браке или оплате продукции.',
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
        name: 'Разработка и правовая экспертиза договоров для бизнеса',
        serviceType: 'Разработка и экспертиза договоров для юридических лиц и ИП',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        url: 'https://dejure-help.ru/biznesu/dogovornoe-pravo/razrabotka-i-ekspertiza-dogovorov/',
        description: 'Разработаем договор под задачу бизнеса или проверим проект контрагента: выявим риски, предложим правки, подготовим протокол разногласий.'
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
            <span style={{ color: 'var(--color-text-muted)' }}>Разработка и экспертиза договоров</span>
          </>
        }
        superTitle="Договорное право • Для бизнеса"
        title="Разработка и правовая экспертиза договоров для бизнеса"
        subtitle="Подготовим договор под реальную схему сделки или проверим проект контрагента, объясним риски и предложим формулировки для согласования."
        trustItems={[
          { text: 'Учитываем порядок работы, оплаты и приёмки' },
          { text: 'Проверяем договор вместе с приложениями' },
          { text: 'Передаём правки и выводы в согласованном формате' }
        ]}
        primaryCtaText="Обсудить договор"
        primaryCtaLink="#contact-form"
        primaryCtaSubtext="Перезвоним в течение 15 минут в рабочее время"
        secondaryCtaText="Что входит в проверку"
        secondaryCtaLink="#review-scope"
        rightContent={
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', width: '100%' }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '130%',
              height: '130%',
              background: 'radial-gradient(circle, rgba(193, 160, 102, 0.15) 0%, rgba(23, 50, 77, 0.04) 40%, transparent 70%)',
              zIndex: 0,
              pointerEvents: 'none'
            }} />

            <div className="mockup-container" style={{ zIndex: 1, margin: 0 }}>
              <div style={{ position: 'absolute', width: '220px', height: '220px', background: 'var(--color-primary)', filter: 'blur(90px)', opacity: 0.12, borderRadius: '50%' }} />

              <div className="doc-wrapper-float-1">
                <div className="doc-sheet doc-sheet-1">
                  <div style={{ padding: '26px 22px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(23,50,77,0.2)', paddingBottom: '10px', marginBottom: '14px' }}>
                      <img src="/images/logo_dark.png" alt="Де-Юре" style={{ width: '55px', height: 'auto', opacity: 0.9 }} />
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', alignItems: 'flex-end' }}>
                        <span style={{ fontSize: '7px', fontWeight: 'bold', color: 'var(--color-deep-blue)', letterSpacing: '0.05em' }}>ЭКСПЕРТИЗА ДОГОВОРА</span>
                        <span style={{ fontSize: '5.5px', color: 'var(--color-primary)' }}>Протокол разногласий</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '12px' }}>
                      <div style={{ background: 'rgba(247, 244, 237, 0.7)', borderLeft: '3px solid #C1A066', padding: '6px 8px' }}>
                        <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '2px' }}>ПРЕДМЕТ И ПРИЛОЖЕНИЯ</span>
                        <span style={{ fontSize: '5px', color: 'var(--color-text-muted)' }}>Спецификация, техзадание, измеримый результат</span>
                      </div>
                      <div style={{ background: 'rgba(247, 244, 237, 0.7)', borderLeft: '3px solid #C1A066', padding: '6px 8px' }}>
                        <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '2px' }}>ОПЛАТА И СРОКИ</span>
                        <span style={{ fontSize: '5px', color: 'var(--color-text-muted)' }}>Аванс, этапы, привязка к подтверждающим актам</span>
                      </div>
                      <div style={{ background: 'rgba(247, 244, 237, 0.7)', borderLeft: '3px solid #C1A066', padding: '6px 8px' }}>
                        <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '2px' }}>ОТВЕТСТВЕННОСТЬ СТОРОН</span>
                        <span style={{ fontSize: '5px', color: 'var(--color-text-muted)' }}>Баланс неустойки, основания отказа, подсудность</span>
                      </div>
                    </div>

                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '8px', borderTop: '1px solid rgba(23,50,77,0.15)' }}>
                      <span style={{ fontSize: '5px', color: 'var(--color-text-muted)' }}>ЮК «ДЕ-ЮРЕ» • B2B ДОГОВОРНОЕ ПРАВО</span>
                      <span style={{ fontSize: '5px', color: 'var(--color-gold)', fontWeight: 'bold' }}>СОГЛАСОВАНО ✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      />

      {/* ═══ СТРОКА ДОВЕРИЯ ═══ */}
      <section style={{ backgroundColor: 'var(--color-bg-light)', borderBottom: '1px solid var(--color-border)', padding: '24px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ color: 'var(--color-gold)', fontSize: '20px', lineHeight: 1 }}>✓</div>
              <div style={{ fontSize: '15px', color: 'var(--color-deep-blue)', fontWeight: 500, lineHeight: 1.5 }}>
                Сначала разбираемся, как сделка должна работать на практике.
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ color: 'var(--color-gold)', fontSize: '20px', lineHeight: 1 }}>✓</div>
              <div style={{ fontSize: '15px', color: 'var(--color-deep-blue)', fontWeight: 500, lineHeight: 1.5 }}>
                Отделяем критичные условия от допустимых переговорных компромиссов.
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ color: 'var(--color-gold)', fontSize: '20px', lineHeight: 1 }}>✓</div>
              <div style={{ fontSize: '15px', color: 'var(--color-deep-blue)', fontWeight: 500, lineHeight: 1.5 }}>
                Состав результата, срок и стоимость согласуем после оценки документов.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. КОГДА НУЖНА РАЗРАБОТКА ИЛИ ПРОВЕРКА ═══ */}
      <section style={{ backgroundColor: 'var(--color-white)', padding: '64px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 44px' }}>
            <h2 style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              Когда нужна разработка или проверка договора
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Подключиться можно до появления первого проекта, при получении формы контрагента или на стадии согласования. Чем точнее описана фактическая схема сделки, тем полезнее будет договор.
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
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.95) 100%)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  borderRadius: '0',
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)'
                }}
              >
                <div>
                  <span style={{
                    display: 'inline-block',
                    fontSize: '11.5px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--color-gold)',
                    marginBottom: '10px'
                  }}>
                    {sit.tag}
                  </span>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '12px', lineHeight: 1.35 }}>
                    {sit.title}
                  </h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
                    {sit.desc}
                  </p>
                </div>

                <a
                  href="#contact-form"
                  onClick={() => setActiveContext(sit.context)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--color-primary)',
                    textDecoration: 'none',
                    gap: '6px'
                  }}
                >
                  Обсудить с юристом →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. КАКОЙ ФОРМАТ ПОМОЩИ НУЖЕН ═══ */}
      <section style={{ backgroundColor: 'var(--color-bg-light)', padding: '64px 0', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 44px' }}>
            <h2 style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              Выберите формат работы
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Можно поручить подготовку документа с нуля, проверку готового проекта или согласовать расширенный объём с правками и переговорами.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {formats.map((fmt, idx) => (
              <div
                key={idx}
                className="card hover-lift"
                style={{
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)'
                }}
              >
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '12px' }}>
                    {fmt.title}
                  </h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '18px' }}>
                    {fmt.desc}
                  </p>
                  <div style={{ background: 'var(--color-bg-light)', padding: '12px 14px', borderLeft: '3px solid var(--color-gold)', marginBottom: '24px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Результат:</span>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-muted)' }}>{fmt.result}</span>
                  </div>
                </div>

                <a
                  href="#contact-form"
                  onClick={() => setActiveContext(fmt.context)}
                  className="btn btn-gold"
                  style={{ textAlign: 'center', width: '100%' }}
                >
                  {fmt.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. УНИКАЛЬНЫЙ БЛОК: ЧТО ПРОВЕРЯЕМ В ДОГОВОРЕ ═══ */}
      <section id="review-scope" style={{ backgroundColor: 'var(--color-white)', padding: '64px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 44px' }}>
            <h2 style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              Что проверяем в договоре
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Проверка не сводится к поиску незаконных пунктов. Важно, чтобы договор соответствовал реальной сделке, позволял подтвердить исполнение и заранее отвечал на типовые конфликтные ситуации.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px'
          }}>
            {reviewScope.map((scope, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--color-bg-light)',
                  border: '1px solid var(--color-border)',
                  borderLeft: '4px solid var(--color-gold)',
                  padding: '24px 22px'
                }}
              >
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '10px' }}>
                  {scope.title}
                </h3>
                <div style={{ marginBottom: '10px', fontSize: '14px', color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>
                  <strong>Что анализируем:</strong> {scope.what}
                </div>
                <div style={{ fontSize: '13.5px', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                  <strong>Почему важно:</strong> {scope.why}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '28px', textAlign: 'center', fontSize: '14px', color: 'var(--color-text-muted)' }}>
            Цель проверки — сделать обязанности и доказательства понятнее, выявить скрытые риски и предложить исполнимые формулировки.
          </div>
        </div>
      </section>

      {/* ═══ 5. С КАКИМИ ДОГОВОРАМИ РАБОТАЕМ ═══ */}
      <section style={{ backgroundColor: 'var(--color-bg-light)', padding: '56px 0', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 32px' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '12px' }}>
              Разрабатываем и проверяем основные договоры бизнеса
            </h2>
            <p style={{ fontSize: '15.5px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Работаем с типовыми и смешанными договорными конструкциями. Состав проверки определяем по сделке, а не только по названию документа.
            </p>
          </div>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            justifyContent: 'center',
            maxWidth: '960px',
            margin: '0 auto'
          }}>
            {contractTypes.map((item, idx) => (
              <span
                key={idx}
                style={{
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  padding: '10px 18px',
                  fontSize: '14px',
                  color: 'var(--color-deep-blue)',
                  fontWeight: 500,
                  display: 'inline-block'
                }}
              >
                {item}
              </span>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '13.5px', color: 'var(--color-text-muted)' }}>
            Строительный подряд и сложные девелоперские проекты сопровождаются в рамках{' '}
            <Link
              href="/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/"
              style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}
            >
              строительного B2B-кластера
            </Link>.
          </div>
        </div>
      </section>

      {/* ═══ 6. ЧТО НУЖНО ДЛЯ НАЧАЛА РАБОТЫ ═══ */}
      <section style={{ backgroundColor: 'var(--color-white)', padding: '64px 0' }}>
        <div className="container">
          <div style={{
            background: 'var(--color-bg-light)',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '40px 36px',
            maxWidth: '920px',
            margin: '0 auto'
          }}>
            <h2 style={{ fontSize: '26px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              Что нужно для начала работы
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
              Для первого разговора достаточно описать цель сделки, стороны и текущую стадию. Для разработки или проверки юрист попросит материалы, которые действительно влияют на условия:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {prepDocs.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ color: 'var(--color-gold)', fontSize: '18px', lineHeight: 1, marginTop: '2px' }}>✓</div>
                  <div style={{ fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>
                    {item}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '24px', paddingTop: '18px', borderTop: '1px solid var(--color-border)', fontSize: '13.5px', color: 'var(--color-text-muted)' }}>
              Не прикладывайте конфиденциальный договор к обычной заявке на сайте. Способ безопасной передачи согласуем при первичном контакте.
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 7. КАК ПРОХОДИТ РАБОТА ═══ */}
      <section style={{ backgroundColor: 'var(--color-bg-light)', padding: '64px 0', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 44px' }}>
            <h2 style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              Как проходит работа
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Состав этапов зависит от выбранного формата. До начала работы фиксируем, какой результат нужен: новый проект, перечень рисков, правки или сопровождение согласования.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px'
          }}>
            {workSteps.map((step, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  padding: '24px 20px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{
                  fontSize: '28px',
                  fontWeight: 800,
                  color: 'var(--color-gold)',
                  fontFamily: 'var(--font-serif)',
                  lineHeight: 1,
                  marginBottom: '12px'
                }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '10px' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-muted)', lineHeight: 1.55, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '32px',
            background: 'var(--color-white)',
            border: '1px solid var(--color-border)',
            padding: '20px 24px',
            textAlign: 'center',
            fontSize: '14.5px',
            color: 'var(--color-text-muted)',
            lineHeight: 1.6
          }}>
            Обсуждение можно провести по телефону или видеосвязи, а документы передать электронно согласованным способом. Личное участие может потребоваться для очных переговоров или подписания, если это отдельно согласовано.
          </div>
        </div>
      </section>

      {/* ═══ 8. ЧТО ПОЛУЧИТЕ В РЕЗУЛЬТАТЕ ═══ */}
      <section style={{ backgroundColor: 'var(--color-white)', padding: '64px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 40px' }}>
            <h2 style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              Что получите в результате
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Результат заранее фиксируется в задании. Он зависит от исходных документов и выбранного формата помощи.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '16px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {deliverables.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--color-bg-light)',
                  border: '1px solid var(--color-border)',
                  padding: '18px 20px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}
              >
                <div style={{ color: 'var(--color-gold)', fontSize: '18px', lineHeight: 1 }}>✓</div>
                <div style={{ fontSize: '14.5px', color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 9. СТОИМОСТЬ УСЛУГ ═══ */}
      <PricingBlock
        title="Стоимость разработки и экспертизы договора"
        subtitle="Стоимость зависит от объёма и сложности документа, количества приложений и участников, формата результата, необходимости переговоров и срока конкретного задания. Цену согласуем после просмотра материалов."
        tiers={pricingTiers}
      />

      {/* ═══ 10. ПРИМЕРЫ ИЗ ПРАКТИКИ ═══ */}
      <CasesBlock
        title="Примеры из практики"
        cases={cases}
      />

      {/* ═══ 11. СВЯЗАННЫЕ УСЛУГИ ═══ */}
      <section style={{ backgroundColor: 'var(--color-bg-light)', padding: '64px 0', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 40px' }}>
            <h2 style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              Связанные услуги
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Если задача шире одного договора или уже переросла в конфликт с контрагентом.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px'
          }}>
            {relatedServices.map((rel, idx) => (
              <Link
                key={idx}
                href={rel.link}
                className="card hover-lift"
                style={{
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  padding: '24px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  textDecoration: 'none'
                }}
              >
                <div>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '10px' }}>
                    {rel.title}
                  </h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--color-text-muted)', lineHeight: 1.55, margin: 0 }}>
                    {rel.desc}
                  </p>
                </div>
                <div style={{ marginTop: '16px', fontSize: '13px', color: 'var(--color-primary)', fontWeight: 600 }}>
                  Перейти к услуге →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 12. ОФИС И ФОРМАТ РАБОТЫ ═══ */}
      <section style={{ backgroundColor: 'var(--color-white)', padding: '56px 0', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, rgba(23, 50, 77, 0.03) 0%, rgba(193, 160, 102, 0.05) 100%)',
            border: '1px solid var(--color-border)',
            padding: '36px 32px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px'
          }}>
            <div style={{ maxWidth: '680px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '10px' }}>
                Работаем в Липецке и дистанционно
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>
                Принимаем в офисе по адресу: г. Липецк, ул. Советская, д. 35, офис 213. Обсудить сделку и проверить документы можно дистанционно. Необходимость очной встречи или участия в переговорах определяется задачей и согласованным объёмом.
              </p>
            </div>
            <div>
              <a href="tel:+74742201525" style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-deep-blue)', textDecoration: 'none', display: 'block', marginBottom: '6px' }}>
                +7 (4742) 20-15-25
              </a>
              <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                Пн-Пт с 9:00 до 18:00
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 13. FAQ ═══ */}
      <FAQBlock
        title="Часто задаваемые вопросы"
        subtitle="Ответы на вопросы по составлению, правовой экспертизе, правкам и согласованию договоров."
        faqs={faqs}
      />

      {/* ═══ 14. ФИНАЛЬНАЯ ФОРМА ═══ */}
      <section id="contact-form" style={{ backgroundColor: 'var(--color-bg-light)', padding: '64px 0', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 36px' }}>
            <h2 style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '12px' }}>
              Обсудите договор с юристом
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Сообщите, нужно ли разработать документ с нуля или проверить готовый проект, и укажите дату подписания, если она уже назначена. Мы уточним задачу и предложим подходящий формат работы.
            </p>
          </div>

          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <ContactsForm
              title=""
              subtitle=""
              buttonText="Оставить заявку"
              hiddenFields={[{ name: 'context', value: activeContext }]}
            />
            <div style={{ marginTop: '16px', fontSize: '12.5px', color: 'var(--color-text-muted)', textAlign: 'center', lineHeight: 1.5 }}>
              Не указывайте в форме коммерческую тайну, банковские реквизиты, персональные данные сотрудников и контрагентов. Договор и приложения можно передать после согласования безопасного способа связи.
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
