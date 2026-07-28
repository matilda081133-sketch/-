const fs = require('fs');
let page = fs.readFileSync('src/components/MilitaryHero.tsx', 'utf8');

const regex = /<div className=\{imageUrl \? "grid grid-2" : ""\} style=\{\{ display: imageUrl \? 'grid' : 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center' \}\}>/;
const replacement = `<div className={imageUrl ? "grid grid-2" : ""} style={{ display: imageUrl ? 'grid' : 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center', ...(imageUrl && { gridTemplateColumns: '1.3fr 0.7fr' }) }}>`;

if (regex.test(page)) {
    page = page.replace(regex, replacement);
    fs.writeFileSync('src/components/MilitaryHero.tsx', page, 'utf8');
    console.log('Successfully adjusted grid ratio for MilitaryHero!');
} else {
    console.log('Regex did not match!');
}
