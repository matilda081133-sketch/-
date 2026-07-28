const fs = require('fs');

const file = 'src/components/UrgentContactStrip.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /textDecoration: 'underline'/g,
  `textDecoration: 'none'`
);

fs.writeFileSync(file, content);
console.log('Removed underline from UrgentContactStrip');
