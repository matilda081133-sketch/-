const fs = require('fs');
let content = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', 'utf8');

// Replace red #D9534F with muted bronze/amber #B08D57 (warm, neutral accent)
const before = (content.match(/#D9534F/g) || []).length;
content = content.replaceAll('#D9534F', '#B08D57');
const after = (content.match(/#B08D57/g) || []).length;

fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', content);
console.log(`Replaced ${before} occurrences of #D9534F with #B08D57 (${after} total now).`);
