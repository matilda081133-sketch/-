const fs = require('fs');
let content = fs.readFileSync('src/app/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/page.tsx', 'utf8');

// 1. Imports
content = content.replace(
  "import MilitaryHero from '@/components/MilitaryHero';",
  "import PricingBlock from '@/components/PricingBlock';\nimport MilitaryHero from '@/components/MilitaryHero';"
);

// 2. С чего начать (Margin Top)
content = content.replace(
  "<h2 className=\"with-accent\" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '40px', marginTop: 0, textAlign: 'left' }}>С чего начать</h2>",
  "<h2 className=\"with-accent\" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '40px', marginTop: '40px', textAlign: 'left' }}>С чего начать</h2>"
);

// 3. Как помогаем (ProcessBlock)
const howWeHelpStart = content.indexOf('<section className="section bg-light"');
if (howWeHelpStart !== -1) {
  const howWeHelpEnd = content.indexOf('</section>', howWeHelpStart) + 10;
  const newHowWeHelp = `<ProcessBlock 
  title="Как помогаем"
  alignTitle="left"
  steps={[
    { num: '1', title: 'Анализ документов', desc: 'Анализ документов и определение возможных выплат' },
    { num: '2', title: 'Запрос сведений', desc: 'Запрос недостающих медицинских и служебных документов' },
    { num: '3', title: 'Обращения и рапорты', desc: 'Обращения в воинскую часть, ЕРЦ, страховую или соцзащиту' },
    { num: '4', title: 'Жалобы', desc: 'Подача жалоб в военную прокуратуру' },
    { num: '5', title: 'Судебная защита', desc: 'Административное судопроизводство по применимости' }
  ]}
/>`;
  content = content.substring(0, howWeHelpStart) + newHowWeHelp + content.substring(howWeHelpEnd);
} else {
  console.log("Failed to find 'Как помогаем' section");
}

// 4. Маршруты решения (2-column layout)
const solutionsStart = content.indexOf('<section className="section bg-white"'); // This should find the Маршруты решения block
if (solutionsStart !== -1) {
  const solutionsEnd = content.indexOf('</section>', solutionsStart) + 10;
  const newSolutions = `<section className="section bg-white">
  <div className="container">
    <div className="grid grid-2" style={{ gap: '40px' }}>
      {/* Левая колонка - Маршруты решения */}
      <div style={{ background: 'var(--color-deep-blue)', padding: '40px', borderRadius: '0', color: 'var(--color-white)', display: 'flex', flexDirection: 'column', height: '100%', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, opacity: 0.1, transform: 'translate(10%, -10%)' }}>
          <svg width="100" height="100" viewBox="0 0 24 24" fill="var(--color-white)">
            <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3 6-3 6 3-6 3zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
        </div>
        <h2 className="with-accent" style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', marginBottom: '24px', marginTop: 0, textAlign: 'left', position: 'relative', zIndex: 1 }}>Маршруты решения</h2>
        <p style={{ fontSize: '16px', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', marginBottom: '24px', position: 'relative', zIndex: 1 }}>
          Порядок действий зависит от наличия справок и стадии рассмотрения вашего рапорта.
        </p>
        <div style={{ background: 'rgba(255,255,255,0.1)', padding: '16px', borderLeft: '4px solid var(--color-gold)', fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, marginTop: 'auto', position: 'relative', zIndex: 1 }}>
          Мы рекомендуем не затягивать с обращением: чем раньше будут направлены запросы и жалобы, тем выше шансы на своевременную выплату.
        </div>
      </div>

      {/* Правая колонка - Карточки вариантов */}
      <div style={{ background: 'var(--color-white)', border: '1px solid var(--color-border)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', padding: '40px', height: '100%' }}>
        <h3 style={{ fontSize: '22px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '24px' }}>Возможные ситуации</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          <div style={{ padding: '20px', background: 'var(--color-cream)', borderLeft: '4px solid var(--color-primary)', borderRadius: '0' }}>
            <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Документов достаточно</div>
            <div style={{ fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.6 }}>Составляем заявление на выплату и контролируем начисление.</div>
          </div>
          
          <div style={{ padding: '20px', background: 'var(--color-cream)', borderLeft: '4px solid var(--color-primary)', borderRadius: '0' }}>
            <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Документа не хватает</div>
            <div style={{ fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.6 }}>Направляем адвокатские и служебные запросы для истребования справок и выписок.</div>
          </div>

          <div style={{ padding: '20px', background: 'var(--color-cream)', borderLeft: '4px solid var(--color-primary)', borderRadius: '0' }}>
            <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Задержка или отказ</div>
            <div style={{ fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.6 }}>Готовим мотивированное досудебное обращение или жалобу.</div>
          </div>

          <div style={{ padding: '20px', background: '#FFF8F8', borderLeft: '4px solid #D9534F', borderRadius: '0' }}>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#D9534F', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Нарушение не устранено</div>
            <div style={{ fontSize: '15px', color: 'var(--color-deep-blue)', lineHeight: 1.6 }}>Формируем доказательства и подаем административный иск в гарнизонный военный суд.</div>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>`;
  content = content.substring(0, solutionsStart) + newSolutions + content.substring(solutionsEnd);
} else {
  console.log("Failed to find 'Маршруты решения' section");
}

// 5. Не нашли свою ситуацию? (Horizontal Card)
content = content.replace(
  '<div style={{ marginTop: \'20px\' }}>\r\n            <div \r\n              className="card service-card" \r\n              style={{ \r\n                padding: \'40px\', \r\n                background: \'var(--color-deep-blue)\', \r\n                border: \'none\',\r\n                borderRadius: \'0\',\r\n                display: \'flex\', \r\n                flexDirection: \'column\',\r\n                alignItems: \'center\',\r\n                textAlign: \'center\',\r\n                gap: \'20px\',\r\n                transition: \'all 0.3s\',\r\n                position: \'relative\',\r\n                borderTop: \'3px solid var(--color-gold)\'\r\n              }}\r\n            >\r\n              <h3 style={{ margin: \'0\', fontSize: \'24px\', color: \'var(--color-white)\', lineHeight: 1.3 }}>\r\n                Не нашли свою ситуацию?\r\n              </h3>\r\n              <p style={{ margin: \'0\', fontSize: \'16px\', color: \'rgba(255,255,255,0.8)\', lineHeight: 1.5 }}>\r\n                Кратко опишите обстоятельства — мы изучим вопрос <br/>и подскажем, какой специалист сможет помочь.\r\n              </p>\r\n              <a href="#form" className="btn" style={{ background: \'var(--color-white)\', color: \'var(--color-deep-blue)\', display: \'inline-block\', width: \'auto\' }}>\r\n                Описать ситуацию\r\n              </a>\r\n            </div>\r\n          </div>',
  `<div style={{ marginTop: '20px' }}>
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
          </div>`
);

// 6. Box shadow on Документы
content = content.replace(
  "borderTop: '3px solid var(--color-gold)' }}",
  "borderTop: '3px solid var(--color-gold)', boxShadow: '0 4px 12px rgba(23, 50, 77, 0.04)' }}"
);
content = content.replace(
  "borderTop: '3px solid var(--color-primary)' }}",
  "borderTop: '3px solid var(--color-primary)', boxShadow: '0 4px 12px rgba(23, 50, 77, 0.04)' }}"
);

// 7. Insert PricingBlock before FAQBlock
const faqIndex = content.indexOf('<FAQBlock');
if (faqIndex !== -1) {
  const blockStr = `
      <PricingBlock 
        title="Стоимость помощи адвоката"
        subtitle="Стоимость зависит от полноты имеющихся документов, необходимости направления адвокатских запросов, количества инстанций и формата участия. До начала работы мы согласуем с вами план действий и зафиксируем стоимость в соглашении."
        tiers={[
          {
            title: 'Первичная оценка',
            subtitle: 'Анализ документов и ситуации',
            popular: false,
            price: 'от 5 000 ₽',
            features: [
              { name: 'Изучение медицинских справок', value: '✓' },
              { name: 'Проверка оснований для выплат', value: '✓' },
              { name: 'Определение порядка обжалования', value: '✓' },
              { name: 'Устная консультация', value: '✓' }
            ]
          },
          {
            title: 'Досудебный порядок',
            subtitle: 'Истребование документов и жалобы',
            popular: true,
            price: 'от 30 000 ₽',
            features: [
              { name: 'Подготовка адвокатских запросов', value: '✓' },
              { name: 'Жалобы в военную прокуратуру', value: '✓' },
              { name: 'Составление рапортов командованию', value: '✓' },
              { name: 'Контроль ответов', value: '✓' }
            ]
          },
          {
            title: 'Защита в суде',
            subtitle: 'Административное судопроизводство',
            popular: false,
            price: 'от 70 000 ₽',
            features: [
              { name: 'Подготовка административного иска', value: '✓' },
              { name: 'Сбор доказательной базы', value: '✓' },
              { name: 'Представительство в военном суде', value: '✓' },
              { name: 'Получение судебного акта', value: '✓' }
            ]
          }
        ]}
        ctaTitle="Не знаете, какой формат помощи потребуется?"
        ctaSubtitle="Опишите ситуацию, какие справки у вас уже есть и в чем возникла проблема. Юрист оценит перспективы и предложит варианты решения."
        ctaButtonText="Описать ситуацию"
        ctaButtonLink="#form"
      />

      `;
  content = content.substring(0, faqIndex) + blockStr + content.substring(faqIndex);
} else {
  console.log("Failed to find FAQBlock");
}

fs.writeFileSync('src/app/grazhdanam/voennyj-yurist/vyplaty-za-ranenie-voennosluzhashchego/page.tsx', content);
console.log('Recovery applied successfully.');
