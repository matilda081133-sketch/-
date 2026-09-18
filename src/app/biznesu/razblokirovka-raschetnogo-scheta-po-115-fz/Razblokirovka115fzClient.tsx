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
              <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (910) 350-31-11</a>
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
              <span>
                <strong>Проанализируем уведомление банка</strong>, спорные операции и подтверждающие документы
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Подготовим мотивированные пояснения</strong> и сопроводим обращение в банк или МВК ЦБ РФ
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Оспорим присвоение высокого</strong> уровня риска в платформе «Знай своего клиента» (ЗСК)
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Взыщем незаконные заградительные тарифы</strong> (10–25%) при закрытии счета в суде
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
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
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
              <strong style={{ color: '#FFFFFF' }}>Банк заблокировал проведение платежей или установил короткий срок ответа?</strong> Проанализируем запрос финмониторинга и подготовим правовой ответ в кратчайшие сроки.
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
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '28px', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
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
            className="with-accent"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(24px, 3vw, 32px)',
              color: 'var(--color-deep-blue)',
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
              className="hover-lift"
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
              className="hover-lift"
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
              className="hover-lift"
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
              className="hover-lift"
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
                  fontSize: '12.5px',
                  fontWeight: 700,
                  color: 'var(--color-gold)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}
              >
                ОПЕРАТИВНАЯ ПОМОЩЬ
              </span>
              <h2
                className="with-accent"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(26px, 3.5vw, 36px)',
                  color: 'var(--color-deep-blue)',
                  marginTop: '8px',
                  marginBottom: '16px',
                  lineHeight: 1.25
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
