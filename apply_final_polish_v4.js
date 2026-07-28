const fs = require('fs');

let page = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', 'utf8');

// 1. Fix Urgent Block alignment
page = page.replace(
    '<h2 className="section-title text-center" style={{ marginBottom: \'24px\', textAlign: \'center\' }}>',
    '<h2 className="section-title" style={{ marginBottom: \'24px\', textAlign: \'left\' }}>'
);
page = page.replace(
    '<p style={{ textAlign: \'center\', color: \'var(--color-text-secondary)\', fontSize: \'16px\', maxWidth: \'700px\', margin: \'0 auto 40px auto\', lineHeight: 1.6 }}>\n            Ниже — типичные ситуации, в которых откладывать обращение за юридической помощью опасно. Чем раньше подключится профильный специалист, тем больше возможностей для защиты ваших прав.\n          </p>',
    '<p style={{ textAlign: \'left\', color: \'var(--color-text-secondary)\', fontSize: \'16px\', maxWidth: \'700px\', margin: \'0 0 40px 0\', lineHeight: 1.6 }}>\n            Ниже — типичные ситуации, в которых откладывать обращение за юридической помощью опасно. Чем раньше подключится профильный специалист, тем больше возможностей для защиты ваших прав.\n          </p>'
);

// 2. Add 3rd Case to CasesBlock
const thirdCase = `          },
          {
            category: "Военное право",
            title: "[Кейс 3: Пример заголовка дела]",
            problem: "Здесь будет размещено реальное дело из практики по защите прав военнослужащего.",
            action: "Текст на этапе макета является заглушкой и будет заменен после согласования.",
            result: "[Ключевой результат]",
            isDemo: true
          }`;
page = page.replace(
    'isDemo: true\n          }\n        ]}',
    'isDemo: true\n' + thirdCase + '\n        ]}'
);

// 3. Rewrite Directions Block
const directionsReplacement = `      {/* 4. Направления помощи */}
      <section id="directions" className="section" style={{ padding: '64px 0', background: 'var(--color-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', marginBottom: '40px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              Направления помощи
            </h2>
            <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Специализированная юридическая защита для военнослужащих, призывников и их семей. 
              Полное сопровождение от консультации до представительства в суде.
            </p>
          </div>
          
          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '40px' }}>
            {directions.map((dir, i) => (
              <a key={i} href={dir.link} data-analytics="military_service_click" data-slug={dir.slug} style={{ textDecoration: 'none', display: 'block' }}>
                <div 
                  className="card service-card" 
                  style={{ 
                    height: '100%', 
                    minHeight: '160px',
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
                  <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3 }}>
                    {dir.title}
                  </h3>
                  <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                    {dir.desc}
                  </p>
                  <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, transition: 'transform 0.3s' }}>
                    Подробнее 
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.3s' }}>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </a>
            ))}

            <a href="#form" style={{ textDecoration: 'none', display: 'block' }}>
              <div 
                className="card service-card" 
                style={{ 
                  height: '100%', 
                  minHeight: '160px',
                  padding: '30px', 
                  background: 'var(--color-deep-blue)', 
                  border: '1px solid transparent',
                  borderRadius: '0',
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'all 0.3s',
                  position: 'relative',
                  borderTop: '3px solid var(--color-gold)'
                }}
              >
                <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-white)', lineHeight: 1.3 }}>
                  Не нашли свою ситуацию?
                </h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.5, flexGrow: 1 }}>
                  Кратко опишите обстоятельства — мы изучим вопрос и подскажем, какой специалист сможет помочь.
                </p>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-gold)', fontSize: '14px', fontWeight: 600, transition: 'transform 0.3s' }}>
                  Описать ситуацию 
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.3s' }}>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>`;

const startDirections = page.indexOf('{/* 4. Направления помощи */}');
const endDirections = page.indexOf('{/* 5. Ведущий юрист */}');

if (startDirections > -1 && endDirections > -1) {
    page = page.substring(0, startDirections) + directionsReplacement + '\n\n      ' + page.substring(endDirections);
    fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', page, 'utf8');
    console.log('Successfully applied all fixes to page.tsx');
} else {
    console.log('Error: Could not find directions bounds');
}
