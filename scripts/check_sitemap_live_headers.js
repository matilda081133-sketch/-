const https = require('https');

https.get('https://dejure-help.ru/sitemap.xml', (res) => {
  console.log('STATUS:', res.statusCode);
  console.log('Cache-Control:', res.headers['cache-control']);
  console.log('Expires:', res.headers['expires']);
  console.log('Last-Modified:', res.headers['last-modified']);
  console.log('Server:', res.headers['server']);
  console.log('Full headers:', res.headers);
}).on('error', console.error);
