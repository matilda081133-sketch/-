const fs = require('fs');

const clientFile = 'src/app/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/IspolnitelnoeClient.tsx';
let content = fs.readFileSync(clientFile, 'utf-8');

// Replace the card font styles with explicit 17px/14px matching tight compact cards
content = content.replace(
  /fontSize:\s*'18px',[\s\S]*?fontWeight:\s*600,/m,
  "fontSize: '17px !important', fontWeight: 600,"
);

fs.writeFileSync(clientFile, content, 'utf-8');
console.log('Explicit font-size updated');
