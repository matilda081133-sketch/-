const fs = require('fs');

const heroFile = 'src/components/MilitaryHero.tsx';
let hero = fs.readFileSync(heroFile, 'utf8');

// Restore maxWidth: '400px'
hero = hero.replace(
  /maxWidth: '340px'/g,
  `maxWidth: '400px'`
);

fs.writeFileSync(heroFile, hero);
console.log('Restored photo size to 400px');
