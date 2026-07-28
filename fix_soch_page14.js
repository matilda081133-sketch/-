const fs = require('fs');

// 1. Update ProcessBlock.tsx interface
let processBlock = fs.readFileSync('src/components/ProcessBlock.tsx', 'utf8');
processBlock = processBlock.replace('subtitle?: string;', 'subtitle?: React.ReactNode;');
fs.writeFileSync('src/components/ProcessBlock.tsx', processBlock, 'utf8');

// 2. Update SOCH page.tsx subtitle prop
let page = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', 'utf8');
const oldSubtitle = `subtitle="Порядок зависит от стадии дела и срочности ситуации. До начала работы согласуем объём помощи, стоимость и порядок взаимодействия."`;
const newSubtitle = `subtitle={<>Порядок зависит от стадии дела и срочности ситуации.<br/>До начала работы согласуем объём помощи, стоимость и порядок взаимодействия.</>}`;

page = page.replace(oldSubtitle, newSubtitle);
fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', page, 'utf8');

console.log('Successfully updated ProcessBlock subtitle type and inserted line break in SOCH.');
