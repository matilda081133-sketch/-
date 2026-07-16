'use client';

import React, { useState } from 'react';

const faqData = [
  {
    question: 'Вы даете гарантию на выигрыш дела в суде?',
    answer: 'По закону (ст. 10 Кодекса профессиональной этики адвоката) мы не имеем права давать 100% гарантию на решение суда. Однако мы гарантируем, что честно оценим перспективы на первой бесплатной консультации. Если дело заведомо проигрышное, мы прямо скажем об этом и не будем брать с вас деньги за пустые обещания.'
  },
  {
    question: 'Могут ли возникнуть скрытые доплаты в процессе работы?',
    answer: 'Нет. Стоимость наших услуг фиксируется в официальном договоре после полного анализа вашей ситуации. Мы работаем абсолютно прозрачно — вы заранее знаете итоговую сумму. Никаких внезапных платежей "за дополнительные бумажки" не будет.'
  },
  {
    question: 'Обязательно ли мне присутствовать на судебных заседаниях?',
    answer: 'В 95% случаев — нет. Мы представляем ваши интересы в суде по доверенности или ордеру адвоката. Это позволяет вам сэкономить время, нервы и избежать неприятных встреч со второй стороной конфликта. Всю бюрократическую и судебную рутину мы берем на себя.'
  },
  {
    question: 'Возместят ли мне расходы на ваши услуги?',
    answer: 'Да. Согласно процессуальному законодательству (ГПК и АПК РФ), расходы на оплату услуг представителя взыскиваются судом с проигравшей стороны. Мы всегда заявляем отдельное требование о компенсации судебных издержек, чтобы вернуть потраченные вами средства.'
  },
  {
    question: 'Как быстро вы можете приступить к работе?',
    answer: 'В экстренных случаях (например, при внезапной проверке бизнеса или задержании) наши адвокаты готовы выехать круглосуточно. По остальным делам (гражданские, арбитражные споры) мы приступаем к работе в день подписания договора.'
  }
];

export default function FAQBlock() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Откроем первый по умолчанию для стиля

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section" style={{ padding: '100px 0', backgroundColor: '#F9FAFB' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ 
            fontSize: '36px', 
            fontFamily: 'var(--font-serif)', 
            color: 'var(--color-deep-blue)',
            marginBottom: '16px'
          }}>
            Часто задаваемые вопросы
          </h2>
          <p style={{ color: 'rgba(23, 50, 77, 0.6)', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
            Прямые и честные ответы на вопросы, которые волнуют наших доверителей.
          </p>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="faq-card"
                style={{ 
                  background: 'var(--color-white)', 
                  padding: '10px 30px', 
                  borderRadius: 'var(--radius-lg)', 
                  boxShadow: 'var(--shadow-sm)', 
                  transition: 'var(--transition)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <button 
                  onClick={() => toggle(index)}
                  style={{ 
                    width: '100%', 
                    padding: '24px 0', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    color: isOpen ? 'var(--color-primary)' : 'var(--color-deep-blue)',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!isOpen) e.currentTarget.style.color = 'var(--color-primary)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isOpen) e.currentTarget.style.color = 'var(--color-deep-blue)';
                  }}
                >
                  <span style={{ 
                    fontSize: '20px', 
                    fontWeight: 'bold', 
                    fontFamily: 'var(--font-serif)',
                    lineHeight: 1.4,
                    paddingRight: '20px'
                  }}>
                    {item.question}
                  </span>
                  <div style={{ 
                    position: 'relative',
                    width: '24px',
                    height: '24px',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {/* Горизонтальная линия плюса/минуса */}
                    <div style={{
                      position: 'absolute',
                      width: '100%',
                      height: '2px',
                      backgroundColor: 'currentColor',
                      transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                    }} />
                    {/* Вертикальная линия плюса (исчезает при открытии) */}
                    <div style={{
                      position: 'absolute',
                      width: '2px',
                      height: '100%',
                      backgroundColor: 'currentColor',
                      transform: isOpen ? 'rotate(90deg) scaleY(0)' : 'rotate(0deg) scaleY(1)',
                      transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                    }} />
                  </div>
                </button>
                
                <div style={{ 
                  display: 'grid',
                  gridTemplateRows: isOpen ? '1fr' : '0fr',
                  transition: 'grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}>
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{ 
                      paddingBottom: '24px', 
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.7,
                      fontSize: '16px',
                      paddingRight: '44px'
                    }}>
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .faq-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md) !important;
        }
      `}</style>
    </section>
  );
}
