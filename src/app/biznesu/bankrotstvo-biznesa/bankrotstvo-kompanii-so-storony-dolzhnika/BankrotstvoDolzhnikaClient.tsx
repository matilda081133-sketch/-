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

export default function BankrotstvoDolzhnikaClient() {
  const urgencySignals = [
    'Компания системно нарушает сроки платежей нескольким кредиторам;',
    'Взыскание и исполнительные производства затрагивают ключевые расчётные счета или активы;',
    'Кредитор сообщил о намерении обратиться либо уже обратился с заявлением о банкротстве в суд;',
    'Исполнение обязательств перед одними лицами делает невозможными расчёты с другими кредиторами;',
    'Планируется продажа значимого актива, взаимозачёт, возврат займа участнику или иной нетипичный платёж;',
    'Директор или собственник не могут подтвердить полноту первичных документов и структуру задолженности.'
  ];

  const diagnosticContours = [
    {
      title: 'Стадия',
      what: 'Судебные дела, заявления о банкротстве, публикации, исполнительные производства и обеспечительные меры.',
      why: 'Определить ближайшее обязательное действие и законный процессуальный маршрут.'
    },
    {
      title: 'Обязательства',
      what: 'Кредиторы, суммы, сроки, обеспечение, споры об основании и очередность платежей.',
      why: 'Отделить подтверждённый долг от спорного и собрать полную карту требований.'
    },
    {
      title: 'Активы',
      what: 'Имущество, права требования, залоги, аренда, дебиторская задолженность и ограничения.',
      why: 'Понять имущественную картину без иллюзий и риска неправомерного вывода.'
    },
    {
      title: 'Сделки',
      what: 'Платежи и сделки периода финансового ухудшения, взаимосвязанные лица и встречное исполнение.',
      why: 'Выявить риски оспаривания сделок и подготовить правовую защиту.'
    },
    {
      title: 'Управление',
      what: 'Кто принимал решения, как оформлялись полномочия, отчётность и сохранность документов.',
      why: 'Оценить организационные риски и защитить руководство от субсидиарной ответственности.'
    },
    {
      title: 'Альтернативы',
      what: 'Переговоры, реструктуризация, мировое соглашение, корпоративные решения.',
      why: 'Не подменять диагностику заранее выбранным банкротством, если есть шанс санации.'
    }
  ];

  const serviceScope = [
    {
      title: 'Банкротная диагностика',
      desc: 'Собираем финансовую и правовую картину, проверяем стадию, основания, обязанности руководителя и возможные сценарии.'
    },
    {
      title: 'Подготовка к обращению',
      desc: 'Формируем перечень недостающих материалов, план обязательных действий и комплект документов для заявления должника.'
    },
    {
      title: 'Заявление должника',
      desc: 'Готовим мотивированное заявление и приложения, организуем предусмотренные законом публикации и подачу в арбитражный суд.'
    },
    {
      title: 'Судебное представительство',
      desc: 'Участвуем в судебном заседании по проверке обоснованности заявления и согласованных процессуальных стадиях.'
    },
    {
      title: 'Работа в процедуре',
      desc: 'Сопровождаем взаимодействие с арбитражным управляющим, кредиторами и судом, контролируем реестр и отчёты.'
    },
    {
      title: 'Координация смежных споров',
      desc: 'Выявляем требования к КДЛ, риски оспаривания сделок, налоговые и корпоративные вопросы и предлагаем адресную защиту.'
    }
  ];

  const documentsList = [
    'Карточка компании, устав, решения участников, приказы о назначении руководителя;',
    'Бухгалтерская отчётность, оборотно-сальдовые ведомости за последние 3 года;',
    'Реестр кредиторов и дебиторов с суммами, датами образования и первичными документами;',
    'Судебные акты, исполнительные листы, постановления ФССП и банковские ограничения;',
    'Перечень принадлежащего имущества, договоры залога, аренды, лизинга и ключевые контракты;',
    'Сведения о сделках по отчуждению активов, займам и взаимозачётам за 3 года;',
    'Публикации о намерении обратиться в суд, карточка дела в арбитраже (при наличии);',
    'Краткое фактическое описание причин финансового кризиса и принятых руководством мер.'
  ];

  const processSteps: ProcessStep[] = [
    {
      num: '01',
      title: 'Фиксируем роль и событие',
      desc: 'Уточняем, кто обращается, что уже произошло и какое действие требует ближайшей реакции.'
    },
    {
      num: '02',
      title: 'Проверяем открытые данные',
      desc: 'Изучаем картотеку арбитражных дел, публикации в ЕФРСБ, исполнительные производства и реестры.'
    },
    {
      num: '03',
      title: 'Собираем документы',
      desc: 'Согласуем перечень и безопасный канал передачи финансовых, корпоративных и судебных материалов.'
    },
    {
      num: '04',
      title: 'Готовим правовую карту',
      desc: 'Разделяем подтверждённые факты, недостающие данные, риски и доступные сценарии.'
    },
    {
      num: '05',
      title: 'Фиксируем решение и объём',
      desc: 'Согласуем необходимость обращения, этапы, команду, стоимость юридических услуг и внешние расходы.'
    },
    {
      num: '06',
      title: 'Подаём заявление и сопровождаем',
      desc: 'Готовим документы, представляем интересы в суде и ведём согласованные стадии и смежные задачи.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Первичная консультация',
      subtitle: 'Уточнение роли, стадии и события',
      price: 'от 5 000 ₽',
      popular: false,
      features: [
        { name: 'экспресс-анализ карточки дела и долгов', value: 'Да' },
        { name: 'определение обязанности подачи заявления', value: 'Да' },
        { name: 'рекомендации по неотложным действиям', value: 'Да' }
      ],
      buttonText: 'Записаться',
      buttonHref: '#form'
    },
    {
      title: 'Банкротная диагностика',
      subtitle: 'Полная проверка оснований и рисков',
      price: 'от 35 000 ₽',
      popular: true,
      badgeText: 'Оптимально',
      features: [
        { name: 'карта признаков неплатёжеспособности', value: 'Да' },
        { name: 'аудит сделок периода подозрительности', value: 'Да' },
        { name: 'анализ субсидиарных рисков директора', value: 'Да' },
        { name: 'письменная правовая позиция', value: 'Да' }
      ],
      buttonText: 'Заказать аудит',
      buttonHref: '#form'
    },
    {
      title: 'Подготовка заявления должника',
      subtitle: 'Комплект документов для арбитража',
      price: 'от 40 000 ₽',
      popular: false,
      features: [
        { name: 'мотивированное заявление в арбитраж', value: 'Да' },
        { name: 'формирование описи и приложений', value: 'Да' },
        { name: 'публикация на Федресурсе', value: 'Да' },
        { name: 'электронная подача в суд', value: 'Да' }
      ],
      buttonText: 'Подготовить заявление',
      buttonHref: '#form'
    },
    {
      title: 'Сопровождение отдельной стадии',
      subtitle: 'Наблюдение или конкурсное производство',
      price: 'от 50 000 ₽',
      popular: false,
      features: [
        { name: 'участие в судебных заседаниях', value: 'Да' },
        { name: 'взаимодействие с управляющим', value: 'Да' },
        { name: 'контроль реестра требований кредиторов', value: 'Да' }
      ],
      buttonText: 'Обсудить стадию',
      buttonHref: '#form'
    },
    {
      title: 'Комплексное сопровождение',
      subtitle: 'Полное ведение процедуры под контролем',
      price: 'от 80 000 ₽',
      popular: false,
      features: [
        { name: 'полный цикл от заявления до завершения', value: 'Да' },
        { name: 'защита директора от субсидиарки', value: 'Да' },
        { name: 'отбитие необоснованных требований', value: 'Да' },
        { name: 'постоянная правовая поддержка', value: 'Да' }
      ],
      buttonText: 'Запросить смету',
      buttonHref: '#form'
    }
  ];

  const casesData: CaseData[] = [
    {
      category: 'Производство / Стройматериалы',
      title: 'Производственная компания: подготовка заявления должника',
      problem: 'У компании образовались кассовые разрывы, долги перед поставщиками на сумму 32 млн ₽, начались аресты счетов ФССП.',
      action: 'Провели аудит задолженности, установили момент наступления неплатёжеспособности, подготовили и подали заявление должника с полным комплектом обоснований.',
      result: 'Суд ввёл процедуру наблюдения, сняты исполнительные аресты со счетов, процесс переведён в цивилизованное русло без обвинений руководства.'
    },
    {
      category: 'Оптовая торговля / Защита',
      title: 'Кредитор уже обратился в арбитражный суд',
      problem: 'Банк инициировал банкротство торговой компании за невозврат кредита на 18 млн ₽ с намерением ввести лояльного управляющего.',
      action: 'Вступили в дело, проверили расчёты банка, выявили нарушения в публикации намерения, подготовили мотивированные возражения и встречные предложения.',
      result: 'Утверждена независимая кандидатура управляющего, пресечены попытки необоснованного отчуждения залоговой базы.'
    },
    {
      category: 'Логистика / Активы и сделки',
      title: 'Компания с автопарком и спорными сделками',
      problem: 'В период финансового ухудшения компания реализовала часть автотранспорта, возник высокий риск оспаривания сделок и личной ответственности директора.',
      action: 'Собрали доказательства рыночности сделок и направления вырученных средств на расчёты с работниками и поставщиками, подготовили превентивную позицию.',
      result: 'Управляющему представлены исчерпывающие доказательства добросовестности, основания для оспаривания сделок и субсидиарной ответственности исключены.'
    }
  ];

  const faqItems: FAQItem[] = [
    {
      q: 'Когда компания вправе сама обратиться с заявлением о банкротстве?',
      a: 'Право должника связано не с желанием закрыть компанию, а с обстоятельствами, при которых уже видно, что исполнить обязательства в установленный срок не получится. Юрист проверяет финансовые данные, сроки, активы, требования и применимую редакцию закона.'
    },
    {
      q: 'Когда обращение в суд становится обязанностью руководителя?',
      a: 'Закон предусматривает несколько самостоятельных оснований. Нельзя определять обязанность только по общей сумме долга или одной просрочке: важны последствия расчётов с отдельными кредиторами, признаки неплатёжеспособности или недостаточности имущества и другие обстоятельства. Начало срока требует оценки конкретной даты и фактов.'
    },
    {
      q: 'Можно ли подать заявление, если кредитор уже начал банкротство?',
      a: 'Сначала нужно проверить карточку дела, содержание заявления кредитора, назначенную дату и принятые судом акты. Дальнейшие действия зависят от стадии: самостоятельная подача не всегда является правильным или доступным следующим шагом.'
    },
    {
      q: 'Банкротство автоматически прекращает все долги компании?',
      a: 'Нет. Требования рассматриваются в установленной процедуре, имущество формирует конкурсную массу, а итог зависит от судебных актов, расчётов и завершения дела. Нельзя заранее обещать прекращение всех обязательств или отсутствие требований к другим лицам.'
    },
    {
      q: 'Можно ли продолжать работу компании во время процедуры?',
      a: 'Это зависит от введённой процедуры, состояния бизнеса, полномочий органов управления, позиции управляющего и судебных актов. Возможность текущей деятельности оценивается отдельно; банкротство не означает автоматической остановки в день подачи заявления.'
    },
    {
      q: 'Кто выбирает арбитражного управляющего?',
      a: 'Порядок определения кандидатуры и саморегулируемой организации регулируется законом и судебной процедурой. Юридическая компания не должна обещать назначение «своего» или контролируемого управляющего.'
    },
    {
      q: 'Что будет со сделками, совершёнными до банкротства?',
      a: 'Их могут проверять по специальным банкротным и общегражданским основаниям. Имеют значение период, цена, встречное исполнение, взаимосвязанность сторон, осведомлённость и влияние на кредиторов. Подробный спор относится к странице об оспаривании сделок.'
    },
    {
      q: 'Отвечает ли директор личным имуществом?',
      a: 'Не автоматически. Ответственность КДЛ требует конкретных оснований, фактов, причинной связи и процессуального рассмотрения. Если личное требование уже предъявлено или риск существенный, нужен отдельный анализ по услуге защиты от субсидиарной ответственности.'
    },
    {
      q: 'Сколько длится банкротство компании?',
      a: 'Универсального срока нет. На продолжительность влияют процедура, активы, число кредиторов, торги, сделки, требования к КДЛ, жалобы и обжалование судебных актов. После диагностики можно обсуждать этапы, но не гарантировать дату завершения.'
    },
    {
      q: 'От чего зависит стоимость сопровождения?',
      a: 'От стадии, объёма и состояния документов, числа кредиторов, имущества, заседаний и самостоятельных споров. В договоре отдельно фиксируются юридические услуги и применимые внешние расходы.'
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
            <Link href="/biznesu/bankrotstvo-biznesa/">Банкротство бизнеса</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Банкротство со стороны должника</span>
          </>
        }
        superTitle="Банкротство компании • Липецк и Липецкая область"
        title={
          <span style={{ display: 'block', maxWidth: '100%' }}>
            <span style={{ display: 'block' }}>Банкротство компании</span>
            <span style={{ display: 'block' }}>со стороны должника</span>
            <span style={{ display: 'block' }}>в Липецке</span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Проверим основания и стадию кризиса, документы, активы, сделки и риски руководства. Если банкротная процедура применима, подготовим обращение в суд и согласуем объём сопровождения.
          </span>
        }
        primaryCtaText="Проверить ситуацию компании"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_cta_bankrotstvo_dolzhnika"
        primaryCtaSubtext={
          <>
            <span>Перезвоним в течение 15 минут в рабочее время:</span><br />
            <span style={{ whiteSpace: 'nowrap' }}>
              <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (910) 350-31-11</a>
            </span>
          </>
        }
        trustItems={[
          { text: 'Определяем стадию и законный сценарий до обращения в суд' },
          { text: 'Оцениваем риски руководства, сделки и сохранность документации' },
          { text: 'Фиксируем состав услуг и порядок расчётов в официальном договоре' }
        ]}
        imageUrl="/images/og/bankrotstvo-kompanii-so-storony-dolzhnika-og.jpg"
        imageName="Сопровождение компании-должника"
        imageSubtitle="Защита интересов предприятия и руководства в арбитражном суде"
      />

      {/* ═══ БЛОК 2: КОГДА НЕЛЬЗЯ ОТКЛАДЫВАТЬ ДИАГНОСТИКУ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '40px' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
              Признаки кризиса
            </div>
            <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
              Проверьте ситуацию до следующего необратимого действия
            </h2>
            <p style={{ fontSize: '15.5px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Отдельная просрочка ещё не доказывает необходимость банкротства. Но сочетание нескольких обстоятельств требует быстрого анализа, чтобы последующие платежи и решения не привели к персональной ответственности:
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '20px', marginBottom: '32px' }}>
            {urgencySignals.map((sig, sIdx) => (
              <div key={sIdx} style={{ background: 'var(--gradient-cream)', padding: '20px 22px', borderLeft: '3px solid var(--color-gold)', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '16px' }}>—</span>
                <span style={{ fontSize: '14.5px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>{sig}</span>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'left' }}>
            <Link href="#form" className="btn btn-primary" style={{ padding: '14px 28px', fontSize: '15px' }}>
              Проверить основания и риски
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: ЧТО ПРОВЕРИТ КОМАНДА ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'rgba(23, 50, 77, 0.02)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
              Методология аудита
            </div>
            <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
              Шесть контуров правовой проверки должника
            </h2>
            <p style={{ fontSize: '15.5px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Исследуем не просто один баланс, а полную систему отношений компании с контрагентами, банками, налоговыми органами и учредителями.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            {diagnosticContours.map((cnt, cIdx) => (
              <div key={cIdx} className="card" style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', padding: '26px' }}>
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>
                  {cnt.title}
                </h3>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: '0 0 14px 0' }}>
                  <strong>Что смотрим:</strong> {cnt.what}
                </p>
                <p style={{ fontSize: '13.5px', color: 'var(--color-deep-blue)', lineHeight: 1.55, margin: 0, borderTop: '1px dashed var(--color-border)', paddingTop: '10px' }}>
                  <strong>Зачем:</strong> {cnt.why}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: ЧТО ВХОДИТ В УСЛУГУ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
              Состав юридической помощи
            </div>
            <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
              Что входит в сопровождение компании
            </h2>
            <p style={{ fontSize: '15.5px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Чётко разграничиваем базовые процессуальные действия и обособленные банкротные споры.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '24px' }}>
            {serviceScope.map((sc, sIdx) => (
              <div key={sIdx} style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '26px 28px', borderLeft: '4px solid var(--color-gold)' }}>
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>
                  {sc.title}
                </h3>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  {sc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: ДОКУМЕНТЫ ДЛЯ ПЕРВИЧНОГО РАЗБОРА ═══ */}
      <section className="section bg-light" style={{ padding: '70px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '48px', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Подготовка к консультации
              </div>
              <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                Документы для первичного разбора
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: '0 0 24px 0' }}>
                Для предметной оценки ситуации юристам потребуются первичные финансовые и юридические сведения. Безопасный канал передачи материалов согласуем после контакта:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {documentsList.map((doc, dIdx) => (
                  <div key={dIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: 'var(--color-deep-blue)' }}>
                    <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', marginTop: '7px' }}></div>
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '36px', borderTop: '4px solid var(--color-primary)' }}>
              <h3 style={{ fontSize: '19px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0' }}>
                Правила безопасности документов
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
                Ни в коем случае не предпринимайте попыток «исправить» финансовую отчётность перед судом:
              </p>
              <ul style={{ paddingLeft: '20px', margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                <li style={{ marginBottom: '8px' }}>Не создавайте договоры и акты задним числом — судебная экспертиза легко устанавливает дату составления документа.</li>
                <li style={{ marginBottom: '8px' }}>Не скрывайте первичную бухгалтерскую документацию от арбитражного управляющего.</li>
                <li>Любые сомнительные действия квалифицируются судом как злоупотребление правом и ведут к субсидиарной ответственности.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 6: КАК СТРОИТСЯ РАБОТА ═══ */}
      <ProcessBlock
        title="Как строится работа"
        subtitle="Чёткий алгоритм действий — от сбора открытых сведений до судебного представительства."
        alignTitle="center"
        steps={processSteps}
        ctaTitle="Готовы обсудить ситуацию компании?"
        ctaSubtitle="Оставьте заявку на правовую диагностику обстоятельств дела."
        ctaButtonText="Обсудить ситуацию"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 7: СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость сопровождения банкротства компании"
        subtitle="Стоимость зависит от стадии, объёма документов, числа кредиторов, имущества и требуемого состава команды."
        tiers={pricingTiers}
        disclaimer="Вознаграждение арбитражного управляющего (от 30 000 ₽/мес.), обязательные публикации в ЕФРСБ и газете «Коммерсантъ», судебные депозиты и экспертизы оплачиваются отдельно в соответствии с требованиями Федерального закона № 127-ФЗ."
      />

      {/* ═══ БЛОК 8: ПРАКТИКА ═══ */}
      <CasesBlock
        title="Примеры дел по банкротству должников"
        showAllLink="/praktika/"
        showAllText="Смотреть всю практику"
        showDemoWarning={true}
        cases={casesData}
      />

      {/* ═══ БЛОК 9: FAQ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы должников"
        title={<><span>Вопросы и ответы</span> <br /><span>о банкротстве компании</span></>}
        subtitle="Об обязанностях директора, сохранении активов, сделках и процедурах"
        ctaText="Задать свой вопрос"
        ctaLink="#form"
        faqs={faqItems}
      />

      {/* ═══ БЛОК 10: ФИНАЛЬНАЯ ФОРМА ═══ */}
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
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Проверьте положение компании</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>до принятия решений</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Сообщите название компании или номер дела и кратко укажите, что уже произошло. Специалист уточнит стадию и скажет, какие материалы нужны для первичного разбора.
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
                Не передавайте через форму бухгалтерские базы, паспорта, банковские реквизиты, коммерческую тайну и документы дела. Безопасный канал согласуем после контакта.
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="card" style={{ padding: '40px', background: '#FFFFFF', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
                <h3 style={{ fontSize: '22px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginTop: 0, marginBottom: '20px' }}>
                  Заявка на аудит ситуации
                </h3>
                <ContactsForm
                  buttonText="Проверить ситуацию компании"
                  analyticsGoal="lead_form_bankrotstvo_dolzhnika"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
