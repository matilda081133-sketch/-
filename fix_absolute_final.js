const fs = require('fs');

// 1. Fix Remote Help Colors in page.tsx
let pageCode = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', 'utf8');

// Title should be Gold
pageCode = pageCode.replace(
    /color: 'var\(--color-white\)', marginBottom: '24px', position: 'relative', zIndex: 1 \}\}>Что можно сделать дистанционно/g,
    `color: '#E5C494', marginBottom: '24px', position: 'relative', zIndex: 1 }}>Что можно сделать дистанционно`
);

// UL Text should be White
pageCode = pageCode.replace(
    /ul style=\{\{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', color: '#E5C494'/g,
    `ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', color: 'rgba(255,255,255,0.9)'`
);

// Numbers should be Gold (if they are not already)
// In pageCode they might be <strong>1.</strong> or <strong style={{ color: '#E5C494' }}>1.</strong>
// Let's just blindly replace the plain ones if they exist
pageCode = pageCode.replace(/<strong>1\.<\/strong>/g, `<strong style={{ color: '#E5C494' }}>1.</strong>`);
pageCode = pageCode.replace(/<strong>2\.<\/strong>/g, `<strong style={{ color: '#E5C494' }}>2.</strong>`);
pageCode = pageCode.replace(/<strong>3\.<\/strong>/g, `<strong style={{ color: '#E5C494' }}>3.</strong>`);
pageCode = pageCode.replace(/<strong>4\.<\/strong>/g, `<strong style={{ color: '#E5C494' }}>4.</strong>`);

fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', pageCode);
console.log('Fixed remote colors in page.tsx');


// 2. Fix Shadows in CasesBlock.tsx
let casesCode = fs.readFileSync('src/components/CasesBlock.tsx', 'utf8');

// We need to inject boxShadow into the case card inline style
const oldCardStyle = `            <div key={idx} className="case-card group" style={{ 
              padding: '40px', 
              border: '1px solid var(--color-border)', 
              borderRadius: '0', 
              display: 'flex', 
              flexDirection: 'column', 
              background: 'var(--color-white)', 
              position: 'relative',
              overflow: 'hidden',
              height: '100%'
            }}>`;

const newCardStyle = `            <div key={idx} className="case-card group" style={{ 
              padding: '40px', 
              border: '1px solid var(--color-border)', 
              borderRadius: '0', 
              display: 'flex', 
              flexDirection: 'column', 
              background: 'var(--color-white)', 
              position: 'relative',
              overflow: 'hidden',
              height: '100%',
              boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
            }}>`;

if (casesCode.includes(oldCardStyle)) {
    casesCode = casesCode.replace(oldCardStyle, newCardStyle);
    console.log('Fixed shadows in CasesBlock.tsx');
} else {
    console.log('Could not find oldCardStyle in CasesBlock.tsx!');
}

fs.writeFileSync('src/components/CasesBlock.tsx', casesCode);
