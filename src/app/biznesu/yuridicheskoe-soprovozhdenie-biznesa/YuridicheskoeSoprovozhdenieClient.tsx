'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import MilitaryHero from '@/components/MilitaryHero';
import ProcessBlock, { ProcessStep } from '@/components/ProcessBlock';
import PricingBlock, { PricingTier } from '@/components/PricingBlock';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import FAQBlock, { FAQItem } from '@/components/FAQBlock';
import ContactsForm from '@/components/ContactsForm';

export default function YuridicheskoeSoprovozhdenieClient() {
  const situations = [
    {
      title: 'Договоры проверяет директор или бухгалтер',
      desc: 'Отдельного штатного юриста нет, а риски в контрактах с контрагентами копятся и требуют регулярного правового контроля.'
    },
    {
      title: 'Штатный юрист перегружен или не имеет нужной практики',
      desc: 'Специалист не успевает закрывать текущий поток либо компании требуется узкая судебная, налоговая или корпоративная экспертиза.'
    },
    {
      title: 'Подразделения обращаются к разным исполнителям',
      desc: 'Нет единого окна приёма задач, единой правовой позиции компании и системного реестра договорных обязательств.'
    },
    {
      title: 'Документы и ответы готовятся после возникновения проблем',
      desc: 'Претензии контрагентов, требования банков или предписания органов рассматриваются в экстренном порядке без превентивного анализа.'
    },
    {
      title: 'Бизнес расширяется и запускает новые направления',
      desc: 'Растёт число сотрудников, сделок, филиалов и активов, требуя системного пересмотра внутренней документации и процедур.'
    },
    {
      title: 'Нужна временная замена или проектное усиление',
      desc: 'Штатный сотрудник отсутствует либо компании необходимо сопровождение крупной реорганизации, сделки или переходного периода.'
    }
  ];

  const formats = [
    {
      title: 'Абонентское обслуживание',
      forWhom: 'Для компаний с регулярным потоком типовых и периодических задач.',
      desc: 'Согласуем состав работ, ежемесячный объём задач, каналы постановки, приоритеты и правила для нестандартных проектов.',
      badge: 'Популярный формат'
    },
    {
      title: 'Юридический отдел на аутсорсинге',
      forWhom: 'Для бизнеса без собственного юридического отдела.',
      desc: 'Команда принимает задачи от согласованных руководителей подразделений, распределяет их по специализациям и ведёт отчётность по статусам.',
      badge: 'Комплексный'
    },
    {
      title: 'Усиление штатного юриста',
      forWhom: 'Для компаний со штатным специалистом при нехватке времени или узкой экспертизы.',
      desc: 'Чётко разделяем зоны ответственности: внутренний юрист ведёт рутину, а внешняя команда берёт сложные споры, проверки и сделки.',
      badge: 'Партнёрство'
    },
    {
      title: 'Временная поддержка',
      forWhom: 'При отпуске/декрете сотрудника, реорганизации или сезонном пике нагрузки.',
      desc: 'Фиксируем срок, критические процессы компании и регламент аккуратной передачи дел после завершения периода поддержки.',
      badge: 'Гибкий'
    },
    {
      title: 'Разовое комплексное сопровождение',
      forWhom: 'Для обособленных межотраслевых проектов и структурных изменений.',
      desc: 'Определяем конкретный результат, этапы, состав профильной группы специалистов и отдельную стоимость проектного пула.',
      badge: 'Проектный'
    }
  ];

  const serviceCategories = [
    {
      group: 'Текущая договорная работа',
      desc: 'Проверка входящих и подготовка исходящих договоров компании, выявление скрытых условий, протоколы разногласий и юридическая помощь в переговорах.',
      linkText: 'Разработка и проверка договоров',
      href: '/biznesu/dogovornoe-pravo/'
    },
    {
      group: 'Претензии, долги и споры',
      desc: 'Досудебное урегулирование разногласий, взыскание просроченной задолженности, защита от требований кредиторов и ведение арбитражных споров.',
      linkText: 'Взыскание задолженности и арбитраж',
      href: '/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/'
    },
    {
      group: 'Корпоративные вопросы',
      desc: 'Решения органов управления, смена генерального директора, внесение изменений в ЕГРЮЛ, опционы, сделки с долями и урегулирование отношений участников.',
      linkText: 'Корпоративный юрист',
      href: '/biznesu/korporativnyj-yurist/'
    },
    {
      group: 'Работники и проверки',
      desc: 'Правовая оценка кадровых процедур, локальные нормативные акты, дисциплинарные взыскания, трудовые конфликты и взаимодействие с контролирующими органами.',
      linkText: 'Трудовые споры для бизнеса',
      href: '/biznesu/trudovye-spory-s-rabotnikami/'
    },
    {
      group: 'Активы и специальные риски',
      desc: 'Сопровождение коммерческой недвижимости, исполнительное производство, превентивный анализ банкротных рисков и разблокировка счетов по 115-ФЗ.',
      linkText: 'Банкротство бизнеса и спецпрактики',
      href: '/biznesu/bankrotstvo-biznesa/'
    }
  ];

  const workflowSteps: ProcessStep[] = [
    {
      number: '01',
      title: 'Обсуждение бизнеса и задач',
      description: 'Уточняем сферу деятельности, кто в компании ставит задачи, какие вопросы повторяются регулярно и где уже есть срочность.'
    },
    {
      number: '02',
      title: 'Первичная инвентаризация',
      description: 'Разделяем текущий операционный поток, накопившиеся нерешённые проблемы и отдельные масштабные судебные/проектные задачи.'
    },
    {
      number: '03',
      title: 'Модель взаимодействия',
      description: 'Согласуем удобные каналы связи, регламент приоритетов, сроки первичной реакции и список ответственных лиц со стороны заказчика.'
    },
    {
      number: '04',
      title: 'Фиксация объёма в договоре',
      description: 'Указываем конкретный перечень включённых работ, доступные лимиты, порядок эскалации и правила согласования дополнительных задач.'
    },
    {
      number: '05',
      title: 'Запуск сопровождения',
      description: 'Принимаем обращения по согласованному регламенту, распределяем задачи между профильными юристами и отслеживаем статусы исполнения.'
    },
    {
      number: '06',
      title: 'Контроль и корректировка',
      description: 'По итогам отчётного периода анализируем фактическую нагрузку, динамику вопросов и при необходимости гибко оптимизируем объём обслуживания.'
    }
  ];

  const taskRules = [
    {
      step: '1',
      title: 'Опишите суть и цель',
      desc: 'Кратко укажите фактические обстоятельства дела и конкретный результат, который требуется достичь.'
    },
    {
      step: '2',
      title: 'Укажите реальный срок',
      desc: 'Обозначьте дедлайн и процессуальное или коммерческое событие, к наступлению которого необходим ответ.'
    },
    {
      step: '3',
      title: 'Приложите документы',
      desc: 'Предоставьте проект договора, акт, претензию или письмо контрагента, если они уже есть в наличии.'
    },
    {
      step: '4',
      title: 'Уточните предысторию',
      desc: 'Сообщите, какие действия уже предпринимались сотрудниками и с кем велась предварительная переписка.'
    },
    {
      step: '5',
      title: 'Соблюдайте безопасность',
      desc: 'Не направляйте конфиденциальные сведения через открытые мессенджеры до согласования защищённого канала передачи.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      name: 'Базовое сопровождение',
      price: 'от 35 000 ₽',
      period: 'в месяц',
      description: 'Консультации и текущие договорные документы в согласованном объёме для небольших компаний и ИП.',
      features: [
        'Согласованный лимит устных и письменных консультаций',
        'Проверка и правка текущих договоров компании',
        'Составление типовых писем и претензий контрагентам',
        'Единое окно приёма обращений через согласованный канал',
        'Состав и объём задач детально фиксируются в договоре'
      ],
      isPopular: false,
      ctaText: 'Обсудить базовый формат',
      ctaHref: '#form'
    },
    {
      name: 'Расширенное сопровождение',
      price: 'от 65 000 ₽',
      period: 'в месяц',
      description: 'Полноценная юридическая поддержка растущего бизнеса с несколькими подразделениями и активным оборотом.',
      features: [
        'Увеличенный пул задач и сокращённый срок реакции',
        'Приём обращений от руководителей нескольких подразделений',
        'Участие в коммерческих переговорах с контрагентами',
        'Подготовка нестандартных договоров и соглашений',
        'Регулярная отчётность по статусам всех поручений'
      ],
      isPopular: true,
      ctaText: 'Подобрать расширенный тариф',
      ctaHref: '#form'
    },
    {
      name: 'Усиление штатного юриста',
      price: 'от 45 000 ₽',
      period: 'в месяц',
      description: 'Подключение внешней экспертизы к узким или высоконагруженным направлениям юридической работы.',
      features: [
        'Передача согласованных категорий сложных или пиковых задач',
        'Арбитражная, налоговая и корпоративная поддержка',
        'Разгрузка внутреннего юриста от непрофильных направлений',
        'Чёткое разделение зон ответственности сторон до запуска',
        'Совместная выработка правовых позиций компании'
      ],
      isPopular: false,
      ctaText: 'Обсудить усиление',
      ctaHref: '#form'
    },
    {
      name: 'Временное / проектное сопровождение',
      price: 'от 50 000 ₽',
      period: 'за проект',
      description: 'Юридическое обеспечение на период реорганизации, запуска нового проекта или замещения сотрудника.',
      features: [
        'Фиксированный срок и согласованные этапы проекта',
        'Выделение команды профильных специалистов под задачи',
        'Правовой контроль ключевых сделок и изменений структуры',
        'Реестр рекомендаций и процедура передачи дел после финала',
        'Дополнительные этапы согласуются отдельным допсоглашением'
      ],
      isPopular: false,
      ctaText: 'Оценить проект',
      ctaHref: '#form'
    },
    {
      name: 'Первичная диагностика потока задач',
      price: 'по запросу',
      period: 'разово',
      description: 'Вводная сессия и аудит текущих правовых процессов для формирования персональной модели сопровождения.',
      features: [
        'Анализ структуры входящих юридических вопросов',
        'Инвентаризация открытых претензий и контрактов',
        'Определение оптимального состава и формата обслуживания',
        'Формирование коммерческого предложения с регламентом SLA',
        'Без навязывания избыточных услуг и скрытых доплат'
      ],
      isPopular: false,
      ctaText: 'Записаться на диагностику',
      ctaHref: '#form'
    }
  ];

  const sampleCases: CaseData[] = [
    {
      title: 'Выстроили единый порядок договорной и претензионной работы',
      category: 'Оптовая торговля и дистрибуция',
      description:
        'В компании договоры визировали директор и главный бухгалтер, замечания терялись в почте, а претензии к должникам выставлялись с опозданием. За первый этап сопровождения юристы систематизировали действующие формы, согласовали матрицу ответственности и внедрили единый реестр. Текущие соглашения стали проходить проверку до визирования руководителем, а сроки направления претензий сократились до регламентных 3 рабочих дней.',
      duration: 'Абонентское обслуживание',
      points: [
        'Разработан типовой регламент согласования договоров',
        'Оцифрован и взят под контроль реестр дебиторских претензий',
        'Устранено дублирование функций между руководством и бухгалтерией'
      ],
      result: 'Сокращение времени визирования договоров до 1 рабочего дня и полный контроль сроков исковой давности по претензиям.'
    },
    {
      title: 'Усилили штатного юриста по сложным и пиковым задачам',
      category: 'Производственное предприятие',
      description:
        'Единственный штатный специалист вел рутинную кадровую и договорную работу, но не справлялся с параллельным ведением крупных арбитражных споров и аудитом экологических предписаний. Стороны разделили функции: внутренняя рутина осталась за штатным юристом, а внешняя команда «Де-Юре» взяла на себя подготовку процессуальных документов в арбитраж и урегулирование разногласий с контрагентами по поставке оборудования.',
      duration: 'Формат усиления',
      points: [
        'Разделены зоны оперативной и судебной ответственности',
        'Обеспечено участие в сложных арбитражных заседаниях',
        'Штатный юрист разгружен от переработок и судебных командировок'
      ],
      result: 'Успешная защита интересов завода в арбитражном суде Липецка и снижение штрафных санкций контрагентов.'
    },
    {
      title: 'Подключили временную юридическую функцию на период изменений',
      category: 'Реорганизация логистического холдинга',
      description:
        'При слиянии двух операционных подразделений потребовалось оперативно перезаключить более 70 контрактов с перевозчиками, актуализировать доверенности и пересмотреть трудовые регламенты при отсутствии руководителя юридической службы. Внешняя команда оперативно подключилась на 4 месяца, провела инвентаризацию рисков, закрыла согласование контрактов и передала новому штатному руководителю структурированный архив.',
      duration: 'Проектная поддержка (4 месяца)',
      points: [
        'Переоформлено 70+ ключевых контрактов без остановки перевозок',
        'Устранены противоречия в доверенностях и кадровых регламентах',
        'Сформирован прозрачный реестр задач для нового руководителя'
      ],
      result: 'Бесперебойное функционирование логистических цепочек и бесконфликтный переход на обновленную договорную структуру.'
    }
  ];

  const faqItems: FAQItem[] = [
    {
      q: 'Что входит в юридическое сопровождение бизнеса?',
      a: 'Состав зависит от выбранной модели. В обслуживание могут входить консультации, текущая договорная и претензионная работа, подготовка документов, участие в переговорах и координация профильных юристов. Точный перечень, объём и исключения фиксируются в договоре.'
    },
    {
      q: 'Чем сопровождение отличается от разового обращения к юристу?',
      a: 'При разовом обращении юрист решает одну конкретную задачу. При сопровождении заранее устанавливаются порядок постановки задач, доступный объём, приоритеты, сроки первичной реакции, ответственные и правила для дополнительных проектов.'
    },
    {
      q: 'Абонентское обслуживание и юридический аутсорсинг — это одно и то же?',
      a: 'Эти термины часто используют для близких моделей. Абонентское обслуживание обычно означает регулярный набор услуг за согласованную плату. Аутсорсинг может предполагать передачу внешней команде более широкой юридической функции. Конкретное содержание определяется договором, а не названием.'
    },
    {
      q: 'Можно ли подключить Де-Юре, если в компании уже есть юрист?',
      a: 'Да. Внешняя команда может взять отдельные специализации, сложные проекты или часть нагрузки. До начала работы важно разделить зоны ответственности и определить, кто согласует решения со стороны компании.'
    },
    {
      q: 'Судебные дела входят в абонентскую плату?',
      a: 'Это зависит от утверждённого пакета. Подготовка первичной позиции или претензии может входить в обслуживание, а полноценное представительство в суде часто оформляется как отдельный проект. Граница должна быть указана в договоре и тарифе.'
    },
    {
      q: 'Как быстро юрист отвечает на задачу?',
      a: 'Срок первичной реакции и срок подготовки результата — разные параметры. Они согласуются с учётом приоритета и сложности задач. Не каждая задача может быть решена в день обращения, поэтому при запуске сопровождения устанавливается порядок срочности.'
    },
    {
      q: 'Кто сможет обращаться к юристам от нашей компании?',
      a: 'Перечень уполномоченных сотрудников и порядок согласования лучше определить заранее. Это предотвращает противоречивые поручения и позволяет контролировать объём обслуживания.'
    },
    {
      q: 'Можно ли заказать сопровождение только на несколько месяцев?',
      a: 'Да, если требуется временно усилить компанию, заменить отсутствующего сотрудника или провести отдельный проект. Период, результат, объём и порядок передачи незавершённых задач фиксируются до начала работы.'
    },
    {
      q: 'Как передаются документы и конфиденциальная информация?',
      a: 'Каналы и права доступа согласуются при запуске. Для документов с персональными, коммерческими или иными чувствительными сведениями следует использовать утверждённый безопасный способ передачи, а не случайные открытые каналы.'
    },
    {
      q: 'С чего начать, если мы не понимаем необходимый объём?',
      a: 'Достаточно описать бизнес, сотрудников, которые создают юридические задачи, и несколько типичных ситуаций за последние месяцы. После первичной диагностики можно разделить текущую работу, накопленные проблемы и отдельные проекты, а затем предложить формат.'
    }
  ];

  return (
    <div style={{ backgroundColor: 'var(--color-bg-light)', minHeight: '100vh' }}>
      <Header />

      <main>
        {/* Хлебные крошки */}
        <div style={{ backgroundColor: 'var(--color-deep-blue)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="container" style={{ padding: '12px 16px' }}>
            <nav aria-label="Хлебные крошки">
              <ol
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.7)'
                }}
              >
                <li>
                  <Link href="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                    Главная
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/biznesu/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                    Бизнесу
                  </Link>
                </li>
                <li>/</li>
                <li style={{ color: 'var(--color-gold)' }} aria-current="page">
                  Юридическое сопровождение бизнеса
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Первый экран */}
        <MilitaryHero
          badge="Юридические услуги для бизнеса • Липецк и Липецкая область"
          title="Юридическое сопровождение бизнеса в Липецке"
          subtitle="Возьмём на себя регулярные юридические задачи компании или усилим штатного юриста: определим порядок взаимодействия, согласуем объём работы и подключим профильных специалистов по мере необходимости."
          trustItems={[
            'Единое окно для обращений руководителя и сотрудников',
            'Согласованные приоритеты, сроки реакции и объём работы',
            'Профильные юристы для договорных, судебных и специальных задач'
          ]}
          primaryButtonText="Обсудить юридическое сопровождение"
          primaryButtonHref="#form"
          secondaryButtonText="Сравнить форматы работы"
          secondaryButtonHref="#formats"
        />

        {/* Строка доверия */}
        <section style={{ backgroundColor: '#ffffff', borderBottom: '1px solid var(--color-border-light)', padding: '24px 0' }}>
          <div className="container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ color: 'var(--color-gold)', fontSize: '20px', lineHeight: 1 }}>✔</span>
                <span style={{ fontSize: '14px', color: 'var(--color-text-dark)', lineHeight: 1.5 }}>
                  <strong>Фиксируем правила:</strong> порядок приёма, приоритизации и согласования задач утверждается до старта.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ color: 'var(--color-gold)', fontSize: '20px', lineHeight: 1 }}>✔</span>
                <span style={{ fontSize: '14px', color: 'var(--color-text-dark)', lineHeight: 1.5 }}>
                  <strong>Точная специализация:</strong> к судебным, налоговым или корпоративным делам подключаем профильного юриста.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ color: 'var(--color-gold)', fontSize: '20px', lineHeight: 1 }}>✔</span>
                <span style={{ fontSize: '14px', color: 'var(--color-text-dark)', lineHeight: 1.5 }}>
                  <strong>Прозрачные границы:</strong> заранее отделяем регулярные работы тарифа от отдельных крупных проектов.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Когда бизнесу нужна постоянная поддержка */}
        <section style={{ padding: '60px 0', backgroundColor: 'var(--color-bg-light)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', marginBottom: '36px' }}>
              <h2 style={{ fontSize: '28px', color: 'var(--color-deep-blue)', marginBottom: '12px' }}>
                Юридические задачи уже влияют на работу бизнеса?
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                Постоянная поддержка нужна не только крупным холдингам. Она становится оправданной, когда юридические вопросы
                повторяются регулярно, переходят между руководителем и бухгалтером и требуют согласованного системного порядка работы.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '20px'
              }}
            >
              {situations.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#ffffff',
                    padding: '24px',
                    borderRadius: '8px',
                    border: '1px solid var(--color-border-light)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                  }}
                >
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(193, 160, 102, 0.15)',
                      color: 'var(--color-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      fontSize: '14px',
                      marginBottom: '16px'
                    }}
                  >
                    0{idx + 1}
                  </div>
                  <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', marginBottom: '8px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Форматы работы */}
        <section id="formats" style={{ padding: '60px 0', backgroundColor: '#ffffff', borderTop: '1px solid var(--color-border-light)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px auto' }}>
              <span
                style={{
                  color: 'var(--color-gold)',
                  fontSize: '13px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontWeight: 600
                }}
              >
                Варианты сотрудничества
              </span>
              <h2 style={{ fontSize: '28px', color: 'var(--color-deep-blue)', marginTop: '8px', marginBottom: '12px' }}>
                Форматы юридического сопровождения
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                Подбираем модель взаимодействия под реальные потребности компании — от закрытия точечных пробелов до полноценного внешнего юридического отдела.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '24px'
              }}
            >
              {formats.map((fmt, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--color-bg-light)',
                    padding: '28px',
                    borderRadius: '8px',
                    border: '1px solid var(--color-border-light)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <span
                        style={{
                          fontSize: '11px',
                          textTransform: 'uppercase',
                          fontWeight: 700,
                          letterSpacing: '0.5px',
                          padding: '4px 8px',
                          borderRadius: '4px',
                          backgroundColor: 'rgba(16, 39, 59, 0.08)',
                          color: 'var(--color-deep-blue)'
                        }}
                      >
                        {fmt.badge}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '20px', color: 'var(--color-deep-blue)', marginBottom: '10px' }}>
                      {fmt.title}
                    </h3>
                    <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-deep-blue)', marginBottom: '8px' }}>
                      Кому подходит: <span style={{ fontWeight: 400, color: 'var(--color-text-muted)' }}>{fmt.forWhom}</span>
                    </p>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
                      {fmt.desc}
                    </p>
                  </div>
                  <Link
                    href="#form"
                    className="btn btn-outline"
                    style={{
                      display: 'inline-block',
                      textAlign: 'center',
                      fontSize: '13px',
                      padding: '10px 16px'
                    }}
                  >
                    Обсудить этот формат
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Что можно передать внешней команде */}
        <section style={{ padding: '60px 0', backgroundColor: 'var(--color-bg-light)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', marginBottom: '36px' }}>
              <h2 style={{ fontSize: '28px', color: 'var(--color-deep-blue)', marginBottom: '12px' }}>
                Что можно передать внешней команде
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                Мы не заменяем все отрасли права одной общей формулировкой, а распределяем задачи между практикующими специалистами по направлениям:
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '20px'
              }}
            >
              {serviceCategories.map((cat, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#ffffff',
                    padding: '24px',
                    borderRadius: '8px',
                    border: '1px solid var(--color-border-light)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', marginBottom: '10px' }}>
                      {cat.group}
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '16px' }}>
                      {cat.desc}
                    </p>
                  </div>
                  <div>
                    <Link
                      href={cat.href}
                      style={{
                        fontSize: '13px',
                        fontWeight: 600,
                        color: 'var(--color-gold)',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      {cat.linkText} →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Как определяется объём & Границы тарифа */}
        <section style={{ padding: '60px 0', backgroundColor: '#ffffff', borderTop: '1px solid var(--color-border-light)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', marginBottom: '36px' }}>
              <span
                style={{
                  color: 'var(--color-gold)',
                  fontSize: '13px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontWeight: 600
                }}
              >
                Прозрачные условия
              </span>
              <h2 style={{ fontSize: '28px', color: 'var(--color-deep-blue)', marginTop: '8px', marginBottom: '12px' }}>
                Сначала разберём поток задач — затем предложим формат
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                Стоимость сопровождения зависит не только от количества обращений. Важно, какие задачи возникают, насколько быстро требуется реакция,
                сколько сотрудников ставят задачи, нужны ли встречи, переговоры, выезды и участие в спорах. До начала работы фиксируем состав
                обслуживания и правила для задач, которые выходят за его пределы.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '24px',
                marginBottom: '24px'
              }}
            >
              <div
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '28px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <span style={{ color: '#16a34a', fontSize: '20px' }}>✔</span>
                  <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', margin: 0 }}>
                    Обычно может входить в обслуживание:
                  </h3>
                </div>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', color: 'var(--color-text-dark)', lineHeight: 1.7 }}>
                  <li>Устные и письменные консультации в пределах согласованного объёма</li>
                  <li>Текущая проверка и юридическая корректировка договоров</li>
                  <li>Составление типовых писем, ответов, претензий и уведомлений</li>
                  <li>Короткие переговоры с контрагентами по спорным условиям</li>
                  <li>Учёт статусов поручений и регулярный отчёт руководству</li>
                </ul>
              </div>

              <div
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '28px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <span style={{ color: 'var(--color-gold)', fontSize: '20px' }}>⚖</span>
                  <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', margin: 0 }}>
                    Обычно согласуется отдельно:
                  </h3>
                </div>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', color: 'var(--color-text-dark)', lineHeight: 1.7 }}>
                  <li>Судебное представительство в арбитражных судах и судах общей юрисдикции</li>
                  <li>Крупные корпоративные сделки, M&A и слияния компаний</li>
                  <li>Комплексный юридический аудит всей деятельности бизнеса</li>
                  <li>Выездные и камеральные налоговые проверки, банкротные процедуры</li>
                  <li>Уголовно-правовая защита, судебные экспертизы, госпошлины и нотариальные расходы</li>
                </ul>
              </div>
            </div>

            <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', fontStyle: 'italic', margin: 0 }}>
              * Примечание: точный состав каждого тарифного пакета, лимиты и перечень включённых опций детально закрепляются в договоре на оказание юридических услуг.
            </p>
          </div>
        </section>

        {/* Промо-блок Юридического аудита бизнеса */}
        <section style={{ padding: '40px 0', backgroundColor: 'var(--color-deep-blue)', color: '#ffffff' }}>
          <div className="container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '30px',
                alignItems: 'center'
              }}
            >
              <div>
                <span
                  style={{
                    color: 'var(--color-gold)',
                    fontSize: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontWeight: 700
                  }}
                >
                  Диагностическая услуга
                </span>
                <h2 style={{ fontSize: '26px', color: '#ffffff', marginTop: '8px', marginBottom: '12px' }}>
                  Сначала нужно понять, где находятся риски?
                </h2>
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, margin: 0 }}>
                  Проведём комплексную или модульную проверку документов и процессов компании, зафиксируем выявленные риски
                  и подготовим приоритетный письменный план исправлений. Аудит можно провести как самостоятельный проект до начала постоянного сопровождения.
                </p>
              </div>
              <div style={{ textAlign: 'left' }}>
                <Link
                  href="/biznesu/yuridicheskoe-soprovozhdenie-biznesa/yuridicheskij-audit-biznesa/"
                  className="btn btn-primary"
                  style={{
                    display: 'inline-block',
                    padding: '14px 28px',
                    fontSize: '15px',
                    backgroundColor: 'var(--color-gold)',
                    color: '#ffffff',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontWeight: 600
                  }}
                >
                  Подробнее о юридическом аудите бизнеса →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Как начинается работа */}
        <ProcessBlock
          title="Порядок запуска юридического сопровождения"
          subtitle="Последовательные шаги от первого знакомства до регулярного приёма задач и отчётности"
          steps={workflowSteps}
        />

        {/* Как ставить задачи */}
        <section style={{ padding: '60px 0', backgroundColor: '#ffffff', borderTop: '1px solid var(--color-border-light)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', marginBottom: '36px' }}>
              <span
                style={{
                  color: 'var(--color-gold)',
                  fontSize: '13px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontWeight: 600
                }}
              >
                Регламент работы
              </span>
              <h2 style={{ fontSize: '28px', color: 'var(--color-deep-blue)', marginTop: '8px', marginBottom: '12px' }}>
                Как передавать задачи юристам
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                Чёткие вводные ускоряют рассмотрение вопроса и предотвращают взаимное недопонимание. Мы рекомендуем придерживаться простых правил:
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px'
              }}
            >
              {taskRules.map((rule, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--color-bg-light)',
                    padding: '22px',
                    borderRadius: '8px',
                    border: '1px solid var(--color-border-light)'
                  }}
                >
                  <div
                    style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      color: 'var(--color-gold)',
                      textTransform: 'uppercase',
                      marginBottom: '6px'
                    }}
                  >
                    Правило {rule.step}
                  </div>
                  <h3 style={{ fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '8px' }}>
                    {rule.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>
                    {rule.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Команда вместо одного универсального юриста */}
        <section style={{ padding: '60px 0', backgroundColor: 'var(--color-bg-light)' }}>
          <div className="container">
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-border-light)',
                borderRadius: '8px',
                padding: '36px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.04)'
              }}
            >
              <span
                style={{
                  color: 'var(--color-gold)',
                  fontSize: '13px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontWeight: 600
                }}
              >
                Организация экспертизы
              </span>
              <h2 style={{ fontSize: '26px', color: 'var(--color-deep-blue)', marginTop: '8px', marginBottom: '16px' }}>
                Для разных задач — подходящая специализация
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--color-text-dark)', lineHeight: 1.7, marginBottom: '16px' }}>
                Один штатный сотрудник объективно не обязан одинаково глубоко разбираться в договорном праве, арбитражном процессе,
                налоговых проверках, банкротстве и спорах с контролирующими органами. Попытка возложить все риски на универсального специалиста
                нередко приводит к ошибкам в узких сферах.
              </p>
              <p style={{ fontSize: '15px', color: 'var(--color-text-dark)', lineHeight: 1.7, margin: 0 }}>
                В компании «Де-Юре» мы сначала квалифицируем поступившую задачу, определяем необходимую специализацию и передаём её юристу
                с релевантной практикой. Персональный менеджер взаимодействия и состав рабочей группы согласуются при заключении договора.
              </p>
            </div>
          </div>
        </section>

        {/* Сравнение форматов */}
        <section style={{ padding: '60px 0', backgroundColor: '#ffffff', borderTop: '1px solid var(--color-border-light)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px auto' }}>
              <h2 style={{ fontSize: '28px', color: 'var(--color-deep-blue)', marginBottom: '12px' }}>
                Сравнение форматов юридического обеспечения
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                Каждый подход имеет свои особенности и границы применимости в зависимости от масштаба и специфики бизнеса:
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '24px'
              }}
            >
              <div style={{ border: '1px solid var(--color-border-light)', borderRadius: '8px', padding: '24px', backgroundColor: 'var(--color-bg-light)' }}>
                <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', marginBottom: '12px' }}>Штатный юрист</h3>
                <ul style={{ paddingLeft: '20px', fontSize: '14px', color: 'var(--color-text-dark)', lineHeight: 1.6, margin: 0 }}>
                  <li>Постоянно находится в офисе и глубоко погружён во внутреннюю рутину компании.</li>
                  <li>Ограничен одной отраслевой специализацией; сложные споры требуют внешних адвокатов.</li>
                  <li>Затраты на рабочее место, налоги, отпуска, больничные и правовые базы.</li>
                </ul>
              </div>

              <div style={{ border: '1px solid var(--color-border-light)', borderRadius: '8px', padding: '24px', backgroundColor: 'var(--color-bg-light)' }}>
                <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', marginBottom: '12px' }}>Разовые обращения</h3>
                <ul style={{ paddingLeft: '20px', fontSize: '14px', color: 'var(--color-text-dark)', lineHeight: 1.6, margin: 0 }}>
                  <li>Оплата производится только за конкретный документ или судебное заседание.</li>
                  <li>Каждый раз юрист заново изучает специфику бизнеса, структуру и историю контрагента.</li>
                  <li>Отсутствие превентивного контроля — юриста привлекают уже после наступления убытков.</li>
                </ul>
              </div>

              <div style={{ border: '2px solid var(--color-gold)', borderRadius: '8px', padding: '24px', backgroundColor: '#ffffff' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', margin: 0 }}>Внешнее сопровождение</h3>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase' }}>Системный</span>
                </div>
                <ul style={{ paddingLeft: '20px', fontSize: '14px', color: 'var(--color-text-dark)', lineHeight: 1.6, margin: 0 }}>
                  <li>Доступ к опыту целой команды: договорные, арбитражные, корпоративные и налоговые специалисты.</li>
                  <li>Заранее согласованный регламент реакции, лимиты задач и прозрачный ежемесячный бюджет.</li>
                  <li>Возможность как полной замены штатного отдела, так и точечного усиления имеющегося сотрудника.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Стоимость */}
        <PricingBlock
          title="Тарифы на юридическое сопровождение бизнеса"
          subtitle="Прозрачные модели сотрудничества. Точный состав пакета и регламент фиксируются в договоре."
          tiers={pricingTiers}
          showDemoWarning={true}
        />

        {/* Кейсы */}
        <CasesBlock
          title="Примеры организации юридической поддержки"
          subtitle="Реализованные форматы сопровождения и организационные результаты компаний"
          cases={sampleCases}
          showDemoWarning={true}
        />

        {/* FAQ */}
        <FAQBlock
          title="Часто задаваемые вопросы о сопровождении бизнеса"
          subtitle="Ответы на ключевые вопросы руководителей о регламенте, тарифах и взаимодействии"
          items={faqItems}
        />

        {/* Финальная форма */}
        <div id="form">
          <ContactsForm
            title="Обсудить юридическое сопровождение бизнеса"
            subtitle="Оставьте заявку. Мы свяжемся с вами в рабочее время, уточним специфику задач компании и предложим подходящий формат взаимодействия."
            buttonText="Обсудить сопровождение"
            analyticsGoal="legal_support_form_submit"
          />
        </div>
      </main>
    </div>
  );
}
