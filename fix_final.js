const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Fix Process Block
const oldProcess = `<div className="grid grid-4" style={{ gap: '40px' }}>
              {[
                { num: '01', title: 'Первичное обращение', desc: 'Изучаем ваши документы и собираем вводную информацию. Проводим начальную консультацию для определения сути проблемы.' },
                { num: '02', title: 'Анализ', desc: 'Проводим честную оценку рисков и перспектив дела. Никаких пустых обещаний — только объективный правовой анализ ситуации.' },
                { num: '03', title: 'План и условия', desc: 'Разрабатываем стратегию защиты, четко фиксируем этапы работы, необходимые сроки и стоимость услуг в договоре.' },
                { num: '04', title: 'Сопровождение', desc: 'Представляем ваши интересы на всех стадиях: от досудебных переговоров до участия в судебных заседаниях и взаимодействия с госорганами.' },
              ].map((step, i) => (`

const newProcess = `<div className="grid grid-3" style={{ gap: '40px' }}>
              {[
                { num: '01', title: 'Уточняем ситуацию', desc: 'Уточним суть вопроса, срочность, текущую стадию дела и имеющиеся документы. Сообщим, что желательно направить или принести на встречу.' },
                { num: '02', title: 'Определяем формат разбора', desc: 'Юрист изучит исходную информацию. Если для ответа потребуется отдельный анализ материалов, заранее согласуем его объем и стоимость.' },
                { num: '03', title: 'Согласовываем дальнейшую работу', desc: 'Объясним возможные варианты действий, определим подходящего специалиста и зафиксируем в договоре состав работ, стоимость и порядок связи.' },
              ].map((step, i) => (`

page = page.replace(oldProcess, newProcess);

// Add CTA at the end of Process Block
// Find the closing of the grid and the style tag
const oldProcessEnd = `              ))}
            </div>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{__html:\``;

const newProcessEnd = `              ))}
            </div>
            
            {/* CTA inside Process Block */}
            <div style={{ marginTop: '50px', background: 'var(--color-cream)', padding: '40px', borderRadius: '8px', textAlign: 'center' }}>
              <p style={{ fontSize: '18px', color: 'var(--color-deep-blue)', marginBottom: '24px', fontWeight: '500' }}>
                Не уверены, к какому направлению относится ваш вопрос? Кратко опишите ситуацию — мы определим, какой специалист потребуется
              </p>
              <a href="#consultation" className="btn btn-primary" style={{ display: 'inline-flex' }}>Обсудить ситуацию</a>
            </div>

          </div>
        </div>
        <style dangerouslySetInnerHTML={{__html:\``;

page = page.replace(oldProcessEnd, newProcessEnd);


// 2. Fix Cases Block
// We need to replace the result blocks for the 3 cases
// Case 1
page = page.replace(
  /<div style=\{\{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid var\(--color-border\)' \}\}>\s*<h5 style=\{\{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var\(--color-primary\)', marginBottom: '8px', fontWeight: 600 \}\}>Результат<\/h5>\s*<p style=\{\{ fontSize: '15px', margin: 0, fontWeight: 500, color: 'var\(--color-deep-blue\)' \}\}>Границы восстановлены. Выиграно дело в суде первой инстанции.<\/p>\s*<\/div>/g,
  `<div style={{ marginTop: '30px', background: 'var(--color-deep-blue)', padding: '20px', borderRadius: '0', borderLeft: '4px solid var(--color-gold)', boxShadow: '0 10px 20px rgba(16,39,59,0.1)' }}>
    <h5 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'rgba(255,255,255,0.7)', marginBottom: '8px', fontWeight: 600 }}>Ключевой результат</h5>
    <p style={{ fontSize: '16px', margin: 0, fontWeight: 600, color: 'var(--color-white)', lineHeight: 1.4 }}>Границы восстановлены. Выиграно дело в суде первой инстанции.</p>
  </div>`
);

// Case 2
page = page.replace(
  /<div style=\{\{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid var\(--color-border\)' \}\}>\s*<h5 style=\{\{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var\(--color-primary\)', marginBottom: '8px', fontWeight: 600 \}\}>Результат<\/h5>\s*<p style=\{\{ fontSize: '15px', margin: 0, fontWeight: 500, color: 'var\(--color-deep-blue\)' \}\}>Достигнуто выгодное мировое соглашение. Клиент сохранил контроль над бизнесом.<\/p>\s*<\/div>/g,
  `<div style={{ marginTop: '30px', background: 'var(--color-deep-blue)', padding: '20px', borderRadius: '0', borderLeft: '4px solid var(--color-gold)', boxShadow: '0 10px 20px rgba(16,39,59,0.1)' }}>
    <h5 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'rgba(255,255,255,0.7)', marginBottom: '8px', fontWeight: 600 }}>Ключевой результат</h5>
    <p style={{ fontSize: '16px', margin: 0, fontWeight: 600, color: 'var(--color-white)', lineHeight: 1.4 }}>Достигнуто выгодное мировое соглашение. Клиент сохранил контроль над бизнесом.</p>
  </div>`
);

// Case 3 (Need to read the rest of the text for case 3 since it was truncated in my view)
// Let's use a generic regex that captures the inner text
page = page.replace(
  /<div style=\{\{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid var\(--color-border\)' \}\}>\s*<h5 style=\{\{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var\(--color-primary\)', marginBottom: '8px', fontWeight: 600 \}\}>Результат<\/h5>\s*<p style=\{\{ fontSize: '15px', margin: 0, fontWeight: 500, color: 'var\(--color-deep-blue\)' \}\}>([\s\S]*?)<\/p>\s*<\/div>/g,
  `<div style={{ marginTop: '30px', background: 'var(--color-deep-blue)', padding: '20px', borderRadius: '0', borderLeft: '4px solid var(--color-gold)', boxShadow: '0 10px 20px rgba(16,39,59,0.1)' }}>
    <h5 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'rgba(255,255,255,0.7)', marginBottom: '8px', fontWeight: 600 }}>Ключевой результат</h5>
    <p style={{ fontSize: '16px', margin: 0, fontWeight: 600, color: 'var(--color-white)', lineHeight: 1.4 }}>$1</p>
  </div>`
);

fs.writeFileSync('src/app/page.tsx', page);
console.log('Fixed process and cases block!');
