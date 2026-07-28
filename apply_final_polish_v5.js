const fs = require('fs');

// 1. Fix CasesBlock persistent shadow
let cases = fs.readFileSync('src/components/CasesBlock.tsx', 'utf8');
cases = cases.replace(
    'boxShadow: \'0 20px 40px rgba(23, 50, 77, 0.08)\'',
    'boxShadow: \'0 4px 10px rgba(0,0,0,0.12)\'' // just in case
);
cases = cases.replace(
    'boxShadow: \'0 4px 10px rgba(0,0,0,0.12)\'',
    'boxShadow: \'0 4px 10px rgba(0,0,0,0.12)\''
);
// Wait, `boxShadow` is NOT in the inline style for .case-card! 
// Let's check CasesBlock.tsx line 68
if (!cases.includes('boxShadow: \'0 4px 10px rgba(0,0,0,0.12)\'')) {
    cases = cases.replace(
        'background: \'var(--color-white)\',',
        'background: \'var(--color-white)\',\n              boxShadow: \'0 4px 10px rgba(0,0,0,0.12)\','
    );
}
fs.writeFileSync('src/components/CasesBlock.tsx', cases, 'utf8');

// 2. Remove gold separator in Contact block
let page = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', 'utf8');
page = page.replace(
    '<div style={{ width: \'60px\', height: \'3px\', backgroundColor: \'#E5C494\', marginBottom: \'24px\' }}></div>',
    ''
);
fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', page, 'utf8');

// Also update the backup just to keep it in sync!
if (fs.existsSync('backups_frozen/page_frozen.tsx.bak')) {
    let backup = fs.readFileSync('backups_frozen/page_frozen.tsx.bak', 'utf8');
    backup = backup.replace('<div style={{ width: \'60px\', height: \'3px\', backgroundColor: \'#E5C494\', marginBottom: \'24px\' }}></div>', '');
    fs.writeFileSync('backups_frozen/page_frozen.tsx.bak', backup, 'utf8');
}

// 3. Center titles in PricingBlock
let pricing = fs.readFileSync('src/components/PricingBlock.tsx', 'utf8');
pricing = pricing.replace(
    '<h3 style={{ fontSize: \'24px\', margin: \'0 0 8px 0\', color: \'inherit\' }}>{tier.title}</h3>',
    '<h3 style={{ fontSize: \'24px\', margin: \'0 0 8px 0\', color: \'inherit\', textAlign: \'center\' }}>{tier.title}</h3>'
);
pricing = pricing.replace(
    '<p style={{ fontSize: \'15px\', opacity: 0.8, margin: \'0 0 30px 0\', minHeight: \'40px\' }}>{tier.subtitle}</p>',
    '<p style={{ fontSize: \'15px\', opacity: 0.8, margin: \'0 0 30px 0\', minHeight: \'40px\', textAlign: \'center\' }}>{tier.subtitle}</p>'
);
pricing = pricing.replace(
    '<div style={{ fontSize: \'32px\', fontFamily: \'var(--font-serif)\', fontWeight: \'bold\', margin: \'0 0 30px 0\', paddingBottom: \'30px\' }}>',
    '<div style={{ fontSize: \'32px\', fontFamily: \'var(--font-serif)\', fontWeight: \'bold\', margin: \'0 0 30px 0\', paddingBottom: \'30px\', textAlign: \'center\' }}>'
);
// Also center the features list wrapper if needed? No, the user explicitly said "заголовки" (titles). 
// Let's leave features aligned left.
fs.writeFileSync('src/components/PricingBlock.tsx', pricing, 'utf8');

console.log('Applied all 3 fixes');
