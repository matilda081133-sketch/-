const fs = require('fs');

const targetDirs = [
  'src/app/biznesu/nalogovyj-yurist-dlya-biznesa',
  'src/app/biznesu/nalogovyj-yurist-dlya-biznesa/osparivanie-donachislenij-i-reshenij-fns',
  'src/app/biznesu/nalogovyj-yurist-dlya-biznesa/soprovozhdenie-nalogovyh-proverok',
  'src/app/biznesu/nalogovyj-yurist-dlya-biznesa/zashchita-pri-obvinenii-v-droblenii-biznesa',
  'src/app/biznesu/migracionnoe-soprovozhdenie-biznesa',
  'src/app/biznesu/migracionnoe-soprovozhdenie-biznesa/migracionnyj-audit-rabotodatelya',
  'src/app/biznesu/migracionnoe-soprovozhdenie-biznesa/yuridicheskoe-oformlenie-inostrannyh-rabotnikov',
  'src/app/biznesu/migracionnoe-soprovozhdenie-biznesa/yurist-pri-migracionnoj-proverke-mvd',
  'src/app/biznesu/migracionnoe-soprovozhdenie-biznesa/zashchita-rabotodatelya-po-state-18-15-koap-rf',
];

for (const d of targetDirs) {
  const p = d + '/page.tsx';
  let c = fs.readFileSync(p, 'utf8');
  if (c.includes("name: 'Липецк и Липецкая область'\n        },\n      {\n            \"@type\": \"FAQPage\"")) {
    c = c.replace(
      "name: 'Липецк и Липецкая область'\n        },\n      {\n            \"@type\": \"FAQPage\"",
      "name: 'Липецк и Липецкая область'\n        }\n      },\n      {\n            \"@type\": \"FAQPage\""
    );
    fs.writeFileSync(p, c, 'utf8');
    console.log('Fixed', p);
  } else {
    console.log('No replacement needed for', p);
  }
}
