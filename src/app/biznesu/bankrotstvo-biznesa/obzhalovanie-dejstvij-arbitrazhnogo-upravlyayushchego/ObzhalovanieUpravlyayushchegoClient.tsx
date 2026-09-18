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

export default function ObzhalovanieUpravlyayushchegoClient() {
  const commonSituations = [
    {
      title: 'Управляющий бездействует',
      desc: 'Не разыскивает активы должника, не подаёт заявления об оспаривании подозрительных сделок, затягивает проведение инвентаризации и процедуру банкротства.'
    },
    {
      title: 'Не предоставляет информацию',
      desc: 'Игнорирует официальные запросы кредитора или должника, не направляет отчёты о деятельности, не раскрывает данные о движении средств на спецсчетах.'
    },
    {
      title: 'Нарушения при проведении торгов',
      desc: 'Утверждает невыгодное положение о торгах, занижает начальную стоимость имущества, нарушает порядок публикации сообщений в ЕФРСБ и на ЭТП.'
    },
    {
      title: 'Незаконные расходы и вознаграждение',
      desc: 'Необоснованно привлекает сторонних специалистов (юристов, оценщиков, бухгалтеров) по завышенным тарифам за счёт конкурсной массы должника.'
    },
    {
      title: 'Конфликт интересов и аффилированность',
      desc: 'Действует в интересах одного мажоритарного кредитора либо скрывает заинтересованность по отношению к должнику и его бывшему руководству.'
    }
  ];

  const urgentActions = [
    {
      step: '1',
      title: 'Зафиксируйте факт нарушения',
      text: 'Сохраните публикации в ЕФРСБ, карточку дела КАД, протоколы собраний или отчёты управляющего, в которых допущено нарушение.'
    },
    {
      step: '2',
      title: 'Подтвердите факт обращения',
      text: 'Сформируйте письменный запрос управляющему с описью вложения: без доказательства вручения суд может счесть бездействие недоказанным.'
    },
    {
      step: '3',
      title: 'Сохраните почтовые квитанции',
      text: 'Сохраните квитанции об отправке, трек-номера Почты России и отчёты об отслеживании вручения почтовой корреспонденции.'
    },
    {
      step: '4',
      title: 'Сверьте процессуальные сроки',
      text: 'Проверьте ближайшие значимые события: дату собрания кредиторов, срок подачи заявок на торги или дату завершения конкурсного производства.'
    },
    {
      step: '5',
      title: 'Откажитесь от пустых жалоб',
      text: 'Не рассылайте эмоциональные жалобы без правового анализа: необоснованное обращение лишь предупредит оппонента и лишит фактора внезапности.'
    }
  ];

  const routesMap = [
    {
      title: '1. Жалоба в арбитражный суд (ст. 60)',
      target: 'Арбитражный суд в рамках дела о банкротстве',
      pros: 'Главный судебный маршрут: признание действий/бездействия незаконными, обязание устранить нарушения, возможность отстранения.',
      cons: 'Не взыскивает убытки автоматически в рамках того же заседания.'
    },
    {
      title: '2. Обращение в СРО арбитражных управляющих',
      target: 'Саморегулируемая организация, членом которой является управляющий',
      pros: 'Дисциплинарная ответственность, предписания об устранении, штрафы внутри СРО.',
      cons: 'Не восстанавливает нарушенные имущественные права кредитора в деле о банкротстве напрямую.'
    },
    {
      title: '3. Жалоба в Росреестр',
      target: 'Управление Росреестра по субъекту РФ',
      pros: 'Возбуждение административного производства по ст. 14.13 КоАП РФ, дисквалификация при повторных нарушениях.',
      cons: 'Не отменяет решения собрания кредиторов и результаты торгов.'
    },
    {
      title: '4. Взыскание убытков с управляющего',
      target: 'Арбитражный суд (обособленный спор или отдельный иск)',
      pros: 'Реальное денежное возмещение ущерба за счёт личного имущества управляющего, его страховки и компфонда СРО.',
      cons: 'Требует отдельного доказывания размера ущерба, вины и причинно-следственной связи.'
    },
    {
      title: '5. Заявление об отстранении управляющего',
      target: 'Арбитражный суд',
      pros: 'Полное прекращение полномочий недобросовестного управляющего в текущем деле.',
      cons: 'Применяется судом только при доказанности существенных и грубых нарушений, повлекших ущерб.'
    }
  ];

  const lawyerChecks = [
    {
      title: 'Статус и право заявителя',
      desc: 'Проверяем, наделён ли клиент правом подачи жалобы: статус конкурсного кредитора, участника, должника или третьего лица.'
    },
    {
      title: 'Конкретная обязанность управляющего',
      desc: 'Выявляем прямую норму Закона о банкротстве или решения собрания, которую нарушил или не выполнил управляющий.'
    },
    {
      title: 'Нарушение прав и интересов',
      desc: 'Доказываем, к каким негативным последствиям привело нарушение: уменьшение конкурсной массы, утрата прав, затягивание сроков.'
    },
    {
      title: 'Доказательства эпизода',
      desc: 'Формируем документальную базу: запросы, отчёты, данные Росреестра, выписки спецсчетов, скриншоты торговых площадок.'
    },
    {
      title: 'Надлежащий способ защиты',
      desc: 'Определяем точное процессуальное требование: признать незаконным, обязать предоставить документы, отменить торги или отстранить.'
    },
    {
      title: 'Процессуальная срочность',
      desc: 'Оцениваем риск утраты возможности защиты из-за скорого завершения процедуры или распределения конкурсной массы.'
    }
  ];

  const processSteps: ProcessStep[] = [
    {
      number: '01',
      title: 'Правовой анализ нарушений',
      description: 'Изучаем действия или бездействие управляющего, материалы дела, переписку, отчёты и публикации в ЕФРСБ.'
    },
    {
      number: '02',
      title: 'Сбор доказательственной базы',
      description: 'Фиксируем несоблюдение законных сроков, отсутствие ответов на запросы, неправомерные траты или дефекты торгов.'
    },
    {
      number: '03',
      title: 'Выбор оптимального маршрута',
      description: 'Определяем целесообразность обращения в арбитражный суд, СРО или Росреестр в зависимости от необходимого результата.'
    },
    {
      number: '04',
      title: 'Подготовка мотивированной жалобы',
      description: 'Составляем юридически выверенную жалобу со ссылками на Закон о банкротстве, судебную практику и подтверждающие документы.'
    },
    {
      number: '05',
      title: 'Судебное представительство',
      description: 'Защищаем позицию заявителя в заседаниях арбитражного суда первой инстанции, заявляем обеспечительные меры.'
    },
    {
      number: '06',
      title: 'Контроль исполнения и взыскание',
      description: 'Контролируем устранение нарушений управляющим либо инициируем взыскание убытков со страховой компании и компфонда.'
    }
  ];

  const resultsList = [
    'Признание действий или бездействия арбитражного управляющего незаконными по ст. 60 Закона о банкротстве;',
    'Судебное обязание управляющего предоставить запрашиваемые документы, отчёты и бухгалтерские сведения;',
    'Приостановление либо отмена незаконных торгов по продаже имущества предприятия-должника;',
    'Обязание провести собрание кредиторов с включением обязательных вопросов повестки дня;',
    'Отстранение недобросовестного управляющего от исполнения обязанностей в деле о банкротстве;',
    'Взыскание убытков, причиненных незаконными действиями управляющего, за счёт страхования и компфонда СРО.'
  ];

  const pricingTiers: PricingTier[] = [
    {
      name: 'Правовой анализ нарушений',
      price: 'от 10 000 ₽',
      period: '1–2 рабочих дня',
      description: 'Оценка действий или бездействия управляющего, перспектив судебного спора и выбора маршрута защиты.',
      features: [
        'Изучение отчётов управляющего и публикаций ЕФРСБ',
        'Проверка соблюдения норм Закона о банкротстве',
        'Анализ доказательств нарушения прав заявителя',
        'Письменное заключение с рекомендациями'
      ],
      isPopular: false,
      ctaText: 'Заказать аудит',
      ctaHref: '#contacts'
    },
    {
      name: 'Досудебное обращение к управляющему',
      price: 'от 10 000 ₽',
      period: 'от 2 рабочих дней',
      description: 'Подготовка официального требования/запроса с фиксацией обязанности и предупреждением об ответственности.',
      features: [
        'Составление правового запроса со ссылками на закон',
        'Формирование описи вложения и отправка',
        'Фиксация факта получения корреспонденции',
        'Подготовка доказательств для суда при отсутствии ответа'
      ],
      isPopular: false,
      ctaText: 'Подготовить запрос',
      ctaHref: '#contacts'
    },
    {
      name: 'Жалоба в арбитражный суд (ст. 60)',
      price: 'от 30 000 ₽',
      period: 'от 4 рабочих дней',
      description: 'Подготовка и подача мотивированной жалобы на управляющего в рамках дела о банкротстве.',
      features: [
        'Формирование правовой позиции со ссылками на ВС РФ',
        'Сбор полного доказательственного комплекта',
        'Ходатайства о принятии обеспечительных мер',
        'Направление сторонам и электронная подача в суд'
      ],
      isPopular: true,
      badge: 'Популярный',
      ctaText: 'Подать жалобу',
      ctaHref: '#contacts'
    },
    {
      name: 'Комплексное ведение спора в суде',
      price: 'от 50 000 ₽',
      period: 'на весь период дела',
      description: 'Полное судебное представительство под ключ до вынесения итогового определения арбитражного суда.',
      features: [
        'Все действия тарифа «Жалоба в арбитражный суд»',
        'Личное или онлайн участие юриста во всех заседаниях',
        'Отработка письменных отзывов и возражений управляющего',
        'Параллельные обращения в СРО и Росреестр (при необходимости)'
      ],
      isPopular: false,
      ctaText: 'Защитить права в суде',
      ctaHref: '#contacts'
    }
  ];

  const casesData: CaseData[] = [
    {
      title: 'Кредитор: управляющий не исследует известный актив',
      result: 'Суд признал бездействие незаконным и обязал управляющего оспорить отчуждение склада',
      duration: '4 месяца',
      description: 'Кредитор передал управляющему сведения о выводе объекта недвижимости должника перед процедурой, но управляющий бездействовал более 6 месяцев.',
      points: [
        'Зафиксировали факт вручения сведений и отсутствие мотивированного ответа управляющего',
        'Подали жалобу в арбитражный суд по ст. 60 Закона о банкротстве с требованием пресечь бездействие',
        'Доказали суду реальную перспективу возврата актива стоимостью 32 млн ₽ в конкурсную массу',
        'Суд признал бездействие незаконным и обязал принять меры к возврату имущества'
      ]
    },
    {
      title: 'Кредитор: нет доступа к сведениям и нарушено участие',
      result: 'Суд обязал управляющего предоставить полные выписки по спецсчетам и отчёты',
      duration: '2,5 месяца',
      description: 'Конкурсный управляющий уклонялся от раскрытия финансовой информации и движения денежных средств, полученных от сдачи имущества в аренду.',
      points: [
        'Обосновали безусловное право конкурсного кредитора на получение информации о процедуре',
        'Задокументировали систематический характер отказов и игнорирования запросов',
        'Подготовили жалобу в арбитражный суд с одновременным уведомлением СРО',
        'Суд полностью удовлетворил требования и обязал раскрыть выписки в течение 10 дней'
      ]
    },
    {
      title: 'Должник или третье лицо: спор о полномочиях управляющего',
      result: 'Суд признал незаконным требование управляющего о передаче личного имущества учредителя',
      duration: '3 месяца',
      description: 'Управляющий пытался изъять производственное оборудование, принадлежащее сторонней организации и находившееся у должника на ответственном хранении.',
      points: [
        'Предоставили первичные документы об истории приобретения и праве собственности третьего лица',
        'Доказали выход управляющего за пределы предоставленных законом полномочий',
        'Защитили законного собственника от неправомерного включения имущества в конкурсную массу',
        'Суд запретил управляющему совершать любые распорядительные действия в отношении объекта'
      ]
    }
  ];

  const faqItems: FAQItem[] = [
    {
      question: 'Куда жаловаться на арбитражного управляющего?',
      answer: 'Зависит от цели. Для защиты права в конкретном деле обычно оценивают судебную жалобу в рамках банкротства. СРО и Росреестр решают контрольные вопросы, а убытки и обжалование судебного акта могут потребовать самостоятельного маршрута.'
    },
    {
      question: 'Можно ли пожаловаться, если управляющий не отвечает?',
      answer: 'Можно оценить этот вариант, но самого отсутствия ответа недостаточно. Важны содержание и доставка обращения, обязанность управляющего, срок с учётом конкретного события и то, какое право нарушено бездействием.'
    },
    {
      question: 'Жалоба автоматически отстранит управляющего?',
      answer: 'Нет. Отстранение — отдельная мера, для которой суд оценивает установленные нарушения и применимые основания. Страница и договор не должны обещать её применение.'
    },
    {
      question: 'Можно одновременно обратиться в суд, СРО и Росреестр?',
      answer: 'Иногда маршруты сочетаются, но у них разные цели и последствия. Сначала полезно определить требуемый результат, чтобы обращения не противоречили друг другу и не превращались в дублирующую рассылку.'
    },
    {
      question: 'Можно ли отменить торги жалобой на управляющего?',
      answer: 'Не всегда. Спор о действиях управляющего, спор о торгах, обеспечительные меры и обжалование судебного акта могут иметь разные предметы и требования. Нужны документы и стадия события.'
    },
    {
      question: 'Что нужно доказать в суде?',
      answer: 'Проверяются статус заявителя, конкретное действие или бездействие, обязанность управляющего, нарушение права или законного интереса, доказательства эпизода и надлежащий способ защиты.'
    },
    {
      question: 'Можно ли взыскать с управляющего убытки?',
      answer: 'Такой способ существует, но не включается автоматически в жалобу. Потребуются отдельная проверка противоправности, размера потерь, причинной связи, субъектов и доступных источников возмещения.'
    },
    {
      question: 'Что делать, если проблема уже отражена в судебном акте?',
      answer: 'Нужно разграничить поведение управляющего и вывод суда. Если требуется изменить судебный акт, может быть нужен порядок его обжалования, а не повторная жалоба на управляющего.'
    },
    {
      question: 'Сколько времени занимает спор?',
      answer: 'Продолжительность зависит от маршрута, стадии дела, извещений, доказательств, заседаний и обжалования. До анализа документов нельзя публиковать универсальный срок.'
    },
    {
      question: 'Можно ли работать дистанционно?',
      answer: 'Да, когда материалы можно безопасно передать, а процесс допускает дистанционную работу. Необходимость очного участия и поездок согласуется отдельно.'
    }
  ];

  return (
    <div className="page-wrapper">
      <Header />

      <main>
        {/* Хлебные крошки */}
        <div style={{ background: 'var(--color-bg-light)', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container" style={{ padding: '12px 16px' }}>
            <nav aria-label="Хлебные крошки" style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>
              <Link href="/" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>Главная</Link>
              <span style={{ margin: '0 8px' }}>/</span>
              <Link href="/biznesu/" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>Бизнесу</Link>
              <span style={{ margin: '0 8px' }}>/</span>
              <Link href="/biznesu/bankrotstvo-biznesa/" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>Банкротство бизнеса</Link>
              <span style={{ margin: '0 8px' }}>/</span>
              <span style={{ color: 'var(--color-text)' }}>Обжалование действий арбитражного управляющего</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <MilitaryHero
          badge="Банкротство бизнеса • Спор с арбитражным управляющим"
          title="Обжалование действий арбитражного управляющего в Липецке"
          subtitle="Проверим конкретное действие или бездействие, нарушение вашего права и нужный результат. Подготовим судебную жалобу либо обращение в компетентный орган и представим позицию."
          trustItems={[
            'Анализ нарушений по ст. 60 Закона о банкротстве',
            'Маршрутизация: арбитражный суд, СРО управляющих или Росреестр',
            'Пресечение бездействия, незаконной реализации имущества и расходов'
          ]}
          primaryButtonText="Разобрать действия управляющего"
          primaryButtonHref="#contacts"
          secondaryButtonText="Позвонить: +7 (910) 350-31-11"
          secondaryButtonHref="tel:+79103503111"
        />

        {/* Срочный блок: Что сделать сейчас */}
        <section className="section" style={{ background: '#fff', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ maxWidth: '840px', margin: '0 auto 36px', textAlign: 'center' }}>
              <span className="badge" style={{ marginBottom: '12px' }}>Срочные действия заявителя</span>
              <h2 style={{ fontSize: '26px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '16px' }}>
                Что сделать сразу при обнаружении нарушений арбитражного управляющего
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Суд оценивает только надлежащим образом зафиксированные доказательства. Эмоциональные претензии без процессуальной формы судом не принимаются.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '20px', marginBottom: '24px' }}>
              {urgentActions.map((action, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'var(--color-bg-light)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                    padding: '22px 20px',
                    borderTop: '3px solid var(--color-gold)'
                  }}
                >
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'var(--color-deep-blue)',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '14px',
                      marginBottom: '12px'
                    }}
                  >
                    {action.step}
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-deep-blue)', marginBottom: '8px' }}>
                    {action.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    {action.text}
                  </p>
                </div>
              ))}
            </div>

            <div
              style={{
                background: 'var(--gradient-cream)',
                border: '1px solid var(--color-border)',
                borderRadius: '8px',
                padding: '16px 20px',
                fontSize: '13px',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.6
              }}
            >
              <strong style={{ color: 'var(--color-deep-blue)' }}>Правило процессуальной цели: </strong>
              Отстранение управляющего не происходит автоматически. Суд применяет крайние меры лишь при доказанности неоднократных или грубых нарушений, повлекших реальный ущерб правам кредиторов или должника.
            </div>
          </div>
        </section>

        {/* Типичные ситуации */}
        <section className="section" style={{ background: 'var(--color-bg-light)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto 36px', textAlign: 'center' }}>
              <span className="badge" style={{ marginBottom: '12px' }}>Поводы для жалобы</span>
              <h2 style={{ fontSize: '26px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '16px' }}>
                Типичные нарушения в работе арбитражных управляющих
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)' }}>
                Поможем пресечь злоупотребления и восстановить законный порядок ведения процедуры банкротства.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '20px' }}>
              {commonSituations.map((sit, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#fff',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                    padding: '24px',
                    borderTop: '3px solid var(--color-deep-blue)'
                  }}
                >
                  <h3 style={{ fontSize: '17px', fontWeight: 600, color: 'var(--color-deep-blue)', marginBottom: '10px' }}>
                    {sit.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    {sit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Карта 5 маршрутов */}
        <section className="section" style={{ background: '#fff' }}>
          <div className="container">
            <div style={{ maxWidth: '840px', margin: '0 auto 36px', textAlign: 'center' }}>
              <span className="badge" style={{ marginBottom: '12px' }}>Маршрутизация</span>
              <h2 style={{ fontSize: '26px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '16px' }}>
                Карта маршрутов: куда и с какой целью подавать жалобу
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)' }}>
                У каждого органа — своя компетенция. Выбор неверного адресата приведёт к потере времени и формальным отпискам.
              </p>
            </div>

            <div style={{ maxWidth: '880px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {routesMap.map((route, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'var(--color-bg-light)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                    padding: '20px 24px',
                    borderLeft: '4px solid var(--color-gold)'
                  }}
                >
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '6px' }}>
                    {route.title}
                  </h3>
                  <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginBottom: '10px' }}>
                    <strong>Адресат: </strong>{route.target}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '10px', fontSize: '13px' }}>
                    <div style={{ background: '#fff', padding: '10px 14px', borderRadius: '6px' }}>
                      <strong style={{ color: '#2e7d32' }}>Что даёт: </strong>
                      <span style={{ color: 'var(--color-text)' }}>{route.pros}</span>
                    </div>
                    <div style={{ background: '#fff', padding: '10px 14px', borderRadius: '6px' }}>
                      <strong style={{ color: '#d32f2f' }}>Чего не заменяет: </strong>
                      <span style={{ color: 'var(--color-text)' }}>{route.cons}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Что проверит юрист */}
        <section className="section" style={{ background: 'var(--color-bg-light)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto 36px', textAlign: 'center' }}>
              <span className="badge" style={{ marginBottom: '12px' }}>Проверка обстоятельств</span>
              <h2 style={{ fontSize: '26px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '16px' }}>
                Что проверит юрист перед подачей жалобы
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)' }}>
                Шесть контрольных факторов, исключающих риск признания жалобы необоснованной.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '20px' }}>
              {lawyerChecks.map((check, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#fff',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                    padding: '24px',
                    borderTop: '3px solid var(--color-gold)'
                  }}
                >
                  <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-deep-blue)', marginBottom: '10px' }}>
                    {check.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    {check.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <ProcessBlock
          title="Порядок обжалования действий арбитражного управляющего"
          subtitle="Последовательный процессуальный маршрут от сбора доказательств нарушений до судебного контроля исполнения."
          steps={processSteps}
        />

        {/* Результаты */}
        <section className="section" style={{ background: 'var(--color-bg-light)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto 36px', textAlign: 'center' }}>
              <span className="badge" style={{ marginBottom: '12px' }}>Проверяемые результаты</span>
              <h2 style={{ fontSize: '26px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '16px' }}>
                Достижимые результаты обжалования
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)' }}>
                Мы формулируем цель работы в виде конкретных процессуальных последствий, предусмотренных законодательством о банкротстве.
              </p>
            </div>

            <div
              style={{
                maxWidth: '780px',
                margin: '0 auto 24px',
                background: '#fff',
                border: '1px solid var(--color-border)',
                borderRadius: '8px',
                padding: '24px 28px'
              }}
            >
              <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {resultsList.map((res, idx) => (
                  <li key={idx} style={{ fontSize: '14px', color: 'var(--color-text)', lineHeight: 1.5 }}>
                    {res}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
              <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', fontStyle: 'italic', margin: 0 }}>
                Суд оценивает соразмерность допущенных нарушений и их влияние на права заявителя. Убытки и отстранение требуют повышенного стандарта доказывания.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <PricingBlock
          title="Стоимость услуг по обжалованию действий управляющего"
          subtitle="Цена зависит от выбранного маршрута (суд, СРО, Росреестр), количества эпизодов, сложности доказательств и числа заседаний. Расходы на публикации и экспертизы оплачиваются отдельно."
          tiers={pricingTiers}
        />

        {/* Команда */}
        <section className="section" style={{ background: '#fff', borderTop: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
              <span className="badge" style={{ marginBottom: '12px' }}>Профильные юристы</span>
              <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
                Кто защитит ваши интересы в споре с управляющим
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Споры с арбитражными управляющими ведёт рабочая группа компании «Де-Юре» по арбитражным банкротным делам. Мы досконально знаем регламенты СРО, внутренние стандарты деятельности управляющих и порядок доказывания нарушений в арбитражных судах.
              </p>
            </div>
          </div>
        </section>

        {/* Cases */}
        <CasesBlock
          title="Судебная практика по спорам с управляющими"
          subtitle="Реальные примеры пресечения бездействия и незаконных действий арбитражных управляющих."
          cases={casesData}
          showDemoWarning={true}
        />

        {/* FAQ */}
        <FAQBlock
          title="Частые вопросы об обжаловании действий управляющего"
          items={faqItems}
        />

        {/* Смежные задачи и перелинковка */}
        <section className="section" style={{ background: 'var(--color-bg-light)', borderTop: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto 32px', textAlign: 'center' }}>
              <span className="badge" style={{ marginBottom: '12px' }}>Смежные направления</span>
              <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
                Другие направления в банкротстве бизнеса
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                Обжалование действий управляющего часто связано с контролем конкурсной массы и представлением интересов кредиторов.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '16px', maxWidth: '960px', margin: '0 auto' }}>
              <Link
                href="/biznesu/bankrotstvo-biznesa/predstavlenie-interesov-kreditora/"
                style={{
                  background: '#fff',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                  padding: '20px',
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
              >
                <strong style={{ color: 'var(--color-deep-blue)', fontSize: '15px' }}>Представительство кредитора</strong>
                <span style={{ color: 'var(--color-text-secondary)', fontSize: '13px' }}>Комплексное сопровождение кредитора во всей процедуре.</span>
              </Link>
              <Link
                href="/biznesu/bankrotstvo-biznesa/osparivanie-sdelok-pri-bankrotstve/"
                style={{
                  background: '#fff',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                  padding: '20px',
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
              >
                <strong style={{ color: 'var(--color-deep-blue)', fontSize: '15px' }}>Оспаривание сделок должника</strong>
                <span style={{ color: 'var(--color-text-secondary)', fontSize: '13px' }}>Возврат активов при уклонении управляющего от подачи заявлений.</span>
              </Link>
              <Link
                href="/biznesu/bankrotstvo-biznesa/vklyuchenie-v-reestr-trebovanij-kreditorov/"
                style={{
                  background: '#fff',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                  padding: '20px',
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
              >
                <strong style={{ color: 'var(--color-deep-blue)', fontSize: '15px' }}>Включение в реестр</strong>
                <span style={{ color: 'var(--color-text-secondary)', fontSize: '13px' }}>Установление первоначального процессуального статуса в суде.</span>
              </Link>
              <Link
                href="/biznesu/bankrotstvo-biznesa/zashchita-ot-subsidiarnoj-otvetstvennosti/"
                style={{
                  background: '#fff',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                  padding: '20px',
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
              >
                <strong style={{ color: 'var(--color-deep-blue)', fontSize: '15px' }}>Субсидиарная ответственность</strong>
                <span style={{ color: 'var(--color-text-secondary)', fontSize: '13px' }}>Защита руководства от необоснованных претензий управляющего.</span>
              </Link>
              <Link
                href="/biznesu/bankrotstvo-biznesa/bankrotstvo-kompanii-so-storony-dolzhnika/"
                style={{
                  background: '#fff',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                  padding: '20px',
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
              >
                <strong style={{ color: 'var(--color-deep-blue)', fontSize: '15px' }}>Банкротство должника</strong>
                <span style={{ color: 'var(--color-text-secondary)', fontSize: '13px' }}>Стратегия защиты предприятия-должника при конфликтах с управляющим.</span>
              </Link>
              <Link
                href="/biznesu/bankrotstvo-biznesa/"
                style={{
                  background: '#fff',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                  padding: '20px',
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
              >
                <strong style={{ color: 'var(--color-deep-blue)', fontSize: '15px' }}>Хаб: Банкротство бизнеса</strong>
                <span style={{ color: 'var(--color-text-secondary)', fontSize: '13px' }}>Все направления юридической помощи в делах о несостоятельности.</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Форма контактов */}
        <div id="contacts">
          <ContactsForm
            title="Разобрать действия управляющего с юристом"
            subtitle="Сообщите номер дела, вашу процессуальную роль и конкретное действие или бездействие управляющего. Юрист конфиденциально определит компетентный маршрут и перспективу жалобы."
          />
        </div>
      </main>
    </div>
  );
}
