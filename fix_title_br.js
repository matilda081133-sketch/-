const fs = require('fs');
const file = 'src/app/grazhdanam/voennyj-yurist/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const titleOld = 'title="Военный юрист в Липецке"';
const titleNew = 'title={<>Военный юрист <br />в Липецке</>}';

if (content.includes(titleOld)) {
  content = content.replace(titleOld, titleNew);
  console.log('Fixed title br');
} else {
  console.error('Failed to find title');
}

fs.writeFileSync(file, content);
