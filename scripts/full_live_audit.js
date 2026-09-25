const https = require('https');

function check(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        resolve({
          url,
          status: res.statusCode,
          headers: res.headers,
          data
        });
      });
    }).on('error', (err) => resolve({ url, error: err.message }));
  });
}

async function run() {
  console.log('=== FULL LIVE SITE AUDIT ===');
  
  // 1. Homepage
  const home = await check('https://dejure-help.ru/');
  console.log('1. Homepage (https://dejure-help.ru/):', home.status);

  // 2. Sitemap
  const sitemap = await check('https://dejure-help.ru/sitemap.xml');
  console.log('2. Sitemap.xml:');
  console.log('   Status:', sitemap.status);
  console.log('   Cache-Control:', sitemap.headers?.['cache-control']);
  console.log('   Expires:', sitemap.headers?.['expires']);
  console.log('   Has /privacy/:', sitemap.data?.includes('/privacy/'));
  console.log('   Has /consent/:', sitemap.data?.includes('/consent/'));
  console.log('   Has /cookies/:', sitemap.data?.includes('/cookies/'));
  console.log('   Total <loc> count:', (sitemap.data?.match(/<loc>/g) || []).length);

  // 3. Technical legal pages
  console.log('3. Technical pages (noindex, follow check):');
  for (const p of ['/cookies/', '/privacy/', '/consent/']) {
    const res = await check('https://dejure-help.ru' + p);
    const hasRobots = res.data?.includes('noindex') && res.data?.includes('follow');
    console.log(`   ${p}: status=${res.status}, has noindex, follow=${hasRobots}`);
  }

  // 4. Tax Hub & Droblenie checks
  console.log('4. Tax Hub checks:');
  const tax = await check('https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/');
  console.log('   Tax Hub status:', tax.status);
  console.log('   Has duplicate "Да. Да.":', tax.data?.includes('Да. Да. Юристы'));

  const droblenie = await check('https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/zashchita-pri-obvinenii-v-droblenii-biznesa/');
  console.log('   Droblenie status:', droblenie.status);
  console.log('   Criminal risk link correct:', droblenie.data?.includes('https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-nalogovym-prestupleniyam/'));

  // 5. 115-FZ hub
  console.log('5. 115-FZ Hub:');
  const fz = await check('https://dejure-help.ru/biznesu/razblokirovka-raschetnogo-scheta-po-115-fz/');
  console.log('   115-FZ Hub status:', fz.status);
  console.log('   Has «блокировка» in JSON-LD:', fz.data?.includes('Под словом «блокировка»'));
  console.log('   Has «красную зону» in JSON-LD:', fz.data?.includes('«красную зону» платформы «Знай своего клиента» (ЗСК)'));

  // 6. Migration Hub
  console.log('6. Migration Hub:');
  const mig = await check('https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/');
  console.log('   Migration Hub status:', mig.status);
  console.log('   Has 3 working days text:', mig.data?.includes('в течение трёх рабочих дней с даты заключения или прекращения договора'));
}

run();
