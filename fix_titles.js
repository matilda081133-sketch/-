const fs = require('fs');
const path = require('path');

const updates = [
  {
    file: 'dezertirstvo/page.tsx',
    oldTitle: 'title="Защита по делам о дезертирстве в Липецке"',
    newTitle: 'title={<>Защита по делам о дезертирстве<br />в Липецке</>}'
  },
  {
    file: 'osparivanie-zaklyucheniya-vvk/page.tsx',
    oldTitle: 'title="Оспаривание заключения ВВК"',
    newTitle: 'title={<>Оспаривание заключения<br />ВВК</>}'
  },
  {
    file: 'priznanie-voennosluzhashchego-umershim/page.tsx',
    oldTitle: 'title="Признание военнослужащего безвестно отсутствующим и умершим"',
    newTitle: 'title={<>Признание военнослужащего безвестно<br />отсутствующим и умершим</>}'
  },
  {
    file: 'samovolnoe-ostavlenie-chasti/page.tsx',
    oldTitle: 'title="Защита по делам о самовольном оставлении части (СОЧ)"',
    newTitle: 'title={<>Защита по делам о самовольном<br />оставлении части (СОЧ)</>}'
  },
  {
    file: 'spory-s-voenkomatom/page.tsx',
    oldTitle: 'title="Защита по спорам с военкоматом и призывной комиссией"',
    newTitle: 'title={<>Защита по спорам с военкоматом<br />и призывной комиссией</>}'
  },
  {
    file: 'vyplaty-seme-pogibshego-voennosluzhashchego/page.tsx',
    oldTitle: 'title="Выплаты семье погибшего военнослужащего"',
    newTitle: 'title={<>Выплаты семье погибшего<br />военнослужащего</>}'
  },
  {
    file: 'vyplaty-za-ranenie-voennosluzhashchego/page.tsx',
    oldTitle: 'title="Выплаты за ранение (контузию, травму, увечье) военнослужащего"',
    newTitle: 'title={<>Выплаты за ранение (контузию, травму,<br />увечье) военнослужащего</>}'
  }
];

const basePath = 'src/app/grazhdanam/voennyj-yurist';

updates.forEach(update => {
  const filePath = path.join(basePath, update.file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes(update.oldTitle)) {
      content = content.replace(update.oldTitle, update.newTitle);
      fs.writeFileSync(filePath, content);
      console.log(`Updated ${update.file}`);
    } else {
      console.log(`Could not find old title in ${update.file}`);
    }
  }
});
