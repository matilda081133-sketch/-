const fs = require('fs');
const path = require('path');

const targetDirs = [
  // Tax cluster
  'src/app/biznesu/nalogovyj-yurist-dlya-biznesa',
  'src/app/biznesu/nalogovyj-yurist-dlya-biznesa/osparivanie-donachislenij-i-reshenij-fns',
  'src/app/biznesu/nalogovyj-yurist-dlya-biznesa/soprovozhdenie-nalogovyh-proverok',
  'src/app/biznesu/nalogovyj-yurist-dlya-biznesa/zashchita-pri-obvinenii-v-droblenii-biznesa',
  // Migration B2B cluster
  'src/app/biznesu/migracionnoe-soprovozhdenie-biznesa',
  'src/app/biznesu/migracionnoe-soprovozhdenie-biznesa/migracionnyj-audit-rabotodatelya',
  'src/app/biznesu/migracionnoe-soprovozhdenie-biznesa/yuridicheskoe-oformlenie-inostrannyh-rabotnikov',
  'src/app/biznesu/migracionnoe-soprovozhdenie-biznesa/yurist-pri-migracionnoj-proverke-mvd',
  'src/app/biznesu/migracionnoe-soprovozhdenie-biznesa/zashchita-rabotodatelya-po-state-18-15-koap-rf',
];

for (const dir of targetDirs) {
  const pageFile = path.join(dir, 'page.tsx');
  if (!fs.existsSync(pageFile)) {
    console.log('Missing page.tsx in', dir);
    continue;
  }

  // Find Client.tsx
  const files = fs.readdirSync(dir);
  const clientFile = files.find(f => f.endsWith('Client.tsx'));
  if (!clientFile) {
    console.log('Missing Client.tsx in', dir);
    continue;
  }

  const clientContent = fs.readFileSync(path.join(dir, clientFile), 'utf8');
  let pageContent = fs.readFileSync(pageFile, 'utf8');

  // Extract faqs from client
  const faqMatch = clientContent.match(/(?:const|let)\s+(?:faqs|faqItems)\s*(?::\s*[^=]+)?=\s*(\[[\s\S]*?\n\s*\]);/);
  if (!faqMatch) {
    console.log('No faqs found in', clientFile);
    continue;
  }

  let faqList;
  try {
    faqList = eval(faqMatch[1]);
  } catch (e) {
    console.error('Failed to eval faqs in', clientFile, e.message);
    continue;
  }

  const mainEntities = faqList
    .filter(f => (f.q || f.question) && (f.a || f.answer))
    .map(f => ({
      '@type': 'Question',
      name: f.q || f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: typeof (f.a || f.answer) === 'string' ? (f.a || f.answer) : String(f.a || f.answer)
      }
    }));

  if (mainEntities.length === 0) {
    console.log('No valid QA entities in', clientFile);
    continue;
  }

  // Check canonical url in pageContent
  const canonMatch = pageContent.match(/canonical:\s*['"`](https:\/\/dejure-help\.ru\/[^'"`]+)['"`]/);
  const pageUrl = canonMatch ? canonMatch[1] : 'https://dejure-help.ru/';
  const faqId = `${pageUrl}#faq`;

  const faqPageSchemaObj = {
    '@type': 'FAQPage',
    '@id': faqId,
    mainEntity: mainEntities
  };

  const faqSchemaStr = JSON.stringify(faqPageSchemaObj, null, 6)
    .split('\n')
    .map((line, i) => (i === 0 ? line : '      ' + line))
    .join('\n');

  // Inject into @graph array in page.tsx
  // Look for end of @graph array: `    ]\n  };`
  if (!pageContent.includes('@type\': \'FAQPage') && !pageContent.includes('"@type": "FAQPage"')) {
    const graphEndPattern = /(\s*\}\s*\n\s*\]\s*\n\s*\};)/;
    if (graphEndPattern.test(pageContent)) {
      pageContent = pageContent.replace(graphEndPattern, `,\n      ${faqSchemaStr}\n    ]\n  };`);
      console.log('Injected FAQPage into', pageFile);
    } else {
      console.log('Could not find graph end pattern in', pageFile);
    }
  }

  // Update description with phone if not already present
  if (!/20-15-25|\+7/.test(pageContent)) {
    pageContent = pageContent.replace(
      /(description:\s*['"`][^'"`]+?)(['"`],)/,
      (match, p1, p2) => {
        let desc = p1.trim();
        if (desc.endsWith('.')) desc = desc.slice(0, -1);
        return `${desc}. 📞 +7 (4742) 20-15-25.${p2}`;
      }
    );
    console.log('Added phone to description in', pageFile);
  }

  fs.writeFileSync(pageFile, pageContent, 'utf8');
}

console.log('All targeted cluster pages processed!');
