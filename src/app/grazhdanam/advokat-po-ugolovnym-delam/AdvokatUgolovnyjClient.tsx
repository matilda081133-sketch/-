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

export default function AdvokatUgolovnyjClient() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Главная",
            "item": "https://dejure-help.ru/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Гражданам",
            "item": "https://dejure-help.ru/grazhdanam/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Адвокат по уголовным делам",
            "item": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Адвокат по уголовным делам в Липецке",
        "description": "Помощь адвоката по уголовным делам в Липецке: проверка, задержание, обыск, допрос, следствие, суд, обжалование, УДО и защита потерпевших.",
        "url": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Липецк и Липецкая область"
        },
        "provider": {
          "@type": "LegalService",
          "name": "Юридическая компания «Де-Юре»",
          "url": "https://dejure-help.ru",
          "telephone": "+7-910-350-31-11",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "ул. Советская, д. 35, оф. 213",
            "addressLocality": "Липецк",
            "addressCountry": "RU"
          }
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Когда нужно обращаться к адвокату по уголовным делам?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Чем раньше становится известно о вызове, опросе, проверке, обыске или задержании, тем больше возможностей сохранить права и выстроить последовательную позицию. Обратиться можно и на стадии суда или после приговора, но доступный объём процессуальных инструментов будет иным."
            }
          },
          {
            "@type": "Question",
            "name": "Можно ли пригласить своего адвоката, если уже назначен защитник по назначению?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Да. Подозреваемый, обвиняемый или его родственники (с согласия подзащитного) имеют безусловное право в любой момент пригласить выбранного адвоката по соглашению. Назначенный защитник освобождается от участия после вступления адвоката по соглашению."
            }
          },
          {
            "@type": "Question",
            "name": "Может ли родственник заключить соглашение и нанять адвоката для задержанного?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Да. Родственники вправе заключить соглашение в пользу задержанного лица. Адвокат прибывает к подзащитному, получает его письменное согласие на защиту и вступает в дело по ордеру."
            }
          },
          {
            "@type": "Question",
            "name": "Нужен ли адвокат свидетелю?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Свидетель имеет законное право явиться на допрос с адвокатом (ч. 5 ст. 189 УПК РФ). Это критически важно, если вопросы следователя касаются личных действий свидетеля и существует риск перевода в статус подозреваемого."
            }
          },
          {
            "@type": "Question",
            "name": "Что делать, если человека задержали?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Выясните точное наименование следственного органа или отдела полиции, фамилию следователя и статью. Попросите задержанного воспользоваться правом на один телефонный звонок и не давать показаний без выбранного защитника на основании ст. 51 Конституции РФ."
            }
          },
          {
            "@type": "Question",
            "name": "Можно ли изменить позицию, если первичные показания уже даны?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Да, давать показания и уточнять их — процессуальное право. Однако кардинальное изменение показаний требует веского фактического обоснования и анализа условий, в которых давались прежние объяснения."
            }
          },
          {
            "@type": "Question",
            "name": "Гарантируете ли вы прекращение дела или оправдательный приговор?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Закон об адвокатской деятельности и Кодекс профессиональной этики адвоката прямо запрещают гарантировать конкретный результат по уголовному делу. Мы гарантируем профессиональный анализ, добросовестную защиту и максимальное использование всех законных средств."
            }
          },
          {
            "@type": "Question",
            "name": "Чем УДО отличается от обжалования приговора?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Обжалование (апелляция, кассация) направлено на пересмотр выводов суда и отмену или смягчение приговора. УДО не пересматривает виновность, а решает вопрос об освобождении от дальнейшего отбывания наказания на основании примерного поведения, возмещения ущерба и отбытия установленной законом части срока."
            }
          }
        ]
      }
    ]
  };

  const situations = [
    {
      title: 'Вызывают для объяснений или на допрос',
      desc: 'Уточним, в каком статусе вызывают, какие обстоятельства будут проверять и требуется ли участие адвоката до начала разговора.',
      link: '#form',
      actionText: 'Обсудить вызов'
    },
    {
      title: 'Человека задержали',
      desc: 'Поможем родственникам зафиксировать известные обстоятельства и организовать приглашение адвоката с согласия доверителя.',
      link: '/grazhdanam/advokat-po-ugolovnym-delam/advokat-pri-zaderzhanii-obyske-i-doprose/',
      actionText: 'Срочная помощь'
    },
    {
      title: 'Идёт или назначен обыск',
      desc: 'Оценим, кто и на каком основании проводит действие, подключим адвоката и поможем правильно фиксировать замечания.',
      link: '/grazhdanam/advokat-po-ugolovnym-delam/advokat-pri-zaderzhanii-obyske-i-doprose/',
      actionText: 'Защита при обыске'
    },
    {
      title: 'Проводится проверка',
      desc: 'Изучим запросы, объяснения и документы, оценим уголовно-правовые риски до принятия процессуального решения.',
      link: '#form',
      actionText: 'Оценить риски'
    },
    {
      title: 'Предъявили обвинение',
      desc: 'Проанализируем объём обвинения и доказательства, определим задачи защиты на предварительном расследовании.',
      link: '#services',
      actionText: 'Выбрать категорию'
    },
    {
      title: 'Дело передали в суд',
      desc: 'Изучим обвинительное заключение и материалы, подготовим позицию и участие адвоката в судебном разбирательстве.',
      link: '#services',
      actionText: 'Защита в суде'
    },
    {
      title: 'Приговор уже вынесен',
      desc: 'Проверим судебное решение, материалы и срок, определим апелляционный или кассационный маршрут.',
      link: '/grazhdanam/advokat-po-ugolovnym-delam/obzhalovanie-prigovora/',
      actionText: 'Обжаловать приговор'
    },
    {
      title: 'Нужна помощь потерпевшему',
      desc: 'Представим интересы при проверке, расследовании и в суде, поможем с жалобами и требованиями о возмещении вреда.',
      link: '/grazhdanam/advokat-po-ugolovnym-delam/zashchita-poterpevshego/',
      actionText: 'Помощь потерпевшему'
    }
  ];

  const statuses = [
    {
      role: 'Свидетель',
      help: 'Подготовка к допросу, участие адвоката, оценка риска вопросов о собственных действиях и предотвращение смены процессуального статуса.'
    },
    {
      role: 'Лицо под проверкой',
      help: 'Анализ сообщения о преступлении, запросов и объяснений; участие адвоката при действиях, затрагивающих права; подготовка правовой позиции.'
    },
    {
      role: 'Подозреваемый или обвиняемый',
      help: 'Защита с момента, предусмотренного УПК РФ: конфиденциальное общение, участие в следственных действиях, ходатайства, жалобы, анализ доказательств.'
    },
    {
      role: 'Подсудимый',
      help: 'Защита в суде первой инстанции: исследование доказательств, ходатайства, вопросы участникам, позиция в прениях и процессуальные документы.'
    },
    {
      role: 'Осуждённый',
      help: 'Обжалование приговора в апелляции/кассации либо подготовка материалов и ходатайства об условно-досрочном освобождении (УДО).'
    },
    {
      role: 'Потерпевший',
      help: 'Представительство на всех стадиях, участие в следственных действиях и суде, жалобы на решения и бездействие, гражданский иск и возмещение вреда.'
    },
    {
      role: 'Родственник',
      help: 'Передача исходных сведений и организация приглашения защитника по поручению или с согласия доверителя с соблюдением адвокатской тайны.'
    }
  ];

  const categories = [
    {
      title: 'Мошенничество',
      desc: 'Защита при обвинении в хищении путём обмана или злоупотребления доверием (ст. 159 УК РФ); анализ умысла, сделок, переписки и расчётов.',
      link: '/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-moshennichestvu/'
    },
    {
      title: 'Дела о наркотиках',
      desc: 'Защита по делам о хранении, приобретении, перевозке и сбыте (ст. 228, 228.1 УК РФ); проверка изъятия, веса, исследований и экспертиз.',
      link: '/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-delam-o-narkotikah/'
    },
    {
      title: 'Кражи, грабежи и разбои',
      desc: 'Анализ обстоятельств завладения имуществом (ст. 158, 161, 162 УК РФ), роли участников, показаний, видеозаписей и оценки ущерба.',
      link: '/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-krazham-grabezham-i-razboyam/'
    },
    {
      title: 'ДТП с пострадавшими',
      desc: 'Защита водителя и представительство потерпевших при уголовных последствиях аварий (ст. 264 УК РФ), автотехнических и судмедэкспертизах.',
      link: '/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-dtp-s-postradavshimi/'
    },
    {
      title: 'Экономические преступления',
      desc: 'Личная защита руководителей, предпринимателей и бухгалтеров; оценка сделок, отчётности, налоговых материалов и разграничение спора и преступления.',
      link: '/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-ekonomicheskim-prestupleniyam/'
    },
    {
      title: 'Должностные преступления и взятки',
      desc: 'Защита по делам о даче, получении и посредничестве во взяточничестве (ст. 290, 291 УК РФ), злоупотреблении и превышении полномочий.',
      link: '/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-dolzhnostnym-prestupleniyam-i-vzyatkam/'
    },
    {
      title: 'Задержание, обыск и допрос',
      desc: 'Срочное подключение адвоката в рабочее время, участие в неотложных процессуальных действиях и первичная фиксация нарушений.',
      link: '/grazhdanam/advokat-po-ugolovnym-delam/advokat-pri-zaderzhanii-obyske-i-doprose/'
    },
    {
      title: 'Условно-досрочное освобождение',
      desc: 'Оценка формальных сроков, поведения за весь период, взысканий и поощрений, возмещения вреда и подготовка ходатайства об УДО в суд.',
      link: '/grazhdanam/advokat-po-ugolovnym-delam/uslovno-dosrochnoe-osvobozhdenie/'
    },
    {
      title: 'Обжалование приговора',
      desc: 'Анализ приговора, протокола и материалов дела, подготовка апелляционной или кассационной жалобы и защита в вышестоящих судах.',
      link: '/grazhdanam/advokat-po-ugolovnym-delam/obzhalovanie-prigovora/'
    },
    {
      title: 'Защита прав потерпевшего',
      desc: 'Представительство на проверке, следствии и в суде; подача ходатайств, обжалование бездействия, подготовка гражданского иска.',
      link: '/grazhdanam/advokat-po-ugolovnym-delam/zashchita-poterpevshego/'
    }
  ];

  const stages = [
    {
      stage: 'Проверка сообщения',
      desc: 'Оценка запросов и объяснений, изучение документов, участие в действиях, затрагивающих права, подготовка мотивированных заявлений.'
    },
    {
      stage: 'Задержание и мера пресечения',
      desc: 'Организация участия адвоката, конфиденциальная беседа, проверка протоколов, защита в судебном заседании по избранию меры пресечения.'
    },
    {
      stage: 'Предварительное расследование',
      desc: 'Изучение доступных материалов, участие в следственных действиях, привлечение экспертов, заявление ходатайств и сбор доказательств защиты.'
    },
    {
      stage: 'Суд первой инстанции',
      desc: 'Анализ обвинения и доказательств, допрос свидетелей и экспертов, участие в исследовании материалов дела, выступление в прениях сторон.'
    },
    {
      stage: 'Апелляция и кассация',
      desc: 'Аудит судебных актов и протокола заседания, выявление существенных нарушений закона, составление жалобы и участие в вышестоящих инстанциях.'
    },
    {
      stage: 'Исполнение приговора',
      desc: 'Оценка оснований для УДО, замена наказания более мягким, сбор подтверждающих документов и представительство в суде по месту отбывания.'
    }
  ];

  const casesData: CaseData[] = [
    {
      title: 'Отказ в возбуждении уголовного дела по заявлению о мошенничестве',
      category: 'Мошенничество (ст. 159 УК РФ)',
      problem: 'Контрагент заявил, что клиент получил оплату и умышленно не собирался исполнять договор поставки, потребовав возбуждения дела.',
      action: 'Разобрали цепочку платежей, закупку сырья и переписку. Подготовили мотивированные объяснения и доказали хозяйственный характер неисполнения.',
      result: 'Вынесено постановление об отказе в возбуждении уголовного дела. Спор переведён в плоскость гражданского арбитражного процесса.'
    },
    {
      title: 'Исключение части эпизодов хищения из объёма обвинения',
      category: 'Экономические преступления',
      problem: 'Клиенту вменили несколько эпизодов хищения на основании противоречивых свидетельских показаний и неполных бухгалтерских справок.',
      action: 'Провели независимый аудит первичных документов по каждому эпизоду, сопоставили даты выписок и заявили ходатайство о недопустимости части доказательств.',
      result: 'Следствие исключило недоказанные эпизоды, что снизило категорию тяжести обвинения и позволило избрать меру пресечения, не связанную с изоляцией.'
    },
    {
      title: 'Возобновление проверки по заявлению потерпевшего о краже',
      category: 'Защита прав потерпевшего',
      problem: 'Потерпевший передал доказательства хищения оборудования, но полиция вынесла формальный отказ без опроса ключевых свидетелей.',
      action: 'Изучили отказной материал, выявили непроверенные транзакции и видеозаписи, подготовили жалобу в прокуратуру с конкретными следственными вопросами.',
      result: 'Незаконный отказ отменён прокурором, материал возвращён на дополнительную проверку для установления виновных лиц и размера ущерба.'
    }
  ];

  const processSteps: ProcessStep[] = [
    {
      num: '01',
      title: 'Проверка ситуации и конфликта интересов',
      desc: 'Уточняем процессуальный статус, стадию, срочность, место проведения действий и исключаем конфликт интересов до передачи чувствительных сведений.'
    },
    {
      num: '02',
      title: 'Сбор первичной картины и срочные меры',
      desc: 'Фиксируем обстоятельства, проверяем имеющиеся копии процессуальных актов, определяем неотложные действия и процессуальные сроки.'
    },
    {
      num: '03',
      title: 'Правовой анализ и разработка стратегии',
      desc: 'Аркадий Бобкин и профильный адвокат анализируют доказательства с учётом следственной практики и формируют единую линию защиты.'
    },
    {
      num: '04',
      title: 'Вступление адвоката и выполнение поручения',
      desc: 'Адвокат вступает в уголовное дело по ордеру, участвует в следственных или судебных действиях, подаёт мотивированные ходатайства и жалобы.'
    },
    {
      num: '05',
      title: 'Информирование и контроль результатов',
      desc: 'Согласовываем каждый шаг с доверителем, оперативно передаём копии полученных документов и контролируем исполнение решений.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Первичный анализ и консультация',
      subtitle: 'Оценка статуса и документов',
      price: 'от 5 000 ₽',
      popular: false,
      features: [
        { name: 'правовая оценка текущей ситуации', value: 'Да' },
        { name: 'анализ врученных повесток и запросов', value: 'Да' },
        { name: 'определение рисков и плана первых действий', value: 'Да' }
      ],
      buttonText: 'Уточнить стоимость',
      buttonHref: '#form'
    },
    {
      title: 'Участие в следственном действии',
      subtitle: 'Допрос, обыск, выемка, мера пресечения',
      price: 'от 15 000 ₽',
      popular: true,
      badgeText: 'Востребовано',
      features: [
        { name: 'подготовка и конфиденциальная беседа', value: 'Да' },
        { name: 'личное участие адвоката в действии', value: 'Да' },
        { name: 'внесение замечаний в протокол и фиксация', value: 'Да' },
        { name: 'подготовка первоочередных ходатайств', value: 'Да' }
      ],
      buttonText: 'Уточнить стоимость',
      buttonHref: '#form'
    },
    {
      title: 'Комплексная защита на стадии',
      subtitle: 'Следствие, суд, апелляция, УДО',
      price: 'от 45 000 ₽',
      popular: false,
      features: [
        { name: 'полное сопровождение стадии под ключ', value: 'Да' },
        { name: 'участие во всех процессуальных действиях', value: 'Да' },
        { name: 'сбор доказательств, привлечение специалистов', value: 'Да' },
        { name: 'подготовка жалоб, ходатайств и позиции в прениях', value: 'Да' }
      ],
      buttonText: 'Уточнить стоимость',
      buttonHref: '#form'
    }
  ];

  const faqItems = [
    {
      q: 'Когда нужно обращаться к адвокату по уголовным делам?',
      a: 'Чем раньше становится известно о вызове, опросе, проверке, обыске или задержании, тем больше возможностей сохранить права и выстроить последовательную позицию. Обратиться можно и на стадии суда или после приговора, но доступный объём процессуальных инструментов будет иным.'
    },
    {
      q: 'Можно ли пригласить своего адвоката, если уже назначен защитник по назначению?',
      a: 'Да. Подозреваемый, обвиняемый или его родственники (с согласия подзащитного) имеют безусловное право в любой момент пригласить выбранного адвоката по соглашению. Назначенный защитник освобождается от участия после вступления адвоката по соглашению.'
    },
    {
      q: 'Может ли родственник заключить соглашение и нанять адвоката для задержанного?',
      a: 'Да. Родственники вправе заключить соглашение в пользу задержанного лица. Адвокат прибывает к подзащитному, получает его письменное согласие на защиту и вступает в дело по ордеру.'
    },
    {
      q: 'Нужен ли адвокат свидетелю?',
      a: 'Свидетель имеет законное право явиться на допрос с адвокатом (ч. 5 ст. 189 УПК РФ). Это критически важно, если вопросы следователя касаются личных действий свидетеля и существует риск перевода в статус подозреваемого.'
    },
    {
      q: 'Что делать, если человека задержали?',
      a: 'Выясните точное наименование следственного органа или отдела полиции, фамилию следователя и статью. Попросите задержанного воспользоваться правом на один телефонный звонок и не давать показаний без выбранного защитника на основании ст. 51 Конституции РФ.'
    },
    {
      q: 'Можно ли изменить позицию, если первичные показания уже даны?',
      a: 'Да, давать показания и уточнять их — процессуальное право. Однако кардинальное изменение показаний требует веского фактического обоснования и анализа условий, в которых давались прежние объяснения.'
    },
    {
      q: 'Гарантируете ли вы прекращение дела или оправдательный приговор?',
      a: 'Закон об адвокатской деятельности и Кодекс профессиональной этики адвоката прямо запрещают гарантировать конкретный результат по уголовному делу. Мы гарантируем профессиональный анализ, добросовестную защиту и максимальное использование всех законных средств.'
    },
    {
      q: 'Чем УДО отличается от обжалования приговора?',
      a: 'Обжалование (апелляция, кассация) направлено на пересмотр выводов суда и отмену или смягчение приговора. УДО не пересматривает виновность, а решает вопрос об освобождении от дальнейшего отбывания наказания на основании примерного поведения, возмещения ущерба и отбытия установленной законом части срока.'
    }
  ];

  return (
    <div style={{ backgroundColor: 'var(--color-cream)', minHeight: '100vh' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main id="main-content">
        {/* 1. Хлебные крошки и Hero */}
        <MilitaryHero
          breadcrumbs={
            <>
              <Link href="/">Главная</Link><span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
              <Link href="/grazhdanam/">Гражданам</Link><span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
              <span style={{ color: 'var(--color-text-main)' }}>Адвокат по уголовным делам</span>
            </>
          }
          superTitle="Уголовное право • Защита граждан"
          title={
            <span style={{ display: 'block' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                Адвокат по уголовным делам
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                защита и представительство
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
                в Липецке
              </span>
            </span>
          }
          subtitle="Подключаемся на стадии проверки, задержания, следствия и суда, представляем интересы потерпевших и оцениваем возможности обжалования. Связь в рабочее время: Пн–Пт с 09:00 до 18:00."
          primaryCtaText="Обсудить ситуацию"
          primaryCtaLink="#form"
          primaryCtaSubtext={
            <span style={{ display: 'block' }}>
              <span style={{ whiteSpace: 'nowrap' }}>Перезвоним вам в течение 15 минут в рабочее время</span>
            </span>
          }
          trustItems={[
            { text: 'Определим срочность, процессуальный статус и ближайшие риски' },
            { text: 'Изучим материалы и сформируем согласованную стратегию защиты' },
            { text: 'Подберём адвоката с профильным следственным и судебным опытом' }
          ]}
          imageUrl="/images/bobkin.jpg"
          imageName="Аркадий Евгеньевич Бобкин"
          imageSubtitle="Куратор практики • Директор, управляющий партнёр ЮК «Де-Юре», более 22 лет следственного опыта"
        />

        {/* 2. Что происходит сейчас — ситуационный навигатор */}
        <section className="section bg-white" style={{ padding: '80px 0', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ textAlign: 'left', marginBottom: '40px', maxWidth: '820px' }}>
              <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--color-deep-blue)', marginBottom: '14px', marginTop: 0, lineHeight: 1.2 }}>
                <span style={{ display: 'inline-block' }}>Выберите ситуацию —</span> <br />
                <span style={{ display: 'inline-block' }}>подскажем правильный порядок</span> <br />
                <span style={{ display: 'inline-block' }}>дальнейших действий</span>
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Необязательно знать статью УК РФ и точное процессуальное название процедуры. Ориентируйтесь на то, что происходит прямо сейчас.
              </p>
            </div>

            <div className="grid grid-4" style={{ gap: '20px' }}>
              {situations.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--color-cream)',
                    border: '1px solid var(--color-border)',
                    borderTop: '3px solid var(--color-gold)',
                    padding: '24px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 12px rgba(16, 39, 59, 0.03)'
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--color-deep-blue)', margin: '0 0 10px 0', lineHeight: 1.35 }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: '0 0 18px 0' }}>
                      {item.desc}
                    </p>
                  </div>
                  <Link
                    href={item.link}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '13.5px',
                      fontWeight: 600,
                      color: 'var(--color-primary)',
                      textDecoration: 'none'
                    }}
                  >
                    {item.actionText} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. В каком статусе нужна помощь — ролевой навигатор */}
        <section className="section" style={{ backgroundColor: 'var(--color-cream)', padding: '80px 0' }}>
          <div className="container">
            <div style={{ textAlign: 'left', marginBottom: '40px', maxWidth: '820px' }}>
              <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--color-deep-blue)', marginBottom: '14px', marginTop: 0, lineHeight: 1.2 }}>
                <span style={{ display: 'inline-block' }}>Помощь зависит</span> <br />
                <span style={{ display: 'inline-block' }}>не только от статьи,</span> <br />
                <span style={{ display: 'inline-block' }}>но и от Вашего статуса</span>
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Объём прав и рисков существенно различается на каждом этапе. Адвокат выстраивает работу строго с учётом вашего процессуального положения.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '22px' }}>
              {statuses.map((st, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--color-border)',
                    padding: '24px 22px',
                    boxShadow: '0 4px 12px rgba(16, 39, 59, 0.04)'
                  }}
                >
                  <div style={{ display: 'inline-block', backgroundColor: 'rgba(23, 55, 94, 0.08)', color: 'var(--color-deep-blue)', padding: '4px 10px', fontSize: '12.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
                    {st.role}
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {st.help}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Памятка безопасности — что сделать до консультации */}
        <section className="section bg-white" style={{ padding: '70px 0', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{
              backgroundColor: 'var(--color-deep-blue)',
              color: '#FFFFFF',
              padding: '40px 36px',
              borderTop: '3px solid var(--color-gold)',
              boxShadow: '0 10px 30px rgba(16, 39, 59, 0.15)'
            }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 3.2vw, 32px)', color: '#FFFFFF', margin: '0 0 16px 0', lineHeight: 1.3 }}>
                Первые действия, которые помогут не усложнить ситуацию:
              </h2>
              <div className="grid grid-2" style={{ gap: '24px', marginTop: '24px' }}>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <span style={{ color: 'var(--color-gold)', fontSize: '18px', fontWeight: 'bold' }}>•</span>
                  <span style={{ fontSize: '14.5px', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)' }}>
                    <strong>Уточните основания:</strong> кто проводит действие, в каком статусе вызывают или задержали, адрес подразделения и данные следователя.
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <span style={{ color: 'var(--color-gold)', fontSize: '18px', fontWeight: 'bold' }}>•</span>
                  <span style={{ fontSize: '14.5px', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)' }}>
                    <strong>Сообщите близким:</strong> передайте контакты отдела и должностного лица, если это разрешено и возможно.
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <span style={{ color: 'var(--color-gold)', fontSize: '18px', fontWeight: 'bold' }}>•</span>
                  <span style={{ fontSize: '14.5px', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)' }}>
                    <strong>Требуйте адвоката:</strong> заявите ходатайство об участии выбранного адвоката до начала первого допроса или следственного действия.
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <span style={{ color: 'var(--color-gold)', fontSize: '18px', fontWeight: 'bold' }}>•</span>
                  <span style={{ fontSize: '14.5px', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)' }}>
                    <strong>Внимательно читайте протокол:</strong> если текст не совпадает со сказанным, вносите замечания собственноручно перед подписью.
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <span style={{ color: 'var(--color-gold)', fontSize: '18px', fontWeight: 'bold' }}>•</span>
                  <span style={{ fontSize: '14.5px', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)' }}>
                    <strong>Сохраняйте документы:</strong> повестки, постановления, протоколы, чеки и переписку. Не удаляйте файлы и переписки.
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <span style={{ color: 'var(--color-gold)', fontSize: '18px', fontWeight: 'bold' }}>•</span>
                  <span style={{ fontSize: '14.5px', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)' }}>
                    <strong>Не согласовывайте версии:</strong> не пытайтесь договариваться с другими участниками или скрывать информацию до консультации.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Категории уголовных дел — 10 дочерних услуг */}
        <section id="services" className="section" style={{ backgroundColor: 'var(--color-cream)', padding: '80px 0' }}>
          <div className="container">
            <div style={{ textAlign: 'left', marginBottom: '40px', maxWidth: '820px' }}>
              <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--color-deep-blue)', marginBottom: '14px', marginTop: 0, lineHeight: 1.2 }}>
                <span style={{ display: 'inline-block' }}>По каким уголовным делам</span> <br />
                <span style={{ display: 'inline-block' }}>мы осуществляем</span> <br />
                <span style={{ display: 'inline-block' }}>защиту и помощь</span>
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Выберите подходящее направление. Если статья меняется или квалификация не ясна, опишите ситуацию — мы определим маршрут после правового анализа.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '24px' }}>
              {categories.map((cat, idx) => (
                <Link
                  key={idx}
                  href={cat.link}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid var(--color-border)',
                    padding: '28px 24px',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 16px rgba(16, 39, 59, 0.05)',
                    transition: 'transform 0.2s ease, border-color 0.2s ease'
                  }}
                  className="hover-card"
                >
                  <div>
                    <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 12px 0', lineHeight: 1.35 }}>
                      {cat.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: '0 0 18px 0' }}>
                      {cat.desc}
                    </p>
                  </div>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    Подробнее об услуге →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Помощь на разных стадиях */}
        <section className="section bg-white" style={{ padding: '80px 0', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ textAlign: 'left', marginBottom: '40px', maxWidth: '820px' }}>
              <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--color-deep-blue)', marginBottom: '14px', marginTop: 0, lineHeight: 1.2 }}>
                <span style={{ display: 'inline-block' }}>Подключаемся на любой стадии —</span> <br />
                <span style={{ display: 'inline-block' }}>задачи на каждом этапе</span> <br />
                <span style={{ display: 'inline-block' }}>существенно различаются</span>
              </h2>
            </div>

            <div className="grid grid-3" style={{ gap: '22px' }}>
              {stages.map((stg, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--color-cream)',
                    border: '1px solid var(--color-border)',
                    borderLeft: '4px solid var(--color-deep-blue)',
                    padding: '24px 20px'
                  }}
                >
                  <h3 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>
                    {stg.stage}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    {stg.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Куратор направления */}
        <SpecialistBlock
          title={
            <>
              <span style={{ display: 'block' }}>Стратегию определяет специалист</span>{' '}
              <span style={{ display: 'block' }}>с 22-летним следственным опытом</span>
            </>
          }
          name="Бобкин Аркадий Евгеньевич"
          position={<>Директор, управляющий партнёр ЮК «Де-Юре»,<br />куратор практики уголовного права</>}
          imageUrl="/images/bobkin.jpg"
          imagePosition="50% -75px"
          profileHref="/specialisty/bobkin-arkadiy-evgenevich/"
          profileText="Подробнее об Аркадии Евгеньевиче Бобкине →"
          description={[
            <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block', lineHeight: 1.6 }}>
              Юрист с 1997 года. Более 22 лет работал в следственных подразделениях налоговой полиции и МВД, в том числе следователем по особо важным делам и руководителем Следственной части по расследованию организованной преступной деятельности. Анализирует сложные ситуации с учётом внутренней логики расследования, заранее выявляет процессуальные уязвимости следствия и определяет генеральную стратегию защиты.
            </span>,
            <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
                <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
                <span>Анализ материалов доследственных проверок и уголовных дел</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
                <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
                <span>Оценка уголовно-правовых и процессуальных рисков доверителя</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
                <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
                <span>Участие в разработке тактики, доказательственной базы и позиции</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
                <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
                <span>Координация работы адвокатов и привлечённых судебных экспертов</span>
              </li>
            </ul>
          ]}
          buttonText="Обсудить ситуацию с куратором"
          buttonHref="#form"
        />

        {/* 8. Адвокаты, осуществляющие защиту */}
        <section className="section bg-white" style={{ padding: '60px 0 80px 0', borderTop: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ textAlign: 'left', marginBottom: '36px', maxWidth: '820px' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 3.2vw, 32px)', color: 'var(--color-deep-blue)', margin: '0 0 12px 0' }}>
                Адвокаты Коллегии адвокатов «Де-Юре», осуществляющие защиту:
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                Непосредственную защиту подозреваемых и обвиняемых в следственных действиях и суде осуществляют адвокаты Коллегии адвокатов «Де-Юре» с подтверждённым статусом и следственным опытом:
              </p>
            </div>

            <div className="grid grid-2" style={{ gap: '28px' }}>
              {/* Конопкин Д.С. */}
              <div style={{ backgroundColor: 'var(--color-cream)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-gold)', padding: '28px' }}>
                <h4 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>
                  Конопкин Дмитрий Сергеевич
                </h4>
                <div style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '14px' }}>
                  Адвокат, председатель Коллегии адвокатов «Де-Юре»
                </div>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: '0 0 18px 0' }}>
                  Шесть лет работал в Следственном комитете РФ, в том числе старшим следователем по особо важным делам. Осуществляет непосредственную защиту по уголовным делам и представляет интересы потерпевших на следствии и в судах.
                </p>
                <Link href="/specialisty/konopkin-dmitriy-sergeevich/" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)', textDecoration: 'none' }}>
                  Подробнее об адвокате →
                </Link>
              </div>

              {/* Гусев О.Ю. */}
              <div style={{ backgroundColor: 'var(--color-cream)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-gold)', padding: '28px' }}>
                <h4 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>
                  Гусев Олег Юрьевич
                </h4>
                <div style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '14px' }}>
                  Адвокат, управляющий партнёр Коллегии адвокатов «Де-Юре»
                </div>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: '0 0 18px 0' }}>
                  Юридическая практика с 1995 года, статус адвоката с 2015 года. Семь лет работал заместителем прокурора района. Специализируется на защите по сложным общеуголовным и экономическим делам, апелляционном обжаловании.
                </p>
                <Link href="/specialisty/gusev-oleg-yurevich/" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)', textDecoration: 'none' }}>
                  Подробнее об адвокате →
                </Link>
              </div>
            </div>

            <p style={{ fontSize: '13.5px', color: 'var(--color-text-muted)', marginTop: '24px', lineHeight: 1.5, textAlign: 'center' }}>
              * Конкретный адвокат и состав команды определяются после проверки конфликта интересов, стадии, категории и объёма материалов дела.
            </p>
          </div>
        </section>

        {/* 9. Кейсы из практики */}
        <CasesBlock
          title={
            <>
              <span style={{ display: 'block' }}>Примеры дел</span>{' '}
              <span style={{ display: 'block' }}>из практики защиты</span>
            </>
          }
          cases={casesData}
        />

        {/* 10. Процесс работы команды */}
        <ProcessBlock
          title={
            <>
              <span style={{ display: 'block' }}>Как строится работа</span>{' '}
              <span style={{ display: 'block' }}>по уголовному делу</span>
            </>
          }
          subtitle="Прозрачный и последовательный процесс от проверки конфликта интересов до защиты в судебных заседаниях"
          steps={processSteps}
        />

        {/* 11. Стоимость услуг */}
        <PricingBlock
          title="Стоимость услуг адвоката по уголовным делам"
          subtitle="Стоимость зависит от стадии, объёма материалов, количества эпизодов и участников, срочности и необходимого состава команды. Точные условия фиксируются в соглашении."
          tiers={pricingTiers}
          disclaimer="Точная стоимость и состав работы закрепляются в соглашении. Дополнительные расходы на эксперта, специалиста, командировку, копирование материалов и иные действия заранее согласовываются отдельно, если они необходимы."
        />

        {/* 12. Материалы для анализа и Конфиденциальность */}
        <section className="section bg-white" style={{ padding: '70px 0', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <div className="grid grid-2" style={{ gap: '36px' }}>
              {/* Документы */}
              <div style={{ backgroundColor: 'var(--color-cream)', border: '1px solid var(--color-border)', padding: '36px 30px' }}>
                <h3 style={{ fontSize: '22px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 16px 0', lineHeight: 1.3 }}>
                  Что подготовить для первичного анализа:
                </h3>
                <ul style={{ margin: 0, paddingLeft: '18px', color: 'var(--color-text-secondary)', fontSize: '14.5px', lineHeight: 1.7 }}>
                  <li>повестку, запрос, уведомление или сообщение должностного лица;</li>
                  <li>протокол задержания, обыска, выемки, допроса или иного проведённого действия;</li>
                  <li>постановление о возбуждении дела, привлечении в качестве обвиняемого;</li>
                  <li>обвинительное заключение, обвинительный акт либо приговор суда;</li>
                  <li>договоры, платёжные документы, переписку, относящиеся к делу;</li>
                  <li>краткую хронологию событий и известных участников.</li>
                </ul>
                <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginTop: '18px', lineHeight: 1.5, margin: '18px 0 0 0' }}>
                  * Не отправляйте полный архив через открытую веб-форму. Сначала оставьте заявку — безопасный канал передачи согласуем отдельно.
                </p>
              </div>

              {/* Адвокатская тайна */}
              <div style={{ backgroundColor: 'var(--color-deep-blue)', color: '#FFFFFF', padding: '36px 30px', borderTop: '3px solid var(--color-gold)' }}>
                <h3 style={{ fontSize: '22px', fontFamily: 'var(--font-serif)', color: '#FFFFFF', margin: '0 0 16px 0', lineHeight: 1.3 }}>
                  Конфиденциальность и адвокатская тайна
                </h3>
                <p style={{ fontSize: '14.5px', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.65, margin: '0 0 16px 0' }}>
                  Любые сведения, связанные с оказанием правовой помощи, защищены законом об адвокатуре и режимом адвокатской тайны. Адвокат не может быть допрошен в качестве свидетеля об обстоятельствах, ставших ему известными в связи с обращением.
                </p>
                <p style={{ fontSize: '14.5px', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.65, margin: 0 }}>
                  Мы не передаём детали обращений сторонним сервисам веб-аналитики, а все документы принимаются исключительно по согласованным защищённым каналам связи.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 13. FAQ */}
        <FAQBlock
          superTitle="Частые вопросы"
          title={
            <>
              <span style={{ display: 'block' }}>Ответы на</span>{' '}
              <span style={{ display: 'block' }}>частые вопросы</span>
            </>
          }
          subtitle="О процессуальных правах, следственных действиях, сроках и порядке защиты"
          faqs={faqItems}
        />

        {/* 14. Финальная форма */}
        <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px', padding: '80px 0' }}>
          <div className="container">
            <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                  <img
                    src="/images/bobkin.jpg"
                    alt="Аркадий Евгеньевич Бобкин"
                    style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--color-gold)' }}
                  />
                  <div>
                    <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 4px 0' }}>
                      Бобкин Аркадий Евгеньевич
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0 }}>
                      Директор, управляющий партнёр ЮК «Де-Юре» • 22 года следственного опыта
                    </p>
                  </div>
                </div>

                <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0 }}>
                  <span style={{ display: 'block' }}>Обсудите уголовное дело</span>{' '}
                  <span style={{ display: 'block' }}>с Аркадием Бобкиным</span>
                </h2>
                <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                  Кратко укажите, что происходит: проверка, вызов, задержание, следствие, суд или вопрос потерпевшего. В рабочее время свяжемся с вами в течение 15 минут для правовой оценки.
                </p>

                <div style={{ marginTop: 'auto', backgroundColor: 'var(--color-cream)', padding: '20px', border: '1px solid var(--color-border)' }}>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-deep-blue)', marginBottom: '6px' }}>
                    Адрес офиса:
                  </div>
                  <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    Липецк, ул. Советская, д. 35, оф. 213 (приём по предварительной записи)
                  </div>
                </div>
              </div>

              <div>
                <ContactsForm
                  title=""
                  subtitle=""
                  buttonText="Отправить обращение"
                  hiddenFields={[{ name: 'page', value: '/grazhdanam/advokat-po-ugolovnym-delam/' }]}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
