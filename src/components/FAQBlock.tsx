'use client';

export default function FAQBlock() {
  const faqs = [
    { q: 'Как проходит первое обращение?', a: 'Ответ будет добавлен после согласования с профильным юристом.' },
    { q: 'Какие документы нужно подготовить?', a: 'Ответ будет добавлен после согласования с профильным юристом.' },
    { q: 'Как определяется стоимость юридической помощи?', a: 'Ответ будет добавлен после согласования с профильным юристом.' },
    { q: 'Кто будет вести мое дело?', a: 'Ответ будет добавлен после согласования с профильным юристом.' },
    { q: 'Можно ли подключить адвоката или нескольких специалистов?', a: 'Ответ будет добавлен после согласования с профильным юристом.' },
    { q: 'Какие гарантии может дать юридическая компания?', a: 'Ответ будет добавлен после согласования с профильным юристом.' },
    { q: 'Как я буду узнавать о ходе дела?', a: 'Ответ будет добавлен после согласования с профильным юристом.' },
    { q: 'Можно ли работать дистанционно?', a: 'Ответ будет добавлен после согласования с профильным юристом.' },
    { q: 'Как обеспечивается конфиденциальность?', a: 'Ответ будет добавлен после согласования с профильным юристом.' },
    { q: 'Работаете ли вы за пределами Липецка и области?', a: 'Ответ будет добавлен после согласования с профильным юристом.' }
  ];

  return (
    <section className="section bg-white" style={{ padding: '80px 0', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <div className="grid grid-2" style={{ gap: '80px', alignItems: 'flex-start' }}>
          
          {/* Left Side: Sticky Header & Info */}
          <div className="reveal-on-scroll" style={{ position: 'sticky', top: '120px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-primary)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
                Частые вопросы клиентов
              </span>
            </div>
            <h2 style={{ fontSize: '48px', fontFamily: 'var(--font-serif)', color: 'var(--color-deep-blue)', marginBottom: '32px', lineHeight: 1.1 }}>
              Ответы на важные вопросы
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', lineHeight: 1.6, marginBottom: '40px', maxWidth: '400px' }}>
              Мы собрали самые частые вопросы наших доверителей. Если вы не нашли ответ на свой вопрос — свяжитесь с нами для индивидуальной консультации.
            </p>
            <a href="#consultation" className="btn btn-outline" style={{ display: 'inline-flex' }}>Задать свой вопрос</a>
          </div>

          {/* Right Side: Accordion */}
          <div className="reveal-on-scroll delay-200" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, index) => (
              <details key={index} className="faq-details" style={{
                background: 'linear-gradient(135deg, var(--color-deep-blue) 0%, var(--color-accent) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0',
                transition: 'var(--transition)',
                color: 'var(--color-white)'
              }}>
                <summary style={{
                  padding: '32px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  fontSize: '20px',
                  fontWeight: '500',
                  fontFamily: 'var(--font-sans)',
                  listStyle: 'none'
                }} className="faq-summary">
                  <span style={{ paddingRight: '20px', lineHeight: 1.4 }}>{faq.q}</span>
                  <span className="faq-icon" style={{ 
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s ease',
                    flexShrink: 0
                  }}>
                    +
                  </span>
                </summary>
                
                <div style={{
                  padding: '0 32px 32px 32px',
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.6',
                  fontSize: '16px'
                }}>
                  <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '24px' }}>
                    {faq.a}
                  </div>
                </div>
              </details>
            ))}
          </div>
          
        </div>
      </div>
      <style jsx>{`
        .faq-summary::-webkit-details-marker {
          display: none;
        }
        details[open] .faq-icon {
          background: rgba(255, 255, 255, 0.1);
          transform: rotate(45deg);
        }
        details:hover {
          box-shadow: 0 20px 40px rgba(16, 39, 59, 0.15);
        }
      `}</style>
    </section>
  );
}
