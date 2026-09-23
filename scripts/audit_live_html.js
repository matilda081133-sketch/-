const fs = require('fs');
const path = require('path');

function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of list) {
    const full = path.join(dir, item.name);
    if (item.isDirectory() && !['_next', '.git'].includes(item.name)) {
      results = results.concat(getHtmlFiles(full));
    } else if (item.isFile() && item.name.endsWith('.html') && !['404.html', 'yandex_3c68fab18a1c851e.html'].includes(item.name)) {
      results.push(full);
    }
  }
  return results;
}

const htmlFiles = getHtmlFiles('./out');
console.log('Total HTML pages in out:', htmlFiles.length);

const stats = {
  total: htmlFiles.length,
  withCanonical: 0,
  withOgImage: 0,
  withJsonLd: 0,
  withBreadcrumbs: 0,
  withFAQPage: 0,
  withOffer: 0,
  withTitleLipetsk: 0,
  withDescLipetsk: 0,
  withDescPhone: 0,
  pagesMissingFAQPageWhenFAQPresent: [],
  pagesMissingOffer: [],
  pagesMissingCanonical: [],
  pagesMissingDescPhone: []
};

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative('./out', file).replace(/\\/g, '/');

  if (/<link[^>]+rel=["']canonical["']/i.test(content)) stats.withCanonical++;
  else stats.pagesMissingCanonical.push(relPath);

  if (/<meta[^>]+property=["']og:image["']/i.test(content)) stats.withOgImage++;

  const hasJsonLd = /<script[^>]+type=["']application\/ld\+json["']/i.test(content);
  if (hasJsonLd) stats.withJsonLd++;

  if (/BreadcrumbList/i.test(content)) stats.withBreadcrumbs++;
  if (/FAQPage/i.test(content)) stats.withFAQPage++;
  if (/Offer/i.test(content)) stats.withOffer++;

  // Check if page has FAQ text/markup but no FAQPage schema
  const hasFaqContent = /faq|частые вопросы|вопрос-ответ/i.test(content) && /accordion|faq-item|q:/i.test(content);
  if (hasFaqContent && !/FAQPage/i.test(content)) {
    stats.pagesMissingFAQPageWhenFAQPresent.push(relPath);
  }

  // Titles & descriptions
  const titleMatch = content.match(/<title>([^<]+)<\/title>/i);
  const title = titleMatch ? titleMatch[1] : '';
  if (/Липецк/i.test(title)) stats.withTitleLipetsk++;

  const descMatch = content.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i);
  const desc = descMatch ? descMatch[1] : '';
  if (/Липецк/i.test(desc)) stats.withDescLipetsk++;
  if (/20-15-25|\+7/i.test(desc)) stats.withDescPhone++;
  else stats.pagesMissingDescPhone.push({ relPath, desc });
}

console.log('--- AUDIT RESULTS ---');
console.log('Canonical:', stats.withCanonical, '/', stats.total);
console.log('OG Image:', stats.withOgImage, '/', stats.total);
console.log('JSON-LD:', stats.withJsonLd, '/', stats.total);
console.log('BreadcrumbList:', stats.withBreadcrumbs, '/', stats.total);
console.log('FAQPage:', stats.withFAQPage, '/', stats.total);
console.log('Offer:', stats.withOffer, '/', stats.total);
console.log('Title with Липецк:', stats.withTitleLipetsk, '/', stats.total);
console.log('Desc with Липецк:', stats.withDescLipetsk, '/', stats.total);
console.log('Desc with Phone:', stats.withDescPhone, '/', stats.total);
console.log('Pages with FAQ content but missing FAQPage schema:', stats.pagesMissingFAQPageWhenFAQPresent.length);
stats.pagesMissingFAQPageWhenFAQPresent.forEach(p => console.log('  missing FAQPage:', p));
console.log('Pages missing Desc Phone (sample first 10):');
stats.pagesMissingDescPhone.slice(0, 10).forEach(p => console.log('  no phone in desc:', p.relPath, '|', p.desc));
