const fs = require('fs');
let page = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/page.tsx', 'utf8');

// Fix title with hyphens if they literally wanted them
const oldTitleRegex = /title=\{\<\>Юрист по выплатам\<br\/\>за ранение\<br\/\>военнослужащего\<br\/\>в Липецке\<\/\>\}/;
const newTitle = `title={<>Юрист по выплатам<br/>- за ранение<br/>- военнослужащего<br/>в Липецке</>}`;
page = page.replace(oldTitleRegex, newTitle);

// Restore trustItems
const oldTrustItemsRegex = /trustItems=\{\[\]\}/;
const newTrustItems = `trustItems={[
          { text: 'Проверяем несколько оснований выплат' },
          { text: 'Начинаем со справок и решений' },
          { text: 'Условия работы — в договоре' }
        ]}`;
page = page.replace(oldTrustItemsRegex, newTrustItems);

fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/page.tsx', page, 'utf8');
console.log('Successfully updated title and restored trustItems');
