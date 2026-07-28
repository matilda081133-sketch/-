const fs = require('fs');

let c1 = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', 'utf8');
const targetBlock = `              {/* Отличие от дезертирства */}
              <div style={{ display: 'flex', flexDirection: 'column', background: 'var(--color-white)', borderRadius: '4px', borderTop: '4px solid var(--color-primary)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', padding: '40px' }}>
                <h3 style={{ fontSize: '22px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '24px' }}>Чем СОЧ отличается от дезертирства</h3>
                <div
              
              <div style={{ height: '1px', background: 'var(--color-border)', margin: '0 40px' }}></div>
              
              <div style={{ padding: '40px' }}>
                <h3 style={{ fontSize: '22px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px' }}>Отдельные случаи, введённые с 2026 года</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: 1.7, margin: 0 }}>
                  Части 2.2, 3.2 и 6 статьи 337 УК РФ устанавливают повышенную ответственность для отдельных лиц, ранее условно освобождённых от наказания по статье 80.2 УК РФ либо по делам которых производство приостанавливалось по ходатайству командования. Применимость этих норм требует отдельной проверки адвокатом.
                </p>
              </div> style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>`;

const fixedBlock = `              {/* Отличие от дезертирства */}
              <div style={{ display: 'flex', flexDirection: 'column', background: 'var(--color-white)', borderRadius: '4px', borderTop: '4px solid var(--color-primary)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                <div style={{ padding: '40px' }}>
                  <h3 style={{ fontSize: '22px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '24px' }}>Чем СОЧ отличается от дезертирства</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>`;

c1 = c1.replace(targetBlock, fixedBlock);
fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', c1);

let c2 = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/page.tsx', 'utf8');
c2 = c2.replace('      <section className="section" style={{ background: \'var(--color-cream)\' }}>\n      <section className="section" style={{ background: \'var(--color-cream)\' }}>', '      <section className="section" style={{ background: \'var(--color-cream)\' }}>');
fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/page.tsx', c2);

