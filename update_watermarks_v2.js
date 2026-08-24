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
                desc: <><span style={{ display: 'inline-block' }}>Приостановка платежей,</span> <span style={{ display: 'inline-block' }}>невозможность выдачи зарплаты</span> <span style={{ display: 'inline-block' }}>и&nbsp;расчётов с&nbsp;контрагентами.</span></>,
                icon: (
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                    <line x1="2" y1="10" x2="22" y2="10"></line>
                    <line x1="6" y1="15" x2="10" y2="15"></line>
                    <circle cx="16" cy="15" r="1.5"></circle>
                  </svg>
                )
              },
              { 
                tag: 'Риск изъятия', 
                title: <><span style={{ display: 'inline-block' }}>Арест</span> <span style={{ display: 'inline-block' }}>имущества</span></>, 
                desc: <><span style={{ display: 'inline-block' }}>Изъятие оборудования, транспорта</span> <span style={{ display: 'inline-block' }}>или&nbsp;товаров в&nbsp;обороте,</span> <span style={{ display: 'inline-block' }}>остановка бизнес-процессов.</span></>,
                icon: (
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13"></rect>
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                    <circle cx="18.5" cy="18.5" r="2.5"></circle>
                  </svg>
                )
              },
              { 
                tag: 'Риск потери', 
                title: <><span style={{ display: 'inline-block' }}>Утрата</span> <span style={{ display: 'inline-block' }}>активов</span></>, 
                desc: <><span style={{ display: 'inline-block' }}>Реализация имущества должника</span> <span style={{ display: 'inline-block' }}>по&nbsp;заниженной стоимости</span> <span style={{ display: 'inline-block' }}>на&nbsp;торгах.</span></>,
                icon: (
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 13l-7.5 7.5c-.8.8-2.2.8-3 0s-.8-2.2 0-3L11 10"></path>
                    <path d="M16 8l3-3c.8-.8 2.2-.8 3 0s.8 2.2 0 3l-3 3"></path>
                    <path d="M8.5 4.5l7 7"></path>
                    <path d="M13 3l8 8"></path>
                  </svg>
                )
              },
              { 
                tag: 'Риск руководства', 
                title: <><span style={{ display: 'inline-block' }}>Субсидиарная</span> <span style={{ display: 'inline-block' }}>ответственность</span></>, 
                desc: <><span style={{ display: 'inline-block' }}>Привлечение директора</span> <span style={{ display: 'inline-block' }}>и&nbsp;учредителей к&nbsp;ответственности</span> <span style={{ display: 'inline-block' }}>по&nbsp;долгам компании.</span></>,
                icon: (
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <path d="M12 8v4"></path>
                    <path d="M12 16h.01"></path>
                  </svg>
                )
              },
              { 
                tag: 'Риск репутации', 
                title: <><span style={{ display: 'inline-block' }}>Блокировка</span> <span style={{ display: 'inline-block' }}>деятельности</span></>, 
                desc: <><span style={{ display: 'inline-block' }}>Падение доверия контрагентов,</span> <span style={{ display: 'inline-block' }}>срыв действующих</span> <span style={{ display: 'inline-block' }}>контрактов.</span></>,
                icon: (
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    <circle cx="12" cy="16" r="1.5"></circle>
                  </svg>
                )
              },
              { 
                tag: 'Риск бездействия', 
                title: <><span style={{ display: 'inline-block' }}>Затягивание</span> <span style={{ display: 'inline-block' }}>взыскания</span></>, 
                desc: <><span style={{ display: 'inline-block' }}>Риск вывода активов должником</span> <span style={{ display: 'inline-block' }}>из-за&nbsp;медлительности</span> <span style={{ display: 'inline-block' }}>судебных приставов.</span></>,
                icon: (
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2h12"></path>
                    <path d="M6 22h12"></path>
                    <path d="M18 2l-6 7-6-7"></path>
                    <path d="M6 22l6-7 6 7"></path>
                  </svg>
                )
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
                {/* Фоновый векторный водяной знак */}
                <div style={{ position: 'absolute', bottom: '-12px', right: '-12px', opacity: 0.10, pointerEvents: 'none', zIndex: 0 }}>
                  {risk.icon}
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
console.log('Block 2 cards updated with crisp stroke vector watermarks at 10% opacity');
