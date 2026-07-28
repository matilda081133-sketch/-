const fs = require('fs');
let code = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', 'utf8');

// Update the ContactsForm call in the final block
const oldFormCall = '<ContactsForm title="" subtitle="" />';
const newFormCall = '<ContactsForm title="Написать нам" subtitle="" />';
if (code.includes(oldFormCall)) {
    code = code.replace(oldFormCall, newFormCall);
    fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', code);
    console.log('Successfully added title Написать нам');
} else {
    console.log('Failed to find <ContactsForm title="" subtitle="" />');
}
