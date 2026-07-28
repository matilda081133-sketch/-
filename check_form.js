const fs = require('fs');
let code = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', 'utf8');
const idx = code.indexOf('<section className="section" id="form"');
if(idx > -1) {
  console.log(code.substring(idx, idx + 2000));
} else {
  console.log('Not found');
}
