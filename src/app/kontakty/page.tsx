import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import MapWidget from '@/components/MapWidget';

export const metadata = {
  title: 'Контакты | Де-Юре',
  description: 'Свяжитесь с адвокатским бюро «Де-Юре» в Липецке. Адрес, телефон, схема проезда и форма обратной связи.',
};

export default function ContactsPage() {
  return (
    <main>
      <Header />
      
      {/* Wrapper for the whole page background */}
      <div style={{ background: 'linear-gradient(145deg, var(--color-cream) 0%, rgba(247, 244, 237, 0.4) 100%)' }}>
        {/* 1. Главный экран (Hero) */}
        <section style={{ 
          position: 'relative',
          paddingTop: '160px', 
          paddingBottom: '80px'
        }}>
          {/* Decorative circle container (prevents horizontal scroll without breaking sticky) */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', pointerEvents: 'none' }}>
            <div style={{
              position: 'absolute', top: '-20%', left: '-5%', width: '500px', height: '500px',
              background: 'radial-gradient(circle, rgba(234, 241, 246, 0.8) 0%, transparent 70%)',
              borderRadius: '50%', zIndex: 0
            }} />
          </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '900px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: '#9B7E55' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 600, color: '#9B7E55' }}>
                Свяжитесь с нами
              </span>
            </div>
            
            <h1 style={{ 
              fontSize: 'clamp(40px, 5vw, 64px)', 
              color: 'var(--color-deep-blue)', 
              fontFamily: 'var(--font-serif)', 
              margin: '0 0 48px 0', 
              lineHeight: 1.1 
            }}>
              Контакты
            </h1>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                
                {/* Телефон */}
                <div style={{ 
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.9)',
                  padding: '32px',
                  boxShadow: '0 15px 35px rgba(23, 50, 77, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}>
                  <div style={{ color: 'var(--color-primary)' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)', margin: 0 }}>Телефон</h3>
                  <a href="tel:+79103503111" style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--color-deep-blue)', textDecoration: 'none' }}>
                    +7 (910) 350-31-11
                  </a>
                </div>
                
                {/* Адрес */}
                <div style={{ 
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.9)',
                  padding: '32px',
                  boxShadow: '0 15px 35px rgba(23, 50, 77, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}>
                  <div style={{ color: 'var(--color-primary)' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)', margin: 0 }}>Адрес</h3>
                  <p style={{ fontSize: '18px', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.5 }}>
                    г. Липецк,<br />
                    ул. Советская, д. 35
                  </p>
                </div>
                
                {/* Режим работы */}
                <div style={{ 
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.9)',
                  padding: '32px',
                  boxShadow: '0 15px 35px rgba(23, 50, 77, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}>
                  <div style={{ color: 'var(--color-primary)' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)', margin: 0 }}>Режим работы</h3>
                  <p style={{ fontSize: '18px', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.5 }}>
                    Пн–Пт: 09:00 — 18:00<br />
                    Сб, Вс: выходной
                  </p>
                </div>

              </div>
              
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="#form" className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '15px' }}>
                  Оставить заявку
                </a>
                <a href="https://yandex.ru/maps/?text=г.+Липецк,+ул.+Советская,+д.+35" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '16px 40px', fontSize: '15px' }}>
                  Построить маршрут
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Карта и Форма */}
      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="contacts-grid">
            
            {/* Левая колонка: Карта */}
            <div>
              <h2 style={{ fontSize: '32px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', margin: '0 0 32px 0' }}>Как добраться</h2>
              <MapWidget />
              
              <div style={{ marginTop: '32px', padding: '32px', background: 'linear-gradient(to right, var(--color-deep-blue) 0%, #1c3c5d 100%)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'rgba(255, 255, 255, 0.7)', boxShadow: '0 30px 60px rgba(23, 50, 77, 0.2)' }}>
                <h4 style={{ fontSize: '24px', color: 'var(--color-white)', fontFamily: 'var(--font-serif)', margin: '0 0 16px 0' }}>Реквизиты</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', fontSize: '15px', lineHeight: 1.5 }}>
                  <div>
                    <strong style={{ color: 'var(--color-white)' }}>ООО «Де-Юре»</strong><br />
                    <span style={{ color: 'var(--color-white)', fontWeight: 600 }}>ИНН:</span> 4826139414<br />
                    <span style={{ color: 'var(--color-white)', fontWeight: 600 }}>КПП:</span> 482601001
                  </div>
                  <div>
                    <span style={{ color: 'var(--color-white)', fontWeight: 600 }}>ОГРН:</span> 1194827010260<br />
                    <strong style={{ color: 'var(--color-white)' }}>Юридический адрес:</strong><br />
                    398059, г. Липецк, ул. Советская, д. 35
                  </div>
                </div>
              </div>
            </div>
            
            {/* Правая колонка: Форма */}
            <div id="form" style={{ position: 'sticky', top: '120px' }}>
              <ContactsForm />
            </div>

          </div>
        </div>
      </section>
      </div>

      <Footer />
    </main>
  );
}
