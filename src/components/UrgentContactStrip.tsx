import React from 'react';

export default function UrgentContactStrip() {
  return (
    <section style={{ 
      background: 'var(--color-deep-blue)', 
      color: 'var(--color-white)', 
      padding: '32px 0' 
    }}>
      <div className="container">
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          gap: '24px' 
        }}>
          
          <div style={{ flex: '1 1 500px' }}>
            <h2 style={{ fontSize: '24px', fontFamily: 'var(--font-serif)', margin: '0 0 8px 0', color: 'var(--color-white)' }}>
              Военнослужащего задержали или его местонахождение неизвестно?
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.8)', margin: 0 }}>
              Позвоните адвокату и сообщите все, что известно о ситуации.
            </p>
          </div>
          
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            alignItems: 'center', 
            gap: '24px' 
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <a 
                href="tel:+79103503111" 
                style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--color-white)', textDecoration: 'none' }}
              >
                +7 (910) 350-31-11
              </a>
            </div>
            
            <a 
              href="tel:+79103503111" 
              className="btn btn-primary" 
              style={{ padding: '12px 24px', fontSize: '15px' }}
              data-analytics="military_urgent_call_click"
            >
              Позвонить адвокату
            </a>
            
            <a 
              href="#form" 
              style={{ color: 'var(--color-gold)', textDecoration: 'underline', fontSize: '15px', fontWeight: 500 }}
            >
              Описать ситуацию
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
