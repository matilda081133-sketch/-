const fs = require('fs');
const path = require('path');

const searchDirs = ['src/app', 'src/components'];
const allFiles = [];

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(function(f) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) walk(full);
    else if (f.endsWith('.tsx') || f.endsWith('.ts')) allFiles.push(full);
  });
}
searchDirs.forEach(walk);

let totalFixed = 0;
allFiles.forEach(function(file) {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;

  // Fix href="/-/... -> href="/...
  content = content.replace(/href="\/\-\//g, 'href="/');
  // Fix href='/-/... -> href='/...
  content = content.replace(/href='\/\-\//g, "href='/");
  // Fix the exact /-/ root: href="/-" -> href="/"
  content = content.replace(/href="\/\-"/g, 'href="/"');
  content = content.replace(/href='\/\-'/g, "href='/'");

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    totalFixed++;
    console.log('Fixed: ' + file);
  }
});
console.log('Total files fixed: ' + totalFixed);
