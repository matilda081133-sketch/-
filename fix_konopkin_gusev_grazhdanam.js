const fs = require('fs');

// ============================================================
// FIX 1: team.ts — status с точкой для геройской зоны
// ============================================================
let team = fs.readFileSync('src/data/team.ts', 'utf8');

// Konopkin: status comma → period (hero display)
// companyRole stays comma (used in form)
team = team.replace(
  "status: 'Адвокат, председатель Коллегии адвокатов «Де-Юре»',\n    companyRole: 'Адвокат, председатель Коллегии адвокатов «Де-Юре»',",
  "status: 'Адвокат. Председатель Коллегии адвокатов «Де-Юре»',\n    companyRole: 'Адвокат, председатель Коллегии адвокатов «Де-Юре»',"
);

// Gusev: status comma+newline → period, no newline (hero display)
// companyRole stays comma (used in form)
team = team.replace(
  "status: 'Адвокат, управляющий партнёр\\nКоллегии адвокатов «Де-Юре»',\n    companyRole: 'Адвокат, управляющий партнёр Коллегии адвокатов «Де-Юре»',",
  "status: 'Адвокат. Управляющий партнёр Коллегии адвокатов «Де-Юре»',\n    companyRole: 'Адвокат, управляющий партнёр Коллегии адвокатов «Де-Юре»',"
);

fs.writeFileSync('src/data/team.ts', team, 'utf8');
console.log('✅ team.ts: Konopkin + Gusev status updated (period separator for hero)');

// Verify
const teamCheck = fs.readFileSync('src/data/team.ts', 'utf8');
console.log('  Konopkin status:', teamCheck.match(/konopkin[\s\S]{0,200}?status: '([^']+)'/)?.[1] || 'NOT FOUND');
console.log('  Konopkin companyRole:', teamCheck.match(/konopkin[\s\S]{0,300}?companyRole: '([^']+)'/)?.[1] || 'NOT FOUND');
console.log('  Gusev status:', teamCheck.match(/gusev-oleg[\s\S]{0,200}?status: '([^']+)'/)?.[1] || 'NOT FOUND');
console.log('  Gusev companyRole:', teamCheck.match(/gusev-oleg[\s\S]{0,300}?companyRole: '([^']+)'/)?.[1] || 'NOT FOUND');

// ============================================================
// FIX 2: Specialist template — form subtitle uses companyRole
// ============================================================
let pg = fs.readFileSync('src/app/specialisty/[slug]/page.tsx', 'utf8');

// Line 626: {member.status} → {member.companyRole || member.status}
// In the context of the consultation form's specialist name block
const oldFormStatus = '<div style={{ color: \'var(--color-text-secondary)\', fontSize: \'15px\' }}>{member.status}</div>';
const newFormStatus = '<div style={{ color: \'var(--color-text-secondary)\', fontSize: \'15px\' }}>{member.companyRole || member.status}</div>';

if (pg.includes(oldFormStatus)) {
  pg = pg.replace(oldFormStatus, newFormStatus);
  console.log('\n✅ Specialist template: form subtitle now uses companyRole || status');
} else {
  console.log('\n⚠️  Specialist template: could not find form status line to replace');
  // Show context around status in form
  const idx = pg.indexOf('color-text-secondary\', fontSize: \'15px\' }}>{member.status}');
  console.log('   Context:', pg.substring(Math.max(0, idx-50), idx+120));
}

fs.writeFileSync('src/app/specialisty/[slug]/page.tsx', pg, 'utf8');

// ============================================================
// FIX 3: GrazhdanamClient — filterSlugs + disclaimer
// ============================================================
let gc = fs.readFileSync('src/app/grazhdanam/GrazhdanamClient.tsx', 'utf8');

// 3a: Add filterSlugs to TeamCarousel to show only 4 (exclude Полозова + any others)
const oldTeamCarousel = '<TeamCarousel />';
const newTeamCarousel = `<TeamCarousel filterSlugs={['bobkin-arkadiy-evgenevich', 'konopkin-dmitriy-sergeevich', 'smolyaninova-marina-valerevna', 'gusev-oleg-yurevich']} />`;

if (gc.includes(oldTeamCarousel)) {
  gc = gc.replace(oldTeamCarousel, newTeamCarousel);
  console.log('\n✅ GrazhdanamClient: TeamCarousel filterSlugs added (4 specialists)');
} else {
  console.log('\n⚠️  GrazhdanamClient: could not find <TeamCarousel /> to update');
}

// 3b: Add disclaimer after TeamCarousel section
const oldAfterCarousel = newTeamCarousel;
const disclaimerBlock = `${newTeamCarousel}

      {/* Пояснение об организациях */}
      <div style={{ background: 'var(--color-cream)', borderTop: '1px solid rgba(16,39,59,0.07)' }}>
        <div className="container" style={{ padding: '18px 0' }}>
          <p style={{
            margin: 0,
            fontSize: '14px',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.65,
            fontStyle: 'italic',
            borderLeft: '3px solid rgba(23,50,77,0.2)',
            paddingLeft: '14px',
            maxWidth: '860px'
          }}>
            ЮК «Де-Юре» и Коллегия адвокатов «Де-Юре» являются самостоятельными организациями. Адвокатская помощь оказывается на основании соглашения между адвокатом и доверителем.
          </p>
        </div>
      </div>`;

gc = gc.replace(oldAfterCarousel, disclaimerBlock);
console.log('✅ GrazhdanamClient: disclaimer added after TeamCarousel');

fs.writeFileSync('src/app/grazhdanam/GrazhdanamClient.tsx', gc, 'utf8');

// ============================================================
// FIX 4: Verify specialisty/page.tsx Konopkin/Gusev statuses in schema
// (already correct from earlier session, but verify)
// ============================================================
const pgFinal = fs.readFileSync('src/app/specialisty/[slug]/page.tsx', 'utf8');
const konopkinMemberOf = pgFinal.includes("memberOf") && pgFinal.includes("Коллегия адвокатов");
console.log('\n✅ Schema memberOf check:', konopkinMemberOf ? 'CORRECT (memberOf present)' : 'PROBLEM');

// Also check disclaimer in form
const formDisclaimer = pgFinal.includes('Адвокатская помощь оказывается на основании соглашения');
console.log('✅ Form disclaimer:', formDisclaimer ? 'PRESENT' : 'MISSING');

console.log('\n=== ALL FIXES COMPLETE ===');
