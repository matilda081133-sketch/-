const fs = require('fs');
const path = require('path');

// 1. Fix ExtendedContactStrip in all subpages
const dir = 'src/app/grazhdanam/voennyj-yurist';
const subdirs = fs.readdirSync(dir).filter(f => fs.statSync(path.join(dir, f)).isDirectory());
for (const sub of subdirs) {
  const file = path.join(dir, sub, 'page.tsx');
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(
    /<\/>\s*<ExtendedContactStrip \/>\s*\}\s*superTitle=/g,
    '</>\n        }\n        superTitle='
  );
  fs.writeFileSync(file, content);
}

// 2. Fix voennyj-yurist/page.tsx hero syntax
let hub = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', 'utf8');
const oldHero = `        }
            <a href="#form" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '16px' }}>
              Описать ситуацию
            </a>
        imageName="Дмитрий Сергеевич Конопкин"`;
const newHero = `        }
        primaryCtaText="Обсудить ситуацию"
        primaryCtaSubtext="Перезвоним в течение 15 минут в рабочее время"
        imageUrl="/-/images/konopkin.jpg"
        imageName="Дмитрий Сергеевич Конопкин"`;
hub = hub.replace(oldHero, newHero);
fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', hub);

// 3 & 4. Fix SOCH syntax (broken div and missing hero closing tags)
let soch = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', 'utf8');
const badBlock = `              {/* Отличие от дезертирства */}
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

const goodBlock = `              {/* Отличие от дезертирства */}
              <div style={{ display: 'flex', flexDirection: 'column', background: 'var(--color-white)', borderRadius: '4px', borderTop: '4px solid var(--color-primary)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                <div style={{ padding: '40px' }}>
                  <h3 style={{ fontSize: '22px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '24px' }}>Чем СОЧ отличается от дезертирства</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>`;
soch = soch.replace(badBlock, goodBlock);

const badHero = `            </div>
        </div>
      </section>`;
const goodHero = `            </div>
          </div>
        </div>
      </div>
      </section>`;
soch = soch.replace(badHero, goodHero);
fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', soch);

// 5. Fix ranenie duplicate section
let ranenie = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/page.tsx', 'utf8');
ranenie = ranenie.replace('      <section className="section" style={{ background: \'var(--color-cream)\' }}>\n      <section className="section" style={{ background: \'var(--color-cream)\' }}>', '      <section className="section" style={{ background: \'var(--color-cream)\' }}>');
fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/page.tsx', ranenie);

