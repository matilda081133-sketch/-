const fs = require('fs');

const heroFile = 'src/components/MilitaryHero.tsx';
let content = fs.readFileSync(heroFile, 'utf8');

// Fix 1: overflow hidden -> visible for the photo container
const oldPhotoContainer = `aspectRatio: '3/4', 
                backgroundColor: 'var(--color-white)', 
                overflow: 'hidden',
                display: 'flex',`;

const newPhotoContainer = `aspectRatio: '3/4', 
                backgroundColor: 'var(--color-white)', 
                overflow: 'visible',
                display: 'flex',`;

content = content.replace(oldPhotoContainer, newPhotoContainer);

// If it fails with exact string match due to line endings, let's use a safer replace
if (content.includes("overflow: 'hidden',") && content.includes("hero-photo-hover")) {
  const parts = content.split('hero-photo-hover');
  if (parts.length > 1) {
    parts[0] = parts[0].replace(/overflow:\s*'hidden',/g, "overflow: 'visible',");
    content = parts.join('hero-photo-hover');
  }
}

// Fix 2: Make the overlay full width
// Old style: bottom: '-20px', left: '20px', background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', padding: '16px 24px', zIndex: 2, boxShadow: '0 10px 30px rgba(0,0,0,0.08)', borderLeft: '3px solid var(--color-gold)', maxWidth: 'calc(100% - 40px)'
const oldOverlayStyleRegex = /bottom:\ '-20px',\s*left:\ '20px',\s*background:\ 'rgba\(255,\ 255,\ 255,\ 0\.95\)',\s*backdropFilter:\ 'blur\(10px\)',\s*padding:\ '16px\ 24px',\s*zIndex:\ 2,\s*boxShadow:\ '0\ 10px\ 30px\ rgba\(0,0,0,0\.08\)',\s*borderLeft:\ '3px\ solid\ var\(--color-gold\)',\s*maxWidth:\ 'calc\(100%\ -\ 40px\)'/g;

content = content.replace(oldOverlayStyleRegex, `bottom: '-20px', left: '0', width: '100%', background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', padding: '16px 24px', zIndex: 2, boxShadow: '0 10px 30px rgba(0,0,0,0.08)', borderLeft: '4px solid var(--color-gold)'`);

fs.writeFileSync(heroFile, content);
console.log('Fixed overlay width and container overflow');
