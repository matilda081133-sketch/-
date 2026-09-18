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

export default function BankrotstvoBiznesaClient() {
  const situations = [
    {
      role: 'Должник',
      title: 'Компания перестала справляться с платежами',
      desc: 'Нужно понять, есть ли обязанность обращаться в суд, какие варианты ещё доступны и какие риски возникают у руководства.',
      btnText: 'Перейти к услуге должника',
      href: '/biznesu/bankrotstvo-biznesa/bankrotstvo-kompanii-so-storony-dolzhnika/'
    },
    {
      role: 'Ответчик',
      title: 'Кредитор подал заявление о банкротстве компании',
      desc: 'Проверим заявление, карточку дела, требования и ближайшие действия со стороны компании.',
      btnText: 'Передать номер дела',
      href: '#form'
    },
    {
      role: 'Кредитор',
      title: 'Контрагент вошёл в банкротство',
      desc: 'Проверим стадию, основания долга и возможный формат участия кредитора в процедуре.',
      btnText: 'Перейти к кредитору',
      href: '/biznesu/bankrotstvo-biznesa/predstavlenie-interesov-kreditora/'
    },
    {
      role: 'Кредитор',
      title: 'Нужно включить долг в реестр',
      desc: 'Оценим срок, комплект доказательств и подготовим требование для рассмотрения судом.',
      btnText: 'Проверить срок и документы',
      href: '/biznesu/bankrotstvo-biznesa/vklyuchenie-v-reestr-trebovanij-kreditorov/'
    },
    {
      role: 'Руководитель / КДЛ',
      title: 'Директору или собственнику предъявляют личные требования',
      desc: 'Разберём основания, статус КДЛ, документы и возможную позицию защиты.',
      btnText: 'Перейти к защите КДЛ',
      href: '/biznesu/bankrotstvo-biznesa/zashchita-ot-subsidiarnoj-otvetstvennosti/'
    },
    {
      role: 'Сторона сделки',
      title: 'Управляющий или кредитор оспаривает сделку',
      desc: 'Проверим специальные и общие основания, фактическое исполнение и доказательства добросовестности.',
      btnText: 'Перейти к банкротным сделкам',
      href: '/biznesu/bankrotstvo-biznesa/osparivanie-sdelok-pri-bankrotstve/'
    },
    {
      role: 'Участник дела',
      title: 'Управляющий нарушает права участника процедуры',
      desc: 'Определим способ защиты: запрос, жалоба, судебное обжалование, отстранение или убытки — если есть основания.',
      btnText: 'Перейти к обжалованию',
      href: '/biznesu/bankrotstvo-biznesa/obzhalovanie-dejstvij-arbitrazhnogo-upravlyayushchego/'
    }
  ];

  const urgencyItems = [
    {
      title: 'Получено заявление или судебный акт',
      desc: 'Определение о принятии заявления кредитора или назначении заседания требует срочной правовой позиции до назначенной даты.'
    },
    {
      title: 'Опубликовано сообщение о процедуре',
      desc: 'Публикация в ЕФРСБ или «Коммерсанте» запускает процессуальные сроки на закрытие реестра требований кредиторов.'
    },
    {
      title: 'Предъявлено требование к КДЛ',
      desc: 'Заявление о субсидиарной ответственности требует немедленного сбора доказательств добросовестности и финансовой хронологии.'
    },
    {
      title: 'Оспаривается сделка периода подозрительности',
      desc: 'Требование о возврате имущества или платежа требует доказательств равноценности и обычной хозяйственной практики.'
    },
    {
      title: 'Управляющий бездействует или нарушает права',
      desc: 'Непредоставление отчётов или неправомерные действия по имуществу требуют своевременной судебной фиксации нарушений.'
    }
  ];

  const childServices = [
    {
      title: 'Банкротство компании со стороны должника',
      desc: 'Диагностика финансового и правового положения, подготовка к обращению в суд и сопровождение компании в процедуре с оценкой рисков руководства.',
      btnText: 'Подробнее для должника →',
      href: '/biznesu/bankrotstvo-biznesa/bankrotstvo-kompanii-so-storony-dolzhnika/'
    },
    {
      title: 'Представление интересов кредитора',
      desc: 'Инициирование банкротства либо участие в уже начатой процедуре: требования, собрания кредиторов, контроль управляющего и банкротные способы взыскания.',
      btnText: 'Подробнее для кредитора →',
      href: '/biznesu/bankrotstvo-biznesa/predstavlenie-interesov-kreditora/'
    },
    {
      title: 'Включение в реестр требований кредиторов',
      desc: 'Проверка срока и основания долга, подготовка заявления, защита требования при возражениях и обжалование судебного акта.',
      btnText: 'Включить требование →',
      href: '/biznesu/bankrotstvo-biznesa/vklyuchenie-v-reestr-trebovanij-kreditorov/'
    },
    {
      title: 'Защита от субсидиарной ответственности',
      desc: 'Защита директора, собственника и другого предполагаемого КДЛ: анализ оснований, доказательства, возражения и представительство в суде.',
      btnText: 'Оценить риск КДЛ →',
      href: '/biznesu/bankrotstvo-biznesa/zashchita-ot-subsidiarnoj-otvetstvennosti/'
    },
    {
      title: 'Оспаривание сделок при банкротстве',
      desc: 'Представительство заявителя или ответчика в споре о возврате имущества, платежа или другого исполнения в конкурсную массу.',
      btnText: 'Разобрать сделку →',
      href: '/biznesu/bankrotstvo-biznesa/osparivanie-sdelok-pri-bankrotstve/'
    },
    {
      title: 'Обжалование действий управляющего',
      desc: 'Защита при незаконном действии или бездействии управляющего: выбор адресата, жалоба, отстранение и убытки при наличии оснований.',
      btnText: 'Обсудить нарушение →',
      href: '/biznesu/bankrotstvo-biznesa/obzhalovanie-dejstvij-arbitrazhnogo-upravlyayushchego/'
    }
  ];

  const diagnosticPoints = [
    'Кто клиент и какая цель: сохранить работающий бизнес, законно завершить деятельность, взыскать долг, защитить сделку или личную позицию.',
    'Возбуждено ли дело, какая процедура введена и какие судебные акты уже приняты.',
    'Какие обязательства просрочены, чем они подтверждаются и есть ли спор о размере или основании.',
    'Какие активы, права требования и исполнительные производства существуют.',
    'Какие сделки и платежи совершались в период финансового ухудшения.',
    'Кто принимал ключевые решения и насколько сохранены бухгалтерские и корпоративные документы.',
    'Есть ли параллельные налоговые, уголовные, корпоративные или исполнительные риски.'
  ];

  const processSteps: ProcessStep[] = [
    {
      num: '01',
      title: 'Уточняем роль и стадию',
      desc: 'Определяем, на чьей стороне работаем, возбуждено ли дело и какое событие требует ближайшей реакции.'
    },
    {
      num: '02',
      title: 'Проверяем открытые данные',
      desc: 'Изучаем карточку арбитражного дела, публикации о банкротстве, сведения о компании и доступные исполнительные производства.'
    },
    {
      num: '03',
      title: 'Получаем документы безопасным способом',
      desc: 'После первичного контакта согласуем канал для передачи судебных, бухгалтерских, корпоративных и иных конфиденциальных материалов.'
    },
    {
      num: '04',
      title: 'Формируем карту рисков и вариантов',
      desc: 'Разделяем подтверждённые факты, недостающие сведения, правовые риски и применимые сценарии действий.'
    },
    {
      num: '05',
      title: 'Фиксируем объём работы',
      desc: 'Согласуем этапы, состав команды, стоимость услуг и внешние расходы в договоре.'
    },
    {
      num: '06',
      title: 'Ведём процедуру или отдельный спор',
      desc: 'Готовим документы, участвуем в заседаниях и взаимодействуем с участниками дела в согласованном объёме.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Первичная консультация',
      subtitle: 'Уточнение роли, стадии и задачи',
      price: 'от 5 000 ₽',
      popular: false,
      features: [
        { name: 'анализ статуса дела и публикаций', value: 'Да' },
        { name: 'определение круга рисков', value: 'Да' },
        { name: 'список необходимых документов', value: 'Да' }
      ],
      buttonText: 'Записаться',
      buttonHref: '#form'
    },
    {
      title: 'Банкротная диагностика',
      subtitle: 'Проверка материалов и открытых данных',
      price: 'от 30 000 ₽',
      popular: true,
      badgeText: 'Рекомендуется',
      features: [
        { name: 'полная карта рисков и обязательств', value: 'Да' },
        { name: 'анализ сделок периода кризиса', value: 'Да' },
        { name: 'оценка рисков субсидиарной ответственности', value: 'Да' },
        { name: 'письменные сценарии действий', value: 'Да' }
      ],
      buttonText: 'Заказать диагностику',
      buttonHref: '#form'
    },
    {
      title: 'Подготовка заявления или требования',
      subtitle: 'Анализ оснований и процессуальный комплект',
      price: 'от 25 000 ₽',
      popular: false,
      features: [
        { name: 'формирование расчёта и доказательств', value: 'Да' },
        { name: 'подготовка заявления с приложениями', value: 'Да' },
        { name: 'направление участникам и подача в суд', value: 'Да' }
      ],
      buttonText: 'Подготовить документ',
      buttonHref: '#form'
    },
    {
      title: 'Сопровождение процедуры',
      subtitle: 'Представительство должника или кредитора',
      price: 'от 50 000 ₽',
      popular: false,
      features: [
        { name: 'участие в судебных заседаниях', value: 'Да' },
        { name: 'контроль собраний кредиторов', value: 'Да' },
        { name: 'взаимодействие с арбитражным управляющим', value: 'Да' },
        { name: 'регулярная правовая отчётность', value: 'Да' }
      ],
      buttonText: 'Обсудить сопровождение',
      buttonHref: '#form'
    },
    {
      title: 'Обособленный банкротный спор',
      subtitle: 'Субсидиарная ответственность, сделки, жалобы',
      price: 'от 40 000 ₽',
      popular: false,
      features: [
        { name: 'формирование доказательственной базы', value: 'Да' },
        { name: 'подготовка мотивированных возражений/жалоб', value: 'Да' },
        { name: 'представительство в судебных заседаниях', value: 'Да' },
        { name: 'обжалование судебных актов при необходимости', value: 'Да' }
      ],
      buttonText: 'Передать спор',
      buttonHref: '#form'
    }
  ];

  const casesData: CaseData[] = [
    {
      category: 'Должник / Производство',
      title: 'Компания-должник: подготовка к процедуре',
      problem: 'У производственной компании образовалась просрочка перед несколькими кредиторами, шли исполнительные производства, часть сделок периода кризиса могла вызвать вопросы.',
      action: 'Провели комплексную диагностику: проверили обязательства, активы, сделки, бухгалтерские и корпоративные документы. Отделили устранимые недостатки от рисков, подготовили законное заявление.',
      result: 'Заявление должника принято судом, введена процедура наблюдения, обеспечен законный порядок инвентаризации без обвинений в преднамеренном банкротстве.'
    },
    {
      category: 'Кредитор / Поставка',
      title: 'Кредитор: участие в банкротстве контрагента',
      problem: 'Поставщик узнал о введении процедуры после публикации в ЕФРСБ и рисковал пропустить срок включения в реестр требований.',
      action: 'Оперативно восстановили первичные документы по цепочке поставок, рассчитали сумму задолженности и штрафных санкций, подали требование в суд и обеспечили защиту на заседании.',
      result: 'Требование в полном объёме включено в третью очередь реестра кредиторов, обеспечено право голоса на первых собраниях кредиторов.'
    },
    {
      category: 'КДЛ / Защита руководителя',
      title: 'КДЛ: защита от личного взыскания',
      problem: 'Конкурсный управляющий подал заявление о привлечении бывшего генерального директора к субсидиарной ответственности на сумму более 45 млн ₽.',
      action: 'Восстановили хронологию управления, собрали корпоративные документы и переписку, доказали отсутствие причинно-следственной связи между решениями руководителя и кризисом компании.',
      result: 'Арбитражный суд полностью отказал в привлечении доверителя к субсидиарной ответственности.'
    }
  ];

  const faqItems: FAQItem[] = [
    {
      q: 'Когда компании нужен юрист по банкротству?',
      a: 'Не только после подачи заявления. Обратиться стоит, когда компания системно нарушает сроки платежей, несколько кредиторов ведут взыскание, активов недостаточно для всех обязательств либо руководство получило заявление о банкротстве. Юрист сначала проверяет факты и документы: финансовые трудности не означают, что единственным вариантом обязательно будет банкротство.'
    },
    {
      q: 'Может ли компания сама обратиться с заявлением о банкротстве?',
      a: 'Закон предусматривает право, а в определённых обстоятельствах — обязанность должника обратиться в арбитражный суд. Применимость оснований и момент возникновения обязанности нельзя определять только по общей сумме долгов: нужны сведения о сроках, платежах, активах, требованиях кредиторов и последствиях расчёта с отдельными лицами.'
    },
    {
      q: 'Можно ли восстановить работу бизнеса вместо банкротства?',
      a: 'Возможные варианты зависят от экономики компании, структуры обязательств, позиции кредиторов и стадии кризиса. Диагностика может показать основания для переговоров, реструктуризации, мирового соглашения или предусмотренных законом процедур. Обещать сохранение бизнеса до анализа нельзя.'
    },
    {
      q: 'Может ли кредитор подать на банкротство должника?',
      a: 'Да, при наличии предусмотренных законом оснований и соблюдении требований к обращению. До подачи заявления нужно оценить не только формальные условия, но и экономический смысл: наличие активов, других кредиторов, расходы на процедуру и возможные способы пополнения конкурсной массы.'
    },
    {
      q: 'Отвечает ли директор личным имуществом по долгам компании?',
      a: 'Само банкротство компании не означает автоматического взыскания всех долгов с директора. Персональная ответственность рассматривается при наличии конкретных оснований, связанных со статусом контролирующего лица, действиями или бездействием, документами и причинной связью. Позицию нужно строить по материалам конкретного дела.'
    },
    {
      q: 'Могут ли отменить сделки, совершённые до банкротства?',
      a: 'Сделки и платежи могут проверяться по специальным банкротным и общегражданским основаниям. Значение имеют период совершения, встречное исполнение, цена, осведомлённость сторон, предпочтение отдельному кредитору и другие обстоятельства. Сделка не становится недействительной автоматически только из-за последующего банкротства.'
    },
    {
      q: 'Сколько длится банкротство юридического лица?',
      a: 'Универсального срока нет. На продолжительность влияют стадия, объём имущества и требований, количество кредиторов, торги, оспаривание сделок, субсидиарная ответственность, жалобы и обжалование судебных актов. После первичного анализа можно обсуждать этапы, но не гарантировать дату завершения.'
    },
    {
      q: 'От чего зависит стоимость сопровождения?',
      a: 'От роли клиента, стадии процедуры, объёма документов, числа заседаний и самостоятельных споров, необходимости финансового анализа и привлечения внешних специалистов. В договоре отдельно фиксируются юридические услуги и применимые внешние расходы.'
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
            <span style={{ color: 'var(--color-text-main)' }}>Банкротство бизнеса</span>
          </>
        }
        superTitle="Банкротство бизнеса • Липецк и Липецкая область"
        title={
          <span style={{ display: 'block', maxWidth: '100%' }}>
            <span style={{ display: 'block' }}>Юрист по банкротству</span>
            <span style={{ display: 'block' }}>юридических лиц</span>
            <span style={{ display: 'block' }}>в Липецке</span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Проверим стадию, документы и банкротные риски, определим возможную стратегию и состав юридической помощи — для компании, кредитора или руководителя.
          </span>
        }
        primaryCtaText="Обсудить банкротную ситуацию"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_cta_bankrotstvo_biznesa"
        primaryCtaSubtext={
          <>
            <span>Перезвоним в течение 15 минут в рабочее время:</span><br />
            <span style={{ whiteSpace: 'nowrap' }}>
              <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (910) 350-31-11</a>
            </span>
          </>
        }
        trustItems={[
          { text: 'Работаем со стороны должника и кредитора' },
          { text: 'Сначала проверяем стадию, документы и риски' },
          { text: 'Состав работ и порядок оплаты фиксируем в договоре' }
        ]}
        imageUrl="/images/og/bankrotstvo-biznesa-og.jpg"
        imageName="Банкротная практика «Де-Юре»"
        imageSubtitle="Комплексное сопровождение процедур банкротства юридических лиц"
      />

      {/* ═══ БЛОК 2: ВЫБЕРИТЕ СВОЮ СИТУАЦИЮ ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
              Ролевая навигация
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 16px 0', lineHeight: 1.25 }}>
              Выберите свою ситуацию
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
              В банкротстве набор прав и рисков напрямую зависит от процессуальной роли. Выберите подходящий сценарий для перехода к профильной услуге.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            {situations.map((item, index) => (
              <div
                key={index}
                className="card hover-lift"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '2px'
                }}
              >
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
                    {item.role}
                  </div>
                  <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 12px 0', lineHeight: 1.35 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: '0 0 20px 0' }}>
                    {item.desc}
                  </p>
                </div>
                <Link
                  href={item.href}
                  className="btn btn-secondary"
                  style={{
                    fontSize: '13px',
                    padding: '10px 16px',
                    textAlign: 'center',
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-deep-blue)',
                    textDecoration: 'none',
                    fontWeight: 600,
                    display: 'block'
                  }}
                >
                  {item.btnText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: КОГДА НЕЛЬЗЯ ОТКЛАДЫВАТЬ ═══ */}
      <section className="section bg-light" style={{ padding: '70px 0', background: 'var(--gradient-cream)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '40px' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
              Критические маркеры
            </div>
            <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
              Когда нельзя откладывать обращение к юристу
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Банкротные процедуры строго привязаны к процессуальным срокам. Пропуск срока закрытия реестра или подготовки возражений может повлечь утрату прав.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '20px' }}>
            {urgencyItems.map((urg, i) => (
              <div key={i} style={{ background: '#FFFFFF', padding: '22px 24px', borderLeft: '4px solid var(--color-gold)', border: '1px solid var(--color-border)', borderLeftWidth: '4px' }}>
                <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '8px', fontFamily: 'var(--font-serif)' }}>
                  {urg.title}
                </strong>
                <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                  {urg.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: НАПРАВЛЕНИЯ ПОМОЩИ (ДОЧЕРНИЕ УСЛУГИ) ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
              Услуги кластера
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 16px 0', lineHeight: 1.25 }}>
              Направления банкротной помощи
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Каждое направление ведётся с учётом специфики процессуального статуса и актуальной судебной практики Арбитражного суда Липецкой области.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            {childServices.map((svc, idx) => (
              <Link
                key={idx}
                href={svc.href}
                className="card hover-lift"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-primary)',
                  padding: '28px',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '2px'
                }}
              >
                <div>
                  <h3 style={{ fontSize: '19px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.35 }}>
                    {svc.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: '0 0 20px 0' }}>
                    {svc.desc}
                  </p>
                </div>
                <span style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  {svc.btnText}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: ЧТО ПРОВЕРИТЬ ДО ВЫБОРА СТРАТЕГИИ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'rgba(23, 50, 77, 0.02)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '50px', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Комплексная диагностика
              </div>
              <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 16px 0', lineHeight: 1.25 }}>
                Что проверить до выбора стратегии
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                В банкротстве одно действие влияет сразу на компанию, кредиторов, сделки и личные риски руководства. Поэтому сначала мы проверяем не отдельный документ, а взаимосвязь ключевых обстоятельств:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {diagnosticPoints.map((point, pIdx) => (
                  <li key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '14.5px', color: 'var(--color-text-main)', lineHeight: 1.55 }}>
                    <div style={{ width: '8px', height: '8px', minWidth: '8px', background: 'var(--color-gold)', borderRadius: '50%', marginTop: '7px', flexShrink: 0 }} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '36px', borderTop: '4px solid var(--color-deep-blue)' }}>
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 16px 0' }}>
                Чего категорически не следует делать
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                Необдуманные действия в преддверии банкротства создают прямые основания для привлечения руководства к субсидиарной ответственности и уголовных рисков:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ padding: '12px 16px', background: 'rgba(217, 83, 79, 0.06)', borderLeft: '3px solid #D9534F', fontSize: '13.5px', color: 'var(--color-text-main)', lineHeight: 1.5 }}>
                  <strong>Не выводить активы</strong> по заниженным ценам или через цепочки аффилированных лиц — такие сделки легко оспариваются арбитражным судом.
                </div>
                <div style={{ padding: '12px 16px', background: 'rgba(217, 83, 79, 0.06)', borderLeft: '3px solid #D9534F', fontSize: '13.5px', color: 'var(--color-text-main)', lineHeight: 1.5 }}>
                  <strong>Не оформлять номинальную смену директора</strong> — закон возлагает ответственность на лиц, фактически контролировавших должника в период кризиса.
                </div>
                <div style={{ padding: '12px 16px', background: 'rgba(217, 83, 79, 0.06)', borderLeft: '3px solid #D9534F', fontSize: '13.5px', color: 'var(--color-text-main)', lineHeight: 1.5 }}>
                  <strong>Не уничтожать первичные документы</strong> и бухгалтерскую базу — утрата документации создаёт прямую презумпцию вины КДЛ (ст. 61.11 127-ФЗ).
                </div>
                <div style={{ padding: '12px 16px', background: 'rgba(217, 83, 79, 0.06)', borderLeft: '3px solid #D9534F', fontSize: '13.5px', color: 'var(--color-text-main)', lineHeight: 1.5 }}>
                  <strong>Не подписывать документы задним числом</strong> — экспертиза давности документов в суде выявит фальсификацию с передачей материалов в следственные органы.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 6: КАК СТРОИТСЯ РАБОТА ═══ */}
      <ProcessBlock
        title="Как строится работа"
        subtitle="Прозрачный порядок взаимодействия: от экспресс-анализа карточки дела до процессуальной защиты в арбитражном суде."
        alignTitle="center"
        steps={processSteps}
        ctaTitle="Нужна оценка банкротной ситуации?"
        ctaSubtitle="Сообщите номер дела или реквизиты компании — юристы проведут первичный разбор открытых данных."
        ctaButtonText="Обсудить ситуацию"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 7: СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость юридической помощи при банкротстве бизнеса"
        subtitle="Стоимость зависит от роли клиента, стадии дела, объёма документов и количества самостоятельных споров. До начала работы фиксируем состав услуг и порядок оплаты."
        tiers={pricingTiers}
        disclaimer="Вознаграждение арбитражного управляющего, государственные пошлины, обязательные публикации в ЕФРСБ и газете «Коммерсантъ», судебные депозиты, расходы на оценку и торги указываются отдельно и не включаются в гонорар юристов."
      />

      {/* ═══ БЛОК 8: КОМАНДА ПО ДЕЛУ (ФУНКЦИОНАЛЬНАЯ МОДЕЛЬ) ═══ */}
      <section className="section bg-white" style={{ padding: '70px 0', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
              Формирование рабочей группы
            </div>
            <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 16px 0', lineHeight: 1.25 }}>
              Команда специалистов по делу
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: '0 auto 36px auto', maxWidth: '720px' }}>
              В банкротстве бизнеса пересекаются арбитражный процесс, финансовый аудит, корпоративное и уголовное право. Состав проектной группы формируется индивидуально после диагностики обстоятельств дела.
            </p>

            <div className="grid grid-3" style={{ gap: '20px', textAlign: 'left' }}>
              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '24px', borderTop: '3px solid var(--color-primary)' }}>
                <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '8px', fontFamily: 'var(--font-serif)' }}>
                  Арбитражные юристы
                </strong>
                <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                  Процессуальное ведение дел в Арбитражном суде Липецкой области и апелляционных инстанциях, составление процессуальных документов и участие в заседаниях.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '24px', borderTop: '3px solid var(--color-gold)' }}>
                <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '8px', fontFamily: 'var(--font-serif)' }}>
                  Аудиторы и финансовые аналитики
                </strong>
                <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                  Анализ бухгалтерских балансов, выписок, финансового состояния должника, признаков фиктивного или преднамеренного банкротства.
                </p>
              </div>

              <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '24px', borderTop: '3px solid var(--color-deep-blue)' }}>
                <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '8px', fontFamily: 'var(--font-serif)' }}>
                  Профильные эксперты
                </strong>
                <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                  Подключение специалистов по налоговому и уголовному праву при выявлении параллельных рисков со стороны ФНС или правоохранительных органов.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 9: ПРАКТИКА ═══ */}
      <CasesBlock
        title="Примеры дел из практики банкротства"
        showAllLink="/praktika/"
        showAllText="Смотреть всю практику"
        showDemoWarning={true}
        cases={casesData}
      />

      {/* ═══ БЛОК 10: FAQ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы"
        title={<><span>Вопросы и ответы</span> <br /><span>о банкротстве бизнеса</span></>}
        subtitle="О процедурах, правах кредиторов, рисках директоров и оспаривании сделок"
        ctaText="Задать свой вопрос"
        ctaLink="#form"
        faqs={faqItems}
      />

      {/* ═══ БЛОК 11: ФИНАЛЬНАЯ ФОРМА ═══ */}
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
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Разберите банкротную ситуацию</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>до следующего шага</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Сообщите название компании или номер дела и кратко укажите свою роль. Юрист проверит, какие сведения нужны для первичного разбора и какой формат помощи можно обсудить.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Прямой контакт со специалистом</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните нам: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (910) 350-31-11</a>
                </p>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Конфиденциальность:</strong>
                Не указывайте в форме паспортные данные, банковские реквизиты, коммерческую тайну и другие конфиденциальные сведения. Безопасный способ передачи документов согласуем после контакта.
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="card" style={{ padding: '40px', background: '#FFFFFF', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
                <h3 style={{ fontSize: '22px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginTop: 0, marginBottom: '20px' }}>
                  Заявка на экспресс-разбор ситуации
                </h3>
                <ContactsForm
                  buttonText="Обсудить ситуацию"
                  analyticsGoal="lead_form_bankrotstvo_biznesa"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
