const fs = require('fs');
let file = 'src/app/grazhdanam/voennyj-yurist/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const thirdCase = `,\r\n          {\r\n            category: "Военное право",\r\n            title: "[Кейс 3: Пример заголовка дела]",\r\n            problem: "Здесь будет размещено реальное дело из практики по защите прав военнослужащего.",\r\n            action: "Текст на этапе макета является заглушкой и будет заменен после согласования.",\r\n            result: "[Ключевой результат]",\r\n            isDemo: true\r\n          }`;

const searchRegex = /result:\s*"\[Ключевой результат\]",\s*isDemo:\s*true\s*}/g;

let matches = [...content.matchAll(searchRegex)];
if (matches.length > 0) {
  const lastMatch = matches[matches.length - 1];
  const insertIndex = lastMatch.index + lastMatch[0].length;
  content = content.slice(0, insertIndex) + thirdCase + content.slice(insertIndex);
  fs.writeFileSync(file, content);
  console.log('Done');
} else {
  console.log('Not found');
}
