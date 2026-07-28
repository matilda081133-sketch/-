const fs = require('fs');
let page = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/page.tsx', 'utf8');

const oldRegex = /trustItems=\{\[\s*\{\s*text:\s*'Проверяем несколько оснований выплат'\s*\},\s*\{\s*text:\s*'Начинаем со справок и решений'\s*\},\s*\{\s*text:\s*'Условия работы — в договоре'\s*\}\s*\]\}/;

const newText = `trustItems={[
          { text: 'Проверяем несколько\\nоснований выплат' },
          { text: 'Начинаем со справок\\nи решений' },
          { text: 'Условия работы\\n— в договоре' }
        ]}`;

if (oldRegex.test(page)) {
    page = page.replace(oldRegex, newText);
    fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/page.tsx', page, 'utf8');
    console.log('Successfully updated trustItems with line breaks');
} else {
    console.log('Regex did not match');
}
