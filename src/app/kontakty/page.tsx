import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactsForm from '@/components/ContactsForm';
import MapWidget from '@/components/MapWidget';
import CopyAddressButton from '@/components/CopyAddressButton';

export const metadata = {
  title: 'Контакты юридической компании «Де-Юре» в Липецке',
  description: 'Телефон, адрес офиса, режим работы и реквизиты ЮК «Де-Юре» в Липецке. Свяжитесь с нами или постройте маршрут до офиса.',
  alternates: {
    canonical: 'https://dejure-help.ru/kontakty/',
  },
  openGraph: {
    title: 'Контакты юридической компании «Де-Юре» в Липецке',
    description: 'Телефон, адрес офиса, режим работы и реквизиты ЮК «Де-Юре» в Липецке. Свяжитесь с нами или постройте маршрут до офиса.',
    url: 'https://dejure-help.ru/kontakty/',
    images: [{ url: 'https://dejure-help.ru/images/office-building.jpg', width: 1200, height: 630 }],
  }
};

export default function ContactsPage() {
  const jsonLdOrg = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'ЮК «Де-Юре»',
    legalName: 'ООО ЮК «Де-Юре»',
    url: 'https://dejure-help.ru/',
    logo: 'https://dejure-help.ru/images/logo_dark.png',
    image: 'https://dejure-help.ru/images/office-building.jpg',
    description: 'Юридическая помощь гражданам и бизнесу в Липецке.',
    telephone: '+7 (910) 350-31-11',
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
      latitude: 52.604024, 
      longitude: 39.585799
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
            <div style={{ margin: '0 auto' }}>
              <h1 style={{ 
                fontSize: 'clamp(40px, 5vw, 64px)', 
                color: 'var(--color-deep-blue)', 
                fontFamily: 'var(--font-serif)', 
                margin: '0 0 24px 0', 
                lineHeight: 1.1 
              }}>
                Контакты
              </h1>
              
              <div style={{ marginBottom: '48px' }}>
                <p style={{ fontSize: '18px', color: 'var(--color-deep-blue)', opacity: 0.9, fontWeight: 500, lineHeight: 1.5, margin: '0 0 12px 0' }}>
                  Позвоните или напишите нам либо приезжайте в&nbsp;офис юридической компании «Де&#8209;Юре» в&nbsp;центре Липецка.
                </p>
                <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', fontWeight: 500, lineHeight: 1.5, margin: 0, whiteSpace: 'nowrap' }}>
                  Личные встречи с&nbsp;юристами проводятся по&nbsp;предварительной записи&nbsp;— пожалуйста, согласуйте время визита заранее.
                </p>
              </div>
              
              {/* Контактные карточки (Сетка 2x2) */}
              <div className="grid grid-2" style={{ gap: '24px' }}>
                
                {/* 1. Телефон */}
                <div style={{ background: 'var(--color-white)', padding: '32px', boxShadow: '0 10px 30px rgba(23, 50, 77, 0.05)', borderRadius: '4px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)', margin: 0, display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="square">
                       <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    Телефон
                  </div>
                  <a href="tel:+79103503111" style={{ fontSize: '28px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', textDecoration: 'none' }}>
                    +7 (910) 350-31-11
                  </a>
                  <a href="tel:+79103503111" className="btn btn-outline" style={{ padding: '10px 24px', fontSize: '14px', alignSelf: 'flex-start', marginTop: 'auto' }}>
                    Позвонить
                  </a>
                </div>

                {/* 2. Адрес */}
                <div style={{ background: 'var(--color-white)', padding: '32px', boxShadow: '0 10px 30px rgba(23, 50, 77, 0.05)', borderRadius: '4px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)', margin: 0, display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="square">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    Адрес офиса
                  </div>
                  <p style={{ fontSize: '18px', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.5, fontWeight: 500 }}>
                    г. Липецк, ул. Советская, д.&nbsp;35,<br/>офис 213
                  </p>
                  <div style={{ marginTop: 'auto' }}>
                    <CopyAddressButton address="г. Липецк, ул. Советская, д. 35, офис 213" />
                  </div>
                </div>

                {/* 3. Режим работы */}
                <div style={{ background: 'var(--color-white)', padding: '32px', boxShadow: '0 10px 30px rgba(23, 50, 77, 0.05)', borderRadius: '4px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)', margin: 0, display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="square">
                      <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    Режим работы
                  </div>
                  <p style={{ fontSize: '18px', color: 'var(--color-deep-blue)', margin: 0, lineHeight: 1.5, fontWeight: 500 }}>
                    Пн–Пт: 09:00 — 18:00<br />Сб, Вс: выходной
                  </p>
                </div>

                {/* 4. Email */}
                <div style={{ background: 'var(--color-white)', padding: '32px', boxShadow: '0 10px 30px rgba(23, 50, 77, 0.05)', borderRadius: '4px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)', margin: 0, display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="square">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    Электронная почта
                  </div>
                  <a href="mailto:info@dejure-help.ru" style={{ fontSize: '20px', color: 'var(--color-deep-blue)', textDecoration: 'none', fontWeight: 500 }}>
                    info@dejure-help.ru
                  </a>
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
            
            <div className="how-to-get-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 1fr)', gap: '40px', alignItems: 'stretch' }}>
              {/* Единая карточка информации о здании и маршруте (40-45%) */}
              <div style={{ display: 'flex', flexDirection: 'column', order: 2 }}>
                
                <div style={{ 
                  background: 'var(--color-white)', 
                  padding: '36px', 
                  borderRadius: '4px', 
                  boxShadow: '0 10px 30px rgba(23, 50, 77, 0.08)', 
                  borderTop: '4px solid var(--color-gold)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px'
                }}>
                  {/* Заголовок карточки */}
                  <div style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)', margin: 0, display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="square">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    Информация о здании
                  </div>

                  {/* Характеристики здания */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                    <div style={{ gridColumn: '1 / -1' }}>
                      <div style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--color-text-secondary)', marginBottom: '4px' }}>Адрес</div>
                      <div style={{ fontSize: '15px', color: 'var(--color-deep-blue)', fontWeight: 600 }}>г. Липецк, ул. Советская, д.&nbsp;35, офис 213</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--color-text-secondary)', marginBottom: '4px' }}>Пропускной режим</div>
                      <div style={{ fontSize: '14px', color: 'var(--color-deep-blue)', fontWeight: 500 }}>Нет</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--color-text-secondary)', marginBottom: '4px' }}>Этаж</div>
                      <div style={{ fontSize: '14px', color: 'var(--color-deep-blue)', fontWeight: 500 }}>2-й</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--color-text-secondary)', marginBottom: '4px' }}>Лифт</div>
                      <div style={{ fontSize: '14px', color: 'var(--color-deep-blue)', fontWeight: 500 }}>Нет</div>
                    </div>
                    <div style={{ gridColumn: '1 / -1' }}>
                      <div style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--color-text-secondary)', marginBottom: '4px' }}>Ближайшая остановка</div>
                      <div style={{ fontSize: '15px', color: 'var(--color-deep-blue)', fontWeight: 500 }}>«Улица Горького», до 1 минуты пешком</div>
                    </div>
                  </div>

                  {/* Разделитель */}
                  <div style={{ borderTop: '1px solid rgba(23, 50, 77, 0.08)' }}></div>

                  {/* Текстовые инструкции по входу и парковке */}
                  <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>
                      <h3 style={{ fontSize: '15px', color: 'var(--color-deep-blue)', margin: '0 0 6px 0', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>Вход в здание</h3>
                      <p style={{ margin: 0 }}>
                        Войти можно через любой из двух общих входов, расположенных со стороны улицы Советской в правой и левой частях фасада. Отдельного входа нет.
                      </p>
                    </div>

                    <div>
                      <h3 style={{ fontSize: '15px', color: 'var(--color-deep-blue)', margin: '0 0 6px 0', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>Как найти офис</h3>
                      <p style={{ margin: 0 }}>
                        Если вы вошли через правый вход, поднимитесь по лестнице и поверните в коридоре направо. Если вошли через левый вход — поднимитесь и поверните налево.
                      </p>
                    </div>

                    <div>
                      <h3 style={{ fontSize: '15px', color: 'var(--color-deep-blue)', margin: '0 0 6px 0', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>От остановки</h3>
                      <p style={{ margin: 0 }}>
                        От остановки «Улица Горького» до здания идти не более одной минуты. В зависимости от стороны, с которой вы приехали, потребуется перейти одну или две дороги.
                      </p>
                    </div>

                    <div>
                      <h3 style={{ fontSize: '15px', color: 'var(--color-deep-blue)', margin: '0 0 6px 0', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>Где припарковаться</h3>
                      <p style={{ margin: 0 }}>
                        Непосредственно у здания парковки нет. Автомобиль можно оставить на стоянке напротив здания через дорогу на улице Советской либо на стоянке немного дальше, на улице Горького.
                      </p>
                    </div>
                  </div>
                  
                </div>
                
              </div>

              {/* Карта (55-60%) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', order: 1 }}>
                <div style={{ borderRadius: '4px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', flex: 1, minHeight: '400px' }}>
                  {/* Маркер установлен на г. Липецк, ул. Советская, д. 35 (БЦ «Антарес», 52.604024, 39.585799) */}
                  <MapWidget />
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <a href="https://yandex.ru/maps/?pt=39.585799,52.604024&z=17&text=г.+Липецк,+ул.+Советская,+д.+35" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '12px 24px', fontSize: '14px', borderColor: 'rgba(23, 50, 77, 0.2)', color: 'var(--color-deep-blue)', display: 'inline-block' }}>
                    Построить маршрут до офиса
                  </a>
                </div>
              </div>

            </div>

            {/* Фотографии здания и входа в офис */}
            <div style={{ marginTop: '48px' }}>
              <h3 style={{ fontSize: '22px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', marginBottom: '24px' }}>
                Фотографии здания и входа в офис
              </h3>
              
              <div className="grid grid-2" style={{ gap: '24px' }}>
                {/* 1. Фасад здания БЦ "Антарес" */}
                <div style={{ background: 'var(--color-white)', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(23, 50, 77, 0.06)', border: '1px solid rgba(23, 50, 77, 0.08)' }}>
                  <div style={{ height: '280px', overflow: 'hidden', position: 'relative' }}>
                    <img 
                      src="/images/office-building.jpg" 
                      alt="Здание бизнес-центра Антарес в Липецке" 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '20px' }}>
                    <div style={{ fontWeight: 600, color: 'var(--color-deep-blue)', fontSize: '16px', marginBottom: '6px' }}>
                      Бизнес-центр «Антарес»
                    </div>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                      Главный вход с улицы Советской. Наш офис № 213 расположен на 2 этаже.
                    </p>
                  </div>
                </div>

                {/* 2. Вход в офис "Де-Юре" */}
                <div style={{ background: 'var(--color-white)', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(23, 50, 77, 0.06)', border: '1px solid rgba(23, 50, 77, 0.08)' }}>
                  <div style={{ height: '280px', overflow: 'hidden', position: 'relative' }}>
                    <img 
                      src="/images/office-entrance.jpg" 
                      alt="Вход в офис 213 юридической компании Де-Юре" 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '20px' }}>
                    <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-deep-blue)', marginBottom: '4px' }}>
                      Вход в офис «Де-Юре»
                    </div>
                    <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                      2-й этаж, офис 213 — вывеска над стеклянными дверьми
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </section>

        {/* 3. Форма и Реквизиты */}
        <section className="section" style={{ padding: '80px 0', background: 'var(--color-white)' }}>
          <div className="container">
            <div className="contacts-form-req-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '60px', alignItems: 'flex-start' }}>
              
              {/* Левая колонка: Реквизиты */}
              <div>
                <h2 style={{ fontSize: '32px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', margin: '0 0 32px 0' }}>
                  Реквизиты
                </h2>
                
                <div style={{ padding: '32px', background: 'var(--color-white)', border: '1px solid rgba(23, 50, 77, 0.12)', borderRadius: '4px', boxShadow: '0 8px 16px -2px rgba(23, 50, 77, 0.12), 0 2px 4px -1px rgba(23, 50, 77, 0.08)', fontSize: '15px', lineHeight: 1.6, color: 'var(--color-deep-blue)' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
                    <div>
                      <strong style={{ fontSize: '16px', color: 'var(--color-deep-blue)', display: 'block', marginBottom: '4px' }}>
                        ООО ЮК «Де-Юре»
                      </strong>
                      <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginBottom: '12px' }}>
                        ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ ЮРИДИЧЕСКАЯ КОМПАНИЯ "ДЕ-ЮРЕ"
                      </div>
                      <span style={{ color: 'var(--color-text-secondary)' }}>ИНН / КПП:</span> 4800009680 / 480001001<br />
                      <span style={{ color: 'var(--color-text-secondary)' }}>ОГРН:</span> 1234800008464<br />
                      <span style={{ color: 'var(--color-text-secondary)' }}>Директор:</span> Бобкин Аркадий Евгеньевич
                    </div>

                    <div style={{ borderTop: '1px solid rgba(23, 50, 77, 0.08)', paddingTop: '16px' }}>
                      <strong style={{ display: 'block', marginBottom: '4px' }}>Адреса:</strong>
                      <span style={{ color: 'var(--color-text-secondary)' }}>Юридический:</span> 398902, Липецкая область, г. о. город Липецк, г. Липецк, ул. Юношеская, влд. 46Б, помещение 1<br />
                      <span style={{ color: 'var(--color-text-secondary)' }}>Фактический:</span> 398059, г. Липецк, ул. Советская, д. 35, офис 213
                    </div>

                    <div style={{ borderTop: '1px solid rgba(23, 50, 77, 0.08)', paddingTop: '16px' }}>
                      <strong style={{ display: 'block', marginBottom: '4px' }}>Банковские реквизиты:</strong>
                      <span style={{ color: 'var(--color-text-secondary)' }}>Банк:</span> АО "АЛЬФА-БАНК"<br />
                      <span style={{ color: 'var(--color-text-secondary)' }}>Р/с:</span> 40702810902930008123<br />
                      <span style={{ color: 'var(--color-text-secondary)' }}>К/с:</span> 30101810200000000593<br />
                      <span style={{ color: 'var(--color-text-secondary)' }}>БИК:</span> 044525593 | <span style={{ color: 'var(--color-text-secondary)' }}>ИНН Банка:</span> 7728168971
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <a 
                      href="/docs/kartochka-predpriyatiya.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn" 
                      style={{ 
                        padding: '12px 20px', 
                        fontSize: '14px', 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        gap: '8px' 
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      Открыть карточку
                    </a>

                    <a 
                      href="/docs/kartochka-predpriyatiya.pdf" 
                      download="kartochka-predpriyatiya-dejure.pdf" 
                      className="btn btn-outline" 
                      style={{ 
                        padding: '12px 20px', 
                        fontSize: '14px', 
                        borderColor: 'rgba(23, 50, 77, 0.2)', 
                        color: 'var(--color-deep-blue)', 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        gap: '8px' 
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                      </svg>
                      Скачать (PDF)
                    </a>
                  </div>
                </div>
              </div>

              {/* Правая колонка: Форма */}
              <div>
                <h2 style={{ fontSize: '32px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', margin: '0 0 32px 0' }}>
                  Написать нам
                </h2>
                <div style={{ gridColumn: '1 / -1', background: 'var(--gradient-cream)', padding: '24px', borderRadius: '4px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                  <ContactsForm title="" subtitle="" />
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
      <Footer />
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 991px) {
          .how-to-get-grid {
            grid-template-columns: 1fr !important;
          }
          .contacts-form-req-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </main>
  );
}

