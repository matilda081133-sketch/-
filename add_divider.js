const fs = require('fs');
const file = 'src/app/grazhdanam/voennyj-yurist/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldHeader = `<h2 className="section-title text-center" style={{ marginBottom: '40px' }}>
            Направления помощи
          </h2>`;
const newHeader = `<div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 className="section-title" style={{ marginBottom: '16px', display: 'inline-block' }}>
              Направления помощи
            </h2>
            <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--color-primary)', margin: '0 auto' }}></div>
          </div>`;

if (content.includes(oldHeader)) {
  content = content.replace(oldHeader, newHeader);
  fs.writeFileSync(file, content);
  console.log('Added divider to page.tsx');
} else {
  console.log('Failed to add divider');
}
