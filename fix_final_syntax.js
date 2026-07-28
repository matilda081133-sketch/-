const fs = require('fs');
const file = 'src/app/grazhdanam/voennyj-yurist/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /\{\s*num:\ '04',\s*title:\ 'Приступаем\ к\ работе',\s*desc:\ 'Готовим\ документы,\ участвуем\ в\ необходимых\ действиях\ и\ сообщаем\ клиенту\ о\ ходе\ дела\.'\ \}\s*\]\}\s*\/>/g;

if (content.match(regex)) {
  content = content.replace(regex, `{ num: '04', title: 'Приступаем к работе', desc: 'Готовим документы, участвуем в необходимых действиях и сообщаем клиенту о ходе дела.' }\n        ]}\n      />\n      </div>`);
  console.log('Added closing </div> after ProcessBlock');
} else {
  console.log('Failed to find ProcessBlock end');
}

fs.writeFileSync(file, content);
