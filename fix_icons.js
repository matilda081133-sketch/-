const fs = require('fs');

const mainFile = 'src/app/grazhdanam/voennyj-yurist/page.tsx';
const sochFile = 'src/app/grazhdanam/voennyj-yurist/samovolnoe-ostavlenie-chasti/page.tsx';

const alertTriangle = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D9534F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>';
const alertCircle = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D9534F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>';

let mainContent = fs.readFileSync(mainFile, 'utf8');
mainContent = mainContent.split(alertTriangle).join(alertCircle);
fs.writeFileSync(mainFile, mainContent);

let sochContent = fs.readFileSync(sochFile, 'utf8');
sochContent = sochContent.split(alertTriangle).join(alertCircle);
fs.writeFileSync(sochFile, sochContent);

console.log('Icons updated successfully!');
