'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';
import TeamCarousel from '@/components/TeamCarousel';
import CasesBlock, { CaseData } from '@/components/CasesBlock';

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
  const cases: CaseData[] = [
    {
      category: 'Арбитраж и поставка',
      title: 'Взыскание задолженности по договору поставки',
      problem: 'Покупатель получил товар, но не оплатил поставку и начал оспаривать часть документов.',
      action: 'Проверили договор и первичные документы, сформировали претензионную позицию, подготовили иск и ходатайство об обеспечительных мерах.',
      result: 'Требования поставщика удовлетворены; задолженность и предусмотренные договором санкции взысканы.'
    },
    {
      category: 'Налоговое право',
      title: 'Оспаривание доначислений по итогам налоговой проверки',
      problem: 'Компания получила решение ФНС с доначислениями и штрафами по хозяйственным операциям с контрагентами.',
      action: 'Проанализировали материалы проверки, восстановили доказательственную базу, подготовили жалобу и представляли компанию при рассмотрении спора.',
      result: 'Существенная часть требований инспекции отменена, объём обязательств компании снижен.'
    },
    {
      category: 'Строительный подряд',
      title: 'Спор по договору строительного подряда',
      problem: 'Заказчик отказался оплачивать выполненные работы, ссылаясь на недостатки и нарушение сроков.',
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
        secondaryCtaText="Или позвоните: +7 (910) 350-31-11"
        secondaryCtaLink="tel:+79103503111"
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
            
            {/* Background Vector Graphic: Courthouse (Protrudes nicely beyond creative right edge) */}
            <svg className="hero-vector-svg" style={{ 
              position: 'absolute', 
              top: '38%', 
              left: '98%', 
              transform: 'translate(-50%, -50%)', 
              width: '580px', 
              height: '580px', 
              opacity: 0.10, 
              zIndex: 0, 
              pointerEvents: 'none' 
            }} viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="0.6">
              <path d="M3 21h18 M4 21v-2h16v2 M6 19V9 M10 19V9 M14 19V9 M18 19V9 M12 4l-9 5h18l-9-5z M4 9h16"/>
            </svg>

            {/* ANIMATED DOC STACK */}
            <div className="mockup-container" style={{ zIndex: 1 }}>
              <div style={{ position: 'absolute', width: '250px', height: '250px', background: 'var(--color-primary)', filter: 'blur(100px)', opacity: 0.15, borderRadius: '50%' }}></div>

              <div className="doc-wrapper-float-4">
                <div className="doc-sheet doc-sheet-4">
                  <div style={{ padding: '40px 30px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '40px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end' }}>
                        <div style={{ width: '100px', height: '4px', background: 'rgba(23,50,77,0.2)' }}></div>
                        <div style={{ width: '80px', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>
                    </div>
                    <div style={{ width: '160px', height: '8px', background: 'var(--color-primary)', margin: '0 auto 40px auto' }}></div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                      <div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                      <div style={{ width: '60%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="doc-wrapper-float-3">
                <div className="doc-sheet doc-sheet-3">
                  <div style={{ padding: '40px 30px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '40px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end' }}>
                        <div style={{ width: '100px', height: '4px', background: 'rgba(23,50,77,0.2)' }}></div>
                        <div style={{ width: '60px', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>
                    </div>
                    <div style={{ width: '140px', height: '8px', background: 'var(--color-primary)', margin: '0 auto 40px auto' }}></div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                      <div style={{ width: '95%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                      <div style={{ width: '80%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="doc-wrapper-float-2">
                <div className="doc-sheet doc-sheet-2">
                  <div style={{ padding: '30px 25px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '30px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end' }}>
                        <div style={{ width: '100px', height: '4px', background: 'rgba(23,50,77,0.2)' }}></div>
                        <div style={{ width: '60px', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                        <div style={{ width: '80px', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>
                    </div>
                    <div style={{ width: '160px', height: '8px', background: 'var(--color-primary)', margin: '0 auto 20px auto' }}></div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <div style={{ width: '40%', height: '4px', background: 'rgba(23,50,77,0.2)' }}></div>
                        <div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                        <div style={{ width: '90%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <div style={{ width: '50%', height: '4px', background: 'rgba(23,50,77,0.2)' }}></div>
                        <div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                        <div style={{ width: '85%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>
                    </div>
                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '10px', borderTop: '1px dashed rgba(23,50,77,0.1)' }}>
                      <div>
                        <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.5)' }}>Заказчик:</div>
                        <div style={{ width: '80px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '10px' }}></div>
                      </div>
                      <div>
                        <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.5)' }}>Исполнитель:</div>
                        <div style={{ width: '80px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '10px' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="doc-wrapper-float-1">
                <div className="doc-sheet doc-sheet-1">
                  <div style={{ padding: '30px 25px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.03, width: '150px' }}>
                      <img src="/images/logo_dark.png" alt="" style={{ width: '100%', height: 'auto' }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(23,50,77,0.2)', paddingBottom: '12px', marginBottom: '20px' }}>
                      <img src="/images/logo_dark.png" alt="" style={{ width: '60px', height: 'auto', opacity: 0.8 }} />
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end' }}>
                        <div style={{ width: '80px', height: '4px', background: 'rgba(23,50,77,0.2)' }}></div>
                        <div style={{ width: '50px', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>
                    </div>
                    <div style={{ width: '120px', height: '8px', background: 'var(--color-deep-blue)', margin: '0 auto 20px auto' }}></div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <div style={{ width: '12px', height: '4px', background: 'var(--color-primary)', marginTop: '4px', flexShrink: 0 }}></div>
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          <div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                          <div style={{ width: '85%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <div style={{ width: '12px', height: '4px', background: 'var(--color-primary)', marginTop: '4px', flexShrink: 0 }}></div>
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          <div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                          <div style={{ width: '70%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                        </div>
                      </div>
                    </div>
                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '10px', borderTop: '1px solid rgba(23,50,77,0.2)' }}>
                      <div>
                        <div style={{ fontSize: '10px', fontWeight: 'bold', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)' }}>ООО «ДЕ-ЮРЕ»</div>
                        <div style={{ fontSize: '8px', color: 'rgba(23,50,77,0.6)' }}>ИНН 4826145890</div>
                      </div>
                      <div style={{ width: '45px', height: '45px', borderRadius: '50%', border: '1.5px solid #17375E', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-15deg)', opacity: 0.85 }}>
                        <div style={{ width: '37px', height: '37px', borderRadius: '50%', border: '0.5px dashed #17375E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <span style={{ fontSize: '7px', fontWeight: 'bold', color: '#17375E', textAlign: 'center', lineHeight: 1.1 }}>ДЕ-ЮРЕ ЛИПЕЦК</span>
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

          {/* Фильтр-табы (как в GrazhdanamClient) */}
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

          <style dangerouslySetInnerHTML={{ __html: `
            .tab-btn-active {
              background-color: #10273B !important;
              color: #FFFFFF !important;
              border: 1px solid #10273B !important;
            }
            .tab-btn-inactive {
              background-color: #FFFFFF !important;
              color: #10273B !important;
              border: 1px solid #D7E0E6 !important;
            }
            .tab-btn-inactive:hover {
              background-color: #F7F4ED !important;
              color: #10273B !important;
              border-color: #10273B !important;
            }
          `}} />

          {/* Сетка шаблонных карточек service-card (Точно в дизайне хаба GrazhdanamClient) */}
          <div className="grid grid-3" style={{ gap: '24px' }}>
            {filteredDirections.map((card) => {
              if (card.link) {
                return (
                  <a
                    key={card.id}
                    href={card.link}
                    style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}
                  >
                    <div 
                      className="card service-card" 
                      style={{ 
                        height: '100%', 
                        minHeight: '210px',
                        padding: '28px', 
                        background: 'var(--color-white)', 
                        border: '1px solid var(--color-border)',
                        borderRadius: '0',
                        display: 'flex', 
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        position: 'relative',
                        borderTop: '3px solid var(--color-primary)',
                        cursor: 'pointer'
                      }}
                    >
                      <div>
                        <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>
                          {card.title}
                        </h3>
                        <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                          {card.desc}
                        </p>
                      </div>
                      <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, marginTop: 'auto', transition: 'all 0.3s' }}>
                        <span>Подробнее</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.3s' }}>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </div>
                    </div>
                  </a>
                );
              }

              return (
                <a
                  key={card.id}
                  href="#form"
                  style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}
                >
                  <div 
                    className="card service-card" 
                    style={{ 
                      height: '100%', 
                      minHeight: '210px',
                      padding: '28px', 
                      background: 'var(--color-white)', 
                      border: '1px solid var(--color-border)',
                      borderRadius: '0',
                      display: 'flex', 
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      position: 'relative',
                      borderTop: '3px solid var(--color-primary)',
                      cursor: 'pointer'
                    }}
                  >
                    <div>
                      <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>
                        {card.title}
                      </h3>
                      <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                        {card.desc}
                      </p>
                    </div>
                    <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, marginTop: 'auto', transition: 'all 0.3s' }}>
                      <span>Подробнее</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.3s' }}>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </div>
                </a>
              );
            })}

            {/* CTA Card - Не нашли направление */}
            <a
              href="#form"
              style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}
            >
              <div
                className="card service-card"
                style={{
                  height: '100%',
                  minHeight: '210px',
                  padding: '28px',
                  background: 'var(--color-deep-blue)',
                  border: '1px solid var(--color-deep-blue)',
                  borderRadius: '0',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  borderTop: '3px solid var(--color-gold)',
                  cursor: 'pointer'
                }}
              >
                <div>
                  <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: '#FFFFFF', lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>
                    Не нашли подходящее направление?
                  </h3>
                  <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.55 }}>
                    Юридическая задача бизнеса может затрагивать сразу несколько областей. Кратко опишите ситуацию — мы уточним обстоятельства и определим, кто из специалистов должен подключиться.
                  </p>
                </div>
                <div style={{ marginTop: 'auto' }}>
                  <style dangerouslySetInnerHTML={{ __html: `
                    .btn-cta-catalog {
                      display: inline-block;
                      padding: 11px 24px;
                      font-size: 14px;
                      font-weight: 700;
                      background: #FFFFFF;
                      color: var(--color-deep-blue);
                      border: 1px solid #FFFFFF;
                      text-decoration: none;
                      transition: all 0.3s ease;
                      cursor: pointer;
                    }
                    .btn-cta-catalog:hover {
                      background: var(--color-deep-blue);
                      color: #FFFFFF;
                      border-color: #FFFFFF;
                    }
                  `}} />
                  <a href="#form" className="btn-cta-catalog">Описать задачу</a>
                </div>
              </div>
            </a>

                      </div>
        </div>
      </section>

      {/* ═══ 3. Когда юридическая помощь нужна срочно (В точном дизайне /grazhdanam/voennyj-yurist/) ═══ */}
      <section style={{ background: 'var(--color-deep-blue)', padding: '64px 0 56px', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-white)', marginBottom: '12px', marginTop: 0 }}>
            <span style={{ display: 'inline-block' }}>Когда юридическая помощь</span> <br /><span style={{ display: 'inline-block' }}>нужна без промедления</span>
          </h2>
          <div style={{ width: '60px', height: '2px', background: 'var(--color-gold)', marginBottom: '20px' }}></div>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '16px', marginBottom: '40px', maxWidth: '660px', lineHeight: 1.6 }}>
            <span style={{ display: 'inline-block' }}>Срок на&nbsp;ответ, обжалование или&nbsp;процессуальное действие может быть ограничен.</span> <br />
            <span style={{ display: 'inline-block' }}>Сообщите, какой документ или&nbsp;требование вы&nbsp;получили и&nbsp;какая дата в&nbsp;нём указана.</span>
          </p>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '40px' }}>
            {/* Карточка 1 */}
            <div 
              className="urgent-card"
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
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', marginTop: 0, lineHeight: 1.3 }}>
                  Судебный иск или <br />исполнительный документ
                </div>
              </div>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                Компания получила иск, судебное определение, претензию или исполнительный документ с ограниченным сроком на ответ.
              </p>
            </div>

            {/* Карточка 2 */}
            <div 
              className="urgent-card"
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
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', marginTop: 0, lineHeight: 1.3 }}>
                  Проверки <br />контролирующих органов
                </div>
              </div>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                ФНС, МВД, ГИТ, банк или иной орган запросил документы либо начал выездную или камеральную проверку.
              </p>
            </div>

            {/* Карточка 3 */}
            <div 
              className="urgent-card"
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
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', marginTop: 0, lineHeight: 1.3 }}>
                  Блокировка счёта <br />по 115-ФЗ
                </div>
              </div>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                Банк отказал в проведении операции, ограничил дистанционное обслуживание или заблокировал расчётный счёт компании.
              </p>
            </div>

            {/* Карточка 4 */}
            <div 
              className="urgent-card"
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
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', marginTop: 0, lineHeight: 1.3 }}>
                  Обыски и <br />вызовы на допрос
                </div>
              </div>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                В офисе проходит обыск или осмотр, либо руководителя и сотрудников компании вызывают на допрос в правоохранительные органы.
              </p>
            </div>

            {/* Карточка 5 */}
            <div 
              className="urgent-card"
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
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', marginTop: 0, lineHeight: 1.3 }}>
                  Попытка захвата <br />контроля над компанией
                </div>
              </div>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                Обнаружена попытка незаконной смены генерального директора, участников ООО или иных действий по перехвату контроля.
              </p>
            </div>
          </div>

          <style dangerouslySetInnerHTML={{__html: `
            .urgent-card:hover {
              transform: translateY(-6px);
              box-shadow: 0 16px 36px rgba(0,0,0,0.22) !important;
            }
            .btn-urgent-outline {
              border: 1px solid rgba(255,255,255,0.8) !important;
              color: #FFFFFF !important;
              background: transparent !important;
              transition: all 0.3s ease !important;
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
              transition: all 0.3s ease !important;
              border: 1px solid var(--color-gold) !important;
            }
            .btn-urgent-call:hover {
              background-color: #FFFFFF !important;
              color: #0B1C2A !important;
              border-color: #FFFFFF !important;
            }
          `}} />

          {/* Зона связи */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '28px', display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <a href="tel:+79103503111" style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.02em' }}>
              +7 (910) 350-31-11
            </a>
            <a href="tel:+79103503111" className="btn-urgent-call" style={{ padding: '14px 28px', fontSize: '15px' }}>
              Позвонить юристу
            </a>
            <a href="#form" className="btn btn-urgent-outline" style={{ padding: '14px 28px', fontSize: '15px' }}>
              Обсудить срочную ситуацию
            </a>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
              Перезвоним вам в течение 15 минут в рабочее время
            </span>
          </div>
        </div>
      </section>


      <div style={{ paddingTop: '80px' }}>
            {/* ═══ 5. СПЕЦИАЛИСТЫ ПО РАБОТЕ С БИЗНЕСОМ (Точный состав из ТЗ п. 6: Бобкин, Смолянинова, Начешников) ═══ */}
      <TeamCarousel 
        hideSectionLabel={true}
        titleAlign="center"
        customTitle="Специалисты по работе с бизнесом"
        customSubtitle={
          <>
            <span style={{ display: 'inline-block' }}>Профильные юристы ЮК «Де-Юре» по&nbsp;сопровождению компаний,</span> <br />
            <span style={{ display: 'inline-block' }}>арбитражным спорам, налоговому и&nbsp;корпоративному праву.</span>
          </>
        }
        filterSlugs={[
          'bobkin-arkadiy-evgenevich',
          'smolyaninova-marina-valerevna',
          'nacheshnikov-vladimir-viktorovich'
        ]}
      />
      </div>

      {/* ═══ 6. ПРИМЕРЫ ДЕЛ ИЗ ПРАКТИКИ (3 B2B-кейса из ТЗ п. 7) ═══ */}
      <CasesBlock 
        title="Примеры дел из нашей практики"
        cases={cases}
        showAllText="Смотреть все дела"
        showAllLink="/-/praktika/"
      />

      {/* ═══ 7. FAQ (7 вопросов из ТЗ п. 8) ═══ */}
      <FAQBlock 
        title={
          <>
            <span style={{ display: 'inline-block' }}>Ответы на</span> <br />
            <span style={{ display: 'inline-block' }}>частые вопросы</span>
          </>
        }
        faqs={faqs}
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
                <a href="tel:+79103503111" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '24px', fontWeight: 'bold', color: 'var(--color-deep-blue)', textDecoration: 'none' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  +7 (910) 350-31-11
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
