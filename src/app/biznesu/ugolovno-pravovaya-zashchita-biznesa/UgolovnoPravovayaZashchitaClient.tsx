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
      title: 'До проверки (превентивный этап)',
      desc: 'Оценка рисков спорных операций, проверка цепочек поставщиков, аудит распределения полномочий и инструктаж персонала.'
    },
    {
      num: '02',
      title: 'Доследственная проверка (КУСП)',
      desc: 'Анализ законности запросов полиции, подготовка безопасных ответов, представление интересов при опросах и обжалование действий.'
    },
    {
      num: '03',
      title: 'Срочные действия (обыск, выемка)',
      desc: 'Оперативное реагирование, контроль упаковки и изъятия предметов, внесение замечаний в протоколы, защита сотрудников.'
    },
    {
      num: '04',
      title: 'Возбужденное уголовное дело',
      desc: 'Процессуальная защита адвокатами по уголовным делам, участие в допросах, сбор доказательств защиты, защита активов от ареста.'
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
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: 'var(--color-primary)',
                      fontSize: '13.5px',
                      fontWeight: 600,
                      textDecoration: 'none',
                      marginTop: '20px',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <span>{item.btnText}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                ) : (
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
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <span>{item.btnText}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '36px' }}>
            {urgentRisks.map((risk, idx) => (
              <div
                key={idx}
                className="urgent-card"
                style={{
                  background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)',
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  borderTop: '4px solid var(--color-gold)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-gold)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Срочный риск
                  </span>
                </div>
                <h3 style={{ fontSize: '17px', color: 'var(--color-deep-blue)', margin: 0, fontWeight: 700, fontFamily: 'var(--font-serif)', lineHeight: 1.35 }}>
                  {risk.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#3A4B5C', margin: 0, lineHeight: 1.55 }}>
                  {risk.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.08)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '20px 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div>
              <div style={{ color: '#FFFFFF', fontSize: '15px', fontWeight: 600 }}>
                Если проверка, обыск или допрос уже начались:
              </div>
              <div style={{ color: '#BACAD9', fontSize: '13.5px', marginTop: '4px' }}>
                Свяжитесь с юристом до подписания протоколов и передачи документов.
              </div>
            </div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <a
                href="tel:+79103503111"
                style={{
                  color: 'var(--color-gold)',
                  fontWeight: 700,
                  fontSize: '17px',
                  textDecoration: 'none'
                }}
              >
                +7 (910) 350-31-11
              </a>
              <a
                href="#form"
                className="btn btn-primary"
                style={{ padding: '10px 20px', fontSize: '14px' }}
              >
                Срочная консультация
              </a>
            </div>
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
          <div style={{ maxWidth: '800px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Не обязательно ждать</span> <br />
              <span style={{ display: 'inline-block' }}>возбуждения уголовного дела</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textWrap: 'balance' }}>
              Чем раньше компания оценивает обстоятельства и риски, тем больше возможностей сохранить документы, исключить противоречия и выстроить согласованную правовую позицию.
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '20px', marginBottom: '36px' }}>
            {stagesData.map((st, i) => (
              <div
                key={i}
                className="card"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  padding: '28px 22px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                <div style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)' }}>
                  {st.num}
                </div>
                <h3 style={{ fontSize: '17px', color: 'var(--color-deep-blue)', margin: 0, fontWeight: 600 }}>
                  {st.title}
                </h3>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.55 }}>
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ padding: '14px 28px' }}>
              Оценить стадию и риски бизнеса →
            </a>
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
          <div>
            <span style={{ display: 'block', marginBottom: '8px' }}>Примеры из практики по защите бизнеса</span>
            <span style={{ display: 'block', fontSize: '15px', color: 'var(--color-text-secondary)', fontWeight: 400, textTransform: 'none', letterSpacing: 'normal' }}>
              Реальные примеры сопровождения проверок ОБЭП, налоговых дел и следственных действий в отношении организаций.
            </span>
          </div>
        }
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

      {/* ═══ БЛОК 11: СМЕЖНЫЕ НАПРАВЛЕНИЯ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 3vw, 32px)', color: 'var(--color-deep-blue)', marginBottom: '12px' }}>
              Смежные направления практики
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', margin: 0 }}>
              Если задача затрагивает другие сферы деятельности компании:
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '20px' }}>
            <Link
              href="/biznesu/nalogovyj-yurist-dlya-biznesa/"
              className="card related-service-card hover-lift"
              style={{
                background: '#FAFAFA',
                border: '1px solid var(--color-border)',
                padding: '24px 20px',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}
            >
              <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-deep-blue)' }}>
                Налоговый юрист для бизнеса
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                Проверки ФНС, возражения на акты, обжалование доначислений до уголовной стадии.
              </p>
              <div style={{ color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600, marginTop: 'auto' }}>
                Подробнее →
              </div>
            </Link>

            <Link
              href="/biznesu/korporativnyj-yurist/"
              className="card related-service-card hover-lift"
              style={{
                background: '#FAFAFA',
                border: '1px solid var(--color-border)',
                padding: '24px 20px',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}
            >
              <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-deep-blue)' }}>
                Корпоративный юрист
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                Защита контроля над ООО, споры участников, исключение участника, дедлоки.
              </p>
              <div style={{ color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600, marginTop: 'auto' }}>
                Подробнее →
              </div>
            </Link>

            <Link
              href="/biznesu/razblokirovka-raschetnogo-scheta-po-115-fz/"
              className="card related-service-card hover-lift"
              style={{
                background: '#FAFAFA',
                border: '1px solid var(--color-border)',
                padding: '24px 20px',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}
            >
              <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-deep-blue)' }}>
                Разблокировка счёта по 115-ФЗ
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                Снятие ограничений банков, ответы на запросы финмониторинга, реабилитация в МВК.
              </p>
              <div style={{ color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600, marginTop: 'auto' }}>
                Подробнее →
              </div>
            </Link>

            <Link
              href="/biznesu/bankrotstvo-biznesa/"
              className="card related-service-card hover-lift"
              style={{
                background: '#FAFAFA',
                border: '1px solid var(--color-border)',
                padding: '24px 20px',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}
            >
              <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-deep-blue)' }}>
                Банкротство бизнеса
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                Защита руководства от субсидиарной ответственности и оспаривания сделок.
              </p>
              <div style={{ color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600, marginTop: 'auto' }}>
                Подробнее →
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 12: ОФИС В ЛИПЕЦКЕ ═══ */}
      <section className="section bg-light" style={{ padding: '60px 0', background: 'var(--color-cream)' }}>
        <div className="container">
          <div
            className="card"
            style={{
              background: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-gold)',
              padding: '32px 36px',
              maxWidth: '860px',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '24px'
            }}
          >
            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>
                Офис ЮК «Де-Юре» в Липецке
              </h3>
              <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', margin: '0 0 12px 0', lineHeight: 1.5 }}>
                г. Липецк, ул. Советская, д. 35, офис 213.<br />
                Приём руководителей и конфиденциальные встречи проводятся по предварительной записи. Пн–Пт: 09:00–18:00.
              </p>
              <div style={{ fontSize: '15px', color: 'var(--color-deep-blue)', fontWeight: 600 }}>
                Дежурный телефон:{' '}
                <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>
                  +7 (910) 350-31-11
                </a>
                {' '}/ городской:{' '}
                <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>
                  +7 (4742) 20-15-25
                </a>
              </div>
            </div>
            <div>
              <Link href="/kontakty/" className="btn btn-outline" style={{ padding: '11px 22px' }}>
                Контакты и схема проезда →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 13: ФИНАЛЬНАЯ ФОРМА (#FORM) ═══ */}
      <section id="form" className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <ContactsForm
            title="Обсудить уголовно-правовую ситуацию"
            subtitle="Кратко укажите, с какими действиями правоохранительных органов столкнулась компания. Куратор направления свяжется с Вами с соблюдением требований конфиденциальности."
            buttonText="Обсудить ситуацию"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
