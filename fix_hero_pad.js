const fs = require('fs');
let content = fs.readFileSync('src/components/MilitaryHero.tsx', 'utf8');
content = content.replace("paddingTop: '160px'", "paddingTop: '100px'");
fs.writeFileSync('src/components/MilitaryHero.tsx', content);
console.log('Hero paddingTop: 160px -> 100px');
