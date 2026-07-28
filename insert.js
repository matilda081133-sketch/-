const fs = require('fs');
let file = 'src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/borderRadius: '4px'/g, "borderRadius: '0'");
content = content.replace(/borderRadius: '0 4px 4px 0'/g, "borderRadius: '0'");

const parts = content.split('Чем СОЧ отличается от дезертирства');
if (parts.length > 1) {
  const insertIndex = parts[1].indexOf('</div>\\n              </div>') + '</div>\\n              </div>'.length;
  
  const newSection = `
              
              <div style={{ height: '1px', background: 'var(--color-border)', margin: '0 40px' }}></div>
              
              <div style={{ padding: '40px' }}>
                <h3 style={{ fontSize: '22px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px' }}>Отдельные случаи, введённые с 2026 года</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: 1.7, margin: 0 }}>
                  Части 2.2, 3.2 и 6 статьи 337 УК РФ устанавливают повышенную ответственность для отдельных лиц, ранее условно освобождённых от наказания по статье 80.2 УК РФ либо по делам которых производство приостанавливалось по ходатайству командования. Применимость этих норм требует отдельной проверки адвокатом.
                </p>
              </div>`;
              
  content = parts[0] + 'Чем СОЧ отличается от дезертирства' + parts[1].slice(0, insertIndex) + newSection + parts[1].slice(insertIndex);
  fs.writeFileSync(file, content);
  console.log('Inserted new block');
} else {
  console.log('Failed to insert');
}
