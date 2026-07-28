const fs = require('fs');
let content = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/dezertirstvo/page.tsx', 'utf8');

const targetStr = `subtitle="Адвокат оценит факты, связанные с намерением и продолжительностью отсутствия, подключится при задержании или добровольной явке и будет вести защиту на текущей стадии дела."`;
const replaceStr = `subtitle={<>Адвокат оценит факты, связанные с намерением и продолжительностью отсутствия,<br />подключится при задержании или добровольной явке и будет вести защиту на текущей стадии дела.</>}`;

if (content.includes(targetStr)) {
  content = content.replace(targetStr, replaceStr);
  fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/dezertirstvo/page.tsx', content);
  console.log('Replaced subtitle!');
} else {
  console.log('Target string not found!');
}
