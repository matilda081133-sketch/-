const fs = require('fs');
const file = 'src/app/grazhdanam/voennyj-yurist/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Fix the Remote Help Block (Left column no card, right column with bullets)
const remoteRegex = /\{\/\*\ Левая\ колонка\ \-\ Если\ вашей\ ситуации\ нет\ в\ списке\ \*\/\}\s*<div\ style=\{\{\ display:\ 'flex'[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/;

const newRemoteBlock = `{/* Левая колонка - Если вашей ситуации нет в списке */}
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

            {/* Правая колонка - Что можно сделать дистанционно (Темная акцентная карточка) */}
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

if (content.match(remoteRegex)) {
  content = content.replace(remoteRegex, newRemoteBlock);
  console.log('Fixed remote help grid');
} else {
  console.error('Failed to find remote help block');
}

// 2. Fix Directions Block
const dirsRegex = /\{\/\*\ Все\ 7\ карточек\ услуг\ \*\/\}\s*\{directions\.map\(\(dir,\ i\)\ =>\ \([\s\S]*?\}\)\)/;

const newDirsBlock = `{/* Все 7 карточек услуг */}
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

if (content.match(dirsRegex)) {
  content = content.replace(dirsRegex, newDirsBlock);
  console.log('Fixed directions block styling');
} else {
  console.error('Failed to find directions block');
}

fs.writeFileSync(file, content);
console.log('Done.');
