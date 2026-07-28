const fs = require('fs');
let page = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', 'utf8');

const startStr = 'Ответственность за самовольное';
const endStr = 'Блок 6. Как адвокат выстраивает защиту';

const startIdx = page.indexOf(startStr);
const endIdx = page.indexOf(endStr);

if (startIdx !== -1 && endIdx !== -1) {
    let block = page.substring(startIdx, endIdx);
    
    // Replace standard border radius
    block = block.replace(/borderRadius:\s*'4px'/g, "borderRadius: '0'");
    
    // Replace specific border radius for SOCH/Desertion inner cards
    block = block.replace(/borderRadius:\s*'0 4px 4px 0'/g, "borderRadius: '0'");
    
    page = page.substring(0, startIdx) + block + page.substring(endIdx);
    fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', page, 'utf8');
    console.log('Successfully removed all border radii in the Responsibility block');
} else {
    console.log('Could not find boundaries for replacement.');
}
