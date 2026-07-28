const fs = require('fs');
let code = fs.readFileSync('temp_1401.html', 'utf8');
const idx = code.indexOf('id="specialist"');
if (idx > -1) {
    console.log(code.substring(idx, idx + 800));
}
