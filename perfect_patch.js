const fs = require('fs');

// 1. Fix ExtendedContactStrip in all subpages
function fixSubpages() {
    const files = [
        'dezertirstvo', 'osparivanie-zaklyucheniya-vvk', 'priznanie-voennosluzhashchego-umershim', 
        'spory-s-voenkomatom', 'vyplaty-seme-pogibshego-voennosluzhashchego', 'vyplaty-za-ranenie-voennosluzhashchego'
    ];
    for (const sub of files) {
        const file = 'src/app/grazhdanam/voennyj-yurist/' + sub + '/page.tsx';
        let content = fs.readFileSync(file, 'utf8');
        content = content.replace('          </>\n        \n      <ExtendedContactStrip />\n\n}\n        superTitle=', '          </>\n        }\n        superTitle=');
        fs.writeFileSync(file, content);
    }
}
fixSubpages();

// 2. Fix voennyj-yurist/page.tsx:185
let hub = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', 'utf8');
const oldHub = `          </>
        }
            <a href="#form" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '16px' }}>
              Описать ситуацию
            </a>
        imageName="Дмитрий Сергеевич Конопкин"`;
const newHub = `          </>
        }
        primaryCtaText="Обсудить ситуацию"
        primaryCtaSubtext="Перезвоним в течение 15 минут в рабочее время"
        imageUrl="/-/images/konopkin.jpg"
        imageName="Дмитрий Сергеевич Конопкин"`;
hub = hub.replace(oldHub, newHub);
fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', hub);

// 3. Fix samovolnoe-ostavlenie-chasti/page.tsx:296
let soch = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', 'utf8');
const oldSoch = `              <div style={{ padding: '40px' }}>
                <h3 style={{ fontSize: '22px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px' }}>Отдельные случаи, введённые с 2026 года</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: 1.7, margin: 0 }}>
                  Части 2.2, 3.2 и 6 статьи 337 УК РФ устанавливают повышенную ответственность для отдельных лиц, ранее условно освобождённых от наказания по статье 80.2 УК РФ либо по делам которых производство приостанавливалось по ходатайству командования. Применимость этих норм требует отдельной проверки адвокатом.
                </p>
              </div> style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>`;
const newSoch = `              <div style={{ padding: '40px' }}>
                <h3 style={{ fontSize: '22px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px' }}>Отдельные случаи, введённые с 2026 года</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: 1.7, margin: 0 }}>
                  Части 2.2, 3.2 и 6 статьи 337 УК РФ устанавливают повышенную ответственность для отдельных лиц, ранее условно освобождённых от наказания по статье 80.2 УК РФ либо по делам которых производство приостанавливалось по ходатайству командования. Применимость этих норм требует отдельной проверки адвокатом.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>`;
soch = soch.replace(oldSoch, newSoch);
fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', soch);
console.log('Fixed everything!');
