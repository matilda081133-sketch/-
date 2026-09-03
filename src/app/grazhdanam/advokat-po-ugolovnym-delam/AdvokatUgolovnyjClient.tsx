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
  const situations = [
    {
      tag: 'Вызов / Опрос',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Вызывают для объяснений</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>или на допрос</span>
        </>
      ),
      desc: 'Уточним, в каком статусе вызывают, какие обстоятельства будут проверять и требуется ли участие адвоката до начала разговора.'
    },
    {
      tag: 'Срочно / ИВС',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Человека</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>задержали</span>
        </>
      ),
      desc: 'Поможем родственникам зафиксировать известные обстоятельства и организовать приглашение адвоката с согласия доверителя.'
    },
    {
      tag: 'Неотложное действие',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Идёт или назначен</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>обыск либо выемка</span>
        </>
      ),
      desc: 'Оценим, кто и на каком основании проводит действие, подключим адвоката и поможем правильно фиксировать замечания.'
    },
    {
      tag: 'Доследственная стадия',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Проводится проверка</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>сообщения</span>
        </>
      ),
      desc: 'Изучим запросы, объяснения и документы, оценим уголовно-правовые риски до принятия процессуального решения.'
    },
    {
      tag: 'Предварительное следствие',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Предъявили обвинение</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>или подозрение</span>
        </>
      ),
      desc: 'Проанализируем объём обвинения и доказательства, определим задачи защиты на предварительном расследовании.'
    },
    {
      tag: 'Судебный процесс',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Дело передали</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>в суд</span>
        </>
      ),
      desc: 'Изучим обвинительное заключение и материалы, подготовим позицию и участие адвоката в судебном разбирательстве.'
    },
    {
      tag: 'Апелляция / Кассация',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Приговор</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>уже вынесен</span>
        </>
      ),
      desc: 'Проверим судебное решение, материалы и срок, определим апелляционный или кассационный маршрут.'
    },
    {
      tag: 'Права потерпевшего',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Нужна помощь</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>потерпевшему</span>
        </>
      ),
      desc: 'Представим интересы при проверке, расследовании и в суде, поможем с жалобами и требованиями о возмещении вреда.'
    }
  ];

  const categories = [
    {
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Мошенничество</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>(ст. 159 УК РФ)</span>
        </>
      ),
      desc: 'Защита при обвинении в хищении путём обмана или злоупотребления доверием; анализ умысла, сделок, переписки и расчётов.',
      link: '/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-moshennichestvu/'
    },
    {
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Дела о наркотиках</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>(ст. 228, 228.1 УК РФ)</span>
        </>
      ),
      desc: 'Защита по делам о хранении, приобретении, перевозке и сбыте; проверка изъятия, веса, исследований и экспертиз.',
      link: '/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-delam-o-narkotikah/'
    },
    {
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Кражи, грабежи</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и разбои (ст. 158–162)</span>
        </>
      ),
      desc: 'Анализ обстоятельств завладения имуществом, роли участников, показаний, видеозаписей и оценки ущерба.',
      link: '/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-krazham-grabezham-i-razboyam/'
    },
    {
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>ДТП с пострадавшими</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>(ст. 264 УК РФ)</span>
        </>
      ),
      desc: 'Защита водителя и представительство потерпевших при уголовных последствиях аварий, автотехнических и судмедэкспертизах.',
      link: '/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-dtp-s-postradavshimi/'
    },
    {
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Экономические</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и налоговые дела</span>
        </>
      ),
      desc: 'Личная защита руководителей, предпринимателей и бухгалтеров; оценка сделок, отчётности и разграничение спора и преступления.',
      link: '/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-ekonomicheskim-prestupleniyam/'
    },
    {
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Должностные составы</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и взятки (ст. 290, 291)</span>
        </>
      ),
      desc: 'Защита по делам о даче, получении и посредничестве во взяточничестве (ст. 290, 291 УК РФ), превышении полномочий.',
      link: '/grazhdanam/advokat-po-ugolovnym-delam/advokat-po-dolzhnostnym-prestupleniyam-i-vzyatkam/'
    },
    {
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Задержание, обыск</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и допрос</span>
        </>
      ),
      desc: 'Срочное подключение адвоката в рабочее время, участие в неотложных процессуальных действиях и первичная фиксация нарушений.',
      link: '/grazhdanam/advokat-po-ugolovnym-delam/advokat-pri-zaderzhanii-obyske-i-doprose/'
    },
    {
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Условно-досрочное</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>освобождение (УДО)</span>
        </>
      ),
      desc: 'Оценка формальных сроков, поведения за весь период, взысканий и поощрений, возмещения вреда и подача ходатайства в суд.',
      link: '/grazhdanam/advokat-po-ugolovnym-delam/uslovno-dosrochnoe-osvobozhdenie/'
    },
    {
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Обжалование</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>приговора в суде</span>
        </>
      ),
      desc: 'Анализ приговора, протокола и материалов дела, подготовка апелляционной или кассационной жалобы и защита в вышестоящих судах.',
      link: '/grazhdanam/advokat-po-ugolovnym-delam/obzhalovanie-prigovora/'
    },
    {
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Защита прав</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>потерпевшего</span>
        </>
      ),
      desc: 'Представительство на проверке, следствии и в суде; подача ходатайств, обжалование бездействия, подготовка гражданского иска.',
      link: '/grazhdanam/advokat-po-ugolovnym-delam/zashchita-poterpevshego/'
    }
  ];

  const casesData: CaseData[] = [
    {
      category: 'Мошенничество (ст. 159 УК РФ)',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Отказ в возбуждении</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>уголовного дела</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>по заявлению о хищении</span>
        </>
      ),
      problem: 'Контрагент заявил, что клиент получил оплату и умышленно не собирался исполнять договор поставки, потребовав возбуждения дела.',
      action: 'Разобрали цепочку платежей, закупку сырья и переписку. Подготовили мотивированные объяснения и доказали хозяйственный характер неисполнения.',
      result: 'Вынесено постановление об отказе в возбуждении уголовного дела. Спор переведён в плоскость гражданского арбитражного процесса.'
    },
    {
      category: 'Экономические преступления',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Исключение части</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>эпизодов хищения</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>из объёма обвинения</span>
        </>
      ),
      problem: 'Клиенту вменили несколько эпизодов хищения на основании противоречивых свидетельских показаний и неполных бухгалтерских справок.',
      action: 'Провели независимый аудит первичных документов по каждому эпизоду, сопоставили даты выписок и заявили ходатайство о недопустимости части доказательств.',
      result: 'Следствие исключило недоказанные эпизоды, что снизило категорию тяжести обвинения и позволило избрать меру пресечения, не связанную с изоляцией.'
    },
    {
      category: 'Защита прав потерпевшего',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Возобновление проверки</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>по заявлению потерпевшего</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>о краже оборудования</span>
        </>
      ),
      problem: 'Потерпевший передал доказательства хищения оборудования, но полиция вынесла формальный отказ без опроса ключевых свидетелей.',
      action: 'Изучили отказной материал, выявили непроверенные транзакции и видеозаписи, подготовили жалобу в прокуратуру с конкретными следственными вопросами.',
      result: 'Незаконный отказ отменён прокурором, материал возвращён на дополнительную проверку для установления виновных лиц и размера ущерба.'
    }
  ];

  const steps: ProcessStep[] = [
    {
      num: '01',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Проверяем</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>ситуацию и статус</span>
        </>
      ),
      desc: 'Уточняем процессуальный статус, стадию, срочность, орган проверки и исключаем конфликт интересов до передачи конфиденциальных сведений.'
    },
    {
      num: '02',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Принимаем</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>неотложные меры</span>
        </>
      ),
      desc: 'Фиксируем обстоятельства, анализируем копии процессуальных актов, защищаем от давления и определяем срочные действия.'
    },
    {
      num: '03',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Формируем</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>стратегию защиты</span>
        </>
      ),
      desc: 'Аркадий Бобкин и профильный адвокат анализируют доказательства с учётом следственной практики и формируют единую правовую позицию.'
    },
    {
      num: '04',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Вступаем в дело</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и ведём защиту</span>
        </>
      ),
      desc: 'Адвокат вступает в уголовное дело по ордеру, участвует в следственных или судебных действиях, заявляет ходатайства и жалобы.'
    },
    {
      num: '05',
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Контролируем</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>результаты процесса</span>
        </>
      ),
      desc: 'Согласовываем каждый шаг с доверителем, оперативно передаём копии процессуальных документов и контролируем исполнение решений.'
    },
    {
      isBanner: true,
      title: 'Дистанционный формат',
      desc: 'Первичное обсуждение и передача копий документов могут пройти дистанционно. Защищённый канал связи согласуется после первичного контакта.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Первичный анализ</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>и консультация</span>
        </>
      ),
      subtitle: 'Оценка процессуального статуса, рисков и переданных документов',
      price: 'от 5 000 ₽',
      popular: false,
      features: [
        { name: 'правовая оценка текущей ситуации', value: 'Да' },
        { name: 'анализ врученных повесток и запросов', value: 'Да' },
        { name: 'определение рисков и плана первых действий', value: 'Да' }
      ],
      buttonText: 'Записаться',
      buttonHref: '#form'
    },
    {
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Участие в следственном</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>действии</span>
        </>
      ),
      subtitle: 'Допрос, опрос, обыск, выемка, мера пресечения',
      price: 'от 15 000 ₽',
      popular: true,
      badgeText: 'Востребовано',
      features: [
        { name: 'подготовка и конфиденциальная беседа', value: 'Да' },
        { name: 'личное участие адвоката в действии', value: 'Да' },
        { name: 'внесение замечаний в протокол и фиксация', value: 'Да' },
        { name: 'подготовка первоочередных ходатайств', value: 'Да' }
      ],
      buttonText: 'Пригласить адвоката',
      buttonHref: '#form'
    },
    {
      title: (
        <>
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Комплексная защита</span>{' '}
          <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>на стадии процесса</span>
        </>
      ),
      subtitle: 'Следствие, суд, апелляция, УДО «под ключ»',
      price: 'от 45 000 ₽',
      popular: false,
      features: [
        { name: 'полное сопровождение стадии под ключ', value: 'Да' },
        { name: 'участие во всех процессуальных действиях', value: 'Да' },
        { name: 'сбор доказательств, привлечение экспертов', value: 'Да' },
        { name: 'подготовка жалоб, ходатайств и позиции', value: 'Да' }
      ],
      buttonText: 'Обсудить защиту',
      buttonHref: '#form'
    }
  ];

  const faqs = [
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        "@id": "https://dejure-help.ru/#organization",
        "name": "ЮК «Де-Юре»",
        "url": "https://dejure-help.ru",
        "logo": "https://dejure-help.ru/images/logo_dark.png",
        "telephone": "+7 (910) 350-31-11",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "ул. Советская, д. 35, оф. 213",
          "addressLocality": "Липецк",
          "addressRegion": "Липецкая область",
          "addressCountry": "RU"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/#breadcrumbs",
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
        "@id": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/#service",
        "name": "Адвокат по уголовным делам в Липецке",
        "description": "Помощь адвоката по уголовным делам в Липецке: проверка, задержание, обыск, допрос, следствие, суд, обжалование, УДО и защита потерпевших.",
        "url": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/",
        "provider": { "@id": "https://dejure-help.ru/#organization" },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Липецк и Липецкая область"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/#faq",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
      }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      {/* ═══ БЛОК 1: HERO ═══ */}
      <MilitaryHero
        breadcrumbs={
          <>
            <Link href="/">Главная</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/grazhdanam/">Гражданам</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Адвокат по уголовным делам</span>
          </>
        }
        superTitle="Уголовное право • Защита граждан"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Адвокат по уголовным делам
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              защита и представительство
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Подключаемся на стадии проверки, задержания, следствия и суда, представляем интересы потерпевших и оцениваем возможности обжалования.
          </span>
        }
        primaryCtaText="Обсудить ситуацию с адвокатом"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_cta_advokat_ugolovnyj_hub"
        primaryCtaSubtext={
          <>Если требуется срочная помощь, позвоните: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (910) 350-31-11</a></>
        }
        trustItems={[
          { text: 'Определим срочность, процессуальный статус и риски' },
          { text: 'Изучим материалы и сформируем стратегию защиты' },
          { text: 'Куратор практики — юрист А. Е. Бобкин (22 года следственного опыта)' },
          { text: 'Непосредственную защиту ведут адвокаты коллегии' }
        ]}
        imageUrl="/images/bobkin.jpg"
        imageName="Аркадий Евгеньевич Бобкин"
        imageSubtitle="Директор ЮК «Де-Юре», куратор практики уголовного права"
        imageObjectPosition="50% -75px"
      />

      {/* ═══ БЛОК 2: С КАКИМИ СИТУАЦИЯМИ МЫ ПОМОГАЕМ ГРАЖДАНАМ (ТИПОВОЙ ШАБЛОН) ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>С какими ситуациями</span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>мы помогаем гражданам</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Уголовные дела требуют оперативного подключения и глубокого знания следственной практики. Защитим ваши права, выстроим правовую позицию и поможем на всех стадиях процесса.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {situations.map((item, i) => (
              <div key={i} className="hover-lift" style={{
                padding: '36px 30px',
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-primary)',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.45s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease'
              }}>
                <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.06, pointerEvents: 'none' }}>
                  <svg width="100" height="100" viewBox="0 0 24 24" fill="var(--color-deep-blue)">
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>

                <div style={{ 
                  fontSize: '12px', 
                  fontWeight: 700, 
                  color: 'var(--color-gold)', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.08em', 
                  marginBottom: '14px',
                  background: 'rgba(193, 160, 102, 0.1)',
                  padding: '4px 10px',
                  alignSelf: 'flex-start',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {item.tag}
                </div>
                <h3 style={{ 
                  fontFamily: 'var(--font-serif)', 
                  fontSize: '17px', 
                  fontWeight: 600,
                  color: 'var(--color-deep-blue)', 
                  margin: '0 0 12px 0', 
                  lineHeight: 1.35, 
                  minHeight: '44px',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {item.title}
                </h3>
                <p style={{ 
                  color: 'var(--color-text-secondary)', 
                  fontSize: '14px', 
                  lineHeight: 1.6, 
                  margin: 0,
                  position: 'relative',
                  zIndex: 1
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: НАПРАВЛЕНИЯ ПОМОЩИ (УСЛУГИ АДВОКАТА ПО УГОЛОВНЫМ ДЕЛАМ С 11-Й КАРТОЧКОЙ) ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Услуги</span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>адвоката по уголовным делам</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Выберите конкретное направление, чтобы узнать порядок действий, необходимые документы и варианты решения вашей задачи.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px' }}>
            {categories.map((dir, i) => (
              <Link 
                key={i} 
                href={dir.link} 
                data-analytics="click_criminal_service_card"
                style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', height: '100%' }}
              >
                <div 
                  className="card service-card hover-lift" 
                  style={{ 
                    height: '100%', 
                    minHeight: '260px',
                    padding: '32px 28px', 
                    background: 'var(--color-white)', 
                    border: '1px solid var(--color-border)',
                    borderTop: '4px solid var(--color-primary)',
                    borderRadius: '0',
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)',
                    transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.5s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.35s ease',
                    position: 'relative'
                  }}
                >
                  <div>
                    <h3 style={{ 
                      margin: '0 0 12px 0', 
                      fontSize: '18px', 
                      fontFamily: 'var(--font-serif)',
                      color: 'var(--color-deep-blue)', 
                      lineHeight: 1.35,
                      minHeight: '52px'
                    }}>
                      {dir.title}
                    </h3>
                    <p style={{ 
                      margin: '0 0 20px 0', 
                      fontSize: '14px', 
                      color: 'var(--color-text-secondary)', 
                      lineHeight: 1.55,
                      minHeight: '75px'
                    }}>
                      {dir.desc}
                    </p>
                  </div>
                  <div className="card-arrow" style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px', 
                    color: 'var(--color-primary)', 
                    fontSize: '14px', 
                    fontWeight: 600,
                    marginTop: 'auto',
                    paddingTop: '12px',
                    borderTop: '1px solid rgba(23, 50, 77, 0.06)'
                  }}>
                    <span>Подробнее</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </div>
                </div>
              </Link>
            ))}

            {/* 11-я карточка: Не нашли свою ситуацию */}
            <div 
              className="card service-card hover-lift" 
              style={{ 
                height: '100%', 
                minHeight: '260px',
                padding: '32px 28px', 
                background: 'linear-gradient(135deg, var(--color-deep-blue) 0%, #17324D 100%)', 
                border: '1px solid var(--color-deep-blue)',
                borderTop: '4px solid var(--color-gold)',
                borderRadius: '0',
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.1)',
                transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.5s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.35s ease',
                position: 'relative',
                color: 'var(--color-white)'
              }}
            >
              <div>
                <h3 style={{ 
                  margin: '0 0 12px 0', 
                  fontSize: '18px', 
                  fontFamily: 'var(--font-serif)',
                  color: 'var(--color-white)', 
                  lineHeight: 1.35,
                  minHeight: '52px'
                }}>
                  <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Не нашли</span>{' '}
                  <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>свою ситуацию?</span>
                </h3>
                <p style={{ 
                  margin: '0 0 20px 0', 
                  fontSize: '14px', 
                  color: 'rgba(255, 255, 255, 0.85)', 
                  lineHeight: 1.55,
                  minHeight: '75px'
                }}>
                  <span style={{ display: 'inline-block' }}>Опишите ваш уголовно-правовой вопрос в форме. Изучим имеющиеся документы</span> <br /> <span style={{ display: 'inline-block' }}>и предложим возможные варианты решения.</span>
                </p>
              </div>
              <a 
                href="#form" 
                className="btn btn-gold" 
                style={{ 
                  width: '100%', 
                  textAlign: 'center', 
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '12px 20px',
                  fontSize: '14px',
                  marginTop: 'auto'
                }}
              >
                Обсудить ситуацию
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: КУРАТОР ПРАКТИКИ ═══ */}
      <SpecialistBlock
        title="Куратор практики"
        name="Аркадий Евгеньевич Бобкин"
        position={<>Директор, управляющий партнёр ЮК «Де-Юре»,<br />куратор практики уголовного права</>}
        imageUrl="/images/bobkin.jpg"
        imagePosition="50% -75px"
        profileHref="/specialisty/bobkin-arkadiy-evgenevich/"
        profileText="Подробнее об Аркадии Евгеньевиче Бобкине →"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Юрист с 1997 года. Более 22 лет работы в следственных подразделениях налоговой полиции и МВД (следователь по ОВД, начальник следственной части по РОПД).
          </span>,
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Анализ материалов доследственных проверок и доказательств обвинения с учётом внутренней логики следствия</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Непосредственную защиту в следственных действиях и судах осуществляют адвокаты Коллегии адвокатов «Де-Юре»</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Полная конфиденциальность, защита информации и строгое соблюдение режима адвокатской тайны</span>
            </li>
          </ul>
        ]}
        buttonText="Задать вопрос куратору"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 5: ПРИМЕРЫ ИЗ ПРАКТИКИ ═══ */}
      <CasesBlock
        title="Примеры дел из практики"
        showAllLink="/praktika/"
        showAllText="Смотреть все дела"
        showDemoWarning={true}
        cases={casesData}
      />

      {/* ═══ БЛОК 6: КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock
        title="Как проходит работа"
        subtitle="Чёткий алгоритм действий — вы всегда знаете, что происходит на каждом этапе вашего дела."
        alignTitle="center"
        steps={steps}
        ctaTitle="Готовы обсудить вашу ситуацию"
        ctaSubtitle="Опишите задачу — Аркадий Бобкин изучит документы и согласует порядок защиты."
        ctaButtonText="Обсудить ситуацию"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 7: СТОИМОСТЬ УСЛУГ ═══ */}
      <PricingBlock
        title="Стоимость помощи адвоката"
        subtitle="Стоимость зависит от стадии процесса, объёма материалов, количества эпизодов и срочности."
        tiers={pricingTiers}
        disclaimer="Стоимость определяется после уточнения задачи и изучения имеющихся процессуальных документов. Состав услуг, цена и порядок оплаты фиксируются в соглашении до начала работы. Оплата вознаграждения не включает судебные пошлины и сопутствующие расходы на привлечённых специалистов."
      />

      {/* ═══ БЛОК 8: ЧАСТЫЕ ВОПРОСЫ (FAQ) ═══ */}
      <FAQBlock
        superTitle="Частые вопросы клиентов"
        title={<><span>Ответы на</span> <br /><span>частые вопросы</span></>}
        subtitle="О следственных действиях, правах и уголовном процессе"
        ctaText="Задать свой вопрос"
        ctaLink="#form"
        faqs={faqs}
      />

      {/* ═══ БЛОК 9: ФИНАЛЬНАЯ ФОРМА ═══ */}
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
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Обсудите ситуацию</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>с адвокатом</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Опишите ситуацию, статью УК РФ или врученные документы. Обращение передадим Аркадию Евгеньевичу Бобкину. Он оценит неотложность, риски и свяжется с вами для согласования состава защитной группы.
              </p>
              
              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация адвоката</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните прямо сейчас: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (910) 350-31-11</a>
                </p>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Адвокатская тайна:</strong>
                Все сведения и документы защищены профессиональной тайной (ст. 8 ФЗ «Об адвокатской деятельности и адвокатуре в РФ»).
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Написать нам"
                subtitle={
                  <>
                    <span style={{ display: 'inline-block' }}>Оставьте имя и номер телефона. Адвокат свяжется с вами</span> <br />
                    <span style={{ display: 'inline-block' }}>в течение 15 минут в рабочее время.</span>
                  </>
                }
                subtext={
                  <>
                    <span style={{ display: 'inline-block' }}>Если вы оставите заявку вечером или в&nbsp;выходной день,</span> <br />
                    <span style={{ display: 'inline-block' }}>мы перезвоним в&nbsp;ближайший рабочий день.</span>
                  </>
                }
                buttonText="Отправить обращение"
                commentPlaceholder="Опишите вашу ситуацию: орган, статья, вызов, задержание..."
                hiddenFields={[
                  { name: 'source_page', value: 'https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/' },
                  { name: 'direction', value: 'advokat_ugolovnyj' },
                  { name: 'selected_specialist', value: 'bobkin-arkadiy-evgenevich' }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
