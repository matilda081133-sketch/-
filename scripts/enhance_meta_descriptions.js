const fs = require('fs');
const path = require('path');

function getPageFiles(dir) {
  let r = [];
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const f = path.join(dir, item.name);
    if (item.isDirectory() && !['_next', '.git', 'node_modules'].includes(item.name)) {
      r = r.concat(getPageFiles(f));
    } else if (item.isFile() && item.name === 'page.tsx') {
      r.push(f);
    }
  }
  return r;
}

const ignorePaths = ['404', '500', '503', 'admin', 'privacy', 'consent', 'cookies'];
const allPageFiles = getPageFiles('./src/app');
let updatedCount = 0;

for (const file of allPageFiles) {
  const normPath = file.replace(/\\/g, '/');
  if (ignorePaths.some(p => normPath.includes(`/${p}/`))) continue;

  let content = fs.readFileSync(file, 'utf8');

  // Match description in metadata
  const descRegex = /description:\s*(\n\s*)?(['"`])([\s\S]*?)\2\s*,/g;
  let fileUpdated = false;

  content = content.replace(descRegex, (fullMatch, newline, quote, descText) => {
    let clean = descText.trim();
    if (clean.includes('+7') || clean.includes('20-15-25')) return fullMatch;
    
    // Remove trailing dot if present
    if (clean.endsWith('.')) clean = clean.slice(0, -1);

    // Format phone addition
    const enriched = `${clean}. 📞 +7 (4742) 20-15-25.`;
    fileUpdated = true;
    return `description: ${quote}${enriched}${quote},`;
  });

  if (fileUpdated) {
    fs.writeFileSync(file, content, 'utf8');
    updatedCount++;
  }
}

console.log(`Updated meta descriptions with CTR phone number in ${updatedCount} additional pages.`);
