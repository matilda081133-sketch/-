const fs = require('fs');
const file = 'src/app/grazhdanam/voennyj-yurist/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /<UrgentContactStrip \/>\s*\{\/\* 8\. Другие вопросы и дистанционная помощь \*\/\}\s*<section style=\{\{ background: 'var\(--color-deep-blue\)', paddingBottom: '64px' \}\}>[\s\S]*?<\/p>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/;

const newSection = `
      {/* Объединенный блок: Urgent Contact + Ситуации нет в списке на кремовом фоне */}
      <section className="section bg-cream" style={{ padding: '60px 0' }}>
        <div className="container">
          
          {/* Верхняя часть (бывший UrgentContactStrip) */}
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            gap: '24px',
            marginBottom: '40px'
          }}>
            <div style={{ flex: '1 1 500px' }}>
              <h2 style={{ fontSize: '24px', fontFamily: 'var(--font-serif)', margin: '0 0 8px 0', color: 'var(--color-deep-blue)' }}>
                Военнослужащего задержали или<br/>его местонахождение неизвестно?
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', margin: 0 }}>
                Позвоните адвокату и сообщите все, что известно о ситуации.
              </p>
            </div>
            
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              alignItems: 'center', 
              gap: '24px' 
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <a 
                  href="tel:+79103503111" 
                  style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--color-deep-blue)', textDecoration: 'none' }}
                >
                  +7 (910) 350-31-11
                </a>
              </div>
              
              <a 
                href="tel:+79103503111" 
                className="btn btn-primary"
                data-analytics="military_urgent_call_click"
              >
                Позвонить адвокату
              </a>
              
              <a 
                href="#form" 
                style={{ color: 'var(--color-primary)', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}
              >
                Описать ситуацию
              </a>
            </div>
          </div>

          {/* Нижняя часть (Если вашей ситуации нет в списке) */}
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

if (regex.test(content)) {
    content = content.replace(regex, newSection);
    fs.writeFileSync(file, content);
    console.log('Successfully replaced!');
} else {
    console.log('Failed to match regex');
}
