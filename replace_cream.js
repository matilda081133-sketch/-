const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('var(--color-cream)')) {
        const newContent = content.replace(/background:\s*['"]var\(--color-cream\)['"]/g, "background: 'var(--gradient-cream)'");
        if (newContent !== content) {
          fs.writeFileSync(fullPath, newContent);
          console.log('Updated', fullPath);
        }
      }
    }
  }
}

replaceInDir('./src');
