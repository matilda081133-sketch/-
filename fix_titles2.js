const fs = require('fs');
const path = require('path');

const updates = {
  'dezertirstvo/page.tsx': {
    replace: 'title={<>Защита по делам о дезертирстве<br />в Липецке</>}'
  },
  'osparivanie-zaklyucheniya-vvk/page.tsx': {
    replace: 'title={<>Оспаривание заключения ВВК<br />в Липецке</>}'
  },
  'priznanie-voennosluzhashchego-umershim/page.tsx': {
    replace: 'title={<>Признание военнослужащего безвестно<br />отсутствующим и умершим</>}'
  },
  'samovolnoe-ostavlenie-chasti/page.tsx': {
    replace: 'title={<>Защита по делам о самовольном<br />оставлении части (СОЧ) в Липецке</>}'
  },
  'spory-s-voenkomatom/page.tsx': {
    replace: 'title={<>Защита по спорам с военкоматом<br />и призывной комиссией</>}'
  },
  'vyplaty-seme-pogibshego-voennosluzhashchego/page.tsx': {
    replace: 'title={<>Выплаты семье погибшего<br />военнослужащего</>}'
  },
  'vyplaty-za-ranenie-voennosluzhashchego/page.tsx': {
    replace: 'title={<>Выплаты за ранение (контузию,<br />травму, увечье) военнослужащего</>}'
  }
};

const basePath = 'src/app/grazhdanam/voennyj-yurist';

for (const [file, rules] of Object.entries(updates)) {
  const filePath = path.join(basePath, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // We target the title prop of MilitaryHero specifically
    // It looks something like: title="Защита по делам о дезертирстве в Липецке"
    const match = content.match(/title=\".*?\"/);
    if (match) {
      console.log('Found in ' + file + ': ' + match[0]);
      content = content.replace(match[0], rules.replace);
      fs.writeFileSync(filePath, content);
      console.log('Updated ' + file);
    } else {
      // In case it's already using a JSX expression: title={<>...</>}
      console.log('No string title found in ' + file);
    }
  }
}
