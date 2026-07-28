const fs = require('fs');
let page = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/page.tsx', 'utf8');

// 1. Update MilitaryHero props
const oldHeroRegex = /title="Юрист по выплатам за ранение военнослужащего в Липецке"[\s\S]*?trustItems=\{\[\s*\{\s*text:\s*'Проверяем несколько оснований выплат'\s*\},[\s\S]*?\]\}/;

const newHeroProps = `title={<><span style={{ whiteSpace: 'nowrap' }}>Юрист по выплатам</span><br/>за ранение<br/>военнослужащего<br/>в Липецке</>}
        subtitle="Проверим документы и виды положенных выплат, запросим недостающие сведения и определим порядок действий при задержке, отказе, неверной квалификации ранения или неполной выплате."
        primaryCtaText="Обсудить выплату"
        secondaryCtaText="Проверить документы"
        secondaryCtaLink="#documents"
        primaryCtaSubtext="Перезвоним в течение 15 минут в рабочее время"
        imageUrl="/-/images/konopkin.jpg"
        imageName="Дмитрий Сергеевич Конопкин"
        imageSubtitle="Адвокат, ведущий юрист военного направления"
        trustItems={[
          { text: 'Проверяем несколько\\nоснований выплат' },
          { text: 'Начинаем со справок\\nи решений' },
          { text: 'Условия работы\\n— в договоре' }
        ]}`;

page = page.replace(oldHeroRegex, newHeroProps);

// 2. Update the "С какими проблемами обращаются" section background
const oldProblemsSectionRegex = /<section className="section bg-white">(\s*<div className="container">\s*<h2 className="section-title text-center" style=\{\{ marginBottom: '40px' \}\}>С какими проблемами обращаются<\/h2>)/;
const newProblemsSection = `<section className="section" style={{ background: 'var(--gradient-cream)' }}>$1`;
page = page.replace(oldProblemsSectionRegex, newProblemsSection);

// 3. Update the problems cards mapping (grid items)
const oldGridItemRegex = /<div key=\{i\} className="hover-lift" style=\{\{\s*background: 'var\(--color-cream\)',\s*padding: '24px',\s*borderLeft: '4px solid var\(--color-gold\)',\s*color: 'var\(--color-deep-blue\)',\s*transition: 'transform 0\.3s ease, box-shadow 0\.3s ease'\s*\}\}>\s*\{item\}\s*<\/div>/g;

const newGridItem = `<a key={i} href="#form" data-analytics="military_problem_click" style={{ textDecoration: 'none', display: 'block' }}>
                <div 
                  className="card service-card" 
                  style={{ 
                    height: '100%', 
                    minHeight: '140px',
                    padding: '30px', 
                    background: 'var(--color-white)', 
                    border: '1px solid var(--color-border)',
                    borderRadius: '0',
                    display: 'flex', 
                    flexDirection: 'column',
                    transition: 'all 0.3s',
                    position: 'relative',
                    borderTop: '3px solid var(--color-primary)'
                  }}
                >
                  <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3, flexGrow: 1 }}>
                    {item}
                  </h3>
                  <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, transition: 'transform 0.3s' }}>
                    Обсудить проблему
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.3s' }}>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </a>`;

page = page.replace(oldGridItemRegex, newGridItem);


// 4. Update Form Block
const oldFormRegex = /<section className="section bg-white" id="form">[\s\S]*?<\/section>/;
const newForm = `<section className="section bg-white" id="form">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  Связаться с нами
                </span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                Обсудить ситуацию<br /> с юристом
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Уточним обстоятельства получения ранения, какие справки уже есть и что потребуется сделать.
              </p>
              
              <div style={{ marginTop: '32px' }}>
                <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  Перезвоним в течение 15 минут в рабочее время
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
              <div style={{ background: 'var(--gradient-cream)', padding: '40px', borderRadius: '0', boxShadow: '0 8px 24px rgba(0,0,0,0.15)', width: '100%', border: '1px solid rgba(0,0,0,0.06)' }}>
                <ContactsForm title="Написать нам" subtitle="" />
              </div>
            </div>
          </div>
        </div>
      </section>`;

page = page.replace(oldFormRegex, newForm);

fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/page.tsx', page, 'utf8');
console.log('Successfully fully restored and fixed page!');
