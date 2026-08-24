const fs = require('fs');
const path = require('path');

const targetFile = 'src/app/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/IspolnitelnoeClient.tsx';
let content = fs.readFileSync(targetFile, 'utf-8');

// Fix 1: FAQ from Latin to Cyrillic
content = content.replace(
  /const faqs = \[\s*\{\s*q: 'Mozhno li predyavit[\s\S]*?\];/m,
  `const faqs = [
    { q: 'Можно ли предъявить исполнительный лист напрямую в банк, минуя ФССП?', a: 'Да, если вам известны реквизиты счетов должника. Это значительно ускоряет процесс взыскания.' },
    { q: 'Пристав не принимает мер уже два месяца. Что делать?', a: 'Необходимо ознакомиться с материалами исполнительного производства и направить жалобу на бездействие пристава вышестоящему руководству или в суд.' },
    { q: 'Как обжаловать бездействие или незаконные действия пристава?', a: 'Жалоба подается в порядке подчиненности старшему судебному приставу либо оспаривается в судебном порядке (КАС РФ или АПК РФ).' },
    { q: 'Пристав арестовал расчётный счёт. Как продолжить деятельность?', a: 'Можно ходатайствовать о снятии ареста в части средств, необходимых для выплаты заработной платы и налогов, либо предложить взамен другое имущество для ареста.' },
    { q: 'Арестовали производственное оборудование. Можно ли его освободить?', a: 'Да, если доказать, что данное оборудование необходимо для основной деятельности компании и его арест приведет к остановке производства, либо оно находится в залоге у третьего лица.' },
    { q: 'На нашу компанию одновременно несколько исполнительных листов. Как быть?', a: 'Возбуждается сводное исполнительное производство. При недостаточности средств требования удовлетворяются в порядке очередности.' },
    { q: 'Можно ли получить отсрочку или рассрочку исполнения?', a: 'Да, для этого необходимо обратиться в суд, выдавший исполнительный документ, с мотивированным заявлением, доказав наличие обстоятельств, затрудняющих единовременное исполнение.' },
    { q: 'Какие документы нужно передать юристу для оценки ситуации?', a: 'Копию исполнительного документа, постановление о возбуждении исполнительного производства, переписку с ФССП (если есть) и документы по сути первоначального спора.' }
  ];`
);

// Fix 2: PricingBlock
content = content.replace(
  /<PricingBlock[\s\S]*?\/>/m,
  `<PricingBlock
        title="Форматы работы и стоимость"
        subtitle="Подберем оптимальный формат участия в зависимости от ваших задач"
        tiers={[
          {
            title: 'Консультация',
            subtitle: 'Анализ перспектив',
            price: 'от 5 000 ₽',
            features: [
              { name: 'Изучение документов', value: 'Да' },
              { name: 'Оценка рисков', value: 'Да' },
              { name: 'Письменное заключение', value: 'По запросу' },
              { name: 'Взаимодействие с ФССП', value: 'Нет' }
            ],
            buttonText: 'Обсудить ситуацию',
            buttonHref: '#form'
          },
          {
            title: 'Разовые действия',
            subtitle: 'Точечная помощь',
            popular: true,
            price: 'от 15 000 ₽',
            features: [
              { name: 'Подготовка документов', value: 'Да' },
              { name: 'Подача ходатайств', value: 'Да' },
              { name: 'Жалоба на пристава', value: 'Да' },
              { name: 'Комплексное ведение', value: 'Нет' }
            ],
            buttonText: 'Обсудить ситуацию',
            buttonHref: '#form'
          },
          {
            title: 'Сопровождение',
            subtitle: 'Под ключ',
            price: 'от 50 000 ₽',
            features: [
              { name: 'Полный анализ', value: 'Да' },
              { name: 'Все процессуальные действия', value: 'Да' },
              { name: 'Участие в суде', value: 'Да' },
              { name: 'Контроль ФССП', value: 'Да' }
            ],
            buttonText: 'Обсудить ситуацию',
            buttonHref: '#form'
          }
        ]}
      />`
);

// Fix 3: ProcessBlock (remove alignTitle, ctaTitle, etc.)
// First, we find <ProcessBlock ... /> block
let processBlockRegex = /<ProcessBlock[\s\S]*?steps=\s*\{\[([\s\S]*?)\]\}[\s\S]*?\/>/m;
content = content.replace(processBlockRegex, (match, steps) => {
  return `<ProcessBlock
        title="Как проходит работа"
        subtitle="Работаем структурировано — вы знаете, что происходит на каждом этапе."
        steps={[${steps}]}
      />`;
});

// Fix 4: SpecialistBlock photo
content = content.replace(/\/images\/specialists\/smolyaninova.jpg/g, '/images/smolyaninova.jpg');

// Fix 5: Service cards text wrapping
// They are in <div className="service-card hover-lift">...
// We can wrap text with <span style={{ display: 'inline-block' }}> in the original content?
// Wait, the original content had them just as simple strings.
content = content.replace(
  /title: 'Для взыскателей',\s*desc: 'Розыск счетов и имущества должника. Предъявление листа в банк. Контроль действий приставов.'/g,
  `title: <><span style={{ display: 'inline-block' }}>Для</span> <span style={{ display: 'inline-block' }}>взыскателей</span></>, desc: <><span style={{ display: 'inline-block' }}>Розыск счетов</span> <span style={{ display: 'inline-block' }}>и имущества должника.</span> <span style={{ display: 'inline-block' }}>Предъявление листа</span> <span style={{ display: 'inline-block' }}>в банк.</span> <span style={{ display: 'inline-block' }}>Контроль действий</span> <span style={{ display: 'inline-block' }}>приставов.</span></>`
);
content = content.replace(
  /title: 'Для должников',\s*desc: 'Защита активов от необоснованного ареста. Снятие ограничений со счетов. Отсрочка или рассрочка исполнения.'/g,
  `title: <><span style={{ display: 'inline-block' }}>Для</span> <span style={{ display: 'inline-block' }}>должников</span></>, desc: <><span style={{ display: 'inline-block' }}>Защита активов</span> <span style={{ display: 'inline-block' }}>от необоснованного ареста.</span> <span style={{ display: 'inline-block' }}>Снятие ограничений</span> <span style={{ display: 'inline-block' }}>со счетов.</span> <span style={{ display: 'inline-block' }}>Отсрочка или рассрочка</span> <span style={{ display: 'inline-block' }}>исполнения.</span></>`
);
content = content.replace(
  /title: 'Споры с ФССП',\s*desc: 'Обжалование незаконных постановлений. Оспаривание бездействия пристава. Взыскание убытков с казны РФ.'/g,
  `title: <><span style={{ display: 'inline-block' }}>Споры</span> <span style={{ display: 'inline-block' }}>с ФССП</span></>, desc: <><span style={{ display: 'inline-block' }}>Обжалование незаконных</span> <span style={{ display: 'inline-block' }}>постановлений.</span> <span style={{ display: 'inline-block' }}>Оспаривание бездействия</span> <span style={{ display: 'inline-block' }}>пристава.</span> <span style={{ display: 'inline-block' }}>Взыскание убытков</span> <span style={{ display: 'inline-block' }}>с казны РФ.</span></>`
);

// Fix 6: Block 2 (Когда риски) exactly like ZemelnyjYurist
// Let's replace the entire <section className="section bg-light" style={{ padding: '64px 0', background: 'var(--gradient-cream)' }}>
// down to its closing </section>
const risksOldRegex = /<section className="section bg-light" style=\{\{\s*padding: '64px 0', background: 'var\(--gradient-cream\)'\s*\}\}>[\s\S]*?<\/section>/m;
content = content.replace(risksOldRegex, `<section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">С какими рисками <span className="highlight">сталкивается бизнес</span></h2>
            <p className="section-subtitle">
              В исполнительном производстве промедление грозит реальными финансовыми потерями как для должника, так и для взыскателя.
            </p>
          </div>
          
          <div className="grid grid-3" style={{ gap: '28px' }}>
            {[
              { tag: 'Риск блокировки', title: 'Арест расчётных счетов', desc: 'Приостановка платежей, невозможность выдачи зарплаты и расчётов с контрагентами.' },
              { tag: 'Риск изъятия', title: 'Арест имущества', desc: 'Изъятие оборудования, транспорта или товаров в обороте, остановка бизнес-процессов.' },
              { tag: 'Риск потери', title: 'Утрата активов', desc: 'Реализация имущества должника по заниженной стоимости на торгах.' },
              { tag: 'Риск руководства', title: 'Субсидиарная ответственность', desc: 'Привлечение директора и учредителей к ответственности по долгам компании.' },
              { tag: 'Риск репутации', title: 'Блокировка деятельности', desc: 'Падение доверия контрагентов, срыв действующих контрактов.' },
              { tag: 'Риск бездействия', title: 'Затягивание взыскания', desc: 'Если вы взыскатель — риск вывода активов должником из-за медлительности приставов.' }
            ].map((risk, i) => (
              <div key={i} className="hover-lift" style={{
                padding: '36px 30px',
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                border: '1px solid var(--color-border)',
                borderTop: '3px solid var(--color-primary)',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ marginBottom: '20px' }}>
                  <span style={{
                    background: 'rgba(193, 160, 102, 0.1)',
                    color: 'var(--color-gold)',
                    padding: '4px 12px',
                    fontSize: '13px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {risk.tag}
                  </span>
                </div>
                <h3 style={{ 
                  fontFamily: 'var(--font-serif)', 
                  fontSize: '22px', 
                  color: 'var(--color-text)',
                  marginBottom: '16px',
                  lineHeight: 1.3
                }}>
                  {risk.title}
                </h3>
                <p style={{ 
                  fontSize: '15px', 
                  color: 'var(--color-text-muted)', 
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  {risk.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>`);

// Fix 7: Hero Document text labels
content = content.replace(/Заказчик:/g, 'ПОСТАНОВЛЕНИЕ ФССП');
content = content.replace(/Исполнитель:/g, 'АКТ АРЕСТА');
content = content.replace(/ООО ЮК «ДЕ-ЮРЕ»/g, 'ИСПОЛНИТЕЛЬНЫЙ ЛИСТ');
content = content.replace(/ИНН 4800009680/g, 'Подлежит исполнению');
content = content.replace(/ДЕ-ЮРЕ ЛИПЕЦК/g, 'УДОВЛЕТВОРЕНО');

fs.writeFileSync(targetFile, content, 'utf-8');
console.log('File modified successfully');
