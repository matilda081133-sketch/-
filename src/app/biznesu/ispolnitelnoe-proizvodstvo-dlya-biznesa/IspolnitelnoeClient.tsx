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
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>Исполнительное производство</span>{' '}
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
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              Если ограничения уже мешают
            </span>{' '}
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap' }}>
              расчётам компании, позвоните: <a href="tel:+79103503111" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (910) 350-31-11</a>
            </span>
          </span>
        }
        trustItems={[
          { text: 'Работаем на стороне взыскателя и должника' },
          { text: 'Оцениваем операционные риски бизнеса' },
          { text: 'Взаимодействуем с ФССП, банками, судами' },
          { text: 'Куратор — 13 лет опыта в ФССП' },
        ]}
        imageUrl="/images/smolyaninova.jpg"
        imageObjectPosition="50% -75px"
        imageName="Марина Валерьевна Смольянинова"
        imageSubtitle="Ведущий юрист ЮК «Де-Юре», куратор направления «Исполнительное производство» (13 лет опыта в ФССП)"
      />

      {/* BLOK 2: RISKI */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 className="with-accent" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'inline-block' }}>С какими рисками</span> <br />
              <span style={{ display: 'inline-block' }}>сталкивается бизнес</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>В&nbsp;исполнительном производстве промедление грозит</span> <br />
              <span style={{ display: 'inline-block' }}>реальными финансовыми потерями как для&nbsp;должника, так и&nbsp;для&nbsp;взыскателя.</span>
            </p>
          </div>
          
          <div className="grid grid-3" style={{ gap: '28px' }}>
            {[
              { 
                tag: 'Риск блокировки', 
                title: <><span style={{ display: 'inline-block' }}>Арест</span> <span style={{ display: 'inline-block' }}>расчётных счетов</span></>, 
                desc: <><span style={{ display: 'inline-block' }}>Приостановка платежей,</span> <span style={{ display: 'inline-block' }}>невозможность выдачи зарплаты</span> <span style={{ display: 'inline-block' }}>и&nbsp;расчётов с&nbsp;контрагентами.</span></> 
              },
              { 
                tag: 'Риск изъятия', 
                title: <><span style={{ display: 'inline-block' }}>Арест</span> <span style={{ display: 'inline-block' }}>имущества</span></>, 
                desc: <><span style={{ display: 'inline-block' }}>Изъятие оборудования, транспорта</span> <span style={{ display: 'inline-block' }}>или&nbsp;товаров в&nbsp;обороте,</span> <span style={{ display: 'inline-block' }}>остановка бизнес-процессов.</span></> 
              },
              { 
                tag: 'Риск потери', 
                title: <><span style={{ display: 'inline-block' }}>Утрата</span> <span style={{ display: 'inline-block' }}>активов</span></>, 
                desc: <><span style={{ display: 'inline-block' }}>Реализация имущества должника</span> <span style={{ display: 'inline-block' }}>по&nbsp;заниженной стоимости</span> <span style={{ display: 'inline-block' }}>на&nbsp;торгах.</span></> 
              },
              { 
                tag: 'Риск возврата документа', 
                title: <><span style={{ display: 'inline-block' }}>Исполнительный лист</span> <span style={{ display: 'inline-block' }}>вернули без взыскания</span></>, 
                desc: 'Пристав окончил производство или вернул исполнительный документ, хотя не все сведения о счетах и имуществе должника были проверены.'
              },
              { 
                tag: 'Риск дополнительных расходов', 
                title: <><span style={{ display: 'inline-block' }}>Начислен</span> <span style={{ display: 'inline-block' }}>исполнительский сбор</span></>, 
                desc: 'Компания получила постановление о взыскании исполнительского сбора либо не согласна с его размером и основаниями начисления.'
              },
              { 
                tag: 'Риск бездействия', 
                title: <><span style={{ display: 'inline-block' }}>Затягивание</span> <span style={{ display: 'inline-block' }}>взыскания</span></>, 
                desc: <><span style={{ display: 'inline-block' }}>Риск вывода активов должником</span> <span style={{ display: 'inline-block' }}>из-за&nbsp;медлительности</span> <span style={{ display: 'inline-block' }}>судебных приставов.</span></> 
              }
            ].map((risk, i) => (
              <div key={i} className="hover-lift" style={{
                padding: '36px 30px',
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-primary)',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}>
                {/* Одинаковый фирменный фоновый векторный водяной знак */}
                <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.06, pointerEvents: 'none' }}>
                  <svg width="100" height="100" viewBox="0 0 24 24" fill="var(--color-deep-blue)">
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>

                <div style={{ 
                  fontSize: '12px', 
                  fontWeight: 700, 
                  color: 'var(--color-gold)', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.08em', 
                  marginBottom: '14px',
                  background: 'rgba(193, 160, 102, 0.1)',
                  padding: '4px 10px',
                  alignSelf: 'flex-start',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {risk.tag}
                </div>
                <h3 style={{ 
                  fontFamily: 'var(--font-serif)', 
                  fontSize: '17px', 
                  fontWeight: 600,
                  color: 'var(--color-deep-blue)',
                  margin: '0 0 14px 0',
                  lineHeight: 1.4,
                  position: 'relative',
                  zIndex: 1
                }}>
                  {risk.title}
                </h3>
                <p style={{ 
                  fontSize: '15px', 
                  color: 'var(--color-text-secondary)', 
                  lineHeight: 1.6,
                  margin: 0,
                  position: 'relative',
                  zIndex: 1
                }}>
                  {risk.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOK 3: DVA SCENARIYA */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              <span style={{ display: 'inline-block' }}>Помощь взыскателю</span> <br />
              <span style={{ display: 'inline-block' }}>и защита компании-должника</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Точный перечень зависит от роли компании и стадии дела. Для первичного</span> <br />
              <span style={{ display: 'inline-block' }}>анализа достаточно направить документы и материалы, которые уже есть.</span>
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
            {/* Карточка 1: Вы — взыскатель */}
            <div style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-primary)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0, paddingBottom: '12px', borderBottom: '1px solid rgba(23, 50, 77, 0.1)' }}>
                <span style={{ display: 'inline-block' }}>Вы — взыскатель</span>
              </h3>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                У вас есть судебное решение или исполнительный лист, но деньги не поступают. Пристав бездействует или должник скрывает активы.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Предъявление листа в банк или ФССП</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Выбираем наиболее быстрый способ взыскания, формируем комплект документов и контролируем списание средств.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Розыск счетов и активов контрагента</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Инициируем запросы в банки, Росреестр и ФНС для оперативного обнаружения и ареста имущества.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Контроль и обжалование бездействия пристава</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Пресекаем затягивание производства, подаём жалобы старшему приставу или в суд при нарушении сроков.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Карточка 2: Ваша компания — должник */}
            <div style={{
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-primary)',
              boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: 0, paddingBottom: '12px', borderBottom: '1px solid rgba(23, 50, 77, 0.1)' }}>
                <span style={{ display: 'inline-block' }}>Ваша компания — должник</span>
              </h3>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                На счёт или имущество компании наложен арест, ФССП предъявила требования. Нужно минимизировать урон для операционной деятельности.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Снятие неправомерного ареста со счетов</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Освобождаем средства для выплаты зарплаты, налогов и расчётов с контрагентами; защищаем оборудование.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Отсрочка или рассрочка исполнения в суде</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Готовим мотивированное заявление в арбитражный суд и добиваемся графика поэтапного погашения.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <div>
                    <strong style={{ display: 'block', fontSize: '16px', color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Защита при нескольких взыскателях</strong>
                    <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Выстраиваем законную очерёдность выплат и предотвращаем блокировку деятельности компании.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div style={{
            background: 'var(--color-white)',
            padding: '20px 28px',
            border: '1px solid var(--color-border)',
            borderLeft: '4px solid var(--color-gold)',
            boxShadow: '0 4px 16px rgba(23, 50, 77, 0.05)',
            fontSize: '15px',
            color: 'var(--color-deep-blue)',
            fontWeight: 500,
            lineHeight: 1.6
          }}>
            Если части документов нет, всё равно можно обратиться. Юрист определит, какие сведения необходимо получить <br />и как запросить недостающие материалы в ФССП или кредитных организациях.
          </div>
        </div>
      </section>

      {/* BLOK 4: USLUGI */}
      <section className="section bg-light" style={{ padding: '64px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <h2 className="with-accent" style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.25, maxWidth: '780px' }}>
            <span style={{ display: 'inline-block' }}>Услуги по&nbsp;исполнительному</span> <br />
            <span style={{ display: 'inline-block' }}>производству для&nbsp;бизнеса</span>
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, lineHeight: 1.6, margin: '0 0 40px', maxWidth: '780px' }}>
            <span style={{ display: 'inline-block' }}>Выберите направление, наиболее близкое к&nbsp;вашей задаче.</span> <br />
            <span style={{ display: 'inline-block' }}>Если ситуация затрагивает оба — опишите её в&nbsp;форме.</span>
          </p>
          <div className="grid grid-2" style={{ gap: '24px' }}>
            <a href="/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/vzyskanie-po-ispolnitelnomu-listu-s-yuridicheskogo-lica/" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
              <div className="card service-card" style={{ height: '100%', minHeight: '210px', padding: '28px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderTop: '3px solid var(--color-primary)', cursor: 'pointer', transition: 'all 0.35s ease' }}>
                <div>
                  <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>
                    <span style={{ display: 'inline-block' }}>Взыскание по исполнительному листу</span> <span style={{ display: 'inline-block' }}>с юридического лица</span>
                  </h3>
                  <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    <span style={{ display: 'inline-block' }}>Предъявление листа в банк или ФССП,</span> <span style={{ display: 'inline-block' }}>контроль действий пристава,</span> <span style={{ display: 'inline-block' }}>поиск активов должника,</span> <span style={{ display: 'inline-block' }}>обжалование бездействия —</span> <span style={{ display: 'inline-block' }}>сопровождение взыскателя на всех этапах.</span>
                  </p>
                </div>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, transition: 'all 0.35s ease' }}>
                  <span>Подробнее</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </a>
            <a href="/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/obzhalovanie-dejstvij-pristavov-dlya-biznesa/" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
              <div className="card service-card" style={{ height: '100%', minHeight: '210px', padding: '28px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderTop: '3px solid var(--color-primary)', cursor: 'pointer', transition: 'all 0.35s ease' }}>
                <div>
                  <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>
                    <span style={{ display: 'inline-block' }}>Обжалование действий приставов</span> <span style={{ display: 'inline-block' }}>для бизнеса</span>
                  </h3>
                  <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    <span style={{ display: 'inline-block' }}>Жалобы на незаконный арест</span> <span style={{ display: 'inline-block' }}>имущества и счёта,</span> <span style={{ display: 'inline-block' }}>бездействие пристава,</span> <span style={{ display: 'inline-block' }}>нарушение сроков</span> <span style={{ display: 'inline-block' }}>и порядка исполнительных действий.</span> <span style={{ display: 'inline-block' }}>Защита компании-должника.</span>
                  </p>
                </div>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, transition: 'all 0.35s ease' }}>
                  <span>Подробнее</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* BLOK 5: CHTO DELAET YURIST */}
      <section className="section" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              <span style={{ display: 'inline-block' }}>Что делает юрист</span> <br />
              <span style={{ display: 'inline-block' }}>по исполнительному производству</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Перечень конкретных процессуальных действий юриста</span> <br />
              <span style={{ display: 'inline-block' }}>для&nbsp;защиты интересов компании и&nbsp;достижения реального финансового результата.</span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', position: 'relative' }}>
            {[
              {
                title: <><span style={{ display: 'inline-block' }}>Проверяет документы</span> <br /><span style={{ display: 'inline-block' }}>и сроки</span></>,
                desc: 'Изучает исполнительный документ, постановления ФССП, проверяет процессуальные сроки и соответствие закону.'
              },
              {
                title: <><span style={{ display: 'inline-block' }}>Предъявляет лист</span> <br /><span style={{ display: 'inline-block' }}>в банк или ФССП</span></>,
                desc: 'Выбирает наиболее быстрый способ, формирует пакет документов и контролирует перечисление средств.'
              },
              {
                title: <><span style={{ display: 'inline-block' }}>Розыск счетов</span> <br /><span style={{ display: 'inline-block' }}>и имущества должника</span></>,
                desc: 'Инициирует официальные запросы в банки, Росреестр, ГИБДД для оперативного ареста активов.'
              },
              {
                title: <><span style={{ display: 'inline-block' }}>Обжалует незаконные</span> <br /><span style={{ display: 'inline-block' }}>действия приставов</span></>,
                desc: 'Подаёт жалобы на бездействие или неправомерные аресты старшему приставу или в суд.'
              },
              {
                title: <><span style={{ display: 'inline-block' }}>Защищает активы</span> <br /><span style={{ display: 'inline-block' }}>компании-должника</span></>,
                desc: 'Снимает арест со счетов для выплаты зарплаты и налогов, защищает производственное оборудование.'
              },
              {
                title: <><span style={{ display: 'inline-block' }}>Добивается отсрочки</span> <br /><span style={{ display: 'inline-block' }}>или рассрочки в суде</span></>,
                desc: 'Формирует доказательную базу, готовит заявление в суд и добивается поэтапного исполнения.'
              }
            ].map((act, idx) => (
              <div key={idx} className="hover-lift" style={{
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                padding: '36px 30px 32px 30px',
                border: '1px solid var(--color-border)',
                borderTop: '4px solid var(--color-gold)',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}>
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
                  {act.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {act.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOK 6: KURATOR */}
      <SpecialistBlock 
        title="Куратор направления"
        name="Марина Валерьевна Смольянинова"
        position={<>Ведущий юрист ЮК «Де-Юре»,<br />куратор направления «Исполнительное производство»</>}
        imageUrl="/images/smolyaninova.jpg"
        profileHref="/specialisty/smolyaninova-marina-valerevna/"
        profileText="Подробнее о Марине Валерьевне Смольяниновой →"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Марина Валерьевна Смольянинова курирует сопровождение исполнительного производства для юридических лиц и индивидуальных предпринимателей. Выстраивает стратегию защиты активов компании, взаимодействия со службой судебных приставов и банками, оспаривания незаконных действий и возврата задолженности.
          </span>,
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>13 лет опыта работы в Федеральной службе судебных приставов (ФССП)</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Специализация на защите бизнеса и многоуровневых взысканиях</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Практика оспаривания постановлений и отсрочки исполнения в судах</span>
            </li>
          </ul>
        ]}
        buttonText="Задать вопрос Марине Валерьевне"
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
        disclaimer="Точная стоимость зависит от роли компании (взыскатель или должник), объёма и полноты документов, необходимости совершения отдельных действий или комплексного ведения производства. Марина Валерьевна Смольянинова оценит объём работы и назовёт стоимость до заключения договора."
        guaranteeText="Если после консультации заключается договор на дальнейшую работу, стоимость консультации засчитывается в оплату по договору."
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
                <span style={{ display: 'inline-block' }}>Обсудите ситуацию</span> <br />
                <span style={{ display: 'inline-block' }}>с юристом</span>
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
