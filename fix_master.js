const fs = require('fs');

function applyAllFixes() {
  // 1. MilitaryHero.tsx - move overlay down
  const heroFile = 'src/components/MilitaryHero.tsx';
  let heroContent = fs.readFileSync(heroFile, 'utf8');
  heroContent = heroContent.replace(/top:\ '20px',/g, "bottom: '-20px',");
  fs.writeFileSync(heroFile, heroContent);
  console.log('Moved MilitaryHero overlay to the bottom');

  // 2. SpecialistBlock.tsx - restore gradient
  const specFile = 'src/components/SpecialistBlock.tsx';
  let specContent = fs.readFileSync(specFile, 'utf8');
  specContent = specContent.replace(/background:\ 'var\(--color-cream\)'/g, "background: 'var(--gradient-cream)'");
  fs.writeFileSync(specFile, specContent);
  console.log('Restored SpecialistBlock gradient');

  // 3. SOCH page fixes
  const sochFile = 'src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx';
  let soch = fs.readFileSync(sochFile, 'utf8');

  // 3.1. "В каких ситуациях нужна помощь адвоката"
  soch = soch.replace(
    /<h2 className="section-title" style=\{\{\ textAlign:\ 'center',\ marginBottom:\ '16px'\ \}\}>В каких ситуациях нужна помощь адвоката<\/h2>/g,
    `<div style={{ textAlign: 'left', marginBottom: '40px' }}><h2 className="section-title" style={{ marginBottom: '16px', display: 'inline-block' }}>В каких ситуациях нужна помощь адвоката</h2><div style={{ width: '60px', height: '3px', backgroundColor: 'var(--color-gold)', margin: '0' }}></div></div>`
  );

  // 3.2. "Ответственность за самовольное оставление части"
  soch = soch.replace(
    /<h2 className="section-title" style=\{\{\ textAlign:\ 'center'\ \}\}>Ответственность за самовольное оставление части<\/h2>/g,
    `<div style={{ textAlign: 'left', marginBottom: '40px' }}><h2 className="section-title" style={{ marginBottom: '16px', display: 'inline-block' }}>Ответственность за самовольное оставление части</h2><div style={{ width: '60px', height: '3px', backgroundColor: 'var(--color-gold)', margin: '0' }}></div></div>`
  );

  // 3.3. Remove textAlign: 'center' from paragraph texts for those blocks if they exist.
  // We'll just replace 'textAlign: \'center\'' with 'textAlign: \'left\'' everywhere in SOCH except for headers that we intentionally want centered.
  // Actually, wait! There are other things that might need to be centered. Let's specifically target the paragraphs.
  soch = soch.replace(/<p style=\{\{\ textAlign:\ 'center',\ color:\ 'var\(--color-text-secondary\)'/g, '<p style={{ textAlign: \'left\', color: \'var(--color-text-secondary)\'');

  // 3.4. "Как адвокат выстраивает защиту"
  soch = soch.replace(
    /<h2 className="section-title" style=\{\{\ textAlign:\ 'center',\ marginBottom:\ '16px'\ \}\}>Как адвокат выстраивает защиту<\/h2>/g,
    `<div style={{ textAlign: 'left', marginBottom: '40px' }}><h2 className="section-title" style={{ marginBottom: '16px', display: 'inline-block' }}>Как адвокат выстраивает защиту</h2><div style={{ width: '60px', height: '3px', backgroundColor: 'var(--color-gold)', margin: '0' }}></div></div>`
  );

  // 3.5. "Что сообщить при первом обращении"
  const msgHeaderRegex = /<h3 style=\{\{\ fontSize:\ '24px',\ fontFamily:\ 'var\(--font-serif\)',\ color:\ 'var\(--color-white\)',\ marginBottom:\ '24px',\ position:\ 'relative',\ zIndex:\ 1\ \}\}>Что сообщить при первом обращении<\/h3>/g;
  soch = soch.replace(
    msgHeaderRegex, 
    `<h3 style={{ fontSize: '24px', fontFamily: 'var(--font-serif)', color: '#E6C898', marginBottom: '24px', position: 'relative', zIndex: 1 }}>Что сообщить при первом обращении</h3>`
  );

  // 3.6. Move "Чем может помочь адвокат" down
  const helpCardRegex = /<div style=\{\{\ background:\ 'var\(--color-cream\)',\ padding:\ '40px',\ borderLeft:\ '4px solid var\(--color-gold\)',\ position:\ 'relative'\ \}\}>/g;
  soch = soch.replace(
    helpCardRegex, 
    `<div style={{ background: 'var(--color-cream)', padding: '40px', borderLeft: '4px solid var(--color-gold)', position: 'relative', marginTop: '40px' }}>`
  );

  // 3.7. Directions Block ("Другие услуги военного адвоката")
  const oldDirectionsStart = content => content.indexOf('{/* Блок 11. Связанные услуги */}');
  const oldDirectionsEnd = content => content.indexOf('{/* Блок 12. Финальная форма */}');
  
  if (oldDirectionsStart(soch) !== -1 && oldDirectionsEnd(soch) !== -1) {
    const startIdx = oldDirectionsStart(soch);
    const endIdx = oldDirectionsEnd(soch);
    
    const newDirectionsHTML = `{/* Блок 11. Связанные услуги */}
      <section className="section bg-white" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
        <div className="container">
          <div style={{ textAlign: 'left', marginBottom: '40px' }}><h2 className="section-title" style={{ marginBottom: '16px', display: 'inline-block' }}>Другие услуги военного адвоката</h2><div style={{ width: '60px', height: '3px', backgroundColor: 'var(--color-gold)', margin: '0' }}></div></div>
          
          <div className="grid grid-3" style={{ gap: '30px' }}>
            <a href="/grazhdanam/voennyj-yurist/" data-analytics="military_service_click" style={{ textDecoration: 'none', display: 'block' }}>
              <div 
                className="card service-card" 
                style={{ 
                  height: '100%', 
                  minHeight: '160px',
                  padding: '30px', 
                  background: 'var(--color-white)', 
                  border: '1px solid var(--color-border)',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'all 0.3s',
                  position: 'relative',
                  borderTop: '3px solid var(--color-primary)'
                }}
              >
                <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3 }}>
                  Военный адвокат
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  Защита прав военнослужащих
                </p>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, transition: 'transform 0.3s' }}>
                  Подробнее 
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.3s' }}>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      `;
      
    soch = soch.substring(0, startIdx) + newDirectionsHTML + soch.substring(endIdx);
  }

  // 3.8. Double check "Освобождение от ответственности" and "Чем СОЧ отличается от дезертирства"
  // They are likely h3 tags. Let's make sure they aren't centered.
  soch = soch.replace(/<h3 style=\{\{\ textAlign:\ 'center'/g, '<h3 style={{ textAlign: \'left\'');
  
  fs.writeFileSync(sochFile, soch);
  console.log('Fixed SOCH page');
}

applyAllFixes();
