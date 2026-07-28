const fs = require('fs');
let content = fs.readFileSync('src/components/ProcessBlock.tsx', 'utf8');

content = content.replace(
  'ctaButtonHref?: string;',
  'ctaButtonHref?: string;\n  alignTitle?: \'left\' | \'center\';'
);

content = content.replace(
  'ctaButtonHref = "#consultation"',
  'ctaButtonHref = "#consultation",\n  alignTitle = \'center\''
);

content = content.replace(
  '<div style={{ textAlign: \'center\', marginBottom: \'50px\' }}>',
  '<div style={{ textAlign: alignTitle, marginBottom: \'50px\' }}>'
);

content = content.replace(
  '<h2 style={{ fontFamily: \'var(--font-serif)\', fontSize: \'42px\', color: \'var(--color-deep-blue)\', marginBottom: \'24px\', textAlign: \'center\' }}>',
  '<h2 className={alignTitle === \'left\' ? \'with-accent\' : \'\'} style={{ fontFamily: \'var(--font-serif)\', fontSize: \'42px\', color: \'var(--color-deep-blue)\', marginBottom: \'24px\', textAlign: alignTitle }}>'
);

fs.writeFileSync('src/components/ProcessBlock.tsx', content, 'utf8');
console.log('ProcessBlock updated successfully!');
