const https = require('https');

async function check(urlPath) {
  return new Promise((resolve) => {
    https.get('https://dejure-help.ru' + urlPath, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          path: urlPath,
          lm: res.headers['last-modified'],
          hasGrid: data.includes('grid-template-columns')
        });
      });
    }).on('error', err => resolve({ path: urlPath, error: err.message }));
  });
}

async function run() {
  const list = [
    '/',
    '/biznesu/',
    '/grazhdanam/',
    '/grazhdanam/semejnyj-yurist/',
    '/grazhdanam/zemelnyj-yurist/',
    '/grazhdanam/zhilishchnyj-yurist/',
    '/kontakty/',
    '/praktika/',
    '/specialisty/',
    '/team/'
  ];
  for (const p of list) {
    const res = await check(p);
    console.log(res.path.padEnd(35), res.lm, res.hasGrid ? '--> UPDATED (GRID)' : '--> WAITING FTP');
  }
}

run();
