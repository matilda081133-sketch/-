const fs = require('fs');

const dir = 'src/app/biznesu/dogovornoe-pravo';
function scan(d) {
  fs.readdirSync(d).forEach(f => {
    const p = d + '/' + f;
    if (fs.statSync(p).isDirectory()) scan(p);
    else if (f === 'page.tsx') {
      const content = fs.readFileSync(p, 'utf8');
      console.log('=== ' + p + ' ===');
      const ogMatch = content.match(/images\/og\/[^\s"']+/);
      console.log('og:image:', ogMatch ? ogMatch[0] : 'NONE');
      const addrMatch = content.match(/streetAddress[^\n]+/);
      console.log('address:', addrMatch ? addrMatch[0] : 'NONE');
      console.log('BreadcrumbList:', content.includes('BreadcrumbList') ? 'YES' : 'NO');
    }
  });
}
scan(dir);
