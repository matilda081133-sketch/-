const fs = require('fs');

let page = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', 'utf8');

const replacement = `      {/* 8. Другие вопросы и дистанционная помощь */}
      <section className="section bg-cream" id="remote">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h2 className="section-title" style={{ fontSize: '32px', marginBottom: '16px', textAlign: 'left' }}>
                Если вашей ситуации <br/>нет в списке
              </h2>
              <div style={{ width: '40px', height: '2px', backgroundColor: '#E5C494', marginBottom: '24px' }}></div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '12px', textAlign: 'left' }}>
                Необязательно самостоятельно определять вид услуги.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '32px', textAlign: 'left' }}>
                Опишите обстоятельства — мы разберём ситуацию,<br/>уточним необходимые документы и определим,<br/>какой специалист должен подключиться.
              </p>
              <div style={{ marginTop: 'auto', textAlign: 'left' }}>
                <a href="#form" className="btn btn-primary" style={{ textDecoration: 'none', border: 0 }}>Описать ситуацию</a>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
              <div style={{ background: 'var(--color-primary)', padding: '40px', borderRadius: '4px', color: 'var(--color-white)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, opacity: 0.1, transform: 'translate(20%, -20%)' }}>
                  <svg width="150" height="150" viewBox="0 0 24 24" fill="var(--color-white)">
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <h3 style={{ fontSize: '24px', fontFamily: 'var(--font-serif)', color: '#E5C494', marginBottom: '24px', position: 'relative', zIndex: 1 }}>
                  Что можно сделать дистанционно
                </h3>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', color: 'rgba(255,255,255,0.9)', fontSize: '16px', lineHeight: 1.7, fontWeight: 500 }}>
                    <li style={{ marginBottom: '12px' }}><strong style={{ color: '#E5C494' }}>1.</strong> Провести первичную консультацию</li>
                    <li style={{ marginBottom: '12px' }}><strong style={{ color: '#E5C494' }}>2.</strong> Изучить документы</li>
                    <li style={{ marginBottom: '12px' }}><strong style={{ color: '#E5C494' }}>3.</strong> Подготовить обращения и жалобы</li>
                    <li style={{ margin: 0 }}><strong style={{ color: '#E5C494' }}>4.</strong> Определить порядок дальнейших действий</li>
                  </ul>
                  <div style={{ background: 'rgba(255,255,255,0.1)', padding: '16px', borderLeft: '4px solid var(--color-gold)', fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
                    Возможность полностью дистанционной работы зависит от характера дела и необходимости личного участия адвоката или юриста.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>`;

// Find the section to replace in page.tsx
const startIdx = page.indexOf('{/* 8. Другие вопросы и дистанционная помощь */}');
const endIdx = page.indexOf('{/* 10. Стоимость */}');

if (startIdx > -1 && endIdx > -1) {
    page = page.substring(0, startIdx) + replacement + '\n\n\n      ' + page.substring(endIdx);
    fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', page, 'utf8');
    console.log('Replaced remote section in page.tsx');
} else {
    console.log('Could not find remote section bounds in page.tsx');
}
