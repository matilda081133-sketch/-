const fs = require('fs');
let page = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/page.tsx', 'utf8');

const regex = /<section className="section" style=\{\{\s*background:\s*'var\(--gradient-cream\)'\s*\}\}>\s*<div className="container">\s*<h2 className="with-accent"[\s\S]*?Административное судопроизводство по применимости[\s\S]*?<\/div>\s*<\/section>/;

const replacement = `<section className="section" style={{ background: 'var(--gradient-cream)' }}>
        <div className="container">
          <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '40px', marginTop: 0, textAlign: 'left' }}>
            Как помогаем
          </h2>
          <div className="grid grid-2" style={{ gap: '40px', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {[
                { num: '01', title: 'Анализ документов', desc: 'Проверяем медицинские справки, обстоятельства ранения и основания выплат.' },
                { num: '02', title: 'Запрос сведений', desc: 'При необходимости истребуем документы из госпиталя или воинской части.' }
              ].map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: '24px' }}>
                  <div style={{ flexShrink: 0, width: '48px', height: '48px', borderRadius: '50%', background: 'var(--color-white)', border: '1px solid rgba(193, 160, 102, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', fontWeight: '600', fontSize: '18px', boxShadow: '0 4px 12px rgba(23, 50, 77, 0.05)' }}>
                    {step.num}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '20px', color: 'var(--color-deep-blue)', marginBottom: '8px' }}>{step.title}</h3>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {[
                { num: '03', title: 'Обращения и рапорты', desc: 'Готовим мотивированные заявления в ЕРЦ, страховую компанию или соцзащиту.' },
                { num: '04', title: 'Судебная защита', desc: 'В случае незаконного отказа подаем административный иск в военный суд.' }
              ].map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: '24px' }}>
                  <div style={{ flexShrink: 0, width: '48px', height: '48px', borderRadius: '50%', background: 'var(--color-white)', border: '1px solid rgba(193, 160, 102, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', fontWeight: '600', fontSize: '18px', boxShadow: '0 4px 12px rgba(23, 50, 77, 0.05)' }}>
                    {step.num}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '20px', color: 'var(--color-deep-blue)', marginBottom: '8px' }}>{step.title}</h3>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>`;

if (regex.test(page)) {
    page = page.replace(regex, replacement);
    fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/page.tsx', page, 'utf8');
    console.log('Successfully replaced Как помогаем with steps layout!');
} else {
    console.log('Regex did not match!');
}
