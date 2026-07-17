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
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          {/* Временная заглушка вместо логотипа */}
          <div style={{ 
            fontSize: '24px', 
            fontWeight: 'bold', 
            color: 'var(--color-deep-blue)',
            fontFamily: 'var(--font-serif)',
            border: '2px solid var(--color-deep-blue)',
            padding: '8px 16px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            Де-Юре <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)', display: 'block', textAlign: 'center', fontWeight: 'normal', letterSpacing: '0', marginTop: '2px' }}>(Прототип)</span>
          </div>
        </Link>
        <nav style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '30px' }}>
            <Link href="/o-kompanii" className="nav-link">О компании</Link>
            <Link href="/grazhdanam" className="nav-link">Гражданам</Link>
            <Link href="/biznesu" className="nav-link">Бизнесу</Link>
            <Link href="/praktika" className="nav-link">Практика</Link>
            <Link href="/publikacii" className="nav-link">Публикации</Link>
            <Link href="/kontakty" className="nav-link">Контакты</Link>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '30px', borderLeft: '1px solid var(--color-border)' }}>
            <button className="btn btn-outline" style={{ padding: '10px 24px', fontSize: '14px', borderRadius: '4px' }}>
              Написать
            </button>
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
