'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

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
    { title: "Специалисты", href: "/specialisty" },
    { title: "Практика", href: "/praktika" },
    { title: "Контакты", href: "/kontakty" }
  ];

  return (
    <footer style={{ backgroundColor: 'var(--color-deep-blue)', color: 'var(--color-white)', padding: '48px 0 24px', fontSize: '14px' }}>
      <div className="container">
        {/* Главная десктопная/мобильная сетка колонок */}
        <div className="footer-grid" style={{ 
          borderBottom: '1px solid rgba(255,255,255,0.1)', 
          paddingBottom: '36px', 
          marginBottom: '28px' 
        }}>
          
          {/* Column 1: Logo & Info */}
          <div className="footer-col-info">
            <div style={{ marginBottom: '24px', marginTop: '-20px' }}>
              <Link href="/" style={{ display: 'inline-block' }}>
                <img 
                  src="/images/logo_dark.webp" 
                  alt="Де-Юре" 
                  className="footer-logo-img"
                  width={110}
                  height={110}
                  loading="lazy"
                  decoding="async"
                  style={{ height: '130px', width: 'auto', transform: 'scale(1.4)', transformOrigin: 'left center', filter: 'brightness(0) invert(1)' }} 
                />
              </Link>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', lineHeight: 1.6, marginBottom: '16px', maxWidth: '300px' }}>
              Юридическая помощь гражданам <br />и бизнесу в Липецке.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
              <a href="tel:+74742201525" style={{ color: 'var(--color-white)', fontWeight: 'bold', textDecoration: 'none', fontSize: '16px' }}>
                +7 (4742) 20-15-25
              </a>
              <span style={{ color: 'rgba(255,255,255,0.6)' }}>г. Липецк, ул. Советская, д. 35, оф. 213</span>
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginTop: '16px', flexWrap: 'wrap' }}>
              <a
                href="https://t.me/dejure_help_bot"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--color-white)',
                  textDecoration: 'none',
                  fontSize: '12px',
                  padding: '6px 12px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '4px',
                  transition: 'background 0.2s'
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM17.697 7.71216C17.5188 9.5888 16.7444 14.1545 16.3508 16.2575C16.1843 17.1472 15.8562 17.4456 15.5383 17.4749C14.8475 17.5385 14.3229 17.0189 13.654 16.5805C12.6074 15.8945 12.0156 15.4674 10.9998 14.7978C9.82586 14.024 10.5898 13.5985 11.2562 12.9063C11.4307 12.7252 14.4574 9.97235 14.5159 9.72322C14.5232 9.69205 14.5299 9.57574 14.4608 9.51433C14.3917 9.45292 14.2898 9.47395 14.2159 9.49071C14.1111 9.51447 12.4363 10.6215 9.19207 12.8115C8.71676 13.138 8.28637 13.2971 7.90091 13.2888C7.47573 13.2796 6.65774 13.048 6.04987 12.8504C5.30429 12.608 4.71077 12.4799 4.76239 12.0678C4.78928 11.8531 5.08477 11.6335 5.64887 11.4089C9.13426 9.89069 11.4587 8.88722 12.6222 8.39851C15.9443 7.00298 16.6346 6.76077 17.0845 6.75283C17.1834 6.75109 17.4045 6.77561 17.5473 6.89146C17.6679 6.9893 17.7011 7.12169 17.7088 7.21447C17.7165 7.30725 17.7258 7.51866 17.697 7.71216Z"/></svg>
                Telegram
              </a>
              <a
                href="https://max.ru/id4800009680_bot"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--color-white)',
                  textDecoration: 'none',
                  fontSize: '12px',
                  padding: '6px 12px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '4px',
                  transition: 'background 0.2s'
                }}
              >
                Чат MAX
              </a>
            </div>
          </div>

          {/* Column 2: Гражданам (с аккордеоном на мобильном) */}
          <div className="footer-col-accordion">
            <button 
              className="footer-accordion-btn" 
              onClick={() => toggleSection('b2c')}
              aria-expanded={openSection === 'b2c'}
            >
              <span>Гражданам</span>
              <svg className={`footer-chevron ${openSection === 'b2c' ? 'open' : ''}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div className={`footer-link-list ${openSection === 'b2c' ? 'show-mobile' : ''}`}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {b2cLinks.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="footer-link">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Бизнесу (с аккордеоном на мобильном) */}
          <div className="footer-col-accordion">
            <button 
              className="footer-accordion-btn" 
              onClick={() => toggleSection('b2b')}
              aria-expanded={openSection === 'b2b'}
            >
              <span>Бизнесу</span>
              <svg className={`footer-chevron ${openSection === 'b2b' ? 'open' : ''}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div className={`footer-link-list ${openSection === 'b2b' ? 'show-mobile' : ''}`}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {b2bLinks.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="footer-link">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Компания (с аккордеоном на мобильном) */}
          <div className="footer-col-accordion">
            <button 
              className="footer-accordion-btn" 
              onClick={() => toggleSection('company')}
              aria-expanded={openSection === 'company'}
            >
              <span>Компания</span>
              <svg className={`footer-chevron ${openSection === 'company' ? 'open' : ''}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div className={`footer-link-list ${openSection === 'company' ? 'show-mobile' : ''}`}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {companyLinks.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="footer-link">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Нижний юридический блок */}
        <div className="footer-bottom-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span>© 2026 ООО ЮК «Де-Юре»</span>
            <span>ИНН: 4800009680 | ОГРН: 1234800008464</span>
            <span>Фактический адрес: г. Липецк, ул. Советская, д. 35, оф. 213</span>
            <span>Юридический адрес: 398902, Липецкая обл., г. Липецк, ул. Юношеская, влд. 46Б, пом. 1</span>
          </div>
          <div className="footer-legal-links">
            <Link href="/privacy">Политика обработки персональных данных</Link>
            <Link href="/consent">Согласие на обработку персональных данных</Link>
            <Link href="/cookies">Политика использования cookie</Link>
            <button
              onClick={() => {
                const fn = (window as Window & { __deJureOpenCookieSettings?: () => void }).__deJureOpenCookieSettings;
                if (typeof fn === 'function') fn();
              }}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                color: 'inherit',
                fontSize: 'inherit',
                cursor: 'pointer',
                textAlign: 'left',
                textDecoration: 'underline',
                fontFamily: 'inherit',
                opacity: 0.8
              }}
              aria-label="Открыть настройки cookie"
            >
              Настройки cookie
            </button>
            <Link href="/sitemap.xml">Карта сайта</Link>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 40px;
        }
        .footer-accordion-btn {
          background: none;
          border: none;
          color: var(--color-white);
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.05em;
          padding: 0;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          cursor: pointer;
        }
        .footer-chevron {
          display: none;
          transition: transform 0.3s ease;
        }
        .footer-bottom-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          color: rgba(255,255,255,0.5);
          font-size: 13px;
        }
        .footer-legal-links {
          display: flex;
          flex-direction: column;
          gap: 6px;
          align-items: flex-end;
          text-align: right;
        }
        .footer-legal-links a {
          color: rgba(255,255,255,0.5);
          text-decoration: underline;
          transition: color 0.2s;
        }
        .footer-legal-links a:hover {
          color: var(--color-white);
        }

        /* Мобильные стили подвала (0 - 767px) */
        @media (max-width: 767px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .footer-logo-img {
            height: 56px !important;
          }
          .footer-accordion-btn {
            padding: 14px 0 !important;
            margin-bottom: 0 !important;
            border-bottom: 1px solid rgba(255,255,255,0.1);
          }
          .footer-chevron {
            display: block !important;
          }
          .footer-chevron.open {
            transform: rotate(180deg);
          }
          .footer-link-list {
            display: none;
            padding-top: 14px;
            padding-bottom: 14px;
          }
          .footer-link-list.show-mobile {
            display: block !important;
          }
          .footer-bottom-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .footer-legal-links {
            align-items: flex-start !important;
            text-align: left !important;
          }
          .footer-link {
            min-height: 38px;
            display: flex;
            align-items: center;
          }
        }
      `}} />
    </footer>
  );
}
