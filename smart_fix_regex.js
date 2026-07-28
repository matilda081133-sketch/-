const fs = require('fs');

let ranenie = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/page.tsx', 'utf8');
ranenie = ranenie.replace(/<MilitaryHero[\s\S]*?<MilitaryHero/g, '<MilitaryHero');
fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/page.tsx', ranenie);

let soch = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', 'utf8');
soch = soch.replace(/<div\s*<div style=\{\{ height: '1px'/g, '<div style={{ display: \'flex\', flexDirection: \'column\', gap: \'16px\' }}>\n              <div style={{ height: \'1px\'');
soch = soch.replace(/<\/div>\s*style=\{\{ display: 'flex', flexDirection: 'column', gap: '16px' \}\}>/g, '</div>');
fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', soch);

console.log('Fixed syntax using Regex!');
