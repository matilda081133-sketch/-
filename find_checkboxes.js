const fs = require('fs');
const path = require('path');
const allFiles = [];
function walk(dir) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(function(f) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) walk(full);
    else if (f.endsWith('.tsx')) allFiles.push(full);
  });
}
walk('src');
allFiles.forEach(function(file) {
  if (file.includes('ContactsForm')) return;
  const content = fs.readFileSync(file, 'utf8');
  if (content.indexOf('type=\\"checkbox\\"') >= 0 || content.indexOf("type='checkbox'") >= 0 || content.indexOf('checkbox') >= 0) {
    if (content.indexOf('согласие') >= 0 || content.indexOf('персональн') >= 0) {
      console.log('NEEDS UPDATE: ' + file);
      const lines = content.split('\n');
      lines.forEach(function(l, i) {
        if (l.indexOf('согласие') >= 0 || l.indexOf('персональн') >= 0 || l.indexOf('checkbox') >= 0) {
          console.log('  L' + (i+1) + ': ' + l.trim().substring(0, 100));
        }
      });
    }
  }
});
console.log('Done searching');
