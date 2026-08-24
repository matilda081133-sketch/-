const fs = require('fs');

const targetFile = 'src/app/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/IspolnitelnoeClient.tsx';
let content = fs.readFileSync(targetFile, 'utf-8');

const newHeroRightContent = `rightContent={
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', width: '100%' }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '130%',
              height: '130%',
              background: 'radial-gradient(circle, rgba(193, 160, 102, 0.15) 0%, rgba(23, 50, 77, 0.04) 40%, transparent 70%)',
              zIndex: 0,
              pointerEvents: 'none'
            }} />

            <svg style={{ position: 'absolute', top: '40%', left: '85%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', opacity: 0.09, zIndex: 0, pointerEvents: 'none' }} viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="0.6">
              <path d="M3 21h18 M4 21v-2h16v2 M6 19V9 M10 19V9 M14 19V9 M18 19V9 M12 4l-9 5h18l-9-5z M4 9h16"/>
            </svg>

            <div className="mockup-container" style={{ zIndex: 1, margin: 0 }}>
              <div style={{ position: 'absolute', width: '220px', height: '220px', background: 'var(--color-primary)', filter: 'blur(90px)', opacity: 0.12, borderRadius: '50%' }}></div>
              
              {/* Sheet 4: Постановление ФССП */}
              <div className="doc-wrapper-float-4">
                <div className="doc-sheet doc-sheet-4">
                  <div style={{ padding: '35px 25px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '25px' }}>
                      <div style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        ФССП РОССИИ<br/>
                        <span style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)' }}>ИП № 94821/26/48001</span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end' }}>
                        <div style={{ width: '80px', height: '3px', background: 'rgba(23,50,77,0.2)' }}></div>
                        <div style={{ width: '50px', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>
                    </div>
                    <div style={{ width: '140px', height: '6px', background: 'var(--color-primary)', margin: '0 auto 20px auto' }}></div>
                    <div style={{ fontSize: '7px', fontWeight: 'bold', color: 'var(--color-deep-blue)', textAlign: 'center', marginBottom: '14px', fontFamily: 'var(--font-serif)' }}>
                      ПОСТАНОВЛЕНИЕ О ВОЗБУЖДЕНИИ ИП
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ width: '100%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      <div style={{ width: '90%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      <div style={{ width: '75%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sheet 3: Арест счетов и имущества */}
              <div className="doc-wrapper-float-3">
                <div className="doc-sheet doc-sheet-3">
                  <div style={{ padding: '35px 25px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ position: 'absolute', top: '22px', left: '22px', width: '95px', height: '28px', border: '1.5px solid rgba(23, 50, 77, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-4deg)' }}>
                      <span style={{ fontSize: '5px', fontWeight: 'bold', color: 'rgba(23,50,77,0.7)', fontFamily: 'var(--font-serif)', textAlign: 'center', lineHeight: 1.1 }}>
                        УФССП ПО ЛИПЕЦКОЙ ОБЛ.<br/>ОСП ПО ОКТЯБРЬСКОМУ Р-НУ
                      </span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '30px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end' }}>
                        <div style={{ width: '90px', height: '3px', background: 'rgba(23,50,77,0.2)' }}></div>
                        <div style={{ width: '60px', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>
                    </div>
                    <div style={{ width: '130px', height: '6px', background: 'var(--color-primary)', margin: '0 auto 16px auto' }}></div>
                    <div style={{ fontSize: '7px', fontWeight: 'bold', color: 'var(--color-deep-blue)', textAlign: 'center', marginBottom: '14px', fontFamily: 'var(--font-serif)' }}>
                      ПОСТАНОВЛЕНИЕ ОБ АРЕСТЕ СЧЕТОВ
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <div style={{ width: '100%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      <div style={{ width: '95%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      <div style={{ width: '80%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                    </div>
                    <div style={{ marginTop: 'auto', paddingTop: '10px', borderTop: '1px dashed rgba(23,50,77,0.15)' }}>
                      <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)' }}>Банк получателя: ПАО «Сбербанк» | Р/с должника арестован</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sheet 2: Исполнительный лист Арбитражного суда */}
              <div className="doc-wrapper-float-2">
                <div className="doc-sheet doc-sheet-2">
                  <div style={{ padding: '28px 22px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ position: 'absolute', top: '20px', left: '20px', width: '110px', height: '32px', border: '1px solid #C1A066', color: '#C1A066', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-4deg)', opacity: 0.95 }}>
                      <div style={{ fontFamily: 'var(--font-serif)', fontSize: '5px', textAlign: 'center', fontWeight: 'bold', lineHeight: 1.2 }}>
                        АРБИТРАЖНЫЙ СУД<br/>
                        ДЕЛО № А36-1284/2026
                      </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '24px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end' }}>
                        <div style={{ width: '85px', height: '3px', background: 'rgba(23,50,77,0.2)' }}></div>
                        <div style={{ width: '45px', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      </div>
                    </div>

                    <div style={{ width: '140px', height: '6px', background: 'var(--color-primary)', margin: '0 auto 12px auto' }}></div>
                    
                    <div style={{ fontSize: '8px', fontWeight: 'bold', color: 'var(--color-deep-blue)', textAlign: 'center', marginBottom: '4px', fontFamily: 'var(--font-serif)' }}>
                      ИСПОЛНИТЕЛЬНЫЙ ЛИСТ
                    </div>
                    <div style={{ fontSize: '6px', color: 'var(--color-gold)', textAlign: 'center', fontWeight: 'bold', marginBottom: '14px', letterSpacing: '0.05em' }}>
                      СЕРИЯ ФС № 03948210
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '5px', color: 'rgba(23,50,77,0.8)' }}>
                        <span>Взыскатель: ООО «ЮниТрейд»</span>
                        <span>Сумма: 3 850 000 ₽</span>
                      </div>
                      <div style={{ width: '100%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                      <div style={{ width: '90%', height: '3px', background: 'rgba(23,50,77,0.1)' }}></div>
                    </div>

                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '8px', borderTop: '1px dashed rgba(23,50,77,0.15)' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                        <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Судья арбитражного суда:</div>
                        <div style={{ width: '70px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '6px' }}></div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                        <div style={{ fontSize: '5px', color: 'rgba(23,50,77,0.6)', fontFamily: 'var(--font-sans)' }}>Гербовая печать суда:</div>
                        <div style={{ width: '40px', height: '1px', background: 'rgba(23,50,77,0.4)', marginTop: '6px' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sheet 1 (Front): Карточка процесса взыскания Де-Юре */}
              <div className="doc-wrapper-float-1">
                <div className="doc-sheet doc-sheet-1">
                  <div style={{ padding: '24px 20px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(23,50,77,0.2)', paddingBottom: '10px', marginBottom: '12px' }}>
                      <img src="/images/logo_dark.png" alt="Де-Юре" style={{ width: '55px', height: 'auto', opacity: 0.9 }} />
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', alignItems: 'flex-end' }}>
                        <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', letterSpacing: '0.05em' }}>ИСПОЛНИТЕЛЬНОЕ ПРОИЗВОДСТВО</span>
                        <span style={{ fontSize: '5px', color: 'var(--color-primary)', fontWeight: 600 }}>ЮК «Де-Юре» Липецк</span>
                      </div>
                    </div>

                    {/* Visual Box: Статус и этапы взыскания */}
                    <div style={{ 
                      width: '100%', 
                      background: 'rgba(247, 244, 237, 0.75)', 
                      border: '1px solid rgba(193, 160, 102, 0.35)', 
                      borderRadius: '2px', 
                      marginBottom: '12px',
                      padding: '10px 12px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '6px', fontWeight: 'bold', color: 'var(--color-deep-blue)', textTransform: 'uppercase' }}>Ход взыскания</span>
                        <span style={{ fontSize: '6px', fontWeight: 'bold', color: '#1B5E20', background: 'rgba(76, 175, 80, 0.15)', padding: '1px 5px', borderRadius: '2px' }}>В ПРОЦЕССЕ ВЗЫСКАНИЯ</span>
                      </div>

                      {/* Steps tracker SVG */}
                      <svg width="100%" height="48" viewBox="0 0 220 48" fill="none">
                        {/* Step lines */}
                        <line x1="20" y1="16" x2="80" y2="16" stroke="#C1A066" strokeWidth="2" />
                        <line x1="80" y1="16" x2="140" y2="16" stroke="#C1A066" strokeWidth="2" />
                        <line x1="140" y1="16" x2="200" y2="16" stroke="#C1A066" strokeWidth="2" strokeDasharray="3 3" />

                        {/* Node 1 */}
                        <circle cx="20" cy="16" r="6" fill="#10273B" />
                        <text x="20" y="19" fill="#FFF" fontSize="6" fontWeight="bold" textAnchor="middle">✓</text>
                        <text x="20" y="32" fill="#10273B" fontSize="5" fontWeight="bold" textAnchor="middle">Исполн. лист</text>

                        {/* Node 2 */}
                        <circle cx="80" cy="16" r="6" fill="#10273B" />
                        <text x="80" y="19" fill="#FFF" fontSize="6" fontWeight="bold" textAnchor="middle">✓</text>
                        <text x="80" y="32" fill="#10273B" fontSize="5" fontWeight="bold" textAnchor="middle">Запрос в банк</text>

                        {/* Node 3 */}
                        <circle cx="140" cy="16" r="6" fill="#C1A066" />
                        <text x="140" y="19" fill="#FFF" fontSize="6" fontWeight="bold" textAnchor="middle">✓</text>
                        <text x="140" y="32" fill="#10273B" fontSize="5" fontWeight="bold" textAnchor="middle">Арест счёта</text>

                        {/* Node 4 */}
                        <circle cx="200" cy="16" r="6" fill="#FFF" stroke="#C1A066" strokeWidth="1.5" />
                        <circle cx="200" cy="16" r="2.5" fill="#C1A066" />
                        <text x="200" y="32" fill="#10273B" fontSize="5" fontWeight="bold" textAnchor="middle">Выплата</text>
                      </svg>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#FFFFFF', padding: '5px 8px', border: '1px solid rgba(23,50,77,0.08)' }}>
                        <span style={{ fontSize: '6px', color: 'var(--color-text-secondary)' }}>Сумма к взысканию:</span>
                        <span style={{ fontSize: '7px', fontWeight: 'bold', color: 'var(--color-deep-blue)' }}>3 850 000 ₽</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '8px' }}>
                      <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C1A066', flexShrink: 0 }}></div>
                        <span style={{ fontSize: '6px', color: 'var(--color-deep-blue)', fontWeight: 500 }}>Полный контроль за действиями судебных приставов</span>
                      </div>
                      <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C1A066', flexShrink: 0 }}></div>
                        <span style={{ fontSize: '6px', color: 'var(--color-deep-blue)', fontWeight: 500 }}>Защита счетов и активов компании от блокировки</span>
                      </div>
                    </div>

                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '8px', borderTop: '1px solid rgba(23,50,77,0.2)' }}>
                      <div>
                        <div style={{ fontSize: '9px', fontWeight: 'bold', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)' }}>ООО ЮК «ДЕ-ЮРЕ»</div>
                        <div style={{ fontSize: '7px', color: 'rgba(23,50,77,0.6)' }}>ИНН 4800009680</div>
                      </div>
                      <div style={{ width: '42px', height: '42px', borderRadius: '50%', border: '1.5px solid #17375E', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-12deg)', opacity: 0.9 }}>
                        <div style={{ width: '34px', height: '34px', borderRadius: '50%', border: '0.5px dashed #17375E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <span style={{ fontSize: '6px', fontWeight: 'bold', color: '#17375E', textAlign: 'center', lineHeight: 1.1 }}>ДЕ-ЮРЕ<br/>ЛИПЕЦК</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }`;

// Replace rightContent block
content = content.replace(/rightContent=\{\s*<div className="hero-right-col"[\s\S]*?<\/div>\s*\}\s*\/>/m, newHeroRightContent + '\n      />');

// Also update Service cards with proper inline-block wrapping in Block 4
content = content.replace(
  /<div className="card service-card" style=\{\{ height: '100%', minHeight: '210px', padding: '28px', background: 'var\(--color-white\)', border: '1px solid var\(--color-border\)', borderRadius: '0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderTop: '3px solid var\(--color-primary\)', cursor: 'pointer' \}\}>[\s\S]*?<\/div>\s*<\/a>\s*<a href="\/biznesu\/ispolnitelnoe-proizvodstvo-dlya-biznesa\/obzhalovanie-dejstvij-pristavov-dlya-biznesa\/"/m,
  `<div className="card service-card" style={{ height: '100%', minHeight: '210px', padding: '28px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderTop: '3px solid var(--color-primary)', cursor: 'pointer' }}>
                <div>
                  <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>
                    <span style={{ display: 'inline-block' }}>Взыскание по исполнительному листу</span> <span style={{ display: 'inline-block' }}>с юридического лица</span>
                  </h3>
                  <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    <span style={{ display: 'inline-block' }}>Предъявление листа в банк или ФССП,</span> <span style={{ display: 'inline-block' }}>контроль действий пристава,</span> <span style={{ display: 'inline-block' }}>поиск активов должника,</span> <span style={{ display: 'inline-block' }}>обжалование бездействия —</span> <span style={{ display: 'inline-block' }}>сопровождение взыскателя на всех этапах.</span>
                  </p>
                </div>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600 }}>
                  <span>Подробнее</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </a>
            <a href="/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/obzhalovanie-dejstvij-pristavov-dlya-biznesa/"`
);

content = content.replace(
  /<h3 style=\{\{ margin: '0 0 12px 0', fontSize: '18px', color: 'var\(--color-deep-blue\)', lineHeight: 1.3, fontFamily: 'var\(--font-serif\)' \}\}>Обжалование действий приставов для бизнеса<\/h3>\s*<p style=\{\{ margin: '0 0 20px 0', fontSize: '14px', color: 'var\(--color-text-secondary\)', lineHeight: 1.55 \}\}>Жалобы на незаконный арест имущества и счёта, бездействие пристава, нарушение сроков и порядка исполнительных действий. Защита компании-должника.<\/p>/m,
  `<h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>
                    <span style={{ display: 'inline-block' }}>Обжалование действий приставов</span> <span style={{ display: 'inline-block' }}>для бизнеса</span>
                  </h3>
                  <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    <span style={{ display: 'inline-block' }}>Жалобы на незаконный арест</span> <span style={{ display: 'inline-block' }}>имущества и счёта,</span> <span style={{ display: 'inline-block' }}>бездействие пристава,</span> <span style={{ display: 'inline-block' }}>нарушение сроков</span> <span style={{ display: 'inline-block' }}>и порядка исполнительных действий.</span> <span style={{ display: 'inline-block' }}>Защита компании-должника.</span>
                  </p>`
);

fs.writeFileSync(targetFile, content, 'utf-8');
console.log('Hero creative and wrapping updated successfully');
