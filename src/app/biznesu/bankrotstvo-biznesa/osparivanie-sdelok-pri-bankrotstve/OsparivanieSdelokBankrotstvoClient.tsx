'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import MilitaryHero from '@/components/MilitaryHero';
import ProcessBlock, { ProcessStep } from '@/components/ProcessBlock';
import PricingBlock, { PricingTier } from '@/components/PricingBlock';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import FAQBlock, { FAQItem } from '@/components/FAQBlock';
import ContactsForm from '@/components/ContactsForm';

export default function OsparivanieSdelokBankrotstvoClient() {
  const [activeRole, setActiveRole] = useState<'challenge' | 'defend' | 'audit'>('challenge');

  const roleDetails = {
    challenge: {
      badge: 'Ветка заявителя',
      title: 'Хотим оспорить сделку и вернуть актив',
      desc: 'Поможем кредитору или должнику выявить вывод ликвидного имущества, неравноценные контракты или преимущественное удовлетворение отдельных кредиторов перед банкротством.',
      actionCta: 'Оценить шансы на оспаривание'
    },
    defend: {
      badge: 'Ветка ответчика',
      title: 'Защищаем действительность сделки',
      desc: 'Защитим добросовестного покупателя, поставщика или кредитора от необоснованных требований управляющего о возврате имущества или полученной оплаты в конкурсную массу.',
      actionCta: 'Подготовить защиту сделки'
    },
    audit: {
      badge: 'Превентивная проверка',
      title: 'Нужна первичная проверка рисков сделки',
      desc: 'Проведём комплексный правовой аудит планируемой или совершённой сделки с контрагентом, находящимся в предбанкротном состоянии.',
      actionCta: 'Заказать аудит операции'
    }
  };

  const targetSegments = [
    {
      title: 'Конкурсный кредитор',
      desc: 'Видит вывод активов, необычные платежи, зачёты или обременения перед банкротством и намерен вернуть средства в конкурсную массу для увеличения выплат.'
    },
    {
      title: 'Должник / его менеджмент',
      desc: 'Управляющий исследует операции предкризисного периода; требуется законный комплект объяснений, подтверждающих реальную хозяйственную необходимость.'
    },
    {
      title: 'Контрагент / покупатель',
      desc: 'Получил заявление управляющего о признании договора купли-продажи недействительным и возврате имущества. Докажем добросовестность и рыночность цены.'
    },
    {
      title: 'Кредитор, получивший платёж',
      desc: 'Законное погашение долга или зачёт квалифицируют как оказание предпочтения. Защитим платёж через доказательства обычной хозяйственной деятельности.'
    },
    {
      title: 'Участник / директор (связь с КДЛ)',
      desc: 'Сделка одновременно вменяется как основание субсидиарной ответственности. Синхронизируем доказательства для параллельной защиты по обоим спорам.'
    }
  ];

  const urgentActions = [
    {
      step: '1',
      title: 'Зафиксируйте дату получения',
      text: 'Точно зафиксируйте момент вручения заявления или определения суда в Картотеке арбитражных дел: процессуальные сроки на подачу отзыва строго ограничены.'
    },
    {
      step: '2',
      title: 'Соберите первичную цепочку',
      text: 'Найдите оригинал договора, спецификации, товарные накладные, акты приёмки, путевые листы и доказательства фактического использования актива.'
    },
    {
      step: '3',
      title: 'Подтвердите реальность расчётов',
      text: 'Подготовьте платёжные поручения, банковские выписки, квитанции, подтверждающие реальное движение денежных средств без встречных транзитов.'
    },
    {
      step: '4',
      title: 'Проверьте период подозрительности',
      text: 'Сопоставьте дату сделки и дату принятия судом заявления о признании должника банкротом (1 месяц, 1 год или 3 года по ст. 61.2, 61.3 Закона о банкротстве).'
    },
    {
      step: '5',
      title: 'Не создавайте фиктивных бумаг',
      text: 'Не составляйте документы задним числом. Судебная экспертиза давности документов легко опровергнет сфабрикованные бумаги, что ухудшит позицию.'
    }
  ];

  const analysisContours = [
    {
      title: '1. Полномочия заявителя и стадия',
      desc: 'Проверяем, имеет ли заявитель (управляющий или кредитор с долей >10%) законное процессуальное право на оспаривание сделки на текущей стадии процедуры.'
    },
    {
      title: '2. Предмет и реальное исполнение',
      desc: 'Устанавливаем фактическое перемещение имущества, реальность оказания услуг, наличие производственных мощностей у сторон и коммерческую логику сделки.'
    },
    {
      title: '3. Специальные банкротные основания',
      desc: 'Квалифицируем нормы: подозрительные сделки с неравноценным исполнением (п. 1 ст. 61.2), сделки с целью причинения вреда (п. 2 ст. 61.2) или сделки с предпочтением (ст. 61.3).'
    },
    {
      title: '4. Период совершения и осведомлённость',
      desc: 'Оцениваем, в какой из специальных периодов подозрительности совершена операция и знала ли вторая сторона о признаках неплатёжеспособности должника.'
    },
    {
      title: '5. Доказательственная база и экспертизы',
      desc: 'Анализируем рыночную стоимость по аналогичным сделкам, привлекаем независимых оценщиков, собираем переписку и доказательства обычной деятельности.'
    },
    {
      title: '6. Правовые последствия недействительности',
      desc: 'Прогнозируем последствия: возврат вещи в натуре, взыскание рыночной стоимости или восстановление права требования контрагента к реестру должника.'
    }
  ];

  const processSteps: ProcessStep[] = [
    {
      number: '01',
      title: 'Правовой экспресс-аудит операции',
      description: 'Анализируем договор, финансовое состояние должника на дату сделки, основания оспаривания и процессуальные риски сторон.'
    },
    {
      number: '02',
      title: 'Сбор доказательств реальности и цены',
      description: 'Формируем первичную документальную базу: банковские выписки, отчёты об оценке, деловую переписку и подтверждения рыночности условий.'
    },
    {
      number: '03',
      title: 'Подготовка заявления или отзыва',
      description: 'Составляем мотивированное заявление об оспаривании либо развёрнутый отзыв с правовой аргументацией и опровержением доводов оппонента.'
    },
    {
      number: '04',
      title: 'Принятие или отмена обеспечительных мер',
      description: 'Подаём ходатайство об аресте спорного актива для предотвращения перепродажи либо добиваемся снятия необоснованного ареста со стороны ответчика.'
    },
    {
      number: '05',
      title: 'Судебное представительство',
      description: 'Защищаем позицию в заседаниях арбитражного суда, заявляем ходатайства о назначении судебной экспертизы и допрашиваем свидетелей.'
    },
    {
      number: '06',
      title: 'Исполнение и контроль судебного акта',
      description: 'Контролируем исполнение судебного определения: возврат имущества в конкурсную массу, зачёт требований или подготовку апелляционной жалобы.'
    }
  ];

  const resultsList = [
    'Признание сделки должника недействительной и возврат имущества/денег в конкурсную массу;',
    'Полный отказ арбитражного суда в признании сделки недействительной и сохранение актива у приобретателя;',
    'Защита добросовестного кредитора от возврата денежных средств, полученных в порядке расчётов;',
    'Снятие судебных обеспечительных мер и арестов со спорного имущества доверителя;',
    'Утверждение мирового соглашения с фиксацией компромиссной компенсации и графика выплат;',
    'Отмена незаконного определения суда в апелляционной или кассационной инстанции.'
  ];

  const pricingTiers: PricingTier[] = [
    {
      name: 'Правовой аудит сделки',
      price: 'от 10 000 ₽',
      period: '1–2 рабочих дня',
      description: 'Экспресс-оценка перспектив оспаривания или защиты конкретной хозяйственной операции в суде.',
      features: [
        'Изучение договора и первичных документов',
        'Проверка периодов по ст. 61.2, 61.3 Закона о банкротстве',
        'Оценка рисков неравноценности и предпочтения',
        'Письменное заключение с планом действий'
      ],
      isPopular: false,
      ctaText: 'Заказать аудит',
      ctaHref: '#contacts'
    },
    {
      name: 'Подготовка заявления / отзыва',
      price: 'от 30 000 ₽',
      period: 'от 4 рабочих дней',
      description: 'Составление мотивированного процессуального документа со ссылками на судебную практику.',
      features: [
        'Формирование правовой позиции стороны спора',
        'Подбор судебной практики Верховного Суда РФ',
        'Анализ и систематизация первичных доказательств',
        'Составление заявления или мотивированного отзыва'
      ],
      isPopular: true,
      badge: 'Популярный',
      ctaText: 'Подготовить документ',
      ctaHref: '#contacts'
    },
    {
      name: 'Ведение спора в первой инстанции',
      price: 'от 60 000 ₽',
      period: 'на весь период дела',
      description: 'Полное судебное сопровождение обособленного спора под ключ до вынесения итогового определения.',
      features: [
        'Все действия тарифа «Подготовка заявления/отзыва»',
        'Личное или онлайн участие юриста во всех заседаниях',
        'Обеспечительные меры (наложение или снятие)',
        'Курирование назначения судебной оценочной экспертизы'
      ],
      isPopular: false,
      ctaText: 'Защитить сделку',
      ctaHref: '#contacts'
    },
    {
      name: 'Апелляционное обжалование',
      price: 'от 35 000 ₽',
      period: 'по процессуальным срокам',
      description: 'Обжалование судебного акта об оспаривании сделки в арбитражном апелляционном суде.',
      features: [
        'Правовой анализ выводов суда первой инстанции',
        'Выявление нарушений норм материального права',
        'Подготовка и подача мотивированной апелляционной жалобы',
        'Представительство в арбитражном апелляционном суде'
      ],
      isPopular: false,
      ctaText: 'Обжаловать в апелляции',
      ctaHref: '#contacts'
    }
  ];

  const casesData: CaseData[] = [
    {
      title: 'Кредитор: отчуждение производственного актива',
      result: 'Суд признал недействительным договор купли-продажи цеха и вернул актив стоимостью 46 млн ₽ в конкурсную массу',
      duration: '6 месяцев',
      description: 'За 4 месяца до банкротства должник продал производственное здание аффилированной фирме по заниженной в 3 раза стоимости с отсрочкой платежа.',
      points: [
        'Инициировали обособленный спор по п. 2 ст. 61.2 Закона о банкротстве от имени кредитора',
        'Добились наложения обеспечительных мер и запрета регистрационных действий',
        'Инициировали судебную экспертизу, подтвердившую существенное занижение цены',
        'Суд признал сделку недействительной и вернул объект недвижимости должнику'
      ]
    },
    {
      title: 'Контрагент: защита поставки и оплаты',
      result: 'Суд полностью отказал управляющему во взыскании 12,8 млн ₽ с добросовестного поставщика',
      duration: '4 месяца',
      description: 'Конкурсный управляющий потребовал признать недействительными платежи за поставленные стройматериалы за 1 месяц до наблюдения как сделку с предпочтением.',
      points: [
        'Доказали, что платежи совершались в рамках обычной хозяйственной деятельности (п. 2 ст. 61.4 Закона о банкротстве)',
        'Предоставили документы о многолетней истории аналогичных поставок и оплат',
        'Опровергли осведомлённость поставщика о признаках финансовой несостоятельности должника',
        'Арбитражный суд подтвердил действительность расчётов и оставил деньги у клиента'
      ]
    },
    {
      title: 'Сделка и риск субсидиарной ответственности',
      result: 'Сделка признана законной, исключён ключевой эпизод обвинения бывшего руководителя',
      duration: '8 месяцев',
      description: 'Управляющий оспаривал продажу автопарка компании, одновременно заявляя это же действие как основание для субсидиарной ответственности директора.',
      points: [
        'Разделили бремя доказывания по обособленному спору о сделке и спору по КДЛ',
        'Доказали экономическую целесообразность обновления автопарка и направление вырученных денег на выплату зарплаты',
        'Синхронизировали доказательственную позицию по обоим процессам',
        'Суд отказал в признании сделки недействительной, что автоматически сняло обвинение в рамках спора о КДЛ'
      ]
    }
  ];

  const faqItems: FAQItem[] = [
    {
      question: 'Любая сделка перед банкротством недействительна?',
      answer: 'Нет. Последующее банкротство само по себе не отменяет договор или платёж. Суд проверяет конкретное основание, период, факты, исполнение, положение сторон и доказательства.'
    },
    {
      question: 'Кто может подать заявление об оспаривании?',
      answer: 'Закон определяет специальных заявителей и условия их полномочий. Перед подготовкой документа нужно проверить процедуру, статус кредитора, решения собрания/комитета и актуальную редакцию правил.'
    },
    {
      question: 'Что такое подозрительная сделка?',
      answer: 'Это не бытовая оценка «выглядит странно», а специальная правовая квалификация. Нужно доказать предусмотренный законом фактический состав; универсального вывода по одной цене или связи сторон нет.'
    },
    {
      question: 'Что означает предпочтение одному кредитору?',
      answer: 'Проверяется, изменила ли операция положение конкретного кредитора относительно других, когда и при каких обстоятельствах она совершена и какие факты должна доказать каждая сторона.'
    },
    {
      question: 'Рыночная цена гарантирует, что сделку не оспорят?',
      answer: 'Нет. Цена важна, но суд оценивает весь состав основания, исполнение, цели, осведомлённость и последствия. Одновременно само заявление о нерыночности без доказательств не решает спор.'
    },
    {
      question: 'Достаточно ли договора и акта?',
      answer: 'Формальные документы важны, но часто требуется подтвердить реальные расчёты, передачу результата, хозяйственный смысл, движение актива, переговоры и информацию, доступную сторонам на дату операции.'
    },
    {
      question: 'Можно ли срочно дооформить недостающие документы?',
      answer: 'Нельзя создавать фиктивные или датированные задним числом материалы. Нужно установить причину отсутствия, найти законные альтернативные источники и честно объяснить фактическую ситуацию.'
    },
    {
      question: 'Что происходит после признания сделки недействительной?',
      answer: 'Суд определяет применимые последствия с учётом закона и фактов: возврат имущества/стоимости, восстановление требований и другие правовые эффекты. Конкретный результат заранее не гарантируется.'
    },
    {
      question: 'Связан ли спор о сделке с субсидиарной ответственностью?',
      answer: 'Может быть связан доказательствами и периодом, но признание сделки недействительной само по себе не устанавливает автоматически статус КДЛ, вину, причинную связь и размер личной ответственности.'
    },
    {
      question: 'Можно ли оспорить обычный договор без дела о банкротстве на этой странице?',
      answer: 'Это другой интент. BIZ-BKR-05 применяется, когда операция исследуется в связи с банкротством бизнеса. Внебанкротный спор направляется в договорный или арбитражный кластер.'
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
              <span style={{ color: 'var(--color-text)' }}>Оспаривание сделок при банкротстве</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <MilitaryHero
          badge="Банкротство бизнеса • Обособленный спор о сделке"
          title="Оспаривание сделок при банкротстве в Липецке"
          subtitle="Проверим основание, период, исполнение, доказательства и последствия. Подготовим заявление об оспаривании либо защиту стороны сделки и представим позицию в суде."
          trustItems={[
            'Основания по ст. 61.2, 61.3 Закона о банкротстве и ст. 10, 168, 170 ГК РФ',
            'Две процессуальные стороны: возврат имущества в массу или защита сделки',
            'Оценка равноценности встречного предоставления и добросовестности'
          ]}
          primaryButtonText="Разобрать спорную сделку"
          primaryButtonHref="#contacts"
          secondaryButtonText="Позвонить: +7 (910) 350-31-11"
          secondaryButtonHref="tel:+79103503111"
        />

        {/* Переключатель роли */}
        <section className="section" style={{ background: '#fff', borderBottom: '1px solid var(--color-border)', padding: '36px 0' }}>
          <div className="container">
            <div style={{ maxWidth: '840px', margin: '0 auto 24px', textAlign: 'center' }}>
              <span className="badge" style={{ marginBottom: '12px' }}>Процессуальная роль</span>
              <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '12px' }}>
                Выберите вашу задачу в обособленном споре
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0 }}>
                Семантика и основания спора едины, но тактика доказывания кардинально противоположна. Выберите вашу сторону:
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '24px' }}>
              <button
                type="button"
                onClick={() => setActiveRole('challenge')}
                style={{
                  padding: '12px 24px',
                  borderRadius: '6px',
                  fontSize: '15px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: activeRole === 'challenge' ? '2px solid var(--color-deep-blue)' : '1px solid var(--color-border)',
                  background: activeRole === 'challenge' ? 'var(--color-deep-blue)' : '#fff',
                  color: activeRole === 'challenge' ? '#fff' : 'var(--color-text)',
                  transition: 'all 0.2s ease'
                }}
              >
                Хотим оспорить сделку
              </button>
              <button
                type="button"
                onClick={() => setActiveRole('defend')}
                style={{
                  padding: '12px 24px',
                  borderRadius: '6px',
                  fontSize: '15px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: activeRole === 'defend' ? '2px solid var(--color-deep-blue)' : '1px solid var(--color-border)',
                  background: activeRole === 'defend' ? 'var(--color-deep-blue)' : '#fff',
                  color: activeRole === 'defend' ? '#fff' : 'var(--color-text)',
                  transition: 'all 0.2s ease'
                }}
              >
                Защищаем сделку
              </button>
              <button
                type="button"
                onClick={() => setActiveRole('audit')}
                style={{
                  padding: '12px 24px',
                  borderRadius: '6px',
                  fontSize: '15px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: activeRole === 'audit' ? '2px solid var(--color-deep-blue)' : '1px solid var(--color-border)',
                  background: activeRole === 'audit' ? 'var(--color-deep-blue)' : '#fff',
                  color: activeRole === 'audit' ? '#fff' : 'var(--color-text)',
                  transition: 'all 0.2s ease'
                }}
              >
                Нужна первичная оценка
              </button>
            </div>

            <div
              style={{
                maxWidth: '840px',
                margin: '0 auto',
                background: 'var(--color-bg-light)',
                border: '1px solid var(--color-border)',
                borderRadius: '8px',
                padding: '24px 28px',
                borderLeft: '4px solid var(--color-gold)'
              }}
            >
              <span className="badge" style={{ marginBottom: '8px', background: 'var(--color-deep-blue)', color: '#fff' }}>
                {roleDetails[activeRole].badge}
              </span>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '8px' }}>
                {roleDetails[activeRole].title}
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
                {roleDetails[activeRole].desc}
              </p>
              <a
                href="#contacts"
                className="btn btn-primary"
                style={{ display: 'inline-block', fontSize: '14px', padding: '10px 20px', textDecoration: 'none' }}
              >
                {roleDetails[activeRole].actionCta}
              </a>
            </div>
          </div>
        </section>

        {/* Срочный блок: Что сделать сейчас */}
        <section className="section" style={{ background: 'var(--color-bg-light)', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ maxWidth: '840px', margin: '0 auto 36px', textAlign: 'center' }}>
              <span className="badge" style={{ marginBottom: '12px' }}>Срочные действия сторон</span>
              <h2 style={{ fontSize: '26px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '16px' }}>
                Что сделать сразу после получения заявления или выявления подозрительной сделки
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Первичные действия сторон определяют исход судебного разбирательства. Сохранение доказательств и отказ от фальсификаций — фундамент процессуальной защиты.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '20px', marginBottom: '24px' }}>
              {urgentActions.map((action, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#fff',
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
              <strong style={{ color: 'var(--color-deep-blue)' }}>Правило добросовестности: </strong>
              Последующее признание должника банкротом само по себе не влечёт автоматической недействительности ранее совершённых контрактов. Суд обязан проверить конкретные юридические основания, период, цели сделки и осведомлённость контрагента.
            </div>
          </div>
        </section>

        {/* Сегменты доверителей */}
        <section className="section" style={{ background: '#fff' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto 36px', textAlign: 'center' }}>
              <span className="badge" style={{ marginBottom: '12px' }}>Участники спора</span>
              <h2 style={{ fontSize: '26px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '16px' }}>
                Чьи интересы мы защищаем в спорах о сделках должника
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)' }}>
                Обособленный спор может затрагивать интересы как самого банкрота и реестровых кредиторов, так и добросовестных покупателей имущества.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '20px' }}>
              {targetSegments.map((seg, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'var(--color-bg-light)',
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

        {/* Карта анализа: 6 контуров */}
        <section className="section" style={{ background: 'var(--color-bg-light)' }}>
          <div className="container">
            <div style={{ maxWidth: '840px', margin: '0 auto 36px', textAlign: 'center' }}>
              <span className="badge" style={{ marginBottom: '12px' }}>Методология анализа</span>
              <h2 style={{ fontSize: '26px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '16px' }}>
                Карта правового анализа: шесть контуров исследования сделки
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)' }}>
                Каждая сделка проверяется по строгой системе материальных и процессуальных критериев до обращения в арбитражный суд.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '20px' }}>
              {analysisContours.map((contour, idx) => (
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
                    {contour.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    {contour.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <ProcessBlock
          title="Порядок рассмотрения спора о сделке в арбитражном суде"
          subtitle="Последовательный маршрут работы юристов: от экспресс-оценки договора до применения последствий недействительности."
          steps={processSteps}
        />

        {/* Результаты */}
        <section className="section" style={{ background: 'var(--color-bg-light)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto 36px', textAlign: 'center' }}>
              <span className="badge" style={{ marginBottom: '12px' }}>Результаты работы</span>
              <h2 style={{ fontSize: '26px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '16px' }}>
                Процессуально проверяемые результаты
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)' }}>
                Мы не даём пустых заверений «100% отмены любой сделки». Результат фиксируется конкретным судебным актом арбитражного суда.
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
                Суд определяет применимые последствия с учётом фактических обстоятельств: возврат имущества в натуре, взыскание стоимости либо отказ в иске при доказанности добросовестности контрагента.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <PricingBlock
          title="Стоимость оспаривания и защиты сделок"
          subtitle="Цена зависит от процессуальной роли, характера сделки, состава оснований, объёма доказательств и числа заседаний. Судебные экспертизы и внешние расходы рассчитываются отдельно."
          tiers={pricingTiers}
        />

        {/* Команда */}
        <section className="section" style={{ background: '#fff', borderTop: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
              <span className="badge" style={{ marginBottom: '12px' }}>Судебные представители</span>
              <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
                Кто ведёт обособленные споры о сделках
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Обособленные споры по оспариванию сделок сопровождает команда судебных арбитражных юристов «Де-Юре». Мы обладаем обширным опытом назначения финансово-экономических и оценочных судебных экспертиз, сбора косвенных доказательств и взаимодействия с арбитражными управляющими.
              </p>
            </div>
          </div>
        </section>

        {/* Cases */}
        <CasesBlock
          title="Судебная практика по сделкам должника"
          subtitle="Реальные примеры возврата активов в конкурсную массу и защиты добросовестных контрагентов."
          cases={casesData}
          showDemoWarning={true}
        />

        {/* FAQ */}
        <FAQBlock
          title="Частые вопросы об оспаривании сделок при банкротстве"
          items={faqItems}
        />

        {/* Смежные задачи и перелинковка */}
        <section className="section" style={{ background: 'var(--color-bg-light)', borderTop: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto 32px', textAlign: 'center' }}>
              <span className="badge" style={{ marginBottom: '12px' }}>Смежные направления</span>
              <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--color-deep-blue)', marginBottom: '14px' }}>
                Связанные процедуры в деле о банкротстве
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                Оспаривание сделок тесно связано с субсидиарной ответственностью руководства и обжалованием действий арбитражного управляющего.
              </p>
            </div>

            <div className="grid grid-3" style={{ gap: '16px', maxWidth: '960px', margin: '0 auto' }}>
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
                <span style={{ color: 'var(--color-text-secondary)', fontSize: '13px' }}>Защита директора и учредителей при вменении убыточных сделок.</span>
              </Link>
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
                <span style={{ color: 'var(--color-text-secondary)', fontSize: '13px' }}>Контроль формирования конкурсной массы и собрания кредиторов.</span>
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
                <span style={{ color: 'var(--color-text-secondary)', fontSize: '13px' }}>Установление первоначальных требований кредитора в суде.</span>
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
                <span style={{ color: 'var(--color-text-secondary)', fontSize: '13px' }}>Пресечение уклонения управляющего от оспаривания подозрительных сделок.</span>
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
                <span style={{ color: 'var(--color-text-secondary)', fontSize: '13px' }}>Комплексная инвентаризация и аудит хозяйственных операций компании.</span>
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
                <span style={{ color: 'var(--color-text-secondary)', fontSize: '13px' }}>Все юридические услуги по банкротству коммерческих компаний.</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Форма контактов */}
        <div id="contacts">
          <ContactsForm
            title="Разобрать спорную сделку с арбитражным юристом"
            subtitle="Сообщите номер дела, вашу процессуальную роль и тип операции: купля-продажа, платёж, зачёт или залог. Юрист конфиденциально оценит основания и подготовит позицию."
          />
        </div>
      </main>
    </div>
  );
}
