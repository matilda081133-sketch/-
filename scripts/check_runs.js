const https = require('https');
const options = {
  hostname: 'api.github.com',
  path: '/repos/matilda081133-sketch/-/actions/runs?per_page=3',
  headers: { 'User-Agent': 'Mozilla/5.0' }
};
https.get(options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      if (json.workflow_runs) {
        json.workflow_runs.forEach(r => {
          console.log('Run ' + r.id + ': status=' + r.status + ', conclusion=' + r.conclusion + ', name=' + r.name + ', commit=' + (r.head_commit ? r.head_commit.message.split('\n')[0] : ''));
        });
      } else {
        console.log(data);
      }
    } catch (e) {
      console.error(e);
    }
  });
}).on('error', console.error);
