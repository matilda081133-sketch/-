import Link from 'next/link';
import TeamCarousel from '@/components/TeamCarousel';
import Header from '@/components/Header';
import ServicesBlock from '@/components/ServicesBlock';
import FAQBlock from '@/components/FAQBlock';
import PricingBlock from '@/components/PricingBlock';

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
          <div className="reveal-on-scroll" style={{ padding: '40px 0', maxWidth: '800px' }}>
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
              Надежная защита интересов граждан и организаций. Десятилетний опыт работы с арбитражными, гражданскими и корпоративными спорами на стороне клиента.
            </p>
            
            <div className="flex gap-4" style={{ marginBottom: '40px' }}>
              <a href="#consultation" className="btn">Обсудить ситуацию</a>
              <a href="#services" className="btn btn-outline">Выбрать направление</a>
            </div>

            {/* Organic Minimalist Bullets */}
            <div className="reveal-on-scroll delay-100" style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '24px', 
              marginTop: '40px' 
            }}>
              {[
                { title: 'Бесплатный анализ', desc: 'Честная оценка судебной перспективы вашего дела' },
                { title: 'Конфиденциальность', desc: 'Полная защита данных и соблюдение адвокатской тайны' },
                { title: 'Ведение в суде под ключ', desc: 'Представление интересов без вашего личного участия' }
              ].map((bullet, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  paddingLeft: '16px',
                  borderLeft: '2px solid var(--color-primary)'
                }}>
                  <div>
                    <h4 style={{ margin: '0 0 4px 0', fontSize: '18px', fontWeight: 600, color: 'var(--color-deep-blue)' }}>{bullet.title}</h4>
                    <p style={{ margin: 0, fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>{bullet.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="reveal-on-scroll delay-200" style={{ display: 'flex', justifyContent: 'center' }}>
            {/* INTERACTIVE ANIMATED CSS MOCKUP */}
            <div className="mockup-container">
              {/* Background decorative glows */}
              <div style={{ position: 'absolute', width: '250px', height: '250px', background: 'var(--color-primary)', filter: 'blur(100px)', opacity: 0.15, borderRadius: '50%' }}></div>
              
              {/* Document 4 (Back) */}
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

              {/* Document 3 */}
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

              {/* Document 2 */}
              <div className="doc-wrapper-float-2">
                <div className="doc-sheet doc-sheet-2">
                  <div style={{ padding: '30px 25px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    {/* Stamp at top left */}
                    <div style={{ position: 'absolute', top: '25px', left: '25px', width: '80px', height: '35px', border: '1px solid #C8A97E', color: '#C8A97E', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-5deg)', opacity: 0.9 }}>
                       <div style={{ fontFamily: 'var(--font-serif)', fontSize: '5px', textAlign: 'center', fontWeight: 'bold' }}>
                         ПРИЛОЖЕНИЕ №1<br/>
                         К ДОГОВОРУ № 14/2026
                       </div>
                    </div>

                    {/* Header */}
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '30px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end' }}>
                        <div style={{ width: '100px', height: '4px', background: 'rgba(23,50,77,0.2)' }}></div>
                        <div style={{ width: '60px', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                        <div style={{ width: '80px', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>
                    </div>

                    {/* Title */}
                    <div style={{ width: '160px', height: '8px', background: 'var(--color-primary)', margin: '0 auto 20px auto' }}></div>

                    {/* Solid text blocks */}
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

                    {/* Footer grid */}
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

              {/* Document 1 (Front) */}
              <div className="doc-wrapper-float-1">
                <div className="doc-sheet doc-sheet-1">
                  <div style={{ padding: '30px 25px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    {/* Watermark Logo */}
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.03, width: '150px' }}>
                      <img src="images/logo_dark.png" alt="" style={{ width: '100%', height: 'auto' }} />
                    </div>
                    
                    {/* Header */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(23,50,77,0.2)', paddingBottom: '12px', marginBottom: '20px' }}>
                      <img src="images/logo_dark.png" alt="" style={{ width: '60px', height: 'auto', opacity: 0.8 }} />
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end' }}>
                        <div style={{ width: '80px', height: '4px', background: 'rgba(23,50,77,0.2)' }}></div>
                        <div style={{ width: '50px', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>
                    </div>

                    {/* Title */}
                    <div style={{ width: '120px', height: '8px', background: 'var(--color-deep-blue)', margin: '0 auto 20px auto' }}></div>

                    {/* Clauses / Abstract Lines */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
                      <div style={{ display: 'flex', gap: '8px' }}>
                         <div style={{ width: '12px', height: '4px', background: 'var(--color-primary)' }}></div>
                         <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                           <div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                           <div style={{ width: '85%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                           <div style={{ width: '90%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                         </div>
                      </div>
                      <div style={{ display: 'flex', gap: '8px' }}>
                         <div style={{ width: '12px', height: '4px', background: 'var(--color-primary)' }}></div>
                         <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                           <div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                           <div style={{ width: '75%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                           <div style={{ width: '95%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                         </div>
                      </div>
                      <div style={{ display: 'flex', gap: '8px' }}>
                         <div style={{ width: '12px', height: '4px', background: 'var(--color-primary)' }}></div>
                         <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                           <div style={{ width: '100%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                           <div style={{ width: '60%', height: '4px', background: 'rgba(23,50,77,0.1)' }}></div>
                         </div>
                      </div>
                    </div>

                    {/* Signatures */}
                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '10px', borderTop: '1px dashed rgba(23,50,77,0.1)' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <div style={{ width: '40px', height: '4px', background: 'rgba(23,50,77,0.2)' }}></div>
                        <div style={{ width: '80px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '10px' }}></div>
                        <div style={{ width: '50px', height: '2px', background: 'rgba(23,50,77,0.1)', margin: '0 auto' }}></div>
                      </div>
                      <div className="animated-seal" style={{ width: '60px', height: '60px', borderRadius: '50%', border: '1px solid #9B7E55', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', transform: 'rotate(-15deg)' }}>
                        <div style={{ width: '50px', height: '50px', borderRadius: '50%', border: '1px dashed #9B7E55', background: 'rgba(155, 126, 85, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <img src="images/logo_dark.png" alt="" style={{ width: '30px', opacity: 0.3, filter: 'sepia(1) hue-rotate(340deg) saturate(3)' }} />
                        </div>
                        <div style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', border: '1px solid rgba(155, 126, 85, 0.2)' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRIORITIES */}
      <div id="services">
        <ServicesBlock />
      </div>

      {/* 3. WHY US / USP */}
      <section className="section" style={{ 
        background: 'var(--gradient-light)',
        backgroundImage: 'url(/images/organic-pattern.svg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '100px 0', 
        borderTop: '1px solid var(--color-border)', 
        borderBottom: '1px solid var(--color-border)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Graphic: Shield */}
        <svg style={{ position: 'absolute', top: '-5%', left: '2%', width: '400px', height: '400px', opacity: 0.02, zIndex: 0, pointerEvents: 'none' }} viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="0.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="reveal-on-scroll" style={{ 
            marginTop: 0, 
            marginBottom: '60px', 
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
            borderTop: '1px solid var(--color-primary)', 
            borderLeft: '1px solid rgba(23, 50, 77, 0.1)',
            borderBottom: '1px solid rgba(23, 50, 77, 0.1)'
          }}>
            
            {[
              {
                tag: "Специализация",
                title: "Профильный специалист по каждому направлению",
                desc: "Мы не беремся за всё подряд силами одного юриста. Вашим делом будет заниматься специалист, который ежедневно практикует именно в этой отрасли права."
              },
              {
                tag: "Командная работа",
                title: "Комплексная защита",
                desc: "При необходимости подключаем адвоката и других профильных специалистов из нашей команды, без поиска экспертов на стороне."
              },
              {
                tag: "Анализ",
                title: "Честная оценка рисков",
                desc: "Оцениваем возможные варианты, риски и необходимые этапы работы до подписания договора. Прямо говорим о судебных перспективах."
              },
              {
                tag: "Сопровождение",
                title: "Работа под ключ",
                desc: "Сопровождаем клиента на тех этапах, которые требуются для решения задачи. Представляем интересы по доверенности."
              },
              {
                tag: "Региональная практика",
                title: "Работаем в Липецке и области",
                desc: "Мы местная компания. Знаем специфику работы судов, правоохранительных органов и государственных учреждений нашего региона."
              },
              {
                tag: "Понятные условия",
                title: "Объем работ закреплен в договоре",
                desc: "Никаких внезапных платежей. Точный перечень действий специалиста и порядок оплаты фиксируются в официальном договоре."
              }
            ].map((item, i) => (
              <div key={i} className="usp-card" style={{ 
                padding: '40px', 
                borderRight: '1px solid rgba(23, 50, 77, 0.1)',
                borderBottom: i < 3 ? '1px solid rgba(23, 50, 77, 0.1)' : 'none',
                background: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(12px)',
                position: 'relative'
              }}>
                <div className="usp-accent"></div>
                <div style={{ fontSize: '11px', letterSpacing: '0.1em', color: 'var(--color-text-secondary)', fontWeight: 700, marginBottom: '16px', textTransform: 'uppercase' }}>
                  {item.tag}
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--color-deep-blue)', marginBottom: '16px', fontFamily: 'var(--font-serif)' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 4. HOW WE WORK (APPLE-STYLE STICKY SCROLL) */}
      <section className="section bg-deep-blue" style={{ position: 'relative', overflow: 'visible', padding: '120px 0' }}>
        {/* Abstract Background Glows */}
        <div style={{ position: 'absolute', top: '20%', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)', filter: 'blur(50px)' }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'flex-start' }}>
            
            {/* Sticky Left Sidebar */}
            <div style={{ flex: '1 1 400px', position: 'sticky', top: '120px' }}>
              <h2 style={{ color: 'var(--color-white)', fontFamily: 'var(--font-serif)', fontSize: '48px', marginBottom: '24px', lineHeight: 1.2 }}>
                Как мы<br />строим защиту
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '18px', lineHeight: 1.6, marginBottom: '40px' }}>
                Каждое дело уникально, но наш подход всегда остается системным. Прозрачный процесс работы от первой консультации до итогового решения суда.
              </p>
              <div style={{ width: '60px', height: '2px', background: 'var(--color-primary)' }}></div>
            </div>

            {/* Scrolling Right Content */}
            <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '80px' }}>
              {[
                { num: '01', title: 'Анализ ситуации', desc: 'Мы начинаем с глубокого погружения в вашу проблему. Изучаем все имеющиеся документы, оцениваем риски и судебные перспективы дела. Никаких пустых обещаний — только честный правовой анализ.', img: 'images/stage_1.png' },
                { num: '02', title: 'Стратегия', desc: 'На основе анализа мы разрабатываем оптимальный правовой путь. Собираем необходимую доказательную базу, привлекаем экспертов и готовим процессуальные документы.', img: 'images/stage_2.png' },
                { num: '03', title: 'Реализация защиты', desc: 'Представляем ваши интересы на всех этапах: от досудебных переговоров до участия в судебных заседаниях. Берем на себя всю коммуникацию с оппонентами и госорганами.', img: 'images/stage_3.png' },
                { num: '04', title: 'Результат', desc: 'Достижение поставленной цели — это не только выигрыш в суде, но и фактическое исполнение решения. Мы контролируем процесс до полного восстановления ваших прав.', img: 'images/stage_4.png' },
              ].map((step, i) => (
                <div key={i} className="sticky-stage-card" style={{ 
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '0',
                  padding: '40px',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                  transition: 'transform 0.5s ease',
                }}>
                  <div style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '180px', fontWeight: '900', color: 'rgba(255, 255, 255, 0.02)', lineHeight: 1, zIndex: 0, fontFamily: 'var(--font-serif)', pointerEvents: 'none' }}>
                    {step.num}
                  </div>
                  
                  <div style={{ position: 'relative', width: '100%', paddingTop: '65%', borderRadius: '0', overflow: 'hidden', marginBottom: '40px', zIndex: 1 }}>
                    <img src={step.img} alt={step.title} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }} className="stage-img" />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(16, 39, 59, 0.8) 0%, transparent 100%)' }}></div>
                  </div>

                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                      <div style={{ fontSize: '48px', color: '#D4AF37', fontWeight: 'bold', fontFamily: 'var(--font-serif)', lineHeight: 1 }}>
                        {step.num}
                      </div>
                      <h4 style={{ fontSize: '28px', color: 'var(--color-white)', margin: 0, fontFamily: 'var(--font-serif)' }}>{step.title}</h4>
                    </div>
                    <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </section>

      {/* 5. TEAM */}
      <TeamCarousel />

      {/* 6. CASES */}
      <section className="section bg-cream">
        <div className="container">
          <div className="flex justify-between items-end" style={{ marginBottom: '50px', flexWrap: 'wrap', gap: '20px' }}>
            <div className="reveal-on-scroll">
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '12px', color: 'var(--color-primary)' }}>
                  Практика
                </span>
              </div>
              <h2 style={{ margin: 0, fontSize: '42px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)' }}>Результаты нашей работы</h2>
            </div>
            <Link href="/praktika" className="btn btn-outline reveal-on-scroll delay-100" style={{ padding: '12px 24px', height: 'fit-content' }}>Смотреть все дела</Link>
          </div>
          
          <div className="reveal-on-scroll delay-200" style={{ 
            background: 'transparent', 
            padding: '16px 24px', 
            border: '1px solid var(--color-border)',
            color: 'var(--color-text-secondary)',
            fontSize: '14px',
            marginBottom: '40px',
            borderLeft: '4px solid var(--color-primary)',
            maxWidth: '800px',
            fontStyle: 'italic'
          }}>
            Внимание: Ниже представлены демонстрационные макеты кейсов. Они будут заменены реальной практикой после утверждения фактуры.
          </div>
          
          <div className="grid grid-3 reveal-on-scroll delay-200" style={{ gap: '30px' }}>
            
            {/* Case Card 1 */}
            <div className="card" style={{ padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', display: 'flex', flexDirection: 'column', background: 'var(--gradient-light)', transition: 'var(--transition)' }}>
              <div style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '20px', marginBottom: '24px' }}>
                <span style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#D4AF37', marginBottom: '12px', fontWeight: 600 }}>Земельное право</span>
                <h4 style={{ margin: 0, color: 'var(--color-deep-blue)', fontSize: '20px', fontFamily: 'var(--font-serif)', lineHeight: 1.4 }}>Спор о границах земельного участка</h4>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flexGrow: 1 }}>
                <div>
                  <h5 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>Проблема</h5>
                  <p style={{ fontSize: '14px', margin: 0, lineHeight: 1.6 }}>Сосед незаконно захватил часть территории клиента. Досудебные переговоры не дали результата.</p>
                </div>
                
                <div>
                  <h5 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>Что сделали</h5>
                  <p style={{ fontSize: '14px', margin: 0, lineHeight: 1.6 }}>Провели независимую землеустроительную экспертизу, подали иск об устранении препятствий.</p>
                </div>
              </div>
              
              <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid var(--color-border)' }}>
                <h5 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-primary)', marginBottom: '8px', fontWeight: 600 }}>Результат</h5>
                <p style={{ fontSize: '15px', margin: 0, fontWeight: 500, color: 'var(--color-deep-blue)' }}>Границы восстановлены. Выиграно дело в суде первой инстанции.</p>
              </div>
            </div>

            {/* Case Card 2 */}
            <div className="card" style={{ padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', display: 'flex', flexDirection: 'column', background: 'var(--gradient-light)', transition: 'var(--transition)' }}>
              <div style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '20px', marginBottom: '24px' }}>
                <span style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#D4AF37', marginBottom: '12px', fontWeight: 600 }}>Семейное право</span>
                <h4 style={{ margin: 0, color: 'var(--color-deep-blue)', fontSize: '20px', fontFamily: 'var(--font-serif)', lineHeight: 1.4 }}>Раздел совместно нажитого имущества</h4>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flexGrow: 1 }}>
                <div>
                  <h5 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>Проблема</h5>
                  <p style={{ fontSize: '14px', margin: 0, lineHeight: 1.6 }}>Сложный раздел бизнеса и недвижимости при разводе с конфликтующей стороной, попытки сокрытия активов.</p>
                </div>
                
                <div>
                  <h5 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>Что сделали</h5>
                  <p style={{ fontSize: '14px', margin: 0, lineHeight: 1.6 }}>Наложили обеспечительный арест на активы, провели полный финансовый аудит предприятий.</p>
                </div>
              </div>
              
              <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid var(--color-border)' }}>
                <h5 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-primary)', marginBottom: '8px', fontWeight: 600 }}>Результат</h5>
                <p style={{ fontSize: '15px', margin: 0, fontWeight: 500, color: 'var(--color-deep-blue)' }}>Достигнуто выгодное мировое соглашение. Клиент сохранил контроль над бизнесом.</p>
              </div>
            </div>

            {/* Case Card 3 */}
            <div className="card" style={{ padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', display: 'flex', flexDirection: 'column', background: 'var(--gradient-light)', transition: 'var(--transition)' }}>
              <div style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '20px', marginBottom: '24px' }}>
                <span style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#D4AF37', marginBottom: '12px', fontWeight: 600 }}>Арбитраж</span>
                <h4 style={{ margin: 0, color: 'var(--color-deep-blue)', fontSize: '20px', fontFamily: 'var(--font-serif)', lineHeight: 1.4 }}>Взыскание долга по договору подряда</h4>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flexGrow: 1 }}>
                <div>
                  <h5 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>Проблема</h5>
                  <p style={{ fontSize: '14px', margin: 0, lineHeight: 1.6 }}>Заказчик отказался оплачивать выполненные строительные работы, ссылаясь на вымышленные недостатки.</p>
                </div>
                
                <div>
                  <h5 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>Что сделали</h5>
                  <p style={{ fontSize: '14px', margin: 0, lineHeight: 1.6 }}>Собрали документальную базу, подтверждающую приемку, инициировали строительно-техническую экспертизу.</p>
                </div>
              </div>
              
              <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid var(--color-border)' }}>
                <h5 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-primary)', marginBottom: '8px', fontWeight: 600 }}>Результат</h5>
                <p style={{ fontSize: '15px', margin: 0, fontWeight: 500, color: 'var(--color-deep-blue)' }}>Задолженность и пени в размере 100% взысканы через Арбитражный суд.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. REVIEWS (Creative Premium Block) */}
      <section className="section bg-white" style={{ padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
        {/* Background decorative elements */}
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(23, 50, 77, 0.03) 0%, transparent 70%)', zIndex: 0 }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="grid grid-2" style={{ gap: '80px', alignItems: 'center' }}>
            
            {/* Left Content */}
            <div className="reveal-on-scroll" style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-80px', left: '-40px', fontSize: '320px', fontFamily: 'var(--font-serif)', color: 'rgba(23, 50, 77, 0.04)', lineHeight: 1, zIndex: 0, pointerEvents: 'none' }}>
                “
              </div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                  <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                  <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
                    Репутация
                  </span>
                </div>
                <h2 style={{ fontSize: '42px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', marginBottom: '32px', lineHeight: 1.2 }}>
                  Тишина — лучшее доказательство успеха.
                </h2>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', lineHeight: 1.8, marginBottom: '24px' }}>
                  Мы соблюдаем строгую адвокатскую тайну и принципиально не публикуем имена доверителей или детали выигранных дел на сайте.
                </p>
                <p style={{ color: 'var(--color-deep-blue)', fontSize: '18px', lineHeight: 1.8, fontWeight: 500 }}>
                  Наша реальная оценка — это независимые рейтинги на официальных площадках.
                </p>
              </div>
            </div>

            {/* Right Content - Floating Badges */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', position: 'relative' }}>
              {/* Yandex Badge */}
              <div className="review-widget reveal-on-scroll delay-100" style={{ 
                background: 'var(--color-deep-blue)', 
                padding: '40px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                boxShadow: '0 30px 60px rgba(16, 39, 59, 0.1)',
                transform: 'translateX(-20px)'
              }}>
                <div>
                  <div style={{ fontSize: '32px', fontWeight: '900', color: '#fff', letterSpacing: '-1px', marginBottom: '8px' }}>
                    Яндекс <span style={{ color: '#ffcc00' }}>Карты</span>
                  </div>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    {[1,2,3,4,5].map(star => (
                      <svg key={star} width="20" height="20" viewBox="0 0 24 24" fill="#ffcc00" stroke="#ffcc00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    ))}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Рейтинг</div>
                  <div style={{ color: '#ffcc00', fontWeight: 'bold', fontSize: '16px' }}>Формируется</div>
                </div>
              </div>

              {/* 2GIS Badge */}
              <div className="review-widget reveal-on-scroll delay-200" style={{ 
                background: 'var(--gradient-light)', 
                border: '1px solid var(--color-border)',
                padding: '40px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                boxShadow: '0 30px 60px rgba(16, 39, 59, 0.05)',
                transform: 'translateX(20px)'
              }}>
                <div>
                  <div style={{ fontSize: '32px', fontWeight: '900', color: 'var(--color-deep-blue)', letterSpacing: '-1px', marginBottom: '8px' }}>
                    2<span style={{ color: '#A4D33B' }}>ГИС</span>
                  </div>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    {[1,2,3,4,5].map(star => (
                      <svg key={star} width="20" height="20" viewBox="0 0 24 24" fill="#A4D33B" stroke="#A4D33B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    ))}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ color: 'var(--color-text-secondary)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Профиль</div>
                  <div style={{ color: '#A4D33B', fontWeight: 'bold', fontSize: '16px' }}>На модерации</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 8. PRICING SECTION */}
      <PricingBlock />

      {/* 9. FAQ SECTION */}
      <FAQBlock />

      {/* 10. CTA SECTION (FORM) */}
      <section id="consultation" className="section bg-deep-blue" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Background Graphic: Scales of Justice */}
        <svg style={{ position: 'absolute', top: '0%', left: '2%', width: '400px', height: '400px', opacity: 0.02, zIndex: 0, pointerEvents: 'none' }} viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="0.5">
          <path d="M12 2v20 M4 10v6a2 2 0 0 0 2 2h2 M20 10v6a2 2 0 0 1-2 2h-2 M12 6H4 M12 6h8 M12 22h-4 M12 22h4 M8 6l-4 4 M16 6l4 4"/>
        </svg>

        <div style={{ position: 'absolute', bottom: '-50%', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)', borderRadius: '0' }}></div>
        <div className="container grid grid-2" style={{ gap: '80px', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <div>
            <h2 style={{ marginTop: 0, color: 'var(--color-white)' }}>Обсудите ситуацию с юристом</h2>
            <p style={{ fontSize: '20px', marginBottom: '40px', color: 'rgba(255,255,255,0.8)' }}>
              Кратко опишите ситуацию. Юрист уточнит обстоятельства и сообщит, какие документы потребуются для дальнейшего разбора.
            </p>
            <div style={{ marginTop: '20px' }}>
              <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
                <a href="tel:+79103503111" style={{ fontSize: '28px', fontWeight: 'bold', color: 'var(--color-white)', marginBottom: '8px' }}>+7 (910) 350-31-11</a>
                <span style={{ fontSize: '18px', color: 'var(--color-white)', textAlign: 'center' }}>г. Липецк, ул. Советская, д. 35, оф. 213</span>
              </div>
            </div>
          </div>
          
          <div className="card reveal-on-scroll delay-200" style={{ padding: '40px', borderRadius: '0' }}>
            <h3 style={{ marginTop: 0, color: 'var(--color-primary)', marginBottom: '10px' }}>Оставить заявку</h3>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '30px' }}>Перезвоним вам в течение 15 минут в рабочее время.</p>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <input type="text" placeholder="Ваше имя" style={{ padding: '16px', border: '1px solid var(--color-border)', borderRadius: '0', fontSize: '16px', transition: 'border-color 0.3s', outline: 'none' }} />
              <input type="tel" placeholder="+7 (___) ___-__-__" style={{ padding: '16px', border: '1px solid var(--color-border)', borderRadius: '0', fontSize: '16px', transition: 'border-color 0.3s', outline: 'none' }} />
              <button type="button" className="btn" style={{ width: '100%', padding: '18px', fontSize: '18px', marginTop: '10px' }}>Обсудить ситуацию</button>
              <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', textAlign: 'center', margin: 0 }}>
                Отправляя заявку, вы соглашаетесь с <Link href="/privacy" className="link-animated" style={{ fontSize: '13px' }}>политикой конфиденциальности</Link>.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer style={{ backgroundColor: '#0B1C2A', color: 'var(--color-white)', padding: '40px 0 20px' }}>
        <div className="container grid grid-4" style={{ gap: '30px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '30px', marginBottom: '20px' }}>
          <div>
            <div style={{ marginBottom: '24px', marginTop: '-10px' }}>
              <img src="images/logo.png" alt="Де-Юре" style={{ height: '150px', width: 'auto' }} />
            </div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: 1.5, marginBottom: '16px' }}>
              Юридическая помощь гражданам и бизнесу в Липецке.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="https://max.ru/join/j5TVaYjQLyJwXfW1azJJ84YZToaXviRu-YFPDy8gMBI" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                <svg width="20" height="20" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0ZM24.2314 12.5C17.8663 12.5 12.4942 17.4255 12.4941 23.9727C12.4941 26.714 13.0015 28.6059 13.4482 30.3047C13.8233 31.6836 14.1543 32.9467 14.1543 34.4414C14.3143 36.4326 17.9823 35.2685 19.1406 33.7793C20.9718 35.1031 22.0251 35.4346 24.292 35.4346C30.5586 35.4011 35.6151 30.2999 35.5938 24.0332C35.5937 17.6682 30.602 12.5 24.2314 12.5ZM24.3857 18.1592V18.165C27.5981 18.349 30.0709 21.0719 29.9453 24.2871C29.7296 27.4955 26.9854 29.9406 23.7734 29.7861C22.768 29.7055 21.8016 29.3614 20.9717 28.7881C20.4699 29.2899 19.6648 29.9402 19.3447 29.8633C18.6774 29.6868 17.8938 26.2951 18.335 23.5098C18.87 20.1452 21.2859 17.9993 24.3857 18.1592Z" />
                </svg>
              </a>
              <a href="https://vk.com/" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                <svg width="20" height="20" viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50ZM25 34c.406 19.488 10.15 31.2 27.233 31.2h.968V54.05c6.278.625 11.024 5.216 12.93 11.15H75c-2.436-8.87-8.838-13.773-12.836-15.647C66.162 47.242 71.783 41.62 73.126 34h-8.058c-1.749 6.184-6.932 11.805-11.867 12.336V34h-8.057v21.611C40.147 54.362 33.838 48.304 33.556 34H25Z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 style={{ color: 'var(--color-white)', margin: '0 0 16px 0', fontSize: '16px' }}>Гражданам</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><Link href="/grazhdanam/semejnie" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', transition: 'color 0.3s' }}>Семейные споры</Link></li>
              <li><Link href="/grazhdanam/bankrotstvo" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', transition: 'color 0.3s' }}>Банкротство физ. лиц</Link></li>
              <li><Link href="/grazhdanam/nasledstvo" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', transition: 'color 0.3s' }}>Наследственные дела</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: 'var(--color-white)', margin: '0 0 16px 0', fontSize: '16px' }}>Бизнесу</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><Link href="/biznesu/arbitrazh" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', transition: 'color 0.3s' }}>Арбитражные споры</Link></li>
              <li><Link href="/biznesu/nalogi" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', transition: 'color 0.3s' }}>Налоговая практика</Link></li>
              <li><Link href="/biznesu/bankrotstvo" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', transition: 'color 0.3s' }}>Банкротство юр. лиц</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: 'var(--color-white)', margin: '0 0 16px 0', fontSize: '16px' }}>Компания</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><Link href="/o-kompanii" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', transition: 'color 0.3s' }}>О компании</Link></li>
              <li><Link href="/praktika" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', transition: 'color 0.3s' }}>Практика</Link></li>
              <li><Link href="/publikacii" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', transition: 'color 0.3s' }}>Публикации</Link></li>
              <li><Link href="/kontakty" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', transition: 'color 0.3s' }}>Контакты</Link></li>
            </ul>
          </div>
        </div>
        <div className="container" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginBottom: '20px', display: 'flex', flexWrap: 'wrap', rowGap: '6px', columnGap: '16px' }}>
          <span>ООО ЮК "ДЕ-ЮРЕ"</span>
          <span>ИНН: 4800009680</span>
          <span>ОГРН: 1234800008464</span>
          <span>Адрес: 398902, Липецкая область, г. Липецк, ул. Юношеская, влд. 46Б, помещение 1</span>
          <span>Телефон: +7 (910) 350-31-11</span>
        </div>
        <div className="container flex justify-between" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
          <span>© 2026 ООО «Де-Юре». Все права защищены.</span>
          <Link href="/privacy" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'underline' }}>Политика конфиденциальности</Link>
        </div>
      </footer>
    </main>
  );
}
