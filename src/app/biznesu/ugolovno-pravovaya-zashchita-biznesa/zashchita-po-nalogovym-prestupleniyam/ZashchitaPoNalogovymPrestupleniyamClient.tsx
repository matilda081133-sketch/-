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
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              Защита по налоговым
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>
              преступлениям в Липецке
            </span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '760px', textWrap: 'balance' }}>
            Разберём материалы налоговой и уголовной проверки, оценим расчёты, роль и процессуальный статус каждого участника, сформируем позицию и организуем защиту адвоката.
          </span>
        }
        primaryCtaText="Обсудить налоговое дело"
        primaryCtaLink="#form"
        primaryCtaSubtext={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Конфиденциальный звонок куратору направления:
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (910) 350-31-11</a>
            </span>
          </span>
        }
        secondaryCtaText="Срочные риски"
        secondaryCtaLink="#urgent"
        imageUrl="/images/bobkin.jpg"
        imageName="Аркадий Евгеньевич Бобкин"
        imageSubtitle="Директор, управляющий партнёр ЮК «Де-Юре», куратор направления"
        imageObjectPosition="center 15%"
        trustItems={[
          {
            text: (
              <span>
                <strong>Разделяем налоговый спор</strong> с ФНС и уголовно-правовую часть ситуации
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Анализируем обоснованность</strong> расчета недоимки и привлекаем аудиторов
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Разделяем интересы</strong> компании, собственника, руководителя и бухгалтера
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Очная защита адвоката</strong> на допросах в СК РФ и процессуальных действиях
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
              КАТЕГОРИИ РИСКОВ И СОСТАВОВ
            </div>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'inline-block' }}>С какими ситуациями по налогам</span> <br />
              <span style={{ display: 'inline-block' }}>к нам обращаются</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Конкретная квалификация зависит от редакции закона, суммы недоимки, роли должностного лица и наличия доказательств прямого умысла.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            {taxSituations.map((sit, idx) => (
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

            {/* Карточка 9: «Не нашли свою ситуацию?» */}
            <div
              className="card service-card"
              style={{
                height: '100%',
                minHeight: '200px',
                padding: '30px',
                background: 'var(--color-deep-blue)',
                border: '1px solid transparent',
                borderTop: '3px solid var(--color-gold)',
                borderRadius: '0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                boxShadow: '0 8px 16px rgba(16, 39, 59, 0.28)'
              }}
            >
              <div>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: '#FFFFFF', lineHeight: 1.35, fontFamily: 'var(--font-serif)', fontWeight: 600 }}>
                  Не нашли свою ситуацию?
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.55 }}>
                  Опишите обстоятельства вашей налоговой проверки или суть претензий. Адвокат изучит документы и сформирует безопасный порядок действий.
                </p>
              </div>
              <div style={{ marginTop: 'auto', paddingTop: '14px', borderTop: '1px solid rgba(255, 255, 255, 0.15)' }}>
                <a
                  href="#form"
                  className="btn white-btn-custom"
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: '#10273B',
                    border: '1px solid #FFFFFF',
                    padding: '10px 18px',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    display: 'inline-block',
                    width: '100%',
                    textAlign: 'center',
                    textDecoration: 'none'
                  }}
                >
                  Получить консультацию
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: КОГДА НЕЛЬЗЯ ЗАТЯГИВАТЬ (#URGENT) ═══ */}
      <section style={{ background: 'var(--color-deep-blue)', padding: '64px 0 56px', position: 'relative', overflow: 'hidden' }} id="urgent">
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '36px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontFamily: 'var(--font-serif)', color: '#FFFFFF', marginBottom: '12px', marginTop: 0, lineHeight: 1.25 }}>
              <span style={{ display: 'inline-block' }}>Когда нельзя затягивать</span> <br />
              <span style={{ display: 'inline-block' }}>с обращением к юристу</span>
            </h2>
            <div style={{ width: '60px', height: '2px', background: 'var(--color-gold)', margin: '16px 0' }} />
            <p style={{ fontSize: '16px', color: '#E8ECF1', lineHeight: 1.65, margin: 0 }}>
              <span style={{ display: 'inline-block' }}>В уголовно-правовой сфере первые действия и объяснения определяют</span> <br />
              <span style={{ display: 'inline-block' }}>дальнейший ход дела. Задержка может привести к необратимой фиксации позиции обвинения.</span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '20px', marginBottom: '36px' }}>
            {urgentRisks.map((risk, idx) => (
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
                      {risk.title}
                    </div>
                  </div>
                  <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '14px', lineHeight: 1.55, margin: 0 }}>
                    {risk.desc}
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
              <strong style={{ color: '#FFFFFF' }}>Материалы проверки переданы в Следственный комитет или вызвали на опрос?</strong> Свяжитесь с нами до дачи первых показаний и подписания протоколов.
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
            <a href="tel:+79103503111" style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.02em' }} data-analytics="phone_click">
              +7 (910) 350-31-11
            </a>
            <a href="tel:+79103503111" className="btn-urgent-call" style={{ padding: '14px 28px', fontSize: '15px' }} data-analytics="phone_click">
              Позвонить юристу
            </a>
            <a href="#form" className="btn btn-urgent-outline" style={{ padding: '14px 28px', fontSize: '15px' }}>
              Срочная защита
            </a>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginLeft: '4px' }}>
              Срочный выезд адвоката по налоговым преступлениям
            </span>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: ЧТО ВХОДИТ В ЮРИДИЧЕСКУЮ ПОМОЩЬ (КАНОНИЧЕСКИЙ ШАБЛОН #CHECK) ═══ */}
      <section className="section bg-white" id="check" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.25 }}>
              <span style={{ display: 'inline-block' }}>Что входит в юридическую помощь</span> <br />
              <span style={{ display: 'inline-block' }}>по налоговым преступлениям</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              Защита по налоговым составам требует одновременной работы уголовного адвоката и налогового юриста-аудитора.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', position: 'relative', marginBottom: '40px' }}>
            {defenseContours.map((item, idx) => (
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
                Если ситуация выходит за рамки налоговых проверок и уголовных дел, привлекаем экспертов смежных практик компании «Де-Юре» — по арбитражу, корпоративным спорам и банкротству.
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

      {/* ═══ БЛОК 11: ФИНАЛЬНАЯ ФОРМА (СВЯЗАТЬСЯ С НАМИ) — КАНОНИЧЕСКИЙ ШАБЛОН ═══ */}
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
                Опишите стадию взаимодействия с налоговой инспекцией или правоохранительными органами (акт ВНП, требование, вызов на допрос, возбуждение дела). Мы свяжемся с вами для согласования конфиденциальной встречи.
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
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Адвокатская тайна и конфиденциальность:</strong>
                Все переданные сведения и документы охраняются Федеральным законом № 63-ФЗ «Об адвокатской деятельности и адвокатуре в РФ». Не указывайте в форме паспортные данные и коммерческую тайну — защищённый способ передачи согласуем после контакта.
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Написать нам"
                subtitle={
                  <>
                    <span style={{ display: 'inline-block' }}>Оставьте контакты и суть вопроса. Адвокат свяжется с вами</span> <br />
                    <span style={{ display: 'inline-block' }}>в течение 15 минут в рабочее время.</span>
                  </>
                }
                subtext={
                  <>
                    <span style={{ display: 'inline-block' }}>Если вы оставите заявку вечером или в&nbsp;выходной день,</span> <br />
                    <span style={{ display: 'inline-block' }}>мы перезвоним в&nbsp;ближайший рабочий день.</span>
                  </>
                }
                buttonText="Обсудить налоговую ситуацию с адвокатом"
                commentPlaceholder="Кратко укажите суть ситуации: проверка ФНС, передача материалов в СК, ст. 199 УК РФ…"
                hiddenFields={[
                  { name: 'source_page', value: '/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-nalogovym-prestupleniyam/' },
                  { name: 'page_type', value: 'service' },
                  { name: 'direction', value: 'criminal-defense' },
                  { name: 'service', value: 'zashchita-po-nalogovym-prestupleniyam' }
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
