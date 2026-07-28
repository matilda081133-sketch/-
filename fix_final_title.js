const fs = require('fs');
const file = 'src/app/grazhdanam/voennyj-yurist/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldTitle = 'Получите первичную оценку ситуации';
const newTitle = 'Получите первичную <br />оценку ситуации';

// Only replace it inside the h2 for the final form!
const regex = /<h2\ style=\{\{\s*fontSize:\ '36px',\s*fontFamily:\ 'var\(--font-serif\)',\s*color:\ 'var\(--color-deep-blue\)',\s*marginBottom:\ '16px',\s*lineHeight:\ 1\.2,\s*marginTop:\ 0\ \}\}>\s*Получите\ первичную\ оценку\ ситуации\s*<\/h2>/g;

const replacement = `<h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0 }}>
                Получите первичную <br />оценку ситуации
              </h2>`;

if (content.match(regex)) {
  content = content.replace(regex, replacement);
  console.log('Fixed final form title');
} else {
  console.log('Could not find final form title');
}

fs.writeFileSync(file, content);
