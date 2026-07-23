"use client";

import React, { useState } from 'react';

export default function ContactsForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ padding: '40px', background: 'var(--color-cream)', border: '1px solid rgba(23, 50, 77, 0.1)', textAlign: 'center' }}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-deep-blue)" strokeWidth="1.5" strokeLinecap="square" style={{ marginBottom: '16px' }}>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <h3 style={{ fontSize: '24px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', margin: '0 0 12px 0' }}>Заявка отправлена</h3>
        <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: 1.5 }}>
          Мы свяжемся с вами в ближайшее время для уточнения деталей.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h3 style={{ fontSize: '28px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', margin: '0 0 8px 0' }}>Написать нам</h3>
      <p style={{ margin: '0 0 16px 0', color: 'var(--color-text-secondary)', fontSize: '15px' }}>Заполните форму ниже, и мы перезвоним.</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label htmlFor="name" style={{ fontSize: '13px', fontWeight: 'bold', color: 'var(--color-deep-blue)' }}>Ваше имя</label>
        <input 
          type="text" 
          id="name" 
          required 
          placeholder="Иван Иванов"
          style={{ 
            padding: '12px 16px', 
            border: '1px solid rgba(23, 50, 77, 0.2)', 
            borderRadius: '0', 
            fontSize: '16px',
            outline: 'none',
            fontFamily: 'inherit'
          }} 
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label htmlFor="phone" style={{ fontSize: '13px', fontWeight: 'bold', color: 'var(--color-deep-blue)' }}>Телефон</label>
        <input 
          type="tel" 
          id="phone" 
          required 
          placeholder="+7 (999) 000-00-00"
          style={{ 
            padding: '12px 16px', 
            border: '1px solid rgba(23, 50, 77, 0.2)', 
            borderRadius: '0', 
            fontSize: '16px',
            outline: 'none',
            fontFamily: 'inherit'
          }} 
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label htmlFor="message" style={{ fontSize: '13px', fontWeight: 'bold', color: 'var(--color-deep-blue)' }}>Сообщение (необязательно)</label>
        <textarea 
          id="message" 
          rows={4}
          placeholder="Кратко опишите вашу ситуацию..."
          style={{ 
            padding: '12px 16px', 
            border: '1px solid rgba(23, 50, 77, 0.2)', 
            borderRadius: '0', 
            fontSize: '16px',
            outline: 'none',
            fontFamily: 'inherit',
            resize: 'vertical'
          }} 
        />
      </div>

      <label style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', cursor: 'pointer', marginTop: '8px' }}>
        <input type="checkbox" required style={{ marginTop: '4px', cursor: 'pointer' }} />
        <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
          Нажимая кнопку, вы даете согласие на обработку персональных данных в соответствии с <a href="#" style={{ color: 'var(--color-gold)', textDecoration: 'none' }}>политикой конфиденциальности</a>
        </span>
      </label>

      <button type="submit" className="btn btn-primary" style={{ marginTop: '8px', width: '100%' }}>
        Отправить заявку
      </button>
    </form>
  );
}
