const fs = require('fs');

const file = 'src/app/grazhdanam/voennyj-yurist/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetPattern = /<section className=\"section bg-white\" id=\"form\" style=\{\{ scrollMarginTop: '120px' \}\}>[^]*?<\/section>/;

const replacement = `<section className="section bg-white" id="form" style={{ scrollMarginTop: '120px' }}>
        <div className="container">
          <div style={{ background: 'radial-gradient(circle at 100% 50%, #EAF1F6 0%, transparent 60%), var(--color-cream)', padding: '60px', borderRadius: '0', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>
                Связаться с нами
              </span>
            </div>
            
            <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '24px', lineHeight: 1.2, marginTop: 0 }}>
              Получите первичную оценку ситуации
            </h2>
            
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: 1.6, maxWidth: '700px', margin: '0 auto 40px auto', textWrap: 'balance' }}>
              Кратко опишите, что произошло. Мы определим срочность, уточним необходимые документы и подключим Дмитрия Сергеевича Конопкина либо другого специалиста с нужными полномочиями.
            </p>
            
            <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
              <ContactsForm title="" subtitle="" />
            </div>
            
          </div>
        </div>
      </section>`;

if (targetPattern.test(content)) {
  content = content.replace(targetPattern, replacement);
  fs.writeFileSync(file, content);
  console.log('Replaced successfully');
} else {
  console.log('Pattern not found');
}
