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
            <h1 style={{ 
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
              Подключаем специалиста с опытом именно в вашей категории дел — от оценки ситуации до защиты интересов в суде.
            </p>
            
            <div className="flex gap-4" style={{ marginBottom: '40px' }}>
              <a href="#consultation" className="btn">Обсудить ситуацию</a>
              <a href="#services" className="btn btn-outline">Выбрать направление</a>
            </div>

            {/* Hero USPs Row */}
            <div style={{ 
              display: 'flex', 
              gap: '20px', 
              marginTop: '50px' 
            }}>
              {[
                { value: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>, 
                  text: 'Юристы и адвокаты под профиль вашего дела' },
                { value: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"></path><path d="M9 8h1"></path><path d="M9 12h1"></path><path d="M9 16h1"></path><path d="M14 8h1"></path><path d="M14 12h1"></path><path d="M14 16h1"></path><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"></path></svg>, 
                  text: 'Опыт изнутри системы: СК, ФССП, госорганы' },
                { value: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><polyline points="9 15 11 17 15 13"></polyline></svg>, 
                  text: 'Честный договор: фиксируем план работ и цены' }
              ].map((bullet, i) => (
                <div key={i} className="hero-bullet-item" style={{ 
                  flex: 1,
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '16px',
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.9)',
                  padding: '20px 24px',
                  boxShadow: '0 15px 35px rgba(23, 50, 77, 0.04)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease, border-color 0.3s ease',
                  cursor: 'default'
                }}>
                  <div style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{bullet.value}</div>
                  <div style={{ color: 'var(--color-deep-blue)', fontSize: '13px', fontWeight: 600, lineHeight: 1.4 }}>
                    {bullet.text}
                  </div>
                </div>
              ))}
            </div>
            <style dangerouslySetInnerHTML={{__html: `
              .hero-bullet-item:hover {
                transform: translateY(-4px);
                box-shadow: 0 20px 35px rgba(23, 50, 77, 0.12) !important;
                background: rgba(255, 255, 255, 0.95) !important;
                border-color: var(--color-gold) !important;
              }
              .hero-bullet-item:hover svg {
                transform: scale(1.1);
                transition: transform 0.3s ease;
              }
            `}} />
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
            <svg style={{ position: 'absolute', top: '35%', left: '100%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', opacity: 0.08, zIndex: 0, pointerEvents: 'none' }} viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="0.6">
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
                        <div style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)' }}>ООО «ДЕДЮРЕ»</div>
                        <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>ИНН 4826145890</div>
                      </div>
                      <div style={{ position: 'relative', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ width: '45px', height: '45px', borderRadius: '50%', border: '1.5px solid #17375E', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-15deg)', opacity: 0.85 }}>
                          <div style={{ width: '37px', height: '37px', borderRadius: '50%', border: '0.5px dashed #17375E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ fontSize: '4px', fontWeight: 'bold', color: '#17375E', textAlign: 'center', lineHeight: 1.1 }}>
                              ДЕДЮРЕ<br/>ЛИПЕЦК
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
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '24px'
          }}>
            {[
              {
                num: "01",
                tag: "Специализация",
                title: "Подбираем специалиста под категорию дела",
                desc: "Земельный спор передаем юристу по земельному праву, уголовное дело — адвокату. Если задача затрагивает несколько отраслей, определяем состав команды после первичного разбора.",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              },
              {
                num: "02",
                tag: "Командная работа",
                title: "Подключаем адвоката, когда этого требует дело",
                desc: "В уголовных делах и других ситуациях, где необходим статус адвоката, к работе подключается специалист с действующим адвокатским статусом. Дополнительных экспертов привлекаем после согласования с клиентом.",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              },
              {
                num: "03",
                tag: "Анализ",
                title: "Варианты и риски до начала основных работ",
                desc: "На первой встрече уточняем обстоятельства и изучаем доступные документы. Если требуется отдельный углубленный анализ, заранее согласовываем его объем и стоимость.",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              },
              {
                num: "04",
                tag: "Сопровождение",
                title: "Берем на себя согласованные этапы",
                desc: "Подготовка документов, переговоры, обращения в государственные органы, суд и исполнительное производство включаются в работу в зависимости от задачи и фиксируются в договоре.",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
              },
              {
                num: "05",
                tag: "Региональная практика",
                title: "Офис в центре Липецка",
                desc: "Принимаем по адресу: г. Липецк, ул. Советская, д. 35, офис 213. Возможность дистанционной работы определяется характером дела.",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              },
              {
                num: "06",
                tag: "Понятные условия",
                title: "Состав работ и порядок оплаты — в договоре",
                desc: "До начала основных работ фиксируем, какие действия выполняет специалист, как рассчитывается стоимость и какие расходы оплачиваются отдельно.",
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              }
            ].map((item, i) => (
              <div key={i} className="usp-organic-card" style={{ 
                padding: '36px 32px', 
                background: 'linear-gradient(145deg, #FAF8F5 0%, #F4EFE6 100%)',
                border: '1px solid rgba(23, 50, 77, 0.08)',
                borderTop: '3px solid var(--color-gold)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: '0 4px 16px rgba(23, 50, 77, 0.03)'
              }}>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  {/* Top bar with Icon, Tag and Watermark number */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ 
                        width: '40px', 
                        height: '40px', 
                        borderRadius: '50%', 
                        background: 'rgba(23, 50, 77, 0.06)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        color: 'var(--color-primary)' 
                      }}>
                        {item.icon}
                      </div>
                      <span style={{ fontSize: '11px', letterSpacing: '0.12em', color: 'var(--color-gold)', fontWeight: 700, textTransform: 'uppercase' }}>
                        {item.tag}
                      </span>
                    </div>
                    <span style={{ 
                      fontSize: '28px', 
                      fontFamily: 'var(--font-serif)', 
                      fontWeight: 700, 
                      color: 'var(--color-gold)', 
                      opacity: 0.3,
                      lineHeight: 1
                    }}>
                      {item.num}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--color-deep-blue)', marginBottom: '20px', fontFamily: 'var(--font-serif)', lineHeight: 1.35 }}>
                    {item.title}
                  </h3>
                </div>

                <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: '1.65', margin: 0, position: 'relative', zIndex: 1, marginTop: 'auto' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <style dangerouslySetInnerHTML={{__html: `
            .usp-organic-card:hover {
              transform: translateY(-6px);
              box-shadow: 0 16px 36px rgba(23, 50, 77, 0.1) !important;
              border-top-color: var(--color-primary) !important;
              background: #FFFFFF !important;
            }
            .usp-organic-card:hover svg {
              transform: scale(1.1);
              transition: transform 0.3s ease;
            }
          `}} />
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
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>Связаться с нами</span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                Обсудите ситуацию с юристом
              </h2>
              
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
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
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
              <div style={{ background: 'var(--gradient-cream)', padding: '40px', borderRadius: '0', boxShadow: '0 8px 24px rgba(0,0,0,0.15)', width: '100%', border: '1px solid rgba(0,0,0,0.06)' }}>
                <ContactsForm title="Оставить заявку" subtitle="Перезвоним вам в течение 15 минут в рабочее время." />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <Footer />
    </main>
  );
}
