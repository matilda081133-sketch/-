const fs = require('fs');

const pageFile = 'src/app/grazhdanam/voennyj-yurist/page.tsx';
let content = fs.readFileSync(pageFile, 'utf8');

// Fix the React invalid !important inline style
content = content.replace(/textDecoration:\ "none !important"/g, 'textDecoration: "none"');
content = content.replace(/border:\ "none"/g, 'border: "0"');

fs.writeFileSync(pageFile, content);
console.log('Fixed React invalid !important syntax');
