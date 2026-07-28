const fs = require('fs');
const file = 'src/app/grazhdanam/voennyj-yurist/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Fix 4 lines text
const oldText = 'Необязательно самостоятельно определять вид услуги. Опишите обстоятельства — мы разберём ситуацию, уточним необходимые документы и определим, какой специалист должен подключиться.';
const newText = 'Необязательно самостоятельно определять вид услуги.<br />Опишите обстоятельства — мы разберём ситуацию,<br />уточним необходимые документы и определим,<br />какой специалист должен подключиться.';

if (content.includes(oldText)) {
  content = content.replace(oldText, newText);
  console.log('Fixed 4 lines text');
} else {
  console.log('Could not find 4 lines text');
}

// 2. Fix ProcessBlock margin
const pbRegex = /\{\/\*\ Как\ проходит\ работа\ \*\/\}\s*<ProcessBlock/;
if (content.match(pbRegex)) {
  content = content.replace(pbRegex, `{/* Как проходит работа */}
      <div style={{ marginTop: '-40px', position: 'relative', zIndex: 5 }}>
      <ProcessBlock`);
      
  // Also find the closing tag of ProcessBlock to close the div
  const endRegex = /buttonText="Задать\ вопрос\ адвокату"\s*\/>/;
  if (content.match(endRegex)) {
    content = content.replace(endRegex, `buttonText="Задать вопрос адвокату"\n      />\n      </div>`);
    console.log('Fixed ProcessBlock margin');
  } else {
    console.log('Could not find ProcessBlock end');
  }
} else {
  console.log('Could not find ProcessBlock start');
}

fs.writeFileSync(file, content);
