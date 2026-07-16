'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

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
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', padding: '10px 0' }}>
          <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 0L0 7.5V20C0 31.5 12 38.5 24 40V0Z" fill="var(--color-primary)"/>
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '32px', fontWeight: 'bold', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', lineHeight: '1' }}>Де-Юре</span>
            <span style={{ fontSize: '11px', color: 'var(--color-text-secondary)', letterSpacing: '0.05em', textTransform: 'uppercase', marginTop: '4px' }}>Юридическая компания</span>
          </div>
        </Link>
        <nav style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '30px' }}>
            <Link href="/grazhdanam" className="nav-link">Гражданам</Link>
            <Link href="/biznesu" className="nav-link">Бизнесу</Link>
            <Link href="/praktika" className="nav-link">Практика</Link>
            <Link href="/kontakty" className="nav-link">Контакты</Link>
          </div>
          
          <div style={{ display: 'flex', gap: '12px', paddingLeft: '30px', borderLeft: '1px solid var(--color-border)' }}>
            <a href="#" target="_blank" rel="nofollow" className="social-icon" aria-label="WhatsApp">
              <svg role="presentation" width="30" height="30" viewBox="0 0 48 48" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0ZM24.2314 12.5C17.8663 12.5 12.4942 17.4255 12.4941 23.9727C12.4941 26.714 13.0015 28.6059 13.4482 30.3047C13.8233 31.6836 14.1543 32.9467 14.1543 34.4414C14.3143 36.4326 17.9823 35.2685 19.1406 33.7793C20.9718 35.1031 22.0251 35.4346 24.292 35.4346C30.5586 35.4011 35.6151 30.2999 35.5938 24.0332C35.5937 17.6682 30.602 12.5 24.2314 12.5ZM24.3857 18.1592V18.165C27.5981 18.349 30.0709 21.0719 29.9453 24.2871C29.7296 27.4955 26.9854 29.9406 23.7734 29.7861C22.768 29.7055 21.8016 29.3614 20.9717 28.7881C20.4699 29.2899 19.6648 29.9402 19.3447 29.8633C18.6774 29.6868 17.8938 26.2951 18.335 23.5098C18.87 20.1452 21.2859 17.9993 24.3857 18.1592Z" />
              </svg>
            </a>
            <a href="#" target="_blank" rel="nofollow" className="social-icon" aria-label="VK">
              <svg role="presentation" width="30" height="30" viewBox="0 0 100 100" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50ZM25 34c.406 19.488 10.15 31.2 27.233 31.2h.968V54.05c6.278.625 11.024 5.216 12.93 11.15H75c-2.436-8.87-8.838-13.773-12.836-15.647C66.162 47.242 71.783 41.62 73.126 34h-8.058c-1.749 6.184-6.932 11.805-11.867 12.336V34h-8.057v21.611C40.147 54.362 33.838 48.304 33.556 34H25Z" />
              </svg>
            </a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'right', borderLeft: '1px solid var(--color-border)', paddingLeft: '30px' }}>
            <a href="tel:+79103503111" style={{ fontWeight: 'bold', fontSize: '18px', color: 'var(--color-deep-blue)' }}>+7 (910) 350-31-11</a>
            <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>ул. Советская, 35</span>
          </div>
        </nav>
      </div>
    </header>
  );
}
