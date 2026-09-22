const https = require('https');
const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '..', '.env.local');
let token = '';
if (fs.existsSync(envPath)) {
  const lines = fs.readFileSync(envPath, 'utf8').split('\n');
  for (const line of lines) {
    if (line.startsWith('YANDEX_WEBMASTER_TOKEN=')) {
      token = line.replace('YANDEX_WEBMASTER_TOKEN=', '').trim();
    }
  }
}

function yandexRequest(apiPath, method = 'GET', postData = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.webmaster.yandex.net',
      port: 443,
      path: apiPath,
      method: method,
      headers: {
        'Authorization': `OAuth ${token}`,
        'Content-Type': 'application/json; charset=UTF-8'
      }
    };

    let bodyStr = null;
    if (postData) {
      bodyStr = JSON.stringify(postData);
      options.headers['Content-Length'] = Buffer.byteLength(bodyStr);
    }

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = data ? JSON.parse(data) : {};
          resolve({ status: res.statusCode, data: json });
        } catch (e) {
          resolve({ status: res.statusCode, raw: data, parseError: e.message });
        }
      });
    });

    req.on('error', reject);
    if (bodyStr) {
      req.write(bodyStr);
    }
    req.end();
  });
}

const urlsToRecrawl = [
  // Hubs & main
  'https://dejure-help.ru/',
  'https://dejure-help.ru/kontakty/',
  'https://dejure-help.ru/specialisty/',
  'https://dejure-help.ru/praktika/',
  'https://dejure-help.ru/o-kompanii/',
  'https://dejure-help.ru/grazhdanam/',
  'https://dejure-help.ru/biznesu/',

  // B2C Hubs
  'https://dejure-help.ru/grazhdanam/semejnyj-yurist/',
  'https://dejure-help.ru/grazhdanam/nasledstvennyj-yurist/',
  'https://dejure-help.ru/grazhdanam/zhilishchnyj-yurist/',
  'https://dejure-help.ru/grazhdanam/zemelnyj-yurist/',
  'https://dejure-help.ru/grazhdanam/yurist-po-nedvizhimosti/',
  'https://dejure-help.ru/grazhdanam/bankrotstvo-fizicheskih-lic/',
  'https://dejure-help.ru/grazhdanam/kreditnyj-yurist/',
  'https://dejure-help.ru/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/',
  'https://dejure-help.ru/grazhdanam/avtoyurist/',
  'https://dejure-help.ru/grazhdanam/trudovoj-yurist/',
  'https://dejure-help.ru/grazhdanam/advokat-po-ugolovnym-delam/',
  'https://dejure-help.ru/grazhdanam/voennyj-yurist/',
  'https://dejure-help.ru/grazhdanam/migracionnyj-yurist/',

  // B2B Hubs
  'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/',
  'https://dejure-help.ru/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/',
  'https://dejure-help.ru/biznesu/korporativnyj-yurist/',
  'https://dejure-help.ru/biznesu/dogovornoe-pravo/',
  'https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/',
  'https://dejure-help.ru/biznesu/bankrotstvo-biznesa/',
  'https://dejure-help.ru/biznesu/trudovye-spory-s-rabotnikami/',
  'https://dejure-help.ru/biznesu/yuridicheskoe-soprovozhdenie-biznesa/',
  'https://dejure-help.ru/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/',
  'https://dejure-help.ru/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/',
  'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/',
  'https://dejure-help.ru/biznesu/razblokirovka-raschetnogo-scheta-po-115-fz/',
  'https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/',

  // Top demand subpages
  'https://dejure-help.ru/grazhdanam/bankrotstvo-fizicheskih-lic/cherez-mfc/',
  'https://dejure-help.ru/grazhdanam/kreditnyj-yurist/otmena-sudebnogo-prikaza/',
  'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/vzyskanie-dolgov-v-arbitrazhe/',
  'https://dejure-help.ru/biznesu/arbitrazhnyj-yurist/stroitelnyj-podryad/',
  'https://dejure-help.ru/biznesu/korporativnyj-yurist/korporativnye-spory-mezhdu-uchastnikami/',
  'https://dejure-help.ru/biznesu/korporativnyj-yurist/vyhod-uchastnika-iz-ooo/',
  'https://dejure-help.ru/biznesu/korporativnyj-yurist/vzyskanie-dejstvitelnoj-stoimosti-doli/',
  'https://dejure-help.ru/biznesu/korporativnyj-yurist/isklyuchenie-uchastnika-iz-ooo/',
  'https://dejure-help.ru/biznesu/korporativnyj-yurist/osparivanie-sdelok-pri-bankrotstve/',
  'https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/soprovozhdenie-vyezdnyh-nalogovyh-proverok/',
  'https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/soprovozhdenie-kameralnyh-nalogovyh-proverok/',
  'https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/vozvrat-i-vozmeshchenie-nds/',
  'https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/obzhalovanie-reshenij-nalogovyh-organov/',
  'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/zashchita-rabotodatelya-po-state-18-15-koap-rf/',
  'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/yurist-pri-migracionnoj-proverke-mvd/',
  'https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/yuridicheskoe-oformlenie-inostrannyh-rabotnikov/'
];

async function main() {
  const userId = 2425927186;
  const hostId = 'https:dejure-help.ru:443';

  console.log(`Starting batch recrawl for ${urlsToRecrawl.length} priority URLs...`);

  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < urlsToRecrawl.length; i++) {
    const url = urlsToRecrawl[i];
    try {
      const res = await yandexRequest(
        `/v4/user/${userId}/hosts/${hostId}/recrawl/queue`,
        'POST',
        { url }
      );

      if (res.status === 202) {
        console.log(`[${i + 1}/${urlsToRecrawl.length}] Queued: ${url} (Quota left: ${res.data.quota_remainder})`);
        successCount++;
      } else {
        console.log(`[${i + 1}/${urlsToRecrawl.length}] Status ${res.status} for ${url}:`, res.data);
        errorCount++;
      }
    } catch (e) {
      console.error(`[${i + 1}/${urlsToRecrawl.length}] Failed: ${url}`, e.message);
      errorCount++;
    }

    // Small delay to avoid API burst limits
    await new Promise(r => setTimeout(r, 250));
  }

  console.log(`\nBatch recrawl finished: ${successCount} queued, ${errorCount} errors.`);
}

main().catch(console.error);
