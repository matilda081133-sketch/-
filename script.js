const fs = require('fs');
let code = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', 'utf8');

const s1 = '{/* Левая колонка - Темная акцентная карточка */}';
const s2 = '{/* Правая колонка - Объединенная карточка */}';
const s3 = '          </div>\n        </div>\n      </section>\n\n      {/* Блок 4. Профильный адвокат */}';

let p1 = code.indexOf(s1);
let p2 = code.indexOf(s2);
let p3 = code.indexOf(s3);

if (p1 !== -1 && p2 !== -1 && p3 !== -1) {
  let before = code.substring(0, p1);
  let darkCard = code.substring(p1, p2).trimEnd();
  let whiteCard = code.substring(p2, p3).trimEnd();
  let after = '\n' + code.substring(p3);
  
  darkCard = darkCard.replace('background: \'var(--color-deep-blue)\'', 'background: \'#1E4066\'');
  
  let replaced = before + whiteCard + '\n            \n            ' + darkCard + after;
  fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', replaced);
  console.log('Successfully swapped and brightened!');
} else {
  console.log('Failed to match', p1, p2, p3);
}

