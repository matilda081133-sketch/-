const fs = require('fs');

const file = 'src/app/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetSection = `      <section className="section" style={{ background: 'var(--color-cream)' }}>
        <div className="container grid grid-2" style={{ gap: '60px' }}>
          <div>
            <h2 className="section-title">С чего начать</h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', lineHeight: 1.6, marginBottom: '24px' }}>
              Базовые документы, с которых мы начинаем работу — это <strong style={{ color: 'var(--color-deep-blue)' }}>справка о ранении</strong> и <strong style={{ color: 'var(--color-deep-blue)' }}>справка о тяжести ранения</strong>. 
            </p>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '24px' }}>
              Далее мы проверяем медицинские и служебные документы, основания конкретной выплаты (президентские, федеральные, страховые, региональные, в связи с инвалидностью или увольнением) и имеющуюся переписку по отказу или задержке.
            </p>
            <h2 className="section-title" style={{ marginTop: '48px', fontSize: '28px' }}>Как помогаем</h2>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                'Анализ документов и определение возможных выплат',
                'Запрос недостающих медицинских и служебных документов',
                'Обращения в воинскую часть, ЕРЦ, страховую или соцзащиту',
                'Подача жалоб в военную прокуратуру',
                'Административное судопроизводство по применимости'
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ color: 'var(--color-gold)', marginTop: '2px' }}>✓</div>
                  <span style={{ color: 'var(--color-text-main)', fontSize: '16px' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div style={{ background: 'var(--color-deep-blue)', padding: '40px', color: 'var(--color-white)', marginTop: '54px' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '32px', fontFamily: 'var(--font-serif)', color: 'var(--color-white)' }}>Маршруты решения</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <h4 style={{ color: 'var(--color-white)', marginBottom: '8px', fontSize: '16px' }}>1. Документов достаточно</h4>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', lineHeight: 1.5 }}>Составляем заявление на выплату и контролируем начисление.</p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--color-white)', marginBottom: '8px', fontSize: '16px' }}>2. Документа не хватает</h4>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', lineHeight: 1.5 }}>Направляем адвокатские и служебные запросы для истребования справок и выписок.</p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--color-white)', marginBottom: '8px', fontSize: '16px' }}>3. Задержка или отказ</h4>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', lineHeight: 1.5 }}>Готовим мотивированное досудебное обращение или жалобу.</p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--color-white)', marginBottom: '8px', fontSize: '16px' }}>4. Нарушение не устранено</h4>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', lineHeight: 1.5 }}>Формируем доказательства и подаем административный иск в гарнизонный военный суд.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>`;

const newSection = `      <section className="section" style={{ background: 'var(--color-cream)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="section-title text-center">С чего начать</h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', lineHeight: 1.6, marginBottom: '24px', textAlign: 'center' }}>
            Базовые документы, с которых мы начинаем работу — это <strong style={{ color: 'var(--color-deep-blue)' }}>справка о ранении</strong> и <strong style={{ color: 'var(--color-deep-blue)' }}>справка о тяжести ранения</strong>. 
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '40px', textAlign: 'center' }}>
            Далее мы проверяем медицинские и служебные документы, основания конкретной выплаты (президентские, федеральные, страховые, региональные, в связи с инвалидностью или увольнением) и имеющуюся переписку по отказу или задержке.
          </p>
          
          <h2 className="section-title text-center" style={{ marginTop: '48px', fontSize: '28px' }}>Как помогаем</h2>
          <ul style={{ listStyle: 'none', padding: 0, marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px', margin: '24px auto 0 auto' }}>
            {[
              'Анализ документов и определение возможных выплат',
              'Запрос недостающих медицинских и служебных документов',
              'Обращения в воинскую часть, ЕРЦ, страховую или соцзащиту',
              'Подача жалоб в военную прокуратуру',
              'Административное судопроизводство по применимости'
            ].map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ color: 'var(--color-gold)', marginTop: '2px' }}>✓</div>
                <span style={{ color: 'var(--color-text-main)', fontSize: '16px' }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ProcessBlock 
        title="Маршруты решения"
        subtitle="Мы определяем оптимальный порядок действий в зависимости от вашей текущей ситуации."
        steps={[
          { num: "01", title: "Документов достаточно", desc: "Составляем заявление на выплату и контролируем начисление." },
          { num: "02", title: "Документа не хватает", desc: "Направляем адвокатские и служебные запросы для истребования справок и выписок." },
          { num: "03", title: "Задержка или отказ", desc: "Готовим мотивированное досудебное обращение или жалобу." },
          { num: "04", title: "Нарушение не устранено", desc: "Формируем доказательства и подаем административный иск в гарнизонный военный суд." }
        ]}
      />`;

if (content.includes('Маршруты решения')) {
  // We can just use split and join if exact match is hard
  const lines = content.split('\n');
  const startIdx = lines.findIndex(l => l.includes('С чего начать'));
  const endIdx = lines.findIndex((l, i) => i > startIdx && l.includes('</section>'));
  if (startIdx !== -1 && endIdx !== -1) {
    // Actually the <section> starts 2 lines before "С чего начать"
    lines.splice(startIdx - 2, endIdx - (startIdx - 2) + 1, newSection);
    fs.writeFileSync(file, lines.join('\n'));
    console.log('Replaced successfully');
  }
}
