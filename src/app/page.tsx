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
          position: 'absolute', top: '-20%', right: '-10%', width: '800px', height: '800px',
          background: 'radial-gradient(circle, var(--color-grey-blue) 0%, rgba(234, 241, 246, 0) 70%)',
          borderRadius: '0', zIndex: 0
        }} />
        
        <div className="container grid grid-2" style={{ gap: '60px', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ padding: '40px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
                Юридическая компания в Липецке
              </span>
            </div>
            <h1 style={{ marginBottom: '24px', lineHeight: '1.2', whiteSpace: 'pre', fontSize: 'clamp(28px, 3.5vw, 48px)' }}>{`Юридическая помощь\nгражданам и бизнесу\nв Липецке`}</h1>
            <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)', marginBottom: '30px', maxWidth: '560px', lineHeight: 1.6 }}>
              Разбираемся в ситуации, формируем правовую позицию и сопровождаем дело на необходимых этапах — от переговоров и обращений в государственные органы до суда и исполнения решения.
            </p>
            
            <div className="flex gap-4" style={{ marginBottom: '40px' }}>
              <a href="#consultation" className="btn">Обсудить ситуацию</a>
              <a href="#services" className="btn btn-outline">Выбрать направление</a>
            </div>
            
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: 500, color: 'var(--color-deep-blue)', background: 'rgba(23, 50, 77, 0.05)', padding: '8px 14px', borderRadius: '0' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Профильный специалист по каждому направлению
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: 500, color: 'var(--color-deep-blue)', background: 'rgba(23, 50, 77, 0.05)', padding: '8px 14px', borderRadius: '0' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Полное сопровождение без вашего присутствия
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: 500, color: 'var(--color-deep-blue)', background: 'rgba(23, 50, 77, 0.05)', padding: '8px 14px', borderRadius: '0' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Честная оценка перспектив и рисков
              </div>
            </div>
          </div>
          <div className="img-placeholder" style={{ height: '600px', boxShadow: 'var(--shadow-md)', border: '8px solid var(--color-white)', padding: 0, overflow: 'hidden' }}>
            <img src="images/hero_office.png" alt="Временная заглушка" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* 2. PRIORITIES */}
      <div id="services">
        <ServicesBlock />
      </div>

      {/* 3. WHY US / USP */}
      <section className="section" style={{ 
        backgroundColor: 'var(--color-white)',
        backgroundImage: 'url(/images/organic-pattern.svg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '100px 0', 
        borderTop: '1px solid var(--color-border)', 
        borderBottom: '1px solid var(--color-border)' 
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ 
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
          <div className="flex justify-between items-center" style={{ marginBottom: '20px' }}>
            <h2 style={{ margin: 0 }}>Результаты нашей работы</h2>
            <Link href="/praktika" className="btn btn-outline">Смотреть все дела</Link>
          </div>
          <div style={{ 
            background: 'var(--color-grey-blue)', 
            padding: '12px 20px', 
            borderRadius: '0', 
            color: 'var(--color-deep-blue)',
            fontSize: '14px',
            marginBottom: '40px',
            borderLeft: '4px solid var(--color-primary)'
          }}>
            <strong>Внимание:</strong> Демонстрационный пример структуры. Блоки будут заменены подтвержденными кейсами компании после утверждения фактуры.
          </div>
          
          <div className="grid grid-2" style={{ gap: '40px' }}>
            <div className="card">
              <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, padding: '4px 12px', background: 'var(--color-grey-blue)', borderRadius: '0', color: 'var(--color-primary)' }}>Направление (например: Земельное право)</span>
              </div>
              <h4 style={{ marginTop: 0, marginBottom: '24px' }}>Спор о границах земельного участка</h4>
              
              <div style={{ background: 'var(--color-cream)', padding: '20px', borderRadius: '0', marginBottom: '20px' }}>
                <p style={{ fontSize: '15px', margin: 0 }}>
                  <strong style={{ color: 'var(--color-primary)' }}>Проблема:</strong> Краткое описание исходной ситуации клиента без дат и сумм.
                </p>
              </div>
              <div style={{ padding: '0 20px', marginBottom: '20px', borderLeft: '2px solid var(--color-primary)' }}>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', margin: 0, marginBottom: '10px' }}>
                  <strong>Контекст:</strong> Какие документы, участники и ограничения имели значение.
                </p>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', margin: 0 }}>
                  <strong>Что сделали:</strong> Какие юридические действия описываются в кейсе (подача иска, экспертиза).
                </p>
              </div>
              <div style={{ background: 'rgba(23, 50, 77, 0.05)', padding: '20px', borderRadius: '0', marginBottom: '20px', flexGrow: 1 }}>
                <p style={{ fontSize: '15px', margin: 0 }}>
                  <strong style={{ color: 'var(--color-deep-blue)' }}>Результат:</strong> Какой подтвержденный юридический результат будет указан после сбора фактуры.
                </p>
              </div>
              <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>
                <strong>Подтверждение:</strong> Судебный акт, соглашение или иной обезличенный документ.
              </div>
            </div>

            <div className="card">
              <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, padding: '4px 12px', background: 'var(--color-grey-blue)', borderRadius: '0', color: 'var(--color-primary)' }}>Направление (например: Семейные споры)</span>
              </div>
              <h4 style={{ marginTop: 0, marginBottom: '24px' }}>Раздел совместно нажитого имущества</h4>
              
              <div style={{ background: 'var(--color-cream)', padding: '20px', borderRadius: '0', marginBottom: '20px' }}>
                <p style={{ fontSize: '15px', margin: 0 }}>
                  <strong style={{ color: 'var(--color-primary)' }}>Проблема:</strong> Краткое описание исходной ситуации клиента.
                </p>
              </div>
              <div style={{ padding: '0 20px', marginBottom: '20px', borderLeft: '2px solid var(--color-primary)' }}>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', margin: 0, marginBottom: '10px' }}>
                  <strong>Контекст:</strong> Какие документы, участники и ограничения имели значение.
                </p>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', margin: 0 }}>
                  <strong>Что сделали:</strong> Какие юридические действия описываются в кейсе.
                </p>
              </div>
              <div style={{ background: 'rgba(23, 50, 77, 0.05)', padding: '20px', borderRadius: '0', marginBottom: '20px', flexGrow: 1 }}>
                <p style={{ fontSize: '15px', margin: 0 }}>
                  <strong style={{ color: 'var(--color-deep-blue)' }}>Результат:</strong> Какой подтвержденный юридический результат будет указан после сбора фактуры.
                </p>
              </div>
              <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>
                <strong>Подтверждение:</strong> Судебный акт, соглашение или иной обезличенный документ.
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
            <div style={{ position: 'relative' }}>
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
              <div className="review-widget" style={{ 
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
              <div className="review-widget" style={{ 
                background: 'var(--color-white)', 
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
        <div style={{ position: 'absolute', bottom: '-50%', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)', borderRadius: '0' }}></div>
        <div className="container grid grid-2" style={{ gap: '80px', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <div>
            <h2 style={{ marginTop: 0, color: 'var(--color-white)' }}>Обсудите ситуацию с юристом</h2>
            <p style={{ fontSize: '20px', marginBottom: '40px', color: 'rgba(255,255,255,0.8)' }}>
              Кратко опишите ситуацию. Юрист уточнит обстоятельства и сообщит, какие документы потребуются для дальнейшего разбора.
            </p>
            <div className="flex-col gap-8">
              <div className="flex items-center gap-4">
                <a href="tel:+79103503111" style={{ fontSize: '28px', fontWeight: 'bold', color: 'var(--color-white)' }}>+7 (910) 350-31-11</a>
              </div>
              <div className="flex items-center gap-4">
                <span style={{ fontSize: '18px', color: 'var(--color-white)' }}>г. Липецк, ул. Советская, д. 35, оф. 213</span>
              </div>
            </div>
          </div>
          
          <div className="card" style={{ padding: '40px', borderRadius: '0' }}>
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
            <div style={{ marginBottom: '24px', marginTop: '-10px', fontSize: '24px', fontWeight: 'bold', color: 'var(--color-white)', fontFamily: 'var(--font-serif)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Де-Юре <span style={{ fontSize: '12px', display: 'block', fontWeight: 'normal', color: 'rgba(255,255,255,0.5)' }}>Прототип</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: 1.5, marginBottom: '16px' }}>
              Юридическая помощь гражданам и бизнесу в Липецке.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>[Ссылки на мессенджеры будут подключены перед запуском]</span>
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
