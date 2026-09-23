const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function getRouteLastMod(route) {
  try {
    const cleanRoute = route.replace(/^\/|\/$/g, '');
    let checkPath = '';
    if (!cleanRoute) {
      checkPath = 'src/app/page.tsx';
    } else if (cleanRoute.startsWith('specialisty/')) {
      checkPath = 'src/data/team.ts';
    } else {
      const dirPath = path.join(process.cwd(), 'src/app', cleanRoute);
      if (fs.existsSync(dirPath)) {
        checkPath = `src/app/${cleanRoute}`;
      }
    }

    if (checkPath) {
      const gitDate = execSync(`git log -1 --format=%cs -- "${checkPath}"`, { encoding: 'utf8' }).trim();
      if (gitDate && /^\d{4}-\d{2}-\d{2}$/.test(gitDate)) {
        return gitDate;
      }
    }
  } catch (e) {}
  return '2026-09-22';
}

const sample = [
  '',
  '/grazhdanam/yurist-po-nedvizhimosti/spory-s-zastrojshchikom/',
  '/biznesu/nalogovyj-yurist-dlya-biznesa/',
  '/grazhdanam/trudovoj-yurist/',
  '/specialisty/bobkin-arkadiy-evgenevich/'
];

const t0 = Date.now();
sample.forEach(r => console.log(r, '->', getRouteLastMod(r)));
console.log('Elapsed for sample:', Date.now() - t0, 'ms');
