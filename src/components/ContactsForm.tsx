"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import PhoneInput from './PhoneInput';

interface ContactsFormProps {
  title?: string;
  subtitle?: string;
}

export default function ContactsForm({ 
  title = "Написать нам", 
  subtitle = "Оставьте имя и номер телефона. При желании кратко опишите ситуацию — это поможет юристу подготовиться к разговору."
}: ContactsFormProps = {}) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ 
        padding: '32px 24px', 
        background: 'var(--color-white)', 
        border: '1px solid rgba(23, 50, 77, 0.1)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '300px'
      }}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="1.5" strokeLinecap="square" style={{ marginBottom: '16px' }}>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <h3 style={{ fontSize: '24px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', margin: '0 0 12px 0', lineHeight: 1.2 }}>Заявка отправлена</h3>
        <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: 1.6, maxWidth: '280px' }}>
          Мы свяжемся с вами для уточнения деталей.
        </p>
      </div>
    );
  }

  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column'
    }}>
      {title && (
        <h3 style={{ fontSize: '28px', color: 'var(--color-deep-blue)', fontFamily: 'var(--font-serif)', margin: '0 0 16px 0', lineHeight: 1.2 }}>
          {title}
        </h3>
      )}
      {subtitle && (
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '24px', fontSize: '15px', lineHeight: 1.6 }}>
          {subtitle}
        </p>
      )}
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <input 
          type="text" 
          required 
          placeholder="Ваше имя" 
          style={{ 
            padding: '14px 16px', 
            border: '1px solid rgba(23, 50, 77, 0.2)', 
            borderRadius: '0', 
            fontSize: '15px', 
            transition: 'border-color 0.3s', 
            outline: 'none', 
            background: 'var(--color-white)', 
            color: 'var(--color-deep-blue)',
            fontFamily: 'inherit' 
          }} 
          onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'}
          onBlur={(e) => e.target.style.borderColor = 'rgba(23, 50, 77, 0.2)'}
        />
        
        <PhoneInput 
          style={{ 
            padding: '14px 16px', 
            border: '1px solid rgba(23, 50, 77, 0.2)', 
            borderRadius: '0', 
            fontSize: '15px', 
            transition: 'border-color 0.3s', 
            outline: 'none', 
            background: 'var(--color-white)', 
            color: 'var(--color-deep-blue)',
            fontFamily: 'inherit'
          }} 
        />
        
        <textarea 
          id="message" 
          rows={3}
          placeholder="Описание ситуации (необязательно)"
          style={{ 
            padding: '14px 16px', 
            border: '1px solid rgba(23, 50, 77, 0.2)', 
            borderRadius: '0', 
            fontSize: '15px',
            outline: 'none',
            fontFamily: 'inherit',
            resize: 'vertical',
            background: 'var(--color-white)',
            color: 'var(--color-deep-blue)',
            transition: 'border-color 0.3s'
          }} 
          onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'}
          onBlur={(e) => e.target.style.borderColor = 'rgba(23, 50, 77, 0.2)'}
        />
        
        <button type="submit" style={{ 
          width: '100%', 
          padding: '16px', 
          fontSize: '15px', 
          marginTop: '8px',
          background: 'var(--color-gold)',
          color: 'var(--color-white)',
          border: 'none',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'opacity 0.3s'
        }}
        onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'}
        onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
        >
          Оставить заявку
        </button>
        
        <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer', marginTop: '4px' }}>
          <input type="checkbox" required style={{ marginTop: '3px', accentColor: 'var(--color-gold)' }} />
          <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
            Я даю согласие на <Link href="/privacy" style={{ color: 'var(--color-deep-blue)', textDecoration: 'underline' }}>обработку персональных данных</Link>
          </span>
        </label>
        
        <div style={{ marginTop: '8px', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.4, textAlign: 'left' }}>
          * Если вы оставите заявку вечером или в выходной день, мы перезвоним вам в ближайший рабочий день.
        </div>
      </form>
    </div>
  );
}
