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

export default function ZashchitaPo1815KoapClient() {
  const caseStages = [
    {
      tag: 'Вызов на протокол',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Вызывают для составления</span> <br />
          <span style={{ display: 'inline-block' }}>протокола в ОВМ МВД</span>
        </span>
      ),
      desc: 'Запрашиваем и изучаем материалы проверки, готовим письменные объяснения и ходатайства, обеспечиваем очное участие адвоката при составлении протокола.',
      btnText: 'Защита при протоколе'
    },
    {
      tag: 'Протокол составлен',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Протокол уже составлен</span> <br />
          <span style={{ display: 'inline-block' }}>и вручен представителю</span>
        </span>
      ),
      desc: 'Анализируем формулировки, правильность квалификации, полноту разъяснения процессуальных прав и фиксируем существенные нарушения процедуры.',
      btnText: 'Оценить протокол'
    },
    {
      tag: 'Рассмотрение дела',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Назначено рассмотрение</span> <br />
          <span style={{ display: 'inline-block' }}>в миграционном органе или суде</span>
        </span>
      ),
      desc: 'Формируем письменную позицию защиты, заявляем ходатайства об исключении недопустимых доказательств и добиваемся прекращения производства.',
      btnText: 'Участие в рассмотрении'
    },
    {
      tag: 'Получено постановление',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Вынесено постановление</span> <br />
          <span style={{ display: 'inline-block' }}>о назначении крупного штрафа</span>
        </span>
      ),
      desc: 'Фиксируем 10-дневный процессуальный срок обжалования, готовим мотивированную жалобу и направляем в районный суд Липецка или области.',
      btnText: 'Обжаловать штраф'
    },
    {
      tag: 'Жалоба рассмотрена',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Первая жалоба</span> <br />
          <span style={{ display: 'inline-block' }}>оставлена без удовлетворения</span>
        </span>
      ),
      desc: 'Изучаем решение по жалобе, протоколы заседаний и подаём жалобу в вышестоящий Липецкий областной суд либо кассационную инстанцию.',
      btnText: 'Подать жалобу выше'
    },
    {
      tag: 'Пропущен срок',
      title: (
        <span>
          <span style={{ display: 'inline-block' }}>Пропущен 10-дневный</span> <br />
          <span style={{ display: 'inline-block' }}>срок на подачу жалобы</span>
        </span>
      ),
      desc: 'Собираем доказательства уважительности причин пропуска срока (несвоевременное вручение копии, командировка) и заявляем ходатайство о восстановлении.',
      btnText: 'Восстановить срок'
    }
  ];

  const articleParts = [
    {
      part: 'Часть 1 ст. 18.15 КоАП РФ',
      title: 'Незаконное привлечение к трудовой деятельности',
      desc: 'Допуск иностранца к работе без патента, по недействительному документу, в другом субъекте РФ либо по специальности, не указанной в патенте.',
      sanction: 'Штраф для юрлиц: от 250 000 до 800 000 ₽ либо приостановление деятельности до 90 суток (на должностных лиц — от 25 000 до 50 000 ₽).'
    },
    {
      part: 'Часть 2 ст. 18.15 КоАП РФ',
      title: 'Привлечение без разрешения на привлечение рабочей силы',
      desc: 'Привлечение иностранных граждан работодателем, не имеющим специального разрешения на привлечение и использование иностранной рабочей силы (для визовых стран).',
      sanction: 'Штраф для юрлиц: от 250 000 до 800 000 ₽ либо приостановление деятельности до 90 суток.'
    },
    {
      part: 'Часть 3 ст. 18.15 КоАП РФ',
      title: 'Неуведомление или нарушение порядка уведомления МВД',
      desc: 'Неподача, пропуск 3-дневного срока либо подача уведомления о заключении или расторжении договора не по установленной форме.',
      sanction: 'Штраф для юрлиц: от 400 000 до 800 000 ₽ либо приостановление деятельности до 90 суток за каждого работника.'
    },
    {
      part: 'Часть 5 ст. 18.15 КоАП РФ',
      title: 'Нарушение обязанностей в отношении ВКС',
      desc: 'Неуведомление или нарушение установленного порядка уведомления МВД об исполнении обязательств по выплате зарплаты высококвалифицированным специалистам.',
      sanction: 'Штраф для юрлиц: от 400 000 до 1 000 000 ₽.'
    }
  ];

  const legalGoals = [
    {
      title: 'Прекращение производства по делу',
      desc: 'Доказываем отсутствие события или состава правонарушения (например, отсутствие фактического допуска, работа у независимого подрядчика), недоказанность вины или истечение срока давности (ст. 4.5 КоАП РФ).'
    },
    {
      title: 'Замена штрафа предупреждением',
      desc: 'Для субъектов малого и среднего предпринимательства (МСП) добиваемся применения ст. 4.1.1 КоАП РФ при первом выявленном нарушении и отсутствии угрозы причинения вреда.'
    },
    {
      title: 'Снижение штрафа ниже низшего предела',
      desc: 'По частям 3.2 и 3.3 ст. 4.1 КоАП РФ обосновываем суду исключительные обстоятельства, материальное положение компании и добиваемся снижения суммы штрафа в 2 раза.'
    },
    {
      title: 'Отмена приостановления деятельности',
      desc: 'Предотвращаем или отменяем назначение административного приостановления деятельности до 90 суток, которое парализует производство или строительный объект компании.'
    }
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Срочный анализ материалов дела',
      desc: 'Изучаем протокол, акт проверки МВД, объяснения работников и постановление. Контролируем 10-дневный срок обжалования.'
    },
    {
      num: '02',
      title: 'Сбор доказательств и формирование позиции',
      desc: 'Проверяем правильность квалификации, надлежащего субъекта ответственности, отсутствие фактического допуска и процедурные нарушения.'
    },
    {
      num: '03',
      title: 'Подготовка ходатайств и жалоб',
      desc: 'Составляем аргументированные письменные возражения, ходатайства об исключении недопустимых доказательств и жалобу в суд.'
    },
    {
      num: '04',
      title: 'Участие в заседаниях суда или ОВМ',
      desc: 'Адвокат лично представляет интересы работодателя при рассмотрении дела в подразделении МВД и во всех судебных инстанциях.'
    },
    {
      num: '05',
      title: 'Контроль исполнения и минимизация рисков',
      desc: 'Получаем судебный акт, разъясняем порядок вступления в законную силу и помогаем избежать повторных протоколов по другим сотрудникам.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Правовая экспертиза и возражения',
      subtitle: 'Анализ материалов проверки и протокола',
      popular: false,
      price: 'от 15 000 ₽',
      features: [
        { name: 'Изучение протокола и материалов проверки МВД', value: 'Включено' },
        { name: 'Оценка процессуальных нарушений инспекторов', value: 'Включено' },
        { name: 'Подготовка письменных возражений и ходатайств', value: 'Включено' },
        { name: 'Стратегия действий руководителя при рассмотрении', value: 'Включено' }
      ],
      buttonText: 'Оценить протокол',
      buttonHref: '#form'
    },
    {
      title: 'Защита при рассмотрении дела',
      subtitle: 'Участие адвоката в ОВМ МВД или суде',
      popular: true,
      badgeText: 'Основной выбор',
      price: 'от 40 000 ₽',
      features: [
        { name: 'Формирование доказательственной базы защиты', value: 'Включено' },
        { name: 'Подготовка комплекса процессуальных ходатайств', value: 'Включено' },
        { name: 'Личное участие адвоката во всех заседаниях по делу', value: 'Включено' },
        { name: 'Борьба за прекращение дела либо предупреждение (ст. 4.1.1)', value: 'Включено' },
        { name: 'Ходатайство о снижении штрафа ниже низшего предела', value: 'Включено' }
      ],
      buttonText: 'Заказать защиту',
      buttonHref: '#form'
    },
    {
      title: 'Судебное обжалование постановления',
      subtitle: 'Отмена или снижение штрафа через суд',
      popular: false,
      price: 'от 55 000 ₽',
      features: [
        { name: 'Подготовка жалобы на постановление в районный суд', value: 'Включено' },
        { name: 'Ходатайство о восстановлении срока при пропуске', value: 'Включено' },
        { name: 'Представительство во всех судебных заседаниях', value: 'Включено' },
        { name: 'Обжалование в апелляционной инстанции областного суда', value: 'Включено' }
      ],
      buttonText: 'Обжаловать штраф',
      buttonHref: '#form'
    }
  ];

  const practiceCases: CaseData[] = [
    {
      category: 'Субъект правонарушения',
      title: 'Доказали, что иностранный работник был допущен независимым подрядчиком',
      problem: 'ОВМ МВД составило протокол по ч. 1 ст. 18.15 КоАП РФ на компанию-заказчика, обнаружив на объекте иностранца без патента. Размер штрафа составлял 400 000 ₽.',
      action: 'В суде представили договор подряда с возложением всех миграционных обязанностей на подрядчика, журнал пропускного режима и табели учета. Доказали отсутствие трудовых отношений и подчиненности работника заказчику.',
      result: 'Суд признал заказчика ненадлежащим субъектом правонарушения и прекратил производство по делу за отсутствием состава правонарушения.'
    },
    {
      category: 'Срок уведомления',
      title: 'Отменили штраф 400 000 ₽ за якобы пропущенный срок уведомления МВД',
      problem: 'Инспекторы МВД вменили предприятию ч. 3 ст. 18.15 за несвоевременную подачу уведомления о расторжении трудового договора, ссылаясь на дату поступления письма в отдел.',
      action: 'Подняли почтовые квитанции, опись вложения со штемпелем «Почты России» и доказали, что письмо было сдано в почтовое отделение строго на третий рабочий день.',
      result: 'Постановление отменено вышестоящим должностным лицом МВД по нашей жалобе, штраф аннулирован в полном объеме.'
    },
    {
      category: 'Снижение штрафа',
      title: 'Заменили крупный штраф предупреждением для субъекта МСП',
      problem: 'Производственному предприятию вменили нарушение формы уведомления при приеме на работу двух граждан Киргизии (ЕАЭС) с угрозой совокупного штрафа 800 000 ₽.',
      action: 'В судебном заседании доказали статус микропредприятия, первичность нарушения, отсутствие причинения вреда государству и заявили ходатайство о применении положений ст. 4.1.1 КоАП РФ.',
      result: 'Суд изменил меру административной ответственности со штрафа 800 000 ₽ на предупреждение. Деятельность предприятия не пострадала.'
    }
  ];

  const faqs = [
    {
      q: 'Какой срок на обжалование постановления по ст. 18.15 КоАП РФ?',
      a: 'По общему правилу статьи 30.3 КоАП РФ жалоба на постановление по делу об административном правонарушении может быть подана в течение 10 суток со дня вручения или получения копии постановления. Очень важно сохранить почтовый конверт или расписку о получении.'
    },
    {
      q: 'Что делать, если 10-дневный срок на подачу жалобы уже пропущен?',
      a: 'Необходимо подготовить жалобу с одновременным ходатайством о восстановлении пропущенного срока. Уважительными причинами могут быть признаны нахождение руководителя в стационаре, несвоевременное вручение копии органом почтовой связи или отсутствие надлежащего извещения.'
    },
    {
      q: 'Штраф по ст. 18.15 КоАП РФ назначается за каждого работника отдельно?',
      a: 'Да. В соответствии с Примечанием 2 к ст. 18.15 КоАП РФ при незаконном привлечении к труду двух и более иностранных граждан административная ответственность наступает за каждого иностранного гражданина в отдельности. Это создаёт риск умножения штрафа.'
    },
    {
      q: 'Можно ли заменить штраф на предупреждение?',
      a: 'Да. Согласно ст. 4.1.1 КоАП РФ субъектам МСП и их работникам штраф подлежит замене на предупреждение, если правонарушение совершено впервые и не причинило вреда жизни, здоровью людей или безопасности государства.'
    },
    {
      q: 'Можно ли снизить размер штрафа ниже минимального порога?',
      a: 'Да. В соответствии с частями 3.2 и 3.3 статьи 4.1 КоАП РФ суд при наличии исключительных обстоятельств (финансовые трудности, предотвращение вредных последствий) вправе назначить наказание в виде штрафа в размере менее минимального размера штрафа (до 50% от минимума).'
    },
    {
      q: 'Нужно ли оплачивать штраф, пока жалоба находится на рассмотрении в суде?',
      a: 'Нет. Подача жалобы в установленный 10-дневный срок приостанавливает вступление постановления в законную силу (ст. 31.1 КоАП РФ). До вынесения решения по жалобе штраф оплате не подлежит, и служба судебных приставов не имеет права списывать средства.'
    },
    {
      q: 'Считается ли выполнение работ иностранцем по договору ГПХ привлечением к труду?',
      a: 'Да. Примечание 1 к ст. 18.15 прямо устанавливает, что под привлечением к трудовой деятельности понимается допуск в любой форме к выполнению работ или оказанию услуг либо иное использование труда, независимо от формы договора.'
    },
    {
      q: 'Можно ли привлечь к ответственности только директора, а не саму компанию?',
      a: 'В КоАП РФ действует принцип раздельной ответственности юридического лица и должностного лица. Грамотная защитная стратегия на стадии проверки позволяет в отдельных случаях ограничить состав правонарушения только должностным лицом со штрафом 25 000–50 000 ₽ вместо 400 000–800 000 ₽ на компанию.'
    },
    {
      q: 'Куда подается жалоба на постановление ОВМ МВД?',
      a: 'Жалоба на постановление начальника отдела по вопросам миграции подается в районный суд по месту рассмотрения дела либо вышестоящему должностному лицу МВД (ч. 1 ст. 30.1 КоАП РФ). Мы рекомендуем судебный порядок обжалования.'
    },
    {
      q: 'Что делать, если в протоколе искажены слова руководителя или свидетелей?',
      a: 'В протоколе необходимо обязательно собственноручно написать: «С протоколом не согласен, факты искажены, подробные письменные объяснения и доказательства будут представлены защитником при рассмотрении дела».'
    },
    {
      q: 'Какие гарантии может предоставить адвокат по административному делу?',
      a: 'Адвокат гарантирует скрупулезный правовой анализ материалов, использование всех доступных законом процессуальных механизмов защиты, сбор доказательств и соблюдение адвокатской тайны. Итоговое решение принимает орган или суд на основе закона.'
    },
    {
      q: 'Как передать материалы дела для первичного анализа?',
      a: 'Свяжитесь с нами по телефону или через форму на сайте. Мы согласуем безопасный способ передачи фото или сканов протокола, акта проверки и постановления для немедленной оценки шансов защиты.'
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
            <Link href="/biznesu/migracionnoe-soprovozhdenie-biznesa/">Миграционное сопровождение</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Защита по ст. 18.15 КоАП РФ</span>
          </>
        }
        superTitle={
          <span style={{ whiteSpace: 'normal', display: 'inline-block', lineHeight: 1.4 }}>
            <span style={{ display: 'inline-block' }}>АДМИНИСТРАТИВНАЯ ЗАЩИТА РАБОТОДАТЕЛЯ •</span> <br />
            <span style={{ display: 'inline-block' }}>Липецк и Липецкая область</span>
          </span>
        }
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'inline-block' }}>Защита работодателя</span> <br />
            <span className="hero-title-span-mobile" style={{ display: 'inline-block', color: 'var(--color-gold)' }}>по статье 18.15 КоАП РФ в Липецке</span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '760px', textWrap: 'balance' }}>
            Проверим квалификацию, доказательства и процедуру, подготовим позицию к протоколу или рассмотрению дела и обжалуем постановление о штрафе в суде.
          </span>
        }
        primaryCtaText="Срочно оценить дело"
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
        secondaryCtaText="Стадии производства"
        secondaryCtaLink="#case-stages"
        imageUrl="/images/konopkin.jpg"
        imageName="Дмитрий Сергеевич Конопкин"
        imageSubtitle="Адвокат, председатель Коллегии адвокатов «Де-Юре», куратор направления «Миграционное сопровождение бизнеса»"
        imageObjectPosition="center 15%"
        trustItems={[
          {
            text: (
              <span>
                <strong>Разберём, какая часть статьи</strong> вменяется и кому именно (компании или директору)
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Проверим факт допуска</strong> к работе, документы, уведомления и материалы МВД
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Подготовим объяснения</strong>, ходатайства, возражения и доказательственную базу
              </span>
            )
          },
          {
            text: (
              <span>
                <strong>Оценим основания</strong> для прекращения дела, назначения предупреждения или снижения штрафа
              </span>
            )
          }
        ]}
      />

      {/* Срочное предупреждение о сроках под Hero */}
      <div style={{ background: '#fffbeb', borderBottom: '1px solid #fef3c7', padding: '16px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center', textAlign: 'center' }}>
          <span style={{ fontSize: '18px' }}>⚠️</span>
          <span style={{ fontSize: '14px', color: '#92400e', fontWeight: 600 }}>
            Сроки защиты ограничены законом: общий срок подачи жалобы на постановление по ст. 30.3 КоАП РФ составляет всего 10 суток со дня вручения копии.
          </span>
        </div>
      </div>

      {/* ═══ БЛОК 2: СТАДИИ ДЕЛА (ШАБЛОН «СИТУАЦИИ») ═══ */}
      <section className="section bg-white" id="case-stages" style={{ padding: '80px 0' }}>
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
              ПРОЦЕССУАЛЬНЫЕ СТАДИИ
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
              <span style={{ display: 'inline-block' }}>На какой стадии находится</span> <br />
              <span style={{ display: 'inline-block' }}>ваше административное дело</span>
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
              Чем раньше адвокат подключается к делу, тем выше шансы пресечь процессуальные нарушения и добиться прекращения производства.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', marginBottom: '32px' }}>
            {caseStages.map((sit, idx) => (
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
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
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
                <span style={{ display: 'inline-block' }}>По делу уже вынесен протокол или постановление о штрафе?</span> <br />
                <span style={{ display: 'inline-block' }}>Пришлите документы — оценим основания для отмены или снижения санкций.</span>
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

      {/* ═══ БЛОК 3: ЧТО ВМЕНЯЮТ ПО СТАТЬЕ 18.15 ═══ */}
      <section id="qualification" className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
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
              КВАЛИФИКАЦИЯ НАРУШЕНИЯ
            </div>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.25, textAlign: 'left' }}>
              <span style={{ display: 'inline-block' }}>Что вменяют работодателю</span> <br />
              <span style={{ display: 'inline-block' }}>по статье 18.15 КоАП РФ</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Каждая часть статьи имеет собственный предмет доказывания, круг доказательств и процессуальные особенности защиты.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '24px' }}>
            {articleParts.map((item, idx) => (
              <div
                key={idx}
                className="card service-card hover-lift"
                style={{
                  height: '100%',
                  padding: '32px 28px',
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  borderTop: '3px solid var(--color-gold)',
                  borderRadius: '0',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)',
                  position: 'relative'
                }}
              >
                <div>
                  <div style={{ fontSize: '11.5px', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px', background: 'rgba(23, 50, 77, 0.06)', padding: '3px 8px', display: 'inline-block', borderRadius: '2px' }}>
                    {item.part}
                  </div>
                  <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.35, fontFamily: 'var(--font-serif)', fontWeight: 600 }}>
                    {item.title}
                  </h3>
                  <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    {item.desc}
                  </p>
                </div>
                <div style={{ background: 'var(--color-bg-light)', padding: '14px 16px', borderRadius: '4px', fontSize: '13px', color: 'var(--color-deep-blue)', fontWeight: 600, borderLeft: '3px solid var(--color-gold)', lineHeight: 1.5 }}>
                  {item.sanction}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: ВОЗМОЖНЫЕ ПРАВОВЫЕ РЕЗУЛЬТАТЫ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
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
              ПРАВОВЫЕ СЦЕНАРИИ
            </div>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.25, textAlign: 'left' }}>
              <span style={{ display: 'inline-block' }}>Какие цели ставит защита</span> <br />
              <span style={{ display: 'inline-block' }}>по административному делу</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              Цель определяется после детального анализа материалов проверки, протокола и имеющихся доказательств.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '24px' }}>
            {legalGoals.map((goal, idx) => (
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
                  0{idx + 1}
                </div>
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '8px 0 14px 0', lineHeight: 1.35 }}>
                  {goal.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {goal.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: КУРАТОР (SPECIALISTBLOCK) ═══ */}
      <SpecialistBlock
        title="Куратор направления — Дмитрий Сергеевич Конопкин"
        name="Дмитрий Сергеевич Конопкин"
        position={<>Адвокат, председатель Коллегии адвокатов «Де-Юре»,<br />куратор направления «Миграционное сопровождение бизнеса»</>}
        imageUrl="/images/konopkin.jpg"
        imagePosition="center 15%"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Дмитрий Сергеевич курирует процессуальную защиту бизнеса по делам об административных правонарушениях: организует анализ материалов проверки, определение тактики защиты и координацию адвокатов коллегии.
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
            «По делам о миграционных штрафах ключевую роль играют детали: полномочия инспекторов, порядок вручения уведомлений, доказательства фактического допуска и статус субъекта правонарушения. Следовательский опыт в СК РФ позволяет находить неустранимые противоречия в материалах МВД и отменять постановления в суде».
          </div>,
          <ul key="3" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>Реестровый номер адвоката: 48/812 в реестре адвокатов Липецкой области</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0, marginTop: '8px' }}></div>
              <span>Судебная защита юридических лиц и руководителей по делам об административных правонарушениях</span>
            </li>
          </ul>,
          <a key="4" href="/specialisty/konopkin-dmitriy-sergeevich/" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
            Подробнее о Дмитрии Конопкине →
          </a>
        ]}
        buttonText="Передать дело на оценку"
        buttonHref="#form"
      />

      {/* ═══ БЛОК 5: ЭТАПЫ РАБОТЫ ═══ */}
      <ProcessBlock
        title="Пять этапов защиты по статье 18.15 КоАП РФ"
        steps={processSteps}
      />

      {/* ═══ БЛОК 6: ЦЕНЫ ═══ */}
      <PricingBlock
        title="Стоимость защиты по ст. 18.15 КоАП РФ"
        subtitle="Стоимость зависит от процессуальной стадии (протокол, рассмотрение или обжалование в суде) и количества привлеченных лиц. Фиксируется в договоре."
        tiers={pricingTiers}
      />

      {/* ═══ БЛОК 7: КЕЙСЫ ═══ */}
      <CasesBlock
        title="Примеры защиты работодателей"
        subtitle="Результаты отмены и снижения административных штрафов в судах Липецка"
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
            Смежные услуги миграционного направления
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '16px'
            }}
          >
            <Link
              href="/biznesu/migracionnoe-soprovozhdenie-biznesa/yurist-pri-migracionnoj-proverke-mvd/"
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
              Юрист при проверке МВД →
            </Link>
            <Link
              href="/biznesu/migracionnoe-soprovozhdenie-biznesa/migracionnyj-audit-rabotodatelya/"
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
              Миграционный аудит работодателя →
            </Link>
            <Link
              href="/biznesu/migracionnoe-soprovozhdenie-biznesa/yuridicheskoe-oformlenie-inostrannyh-rabotnikov/"
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
              Оформление иностранных работников →
            </Link>
            <Link
              href="/biznesu/migracionnoe-soprovozhdenie-biznesa/"
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
              Хаб: Миграционное сопровождение →
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
                СРОЧНАЯ ЗАЩИТА ПО КОАП РФ
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
                Срочно оценим материалы дела по ст. 18.15 КоАП РФ
              </h2>
              <p
                style={{
                  fontSize: '15px',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '24px'
                }}
              >
                Укажите текущую стадию (составлен протокол, назначено заседание или получено постановление о штрафе) и дату. Мы свяжемся с вами в течение 15 минут в рабочее время.
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
                  Контроль срока обжалования (10 суток)
                </div>
                <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginTop: '4px' }}>
                  Если постановление уже вынесено, обязательно сохраните конверт с почтовым треком. Срок подачи жалобы исчисляется строго с момента получения.
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
