'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MilitaryHero from '@/components/MilitaryHero';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import PricingBlock, { PricingTier } from '@/components/PricingBlock';
import ProcessBlock, { ProcessStep } from '@/components/ProcessBlock';

export default function ZashchitaClient() {
  const cases: CaseData[] = [
    {
      category: 'Поставка / Снижение требований',
      title: 'Отказ во взыскании неподтверждённой части задолженности',
      problem: 'Поставщик требовал с компании клиента 3,4 млн ₽, однако часть товарных накладных не содержала подписей уполномоченных лиц, а в расчёт была включена оплаченная партия продукции.',
      action: 'Сопоставили договор, товарные накладные, акты сверки, банковские выписки и деловую переписку. Подготовили детальный контррасчёт и мотивированный отзыв на исковое заявление, доказав необоснованность части требований.',
      result: 'Арбитражный суд отказал истцу во взыскании 1,6 млн ₽ неподтверждённого долга. Итоговая взысканная сумма снижена более чем вдвое, судебные расходы распределены пропорционально.'
    },
    {
      category: 'Подряд / Ст. 333 ГК РФ',
      title: 'Снижение штрафных санкций и исключение двойного начисления',
      problem: 'Заказчик предъявил иск о взыскании 1,2 млн ₽ основного долга и начислил 2,1 млн ₽ неустойки и процентов за пересекающиеся периоды просрочки по договору подряда.',
      action: 'Проверили условия договора, периоды начислений и платежи. Заявили возражения против одновременного взыскания двух видов ответственности и подали мотивированное ходатайство о снижении неустойки по ст. 333 ГК РФ.',
      result: 'Суд исключил двойную ответственность и снизил размер неустойки с 2,1 млн ₽ до 350 000 ₽. Итоговые выплаты компании снижены на 1,75 млн ₽.'
    },
    {
      category: 'Урегулирование / Мировое соглашение',
      title: 'Утверждение мирового соглашения с рассрочкой без блокировки счетов',
      problem: 'Контрагент подал иск на 5,6 млн ₽ и ходатайствовал об аресте всех банковских счетов компании, что парализовало бы операционную деятельность и выплату зарплат.',
      action: 'Предотвратили наложение обеспечительных мер, доказав их несоразмерность. Провели переговоры с кредитором, разделили спорную и признанную части долга и подготовили проект мирового соглашения с графиком платежей на 8 месяцев.',
      result: 'Мировое соглашение утверждено арбитражным судом. Счета компании не блокировались, штрафы прекратили начисляться, бизнес продолжил нормальную работу.'
    }
  ];

  const faqs = [
    {
      q: 'Нужно ли отвечать на претензию?',
      a: 'Ответ не всегда является формальной обязанностью, но игнорирование может привести к потере возможности зафиксировать возражения и урегулировать спор. Срок и последствия определяются договором, законом и ситуацией.'
    },
    {
      q: 'Можно ли не платить, если акт не подписан?',
      a: 'Отсутствие подписи само по себе не всегда исключает долг. Суд оценивает договор, фактическое исполнение, переписку, мотивы отказа и другие доказательства.'
    },
    {
      q: 'Можно ли уменьшить неустойку?',
      a: 'Для предпринимателя суд рассматривает уменьшение явно несоразмерной неустойки по заявлению должника. Нужны расчёт и доказательства; автоматического уменьшения нет.'
    },
    {
      q: 'Что делать, если срок на отзыв почти истёк?',
      a: 'Нужно немедленно проверить карточку дела, судебные документы и дату заседания, затем определить минимально необходимый комплект позиции и дальнейшее дополнение доказательств.'
    },
    {
      q: 'Когда нужен встречный иск?',
      a: 'Когда у компании есть самостоятельное требование к истцу и выполняются условия для совместного рассмотрения. Не каждое возражение оформляется встречным иском.'
    },
    {
      q: 'Можно ли снять арест со счёта?',
      a: 'Нужно установить источник ограничения и правовое основание. Если это обеспечительная мера суда, оцениваются отмена, замена и обжалование; если действие пристава — профиль исполнительного производства.'
    },
    {
      q: 'Если долг реальный, чем поможет юрист?',
      a: 'Проверит сумму и санкции, исключит необоснованные элементы, оценит встречные требования и поможет согласовать юридически и финансово исполнимый порядок урегулирования.'
    },
    {
      q: 'Можно ли получить рассрочку исполнения?',
      a: 'Можно обратиться с заявлением, но рассрочка не предоставляется автоматически. Необходимо подтвердить обстоятельства, затрудняющие исполнение, и предложить обоснованный порядок.'
    },
    {
      q: 'Защищаете ли вы компанию при банкротстве?',
      a: 'Да, но это самостоятельный банкротный проект. Если требования и финансовое состояние указывают на неплатёжеспособность, задача передаётся в профильный кластер.'
    },
    {
      q: 'Можно ли работать дистанционно?',
      a: 'Да, если характер дела позволяет. Необходимость личного участия определяется после проверки стадии и документов.'
    }
  ];

  const steps: ProcessStep[] = [
    {
      num: '01',
      title: 'Фиксация документа и сроков',
      desc: 'Определяем, какой документ получен (претензия, иск, судебный приказ, определение суда), кем направлен и когда фактически получен, чтобы не пропустить процессуальные сроки.'
    },
    {
      num: '02',
      title: 'Правовой аудит требований',
      desc: 'Проверяем основание долга, полномочия сторон, факт встречного исполнения кредитором, правильность расчёта и применимость исковой давности.'
    },
    {
      num: '03',
      title: 'Определение защитной позиции',
      desc: 'Отделяем обоснованную сумму от завышенной, выявляем встречные требования, переплаты или основания для снижения штрафов по ст. 333 ГК РФ.'
    },
    {
      num: '04',
      title: 'Выбор процессуального инструмента',
      desc: 'Предлагаем оптимальный вариант: мотивированный ответ на претензию, мировое соглашение, отзыв на иск или встречное исковое заявление.'
    },
    {
      num: '05',
      title: 'Подготовка процессуальных документов',
      desc: 'Составляем отзыв на иск, контррасчёт задолженности, ходатайства о снижении санкций или отмене обеспечительных мер и формируем доказательственную базу.'
    },
    {
      num: '06',
      title: 'Защита интересов в суде',
      desc: 'Представляем интересы бизнеса во всех заседаниях арбитражного суда, отстаиваем возражения и нейтрализуем доводы кредитора.'
    },
    {
      num: '07',
      title: 'Сопровождение исполнения или обжалование',
      desc: 'При необходимости подаём апелляционную жалобу либо добиваемся судебной отсрочки или рассрочки исполнения решения по ст. 324 АПК РФ.'
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      title: 'Анализ претензии / иска',
      subtitle: 'Срочный аудит требований кредитора, проверка расчёта и оценка процессуальных рисков',
      features: [
        { name: 'Изучение иска, претензии и приложений', value: '✓' },
        { name: 'Проверка сроков и обоснованности расчёта', value: '✓' },
        { name: 'Выявление оснований для снижения неустойки', value: '✓' },
        { name: 'План процессуальной защиты', value: '✓' }
      ],
      popular: false,
      buttonText: 'Заказать аудит',
      buttonHref: '#form'
    },
    {
      title: 'Защита в суде под ключ',
      subtitle: 'Полное ведение дела в арбитражном суде на стороне ответчика',
      popular: true,
      badgeText: 'Популярно',
      features: [
        { name: 'Подготовка отзыва на иск и контррасчёта', value: '✓' },
        { name: 'Ходатайства по ст. 333 ГК РФ и обеспечительным мерам', value: '✓' },
        { name: 'Подача встречного иска при наличии оснований', value: '✓' },
        { name: 'Представительство во всех судебных заседаниях', value: '✓' },
        { name: 'Проведение переговоров о мировом соглашении', value: '✓' }
      ],
      buttonText: 'Поручить защиту',
      buttonHref: '#form'
    },
    {
      title: 'Урегулирование и рассрочка',
      subtitle: 'Согласование мирового соглашения либо получение судебной рассрочки',
      features: [
        { name: 'Переговоры с кредитором по графику платежей', value: '✓' },
        { name: 'Разработка проекта мирового соглашения', value: '✓' },
        { name: 'Судебное утверждение графика выплат', value: '✓' },
        { name: 'Заявление о рассрочке/отсрочке по ст. 324 АПК РФ', value: '✓' }
      ],
      popular: false,
      buttonText: 'Согласовать условия',
      buttonHref: '#form'
    }
  ];

  return (
    <main style={{ position: 'relative', overflowX: 'hidden' }}>
      <Header />

      {/* ═══ БЛОК 1: ПЕРВЫЙ ЭКРАН (HERO) ═══ */}
      <MilitaryHero
        breadcrumbs={
          <>
            <Link href="/">Главная</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/biznesu/">Юридическим лицам</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/">Взыскание задолженности</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Защита от взыскания</span>
          </>
        }
        superTitle="Защита бизнеса в долговом споре • Липецк и Липецкая область"
        title="Защита бизнеса от взыскания задолженности в Липецке"
        subtitle="Проверим основание и расчёт требований, сроки и доказательства кредитора, подготовим позицию компании — от ответа на претензию до защиты в суде и законного урегулирования."
        trustItems={[
          { text: 'Проверяем каждое требование' },
          { text: 'Сохраняем возражения' },
          { text: 'Не обещаем «списать» обоснованный долг' }
        ]}
        primaryCtaText="Проверить требования кредитора"
        primaryCtaLink="#form"
        secondaryCtaText="Получили иск — передать документы"
        secondaryCtaLink="#urgent-document"
      />

      {/* Переключатель роли на страницу взыскателя */}
      <section className="section bg-light" style={{ padding: '24px 0', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            background: '#FFFFFF',
            padding: '18px 24px',
            borderLeft: '4px solid var(--color-gold)',
            boxShadow: '0 2px 10px rgba(23, 50, 77, 0.04)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
              <span style={{ fontSize: '15px', color: 'var(--color-deep-blue)', fontWeight: 500 }}>
                <strong>Вам должна другая компания?</strong> Проведём аудит должника, претензионную работу и взыщем долг через арбитражный суд.
              </span>
            </div>
            <Link
              href="/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/"
              className="btn btn-outline"
              style={{ padding: '10px 20px', fontSize: '14px', whiteSpace: 'nowrap' }}
            >
              Взыскание задолженности с юридических лиц →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 7.1: СРОЧНЫЙ БЛОК ПО ДОКУМЕНТУ ═══ */}
      <section className="section bg-white" id="urgent-document" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '44px' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Срочный анализ
            </div>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              Что вы получили от кредитора?
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Определяем срочность действий и перечень проверок в зависимости от полученного документа.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '20px', marginBottom: '32px' }}>
            {[
              {
                doc: 'Претензия',
                check: 'Срок ответа по договору и ст. 4 АПК РФ, расчёт требований, комплект подтверждений, последствия признания долга.',
                cta: 'Проверить претензию'
              },
              {
                doc: 'Исковое заявление',
                check: 'Арбитражный суд, номер дела, дата заседания, процессуальный срок на подачу отзыва, доказательства и приложения.',
                cta: 'Передать иск'
              },
              {
                doc: 'Судебный приказ',
                check: 'Дата фактического получения, соблюдение применимого упрощенного порядка и 10-дневный срок на подачу возражений.',
                cta: 'Проверить срок'
              },
              {
                doc: 'Обеспечительные меры',
                check: 'Какой судебный акт принят, что конкретно ограничено (счета, техника, недвижимость), чем кредитор обосновал риск.',
                cta: 'Оценить меры'
              },
              {
                doc: 'Решение суда',
                check: 'Дата изготовления и получения, вступление в силу, основания и сроки на подачу апелляционной жалобы.',
                cta: 'Проверить решение'
              },
              {
                doc: 'Исполнительный документ',
                check: 'Кем и когда выдан лист, какие действия уже совершены приставами, есть ли основания для отсрочки или рассрочки.',
                cta: 'Определить маршрут'
              }
            ].map((item, idx) => (
              <div key={idx} className="hover-lift" style={{
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                padding: '28px 22px',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-primary)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                boxSizing: 'border-box'
              }}>
                <div>
                  <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 10px 0', lineHeight: 1.3 }}>
                    {item.doc}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: '0 0 18px 0' }}>
                    <strong style={{ color: 'var(--color-deep-blue)' }}>Что проверить: </strong>{item.check}
                  </p>
                </div>
                <a href="#form" style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '14px', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
                  {item.cta} →
                </a>
              </div>
            ))}
          </div>

          <div style={{
            background: 'var(--gradient-cream)',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            padding: '20px 24px'
          }}>
            <p style={{ margin: 0, fontSize: '14.5px', color: 'var(--color-deep-blue)', lineHeight: 1.6 }}>
              <strong>Предупреждение:</strong> Не подписывайте признание долга, акт сверки, график или соглашение до юридической проверки последствий. Но и не игнорируйте документ: пропуск процессуального срока может существенно сузить способы защиты.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 7.2: ЧТО ИМЕННО ПРОВЕРИТ ЮРИСТ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '44px' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Методика аудита
            </div>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              Требование кредитора разбираем по 8 элементам
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Комплексный правовой анализ позволяет найти слабые места в позиции истца и снизить финансовые риски.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '20px', marginBottom: '32px' }}>
            {[
              { element: '1. Основание обязательства', questions: 'Возникло ли обязательство, надлежащие ли стороны указаны в договоре, наступил ли фактический срок оплаты.' },
              { element: '2. Исполнение со стороны кредитора', questions: 'Поставлен ли товар, выполнены ли работы надлежащего качества, передана ли исполнительная документация.' },
              { element: '3. Достоверность суммы', questions: 'Учтены ли ранее произведённые платежи, зачёты, возвраты, гарантийные удержания и частичные оплаты.' },
              { element: '4. Штрафные санкции и проценты', questions: 'Предусмотрены ли договором, верен ли период расчёта, есть ли основания заявлять о несоразмерности по ст. 333 ГК.' },
              { element: '5. Оформление доказательств', questions: 'Подписаны ли документы полномочными лицами, есть ли доверенности, что подтверждает переписка сторон.' },
              { element: '6. Соблюдение сроков', questions: 'Не пропущен ли 3-летний срок исковой давности, соблюдён ли обязательный претензионный порядок по АПК РФ.' },
              { element: '7. Встречные требования', questions: 'Имеются ли убытки от действий кредитора, переплаты, право на возврат аванса, устранение недостатков или зачёт.' },
              { element: '8. Экономика спора', questions: 'Влияние обеспечительных мер на работу компании, соразмерность судебных затрат и варианты мирового соглашения.' }
            ].map((item, idx) => (
              <div key={idx} className="risk-card-item risk-card-item--navy" style={{ background: '#FFFFFF', border: '1px solid var(--color-border)' }}>
                <h3 style={{ fontSize: '16.5px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 6px 0', lineHeight: 1.3 }}>
                  {item.element}
                </h3>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                  {item.questions}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ padding: '12px 32px' }}>
              Проверить расчёт и документы
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 7.3: ВАРИАНТЫ ПОЗИЦИИ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '44px' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Стратегия защиты
            </div>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              Защита зависит от того, что подтверждают документы
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Подбираем реалистичную линию процессуального поведения на основе фактических доказательств.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '20px' }}>
            {[
              {
                res: 'Долг не возник',
                pos: 'Мотивированные возражения по основанию, ненадлежащей стороне, отсутствию встречного исполнения кредитором либо ненаступлению срока.'
              },
              {
                res: 'Подтверждена только часть',
                pos: 'Отделение признанной суммы от спорной, оспаривание расчёта кредитора и исключение неподтверждённых накладных и актов.'
              },
              {
                res: 'Есть недостатки исполнения',
                pos: 'Фиксация дефектов товара или работ, требований об устранении недостатков и соразмерном уменьшении покупной цены.'
              },
              {
                res: 'Завышены санкции',
                pos: 'Проверка формулы расчёта и заявление ходатайства о снижении явно несоразмерной неустойки по ст. 333 ГК РФ.'
              },
              {
                res: 'Есть встречное требование',
                pos: 'Реализация встречных прав: заявление о зачёте взаимных требований, подача встречного иска либо самостоятельного требования.'
              },
              {
                res: 'Долг обоснован',
                pos: 'Переговоры, мировое соглашение, график выплат, отсрочка или рассрочка исполнения — без сокрытия имущества и фиктивных схем.'
              }
            ].map((item, idx) => (
              <div key={idx} style={{
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                padding: '28px 22px',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-gold)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                boxSizing: 'border-box'
              }}>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                    Результат проверки
                  </div>
                  <h3 style={{ fontSize: '16.5px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.35 }}>
                    {item.res}
                  </h3>
                </div>
                <div style={{ background: '#FFFFFF', padding: '14px 16px', borderLeft: '3px solid var(--color-primary)', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                  <strong style={{ color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>Возможная позиция:</strong>
                  {item.pos}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 7.4–7.7: СТАДИИ ЗАЩИТЫ (ПРЕТЕНЗИЯ, СУД, МЕРЫ, МИРОВОЕ) ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '30px', marginBottom: '32px' }}>
            
            {/* Ответ на претензию */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderTop: '4px solid var(--color-gold)',
              padding: '36px 32px'
            }}>
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.3 }}>
                Ответ на претензию и переговоры
              </h3>
              <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
                До направления ответа проверяем, какие факты компания признаёт, какие документы подтверждают возражения и не создаст ли формулировка доказательства против должника.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: 'var(--color-deep-blue)' }}>
                <li>✓ Подготовка мотивированного ответа с доказательствами</li>
                <li>✓ Расчёт признанной и спорной части требований</li>
                <li>✓ Переговоры без необдуманного признания долга</li>
              </ul>
            </div>

            {/* Судебная защита */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderTop: '4px solid var(--color-primary)',
              padding: '36px 32px'
            }}>
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.3 }}>
                Защита в арбитражном суде
              </h3>
              <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
                Составляем мотивированный отзыв на иск, заявляем о пропуске исковой давности, подаём контррасчёт и ходатайства о снижении неустойки по ст. 333 ГК РФ.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: 'var(--color-deep-blue)' }}>
                <li>✓ Подача отзыва и контррасчёта в арбитраж</li>
                <li>✓ Оспаривание основного долга, штрафов и расходов</li>
                <li>✓ Представительство интересов на всех заседаниях</li>
              </ul>
            </div>

            {/* Обеспечительные меры */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderTop: '4px solid var(--color-gold)',
              padding: '36px 32px'
            }}>
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.3 }}>
                Если суд ограничил счета или активы
              </h3>
              <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
                Проверяем обоснованность обеспечительных мер, их соразмерность сумме иска и готовим ходатайства об отмене, замене обеспечения либо встречном обеспечении.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: 'var(--color-deep-blue)' }}>
                <li>✓ Оценка соразмерности принятых мер сумме иска</li>
                <li>✓ Подготовка заявления об отмене или замене мер</li>
                <li>✓ Обжалование определения суда об аресте</li>
              </ul>
            </div>

            {/* Мировое соглашение */}
            <div style={{
              background: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderTop: '4px solid var(--color-primary)',
              padding: '36px 32px'
            }}>
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 14px 0', lineHeight: 1.3 }}>
                Мировое соглашение и рассрочка
              </h3>
              <p style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
                Согласуем финансово выполнимый график платежей, прекращение начисления штрафов и утверждаем мировое соглашение в судебном порядке.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: 'var(--color-deep-blue)' }}>
                <li>✓ Фиксация точной суммы без скрытых начислений</li>
                <li>✓ Согласование графика под реальный денежный поток</li>
                <li>✓ Судебное утверждение соглашения</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ БЛОК 7.8: ПОСЛЕ СУДЕБНОГО РЕШЕНИЯ ═══ */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '44px' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Стадия исполнения
            </div>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              Обжалование, отсрочка, рассрочка и исполнение
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Если решение суда уже принято, оцениваем сроки обжалования либо возможность судебной рассрочки исполнения.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '20px' }}>
            {[
              {
                task: 'Есть основания спорить с решением',
                route: 'Оценка срока и перспектив апелляционного обжалования, составление жалобы и участие в заседаниях вышестоящего суда.'
              },
              {
                task: 'Нужно изменить срок или порядок выплат',
                route: 'Подача заявления об отсрочке или рассрочке исполнения судебного акта по ст. 324 АПК РФ с доказательствами временных трудностей.'
              },
              {
                task: 'Спор сосредоточен на действиях приставов',
                route: 'Защита от незаконных действий и арестов ФССП, снижение исполнительского сбора в рамках практики исполнительного производства.'
              },
              {
                task: 'Компания объективно неплатёжеспособна',
                route: 'Комплексная оценка банкротных рисков, защита руководства и учредителей от субсидиарной ответственности.'
              }
            ].map((item, idx) => (
              <div key={idx} style={{
                background: 'var(--color-white)',
                border: '1px solid var(--color-border)',
                borderLeft: '4px solid var(--color-primary)',
                padding: '24px 22px',
                boxShadow: '0 2px 10px rgba(23, 50, 77, 0.03)'
              }}>
                <h3 style={{ fontSize: '16.5px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 8px 0', lineHeight: 1.3 }}>
                  {item.task}
                </h3>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                  {item.route}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 7.9: ДОКУМЕНТЫ ДЛЯ АНАЛИЗА ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', marginBottom: '44px' }}>
            <div style={{
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px'
            }}>
              Материалы для проверки
            </div>
            <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              Что передать юристу для защиты бизнеса
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Чем раньше вы передадите комплект документов, тем больше процессуальных возможностей сохранится.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '30px', alignItems: 'stretch', marginBottom: '32px' }}>
            <div style={{
              background: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-primary)',
              padding: '36px 32px',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)'
            }}>
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 20px 0', fontWeight: 700 }}>
                Основные процессуальные документы:
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  'Претензия, иск, судебный приказ, определение суда или постановление пристава',
                  'Договор со всеми приложениями, спецификациями и заявками',
                  'УПД, товарные накладные, акты приёма-передачи, отчёты',
                  'Платёжные поручения об оплатах и собственный контррасчёт',
                  'Доказательства даты фактического получения документов (конверт, трек-номер)'
                ].map((text, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{
              background: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-gold)',
              padding: '36px 32px',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.04)'
            }}>
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '0 0 20px 0', fontWeight: 700 }}>
                Дополнительные материалы:
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  'Деловая переписка с кредитором (электронная почта, мессенджеры)',
                  'Акты сверки, гарантийные письма и проекты мировых соглашений',
                  'Документы о дефектах, скрытых недостатках или срыве сроков кредитором',
                  'Сведения о зачётах взаимных требований и встречных обязательствах',
                  'Доверенность на представление интересов компании в суде'
                ].map((text, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{
            background: 'var(--color-white)',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-primary)',
            padding: '24px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap'
          }}>
            <p style={{ margin: 0, fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.6, maxWidth: '720px' }}>
              <strong>Рекомендация:</strong> Передайте документ целиком, включая приложения, почтовый конверт, уведомление или сведения из «Мой Арбитр»: точная дата получения имеет решающее значение для сроков.
            </p>
            <a href="#form" className="btn btn-primary" style={{ padding: '12px 28px', fontSize: '14.5px', whiteSpace: 'nowrap' }}>
              Передать документы на проверку
            </a>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 7.10: СХЕМА РАБОТЫ (PROCESS BLOCK) ═══ */}
      <ProcessBlock
        title="Как строится защита компании"
        subtitle="Последовательные действия юристов по защите ответчика и должника"
        steps={steps}
        ctaTitle="Дистанционная защита бизнеса по всей России"
        ctaSubtitle="Участвуем в заседаниях арбитражных судов любых регионов через систему онлайн-заседаний «Мой Арбитр»."
        ctaButtonText="Начать защиту бизнеса"
        ctaButtonHref="#form"
      />

      {/* ═══ БЛОК 8: КЕЙСЫ ОТВЕТЧИКА ═══ */}
      <CasesBlock
        title="Примеры дел из практики"
        showAllLink="/praktika/"
        showAllText="Смотреть всю практику"
        showDemoWarning={false}
        cases={cases}
      />

      {/* ═══ БЛОК 9: СТОИМОСТЬ УСЛУГ ═══ */}
      <PricingBlock
        title="Стоимость защиты бизнеса в долговом споре"
        subtitle="Прозрачные условия: фиксируем объём работы и этапы в договоре"
        tiers={pricingTiers}
        disclaimer="Стоимость определяется после проверки документов кредитора, стадии спора и необходимости проведения экспертиз."
      />

      {/* ═══ БЛОК 10: FAQ ═══ */}
      <FAQBlock
        title="Частые вопросы о защите бизнеса"
        faqs={faqs}
      />

      {/* ═══ БЛОК 11: ЛОКАЛЬНЫЙ ОФИС В ЛИПЕЦКЕ ═══ */}
      <section className="section bg-light" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '48px', alignItems: 'center' }}>
            <div>
              <div style={{
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--color-gold)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '12px'
              }}>
                Офис в Липецке
              </div>
              <h2 className="with-accent" style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, lineHeight: 1.25 }}>
                Обсудить защиту компании с юристом
              </h2>
              <p style={{ fontSize: '15.5px', color: 'var(--color-deep-blue)', opacity: 0.9, lineHeight: 1.6, marginBottom: '24px' }}>
                Можно встретиться в офисе ЮК «Де-Юре» в Липецке либо передать материалы иска в электронном виде для срочного изучения.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)' }}>Адрес офиса:</strong>
                    <span style={{ fontSize: '14.5px', color: 'var(--color-text-secondary)' }}>г. Липецк, ул. Советская, д. 35, оф. 213</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', color: 'var(--color-deep-blue)' }}>Телефон для связи:</strong>
                    <a href="tel:+79103503111" style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-primary)', textDecoration: 'none' }} data-analytics="phone_click">
                      +7 (910) 350-31-11
                    </a>
                  </div>
                </div>
              </div>

              <a href="#form" className="btn btn-primary" style={{ padding: '12px 28px' }}>
                Записаться на встречу
              </a>
            </div>

            <div style={{
              background: '#FFFFFF',
              border: '1px solid var(--color-border)',
              padding: '8px',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              minHeight: '340px'
            }}>
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=39.593684%2C52.608826&z=16&pt=39.593684,52.608826,pm2rdm"
                width="100%"
                height="340"
                frameBorder="0"
                style={{ border: 0, display: 'block' }}
                allowFullScreen={true}
                title="Офис ЮК Де-Юре в Липецке: ул. Советская, д. 35, оф. 213"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ БЛОК 12: ФИНАЛЬНАЯ ФОРМА (СВЯЗАТЬСЯ С НАМИ) ═══ */}
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
                <span style={{ display: 'inline-block' }}>Защитите бизнес</span> <br />
                <span style={{ display: 'inline-block' }}>от необоснованных требований</span>
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко опишите ситуацию и какой документ получен. Юрист проверит расчёт кредитора, оценит перспективы снижения требований и свяжется с вами.
              </p>

              <div style={{ background: 'var(--gradient-cream)', padding: '24px', borderLeft: '3px solid var(--color-gold)', marginTop: '0', marginBottom: '0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)' }}>Консультация юриста</strong>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  Позвоните прямо сейчас: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }} data-analytics="phone_click">+7 (910) 350-31-11</a>
                </p>
              </div>
            </div>

            <div style={{ background: 'var(--gradient-cream)', padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <ContactsForm
                title="Написать нам"
                subtitle={
                  <>
                    <span style={{ display: 'inline-block' }}>Оставьте имя и номер телефона. Юрист перезвонит</span> <br />
                    <span style={{ display: 'inline-block' }}>в рабочее время для предварительного анализа.</span>
                  </>
                }
                buttonText="Проверить требования кредитора"
                commentPlaceholder="Какой документ получен (иск, претензия), сумма требований, номер дела…"
                subtext={
                  <>
                    <span style={{ display: 'inline-block' }}>Свяжемся с вами в рабочее время. Если заявка оставлена вечером или в выходной день, перезвоним в ближайший рабочий день.</span>
                  </>
                }
                hiddenFields={[
                  { name: 'source_page', value: '/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/zashchita-biznesa-ot-vzyskaniya-zadolzhennosti/' },
                  { name: 'page_type', value: 'service' },
                  { name: 'direction', value: 'vzyskanie_zadolzhennosti_biznes' },
                  { name: 'service', value: 'zashchita_biznesa_ot_vzyskaniya_zadolzhennosti' }
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
