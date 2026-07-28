const fs = require('fs');
let page = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/page.tsx', 'utf8');

const newHero = `{/* Блок 1. Первый экран */}
      <section style={{ 
        position: 'relative', 
        minHeight: '85vh', 
        display: 'flex', 
        alignItems: 'center',
        paddingTop: '160px',
        paddingBottom: '80px',
        background: 'linear-gradient(145deg, var(--color-cream) 0%, rgba(247, 244, 237, 0.4) 100%)',
        overflow: 'hidden'
      }}>
        {/* Decorative circle */}
        <div style={{
          position: 'absolute', top: '-10%', right: '-5%', width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(234, 241, 246, 0.8) 0%, transparent 70%)',
          borderRadius: '50%', zIndex: 0
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="grid grid-2" style={{ gap: '40px', alignItems: 'center' }}>
            {/* Left Column */}
            <div>
              <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginBottom: '24px' }}>
                <a href="/" style={{ color: 'var(--color-primary)' }}>Главная</a> <span style={{ margin: '0 8px' }}>/</span> 
                <a href="/grazhdanam/" style={{ color: 'var(--color-primary)' }}>Гражданам</a> <span style={{ margin: '0 8px' }}>/</span> 
                <a href="/grazhdanam/voennyj-yurist/" style={{ color: 'var(--color-primary)' }}>Военный юрист</a> <span style={{ margin: '0 8px' }}>/</span> 
                <span style={{ color: 'var(--color-text-main)' }}>Выплаты за ранение</span>
              </div>
              
              <h1 style={{ 
                fontSize: 'clamp(36px, 5vw, 56px)', 
                color: 'var(--color-deep-blue)', 
                fontFamily: 'var(--font-serif)', 
                margin: '0 0 32px 0', 
                lineHeight: 1.1 
              }}>
                Юрист по выплатам за ранение<br/>военнослужащего в Липецке
              </h1>
              
              <p style={{ 
                fontSize: '18px', 
                color: 'var(--color-text-secondary)', 
                marginBottom: '40px', 
                maxWidth: '750px', 
                lineHeight: 1.6 
              }}>
                Проверим документы и виды положенных выплат, запросим недостающие сведения и определим порядок действий при задержке, отказе, неверной квалификации ранения или неполной выплате.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
                <a href="#form" className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '15px' }}>
                  Связаться с юристом
                </a>
                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                  <a href="tel:+74742527752" style={{ fontSize: '18px', fontWeight: 600, color: 'var(--color-deep-blue)', textDecoration: 'none' }}>
                    +7 (4742) 52-77-52
                  </a>
                  <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>• Перезвоним в течение 15 минут в рабочее время</span>
                </div>
              </div>
            </div>
            
            {/* Right Column for Photo */}
            <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ 
                width: '100%', 
                aspectRatio: '3/4', 
                backgroundColor: 'var(--color-white)', 
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-text-secondary)',
                fontSize: '14px',
                border: '1px solid var(--color-border)',
                position: 'relative'
              }} className="hero-photo-hover">
                <img 
                  src="/-/images/konopkin.jpg" 
                  alt="Дмитрий Сергеевич Конопкин"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  className="hero-photo-img"
                />
              </div>
              <style dangerouslySetInnerHTML={{__html: \`
                .hero-photo-hover {
                  transition: all 0.4s ease;
                }
                .hero-photo-hover:hover {
                  box-shadow: 0 20px 40px rgba(23, 50, 77, 0.15);
                  transform: translateY(-4px);
                }
              \`}} />
              <div>
                <div style={{ fontSize: '18px', fontWeight: 600, color: 'var(--color-deep-blue)', marginBottom: '4px' }}>Дмитрий Сергеевич Конопкин</div>
                <div style={{ fontSize: '15px', color: 'var(--color-text-secondary)' }}>Адвокат, ведущий юрист военного направления</div>
              </div>
            </div>
          </div>
        </div>
      </section>`;

// Replace MilitaryHero correctly
const startIndex = page.indexOf('<MilitaryHero');
const trustItemsIndex = page.indexOf('trustItems=', startIndex);
const endIndex = page.indexOf('/>', trustItemsIndex) + 2;

if (startIndex !== -1 && trustItemsIndex !== -1 && endIndex > startIndex) {
    page = page.substring(0, startIndex) + newHero + page.substring(endIndex);
} else {
    console.log("Failed to find MilitaryHero boundaries");
}

// 2. Replace the grid items formatting
const oldGridItemRegex = /<div key=\{i\} className="hover-lift" style=\{\{\s*background: 'var\(--color-cream\)',\s*padding: '24px',\s*borderLeft: '4px solid var\(--color-gold\)',\s*color: 'var\(--color-deep-blue\)',\s*transition: 'transform 0\.3s ease, box-shadow 0\.3s ease'\s*\}\}>\s*\{item\}\s*<\/div>/g;

const newGridItem = `<a key={i} href="#form" style={{
                background: 'var(--color-cream)',
                padding: '24px',
                borderLeft: '4px solid #D9534F',
                fontWeight: 500,
                color: 'var(--color-deep-blue)',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }} className="hover-lift">
                <div style={{ marginBottom: '12px' }}>{item}</div>
                <div style={{ color: 'var(--color-primary)', fontSize: '13px', fontWeight: 600 }}>Связаться →</div>
              </a>`;

page = page.replace(oldGridItemRegex, newGridItem);

fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/page.tsx', page, 'utf8');
console.log('Successfully updated injured payments page');
