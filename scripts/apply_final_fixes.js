const fs = require('fs');

function updateFile(filePath, transforms) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  for (const { name, search, replace } of transforms) {
    if (typeof search === 'string') {
      if (!content.includes(search)) {
        console.error(`[ERROR] In ${filePath}: search string not found for "${name}"`);
        continue;
      }
      content = content.replace(search, replace);
      console.log(`[OK] In ${filePath}: applied "${name}"`);
    } else if (search instanceof RegExp) {
      if (!search.test(content)) {
        console.error(`[ERROR] In ${filePath}: regex pattern not found for "${name}"`);
        continue;
      }
      content = content.replace(search, replace);
      console.log(`[OK] In ${filePath}: applied "${name}"`);
    }
  }
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Successfully written: ${filePath}`);
  } else {
    console.log(`No changes made to: ${filePath}`);
  }
}

// 2. OsparivanieReshenijFnsClient.tsx
updateFile('src/app/biznesu/nalogovyj-yurist-dlya-biznesa/osparivanie-donachislenij-i-reshenij-fns/OsparivanieReshenijFnsClient.tsx', [
  {
    name: 'Osparivanie Bobkin MilitaryHero props',
    search: /secondaryCtaText="Сроки обжалования"\s*secondaryCtaLink="#urgent"/,
    replace: `secondaryCtaText="Сроки обжалования"
        secondaryCtaLink="#urgent"
        imageUrl="/images/bobkin.jpg"
        imageName="Аркадий Евгеньевич Бобкин"
        imageSubtitle="Директор, управляющий партнёр ЮК «Де-Юре», куратор направления"
        imageObjectPosition="center 15%"`
  }
]);

// 4. MigracionnoeSoprovozhdenieClient.tsx
updateFile('src/app/biznesu/migracionnoe-soprovozhdenie-biznesa/MigracionnoeSoprovozhdenieClient.tsx', [
  {
    name: 'Migration Hub ProcessBlock subtitle',
    search: /<ProcessBlock\s+title="Как проходит работа по миграционному сопровождению"\s+steps=\{processSteps\}\s*\/>/,
    replace: `<ProcessBlock
        title="Как проходит работа по миграционному сопровождению"
        subtitle="Миграционные задачи работодателя требуют точного учёта статуса работников, документов и стадии ситуации. На каждом этапе фиксируем состав работ, сроки и следующий результат."
        steps={processSteps}
      />`
  }
]);

// 5. YuridicheskoeOformlenieClient.tsx
updateFile('src/app/biznesu/migracionnoe-soprovozhdenie-biznesa/yuridicheskoe-oformlenie-inostrannyh-rabotnikov/YuridicheskoeOformlenieClient.tsx', [
  {
    name: 'Oformlenie ProcessBlock subtitle',
    search: /<ProcessBlock\s+title="Порядок юридического оформления иностранного работника"\s+steps=\{processSteps\}\s*\/>/,
    replace: `<ProcessBlock
        title="Порядок юридического оформления иностранного работника"
        subtitle="Порядок оформления зависит от гражданства, миграционного статуса и условий работы сотрудника. Проверяем документы до допуска, готовим кадровый комплект и контролируем обязательные уведомления."
        steps={processSteps}
      />`
  }
]);

// 6. MigracionnyjAuditClient.tsx
updateFile('src/app/biznesu/migracionnoe-soprovozhdenie-biznesa/migracionnyj-audit-rabotodatelya/MigracionnyjAuditClient.tsx', [
  {
    name: 'Audit ProcessBlock subtitle',
    search: /<ProcessBlock\s+title="Пять этапов миграционного аудита"\s+steps=\{processSteps\}\s*\/>/,
    replace: `<ProcessBlock
        title="Пять этапов миграционного аудита"
        subtitle="Проводим аудит по согласованному объёму: проверяем работников, документы и внутренние процессы, фиксируем риски и передаём план их законного устранения."
        steps={processSteps}
      />`
  }
]);

// 7. YuristPriProverkeMvdClient.tsx
updateFile('src/app/biznesu/migracionnoe-soprovozhdenie-biznesa/yurist-pri-migracionnoj-proverke-mvd/YuristPriProverkeMvdClient.tsx', [
  {
    name: 'Proverka ProcessBlock subtitle',
    search: /<ProcessBlock\s+title="Порядок работы юриста при проверке МВД"\s+steps=\{processSteps\}\s*\/>/,
    replace: `<ProcessBlock
        title="Порядок работы юриста при проверке МВД"
        subtitle="При миграционной проверке важны скорость и единый порядок действий. Сразу определяем стадию, контролируем передачу документов и фиксируем процессуально значимые обстоятельства."
        steps={processSteps}
      />`
  }
]);

// 8. ZashchitaPo1815KoapClient.tsx
updateFile('src/app/biznesu/migracionnoe-soprovozhdenie-biznesa/zashchita-rabotodatelya-po-state-18-15-koap-rf/ZashchitaPo1815KoapClient.tsx', [
  {
    name: 'Koap ProcessBlock subtitle',
    search: /<ProcessBlock\s+title="Пять этапов защиты по статье 18.15 КоАП РФ"\s+steps=\{processSteps\}\s*\/>/,
    replace: `<ProcessBlock
        title="Пять этапов защиты по статье 18.15 КоАП РФ"
        subtitle="Защиту строим с учётом стадии дела, вменяемой части статьи и имеющихся доказательств. На каждом этапе согласуем процессуальные действия и сообщаем о результате."
        steps={processSteps}
      />`
  }
]);
