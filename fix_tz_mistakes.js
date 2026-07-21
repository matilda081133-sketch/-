const fs = require('fs');

// 1. Fix Hero USPs in page.tsx
let page = fs.readFileSync('src/app/page.tsx', 'utf8');

// Replace the old USPs that I incorrectly added
const oldUsps = /\{\[\s*\{\s*value:[\s\S]*?label:\s*'Юристы и адвокаты по профилю дела'\s*\},[\s\S]*?label:\s*'Практический опыт в органах'\s*\},[\s\S]*?label:\s*'Условия работы строго в договоре'\s*\}\s*\]\.map/m;
const newUsps = `{[
                { value: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>, label: 'Юристы и адвокаты — по профилю дела.' },
                { value: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"></path><path d="M9 8h1"></path><path d="M9 12h1"></path><path d="M9 16h1"></path><path d="M14 8h1"></path><path d="M14 12h1"></path><path d="M14 16h1"></path><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"></path></svg>, label: 'Практический опыт команды — прокуратура, СК, ФССП, администрация.' },
                { value: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><polyline points="9 15 11 17 15 13"></polyline></svg>, label: 'Условия — в договоре — состав работ, стоимость и порядок оплаты.' }
              ].map`;
page = page.replace(oldUsps, newUsps);


// 2. Fix CTA Block Title and Subtitle in page.tsx
// It's currently in section id="consultation"
// <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>...</h2>
// <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)', marginBottom: '40px', lineHeight: 1.6 }}>...</p>
// Let's use regex to replace it inside the consultation section
page = page.replace(
  /<section id="consultation"[\s\S]*?<div className="grid grid-2" style=\{\{ gap: '40px' \}\}>[\s\S]*?<div>\s*<h2[^>]*>[\s\S]*?<\/h2>\s*<p[^>]*>[\s\S]*?<\/p>/,
  `<section id="consultation" className="section bg-cream">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '40px' }}>
            <div>
              <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>Обсудите ситуацию с юристом</h2>
              <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)', marginBottom: '40px', lineHeight: 1.6 }}>Кратко опишите ситуацию. Юрист уточнит обстоятельства и сообщит, какие документы потребуются для дальнейшего разбора.</p>`
);

fs.writeFileSync('src/app/page.tsx', page);


// 3. Fix Reviews Block Text
let reviews = fs.readFileSync('src/components/ReviewsBlock.tsx', 'utf8');
reviews = reviews.replace(
  /Мы сохраняем строгую адвокатскую тайну, поэтому публикуем отзывы только с согласия доверителей[\s\S]*?<\//,
  'Отзывы публикуем только с согласия клиентов. Персональные данные и конфиденциальные сведения не раскрываем.</'
);
fs.writeFileSync('src/components/ReviewsBlock.tsx', reviews);


// 4. Update Header Dropdown for "О компании" (remove "Обзор раздела")
let header = fs.readFileSync('src/components/Header.tsx', 'utf8');
header = header.replace(/<li><Link href="\/o-kompanii" className="dropdown-link-2" style=\{\{ fontWeight: 'bold' \}\}>Обзор раздела<\/Link><\/li>/g, '');
fs.writeFileSync('src/components/Header.tsx', header);

console.log('Fixes applied successfully!');
