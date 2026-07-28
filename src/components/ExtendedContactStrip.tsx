import React from 'react';

export default function ExtendedContactStrip() {
  return (
    <section style={{ 
      background: 'var(--color-deep-blue)', 
      color: 'var(--color-white)', 
      padding: '60px 0' 
    }}>
      <div className="container">
        <div className="grid grid-2" style={{ gap: '40px', alignItems: 'stretch' }}>
          
          {/* 1. Срочная ситуация */}
          <div style={{ display: 'flex', flexDirection: 'column', background: 'rgba(255, 255, 255, 0.05)', padding: '32px', borderRadius: '4px', borderTop: '4px solid #D9534F' }}>
            <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', margin: '0 0 16px 0', color: 'var(--color-white)' }}>
              Если помощь нужна прямо сейчас
            </h3>
            <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.8)', margin: '0 0 24px 0', lineHeight: 1.6, flexGrow: 1 }}>
              Военнослужащего задержали или его местонахождение неизвестно? Позвоните адвокату и сообщите все, что известно о ситуации.
            </p>
            <div>
              <a href="tel:+79103503111" style={{ fontSize: '22px', fontWeight: 'bold', color: 'var(--color-white)', textDecoration: 'none', display: 'block', marginBottom: '16px' }}>
                +7 (910) 350-31-11
              </a>
              <a href="tel:+79103503111" className="btn btn-primary" style={{ padding: '12px 24px', fontSize: '15px', display: 'inline-block', width: '100%', textAlign: 'center' }}>
                Позвонить адвокату
              </a>
            </div>
          </div>

          {/* 2. Если ситуации нет в списке & Дистанционно */}
          <div style={{ display: 'flex', flexDirection: 'column', background: 'rgba(255, 255, 255, 0.05)', padding: '32px', borderRadius: '4px', borderTop: '4px solid var(--color-gold)' }}>
            <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', margin: '0 0 16px 0', color: 'var(--color-white)' }}>
              Если вашей ситуации нет в списке
            </h3>
            <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.8)', margin: '0 0 24px 0', lineHeight: 1.6 }}>
              Необязательно самостоятельно определять вид услуги. Опишите обстоятельства — мы разберём ситуацию, уточним необходимые документы и определим, какой специалист должен подключиться.
            </p>
            <div style={{ marginBottom: '32px' }}>
              <a href="#form" className="btn btn-light" style={{ padding: '12px 24px', fontSize: '15px', display: 'inline-block', width: 'auto', background: 'rgba(255,255,255,0.1)', color: 'var(--color-white)', border: '1px solid rgba(255,255,255,0.3)' }}>
                Описать ситуацию
              </a>
            </div>
            
            <h3 style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', margin: '0 0 16px 0', color: 'var(--color-white)' }}>
              Что можно сделать дистанционно
            </h3>
            <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.8)', margin: '0', lineHeight: 1.6, flexGrow: 1 }}>
              Провести первичную консультацию, изучить документы, подготовить обращения и жалобы, определить порядок дальнейших действий. Возможность полностью дистанционной работы зависит от характера дела и необходимости личного участия адвоката или юриста.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
