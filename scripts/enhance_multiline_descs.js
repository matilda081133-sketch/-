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
  if (/20-15-25|\+7/.test(content)) continue;

  // Match multiline description:
  const match = content.match(/description:\s*\n?\s*(['"`])([\s\S]*?)\1\s*,/);
  if (match) {
    let raw = match[2].trim();
    if (raw.endsWith('.')) raw = raw.slice(0, -1);
    const quote = match[1];
    const replacement = `description: ${quote}${raw}. 📞 +7 (4742) 20-15-25.${quote},`;
    content = content.replace(match[0], replacement);
    fs.writeFileSync(file, content, 'utf8');
    updatedCount++;
  }
}

console.log(`Updated multiline descriptions in ${updatedCount} more pages.`);
