const fs = require('fs');
let page = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', 'utf8');

const regexContainer = /className="punishment-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'var\(--color-white\)', padding: '24px', borderRadius: '4px', boxShadow: '0 4px 15px rgba\(0,0,0,0\.03\)' }}/;
const newContainer = `className="punishment-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'var(--color-white)', padding: '24px', borderRadius: '0', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}`;

const regexBadge = /<div style={{ alignSelf: 'flex-start', background: 'var\(--color-deep-blue\)', color: 'var\(--color-white\)', padding: '4px 12px', borderRadius: '4px', fontSize: '13px', fontWeight: 600, marginBottom: '16px' }}>{item\.title}<\/div>/;
const newBadge = `<div style={{ alignSelf: 'flex-start', background: 'var(--color-deep-blue)', color: 'var(--color-white)', padding: '4px 12px', borderRadius: '0', fontSize: '13px', fontWeight: 600, marginBottom: '16px' }}>{item.title}</div>`;

if (page.match(regexContainer) && page.match(regexBadge)) {
    page = page.replace(regexContainer, newContainer);
    page = page.replace(regexBadge, newBadge);
    fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', page, 'utf8');
    console.log('Successfully removed border radius from punishment cards');
} else {
    console.log('Regex did not match!');
}
