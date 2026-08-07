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
    { title: "О компании", href: "/o-kompanii" },
    { title: "Специалисты", href: "/specialisty" },
    { title: "Отзывы", href: "/otzyvy" },
    { title: "Стоимость", href: "/stoimost" },
    { title: "Практика", href: "/praktika" },
    { title: "Публикации", href: "/publikacii" },
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
                  src="/images/logo_dark.png" 
                  alt="Де-Юре" 
                  className="footer-logo-img"
                  style={{ height: '130px', width: 'auto', transform: 'scale(1.4)', transformOrigin: 'left center', filter: 'brightness(0) invert(1)' }} 
                />
              </Link>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', lineHeight: 1.6, marginBottom: '16px', maxWidth: '300px' }}>
              Юридическая помощь гражданам <br />и бизнесу в Липецке.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
              <a href="tel:+79103503111" style={{ color: 'var(--color-white)', fontWeight: 'bold', textDecoration: 'none', fontSize: '16px' }}>
                +7 (910) 350-31-11
              </a>
              <span style={{ color: 'rgba(255,255,255,0.6)' }}>г. Липецк, ул. Советская, д. 35, оф. 213</span>
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
            <Link href="/terms">Правовой дисклеймер</Link>
            <Link href="/sitemap">Карта сайта</Link>
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
