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

export default function AuditDogovornojRabotyClient() {
  const [activeContext, setActiveContext] = useState<string>('contract-audit');

  const faqs = [
    {
      q: 'Чем аудит договорной работы отличается от проверки договора?',
      a: 'Проверка договора касается одного документа или конкретной сделки. Аудит ищет повторяющиеся риски в массиве документов и проверяет весь процесс: от заявки и согласования до исполнения и хранения.'
    },
    {
      q: 'Нужно ли передавать все договоры компании?',
      a: 'Не обязательно. Сначала определяем цель и формируем выборку по видам сделок, периоду, подразделениям, суммам или проблемным зонам. Если требуется сплошная проверка, её объём фиксируется отдельно.'
    },
    {
      q: 'Что входит в итоговый отчёт?',
      a: 'Состав согласуется заранее. Обычно это описание периметра, выявленные риски и причины, приоритеты, рекомендации и дорожная карта. Карта процесса, матрица ролей или перечень шаблонов включаются, если предусмотрены заданием.'
    },
    {
      q: 'Проверяете ли вы не только договоры, но и процесс согласования?',
      a: 'Да, если это входит в периметр. Изучаем локальные правила, фактические маршруты, версии документов и интервьюируем участников, чтобы отличить дефект текста от проблемы организации работы.'
    },
    {
      q: 'Можно ли проверить только одну проблемную зону?',
      a: 'Да. Например, полномочия, версии, реестр, электронное подписание или контроль исполнения. Ограниченный формат полезен, если проблема локализована и не требует полного аудита функции.'
    },
    {
      q: 'Разработаете ли вы регламент и новые шаблоны после аудита?',
      a: 'Можно согласовать отдельный этап внедрения. Он оценивается после диагностики, потому что состав документов зависит от выявленных причин, процессов и приоритетов компании.'
    },
    {
      q: 'Нужен ли аудит, если в компании есть штатный юрист?',
      a: 'Может быть полезен как независимая оценка системы и аргументация изменений. Штатный юрист при этом остаётся важным участником: он знает реальные процессы и помогает проверить применимость рекомендаций.'
    },
    {
      q: 'Входит ли в аудит проверка контрагентов?',
      a: 'Проверяем, как в компании организована такая процедура, и можем выборочно оценить её применение. Полный due diligence конкретных контрагентов, активов или всей компании согласуется отдельно.'
    },
    {
      q: 'Проверяете ли вы налоговые и бухгалтерские риски?',
      a: 'Юрист отмечает вопросы, которые влияют на договор и документы исполнения, но не подменяет самостоятельный налоговый, бухгалтерский или финансовый аудит. При необходимости рекомендуем подключить профильного специалиста.'
    },
    {
      q: 'Можно ли провести аудит дистанционно?',
      a: 'Да. Документы передаются согласованным способом, интервью и обсуждение отчёта можно провести по видеосвязи. Если для понимания процесса нужен выезд, его согласуем отдельно.'
    },
    {
      q: 'Сколько времени занимает аудит?',
      a: 'Срок зависит от периметра, объёма выборки, числа подразделений, доступности документов и состава результата. Конкретный срок подтверждаем после первичной оценки и фиксируем до начала работы.'
    },
    {
      q: 'От чего зависит стоимость?',
      a: 'От числа видов договоров, размера массива и выборки, глубины проверки, количества интервью, состояния учёта и требуемых итоговых материалов. Расширение периметра согласуется отдельно.'
    }
  ];

  const situations = [
    {
      tag: 'Шаблоны',
      title: 'Подразделения используют разные версии договоров',
      desc: 'Определим, какие формы реально применяются, где расходятся условия и кто имеет право менять утверждённый шаблон.',
      context: 'templates'
    },
    {
      tag: 'Согласование',
      title: 'Договоры долго ходят между отделами',
      desc: 'Проверим маршрут, роли, основания для повторных согласований и точки, где документ возвращается без понятного решения.',
      context: 'approval'
    },
    {
      tag: 'Подписание',
      title: 'Неясно, кто и на каком основании подписывает документы',
      desc: 'Проверим правила подтверждения полномочий, доверенности, замещение и контроль подписанных версий.',
      context: 'authority'
    },
    {
      tag: 'Учёт',
      title: 'Нет единого реестра и актуального комплекта документов',
      desc: 'Оценим нумерацию, статусы, связь договора с приложениями и соглашениями, хранение оригиналов и электронных файлов.',
      context: 'registry'
    },
    {
      tag: 'Исполнение',
      title: 'Сроки, пролонгации и обязательства контролируются вручную',
      desc: 'Выявим условия, которые требуют событийного контроля, ответственных и подтверждающих документов.',
      context: 'performance'
    },
    {
      tag: 'Риски',
      title: 'Одни и те же спорные условия повторяются в сделках',
      desc: 'Проверим выборку и отделим единичную ошибку от системного дефекта шаблона или процедуры.',
      context: 'recurring-risk'
    },
    {
      tag: 'Рост',
      title: 'Компания выросла, а правила остались неформальными',
      desc: 'Сопоставим реальный поток договоров с ролями, нагрузкой и необходимым уровнем контроля.',
      context: 'growth'
    },
    {
      tag: 'Изменения',
      title: 'Внедряется ЭДО, новая учётная система или структура',
      desc: 'Проверим, какие юридические и организационные правила нужно закрепить до переноса процесса в цифровой инструмент.',
      context: 'change'
    }
  ];

  const auditScope = [
    {
      title: 'Массив договоров и шаблонов',
      what: 'Виды документов, актуальность форм, отклонения от шаблонов, повторяющиеся условия и связанные приложения.',
      result: 'Перечень системных дефектов и приоритетных форм для переработки.'
    },
    {
      title: 'Инициирование',
      what: 'Какие вводные передаёт бизнес, кто определяет предмет, цену, сроки, результат и критичные условия.',
      result: 'Пробелы во входных данных и требования к заявке на договор.'
    },
    {
      title: 'Проверка контрагента',
      what: 'Когда и кем проводится проверка, какие сведения фиксируются, как принимается решение при выявлении риска.',
      result: 'Оценка процесса; углублённая проверка конкретных контрагентов согласуется отдельно.'
    },
    {
      title: 'Согласование и версии',
      what: 'Маршруты, роли, сроки, основания эскалации, история изменений и фиксация коммерческих решений.',
      result: 'Карта узких мест и рисков подписания неутверждённой версии.'
    },
    {
      title: 'Полномочия и подписание',
      what: 'Подписанты, доверенности, замещение, бумажная и электронная форма, комплектность подписанного документа.',
      result: 'Риски полномочий, формы сделки и доказательства подписания.'
    },
    {
      title: 'Реестр и хранение',
      what: 'Нумерация, статусы, оригиналы, электронные копии, приложения, дополнительные соглашения, доступ и сроки хранения.',
      result: 'Разрывы в учёте, комплектности, доступе и архиве.'
    },
    {
      title: 'Исполнение и первичные документы',
      what: 'Контроль заявок, сроков, оплат, приёмки, гарантий, пролонгаций, актов, накладных и уведомлений.',
      result: 'Обязательства без владельца, события без контроля и недостаток доказательств.'
    },
    {
      title: 'Изменение, прекращение и претензии',
      what: 'Как фиксируются изменения, отказы, расторжение, нарушения и передача проблемного договора юристу.',
      result: 'Потери информации между исполнением, претензионной и судебной работой.'
    }
  ];

  const auditFormats = [
    {
      title: 'Диагностика проблемной зоны',
      desc: 'Проверяем один процесс: например, согласование, полномочия, реестр или контроль исполнения.',
      result: 'Краткое заключение и список приоритетных действий.',
      cta: 'Обсудить диагностику',
      context: 'diagnostic'
    },
    {
      title: 'Аудит массива договоров',
      desc: 'Анализируем согласованную выборку заключённых договоров и шаблонов, выявляем повторяющиеся дефекты и риски.',
      result: 'Реестр наблюдений, риск-карта и рекомендации по формам.',
      cta: 'Уточнить выборку',
      context: 'mass-audit'
    },
    {
      title: 'Комплексный аудит',
      desc: 'Проверяем документы и жизненный цикл договора с участием ключевых подразделений.',
      result: 'Отчёт, карта процесса, реестр рисков и дорожная карта изменений.',
      cta: 'Обсудить аудит',
      context: 'complex-audit'
    },
    {
      title: 'Аудит и последующее внедрение',
      desc: 'После диагностики отдельно оцениваем разработку регламентов, матриц, заявок, шаблонов и контрольных инструментов.',
      result: 'Согласованный проект изменений; состав не входит автоматически в базовый аудит.',
      cta: 'Обсудить внедрение',
      context: 'implementation'
    }
  ];

  const prepDocs = [
    'Краткое описание бизнеса, видов сделок и подразделений, участвующих в договорном цикле',
    'Перечень используемых шаблонов и примерный объём договоров за согласованный период',
    'Локальные положения, инструкции, матрицы полномочий и маршруты согласования — если они есть',
    'Согласованная выборка договоров вместе с приложениями, дополнительными соглашениями и документами исполнения',
    'Примеры заявки на договор, листа согласования, реестра, доверенностей и уведомлений',
    'Описание повторяющихся проблем и интервью с ключевыми участниками процесса',
    'Сведения об используемых ЭДО, CRM, учётных системах и хранилищах — без передачи паролей и доступов'
  ];

  const workSteps = [
    {
      num: '01',
      title: 'Фиксируем цель и периметр',
      desc: 'Определяем проблемные зоны, подразделения, период, объём массива и необходимую глубину проверки.'
    },
    {
      num: '02',
      title: 'Формируем выборку и программу',
      desc: 'Согласуем категории документов, критерии отбора, интервью и состав результата.'
    },
    {
      num: '03',
      title: 'Изучаем документы и процесс',
      desc: 'Анализируем договоры, шаблоны, локальные правила и фактические действия участников; уточняем расхождения.'
    },
    {
      num: '04',
      title: 'Систематизируем риски',
      desc: 'Разделяем критичные правовые риски, повторяющиеся дефекты и организационные узкие места, определяем причины.'
    },
    {
      num: '05',
      title: 'Готовим отчёт и дорожную карту',
      desc: 'Описываем выводы, приоритеты, быстрые меры и изменения, требующие отдельного проекта.'
    },
    {
      num: '06',
      title: 'Обсуждаем результаты',
      desc: 'Проводим встречу с ответственными, объясняем выводы и согласуем возможный следующий этап.'
    }
  ];

  const deliverables = [
    'Диагностический отчёт по согласованному периметру и методике выборки',
    'Реестр выявленных рисков с приоритетом, причиной и возможным последствием',
    'Карта текущего договорного процесса и отмеченные точки разрыва — если аудит охватывает процесс',
    'Перечень шаблонов и документов, которые нужно обновить, объединить или вывести из использования',
    'Рекомендации по ролям, полномочиям, согласованию, учёту, исполнению и хранению',
    'Дорожная карта: что можно исправить быстро, что требует проекта и какие подразделения должны участвовать',
    'Презентация выводов ответственным сотрудникам — если включена в согласованный формат'
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Диагностика одной зоны',
      price: 'от ХХХ ₽',
      subtitle: 'Одна согласованная проблема; ограниченная выборка; краткое заключение и список действий.',
      buttonText: 'Обсудить диагностику',
      buttonHref: '#contact-form',
      features: [
        { name: 'Анализ конкретного узкого места или процесса', value: '✓' },
        { name: 'Оценка выборки документов по выбранной зоне', value: '✓' },
        { name: 'Краткое письменное экспертное заключение', value: '✓' },
        { name: 'Список первоочередных рекомендаций', value: '✓' }
      ],
      popular: false
    },
    {
      title: 'Аудит массива договоров',
      price: 'от ХХХ ₽',
      subtitle: 'Согласованная выборка договоров и шаблонов; системные наблюдения; риск-карта и рекомендации.',
      buttonText: 'Уточнить стоимость',
      buttonHref: '#contact-form',
      features: [
        { name: 'Анализ репрезентативной выборки договоров', value: '✓' },
        { name: 'Выявление повторяющихся дефектов и уязвимостей', value: '✓' },
        { name: 'Реестр правовых рисков с градацией по опасности', value: '✓' },
        { name: 'Рекомендации по актуализации типовых форм', value: '✓' }
      ],
      popular: true
    },
    {
      title: 'Комплексный аудит',
      price: 'от ХХХ ₽',
      subtitle: 'Документы, процесс и интервью; отчёт, реестр рисков и дорожная карта изменений.',
      buttonText: 'Обсудить аудит',
      buttonHref: '#contact-form',
      features: [
        { name: 'Аудит договоров, регламентов и маршрутов', value: '✓' },
        { name: 'Интервью с ключевыми участниками процесса', value: '✓' },
        { name: 'Карта сквозного жизненного цикла документа', value: '✓' },
        { name: 'Пошаговая дорожная карта оптимизации системы', value: '✓' }
      ],
      popular: false
    },
    {
      title: 'Внедрение изменений',
      price: 'по оценке',
      subtitle: 'Отдельный этап после аудита: регламенты, матрицы, формы, шаблоны и контрольные инструменты.',
      buttonText: 'Обсудить следующий этап',
      buttonHref: '#contact-form',
      features: [
        { name: 'Разработка утверждённых типовых договоров', value: '✓' },
        { name: 'Подготовка регламента договорной работы', value: '✓' },
        { name: 'Матрица полномочий и чек-листы согласования', value: '✓' },
        { name: 'Сопровождение внедрения регламентов в компании', value: '✓' }
      ],
      popular: false
    }
  ];

  const cases: CaseData[] = [
    {
      title: 'Выявили риск подписания неутверждённых версий договоров',
      category: 'Комплексный аудит',
      problem: 'В дистрибьюторской компании договоры согласовывались по электронной почте, а финальные файлы хранились у разных сотрудников. В реестре не было связи между согласованной и подписанной версиями.',
      action: 'Проверили выборку договоров, цепочки согласования, правила именования файлов, полномочия подписантов и хранение приложений. Выделили точки, где документ мог измениться после юридического согласования.',
      result: 'Компания получила карту процесса и перечень первоочередных изменений: единый статус финальной версии, контроль комплектности перед подписанием и связь реестра с подписанным файлом.'
    },
    {
      title: 'Нашли причину повторных задержек согласования',
      category: 'Аудит процесса',
      problem: 'В сервисной компании коммерческие договоры неоднократно возвращались между продажами, финансами и юристом. Формальных сроков и оснований для повторного согласования не было.',
      action: 'Сопоставили фактические маршруты по выборке сделок, провели интервью с участниками, проверили состав входных данных и типовые причины возврата.',
      result: 'В отчёте были разделены юридические, финансовые и коммерческие решения, определены обязательные вводные и предложена последовательность изменений маршрута согласования.'
    },
    {
      title: 'Систематизировали риски исполнения долгосрочных договоров',
      category: 'Аудит договоров',
      problem: 'Компания по обслуживанию оборудования использовала несколько форм договоров. Сроки заявок, гарантий, приёмки и уведомлений контролировались подразделениями отдельно, а изменения не всегда попадали в общий комплект.',
      action: 'Проанализировали согласованную выборку договоров и приложений, сопоставили условия с фактическим документооборотом и выделили обязательства, которым не был назначен единый контроль.',
      result: 'Компания получила реестр повторяющихся рисков, перечень приоритетных шаблонов и дорожную карту по учёту сроков, изменений и документов исполнения.'
    }
  ];

  const relatedServices = [
    {
      title: 'Договорный юрист для бизнеса',
      desc: 'Вернуться на общий хаб направления для выбора формата правовой помощи.',
      link: '/biznesu/dogovornoe-pravo/'
    },
    {
      title: 'Разработка и проверка договора',
      desc: 'После аудита нужно точечно разработать конкретный шаблон или проверить крупную сделку.',
      link: '/biznesu/dogovornoe-pravo/razrabotka-i-ekspertiza-dogovorov/'
    },
    {
      title: 'Помощь в договорном споре',
      desc: 'В процессе проверки обнаружен реальный конфликт по оплате, срокам или неисполнению.',
      link: '/biznesu/dogovornoe-pravo/dogovornye-spory/'
    },
    {
      title: 'Юридическое сопровождение бизнеса',
      desc: 'Передать регулярную договорную и корпоративную функцию внешней команде на абонентской основе.',
      link: '/biznesu/yuridicheskoe-soprovozhdenie-biznesa/'
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
        '@id': 'https://dejure-help.ru/biznesu/dogovornoe-pravo/audit-dogovornoj-raboty/#service',
        name: 'Аудит договорной работы компании в Липецке',
        serviceType: 'Правовой аудит договоров и процессов договорной работы',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        url: 'https://dejure-help.ru/biznesu/dogovornoe-pravo/audit-dogovornoj-raboty/',
        description: 'Проверим договоры, шаблоны и процесс работы с ними: выявим системные риски, узкие места согласования и контроля, подготовим отчёт и план изменений.'
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/biznesu/dogovornoe-pravo/audit-dogovornoj-raboty/#faq',
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
            <span style={{ color: 'var(--color-text-muted)' }}>Аудит договорной работы</span>
          </>
        }
        superTitle="Договорное право • Для бизнеса"
        title="Аудит договорной работы компании"
        subtitle="Проверим договоры, шаблоны и весь путь документа — от заявки до исполнения и хранения. Выявим системные риски и подготовим приоритетный план изменений."
        trustItems={[
          { text: 'Анализируем документы и реальный процесс' },
          { text: 'Отделяем критичные риски от организационных недочётов' },
          { text: 'Передаём отчёт, карту рисков и план действий' }
        ]}
        primaryCtaText="Обсудить аудит"
        primaryCtaLink="#contact-form"
        primaryCtaSubtext="Перезвоним в течение 15 минут в рабочее время"
        secondaryCtaText="Что проверяем"
        secondaryCtaLink="#audit-scope"
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
                  <div style={{ padding: '24px 20px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(23,50,77,0.2)', paddingBottom: '8px', marginBottom: '12px' }}>
                      <img src="/images/logo_dark.png" alt="Де-Юре" style={{ width: '50px', height: 'auto', opacity: 0.9 }} />
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', alignItems: 'flex-end' }}>
                        <span style={{ fontSize: '6.5px', fontWeight: 'bold', color: 'var(--color-deep-blue)' }}>ЖИЗНЕННЫЙ ЦИКЛ ДОГОВОРА</span>
                        <span style={{ fontSize: '5px', color: 'var(--color-primary)' }}>Карта процесса и аудит рисков</span>
                      </div>
                    </div>

                    {/* Схема жизненного цикла */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(247, 244, 237, 0.8)', padding: '5px 8px', borderLeft: '3px solid #C1A066' }}>
                        <span style={{ fontSize: '6px', fontWeight: 'bold', color: '#C1A066' }}>01</span>
                        <span style={{ fontSize: '5.5px', fontWeight: 'bold', color: 'var(--color-deep-blue)' }}>ИНИЦИИРОВАНИЕ И ЗАЯВКА</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(247, 244, 237, 0.8)', padding: '5px 8px', borderLeft: '3px solid #C1A066' }}>
                        <span style={{ fontSize: '6px', fontWeight: 'bold', color: '#C1A066' }}>02</span>
                        <span style={{ fontSize: '5.5px', fontWeight: 'bold', color: 'var(--color-deep-blue)' }}>СОГЛАСОВАНИЕ И ВЕРСИИ</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(247, 244, 237, 0.8)', padding: '5px 8px', borderLeft: '3px solid #C1A066' }}>
                        <span style={{ fontSize: '6px', fontWeight: 'bold', color: '#C1A066' }}>03</span>
                        <span style={{ fontSize: '5.5px', fontWeight: 'bold', color: 'var(--color-deep-blue)' }}>ПОЛНОМОЧИЯ И ПОДПИСАНИЕ</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(247, 244, 237, 0.8)', padding: '5px 8px', borderLeft: '3px solid #C1A066' }}>
                        <span style={{ fontSize: '6px', fontWeight: 'bold', color: '#C1A066' }}>04</span>
                        <span style={{ fontSize: '5.5px', fontWeight: 'bold', color: 'var(--color-deep-blue)' }}>ИСПОЛНЕНИЕ И ПЕРВИЧКА</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(247, 244, 237, 0.8)', padding: '5px 8px', borderLeft: '3px solid #C1A066' }}>
                        <span style={{ fontSize: '6px', fontWeight: 'bold', color: '#C1A066' }}>05</span>
                        <span style={{ fontSize: '5.5px', fontWeight: 'bold', color: 'var(--color-deep-blue)' }}>РЕЕСТР, АРХИВ И ЭДО</span>
                      </div>
                    </div>

                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '6px', borderTop: '1px solid rgba(23,50,77,0.15)' }}>
                      <span style={{ fontSize: '5px', color: 'var(--color-text-muted)' }}>ЮК «ДЕ-ЮРЕ» • АУДИТ ДЕФЕКТОВ</span>
                      <span style={{ fontSize: '5px', color: 'var(--color-gold)', fontWeight: 'bold' }}>ДИАГНОСТИКА ✓</span>
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
                Сначала согласуем периметр и выборку документов.
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ color: 'var(--color-gold)', fontSize: '20px', lineHeight: 1 }}>✓</div>
              <div style={{ fontSize: '15px', color: 'var(--color-deep-blue)', fontWeight: 500, lineHeight: 1.5 }}>
                Проверяем не только тексты, но и реальную работу подразделений.
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ color: 'var(--color-gold)', fontSize: '20px', lineHeight: 1 }}>✓</div>
              <div style={{ fontSize: '15px', color: 'var(--color-deep-blue)', fontWeight: 500, lineHeight: 1.5 }}>
                Состав отчёта, срок и стоимость фиксируем до начала аудита.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. КОГДА КОМПАНИИ НУЖЕН АУДИТ ═══ */}
      <section style={{ backgroundColor: 'var(--color-white)', padding: '64px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 44px' }}>
            <h2 style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              Когда договорная работа требует системной проверки
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Отдельные ошибки часто оказываются симптомами одного процесса: непонятных ролей, неуправляемых версий, формального согласования или отсутствия контроля после подписания.
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
                  Обсудить проверку →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. УНИКАЛЬНЫЙ БЛОК: ЧТО ПРОВЕРЯЕМ В ДОГОВОРНОЙ СИСТЕМЕ ═══ */}
      <section id="audit-scope" style={{ backgroundColor: 'var(--color-bg-light)', padding: '64px 0', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 44px' }}>
            <h2 style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              Что проверяем в договорной системе
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Точный периметр зависит от масштаба компании и задачи. Ниже — основные зоны, из которых формируется программа аудита.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px'
          }}>
            {auditScope.map((scope, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--color-white)',
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
                  <strong>Результат проверки:</strong> {scope.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. ФОРМАТЫ АУДИТА ═══ */}
      <section style={{ backgroundColor: 'var(--color-white)', padding: '64px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 44px' }}>
            <h2 style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              Выберите подходящий масштаб проверки
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Начать можно с ограниченной диагностики одной проблемной зоны или провести полный аудит договорной функции. Итоговый формат определяем после первого разговора.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {auditFormats.map((fmt, idx) => (
              <div
                key={idx}
                className="card hover-lift"
                style={{
                  background: 'var(--color-bg-light)',
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
                  <div style={{ background: 'var(--color-white)', padding: '12px 14px', borderLeft: '3px solid var(--color-gold)', marginBottom: '24px' }}>
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

      {/* ═══ 5. ЧТО ПОТРЕБУЕТСЯ ДЛЯ АУДИТА ═══ */}
      <section style={{ backgroundColor: 'var(--color-bg-light)', padding: '64px 0', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{
            background: 'var(--color-white)',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '40px 36px',
            maxWidth: '920px',
            margin: '0 auto'
          }}>
            <h2 style={{ fontSize: '26px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              Что потребуется для аудита
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
              На первом этапе не нужно выгружать весь архив. Сначала определим цель, период и выборку, затем согласуем безопасный способ передачи:
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
              Не передавайте логины, пароли и базы через открытую форму. Доступы и каналы обмена согласуются отдельным регламентом безопасности.
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 6. КАК ПРОХОДИТ АУДИТ ═══ */}
      <section style={{ backgroundColor: 'var(--color-white)', padding: '64px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 44px' }}>
            <h2 style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              Как проходит аудит договорной работы
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Программа строится под задачу компании: сначала фиксируем границы, затем проверяем документы и реальный процесс, после чего обсуждаем выводы и приоритеты.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            {workSteps.map((step, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--color-bg-light)',
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
            background: 'var(--color-bg-light)',
            border: '1px solid var(--color-border)',
            padding: '20px 24px',
            textAlign: 'center',
            fontSize: '14.5px',
            color: 'var(--color-text-muted)',
            lineHeight: 1.6
          }}>
            Интервью можно провести по телефону или видеосвязи, а документы передать электронно согласованным способом. Выезд в офис и очные рабочие сессии оцениваются по задаче.
          </div>
        </div>
      </section>

      {/* ═══ 7. РЕЗУЛЬТАТ АУДИТА ═══ */}
      <section style={{ backgroundColor: 'var(--color-bg-light)', padding: '64px 0', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 40px' }}>
            <h2 style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              Результат аудита
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Состав результата фиксируется до начала работы. Он должен позволять руководителю увидеть не только ошибки, но и порядок их исправления.
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
                  background: 'var(--color-white)',
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

      {/* ═══ 8. СТОИМОСТЬ УСЛУГ ═══ */}
      <PricingBlock
        title="Стоимость аудита договорной работы"
        subtitle="Цена зависит от количества видов договоров, размера массива и выборки, числа подразделений, состояния учёта, глубины интервью и состава итоговых материалов. Периметр, стоимость и срок фиксируем после первичной оценки."
        tiers={pricingTiers}
      />

      {/* ═══ 9. ПРИМЕРЫ ИЗ ПРАКТИКИ ═══ */}
      <CasesBlock
        title="Примеры из практики"
        cases={cases}
      />

      {/* ═══ 10. СВЯЗАННЫЕ УСЛУГИ ═══ */}
      <section style={{ backgroundColor: 'var(--color-bg-light)', padding: '64px 0', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 40px' }}>
            <h2 style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              Связанные услуги
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Если по результатам аудита потребуется разработка документов или защита в конкретном споре.
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

      {/* ═══ 11. ОФИС И ФОРМАТ РАБОТЫ ═══ */}
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
                Принимаем в офисе по адресу: г. Липецк, ул. Советская, д. 35, офис 213. Интервью и обсуждение результатов можно провести дистанционно, а документы передать электронно согласованным способом. Необходимость выезда в компанию определяется периметром аудита.
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

      {/* ═══ 12. FAQ ═══ */}
      <FAQBlock
        title="Часто задаваемые вопросы"
        subtitle="Ответы на вопросы по правовому аудиту договорной базы, шаблонов и процессов компании."
        faqs={faqs}
      />

      {/* ═══ 13. ФИНАЛЬНАЯ ФОРМА ═══ */}
      <section id="contact-form" style={{ backgroundColor: 'var(--color-bg-light)', padding: '64px 0', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 36px' }}>
            <h2 style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '12px' }}>
              Обсудите аудит договорной работы
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Опишите, что не устраивает в текущем процессе: договоры долго согласуются, используются разные шаблоны, теряются версии или не контролируется исполнение. Мы уточним задачу и предложим подходящий периметр проверки.
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
              Не указывайте в форме коммерческую тайну, реквизиты, персональные данные сотрудников и контрагентов. Документы можно передать после согласования безопасного способа связи.
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
