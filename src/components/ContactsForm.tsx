"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import PhoneInput from './PhoneInput';

export default function ContactsForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="card" style={{ padding: '60px 40px', borderRadius: '0', background: 'var(--color-white)', boxShadow: '0 20px 40px rgba(23, 50, 77, 0.08)', textAlign: 'center' }}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-deep-blue)" strokeWidth="1.5" strokeLinecap="square" style={{ marginBottom: '16px' }}>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <h3 style={{ fontSize: '28px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', margin: '0 0 12px 0' }}>Заявка отправлена</h3>
        <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '16px', lineHeight: 1.5 }}>
          Мы свяжемся с вами в течение 15 минут в рабочее время.
        </p>
      </div>
    );
  }

  return (
    <div style={{ 
      padding: '48px', 
      background: 'var(--color-cream)', 
      border: '1px solid rgba(23, 50, 77, 0.05)',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <h3 style={{ fontSize: '32px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', margin: '0 0 16px 0', lineHeight: 1.2 }}>
        Написать нам
      </h3>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: '32px', fontSize: '15px', lineHeight: 1.6 }}>
        Заполните форму ниже, и мы перезвоним вам в течение 15 минут в рабочее время для обсуждения деталей.
      </p>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <input 
          type="text" 
          required 
          placeholder="Ваше имя" 
          style={{ 
            padding: '16px 20px', 
            border: '1px solid rgba(23, 50, 77, 0.1)', 
            borderRadius: '0', 
            fontSize: '16px', 
            transition: 'border-color 0.3s', 
            outline: 'none', 
            background: 'var(--color-white)', 
            fontFamily: 'inherit' 
          }} 
        />
        
        <PhoneInput />
        
        <textarea 
          id="message" 
          rows={4}
          placeholder="Кратко опишите вашу ситуацию (необязательно)"
          style={{ 
            padding: '16px 20px', 
            border: '1px solid rgba(23, 50, 77, 0.1)', 
            borderRadius: '0', 
            fontSize: '16px',
            outline: 'none',
            fontFamily: 'inherit',
            resize: 'vertical',
            background: 'var(--color-white)',
            transition: 'border-color 0.3s'
          }} 
        />
        
        <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '18px', fontSize: '16px', marginTop: '16px' }}>
          Оставить заявку
        </button>
        
        <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', marginTop: '4px' }}>
          <input type="checkbox" required style={{ marginTop: '4px', accentColor: 'var(--color-primary)' }} />
          <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
            Я даю согласие на <Link href="/privacy" className="link-animated" style={{ fontSize: '13px', color: 'var(--color-primary)' }}>обработку персональных данных</Link>
          </span>
        </label>
      </form>
    </div>
  );
}
