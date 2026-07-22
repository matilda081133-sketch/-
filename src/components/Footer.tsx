import Link from 'next/link';

export default function Footer() {
  const b2cLinks = [
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

  const b2bLinks = [
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

  const companyLinks = [
    { title: "О компании", href: "/o-kompanii" },
    { title: "Специалисты", href: "/specialisty" },
    { title: "Отзывы", href: "/otzyvy" },
    { title: "Стоимость", href: "/stoimost" },
    { title: "Практика", href: "/praktika" },
    { title: "Публикации", href: "/publikacii" },
    { title: "Контакты", href: "/kontakty" }
  ];

  return (
    <footer style={{ backgroundColor: 'var(--color-deep-blue)', color: 'var(--color-white)', padding: '64px 0 24px', fontSize: '13px' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '40px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '40px', marginBottom: '24px' }}>
        
        {/* Column 1: Logo & Info */}
        <div>
          <div style={{ marginBottom: '24px', marginTop: '-20px' }}>
            <Link href="/">
              <img src="/-/images/logo_dark.png" alt="Де-Юре" style={{ height: '110px', width: 'auto', transform: 'scale(1.25)', transformOrigin: 'left center', filter: 'brightness(0) invert(1)' }} />
            </Link>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', lineHeight: 1.5, marginBottom: '20px' }}>
            Юридическая помощь гражданам и бизнесу в Липецке.
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            </a>
          </div>
        </div>

        {/* Column 2: Гражданам (single column) */}
        <div>
          <h4 style={{ color: 'var(--color-white)', margin: '0 0 20px 0', fontSize: '15px', letterSpacing: '0.05em' }}>Гражданам</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {b2cLinks.map((link, i) => (
              <li key={i}><Link href={link.href} style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link-hover">{link.title}</Link></li>
            ))}
          </ul>
        </div>

        {/* Column 3: Бизнесу */}
        <div>
          <h4 style={{ color: 'var(--color-white)', margin: '0 0 20px 0', fontSize: '15px', letterSpacing: '0.05em' }}>Бизнесу</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {b2bLinks.map((link, i) => (
              <li key={i}><Link href={link.href} style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link-hover">{link.title}</Link></li>
            ))}
          </ul>
        </div>

        {/* Column 4: Компания */}
        <div>
          <h4 style={{ color: 'var(--color-white)', margin: '0 0 20px 0', fontSize: '15px', letterSpacing: '0.05em' }}>Компания</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {companyLinks.map((link, i) => (
              <li key={i}><Link href={link.href} style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.2s' }} className="footer-link-hover">{link.title}</Link></li>
            ))}
          </ul>
        </div>

      </div>

      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', color: 'rgba(255,255,255,0.5)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span>© {new Date().getFullYear()} ООО ЮК «ДЕ-ЮРЕ»</span>
          <span>ИНН: 4800009680 | ОГРН: 1234800008464</span>
          <span>Фактический адрес: г. Липецк, ул. Советская, д. 35, оф. 213</span>
          <span>Юридический адрес: 398902, Липецкая обл., г. Липецк, ул. Юношеская, влд. 46Б, пом. 1</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end', textAlign: 'right' }}>
          <Link href="/privacy" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'underline' }}>Политика в отношении обработки персональных данных</Link>
          <Link href="/consent" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'underline' }}>Согласие на обработку персональных данных</Link>
          <Link href="/cookies" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'underline' }}>Политика использования cookie</Link>
          <Link href="/terms" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'underline' }}>Условия использования сайта / правовой дисклеймер</Link>
          <Link href="/sitemap" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'underline' }}>Карта сайта</Link>
        </div>
      </div>
    </footer>
  );
}
