const fs = require('fs');

const allChat = fs.readFileSync('scripts/all_chat_dump.txt', 'utf8');

// Helper to extract message text by ID
function getMessage(id) {
  const regex = new RegExp(`ID: ${id}[\\s\\S]*?(?=\\n#{40,}|$)`);
  const match = allChat.match(regex);
  return match ? match[0] : null;
}

// Let's define the clusters and their message IDs
const clusters = {
  '1. Жилищный юрист': {
    files: ['scripts/extracted_tz_zhilishchnyj.txt'],
    msgIds: []
  },
  '2. Миграционный юрист': {
    files: ['scripts/extracted_tz_migracionnyj.txt'],
    msgIds: []
  },
  '3. Арбитражный юрист': {
    files: ['scripts/extracted_tz_arbitrazh.txt'],
    msgIds: ['message178218', 'message178579']
  },
  '4. Трудовое право для бизнеса': {
    files: [
      'tz_docs/hub_trudovye_spory_s_rabotnikami.txt',
      'tz_docs/kadrovyj_audit_organizacii.txt',
      'tz_docs/rassledovanie_neschastnogo_sluchaya_na_proizvodstve.txt',
      'tz_docs/soprovozhdenie_proverki_trudovoj_inspekcii.txt',
      'tz_docs/soprovozhdenie_sokrashcheniya_shtata.txt',
      'tz_docs/soprovozhdenie_uvolneniya_rabotnika.txt',
      'tz_docs/vzyskanie_materialnogo_ushcherba_s_rabotnika.txt'
    ],
    msgIds: ['message177411', 'message177414', 'message177415', 'message177417', 'message177418', 'message177419', 'message177420', 'message178016']
  },
  '5. Взыскание задолженности с юрлиц': {
    files: [],
    msgIds: ['message177865', 'message177866', 'message177867', 'message177868', 'message178036', 'message178037', 'message178038', 'message178157']
  },
  '6. Строительство и недвижимость для бизнеса': {
    files: [],
    msgIds: ['message177985', 'message178019', 'message178159']
  },
  '7. Недвижимость (физлица)': {
    files: [],
    msgIds: ['message177487', 'message178771', 'message178907', 'message178910', 'message178911', 'message178912']
  },
  '8. Уголовно-правовая защита бизнеса': {
    files: [],
    msgIds: ['message178572', 'message178762', 'message178763', 'message178764', 'message178765', 'message178904']
  },
  '9. Уголовный адвокат для граждан': {
    files: [],
    msgIds: ['message178231', 'message178232', 'message178573', 'message178780', 'message178781']
  },
  '10. Банкротство бизнеса': {
    files: [],
    msgIds: ['message178478', 'message178772', 'message178773', 'message178774', 'message178775', 'message178889']
  },
  '11. Банкротство физлиц': {
    files: [],
    msgIds: ['message177863', 'message177864', 'message178023']
  },
  '12. Договорное право для бизнеса': {
    files: [],
    msgIds: ['message178776', 'message178777', 'message178778']
  },
  '13. Военный юрист': {
    files: [],
    msgIds: ['message178766']
  },
  '14. Кредитный юрист': {
    files: [],
    msgIds: ['message177384', 'message178768']
  },
  '15. Взыскание долгов (физлица)': {
    files: [],
    msgIds: ['message178770', 'message178779']
  },
  '16. Земельный юрист': {
    files: [],
    msgIds: ['message177409', 'message177410', 'message177428']
  },
  '17. Корпоративный юрист': {
    files: [],
    msgIds: ['message177858', 'message177859', 'message177860', 'message177861', 'message177862']
  },
  '18. Технические и общесайтовые требования': {
    files: [],
    msgIds: ['message178878', 'message178903']
  }
};

let outputReport = '';

for (const [clusterName, data] of Object.entries(clusters)) {
  outputReport += `\n################################################################################\n`;
  outputReport += `### ${clusterName.toUpperCase()}\n`;
  outputReport += `################################################################################\n`;

  if (data.files && data.files.length > 0) {
    outputReport += `\n--- FILES ASSOCIATED ---\n`;
    data.files.forEach(f => {
      const exists = fs.existsSync(f);
      outputReport += `File: ${f} (${exists ? 'Found, ' + fs.statSync(f).size + ' bytes' : 'NOT FOUND'})\n`;
    });
  }

  if (data.msgIds && data.msgIds.length > 0) {
    outputReport += `\n--- MESSAGES FROM CHAT ---\n`;
    data.msgIds.forEach(id => {
      const msg = getMessage(id);
      if (msg) {
        outputReport += `\n[${id}]\n${msg.trim()}\n`;
      } else {
        outputReport += `\n[${id}] (Not found in chat dump)\n`;
      }
    });
  }
}

fs.writeFileSync('scripts/cluster_tz_summary.txt', outputReport, 'utf8');
console.log('Saved scripts/cluster_tz_summary.txt with size:', outputReport.length);
