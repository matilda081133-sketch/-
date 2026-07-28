const fs = require('fs');
const file = 'src/components/MilitaryHero.tsx';
let content = fs.readFileSync(file, 'utf8');

const imgBlockStart = `{/* Decorative Elements */}`;
const imgBlockEnd = `<div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', height: '4px', background: 'var(--color-primary)' }}></div>`;
const startIndex = content.indexOf(imgBlockStart);
const endIndex = content.indexOf(imgBlockEnd, startIndex);

if (startIndex !== -1 && endIndex !== -1) {
  const replacement = `{/* Decorative Elements */}
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(23, 50, 77, 0) 50%, rgba(23, 50, 77, 0.4) 100%)' }}></div>
                  
                  {/* Mini Card Overlay */}
                  <div style={{ 
                    position: 'absolute', 
                    top: '20px', 
                    left: '20px', 
                    background: 'rgba(255, 255, 255, 0.95)', 
                    backdropFilter: 'blur(10px)',
                    padding: '16px 24px', 
                    zIndex: 2,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                    borderLeft: '3px solid var(--color-gold)',
                    maxWidth: 'calc(100% - 40px)'
                  }}>
                    <div style={{ fontSize: '18px', color: 'var(--color-deep-blue)', fontWeight: 600, marginBottom: '4px', fontFamily: 'var(--font-serif)' }}>Дмитрий Сергеевич Конопкин</div>
                    <div style={{ fontSize: '13px', color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, lineHeight: 1.4 }}>Адвокат, ведущий юрист военного направления</div>
                  </div>
                  
                  <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', height: '4px', background: 'var(--color-gold)' }}></div>`;
  content = content.substring(0, startIndex) + replacement + content.substring(endIndex + imgBlockEnd.length);
  console.log('Added mini card to MilitaryHero');
} else {
  console.log('Could not find image block in MilitaryHero');
}

fs.writeFileSync(file, content);
