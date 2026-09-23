const fs = require('fs');
const path = require('path');

let totalChecks = 0;
let passedChecks = 0;
const failures = [];
const clusterResults = {};

function check(cluster, name, condition, details = '') {
  totalChecks++;
  if (!clusterResults[cluster]) {
    clusterResults[cluster] = { pass: 0, fail: 0, items: [] };
  }
  if (condition) {
    passedChecks++;
    clusterResults[cluster].pass++;
    clusterResults[cluster].items.push({ name, status: 'PASS' });
  } else {
    clusterResults[cluster].fail++;
    clusterResults[cluster].items.push({ name, status: 'FAIL', details });
    failures.push({ cluster, name, details });
  }
}

function fileContains(relPath, str) {
  if (!fs.existsSync(relPath)) {
    console.warn('File not found:', relPath);
    return false;
  }
  return fs.readFileSync(relPath, 'utf8').includes(str);
}

// -------------------------------------------------------------
// 1. ВОЕННЫЙ ЮРИСТ
// -------------------------------------------------------------
const voennyjHub = 'src/app/grazhdanam/voennyj-yurist/page.tsx';
const voennyjHubClient = 'src/app/grazhdanam/voennyj-yurist/VoennyjYuristClient.tsx';
const voennyjRanenie = 'src/app/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/VyplatyZaRanenieClient.tsx';
const voennyjVvk = 'src/app/grazhdanam/voennyj-yurist/osparivanie-zaklyucheniya-vvk/OsparivanieZaklyucheniyaVvkClient.tsx';
const voennyjVoenkomat = 'src/app/grazhdanam/voennyj-yurist/spory-s-voenkomatom/SporySVoenkomatomClient.tsx';
const voennyjBezvestno = 'src/app/grazhdanam/voennyj-yurist/priznanie-voennosluzhashchego-umershim/PriznanieUmreshimClient.tsx';

check('Военный юрист', 'Хаб: отсутствие noindex в page.tsx', !fileContains(voennyjHub, 'noindex'));
check('Военный юрист', 'Хаб: правильные пробелы в DOM ("установить статус и оформить юридические")', 
  fileContains(voennyjHubClient, 'установить статус и оформить юридические') || !fileContains(voennyjHubClient, 'установитьстатус'));
check('Военный юрист', 'Выплаты за ранение: блок куратора с ссылкой на профиль', 
  fileContains(voennyjRanenie, '/specialisty/konopkin-dmitriy-sergeevich/'));
check('Военный юрист', 'Выплаты за ранение: связанная услуга "Оспаривание решений и действий военкомата"', 
  fileContains(voennyjRanenie, 'Оспаривание решений и действий военкомата') || !fileContains(voennyjRanenie, 'Споры с военкоматом и командованием'));
check('Военный юрист', 'Оспаривание ВВК: ссылка на профиль Конопкина', 
  fileContains(voennyjVvk, '/specialisty/konopkin-dmitriy-sergeevich/'));
check('Военный юрист', 'Оспаривание ВВК: карточка "Оспаривание решений и действий военкомата"', 
  fileContains(voennyjVvk, 'Оспаривание решений и действий военкомата') || !fileContains(voennyjVvk, 'Споры с военкоматом и командованием'));
check('Военный юрист', 'Оспаривание военкомата: H1 без склеенных слов', 
  fileContains(voennyjVoenkomat, 'Оспаривание решений и действий военкомата в Липецке') || !fileContains(voennyjVoenkomat, 'Оспариваниерешений'));
check('Военный юрист', 'Признание безвестно: заголовок без склеенных слов', 
  !fileContains(voennyjBezvestno, 'Признаниебезвестно'));

// -------------------------------------------------------------
// 2. КРЕДИТНЫЙ ЮРИСТ
// -------------------------------------------------------------
const kreditHubClient = 'src/app/grazhdanam/kreditnyj-yurist/KreditnyjYuristClient.tsx';
const otmenaPrikazaClient = 'src/app/grazhdanam/kreditnyj-yurist/otmena-sudebnogo-prikaza/OtmenaSudebnogoPrikazaClient.tsx';
const otmenaPrikazaPage = 'src/app/grazhdanam/kreditnyj-yurist/otmena-sudebnogo-prikaza/page.tsx';

check('Кредитный юрист', 'Хаб: кнопка "Проверить срок отмены" ведет на отмену приказа', 
  fileContains(kreditHubClient, 'otmena-sudebnogo-prikaza') && fileContains(kreditHubClient, 'Проверить срок отмены'));
check('Кредитный юрист', 'Хаб: кнопка "Перейти к исполнительному производству"', 
  fileContains(kreditHubClient, 'yurist-po-ispolnitelnomu-proizvodstvu') && fileContains(kreditHubClient, 'Перейти к исполнительному производству'));
check('Кредитный юрист', 'Хаб: пункт 06 "Определение следующего юридического маршрута"', 
  fileContains(kreditHubClient, 'Определение следующего юридического маршрута'));
check('Кредитный юрист', 'Отмена приказа: H1 включает "в Липецке"', 
  fileContains(otmenaPrikazaClient, 'Отмена судебного приказа по кредиту или займу в Липецке') || fileContains(otmenaPrikazaPage, 'Отмена судебного приказа по кредиту или займу в Липецке'));
check('Кредитный юрист', 'Отмена приказа: иконки левой карточки синие, правой золотые', 
  fileContains(otmenaPrikazaClient, 'var(--color-deep-blue)') && fileContains(otmenaPrikazaClient, 'var(--color-gold)'));

// -------------------------------------------------------------
// 3. ВЗЫСКАНИЕ ДОЛГОВ (ФИЗЛИЦА)
// -------------------------------------------------------------
const dolgHubClient = 'src/app/grazhdanam/vzyskanie-dolgov/VzyskanieDolgovClient.tsx';
const dolgDefenseClient = 'src/app/grazhdanam/vzyskanie-dolgov/zashchita-ot-trebovaniy-po-dolgu/ZashchitaOtTrebovaniyClient.tsx';
const marinaProfile = 'src/app/specialisty/smolyaninova-marina-valerevna/SmolyaninovaClient.tsx';

check('Взыскание долгов (физлица)', 'Хаб: подпись куратора без опечатки "•,"', 
  !fileContains(dolgHubClient, '•,') && fileContains(dolgHubClient, 'куратор направления'));
check('Взыскание долгов (физлица)', 'Защита: подпись куратора без опечатки "•,"', 
  !fileContains(dolgDefenseClient, '•,') && fileContains(dolgDefenseClient, 'куратор направления'));
check('Взыскание долгов (физлица)', 'Защита: хлебные крошки "Защита от требований по долгу"', 
  fileContains(dolgDefenseClient, 'Защита от требований по долгу'));
check('Взыскание долгов (физлица)', 'Защита: кнопка вопроса ведет на #defense-form', 
  fileContains(dolgDefenseClient, '#defense-form'));
check('Взыскание долгов (физлица)', 'Профиль Смольяниновой: направление "Взыскание долгов"', 
  fileContains(marinaProfile, 'vzyskanie-dolgov'));

// -------------------------------------------------------------
// 4. ДОГОВОРНОЕ ПРАВО
// -------------------------------------------------------------
const dogovorFiles = [
  'src/app/biznesu/dogovornoe-pravo/DogovornoePravoClient.tsx',
  'src/app/biznesu/dogovornoe-pravo/audit-dogovornoj-raboty/AuditDogovornojRabotyClient.tsx',
  'src/app/biznesu/dogovornoe-pravo/dogovornye-spory/DogovornyeSporyClient.tsx',
  'src/app/biznesu/dogovornoe-pravo/razrabotka-i-ekspertiza-dogovorov/RazrabotkaEkspertizaClient.tsx',
  'src/app/biznesu/dogovornoe-pravo/spory-po-dogovoru-postavki/SporyPostavkaClient.tsx'
];

const allDogovorNoOf213 = dogovorFiles.every(f => !fileContains(f, 'оф. 213'));
check('Договорное право', 'Адрес в Schema.org: "ул. Советская, 35" без "оф. 213"', allDogovorNoOf213, 'Found оф. 213 in some dogovor files');

const sporyPostavki = 'src/app/biznesu/dogovornoe-pravo/spory-po-dogovoru-postavki/SporyPostavkaClient.tsx';
check('Договорное право', 'Поставка: FAQ досудебный порядок 30 календарных дней', 
  fileContains(sporyPostavki, '30 календарных дней'));
check('Договорное право', 'Поставка: FAQ повторные нарушения', 
  fileContains(sporyPostavki, 'повторных нарушений'));
check('Договорное право', 'Поставка: форма двухколоночная с id="form"', 
  fileContains(sporyPostavki, 'id="form"'));

// -------------------------------------------------------------
// 5. БАНКРОТСТВО ФИЗЛИЦ
// -------------------------------------------------------------
const mfcClient = 'src/app/grazhdanam/bankrotstvo-fizicheskih-lic/cherez-mfc/BankrotstvoMfcClient.tsx';
check('Банкротство физлиц', 'МФЦ: куратор без упоминания 1997 года и арбитражного суда', 
  !fileContains(mfcClient, '1997') && !fileContains(mfcClient, 'Арбитражного суда Липецкой области'));
check('Банкротство физлиц', 'МФЦ: ЕФРСБ текст ("После начала процедуры приостанавливается взыскание")', 
  fileContains(mfcClient, 'После начала процедуры приостанавливается взыскание'));
check('Банкротство физлиц', 'МФЦ: FAQ долг свыше 1 млн рублей ("установленный законом лимит в 1 000 000 ₽")', 
  fileContains(mfcClient, '1 000 000 ₽'));
check('Банкротство физлиц', 'МФЦ: кнопка формы "Проверить условия для МФЦ"', 
  fileContains(mfcClient, 'Проверить условия для МФЦ'));
check('Банкротство физлиц', 'Исполнительное производство: есть ссылка на МФЦ', 
  fileContains('src/app/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/IspolnitelnoeClient.tsx', 'bankrotstvo-fizicheskih-lic/cherez-mfc'));
check('Банкротство физлиц', 'Профиль Начешникова: есть ссылка на МФЦ', 
  fileContains('src/app/specialisty/nacheshnikov-vladimir-viktorovich/NacheshnikovClient.tsx', 'bankrotstvo-fizicheskih-lic/cherez-mfc'));

// -------------------------------------------------------------
// 6. БАНКРОТСТВО БИЗНЕСА
// -------------------------------------------------------------
const bankrotstvoBizFiles = [
  'src/app/biznesu/bankrotstvo-biznesa/BankrotstvoBiznesaClient.tsx',
  'src/app/biznesu/bankrotstvo-biznesa/bankrotstvo-kompanii-so-storony-dolzhnika/BankrotstvoDolzhnikaClient.tsx',
  'src/app/biznesu/bankrotstvo-biznesa/predstavlenie-interesov-kreditora/PredstavlenieKreditoraClient.tsx',
  'src/app/biznesu/bankrotstvo-biznesa/zashchita-ot-subsidiarnoj-otvetstvennosti/SubsidiarnayaOtvetstvennostClient.tsx',
  'src/app/biznesu/bankrotstvo-biznesa/osparivanie-sdelok-pri-bankrotstve/OsparivanieSdelokClient.tsx',
  'src/app/biznesu/bankrotstvo-biznesa/vklyuchenie-v-reestr-trebovanij-kreditorov/VklyuchenieVReestrClient.tsx',
  'src/app/biznesu/bankrotstvo-biznesa/obzhalovanie-dejstvij-arbitrazhnogo-upravlyayushchego/ObzhalovanieUpravlyayushchegoClient.tsx'
];

const noOldPhone = bankrotstvoBizFiles.every(f => !fileContains(f, '+7 (910) 350-31-11') && !fileContains(f, 'tel:+79103503111'));
check('Банкротство бизнеса', 'Все 7 страниц: телефон +7 (4742) 20-15-25 (нет 910 350-31-11)', noOldPhone);

const noNacheshnikovAsCurator = bankrotstvoBizFiles.every(f => !fileContains(f, 'Начешников') && !fileContains(f, 'nacheshnikov'));
check('Банкротство бизнеса', 'Все 7 страниц: удален Начешников как куратор направления банкротства бизнеса', noNacheshnikovAsCurator);

const predKreditora = 'src/app/biznesu/bankrotstvo-biznesa/predstavlenie-interesov-kreditora/PredstavlenieKreditoraClient.tsx';
check('Банкротство бизнеса', 'Представление кредитора: формулировка залогового кредитора по ТЗ', 
  fileContains(predKreditora, 'Оформим статус залогового кредитора, подготовим положение о торгах'));

const subOtvet = 'src/app/biznesu/bankrotstvo-biznesa/zashchita-ot-subsidiarnoj-otvetstvennosti/SubsidiarnayaOtvetstvennostClient.tsx';
check('Банкротство бизнеса', 'Субсидиарная ответственность: корректное предупреждение по ТЗ', 
  fileContains(subOtvet, 'Субсидиарная ответственность, установленная судом, как правило, не прекращается'));

// -------------------------------------------------------------
// 7. НЕДВИЖИМОСТЬ (ФИЗЛИЦА)
// -------------------------------------------------------------
const dduClient = 'src/app/grazhdanam/yurist-po-nedvizhimosti/rastorzhenie-ddu/RastorzhenieDDUClient.tsx';
check('Недвижимость (физлица)', 'Расторжение ДДУ: H1 "Расторжение ДДУ в Липецке"', 
  fileContains(dduClient, 'Расторжение ДДУ в Липецке'));
check('Недвижимость (физлица)', 'Расторжение ДДУ: блок "4 способа выйти из ДДУ и вернуть деньги"', 
  fileContains(dduClient, '4 способа выйти из ДДУ и вернуть деньги'));
check('Недвижимость (физлица)', 'Расторжение ДДУ: четвёртый способ "Уступка права требования"', 
  fileContains(dduClient, 'Уступка права требования'));

const defClient = 'src/app/grazhdanam/yurist-po-nedvizhimosti/nedostatki-kvartiry-i-vzyskanie-rashodov/NedostatkiKvartiryClient.tsx';
check('Недвижимость (физлица)', 'Недостатки квартиры: H1 "Недостатки квартиры и взыскание расходов в Липецке"', 
  fileContains(defClient, 'Недостатки квартиры и взыскание расходов в Липецке'));
check('Недвижимость (физлица)', 'Недостатки квартиры: "значительно сложнее" вместо "юридически невозможно"', 
  fileContains(defClient, 'значительно сложнее'));
check('Недвижимость (физлица)', 'Недостатки квартиры: блок "Что можно потребовать от застройщика"', 
  fileContains(defClient, 'Что можно потребовать от застройщика'));

const samostroyClient = 'src/app/grazhdanam/yurist-po-nedvizhimosti/legalizaciya-samovolnoj-postrojki/LegalizaciyaSamostroyaClient.tsx';
check('Недвижимость (физлица)', 'Самострой: "Подадим встречный иск, проведём строительную экспертизу"', 
  fileContains(samostroyClient, 'Подадим встречный иск, проведём строительную экспертизу'));
check('Недвижимость (физлица)', 'Самострой: заголовок "Что проверим перед легализацией постройки"', 
  fileContains(samostroyClient, 'Что проверим перед легализацией постройки'));
check('Недвижимость (физлица)', 'Самострой: блок "Как узаконим объект"', 
  fileContains(samostroyClient, 'Как узаконим объект'));

const priznanieClient = 'src/app/grazhdanam/yurist-po-nedvizhimosti/priznanie-prava-sobstvennosti-na-nedvizhimost/PriznaniePravaClient.tsx';
check('Недвижимость (физлица)', 'Признание права: "доведём процедуру до получения выписки ЕГРН"', 
  fileContains(priznanieClient, 'доведём процедуру до получения выписки ЕГРН'));
check('Недвижимость (физлица)', 'Признание права: "Каким способом оформим право собственности"', 
  fileContains(priznanieClient, 'Каким способом оформим право собственности'));

const osparivanieClient = 'src/app/grazhdanam/yurist-po-nedvizhimosti/osparivanie-sdelok-s-nedvizhimostyu/OsparivanieSdelokClient.tsx';
check('Недвижимость (физлица)', 'Оспаривание сделок: "Результат по спору"', 
  fileContains(osparivanieClient, 'Результат по спору'));
check('Недвижимость (физлица)', 'Оспаривание сделок: "Какого результата добиваемся"', 
  fileContains(osparivanieClient, 'Какого результата добиваемся'));

// -------------------------------------------------------------
// 8. УГОЛОВНО-ПРАВОВАЯ ЗАЩИТА БИЗНЕСА
// -------------------------------------------------------------
const ugolovnoeBizHub = 'src/app/biznesu/ugolovno-pravovaya-zashchita-biznesa/UgolovnoPravovayaZashchitaClient.tsx';
const obepClient = 'src/app/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-pri-proverke-obep/ObepProverkiClient.tsx';
const auditUgolovnyj = 'src/app/biznesu/ugolovno-pravovaya-zashchita-biznesa/ugolovno-pravovoj-audit-biznesa/UgolovnyjAuditClient.tsx';
const ekonPrestup = 'src/app/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-ekonomicheskim-prestupleniyam/EkonomicheskiePrestupleniyaClient.tsx';
const nalPrestup = 'src/app/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-nalogovym-prestupleniyam/NalogovyePrestupleniyaClient.tsx';

check('Уголовная защита бизнеса', 'Хаб FAQ: "тем больше времени остаётся на анализ документов"', 
  fileContains(ugolovnoeBizHub, 'тем больше времени остаётся на анализ документов'));
check('Уголовная защита бизнеса', 'ОБЭП: "Сведения и объяснения, полученные в этот период"', 
  fileContains(obepClient, 'Сведения и объяснения, полученные в этот период'));
check('Уголовная защита бизнеса', 'ОБЭП: заголовок "Подготовка позиции по материалу проверки"', 
  fileContains(obepClient, 'Подготовка позиции по материалу проверки'));
check('Уголовная защита бизнеса', 'Аудит FAQ: законное снижение рисков без оформления документов задним числом', 
  fileContains(auditUgolovnyj, 'По результатам аудита формируется план законного снижения рисков'));
check('Уголовная защита бизнеса', 'Эконом преступления: "Независимые адвокаты, подключённые к делу"', 
  fileContains(ekonPrestup, 'Независимые адвокаты, подключённые к делу'));
check('Уголовная защита бизнеса', 'Налоговые преступления: FAQ ст. 32 НК РФ и 75-дневный срок', 
  fileContains(nalPrestup, 'пункту 3 статьи 32 НК РФ'));

// -------------------------------------------------------------
// 9. УГОЛОВНЫЙ АДВОКАТ ДЛЯ ГРАЖДАН
// -------------------------------------------------------------
const zaderzhanieClient = 'src/app/grazhdanam/advokat-po-ugolovnym-delam/advokat-pri-zaderzhanii-obyske-i-doprose/ZaderzhanieClient.tsx';
const obzhalovanieClient = 'src/app/grazhdanam/advokat-po-ugolovnym-delam/obzhalovanie-prigovora/ObzhalovaniePrigovoraClient.tsx';
const poterpevshijClient = 'src/app/grazhdanam/advokat-po-ugolovnym-delam/zashchita-poterpevshego/PoterpevshijClient.tsx';

check('Уголовный адвокат для граждан', 'Задержание FAQ: дежурный адвокат и права по УПК РФ', 
  fileContains(zaderzhanieClient, 'Сообщите, что хотите пригласить адвоката по соглашению'));
check('Уголовный адвокат для граждан', 'Обжалование приговора: цель обжалования добавлена', 
  fileContains(obzhalovanieClient, 'Цель обжалования — отмена или изменение приговора'));
check('Уголовный адвокат для граждан', 'Обжалование приговора: 8 этапов работы', 
  fileContains(obzhalovanieClient, 'Фиксируем дату приговора или его получения'));
check('Уголовный адвокат для граждан', 'Обжалование приговора: FAQ о сплошной кассации', 
  fileContains(obzhalovanieClient, 'При сплошной кассации жалоба, поданная в установленный'));
check('Уголовный адвокат для граждан', 'Защита потерпевшего: убраны конкретные адвокаты Конопкин и Гусев', 
  !fileContains(poterpevshijClient, 'Дмитрий Конопкин') && !fileContains(poterpevshijClient, 'Олег Гусев'));
check('Уголовный адвокат для граждан', 'Защита потерпевшего: формулировка Аркадия Бобкина как координатора', 
  fileContains(poterpevshijClient, 'Аркадий Бобкин определяет задачи по делу'));

// -------------------------------------------------------------
// 10. ВЗЫСКАНИЕ ЗАДОЛЖЕННОСТИ С ЮРЛИЦ
// -------------------------------------------------------------
const vzyskB2bHub = 'src/app/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/VzyskanieClient.tsx';
const vzyskB2bDefense = 'src/app/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/zashchita-biznesa-ot-vzyskaniya-zadolzhennosti/ZashchitaBiznesaClient.tsx';

check('Взыскание задолженности с юрлиц', 'Хаб: Этап 05 ссылка на банкротство бизнеса', 
  fileContains(vzyskB2bHub, '/biznesu/bankrotstvo-biznesa/'));
check('Взыскание задолженности с юрлиц', 'Хаб: FAQ ссылка на исполнительное производство для бизнеса', 
  fileContains(vzyskB2bHub, '/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/'));
check('Взыскание задолженности с юрлиц', 'Защита: Куратор Владимир Начешников', 
  fileContains(vzyskB2bDefense, 'Владимир Викторович Начешников'));

// -------------------------------------------------------------
// 11. ОБЩЕСАЙТОВЫЕ И ТЕХНИЧЕСКИЕ ПРОВЕРКИ
// -------------------------------------------------------------
check('Технические проверки', 'Отсутствие ссылок на github.io в src/', 
  !fileContains('src/app/layout.tsx', 'github.io') && !fileContains('src/app/biznesu/page.tsx', 'github.io'));

// Summary
console.log('\n======================================================');
console.log(`MASTER AUDIT RESULTS: ${passedChecks}/${totalChecks} PASSED`);
console.log('======================================================\n');

for (const [cluster, res] of Object.entries(clusterResults)) {
  const status = res.fail === 0 ? '✓ ALL PASSED' : `✗ ${res.fail} FAILED`;
  console.log(`${cluster}: ${res.pass}/${res.pass + res.fail} (${status})`);
}

if (failures.length > 0) {
  console.log('\n--- DETAILED FAILURES ---');
  failures.forEach((f, i) => {
    console.log(`${i + 1}. [${f.cluster}] ${f.name}: ${f.details}`);
  });
}
