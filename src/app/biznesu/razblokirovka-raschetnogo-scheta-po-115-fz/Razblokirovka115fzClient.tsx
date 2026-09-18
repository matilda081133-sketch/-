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
      desc: 'Внесудебная реабилитация клиента по ст. 7 Закона № 115-ФЗ при сохранении отказа банком или присвоении высокого уровня риска в ЗСК. МВК принимает обязательное для банка решение о снятии ограничений.'
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
      desc: 'Контролируем регламентные сроки рассмотрения банком заявления о реабилитации клиента и устранении ограничений (до 7 рабочих дней).'
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
      desc: 'Если банк сохраняет ограничения, незамедлительно инициируем обжалование в Межведомственной комиссии ЦБ РФ или арбитраже.'
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
      a: 'Термин «блокировка» в законе отсутствует. На практике банк может: запросить документы с ограничением ДБО, отказать в проведении конкретного платежа (п. 11 ст. 7 115-ФЗ), ограничить выдачу наличных или расторгнуть договор. При этом уплата налогов, сборов и выплата зарплаты обычно доступны даже при ограничениях.'
    },
    {
      q: 'Что делать сразу после получения запроса банка по 115-ФЗ?',
      a: 'Зафиксируйте дату и срок ответа (обычно от 3 до 7 рабочих дней). Не отправляйте документы частями или в неотсортированном виде. Не давайте устных противоречивых объяснений сотрудникам отделения. Требуется единый структурированный ответ с описью всех приложений.'
    },
    {
      q: 'Какие документы обычно требует служба финансового мониторинга?',
      a: 'Стандартный запрос включает: договоры с контрагентами по спорным платежам, спецификации, акты приема-передачи, товарные и транспортные накладные, договоры аренды офиса/склада, штатное расписание, налоговые декларации с отметкой ФНС и квитанции об уплате налогов.'
    },
    {
      q: 'Сколько времени занимает процедура пересмотра решения в банке и МВК?',
      a: 'Банк обязан рассмотреть представленные документы и заявление о пересмотре в течение 7 рабочих дней (п. 13.4 ст. 7 Закона № 115-ФЗ). Межведомственная комиссия при Банке России рассматривает обращение в течение 20 рабочих дней со дня получения.'
    },
    {
      q: 'Можно ли просто открыть счёт в другом банке при блокировке?',
      a: 'Если банк внес отказ в единую межбанковскую систему через ЦБ РФ (так называемый «черный список»), другие банки получат эту информацию и с высокой вероятностью откажут в открытии счета. Поэтому критически важно пройти процедуру реабилитации и оспорить первый отказ.'
    },
    {
      q: 'Что делать, если компания попала в «красную зону» платформы «Знай своего клиента» (ЗСК)?',
      a: 'При отнесении к высокому уровню риска в платформе ЗСК компания лишается возможности совершать большинство расходных операций. Закон дает 6 месяцев на обжалование этого статуса в Банке России или МВК, после чего юрлицо подлежит принудительной ликвидации.'
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
            <span style={{ display: 'inline-block' }}>Разблокировка расчётного</span> <br />
            <span style={{ display: 'inline-block', color: 'var(--color-gold)' }}>счёта по 115-ФЗ в Липецке</span>
          </span>
        }
        subtitle="Банк запросил документы, отказал в операции, ограничил дистанционное обслуживание или сообщил о высоком уровне риска? Разберём основание ограничения и выстроим применимый порядок действий."
        trustItems={[
          'Проанализируем уведомление банка, спорные операции и подтверждающие документы',
          'Подготовим мотивированные пояснения и сопроводим обращение в банк или МВК ЦБ РФ',
          'Оспорим присвоение высокого уровня риска в платформе «Знай своего клиента» (ЗСК)',
          'Взыщем незаконные заградительные тарифы (10–25%) при закрытии счета в суде'
        ]}
        primaryCtaText="Обсудить ограничение по счёту"
        primaryCtaLink="#form"
        secondaryCtaText="Маршруты обжалования"
        secondaryCtaLink="#routes"
      />

      {/* ═══ БЛОК 2: СИТУАЦИИ ═══ */}
      <section id="situations" style={{ padding: '60px 0', background: 'var(--color-bg-light)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--color-gold)',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}
            >
              КАТЕГОРИИ ОГРАНИЧЕНИЙ
            </span>
            <h2
              style={{
                fontSize: '32px',
                fontWeight: 800,
                color: 'var(--color-text-main)',
                marginTop: '8px',
                marginBottom: '12px'
              }}
            >
              В каких ситуациях мы помогаем бизнесу
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', maxWidth: '750px', margin: '0 auto' }}>
              Одинаковое слово «блокировка» может означать совершенно разные решения банка. Сначала определяем, что именно произошло, и только после этого выбираем порядок действий.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px'
            }}
          >
            {situations.map((sit, idx) => (
              <div
                key={idx}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)',
                  padding: '28px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
                  border: '1px solid rgba(0,0,0,0.06)',
                  borderTop: '3px solid var(--color-gold)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    width: '70px',
                    height: '70px',
                    opacity: 0.04,
                    pointerEvents: 'none'
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                  </svg>
                </div>

                <div>
                  <div
                    style={{
                      display: 'inline-block',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: 'var(--color-gold)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      background: 'rgba(218, 165, 32, 0.1)',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      marginBottom: '14px'
                    }}
                  >
                    {sit.tag}
                  </div>
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      color: 'var(--color-text-main)',
                      marginBottom: '12px',
                      lineHeight: '1.3'
                    }}
                  >
                    {sit.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '14px',
                      color: 'var(--color-text-secondary)',
                      lineHeight: '1.5',
                      marginBottom: '20px'
                    }}
                  >
                    {sit.desc}
                  </p>
                </div>

                <a
                  href="#form"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--color-deep-blue)',
                    textDecoration: 'none',
                    borderBottom: '1px dashed var(--color-deep-blue)',
                    width: 'fit-content',
                    paddingBottom: '2px'
                  }}
                >
                  {sit.btnText} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: МАРШРУТЫ ОБЖАЛОВАНИЯ ═══ */}
      <section
        id="routes"
        style={{
          padding: '70px 0',
          background: 'var(--color-deep-blue)',
          color: '#ffffff',
          position: 'relative'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--color-gold)',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}
            >
              ПОРЯДОК ДЕЙСТВИЙ
            </span>
            <h2
              style={{
                fontSize: '32px',
                fontWeight: 800,
                color: '#ffffff',
                marginTop: '8px',
                marginBottom: '12px'
              }}
            >
              Определим применимый маршрут обжалования
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)', maxWidth: '800px', margin: '0 auto' }}>
              Не каждое ограничение рассматривается в одном и том же порядке. Мы сопоставим уведомление банка, фактические ограничения и уже направленные документы, чтобы не потерять время.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
              marginBottom: '40px'
            }}
          >
            {routes.map((route, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '12px',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-gold)', margin: 0 }}>
                  {route.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.6, margin: 0 }}>
                  {route.desc}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              background: 'rgba(0,0,0,0.25)',
              borderRadius: '12px',
              padding: '24px',
              borderLeft: '4px solid var(--color-gold)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '20px'
            }}
          >
            <div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                Банк заблокировал проведение платежей или установил короткий срок ответа?
              </div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)' }}>
                Проанализируем запрос финмониторинга и подготовим правовой ответ в кратчайшие сроки.
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href="tel:+74742201525"
                style={{
                  fontSize: '18px',
                  fontWeight: 800,
                  color: 'var(--color-gold)',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap'
                }}
              >
                +7 (4742) 20-15-25
              </a>
              <a
                href="#form"
                style={{
                  background: 'var(--color-gold)',
                  color: '#ffffff',
                  padding: '12px 24px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  whiteSpace: 'nowrap'
                }}
              >
                Обсудить ограничение
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: ЧТО ВХОДИТ В ПОМОЩЬ ═══ */}
      <section id="directions" style={{ padding: '60px 0', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--color-gold)',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}
            >
              КОМПЛЕКСНОЕ СОПРОВОЖДЕНИЕ
            </span>
            <h2
              style={{
                fontSize: '32px',
                fontWeight: 800,
                color: 'var(--color-text-main)',
                marginTop: '8px',
                marginBottom: '12px'
              }}
            >
              Сопроводим спор с банком от анализа до результата
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', maxWidth: '750px', margin: '0 auto' }}>
              Объём работы зависит от вида ограничения и уже совершенных действий. Согласуем конкретный этап или комплексное сопровождение под ключ.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px'
            }}
          >
            {directions.map((dir, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--color-bg-light)',
                  borderRadius: '12px',
                  padding: '28px',
                  border: '1px solid rgba(0,0,0,0.06)',
                  display: 'flex',
                  gap: '16px'
                }}
              >
                <div
                  style={{
                    fontSize: '22px',
                    fontWeight: 900,
                    color: 'var(--color-gold)',
                    lineHeight: 1
                  }}
                >
                  {dir.num}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: '17px',
                      fontWeight: 700,
                      color: 'var(--color-text-main)',
                      marginBottom: '8px',
                      lineHeight: 1.3
                    }}
                  >
                    {dir.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '14px',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.5,
                      margin: 0
                    }}
                  >
                    {dir.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: ЭТАПЫ РАБОТЫ ═══ */}
      <ProcessBlock
        title="Как проходит работа по разблокировке счёта"
        steps={processSteps}
      />

      {/* ═══ БЛОК 6: КУРАТОР (SPECIALISTBLOCK) ═══ */}
      <SpecialistBlock
        title="Куратор направления — Владимир Викторович Начешников"
        name="Владимир Викторович Начешников"
        position={<>Специалист ЮК «Де-Юре» по банковскому<br />и корпоративному сопровождению бизнеса</>}
        imageUrl="/images/nacheshnikov.jpg"
        imagePosition="center 15%"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Владимир Викторович координирует работу команды по финансовому и банковскому комплаенсу: организует первичный разбор ситуации, помогает определить необходимые документы и последовательность взаимодействия с банком, подключает профильных юристов для подготовки правовой позиции и судебной работы.
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
            «Ограничения по 115-ФЗ парализуют компанию в считанные часы. Главное — не отправлять банку хаотичные документы без четкого экономического обоснования».
          </div>,
          <ul key="3" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>Практический опыт в сфере корпоративного и финансового сопровождения с 1997 года</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>Реализованы десятки успешных процедур реабилитации бизнеса в банках и МВК ЦБ РФ</span>
            </li>
          </ul>,
          <a key="4" href="/specialisty/nacheshnikov-vladimir-viktorovich/" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
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
      />

      {/* ═══ БЛОК 8: КЕЙСЫ ═══ */}
      <CasesBlock
        title="Примеры из практики по банковским ограничениям"
        subtitle="Реабилитация компаний, восстановление ДБО и судебное взыскание незаконных банковских комиссий"
        cases={practiceCases}
      />

      {/* ═══ БЛОК 9: FAQ ═══ */}
      <FAQBlock items={faqs} />

      {/* ═══ БЛОК 10: СВЯЗАННЫЕ УСЛУГИ ═══ */}
      <section style={{ padding: '60px 0', background: 'var(--color-bg-light)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2
            style={{
              fontSize: '26px',
              fontWeight: 800,
              color: 'var(--color-text-main)',
              marginBottom: '24px',
              textAlign: 'center'
            }}
          >
            Если ограничение связано не только со 115-ФЗ
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '16px'
            }}
          >
            <Link
              href="/biznesu/korporativnyj-yurist/"
              style={{
                background: '#ffffff',
                padding: '20px',
                borderRadius: '8px',
                textDecoration: 'none',
                color: 'var(--color-text-main)',
                border: '1px solid rgba(0,0,0,0.06)',
                fontWeight: 600,
                fontSize: '15px',
                display: 'block'
              }}
            >
              Корпоративный юрист для бизнеса →
            </Link>
            <Link
              href="/biznesu/nalogovyj-yurist-dlya-biznesa/"
              style={{
                background: '#ffffff',
                padding: '20px',
                borderRadius: '8px',
                textDecoration: 'none',
                color: 'var(--color-text-main)',
                border: '1px solid rgba(0,0,0,0.06)',
                fontWeight: 600,
                fontSize: '15px',
                display: 'block'
              }}
            >
              Налоговый юрист для бизнеса →
            </Link>
            <Link
              href="/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/"
              style={{
                background: '#ffffff',
                padding: '20px',
                borderRadius: '8px',
                textDecoration: 'none',
                color: 'var(--color-text-main)',
                border: '1px solid rgba(0,0,0,0.06)',
                fontWeight: 600,
                fontSize: '15px',
                display: 'block'
              }}
            >
              Исполнительное производство для бизнеса →
            </Link>
            <Link
              href="/biznesu/arbitrazhnyj-yurist/"
              style={{
                background: '#ffffff',
                padding: '20px',
                borderRadius: '8px',
                textDecoration: 'none',
                color: 'var(--color-text-main)',
                border: '1px solid rgba(0,0,0,0.06)',
                fontWeight: 600,
                fontSize: '15px',
                display: 'block'
              }}
            >
              Арбитражный юрист →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 11: ФОРМА И КОНТАКТЫ ═══ */}
      <section id="form" style={{ padding: '70px 0', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              alignItems: 'start'
            }}
          >
            <div>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: 'var(--color-gold)',
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}
              >
                ОПЕРАТИВНАЯ ПОМОЩЬ
              </span>
              <h2
                style={{
                  fontSize: '32px',
                  fontWeight: 800,
                  color: 'var(--color-text-main)',
                  marginTop: '8px',
                  marginBottom: '16px'
                }}
              >
                Обсудите ситуацию по 115-ФЗ со специалистом
              </h2>
              <p
                style={{
                  fontSize: '15px',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '24px'
                }}
              >
                Кратко опишите, какой банк направил запрос или ввёл ограничения, и какой срок ответа установлен. Конфиденциальные финансовые документы и выписки передаются только после согласования защищенного канала связи.
              </p>
              <div
                style={{
                  background: 'var(--color-bg-light)',
                  padding: '20px',
                  borderRadius: '8px',
                  borderLeft: '4px solid var(--color-gold)',
                  marginBottom: '24px'
                }}
              >
                <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--color-deep-blue)' }}>
                  Безопасность данных
                </div>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
                  Мы соблюдаем режим строгой коммерческой тайны. Банковские реквизиты и финансовые показатели не передаются третьим лицам.
                </div>
              </div>
              <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                Офис в Липецке: <strong>ул. Советская, д. 35, оф. 213</strong>
                <br />
                Телефон для связи: <strong>+7 (4742) 20-15-25</strong>
              </div>
            </div>

            <div
              style={{
                background: 'var(--color-bg-light)',
                padding: '32px',
                borderRadius: '12px',
                border: '1px solid rgba(0,0,0,0.08)'
              }}
            >
              <ContactsForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
