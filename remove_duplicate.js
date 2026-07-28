const fs = require('fs');

const sochFile = 'src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx';
let soch = fs.readFileSync(sochFile, 'utf8');

const lines = soch.split(/\r?\n/);

const startIdx = lines.findIndex(l => l.includes('Левая колонка - Темная акцентная карточка'));
if (startIdx !== -1) {
  // Find the matching end div for the dark card.
  // It's exactly 16 lines long from the comment based on our grep output.
  // We can just splice it out.
  lines.splice(startIdx, 17);
  
  fs.writeFileSync(sochFile, lines.join('\n'));
  console.log('Removed first duplicate card');
} else {
  console.log('Could not find duplicate card');
}

// Ensure the second occurrence is brightened just like the first one was
const finalSoch = fs.readFileSync(sochFile, 'utf8');
const finalLines = finalSoch.split(/\r?\n/);
const secondIdx = finalLines.findIndex(l => l.includes('Что сообщить при первом обращении'));
if (secondIdx !== -1) {
  finalLines[secondIdx] = finalLines[secondIdx].replace(/color: 'var\(--color-gold\)'/, "color: '#FFDF99'");
  fs.writeFileSync(sochFile, finalLines.join('\n'));
  console.log('Brightened second card header');
}
