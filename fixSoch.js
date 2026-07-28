const fs = require('fs');
let file = 'src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Update section background and grid
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

// Update font weight for Что сообщить при первом обращении
content = content.replace(/color: '#ffffff', alignItems: 'flex-start'/g, "color: '#ffffff', fontWeight: 600, alignItems: 'flex-start'");
content = content.replace(/color: '#ffffff', lineHeight: 1.7/g, "color: '#ffffff', fontWeight: 600, lineHeight: 1.7");

fs.writeFileSync(file, content);
console.log('Fixed SOCH page styles');
