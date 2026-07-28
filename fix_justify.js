const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('page.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('src/app/grazhdanam/voennyj-yurist');
let changedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  // 1. Replace textWrap: 'balance' with textAlign: 'justify' in form paragraphs
  content = content.replace(/textWrap:\s*'balance'/g, "textAlign: 'justify'");
  
  // 2. Add textAlign: 'justify' to specific subtitle in voennyj-yurist/page.tsx
  if (file.endsWith('voennyj-yurist\\page.tsx') || file.endsWith('voennyj-yurist/page.tsx')) {
    content = content.replace(
      /lineHeight:\s*1\.6\s*}\}>\s*Полный спектр юридических услуг/g,
      "lineHeight: 1.6, textAlign: 'justify' }}>\n              Полный спектр юридических услуг"
    );
  }

  // 3. Let's also check StepsBlock, TiersBlock, ServiceHero subtitles? 
  // Actually, wait, let's just replace all subtitle paragraphs that might not have it.
  
  if (content !== original) {
    fs.writeFileSync(file, content);
    changedCount++;
    console.log(`Updated ${file}`);
  }
});

console.log(`Total changed files: ${changedCount}`);
