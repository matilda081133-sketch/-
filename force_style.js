const fs = require('fs');
const path = require('path');
const pagePath = path.join('src', 'app', 'page.tsx');
let pageCode = fs.readFileSync(pagePath, 'utf8');

const targetStr = `className="btn btn-light" style={{ whiteSpace: 'nowrap', flexShrink: 0 }}`;
const replacement = `className="btn" style={{ whiteSpace: 'nowrap', flexShrink: 0, backgroundColor: '#FFFFFF', color: '#17324D', border: 'none', fontWeight: 'bold' }}`;

if (pageCode.includes(targetStr)) {
    pageCode = pageCode.replace(targetStr, replacement);
    fs.writeFileSync(pagePath, pageCode);
    console.log('Forced inline style applied');
} else {
    console.log('String not found');
}
