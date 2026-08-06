const fs = require('fs');

// ══════════════════════════════════════════════
// 1. REMOVE DUPLICATE HERO in BiznesuClient.tsx
// ══════════════════════════════════════════════
let biznesu = fs.readFileSync('src/app/uslugi/biznesu/BiznesuClient.tsx', 'utf8');

// The duplicate second hero starts at the comment on line 379
const DUPE_START = "      {/* ═══ 1. ПЕРВЫЙ ЭКРАН (Hero - В точном эталонном стиле /grazhdanam/) ═══ */}\r\n      <MilitaryHero\r\n        breadcrumbs={\r\n          <>\r\n            <Link href=\"/\">Главная</Link>\r\n            <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>\r\n            <span style={{ color: 'var(--color-text-main)' }}>Бизнесу</span>\r\n          </>\r\n        }\r\n        superTitle=\"Юридическая компания «Де-Юре»\"";
const DUPE_END = "\r\n      {/* ═══ 2. КАТАЛОГ 13 НАПРАВЛЕНИЙ БИЗНЕСУ ═══ */}";

const dupeStartIdx = biznesu.lastIndexOf(DUPE_START); // last occurrence = the duplicate
const dupeEndIdx = biznesu.lastIndexOf(DUPE_END);

if (dupeStartIdx !== -1 && dupeEndIdx !== -1 && dupeStartIdx < dupeEndIdx) {
  biznesu = biznesu.substring(0, dupeStartIdx) + '\r\n' + biznesu.substring(dupeEndIdx + 1);
  console.log('✅ Removed duplicate hero section');
} else {
  console.log('⚠️  Duplicate hero not found - maybe already fixed');
}

// ══════════════════════════════════════════════
// 2. ADD "Не нашли направление?" CARD to catalog grid
// ══════════════════════════════════════════════
const AFTER_MAP = '            })}\r\n\r\n                      </div>';
const AFTER_MAP_ALT = '            })}\n\n                      </div>';

const ctaCard = `            {/* CTA Card - Не нашли направление */}
            <a
              href="#form"
              style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}
            >
              <div
                className="card service-card"
                style={{
                  height: '100%',
                  minHeight: '210px',
                  padding: '28px',
                  background: 'var(--color-deep-blue)',
                  border: '1px solid var(--color-deep-blue)',
                  borderRadius: '0',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  borderTop: '3px solid var(--color-gold)',
                  cursor: 'pointer'
                }}
              >
                <div>
                  <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: '#FFFFFF', lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>
                    Не нашли подходящее направление?
                  </h3>
                  <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.55 }}>
                    Юридическая задача бизнеса может затрагивать сразу несколько областей. Кратко опишите ситуацию — мы уточним обстоятельства и определим, кто из специалистов должен подключиться.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-gold)', fontSize: '14px', fontWeight: 600, marginTop: 'auto', transition: 'all 0.3s' }}>
                  <span>Описать задачу</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.3s' }}>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </a>`;

let idx = biznesu.indexOf(AFTER_MAP);
if (idx !== -1) {
  biznesu = biznesu.substring(0, idx + '            })}'.length) + '\r\n\r\n' + ctaCard + '\r\n\r\n                      </div>' + biznesu.substring(idx + AFTER_MAP.length);
  console.log('✅ Added CTA card to catalog grid');
} else {
  // Try inserting before the closing </div> of the grid
  const GRID_CLOSE = '                      </div>\r\n        </div>\r\n      </section>';
  const gridIdx = biznesu.indexOf(GRID_CLOSE);
  if (gridIdx !== -1) {
    biznesu = biznesu.substring(0, gridIdx) + ctaCard + '\r\n\r\n' + biznesu.substring(gridIdx);
    console.log('✅ Added CTA card via fallback method');
  } else {
    console.log('⚠️  Could not find insertion point for CTA card');
  }
}

fs.writeFileSync('src/app/uslugi/biznesu/BiznesuClient.tsx', biznesu, 'utf8');
console.log('✅ BiznesuClient.tsx saved');

// ══════════════════════════════════════════════
// 3. FIX POLOZOVA CAPTION to match Konopkin style
// ══════════════════════════════════════════════
let page = fs.readFileSync('src/app/specialisty/[slug]/page.tsx', 'utf8');

// Fix the caption orgType label for Polozova
// Konopkin shows "Коллегия адвокатов «Де-Юре»" as org label
// Polozova should show "ЮК «Де-Юре»" with same styling
// The current caption just shows member.status - let's add orgType specific label

const OLD_CAPTION = `              <div style={{ width: '100%', maxWidth: '440px', background: 'var(--color-deep-blue)', padding: '16px 20px', marginTop: '0' }}>
                <div style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF', fontFamily: 'var(--font-serif)', lineHeight: 1.3 }}>{member.name}</div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', marginTop: '4px', lineHeight: 1.4 }}>{member.status}</div>
              </div>`;

const NEW_CAPTION = `              <div style={{ width: '100%', maxWidth: '440px', background: 'var(--color-deep-blue)', padding: '16px 20px', marginTop: '0' }}>
                <div style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF', fontFamily: 'var(--font-serif)', lineHeight: 1.3 }}>{member.name}</div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', marginTop: '4px', lineHeight: 1.4 }}>{member.status}</div>
                {member.orgType === 'barAssociationLawyer' && (
                  <div style={{ fontSize: '11px', color: 'var(--color-gold)', marginTop: '6px', fontWeight: 600, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
                    Коллегия адвокатов «Де-Юре»
                  </div>
                )}
                {member.orgType === 'legalCompanySpecialist' && (
                  <div style={{ fontSize: '11px', color: 'var(--color-gold)', marginTop: '6px', fontWeight: 600, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
                    ЮК «Де-Юре»
                  </div>
                )}
              </div>`;

if (page.includes(OLD_CAPTION)) {
  page = page.replace(OLD_CAPTION, NEW_CAPTION);
  fs.writeFileSync('src/app/specialisty/[slug]/page.tsx', page, 'utf8');
  console.log('✅ Polozova caption org label added to specialist template');
} else {
  console.log('⚠️  Caption pattern not found exactly - check manually');
}

console.log('\nAll fixes done!');
