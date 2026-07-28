const fs = require('fs');

const cardStyleOld1 = `<a key={i} href={dir.link} data-analytics="military_service_click" data-slug={dir.slug} style={{
                textDecoration: 'none',
                background: 'var(--color-white)',
                padding: '40px',
                borderRadius: '0',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid var(--color-border)',
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
                }} className="service-accent-line"></div>`;

const cardStyleNew1 = `<a key={i} href={dir.link} data-analytics="military_service_click" data-slug={dir.slug} style={{
                textDecoration: 'none',
                background: 'var(--color-white)',
                padding: '30px',
                borderRadius: '0',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-primary)',
                transition: 'all 0.3s ease',
                height: '100%',
                minHeight: '160px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }} className="card service-card hover-lift">`;
              
const titleOld1 = `<h3 style={{ fontSize: '20px', marginBottom: '12px', color: 'var(--color-deep-blue)' }}>{dir.title}</h3>`;
const titleNew1 = `<h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3 }}>{dir.title}</h3>`;

const descOld1 = `<p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: 1.5, marginBottom: '24px' }}>{dir.desc}</p>`;
const descNew1 = `<p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>{dir.desc}</p>`;

const arrowOld1 = `<div className="card-service-arrow" style={{ marginTop: 'auto' }}>
                  Подробнее <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>`;
const arrowNew1 = `<div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  Подробнее <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>`;

const mainFile = 'src/app/grazhdanam/voennyj-yurist/page.tsx';
let mainContent = fs.readFileSync(mainFile, 'utf8');

// For main page
mainContent = mainContent.replace(cardStyleOld1, cardStyleNew1);
mainContent = mainContent.replace(titleOld1, titleNew1);
mainContent = mainContent.replace(descOld1, descNew1);
mainContent = mainContent.replace(arrowOld1, arrowNew1);

fs.writeFileSync(mainFile, mainContent);
console.log('Fixed Main Page Directions');

// Now for SOCH Block 11
const sochFile = 'src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx';
let sochContent = fs.readFileSync(sochFile, 'utf8');

const sochCardOld = `<a href="/grazhdanam/voennyj-yurist/" style={{ 
              display: 'flex', 
              flexDirection: 'column',
              textDecoration: 'none', 
              background: 'var(--color-white)', 
              padding: '40px',
              borderRadius: '0',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid var(--color-border)',
              transition: 'all 0.4s ease',
              height: '100%'
            }} className="service-card group">
              <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '0%', background: 'var(--color-gold)', transition: 'height 0.4s ease' }} className="service-accent-line"></div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px', color: 'var(--color-deep-blue)' }}>Военный адвокат</h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: 1.5, marginBottom: '24px' }}>Защита прав военнослужащих</p>
              <div className="card-service-arrow" style={{ marginTop: 'auto' }}>
                Подробнее <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </a>`;

const sochCardNew = `<a href="/grazhdanam/voennyj-yurist/" className="card service-card hover-lift" style={{ 
              display: 'flex', 
              flexDirection: 'column',
              textDecoration: 'none', 
              background: 'var(--color-white)', 
              padding: '30px',
              borderRadius: '0',
              position: 'relative',
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-primary)',
              transition: 'all 0.3s',
              height: '100%',
              minHeight: '160px'
            }}>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3 }}>Военный адвокат</h3>
              <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>Защита прав военнослужащих</p>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                Подробнее <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </a>`;

sochContent = sochContent.replace(sochCardOld, sochCardNew);

// What about Block 2 (В каких ситуациях нужна помощь адвоката)? She said:
// "Направления оформи в таком же стиле как блок направлений главной страницы" (for SOCH).
// Block 2 was formatted WITH the gold line! Let me fix Block 2 as well!
const block2OldRegex = /<div key=\{i\} style=\{\{\s*background: 'var\(--color-white\)',\s*padding: '40px',\s*borderRadius: '0',\s*position: 'relative',\s*overflow: 'hidden',\s*border: '1px solid var\(--color-border\)',\s*transition: 'all 0\.4s ease',\s*height: '100%',\s*display: 'flex',\s*flexDirection: 'column'\s*\}\} className="service-card group">\s*<div style=\{\{ position: 'absolute', top: 0, left: 0, width: '4px', height: '0%', background: 'var\(--color-gold\)', transition: 'height 0\.4s ease' \}\} className="service-accent-line"><\/div>\s*<div style=\{\{ fontSize: '20px', color: 'var\(--color-deep-blue\)', marginBottom: '12px', fontWeight: 600 \}\}>\{item\.title\}<\/div>\s*<p style=\{\{ color: 'var\(--color-text-secondary\)', fontSize: '15px', lineHeight: 1\.6, margin: 0 \}\}>\{item\.desc\}<\/p>\s*<\/div>/g;

const block2New = `<div key={i} className="card service-card" style={{ 
                background: 'var(--color-white)',
                padding: '30px',
                borderRadius: '0',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-primary)',
                transition: 'all 0.3s',
                height: '100%',
                minHeight: '160px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3 }}>{item.title}</h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>{item.desc}</p>
              </div>`;

sochContent = sochContent.replace(block2OldRegex, block2New);

fs.writeFileSync(sochFile, sochContent);
console.log('Fixed SOCH Directions styling');
