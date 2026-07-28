const fs = require('fs');
let content = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', 'utf8');
const lines = content.split(/\r?\n/);

const start3 = lines.findIndex(l => l.includes('+7 (910) 350-31-11 • Перезвоним в течение 15 минут в рабочее время')) - 1;
if(start3 > 0) {
    lines.splice(start3, 3,
      '            <a href="#form" className="btn btn-primary" style={{ padding: \'16px 32px\', fontSize: \'16px\' }}>',
      '              Описать ситуацию',
      '            </a>'
    );
    const start4 = lines.findIndex(l => l.includes('8. Другие вопросы и дистанционная помощь'));
    lines.splice(start4 - 1, 0,
      '        {/* Разделитель */}',
      '        <div className="container" style={{ marginTop: \'60px\', marginBottom: \'20px\' }}>',
      '          <div style={{ height: \'1px\', background: \'var(--color-border)\', width: \'100%\' }}></div>',
      '        </div>',
      ''
    );
    // Change marginTop of the remote help block to 40px
    const start5 = lines.findIndex(l => l.includes('8. Другие вопросы и дистанционная помощь')) + 1;
    if(lines[start5].includes('marginTop: \'80px\'')) {
        lines[start5] = lines[start5].replace('80px', '40px');
    }
    console.log('Restored Описать ситуацию and added hr');
    fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', lines.join('\n'));
} else {
    console.log('Target not found for start3');
}
