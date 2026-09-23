const fs = require('fs');
const path = require('path');

function getPageFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of list) {
    const full = path.join(dir, item.name);
    if (item.isDirectory() && !['_next', '.git', 'node_modules'].includes(item.name)) {
      results = results.concat(getPageFiles(full));
    } else if (item.isFile() && item.name === 'page.tsx') {
      results.push(full);
    }
  }
  return results;
}

const pageFiles = getPageFiles('./src/app');
console.log('Total page.tsx files:', pageFiles.length);

let withDesc = 0;
let withoutDesc = 0;
let descHasLipetsk = 0;
let descHasPhone = 0;

pageFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const match = content.match(/description:\s*['"`]([\s\S]*?)['"`]/);
  if (match) {
    withDesc++;
    const desc = match[1].replace(/\s+/g, ' ').trim();
    if (/Липецк/i.test(desc)) descHasLipetsk++;
    if (/20-15-25|\+7/i.test(desc)) descHasPhone++;
  } else {
    withoutDesc++;
  }
});

console.log('Pages with description:', withDesc);
console.log('Pages without description:', withoutDesc);
console.log('Descriptions containing Липецк:', descHasLipetsk);
console.log('Descriptions containing Phone:', descHasPhone);
