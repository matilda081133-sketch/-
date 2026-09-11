'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const toggleMobileAccordion = (acc: string) => {
    setMobileAccordion(mobileAccordion === acc ? null : acc);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileAccordion(null);
  };

  const b2cHubs = [
    { title: "Семейный юрист", href: "/grazhdanam/semejnyj-yurist/" },
    { title: "Наследственный юрист", href: "/grazhdanam/nasledstvennyj-yurist/" },
    { title: "Жилищный юрист", href: "/grazhdanam/zhilishchnyj-yurist/" },
    { title: "Земельный юрист", href: "/grazhdanam/zemelnyj-yurist/" },
    { title: "Банкротство физических лиц", href: "/grazhdanam/bankrotstvo-fizicheskih-lic/" },
    { title: "Кредитный юрист", href: "/grazhdanam/kreditnyj-yurist/" },
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
    { title: "Трудовые споры с работниками", href: "/biznesu/trudovye-spory-s-rabotnikami/" },
    { title: "Исполнительное производство для бизнеса", href: "/biznesu/ispolnitelnoe-proizvodstvo-dlya-biznesa/" }
  ];

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Логотип */}
        <Link href="/" onClick={closeMobileMenu} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img 
            src="/images/logo_dark.png" 
            alt="Де-Юре" 
            className="desktop-logo"
            width={389}
            height={404}
            style={{ height: '110px', width: 'auto', transform: 'scale(1.25)', transformOrigin: 'left center' }} 
          />
          <img 
            src="/images/logo_dark.png" 
            alt="Де-Юре" 
            className="mobile-logo"
            width={389}
            height={404}
            style={{ height: '56px', width: 'auto', display: 'none', objectFit: 'contain' }} 
          />
        </Link>

        {/* Десктопная навигация */}
        <nav className="desktop-nav" style={{ display: 'flex', gap: '28px', alignItems: 'center', flexWrap: 'nowrap', whiteSpace: 'nowrap' }}>
          <div style={{ display: 'flex', gap: '28px', alignItems: 'center', fontSize: '14px' }}>
            
            {/* О компании */}
            <div 
              className="nav-item-dropdown" 
              onMouseEnter={() => setOpenDropdown('about')} 
              onMouseLeave={() => setOpenDropdown(null)}
              onFocus={() => setOpenDropdown('about')}
              onBlur={() => setOpenDropdown(null)}
            >
              <Link href="/o-kompanii" className="nav-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <span>О компании</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: openDropdown === 'about' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s', opacity: 0.7 }}>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </Link>
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
              <Link href="/grazhdanam" className="nav-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <span>Гражданам</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: openDropdown === 'b2c' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s', opacity: 0.7 }}>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </Link>
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
              <Link href="/biznesu" className="nav-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <span>Бизнесу</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: openDropdown === 'b2b' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s', opacity: 0.7 }}>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </Link>
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
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginLeft: 'auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', fontSize: '13px', lineHeight: 1.4 }}>
              <a href="tel:+74742201525" style={{ fontWeight: 'bold', color: 'var(--color-deep-blue)', textDecoration: 'none', fontSize: '15px' }}>+7 (4742) 20-15-25</a>
              <Link href="/kontakty" className="header-address" style={{ color: 'var(--color-text-secondary)', fontSize: '12px', textDecoration: 'none' }}>Липецк, ул. Советская, 35</Link>
            </div>
            
            <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--color-border)' }} />

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <a
                href="https://t.me/dejure_help_bot"
                target="_blank"
                rel="noopener noreferrer"
                title="Чат-бот Telegram"
                aria-label="Чат-бот Telegram"
                className="social-icon"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM17.697 7.71216C17.5188 9.5888 16.7444 14.1545 16.3508 16.2575C16.1843 17.1472 15.8562 17.4456 15.5383 17.4749C14.8475 17.5385 14.3229 17.0189 13.654 16.5805C12.6074 15.8945 12.0156 15.4674 10.9998 14.7978C9.82586 14.024 10.5898 13.5985 11.2562 12.9063C11.4307 12.7252 14.4574 9.97235 14.5159 9.72322C14.5232 9.69205 14.5299 9.57574 14.4608 9.51433C14.3917 9.45292 14.2898 9.47395 14.2159 9.49071C14.1111 9.51447 12.4363 10.6215 9.19207 12.8115C8.71676 13.138 8.28637 13.2971 7.90091 13.2888C7.47573 13.2796 6.65774 13.048 6.04987 12.8504C5.30429 12.608 4.71077 12.4799 4.76239 12.0678C4.78928 11.8531 5.08477 11.6335 5.64887 11.4089C9.13426 9.89069 11.4587 8.88722 12.6222 8.39851C15.9443 7.00298 16.6346 6.76077 17.0845 6.75283C17.1834 6.75109 17.4045 6.77561 17.5473 6.89146C17.6679 6.9893 17.7011 7.12169 17.7088 7.21447C17.7165 7.30725 17.7258 7.51866 17.697 7.71216Z"/>
                </svg>
              </a>

              <a
                href="https://max.ru/id4800009680_bot"
                target="_blank"
                rel="noopener noreferrer"
                title="Чат-бот MAX"
                aria-label="Чат-бот MAX"
                className="social-icon"
              >
                <svg width="20" height="20" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0ZM24.2314 12.5C17.8663 12.5 12.4942 17.4255 12.4941 23.9727C12.4941 26.714 13.0015 28.6059 13.4482 30.3047C13.8233 31.6836 14.1543 32.9467 14.1543 34.4414C14.3143 36.4326 17.9823 35.2685 19.1406 33.7793C20.9718 35.1031 22.0251 35.4346 24.292 35.4346C30.5586 35.4011 35.6151 30.2999 35.5938 24.0332C35.5937 17.6682 30.602 12.5 24.2314 12.5ZM24.3857 18.1592V18.165C27.5981 18.349 30.0709 21.0719 29.9453 24.2871C29.7296 27.4955 26.9854 29.9406 23.7734 29.7861C22.768 29.7055 21.8016 29.3614 20.9717 28.7881C20.4699 29.2899 19.6648 29.9402 19.3447 29.8633C18.6774 29.6868 17.8938 26.2951 18.335 23.5098C18.87 20.1452 21.2859 17.9993 24.3857 18.1592Z"/>
                </svg>
              </a>
            </div>
          </div>
        </nav>

        {/* Мобильные кнопки действия (< 992px) */}
        <div className="mobile-header-actions" style={{ display: 'none', alignItems: 'center', gap: '8px' }}>
          <a
            href="https://t.me/dejure_help_bot"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Чат-бот Telegram"
            className="social-icon"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM17.697 7.71216C17.5188 9.5888 16.7444 14.1545 16.3508 16.2575C16.1843 17.1472 15.8562 17.4456 15.5383 17.4749C14.8475 17.5385 14.3229 17.0189 13.654 16.5805C12.6074 15.8945 12.0156 15.4674 10.9998 14.7978C9.82586 14.024 10.5898 13.5985 11.2562 12.9063C11.4307 12.7252 14.4574 9.97235 14.5159 9.72322C14.5232 9.69205 14.5299 9.57574 14.4608 9.51433C14.3917 9.45292 14.2898 9.47395 14.2159 9.49071C14.1111 9.51447 12.4363 10.6215 9.19207 12.8115C8.71676 13.138 8.28637 13.2971 7.90091 13.2888C7.47573 13.2796 6.65774 13.048 6.04987 12.8504C5.30429 12.608 4.71077 12.4799 4.76239 12.0678C4.78928 11.8531 5.08477 11.6335 5.64887 11.4089C9.13426 9.89069 11.4587 8.88722 12.6222 8.39851C15.9443 7.00298 16.6346 6.76077 17.0845 6.75283C17.1834 6.75109 17.4045 6.77561 17.5473 6.89146C17.6679 6.9893 17.7011 7.12169 17.7088 7.21447C17.7165 7.30725 17.7258 7.51866 17.697 7.71216Z"/>
                </svg>
              </a>

              <a
                href="https://max.ru/id4800009680_bot"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Чат-бот MAX"
                className="social-icon"
              >
                <svg width="20" height="20" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0ZM24.2314 12.5C17.8663 12.5 12.4942 17.4255 12.4941 23.9727C12.4941 26.714 13.0015 28.6059 13.4482 30.3047C13.8233 31.6836 14.1543 32.9467 14.1543 34.4414C14.3143 36.4326 17.9823 35.2685 19.1406 33.7793C20.9718 35.1031 22.0251 35.4346 24.292 35.4346C30.5586 35.4011 35.6151 30.2999 35.5938 24.0332C35.5937 17.6682 30.602 12.5 24.2314 12.5ZM24.3857 18.1592V18.165C27.5981 18.349 30.0709 21.0719 29.9453 24.2871C29.7296 27.4955 26.9854 29.9406 23.7734 29.7861C22.768 29.7055 21.8016 29.3614 20.9717 28.7881C20.4699 29.2899 19.6648 29.9402 19.3447 29.8633C18.6774 29.6868 17.8938 26.2951 18.335 23.5098C18.87 20.1452 21.2859 17.9993 24.3857 18.1592Z"/>
                </svg>
              </a>

          <a 
            href="tel:+74742201525" 
            aria-label="Позвонить юристу"
            className="mobile-action-btn"
            style={{ 
              width: '40px', 
              height: '40px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              color: 'var(--color-primary)',
              borderRadius: '50%',
              background: 'rgba(23, 50, 77, 0.06)',
              textDecoration: 'none'
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </a>

          <button
            aria-label="Открыть главное меню"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-action-btn"
            style={{ 
              width: '44px', 
              height: '44px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              background: 'rgba(23, 50, 77, 0.06)',
              borderRadius: '50%',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-deep-blue)',
              padding: 0
            }}
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10273B" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10273B" strokeWidth="2.5" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* Полноэкранное мобильное меню */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav" 
          className="mobile-menu-overlay"
          style={{
            position: 'fixed',
            top: '64px',
            left: 0,
            width: '100%',
            height: 'calc(100dvh - 64px)',
            background: 'var(--color-white)',
            zIndex: 999,
            overflowY: 'auto',
            padding: '20px 20px 40px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
          }}
        >
          {/* Аккордеон: Гражданам */}
          <div className="mobile-nav-group">
            <button 
              className="mobile-nav-trigger"
              onClick={() => toggleMobileAccordion('b2c')}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 0',
                background: 'none',
                border: 'none',
                borderBottom: '1px solid var(--color-border)',
                fontSize: '18px',
                fontWeight: 700,
                color: 'var(--color-deep-blue)',
                cursor: 'pointer'
              }}
            >
              <span>Гражданам</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: mobileAccordion === 'b2c' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            {mobileAccordion === 'b2c' && (
              <div style={{ padding: '12px 0 12px 12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Link href="/grazhdanam" onClick={closeMobileMenu} style={{ fontWeight: 'bold', color: 'var(--color-primary)', fontSize: '15px' }}>
                  Обзор раздела Гражданам
                </Link>
                {b2cHubs.map((hub, idx) => (
                  <Link key={idx} href={hub.href} onClick={closeMobileMenu} style={{ color: 'var(--color-text-main)', fontSize: '15px', padding: '4px 0' }}>
                    {hub.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Аккордеон: Бизнесу */}
          <div className="mobile-nav-group">
            <button 
              className="mobile-nav-trigger"
              onClick={() => toggleMobileAccordion('b2b')}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 0',
                background: 'none',
                border: 'none',
                borderBottom: '1px solid var(--color-border)',
                fontSize: '18px',
                fontWeight: 700,
                color: 'var(--color-deep-blue)',
                cursor: 'pointer'
              }}
            >
              <span>Бизнесу</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: mobileAccordion === 'b2b' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            {mobileAccordion === 'b2b' && (
              <div style={{ padding: '12px 0 12px 12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Link href="/biznesu" onClick={closeMobileMenu} style={{ fontWeight: 'bold', color: 'var(--color-primary)', fontSize: '15px' }}>
                  Обзор раздела Бизнесу
                </Link>
                {b2bHubs.map((hub, idx) => (
                  <Link key={idx} href={hub.href} onClick={closeMobileMenu} style={{ color: 'var(--color-text-main)', fontSize: '15px', padding: '4px 0' }}>
                    {hub.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Аккордеон: О компании */}
          <div className="mobile-nav-group">
            <button 
              className="mobile-nav-trigger"
              onClick={() => toggleMobileAccordion('about')}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 0',
                background: 'none',
                border: 'none',
                borderBottom: '1px solid var(--color-border)',
                fontSize: '18px',
                fontWeight: 700,
                color: 'var(--color-deep-blue)',
                cursor: 'pointer'
              }}
            >
              <span>О компании</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: mobileAccordion === 'about' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            {mobileAccordion === 'about' && (
              <div style={{ padding: '12px 0 12px 12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Link href="/o-kompanii" onClick={closeMobileMenu} style={{ color: 'var(--color-text-main)', fontSize: '15px' }}>О компании</Link>
                <Link href="/specialisty" onClick={closeMobileMenu} style={{ color: 'var(--color-text-main)', fontSize: '15px' }}>Специалисты</Link>
                <Link href="/otzyvy" onClick={closeMobileMenu} style={{ color: 'var(--color-text-main)', fontSize: '15px' }}>Отзывы</Link>
                <Link href="/stoimost" onClick={closeMobileMenu} style={{ color: 'var(--color-text-main)', fontSize: '15px' }}>Стоимость</Link>
              </div>
            )}
          </div>

          <Link href="/praktika" onClick={closeMobileMenu} style={{ padding: '14px 0', fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', borderBottom: '1px solid var(--color-border)', textDecoration: 'none' }}>
            Практика
          </Link>
          <Link href="/publikacii" onClick={closeMobileMenu} style={{ padding: '14px 0', fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', borderBottom: '1px solid var(--color-border)', textDecoration: 'none' }}>
            Публикации
          </Link>
          <Link href="/kontakty" onClick={closeMobileMenu} style={{ padding: '14px 0', fontSize: '18px', fontWeight: 700, color: 'var(--color-deep-blue)', borderBottom: '1px solid var(--color-border)', textDecoration: 'none' }}>
            Контакты
          </Link>

          <div style={{ marginTop: 'auto', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a 
                href="https://t.me/dejure_help_bot" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline" 
                style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', minHeight: '44px', fontSize: '14px', textDecoration: 'none' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM17.697 7.71216C17.5188 9.5888 16.7444 14.1545 16.3508 16.2575C16.1843 17.1472 15.8562 17.4456 15.5383 17.4749C14.8475 17.5385 14.3229 17.0189 13.654 16.5805C12.6074 15.8945 12.0156 15.4674 10.9998 14.7978C9.82586 14.024 10.5898 13.5985 11.2562 12.9063C11.4307 12.7252 14.4574 9.97235 14.5159 9.72322C14.5232 9.69205 14.5299 9.57574 14.4608 9.51433C14.3917 9.45292 14.2898 9.47395 14.2159 9.49071C14.1111 9.51447 12.4363 10.6215 9.19207 12.8115C8.71676 13.138 8.28637 13.2971 7.90091 13.2888C7.47573 13.2796 6.65774 13.048 6.04987 12.8504C5.30429 12.608 4.71077 12.4799 4.76239 12.0678C4.78928 11.8531 5.08477 11.6335 5.64887 11.4089C9.13426 9.89069 11.4587 8.88722 12.6222 8.39851C15.9443 7.00298 16.6346 6.76077 17.0845 6.75283C17.1834 6.75109 17.4045 6.77561 17.5473 6.89146C17.6679 6.9893 17.7011 7.12169 17.7088 7.21447C17.7165 7.30725 17.7258 7.51866 17.697 7.71216Z"/>
                </svg>
                Telegram-бот
              </a>
              <a 
                href="https://max.ru/id4800009680_bot" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline" 
                style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', minHeight: '44px', fontSize: '14px', textDecoration: 'none' }}
              >
                <svg width="20" height="20" viewBox="0 0 48 48" fill="#10273B" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0ZM24.2314 12.5C17.8663 12.5 12.4942 17.4255 12.4941 23.9727C12.4941 26.714 13.0015 28.6059 13.4482 30.3047C13.8233 31.6836 14.1543 32.9467 14.1543 34.4414C14.3143 36.4326 17.9823 35.2685 19.1406 33.7793C20.9718 35.1031 22.0251 35.4346 24.292 35.4346C30.5586 35.4011 35.6151 30.2999 35.5938 24.0332C35.5937 17.6682 30.602 12.5 24.2314 12.5ZM24.3857 18.1592V18.165C27.5981 18.349 30.0709 21.0719 29.9453 24.2871C29.7296 27.4955 26.9854 29.9406 23.7734 29.7861C22.768 29.7055 21.8016 29.3614 20.9717 28.7881C20.4699 29.2899 19.6648 29.9402 19.3447 29.8633C18.6774 29.6868 17.8938 26.2951 18.335 23.5098C18.87 20.1452 21.2859 17.9993 24.3857 18.1592Z"/>
                </svg>
                MAX-бот
              </a>
            </div>
            <a href="tel:+74742201525" className="btn btn-primary" style={{ width: '100%', textAlign: 'center', minHeight: '48px', fontSize: '16px' }}>
              Позвонить: +7 (4742) 20-15-25
            </a>
            <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', textAlign: 'center' }}>
              г. Липецк, ул. Советская, д. 35, оф. 213
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 991px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-header-actions {
            display: flex !important;
          }
          .desktop-logo {
            display: none !important;
          }
          .mobile-logo {
            display: block !important;
          }
        }
      `}} />
    </header>
  );
}
