const fs = require('fs');
let code = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/page.tsx', 'utf8');
const formMatch = code.match(/<section[^>]*id="form"[^>]*>/);
if (formMatch) {
  console.log('Ranenie form tag:', formMatch[0]);
}

let sochCode = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', 'utf8');
const sochMatch = sochCode.match(/<section[^>]*id="form"[^>]*>/);
if (sochMatch) {
  console.log('SOCH form tag:', sochMatch[0]);
}
