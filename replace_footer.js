const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

// Add import
page = page.replace(
  "import ReviewsBlock from '@/components/ReviewsBlock';",
  "import ReviewsBlock from '@/components/ReviewsBlock';\nimport Footer from '@/components/Footer';"
);

// Replace inline footer
const footerStart = page.indexOf('      {/* 11. FOOTER */}');
const pageEnd = page.indexOf('    </main>');

if (footerStart !== -1 && pageEnd !== -1) {
  const before = page.slice(0, footerStart);
  const after = page.slice(pageEnd);
  
  page = before + '      {/* 11. FOOTER */}\n      <Footer />\n\n' + after;
  fs.writeFileSync('src/app/page.tsx', page);
  console.log('Footer replaced in page.tsx');
} else {
  console.log('Could not find footer boundaries');
}

// Ensure 64px padding constraint is broadly applied
// We know section padding is set in globals.css for `.section` 
// I will check globals.css as well next.
