const fs = require('fs');

const formContent = (title, desc) => `      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  Связаться с нами
                </span>
              </div>

              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0 }}>
                ${title}
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                ${desc}
              </p>
              
              <div style={{ marginTop: '32px' }}>
                <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  Перезвоним в течение 15 минут в рабочее время
                </div>
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
              <div style={{ background: 'var(--gradient-cream)', padding: '40px', borderRadius: '0', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', border: '1px solid rgba(23, 50, 77, 0.1)', width: '100%' }}>
                <ContactsForm title="Отправьте заявку" subtitle="" />
              </div>
            </div>
          </div>
        </div>
      </section>`;

// 1. Ranenie
let file = 'src/app/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/page.tsx';
let content = fs.readFileSync(file, 'utf8');
let idx = content.indexOf('<section className="section bg-white" id="form">');
if (idx > -1) {
  let endIdx = content.indexOf('</section>', idx);
  let oldSection = content.substring(idx, endIdx + 10);
  content = content.replace(oldSection, formContent('Обсудить выплату', 'Заполните форму, и мы свяжемся с вами, чтобы обсудить вашу ситуацию, оценить перспективы и предложить план действий.'));
  
  // Also fix MilitaryHero ExtendedContactStrip removal
  content = content.replace(/<\/>\s*<ExtendedContactStrip \/>\s*\}\s*superTitle=/g, '</>\n        }\n        superTitle=');
  fs.writeFileSync(file, content);
}

// 2. SOCH
file = 'src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx';
content = fs.readFileSync(file, 'utf8');
idx = content.indexOf('<section className="section" id="form" style={{ background: \'var(--color-cream)\' }}>');
if (idx > -1) {
  let endIdx = content.indexOf('</section>', idx);
  let oldSection = content.substring(idx, endIdx + 10);
  content = content.replace(oldSection, formContent('Срочная связь с адвокатом', 'Если человека задержали или он готовится явиться с повинной, свяжитесь с нами прямо сейчас. Время имеет критическое значение.'));
  
  // Apply the layout updates to SOCH that were approved yesterday
  // Remove ExtendedContactStrip from MilitaryHero
  content = content.replace(/<\/>\s*<ExtendedContactStrip \/>\s*\}\s*superTitle=/g, '</>\n        }\n        superTitle=');
  
  // Replace the grid block (safe)
  const oldGrid = `<div className="grid grid-3" style={{ gap: '24px' }}>
            {[
              {
                title: 'Консультация и анализ',
                desc: 'Изучаем материалы, оцениваем перспективы, определяем правильную квалификацию содеянного.'
              },
              {
                title: 'Защита на следствии',
                desc: 'Участвуем в допросах, заявляем ходатайства, собираем доказательства уважительности причин отсутствия.'
              },
              {
                title: 'Защита в суде',
                desc: 'Представляем интересы в гарнизонном военном суде, добиваемся смягчения наказания или оправдания.'
              }
            ].map((item, i) => (
              <div key={i} className="hover-lift" style={{ background: 'var(--color-white)', padding: '32px', borderRadius: '4px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', border: '1px solid var(--color-border)' }}>
                <div style={{ width: '48px', height: '48px', background: 'var(--color-cream)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: 'var(--color-primary)', fontWeight: 600, fontSize: '20px' }}>
                  {i + 1}
                </div>
                <h3 style={{ fontSize: '20px', color: 'var(--color-deep-blue)', marginBottom: '16px' }}>{item.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>`;
          
  const newGrid = `<div className="grid grid-1" style={{ gap: '20px' }}>
            {[
              {
                title: 'Консультация и анализ',
                desc: 'Изучаем материалы, оцениваем перспективы, определяем правильную квалификацию содеянного.'
              },
              {
                title: 'Защита на следствии',
                desc: 'Участвуем в допросах, заявляем ходатайства, собираем доказательства уважительности причин отсутствия.'
              },
              {
                title: 'Защита в суде',
                desc: 'Представляем интересы в гарнизонном военном суде, добиваемся смягчения наказания или оправдания.'
              }
            ].map((item, i) => (
              <div key={i} className="hover-lift" style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', background: 'var(--color-white)', padding: '32px', borderRadius: '4px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', border: '1px solid var(--color-border)' }}>
                <div style={{ width: '48px', height: '48px', flexShrink: 0, background: 'var(--color-cream)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', fontWeight: 600, fontSize: '20px' }}>
                  {i + 1}
                </div>
                <div>
                  <h3 style={{ fontSize: '20px', color: 'var(--color-deep-blue)', marginBottom: '12px' }}>{item.title}</h3>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>`;
  content = content.replace(oldGrid, newGrid);
  
  fs.writeFileSync(file, content);
}

console.log('Applied final layout updates successfully!');
