const fs = require('fs');

// 1. Tax hub page.tsx
const taxPageFile = 'src/app/biznesu/nalogovyj-yurist-dlya-biznesa/page.tsx';
let taxPage = fs.readFileSync(taxPageFile, 'utf8');
if (!taxPage.includes('Да. Да. Юристы подготовят')) {
  console.error('Target string not found in tax page.tsx!');
  process.exit(1);
}
taxPage = taxPage.replace('Да. Да. Юристы подготовят', 'Да. Юристы подготовят');
fs.writeFileSync(taxPageFile, taxPage, 'utf8');
console.log('Tax hub page.tsx updated successfully');

// 2. Droblenie ZashchitaPriDrobleniiClient.tsx
const droblenieFile = 'src/app/biznesu/nalogovyj-yurist-dlya-biznesa/zashchita-pri-obvinenii-v-droblenii-biznesa/ZashchitaPriDrobleniiClient.tsx';
let droblenie = fs.readFileSync(droblenieFile, 'utf8');

const oldLink = "link: '/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-nalogovym-prestupleniyam/'";
const newLink = "link: 'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-nalogovym-prestupleniyam/'";
if (!droblenie.includes(oldLink)) {
  console.error('Target oldLink not found in droblenie!');
  process.exit(1);
}
droblenie = droblenie.replace(oldLink, newLink);

droblenie = droblenie.replace(
  /href="#form"(\r?\n\s*className="situation-btn")/,
  'href={sit.link || "#form"}$1'
);
fs.writeFileSync(droblenieFile, droblenie, 'utf8');
console.log('Droblenie client updated successfully');
