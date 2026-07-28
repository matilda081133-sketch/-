const fs = require('fs');

// 1. Fix SpecialistBlock.tsx
let specCode = fs.readFileSync('src/components/SpecialistBlock.tsx', 'utf8');
specCode = specCode.replace(
  '<h2 className="section-title text-center" style={{ marginBottom: \'40px\' }}>\n            {title}\n          </h2>',
  '<h2 className="section-title" style={{ textAlign: \'left\', marginBottom: \'16px\' }}>\n            {title}\n          </h2>\n          <div style={{ width: \'40px\', height: \'2px\', backgroundColor: \'var(--color-primary)\', marginBottom: \'40px\' }}></div>'
);

const descStart = specCode.indexOf('<div style={{ marginBottom: \'32px\' }}>');
if (descStart > -1 && !specCode.includes('{name}')) {
    const renderNamePos = `
            <div style={{ marginBottom: '24px' }}>
              {name && (
                <h3 style={{ fontSize: '28px', color: 'var(--color-deep-blue)', marginBottom: '8px', fontFamily: 'var(--font-serif)' }}>
                  {name}
                </h3>
              )}
              {position && (
                <div style={{ fontSize: '16px', color: 'var(--color-primary)', fontWeight: 600 }}>
                  {position}
                </div>
              )}
            </div>
            `;
    specCode = specCode.substring(0, descStart) + renderNamePos + specCode.substring(descStart);
}
fs.writeFileSync('src/components/SpecialistBlock.tsx', specCode);


// 2. Fix CasesBlock.tsx
let casesCode = fs.readFileSync('src/components/CasesBlock.tsx', 'utf8');
casesCode = casesCode.replace(
  '<h2 className="section-title text-center" style={{ marginBottom: \'40px\' }}>\n            {title}\n          </h2>',
  '<h2 className="section-title" style={{ textAlign: \'left\', marginBottom: \'16px\' }}>\n            {title}\n          </h2>\n          <div style={{ width: \'40px\', height: \'2px\', backgroundColor: \'var(--color-primary)\', marginBottom: \'40px\' }}></div>'
);
fs.writeFileSync('src/components/CasesBlock.tsx', casesCode);


// 3. Fix page.tsx
let pageCode = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', 'utf8');

// Replace CasesBlock
const casesStart = pageCode.indexOf('<CasesBlock');
if (casesStart > -1) {
    const casesEnd = pageCode.indexOf('/>', casesStart) + 2;
    const newCasesBlock = `<CasesBlock 
        title="Примеры из практики"
        showAllLink="#"
        showDemoWarning={true}
        cases={[
          {
            category: "Военное право",
            title: "[Кейс 1: Пример заголовка дела]",
            problem: "Здесь будет размещено реальное дело из практики по защите прав военнослужащего.",
            action: "Текст на этапе макета является заглушкой и будет заменен после согласования.",
            result: "[Ключевой результат]",
            isDemo: true
          },
          {
            category: "Военное право",
            title: "[Кейс 2: Пример заголовка дела]",
            problem: "Здесь будет размещено реальное дело из практики по защите прав военнослужащего.",
            action: "Текст на этапе макета является заглушкой и будет заменен после согласования.",
            result: "[Ключевой результат]",
            isDemo: true
          },
          {
            category: "Военное право",
            title: "[Кейс 3: Пример заголовка дела]",
            problem: "Здесь будет размещено реальное дело из практики по защите прав военнослужащего.",
            action: "Текст на этапе макета является заглушкой и будет заменен после согласования.",
            result: "[Ключевой результат]",
            isDemo: true
          }
        ]}
      />`;
    pageCode = pageCode.substring(0, casesStart) + newCasesBlock + pageCode.substring(casesEnd);
}

// Replace Urgent Help block
const urgentStart = pageCode.indexOf('<h2 className="section-title text-center" style={{ marginBottom: \'24px\', textAlign: \'center\' }}>\n            Если помощь нужна прямо сейчас');
if (urgentStart > -1) {
    const urgentEnd = pageCode.indexOf('</p>', urgentStart) + 4;
    const newUrgent = `<h2 className="section-title" style={{ marginBottom: '16px', textAlign: 'left' }}>
            Если помощь нужна прямо сейчас
          </h2>
          <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)', marginBottom: '24px' }}></div>
          <p style={{ textAlign: 'left', color: 'var(--color-text-secondary)', fontSize: '16px', maxWidth: '700px', margin: '0 0 40px 0', lineHeight: 1.6 }}>
            Ниже — типичные ситуации, в которых откладывать обращение за юридической помощью опасно. Чем раньше подключится профильный специалист, тем больше возможностей для защиты ваших прав.
          </p>`;
    pageCode = pageCode.substring(0, urgentStart) + newUrgent + pageCode.substring(urgentEnd);
}

// Replace If Not In List Block
const remoteStart = pageCode.indexOf('<section className="section bg-cream">');
if (remoteStart > -1) {
    const remoteEnd = pageCode.indexOf('</section>', remoteStart) + 10;
    const newRemote = `<section className="section bg-cream" id="remote">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'flex-start' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h2 className="section-title" style={{ fontSize: '32px', marginBottom: '16px', textAlign: 'left' }}>
                Если вашей ситуации нет в списке
              </h2>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)', marginBottom: '24px' }}></div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '12px' }}>
                Необязательно самостоятельно определять вид услуги.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '32px' }}>
                Опишите обстоятельства — мы разберём ситуацию,<br />
                уточним необходимые документы и определим,<br />
                какой специалист должен подключиться.
              </p>
              <div style={{ marginTop: 'auto' }}>
                <a href="#form" className="btn btn-primary" style={{ textDecoration: 'none', border: '0' }}>Описать ситуацию</a>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '24px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', textAlign: 'left' }}>
                Что можно сделать дистанционно
              </h3>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)', marginBottom: '24px' }}></div>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ color: 'var(--color-primary)', marginTop: '2px' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <span style={{ fontSize: '16px', color: 'var(--color-text-main)' }}>Провести первичную консультацию</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ color: 'var(--color-primary)', marginTop: '2px' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <span style={{ fontSize: '16px', color: 'var(--color-text-main)' }}>Изучить документы</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ color: 'var(--color-primary)', marginTop: '2px' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <span style={{ fontSize: '16px', color: 'var(--color-text-main)' }}>Подготовить обращения и жалобы</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ color: 'var(--color-primary)', marginTop: '2px' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <span style={{ fontSize: '16px', color: 'var(--color-text-main)' }}>Определить порядок дальнейших действий</span>
                  </li>
              </ul>
              
              <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)', padding: '16px', background: 'var(--color-white)', borderRadius: '4px', fontStyle: 'italic', borderLeft: '4px solid var(--color-primary)' }}>
                Возможность полностью дистанционной работы зависит от характера дела и необходимости личного участия адвоката или юриста.
              </div>
            </div>
          </div>
        </div>
      </section>`;
    pageCode = pageCode.substring(0, remoteStart) + newRemote + pageCode.substring(remoteEnd);
}

fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', pageCode);

console.log("Done successfully fixing layout to left-aligned with golden lines, fixing 3 cases, restoring Specialist Name!");
