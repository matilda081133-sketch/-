const fs = require('fs');

// 1. Update globals.css to change the global h2::after to a specific class
let css = fs.readFileSync('src/app/globals.css', 'utf8');

// The CSS currently has:
// h2 {
//   position: relative;
//   padding-bottom: 15px;
// }
// 
// h2::after {
//   content: '';
//   ...
// }
// .text-center h2::after { ... }

css = css.replace(/h2\s*\{\s*position:\s*relative;\s*padding-bottom:\s*15px;\s*\}/g, '.with-accent { position: relative; padding-bottom: 15px; }');
css = css.replace(/h2::after\s*\{/g, '.with-accent::after {');
css = css.replace(/\.text-center h2::after\s*\{/g, '.text-center .with-accent::after {');

fs.writeFileSync('src/app/globals.css', css);

// 2. Add .with-accent ONLY to the sections where it makes sense (Advantages, Services, etc.), leaving it OFF for Stages, Reviews, Pricing.
let page = fs.readFileSync('src/app/page.tsx', 'utf8');

// Example: "Преимущества работы с Де-Юре"
page = page.replace(
  /<h2 style=\{\{\s*fontSize: '36px',\s*fontFamily: 'var\(--font-serif\)',\s*color: 'var\(--color-primary\)',\s*marginBottom: '40px',\s*marginTop: 0\s*\}\}>Преимущества работы с Де-Юре<\/h2>/g,
  `<h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '40px', marginTop: 0 }}>Преимущества работы с Де-Юре</h2>`
);

// ServicesTabs.tsx has "Ключевые направления юридической помощи"
let services = fs.readFileSync('src/components/ServicesTabs.tsx', 'utf8');
services = services.replace(
  /<h2 style=\{\{ fontSize: '36px', fontFamily: 'var\(--font-serif\)', color: 'var\(--color-primary\)', marginBottom: '16px', marginTop: 0 \}\}>/g,
  `<h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>`
);
fs.writeFileSync('src/components/ServicesTabs.tsx', services);

// Enhance Cases block visual accents
// Right now cases block has:
// <div style={{ background: 'var(--color-cream)', padding: '16px', borderRadius: '0', marginBottom: '20px' }}>
const oldResultBlock = `<div style={{ background: 'var(--color-cream)', padding: '16px', borderRadius: '0', marginBottom: '20px' }}>
                  <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginBottom: '4px' }}>Результат:</div>
                  <div style={{ fontSize: '15px', color: 'var(--color-primary)', fontWeight: 600 }}>{caseItem.result}</div>
                </div>`;

const newResultBlock = `<div style={{ 
                  background: 'var(--color-deep-blue)', 
                  padding: '20px', 
                  borderRadius: '0', 
                  marginBottom: '20px', 
                  borderLeft: '4px solid var(--color-gold)',
                  boxShadow: '0 10px 20px rgba(16,39,59,0.1)'
                }}>
                  <div style={{ 
                    fontSize: '12px', 
                    color: 'rgba(255,255,255,0.7)', 
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontWeight: 600
                  }}>Ключевой результат:</div>
                  <div style={{ 
                    fontSize: '16px', 
                    color: 'var(--color-white)', 
                    fontWeight: 600,
                    lineHeight: 1.4 
                  }}>{caseItem.result}</div>
                </div>`;

page = page.replace(oldResultBlock, newResultBlock);

fs.writeFileSync('src/app/page.tsx', page);
console.log('page, services, css updated');
