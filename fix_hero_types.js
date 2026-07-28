const fs = require('fs');

const heroFile = 'src/components/MilitaryHero.tsx';
let hero = fs.readFileSync(heroFile, 'utf8');

// Fix TypeScript error: subtitle should be React.ReactNode, not string
hero = hero.replace(
  /subtitle: string;/g,
  `subtitle: React.ReactNode;`
);

fs.writeFileSync(heroFile, hero);
console.log('Fixed TypeScript error in MilitaryHero');
