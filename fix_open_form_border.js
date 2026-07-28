const fs = require('fs');

const file = 'src/app/grazhdanam/voennyj-yurist/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldWrapper = `div style={{ background: 'var(--gradient-cream)', padding: '40px', borderRadius: '4px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', width: '100%' }}`;
const newWrapper = `div style={{ background: 'var(--gradient-cream)', padding: '40px', borderRadius: '4px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', border: '1px solid rgba(23, 50, 77, 0.1)', width: '100%' }}`;

if (content.includes(oldWrapper)) {
  content = content.replace(oldWrapper, newWrapper);
  console.log('Added delicate border to open form wrapper');
} else {
  // Let's use a regex just in case
  const wrapperRegex = /div\ style=\{\{\s*background:\ 'var\(--gradient-cream\)',\s*padding:\ '40px',\s*borderRadius:\ '4px',\s*boxShadow:\ '0\ 10px\ 30px\ rgba\(0,0,0,0\.02\)',\s*width:\ '100%'\s*\}\}/g;
  if (content.match(wrapperRegex)) {
    content = content.replace(wrapperRegex, `div style={{ background: 'var(--gradient-cream)', padding: '40px', borderRadius: '4px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', border: '1px solid rgba(23, 50, 77, 0.1)', width: '100%' }}`);
    console.log('Added delicate border to open form wrapper via regex');
  } else {
    console.log('Failed to find open form wrapper');
  }
}

fs.writeFileSync(file, content);
