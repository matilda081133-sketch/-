const fs = require('fs');

const markdownPath = 'C:/Users/Honor/.gemini/antigravity/brain/56e86143-9eb9-46a5-a4dd-e251f79248ec/data_driven_site_structure.md';
const markdown = fs.readFileSync(markdownPath, 'utf-8');

const b2cCategories = {
  'Банкротство и долги': [],
  'Семейные споры': [],
  'Уголовная защита': [],
  'Трудовые споры': [],
  'Недвижимость и Земля': [],
  'Военное право': [],
  'Помощь при ДТП': [],
  'Наследство': [],
  'Прочее': []
};

const b2bCategories = {
  'Защита бизнеса и Арбитраж': [],
  'Прочее для бизнеса': []
};

let currentCategory = null;
let currentTarget = null;

const lines = markdown.split('\n');
for (let line of lines) {
  if (line.startsWith('## ')) {
    const title = line.replace('## ', '').split('(')[0].trim();
    if (title.includes('Банкротство и долги')) { currentCategory = 'Банкротство и долги'; currentTarget = b2cCategories; }
    else if (title.includes('Семейные споры')) { currentCategory = 'Семейные споры'; currentTarget = b2cCategories; }
    else if (title.includes('Уголовная защита')) { currentCategory = 'Уголовная защита'; currentTarget = b2cCategories; }
    else if (title.includes('Трудовые споры')) { currentCategory = 'Трудовые споры'; currentTarget = b2cCategories; }
    else if (title.includes('Недвижимость и Земля')) { currentCategory = 'Недвижимость и Земля'; currentTarget = b2cCategories; }
    else if (title.includes('Военное право')) { currentCategory = 'Военное право'; currentTarget = b2cCategories; }
    else if (title.includes('Помощь при ДТП')) { currentCategory = 'Помощь при ДТП'; currentTarget = b2cCategories; }
    else if (title.includes('Наследство')) { currentCategory = 'Наследство'; currentTarget = b2cCategories; }
    else if (title.includes('Прочее') && !title.includes('Информационные')) { currentCategory = 'Прочее'; currentTarget = b2cCategories; }
    else if (title.includes('Защита бизнеса')) { currentCategory = 'Защита бизнеса и Арбитраж'; currentTarget = b2bCategories; }
    else if (title.includes('Прочие услуги')) { currentCategory = 'Прочее для бизнеса'; currentTarget = b2bCategories; }
  }

  if (line.startsWith('- [ ] **')) {
    const itemStr = line.match(/\*\*([^*]+)\*\*/)[1].trim();
    if (currentTarget && currentCategory) {
      if (['Контакты', 'Полезные статьи', 'Отзывы и кейсы'].includes(itemStr)) {
        continue;
      }
      
      if (currentCategory === 'Прочее для бизнеса') {
        if (itemStr.includes('юридические лица') || itemStr.includes('Исполнительное производство')) {
          b2bCategories['Прочее для бизнеса'].push(itemStr);
        } else {
          b2cCategories['Прочее'].push(itemStr);
        }
      } else {
        currentTarget[currentCategory].push(itemStr);
      }
    }
  }
}

function slugify(text) {
  const map = {
    'а':'a','б':'b','в':'v','г':'g','д':'d','е':'e','ё':'e','ж':'zh','з':'z','и':'i','й':'y','к':'k','л':'l','м':'m','н':'n','о':'o','п':'p','р':'r','с':'s','т':'t','у':'u','ф':'f','х':'h','ц':'ts','ч':'ch','ш':'sh','щ':'sch','ъ':'','ы':'y','ь':'','э':'e','ю':'yu','я':'ya',
    ' ': '-', '(': '', ')': '', ',': ''
  };
  return text.toLowerCase().split('').map(c => map[c] || c).join('').replace(/-+/g, '-');
}

const formatData = (categories) => {
  return Object.keys(categories).map(cat => ({
    title: cat,
    links: categories[cat].map(item => ({ label: item, href: `/${slugify(item)}` }))
  })).filter(cat => cat.links.length > 0);
};

const b2cData = formatData(b2cCategories);
const b2bData = formatData(b2bCategories);

const tsContent = `export const megaMenuB2C = ${JSON.stringify(b2cData, null, 2)};\n\nexport const megaMenuB2B = ${JSON.stringify(b2bData, null, 2)};\n`;

if (!fs.existsSync('src/data')) {
  fs.mkdirSync('src/data', { recursive: true });
}
fs.writeFileSync('src/data/megaMenuData.ts', tsContent);
console.log('Generated src/data/megaMenuData.ts successfully.');
