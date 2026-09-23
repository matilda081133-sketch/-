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

export default function NalogovyjYuristClient() {
  const taxSituations = [
    {
      tag: 'Требование или вызов',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>ФНС запросила документы</span> <br />
          <span style={{ display: 'inline-block' }}>или вызывает на допрос</span>
        </span>
      ),
      desc: 'Определим обоснованность требования по ст. 93, 93.1 НК РФ, подготовим безопасные пояснения и подготовим должностных лиц к допросу в инспекции.',
      btnText: 'Ответить на требование',
      href: '#form'
    },
    {
      tag: 'Налоговая проверка',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Проводится камеральная</span> <br />
          <span style={{ display: 'inline-block' }}>или выездная проверка (ВНП)</span>
        </span>
      ),
      desc: 'Контролируем законность действий проверяющих, сопровождаем осмотры и выемки, собираем доказательства реальности хозяйственных операций.',
      btnText: 'Сопровождение ВНП',
      href: '/biznesu/nalogovyj-yurist-dlya-biznesa/soprovozhdenie-nalogovyh-proverok/'
    },
    {
      tag: 'Акт проверки',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Получен акт проверки</span> <br />
          <span style={{ display: 'inline-block' }}>с крупными доначислениями</span>
        </span>
      ),
      desc: 'Проверим факты, доказательства и расчет недоимки, подготовим мотивированные возражения на акт в течение 1 месяца и отстоим позицию на рассмотрении.',
      btnText: 'Возражения на акт',
      href: '#form'
    },
    {
      tag: 'Решение ФНС',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Вынесено решение</span> <br />
          <span style={{ display: 'inline-block' }}>о доначислении налогов и штрафов</span>
        </span>
      ),
      desc: 'Определим объём и стратегию обжалования, подадим апелляционную жалобу в УФНС и оспорим решение в Арбитражном суде Липецкой области.',
      btnText: 'Оспорить решение',
      href: '/biznesu/nalogovyj-yurist-dlya-biznesa/osparivanie-donachislenij-i-reshenij-fns/'
    },
    {
      tag: 'Дробление бизнеса',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Обвинение в искусственном</span> <br />
          <span style={{ display: 'inline-block' }}>дроблении группы компаний</span>
        </span>
      ),
      desc: 'Опровергнем критерии формального разделения бизнеса, подтвердим самостоятельность компаний и ИП, деловую цель и раздельный учет.',
      btnText: 'Защита от дробления',
      href: '/biznesu/nalogovyj-yurist-dlya-biznesa/zashchita-pri-obvinenii-v-droblenii-biznesa/'
    },
    {
      tag: 'Уголовные риски',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Риск передачи материалов</span> <br />
          <span style={{ display: 'inline-block' }}>в Следственный комитет РФ</span>
        </span>
      ),
      desc: 'Синхронизируем налоговые возражения с уголовно-правовой защитой руководства по ст. 199 УК РФ до возбуждения уголовного дела.',
      btnText: 'Снять уголовный риск',
      href: '/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-nalogovym-prestupleniyam/'
    }
  ];

  const subServices = [
    {
      title: 'Сопровождение налоговых проверок',
      desc: 'Подключимся при требованиях, вызовах, камеральной или выездной проверке; подготовим пояснения, подтверждающие документы и возражения на акт.',
      href: '/biznesu/nalogovyj-yurist-dlya-biznesa/soprovozhdenie-nalogovyh-proverok/'
    },
    {
      title: 'Оспаривание доначислений и решений ФНС',
      desc: 'Проверим решение инспекции и расчет недоимки, подготовим апелляционную жалобу и представим интересы бизнеса в УФНС и арбитражном суде.',
      href: '/biznesu/nalogovyj-yurist-dlya-biznesa/osparivanie-donachislenij-i-reshenij-fns/'
    },
    {
      title: 'Защита при обвинении в дроблении бизнеса',
      desc: 'Проанализируем признаки дробления ФНС, соберем доказательства деловой цели и самостоятельности организаций, проверим применение налоговой амнистии.',
      href: '/biznesu/nalogovyj-yurist-dlya-biznesa/zashchita-pri-obvinenii-v-droblenii-biznesa/'
    }
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Разбираемся в ситуации',
      desc: 'Вы описываете, какие документы уже получены от ФНС и какие действия предпринимались. Уточняем текущую стадию проверки или спора.'
    },
    {
      num: '02',
      title: 'Проверяем документы и сроки',
      desc: 'Изучаем требование, акт, решение, ответы и первичные документы по спорным операциям. Контролируем процессуальные сроки обжалования.'
    },
    {
      num: '03',
      title: 'Согласуем стратегию и стоимость',
      desc: 'Определяем состав работ, порядок взаимодействия с руководством и бухгалтерией, фиксируем стоимость услуг в договоре.'
    },
    {
      num: '04',
      title: 'Формируем доказательственную базу',
      desc: 'Проверяем расчеты инспекции, проводим независимый финансовый контррасчет, готовим пояснения, возражения или жалобу в УФНС.'
    },
    {
      num: '05',
      title: 'Представляем интересы бизнеса',
      desc: 'Участвуем в рассмотрении материалов проверки в налоговой инспекции, заседаниях в УФНС и Арбитражном суде Липецкой области.'
    },
    {
      num: '06',
      title: 'Сопровождаем результат',
      desc: 'Разъясняем принятое решение, добиваемся снятия ограничений со счетов и имущества и снижаем риск передачи материалов в правоохранительные органы.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Консультация и правовой аудит',
      subtitle: 'Оценка претензий ФНС',
      popular: false,
      price: 'от 15 000 ₽',
      features: [
        { name: 'Изучение акта, решения или требований ФНС', value: 'Включено' },
        { name: 'Оценка обоснованности начислений и рисков', value: 'Включено' },
        { name: 'Анализ рисков по ст. 199 УК РФ (уголовный состав)', value: 'Включено' },
        { name: 'Стратегия первоочередных процессуальных шагов', value: 'Включено' }
      ],
      buttonText: 'Заказать аудит',
      buttonHref: '#form'
    },
    {
      title: 'Возражения на акт и жалоба в УФНС',
      subtitle: 'Досудебное урегулирование спора',
      popular: true,
      badgeText: 'Частый выбор',
      price: 'от 45 000 ₽',
      features: [
        { name: 'Подготовка мотивированных возражений на акт проверки', value: 'Включено' },
        { name: 'Формирование доказательственной базы реальности сделок', value: 'Включено' },
        { name: 'Очное участие при рассмотрении материалов в ФНС', value: 'Включено' },
        { name: 'Подготовка апелляционной жалобы в УФНС региона', value: 'Включено' }
      ],
      buttonText: 'Подать возражения',
      buttonHref: '#form'
    },
    {
      title: 'Судебное представительство в арбитраже',
      subtitle: 'Оспаривание решения в суде',
      popular: false,
      price: 'от 80 000 ₽',
      features: [
        { name: 'Подготовка и подача заявления в арбитражный суд', value: 'Включено' },
        { name: 'Ходатайство о приостановлении действия решения ФНС', value: 'Включено' },
        { name: 'Представительство во всех судебных заседаниях', value: 'Включено' },
        { name: 'Назначение независимой налоговой экспертизы', value: 'Включено' }
      ],
      buttonText: 'Судебная защита',
      buttonHref: '#form'
    }
  ];

  const practiceCases: CaseData[] = [
    {
      category: 'Налоговая проверка',
      title: 'Исключение части претензий ФНС на стадии рассмотрения материалов проверки',
      problem: 'В ходе выездной проверки производственной компании инспекция сняла вычеты по НДС по четырем поставщикам металла, начислив 28 млн ₽ недоимки.',
      action: 'Подготовили подробные возражения с путевыми листами, складскими ордерами и актами инвентаризации. Доказали реальность поставки сырья и оприходования готовой продукции.',
      result: 'Инспекция исключила три спорных эпизода из итогового акта, снизив сумму доначислений на 19,5 млн ₽ до вынесения решения.'
    },
    {
      category: 'Обжалование в УФНС',
      title: 'Отмена доначислений на 14 млн ₽ через апелляционную жалобу в Управление ФНС',
      problem: 'Инспекция доначислила строительной фирме налог на прибыль и пени, сочтя субподрядные договоры фиктивными из-за отсутствия у контрагента штата.',
      action: 'В апелляционной жалобе доказали допуск рабочих подрядчика на строительную площадку по пропускам генподрядчика и реальность выполненных работ.',
      result: 'УФНС по Липецкой области удовлетворило апелляционную жалобу, полностью отменив решение нижестоящей инспекции в спорной части.'
    },
    {
      category: 'Дробление бизнеса',
      title: 'Опровержение доводов налоговой инспекции о формальном дроблении бизнеса',
      problem: 'ФНС объединила выручку производственного ООО и двух ИП на УСН, доначислив НДС и налог на прибыль на общую сумму 42 млн ₽.',
      action: 'В Арбитражном суде Липецкой области доказали раздельную деловую цель: ООО производило продукцию, а ИП осуществляли розничный сбыт через собственные торговые точки со своими сотрудниками.',
      result: 'Арбитражный суд признал решение ФНС недействительным. Претензии в дроблении бизнеса полностью сняты.'
    }
  ];

  const faqs = [
    {
      q: 'На какой стадии лучше подключить налогового юриста?',
      a: 'Оптимально — сразу после получения первого требования о предоставлении документов или вызова на допрос. Это позволяет сформировать непротиворечивую позицию компании до того, как сотрудники дадут некорректные пояснения инспекторам.'
    },
    {
      q: 'Какие документы нужны для первичной консультации?',
      a: 'Достаточно документов, которые уже получены от налогового органа: требование, уведомление о вызове, акт выездной/камеральной проверки или итоговое решение. Направлять весь бухгалтерский архив заранее не требуется.'
    },
    {
      q: 'Можно ли оспорить решение ФНС сразу в арбитражном суде?',
      a: 'По общему правилу п. 2 ст. 138 Налогового кодекса РФ решения налоговых органов по результатам проверок подлежат обязательному досудебному обжалованию в вышестоящем налоговом органе (УФНС). Обращение в суд возможно только после рассмотрения жалобы Управлением.'
    },
    {
      q: 'Что делать, если компанию обвиняют в дроблении бизнеса?',
      a: 'Необходимо доказать самостоятельность каждого субъекта группы: наличие собственного штата, оборудования, помещений, раздельных контрактов и реальной деловой цели создания каждой структуры (например, разные рынки сбыта или лицензируемые виды деятельности).'
    },
    {
      q: 'Всегда ли налоговая проверка влечет уголовную ответственность?',
      a: 'Нет. Уголовная ответственность по ст. 199 УК РФ наступает только при наличии доказанного прямого умысла руководства на уклонение от налогообложения и сумме неуплаченных налогов от 18,75 млн ₽ за 3 года. Доказывание отсутствия умысла — ключевая задача юриста.'
    },
    {
      q: 'Можно ли приостановить списание денег со счетов на время судебного спора?',
      a: 'Да. Юристы подготовят ходатайство об обеспечительных мерах и будут добиваться приостановления действия решения ФНС и списания денег со счетов. Решение принимает суд, поэтому само обращение в арбитражный суд взыскание автоматически не останавливает.'
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
            <span style={{ color: 'var(--color-text-main)' }}>Налоговый юрист для бизнеса</span>
          </>
        }
        superTitle={
          <span style={{ whiteSpace: 'normal', display: 'inline-block', lineHeight: 1.4 }}>
            <span style={{ display: 'inline-block' }}>НАЛОГОВЫЕ ПРОВЕРКИ И СПОРЫ •</span> <br />
            <span style={{ display: 'inline-block' }}>Липецк и Липецкая область</span>
          </span>
        }
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Налоговый юрист
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              для бизнеса в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '760px', textWrap: 'balance' }}>
            Помогаем компаниям и предпринимателям при требованиях и проверках ФНС, доначислениях, обжаловании решений и обвинениях в дроблении бизнеса.
          </span>
        }
        primaryCtaText="Обсудить налоговую ситуацию"
        primaryCtaLink="#form"
        primaryCtaSubtext={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Конфиденциальный звонок куратору направления:
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (4742) 20-15-25</a>
            </span>
          </span>
        }
        secondaryCtaText="Направления помощи"
        secondaryCtaLink="#directions"
        imageUrl="/images/bobkin.jpg"
        imageName="Аркадий Евгеньевич Бобкин"
        imageSubtitle="Директор, управляющий партнёр ЮК «Де-Юре», куратор направления"
        imageObjectPosition="center 15%"
        trustItems={[
          {
            text: (
              <span>
                <strong>Изучим материалы</strong> и определим текущую стадию налогового спора
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Проверим доводы ФНС</strong>, доказательства и обоснованность расчёта недоимки
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Сформируем позицию</strong> и сопроводим защиту в УФНС и арбитражном суде
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Координируем защиту</strong> со смежными уголовными рисками (ст. 199 УК РФ)
              </span>
            )
          }
        ]}
      />

      {/* ═══ БЛОК 2: СИТУАЦИИ (ШАБЛОН «СИТУАЦИИ») ═══ */}
      <section className="section bg-white" id="situations" style={{ padding: '80px 0' }}>
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
              НАЛОГОВЫЕ СПОРЫ И ПРОВЕРКИ
            </div>
            <h2
              className="with-accent"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 4vw, 42px)',
                color: 'var(--color-deep-blue)',
                marginBottom: '16px',
                marginTop: 0,
                lineHeight: 1.2,
                textAlign: 'left'
              }}
            >
              <span style={{ display: 'inline-block' }}>С какими налоговыми</span> <br />
              <span style={{ display: 'inline-block' }}>ситуациями обращается бизнес</span>
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: 'var(--color-text-secondary)',
                fontWeight: 400,
                lineHeight: 1.6,
                margin: 0,
                textAlign: 'left',
                textWrap: 'balance'
              }}
            >
              Помогаем определить масштаб рисков, выстроить единую позицию компании и выбрать порядок действий на текущей стадии взаимодействия с ФНС.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '32px' }}>
            {taxSituations.map((sit, idx) => (
              <div
                key={idx}
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
                <div
                  style={{
                    position: 'absolute',
                    top: '-15px',
                    right: '-15px',
                    width: '90px',
                    height: '90px',
                    opacity: 0.04,
                    pointerEvents: 'none',
                    color: 'var(--color-deep-blue)'
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>

                <div>
                  {sit.tag && (
                    <div
                      style={{
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
                      }}
                    >
                      {sit.tag}
                    </div>
                  )}

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '18px',
                      fontWeight: 600,
                      color: 'var(--color-deep-blue)',
                      margin: '0 0 12px 0',
                      lineHeight: 1.35
                    }}
                  >
                    {sit.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '14px',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.6,
                      margin: 0
                    }}
                  >
                    {sit.desc}
                  </p>
                </div>

                <div style={{ marginTop: '20px' }}>
                  {sit.href && sit.href.startsWith('/') ? (
                    <Link
                      href={sit.href}
                      className="situation-btn"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: 'var(--color-primary)',
                        fontSize: '13.5px',
                        fontWeight: 600,
                        textDecoration: 'none',
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
                    >
                      <span>{sit.btnText}</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.25s ease, stroke 0.25s ease' }}>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </Link>
                  ) : (
                    <a
                      href="#form"
                      className="situation-btn"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: 'var(--color-primary)',
                        fontSize: '13.5px',
                        fontWeight: 600,
                        textDecoration: 'none',
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
                  )}
                </div>
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
                <span style={{ display: 'inline-block' }}>Опишите вашу налоговую ситуацию в форме. Изучим имеющиеся документы</span> <br />
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

      {/* ═══ БЛОК 3: НАПРАВЛЕНИЯ ПОМОЩИ (ДОЧЕРНИЕ УСЛУГИ) ═══ */}
      <section id="directions" className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
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
              ПРОФИЛЬНЫЕ УСЛУГИ КЛАСТЕРА
            </div>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'inline-block' }}>Направления налоговой</span> <br />
              <span style={{ display: 'inline-block' }}>защиты бизнеса</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Выберите услугу по текущей стадии проверки или основанию претензий. Мы подключимся на любом этапе взаимодействия с налоговой инспекцией.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '32px' }}>
            {subServices.map((sub, idx) => (
              <Link
                key={idx}
                href={sub.href}
                style={{ textDecoration: 'none', display: 'block', height: '100%' }}
              >
                <div
                  className="card service-card hover-lift"
                  style={{
                    height: '100%',
                    minHeight: '220px',
                    padding: '32px 28px',
                    background: 'var(--color-white)',
                    border: '1px solid var(--color-border)',
                    borderTop: '3px solid var(--color-gold)',
                    borderRadius: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)',
                    transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.5s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.35s ease',
                    position: 'relative',
                    cursor: 'pointer'
                  }}
                >
                  <div>
                    <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.35, fontFamily: 'var(--font-serif)', fontWeight: 600, minHeight: '48px' }}>
                      {sub.title}
                    </h3>
                    <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                      {sub.desc}
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
                      marginTop: 'auto',
                      paddingTop: '14px',
                      borderTop: '1px solid rgba(23, 50, 77, 0.06)',
                      transition: 'transform 0.3s'
                    }}
                  >
                    <span>Подробнее об услуге</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.3s' }}>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Карточка-баннер: «Не уверены, какая именно услуга вам подходит?» */}
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
              <h3 style={{ margin: '0 0 12px 0', fontSize: '24px', fontFamily: 'var(--font-serif)', color: '#FFFFFF', lineHeight: 1.3 }}>
                Не уверены, какая именно услуга вам подходит?
              </h3>
              <p style={{ margin: 0, fontSize: '15px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6 }}>
                <span style={{ display: 'inline-block' }}>Налоговая ситуация может быстро переходить от требования к проверке и доначислениям.</span> <br />
                <span style={{ display: 'inline-block' }}>Опишите документы — мы определим стадию и следующий шаг.</span>
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
                Обсудить налоговую ситуацию
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: КУРАТОР (SPECIALISTBLOCK) ═══ */}
      <SpecialistBlock
        title="Куратор направления — Аркадий Евгеньевич Бобкин"
        name="Аркадий Евгеньевич Бобкин"
        position={<>Директор, управляющий партнёр ЮК «Де-Юре»,<br />куратор направления «Налоговые проверки и споры»</>}
        imageUrl="/images/bobkin.jpg"
        imagePosition="center 15%"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Аркадий Евгеньевич курирует работу по сложным налоговым ситуациям бизнеса: оценивает материалы проверки и позицию ФНС, участвует в разработке правовой стратегии и координирует работу профильных налоговых юристов и аудиторов.
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
            «22 года следственной работы в подразделениях налоговой полиции и МВД позволяют нам видеть спор не только глазами налогового инспектора, но и понимать риск дальнейшего развития ситуации, включая возможную передачу материалов в СК РФ».
          </div>,
          <ul key="3" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>В юридической профессии с 1997 года. Эксперт по сложным многоэпизодным налоговым и экономическим делам</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>Судебное представительство и уголовно-процессуальную защиту осуществляют профильные специалисты и адвокаты коллегии</span>
            </li>
          </ul>,
          <a key="4" href="/specialisty/bobkin-arkadiy-evgenevich/" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
            Подробнее об опыте куратора →
          </a>
        ]}
        buttonText="Задать вопрос куратору"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 5: ЭТАПЫ РАБОТЫ ═══ */}
      <ProcessBlock
        title="Как проходит работа по налоговым проверкам и спорам"
        subtitle="Сначала определяем текущую стадию, документы и процессуальные сроки. Затем согласуем правовую позицию, формируем доказательства и сопровождаем защиту до согласованного результата."
        steps={processSteps}
      />

      {/* ═══ БЛОК 6: ЦЕНЫ ═══ */}
      <PricingBlock
        title="Стоимость юридической помощи по налогам"
        subtitle="Цена зависит от текущей стадии, количества спорных эпизодов и объема доначислений. Фиксируется в договоре."
        pageUrl="https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/"
        tiers={pricingTiers}
      />

      {/* ═══ БЛОК 7: КЕЙСЫ ═══ */}
      <CasesBlock
        title="Примеры из практики налоговых споров"
        subtitle="Результаты защиты интересов бизнеса в отношениях с налоговыми органами Липецка и Черноземья"
        cases={practiceCases}
      />

      {/* ═══ БЛОК 8: FAQ ═══ */}
      <FAQBlock items={faqs} />

      {/* ═══ БЛОК 9: СВЯЗАННЫЕ УСЛУГИ — КАНОНИЧЕСКИЙ ШАБЛОН ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--color-bg-light)' }}>
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
              СМЕЖНЫЕ НАПРАВЛЕНИЯ
            </div>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Связанные услуги</span>{' '}
              <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>для бизнеса</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Комплексная защита бизнеса: от разрешения арбитражных споров и корпоративных конфликтов до защиты по уголовным налоговым делам и разблокировки счетов.
            </p>
          </div>

          <div className="grid grid-4" style={{ gap: '24px' }}>
            <Link href="/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-nalogovym-prestupleniyam/" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
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
                    Защита по ст. 199 УК РФ
                  </h3>
                  <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    Уголовно-правовая защита руководителей и собственников при проверках СК РФ и возбуждении налоговых уголовных дел.
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
                    Арбитражные споры
                  </h3>
                  <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    Представление интересов компании во всех судебных инстанциях: взыскание долгов, защита от исков и споры с контрагентами.
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
                    Корпоративный юрист
                  </h3>
                  <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    Защита корпоративного контроля, сделки с долями ООО, разрешение конфликтов участников и структурирование активов.
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

            <Link href="/biznesu/razblokirovka-raschetnogo-scheta-po-115-fz/" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
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
                    Разблокировка счёта (115-ФЗ)
                  </h3>
                  <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    Оперативный ответ на запросы финмониторинга, реабилитация в МВК Банка России и восстановление ДБО.
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

      {/* ═══ БЛОК 10: ФИНАЛЬНАЯ ФОРМА — КАНОНИЧЕСКИЙ ШАБЛОН ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px', padding: '80px 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  КОНФИДЕНЦИАЛЬНАЯ КОНСУЛЬТАЦИЯ
                </span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Обсудите налоговую ситуацию</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>с Аркадием Бобкиным</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко укажите, какой документ получен от ФНС и на какой стадии находится ситуация. Обращение будет передано Аркадию Евгеньевичу Бобкину для первичного правового анализа и формирования состава команды.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация руководителя практики</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Телефон для связи: <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (4742) 20-15-25</a>
                </p>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '6px' }}>
                  Офис в Липецке: ул. Советская, д. 35, оф. 213 (приём по записи)
                </div>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Строгая конфиденциальность</strong>
                Не указывайте в форме коммерческую тайну и банковские реквизиты. Документы передаются только по согласованному защищенному каналу связи.
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Написать нам"
                subtitle="Оставьте имя и номер телефона. При желании кратко опишите ситуацию — это поможет юристу подготовиться к разговору."
                subtext="Если вы оставите заявку вечером или в выходной день, мы перезвоним в ближайший рабочий день."
                buttonText="Оставить заявку"
                commentPlaceholder="Кратко опишите ситуацию: полученные требования, камеральная или выездная проверка…"
                hiddenFields={[
                  { name: 'source_page', value: '/biznesu/nalogovyj-yurist-dlya-biznesa/' },
                  { name: 'service', value: 'Налоговый юрист для бизнеса' },
                  { name: 'direction', value: 'tax' }
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
