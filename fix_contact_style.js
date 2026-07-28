const fs = require('fs');

let page = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', 'utf8');

// The original block
const originalBlock = `<div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: '#E5C494' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>Связаться с нами</span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                Получите первичную оценку ситуации
              </h2>`;

// The new block with dark blue dash and gold separator under title
const newBlock = `<div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>Связаться с нами</span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                Получите первичную оценку ситуации
              </h2>
              <div style={{ width: '60px', height: '3px', backgroundColor: '#E5C494', marginBottom: '24px' }}></div>`;

if (page.includes(originalBlock)) {
    page = page.replace(originalBlock, newBlock);
    fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', page, 'utf8');
    
    // Also update the backup just to keep it in sync!
    if (fs.existsSync('backups_frozen/page_frozen.tsx.bak')) {
        let backup = fs.readFileSync('backups_frozen/page_frozen.tsx.bak', 'utf8');
        backup = backup.replace(originalBlock, newBlock);
        fs.writeFileSync('backups_frozen/page_frozen.tsx.bak', backup, 'utf8');
    }
    
    console.log('Fixed Contact block styling');
} else {
    console.log('Error: Could not find exact string in page.tsx');
}
