const fs = require('fs');
let page = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', 'utf8');

const oldHeader1 = `<h3 style={{ fontSize: '24px', color: 'var(--color-gold)', marginBottom: '24px', fontFamily: 'var(--font-serif)' }}>Освобождение от ответственности</h3>`;
const newHeader1 = `<h3 style={{ fontSize: '24px', color: '#FFD700', marginBottom: '24px', fontFamily: 'var(--font-serif)' }}>Освобождение от ответственности</h3>`;

const oldHeader2 = `<h3 style={{ fontSize: '24px', color: 'var(--color-gold)', marginBottom: '24px', fontFamily: 'var(--font-serif)' }}>Что сообщить при первом обращении</h3>`;
const newHeader2 = `<h3 style={{ fontSize: '24px', color: '#FFD700', marginBottom: '24px', fontFamily: 'var(--font-serif)' }}>Что сообщить при первом обращении</h3>`;

page = page.replace(oldHeader1, newHeader1);
page = page.replace(oldHeader2, newHeader2);

fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', page, 'utf8');
console.log('Replaced header colors successfully.');
