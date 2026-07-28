const fs = require('fs');

// 1. Fix CasesBlock.tsx
let casesCode = fs.readFileSync('src/components/CasesBlock.tsx', 'utf8');
casesCode = casesCode.replace(
  '<h2 className="section-title text-center" style={{ marginBottom: \'40px\' }}>\n            {title}\n          </h2>',
  '<div style={{ display: \'flex\', flexDirection: \'column\', alignItems: \'flex-start\', marginBottom: \'40px\' }}>\n            <h2 className="section-title" style={{ textAlign: \'left\', marginBottom: \'16px\' }}>\n              {title}\n            </h2>\n            <div style={{ width: \'40px\', height: \'2px\', backgroundColor: \'var(--color-primary)\' }}></div>\n          </div>'
);
fs.writeFileSync('src/components/CasesBlock.tsx', casesCode);


// 2. Fix page.tsx blocks
let pageCode = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', 'utf8');

// A. Направления помощи (Directions)
const dirTitleOld = `<h2 className="section-title text-center" style={{ marginBottom: '16px' }}>
            Направления помощи
          </h2>
          <p className="text-center" style={{ color: 'var(--color-text-secondary)', fontSize: '18px', maxWidth: '800px', margin: '0 auto 60px auto' }}>`;
const dirTitleNew = `<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '40px' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '16px' }}>
              Направления помощи
            </h2>
            <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)', marginBottom: '16px' }}></div>
            <p style={{ textAlign: 'left', color: 'var(--color-text-secondary)', fontSize: '18px', maxWidth: '800px', margin: '0' }}>`;
pageCode = pageCode.replace(dirTitleOld, dirTitleNew);

// B. Если помощь нужна прямо сейчас (Urgent Help)
const urgentTitleOld = `<h2 className="section-title text-center" style={{ marginBottom: '24px', textAlign: 'center' }}>
            Если помощь нужна прямо сейчас
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)', fontSize: '16px', maxWidth: '700px', margin: '0 auto 40px auto', lineHeight: 1.6 }}>`;
const urgentTitleNew = `<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '40px' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '16px' }}>
              Если помощь нужна прямо сейчас
            </h2>
            <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)', marginBottom: '16px' }}></div>
            <p style={{ textAlign: 'left', color: 'var(--color-text-secondary)', fontSize: '16px', maxWidth: '700px', margin: '0', lineHeight: 1.6 }}>`;
pageCode = pageCode.replace(urgentTitleOld, urgentTitleNew);

// C. Если вашей ситуации нет в списке (Remote Help)
// In the current `ec7119ac` version, this block might be centered. Let's find it.
const remoteTitleOldRegex = /<h2 className="section-title text-center" style=\{\{ marginBottom: '24px' \}\}>\s*Если вашей ситуации <br \/>нет в списке\s*<\/h2>\s*<p style=\{\{ textAlign: 'center'/;
if (pageCode.match(remoteTitleOldRegex)) {
    const remoteTitleNew = `<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '40px' }}>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '16px' }}>
                Если вашей ситуации нет в списке
              </h2>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)', marginBottom: '16px' }}></div>
              <p style={{ textAlign: 'left'`;
    pageCode = pageCode.replace(remoteTitleOldRegex, remoteTitleNew);
} else {
    console.log("Could not find Remote Help title with regex!");
}

// Ensure the Cases block has EXACTLY 3 DEMO cases (if the current one doesn't)
// Wait! `ec7119ac` CasesBlock HAS 2 DEMO cases! I will replace the CasesBlock!
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


fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', pageCode);

console.log("Alignments fixed!");
