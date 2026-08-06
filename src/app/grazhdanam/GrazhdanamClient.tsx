'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import FAQBlock from '@/components/FAQBlock';
import MilitaryHero from '@/components/MilitaryHero';
import TeamCarousel from '@/components/TeamCarousel';
import CasesBlock from '@/components/CasesBlock';

export default function GrazhdanamClient() {
  const [activeTab, setActiveTab] = useState<'all' | 'group1' | 'group2' | 'group3'>('all');

  const allDirections = [
    // Группа 1
    { id: 1, group: 'group1', title: 'Семейный юрист', desc: 'Алименты, расторжение брака через суд, раздел имущества супругов, установление и оспаривание отцовства, споры о детях, брачные договоры.', link: null },
    { id: 2, group: 'group1', title: 'Наследственный юрист', desc: 'Вступление в наследство через суд, восстановление срока принятия наследства, оспаривание завещания, признание наследника недостойным.', link: null },
    { id: 3, group: 'group1', title: 'Жилищный юрист', desc: 'Выселение и выписка через суд, залив квартиры, споры с управляющими компаниями и ЖКХ, раздел порядка оплаты коммунальных услуг, узаконение перепланировки.', link: null },
    { id: 4, group: 'group1', title: 'Юрист по недвижимости', desc: 'Сопровождение сделок с недвижимостью, проверка документов и рисков, споры с застройщиками по ДДУ, признание прав на недвижимость.', link: null },
    { id: 5, group: 'group1', title: 'Земельный юрист', desc: 'Споры о границах участков, оформление прав на землю, раздел участка и определение порядка пользования, сервитут, изменение ВРИ.', link: '/-/grazhdanam/zemelnyj-yurist/' },

    // Группа 2
    { id: 6, group: 'group2', title: 'Банкротство физических лиц', desc: 'Оценка оснований для банкротства, подготовка заявления и документов, сопровождение процедуры, взаимодействие с финансовым управляющим.', link: null },
    { id: 7, group: 'group2', title: 'Кредитный юрист', desc: 'Споры с банками и коллекторами, отмена судебного приказа, проверка требований по кредиту, оспаривание незаконных начислений.', link: null },
    { id: 8, group: 'group2', title: 'Взыскание долгов', desc: 'Взыскание долгов по договорам и распискам, возврат займов, взыскание неосновательного обогащения, подготовка претензий и исков.', link: null },
    { id: 9, group: 'group2', title: 'Юрист по исполнительному производству', desc: 'Обжалование действий и бездействия приставов (ФССП), возврат незаконно списанных средств, снятие ареста со счетов и имущества.', link: null },

    // Группа 3
    { id: 10, group: 'group3', title: 'Автоюрист', desc: 'Лишение водительских прав и оставление места ДТП, споры по ОСАГО и КАСКО, взыскание ущерба после ДТП, оспаривание виновности в аварии.', link: null },
    { id: 11, group: 'group3', title: 'Трудовой юрист', desc: 'Незаконное увольнение и сокращение, восстановление на работе, взыскание задолженности по заработной плате, производственные травмы.', link: null },
    { id: 12, group: 'group3', title: 'Адвокат по уголовным делам', desc: 'Защита при задержании, обыске и допросе, участие на следствии и в суде. Защита по мошенничеству, имущественным и экономическим преступлениям.', link: null },
    { id: 13, group: 'group3', title: 'Военный юрист', desc: 'Выплаты за ранение и выплаты семьям погибших, оспаривание заключений ВВК, споры с военкоматами, статус военнослужащего.', link: '/-/grazhdanam/voennyj-yurist/' },
    { id: 14, group: 'group3', title: 'Миграционный юрист', desc: 'Отмена запрета на въезд в РФ, обжалование депортации и административного выдворения, получение РВП и ВНЖ, сопровождение миграционных споров.', link: null }
  ];

  const filteredDirections = activeTab === 'all'
    ? allDirections
    : allDirections.filter(d => d.group === activeTab);

  const cases = [
    {
      title: 'Признали право на наследство после пропуска срока',
      situation: 'Клиент не обратился к нотариусу в шестимесячный срок, но после смерти родственника продолжал пользоваться квартирой и оплачивал расходы на неё.',
      action: 'Изучили документы, собрали подтверждения фактического принятия наследства, подготовили заявление и представили интересы клиента в суде.',
      result: 'Суд признал факт принятия наследства и право собственности клиента на квартиру.'
    },
    {
      title: 'Добились восстановления работника после незаконного увольнения',
      situation: 'Работодатель уволил сотрудника за нарушение трудовых обязанностей, не подтвердив проступок и не соблюдая установленную процедуру.',
      action: 'Проверили кадровые документы, подготовили иск, представили доказательства нарушений и интересы работника в суде.',
      result: 'Суд отменил увольнение, восстановил клиента на работе и взыскал выплаты за время вынужденного прогула.'
    },
    {
      title: 'Признали право собственности на долю в квартире',
      situation: 'Клиент вложил средства в приобретение квартиры, но право на его долю не было оформлено, а договориться с другим участником не удалось.',
      action: 'Проанализировали документы и расчёты сторон, сформировали доказательственную позицию, подготовили иск и сопровождали судебное разбирательство.',
      result: 'Суд признал за клиентом право собственности на долю в квартире.'
    }
  ];

  const faqs = [
    {
      q: 'Как понять, к какому направлению относится моя ситуация?',
      a: 'Необязательно определять направление самостоятельно. Кратко опишите, что произошло, и мы уточним обстоятельства и подберём специалиста по характеру вопроса.'
    },
    {
      q: 'Можно ли обратиться, если вопрос относится сразу к нескольким направлениям?',
      a: 'Да. Такие ситуации встречаются, например, когда спор одновременно затрагивает семейные, наследственные и имущественные вопросы. После первичного разговора определим, какой специалист должен вести дело и в какой последовательности решать задачи.'
    },
    {
      q: 'Какие документы нужны для первой консультации?',
      a: 'Подготовьте документы, которые относятся к ситуации: договоры, решения и определения суда, постановления, уведомления, претензии, переписку и другие имеющиеся материалы. Если вы не уверены, что важно, возьмите всё доступное — после обращения специалист уточнит необходимый перечень.'
    },
    {
      q: 'Можно ли обратиться, если дело уже рассматривается в суде?',
      a: 'Да. Сообщите, на какой стадии находится дело и когда назначено ближайшее заседание. Специалист изучит материалы и оценит, какие действия ещё возможны с учётом текущей стадии процесса.'
    },
    {
      q: 'Можно ли обратиться после вынесения решения суда?',
      a: 'Да. В зависимости от обстоятельств можно оценить основания для обжалования, восстановления процессуального срока или сопровождения исполнительного производства. В таких вопросах важны сроки, поэтому при обращении сразу укажите дату решения и дату его получения.'
    },
    {
      q: 'Можно ли получить юридическую помощь дистанционно?',
      a: 'Да. Консультации можно проводить по телефону или видеосвязи, а документы передавать в электронном виде. Возможность полностью дистанционного ведения конкретного дела зависит от его обстоятельств и необходимых процессуальных действий.'
    },
    {
      q: 'Когда станет известна стоимость юридической помощи?',
      a: 'После того как специалист уточнит обстоятельства, изучит доступные документы и определит объём необходимых действий. Состав услуг, стоимость и порядок оплаты согласовываются до начала работы.'
    }
  ];

  return (
    <main>
      <Header />

      {/* ═══ 1. ПЕРВЫЙ ЭКРАН (MilitaryHero - Эталонный шаблонный компонент) ═══ */}
      <MilitaryHero
        breadcrumbs={
          <>
            <a href="/-/" style={{ color: 'var(--color-primary)' }}>Главная</a> <span style={{ margin: '0 8px' }}>/</span> 
            <span style={{ color: 'var(--color-text-main)' }}>Гражданам</span>
          </>
        }
        superTitle="Юридическая компания «Де-Юре»"
        title={
          <span style={{ display: 'block' }}>
            <span style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>Юридическая помощь</span>
            <span style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>гражданам в Липецке</span>
          </span>
        }
        subtitle={
          <span style={{ display: 'inline-block', maxWidth: '750px', textWrap: 'balance' }}>
            Каждым направлением занимается профильный юрист. Помогаем разобраться в ситуации, подготовить необходимые документы и защитить ваши интересы в суде и государственных органах.
          </span>
        }
        primaryCtaText="Описать ситуацию"
        primaryCtaLink="#form"
        primaryCtaAnalytics="click_citizens_hero_cta"
        primaryCtaSubtext={
          <>
            Или позвоните:{' '}
            <a href="tel:+74742286838" style={{ color: 'var(--color-deep-blue)', textDecoration: 'none', fontWeight: 600 }} data-analytics="click_citizens_phone" data-placement="hero">
              +7 (4742) 28-68-38
            </a>
          </>
        }
        trustItems={[
          { text: 'Изучим документы и оценим перспективы дела' },
          { text: 'Подберём подходящий способ решения' },
          { text: 'Сопроводим до нужного результата в суде и органах' }
        ]}
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
            
            {/* Background Vector Graphic: Courthouse (Z-index 0 behind mockup) */}
            <svg style={{ 
              position: 'absolute', 
              top: '45%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)', 
              width: '580px', 
              height: '580px', 
              opacity: 0.09, 
              zIndex: 0, 
              pointerEvents: 'none' 
            }} viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="0.6">
              <path d="M3 21h18 M4 21v-2h16v2 M6 19V9 M10 19V9 M14 19V9 M18 19V9 M12 4l-9 5h18l-9-5z M4 9h16"/>
            </svg>

            <div className="mockup-container" style={{ position: 'relative', width: '100%', maxWidth: '440px', height: '420px', zIndex: 1 }}>
              <div className="doc-wrapper-float-4">
                <div className="doc-sheet doc-sheet-4">
                  <div style={{ padding: '30px 25px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ position: 'absolute', top: '25px', right: '25px', width: '80px', height: '80px', border: '1px solid rgba(23, 50, 77, 0.08)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}></div>
                    <div style={{ width: '140px', height: '6px', background: 'var(--color-primary)', margin: '0 auto 30px auto' }}></div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ width: '100%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      <div style={{ width: '90%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="doc-wrapper-float-3">
                <div className="doc-sheet doc-sheet-3">
                  <div style={{ padding: '35px 25px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ position: 'absolute', top: '25px', left: '25px', width: '95px', height: '25px', border: '1.5px solid rgba(23, 50, 77, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-5deg)' }}>
                      <span style={{ fontSize: '4px', fontWeight: 'bold', color: 'rgba(23,50,77,0.4)', fontFamily: 'var(--font-serif)' }}>ЮК ДЕ-ЮРЕ № 14/2026</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '35px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end' }}>
                        <div style={{ width: '95px', height: '3px', background: 'rgba(23,50,77,0.2)' }}></div>
                        <div style={{ width: '55px', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>
                    </div>
                    <div style={{ width: '130px', height: '6px', background: 'var(--color-primary)', margin: '0 auto 30px auto' }}></div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <div style={{ width: '100%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      <div style={{ width: '95%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      <div style={{ width: '80%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="doc-wrapper-float-2">
                <div className="doc-sheet doc-sheet-2">
                  <div style={{ padding: '28px 22px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ position: 'absolute', top: '22px', left: '22px', width: '150px', height: '38px', border: '1.5px solid #C1A066', color: '#C1A066', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-4deg)', opacity: 0.95 }}>
                      <div style={{ fontFamily: 'var(--font-serif)', fontSize: '8px', textAlign: 'center', fontWeight: 'bold', lineHeight: 1.25, letterSpacing: '0.04em' }}>
                        ИСКОВОЕ ЗАЯВЛЕНИЕ<br/>
                        В СУД ОБЩЕЙ ЮРИСДИКЦИИ
                      </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '24px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end' }}>
                        <div style={{ width: '90px', height: '3px', background: 'rgba(23,50,77,0.2)' }}></div>
                        <div style={{ width: '50px', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>
                    </div>

                    <div style={{ width: '140px', height: '6px', background: 'var(--color-primary)', margin: '0 auto 16px auto' }}></div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                      <div style={{ width: '40%', height: '3px', background: 'rgba(23,50,77,0.2)' }}></div>
                      <div style={{ width: '100%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      <div style={{ width: '90%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                    </div>

                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '8px', borderTop: '1px dashed rgba(23,50,77,0.15)' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                        <div style={{ fontSize: '8px', color: 'rgba(23,50,77,0.7)', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>Истец / Заявитель:</div>
                        <div style={{ width: '70px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '8px' }}></div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                        <div style={{ fontSize: '8px', color: 'rgba(23,50,77,0.7)', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>Представитель по доверенности:</div>
                        <div style={{ width: '70px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '8px' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="doc-wrapper-float-1">
                <div className="doc-sheet doc-sheet-1">
                  <div style={{ padding: '26px 22px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(23,50,77,0.2)', paddingBottom: '10px', marginBottom: '14px' }}>
                      <img src="/-/images/logo_dark.png" alt="Де-Юре" style={{ width: '70px', height: 'auto', opacity: 0.95 }} />
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', alignItems: 'flex-end' }}>
                        <span style={{ fontSize: '9px', fontWeight: 'bold', color: 'var(--color-deep-blue)', letterSpacing: '0.05em' }}>ЮРИДИЧЕСКАЯ ПОМОЩЬ</span>
                        <span style={{ fontSize: '8px', color: 'var(--color-primary)', fontWeight: 600 }}>Правовая защита граждан</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
                      <div style={{ width: '100%', height: '3px', background: 'rgba(23,50,77,0.15)' }}></div>
                      <div style={{ width: '90%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      <div style={{ width: '85%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                    </div>

                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '8px', borderTop: '1px solid rgba(23,50,77,0.15)' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                        <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', letterSpacing: '0.02em' }}>ООО ЮК «ДЕ-ЮРЕ»</div>
                        <div style={{ fontSize: '9px', color: 'rgba(23,50,77,0.75)', fontFamily: 'var(--font-sans)', fontWeight: 500 }}>Защита прав граждан • Липецк</div>
                      </div>
                      <div style={{ position: 'relative', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ width: '52px', height: '52px', borderRadius: '50%', border: '1.5px solid #17375E', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-12deg)', opacity: 0.95 }}>
                          <div style={{ width: '42px', height: '42px', borderRadius: '50%', border: '0.8px dashed #17375E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ fontSize: '6.5px', fontWeight: 'bold', color: '#17375E', textAlign: 'center', lineHeight: 1.15, letterSpacing: '0.04em' }}>
                              ДЕ-ЮРЕ<br/>ЛИПЕЦК
                            </span>
                          </div>
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

      {/* ═══ 2. КАТАЛОГ НАПРАВЛЕНИЙ (В точном стиле ServicesTabs с Главной страницы) ═══ */}
      <section className="section bg-light" id="catalog" style={{ padding: '64px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '32px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Юридическая помощь по разным направлениям
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
              Профессиональные услуги юристов и адвокатов Липецка. Каждым делом занимается профильный специалист.
            </p>
          </div>

          {/* Фильтр-табы (как в ServicesTabs) */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '36px', flexWrap: 'wrap' }} role="tablist">
            <button 
              onClick={() => setActiveTab('all')}
              className={`tab-btn ${activeTab === 'all' ? 'tab-btn-active' : 'tab-btn-inactive'}`}
              style={{ padding: '12px 24px', fontSize: '15px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s' }}
            >
              Все направления ({allDirections.length})
            </button>
            <button 
              onClick={() => setActiveTab('group1')}
              className={`tab-btn ${activeTab === 'group1' ? 'tab-btn-active' : 'tab-btn-inactive'}`}
              style={{ padding: '12px 24px', fontSize: '15px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s' }}
            >
              Семья, жильё и недвижимость
            </button>
            <button 
              onClick={() => setActiveTab('group2')}
              className={`tab-btn ${activeTab === 'group2' ? 'tab-btn-active' : 'tab-btn-inactive'}`}
              style={{ padding: '12px 24px', fontSize: '15px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s' }}
            >
              Долги и обязательства
            </button>
            <button 
              onClick={() => setActiveTab('group3')}
              className={`tab-btn ${activeTab === 'group3' ? 'tab-btn-active' : 'tab-btn-inactive'}`}
              style={{ padding: '12px 24px', fontSize: '15px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s' }}
            >
              Защита и особые права
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

          {/* Сетка шаблонных карточек service-card без пустого пространства */}
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
                        transition: 'all 0.3s',
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
                      <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, marginTop: 'auto' }}>
                        <span>Подробнее</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                      transition: 'all 0.3s',
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
                    <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, marginTop: 'auto' }}>
                      <span>Описать ситуацию</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </div>
                </a>
              );
            })}

            {/* Завершающая темная карточка CTA — в стиле шаблонной карточки cta-card с кнопкой white-btn-custom */}
            <div 
              className="card service-card" 
              style={{ 
                height: '100%', 
                minHeight: '210px',
                padding: '28px', 
                background: 'var(--color-deep-blue)', 
                border: '1px solid transparent',
                borderRadius: '0',
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s',
                position: 'relative',
                borderTop: '3px solid var(--color-gold)'
              }}
            >
              <div>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: '#FFFFFF', lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>
                  Не нашли свою ситуацию?
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.55 }}>
                  Опишите вопрос своими словами. Мы изучим имеющиеся документы и подберём профильного специалиста.
                </p>
              </div>
              <div style={{ marginTop: 'auto', paddingTop: '12px' }}>
                <a 
                  href="#form" 
                  className="btn white-btn-custom" 
                  style={{ 
                    padding: '12px 24px', 
                    fontSize: '14px', 
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    width: '100%',
                    textDecoration: 'none'
                  }}
                >
                  Оставить заявку
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. СПЕЦИАЛИСТЫ (TeamCarousel - Шаблонный компонент команды) ═══ */}
      <TeamCarousel />

      {/* ═══ 4. ПРАКТИКА (CasesBlock - Шаблонный компонент) ═══ */}
      <CasesBlock
        title="Примеры дел из нашей практики"
        showAllLink="/-/praktika/"
        showAllText="Смотреть все дела"
        showDemoWarning={false}
        cases={cases.map(c => ({
          category: 'Гражданское право',
          title: c.title,
          problem: c.situation,
          action: c.action,
          result: c.result
        }))}
      />

      {/* ═══ 5. FAQ (FAQBlock - Шаблонный компонент) ═══ */}
      <FAQBlock
        superTitle="Частые вопросы граждан"
        title={<><span style={{ display: 'inline-block' }}>Ответы на</span> <br /><span style={{ display: 'inline-block' }}>частые вопросы</span></>}
        subtitle="Ответы на популярные вопросы о предоставлении юридической помощи гражданам."
        ctaText="Описать ситуацию"
        ctaLink="#form"
        faqs={faqs}
      />

      {/* ═══ 6. СВЯЗАТЬСЯ С НАМИ (Эталонный 2-колоночный шаблонный блок формы) ═══ */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px', padding: '80px 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start', paddingTop: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>Связаться с нами</span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                Получите первичную оценку ситуации
              </h2>
              
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '28px', textWrap: 'balance' }}>
                Кратко опишите ситуацию и оставьте контактные данные. Обращение передадим профильному юристу. Он изучит обстоятельства и предложит возможный порядок действий.
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
              <div style={{ background: 'var(--gradient-cream)', padding: '40px', borderRadius: '0', boxShadow: '0 8px 24px rgba(0,0,0,0.15)', width: '100%', border: '1px solid rgba(0,0,0,0.06)' }}>
                <ContactsForm
                  title="Написать нам"
                  subtitle=""
                  buttonText="Оставить заявку"
                  commentPlaceholder="Кратко опишите вашу ситуацию или вопрос…"
                  subtext="Если вы оставите заявку вечером или в выходной день, мы перезвоним в ближайший рабочий день."
                  hiddenFields={[
                    { name: 'pageId', value: 'TOP-02' },
                    { name: 'pageTitle', value: 'Юридическая помощь гражданам в Липецке' },
                    { name: 'practice', value: 'Юридическая помощь гражданам' }
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
