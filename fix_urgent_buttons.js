const fs = require('fs');
let content = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', 'utf8');
const lines = content.split(/\r?\n/);

const startUrgent = lines.findIndex(l => l.includes('16px 32px') && l.includes('Позвонить адвокату'));
if (startUrgent !== -1) {
    // Replace the wrapper div too
    lines[startUrgent - 1] = '          <div style={{ marginTop: \'40px\', display: \'flex\', flexWrap: \'wrap\', alignItems: \'center\', gap: \'20px\', justifyContent: \'center\' }}>';
    lines[startUrgent + 1] = '            <a href="#form" className="btn btn-primary" style={{ padding: \'16px 32px\', fontSize: \'16px\' }}>Описать ситуацию</a>';
    lines[startUrgent + 2] = '          </div>';
    console.log('Fixed urgent block buttons');
}

const remoteBtn = lines.findIndex(l => l.includes('Описать ситуацию') && l.includes('marginTop: \'auto\''));
if (remoteBtn !== -1) {
    lines[remoteBtn] = '';
    lines[remoteBtn - 1] = '';
    lines[remoteBtn + 1] = '';
    console.log('Removed button from remote help');
}

fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', lines.join('\n'));
