const fs = require('fs');
const file = 'src/app/grazhdanam/voennyj-yurist/dezertirstvo/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const target = `<section className="section bg-white">
        <div className="container">
          <h2 className="section-title text-center" style={{ marginBottom: '40px' }}>Срочные ситуации</h2>`;
const replacement = `<section className="section" style={{ background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ textAlign: 'left', marginBottom: '40px' }}>
            <h2 className="section-title" style={{ marginBottom: '0', textAlign: 'left', display: 'inline-block' }}>
              Срочные ситуации
            </h2>
          </div>`;

content = content.replace(target, replacement);
fs.writeFileSync(file, content);
console.log('Fixed urgent block safely!');
