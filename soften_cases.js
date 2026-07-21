const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

// The regex will find the deep blue blocks and replace them with the soft gold design.
// We capture the text content inside the <p> tag.
const regex = /<div style=\{\{\s*marginTop:\s*'30px',\s*background:\s*'var\(--color-deep-blue\)',\s*padding:\s*'20px',\s*borderRadius:\s*'0',\s*borderLeft:\s*'4px solid var\(--color-gold\)',\s*boxShadow:\s*'0 10px 20px rgba\(16,39,59,0\.1\)'\s*\}\}>\s*<h5 style=\{\{\s*fontSize:\s*'12px',\s*textTransform:\s*'uppercase',\s*letterSpacing:\s*'0\.05em',\s*color:\s*'rgba\(255,255,255,0\.7\)',\s*marginBottom:\s*'8px',\s*fontWeight:\s*600\s*\}\}>Ключевой результат<\/h5>\s*<p style=\{\{\s*fontSize:\s*'16px',\s*margin:\s*0,\s*fontWeight:\s*600,\s*color:\s*'var\(--color-white\)',\s*lineHeight:\s*1\.4\s*\}\}>([\s\S]*?)<\/p>\s*<\/div>/g;

const newBlock = `<div style={{ marginTop: '30px', background: 'rgba(193, 160, 102, 0.05)', padding: '20px', borderRadius: '4px', border: '1px solid rgba(193, 160, 102, 0.2)', borderLeft: '4px solid var(--color-gold)' }}>
    <h5 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-primary)', marginBottom: '8px', fontWeight: 600 }}>Ключевой результат</h5>
    <p style={{ fontSize: '15px', margin: 0, fontWeight: 500, color: 'var(--color-deep-blue)', lineHeight: 1.5 }}>$1</p>
  </div>`;

page = page.replace(regex, newBlock);

fs.writeFileSync('src/app/page.tsx', page);
console.log('Cases block softened successfully.');
