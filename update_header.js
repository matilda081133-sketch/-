const fs = require('fs');

let header = fs.readFileSync('src/components/Header.tsx', 'utf8');

const newB2cHubs = `
  const b2cHubs = [
    { title: "Семейный юрист", href: "/grazhdanam/semejnyj-yurist/" },
    { title: "Наследственный юрист", href: "/grazhdanam/nasledstvennyj-yurist/" },
    { title: "Жилищный юрист", href: "/grazhdanam/zhilishchnyj-yurist/" },
    { title: "Юрист по недвижимости", href: "/grazhdanam/yurist-po-nedvizhimosti/" },
    { title: "Земельный юрист", href: "/grazhdanam/zemelnyj-yurist/" },
    { title: "Банкротство физических лиц", href: "/grazhdanam/bankrotstvo-fizicheskih-lic/" },
    { title: "Кредитный юрист", href: "/grazhdanam/kreditnyj-yurist/" },
    { title: "Взыскание долгов", href: "/grazhdanam/vzyskanie-dolgov/" },
    { title: "Юрист по исполнительному производству", href: "/grazhdanam/yurist-po-ispolnitelnomu-proizvodstvu/" },
    { title: "Автоюрист", href: "/grazhdanam/avtoyurist/" },
    { title: "Трудовой юрист", href: "/grazhdanam/trudovoj-yurist/" },
    { title: "Адвокат по уголовным делам", href: "/grazhdanam/advokat-po-ugolovnym-delam/" },
    { title: "Военный юрист", href: "/grazhdanam/voennyj-yurist/" },
    { title: "Миграционный юрист", href: "/grazhdanam/migracionnyj-yurist/" }
  ];
`;

const newB2bHubs = `
  const b2bHubs = [
    { title: "Арбитражный юрист", href: "/biznesu/arbitrazhnyj-yurist/" },
    { title: "Взыскание задолженности с юридических лиц", href: "/biznesu/vzyskanie-zadolzhennosti-s-yuridicheskih-lic/" },
    { title: "Корпоративный юрист", href: "/biznesu/korporativnyj-yurist/" },
    { title: "Договорное право", href: "/biznesu/dogovornoe-pravo/" },
    { title: "Налоговый юрист для бизнеса", href: "/biznesu/nalogovyj-yurist-dlya-biznesa/" },
    { title: "Банкротство бизнеса", href: "/biznesu/bankrotstvo-biznesa/" },
    { title: "Трудовые споры с работниками", href: "/biznesu/trudovye-spory-s-rabotnikami/" },
    { title: "Юридическое сопровождение бизнеса", href: "/biznesu/yuridicheskoe-soprovozhdenie-biznesa/" },
    { title: "Юрист по недвижимости и строительству для бизнеса", href: "/biznesu/yurist-po-nedvizhimosti-i-stroitelstvu-dlya-biznesa/" },
    { title: "Исполнительное производство для бизнеса", href: "/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/" },
    { title: "Миграционное сопровождение бизнеса", href: "/biznesu/migracionnoe-soprovozhdenie-biznesa/" },
    { title: "Разблокировка расчётного счёта по 115-ФЗ", href: "/biznesu/razblokirovka-raschetnogo-scheta-po-115-fz/" },
    { title: "Уголовно-правовая защита бизнеса", href: "/biznesu/ugolovno-pravovaya-zashchita-biznesa/" }
  ];
`;

header = header.replace(/const b2cHubs = \[[\s\S]*?\];/, newB2cHubs.trim());
header = header.replace(/const b2bHubs = \[[\s\S]*?\];/, newB2bHubs.trim());

const contactRegex = /<div className="contact-dropdown"[^>]*>/;
header = header.replace(contactRegex, (match) => {
    return `
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginLeft: 'auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', fontSize: '13px', lineHeight: 1.4 }}>
              <a href="tel:+79103503111" style={{ fontWeight: 'bold', color: 'var(--color-deep-blue)', textDecoration: 'none', fontSize: '16px' }}>+7 (910) 350-31-11</a>
              <span style={{ color: 'var(--color-text-secondary)', fontSize: '12px' }}>Липецк, ул. Советская, 35, оф. 213</span>
            </div>
            ${match}`;
});

// We need to add the closing </div> for the new wrapper div. 
// The contact-dropdown ends with `</div>` (actually 3 `</div>` in a row based on standard HTML if we look at the source).
// Let's just find `          </div>\n        </nav>` and insert `</div>` before it.
header = header.replace(/          <\/div>\n        <\/nav>/, '          </div>\n          </div>\n        </nav>');


// We also need to add dynamic height for scroll
// "При начале прокрутки уменьшать высоту шапки до 72–80 px." 
// I'll update globals.css to handle `.site-header.scrolled`
fs.writeFileSync('src/components/Header.tsx', header);
console.log("Header updated");
