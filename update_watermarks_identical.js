const fs = require('fs');

const clientFile = 'src/app/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/IspolnitelnoeClient.tsx';
let content = fs.readFileSync(clientFile, 'utf-8');

const oldBlock2 = /\{\/\* BLOK 2: RISKI \*\/\}[\s\S]*?\{\/\* BLOK 3: DVA SCENARIYA \*\/\}/m;

const newBlock2 = `{/* BLOK 2: RISKI */}
      <section className="section bg-white" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '48px', textAlign: 'left' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.2, textAlign: 'left' }}>
              <span style={{ display: 'inline-block' }}>С какими рисками</span> <br />
              <span style={{ display: 'inline-block' }}>сталкивается бизнес</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', fontWeight: 400, lineHeight: 1.6, margin: 0, textAlign: 'left', textWrap: 'balance' }}>
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
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}>
                {/* Одинаковый фирменный фоновый векторный водяной знак как на страницах хаба */}
                <div style={{ position: 'absolute', bottom: '-15px', right: '-15px', opacity: 0.06, pointerEvents: 'none' }}>
                  <svg width="100" height="100" viewBox="0 0 24 24" fill="var(--color-deep-blue)">
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>

                <div style={{ marginBottom: '20px', position: 'relative', zIndex: 1 }}>
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
                  lineHeight: 1.3,
                  position: 'relative',
                  zIndex: 1
                }}>
                  {risk.title}
                </h3>
                <p style={{ 
                  fontSize: '15px', 
                  color: 'var(--color-text-secondary)', 
                  lineHeight: 1.6,
                  margin: 0,
                  position: 'relative',
                  zIndex: 1
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
fs.writeFileSync(clientFile, content, 'utf-8');
console.log('Block 2 cards updated with exact matching canonical watermark SVG');
