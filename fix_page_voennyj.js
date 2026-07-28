const fs = require('fs');
const file = 'src/app/grazhdanam/voennyj-yurist/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Fix Section 7 (Если помощь нужна прямо сейчас)
// The background should be var(--gradient-cream) and title left-aligned.
content = content.replace(
  /<section className="section" style=\{\{ background: 'var\(--color-cream\)' \}\}>\s*<div className="container">\s*<h2 className="section-title text-center" style=\{\{ marginBottom: '24px', textAlign: 'center' \}\}>\s*Если помощь нужна прямо сейчас\s*<\/h2>\s*<p style=\{\{ textAlign: 'center', color: 'var\(--color-text-secondary\)', fontSize: '16px', maxWidth: '700px', margin: '0 auto 40px auto', lineHeight: 1\.6 \}\}>\s*Ниже — типичные ситуации, в которых откладывать обращение за юридической помощью опасно\. Чем раньше подключится профильный специалист, тем больше возможностей для защиты ваших прав\.\s*<\/p>/g,
  `<section className="section" style={{ background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ textAlign: 'left', marginBottom: '40px' }}>
            <h2 className="section-title" style={{ marginBottom: '24px', textAlign: 'left', display: 'inline-block' }}>
              Если помощь нужна прямо сейчас
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', maxWidth: '800px', margin: '0', lineHeight: 1.6, textAlign: 'left' }}>
              Ниже — типичные ситуации, в которых откладывать обращение<br />за юридической помощью опасно. Чем раньше подключится<br />профильный специалист, тем больше возможностей для защиты ваших прав.
            </p>
          </div>`
);

// 2. Fix Section 8 (Если вашей ситуации нет в списке)
// Rewrite it to exactly match the SOCH card styling!
const oldSection8 = /<section className="section bg-cream">\s*<div className="container remote-help-grid">[\s\S]*?<\/p>\s*<\/div>\s*<\/div>\s*<\/section>/;

const newSection8 = `{/* 8. Другие вопросы и дистанционная помощь */}
      <section className="section bg-cream">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '40px' }}>
            {/* Левая колонка */}
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', paddingTop: '20px' }}>
              <h2 className="section-title" style={{ fontSize: '32px', margin: '0 0 24px 0' }}>
                Если вашей ситуации <br />нет в списке
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '32px' }}>
                Необязательно самостоятельно определять вид услуги.<br />Опишите обстоятельства — мы разберём ситуацию,<br />уточним необходимые документы и определим,<br />какой специалист должен подключиться.
              </p>
              <div style={{ marginTop: 'auto' }}>
                <a href="#form" className="btn btn-primary" style={{ textDecoration: "none", border: "0" }}>Описать ситуацию</a>
              </div>
            </div>

            {/* Правая колонка */}
            <div style={{ background: 'var(--color-deep-blue)', padding: '40px', borderRadius: '4px', color: 'var(--color-white)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, opacity: 0.05, transform: 'translate(20%, -20%)' }}>
                <svg width="150" height="150" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <h3 style={{ fontSize: '24px', fontFamily: 'var(--font-serif)', color: '#D4B886', marginBottom: '24px', position: 'relative', zIndex: 1 }}>Что можно сделать дистанционно</h3>
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.7, marginBottom: '20px' }}>
                  Провести первичную консультацию<br />
                  Изучить документы<br />
                  Подготовить обращения и жалобы<br />
                  Определить порядок дальнейших действий
                </p>
                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '16px', borderLeft: '4px solid var(--color-gold)', fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, marginTop: 'auto' }}>
                  Возможность полностью дистанционной работы зависит от характера дела и необходимости личного участия адвоката или юриста.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>`;

content = content.replace(oldSection8, newSection8);


// 3. Fix the Contact Form at the bottom
const oldForm = /<div style=\{\{ display: 'flex', flexDirection: 'column', height: '100%' \}\}>\s*<h2 style=\{\{ fontSize: '36px', fontFamily: 'var\(--font-serif\)', color: 'var\(--color-deep-blue\)', marginBottom: '16px', lineHeight: 1\.2, marginTop: 0 \}\}>\s*Получите первичную оценку ситуации\s*<\/h2>\s*<p style=\{\{ color: 'var\(--color-text-secondary\)', fontSize: '16px', lineHeight: 1\.6, marginBottom: '24px', textWrap: 'balance' \}\}>\s*Кратко опишите, что произошло\. Мы определим срочность, уточним необходимые документы и подключим Дмитрия Сергеевича Конопкина либо другого специалиста с нужными полномочиями\.\s*<\/p>\s*<div style=\{\{ marginTop: 'auto', marginBottom: '64px' \}\}>\s*<div style=\{\{ color: 'var\(--color-primary\)', fontWeight: 600, fontSize: '16px', display: 'flex', alignItems: 'center', gap: '12px' \}\}>\s*<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16\.92v3a2 2 0 0 1-2\.18 2 19\.79 19\.79 0 0 1-8\.63-3\.07 19\.5 19\.5 0 0 1-6-6 19\.79 19\.79 0 0 1-3\.07-8\.67A2 2 0 0 1 4\.11 2h3a2 2 0 0 1 2 1\.72 12\.84 12\.84 0 0 0 \.7 2\.81 2 2 0 0 1-\.45 2\.11L8\.09 9\.91a16 16 0 0 0 6 6l1\.27-1\.27a2 2 0 0 1 2\.11-\.45 12\.84 12\.84 0 0 0 2\.81\.7A2 2 0 0 1 22 16\.92z"><\/path><\/svg>\s*Перезвоним в течение 15 минут в рабочее время\s*<\/div>\s*<\/div>\s*<\/div>\s*<div style=\{\{ display: 'flex', flexDirection: 'column', height: '100%' \}\}>\s*<ContactsForm title="Отправить обращение" subtitle="" \/>\s*<\/div>/g;

const newForm = `<div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  Связаться с нами
                </span>
              </div>

              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0 }}>
                Получите первичную <br />оценку ситуации
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Кратко опишите, что произошло. Мы определим срочность, уточним необходимые документы и подключим Дмитрия Сергеевича Конопкина либо другого специалиста с нужными полномочиями.
              </p>
              
              <div style={{ marginTop: '32px' }}>
                <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  Перезвоним в течение 15 минут в рабочее время
                </div>
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
              <div style={{ background: 'var(--gradient-cream)', padding: '40px', borderRadius: '0', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', border: '1px solid rgba(23, 50, 77, 0.1)', width: '100%' }}>
                <ContactsForm title="Отправьте заявку" subtitle="" />
              </div>
            </div>`;

content = content.replace(oldForm, newForm);

fs.writeFileSync(file, content);
console.log('Successfully fixed the page!');
