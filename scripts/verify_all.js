const fs = require('fs');

const checks = [
  // -------------------------------------------------------------
  // КЛАСТЕР 1. Юрист по недвижимости (физлица)
  // -------------------------------------------------------------
  { name: '1.1 Недвиж: Кнопка «Проверить объект и сделку»', file: 'src/app/grazhdanam/yurist-po-nedvizhimosti/YuristPoNedvizhimostiClient.tsx', pattern: 'Проверить объект и сделку' },
  { name: '1.2 Недвиж: Кнопка «Взыскать с застройщика»', file: 'src/app/grazhdanam/yurist-po-nedvizhimosti/YuristPoNedvizhimostiClient.tsx', pattern: 'Взыскать с застройщика' },
  { name: '1.3 Недвиж: Сопровождение сделок («Защитим интересы покупателя...»)', file: 'src/app/grazhdanam/yurist-po-nedvizhimosti/soprovozhdenie-sdelok-s-nedvizhimostyu/SoprovozhdenieSdelokClient.tsx', pattern: 'Защитим интересы покупателя или продавца и проведём сделку' },
  { name: '1.4 Недвиж: Споры с застройщиком («потребительский штраф»)', file: 'src/app/grazhdanam/yurist-po-nedvizhimosti/spory-s-zastrojshchikom/SporySZastrojshchikomClient.tsx', pattern: 'потребительский штраф' },
  { name: '1.5 Недвиж: Неустойка ДДУ («Подписание дополнительного соглашения...»)', file: 'src/app/grazhdanam/yurist-po-nedvizhimosti/vzyskanie-neustojki-po-ddu/VzyskanieNeustojkiDDUClient.tsx', pattern: 'Подписание дополнительного соглашения может лишить вас права требовать неустойку' },
  { name: '1.6 Недвиж: Расторжение ДДУ («4 способа выйти из ДДУ»)', file: 'src/app/grazhdanam/yurist-po-nedvizhimosti/rastorzhenie-ddu/RastorzhenieDDUClient.tsx', pattern: '4 способа выйти из ДДУ и вернуть деньги' },
  { name: '1.7 Недвиж: Недостатки квартиры («Что можно потребовать от застройщика»)', file: 'src/app/grazhdanam/yurist-po-nedvizhimosti/nedostatki-kvartiry-i-vzyskanie-rashodov/NedostatkiKvartiryClient.tsx', pattern: 'Что можно потребовать от застройщика' },
  { name: '1.8 Недвиж: Самострой («Подадим встречный иск...»)', file: 'src/app/grazhdanam/yurist-po-nedvizhimosti/legalizaciya-samovolnoj-postrojki/LegalizaciyaSamovolnojPostrojkiClient.tsx', pattern: 'Подадим встречный иск, проведём строительную экспертизу' },
  { name: '1.9 Недвиж: Признание права («Оформите право собственности и получите выписку ЕГРН»)', file: 'src/app/grazhdanam/yurist-po-nedvizhimosti/priznanie-prava-sobstvennosti-na-nedvizhimost/PriznaniePravaSobstvennostiClient.tsx', pattern: 'Оформите право собственности и получите выписку ЕГРН' },
  { name: '1.10 Недвиж: Оспаривание сделок («В день обращения подготовим заявление...»)', file: 'src/app/grazhdanam/yurist-po-nedvizhimosti/osparivanie-sdelok-s-nedvizhimostyu/OsparivanieSdelokClient.tsx', pattern: 'В день обращения подготовим заявление об обеспечительных мерах' },

  // -------------------------------------------------------------
  // КЛАСТЕР 2. Арбитражный юрист
  // -------------------------------------------------------------
  { name: '2.1 Арбитраж: Хаб текст о передаче дела', file: 'src/app/biznesu/arbitrazhnyj-yurist/ArbitrazhClient.tsx', pattern: 'Дело передаём юристу по арбитражным спорам после первичного анализа' },
  { name: '2.2 Арбитраж: Сроки («Пропуск процессуального срока может ограничить...»)', file: 'src/app/biznesu/arbitrazhnyj-yurist/ArbitrazhClient.tsx', pattern: 'Пропуск процессуального срока может ограничить возможность' },
  { name: '2.3 Арбитраж: 3 этапа («Определяем правовую позицию: проверяем основания...»)', file: 'src/app/biznesu/arbitrazhnyj-yurist/ArbitrazhClient.tsx', pattern: 'Определяем правовую позицию: проверяем основания требований и возражений' },
  { name: '2.4 Арбитраж: FAQ («Какой результат вы ставите целью по арбитражному делу?»)', file: 'src/app/biznesu/arbitrazhnyj-yurist/ArbitrazhClient.tsx', pattern: 'Какой результат вы ставите целью по арбитражному делу?' },
  { name: '2.5 Арбитраж: Отсутствие блока команды/куратора на хабе', file: 'src/app/biznesu/arbitrazhnyj-yurist/ArbitrazhClient.tsx', pattern: 'TeamCarousel', negative: true },

  // -------------------------------------------------------------
  // КЛАСТЕР 3. Банкротство бизнеса
  // -------------------------------------------------------------
  { name: '3.1 Банкротство: Залоговый кредитор', file: 'src/app/biznesu/bankrotstvo-biznesa/predstavlenie-interesov-kreditora/PredstavlenieKreditoraClient.tsx', pattern: 'Оформим статус залогового кредитора, подготовим положение о торгах' },
  { name: '3.2 Банкротство: Субсидиарная ответственность', file: 'src/app/biznesu/bankrotstvo-biznesa/zashchita-ot-subsidiarnoj-otvetstvennosti/SubsidiarnayaOtvetstvennostClient.tsx', pattern: 'Субсидиарная ответственность, установленная судом, как правило, не прекращается' },
  { name: '3.3 Банкротство: Единый телефон +7 (4742) 20-15-25 на хабе', file: 'src/app/biznesu/bankrotstvo-biznesa/BankrotstvoBiznesaClient.tsx', pattern: '+7 (4742) 20-15-25' },

  // -------------------------------------------------------------
  // КЛАСТЕР 4. Уголовно-правовая защита бизнеса
  // -------------------------------------------------------------
  { name: '4.1 Уголовная бизнес: Хаб FAQ о раннем подключении', file: 'src/app/biznesu/ugolovno-pravovaya-zashchita-biznesa/UgolovnoPravovayaZashchitaClient.tsx', pattern: 'Чем раньше подключены специалисты, тем больше времени остаётся' },
  { name: '4.2 Уголовная бизнес: Проверка ОБЭП («Сведения и объяснения...»)', file: 'src/app/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-pri-proverke-obep/ZashchitaPriProverkeObepClient.tsx', pattern: 'Сведения и объяснения, полученные в этот период' },
  { name: '4.3 Уголовная бизнес: Аудит FAQ о критических рисках', file: 'src/app/biznesu/ugolovno-pravovaya-zashchita-biznesa/ugolovno-pravovoj-audit-biznesa/UgolovnoPravovojAuditClient.tsx', pattern: 'По результатам аудита формируется план законного снижения рисков' },
  { name: '4.4 Уголовная бизнес: Экономические преступления («Независимые адвокаты...»)', file: 'src/app/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-ekonomicheskim-prestupleniyam/ZashchitaPoEkonomicheskimPrestupleniyamClient.tsx', pattern: 'Независимые адвокаты, подключённые к делу' },
  { name: '4.5 Уголовная бизнес: Налоговые преступления («Нет. Налоговая недоимка...»)', file: 'src/app/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-nalogovym-prestupleniyam/ZashchitaPoNalogovymPrestupleniyamClient.tsx', pattern: 'Нет. Налоговая недоимка и решение инспекции сами по себе не означают' },

  // -------------------------------------------------------------
  // КЛАСТЕР 5. Технический аудит и SEO
  // -------------------------------------------------------------
  { name: '5.1 SEO: Canonical Бизнесу https://dejure-help.ru/biznesu/', file: 'src/app/biznesu/page.tsx', pattern: 'https://dejure-help.ru/biznesu/' },
  { name: '5.2 SEO: Отсутствие github.io на странице Бизнесу', file: 'src/app/biznesu/page.tsx', pattern: 'github.io', negative: true },
];

let passCount = 0;
let failCount = 0;

checks.forEach(c => {
  try {
    if (!fs.existsSync(c.file)) {
      console.log('[FILE MISSING] ' + c.name + ': ' + c.file);
      failCount++;
      return;
    }
    const content = fs.readFileSync(c.file, 'utf8');
    const matched = content.includes(c.pattern);
    const ok = c.negative ? !matched : matched;
    if (ok) {
      console.log('[OK] ' + c.name);
      passCount++;
    } else {
      console.log('[FAIL] ' + c.name + (c.negative ? ' (Pattern unexpectedly found!)' : ' (Pattern not found!)'));
      failCount++;
    }
  } catch(e) {
    console.log('[ERROR] ' + c.name + ': ' + e.message);
    failCount++;
  }
});

console.log('\n=======================================');
console.log(`TOTAL CHECKS: ${checks.length} | PASSED: ${passCount} | FAILED: ${failCount}`);
console.log('=======================================');
