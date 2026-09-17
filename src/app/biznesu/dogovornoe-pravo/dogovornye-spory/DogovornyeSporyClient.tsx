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

export default function DogovornyeSporyClient() {
  const [activeContext, setActiveContext] = useState<string>('contract-dispute');

  const faqs = [
    {
      q: 'Вы работаете и с истцами, и с ответчиками?',
      a: 'Да. Для заявителя формируем требования и доказательства, для получившей претензию или иск компании — возражения, контррасчёт и возможные встречные требования. Наличие конфликта интересов проверяется до принятия поручения.'
    },
    {
      q: 'Обязательно ли направлять претензию до арбитражного суда?',
      a: 'Это зависит от требования, закона и договора. Для многих денежных требований из договоров действует обязательный досудебный порядок; общий срок по АПК РФ может составлять 30 календарных дней с даты направления претензии, если другой срок или порядок не установлен законом или договором. Конкретное правило нужно проверить по документам.'
    },
    {
      q: 'Можно ли урегулировать спор без суда?',
      a: 'Да. Возможны переговоры, претензия, изменение условий, соглашение о расторжении или мировое соглашение. Но уступки и формулировки нужно оценивать вместе с доказательствами и последствиями на случай нарушения договорённостей.'
    },
    {
      q: 'Как вы оцениваете перспективу дела?',
      a: 'Сопоставляем договор, фактическое исполнение, переписку, сроки, расчёты, доказательства и возможные возражения другой стороны. Результат оценки — сценарии и риски, а не гарантированный процент победы.'
    },
    {
      q: 'Можно ли взыскать оплату без подписанного акта?',
      a: 'Иногда возможно, но ответ зависит от договора, порядка сдачи, замечаний, переписки и иных доказательств передачи и использования результата. Само отсутствие подписи не позволяет заранее обещать взыскание или отказ.'
    },
    {
      q: 'Можно ли расторгнуть договор в одностороннем порядке?',
      a: 'Только если основания и порядок предусмотрены законом или договором. Нужно проверить вид договора, условия об отказе, содержание уведомления, момент прекращения и расчёты за уже исполненное.'
    },
    {
      q: 'Можно ли снизить неустойку или оспорить убытки?',
      a: 'Возможность зависит от основания ответственности, периода, расчёта, соразмерности, причинной связи, поведения сторон и доказательств. Юрист готовит конкретные возражения и контррасчёт после анализа материалов.'
    },
    {
      q: 'Что делать, если уже пришёл иск или определение суда?',
      a: 'Зафиксируйте дату получения, сохраните конверт или электронное уведомление, проверьте срок и не откладывайте передачу материалов. Не направляйте неподготовленное признание требований. Конкретные действия определяются документом и стадией дела.'
    },
    {
      q: 'Можно ли подключиться, если претензия уже отправлена самостоятельно?',
      a: 'Да. Проверим её содержание, доказательства направления, ответ контрагента и дальнейшие требования. При необходимости скорректируем позицию с учётом уже зафиксированных формулировок.'
    },
    {
      q: 'Возмещаются ли расходы на юриста?',
      a: 'Суд может распределить судебные расходы с учётом исхода дела, подтверждающих документов, разумности и других обстоятельств. Полное возмещение фактических затрат заранее не гарантируется.'
    },
    {
      q: 'Можно ли вести спор дистанционно?',
      a: 'Да. Документы передаются согласованным способом, обсуждение можно проводить по телефону или видеосвязи. Формат участия в заседаниях зависит от суда, стадии и технической возможности.'
    },
    {
      q: 'От чего зависит стоимость?',
      a: 'От стадии, объёма материалов, сложности требований и расчётов, количества участников и заседаний, необходимости экспертизы, встречного иска, обжалования и исполнения. Цена фиксируется для согласованного объёма.'
    }
  ];

  const situations = [
    {
      tag: 'Исполнение',
      title: 'Контрагент не выполнил обязательства или нарушил срок',
      desc: 'Определим доступные требования, порядок фиксации нарушения и доказательства причинённых последствий.',
      context: 'nonperformance',
      btnText: 'Оценить требования'
    },
    {
      tag: 'Приёмка',
      title: 'Заказчик не подписывает акт или отказывается принимать результат',
      desc: 'Проверим процедуру сдачи, замечания, переписку и фактическое использование результата; подготовим позицию.',
      context: 'acceptance',
      btnText: 'Подтвердить сдачу'
    },
    {
      tag: 'Качество',
      title: 'Стороны спорят об объёме или качестве исполнения',
      desc: 'Сопоставим договор, задание, критерии качества, документы приёмки и возможную необходимость экспертизы.',
      context: 'quality',
      btnText: 'Разобрать разногласия'
    },
    {
      tag: 'Деньги',
      title: 'Возник спор об оплате, авансе, удержании или расчёте',
      desc: 'Проверим встречное исполнение, основания платежа и возврата, расчёт и возражения другой стороны.',
      context: 'payment',
      btnText: 'Взыскать долг'
    },
    {
      tag: 'Санкции',
      title: 'Заявлены неустойка, проценты, убытки или компенсация',
      desc: 'Оценим основание, период, расчёт, причинную связь, ограничения ответственности и возможные возражения.',
      context: 'liability',
      btnText: 'Снизить неустойку'
    },
    {
      tag: 'Прекращение',
      title: 'Нужно расторгнуть договор или оспорить отказ контрагента',
      desc: 'Определим допустимый способ прекращения, требования к уведомлению и последствия для уже исполненного.',
      context: 'termination',
      btnText: 'Оформить расторжение'
    },
    {
      tag: 'Претензия',
      title: 'Компания получила претензию или иск',
      desc: 'Зафиксируем срок ответа, проверим комплект материалов и подготовим защиту, не допуская случайного признания спорных обстоятельств.',
      context: 'defense',
      btnText: 'Подготовить защиту'
    },
    {
      tag: 'Переговоры',
      title: 'Нужно договориться и правильно оформить условия урегулирования',
      desc: 'Определим допустимые уступки, обеспечим исполнимые формулировки соглашения и последствия его нарушения.',
      context: 'settlement',
      btnText: 'Провести переговоры'
    }
  ];

  const positionReview = [
    {
      title: 'Договорный комплект',
      what: 'Договор, приложения, задания, заявки, спецификации, дополнительные соглашения и приоритет документов.',
      why: 'Определить согласованные обязанности и версию, которая регулирует спор.'
    },
    {
      title: 'Фактическое исполнение',
      what: 'Что каждая сторона сделала, приняла, использовала, оплатила или не исполнила; последовательность событий.',
      why: 'Отделить формальную позицию от подтверждённых действий сторон.'
    },
    {
      title: 'Переписка и уведомления',
      what: 'Юридически значимые сообщения, замечания, признания, согласование изменений и доказательство отправки.',
      why: 'Понять, какие обстоятельства уже зафиксированы и можно ли на них ссылаться.'
    },
    {
      title: 'Сроки',
      what: 'Срок исполнения, претензионный порядок, договорные уведомления, исковая давность и процессуальные сроки.',
      why: 'Не потерять право, способ защиты или возможность представить возражения.'
    },
    {
      title: 'Требования и расчёт',
      what: 'Основной долг, возврат, неустойка, проценты, убытки, зачёт, удержание и встречные требования.',
      why: 'Сформировать юридически и арифметически проверяемую позицию.'
    },
    {
      title: 'Доказательства',
      what: 'Акты, накладные, отчёты, платежи, электронные данные, свидетельства использования результата и необходимость экспертизы.',
      why: 'Оценить, что уже подтверждено и какие доказательства нужно получить законно.'
    },
    {
      title: 'Подсудность и процедура',
      what: 'Арбитражная оговорка, компетентный суд, договорный и обязательный досудебный порядок, полномочия подписантов.',
      why: 'Избежать возврата иска, оставления без рассмотрения и процессуальных потерь.'
    },
    {
      title: 'Исполнимость решения',
      what: 'Известные активы, встречные риски, вероятность банкротства и фактический смысл выбранного требования.',
      why: 'Сопоставить юридическую победу с экономическим результатом для бизнеса.'
    }
  ];

  const stages = [
    {
      badge: 'Стадия 01',
      title: 'Оценка позиции',
      desc: 'Изучаем документы, требования и возможные возражения; сравниваем переговорный, претензионный и судебный сценарии.',
      result: 'Заключение или консультация с планом следующих действий.',
      cta: 'Оценить позицию',
      context: 'evaluation'
    },
    {
      badge: 'Стадия 02',
      title: 'Претензия и переговоры',
      desc: 'Готовим претензию, ответ, уведомление или проект соглашения; участвуем в обсуждении условий урегулирования.',
      result: 'Зафиксированная позиция и документы досудебного этапа.',
      cta: 'Обсудить досудебную работу',
      context: 'pretrial'
    },
    {
      badge: 'Стадия 03',
      title: 'Первая инстанция',
      desc: 'Формируем требования или защиту, готовим процессуальные документы, доказательства и представляем интересы в заседаниях.',
      result: 'Ведение согласованного объёма дела в арбитражном суде.',
      cta: 'Обсудить ведение дела',
      context: 'litigation'
    },
    {
      badge: 'Стадия 04',
      title: 'Обжалование и исполнение',
      desc: 'Анализируем судебные акты и материалы, готовим жалобу или возражения; дальнейшее исполнение решения оцениваем отдельно.',
      result: 'Согласованный этап апелляции, кассации или исполнения.',
      cta: 'Передать материалы',
      context: 'appeal'
    }
  ];

  const preserveRules = [
    {
      title: 'Сохраните весь договорный комплект',
      desc: 'Включая рамочные договоры, спецификации, задания, заявки, дополнительные соглашения и все редакции.'
    },
    {
      title: 'Зафиксируйте переписку и уведомления',
      desc: 'Электронные письма, мессенджеры, почтовые квитанции, описи вложения и уведомления о вручении.'
    },
    {
      title: 'Соберите первичные документы исполнения',
      desc: 'Акты сдачи-приёмки, товарные накладные ТОРГ-12, УПД, отчёты, платёжные поручения и дефектные ведомости.'
    },
    {
      title: 'Отметьте точную дату получения документов',
      desc: 'Дату вручения претензии, иска или судебного определения. Не пропускайте процессуальные сроки.'
    },
    {
      title: 'Не изменяйте документы задним числом',
      desc: 'Не вносите исправления в подписанные бумаги и не оформляйте подтверждения задним числом.'
    },
    {
      title: 'Не признавайте спорный долг до анализа',
      desc: 'Не подписывайте автоматически акты сверки, гарантийные письма и ответы с признанием спорных фактов.'
    }
  ];

  const prepDocs = [
    {
      title: 'Договор со всеми приложениями',
      desc: 'Договор, спецификации, технические задания, заявки, графики платежей и дополнительные соглашения.'
    },
    {
      title: 'Претензионная и судебная переписка',
      desc: 'Претензии, ответы на них, исковые заявления, отзывы и определения суда — если спор уже начался.'
    },
    {
      title: 'Первичные учётные документы',
      desc: 'Акты выполненных работ, УПД, товарные накладные, счета на оплату и платёжные поручения.'
    },
    {
      title: 'Переписка по исполнению и разногласиям',
      desc: 'Деловая переписка, протоколы разногласий, акты замечаний, фиксация недостатков и вызовы на осмотр.'
    },
    {
      title: 'Расчёт требований и неустойки',
      desc: 'Расчёт суммы задолженности, формула расчёта неустойки или процентов по ст. 395 ГК РФ.'
    },
    {
      title: 'Краткая хронология и цели компании',
      desc: 'Хронологическая цепочка событий и целевой результат: взыскать долг, снизить требования или заключить мировое.'
    }
  ];

  const workSteps = [
    {
      num: '01',
      title: 'Восстанавливаем хронологию',
      desc: 'Изучаем договорный комплект, фактическое исполнение, переписку, требования и процессуальные сроки.'
    },
    {
      num: '02',
      title: 'Оцениваем позицию и риски',
      desc: 'Проверяем доказательства, арифметические расчёты, возражения, встречные требования и сценарии.'
    },
    {
      num: '03',
      title: 'Согласуем стратегию',
      desc: 'Определяем цель, допустимые компромиссы, досудебные шаги, исковые требования или линию судебной защиты.'
    },
    {
      num: '04',
      title: 'Готовим и направляем документы',
      desc: 'Составляем мотивированную претензию, ответ, иск, отзыв, ходатайства или проект мирового соглашения.'
    },
    {
      num: '05',
      title: 'Ведём переговоры или дело',
      desc: 'Представляем позицию компании в досудебных переговорах и заседаниях арбитражного суда.'
    },
    {
      num: '06',
      title: 'Фиксируем результат и следующий шаг',
      desc: 'Разъясняем последствия судебного акта, организуем обжалование либо реальное исполнение решения.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Оценка позиции',
      price: 'ХХХ ₽',
      subtitle: 'Анализ согласованного комплекта; консультация или заключение; возможные сценарии и следующий шаг.',
      buttonText: 'Оценить спор',
      buttonHref: '#form',
      features: [
        { name: 'Изучение договора, переписки и первичных актов', value: '✓' },
        { name: 'Анализ доказательств и проверка рисков', value: '✓' },
        { name: 'Сравнение сценариев: переговоры / суд', value: '✓' },
        { name: 'Рекомендации по ближайшим процессуальным шагам', value: '✓' }
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
        { name: 'Подготовка обоснованной претензии или ответа', value: '✓' },
        { name: 'Арифметический контррасчёт требований/неустойки', value: '✓' },
        { name: 'Соблюдение обязательного претензионного порядка', value: '✓' },
        { name: 'Участие в досудебных переговорах', value: '✓' }
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
        { name: 'Составление иска / отзыва и доказательственной базы', value: '✓' },
        { name: 'Заявления об обеспечении иска (арест счетов)', value: '✓' },
        { name: 'Представительство в судебных заседаниях', value: '✓' },
        { name: 'Заявление о взыскании судебных расходов', value: '✓' }
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
        { name: 'Анализ протоколов и решения суда первой инстанции', value: '✓' },
        { name: 'Подготовка апелляционной или кассационной жалобы', value: '✓' },
        { name: 'Участие в заседаниях вышестоящих инстанций', value: '✓' },
        { name: 'Исполнение решения через банк или ФССП', value: '✓' }
      ],
      popular: false
    }
  ];

  const cases: CaseData[] = [
    {
      title: 'Подтвердили оказание услуг при отсутствии подписанного акта',
      category: 'Взыскание оплаты',
      problem: 'Заказчик отказался подписывать итоговый акт и заявил, что результат не был передан, хотя сотрудники продолжали использовать подготовленные материалы.',
      action: 'Собрали договорный комплект, переписку, промежуточные согласования и подтверждения передачи результата, восстановили процедуру приёмки и подготовили претензионную и судебную позицию.',
      result: 'Требование об оплате было обосновано совокупностью документов и фактическим использованием результата, а не только неподписанным актом.'
    },
    {
      title: 'Оспорили расчёт неустойки и доводы о просрочке',
      category: 'Защита ответчика',
      problem: 'Контрагент потребовал крупную неустойку за нарушение срока, не учитывая, что необходимые исходные данные и доступы передавались с задержкой.',
      action: 'Сопоставили календарь исполнения, запросы, ответы и условия о содействии заказчика, подготовили контррасчёт и возражения о периоде и причинах задержки.',
      result: 'Позиция компании была построена вокруг подтверждённой хронологии, встречного поведения контрагента и проверяемого расчёта, а не общего несогласия с суммой.'
    },
    {
      title: 'Оформили прекращение договора и расчёты сторон',
      category: 'Досудебное урегулирование',
      problem: 'Стороны хотели завершить длительный договор услуг, но спорили о возврате части аванса, незавершённых этапах и передаче результатов.',
      action: 'Определили выполненный объём и спорные позиции, подготовили переговорную модель и проект соглашения с этапами передачи, расчётов и взаимных подтверждений.',
      result: 'Условия прекращения были сведены в исполнимый документ, который фиксировал объём переданного, порядок платежей и последствия нарушения соглашения.'
    }
  ];

  const relatedServices = [
    {
      title: 'Договорный юрист для бизнеса',
      desc: 'Вернуться на общий хаб договорного права для оценки общей корпоративной задачи.',
      link: '/biznesu/dogovornoe-pravo/'
    },
    {
      title: 'Разработка и экспертиза договоров',
      desc: 'Конфликта ещё нет либо после урегулирования спора нужно обновить текст и исключить риски.',
      link: '/biznesu/dogovornoe-pravo/razrabotka-i-ekspertiza-dogovorov/'
    },
    {
      title: 'Аудит договорной работы',
      desc: 'Спор вскрыл повторяющиеся системные дефекты типовых шаблонов или процессов компании.',
      link: '/biznesu/dogovornoe-pravo/audit-dogovornoj-raboty/'
    },
    {
      title: 'Спор по договору поставки',
      desc: 'Конфликт непосредственно связан с товаром, сроками поставки, браком, приёмкой или оплатой.',
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
        '@id': 'https://dejure-help.ru/biznesu/dogovornoe-pravo/dogovornye-spory/#service',
        name: 'Юрист по договорным спорам для бизнеса в Липецке',
        serviceType: 'Разрешение договорных споров в досудебном и арбитражном порядке',
        provider: {
          '@id': 'https://dejure-help.ru/#legalservice'
        },
        areaServed: ['Липецк', 'Липецкая область'],
        url: 'https://dejure-help.ru/biznesu/dogovornoe-pravo/dogovornye-spory/',
        description: 'Поможем разрешить договорный спор: оценим позицию, подготовим претензию или ответ, проведём переговоры и представим интересы бизнеса в арбитражном суде.'
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://dejure-help.ru/biznesu/dogovornoe-pravo/dogovornye-spory/#faq',
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
            <span style={{ color: 'var(--color-text-muted)' }}>Договорные споры</span>
          </>
        }
        superTitle="Договорное право • B2B • Липецк"
        title="Юрист по договорным спорам для бизнеса"
        subtitle="Оценим договор, исполнение и доказательства, подготовим претензию или защиту и представим интересы компании в переговорах и арбитражном суде."
        trustItems={[
          { text: 'Работаем на стороне заявителя и ответчика' },
          { text: 'Сначала оцениваем требования, риски и доказательства' },
          { text: 'Согласуем стратегию, объём и стоимость до начала работы' }
        ]}
        primaryCtaText="Обсудить спор"
        primaryCtaLink="#form"
        primaryCtaSubtext="Перезвоним в течение 15 минут в рабочее время"
        secondaryCtaText="Как можем помочь"
        secondaryCtaLink="#dispute-stage"
        rightContent={
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', width: '100%' }}>
            {/* Darkening gradient under the creative to highlight the background graphic */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '150%',
              height: '150%',
              background: 'radial-gradient(circle, rgba(23, 50, 77, 0.12) 0%, rgba(23, 50, 77, 0.05) 30%, transparent 60%)',
              zIndex: 0,
              pointerEvents: 'none'
            }} />
            {/* Background Graphic: Courthouse (Centered behind mockup, shifted right) */}
            <svg className="hero-vector-svg" style={{ position: 'absolute', top: '35%', left: '100%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', opacity: 0.08, zIndex: 0, pointerEvents: 'none' }} viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="0.6">
              <path d="M3 21h18 M4 21v-2h16v2 M6 19V9 M10 19V9 M14 19V9 M18 19V9 M12 4l-9 5h18l-9-5z M4 9h16"/>
            </svg>

            <div className="mockup-container" style={{ zIndex: 1, margin: 0 }}>
              <div style={{ position: 'absolute', width: '220px', height: '220px', background: 'var(--color-primary)', filter: 'blur(90px)', opacity: 0.12, borderRadius: '50%' }} />

              <div className="doc-wrapper-float-1">
                <div className="doc-sheet doc-sheet-1">
                  <div style={{ padding: '24px 20px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(23,50,77,0.2)', paddingBottom: '8px', marginBottom: '12px' }}>
                      <img src="/images/logo_dark.png" alt="Де-Юре" style={{ width: '50px', height: 'auto', opacity: 0.9 }} />
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', alignItems: 'flex-end' }}>
                        <span style={{ fontSize: '6.5px', fontWeight: 'bold', color: 'var(--color-deep-blue)' }}>ДОГОВОРНЫЙ СПОР</span>
                        <span style={{ fontSize: '5px', color: 'var(--color-primary)' }}>Арбитраж и урегулирование</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '12px' }}>
                      <div style={{ background: 'rgba(247, 244, 237, 0.8)', padding: '6px 8px', borderLeft: '3px solid #C1A066' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                          <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)' }}>ПЕРЕГОВОРЫ</span>
                          <span style={{ fontSize: '5px', color: '#C1A066', fontWeight: 'bold' }}>ЭТАП 01</span>
                        </div>
                        <span style={{ fontSize: '5px', color: 'var(--color-text-muted)' }}>Мировое соглашение, фиксация уступок</span>
                      </div>
                      <div style={{ background: 'rgba(247, 244, 237, 0.8)', padding: '6px 8px', borderLeft: '3px solid #C1A066' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                          <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)' }}>ПРЕТЕНЗИЯ И ОТЗЫВ</span>
                          <span style={{ fontSize: '5px', color: '#C1A066', fontWeight: 'bold' }}>ЭТАП 02</span>
                        </div>
                        <span style={{ fontSize: '5px', color: 'var(--color-text-muted)' }}>Соблюдение ч. 5 ст. 4 АПК РФ, контррасчёт</span>
                      </div>
                      <div style={{ background: 'rgba(247, 244, 237, 0.8)', padding: '6px 8px', borderLeft: '3px solid #C1A066' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                          <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)' }}>АРБИТРАЖНЫЙ СУД</span>
                          <span style={{ fontSize: '5px', color: '#16a34a', fontWeight: 'bold' }}>ЭТАП 03</span>
                        </div>
                        <span style={{ fontSize: '5px', color: 'var(--color-text-muted)' }}>Иск, возражения, обеспечительные меры</span>
                      </div>
                    </div>

                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '6px', borderTop: '1px solid rgba(23,50,77,0.15)' }}>
                      <span style={{ fontSize: '5px', color: 'var(--color-text-muted)' }}>ИСТЕЦ / ОТВЕТЧИК</span>
                      <span style={{ fontSize: '5px', color: 'var(--color-gold)', fontWeight: 'bold' }}>ЗАЩИТА ПРАВ ✓</span>
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
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                <polyline points="9 11 12 14 22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
              <div style={{ fontSize: '15px', color: 'var(--color-deep-blue)', fontWeight: 500, lineHeight: 1.5 }}>
                Изучаем договор вместе с перепиской и документами исполнения.
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                <polyline points="9 11 12 14 22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
              <div style={{ fontSize: '15px', color: 'var(--color-deep-blue)', fontWeight: 500, lineHeight: 1.5 }}>
                Сравниваем досудебный, судебный и переговорный сценарии.
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                <polyline points="9 11 12 14 22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
              <div style={{ fontSize: '15px', color: 'var(--color-deep-blue)', fontWeight: 500, lineHeight: 1.5 }}>
                Не даём пустых гарантий до оценки доказательств и рисков.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. С КАКИМИ СИТУАЦИЯМИ РАБОТАЕМ ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Помощь в договорном споре <br />на стороне вашей компании
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Одинаковая формулировка договора может по-разному работать в зависимости от переписки, фактического исполнения и поведения сторон. Поэтому сначала восстанавливаем всю картину отношений.
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

            {/* Карточка 9: Срочная ситуация */}
            <div
              className="card hover-lift"
              style={{
                background: 'linear-gradient(135deg, rgba(23, 50, 77, 0.98) 0%, rgba(16, 39, 59, 0.98) 100%)',
                color: '#fff',
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
              <div>
                <div style={{
                  fontSize: '11.5px',
                  fontWeight: 700,
                  color: 'var(--color-gold)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '12px',
                  background: 'rgba(193, 160, 102, 0.15)',
                  padding: '3px 8px',
                  display: 'inline-block',
                  borderRadius: '2px'
                }}>
                  Срочная ситуация
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#ffffff',
                  margin: '0 0 12px 0',
                  lineHeight: 1.35
                }}>
                  Получили иск или арест счёта?
                </h3>

                <p style={{
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  Срочно передайте материалы спора — проверим процессуальные сроки на подачу отзыва и подготовим защиту.
                </p>
              </div>

              <a
                href="#form"
                onClick={() => setActiveContext('urgent-dispute')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--color-gold)',
                  fontSize: '13.5px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  marginTop: '20px',
                  cursor: 'pointer'
                }}
              >
                <span>Передать документы →</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. ЧТО ПРОВЕРЯЕМ ДО ВЫБОРА СТРАТЕГИИ ═══ */}
      <section id="position-review" className="section" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Что проверяем до выбора стратегии
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Сильная позиция строится не вокруг одного пункта договора. Важно сопоставить условия, исполнение, документы, сроки и возможные встречные требования.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '24px' }}>
            {positionReview.map((item, idx) => (
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
                    {item.title}
                  </h3>
                </div>

                <div style={{ marginBottom: '12px', fontSize: '14.5px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
                  <strong style={{ color: 'var(--color-primary)' }}>Что проверяем:</strong> {item.what}
                </div>

                <div style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                  <strong style={{ color: 'var(--color-deep-blue)' }}>Зачем:</strong> {item.why}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. ПОМОЩЬ НА РАЗНЫХ СТАДИЯХ СПОРА ═══ */}
      <section className="section bg-white" id="dispute-stage" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Подключимся на нужной <br />стадии спора
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Объём работы зависит от того, только ли возникли разногласия, направлена ли претензия или дело уже рассматривается арбитражным судом.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '24px' }}>
            {stages.map((stg, idx) => (
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
                    {stg.badge}
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '20px',
                    fontWeight: 600,
                    color: 'var(--color-deep-blue)',
                    marginBottom: '12px',
                    lineHeight: 1.3
                  }}>
                    {stg.title}
                  </h3>

                  <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                    {stg.desc}
                  </p>

                  <div style={{
                    background: 'var(--color-bg-light)',
                    padding: '14px 16px',
                    borderLeft: '3px solid var(--color-gold)',
                    marginBottom: '28px'
                  }}>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Результат этапа:
                    </span>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                      {stg.result}
                    </span>
                  </div>
                </div>

                <a
                  href="#form"
                  onClick={() => setActiveContext(stg.context)}
                  className="btn btn-primary"
                  style={{ textAlign: 'center', width: '100%' }}
                >
                  {stg.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 5. ЧТО ВАЖНО СОХРАНИТЬ ДО КОНСУЛЬТАЦИИ ═══ */}
      <section className="section" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Не потеряйте документы и сроки
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              До оценки позиции важно сохранить материалы и не создавать новые риски необдуманным ответом. Соблюдайте базовые правила безопасности:
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '20px', marginBottom: '32px' }}>
            {preserveRules.map((item, idx) => (
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
                <div style={{ color: '#b91c1c', marginTop: '2px', flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
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
              borderLeft: '4px solid #b91c1c',
              padding: '24px 28px',
              borderRadius: '0',
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}
          >
            <div style={{ color: '#b91c1c', fontSize: '24px', lineHeight: 1, flexShrink: 0 }}>⚠️</div>
            <div style={{ fontSize: '14px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <strong>Внимание:</strong> Зафиксируйте дату получения любого официального документа (конверт с трек-номером, уведомление в Госуслугах) и срочно передайте юристу для подготовки мотивированного отзыва в пределах процессуальных сроков.
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 6. ЧТО ПОТРЕБУЕТСЯ ЮРИСТУ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Что потребуется юристу
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Для первого разговора достаточно описать стороны, суть конфликта, сумму требований и ближайший срок. После этого согласуем комплект документов:
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '20px' }}>
            {prepDocs.map((item, idx) => (
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

      {/* ═══ 7. КАК СТРОИМ РАБОТУ ═══ */}
      <ProcessBlock
        title="Как строим работу по договорному спору"
        subtitle="Состав этапов зависит от позиции компании и стадии дела. До начала фиксируем задачу, границы представительства и формат результата."
        steps={workSteps}
      />

      {/* ═══ 8. СТОИМОСТЬ УСЛУГ ═══ */}
      <PricingBlock
        title="Стоимость помощи по договорному спору"
        subtitle="Цена зависит от стадии, объёма материалов, суммы и сложности требований, количества участников, необходимости экспертизы и числа судебных заседаний. Состав работ и стоимость фиксируем после оценки."
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
              Если требуется обновить договор после спора, провести полный аудит документации или спор касается конкретной сферы бизнеса.
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
        subtitle="Ответы на вопросы по претензиям, судебным искам, снижению неустойки и защите ответчика."
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
                Обсудите договорный <br />спор с юристом
              </h2>

              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко укажите, что произошло, на чьей стороне вы выступаете, получена ли претензия или иск и какой ближайший срок известен. Мы изучим задачу и предложим формат оценки.
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
                  commentPlaceholder="Кратко опишите суть договорного спора…"
                  subtext="Не указывайте в форме коммерческую тайну и пароли. Конфиденциальные документы передаются после согласования защищённого канала связи."
                  hiddenFields={[
                    { name: 'pageId', value: 'B2B-04-03' },
                    { name: 'pageTitle', value: 'Юрист по договорным спорам для бизнеса в Липецке' },
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
