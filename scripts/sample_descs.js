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

const files = getPageFiles('./src/app');
files.slice(0, 20).forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const m = c.match(/description:\s*['"`]([\s\S]*?)['"`]/);
  if (m) {
    const cleanDesc = m[1].replace(/\s+/g, ' ').trim();
    console.log(f.replace(/\\/g, '/'), '-> len:', cleanDesc.length, '|', cleanDesc);
  }
});
