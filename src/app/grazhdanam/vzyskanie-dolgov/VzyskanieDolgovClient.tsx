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

export default function VzyskanieDolgovClient() {
  const situations = [
    {
      title: 'Срок возврата прошёл',
      text: 'Должник не отвечает, просит новые отсрочки либо платит нерегулярно мелкими частями.',
      tag: 'Просрочка'
    },
    {
      title: 'Есть расписка',
      text: 'Нужно проверить её содержание, передачу денег, срок, проценты и возможные возражения должника.',
      tag: 'Письменный документ'
    },
    {
      title: 'Есть договор займа',
      text: 'Обязательство не исполнено полностью или частично; требуется расчёт и выбор судебного порядка.',
      tag: 'Договор'
    },
    {
      title: 'Расписки нет',
      text: 'Сохранились банковский перевод, переписка, голосовые сообщения, назначение платежа или частичный возврат.',
      tag: 'Без расписки'
    },
    {
      title: 'Долг оспаривают',
      text: 'Должник утверждает, что деньги были подарком, оплатой, возвращены либо фактически не передавались.',
      tag: 'Спор о долге'
    },
    {
      title: 'Сделка не состоялась',
      text: 'Деньги перечислены, но встречное предоставление отсутствует и основание удержания нужно квалифицировать.',
      tag: 'Неосновательное удержание'
    },
    {
      title: 'Есть риск утраты имущества',
      text: 'Нужно оценить основания для обеспечительных мер и не подменять доказательства предположениями.',
      tag: 'Обеспечение'
    },
    {
      title: 'Дело уже в суде',
      text: 'Необходимо проверить иск, возражения, сроки и сформировать позицию до судебного заседания.',
      tag: 'Судебный процесс'
    }
  ];

  const auditItems = [
    {
      title: 'Правовое основание',
      desc: 'Заём, договорное требование, возврат неосновательно полученного или иной юридический состав.'
    },
    {
      title: 'Доказательства',
      desc: 'Какие факты подтверждает каждый документ и каких связующих доказательств не хватает.'
    },
    {
      title: 'Сроки',
      desc: 'Наступил ли срок исполнения, требуется ли требование о возврате, когда начинается и мог прерываться срок исковой давности.'
    },
    {
      title: 'Расчёт',
      desc: 'Основная сумма, проценты, неустойка, частичные платежи, встречные требования и судебные расходы.'
    },
    {
      title: 'Судебный порядок',
      desc: 'Возможен ли судебный приказ или нужен иск; какой суд компетентен и есть ли договорная подсудность.'
    },
    {
      title: 'Риски возражений',
      desc: 'Безденежность займа, иной характер платежа, возврат, зачет, недействительность, спор об авторстве подписи или переписки.'
    },
    {
      title: 'Исполнимость',
      desc: 'Какая информация о должнике доступна законно и оправданны ли расходы на спор с учётом перспектив исполнения.'
    },
    {
      title: 'Обеспечение',
      desc: 'Есть ли фактические основания просить суд о мерах и можно ли подтвердить риск затруднения исполнения.'
    }
  ];

  const helpItems = [
    {
      title: 'Правовой анализ',
      desc: 'Изучение документов, хронологии, доказательств, сроков, расчёта и возможных возражений.'
    },
    {
      title: 'Требование и переговоры',
      desc: 'Подготовка юридически точного требования, предложение условий урегулирования, анализ проекта соглашения или графика.'
    },
    {
      title: 'Расчёт требований',
      desc: 'Основной долг, проценты и иные суммы только при наличии правового основания; фиксация частичных оплат.'
    },
    {
      title: 'Судебный приказ или иск',
      desc: 'Выбор процедуры, подготовка заявления и приложений, устранение процессуальных рисков.'
    },
    {
      title: 'Представительство в суде',
      desc: 'Позиция, доказательства, ответы на возражения, участие в заседаниях, получение судебного акта.'
    },
    {
      title: 'Переход к исполнению',
      desc: 'Получение исполнительного документа, выбор способа предъявления и передача в отдельное сопровождение, если оно требуется.'
    }
  ];

  const routesScenarios = [
    {
      num: '01',
      tag: 'Сценарий 01 • Расписка и договор',
      title: 'Если есть расписка или договор займа',
      desc: 'Классическая ситуация, когда факт займа и обязательство возврата зафиксированы на бумаге. Проверяем оригинал, условия срока возврата, проценты, частичные оплаты и возможные возражения должника.',
      proofPoints: [
        'Кто указан заимодавцем и заёмщиком (полнота реквизитов)',
        'Подтверждена ли фактическая передача денег в полном объёме',
        'Наступил ли установленный договором срок возврата займа',
        'Проверка расчёта процентов (по договору либо ст. 395 ГК РФ)',
        'Отсутствие пороков формы и встречных долговых расписок'
      ],
      solutionTitle: 'Предлагаемое решение',
      solution: 'Прямой судебный иск о взыскании долга и процентов по ст. 807, 808 ГК РФ с одновременным ходатайством об обеспечительных мерах (арест банковских счетов и имущества должника).'
    },
    {
      num: '02',
      tag: 'Сценарий 02 • Перевод без расписки',
      title: 'Если деньги перевели без расписки',
      desc: 'Отсутствие бумажной расписки не исключает защиту, но делает решающей связь между доказательствами. Банковский перевод подтверждает движение средств, но требует доказывания оснований платежа.',
      proofPoints: [
        'Банковская выписка: получатель, дата, сумма и назначение платежа',
        'Переписка в мессенджерах/почте: факт долга, сроки и возврат',
        'Частичный возврат: связь поступивших сумм с обязательством',
        'Письменное признание долга (в сообщениях или аудиозаписях)',
        'Исключение безвозмездного характера (не подарок и не оплата)'
      ],
      solutionTitle: 'Предлагаемое решение',
      solution: 'Иск о взыскании неосновательного обогащения (ст. 1102 ГК РФ) и процентов по ст. 395 ГК РФ с судебным запросом сведений о банковских счетах ответчика.'
    },
    {
      num: '03',
      tag: 'Сценарий 03 • Без подтверждения займа',
      title: 'Деньги передали, но заём не подтверждается',
      desc: 'Сложные случаи, когда отношения сторон нельзя квалифицировать как заём: платёж связан с несостоявшейся сделкой, срывом подряда/услуги, ошибкой или отсутствующим встречным предоставлением.',
      proofPoints: [
        'Оплата за товар, работы или услуги, которые не были предоставлены',
        'Перечисление аванса в расчёте на несостоявшуюся сделку',
        'Ошибочный платёж третьему лицу при отсутствии правовых оснований',
        'Удержание денежных средств после прекращения договорённости',
        'Фиксация мотивированного отказа от сделки и требования возврата'
      ],
      solutionTitle: 'Предлагаемое решение',
      solution: 'Расторжение договорённости в одностороннем порядке, взыскание неотработанного аванса или убытков по нормам ГК РФ с компенсацией всех судебных расходов.'
    }
  ];

  const processSteps: ProcessStep[] = [
    {
      num: '01',
      title: 'Первичная связь',
      desc: 'Вы кратко описываете основание долга, сумму, срок и текущую стадию. Мы определяем, какие материалы нужны для оценки.'
    },
    {
      num: '02',
      title: 'Анализ',
      desc: 'Юрист изучает документы и хронологию, проверяет расчёт, сроки, доказательства и вероятные возражения.'
    },
    {
      num: '03',
      title: 'Стратегия',
      desc: 'Объясняем возможные маршруты, ограничения, расходы и границу между судебным решением и фактическим исполнением.'
    },
    {
      num: '04',
      title: 'Досудебный этап',
      desc: 'При необходимости готовим требование, ведём переговоры и фиксируем условия урегулирования.'
    },
    {
      num: '05',
      title: 'Суд',
      desc: 'Готовим заявление и доказательства, представляем интересы и реагируем на позицию должника.'
    },
    {
      num: '06',
      title: 'Исполнение',
      desc: 'Получаем исполнительный документ, определяем порядок предъявления и объём дальнейшего сопровождения.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Первичный анализ',
      subtitle: 'Оценка расписки и доказательств',
      popular: false,
      price: '2 000 ₽',
      priceUnit: 'за консультацию',
      features: [
        { name: 'Правовой анализ расписки или договора', value: 'Включено' },
        { name: 'Проверка банковских выписок и переписки', value: 'Включено' },
        { name: 'Расчёт основного долга, процентов и неустойки', value: 'Включено' },
        { name: 'Оценка рисков возражений и перспектив исполнения', value: 'Включено' }
      ],
      exclusions: 'Подготовка процессуальных документов и представительство в суде оплачиваются отдельно',
      buttonText: 'Заказать анализ',
      buttonHref: '#form'
    },
    {
      title: 'Досудебное урегулирование',
      subtitle: 'Требование, претензия, переговоры',
      popular: false,
      price: 'от 10 000 ₽',
      priceUnit: 'за этап работы',
      features: [
        { name: 'Подготовка мотивированного требования о возврате', value: 'Включено' },
        { name: 'Фиксация признания долга и прерывания давности', value: 'Включено' },
        { name: 'Разработка проекта соглашения или графика выплат', value: 'Включено' },
        { name: 'Обеспечение исполнения обязательства', value: 'Включено' }
      ],
      exclusions: 'Судебные заседания и сбор дополнительных доказательств оплачиваются отдельно',
      buttonText: 'Начать урегулирование',
      buttonHref: '#form'
    },
    {
      title: 'Судебное взыскание',
      subtitle: 'Приказ или иск с сопровождением',
      popular: false,
      price: 'от 35 000 ₽',
      priceUnit: 'за ведение дела',
      features: [
        { name: 'Подготовка заявления о судебном приказе или иска', value: 'Включено' },
        { name: 'Формирование доказательственной базы для суда', value: 'Включено' },
        { name: 'Заявление ходатайств об обеспечительных мерах', value: 'Включено' },
        { name: 'Представительство юриста в судебных заседаниях', value: 'Включено' }
      ],
      exclusions: 'Госпошлина, нотариальные расходы, апелляция и последующие заседания сверх включённых трёх — отдельно',
      buttonText: 'Взыскать через суд',
      buttonHref: '#form'
    },
    {
      title: 'Исполнительный этап',
      subtitle: 'Работа с приставами и банками',
      popular: false,
      price: 'от 15 000 ₽',
      priceUnit: 'за сопровождение',
      features: [
        { name: 'Предъявление листа в банк или ФССП', value: 'Включено' },
        { name: 'Розыск счетов и имущества должника', value: 'Включено' },
        { name: 'Контроль действий пристава и сроков', value: 'Включено' },
        { name: 'Обжалование бездействия при необходимости', value: 'Включено' }
      ],
      exclusions: 'Оплата экспертиз, работы оценщика и розыскных мероприятий оплачивается отдельно',
      buttonText: 'Подключить юриста',
      buttonHref: '#form'
    }
  ];

  const casesData: CaseData[] = [
    {
      title: 'Взыскали долг по расписке, проценты и судебные расходы',
      category: 'Взыскание по расписке',
      problem:
        'Клиент передал знакомому 650 000 ₽. В расписке были указаны сумма и срок возврата, но должник после нескольких отсрочек заявил, что часть денег вернул наличными. Подтверждений возврата он не представил.',
      action:
        'Проверили оригинал расписки и переписку, зафиксировали признание остатка долга, подготовили расчёт и требование. После отказа подали иск, представили суду хронологию отношений и возражения на довод о наличном возврате.',
      result:
        'Суд взыскал основной долг, предусмотренные законом суммы и подтверждённые судебные расходы. После вступления решения в силу получили исполнительный лист и согласовали порядок дальнейшего взыскания.'
    },
    {
      title: 'Подтвердили заём переводом, перепиской и частичным возвратом',
      category: 'Взыскание без расписки',
      problem:
        'Расписка не составлялась. Клиент перевёл 380 000 ₽ на счёт знакомого, а в переписке стороны обсуждали срок возврата. Позже должник вернул 50 000 ₽ и попросил отсрочку, но в суде назвал перевод помощью без обязанности возврата.',
      action:
        'Сопоставили банковские документы, сообщения до и после перевода и частичный платёж. Подготовили нотариально пригодный протокол доказательств, расчёт остатка и позицию о содержании договорённости сторон.',
      result:
        'Суд оценил доказательства в совокупности и взыскал подтверждённый остаток обязательства. Довод о подарке не был подтверждён обстоятельствами передачи и последующим признанием возврата.'
    },
    {
      title: 'Вернули оплату по несостоявшейся сделке',
      category: 'Неосновательное обогащение',
      problem:
        'Клиент перечислил 920 000 ₽ в счёт покупки имущества. Договор в согласованной форме стороны не заключили, имущество не передали, а получатель отказался возвращать деньги и утверждал, что платёж был задатком.',
      action:
        'Изучили переговоры, назначение платежа и документы о предполагаемой сделке, проверили наличие соглашения о задатке и выбрали правовое основание требования. Направили требование, затем обратились в суд.',
      result:
        'Суд установил отсутствие подтверждённого основания удерживать перечисленную сумму и взыскал деньги с предусмотренными законом начислениями и судебными расходами.'
    }
  ];

  const faqItems = [
    {
      q: 'Можно ли взыскать долг по расписке без нотариуса?',
      a: 'Да, отсутствие нотариального удостоверения само по себе не лишает расписку доказательственного значения. Но юрист проверит её содержание, подпись, передачу денег, срок и возможные возражения. Один документ не даёт автоматической гарантии результата.'
    },
    {
      q: 'Что делать, если в расписке не указан срок возврата?',
      a: 'Порядок наступления обязанности зависит от содержания документа и закона. Может потребоваться надлежащее требование о возврате и ожидание установленного срока. Дату начала расчёта и исковой давности следует определять по документам.'
    },
    {
      q: 'Можно ли взыскать долг без расписки?',
      a: 'Иногда можно, если совокупность допустимых доказательств подтверждает именно обязанность вернуть деньги. Оцениваются перевод, назначение платежа, переписка, признание долга, частичный возврат и иные обстоятельства.'
    },
    {
      q: 'Достаточно ли банковского перевода на карту?',
      a: 'Перевод подтверждает движение денег, но не всегда его основание. Нужно показать, почему получатель обязан вернуть сумму, а не получил её как подарок, оплату или по другому основанию.'
    },
    {
      q: 'Можно ли взыскать проценты и неустойку?',
      a: 'Это зависит от договора, вида обязательства, периода просрочки и применимых норм. Расчёт должен быть проверяемым; суд может оценивать основания и размер отдельных начислений.'
    },
    {
      q: 'Обязательно ли направлять претензию?',
      a: 'Не для каждого частного спора действует одинаковый обязательный досудебный порядок. Однако требование может быть необходимо для наступления срока возврата, фиксации позиции и попытки урегулирования. Его цель определяет юрист.'
    },
    {
      q: 'Судебный приказ или иск — что выбрать?',
      a: 'Приказ возможен только для предусмотренных законом бесспорных требований и в пределах установленной суммы. Если есть спор о праве, сложные доказательства или ожидаются возражения, может потребоваться иск.'
    },
    {
      q: 'Можно ли арестовать имущество до решения суда?',
      a: 'Можно просить обеспечительные меры, но суд оценивает их связь с требованием, соразмерность и риск затруднения исполнения. Одного предположения, что должник продаст имущество, может быть недостаточно.'
    },
    {
      q: 'Что будет, если у должника нет официального дохода и имущества?',
      a: 'Судебный акт подтверждает требование, но не создаёт активы. До иска важно сопоставить расходы и доступные сведения; после решения возможна отдельная стратегия исполнительного производства, однако возврат денег нельзя гарантировать.'
    },
    {
      q: 'Должник живёт в другом регионе — можно ли вести дело?',
      a: 'Подсудность и формат участия зависят от вида требования, адреса ответчика, договора и суда. Часть работы можно провести дистанционно; необходимость личного участия определяем после анализа.'
    },
    {
      q: 'Суд уже вынес решение. Куда обращаться дальше?',
      a: 'Если спор о долге завершён, основной вопрос обычно переходит в исполнительное производство: получение и предъявление документа, действия пристава, сведения об активах и жалобы. Для этого предусмотрено отдельное направление.'
    },
    {
      q: 'Можно ли взыскать расходы на юриста?',
      a: 'Судебные расходы можно заявить при наличии подтверждающих документов. Их распределение и размер определяет суд с учётом результата дела, разумности и обстоятельств конкретного спора.'
    }
  ];

  return (
    <main style={{ position: 'relative', overflowX: 'hidden' }}>
      <Header />

      {/* ═══ БЛОК 1: HERO (MILITARY HERO) ═══ */}
      <MilitaryHero
        breadcrumbs={
          <>
            <Link href="/" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>Главная</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/grazhdanam/" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>Гражданам</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Взыскание долгов</span>
          </>
        }
        superTitle="Частные долги • помощь взыскателю • Липецк"
        title="Взыскание долгов с физических лиц в Липецке"
        subtitle="Оценим документы, доказательства и реальную перспективу взыскания — от требования должнику до суда и передачи решения на исполнение."
        trustItems={[
          { text: 'По расписке или договору займа' },
          { text: 'Без расписки — по переводу, переписке и другим доказательствам' },
          { text: 'С учётом того, как решение можно будет исполнить' }
        ]}
        afterTrustContent={
          <p style={{ fontSize: '15px', color: 'var(--color-deep-blue)', opacity: 0.9, margin: '16px 0 24px 0', lineHeight: 1.5, fontWeight: 500 }}>
            Для первичной оценки достаточно кратко указать сумму, на чём основан долг и наступил ли срок возврата. Документы передаются после связи с юристом согласованным способом.
          </p>
        }
        primaryCtaText="Разобрать ситуацию с долгом"
        primaryCtaLink="#form"
        primaryCtaSubtext="Ответим в течение 15 минут в рабочее время"
        secondaryCtaText="Позвонить юристу"
        secondaryCtaLink="tel:+74742201525"
        imageUrl="/images/smolyaninova.jpg"
        imageName="Смольянинова Марина Валерьевна"
        imageSubtitle="Ведущий юрист ЮК «Де-Юре» • куратор направления"
      />

      {/* ═══ БЛОК 2: СИТУАЦИИ (ШАБЛОН ИНТЕРАКТИВНОГО НАВИГАТОРА СИТУАЦИЙ) ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2
              className="with-accent"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 4vw, 42px)',
                color: 'var(--color-deep-blue)',
                marginBottom: '16px',
                marginTop: 0,
                lineHeight: 1.2
              }}
            >
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                В каких ситуациях
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                мы помогаем взыскателю
              </span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0, textWrap: 'balance' }}>
              Даже если должник признаёт обязательство, важно правильно зафиксировать сумму, срок и основание передачи денег. Если он спорит — решающее значение имеет вся совокупность документов и действий сторон.
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '20px', marginBottom: '40px' }}>
            {situations.map((item, idx) => (
              <div
                key={idx}
                className="card hover-lift"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.95) 100%)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  borderRadius: '0',
                  padding: '28px 22px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 18px rgba(23, 50, 77, 0.05)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '-15px',
                  width: '80px',
                  height: '80px',
                  opacity: 0.04,
                  pointerEvents: 'none',
                  color: 'var(--color-deep-blue)'
                }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>

                <div>
                  <div style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'var(--color-primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: '10px',
                    background: 'rgba(23, 50, 77, 0.06)',
                    padding: '3px 8px',
                    display: 'inline-block',
                    borderRadius: '2px'
                  }}>
                    {item.tag}
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '17px',
                    fontWeight: 600,
                    color: 'var(--color-deep-blue)',
                    margin: '0 0 10px 0',
                    lineHeight: 1.35
                  }}>
                    {item.title}
                  </h3>

                  <p style={{
                    fontSize: '13.5px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.55,
                    margin: 0
                  }}>
                    {item.text}
                  </p>
                </div>

                <a
                  href="#form"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--color-primary)',
                    fontSize: '13px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    marginTop: '18px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-primary)')}
                >
                  <span>Оценить перспективу</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ padding: '14px 28px' }}>
              Понять, какие доказательства важны →
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: РИСКИ ПРОМЕДЛЕНИЯ (ШАБЛОН DARK URGENT BANNER) ═══ */}
      <section style={{ background: 'var(--color-deep-blue)', padding: '64px 0 56px', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '36px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontFamily: 'var(--font-serif)', color: '#FFFFFF', marginBottom: '12px', marginTop: 0, lineHeight: 1.25 }}>
              <span style={{ display: 'inline-block' }}>Когда важно начать взыскание</span> <br />
              <span style={{ display: 'inline-block' }}>без промедления</span>
            </h2>
            <div style={{ width: '60px', height: '2px', background: 'var(--color-gold)', marginBottom: '20px' }}></div>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', margin: 0, maxWidth: '720px', lineHeight: 1.6 }}>
              В делах о возврате долгов время почти всегда работает на должника: ликвидное имущество переоформляется, счета обнуляются, а пропуск срока давности безвозвратно лишает права на судебную защиту.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '40px' }}>
            <div
              className="urgent-card"
              style={{
                background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)',
                padding: '32px 28px',
                borderTop: '4px solid var(--color-gold)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px', minHeight: '44px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', marginTop: 0, lineHeight: 1.3 }}>
                  Истекает 3-летний срок давности
                </div>
              </div>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '14.5px', lineHeight: 1.6, margin: 0 }}>
                Общий срок исковой давности по долгам — 3 года (ст. 196 ГК РФ). При его пропуске суд отказывает в иске по заявлению должника, даже если расписка подлинная, а долг очевиден.
              </p>
            </div>

            <div
              className="urgent-card"
              style={{
                background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)',
                padding: '32px 28px',
                borderTop: '4px solid var(--color-gold)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px', minHeight: '44px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', marginTop: 0, lineHeight: 1.3 }}>
                  Должник избавляется от имущества
                </div>
              </div>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '14.5px', lineHeight: 1.6, margin: 0 }}>
                Продажа автомобилей, дарение долей в недвижимости родственникам и вывод денег со счетов требуют немедленного заявления в суд ходатайства об обеспечительных мерах (аресте активов).
              </p>
            </div>

            <div
              className="urgent-card"
              style={{
                background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)',
                padding: '32px 28px',
                borderTop: '4px solid var(--color-gold)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px', minHeight: '44px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="9" y1="9" x2="15" y2="15"></line>
                  <line x1="15" y1="9" x2="9" y2="15"></line>
                </svg>
                <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', marginTop: 0, lineHeight: 1.3 }}>
                  Угроза банкротства должника
                </div>
              </div>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '14.5px', lineHeight: 1.6, margin: 0 }}>
                Если должник инициирует банкротство раньше, чем вступит в силу решение суда, взыскать средства в общем порядке станет невозможно, а долг может быть списан арбитражным судом.
              </p>
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '28px', display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <a href="tel:+74742201525" style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.02em' }}>
              +7 (4742) 20-15-25
            </a>
            <a href="tel:+74742201525" className="btn btn-urgent-call" style={{ padding: '14px 28px', fontSize: '15px' }}>
              Позвонить юристу
            </a>
            <a href="#form" className="btn btn-urgent-outline" style={{ padding: '14px 28px', fontSize: '15px' }}>
              Описать ситуацию
            </a>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
              Перезвоним в течение 15 минут в рабочее время
            </span>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: ДВА КОНТУРА ВЗЫСКАНИЯ (КОНТРАСТНЫЙ СПЛИТ-ШАБЛОН) ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '40px' }}>
            <div style={{
              fontSize: '12.5px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '10px'
            }}>
              Правовая специфика взыскания
            </div>
            <h2
              className="with-accent"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(26px, 3.5vw, 38px)',
                color: 'var(--color-deep-blue)',
                marginBottom: '16px',
                lineHeight: 1.25,
                marginTop: 0
              }}
            >
              Доказать долг и получить деньги — две разные задачи
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, lineHeight: 1.6, margin: 0 }}>
              Суд оценивает, возникло ли обязательство, наступил ли срок возврата и как рассчитана сумма. После решения начинается другая задача: найти законный источник исполнения и правильно взаимодействовать с приставом, банком или иным органом. Поэтому до иска мы оцениваем обе стороны ситуации — доказательства и практическую исполнимость.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '28px' }}>
            {/* Контур 1: Доказуемость */}
            <div
              style={{
                position: 'relative',
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid rgba(193, 160, 102, 0.28)',
                boxShadow: '0 12px 32px rgba(16, 39, 59, 0.06), 0 2px 6px rgba(16, 39, 59, 0.03)',
                padding: '38px 32px',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden'
              }}
            >
              {/* Decorative top accent gradient bar */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, var(--color-gold) 0%, #E8D3A7 100%)'
                }}
              />
              {/* Decorative subtle background watermark */}
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '20px',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '76px',
                  fontWeight: 700,
                  color: 'rgba(193, 160, 102, 0.07)',
                  lineHeight: 1,
                  pointerEvents: 'none',
                  userSelect: 'none'
                }}
              >
                01
              </div>

              {/* Header: badge + bespoke emblem */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px', position: 'relative', zIndex: 1 }}>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 800,
                    color: 'var(--color-gold)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    background: 'rgba(193, 160, 102, 0.1)',
                    border: '1px solid rgba(193, 160, 102, 0.28)',
                    borderRadius: '20px',
                    padding: '5px 14px'
                  }}
                >
                  Контур 01 • Доказуемость
                </span>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, rgba(193, 160, 102, 0.18) 0%, rgba(193, 160, 102, 0.05) 100%)',
                    border: '1px solid rgba(193, 160, 102, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-gold)',
                    boxShadow: '0 2px 8px rgba(193, 160, 102, 0.12)'
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="3" x2="12" y2="21"></line>
                    <path d="M4 7l8-4 8 4"></path>
                    <path d="M4 7v4a4 4 0 0 0 8 0V7"></path>
                    <path d="M12 7v4a4 4 0 0 0 8 0V7"></path>
                    <path d="M9 21h6"></path>
                  </svg>
                </div>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '23px',
                  color: 'var(--color-deep-blue)',
                  margin: '0 0 20px 0',
                  lineHeight: 1.3,
                  position: 'relative',
                  zIndex: 1
                }}
              >
                Судебное признание долга
              </h3>

              {/* Items: bespoke structural rows with custom gold indicators */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', position: 'relative', zIndex: 1 }}>
                {[
                  'Основание передачи денег и точное содержание договорённости.',
                  'Расписка, договор, платёжные документы, переписка и поведение сторон.',
                  'Срок возврата, исковая давность, частичные платежи и признание долга.',
                  'Расчёт основного долга, процентов, неустойки и судебных расходов.'
                ].map((txt, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '14px',
                      padding: '12px 14px',
                      borderRadius: '10px',
                      background: 'rgba(249, 246, 240, 0.55)',
                      border: '1px solid rgba(193, 160, 102, 0.16)'
                    }}
                  >
                    <div
                      style={{
                        width: '22px',
                        height: '22px',
                        minWidth: '22px',
                        borderRadius: '6px',
                        background: 'linear-gradient(135deg, rgba(193, 160, 102, 0.22) 0%, rgba(193, 160, 102, 0.08) 100%)',
                        border: '1px solid rgba(193, 160, 102, 0.45)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '1px',
                        flexShrink: 0
                      }}
                    >
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                        <path d="M2.2 6.2L4.6 8.6L9.8 3.4" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span style={{ fontSize: '14.5px', color: 'var(--color-deep-blue)', lineHeight: 1.52, fontWeight: 450 }}>
                      {txt}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Контур 2: Исполнимость */}
            <div
              style={{
                position: 'relative',
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid rgba(23, 50, 77, 0.22)',
                boxShadow: '0 12px 32px rgba(16, 39, 59, 0.06), 0 2px 6px rgba(16, 39, 59, 0.03)',
                padding: '38px 32px',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden'
              }}
            >
              {/* Decorative top accent gradient bar */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, var(--color-deep-blue) 0%, #2B5780 100%)'
                }}
              />
              {/* Decorative subtle background watermark */}
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '20px',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '76px',
                  fontWeight: 700,
                  color: 'rgba(23, 50, 77, 0.06)',
                  lineHeight: 1,
                  pointerEvents: 'none',
                  userSelect: 'none'
                }}
              >
                02
              </div>

              {/* Header: badge + bespoke emblem */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px', position: 'relative', zIndex: 1 }}>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 800,
                    color: 'var(--color-deep-blue)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    background: 'rgba(23, 50, 77, 0.08)',
                    border: '1px solid rgba(23, 50, 77, 0.22)',
                    borderRadius: '20px',
                    padding: '5px 14px'
                  }}
                >
                  Контур 02 • Исполнимость
                </span>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, rgba(23, 50, 77, 0.14) 0%, rgba(23, 50, 77, 0.04) 100%)',
                    border: '1px solid rgba(23, 50, 77, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-deep-blue)',
                    boxShadow: '0 2px 8px rgba(23, 50, 77, 0.1)'
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <path d="M12 8v4"></path>
                    <path d="M12 16h.01"></path>
                  </svg>
                </div>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '23px',
                  color: 'var(--color-deep-blue)',
                  margin: '0 0 20px 0',
                  lineHeight: 1.3,
                  position: 'relative',
                  zIndex: 1
                }}
              >
                Фактический возврат средств
              </h3>

              {/* Items: bespoke structural rows with custom sapphire indicators */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', position: 'relative', zIndex: 1 }}>
                {[
                  'Известные счета, официальный доход, транспорт, недвижимость — только по законным источникам.',
                  'Сведения о других производствах, банкротстве, семейном и имущественном статусе должника.',
                  'Соразмерность расходов ожидаемому результату и последовательность исполнительных действий.',
                  'Необходимость отдельного сопровождения исполнительного производства после получения документа.'
                ].map((txt, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '14px',
                      padding: '12px 14px',
                      borderRadius: '10px',
                      background: 'rgba(240, 244, 248, 0.65)',
                      border: '1px solid rgba(23, 50, 77, 0.12)'
                    }}
                  >
                    <div
                      style={{
                        width: '22px',
                        height: '22px',
                        minWidth: '22px',
                        borderRadius: '6px',
                        background: 'linear-gradient(135deg, rgba(23, 50, 77, 0.18) 0%, rgba(23, 50, 77, 0.06) 100%)',
                        border: '1px solid rgba(23, 50, 77, 0.35)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '1px',
                        flexShrink: 0
                      }}
                    >
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                        <path d="M2.2 6.2L4.6 8.6L9.8 3.4" stroke="var(--color-deep-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span style={{ fontSize: '14.5px', color: 'var(--color-deep-blue)', lineHeight: 1.52, fontWeight: 450 }}>
                      {txt}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', fontStyle: 'italic', margin: 0, textAlign: 'center' }}>
            Положительная оценка перспективы не является гарантией взыскания: сведения об имуществе и доходах могут измениться, а каждое доказательство оценивается судом в совокупности.
          </p>
        </div>
      </section>

      {/* ═══ БЛОК 5: ТРИ ПРАВОВЫХ МАРШРУТА (ШАБЛОН СЦЕНАРИЕВ И ПРЕДЛАГАЕМЫХ РЕШЕНИЙ) ═══ */}
      <section className="section bg-white" id="routes" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px', textAlign: 'left' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Выбор процессуального порядка
            </div>
            <h2
              className="with-accent"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 4vw, 42px)',
                color: 'var(--color-deep-blue)',
                marginBottom: '16px',
                lineHeight: 1.25,
                marginTop: 0,
                textAlign: 'left'
              }}
            >
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                Три правовых маршрута
              </span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                по документам
              </span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Стратегия доказывания и предлагаемое решение строятся на том, какими документами зафиксированы обязательства и фактическая передача денег.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '40px' }}>
            {routesScenarios.map((item, i) => (
              <div
                key={i}
                className="hover-lift"
                style={{
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                  border: '1px solid var(--color-border)',
                  borderTop: i === 1 ? '3px solid var(--color-gold)' : '3px solid var(--color-primary)',
                  padding: '34px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Фирменный водяной знак */}
                <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.04, pointerEvents: 'none' }}>
                  <svg width="100" height="100" viewBox="0 0 24 24" fill="var(--color-deep-blue)">
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', position: 'relative', zIndex: 1 }}>
                    <div style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: 'var(--color-gold)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      background: 'rgba(193, 160, 102, 0.12)',
                      padding: '4px 10px',
                      display: 'inline-block'
                    }}>
                      {item.tag}
                    </div>
                    <span style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '26px',
                      fontWeight: 700,
                      color: 'rgba(193, 160, 102, 0.35)',
                      lineHeight: 1
                    }}>
                      {item.num}
                    </span>
                  </div>

                  <h3 style={{
                    fontSize: '19px',
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--color-deep-blue)',
                    margin: '0 0 12px 0',
                    lineHeight: 1.35,
                    fontWeight: 600,
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {item.title}
                  </h3>

                  <p style={{
                    fontSize: '14px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    margin: '0 0 20px 0',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {item.desc}
                  </p>

                  <div style={{ marginBottom: '24px', position: 'relative', zIndex: 1 }}>
                    <div style={{ fontSize: '11.5px', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
                      Точки доказывания:
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '9px' }}>
                      {item.proofPoints.map((pt, pIdx) => (
                        <li key={pIdx} style={{ display: 'flex', gap: '9px', alignItems: 'flex-start', fontSize: '13.5px', color: 'var(--color-deep-blue)', lineHeight: 1.45 }}>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Фирменный блок: Предлагаемое решение */}
                <div style={{
                  background: '#FFFFFF',
                  padding: '16px 18px',
                  border: '1px solid var(--color-border)',
                  borderLeft: '4px solid var(--color-gold)',
                  marginTop: 'auto',
                  position: 'relative',
                  zIndex: 1,
                  boxShadow: '0 2px 8px rgba(23, 50, 77, 0.03)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    <strong style={{ fontSize: '11.5px', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {item.solutionTitle}
                    </strong>
                  </div>
                  <span style={{ fontSize: '13px', color: 'var(--color-deep-blue)', lineHeight: 1.5, fontWeight: 500, display: 'block' }}>
                    {item.solution}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ padding: '14px 28px' }}>
              Подобрать сценарий взыскания для вашей ситуации →
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 6: ЧТО ПРОВЕРИТ ЮРИСТ (ШАБЛОН АРХИТЕКТУРНОЙ МАТРИЦЫ АУДИТА) ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '28px',
            marginBottom: '40px',
            borderBottom: '1px solid rgba(193, 160, 102, 0.3)',
            paddingBottom: '28px'
          }}>
            <div style={{ maxWidth: '620px' }}>
              <div style={{
                fontSize: '12.5px',
                fontWeight: 700,
                color: 'var(--color-gold)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '10px'
              }}>
                Предварительный аудит материалов
              </div>
              <h2 className="with-accent" style={{
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontFamily: 'var(--font-serif)',
                color: 'var(--color-deep-blue)',
                margin: 0,
                lineHeight: 1.2
              }}>
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                  Сначала оценка —
                </span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                  затем претензия или суд
                </span>
              </h2>
            </div>
            <div style={{ maxWidth: '480px', paddingTop: '20px' }}>
              <p style={{
                fontSize: '15.5px',
                color: 'var(--color-deep-blue)',
                lineHeight: 1.65,
                margin: 0,
                opacity: 0.92
              }}>
                До начала процессуальных действий юрист проводит аудит обстоятельств, чтобы снизить риски возражений должника и лишних судебных расходов.
              </p>
            </div>
          </div>

          {/* Архитектурный реестр аудита */}
          <div style={{
            background: '#FFFFFF',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            boxShadow: '0 4px 25px rgba(23, 50, 77, 0.05)',
            marginBottom: '32px'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
            }}>
              {auditItems.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '28px 24px',
                    borderBottom: '1px solid var(--color-border)',
                    borderRight: '1px solid var(--color-border)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    position: 'relative'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '8px' }}>
                    <span style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '22px',
                      fontWeight: 600,
                      color: 'var(--color-gold)',
                      lineHeight: 1,
                      minWidth: '30px'
                    }}>
                      {`0${idx + 1}`}
                    </span>
                    <h3 style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '18px',
                      fontWeight: 600,
                      color: 'var(--color-deep-blue)',
                      margin: 0,
                      lineHeight: 1.3
                    }}>
                      {item.title}
                    </h3>
                  </div>
                  <p style={{
                    fontSize: '13.5px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.55,
                    margin: 0,
                    paddingLeft: '42px'
                  }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            background: 'rgba(193, 160, 102, 0.1)',
            borderLeft: '3px solid var(--color-gold)',
            padding: '16px 20px',
            fontSize: '14px',
            color: 'var(--color-deep-blue)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <span><strong>Итог правового аудита:</strong> исключение судебных споров без перспективы фактического взыскания и четкий расчет всех затрат до подачи иска.</span>
            <a href="#form" style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '13.5px', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              Заказать аудит долга →
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 7: НАПРАВЛЕНИЯ ПОМОЩИ / СОСТАВ ПОМОЩИ (ШАБЛОН НАПРАВЛЕНИЙ ПОМОЩИ) ═══ */}
      <section id="directions" className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0 }}>
              Состав помощи по взысканию задолженности
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Подключаемся на любом этапе взыскания: от анализа расписки и досудебной претензии до ареста имущества и фактического перечисления денег.
            </p>
          </div>
          
          <div className="grid grid-3" style={{ gap: '24px' }}>
            {helpItems.map((item, idx) => (
              <div 
                key={idx}
                className="card service-card hover-lift" 
                style={{ 
                  height: '100%', 
                  minHeight: '160px',
                  padding: '30px', 
                  background: 'var(--color-white)', 
                  border: '1px solid var(--color-border)',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column', 
                  transition: 'all 0.3s',
                  position: 'relative',
                  borderTop: '3px solid var(--color-primary)'
                }}
              >
                <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, flexGrow: 1 }}>
                  {item.desc}
                </p>
                <a 
                  href="#form" 
                  className="card-arrow" 
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, textDecoration: 'none', transition: 'transform 0.3s' }}
                >
                  Обсудить задачу 
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.3s' }}>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            ))}

            {/* Карточка 7: Акцентный баннер на 3 колонки */}
            <div 
              className="card service-card service-card-span-3" 
              style={{ 
                gridColumn: '1 / -1',
                padding: '34px 38px', 
                background: 'var(--color-deep-blue)', 
                border: '1px solid transparent',
                borderRadius: '0',
                display: 'flex', 
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '28px',
                transition: 'all 0.3s',
                position: 'relative',
                borderTop: '3px solid var(--color-gold)',
                boxShadow: '0 8px 24px rgba(16, 39, 59, 0.28)'
              }}
            >
              <div style={{ flex: '1 1 500px' }}>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '24px', fontFamily: 'var(--font-serif)', color: 'var(--color-white)', lineHeight: 1.3 }}>
                  <span style={{ display: 'inline-block' }}>Сложный долг, отсутствие расписки</span>{' '}
                  <br />
                  <span style={{ display: 'inline-block' }}>или должник скрывает активы?</span>
                </h3>
                <p style={{ margin: '0', fontSize: '15.5px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.55 }}>
                  <span style={{ display: 'inline-block' }}>Опишите ситуацию в форме. Юрист оценит совокупность доказательств,</span>{' '}
                  <br />
                  <span style={{ display: 'inline-block' }}>возможность ареста имущества и предложит законную стратегию возврата.</span>
                </p>
              </div>
              <div style={{ flexShrink: 0 }}>
                <a 
                  href="#form" 
                  className="btn white-btn-custom" 
                  style={{ display: 'inline-block', textAlign: 'center', fontSize: '15px' }}
                >
                  Обсудить ситуацию
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 8: КАК ПРОХОДИТ РАБОТА (ШАБЛОН PROCESS BLOCK) ═══ */}
      <ProcessBlock
        steps={processSteps}
        title="Как проходит работа"
        subtitle="Понятный маршрут взаимодействия без лишней бюрократии и с постоянной обратной связью."
        footerNote="Консультации и согласование позиции возможны дистанционно. Способ передачи финансовых документов и необходимость личного участия определяются после первичного обращения."
        alignTitle="center"
      />

      {/* ═══ БЛОК 9: ЧТО ПОДГОТОВИТЬ К КОНСУЛЬТАЦИИ (ШАБЛОН ЧЕК-ЛИСТА ДОКУМЕНТОВ И ПАМЯТКИ) ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2
              className="with-accent"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 4vw, 42px)',
                color: 'var(--color-deep-blue)',
                marginBottom: '16px',
                lineHeight: 1.25,
                marginTop: 0
              }}
            >
              Что подготовить к консультации
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, lineHeight: 1.6, margin: 0 }}>
              Чем полнее исходный пакет, тем точнее юрист сможет оценить шансы и риски в суде. Если части документов нет — восстановим недостающие сведения через судебные запросы.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '30px', alignItems: 'stretch' }}>
            {/* Левая колонка: Чек-лист документов */}
            <div
              className="card"
              style={{
                background: '#FFFFFF',
                border: '1px solid var(--color-border)',
                borderLeft: '4px solid var(--color-gold)',
                padding: '36px 32px',
                boxShadow: '0 4px 20px rgba(16, 39, 59, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div style={{ position: 'absolute', top: '15px', right: '20px', color: 'var(--color-gold)', opacity: 0.08, pointerEvents: 'none' }}>
                <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                </svg>
              </div>

              <div>
                <h3 style={{ fontSize: '21px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 20px 0' }}>
                  Перечень документов и сведений
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    'Оригинал и копия расписки, договора займа, дополнительных соглашений;',
                    'Банковские выписки, платёжные поручения, чеки и назначение платежа;',
                    'Переписка в мессенджерах о передаче, сроке, остатке долга и отсрочках;',
                    'Подтверждения частичных возвратов, встречных расчётов и признания долга;',
                    'Письменные претензии, ответы должника, проекты графиков погашения;',
                    'Известные реквизиты должника для идентификации стороны в суде;',
                    'Судебные приказы, иски или определения, если процесс уже начался;',
                    'Краткая хронология событий: когда, кому, сколько и на каких условиях передано.'
                  ].map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', gap: '12px', fontSize: '14.5px', color: 'var(--color-text-main)', lineHeight: 1.5, alignItems: 'flex-start' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Правая колонка: Памятка безопасности и правила */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div
                className="card"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-deep-blue)',
                  padding: '30px 28px',
                  boxShadow: '0 4px 20px rgba(16, 39, 59, 0.05)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(23, 50, 77, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                  <h4 style={{ margin: 0, fontSize: '18px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)' }}>
                    Безопасность персональных данных
                  </h4>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  Не прикладывайте документы с персональными и финансовыми данными (сканы паспортов, выписки по счетам) к обычной форме сайта. Способ безопасной передачи материалов согласуем после первичного звонка юриста.
                </p>
              </div>

              <div
                className="card"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  padding: '30px 28px',
                  boxShadow: '0 4px 20px rgba(16, 39, 59, 0.05)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(193, 160, 102, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                  </div>
                  <h4 style={{ margin: 0, fontSize: '18px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)' }}>
                    Важное правило работы с оригиналами
                  </h4>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  Ни при каких обстоятельствах не отдавайте должнику оригинал расписки или договора займа до момента полной выплаты задолженности. Для ознакомления юристу достаточно качественной скан-копии или фото.
                </p>
              </div>

              <div
                style={{
                  background: 'var(--color-deep-blue)',
                  padding: '24px 28px',
                  color: 'var(--color-white)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px'
                }}
              >
                <div>
                  <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-white)', marginBottom: '4px' }}>
                    Нужна помощь в сборе доказательств?
                  </div>
                  <div style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.8)' }}>
                    Юрист подскажет, как законно зафиксировать переписку и аудиосообщения.
                  </div>
                </div>
                <a href="#form" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '13.5px', flexShrink: 0 }}>
                  Задать вопрос
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 10: КУРАТОР НАПРАВЛЕНИЯ (ШАБЛОН SPECIALIST BLOCK) ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Марина Валерьевна Смольянинова"
        position={<>Ведущий юрист ЮК «Де-Юре»,<br />куратор направления по взысканию задолженности</>}
        imageUrl="/images/smolyaninova.jpg"
        imagePosition="center 25%"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Марина Смольянинова оценивает взыскание с учётом всего маршрута: от доказательств и судебной позиции до практических вопросов исполнения. Более 13 лет работы в органах принудительного исполнения и более 5 лет судебной практики помогают заранее видеть, какие действия после решения действительно имеют значение, а какие создают только формальную активность.
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
            «Важно не просто получить судебный акт, а заранее понимать, на каких доказательствах строится требование и как решение будет исполняться на практике».
          </div>,
          <ul key="3" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>Более 13 лет работы в органах принудительного исполнения, включая руководящие должности</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>Специализация — взыскание задолженности, досудебное урегулирование и исполнительное производство</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>Сопровождает доверителей в Липецке и Липецкой области, а также дистанционно по всей РФ</span>
            </li>
          </ul>,
          <a key="4" href="/specialisty/smolyaninova-marina-valerevna/" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
            Подробнее о специалисте →
          </a>
        ]}
        buttonText="Обсудить ситуацию с куратором"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 11: КЕЙСЫ ИЗ ПРАКТИКИ (ШАБЛОН CASES BLOCK) ═══ */}
      <CasesBlock
        title="Примеры из практики по взысканию долгов"
        subtitle="Результат взыскания зависит от содержания документов, поведения сторон, сроков и возможности исполнить решение. Поэтому одинаковая сумма долга может требовать разной стратегии."
        cases={casesData}
      />
      <div className="container" style={{ marginTop: '-40px', marginBottom: '60px', textAlign: 'center' }}>
        <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', fontStyle: 'italic', margin: 0 }}>
          Результат зависит от обстоятельств конкретного дела и не гарантирует аналогичный исход в другой ситуации.
        </p>
      </div>

      {/* ═══ БЛОК 12: СТОИМОСТЬ (ШАБЛОН PRICING BLOCK) ═══ */}
      <PricingBlock
        title="Стоимость зависит от доказательств и стадии спора"
        subtitle="Анализ расписки, подготовка требования и ведение дела с экспертизой или обеспечительными мерами — разные объёмы. До начала работы фиксируем задачу, состав этапа и стоимость."
        tiers={pricingTiers}
        direction="Взыскание долгов"
        gridCols={4}
        ctaTitle="Рассчитать стоимость взыскания долга"
        ctaSubtitle="Оценим документы, проверим расчёт и предложим оптимальный маршрут взыскания с фиксацией цены в договоре."
        ctaButtonText="Рассчитать стоимость"
        disclaimer="Окончательная стоимость зависит от объёма доказательств, стадии спора и необходимого объёма работы. Цена и состав услуг фиксируются в договоре до начала работы. Государственные пошлины, нотариальные услуги, экспертизы, почтовые и иные внешние расходы оплачиваются отдельно."
      />

      {/* ═══ БЛОК 13: ЧАСТЫЕ ВОПРОСЫ (ШАБЛОН FAQ BLOCK) ═══ */}
      <FAQBlock
        title="Частые вопросы о взыскании долгов"
        subtitle="Ответы юриста на практические вопросы о расписках, переводах, судебном порядке и фактическом возврате средств."
        faqs={faqItems}
      />

      {/* ═══ БЛОК 14: СМЕЖНЫЕ НАПРАВЛЕНИЯ (ШАБЛОН СВЯЗАННЫХ УСЛУГ) ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 4vw, 36px)',
                color: 'var(--color-deep-blue)',
                marginBottom: '12px',
                marginTop: 0
              }}
            >
              Смежные направления
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0 }}>
              Если задача выходит за рамки классического взыскания частного долга:
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '20px' }}>
            <Link
              href="/grazhdanam/vzyskanie-dolgov/zashchita-ot-trebovaniy-po-dolgu/"
              className="card related-service-card hover-lift"
              style={{
                background: '#FFFFFF',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-primary)',
                padding: '26px 22px',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                boxShadow: '0 4px 16px rgba(16, 39, 59, 0.05)'
              }}
            >
              <div>
                <h4 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--color-deep-blue)', margin: '0 0 10px 0', lineHeight: 1.35 }}>
                  Защита от требований по долгу
                </h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.55 }}>
                  Если долг требуют с Вас по расписке или договору займа, сформируем обоснованную защитную позицию.
                </p>
              </div>
              <div className="card-arrow" style={{ color: 'var(--color-primary)', fontSize: '13.5px', fontWeight: 600, marginTop: '18px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>Перейти к защите</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </Link>

            <Link
              href="/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/"
              className="card related-service-card hover-lift"
              style={{
                background: '#FFFFFF',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-primary)',
                padding: '26px 22px',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                boxShadow: '0 4px 16px rgba(16, 39, 59, 0.05)'
              }}
            >
              <div>
                <h4 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--color-deep-blue)', margin: '0 0 10px 0', lineHeight: 1.35 }}>
                  Юрист по исполнительному производству
                </h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.55 }}>
                  Судебный акт уже получен, но взыскание затягивается или требуется розыск счетов и имущества.
                </p>
              </div>
              <div className="card-arrow" style={{ color: 'var(--color-primary)', fontSize: '13.5px', fontWeight: 600, marginTop: '18px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>Подробнее</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </Link>

            <Link
              href="/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/"
              className="card related-service-card hover-lift"
              style={{
                background: '#FFFFFF',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-primary)',
                padding: '26px 22px',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                boxShadow: '0 4px 16px rgba(16, 39, 59, 0.05)'
              }}
            >
              <div>
                <h4 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--color-deep-blue)', margin: '0 0 10px 0', lineHeight: 1.35 }}>
                  Взыскание задолженности с юридических лиц
                </h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.55 }}>
                  Должник — организация или обязательство возникло из договоров между предпринимателями.
                </p>
              </div>
              <div className="card-arrow" style={{ color: 'var(--color-primary)', fontSize: '13.5px', fontWeight: 600, marginTop: '18px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>Подробнее</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </Link>

            <Link
              href="/grazhdanam/kreditnyj-yurist/"
              className="card related-service-card hover-lift"
              style={{
                background: '#FFFFFF',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-primary)',
                padding: '26px 22px',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                boxShadow: '0 4px 16px rgba(16, 39, 59, 0.05)'
              }}
            >
              <div>
                <h4 style={{ fontSize: '17px', fontFamily: 'var(--font-serif)', fontWeight: 600, color: 'var(--color-deep-blue)', margin: '0 0 10px 0', lineHeight: 1.35 }}>
                  Кредитный юрист
                </h4>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.55 }}>
                  Банк, МФО или коллекторы предъявляют требования к Вам как к заёмщику или поручителю.
                </p>
              </div>
              <div className="card-arrow" style={{ color: 'var(--color-primary)', fontSize: '13.5px', fontWeight: 600, marginTop: '18px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>Подробнее</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 15: ФИНАЛЬНАЯ ФОРМА И ОФИС (ШАБЛОН СВЯЗАТЬСЯ С НАМИ) ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px', padding: '80px 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start', paddingTop: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>Связаться с нами</span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 38px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                Получите первичную оценку ситуации с долгом
              </h2>
              
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Опишите ситуацию и оставьте контакты. Обращение передадим юристу по взысканию задолженности в Липецке. Он изучит документы и свяжется с вами для разбора дела.
              </p>

              <div style={{ 
                padding: '24px', 
                background: 'var(--gradient-cream)', 
                borderLeft: '4px solid var(--color-gold)', 
                marginBottom: '28px',
                fontSize: '14.5px',
                color: 'var(--color-deep-blue)',
                lineHeight: 1.6
              }}>
                <div style={{ fontWeight: 700, marginBottom: '6px', fontSize: '15px' }}>Офис ЮК «Де-Юре» в Липецке:</div>
                <div>ул. Советская, д. 35, офис 213 (2-й этаж).</div>
                <div style={{ color: 'var(--color-text-secondary)', fontSize: '13.5px', margin: '4px 0 8px 0' }}>Приём ведётся по предварительной записи. Пн–Пт: 09:00–18:00.</div>
                <div>Телефон: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 700 }}>+7 (4742) 20-15-25</a></div>
                <div>Прямой номер: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 600 }}>+7 (910) 350-31-11</a></div>
              </div>
              
              <div>
                <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <span>
                    Перезвоним в течение 15 минут в рабочее время
                  </span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
              <div style={{ background: 'var(--gradient-cream)', padding: '40px', borderRadius: '0', boxShadow: '0 8px 24px rgba(0,0,0,0.12)', width: '100%', border: '1px solid rgba(0,0,0,0.06)' }}>
                <ContactsForm 
                  title="Написать юристу" 
                  subtitle=""
                  buttonText="Оставить заявку"
                  commentPlaceholder="Кратко опишите ситуацию с долгом: есть расписка, сумма, срок…"
                  subtext="Если вы оставите заявку вечером или в выходной день, мы перезвоним в ближайший рабочий день."
                  direction="Взыскание долгов"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
