const fs = require('fs');

// Fix GrazhdanamClient disclaimer
const file = 'src/app/grazhdanam/GrazhdanamClient.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldStyle = "background: 'var(--gradient-cream)', borderTop: '1px solid rgba(16,39,59,0.07)'";
const newStyle = "background: 'var(--color-cream)', borderTop: '1px solid rgba(16,39,59,0.07)'";
content = content.replace(oldStyle, newStyle);

const oldP = "margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.6, opacity: 0.85";
const newP = "margin: 0, fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.65, fontStyle: 'italic', borderLeft: '3px solid rgba(23,50,77,0.25)', paddingLeft: '14px', opacity: 0.9";
content = content.replace(oldP, newP);

fs.writeFileSync(file, content, 'utf8');
console.log('GrazhdanamClient disclaimer updated');

// Verify
const updated = fs.readFileSync(file, 'utf8');
const idx = updated.indexOf('var(--color-cream)');
console.log('cream bg at idx:', idx);
const idx2 = updated.indexOf('fontStyle:');
console.log('fontStyle at idx:', idx2);
