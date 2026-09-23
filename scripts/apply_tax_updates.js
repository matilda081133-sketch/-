const fs = require('fs');

const bobkinPersonJson = {
  "@type": "Person",
  "@id": "https://dejure-help.ru/specialisty/bobkin-arkadiy-evgenevich/#person",
  "name": "Аркадий Евгеньевич Бобкин",
  "url": "https://dejure-help.ru/specialisty/bobkin-arkadiy-evgenevich/",
  "jobTitle": "Директор, управляющий партнёр ЮК «Де-Юре»",
  "worksFor": {
    "@id": "https://dejure-help.ru/#organization"
  }
};

// ==========================================
// 1. HUB: nalogovyj-yurist-dlya-biznesa/page.tsx
// ==========================================
{
  const p = 'src/app/biznesu/nalogovyj-yurist-dlya-biznesa/page.tsx';
  let c = fs.readFileSync(p, 'utf8');

  // FAQ answer
  c = c.replace(
    'При подаче заявления в арбитражный суд заявляется ходатайство о принятии обеспечительных мер в виде приостановления действия оспариваемого решения ФНС (ст. 199 АПК РФ), что блокирует списание средств инкассовыми поручениями.',
    'Да. Юристы подготовят ходатайство об обеспечительных мерах и будут добиваться приостановления действия решения ФНС и списания денег со счетов. Решение принимает суд, поэтому само обращение в арбитражный суд взыскание автоматически не останавливает.'
  );

  // Bobkin Person if not present
  if (!c.includes('bobkin-arkadiy-evgenevich/#person')) {
    c = c.replace(
      /addressCountry:\s*'RU'\s*\n\s*}/,
      "addressCountry: 'RU'\n        },\n        employee: {\n          '@id': 'https://dejure-help.ru/specialisty/bobkin-arkadiy-evgenevich/#person'\n        }"
    );
  }
  if (!c.includes('"@type": "Person"')) {
    c = c.replace(
      /\n\s*\]\s*\n\s*\}\s*\n\s*\]\s*\n\s*\};\s*\n\s*return \(/,
      `\n            ]\n      },\n      ${JSON.stringify(bobkinPersonJson, null, 8)}\n    ]\n  };\n\n  return (`
    );
  }

  fs.writeFileSync(p, c, 'utf8');
  console.log('Updated hub page.tsx');
}

// ==========================================
// 2. SOPROVOZHDENIE: SoprovozhdenieProverokClient.tsx & page.tsx
// ==========================================
{
  const clientPath = 'src/app/biznesu/nalogovyj-yurist-dlya-biznesa/soprovozhdenie-nalogovyh-proverok/SoprovozhdenieProverokClient.tsx';
  let c = fs.readFileSync(clientPath, 'utf8');

  // Phone
  c = c.replace(/\+7 \(910\) 350-31-11/g, '+7 (4742) 20-15-25');
  c = c.replace(/tel:\+79103503111/g, 'tel:+74742201525');

  // 2.1 Risk block text
  c = c.replace(
    `<span style={{ display: 'inline-block' }}>Ошибки, допущенные при даче первых пояснений или на допросах,</span> <br />\n              <span style={{ display: 'inline-block' }}>практически невозможно исправить в суде.</span>`,
    `Ошибки и противоречия в первых пояснениях или протоколах допросов могут серьёзно осложнить дальнейшую защиту и снизить шансы на отмену доначислений.`
  );
  // Also fallback for single line or different whitespace
  c = c.replace(
    'Ошибки, допущенные при даче первых пояснений или на допросах, практически невозможно исправить в суде.',
    'Ошибки и противоречия в первых пояснениях или протоколах допросов могут серьёзно осложнить дальнейшую защиту и снизить шансы на отмену доначислений.'
  );

  // 2.2 Objection deadline text
  c = c.replace(
    'Пропуск срока лишает шанса снять претензии до решения.',
    'Пропуск месячного срока существенно снижает возможность снять претензии до вынесения решения. Если срок заканчивается или уже пропущен, необходимо определить, какие доводы и документы ещё можно представить при рассмотрении материалов.'
  );

  // 2.3 Bobkin experience
  c = c.replace(
    '22 года в следственных подразделениях налоговой полиции и Следственного комитета МВД РФ',
    '22 года в следственных подразделениях налоговой полиции и МВД.'
  );
  c = c.replace(
    'Десятки предотвращенных доначислений на стадии рассмотрения материалов проверки',
    'В юридической профессии с 1997 года.'
  );

  // 2.4 FAQ
  c = c.replace(
    'Может ли юрист или адвокат присутствовать на допросе в качестве свидетеля?',
    'Может ли юрист или адвокат присутствовать при допросе свидетеля в ФНС?'
  );

  // Related service description
  c = c.replace(
    'Правовой анализ группы компаний, защита деловой цели разделения и применение налоговой амнистии 2025–2030.',
    'Защита деловой цели и самостоятельности компаний, опровержение доводов ФНС и применение налоговой амнистии при соблюдении установленных законом условий.'
  );

  // PricingBlock pageUrl
  if (!c.includes('pageUrl=')) {
    c = c.replace(
      '<PricingBlock',
      '<PricingBlock\n        pageUrl="https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/soprovozhdenie-nalogovyh-proverok/"'
    );
  }

  fs.writeFileSync(clientPath, c, 'utf8');
  console.log('Updated SoprovozhdenieProverokClient.tsx');

  // page.tsx
  const pagePath = 'src/app/biznesu/nalogovyj-yurist-dlya-biznesa/soprovozhdenie-nalogovyh-proverok/page.tsx';
  let pC = fs.readFileSync(pagePath, 'utf8');
  pC = pC.replace(
    'Может ли юрист или адвокат присутствовать на допросе в качестве свидетеля?',
    'Может ли юрист или адвокат присутствовать при допросе свидетеля в ФНС?'
  );
  if (!pC.includes('bobkin-arkadiy-evgenevich/#person')) {
    pC = pC.replace(
      /addressCountry:\s*'RU'\s*\n\s*}/,
      "addressCountry: 'RU'\n        },\n        employee: {\n          '@id': 'https://dejure-help.ru/specialisty/bobkin-arkadiy-evgenevich/#person'\n        }"
    );
    pC = pC.replace(
      /\n\s*\]\s*\n\s*\}\s*\n\s*\]\s*\n\s*\};\s*\n\s*return \(/,
      `\n            ]\n      },\n      ${JSON.stringify(bobkinPersonJson, null, 8)}\n    ]\n  };\n\n  return (`
    );
  }
  fs.writeFileSync(pagePath, pC, 'utf8');
  console.log('Updated soprovozhdenie page.tsx');
}

// ==========================================
// 3. OSPARIVANIE: OsparivanieReshenijFnsClient.tsx & page.tsx
// ==========================================
{
  const clientPath = 'src/app/biznesu/nalogovyj-yurist-dlya-biznesa/osparivanie-donachislenij-i-reshenij-fns/OsparivanieReshenijFnsClient.tsx';
  let c = fs.readFileSync(clientPath, 'utf8');

  // 3.1 Hero curator card & phone
  if (!c.includes('imageUrl="/images/bobkin.jpg"')) {
    c = c.replace(
      'secondaryCtaText="Сроки обжалования"',
      `primaryCtaSubtext={
          <span style={{ display: 'block' }}>
            <span style={{ display: 'inline-block' }}>Или позвоните для оперативного разбора:</span>{' '}
            <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
              <a href="tel:+74742201525" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+7 (4742) 20-15-25</a>
            </span>
          </span>
        }
        secondaryCtaText="Сроки обжалования"
        secondaryCtaLink="#urgent"
        imageUrl="/images/bobkin.jpg"
        imageName="Аркадий Евгеньевич Бобкин"
        imageSubtitle="Директор, управляющий партнёр ЮК «Де-Юре», куратор направления"
        imageObjectPosition="center 15%"`
    );
  }

  // 3.2 Hero promise
  c = c.replace(
    "'Приостановим принудительное взыскание и блокировку счетов в суде'",
    "'Добьёмся приостановления принудительного взыскания и снятия ограничений со счетов'"
  );

  // 3.3 75-day risk block
  const oldTitle75 = `<span style={{ display: 'inline-block' }}>Истекает срок 75 дней</span> <br />\n          <span style={{ display: 'inline-block' }}>для передачи материалов в СК РФ</span>`;
  const newTitle75 = `Риск передачи материалов в следственные органы`;
  if (c.includes(oldTitle75)) {
    c = c.replace(oldTitle75, newTitle75);
  } else {
    c = c.replace('Истекает срок 75 дней для передачи материалов в СК РФ', newTitle75);
  }
  c = c.replace(
    'По п. 3 ст. 32 НК РФ при неуплате недоимки свыше 18,75 млн ₽ инспекция направляет материалы следователю. Синхронизируем арбитраж с защитой руководства.',
    'Если через 75 дней после вступления решения в силу недоимка не погашена, а её размер и обстоятельства позволяют предполагать признаки налогового преступления, ФНС направляет материалы в следственные органы. Согласуем налоговую и уголовно-правовую позицию заранее, чтобы снизить риски для руководителей и собственников.'
  );

  // 3.4 Urgent intro text
  c = c.replace(
    'Пропуск установленных законом сроков обжалования приводит к безакцептному списанию денежных средств и передаче дела силовикам.',
    'Пропуск сроков обжалования может привести к вступлению решения в силу и принудительному списанию денег. При наличии предусмотренных законом признаков ФНС также может направить материалы в следственные органы.'
  );

  // 3.5 FAQ
  c = c.replace(
    "По закону, если решение не вступило в силу (подана апелляционная жалоба), срок 75 дней для передачи материалов в Следственный комитет не течет. Однако после вступления решения в силу даже судебное обжалование само по себе не приостанавливает передачу материалов в СК РФ, поэтому требуется ходатайствовать о приостановлении действия решения.",
    "Пока апелляционная жалоба не рассмотрена и решение ФНС не вступило в силу, 75-дневный срок не начинается. После вступления решения в силу судебное обжалование само по себе не устраняет уголовный риск. Юристы добиваются приостановления взыскания и одновременно согласуют налоговую позицию со стратегией защиты руководителей."
  );

  // Related service description
  c = c.replace(
    'Правовой анализ группы компаний, защита деловой цели разделения и применение налоговой амнистии 2025–2030.',
    'Защита деловой цели и самостоятельности компаний, опровержение доводов ФНС и применение налоговой амнистии при соблюдении установленных законом условий.'
  );

  // PricingBlock pageUrl
  if (!c.includes('pageUrl=')) {
    c = c.replace(
      '<PricingBlock',
      '<PricingBlock\n        pageUrl="https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/osparivanie-donachislenij-i-reshenij-fns/"'
    );
  }

  fs.writeFileSync(clientPath, c, 'utf8');
  console.log('Updated OsparivanieReshenijFnsClient.tsx');

  // page.tsx
  const pagePath = 'src/app/biznesu/nalogovyj-yurist-dlya-biznesa/osparivanie-donachislenij-i-reshenij-fns/page.tsx';
  let pC = fs.readFileSync(pagePath, 'utf8');
  pC = pC.replace(
    "По закону, если решение не вступило в силу (подана апелляционная жалоба), срок 75 дней для передачи материалов в Следственный комитет не течет. Однако после вступления решения в силу даже судебное обжалование само по себе не приостанавливает передачу материалов в СК РФ, поэтому требуется ходатайствовать о приостановлении действия решения.",
    "Пока апелляционная жалоба не рассмотрена и решение ФНС не вступило в силу, 75-дневный срок не начинается. После вступления решения в силу судебное обжалование само по себе не устраняет уголовный риск. Юристы добиваются приостановления взыскания и одновременно согласуют налоговую позицию со стратегией защиты руководителей."
  );
  if (!pC.includes('bobkin-arkadiy-evgenevich/#person')) {
    pC = pC.replace(
      /addressCountry:\s*'RU'\s*\n\s*}/,
      "addressCountry: 'RU'\n        },\n        employee: {\n          '@id': 'https://dejure-help.ru/specialisty/bobkin-arkadiy-evgenevich/#person'\n        }"
    );
    pC = pC.replace(
      /\n\s*\]\s*\n\s*\}\s*\n\s*\]\s*\n\s*\};\s*\n\s*return \(/,
      `\n            ]\n      },\n      ${JSON.stringify(bobkinPersonJson, null, 8)}\n    ]\n  };\n\n  return (`
    );
  }
  fs.writeFileSync(pagePath, pC, 'utf8');
  console.log('Updated osparivanie page.tsx');
}

// ==========================================
// 4. DROBLENIE: ZashchitaPriDrobleniiClient.tsx & page.tsx
// ==========================================
{
  const clientPath = 'src/app/biznesu/nalogovyj-yurist-dlya-biznesa/zashchita-pri-obvinenii-v-droblenii-biznesa/ZashchitaPriDrobleniiClient.tsx';
  let c = fs.readFileSync(clientPath, 'utf8');

  // Phone
  c = c.replace(/\+7 \(910\) 350-31-11/g, '+7 (4742) 20-15-25');
  c = c.replace(/tel:\+79103503111/g, 'tel:+74742201525');

  // 4.1 Amnesty card title & text
  const oldTitleAmnesty = `<span style={{ display: 'inline-block' }}>Налоговая амнистия 2025</span> <br />\n          <span style={{ display: 'inline-block' }}>по Закону № 176-ФЗ</span>`;
  const newTitleAmnesty = `Налоговая амнистия при дроблении бизнеса по Закону № 176-ФЗ`;
  if (c.includes(oldTitleAmnesty)) {
    c = c.replace(oldTitleAmnesty, newTitleAmnesty);
  } else {
    c = c.replace('Налоговая амнистия 2025 по Закону № 176-ФЗ', newTitleAmnesty);
  }

  c = c.replace(
    'Оценим применимость механизма добровольного отказа от дробления: условия списания недоимки, пеней и штрафов за 2022–2024 годы без риска санкций.',
    'Проверим условия применения налоговой амнистии и добьёмся прекращения обязанности по уплате налогов, пеней и штрафов за 2022–2024 годы, если бизнес выполнил установленные законом требования добровольного отказа от дробления в 2025–2026 годах.'
  );

  // 4.1 H2 replace
  const oldH2Amnesty = `<span style={{ display: 'inline-block' }}>Ключевые риски и налоговая</span> <br />\n              <span style={{ display: 'inline-block' }}>амнистия 2025 года</span>`;
  const newH2Amnesty = `Ключевые риски и условия налоговой амнистии`;
  if (c.includes(oldH2Amnesty)) {
    c = c.replace(oldH2Amnesty, newH2Amnesty);
  } else {
    c = c.replace('Ключевые риски и налоговая амнистия 2025 года', newH2Amnesty);
  }

  c = c.replace(
    'Государство предоставило механизм списания доначислений по дроблению за 2022–2024 годы при условии добровольного объединения бизнеса и уплаты налогов по ОСНО с 2025 года.',
    'Закон предусматривает прекращение обязанности по уплате связанных с дроблением налогов, пеней и штрафов за 2022–2024 годы при соблюдении условий добровольного отказа от дробления в 2025–2026 годах. Объединение компаний и переход на ОСНО — не единственные возможные способы отказа.'
  );

  // 4.2 Guaranteed debt relief
  c = c.replace(
    'Разрабатываем безопасный алгоритм перехода на единую систему налогообложения для гарантированного списания старых налоговых долгов по закону № 176-ФЗ.',
    'Определим допустимый способ отказа от дробления и сопроводим выполнение условий, необходимых для прекращения обязанности по уплате налогов, пеней и штрафов по Закону № 176-ФЗ.'
  );

  // 4.3 FAQ
  c = c.replace(
    'Как работает налоговая амнистия по дроблению бизнеса в 2025 году?',
    'Как работает налоговая амнистия по дроблению бизнеса в 2025–2026 годах?'
  );
  c = c.replace(
    'Согласно ст. 6 Федерального закона № 176-ФЗ, для налогоплательщиков, добровольно отказавшихся от дробления бизнеса с налогового периода 2025 года, суммы налогов, пеней и штрафов по решениям за 2022–2024 годы не взыскиваются и подлежат списанию.',
    'Механизм позволяет прекратить обязанность по уплате связанных с дроблением налогов, пеней и штрафов за 2022–2024 годы при соблюдении установленных законом условий добровольного отказа от дробления в 2025–2026 годах. Проверим применимость амнистии к конкретной ситуации и определим действия, необходимые для её использования.'
  );

  // 4.4 Consolidation consequences
  c = c.replace(
    'ФНС объединяет доходы всех юридических лиц и ИП за 3 года и доначисляет НДС 20% и налог на прибыль 20%, что практически всегда приводит к банкротству бизнеса.',
    'ФНС может объединить показатели участников и пересчитать налоговые обязательства так, как если бы деятельность велась единым хозяйствующим субъектом. Это может привести к крупным доначислениям, блокировке оборотных средств и угрозе финансовой устойчивости бизнеса.'
  );

  // 4.5 Personal liability
  c = c.replace(
    'Налоговая задолженность взыскивается солидарно со всех участников группы, а также лично с учредителей и фактических контролирующих лиц (КДЛ).',
    'При наличии предусмотренных законом оснований ФНС может добиваться взыскания задолженности с взаимозависимых лиц, а при банкротстве — привлечения руководителей, учредителей и фактических контролирующих лиц к субсидиарной ответственности.'
  );

  // 4.6 Criminal risk card
  c = c.replace(
    'При консолидации доходов сумма доначисленного НДС и налога на прибыль превышает 18,75 млн ₽. Обеспечиваем уголовно-правовой щит для собственников.',
    'Если размер неисполненной налоговой обязанности достигает крупного размера и ФНС усматривает признаки умышленного уклонения, возникает риск уголовного дела по ст. 199 УК РФ. Согласуем налоговую позицию с уголовно-правовой защитой и снизим риски для руководителей и собственников.'
  );

  // Criminal card link
  c = c.replace(
    `btnText: 'Снять уголовный риск'`,
    `btnText: 'Снять уголовный риск',\n      link: '/biznesu/ugolovno-pravovaya-zashchita-biznesa/zashchita-po-nalogovym-prestupleniyam/'`
  );
  c = c.replace(
    `href="#form"\n                  className="situation-btn"`,
    `href={sit.link || "#form"}\n                  className="situation-btn"`
  );

  // PricingBlock pageUrl
  if (!c.includes('pageUrl=')) {
    c = c.replace(
      '<PricingBlock',
      '<PricingBlock\n        pageUrl="https://dejure-help.ru/biznesu/nalogovyj-yurist-dlya-biznesa/zashchita-pri-obvinenii-v-droblenii-biznesa/"'
    );
  }

  fs.writeFileSync(clientPath, c, 'utf8');
  console.log('Updated ZashchitaPriDrobleniiClient.tsx');

  // page.tsx
  const pagePath = 'src/app/biznesu/nalogovyj-yurist-dlya-biznesa/zashchita-pri-obvinenii-v-droblenii-biznesa/page.tsx';
  let pC = fs.readFileSync(pagePath, 'utf8');
  pC = pC.replace(
    'Как работает налоговая амнистия по дроблению бизнеса в 2025 году?',
    'Как работает налоговая амнистия по дроблению бизнеса в 2025–2026 годах?'
  );
  pC = pC.replace(
    'Согласно ст. 6 Федерального закона № 176-ФЗ, для налогоплательщиков, добровольно отказавшихся от дробления бизнеса с налогового периода 2025 года, суммы налогов, пеней и штрафов по решениям за 2022–2024 годы не взыскиваются и подлежат списанию.',
    'Механизм позволяет прекратить обязанность по уплате связанных с дроблением налогов, пеней и штрафов за 2022–2024 годы при соблюдении установленных законом условий добровольного отказа от дробления в 2025–2026 годах. Проверим применимость амнистии к конкретной ситуации и определим действия, необходимые для её использования.'
  );

  if (!pC.includes('bobkin-arkadiy-evgenevich/#person')) {
    pC = pC.replace(
      /addressCountry:\s*'RU'\s*\n\s*}/,
      "addressCountry: 'RU'\n        },\n        employee: {\n          '@id': 'https://dejure-help.ru/specialisty/bobkin-arkadiy-evgenevich/#person'\n        }"
    );
    pC = pC.replace(
      /\n\s*\]\s*\n\s*\}\s*\n\s*\]\s*\n\s*\};\s*\n\s*return \(/,
      `\n            ]\n      },\n      ${JSON.stringify(bobkinPersonJson, null, 8)}\n    ]\n  };\n\n  return (`
    );
  }

  fs.writeFileSync(pagePath, pC, 'utf8');
  console.log('Updated droblenie page.tsx');
}
