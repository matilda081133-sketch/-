const fs = require('fs');

const text = fs.readFileSync('scripts/all_tzs_detailed.txt', 'utf8');
const blocks = text.split('========================================\n').filter(b => b.trim());

console.log('Total blocks:', blocks.length);

const catalog = [];

blocks.forEach((b, i) => {
  const lines = b.trim().split('\n');
  const header = lines[0] || '';
  const textContent = b.replace(/#\d+\s*\[message\d+\][^\n]*\n/, '').trim();
  
  // Detect cluster / topic
  let topic = 'Прочее';
  const lower = textContent.toLowerCase();
  
  if (lower.includes('жилищн') || lower.includes('жкх') || lower.includes('затоплен')) topic = 'Жилищный юрист';
  else if (lower.includes('миграцион') || lower.includes('рвп') || lower.includes('внж') || lower.includes('выдворени')) topic = 'Миграционный юрист';
  else if (lower.includes('арбитраж')) topic = 'Арбитражный юрист';
  else if (lower.includes('трудов') || lower.includes('кадров') || lower.includes('увольнени')) topic = 'Трудовое право для бизнеса';
  else if (lower.includes('взыскани') && (lower.includes('долг') || lower.includes('задолженност')) && (lower.includes('юр') || lower.includes('бизнес') || lower.includes('дебитор'))) topic = 'Взыскание задолженности с юрлиц';
  else if (lower.includes('строительств') || (lower.includes('недвижим') && lower.includes('бизнес'))) topic = 'Недвижимость и строительство для бизнеса';
  else if (lower.includes('недвижим') && (lower.includes('физ') || lower.includes('граждан') || lower.includes('дду') || lower.includes('квартир'))) topic = 'Недвижимость (физлица)';
  else if (lower.includes('уголовн') && (lower.includes('бизнес') || lower.includes('ст.') || lower.includes('экономическ') || lower.includes('взятк'))) topic = 'Уголовно-правовая защита бизнеса';
  else if (lower.includes('уголовн') && (lower.includes('граждан') || lower.includes('физ'))) topic = 'Уголовный адвокат для граждан';
  else if (lower.includes('банкротств') && (lower.includes('бизнес') || lower.includes('юр') || lower.includes('субсидиарн') || lower.includes('кредитор'))) topic = 'Банкротство бизнеса';
  else if (lower.includes('банкротств') && (lower.includes('физ') || lower.includes('граждан') || lower.includes('списание долгов'))) topic = 'Банкротство физлиц';
  else if (lower.includes('договорн')) topic = 'Договорное право для бизнеса';
  else if (lower.includes('военн')) topic = 'Военный юрист';
  else if (lower.includes('кредитн')) topic = 'Кредитный юрист';
  else if (lower.includes('взыскание долгов') || lower.includes('расписк')) topic = 'Взыскание долгов (физлица)';
  else if (lower.includes('земельн')) topic = 'Земельный юрист';
  else if (lower.includes('корпоративн')) topic = 'Корпоративный юрист';
  else if (lower.includes('наследств')) topic = 'Наследственный юрист';
  else if (lower.includes('семейн')) topic = 'Семейный юрист';

  catalog.push({
    index: i + 1,
    header,
    topic,
    length: textContent.length,
    snippet: textContent.substring(0, 150).replace(/\n/g, ' ')
  });
});

console.log('\n--- TOPICS SUMMARY ---');
const topicCounts = {};
catalog.forEach(c => {
  topicCounts[c.topic] = (topicCounts[c.topic] || 0) + 1;
});
Object.entries(topicCounts).sort((a,b) => b[1] - a[1]).forEach(([top, count]) => {
  console.log(`${top}: ${count} сообщений`);
});

fs.writeFileSync('scripts/tz_catalog.json', JSON.stringify(catalog, null, 2), 'utf8');
console.log('\nWrote scripts/tz_catalog.json');
