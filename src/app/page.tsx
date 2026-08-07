// !!! VERSION 29.07 MAIN PAGE - FROZEN BY USER REQUEST !!!
import Link from 'next/link';
import TeamCarousel from '@/components/TeamCarousel';
import Header from '@/components/Header';
import ServicesTabs from '@/components/ServicesTabs';
import FAQBlock from '@/components/FAQBlock';
import PricingBlock from '@/components/PricingBlock';
import PhoneInput from '@/components/PhoneInput';
import ProcessBlock from '@/components/ProcessBlock';
import CasesBlock from '@/components/CasesBlock';
import ReviewsBlock from '@/components/ReviewsBlock';
import ContactsForm from '@/components/ContactsForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />

      {/* 1. HERO */}
      <section style={{ 
        position: 'relative', 
        minHeight: '85vh', 
        display: 'flex', 
        alignItems: 'center',
        paddingTop: '160px',
        background: 'linear-gradient(145deg, var(--color-cream) 0%, rgba(247, 244, 237, 0.4) 100%)',
        overflow: 'hidden'
      }}>
        {/* Decorative circle */}
        <div style={{
          position: 'absolute', top: '-10%', right: '-5%', width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(234, 241, 246, 0.8) 0%, transparent 70%)',
          borderRadius: '50%', zIndex: 0
        }} />
        
        <div className="container grid grid-2" style={{ gap: '60px', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <div className="" style={{ padding: '40px 0', maxWidth: '800px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: '#9B7E55' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: '#9B7E55' }}>
                Юридическая компания в Липецке
              </span>
            </div>
            <h1 className="main-hero-h1" style={{ 
              marginBottom: '24px', 
              lineHeight: '1.2', 
              whiteSpace: 'pre', 
              fontSize: 'clamp(36px, 4vw, 64px)',
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-deep-blue)'
            }}>
              {`Юридическая помощь\nгражданам и бизнесу\nв Липецке`}
            </h1>
            <p style={{ 
              fontSize: '20px', 
              color: 'var(--color-text-secondary)', 
              marginBottom: '30px', 
              maxWidth: '600px', 
              lineHeight: 1.6 
            }}>
              Подключаем специалиста с опытом именно <br />в вашей категории дел — от оценки ситуации <br />до защиты интересов в суде.
            </p>
            
            {/* Hero USPs Row */}
            <div className="hero-usps-row" style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '14px', 
              marginTop: '28px',
              marginBottom: '36px' 
            }}>
              {[
                'Юристы и адвокаты под профиль вашего дела',
                'Опыт изнутри системы: СК, ФССП, госорганы',
                'Честный договор: фиксируем план работ и цены'
              ].map((bulletText, i) => (
                <div key={i} className="specialist-fact-block" style={{ 
                  paddingLeft: '16px', 
                  borderLeft: '3px solid var(--color-gold)', 
                  fontSize: '15px', 
                  color: 'var(--color-deep-blue)', 
                  lineHeight: 1.4,
                  fontWeight: 500
                }}>
                  {bulletText}
                </div>
              ))}
            </div>

            <div className="flex gap-4 main-hero-btns" style={{ marginBottom: '20px' }}>
              <a href="#consultation" className="btn">Обсудить ситуацию</a>
              <a href="#services" className="btn btn-outline">Выбрать направление</a>
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            {/* Darkening gradient under the creative to highlight the background graphic */}
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
            {/* Background Graphic: Courthouse (Centered behind mockup, shifted right) */}
            <svg className="hero-vector-svg" style={{ position: 'absolute', top: '35%', left: '100%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', opacity: 0.08, zIndex: 0, pointerEvents: 'none' }} viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="0.6">
              <path d="M3 21h18 M4 21v-2h16v2 M6 19V9 M10 19V9 M14 19V9 M18 19V9 M12 4l-9 5h18l-9-5z M4 9h16"/>
            </svg>

            {/* INTERACTIVE ANIMATED CSS MOCKUP */}
            <div className="mockup-container" style={{ zIndex: 1 }}>
              <div style={{ position: 'absolute', width: '250px', height: '250px', background: 'var(--color-primary)', filter: 'blur(100px)', opacity: 0.15, borderRadius: '50%' }}></div>
              
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
                  <div style={{ padding: '40px 30px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ position: 'absolute', top: '30px', left: '30px', width: '70px', height: '30px', border: '2px solid rgba(23, 50, 77, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-5deg)' }}></div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '40px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end' }}>
                        <div style={{ width: '100px', height: '4px', background: 'rgba(23,50,77,0.2)' }}></div>
                        <div style={{ width: '60px', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>
                    </div>
                    <div style={{ width: '140px', height: '8px', background: 'var(--color-primary)', margin: '0 auto 40px auto' }}></div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                      <div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                      <div style={{ width: '95%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                      <div style={{ width: '85%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="doc-wrapper-float-2">
                <div className="doc-sheet doc-sheet-2">
                  <div style={{ padding: '30px 25px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ position: 'absolute', top: '25px', left: '25px', width: '80px', height: '35px', border: '1px solid #C8A97E', color: '#C8A97E', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-5deg)', opacity: 0.9 }}>
                      <div style={{ fontFamily: 'var(--font-serif)', fontSize: '5px', textAlign: 'center', fontWeight: 'bold' }}>
                        ПРИЛОЖЕНИЕ №1<br/>
                        К ДОГОВОРУ № 14/2026
                      </div>
                    </div>

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
                        <div style={{ width: '95%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                        <div style={{ width: '85%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <div style={{ width: '50%', height: '4px', background: 'rgba(23,50,77,0.2)' }}></div>
                        <div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                        <div style={{ width: '90%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                        <div style={{ width: '80%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>
                    </div>

                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '10px', borderTop: '1px dashed rgba(23,50,77,0.1)' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.5)', fontFamily: 'var(--font-sans)' }}>Заказчик:</div>
                        <div style={{ width: '80px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '10px' }}></div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.5)', fontFamily: 'var(--font-sans)' }}>Исполнитель:</div>
                        <div style={{ width: '80px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '10px' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="doc-wrapper-float-1">
                <div className="doc-sheet doc-sheet-1">
                  <div style={{ padding: '30px 25px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.03, width: '150px' }}>
                      <img src="images/logo_dark.png" alt="" style={{ width: '100%', height: 'auto' }} />
                    </div>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(23,50,77,0.2)', paddingBottom: '12px', marginBottom: '20px' }}>
                      <img src="images/logo_dark.png" alt="" style={{ width: '60px', height: 'auto', opacity: 0.8 }} />
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end' }}>
                        <div style={{ width: '80px', height: '4px', background: 'rgba(23,50,77,0.2)' }}></div>
                        <div style={{ width: '50px', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>
                    </div>

                    <div style={{ width: '120px', height: '8px', background: 'var(--color-deep-blue)', margin: '0 auto 20px auto' }}></div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <div style={{ width: '12px', height: '4px', background: 'var(--color-primary)' }}></div>
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          <div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                          <div style={{ width: '85%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                          <div style={{ width: '90%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                        </div>
                      </div>
                    </div>

                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '10px', borderTop: '1px solid rgba(23,50,77,0.2)' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <div style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)' }}>ООО ЮК «ДЕ-ЮРЕ»</div>
                        <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>ИНН 4800009680</div>
                      </div>
                      <div style={{ position: 'relative', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ width: '45px', height: '45px', borderRadius: '50%', border: '1.5px solid #17375E', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-15deg)', opacity: 0.85 }}>
                          <div style={{ width: '37px', height: '37px', borderRadius: '50%', border: '0.5px dashed #17375E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ fontSize: '4px', fontWeight: 'bold', color: '#17375E', textAlign: 'center', lineHeight: 1.1 }}>
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
        </div>
      </section>

      {/* 2. SERVICES TABS */}
      <div id="services">
        <ServicesTabs />
      </div>

      {/* 3. USP SECTION */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden', padding: '80px 0', background: 'var(--color-white)' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
            <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
              Преимущества
            </span>
          </div>
          
          <h2 style={{ 
            marginBottom: '40px', 
            fontSize: '42px', 
            fontFamily: 'var(--font-serif)', 
            color: 'var(--color-deep-blue)',
            textAlign: 'left'
          }}>
            Почему мы?
          </h2>
          
          <div className="main-usp-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            borderTop: '1px solid var(--color-primary)', 
            borderLeft: '1px solid rgba(23, 50, 77, 0.1)',
            borderBottom: '1px solid rgba(23, 50, 77, 0.1)'
          }}>
            {[
              {
                tag: "Специализация",
                title: "Подбираем специалиста под категорию дела",
                desc: "Земельный спор передаем юристу по земельному праву, уголовное дело — адвокату. Если задача затрагивает несколько отраслей, определяем состав команды после первичного разбора."
              },
              {
                tag: "Командная работа",
                title: "Подключаем адвоката, когда этого требует дело",
                desc: "В уголовных делах и других ситуациях, где необходим статус адвоката, к работе подключается специалист с действующим адвокатским статусом. Дополнительных экспертов привлекаем после согласования с клиентом."
              },
              {
                tag: "Анализ",
                title: "Варианты и риски до начала основных работ",
                desc: "На первой встрече уточняем обстоятельства и изучаем доступные документы. Если требуется отдельный углубленный анализ, заранее согласовываем его объем и стоимость."
              },
              {
                tag: "Сопровождение",
                title: "Берем на себя согласованные этапы",
                desc: "Подготовка документов, переговоры, обращения в государственные органы, суд и исполнительное производство включаются в работу в зависимости от задачи и фиксируются в договоре."
              },
              {
                tag: "Региональная практика",
                title: "Офис в центре Липецка",
                desc: "Принимаем по адресу: г. Липецк, ул. Советская, д. 35, офис 213. Возможность дистанционной работы определяется характером дела."
              },
              {
                tag: "Понятные условия",
                title: "Состав работ и порядок оплаты — в договоре",
                desc: "До начала основных работ фиксируем, какие действия выполняет специалист, как рассчитывается стоимость и какие расходы оплачиваются отдельно."
              }
            ].map((item, i) => (
              <div key={i} className="usp-card" style={{ 
                padding: '40px', 
                borderRight: '1px solid rgba(23, 50, 77, 0.1)',
                borderBottom: i < 3 ? '1px solid rgba(23, 50, 77, 0.1)' : 'none',
                background: 'rgba(247, 244, 237, 0.45)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div className="usp-accent"></div>
                  <div style={{ fontSize: '11px', letterSpacing: '0.1em', color: 'var(--color-gold)', fontWeight: 700, marginBottom: '16px', textTransform: 'uppercase', position: 'relative', zIndex: 1 }}>
                    {item.tag}
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--color-deep-blue)', marginBottom: '24px', fontFamily: 'var(--font-serif)', position: 'relative', zIndex: 1, lineHeight: 1.3 }}>
                    {item.title}
                  </h3>
                </div>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: '1.6', margin: 0, position: 'relative', zIndex: 1, marginTop: 'auto' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. КАК МЫ РАБОТАЕМ */}
      <ProcessBlock 
        steps={[
          { num: '01', title: 'Первичное обращение', desc: 'Уточняем суть вопроса, запрашиваем необходимые документы и определяем профильного специалиста.' },
          { num: '02', title: 'Консультация и план действий', desc: 'Изучаем исходные материалы, оцениваем возможные варианты, риски, объём и стоимость дальнейшей работы.' },
          { num: '03', title: 'Договор и ведение дела', desc: 'Заключаем договор, формируем правовую позицию и выполняем согласованные действия: готовим документы, представляем интересы в суде, взаимодействуем с ФССП и государственными органами.' }
        ]}
      />

      {/* 5. TEAM */}
      <TeamCarousel />

      {/* 6. CASES */}
      <CasesBlock 
        cases={[
          {
            category: 'Земельное право',
            title: 'Успешное разрешение спора о границах земельного участка',
            problem: 'Сосед незаконно захватил часть территории клиента. Досудебные переговоры по земельному спору не дали результата, потребовалось обращение к юристу.',
            action: 'Провели независимую землеустроительную экспертизу, составили и подали иск об устранении препятствий в пользовании участком в городской суд Липецка.',
            result: 'Границы восстановлены. Выиграно дело в суде первой инстанции, судебные издержки взысканы с ответчика.',
            isDemo: true
          },
          {
            category: 'Семейное право',
            title: 'Защита активов при сложном разделе имущества супругов',
            problem: 'Сложный раздел бизнеса и совместно нажитой недвижимости при разводе с конфликтующей стороной, зафиксированы попытки незаконного сокрытия активов.',
            action: 'Подали заявление на обеспечительный арест имущества. Юрист по семейным делам провел полный финансовый аудит предприятий для защиты доли клиента.',
            result: 'Достигнуто выгодное мировое соглашение в суде. Клиент полностью сохранил законный контроль над бизнесом.',
            isDemo: true
          },
          {
            category: 'Арбитраж',
            title: <>Взыскание задолженности по договору подряда<br />через суд</>,
            problem: 'Заказчик отказался оплачивать выполненные строительные работы по договору строительного подряда, ссылаясь на вымышленные недостатки.',
            action: 'Арбитражный юрист собрал документальную базу, подтверждающую приемку этапов, и инициировал судебную строительно-техническую экспертизу.',
            result: 'Основная задолженность и пени по договору взысканы на 100% через Арбитражный суд Липецкой области.',
            isDemo: true
          }
        ]}
      />

      {/* 7. REVIEWS SECTION */}
      <ReviewsBlock />

      {/* 8. PRICING SECTION */}
      <PricingBlock />

      {/* 9. FAQ SECTION */}
      <FAQBlock />

      {/* 10. CTA SECTION (FORM) */}
      <section className="section bg-white" id="consultation" style={{ scrollMarginTop: '120px' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start', paddingTop: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>Связаться с нами</span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                Обсудите ситуацию с юристом
              </h2>
              
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко опишите ситуацию. Юрист уточнит обстоятельства и сообщит, какие документы потребуются для дальнейшего разбора.
              </p>

              <div style={{ marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a href="tel:+79103503111" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '24px', fontWeight: 'bold', color: 'var(--color-deep-blue)', textDecoration: 'none' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  +7 (910) 350-31-11
                </a>
                <span style={{ fontSize: '15px', color: 'var(--color-text-secondary)' }}>г. Липецк, ул. Советская, д. 35, оф. 213</span>
              </div>
              
              <div style={{ marginTop: '16px' }}>
                <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '15px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  Перезвоним в течение 15 минут в рабочее время
                </div>
                <p style={{ fontSize: '13.5px', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: '16px 0 0 0', padding: '10px 14px', background: 'rgba(16, 39, 59, 0.04)', borderLeft: '3px solid rgba(16, 39, 59, 0.25)', fontStyle: 'italic' }}>
                  Не указывайте в форме паспортные данные, сведения о здоровье и другие конфиденциальные сведения. Их можно передать юристу после установления защищённого способа связи.
                  <span style={{ display: 'block', marginTop: '4px', color: 'rgba(44,51,64,0.55)', fontSize: '12px', fontStyle: 'italic' }}>Основание: статья 10 № 152-ФЗ.</span>
                </p>
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-start' }}>
              <div style={{ background: 'var(--gradient-cream)', padding: '40px', borderRadius: '0', boxShadow: '0 8px 24px rgba(0,0,0,0.15)', width: '100%', border: '1px solid rgba(0,0,0,0.06)' }}>
                <ContactsForm title="Оставить заявку" subtitle={<>Перезвоним вам в течение <br />15 минут в рабочее время.</>} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <Footer />
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 991px) {
          .main-usp-grid {
            grid-template-columns: 1fr !important;
            border-left: none !important;
            border-bottom: none !important;
          }
          .main-usp-grid .usp-card {
            border-right: none !important;
            border-bottom: 1px solid rgba(23, 50, 77, 0.1) !important;
            padding: 24px 20px !important;
          }
        }
        @media (max-width: 768px) {
          .main-hero-h1 {
            white-space: pre-line !important;
          }
          .hero-usps-row {
            flex-direction: column !important;
            margin-top: 30px !important;
            gap: 12px !important;
          }
          .main-hero-btns {
            flex-direction: column !important;
            width: 100% !important;
          }
          .main-hero-btns .btn {
            width: 100% !important;
            text-align: center !important;
          }
        }
      `}} />
    </main>
  );
}

