const fs = require('fs');

// 1. CasesBlock.tsx
let casesCode = fs.readFileSync('src/components/CasesBlock.tsx', 'utf8');
casesCode = casesCode.replace(
  /backgroundColor: 'var\(--color-primary\)'/g,
  "backgroundColor: '#E5C494'"
);
fs.writeFileSync('src/components/CasesBlock.tsx', casesCode);

// 2. page.tsx
let pageCode = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', 'utf8');
pageCode = pageCode.replace(
  /backgroundColor: 'var\(--color-primary\)'/g,
  "backgroundColor: '#E5C494'"
);

// Fix Urgent align
const urgentStart = pageCode.indexOf('<h2 className="section-title text-center" style={{ marginBottom: \'24px\', textAlign: \'center\' }}>');
if (urgentStart > -1) {
    const endStr = 'ваших прав.\n          </p>';
    const urgentEnd = pageCode.indexOf(endStr, urgentStart) + endStr.length;
    
    if (pageCode.substring(urgentStart, urgentEnd).includes('Если помощь нужна прямо сейчас')) {
        const newUrgent = `<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '40px' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '16px' }}>
              Если помощь нужна прямо сейчас
            </h2>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#E5C494', marginBottom: '16px' }}></div>
            <p style={{ textAlign: 'left', color: 'var(--color-text-secondary)', fontSize: '16px', maxWidth: '700px', margin: '0', lineHeight: 1.6 }}>
              Ниже — типичные ситуации, в которых откладывать обращение за юридической помощью опасно. Чем раньше подключится профильный специалист, тем больше возможностей для защиты ваших прав.
            </p>
          </div>`;
        pageCode = pageCode.substring(0, urgentStart) + newUrgent + pageCode.substring(urgentEnd);
        console.log("Urgent align fixed!");
    }
} else {
    console.log("Urgent start not found");
}

fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', pageCode);
console.log("Gold separators fixed!");
