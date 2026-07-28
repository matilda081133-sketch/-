const fs = require('fs');

function applyFixes() {
  // 1. MilitaryHero.tsx Overlay
  const heroFile = 'src/components/MilitaryHero.tsx';
  let heroContent = fs.readFileSync(heroFile, 'utf8');
  
  const imgRegex = /<img src=\{imageUrl\}\ alt=\{imageName \|\| title\?\.toString\(\) \|\| 'Ő>\?''\}\ style=\{\{\ width:\ '100%',\ height:\ '100%',\ objectFit:\ 'cover',\ display:\ 'block'\ \}\}\ className="hero-photo-img"\ \/>/g;
  
  if (heroContent.match(imgRegex)) {
    heroContent = heroContent.replace(imgRegex, `<>
                  <img src={imageUrl} alt={imageName || title?.toString() || 'Юрист'} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} className="hero-photo-img" />
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
                  </>`);
    console.log('Added overlay to MilitaryHero');
  } else {
    // Try a more relaxed regex for the img tag
    const relaxedImgRegex = /<img\ src=\{imageUrl\}\ alt=\{imageName[^\/]+\/>/g;
    if (heroContent.match(relaxedImgRegex)) {
      heroContent = heroContent.replace(relaxedImgRegex, match => {
        return `<>
                  ${match}
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
                  </>`;
      });
      console.log('Added overlay to MilitaryHero (relaxed match)');
    } else {
      console.log('Failed to find image in MilitaryHero');
    }
  }
  fs.writeFileSync(heroFile, heroContent);

  // 2. page.tsx fixes
  const pageFile = 'src/app/grazhdanam/voennyj-yurist/page.tsx';
  let pageContent = fs.readFileSync(pageFile, 'utf8');

  // 2a. Open form delicate border
  const borderRegex = /border:\ '1px solid rgba\(255, 255, 255, 0\.5\)'/g;
  if (pageContent.match(borderRegex)) {
    pageContent = pageContent.replace(borderRegex, "border: '1px solid rgba(23, 50, 77, 0.15)'");
    console.log('Fixed open form delicate border');
  } else {
    console.log('Could not find open form border');
  }

  // 2b. Описать ситуацию underline removal (add !important just in case)
  const underlineRegex1 = /textDecoration:\ "none"/g;
  pageContent = pageContent.replace(underlineRegex1, 'textDecoration: "none !important", border: "none"');
  
  // Also check if there's any stray <a> text decoration
  pageContent = pageContent.replace(/<a href="#form" className="btn btn-primary">Описать ситуацию<\/a>/g, '<a href="#form" className="btn btn-primary" style={{ textDecoration: "none !important", border: "none" }}>Описать ситуацию</a>');
  
  console.log('Fixed button underlines with !important');
  fs.writeFileSync(pageFile, pageContent);
}

applyFixes();
