const fs = require('fs');

const sochFile = 'src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx';
let soch = fs.readFileSync(sochFile, 'utf8');

// 1. "Что сообщить при первом обращении" brighter title
soch = soch.replace(
  /<h3 style=\{\{\ fontSize:\ '24px',\ fontFamily:\ 'var\(--font-serif\)',\ color:\ '#E6C898',\ marginBottom:\ '24px',\ position:\ 'relative',\ zIndex:\ 1\ \}\}>Что сообщить при первом обращении<\/h3>/g,
  `<h3 style={{ fontSize: '24px', fontFamily: 'var(--font-serif)', color: '#FFDF99', marginBottom: '24px', position: 'relative', zIndex: 1 }}>Что сообщить при первом обращении</h3>`
);

soch = soch.replace(
  /<h3 style=\{\{\ fontSize:\ '24px',\ color:\ 'var\(--color-gold\)',\ marginBottom:\ '24px',\ fontFamily:\ 'var\(--font-serif\)'\ \}\}>Что сообщить при первом обращении<\/h3>/g,
  `<h3 style={{ fontSize: '24px', color: '#FFDF99', marginBottom: '24px', fontFamily: 'var(--font-serif)' }}>Что сообщить при первом обращении</h3>`
);

// 2. Break header "Ответственность за самовольное оставление части"
soch = soch.replace(
  /Ответственность за самовольное оставление части<\/h2>/g,
  `Ответственность за самовольное<br \/>оставление части<\/h2>`
);

// 3. Un-center the description of Ответственность
soch = soch.replace(
  /maxWidth:\ '900px',\ margin:\ '0\ auto\ 40px\ auto'/g,
  "maxWidth: '900px', margin: '0 0 40px 0'"
);

// 4. Fix "Освобождение от ответственности" layout
// It's currently in a grid-2 with the left column being the dark accent card.
// Wait, if I change the grid-2 to flex column, it will stack them.
// Let's replace the grid grid-2 wrapper for this specific section.
const oldGrid = `<div className="grid grid-2" style={{ gap: '40px' }}>
            {/* Левая колонка - Темная акцентная карточка */}`;

const newGrid = `<div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {/* Вертикальное расположение */}`;

soch = soch.replace(oldGrid, newGrid);

fs.writeFileSync(sochFile, soch);
console.log('Fixed SOCH page layout again');
