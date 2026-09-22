const https = require('https');
const fs = require('fs');
const path = require('path');

const KEY = 'a1b2c3d4e5f67890123456789abcdef0';
const HOST = 'dejure-help.ru';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// Read all URLs from sitemap or generated out/
function getAllUrls() {
  const urls = [
    `https://${HOST}/`,
    `https://${HOST}/kontakty/`,
    `https://${HOST}/specialisty/`,
    `https://${HOST}/praktika/`,
    `https://${HOST}/o-kompanii/`,
    `https://${HOST}/grazhdanam/`,
    `https://${HOST}/biznesu/`
  ];

  // Try to read sitemap if exists
  const sitemapPath = path.join(__dirname, '..', 'out', 'sitemap.xml');
  if (fs.existsSync(sitemapPath)) {
    const xml = fs.readFileSync(sitemapPath, 'utf8');
    const matches = xml.matchAll(/<loc>(https:\/\/[^<]+)<\/loc>/g);
    for (const match of matches) {
      if (!urls.includes(match[1])) {
        urls.push(match[1]);
      }
    }
  }

  return urls;
}

function submitToIndexNow(endpointHost, endpointPath, payload) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(payload);
    const options = {
      hostname: endpointHost,
      port: 443,
      path: endpointPath,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(data)
      }
    };

    const req = https.request(options, (res) => {
      let responseBody = '';
      res.on('data', chunk => responseBody += chunk);
      res.on('end', () => {
        resolve({
          endpoint: `${endpointHost}${endpointPath}`,
          statusCode: res.statusCode,
          statusMessage: res.statusMessage,
          body: responseBody
        });
      });
    });

    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

async function main() {
  const urlList = getAllUrls();
  console.log(`IndexNow: Submitting ${urlList.length} URLs to search engines...`);

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urlList
  };

  try {
    console.log('Sending to Yandex (yandex.com/indexnow)...');
    const yandexRes = await submitToIndexNow('yandex.com', '/indexnow', payload);
    console.log(`Yandex response: ${yandexRes.statusCode} ${yandexRes.statusMessage}`, yandexRes.body || '');

    console.log('Sending to IndexNow universal (api.indexnow.org)...');
    const universalRes = await submitToIndexNow('api.indexnow.org', '/indexnow', payload);
    console.log(`Universal response: ${universalRes.statusCode} ${universalRes.statusMessage}`, universalRes.body || '');
  } catch (err) {
    console.error('IndexNow submission error:', err);
  }
}

if (require.main === module) {
  main();
}

module.exports = { main };
