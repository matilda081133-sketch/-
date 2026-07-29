const fs = require('fs');
const content = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', 'utf8');

const markers = [
  ['Header', '<Header'],
  ['MilitaryHero', '<MilitaryHero'],
  ['UrgentContactStrip', '<UrgentContactStrip'],
  ['Кому мы помогаем', 'Кому мы помогаем'],
  ['Направления', 'id="directions"'],
  ['Не нашли ситуацию', 'Не нашли свою ситуацию'],
  ['SpecialistBlock', '<SpecialistBlock'],
  ['ProcessBlock', '<ProcessBlock'],
  ['CasesBlock', '<CasesBlock'],
  ['Если помощь нужна', 'Если помощь нужна'],
  ['Remote block', 'id="remote"'],
  ['PricingBlock', '<PricingBlock'],
  ['FAQBlock', '<FAQBlock'],
  ['Form', 'id="form"'],
  ['Footer', '<Footer']
];

markers.forEach(([name, search]) => {
  const idx = content.indexOf(search);
  console.log(name + ': ' + idx);
});

// Count total lines
console.log('\nTotal chars:', content.length);
console.log('Total lines:', content.split('\n').length);
