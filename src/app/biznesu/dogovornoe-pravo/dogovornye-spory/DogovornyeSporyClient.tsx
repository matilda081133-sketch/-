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
      context: 'nonperformance'
    },
    {
      tag: 'Приёмка',
      title: 'Заказчик не подписывает акт или отказывается принимать результат',
      desc: 'Проверим процедуру сдачи, замечания, переписку и фактическое использование результата; подготовим позицию.',
      context: 'acceptance'
    },
    {
      tag: 'Качество',
      title: 'Стороны спорят об объёме или качестве исполнения',
      desc: 'Сопоставим договор, задание, критерии качества, документы приёмки и возможную необходимость экспертизы.',
      context: 'quality'
    },
    {
      tag: 'Деньги',
      title: 'Возник спор об оплате, авансе, удержании или расчёте',
      desc: 'Проверим встречное исполнение, основания платежа и возврата, расчёт и возражения другой стороны.',
      context: 'payment'
    },
    {
      tag: 'Санкции',
      title: 'Заявлены неустойка, проценты, убытки или компенсация',
      desc: 'Оценим основание, период, расчёт, причинную связь, ограничения ответственности и возможные возражения.',
      context: 'liability'
    },
    {
      tag: 'Прекращение',
      title: 'Нужно расторгнуть договор или оспорить отказ контрагента',
      desc: 'Определим допустимый способ прекращения, требования к уведомлению и последствия для уже исполненного.',
      context: 'termination'
    },
    {
      tag: 'Претензия',
      title: 'Компания получила претензию или иск',
      desc: 'Зафиксируем срок ответа, проверим комплект материалов и подготовим защиту, не допуская случайного признания спорных обстоятельств.',
      context: 'defense'
    },
    {
      tag: 'Переговоры',
      title: 'Нужно договориться и правильно оформить условия урегулирования',
      desc: 'Определим допустимые уступки, обеспечим исполнимые формулировки соглашения и последствия его нарушения.',
      context: 'settlement'
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
      title: 'Оценка позиции',
      desc: 'Изучаем документы, требования и возможные возражения; сравниваем переговорный, претензионный и судебный сценарии.',
      result: 'Заключение или консультация с планом следующих действий.',
      cta: 'Оценить позицию',
      context: 'evaluation'
    },
    {
      title: 'Претензия и переговоры',
      desc: 'Готовим претензию, ответ, уведомление или проект соглашения; участвуем в обсуждении условий урегулирования.',
      result: 'Зафиксированная позиция и документы досудебного этапа.',
      cta: 'Обсудить досудебную работу',
      context: 'pretrial'
    },
    {
      title: 'Первая инстанция',
      desc: 'Формируем требования или защиту, готовим процессуальные документы, доказательства и представляем интересы в заседаниях.',
      result: 'Ведение согласованного объёма дела в арбитражном суде.',
      cta: 'Обсудить ведение дела',
      context: 'litigation'
    },
    {
      title: 'Обжалование и исполнение',
      desc: 'Анализируем судебные акты и материалы, готовим жалобу или возражения; дальнейшее исполнение решения оцениваем отдельно.',
      result: 'Согласованный этап апелляции, кассации или исполнения.',
      cta: 'Передать материалы',
      context: 'appeal'
    }
  ];

  const preserveRules = [
    'Сохраните полный договорный комплект, включая приложения, задания, дополнительные соглашения и все версии',
    'Зафиксируйте переписку, уведомления, доказательства отправки и получения, электронные файлы и доступные данные систем',
    'Соберите акты, накладные, отчёты, платежи, замечания, фото и иные документы фактического исполнения',
    'Отметьте дату получения претензии, иска, определения суда или уведомления об отказе и не пропускайте указанные сроки',
    'Не удаляйте и не изменяйте документы; не оформляйте доказательства задним числом',
    'До анализа не подписывайте автоматически акт сверки, признание долга, соглашение о расторжении или ответ с признанием спорных фактов',
    'Не направляйте конфиденциальные материалы через открытую форму на сайте — способ безопасной передачи согласуем после контакта'
  ];

  const prepDocs = [
    'Договор со всеми приложениями, заданиями, заявками, спецификациями и изменениями',
    'Претензии, ответы, уведомления, иск, отзыв и определения суда — если они уже есть',
    'Переписка и протоколы переговоров по спорным условиям и исполнению',
    'Акты, накладные, отчёты, счета, платёжные документы и документы о замечаниях',
    'Расчёт требований контрагента и собственный расчёт — если подготовлен',
    'Доверенности и сведения о подписантах, если полномочия имеют значение',
    'Краткая хронология событий и цель бизнеса: получить исполнение, деньги, прекратить отношения, снизить требования или заключить соглашение'
  ];

  const workSteps = [
    {
      num: '01',
      title: 'Восстанавливаем хронологию',
      desc: 'Изучаем договорный комплект, исполнение, переписку, требования и ближайшие сроки.'
    },
    {
      num: '02',
      title: 'Оцениваем позицию и риски',
      desc: 'Проверяем доказательства, расчёты, возражения, встречные требования и экономический смысл сценариев.'
    },
    {
      num: '03',
      title: 'Согласуем стратегию',
      desc: 'Определяем цель, допустимые уступки, досудебные действия, требования или линию защиты.'
    },
    {
      num: '04',
      title: 'Готовим и направляем документы',
      desc: 'Составляем претензию, ответ, иск, отзыв, ходатайства, соглашение или иные документы согласованного этапа.'
    },
    {
      num: '05',
      title: 'Ведём переговоры или дело',
      desc: 'Представляем позицию компании, реагируем на доводы и новые доказательства в пределах поручения.'
    },
    {
      num: '06',
      title: 'Фиксируем результат и следующий шаг',
      desc: 'Объясняем последствия соглашения или судебного акта и отдельно согласуем обжалование либо исполнение.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Оценка позиции',
      price: 'ХХХ ₽',
      subtitle: 'Анализ согласованного комплекта; консультация или заключение; возможные сценарии и следующий шаг.',
      buttonText: 'Оценить спор',
      buttonHref: '#contact-form',
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
      buttonHref: '#contact-form',
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
      buttonHref: '#contact-form',
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
      buttonHref: '#contact-form',
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
      desc: 'Вернуться на общий хаб договорного права для оценки общей задачи компании.',
      link: '/biznesu/dogovornoe-pravo/'
    },
    {
      title: 'Проверить или переработать договор',
      desc: 'Конфликта ещё нет либо после урегулирования спора нужно обновить текст и исключить риски.',
      link: '/biznesu/dogovornoe-pravo/razrabotka-i-ekspertiza-dogovorov/'
    },
    {
      title: 'Аудит договорной системы',
      desc: 'Спор показал повторяющиеся системные дефекты шаблонов или внутреннего процесса компании.',
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
        superTitle="Договорное право • Для бизнеса"
        title="Юрист по договорным спорам для бизнеса"
        subtitle="Оценим договор, исполнение и доказательства, подготовим претензию или защиту и представим интересы компании в переговорах и арбитражном суде."
        trustItems={[
          { text: 'Работаем на стороне заявителя и ответчика' },
          { text: 'Сначала оцениваем требования, риски и доказательства' },
          { text: 'Согласуем стратегию, объём и стоимость до начала работы' }
        ]}
        primaryCtaText="Обсудить спор"
        primaryCtaLink="#contact-form"
        primaryCtaSubtext="Перезвоним в течение 15 минут в рабочее время"
        secondaryCtaText="Как можем помочь"
        secondaryCtaLink="#dispute-stage"
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
                Изучаем договор вместе с перепиской и документами исполнения.
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ color: 'var(--color-gold)', fontSize: '20px', lineHeight: 1 }}>✓</div>
              <div style={{ fontSize: '15px', color: 'var(--color-deep-blue)', fontWeight: 500, lineHeight: 1.5 }}>
                Сравниваем досудебный, судебный и переговорный сценарии.
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ color: 'var(--color-gold)', fontSize: '20px', lineHeight: 1 }}>✓</div>
              <div style={{ fontSize: '15px', color: 'var(--color-deep-blue)', fontWeight: 500, lineHeight: 1.5 }}>
                Не обещаем результат до оценки позиции и доказательств.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. С КАКИМИ СИТУАЦИЯМИ РАБОТАЕМ ═══ */}
      <section style={{ backgroundColor: 'var(--color-white)', padding: '64px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 44px' }}>
            <h2 style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              Помощь в договорном споре на стороне вашей компании
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Одинаковая формулировка договора может по-разному работать в зависимости от переписки, фактического исполнения и поведения сторон. Поэтому сначала восстанавливаем всю картину отношений.
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
                  Оценить перспективы →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. УНИКАЛЬНЫЙ БЛОК: ЧТО ПРОВЕРИТ ЮРИСТ ═══ */}
      <section id="position-review" style={{ backgroundColor: 'var(--color-bg-light)', padding: '64px 0', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 44px' }}>
            <h2 style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              Что проверяем до выбора стратегии
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Сильная позиция строится не вокруг одного пункта договора. Важно сопоставить условия, исполнение, документы, сроки и возможные встречные требования.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px'
          }}>
            {positionReview.map((item, idx) => (
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
                  {item.title}
                </h3>
                <div style={{ marginBottom: '10px', fontSize: '14px', color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>
                  <strong>Что проверяем:</strong> {item.what}
                </div>
                <div style={{ fontSize: '13.5px', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                  <strong>Зачем:</strong> {item.why}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. ПОМОЩЬ НА РАЗНЫХ СТАДИЯХ ═══ */}
      <section id="dispute-stage" style={{ backgroundColor: 'var(--color-white)', padding: '64px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 44px' }}>
            <h2 style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              Подключимся на нужной стадии спора
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Объём работы зависит от того, только ли возникли разногласия, направлена ли претензия или дело уже рассматривается судом.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {stages.map((stg, idx) => (
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
                    {stg.title}
                  </h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '18px' }}>
                    {stg.desc}
                  </p>
                  <div style={{ background: 'var(--color-white)', padding: '12px 14px', borderLeft: '3px solid var(--color-gold)', marginBottom: '24px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Результат этапа:</span>
                    <span style={{ fontSize: '13.5px', color: 'var(--color-text-muted)' }}>{stg.result}</span>
                  </div>
                </div>

                <a
                  href="#contact-form"
                  onClick={() => setActiveContext(stg.context)}
                  className="btn btn-gold"
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
      <section style={{ backgroundColor: 'var(--color-bg-light)', padding: '64px 0', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{
            background: 'var(--color-white)',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid #b91c1c',
            padding: '40px 36px',
            maxWidth: '920px',
            margin: '0 auto'
          }}>
            <h2 style={{ fontSize: '26px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              Не потеряйте документы и сроки
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
              До оценки позиции важно сохранить материалы и не создавать новые риски необдуманным ответом. Это не заменяет индивидуальную юридическую консультацию:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {preserveRules.map((rule, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ color: '#b91c1c', fontSize: '18px', lineHeight: 1, marginTop: '2px' }}>!</div>
                  <div style={{ fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>
                    {rule}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '24px', paddingTop: '18px', borderTop: '1px solid var(--color-border)', fontSize: '13.5px', color: 'var(--color-text-muted)' }}>
              Зафиксируйте дату получения любого официального документа и срочно передайте юристу для подготовки процессуального ответа в рабочее время.
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 6. ЧТО ПОТРЕБУЕТСЯ ЮРИСТУ ═══ */}
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
              Что потребуется юристу
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
              Для первого разговора достаточно описать стороны, предмет конфликта, сумму требований, текущую стадию и ближайший срок. После этого согласуем комплект документов:
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
          </div>
        </div>
      </section>

      {/* ═══ 7. КАК СТРОИМ РАБОТУ ПО ДОГОВОРНОМУ СПОРУ ═══ */}
      <section style={{ backgroundColor: 'var(--color-bg-light)', padding: '64px 0', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 44px' }}>
            <h2 style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              Как строим работу по договорному спору
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Состав этапов зависит от позиции компании и стадии дела. До начала фиксируем задачу, границы представительства и формат результата.
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
        </div>
      </section>

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
      <section style={{ backgroundColor: 'var(--color-bg-light)', padding: '64px 0', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 40px' }}>
            <h2 style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
              Связанные услуги
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Если требуется обновить договор после спора или задача охватывает другие сферы бизнеса.
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
                Работаем в Липецке и ведём дела дистанционно
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>
                Принимаем в офисе по адресу: г. Липецк, ул. Советская, д. 35, офис 213. Документы можно передать электронно согласованным способом, консультации провести по видеосвязи, а участие в заседаниях организовать с учётом суда и стадии дела.
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
        subtitle="Ответы на вопросы по претензиям, судебным искам, снижению неустойки и защите ответчика."
        faqs={faqs}
      />

      {/* ═══ 13. ФИНАЛЬНАЯ ФОРМА ═══ */}
      <section id="contact-form" style={{ backgroundColor: 'var(--color-bg-light)', padding: '64px 0', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 36px' }}>
            <h2 style={{ fontSize: '30px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '12px' }}>
              Обсудите договорный спор с юристом
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Кратко укажите, что произошло, на чьей стороне вы выступаете, получена ли претензия или иск и какой ближайший срок известен. Мы уточним задачу и предложим формат оценки.
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
              Не указывайте в форме коммерческую тайну, реквизиты, персональные данные и содержание конфиденциальной переписки. Документы можно передать после согласования безопасного способа связи.
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
