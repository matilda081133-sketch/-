const fs = require('fs');
let c = fs.readFileSync('src/data/team.ts', 'utf8');

// Add \n before Коллегии in Gusev's status
const OLD = "status: '\u0410\u0434\u0432\u043e\u043a\u0430\u0442, \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0439 \u043f\u0430\u0440\u0442\u043d\u0451\u0440 \u041a\u043e\u043b\u043b\u0435\u0433\u0438\u0438 \u0430\u0434\u0432\u043e\u043a\u0430\u0442\u043e\u0432 \u00ab\u0414\u0435-\u042e\u0440\u0435\u00bb',";
const NEW = "status: '\u0410\u0434\u0432\u043e\u043a\u0430\u0442, \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0439 \u043f\u0430\u0440\u0442\u043d\u0451\u0440\\n\u041a\u043e\u043b\u043b\u0435\u0433\u0438\u0438 \u0430\u0434\u0432\u043e\u043a\u0430\u0442\u043e\u0432 \u00ab\u0414\u0435-\u042e\u0440\u0435\u00bb',";

if (c.includes(OLD)) {
  c = c.replace(OLD, NEW);
  fs.writeFileSync('src/data/team.ts', c, 'utf8');
  console.log('OK - status updated with line break before Kollegi');
} else {
  console.log('NOT FOUND - checking actual text:');
  const idx = c.indexOf('gusev-oleg-yurevich');
  console.log(c.substring(idx, idx+200));
}
