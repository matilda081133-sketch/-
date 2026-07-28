const fs = require('fs');

let code = fs.readFileSync('src/components/CasesBlock.tsx', 'utf8');

// Add persistent shadow
code = code.replace(
    /background: 'var\(--color-white\)',\s*position: 'relative',/g, 
    'background: \'var(--color-white)\',\n              boxShadow: \'0 4px 10px rgba(0,0,0,0.12)\',\n              position: \'relative\','
);

// Fix hover shadow
code = code.replace(
    /box-shadow: 0 20px 40px rgba\(23, 50, 77, 0\.08\);/g, 
    'box-shadow: 0 8px 24px rgba(0,0,0,0.15);'
);

fs.writeFileSync('src/components/CasesBlock.tsx', code, 'utf8');
console.log('Fixed CasesBlock shadow via script file');
