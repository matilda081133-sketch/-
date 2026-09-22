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

async function run() {
  const userId = 2425927186;
  const hostId = 'https:dejure-help.ru:443';

  console.log('=== 1. Adding sitemap.xml to Yandex Webmaster ===');
  const addSitemapRes = await yandexRequest(
    `/v4/user/${userId}/hosts/${hostId}/user-added-sitemaps`,
    'POST',
    { url: 'https://dejure-help.ru/sitemap.xml' }
  );
  console.log('Add sitemap result:', JSON.stringify(addSitemapRes, null, 2));

  console.log('\n=== 2. Checking sitemaps list ===');
  const sitemapsRes = await yandexRequest(`/v4/user/${userId}/hosts/${hostId}/sitemaps`);
  console.log('Sitemaps list:', JSON.stringify(sitemapsRes, null, 2));
}

run().catch(console.error);
