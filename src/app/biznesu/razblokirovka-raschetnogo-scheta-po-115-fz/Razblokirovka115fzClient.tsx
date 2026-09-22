'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MilitaryHero from '@/components/MilitaryHero';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import ProcessBlock from '@/components/ProcessBlock';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import SpecialistBlock from '@/components/SpecialistBlock';
import PricingBlock, { PricingTier } from '@/components/PricingBlock';

export default function Razblokirovka115fzClient() {
  const situations = [
    {
      tag: 'Запрос документов',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Банк запросил документы</span> <br />
          <span style={{ display: 'inline-block' }}>и пояснения по операциям</span>
        </span>
      ),
      desc: 'Проверим обоснованность запроса финмониторинга, объясним экономический смысл платежей и сформируем непротиворечивый пакет подтверждающих документов.',
      btnText: 'Ответить банку'
    },
    {
      tag: 'Отказ в платеже',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Отказано в проведении</span> <br />
          <span style={{ display: 'inline-block' }}>конкретной операции</span>
        </span>
      ),
      desc: 'Запросим мотивированное уведомление банка по п. 11 ст. 7 Закона № 115-ФЗ, подготовим заявление о пересмотре решения и устраним претензии комплаенса.',
      btnText: 'Оспорить отказ'
    },
    {
      tag: 'Блокировка ДБО',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Отключен банк-клиент</span> <br />
          <span style={{ display: 'inline-block' }}>и дистанционное обслуживание</span>
        </span>
      ),
      desc: 'Установим правовое и договорное основание отключения ДБО, истребуем регламент и восстановим электронный доступ к расчётному счёту.',
      btnText: 'Восстановить ДБО'
    },
    {
      tag: 'Отказ в счёте',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Отказано в открытии счёта</span> <br />
          <span style={{ display: 'inline-block' }}>или расторжение договора</span>
        </span>
      ),
      desc: 'Разделим отказ по 115-ФЗ и одностороннее решение банка. Добиваемся отзыва негативной информации и заключения договора банковского счёта.',
      btnText: 'Открыть счёт'
    },
    {
      tag: 'Красная зона ЗСК',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Присвоен высокий уровень</span> <br />
          <span style={{ display: 'inline-block' }}>риска («Знай своего клиента»)</span>
        </span>
      ),
      desc: 'Проверим критерии отнесения к «красной зоне» ЦБ РФ, подготовим мотивированное заявление об исключении из высокой группы риска платформы ЗСК.',
      btnText: 'Выйти из красной зоны'
    },
    {
      tag: 'Отказ в пересмотре',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Банк сохранил ограничения</span> <br />
          <span style={{ display: 'inline-block' }}>после подачи пояснений</span>
        </span>
      ),
      desc: 'Организуем подачу заявления в Межведомственную комиссию (МВК) при Банке России либо инициируем судебное оспаривание незаконных действий банка.',
      btnText: 'Обратиться в МВК'
    }
  ];

  const routes = [
    {
      title: '1. Досудебное урегулирование с банком',
      desc: 'Первичный шаг при запросе документов, отказе в платеже или блокировке ДБО. Формируем подробный ответ с первичными документами (договоры, УПД, ТТН, штатное расписание) и раскрываем экономическую логику сделок.'
    },
    {
      title: '2. Межведомственная комиссия при Банке России',
      desc: 'Применяется при отказе банка после первичного пересмотра и в предусмотренных законом случаях по высокому уровню риска. Если высокая оценка есть только у платформы ЗСК и банк не применил ограничительные меры, сначала подаётся заявление о пересмотре в Банк России. При совпадении высокой оценки банка и Банка России и применении ограничительных мер обращаются в МВК. Проверяем применимость порядка, готовим заявление и документы, сопровождаем рассмотрение.'
    },
    {
      title: '3. Судебное обжалование в арбитражном суде',
      desc: 'Применяется при незаконном удержании заградительных комиссий (10–25% при закрытии счета), отказе в выдаче остатка средств или неправомерных действиях кредитной организации, не урегулированных в МВК.'
    }
  ];

  const directions = [
    {
      num: '01',
      title: 'Первичная комплаенс-диагностика',
      desc: 'Изучаем запрос или уведомление банка, историю спорных транзакций, контрагентов и фактически введенные ограничения.'
    },
    {
      num: '02',
      title: 'Аудит операций и закрывающих документов',
      desc: 'Сопоставляем договоры, счета, акты, платежные поручения, налоговую нагрузку и реальность осуществления хозяйственной деятельности.'
    },
    {
      num: '03',
      title: 'Подготовка мотивированных пояснений для финмониторинга',
      desc: 'Формируем структурированный ответ со ссылками на методические рекомендации ЦБ РФ, опровергая признаки сомнительности операций.'
    },
    {
      num: '04',
      title: 'Сопровождение досудебного пересмотра решения',
      desc: 'Сопровождаем подачу документов и контролируем срок, применимый к конкретной процедуре. Семидневный срок относится к рассмотрению банком заявления о пересмотре отказа, а не ко всем видам ограничений.'
    },
    {
      num: '05',
      title: 'Подготовка пакета документов в МВК при Банке России',
      desc: 'Составляем официальное заявление в Межведомственную комиссию с исчерпывающей доказательственной базой добросовестности бизнеса.'
    },
    {
      num: '06',
      title: 'Возврат незаконно списанных заградительных комиссий',
      desc: 'Взыскиваем через суд неправомерные комиссии банков при расторжении договора, признавая подобные тарифы неосновательным обогащением.'
    }
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Обращение и анализ запроса банка',
      desc: 'Вы передаете текст уведомления или запроса кредитной организации и перечень спорных операций.'
    },
    {
      num: '02',
      title: 'Сбор и проверка подтверждающих документов',
      desc: 'Формируем непротиворечивый пакет первичной документации, устраняем расхождения в назначениях платежей и накладных.'
    },
    {
      num: '03',
      title: 'Составление экономического обоснования',
      desc: 'Разрабатываем подробную пояснительную записку с обоснованием деловой цели и экономической целесообразности сделок.'
    },
    {
      num: '04',
      title: 'Подача пакета в банк и сопровождение переписки',
      desc: 'Направляем официальный ответ через систему ДБО или нарочно с отметкой о приеме, взаимодействуем со службой комплаенса.'
    },
    {
      num: '05',
      title: 'Реабилитация через МВК или суд при отказе банка',
      desc: 'Если банк сохраняет решение, проверяем применимость обращения в МВК при Банке России или судебного обжалования и согласуем следующий шаг.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Первичный анализ и стратегия',
      subtitle: 'Диагностика запроса банка',
      popular: false,
      price: 'от 15 000 ₽',
      features: [
        { name: 'Анализ уведомления и оснований блокировки', value: 'Включено' },
        { name: 'Оценка риска попадания в красную зону ЗСК', value: 'Включено' },
        { name: 'Перечень необходимых первичных документов', value: 'Включено' },
        { name: 'Пошаговый алгоритм действий для бухгалтерии', value: 'Включено' }
      ],
      buttonText: 'Заказать анализ',
      buttonHref: '#form'
    },
    {
      title: 'Ответ на запрос и реабилитация в банке',
      subtitle: 'Комплексный пакет для финмониторинга',
      popular: true,
      badgeText: 'Частый выбор',
      price: 'от 35 000 ₽',
      features: [
        { name: 'Правовой аудит всех договоров и первичных документов', value: 'Включено' },
        { name: 'Подготовка мотивированных пояснений по операциям', value: 'Включено' },
        { name: 'Формирование и подача пакета документов в банк', value: 'Включено' },
        { name: 'Заявление о пересмотре решения об отказе', value: 'Включено' }
      ],
      buttonText: 'Разблокировать счёт',
      buttonHref: '#form'
    },
    {
      title: 'Обжалование в МВК при Банке России',
      subtitle: 'Внесудебная отмена ограничений',
      popular: false,
      price: 'от 50 000 ₽',
      features: [
        { name: 'Подготовка заявления в Межведомственную комиссию', value: 'Включено' },
        { name: 'Формирование исчерпывающей доказательственной базы', value: 'Включено' },
        { name: 'Контроль регламентных сроков рассмотрения в ЦБ РФ', value: 'Включено' },
        { name: 'Доведение решения МВК до обслуживающего банка', value: 'Включено' }
      ],
      buttonText: 'Подать жалобу в МВК',
      buttonHref: '#form'
    }
  ];

  const practiceCases: CaseData[] = [
    {
      category: 'Ответ на запрос банка',
      title: 'Восстановление дистанционного обслуживания торговой компании за 4 дня',
      problem: 'Крупный банк ограничил доступ к интернет-банку оптового поставщика строительных материалов после серии платежей новым контрагентам на сумму 18 млн ₽.',
      action: 'В течение 24 часов собрали полный пакет товаросопроводительных документов: договоры поставки, товарные накладные ТОРГ-12, транспортные накладные и выписки со складов хранения. Подготовили подробное экономическое обоснование сделок.',
      result: 'Финмониторинг банка полностью снял подозрения в сомнительности операций и восстановил доступ к системе ДБО в полном объеме.'
    },
    {
      category: 'Реабилитация в МВК ЦБ РФ',
      title: 'Отмена решения банка об отказе в проведении операции через Межведомственную комиссию',
      problem: 'Банк отказал производственному предприятию в проведении платежа за оборудование и внес компанию в стоп-лист, отказавшись пересматривать решение в досудебном порядке.',
      action: 'Подготовили мотивированное заявление в МВК при Банке России, доказав добросовестность компании, наличие штата из 35 человек, оплату налогов и производственный характер закупаемого станка.',
      result: 'МВК вынесла решение в пользу предприятия. Банк исключил компанию из стоп-листа и исполнил заблокированное платежное поручение.'
    },
    {
      category: 'Возврат комиссии',
      title: 'Взыскание с банка заградительного тарифа 15% при закрытии счета',
      problem: 'При расторжении договора банковского счета банк удержал комиссию в размере 1,8 млн ₽ (15% от остатка), сославшись на внутренние правила противодействия легализации доходов.',
      action: 'Направили досудебную претензию, а затем подали иск в Арбитражный суд Липецкой области о признании условий тарифа недействительными и взыскании неосновательного обогащения.',
      result: 'Суд полностью удовлетворил требования: с банка взыскано 1,8 млн ₽ необоснованно удержанной комиссии и проценты за пользование чужими денежными средствами.'
    }
  ];

  const faqs = [
    {
      q: 'Банк действительно заблокировал весь счёт или только ограничил операции?',
      a: 'Не всегда. Под словом «блокировка» могут скрываться запрос документов, отказ в конкретной операции, ограничение дистанционного обслуживания, высокий уровень риска или прекращение расходных операций. Для выбора способа защиты необходимо изучить уведомление банка и фактически введённые ограничения.'
    },
    {
      q: 'Что делать сразу после получения запроса банка по 115-ФЗ?',
      a: 'Зафиксируйте установленный банком срок ответа, получите полный перечень вопросов и не направляйте разрозненные документы без пояснений. Сначала необходимо сопоставить операции, договоры и первичные документы, а затем подготовить единый непротиворечивый ответ.'
    },
    {
      q: 'Какие документы обычно требует служба финансового мониторинга?',
      a: 'Набор зависит от конкретной операции и деятельности компании. Это могут быть договоры, счета, акты, накладные, сведения о контрагентах, налогах, сотрудниках, помещениях и деловой цели платежей. Универсальный комплект без анализа запроса может оказаться недостаточным или избыточным.'
    },
    {
      q: 'Сколько времени занимает процедура пересмотра решения в банке и МВК?',
      a: 'Срок зависит от процедуры. Заявление о пересмотре отказа банк рассматривает в течение 7 рабочих дней. МВК рассматривает обращение в течение 20 рабочих дней со дня поступления документов. Обращение о пересмотре высокого уровня риска в платформе ЗСК Банк России рассматривает в течение 15 рабочих дней. Фактическое восстановление обслуживания зависит от полноты документов, принятого решения и последующих действий банка.'
    },
    {
      q: 'Можно ли просто открыть счёт в другом банке при блокировке?',
      a: 'Новый счёт не устраняет причину ограничений и не гарантирует обслуживание в другом банке. Сведения о риске и предыдущих отказах могут учитываться при оценке клиента. Сначала необходимо установить основание решения и выбрать применимый порядок его пересмотра.'
    },
    {
      q: 'Что делать, если компания попала в «красную зону» платформы «Знай своего клиента» (ЗСК)?',
      a: 'Высокая оценка платформы ЗСК сама по себе не прекращает операции. Ограничительные меры применяются, когда высокий уровень риска присвоили и Банк России, и обслуживающий банк. Если банк меры не применил, оценку ЗСК сначала оспаривают в Банке России. Если высокая оценка совпала и меры применены, обратиться в МВК можно в течение 6 месяцев со дня, следующего за днём получения уведомления банка.'
    },
    {
      q: 'Рассматривает ли МВК ограничение банк-клиента?',
      a: 'Не каждое ограничение дистанционного банковского обслуживания само по себе относится к предмету рассмотрения МВК. Сначала необходимо установить, было ли принято решение, для которого законом предусмотрен внесудебный порядок обжалования.'
    },
    {
      q: 'Когда приходится обращаться в суд?',
      a: 'Судебный порядок рассматривают, если внесудебный маршрут неприменим, не дал результата либо спор связан с самостоятельными нарушениями банка. Перспективу оценивают по документам, переписке и последствиям конкретного решения.'
    },
    {
      q: 'Можно ли гарантировать разблокировку счёта?',
      a: 'Нет. Юрист может проверить основания, подготовить позицию и документы, сопровождать обращение и обжалование, но решение принимает банк, Банк России, МВК или суд с учётом обстоятельств конкретного дела.'
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
            <span style={{ color: 'var(--color-text-main)' }}>Разблокировка расчётного счёта по 115-ФЗ</span>
          </>
        }
        superTitle={
          <span style={{ whiteSpace: 'normal', display: 'inline-block', lineHeight: 1.4 }}>
            <span style={{ display: 'inline-block' }}>БАНКОВСКИЙ КОМПЛАЕНС И 115-ФЗ •</span> <br />
            <span style={{ display: 'inline-block' }}>Липецк и Липецкая область</span>
          </span>
        }
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Разблокировка расчётного
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              счёта по 115-ФЗ в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '760px', textWrap: 'balance' }}>
            Банк запросил документы, отказал в операции, ограничил дистанционное обслуживание или сообщил о высоком уровне риска? Разберём основание ограничения и выстроим применимый порядок действий.
          </span>
        }
        primaryCtaText="Обсудить ограничение по счёту"
        primaryCtaLink="#form"
        primaryCtaSubtext={
          <span style={{ display: 'block' }}>
            <span style={{ display: 'inline-block' }}>Или позвоните для оперативного разбора:</span>{' '}
            <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
              <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (4742) 20-15-25</a>
            </span>
          </span>
        }
        secondaryCtaText="Маршруты обжалования"
        secondaryCtaLink="#routes"
        imageUrl="/images/nacheshnikov.jpg"
        imageName="Владимир Викторович Начешников"
        imageSubtitle="Специалист ЮК «Де-Юре», куратор направления"
        imageObjectPosition="center 15%"
        trustItems={[
          {
            text: (
              <span style={{ display: 'block', whiteSpace: 'normal', textWrap: 'balance' }}>
                <span style={{ display: 'inline-block' }}><strong>Проанализируем уведомление банка</strong>,</span> <br />
                <span style={{ display: 'inline-block' }}>спорные операции и подтверждающие документы</span>
              </span>
            )
          },
          {
            text: (
              <span style={{ display: 'block', whiteSpace: 'normal', textWrap: 'balance' }}>
                <span style={{ display: 'inline-block' }}><strong>Подготовим мотивированные пояснения</strong></span> <br />
                <span style={{ display: 'inline-block' }}>и сопроводим обращение в банк или МВК ЦБ РФ</span>
              </span>
            )
          },
          {
            text: (
              <span style={{ display: 'block', whiteSpace: 'normal', textWrap: 'balance' }}>
                <span style={{ display: 'inline-block' }}><strong>Оспорим присвоение высокого уровня риска</strong></span> <br />
                <span style={{ display: 'inline-block' }}>в платформе «Знай своего клиента» (ЗСК)</span>
              </span>
            )
          },
          {
            text: (
              <span style={{ display: 'block', whiteSpace: 'normal', textWrap: 'balance' }}>
                <span style={{ display: 'inline-block' }}><strong>Взыщем через суд</strong></span> <br />
                <span style={{ display: 'inline-block' }}>незаконно удержанную банком комиссию при закрытии счёта</span>
              </span>
            )
          }
        ]}
      />

      {/* ═══ БЛОК 2: СИТУАЦИИ ═══ */}
      <section id="situations" className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <div
              style={{
                fontSize: '12.5px',
                fontWeight: 700,
                color: 'var(--color-gold)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '12px'
              }}
            >
              КАТЕГОРИИ ОГРАНИЧЕНИЙ
            </div>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'inline-block' }}>В каких ситуациях</span> <br />
              <span style={{ display: 'inline-block' }}>мы помогаем бизнесу</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Одинаковое слово «блокировка» может означать совершенно разные решения банка. Сначала определяем, что именно произошло, и только после этого выбираем порядок действий.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '32px' }}>
            {situations.map((sit, idx) => (
              <div
                key={idx}
                className="card hover-lift"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)',
                  padding: '28px 22px',
                  borderRadius: '0',
                  boxShadow: '0 4px 16px rgba(23, 50, 77, 0.05)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
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
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: 'var(--color-primary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '10px',
                      background: 'rgba(23, 50, 77, 0.06)',
                      padding: '2px 6px',
                      display: 'inline-block'
                    }}
                  >
                    {sit.tag}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '17px',
                      fontWeight: 600,
                      color: 'var(--color-deep-blue)',
                      marginBottom: '10px',
                      lineHeight: '1.3'
                    }}
                  >
                    {sit.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '13.5px',
                      color: 'var(--color-text-secondary)',
                      lineHeight: '1.5',
                      margin: 0
                    }}
                  >
                    {sit.desc}
                  </p>
                </div>

                <a
                  href="#form"
                  className="situation-btn"
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
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-gold)';
                    const svg = e.currentTarget.querySelector('svg');
                    if (svg) {
                      svg.style.transform = 'translateX(4px)';
                      svg.style.stroke = 'var(--color-gold)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--color-primary)';
                    const svg = e.currentTarget.querySelector('svg');
                    if (svg) {
                      svg.style.transform = 'translateX(0)';
                      svg.style.stroke = 'currentColor';
                    }
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('form');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else window.location.hash = 'form';
                  }}
                >
                  <span>{sit.btnText}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.25s ease, stroke 0.25s ease' }}>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            ))}
          </div>

          {/* Плашка «Не нашли свою ситуацию?» */}
          <div
            style={{
              background: 'var(--color-deep-blue)',
              borderRadius: '0',
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
            <style dangerouslySetInnerHTML={{ __html: `
              .white-btn-custom {
                background-color: var(--color-white) !important;
                color: #10273B !important;
                border: 1px solid var(--color-white) !important;
                white-space: nowrap;
                font-weight: 600;
                padding: 14px 28px !important;
                transition: all 0.3s ease !important;
              }
              .white-btn-custom:hover {
                background-color: var(--color-gold) !important;
                color: var(--color-deep-blue) !important;
                border-color: var(--color-gold) !important;
              }
            `}} />
            <div style={{ flex: '1 1 500px', minWidth: '280px' }}>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '26px', fontFamily: 'var(--font-serif)', color: '#FFFFFF', lineHeight: 1.3 }}>
                Не нашли свою ситуацию?
              </h3>
              <p style={{ margin: 0, fontSize: '15px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6 }}>
                <span style={{ display: 'inline-block' }}>Опишите запрос финмониторинга или вид ограничений банка.</span> <br />
                <span style={{ display: 'inline-block' }}>Специалист по 115-ФЗ оценит правомерность требований и предложит порядок действий.</span>
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

      {/* ═══ БЛОК 3: МАРШРУТЫ ОБЖАЛОВАНИЯ (#ROUTES) ═══ */}
      <section
        id="routes"
        style={{
          background: 'var(--color-deep-blue)',
          padding: '64px 0 56px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '36px' }}>
            <div
              style={{
                fontSize: '12.5px',
                fontWeight: 700,
                color: 'var(--color-gold)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '12px'
              }}
            >
              ПОРЯДОК ДЕЙСТВИЙ
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontFamily: 'var(--font-serif)', color: '#FFFFFF', marginBottom: '12px', marginTop: 0, lineHeight: 1.25 }}>
              <span style={{ display: 'inline-block' }}>Определим применимый</span> <br />
              <span style={{ display: 'inline-block' }}>маршрут обжалования</span>
            </h2>
            <div style={{ width: '60px', height: '2px', background: 'var(--color-gold)', margin: '16px 0' }} />
            <p style={{ fontSize: '16px', color: '#E8ECF1', lineHeight: 1.65, margin: 0 }}>
              <span style={{ display: 'inline-block' }}>Не каждое ограничение рассматривается в одном и том же порядке.</span> <br />
              <span style={{ display: 'inline-block' }}>Мы сопоставим уведомление банка, фактические ограничения и уже направленные документы, чтобы не потерять время.</span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '20px', marginBottom: '36px' }}>
            {routes.map((route, idx) => (
              <div
                key={idx}
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
                      {route.title}
                    </div>
                  </div>
                  <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '14px', lineHeight: 1.55, margin: 0 }}>
                    {route.desc}
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
              <strong style={{ color: '#FFFFFF' }}>Банк заблокировал проведение платежей или установил короткий срок ответа?</strong> Проанализируем запрос <br />
              финмониторинга и подготовим правовой ответ в кратчайшие сроки.
            </span>
          </div>

          <style dangerouslySetInnerHTML={{__html: `
            .urgent-card {
              transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
            }
            .urgent-card:hover {
              transform: translateY(-6px);
              box-shadow: 0 18px 36px rgba(0,0,0,0.28) !important;
            }
            .btn-urgent-outline {
              border: 1px solid rgba(255,255,255,0.8) !important;
              color: #FFFFFF !important;
              background: transparent !important;
              text-decoration: none !important;
              font-weight: 600 !important;
              transition: all 0.3s ease !important;
              border-radius: 0 !important;
              display: inline-block !important;
            }
            .btn-urgent-outline:hover {
              background: rgba(255,255,255,0.18) !important;
              color: #FFFFFF !important;
              border-color: #FFFFFF !important;
            }
            .btn-urgent-call {
              display: inline-block !important;
              border-radius: 0 !important;
              text-decoration: none !important;
              background-color: var(--color-gold) !important;
              color: var(--color-deep-blue) !important;
              font-weight: 700 !important;
              transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
              border: 1px solid var(--color-gold) !important;
            }
            .btn-urgent-call:hover {
              background-color: #FFFFFF !important;
              color: #0B1C2A !important;
              border-color: #FFFFFF !important;
              transform: translateY(-2px);
            }
          `}} />

          {/* Зона связи */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.15)',
            paddingTop: '28px',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            flexWrap: 'wrap'
          }}>
            <a href="tel:+74742201525" style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.02em' }} data-analytics="phone_click">
              +7 (4742) 20-15-25
            </a>
            <a href="tel:+74742201525" className="btn-urgent-call" style={{ padding: '14px 28px', fontSize: '15px' }} data-analytics="phone_click">
              Позвонить специалисту
            </a>
            <a href="#form" className="btn btn-urgent-outline" style={{ padding: '14px 28px', fontSize: '15px' }}>
              Срочная консультация
            </a>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginLeft: '4px' }}>
              Срочный анализ запроса финмониторинга и подготовка позиции
            </span>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: ЧТО ВХОДИТ В ПОМОЩЬ (#DIRECTIONS) ═══ */}
      <section className="section bg-white" id="directions" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <div
              style={{
                fontSize: '12.5px',
                fontWeight: 700,
                color: 'var(--color-gold)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '12px'
              }}
            >
              КОМПЛЕКСНОЕ СОПРОВОЖДЕНИЕ
            </div>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.25, textAlign: 'left' }}>
              <span style={{ display: 'inline-block' }}>Сопроводим спор с банком</span> <br />
              <span style={{ display: 'inline-block' }}>от анализа до результата</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Объём работы зависит от вида ограничения и уже совершенных действий. Согласуем конкретный этап или комплексное сопровождение под ключ.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', position: 'relative', marginBottom: '40px' }}>
            {directions.map((dir, idx) => (
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
                  {dir.num}
                </div>
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '8px 0 14px 0', lineHeight: 1.35 }}>
                  {dir.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {dir.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: ЭТАПЫ РАБОТЫ ═══ */}
      <ProcessBlock
        title="Как проходит работа по разблокировке счёта"
        subtitle="Каждая ситуация с ограничениями по 115-ФЗ индивидуальна, но работа строится последовательно: от анализа уведомления банка и спорных операций до выбранного досудебного, административного или судебного маршрута."
        steps={processSteps}
      />

      {/* ═══ БЛОК 6: КУРАТОР (SPECIALISTBLOCK) ═══ */}
      <SpecialistBlock
        title="Куратор направления — Владимир Викторович Начешников"
        name="Владимир Викторович Начешников"
        position={<>Специалист ЮК «Де-Юре» по корпоративным<br />процедурам и сопровождению бизнеса</>}
        imageUrl="/images/nacheshnikov.jpg"
        imagePosition="center 15%"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Владимир Викторович координирует работу команды по финансовому и банковскому комплаенсу: организует первичный разбор ситуации, помогает определить необходимые документы и последовательность взаимодействия с банком, подключает профильных юристов для подготовки правовой позиции и судебной работы.
          </span>,
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span style={{ display: 'block', textWrap: 'balance' }}>
                <span style={{ display: 'inline-block' }}>С 1997 года — практический опыт юридических</span> <br />
                <span style={{ display: 'inline-block' }}>и корпоративных процедур</span>
              </span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span style={{ display: 'block', textWrap: 'balance' }}>
                <span style={{ display: 'inline-block' }}>Россия и Беларусь — география реализованных</span> <br />
                <span style={{ display: 'inline-block' }}>проектов</span>
              </span>
            </li>
          </ul>,
          <a key="3" href="/specialisty/nacheshnikov-vladimir-viktorovich/" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
            Подробнее о Владимире Начешникове →
          </a>
        ]}
        buttonText="Обсудить ситуацию с куратором"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 7: ЦЕНЫ ═══ */}
      <PricingBlock
        title="Стоимость юридической помощи по 115-ФЗ"
        subtitle="Цена фиксируется в договоре и зависит от объема спорных операций, стадии спора и выбранного порядка обжалования"
        tiers={pricingTiers}
        pageUrl="https://dejure-help.ru/biznesu/razblokirovka-raschetnogo-scheta-po-115-fz/"
      />

      {/* ═══ БЛОК 8: КЕЙСЫ ═══ */}
      <CasesBlock
        title={
          <span>
            <span style={{ display: 'inline-block' }}>Примеры из практики</span> <br />
            <span style={{ display: 'inline-block' }}>по банковским ограничениям</span>
          </span>
        }
        subtitle="Реабилитация компаний, восстановление ДБО и судебное взыскание незаконных банковских комиссий"
        cases={practiceCases}
      />

      {/* ═══ БЛОК 9: FAQ ═══ */}
      <FAQBlock items={faqs} />

      {/* ═══ БЛОК 10: СВЯЗАННЫЕ УСЛУГИ — КАНОНИЧЕСКИЙ ШАБЛОН ═══ */}
      <section className="section" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ marginBottom: '36px' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '10px'
            }}>
              Смежные направления практики для бизнеса
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '24px'
            }}>
              <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 3.5vw, 34px)', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.25, flex: '1 1 480px', minWidth: '280px' }}>
                <span style={{ display: 'inline-block' }}>Если ограничение связано</span> <br /><span style={{ display: 'inline-block' }}>не только со 115-ФЗ</span>
              </h2>
              <p style={{
                flex: '0 1 440px',
                minWidth: '280px',
                fontSize: '15.5px',
                color: 'var(--color-text-secondary)',
                fontWeight: 400,
                lineHeight: 1.65,
                margin: 0,
                textAlign: 'left',
                textWrap: 'balance'
              }}>
                Комплексная защита интересов компании при налоговых претензиях, корпоративных конфликтах, принудительном взыскании и арбитражных спорах.
              </p>
            </div>
          </div>

          <style dangerouslySetInnerHTML={{ __html: `
            .related-service-card {
              border-top: 3px solid var(--color-primary) !important;
              transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
            }
            .related-service-card:hover {
              border-top: 3px solid var(--color-gold) !important;
              transform: translateY(-6px) !important;
              box-shadow: 0 16px 36px rgba(23, 50, 77, 0.12) !important;
            }
            .related-service-card:hover .card-arrow {
              color: var(--color-gold) !important;
            }
            .related-service-card:hover .card-arrow svg {
              stroke: var(--color-gold) !important;
              transform: translateX(6px) !important;
            }
          `}} />

          <div className="grid grid-4" style={{ gap: '20px', marginBottom: '28px' }}>
            <Link href="/biznesu/korporativnyj-yurist/" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
              <div
                className="card related-service-card hover-lift"
                style={{
                  height: '100%',
                  minHeight: '180px',
                  padding: '26px 24px',
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '0',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)'
                }}
              >
                <div>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', lineHeight: 1.35, fontWeight: 700 }}>
                    Корпоративный юрист для бизнеса
                  </h3>
                  <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    Корпоративные договоры, защита контроля, разрешение споров между участниками и сделки с долями ООО.
                  </p>
                </div>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13.5px', fontWeight: 600, marginTop: '18px', transition: 'color 0.35s ease' }}>
                  <span>Подробнее об услуге</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/biznesu/nalogovyj-yurist-dlya-biznesa/" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
              <div
                className="card related-service-card hover-lift"
                style={{
                  height: '100%',
                  minHeight: '180px',
                  padding: '26px 24px',
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '0',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)'
                }}
              >
                <div>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', lineHeight: 1.35, fontWeight: 700 }}>
                    Налоговый юрист для бизнеса
                  </h3>
                  <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    Сопровождение проверок ФНС, отмена необоснованных доначислений, разблокировка счетов по решениям налоговой и защита при обвинениях в дроблении бизнеса.
                  </p>
                </div>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13.5px', fontWeight: 600, marginTop: '18px', transition: 'color 0.35s ease' }}>
                  <span>Подробнее об услуге</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
              <div
                className="card related-service-card hover-lift"
                style={{
                  height: '100%',
                  minHeight: '180px',
                  padding: '26px 24px',
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '0',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)'
                }}
              >
                <div>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', lineHeight: 1.35, fontWeight: 700 }}>
                    Исполнительное производство для бизнеса
                  </h3>
                  <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    Срочное снятие арестов с банковских счетов, отмена постановлений приставов и взыскание задолженности по исполнительным листам.
                  </p>
                </div>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13.5px', fontWeight: 600, marginTop: '18px', transition: 'color 0.35s ease' }}>
                  <span>Подробнее об услуге</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/biznesu/arbitrazhnyj-yurist/" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
              <div
                className="card related-service-card hover-lift"
                style={{
                  height: '100%',
                  minHeight: '180px',
                  padding: '26px 24px',
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '0',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)'
                }}
              >
                <div>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '17px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', lineHeight: 1.35, fontWeight: 700 }}>
                    Арбитражный юрист
                  </h3>
                  <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    Представительство в арбитражных судах по экономическим спорам, взысканию убытков, признанию сделок недействительными и договорам поставки.
                  </p>
                </div>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13.5px', fontWeight: 600, marginTop: '18px', transition: 'color 0.35s ease' }}>
                  <span>Подробнее об услуге</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 11: ФИНАЛЬНАЯ ФОРМА (СВЯЗАТЬСЯ С НАМИ) — КАНОНИЧЕСКИЙ ШАБЛОН ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px', padding: '80px 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  ОПЕРАТИВНАЯ ПОМОЩЬ
                </span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Обсудите ситуацию по 115-ФЗ</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>со специалистом</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко опишите, какой банк направил запрос или ввёл ограничения, и какой срок ответа установлен. Конфиденциальные финансовые документы и выписки передаются только после согласования защищенного канала связи.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация специалиста по 115-ФЗ</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Телефон для связи: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (4742) 20-15-25</a>
                </p>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '6px' }}>
                  Офис в Липецке: ул. Советская, д. 35, оф. 213 (приём по записи)
                </div>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Безопасность данных:</strong>
                Мы соблюдаем режим строгой коммерческой тайны. Банковские реквизиты и финансовые показатели не передаются третьим лицам.
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Написать нам"
                subtitle="Оставьте имя и номер телефона. При желании кратко опишите ситуацию — это поможет юристу подготовиться к разговору."
                subtext="Если вы оставите заявку вечером или в выходной день, мы перезвоним в ближайший рабочий день."
                buttonText="Оставить заявку"
                commentPlaceholder="Кратко опишите ситуацию: какой банк, блокировка ДБО, запрос документов или заградительный тариф…"
                hiddenFields={[
                  { name: 'source_page', value: '/biznesu/razblokirovka-raschetnogo-scheta-po-115-fz/' },
                  { name: 'service', value: 'Разблокировка расчетного счета по 115-ФЗ' },
                  { name: 'direction', value: '115-fz' }
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
