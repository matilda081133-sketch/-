const fs = require('fs');

const tzs = JSON.parse(fs.readFileSync('scripts/all_detected_tzs.json', 'utf8'));
console.log('Total detected TZs:', tzs.length);

let out = '';
tzs.forEach((t, i) => {
  out += `\n========================================\n#${i+1} [${t.id}] ${t.from || 'Руководитель'}\n`;
  if (t.media) out += `[MEDIA]: ${t.media}\n`;
  if (t.text) out += `[TEXT]:\n${t.text}\n`;
});

fs.writeFileSync('scripts/all_tzs_detailed.txt', out, 'utf8');
console.log('Wrote scripts/all_tzs_detailed.txt with length:', out.length);
