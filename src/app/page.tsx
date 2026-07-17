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
          <div className="reveal-on-scroll" style={{ padding: '40px 0' }}>
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
            
            <div className="reveal-on-scroll delay-100" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
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
            <Link href="/praktika" className="btn btn-outline reveal-on-scroll delay-100">Смотреть все дела</Link>
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
            <div className="card" style={{ padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', display: 'flex', flexDirection: 'column', background: 'var(--color-white)', transition: 'var(--transition)' }}>
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
            <div className="card" style={{ padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', display: 'flex', flexDirection: 'column', background: 'var(--color-white)', transition: 'var(--transition)' }}>
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
            <div className="card" style={{ padding: '40px', border: '1px solid var(--color-border)', borderRadius: '0', display: 'flex', flexDirection: 'column', background: 'var(--color-white)', transition: 'var(--transition)' }}>
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
              <img src="images/logo.png" alt="Де-Юре" style={{ height: '110px', width: 'auto' }} />
            </div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: 1.5, marginBottom: '16px' }}>
              Юридическая помощь гражданам и бизнесу в Липецке.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="https://t.me/dejure_lipetsk" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.425 11.871l9.957-3.834c.462-.175.882.106.702.775l-1.688 7.954c-.154.673-.55.836-1.11.517l-3.076-2.268-1.484 1.428c-.164.164-.302.302-.619.302l.222-3.136 5.707-5.155c.248-.221-.054-.343-.385-.123L6.598 12.82l-3.037-.948c-.661-.207-.674-.662.138-.98l1.726-.662z" fill="#0B1C2A"/>
                </svg>
              </a>
              <a href="https://vk.com/" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.077 7.039c.046 0 2.378-.027 2.378-.027s1.396-.062 1.579.805c.162.77-.52 2.385-1.22 3.428-.865 1.288-1.745 2.316-1.579 2.693.18.406 1.287 1.096 1.944 1.769.96.983 1.34 2.158 1.34 2.158s.22.428-.152.62c-.413.212-1.425.176-1.425.176s-1.129.043-1.636-.263c-.453-.274-.834-.84-1.258-1.347-1.077-1.287-1.536-1.348-1.85-.945-.405.52-.51 1.44-.51 1.44s-.044.385-.29.534c-.23.14-.64.123-1.58.123-2.025 0-4.088-.938-5.717-2.61-2.903-2.981-5.119-7.85-5.119-7.85s-.14-.35.01-.54c.14-.179.626-.184.626-.184s2.213.018 2.38.018c.15 0 .34.072.434.331 0 0 1.233 2.923 2.802 5.568 1.63 2.748 2.393 3.12 2.71 2.928.455-.276.32-2.482.32-2.482s.018-1.558-.458-2.008c-.347-.328-.805-.417-.962-.438-.13-.017-.23-.153-.16-.254.12-.178.487-.367 1.233-.367h1.61c.316 0 .47.16.52.336.14.498.058 2.656-.237 3.238-.204.403.497.585 1.517-1.157 1.054-1.8 1.83-4.045 1.83-4.045s.103-.263.29-.36c.205-.106.51-.087.51-.087z" />
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
