const fs = require('fs');
let page = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', 'utf8');

const oldStr = `<h2 className="section-title" style={{ textAlign: 'center', marginBottom: '16px' }}>Как адвокат выстраивает защиту</h2>
          <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)', maxWidth: '800px', margin: '0 auto 40px auto', lineHeight: 1.6 }}>
            Единой позиции для всех дел о самовольном оставлении части не существует. Адвокат сопоставляет обстоятельства отсутствия, документы, процессуальный статус военнослужащего и материалы дела, после чего определяет объём помощи и последовательность защиты.
          </p>`;

const oldStrWin = oldStr.replace(/\n/g, '\r\n');

const newStr = `<h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>Как адвокат выстраивает защиту</h2>
          <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--color-gold)', marginBottom: '24px' }}></div>
          <p style={{ textAlign: 'left', color: 'var(--color-text-secondary)', maxWidth: '800px', marginBottom: '40px', lineHeight: 1.6 }}>
            Единой позиции для всех дел о самовольном оставлении части не существует. Адвокат сопоставляет обстоятельства отсутствия, документы, процессуальный статус военнослужащего и материалы дела, после чего определяет объём помощи и последовательность защиты.
          </p>`;

page = page.replace(oldStr, newStr);
page = page.replace(oldStrWin, newStr);

fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', page, 'utf8');
console.log('Fixed SOCH "Как адвокат" layout');
