const fs = require('fs');
const file = 'src/app/grazhdanam/voennyj-yurist/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const processBlockOld = `<ProcessBlock \n        title="Как проходит работа"`;
const processBlockNew = `<div style={{ marginTop: '-40px', position: 'relative', zIndex: 5 }}>\n      <ProcessBlock \n        title="Как проходит работа"`;

if (content.includes(processBlockOld)) {
  // Find the end of ProcessBlock
  const pStartIdx = content.indexOf(processBlockOld);
  const pEndIdx = content.indexOf('/>', pStartIdx);
  if (pEndIdx !== -1) {
    const endStr = content.substring(pStartIdx, pEndIdx + 2);
    content = content.replace(endStr, endStr + '\n      </div>');
    content = content.replace(processBlockOld, processBlockNew);
    console.log('Wrapped ProcessBlock with negative margin');
  } else {
    console.log('Could not find end of ProcessBlock');
  }
} else {
  console.log('Could not find ProcessBlock');
}

fs.writeFileSync(file, content);
