const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Imports
page = page.replace(
  "import ServicesBlock from '@/components/ServicesBlock';",
  "import ServicesTabs from '@/components/ServicesTabs';"
);

// 2. Hero Text
page = page.replace(
  /Юридическая помощь\\nгражданам и бизнесу\\nв Липецке/g,
  "Юридическая помощь\\nгражданам и бизнесу\\nв Липецке" // already correct
);

page = page.replace(
  /Помогаем по земельным и имущественным спорам.*?подходящего специалиста\./,
  "Помогаем по земельным и имущественным спорам, уголовным и военным делам, исполнительному производству и правовым вопросам бизнеса. После первичного разбора определяем возможные варианты действий, состав работы и подходящего специалиста."
);

// 3. Hero USPs
const oldUspsRegex = /\{\[\s*\{\s*value:\s*'15\+',\s*label:\s*'Лет практики'\s*\},[\s\S]*?\]\.map/m;
const newUsps = `{[
                { value: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>, label: 'Юристы и адвокаты по профилю дела' },
                { value: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"></path><path d="M9 8h1"></path><path d="M9 12h1"></path><path d="M9 16h1"></path><path d="M14 8h1"></path><path d="M14 12h1"></path><path d="M14 16h1"></path><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"></path></svg>, label: 'Практический опыт в органах' },
                { value: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><polyline points="9 15 11 17 15 13"></polyline></svg>, label: 'Условия работы строго в договоре' }
              ].map`;
page = page.replace(oldUspsRegex, newUsps);

// Make the USP styling better suited for icons
page = page.replace(/<div style=\{\{ color: 'var\(--color-primary\)', fontSize: '36px', fontWeight: 800, fontFamily: 'var\(--font-serif\)', lineHeight: 1 \}\}>\{bullet\.value\}<\/div>/g, 
  "<div style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{bullet.value}</div>");

// 4. Services component replacement
page = page.replace(/<ServicesBlock \/>/, '<ServicesTabs />');


// 5. Advantages Block
const advRegex = /\{ title: 'Узкая специализация'[\s\S]*?(?=\}\]\.map)/m;
const newAdv = `{ title: 'Подбираем специалиста под категорию дела', desc: 'Земельный спор передаём юристу по земельному праву, уголовное дело — адвокату. Если задача затрагивает несколько отраслей, состав команды определяем после первичного разбора.' },
              { title: 'Подключаем адвоката, когда этого требует дело', desc: 'В уголовных делах и других ситуациях, где необходим адвокатский статус, к работе подключается специалист с действующим статусом. Дополнительных экспертов привлекаем после согласования с клиентом.' },
              { title: 'Варианты и риски до начала основных работ', desc: 'На первой встрече уточняем обстоятельства и изучаем доступные документы. Если требуется отдельный углублённый анализ, заранее согласовываем его объём и стоимость.' },
              { title: 'Берём на себя согласованные этапы', desc: 'Подготовка документов, переговоры, обращения в государственные органы, суд и исполнительное производство включаются в работу в зависимости от задачи и фиксируются в договоре.' },
              { title: 'Офис в центре Липецка', desc: 'Принимаем по адресу: Липецк, ул. Советская, 35, офис 213. Возможность дистанционной работы определяется характером дела.' },
              { title: 'Состав работ и порядок оплаты — в договоре', desc: 'До начала основных работ фиксируем, какие действия выполняет специалист, как рассчитывается стоимость и какие расходы оплачиваются отдельно.' }
            `;
page = page.replace(advRegex, newAdv);

// 6. Process Block
page = page.replace('Как мы работаем', 'Что происходит после обращения');
const processRegex = /\{ title: 'Первичная консультация'[\s\S]*?(?=\}\]\.map)/m;
const newProcess = `{ title: 'Уточняем ситуацию', desc: 'Уточним суть вопроса, срочность, текущую стадию дела и имеющиеся документы. Сообщим, что желательно направить или принести на встречу.' },
              { title: 'Определяем формат разбора', desc: 'Юрист изучит исходную информацию. Если для ответа потребуется отдельный анализ материалов, заранее согласуем его объём и стоимость.' },
              { title: 'Согласовываем дальнейшую работу', desc: 'Объясним возможные варианты действий, определим подходящего специалиста и зафиксируем в договоре состав работ, стоимость и порядок связи.' }
            `;
page = page.replace(processRegex, newProcess);

// Insert CTA inside the process block (after the grid ends)
// Process block is <section ...> ... </section>. We need to find the end of the container inside the process block.
const processEndTarget = `</div>\n      </section>\n\n      {/* 6. TEAM SECTION */}`;
const processCTA = `</div>\n        \n        <div style={{ marginTop: '40px', padding: '30px', background: 'var(--color-white)', border: '1px solid var(--color-border)', borderRadius: '4px', textAlign: 'center' }}>\n          <p style={{ margin: '0 0 20px 0', fontSize: '18px', color: 'var(--color-text-secondary)', fontWeight: 500 }}>Не уверены, к какому направлению относится ваш вопрос? Кратко опишите ситуацию — мы определим, какой специалист потребуется.</p>\n          <a href="#consultation" className="btn">Обсудить ситуацию</a>\n        </div>\n      </section>\n\n      {/* 6. TEAM SECTION */}`;
if (page.includes(processEndTarget)) {
  page = page.replace(processEndTarget, processCTA);
}

// 7. Form Checkbox
const oldCheckbox = `<label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', marginTop: '4px' }}>
                <input type="checkbox" defaultChecked style={{ marginTop: '4px', accentColor: 'var(--color-primary)' }} />
                <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
                  Я согласен(на) с <Link href="/privacy" className="link-animated" style={{ fontSize: '13px', color: 'var(--color-primary)' }}>политикой конфиденциальности</Link>
                </span>
              </label>`;
              
const newCheckbox = `<label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', marginTop: '4px' }}>
                <input type="checkbox" style={{ marginTop: '4px', accentColor: 'var(--color-primary)' }} required />
                <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
                  Я даю согласие ООО ЮК «ДЕ-ЮРЕ» на обработку моих персональных данных на условиях <Link href="/consent" className="link-animated" style={{ color: 'var(--color-primary)' }}>Согласия на обработку персональных данных</Link>. <br/><Link href="/privacy" className="link-animated" style={{ color: 'var(--color-primary)', marginTop: '4px', display: 'inline-block' }}>Политика в отношении обработки персональных данных</Link>
                </span>
              </label>`;

page = page.replace(oldCheckbox, newCheckbox);

// 8. Footer component (Wait, we can just edit the Footer.tsx or write a new one if it exists. Actually, the current page.tsx has footer inline! Let's check.)
// In page.tsx: "<footer>...</footer>". The TZ says: "Сохранить тёмно-синий фон... Полное меню хабов".
// I'll create a separate update_footer.js for the footer logic.

fs.writeFileSync('src/app/page.tsx', page);
console.log("page.tsx updated");
