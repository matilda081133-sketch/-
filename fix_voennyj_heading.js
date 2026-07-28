const fs = require('fs');
let content = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', 'utf8');

const oldStr = `<h2 className="section-title text-center" style={{ marginBottom: '40px', textAlign: 'center' }}>Направления помощи</h2>`;
const newStr = `<div style={{ maxWidth: '700px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Направления помощи
            </h2>
            <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Полный спектр юридических услуг для военнослужащих: от первичной консультации до представительства в суде и оспаривания незаконных решений.
            </p>
          </div>`;

content = content.replace(oldStr, newStr);
fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', content);
console.log('Replaced heading!');
