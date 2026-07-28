const fs = require('fs');
let code = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', 'utf8');

// 1. Make Title Gold
const oldH3 = "color: 'var(--color-white)', marginBottom: '24px', position: 'relative', zIndex: 1 }}>Что можно сделать дистанционно</h3>";
const newH3 = "color: '#E5C494', marginBottom: '24px', position: 'relative', zIndex: 1 }}>Что можно сделать дистанционно</h3>";
code = code.replace(oldH3, newH3);

// 2. Make List Text White
const oldUl = "ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', color: '#E5C494', fontSize: '16px', lineHeight: 1.7, fontWeight: 500 }}";
const newUl = "ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', color: 'rgba(255,255,255,0.9)', fontSize: '16px', lineHeight: 1.7, fontWeight: 500 }}";
code = code.replace(oldUl, newUl);

// 3. Make Numbers Gold
code = code.replace(/<strong>1\.<\/strong>/g, "<strong style={{ color: '#E5C494' }}>1.</strong>");
code = code.replace(/<strong>2\.<\/strong>/g, "<strong style={{ color: '#E5C494' }}>2.</strong>");
code = code.replace(/<strong>3\.<\/strong>/g, "<strong style={{ color: '#E5C494' }}>3.</strong>");
code = code.replace(/<strong>4\.<\/strong>/g, "<strong style={{ color: '#E5C494' }}>4.</strong>");

fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', code);
console.log('Fixed remote colors perfectly');
