const fs = require('fs');
let page = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', 'utf8');

page = page.replace(
  "display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px'",
  "gap: '24px'"
);

page = page.replace(
  '<div style={{ gap: \'24px\' }}>',
  '<div className="grid grid-3" style={{ gap: \'24px\' }}>'
);

page = page.replace(
  /className="service-card group"/g,
  'className="card service-card"'
);

page = page.replace(
  /background: 'var\(--color-white\)',\s*padding: '40px',\s*borderRadius: '0',\s*position: 'relative',\s*overflow: 'hidden',\s*border: '1px solid var\(--color-border\)',\s*borderTop: '1px solid var\(--color-border\)',\s*transition: 'all 0.4s ease',\s*height: '100%',\s*display: 'flex',\s*flexDirection: 'column'/g,
  "height: '100%', minHeight: '160px', padding: '30px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '0', display: 'flex', flexDirection: 'column', transition: 'all 0.3s', position: 'relative', borderTop: '3px solid var(--color-primary)'"
);

page = page.replace(/<div style={{\s*position: 'absolute',\s*top: 0,\s*left: 0,\s*width: '4px',\s*height: '0%',\s*background: 'var\(--color-gold\)',\s*transition: 'height 0.4s ease'\s*}} className="service-accent-line"><\/div>/g, '');

page = page.replace(/<h3 style={{ fontSize: '24px', fontWeight: 500, color: 'var\(--color-deep-blue\)', marginBottom: '16px', fontFamily: 'var\(--font-serif\)', transition: 'color 0.4s ease' }} className="service-title">/g, '<h3 style={{ margin: \'0 0 12px 0\', fontSize: \'18px\', color: \'var(--color-deep-blue)\', lineHeight: 1.3 }}>');

page = page.replace(/<p style={{ color: 'var\(--color-text-secondary\)', fontSize: '15px', lineHeight: 1.6, margin: 0, flexGrow: 1 }}>/g, '<p style={{ margin: \'0 0 20px 0\', fontSize: \'14px\', color: \'var(--color-text-secondary)\', lineHeight: 1.5, flexGrow: 1 }}>');

const oldStyleBlock = `.service-card {
              transition: all 0.4s ease;
            }
            .service-card:hover {
              box-shadow: 0 20px 40px rgba(23, 50, 77, 0.08);
              border-color: transparent;
              transform: translateY(-4px);
            }
            .service-card:hover .service-accent-line {
              height: 100%;
            }
            .service-card:hover .service-title {
              color: var(--color-primary);
            }`;
            
const oldStyleBlockWin = oldStyleBlock.replace(/\n/g, '\r\n');

const newStyleBlock = `.service-card {
              transition: all 0.3s ease;
            }
            .service-card:hover {
              box-shadow: 0 8px 24px rgba(0,0,0,0.15);
              border-color: transparent;
              transform: translateY(-4px);
            }`;
            
page = page.replace(oldStyleBlock, newStyleBlock);
page = page.replace(oldStyleBlockWin, newStyleBlock);

fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', page, 'utf8');
console.log('Fixed SOCH changes via js file');
