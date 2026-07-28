const fs = require('fs');
const file = 'src/app/grazhdanam/voennyj-yurist/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// The syntax error is:
// 303 |         buttonText="Задать вопрос адвокату"
// 304 |       />
// 305 |       </div>
// 306 |
// 307 |       {/* Как проходит работа */}
// 308 |       <div style={{ marginTop: '-40px', position: 'relative', zIndex: 5 }}>

const lines = content.split('\n');
const newLines = [];
let removedDiv = false;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('</div>') && lines[i-1] && lines[i-1].includes('/>') && lines[i-2] && lines[i-2].includes('buttonText="Задать вопрос адвокату"')) {
    console.log('Removed stray </div> at line', i+1);
    removedDiv = true;
    continue; // skip this line
  }
  
  newLines.push(lines[i]);
  
  if (lines[i].includes('ctaButtonHref="#form"')) {
    // ProcessBlock ends in two lines
    newLines.push(lines[i+1]); // />
    newLines.push('      </div>'); // close the div opened at line 308
    console.log('Added closing </div> after ProcessBlock');
    i++; // skip the /> line since we added it
  }
}

fs.writeFileSync(file, newLines.join('\n'));
