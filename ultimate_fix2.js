const fs = require('fs');

let pageCode = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', 'utf8');

// 1. Line Breaks
pageCode = pageCode.replace(/Если вашей ситуации\s*нет в списке/, 'Если вашей ситуации<br/>нет в списке');
pageCode = pageCode.replace(/Военный юрист\s*в Липецке/, 'Военный юрист<br/>в Липецке');

// 2. Remote Help Colors (Title gold, List white, numbers gold)
pageCode = pageCode.replace(
    /color: 'var\(--color-white\)', marginBottom: '24px', position: 'relative', zIndex: 1 \}\}>Что можно сделать дистанционно/g,
    `color: '#E5C494', marginBottom: '24px', position: 'relative', zIndex: 1 }}>Что можно сделать дистанционно`
);

pageCode = pageCode.replace(
    /ul style=\{\{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', color: '#E5C494'/g,
    `ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', color: 'rgba(255,255,255,0.9)'`
);

pageCode = pageCode.replace(/<strong>1\.<\/strong>/g, `<strong style={{ color: '#E5C494' }}>1.</strong>`);
pageCode = pageCode.replace(/<strong>2\.<\/strong>/g, `<strong style={{ color: '#E5C494' }}>2.</strong>`);
pageCode = pageCode.replace(/<strong>3\.<\/strong>/g, `<strong style={{ color: '#E5C494' }}>3.</strong>`);
pageCode = pageCode.replace(/<strong>4\.<\/strong>/g, `<strong style={{ color: '#E5C494' }}>4.</strong>`);

// 3. Remote Help Disclaimer Wrapper
const oldDisclaimer = `<p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, margin: 0, fontStyle: 'italic', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '16px' }}>
                    Возможность полностью дистанционной работы зависит от характера дела и необходимости личного участия адвоката или юриста.
                  </p>`;
const newDisclaimer = `<div style={{ background: 'rgba(255,255,255,0.1)', padding: '16px', borderLeft: '4px solid var(--color-gold)', fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
                    Возможность полностью дистанционной работы зависит от характера дела и необходимости личного участия адвоката или юриста.
                  </div>`;
pageCode = pageCode.replace(oldDisclaimer, newDisclaimer);

// 4. DirectionsBlock left alignment
const oldDirections = `<h2 className="section-title text-center" style={{ marginBottom: '40px', textAlign: 'center' }}>Направления помощи</h2>`;
const newDirections = `<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '40px' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '16px' }}>Направления помощи</h2>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#E5C494' }}></div>
          </div>`;
pageCode = pageCode.replace(oldDirections, newDirections);

fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', pageCode);
console.log('Restored the 4 verified fixes on top of page_real.tsx!');
