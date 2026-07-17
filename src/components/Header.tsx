'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="images/logo_dark.png" alt="Де-Юре" style={{ height: '110px', width: 'auto' }} />
        </Link>
        <nav style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'nowrap', whiteSpace: 'nowrap' }}>
          <div style={{ display: 'flex', gap: '20px', fontSize: '14px' }}>
            <Link href="/o-kompanii" className="nav-link">О компании</Link>
            <Link href="/grazhdanam" className="nav-link">Гражданам</Link>
            <Link href="/biznesu" className="nav-link">Бизнесу</Link>
            <Link href="/praktika" className="nav-link">Практика</Link>
            <Link href="/publikacii" className="nav-link">Публикации</Link>
            <Link href="/kontakty" className="nav-link">Контакты</Link>
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
              <a href="https://t.me/dejure_lipetsk" target="_blank" rel="noopener noreferrer" style={{ padding: '8px 20px', color: 'var(--color-deep-blue)', textDecoration: 'none', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'background 0.3s' }} className="dropdown-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#0088cc" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.425 11.871l9.957-3.834c.462-.175.882.106.702.775l-1.688 7.954c-.154.673-.55.836-1.11.517l-3.076-2.268-1.484 1.428c-.164.164-.302.302-.619.302l.222-3.136 5.707-5.155c.248-.221-.054-.343-.385-.123L6.598 12.82l-3.037-.948c-.661-.207-.674-.662.138-.98l1.726-.662z" fill="#ffffff"/>
                </svg>
                Telegram
              </a>
              <a href="https://vk.com/" target="_blank" rel="noopener noreferrer" style={{ padding: '8px 20px', color: 'var(--color-deep-blue)', textDecoration: 'none', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'background 0.3s' }} className="dropdown-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#0077FF" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.077 7.039c.046 0 2.378-.027 2.378-.027s1.396-.062 1.579.805c.162.77-.52 2.385-1.22 3.428-.865 1.288-1.745 2.316-1.579 2.693.18.406 1.287 1.096 1.944 1.769.96.983 1.34 2.158 1.34 2.158s.22.428-.152.62c-.413.212-1.425.176-1.425.176s-1.129.043-1.636-.263c-.453-.274-.834-.84-1.258-1.347-1.077-1.287-1.536-1.348-1.85-.945-.405.52-.51 1.44-.51 1.44s-.044.385-.29.534c-.23.14-.64.123-1.58.123-2.025 0-4.088-.938-5.717-2.61-2.903-2.981-5.119-7.85-5.119-7.85s-.14-.35.01-.54c.14-.179.626-.184.626-.184s2.213.018 2.38.018c.15 0 .34.072.434.331 0 0 1.233 2.923 2.802 5.568 1.63 2.748 2.393 3.12 2.71 2.928.455-.276.32-2.482.32-2.482s.018-1.558-.458-2.008c-.347-.328-.805-.417-.962-.438-.13-.017-.23-.153-.16-.254.12-.178.487-.367 1.233-.367h1.61c.316 0 .47.16.52.336.14.498.058 2.656-.237 3.238-.204.403.497.585 1.517-1.157 1.054-1.8 1.83-4.045 1.83-4.045s.103-.263.29-.36c.205-.106.51-.087.51-.087z" />
                </svg>
                ВКонтакте
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'right', borderLeft: '1px solid var(--color-border)', paddingLeft: '20px', whiteSpace: 'nowrap' }}>
            <a href="tel:+79103503111" style={{ fontWeight: 'bold', fontSize: '18px', color: 'var(--color-deep-blue)', whiteSpace: 'nowrap' }}>+7 (910) 350-31-11</a>
            <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)', whiteSpace: 'nowrap' }}>ул. Советская, 35</span>
          </div>
        </nav>
      </div>
    </header>
  );
}
