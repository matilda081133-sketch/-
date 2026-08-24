'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MilitaryHero from '@/components/MilitaryHero';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import CasesBlock, { CaseData } from '@/components/CasesBlock';
import SpecialistBlock from '@/components/SpecialistBlock';
import PricingBlock from '@/components/PricingBlock';
import ProcessBlock from '@/components/ProcessBlock';

export default function IspolnitelnoeClient() {

  const cases: CaseData[] = [
    {
      category: 'Взыскатель / ФССП',
      title: 'Взыскание долга с контрагента через исполнительное производство',
      problem: 'Компания получила исполнительный лист, однако пристав не принимал мер: счета должника не арестовывались, имущество не разыскивалось.',
      action: 'Проверили ход производства, направили жалобу на бездействие пристава, предъявили лист напрямую в банк должника.',
      result: 'Денежные средства на счёте должника арестованы, задолженность начала погашаться.'
    },
    {
      category: 'Должник / защита бизнеса',
      title: 'Оспаривание ареста оборудования, необходимого для деятельности',
      problem: 'Пристав наложил арест на производственное оборудование, без которого компания не могла исполнять текущие заказы.',
      action: 'Подготовили ходатайство об исключении имущества из-под ареста, обосновали его принадлежность к основным средствам производства.',
      result: 'Арест с оборудования снят, деятельность компании не прерывалась.'
    },
    {
      category: 'Несколько взыскателей',
      title: 'Выстраивание позиции при нескольких исполнительных листах',
      problem: 'На компанию одновременно поступило несколько исполнительных листов от разных взыскателей; общая сумма превышала текущие активы.',
      action: 'Проанализировали очерёдность и объём требований, подготовили документы для структурированного погашения.',
      result: 'Выработан и согласован план погашения, исключающий несоразмерное ограничение деятельности компании.'
    }
  ];
  const faqs = [
    { q: 'Можно ли предъявить исполнительный лист напрямую в банк, минуя ФССП?', a: 'Да, если вам известны реквизиты счетов должника. Это значительно ускоряет процесс взыскания.' },
    { q: 'Пристав не принимает мер уже два месяца. Что делать?', a: 'Необходимо ознакомиться с материалами исполнительного производства и направить жалобу на бездействие пристава вышестоящему руководству или в суд.' },
    { q: 'Как обжаловать бездействие или незаконные действия пристава?', a: 'Жалоба подается в порядке подчиненности старшему судебному приставу либо оспаривается в судебном порядке (КАС РФ или АПК РФ).' },
    { q: 'Пристав арестовал расчётный счёт. Как продолжить деятельность?', a: 'Можно ходатайствовать о снятии ареста в части средств, необходимых для выплаты заработной платы и налогов, либо предложить взамен другое имущество для ареста.' },
    { q: 'Арестовали производственное оборудование. Можно ли его освободить?', a: 'Да, если доказать, что данное оборудование необходимо для основной деятельности компании и его арест приведет к остановке производства, либо оно находится в залоге у третьего лица.' },
    { q: 'На нашу компанию одновременно несколько исполнительных листов. Как быть?', a: 'Возбуждается сводное исполнительное производство. При недостаточности средств требования удовлетворяются в порядке очередности.' },
    { q: 'Можно ли получить отсрочку или рассрочку исполнения?', a: 'Да, для этого необходимо обратиться в суд, выдавший исполнительный документ, с мотивированным заявлением, доказав наличие обстоятельств, затрудняющих единовременное исполнение.' },
    { q: 'Какие документы нужно передать юристу для оценки ситуации?', a: 'Копию исполнительного документа, постановление о возбуждении исполнительного производства, переписку с ФССП (если есть) и документы по сути первоначального спора.' }
  ];

  return (
    <main>
      <Header />

      {/* BLOK 1: HERO */}
      <MilitaryHero
        breadcrumbs={
          <>
            <Link href="/">Главная</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <Link href="/biznesu/">Бизнесу</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span>Исполнительное производство для бизнеса</span>
          </>
        }
        superTitle="Юридическая помощь бизнесу"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>Исполнительное производство</span>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>для бизнеса в Липецке</span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Работаем на стороне взыскателя и должника. Оцениваем операционные риски, взаимодействуем с ФССП, банками и судами. Куратор направления — юрист с 13-летним опытом в службе судебных приставов.
          </span>
        }
        primaryCtaText="Обсудить ситуацию"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_primary_cta_b2b10"
        primaryCtaSubtext={
          <>Если ограничения уже мешают расчётам компании, позвоните: <a href="tel:+79103503111">+7 (910) 350-31-11</a></>
        }
        trustItems={[
          { text: 'Работаем на стороне взыскателя и должника' },
          { text: 'Оцениваем операционные риски бизнеса' },
          { text: 'Взаимодействуем с ФССП, банками, судами' },
          { text: 'Куратор — 13 лет опыта в ФССП' },
        ]}
        rightContent={
          <div className="hero-right-col" style={{ width: '100%', position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '150%', height: '150%', background: 'radial-gradient(circle, rgba(23, 50, 77, 0.12) 0%, rgba(23, 50, 77, 0.05) 30%, transparent 60%)', zIndex: 0, pointerEvents: 'none' }} />
            <div className="mockup-container" style={{ zIndex: 1 }}>
              <div style={{ position: 'absolute', width: '250px', height: '250px', background: 'var(--color-primary)', filter: 'blur(100px)', opacity: 0.15, borderRadius: '50%' }}></div>
              <div className="doc-wrapper-float-4"><div className="doc-sheet doc-sheet-4"><div style={{ padding: '40px 30px', height: '100%', display: 'flex', flexDirection: 'column' }}><div style={{ width: '160px', height: '8px', background: 'var(--color-primary)', margin: '0 auto 40px auto' }}></div><div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}><div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div><div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div><div style={{ width: '60%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div></div></div></div></div>
              <div className="doc-wrapper-float-3"><div className="doc-sheet doc-sheet-3"><div style={{ padding: '40px 30px', height: '100%', display: 'flex', flexDirection: 'column' }}><div style={{ width: '140px', height: '8px', background: 'var(--color-primary)', margin: '0 auto 40px auto' }}></div><div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}><div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div><div style={{ width: '95%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div><div style={{ width: '80%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div></div></div></div></div>
              <div className="doc-wrapper-float-2"><div className="doc-sheet doc-sheet-2"><div style={{ padding: '30px 25px', height: '100%', display: 'flex', flexDirection: 'column' }}><div style={{ width: '160px', height: '8px', background: 'var(--color-primary)', margin: '0 auto 20px auto' }}></div><div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}><div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}><div style={{ width: '40%', height: '4px', background: 'rgba(23,50,77,0.2)' }}></div><div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div></div></div><div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '10px', borderTop: '1px dashed rgba(23,50,77,0.1)' }}><div><div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.5)' }}>ПОСТАНОВЛЕНИЕ ФССП</div><div style={{ width: '80px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '10px' }}></div></div><div><div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.5)' }}>АКТ АРЕСТА</div><div style={{ width: '80px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '10px' }}></div></div></div></div></div></div>
              <div className="doc-wrapper-float-1"><div className="doc-sheet doc-sheet-1"><div style={{ padding: '30px 25px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(23,50,77,0.2)', paddingBottom: '12px', marginBottom: '20px' }}><img src="/images/logo_dark.png" alt="" style={{ width: '60px', height: 'auto', opacity: 0.8 }} /></div><div style={{ width: '120px', height: '8px', background: 'var(--color-deep-blue)', margin: '0 auto 20px auto' }}></div><div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '10px', borderTop: '1px solid rgba(23,50,77,0.2)' }}><div><div style={{ fontSize: '10px', fontWeight: 'bold', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)' }}>ИСПОЛНИТЕЛЬНЫЙ ЛИСТ</div><div style={{ fontSize: '8px', color: 'rgba(23,50,77,0.6)' }}>Подлежит исполнению</div></div><div style={{ width: '45px', height: '45px', borderRadius: '50%', border: '1.5px solid #17375E', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-15deg)', opacity: 0.85 }}><div style={{ width: '37px', height: '37px', borderRadius: '50%', border: '0.5px dashed #17375E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ fontSize: '7px', fontWeight: 'bold', color: '#17375E', textAlign: 'center', lineHeight: 1.1 }}>УДОВЛЕТВОРЕНО</span></div></div></div></div></div></div>
            </div>
          </div>
        }
      />

      {/* BLOK 2: RISKI */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">С какими рисками <span className="highlight">сталкивается бизнес</span></h2>
            <p className="section-subtitle">
              В исполнительном производстве промедление грозит реальными финансовыми потерями как для должника, так и для взыскателя.
            </p>
          </div>
          
          <div className="grid grid-3" style={{ gap: '28px' }}>
            {[
              { tag: 'Риск блокировки', title: 'Арест расчётных счетов', desc: 'Приостановка платежей, невозможность выдачи зарплаты и расчётов с контрагентами.' },
              { tag: 'Риск изъятия', title: 'Арест имущества', desc: 'Изъятие оборудования, транспорта или товаров в обороте, остановка бизнес-процессов.' },
              { tag: 'Риск потери', title: 'Утрата активов', desc: 'Реализация имущества должника по заниженной стоимости на торгах.' },
              { tag: 'Риск руководства', title: 'Субсидиарная ответственность', desc: 'Привлечение директора и учредителей к ответственности по долгам компании.' },
              { tag: 'Риск репутации', title: 'Блокировка деятельности', desc: 'Падение доверия контрагентов, срыв действующих контрактов.' },
              { tag: 'Риск бездействия', title: 'Затягивание взыскания', desc: 'Если вы взыскатель — риск вывода активов должником из-за медлительности приставов.' }
            ].map((risk, i) => (
              <div key={i} className="hover-lift" style={{
                padding: '36px 30px',
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-primary)',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ marginBottom: '20px' }}>
                  <span style={{
                    background: 'rgba(193, 160, 102, 0.1)',
                    color: 'var(--color-gold)',
                    padding: '4px 12px',
                    fontSize: '13px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {risk.tag}
                  </span>
                </div>
                <h3 style={{ 
                  fontFamily: 'var(--font-serif)', 
                  fontSize: '22px', 
                  color: 'var(--color-text)',
                  marginBottom: '16px',
                  lineHeight: 1.3
                }}>
                  {risk.title}
                </h3>
                <p style={{ 
                  fontSize: '15px', 
                  color: 'var(--color-text-muted)', 
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  {risk.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOK 3: DVA SCENARIYA */}
      <section className="section bg-white" style={{ padding: '64px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, textWrap: 'balance' }}>
              Помощь взыскателю и защита компании-должника
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, lineHeight: 1.6, margin: 0 }}>
              Юрист по исполнительному производству помогает в обоих сценариях — разные задачи, один подход: анализ документов, чёткая стратегия, сопровождение до результата.
            </p>
          </div>
          <div className="grid grid-2" style={{ gap: '24px', marginBottom: '40px' }}>
            <div style={{ padding: '36px 32px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', borderRadius: '0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h3 style={{ margin: 0, fontSize: '22px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)' }}>Вы — взыскатель</h3>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>У вас есть судебное решение или иной исполнительный документ, но деньги не поступают. Пристав бездействует или должник уклоняется от исполнения.</p>
              <ul style={{ margin: 0, paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['Проверяем правильность оформления документа и сроки', 'Предъявляем лист напрямую в банк или в ФССП', 'Разыскиваем активы и счета должника', 'Контролируем действия пристава, обжалуем бездействие', 'Инициируем арест имущества и запрет регистрационных действий'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><polyline points="20 6 9 17 4 12" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ padding: '36px 32px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-gold)', borderRadius: '0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h3 style={{ margin: 0, fontSize: '22px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)' }}>Ваша компания — должник</h3>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>На счёт или имущество компании наложен арест, ФССП предъявила требования или исполнительный лист уже в работе. Нужно минимизировать урон для деятельности.</p>
              <ul style={{ margin: 0, paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['Проверяем законность действий приставов и документов', 'Обжалуем незаконный арест счёта или имущества', 'Добиваемся отсрочки или рассрочки исполнения через суд', 'Защищаем имущество, необходимое для текущей деятельности', 'Выстраиваем стратегию при нескольких взыскателях'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><polyline points="20 6 9 17 4 12" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ display: 'inline-block' }}>Оценить документы и риски</a>
          </div>
        </div>
      </section>

      {/* BLOK 4: USLUGI */}
      <section className="section bg-light" style={{ padding: '64px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, textWrap: 'balance', maxWidth: '780px' }}>
            Услуги по исполнительному производству для бизнеса
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, lineHeight: 1.6, margin: '0 0 40px', maxWidth: '780px' }}>
            Выберите направление, наиболее близкое к вашей задаче. Если ситуация затрагивает оба — опишите её в форме.
          </p>
          <div className="grid grid-2" style={{ gap: '24px' }}>
            <a href="/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/vzyskanie-po-ispolnitelnomu-listu-s-yuridicheskogo-lica/" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
              <div className="card service-card" style={{ height: '100%', minHeight: '210px', padding: '28px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderTop: '3px solid var(--color-primary)', cursor: 'pointer' }}>
                <div>
                  <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>Взыскание по исполнительному листу с юридического лица</h3>
                  <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>Предъявление листа в банк или ФССП, контроль действий пристава, поиск активов должника, обжалование бездействия — сопровождение взыскателя на всех этапах.</p>
                </div>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600 }}>
                  <span>Подробнее</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </a>
            <a href="/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/obzhalovanie-dejstvij-pristavov-dlya-biznesa/" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
              <div className="card service-card" style={{ height: '100%', minHeight: '210px', padding: '28px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderTop: '3px solid var(--color-primary)', cursor: 'pointer' }}>
                <div>
                  <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>Обжалование действий приставов для бизнеса</h3>
                  <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>Жалобы на незаконный арест имущества и счёта, бездействие пристава, нарушение сроков и порядка исполнительных действий. Защита компании-должника.</p>
                </div>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600 }}>
                  <span>Подробнее</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* BLOK 5: CHTO DELAET YURIST */}
      <section className="section bg-white" style={{ padding: '64px 0' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, textWrap: 'balance', maxWidth: '780px' }}>
            Что делает юрист по исполнительному производству
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, lineHeight: 1.6, margin: '0 0 40px', maxWidth: '780px' }}>
            Перечень конкретных действий зависит от роли клиента (взыскатель или должник) и стадии производства.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '32px' }}>
            {[
              { num: '01', title: 'Проверяет документы', desc: 'Изучает исполнительный документ, постановления ФССП, проверяет сроки и соответствие требованиям закона.' },
              { num: '02', title: 'Предъявляет лист в банк или ФССП', desc: 'Выбирает наиболее эффективный способ предъявления, формирует комплект документов и контролирует исполнение.' },
              { num: '03', title: 'Ведёт работу с приставом', desc: 'Контролирует ход производства, инициирует розыск активов, ходатайствует об аресте имущества и счетов должника.' },
              { num: '04', title: 'Обжалует незаконные действия', desc: 'Готовит жалобы на бездействие, незаконный арест или нарушение порядка действий — вышестоящему приставу или в суд.' },
              { num: '05', title: 'Защищает имущество должника', desc: 'Добивается снятия ареста с имущества, необходимого для работы компании, ходатайствует об исключении из описи.' },
              { num: '06', title: 'Добивается рассрочки или отсрочки', desc: 'Готовит заявление в суд об отсрочке или рассрочке исполнения с обоснованием обстоятельств и доказательной базой.' },
              { num: '07', title: 'Информирует о ходе производства', desc: 'Регулярно сообщает об изменениях ситуации, новых постановлениях и следующих шагах.' },
            ].map((item) => (
              <div key={item.num} style={{ display: 'flex', gap: '20px', padding: '24px', border: '1px solid var(--color-border)', borderLeft: '3px solid var(--color-primary)', background: 'var(--color-white)', borderRadius: '0' }}>
                <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--color-primary)', fontFamily: 'var(--font-serif)', lineHeight: 1, flexShrink: 0, opacity: 0.35, minWidth: '40px' }}>{item.num}</div>
                <div>
                  <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 700, color: 'var(--color-deep-blue)', lineHeight: 1.3 }}>{item.title}</h3>
                  <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, maxWidth: '720px', margin: 0 }}>
            Точный состав работы и стоимость согласовываются после изучения документов и уточнения задачи.
          </p>
        </div>
      </section>

      {/* BLOK 6: KURATOR */}
      <SpecialistBlock
        title="Куратор направления"
        name="Марина Валерьевна Смольянинова"
        position="Ведущий юрист ЮК «Де-Юре»"
        imageUrl="/images/smolyaninova.jpg"
        description={[
          '13 лет в Федеральной службе судебных приставов: знает систему изнутри — понимает, какие инструменты реально работают, а какие создают только видимость.',
          'Специализируется на исполнительном производстве с участием организаций: взыскание по исполнительным листам, защита имущества должника, обжалование действий приставов.',
          'Опыт работы с многоуровневыми производствами: несколько взыскателей, оспаривание постановлений в арбитражном суде, ходатайства об отсрочке и рассрочке исполнения.',
          'Сопровождает компании в Липецке и Липецкой области; возможен дистанционный формат работы по всей России.',
        ]}
        buttonText="Обсудить ситуацию с Мариной Валерьевной"
        buttonHref="#form"
      />

      {/* BLOK 7: KEYSY */}
      <CasesBlock
        title="Примеры дел из практики"
        showAllLink="/praktika/"
        showAllText="Смотреть все дела"
        showDemoWarning={true}
        cases={cases}
      />

      {/* BLOK 8: PROCESS */}
      <ProcessBlock
        title="Как проходит работа"
        subtitle="Работаем структурировано — вы знаете, что происходит на каждом этапе."
        steps={[
          { num: '01', title: 'Уточняем роль и ситуацию', desc: 'Выясняем, кто клиент — взыскатель или должник, на какой стадии находится производство, какие документы уже получены.' },
          { num: '02', title: 'Получаем документы', desc: 'Принимаем исполнительный документ, постановления ФССП, имеющиеся переписку и иные материалы.' },
          { num: '03', title: 'Проверяем и оцениваем', desc: 'Анализируем правильность оформления, сроки, законность действий приставов и риски для бизнеса.' },
          { num: '04', title: 'Согласуем стратегию', desc: 'Предлагаем план действий, определяем состав работы, стоимость и порядок взаимодействия.' },
          { num: '05', title: 'Готовим документы и действуем', desc: 'Направляем листы в банки или ФССП, подаём жалобы, ходатайства, заявления — в зависимости от задачи.' },
          { num: '06', title: 'Информируем о результате', desc: 'Сообщаем о каждом значимом изменении ситуации и следующих шагах по производству.' },
        ]}
      />

      {/* BLOK 9: STOIMOST */}
      <PricingBlock
        title="Форматы работы и стоимость"
        subtitle="Подберем оптимальный формат участия в зависимости от ваших задач"
        tiers={[
          {
            title: 'Консультация',
            subtitle: 'Анализ перспектив',
            price: 'от 5 000 ₽',
            features: [
              { name: 'Изучение документов', value: 'Да' },
              { name: 'Оценка рисков', value: 'Да' },
              { name: 'Письменное заключение', value: 'По запросу' },
              { name: 'Взаимодействие с ФССП', value: 'Нет' }
            ],
            buttonText: 'Обсудить ситуацию',
            buttonHref: '#form'
          },
          {
            title: 'Разовые действия',
            subtitle: 'Точечная помощь',
            popular: true,
            price: 'от 15 000 ₽',
            features: [
              { name: 'Подготовка документов', value: 'Да' },
              { name: 'Подача ходатайств', value: 'Да' },
              { name: 'Жалоба на пристава', value: 'Да' },
              { name: 'Комплексное ведение', value: 'Нет' }
            ],
            buttonText: 'Обсудить ситуацию',
            buttonHref: '#form'
          },
          {
            title: 'Сопровождение',
            subtitle: 'Под ключ',
            price: 'от 50 000 ₽',
            features: [
              { name: 'Полный анализ', value: 'Да' },
              { name: 'Все процессуальные действия', value: 'Да' },
              { name: 'Участие в суде', value: 'Да' },
              { name: 'Контроль ФССП', value: 'Да' }
            ],
            buttonText: 'Обсудить ситуацию',
            buttonHref: '#form'
          }
        ]}
      />

      {/* BLOK 10: FAQ */}
      <FAQBlock
        superTitle="Частые вопросы"
        title={<><span>Ответы на</span> <br /><span>частые вопросы</span></>}
        subtitle="Об исполнительном производстве для бизнеса"
        ctaText="Обсудить ситуацию"
        ctaLink="#form"
        faqs={faqs}
      />

      {/* BLOK 11: FORMA */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px', padding: '80px 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>Связаться с нами</span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                Обсудите ситуацию с юристом
              </h2>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '28px', textWrap: 'balance' }}>
                Расскажите о задаче — юрист изучит документы, оценит ситуацию и предложит конкретные шаги. Консультация проводится по телефону или очно в офисе.
              </p>
              <a href="tel:+79103503111" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '24px', fontWeight: 'bold', color: 'var(--color-deep-blue)', textDecoration: 'none', marginBottom: '16px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.47 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 5.55 5.55l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +7 (910) 350-31-11
              </a>
              <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: '12px' }}>
                <strong>Адрес:</strong> г. Липецк, пл. Плеханова, д. 1, оф. 213
              </p>
              <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                Если вы оставите заявку вечером или в выходной день, мы перезвоним в ближайший рабочий день.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
              <div className="grazhdanam-contact-card" style={{ background: 'var(--gradient-cream)', padding: '40px', borderRadius: '0', boxShadow: '0 8px 24px rgba(0,0,0,0.15)', border: '1px solid rgba(0,0,0,0.06)' }}>
                <ContactsForm
                  title="Написать нам"
                  subtitle=""
                  buttonText="Обсудить ситуацию"
                  commentPlaceholder="Укажите роль компании (взыскатель/должник) и что происходит сейчас…"
                  subtext="Если вы оставите заявку вечером или в выходной день, мы перезвоним в ближайший рабочий день."
                  hiddenFields={[
                    { name: 'pageId', value: 'B2B-10' },
                    { name: 'templateId', value: 'T03' },
                    { name: 'practice', value: 'Исполнительное производство для бизнеса' }
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
