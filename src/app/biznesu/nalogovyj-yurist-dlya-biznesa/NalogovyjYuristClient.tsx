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
      btnText: 'Ответить на требование'
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
      btnText: 'Сопровождение ВНП'
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
      btnText: 'Возражения на акт'
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
      btnText: 'Оспорить решение'
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
      btnText: 'Защита от дробления'
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
      btnText: 'Снять уголовный риск'
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
      desc: 'Разъясняем принятое решение, снимаем обеспечительные меры со счетов и имущества, предотвращаем риск передачи дела в СК РФ.'
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
      a: 'Да. При подаче заявления в арбитражный суд заявляется ходатайство о принятии обеспечительных мер в виде приостановления действия оспариваемого решения ФНС (ст. 199 АПК РФ), что блокирует списание средств инкассовыми поручениями.'
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
            <span style={{ display: 'inline-block' }}>Налоговый юрист</span> <br />
            <span style={{ display: 'inline-block', color: 'var(--color-gold)' }}>для бизнеса в Липецке</span>
          </span>
        }
        subtitle="Помогаем компаниям и предпринимателям при требованиях и проверках ФНС, доначислениях, обжаловании решений и обвинениях в дроблении бизнеса."
        trustItems={[
          'Изучим материалы и определим текущую стадию налогового спора',
          'Проверим доводы ФНС, доказательства и обоснованность расчёта недоимки',
          'Сформируем позицию и сопроводим защиту в УФНС и арбитражном суде',
          'Координируем налоговую защиту со смежными уголовными рисками (ст. 199 УК РФ)'
        ]}
        primaryCtaText="Обсудить налоговую ситуацию"
        primaryCtaLink="#form"
        secondaryCtaText="Направления помощи"
        secondaryCtaLink="#directions"
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
              НАЛОГОВЫЕ СПОРЫ И ПРОВЕРКИ
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
              С какими налоговыми ситуациями обращается бизнес
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', maxWidth: '750px', margin: '0 auto' }}>
              Помогаем определить масштаб рисков, выстроить единую позицию компании и выбрать порядок действий на текущей стадии взаимодействия с ФНС.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px'
            }}
          >
            {taxSituations.map((sit, idx) => (
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

      {/* ═══ БЛОК 3: НАПРАВЛЕНИЯ ПОМОЩИ (ДОЧЕРНИЕ УСЛУГИ) ═══ */}
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
              ПРОФИЛЬНЫЕ УСЛУГИ КЛАСТЕРА
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
              Направления налоговой защиты бизнеса
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', maxWidth: '750px', margin: '0 auto' }}>
              Выберите услугу по текущей стадии проверки или основанию претензий. Мы подключимся на любом этапе взаимодействия с налоговой инспекцией.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
              marginBottom: '32px'
            }}
          >
            {subServices.map((sub, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--color-bg-light)',
                  borderRadius: '12px',
                  padding: '32px',
                  border: '1px solid rgba(0,0,0,0.06)',
                  borderLeft: '4px solid var(--color-gold)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: '20px',
                      fontWeight: 700,
                      color: 'var(--color-text-main)',
                      marginBottom: '12px',
                      lineHeight: 1.3
                    }}
                  >
                    {sub.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '14.5px',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '24px'
                    }}
                  >
                    {sub.desc}
                  </p>
                </div>
                <Link
                  href={sub.href}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '14px',
                    fontWeight: 700,
                    color: 'var(--color-deep-blue)',
                    textDecoration: 'none'
                  }}
                >
                  Подробнее об услуге →
                </Link>
              </div>
            ))}
          </div>

          <div
            style={{
              background: 'var(--color-bg-light)',
              borderRadius: '8px',
              padding: '24px',
              textAlign: 'center',
              border: '1px dashed rgba(0,0,0,0.15)'
            }}
          >
            <div style={{ fontWeight: 700, fontSize: '16px', color: 'var(--color-text-main)', marginBottom: '4px' }}>
              Не уверены, какая именно услуга вам подходит?
            </div>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', maxWidth: '700px', margin: '0 auto 16px auto' }}>
              Налоговая ситуация может быстро переходить от требования к проверке и доначислениям. Опишите документы — мы определим стадию и следующий шаг.
            </p>
            <a
              href="#form"
              style={{
                background: 'var(--color-deep-blue)',
                color: '#ffffff',
                padding: '10px 20px',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-block'
              }}
            >
              Обсудить налоговую ситуацию
            </a>
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
        steps={processSteps}
      />

      {/* ═══ БЛОК 6: ЦЕНЫ ═══ */}
      <PricingBlock
        title="Стоимость юридической помощи по налогам"
        subtitle="Цена зависит от текущей стадии, количества спорных эпизодов и объема доначислений. Фиксируется в договоре."
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

      {/* ═══ БЛОК 9: СВЯЗАННЫЕ УСЛУГИ ═══ */}
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
            Связанные услуги для бизнеса
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '16px'
            }}
          >
            <Link
              href="/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-nalogovym-prestupleniyam/"
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
              Защита по ст. 199 УК РФ →
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
              Арбитражные споры →
            </Link>
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
              Корпоративный юрист →
            </Link>
            <Link
              href="/biznesu/razblokirovka-raschetnogo-scheta-po-115-fz/"
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
              Разблокировка счёта (115-ФЗ) →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 10: ФОРМА И КОНТАКТЫ ═══ */}
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
                КОНФИДЕНЦИАЛЬНАЯ КОНСУЛЬТАЦИЯ
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
                Обсудите налоговую ситуацию с Аркадием Евгеньевичем Бобкиным
              </h2>
              <p
                style={{
                  fontSize: '15px',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '24px'
                }}
              >
                Кратко укажите, какой документ получен от ФНС и на какой стадии находится ситуация. Обращение будет передано Аркадию Евгеньевичу Бобкину для первичного правового анализа и формирования состава команды.
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
                  Строгая конфиденциальность
                </div>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
                  Не указывайте в форме коммерческую тайну и банковские реквизиты. Документы передаются только по согласованному защищенному каналу связи.
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
