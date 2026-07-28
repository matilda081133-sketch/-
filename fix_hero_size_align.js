const fs = require('fs');

const heroFile = 'src/components/MilitaryHero.tsx';
let hero = fs.readFileSync(heroFile, 'utf8');

// Change alignItems: 'center' to alignItems: 'flex-start' for the grid
hero = hero.replace(
  /className=\{imageUrl \? "grid grid-2" : ""\} style=\{\{ display: imageUrl \? 'grid' : 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center' \}\}/g,
  `className={imageUrl ? "grid grid-2" : ""} style={{ display: imageUrl ? 'grid' : 'flex', flexDirection: 'column', gap: '40px', alignItems: 'flex-start' }}`
);

// Reduce the photo size: maxWidth 400px -> 340px
hero = hero.replace(
  /maxWidth: '400px'/g,
  `maxWidth: '340px'`
);

fs.writeFileSync(heroFile, hero);
console.log('Fixed MilitaryHero size and alignment');
