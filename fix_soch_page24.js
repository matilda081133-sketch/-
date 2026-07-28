const fs = require('fs');
let page = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', 'utf8');

// The SVG string in the file is:
// <svg width="150" height="150" viewBox="0 0 24 24" fill="var(--color-white)">

page = page.replace(/<svg width="150" height="150" viewBox="0 0 24 24" fill="var\(--color-white\)">/g, 
                   `<svg width="100" height="100" viewBox="0 0 24 24" fill="var(--color-white)">`);

fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx', page, 'utf8');
console.log('Successfully made background SVG smaller');
