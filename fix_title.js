const fs = require('fs');
let content = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', 'utf8');

const targetStr = `title="Военный юрист в Липецке"`;
const replacementStr = `title={<>Военный юрист<br />в Липецке</>}`;

content = content.replace(targetStr, replacementStr);
fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', content);
console.log('Replaced title!');
