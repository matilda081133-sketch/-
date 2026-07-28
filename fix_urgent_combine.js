const fs = require('fs');
const file = 'src/app/grazhdanam/voennyj-yurist/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldHeader = `          <h2 className="section-title text-center" style={{ marginBottom: '24px', textAlign: 'center' }}>
            Если помощь нужна прямо сейчас
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)', fontSize: '16px', maxWidth: '700px', margin: '0 auto 40px auto', lineHeight: 1.6 }}>
            Ниже — типичные ситуации, в которых откладывать обращение за юридической помощью опасно. Чем раньше подключится профильный специалист, тем больше возможностей для защиты ваших прав.
          </p>`;
          
const newHeader = `          <h2 className="section-title" style={{ marginBottom: '24px', textAlign: 'left' }}>
            Если помощь нужна прямо сейчас
          </h2>
          <p style={{ textAlign: 'left', color: 'var(--color-text-secondary)', fontSize: '16px', maxWidth: '800px', marginBottom: '40px', lineHeight: 1.6 }}>
            Ниже — типичные ситуации, в которых откладывать обращение за юридической помощью опасно. Чем раньше подключится профильный специалист, тем больше возможностей для защиты ваших прав.
          </p>`;
          
content = content.replace(oldHeader, newHeader);

const oldCombine = `          <div className="text-center" style={{ marginTop: '40px' }}>
            <a href="tel:+79103503111" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '16px' }} data-analytics="military_urgent_call_click">
              Позвонить адвокату
            </a>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginTop: '16px' }}>
              +7 (910) 350-31-11 • Перезвоним в течение 15 минут в рабочее время
            </p>
          </div>
        </div>
      </section>

      {/* 8. Другие вопросы и дистанционная помощь */}
      <section className="section bg-cream">
        <div className="container remote-help-grid">`;

const newCombine = `          <div className="text-center" style={{ marginTop: '40px' }}>
            <a href="tel:+79103503111" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '16px' }} data-analytics="military_urgent_call_click">
              Позвонить адвокату
            </a>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginTop: '16px' }}>
              +7 (910) 350-31-11 • Перезвоним в течение 15 минут в рабочее время
            </p>
          </div>
        </div>
        
        <div className="container" style={{ margin: '60px auto' }}>
            <div style={{ height: '1px', background: 'var(--color-border)', opacity: 0.5 }}></div>
        </div>
        
        <div className="container remote-help-grid">`;

content = content.replace(oldCombine, newCombine);

fs.writeFileSync(file, content);
console.log('Fixed Urgent block alignment and combined with remote help');
