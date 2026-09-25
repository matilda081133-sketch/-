const https = require('https');
const options = {
  hostname: 'api.github.com',
  path: '/repos/matilda081133-sketch/-/actions/runs/35972740641/jobs',
  headers: { 'User-Agent': 'Mozilla/5.0' }
};
https.get(options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      if (json.jobs && json.jobs[0]) {
        const job = json.jobs[0];
        console.log('Job status=' + job.status + ', conclusion=' + job.conclusion);
        if (job.steps) {
          job.steps.forEach(s => {
            console.log('  Step ' + s.name + ': status=' + s.status + ', conclusion=' + s.conclusion);
          });
        }
      } else {
        console.log(data);
      }
    } catch (e) {
      console.error(e);
    }
  });
}).on('error', console.error);
