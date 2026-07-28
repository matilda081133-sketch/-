const fs = require('fs');

// 1. CasesBlock.tsx - Add shadow directly to inline style
let casesCode = fs.readFileSync('src/components/CasesBlock.tsx', 'utf8');

// The card div has this style: style={{ height: '100%', display: 'flex', flexDirection: 'column', ... }}
casesCode = casesCode.replace(
  /style=\{\{\s*height:\s*'100%',\s*display:\s*'flex',/g,
  'style={{ boxShadow: \'0 8px 24px rgba(0,0,0,0.12)\', height: \'100%\', display: \'flex\','
);

// We should also remove the previous injected style if it's there
casesCode = casesCode.replace(/<style dangerouslySetInnerHTML=[\s\S]*?<\/style>/, '');
casesCode = casesCode.replace(/ cases-card-custom-shadow/g, '');

fs.writeFileSync('src/components/CasesBlock.tsx', casesCode);


// 2. page.tsx - Fix Remote Help, Contact Form wrap and border
let pageCode = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', 'utf8');

// A. Contact form title wrap and container border
pageCode = pageCode.replace(
  /<h2 style=\{\{\s*fontSize: '36px', fontFamily: 'var\(--font-serif\)', color: 'var\(--color-deep-blue\)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0\s*\}\}>\s*Получите первичную оценку ситуации\s*<\/h2>/,
  `<h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                Получите первичную оценку ситуации
              </h2>`
);
pageCode = pageCode.replace(
  /<div style=\{\{\s*background: 'var\(--gradient-cream\)', padding: '40px', borderRadius: '4px', boxShadow: '0 10px 30px rgba\(0,0,0,0\.02\)', width: '100%'\s*\}\}>/g,
  `<div style={{ background: 'var(--gradient-cream)', padding: '40px', borderRadius: '4px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', width: '100%', border: '1px solid rgba(0,0,0,0.06)' }}>`
);


// B. Remote Help section completely rewritten to match SOCH
const remoteRegex = /<section className="section bg-cream"[^>]*>[\s\S]*?Если вашей ситуации[\s\S]*?<\/section>/;
if (pageCode.match(remoteRegex)) {
    const newRemote = `<section className="section bg-cream" id="remote">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'center' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h2 className="section-title" style={{ fontSize: '32px', marginBottom: '16px', textAlign: 'left' }}>
                Если вашей ситуации нет в списке
              </h2>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)', marginBottom: '24px' }}></div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '12px', textAlign: 'left' }}>
                Необязательно самостоятельно определять вид услуги.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '32px', textAlign: 'left' }}>
                Опишите обстоятельства — мы разберём ситуацию,<br />
                уточним необходимые документы и определим,<br />
                какой специалист должен подключиться.
              </p>
              <div style={{ marginTop: 'auto', textAlign: 'left' }}>
                <a href="#form" className="btn btn-primary" style={{ textDecoration: 'none', border: '0' }}>Описать ситуацию</a>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
              <div style={{ background: 'var(--color-primary)', padding: '40px', borderRadius: '4px', color: 'var(--color-white)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, opacity: 0.1, transform: 'translate(20%, -20%)' }}>
                  <svg width="150" height="150" viewBox="0 0 24 24" fill="var(--color-white)"><path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <h3 style={{ fontSize: '24px', fontFamily: 'var(--font-serif)', color: 'var(--color-white)', marginBottom: '24px', position: 'relative', zIndex: 1 }}>Что можно сделать дистанционно</h3>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', color: 'rgba(255,255,255,0.9)', fontSize: '16px', lineHeight: 1.7 }}>
                    <li style={{ marginBottom: '12px' }}><strong>1.</strong> Провести первичную консультацию</li>
                    <li style={{ marginBottom: '12px' }}><strong>2.</strong> Изучить документы</li>
                    <li style={{ marginBottom: '12px' }}><strong>3.</strong> Подготовить обращения и жалобы</li>
                    <li style={{ margin: 0 }}><strong>4.</strong> Определить порядок дальнейших действий</li>
                  </ul>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, margin: 0, fontStyle: 'italic', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '16px' }}>
                    Возможность полностью дистанционной работы зависит от характера дела и необходимости личного участия адвоката или юриста.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>`;
    pageCode = pageCode.replace(remoteRegex, newRemote);
}

fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', pageCode);

console.log('Final touches applied!');
