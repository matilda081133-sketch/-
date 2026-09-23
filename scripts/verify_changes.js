const fs = require('fs');

function checkFile(filePath, checks) {
  if (!fs.existsSync(filePath)) {
    console.error('FILE NOT FOUND:', filePath);
    return;
  }
  const html = fs.readFileSync(filePath, 'utf8');
  console.log('Checking:', filePath);
  checks.forEach(({ label, contains, notContains }) => {
    if (contains) {
      const ok = html.includes(contains);
      console.log(' ', ok ? 'PASS:' : 'FAIL:', label, ok ? '' : 'Expected: ' + contains);
    }
    if (notContains) {
      const ok = !html.includes(notContains);
      console.log(' ', ok ? 'PASS:' : 'FAIL:', label, ok ? '' : 'Found unexpected: ' + notContains);
    }
  });
}

// 1. Zashchita Poterpevshego
checkFile('out/grazhdanam/advokat-po-ugolovnym-delam/zashchita-poterpevshego/index.html', [
  { label: 'New CPC text', contains: 'Расходы потерпевшего на представителя могут быть признаны процессуальными издержками' },
  { label: 'Old CPC text absent', notContains: 'Вознаграждение адвоката-представителя признаётся процессуальными издержками' }
]);

// 2. Main Page
checkFile('out/index.html', [
  { label: 'ReviewsBlock hidden', notContains: 'Отзывы и независимые оценки' },
  { label: 'New FAQ guarantee answer in UI', contains: 'До начала работы изучим документы, оценим перспективы и определим результат' },
  { label: 'Old FAQ guarantee answer absent', notContains: 'ЮК гарантирует соблюдение согласованных условий, конфиденциальность' }
]);

// 3. 115-FZ Hub
checkFile('out/biznesu/razblokirovka-raschetnogo-scheta-po-115-fz/index.html', [
  { label: 'Hero landline phone', contains: '+7 (4742) 20-15-25' },
  { label: 'Hero tel link', contains: 'href="tel:+74742201525"' },
  { label: 'Hero old mobile absent', notContains: '+7 (910) 350-31-11' },
  { label: 'Barrier tariff bullet updated', contains: 'незаконно удержанную банком комиссию при закрытии счёта' },
  { label: 'Old barrier tariff absent', notContains: 'заградительные тарифы (10–25%)' },
  { label: 'Curator subtitle updated', contains: 'корпоративным' },
  { label: 'Curator unverified quote removed', notContains: 'Ограничения по 115-ФЗ парализуют компанию в считанные часы' },
  { label: 'Curator bullet 1', contains: 'С 1997 года — практический опыт юридических' },
  { label: 'Curator bullet 2', contains: 'Россия и Беларусь — география реализованных' },
  { label: 'Old unverified curator procedure claim absent', notContains: 'Реализованы десятки успешных процедур' },
  { label: 'MVK route updated', contains: 'Применяется при отказе банка после первичного пересмотра' },
  { label: 'ProcessBlock subtitle updated', contains: 'Каждая ситуация с ограничениями по 115-ФЗ индивидуальна' },
  { label: 'Stage 04 text updated', contains: 'Семидневный срок относится к рассмотрению банком заявления о пересмотре отказа' },
  { label: 'Stage 05 text updated', contains: 'Если банк сохраняет решение, проверяем применимость обращения в МВК' },
  { label: 'Phone pattern in form', contains: 'pattern="^\\+?[0-9() -]{7,20}$"' },
  { label: 'Service serviceType schema', contains: 'Юридическая помощь при ограничениях по 115-ФЗ' },
  { label: 'Person Nacheshnikov schema', contains: 'Владимир Викторович Начешников' },
  { label: 'Employee link schema', contains: 'nacheshnikov-vladimir-viktorovich/#person' },
  { label: 'Address Sovetskaya 35 schema', contains: 'ул. Советская, 35' },
  { label: 'Offer url with 115-fz pricing', contains: 'https://dejure-help.ru/biznesu/razblokirovka-raschetnogo-scheta-po-115-fz/#pricing' }
]);

// 4. Specialist Page
checkFile('out/specialisty/nacheshnikov-vladimir-viktorovich/index.html', [
  { label: '115-FZ direction card in specialist profile', contains: 'Разблокировка расчётного счёта по 115-ФЗ' },
  { label: 'Link to 115-FZ hub', contains: '/biznesu/razblokirovka-raschetnogo-scheta-po-115-fz/' }
]);

// 5. OG Image
const ogPath = 'public/images/og/razblokirovka-raschetnogo-scheta-po-115-fz-og.jpg';
console.log('OG image exists in public:', fs.existsSync(ogPath), 'Size:', fs.existsSync(ogPath) ? fs.statSync(ogPath).size : 0);
const outOgPath = 'out/images/og/razblokirovka-raschetnogo-scheta-po-115-fz-og.jpg';
console.log('OG image exists in out:', fs.existsSync(outOgPath), 'Size:', fs.existsSync(outOgPath) ? fs.statSync(outOgPath).size : 0);
