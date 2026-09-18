'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import MilitaryHero from '@/components/MilitaryHero';
import ProcessBlock, { ProcessStep } from '@/components/ProcessBlock';
import PricingBlock, { PricingTier } from '@/components/PricingBlock';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import FAQBlock, { FAQItem } from '@/components/FAQBlock';
import ContactsForm from '@/components/ContactsForm';

export default function PredstavlenieKreditoraClient() {
  const creditorSegments = [
    {
      title: 'Поставщик / подрядчик',
      desc: 'Должник перестал платить, а затем появилось сообщение о банкротстве. Поможем быстро определить стадию, доказательства и порядок заявления требования.'
    },
    {
      title: 'Арендодатель / лизингодатель',
      desc: 'Есть основной долг, текущие начисления или имущество в аренде. Разделим требования по правовому режиму и защитим права на имущество.'
    },
    {
      title: 'Кредитор с судебным актом',
      desc: 'Решение суда получено, но исполнение остановлено из-за банкротства. Переведём взыскание в банкротный процесс без утраты процессуальных прав.'
    },
    {
      title: 'Залоговый кредитор',
      desc: 'Требуется подтвердить залоговый статус и порядок продажи обеспечения. Проверим регистрацию, объём прав и выстроим стратегию голосования.'
    },
    {
      title: 'Миноритарный кредитор',
      desc: 'Небольшая доля голосов в реестре создает риск пассивной процедуры. Сформируем активную коалиционную позицию и проконтролируем отчёты управляющего.'
    }
  ];

  const serviceScope = [
    {
      title: 'Первичная диагностика',
      desc: 'Проверка дела в КАД, публикаций в ЕФРСБ, документов и статуса требования. Составление карты ближайших процессуальных действий.'
    },
    {
      title: 'Вход в процедуру',
      desc: 'Проверка статуса требования и доступных прав кредитора. При необходимости — включение в реестр требований (BIZ-BKR-03).'
    },
    {
      title: 'Судебное представительство',
      desc: 'Подготовка мотивированных письменных позиций, участие в судебных заседаниях и обжалование незаконных судебных актов.'
    },
    {
      title: 'Собрания кредиторов',
      desc: 'Анализ повесток и отчётов, формирование позиции для голосования, очное или заочное участие, протоколирование нарушений.'
    },
    {
      title: 'Контроль процедуры и управляющего',
      desc: 'Проверка расходования средств конкурсной массы, инвентаризации, оценки активов и соблюдения прав участников.'
    },
    {
      title: 'Стратегия пополнения массы',
      desc: 'Выявление оснований для оспаривания сделок должника (BIZ-BKR-05) и привлечения руководства к субсидиарной ответственности (BIZ-BKR-04).'
    }
  ];

  const documentsList = [
    'Номер арбитражного дела или реквизиты должника (наименование, ИНН, ОГРН);',
    'Договоры, спецификации, акты приёма-передачи, товарные накладные, УПД;',
    'Платёжные поручения, выписки банка, акты сверки взаиморасчётов;',
    'Претензионная переписка, вступившие в силу решения суда, исполнительные листы;',
    'Договоры залога, поручительства, банковские гарантии (при наличии);',
    'Полученные уведомления арбитражного управляющего и бюллетени для голосования;',
    'Известные сведения об имуществе, активах и аффилированных кредиторах должника.'
  ];

  const processSteps: ProcessStep[] = [
    {
      num: '01',
      title: 'Проверяем дело и сроки',
      desc: 'Находим актуальные судебные акты и публикации, определяем стадию и ближайшие события.'
    },
    {
      num: '02',
      title: 'Определяем статус кредитора',
      desc: 'Проверяем требование, обеспечение, права голоса и доступные действия; отдельный реестровый спор направляем на BIZ-BKR-03.'
    },
    {
      num: '03',
      title: 'Согласуем стратегию',
      desc: 'Фиксируем цель, приоритетные действия, отдельные споры, бюджет и порядок коммуникации.'
    },
    {
      num: '04',
      title: 'Представляем в суде',
      desc: 'Готовим позиции и ходатайства, направляем участникам, участвуем в заседаниях и отвечаем на доводы оппонентов.'
    },
    {
      num: '05',
      title: 'Участвуем в процедуре',
      desc: 'Анализируем повестки, отчёты и действия управляющего, представляем кредитора на собраниях.'
    },
    {
      num: '06',
      title: 'Контролируем результат',
      desc: 'Отслеживаем судебные акты, реестр, расчёты и основания для дополнительных мер.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Диагностика позиции',
      subtitle: 'Проверка дела, публикаций и прав',
      price: 'от 5 000 ₽',
      popular: false,
      features: [
        { name: 'анализ реестра и картотеки арбитража', value: 'Да' },
        { name: 'проверка статуса должника и управляющего', value: 'Да' },
        { name: 'карта сроков и первоочередных действий', value: 'Да' }
      ],
      buttonText: 'Заказать диагностику',
      buttonHref: '#form'
    },
    {
      title: 'Стратегия участия кредитора',
      subtitle: 'План действий и расчёт перспектив',
      price: 'от 25 000 ₽',
      popular: true,
      badgeText: 'Востребовано',
      features: [
        { name: 'анализ повестки первого собрания', value: 'Да' },
        { name: 'оценка шансов на пополнение массы', value: 'Да' },
        { name: 'выявление сомнительных кредиторов', value: 'Да' },
        { name: 'подготовка дорожной карты участия', value: 'Да' }
      ],
      buttonText: 'Разработать стратегию',
      buttonHref: '#form'
    },
    {
      title: 'Представительство на собрании',
      subtitle: 'Участие в собрании кредиторов',
      price: 'от 20 000 ₽',
      popular: false,
      features: [
        { name: 'анализ материалов к собранию', value: 'Да' },
        { name: 'подготовка позиции и голосование', value: 'Да' },
        { name: 'очное или заочное представительство', value: 'Да' },
        { name: 'фиксация нарушений в протоколе', value: 'Да' }
      ],
      buttonText: 'Делегировать участие',
      buttonHref: '#form'
    },
    {
      title: 'Сопровождение по процедуре',
      subtitle: 'Комплексный процессуальный контроль',
      price: 'от 45 000 ₽',
      popular: false,
      features: [
        { name: 'контроль всех отчётов управляющего', value: 'Да' },
        { name: 'участие во всех собраниях кредиторов', value: 'Да' },
        { name: 'направление процессуальных запросов', value: 'Да' },
        { name: 'регулярная отчётность доверителю', value: 'Да' }
      ],
      buttonText: 'Обсудить сопровождение',
      buttonHref: '#form'
    },
    {
      title: 'Судебное представительство',
      subtitle: 'Защита позиции в арбитражном суде',
      price: 'от 35 000 ₽',
      popular: false,
      features: [
        { name: 'подготовка отзывов и ходатайств', value: 'Да' },
        { name: 'участие в судебных заседаниях', value: 'Да' },
        { name: 'противодействие фиктивным долгам', value: 'Да' }
      ],
      buttonText: 'Передать дело в суд',
      buttonHref: '#form'
    }
  ];

  const casesData: CaseData[] = [
    {
      category: 'Поставщик / Оборудование',
      title: 'Поставщик: комплексное участие после включения в реестр',
      problem: 'После включения требования поставщика на 14 млн ₽ управляющий затягивал проведение инвентаризации и отчётов.',
      action: 'Запросили финансовую документацию, инициировали внеочередное собрание кредиторов, поставили перед управляющим вопросы по сохранности оборудования.',
      result: 'Пресечена попытка незаконной продажи активов по заниженной оценке, утверждён прозрачный порядок открытых торгов.'
    },
    {
      category: 'Залоговый кредитор / Недвижимость',
      title: 'Залоговый кредитор: защита специальных прав',
      problem: 'Конкурсный управляющий необоснованно включил в смету текущих расходов эксплуатацию залогового здания, занижая долю кредитора.',
      action: 'Подготовили возражения в арбитражный суд, оспорили распределение расходов конкурсного производства и утвердили судебное положение о порядке реализации.',
      result: 'Суд обязал направить 80% выручки от продажи напрямую на погашение задолженности перед залоговым кредитором.'
    },
    {
      category: 'Миноритарный кредитор / Торговля',
      title: 'Миноритарный кредитор: выявление вывода активов',
      problem: 'Кредитор обладал 6% голосов в реестре, тогда как аффилированное с должником лицо контролировало 70% требований.',
      action: 'Провели независимый аудит сделок должника за 3 года, доказали притворность займа мажоритарного кредитора и добились его субординации.',
      result: 'Требования аффилированного лица субординированы (понижены в очередности), доверитель стал реальным мажоритарным кредитором.'
    }
  ];

  const faqItems: FAQItem[] = [
    {
      q: 'Зачем кредитору представитель после включения требования в реестр?',
      a: 'Реестр подтверждает статус требования, но процедура продолжается: проходят собрания и заседания, управляющий представляет отчёты, принимаются решения об имуществе и расчётах. Представитель анализирует события и своевременно формирует позицию кредитора.'
    },
    {
      q: 'Если требование ещё не установлено, подходит ли эта услуга?',
      a: 'Сначала нужно определить процессуальный маршрут. Для самостоятельного включения в реестр предназначена BIZ-BKR-03; если кредитору требуется дальнейшее комплексное сопровождение, этап можно включить в общий согласованный план.'
    },
    {
      q: 'Можно ли подключить юриста, когда процедура уже идёт?',
      a: 'Да. Сначала юрист проверит текущую стадию, статус требования, прошедшие решения и ближайшие события. Часть возможностей могла измениться, поэтому объём работы определяется после диагностики.'
    },
    {
      q: 'Что именно делает представитель на собрании кредиторов?',
      a: 'Анализирует повестку и материалы, согласует позицию, участвует в голосовании в пределах полномочий и фиксирует решения или нарушения. Вес голоса зависит от установленного требования и его статуса.'
    },
    {
      q: 'Как кредитор получает информацию о ходе дела?',
      a: 'Формат отчётности фиксируется при согласовании: ключевые судебные акты, публикации, собрания, действия управляющего, риски и следующие шаги. Канал и периодичность зависят от объёма сопровождения.'
    },
    {
      q: 'Можно ли пожаловаться на арбитражного управляющего?',
      a: 'Да, при наличии нарушения и доказательств, но это отдельный поисковый и коммерческий интент BIZ-BKR-06. В рамках сопровождения юрист выявляет сигнал и определяет, требуется ли самостоятельное обжалование.'
    },
    {
      q: 'Можно ли оспорить подозрительную сделку должника?',
      a: 'Да, при наличии предусмотренных законом оснований и доказательств. Это самостоятельный обособленный спор; его целесообразность и бюджет оцениваются отдельно.'
    },
    {
      q: 'Можно ли взыскать долг с директора или собственника?',
      a: 'Не автоматически. Для субсидиарной или иной ответственности нужны специальные основания, причинная связь и доказательства. Подробная стратегия относится к отдельной услуге по КДЛ.'
    },
    {
      q: 'Можно ли сменить представителя в ходе процедуры?',
      a: 'Да, если это допускают документы о полномочиях и процессуальная ситуация. Новый юрист сначала принимает материалы, проверяет совершённые действия и согласует приоритеты.'
    },
    {
      q: 'Сколько денег удастся вернуть?',
      a: 'Заранее достоверно назвать процент нельзя. Он зависит от активов, состава и очередности требований, расходов процедуры, результатов споров и расчётов. Юрист может оценить сценарии, но не гарантировать выплату.'
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
            <Link href="/biznesu/bankrotstvo-biznesa/">Банкротство бизнеса</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Представление интересов кредитора</span>
          </>
        }
        superTitle="Банкротство бизнеса • Защита кредитора"
        title={
          <span style={{ display: 'block', maxWidth: '100%' }}>
            <span style={{ display: 'block' }}>Представление интересов кредитора</span>
            <span style={{ display: 'block' }}>в банкротстве компании</span>
            <span style={{ display: 'block' }}>в Липецке</span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Проверим стадию дела, статус требования и реальные рычаги влияния. Сформируем стратегию и представим кредитора на собраниях и в суде.
          </span>
        }
        primaryCtaText="Проверить позицию кредитора"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_cta_predstavlenie_kreditora"
        primaryCtaSubtext={
          <>
            <span>Перезвоним в течение 15 минут в рабочее время:</span><br />
            <span style={{ whiteSpace: 'nowrap' }}>
              <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (910) 350-31-11</a>
            </span>
          </>
        }
        trustItems={[
          { text: 'Защищаем права коммерческих, залоговых и миноритарных кредиторов' },
          { text: 'Контролируем собрания, отчёты управляющего и формирование конкурсной массы' },
          { text: 'Прозрачные этапы и фиксированный объём работ по договору' }
        ]}
        imageUrl="/images/og/predstavlenie-interesov-kreditora-og.jpg"
        imageName="Представительство кредиторов в банкротстве"
        imageSubtitle="Защита прав взыскателей в Арбитражном суде Липецкой области"
      />

      {/* ═══ БЛОК 2: СЕГМЕНТЫ КРЕДИТОРОВ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '44px' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
              Категории взыскателей
            </div>
            <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
              Кому требуется защита интересов в процедуре
            </h2>
            <p style={{ fontSize: '15.5px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
              У каждой категории кредиторов свои процессуальные цели: от подтверждения залогового статуса до отбития фиктивных требований аффилированных лиц.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '24px' }}>
            {creditorSegments.map((seg, sIdx) => (
              <div key={sIdx} className="card" style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', padding: '26px' }}>
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0' }}>
                  {seg.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  {seg.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 3: ЧТО ВХОДИТ В УСЛУГУ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'rgba(23, 50, 77, 0.02)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '48px' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
              Комплексный охват
            </div>
            <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
              Что входит в юридическое сопровождение кредитора
            </h2>
            <p style={{ fontSize: '15.5px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Ведём дело комплексно: от правового аудита карточки банкротства до фактического получения денежных средств.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '24px' }}>
            {serviceScope.map((sc, scIdx) => (
              <div key={scIdx} style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', padding: '26px 28px', borderLeft: '4px solid var(--color-gold)' }}>
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 8px 0' }}>
                  {sc.title}
                </h3>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  {sc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 4: ДОКУМЕНТЫ ═══ */}
      <section className="section bg-white" style={{ padding: '70px 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '48px', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Первичный анализ
              </div>
              <h2 style={{ fontSize: 'clamp(24px, 3.2vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                Документы для оценки позиции кредитора
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: '0 0 24px 0' }}>
                Для определения рычагов влияния и порядка защиты юристам потребуются первичные сведения об обязательстве:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {documentsList.map((doc, dIdx) => (
                  <div key={dIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: 'var(--color-deep-blue)' }}>
                    <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', marginTop: '7px' }}></div>
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', border: '1px solid var(--color-border)', padding: '36px', borderTop: '4px solid var(--color-primary)' }}>
              <h3 style={{ fontSize: '19px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0' }}>
                Контроль конкурсной массы
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
                Пассивность кредитора приводит к тому, что имущество должника продаётся по заниженной стоимости, а реальные активы выводятся:
              </p>
              <ul style={{ paddingLeft: '20px', margin: 0, fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                <li style={{ marginBottom: '8px' }}>Анализируем каждый отчёт конкурсного управляющего на предмет завышения текущих расходов.</li>
                <li style={{ marginBottom: '8px' }}>Оспариваем сомнительные сделки должника в интересах конкурсной массы.</li>
                <li>Инициируем привлечение контролирующих должника лиц к субсидиарной ответственности.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 5: КАК СТРОИТСЯ РАБОТА ═══ */}
      <ProcessBlock
        title="Как строится работа"
        subtitle="Шесть последовательных шагов защиты интересов кредитора в арбитражном процессе."
        alignTitle="center"
        steps={processSteps}
        ctaTitle="Хотите оценить шансы на возврат задолженности?"
        ctaSubtitle="Передайте номер дела на экспресс-анализ ведущим банкротным юристам."
        ctaButtonText="Проверить позицию"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 6: СТОИМОСТЬ ═══ */}
      <PricingBlock
        title="Стоимость защиты интересов кредитора"
        subtitle="Стоимость зависит от стадии дела, объёма документов, наличия возражений, числа заседаний и состава дополнительных споров."
        tiers={pricingTiers}
        disclaimer="Судебные расходы, государственные пошлины, экспертизы и публикации в ЕФРСБ оплачиваются отдельно и при удовлетворении требований подлежат взысканию с конкурсной массы должника."
      />

      {/* ═══ БЛОК 7: ПРАКТИКА ═══ */}
      <CasesBlock
        title="Примеры дел по защите кредиторов"
        showAllLink="/praktika/"
        showAllText="Смотреть всю практику"
        showDemoWarning={true}
        cases={casesData}
      />

      {/* ═══ БЛОК 8: FAQ ═══ */}
      <FAQBlock
        superTitle="Частые вопросы кредиторов"
        title={<><span>Вопросы и ответы</span> <br /><span>о представлении кредитора</span></>}
        subtitle="О собраниях кредиторов, правах голоса, контроле управляющего и возврате средств"
        ctaText="Задать свой вопрос"
        ctaLink="#form"
        faqs={faqItems}
      />

      {/* ═══ БЛОК 9: ФИНАЛЬНАЯ ФОРМА ═══ */}
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
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>Проверьте требование</span>{' '}
                <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>до следующего события</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Сообщите номер дела или ИНН должника, статус требования и текущую стадию. Юрист проверит, какие права доступны и нужен ли комплексный формат сопровождения.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация банкротного юриста</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните прямо сейчас: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (910) 350-31-11</a>
                </p>
              </div>

              <div style={{ background: 'rgba(23, 50, 77, 0.04)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Безопасность данных:</strong>
                Не прикладывайте к форме договоры, банковские документы и сведения, составляющие коммерческую тайну. Безопасный канал связи согласуем после звонка.
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="card" style={{ padding: '40px', background: '#FFFFFF', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
                <h3 style={{ fontSize: '22px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginTop: 0, marginBottom: '20px' }}>
                  Заявка на оценку позиции
                </h3>
                <ContactsForm
                  buttonText="Проверить позицию кредитора"
                  analyticsGoal="lead_form_predstavlenie_kreditora"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
