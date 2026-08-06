'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';
import TeamCarousel from '@/components/TeamCarousel';
import CasesBlock from '@/components/CasesBlock';

export default function BiznesuClient() {
  const [activeTab, setActiveTab] = useState<'all' | 'group1' | 'group2' | 'group3'>('all');

  // Exact 13 B2B directions from Section 3 of TZ_stranica_Biznesu_De-Jure_v1
  const allDirections = [
    // Группа 1. Споры, взыскание и исполнение
    {
      id: 'B2B-01',
      group: 'group1',
      groupName: 'Споры, взыскание и исполнение',
      title: 'Арбитражный юрист',
      desc: 'Представительство в арбитражном суде по коммерческим спорам, подготовка исков, отзывов, жалоб и обеспечительных мер.',
      link: null
    },
    {
      id: 'B2B-02',
      group: 'group1',
      groupName: 'Споры, взыскание и исполнение',
      title: 'Взыскание задолженности с юридических лиц',
      desc: 'Претензионная работа, досудебное и судебное взыскание дебиторской задолженности, процентов и неустойки.',
      link: null
    },
    {
      id: 'B2B-03',
      group: 'group1',
      groupName: 'Споры, взыскание и исполнение',
      title: 'Договорное право',
      desc: 'Разработка и правовая экспертиза договоров, протоколы разногласий, споры по договорам поставки и подряда.',
      link: null
    },
    {
      id: 'B2B-04',
      group: 'group1',
      groupName: 'Споры, взыскание и исполнение',
      title: 'Исполнительное производство для бизнеса',
      desc: 'Взыскание по исполнительным листам, работа с банками и приставами, защита взыскателя или должника, обжалование действий ФССП.',
      link: null
    },

    // Группа 2. Корпоративные, налоговые и кадровые вопросы
    {
      id: 'B2B-05',
      group: 'group2',
      groupName: 'Корпоративные, налоговые и кадровые вопросы',
      title: 'Корпоративный юрист',
      desc: 'Корпоративные споры, конфликты между участниками, выход участника и взыскание стоимости доли, защита от незаконной смены контроля.',
      link: null
    },
    {
      id: 'B2B-06',
      group: 'group2',
      groupName: 'Корпоративные, налоговые и кадровые вопросы',
      title: 'Налоговый юрист для бизнеса',
      desc: 'Сопровождение камеральных и выездных проверок, подготовка возражений, оспаривание доначислений и решений ФНС.',
      link: null
    },
    {
      id: 'B2B-07',
      group: 'group2',
      groupName: 'Корпоративные, налоговые и кадровые вопросы',
      title: 'Трудовые споры с работниками',
      desc: 'Увольнения и дисциплинарные взыскания, споры с работниками, проверки ГИТ и защита работодателя в суде.',
      link: null
    },
    {
      id: 'B2B-08',
      group: 'group2',
      groupName: 'Корпоративные, налоговые и кадровые вопросы',
      title: 'Миграционное сопровождение бизнеса',
      desc: 'Оформление иностранных работников, уведомления и кадровые документы, проверки МВД, обжалование штрафов.',
      link: null
    },
    {
      id: 'B2B-09',
      group: 'group2',
      groupName: 'Корпоративные, налоговые и кадровые вопросы',
      title: 'Разблокировка расчётного счёта по 115-ФЗ',
      desc: 'Ответы на запросы банка, подготовка документов, обжалование отказов в операциях и снятие ограничений по счёту и дистанционному обслуживанию.',
      link: null
    },

    // Группа 3. Сопровождение, активы и кризисные ситуации
    {
      id: 'B2B-10',
      group: 'group3',
      groupName: 'Сопровождение, активы и кризисные ситуации',
      title: 'Юридическое сопровождение бизнеса',
      desc: 'Регулярная договорная, претензионная и корпоративная работа, правовая поддержка руководителя и подразделений компании.',
      link: null
    },
    {
      id: 'B2B-11',
      group: 'group3',
      groupName: 'Сопровождение, активы и кризисные ситуации',
      title: 'Банкротство бизнеса',
      desc: 'Банкротство компаний и ИП, защита от субсидиарной ответственности, представительство кредиторов и оспаривание сделок.',
      link: null
    },
    {
      id: 'B2B-12',
      group: 'group3',
      groupName: 'Сопровождение, активы и кризисные ситуации',
      title: 'Юрист по недвижимости и строительству для бизнеса',
      desc: 'Сделки с коммерческой недвижимостью, строительный подряд, разрешения на строительство и ввод, земельные и градостроительные вопросы.',
      link: null
    },
    {
      id: 'B2B-13',
      group: 'group3',
      groupName: 'Сопровождение, активы и кризисные ситуации',
      title: 'Уголовно-правовая защита бизнеса',
      desc: 'Защита руководителей и сотрудников при обысках, допросах и уголовном преследовании по экономическим, налоговым и коррупционным составам.',
      link: null
    }
  ];

  const filteredDirections = activeTab === 'all'
    ? allDirections
    : allDirections.filter(d => d.group === activeTab);

  // Exact 3 B2B Demo Cases from Section 7 of TZ
  const cases = [
    {
      title: 'Взыскание задолженности по договору поставки',
      situation: 'Покупатель получил товар, но не оплатил поставку и начал оспаривать часть документов.',
      action: 'Проверили договор и первичные документы, сформировали претензионную позицию, подготовили иск и ходатайство об обеспечительных мерах.',
      result: 'Требования поставщика удовлетворены; задолженность и предусмотренные договором санкции взысканы.'
    },
    {
      title: 'Оспаривание доначислений по итогам налоговой проверки',
      situation: 'Компания получила решение ФНС с доначислениями и штрафами по хозяйственным операциям с контрагентами.',
      action: 'Проанализировали материалы проверки, восстановили доказательственную базу, подготовили жалобу и представляли компанию при рассмотрении спора.',
      result: 'Существенная часть требований инспекции отменена, объём обязательств компании снижен.'
    },
    {
      title: 'Спор по договору строительного подряда',
      situation: 'Заказчик отказался оплачивать выполненные работы, ссылаясь на недостатки и нарушение сроков.',
      action: 'Сопоставили договор, акты, переписку и технические документы, организовали доказательства фактического объёма работ и подготовили позицию для арбитражного суда.',
      result: 'Подрядчик добился взыскания оплаты за подтверждённый объём выполненных работ.'
    }
  ];

  // Exact 7 FAQ Questions from Section 8 of TZ
  const faqs = [
    {
      q: 'Как понять, к какому направлению относится задача компании?',
      a: 'Необязательно определять направление самостоятельно. Кратко опишите ситуацию, документы и текущую стадию — мы уточним обстоятельства и определим, кто из специалистов должен подключиться.'
    },
    {
      q: 'Можно ли обратиться по разовой задаче, а не за постоянным сопровождением?',
      a: 'Да. Можно поручить отдельную консультацию, подготовку или проверку документа, переговоры, претензионную работу, судебный спор либо другой согласованный объём. Регулярное сопровождение обсуждается отдельно, если оно действительно нужно компании.'
    },
    {
      q: 'Можете ли вы работать совместно со штатным юристом, бухгалтерией или кадровой службой?',
      a: 'Да. До начала работы согласуем зоны ответственности, порядок обмена документами и контактных лиц со стороны компании.'
    },
    {
      q: 'Какие документы нужны для первоначальной оценки?',
      a: 'Направьте документы, связанные с задачей: договоры и приложения, претензии, судебные акты, требования органов, решения, переписку и имеющиеся доказательства. Если срок ограничен, сразу укажите ближайшую контрольную дату.'
    },
    {
      q: 'Можно ли подключиться, если проверка или судебный спор уже начались?',
      a: 'Да. Сообщите текущую стадию и ближайшие сроки. Специалист изучит материалы и определит, какие действия ещё возможны в пределах установленного срока и процессуальной ситуации.'
    },
    {
      q: 'Работаете ли вы с бизнесом дистанционно?',
      a: 'Да. Консультации и рабочие встречи можно проводить по телефону или видеосвязи, а документы передавать в электронном виде. Необходимость личного участия зависит от характера задачи и процессуальных действий.'
    },
    {
      q: 'Когда станет известна стоимость юридической помощи?',
      a: 'После уточнения задачи, изучения доступных документов и определения объёма работы. Состав услуг, стоимость и порядок оплаты согласовываются до начала работы.'
    }
  ];

  return (
    <main>
      <Header />

      {/* ═══ 1. ПЕРВЫЙ ЭКРАН (Hero - В точном эталонном стиле /grazhdanam/) ═══ */}
      <MilitaryHero
        breadcrumbs={
          <>
            <Link href="/">Главная</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>
            <span style={{ color: 'var(--color-text-main)' }}>Бизнесу</span>
          </>
        }
        superTitle="Юридическая компания «Де-Юре»"
        title={
          <span style={{ display: 'block' }}>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>Юридические услуги</span>
            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>для бизнеса в Липецке</span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '580px', textWrap: 'balance' }}>
            Каждым направлением занимается профильный специалист. Помогаем компаниям и предпринимателям решать разовые юридические задачи и сопровождаем бизнес в судебных, договорных, корпоративных и иных правовых вопросах.
          </span>
        }
        primaryCtaText="Обсудить задачу"
        primaryCtaLink="#form"
        secondaryContactText="Или позвоните: +7 (4742) 28-68-38"
        secondaryContactLink="tel:+74742286838"
        trustItems={[]}
        rightContent={
          <div className="hero-right-col" style={{ width: '100%', position: 'relative', display: 'flex', justifyContent: 'center' }}>
            {/* Darkening gradient glow under the creative */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '150%',
              height: '150%',
              background: 'radial-gradient(circle, rgba(23, 50, 77, 0.12) 0%, rgba(23, 50, 77, 0.05) 30%, transparent 60%)',
              zIndex: 0,
              pointerEvents: 'none'
            }} />
            
            {/* Background Vector Graphic: Courthouse (Shifted right to protrude nicely beyond creative) */}
            <svg className="hero-vector-svg" style={{ 
              position: 'absolute', 
              top: '35%', 
              left: '115%', 
              transform: 'translate(-50%, -50%)', 
              width: '620px', 
              height: '620px', 
              opacity: 0.14, 
              zIndex: 0, 
              pointerEvents: 'none' 
            }} viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="0.6">
              <path d="M3 21h18 M4 21v-2h16v2 M6 19V9 M10 19V9 M14 19V9 M18 19V9 M12 4l-9 5h18l-9-5z M4 9h16"/>
            </svg>

            {/* INTERACTIVE ANIMATED CSS MOCKUP */}
            <div className="mockup-container" style={{ position: 'relative', width: '100%', maxWidth: '440px', height: '420px', zIndex: 1 }}>
              <div className="doc-wrapper-float-4">
                <div className="doc-sheet doc-sheet-4">
                  <div style={{ padding: '40px 30px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '40px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end' }}>
                        <div style={{ width: '100px', height: '4px', background: 'rgba(23,50,77,0.2)' }}></div>
                        <div style={{ width: '80px', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>
                    </div>
                    <div style={{ width: '160px', height: '8px', background: 'var(--color-primary)', margin: '0 auto 40px auto' }}></div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                      <div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                      <div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                      <div style={{ width: '40%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="doc-wrapper-float-3">
                <div className="doc-sheet doc-sheet-3">
                  <div style={{ padding: '30px 24px' }}>
                    <div style={{ width: '70px', height: '4px', background: 'var(--color-gold)', marginBottom: '20px' }}></div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <div style={{ width: '100%', height: '3px', background: 'rgba(23,50,77,0.15)' }}></div>
                      <div style={{ width: '90%', height: '3px', background: 'rgba(23,50,77,0.15)' }}></div>
                      <div style={{ width: '60%', height: '3px', background: 'rgba(23,50,77,0.15)' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="doc-wrapper-float-2">
                <div className="doc-sheet doc-sheet-2">
                  <div style={{ padding: '24px 20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                      <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--color-primary)', opacity: 0.2 }}></div>
                      <div style={{ width: '80px', height: '4px', background: 'var(--color-primary)', opacity: 0.3 }}></div>
                    </div>
                    <div style={{ width: '100%', height: '3px', background: 'rgba(23,50,77,0.1)', marginBottom: '4px' }}></div>
                    <div style={{ width: '80%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                  </div>
                </div>
              </div>

              {/* MAIN FOREGROUND DOCUMENT SHEET */}
              <div className="doc-wrapper-main">
                <div className="doc-sheet doc-sheet-main" style={{
                  background: '#FFFFFF',
                  boxShadow: '0 20px 40px rgba(16, 39, 59, 0.15), 0 1px 3px rgba(0,0,0,0.05)',
                  border: '1px solid rgba(16, 39, 59, 0.08)',
                  position: 'relative'
                }}>
                  <div style={{ padding: '22px 18px', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', boxSizing: 'border-box' }}>
                    
                    {/* Header line of document */}
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px', borderBottom: '1px solid rgba(16, 39, 59, 0.08)', paddingBottom: '10px' }}>
                        <div>
                          <div style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-deep-blue)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>ООО ЮК «ДЕ-ЮРЕ»</div>
                          <div style={{ fontSize: '9px', color: 'var(--color-gold-text, #80633F)', fontWeight: 600, marginTop: '1px' }}>Правовая защита бизнеса • Липецк</div>
                        </div>
                        <div style={{ textAlign: 'right', fontSize: '8px', color: 'var(--color-text-secondary)' }}>
                          Исх. № B2B-2026<br />от {new Date().toLocaleDateString('ru-RU')}
                        </div>
                      </div>

                      {/* Mockup Map Box */}
                      <div className="doc-map-box" style={{ 
                        width: '100%', 
                        height: '105px', 
                        background: '#F4F6F8', 
                        border: '1px solid rgba(16, 39, 59, 0.12)', 
                        marginBottom: '10px',
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <svg width="100%" height="100%" viewBox="0 0 200 100" style={{ opacity: 0.85 }}>
                          {/* Commercial District CADASTRAL / COURT VECTOR GRAPHIC */}
                          <line x1="10" y1="20" x2="190" y2="20" stroke="#17324D" strokeWidth="1" strokeDasharray="3 3" opacity="0.3"/>
                          <line x1="10" y1="50" x2="190" y2="50" stroke="#17324D" strokeWidth="1.5" opacity="0.4"/>
                          <line x1="10" y1="80" x2="190" y2="80" stroke="#17324D" strokeWidth="1" strokeDasharray="3 3" opacity="0.3"/>
                          
                          <line x1="40" y1="10" x2="40" y2="90" stroke="#17324D" strokeWidth="1" opacity="0.3"/>
                          <line x1="100" y1="10" x2="100" y2="90" stroke="#17324D" strokeWidth="1.5" opacity="0.4"/>
                          <line x1="160" y1="10" x2="160" y2="90" stroke="#17324D" strokeWidth="1" opacity="0.3"/>

                          {/* Commercial Complex Building Polygons */}
                          <polygon points="45,25 95,25 95,45 45,45" fill="rgba(23, 50, 77, 0.12)" stroke="#17324D" strokeWidth="1.2"/>
                          <polygon points="105,25 155,25 155,45 105,45" fill="rgba(128, 99, 63, 0.15)" stroke="#80633F" strokeWidth="1.2"/>
                          <polygon points="45,55 95,55 95,75 45,75" fill="rgba(128, 99, 63, 0.15)" stroke="#80633F" strokeWidth="1.2"/>
                          <polygon points="105,55 155,55 155,75 105,75" fill="rgba(23, 50, 77, 0.12)" stroke="#17324D" strokeWidth="1.2"/>

                          {/* Verified Check Badge */}
                          <circle cx="100" cy="50" r="14" fill="#FFFFFF" stroke="#17324D" strokeWidth="1.5"/>
                          <path d="M94 50 L98 54 L106 44" fill="none" stroke="#80633F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <div style={{ position: 'absolute', bottom: '4px', right: '6px', fontSize: '7.5px', background: 'rgba(255,255,255,0.9)', padding: '1px 4px', fontWeight: 700, color: 'var(--color-deep-blue)' }}>
                          B2B-ЮК «ДЕ-ЮРЕ»
                        </div>
                      </div>

                      {/* Mockup Lines */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '8px' }}>
                        <div style={{ fontSize: '8.5px', fontWeight: 700, color: 'var(--color-deep-blue)' }}>ПРАВОВАЯ ЗАЩИТА И СОПРОВОЖДЕНИЕ БИЗНЕСА</div>
                        <div style={{ width: '100%', height: '3px', background: 'rgba(23,50,77,0.12)' }}></div>
                        <div style={{ width: '92%', height: '3px', background: 'rgba(23,50,77,0.12)' }}></div>
                      </div>
                    </div>

                    {/* Blue Official Stamp Seal at Bottom Right */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '4px' }}>
                      <div style={{ fontSize: '7.5px', color: 'var(--color-text-secondary)', lineHeight: 1.2 }}>
                        Юридическая компания «Де-Юре»<br />
                        Арбитраж • Договоры • Налоги • 115-ФЗ
                      </div>
                      
                      {/* Realistic Seal Stamp */}
                      <div style={{ 
                        width: '52px', 
                        height: '52px', 
                        borderRadius: '50%', 
                        border: '2px stroke #10273B', 
                        outline: '1px dashed #10273B',
                        outlineOffset: '-4px',
                        display: 'flex', 
                        flexDirection: 'column',
                        alignItems: 'center', 
                        justifyContent: 'center',
                        color: '#10273B',
                        transform: 'rotate(-12deg)',
                        opacity: 0.88,
                        background: 'rgba(16, 39, 59, 0.03)',
                        flexShrink: 0,
                        boxSizing: 'border-box'
                      }}>
                        <div style={{ fontSize: '6.5px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.02em', textAlign: 'center', lineHeight: 1 }}>ДЕ-ЮРЕ</div>
                        <div style={{ fontSize: '5px', fontWeight: 700, margin: '1px 0' }}>ЛИПЕЦК</div>
                        <div style={{ fontSize: '4.5px', textTransform: 'uppercase', letterSpacing: '0.01em' }}>ОГРН 1234800008464</div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        }
      />

      {/* ═══ 2. КАТАЛОГ 13 НАПРАВЛЕНИЙ БИЗНЕСУ ═══ */}
      <section className="section bg-light" id="catalog" style={{ padding: '64px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '32px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              <span style={{ display: 'inline-block' }}>Юридическая помощь бизнесу</span> <br />
              <span style={{ display: 'inline-block' }}>по основным направлениям</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              <span style={{ display: 'inline-block' }}>Выберите направление, которое ближе всего к вашей задаче.</span> <br />
              <span style={{ display: 'inline-block' }}>Если вопрос затрагивает несколько областей или вы не уверены в квалификации ситуации, опишите её в форме — мы определим, кто из специалистов должен подключиться.</span>
            </p>
          </div>

          {/* Фильтр-табы по 3 группам из ТЗ */}
          <div className="grazhdanam-tab-list" style={{ display: 'flex', gap: '10px', marginBottom: '36px', flexWrap: 'wrap' }} role="tablist">
            <button 
              onClick={() => setActiveTab('all')}
              className={`tab-btn ${activeTab === 'all' ? 'tab-btn-active' : 'tab-btn-inactive'}`}
              style={{ padding: '12px 24px', fontSize: '15px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s' }}
            >
              Все направления (13)
            </button>
            <button 
              onClick={() => setActiveTab('group1')}
              className={`tab-btn ${activeTab === 'group1' ? 'tab-btn-active' : 'tab-btn-inactive'}`}
              style={{ padding: '12px 24px', fontSize: '15px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s' }}
            >
              Споры, взыскание и исполнение (4)
            </button>
            <button 
              onClick={() => setActiveTab('group2')}
              className={`tab-btn ${activeTab === 'group2' ? 'tab-btn-active' : 'tab-btn-inactive'}`}
              style={{ padding: '12px 24px', fontSize: '15px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s' }}
            >
              Корпоративные, налоговые и кадровые (5)
            </button>
            <button 
              onClick={() => setActiveTab('group3')}
              className={`tab-btn ${activeTab === 'group3' ? 'tab-btn-active' : 'tab-btn-inactive'}`}
              style={{ padding: '12px 24px', fontSize: '15px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s' }}
            >
              Сопровождение, активы и кризисные (4)
            </button>
          </div>

          {/* Сетка 13 карточек (Информационные карточки без ссылки согласно ТЗ v1) */}
          <div className="grid grid-3" style={{ gap: '24px' }}>
            {filteredDirections.map((dir) => (
              <div 
                key={dir.id}
                className="card card-service" 
                style={{ 
                  padding: '32px 28px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between',
                  background: '#FFFFFF',
                  border: '1px solid rgba(16, 39, 59, 0.08)',
                  boxShadow: '0 4px 14px rgba(16, 39, 59, 0.05)',
                  cursor: 'default'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                    <span style={{ color: 'var(--color-gold)', fontSize: '14px' }}>◆</span>
                    <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-gold-text, #80633F)' }}>
                      {dir.groupName}
                    </span>
                  </div>
                  
                  <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', margin: '0 0 12px 0', lineHeight: 1.35, fontWeight: 700 }}>
                    {dir.title}
                  </h3>

                  <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
                    {dir.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. БЛОК СРОЧНЫХ СИТУАЦИЙ (Из ТЗ п. 4) ═══ */}
      <section className="section bg-white" style={{ padding: '64px 0', borderTop: '1px solid rgba(16, 39, 59, 0.08)', borderBottom: '1px solid rgba(16, 39, 59, 0.08)' }}>
        <div className="container">
          <div style={{ maxWidth: '850px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-gold)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 700, color: 'var(--color-gold-text, #80633F)' }}>Срочная помощь</span>
            </div>
            
            <h2 style={{ fontSize: '32px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0 }}>
              Когда юридическая помощь нужна без промедления
            </h2>

            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, marginBottom: '28px', lineHeight: 1.6 }}>
              Срок на ответ, обжалование или процессуальное действие может быть ограничен. Сообщите, какой документ или требование вы получили и какая дата в нём указана.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
              {[
                'Компания получила иск, судебное определение, претензию или исполнительный документ.',
                'ФНС, МВД, ГИТ, банк или другой орган запросил документы либо начал проверку.',
                'Банк отказал в операции, ограничил дистанционное обслуживание или заблокировал счёт по 115-ФЗ.',
                'В офисе проходит обыск, руководителя или сотрудника вызывают на допрос.',
                'Обнаружена попытка смены директора, участников или контроля над компанией.'
              ].map((scenario, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', background: 'var(--gradient-cream)', padding: '16px 20px', borderLeft: '3px solid var(--color-gold)' }}>
                  <span style={{ color: 'var(--color-gold)', fontWeight: 800, fontSize: '16px', lineHeight: 1 }}>0{index + 1}</span>
                  <span style={{ fontSize: '15px', color: 'var(--color-deep-blue)', fontWeight: 600, lineHeight: 1.45 }}>{scenario}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <a href="#form" className="btn btn-primary" style={{ padding: '14px 28px', fontSize: '16px' }}>
                Обсудить срочную ситуацию
              </a>
              <a href="tel:+74742286838" style={{ fontSize: '15px', fontWeight: 600, color: 'var(--color-primary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                Или позвоните: +7 (4742) 28-68-38
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 4. БЛОК "ЕСЛИ ЗАДАЧА НЕ ПОПАЛА В КАТАЛОГ" (Из ТЗ п. 5) ═══ */}
      <section className="section bg-light" style={{ padding: '60px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ background: '#FFFFFF', padding: '40px', border: '1px solid rgba(16, 39, 59, 0.1)', boxShadow: '0 6px 20px rgba(16, 39, 59, 0.06)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ width: '32px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 700, color: 'var(--color-primary)' }}>Индивидуальный вопрос</span>
            </div>
            
            <h2 style={{ fontSize: '28px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', margin: 0 }}>
              Не нашли подходящее направление?
            </h2>
            
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, maxWidth: '750px' }}>
              Юридическая задача бизнеса может затрагивать сразу несколько областей. Кратко опишите ситуацию — мы уточним обстоятельства и определим, кто из специалистов должен подключиться.
            </p>

            <a href="#form" className="btn btn-outline" style={{ padding: '12px 28px', fontSize: '15px' }}>
              Описать задачу
            </a>
          </div>
        </div>
      </section>

      {/* ═══ 5. СПЕЦИАЛИСТЫ ПО РАБОТЕ С БИЗНЕСОМ (Точный состав из ТЗ п. 6: Бобкин, Смолянинова, Начешников) ═══ */}
      <TeamCarousel 
        customTitle="Специалисты по работе с бизнесом"
        customSubtitle="Профильные юристы ЮК «Де-Юре» по сопровождению компаний, арбитражным спорам, налоговому и корпоративному праву."
        filterSlugs={[
          'bobkin-arkadiy-evgenevich',
          'smolyaninova-marina-valerevna',
          'nacheshnikov-vladimir-viktorovich'
        ]}
      />

      {/* ═══ 6. ПРИМЕРЫ ДЕЛ ИЗ ПРАКТИКИ (3 B2B-кейса из ТЗ п. 7) ═══ */}
      <CasesBlock 
        title="Примеры дел из нашей практики"
        subtitle="Практические результаты правовой защиты бизнеса в Липецке и арбитражных судах."
        cases={cases}
        showAllText="Смотреть все дела"
        showAllLink="/-/praktika/"
      />

      {/* ═══ 7. FAQ (7 вопросов из ТЗ п. 8) ═══ */}
      <FAQBlock 
        title="Ответы на частые вопросы"
        items={faqs}
      />

      {/* ═══ 8. ФИНАЛЬНАЯ ФОРМА (Из ТЗ п. 9) ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start', paddingTop: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>Связаться с нами</span>
              </div>
              
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                Обсудите задачу с юристом
              </h2>
              
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '28px', textWrap: 'balance' }}>
                Кратко опишите задачу компании и укажите, есть ли установленный срок. Мы свяжемся с вами, уточним детали и определим, кто из специалистов сможет подключиться.
              </p>

              <div style={{ marginBottom: '28px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="tel:+74742286838" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '24px', fontWeight: 'bold', color: 'var(--color-deep-blue)', textDecoration: 'none' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  +7 (4742) 28-68-38
                </a>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-text-secondary)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  <span>г. Липецк, ул. Советская, д. 35, оф. 213</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-primary)', fontWeight: 600, marginTop: '4px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  <span>Перезвоним в течение 15 минут в рабочее время</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
              <div className="grazhdanam-contact-card" style={{ background: 'var(--gradient-cream)', padding: '40px', borderRadius: '0', boxShadow: '0 8px 24px rgba(0,0,0,0.15)', width: '100%', border: '1px solid rgba(0,0,0,0.06)' }}>
                <ContactsForm
                  title="Написать нам"
                  subtitle=""
                  buttonText="Оставить заявку"
                  commentPlaceholder="Кратко опишите задачу вашей компании или вопрос…"
                  subtext="Если вы оставите заявку вечером или в выходной день, мы перезвоним в ближайший рабочий день."
                  hiddenFields={[
                    { name: 'pageId', value: 'TOP-03' },
                    { name: 'pageTitle', value: 'Юридические услуги для бизнеса в Липецке' },
                    { name: 'practice', value: 'Юридические услуги для бизнеса' }
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .grazhdanam-contact-card {
            padding: 24px 18px !important;
          }
          .grazhdanam-tab-list {
            flex-wrap: nowrap !important;
            overflow-x: auto !important;
            -webkit-overflow-scrolling: touch !important;
            padding-bottom: 8px !important;
            margin-bottom: 24px !important;
            scrollbar-width: none !important;
          }
          .grazhdanam-tab-list::-webkit-scrollbar {
            display: none !important;
          }
          .grazhdanam-tab-list button {
            white-space: nowrap !important;
            flex-shrink: 0 !important;
          }
        }
        @media (max-width: 576px) {
          .hero-title-span-mobile {
            white-space: normal !important;
          }
        }
      `}} />

      <Footer />
    </main>
  );
}
