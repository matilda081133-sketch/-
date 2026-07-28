const fs = require('fs');

let ranenie = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/page.tsx', 'utf8');
ranenie = ranenie.replace('      <section className="section" style={{ background: \'var(--color-cream)\' }}>\n      <section className="section" style={{ background: \'var(--color-cream)\' }}>', '      <section className="section" style={{ background: \'var(--color-cream)\' }}>');
fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/page.tsx', ranenie);

let soch = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', 'utf8');
soch = soch.replace('            </div>\n        </div>\n      </section>\n\n      {/* Блок 4', '            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n      </section>\n\n      {/* Блок 4');

const badDiv = `<div
              
              <div style={{ height: '1px'`;
const fixedDiv = `<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              <div style={{ height: '1px'`;
soch = soch.replace(badDiv, fixedDiv);

const badEnd = `Применимость этих норм требует отдельной проверки адвокатом.
                </p>
              </div> style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>`;
const fixedEnd = `Применимость этих норм требует отдельной проверки адвокатом.
                </p>
              </div>`;
soch = soch.replace(badEnd, fixedEnd);

fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', soch);

console.log('Fixed syntax using string replace!');
