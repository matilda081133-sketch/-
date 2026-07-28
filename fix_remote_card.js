const fs = require('fs');

let page = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', 'utf8');

const originalCard = `<div style={{ gridColumn: 'span 2' }}>
              <div 
                className="card service-card" 
                style={{ 
                  height: '100%', 
                  minHeight: '160px',
                  padding: '30px', 
                  background: 'var(--color-deep-blue)', 
                  border: '1px solid transparent',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'all 0.3s',
                  position: 'relative',
                  borderTop: '3px solid var(--color-gold)'
                }}
              >
                <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-white)', lineHeight: 1.3 }}>
                  Не нашли свою ситуацию?
                </h3>
                <p style={{ margin: '0 0 24px 0', fontSize: '14px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.5, flexGrow: 1 }}>
                  Кратко опишите обстоятельства — мы изучим вопрос и подскажем, какой специалист сможет помочь.
                </p>
                <div>
                  <a href="#form" className="btn" style={{ background: 'var(--color-white)', color: 'var(--color-deep-blue)', border: 'none', display: 'inline-block', width: 'auto' }}>
                    Описать ситуацию
                  </a>
                </div>
              </div>
            </div>`;

const newCard = `<div style={{ gridColumn: 'span 2' }}>
              <div 
                className="card service-card" 
                style={{ 
                  height: '100%', 
                  minHeight: '160px',
                  padding: '30px', 
                  background: 'var(--color-deep-blue)', 
                  border: '1px solid transparent',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'all 0.3s',
                  position: 'relative',
                  borderTop: '3px solid var(--color-gold)'
                }}
              >
                <style>
                  {\`
                    .white-btn-custom {
                      background-color: var(--color-white);
                      color: var(--color-deep-blue);
                      border: 1px solid var(--color-white);
                    }
                    .white-btn-custom:hover {
                      background-color: var(--color-primary) !important;
                      color: var(--color-white) !important;
                      border-color: var(--color-primary) !important;
                    }
                  \`}
                </style>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-white)', lineHeight: 1.3 }}>
                  Не нашли свою ситуацию?
                </h3>
                <p style={{ margin: '0 0 24px 0', fontSize: '14px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.5, flexGrow: 1 }}>
                  Кратко опишите обстоятельства — мы изучим вопрос <br/>и подскажем, какой специалист сможет помочь.
                </p>
                <div>
                  <a href="#form" className="btn white-btn-custom" style={{ display: 'inline-block', width: 'auto', fontSize: '16px' }}>
                    Описать ситуацию
                  </a>
                </div>
              </div>
            </div>`;

if (page.includes(originalCard)) {
    page = page.replace(originalCard, newCard);
    console.log('Fixed remote card');
} else {
    console.log('Error: remote card string not found exactly.');
}

fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', page, 'utf8');

// Also backup
if (fs.existsSync('backups_frozen/page_frozen.tsx.bak')) {
    let backup = fs.readFileSync('backups_frozen/page_frozen.tsx.bak', 'utf8');
    if (backup.includes(originalCard)) {
        backup = backup.replace(originalCard, newCard);
        fs.writeFileSync('backups_frozen/page_frozen.tsx.bak', backup, 'utf8');
    }
}
