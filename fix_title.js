const fs = require('fs');
let content = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', 'utf8');

// Fix title - remove <br/> from metadata title
content = content.replace(
  "title: 'Военный юрист<br/>в Липецке",
  "title: 'Военный юрист в Липецке"
);

fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', content);

// Verify
const after = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', 'utf8');
const idx = after.indexOf('metadata');
console.log(after.substring(idx, idx + 200));
