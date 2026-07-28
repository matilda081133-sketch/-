const fs = require('fs');

// 1. Fix ranenie
let content = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/page.tsx', 'utf8');

const badStart = content.indexOf('      <MilitaryHero \nimport ExtendedContactStrip');
const badEnd = content.indexOf('  return (\n', badStart) + '  return (\n'.length;

const goodReplacement = `      <MilitaryHero 
        breadcrumbs={
          <>
            <a href="/" style={{ color: 'var(--color-primary)' }}>Главная</a> <span style={{ margin: '0 8px' }}>/</span> 
            <a href="/grazhdanam/" style={{ color: 'var(--color-primary)' }}>Гражданам</a> <span style={{ margin: '0 8px' }}>/</span> 
            <a href="/grazhdanam/voennyj-yurist/" style={{ color: 'var(--color-primary)' }}>Военный юрист</a> <span style={{ margin: '0 8px' }}>/</span> 
            <span style={{ color: 'var(--color-text-main)' }}>Выплаты за ранение</span>
          </>
        }
`;

if (badStart !== -1 && content.includes('import ExtendedContactStrip')) {
  content = content.substring(0, badStart) + goodReplacement + content.substring(badEnd);
  fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/page.tsx', content);
}

// 2. Fix SOCH
let soch = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', 'utf8');
soch = soch.replace('            </div>\n        </div>\n      </section>\n\n      {/* Блок 4', '            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n      </section>\n\n      {/* Блок 4');
fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', soch);

// 3. Fix hub page
let hub = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', 'utf8');
hub = hub.replace('    </main>\n  );\n}\n', '      </div>\n    </main>\n  );\n}\n');
fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', hub);

console.log('Fixed all 3 files!');
