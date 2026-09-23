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
console.log('Total source files:', allFiles.length);

// 1. Check pages with JSON-LD
let jsonLdCount = 0;
let faqPageCount = 0;
let breadcrumbCount = 0;
let offerCount = 0;
let serviceCount = 0;

for (const file of allFiles) {
  const content = fs.readFileSync(file, 'utf8');
  if (/application\/ld\+json/.test(content)) jsonLdCount++;
  if (/FAQPage/.test(content)) faqPageCount++;
  if (/BreadcrumbList/.test(content)) breadcrumbCount++;
  if (/Offer/.test(content)) offerCount++;
  if (/Service/.test(content)) serviceCount++;
}

console.log('JSON-LD script count:', jsonLdCount);
console.log('FAQPage schema count:', faqPageCount);
console.log('BreadcrumbList count:', breadcrumbCount);
console.log('Offer schema count:', offerCount);
console.log('Service schema count:', serviceCount);
