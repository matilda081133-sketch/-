const fs = require('fs');
let code = fs.readFileSync('src/components/MilitaryHero.tsx', 'utf8');

code = code.replace(
  "justifyContent: 'center'",
  "justifyContent: 'space-between'"
);

code = code.replace(
  "marginBottom: urgentHint ? '32px' : '48px' }",
  "marginBottom: urgentHint ? '32px' : '48px', marginTop: 'auto' }"
);

fs.writeFileSync('src/components/MilitaryHero.tsx', code);
console.log('Fixed MilitaryHero');
