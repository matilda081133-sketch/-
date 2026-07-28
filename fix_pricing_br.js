const fs = require('fs');

// 1. Update PricingBlock.tsx
let pb = fs.readFileSync('src/components/PricingBlock.tsx', 'utf8');

// Add React import if missing
if (!pb.includes('import React')) {
    pb = pb.replace('\'use client\';\n', '\'use client\';\nimport React from \'react\';\n');
}

// Update PricingFeature type
pb = pb.replace(
    '  name: string;\n  value: string;',
    '  name: string | React.ReactNode;\n  value: string;'
);

fs.writeFileSync('src/components/PricingBlock.tsx', pb, 'utf8');

// 2. Update page.tsx
let page = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', 'utf8');

page = page.replace(
    '{ name: \'Защита по уголовному делу\', value: \'от [УТОЧНИТЬ] ₽\' }',
    '{ name: <>Защита по <br/>уголовному делу</>, value: \'от [УТОЧНИТЬ] ₽\' }'
);

fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', page, 'utf8');
console.log('Fixed pricing block line break');
