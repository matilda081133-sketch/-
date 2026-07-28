const fs = require('fs');

// 1. PricingBlock.tsx gradient
let pricingCode = fs.readFileSync('src/components/PricingBlock.tsx', 'utf8');
pricingCode = pricingCode.replace(
    /linear-gradient\(145deg, #10273B 0%, #1F3F5C 100%\)/g,
    'linear-gradient(to right, #0B1C2A 0%, #17375E 100%)'
);
fs.writeFileSync('src/components/PricingBlock.tsx', pricingCode);

// 2. page.tsx open form border radius
let pageCode = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', 'utf8');
const oldFormWrap = "background: 'var(--gradient-cream)', padding: '40px', borderRadius: '4px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', width: '100%', border: '1px solid rgba(0,0,0,0.06)'";
const newFormWrap = "background: 'var(--gradient-cream)', padding: '40px', borderRadius: '0', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', width: '100%', border: '1px solid rgba(0,0,0,0.06)'";

if (pageCode.includes(oldFormWrap)) {
    pageCode = pageCode.replace(oldFormWrap, newFormWrap);
    console.log('Fixed form radius');
} else {
    console.log('Could not find form wrap');
}

fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', pageCode);
