const fs = require('fs');

const sochFile = 'src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx';
let soch = fs.readFileSync(sochFile, 'utf8');

const oldBlockStart = `<div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', background: 'var(--color-white)', borderRadius: '4px', borderTop: '4px solid var(--color-primary)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              
              {/* Освобождение от ответственности */}
              <div style={{ padding: '40px' }}>`;

const newBlockStart = `<div className="grid grid-2" style={{ gap: '40px', alignItems: 'stretch' }}>
              {/* Освобождение от ответственности */}
              <div style={{ display: 'flex', flexDirection: 'column', background: 'var(--color-white)', borderRadius: '4px', borderTop: '4px solid var(--color-primary)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', padding: '40px' }}>`;

soch = soch.replace(oldBlockStart, newBlockStart);

const oldDivider = `</div>
              
              <div style={{ height: '1px', background: 'var(--color-border)', margin: '0 40px' }}></div>
              
              {/* Отличие от дезертирства */}
              <div style={{ padding: '40px' }}>`;

const newDivider = `</div>
              
              {/* Отличие от дезертирства */}
              <div style={{ display: 'flex', flexDirection: 'column', background: 'var(--color-white)', borderRadius: '4px', borderTop: '4px solid var(--color-primary)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', padding: '40px' }}>`;

soch = soch.replace(oldDivider, newDivider);

fs.writeFileSync(sochFile, soch);
console.log('Restructured SOCH cards into grid');
