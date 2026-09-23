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
const samples = [];
for (const file of allFiles) {
  const content = fs.readFileSync(file, 'utf8');
  if (/schema\.org/.test(content) && /Service/.test(content)) {
    // Extract jsonLd object or JSON-LD script
    const match = content.match(/jsonLd[A-Za-z0-9_]*\s*=\s*(\{[\s\S]*?\n  \};)/);
    if (match) {
      samples.push({ file, snippet: match[1].slice(0, 500) });
    }
  }
}

console.log('Found structured schema definitions:', samples.length);
samples.slice(0, 5).forEach(s => {
  console.log('FILE:', s.file);
  console.log(s.snippet);
  console.log('---');
});
