const fs = require('fs');
const path = require('path');

// 1. Update src/app/sitemap.ts: remove /privacy/, /consent/, /cookies/
const sitemapPath = path.resolve('src/app/sitemap.ts');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
sitemapContent = sitemapContent
  .replace(/\r?\n\s*'\/privacy\/',/, '')
  .replace(/\r?\n\s*'\/consent\/',/, '')
  .replace(/\r?\n\s*'\/cookies\/',/, '');
fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
console.log('1. Updated sitemap.ts. Contains /privacy/:', sitemapContent.includes('/privacy/'));

// 2. Update src/app/cookies/page.tsx: add robots: { index: false, follow: true }
const cookiesPath = path.resolve('src/app/cookies/page.tsx');
let cookiesContent = fs.readFileSync(cookiesPath, 'utf8');
if (!cookiesContent.includes('robots:')) {
  cookiesContent = cookiesContent.replace(
    /canonical:\s*'https:\/\/dejure-help\.ru\/cookies\/',/,
    "canonical: 'https://dejure-help.ru/cookies/',\n  },\n  robots: {\n    index: false,\n    follow: true,"
  );
  fs.writeFileSync(cookiesPath, cookiesContent, 'utf8');
}
console.log('2. Updated cookies/page.tsx. Has robots:', cookiesContent.includes('robots:'));

// 3. Update src/app/privacy/page.tsx: add robots: { index: false, follow: true }
const privacyPath = path.resolve('src/app/privacy/page.tsx');
let privacyContent = fs.readFileSync(privacyPath, 'utf8');
if (!privacyContent.includes('robots:')) {
  privacyContent = privacyContent.replace(
    /canonical:\s*'https:\/\/dejure-help\.ru\/privacy\/',/,
    "canonical: 'https://dejure-help.ru/privacy/',\n  },\n  robots: {\n    index: false,\n    follow: true,"
  );
  fs.writeFileSync(privacyPath, privacyContent, 'utf8');
}
console.log('3. Updated privacy/page.tsx. Has robots:', privacyContent.includes('robots:'));

// 4. Update src/app/consent/page.tsx: add robots: { index: false, follow: true }
const consentPath = path.resolve('src/app/consent/page.tsx');
let consentContent = fs.readFileSync(consentPath, 'utf8');
if (!consentContent.includes('robots:')) {
  consentContent = consentContent.replace(
    /canonical:\s*'https:\/\/dejure-help\.ru\/consent\/',/,
    "canonical: 'https://dejure-help.ru/consent/',\n  },\n  robots: {\n    index: false,\n    follow: true,"
  );
  fs.writeFileSync(consentPath, consentContent, 'utf8');
}
console.log('4. Updated consent/page.tsx. Has robots:', consentContent.includes('robots:'));
