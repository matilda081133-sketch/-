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
  subtitle = "Заполните форму ниже, и мы перезвоним вам в течение 15 минут в рабочее время для обсуждения деталей."
}: ContactsFormProps = {}) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ 
        padding: '64px 48px', 
        background: 'linear-gradient(to right, var(--color-deep-blue) 0%, #1c3c5d 100%)', 
        border: '1px solid rgba(200, 169, 126, 0.3)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '400px'
      }}>
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold, #C8A97E)" strokeWidth="1.5" strokeLinecap="square" style={{ marginBottom: '24px' }}>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <h3 style={{ fontSize: '32px', color: 'var(--color-white)', fontFamily: 'var(--font-serif)', margin: '0 0 16px 0', lineHeight: 1.2 }}>Заявка отправлена</h3>
        <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.7)', fontSize: '16px', lineHeight: 1.6, maxWidth: '300px' }}>
          Мы свяжемся с вами в течение 15 минут в рабочее время для уточнения деталей.
        </p>
      </div>
    );
  }

  return (
    <div style={{ 
      padding: '40px', 
      background: 'linear-gradient(to right, var(--color-deep-blue) 0%, #1c3c5d 100%)', 
      border: '1px solid rgba(255, 255, 255, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 30px 60px rgba(23, 50, 77, 0.2)'
    }}>
      {title && (
        <h3 style={{ fontSize: '32px', color: 'var(--color-white)', fontFamily: 'var(--font-serif)', margin: '0 0 16px 0', lineHeight: 1.2 }}>
          {title}
        </h3>
      )}
      {subtitle && (
        <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '32px', fontSize: '15px', lineHeight: 1.6 }}>
          {subtitle}
        </p>
      )}
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <input 
          type="text" 
          required 
          placeholder="Ваше имя" 
          style={{ 
            padding: '16px 20px', 
            border: '1px solid rgba(255, 255, 255, 0.2)', 
            borderRadius: '0', 
            fontSize: '16px', 
            transition: 'border-color 0.3s', 
            outline: 'none', 
            background: 'var(--color-white)', 
            color: 'var(--color-deep-blue)',
            fontFamily: 'inherit' 
          }} 
          onFocus={(e) => e.target.style.borderColor = 'var(--color-gold, #C8A97E)'}
          onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'}
        />
        
        <PhoneInput 
          style={{ 
            padding: '16px 20px', 
            border: '1px solid rgba(255, 255, 255, 0.2)', 
            borderRadius: '0', 
            fontSize: '16px', 
            transition: 'border-color 0.3s', 
            outline: 'none', 
            background: 'var(--color-white)', 
            color: 'var(--color-deep-blue)',
            fontFamily: 'inherit'
          }} 
        />
        
        <textarea 
          id="message" 
          rows={4}
          placeholder="Кратко опишите вашу ситуацию"
          style={{ 
            padding: '16px 20px', 
            border: '1px solid rgba(255, 255, 255, 0.2)', 
            borderRadius: '0', 
            fontSize: '16px',
            outline: 'none',
            fontFamily: 'inherit',
            resize: 'vertical',
            background: 'var(--color-white)',
            color: 'var(--color-deep-blue)',
            transition: 'border-color 0.3s'
          }} 
          onFocus={(e) => e.target.style.borderColor = 'var(--color-gold, #C8A97E)'}
          onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'}
        />
        
        <button type="submit" style={{ 
          width: '100%', 
          padding: '18px', 
          fontSize: '16px', 
          marginTop: '16px',
          background: 'var(--color-gold, #C8A97E)',
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
        
        <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', marginTop: '4px' }}>
          <input type="checkbox" required style={{ marginTop: '4px', accentColor: 'var(--color-gold, #C8A97E)' }} />
          <span style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.5)', lineHeight: 1.4 }}>
            Я даю согласие на <Link href="/privacy" style={{ fontSize: '13px', color: 'var(--color-gold, #C8A97E)', textDecoration: 'none' }}>обработку персональных данных</Link>
          </span>
        </label>
        
        <div style={{ marginTop: '8px', fontSize: '13px', color: 'rgba(255, 255, 255, 0.5)', lineHeight: 1.4, textAlign: 'left' }}>
          * Если вы оставите заявку вечером или в выходной день, мы перезвоним вам в ближайшее рабочее время.
        </div>
      </form>
    </div>
  );
}
