const fs = require('fs');
const path = require('path');

function checkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  entries.forEach(e => {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) checkDir(full);
    else if (e.name === 'page.tsx') {
      const content = fs.readFileSync(full, 'utf8');
      // Check for <br/> or <br /> in title metadata
      if (content.includes('title:') && content.includes('<br')) {
        const lines = content.split('\n');
        lines.forEach((l, i) => {
          if (l.includes('title:') && l.includes('<br')) {
            console.log(full + ' L' + (i+1) + ': ' + l.trim());
          }
        });
      }
    }
  });
}

checkDir('src/app');
