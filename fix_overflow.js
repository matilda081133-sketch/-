const fs = require('fs');

const heroFile = 'src/components/MilitaryHero.tsx';
let heroContent = fs.readFileSync(heroFile, 'utf8');

// Replace overflow: 'hidden' with overflow: 'visible' for the photo container
heroContent = heroContent.replace(/overflow:\ 'hidden',\n\s*display:\ 'flex',\n\s*alignItems:\ 'center'/g, 
  "overflow: 'visible',\n                display: 'flex',\n                alignItems: 'center'");

fs.writeFileSync(heroFile, heroContent);
console.log('Fixed overflow in MilitaryHero');
