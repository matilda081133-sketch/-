const fs = require('fs');

const targetFile = 'src/app/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/IspolnitelnoeClient.tsx';
let content = fs.readFileSync(targetFile, 'utf-8');

// 1. Fix Block 2 Header Margin and text wrapping
const oldBlock2 = /\{\/\* BLOK 2: RISKI \*\/\}[\s\S]*?\{\/\* BLOK 3: DVA SCENARIYA \*\/\}/m;

const newBlock2 = `{/* BLOK 2: RISKI */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto 52px auto', textAlign: 'center' }}>
            <h2 className="section-title" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2 }}>
              <span style={{ display: 'inline-block' }}>С какими рисками</span> <br />
              <span style={{ display: 'inline-block' }}>сталкивается бизнес</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, lineHeight: 1.6, margin: 0, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>В&nbsp;исполнительном производстве промедление</span> <span style={{ display: 'inline-block' }}>грозит реальными финансовыми потерями</span> <br />
              <span style={{ display: 'inline-block' }}>как для&nbsp;должника,</span> <span style={{ display: 'inline-block' }}>так и&nbsp;для&nbsp;взыскателя.</span>
            </p>
          </div>
          
          <div className="grid grid-3" style={{ gap: '28px' }}>
            {[
              { 
                tag: 'Риск блокировки', 
                title: <><span style={{ display: 'inline-block' }}>Арест</span> <span style={{ display: 'inline-block' }}>расчётных счетов</span></>, 
                desc: <><span style={{ display: 'inline-block' }}>Приостановка платежей,</span> <span style={{ display: 'inline-block' }}>невозможность выдачи зарплаты</span> <span style={{ display: 'inline-block' }}>и&nbsp;расчётов с&nbsp;контрагентами.</span></> 
              },
              { 
                tag: 'Риск изъятия', 
                title: <><span style={{ display: 'inline-block' }}>Арест</span> <span style={{ display: 'inline-block' }}>имущества</span></>, 
                desc: <><span style={{ display: 'inline-block' }}>Изъятие оборудования, транспорта</span> <span style={{ display: 'inline-block' }}>или&nbsp;товаров в&nbsp;обороте,</span> <span style={{ display: 'inline-block' }}>остановка бизнес-процессов.</span></> 
              },
              { 
                tag: 'Риск потери', 
                title: <><span style={{ display: 'inline-block' }}>Утрата</span> <span style={{ display: 'inline-block' }}>активов</span></>, 
                desc: <><span style={{ display: 'inline-block' }}>Реализация имущества должника</span> <span style={{ display: 'inline-block' }}>по&nbsp;заниженной стоимости</span> <span style={{ display: 'inline-block' }}>на&nbsp;торгах.</span></> 
              },
              { 
                tag: 'Риск руководства', 
                title: <><span style={{ display: 'inline-block' }}>Субсидиарная</span> <span style={{ display: 'inline-block' }}>ответственность</span></>, 
                desc: <><span style={{ display: 'inline-block' }}>Привлечение директора</span> <span style={{ display: 'inline-block' }}>и&nbsp;учредителей к&nbsp;ответственности</span> <span style={{ display: 'inline-block' }}>по&nbsp;долгам компании.</span></> 
              },
              { 
                tag: 'Риск репутации', 
                title: <><span style={{ display: 'inline-block' }}>Блокировка</span> <span style={{ display: 'inline-block' }}>деятельности</span></>, 
                desc: <><span style={{ display: 'inline-block' }}>Падение доверия контрагентов,</span> <span style={{ display: 'inline-block' }}>срыв действующих</span> <span style={{ display: 'inline-block' }}>контрактов.</span></> 
              },
              { 
                tag: 'Риск бездействия', 
                title: <><span style={{ display: 'inline-block' }}>Затягивание</span> <span style={{ display: 'inline-block' }}>взыскания</span></>, 
                desc: <><span style={{ display: 'inline-block' }}>Риск вывода активов должником</span> <span style={{ display: 'inline-block' }}>из-за&nbsp;медлительности</span> <span style={{ display: 'inline-block' }}>судебных приставов.</span></> 
              }
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
                  color: 'var(--color-deep-blue)',
                  marginBottom: '16px',
                  lineHeight: 1.3
                }}>
                  {risk.title}
                </h3>
                <p style={{ 
                  fontSize: '15px', 
                  color: 'var(--color-text-secondary)', 
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  {risk.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOK 3: DVA SCENARIYA */}`;

content = content.replace(oldBlock2, newBlock2);

// 2. Block 3 Wraps
content = content.replace(
  /<h2 style=\{\{ fontSize: 'clamp\(28px, 4vw, 42px\)', fontFamily: 'var\(--font-serif\)', color: 'var\(--color-deep-blue\)', marginBottom: '16px', marginTop: 0, textWrap: 'balance' \}\}>\s*Помощь взыскателю и защита компании-должника\s*<\/h2>/m,
  `<h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Помощь взыскателю</span> <br />
              <span style={{ display: 'inline-block' }}>и защита компании-должника</span>
            </h2>`
);

content = content.replace(
  /<p style=\{\{ fontSize: '16px', color: 'var\(--color-deep-blue\)', opacity: 0.9, fontWeight: 500, lineHeight: 1.6, margin: 0 \}\}>\s*Юрист по исполнительному производству помогает в обоих сценариях — разные задачи, один подход: анализ документов, чёткая стратегия, сопровождение до результата\.\s*<\/p>/m,
  `<p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, lineHeight: 1.6, margin: 0, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Юрист по&nbsp;исполнительному производству</span> <span style={{ display: 'inline-block' }}>помогает в&nbsp;обоих сценариях:</span> <span style={{ display: 'inline-block' }}>анализ документов, чёткая стратегия</span> <span style={{ display: 'inline-block' }}>и&nbsp;сопровождение до&nbsp;результата.</span>
            </p>`
);

// 3. Block 4 Header Wraps
content = content.replace(
  /<h2 style=\{\{ fontSize: 'clamp\(28px, 4vw, 42px\)', fontFamily: 'var\(--font-serif\)', color: 'var\(--color-deep-blue\)', marginBottom: '16px', marginTop: 0, textWrap: 'balance', maxWidth: '780px' \}\}>\s*Услуги по исполнительному производству для бизнеса\s*<\/h2>/m,
  `<h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, textWrap: 'balance', maxWidth: '780px' }}>
            <span style={{ display: 'inline-block' }}>Услуги по&nbsp;исполнительному производству</span> <br />
            <span style={{ display: 'inline-block' }}>для бизнеса</span>
          </h2>`
);

// 4. Block 5 Deep Blue Cards text wrapping
content = content.replace(
  /<p style=\{\{ color: 'var\(--color-deep-blue\)', opacity: 0\.9, fontSize: '15px', lineHeight: 1\.6, margin: 0 \}\}>\s*Изучает исполнительный документ, постановления ФССП, проверяет процессуальные сроки и соответствие требованиям закона\.\s*<\/p>/m,
  `<p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                <span style={{ display: 'inline-block' }}>Изучает исполнительный документ,</span> <span style={{ display: 'inline-block' }}>постановления ФССП,</span> <span style={{ display: 'inline-block' }}>проверяет процессуальные сроки</span> <span style={{ display: 'inline-block' }}>и&nbsp;законность требований.</span>
              </p>`
);

content = content.replace(
  /<p style=\{\{ color: 'var\(--color-deep-blue\)', opacity: 0\.9, fontSize: '15px', lineHeight: 1\.6, margin: 0 \}\}>\s*Выбирает наиболее быстрый способ взыскания, формирует пакет документов и контролирует фактическое перечисление средств\.\s*<\/p>/m,
  `<p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                <span style={{ display: 'inline-block' }}>Выбирает наиболее быстрый способ,</span> <span style={{ display: 'inline-block' }}>формирует пакет документов</span> <span style={{ display: 'inline-block' }}>и&nbsp;контролирует перечисление средств.</span>
              </p>`
);

content = content.replace(
  /<p style=\{\{ color: 'var\(--color-deep-blue\)', opacity: 0\.9, fontSize: '15px', lineHeight: 1\.6, margin: 0 \}\}>\s*Инициирует официальные запросы в банки, Росреестр, ГИБДД и налоговые органы для блокировки и ареста активов\.\s*<\/p>/m,
  `<p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                <span style={{ display: 'inline-block' }}>Инициирует официальные запросы</span> <span style={{ display: 'inline-block' }}>в&nbsp;банки, Росреестр, ГИБДД</span> <span style={{ display: 'inline-block' }}>для&nbsp;ареста активов.</span>
              </p>`
);

content = content.replace(
  /<p style=\{\{ color: 'var\(--color-deep-blue\)', opacity: 0\.9, fontSize: '15px', lineHeight: 1\.6, margin: 0 \}\}>\s*Подаёт мотивированные жалобы на бездействие или неправомерные аресты старшему приставу, в прокуратуру или арбитражный суд\.\s*<\/p>/m,
  `<p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                <span style={{ display: 'inline-block' }}>Подаёт жалобы на&nbsp;бездействие</span> <span style={{ display: 'inline-block' }}>или&nbsp;неправомерные аресты</span> <span style={{ display: 'inline-block' }}>старшему приставу или&nbsp;в&nbsp;суд.</span>
              </p>`
);

content = content.replace(
  /<p style=\{\{ color: 'var\(--color-deep-blue\)', opacity: 0\.9, fontSize: '15px', lineHeight: 1\.6, margin: 0 \}\}>\s*Снимает арест со счетов для продолжения расчётов по зарплате и налогам, исключает производственные станки и транспорт из описи\.\s*<\/p>/m,
  `<p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                <span style={{ display: 'inline-block' }}>Снимает арест со&nbsp;счетов</span> <span style={{ display: 'inline-block' }}>для&nbsp;выплаты зарплаты и&nbsp;налогов,</span> <span style={{ display: 'inline-block' }}>защищает оборудование.</span>
              </p>`
);

content = content.replace(
  /<p style=\{\{ color: 'var\(--color-deep-blue\)', opacity: 0\.9, fontSize: '15px', lineHeight: 1\.6, margin: 0 \}\}>\s*Формирует доказательную базу, готовит заявление в суд и добивается поэтапного исполнения без остановки бизнеса\.\s*<\/p>/m,
  `<p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                <span style={{ display: 'inline-block' }}>Формирует доказательную базу,</span> <span style={{ display: 'inline-block' }}>готовит заявление в&nbsp;суд</span> <span style={{ display: 'inline-block' }}>и&nbsp;добивается поэтапного исполнения.</span>
              </p>`
);

// 5. Block 11 Contacts Header Wraps
content = content.replace(
  /<h2 style=\{\{ fontSize: '36px', fontFamily: 'var\(--font-serif\)', color: 'var\(--color-deep-blue\)', marginBottom: '16px', lineHeight: 1\.2, marginTop: 0, textWrap: 'balance' \}\}>\s*Обсудите ситуацию с юристом\s*<\/h2>/m,
  `<h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', lineHeight: 1.2, marginTop: 0, textWrap: 'balance' }}>
                <span style={{ display: 'inline-block' }}>Обсудите ситуацию</span> <br />
                <span style={{ display: 'inline-block' }}>с юристом</span>
              </h2>`
);

fs.writeFileSync(targetFile, content, 'utf-8');
console.log('All text wrappings and Block 2 margin updated successfully');
