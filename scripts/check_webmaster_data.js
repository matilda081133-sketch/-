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

  // 1. Check indexing samples
  console.log('=== Checking Indexing In Search Samples ===');
  const inSearch = await yandexRequest(`/v4/user/${userId}/hosts/${hostId}/indexing/samples?offset=0&limit=10`);
  console.log('In search:', JSON.stringify(inSearch, null, 2));

  // 2. Check excluded samples
  console.log('\n=== Checking Excluded Samples ===');
  const excluded = await yandexRequest(`/v4/user/${userId}/hosts/${hostId}/indexing/samples?offset=0&limit=10&status=DISALLOWED_BY_USER`);
  console.log('Excluded:', JSON.stringify(excluded, null, 2));

  // 3. Check popular search queries
  console.log('\n=== Checking Popular Queries ===');
  const queries = await yandexRequest(`/v4/user/${userId}/hosts/${hostId}/search-queries/popular?order_by=TOTAL_CLICKS&query_indicator=TOTAL_CLICKS`);
  console.log('Queries:', JSON.stringify(queries, null, 2));
}

run().catch(console.error);
