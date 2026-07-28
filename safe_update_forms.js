const fs = require('fs');
const pages = [
  'dezertirstvo',
  'osparivanie-zaklyucheniya-vvk',
  'priznanie-voennosluzhashchego-umershim',
  'spory-s-voenkomatom',
  'vyplaty-seme-pogibshego-voennosluzhashchego',
  'vyplaty-za-ranenie-voennosluzhashchego'
];

pages.forEach(p => {
  let file = 'src/app/grazhdanam/voennyj-yurist/' + p + '/page.tsx';
  let content = fs.readFileSync(file, 'utf8');
  
  // Find the start of the form section:
  const sectionIdx = content.indexOf('<section className="section bg-white" id="form"');
  if (sectionIdx === -1) {
    console.log('Could not find form section in ' + p);
    return;
  }
  
  // Find the end of the section by looking for </section> after sectionIdx
  const endSectionIdx = content.indexOf('</section>', sectionIdx);
  
  let oldSection = content.substring(sectionIdx, endSectionIdx + 10);
  
  // Extract title and description
  const h2Match = oldSection.match(/<h2[^>]*>\s*([\s\S]*?)\s*<\/h2>/);
  let pMatch = oldSection.match(/<\/h2>\s*<p[^>]*>\s*([\s\S]*?)\s*<\/p>/);
  
  if (!h2Match || !pMatch) {
    console.log('Could not parse title/desc in ' + p);
    return;
  }
  
  let title = h2Match[1].trim();
  let desc = pMatch[1].trim();
  desc = desc.replace(/(Перезвоним в течение 15 минут(?:\.| в рабочее время)?)$/i, '').trim();
  
  const newSection = `<section className="section bg-white" id="form" style={{ scrollMarginTop: '120px' }}>
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

  content = content.replace(oldSection, newSection);
  fs.writeFileSync(file, content);
  console.log('Fixed ' + p);
});
