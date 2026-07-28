const fs = require('fs');
const file = 'src/app/grazhdanam/voennyj-yurist/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Add delicate border to open form wrapper
const wrapperRegex = /div\ style=\{\{\s*background:\ 'var\(--gradient-cream\)',\s*padding:\ '40px',\s*borderRadius:\ '4px',\s*boxShadow:\ '0\ 10px\ 30px\ rgba\(0,0,0,0\.02\)',\s*width:\ '100%'\s*\}\}/g;
if (content.match(wrapperRegex)) {
  content = content.replace(wrapperRegex, `div style={{ background: 'var(--gradient-cream)', padding: '40px', borderRadius: '4px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', border: '1px solid rgba(23, 50, 77, 0.1)', width: '100%' }}`);
  console.log('Added delicate border to open form wrapper via regex');
} else {
  // Maybe it already has it?
  if (content.includes("border: '1px solid rgba(23, 50, 77, 0.1)'")) {
    console.log('Border already added to open form wrapper');
  } else {
    console.log('Failed to find open form wrapper');
  }
}

// 2. Break Hero Subtitle into 5 lines
const oldSubtitle = 'Защита по уголовным делам (СОЧ, дезертирство, неисполнение приказа), оспаривание незаконных решений ВВК и призывных комиссий, помощь в получении положенных выплат для военнослужащих и членов их семей.';
const newSubtitle = 'Защита по уголовным делам (СОЧ, дезертирство,<br />неисполнение приказа), оспаривание незаконных<br />решений ВВК и призывных комиссий, помощь<br />в получении положенных выплат для<br />военнослужащих и членов их семей.';

// It's passed as subtitle={...} inside page.tsx
// wait, the prop subtitle is a string! You can't pass `<br />` inside a string literal for subtitle="...".
// Oh, MilitaryHero accepts `React.ReactNode` for `title`, but `subtitle` is `string`.
// Wait, I must check `MilitaryHero.tsx` to see if subtitle is `React.ReactNode` or `string`.
// In MilitaryHero.tsx: `subtitle: string;`
// If it's a string, we cannot put <br /> in it!
