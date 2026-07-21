const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

const regex = /<div style=\{\{\s*background:\s*'var\(--color-cream\)',\s*padding:\s*'16px',\s*borderRadius:\s*'4px',\s*marginBottom:\s*'20px'\s*\}\}>\s*<div style=\{\{\s*fontSize:\s*'13px',\s*color:\s*'var\(--color-text-secondary\)',\s*marginBottom:\s*'4px'\s*\}\}>Результат:<\/div>\s*<div style=\{\{\s*fontSize:\s*'15px',\s*color:\s*'var\(--color-primary\)',\s*fontWeight:\s*600\s*\}\}>\{caseItem\.result\}<\/div>\s*<\/div>/g;

const match = page.match(regex);
if (match) {
  console.log('Found old cases block, replacing...');
  const newResultBlock = `<div style={{ 
                  background: 'var(--color-deep-blue)', 
                  padding: '20px', 
                  borderRadius: '0', 
                  marginBottom: '20px', 
                  borderLeft: '4px solid var(--color-gold)',
                  boxShadow: '0 10px 20px rgba(16,39,59,0.1)'
                }}>
                  <div style={{ 
                    fontSize: '12px', 
                    color: 'rgba(255,255,255,0.7)', 
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontWeight: 600
                  }}>Ключевой результат:</div>
                  <div style={{ 
                    fontSize: '16px', 
                    color: 'var(--color-white)', 
                    fontWeight: 600,
                    lineHeight: 1.4 
                  }}>{caseItem.result}</div>
                </div>`;
  page = page.replace(regex, newResultBlock);
  fs.writeFileSync('src/app/page.tsx', page);
} else {
  console.log('Old cases block not found or already replaced.');
}

// ALSO check if it was 'borderRadius: 0' in the previous script attempt
const regex2 = /<div style=\{\{\s*background:\s*'var\(--color-cream\)',\s*padding:\s*'16px',\s*borderRadius:\s*'0',\s*marginBottom:\s*'20px'\s*\}\}>\s*<div style=\{\{\s*fontSize:\s*'13px',\s*color:\s*'var\(--color-text-secondary\)',\s*marginBottom:\s*'4px'\s*\}\}>Результат:<\/div>\s*<div style=\{\{\s*fontSize:\s*'15px',\s*color:\s*'var\(--color-primary\)',\s*fontWeight:\s*600\s*\}\}>\{caseItem\.result\}<\/div>\s*<\/div>/g;
if (page.match(regex2)) {
    console.log('Found old cases block (border radius 0), replacing...');
    const newResultBlock = `<div style={{ 
                  background: 'var(--color-deep-blue)', 
                  padding: '20px', 
                  borderRadius: '0', 
                  marginBottom: '20px', 
                  borderLeft: '4px solid var(--color-gold)',
                  boxShadow: '0 10px 20px rgba(16,39,59,0.1)'
                }}>
                  <div style={{ 
                    fontSize: '12px', 
                    color: 'rgba(255,255,255,0.7)', 
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontWeight: 600
                  }}>Ключевой результат:</div>
                  <div style={{ 
                    fontSize: '16px', 
                    color: 'var(--color-white)', 
                    fontWeight: 600,
                    lineHeight: 1.4 
                  }}>{caseItem.result}</div>
                </div>`;
  page = page.replace(regex2, newResultBlock);
  fs.writeFileSync('src/app/page.tsx', page);
}
