const fs = require('fs');
let code = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', 'utf8');

const urgentRegex = /<h2 className="section-title text-center" style=\{\{ marginBottom: '24px', textAlign: 'center' \}\}>\s*Если помощь нужна прямо сейчас\s*<\/h2>\s*<p style=\{\{ textAlign: 'center', color: 'var\(--color-text-secondary\)', fontSize: '16px', maxWidth: '700px', margin: '0 auto 40px auto', lineHeight: 1\.6 \}\}>\s*Ниже — типичные ситуации, в которых откладывать обращение за юридической помощью опасно\. Чем раньше подключится профильный специалист, тем больше возможностей для защиты ваших прав\.\s*<\/p>/;

if (code.match(urgentRegex)) {
    const newUrgent = `<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '40px' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '16px' }}>
              Если помощь нужна прямо сейчас
            </h2>
            <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)', marginBottom: '16px' }}></div>
            <p style={{ textAlign: 'left', color: 'var(--color-text-secondary)', fontSize: '16px', maxWidth: '700px', margin: '0', lineHeight: 1.6 }}>
              Ниже — типичные ситуации, в которых откладывать обращение за юридической помощью опасно. Чем раньше подключится профильный специалист, тем больше возможностей для защиты ваших прав.
            </p>
          </div>`;
    code = code.replace(urgentRegex, newUrgent);
    fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', code);
    console.log('Fixed Urgent align!');
} else {
    console.log('Regex failed to match!');
}
