const fs = require('fs');

let content = fs.readFileSync('src/app/sitemap.ts', 'utf8');

const importReplacement = `import { MetadataRoute } from 'next';
import { teamData } from '@/data/team';
import { execSync } from 'child_process';

export const dynamic = 'force-static';

function getFileDateMap(): Record<string, string> {
  const map: Record<string, string> = {};
  try {
    const log = execSync('git log --name-only --format="DATE:%cs" -n 300 -- src/app src/data', { encoding: 'utf8' });
    const lines = log.split('\\n');
    let currentDate: string | null = null;
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('DATE:')) {
        currentDate = trimmed.replace('DATE:', '');
      } else if (trimmed && currentDate) {
        if (!map[trimmed]) {
          map[trimmed] = currentDate;
        }
      }
    }
  } catch (e) {}
  return map;
}

function getRouteLastModified(route: string, map: Record<string, string>): Date {
  const clean = route.replace(/^\\/|\\/$/g, '');
  if (!clean) {
    const d = map['src/app/page.tsx'] || '2026-09-22';
    return new Date(d);
  }
  if (clean.startsWith('specialisty/')) {
    const d = map['src/data/team.ts'] || '2026-09-22';
    return new Date(d);
  }
  const prefix = \`src/app/\${clean}/\`;
  let latest = '2026-09-01';
  for (const [file, date] of Object.entries(map)) {
    if (file.startsWith(prefix) || file === \`src/app/\${clean}.tsx\` || file === \`src/app/\${clean}/page.tsx\`) {
      if (date > latest) latest = date;
    }
  }
  return new Date(latest === '2026-09-01' ? '2026-09-22' : latest);
}`;

content = content.replace(
  /import \{ MetadataRoute \} from 'next';\s*import \{ teamData \} from '@\/data\/team';\s*export const dynamic = 'force-static';/,
  importReplacement
);

content = content.replace(
  'const allRoutes = [...staticRoutes, ...specialistRoutes];',
  'const allRoutes = [...staticRoutes, ...specialistRoutes];\n  const dateMap = getFileDateMap();'
);

content = content.replace(
  "lastModified: new Date('2026-09-22'),",
  'lastModified: getRouteLastModified(route, dateMap),'
);

fs.writeFileSync('src/app/sitemap.ts', content, 'utf8');
console.log('sitemap.ts updated successfully');
