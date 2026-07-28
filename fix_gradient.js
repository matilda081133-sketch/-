const fs = require('fs');
const file = 'src/app/globals.css';
let content = fs.readFileSync(file, 'utf8');

const oldGrad = 'radial-gradient(at 80% 50%, rgba(234, 241, 246, 0.8) 0%, transparent 50%)';
const newGrad = 'radial-gradient(at 90% 90%, rgba(234, 241, 246, 0.8) 0%, transparent 50%)';

if (content.includes(oldGrad)) {
  content = content.replace(oldGrad, newGrad);
  console.log('Fixed gradient');
} else {
  console.log('Failed to find gradient in globals.css');
}

fs.writeFileSync(file, content);
