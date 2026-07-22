import Link from 'next/link';
import TeamCarousel from '@/components/TeamCarousel';
import Header from '@/components/Header';
import ServicesTabs from '@/components/ServicesTabs';
import FAQBlock from '@/components/FAQBlock';
import PricingBlock from '@/components/PricingBlock';
import PhoneInput from '@/components/PhoneInput';
import ReviewsBlock from '@/components/ReviewsBlock';
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
 
 <div className="container grid grid-2" style={{ gap: '60px', alignItems: 'stretch', position: 'relative', zIndex: 1 }}>
 <div className="" style={{ padding: '40px 0', maxWidth: '800px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
 <div  style={{ 
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
 <div key={i} style={{ 
 flex: 1,
 display: 'flex', 
 alignItems: 'center', 
 gap: '16px',
 background: 'rgba(255, 255, 255, 0.7)',
 backdropFilter: 'blur(10px)',
 border: '1px solid rgba(255, 255, 255, 0.9)',
 padding: '20px 24px',
 boxShadow: '0 15px 35px rgba(23, 50, 77, 0.04)'
 }}>
 <div style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{bullet.value}</div>
 <div style={{ color: 'var(--color-deep-blue)', fontSize: '13px', fontWeight: 600, lineHeight: 1.4 }}>
 {bullet.text}
 </div>
 </div>
 ))}
 </div>
 </div>
 
 <div style={{ display: 'flex', flexDirection: 'column', flex: 1, position: 'relative', height: '100%' }}>
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

        {/* HERO IMAGE */}
        <div className="photo-hover-shadow" style={{ 
          flex: 1,
          width: '100%',
          minHeight: '600px',
          background: 'var(--color-cream)', 
          borderRadius: '4px',
          overflow: 'hidden',
          position: 'relative'
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="images/hero-photo.jpg" 
            alt="Юридическая помощь" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
 </div>
 </div>
 </section>

 {/* 2. PRIORITIES */}
 <div id="services">
 <ServicesTabs />
 </div>

 {/* 3. WHY US / USP */}
 <section className="section" style={{ 
 background: 'var(--gradient-light)',
 backgroundImage: 'url(/images/organic-pattern.svg)', 
 backgroundSize: 'cover',
 backgroundPosition: 'center',
 backgroundRepeat: 'no-repeat',
 padding: '60px 0', 
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
 <h2 className="" style={{ 
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
 num: "01",
 tag: "Специализация",
 title: "Подбираем специалиста под категорию дела",
 desc: "Земельный спор передаем юристу по земельному праву, уголовное дело — адвокату. Если задача затрагивает несколько отраслей, определяем состав команды после первичного разбора."
 },
 {
 num: "02",
 tag: "Командная работа",
 title: "Подключаем адвоката, когда этого требует дело",
 desc: "В уголовных делах и других ситуациях, где необходим статус адвоката, к работе подключается специалист с действующим адвокатским статусом. Дополнительных экспертов привлекаем после согласования с клиентом."
 },
 {
 num: "03",
 tag: "Анализ",
 title: "Варианты и риски до начала основных работ",
 desc: "На первой встрече уточняем обстоятельства и изучаем доступные документы. Если требуется отдельный углубленный анализ, заранее согласовываем его объем и стоимость."
 },
 {
 num: "04",
 tag: "Сопровождение",
 title: "Берем на себя согласованные этапы",
 desc: "Подготовка документов, переговоры, обращения в государственные органы, суд и исполнительное производство включаются в работу в зависимости от задачи и фиксируются в договоре."
 },
 {
 num: "05",
 tag: "Региональная практика",
 title: "Офис в центре Липецка",
 desc: "Принимаем по адресу: г. Липецк, ул. Советская, д. 35, офис 213. Возможность дистанционной работы определяется характером дела."
 },
 {
 num: "06",
 tag: "Понятные условия",
 title: "Состав работ и порядок оплаты — в договоре",
 desc: "До начала основных работ фиксируем, какие действия выполняет специалист, как рассчитывается стоимость и какие расходы оплачиваются отдельно."
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
 <div style={{ fontSize: '11px', letterSpacing: '0.1em', color: 'var(--color-gold)', fontWeight: 700, marginBottom: '16px', textTransform: 'uppercase', position: 'relative', zIndex: 1 }}>
 {item.tag}
 </div>
 <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--color-deep-blue)', marginBottom: '16px', fontFamily: 'var(--font-serif)', position: 'relative', zIndex: 1 }}>
 {item.title}
 </h3>
 <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: '1.6', margin: 0, position: 'relative', zIndex: 1 }}>
 {item.desc}
 </p>
 </div>
 ))}

 </div>
 </div>
 </section>

 {/* 4. КАК МЫ РАБОТАЕМ (СВЕТЛЫЙ СТАТИЧНЫЙ БЛОК) */}
 <section className="section bg-light" style={{ position: 'relative', overflow: 'hidden', padding: '80px 0', background: 'var(--color-white)' }}>
 {/* Organic graphic background */}
 <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', background: 'radial-gradient(circle at 0% 0%, rgba(193, 160, 102, 0.04) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(23, 50, 77, 0.03) 0%, transparent 50%)', pointerEvents: 'none' }}></div>
 
 <div className="container" style={{ position: 'relative', zIndex: 1 }}>
 <div style={{ textAlign: 'center', marginBottom: '50px' }}>
 <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', color: 'var(--color-deep-blue)', marginBottom: '24px' }}>
 Что происходит после обращения
 </h2>
 <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
 Каждое судебное дело уникально, но наш подход всегда остается системным. Прозрачный процесс работы от первой юридической консультации и досудебного урегулирования до вынесения итогового решения суда.
 </p>
 </div>

 <div style={{ position: 'relative' }}>
 <div className="grid grid-3" style={{ gap: '40px' }}>
 {[
 { num: '01', title: 'Первичное обращение', desc: 'Уточняем суть вопроса, запрашиваем необходимые документы и определяем профильного специалиста.' },
 { num: '02', title: 'Консультация и план действий', desc: 'Изучаем исходные материалы, оцениваем возможные варианты, риски, объём и стоимость дальнейшей работы.' },
 { num: '03', title: 'Договор и ведение дела', desc: 'Заключаем договор, формируем правовую позицию и выполняем согласованные действия: готовим документы, представляем интересы в суде, взаимодействуем с ФССП и государственными органами.' },
 ].map((step, i) => (
 <div key={i} style={{ 
 position: 'relative',
 zIndex: 1,
 display: 'flex',
 flexDirection: 'column',
 background: 'transparent',
 padding: '10px'
 }} className="stage-item">
 
 {/* Organic Number / Dot */}
 <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
 <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--color-white)', border: '1px solid rgba(193, 160, 102, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', fontWeight: '300', fontSize: '24px', fontFamily: 'var(--font-serif)', boxShadow: '0 10px 20px rgba(23, 50, 77, 0.05)', position: 'relative' }}>
 {step.num}
 <div style={{ position: 'absolute', inset: '4px', borderRadius: '50%', border: '1px dashed rgba(193, 160, 102, 0.3)' }}></div>
 </div>
 </div>

 <h4 style={{ fontSize: '22px', color: 'var(--color-deep-blue)', marginBottom: '16px', fontFamily: 'var(--font-serif)', lineHeight: 1.3, textAlign: 'center' }}>
 {step.title}
 </h4>
 <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0, textAlign: 'center' }}>
 {step.desc}
 </p>
 </div>
 ))}
 </div>
 
 {/* CTA inside Process Block */}
 <div className="process-cta-banner" style={{ 
 marginTop: '40px', 
 background: 'var(--color-deep-blue)', 
 padding: '24px 32px',
 display: 'flex',
 alignItems: 'center',
 justifyContent: 'space-between',
 gap: '24px',
 flexWrap: 'wrap'
 }}>
 <div style={{ flex: '1 1 300px' }}>
 <h3 style={{ fontSize: '18px', color: 'var(--color-white)', marginBottom: '8px', fontWeight: '600', fontFamily: 'var(--font-sans)' }}>
 Начните с первичного обращения
 </h3>
 <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)', margin: 0, lineHeight: 1.5 }}>
 Кратко опишите ситуацию — мы уточним обстоятельства, скажем, какие документы потребуются, и определим следующий шаг.
 </p>
 </div>
 <a href="#consultation" className="btn btn-light" style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>Обсудить ситуацию</a>
 </div>

 </div>
 </div>
 <style dangerouslySetInnerHTML={{__html:`
 .stage-item {
 transition: transform 0.4s ease;
 }
 .stage-item:hover {
 transform: translateY(-8px);
 }
 .stage-item:hover > div > div {
 background: var(--color-primary) !important;
 color: var(--color-white) !important;
 box-shadow: 0 15px 30px rgba(193, 160, 102, 0.3) !important;
 }
 .stage-item > div > div {
 transition: all 0.4s ease;
 }
 `}} />
 </section>

 {/* 5. TEAM */}
 <TeamCarousel />

 {/* 6. CASES */}
 <section className="section bg-white">
 <div className="container">
 <div className="flex justify-between items-end" style={{ marginBottom: '50px', flexWrap: 'wrap', gap: '20px' }}>
 <div className="">
 <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
 <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-primary)' }}></div>
 <span style={{ textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '12px', color: 'var(--color-primary)' }}>
 Практика
 </span>
 </div>
 <h2 style={{ margin: 0, fontSize: '42px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)' }}>Результаты нашей работы</h2>
 </div>
 <Link href="/praktika" className="btn btn-outline " style={{ padding: '12px 24px', height: 'fit-content' }}>Смотреть все дела</Link>
 </div>
 
 <div  style={{ 
 background: 'var(--color-white)', 
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
 
 <div className="grid grid-3 " style={{ gap: '30px' }}>
 
 {/* Case Card 1 */}
 <div className="card" style={{ padding: '40px', border: 'none', borderRadius: '0', borderTop: '4px solid var(--color-primary)', display: 'flex', flexDirection: 'column', background: 'var(--color-white)', transition: 'var(--transition)', position: 'relative', boxShadow: '0 15px 40px rgba(23, 50, 77, 0.08)' }}>
 <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(23, 50, 77, 0.05)', border: '1px solid rgba(23, 50, 77, 0.1)', color: 'var(--color-text-secondary)', padding: '4px 10px', fontSize: '11px', borderRadius: '4px', fontWeight: 500, letterSpacing: '0.02em' }}>Демонстрация формата</div>
 <div style={{ paddingBottom: '20px', marginBottom: '24px' }}>
 <span style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#D4AF37', marginBottom: '12px', fontWeight: 600 }}>Земельное право</span>
 <h4 style={{ margin: 0, color: 'var(--color-deep-blue)', fontSize: '20px', fontFamily: 'var(--font-serif)', lineHeight: 1.4 }}>Успешное разрешение спора о границах земельного участка</h4>
 </div>
 
 <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flexGrow: 1 }}>
 <div>
 <h5 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>Проблема</h5>
 <p style={{ fontSize: '14px', margin: 0, lineHeight: 1.6 }}>Сосед незаконно захватил часть территории клиента. Досудебные переговоры по земельному спору не дали результата, потребовалось обращение к юристу.</p>
 </div>
 
 <div>
 <h5 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>Что сделали</h5>
 <p style={{ fontSize: '14px', margin: 0, lineHeight: 1.6 }}>Провели независимую землеустроительную экспертизу, составили и подали иск об устранении препятствий в пользовании участком в городской суд Липецка.</p>
 </div>
 </div>
 
 <div style={{ marginTop: '30px', background: 'rgba(193, 160, 102, 0.05)', padding: '20px', borderRadius: '4px', border: '1px solid rgba(193, 160, 102, 0.2)', borderLeft: '4px solid var(--color-gold)' }}>
 <h5 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-primary)', marginBottom: '8px', fontWeight: 600 }}>Ключевой результат</h5>
 <p style={{ fontSize: '15px', margin: 0, fontWeight: 500, color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>Границы восстановлены. Выиграно дело в суде первой инстанции, судебные издержки взысканы с ответчика.</p>
 </div>
 </div>

 {/* Case Card 2 */}
 <div className="card" style={{ padding: '40px', border: 'none', borderRadius: '0', borderTop: '4px solid var(--color-primary)', display: 'flex', flexDirection: 'column', background: 'var(--color-white)', transition: 'var(--transition)', position: 'relative', boxShadow: '0 15px 40px rgba(23, 50, 77, 0.08)' }}>
 <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(23, 50, 77, 0.05)', border: '1px solid rgba(23, 50, 77, 0.1)', color: 'var(--color-text-secondary)', padding: '4px 10px', fontSize: '11px', borderRadius: '4px', fontWeight: 500, letterSpacing: '0.02em' }}>Демонстрация формата</div>
 <div style={{ paddingBottom: '20px', marginBottom: '24px' }}>
 <span style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#D4AF37', marginBottom: '12px', fontWeight: 600 }}>Семейное право</span>
 <h4 style={{ margin: 0, color: 'var(--color-deep-blue)', fontSize: '20px', fontFamily: 'var(--font-serif)', lineHeight: 1.4 }}>Защита активов при сложном разделе имущества супругов</h4>
 </div>
 
 <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flexGrow: 1 }}>
 <div>
 <h5 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>Проблема</h5>
 <p style={{ fontSize: '14px', margin: 0, lineHeight: 1.6 }}>Сложный раздел бизнеса и совместно нажитой недвижимости при разводе с конфликтующей стороной, зафиксированы попытки незаконного сокрытия активов.</p>
 </div>
 
 <div>
 <h5 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>Что сделали</h5>
 <p style={{ fontSize: '14px', margin: 0, lineHeight: 1.6 }}>Подали заявление на обеспечительный арест имущества. Юрист по семейным делам провел полный финансовый аудит предприятий для защиты доли клиента.</p>
 </div>
 </div>
 
 <div style={{ marginTop: '30px', background: 'rgba(193, 160, 102, 0.05)', padding: '20px', borderRadius: '4px', border: '1px solid rgba(193, 160, 102, 0.2)', borderLeft: '4px solid var(--color-gold)' }}>
 <h5 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-primary)', marginBottom: '8px', fontWeight: 600 }}>Ключевой результат</h5>
 <p style={{ fontSize: '15px', margin: 0, fontWeight: 500, color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>Достигнуто выгодное мировое соглашение в суде. Клиент полностью сохранил законный контроль над бизнесом.</p>
 </div>
 </div>

 {/* Case Card 3 */}
 <div className="card" style={{ padding: '40px', border: 'none', borderRadius: '0', borderTop: '4px solid var(--color-primary)', display: 'flex', flexDirection: 'column', background: 'var(--color-white)', transition: 'var(--transition)', position: 'relative', boxShadow: '0 15px 40px rgba(23, 50, 77, 0.08)' }}>
 <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(23, 50, 77, 0.05)', border: '1px solid rgba(23, 50, 77, 0.1)', color: 'var(--color-text-secondary)', padding: '4px 10px', fontSize: '11px', borderRadius: '4px', fontWeight: 500, letterSpacing: '0.02em' }}>Демонстрация формата</div>
 <div style={{ paddingBottom: '20px', marginBottom: '24px' }}>
 <span style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#D4AF37', marginBottom: '12px', fontWeight: 600 }}>Арбитраж</span>
 <h4 style={{ margin: 0, color: 'var(--color-deep-blue)', fontSize: '20px', fontFamily: 'var(--font-serif)', lineHeight: 1.4 }}>Взыскание задолженности по договору подряда через суд</h4>
 </div>
 
 <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flexGrow: 1 }}>
 <div>
 <h5 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>Проблема</h5>
 <p style={{ fontSize: '14px', margin: 0, lineHeight: 1.6 }}>Заказчик отказался оплачивать выполненные строительные работы по договору строительного подряда, ссылаясь на вымышленные недостатки.</p>
 </div>
 
 <div>
 <h5 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>Что сделали</h5>
 <p style={{ fontSize: '14px', margin: 0, lineHeight: 1.6 }}>Арбитражный юрист собрал документальную базу, подтверждающую приемку этапов, и инициировал судебную строительно-техническую экспертизу.</p>
 </div>
 </div>
 
 <div style={{ marginTop: '30px', background: 'rgba(193, 160, 102, 0.05)', padding: '20px', borderRadius: '4px', border: '1px solid rgba(193, 160, 102, 0.2)', borderLeft: '4px solid var(--color-gold)' }}>
 <h5 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-primary)', marginBottom: '8px', fontWeight: 600 }}>Ключевой результат</h5>
 <p style={{ fontSize: '15px', margin: 0, fontWeight: 500, color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>Основная задолженность и пени по договору взысканы на 100% через Арбитражный суд Липецкой области.</p>
 </div>
 </div>

 </div>
 </div>
 </section>


 {/* 7. REVIEWS SECTION */}
 <ReviewsBlock />

 {/* 8. PRICING SECTION */}
 <PricingBlock />

 {/* 9. FAQ SECTION */}
 <FAQBlock />

 {/* 10. CTA SECTION (FORM) */}
 <section id="consultation" className="section bg-light" style={{ position: 'relative', overflow: 'hidden', padding: '40px 0', background: 'var(--color-white)', scrollMarginTop: '80px', minHeight: 'calc(100vh - 80px)', display: 'flex', alignItems: 'center' }}>
 <div className="container grid grid-2" style={{ gap: '80px', alignItems: 'center', position: 'relative', zIndex: 1, width: '100%' }}>
 <div>
 <h2 style={{ marginTop: 0, color: 'var(--color-deep-blue)' }}>Обсудите ситуацию с юристом</h2>
 <p style={{ fontSize: '20px', marginBottom: '40px', color: 'var(--color-text-secondary)' }}>
 Кратко опишите ситуацию. Юрист уточнит обстоятельства и сообщит, какие документы потребуются для дальнейшего разбора.
 </p>
 <div style={{ marginTop: '20px' }}>
 <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start' }}>
 <a href="tel:+79103503111" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '28px', fontWeight: 'bold', color: 'var(--color-deep-blue)', marginBottom: '8px', textDecoration: 'none' }}>
 <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
 +7 (910) 350-31-11
 </a>
 <span style={{ fontSize: '18px', color: 'var(--color-text-secondary)' }}>г. Липецк, ул. Советская, д. 35, оф. 213</span>
 </div>
 </div>
 </div>
 
 <div className="card" style={{ padding: '40px', borderRadius: '0', background: 'var(--color-white)', boxShadow: '0 20px 40px rgba(23, 50, 77, 0.08)' }}>
 <h3 style={{ marginTop: 0, color: 'var(--color-deep-blue)', marginBottom: '10px' }}>Оставить заявку</h3>
 <p style={{ color: 'var(--color-text-secondary)', marginBottom: '30px', lineHeight: 1.5 }}>Перезвоним вам в течение 15 минут<br/>в рабочее время.</p>
 <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
 <input type="text" required placeholder="Ваше имя" style={{ padding: '16px', border: '1px solid var(--color-border)', borderRadius: '0', fontSize: '16px', transition: 'border-color 0.3s', outline: 'none', background: 'var(--color-white)' }} />
 <PhoneInput />
 <button type="submit" className="btn" style={{ width: '100%', padding: '18px', fontSize: '18px', marginTop: '10px', background: 'var(--color-deep-blue)', color: 'var(--color-white)', border: 'none' }}>Обсудить ситуацию</button>
 
 <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', marginTop: '4px' }}>
 <input type="checkbox" required style={{ marginTop: '4px', accentColor: 'var(--color-primary)' }} />
 <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
 Я даю согласие на <Link href="/privacy" className="link-animated" style={{ fontSize: '13px', color: 'var(--color-primary)' }}>обработку персональных данных</Link>
 </span>
 </label>
 </form>
 </div>
 </div>
 </section>

 {/* 11. FOOTER */}
 <Footer />

 </main>
 );
}
