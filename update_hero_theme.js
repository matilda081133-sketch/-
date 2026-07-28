const fs = require('fs');

// 1. Update MilitaryHero.tsx
const heroFile = 'src/components/MilitaryHero.tsx';
let heroContent = fs.readFileSync(heroFile, 'utf8');

// Add theme prop type
heroContent = heroContent.replace(
  'type ExtendedHeroProps = HeroProps & {',
  'type ExtendedHeroProps = HeroProps & {\n  theme?: \'light\' | \'dark\';'
);

// Add theme to destructured props
heroContent = heroContent.replace(
  '  imageName,\n  imageSubtitle\n}: ExtendedHeroProps) {',
  '  imageName,\n  imageSubtitle,\n  theme = \'light\'\n}: ExtendedHeroProps) {'
);

// Update background
heroContent = heroContent.replace(
  'background: \'linear-gradient(145deg, var(--color-cream) 0%, rgba(247, 244, 237, 0.4) 100%)\',',
  'background: theme === \'dark\' \n        ? \'linear-gradient(145deg, var(--color-deep-blue) 0%, #0B1826 100%)\' \n        : \'linear-gradient(145deg, var(--color-cream) 0%, rgba(247, 244, 237, 0.4) 100%)\','
);

// Update colors based on theme
heroContent = heroContent.replace(
  /color: 'var\(--color-deep-blue\)'/g,
  'color: theme === \'dark\' ? \'var(--color-white)\' : \'var(--color-deep-blue)\''
);

heroContent = heroContent.replace(
  /color: 'var\(--color-text-secondary\)'/g,
  'color: theme === \'dark\' ? \'rgba(255, 255, 255, 0.8)\' : \'var(--color-text-secondary)\''
);

// Fix the SVG stroke color if it's there
heroContent = heroContent.replace(
  'stroke="var(--color-primary)"',
  'stroke={theme === \'dark\' ? \'var(--color-gold)\' : \'var(--color-primary)\'}'
);

fs.writeFileSync(heroFile, heroContent);
console.log('Updated MilitaryHero.tsx');

// 2. Update page.tsx to pass theme="dark"
const pageFile = 'src/app/grazhdanam/voennyj-yurist/page.tsx';
let pageContent = fs.readFileSync(pageFile, 'utf8');

pageContent = pageContent.replace(
  '        title={<>Военный юрист<br/>в Липецке</>}',
  '        theme="dark"\n        title={<>Военный юрист<br/>в Липецке</>}'
);
fs.writeFileSync(pageFile, pageContent);
console.log('Updated page.tsx');
