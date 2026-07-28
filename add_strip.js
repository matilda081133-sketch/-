const fs = require('fs');
const glob = require('glob');
const pages = glob.sync('src/app/grazhdanam/voennyj-yurist/**/page.tsx');
pages.forEach(page => {
  if (page === 'src/app/grazhdanam/voennyj-yurist/page.tsx') return;
  let content = fs.readFileSync(page, 'utf8');
  if (!content.includes('ExtendedContactStrip')) {
    content = content.replace(/(import Header .*)/, "$1\nimport ExtendedContactStrip from '@/components/ExtendedContactStrip';");
    content = content.replace(/(<MilitaryHero[\s\S]*?\/>\s*)/, "$1\n      <ExtendedContactStrip />\n\n");
    fs.writeFileSync(page, content);
    console.log('Updated', page);
  }
});
