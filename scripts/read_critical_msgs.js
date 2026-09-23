const fs = require('fs');
const allChat = fs.readFileSync('scripts/all_chat_dump.txt', 'utf8');

function showMsg(id) {
  const regex = new RegExp(`ID: ${id}[\\s\\S]*?(?=\\n#{40,}|$)`);
  const match = allChat.match(regex);
  if (match) {
    console.log('====================================================');
    console.log(match[0].trim());
  }
}

const list = [
  'message178762', 'message178763', 'message178764', 'message178765', 
  'message178766', 'message178768', 'message178770', 'message178771', 
  'message178772', 'message178773', 'message178774', 'message178775', 
  'message178776', 'message178777', 'message178778', 'message178779', 
  'message178780', 'message178781', 'message178889', 'message178903', 
  'message178904', 'message178907', 'message178910', 'message178911', 'message178912'
];

list.forEach(showMsg);
