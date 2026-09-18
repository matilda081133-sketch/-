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

export default function ZashchitaPoNalogovymPrestupleniyamClient() {
  const taxSituations = [
    {
      tag: 'Статья 199 УК РФ',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Уклонение от уплаты</span> <br />
          <span style={{ display: 'inline-block' }}>налогов организацией</span>
        </span>
      ),
      desc: 'Претензии следствия по непредставлению деклараций или включению заведомо ложных сведений в отчетность (крупный и особо крупный размер недоимки).',
      btnText: 'Защита по ст. 199'
    },
    {
      tag: 'Статья 199.1 УК РФ',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Неисполнение обязанностей</span> <br />
          <span style={{ display: 'inline-block' }}>налогового агента</span>
        </span>
      ),
      desc: 'Обвинения в неудержании или неперечислении НДФЛ и иных сборов в личных интересах руководства или для операционных нужд компании.',
      btnText: 'Защита по ст. 199.1'
    },
    {
      tag: 'Статья 199.2 УК РФ',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Сокрытие денежных средств</span> <br />
          <span style={{ display: 'inline-block' }}>или имущества от взыскания</span>
        </span>
      ),
      desc: 'Расчёты через счета контрагентов или третьих лиц в обход заблокированных ФНС расчетных счетов при наличии налоговой задолженности.',
      btnText: 'Защита по ст. 199.2'
    },
    {
      tag: 'Доследственная проверка',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Материалы ВНП переданы</span> <br />
          <span style={{ display: 'inline-block' }}>в Следственный комитет</span>
        </span>
      ),
      desc: 'Налоговая инспекция направила материалы по п. 3 ст. 32 НК РФ. Подключаемся до возбуждения уголовного дела на стадии проверки по ст. 144–145 УПК РФ.',
      btnText: 'Защита в СК РФ'
    },
    {
      tag: 'Генеральный директор',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Защита руководителя</span> <br />
          <span style={{ display: 'inline-block' }}>и учредителя компании</span>
        </span>
      ),
      desc: 'Разграничение полномочий, периодов управления, фактической осведомленности и доказательств отсутствия прямого корыстного умысла.',
      btnText: 'Защитить директора'
    },
    {
      tag: 'Главный бухгалтер',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Защита главного бухгалтера</span> <br />
          <span style={{ display: 'inline-block' }}>и сотрудников финотдела</span>
        </span>
      ),
      desc: 'Доказывание отсутствия сговора с руководством, выполнения должностных обязанностей и отсутствия финансовой выгоды от спорных схем.',
      btnText: 'Защитить бухгалтера'
    },
    {
      tag: 'Дробление бизнеса',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Уголовные обвинения</span> <br />
          <span style={{ display: 'inline-block' }}>в дроблении бизнеса</span>
        </span>
      ),
      desc: 'Претензии ФНС к группе взаимосвязанных компаний и ИП переросли в уголовное преследование по ст. 199 УК РФ. Доказываем реальную деловую цель.',
      btnText: 'Защита от дробления'
    },
    {
      tag: 'Освобождение от ответственности',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Прекращение дела</span> <br />
          <span style={{ display: 'inline-block' }}>по ст. 76.1 УК РФ / 28.1 УПК РФ</span>
        </span>
      ),
      desc: 'Правовой аудит условий закрытия дела при погашении недоимки, пеней и штрафов без судимости при первом привлечении к ответственности.',
      btnText: 'Оценить условия'
    }
  ];

  const urgentRisks = [
    {
      title: 'Обязательная передача материалов из ФНС в Следственный комитет',
      desc: 'По п. 3 ст. 32 НК РФ, если недоимка по вступившему в силу решению проверки не погашена в течение 75 дней, инспекция обязана направить материалы в СК РФ для возбуждения уголовного дела.'
    },
    {
      title: 'Личная уголовная ответственность физических лиц',
      desc: 'Юридическое лицо нельзя привлечь к уголовной ответственности. Уголовное дело всегда возбуждается персонально против генерального директора, учредителя или главного бухгалтера.'
    },
    {
      title: 'Арест личного имущества и счетов компании',
      desc: 'Для обеспечения гражданского иска о возмещении налогового ущерба следователь незамедлительно ходатайствует об аресте недвижимости, транспорта и банковских счетов руководства.'
    }
  ];

  const defenseContours = [
    {
      num: '01',
      title: 'Синхронизация с арбитражным спором против ФНС',
      desc: 'Координируем позицию защиты с обжалованием решения налогового органа в арбитражном суде. Признание решения инспекции незаконным лишает обвинение базового доказательства.'
    },
    {
      num: '02',
      title: 'Судебно-бухгалтерская и финансовая экспертиза',
      desc: 'Проводим контррасчёт недоимки с привлечением аудиторов: проверяем правомерность снятия вычетов по НДС, применение налоговой реконструкции и наличие фактических переплат.'
    },
    {
      num: '03',
      title: 'Опровержение прямого умысла на неуплату налогов',
      desc: 'Доказываем осмотрительность при выборе контрагентов, реальность хозяйственных операций и отсутствие корыстного умысла на причинение ущерба государству.'
    },
    {
      num: '04',
      title: 'Очная защита на всех следственных действиях',
      desc: 'Участие опытного адвоката при даче объяснений в ОЭБиПК, на допросах в Следственном комитете, очных ставках, обысках и выемках финансовой документации.'
    },
    {
      num: '05',
      title: 'Разделение защиты и исключение конфликта интересов',
      desc: 'Разделяем правовую позицию компании, генерального директора и главного бухгалтера. При несовпадении процессуальных интересов подключаем независимых адвокатов команды.'
    },
    {
      num: '06',
      title: 'Прекращение дела по ст. 76.1 УК РФ и ст. 28.1 УПК РФ',
      desc: 'Сопровождаем процедуру прекращения уголовного преследования по нереабилитирующим основаниям в случае принятия доверителем решения о добровольной компенсации недоимки.'
    }
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Анализ материалов проверки ФНС и процессуальных документов',
      desc: 'Изучаем решение выездной или камеральной проверки, требования, постановления следователя и протоколы допросов свидетелей.'
    },
    {
      num: '02',
      title: 'Разделение статусов и формирование команды защиты',
      desc: 'Определяем процессуальное положение каждого должностного лица (свидетель, подозреваемый, обвиняемый) и исключаем конфликт интересов.'
    },
    {
      num: '03',
      title: 'Формирование доказательственной базы и контррасчётов',
      desc: 'Собираем доказательства добросовестности, организуем независимые налоговые экспертизы и готовим процессуальные ходатайства.'
    },
    {
      num: '04',
      title: 'Процессуальная защита на предварительном следствии в СК РФ',
      desc: 'Адвокаты участвуют во всех следственных действиях, обжалуют незаконные постановления следователя по ст. 124–125 УПК РФ и аресты имущества.'
    },
    {
      num: '05',
      title: 'Защита в суде или прекращение дела',
      desc: 'Отстаиваем позицию невиновности в суде первой инстанции, добиваемся возвращения дела прокурору по ст. 237 УПК РФ или прекращения преследования.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Анализ материалов и оценка рисков',
      subtitle: 'Первичный аудит решений ФНС и СК РФ',
      popular: false,
      price: 'от 25 000 ₽',
      features: [
        { name: 'Изучение решения налоговой инспекции и требований', value: 'Включено' },
        { name: 'Оценка вероятности возбуждения уголовного дела по ст. 199', value: 'Включено' },
        { name: 'Анализ уязвимостей в расчете недоимки следствия', value: 'Включено' },
        { name: 'План первоочередных процессуальных действий доверителя', value: 'Включено' }
      ],
      buttonText: 'Заказать анализ',
      buttonHref: '#form'
    },
    {
      title: 'Защита на стадии следствия в СК РФ',
      subtitle: 'Комплексное ведение дела адвокатом',
      popular: true,
      badgeText: 'Ключевой этап',
      price: 'от 90 000 ₽',
      features: [
        { name: 'Очное участие адвоката во всех допросах и очных ставках', value: 'Включено' },
        { name: 'Назначение независимой судебно-налоговой экспертизы', value: 'Включено' },
        { name: 'Защита от избрания жестких мер пресечения и ареста счетов', value: 'Включено' },
        { name: 'Жалобы по ст. 124–125 УПК РФ на нарушения следствия', value: 'Включено' }
      ],
      buttonText: 'Привлечь защиту',
      buttonHref: '#form'
    },
    {
      title: 'Судебное представительство',
      subtitle: 'Защита в суде по существу обвинения',
      popular: false,
      price: 'от 120 000 ₽',
      features: [
        { name: 'Представительство в судебных заседаниях суда первой инстанции', value: 'Включено' },
        { name: 'Допрос налоговых инспекторов и экспертов обвинения', value: 'Включено' },
        { name: 'Ходатайства о возврате дела прокурору по ст. 237 УПК РФ', value: 'Включено' },
        { name: 'Апелляционное обжалование незаконного приговора', value: 'Включено' }
      ],
      buttonText: 'Защита в суде',
      buttonHref: '#form'
    }
  ];

  const practiceCases: CaseData[] = [
    {
      category: 'Статья 199 ч. 2 УК РФ',
      title: 'Прекращение дела по обвинению генерального директора завода в неуплате НДС на 46 млн ₽',
      problem: 'Следственный комитет возбудил уголовное дело после выездной налоговой проверки: инспекция сочла трех субподрядчиков «техническими компаниями» и сняла вычеты по НДС.',
      action: 'Защита доказала реальность выполнения строительно-монтажных работ силами привлеченных организаций. Назначили судебную почерковедческую и финансовую экспертизы, истребовали журнал въезда спецтехники на закрытый объект.',
      result: 'Уголовное преследование в отношении генерального директора прекращено по п. 2 ч. 1 ст. 24 УПК РФ (отсутствие состава преступления).'
    },
    {
      category: 'Доследственная проверка СК РФ',
      title: 'Отказ в возбуждении уголовного дела по материалам налоговой проверки на 32 млн ₽',
      problem: 'Материалы выездной налоговой проверки производственного холдинга переданы в СК РФ с утверждением о схеме умышленного дробления бизнеса через аффилированные ИП.',
      action: 'До возбуждения уголовного дела предоставили следователю подробные возражения с доказательствами операционной самостоятельности каждого субъекта: раздельные склады, собственный штат, независимые поставщики.',
      result: 'Следователь вынес постановление об отказе в возбуждении уголовного дела. Решение ФНС успешно оспорено в арбитражном суде.'
    },
    {
      category: 'Защита бухгалтера',
      title: 'Исключение главного бухгалтера из числа обвиняемых по ст. 199.2 УК РФ',
      problem: 'Следователь предъявил обвинение директору и главному бухгалтеру в сокрытии 14 млн ₽ от налогового взыскания через распорядительные письма третьим лицам.',
      action: 'Доказали, что бухгалтер действовал строго в рамках служебных инструкций и трудового договора, не обладал правом распоряжения расчетными счетами и не имел корыстного умысла.',
      result: 'Следствие сняло обвинения с главного бухгалтера, переквалифицировав статус доверителя в свидетеля по делу.'
    }
  ];

  const faqs = [
    {
      q: 'Означает ли доначисление налогов инспекцией автоматическое возбуждение уголовного дела?',
      a: 'Нет. Налоговая недоимка и решение инспекции сами по себе не доказывают наличие уголовного состава. Для возбуждения дела по ст. 199 УК РФ следствие обязано доказать прямой умысел руководителя или главбуха на уклонение от налогообложения и превышение крупного размера недоимки (от 18,75 млн ₽ за 3 года).'
    },
    {
      q: 'В какой момент налоговая инспекция передает материалы в Следственный комитет?',
      a: 'Согласно п. 3 ст. 32 Налогового кодекса РФ, если налогоплательщик не уплатил суммы недоимки, пеней и штрафов в течение 75 дней со дня вступления в силу решения о привлечении к налоговой ответственности, налоговый орган обязан в течение 10 дней направить материалы в следственный орган.'
    },
    {
      q: 'Можно ли одному адвокату одновременно защищать директора и главного бухгалтера?',
      a: 'Только в том случае, если их показания и интересы не противоречат друг другу. Однако в налоговых делах следствие часто пытается склонить бухгалтера к показаниям против руководителя. При малейшем несовпадении позиций закон запрещает одному адвокату представлять обоих участников.'
    },
    {
      q: 'Прекращается ли уголовное дело, если полностью погасить недоимку, пени и штраф?',
      a: 'Да, в соответствии со ст. 76.1 УК РФ и ст. 28.1 УПК РФ лицо, впервые совершившее преступление по ст. 199–199.1 УК РФ, освобождается от уголовной ответственности, если ущерб бюджету возмещен в полном объеме до назначения судебного заседания.'
    },
    {
      q: 'Как арбитражный спор с ФНС влияет на расследование уголовного дела?',
      a: 'Хотя нормы об абсолютной преюдиции скорректированы, вступившее в силу решение арбитражного суда в пользу налогоплательщика признает решение ФНС незаконным и исключает факт ущерба бюджету, что разрушает позицию обвинения.'
    },
    {
      q: 'Что делать, если генерального директора или главного бухгалтера вызывают на опрос в ОЭБиПК?',
      a: 'Не являйтесь на опрос в одиночку. Все первичные показания, данные на этапе доследственной проверки без квалифицированной защиты, следователь в дальнейшем закрепит в протоколах допросов. Перед визитом к силовикам необходимо выработать единую правовую позицию с адвокатом.'
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
            <span style={{ color: 'var(--color-text-main)' }}>Защита по налоговым преступлениям</span>
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
            <span style={{ display: 'inline-block' }}>Защита по налоговым</span> <br />
            <span style={{ display: 'inline-block', color: 'var(--color-gold)' }}>преступлениям</span>
          </span>
        }
        subtitle="Разберём материалы налоговой и уголовной проверки, оценим расчёты, роль и процессуальный статус каждого участника, сформируем позицию и организуем защиту адвоката."
        trustItems={[
          'Разделяем налоговый спор с ФНС и уголовно-правовую часть ситуации',
          'Анализируем обоснованность расчета недоимки и привлекаем аудиторов',
          'Разделяем интересы компании, собственника, руководителя и бухгалтера',
          'Очная защита адвоката на допросах в СК РФ и процессуальных действиях'
        ]}
        primaryCtaText="Обсудить ситуацию"
        primaryCtaLink="#form"
        secondaryCtaText="Срочные риски"
        secondaryCtaLink="#urgent"
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
              КАТЕГОРИИ РИСКОВ И СОСТАВОВ
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
              С какими ситуациями по налогам к нам обращаются
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', maxWidth: '750px', margin: '0 auto' }}>
              Конкретная квалификация зависит от редакции закона, суммы недоимки, роли должностного лица и наличия доказательств прямого умысла.
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

      {/* ═══ БЛОК 3: СРОЧНОСТЬ И РИСКИ ═══ */}
      <section
        id="urgent"
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
              КРИТИЧЕСКИЕ ТОЧКИ В НАЛОГОВОМ ПРОЦЕССЕ
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
              Когда налоговый контроль переходит в уголовное преследование
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)', maxWidth: '800px', margin: '0 auto' }}>
              Промедление между вынесением решения ФНС и началом работы адвоката часто приводит к необратимому возбуждению уголовного дела.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
              marginBottom: '40px'
            }}
          >
            {urgentRisks.map((item, idx) => (
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'rgba(218, 165, 32, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-gold)',
                      fontWeight: 700,
                      fontSize: '14px'
                    }}
                  >
                    !
                  </div>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                    {item.title}
                  </h3>
                </div>
                <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5, margin: 0 }}>
                  {item.desc}
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
                Материалы проверки переданы в Следственный комитет или вызвали на опрос?
              </div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)' }}>
                Свяжитесь с нами до дачи первых показаний и подписания протоколов.
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
                Срочная консультация
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: КОНТУРЫ ЗАЩИТЫ ═══ */}
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
              КОМПЛЕКСНАЯ РАБОТА
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
              Что входит в юридическую помощь команды
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', maxWidth: '750px', margin: '0 auto' }}>
              Защита по налоговым составам требует одновременной работы уголовного адвоката и налогового юриста-аудитора.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px'
            }}
          >
            {defenseContours.map((contour, idx) => (
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
                  {contour.num}
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
                    {contour.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '14px',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.5,
                      margin: 0
                    }}
                  >
                    {contour.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: ЭТАПЫ РАБОТЫ ═══ */}
      <ProcessBlock
        title="Как строится защита по налоговому уголовному делу"
        steps={processSteps}
      />

      {/* ═══ БЛОК 6: КУРАТОР (SPECIALISTBLOCK) ═══ */}
      <SpecialistBlock
        title="Куратор направления"
        name="Аркадий Евгеньевич Бобкин"
        position={<>Директор, управляющий партнёр ЮК «Де-Юре»,<br />куратор направления «Уголовно-правовая защита бизнеса»</>}
        imageUrl="/images/bobkin.jpg"
        imagePosition="center 15%"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Аркадий Евгеньевич координирует выработку стратегии защиты по налоговым преступлениям, привлечение экспертов-аудиторов и работу адвокатов. Проработав 22 года в следственных подразделениях налоговой полиции и МВД, в том числе следователем по особо важным делам и начальником Следственной части, он знает специфику передачи материалов из ФНС и слабые места налоговых обвинений.
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
            «По налоговым составам ключевая битва происходит задолго до суда — на стадии проверки обоснованности расчёта недоимки и доказывания отсутствия умысла. Мы знаем эту систему изнутри».
          </div>,
          <ul key="3" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>22 года в следственных подразделениях налоговой полиции и Следственного комитета МВД</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>Процессуальную защиту доверителей осуществляют практикующие адвокаты партнерской коллегии</span>
            </li>
          </ul>,
          <a key="4" href="/specialisty/bobkin-arkadiy-evgenevich/" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
            Подробнее об опыте куратора →
          </a>
        ]}
        buttonText="Связаться с куратором"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 7: ЦЕНЫ ═══ */}
      <PricingBlock
        title="Стоимость защиты по налоговым преступлениям"
        subtitle="Цена фиксируется в договоре и зависит от процессуальной стадии, объема материалов и сложности финансовых схем"
        tiers={pricingTiers}
      />

      {/* ═══ БЛОК 8: КЕЙСЫ ═══ */}
      <CasesBlock
        title="Практика по налоговым проверкам и уголовным делам"
        subtitle="Примеры защиты директоров, учредителей и главных бухгалтеров в Липецке и Черноземье"
        cases={practiceCases}
      />

      {/* ═══ БЛОК 9: FAQ ═══ */}
      <FAQBlock items={faqs} />

      {/* ═══ БЛОК 10: СВЯЗАННЫЕ УСЛУГИ КЛАСТЕРА ═══ */}
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
            Связанные услуги уголовной и налоговой защиты
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '16px'
            }}
          >
            <Link
              href="/biznesu/ugolovno-pravovaya-zashchita-biznesa/"
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
              ← Все услуги уголовно-правовой защиты
            </Link>
            <Link
              href="/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-pri-proverke-obep/"
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
              Защита при проверке ОБЭП →
            </Link>
            <Link
              href="/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-ekonomicheskim-prestupleniyam/"
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
              Защита по экономическим делам →
            </Link>
            <Link
              href="/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-pri-obyske-v-kompanii/"
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
              Защита при обыске в компании →
            </Link>
            <Link
              href="/biznesu/ugolovno-pravovaya-zashchita-biznesa/ugolovno-pravovoj-audit-biznesa/"
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
              Уголовно-правовой аудит бизнеса →
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
                КОНФИДЕНЦИАЛЬНЫЙ АНАЛИЗ
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
                Обсудите налоговую ситуацию с адвокатом
              </h2>
              <p
                style={{
                  fontSize: '15px',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '24px'
                }}
              >
                Опишите стадию взаимодействия с налоговой инспекцией или правоохранительными органами (акт ВНП, требование, вызов на допрос, возбуждение дела). Мы свяжемся с вами в течение 15 минут в рабочее время для согласования конфиденциальной встречи.
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
                  Адвокатская тайна гарантирована
                </div>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
                  Любые переданные сведения и документы охраняются Федеральным законом № 63-ФЗ «Об адвокатской деятельности и адвокатуре в РФ».
                </div>
              </div>
              <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                Офис в Липецке: <strong>ул. Советская, д. 35, оф. 213</strong>
                <br />
                Телефон для экстренной связи: <strong>+7 (4742) 20-15-25</strong>
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
