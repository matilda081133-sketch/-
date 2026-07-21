'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="images/logo_dark.png" alt="Де-Юре" style={{ height: '110px', width: 'auto', transform: 'scale(1.25)', transformOrigin: 'left center' }} />
        </Link>
        <nav style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'nowrap', whiteSpace: 'nowrap' }}>
          <div style={{ display: 'flex', gap: '20px', fontSize: '14px' }}>
            
            {/* О компании */}
            <div 
              className="nav-item-dropdown" 
              onMouseEnter={() => setOpenDropdown('about')} 
              onMouseLeave={() => setOpenDropdown(null)}
              onFocus={() => setOpenDropdown('about')}
              onBlur={() => setOpenDropdown(null)}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Link href="/o-kompanii" className="nav-link">О компании</Link>
                <button 
                  aria-expanded={openDropdown === 'about'} 
                  aria-controls="dropdown-about"
                  className="chevron-btn"
                  onClick={(e) => { e.preventDefault(); setOpenDropdown(openDropdown === 'about' ? null : 'about'); }}
                  aria-label="Открыть меню О компании"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: openDropdown === 'about' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </div>
              <ul id="dropdown-about" className={`dropdown-simple ${openDropdown === 'about' ? 'show' : ''}`}>
                
                <li><Link href="/o-kompanii" className="dropdown-link-2">О компании</Link></li>
                <li><Link href="/specialisty" className="dropdown-link-2">Специалисты</Link></li>
                <li><Link href="/otzyvy" className="dropdown-link-2">Отзывы</Link></li>
                <li><Link href="/stoimost" className="dropdown-link-2">Стоимость</Link></li>
              </ul>
            </div>

            {/* Гражданам */}
            <div 
              className="nav-item-dropdown"
              onMouseEnter={() => setOpenDropdown('b2c')} 
              onMouseLeave={() => setOpenDropdown(null)}
              onFocus={() => setOpenDropdown('b2c')}
              onBlur={() => setOpenDropdown(null)}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Link href="/grazhdanam" className="nav-link">Гражданам</Link>
                <button 
                  aria-expanded={openDropdown === 'b2c'} 
                  aria-controls="dropdown-b2c"
                  className="chevron-btn"
                  onClick={(e) => { e.preventDefault(); setOpenDropdown(openDropdown === 'b2c' ? null : 'b2c'); }}
                  aria-label="Открыть меню Гражданам"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: openDropdown === 'b2c' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </div>
              <ul id="dropdown-b2c" className={`dropdown-simple ${openDropdown === 'b2c' ? 'show' : ''}`}>
                <li><Link href="/grazhdanam" className="dropdown-link-2" style={{ fontWeight: 'bold' }}>Обзор раздела</Link></li>
                {b2cHubs.map((hub, idx) => (
                  <li key={idx}><Link href={hub.href} className="dropdown-link-2">{hub.title}</Link></li>
                ))}
              </ul>
            </div>

            {/* Бизнесу */}
            <div 
              className="nav-item-dropdown"
              onMouseEnter={() => setOpenDropdown('b2b')} 
              onMouseLeave={() => setOpenDropdown(null)}
              onFocus={() => setOpenDropdown('b2b')}
              onBlur={() => setOpenDropdown(null)}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Link href="/biznesu" className="nav-link">Бизнесу</Link>
                <button 
                  aria-expanded={openDropdown === 'b2b'} 
                  aria-controls="dropdown-b2b"
                  className="chevron-btn"
                  onClick={(e) => { e.preventDefault(); setOpenDropdown(openDropdown === 'b2b' ? null : 'b2b'); }}
                  aria-label="Открыть меню Бизнесу"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: openDropdown === 'b2b' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </div>
              <ul id="dropdown-b2b" className={`dropdown-simple ${openDropdown === 'b2b' ? 'show' : ''}`}>
                <li><Link href="/biznesu" className="dropdown-link-2" style={{ fontWeight: 'bold' }}>Обзор раздела</Link></li>
                {b2bHubs.map((hub, idx) => (
                  <li key={idx}><Link href={hub.href} className="dropdown-link-2">{hub.title}</Link></li>
                ))}
              </ul>
            </div>

            <Link href="/praktika" className="nav-link">Практика</Link>
            <Link href="/publikacii" className="nav-link">Публикации</Link>
            <Link href="/kontakty" className="nav-link">Контакты</Link>
          </div>
          
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginLeft: 'auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', fontSize: '13px', lineHeight: 1.4 }}>
              <a href="tel:+79103503111" style={{ fontWeight: 'bold', color: 'var(--color-deep-blue)', textDecoration: 'none', fontSize: '16px' }}>+7 (910) 350-31-11</a>
              <span style={{ color: 'var(--color-text-secondary)', fontSize: '12px' }}>Липецк, ул. Советская, 35, оф. 213</span>
            </div>
            <div className="contact-dropdown" style={{ position: 'relative', display: 'flex', alignItems: 'center', paddingLeft: '20px', borderLeft: '1px solid var(--color-border)' }}>
            <button className="btn btn-outline contact-btn" style={{ padding: '8px 20px', fontSize: '13px', borderRadius: '4px', whiteSpace: 'nowrap', textDecoration: 'none', cursor: 'pointer' }}>
              Написать
            </button>
            <div className="contact-dropdown-content" style={{
              position: 'absolute',
              top: '100%',
              left: '20px',
              background: 'var(--color-white)',
              border: '1px solid var(--color-border)',
              borderRadius: '4px',
              padding: '8px 0',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              display: 'none',
              flexDirection: 'column',
              minWidth: '160px',
              zIndex: 100
            }}>
              <a href="https://max.ru/join/j5TVaYjQLyJwXfW1azJJ84YZToaXviRu-YFPDy8gMBI" target="_blank" rel="noopener noreferrer" style={{ padding: '8px 20px', color: 'var(--color-deep-blue)', textDecoration: 'none', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'background 0.3s' }} className="dropdown-link">
                <svg width="18" height="18" viewBox="0 0 48 48" fill="var(--color-deep-blue)" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0ZM24.2314 12.5C17.8663 12.5 12.4942 17.4255 12.4941 23.9727C12.4941 26.714 13.0015 28.6059 13.4482 30.3047C13.8233 31.6836 14.1543 32.9467 14.1543 34.4414C14.3143 36.4326 17.9823 35.2685 19.1406 33.7793C20.9718 35.1031 22.0251 35.4346 24.292 35.4346C30.5586 35.4011 35.6151 30.2999 35.5938 24.0332C35.5937 17.6682 30.602 12.5 24.2314 12.5ZM24.3857 18.1592V18.165C27.5981 18.349 30.0709 21.0719 29.9453 24.2871C29.7296 27.4955 26.9854 29.9406 23.7734 29.7861C22.768 29.7055 21.8016 29.3614 20.9717 28.7881C20.4699 29.2899 19.6648 29.9402 19.3447 29.8633C18.6774 29.6868 17.8938 26.2951 18.335 23.5098C18.87 20.1452 21.2859 17.9993 24.3857 18.1592Z"/>
                </svg>
                MAX
              </a>
              <a href="https://vk.com/" target="_blank" rel="noopener noreferrer" style={{ padding: '8px 20px', color: 'var(--color-deep-blue)', textDecoration: 'none', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'background 0.3s' }} className="dropdown-link">
                <svg width="18" height="18" viewBox="0 0 100 100" fill="var(--color-deep-blue)" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50ZM25 34c.406 19.488 10.15 31.2 27.233 31.2h.968V54.05c6.278.625 11.024 5.216 12.93 11.15H75c-2.436-8.87-8.838-13.773-12.836-15.647C66.162 47.242 71.783 41.62 73.126 34h-8.058c-1.749 6.184-6.932 11.805-11.867 12.336V34h-8.057v21.611C40.147 54.362 33.838 48.304 33.556 34H25Z"/>
                </svg>
                ВКонтакте
              </a>
            </div>
          </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

