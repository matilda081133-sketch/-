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
          <img src="images/logo.png" alt="Де-Юре" style={{ height: '75px', width: 'auto' }} />
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
          
          <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '20px', borderLeft: '1px solid var(--color-border)' }}>
            <button className="btn btn-outline" style={{ padding: '8px 20px', fontSize: '13px', borderRadius: '4px', whiteSpace: 'nowrap' }}>
              Написать
            </button>
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
