const fs = require('fs');
const file = 'src/app/grazhdanam/voennyj-yurist/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Fix Urgent Block Alignment
const urgentStart = '{/* 7. Срочный блок */}';
const urgentEnd = '<div className="grid grid-3" style={{ gap: \'24px\' }}>';
const uStartIdx = content.indexOf(urgentStart);
const uEndIdx = content.indexOf(urgentEnd);

if (uStartIdx !== -1 && uEndIdx !== -1) {
  const replacement = `{/* 7. Срочный блок */}
      <section className="section" style={{ background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ textAlign: 'left', marginBottom: '40px' }}>
            <h2 className="section-title" style={{ marginBottom: '24px', textAlign: 'left', display: 'inline-block' }}>
              Если помощь нужна прямо сейчас
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', maxWidth: '800px', margin: '0', lineHeight: 1.6, textAlign: 'left' }}>
              Ниже — типичные ситуации, в которых откладывать обращение за юридической помощью опасно. Чем раньше подключится профильный специалист, тем больше возможностей для защиты ваших прав.
            </p>
          </div>
          `;
  content = content.substring(0, uStartIdx) + replacement + content.substring(uEndIdx);
  console.log('Fixed Urgent Block alignment.');
} else {
  console.log('Failed to find Urgent Block.');
}

// 2. Fix Remote Help Block styling (White text, gold bullets, gold header)
const remoteRightStart = '{/* Правая колонка */}';
const remoteRightEnd = '</section>';
const rStartIdx = content.indexOf(remoteRightStart);
const rEndIdx = content.indexOf(remoteRightEnd, rStartIdx);

if (rStartIdx !== -1 && rEndIdx !== -1) {
  const replacement = `{/* Правая колонка */}
            <div style={{ background: 'var(--color-deep-blue)', padding: '40px', borderRadius: '0', color: 'var(--color-white)', position: 'relative', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, opacity: 0.05, transform: 'translate(20%, -20%)' }}>
                <svg width="150" height="150" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <h3 style={{ fontSize: '24px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '24px', position: 'relative', zIndex: 1 }}>Что можно сделать дистанционно</h3>
              <div style={{ position: 'relative', zIndex: 1, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', margin: '0 0 20px 0', fontSize: '16px', color: 'var(--color-primary)', lineHeight: 1.7 }}>
                  <li style={{ marginBottom: '8px' }}><span style={{ color: 'rgba(255,255,255,0.9)' }}>Провести первичную консультацию</span></li>
                  <li style={{ marginBottom: '8px' }}><span style={{ color: 'rgba(255,255,255,0.9)' }}>Изучить документы</span></li>
                  <li style={{ marginBottom: '8px' }}><span style={{ color: 'rgba(255,255,255,0.9)' }}>Подготовить обращения и жалобы</span></li>
                  <li style={{ marginBottom: '8px' }}><span style={{ color: 'rgba(255,255,255,0.9)' }}>Определить порядок дальнейших действий</span></li>
                </ul>
                <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>
                  Возможность полностью дистанционной работы зависит от характера дела и необходимости личного участия адвоката или юриста.
                </p>
              </div>
            </div>
          </div>
        </div>
      `;
  content = content.substring(0, rStartIdx) + replacement + content.substring(rEndIdx);
  console.log('Fixed Remote Help formatting.');
} else {
  console.log('Failed to find Remote Help block.');
}

fs.writeFileSync(file, content);
