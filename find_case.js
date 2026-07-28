const fs = require('fs');
const content = fs.readFileSync('log.txt', 'utf8');
const lines = content.split('\n');
lines.forEach((line, i) => {
  if (line.includes('title: "[Кейс 3:')) {
    console.log(lines.slice(i-2, i+6).join('\n'));
  }
});
