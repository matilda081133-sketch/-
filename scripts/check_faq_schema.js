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
const missingFaqSchema = [];

for (const file of allFiles) {
  const content = fs.readFileSync(file, 'utf8');
  // If file contains FAQBlock or items with question/answer
  const hasFAQ = /FAQBlock|<FAQ\b|faqItems|faqs\s*=|faq\s*=|Часто задаваемые вопросы/i.test(content);
  const hasFAQSchema = /FAQPage/.test(content);
  
  if (hasFAQ && !hasFAQSchema) {
    // Check if it's not the FAQBlock component itself
    if (!file.includes('components\\FAQBlock.tsx') && !file.includes('components/FAQBlock.tsx')) {
      missingFaqSchema.push(file);
    }
  }
}

console.log('Files with FAQ UI but missing FAQPage schema:', missingFaqSchema.length);
missingFaqSchema.forEach(f => console.log(' -', f));
