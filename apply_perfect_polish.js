const fs = require('fs');

// 1. CasesBlock.tsx
let casesCode = fs.readFileSync('src/components/CasesBlock.tsx', 'utf8');

casesCode = casesCode.replace(
  /<div className="flex justify-between" style=\{\{ alignItems: 'flex-end', marginBottom: '50px', flexWrap: 'wrap', gap: '20px' \}\}>[\s\S]*?<h2[^>]*>[\s\S]*?<\/h2>/,
  `<div className="flex justify-between" style={{ alignItems: 'flex-end', marginBottom: '50px', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '16px' }}>
              {title}
            </h2>
            <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>`
);

if (!casesCode.includes('.cases-card-custom-shadow')) {
  casesCode = casesCode.replace(
    '</section>',
    `  <style dangerouslySetInnerHTML={{__html: \`
        .cases-card-custom-shadow {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
          border: 1px solid rgba(0,0,0,0.05);
        }
      \`}} />\n    </section>`
  );
  casesCode = casesCode.replace(
    /className="card[^"]*"/g,
    (match) => match.replace('"', ' cases-card-custom-shadow"')
  );
  if (!casesCode.includes('cases-card-custom-shadow')) {
      casesCode = casesCode.replace(/<div\s+style=\{\{\s*height:\s*'100%',\s*display:\s*'flex',/g, '<div className="cases-card-custom-shadow" style={{ height: \'100%\', display: \'flex\',');
  }
}
fs.writeFileSync('src/components/CasesBlock.tsx', casesCode);


// 2. ProcessBlock.tsx
let processCode = fs.readFileSync('src/components/ProcessBlock.tsx', 'utf8');
processCode = processCode.replace(
  /<h2 style=\{\{\s*fontFamily: 'var\(--font-serif\)', fontSize: '42px', color: 'var\(--color-deep-blue\)', marginBottom: '24px'\s*\}\}>/g,
  '<h2 style={{ fontFamily: \'var(--font-serif)\', fontSize: \'42px\', color: \'var(--color-deep-blue)\', marginBottom: \'24px\', textAlign: \'center\' }}>'
);
processCode = processCode.replace(
  /<p style=\{\{\s*fontSize: '18px', color: 'var\(--color-text-secondary\)', lineHeight: 1\.6, maxWidth: '800px'\s*\}\}>/g,
  '<p style={{ fontSize: \'18px\', color: \'var(--color-text-secondary)\', lineHeight: 1.6, maxWidth: \'800px\', textAlign: \'center\', margin: \'0 auto\' }}>'
);
fs.writeFileSync('src/components/ProcessBlock.tsx', processCode);


// 3. PricingBlock.tsx
let pricingCode = fs.readFileSync('src/components/PricingBlock.tsx', 'utf8');
pricingCode = pricingCode.replace(
  /<h2 style=\{\{\s*marginTop: 0,\s*fontSize: '48px',\s*fontFamily: 'var\(--font-serif\)',\s*color: 'var\(--color-deep-blue\)',\s*marginBottom: '20px'\s*\}\}>/g,
  '<h2 style={{ marginTop: 0, fontSize: \'48px\', fontFamily: \'var(--font-serif)\', color: \'var(--color-deep-blue)\', marginBottom: \'20px\', textAlign: \'center\' }}>'
);
pricingCode = pricingCode.replace(
  /<p style=\{\{\s*fontSize: '18px',\s*color: 'var\(--color-text-secondary\)',\s*maxWidth: '600px',\s*lineHeight: 1\.6\s*\}\}>/g,
  '<p style={{ fontSize: \'18px\', color: \'var(--color-text-secondary)\', maxWidth: \'600px\', lineHeight: 1.6, textAlign: \'center\', margin: \'0 auto\' }}>'
);
fs.writeFileSync('src/components/PricingBlock.tsx', pricingCode);


// 4. page.tsx
let pageCode = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', 'utf8');

// Ensure EXACTLY 3 DEMO cases
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

// Left align Urgent Help block
const urgentRegex = /<h2 className="section-title"[^>]*>\s*Если помощь нужна прямо сейчас\s*<\/h2>[\s\S]*?<p[^>]*>[\s\S]*?Чем раньше подключится профильный специалист, тем больше возможностей для защиты ваших прав.\s*<\/p>/;
if (pageCode.match(urgentRegex)) {
    const newUrgent = `<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '40px' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '16px' }}>
              Если помощь нужна прямо сейчас
            </h2>
            <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)', marginBottom: '16px' }}></div>
            <p style={{ textAlign: 'left', color: 'var(--color-text-secondary)', fontSize: '16px', maxWidth: '700px', margin: '0', lineHeight: 1.6 }}>
              Ниже — типичные ситуации, в которых откладывать обращение за юридической помощью опасно. Чем раньше подключится профильный специалист, тем больше возможностей для защиты ваших прав.
            </p>
          </div>`;
    pageCode = pageCode.replace(urgentRegex, newUrgent);
}

// Replace Remote Help block (using the Desertion-style numbered list)
const remoteRegex = /<section className="section bg-cream"[^>]*>[\s\S]*?Если вашей ситуации[\s\S]*?<\/section>/;
if (pageCode.match(remoteRegex)) {
    const newRemote = `<section className="section bg-cream" id="remote">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'flex-start' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h2 className="section-title" style={{ fontSize: '32px', marginBottom: '16px', textAlign: 'left' }}>
                Если вашей ситуации нет в списке
              </h2>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)', marginBottom: '24px' }}></div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '12px', textAlign: 'left' }}>
                Необязательно самостоятельно определять вид услуги.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '32px', textAlign: 'left' }}>
                Опишите обстоятельства — мы разберём ситуацию,<br />
                уточним необходимые документы и определим,<br />
                какой специалист должен подключиться.
              </p>
              <div style={{ marginTop: 'auto', textAlign: 'left' }}>
                <a href="#form" className="btn btn-primary" style={{ textDecoration: 'none', border: '0' }}>Описать ситуацию</a>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '24px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', textAlign: 'left' }}>
                Что можно сделать дистанционно
              </h3>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)', marginBottom: '24px' }}></div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
                <div>
                  <h4 style={{ color: 'var(--color-primary)', marginBottom: '4px', fontSize: '18px', fontWeight: 600, textAlign: 'left' }}>1. Провести первичную консультацию</h4>
                </div>
                <div>
                  <h4 style={{ color: 'var(--color-primary)', marginBottom: '4px', fontSize: '18px', fontWeight: 600, textAlign: 'left' }}>2. Изучить документы</h4>
                </div>
                <div>
                  <h4 style={{ color: 'var(--color-primary)', marginBottom: '4px', fontSize: '18px', fontWeight: 600, textAlign: 'left' }}>3. Подготовить обращения и жалобы</h4>
                </div>
                <div>
                  <h4 style={{ color: 'var(--color-primary)', marginBottom: '4px', fontSize: '18px', fontWeight: 600, textAlign: 'left' }}>4. Определить порядок дальнейших действий</h4>
                </div>
              </div>
              
              <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)', padding: '16px', background: 'var(--color-white)', borderRadius: '4px', fontStyle: 'italic', borderLeft: '4px solid var(--color-primary)', textAlign: 'left' }}>
                Возможность полностью дистанционной работы зависит от характера дела и необходимости личного участия адвоката или юриста.
              </div>
            </div>
          </div>
        </div>
      </section>`;
    pageCode = pageCode.replace(remoteRegex, newRemote);
}

// Left align Directions of Help (Направления помощи) heading
const dirRegex = /<h2 className="section-title"[^>]*>\s*Направления помощи\s*<\/h2>[\s\S]*?<p[^>]*>[\s\S]*?Опыт[\s\S]*?конкретных проблем\.\s*<\/p>/;
if (pageCode.match(dirRegex)) {
    const newDir = `<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '40px' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '16px' }}>
              Направления помощи
            </h2>
            <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)', marginBottom: '16px' }}></div>
            <p style={{ textAlign: 'left', color: 'var(--color-text-secondary)', fontSize: '18px', maxWidth: '800px', margin: '0' }}>
              Опыт решения специфических задач в рамках военной службы позволяет нам находить оптимальные правовые пути для конкретных проблем.
            </p>
          </div>`;
    pageCode = pageCode.replace(dirRegex, newDir);
}

fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', pageCode);
console.log('Final fixes applied perfectly!');
