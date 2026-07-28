const fs = require('fs');

const mainFile = 'src/app/grazhdanam/voennyj-yurist/page.tsx';
let mainContent = fs.readFileSync(mainFile, 'utf8');
mainContent = mainContent.replace(
    'title="Военный юрист в Липецке"',
    'title={<>Военный юрист<br/>в Липецке</>}'
);
fs.writeFileSync(mainFile, mainContent);
console.log('Fixed Main Page Title');
