const fs = require('fs');

const file = 'src/app/grazhdanam/zemelnyj-yurist/spory-o-granicah-zemelnogo-uchastka/SporyOGranicahClient.tsx';
let content = fs.readFileSync(file, 'utf-8');

const oldCircleIcon = `<div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(193, 160, 102, 0.15)', border: '1px solid var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>`;

const newCheckboxIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>`;

const count = (content.match(new RegExp(oldCircleIcon.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
console.log('Found instances:', count);

content = content.replaceAll(oldCircleIcon, newCheckboxIcon);
fs.writeFileSync(file, content, 'utf-8');
console.log('SporyOGranicahClient.tsx icons successfully replaced');
