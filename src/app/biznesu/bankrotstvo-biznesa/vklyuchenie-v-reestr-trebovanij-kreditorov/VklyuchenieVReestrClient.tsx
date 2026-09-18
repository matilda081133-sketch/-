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

export default function VklyuchenieVReestrClient() {
  const creditorSegments = [
    {
      title: 'Поставщик / подрядчик',
      desc: 'Узнал о наблюдении или конкурсном производстве после неоплаты поставки или работ. Проверим публикацию, срок, первичные документы и состав требования.'
    },
    {
      title: 'Кредитор с судебным актом',
      desc: 'Решение и исполнительный лист уже есть, но должник вошёл в банкротство. Определим порядок заявления в деле без иллюзий автоматического включения.'
    },
    {
      title: 'Залоговый кредитор',
      desc: 'Требуется установить сумму и подтвердить залоговый статус. Проверим предмет, регистрацию, объём обеспечения и специальные доказательства.'
    },
    {
      title: 'Кредитор без судебного акта',
      desc: 'Долг следует из договора, но должник или управляющий может заявить возражения. Подготовим доказательственную базу и поддержим позицию в заседании.'
    },
    {
      title: 'Опоздавший кредитор',
      desc: 'Срок, вероятно, истёк или публикация обнаружена поздно. Не даём пустых обещаний: проверим процедуру, причины пропуска и режим удовлетворения.'
    }
  ];

  const urgentActions = [
    {
      step: '1',
      title: 'Найдите номер дела',
      text: 'Найдите номер дела в Картотеке арбитражных дел (КАД) либо подготовьте точный ИНН/ОГРН компании-должника.'
    },
    {
      step: '2',
      title: 'Зафиксируйте дату публикации',
      text: 'Сохраните ссылку и точную дату сообщения в ЕФРСБ о введении конкретной процедуры банкротства.'
    },
    {
      step: '3',
      title: 'Разделите состав долга',
      text: 'Зафиксируйте основание долга и дату его возникновения, не смешивая основной долг, проценты, неустойку и судебные расходы.'
    },
    {
      step: '4',
      title: 'Не подавайте шаблон',
      text: 'Не направляйте шаблонное заявление до проверки адресатов, способа подачи, госпошлины и доказательств направления участникам.'
    }
  ];

  const routeChecks = [
    {
      question: 'Дело о банкротстве возбуждено и введена процедура?',
      yes: 'Определяем процедуру, даты и публикацию в ЕФРСБ.',
      no: 'Не обещаем реестр; проверяем обычное взыскание или заявление о банкротстве.'
    },
    {
      question: 'Требование возникло до принятия заявления о банкротстве?',
      yes: 'Проверяем реестровый режим, очередь и применимые исключения.',
      no: 'Проверяем признаки текущего платежа: текущие долги в реестр не включаются.'
    },
    {
      question: 'Есть вступивший в силу судебный акт?',
      yes: 'Используем его преюдициальное значение и проверяем состав присуждённого.',
      no: 'Готовим полный комплект первичных доказательств возникновения и размера долга.'
    },
    {
      question: 'Есть залог или иное обеспечение?',
      yes: 'Отдельно подтверждаем статус, регистрацию и предмет обеспечения.',
      no: 'Заявляем денежное требование в реестр в общем порядке.'
    },
    {
      question: 'Срок подачи, вероятно, истёк?',
      yes: 'Срочно оцениваем процедуру, уважительность причин и последствия пропуска.',
      no: 'Формируем комплект документов и не откладываем направление заявления.'
    }
  ];

  const lawyerChecks = [
    {
      title: 'Дело и процессуальный срок',
      desc: 'Суд, номер дела, стадия процедуры, дата публикации в ЕФРСБ, ближайшее заседание и применимый порядок исчисления сроков.'
    },
    {
      title: 'Правовой режим требования',
      desc: 'Реестровое или текущее требование, очередность удовлетворения, залоговый статус, штрафные санкции и мораторные проценты.'
    },
    {
      title: 'Договорное основание',
      desc: 'Договор, спецификации, реальное встречное исполнение, товарные накладные, акты, полномочия лиц, переписка и судебные акты.'
    },
    {
      title: 'Обоснованный расчёт',
      desc: 'Раздельный расчёт основного долга, неустоек, процентов по ст. 395 ГК РФ и судебных расходов на юридически значимую дату.'
    },
    {
      title: 'Отработка возражений',
      desc: 'Позиции должника, арбитражного управляющего и других кредиторов: сроки давности, аффилированность, мнимость и риски недействительности.'
    },
    {
      title: 'Соблюдение порядка подачи',
      desc: 'Электронная подача через Мой Арбитр, подтверждение отправки управляющему и должнику, госпошлина или законные основания для льготы.'
    }
  ];

  const serviceComponents = [
    {
      name: 'Диагностика требования',
      scope: 'Проверка дела, публикаций, режима долга, срока и рисков возражений.',
      limit: 'Не является гарантией включения: решение принимает арбитражный суд.'
    },
    {
      name: 'Расчёт и комплект доказательств',
      scope: 'Формирование структуры требования, выверенный расчёт и реестр приложений.',
      limit: 'Бухгалтерская экспертиза и восстановление утраченного учёта оплачиваются отдельно.'
    },
    {
      name: 'Подготовка заявления',
      scope: 'Составление мотивированного заявления, ходатайств и правовой аргументации под конкретное дело.',
      limit: 'Не используем типовые пустые шаблоны без индивидуальной специфики спора.'
    },
    {
      name: 'Направление и подача',
      scope: 'Проверка адресов участников, подтверждений вручения и официальная электронная подача.',
      limit: 'Порядок направления и реквизиты сверяются строго на дату подачи.'
    },
    {
      name: 'Отработка возражений',
      scope: 'Анализ доводов управляющего и кредиторов, подготовка мотивированных письменных возражений.',
      limit: 'Самостоятельный встречный спор о чужом требовании — отдельное процессуальное поручение.'
    },
    {
      name: 'Участие в заседании',
      scope: 'Представительство интересов кредитора при проверке обоснованности требования в суде.',
      limit: 'Количество заседаний и инстанций согласовывается в договоре.'
    },
    {
      name: 'Контроль судебного акта',
      scope: 'Получение и анализ определения суда, контроль включения сведений в реестр и рекомендации по дальнейшим шагам.',
      limit: 'Дальнейшее участие в собраниях и процедуре — в рамках комплексного сопровождения BIZ-BKR-02.'
    }
  ];

  const documentTypes = [
    'Номер арбитражного дела либо наименование и ИНН/ОГРН должника; ссылка или дата публикации о процедуре;',
    'Договор со всеми приложениями, спецификациями, заказами и документами о полномочиях подписантов;',
    'Первичные документы: акты приёма-передачи, товарные накладные, УПД, счета-фактуры, выписки по счёту;',
    'Подробный расчёт основного долга, процентов, неустойки и судебных расходов;',
    'Претензионная переписка, решение суда, исполнительный лист и сведения об исполнительном производстве (при наличии);',
    'Документы о залоге, поручительстве, независимой гарантии, удержании или ином обеспечении;',
    'Полученные возражения участников, определения суда об оставлении без движения или отзывы управляющего.'
  ];

  const processSteps: ProcessStep[] = [
    {
      number: '01',
      title: 'Находим дело и проверяем публикацию',
      description: 'Изучаем карточку дела в КАД и публикации в ЕФРСБ, фиксируем процедуру банкротства, процессуальные сроки и ближайшие заседания.'
    },
    {
      number: '02',
      title: 'Квалифицируем правовой режим требования',
      description: 'Определяем реестровый или текущий режим долга, очередность удовлетворения, обеспечение и последствия возможного пропуска срока.'
    },
    {
      number: '03',
      title: 'Формируем доказательственную базу',
      description: 'Проверяем первичные документы, реальность хозяйственных операций, расчёт задолженности, судебные акты и риски возражений.'
    },
    {
      number: '04',
      title: 'Готовим и подаём заявление',
      description: 'Составляем мотивированное заявление, направляем копии управляющему и должнику, подаём документы в арбитражный суд через «Мой Арбитр».'
    },
    {
      number: '05',
      title: 'Защищаем требование в суде',
      description: 'Отвечаем на отзывы и возражения участников дела, представляем дополнительные доказательства и участвуем в судебном заседании.'
    },
    {
      number: '06',
      title: 'Проверяем судебный акт и реестр',
      description: 'Анализируем вынесенное определение суда, контролируем отражение требований в реестре и формулируем план дальнейших действий.'
    }
  ];

  const resultsList = [
    'Определены процедура банкротства, применимый порядок исчисления срока и точный правовой режим требования;',
    'Подготовлен обоснованный расчёт задолженности и доказательственный комплект первичных документов;',
    'Заявление заблаговременно направлено участникам дела и зарегистрировано арбитражным судом;',
    'Позиция кредитора профессионально аргументирована при получении возражений управляющего или иных кредиторов;',
    'Получен судебный акт арбитражного суда об установлении требования либо выработан план процессуального обжалования;',
    'Определены дальнейшие шаги: переход к комплексному сопровождению в процедуре (BIZ-BKR-02) или контроль расчётов.'
  ];

  const pricingTiers: PricingTier[] = [
    {
      name: 'Срочная диагностика требования',
      price: 'от 5 000 ₽',
      period: '1–2 рабочих дня',
      description: 'Экспресс-анализ карточки дела, публикации в ЕФРСБ, сроков и правового режима задолженности.',
      features: [
        'Проверка стадии банкротства и публикаций в ЕФРСБ',
        'Анализ реестрового/текущего характера требования',
        'Оценка рисков пропуска процессуального срока',
        'Письменное заключение с планом действий'
      ],
      isPopular: false,
      ctaText: 'Заказать диагностику',
      ctaHref: '#contacts'
    },
    {
      name: 'Подготовка и подача заявления',
      price: 'от 15 000 ₽',
      period: 'от 3 рабочих дней',
      description: 'Полный комплект документов для включения в реестр при отсутствии острого судебного спора.',
      features: [
        'Правовой анализ первичных документов и договоров',
        'Составление расчёта основного долга и неустоек',
        'Подготовка мотивированного заявления в арбитражный суд',
        'Направление копий участникам и электронная подача в суд'
      ],
      isPopular: true,
      badge: 'Базовый',
      ctaText: 'Подать заявление',
      ctaHref: '#contacts'
    },
    {
      name: 'Ведение требования при возражениях',
      price: 'от 30 000 ₽',
      period: 'на период рассмотрения',
      description: 'Судебное представительство при активных возражениях управляющего, должника или кредиторов.',
      features: [
        'Все действия тарифа «Подготовка и подача»',
        'Подготовка мотивированных письменных возражений и пояснений',
        'Сбор дополнительных доказательств реальности сделки',
        'Личное или онлайн участие в судебных заседаниях суда'
      ],
      isPopular: false,
      ctaText: 'Защитить требование',
      ctaHref: '#contacts'
    },
    {
      name: 'Обжалование судебного акта',
      price: 'от 20 000 ₽',
      period: 'по процессуальным срокам',
      description: 'Апелляционное или кассационное обжалование при частичном включении или отказе суда.',
      features: [
        'Детальный анализ определения арбитражного суда первой инстанции',
        'Выявление судебных ошибок и нарушений норм материального права',
        'Составление и подача мотивированной жалобы',
        'Представительство интересов в арбитражном апелляционном суде'
      ],
      isPopular: false,
      ctaText: 'Обсудить обжалование',
      ctaHref: '#contacts'
    }
  ];

  const casesData: CaseData[] = [
    {
      title: 'Поставка без судебного акта: требование при возражениях',
      result: 'Требование поставщика в размере 4,2 млн ₽ включено в третью очередь реестра',
      duration: '3 месяца',
      description: 'Компания поставила производственное сырьё, должник вошёл в наблюдение без оплаты. Управляющий заявил возражения о недоказанности реальности поставки.',
      points: [
        'Проверили публикацию в ЕФРСБ и уложились в 30-дневный срок для первого собрания',
        'Собрали полную первичную цепочку: спецификации, УПД с отметками склада, путевые листы перевозчика и переписку сторон',
        'Подготовили детальный контррасчёт и отработали доводы управляющего в судебном заседании',
        'Арбитражный суд признал требование полностью обоснованным и включил в реестр'
      ]
    },
    {
      title: 'Требование по вступившему в силу решению суда',
      result: 'Требование 8,6 млн ₽ включено в реестр в конкурсном производстве',
      duration: '2 месяца',
      description: 'Кредитор имел исполнительный лист по спору о строительном подряде, но в отношении должника было открыто конкурсное производство.',
      points: [
        'Проанализировали состав присуждённой суммы, разделив основной долг, неустойку и судебные издержки',
        'Сформировали заявление с преюдициальной ссылкой на решение арбитражного суда',
        'Заблаговременно уведомили конкурсного управляющего и подтвердили отправку суду',
        'Требование установлено судом без затягивания сроков'
      ]
    },
    {
      title: 'Залоговый кредитор: подтверждение специального статуса',
      result: 'Установлен статус залогового кредитора на производственное оборудование стоимостью 14 млн ₽',
      duration: '2,5 месяца',
      description: 'У кредитора имелся договор залога оборудования, однако управляющий оспаривал действительность залогового обременения и идентификацию предметов.',
      points: [
        'Провели правовой анализ регистрации уведомлений о залоге движимого имущества',
        'Сформировали доказательственную базу фактического нахождения предметов залога у должника',
        'Разделили требования на обеспеченные залогом и не обеспеченные',
        'Суд признал требование залоговым с правом преимущественного удовлетворения за счёт предмета залога'
      ]
    }
  ];

  const faqItems: FAQItem[] = [
    {
      question: 'Как узнать, началось ли банкротство должника?',
      answer: 'Проверьте карточку дела в Картотеке арбитражных дел и публикации в ЕФРСБ по наименованию или ИНН. Для расчёта срока важны конкретная процедура и дата соответствующей публикации, а не дата, когда кредитор узнал о долге.'
    },
    {
      question: 'Сколько времени есть на подачу требования?',
      answer: 'Универсального срока для всех процедур нет. Например, для участия в первом собрании при наблюдении закон связывает срок с публикацией о введении наблюдения, а закрытие реестра в конкурсном производстве — с публикацией об открытии конкурсного производства. Юрист проверяет конкретное дело и действующую редакцию закона.'
    },
    {
      question: 'Что будет, если срок пропущен?',
      answer: 'Последствия зависят от процедуры, вида требования и причин пропуска. Нельзя заранее обещать восстановление или включение на обычных условиях: сначала нужно проверить публикации, документы и применимые исключения.'
    },
    {
      question: 'Нужно ли включать в реестр текущий платёж?',
      answer: 'Как правило, требования по текущим платежам в реестр не включаются и предъявляются по другому маршруту. Квалификация зависит от момента и основания возникновения обязательства, поэтому её нужно провести до подачи заявления.'
    },
    {
      question: 'Достаточно ли решения суда и исполнительного листа?',
      answer: 'Судебный акт существенно подтверждает долг, но кредитору всё равно нужно заявить требование в деле о банкротстве в установленном порядке и приложить необходимые документы. Автоматического внесения только из-за исполнительного листа нет.'
    },
    {
      question: 'Можно ли заявить долг без решения суда?',
      answer: 'Да, если требование подтверждается допустимыми доказательствами. Суд проверит его обоснованность, размер и режим; при возражениях потребуется полноценная доказательственная позиция.'
    },
    {
      question: 'Кто может возражать против требования?',
      answer: 'Возражения могут заявлять участники, которым такое право даёт Закон о банкротстве. Юрист проверяет их полномочия, сроки и содержание доводов и готовит ответ с доказательствами.'
    },
    {
      question: 'Нужно ли платить госпошлину?',
      answer: 'Это зависит от существа требования и наличия оснований для льготы. Размер и реквизиты нужно проверять непосредственно перед подачей; на странице не размещается универсальная сумма без юридической актуализации.'
    },
    {
      question: 'Что происходит после судебного акта?',
      answer: 'Нужно проверить содержание определения и сведения о требовании. Если кредитору требуется участие в собраниях, контроль процедуры и расчётов, это отдельное комплексное сопровождение BIZ-BKR-02.'
    },
    {
      question: 'Гарантирует ли включение возврат долга?',
      answer: 'Нет. Установление требования даёт предусмотренный законом статус, но фактическое удовлетворение зависит от имущества должника, очередности, расходов процедуры и результатов других споров.'
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
              <span style={{ color: 'var(--color-text)' }}>Включение в реестр требований кредиторов</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <MilitaryHero
          badge="Банкротство бизнеса • Срочная помощь кредитору"
          title="Включение в реестр требований кредиторов в Липецке"
          subtitle="Проверим публикацию, стадию дела и режим долга. Подготовим заявление и доказательства, подадим их в установленном порядке и представим кредитора при возражениях."
          trustItems={[
            'Проверка дела в КАД и публикаций в ЕФРСБ',
            'Квалификация долга: реестровый или текущий',
            'Подготовка заявления, расчёта и позиции на возражения'
          ]}
          primaryButtonText="Проверить срок и требование"
          primaryButtonHref="#contacts"
          secondaryButtonText="Позвонить: +7 (910) 350-31-11"
          secondaryButtonHref="tel:+79103503111"
        />

        {/* Срочный блок: Что сделать сейчас */}
        <section className="section" style={{ background: '#fff', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ maxWidth: '840px', margin: '0 auto 36px', textAlign: 'center' }}>
              <span className="badge" style={{ marginBottom: '12px' }}>Срочные действия кредитора</span>
              <h2 style={{ fontSize: '26px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '16px' }}>
                Не считайте срок по памяти — сначала проверьте публикацию и стадию
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Сроки в банкротстве привязаны к официальным публикациям и конкретной процедуре. Ошибка в точке отсчёта может привести к пропуску реестра или потере права голоса на первом собрании.
              </p>
            </div>

            <div className="grid grid-4" style={{ gap: '20px', marginBottom: '32px' }}>
              {urgentActions.map((action, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'var(--color-bg-light)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                    padding: '24px 20px',
                    borderTop: '3px solid var(--color-gold)'
                  }}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'var(--color-deep-blue)',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '15px',
                      marginBottom: '14px'
                    }}
                  >
                    {action.step}
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-deep-blue)', marginBottom: '8px' }}>
                    {action.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
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
              <strong style={{ color: 'var(--color-deep-blue)' }}>Нормативное примечание: </strong>
              Статья 71 Закона о банкротстве связывает участие в первом собрании с предъявлением требований в течение 30 календарных дней с даты публикации о введении наблюдения; статья 142 — закрытие реестра в конкурсном производстве с истечением двух месяцев с даты публикации об открытии конкурсного производства. Это разные юридические события с принципиально разными последствиями. Юрист проверяет материалы конкретного дела перед подачей документов.
            </div>
          </div>
        </section>

        {/* Сегменты кредиторов */}
        <section className="section" style={{ background: 'var(--color-bg-light)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto 36px', textAlign: 'center' }}>
              <span className="badge" style={{ marginBottom: '12px' }}>Ситуации кредиторов</span>
              <h2 style={{ fontSize: '26px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '16px' }}>
                С какой ситуацией к нам обращаются коммерческие кредиторы
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)' }}>
                Каждая ситуация требует индивидуальной правовой конструкции: состав требований, доказательства реальности сделки и стратегия в суде существенно различаются.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '20px' }}>
              {creditorSegments.map((seg, idx) => (
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
                    {seg.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    {seg.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Быстрая проверка маршрута */}
        <section className="section" style={{ background: '#fff' }}>
          <div className="container">
            <div style={{ maxWidth: '840px', margin: '0 auto 36px', textAlign: 'center' }}>
              <span className="badge" style={{ marginBottom: '12px' }}>Правовая квалификация</span>
              <h2 style={{ fontSize: '26px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '16px' }}>
                Быстрая проверка маршрута требования
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)' }}>
                До составления заявления важно исключить типичные ошибки: подачу текущих платежей в реестр, неверное определение очередности или отсутствие необходимых доказательств.
              </p>
            </div>

            <div style={{ maxWidth: '840px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {routeChecks.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                    padding: '20px',
                    background: 'var(--color-bg-light)'
                  }}
                >
                  <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-deep-blue)', marginBottom: '12px' }}>
                    {item.question}
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px', fontSize: '13px' }}>
                    <div style={{ background: '#fff', padding: '12px 14px', borderRadius: '6px', borderLeft: '3px solid #2e7d32' }}>
                      <strong style={{ color: '#2e7d32' }}>Если ДА: </strong>
                      <span style={{ color: 'var(--color-text)' }}>{item.yes}</span>
                    </div>
                    <div style={{ background: '#fff', padding: '12px 14px', borderRadius: '6px', borderLeft: '3px solid #d32f2f' }}>
                      <strong style={{ color: '#d32f2f' }}>Если НЕТ / неясно: </strong>
                      <span style={{ color: 'var(--color-text)' }}>{item.no}</span>
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
                Что проверит юрист перед подачей заявления
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)' }}>
                Проверяемый алгоритм исследования требования защищает от оставления без движения, затягивания процесса и необоснованных отказов суда.
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

        {/* Что входит в услугу */}
        <section className="section" style={{ background: '#fff' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto 36px', textAlign: 'center' }}>
              <span className="badge" style={{ marginBottom: '12px' }}>Состав работы</span>
              <h2 style={{ fontSize: '26px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '16px' }}>
                Что входит в юридическую услугу и границы поручения
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)' }}>
                Мы чётко фиксируем объём обязательств в договоре: клиент точно понимает, какие процессуальные действия выполняет юрист.
              </p>
            </div>

            <div style={{ maxWidth: '840px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {serviceComponents.map((comp, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'var(--color-bg-light)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                    padding: '18px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-deep-blue)', margin: 0 }}>
                      {comp.name}
                    </h3>
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--color-text)', margin: 0, lineHeight: 1.5 }}>
                    {comp.scope}
                  </p>
                  <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)', fontStyle: 'italic' }}>
                    Граница: {comp.limit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Документы для первичного анализа */}
        <section className="section" style={{ background: 'var(--color-bg-light)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto 32px', textAlign: 'center' }}>
              <span className="badge" style={{ marginBottom: '12px' }}>Подготовка</span>
              <h2 style={{ fontSize: '26px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '16px' }}>
                Документы для первичного правового анализа
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)' }}>
                Для первичной оценки не требуется пересылать конфиденциальные бухгалтерские базы. Достаточно базовых сведений о долге и компании.
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
                {documentTypes.map((doc, idx) => (
                  <li key={idx} style={{ fontSize: '14px', color: 'var(--color-text)', lineHeight: 1.5 }}>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
              <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', margin: 0 }}>
                🔒 <strong>Конфиденциальность:</strong> Форма на сайте не принимает файлы. Мы согласуем безопасный защищённый канал связи после первого звонка или переписки.
              </p>
            </div>
          </div>
        </section>

        {/* Process */}
        <ProcessBlock
          title="Порядок установления требования кредитора"
          subtitle="Шесть последовательных процессуальных этапов от изучения карточки дела до контроля включения в реестр."
          steps={processSteps}
        />

        {/* Результаты */}
        <section className="section" style={{ background: 'var(--color-bg-light)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto 36px', textAlign: 'center' }}>
              <span className="badge" style={{ marginBottom: '12px' }}>Юридический результат</span>
              <h2 style={{ fontSize: '26px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '16px' }}>
                Процессуально проверяемые результаты работы
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)' }}>
                Мы не даём безосновательных гарантий «100% возврата денег». Результат формулируется в виде конкретных законных процессуальных статусов и определений суда.
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
                Суд может установить требование полностью, в части либо отказать в удовлетворении заявления. Фактическая выплата долга зависит от объёма конкурсной массы, очередности и результатов иных обособленных споров.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <PricingBlock
          title="Стоимость включения требования в реестр"
          subtitle="Цена зависит от стадии дела, наличия судебного акта, объёма первичных документов, расчёта, возражений и числа заседаний. Госпошлина и внешние расходы рассчитываются отдельно после проверки применимых правил."
          tiers={pricingTiers}
        />

        {/* Команда */}
        <section className="section" style={{ background: '#fff', borderTop: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
              <span className="badge" style={{ marginBottom: '12px' }}>Профессиональная практика</span>
              <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
                Кто подготовит и защитит требование в суде
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Задачу принимает специализированная рабочая группа по арбитражным и банкротным делам компании «Де-Юре». После экспресс-анализа карточки дела назначается ведущий юрист с релевантным процессуальным опытом, согласуется тактика заявления и регулярность отчётности перед доверителем.
              </p>
            </div>
          </div>
        </section>

        {/* Cases */}
        <CasesBlock
          title="Практика установления требований в банкротстве"
          subtitle="Реальные примеры работы по доказыванию требований коммерческих кредиторов в арбитражном суде."
          cases={casesData}
          showDemoWarning={true}
        />

        {/* FAQ */}
        <FAQBlock
          title="Частые вопросы о включении требований в реестр"
          items={faqItems}
        />

        {/* Смежные задачи и перелинковка */}
        <section className="section" style={{ background: 'var(--color-bg-light)', borderTop: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto 32px', textAlign: 'center' }}>
              <span className="badge" style={{ marginBottom: '12px' }}>Смежные направления</span>
              <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
                Другие задачи кредитора и должника в банкротстве
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                После включения в реестр кредитору часто требуются дальнейшие процессуальные действия по контролю за формированием конкурсной массы.
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
                <strong style={{ color: 'var(--color-deep-blue)', fontSize: '15px' }}>Представление интересов кредитора</strong>
                <span style={{ color: 'var(--color-text-secondary)', fontSize: '13px' }}>Комплексное сопровождение во всей процедуре банкротства должника.</span>
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
                <span style={{ color: 'var(--color-text-secondary)', fontSize: '13px' }}>Возврат выведенных активов и денег в конкурсную массу компании.</span>
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
                <span style={{ color: 'var(--color-text-secondary)', fontSize: '13px' }}>Взыскание долгов компании с контролирующих должника лиц или защита КДЛ.</span>
              </Link>
              <Link
                href="/biznesu/bankrotstvo-biznesa/obzhalovanie-dejstvij-arbitrazhnogo-upravlyayushchego/"
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
                <strong style={{ color: 'var(--color-deep-blue)', fontSize: '15px' }}>Жалоба на управляющего</strong>
                <span style={{ color: 'var(--color-text-secondary)', fontSize: '13px' }}>Пресечение бездействия и незаконных действий арбитражного управляющего.</span>
              </Link>
              <Link
                href="/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/"
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
                <strong style={{ color: 'var(--color-deep-blue)', fontSize: '15px' }}>Взыскание вне банкротства</strong>
                <span style={{ color: 'var(--color-text-secondary)', fontSize: '13px' }}>Исковой маршрут взыскания задолженности, если процедура ещё не введена.</span>
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
                <span style={{ color: 'var(--color-text-secondary)', fontSize: '13px' }}>Все направления юридической помощи кредиторам и должникам.</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Форма контактов */}
        <div id="contacts">
          <ContactsForm
            title="Проверьте срок до подачи заявления"
            subtitle="Сообщите номер дела или ИНН должника, дату публикации и есть ли вступивший в силу судебный акт. Юрист бесплатно определит режим требования и ближайшие действия."
          />
        </div>
      </main>
    </div>
  );
}
