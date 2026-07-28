const fs = require('fs');

// 1. page.tsx separators
let pageCode = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', 'utf8');

// Replace all primary color separators with gold #E5C494
pageCode = pageCode.replace(
  /<div style=\{\{\s*width:\s*'40px',\s*height:\s*'2px',\s*backgroundColor:\s*'var\(--color-primary\)'\s*\}\}><\/div>/g,
  `<div style={{ width: '40px', height: '2px', backgroundColor: '#E5C494' }}></div>`
);
pageCode = pageCode.replace(
  /<div style=\{\{\s*width:\s*'40px',\s*height:\s*'2px',\s*backgroundColor:\s*'var\(--color-primary\)',\s*marginBottom:\s*'16px'\s*\}\}><\/div>/g,
  `<div style={{ width: '40px', height: '2px', backgroundColor: '#E5C494', marginBottom: '16px' }}></div>`
);
pageCode = pageCode.replace(
  /<div style=\{\{\s*width:\s*'40px',\s*height:\s*'2px',\s*backgroundColor:\s*'var\(--color-primary\)',\s*marginBottom:\s*'24px'\s*\}\}><\/div>/g,
  `<div style={{ width: '40px', height: '2px', backgroundColor: '#E5C494', marginBottom: '24px' }}></div>`
);

// We should also replace the one in CasesBlock.tsx
let casesCode = fs.readFileSync('src/components/CasesBlock.tsx', 'utf8');
casesCode = casesCode.replace(
  /<div style=\{\{\s*width:\s*'40px',\s*height:\s*'2px',\s*backgroundColor:\s*'var\(--color-primary\)'\s*\}\}><\/div>/g,
  `<div style={{ width: '40px', height: '2px', backgroundColor: '#E5C494' }}></div>`
);
fs.writeFileSync('src/components/CasesBlock.tsx', casesCode);

// 2. page.tsx pricing wrap
pageCode = pageCode.replace(
  /name: 'Защита по уголовному делу'/g,
  `name: 'Защита по <br />уголовному делу'`
);

// We should also replace it in PricingBlock.tsx if it's there
let pricingCode = fs.readFileSync('src/components/PricingBlock.tsx', 'utf8');
pricingCode = pricingCode.replace(
  /name: 'Защита по уголовному делу'/g,
  `name: 'Защита по <br />уголовному делу'`
);

fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', pageCode);
fs.writeFileSync('src/components/PricingBlock.tsx', pricingCode);

// WAIT! We need to make sure that in PricingBlock.tsx, the feature name is rendered using dangerouslySetInnerHTML or accepts ReactNode, otherwise <br /> will show as literal text!
// Let's check how PricingBlock renders feature.name.
