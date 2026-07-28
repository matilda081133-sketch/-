const fs = require('fs');
let page = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', 'utf8');

const regex = /<div style={{ background: 'var\(--color-cream\)', padding: '40px', borderLeft: '4px solid var\(--color-gold\)', position: 'relative' }}>\s*<div style={{ position: 'absolute', top: '-10px', right: '20px'/;

const newStyle = `<div style={{ background: 'var(--color-cream)', padding: '40px', borderLeft: '4px solid var(--color-gold)', position: 'relative', marginTop: '60px' }}>
              <div style={{ position: 'absolute', top: '-10px', right: '20px'`;

if (page.match(regex)) {
    page = page.replace(regex, newStyle);
    fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', page, 'utf8');
    console.log('Successfully added marginTop to Чем может помочь адвокат');
} else {
    console.log('Regex did not match!');
}
