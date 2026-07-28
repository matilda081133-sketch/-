const fs = require('fs');

// Fix 3rd Case in Main Page
const mainFile = 'src/app/grazhdanam/voennyj-yurist/page.tsx';
let mainContent = fs.readFileSync(mainFile, 'utf8');
mainContent = mainContent.replace(
    '            isDemo: true\n          }\n        ]}\n      />',
    '            isDemo: true\n          },\n          {\n            category: "Военное право",\n            title: "[Кейс 3: Пример заголовка дела]",\n            problem: "Здесь будет размещено реальное дело из практики по защите прав военнослужащего.",\n            action: "Текст на этапе макета является заглушкой и будет заменен после согласования.",\n            result: "[Ключевой результат]",\n            isDemo: true\n          }\n        ]}\n      />'
);
fs.writeFileSync(mainFile, mainContent);
console.log('Fixed Main Page Cases');
