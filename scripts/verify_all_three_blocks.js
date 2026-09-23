const fs = require('fs');

let allPassed = true;
function check(name, condition, details = '') {
  if (condition) {
    console.log(`[PASS] ${name}`);
  } else {
    console.error(`[FAIL] ${name} ${details}`);
    allPassed = false;
  }
}

// ----------------------------------------------------
// BLOCK 6: REAL ESTATE
// ----------------------------------------------------
console.log('\n--- BLOCK 6: REAL ESTATE ---');
{
  const hub = fs.readFileSync('src/app/grazhdanam/yurist-po-nedvizhimosti/YuristPoNedvizhimostiClient.tsx', 'utf8');
  check('Hub subtitle', hub.includes('Безопасно проведём сделку, оформим право собственности или защитим недвижимость в споре. Проверим документы и риски до передачи денег и доведём дело до нужного результата.'));

  const spory = fs.readFileSync('src/app/grazhdanam/yurist-po-nedvizhimosti/spory-s-zastrojshchikom/SporySZastrojshchikomClient.tsx', 'utf8');
  check('Spory s zastrojshchikom card', spory.includes('Судебный иск, компенсация морального вреда и положенный потребительский штраф'));

  const neustoyka = fs.readFileSync('src/app/grazhdanam/yurist-po-nedvizhimosti/vzyskanie-neustojki-po-ddu/VzyskanieNeustojkiDDUClient.tsx', 'utf8');
  check('Neustojka hero subtitle', neustoyka.includes('Взыщем неустойку, подтверждённые убытки на аренду, компенсацию морального вреда и положенный потребительский штраф.'));
  check('Neustojka section subtitle', neustoyka.includes('Включим в требования неустойку, подтверждённые убытки, компенсацию морального вреда и положенный потребительский штраф.'));
  check('Neustojka card title', neustoyka.includes("title: 'Потребительский штраф',"));
  check('Neustojka card desc', neustoyka.includes("Добьёмся взыскания положенного потребительского штрафа, если застройщик добровольно не исполнит обоснованные требования дольщика."));
  check('Neustojka moral damage card', neustoyka.includes("Компенсация морального вреда, а также возмещение обоснованных и документально подтверждённых судебных расходов."));
  check('Neustojka visual tag 1', neustoyka.includes('Потребительский штраф + Убытки'));
  check('Neustojka visual tag 2', neustoyka.includes('+ Потребительский штраф'));
  check('Neustojka pricing 1', neustoyka.includes('Взыскание компенсации морального вреда и положенного потребительского штрафа'));
  check('Neustojka pricing 2', neustoyka.includes('Положенный потребительский штраф при наличии оснований'));

  const rastorzhenie = fs.readFileSync('src/app/grazhdanam/yurist-po-nedvizhimosti/rastorzhenie-ddu/RastorzhenieDDUClient.tsx', 'utf8');
  check('Rastorzhenie 4 ways note', rastorzhenie.includes('Если ДДУ оплачивался за счёт ипотеки, согласуем с банком порядок возврата средств со счёта эскроу, погашения кредита и снятия залога.'));
  check('Rastorzhenie step 5', rastorzhenie.includes('Взыскиваем с застройщика положенные проценты по ст. 9 № 214-ФЗ, подтверждённые убытки и положенный потребительский штраф.'));
  check('Rastorzhenie pricing', rastorzhenie.includes('Взыскание положенных процентов, подтверждённых убытков и потребительского штрафа'));

  const nedostatki = fs.readFileSync('src/app/grazhdanam/yurist-po-nedvizhimosti/nedostatki-kvartiry-i-vzyskanie-rashodov/NedostatkiKvartiryClient.tsx', 'utf8');
  check('Nedostatki visual tag', nedostatki.includes('+ Положенный штраф'));

  const priznanie = fs.readFileSync('src/app/grazhdanam/yurist-po-nedvizhimosti/priznanie-prava-sobstvennosti-na-nedvizhimost/PriznaniePravaSobstvennostiClient.tsx', 'utf8');
  check('Priznanie superTitle', priznanie.includes('ОФОРМЛЕНИЕ ПРАВА • РОСРЕЕСТР • СУД • ЛИПЕЦК'));
  check('Priznanie trustItem 1', priznanie.includes('Устранение приостановки или отказа Росреестра.'));
  check('Priznanie trustItem 2', priznanie.includes('Восстановление правоустанавливающих документов.'));
  check('Priznanie trustItem 3', priznanie.includes('Признание права через суд и регистрация в ЕГРН, когда внесудебного порядка недостаточно.'));
  check('Priznanie primary CTA', priznanie.includes('primaryCtaText="Оформить право собственности"'));
  check('Priznanie secondary CTA', priznanie.includes('secondaryCtaText="Способы оформления"'));

  const osparivanieSdelok = fs.readFileSync('src/app/grazhdanam/yurist-po-nedvizhimosti/osparivanie-sdelok-s-nedvizhimostyu/OsparivanieSdelokClient.tsx', 'utf8');
  check('Osparivanie sdelok hero trustItem', osparivanieSdelok.includes('Срочно подготовим и подадим заявление о судебном аресте объекта.'));
  check('Osparivanie sdelok pricing', osparivanieSdelok.includes('Подготовка и подача заявления об обеспечительных мерах'));
}

// ----------------------------------------------------
// BLOCK 4: TAX DIRECTION
// ----------------------------------------------------
console.log('\n--- BLOCK 4: TAX DIRECTION ---');
{
  const hub = fs.readFileSync('src/app/biznesu/nalogovyj-yurist-dlya-biznesa/NalogovyjYuristClient.tsx', 'utf8');
  check('Tax Hub process subtitle', hub.includes('Сначала определяем текущую стадию, документы и процессуальные сроки. Затем согласуем правовую позицию, формируем доказательства и сопровождаем защиту до согласованного результата.'));
  check('Tax Hub step 6', hub.includes('Разъясняем принятое решение, добиваемся снятия ограничений со счетов и имущества и снижаем риск передачи материалов в правоохранительные органы.'));
  check('Tax Hub FAQ', hub.includes('Да. Юристы подготовят ходатайство об обеспечительных мерах и будут добиваться приостановления действия решения ФНС и списания денег со счетов. Решение принимает суд, поэтому само обращение в арбитражный суд взыскание автоматически не останавливает.'));
  check('Tax Hub phone', hub.includes('+7 (4742) 20-15-25') && !hub.includes('+7 (910) 350-31-11'));
  check('Tax Hub pricing pageUrl', hub.includes('pageUrl="https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/"'));

  const hubPage = fs.readFileSync('src/app/biznesu/nalogovyj-yurist-dlya-biznesa/page.tsx', 'utf8');
  check('Tax Hub page.tsx Bobkin Person', hubPage.includes('bobkin-arkadiy-evgenevich/#person'));
  check('Tax Hub page.tsx employee link', hubPage.includes("employee:"));

  const soprovozhdenie = fs.readFileSync('src/app/biznesu/nalogovyj-yurist-dlya-biznesa/soprovozhdenie-nalogovyh-proverok/SoprovozhdenieProverokClient.tsx', 'utf8');
  check('Soprovozhdenie risk block', soprovozhdenie.includes('Ошибки и противоречия в первых пояснениях или протоколах допросов могут серьёзно осложнить дальнейшую защиту и снизить шансы на отмену доначислений.'));
  check('Soprovozhdenie 1 month objection', soprovozhdenie.includes('Пропуск месячного срока существенно снижает возможность снять претензии до вынесения решения. Если срок заканчивается или уже пропущен, необходимо определить, какие доводы и документы ещё можно представить при рассмотрении материалов.'));
  check('Soprovozhdenie Bobkin experience 1', soprovozhdenie.includes('22 года в следственных подразделениях налоговой полиции и МВД.'));
  check('Soprovozhdenie Bobkin experience 2', soprovozhdenie.includes('В юридической профессии с 1997 года.'));
  check('Soprovozhdenie FAQ question', soprovozhdenie.includes('Может ли юрист или адвокат присутствовать при допросе свидетеля в ФНС?'));
  check('Soprovozhdenie related service', soprovozhdenie.includes('Защита деловой цели и самостоятельности компаний, опровержение доводов ФНС и применение налоговой амнистии при соблюдении установленных законом условий.'));
  check('Soprovozhdenie phone', soprovozhdenie.includes('+7 (4742) 20-15-25') && !soprovozhdenie.includes('+7 (910) 350-31-11'));
  check('Soprovozhdenie pricing pageUrl', soprovozhdenie.includes('pageUrl="https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/soprovozhdenie-nalogovyh-proverok/"'));

  const osparivanie = fs.readFileSync('src/app/biznesu/nalogovyj-yurist-dlya-biznesa/osparivanie-donachislenij-i-reshenij-fns/OsparivanieReshenijFnsClient.tsx', 'utf8');
  check('Osparivanie Bobkin photo', osparivanie.includes('imageUrl="/images/bobkin.jpg"'));
  check('Osparivanie Bobkin name', osparivanie.includes('imageName="Аркадий Евгеньевич Бобкин"'));
  check('Osparivanie Bobkin title', osparivanie.includes('imageSubtitle="Директор, управляющий партнёр ЮК «Де-Юре», куратор направления"'));
  check('Osparivanie hero promise', osparivanie.includes('Добьёмся приостановления принудительного взыскания и снятия ограничений со счетов'));
  check('Osparivanie 75-day risk title', osparivanie.includes('Риск передачи материалов в следственные органы'));
  check('Osparivanie 75-day risk text', osparivanie.includes('Если через 75 дней после вступления решения в силу недоимка не погашена, а её размер и обстоятельства позволяют предполагать признаки налогового преступления, ФНС направляет материалы в следственные органы.'));
  check('Osparivanie deadline intro', osparivanie.includes('Пропуск сроков обжалования может привести к вступлению решения в силу и принудительному списанию денег. При наличии предусмотренных законом признаков ФНС также может направить материалы в следственные органы.'));
  check('Osparivanie FAQ', osparivanie.includes('Пока апелляционная жалоба не рассмотрена и решение ФНС не вступило в силу, 75-дневный срок не начинается. После вступления решения в силу судебное обжалование само по себе не устраняет уголовный риск.'));
  check('Osparivanie related service', osparivanie.includes('Защита деловой цели и самостоятельности компаний, опровержение доводов ФНС и применение налоговой амнистии при соблюдении установленных законом условий.'));
  check('Osparivanie pricing pageUrl', osparivanie.includes('pageUrl="https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/osparivanie-donachislenij-i-reshenij-fns/"'));

  const droblenie = fs.readFileSync('src/app/biznesu/nalogovyj-yurist-dlya-biznesa/zashchita-pri-obvinenii-v-droblenii-biznesa/ZashchitaPriDrobleniiClient.tsx', 'utf8');
  check('Droblenie amnesty title', droblenie.includes('Налоговая амнистия при дроблении бизнеса по Закону № 176-ФЗ'));
  check('Droblenie amnesty card text', droblenie.includes('Проверим условия применения налоговой амнистии и добьёмся прекращения обязанности по уплате налогов, пеней и штрафов за 2022–2024 годы, если бизнес выполнил установленные законом требования добровольного отказа от дробления в 2025–2026 годах.'));
  check('Droblenie H2', droblenie.includes('Ключевые риски и условия налоговой амнистии'));
  check('Droblenie amnesty text', droblenie.includes('Закон предусматривает прекращение обязанности по уплате связанных с дроблением налогов, пеней и штрафов за 2022–2024 годы при соблюдении условий добровольного отказа от дробления в 2025–2026 годах. Объединение компаний и переход на ОСНО — не единственные возможные способы отказа.'));
  check('Droblenie guaranteed relief replaced', droblenie.includes('Определим допустимый способ отказа от дробления и сопроводим выполнение условий, необходимых для прекращения обязанности по уплате налогов, пеней и штрафов по Закону № 176-ФЗ.'));
  check('Droblenie FAQ', droblenie.includes('Как работает налоговая амнистия по дроблению бизнеса в 2025–2026 годах?'));
  check('Droblenie consolidation text', droblenie.includes('ФНС может объединить показатели участников и пересчитать налоговые обязательства так, как если бы деятельность велась единым хозяйствующим субъектом. Это может привести к крупным доначислениям, блокировке оборотных средств и угрозе финансовой устойчивости бизнеса.'));
  check('Droblenie personal liability', droblenie.includes('При наличии предусмотренных законом оснований ФНС может добиваться взыскания задолженности с взаимозависимых лиц, а при банкротстве — привлечения руководителей, учредителей и фактических контролирующих лиц к субсидиарной ответственности.'));
  check('Droblenie criminal card text', droblenie.includes('Если размер неисполненной налоговой обязанности достигает крупного размера и ФНС усматривает признаки умышленного уклонения, возникает риск уголовного дела по ст. 199 УК РФ. Согласуем налоговую позицию с уголовно-правовой защитой и снизим риски для руководителей и собственников.'));
  check('Droblenie criminal card link', droblenie.includes('/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-nalogovym-prestupleniyam/'));
  check('Droblenie phone', droblenie.includes('+7 (4742) 20-15-25') && !droblenie.includes('+7 (910) 350-31-11'));
  check('Droblenie pricing pageUrl', droblenie.includes('pageUrl="https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/zashchita-pri-obvinenii-v-droblenii-biznesa/"'));

  const specialistPage = fs.readFileSync('src/app/specialisty/[slug]/page.tsx', 'utf8');
  check('Specialist Bobkin @id', specialistPage.includes("'@id': 'https://dejure-help.ru/specialisty/bobkin-arkadiy-evgenevich/#person'"));
  check('Specialist Bobkin worksFor @id', specialistPage.includes("'@id': 'https://dejure-help.ru/#organization'"));
}

// ----------------------------------------------------
// BLOCK 5: MIGRATION DIRECTION
// ----------------------------------------------------
console.log('\n--- BLOCK 5: MIGRATION DIRECTION ---');
{
  const hub = fs.readFileSync('src/app/biznesu/migracionnoe-soprovozhdenie-biznesa/MigracionnoeSoprovozhdenieClient.tsx', 'utf8');
  check('Migration Hub process subtitle', hub.includes('Миграционные задачи работодателя требуют точного учёта статуса работников, документов и стадии ситуации. На каждом этапе фиксируем состав работ, сроки и следующий результат.'));
  check('Migration Hub phone', hub.includes('+7 (4742) 20-15-25') && !hub.includes('+7 (910) 350-31-11'));
  check('Migration Hub pricing pageUrl', hub.includes('pageUrl="https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/"'));

  const oformlenie = fs.readFileSync('src/app/biznesu/migracionnoe-soprovozhdenie-biznesa/yuridicheskoe-oformlenie-inostrannyh-rabotnikov/YuridicheskoeOformlenieClient.tsx', 'utf8');
  check('Oformlenie H1 normal wrap', !oformlenie.includes('whiteSpace: \'nowrap\', fontSize: \'clamp(22px, 3.2vw, 42px)\''));
  check('Oformlenie notification term (>= 5 occurrences)', (oformlenie.match(/в течение трёх рабочих дней с даты заключения или прекращения договора/g) || []).length >= 5);
  check('Oformlenie process subtitle', oformlenie.includes('Порядок оформления зависит от гражданства, миграционного статуса и условий работы сотрудника. Проверяем документы до допуска, готовим кадровый комплект и контролируем обязательные уведомления.'));
  check('Oformlenie form customFields', oformlenie.includes('name="worker_status"') && oformlenie.includes('name="task"') && oformlenie.includes('name="action_date"'));
  check('Oformlenie buttonText', oformlenie.includes('buttonText="Отправить на проверку"'));
  check('Oformlenie phone', oformlenie.includes('+7 (4742) 20-15-25') && !oformlenie.includes('+7 (910) 350-31-11'));
  check('Oformlenie pricing pageUrl', oformlenie.includes('pageUrl="https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/yuridicheskoe-oformlenie-inostrannyh-rabotnikov/"'));

  const audit = fs.readFileSync('src/app/biznesu/migracionnoe-soprovozhdenie-biznesa/migracionnyj-audit-rabotodatelya/MigracionnyjAuditClient.tsx', 'utf8');
  check('Audit process subtitle', audit.includes('Проводим аудит по согласованному объёму: проверяем работников, документы и внутренние процессы, фиксируем риски и передаём план их законного устранения.'));
  check('Audit form customFields', audit.includes('name="workers_count"') && audit.includes('name="audit_stage"'));
  check('Audit buttonText', audit.includes('buttonText="Получить оценку аудита"'));
  check('Audit phone', audit.includes('+7 (4742) 20-15-25') && !audit.includes('+7 (910) 350-31-11'));
  check('Audit pricing pageUrl', audit.includes('pageUrl="https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/migracionnyj-audit-rabotodatelya/"'));

  const proverka = fs.readFileSync('src/app/biznesu/migracionnoe-soprovozhdenie-biznesa/yurist-pri-migracionnoj-proverke-mvd/YuristPriProverkeMvdClient.tsx', 'utf8');
  check('Proverka process subtitle', proverka.includes('При миграционной проверке важны скорость и единый порядок действий. Сразу определяем стадию, контролируем передачу документов и фиксируем процессуально значимые обстоятельства.'));
  check('Proverka form customFields', proverka.includes('name="inspection_stage"') && proverka.includes('name="event_datetime"'));
  check('Proverka buttonText', proverka.includes('buttonText="Подключить юриста"'));
  check('Proverka phone', proverka.includes('+7 (4742) 20-15-25') && !proverka.includes('+7 (910) 350-31-11'));
  check('Proverka pricing pageUrl', proverka.includes('pageUrl="https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/yurist-pri-migracionnoj-proverke-mvd/"'));

  const koap = fs.readFileSync('src/app/biznesu/migracionnoe-soprovozhdenie-biznesa/zashchita-rabotodatelya-po-state-18-15-koap-rf/ZashchitaPo1815KoapClient.tsx', 'utf8');
  check('Koap 18.15 H1 normal wrap', !koap.includes('whiteSpace: \'nowrap\', fontSize: \'clamp(22px, 3.2vw, 42px)\''));
  check('Koap 18.15 process subtitle', koap.includes('Защиту строим с учётом стадии дела, вменяемой части статьи и имеющихся доказательств. На каждом этапе согласуем процессуальные действия и сообщаем о результате.'));
  check('Koap 18.15 appeal 10 days notice', koap.includes('По общему правилу жалобу можно подать в течение 10 суток со дня вручения или получения копии постановления. Течение срока начинается на следующий день.'));
  check('Koap 18.15 response time notice', koap.includes('Для срочного подключения позвоните по номеру +7 (4742) 20-15-25. Если вы оставите заявку, мы свяжемся с вами в ближайшее рабочее время.'));
  check('Koap 18.15 form customFields', koap.includes('name="koap_part"') && koap.includes('name="case_stage"') && koap.includes('name="next_action_date"') && koap.includes('name="workers_or_episodes_count"'));
  check('Koap 18.15 buttonText', koap.includes('buttonText="Передать дело на оценку"'));
  check('Koap 18.15 phone', koap.includes('+7 (4742) 20-15-25') && !koap.includes('+7 (910) 350-31-11'));
  check('Koap 18.15 pricing pageUrl', koap.includes('pageUrl="https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/zashchita-rabotodatelya-po-state-18-15-koap-rf/"'));

  const migrationPages = [
    'src/app/biznesu/migracionnoe-soprovozhdenie-biznesa/page.tsx',
    'src/app/biznesu/migracionnoe-soprovozhdenie-biznesa/yuridicheskoe-oformlenie-inostrannyh-rabotnikov/page.tsx',
    'src/app/biznesu/migracionnoe-soprovozhdenie-biznesa/migracionnyj-audit-rabotodatelya/page.tsx',
    'src/app/biznesu/migracionnoe-soprovozhdenie-biznesa/yurist-pri-migracionnoj-proverke-mvd/page.tsx',
    'src/app/biznesu/migracionnoe-soprovozhdenie-biznesa/zashchita-rabotodatelya-po-state-18-15-koap-rf/page.tsx'
  ];
  migrationPages.forEach(mp => {
    const content = fs.readFileSync(mp, 'utf8');
    check(`Konopkin Person in ${mp}`, content.includes('konopkin-dmitriy-sergeevich/#person'));
    check(`Employee in ${mp}`, content.includes('employee:'));
  });
}

console.log('\n======================================');
if (allPassed) {
  console.log('>>> ALL VERIFICATION CHECKS PASSED! <<<');
} else {
  console.error('>>> SOME CHECKS FAILED <<<');
  process.exit(1);
}
