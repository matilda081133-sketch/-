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
import ProcessBlock from '@/components/ProcessBlock';

export default function VzyskanieDolgovClient() {
  const situations = [
    {
      title: 'Срок возврата прошёл',
      text: 'Должник не отвечает, просит новые отсрочки либо платит нерегулярно.',
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
      text: 'Необходимо проверить иск, возражения, сроки и сформировать позицию до заседания.',
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

  const processSteps = [
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
      price: '2 000 ₽',
      priceUnit: 'за консультацию',
      features: [
        { name: 'Правовой анализ расписки или договора', value: 'Включено' },
        { name: 'Проверка банковских выписок и переписки', value: 'Включено' },
        { name: 'Расчёт основного долга, процентов и неустойки', value: 'Включено' },
        { name: 'Оценка рисков возражений и перспектив исполнения', value: 'Включено' }
      ],
      buttonText: 'Заказать анализ',
      buttonHref: '#form'
    },
    {
      title: 'Досудебное урегулирование',
      subtitle: 'Требование, претензия, переговоры',
      price: 'от 10 000 ₽',
      priceUnit: 'за этап работы',
      features: [
        { name: 'Подготовка мотивированного требования о возврате', value: 'Включено' },
        { name: 'Фиксация признания долга и прерывания давности', value: 'Включено' },
        { name: 'Разработка проекта соглашения или графика выплат', value: 'Включено' },
        { name: 'Обеспечение исполнения обязательства', value: 'Включено' }
      ],
      buttonText: 'Начать урегулирование',
      buttonHref: '#form'
    },
    {
      title: 'Судебное взыскание',
      subtitle: 'Приказ или иск с сопровождением',
      price: 'от 35 000 ₽',
      priceUnit: 'за ведение дела',
      features: [
        { name: 'Подготовка заявления о судебном приказе или иска', value: 'Включено' },
        { name: 'Формирование доказательственной базы для суда', value: 'Включено' },
        { name: 'Заявление ходатайств об обеспечительных мерах', value: 'Включено' },
        { name: 'Представительство юриста в судебных заседаниях', value: 'Включено' }
      ],
      buttonText: 'Взыскать через суд',
      buttonHref: '#form'
    },
    {
      title: 'Исполнительный этап',
      subtitle: 'Работа с приставами и банками',
      price: 'от 15 000 ₽',
      priceUnit: 'за сопровождение',
      features: [
        { name: 'Предъявление листа в банк или ФССП', value: 'Включено' },
        { name: 'Розыск счетов и имущества должника', value: 'Включено' },
        { name: 'Контроль действий пристава и сроков', value: 'Включено' },
        { name: 'Обжалование бездействия при необходимости', value: 'Включено' }
      ],
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

      {/* ═══ БЛОК 1: HERO ═══ */}
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

      {/* ═══ БЛОК 2: СИТУАЦИИ ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px' }}>
            <h2
              className="with-accent"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(26px, 3.5vw, 38px)',
                color: 'var(--color-deep-blue)',
                marginBottom: '16px',
                lineHeight: 1.25
              }}
            >
              Когда взыскание долга требует юридической оценки
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
              Даже если должник признаёт обязательство, важно правильно зафиксировать сумму, срок и основание передачи денег. Если он спорит — значение имеет вся совокупность документов и действий сторон.
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '20px', marginBottom: '36px' }}>
            {situations.map((item, idx) => (
              <div
                key={idx}
                className="card hover-lift"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  padding: '24px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 16px rgba(23, 50, 77, 0.05)',
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
                    fontSize: '11.5px',
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
                  <h3 style={{ fontSize: '17px', color: 'var(--color-deep-blue)', margin: '0 0 8px 0', lineHeight: 1.35, fontWeight: 600, fontFamily: 'var(--font-serif)' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.55 }}>
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
                    marginTop: '16px',
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

      {/* ═══ БЛОК 3: ЭКСПЕРТНЫЙ БЛОК: ДОКАЗАТЬ И ПОЛУЧИТЬ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--color-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '40px' }}>
            <h2
              className="with-accent"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(26px, 3.5vw, 38px)',
                color: 'var(--color-deep-blue)',
                marginBottom: '16px',
                lineHeight: 1.25
              }}
            >
              Доказать долг и получить деньги — две разные задачи
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, lineHeight: 1.6, margin: 0 }}>
              Суд оценивает, возникло ли обязательство, наступил ли срок возврата и как рассчитана сумма. После решения начинается другая задача: найти законный источник исполнения и правильно взаимодействовать с приставом, банком или иным органом. Поэтому до иска мы оцениваем обе стороны ситуации — доказательства и практическую исполнимость.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '28px' }}>
            {/* Контур 1 */}
            <div
              className="card"
              style={{
                background: '#FFFFFF',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-gold)',
                padding: '32px 28px',
                boxShadow: '0 4px 16px rgba(16, 39, 59, 0.06)'
              }}
            >
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', marginBottom: '12px' }}>
                Контур 1
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--color-deep-blue)', margin: '0 0 20px 0' }}>
                Доказуемость требования
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Основание передачи денег и содержание договорённости.',
                  'Расписка, договор, платёжные документы, переписка и поведение сторон.',
                  'Срок возврата, исковая давность, частичные платежи и признание долга.',
                  'Расчёт основного долга, процентов, неустойки и судебных расходов.'
                ].map((txt, i) => (
                  <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '14.5px', color: 'var(--color-text-main)', lineHeight: 1.5, alignItems: 'flex-start' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{txt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Контур 2 */}
            <div
              className="card"
              style={{
                background: '#FFFFFF',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-deep-blue)',
                padding: '32px 28px',
                boxShadow: '0 4px 16px rgba(16, 39, 59, 0.06)'
              }}
            >
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-deep-blue)', textTransform: 'uppercase', marginBottom: '12px' }}>
                Контур 2
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--color-deep-blue)', margin: '0 0 20px 0' }}>
                Исполнимость решения
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Известные счета, официальный доход, транспорт, недвижимость — только по законным источникам.',
                  'Сведения о других производствах, банкротстве, семейном и имущественном статусе должника.',
                  'Соразмерность расходов ожидаемому результату и последовательность исполнительных действий.',
                  'Необходимость отдельного сопровождения исполнительного производства после получения документа.'
                ].map((txt, i) => (
                  <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '14.5px', color: 'var(--color-text-main)', lineHeight: 1.5, alignItems: 'flex-start' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-deep-blue)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{txt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', fontStyle: 'italic', margin: 0, textAlign: 'center' }}>
            Положительная оценка перспективы не является гарантией взыскания: сведения об имуществе и доходах могут измениться, а каждое доказательство оценивается в совокупности.
          </p>
        </div>
      </section>

      {/* ═══ БЛОК 4: ТРИ МАРШРУТА ПО ДОКУМЕНТАМ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px' }}>
            <h2
              className="with-accent"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(22px, 2.8vw, 32px)',
                color: 'var(--color-deep-blue)',
                marginBottom: '16px',
                lineHeight: 1.25,
                whiteSpace: 'nowrap'
              }}
            >
              Три правовых маршрута по документам
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
              Стратегия доказывания строится на том, какими документами зафиксированы обязательства и фактическая передача денег.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '40px' }}>
            {/* Маршрут 1 */}
            <div
              className="card"
              style={{
                background: '#FAFAFA',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-gold)',
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px'
              }}
            >
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase' }}>
                Маршрут 01
              </div>
              <h3 style={{ fontSize: '19px', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.35, fontWeight: 600 }}>
                Если есть расписка или договор займа
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.55 }}>
                Документ должен позволять установить стороны, сумму и характер обязательства. Проверяем оригинал, условия возврата, проценты, частичные платежи и возможные возражения:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13.5px', color: 'var(--color-text-main)' }}>
                <li>• Кто указан заимодавцем и заёмщиком</li>
                <li>• Подтверждена ли фактическая передача денег</li>
                <li>• Наступил ли срок и предусмотрены ли проценты</li>
                <li>• Нет ли неоднозначных формулировок</li>
              </ul>
              <div style={{ fontSize: '12.5px', color: 'var(--color-gold)', fontWeight: 600, marginTop: 'auto', paddingTop: '8px' }}>
                Нотариальное удостоверение обычной расписки не обязательно для её силы в суде.
              </div>
            </div>

            {/* Маршрут 2 */}
            <div
              className="card"
              style={{
                background: '#FAFAFA',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-gold)',
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px'
              }}
            >
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase' }}>
                Маршрут 02
              </div>
              <h3 style={{ fontSize: '19px', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.35, fontWeight: 600 }}>
                Если деньги передали без расписки
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.55 }}>
                Отсутствие расписки не исключает защиту, но делает решающей связь между доказательствами. Банковский перевод сам по себе не всегда доказывает заём:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13.5px', color: 'var(--color-text-main)' }}>
                <li>• Выписка: получатель, дата, сумма и назначение платежа</li>
                <li>• Переписка: обсуждались ли заём, срок и возврат</li>
                <li>• Частичный возврат: связь платежа с обязательством</li>
                <li>• Признание долга: кем, когда и в какой форме сделано</li>
              </ul>
              <div style={{ fontSize: '12.5px', color: 'var(--color-gold)', fontWeight: 600, marginTop: 'auto', paddingTop: '8px' }}>
                Сопоставляем выписки, переписку и действия сторон в цельную позицию.
              </div>
            </div>

            {/* Маршрут 3 */}
            <div
              className="card"
              style={{
                background: '#FAFAFA',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-gold)',
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px'
              }}
            >
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase' }}>
                Маршрут 03
              </div>
              <h3 style={{ fontSize: '19px', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.35, fontWeight: 600 }}>
                Деньги передали, но заём не подтверждается
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.55 }}>
                Иногда отношения нельзя квалифицировать как заём: платёж связан с несостоявшейся сделкой, ошибкой или отсутствующим встречным предоставлением:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13.5px', color: 'var(--color-text-main)' }}>
                <li>• Оплата за товар или услугу, которые не были предоставлены</li>
                <li>• Перечисление в расчёте на несостоявшуюся сделку</li>
                <li>• Ошибочный платёж при отсутствии встречных обязательств</li>
                <li>• Удержание суммы после прекращения договорённости</li>
              </ul>
              <div style={{ fontSize: '12.5px', color: 'var(--color-gold)', fontWeight: 600, marginTop: 'auto', paddingTop: '8px' }}>
                Квалифицируем требование по нормам о неосновательном обогащении.
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ padding: '14px 28px' }}>
              Определить правовое основание требования →
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: ЧТО ПРОВЕРИТ ЮРИСТ (СНАЧАЛА ОЦЕНКА) ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px' }}>
            <h2
              className="with-accent"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(26px, 3.5vw, 38px)',
                color: 'var(--color-deep-blue)',
                marginBottom: '16px',
                lineHeight: 1.25
              }}
            >
              Сначала оценка — затем претензия или суд
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
              До начала процессуальных действий юрист проводит аудит обстоятельств, чтобы снизить риски возражений должника и лишних судебных расходов.
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '20px' }}>
            {auditItems.map((item, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  padding: '24px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
              >
                <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-deep-blue)' }}>
                  {item.title}
                </div>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 6: ЧЕМ ПОМОЖЕТ ЮРИСТ (СОСТАВ ПОМОЩИ) ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px' }}>
            <h2
              className="with-accent"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(26px, 3.5vw, 38px)',
                color: 'var(--color-deep-blue)',
                marginBottom: '16px',
                lineHeight: 1.25
              }}
            >
              Состав помощи можно выбрать по этапам
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
              Подключаемся на любом этапе взыскания: от анализа документов до судебного представительства и получения исполнительного листа.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '36px' }}>
            {helpItems.map((item, idx) => (
              <div
                key={idx}
                className="card hover-lift"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}
              >
                <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', margin: 0, fontWeight: 600 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.55 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ padding: '14px 28px' }}>
              Обсудить состав помощи →
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 7: КАК ПРОХОДИТ РАБОТА ═══ */}
      <ProcessBlock
        steps={processSteps}
        title="Как проходит работа"
        subtitle="Понятный маршрут взаимодействия без лишней бюрократии и с постоянной обратной связью."
        footerNote="Консультации и согласование позиции возможны дистанционно. Способ передачи финансовых документов и необходимость личного участия определяются после первичного обращения."
        alignTitle="left"
      />

      {/* ═══ БЛОК 8: ЧТО ПОДГОТОВИТЬ К КОНСУЛЬТАЦИИ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <h2
              className="with-accent"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(26px, 3.5vw, 38px)',
                color: 'var(--color-deep-blue)',
                marginBottom: '24px',
                textAlign: 'center',
                lineHeight: 1.25
              }}
            >
              Что подготовить к консультации
            </h2>

            <div
              className="card"
              style={{
                background: '#FAFAFA',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-gold)',
                padding: '36px 32px',
                marginBottom: '20px'
              }}
            >
              <div className="grid grid-2" style={{ gap: '16px' }}>
                {[
                  'Оригинал и копию расписки, договора займа, дополнительных соглашений;',
                  'Выписки, платёжные поручения, чеки и сведения о назначении перевода;',
                  'Переписку о передаче, сроке, возврате, остатке долга и отсрочках;',
                  'Подтверждения частичных возвратов и встречных расчётов;',
                  'Претензии, ответы, проекты соглашений или графиков;',
                  'Известные данные должника для идентификации стороны в суде;',
                  'Полученные судебные документы, если дело уже началось;',
                  'Краткую хронологию: когда, кому, сколько и на каком основании передано.'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '10px', fontSize: '14.5px', color: 'var(--color-text-main)', lineHeight: 1.5 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-deep-blue)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                background: 'rgba(193, 160, 102, 0.1)',
                borderLeft: '3px solid var(--color-gold)',
                padding: '16px 20px',
                fontSize: '14px',
                color: 'var(--color-deep-blue)'
              }}
            >
              <strong>Безопасность данных:</strong> Не прикладывайте документы с персональными и финансовыми данными к обычной форме сайта. Способ передачи согласуем после первичного обращения.
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 9: КУРАТОР НАПРАВЛЕНИЯ ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Марина Валерьевна Смольянинова"
        position={<>Ведущий юрист ЮК «Де-Юре»,<br />куратор направления по взысканию задолженности</>}
        imageUrl="/images/smolyaninova.jpg"
        imagePosition="center 25%"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Марина Смольянинова оценивает взыскание с учётом всего маршрута: от доказательств и судебной позиции до практических вопросов исполнения. Более 13 лет работы в ФССП, в том числе на руководящих должностях, и более 5 лет судебной практики помогают заранее видеть, какие действия после решения действительно имеют значение, а какие создают только формальную активность.
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
              <span>Более 13 лет работы в ФССП, включая руководящие должности</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>Специализация — взыскание долгов, досудебное урегулирование и исполнительное производство</span>
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

      {/* ═══ БЛОК 10: КЕЙСЫ ИЗ ПРАКТИКИ ═══ */}
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

      {/* ═══ БЛОК 11: СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость зависит от доказательств и стадии спора"
        subtitle="Анализ расписки, подготовка требования и ведение дела с экспертизой или обеспечительными мерами — разные объёмы. До начала работы фиксируем задачу, состав этапа и стоимость."
        tiers={pricingTiers}
        ctaTitle=""
        disclaimer="Окончательная стоимость зависит от объёма доказательств, стадии спора и необходимого объёма работы. Цена и состав услуг фиксируются в договоре до начала работы. Государственные пошлины, нотариальные услуги, экспертизы, почтовые и иные внешние расходы оплачиваются отдельно."
      />

      {/* ═══ БЛОК 12: ЧАСТЫЕ ВОПРОСЫ (FAQ) ═══ */}
      <FAQBlock
        title="Частые вопросы о взыскании долгов"
        subtitle="Ответы юриста на практические вопросы о расписках, переводах, судебном порядке и фактическом возврате средств."
        faqs={faqItems}
      />

      {/* ═══ БЛОК 13: СВЯЗАННЫЕ УСЛУГИ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(24px, 3vw, 32px)',
                color: 'var(--color-deep-blue)',
                marginBottom: '12px'
              }}
            >
              Смежные направления
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', margin: 0 }}>
              Если задача выходит за рамки классического взыскания частного долга:
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '20px' }}>
            <Link
              href="/grazhdanam/vzyskanie-dolgov/zashchita-ot-trebovaniy-po-dolgu/"
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
                Защита от требований по долгу
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                Если долг требуют с Вас по расписке или договору займа, нужна отдельная защитная стратегия.
              </p>
              <div style={{ color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600, marginTop: 'auto' }}>
                Перейти к защите →
              </div>
            </Link>

            <Link
              href="/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/"
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
                Юрист по исполнительному производству
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                Судебный акт уже получен, но взыскание не движется или требуется работа с приставом.
              </p>
              <div style={{ color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600, marginTop: 'auto' }}>
                Подробнее →
              </div>
            </Link>

            <Link
              href="/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/"
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
                Взыскание задолженности с юридических лиц
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                Должник — компания или обязательство возникло в предпринимательских отношениях.
              </p>
              <div style={{ color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600, marginTop: 'auto' }}>
                Подробнее →
              </div>
            </Link>

            <Link
              href="/grazhdanam/kreditnyj-yurist/"
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
                Кредитный юрист
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                Банк, МФО или коллектор предъявляет требования к Вам как к заёмщику.
              </p>
              <div style={{ color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600, marginTop: 'auto' }}>
                Подробнее →
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 14: ОФИС В ЛИПЕЦКЕ ═══ */}
      <section className="section bg-light" style={{ padding: '60px 0', background: 'var(--color-cream)' }}>
        <div className="container">
          <div
            className="card"
            style={{
              background: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-gold)',
              padding: '32px 36px',
              maxWidth: '820px',
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
                Обсудить взыскание долга в Липецке
              </h3>
              <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', margin: '0 0 12px 0', lineHeight: 1.5 }}>
                Офис ЮК «Де-Юре» находится по адресу: г. Липецк, ул. Советская, д. 35, офис 213.<br />
                Личные встречи проводятся по предварительной записи. Пн–Пт: 09:00–18:00.
              </p>
              <div style={{ fontSize: '15px', color: 'var(--color-deep-blue)', fontWeight: 600 }}>
                Телефон:{' '}
                <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>
                  +7 (4742) 20-15-25
                </a>
                {' '}/ прямой:{' '}
                <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>
                  +7 (910) 350-31-11
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

      {/* ═══ БЛОК 15: ФИНАЛЬНАЯ ФОРМА ═══ */}
      <section id="form" className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <ContactsForm
            title="Обсудить взыскание долга"
            subtitle="Кратко укажите, на чём основан долг и наступил ли срок возврата. Команда направления свяжется с Вами и сообщит, какие документы нужны для оценки."
            buttonText="Получить консультацию"
            commentPlaceholder="Например: есть расписка, срок прошёл, частично возвращено…"
            subtext="Не прикладывайте документы с персональными и финансовыми данными к обычной форме. Способ передачи согласуем после связи."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
