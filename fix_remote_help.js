const fs = require('fs');

const file = 'src/app/grazhdanam/voennyj-yurist/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldGridRegex = /<div className="container remote-help-grid">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/;

const newGrid = `<div className="container">
          <div className="grid grid-2" style={{ gap: '40px' }}>
            {/* Левая колонка - Если вашей ситуации нет в списке */}
            <div style={{ display: 'flex', flexDirection: 'column', background: 'var(--color-white)', padding: '40px', borderRadius: '4px', borderTop: '4px solid var(--color-primary)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', height: '100%' }}>
              <h2 className="section-title" style={{ fontSize: '28px', margin: '0 0 24px 0' }}>
                Если вашей ситуации нет в списке
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '32px' }}>
                Необязательно самостоятельно определять вид услуги. Опишите обстоятельства — мы разберём ситуацию, уточним необходимые документы и определим, какой специалист должен подключиться.
              </p>
              <div style={{ marginTop: 'auto' }}>
                <a href="#form" className="btn btn-primary">Описать ситуацию</a>
              </div>
            </div>

            {/* Правая колонка - Что можно сделать дистанционно (Темная акцентная карточка) */}
            <div style={{ background: 'var(--color-deep-blue)', padding: '40px', borderRadius: '4px', color: 'var(--color-white)', position: 'relative', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, opacity: 0.05, transform: 'translate(20%, -20%)' }}>
                <svg width="150" height="150" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <h3 style={{ fontSize: '24px', fontFamily: 'var(--font-serif)', color: 'var(--color-white)', marginBottom: '24px', position: 'relative', zIndex: 1 }}>Что можно сделать дистанционно</h3>
              <div style={{ position: 'relative', zIndex: 1, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.7, margin: 0 }}>
                  Провести первичную консультацию, изучить документы, подготовить обращения и жалобы, определить порядок дальнейших действий. Возможность полностью дистанционной работы зависит от характера дела и необходимости личного участия адвоката или юриста.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>`;

if (content.match(oldGridRegex)) {
  content = content.replace(oldGridRegex, newGrid);
  fs.writeFileSync(file, content);
  console.log('Replaced remote-help block successfully!');
} else {
  console.log('Failed to find remote-help block.');
}
