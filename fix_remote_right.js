const fs = require('fs');
const file = 'src/app/grazhdanam/voennyj-yurist/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const remoteRightRegex = /\{\/\*\ Правая\ колонка\ \-\ Что\ можно\ сделать\ дистанционно\ \([\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/;

const newRemoteRight = `{/* Правая колонка - Что можно сделать дистанционно (Темная акцентная карточка) */}
            <div style={{ background: 'var(--color-deep-blue)', padding: '40px', borderRadius: '0', color: 'var(--color-primary)', position: 'relative', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, opacity: 0.05, transform: 'translate(20%, -20%)' }}>
                <svg width="150" height="150" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <h3 style={{ fontSize: '24px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '24px', position: 'relative', zIndex: 1 }}>Что можно сделать дистанционно</h3>
              <div style={{ position: 'relative', zIndex: 1, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', margin: '0 0 20px 0', fontSize: '16px', color: 'var(--color-primary)', lineHeight: 1.7 }}>
                  <li style={{ marginBottom: '8px' }}>Провести первичную консультацию</li>
                  <li style={{ marginBottom: '8px' }}>Изучить документы</li>
                  <li style={{ marginBottom: '8px' }}>Подготовить обращения и жалобы</li>
                  <li style={{ marginBottom: '8px' }}>Определить порядок дальнейших действий</li>
                </ul>
                <p style={{ fontSize: '16px', color: 'var(--color-primary)', lineHeight: 1.6, margin: 0, fontStyle: 'italic', opacity: 0.8 }}>
                  Возможность полностью дистанционной работы зависит от характера дела и необходимости личного участия адвоката или юриста.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>`;

if (content.match(remoteRightRegex)) {
  content = content.replace(remoteRightRegex, newRemoteRight);
  console.log('Fixed remote help right column');
} else {
  console.error('Failed to find remote help right column');
}

fs.writeFileSync(file, content);
