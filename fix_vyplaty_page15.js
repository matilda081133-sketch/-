const fs = require('fs');
let page = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/page.tsx', 'utf8');

// First, remove the imports of HelpBlock and ProcessBlock since we won't use them anymore
page = page.replace("import HelpBlock from '@/components/HelpBlock';\n", "");
page = page.replace("import ProcessBlock from '@/components/ProcessBlock';\n", "");

const middleBlockRegex = /<section className="section" style=\{\{\s*background:\s*'var\(--gradient-cream\)'\s*\}\}>[\s\S]*?(?=<section className="section bg-white" id="form">)/;

const newMiddleBlock = `<section className="section" style={{ background: 'var(--gradient-cream)' }}>
        <div className="container">
          <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '40px', marginTop: 0, textAlign: 'left' }}>
            С какими проблемами обращаются
          </h2>
          <div className="grid grid-3" style={{ gap: '20px' }}>
            {[
              'Не выдают справки (о ранении или тяжести)', 
              'Выплата задержана без объяснения причин', 
              'Получен незаконный отказ', 
              'Неверно определена тяжесть или характер травмы', 
              'Выплачена не вся положенная сумма', 
              'Не учтена отдельная мера поддержки'
            ].map((item, i) => (
              <a key={i} href="#form" data-analytics="military_problem_click" style={{ textDecoration: 'none', display: 'block' }}>
                <div 
                  className="card service-card" 
                  style={{ 
                    height: '100%', 
                    minHeight: '140px',
                    padding: '30px', 
                    background: 'var(--color-white)', 
                    border: '1px solid var(--color-border)',
                    borderRadius: '0',
                    display: 'flex', 
                    flexDirection: 'column',
                    transition: 'all 0.3s',
                    position: 'relative',
                    borderTop: '3px solid var(--color-primary)'
                  }}
                >
                  <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', color: 'var(--color-deep-blue)', lineHeight: 1.3, flexGrow: 1 }}>
                    {item}
                  </h3>
                  <div className="card-arrow" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontSize: '14px', fontWeight: 600, transition: 'transform 0.3s' }}>
                    Обсудить проблему
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.3s' }}>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div style={{ marginTop: '20px' }}>
            <div 
              className="card service-card" 
              style={{ 
                padding: '40px', 
                background: 'var(--color-deep-blue)', 
                border: 'none',
                borderRadius: '0',
                display: 'flex', 
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '30px',
                transition: 'all 0.3s',
                position: 'relative',
                borderTop: '3px solid var(--color-gold)'
              }}
            >
              <style dangerouslySetInnerHTML={{__html: \`
                .white-btn-custom {
                  background-color: var(--color-white);
                  color: var(--color-deep-blue);
                  border: 1px solid var(--color-white);
                }
                .white-btn-custom:hover {
                  background-color: var(--color-primary) !important;
                  color: var(--color-white) !important;
                  border-color: var(--color-primary) !important;
                }
                
                @media (max-width: 768px) {
                  .horizontal-card-inner {
                    flex-direction: column !important;
                    align-items: flex-start !important;
                  }
                  .horizontal-card-btn {
                    margin-top: 20px;
                  }
                }
              \`}} />
              <div className="horizontal-card-inner" style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ flex: '1', textAlign: 'left' }}>
                  <h3 style={{ margin: '0 0 12px 0', fontSize: '24px', color: 'var(--color-white)', lineHeight: 1.3 }}>
                    Не нашли свою ситуацию?
                  </h3>
                  <p style={{ margin: '0', fontSize: '16px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>
                    Кратко опишите обстоятельства — мы изучим вопрос <br/>и подскажем, какой специалист сможет помочь.
                  </p>
                </div>
                <div className="horizontal-card-btn" style={{ flexShrink: 0, textAlign: 'right' }}>
                  <a href="#form" className="btn white-btn-custom" style={{ display: 'inline-block', width: 'auto', fontSize: '16px', padding: '14px 28px' }}>
                    Описать ситуацию
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'center' }}>
            <div>
              <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '40px', marginTop: 0, textAlign: 'left' }}>
                С чего начать
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', lineHeight: 1.6, marginBottom: '24px' }}>
                Базовые документы, с которых мы начинаем работу — это <strong style={{ color: 'var(--color-deep-blue)' }}>справка о ранении</strong> и <strong style={{ color: 'var(--color-deep-blue)' }}>справка о тяжести ранения</strong>. 
              </p>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '0' }}>
                Далее мы проверяем медицинские и служебные документы, основания конкретной выплаты (президентские, федеральные, страховые, региональные, в связи с инвалидностью или увольнением) и имеющуюся переписку по отказу или задержке.
              </p>
            </div>
            <div style={{ background: 'var(--color-cream)', padding: '40px', borderLeft: '4px solid var(--color-gold)' }}>
              <h3 style={{ fontSize: '20px', color: 'var(--color-deep-blue)', marginBottom: '16px', fontFamily: 'var(--font-serif)' }}>Консультация с юристом</h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: 1.6, marginBottom: '24px' }}>
                Оценим перспективы вашего дела и составим план действий.
              </p>
              <a href="#form" className="btn btn-primary" style={{ width: '100%', textAlign: 'center', display: 'block', padding: '16px' }}>Получить оценку дела</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gradient-cream)' }}>
        <div className="container">
          <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '40px', marginTop: 0, textAlign: 'left' }}>
            Как помогаем
          </h2>
          <div className="grid grid-2" style={{ gap: '20px' }}>
            {[
              'Анализ документов и определение возможных выплат',
              'Запрос недостающих медицинских и служебных документов',
              'Обращения в воинскую часть, ЕРЦ, страховую или соцзащиту',
              'Подача жалоб в военную прокуратуру',
              'Административное судопроизводство по применимости'
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', background: 'var(--color-white)', padding: '24px', border: '1px solid var(--color-border)', borderRadius: '0' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span style={{ fontSize: '16px', color: 'var(--color-deep-blue)', fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '16px', marginTop: 0, textAlign: 'left' }}>
            Маршруты решения
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)', marginBottom: '40px' }}>Порядок действий зависит от наличия справок и стадии рассмотрения вашего рапорта.</p>
          <div className="grid grid-2" style={{ gap: '30px' }}>
            {[
              { num: '1', title: 'Документов достаточно', desc: 'Составляем заявление на выплату и контролируем начисление.' },
              { num: '2', title: 'Документа не хватает', desc: 'Направляем адвокатские и служебные запросы для истребования справок и выписок.' },
              { num: '3', title: 'Задержка или отказ', desc: 'Готовим мотивированное досудебное обращение или жалобу.' },
              { num: '4', title: 'Нарушение не устранено', desc: 'Формируем доказательства и подаем административный иск в гарнизонный военный суд.' }
            ].map((item, i) => (
              <div key={i} className="card" style={{ padding: '32px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '0', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '24px', right: '24px', fontSize: '48px', fontWeight: 700, color: 'rgba(193, 160, 102, 0.15)', lineHeight: 1 }}>{item.num}</div>
                <h3 style={{ fontSize: '20px', color: 'var(--color-deep-blue)', marginBottom: '12px', zIndex: 1, position: 'relative' }}>{item.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: 1.6, margin: 0, zIndex: 1, position: 'relative' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="documents" className="section" style={{ background: 'var(--gradient-cream)' }}>
        <div className="container">
          <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '40px', marginTop: 0, textAlign: 'left' }}>
            Документы
          </h2>
          <div className="grid grid-2" style={{ gap: '40px' }}>
            <div className="card service-card hover-lift" style={{ padding: '40px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '0', borderTop: '3px solid var(--color-gold)', boxShadow: '0 10px 30px rgba(23, 50, 77, 0.08)' }}>
              <h3 style={{ fontSize: '20px', color: 'var(--color-deep-blue)', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                Есть у вас
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  'Справка о ранении (если выдана)',
                  'Справка о тяжести ранения (ВВК)',
                  'Имеющиеся медицинские выписки',
                  'Решения или письменные отказы (если есть)',
                  'Выписки о начислениях'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ color: 'var(--color-gold)', marginTop: '2px' }}>•</div>
                    <span style={{ color: 'var(--color-text-main)', fontSize: '15px' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card service-card hover-lift" style={{ padding: '40px', background: 'var(--color-cream)', border: '1px solid transparent', borderRadius: '0', borderTop: '3px solid var(--color-primary)', boxShadow: '0 10px 30px rgba(23, 50, 77, 0.08)' }}>
              <h3 style={{ fontSize: '20px', color: 'var(--color-deep-blue)', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                Можем запросить
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  'Медицинские документы из госпиталя',
                  'Документы о статусе и прохождении службы',
                  'Материалы административного расследования',
                  'Официальные ответы на ранее поданные рапорты'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ color: 'var(--color-primary)', marginTop: '2px' }}>•</div>
                    <span style={{ color: 'var(--color-text-main)', fontSize: '15px' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      `;

if (middleBlockRegex.test(page)) {
    page = page.replace(middleBlockRegex, newMiddleBlock);
    fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/page.tsx', page, 'utf8');
    console.log('Successfully fully redesigned middle sections with left alignment, gold separators, and text cards!');
} else {
    console.log('Regex did not match!');
}
