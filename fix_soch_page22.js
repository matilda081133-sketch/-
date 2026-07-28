const fs = require('fs');
let page = fs.readFileSync('src/components/CasesBlock.tsx', 'utf8');

const regex = /<div style={{ marginTop: '30px', background: 'rgba\(193, 160, 102, 0\.05\)', padding: '20px', borderRadius: '4px', border: '1px solid rgba\(193, 160, 102, 0\.2\)', borderLeft: '4px solid var\(--color-gold\)' }}>\s*<h5 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0\.05em', color: 'var\(--color-primary\)', marginBottom: '8px', fontWeight: 600 }}>Ключевой результат<\/h5>/;
const newCard = `<div style={{ marginTop: '30px', background: 'rgba(193, 160, 102, 0.05)', padding: '20px', borderRadius: '0', border: '1px solid rgba(193, 160, 102, 0.2)', borderLeft: '4px solid var(--color-gold)' }}>
                <h5 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-primary)', marginBottom: '8px', fontWeight: 600 }}>Ключевой результат</h5>`;

if (page.match(regex)) {
    page = page.replace(regex, newCard);
    fs.writeFileSync('src/components/CasesBlock.tsx', page, 'utf8');
    console.log('Successfully removed border radius from Ключевой результат mini-cards');
} else {
    console.log('Regex did not match!');
}
