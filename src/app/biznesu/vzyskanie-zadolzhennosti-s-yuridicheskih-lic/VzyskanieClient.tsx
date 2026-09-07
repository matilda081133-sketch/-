'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MilitaryHero from '@/components/MilitaryHero';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import PricingBlock, { PricingTier } from '@/components/PricingBlock';
import ProcessBlock, { ProcessStep } from '@/components/ProcessBlock';

export default function VzyskanieClient() {
  const cases: CaseData[] = [
    {
      category: 'Поставка / 2,8 млн ₽',
      title: 'Оплата поставки после спора о первичных документах',
      problem: 'Покупатель не оплатил товар и ссылался на недостатки в первичных документах, отсутствие доверенностей у принимавших лиц и расхождения в УПД. Сумма задолженности составляла 2,8 млн ₽.',
      action: 'Сопоставили договор, спецификации, заявки, УПД, товарно-транспортные накладные и деловую переписку. Подготовили досудебную претензию с детальным расчётом требований и неустойки, после чего представили доказательства передачи товара в арбитражном суде.',
      result: 'Арбитражный суд полностью удовлетворил исковые требования, взыскав 2,8 млн ₽ основного долга, договорную неустойку и судебные расходы. Исполнительный лист передан к исполнению, средства поступили на счёт клиента.'
    },
    {
      category: 'Подряд / 4,3 млн ₽',
      title: 'Взыскание задолженности за выполненные подрядные работы',
      problem: 'Заказчик уклонялся от подписания итоговых актов КС-2 и КС-3, заявляя о завышении объёмов и встречных претензиях по срокам. Неоплаченный остаток составлял 4,3 млн ₽.',
      action: 'Провели юридический аудит исполнительной документации, журнала работ и переписки по согласованию этапов. Зафиксировали надлежащее направление актов и отсутствие мотивированного отказа заказчика в установленный договором срок. Подготовили и поддержали позицию в суде.',
      result: 'Суд признал отказ заказчика необоснованным и взыскал задолженность в полном объёме вместе с процентами по ст. 395 ГК РФ. Впоследствии стороны согласовали график выплат в рамках исполнительного производства.'
    },
    {
      category: 'Дебиторский портфель / 7,1 млн ₽',
      title: 'Комплексная работа с портфелем долгов производственного предприятия',
      problem: 'У производственной компании накопилось 14 просроченных требований к разным контрагентам на общую сумму 7,1 млн ₽ с разными сроками образования и качеством документов.',
      action: 'Сегментировали пул должников по срочности, объёму доказательств и финансовому состоянию компаний. По 6 долгам добились добровольной оплаты на претензионном этапе; по 8 спорам подготовили и провели судебные процессы.',
      result: 'Фактически возвращено 5,9 млн ₽; по оставшимся требованиям получены исполнительные листы и запущен процесс взыскания через банки и службу судебных приставов.'
    }
  ];

  const faqs = [
    {
      q: 'Можно ли взыскать долг, если договор не подписан?',
      a: 'Иногда обязательство подтверждается совокупностью заявок, первичных документов, платежей, переписки и фактического исполнения. Перспективы зависят от содержания и допустимости конкретных доказательств.'
    },
    {
      q: 'Обязательно ли направлять претензию?',
      a: 'Для многих денежных требований в арбитражном процессе действует обязательный досудебный порядок. Срок и правила могут определяться законом или договором, поэтому их проверяют до подачи заявления.'
    },
    {
      q: 'Что можно требовать кроме основного долга?',
      a: 'В зависимости от основания — договорную неустойку, проценты, убытки и судебные расходы. Одновременное взыскание отдельных санкций и их размер требуют правовой проверки.'
    },
    {
      q: 'Если должник признаёт долг, обязательно ли обращаться в суд?',
      a: 'Нет. Можно оценить соглашение, график, обеспечение и иные способы урегулирования. Важно оформить их так, чтобы не потерять доказательства и возможность дальнейшей защиты.'
    },
    {
      q: 'Можно ли арестовать имущество или счета должника?',
      a: 'Обеспечительные меры применяет суд при наличии предусмотренных законом оснований. Одного желания взыскателя недостаточно; необходимо обосновать риск затруднения или невозможности исполнения.'
    },
    {
      q: 'Сколько длится взыскание?',
      a: 'Срок зависит от претензионного порядка, вида производства, поведения сторон, обжалования и исполнения. До анализа документов нельзя корректно назвать единый срок.'
    },
    {
      q: 'Что делать, если у должника нет имущества?',
      a: 'Нужно оценить деятельность, требования других кредиторов, исполнительные производства, сделки и признаки банкротства. После этого решается, оправданы ли исполнительные или банкротные инструменты.'
    },
    {
      q: 'Можно ли взыскать долг с директора или собственника компании?',
      a: 'Сам по себе долг организации не переходит на руководителя или участника. Личная ответственность возможна только по отдельным основаниям и требует самостоятельной правовой оценки.'
    },
    {
      q: 'Вы работаете, если решение суда уже есть?',
      a: 'Да, применимый объём зависит от исполнительного документа и текущей стадии. Если задача сосредоточена на действиях банка или приставов, она передаётся в профильное направление.'
    },
    {
      q: 'Можно ли работать дистанционно?',
      a: 'Да, если характер дела позволяет обмениваться документами и участвовать в процессе дистанционно. Необходимость личного присутствия определяется после первичной оценки.'
    }
  ];

  const steps: ProcessStep[] = [
    {
      num: '01',
      title: 'Анализ документов и должника',
      desc: 'Вы описываете ситуацию и передаёте имеющиеся документы. Проверяем основание долга, сумму, сроки, первичные документы и открытые сведения о финансовом состоянии должника.'
    },
    {
      num: '02',
      title: 'Выбор стратегии и расчёт',
      desc: 'Рассчитываем основной долг, неустойку и штрафные санкции. Определяем оптимальный маршрут: претензия, переговоры, судебный иск или обеспечительные меры.'
    },
    {
      num: '03',
      title: 'Заключение договора',
      desc: 'Фиксируем состав юридических работ, этапы, стоимость и прозрачные обязательства сторон в официальном договоре без скрытых комиссий.'
    },
    {
      num: '04',
      title: 'Досудебная претензионная работа',
      desc: 'Готовим мотивированную досудебную претензию с доказательствами и расчётом, ведём переговоры с должником с фиксацией признания долга.'
    },
    {
      num: '05',
      title: 'Судебное представительство',
      desc: 'Подаём исковое заявление в арбитражный суд, представляем интересы компании на всех заседаниях и добиваемся вынесения решения в пользу взыскателя.'
    },
    {
      num: '06',
      title: 'Исполнение решения суда',
      desc: 'Получаем исполнительный лист, определяем оптимальный порядок предъявления (в банк должника либо в ФССП) и контролируем фактическое поступление средств.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Первичный аудит долга',
      subtitle: 'Правовой анализ документов, проверка должника по реестрам и определение перспектив взыскания',
      features: [
        { name: 'Изучение договоров, УПД, накладных и актов', value: '✓' },
        { name: 'Проверка платежеспособности и судов должника', value: '✓' },
        { name: 'Расчёт суммы долга, неустойки и процентов', value: '✓' },
        { name: 'Письменное заключение и план действий', value: '✓' }
      ],
      popular: false,
      buttonText: 'Заказать аудит',
      buttonHref: '#form'
    },
    {
      title: 'Судебное взыскание под ключ',
      subtitle: 'Полное ведение дела в арбитражном суде от претензии до получения исполнительного листа',
      popular: true,
      badgeText: 'Популярно',
      features: [
        { name: 'Подготовка и направление досудебной претензии', value: '✓' },
        { name: 'Составление и подача искового заявления', value: '✓' },
        { name: 'Ходатайства об обеспечительных мерах', value: '✓' },
        { name: 'Представительство во всех судебных заседаниях', value: '✓' },
        { name: 'Получение судебного акта и исполнительного листа', value: '✓' }
      ],
      buttonText: 'Начать взыскание',
      buttonHref: '#form'
    },
    {
      title: 'Сопровождение дебиторского портфеля',
      subtitle: 'Системная работа с пулом просроченных долгов компании на регулярной основе',
      features: [
        { name: 'Формирование единого реестра задолженностей', value: '✓' },
        { name: 'Сегментация должников по степени риска', value: '✓' },
        { name: 'Массовая претензионная и судебная работа', value: '✓' },
        { name: 'Ежемесячная отчётность по стадиям возврата' } as any
      ],
      popular: false,
      buttonText: 'Обсудить портфель',
      buttonHref: '#form'
    }
  ];

  return (
    <main style={{ position: 'relative', overflowX: 'hidden' }}>
      <Header />

      {/* ═══ БЛОК 1: ПЕРВЫЙ ЭКРАН (HERO) ═══ */}
      <MilitaryHero
        breadcrumbs={
          <>
            <Link href="/">Главная</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/biznesu/">Юридическим лицам</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Взыскание задолженности</span>
          </>
        }
        superTitle="Взыскание задолженности для бизнеса • Липецк и Липецкая область"
        title="Взыскание задолженности с юридических лиц в Липецке"
        subtitle="Проверим документы и состояние должника, рассчитаем требования и выстроим маршрут возврата долга — от претензии и переговоров до суда и согласованных действий по исполнению."
        trustItems={[
          { text: 'Оцениваем доказательства' },
          { text: 'Проверяем взыскиваемость' },
          { text: 'Согласуем каждый этап' }
        ]}
        primaryCtaText="Оценить перспективы взыскания"
        primaryCtaLink="#form"
        secondaryCtaText="Передать документы на анализ"
        secondaryCtaLink="#documents"
      />

      {/* Баннер переключателя роли прямо под Hero */}
      <section className="section bg-light" style={{ padding: '24px 0', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            background: '#FFFFFF',
            padding: '18px 24px',
            borderLeft: '4px solid var(--color-primary)',
            boxShadow: '0 2px 10px rgba(23, 50, 77, 0.04)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M12 8v4" />
                <path d="M12 16h.01" />
              </svg>
              <span style={{ fontSize: '15px', color: 'var(--color-deep-blue)', fontWeight: 500 }}>
                <strong>Требования предъявлены к вашей компании?</strong> Защитим от необоснованного взыскания, снизим неустойку и согласуем правомерное урегулирование.
              </span>
            </div>
            <Link
              href="/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/zashchita-biznesa-ot-vzyskaniya-zadolzhennosti/"
              className="btn btn-outline"
              style={{ padding: '10px 20px', fontSize: '14px', whiteSpace: 'nowrap' }}
            >
              Перейти к защите бизнеса →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 7.1: БЫСТРЫЙ ВЫБОР СИТУАЦИИ ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '44px' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Сценарии обращения
            </div>
            <h2 className="with-accent" style={{
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-primary)',
              margin: '0 0 16px 0',
              lineHeight: 1.2
            }}>
              В какой ситуации вам нужна помощь
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Подбираем процессуальный маршрут под фактическую стадию взаимоотношений с контрагентом.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '20px' }}>
            {[
              {
                title: 'Контрагент перестал платить',
                desc: 'Есть договор и документы об исполнении, но срок оплаты прошёл. Требуется претензия и подготовка к суду.',
                link: '#diagnostic',
                linkText: 'К диагностике долга →',
                isExternal: false
              },
              {
                title: 'Должник оспаривает долг',
                desc: 'Контрагент не признаёт поставку, объём работ, акт, срок или расчёт. Формируем доказательственную базу.',
                link: '#documents',
                linkText: 'К доказательствам →',
                isExternal: false
              },
              {
                title: 'Есть риск потери активов',
                desc: 'У должника новые иски, исполнительные производства, ликвидация или признаки неплатёжеспособности.',
                link: '#urgent-risks',
                linkText: 'К срочным рискам →',
                isExternal: false
              },
              {
                title: 'Решение суда уже получено',
                desc: 'Нужно определить, предъявлять лист в банк, приставам или инициировать процедуру банкротства.',
                link: '/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/vzyskanie-po-ispolnitelnomu-listu-s-yuridicheskogo-lica/',
                linkText: 'Исполнительное производство →',
                isExternal: true
              },
              {
                title: 'Должников много',
                desc: 'Нужна единая система работы с портфелем просроченной дебиторской задолженности компании.',
                link: '#portfolio',
                linkText: 'К работе с портфелем →',
                isExternal: false
              },
              {
                title: 'Требуют деньги с вашей компании',
                desc: 'Нужно проверить требование кредитора, снизить завышенные санкции и подготовить мотивированный отзыв.',
                link: '/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/zashchita-biznesa-ot-vzyskaniya-zadolzhennosti/',
                linkText: 'Защита бизнеса от взыскания →',
                isExternal: true
              }
            ].map((item, idx) => (
              <div key={idx} className="hover-lift" style={{
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                padding: '30px 24px 24px 24px',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-gold)',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                boxSizing: 'border-box'
              }}>
                <div>
                  <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0', lineHeight: 1.3 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: '0 0 18px 0' }}>
                    {item.desc}
                  </p>
                </div>
                <div>
                  {item.isExternal ? (
                    <Link href={item.link} style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '14px', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                      {item.linkText}
                    </Link>
                  ) : (
                    <a href={item.link} style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '14px', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                      {item.linkText}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 7.2: ОРГАНИЧЕСКАЯ МАТРИЦА ДИАГНОСТИКИ ═══ */}
      <section className="section bg-light" id="diagnostic" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '44px' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Правовой и финансовый аудит
            </div>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              До начала спора проверяем две вещи
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Разделяем юридическую обоснованность иска и практическую вероятность реального поступления денег на счёт.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '30px', alignItems: 'stretch', marginBottom: '32px' }}>
            
            {/* Колонка 1: Юридическая доказуемость */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-gold)',
              padding: '36px 32px',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ paddingBottom: '18px', marginBottom: '24px', borderBottom: '1px solid var(--color-border)' }}>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.3, fontWeight: 700 }}>
                  Юридическая доказуемость
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div className="risk-card-item risk-card-item--gold">
                  <h4 style={{ fontSize: '16.5px', color: 'var(--color-deep-blue)', margin: '0 0 4px 0', fontWeight: 600, fontFamily: 'var(--font-serif)' }}>
                    Основание обязательства и срок оплаты
                  </h4>
                  <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    Проверяем момент возникновения долга, наступление срока оплаты и условия договора.
                  </p>
                </div>

                <div className="risk-card-item risk-card-item--gold">
                  <h4 style={{ fontSize: '16.5px', color: 'var(--color-deep-blue)', margin: '0 0 4px 0', fontWeight: 600, fontFamily: 'var(--font-serif)' }}>
                    Договор, спецификации и заявки
                  </h4>
                  <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    Сопоставляем полномочия подписантов, правильность оформления приложений и заказов.
                  </p>
                </div>

                <div className="risk-card-item risk-card-item--gold">
                  <h4 style={{ fontSize: '16.5px', color: 'var(--color-deep-blue)', margin: '0 0 4px 0', fontWeight: 600, fontFamily: 'var(--font-serif)' }}>
                    УПД, накладные, акты и отчёты
                  </h4>
                  <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    Анализируем доказательства фактической передачи товара, выполнения работ или услуг.
                  </p>
                </div>

                <div className="risk-card-item risk-card-item--gold">
                  <h4 style={{ fontSize: '16.5px', color: 'var(--color-deep-blue)', margin: '0 0 4px 0', fontWeight: 600, fontFamily: 'var(--font-serif)' }}>
                    Переписка и признание долга
                  </h4>
                  <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    Фиксируем акты сверки, гарантийные письма, электронные сообщения и частичные оплаты.
                  </p>
                </div>

                <div className="risk-card-item risk-card-item--gold">
                  <h4 style={{ fontSize: '16.5px', color: 'var(--color-deep-blue)', margin: '0 0 4px 0', fontWeight: 600, fontFamily: 'var(--font-serif)' }}>
                    Исковая давность и претензионный порядок
                  </h4>
                  <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    Контролируем соблюдение 30-дневного досудебного срока по АПК РФ и 3-летней давности.
                  </p>
                </div>

                <div className="risk-card-item risk-card-item--gold">
                  <h4 style={{ fontSize: '16.5px', color: 'var(--color-deep-blue)', margin: '0 0 4px 0', fontWeight: 600, fontFamily: 'var(--font-serif)' }}>
                    Расчёт долга, неустойки и процентов
                  </h4>
                  <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    Формируем обоснованный расчет основного долга, договорных штрафов и процентов по ст. 395 ГК РФ.
                  </p>
                </div>
              </div>
            </div>

            {/* Колонка 2: Фактическая взыскиваемость */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-primary)',
              padding: '36px 32px',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ paddingBottom: '18px', marginBottom: '24px', borderBottom: '1px solid var(--color-border)' }}>
                <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.3, fontWeight: 700 }}>
                  Фактическая взыскиваемость
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div className="risk-card-item risk-card-item--navy">
                  <h4 style={{ fontSize: '16.5px', color: 'var(--color-deep-blue)', margin: '0 0 4px 0', fontWeight: 600, fontFamily: 'var(--font-serif)' }}>
                    Статус должника и отсутствие ликвидации
                  </h4>
                  <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    Проверяем данные ЕГРЮЛ, отсутствие записей о недостоверности или начатой ликвидации.
                  </p>
                </div>

                <div className="risk-card-item risk-card-item--navy">
                  <h4 style={{ fontSize: '16.5px', color: 'var(--color-deep-blue)', margin: '0 0 4px 0', fontWeight: 600, fontFamily: 'var(--font-serif)' }}>
                    Судебные споры и требования кредиторов
                  </h4>
                  <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    Анализируем картотеку арбитражных дел на предмет массовых исков к компании-должнику.
                  </p>
                </div>

                <div className="risk-card-item risk-card-item--navy">
                  <h4 style={{ fontSize: '16.5px', color: 'var(--color-deep-blue)', margin: '0 0 4px 0', fontWeight: 600, fontFamily: 'var(--font-serif)' }}>
                    Исполнительные производства в ФССП
                  </h4>
                  <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    Оцениваем размер открытых взысканий и факты прекращения дел по п. 4 ч. 1 ст. 46 229-ФЗ.
                  </p>
                </div>

                <div className="risk-card-item risk-card-item--navy">
                  <h4 style={{ fontSize: '16.5px', color: 'var(--color-deep-blue)', margin: '0 0 4px 0', fontWeight: 600, fontFamily: 'var(--font-serif)' }}>
                    Активы, счета и деятельность
                  </h4>
                  <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    Выявляем признаки реальной хозяйственной деятельности, обороты и доступные счета.
                  </p>
                </div>

                <div className="risk-card-item risk-card-item--navy">
                  <h4 style={{ fontSize: '16.5px', color: 'var(--color-deep-blue)', margin: '0 0 4px 0', fontWeight: 600, fontFamily: 'var(--font-serif)' }}>
                    Признаки вывода активов и банкротства
                  </h4>
                  <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    Проверяем публикации Федресурса о намерениях банкротства и смену учредителей.
                  </p>
                </div>

                <div className="risk-card-item risk-card-item--navy">
                  <h4 style={{ fontSize: '16.5px', color: 'var(--color-deep-blue)', margin: '0 0 4px 0', fontWeight: 600, fontFamily: 'var(--font-serif)' }}>
                    Экономическая целесообразность
                  </h4>
                  <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    Сопоставляем судебные расходы с реальным шансом получить исполнение, а не просто решение.
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div style={{
            background: 'var(--color-white)',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '24px 32px',
            boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap'
          }}>
            <p style={{ margin: 0, fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.6, maxWidth: '740px' }}>
              <strong>Ключевое правило «Де-Юре»:</strong> Сильная доказательная позиция ещё не гарантирует фактическое получение денег. Поэтому до согласования судебного этапа мы оцениваем не только иск, но и доступные сведения о должнике.
            </p>
            <a href="#form" className="btn btn-primary" style={{ padding: '12px 28px', fontSize: '14.5px', whiteSpace: 'nowrap' }}>
              Проверить долг и должника
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 7.3: КОГДА НЕЛЬЗЯ ЗАТЯГИВАТЬ (СРОЧНЫЕ РИСКИ) ═══ */}
      <section className="section bg-white" id="urgent-risks" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, #10273B 0%, #17375E 50%, #0D1E2D 100%)',
            border: '1px solid rgba(193, 160, 102, 0.4)',
            borderTop: '3px solid var(--color-gold)',
            boxShadow: '0 8px 30px rgba(16, 39, 59, 0.18)',
            padding: '44px 36px',
            color: '#FFFFFF'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '24px',
              marginBottom: '32px'
            }}>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
                  Фактор времени
                </div>
                <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontFamily: 'var(--font-serif)', color: '#FFFFFF', margin: 0, lineHeight: 1.25 }}>
                  Когда нельзя затягивать: ситуации, в которых время влияет на результат
                </h2>
              </div>
              <div style={{ maxWidth: '440px' }}>
                <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, margin: 0 }}>
                  Промедление в долговых спорах часто приводит к выводу имущества, конкуренции с другими кредиторами или банкротству должника.
                </p>
              </div>
            </div>

            <div className="grid grid-2" style={{ gap: '16px', marginBottom: '32px' }}>
              {[
                'Приближается окончание срока исковой давности (3 года)',
                'Должник прекращает деятельность, меняет юридический адрес или руководство',
                'К должнику предъявляют новые крупные иски в арбитражном суде',
                'Начата процедура ликвидации либо опубликовано намерение о банкротстве',
                'Имущество выводится, переоформляется на аффилированных лиц или обременяется залогом',
                'Контрагент предлагает подписать зачёт, отсрочку или отказ от части требований',
                'Необходимо оперативно зафиксировать электронную переписку и первичные доказательства'
              ].map((text, idx) => (
                <div key={idx} style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span style={{ fontSize: '14.5px', color: '#FFFFFF', lineHeight: 1.5 }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <div style={{
              background: 'rgba(0, 0, 0, 0.25)',
              borderLeft: '3px solid var(--color-gold)',
              padding: '18px 22px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '20px',
              flexWrap: 'wrap'
            }}>
              <p style={{ margin: 0, fontSize: '14px', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.5, maxWidth: '720px' }}>
                <strong>Правовой принцип:</strong> Срочность не означает автоматическую подачу иска. Сначала определяем действие, которое действительно сохраняет позицию или повышает вероятность взыскания (например, обеспечительные меры).
              </p>
              <a href="#form" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '14px', whiteSpace: 'nowrap' }}>
                Оценить срочные риски
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 7.4: ЧТО ВХОДИТ В РАБОТУ (5 СТАДИЙ) ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Процессуальный объем
            </div>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              Взыскание задолженности под конкретную стадию
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Каждый этап имеет четко очерченный состав юридических действий и осязаемый результат.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '20px', position: 'relative', marginBottom: '40px' }}>
            {[
              {
                num: '01',
                title: 'Анализ ситуации',
                works: 'Документы, основание долга, сроки, расчёт, возражения должника, публичные сведения о его состоянии.',
                result: 'Заключение о перспективах, рисках и вариантах процессуального маршрута.'
              },
              {
                num: '02',
                title: 'Досудебная работа',
                works: 'Претензия по АПК РФ, переговорная позиция, фиксация признания долга, оценка соглашения или графика.',
                result: 'Попытка урегулирования без потери доказательств и процессуальных прав.'
              },
              {
                num: '03',
                title: 'Судебный процесс',
                works: 'Иск, доказательства, обеспечительные меры при наличии оснований, заседания, возражения и ходатайства.',
                result: 'Судебный акт и исполнительный документ либо утверждённое мировое соглашение.'
              },
              {
                num: '04',
                title: 'Сопровождение исполнения',
                works: 'Выбор порядка предъявления документа, взаимодействие с банком или ФССП в согласованном объёме.',
                result: 'Запуск и сопровождение применимого способа принудительного исполнения.'
              },
              {
                num: '05',
                title: 'Банкротный маршрут',
                works: 'Первичная оценка оснований и экономического смысла банкротства должника, привлечения к субсидиарной ответственности.',
                result: 'Решение, оправдан ли отдельный банкротный проект и включение в реестр.'
              }
            ].map((item, idx) => (
              <div key={idx} className="hover-lift" style={{
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                padding: '30px 24px 24px 24px',
                border: '1px solid var(--color-border)',
                borderTop: '4px solid var(--color-gold)',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                boxSizing: 'border-box',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '20px',
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
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '4px 0 8px 0', lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '14px' }}>
                  <strong style={{ color: 'var(--color-deep-blue)' }}>Состав работ: </strong>{item.works}
                </div>
                <div style={{ fontSize: '13.5px', color: 'var(--color-primary)', lineHeight: 1.5, background: 'rgba(23, 50, 77, 0.04)', padding: '10px 12px', borderLeft: '2px solid var(--color-gold)', marginTop: 'auto' }}>
                  <strong>Результат: </strong>{item.result}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ padding: '14px 32px' }}>
              Обсудить состав и этапы работ
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 7.5: ВИДЫ ЗАДОЛЖЕННОСТИ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '44px' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Виды обязательств
            </div>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              С какими денежными требованиями работаем
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Взыскиваем долги по всем видам коммерческих договоров и внедоговорных обязательств.
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '16px', marginBottom: '32px' }}>
            {[
              { title: 'Поставка товаров', desc: 'Неоплата отгруженной продукции, споры по УПД и накладным' },
              { title: 'Подряд и услуги', desc: 'Долги за выполненные строительные работы, монтаж и оказанные услуги' },
              { title: 'Арендные платежи', desc: 'Задолженность по аренде помещений, складов, оборудования и спецтехники' },
              { title: 'Займы и кредиты', desc: 'Возврат тела займа, договорных процентов и штрафных санкций' },
              { title: 'Возврат аванса', desc: 'Взыскание неотработанного аванса при срыве сроков или расторжении' },
              { title: 'Неосновательное обогащение', desc: 'Возврат ошибочно перечисленных средств без договора' },
              { title: 'Неустойка и проценты', desc: 'Взыскание договорной неустойки и процентов за просрочку по ст. 395 ГК' },
              { title: 'Портфель долгов', desc: 'Комплексное взыскание пула дебиторской задолженности нескольких контрагентов' }
            ].map((item, idx) => (
              <div key={idx} style={{
                background: 'var(--color-white)',
                border: '1px solid var(--color-border)',
                borderLeft: '3px solid var(--color-gold)',
                padding: '20px 18px',
                boxShadow: '0 2px 10px rgba(23, 50, 77, 0.03)'
              }}>
                <h3 style={{ fontSize: '16px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 6px 0', lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            background: 'var(--gradient-cream)',
            padding: '20px 24px',
            border: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            <span style={{ fontSize: '14px', color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>
              При сложном споре о качестве, объёме работ, скрытых недостатках или расторжении контракта подключаем профильных специалистов практики договорного права.
            </span>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 7.6: ЧТО ПЕРЕДАТЬ ЮРИСТУ (ДОКУМЕНТЫ) ═══ */}
      <section className="section bg-light" id="documents" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '44px' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Доказательная база
            </div>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              Что передать юристу для первичной оценки
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Чем полнее комплект документов, тем быстрее и точнее мы определим шансы на взыскание.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '30px', alignItems: 'stretch', marginBottom: '32px' }}>
            {/* Обязательно */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-gold)',
              padding: '36px 32px',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)'
            }}>
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 20px 0', fontWeight: 700 }}>
                Обязательно, если есть:
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  'Договор со всеми приложениями, спецификациями и заявками',
                  'УПД, товарные накладные (ТОРГ-12), акты приёма-передачи (КС-2, КС-3)',
                  'Счета на оплату и платёжные поручения о частичной оплате',
                  'Расчёт задолженности с датами возникновения просрочки',
                  'Документы из суда или ФССП, если процесс уже был начат'
                ].map((text, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Дополнительно */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-primary)',
              padding: '36px 32px',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)'
            }}>
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 20px 0', fontWeight: 700 }}>
                Дополнительно помогает:
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  'Деловая переписка (электронная почта, мессенджеры, переписка сторон)',
                  'Акты сверки взаимных расчетов и гарантийные письма должника',
                  'Претензии, направлявшиеся ранее, и официальные ответы контрагента',
                  'Сведения об известных счетах, объектах, недвижимости и активах должника',
                  'Проекты соглашений об отсрочке, рассрочке или взаимозачёте'
                ].map((text, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{
            background: 'var(--color-white)',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '24px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap'
          }}>
            <p style={{ margin: 0, fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.6, maxWidth: '720px' }}>
              <strong>Важно:</strong> Не откладывайте обращение из-за отсутствия одного документа. Сначала проверим имеющийся комплект и скажем, что можно восстановить или подтвердить другими доказательствами.
            </p>
            <a href="#form" className="btn btn-primary" style={{ padding: '12px 28px', fontSize: '14.5px', whiteSpace: 'nowrap' }}>
              Передать документы на анализ
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 7.7: КАК ВЫБИРАЕТСЯ ПРОЦЕДУРА ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '44px' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Индивидуальный маршрут
            </div>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              Не каждый долг нужно взыскивать одинаково
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Тактика зависит от поведения должника, наличия спора о качестве и риска утраты имущества.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '20px' }}>
            {[
              {
                situation: 'Долг подтверждён, должник работает',
                route: 'Претензия с расчётом санкций, плотные переговоры, при отсутствии оплаты — исковое производство в арбитраже.'
              },
              {
                situation: 'Должник признаёт долг, просит время',
                route: 'Проверка графика погашения, обеспечение (залог, поручительство директора), соглашение о признании долга с санкциями за срыв.'
              },
              {
                situation: 'Есть спор об исполнении договора',
                route: 'Формирование доказательственной базы, экспертиза объёмов/качества, судебная позиция и нейтрализация встречных претензий.'
              },
              {
                situation: 'Есть риск утраты имущества',
                route: 'Срочная подача иска с ходатайством об аресте счетов и активов должника (обеспечительные меры по ст. 90-91 АПК РФ).'
              },
              {
                situation: 'Решение суда уже принято',
                route: 'Предъявление исполнительного листа напрямую в банк должника либо возбуждение исполнительного производства в ФССП.'
              },
              {
                situation: 'Есть признаки банкротства',
                route: 'Публикация уведомления в Федресурсе, подача заявления о банкротстве должника, переход к субсидиарной ответственности.'
              }
            ].map((item, idx) => (
              <div key={idx} style={{
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                padding: '28px 22px',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-primary)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                boxSizing: 'border-box'
              }}>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                    Ситуация
                  </div>
                  <h3 style={{ fontSize: '16.5px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.35 }}>
                    {item.situation}
                  </h3>
                </div>
                <div style={{ background: '#FFFFFF', padding: '14px 16px', borderLeft: '3px solid var(--color-gold)', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                  <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Маршрут:</strong>
                  {item.route}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 7.8–7.10: ГЛУБОКИЙ РАЗБОР СТАДИЙ (ПРЕТЕНЗИЯ, СУД, ИСПОЛНЕНИЕ) ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div className="grid grid-3" style={{ gap: '24px' }}>
            
            {/* Досудебная работа */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderTop: '4px solid var(--color-gold)',
              padding: '32px 26px',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.3 }}>
                Претензия и переговоры
              </h3>
              <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '18px' }}>
                Проверяем договорный и установленный законом порядок (30 дней по АПК РФ), рассчитываем требования и формулируем позицию так, чтобы не ухудшить доказательственную базу.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 18px 0', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: 'var(--color-deep-blue)' }}>
                <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <span style={{ color: 'var(--color-gold)', fontWeight: 'bold' }}>✓</span> Соблюдение ст. 4 АПК РФ
                </li>
                <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <span style={{ color: 'var(--color-gold)', fontWeight: 'bold' }}>✓</span> Фиксация признания задолженности
                </li>
                <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <span style={{ color: 'var(--color-gold)', fontWeight: 'bold' }}>✓</span> Согласование графика выплат
                </li>
              </ul>
            </div>

            {/* Судебная защита */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderTop: '4px solid var(--color-primary)',
              padding: '32px 26px',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.3 }}>
                Судебная защита в арбитраже
              </h3>
              <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '18px' }}>
                В суде доказываем не только факт возникновения обязательства, но и размер каждого требования, включая штрафы, пени и расходы на представителей.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 18px 0', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: 'var(--color-deep-blue)' }}>
                <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>✓</span> Определение подсудности и иска
                </li>
                <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>✓</span> Заявление обеспечительных мер
                </li>
                <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>✓</span> Представительство во всех инстанциях
                </li>
              </ul>
            </div>

            {/* От решения к деньгам */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderTop: '4px solid var(--color-gold)',
              padding: '32px 26px',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.3 }}>
                От решения к фактическим деньгам
              </h3>
              <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '18px' }}>
                Судебный акт — не финальная точка. Выбираем быстрейший маршрут: списание через банк должника либо плотный контроль действий судебных приставов.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 18px 0', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: 'var(--color-deep-blue)' }}>
                <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <span style={{ color: 'var(--color-gold)', fontWeight: 'bold' }}>✓</span> Получение и проверка исполнительного листа
                </li>
                <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <span style={{ color: 'var(--color-gold)', fontWeight: 'bold' }}>✓</span> Предъявление напрямую в банк должника
                </li>
                <li style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <span style={{ color: 'var(--color-gold)', fontWeight: 'bold' }}>✓</span> Сопровождение исполнения в ФССП
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ БЛОК 7.11: ПОРТФЕЛЬ ДЕБИТОРСКОЙ ЗАДОЛЖЕННОСТИ ═══ */}
      <section className="section bg-white" id="portfolio" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, #FBF8F3 0%, #FFFFFF 100%)',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-primary)',
            padding: '44px 36px',
            boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)'
          }}>
            <div style={{ maxWidth: '820px' }}>
              <div style={{
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--color-gold)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '10px'
              }}>
                B2B Решение
              </div>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 16px 0', lineHeight: 1.25 }}>
                Если должников несколько: управление портфелем дебиторской задолженности
              </h2>
              <p style={{ fontSize: '15.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '28px' }}>
                Для пула задолженностей сначала сегментируем требования по сумме, сроку, доказательствам и состоянию должников. Это позволяет не тратить одинаковые ресурсы на разные по перспективе долги и согласовать рациональную очерёдность работы.
              </p>

              <div className="grid grid-3" style={{ gap: '16px', marginBottom: '32px' }}>
                <div style={{ background: '#FFFFFF', padding: '18px 20px', border: '1px solid var(--color-border)' }}>
                  <strong style={{ color: 'var(--color-deep-blue)', display: 'block', fontSize: '15px', marginBottom: '6px' }}>Единый реестр</strong>
                  <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Сведение всех контрагентов и документов в управляемую систему учёта</span>
                </div>
                <div style={{ background: '#FFFFFF', padding: '18px 20px', border: '1px solid var(--color-border)' }}>
                  <strong style={{ color: 'var(--color-deep-blue)', display: 'block', fontSize: '15px', marginBottom: '6px' }}>Сегментация рисков</strong>
                  <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Разделение на типовые быстрые иски и сложные индивидуальные споры</span>
                </div>
                <div style={{ background: '#FFFFFF', padding: '18px 20px', border: '1px solid var(--color-border)' }}>
                  <strong style={{ color: 'var(--color-deep-blue)', display: 'block', fontSize: '15px', marginBottom: '6px' }}>Регулярная отчётность</strong>
                  <span style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Прозрачная динамика по каждому контрагенту на ежемесячной основе</span>
                </div>
              </div>

              <a href="#form" className="btn btn-primary" style={{ padding: '12px 28px', fontSize: '14.5px' }}>
                Обсудить портфель задолженности
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 7.12: ЭКОНОМИКА ВЗЫСКАНИЯ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '44px' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Экономический расчёт
            </div>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              До начала работы сопоставляем долг, риски и стоимость маршрута
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Юридически обоснованное требование может оказаться экономически нецелесообразным, если у должника нет активов, впереди несколько кредиторов или затраты несоразмерны сумме. Мы обозначаем эти ограничения до заключения договора.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '20px' }}>
            {[
              {
                eval: 'Сумма и структура требований',
                why: 'Понять возможный экономический результат и соразмерность затрат на юридическое сопровождение.'
              },
              {
                eval: 'Качество доказательств',
                why: 'Оценить риск отказа или уменьшения требований при встречных возражениях контрагента.'
              },
              {
                eval: 'Финансовое состояние должника',
                why: 'Не отделять судебную победу от фактической возможности исполнения решения.'
              },
              {
                eval: 'Сроки и срочные риски',
                why: 'Не потерять право на иск по давности и успеть применить обеспечительные меры.'
              },
              {
                eval: 'Стоимость каждого этапа',
                why: 'Согласовать соразмерный объём юридической работы и предотвратить непредвиденные траты.'
              }
            ].map((item, idx) => (
              <div key={idx} style={{
                background: '#FFFFFF',
                padding: '24px 22px',
                border: '1px solid var(--color-border)',
                borderLeft: '3px solid var(--color-gold)',
                boxShadow: '0 2px 10px rgba(23, 50, 77, 0.03)'
              }}>
                <h3 style={{ fontSize: '16.5px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0', lineHeight: 1.3 }}>
                  {item.eval}
                </h3>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                  {item.why}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 7.13: СХЕМА РАБОТЫ (PROCESS BLOCK) ═══ */}
      <ProcessBlock
        title="Как строится работа"
        subtitle="Последовательный алгоритм возврата задолженности: от правового аудита до поступления средств"
        steps={steps}
        ctaTitle="Дистанционный и очный формат работы"
        ctaSubtitle="Ведём дела в Арбитражном суде Липецкой области и арбитражных судах любых регионов России дистанционно."
        ctaButtonText="Начать с анализа документов"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 8: ПРИМЕРЫ ИЗ ПРАКТИКИ (КЕЙСЫ) ═══ */}
      <CasesBlock
        title="Примеры дел из практики"
        showAllLink="/praktika/"
        showAllText="Смотреть всю практику"
        showDemoWarning={false}
        cases={cases}
      />

      {/* ═══ БЛОК 9: СТОИМОСТЬ УСЛУГ ═══ */}
      <PricingBlock
        title="Стоимость взыскания задолженности"
        subtitle="Прозрачное ценообразование: фиксируем этапы и стоимость в договоре без скрытых доплат"
        tiers={pricingTiers}
        disclaimer="Окончательная стоимость определяется после анализа первичных документов, суммы задолженности и количества процессуальных инстанций."
      />

      {/* ═══ БЛОК 10: FAQ ═══ */}
      <FAQBlock
        title="Частые вопросы о взыскании задолженности"
        faqs={faqs}
      />

      {/* ═══ БЛОК 11: ЛОКАЛЬНЫЙ ОФИС В ЛИПЕЦКЕ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '48px', alignItems: 'center' }}>
            <div>
              <div style={{
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--color-gold)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '12px'
              }}>
                Офис в Липецке
              </div>
              <h2 className="with-accent" style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.25 }}>
                Обсудить взыскание долга в офисе или дистанционно
              </h2>
              <p style={{ fontSize: '15.5px', color: 'var(--color-deep-blue)', opacity: 0.9, lineHeight: 1.6, marginBottom: '24px' }}>
                Можно встретиться в офисе ЮК «Де-Юре» в Липецке либо передать документы в электронном виде для предварительного аудита. Перед визитом согласуйте время встречи.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)' }}>Адрес офиса:</strong>
                    <span style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)' }}>г. Липецк, ул. Советская, д. 35, оф. 213</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)' }}>Телефон для связи:</strong>
                    <a href="tel:+79103503111" style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-primary)', textDecoration: 'none' }} data-analytics="phone_click">
                      +7 (910) 350-31-11
                    </a>
                  </div>
                </div>
              </div>

              <a href="#form" className="btn btn-primary" style={{ padding: '12px 28px' }}>
                Записаться на встречу
              </a>
            </div>

            <div style={{
              background: '#FFFFFF',
              border: '1px solid var(--color-border)',
              padding: '8px',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              minHeight: '340px'
            }}>
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=39.593684%2C52.608826&z=16&pt=39.593684,52.608826,pm2rdm"
                width="100%"
                height="340"
                frameBorder="0"
                style={{ border: 0, display: 'block' }}
                allowFullScreen={true}
                title="Офис ЮК Де-Юре в Липецке: ул. Советская, д. 35, оф. 213"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 12: ФИНАЛЬНАЯ ФОРМА (СВЯЗАТЬСЯ С НАМИ) ═══ */}
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
                <span style={{ display: 'inline-block' }}>Оцените перспективы</span> <br />
                <span style={{ display: 'inline-block' }}>взыскания задолженности</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко опишите ситуацию и сумму долга. Юрист проверит наличие документов, платёжеспособность должника и предложит оптимальный маршрут возврата средств.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация юриста</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните прямо сейчас: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (910) 350-31-11</a>
                </p>
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Написать нам"
                subtitle={
                  <>
                    <span style={{ display: 'inline-block' }}>Оставьте имя и номер телефона. Юрист перезвонит</span> <br />
                    <span style={{ display: 'inline-block' }}>в рабочее время для предварительного разбора.</span>
                  </>
                }
                buttonText="Оценить перспективы взыскания"
                commentPlaceholder="Примерная сумма долга, контрагент, вид договора и стадия просрочки…"
                subtext={
                  <>
                    <span style={{ display: 'inline-block' }}>Свяжемся с вами в рабочее время. Если заявка оставлена вечером или в выходной день, перезвоним в ближайший рабочий день.</span>
                  </>
                }
                hiddenFields={[
                  { name: 'source_page', value: '/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/' },
                  { name: 'page_type', value: 'hub' },
                  { name: 'direction', value: 'vzyskanie_zadolzhennosti_biznes' },
                  { name: 'service', value: 'vzyskanie_zadolzhennosti_s_yuridicheskih_lic' }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
