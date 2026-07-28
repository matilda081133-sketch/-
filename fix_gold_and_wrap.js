const fs = require('fs');
let code = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', 'utf8');

// 1. Change color to Gold (#E5C494) for the Remote list items
const oldUl = "ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', color: 'rgba(255,255,255,0.9)', fontSize: '16px', lineHeight: 1.7 }}";
const newUl = "ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', color: '#E5C494', fontSize: '16px', lineHeight: 1.7, fontWeight: 500 }}";
code = code.replace(oldUl, newUl);

// 2. Add line break before 'нет в списке'
const oldTitle = ">\\s*Если вашей ситуации нет в списке\\s*</h2>";
const newTitle = ">\\n                Если вашей ситуации <br />нет в списке\\n              </h2>";
code = code.replace(new RegExp(oldTitle), newTitle);

fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', code);
console.log('Fixed gold color and title line break');
