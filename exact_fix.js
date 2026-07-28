const fs = require('fs');

let soch = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', 'utf8');

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

// Remove the 3 extra divs we added in fix_final.js
const badEnd2 = `          </div>
        </div>
      </div>
    </div>
      </section>

      {/* Блок 4`;
const fixedEnd2 = `        </div>
      </section>

      {/* Блок 4`;
soch = soch.replace(badEnd2, fixedEnd2);

fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', soch);

let ranenie = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/page.tsx', 'utf8');
ranenie = ranenie.replace('      <MilitaryHero \n      \n      <MilitaryHero ', '      <MilitaryHero ');
fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/page.tsx', ranenie);
