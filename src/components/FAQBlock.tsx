'use client';

import { useState } from 'react';

export default function FAQBlock() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { q: 'Как проходит первое обращение?', a: 'Ответ будет подготовлен после согласования порядка работы с юристами.' },
    { q: 'Какие документы нужно подготовить?', a: 'Ответ будет подготовлен после согласования порядка работы с юристами.' },
    { q: 'Как определяется стоимость юридической помощи?', a: 'Ответ будет подготовлен после согласования порядка работы с юристами.' },
    { q: 'Кто будет вести мое дело?', a: 'Ответ будет подготовлен после согласования порядка работы с юристами.' },
    { q: 'Можно ли подключить адвоката или нескольких специалистов?', a: 'Ответ будет подготовлен после согласования порядка работы с юристами.' },
    { q: 'Какие гарантии может дать юридическая компания?', a: 'Ответ будет подготовлен после согласования порядка работы с юристами.' },
    { q: 'Как я буду узнавать о ходе дела?', a: 'Ответ будет подготовлен после согласования порядка работы с юристами.' },
    { q: 'Можно ли работать дистанционно?', a: 'Ответ будет подготовлен после согласования порядка работы с юристами.' },
    { q: 'Как обеспечивается конфиденциальность?', a: 'Ответ будет подготовлен после согласования порядка работы с юристами.' },
    { q: 'Работаете ли вы за пределами Липецка и области?', a: 'Ответ будет подготовлен после согласования порядка работы с юристами.' }
  ];

  return (
    <section className="section bg-cream" style={{ padding: '120px 0', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <div className="grid grid-2" style={{ gap: '80px', alignItems: 'flex-start' }}>
          
          {/* Left Side: Sticky Header & Info */}
          <div className="reveal-on-scroll" style={{ position: 'sticky', top: '120px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
                F.A.Q.
              </span>
            </div>
            <h2 style={{ fontSize: '48px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '32px', lineHeight: 1.1 }}>
              Ответы на<br/>важные вопросы
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', lineHeight: 1.6, marginBottom: '40px', maxWidth: '400px' }}>
              Мы собрали самые частые вопросы наших доверителей. Если вы не нашли ответ на свой вопрос — свяжитесь с нами для индивидуальной консультации.
            </p>
            <a href="#consultation" className="btn btn-outline" style={{ display: 'inline-flex' }}>Задать свой вопрос</a>
          </div>

          {/* Right Side: Accordion */}
          <div className="reveal-on-scroll delay-200" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, index) => (
              <div key={index} style={{
                background: 'var(--color-white)',
                border: '1px solid var(--color-border)',
                overflow: 'hidden',
                borderRadius: '0',
                transition: 'var(--transition)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 30px rgba(23, 50, 77, 0.05)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
              >
                <button 
                  onClick={() => toggle(index)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '32px',
                    background: 'transparent',
                    border: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: 'var(--color-deep-blue)',
                    fontFamily: 'var(--font-sans)',
                    transition: 'var(--transition)'
                  }}
                >
                  <span style={{ paddingRight: '20px', lineHeight: 1.4 }}>{faq.q}</span>
                  <span style={{ 
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: openIndex === index ? 'var(--color-primary)' : 'rgba(23, 50, 77, 0.03)',
                    color: openIndex === index ? 'var(--color-white)' : 'var(--color-primary)',
                    transition: 'all 0.3s ease',
                    flexShrink: 0
                  }}>
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                
                <div style={{
                  maxHeight: openIndex === index ? '300px' : '0',
                  opacity: openIndex === index ? 1 : 0,
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  padding: openIndex === index ? '0 32px 32px 32px' : '0 32px',
                  color: 'var(--color-text-secondary)',
                  lineHeight: '1.6',
                  fontSize: '16px'
                }}>
                  <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '24px' }}>
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
