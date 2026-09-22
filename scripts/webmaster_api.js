const https = require('https');
const fs = require('fs');
const path = require('path');

// Read token from .env.local
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

if (!token) {
  console.error('No token found in .env.local');
  process.exit(1);
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

    if (postData) {
      options.headers['Content-Length'] = Buffer.byteLength(JSON.stringify(postData));
    }

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = data ? JSON.parse(data) : {};
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve({ status: res.statusCode, data: json });
          } else {
            resolve({ status: res.statusCode, error: json, raw: data });
          }
        } catch (e) {
          resolve({ status: res.statusCode, raw: data, parseError: e.message });
        }
      });
    });

    req.on('error', reject);
    if (postData) {
      req.write(JSON.stringify(postData));
    }
    req.end();
  });
}

async function main() {
  console.log('1. Checking Yandex Webmaster user...');
  const userRes = await yandexRequest('/v4/user');
  console.log('User response:', JSON.stringify(userRes, null, 2));

  if (!userRes.data || !userRes.data.user_id) {
    console.error('Failed to get user_id');
    return;
  }

  const userId = userRes.data.user_id;
  console.log(`\n2. Fetching hosts for user_id: ${userId}...`);
  const hostsRes = await yandexRequest(`/v4/user/${userId}/hosts`);
  console.log('Hosts response:', JSON.stringify(hostsRes, null, 2));

  if (!hostsRes.data || !hostsRes.data.hosts) {
    console.error('No hosts found');
    return;
  }

  for (const host of hostsRes.data.hosts) {
    console.log(`\n=== Host: ${host.ascii_host_url || host.unicode_host_url} (${host.host_id}) ===`);
    console.log(`Verification state: ${host.verification_state}`);
    
    // Check verification details
    const verRes = await yandexRequest(`/v4/user/${userId}/hosts/${host.host_id}/verification`);
    console.log('Verification details:', JSON.stringify(verRes.data || verRes.error, null, 2));

    // If verification in progress or applicable, check if we can verify
    if (host.verification_state !== 'VERIFIED') {
      console.log('Attempting to trigger verification via HTML_FILE...');
      const triggerRes = await yandexRequest(`/v4/user/${userId}/hosts/${host.host_id}/verification?type=HTML_FILE`, 'POST');
      console.log('Trigger verification response:', JSON.stringify(triggerRes, null, 2));
    }

    // Diagnostics
    const diagRes = await yandexRequest(`/v4/user/${userId}/hosts/${host.host_id}/diagnostics`);
    console.log('Diagnostics:', JSON.stringify(diagRes.data || diagRes.error, null, 2));

    // Summary
    const summaryRes = await yandexRequest(`/v4/user/${userId}/hosts/${host.host_id}/summary`);
    console.log('Summary:', JSON.stringify(summaryRes.data || summaryRes.error, null, 2));

    // Sitemaps
    const sitemapsRes = await yandexRequest(`/v4/user/${userId}/hosts/${host.host_id}/sitemaps`);
    console.log('Sitemaps:', JSON.stringify(sitemapsRes.data || sitemapsRes.error, null, 2));

    // Recrawl quota
    const quotaRes = await yandexRequest(`/v4/user/${userId}/hosts/${host.host_id}/recrawl/quota`);
    console.log('Recrawl quota:', JSON.stringify(quotaRes.data || quotaRes.error, null, 2));
  }
}

main().catch(err => console.error('Error:', err));
