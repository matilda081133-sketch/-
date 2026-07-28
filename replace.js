const fs = require('fs');

let file = 'src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx';
let content = fs.readFileSync(file, 'utf8');
if (!content.includes('import HelpListCard')) {
  content = content.replace(/(import Header .*)/, "$1\nimport HelpListCard from '@/components/HelpListCard';");
}

// Just match by lines to avoid formatting issues
const lines = content.split('\n');
const startIdx = lines.findIndex(l => l.includes("background: 'var(--gradient-cream)', padding: '40px', borderLeft: '4px solid var(--color-gold)'"));
const endIdx = lines.findIndex((l, i) => i > startIdx && l.includes('</div>') && lines[i-1].includes('</ul>'));

if (startIdx !== -1 && endIdx !== -1) {
  const replacement = `            <HelpListCard 
              title="Чем может помочь адвокат"
              items={[
                'Уточнить, возбуждено ли дело и какие решения приняты',
                'Оценить документы, имеющие значение для защиты',
                'Подготовить к процессуальным действиям без заучивания показаний',
                'Согласовать порядок юридического сопровождения',
                'Участвовать в следственных действиях и защищать права'
              ]}
            />`;
  lines.splice(startIdx, endIdx - startIdx + 1, replacement);
  fs.writeFileSync(file, lines.join('\n'));
  console.log('Replaced successfully');
} else {
  console.log('Target not found', startIdx, endIdx);
}
