const https = require('https');

function check(urlPath) {
  return new Promise((resolve) => {
    https.get('https://dejure-help.ru' + urlPath, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const hasGrid = data.includes('grid-template-columns:1fr auto 1fr') || data.includes('grid-template-columns: 1fr auto 1fr');
        const hasFlex04 = data.includes('flex:0.4') || data.includes('flex: 0.4');
        const hasJustifyCenter = data.includes('justify-self:center') || data.includes('justify-self: center');
        resolve({
          path: urlPath,
          lastModified: res.headers['last-modified'],
          hasGrid,
          hasFlex04,
          hasJustifyCenter
        });
      });
    }).on('error', err => resolve({ path: urlPath, error: err.message }));
  });
}

async function run() {
  const pages = ['/', '/grazhdanam/', '/biznesu/', '/kontakty/', '/specialisty/', '/praktika/'];
  for (const p of pages) {
    const r = await check(p);
    console.log(JSON.stringify(r));
  }
}

run();
