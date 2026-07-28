const fs = require('fs');
let code = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', 'utf8');
const lines = code.split('\n');
lines.forEach((line, i) => {
    if (line.includes('ContactsForm') || line.includes('contact')) {
        console.log(code.substring(code.indexOf(line) - 500, code.indexOf(line) + 500));
        console.log('---');
    }
});
