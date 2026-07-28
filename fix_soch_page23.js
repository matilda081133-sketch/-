const fs = require('fs');
let page = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', 'utf8');

// Replace both occurrences of the background SVG size
const oldSvg = `<svg width="150" height="150" viewBox="0 0 24 24" fill="var(--color-white)">`;
const newSvg = `<svg width="100" height="100" viewBox="0 0 24 24" fill="var(--color-white)">`;

page = page.replace(new RegExp(oldSvg, 'g'), newSvg);

// Adjust the transform slightly to look better with the smaller size
const oldTransform = `transform: 'translate(20%, -20%)'`;
const newTransform = `transform: 'translate(10%, -10%)'`;
page = page.replace(new RegExp(oldTransform.replace(/[.*+?^\${}()|[\]\\]/g, '\\$&'), 'g'), newTransform);

fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', page, 'utf8');
console.log('Successfully made background SVG smaller');
