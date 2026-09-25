const https = require('https');

https.get('https://dejure-help.ru', (res) => {
  let html = '';
  res.on('data', chunk => html += chunk);
  res.on('end', () => {
    const navMatch = html.match(/<nav[^>]*class="[^"]*desktop-nav[^"]*"[^>]*>/i);
    console.log('Live nav tag:', navMatch ? navMatch[0] : 'Not found');
    const headerContainer = html.match(/<div[^>]*class="[^"]*header-container[^"]*"[^>]*>/i);
    console.log('Live header-container:', headerContainer ? headerContainer[0] : 'Not found');
    // Also check style tag or inline styles
    const styles = html.match(/translateX\(-28px\)/);
    console.log('Found translateX(-28px):', !!styles);
  });
}).on('error', e => console.error(e));
