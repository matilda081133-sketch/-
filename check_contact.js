const fs = require('fs');
let page = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', 'utf8');
const idx = page.indexOf('Связаться с нами');
console.log(page.substring(idx - 200, idx + 800));
