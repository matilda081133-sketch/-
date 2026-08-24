const fs = require('fs');

const targetFile = 'src/app/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/IspolnitelnoeClient.tsx';
let content = fs.readFileSync(targetFile, 'utf-8');

const newBlock5 = `{/* BLOK 5: CHTO DELAET YURIST (DEEP BLUE CARDS) */}
      <section style={{ background: 'var(--color-deep-blue)', padding: '64px 0 64px', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(28px, 3.8vw, 38px)', fontFamily: 'var(--font-serif)', color: 'var(--color-white)', marginBottom: '12px', marginTop: 0 }}>
            <span style={{ display: 'inline-block' }}>Что делает юрист</span> <br /><span style={{ display: 'inline-block' }}>по исполнительному производству</span>
          </h2>
          <div style={{ width: '60px', height: '2px', background: 'var(--color-gold)', marginBottom: '20px' }}></div>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', marginBottom: '40px', maxWidth: '720px', lineHeight: 1.6 }}>
            Перечень конкретных процессуальных действий юриста для защиты интересов компании и достижения реального финансового результата.
          </p>

          <div className="grid grid-3" style={{ gap: '24px', marginBottom: '32px' }}>
            {/* Карточка 1 */}
            <div 
              className="urgent-card hover-lift"
              style={{ 
                background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)', 
                padding: '32px 28px', 
                borderTop: '4px solid var(--color-gold)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px', minHeight: '48px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>
                  Проверяет документы <br />и сроки
                </h3>
              </div>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                Изучает исполнительный документ, постановления ФССП, проверяет процессуальные сроки и соответствие требованиям закона.
              </p>
            </div>

            {/* Карточка 2 */}
            <div 
              className="urgent-card hover-lift"
              style={{ 
                background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)', 
                padding: '32px 28px', 
                borderTop: '4px solid var(--color-gold)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px', minHeight: '48px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <rect x="3" y="3" width="18" height="18" rx="0"></rect>
                  <path d="M3 9h18"></path>
                  <path d="M9 21V9"></path>
                </svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>
                  Предъявляет лист <br />в банк или ФССП
                </h3>
              </div>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                Выбирает наиболее быстрый способ взыскания, формирует пакет документов и контролирует фактическое перечисление средств.
              </p>
            </div>

            {/* Карточка 3 */}
            <div 
              className="urgent-card hover-lift"
              style={{ 
                background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)', 
                padding: '32px 28px', 
                borderTop: '4px solid var(--color-gold)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px', minHeight: '48px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>
                  Розыск счетов <br />и имущества должника
                </h3>
              </div>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                Инициирует официальные запросы в банки, Росреестр, ГИБДД и налоговые органы для блокировки и ареста активов.
              </p>
            </div>

            {/* Карточка 4 */}
            <div 
              className="urgent-card hover-lift"
              style={{ 
                background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)', 
                padding: '32px 28px', 
                borderTop: '4px solid var(--color-gold)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px', minHeight: '48px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>
                  Обжалует незаконные <br />действия приставов
                </h3>
              </div>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                Подаёт мотивированные жалобы на бездействие или неправомерные аресты старшему приставу, в прокуратуру или арбитражный суд.
              </p>
            </div>

            {/* Карточка 5 */}
            <div 
              className="urgent-card hover-lift"
              style={{ 
                background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)', 
                padding: '32px 28px', 
                borderTop: '4px solid var(--color-gold)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px', minHeight: '48px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>
                  Защищает активы <br />компании-должника
                </h3>
              </div>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                Снимает арест со счетов для продолжения расчётов по зарплате и налогам, исключает производственные станки и транспорт из описи.
              </p>
            </div>

            {/* Карточка 6 */}
            <div 
              className="urgent-card hover-lift"
              style={{ 
                background: 'linear-gradient(135deg, #FAF7F2 0%, #F3ECDF 100%)', 
                padding: '32px 28px', 
                borderTop: '4px solid var(--color-gold)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px', minHeight: '48px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>
                  Добивается отсрочки <br />или рассрочки в суде
                </h3>
              </div>
              <p style={{ color: 'var(--color-deep-blue)', opacity: 0.9, fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                Формирует доказательную базу, готовит заявление в суд и добивается поэтапного исполнения без остановки бизнеса.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ display: 'inline-block', backgroundColor: 'var(--color-gold)', color: 'var(--color-deep-blue)', borderColor: 'var(--color-gold)', fontWeight: 700, padding: '14px 32px' }}>
              Обсудить ситуацию с юристом
            </a>
          </div>
        </div>
      </section>`;

// Replace Block 5
content = content.replace(/\{\/\* BLOK 5: CHTO DELAET YURIST \*\/\}[\s\S]*?<\/section>/m, newBlock5);

fs.writeFileSync(targetFile, content, 'utf-8');
console.log('Block 5 successfully transformed to Deep Blue Cards');
