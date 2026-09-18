'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MilitaryHero from '@/components/MilitaryHero';
import ProcessBlock, { ProcessStep } from '@/components/ProcessBlock';
import PricingBlock, { PricingTier } from '@/components/PricingBlock';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import FAQBlock, { FAQItem } from '@/components/FAQBlock';
import SpecialistBlock from '@/components/SpecialistBlock';
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
      desc: 'Проверим заявление, карточку дела, требования и ближайшие процессуальные действия со стороны компании.',
      btnText: 'Передать номер дела',
      href: '#form'
    },
    {
      role: 'Кредитор',
      title: 'Контрагент вошёл в банкротство',
      desc: 'Проверим стадию, основания долга и возможный формат участия кредитора в процедуре для реального возврата средств.',
      btnText: 'Перейти к кредитору',
      href: '/biznesu/bankrotstvo-biznesa/predstavlenie-interesov-kreditora/'
    },
    {
      role: 'Кредитор',
      title: 'Нужно включить долг в реестр',
      desc: 'Оценим срок, комплект доказательств и подготовим требование для рассмотрения арбитражным судом.',
      btnText: 'Проверить срок и документы',
      href: '/biznesu/bankrotstvo-biznesa/vklyuchenie-v-reestr-trebovanij-kreditorov/'
    },
    {
      role: 'Руководитель / КДЛ',
      title: 'Директору или собственнику предъявляют личные требования',
      desc: 'Разберём основания субсидиарной ответственности, статус КДЛ, документы и выстроим правовую позицию защиты.',
      btnText: 'Перейти к защите КДЛ',
      href: '/biznesu/bankrotstvo-biznesa/zashchita-ot-subsidiarnoj-otvetstvennosti/'
    },
    {
      role: 'Сторона сделки',
      title: 'Управляющий или кредитор оспаривает сделку',
      desc: 'Проверим специальные и общие основания, фактическое исполнение и доказательства добросовестности сторон.',
      btnText: 'Перейти к банкротным сделкам',
      href: '/biznesu/bankrotstvo-biznesa/osparivanie-sdelok-pri-bankrotstve/'
    },
    {
      role: 'Участник дела',
      title: 'Управляющий нарушает права участника процедуры',
      desc: 'Определим способ защиты: запрос, жалоба, судебное обжалование, отстранение или убытки при наличии оснований.',
      btnText: 'Перейти к обжалованию',
      href: '/biznesu/bankrotstvo-biznesa/obzhalovanie-dejstvij-arbitrazhnogo-upravlyayushchego/'
    }
  ];

  const urgentItems = [
    {
      title: 'Получено заявление кредитора или определение суда',
      desc: 'Определение о принятии заявления или назначении заседания требует срочной подготовки правовой позиции до назначенной даты.'
    },
    {
      title: 'Опубликовано сообщение в ЕФРСБ или «Коммерсанте»',
      desc: 'Публикация запускает жёсткие процессуальные сроки на закрытие реестра требований кредиторов (30 дней при наблюдении, 2 месяца при конкурсном).'
    },
    {
      title: 'Предъявлено требование о субсидиарной ответственности',
      desc: 'Заявление к директору или собственнику требует немедленного сбора финансовой хронологии и доказательств экономической обоснованности решений.'
    },
    {
      title: 'Оспаривается сделка периода подозрительности',
      desc: 'Требование о возврате имущества или платежа требует превентивного сбора доказательств рыночности цен и обычной хозяйственной практики.'
    },
    {
      title: 'Управляющий затягивает отчёты или нарушает процедуру',
      desc: 'Непредоставление отчётов, сомнительные торги или необоснованные расходы требуют своевременной судебной фиксации нарушений.'
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
    {
      num: '01',
      title: 'Роль и цель стороны',
      desc: 'Определяем статус: сохранить работающий бизнес, цивилизованно завершить деятельность, вернуть долг, защитить сделку или личные активы руководства.'
    },
    {
      num: '02',
      title: 'Стадия судебного дела',
      desc: 'Проверяем, возбуждено ли дело в КАД, какая процедура введена (наблюдение, конкурсное производство) и какие судебные акты уже приняты.'
    },
    {
      num: '03',
      title: 'Структура обязательств',
      desc: 'Анализируем просроченные долги, разделяем реестровые и текущие платежи, выявляем спорные основания и риски начисления неустоек.'
    },
    {
      num: '04',
      title: 'Имущественный комплекс',
      desc: 'Проверяем активы, права требования, залоги, дебиторскую задолженность, открытые исполнительные производства и аресты счетов.'
    },
    {
      num: '05',
      title: 'Сделки периода кризиса',
      desc: 'Исследуем операции за 3 года до банкротства на предмет неравноценности встречного исполнения, предпочтения и вывода активов.'
    },
    {
      num: '06',
      title: 'Сохранность документации',
      desc: 'Оцениваем полноту бухгалтерских баз, актов, договоров и решений участников: утрата документации создаёт прямую презумпцию вины КДЛ.'
    }
  ];

  const processSteps: ProcessStep[] = [
    {
      num: '01',
      title: 'Уточняем роль и стадию',
      desc: 'Определяем процессуальный статус стороны, возбуждено ли дело и какое событие требует ближайшей юридической реакции.'
    },
    {
      num: '02',
      title: 'Проверяем открытые данные',
      desc: 'Изучаем карточку арбитражного дела, публикации в ЕФРСБ и «Коммерсанте», сведения о должнике и открытые исполнительные производства.'
    },
    {
      num: '03',
      title: 'Получаем документы безопасным способом',
      desc: 'Согласуем защищённый канал связи для передачи судебных, бухгалтерских, корпоративных и иных конфиденциальных материалов.'
    },
    {
      num: '04',
      title: 'Формируем карту рисков и сценариев',
      desc: 'Разделяем подтверждённые факты, недостающие сведения, правовые риски и допустимые законом варианты действий.'
    },
    {
      num: '05',
      title: 'Фиксируем объём работы в договоре',
      desc: 'Согласуем этапы, состав профильной группы юристов, стоимость юридических услуг и внешние расходы до начала действий.'
    },
    {
      num: '06',
      title: 'Ведём процедуру или обособленный спор',
      desc: 'Готовим процессуальные документы, участвуем в судебных заседаниях и взаимодействуем с арбитражным управляющим.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Первичная консультация',
      subtitle: 'Уточнение роли, стадии и задачи',
      price: 'от 5 000 ₽',
      popular: false,
      features: [
        { name: 'Анализ статуса дела и публикаций в ЕФРСБ', value: 'Да' },
        { name: 'Определение круга первоочередных рисков', value: 'Да' },
        { name: 'Список необходимых процессуальных документов', value: 'Да' }
      ],
      buttonText: 'Записаться',
      buttonHref: '#form'
    },
    {
      title: 'Банкротная диагностика',
      subtitle: 'Комплексная проверка материалов и реестров',
      price: 'от 30 000 ₽',
      popular: true,
      badgeText: 'Рекомендуется',
      features: [
        { name: 'Полная карта обязательств и активов', value: 'Да' },
        { name: 'Аудит сделок периода подозрительности', value: 'Да' },
        { name: 'Оценка субсидиарных рисков руководства', value: 'Да' },
        { name: 'Письменные сценарии действий со сметой', value: 'Да' }
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
        { name: 'Формирование расчёта и доказательственной базы', value: 'Да' },
        { name: 'Подготовка заявления с полным пакетом приложений', value: 'Да' },
        { name: 'Направление участникам и электронная подача в суд', value: 'Да' }
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
        { name: 'Участие в заседаниях арбитражного суда', value: 'Да' },
        { name: 'Контроль и участие в собраниях кредиторов', value: 'Да' },
        { name: 'Взаимодействие с арбитражным управляющим', value: 'Да' },
        { name: 'Регулярная правовая отчётность доверителю', value: 'Да' }
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
        { name: 'Формирование доказательственной базы', value: 'Да' },
        { name: 'Подготовка мотивированных возражений или жалоб', value: 'Да' },
        { name: 'Представительство в судебных инстанциях', value: 'Да' },
        { name: 'Обжалование судебных актов при необходимости', value: 'Да' }
      ],
      buttonText: 'Передать спор',
      buttonHref: '#form'
    }
  ];

  const casesData: CaseData[] = [
    {
      category: 'Должник / Производство',
      title: 'Компания-должник: законная подготовка к процедуре',
      problem: 'У производственной компании образовалась просрочка перед кредиторами на 38 млн ₽, начались аресты счетов ФССП, сделки кризисного периода вызывали вопросы.',
      action: 'Провели комплексную диагностику: отделили устранимые недостатки от рисков, восстановили первичные документы, подготовили заявление должника и план инвентаризации.',
      result: 'Заявление должника принято судом, введена процедура наблюдения, сняты аресты счетов, пресечены обвинения в преднамеренном банкротстве.'
    },
    {
      category: 'Кредитор / Поставка',
      title: 'Кредитор: защита прав и возврат долга в банкротстве',
      problem: 'Поставщик узнал о введении процедуры после публикации в ЕФРСБ и рисковал пропустить 30-дневный срок включения в реестр требований кредиторов.',
      action: 'Оперативно восстановили первичные документы по цепочке поставок, рассчитали сумму задолженности и штрафов, подали требование в суд и отбили возражения должника.',
      result: 'Требование в полном объёме включено в 3-ю очередь реестра кредиторов, обеспечено право голоса на первых собраниях кредиторов.'
    },
    {
      category: 'КДЛ / Защита руководителя',
      title: 'КДЛ: защита генерального директора от субсидиарной ответственности',
      problem: 'Конкурсный управляющий подал заявление о привлечении бывшего генерального директора к субсидиарной ответственности на сумму 45 млн ₽.',
      action: 'Восстановили хронологию управления, собрали корпоративную переписку и акты, доказали отсутствие причинно-следственной связи между решениями руководителя и кризисом компании.',
      result: 'Арбитражный суд Липецкой области полностью отказал в привлечении доверителя к субсидиарной ответственности.'
    }
  ];

  const faqItems: FAQItem[] = [
    {
      q: 'Когда компании нужен юрист по банкротству?',
      a: 'Не только после подачи заявления. Обратиться стоит, когда компания системно нарушает сроки платежей, несколько кредиторов ведут принудительное взыскание, активов недостаточно для всех обязательств либо руководство получило заявление о банкротстве. Юрист сначала проверяет факты и документы: финансовые трудности не означают, что единственным вариантом обязательно будет ликвидация.'
    },
    {
      q: 'Может ли компания сама обратиться с заявлением о банкротстве?',
      a: 'Закон предусматривает право, а в определённых обстоятельствах — прямую обязанность должника обратиться в арбитражный суд. Применимость оснований и момент возникновения обязанности определяются не только по общей сумме долгов: важны даты, платежи, активы, требования кредиторов и последствия расчёта с отдельными лицами.'
    },
    {
      q: 'Можно ли восстановить работу бизнеса вместо банкротства?',
      a: 'Возможные варианты зависят от экономики компании, структуры обязательств, позиции кредиторов и стадии кризиса. Диагностика может показать основания для переговоров, реструктуризации, мирового соглашения или предусмотренных законом реабилитационных процедур.'
    },
    {
      q: 'Может ли кредитор подать на банкротство должника?',
      a: 'Да, при наличии предусмотренных законом оснований и соблюдении требований к обращению. До подачи заявления важно оценить не только формальные условия, но и экономический смысл: наличие активов, других кредиторов, расходы на процедуру и шансы на пополнение конкурсной массы.'
    },
    {
      q: 'Отвечает ли директор личным имуществом по долгам компании?',
      a: 'Само банкротство компании не означает автоматического взыскания долгов с директора. Персональная ответственность рассматривается при наличии конкретных оснований: непередачи документации, совершения вредоносных сделок или неподачи заявления о банкротстве в установленный срок.'
    },
    {
      q: 'Могут ли отменить сделки, совершённые до банкротства?',
      a: 'Сделки и платежи могут проверяться по специальным банкротным и общегражданским основаниям. Значение имеют период совершения, встречное исполнение, рыночность цены, осведомлённость сторон и предпочтение отдельному кредитору. Сделка не становится недействительной автоматически только из-за последующего банкротства.'
    },
    {
      q: 'Сколько длится банкротство юридического лица?',
      a: 'Универсального срока нет. На продолжительность влияют стадия, объём имущества и требований, количество кредиторов, торги, оспаривание сделок, субсидиарная ответственность и жалобы. После первичного анализа можно обсуждать этапы, но не гарантировать фиксированную дату завершения.'
    },
    {
      q: 'От чего зависит стоимость сопровождения?',
      a: 'От роли клиента, стадии процедуры, объёма документов, числа заседаний и самостоятельных споров, необходимости финансового анализа и привлечения внешних специалистов. В договоре отдельно фиксируются юридические услуги и внешние расходы.'
    }
  ];

  return (
    <main>
      <Header />

      {/* ═══ БЛОК 1: HERO (ШАБЛОН MILITARY HERO) ═══ */}
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
        superTitle={
          <span style={{ whiteSpace: 'normal', display: 'inline-block', lineHeight: 1.4 }}>
            <span style={{ display: 'inline-block' }}>БАНКРОТСТВО БИЗНЕСА •</span> <br />
            <span style={{ display: 'inline-block' }}>Липецк и Арбитражный суд</span>
          </span>
        }
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Юрист по банкротству
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              юридических лиц в Липецке
            </span>
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
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Перезвоним в рабочее время
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              или ответим по телефону: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (910) 350-31-11</a>
            </span>
          </span>
        }
        trustItems={[
          { text: 'Работаем со стороны должника и кредитора' },
          { text: 'Сначала проверяем стадию, документы и риски' },
          { text: 'Состав работ и порядок оплаты фиксируем в договоре' },
          { text: 'Куратор направления — Владимир Викторович Начешников' }
        ]}
        imageUrl="/images/nacheshnikov.jpg"
        imageName="Владимир Викторович Начешников"
        imageSubtitle="Специалист по сопровождению процедур банкротства и арбитражным спорам, куратор направления"
        imageObjectPosition="center 15%"
      />

      {/* ═══ БЛОК 2: ВЫБЕРИТЕ СВОЮ СИТУАЦИЮ (КАНОНИЧЕСКИЙ ШАБЛОН «СИТУАЦИИ») ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'inline-block' }}>Выберите свою</span> <br />
              <span style={{ display: 'inline-block' }}>банкротную ситуацию</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              В банкротстве набор прав и рисков напрямую зависит от процессуальной роли. Выберите подходящий сценарий для перехода к профильной услуге.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '32px' }}>
            {situations.map((item, index) => (
              <div
                key={index}
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
                  {item.role && (
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
                      {item.role}
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

                {item.href.startsWith('/') ? (
                  <Link
                    href={item.href}
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
                    href={item.href}
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
          </div>

          {/* Баннер «Не нашли свою ситуацию?» */}
          <div
            style={{
              background: 'linear-gradient(135deg, var(--color-deep-blue) 0%, #17324D 100%)',
              padding: '40px 48px',
              borderTop: '3px solid var(--color-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '32px',
              flexWrap: 'wrap',
              boxShadow: '0 12px 30px rgba(11, 28, 42, 0.15)'
            }}
          >
            <div style={{ flex: '1 1 500px', minWidth: '280px' }}>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '26px', fontFamily: 'var(--font-serif)', color: '#FFFFFF', lineHeight: 1.3 }}>
                Не нашли свою ситуацию?
              </h3>
              <p style={{ margin: 0, fontSize: '15px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6 }}>
                <span style={{ display: 'inline-block' }}>Опишите вашу банкротную ситуацию в форме. Изучим имеющиеся документы</span> <br />
                <span style={{ display: 'inline-block' }}>и предложим возможные варианты решения.</span>
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
                  padding: '14px 28px',
                  fontWeight: 600,
                  whiteSpace: 'nowrap'
                }}
              >
                Описать ситуацию
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: КОГДА НЕЛЬЗЯ ОТКЛАДЫВАТЬ (КАНОНИЧЕСКИЙ ТЕМНО-СИНИЙ ШАБЛОН #URGENT) ═══ */}
      <section style={{ background: 'var(--color-deep-blue)', padding: '64px 0 56px', position: 'relative', overflow: 'hidden' }} id="urgent">
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '36px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontFamily: 'var(--font-serif)', color: '#FFFFFF', marginBottom: '12px', marginTop: 0, lineHeight: 1.25 }}>
              <span style={{ display: 'inline-block' }}>Когда нельзя затягивать</span> <br />
              <span style={{ display: 'inline-block' }}>с обращением к юристу</span>
            </h2>
            <div style={{ width: '60px', height: '2px', background: 'var(--color-gold)', marginBottom: '20px' }}></div>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', marginBottom: '40px', maxWidth: '720px', lineHeight: 1.6 }}>
              Банкротные процедуры строго привязаны к процессуальным срокам. Пропуск срока закрытия реестра или подготовки возражений может повлечь утрату прав или личную ответственность руководства.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '20px', marginBottom: '40px' }}>
            {urgentItems.map((item, i) => (
              <div
                key={i}
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
                      {item.title}
                    </div>
                  </div>
                  <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '14px', lineHeight: 1.55, margin: 0 }}>
                    {item.desc}
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
              <strong style={{ color: '#FFFFFF' }}>Важно:</strong> Пропуск срока на включение в реестр требований кредиторов при наблюдении лишает права голоса на первом собрании.
            </span> <br className="hidden-mobile" />
            <span style={{ display: 'inline-block' }}>
              В конкурсном производстве реестр закрывается через 2 месяца с момента публикации без возможности восстановления для коммерческих требований.
            </span>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '28px', display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <a href="tel:+79103503111" style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.02em' }} data-analytics="phone_click">
              +7 (910) 350-31-11
            </a>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>|</span>
            <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>
              Консультация дежурного юриста по банкротству
            </span>
            <a href="#form" className="btn btn-urgent-call" style={{ marginLeft: 'auto', padding: '12px 28px', fontSize: '14px' }}>
              Обсудить срочную ситуацию
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: НАПРАВЛЕНИЯ БАНКРОТНОЙ ПОМОЩИ (КАНОНИЧЕСКИЙ ШАБЛОН #DIRECTIONS) ═══ */}
      <section id="directions" className="section" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'inline-block' }}>Направления</span> <br />
              <span style={{ display: 'inline-block' }}>банкротной помощи</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Полный спектр услуг по банкротству юридических лиц в Липецке и Арбитражном суде Липецкой области.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            {childServices.map((svc, idx) => (
              <Link
                key={idx}
                href={svc.href}
                style={{ textDecoration: 'none', display: 'block', height: '100%' }}
              >
                <div
                  className="card service-card hover-lift"
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
                    position: 'relative'
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
                      fontWeight: 600,
                      marginTop: 'auto'
                    }}
                  >
                    <span>{svc.btnText}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: ЧТО ПРОВЕРИТЬ ДО ВЫБОРА СТРАТЕГИИ (КАНОНИЧЕСКИЙ ШАБЛОН #CHECK) ═══ */}
      <section className="section bg-white" id="check" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              <span style={{ display: 'inline-block' }}>Что проверить до выбора</span> <br />
              <span style={{ display: 'inline-block' }}>банкротной стратегии</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>В банкротстве одно процессуальное действие влияет на все сферы бизнеса.</span> <br />
              <span style={{ display: 'inline-block' }}>Сначала проверяем ключевые юридические контуры:</span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', position: 'relative', marginBottom: '40px' }}>
            {diagnosticPoints.map((item, idx) => (
              <div
                key={idx}
                className="hover-lift"
                style={{
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  padding: '36px 30px 32px 30px',
                  border: '1px solid var(--color-border)',
                  borderTop: '4px solid var(--color-gold)',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '24px',
                  background: 'var(--color-gold)',
                  color: '#FFFFFF',
                  fontSize: '12px',
                  fontWeight: 700,
                  padding: '2px 10px',
                  borderRadius: '2px',
                  letterSpacing: '0.05em'
                }}>
                  {item.num}
                </div>
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '8px 0 14px 0', lineHeight: 1.35 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Ошибки, которых нельзя допускать */}
          <div style={{
            background: 'var(--gradient-cream)',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid #D9534F',
            padding: '32px 36px',
            boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)'
          }}>
            <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0' }}>
              Чего категорически не следует делать перед процедурой:
            </h3>
            <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
              Необдуманные действия в преддверии банкротства создают прямые основания для привлечения руководства к субсидиарной ответственности:
            </p>
            <div className="grid grid-2" style={{ gap: '16px' }}>
              <div style={{ fontSize: '13.5px', color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>
                • <strong>Не выводить активы</strong> по заниженным ценам или через цепочки аффилированных лиц — сделки легко оспариваются.
              </div>
              <div style={{ fontSize: '13.5px', color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>
                • <strong>Не оформлять номинальную смену директора</strong> — закон возлагает ответственность на фактических бенефициаров (КДЛ).
              </div>
              <div style={{ fontSize: '13.5px', color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>
                • <strong>Не уничтожать бухгалтерскую базу и документацию</strong> — это создаёт презумпцию вины КДЛ по ст. 61.11 Закона о банкротстве.
              </div>
              <div style={{ fontSize: '13.5px', color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>
                • <strong>Не подписывать документы задним числом</strong> — судебная экспертиза давности выявит фальсификацию с передачей в следственные органы.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 6: КАК СТРОИТСЯ РАБОТА (PROCESS BLOCK) ═══ */}
      <ProcessBlock
        title="Как строится работа"
        subtitle="Прозрачный порядок взаимодействия: от экспресс-анализа карточки дела до процессуальной защиты в арбитражном суде."
        alignTitle="center"
        steps={processSteps}
        ctaTitle="Нужна профессиональная оценка банкротной ситуации?"
        ctaSubtitle="Сообщите номер дела или реквизиты компании — юристы проведут первичный разбор открытых данных."
        ctaButtonText="Обсудить ситуацию с юристом"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 7: КУРАТОР НАПРАВЛЕНИЯ (КАНОНИЧЕСКИЙ SPECIALIST BLOCK) ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Владимир Викторович Начешников"
        position="Специалист по корпоративным процедурам и банкротству бизнеса, куратор направления"
        imageUrl="/images/nacheshnikov.jpg"
        imagePosition="center 15%"
        profileHref="/specialisty/nacheshnikov-vladimir-viktorovich/"
        profileText="Подробнее о Владимире Викторовиче Начешникове →"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Банкротство предприятия — это сложный арбитражный процесс, в котором сталкиваются интересы должника, банков, налоговых органов и контрагентов.
          </span>,
          <span key="2" style={{ color: 'var(--color-deep-blue)', display: 'block', marginTop: '12px' }}>
            Владимир Викторович координирует правовой аудит ситуации, выстраивает процессуальную стратегию и контролирует ключевые этапы дела в Арбитражном суде Липецкой области.
          </span>
        ]}
        buttonText="Записаться на консультацию к куратору"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 8: СТОИМОСТЬ (PRICING BLOCK) ═══ */}
      <PricingBlock
        title="Стоимость юридической помощи при банкротстве бизнеса"
        subtitle="Стоимость зависит от роли клиента, стадии дела, объёма документов и количества самостоятельных споров. До начала работы фиксируем состав услуг и порядок оплаты."
        tiers={pricingTiers}
        disclaimer="Вознаграждение арбитражного управляющего, государственные пошлины, обязательные публикации в ЕФРСБ и газете «Коммерсантъ», судебные депозиты, расходы на оценку и торги указываются отдельно и не включаются в гонорар юристов."
        ctaTitle="Рассчитаем точную смету сопровождения"
        ctaSubtitle="Оставьте заявку — куратор направления изучит вводные данные и свяжется с вами в течение 15 минут."
        ctaButtonText="Рассчитать стоимость"
        ctaButtonLink="#form"
      />

      {/* ═══ БЛОК 9: ПРАКТИКА (CASES BLOCK) ═══ */}
      <CasesBlock
        title="Примеры дел из практики банкротства"
        showAllLink="/praktika/"
        showAllText="Смотреть всю практику →"
        showDemoWarning={true}
        cases={casesData}
      />

      {/* ═══ БЛОК 10: FAQ (FAQ BLOCK) ═══ */}
      <FAQBlock
        superTitle="Частые вопросы"
        title={<><span>Вопросы и ответы</span> <br /><span>о банкротстве бизнеса</span></>}
        subtitle="О процедурах, правах кредиторов, рисках директоров и оспаривании сделок"
        ctaText="Задать свой вопрос"
        ctaLink="#form"
        faqs={faqItems}
      />

      {/* ═══ БЛОК 11: ФИНАЛЬНАЯ ФОРМА (СВЯЗАТЬСЯ С НАМИ) — КАНОНИЧЕСКИЙ ШАБЛОН ═══ */}
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
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Прямой контакт со специалистом</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните нам: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (910) 350-31-11</a>
                </p>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '6px' }}>
                  Липецк, ул. Советская, д. 35, офис 213 (приём по записи)
                </div>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Конфиденциальность:</strong>
                Не указывайте в форме паспортные данные, банковские реквизиты, коммерческую тайну и другие конфиденциальные сведения. Безопасный способ передачи документов согласуем после контакта.
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Экспресс-разбор ситуации"
                subtitle="Оставьте контакты и номер дела — юрист свяжется с вами в течение 15 минут в рабочее время."
                subtext="Если вы оставите заявку вечером или в выходной день, мы свяжемся с вами в ближайший рабочий день."
                buttonText="Обсудить ситуацию"
                commentPlaceholder="Кратко укажите суть задачи, номер дела или реквизиты должника…"
                hiddenFields={[
                  { name: 'source_page', value: '/biznesu/bankrotstvo-biznesa/' },
                  { name: 'service', value: 'Банкротство бизнеса в Липецке' }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 12: FOOTER ═══ */}
      <Footer />
    </main>
  );
}
