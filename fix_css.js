
const fs = require('fs');
const path = require('path');

const cssPath = path.join('src', 'app', 'globals.css');
let cssCode = fs.readFileSync(cssPath, 'utf8');

// remove .reveal-on-scroll and related classes
cssCode = cssCode.replace(/\.reveal-on-scroll\s*{[^}]*}\s*/g, '');
cssCode = cssCode.replace(/\.reveal-on-scroll\.revealed\s*{[^}]*}\s*/g, '');
cssCode = cssCode.replace(/\.delay-\d+\s*{[^}]*}\s*/g, '');

fs.writeFileSync(cssPath, cssCode);
console.log('CSS fixed');

