const fs = require('fs');
const file = 'src/app/grazhdanam/voennyj-yurist/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Fix open form title
content = content.replace('<ContactsForm title="" subtitle="" />', '<ContactsForm title="Отправьте заявку" subtitle="" />');

// 2. Fix dividers
content = content.replace(
  `<div style={{ textAlign: 'left', marginBottom: '40px' }}><h2 className="section-title" style={{ marginBottom: '16px', display: 'inline-block' }}>Кому мы помогаем</h2><div style={{ width: '60px', height: '3px', backgroundColor: 'var(--color-primary)', margin: '0' }}></div></div>`,
  `<div style={{ textAlign: 'left', marginBottom: '40px' }}><h2 className="section-title" style={{ marginBottom: '16px', display: 'inline-block' }}>Кому мы помогаем</h2><div style={{ width: '60px', height: '3px', backgroundColor: 'var(--color-gold)', margin: '0' }}></div></div>`
);

content = content.replace(
  `<div style={{ textAlign: 'left', marginBottom: '40px' }}><h2 className="section-title" style={{ marginBottom: '16px', display: 'inline-block' }}>Направления помощи</h2><div style={{ width: '60px', height: '3px', backgroundColor: 'var(--color-primary)', margin: '0' }}></div></div>`,
  `<div style={{ textAlign: 'left', marginBottom: '40px' }}><h2 className="section-title" style={{ marginBottom: '16px', display: 'inline-block' }}>Направления помощи</h2><div style={{ width: '60px', height: '3px', backgroundColor: 'var(--color-gold)', margin: '0' }}></div></div>`
);

// 3. Fix remote help text and bullets to be gold
// In final_furious_fixes.js, I set it to: color: 'var(--color-primary)'
// Need to change it to var(--color-gold)
const remoteHelpRegex = /<h3 style=\{\{\s*fontSize:\ '24px',\s*fontFamily:\ 'var\(--font-serif\)',\s*color:\ 'var\(--color-primary\)',\s*marginBottom:\ '24px',\s*position:\ 'relative',\s*zIndex:\ 1\ \}\}>Что\ можно\ сделать\ дистанционно<\/h3>\s*<div\ style=\{\{\s*position:\ 'relative',\s*zIndex:\ 1,\s*flexGrow:\ 1,\s*display:\ 'flex',\s*flexDirection:\ 'column',\s*justifyContent:\ 'center'\ \}\}>\s*<ul\ style=\{\{\s*listStyleType:\ 'disc',\s*paddingLeft:\ '20px',\s*margin:\ '0\ 0\ 20px\ 0',\s*fontSize:\ '16px',\s*color:\ 'var\(--color-primary\)',\s*lineHeight:\ 1.7\ \}\}>/g;

if (content.match(remoteHelpRegex)) {
  content = content.replace(remoteHelpRegex, `<h3 style={{ fontSize: '24px', fontFamily: 'var(--font-serif)', color: 'var(--color-gold)', marginBottom: '24px', position: 'relative', zIndex: 1 }}>Что можно сделать дистанционно</h3>
              <div style={{ position: 'relative', zIndex: 1, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', margin: '0 0 20px 0', fontSize: '16px', color: 'var(--color-gold)', lineHeight: 1.7 }}>`);
  console.log('Fixed remote help text to gold');
} else {
  console.log('Failed to find remote help regex');
}

fs.writeFileSync(file, content);
console.log('Done fixing everything.');
