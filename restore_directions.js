const fs = require('fs');

const file = 'src/app/grazhdanam/voennyj-yurist/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetPattern = /<a key=\{i\} href=\{dir\.link\} data-analytics=\"military_service_click\" data-slug=\{dir\.slug\}[^]*?<\/a>/g;

const replacement = `<a key={i} href={dir.link} data-analytics=\"military_service_click\" data-slug={dir.slug} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
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
                <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', fontWeight: 600, color: 'var(--color-deep-blue)', lineHeight: 1.3 }}>
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
            </a>`;

content = content.replace(targetPattern, replacement);
fs.writeFileSync(file, content);
console.log('Replaced successfully');
