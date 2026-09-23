const fs = require('fs');

const page = fs.readFileSync('src/app/biznesu/razblokirovka-raschetnogo-scheta-po-115-fz/page.tsx', 'utf8');
const client = fs.readFileSync('src/app/biznesu/razblokirovka-raschetnogo-scheta-po-115-fz/Razblokirovka115fzClient.tsx', 'utf8');

const faqPart = page.slice(page.indexOf("'@type': 'FAQPage'"));
const pageFaqs = [];
const qRegex = /@type': 'Question',\s*name:\s*'([^']+)'[\s\S]*?@type': 'Answer',\s*text:\s*'([^']+)'/g;
let m;
while ((m = qRegex.exec(faqPart)) !== null) {
  pageFaqs.push({ q: m[1], a: m[2] });
}

const clientFaqs = [];
const cRegex = /q:\s*'([^']+)',\s*a:\s*'([^']+)'/g;
while ((m = cRegex.exec(client)) !== null) {
  clientFaqs.push({ q: m[1], a: m[2] });
}

console.log('Page FAQs count:', pageFaqs.length, 'Client FAQs count:', clientFaqs.length);
let allMatch = true;
pageFaqs.forEach((pf, i) => {
  const cf = clientFaqs[i];
  if (!cf) {
    console.log('Missing client FAQ at index', i);
    allMatch = false;
    return;
  }
  if (pf.q !== cf.q) {
    console.log('Diff Q at', i, '\nPage:  ', pf.q, '\nClient:', cf.q);
    allMatch = false;
  }
  if (pf.a !== cf.a) {
    console.log('Diff A at', i, '\nPage:  ', pf.a, '\nClient:', cf.a);
    allMatch = false;
  }
});
if (allMatch) {
  console.log('>>> ALL FAQS MATCH 100% WORD-FOR-WORD! <<<');
} else {
  console.log('>>> SOME DIFFERENCES FOUND <<<');
}
