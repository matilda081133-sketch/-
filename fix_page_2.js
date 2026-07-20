const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. CTA Input background
page = page.replace(
  `background: 'var(--color-cream)' }`,
  `background: 'var(--color-white)' }`
);

// 2. Cases section modern styles
page = page.replace(
  `<section className="section" id="practice" style={{ background: 'var(--color-white)' }}>`,
  `<section className="section bg-grey-blue" id="practice">`
);
page = page.replace(
  /padding: '40px', border: '1px solid var\(--color-border\)', borderRadius: '0', display: 'flex', flexDirection: 'column', background: 'var\(--color-white\)', transition: 'var\(--transition\)', position: 'relative'/g,
  `padding: '40px', border: 'none', borderRadius: '16px', borderTop: '4px solid var(--color-primary)', display: 'flex', flexDirection: 'column', background: 'var(--color-white)', transition: 'var(--transition)', position: 'relative', boxShadow: '0 15px 40px rgba(23, 50, 77, 0.08)'`
);

// 3. Stages block replacement
const startIdx = page.indexOf('{/* 4. КАК МЫ РАБОТАЕМ (СВЕТЛЫЙ СТАТИЧНЫЙ БЛОК) */}');
const endIdx = page.indexOf('</section>', startIdx) + '</section>'.length;

const newStages = `      {/* 4. КАК МЫ РАБОТАЕМ (СВЕТЛЫЙ СТАТИЧНЫЙ БЛОК) */}
      <section className="section bg-light" style={{ position: 'relative', overflow: 'hidden', padding: '120px 0', background: 'var(--color-white)' }}>
        {/* Organic graphic background */}
        <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', background: 'radial-gradient(circle at 0% 0%, rgba(193, 160, 102, 0.04) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(23, 50, 77, 0.03) 0%, transparent 50%)', pointerEvents: 'none' }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', color: 'var(--color-deep-blue)', marginBottom: '24px' }}>
              Как мы работаем
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', maxWidth: '800px', margin: '0 auto' }}>
              Каждое дело уникально, но наш подход всегда остается системным. Прозрачный процесс работы от первой консультации до итогового решения.
            </p>
          </div>

          <div style={{ position: 'relative' }}>
            {/* Horizontal Line for Desktop */}
            <div className="hidden md:block" style={{ position: 'absolute', top: '30px', left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(193, 160, 102, 0.4), transparent)', zIndex: 0 }}></div>
            
            <div className="grid grid-4" style={{ gap: '40px' }}>
              {[
                { num: '01', title: 'Первичное обращение', desc: 'Изучаем ваши документы и собираем вводную информацию. Проводим начальную консультацию для определения сути проблемы.' },
                { num: '02', title: 'Анализ', desc: 'Проводим честную оценку рисков и перспектив дела. Никаких пустых обещаний — только объективный правовой анализ ситуации.' },
                { num: '03', title: 'План и условия', desc: 'Разрабатываем стратегию защиты, четко фиксируем этапы работы, необходимые сроки и стоимость услуг в договоре.' },
                { num: '04', title: 'Сопровождение', desc: 'Представляем ваши интересы на всех стадиях: от досудебных переговоров до участия в судебных заседаниях и взаимодействия с госорганами.' },
              ].map((step, i) => (
                <div key={i} style={{ 
                  position: 'relative',
                  zIndex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'transparent',
                  padding: '10px'
                }} className="stage-item">
                  
                  {/* Organic Number / Dot */}
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
                    <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--color-white)', border: '1px solid rgba(193, 160, 102, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', fontWeight: '300', fontSize: '24px', fontFamily: 'var(--font-serif)', boxShadow: '0 10px 20px rgba(23, 50, 77, 0.05)', position: 'relative' }}>
                      {step.num}
                      <div style={{ position: 'absolute', inset: '4px', borderRadius: '50%', border: '1px dashed rgba(193, 160, 102, 0.3)' }}></div>
                    </div>
                  </div>

                  <h4 style={{ fontSize: '22px', color: 'var(--color-deep-blue)', marginBottom: '16px', fontFamily: 'var(--font-serif)', lineHeight: 1.3, textAlign: 'center' }}>
                    {step.title}
                  </h4>
                  <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0, textAlign: 'center' }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{__html:\`
          .stage-item {
            transition: transform 0.4s ease;
          }
          .stage-item:hover {
            transform: translateY(-8px);
          }
          .stage-item:hover > div > div {
            background: var(--color-primary) !important;
            color: var(--color-white) !important;
            box-shadow: 0 15px 30px rgba(193, 160, 102, 0.3) !important;
          }
          .stage-item > div > div {
            transition: all 0.4s ease;
          }
        \`}} />
      </section>`;

page = page.slice(0, startIdx) + newStages + page.slice(endIdx);

fs.writeFileSync('src/app/page.tsx', page, 'utf8');
console.log('Fixed page.tsx');
