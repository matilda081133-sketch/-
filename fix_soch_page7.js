const fs = require('fs');
let page = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', 'utf8');

// 1. В каких ситуациях нужна помощь адвоката
const oldSituationsHeader = `<h2 className="section-title" style={{ textAlign: 'center', marginBottom: '16px' }}>В каких ситуациях нужна помощь адвоката</h2>
          <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)', maxWidth: '800px', margin: '0 auto 40px auto', lineHeight: 1.6 }}>`;

const newSituationsHeader = `<h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>В каких ситуациях нужна помощь адвоката</h2>
          <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--color-gold)', marginBottom: '24px' }}></div>
          <p style={{ textAlign: 'left', color: 'var(--color-text-secondary)', maxWidth: '800px', marginBottom: '40px', lineHeight: 1.6 }}>`;

page = page.replace(oldSituationsHeader, newSituationsHeader);
page = page.replace(oldSituationsHeader.replace(/\n/g, '\r\n'), newSituationsHeader);

// 2. Адвокат по делам о самовольном оставлении части в Липецке
const oldH1 = `Адвокат по делам о самовольном оставлении части в Липецке`;
const newH1 = `Адвокат по делам <br/>о самовольном оставлении части в Липецке`;
page = page.replace(oldH1, newH1);

// 3. Военнослужащий находится вне части
const oldTitle = `title: 'Военнослужащий находится вне части'`;
const newTitle = `title: <>Военнослужащий находится <br/>вне части</>`;
page = page.replace(oldTitle, newTitle);

// 4. Вызывают для объяснений или на допрос
const oldTitle2 = `title: 'Вызывают для объяснений или на допрос'`;
const newTitle2 = `title: <>Вызывают для объяснений <br/>или на допрос</>`;
page = page.replace(oldTitle2, newTitle2);

// 5. Рассматривается добровольная явка
const oldTitle3 = `title: 'Рассматривается добровольная явка'`;
const newTitle3 = `title: <>Рассматривается <br/>добровольная явка</>`;
page = page.replace(oldTitle3, newTitle3);

fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', page, 'utf8');
console.log('Applied 5 fixes to SOCH page successfully.');
