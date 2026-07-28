const fs = require('fs');

const globalsFile = 'src/app/globals.css';
let globals = fs.readFileSync(globalsFile, 'utf8');

// The current value is:
// --gradient-cream: linear-gradient(135deg, rgba(253, 250, 242, 1) 0%, rgba(247, 238, 222, 1) 100%);

globals = globals.replace(
  /--gradient-cream:\s*linear-gradient\([^)]+\);/g,
  `--gradient-cream: linear-gradient(135deg, rgba(246, 236, 218, 1) 0%, rgba(234, 219, 194, 1) 100%);`
);

fs.writeFileSync(globalsFile, globals);
console.log('Fixed globals.css gradient warmth');
