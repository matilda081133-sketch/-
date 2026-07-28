const fs = require('fs');
let code = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', 'utf8');

// 1. Remove border radius from punishment cards
code = code.replace(
  /className="punishment-card" style=\{\{ display: 'flex', flexDirection: 'column', height: '100%', background: 'var\(--color-white\)', padding: '24px', borderRadius: '4px'/g,
  'className="punishment-card" style={{ display: \'flex\', flexDirection: \'column\', height: \'100%\', background: \'var(--color-white)\', padding: \'24px\', borderRadius: \'0\''
);
code = code.replace(
  /alignSelf: 'flex-start', background: 'var\(--color-deep-blue\)', color: 'var\(--color-white\)', padding: '4px 12px', borderRadius: '4px'/g,
  'alignSelf: \'flex-start\', background: \'var(--color-deep-blue)\', color: \'var(--color-white)\', padding: \'4px 12px\', borderRadius: \'0\''
);

// 2. Remove border radius from 2026 warning box
code = code.replace(
  /marginTop: '24px', background: 'var\(--color-white\)', padding: '24px', borderRadius: '4px', borderLeft: '4px solid var\(--color-gold\)'/g,
  'marginTop: \'24px\', background: \'var(--color-white)\', padding: \'24px\', borderRadius: \'0\', borderLeft: \'4px solid var(--color-gold)\''
);

// 3. Swap the columns
const s1 = '{/* Левая колонка - Темная акцентная карточка */}';
const s2 = '{/* Правая колонка - Объединенная карточка */}';
const s3 = '          </div>\r\n        </div>\r\n      </section>\r\n\r\n      {/* Блок 4. Профильный адвокат */}'; // Need to account for CRLF
const s3_lf = '          </div>\n        </div>\n      </section>\n\n      {/* Блок 4. Профильный адвокат */}'; // Account for LF just in case

let p1 = code.indexOf(s1);
let p2 = code.indexOf(s2);
let p3 = code.indexOf(s3);
let endStr = s3;

if (p3 === -1) {
    p3 = code.indexOf(s3_lf);
    endStr = s3_lf;
}

if (p1 !== -1 && p2 !== -1 && p3 !== -1) {
  let before = code.substring(0, p1);
  let darkCard = code.substring(p1, p2).trimEnd();
  let whiteCard = code.substring(p2, p3).trimEnd();
  let after = '\n' + code.substring(p3);
  
  // Brighten dark card
  darkCard = darkCard.replace(/background: 'var\(--color-deep-blue\)'/, "background: '#1E4066'");
  // Also change the comment for clarity
  darkCard = darkCard.replace('{/* Левая колонка', '{/* Правая колонка');
  whiteCard = whiteCard.replace('{/* Правая колонка', '{/* Левая колонка');
  
  code = before + whiteCard + '\n            \n            ' + darkCard + after;
  fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', code);
  console.log('Successfully applied all SOCH changes');
} else {
  console.log('Failed to find markers for swap:', p1, p2, p3);
}
