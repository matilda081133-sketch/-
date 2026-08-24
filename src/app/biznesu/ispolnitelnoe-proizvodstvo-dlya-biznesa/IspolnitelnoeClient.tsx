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
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', width: '100%' }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '130%',
              height: '130%',
              background: 'radial-gradient(circle, rgba(193, 160, 102, 0.15) 0%, rgba(23, 50, 77, 0.04) 40%, transparent 70%)',
              zIndex: 0,
              pointerEvents: 'none'
            }} />

            <svg style={{ position: 'absolute', top: '40%', left: '85%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', opacity: 0.09, zIndex: 0, pointerEvents: 'none' }} viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="0.6">
              <path d="M3 21h18 M4 21v-2h16v2 M6 19V9 M10 19V9 M14 19V9 M18 19V9 M12 4l-9 5h18l-9-5z M4 9h16"/>
            </svg>

            <div className="mockup-container" style={{ zIndex: 1, margin: 0 }}>
              <div style={{ position: 'absolute', width: '220px', height: '220px', background: 'var(--color-primary)', filter: 'blur(90px)', opacity: 0.12, borderRadius: '50%' }}></div>
              
              {/* Sheet 4: Постановление ФССП */}
              <div className="doc-wrapper-float-4">
                <div className="doc-sheet doc-sheet-4">
                  <div style={{ padding: '35px 25px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '25px' }}>
                      <div style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        ФССП РОССИИ<br/>
                        <span style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)' }}>ИП № 94821/26/48001</span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end' }}>
                        <div style={{ width: '80px', height: '3px', background: 'rgba(23,50,77,0.2)' }}></div>
                        <div style={{ width: '50px', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>
                    </div>
                    <div style={{ width: '140px', height: '6px', background: 'var(--color-primary)', margin: '0 auto 20px auto' }}></div>
                    <div style={{ fontSize: '7px', fontWeight: 'bold', color: 'var(--color-deep-blue)', textAlign: 'center', marginBottom: '14px', fontFamily: 'var(--font-serif)' }}>
                      ПОСТАНОВЛЕНИЕ О ВОЗБУЖДЕНИИ ИП
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ width: '100%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      <div style={{ width: '90%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      <div style={{ width: '75%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sheet 3: Арест счетов и имущества */}
              <div className="doc-wrapper-float-3">
                <div className="doc-sheet doc-sheet-3">
                  <div style={{ padding: '35px 25px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ position: 'absolute', top: '22px', left: '22px', width: '95px', height: '28px', border: '1.5px solid rgba(23, 50, 77, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-4deg)' }}>
                      <span style={{ fontSize: '5px', fontWeight: 'bold', color: 'rgba(23,50,77,0.7)', fontFamily: 'var(--font-serif)', textAlign: 'center', lineHeight: 1.1 }}>
                        УФССП ПО ЛИПЕЦКОЙ ОБЛ.<br/>ОСП ПО ОКТЯБРЬСКОМУ Р-НУ
                      </span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '30px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end' }}>
                        <div style={{ width: '90px', height: '3px', background: 'rgba(23,50,77,0.2)' }}></div>
                        <div style={{ width: '60px', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>
                    </div>
                    <div style={{ width: '130px', height: '6px', background: 'var(--color-primary)', margin: '0 auto 16px auto' }}></div>
                    <div style={{ fontSize: '7px', fontWeight: 'bold', color: 'var(--color-deep-blue)', textAlign: 'center', marginBottom: '14px', fontFamily: 'var(--font-serif)' }}>
                      ПОСТАНОВЛЕНИЕ ОБ АРЕСТЕ СЧЕТОВ
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <div style={{ width: '100%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      <div style={{ width: '95%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      <div style={{ width: '80%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                    </div>
                    <div style={{ marginTop: 'auto', paddingTop: '10px', borderTop: '1px dashed rgba(23,50,77,0.15)' }}>
                      <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)' }}>Банк получателя: ПАО «Сбербанк» | Р/с должника арестован</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sheet 2: Исполнительный лист Арбитражного суда */}
              <div className="doc-wrapper-float-2">
                <div className="doc-sheet doc-sheet-2">
                  <div style={{ padding: '28px 22px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ position: 'absolute', top: '20px', left: '20px', width: '110px', height: '32px', border: '1px solid #C1A066', color: '#C1A066', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-4deg)', opacity: 0.95 }}>
                      <div style={{ fontFamily: 'var(--font-serif)', fontSize: '5px', textAlign: 'center', fontWeight: 'bold', lineHeight: 1.2 }}>
                        АРБИТРАЖНЫЙ СУД<br/>
                        ДЕЛО № А36-1284/2026
                      </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '24px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end' }}>
                        <div style={{ width: '85px', height: '3px', background: 'rgba(23,50,77,0.2)' }}></div>
                        <div style={{ width: '45px', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>
                    </div>

                    <div style={{ width: '140px', height: '6px', background: 'var(--color-primary)', margin: '0 auto 12px auto' }}></div>
                    
                    <div style={{ fontSize: '8px', fontWeight: 'bold', color: 'var(--color-deep-blue)', textAlign: 'center', marginBottom: '4px', fontFamily: 'var(--font-serif)' }}>
                      ИСПОЛНИТЕЛЬНЫЙ ЛИСТ
                    </div>
                    <div style={{ fontSize: '6px', color: 'var(--color-gold)', textAlign: 'center', fontWeight: 'bold', marginBottom: '14px', letterSpacing: '0.05em' }}>
                      СЕРИЯ ФС № 03948210
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '5px', color: 'rgba(23,50,77,0.8)' }}>
                        <span>Взыскатель: ООО «ЮниТрейд»</span>
                        <span>Сумма: 3 850 000 ₽</span>
                      </div>
                      <div style={{ width: '100%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      <div style={{ width: '90%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                    </div>

                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '8px', borderTop: '1px dashed rgba(23,50,77,0.15)' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                        <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Судья арбитражного суда:</div>
                        <div style={{ width: '70px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '6px' }}></div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                        <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Гербовая печать суда:</div>
                        <div style={{ width: '40px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '6px' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sheet 1 (Front): Карточка процесса взыскания Де-Юре */}
              <div className="doc-wrapper-float-1">
                <div className="doc-sheet doc-sheet-1">
                  <div style={{ padding: '24px 20px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(23,50,77,0.2)', paddingBottom: '10px', marginBottom: '12px' }}>
                      <img src="/images/logo_dark.png" alt="Де-Юре" style={{ width: '55px', height: 'auto', opacity: 0.9 }} />
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', alignItems: 'flex-end' }}>
                        <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', letterSpacing: '0.05em' }}>ИСПОЛНИТЕЛЬНОЕ ПРОИЗВОДСТВО</span>
                        <span style={{ fontSize: '5px', color: 'var(--color-primary)', fontWeight: 600 }}>ЮК «Де-Юре» Липецк</span>
                      </div>
                    </div>

                    {/* Visual Box: Статус и этапы взыскания */}
                    <div style={{ 
                      width: '100%', 
                      background: 'rgba(247, 244, 237, 0.75)', 
                      border: '1px solid rgba(193, 160, 102, 0.35)', 
                      borderRadius: '2px', 
                      marginBottom: '12px',
                      padding: '10px 12px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', textTransform: 'uppercase' }}>Ход взыскания</span>
                        <span style={{ fontSize: '6px', fontWeight: 'bold', color: '#1B5E20', background: 'rgba(76, 175, 80, 0.15)', padding: '1px 5px', borderRadius: '2px' }}>В ПРОЦЕССЕ ВЗЫСКАНИЯ</span>
                      </div>

                      {/* Steps tracker SVG */}
                      <svg width="100%" height="48" viewBox="0 0 220 48" fill="none">
                        {/* Step lines */}
                        <line x1="20" y1="16" x2="80" y2="16" stroke="#C1A066" strokeWidth="2" />
                        <line x1="80" y1="16" x2="140" y2="16" stroke="#C1A066" strokeWidth="2" />
                        <line x1="140" y1="16" x2="200" y2="16" stroke="#C1A066" strokeWidth="2" strokeDasharray="3 3" />

                        {/* Node 1 */}
                        <circle cx="20" cy="16" r="6" fill="#10273B" />
                        <text x="20" y="19" fill="#FFF" fontSize="6" fontWeight="bold" textAnchor="middle">✓</text>
                        <text x="20" y="32" fill="#10273B" fontSize="5" fontWeight="bold" textAnchor="middle">Исполн. лист</text>

                        {/* Node 2 */}
                        <circle cx="80" cy="16" r="6" fill="#10273B" />
                        <text x="80" y="19" fill="#FFF" fontSize="6" fontWeight="bold" textAnchor="middle">✓</text>
                        <text x="80" y="32" fill="#10273B" fontSize="5" fontWeight="bold" textAnchor="middle">Запрос в банк</text>

                        {/* Node 3 */}
                        <circle cx="140" cy="16" r="6" fill="#C1A066" />
                        <text x="140" y="19" fill="#FFF" fontSize="6" fontWeight="bold" textAnchor="middle">✓</text>
                        <text x="140" y="32" fill="#10273B" fontSize="5" fontWeight="bold" textAnchor="middle">Арест счёта</text>

                        {/* Node 4 */}
                        <circle cx="200" cy="16" r="6" fill="#FFF" stroke="#C1A066" strokeWidth="1.5" />
                        <circle cx="200" cy="16" r="2.5" fill="#C1A066" />
                        <text x="200" y="32" fill="#10273B" fontSize="5" fontWeight="bold" textAnchor="middle">Выплата</text>
                      </svg>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#FFFFFF', padding: '5px 8px', border: '1px solid rgba(23,50,77,0.08)' }}>
                        <span style={{ fontSize: '6px', color: 'var(--color-text-secondary)' }}>Сумма к взысканию:</span>
                        <span style={{ fontSize: '7px', fontWeight: 'bold', color: 'var(--color-deep-blue)' }}>3 850 000 ₽</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '8px' }}>
                      <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C1A066', flexShrink: 0 }}></div>
                        <span style={{ fontSize: '6px', color: 'var(--color-deep-blue)', fontWeight: 500 }}>Полный контроль за действиями судебных приставов</span>
                      </div>
                      <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C1A066', flexShrink: 0 }}></div>
                        <span style={{ fontSize: '6px', color: 'var(--color-deep-blue)', fontWeight: 500 }}>Защита счетов и активов компании от блокировки</span>
                      </div>
                    </div>

                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '8px', borderTop: '1px solid rgba(23,50,77,0.2)' }}>
                      <div>
                        <div style={{ fontSize: '9px', fontWeight: 'bold', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)' }}>ООО ЮК «ДЕ-ЮРЕ»</div>
                        <div style={{ fontSize: '7px', color: 'rgba(23,50,77,0.6)' }}>ИНН 4800009680</div>
                      </div>
                      <div style={{ width: '42px', height: '42px', borderRadius: '50%', border: '1.5px solid #17375E', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-12deg)', opacity: 0.9 }}>
                        <div style={{ width: '34px', height: '34px', borderRadius: '50%', border: '0.5px dashed #17375E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <span style={{ fontSize: '6px', fontWeight: 'bold', color: '#17375E', textAlign: 'center', lineHeight: 1.1 }}>ДЕ-ЮРЕ<br/>ЛИПЕЦК</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      />

      {/* BLOK 2: RISKI */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'inline-block' }}>С какими рисками</span> <br />
              <span style={{ display: 'inline-block' }}>сталкивается бизнес</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>В&nbsp;исполнительном производстве промедление</span> <span style={{ display: 'inline-block' }}>грозит реальными финансовыми потерями</span> <br />
              <span style={{ display: 'inline-block' }}>как для&nbsp;должника,</span> <span style={{ display: 'inline-block' }}>так и&nbsp;для&nbsp;взыскателя.</span>
            </p>
          </div>
          
          <div className="grid grid-3" style={{ gap: '28px' }}>
            {[
              { 
                tag: 'Риск блокировки', 
                title: <><span style={{ display: 'inline-block' }}>Арест</span> <span style={{ display: 'inline-block' }}>расчётных счетов</span></>, 
                desc: <><span style={{ display: 'inline-block' }}>Приостановка платежей,</span> <span style={{ display: 'inline-block' }}>невозможность выдачи зарплаты</span> <span style={{ display: 'inline-block' }}>и&nbsp;расчётов с&nbsp;контрагентами.</span></>,
                icon: (
                  <svg width="110" height="110" viewBox="0 0 24 24" fill="var(--color-deep-blue)">
                    <path d="M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM3 8h18v2H3V8zm0 8v-4h18v4H3z"/>
                  </svg>
                )
              },
              { 
                tag: 'Риск изъятия', 
                title: <><span style={{ display: 'inline-block' }}>Арест</span> <span style={{ display: 'inline-block' }}>имущества</span></>, 
                desc: <><span style={{ display: 'inline-block' }}>Изъятие оборудования, транспорта</span> <span style={{ display: 'inline-block' }}>или&nbsp;товаров в&nbsp;обороте,</span> <span style={{ display: 'inline-block' }}>остановка бизнес-процессов.</span></>,
                icon: (
                  <svg width="110" height="110" viewBox="0 0 24 24" fill="var(--color-deep-blue)">
                    <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                  </svg>
                )
              },
              { 
                tag: 'Риск потери', 
                title: <><span style={{ display: 'inline-block' }}>Утрата</span> <span style={{ display: 'inline-block' }}>активов</span></>, 
                desc: <><span style={{ display: 'inline-block' }}>Реализация имущества должника</span> <span style={{ display: 'inline-block' }}>по&nbsp;заниженной стоимости</span> <span style={{ display: 'inline-block' }}>на&nbsp;торгах.</span></>,
                icon: (
                  <svg width="110" height="110" viewBox="0 0 24 24" fill="var(--color-deep-blue)">
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                )
              },
              { 
                tag: 'Риск руководства', 
                title: <><span style={{ display: 'inline-block' }}>Субсидиарная</span> <span style={{ display: 'inline-block' }}>ответственность</span></>, 
                desc: <><span style={{ display: 'inline-block' }}>Привлечение директора</span> <span style={{ display: 'inline-block' }}>и&nbsp;учредителей к&nbsp;ответственности</span> <span style={{ display: 'inline-block' }}>по&nbsp;долгам компании.</span></>,
                icon: (
                  <svg width="110" height="110" viewBox="0 0 24 24" fill="var(--color-deep-blue)">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                  </svg>
                )
              },
              { 
                tag: 'Риск репутации', 
                title: <><span style={{ display: 'inline-block' }}>Блокировка</span> <span style={{ display: 'inline-block' }}>деятельности</span></>, 
                desc: <><span style={{ display: 'inline-block' }}>Падение доверия контрагентов,</span> <span style={{ display: 'inline-block' }}>срыв действующих</span> <span style={{ display: 'inline-block' }}>контрактов.</span></>,
                icon: (
                  <svg width="110" height="110" viewBox="0 0 24 24" fill="var(--color-deep-blue)">
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                  </svg>
                )
              },
              { 
                tag: 'Риск бездействия', 
                title: <><span style={{ display: 'inline-block' }}>Затягивание</span> <span style={{ display: 'inline-block' }}>взыскания</span></>, 
                desc: <><span style={{ display: 'inline-block' }}>Риск вывода активов должником</span> <span style={{ display: 'inline-block' }}>из-за&nbsp;медлительности</span> <span style={{ display: 'inline-block' }}>судебных приставов.</span></>,
                icon: (
                  <svg width="110" height="110" viewBox="0 0 24 24" fill="var(--color-deep-blue)">
                    <path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"/>
                  </svg>
                )
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
                {/* Фоновый векторный водяной знак */}
                <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.06, pointerEvents: 'none' }}>
                  {risk.icon}
                </div>

                <div style={{ marginBottom: '20px', position: 'relative', zIndex: 1 }}>
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
                  color: 'var(--color-deep-blue)',
                  marginBottom: '16px',
                  lineHeight: 1.3,
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
      <section className="section bg-white" style={{ padding: '64px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Помощь взыскателю</span> <br />
              <span style={{ display: 'inline-block' }}>и защита компании-должника</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, lineHeight: 1.6, margin: 0, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Юрист по&nbsp;исполнительному производству</span> <span style={{ display: 'inline-block' }}>помогает в&nbsp;обоих сценариях:</span> <span style={{ display: 'inline-block' }}>анализ документов, чёткая стратегия</span> <span style={{ display: 'inline-block' }}>и&nbsp;сопровождение до&nbsp;результата.</span>
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
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.25, maxWidth: '780px' }}>
            <span style={{ display: 'inline-block' }}>Услуги по&nbsp;исполнительному</span> <br />
            <span style={{ display: 'inline-block' }}>производству для&nbsp;бизнеса</span>
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, lineHeight: 1.6, margin: '0 0 40px', maxWidth: '780px' }}>
            Выберите направление, наиболее близкое к вашей задаче. Если ситуация затрагивает оба — опишите её в форме.
          </p>
          <div className="grid grid-2" style={{ gap: '24px' }}>
            <a href="/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/vzyskanie-po-ispolnitelnomu-listu-s-yuridicheskogo-lica/" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
              <div className="card service-card" style={{ height: '100%', minHeight: '210px', padding: '28px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderTop: '3px solid var(--color-primary)', cursor: 'pointer' }}>
                <div>
                  <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>
                    <span style={{ display: 'inline-block' }}>Взыскание по исполнительному листу</span> <span style={{ display: 'inline-block' }}>с юридического лица</span>
                  </h3>
                  <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    <span style={{ display: 'inline-block' }}>Предъявление листа в банк или ФССП,</span> <span style={{ display: 'inline-block' }}>контроль действий пристава,</span> <span style={{ display: 'inline-block' }}>поиск активов должника,</span> <span style={{ display: 'inline-block' }}>обжалование бездействия —</span> <span style={{ display: 'inline-block' }}>сопровождение взыскателя на всех этапах.</span>
                  </p>
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
                  <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>
                    <span style={{ display: 'inline-block' }}>Обжалование действий приставов</span> <span style={{ display: 'inline-block' }}>для бизнеса</span>
                  </h3>
                  <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    <span style={{ display: 'inline-block' }}>Жалобы на незаконный арест</span> <span style={{ display: 'inline-block' }}>имущества и счёта,</span> <span style={{ display: 'inline-block' }}>бездействие пристава,</span> <span style={{ display: 'inline-block' }}>нарушение сроков</span> <span style={{ display: 'inline-block' }}>и порядка исполнительных действий.</span> <span style={{ display: 'inline-block' }}>Защита компании-должника.</span>
                  </p>
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

      {/* BLOK 5: CHTO DELAET YURIST (DEEP BLUE CARDS) */}
      <section style={{ background: 'var(--color-deep-blue)', padding: '64px 0 64px', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(28px, 3.8vw, 38px)', fontFamily: 'var(--font-serif)', color: 'var(--color-white)', marginBottom: '12px', marginTop: 0 }}>
            <span style={{ display: 'inline-block' }}>Что делает юрист</span> <br /><span style={{ display: 'inline-block' }}>по исполнительному производству</span>
          </h2>
          <div style={{ width: '60px', height: '2px', background: 'var(--color-gold)', marginBottom: '20px' }}></div>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', marginBottom: '40px', maxWidth: '720px', lineHeight: 1.6, textWrap: 'balance' }}>
            <span style={{ display: 'inline-block' }}>Перечень конкретных процессуальных действий юриста</span> <span style={{ display: 'inline-block' }}>для&nbsp;защиты интересов компании</span> <br />
            <span style={{ display: 'inline-block' }}>и&nbsp;достижения реального финансового результата.</span>
          </p>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '32px' }}>
            {/* Карточка 1 */}
            <div 
              className="urgent-card hover-lift"
              style={{ 
                background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)', 
                padding: '32px 28px', 
                borderTop: '4px solid var(--color-gold)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px', minHeight: '48px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>
                  Проверяет документы <br />и сроки
                </h3>
              </div>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                <span style={{ display: 'inline-block' }}>Изучает исполнительный документ,</span> <span style={{ display: 'inline-block' }}>постановления ФССП,</span> <span style={{ display: 'inline-block' }}>проверяет процессуальные сроки</span> <span style={{ display: 'inline-block' }}>и&nbsp;законность требований.</span>
              </p>
            </div>

            {/* Карточка 2 */}
            <div 
              className="urgent-card hover-lift"
              style={{ 
                background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)', 
                padding: '32px 28px', 
                borderTop: '4px solid var(--color-gold)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px', minHeight: '48px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <rect x="3" y="3" width="18" height="18" rx="0"></rect>
                  <path d="M3 9h18"></path>
                  <path d="M9 21V9"></path>
                </svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>
                  Предъявляет лист <br />в банк или ФССП
                </h3>
              </div>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                <span style={{ display: 'inline-block' }}>Выбирает наиболее быстрый способ,</span> <span style={{ display: 'inline-block' }}>формирует пакет документов</span> <span style={{ display: 'inline-block' }}>и&nbsp;контролирует перечисление средств.</span>
              </p>
            </div>

            {/* Карточка 3 */}
            <div 
              className="urgent-card hover-lift"
              style={{ 
                background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)', 
                padding: '32px 28px', 
                borderTop: '4px solid var(--color-gold)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px', minHeight: '48px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>
                  Розыск счетов <br />и имущества должника
                </h3>
              </div>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                <span style={{ display: 'inline-block' }}>Инициирует официальные запросы</span> <span style={{ display: 'inline-block' }}>в&nbsp;банки, Росреестр, ГИБДД</span> <span style={{ display: 'inline-block' }}>для&nbsp;ареста активов.</span>
              </p>
            </div>

            {/* Карточка 4 */}
            <div 
              className="urgent-card hover-lift"
              style={{ 
                background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)', 
                padding: '32px 28px', 
                borderTop: '4px solid var(--color-gold)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px', minHeight: '48px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>
                  Обжалует незаконные <br />действия приставов
                </h3>
              </div>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                <span style={{ display: 'inline-block' }}>Подаёт жалобы на&nbsp;бездействие</span> <span style={{ display: 'inline-block' }}>или&nbsp;неправомерные аресты</span> <span style={{ display: 'inline-block' }}>старшему приставу или&nbsp;в&nbsp;суд.</span>
              </p>
            </div>

            {/* Карточка 5 */}
            <div 
              className="urgent-card hover-lift"
              style={{ 
                background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)', 
                padding: '32px 28px', 
                borderTop: '4px solid var(--color-gold)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px', minHeight: '48px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>
                  Защищает активы <br />компании-должника
                </h3>
              </div>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                <span style={{ display: 'inline-block' }}>Снимает арест со&nbsp;счетов</span> <span style={{ display: 'inline-block' }}>для&nbsp;выплаты зарплаты и&nbsp;налогов,</span> <span style={{ display: 'inline-block' }}>защищает оборудование.</span>
              </p>
            </div>

            {/* Карточка 6 */}
            <div 
              className="urgent-card hover-lift"
              style={{ 
                background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)', 
                padding: '32px 28px', 
                borderTop: '4px solid var(--color-gold)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px', minHeight: '48px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>
                  Добивается отсрочки <br />или рассрочки в суде
                </h3>
              </div>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                <span style={{ display: 'inline-block' }}>Формирует доказательную базу,</span> <span style={{ display: 'inline-block' }}>готовит заявление в&nbsp;суд</span> <span style={{ display: 'inline-block' }}>и&nbsp;добивается поэтапного исполнения.</span>
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ display: 'inline-block', backgroundColor: 'var(--color-gold)', color: 'var(--color-deep-blue)', borderColor: 'var(--color-gold)', fontWeight: 700, padding: '14px 32px' }}>
              Обсудить ситуацию с юристом
            </a>
          </div>
        </div>
      </section>

      {/* BLOK 6: KURATOR */}
      <SpecialistBlock
        title="Куратор направления"
        name="Марина Валерьевна Смольянинова"
        position="Ведущий юрист ЮК «Де-Юре»"
        imageUrl="/images/smolyaninova.jpg"
        profileHref="/specialisty/smolyaninova-marina-valerevna/"
        profileText="Подробнее о Марине Валерьевне Смольяниновой →"
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
        disclaimer="Точная стоимость зависит от роли компании (взыскатель или должник), объёма и полноты документов, необходимости совершения отдельных действий или комплексного ведения производства. Марина Валерьевна Смольянинова оценит объём работы и назовёт стоимость до заключения договора."
        guaranteeText="Если после консультации заключается договор на дальнейшую работу, стоимость консультации засчитывается в оплату по договору."
        ctaTitle="Точную стоимость определим до начала работы"
        ctaSubtitle="Сначала изучим исполнительные документы и обстоятельства дела, предложим подходящий формат помощи и зафиксируем стоимость в договоре. Она не изменится без согласования с вами."
        ctaButtonText="Получить расчёт стоимости"
        ctaButtonLink="#form"
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
