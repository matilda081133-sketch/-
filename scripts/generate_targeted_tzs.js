const fs = require('fs');
const content = fs.readFileSync('scripts/all_chat_dump.txt', 'utf8');

const groups = {
  'Военный юрист': ['message178766'],
  'Кредитный юрист': ['message177384', 'message178768'],
  'Взыскание долгов (физлица)': ['message178770', 'message178779'],
  'Юрист по недвижимости (физлица)': ['message177487', 'message178771', 'message178907', 'message178910', 'message178911', 'message178912'],
  'Банкротство бизнеса': ['message178478', 'message178772', 'message178773', 'message178774', 'message178775', 'message178889'],
  'Банкротство физлиц': ['message177863', 'message177864', 'message178023'],
  'Договорное право': ['message178776', 'message178777', 'message178778'],
  'Уголовно-правовая защита бизнеса': ['message178572', 'message178762', 'message178763', 'message178764', 'message178765', 'message178904'],
  'Уголовный адвокат для граждан': ['message178231', 'message178232', 'message178573', 'message178780', 'message178781'],
  'Трудовое право для бизнеса': ['message177411', 'message177414', 'message177415', 'message177417', 'message177418', 'message177419', 'message177420', 'message178016'],
  'Строительство и недвижимость для бизнеса': ['message177985', 'message178019', 'message178159'],
  'Взыскание задолженности с юрлиц': ['message177865', 'message177866', 'message177867', 'message177868', 'message178036', 'message178037', 'message178038', 'message178157'],
  'Земельный юрист': ['message177409', 'message177410', 'message177428'],
  'Корпоративный юрист': ['message177858', 'message177859', 'message177860', 'message177861', 'message177862']
};

let out = '';
for (const [groupName, ids] of Object.entries(groups)) {
  out += `\n================================================================================\n`;
  out += `### ГРУППА: ${groupName.toUpperCase()}\n`;
  out += `================================================================================\n`;
  ids.forEach(id => {
    const idx = content.indexOf('ID: ' + id);
    if (idx !== -1) {
      const end = content.indexOf('################################################################################', idx);
      const msg = content.substring(idx, end !== -1 ? end : idx + 4000);
      out += `\n--- [${id}] ---\n${msg.trim()}\n`;
    } else {
      out += `\n--- [${id}] --- NOT FOUND\n`;
    }
  });
}

fs.writeFileSync('scripts/all_targeted_tzs.txt', out, 'utf8');
console.log('Saved scripts/all_targeted_tzs.txt, size:', out.length);
