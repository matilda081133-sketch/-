const fs = require('fs');
const html = fs.readFileSync('source.html', 'utf-8');
const iconMatches = html.match(/<a[^>]+class="t-sociallinks__item"[^>]*>([\s\S]*?)<\/a>/g) || [];
iconMatches.forEach(m => {
  const href = m.match(/href="([^"]+)"/)[1];
  const svg = m.match(/<svg[\s\S]*?<\/svg>/)[0];
  console.log(`HREF: ${href}\nSVG: ${svg}\n`);
});
