const fs = require('fs');

const clientFile = 'src/app/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/IspolnitelnoeClient.tsx';
let content = fs.readFileSync(clientFile, 'utf-8');

const oldBlock5 = /\{\/\* BLOK 5: CHTO DELAET YURIST[\s\S]*?\{\/\* BLOK 6: KURATOR \*\/\}/m;

const newBlock5 = `{/* BLOK 5: CHTO DELAET YURIST */}
      <section className="section" style={{ padding: '80px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0 }}>
              <span style={{ display: 'inline-block' }}>Что делает юрист</span> <br />
              <span style={{ display: 'inline-block' }}>по исполнительному производству</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, margin: 0, lineHeight: 1.6, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Перечень конкретных процессуальных действий юриста</span> <span style={{ display: 'inline-block' }}>для&nbsp;защиты интересов компании</span> <br />
              <span style={{ display: 'inline-block' }}>и&nbsp;достижения реального финансового результата.</span>
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '28px', position: 'relative' }}>
            {[
              {
                title: <><span style={{ display: 'inline-block' }}>Проверяет документы</span> <br /><span style={{ display: 'inline-block' }}>и сроки</span></>,
                desc: 'Изучает исполнительный документ, постановления ФССП, проверяет процессуальные сроки и соответствие закону.'
              },
              {
                title: <><span style={{ display: 'inline-block' }}>Предъявляет лист</span> <br /><span style={{ display: 'inline-block' }}>в банк или ФССП</span></>,
                desc: 'Выбирает наиболее быстрый способ, формирует пакет документов и контролирует перечисление средств.'
              },
              {
                title: <><span style={{ display: 'inline-block' }}>Розыск счетов</span> <br /><span style={{ display: 'inline-block' }}>и имущества должника</span></>,
                desc: 'Инициирует официальные запросы в банки, Росреестр, ГИБДД для оперативного ареста активов.'
              },
              {
                title: <><span style={{ display: 'inline-block' }}>Обжалует незаконные</span> <br /><span style={{ display: 'inline-block' }}>действия приставов</span></>,
                desc: 'Подаёт жалобы на бездействие или неправомерные аресты старшему приставу или в суд.'
              },
              {
                title: <><span style={{ display: 'inline-block' }}>Защищает активы</span> <br /><span style={{ display: 'inline-block' }}>компании-должника</span></>,
                desc: 'Снимает арест со счетов для выплаты зарплаты и налогов, защищает производственное оборудование.'
              },
              {
                title: <><span style={{ display: 'inline-block' }}>Добивается отсрочки</span> <br /><span style={{ display: 'inline-block' }}>или рассрочки в суде</span></>,
                desc: 'Формирует доказательную базу, готовит заявление в суд и добивается поэтапного исполнения.'
              }
            ].map((act, idx) => (
              <div key={idx} className="hover-lift" style={{
                background: 'linear-gradient(160deg, #FFFFFF 0%, #FBF8F3 100%)',
                padding: '36px 30px 32px 30px',
                border: '1px solid var(--color-border)',
                borderTop: '4px solid var(--color-gold)',
                boxShadow: '0 4px 20px rgba(23, 50, 77, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '24px',
                  background: 'var(--color-gold)',
                  color: '#FFFFFF',
                  fontSize: '12px',
                  fontWeight: 700,
                  padding: '2px 10px',
                  borderRadius: '2px',
                  letterSpacing: '0.05em'
                }}>
                  0{idx + 1}
                </div>
                <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', margin: '8px 0 14px 0', lineHeight: 1.35 }}>
                  {act.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  {act.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOK 6: KURATOR */}`;

content = content.replace(oldBlock5, newBlock5);
fs.writeFileSync(clientFile, content, 'utf-8');
console.log('Block 5 redesigned exactly identical to SporyOGranicahClient block 3');
