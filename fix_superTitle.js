const fs = require('fs');
let content = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/dezertirstvo/page.tsx', 'utf8');
content = content.replace(/superTitle=\"Уголовная защита военнослужащих\s+статья 338 УК РФ\"/, 'superTitle=\"Уголовная защита военнослужащих • статья 338 УК РФ\"');
fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/dezertirstvo/page.tsx', content);
console.log('Replaced superTitle!');
