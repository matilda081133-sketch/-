import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: '503 — Технические работы | Де-Юре',
  description: 'На сайте проводятся плановые технические работы. Мы скоро вернемся.',
  robots: {
    index: false,
    follow: false,
  }
};

export default function ServiceUnavailable503Page() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      
      <section className="tech-page-section" style={{ 
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
            503
          </div>
          
          <h1 style={{ 
            fontSize: 'clamp(28px, 3.5vw, 38px)', 
            color: 'var(--color-deep-blue)', 
            fontFamily: 'var(--font-serif)', 
            marginBottom: '20px', 
            lineHeight: 1.25 
          }}>
            Ведутся технические работы
          </h1>
          
          <p style={{ 
            fontSize: '17px', 
            color: 'var(--color-text-secondary)', 
            lineHeight: 1.6, 
            marginBottom: '36px',
            maxWidth: '560px',
            margin: '0 auto 36px auto'
          }}>
            В данный момент на сайте проводятся плановые профилактические работы. Доступ к сайту будет восстановлен в ближайшее время. Вы можете связаться с нами по телефону.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a href="tel:+79103503111" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '15px' }}>
              Позвонить адвокату
            </a>
            <a href="/" className="btn btn-outline" style={{ padding: '16px 36px', fontSize: '15px' }}>
              Обновить страницу
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .tech-page-section {
            padding-top: 100px !important;
            padding-bottom: 60px !important;
          }
        }
      `}} />
    </main>
  );
}
