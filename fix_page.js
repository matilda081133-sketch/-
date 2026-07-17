const fs = require('fs');
let c = fs.readFileSync('src/app/page.tsx', 'utf8');

// Strip all inline border radius
c = c.replace(/borderRadius:\s*'[^']+'/g, `borderRadius: '0'`);

// Make images relative to the page (no leading slash)
c = c.replace(/img:\s*'\/-\/images\//g, `img: 'images/`);

fs.writeFileSync('src/app/page.tsx', c);
console.log('Fixed page.tsx');
