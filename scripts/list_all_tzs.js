const fs = require('fs');
const tzs = JSON.parse(fs.readFileSync('scripts/all_detected_tzs.json', 'utf8'));

tzs.forEach((t, i) => {
  const line = (t.media ? '[MEDIA: ' + t.media + '] ' : '') + t.text.split('\n')[0].slice(0, 100);
  console.log((i + 1) + '. [' + t.id + '] ' + t.date + ' (' + t.from + '): ' + line);
});
