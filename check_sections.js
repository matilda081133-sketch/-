const fs = require('fs');
let code = fs.readFileSync('temp_1401.html', 'utf8');

const matches = code.match(/<section[^>]*id="[^"]+"[^>]*>/g);
if (matches) {
    matches.forEach(m => {
        let idx = code.indexOf(m);
        console.log(code.substring(idx, idx + 200).replace(/\n/g, ' '));
        console.log('---');
    });
}
