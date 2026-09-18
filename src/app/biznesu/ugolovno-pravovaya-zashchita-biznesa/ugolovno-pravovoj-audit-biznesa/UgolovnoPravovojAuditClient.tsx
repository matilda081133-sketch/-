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
      a: 'Ни один честный юрист не может гарантировать отсутствие проверок, так как заявление в полицию может подать любой недобросовестный конкурент или уволенный сотрудник. Но аудит гарантирует, что к моменту проверки у компании будет безупречная документальная база и готовая правовая позиция, исключающая возбуждение дела.'
    },
    {
      q: 'Узнают ли сотрудники о проведении аудита?',
      a: 'Формат проверки определяется собственником. Аудит может проводиться полностью конфиденциально на основе удалённой выгрузки документов без уведомления рядового персонала компании.'
    },
    {
      q: 'Что делать, если в ходе аудита будут обнаружены критические риски?',
      a: 'Мы не просто указываем на проблему, а даём практический алгоритм её закрытия: внесение изменений в документы, заключение мировых соглашений, проведение корректировок в бухучёте или изменение схемы владения.'
    },
    {
      q: 'Как обеспечивается тайна полученных вами сведений?',
      a: 'До передачи первых документов подписывается двустороннее соглашение о конфиденциальности с фиксацией штрафных санкций. Информация передаётся по зашифрованным каналам связи.'
    }
  ];

  const relatedServices = [
    {
      title: 'Налоговый юрист для бизнеса',
      desc: 'Проверки ФНС, возражения на акты, обжалование доначислений до уголовной стадии.',
      link: '/biznesu/nalogovyj-yurist-dlya-biznesa/'
    },
    {
      title: 'Корпоративный юрист',
      desc: 'Защита контроля над ООО, споры участников, исключение участника, дедлоки.',
      link: '/biznesu/korporativnyj-yurist/'
    },
    {
      title: 'Разблокировка счёта по 115-ФЗ',
      desc: 'Снятие ограничений банков, ответы на запросы финмониторинга, реабилитация в МВК.',
      link: '/biznesu/razblokirovka-raschetnogo-scheta-po-115-fz/'
    },
    {
      title: 'Банкротство бизнеса',
      desc: 'Защита руководства от субсидиарной ответственности и оспаривания сделок.',
      link: '/biznesu/bankrotstvo-biznesa/'
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
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--color-primary)',
                    fontSize: '13px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    marginTop: '16px'
                  }}
                >
                  <span>{item.btnText} →</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: ПЕРИМЕТР ПРОВЕРКИ ═══ */}
      <section className="section" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>Что входит в периметр</span> <br />
              <span style={{ display: 'inline-block' }}>уголовно-правового аудита</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textWrap: 'balance' }}>
              Проверяем не просто оформление бумаг, а реальные факты хозяйственной жизни, сопоставляя их со следственной практикой по экономическим составам.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            {perimeterContours.map((contour, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  padding: '30px 26px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                <div style={{ fontSize: '22px', fontWeight: 800, color: 'var(--color-gold)', fontFamily: 'var(--font-serif)' }}>
                  {contour.num}
                </div>
                <h3 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', margin: 0, fontWeight: 600 }}>
                  {contour.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.55 }}>
                  {contour.desc}
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
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Аркадий Евгеньевич координирует проведение аудита и разработку практических рекомендаций по безопасности бизнеса. 22 года службы в следственных подразделениях налоговой полиции и Следственной части МВД позволяют заранее видеть риски, которые не замечают штатные юристы и бухгалтеры.
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
            «Задача аудита — не напугать собственника статьями УК РФ, а дать конкретный набор безопасных управленческих и договорных решений, исключающих риски».
          </div>,
          <ul key="3" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>22 года опыта расследования экономических и налоговых дел в МВД и налоговой полиции</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>Разработка комплексных комплаенс-программ для производственных и торговых холдингов</span>
            </li>
          </ul>,
          <a key="4" href="/specialisty/bobkin-arkadiy-evgenevich/" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
            Подробнее об Аркадии Евгеньевиче Бобкине →
          </a>
        ]}
        buttonText="Задать вопрос куратору"
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
                <span style={{ display: 'inline-block' }}>практики</span>
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
                Если задача затрагивает другие сферы деятельности компании:
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
                    boxShadow: '0 4px 16px rgba(23, 50, 77, 0.04)',
                    transition: 'all 0.3s ease'
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
                    <span>Подробнее →</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div>
            <Link href="/biznesu/" style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '15px', textDecoration: 'underline', textUnderlineOffset: '4px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              Смотреть все юридические услуги для бизнеса →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 10: ФИНАЛЬНАЯ ФОРМА (#FORM) ═══ */}
      <section id="form" className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <ContactsForm
            title="Заказать уголовно-правовой аудит бизнеса"
            subtitle="Опишите масштаб компании и ключевые направления, требующие анализа. Мы свяжемся с вами для согласования условий конфиденциальности и параметров проверки."
            buttonText="Обсудить аудит"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
