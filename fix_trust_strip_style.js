const fs = require('fs');
let page = fs.readFileSync('src/components/TrustStrip.tsx', 'utf8');

page = page.replace(/<style>\s*\{\`[\s\S]*?\`\}\s*<\/style>/, `<style dangerouslySetInnerHTML={{ __html: \`
          .trust-strip-container {
            display: flex;
            flex-wrap: nowrap;
            gap: 12px;
            margin-top: -20px;
          }
          @media (max-width: 900px) {
            .trust-strip-container {
              flex-wrap: wrap;
            }
          }
        \`}} />`);

fs.writeFileSync('src/components/TrustStrip.tsx', page, 'utf8');
console.log('Fixed TrustStrip style parsing');
