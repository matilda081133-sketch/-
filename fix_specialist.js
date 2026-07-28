const fs = require('fs');
const file = 'src/components/SpecialistBlock.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Add the mini-card on the image
const imageEndRegex = /\{\s*imageUrl\ \?\ \(\s*<img\ src=\{imageUrl\}\ alt=\{name\}/;
const newImageStart = `{imageUrl ? (
                <>
                <img src={imageUrl} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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
                  <div style={{ fontSize: '20px', color: 'var(--color-deep-blue)', fontWeight: 500, marginBottom: '6px', fontFamily: 'var(--font-serif)' }}>{name}</div>
                  <div style={{ fontSize: '12px', color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, lineHeight: 1.4 }}>{position}</div>
                </div>
                </>
              ) : (`;

// 2. Remove the name and position from the right column
const rightColumnRegex = /<h3\ style=\{\{\s*fontSize:\ '32px',\s*color:\ 'var\(--color-deep-blue\)',\s*marginBottom:\ '12px',\s*fontFamily:\ 'var\(--font-serif\)'\ \}\}>\s*\{name\}\s*<\/h3>\s*<div\ style=\{\{\s*color:\ 'var\(--color-primary\)',\s*fontWeight:\ 600,\s*fontSize:\ '16px',\s*marginBottom:\ '32px',\s*textTransform:\ 'uppercase',\s*letterSpacing:\ '0\.05em'\ \}\}>\s*\{position\}\s*<\/div>/;

// First check if we can find both
if (content.match(imageEndRegex)) {
  // We don't want to double replace, so we just use the original exact string.
  const oldImg = `{imageUrl ? (
                <img src={imageUrl} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              ) : (`;
  
  if (content.includes(oldImg)) {
    content = content.replace(oldImg, newImageStart);
    console.log('Added mini card to image');
  } else {
    console.log('Could not find exact oldImg string');
  }
} else {
  console.log('Could not find imageEndRegex');
}

if (content.match(rightColumnRegex)) {
  content = content.replace(rightColumnRegex, '');
  console.log('Removed name and position from right column');
} else {
  console.log('Could not find rightColumnRegex');
}

fs.writeFileSync(file, content);
