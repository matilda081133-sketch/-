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

export default function UgolovnoPravovojAuditClient() {
  const auditSituations = [
    {
      tag: 'Крупная сделка',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Перед запуском проекта</span> <br />
          <span style={{ display: 'inline-block' }}>или нестандартной сделки</span>
        </span>
      ),
      desc: 'Оценка рисков квалификации договора как притворной сделки, растраты или вывода активов до подписания обязывающих документов.',
      btnText: 'Проверить сделку'
    },
    {
      tag: 'Структура компании',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Изменение структуры</span> <br />
          <span style={{ display: 'inline-block' }}>владения или управления</span>
        </span>
      ),
      desc: 'Смена генерального директора, перераспределение долей или реорганизация бизнеса с анализом персональных рисков топ-менеджмента.',
      btnText: 'Оценить структуру'
    },
    {
      tag: 'Госконтракты',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Работа по 44-ФЗ, 223-ФЗ</span> <br />
          <span style={{ display: 'inline-block' }}>и госсубсидиям</span>
        </span>
      ),
      desc: 'Особое внимание силовиков к исполнению госзакупок, обоснованности смет, субподрядчикам и актам приёмки выполненных работ.',
      btnText: 'Проверить госконтракт'
    },
    {
      tag: 'Контроль активов',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Контроль собственника</span> <br />
          <span style={{ display: 'inline-block' }}>за действиями директоров</span>
        </span>
      ),
      desc: 'Проверка реального исполнения договоров, использования служебного положения и исключение злоупотреблений наёмного менеджмента.',
      btnText: 'Аудит менеджмента'
    },
    {
      tag: 'Зависимость от контрагента',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Высокая зависимость</span> <br />
          <span style={{ display: 'inline-block' }}>от посредников и агентов</span>
        </span>
      ),
      desc: 'Анализ реальности цепочек поставок, проверка посреднических договоров на предмет рисков признания операций бестоварными.',
      btnText: 'Проверить цепочки'
    },
    {
      tag: 'Смена собственника',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Перед продажей бизнеса</span> <br />
          <span style={{ display: 'inline-block' }}>или входом инвестора</span>
        </span>
      ),
      desc: 'Выявление скрытых уголовно-правовых уязвимостей, которые могут сорвать сделку или повлечь претензии покупателя.',
      btnText: 'Подготовить бизнес'
    },
    {
      tag: 'Конфликт интересов',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Расхождения между</span> <br />
          <span style={{ display: 'inline-block' }}>документами и практикой</span>
        </span>
      ),
      desc: 'Устранение формальных и фактических нестыковок в складском учёте, табелях, отгрузках и доверенностях до визита проверяющих.',
      btnText: 'Устранить нестыковки'
    },
    {
      tag: 'Инструктаж команды',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Подготовка сотрудников</span> <br />
          <span style={{ display: 'inline-block' }}>к проверкам органов</span>
        </span>
      ),
      desc: 'Разработка понятных внутренних инструкций на случай визита силовиков, вручения запросов или вызова на опрос.',
      btnText: 'Обучить сотрудников'
    }
  ];

  const perimeterContours = [
    {
      num: '01',
      title: 'Хозяйственные договоры и цепочки поставок',
      desc: 'Проверяем реальность операций, деловую цель сделок, обоснованность цен, наличие первичных документов (УПД, ТТН, акты) и добросовестность контрагентов.'
    },
    {
      num: '02',
      title: 'Государственные и муниципальные закупки',
      desc: 'Анализируем исполнение контрактов по 44-ФЗ и 223-ФЗ, обоснование изменения существенных условий, риски обвинений в хищении авансов и завышении смет.'
    },
    {
      num: '03',
      title: 'Корпоративные решения и распределение полномочий',
      desc: 'Проверяем легитимность протоколов собраний, приказов о назначении, доверенностей, одобрение крупных сделок и сделок с заинтересованностью.'
    },
    {
      num: '04',
      title: 'Движение денежных средств и наличные расчеты',
      desc: 'Анализируем подотчётные суммы, выплаты дивидендов, займы учредителям и сотрудникам на предмет признаков растраты (ст. 160 УК РФ) и налоговых рисков.'
    },
    {
      num: '05',
      title: 'Электронный документооборот и цифровые следы',
      desc: 'Оцениваем порядок хранения ЭЦП, разграничение доступа к клиент-банку и 1С, безопасность рабочей переписки и облачных серверов компании.'
    },
    {
      num: '06',
      title: 'Готовность персонала и регламенты безопасности',
      desc: 'Проверяем знание сотрудниками порядка действий при проверке ОБЭП, отсутствие стихийных записей и неофициальных черновых реестров на рабочих местах.'
    }
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Согласование периметра и соглашение о конфиденциальности',
      desc: 'Определяем проверяемые направления, глубину периода и подписываем строгое соглашение о неразглашении коммерческой тайны (NDA).'
    },
    {
      num: '02',
      title: 'Защищённый сбор и передача материалов',
      desc: 'Запрашиваем только необходимые документы и файлы через защищённые каналы связи без создания избыточной нагрузки на бухгалтерию.'
    },
    {
      num: '03',
      title: 'Уголовно-правовой и экономический анализ',
      desc: 'Сопоставляем документальную базу с фактическими бизнес-процессами и актуальной следственной практикой региона.'
    },
    {
      num: '04',
      title: 'Подготовка конфиденциального отчёта о рисках',
      desc: 'Формируем перечень выявленных зон уязвимости с градацией по уровню угрозы (высокий, средний, фоновый) и возможным статьям УК РФ.'
    },
    {
      num: '05',
      title: 'План корректирующих мер и инструктаж руководства',
      desc: 'Предоставляем конкретные формулировки для исправления документов, регламенты безопасности и проводим персональную встречу с собственником.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Экспресс-аудит сделки / контракта',
      subtitle: 'Проверка одной крупной операции',
      popular: false,
      price: 'от 30 000 ₽',
      features: [
        { name: 'Анализ договора, смет и цепочки контрагентов', value: 'Включено' },
        { name: 'Оценка рисков ст. 159, 160, 201 УК РФ', value: 'Включено' },
        { name: 'Проверка реальности встречного предоставления', value: 'Включено' },
        { name: 'Письменное заключение и рекомендации', value: 'Включено' }
      ],
      buttonText: 'Заказать экспресс-аудит',
      buttonHref: '#form'
    },
    {
      title: 'Аудит направления / госконтракта',
      subtitle: 'Комплексный анализ проекта',
      popular: true,
      badgeText: 'Востребованный формат',
      price: 'от 60 000 ₽',
      features: [
        { name: 'Проверка группы сделок за период до 1 года', value: 'Включено' },
        { name: 'Анализ исполнения гособоронзаказа или 44-ФЗ', value: 'Включено' },
        { name: 'Аудит полномочий и электронных подписей', value: 'Включено' },
        { name: 'Пошаговый план устранения уязвимостей', value: 'Включено' }
      ],
      buttonText: 'Выбрать формат',
      buttonHref: '#form'
    },
    {
      title: 'Комплексный аудит бизнеса',
      subtitle: 'Полная проверка компании за 3 года',
      popular: false,
      price: 'от 120 000 ₽',
      features: [
        { name: 'Все ключевые договоры, закупки и контрагенты', value: 'Включено' },
        { name: 'Корпоративная структура и налоговые риски', value: 'Включено' },
        { name: 'Аудит безопасности ИТ-инфраструктуры и ЭЦП', value: 'Включено' },
        { name: 'Инструктаж топ-менеджмента и регламенты для офиса', value: 'Включено' }
      ],
      buttonText: 'Заказать полный аудит',
      buttonHref: '#form'
    }
  ];

  const practiceCases: CaseData[] = [
    {
      category: 'Госзакупки 44-ФЗ',
      title: 'Предотвращение претензий по контракту на реконструкцию дорожной сети',
      problem: 'Подрядчик выполнил работы по госконтракту на 62 млн ₽, но из-за задержек поставок часть материалов была заменена на аналоги по согласованию с заказчиком без надлежащего допсоглашения.',
      action: 'В ходе аудита выявили риск квалификации замены материалов как мошенничества (ст. 159 УК РФ). Провели независимую лабораторную экспертизу качества аналогов и оформили недостающие акты и изменения к контракту до закрытия проверки казначейства.',
      result: 'Контракт принят без замечаний, риски уголовного преследования руководства устранены.'
    },
    {
      category: 'Сделки с контрагентами',
      title: 'Выявление фиктивных поставок в филиале производственного холдинга',
      problem: 'Собственник заподозрил наёмного директора филиала в выводе средств через подконтрольные компании-однодневки под видом закупки расходных материалов.',
      action: 'Провели аудит складских ордеров, сопоставили данные системы видеонаблюдения и пропусков с товарными накладными. Зафиксировали факт бестоварности сделок на 8,4 млн ₽.',
      result: 'С наёмным директором расторгнут контракт с полным добровольным возмещением ущерба компании во внесудебном порядке.'
    },
    {
      category: 'Продажа бизнеса',
      title: 'Устранение уголовно-правовых уязвимостей перед входом стратегического инвестора',
      problem: 'Перед продажей 49% доли в агропромышленном предприятии требовалось очистить историю взаиморасчетов с аффилированными ИП и исключить риски обвинений в дроблении и растрате.',
      action: 'Проанализировали структуру платежей, переоформили спорные договоры аренды техники на рыночных условиях и провели зачет взаимных требований.',
      result: 'Сделка с инвестором успешно закрыта по согласованной оценке без дисконта на риски.'
    }
  ];

  const faqs = [
    {
      q: 'Чем уголовно-правовой аудит отличается от обычного бухгалтерского или налогового аудита?',
      a: 'Бухгалтерский аудит проверяет правильность проводок и баланса, налоговый — правильность исчисления налогов. Уголовно-правовой аудит оценивает действия руководства глазами следователя: есть ли в сделках признаки обмана, злоупотребления, растраты или сговора, которые могут стать основанием для уголовного дела.'
    },
    {
      q: 'Гарантирует ли аудит, что компанию никогда не проверит ОБЭП или СК?',
      a: 'Нет. Аудит не исключает проверку, претензии правоохранительных органов или возбуждение уголовного дела. Его результат — перечень выявленных обстоятельств, оценка рисков и рекомендации по законным изменениям в документах и процессах компании.'
    },
    {
      q: 'Узнают ли сотрудники о проведении аудита?',
      a: 'Формат проверки определяется собственником. Аудит может проводиться полностью конфиденциально на основе удалённой выгрузки документов без уведомления рядового персонала компании.'
    },
    {
      q: 'Что делать, если в ходе аудита будут обнаружены критические риски?',
      a: 'По результатам аудита формируется план законного снижения рисков: корректировка процессов на будущее, устранение выявленных несоответствий допустимыми способами, уточнение бухгалтерского и налогового учёта в установленном порядке, сохранение доказательств и подготовка позиции на случай претензий. Аудит не предполагает сокрытия, уничтожения или оформления документов задним числом.'
    },
    {
      q: 'Как обеспечивается тайна полученных вами сведений?',
      a: 'До передачи первых документов подписывается двустороннее соглашение о конфиденциальности с фиксацией штрафных санкций. Информация передаётся по зашифрованным каналам связи.'
    }
  ];

    const relatedServices = [
    {
      title: 'Защита бизнеса при проверке ОБЭП',
      desc: 'Анализ обоснованности запросов, подготовка ответов, инструктаж персонала и защита от давления.',
      link: '/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-pri-proverke-obep/'
    },
    {
      title: 'Защита по экономическим преступлениям',
      desc: 'Защита собственников и руководителей по обвинениям в мошенничестве, растрате и злоупотреблении.',
      link: '/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-ekonomicheskim-prestupleniyam/'
    },
    {
      title: 'Защита по налоговым преступлениям',
      desc: 'Защита должностных лиц компании при проверках СК РФ и уголовных делах по ст. 199 УК РФ.',
      link: '/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-nalogovym-prestupleniyam/'
    },
    {
      title: 'Защита при обыске и выемке в компании',
      desc: 'Срочный выезд адвоката, контроль процедуры, защита серверов и непрерывности бизнеса.',
      link: '/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-pri-obyske-v-kompanii/'
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
            <Link href="/biznesu/ugolovno-pravovaya-zashchita-biznesa/">Уголовно-правовая защита бизнеса</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Уголовно-правовой аудит бизнеса</span>
          </>
        }
        superTitle={
          <span style={{ whiteSpace: 'normal', display: 'inline-block', lineHeight: 1.4 }}>
            <span style={{ display: 'inline-block' }}>УГОЛОВНО-ПРАВОВАЯ ЗАЩИТА БИЗНЕСА •</span> <br />
            <span style={{ display: 'inline-block' }}>Липецк и Липецкая область</span>
          </span>
        }
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Уголовно-правовой аудит
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              бизнеса в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '760px', textWrap: 'balance' }}>
            Проверим процессы, сделки, полномочия и документы компании, выявим обстоятельства с потенциальным уголовно-правовым риском и подготовим приоритетные рекомендации до визита правоохранительных органов.
          </span>
        }
        primaryCtaText="Обсудить аудит компании"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_audit"
        primaryCtaSubtext={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Конфиденциальная консультация с куратором:
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (4742) 20-15-25</a>
            </span>
          </span>
        }
        imageUrl="/images/bobkin.jpg"
        imageName="Аркадий Евгеньевич Бобкин"
        imageSubtitle="Директор, управляющий партнёр ЮК «Де-Юре», куратор направления"
        imageObjectPosition="center 15%"
        trustItems={[
          {
            text: (
              <span>
                <strong>Согласуем периметр проверки</strong> до передачи документов
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Анализ фактической модели</strong> бизнес-процессов, а не только формы
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Разделение рисков</strong> собственников, директоров и сотрудников
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Конкретные формулировки</strong> для устранения опасных уязвимостей
              </span>
            )
          }
        ]}
      />

      {/* ═══ БЛОК 2: В КАКИХ СИТУАЦИЯХ НУЖЕН АУДИТ (#SITUATIONS) ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>В каких ситуациях стоит</span> <br />
              <span style={{ display: 'inline-block' }}>проверить риски заранее</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textWrap: 'balance' }}>
              Превентивная оценка позволяет устранить слабые места до того, как они привлекут внимание налоговых органов, ОБЭП или Следственного комитета.
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '24px', marginBottom: '32px' }}>
            {auditSituations.map((item, i) => (
              <div
                key={i}
                className="card hover-lift"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  borderRadius: '0',
                  padding: '28px 22px',
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
                  <div style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'var(--color-primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '10px',
                    background: 'rgba(23, 50, 77, 0.06)',
                    padding: '2px 6px',
                    display: 'inline-block'
                  }}>
                    {item.tag}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '17px', fontWeight: 600, color: 'var(--color-deep-blue)', margin: '0 0 10px 0', lineHeight: 1.3 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    {item.desc}
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
                  <span>{item.btnText}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.25s ease, stroke 0.25s ease' }}>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: ПЕРИМЕТР ПРОВЕРКИ (КАНОНИЧЕСКИЙ ШАБЛОН #CHECK) ═══ */}
      <section className="section bg-white" id="check" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.25 }}>
              <span style={{ display: 'inline-block' }}>Что входит в периметр</span> <br />
              <span style={{ display: 'inline-block' }}>уголовно-правового аудита</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Проверяем не просто оформление бумаг, а реальные факты хозяйственной жизни, сопоставляя их со следственной практикой по экономическим составам.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', position: 'relative', marginBottom: '40px' }}>
            {perimeterContours.map((item, idx) => (
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
        </div>
      </section>

      {/* ═══ БЛОК 4: ЭТАПЫ АУДИТА (PROCESSBLOCK) ═══ */}
      <ProcessBlock
        title="Как проходит уголовно-правовой аудит компании"
        subtitle="Прозрачная и строго конфиденциальная процедура в 5 этапов без отвлечения сотрудников от операционной работы."
        steps={processSteps}
        ctaTitle="Хотите оценить риски конкретной сделки?"
        ctaSubtitle="Свяжитесь с нами для первичного экспресс-анализа. Согласуем периметр и рассчитаем точную стоимость аудита."
        ctaButtonText="Заказать аудит рисков"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 5: КУРАТОР (SPECIALISTBLOCK) ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Аркадий Евгеньевич Бобкин"
        position={<>Директор, управляющий партнёр ЮК «Де-Юре»,<br />куратор направления «Уголовно-правовая защита бизнеса»</>}
        imageUrl="/images/bobkin.jpg"
        imagePosition="center 15%"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block', lineHeight: 1.65, fontSize: '15.5px' }}>
            Аркадий Евгеньевич участвует в первичной оценке ситуации и разработке правовой позиции, координирует работу команды специалистов по сложным уголовно-правовым вопросам бизнеса. 22 года работал в следственных подразделениях налоговой полиции и МВД, в том числе следователем по особо важным делам и руководителем Следственной части. При необходимости процессуальную защиту осуществляет независимый адвокат, подключённый к делу.
          </span>,
          <a key="2" href="/specialisty/bobkin-arkadiy-evgenevich/" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
            Подробнее об Аркадии Евгеньевиче Бобкине →
          </a>
        ]}
        buttonText="Обсудить ситуацию с куратором"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 6: СТОИМОСТЬ (PRICINGBLOCK) ═══ */}
      <PricingBlock
        title="Стоимость уголовно-правового аудита"
        subtitle="Цена фиксируется в договоре и зависит от согласованного периметра проверки, количества сделок и объема первичных документов."
        tiers={pricingTiers}
        disclaimer="В стоимость входит полный письменный отчёт с перечнем рисков и конкретными формулировками для исправления документов. Нотариальные и независимые экспертные расходы при необходимости согласуются отдельно."
      />

      {/* ═══ БЛОК 7: ПРАКТИКА (CASESBLOCK) ═══ */}
      <CasesBlock
        title="Примеры аудита и предотвращения рисков"
        cases={practiceCases}
      />
      <div className="container" style={{ marginTop: '-40px', marginBottom: '60px', textAlign: 'center' }}>
        <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', fontStyle: 'italic', margin: 0 }}>
          Результат зависит от своевременности аудита и точности внедрения полученных правовых рекомендаций.
        </p>
      </div>

      {/* ═══ БЛОК 8: FAQ ═══ */}
      <FAQBlock
        title="Частые вопросы об уголовно-правовом аудите"
        subtitle="Ответы на ключевые вопросы собственников и топ-менеджеров о конфиденциальности, сроках и результатах проверки."
        faqs={faqs}
      />

      {/* ═══ БЛОК: СМЕЖНЫЕ НАПРАВЛЕНИЯ ПРАКТИКИ ДЛЯ БИЗНЕСА (ПО ШАБЛОНУ) ═══ */}
      <section className="section bg-light" id="related-services" style={{ padding: '64px 0', background: 'var(--gradient-cream)', borderTop: '1px solid var(--color-border)' }}>
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
                <span style={{ display: 'inline-block' }}>Смежные направления</span> <br />
                <span style={{ display: 'inline-block' }}>практики для бизнеса</span>
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
                Если ситуация выходит за рамки аудита рисков, привлекаем экспертов смежных практик компании «Де-Юре» — по налогам, арбитражу, корпоративным спорам и банкротству.
              </p>
            </div>
          </div>

          <div className="grid grid-4" style={{ gap: '20px', marginBottom: '28px' }}>
            {relatedServices.map((rel, idx) => (
              <Link key={idx} href={rel.link} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
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
                      {rel.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                      {rel.desc}
                    </p>
                  </div>
                  <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-primary)', fontSize: '13.5px', fontWeight: 600, marginTop: '18px', transition: 'color 0.35s ease' }}>
                    <span>Подробнее об услуге</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.35s ease, stroke 0.35s ease' }}>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div>
            <Link href="/biznesu/" className="all-services-link" style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '15px', textDecoration: 'underline', textUnderlineOffset: '4px', display: 'inline-flex', alignItems: 'center', gap: '6px', transition: 'color 0.3s ease' }}>
              Смотреть все юридические услуги для бизнеса →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 10: ФИНАЛЬНАЯ ФОРМА (СВЯЗАТЬСЯ С НАМИ) — КАНОНИЧЕСКИЙ ШАБЛОН ═══ */}
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
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Получите первичную</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>оценку ситуации</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Опишите масштаб компании и ключевые направления, требующие анализа. Мы свяжемся с вами для согласования условий конфиденциальности и параметров проверки.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Прямой контакт со специалистом</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Дежурный телефон: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (910) 350-31-11</a><br />
                  Городской телефон: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (4742) 20-15-25</a>
                </p>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '6px' }}>
                  Липецк, ул. Советская, д. 35, офис 213 (приём руководителей по предварительной записи)
                </div>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Конфиденциальность обращения</strong>
                Не указывайте в форме паспортные данные, коммерческую тайну и другие чувствительные сведения. Защищённый способ передачи документов согласуем после первого контакта. После подключения адвоката сведения, связанные с оказанием им юридической помощи, охраняются адвокатской тайной.
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Написать нам"
                subtitle={
                  <>
                    <span style={{ display: 'inline-block' }}>Оставьте контакты и суть вопроса. Специалист свяжется с вами</span> <br />
                    <span style={{ display: 'inline-block' }}>в течение 15 минут в рабочее время.</span>
                  </>
                }
                subtext={
                  <>
                    <span style={{ display: 'inline-block' }}>Если вы оставите заявку вечером или в&nbsp;выходной день,</span> <br />
                    <span style={{ display: 'inline-block' }}>мы перезвоним в&nbsp;ближайший рабочий день.</span>
                  </>
                }
                buttonText="Обсудить аудит"
                commentPlaceholder="Кратко укажите масштаб компании и направления для аудита…"
                hiddenFields={[
                  { name: 'source_page', value: '/biznesu/ugolovno-pravovaya-zashchita-biznesa/ugolovno-pravovoj-audit-biznesa/' },
                  { name: 'page_type', value: 'service' },
                  { name: 'direction', value: 'criminal-defense' },
                  { name: 'service', value: 'ugolovno-pravovoj-audit-biznesa' }
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
