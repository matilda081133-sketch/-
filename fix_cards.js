const fs = require('fs');

const file = 'src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. "В каких ситуациях нужна помощь адвоката"
const oldSituationsRegex = /<div style=\{\{\s*display:\s*'grid',\s*gridTemplateColumns:\s*'repeat\(auto-fit,\s*minmax\(300px,\s*1fr\)\)',\s*gap:\s*'24px'\s*\}\}>[\s\S]*?<style dangerouslySetInnerHTML=\{\{__html: `[\s\S]*?`\}\} \/>/g;

const newSituations = `<div className="grid grid-3" style={{ gap: '24px' }}>
            {[
              { title: 'Военнослужащий находится вне части', desc: 'Неясно, возбуждено ли уголовное дело, объявлен ли военнослужащий в розыск и как может быть квалифицирован период отсутствия.' },
              { title: 'Военнослужащего задержали', desc: 'Родственникам неизвестны его процессуальный статус, место нахождения и действия, которые уже проводят следственные органы.' },
              { title: 'Вызывают для объяснений или на допрос', desc: 'До процессуальных действий необходимо разобраться в обстоятельствах и определить позицию с учётом уже имеющихся документов и сведений.' },
              { title: 'Решается вопрос о заключении под стражу', desc: 'Суд будет оценивать материалы дела и доводы сторон при выборе меры пресечения. Адвокату важно подключиться до заседания или как можно раньше.' },
              { title: 'Рассматривается добровольная явка', desc: 'Нужно оценить обстоятельства отсутствия, проверить документы и определить порядок юридического сопровождения применительно к конкретному делу.' },
              { title: 'Дело уже передано в суд', desc: 'Требуется изучить обвинение, доказательства и ранее данные показания, чтобы выстроить позицию защиты в судебном разбирательстве.' }
            ].map((item, i) => (
              <div 
                key={i}
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
                  {item.title}
                </h3>
                <p style={{ margin: '0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5, flexGrow: 1 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>`;

if (oldSituationsRegex.test(content)) {
  content = content.replace(oldSituationsRegex, newSituations);
  console.log('REPLACED SITUATIONS');
} else {
  console.log('FAILED TO MATCH SITUATIONS');
}

// 2. "Другие услуги военного адвоката"
const oldOtherServicesRegex = /<div className=\"grid grid-3\" style=\{\{\s*gap:\s*'30px'\s*\}\}>\s*<a href=\"\/grazhdanam\/voennyj-yurist\/\" data-analytics=\"military_service_click\" style=\{\{\s*textDecoration:\s*'none',\s*display:\s*'block'\s*\}\}>\s*<div[\s\S]*?className=\"card service-card\"[\s\S]*?style=\{\{.*?\}\}[\s\S]*?>\s*<h3.*?>\s*Военный адвокат\s*<\/h3>\s*<p.*?>\s*Защита прав военнослужащих\s*<\/p>\s*<div.*?className=\"card-arrow\"[\s\S]*?<\/svg>\s*<\/div>\s*<\/div>\s*<\/a>\s*<\/div>/g;

const newOtherServices = `<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            <a href="/grazhdanam/voennyj-yurist/" data-analytics="military_service_click" style={{ textDecoration: 'none', display: 'block' }}>
              <div style={{
                background: 'var(--color-cream)',
                padding: '32px',
                textAlign: 'left',
                fontWeight: 600,
                color: 'var(--color-deep-blue)',
                borderBottom: '4px solid var(--color-gold)',
                fontSize: '18px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <div>Военный адвокат</div>
                <div style={{ fontSize: '14px', fontWeight: 400, color: 'var(--color-text-secondary)' }}>Защита прав военнослужащих</div>
              </div>
            </a>
          </div>`;

if (oldOtherServicesRegex.test(content)) {
  content = content.replace(oldOtherServicesRegex, newOtherServices);
  console.log('REPLACED OTHER SERVICES');
} else {
  console.log('FAILED TO MATCH OTHER SERVICES');
}

fs.writeFileSync(file, content);
