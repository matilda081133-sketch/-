const fs = require('fs');
const path = require('path');
const dir = 'src/app/grazhdanam/voennyj-yurist';
const subdirs = fs.readdirSync(dir).filter(f => fs.statSync(path.join(dir, f)).isDirectory());

const correctForm = `<section className="section bg-white" id="form" style={{ scrollMarginTop: '120px' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0 }}>
                Если человека задержали или он готовится явиться,<br /> не откладывайте связь<br /> с адвокатом
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Уточним срочность, местонахождение<br />и необходимые документы.
              </p>
              
              <div style={{ marginTop: 'auto', marginBottom: '64px' }}>
                <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  Перезвоним в течение 15 минут в рабочее время
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <ContactsForm title="Написать нам" subtitle="" />
            </div>
          </div>
        </div>
      </section>`;

for (const sub of subdirs) {
  const file = path.join(dir, sub, 'page.tsx');
  let content = fs.readFileSync(file, 'utf8');
  
  // Find the last section
  const sectionIdx = content.lastIndexOf('<section className="section bg-white" id="form"');
  // Alternatively, just replace everything from FAQBlock to Footer!
  
  const faqIdx = content.indexOf('<FAQBlock');
  if (faqIdx !== -1) {
     const footerIdx = content.indexOf('<Footer', faqIdx);
     if (footerIdx !== -1) {
         const before = content.substring(0, faqIdx);
         const after = content.substring(footerIdx);
         
         // we need to keep FAQBlock!
         const endOfFaq = content.indexOf('/>', faqIdx) + 2;
         const faqBlock = content.substring(faqIdx, endOfFaq);
         
         content = before + faqBlock + '\n\n      ' + correctForm + '\n\n      ' + after;
         fs.writeFileSync(file, content);
     }
  }
}
