import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';

export const metadata = {
  title: 'Контакты | Де-Юре',
  description: 'Свяжитесь с адвокатским бюро «Де-Юре» в Липецке. Адрес, телефон, схема проезда и форма обратной связи.',
};

export default function ContactsPage() {
  return (
    <main>
      <Header />
      
      {/* 1. Главный экран (Hero) */}
      <section className="section" style={{ paddingTop: '160px', paddingBottom: '80px', background: 'var(--color-cream)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <h1 style={{ fontSize: '48px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', margin: '0 0 40px 0', lineHeight: 1.2 }}>
              Контакты
            </h1>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
                <div>
                  <h3 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)', margin: '0 0 12px 0' }}>Телефон</h3>
                  <a href="tel:+79103503111" style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--color-deep-blue)', textDecoration: 'none' }}>
                    +7 (910) 350-31-11
                  </a>
                </div>
                
                <div>
                  <h3 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)', margin: '0 0 12px 0' }}>Адрес</h3>
                  <p style={{ fontSize: '18px', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.5 }}>
                    г. Липецк,<br />
                    ул. Советская, д. 35
                  </p>
                </div>
                
                <div>
                  <h3 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)', margin: '0 0 12px 0' }}>Режим работы</h3>
                  <p style={{ fontSize: '18px', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.5 }}>
                    Пн–Пт: 09:00 — 18:00<br />
                    Сб, Вс: выходной
                  </p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '16px' }}>
                <a href="#form" className="btn btn-primary" style={{ padding: '12px 32px' }}>
                  Оставить заявку
                </a>
                <a href="https://yandex.ru/maps/-/CDq~6Y~O" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '12px 32px' }}>
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
              <div style={{ width: '100%', height: '480px', background: '#eee', position: 'relative', border: '1px solid rgba(23, 50, 77, 0.1)' }}>
                {/* Отложенная загрузка Яндекс.Карт */}
                <iframe 
                  src="https://yandex.ru/map-widget/v1/?ll=39.598857%2C52.610220&mode=search&text=%D0%9B%D0%B8%D0%BF%D0%B5%D1%86%D0%BA%2C%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0%20%D0%A1%D0%BE%D0%B2%D0%B5%D1%82%D1%81%D0%BA%D0%B0%D1%8F%2C%2035&z=16" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  allowFullScreen={true} 
                  loading="lazy"
                  style={{ position: 'absolute', top: 0, left: 0 }}
                  title="Карта проезда к офису Де-Юре"
                ></iframe>
              </div>
              
              <div style={{ marginTop: '32px', padding: '24px', background: 'var(--color-cream)', border: '1px solid rgba(23, 50, 77, 0.1)' }}>
                <h4 style={{ fontSize: '18px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', margin: '0 0 16px 0' }}>Реквизиты</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  <div>
                    <strong>ООО «Де-Юре»</strong><br />
                    ИНН: 4826139414<br />
                    КПП: 482601001
                  </div>
                  <div>
                    ОГРН: 1194827010260<br />
                    Юридический адрес:<br />
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

      <Footer />
    </main>
  );
}
