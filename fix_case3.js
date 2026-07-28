const fs = require('fs');
const file = 'src/app/grazhdanam/voennyj-yurist/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const case2Regex = /\{\s*category:\ "Военное\ право",\s*title:\ "\[Кейс\ 2:\ Пример\ заголовка\ дела\]",\s*problem:\ "Здесь\ будет\ размещено\ реальное\ дело\ из\ практики\ по\ защите\ прав\ военнослужащего\.",\s*action:\ "Текст\ на\ этапе\ макета\ является\ заглушкой\ и\ будет\ заменен\ после\ согласования\.",\s*result:\ "\[Ключевой\ результат\]",\s*isDemo:\ true\s*\}/;

const casesReplacement = `{
            category: "Военное право",
            title: "[Кейс 2: Пример заголовка дела]",
            problem: "Здесь будет размещено реальное дело из практики по защите прав военнослужащего.",
            action: "Текст на этапе макета является заглушкой и будет заменен после согласования.",
            result: "[Ключевой результат]",
            isDemo: true
          },
          {
            category: "Военное право",
            title: "[Кейс 3: Пример заголовка дела]",
            problem: "Здесь будет размещено реальное дело из практики по защите прав военнослужащего.",
            action: "Текст на этапе макета является заглушкой и будет заменен после согласования.",
            result: "[Ключевой результат]",
            isDemo: true
          }`;

if (content.match(case2Regex)) {
  content = content.replace(case2Regex, casesReplacement);
  console.log('Added case 3');
} else {
  console.error('Failed to add case 3');
}

fs.writeFileSync(file, content);
