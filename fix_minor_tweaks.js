const fs = require('fs');

function applyMinorFixes() {
  // 1. Center PricingBlock titles
  const pricingFile = 'src/components/PricingBlock.tsx';
  let pricingContent = fs.readFileSync(pricingFile, 'utf8');
  pricingContent = pricingContent.replace(
    /<h3 style=\{\{\ fontSize:\ '24px',\ margin:\ '0\ 0\ 8px\ 0',\ color:\ 'inherit'\ \}\}>\{tier\.title\}<\/h3>/g,
    `<h3 style={{ fontSize: '24px', margin: '0 0 8px 0', color: 'inherit', textAlign: 'center' }}>{tier.title}</h3>`
  );
  // Also center the subtitle below the title, to make it consistent if she meant the whole header block
  pricingContent = pricingContent.replace(
    /<div style=\{\{\ fontSize:\ '15px',\ color:\ tier\.popular\ \?\ 'rgba\\(255,255,255,0\.9\\)'\ :\ 'var\\(--color-text-secondary\\)'\ \}\}>\{tier\.subtitle\}<\/div>/g,
    `<div style={{ fontSize: '15px', color: tier.popular ? 'rgba(255,255,255,0.9)' : 'var(--color-text-secondary)', textAlign: 'center' }}>{tier.subtitle}</div>`
  );
  fs.writeFileSync(pricingFile, pricingContent);
  console.log('Centered PricingBlock titles');

  // 2. Warm up gradient-cream
  const globalsFile = 'src/app/globals.css';
  let globalsContent = fs.readFileSync(globalsFile, 'utf8');
  
  // Find the exact line defining --gradient-cream
  const oldGradient = '--gradient-cream: linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(247, 244, 237, 1) 100%);';
  const newGradient = '--gradient-cream: linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(247, 238, 222, 1) 100%);';
  
  if (globalsContent.includes(oldGradient)) {
    globalsContent = globalsContent.replace(oldGradient, newGradient);
    console.log('Warmed up --gradient-cream');
  } else {
    // try regex just in case
    globalsContent = globalsContent.replace(/--gradient-cream:\s*linear-gradient\([^)]+\);/g, newGradient);
    console.log('Warmed up --gradient-cream (regex)');
  }
  
  fs.writeFileSync(globalsFile, globalsContent);
}

applyMinorFixes();
