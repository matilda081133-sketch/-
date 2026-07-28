const fs = require('fs');
let code = fs.readFileSync('src/components/SpecialistBlock.tsx', 'utf8');
const idx = code.indexOf('id="specialist"');
console.log(code.substring(idx - 100, idx + 200));
