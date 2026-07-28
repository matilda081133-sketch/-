const fs = require('fs');
let file = 'src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Text brighter
content = content.replace(/color: 'rgba\\(255,255,255,0.9\\)'/g, "color: '#ffffff', fontWeight: 600");
content = content.replace(/color: 'rgba\\(255, 255, 255, 0.9\\)'/g, "color: '#ffffff', fontWeight: 600");

// 2. SOCH cards layout match
content = content.replace(
  /<section className="section bg-cream">[\s\S]*?<h2 className="section-title" style={{ textAlign: 'center', marginBottom: '16px' }}>В каких ситуациях нужна помощь адвоката<\/h2>[\s\S]*?<div style={{ display: 'grid', gridTemplateColumns: 'repeat\\(auto-fit, minmax\\(300px, 1fr\\)\\)', gap: '24px' }}>/,
  `      <section className="section" style={{ background: 'var(--gradient-cream)' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '16px' }}>В каких ситуациях нужна помощь адвоката</h2>
          <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)', maxWidth: '800px', margin: '0 auto 40px auto', lineHeight: 1.6 }}>
            Обстоятельства дел о самовольном оставлении части различаются: значение имеют срок и причины отсутствия, статус военнослужащего, стадия проверки или расследования и уже данные объяснения. Ниже — ситуации, в которых важно получить индивидуальную правовую&nbsp;оценку.
          </p>
          
          <div className="grid grid-3" style={{ gap: '30px' }}>`
);

// 3. Add 2026 text
// We'll search for the Dzerzhirstvo block
let parts = content.split('Чем СОЧ отличается от дезертирства');
if (parts.length > 1) {
  // Find the end of that block. It ends with </div></div></div>
  let rightSide = parts[1];
  let searchStr = '</div>\\n                </div>\\n              </div>';
  let insertIndex = rightSide.indexOf('</div>\\n                </div>\\n              </div>');
  
  if (insertIndex === -1) {
     searchStr = '</div>\\n                </div>';
     insertIndex = rightSide.indexOf(searchStr);
  }
  
  if (insertIndex !== -1) {
    insertIndex += searchStr.length;
    const newSection = `
              
              <div style={{ height: '1px', background: 'var(--color-border)', margin: '0 40px' }}></div>
              
              {/* Отдельные случаи */}
              <div style={{ padding: '40px' }}>
                <h3 style={{ fontSize: '22px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px' }}>Отдельные случаи, введённые с 2026 года</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: 1.7, margin: 0 }}>
                  Части 2.2, 3.2 и 6 статьи 337 УК РФ устанавливают повышенную ответственность для отдельных лиц, ранее условно освобождённых от наказания по статье 80.2 УК РФ либо по делам которых производство приостанавливалось по ходатайству командования. Применимость этих норм требует отдельной проверки адвокатом.
                </p>
              </div>`;
              
    content = parts[0] + 'Чем СОЧ отличается от дезертирства' + rightSide.slice(0, insertIndex) + newSection + rightSide.slice(insertIndex);
  } else {
    console.log("Could not find insertion point!");
  }
}

// 4. Remove rounded corners for this specific large card block
content = content.replace(/borderRadius: '4px'/g, "borderRadius: '0'");

fs.writeFileSync(file, content);
console.log('Fixed everything');
