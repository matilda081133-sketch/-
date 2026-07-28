const fs = require('fs');

const pricingFile = 'src/components/PricingBlock.tsx';
let pricing = fs.readFileSync(pricingFile, 'utf8');

pricing = pricing.replace(
  /<p style=\{\{\ fontSize:\ '15px',\ opacity:\ 0\.8,\ margin:\ '0\ 0\ 30px\ 0',\ minHeight:\ '40px'\ \}\}>\{tier\.subtitle\}<\/p>/g,
  `<p style={{ fontSize: '15px', opacity: 0.8, margin: '0 0 30px 0', minHeight: '40px', textAlign: 'center' }}>{tier.subtitle}</p>`
);

fs.writeFileSync(pricingFile, pricing);
console.log('Centered subtitle in PricingBlock');
