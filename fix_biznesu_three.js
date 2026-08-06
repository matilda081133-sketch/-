const fs = require('fs');
let c = fs.readFileSync('src/app/uslugi/biznesu/BiznesuClient.tsx', 'utf8');

// ── 1. Fix button in "Не нашли подходящее направление?" card (catalog grid card)
// Replace the gold arrow div with a proper button
const OLD_BTN = `                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-gold)', fontSize: '14px', fontWeight: 600, marginTop: 'auto', transition: 'all 0.3s' }}>
                  <span>Описать задачу</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.3s' }}>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>`;

const NEW_BTN = `                <div style={{ marginTop: 'auto' }}>
                  <style dangerouslySetInnerHTML={{ __html: \`
                    .btn-cta-catalog {
                      display: inline-block;
                      padding: 11px 24px;
                      font-size: 14px;
                      font-weight: 700;
                      background: #FFFFFF;
                      color: var(--color-deep-blue);
                      border: 1px solid #FFFFFF;
                      text-decoration: none;
                      transition: all 0.3s ease;
                      cursor: pointer;
                    }
                    .btn-cta-catalog:hover {
                      background: var(--color-deep-blue);
                      color: #FFFFFF;
                      border-color: #FFFFFF;
                    }
                  \`}} />
                  <a href="#form" className="btn-cta-catalog">Описать задачу</a>
                </div>`;

if (c.includes(OLD_BTN)) {
  c = c.replace(OLD_BTN, NEW_BTN);
  console.log('✅ Button replaced in catalog card');
} else {
  console.log('⚠️  Catalog card button not found exactly');
}

// ── 2. Remove standalone "Не нашли подходящее направление?" section (section 4)
const SECTION_START = `      {/* ═══ 4. БЛОК "ЕСЛИ ЗАДАЧА НЕ ПОПАЛА В КАТАЛОГ" (Из ТЗ п. 5) ═══ */}\r\n      <section className="section bg-light" style={{ padding: '60px 0', background: 'var(--gradient-cream)' }}>`;
const SECTION_END_MARKER = `      {/* ═══ 5. СПЕЦИАЛИСТЫ ПО РАБОТЕ С БИЗНЕСОМ`;

const s = c.indexOf(SECTION_START);
const e = c.indexOf(SECTION_END_MARKER);
if (s !== -1 && e !== -1) {
  c = c.substring(0, s) + '\r\n      ' + c.substring(e);
  console.log('✅ Standalone CTA section removed');
} else {
  console.log('⚠️  Could not find standalone section. s='+s+' e='+e);
}

// ── 3. Center-align TeamCarousel title+subtitle, remove "Команда компании" label
// Find where TeamCarousel is used in BiznesuClient
const OLD_CAROUSEL = `      <TeamCarousel \r\n        customTitle="Специалисты по работе с бизнесом"\r\n        customSubtitle={\r\n          <>\r\n            <span style={{ display: 'inline-block' }}>Профильные юристы ЮК «Де-Юре» по\u00a0сопровождению компаний,</span> <br />\r\n            <span style={{ display: 'inline-block' }}>арбитражным спорам, налоговому и\u00a0корпоративному праву.</span>\r\n          </>\r\n        }`;

const NEW_CAROUSEL = `      <TeamCarousel \r\n        customTitle="Специалисты по работе с бизнесом"\r\n        hideSectionLabel={true}\r\n        titleAlign="center"\r\n        customSubtitle={\r\n          <>\r\n            <span style={{ display: 'inline-block' }}>Профильные юристы ЮК «Де-Юре» по\u00a0сопровождению компаний,</span> <br />\r\n            <span style={{ display: 'inline-block' }}>арбитражным спорам, налоговому и\u00a0корпоративному праву.</span>\r\n          </>\r\n        }`;

if (c.includes(OLD_CAROUSEL)) {
  c = c.replace(OLD_CAROUSEL, NEW_CAROUSEL);
  console.log('✅ TeamCarousel props updated (center + no label)');
} else {
  console.log('⚠️  TeamCarousel pattern not found exactly, trying fallback...');
  // Find the TeamCarousel usage and just add the props
  const idx = c.indexOf('customTitle="Специалисты по работе с бизнесом"');
  if (idx !== -1) {
    c = c.substring(0, idx) + 'hideSectionLabel={true}\r\n        titleAlign="center"\r\n        ' + c.substring(idx);
    console.log('✅ TeamCarousel props added via fallback');
  }
}

fs.writeFileSync('src/app/uslugi/biznesu/BiznesuClient.tsx', c, 'utf8');
console.log('✅ BiznesuClient.tsx saved');
