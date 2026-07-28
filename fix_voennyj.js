const fs = require('fs');
let content = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', 'utf8');

// Normalize line endings
content = content.replace(/\r\n/g, '\n');

// Fix 1: Remove 'other' card
content = content.replace(
  /    \{\n      title: 'Не нашли свою ситуацию\?',\n      desc: 'Необязательно самостоятельно определять, какая именно услуга вам нужна\. Кратко опишите обстоятельства — мы изучим вопрос и подскажем, какой специалист сможет помочь\.',\n      link: '#form',\n      slug: 'other'\n    \}\n  \];/,
  '  ];'
);

// Fix 3: Move CtaCard into grid
content = content.replace(
  /          <\/div>\n          <CtaCard \n            title=\"Не нашли свою ситуацию\?\"\n            subtitle=\"Необязательно самостоятельно определять, какая именно услуга вам нужна\. Кратко опишите обстоятельства — мы изучим вопрос и подскажем, какой специалист сможет помочь\.\"\n            buttonText=\"Описать ситуацию\"\n            buttonLink=\"#form\"\n          \/>\n\n        <\/div>\n      <\/section>/,
  `          </div>
          {/* CtaCard в сетке */}
          <div className="grid grid-2" style={{ marginTop: '24px' }}>
            <div style={{ gridColumn: '1 / -1', display: 'flex' }}>
              <CtaCard 
                title="Не нашли свою ситуацию?"
                subtitle="Необязательно самостоятельно определять, какая именно услуга вам нужна. Кратко опишите обстоятельства — мы изучим вопрос и подскажем, какой специалист сможет помочь."
                buttonText="Описать ситуацию"
                buttonLink="#form"
                style={{ marginTop: 0, width: '100%', borderTop: '3px solid var(--color-primary)' }}
              />
            </div>
          </div>
        </div>
      </section>`
);

// Fix 4: Restore 'Описать ситуацию' link as button and add <hr/> divider
content = content.replace(
  /            <p style=\{\{ fontSize: '15px', color: 'var\(--color-text-secondary\)', margin: 0 \}\}>\n              \+7 \(910\) 350-31-11 • Перезвоним в течение 15 минут в рабочее время\n            <\/p>\n          <\/div>\n        <\/div>\n      \{\/\* 8\. Другие вопросы и дистанционная помощь \*\/\}\n      <div style=\{\{ marginTop: '80px' \}\}>/,
  `            <a href="#form" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '16px' }}>
              Описать ситуацию
            </a>
          </div>
        </div>
        
        {/* Разделитель */}
        <div className="container" style={{ marginTop: '60px', marginBottom: '20px' }}>
          <div style={{ height: '1px', background: 'var(--color-border)', width: '100%' }}></div>
        </div>

      {/* 8. Другие вопросы и дистанционная помощь */}
      <div style={{ marginTop: '40px' }}>`
);

fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', content);
console.log('Fixed page.tsx again!');
