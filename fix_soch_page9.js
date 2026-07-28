const fs = require('fs');
let page = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', 'utf8');

const oldText = 'Добровольная явка может иметь значение для оценки поведения военнослужащего, но <strong>сама по себе не прекращает уголовное дело</strong> и не гарантирует освобождение от ответственности.';
const newText = 'Добровольная явка может иметь значение для оценки поведения военнослужащего, но <span style={{ color: \'var(--color-deep-blue)\' }}>сама по себе не прекращает уголовное дело</span> и не гарантирует освобождение от ответственности.';

page = page.replace(oldText, newText);

fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', page, 'utf8');
console.log('Replaced strong tag with color deep blue successfully.');
