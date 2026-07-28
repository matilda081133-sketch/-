const fs = require('fs');
const file = 'src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldBlock11 = `      {/* Блок 11. Связанные услуги */}
      <section className="section bg-white" style={{ paddingTop: '40px' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>Другие услуги военного адвоката</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
            <a href="/grazhdanam/voennyj-yurist/" style={{ 
              display: 'block', 
              textDecoration: 'none', 
              background: 'var(--color-cream)', 
              padding: '32px',
              textAlign: 'left',
              color: 'var(--color-deep-blue)',
              borderBottom: '4px solid var(--color-gold)',
              transition: 'transform 0.3s',
              width: '100%',
              maxWidth: '350px'
            }} className="hover-lift">
              <div style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>Военный адвокат</div>
              <div style={{ fontSize: '15px', color: 'var(--color-text-secondary)', fontWeight: 400 }}>Защита прав военнослужащих</div>
            </a>
            {/* До публикации страниц ссылки скрыты, выводим заглушки или скрываем. 
                По ТЗ: "До публикации целевой страницы карточка скрывается"
            */}
          </div>
        </div>
      </section>`;

const newBlock11 = `      {/* Блок 11. Связанные услуги */}
      <section className="section bg-white" style={{ paddingTop: '40px' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>Другие услуги военного адвоката</h2>
          <div className="grid grid-3" style={{ gap: '30px' }}>
            <a href="/grazhdanam/voennyj-yurist/" style={{ 
              display: 'flex', 
              flexDirection: 'column',
              textDecoration: 'none', 
              background: 'var(--color-white)', 
              padding: '40px',
              borderRadius: '0',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid var(--color-border)',
              transition: 'all 0.4s ease',
              height: '100%'
            }} className="service-card group">
              <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '0%', background: 'var(--color-gold)', transition: 'height 0.4s ease' }} className="service-accent-line"></div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px', color: 'var(--color-deep-blue)' }}>Военный адвокат</h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: 1.5, marginBottom: '24px' }}>Защита прав военнослужащих</p>
              <div className="card-service-arrow" style={{ marginTop: 'auto' }}>
                Подробнее <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </a>
          </div>
        </div>
      </section>`;

if (content.includes('Другие услуги военного адвоката')) {
  content = content.replace(oldBlock11, newBlock11);
  fs.writeFileSync(file, content);
  console.log('Fixed block 11 in SOCH');
} else {
  console.log('Block 11 not found in SOCH');
}
