const fs = require('fs');
let code = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/page.tsx', 'utf8');
const formIdx = code.indexOf('<section className="section bg-white" id="form"');
if (formIdx > -1) {
  console.log(code.substring(formIdx, formIdx + 1500));
} else {
  console.log('Not found by section bg-white id=form');
  const contactsFormIdx = code.indexOf('<ContactsForm');
  if (contactsFormIdx > -1) {
    console.log(code.substring(Math.max(0, contactsFormIdx - 500), contactsFormIdx + 500));
  } else {
    console.log('ContactsForm not found at all');
  }
}
