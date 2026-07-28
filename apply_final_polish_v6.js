const fs = require('fs');

// 1. Fix CasesBlock.tsx
let cases = fs.readFileSync('src/components/CasesBlock.tsx', 'utf8');
cases = cases.replace(
    'background: \'var(--color-white)\', \n              position: \'relative\',',
    'background: \'var(--color-white)\', \n              boxShadow: \'0 4px 10px rgba(0,0,0,0.12)\',\n              position: \'relative\','
);
// Make sure it applies even if the formatting is slightly different
if (!cases.includes('boxShadow: \'0 4px 10px rgba(0,0,0,0.12)\'')) {
    cases = cases.replace(
        'background: \'var(--color-white)\',',
        'background: \'var(--color-white)\',\n              boxShadow: \'0 4px 10px rgba(0,0,0,0.12)\','
    );
}
// Fix hover shadow
cases = cases.replace(
    'box-shadow: 0 20px 40px rgba(23, 50, 77, 0.08);',
    'box-shadow: 0 8px 24px rgba(0,0,0,0.15);'
);
fs.writeFileSync('src/components/CasesBlock.tsx', cases, 'utf8');

// 2. Fix page.tsx directions and line breaks
let page = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', 'utf8');

// A. Add line break to "Защита по уголовным делам"
page = page.replace(
    'title: "Защита по уголовным делам"',
    'title: <>Защита по <br/>уголовным делам</>'
);

// B. Make "Не нашли свою ситуацию?" card span 2 columns and restyle button
const originalCard = `<a href="#form" style={{ textDecoration: 'none', display: 'block' }}>
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
                <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.5, flexGrow: 1 }}>
                  Кратко опишите обстоятельства — мы изучим вопрос и подскажем, какой специалист сможет помочь.
                </p>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-gold)', fontSize: '14px', fontWeight: 600, transition: 'transform 0.3s' }}>
                  Описать ситуацию 
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.3s' }}>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </a>`;

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

if (page.includes(originalCard)) {
    page = page.replace(originalCard, newCard);
    console.log('Fixed "Не нашли свою ситуацию?" card');
} else {
    // Let's try a regex replace if spacing is slightly different
    const startIdx = page.indexOf('<a href="#form" style={{ textDecoration: \'none\', display: \'block\' }}>');
    const endIdx = page.indexOf('</a>', startIdx) + 4;
    if (startIdx > -1) {
        page = page.substring(0, startIdx) + newCard + page.substring(endIdx);
        console.log('Fixed "Не нашли свою ситуацию?" card (using index)');
    } else {
        console.log('Error: Could not find "Не нашли свою ситуацию?" card');
    }
}

fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', page, 'utf8');

// Sync backups just in case
if (fs.existsSync('backups_frozen/page_frozen.tsx.bak')) {
    let backup = fs.readFileSync('backups_frozen/page_frozen.tsx.bak', 'utf8');
    backup = backup.replace(
        'title: "Защита по уголовным делам"',
        'title: <>Защита по <br/>уголовным делам</>'
    );
    const bStartIdx = backup.indexOf('<a href="#form" style={{ textDecoration: \'none\', display: \'block\' }}>');
    const bEndIdx = backup.indexOf('</a>', bStartIdx) + 4;
    if (bStartIdx > -1) {
        backup = backup.substring(0, bStartIdx) + newCard + backup.substring(bEndIdx);
    }
    fs.writeFileSync('backups_frozen/page_frozen.tsx.bak', backup, 'utf8');
}

console.log('Finished apply_final_polish_v6');
