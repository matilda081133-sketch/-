const fs = require('fs');
let page = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', 'utf8');

const regexContainer = /<div style={{ background: 'var\(--color-deep-blue\)', padding: '40px', borderRadius: '4px', color: 'var\(--color-white\)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignSelf: 'flex-start' }}>\s*<h3 style={{ fontSize: '24px', color: '#D2B282', marginBottom: '24px', fontFamily: 'var\(--font-serif\)' }}>Что сообщить при первом обращении<\/h3>\s*<p style={{ fontSize: '16px', lineHeight: 1\.6, color: 'rgba\(255,255,255,0\.9\)', marginBottom: '24px' }}>\s*Где сейчас находится военнослужащий; как долго он отсутствует; служит по призыву или по контракту; известно ли о розыске или возбужденном деле; вызывали ли его для объяснений или на допрос; давал ли он объяснения; какие документы сохранились\. Если часть сведений неизвестна, это не препятствует обращению\.\s*<\/p>\s*<div style={{ background: 'rgba\(255,255,255,0\.1\)', padding: '16px', borderLeft: '4px solid var\(--color-gold\)', fontSize: '14px', color: 'rgba\(255,255,255,0\.7\)', lineHeight: 1\.5 }}>\s*Эти сведения нужны для предварительной оценки стадии и возможного формата помощи\. Правовая позиция формируется после изучения документов и обстоятельств дела\.\s*<\/div>\s*<\/div>/;

const newCard = `<div style={{ background: 'var(--color-deep-blue)', padding: '40px', borderRadius: '4px', color: 'var(--color-white)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignSelf: 'flex-start', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, opacity: 0.1, transform: 'translate(20%, -20%)' }}>
                <svg width="150" height="150" viewBox="0 0 24 24" fill="var(--color-white)">
                  <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 style={{ fontSize: '24px', color: '#D2B282', marginBottom: '24px', fontFamily: 'var(--font-serif)', position: 'relative', zIndex: 1 }}>Что сообщить при первом обращении</h3>
              <p style={{ fontSize: '16px', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', marginBottom: '24px', position: 'relative', zIndex: 1 }}>
                Где сейчас находится военнослужащий; как долго он отсутствует; служит по призыву или по контракту; известно ли о розыске или возбужденном деле; вызывали ли его для объяснений или на допрос; давал ли он объяснения; какие документы сохранились. Если часть сведений неизвестна, это не препятствует обращению.
              </p>
              <div style={{ background: 'rgba(255,255,255,0.1)', padding: '16px', borderLeft: '4px solid var(--color-gold)', fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, position: 'relative', zIndex: 1 }}>
                Эти сведения нужны для предварительной оценки стадии и возможного формата помощи. Правовая позиция формируется после изучения документов и обстоятельств дела.
              </div>
            </div>`;

if (page.match(regexContainer)) {
    page = page.replace(regexContainer, newCard);
    fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', page, 'utf8');
    console.log('Successfully injected background creative into Что сообщить при первом обращении card');
} else {
    console.log('Regex did not match!');
}
