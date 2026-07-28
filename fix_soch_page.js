const fs = require('fs');

let page = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', 'utf8');

// 1. Update title color to gold
page = page.replace(
    '<h3 style={{ fontSize: \'24px\', fontFamily: \'var(--font-serif)\', color: \'var(--color-white)\', marginBottom: \'24px\', position: \'relative\', zIndex: 1 }}>Что сообщить при первом обращении</h3>',
    '<h3 style={{ fontSize: \'24px\', fontFamily: \'var(--font-serif)\', color: \'var(--color-gold)\', marginBottom: \'24px\', position: \'relative\', zIndex: 1 }}>Что сообщить при первом обращении</h3>'
);

// 2. Update the situations block to exactly match the Directions block from the main page
const oldSituationsBlock = `              <div key={i} style={{
                background: 'var(--color-white)',
                padding: '40px',
                borderRadius: '0',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid var(--color-border)',
                borderTop: '1px solid var(--color-border)',
                transition: 'all 0.4s ease',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }} className="service-card group">
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '4px',
                  height: '0%',
                  background: 'var(--color-gold)',
                  transition: 'height 0.4s ease'
                }} className="service-accent-line"></div>
                <h3 style={{ fontSize: '24px', fontWeight: 500, color: 'var(--color-deep-blue)', marginBottom: '16px', fontFamily: 'var(--font-serif)', transition: 'color 0.4s ease' }} className="service-title">
                  {item.title}
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: 1.6, margin: 0, flexGrow: 1 }}>
                  {item.desc}
                </p>
              </div>`;

const newSituationsBlock = `              <div key={i} style={{
                background: 'var(--color-white)',
                padding: '30px',
                borderRadius: '0',
                position: 'relative',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-primary)',
                transition: 'all 0.3s',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }} className="service-card group">
                <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  {item.desc}
                </p>
              </div>`;

page = page.replace(oldSituationsBlock, newSituationsBlock);

// Replace the old style block for service-card
const oldStyleBlock = `          <style dangerouslySetInnerHTML={{__html: \`
            .service-card {
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
            }
          \`}} />`;

const newStyleBlock = `          <style dangerouslySetInnerHTML={{__html: \`
            .service-card {
              transition: all 0.3s ease;
            }
            .service-card:hover {
              box-shadow: 0 8px 24px rgba(0,0,0,0.15);
              border-color: transparent;
              transform: translateY(-4px);
            }
          \`}} />`;

page = page.replace(oldStyleBlock, newStyleBlock);

fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', page, 'utf8');
console.log('Fixed SOCH situations and title color');
