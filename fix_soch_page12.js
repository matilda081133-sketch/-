const fs = require('fs');
let page = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', 'utf8');

const regex = /<div style={{ background: 'var\(--color-white\)', borderRadius: '4px', borderTop: '4px solid var\(--color-primary\)', boxShadow: '0 10px 30px rgba\(0,0,0,0\.02\)', padding: '40px', height: '100%' }}>\s*<h3.*?Освобождение от ответственности<\/h3>\s*<p.*?>\s*Примечание к статье 337 УК РФ допускает освобождение от уголовной ответственности лица, впервые совершившего деяние \(ч\. 1–4\), если отсутствие стало следствием стечения тяжёлых обстоятельств\. Это не автоматическое основание: необходимо установить применимую часть статьи и документально подтвердить фактические обстоятельства\.\s*<\/p>\s*<\/div>/;

const newCard = `<div style={{ background: 'var(--color-deep-blue)', padding: '40px', borderRadius: '4px', color: 'var(--color-white)', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h3 style={{ fontSize: '24px', color: 'var(--color-gold)', marginBottom: '24px', fontFamily: 'var(--font-serif)' }}>Освобождение от ответственности</h3>
              <p style={{ fontSize: '16px', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', marginBottom: '24px' }}>
                Примечание к статье 337 УК РФ допускает освобождение от уголовной ответственности лица, впервые совершившего деяние (ч. 1–4), если отсутствие стало следствием стечения тяжёлых обстоятельств.
              </p>
              <div style={{ background: 'rgba(255,255,255,0.1)', padding: '16px', borderLeft: '4px solid var(--color-gold)', fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, marginTop: 'auto' }}>
                Это не автоматическое основание: необходимо установить применимую часть статьи и документально подтвердить фактические обстоятельства.
              </div>
            </div>`;

if (page.match(regex)) {
    page = page.replace(regex, newCard);
    fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', page, 'utf8');
    console.log('Successfully styled Освобождение от ответственности');
} else {
    console.log('Regex did not match!');
}
