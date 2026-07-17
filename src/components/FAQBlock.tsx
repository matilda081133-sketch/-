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
    <section className="section bg-cream">
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '40px', textAlign: 'center' }}>
          Частые вопросы
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, index) => (
            <div key={index} style={{
              background: 'var(--color-white)',
              border: '1px solid var(--color-border)',
              overflow: 'hidden'
            }}>
              <button 
                onClick={() => toggle(index)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '24px 32px',
                  background: 'transparent',
                  border: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: 'var(--color-deep-blue)',
                  fontFamily: 'var(--font-sans)'
                }}
              >
                {faq.q}
                <span style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: openIndex === index ? 'var(--color-primary)' : 'rgba(23, 50, 77, 0.05)',
                  color: openIndex === index ? 'var(--color-white)' : 'var(--color-primary)',
                  transition: 'all 0.3s ease'
                }}>
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              <div style={{
                maxHeight: openIndex === index ? '200px' : '0',
                opacity: openIndex === index ? 1 : 0,
                overflow: 'hidden',
                transition: 'all 0.3s ease-in-out',
                padding: openIndex === index ? '0 32px 24px 32px' : '0 32px',
                color: 'var(--color-text-secondary)',
                lineHeight: '1.6'
              }}>
                <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '16px' }}>
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
