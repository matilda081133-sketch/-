const fs = require('fs');
const path = require('path');
let totalFiles = 0, totalReplacements = 0;

function processDir(dir) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    const fp = path.join(dir, f);
    if (fs.statSync(fp).isDirectory()) { processDir(fp); return; }
    if (!['.tsx','.ts','.css','.scss','.js','.json'].some(e => fp.endsWith(e))) return;
    let c = fs.readFileSync(fp, 'utf8');
    const before = c;
    c = c.replace(/\/-\/images\//g, '/images/');
    if (c !== before) {
      const count = (before.match(/\/-\/images\//g) || []).length;
      fs.writeFileSync(fp, c, 'utf8');
      console.log(`  FIXED (${count}x): ${fp}`);
      totalFiles++;
      totalReplacements += count;
    }
  });
}

console.log('Replacing /-/images/ → /images/ in all source files...\n');
processDir('src');
console.log(`\nDone: ${totalReplacements} replacements in ${totalFiles} files.`);
