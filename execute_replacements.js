const fs = require('fs');

let content = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', 'utf8');

// 1. Justify 'Единой позиции'
content = content.replace(
  /textAlign:\s*'left',\s*color:\s*'var\(--color-text-secondary\)',\s*maxWidth:\s*'800px',\s*margin:\s*'0 0 40px 0',\s*lineHeight:\s*1\.6\s*\}\}>\s*Единой позиции/g,
  `textAlign: 'justify', color: 'var(--color-text-secondary)', maxWidth: '800px', margin: '0 0 40px 0', lineHeight: 1.6 }}>
            Единой позиции`
);

// 2. Change gold color in 'Что сообщить'
content = content.replace(
  /color:\s*'#FFDF99'/g,
  `color: '#D4B886'`
);

// 3. Fix the contact form at the bottom
const contactRegex = /<section className="section" id="form" style=\{\{\s*background:\s*'var\(--color-cream\)'\s*\}\}>[\s\S]*?<\/section>/;
const newContactBlock = `<section className="section bg-white" id="form" style={{ scrollMarginTop: '120px' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>
                  Связаться с нами
                </span>
              </div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0 }}>
                Если человека задержали или он готовится явиться,<br /> не откладывайте связь<br /> с адвокатом
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '24px', textWrap: 'balance' }}>
                Уточним срочность, местонахождение<br />и необходимые документы.
              </p>
              
              <div style={{ marginTop: '32px' }}>
                <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  Перезвоним в течение 15 минут в рабочее время
                </div>
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
              <div style={{ background: 'var(--gradient-cream)', padding: '40px', borderRadius: '4px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', border: '1px solid rgba(23, 50, 77, 0.1)', width: '100%' }}>
                <ContactsForm title="Написать нам" subtitle="" />
              </div>
            </div>
          </div>
        </div>
      </section>`;
if (contactRegex.test(content)) {
  content = content.replace(contactRegex, newContactBlock);
  console.log('CONTACT BLOCK MATCHED AND REPLACED');
} else {
  console.log('FAILED TO MATCH CONTACT BLOCK');
}

// 4. Fix SOCH / Detsertirstvo / Osvobozhdenie block
const sochRegex = /<div style=\{\{\s*display:\s*'flex',\s*flexDirection:\s*'column',\s*gap:\s*'40px',\s*maxWidth:\s*'850px'\s*\}\}>[\s\S]*?\{?\/\* Блок 4\. Профильный адвокат \*\/\}/;
const newSochBlock = `<div className="grid grid-2" style={{ gap: '40px', alignItems: 'stretch' }}>
              {/* Левая колонка - Отличие от дезертирства */}
              <div style={{ display: 'flex', flexDirection: 'column', background: 'var(--color-white)', borderTop: '4px solid var(--color-primary)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', padding: '40px' }}>
                <h3 style={{ fontSize: '22px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '24px' }}>Чем СОЧ отличается от дезертирства</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* СОЧ */}
                  <div style={{ padding: '20px', background: 'var(--color-cream)', borderLeft: '4px solid var(--color-primary)' }}>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>СОЧ (ст. 337 УК РФ)</div>
                    <div style={{ fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.6 }}><strong>Временное уклонение</strong> от исполнения обязанностей военной службы. Квалификация определяется по совокупности материалов дела.</div>
                  </div>
                  
                  {/* Дезертирство */}
                  <div style={{ padding: '20px', background: '#FFF8F8', borderLeft: '4px solid #D9534F' }}>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#D9534F', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D9534F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg> Дезертирство (ст. 338 УК РФ)</div>
                    <div style={{ fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.6 }}>Цель <strong>вовсе уклониться</strong> от прохождения службы. Направленность умысла на полное уклонение; продолжительность отсутствия сама по себе вопрос не решает.</div>
                  </div>
                </div>
              </div>

              {/* Правая колонка - Освобождение от ответственности */}
              <div style={{ background: 'var(--color-deep-blue)', padding: '40px', borderRadius: '4px', color: 'var(--color-white)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, opacity: 0.05, transform: 'translate(20%, -20%)' }}>
                  <svg width="150" height="150" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <h3 style={{ fontSize: '24px', fontFamily: 'var(--font-serif)', color: '#D4B886', marginBottom: '24px', position: 'relative', zIndex: 1 }}>Освобождение от ответственности</h3>
                <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.7, marginBottom: '20px' }}>
                    Примечание к статье 337 УК РФ допускает освобождение от уголовной ответственности лица, впервые совершившего деяние (ч. 1–4), если отсутствие стало следствием стечения тяжёлых обстоятельств.
                  </p>
                  <div style={{ background: 'rgba(255,255,255,0.1)', padding: '16px', borderLeft: '4px solid var(--color-gold)', fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, marginTop: 'auto' }}>
                    Это не автоматическое основание: необходимо установить применимую часть статьи и документально подтвердить фактические обстоятельства.
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Блок 4. Профильный адвокат */}`;
if (sochRegex.test(content)) {
  content = content.replace(sochRegex, newSochBlock);
  console.log('SOCH BLOCK MATCHED AND REPLACED');
} else {
  console.log('FAILED TO MATCH SOCH BLOCK. Attempting alternative regex...');
  const altRegex = /<div className="grid grid-2" style=\{\{\s*gap:\s*'40px',\s*alignItems:\s*'stretch'\s*\}\}>[\s\S]*?\{?\/\* Блок 4\. Профильный адвокат \*\/\}/;
  if (altRegex.test(content)) {
     content = content.replace(altRegex, newSochBlock);
     console.log('SOCH BLOCK MATCHED WITH ALT REGEX AND REPLACED');
  } else {
     console.log('STILL FAILED');
  }
}

fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', content);
console.log('REGEX REPLACE COMPLETE');
