'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MilitaryHero from '@/components/MilitaryHero';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import ProcessBlock from '@/components/ProcessBlock';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import SpecialistBlock from '@/components/SpecialistBlock';
import PricingBlock, { PricingTier } from '@/components/PricingBlock';

export default function UgolovnoPravovayaZashchitaClient() {
  const situations = [
    {
      tag: 'Запрос документов / ОБЭП',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Поступил запрос</span> <br />
          <span style={{ display: 'inline-block' }}>из полиции или ОБЭП</span>
        </span>
      ),
      desc: 'У компании требуют документы, вызывают руководителя, бухгалтера или сотрудников для дачи объяснений. Важно не допустить передачи лишней информации.',
      link: '/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-pri-proverke-obep/',
      btnText: 'Защита при проверке ОБЭП'
    },
    {
      tag: 'Обыск / Выемка',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>В офисе проводится</span> <br />
          <span style={{ display: 'inline-block' }}>обыск или выемка</span>
        </span>
      ),
      desc: 'Осматривают помещения, изымают бухгалтерские документы, телефоны, серверы и компьютеры. Нужен контроль фиксации нарушений и защита от остановки бизнеса.',
      link: '/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-pri-obyske-v-kompanii/',
      btnText: 'Защита при обыске'
    },
    {
      tag: 'Превентивный аудит',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Нужно заранее проверить</span> <br />
          <span style={{ display: 'inline-block' }}>уголовные риски</span>
        </span>
      ),
      desc: 'Требуется превентивно оценить рискованные договоры, цепочки контрагентов, операции, полномочия и потенциальную ответственность руководства.',
      link: '/biznesu/ugolovno-pravovaya-zashchita-biznesa/ugolovno-pravovoj-audit-biznesa/',
      btnText: 'Уголовно-правовой аудит'
    },
    {
      tag: 'Экономические статьи',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Претензии к руководителю</span> <br />
          <span style={{ display: 'inline-block' }}>или собственнику бизнеса</span>
        </span>
      ),
      desc: 'Проверка связана с хозяйственными сделками, распределением прибыли, движением средств или обвинениями по ст. 159, 160, 201 УК РФ.',
      link: '/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-ekonomicheskim-prestupleniyam/',
      btnText: 'Экономические составы'
    },
    {
      tag: 'Налоговые составы',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Налоговые материалы</span> <br />
          <span style={{ display: 'inline-block' }}>переданы в следствие</span>
        </span>
      ),
      desc: 'Возник риск доследственной проверки или уголовного дела по ст. 199–199.2 УК РФ после выездной налоговой проверки ФНС.',
      link: '/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-nalogovym-prestupleniyam/',
      btnText: 'Налоговые преступления'
    },
    {
      tag: 'Вызов на опрос',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Сотрудников вызывают</span> <br />
          <span style={{ display: 'inline-block' }}>на опрос или допрос</span>
        </span>
      ),
      desc: 'Нужно определить процессуальный статус, разъяснить права и исключить неподготовленные противоречивые показания сотрудников.',
      link: '/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-pri-proverke-obep/',
      btnText: 'Подготовка к опросу'
    },
    {
      tag: 'Защита компании',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Компания пострадала</span> <br />
          <span style={{ display: 'inline-block' }}>от мошенничества или кражи</span>
        </span>
      ),
      desc: 'Контрагенты, сотрудники или третьи лица причинили ущерб бизнесу. Поможем собрать доказательства, подготовить заявление и добиться расследования.',
      link: '#form',
      btnText: 'Защитить интересы компании'
    }
  ];

  const urgentRisks = [
    {
      title: 'Запрос документов или вызов на опрос с коротким сроком',
      desc: 'Передача неполных или избыточных документов без правового анализа, а также спонтанные объяснения сотрудников создают основу для обвинения, которую сложно изменить в суде.'
    },
    {
      title: 'Обыск, выемка техники или изъятие серверов',
      desc: 'Изъятие ключевых носителей и первичных документов парализует работу организации. Без контроля специалиста протоколы подписываются с опасными процессуальными неточностями.'
    },
    {
      title: 'Передача акта налоговой проверки в следственные органы',
      desc: 'Срок реакции ограничен: по истечении 75 дней после требования об уплате материалы передаются в СК РФ. Необходимы согласованные действия налоговых юристов и уголовных адвокатов.'
    }
  ];

  const services = [
    {
      title: 'Защита бизнеса при проверке ОБЭП',
      desc: 'Анализ правомерности запросов, определение объёма документов, подготовка руководителей и сотрудников к опросам, пресечение давления.',
      link: '/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-pri-proverke-obep/'
    },
    {
      title: 'Защита при обыске и выемке в компании',
      desc: 'Срочный выезд, контроль соблюдения процедуры, фиксация нарушений в протоколе, защита цифровой инфраструктуры и непрерывности бизнеса.',
      link: '/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-pri-obyske-v-kompanii/'
    },
    {
      title: 'Уголовно-правовой аудит бизнеса',
      desc: 'Превентивная проверка хозяйственных операций, договоров с контрагентами, налоговых и управленческих решений на предмет уголовных рисков.',
      link: '/biznesu/ugolovno-pravovaya-zashchita-biznesa/ugolovno-pravovoj-audit-biznesa/'
    },
    {
      title: 'Защита по экономическим преступлениям',
      desc: 'Защита директоров и собственников по статьям о мошенничестве, растрате, злоупотреблении полномочиями (ст. 159, 160, 201 УК РФ).',
      link: '/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-ekonomicheskim-prestupleniyam/'
    },
    {
      title: 'Защита по налоговым преступлениям',
      desc: 'Защита должностных лиц компании при доследственных проверках и уголовных делах по ст. 199, 199.1, 199.2 УК РФ.',
      link: '/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-nalogovym-prestupleniyam/'
    }
  ];

  const stagesData = [
    {
      num: '01',
      title: (
        <>
          <span style={{ display: 'block' }}>До проверки</span>
          <span style={{ display: 'block' }}>(превентивный этап)</span>
        </>
      ),
      desc: 'Оценка рисков спорных операций, проверка цепочек поставщиков, аудит распределения полномочий и инструктаж персонала.'
    },
    {
      num: '02',
      title: (
        <>
          <span style={{ display: 'block' }}>Доследственная</span>
          <span style={{ display: 'block' }}>проверка (КУСП)</span>
        </>
      ),
      desc: 'Анализ законности запросов полиции, подготовка безопасных ответов, представление интересов при опросах и обжалование действий.'
    },
    {
      num: '03',
      title: (
        <>
          <span style={{ display: 'block' }}>Срочные действия</span>
          <span style={{ display: 'block' }}>(обыск, выемка)</span>
        </>
      ),
      desc: 'Оперативное реагирование, контроль упаковки и изъятия предметов, внесение замечаний в протоколы, защита сотрудников.'
    },
    {
      num: '04',
      title: (
        <>
          <span style={{ display: 'block' }}>Возбужденное</span>
          <span style={{ display: 'block' }}>уголовное дело</span>
        </>
      ),
      desc: 'Процессуальная защита адвокатами по уголовным делам, участие в допросах, сбор доказательств защиты, защита активов от ареста.'
    }
  ];

  const relatedServices = [
    {
      title: 'Налоговый юрист для бизнеса',
      desc: 'Проверки ФНС, возражения на акты, обжалование доначислений до уголовной стадии.',
      link: '/biznesu/nalogovyj-yurist-dlya-biznesa/'
    },
    {
      title: 'Корпоративный юрист',
      desc: 'Защита контроля над ООО, споры участников, исключение участника, дедлоки.',
      link: '/biznesu/korporativnyj-yurist/'
    },
    {
      title: 'Разблокировка счёта по 115-ФЗ',
      desc: 'Снятие ограничений банков, ответы на запросы финмониторинга, реабилитация в МВК.',
      link: '/biznesu/razblokirovka-raschetnogo-scheta-po-115-fz/'
    },
    {
      title: 'Банкротство бизнеса',
      desc: 'Защита руководства от субсидиарной ответственности и оспаривания сделок.',
      link: '/biznesu/bankrotstvo-biznesa/'
    }
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Диагностика ситуации и статуса',
      desc: 'Выясняем, на какой стадии находится проверка или дело, какие правоохранительные органы задействованы и каков статус участников.'
    },
    {
      num: '02',
      title: 'Анализ документов и требований',
      desc: 'Изучаем запросы, протоколы, акты проверок, договоры и переписку для выявления уязвимых мест и сильных сторон позиции.'
    },
    {
      num: '03',
      title: 'Разграничение интересов',
      desc: 'Разделяем интересы юридического лица, собственников, генерального директора и сотрудников компании во избежание конфликта позиций.'
    },
    {
      num: '04',
      title: 'Стратегия и первоочередные шаги',
      desc: 'Формируем единую правовую позицию, план взаимодействия с правоохранительными органами и регламент поведения сотрудников.'
    },
    {
      num: '05',
      title: 'Сопровождение и процессуальная защита',
      desc: 'Подготавливаем процессуальные документы, организуем участие опытных адвокатов на следственных действиях и в суде.'
    },
    {
      num: '06',
      title: 'Контроль результатов и аудит рисков',
      desc: 'Фиксируем достигнутые процессуальные результаты, снимаем наложенные ограничения и внедряем меры защиты от повторных рисков.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Первичный анализ и стратегия',
      subtitle: 'Оценка рисков и запросов органов',
      popular: false,
      price: 'от 15 000 ₽',
      features: [
        { name: 'Правовой анализ запроса ОБЭП или повестки', value: 'Включено' },
        { name: 'Оценка рисков по сделкам и контрагентам', value: 'Включено' },
        { name: 'Выработка инструкций для руководства и сотрудников', value: 'Включено' },
        { name: 'Подготовка мотивированного ответа на запрос', value: 'Включено' }
      ],
      buttonText: 'Заказать анализ',
      buttonHref: '#form'
    },
    {
      title: 'Сопровождение проверки / выезда',
      subtitle: 'Защита при опросах, обысках и выемках',
      popular: true,
      badgeText: 'Срочный выезд',
      price: 'от 35 000 ₽',
      features: [
        { name: 'Срочный выезд адвоката при обыске или выемке', value: 'Включено' },
        { name: 'Участие в опросах и допросах сотрудников', value: 'Включено' },
        { name: 'Контроль законности действий силовиков', value: 'Включено' },
        { name: 'Внесение замечаний и жалобы в прокуратуру', value: 'Включено' }
      ],
      buttonText: 'Подключить команду',
      buttonHref: '#form'
    },
    {
      title: 'Уголовно-правовой аудит бизнеса',
      subtitle: 'Комплексная превентивная безопасность',
      popular: false,
      price: 'от 60 000 ₽',
      features: [
        { name: 'Глубокий аудит договоров, бухгалтерии и платежей', value: 'Включено' },
        { name: 'Выявление признаков экономических составов', value: 'Включено' },
        { name: 'Оценка налоговых рисков по контрагентам', value: 'Включено' },
        { name: 'Инструктаж топ-менеджмента и регламенты безопасности', value: 'Включено' }
      ],
      buttonText: 'Заказать аудит',
      buttonHref: '#form'
    },
    {
      title: 'Защита по уголовному делу',
      subtitle: 'Предварительное следствие и суд',
      popular: false,
      price: 'от 90 000 ₽',
      features: [
        { name: 'Процессуальная защита подозреваемого / обвиняемого', value: 'Включено' },
        { name: 'Участие во всех следственных действиях и заседаниях', value: 'Включено' },
        { name: 'Назначение независимых экономических экспертиз', value: 'Включено' },
        { name: 'Защита имущества и счетов компании от ареста', value: 'Включено' }
      ],
      buttonText: 'Защита по делу',
      buttonHref: '#form'
    }
  ];

  const practiceCases: CaseData[] = [
    {
      category: 'Проверка ОБЭП',
      title: 'Прекращение доследственной проверки по факту поставки промышленного оборудования',
      problem: 'Конкурент подал заявление в УЭБиПК о мошенничестве (ст. 159 УК РФ), обвиняя директора предприятия в поставке оборудования с нарушением спецификации на сумму более 18 млн ₽. Силовики запросили весь документооборот за 3 года.',
      action: 'Юристы ограничили перечень передаваемых документов рамками спорного контракта, подготовили технико-экономическое обоснование соответствия продукции ГОСТам и сопроводили опросы главного инженера и директора.',
      result: 'Вынесено постановление об отказе в возбуждении уголовного дела за отсутствием состава преступления. Документооборот и непрерывность работы завода сохранены.'
    },
    {
      category: 'Налоговые преступления',
      title: 'Предотвращение возбуждения уголовного дела по ст. 199 УК РФ после выездной проверки',
      problem: 'Налоговая инспекция доначислила строительной компании 34 млн ₽ НДС и налога на прибыль по сделкам с субподрядчиками и направила материалы в следственные органы.',
      action: 'Совместно с налоговыми консультантами выявили грубые процессуальные нарушения при проведении налоговой проверки, сформировали доказательства реальности выполнения строительно-монтажных работ и обжаловали решение ФНС в суде.',
      result: 'Материалы возвращены следственным комитетом без возбуждения уголовного дела, арбитражный суд снизил объём налоговых претензий на 78%.'
    },
    {
      category: 'Обыск в компании',
      title: 'Защита ИТ-инфраструктуры и серверов торговой сети при обыске по уголовному делу контрагента',
      problem: 'В головной офис торговой компании прибыли сотрудники полиции с постановлением об обыске по делу одного из поставщиков, предприняв попытку изъять центральные серверы с базой 1С.',
      action: 'Адвокат незамедлительно прибыл на место, предоставил мотивированные возражения о недопустимости неизбирательного изъятия оборудования, парализующего работу непричастного юрлица, и обеспечил выгрузку необходимых следователю файлов на внешний накопитель.',
      result: 'Серверы и компьютеры компании сохранены на рабочих местах. Торговая сеть продолжила работу без простоя, в протокол внесены необходимые замечания.'
    }
  ];

  const faqs = [
    {
      q: 'На какой стадии лучше обращаться за уголовно-правовой помощью?',
      a: 'Обратиться можно на любом этапе: превентивно до проверки, сразу после получения запроса, при вызове сотрудников, во время обыска или после возбуждения дела. Чем раньше подключены специалисты, тем выше шанс не допустить возбуждения дела и сохранить устойчивость бизнеса.'
    },
    {
      q: 'Может ли уголовное дело быть возбуждено против юридического лица (компании)?',
      a: 'В российском уголовном праве уголовная ответственность возлагается исключительно на физических лиц (директора, бенефициаров, главных бухгалтеров, ключевых сотрудников). Однако следственные действия и обеспечительные меры (арест счетов, изъятие техники) напрямую бьют по компании.'
    },
    {
      q: 'Что делать, если в организацию поступил запрос документов из ОБЭП?',
      a: 'Необходимо проверить законность запроса: номер КУСП или уголовного дела, обоснование требования и срок. Ни в коем случае нельзя передавать документы без описи или отдавать избыточную первичку. Порядок и объём ответа согласуются со специалистом.'
    },
    {
      q: 'Обязана ли компания безоговорочно предоставлять все запрашиваемые документы?',
      a: 'Нет. Требование должно быть мотивированным и относиться к предмету проверки конкретного сообщения о преступлении. Необоснованные и неконкретизированные запросы («предоставить всю деятельность за 3 года») подлежат мотивированному уточнению или обжалованию.'
    },
    {
      q: 'Что делать, если обыск в офисе компании уже начался?',
      a: 'Не препятствовать физически законным действиям сотрудников. Немедленно уведомить руководство и вызвать адвоката. Проверить постановление судьи или следователя, служебные удостоверения, следить за присутствием понятых и требовать фиксации всех замечаний в протоколе.'
    },
    {
      q: 'Нужно ли готовить сотрудников к опросу или допросу в полиции?',
      a: 'Да. Сотрудники должны чётко знать свои процессуальные права, право не свидетельствовать против себя и близких (ст. 51 Конституции РФ), право пользоваться помощью адвоката и понимать, что догадки и предположения не должны выдаваться за факты.'
    },
    {
      q: 'Чем уголовно-правовая защита отличается от работы налогового юриста?',
      a: 'Налоговый юрист ведёт спор с ФНС по поводу размера налогов и правомерности вычетов. Уголовно-правовая защита подключается, когда материалы проверки передаются в правоохранительные органы и возникает персональная уголовная ответственность должностных лиц по ст. 199–199.2 УК РФ.'
    },
    {
      q: 'Кто осуществляет процессуальную защиту руководителя по уголовному делу?',
      a: 'Процессуальную защиту подозреваемого, обвиняемого или свидетеля осуществляет исключительно профессиональный адвокат с действующим ордером. ЮК «Де-Юре» организует стратегическую координацию, экономическую аналитику и работу адвокатов.'
    },
    {
      q: 'Можно ли провести уголовно-правовой аудит, если проверки ещё нет?',
      a: 'Да, превентивный аудит — наиболее эффективная мера. Он позволяет выявить уязвимости в структуре владения, договорах, контрагентах и электронном документообороте до того, как они привлекут внимание контролирующих органов.'
    },
    {
      q: 'Помогаете ли вы компаниям, если они сами пострадали от преступления?',
      a: 'Да. Мы собираем доказательства хищений, мошенничества или злоупотреблений со стороны недобросовестных топ-менеджеров, контрагентов или сотрудников, готовим заявления о преступлении и представляем интересы компании-потерпевшего.'
    }
  ];

  return (
    <main>
      <Header />

      {/* ═══ БЛОК 1: HERO ═══ */}
      <MilitaryHero
        breadcrumbs={
          <>
            <Link href="/">Главная</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/biznesu/">Бизнесу</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Уголовно-правовая защита бизнеса</span>
          </>
        }
        superTitle={
          <span style={{ whiteSpace: 'normal', display: 'inline-block', lineHeight: 1.4 }}>
            <span style={{ display: 'inline-block' }}>ЮРИДИЧЕСКАЯ ПОМОЩЬ БИЗНЕСУ •</span> <br />
            <span style={{ display: 'inline-block' }}>Липецк и Липецкая область</span>
          </span>
        }
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Уголовно-правовая защита
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              бизнеса в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '760px', textWrap: 'balance' }}>
            Помогаем собственникам и руководителям оценить уголовно-правовые риски, подготовить компанию к проверке и организовать комплексную защиту при действиях правоохранительных органов.
          </span>
        }
        primaryCtaText="Обсудить ситуацию"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_criminal_hub"
        primaryCtaSubtext={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Срочная связь при проверке или обыске:
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (910) 350-31-11</a>
              {' '}или{' '}
              <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (4742) 20-15-25</a>
            </span>
          </span>
        }
        imageUrl="/images/bobkin.jpg"
        imageName="Аркадий Евгеньевич Бобкин"
        imageSubtitle="Директор, управляющий партнёр ЮК «Де-Юре», куратор направления"
        imageObjectPosition="center 15%"
        trustItems={[
          {
            text: (
              <span>
                <strong>Подключаемся до проверки</strong> и на срочной стадии
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Разграничиваем интересы</strong> компании, руководства и сотрудников
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Координируем позицию</strong> в уголовной, налоговой и корпоративной плоскостях
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Участие опытных адвокатов</strong> в процессуальных действиях
              </span>
            )
          }
        ]}
      />

      {/* ═══ БЛОК 2: С КАКОЙ СИТУАЦИЕЙ СТОЛКНУЛСЯ ВАШ БИЗНЕС (#SITUATIONS) ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>С какой ситуацией</span> <br />
              <span style={{ display: 'inline-block' }}>столкнулся ваш бизнес</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textWrap: 'balance' }}>
              Уголовно-правовой риск может возникнуть задолго до возбуждения дела. Выберите ситуацию, чтобы перейти к профильной услуге или обсудить порядок действий с юристом.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '32px' }}>
            {situations.map((item, i) => (
              <div
                key={i}
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
                  {item.tag && (
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
                      {item.tag}
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
                    {item.title}
                  </h3>

                  <p style={{
                    fontSize: '14px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    {item.desc}
                  </p>
                </div>

                {item.link.startsWith('/') ? (
                  <Link
                    href={item.link}
                    className="situation-btn"
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
                      transition: 'all 0.25s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--color-gold)';
                      const svg = e.currentTarget.querySelector('svg');
                      if (svg) {
                        svg.style.transform = 'translateX(4px)';
                        svg.style.stroke = 'var(--color-gold)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--color-primary)';
                      const svg = e.currentTarget.querySelector('svg');
                      if (svg) {
                        svg.style.transform = 'translateX(0)';
                        svg.style.stroke = 'currentColor';
                      }
                    }}
                  >
                    <span>{item.btnText}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.25s ease, stroke 0.25s ease' }}>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                ) : (
                  <a
                    href="#form"
                    className="situation-btn"
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
                      transition: 'all 0.25s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--color-gold)';
                      const svg = e.currentTarget.querySelector('svg');
                      if (svg) {
                        svg.style.transform = 'translateX(4px)';
                        svg.style.stroke = 'var(--color-gold)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--color-primary)';
                      const svg = e.currentTarget.querySelector('svg');
                      if (svg) {
                        svg.style.transform = 'translateX(0)';
                        svg.style.stroke = 'currentColor';
                      }
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById('form');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                      else window.location.hash = 'form';
                    }}
                  >
                    <span>{item.btnText}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.25s ease, stroke 0.25s ease' }}>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                )}
              </div>
            ))}

            {/* Баннер «Не нашли свою ситуацию?» (span-2) */}
            <div
              className="card service-card service-card-span-2"
              style={{
                background: 'linear-gradient(135deg, var(--color-deep-blue) 0%, #17324D 100%)',
                padding: '32px 36px',
                border: '1px solid transparent',
                borderTop: '3px solid var(--color-gold)',
                borderRadius: '0',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '28px',
                position: 'relative',
                boxShadow: '0 8px 24px rgba(11, 28, 42, 0.2)'
              }}
            >
              <style dangerouslySetInnerHTML={{ __html: `
                .service-card-span-2 {
                  grid-column: span 2;
                }
                @media (max-width: 991px) {
                  .service-card-span-2 {
                    grid-column: span 1 !important;
                    flex-direction: column !important;
                    align-items: flex-start !important;
                  }
                }
                .white-btn-custom {
                  background-color: var(--color-white) !important;
                  color: #10273B !important;
                  border: 1px solid var(--color-white) !important;
                  white-space: nowrap;
                  font-weight: 600;
                  padding: 14px 28px !important;
                  transition: all 0.3s ease !important;
                }
                .white-btn-custom:hover {
                  background-color: var(--color-gold) !important;
                  color: var(--color-deep-blue) !important;
                  border-color: var(--color-gold) !important;
                }
              `}} />
              <div style={{ flex: '1 1 300px' }}>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '24px', fontFamily: 'var(--font-serif)', color: '#FFFFFF', lineHeight: 1.3 }}>
                  Не нашли свою ситуацию?
                </h3>
                <p style={{ margin: 0, fontSize: '15px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, maxWidth: '580px' }}>
                  Опишите обстоятельства вашего дела в защищённой форме. Проведём первичную диагностику рисков и предложим безопасный план действий.
                </p>
              </div>
              <div style={{ flexShrink: 0 }}>
                <a
                  href="#form"
                  className="btn white-btn-custom"
                  style={{
                    display: 'inline-block',
                    textAlign: 'center',
                    fontSize: '15px',
                    textDecoration: 'none'
                  }}
                >
                  Описать ситуацию
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: КОГДА НЕЛЬЗЯ ЗАТЯГИВАТЬ С ОБРАЩЕНИЕМ (#URGENT) ═══ */}
      <section style={{ background: 'var(--color-deep-blue)', padding: '64px 0 56px', position: 'relative', overflow: 'hidden' }} id="urgent">
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '36px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontFamily: 'var(--font-serif)', color: '#FFFFFF', marginBottom: '12px', marginTop: 0, lineHeight: 1.25 }}>
              <span style={{ display: 'inline-block' }}>Когда нельзя затягивать</span> <br />
              <span style={{ display: 'inline-block' }}>с обращением к юристу</span>
            </h2>
            <div style={{ width: '60px', height: '2px', background: 'var(--color-gold)', margin: '16px 0' }} />
            <p style={{ fontSize: '16px', color: '#E8ECF1', lineHeight: 1.65, margin: 0 }}>
              В уголовно-правовой сфере первые действия и объяснения определяют дальнейший ход дела. Задержка может привести к необратимой фиксации позиции обвинения.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '20px', marginBottom: '36px' }}>
            {urgentRisks.map((risk, idx) => (
              <div
                key={idx}
                className="urgent-card"
                style={{
                  background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)',
                  padding: '30px 24px',
                  borderTop: '4px solid var(--color-gold)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
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
                      {risk.title}
                    </div>
                  </div>
                  <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '14px', lineHeight: 1.55, margin: 0 }}>
                    {risk.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.08)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '16px 24px',
            marginBottom: '32px',
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '14px',
            lineHeight: 1.6
          }}>
            <span style={{ display: 'inline-block' }}>
              <strong style={{ color: '#FFFFFF' }}>Если проверка, обыск или допрос уже начались:</strong> Свяжитесь с юристом до подписания протоколов и передачи документов.
            </span>
          </div>

          <style dangerouslySetInnerHTML={{__html: `
            .urgent-card {
              transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
            }
            .urgent-card:hover {
              transform: translateY(-6px);
              box-shadow: 0 18px 36px rgba(0,0,0,0.28) !important;
            }
            .btn-urgent-outline {
              border: 1px solid rgba(255,255,255,0.8) !important;
              color: #FFFFFF !important;
              background: transparent !important;
              text-decoration: none !important;
              font-weight: 600 !important;
              transition: all 0.3s ease !important;
              border-radius: 0 !important;
              display: inline-block !important;
            }
            .btn-urgent-outline:hover {
              background: rgba(255,255,255,0.18) !important;
              color: #FFFFFF !important;
              border-color: #FFFFFF !important;
            }
            .btn-urgent-call {
              display: inline-block !important;
              border-radius: 0 !important;
              text-decoration: none !important;
              background-color: var(--color-gold) !important;
              color: var(--color-deep-blue) !important;
              font-weight: 700 !important;
              transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
              border: 1px solid var(--color-gold) !important;
            }
            .btn-urgent-call:hover {
              background-color: #FFFFFF !important;
              color: #0B1C2A !important;
              border-color: #FFFFFF !important;
              transform: translateY(-2px);
            }
            @media (max-width: 991px) {
              .stages-header-row {
                flex-direction: column !important;
                align-items: flex-start !important;
                gap: 12px !important;
              }
              .stages-subtitle-right {
                text-align: left !important;
                max-width: 100% !important;
              }
            }
          `}} />

          {/* Зона связи */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '28px', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <a href="tel:+79103503111" style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.02em' }} data-analytics="phone_click">
              +7 (910) 350-31-11
            </a>
            <a href="tel:+79103503111" className="btn-urgent-call" style={{ padding: '14px 28px', fontSize: '15px' }} data-analytics="phone_click">
              Позвонить юристу
            </a>
            <a href="#form" className="btn btn-urgent-outline" style={{ padding: '14px 28px', fontSize: '15px' }}>
              Срочная консультация
            </a>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginLeft: '4px' }}>
              Срочная правовая помощь при проверках и следственных действиях
            </span>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: УСЛУГИ НАПРАВЛЕНИЯ (#DIRECTIONS) ═══ */}
      <section id="directions" className="section" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Услуги по уголовно-правовой</span> <br />
              <span style={{ display: 'inline-block' }}>защите бизнеса</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textWrap: 'balance' }}>
              Состав команды и порядок работы зависят от стадии проверки, характера возможных претензий и того, чьи интересы необходимо защищать.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            {services.map((svc, i) => (
              <Link
                key={i}
                href={svc.link}
                style={{ textDecoration: 'none', display: 'block', height: '100%' }}
              >
                <div
                  className="card service-card"
                  style={{
                    height: '100%',
                    minHeight: '220px',
                    padding: '30px',
                    background: 'var(--color-white)',
                    border: '1px solid var(--color-border)',
                    borderTop: '3px solid var(--color-primary)',
                    borderRadius: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                >
                  <div>
                    <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.35, fontFamily: 'var(--font-serif)', fontWeight: 600 }}>
                      {svc.title}
                    </h3>
                    <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                      {svc.desc}
                    </p>
                  </div>
                  <div
                    className="card-arrow"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: 'var(--color-primary)',
                      fontSize: '14px',
                      fontWeight: 600
                    }}
                  >
                    <span>Подробнее об услуге</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}

            {/* Карточка 6: комплексная помощь */}
            <div
              className="card service-card"
              style={{
                height: '100%',
                minHeight: '220px',
                padding: '30px',
                background: 'linear-gradient(135deg, #10273B 0%, #1A3C59 100%)',
                border: '1px solid transparent',
                borderTop: '3px solid var(--color-gold)',
                borderRadius: '0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: '#FFFFFF', lineHeight: 1.35, fontFamily: 'var(--font-serif)', fontWeight: 600 }}>
                  Комплексная защита и координация адвокатов
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.55 }}>
                  Если ситуация охватывает сразу несколько направлений (ОБЭП, налоговая, следственный комитет), выстроим единую стратегию и скоординируем команду защиты.
                </p>
              </div>
              <a
                href="#form"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--color-gold)',
                  fontSize: '14px',
                  fontWeight: 600,
                  textDecoration: 'none'
                }}
              >
                <span>Обсудить задачу с куратором →</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: НЕ ОБЯЗАТЕЛЬНО ЖДАТЬ ВОЗБУЖДЕНИЯ УГОЛОВНОГО ДЕЛА ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, var(--color-deep-blue) 0%, #17324D 100%)',
            border: '1px solid rgba(193, 160, 102, 0.4)',
            borderTop: '3px solid var(--color-gold)',
            boxShadow: '0 8px 30px rgba(16, 39, 59, 0.18)',
            padding: '36px 32px',
            position: 'relative'
          }}>
            <div className="stages-header-row" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
              marginBottom: '24px',
              position: 'relative',
              zIndex: 1
            }}>
              <div style={{ flex: '1 1 auto', minWidth: '280px' }}>
                <h3 style={{ fontSize: 'clamp(19px, 2.2vw, 24px)', fontFamily: 'var(--font-serif)', color: '#FFFFFF', margin: 0, lineHeight: 1.25 }}>
                  <span style={{ display: 'inline-block' }}>Не обязательно ждать</span> <br />
                  <span style={{ display: 'inline-block' }}>возбуждения уголовного дела</span>
                </h3>
              </div>
              <div className="stages-subtitle-right" style={{
                fontSize: '13.5px',
                color: 'rgba(255, 255, 255, 0.85)',
                maxWidth: '520px',
                lineHeight: 1.5,
                textAlign: 'right',
                flex: '0 0 auto'
              }}>
                Чем раньше компания оценивает обстоятельства и риски, тем больше возможностей сохранить документы, исключить противоречия и выстроить согласованную правовую позицию.
              </div>
            </div>

            <div className="grid grid-4" style={{ gap: '16px', position: 'relative', zIndex: 1 }}>
              {stagesData.map((st, i) => (
                <div
                  key={i}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '22px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                  }}
                >
                  <h4 style={{ fontSize: '16px', color: '#FFFFFF', margin: 0, fontWeight: 600, lineHeight: 1.25, display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)', flexShrink: 0, lineHeight: 1.2 }}>
                      {st.num}
                    </span>
                    <span style={{ lineHeight: 1.25 }}>
                      {st.title}
                    </span>
                  </h4>
                  <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5, margin: 0 }}>
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 6: КАК ПРОХОДИТ РАБОТА (PROCESSBLOCK) ═══ */}
      <ProcessBlock
        title="Как строится уголовно-правовая защита бизнеса"
        subtitle="Понятный маршрут взаимодействия без лишней бюрократии, с полной конфиденциальностью и оперативным информированием руководства."
        steps={processSteps}
        ctaTitle="Нужна помощь в оценке ситуации?"
        ctaSubtitle="Свяжитесь с куратором направления. Изучим запросы правоохранительных органов и предложим оптимальный план действий."
        ctaButtonText="Обсудить ситуацию с юристом"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 7: КУРАТОР НАПРАВЛЕНИЯ (SPECIALISTBLOCK) ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Аркадий Евгеньевич Бобкин"
        position={<>Директор, управляющий партнёр ЮК «Де-Юре»,<br />куратор направления «Уголовно-правовая защита бизнеса»</>}
        imageUrl="/images/bobkin.jpg"
        imagePosition="center 15%"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Аркадий Евгеньевич участвует в первичной оценке ситуации и разработке правовой позиции, координирует работу команды специалистов по сложным уголовно-правовым вопросам бизнеса. 22 года работал в следственных подразделениях налоговой полиции и МВД, в том числе следователем по особо важным делам и руководителем Следственной части.
          </span>,
          <div
            key="2"
            style={{
              borderLeft: '3px solid var(--color-gold)',
              paddingLeft: '16px',
              fontStyle: 'italic',
              fontSize: '14.5px',
              color: 'var(--color-deep-blue)',
              margin: '16px 0 0 0'
            }}
          >
            «В уголовно-правовой защите бизнеса победа закладывается до начала следственных действий: в грамотном аудите сделок, выверенных ответах на запросы и защите топ-менеджеров от необдуманных шагов».
          </div>,
          <ul key="3" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>22 года следственной практики в налоговой полиции и Следственной части МВД</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>Координация уголовной, налоговой и корпоративной составляющих защиты</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>Процессуальную защиту подозреваемого или обвиняемого осуществляет адвокат компании</span>
            </li>
          </ul>,
          <a key="4" href="/specialisty/bobkin-arkadiy-evgenevich/" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
            Подробнее об Аркадии Евгеньевиче Бобкине →
          </a>
        ]}
        buttonText="Обсудить ситуацию с куратором"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 8: СТОИМОСТЬ (PRICINGBLOCK) ═══ */}
      <PricingBlock
        title="Стоимость уголовно-правовой защиты бизнеса"
        subtitle="Цена зависит от стадии ситуации, срочности подключения, объёма материалов, количества участников и процессуальных действий, а также от необходимости участия адвоката."
        tiers={pricingTiers}
        disclaimer="После изучения обстоятельств мы предлагаем подходящий формат работы и фиксируем стоимость в договоре. Выезды за пределы Липецкой области, судебные и независимые экспертизы согласуются отдельно."
      />

      {/* ═══ БЛОК 9: ПРИМЕРЫ ИЗ ПРАКТИКИ (CASESBLOCK) ═══ */}
      <CasesBlock
        title={
          <>
            <span style={{ display: 'inline-block' }}>Примеры из практики</span> <br />
            <span style={{ display: 'inline-block' }}>по защите бизнеса</span>
          </>
        }
        subtitle="Реальные примеры сопровождения проверок ОБЭП, налоговых дел и следственных действий в отношении организаций."
        showAllLink="/praktika/"
        showAllText="Смотреть все дела →"
        cases={practiceCases}
      />
      <div className="container" style={{ marginTop: '-40px', marginBottom: '60px', textAlign: 'center' }}>
        <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', fontStyle: 'italic', margin: 0 }}>
          Результат зависит от обстоятельств конкретного дела и не гарантирует аналогичный исход в другой ситуации.
        </p>
      </div>

      {/* ═══ БЛОК 10: ЧАСТЫЕ ВОПРОСЫ (FAQBLOCK) ═══ */}
      <FAQBlock
        title="Вопросы об уголовно-правовой защите бизнеса"
        subtitle="Ответы на ключевые практические вопросы о проверках ОБЭП, обысках, допросах сотрудников и разграничении рисков."
        faqs={faqs}
      />

      {/* ═══ БЛОК 11: СМЕЖНЫЕ НАПРАВЛЕНИЯ ПРАКТИКИ ДЛЯ БИЗНЕСА (ПО ШАБЛОНУ) ═══ */}
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
              Смежные направления практики для бизнеса
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '24px'
            }}>
              <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 3.5vw, 34px)', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.25, flex: '1 1 480px', minWidth: '280px' }}>
                <span style={{ display: 'inline-block' }}>Смежные направления</span> <br />
                <span style={{ display: 'inline-block' }}>практики для бизнеса</span>
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
                Если задача выходит за рамки уголовно-правовой защиты, привлекаем экспертов смежных практик компании «Де-Юре» — по налогам, арбитражу, корпоративным спорам и банкротству.
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
                    borderRadius: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)'
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
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.35s ease, stroke 0.35s ease' }}>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div>
            <Link href="/biznesu/" className="all-services-link" style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '15px', textDecoration: 'underline', textUnderlineOffset: '4px', display: 'inline-flex', alignItems: 'center', gap: '6px', transition: 'color 0.3s ease' }}>
              Смотреть все юридические услуги для бизнеса →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 12: ЛОКАЛЬНЫЙ ОФИС В ЛИПЕЦКЕ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '48px', alignItems: 'center' }}>
            <div>
              <div style={{
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--color-gold)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '12px'
              }}>
                Офис в Липецке
              </div>
              <h2 className="with-accent" style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.25 }}>
                <span style={{ display: 'inline-block' }}>Обсудить ситуацию</span> <br />
                <span style={{ display: 'inline-block' }}>в офисе</span>
              </h2>
              <p style={{ fontSize: '15.5px', color: 'var(--color-deep-blue)', opacity: 0.9, lineHeight: 1.6, marginBottom: '24px' }}>
                Можно встретиться лично в офисе ЮК «Де-Юре» в центре Липецка либо передать документы в электронном виде для дистанционного анализа.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)' }}>Адрес офиса:</strong>
                    <span style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)' }}>г. Липецк, ул. Советская, д. 35, оф. 213</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}>
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)' }}>Режим работы:</strong>
                    <span style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)' }}>Пн–Пт с 9:00 до 18:00 (по предварительной записи)</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)' }}>Прямой телефон:</strong>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                      <a href="tel:+74742201525" style={{ fontSize: '15px', color: 'var(--color-primary)', fontWeight: 700, textDecoration: 'none' }}>+7 (4742) 20-15-25</a>
                      <span style={{ color: 'var(--color-text-secondary)', fontSize: '13.5px' }}>/ дежурный:</span>
                      <a href="tel:+79103503111" style={{ fontSize: '15px', color: 'var(--color-primary)', fontWeight: 700, textDecoration: 'none' }}>+7 (910) 350-31-11</a>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
                <a href="#form" className="btn btn-primary" style={{ padding: '12px 28px' }}>
                  Записаться на встречу
                </a>
                <a href="tel:+74742201525" className="btn btn-outline" style={{ padding: '12px 24px' }}>
                  Позвонить
                </a>
                <Link href="/kontakty/" style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '14.5px', textDecoration: 'underline', textUnderlineOffset: '4px', marginLeft: '4px' }}>
                  Контакты и схема проезда →
                </Link>
              </div>
            </div>

            <div style={{
              background: 'var(--color-white)',
              border: '1px solid var(--color-border)',
              boxShadow: '0 8px 30px rgba(23, 50, 77, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              minHeight: '380px'
            }}>
              <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '320px', background: '#EAEFE9', overflow: 'hidden', flex: 1 }}>
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=39.585799%2C52.604024&amp;z=17&amp;pt=39.585799%2C52.604024%2Cpm2blm"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0, width: '100%', height: '100%', minHeight: '320px' }}
                  allowFullScreen={true}
                  title="Офис ЮК Де-Юре: г. Липецк, ул. Советская, д. 35, оф. 213"
                  loading="lazy"
                ></iframe>
              </div>
              <a
                href="https://yandex.ru/maps/?pt=39.585799,52.604024&z=17&text=%D0%B3.+%D0%9B%D0%B8%D0%BF%D0%B5%D1%86%D0%BA,+%D1%83%D0%BB.+%D0%A1%D0%BE%D0%B2%D0%B5%D1%82%D1%81%D0%BA%D0%B0%D1%8F,+%D0%B4.+35"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-route-map"
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  padding: '14px 20px',
                  fontSize: '15px',
                  fontWeight: 600,
                  borderRadius: 0,
                  borderLeft: 'none',
                  borderRight: 'none',
                  borderBottom: 'none',
                  borderTop: '1px solid var(--color-border)',
                  textDecoration: 'none',
                  boxSizing: 'border-box'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                </svg>
                <span>Построить маршрут до офиса</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 13: ФИНАЛЬНАЯ ФОРМА (СВЯЗАТЬСЯ С НАМИ) — КАНОНИЧЕСКИЙ ШАБЛОН ═══ */}
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
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Получите первичную</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>оценку ситуации</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко опишите ситуацию и оставьте контакты. Куратор изучит первичные материалы и свяжется с вами для выработки безопасной уголовно-правовой позиции.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Прямой контакт со специалистом</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Дежурный телефон: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (910) 350-31-11</a><br />
                  Городской телефон: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (4742) 20-15-25</a>
                </p>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '6px' }}>
                  Липецк, ул. Советская, д. 35, офис 213 (приём руководителей по предварительной записи)
                </div>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Адвокатская тайна и конфиденциальность:</strong>
                Все переданные сведения и документы охраняются Федеральным законом № 63-ФЗ «Об адвокатской деятельности и адвокатуре в РФ». Не указывайте в форме паспортные данные и коммерческую тайну — защищённый способ передачи согласуем после контакта.
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Написать нам"
                subtitle={
                  <>
                    <span style={{ display: 'inline-block' }}>Оставьте контакты и суть вопроса. Куратор свяжется с вами</span> <br />
                    <span style={{ display: 'inline-block' }}>в течение 15 минут в рабочее время.</span>
                  </>
                }
                subtext={
                  <>
                    <span style={{ display: 'inline-block' }}>Если вы оставите заявку вечером или в&nbsp;выходной день,</span> <br />
                    <span style={{ display: 'inline-block' }}>мы перезвоним в&nbsp;ближайший рабочий день.</span>
                  </>
                }
                buttonText="Обсудить уголовно-правовую ситуацию"
                commentPlaceholder="Кратко укажите суть ситуации: проверка ОБЭП, налоговое дело, следственные действия, статья УК РФ…"
                hiddenFields={[
                  { name: 'source_page', value: '/biznesu/ugolovno-pravovaya-zashchita-biznesa/' },
                  { name: 'page_type', value: 'hub' },
                  { name: 'direction', value: 'criminal-defense' },
                  { name: 'service', value: 'ugolovno-pravovaya-zashchita-biznesa' }
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
