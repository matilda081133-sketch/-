const fs = require('fs');
const file = 'src/app/grazhdanam/voennyj-yurist/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldHeader1 = `<div style={{ textAlign: 'center', marginBottom: '40px' }}><h2 className="section-title" style={{ marginBottom: '16px', display: 'inline-block' }}>Кому мы помогаем</h2><div style={{ width: '60px', height: '3px', backgroundColor: 'var(--color-primary)', margin: '0 auto' }}></div></div>`;
const newHeader1 = `<div style={{ textAlign: 'left', marginBottom: '40px' }}><h2 className="section-title" style={{ marginBottom: '16px', display: 'inline-block' }}>Кому мы помогаем</h2><div style={{ width: '60px', height: '3px', backgroundColor: 'var(--color-primary)', margin: '0' }}></div></div>`;

if (content.includes(oldHeader1)) {
  content = content.replace(oldHeader1, newHeader1);
  console.log('Fixed alignment for Кому мы помогаем');
} else {
  console.log('Failed to find Кому мы помогаем header');
}

const oldHeader2 = `<div style={{ textAlign: 'center', marginBottom: '40px' }}><h2 className="section-title" style={{ marginBottom: '16px', display: 'inline-block' }}>Направления помощи</h2><div style={{ width: '60px', height: '3px', backgroundColor: 'var(--color-primary)', margin: '0 auto' }}></div></div>`;
const newHeader2 = `<div style={{ textAlign: 'left', marginBottom: '40px' }}><h2 className="section-title" style={{ marginBottom: '16px', display: 'inline-block' }}>Направления помощи</h2><div style={{ width: '60px', height: '3px', backgroundColor: 'var(--color-primary)', margin: '0' }}></div></div>`;

if (content.includes(oldHeader2)) {
  content = content.replace(oldHeader2, newHeader2);
  console.log('Fixed alignment for Направления помощи');
} else {
  console.log('Failed to find Направления помощи header');
}

fs.writeFileSync(file, content);
