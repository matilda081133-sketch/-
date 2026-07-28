const fs = require('fs');
const file = 'src/app/grazhdanam/voennyj-yurist/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Dividers
const h2a = `<h2 className="section-title text-center" style={{ marginBottom: '40px' }}>Кому мы помогаем</h2>`;
const h2aNew = `<div style={{ textAlign: 'center', marginBottom: '40px' }}><h2 className="section-title" style={{ marginBottom: '16px', display: 'inline-block' }}>Кому мы помогаем</h2><div style={{ width: '60px', height: '3px', backgroundColor: 'var(--color-primary)', margin: '0 auto' }}></div></div>`;
content = content.replace(h2a, h2aNew);

const h2b = `<h2 className="section-title text-center" style={{ marginBottom: '40px', textAlign: 'center' }}>Направления помощи</h2>`;
const h2bNew = `<div style={{ textAlign: 'center', marginBottom: '40px' }}><h2 className="section-title" style={{ marginBottom: '16px', display: 'inline-block' }}>Направления помощи</h2><div style={{ width: '60px', height: '3px', backgroundColor: 'var(--color-primary)', margin: '0 auto' }}></div></div>`;
content = content.replace(h2b, h2bNew);

// 2. Directions Block Map
const dirsRegex = /\{\/\*\ Все\ 7\ карточек\ услуг\ \*\/\}\s*\{directions\.map\(\(dir,\ i\)\ =>\ \([\s\S]*?\}\)\)/;
const dirsNew = `{/* Все 7 карточек услуг */}
            {directions.map((dir, i) => (
              <a key={i} href={dir.link} data-analytics="military_service_click" data-slug={dir.slug} style={{ textDecoration: 'none', display: 'block' }}>
                <div 
                  className="card service-card" 
                  style={{ 
                    height: '100%', 
                    minHeight: '160px',
                    padding: '30px', 
                    background: 'var(--color-white)', 
                    border: '1px solid var(--color-border)',
                    borderRadius: '0',
                    display: 'flex', 
                    flexDirection: 'column',
                    transition: 'all 0.3s',
                    position: 'relative',
                    borderTop: '3px solid var(--color-primary)'
                  }}
                >
                  <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3 }}>
                    {dir.title}
                  </h3>
                  <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                    {dir.desc}
                  </p>
                  <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, transition: 'transform 0.3s' }}>
                    Подробнее 
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.3s' }}>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </a>
            ))}`;
content = content.replace(dirsRegex, dirsNew);

// 3. Urgent Block Alignment and Background
const urgentStart = `{/* 7. Срочный блок */}
      <section className="section" style={{ background: 'var(--color-cream)' }}>
        <div className="container">
          <h2 className="section-title text-center" style={{ marginBottom: '24px', textAlign: 'center' }}>
            Если помощь нужна прямо сейчас
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)', fontSize: '16px', maxWidth: '700px', margin: '0 auto 40px auto', lineHeight: 1.6 }}>`;
const urgentStartNew = `{/* 7. Срочный блок */}
      <section className="section" style={{ background: 'var(--gradient-cream)' }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: '24px', textAlign: 'left' }}>
            Если помощь нужна прямо сейчас
          </h2>
          <p style={{ textAlign: 'left', color: 'var(--color-text-secondary)', fontSize: '16px', maxWidth: '800px', marginBottom: '40px', lineHeight: 1.6 }}>`;
content = content.replace(urgentStart, urgentStartNew);

// 4. Remote Help Block
const remoteRegex = /\{\/\*\ 8\.\ Другие\ вопросы[\s\S]*?<\/section>/;
const remoteNew = `{/* 8. Другие вопросы и дистанционная помощь */}
      <section className="section bg-cream">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '40px' }}>
            {/* Левая колонка */}
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', paddingTop: '20px' }}>
              <h2 className="section-title" style={{ fontSize: '32px', margin: '0 0 24px 0' }}>
                Если вашей ситуации нет в списке
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '32px' }}>
                Необязательно самостоятельно определять вид услуги. Опишите обстоятельства — мы разберём ситуацию, уточним необходимые документы и определим, какой специалист должен подключиться.
              </p>
              <div style={{ marginTop: 'auto' }}>
                <a href="#form" className="btn btn-primary" style={{ textDecoration: 'none' }}>Описать ситуацию</a>
              </div>
            </div>

            {/* Правая колонка */}
            <div style={{ background: 'var(--color-deep-blue)', padding: '40px', borderRadius: '4px', color: 'var(--color-white)', position: 'relative', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, opacity: 0.05, transform: 'translate(20%, -20%)' }}>
                <svg width="150" height="150" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <h3 style={{ fontSize: '24px', fontFamily: 'var(--font-serif)', color: 'var(--color-white)', marginBottom: '24px', position: 'relative', zIndex: 1 }}>Что можно сделать дистанционно</h3>
              <div style={{ position: 'relative', zIndex: 1, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', margin: '0 0 20px 0', fontSize: '16px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.7 }}>
                  <li style={{ marginBottom: '8px' }}>Провести первичную консультацию</li>
                  <li style={{ marginBottom: '8px' }}>Изучить документы</li>
                  <li style={{ marginBottom: '8px' }}>Подготовить обращения и жалобы</li>
                  <li style={{ marginBottom: '8px' }}>Определить порядок дальнейших действий</li>
                </ul>
                <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>
                  Возможность полностью дистанционной работы зависит от характера дела и необходимости личного участия адвоката или юриста.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>`;
content = content.replace(remoteRegex, remoteNew);

// 5. Final Form Block
const formRegex = /\{\/\*\ 12\.\ Финальная\ форма\ \*\/\}\s*<section[\s\S]*?<\/section>/;
const formNew = `{/* 12. Финальная форма */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px' }}>
        <div className="container">
          <div style={{ background: 'var(--gradient-cream)', padding: '60px', borderRadius: '4px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
            <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                  <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                  <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>
                    Связаться с нами
                  </span>
                </div>

                <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0 }}>
                  Получите первичную оценку ситуации
                </h2>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                  Кратко опишите, что произошло. Мы определим срочность, уточним необходимые документы и подключим Дмитрия Сергеевича Конопкина либо другого специалиста с нужными полномочиями.
                </p>
                
                <div style={{ marginTop: '32px' }}>
                  <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    Перезвоним в течение 15 минут в рабочее время
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
                <ContactsForm title="" subtitle="" />
              </div>
            </div>
          </div>
        </div>
      </section>`;
content = content.replace(formRegex, formNew);

// Write changes
fs.writeFileSync(file, content);
console.log('Fixed ALL page.tsx issues!');
