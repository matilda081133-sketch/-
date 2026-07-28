const fs = require('fs');
const file = 'src/app/grazhdanam/voennyj-yurist/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Fix the Remote Help Block
const remoteRegex = /\{\/\*\ Левая\ колонка\ \-\ Если\ вашей\ ситуации\ нет\ в\ списке\ \*\/\}\s*<div\ style=\{\{\ display:\ 'flex'[\s\S]*?<\/div>\s*\{\/\*\ Правая\ колонка/;

const newRemoteLeft = `{/* Левая колонка - Если вашей ситуации нет в списке */}
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

            {/* Правая колонка`;

if (content.match(remoteRegex)) {
  content = content.replace(remoteRegex, newRemoteLeft);
  console.log('Fixed remote help left column');
} else {
  console.error('Failed to find remote help left column');
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
