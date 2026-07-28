const fs = require('fs');
const file = 'src/app/grazhdanam/voennyj-yurist/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Replace the map block
const mapStart = '{/* Все 7 карточек услуг */}';
const mapEnd = '{/* Блок «Не нашли свою ситуацию?» */}';
const startIndex = content.indexOf(mapStart);
const endIndex = content.indexOf(mapEnd);

if (startIndex !== -1 && endIndex !== -1) {
  const replacement = `{/* Все 7 карточек услуг */}
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
            ))}

            `;
  
  content = content.substring(0, startIndex) + replacement + content.substring(endIndex);
  console.log('Replaced map block successfully.');
} else {
  console.log('Could not find map block bounds.');
}

// 2. Remove the style block
const styleStart = '<style dangerouslySetInnerHTML={{__html: `';
const styleEnd = '`}} />';
const sIndex = content.indexOf(styleStart);
const eIndex = content.indexOf(styleEnd, sIndex);

if (sIndex !== -1 && eIndex !== -1) {
  content = content.substring(0, sIndex) + content.substring(eIndex + styleEnd.length);
  console.log('Removed style block successfully.');
} else {
  console.log('Could not find style block.');
}

fs.writeFileSync(file, content);
