const { execSync } = require('child_process');
const html = execSync('git show origin/gh-pages:index.html', { encoding: 'utf8' });
console.log('origin/gh-pages has translateX(-28px):', html.includes('translateX(-28px)'));
const navMatch = html.match(/<nav[^>]*class="[^"]*desktop-nav[^"]*"[^>]*>/i);
console.log('origin/gh-pages nav tag:', navMatch ? navMatch[0] : 'None');
