const fs = require('fs');
const glob = require('glob');
const pages = glob.sync('src/app/grazhdanam/voennyj-yurist/*/page.tsx');

pages.forEach(p => {
  let content = fs.readFileSync(p, 'utf8');
  if (!content.includes('imageUrl=') && content.includes('<MilitaryHero')) {
    content = content.replace(/primaryCtaText=(['"])(.*?)\1/,
      'primaryCtaText=$1$2$1\n        imageUrl="/-/images/konopkin.jpg"\n        imageName="Дмитрий Сергеевич Конопкин"\n        imageSubtitle="Адвокат, ведущий юрист военного направления"'
    );
    fs.writeFileSync(p, content);
    console.log('Updated', p);
  }
});
