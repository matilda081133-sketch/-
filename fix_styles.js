const fs = require('fs');

// 1. Fix page.tsx blocks (Left alignment, Golden lines, exact 3 Cases, exact IfNot text)
let code = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', 'utf8');

// CasesBlock limit to 3 cases
const startCases = code.indexOf('<CasesBlock');
if (startCases > -1) {
    const endCases = code.indexOf(']}', startCases) + 12;
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
    code = code.substring(0, startCases) + newCasesBlock + code.substring(code.indexOf('/>', endCases) + 2);
}

// "Если помощь нужна прямо сейчас" alignment and golden line
const urgentTitleOld = `<h2 className="section-title text-center" style={{ marginBottom: '24px', textAlign: 'center' }}>
            Если помощь нужна прямо сейчас
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)', fontSize: '16px', maxWidth: '700px', margin: '0 auto 40px auto', lineHeight: 1.6 }}>`;
          
const urgentTitleNew = `<h2 className="section-title" style={{ marginBottom: '16px', textAlign: 'left' }}>
            Если помощь нужна прямо сейчас
          </h2>
          <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)', marginBottom: '24px' }}></div>
          <p style={{ textAlign: 'left', color: 'var(--color-text-secondary)', fontSize: '16px', maxWidth: '700px', margin: '0 0 40px 0', lineHeight: 1.6 }}>`;
code = code.replace(urgentTitleOld, urgentTitleNew);


// "Если вашей ситуации нет в списке" EXACT update and alignment
const ifNotMatch = code.match(/Если вашей ситуации <br \/>нет в списке[\s\S]*?<div style=\{\{ position: 'relative', zIndex: 1, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyCont/);
if (ifNotMatch) {
    const ifNotNew = `Если вашей ситуации <br />нет в списке
              </h2>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)', marginBottom: '24px' }}></div>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '32px' }}>
                Необязательно самостоятельно определять вид услуги.<br />
                Опишите обстоятельства — мы разберём ситуацию,<br />
                уточним необходимые документы и определим,<br />
                какой специалист должен подключиться.
              </p>
              <div style={{ marginTop: 'auto' }}>
                <a href="#form" className="btn btn-primary" style={{ textDecoration: "none", border: "0" }}>Описать ситуацию</a>
              </div>
            </div>

            {/* Правая колонка */}
            <div style={{ padding: '20px 0 0 0', color: 'var(--color-text-main)', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, opacity: 0.03, transform: 'translate(20%, -20%)' }}>
                <svg width="150" height="150" viewBox="0 0 24 24" fill="var(--color-deep-blue)"><path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <h3 style={{ fontSize: '24px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', position: 'relative', zIndex: 1 }}>
                Что можно сделать дистанционно
              </h3>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)', marginBottom: '24px', position: 'relative', zIndex: 1 }}></div>
              <div style={{ position: 'relative', zIndex: 1, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyCont`;
              
    code = code.replace(ifNotMatch[0], ifNotNew);
    
    // Replace list items in the "if not" right column
    const ulStart = code.indexOf('<ul style={{ listStyle: \'none\'', ifNotMatch.index);
    const ulEnd = code.indexOf('</ul>', ulStart) + 5;
    const newUl = `<ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ color: 'var(--color-primary)', marginTop: '2px' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <span>Провести первичную консультацию</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ color: 'var(--color-primary)', marginTop: '2px' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <span>Изучить документы</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ color: 'var(--color-primary)', marginTop: '2px' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <span>Подготовить обращения и жалобы</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ color: 'var(--color-primary)', marginTop: '2px' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <span>Определить порядок дальнейших действий</span>
                  </li>
                </ul>`;
    code = code.substring(0, ulStart) + newUl + code.substring(ulEnd);
    
    // Replace the remote disclaimer note
    const noteStart = code.indexOf('<div style={{ fontSize: \'14px\'', ulStart);
    const noteEnd = code.indexOf('</div>', noteStart) + 6;
    const newNote = `<div style={{ fontSize: '14px', color: 'var(--color-text-secondary)', padding: '16px', background: 'var(--color-cream)', borderRadius: '4px', fontStyle: 'italic' }}>
                  Возможность полностью дистанционной работы зависит от характера дела и необходимости личного участия адвоката или юриста.
                </div>`;
    code = code.substring(0, noteStart) + newNote + code.substring(noteEnd);
}

fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', code);

// 2. Fix SpecialistBlock component alignments and missing name/position render!
let specCode = fs.readFileSync('src/components/SpecialistBlock.tsx', 'utf8');

// Title alignment
specCode = specCode.replace(
  '<h2 className="section-title text-center" style={{ marginBottom: \'40px\' }}>\n            {title}\n          </h2>',
  '<h2 className="section-title" style={{ textAlign: \'left\', marginBottom: \'16px\' }}>\n            {title}\n          </h2>\n          <div style={{ width: \'40px\', height: \'2px\', backgroundColor: \'var(--color-primary)\', marginBottom: \'40px\' }}></div>'
);

// Insert name and position rendering right before the description map
const descStart = specCode.indexOf('<div style={{ marginBottom: \'32px\' }}>');
if (descStart > -1) {
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

// 3. Fix CasesBlock alignment
let casesCode = fs.readFileSync('src/components/CasesBlock.tsx', 'utf8');
casesCode = casesCode.replace(
  '<h2 className="section-title text-center" style={{ marginBottom: \'40px\' }}>\n            {title}\n          </h2>',
  '<h2 className="section-title" style={{ textAlign: \'left\', marginBottom: \'16px\' }}>\n            {title}\n          </h2>\n          <div style={{ width: \'40px\', height: \'2px\', backgroundColor: \'var(--color-primary)\', marginBottom: \'40px\' }}></div>'
);
fs.writeFileSync('src/components/CasesBlock.tsx', casesCode);

console.log("Done fixing the alignments and blocks!");
