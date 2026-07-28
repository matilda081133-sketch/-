const fs = require('fs');
let code = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', 'utf8');

// Fix the literal '\n' characters injected by mistake
code = code.replace(
  />\\n                Если вашей ситуации <br \/>нет в списке\\n              <\/h2>/g,
  `>
                Если вашей ситуации <br />нет в списке
              </h2>`
);

fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', code);
console.log('Fixed literal slash n');
