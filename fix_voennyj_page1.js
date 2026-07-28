const fs = require('fs');
let page = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', 'utf8');

const regex = /<div style={{ background: 'var\(--gradient-cream\)', padding: '40px', borderRadius: '0', boxShadow: '0 10px 30px rgba\(0,0,0,0\.02\)', width: '100%', border: '1px solid rgba\(0,0,0,0\.06\)' }}>/;
const newStyle = `<div style={{ background: 'var(--gradient-cream)', padding: '40px', borderRadius: '0', boxShadow: '0 8px 24px rgba(0,0,0,0.15)', width: '100%', border: '1px solid rgba(0,0,0,0.06)' }}>`;

if (page.match(regex)) {
    page = page.replace(regex, newStyle);
    fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', page, 'utf8');
    console.log('Successfully updated contact form shadow in voennyj-yurist');
} else {
    console.log('Regex did not match!');
}
