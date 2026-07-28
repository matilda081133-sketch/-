const fs = require('fs');
let code = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', 'utf8');
if (code.includes('gridColumn: \'span 2\'')) {
    console.log('gridColumn span 2 is present!');
} else {
    console.log('MISSING gridColumn span 2');
}
