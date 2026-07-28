const fs = require('fs');

// 1. SpecialistBlock back to var(--gradient-cream)
const specFile = 'src/components/SpecialistBlock.tsx';
let specContent = fs.readFileSync(specFile, 'utf8');
specContent = specContent.replace(
  "background: 'radial-gradient(circle at 100% 50%, #EAF1F6 0%, transparent 60%), var(--color-cream)'",
  "background: 'var(--gradient-cream)'"
);
fs.writeFileSync(specFile, specContent);

// 2. page.tsx fixes
const pageFile = 'src/app/grazhdanam/voennyj-yurist/page.tsx';
let pageContent = fs.readFileSync(pageFile, 'utf8');

// a. Urgent Block background
const oldUrgentStart = `{/* 7. Срочный блок */}
      <section className="section" style={{ background: 'var(--color-cream)' }}>`;
const newUrgentStart = `{/* 7. Срочный блок */}
      <section className="section" style={{ background: 'var(--gradient-cream)' }}>`;
pageContent = pageContent.replace(oldUrgentStart, newUrgentStart);

// b. Remote Help Redesign
const oldRemoteRegex = /<div className="container remote-help-grid">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/;
const newRemoteGrid = `<div className="container">
          <div className="grid grid-2" style={{ gap: '40px' }}>
            {/* Левая колонка - Если вашей ситуации нет в списке */}
            <div style={{ display: 'flex', flexDirection: 'column', background: 'var(--color-white)', padding: '40px', borderRadius: '4px', borderTop: '4px solid var(--color-primary)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', height: '100%' }}>
              <h2 className="section-title" style={{ fontSize: '28px', margin: '0 0 24px 0' }}>
                Если вашей ситуации нет в списке
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '32px' }}>
                Необязательно самостоятельно определять вид услуги. Опишите обстоятельства — мы разберём ситуацию, уточним необходимые документы и определим, какой специалист должен подключиться.
              </p>
              <div style={{ marginTop: 'auto' }}>
                <a href="#form" className="btn btn-primary">Описать ситуацию</a>
              </div>
            </div>

            {/* Правая колонка - Что можно сделать дистанционно (Темная акцентная карточка) */}
            <div style={{ background: 'var(--color-deep-blue)', padding: '40px', borderRadius: '4px', color: 'var(--color-white)', position: 'relative', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, opacity: 0.05, transform: 'translate(20%, -20%)' }}>
                <svg width="150" height="150" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <h3 style={{ fontSize: '24px', fontFamily: 'var(--font-serif)', color: 'var(--color-white)', marginBottom: '24px', position: 'relative', zIndex: 1 }}>Что можно сделать дистанционно</h3>
              <div style={{ position: 'relative', zIndex: 1, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.7, margin: 0 }}>
                  Провести первичную консультацию, изучить документы, подготовить обращения и жалобы, определить порядок дальнейших действий. Возможность полностью дистанционной работы зависит от характера дела и необходимости личного участия адвоката или юриста.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>`;
if (pageContent.match(oldRemoteRegex)) {
  pageContent = pageContent.replace(oldRemoteRegex, newRemoteGrid);
} else {
  console.error("Failed to replace remote help grid");
}

// c. Final Form Block Redesign
const formRegex = /\{\/\*\ 12\.\ Финальная\ форма\ \*\/\}\s*<section[\s\S]*?<\/section>/;
const newFormBlock = `{/* 12. Финальная форма */}
      <section className="section bg-white" id="form" style={{ scrollMarginTop: '120px' }}>
        <div className="container">
          <div style={{ background: 'var(--gradient-cream)', padding: '60px', borderRadius: '4px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>
                Связаться с нами
              </span>
            </div>
            
            <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '24px', lineHeight: 1.2, marginTop: 0 }}>
              Получите первичную оценку ситуации
            </h2>
            
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: 1.6, maxWidth: '700px', margin: '0 auto 40px auto', textWrap: 'balance' }}>
              Кратко опишите, что произошло. Мы определим срочность, уточним необходимые документы и подключим Дмитрия Сергеевича Конопкина либо другого специалиста с нужными полномочиями.
            </p>
            
            <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
              <ContactsForm title="" subtitle="" />
            </div>
            
          </div>
        </div>
      </section>`;
if (pageContent.match(formRegex)) {
  pageContent = pageContent.replace(formRegex, newFormBlock);
} else {
  console.error("Failed to replace final form block");
}

// d. card-arrow fix
const oldArrow = `<div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  Подробнее <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>`;
const newArrow = `<div className="card-arrow" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.3s' }}>
                  Подробнее <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>`;
pageContent = pageContent.split(oldArrow).join(newArrow);

fs.writeFileSync(pageFile, pageContent);

// 3. card-arrow fix in SOCH
const sochFile = 'src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx';
let sochContent = fs.readFileSync(sochFile, 'utf8');
sochContent = sochContent.split(oldArrow).join(newArrow);
fs.writeFileSync(sochFile, sochContent);

console.log('All changes applied successfully!');
