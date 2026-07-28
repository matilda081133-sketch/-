const fs = require('fs');
let code = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', 'utf8');

const oldTitle = 'title="Военный юрист в Липецке"';
const newTitle = 'title={<>Военный юрист <br/>в Липецке</>}';

if (code.includes(oldTitle)) {
    code = code.replace(oldTitle, newTitle);
    fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', code);
    console.log('Successfully added line break to title');
} else {
    console.log('Title not found');
}
