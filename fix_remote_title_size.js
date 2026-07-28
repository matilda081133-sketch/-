const fs = require('fs');

let page = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', 'utf8');

// Fix title size
page = page.replace(
    '<h2 className="section-title" style={{ fontSize: \'32px\', marginBottom: \'16px\', textAlign: \'left\' }}>',
    '<h2 className="section-title" style={{ marginBottom: \'16px\', textAlign: \'left\' }}>'
);

fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', page, 'utf8');
console.log('Fixed remote title size');

// Update backup
if (fs.existsSync('backups_frozen/page_frozen.tsx.bak')) {
    let backup = fs.readFileSync('backups_frozen/page_frozen.tsx.bak', 'utf8');
    backup = backup.replace(
        '<h2 className="section-title" style={{ fontSize: \'32px\', marginBottom: \'16px\', textAlign: \'left\' }}>',
        '<h2 className="section-title" style={{ marginBottom: \'16px\', textAlign: \'left\' }}>'
    );
    fs.writeFileSync('backups_frozen/page_frozen.tsx.bak', backup, 'utf8');
}
