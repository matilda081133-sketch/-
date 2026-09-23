const fs = require('fs');

console.log('=== VERIFYING BUILD ARTIFACTS ===');

// 1. Sitemap
const sitemap = fs.readFileSync('out/sitemap.xml', 'utf8');
console.log('1. Sitemap checks:');
console.log('   /privacy/ present:', sitemap.includes('/privacy/'));
console.log('   /consent/ present:', sitemap.includes('/consent/'));
console.log('   /cookies/ present:', sitemap.includes('/cookies/'));

// 2. Robots meta tags
console.log('2. Robots meta checks:');
for (const p of ['cookies', 'privacy', 'consent']) {
  const html = fs.readFileSync(`out/${p}/index.html`, 'utf8');
  const hasNoindex = html.includes('noindex') && html.includes('follow');
  console.log(`   ${p}: noindex, follow present = ${hasNoindex}`);
}

// 3. .htaccess
console.log('3. .htaccess caching rules:');
const htaccess = fs.readFileSync('out/.htaccess', 'utf8');
console.log('   Has ExpiresByType application/xml 1 day:', htaccess.includes('ExpiresByType application/xml "access plus 1 day"'));
console.log('   Has sitemap max-age=86400:', htaccess.includes('max-age=86400'));

// 4. Tax Hub & Droblenie checks
console.log('4. Tax Hub checks:');
const taxHtml = fs.readFileSync('out/biznesu/nalogovyj-yurist-dlya-biznesa/index.html', 'utf8');
console.log('   Tax hub duplicate "Да. Да.":', taxHtml.includes('Да. Да. Юристы'));
const droblenieHtml = fs.readFileSync('out/biznesu/nalogovyj-yurist-dlya-biznesa/zashchita-pri-obvinenii-v-droblenii-biznesa/index.html', 'utf8');
console.log('   Droblenie criminal risk link:', droblenieHtml.includes('https://dejure-help.ru/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-nalogovym-prestupleniyam/'));
