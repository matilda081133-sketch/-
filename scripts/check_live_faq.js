const https = require('https');

const url = 'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/yuridicheskoe-oformlenie-inostrannyh-rabotnikov/';

https.get(url, (res) => {
  let html = '';
  res.on('data', chunk => html += chunk);
  res.on('end', () => {
    console.log('HTTP Status:', res.statusCode);
    const hasOld = html.includes('Что делать, если 3-дневный срок уведомления МВД уже пропущен?');
    const hasNew = html.includes('Что делать, если срок уведомления МВД уже пропущен?');
    console.log('Has old 3-дневный question:', hasOld);
    console.log('Has new question:', hasNew);

    const matches = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g);
    if (matches) {
      matches.forEach((m, idx) => {
        if (m.includes('срок уведомления') || m.includes('FAQPage')) {
          console.log(`\n--- JSON-LD Script #${idx + 1} ---`);
          console.log(m);
        }
      });
    }
  });
}).on('error', err => {
  console.error('Error fetching URL:', err.message);
});
