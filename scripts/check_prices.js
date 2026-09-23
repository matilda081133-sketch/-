const fs = require('fs');
const path = require('path');

function searchFiles(dir) {
  let files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && !['node_modules', '.next', 'out', '.git'].includes(entry.name)) {
      files = files.concat(searchFiles(full));
    } else if (entry.isFile() && /\.(tsx|ts|jsx|js)$/.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

const allFiles = searchFiles('./src');
const noPriceFiles = [];
const poZaprosuFiles = [];

for (const file of allFiles) {
  const content = fs.readFileSync(file, 'utf8');
  if (/PricingBlock/.test(content)) {
    if (/по запросу/i.test(content)) {
      poZaprosuFiles.push(file);
    }
  }
}

console.log('Files with "по запросу":', poZaprosuFiles.length);
poZaprosuFiles.forEach(f => console.log(' -', f));
