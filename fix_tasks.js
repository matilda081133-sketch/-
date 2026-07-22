const fs = require('fs');
const path = require('path');

const pagePath = path.join('src', 'app', 'page.tsx');
let pageCode = fs.readFileSync(pagePath, 'utf8');

// 1. Update Algorithm Steps
pageCode = pageCode.replace(
  /{ num: '01', title: 'Первичное обращение и анализ', desc: 'Уточним суть вопроса, проведем первичную правовую экспертизу документов и дадим объективную оценку перспективы судебного дела или спора.' }/g,
  `{ num: '01', title: 'Первичное обращение', desc: 'Уточняем суть вопроса, запрашиваем необходимые документы и определяем профильного специалиста.' }`
);
pageCode = pageCode.replace(
  /{ num: '02', title: 'Выработка стратегии защиты', desc: 'Профильный юрист или адвокат изучит исходную информацию, разработает правовую позицию и подготовит варианты досудебного урегулирования.' }/g,
  `{ num: '02', title: 'Консультация и план действий', desc: 'Изучаем исходные материалы, оцениваем возможные варианты, риски, объём и стоимость дальнейшей работы.' }`
);
pageCode = pageCode.replace(
  /{ num: '03', title: 'Договор и ведение дела', desc: 'Заключаем официальный договор на оказание юридических услуг. Берем на себя представительство в суде без вашего участия, взаимодействие с ФССП и госорганами.' }/g,
  `{ num: '03', title: 'Договор и ведение дела', desc: 'Заключаем договор, формируем правовую позицию и выполняем согласованные действия: готовим документы, представляем интересы в суде, взаимодействуем с ФССП и государственными органами.' }`
);

// 2. Form Block Updates
const oldFormStyle = `className="section bg-light" style={{ position: 'relative', overflow: 'hidden', padding: '60px 0', background: 'var(--color-white)', minHeight: '100vh', display: 'flex', alignItems: 'center' }}`;
const newFormStyle = `className="section bg-light" style={{ position: 'relative', overflow: 'hidden', padding: '40px 0', background: 'var(--color-white)', scrollMarginTop: '80px', minHeight: 'calc(100vh - 80px)', display: 'flex', alignItems: 'center' }}`;
pageCode = pageCode.replace(oldFormStyle, newFormStyle);

// 3. CTA Button in Process Block
const oldBtn = `<a href="#consultation" className="btn" style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>Обсудить ситуацию</a>`;
const newBtn = `<a href="#consultation" className="btn" style={{ whiteSpace: 'nowrap', flexShrink: 0, background: 'var(--color-white)', color: 'var(--color-deep-blue)' }}>Обсудить ситуацию</a>`;
pageCode = pageCode.replace(oldBtn, newBtn);

// 4. Remove all 'reveal-on-scroll' and 'delay-*' classes
pageCode = pageCode.replace(/reveal-on-scroll/g, '');
pageCode = pageCode.replace(/delay-100/g, '');
pageCode = pageCode.replace(/delay-200/g, '');
pageCode = pageCode.replace(/delay-300/g, '');
pageCode = pageCode.replace(/  +/g, ' ');
pageCode = pageCode.replace(/className=\" \"/g, '');

fs.writeFileSync(pagePath, pageCode);

// Update layout.tsx
const layoutPath = path.join('src', 'app', 'layout.tsx');
let layoutCode = fs.readFileSync(layoutPath, 'utf8');
layoutCode = layoutCode.replace(/import GlobalScrollObserver from '@\/components\/GlobalScrollObserver';\r?\n/, '');
layoutCode = layoutCode.replace(/import SmoothScroll from '@\/components\/SmoothScroll';\r?\n/, '');
layoutCode = layoutCode.replace(/<SmoothScroll>\r?\n/g, '');
layoutCode = layoutCode.replace(/<\/SmoothScroll>\r?\n/g, '');
layoutCode = layoutCode.replace(/<SmoothScroll>/g, '');
layoutCode = layoutCode.replace(/<\/SmoothScroll>/g, '');
layoutCode = layoutCode.replace(/<GlobalScrollObserver \/>\r?\n/g, '');
layoutCode = layoutCode.replace(/<GlobalScrollObserver \/>/g, '');
fs.writeFileSync(layoutPath, layoutCode);

console.log('Fixed');
