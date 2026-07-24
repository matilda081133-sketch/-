import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import MapWidget from '@/components/MapWidget';
import CopyAddressButton from '@/components/CopyAddressButton';

export const metadata = {
  title: 'Контакты юридической компании «Де-юре» в Липецке',
  description: 'Телефон, адрес офиса, режим работы и реквизиты ЮК «Де-юре» в Липецке. Свяжитесь с нами или постройте маршрут до офиса.',
  alternates: {
    canonical: 'https://dejure-help.ru/kontakty/',
  },
  openGraph: {
    title: 'Контакты юридической компании «Де-юре» в Липецке',
    description: 'Телефон, адрес офиса, режим работы и реквизиты ЮК «Де-юре» в Липецке. Свяжитесь с нами или постройте маршрут до офиса.',
    url: 'https://dejure-help.ru/kontakty/',
    images: [{ url: 'https://dejure-help.ru/-/images/office-building.jpg', width: 1200, height: 630 }],
  }
};

export default function ContactsPage() {
  const jsonLdOrg = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'ЮК «Де-юре»',
    legalName: 'ООО ЮК «ДЕ-ЮРЕ»',
    url: 'https://dejure-help.ru/',
    logo: 'https://dejure-help.ru/-/images/logo_dark.png',
    image: 'https://dejure-help.ru/-/images/office-building.jpg',
    description: 'Юридическая помощь гражданам и бизнесу в Липецке.',
    telephone: '+7 (4742) 20-30-70',
    email: 'info@dejure-help.ru',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ул. Советская, д. 35, оф. 213',
      addressLocality: 'г. Липецк',
      postalCode: '398059',
      addressRegion: 'Липецкая область',
      addressCountry: 'RU'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 52.608826, 
      longitude: 39.598217
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00'
      }
    ]
  };

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://dejure-help.ru/' },
      { '@type': 'ListItem', position: 2, name: 'Контакты', item: 'https://dejure-help.ru/kontakty/' }
    ]
  };

  return (
    <main>
      <Header />
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      
      <div style={{ background: 'linear-gradient(145deg, var(--color-cream) 0%, rgba(247, 244, 237, 0.4) 100%)' }}>
        {/* 1. Главный экран (Hero) */}
        <section style={{ 
          position: 'relative',
          paddingTop: '160px', 
          paddingBottom: '80px'
        }}>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: '900px' }}>
              <h1 style={{ 
                fontSize: 'clamp(40px, 5vw, 64px)', 
                color: 'var(--color-deep-blue)', 
                fontFamily: 'var(--font-serif)', 
                margin: '0 0 24px 0', 
                lineHeight: 1.1 
              }}>
                Контакты
              </h1>
              
              <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: '0 0 48px 0', maxWidth: '700px' }}>
                Мы находимся в самом центре Липецка. Вы можете приехать к нам в офис для очной консультации, позвонить или написать на электронную почту. Юристы «Де-юре» работают по предварительной записи, чтобы уделить вашей проблеме максимум времени.
              </p>
              
              {/* Контактный блок (Визуальный приоритет по ТЗ) */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '64px', alignItems: 'center' }}>
                
                {/* Первичный призыв (Телефон) - Выделен карточкой */}
                <div style={{ 
                  flex: '1 1 350px',
                  background: 'var(--color-white)',
                  padding: '48px 40px',
                  boxShadow: '0 20px 40px rgba(23, 50, 77, 0.08)',
                  borderRadius: '4px',
                  borderTop: '4px solid var(--color-gold)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}>
                  <h3 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-secondary)', margin: 0 }}>Телефон для связи</h3>
                  <a href="tel:+74742203070" style={{ fontSize: '32px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', textDecoration: 'none', lineHeight: 1.2 }}>
                    +7 (4742) 20-30-70
                  </a>
                  <a href="tel:+74742203070" className="btn btn-primary" style={{ padding: '14px 32px', fontSize: '15px', alignSelf: 'flex-start', marginTop: '8px' }} data-analytics="call-click">
                    Позвонить
                  </a>
                </div>

                {/* Информационный блок (Email, Адрес, График) - Без рамок, аккуратный список */}
                <div style={{ 
                  flex: '1.5 1 400px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '32px'
                }}>
                  
                  {/* Email */}
                  <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                    <div style={{ color: 'var(--color-gold)', marginTop: '2px' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)', margin: '0 0 8px 0' }}>Электронная почта</h4>
                      <a href="mailto:info@dejure-help.ru" style={{ fontSize: '18px', color: 'var(--color-deep-blue)', textDecoration: 'none', fontWeight: 500 }}>
                        info@dejure-help.ru
                      </a>
                    </div>
                  </div>

                  {/* Адрес */}
                  <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                    <div style={{ color: 'var(--color-gold)', marginTop: '2px' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)', margin: '0 0 8px 0' }}>Адрес офиса</h4>
                      <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.5 }}>
                        г. Липецк, ул. Советская, д. 35,<br />
                        офис 213 (2-й этаж)
                      </p>
                    </div>
                  </div>

                  {/* Режим работы */}
                  <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                    <div style={{ color: 'var(--color-gold)', marginTop: '2px' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)', margin: '0 0 8px 0' }}>Режим работы</h4>
                      <p style={{ fontSize: '16px', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.5 }}>
                        Пн–Пт: 09:00 — 18:00<br />
                        Сб, Вс: выходной
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Блок "Как добраться" */}
        <section className="section bg-light" style={{ padding: '80px 0' }}>
          <div className="container">
            <h2 style={{ fontSize: '32px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', margin: '0 0 40px 0' }}>
              Как добраться
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px', alignItems: 'flex-start' }}>
              {/* Карта */}
              <div style={{ borderRadius: '4px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                <MapWidget />
              </div>
              
              {/* Инструкция и фото */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                  Здание находится в пяти минутах от площади Петра Великого. Вход расположен со стороны улицы Советской (центральный вход, 2-й этаж). Рядом находится бесплатная парковка, а также остановка общественного транспорта «Площадь Революции» или «Театральная».
                </p>
                
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <a href="https://yandex.ru/maps/?text=г.+Липецк,+ул.+Советская,+д.+35" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '12px 24px', fontSize: '14px' }}>
                    Построить маршрут
                  </a>
                  <CopyAddressButton address="г. Липецк, ул. Советская, д. 35, оф. 213" />
                </div>
                
                {/* Фотография здания (Плейсхолдер до получения фото от маркетолога) */}
                <div style={{ marginTop: '16px', borderRadius: '4px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.05)', background: '#e0e0e0', height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: '#888', fontSize: '14px' }}>[Фотография здания будет добавлена позже]</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Форма и Реквизиты */}
        <section className="section" style={{ padding: '80px 0', background: 'var(--color-white)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              
              <h2 style={{ fontSize: '32px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', margin: '0 0 40px 0', textAlign: 'center' }}>
                Написать нам
              </h2>
              
              <div style={{ background: 'var(--color-cream)', padding: '40px', borderRadius: '4px', boxShadow: '0 10px 30px rgba(23, 50, 77, 0.05)', marginBottom: '60px' }}>
                <ContactsForm title="" subtitle="" />
              </div>
              
              <h2 style={{ fontSize: '32px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', margin: '0 0 32px 0' }}>
                Реквизиты
              </h2>
              
              <div style={{ padding: '32px', background: 'rgba(23, 50, 77, 0.03)', border: '1px solid rgba(23, 50, 77, 0.05)', borderRadius: '4px', fontSize: '15px', lineHeight: 1.6, color: 'var(--color-deep-blue)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '32px' }}>
                  <div>
                    <strong>ООО ЮК «ДЕ-ЮРЕ»</strong><br />
                    <span style={{ color: 'var(--color-text-secondary)' }}>ИНН:</span> 4800009680<br />
                    <span style={{ color: 'var(--color-text-secondary)' }}>ОГРН:</span> 1234800008464
                  </div>
                  <div>
                    <strong>Юридический адрес:</strong><br />
                    398902, Липецкая обл., г. Липецк,<br />ул. Юношеская, влд. 46Б, пом. 1
                  </div>
                </div>
                
                <a href="/docs/kartochka-predpriyatiya.pdf" download target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '12px 24px', fontSize: '14px', borderColor: 'rgba(23, 50, 77, 0.2)', color: 'var(--color-deep-blue)' }}>
                  Скачать карточку предприятия (PDF)
                </a>
              </div>

            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
