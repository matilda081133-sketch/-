const fs = require('fs');
let content = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', 'utf8');

const targetStr = `title="Военный юрист в Липецке"`;
const replaceStr = `title={<>Военный юрист<br />в Липецке</>}`;

if (content.includes(targetStr)) {
  content = content.replace(targetStr, replaceStr);
  fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', content);
  console.log('Fixed title on hub!');
} else {
  console.log('Target string not found!');
}
