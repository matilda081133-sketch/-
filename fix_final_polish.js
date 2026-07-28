const fs = require('fs');
const file = 'src/app/grazhdanam/voennyj-yurist/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Fix Remote Help Text Brightness
// Replace 'rgba(255,255,255,0.9)' with 'var(--color-white)' globally in that block
const remoteHelpRegex = /<ul style=\{\{\s*listStyleType:\ 'disc',\s*paddingLeft:\ '20px',\s*margin:\ '0\ 0\ 20px\ 0',\s*fontSize:\ '16px',\s*color:\ 'var\(--color-gold\)',\s*lineHeight:\ 1.7\ \}\}>([\s\S]*?)<\/ul>/;

if (content.match(remoteHelpRegex)) {
  const match = content.match(remoteHelpRegex)[0];
  const newMatch = match.replace(/rgba\(255,255,255,0\.9\)/g, 'var(--color-white)');
  content = content.replace(match, newMatch);
  console.log('Fixed remote help text brightness');
} else {
  console.log('Could not find remote help list');
}

// 2. Fix Urgent block 3 line text
const oldUrgentText = `Ниже — типичные ситуации, в которых откладывать обращение за юридической помощью опасно. Чем раньше подключится профильный специалист, тем больше возможностей для защиты ваших прав.`;
const newUrgentText = `Ниже — типичные ситуации, в которых откладывать обращение<br />за юридической помощью опасно. Чем раньше подключится<br />профильный специалист, тем больше возможностей для защиты ваших прав.`;

if (content.includes(oldUrgentText)) {
  content = content.replace(oldUrgentText, newUrgentText);
  console.log('Fixed urgent block text breaks');
} else {
  console.log('Could not find urgent block text');
}

fs.writeFileSync(file, content);
