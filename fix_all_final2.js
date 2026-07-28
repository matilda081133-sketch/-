const fs = require('fs');

function fixHeroAndPolish() {
  const filePage = 'src/app/grazhdanam/voennyj-yurist/page.tsx';
  let content = fs.readFileSync(filePage, 'utf8');

  // 1. Remove textDecoration from Описать ситуацию buttons
  content = content.replace(
    /<a href="#form" className="btn btn-light" style=\{\{\ display:\ 'inline-block'\ \}\}>Описать ситуацию<\/a>/g,
    '<a href="#form" className="btn btn-light" style={{ display: "inline-block", textDecoration: "none" }}>Описать ситуацию</a>'
  );
  content = content.replace(
    /className="btn btn-light" style=\{\{\ display:\ 'inline-block'\ \}\}>Описать ситуацию<\/a>/g,
    'className="btn btn-light" style={{ display: "inline-block", textDecoration: "none" }}>Описать ситуацию</a>'
  );
  content = content.replace(
    /<a href="#form" className="btn btn-primary" style=\{\{\ textDecoration:\ 'none'\ \}\}>Описать ситуацию<\/a>/g,
    '<a href="#form" className="btn btn-primary" style={{ textDecoration: "none" }}>Описать ситуацию</a>'
  );
  // Just blanket replace any Описать ситуацию button
  content = content.replace(/style=\{\{\ display:\ 'inline-block'\ \}\}>Описать ситуацию/g, 'style={{ display: "inline-block", textDecoration: "none" }}>Описать ситуацию');

  console.log('Fixed button underlines');

  // 2. Make Remote Help gold brighter (#e6c898)
  if (content.includes('Что можно сделать дистанционно')) {
    const startIdx = content.indexOf('Что можно сделать дистанционно');
    const sectionStart = content.lastIndexOf('<div style={{ background: \\'var(--color-deep-blue)\\'', startIdx);
    const sectionEnd = content.indexOf('</div>\\n          </div>', startIdx);
    if (sectionStart !== -1 && sectionEnd !== -1) {
      const block = content.substring(sectionStart, sectionEnd);
      const newBlock = block.replace(/var\\(--color-gold\\)/g, '#E6C898');
      content = content.substring(0, sectionStart) + newBlock + content.substring(sectionEnd);
      console.log('Fixed remote help gold color');
    } else {
      const fallbackRegex = /<h3 style=\{\{\ fontSize:\ '24px',\ fontFamily:\ 'var\(--font-serif\)',\ color:\ 'var\(--color-gold\)'/g;
      if (content.match(fallbackRegex)) {
        content = content.replace(/color:\ 'var\(--color-gold\)'/g, (match, offset) => {
          if (offset > startIdx - 500 && offset < startIdx + 1000) {
            return "color: '#E6C898'";
          }
          return match;
        });
        console.log('Fixed remote help gold color (fallback)');
      }
    }
  }

  // 3. 4-line break for Specialist description
  const oldSpecDesc = 'Подключается к защите на стадии проверки, предварительного расследования и судебного разбирательства, участвует в процессуальных действиях и сопровождает доверителя при взаимодействии со следственными органами.';
  const newSpecDesc = 'Подключается к защите на стадии проверки,<br />предварительного расследования и судебного разбирательства,<br />участвует в процессуальных действиях и сопровождает<br />доверителя при взаимодействии со следственными органами.';
  if (content.includes(oldSpecDesc)) {
    content = content.replace(oldSpecDesc, newSpecDesc);
    console.log('Fixed Specialist description 4-line break');
  } else {
    console.log('Could not find Specialist description');
  }

  fs.writeFileSync(filePage, content);

  // 4. Add overlay to MilitaryHero (the script from earlier)
  const fileHero = 'src/components/MilitaryHero.tsx';
  let heroContent = fs.readFileSync(fileHero, 'utf8');
  const imgBlockStart = '{/* Decorative Elements */}';
  const imgBlockEnd = '<div style={{ position: \\'absolute\\', bottom: \\'0\\', left: \\'0\\', width: \\'100%\\', height: \\'4px\\', background: \\'var(--color-primary)\\' }}></div>';
  const startIndex = heroContent.indexOf(imgBlockStart);
  const endIndex = heroContent.indexOf(imgBlockEnd, startIndex);

  if (startIndex !== -1 && endIndex !== -1) {
    const replacement = \`{/* Decorative Elements */}
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(23, 50, 77, 0) 50%, rgba(23, 50, 77, 0.4) 100%)' }}></div>
                  
                  {/* Mini Card Overlay */}
                  <div style={{ 
                    position: 'absolute', 
                    top: '20px', 
                    left: '20px', 
                    background: 'rgba(255, 255, 255, 0.95)', 
                    backdropFilter: 'blur(10px)',
                    padding: '16px 24px', 
                    zIndex: 2,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                    borderLeft: '3px solid var(--color-gold)',
                    maxWidth: 'calc(100% - 40px)'
                  }}>
                    <div style={{ fontSize: '18px', color: 'var(--color-deep-blue)', fontWeight: 600, marginBottom: '4px', fontFamily: 'var(--font-serif)' }}>Дмитрий Сергеевич Конопкин</div>
                    <div style={{ fontSize: '13px', color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, lineHeight: 1.4 }}>Адвокат, ведущий юрист военного направления</div>
                  </div>
                  
                  <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', height: '4px', background: 'var(--color-gold)' }}></div>\`;
    heroContent = heroContent.substring(0, startIndex) + replacement + heroContent.substring(endIndex + imgBlockEnd.length);
    console.log('Added mini card to MilitaryHero');
    fs.writeFileSync(fileHero, heroContent);
  } else {
    console.log('Could not find image block in MilitaryHero. Might be already added.');
  }
}

fixHeroAndPolish();
