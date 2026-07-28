const fs = require('fs');
const file = 'src/app/grazhdanam/voennyj-yurist/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /\{\/\* Объединенный блок: Urgent Contact \+ Ситуации нет в списке на кремовом фоне \*\/\}\s*<section className="section bg-cream" style=\{\{ padding: '60px 0' \}\}>[\s\S]*?<\/section>/;

content = content.replace(regex, '<UrgentContactStrip />');

// Now we insert the original block 8 before section 10
const block8 = `
      {/* 8. Другие вопросы и дистанционная помощь */}
      <section className="section bg-cream">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '40px' }}>
            {/* Левая колонка */}
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', paddingTop: '20px' }}>
              <h2 className="section-title" style={{ fontSize: '32px', margin: '0 0 24px 0' }}>
                Если вашей ситуации <br />нет в списке
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '32px' }}>
                Необязательно самостоятельно определять вид услуги.<br />Опишите обстоятельства — мы разберём ситуацию,<br />уточним необходимые документы и определим,<br />какой специалист должен подключиться.
              </p>
              <div style={{ marginTop: 'auto' }}>
                <a href="#form" className="btn btn-primary" style={{ textDecoration: "none", border: "0" }}>Описать ситуацию</a>
              </div>
            </div>

            {/* Правая колонка */}
            <div style={{ background: 'var(--color-deep-blue)', padding: '40px', borderRadius: '0', color: 'var(--color-white)', position: 'relative', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, opacity: 0.05, transform: 'translate(20%, -20%)' }}>
                <svg width="150" height="150" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <h3 style={{ fontSize: '24px', fontFamily: 'var(--font-serif)', color: '#E6C898', marginBottom: '24px', position: 'relative', zIndex: 1 }}>Что можно сделать дистанционно</h3>
              <div style={{ position: 'relative', zIndex: 1, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', margin: '0 0 20px 0', fontSize: '16px', color: '#E6C898', lineHeight: 1.7 }}>
                  <li style={{ marginBottom: '8px' }}><span style={{ color: 'var(--color-white)' }}>Провести первичную консультацию</span></li>
                  <li style={{ marginBottom: '8px' }}><span style={{ color: 'var(--color-white)' }}>Изучить документы</span></li>
                  <li style={{ marginBottom: '8px' }}><span style={{ color: 'var(--color-white)' }}>Подготовить обращения и жалобы</span></li>
                  <li style={{ marginBottom: '8px' }}><span style={{ color: 'var(--color-white)' }}>Определить порядок дальнейших действий</span></li>
                </ul>
                <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, margin: 0 }}>
                  Возможность полностью дистанционной работы зависит от характера дела и необходимости личного участия адвоката или юриста.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>`;

// Insert before {/* 10. Стоимость */}
const insertTarget = '{/* 10. Стоимость */}';
content = content.replace(insertTarget, block8 + '\n\n\n      ' + insertTarget);

fs.writeFileSync(file, content);
console.log('Successfully reverted!');
