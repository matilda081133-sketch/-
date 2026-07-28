const fs = require('fs');
let code = fs.readFileSync('src/components/MilitaryHero.tsx', 'utf8');

if (!code.includes('theme?:')) {
    code = code.replace('type ExtendedHeroProps = HeroProps & {', 'type ExtendedHeroProps = HeroProps & {\n  theme?: \'light\' | \'dark\';');
}

if (!code.includes('theme = \'light\'')) {
    code = code.replace('  buttonMarginTop\n}: ExtendedHeroProps)', '  buttonMarginTop,\n  theme = \'light\'\n}: ExtendedHeroProps)');
}

code = code.replace(/background: 'linear-gradient\(145deg, var\(--color-deep-blue\).*?\),/s, 
`background: theme === 'dark' 
        ? 'linear-gradient(145deg, var(--color-deep-blue) 0%, #0B1826 100%)' 
        : 'linear-gradient(145deg, var(--color-cream) 0%, rgba(247, 244, 237, 0.4) 100%)',`);

code = code.replace(/<h1 style=\{\{([^>]*?)color: 'var\(--color-white\)'([^>]*?)\}\}>/g, '<h1 style={{$1color: theme === \'dark\' ? \'var(--color-white)\' : \'var(--color-deep-blue)\'$2}}>');

fs.writeFileSync('src/components/MilitaryHero.tsx', code);
