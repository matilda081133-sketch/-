const fs = require('fs');
let page = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/page.tsx', 'utf8');

const oldTitleRegex = /title="Юрист по выплатам за ранение военнослужащего в Липецке"/;
const newTitle = `title={<>Юрист по выплатам<br/>за ранение<br/>военнослужащего<br/>в Липецке</>}`;

page = page.replace(oldTitleRegex, newTitle);

fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/page.tsx', page, 'utf8');
console.log('Successfully updated title formatting');
