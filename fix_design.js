const fs = require('fs');

// Fix ReviewsBlock.tsx
let reviews = fs.readFileSync('src/components/ReviewsBlock.tsx', 'utf8');
reviews = reviews.replace(
  'Мы сохраняем строгую адвокатскую тайну, поэтому публикуем отзывы только с согласия доверителей.',
  'Строго соблюдаем конфиденциальность, поэтому публикуем отзывы только с согласия доверителей.'
);
reviews = reviews.replace(/padding: '100px 0'/g, `padding: '80px 0'`);
fs.writeFileSync('src/components/ReviewsBlock.tsx', reviews, 'utf8');

// Fix page.tsx
let page = fs.readFileSync('src/app/page.tsx', 'utf8');
// Remove rounded corners from Cases cards
page = page.replace(
  /borderRadius: '16px'/g,
  `borderRadius: '0'`
);
// Reduce section padding
page = page.replace(/padding: '120px 0'/g, `padding: '80px 0'`);
page = page.replace(/padding: '100px 0'/g, `padding: '60px 0'`);
page = page.replace(/marginBottom: '100px'/g, `marginBottom: '60px'`);
page = page.replace(/marginBottom: '80px'/g, `marginBottom: '50px'`);
fs.writeFileSync('src/app/page.tsx', page, 'utf8');

// Fix globals.css
let css = fs.readFileSync('src/app/globals.css', 'utf8');
css = css.replace(/padding: 100px 0;/g, `padding: 80px 0;`);
css = css.replace(/padding: 120px 0;/g, `padding: 80px 0;`);
fs.writeFileSync('src/app/globals.css', css, 'utf8');

// Fix other blocks if they have inline padding 100px
['FAQBlock.tsx', 'PricingBlock.tsx', 'ServicesBlock.tsx', 'Header.tsx'].forEach(file => {
  const path = `src/components/${file}`;
  if (fs.existsSync(path)) {
    let content = fs.readFileSync(path, 'utf8');
    content = content.replace(/padding: '100px 0'/g, `padding: '80px 0'`);
    content = content.replace(/padding: '120px 0'/g, `padding: '80px 0'`);
    fs.writeFileSync(path, content, 'utf8');
  }
});

console.log('Fixed design requests');
