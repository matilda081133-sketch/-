const { execSync } = require('child_process');
const fs = require('fs');

function buildFileDateMap() {
  const fileDateMap = {};
  try {
    const log = execSync('git log --name-only --format="DATE:%cs" -n 300 -- src/app src/data', { encoding: 'utf8' });
    const lines = log.split('\n');
    let currentDate = null;
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('DATE:')) {
        currentDate = trimmed.replace('DATE:', '');
      } else if (trimmed && currentDate) {
        if (!fileDateMap[trimmed]) {
          fileDateMap[trimmed] = currentDate;
        }
      }
    }
  } catch (e) {}
  return fileDateMap;
}

const map = buildFileDateMap();

function getRouteDate(route, map) {
  const clean = route.replace(/^\/|\/$/g, '');
  if (!clean) {
    return map['src/app/page.tsx'] || '2026-09-22';
  }
  if (clean.startsWith('specialisty/')) {
    return map['src/data/team.ts'] || '2026-09-22';
  }
  const prefix = `src/app/${clean}/`;
  let latest = '2026-09-01';
  for (const [file, date] of Object.entries(map)) {
    if (file.startsWith(prefix) || file === `src/app/${clean}.tsx` || file === `src/app/${clean}/page.tsx`) {
      if (date > latest) latest = date;
    }
  }
  return latest === '2026-09-01' ? '2026-09-22' : latest;
}

const sample = [
  '',
  '/grazhdanam/yurist-po-nedvizhimosti/spory-s-zastrojshchikom/',
  '/biznesu/nalogovyj-yurist-dlya-biznesa/',
  '/grazhdanam/trudovoj-yurist/',
  '/grazhdanam/bankrotstvo-fizicheskih-lic/',
  '/specialisty/bobkin-arkadiy-evgenevich/'
];

sample.forEach(r => console.log(r, '->', getRouteDate(r, map)));
