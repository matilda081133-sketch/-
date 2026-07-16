'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Как происходит первичная консультация?',
    answer: 'На первичной консультации мы детально анализируем вашу ситуацию, изучаем имеющиеся документы и предлагаем предварительную стратегию защиты ваших интересов. Консультация может проходить как в нашем офисе, так и в онлайн-формате.'
  },
  {
    question: 'Какие гарантии вы предоставляете?',
    answer: 'В юриспруденции невозможно гарантировать 100% исход дела, так как решение принимает суд. Однако мы гарантируем абсолютную прозрачность, максимальное вовлечение в ваш процесс и использование всех законных механизмов для достижения наилучшего результата.'
  },
  {
    question: 'Возможна ли поэтапная оплата услуг?',
    answer: 'Да, мы понимаем финансовую нагрузку на наших доверителей и предлагаем гибкую систему оплаты. График платежей фиксируется в договоре и обычно привязан к конкретным этапам выполнения работ.'
  },
  {
    question: 'Кто будет непосредственно вести мое дело?',
    answer: 'За каждым клиентом закрепляется профильный юрист, специализирующийся именно на вашей категории споров. При этом сложные и нестандартные дела всегда обсуждаются коллегиально с привлечением старших партнеров компании.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section bg-cream">
      <div className="container">
        <div className="grid grid-2" style={{ gap: '60px', alignItems: 'flex-start' }}>
          <div>
            <h2 style={{ fontSize: '3rem', marginBottom: '20px', marginTop: 0 }}>Частые вопросы</h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', maxWidth: '400px', marginBottom: '40px' }}>
              Мы собрали ответы на самые распространенные вопросы наших доверителей, чтобы сэкономить ваше время.
            </p>
            
            {/* Trust Trigger / Rating */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '20px', 
              padding: '24px', 
              backgroundColor: 'var(--color-white)',
              borderLeft: '4px solid var(--color-primary)',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{ display: 'flex', gap: '4px' }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} width="20" height="20" viewBox="0 0 24 24" fill="#D4AF37" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                ))}
              </div>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--color-deep-blue)', fontSize: '1.1rem', marginBottom: '2px' }}>
                  Рейтинг 5.0
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                  На основе независимых оценок доверителей
                </div>
              </div>
            </div>
          </div>
          
          <div className="faq-accordion">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  style={{ 
                    borderBottom: '1px solid var(--color-border)',
                    borderTop: index === 0 ? '1px solid var(--color-border)' : 'none',
                  }}
                >
                  <button 
                    onClick={() => toggleFAQ(index)}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      background: 'none',
                      border: 'none',
                      padding: '30px 0',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                      color: 'var(--color-deep-blue)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      transition: 'color 0.3s ease'
                    }}
                  >
                    <span>{faq.question}</span>
                    <span 
                      style={{ 
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '32px',
                        height: '32px',
                        border: '1px solid var(--color-deep-blue)',
                        borderRadius: '0', /* Strict square */
                        position: 'relative',
                        transition: 'transform 0.4s ease',
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        flexShrink: 0,
                        marginLeft: '20px'
                      }}
                    >
                      {/* Plus icon made with strict lines */}
                      <span style={{ position: 'absolute', width: '12px', height: '2px', backgroundColor: 'var(--color-deep-blue)' }} />
                      <span style={{ position: 'absolute', width: '2px', height: '12px', backgroundColor: 'var(--color-deep-blue)' }} />
                    </span>
                  </button>
                  
                  <div 
                    style={{ 
                      maxHeight: isOpen ? '500px' : '0',
                      overflow: 'hidden',
                      transition: 'max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease',
                      opacity: isOpen ? 1 : 0
                    }}
                  >
                    <div style={{ paddingBottom: '30px', color: 'var(--color-text-secondary)', lineHeight: 1.7, fontSize: '1.05rem' }}>
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
