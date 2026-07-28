const fs = require('fs');

const oldArrow = `<div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  Подробнее <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>`;
                
const newArrow = `<div className="card-arrow" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.3s' }}>
                  Подробнее <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>`;

const files = [
  'src/app/grazhdanam/voennyj-yurist/page.tsx',
  'src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.split(oldArrow).join(newArrow);
  fs.writeFileSync(file, content);
});

console.log('Added card-arrow class to hover elements');
