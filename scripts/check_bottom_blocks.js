const fs = require('fs');

const sampleFiles = [
  'src/app/grazhdanam/semejnyj-yurist/SemejnyjClient.tsx',
  'src/app/grazhdanam/vzyskanie-dolgov/VzyskanieDolgovClient.tsx',
  'src/app/grazhdanam/zemelnyj-yurist/ZemelnyjYuristClient.tsx',
  'src/app/biznesu/arbitrazhnyj-yurist/ArbitrazhClient.tsx'
];

sampleFiles.forEach(f => {
  console.log('=== ' + f + ' ===');
  const content = fs.readFileSync(f, 'utf8');
  // Find JSX before Footer
  const footerIdx = content.indexOf('<Footer');
  if (footerIdx !== -1) {
    const snippet = content.slice(Math.max(0, footerIdx - 1500), footerIdx);
    console.log(snippet);
  }
});
