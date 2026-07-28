const fs = require('fs');
let page = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/page.tsx', 'utf8');

// 1. Fix С какими проблемами обращаются
page = page.replace(
  '<h2 className="section-title text-center" style={{ marginBottom: \'40px\' }}>С какими проблемами обращаются</h2>',
  '<h2 className="with-accent" style={{ fontSize: \'36px\', fontFamily: \'var(--font-serif)\', color: \'var(--color-primary)\', marginBottom: \'40px\', marginTop: 0, textAlign: \'left\' }}>С какими проблемами обращаются</h2>'
);

// 2. Fix С чего начать
page = page.replace(
  '<h2 className="section-title">С чего начать</h2>',
  '<h2 className="with-accent" style={{ fontSize: \'36px\', fontFamily: \'var(--font-serif)\', color: \'var(--color-primary)\', marginBottom: \'40px\', marginTop: 0, textAlign: \'left\' }}>С чего начать</h2>'
);

// 3. Replace HelpBlock with ProcessBlock style (left aligned)
const helpBlockTarget = `<HelpBlock 
        title="Как помогаем"
        items={[
          { title: 'Анализ документов и определение возможных выплат' },
          { title: 'Запрос недостающих медицинских и служебных документов' },
          { title: 'Обращения в воинскую часть, ЕРЦ, страховую или соцзащиту' },
          { title: 'Подача жалоб в военную прокуратуру' },
          { title: 'Административное судопроизводство по применимости' }
        ]}
      />`;

const helpBlockReplacement = `<section className="section" style={{ background: 'var(--gradient-cream)' }}>
        <div className="container">
          <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '40px', marginTop: 0, textAlign: 'left' }}>
            Как помогаем
          </h2>
          <div className="grid grid-2" style={{ gap: '40px', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {[
                { num: '01', title: 'Анализ документов', desc: 'Анализ документов и определение возможных выплат' },
                { num: '02', title: 'Запрос сведений', desc: 'Запрос недостающих медицинских и служебных документов' },
                { num: '03', title: 'Обращения и рапорты', desc: 'Обращения в воинскую часть, ЕРЦ, страховую или соцзащиту' }
              ].map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: '24px' }}>
                  <div style={{ flexShrink: 0, width: '48px', height: '48px', borderRadius: '50%', background: 'var(--color-white)', border: '1px solid rgba(193, 160, 102, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', fontWeight: '600', fontSize: '18px', boxShadow: '0 4px 12px rgba(23, 50, 77, 0.05)' }}>
                    {step.num}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '20px', color: 'var(--color-deep-blue)', marginBottom: '8px' }}>{step.title}</h3>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {[
                { num: '04', title: 'Жалобы', desc: 'Подача жалоб в военную прокуратуру' },
                { num: '05', title: 'Судебная защита', desc: 'Административное судопроизводство по применимости' }
              ].map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: '24px' }}>
                  <div style={{ flexShrink: 0, width: '48px', height: '48px', borderRadius: '50%', background: 'var(--color-white)', border: '1px solid rgba(193, 160, 102, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', fontWeight: '600', fontSize: '18px', boxShadow: '0 4px 12px rgba(23, 50, 77, 0.05)' }}>
                    {step.num}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '20px', color: 'var(--color-deep-blue)', marginBottom: '8px' }}>{step.title}</h3>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>`;

page = page.replace(helpBlockTarget, helpBlockReplacement);

// 4. Replace ProcessBlock with text cards
const processBlockTarget = `<ProcessBlock 
        title="Маршруты решения"
        subtitle={<>Порядок действий зависит от наличия справок и стадии рассмотрения вашего рапорта.</>}
        steps={[
          { num: '1', title: 'Документов достаточно', desc: 'Составляем заявление на выплату и контролируем начисление.' },
          { num: '2', title: 'Документа не хватает', desc: 'Направляем адвокатские и служебные запросы для истребования справок и выписок.' },
          { num: '3', title: 'Задержка или отказ', desc: 'Готовим мотивированное досудебное обращение или жалобу.' },
          { num: '4', title: 'Нарушение не устранено', desc: 'Формируем доказательства и подаем административный иск в гарнизонный военный суд.' }
        ]}
      />`;

const processBlockReplacement = `<section className="section bg-white">
        <div className="container">
          <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, textAlign: 'left' }}>
            Маршруты решения
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)', marginBottom: '40px' }}>Порядок действий зависит от наличия справок и стадии рассмотрения вашего рапорта.</p>
          <div className="grid grid-2" style={{ gap: '30px' }}>
            {[
              { title: 'Документов достаточно', desc: 'Составляем заявление на выплату и контролируем начисление.' },
              { title: 'Документа не хватает', desc: 'Направляем адвокатские и служебные запросы для истребования справок и выписок.' },
              { title: 'Задержка или отказ', desc: 'Готовим мотивированное досудебное обращение или жалобу.' },
              { title: 'Нарушение не устранено', desc: 'Формируем доказательства и подаем административный иск в гарнизонный военный суд.' }
            ].map((item, i) => (
              <div key={i} className="card hover-lift" style={{ padding: '32px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '0', position: 'relative', boxShadow: '0 4px 12px rgba(23, 50, 77, 0.04)' }}>
                <h3 style={{ fontSize: '20px', color: 'var(--color-deep-blue)', marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>`;

page = page.replace(processBlockTarget, processBlockReplacement);

// 5. Fix Документы
page = page.replace(
  '<h2 className="section-title text-center" style={{ marginBottom: \'40px\' }}>Документы</h2>',
  '<h2 className="with-accent" style={{ fontSize: \'36px\', fontFamily: \'var(--font-serif)\', color: \'var(--color-primary)\', marginBottom: \'40px\', marginTop: 0, textAlign: \'left\' }}>Документы</h2>'
);

fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/page.tsx', page, 'utf8');
console.log('Successfully applied all formatting changes!');
