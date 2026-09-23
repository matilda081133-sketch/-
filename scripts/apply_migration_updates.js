const fs = require('fs');

const konopkinPersonJson = {
  "@type": "Person",
  "@id": "https://dejure-help.ru/specialisty/konopkin-dmitriy-sergeevich/#person",
  "name": "Дмитрий Сергеевич Конопкин",
  "url": "https://dejure-help.ru/specialisty/konopkin-dmitriy-sergeevich/",
  "jobTitle": "Адвокат, председатель Коллегии адвокатов «Де-Юре»"
};

function addKonopkinToPage(pagePath) {
  let c = fs.readFileSync(pagePath, 'utf8');
  if (!c.includes('konopkin-dmitriy-sergeevich/#person')) {
    c = c.replace(
      /addressCountry:\s*'RU'\s*\n\s*}/,
      "addressCountry: 'RU'\n        },\n        employee: {\n          '@id': 'https://dejure-help.ru/specialisty/konopkin-dmitriy-sergeevich/#person'\n        }"
    );
    c = c.replace(
      /\n\s*\]\s*\n\s*\}\s*\n\s*\]\s*\n\s*\};\s*\n\s*return \(/,
      `\n            ]\n      },\n      ${JSON.stringify(konopkinPersonJson, null, 8)}\n    ]\n  };\n\n  return (`
    );
    fs.writeFileSync(pagePath, c, 'utf8');
    console.log('Added Konopkin Person to', pagePath);
  }
}

// ----------------------------------------------------
// 1. HUB: MigracionnoeSoprovozhdenieClient.tsx & page.tsx
// ----------------------------------------------------
{
  const p = 'src/app/biznesu/migracionnoe-soprovozhdenie-biznesa/MigracionnoeSoprovozhdenieClient.tsx';
  let c = fs.readFileSync(p, 'utf8');

  // Phone
  c = c.replace(/\+7 \(910\) 350-31-11/g, '+7 (4742) 20-15-25');
  c = c.replace(/tel:\+79103503111/g, 'tel:+74742201525');

  // ProcessBlock subtitle
  if (!c.includes('Миграционные задачи работодателя требуют точного учёта')) {
    c = c.replace(
      `<ProcessBlock\n        title="Как проходит работа по миграционному сопровождению"\n        steps={processSteps}\n      />`,
      `<ProcessBlock\n        title="Как проходит работа по миграционному сопровождению"\n        subtitle="Миграционные задачи работодателя требуют точного учёта статуса работников, документов и стадии ситуации. На каждом этапе фиксируем состав работ, сроки и следующий результат."\n        steps={processSteps}\n      />`
    );
  }

  // PricingBlock pageUrl
  if (!c.includes('pageUrl=')) {
    c = c.replace(
      '<PricingBlock',
      '<PricingBlock\n        pageUrl="https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/"'
    );
  }

  fs.writeFileSync(p, c, 'utf8');
  console.log('Updated MigracionnoeSoprovozhdenieClient.tsx');

  addKonopkinToPage('src/app/biznesu/migracionnoe-soprovozhdenie-biznesa/page.tsx');
}

// ----------------------------------------------------
// 2. YURIDICHESKOE OFORMLENIE: YuridicheskoeOformlenieClient.tsx & page.tsx
// ----------------------------------------------------
{
  const p = 'src/app/biznesu/migracionnoe-soprovozhdenie-biznesa/yuridicheskoe-oformlenie-inostrannyh-rabotnikov/YuridicheskoeOformlenieClient.tsx';
  let c = fs.readFileSync(p, 'utf8');

  // Phone
  c = c.replace(/\+7 \(910\) 350-31-11/g, '+7 (4742) 20-15-25');
  c = c.replace(/tel:\+79103503111/g, 'tel:+74742201525');

  // H1 remove whiteSpace nowrap
  c = c.replace(
    `<span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>\n              Юридическое оформление\n            </span>{' '}\n            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>\n              иностранных работников в Липецке\n            </span>`,
    `<span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'normal', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>\n              Юридическое оформление\n            </span>{' '}\n            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'normal', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>\n              иностранных работников в Липецке\n            </span>`
  );

  // Notification wording
  c = c.replace(
    'уведомим МВД в строгий 3-дневный срок.',
    'уведомим МВД в течение трёх рабочих дней с даты заключения или прекращения договора.'
  );
  c = c.replace(
    'к трудовому договору и 3-дневному уведомлению территориального органа МВД.',
    'к трудовому договору и уведомлению территориального органа МВД в течение трёх рабочих дней с даты заключения или прекращения договора.'
  );
  c = c.replace(
    'направим обязательное уведомление в МВД строго в срок до 3 рабочих дней.',
    'направим обязательное уведомление в МВД в течение трёх рабочих дней с даты заключения или прекращения договора.'
  );
  c = c.replace(
    'Контролируем направление уведомления в 3-дневный срок, получаем подтверждение подачи и передаём компании календарь контрольных дат.',
    'Контролируем направление уведомления в течение трёх рабочих дней с даты заключения или прекращения договора, получаем подтверждение подачи и передаём компании календарь контрольных дат.'
  );
  c = c.replace(
    "{ name: 'Контроль подачи уведомления в течение 3 рабочих дней', value: 'Включено' }",
    "{ name: 'Контроль подачи уведомления в течение трёх рабочих дней с даты заключения или прекращения договора', value: 'Включено' }"
  );
  c = c.replace(
    'уведомить орган МВД о заключении или расторжении трудового договора в 3-дневный срок.',
    'уведомить орган МВД о заключении или расторжении трудового договора в течение трёх рабочих дней с даты заключения или прекращения договора.'
  );
  c = c.replace(
    '3-дневного уведомления МВД',
    'уведомления МВД в течение трёх рабочих дней с даты заключения или прекращения договора'
  );
  c = c.replace(
    'Что делать, если 3-дневный срок уведомления МВД уже пропущен?',
    'Что делать, если срок уведомления МВД уже пропущен?'
  );

  // ProcessBlock subtitle
  if (!c.includes('Порядок оформления зависит от гражданства')) {
    c = c.replace(
      `<ProcessBlock\n        title="Порядок юридического оформления иностранного работника"\n        steps={processSteps}\n      />`,
      `<ProcessBlock\n        title="Порядок юридического оформления иностранного работника"\n        subtitle="Порядок оформления зависит от гражданства, миграционного статуса и условий работы сотрудника. Проверяем документы до допуска, готовим кадровый комплект и контролируем обязательные уведомления."\n        steps={processSteps}\n      />`
    );
  }

  // PricingBlock pageUrl
  if (!c.includes('pageUrl=')) {
    c = c.replace(
      '<PricingBlock',
      '<PricingBlock\n        pageUrl="https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/yuridicheskoe-oformlenie-inostrannyh-rabotnikov/"'
    );
  }

  // Specialized form fields
  const customFieldsJSX = `customFields={
                <>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="company" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-deep-blue)' }}>Компания (необязательно)</label>
                    <input type="text" id="company" name="company" placeholder="ООО «Компания»" style={{ padding: '14px 16px', border: '1px solid rgba(23, 50, 77, 0.2)', borderRadius: '0', fontSize: '15px', outline: 'none', background: 'var(--color-white)', color: 'var(--color-deep-blue)', fontFamily: 'inherit' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="worker_status" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-deep-blue)' }}>Статус работника</label>
                    <select id="worker_status" name="worker_status" defaultValue="патент" style={{ padding: '14px 16px', border: '1px solid rgba(23, 50, 77, 0.2)', borderRadius: '0', fontSize: '15px', outline: 'none', background: 'var(--color-white)', color: 'var(--color-deep-blue)', fontFamily: 'inherit' }}>
                      <option value="патент">Патент</option>
                      <option value="ЕАЭС">ЕАЭС (Беларусь, Казахстан, Армения, Киргизия)</option>
                      <option value="РВП">РВП (разрешение на временное проживание)</option>
                      <option value="ВНЖ">ВНЖ (вид на жительство)</option>
                      <option value="иной">Иной статус</option>
                      <option value="не знаю">Не знаю</option>
                    </select>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="task" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-deep-blue)' }}>Задача</label>
                    <select id="task" name="task" defaultValue="приём" style={{ padding: '14px 16px', border: '1px solid rgba(23, 50, 77, 0.2)', borderRadius: '0', fontSize: '15px', outline: 'none', background: 'var(--color-white)', color: 'var(--color-deep-blue)', fontFamily: 'inherit' }}>
                      <option value="приём">Приём на работу</option>
                      <option value="договор">Составление / проверка договора</option>
                      <option value="уведомление МВД">Уведомление МВД</option>
                      <option value="изменения">Изменения условий / продление</option>
                      <option value="увольнение">Увольнение / расторжение договора</option>
                      <option value="другое">Другое</option>
                    </select>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="action_date" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-deep-blue)' }}>Дата действия</label>
                    <input type="date" id="action_date" name="action_date" style={{ padding: '14px 16px', border: '1px solid rgba(23, 50, 77, 0.2)', borderRadius: '0', fontSize: '15px', outline: 'none', background: 'var(--color-white)', color: 'var(--color-deep-blue)', fontFamily: 'inherit' }} />
                  </div>
                </>
              }
              buttonText="Отправить на проверку"
              commentLabel="Комментарий (необязательно)"`;

  c = c.replace('<ContactsForm />', `<ContactsForm\n              ${customFieldsJSX}\n            />`);

  fs.writeFileSync(p, c, 'utf8');
  console.log('Updated YuridicheskoeOformlenieClient.tsx');

  addKonopkinToPage('src/app/biznesu/migracionnoe-soprovozhdenie-biznesa/yuridicheskoe-oformlenie-inostrannyh-rabotnikov/page.tsx');
}

// ----------------------------------------------------
// 3. MIGRACIONNYJ AUDIT: MigracionnyjAuditClient.tsx & page.tsx
// ----------------------------------------------------
{
  const p = 'src/app/biznesu/migracionnoe-soprovozhdenie-biznesa/migracionnyj-audit-rabotodatelya/MigracionnyjAuditClient.tsx';
  let c = fs.readFileSync(p, 'utf8');

  // Phone
  c = c.replace(/\+7 \(910\) 350-31-11/g, '+7 (4742) 20-15-25');
  c = c.replace(/tel:\+79103503111/g, 'tel:+74742201525');

  // ProcessBlock subtitle
  if (!c.includes('Проводим аудит по согласованному объёму')) {
    c = c.replace(
      `<ProcessBlock\n        title="Пять этапов миграционного аудита"\n        steps={processSteps}\n      />`,
      `<ProcessBlock\n        title="Пять этапов миграционного аудита"\n        subtitle="Проводим аудит по согласованному объёму: проверяем работников, документы и внутренние процессы, фиксируем риски и передаём план их законного устранения."\n        steps={processSteps}\n      />`
    );
  }

  // PricingBlock pageUrl
  if (!c.includes('pageUrl=')) {
    c = c.replace(
      '<PricingBlock',
      '<PricingBlock\n        pageUrl="https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/migracionnyj-audit-rabotodatelya/"'
    );
  }

  // Specialized form fields
  const customFieldsJSX = `customFields={
                <>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="company" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-deep-blue)' }}>Компания (необязательно)</label>
                    <input type="text" id="company" name="company" placeholder="ООО «Компания»" style={{ padding: '14px 16px', border: '1px solid rgba(23, 50, 77, 0.2)', borderRadius: '0', fontSize: '15px', outline: 'none', background: 'var(--color-white)', color: 'var(--color-deep-blue)', fontFamily: 'inherit' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="workers_count" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-deep-blue)' }}>Количество иностранных работников</label>
                    <select id="workers_count" name="workers_count" defaultValue="1–5" style={{ padding: '14px 16px', border: '1px solid rgba(23, 50, 77, 0.2)', borderRadius: '0', fontSize: '15px', outline: 'none', background: 'var(--color-white)', color: 'var(--color-deep-blue)', fontFamily: 'inherit' }}>
                      <option value="1–5">1–5</option>
                      <option value="6–20">6–20</option>
                      <option value="21–50">21–50</option>
                      <option value="более 50">Более 50</option>
                      <option value="не знаю">Не знаю</option>
                    </select>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="audit_stage" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-deep-blue)' }}>Стадия</label>
                    <select id="audit_stage" name="audit_stage" defaultValue="плановый аудит" style={{ padding: '14px 16px', border: '1px solid rgba(23, 50, 77, 0.2)', borderRadius: '0', fontSize: '15px', outline: 'none', background: 'var(--color-white)', color: 'var(--color-deep-blue)', fontFamily: 'inherit' }}>
                      <option value="плановый аудит">Плановый аудит</option>
                      <option value="готовимся к возможной проверке">Готовимся к возможной проверке</option>
                      <option value="получили запрос">Получили запрос</option>
                      <option value="проверка началась">Проверка началась</option>
                    </select>
                  </div>
                </>
              }
              buttonText="Получить оценку аудита"
              commentLabel="Комментарий (необязательно)"`;

  c = c.replace('<ContactsForm />', `<ContactsForm\n              ${customFieldsJSX}\n            />`);

  fs.writeFileSync(p, c, 'utf8');
  console.log('Updated MigracionnyjAuditClient.tsx');

  addKonopkinToPage('src/app/biznesu/migracionnoe-soprovozhdenie-biznesa/migracionnyj-audit-rabotodatelya/page.tsx');
}

// ----------------------------------------------------
// 4. YURIST PRI PROVERKE: YuristPriProverkeMvdClient.tsx & page.tsx
// ----------------------------------------------------
{
  const p = 'src/app/biznesu/migracionnoe-soprovozhdenie-biznesa/yurist-pri-migracionnoj-proverke-mvd/YuristPriProverkeMvdClient.tsx';
  let c = fs.readFileSync(p, 'utf8');

  // Phone
  c = c.replace(/\+7 \(910\) 350-31-11/g, '+7 (4742) 20-15-25');
  c = c.replace(/tel:\+79103503111/g, 'tel:+74742201525');

  // ProcessBlock subtitle
  if (!c.includes('При миграционной проверке важны скорость')) {
    c = c.replace(
      `<ProcessBlock\n        title="Порядок работы юриста при проверке МВД"\n        steps={processSteps}\n      />`,
      `<ProcessBlock\n        title="Порядок работы юриста при проверке МВД"\n        subtitle="При миграционной проверке важны скорость и единый порядок действий. Сразу определяем стадию, контролируем передачу документов и фиксируем процессуально значимые обстоятельства."\n        steps={processSteps}\n      />`
    );
  }

  // PricingBlock pageUrl
  if (!c.includes('pageUrl=')) {
    c = c.replace(
      '<PricingBlock',
      '<PricingBlock\n        pageUrl="https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/yurist-pri-migracionnoj-proverke-mvd/"'
    );
  }

  // Specialized form fields
  const customFieldsJSX = `customFields={
                <>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="company" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-deep-blue)' }}>Компания (необязательно)</label>
                    <input type="text" id="company" name="company" placeholder="ООО «Компания»" style={{ padding: '14px 16px', border: '1px solid rgba(23, 50, 77, 0.2)', borderRadius: '0', fontSize: '15px', outline: 'none', background: 'var(--color-white)', color: 'var(--color-deep-blue)', fontFamily: 'inherit' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="inspection_stage" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-deep-blue)' }}>Стадия</label>
                    <select id="inspection_stage" name="inspection_stage" defaultValue="получен запрос" style={{ padding: '14px 16px', border: '1px solid rgba(23, 50, 77, 0.2)', borderRadius: '0', fontSize: '15px', outline: 'none', background: 'var(--color-white)', color: 'var(--color-deep-blue)', fontFamily: 'inherit' }}>
                      <option value="получен запрос">Получен запрос</option>
                      <option value="вызвали в МВД">Вызвали в МВД</option>
                      <option value="сотрудники на объекте">Сотрудники на объекте</option>
                      <option value="проверяют работников">Проверяют работников</option>
                      <option value="составляют протокол">Составляют протокол</option>
                    </select>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="event_datetime" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-deep-blue)' }}>Дата и время события</label>
                    <input type="text" id="event_datetime" name="event_datetime" placeholder="Например: сегодня в 14:00 или 25.09" style={{ padding: '14px 16px', border: '1px solid rgba(23, 50, 77, 0.2)', borderRadius: '0', fontSize: '15px', outline: 'none', background: 'var(--color-white)', color: 'var(--color-deep-blue)', fontFamily: 'inherit' }} />
                  </div>
                </>
              }
              buttonText="Подключить юриста"
              commentLabel="Комментарий (необязательно)"`;

  c = c.replace('<ContactsForm />', `<ContactsForm\n              ${customFieldsJSX}\n            />`);

  fs.writeFileSync(p, c, 'utf8');
  console.log('Updated YuristPriProverkeMvdClient.tsx');

  addKonopkinToPage('src/app/biznesu/migracionnoe-soprovozhdenie-biznesa/yurist-pri-migracionnoj-proverke-mvd/page.tsx');
}

// ----------------------------------------------------
// 5. ZASHCHITA PO 18.15 KOAP: ZashchitaPo1815KoapClient.tsx & page.tsx
// ----------------------------------------------------
{
  const p = 'src/app/biznesu/migracionnoe-soprovozhdenie-biznesa/zashchita-rabotodatelya-po-state-18-15-koap-rf/ZashchitaPo1815KoapClient.tsx';
  let c = fs.readFileSync(p, 'utf8');

  // Phone
  c = c.replace(/\+7 \(910\) 350-31-11/g, '+7 (4742) 20-15-25');
  c = c.replace(/tel:\+79103503111/g, 'tel:+74742201525');

  // H1 remove whiteSpace nowrap
  c = c.replace(
    `<span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>\n              Защита работодателя\n            </span>{' '}\n            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>\n              по статье 18.15 КоАП РФ в Липецке\n            </span>`,
    `<span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'normal', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>\n              Защита работодателя\n            </span>{' '}\n            <span className="hero-title-span-mobile" style={{ display: 'block', whiteSpace: 'normal', fontSize: 'clamp(22px, 3.2vw, 42px)' }}>\n              по статье 18.15 КоАП РФ в Липецке\n            </span>`
  );

  // ProcessBlock subtitle
  if (!c.includes('Защиту строим с учётом стадии дела')) {
    c = c.replace(
      `<ProcessBlock\n        title="Пять этапов защиты по статье 18.15 КоАП РФ"\n        steps={processSteps}\n      />`,
      `<ProcessBlock\n        title="Пять этапов защиты по статье 18.15 КоАП РФ"\n        subtitle="Защиту строим с учётом стадии дела, вменяемой части статьи и имеющихся доказательств. На каждом этапе согласуем процессуальные действия и сообщаем о результате."\n        steps={processSteps}\n      />`
    );
  }

  // Final form text updates: срок обжалования & время ответа
  c = c.replace(
    'Мы свяжемся с вами в течение 15 минут в рабочее время.',
    'Для срочного подключения позвоните по номеру +7 (4742) 20-15-25. Если вы оставите заявку, мы свяжемся с вами в ближайшее рабочее время.'
  );
  c = c.replace(
    'Срок подачи жалобы исчисляется строго с момента получения.',
    'По общему правилу жалобу можно подать в течение 10 суток со дня вручения или получения копии постановления. Течение срока начинается на следующий день.'
  );

  // PricingBlock pageUrl
  if (!c.includes('pageUrl=')) {
    c = c.replace(
      '<PricingBlock',
      '<PricingBlock\n        pageUrl="https://dejure-help.ru/biznesu/migracionnoe-soprovozhdenie-biznesa/zashchita-rabotodatelya-po-state-18-15-koap-rf/"'
    );
  }

  // Specialized form fields with state for stage
  if (!c.includes('const [formCaseStage, setFormCaseStage] = useState')) {
    c = c.replace(
      'export default function ZashchitaPo1815KoapClient() {',
      `export default function ZashchitaPo1815KoapClient() {\n  const [formCaseStage, setFormCaseStage] = useState('составлен протокол');`
    );
  }

  const customFieldsJSX = `customFields={
                <>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="company" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-deep-blue)' }}>Компания (необязательно)</label>
                    <input type="text" id="company" name="company" placeholder="ООО «Компания»" style={{ padding: '14px 16px', border: '1px solid rgba(23, 50, 77, 0.2)', borderRadius: '0', fontSize: '15px', outline: 'none', background: 'var(--color-white)', color: 'var(--color-deep-blue)', fontFamily: 'inherit' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="koap_part" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-deep-blue)' }}>Часть статьи</label>
                    <select id="koap_part" name="koap_part" defaultValue="1" style={{ padding: '14px 16px', border: '1px solid rgba(23, 50, 77, 0.2)', borderRadius: '0', fontSize: '15px', outline: 'none', background: 'var(--color-white)', color: 'var(--color-deep-blue)', fontFamily: 'inherit' }}>
                      <option value="1">1 (привлечение без разрешения/патента)</option>
                      <option value="2">2 (привлечение без разрешения на привлечение)</option>
                      <option value="3">3 (неуведомление / нарушение порядка уведомления МВД)</option>
                      <option value="4">4 (нарушение в Москве, СПб, МО, ЛО)</option>
                      <option value="5">5 (неуведомление об обучении)</option>
                      <option value="не знаю">Не знаю</option>
                    </select>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="case_stage" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-deep-blue)' }}>Стадия дела</label>
                    <select
                      id="case_stage"
                      name="case_stage"
                      value={formCaseStage}
                      onChange={(e) => setFormCaseStage(e.target.value)}
                      style={{ padding: '14px 16px', border: '1px solid rgba(23, 50, 77, 0.2)', borderRadius: '0', fontSize: '15px', outline: 'none', background: 'var(--color-white)', color: 'var(--color-deep-blue)', fontFamily: 'inherit' }}
                    >
                      <option value="проверка">Проверка / опрос</option>
                      <option value="составлен протокол">Составлен протокол</option>
                      <option value="рассмотрение">Дело на рассмотрении в МВД или суде</option>
                      <option value="вынесено постановление">Вынесено постановление о штрафе</option>
                      <option value="обжалование">Подана жалоба / обжалование</option>
                    </select>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="next_action_date" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-deep-blue)' }}>Дата ближайшего действия</label>
                    <input type="date" id="next_action_date" name="next_action_date" style={{ padding: '14px 16px', border: '1px solid rgba(23, 50, 77, 0.2)', borderRadius: '0', fontSize: '15px', outline: 'none', background: 'var(--color-white)', color: 'var(--color-deep-blue)', fontFamily: 'inherit' }} />
                  </div>
                  {formCaseStage === 'вынесено постановление' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label htmlFor="decision_received_date" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-deep-blue)' }}>
                        Дата получения постановления
                      </label>
                      <input type="date" id="decision_received_date" name="decision_received_date" style={{ padding: '14px 16px', border: '1px solid rgba(23, 50, 77, 0.2)', borderRadius: '0', fontSize: '15px', outline: 'none', background: 'var(--color-white)', color: 'var(--color-deep-blue)', fontFamily: 'inherit' }} />
                    </div>
                  )}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="workers_or_episodes_count" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-deep-blue)' }}>Количество работников или эпизодов</label>
                    <input type="text" id="workers_or_episodes_count" name="workers_or_episodes_count" placeholder="Например: 1 работник / 2 протокола" style={{ padding: '14px 16px', border: '1px solid rgba(23, 50, 77, 0.2)', borderRadius: '0', fontSize: '15px', outline: 'none', background: 'var(--color-white)', color: 'var(--color-deep-blue)', fontFamily: 'inherit' }} />
                  </div>
                </>
              }
              buttonText="Передать дело на оценку"
              commentLabel="Комментарий (необязательно)"`;

  c = c.replace('<ContactsForm />', `<ContactsForm\n              ${customFieldsJSX}\n            />`);

  fs.writeFileSync(p, c, 'utf8');
  console.log('Updated ZashchitaPo1815KoapClient.tsx');

  addKonopkinToPage('src/app/biznesu/migracionnoe-soprovozhdenie-biznesa/zashchita-rabotodatelya-po-state-18-15-koap-rf/page.tsx');
}
