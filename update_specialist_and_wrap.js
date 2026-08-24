const fs = require('fs');

const clientFile = 'src/app/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/IspolnitelnoeClient.tsx';
let content = fs.readFileSync(clientFile, 'utf-8');

// 1. Clean up Block 3 and Block 4
const oldBlock3And4 = /\{\/\* BLOK 3: DVA SCENARIYA \*\/\}[\s\S]*?\{\/\* BLOK 5: CHTO DELAET YURIST/m;

const newBlock3And4 = `{/* BLOK 3: DVA SCENARIYA */}
      <section className="section bg-white" style={{ padding: '64px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Помощь взыскателю</span> <br />
              <span style={{ display: 'inline-block' }}>и защита компании-должника</span>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, lineHeight: 1.6, margin: 0, textWrap: 'balance' }}>
              <span style={{ display: 'inline-block' }}>Юрист по&nbsp;исполнительному производству</span> <span style={{ display: 'inline-block' }}>помогает в&nbsp;обоих сценариях:</span> <span style={{ display: 'inline-block' }}>анализ документов, чёткая стратегия</span> <span style={{ display: 'inline-block' }}>и&nbsp;сопровождение до&nbsp;результата.</span>
            </p>
          </div>
          <div className="grid grid-2" style={{ gap: '24px', marginBottom: '40px' }}>
            <div style={{ padding: '36px 32px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-primary)', borderRadius: '0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h3 style={{ margin: 0, fontSize: '22px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)' }}>Вы — взыскатель</h3>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>У вас есть судебное решение или иной исполнительный документ, но деньги не поступают. Пристав бездействует или должник уклоняется от исполнения.</p>
              <ul style={{ margin: 0, paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['Проверяем правильность оформления документа и сроки', 'Предъявляем лист напрямую в банк или в ФССП', 'Разыскиваем активы и счета должника', 'Контролируем действия пристава, обжалуем бездействие', 'Инициируем арест имущества и запрет регистрационных действий'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><polyline points="20 6 9 17 4 12" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ padding: '36px 32px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderTop: '3px solid var(--color-gold)', borderRadius: '0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h3 style={{ margin: 0, fontSize: '22px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)' }}>Ваша компания — должник</h3>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>На счёт или имущество компании наложен арест, ФССП предъявила требования или исполнительный лист уже в работе. Нужно минимизировать урон для деятельности.</p>
              <ul style={{ margin: 0, paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['Проверяем законность действий приставов и документов', 'Обжалуем незаконный арест счёта или имущества', 'Добиваемся отсрочки или рассрочки исполнения через суд', 'Защищаем имущество, необходимое для текущей деятельности', 'Выстраиваем стратегию при нескольких взыскателях'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: 'var(--color-deep-blue)', lineHeight: 1.55 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><polyline points="20 6 9 17 4 12" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <a href="#form" className="btn btn-primary" style={{ display: 'inline-block' }}>Оценить документы и риски</a>
          </div>
        </div>
      </section>

      {/* BLOK 4: USLUGI */}
      <section className="section bg-light" style={{ padding: '64px 0', background: 'var(--gradient-cream)' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '16px', marginTop: 0, lineHeight: 1.25, maxWidth: '780px' }}>
            <span style={{ display: 'inline-block' }}>Услуги по&nbsp;исполнительному</span> <br />
            <span style={{ display: 'inline-block' }}>производству для&nbsp;бизнеса</span>
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, lineHeight: 1.6, margin: '0 0 40px', maxWidth: '780px' }}>
            <span style={{ display: 'inline-block' }}>Выберите направление, наиболее близкое к&nbsp;вашей задаче.</span> <br />
            <span style={{ display: 'inline-block' }}>Если ситуация затрагивает оба — опишите её в&nbsp;форме.</span>
          </p>
          <div className="grid grid-2" style={{ gap: '24px' }}>
            <a href="/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/vzyskanie-po-ispolnitelnomu-listu-s-yuridicheskogo-lica/" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
              <div className="card service-card" style={{ height: '100%', minHeight: '210px', padding: '28px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderTop: '3px solid var(--color-primary)', cursor: 'pointer' }}>
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
            <a href="/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/obzhalovanie-dejstvij-pristavov-dlya-biznesa/" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
              <div className="card service-card" style={{ height: '100%', minHeight: '210px', padding: '28px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderTop: '3px solid var(--color-primary)', cursor: 'pointer' }}>
                <div>
                  <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3, fontFamily: 'var(--font-serif)' }}>
                    <span style={{ display: 'inline-block' }}>Обжалование действий приставов</span> <span style={{ display: 'inline-block' }}>для бизнеса</span>
                  </h3>
                  <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    <span style={{ display: 'inline-block' }}>Жалобы на незаконный арест</span> <span style={{ display: 'inline-block' }}>имущества и счёта,</span> <span style={{ display: 'inline-block' }}>бездействие пристава,</span> <span style={{ display: 'inline-block' }}>нарушение сроков</span> <span style={{ display: 'inline-block' }}>и порядка исполнительных действий.</span> <span style={{ display: 'inline-block' }}>Защита компании-должника.</span>
                  </p>
                </div>
                <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600 }}>
                  <span>Подробнее</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* BLOK 5: CHTO DELAET YURIST`;

content = content.replace(oldBlock3And4, newBlock3And4);

// 2. Format Block 6 (Specialist) identically to Konopkin card
const oldSpecialist = /\{\/\* BLOK 6: KURATOR \*\/\}[\s\S]*?\{\/\* BLOK 7: KEYSY \*\/\}/m;

const newSpecialist = `{/* BLOK 6: KURATOR */}
      <SpecialistBlock 
        title="Куратор направления"
        name="Марина Валерьевна Смольянинова"
        position={<>Ведущий юрист ЮК «Де-Юре»,<br />куратор направления «Исполнительное производство»</>}
        imageUrl="/images/smolyaninova.jpg"
        description={[
          <span key="1" style={{ color: 'var(--color-deep-blue)', display: 'block' }}>
            Марина Валерьевна Смольянинова курирует сопровождение исполнительного производства для юридических лиц и индивидуальных предпринимателей. Выстраивает стратегию защиты активов компании, взаимодействия со службой судебных приставов и банками, оспаривания незаконных действий и возврата задолженности.
          </span>,
          <ul key="2" style={{ listStyle: 'none', padding: 0, margin: '16px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>13 лет опыта работы в Федеральной службе судебных приставов (ФССП)</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Специализация на защите бизнеса и многоуровневых взысканиях</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--color-deep-blue)' }}>
              <div style={{ width: '6px', height: '6px', minWidth: '6px', background: 'var(--color-gold)', borderRadius: '50%', flexShrink: 0 }}></div>
              <span>Практика оспаривания постановлений и отсрочки исполнения в судах</span>
            </li>
          </ul>,
          <a key="3" href="/specialisty/smolyaninova-marina-valerevna/" style={{ display: 'inline-block', marginTop: '16px', fontSize: '14px', color: 'var(--color-primary)', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
            Подробнее о Марине Валерьевне Смольяниновой →
          </a>
        ]}
        buttonText="Задать вопрос Марине Валерьевне"
        buttonHref="#form"
      />

      {/* BLOK 7: KEYSY */}`;

content = content.replace(oldSpecialist, newSpecialist);

fs.writeFileSync(clientFile, content, 'utf-8');
console.log('Block 4 subtitle wrapping and SpecialistBlock for Smolyaninova updated identically to template');
