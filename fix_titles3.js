const fs = require('fs');
const path = require('path');

const updates = {
  'dezertirstvo/page.tsx': {
    find: 'title="Защита по делам о дезертирстве в Липецке"',
    replace: 'title={<>Защита по делам о дезертирстве<br />в Липецке</>}'
  },
  'osparivanie-zaklyucheniya-vvk/page.tsx': {
    find: 'title="Оспаривание заключения ВВК"',
    replace: 'title={<>Оспаривание заключения ВВК<br />в Липецке</>}'
  },
  'priznanie-voennosluzhashchego-umershim/page.tsx': {
    find: 'title="Признание военнослужащего безвестно отсутствующим и умершим"',
    replace: 'title={<>Признание военнослужащего безвестно<br />отсутствующим и умершим</>}'
  },
  'samovolnoe-ostavlenie-chasti/page.tsx': {
    find: 'title="Защита по делам о самовольном оставлении части (СОЧ)"',
    replace: 'title={<>Защита по делам о самовольном<br />оставлении части (СОЧ)</>}'
  },
  'spory-s-voenkomatom/page.tsx': {
    find: 'title="Защита по спорам с военкоматом и призывной комиссией"',
    replace: 'title={<>Защита по спорам с военкоматом<br />и призывной комиссией</>}'
  },
  'vyplaty-seme-pogibshego-voennosluzhashchego/page.tsx': {
    find: 'title="Выплаты семье погибшего военнослужащего"',
    replace: 'title={<>Выплаты семье погибшего<br />военнослужащего</>}'
  },
  'vyplaty-za-ranenie-voennosluzhashchego/page.tsx': {
    find: 'title="Выплаты за ранение (контузию, травму, увечье) военнослужащего"',
    replace: 'title={<>Выплаты за ранение (контузию, травму,<br />увечье) военнослужащего</>}'
  }
};

const basePath = 'src/app/grazhdanam/voennyj-yurist';

for (const [file, rules] of Object.entries(updates)) {
  const filePath = path.join(basePath, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fallbacks if exact string wasn't found
    if (!content.includes(rules.find)) {
      if (file === 'dezertirstvo/page.tsx') {
        content = content.replace(/title=".*дезертирстве.*"/, rules.replace);
      } else if (file === 'osparivanie-zaklyucheniya-vvk/page.tsx') {
        content = content.replace(/title=".*ВВК.*"/, rules.replace);
      } else if (file === 'priznanie-voennosluzhashchego-umershim/page.tsx') {
        content = content.replace(/title=".*умершим.*"/, rules.replace);
      } else if (file === 'samovolnoe-ostavlenie-chasti/page.tsx') {
        content = content.replace(/title=".*СОЧ.*"/, rules.replace);
      } else if (file === 'spory-s-voenkomatom/page.tsx') {
        content = content.replace(/title=".*военкоматом.*"/, rules.replace);
      } else if (file === 'vyplaty-seme-pogibshego-voennosluzhashchego/page.tsx') {
        content = content.replace(/title=".*семье.*"/, rules.replace);
      } else if (file === 'vyplaty-za-ranenie-voennosluzhashchego/page.tsx') {
        content = content.replace(/title=".*ранение.*"/, rules.replace);
      }
    } else {
      content = content.replace(rules.find, rules.replace);
    }

    fs.writeFileSync(filePath, content);
    console.log('Updated ' + file);
  }
}
