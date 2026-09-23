const fs = require('fs');
const tasks = JSON.parse(fs.readFileSync('scripts/exhaustive_tasks_dump.json', 'utf8'));

console.log('Total tasks:', tasks.length);

let out = '';
tasks.forEach((t, i) => {
  const preview = t.text.replace(/\[TEXT\]:\s*/, '').replace(/\n+/g, ' ').substring(0, 120);
  const line = `#${i+1} [Block ${t.index}] ${t.meta} -> ${preview}\n`;
  out += line;
});

fs.writeFileSync('scripts/tasks_175_list.txt', out, 'utf8');
console.log('Saved scripts/tasks_175_list.txt');
