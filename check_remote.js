const fs = require('fs');
let code = fs.readFileSync('temp_1401.html', 'utf8');
const start = code.indexOf('<section class="section bg-cream" id="remote">');
const end = code.indexOf('<section id="pricing"');
if (start > -1 && end > -1) {
    console.log(code.substring(start, end));
}
