const fs = require('fs');
let page = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/page.tsx', 'utf8');

// 1. Add missing imports
if (!page.includes('import HelpBlock')) {
    page = page.replace(/import FAQBlock from '@\/components\/FAQBlock';/, "import FAQBlock from '@/components/FAQBlock';\nimport HelpBlock from '@/components/HelpBlock';\nimport ProcessBlock from '@/components/ProcessBlock';");
}

// 2. Replace the middle block
const middleBlockRegex = /<section className="section" style=\{\{\s*background:\s*'var\(--gradient-cream\)'\s*\}\}>[\s\S]*?(?=<section className="section bg-white" id="form">)/;

const newMiddleBlock = `<section className="section" style={{ background: 'var(--gradient-cream)' }}>
        <div className="container">
          <h2 className="section-title text-center" style={{ marginBottom: '40px' }}>С какими проблемами обращаются</h2>
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
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'center' }}>
            <div>
              <h2 className="section-title">С чего начать</h2>
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

      <HelpBlock 
        title="Как помогаем"
        items={[
          { title: 'Анализ документов и определение возможных выплат' },
          { title: 'Запрос недостающих медицинских и служебных документов' },
          { title: 'Обращения в воинскую часть, ЕРЦ, страховую или соцзащиту' },
          { title: 'Подача жалоб в военную прокуратуру' },
          { title: 'Административное судопроизводство по применимости' }
        ]}
      />

      <ProcessBlock 
        title="Маршруты решения"
        subtitle={<>Порядок действий зависит от наличия справок и стадии рассмотрения вашего рапорта.</>}
        steps={[
          { num: '1', title: 'Документов достаточно', desc: 'Составляем заявление на выплату и контролируем начисление.' },
          { num: '2', title: 'Документа не хватает', desc: 'Направляем адвокатские и служебные запросы для истребования справок и выписок.' },
          { num: '3', title: 'Задержка или отказ', desc: 'Готовим мотивированное досудебное обращение или жалобу.' },
          { num: '4', title: 'Нарушение не устранено', desc: 'Формируем доказательства и подаем административный иск в гарнизонный военный суд.' }
        ]}
      />

      <section id="documents" className="section bg-white">
        <div className="container">
          <h2 className="section-title text-center" style={{ marginBottom: '40px' }}>Документы</h2>
          <div className="grid grid-2" style={{ gap: '40px' }}>
            <div className="card service-card" style={{ padding: '40px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '0', borderTop: '3px solid var(--color-gold)' }}>
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
            <div className="card service-card" style={{ padding: '40px', background: 'var(--color-cream)', border: '1px solid transparent', borderRadius: '0', borderTop: '3px solid var(--color-primary)' }}>
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
    console.log('Successfully redesigned middle sections!');
} else {
    console.log('Regex did not match!');
}
