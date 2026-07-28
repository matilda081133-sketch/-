const fs = require('fs');

const heroFile = 'src/components/MilitaryHero.tsx';
let heroContent = fs.readFileSync(heroFile, 'utf8');

// Revert overflow: visible back to overflow: hidden
heroContent = heroContent.replace(/overflow:\ 'visible',\n\s*display:\ 'flex',\n\s*alignItems:\ 'center'/g, 
  "overflow: 'hidden',\n                display: 'flex',\n                alignItems: 'center'");

// Move the plate INSIDE the photo, bottom: 20px, left: 20px, width: calc(100% - 40px)
const overlayRegex = /bottom:\ '-20px',\s*left:\ '0',\s*width:\ '100%',\s*background/g;
heroContent = heroContent.replace(overlayRegex, "bottom: '20px', left: '20px', width: 'calc(100% - 40px)', background");

// Also check if we need to remove the previous width: 100% and put maxWidth
// Wait, width: calc(100% - 40px) is fine.

fs.writeFileSync(heroFile, heroContent);
console.log('Fixed MilitaryHero layout (reverted photo stretch, plate inside photo)');
