import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: '404 — Страница не найдена | Де-Юре',
  description: 'Запрашиваемая страница не существует или была перемещена. Перейдите на главную страницу ЮК «Де-Юре».',
  robots: {
    index: false,
    follow: false,
  }
};

export default function NotFound() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      
      <section style={{ 
        flex: 1, 
        paddingTop: '160px', 
        paddingBottom: '100px', 
        background: 'var(--gradient-cream)', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <div style={{ 
            fontSize: 'clamp(80px, 12vw, 140px)', 
            fontFamily: 'var(--font-serif)', 
            color: 'var(--color-gold)', 
            lineHeight: 1, 
            fontWeight: 700, 
            marginBottom: '16px',
            letterSpacing: '-0.02em'
          }}>
            404
          </div>
          
          <h1 style={{ 
            fontSize: 'clamp(28px, 3.5vw, 38px)', 
            color: 'var(--color-deep-blue)', 
            fontFamily: 'var(--font-serif)', 
            marginBottom: '20px', 
            lineHeight: 1.25 
          }}>
            Страница не найдена
          </h1>
          
          <p style={{ 
            fontSize: '17px', 
            color: 'var(--color-text-secondary)', 
            lineHeight: 1.6, 
            marginBottom: '36px',
            maxWidth: '560px',
            margin: '0 auto 36px auto'
          }}>
            Запрашиваемый адрес не существует, удалён или перенесён. Перейдите на главную страницу или свяжитесь с нами по телефону.
          </p>
          
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" className="btn" style={{ padding: '14px 32px', fontSize: '15px' }}>
              На главную страницу
            </Link>
            <a href="tel:+74742000000" className="btn-outline" style={{ padding: '14px 28px', fontSize: '15px' }}>
              Позвонить в компанию
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
