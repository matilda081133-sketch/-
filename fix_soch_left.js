const fs = require('fs');

const sochFile = 'src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx';
let soch = fs.readFileSync(sochFile, 'utf8');

// 1. Change grid-2 to a constrained column layout
soch = soch.replace(
  /<div className="grid grid-2" style=\{\{ gap: '40px', alignItems: 'stretch' \}\}>/g,
  `<div style={{ display: 'flex', flexDirection: 'column', gap: '40px', maxWidth: '850px' }}>`
);

// 2. Remove all border-radius from these cards
// The wrapper cards have `borderRadius: '4px'`
soch = soch.replace(
  /borderRadius: '4px', borderTop: '4px solid var\(--color-primary\)/g,
  `borderTop: '4px solid var(--color-primary)'`
);

// The inner cards have `borderRadius: '0 4px 4px 0'`
soch = soch.replace(
  /borderRadius: '0 4px 4px 0'/g,
  `borderRadius: '0'`
);

fs.writeFileSync(sochFile, soch);
console.log('Fixed SOCH block: moved left, removed rounding, added max-width');
