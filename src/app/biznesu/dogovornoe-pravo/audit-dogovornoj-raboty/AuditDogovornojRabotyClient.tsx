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
      context: 'templates',
      btnText: 'Обсудить шаблоны'
    },
    {
      tag: 'Согласование',
      title: 'Договоры долго ходят между отделами',
      desc: 'Проверим маршрут, роли, основания для повторных согласований и точки, где документ возвращается без понятного решения.',
      context: 'approval',
      btnText: 'Ускорить согласование'
    },
    {
      tag: 'Подписание',
      title: 'Неясно, кто и на каком основании подписывает документы',
      desc: 'Проверим правила подтверждения полномочий, доверенности, замещение и контроль подписанных версий.',
      context: 'authority',
      btnText: 'Проверить полномочия'
    },
    {
      tag: 'Учёт',
      title: 'Нет единого реестра и актуального комплекта документов',
      desc: 'Оценим нумерацию, статусы, связь договора с приложениями и соглашениями, хранение оригиналов и электронных файлов.',
      context: 'registry',
      btnText: 'Навести порядок'
    },
    {
      tag: 'Исполнение',
      title: 'Сроки, пролонгации и обязательства контролируются вручную',
      desc: 'Выявим условия, которые требуют событийного контроля, ответственных и подтверждающих документов.',
      context: 'performance',
      btnText: 'Настроить контроль'
    },
    {
      tag: 'Риски',
      title: 'Одни и те же спорные условия повторяются в сделках',
      desc: 'Проверим выборку и отделим единичную ошибку от системного дефекта шаблона или процедуры.',
      context: 'recurring-risk',
      btnText: 'Исключить риски'
    },
    {
      tag: 'Рост',
      title: 'Компания выросла, а правила остались неформальными',
      desc: 'Сопоставим реальный поток договоров с ролями, нагрузкой и необходимым уровнем контроля.',
      context: 'growth',
      btnText: 'Систематизировать работу'
    },
    {
      tag: 'Изменения',
      title: 'Внедряется ЭДО, новая учётная система или структура',
      desc: 'Проверим, какие юридические и организационные правила нужно закрепить до переноса процесса в цифровой инструмент.',
      context: 'change',
      btnText: 'Подготовить к ЭДО'
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
      badge: 'Формат 01',
      title: 'Диагностика проблемной зоны',
      desc: 'Проверяем один процесс: например, согласование, полномочия, реестр или контроль исполнения.',
      result: 'Краткое заключение и список приоритетных действий.',
      cta: 'Обсудить диагностику',
      context: 'diagnostic'
    },
    {
      badge: 'Формат 02',
      title: 'Аудит массива договоров',
      desc: 'Анализируем согласованную выборку заключённых договоров и шаблонов, выявляем повторяющиеся дефекты и риски.',
      result: 'Реестр наблюдений, риск-карта и рекомендации по формам.',
      cta: 'Уточнить выборку',
      context: 'mass-audit'
    },
    {
      badge: 'Формат 03',
      title: 'Комплексный аудит',
      desc: 'Проверяем документы и жизненный цикл договора с участием ключевых подразделений.',
      result: 'Отчёт, карта процесса, реестр рисков и дорожная карта изменений.',
      cta: 'Обсудить аудит',
      context: 'complex-audit'
    },
    {
      badge: 'Формат 04',
      title: 'Аудит и последующее внедрение',
      desc: 'После диагностики отдельно оцениваем разработку регламентов, матриц, заявок, шаблонов и контрольных инструментов.',
      result: 'Согласованный проект изменений; состав не входит автоматически в базовый аудит.',
      cta: 'Обсудить внедрение',
      context: 'implementation'
    }
  ];

  const prepDocs = [
    {
      title: 'Описание бизнес-модели и сделок',
      desc: 'Краткое описание бизнеса, видов сделок и подразделений, участвующих в договорном цикле компании.'
    },
    {
      title: 'Перечень шаблонов и объём',
      desc: 'Перечень используемых шаблонов и примерный объём договоров за согласованный аналитический период.'
    },
    {
      title: 'Локальные регламенты и правила',
      desc: 'Локальные положения, инструкции, матрицы полномочий и регламенты согласования — если они утверждены.'
    },
    {
      title: 'Выборка договоров и приложений',
      desc: 'Согласованная выборка договоров вместе с приложениями, дополнительными соглашениями и документами исполнения.'
    },
    {
      title: 'Маршрутные документы и формы',
      desc: 'Примеры заявки на договор, листа согласования, реестра, доверенностей и официальных уведомлений.'
    },
    {
      title: 'Повторяющиеся проблемы и интервью',
      desc: 'Описание повторяющихся проблемных точек и готовность к коротким интервью с ключевыми участниками процесса.'
    },
    {
      title: 'Сведения об используемых системах',
      desc: 'Сведения об используемых системах ЭДО, CRM, 1С и хранилищах — строго без передачи паролей и доступов.'
    }
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
      desc: 'Согласуем категории документов, критерии отбора, интервью и итоговый состав материалов.'
    },
    {
      num: '03',
      title: 'Изучаем документы и процесс',
      desc: 'Анализируем договоры, шаблоны, локальные правила и фактические действия участников; выявляем расхождения.'
    },
    {
      num: '04',
      title: 'Систематизируем риски',
      desc: 'Разделяем критичные правовые риски, повторяющиеся дефекты и организационные узкие места, определяем причины.'
    },
    {
      num: '05',
      title: 'Готовим отчёт и дорожную карту',
      desc: 'Описываем выводы, приоритеты, быстрые меры и изменения, требующие отдельного проектного внедрения.'
    },
    {
      num: '06',
      title: 'Обсуждаем результаты',
      desc: 'Проводим презентацию выводов руководству и ответственным лицам, согласуем возможный план внедрения.'
    }
  ];

  const deliverables = [
    {
      title: 'Диагностический отчёт',
      desc: 'Развёрнутое экспертное заключение по согласованному периметру, методологии выборки и правовой оценке.'
    },
    {
      title: 'Реестр выявленных рисков',
      desc: 'Систематизированный реестр рисков с градацией приоритетов, описанием причин и потенциальных финансовых последствий.'
    },
    {
      title: 'Карта текущего процесса',
      desc: 'Наглядная схема движения договора и отмеченные точки сбоев — если аудит охватывает жизненный цикл документа.'
    },
    {
      title: 'Анализ шаблонов и форм',
      desc: 'Перечень шаблонов и типовых документов, которые требуют обновления, унификации или вывода из оборота.'
    },
    {
      title: 'Рекомендации по контролю',
      desc: 'Практические рекомендации по ролям сотрудников, матрице полномочий, согласованию, исполнению и архиву.'
    },
    {
      title: 'Пошаговая дорожная карта',
      desc: 'Чёткий план действий: быстрые исправления без бюджета, среднесрочные доработки и масштабные изменения.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Диагностика одной зоны',
      price: 'от ХХХ ₽',
      subtitle: 'Одна согласованная проблема; ограниченная выборка; краткое заключение и список действий.',
      buttonText: 'Обсудить диагностику',
      buttonHref: '#form',
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
      buttonHref: '#form',
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
      buttonHref: '#form',
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
      buttonHref: '#form',
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
      desc: 'Вернуться на общий хаб направления для выбора комплексного правового формата.',
      link: '/biznesu/dogovornoe-pravo/'
    },
    {
      title: 'Разработка и экспертиза договоров',
      desc: 'После аудита точечно разработать индивидуальный шаблон или проверить сложную сделку.',
      link: '/biznesu/dogovornoe-pravo/razrabotka-i-ekspertiza-dogovorov/'
    },
    {
      title: 'Помощь в договорном споре',
      desc: 'Если в ходе аудита выявлен острый конфликт по оплате, нарушению сроков или убыткам.',
      link: '/biznesu/dogovornoe-pravo/dogovornye-spory/'
    },
    {
      title: 'Юридическое сопровождение бизнеса',
      desc: 'Передать регулярную договорную функцию внешней юридической команде Де-Юре.',
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
        superTitle="Договорное право • B2B • Липецк"
        title="Аудит договорной работы компании"
        subtitle="Проверим договоры, шаблоны и весь путь документа — от заявки до исполнения и хранения. Выявим системные риски и подготовим приоритетный план изменений."
        trustItems={[
          { text: 'Анализируем документы и реальный процесс компании' },
          { text: 'Отделяем критичные риски от организационных недочётов' },
          { text: 'Передаём отчёт, карту рисков и план действий' }
        ]}
        primaryCtaText="Обсудить аудит"
        primaryCtaLink="#form"
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

      {/* ═══ 1.1. СТРОКА ДОВЕРИЯ ═══ */}
      <section style={{ backgroundColor: 'var(--color-bg-light)', borderBottom: '1px solid var(--color-border)', padding: '24px 0' }}>
        <div className="container">
          <div className="grid grid-3" style={{ gap: '24px' }}>
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

      {/* ═══ 2. КОГДА ДОГОВОРНАЯ РАБОТА ТРЕБУЕТ ПРОВЕРКИ ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Когда договорная работа <br />требует системной проверки
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Отдельные ошибки часто оказываются симптомами одного процесса: непонятных ролей, неуправляемых версий, формального согласования или отсутствия контроля после подписания.
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

            {/* Карточка-призыв span-2 */}
            <div
              className="card service-card service-card-span-2"
              style={{
                background: 'var(--color-deep-blue)',
                color: '#fff',
                padding: '36px 32px',
                borderTop: '3px solid var(--color-gold)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <span style={{ fontSize: '11.5px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '12px' }}>
                  Индивидуальный аудит
                </span>
                <h3 style={{ fontSize: '22px', fontFamily: 'var(--font-serif)', color: '#fff', marginBottom: '14px', lineHeight: 1.3 }}>
                  Нужна проверка специфического массива или процедуры?
                </h3>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, margin: 0 }}>
                  Проанализируем договорный контур холдинга, правила взаимодействия с филиалами или подготовим аудит перед внедрением корпоративной системы ЭДО.
                </p>
              </div>
              <div style={{ marginTop: '24px' }}>
                <a
                  href="#form"
                  className="btn btn-gold white-btn-custom"
                  onClick={() => setActiveContext('custom-audit')}
                  style={{ display: 'inline-block' }}
                >
                  Обсудить задачу с юристом
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. ЧТО ПРОВЕРЯЕМ В ДОГОВОРНОЙ СИСТЕМЕ ═══ */}
      <section id="audit-scope" className="section" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Что проверяем в договорной системе
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Точный периметр зависит от масштаба компании и задачи. Ниже — основные зоны, из которых формируется программа аудита.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '24px' }}>
            {auditScope.map((scope, idx) => (
              <div
                key={idx}
                className="card hover-lift"
                style={{
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  borderLeft: '4px solid var(--color-gold)',
                  padding: '28px 26px',
                  borderRadius: '0',
                  boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                  <span style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: 'var(--color-gold)',
                    fontFamily: 'var(--font-serif)'
                  }}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--color-deep-blue)', margin: 0 }}>
                    {scope.title}
                  </h3>
                </div>

                <div style={{ marginBottom: '12px', fontSize: '14.5px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
                  <strong style={{ color: 'var(--color-primary)' }}>Что анализируем:</strong> {scope.what}
                </div>

                <div style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                  <strong style={{ color: 'var(--color-deep-blue)' }}>Результат проверки:</strong> {scope.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. ФОРМАТЫ АУДИТА ═══ */}
      <section className="section bg-white" id="formats" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Выберите подходящий <br />масштаб проверки
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Начать можно с ограниченной диагностики одной проблемной зоны или провести полный аудит договорной функции. Итоговый формат определяем после первого разговора.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '24px' }}>
            {auditFormats.map((fmt, idx) => (
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
                    textTransform: 'uppercase',
                    marginBottom: '10px'
                  }}>
                    {fmt.badge}
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '20px',
                    fontWeight: 600,
                    color: 'var(--color-deep-blue)',
                    marginBottom: '12px',
                    lineHeight: 1.3
                  }}>
                    {fmt.title}
                  </h3>

                  <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                    {fmt.desc}
                  </p>

                  <div style={{
                    background: 'var(--color-bg-light)',
                    padding: '14px 16px',
                    borderLeft: '3px solid var(--color-gold)',
                    marginBottom: '28px'
                  }}>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Результат:
                    </span>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      {fmt.result}
                    </span>
                  </div>
                </div>

                <a
                  href="#form"
                  onClick={() => setActiveContext(fmt.context)}
                  className="btn btn-primary"
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
      <section className="section" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Что потребуется для аудита
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              На первом этапе не нужно выгружать весь архив компании. Сначала определим цель, период и выборку, затем согласуем безопасный способ передачи:
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '20px', marginBottom: '32px' }}>
            {prepDocs.map((item, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  padding: '22px 24px',
                  borderRadius: '0',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px'
                }}
              >
                <div style={{ color: 'var(--color-primary)', marginTop: '2px', flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: '15.5px', fontWeight: 700, color: 'var(--color-deep-blue)', margin: '0 0 6px 0' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.55 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="card"
            style={{
              background: 'var(--color-white)',
              border: '1px solid var(--color-border)',
              borderLeft: '4px solid var(--color-gold)',
              padding: '24px 28px',
              borderRadius: '0',
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}
          >
            <div style={{ color: 'var(--color-gold)', fontSize: '24px', lineHeight: 1, flexShrink: 0 }}>ℹ️</div>
            <div style={{ fontSize: '14px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <strong>Конфиденциальность:</strong> Не передавайте логины, пароли и полные базы через открытую форму на сайте. Доступы и защищённые каналы обмена согласуются отдельным регламентом безопасности перед началом работы.
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 6. КАК ПРОХОДИТ АУДИТ ═══ */}
      <ProcessBlock
        title="Как проходит аудит договорной работы"
        subtitle="Программа строится под задачу компании: сначала фиксируем границы, затем проверяем документы и реальный процесс, после чего обсуждаем выводы и приоритеты."
        steps={workSteps}
      />

      {/* ═══ 7. РЕЗУЛЬТАТ АУДИТА ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Результат аудита
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Состав результата фиксируется до начала работы. Он позволяет руководителю увидеть не только дефекты, но и точный порядок их исправления.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '20px' }}>
            {deliverables.map((item, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  background: 'var(--color-bg-light)',
                  border: '1px solid var(--color-border)',
                  borderLeft: '4px solid var(--color-gold)',
                  padding: '22px 24px',
                  borderRadius: '0',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px'
                }}
              >
                <div style={{ color: 'var(--color-gold)', marginTop: '2px', flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: '16px', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--color-deep-blue)', margin: '0 0 6px 0' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.55 }}>
                    {item.desc}
                  </p>
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
      <section className="section" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Связанные услуги
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Если по результатам аудита потребуется переработка шаблонов, точечная проверка крупной сделки или защита в судебном споре.
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '24px' }}>
            {relatedServices.map((rel, idx) => (
              <Link
                key={idx}
                href={rel.link}
                className="card hover-lift"
                style={{
                  height: '100%',
                  padding: '28px 24px',
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  borderRadius: '0',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  textDecoration: 'none'
                }}
              >
                <div>
                  <h3 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--color-deep-blue)', marginBottom: '12px', lineHeight: 1.35 }}>
                    {rel.title}
                  </h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    {rel.desc}
                  </p>
                </div>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '13.5px', fontWeight: 600, marginTop: '20px', paddingTop: '12px', borderTop: '1px solid rgba(23, 50, 77, 0.06)' }}>
                  <span>Подробнее</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
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
        subtitle="Ответы на вопросы по правовому аудиту договорной базы, шаблонов и процессов компании."
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
                Обсудите аудит договорной <br />работы компании
              </h2>

              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Опишите, что не устраивает в текущем процессе: договоры долго согласуются, используются разные шаблоны, теряются версии или не контролируется исполнение. Мы уточним задачу и предложим подходящий периметр проверки.
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
                  title="Оставить заявку"
                  subtitle=""
                  buttonText="Оставить заявку"
                  commentPlaceholder="Опишите задачу по аудиту договоров…"
                  subtext="Не указывайте в форме коммерческую тайну и пароли. Документы передаются после согласования защищённого канала связи."
                  hiddenFields={[
                    { name: 'pageId', value: 'B2B-04-02' },
                    { name: 'pageTitle', value: 'Аудит договорной работы компании в Липецке' },
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
